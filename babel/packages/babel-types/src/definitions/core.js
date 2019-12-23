// @flow
import isValidIdentifier from "../validators/isValidIdentifier";

import {
  BINARY_OPERATORS,
  LOGICAL_OPERATORS,
  UNARY_OPERATORS,
  UPDATE_OPERATORS,
} from "../constants";

import defineType, {
  assertValueType,
  assertNodeType,
  assertNodeOrValueType,
  assertEach,
  chain,
  assertOneOf,
} from "./utils";

defineType("ArrayExpression", {
  fields: {
    elements: {
      validate: chain(
        assertValueType("array"),
        assertEach(
          assertNodeOrValueType("null", "Expression", "SpreadElement"),
        ),
      ),
      default: [],
    },
  },
  visitor: ["elements"],
  aliases: ["Expression"],
});

defineType("AssignmentExpression", {
  fields: {
    operator: {
      validate: assertValueType("string"),
    },
    left: {
      validate: assertNodeType("LVal"),
    },
    right: {
      validate: assertNodeType("Expression"),
    },
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"],
});

defineType("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: assertOneOf(...BINARY_OPERATORS),
    },
    left: {
      validate: assertNodeType("Expression"),
    },
    right: {
      validate: assertNodeType("Expression"),
    },
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
});

defineType("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string"),
    },
  },
});

defineType("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: assertNodeType("DirectiveLiteral"),
    },
  },
});

defineType("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string"),
    },
  },
});

defineType("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Directive")),
      ),
      default: [],
    },
    body: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Statement")),
      ),
    },
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"],
});

defineType("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: assertNodeType("Identifier"),
      optional: true,
    },
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
});

defineType("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: assertNodeType("Expression", "V8IntrinsicIdentifier"),
    },
    arguments: {
      validate: chain(
        assertValueType("array"),
        assertEach(
          assertNodeType(
            "Expression",
            "SpreadElement",
            "JSXNamespacedName",
            "ArgumentPlaceholder",
          ),
        ),
      ),
    },
    optional: {
      validate: assertOneOf(true, false),
      optional: true,
    },
    typeArguments: {
      validate: assertNodeType("TypeParameterInstantiation"),
      optional: true,
    },
    typeParameters: {
      validate: assertNodeType("TSTypeParameterInstantiation"),
      optional: true,
    },
  },
});

defineType("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: assertNodeType("Identifier"),
      optional: true,
    },
    body: {
      validate: assertNodeType("BlockStatement"),
    },
  },
  aliases: ["Scopable", "BlockParent"],
});

defineType("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
    },
    consequent: {
      validate: assertNodeType("Expression"),
    },
    alternate: {
      validate: assertNodeType("Expression"),
    },
  },
  aliases: ["Expression", "Conditional"],
});

defineType("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: assertNodeType("Identifier"),
      optional: true,
    },
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
});

defineType("DebuggerStatement", {
  aliases: ["Statement"],
});

defineType("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
    },
    body: {
      validate: assertNodeType("Statement"),
    },
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
});

defineType("EmptyStatement", {
  aliases: ["Statement"],
});

defineType("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: assertNodeType("Expression"),
    },
  },
  aliases: ["Statement", "ExpressionWrapper"],
});

defineType("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: assertNodeType("Program"),
    },
  },
});

defineType("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: [
    "Scopable",
    "Statement",
    "For",
    "BlockParent",
    "Loop",
    "ForXStatement",
  ],
  fields: {
    left: {
      validate: assertNodeType("VariableDeclaration", "LVal"),
    },
    right: {
      validate: assertNodeType("Expression"),
    },
    body: {
      validate: assertNodeType("Statement"),
    },
  },
});

defineType("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: assertNodeType("VariableDeclaration", "Expression"),
      optional: true,
    },
    test: {
      validate: assertNodeType("Expression"),
      optional: true,
    },
    update: {
      validate: assertNodeType("Expression"),
      optional: true,
    },
    body: {
      validate: assertNodeType("Statement"),
    },
  },
});

export const functionCommon = {
  params: {
    validate: chain(
      assertValueType("array"),
      assertEach(
        assertNodeType(
          "Identifier",
          "Pattern",
          "RestElement",
          "TSParameterProperty",
        ),
      ),
    ),
  },
  generator: {
    default: false,
    validate: assertValueType("boolean"),
  },
  async: {
    validate: assertValueType("boolean"),
    default: false,
  },
};

export const functionTypeAnnotationCommon = {
  returnType: {
    validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true,
  },
  typeParameters: {
    validate: assertNodeType(
      "TypeParameterDeclaration",
      "TSTypeParameterDeclaration",
      "Noop",
    ),
    optional: true,
  },
};

export const functionDeclarationCommon = {
  ...functionCommon,
  declare: {
    validate: assertValueType("boolean"),
    optional: true,
  },
  id: {
    validate: assertNodeType("Identifier"),
    optional: true, // May be null for `export default function`
  },
};

defineType("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: {
    ...functionDeclarationCommon,
    ...functionTypeAnnotationCommon,
    body: {
      validate: assertNodeType("BlockStatement"),
    },
  },
  aliases: [
    "Scopable",
    "Function",
    "BlockParent",
    "FunctionParent",
    "Statement",
    "Pureish",
    "Declaration",
  ],
});

defineType("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: [
    "Scopable",
    "Function",
    "BlockParent",
    "FunctionParent",
    "Expression",
    "Pureish",
  ],
  fields: {
    ...functionCommon,
    ...functionTypeAnnotationCommon,
    id: {
      validate: assertNodeType("Identifier"),
      optional: true,
    },
    body: {
      validate: assertNodeType("BlockStatement"),
    },
  },
});

export const patternLikeCommon = {
  typeAnnotation: {
    // TODO: @babel/plugin-transform-flow-comments puts a Noop here, is there a better way?
    validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true,
  },
  decorators: {
    validate: chain(
      assertValueType("array"),
      assertEach(assertNodeType("Decorator")),
    ),
  },
};

defineType("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators" /* for legacy param decorators */],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: {
    ...patternLikeCommon,
    name: {
      validate: chain(function(node, key, val) {
        if (!isValidIdentifier(val)) {
          // throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, assertValueType("string")),
    },
    optional: {
      validate: assertValueType("boolean"),
      optional: true,
    },
  },
});

defineType("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
    },
    consequent: {
      validate: assertNodeType("Statement"),
    },
    alternate: {
      optional: true,
      validate: assertNodeType("Statement"),
    },
  },
});

defineType("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: assertNodeType("Identifier"),
    },
    body: {
      validate: assertNodeType("Statement"),
    },
  },
});

defineType("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string"),
    },
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"],
});

defineType("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: assertValueType("number"),
    },
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"],
});

defineType("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"],
});

defineType("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("boolean"),
    },
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"],
});

defineType("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Literal"],
  fields: {
    pattern: {
      validate: assertValueType("string"),
    },
    flags: {
      validate: assertValueType("string"),
      default: "",
    },
  },
});

defineType("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: assertOneOf(...LOGICAL_OPERATORS),
    },
    left: {
      validate: assertNodeType("Expression"),
    },
    right: {
      validate: assertNodeType("Expression"),
    },
  },
});

defineType("MemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: {
    object: {
      validate: assertNodeType("Expression"),
    },
    property: {
      validate: (function() {
        const normal = assertNodeType("Identifier", "PrivateName");
        const computed = assertNodeType("Expression");

        return function(node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      })(),
    },
    computed: {
      default: false,
    },
    optional: {
      validate: assertOneOf(true, false),
      optional: true,
    },
  },
});

defineType("NewExpression", { inherits: "CallExpression" });

defineType("Program", {
  // Note: We explicitly leave 'interpreter' out here because it is
  // conceptually comment-like, and Babel does not traverse comments either.
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: assertValueType("string"),
    },
    sourceType: {
      validate: assertOneOf("script", "module"),
      default: "script",
    },
    interpreter: {
      validate: assertNodeType("InterpreterDirective"),
      default: null,
      optional: true,
    },
    directives: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Directive")),
      ),
      default: [],
    },
    body: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Statement")),
      ),
    },
  },
  aliases: ["Scopable", "BlockParent", "Block"],
});

defineType("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: chain(
        assertValueType("array"),
        assertEach(
          assertNodeType("ObjectMethod", "ObjectProperty", "SpreadElement"),
        ),
      ),
    },
  },
});

defineType("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed"],
  fields: {
    ...functionCommon,
    ...functionTypeAnnotationCommon,
    kind: {
      validate: chain(
        assertValueType("string"),
        assertOneOf("method", "get", "set"),
      ),
      default: "method",
    },
    computed: {
      validate: assertValueType("boolean"),
      default: false,
    },
    key: {
      validate: (function() {
        const normal = assertNodeType(
          "Identifier",
          "StringLiteral",
          "NumericLiteral",
        );
        const computed = assertNodeType("Expression");

        return function(node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      })(),
    },
    decorators: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Decorator")),
      ),
    },
    body: {
      validate: assertNodeType("BlockStatement"),
    },
  },
  visitor: [
    "key",
    "params",
    "body",
    "decorators",
    "returnType",
    "typeParameters",
  ],
  aliases: [
    "UserWhitespacable",
    "Function",
    "Scopable",
    "BlockParent",
    "FunctionParent",
    "Method",
    "ObjectMember",
  ],
});

defineType("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", "decorators"],
  fields: {
    computed: {
      validate: assertValueType("boolean"),
      default: false,
    },
    key: {
      validate: (function() {
        const normal = assertNodeType(
          "Identifier",
          "StringLiteral",
          "NumericLiteral",
        );
        const computed = assertNodeType("Expression");

        return function(node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      })(),
    },
    value: {
      // Value may be PatternLike if this is an AssignmentProperty
      // https://github.com/babel/babylon/issues/434
      validate: assertNodeType("Expression", "PatternLike"),
    },
    shorthand: {
      validate: assertValueType("boolean"),
      default: false,
    },
    decorators: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Decorator")),
      ),
      optional: true,
    },
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
});

defineType("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: {
    ...patternLikeCommon,
    argument: {
      validate: assertNodeType("LVal"),
    },
  },
});

defineType("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: assertNodeType("Expression"),
      optional: true,
    },
  },
});

defineType("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Expression")),
      ),
    },
  },
  aliases: ["Expression"],
});

defineType("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: assertNodeType("Expression"),
    },
  },
});

defineType("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
      optional: true,
    },
    consequent: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("Statement")),
      ),
    },
  },
});

defineType("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: assertNodeType("Expression"),
    },
    cases: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("SwitchCase")),
      ),
    },
  },
});

defineType("ThisExpression", {
  aliases: ["Expression"],
});

defineType("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: assertNodeType("Expression"),
    },
  },
});

// todo: at least handler or finalizer should be set to be valid
defineType("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: assertNodeType("BlockStatement"),
    },
    handler: {
      optional: true,
      validate: assertNodeType("CatchClause"),
    },
    finalizer: {
      optional: true,
      validate: assertNodeType("BlockStatement"),
    },
  },
});

defineType("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true,
    },
    argument: {
      validate: assertNodeType("Expression"),
    },
    operator: {
      validate: assertOneOf(...UNARY_OPERATORS),
    },
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"],
});

defineType("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false,
    },
    argument: {
      validate: assertNodeType("Expression"),
    },
    operator: {
      validate: assertOneOf(...UPDATE_OPERATORS),
    },
  },
  visitor: ["argument"],
  aliases: ["Expression"],
});

defineType("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: assertValueType("boolean"),
      optional: true,
    },
    kind: {
      validate: chain(
        assertValueType("string"),
        assertOneOf("var", "let", "const"),
      ),
    },
    declarations: {
      validate: chain(
        assertValueType("array"),
        assertEach(assertNodeType("VariableDeclarator")),
      ),
    },
  },
});

defineType("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: assertNodeType("LVal"),
    },
    definite: {
      optional: true,
      validate: assertValueType("boolean"),
    },
    init: {
      optional: true,
      validate: assertNodeType("Expression"),
    },
  },
});

defineType("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
    },
    body: {
      validate: assertNodeType("BlockStatement", "Statement"),
    },
  },
});

defineType("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: assertNodeType("Expression"),
    },
    body: {
      validate: assertNodeType("BlockStatement", "Statement"),
    },
  },
});
