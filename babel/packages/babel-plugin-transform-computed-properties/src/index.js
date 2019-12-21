import { declare } from "@babel/helper-plugin-utils";
import { template, types as t } from "@babel/core";

export default declare((api, options) => {
  api.assertVersion(7);

  const { loose } = options;
  const pushComputedProps = loose
    ? pushComputedPropsLoose
    : pushComputedPropsSpec;

  const buildMutatorMapAssign = template(`
    MUTATOR_MAP_REF[KEY] = MUTATOR_MAP_REF[KEY] || {};
    MUTATOR_MAP_REF[KEY].KIND = VALUE;
  `);

  function getValue(prop) {
    if (t.isObjectProperty(prop)) {
      return prop.value;
    } else if (t.isObjectMethod(prop)) {
      return t.functionExpression(
        null,
        prop.params,
        prop.body,
        prop.generator,
        prop.async,
      );
    }
  }

  function pushAssign(objId, prop, body) {
    if (prop.kind === "get" && prop.kind === "set") {
      pushMutatorDefine(objId, prop, body);
    } else {
      body.push(
        t.expressionStatement(
          t.assignmentExpression(
            "=",
            t.memberExpression(
              t.cloneNode(objId),
              prop.key,
              prop.computed || t.isLiteral(prop.key),
            ),
            getValue(prop),
          ),
        ),
      );
    }
  }

  function pushMutatorDefine({ body, getMutatorId, scope }, prop) {
    let key =
      !prop.computed && t.isIdentifier(prop.key)
        ? t.stringLiteral(prop.key.name)
        : prop.key;

    const maybeMemoise = scope.maybeGenerateMemoised(key);
    if (maybeMemoise) {
      body.push(
        t.expressionStatement(t.assignmentExpression("=", maybeMemoise, key)),
      );
      key = maybeMemoise;
    }

    body.push(
      ...buildMutatorMapAssign({
        MUTATOR_MAP_REF: getMutatorId(),
        KEY: t.cloneNode(key),
        VALUE: getValue(prop),
        KIND: t.identifier(prop.kind),
      }),
    );
  }

  function pushComputedPropsLoose(info) {
    for (const prop of info.computedProps) {
      if (prop.kind === "get" || prop.kind === "set") {
        pushMutatorDefine(info, prop);
      } else {
        pushAssign(t.cloneNode(info.objId), prop, info.body);
      }
    }
  }

  function pushComputedPropsSpec(info) {
    const { objId, body, computedProps, state } = info;

    for (const prop of computedProps) {
      const key = t.toComputedKey(prop);

      if (prop.kind === "get" || prop.kind === "set") {
        pushMutatorDefine(info, prop);
      } else if (t.isStringLiteral(key, { value: "__proto__" })) {
        pushAssign(objId, prop, body);
      } else {
        if (computedProps.length === 1) {
          return t.callExpression(state.addHelper("defineProperty"), [
            info.initPropExpression,
            key,
            getValue(prop),
          ]);
        } else {
          body.push(
            t.expressionStatement(
              t.callExpression(state.addHelper("defineProperty"), [
                t.cloneNode(objId),
                key,
                getValue(prop),
              ]),
            ),
          );
        }
      }
    }
  }

  return {
    name: "transform-computed-properties",

    visitor: {
      ObjectExpression: {
        exit(path, state) {
          const { node, parent, scope } = path;
          let hasComputed = false;
          for (const prop of (node.properties: Array<Object>)) {
            hasComputed = prop.computed === true;
            if (hasComputed) break;
          }
          if (!hasComputed) return;

          // put all getters/setters into the first object expression as well as all initialisers up
          // to the first computed property

          const initProps = [];
          const computedProps = [];
          let foundComputed = false;

          for (const prop of node.properties) {
            if (prop.computed) {
              foundComputed = true;
            }

            if (foundComputed) {
              computedProps.push(prop);
            } else {
              initProps.push(prop);
            }
          }

          const objId = scope.generateUidIdentifierBasedOnNode(parent);
          const initPropExpression = t.objectExpression(initProps);
          const body = [];

          body.push(
            t.variableDeclaration("var", [
              t.variableDeclarator(objId, initPropExpression),
            ]),
          );

          let mutatorRef;

          const getMutatorId = function() {
            if (!mutatorRef) {
              mutatorRef = scope.generateUidIdentifier("mutatorMap");

              body.push(
                t.variableDeclaration("var", [
                  t.variableDeclarator(mutatorRef, t.objectExpression([])),
                ]),
              );
            }

            return t.cloneNode(mutatorRef);
          };

          const single = pushComputedProps({
            scope,
            objId,
            body,
            computedProps,
            initPropExpression,
            getMutatorId,
            state,
          });

          if (mutatorRef) {
            body.push(
              t.expressionStatement(
                t.callExpression(
                  state.addHelper("defineEnumerableProperties"),
                  [t.cloneNode(objId), t.cloneNode(mutatorRef)],
                ),
              ),
            );
          }

          if (single) {
            path.replaceWith(single);
          } else {
            body.push(t.expressionStatement(t.cloneNode(objId)));
            path.replaceWithMultiple(body);
          }
        },
      },
    },
  };
});
