import { declare } from "@babel/helper-plugin-utils";
import { template, types as t } from "@babel/core";

export default declare((api, options) => {
  api.assertVersion(7);

  const { loose, assumeArray } = options;

  if (loose === true && assumeArray === true) {
    throw new Error(
      `The loose and assumeArray options cannot be used together in @babel/plugin-transform-for-of`,
    );
  }

  if (assumeArray) {
    return {
      name: "transform-for-of",

      visitor: {
        ForOfStatement(path) {
          const { scope } = path;
          const { left, right, body } = path.node;
          const i = scope.generateUidIdentifier("i");
          let array = scope.maybeGenerateMemoised(right, true);

          const inits = [t.variableDeclarator(i, t.numericLiteral(0))];
          if (array) {
            inits.push(t.variableDeclarator(array, right));
          } else {
            array = right;
          }

          const item = t.memberExpression(
            t.cloneNode(array),
            t.cloneNode(i),
            true,
          );
          let assignment;
          if (t.isVariableDeclaration(left)) {
            assignment = left;
            assignment.declarations[0].init = item;
          } else {
            assignment = t.expressionStatement(
              t.assignmentExpression("=", left, item),
            );
          }

          const block = t.toBlock(body);
          block.body.unshift(assignment);

          path.replaceWith(
            t.forStatement(
              t.variableDeclaration("let", inits),
              t.binaryExpression(
                "<",
                t.cloneNode(i),
                t.memberExpression(t.cloneNode(array), t.identifier("length")),
              ),
              t.updateExpression("++", t.cloneNode(i)),
              block,
            ),
          );
        },
      },
    };
  }

  const pushComputedProps = loose
    ? pushComputedPropsLoose
    : pushComputedPropsSpec;

  const buildForOfArray = template(`
    for (var KEY = 0, NAME = ARR; KEY < NAME.length; KEY++) BODY;
  `);

  const buildForOfLoose = template(`
    for (var LOOP_OBJECT = OBJECT,
             IS_ARRAY = Array.isArray(LOOP_OBJECT),
             INDEX = 0,
             LOOP_OBJECT = IS_ARRAY ? LOOP_OBJECT : LOOP_OBJECT[Symbol.iterator]();;) {
      INTERMEDIATE;
      if (IS_ARRAY) {
        if (INDEX >= LOOP_OBJECT.length) break;
        ID = LOOP_OBJECT[INDEX++];
      } else {
        INDEX = LOOP_OBJECT.next();
        if (INDEX.done) break;
        ID = INDEX.value;
      }
    }
  `);

  const buildForOf = template(`
    var ITERATOR_COMPLETION = true;
    var ITERATOR_HAD_ERROR_KEY = false;
    var ITERATOR_ERROR_KEY = undefined;
    try {
      for (
        var ITERATOR_KEY = OBJECT[Symbol.iterator](), STEP_KEY;
        !(ITERATOR_COMPLETION = (STEP_KEY = ITERATOR_KEY.next()).done);
        ITERATOR_COMPLETION = true
      ) {}
    } catch (err) {
      ITERATOR_HAD_ERROR_KEY = true;
      ITERATOR_ERROR_KEY = err;
    } finally {
      try {
        if (!ITERATOR_COMPLETION && ITERATOR_KEY.return != null) {
          ITERATOR_KEY.return();
        }
      } finally {
        if (ITERATOR_HAD_ERROR_KEY) {
          throw ITERATOR_ERROR_KEY;
        }
      }
    }
  `);

  function _ForOfStatementArray(path) {
    const { node, scope } = path;

    const right = scope.generateUidIdentifierBasedOnNode(node.right, "arr");
    const iterationKey = scope.generateUidIdentifier("i");

    let loop = buildForOfArray({
      BODY: node.body,
      KEY: iterationKey,
      NAME: right,
      ARR: node.right,
    });

    t.inherits(loop, node);
    t.ensureBlock(loop);

    const iterationValue = t.memberExpression(
      t.cloneNode(right),
      t.cloneNode(iterationKey),
      true,
    );

    const left = node.left;
    if (t.isVariableDeclaration(left)) {
      left.declarations[0].init = iterationValue;
      loop.body.body.unshift(left);
    } else {
      loop.body.body.unshift(
        t.expressionStatement(
          t.assignmentExpression("=", left, iterationValue),
        ),
      );
    }

    if (path.parentPath.isLabeledStatement()) {
      loop = t.labeledStatement(path.parentPath.node.label, loop);
    }

    return [loop];
  }

  function replaceWithArray(path) {
    if (path.parentPath.isLabeledStatement()) {
      path.parentPath.replaceWithMultiple(_ForOfStatementArray(path));
    } else {
      path.replaceWithMultiple(_ForOfStatementArray(path));
    }
  }

  return {
    name: "transform-for-of",
    visitor: {
      ForOfStatement(path, state) {
        const right = path.get("right");
        if (
          right.isArrayExpression() ||
          right.isGenericType("Array") ||
          t.isArrayTypeAnnotation(right.getTypeAnnotation())
        ) {
          replaceWithArray(path);
          return;
        }

        const { node } = path;
        const build = pushComputedProps(path, state);
        const declar = build.declar;
        const loop = build.loop;
        const block = loop.body;

        // ensure that it's a block so we can take all its statements
        path.ensureBlock();

        // add the value declaration to the new loop body
        if (declar) {
          block.body.push(declar);
        }

        // push the rest of the original loop body onto our new body
        block.body = block.body.concat(node.body.body);

        t.inherits(loop, node);
        t.inherits(loop.body, node.body);

        if (build.replaceParent) {
          path.parentPath.replaceWithMultiple(build.node);
          path.remove();
        } else {
          path.replaceWithMultiple(build.node);
        }
      },
    },
  };

  function pushComputedPropsLoose(path, file) {
    const { node, scope, parent } = path;
    const { left } = node;
    let declar, id, intermediate;

    if (
      t.isIdentifier(left) ||
      t.isPattern(left) ||
      t.isMemberExpression(left)
    ) {
      // for (i of test), for ({ i } of test)
      id = left;
      intermediate = null;
    } else if (t.isVariableDeclaration(left)) {
      // for (let i of test)
      id = scope.generateUidIdentifier("ref");
      declar = t.variableDeclaration(left.kind, [
        t.variableDeclarator(left.declarations[0].id, t.identifier(id.name)),
      ]);
      intermediate = t.variableDeclaration("var", [
        t.variableDeclarator(t.identifier(id.name)),
      ]);
    } else {
      throw file.buildCodeFrameError(
        left,
        `Unknown node type ${left.type} in ForStatement`,
      );
    }

    const iteratorKey = scope.generateUidIdentifier("iterator");
    const isArrayKey = scope.generateUidIdentifier("isArray");

    const loop = buildForOfLoose({
      LOOP_OBJECT: iteratorKey,
      IS_ARRAY: isArrayKey,
      OBJECT: node.right,
      INDEX: scope.generateUidIdentifier("i"),
      ID: id,
      INTERMEDIATE: intermediate,
    });

    //
    const isLabeledParent = t.isLabeledStatement(parent);
    let labeled;

    if (isLabeledParent) {
      labeled = t.labeledStatement(parent.label, loop);
    }

    return {
      replaceParent: isLabeledParent,
      declar: declar,
      node: labeled || loop,
      loop: loop,
    };
  }

  function pushComputedPropsSpec(path, file) {
    const { node, scope, parent } = path;
    const left = node.left;
    let declar;

    const stepKey = scope.generateUid("step");
    const stepValue = t.memberExpression(
      t.identifier(stepKey),
      t.identifier("value"),
    );

    if (
      t.isIdentifier(left) ||
      t.isPattern(left) ||
      t.isMemberExpression(left)
    ) {
      // for (i of test), for ({ i } of test)
      declar = t.expressionStatement(
        t.assignmentExpression("=", left, stepValue),
      );
    } else if (t.isVariableDeclaration(left)) {
      // for (let i of test)
      declar = t.variableDeclaration(left.kind, [
        t.variableDeclarator(left.declarations[0].id, stepValue),
      ]);
    } else {
      throw file.buildCodeFrameError(
        left,
        `Unknown node type ${left.type} in ForStatement`,
      );
    }

    const template = buildForOf({
      ITERATOR_HAD_ERROR_KEY: scope.generateUidIdentifier("didIteratorError"),
      ITERATOR_COMPLETION: scope.generateUidIdentifier(
        "iteratorNormalCompletion",
      ),
      ITERATOR_ERROR_KEY: scope.generateUidIdentifier("iteratorError"),
      ITERATOR_KEY: scope.generateUidIdentifier("iterator"),
      STEP_KEY: t.identifier(stepKey),
      OBJECT: node.right,
    });

    const isLabeledParent = t.isLabeledStatement(parent);

    const tryBody = template[3].block.body;
    const loop = tryBody[0];

    if (isLabeledParent) {
      tryBody[0] = t.labeledStatement(parent.label, loop);
    }

    //

    return {
      replaceParent: isLabeledParent,
      declar: declar,
      loop: loop,
      node: template,
    };
  }
});
