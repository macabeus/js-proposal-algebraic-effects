import * as t from "@babel/types";

const PRECEDENCE = {
  "||": 0,
  "&&": 1,
  "|": 2,
  "^": 3,
  "&": 4,
  "==": 5,
  "===": 5,
  "!=": 5,
  "!==": 5,
  "<": 6,
  ">": 6,
  "<=": 6,
  ">=": 6,
  in: 6,
  instanceof: 6,
  ">>": 7,
  "<<": 7,
  ">>>": 7,
  "+": 8,
  "-": 8,
  "*": 9,
  "/": 9,
  "%": 9,
  "**": 10,
};

const isClassExtendsClause = (node: Object, parent: Object): boolean =>
  (t.isClassDeclaration(parent) || t.isClassExpression(parent)) &&
  parent.superClass === node;

export function NullableTypeAnnotation(node: Object, parent: Object): boolean {
  return t.isArrayTypeAnnotation(parent);
}

export function FunctionTypeAnnotation(
  node: Object,
  parent: Object,
  printStack: Array<Object>,
): boolean {
  return (
    // (() => A) | (() => B)
    t.isUnionTypeAnnotation(parent) ||
    // (() => A) & (() => B)
    t.isIntersectionTypeAnnotation(parent) ||
    // (() => A)[]
    t.isArrayTypeAnnotation(parent) ||
    // <T>(A: T): (T => T[]) => B => [A, B]
    (t.isTypeAnnotation(parent) &&
      // Check grandparent
      t.isArrowFunctionExpression(printStack[printStack.length - 3]))
  );
}

export function UpdateExpression(node: Object, parent: Object): boolean {
  return (
    // (foo++).test(), (foo++)[0]
    t.isMemberExpression(parent, { object: node }) ||
    // (foo++)()
    t.isCallExpression(parent, { callee: node }) ||
    // new (foo++)()
    t.isNewExpression(parent, { callee: node }) ||
    isClassExtendsClause(node, parent)
  );
}

export function ObjectExpression(
  node: Object,
  parent: Object,
  printStack: Array<Object>,
): boolean {
  return isFirstInStatement(printStack, { considerArrow: true });
}

export function DoExpression(
  node: Object,
  parent: Object,
  printStack: Array<Object>,
): boolean {
  return isFirstInStatement(printStack);
}

export function Binary(node: Object, parent: Object): boolean {
  if (
    node.operator === "**" &&
    t.isBinaryExpression(parent, { operator: "**" })
  ) {
    return parent.left === node;
  }

  if (isClassExtendsClause(node, parent)) {
    return true;
  }

  if (
    ((t.isCallExpression(parent) || t.isNewExpression(parent)) &&
      parent.callee === node) ||
    t.isUnaryLike(parent) ||
    (t.isMemberExpression(parent) && parent.object === node) ||
    t.isAwaitExpression(parent)
  ) {
    return true;
  }

  if (t.isBinary(parent)) {
    const parentOp = parent.operator;
    const parentPos = PRECEDENCE[parentOp];

    const nodeOp = node.operator;
    const nodePos = PRECEDENCE[nodeOp];

    if (
      // Logical expressions with the same precedence don't need parens.
      (parentPos === nodePos &&
        parent.right === node &&
        !t.isLogicalExpression(parent)) ||
      parentPos > nodePos
    ) {
      return true;
    }
  }

  return false;
}

export function UnionTypeAnnotation(node: Object, parent: Object): boolean {
  return (
    t.isArrayTypeAnnotation(parent) ||
    t.isNullableTypeAnnotation(parent) ||
    t.isIntersectionTypeAnnotation(parent) ||
    t.isUnionTypeAnnotation(parent)
  );
}

export { UnionTypeAnnotation as IntersectionTypeAnnotation };

export function TSAsExpression() {
  return true;
}

export function TSTypeAssertion() {
  return true;
}

export function TSUnionType(node: Object, parent: Object): boolean {
  return (
    t.isTSArrayType(parent) ||
    t.isTSOptionalType(parent) ||
    t.isTSIntersectionType(parent) ||
    t.isTSUnionType(parent) ||
    t.isTSRestType(parent)
  );
}

export { TSUnionType as TSIntersectionType };

export function BinaryExpression(node: Object, parent: Object): boolean {
  // let i = (1 in []);
  // for ((1 in []);;);
  return (
    node.operator === "in" &&
    (t.isVariableDeclarator(parent) || t.isFor(parent))
  );
}

export function SequenceExpression(node: Object, parent: Object): boolean {
  if (
    // Although parentheses wouldn"t hurt around sequence
    // expressions in the head of for loops, traditional style
    // dictates that e.g. i++, j++ should not be wrapped with
    // parentheses.
    t.isForStatement(parent) ||
    t.isThrowStatement(parent) ||
    t.isReturnStatement(parent) ||
    (t.isIfStatement(parent) && parent.test === node) ||
    (t.isWhileStatement(parent) && parent.test === node) ||
    (t.isForInStatement(parent) && parent.right === node) ||
    (t.isSwitchStatement(parent) && parent.discriminant === node) ||
    (t.isExpressionStatement(parent) && parent.expression === node)
  ) {
    return false;
  }

  // Otherwise err on the side of overparenthesization, adding
  // explicit exceptions above if this proves overzealous.
  return true;
}

export function YieldExpression(node: Object, parent: Object): boolean {
  return (
    t.isBinary(parent) ||
    t.isUnaryLike(parent) ||
    t.isCallExpression(parent) ||
    t.isMemberExpression(parent) ||
    t.isNewExpression(parent) ||
    (t.isAwaitExpression(parent) && t.isYieldExpression(node)) ||
    (t.isConditionalExpression(parent) && node === parent.test) ||
    isClassExtendsClause(node, parent)
  );
}

export { YieldExpression as AwaitExpression };

export function ClassExpression(
  node: Object,
  parent: Object,
  printStack: Array<Object>,
): boolean {
  return isFirstInStatement(printStack, { considerDefaultExports: true });
}

export function UnaryLike(node: Object, parent: Object): boolean {
  return (
    t.isMemberExpression(parent, { object: node }) ||
    t.isCallExpression(parent, { callee: node }) ||
    t.isNewExpression(parent, { callee: node }) ||
    t.isBinaryExpression(parent, { operator: "**", left: node }) ||
    isClassExtendsClause(node, parent)
  );
}

export function FunctionExpression(
  node: Object,
  parent: Object,
  printStack: Array<Object>,
): boolean {
  return isFirstInStatement(printStack, { considerDefaultExports: true });
}

export function ArrowFunctionExpression(node: Object, parent: Object): boolean {
  return t.isExportDeclaration(parent) || ConditionalExpression(node, parent);
}

export function ConditionalExpression(node: Object, parent: Object): boolean {
  if (
    t.isUnaryLike(parent) ||
    t.isBinary(parent) ||
    t.isConditionalExpression(parent, { test: node }) ||
    t.isAwaitExpression(parent) ||
    t.isOptionalMemberExpression(parent) ||
    t.isTaggedTemplateExpression(parent) ||
    t.isTSTypeAssertion(parent) ||
    t.isTSAsExpression(parent)
  ) {
    return true;
  }

  return UnaryLike(node, parent);
}

export function OptionalMemberExpression(
  node: Object,
  parent: Object,
): boolean {
  return t.isCallExpression(parent) || t.isMemberExpression(parent);
}

export function AssignmentExpression(node: Object): boolean {
  if (t.isObjectPattern(node.left)) {
    return true;
  } else {
    return ConditionalExpression(...arguments);
  }
}

export function NewExpression(node: Object, parent: Object): boolean {
  return isClassExtendsClause(node, parent);
}

// Walk up the print stack to determine if our node can come first
// in statement.
function isFirstInStatement(
  printStack: Array<Object>,
  { considerArrow = false, considerDefaultExports = false } = {},
): boolean {
  let i = printStack.length - 1;
  let node = printStack[i];
  i--;
  let parent = printStack[i];
  while (i > 0) {
    if (
      t.isExpressionStatement(parent, { expression: node }) ||
      t.isTaggedTemplateExpression(parent) ||
      (considerDefaultExports &&
        t.isExportDefaultDeclaration(parent, { declaration: node })) ||
      (considerArrow && t.isArrowFunctionExpression(parent, { body: node }))
    ) {
      return true;
    }

    if (
      t.isCallExpression(parent, { callee: node }) ||
      (t.isSequenceExpression(parent) && parent.expressions[0] === node) ||
      t.isMemberExpression(parent, { object: node }) ||
      t.isConditional(parent, { test: node }) ||
      t.isBinary(parent, { left: node }) ||
      t.isAssignmentExpression(parent, { left: node })
    ) {
      node = parent;
      i--;
      parent = printStack[i];
    } else {
      return false;
    }
  }

  return false;
}
