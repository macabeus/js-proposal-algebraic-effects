import { declare } from "@babel/helper-plugin-utils";
import syntaxObjectRestSpread from "@babel/plugin-syntax-object-rest-spread";
import { types as t } from "@babel/core";

// TODO: Remove in Babel 8
// @babel/types <=7.3.3 counts FOO as referenced in var { x: FOO }.
// We need to detect this bug to know if "unused" means 0 or 1 references.
const ZERO_REFS = (() => {
  const node = t.identifier("a");
  const property = t.objectProperty(t.identifier("key"), node);
  const pattern = t.objectPattern([property]);

  return t.isReferenced(node, property, pattern) ? 1 : 0;
})();

export default declare((api, opts) => {
  api.assertVersion(7);

  const { useBuiltIns = false, loose = false } = opts;

  if (typeof loose !== "boolean") {
    throw new Error(".loose must be a boolean, or undefined");
  }

  function getExtendsHelper(file) {
    return useBuiltIns
      ? t.memberExpression(t.identifier("Object"), t.identifier("assign"))
      : file.addHelper("extends");
  }

  function hasRestElement(path) {
    let foundRestElement = false;
    visitRestElements(path, restElement => {
      foundRestElement = true;
      restElement.stop();
    });
    return foundRestElement;
  }

  function hasObjectPatternRestElement(path) {
    let foundRestElement = false;
    visitRestElements(path, restElement => {
      if (restElement.parentPath.isObjectPattern()) {
        foundRestElement = true;
        restElement.stop();
      }
    });
    return foundRestElement;
  }

  function visitRestElements(path, visitor) {
    path.traverse({
      Expression(path) {
        const parentType = path.parent.type;
        if (
          (parentType === "AssignmentPattern" && path.key === "right") ||
          (parentType === "ObjectProperty" &&
            path.parent.computed &&
            path.key === "key")
        ) {
          path.skip();
        }
      },
      RestElement: visitor,
    });
  }

  function hasSpread(node) {
    for (const prop of node.properties) {
      if (t.isSpreadElement(prop)) {
        return true;
      }
    }
    return false;
  }

  // returns an array of all keys of an object, and a status flag indicating if all extracted keys
  // were converted to stringLiterals or not
  // e.g. extracts {keys: ["a", "b", "3", ++x], allLiteral: false }
  // from ast of {a: "foo", b, 3: "bar", [++x]: "baz"}
  function extractNormalizedKeys(path) {
    const props = path.node.properties;
    const keys = [];
    let allLiteral = true;

    for (const prop of props) {
      if (t.isIdentifier(prop.key) && !prop.computed) {
        // since a key {a: 3} is equivalent to {"a": 3}, use the latter
        keys.push(t.stringLiteral(prop.key.name));
      } else if (t.isTemplateLiteral(prop.key)) {
        keys.push(t.cloneNode(prop.key));
      } else if (t.isLiteral(prop.key)) {
        keys.push(t.stringLiteral(String(prop.key.value)));
      } else {
        keys.push(t.cloneNode(prop.key));
        allLiteral = false;
      }
    }

    return { keys, allLiteral };
  }

  // replaces impure computed keys with new identifiers
  // and returns variable declarators of these new identifiers
  function replaceImpureComputedKeys(properties, scope) {
    const impureComputedPropertyDeclarators = [];
    for (const propPath of properties) {
      const key = propPath.get("key");
      if (propPath.node.computed && !key.isPure()) {
        const name = scope.generateUidBasedOnNode(key.node);
        const declarator = t.variableDeclarator(t.identifier(name), key.node);
        impureComputedPropertyDeclarators.push(declarator);
        key.replaceWith(t.identifier(name));
      }
    }
    return impureComputedPropertyDeclarators;
  }

  function removeUnusedExcludedKeys(path) {
    const bindings = path.getOuterBindingIdentifierPaths();

    Object.keys(bindings).forEach(bindingName => {
      const bindingParentPath = bindings[bindingName].parentPath;
      if (
        path.scope.getBinding(bindingName).references > ZERO_REFS ||
        !bindingParentPath.isObjectProperty()
      ) {
        return;
      }
      bindingParentPath.remove();
    });
  }

  //expects path to an object pattern
  function createObjectSpread(path, file, objRef) {
    const props = path.get("properties");
    const last = props[props.length - 1];
    t.assertRestElement(last.node);
    const restElement = t.cloneNode(last.node);
    last.remove();

    const impureComputedPropertyDeclarators = replaceImpureComputedKeys(
      path.get("properties"),
      path.scope,
    );
    const { keys, allLiteral } = extractNormalizedKeys(path);

    if (keys.length === 0) {
      return [
        impureComputedPropertyDeclarators,
        restElement.argument,
        t.callExpression(getExtendsHelper(file), [
          t.objectExpression([]),
          t.cloneNode(objRef),
        ]),
      ];
    }

    let keyExpression;
    if (!allLiteral) {
      // map to toPropertyKey to handle the possible non-string values
      keyExpression = t.callExpression(
        t.memberExpression(t.arrayExpression(keys), t.identifier("map")),
        [file.addHelper("toPropertyKey")],
      );
    } else {
      keyExpression = t.arrayExpression(keys);
    }

    return [
      impureComputedPropertyDeclarators,
      restElement.argument,
      t.callExpression(
        file.addHelper(`objectWithoutProperties${loose ? "Loose" : ""}`),
        [t.cloneNode(objRef), keyExpression],
      ),
    ];
  }

  function replaceRestElement(parentPath, paramPath) {
    if (paramPath.isAssignmentPattern()) {
      replaceRestElement(parentPath, paramPath.get("left"));
      return;
    }

    if (paramPath.isArrayPattern() && hasRestElement(paramPath)) {
      const elements = paramPath.get("elements");

      for (let i = 0; i < elements.length; i++) {
        replaceRestElement(parentPath, elements[i]);
      }
    }

    if (paramPath.isObjectPattern() && hasRestElement(paramPath)) {
      const uid = parentPath.scope.generateUidIdentifier("ref");

      const declar = t.variableDeclaration("let", [
        t.variableDeclarator(paramPath.node, uid),
      ]);

      parentPath.ensureBlock();
      parentPath.get("body").unshiftContainer("body", declar);
      paramPath.replaceWith(t.cloneNode(uid));
    }
  }

  return {
    name: "proposal-object-rest-spread",
    inherits: syntaxObjectRestSpread,

    visitor: {
      // taken from transform-parameters/src/destructuring.js
      // function a({ b, ...c }) {}
      Function(path) {
        const params = path.get("params");
        for (let i = params.length - 1; i >= 0; i--) {
          replaceRestElement(params[i].parentPath, params[i]);
        }
      },
      // adapted from transform-destructuring/src/index.js#pushObjectRest
      // const { a, ...b } = c;
      VariableDeclarator(path, file) {
        if (!path.get("id").isObjectPattern()) {
          return;
        }

        let insertionPath = path;
        const originalPath = path;

        visitRestElements(path.get("id"), path => {
          if (!path.parentPath.isObjectPattern()) {
            // Return early if the parent is not an ObjectPattern, but
            // (for example) an ArrayPattern or Function, because that
            // means this RestElement is an not an object property.
            return;
          }

          if (
            // skip single-property case, e.g.
            // const { ...x } = foo();
            // since the RHS will not be duplicated
            originalPath.node.id.properties.length > 1 &&
            !t.isIdentifier(originalPath.node.init)
          ) {
            // const { a, ...b } = foo();
            // to avoid calling foo() twice, as a first step convert it to:
            // const _foo = foo(),
            //       { a, ...b } = _foo;
            const initRef = path.scope.generateUidIdentifierBasedOnNode(
              originalPath.node.init,
              "ref",
            );
            // insert _foo = foo()
            originalPath.insertBefore(
              t.variableDeclarator(initRef, originalPath.node.init),
            );
            // replace foo() with _foo
            originalPath.replaceWith(
              t.variableDeclarator(originalPath.node.id, t.cloneNode(initRef)),
            );

            return;
          }

          let ref = originalPath.node.init;
          const refPropertyPath = [];
          let kind;

          path.findParent(path => {
            if (path.isObjectProperty()) {
              refPropertyPath.unshift(path);
            } else if (path.isVariableDeclarator()) {
              kind = path.parentPath.node.kind;
              return true;
            }
          });

          const impureObjRefComputedDeclarators = replaceImpureComputedKeys(
            refPropertyPath,
            path.scope,
          );
          refPropertyPath.forEach(prop => {
            const { node } = prop;
            ref = t.memberExpression(ref, t.cloneNode(node.key), node.computed);
          });

          const objectPatternPath = path.findParent(path =>
            path.isObjectPattern(),
          );

          const [
            impureComputedPropertyDeclarators,
            argument,
            callExpression,
          ] = createObjectSpread(objectPatternPath, file, ref);

          if (loose) {
            removeUnusedExcludedKeys(objectPatternPath);
          }

          t.assertIdentifier(argument);

          insertionPath.insertBefore(impureComputedPropertyDeclarators);

          insertionPath.insertBefore(impureObjRefComputedDeclarators);

          insertionPath.insertAfter(
            t.variableDeclarator(argument, callExpression),
          );

          insertionPath = insertionPath.getSibling(insertionPath.key + 1);

          path.scope.registerBinding(kind, insertionPath);

          if (objectPatternPath.node.properties.length === 0) {
            objectPatternPath
              .findParent(
                path => path.isObjectProperty() || path.isVariableDeclarator(),
              )
              .remove();
          }
        });
      },
      // taken from transform-destructuring/src/index.js#visitor
      // export var { a, ...b } = c;
      ExportNamedDeclaration(path) {
        const declaration = path.get("declaration");
        if (!declaration.isVariableDeclaration()) return;

        const hasRest = declaration
          .get("declarations")
          .some(path => hasRestElement(path.get("id")));
        if (!hasRest) return;

        const specifiers = [];

        for (const name of Object.keys(path.getOuterBindingIdentifiers(path))) {
          specifiers.push(
            t.exportSpecifier(t.identifier(name), t.identifier(name)),
          );
        }

        // Split the declaration and export list into two declarations so that the variable
        // declaration can be split up later without needing to worry about not being a
        // top-level statement.
        path.replaceWith(declaration.node);
        path.insertAfter(t.exportNamedDeclaration(null, specifiers));
      },
      // try {} catch ({a, ...b}) {}
      CatchClause(path) {
        const paramPath = path.get("param");
        replaceRestElement(paramPath.parentPath, paramPath);
      },
      // ({a, ...b} = c);
      AssignmentExpression(path, file) {
        const leftPath = path.get("left");
        if (leftPath.isObjectPattern() && hasRestElement(leftPath)) {
          const nodes = [];

          const refName = path.scope.generateUidBasedOnNode(
            path.node.right,
            "ref",
          );

          nodes.push(
            t.variableDeclaration("var", [
              t.variableDeclarator(t.identifier(refName), path.node.right),
            ]),
          );

          const [
            impureComputedPropertyDeclarators,
            argument,
            callExpression,
          ] = createObjectSpread(leftPath, file, t.identifier(refName));

          if (impureComputedPropertyDeclarators.length > 0) {
            nodes.push(
              t.variableDeclaration("var", impureComputedPropertyDeclarators),
            );
          }

          const nodeWithoutSpread = t.cloneNode(path.node);
          nodeWithoutSpread.right = t.identifier(refName);
          nodes.push(t.expressionStatement(nodeWithoutSpread));
          nodes.push(
            t.toStatement(
              t.assignmentExpression("=", argument, callExpression),
            ),
          );
          nodes.push(t.expressionStatement(t.identifier(refName)));

          path.replaceWithMultiple(nodes);
        }
      },
      // taken from transform-destructuring/src/index.js#visitor
      ForXStatement(path) {
        const { node, scope } = path;
        const leftPath = path.get("left");
        const left = node.left;

        if (!hasObjectPatternRestElement(leftPath)) {
          return;
        }

        if (!t.isVariableDeclaration(left)) {
          // for ({a, ...b} of []) {}
          const temp = scope.generateUidIdentifier("ref");

          node.left = t.variableDeclaration("var", [
            t.variableDeclarator(temp),
          ]);

          path.ensureBlock();

          if (node.body.body.length === 0 && path.isCompletionRecord()) {
            node.body.body.unshift(
              t.expressionStatement(scope.buildUndefinedNode()),
            );
          }

          node.body.body.unshift(
            t.expressionStatement(
              t.assignmentExpression("=", left, t.cloneNode(temp)),
            ),
          );
        } else {
          // for (var {a, ...b} of []) {}
          const pattern = left.declarations[0].id;

          const key = scope.generateUidIdentifier("ref");
          node.left = t.variableDeclaration(left.kind, [
            t.variableDeclarator(key, null),
          ]);

          path.ensureBlock();

          node.body.body.unshift(
            t.variableDeclaration(node.left.kind, [
              t.variableDeclarator(pattern, t.cloneNode(key)),
            ]),
          );
        }
      },
      // [{a, ...b}] = c;
      ArrayPattern(path) {
        const objectPatterns = [];

        visitRestElements(path, path => {
          if (!path.parentPath.isObjectPattern()) {
            // Return early if the parent is not an ObjectPattern, but
            // (for example) an ArrayPattern or Function, because that
            // means this RestElement is an not an object property.
            return;
          }

          const objectPattern = path.parentPath;

          const uid = path.scope.generateUidIdentifier("ref");
          objectPatterns.push(t.variableDeclarator(objectPattern.node, uid));

          objectPattern.replaceWith(t.cloneNode(uid));
          path.skip();
        });

        if (objectPatterns.length > 0) {
          const statementPath = path.getStatementParent();
          statementPath.insertAfter(
            t.variableDeclaration(
              statementPath.node.kind || "var",
              objectPatterns,
            ),
          );
        }
      },
      // var a = { ...b, ...c }
      ObjectExpression(path, file) {
        if (!hasSpread(path.node)) return;

        const args = [];
        let props = [];

        function push() {
          args.push(t.objectExpression(props));
          props = [];
        }

        for (const prop of (path.node.properties: Array)) {
          if (t.isSpreadElement(prop)) {
            push();
            args.push(prop.argument);
          } else {
            props.push(prop);
          }
        }

        if (props.length) {
          push();
        }

        let helper;
        if (loose) {
          helper = getExtendsHelper(file);
        } else {
          try {
            helper = file.addHelper("objectSpread2");
          } catch {
            // TODO: This is needed to workaround https://github.com/babel/babel/issues/10187
            // and https://github.com/babel/babel/issues/10179 for older @babel/core versions
            // where #10187 isn't fixed.
            this.file.declarations["objectSpread2"] = null;

            // objectSpread2 has been introduced in v7.5.0
            // We have to maintain backward compatibility.
            helper = file.addHelper("objectSpread");
          }
        }

        path.replaceWith(t.callExpression(helper, args));
      },
    },
  };
});
