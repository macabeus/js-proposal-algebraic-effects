// @flow

import * as charCodes from "charcodes";
import { types as tt, type TokenType } from "../tokenizer/types";
import type {
  TSParameterProperty,
  Decorator,
  Expression,
  Identifier,
  Node,
  ObjectExpression,
  ObjectPattern,
  Pattern,
  RestElement,
  SpreadElement,
} from "../types";
import type { Pos, Position } from "../util/location";
import {
  isStrictBindOnlyReservedWord,
  isStrictBindReservedWord,
} from "../util/identifier";
import { NodeUtils } from "./node";
import { type BindingTypes, BIND_NONE } from "../util/scopeflags";

const unwrapParenthesizedExpression = (node: Node) => {
  return node.type === "ParenthesizedExpression"
    ? unwrapParenthesizedExpression(node.expression)
    : node;
};

export default class LValParser extends NodeUtils {
  // Forward-declaration: defined in expression.js
  +parseIdentifier: (liberal?: boolean) => Identifier;
  +parseMaybeAssign: (
    noIn?: ?boolean,
    refShorthandDefaultPos?: ?Pos,
    afterLeftParse?: Function,
    refNeedsArrowPos?: ?Pos,
  ) => Expression;
  +parseObj: <T: ObjectPattern | ObjectExpression>(
    isPattern: boolean,
    refShorthandDefaultPos?: ?Pos,
  ) => T;
  // Forward-declaration: defined in statement.js
  +parseDecorator: () => Decorator;

  // Convert existing expression atom to assignable pattern
  // if possible.
  // NOTE: There is a corresponding "isAssignable" method in flow.js.
  // When this one is updated, please check if also that one needs to be updated.

  toAssignable(
    node: Node,
    isBinding: ?boolean,
    contextDescription: string,
  ): Node {
    if (node) {
      if (
        (this.options.createParenthesizedExpressions &&
          node.type === "ParenthesizedExpression") ||
        node.extra?.parenthesized
      ) {
        const parenthesized = unwrapParenthesizedExpression(node);
        if (
          parenthesized.type !== "Identifier" &&
          parenthesized.type !== "MemberExpression"
        ) {
          this.raise(node.start, "Invalid parenthesized assignment pattern");
        }
      }

      switch (node.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
          break;

        case "ObjectExpression":
          node.type = "ObjectPattern";
          for (
            let i = 0, length = node.properties.length, last = length - 1;
            i < length;
            i++
          ) {
            const prop = node.properties[i];
            const isLast = i === last;
            this.toAssignableObjectExpressionProp(prop, isBinding, isLast);

            if (
              isLast &&
              prop.type === "RestElement" &&
              node.extra?.trailingComma
            ) {
              this.raiseRestNotLast(node.extra.trailingComma);
            }
          }
          break;

        case "ObjectProperty":
          this.toAssignable(node.value, isBinding, contextDescription);
          break;

        case "SpreadElement": {
          this.checkToRestConversion(node);

          node.type = "RestElement";
          const arg = node.argument;
          this.toAssignable(arg, isBinding, contextDescription);
          break;
        }

        case "ArrayExpression":
          node.type = "ArrayPattern";
          this.toAssignableList(
            node.elements,
            isBinding,
            contextDescription,
            node.extra?.trailingComma,
          );
          break;

        case "AssignmentExpression":
          if (node.operator !== "=") {
            this.raise(
              node.left.end,
              "Only '=' operator can be used for specifying default value.",
            );
          }

          node.type = "AssignmentPattern";
          delete node.operator;
          this.toAssignable(node.left, isBinding, contextDescription);
          break;

        case "ParenthesizedExpression":
          node.expression = this.toAssignable(
            node.expression,
            isBinding,
            contextDescription,
          );
          break;

        case "MemberExpression":
          if (!isBinding) break;

        default:
        // We don't know how to deal with this node. It will
        // be reported by a later call to checkLVal
      }
    }
    return node;
  }

  toAssignableObjectExpressionProp(
    prop: Node,
    isBinding: ?boolean,
    isLast: boolean,
  ) {
    if (prop.type === "ObjectMethod") {
      const error =
        prop.kind === "get" || prop.kind === "set"
          ? "Object pattern can't contain getter or setter"
          : "Object pattern can't contain methods";

      this.raise(prop.key.start, error);
    } else if (prop.type === "SpreadElement" && !isLast) {
      this.raiseRestNotLast(prop.start);
    } else {
      this.toAssignable(prop, isBinding, "object destructuring pattern");
    }
  }

  // Convert list of expression atoms to binding list.

  toAssignableList(
    exprList: Expression[],
    isBinding: ?boolean,
    contextDescription: string,
    trailingCommaPos?: ?number,
  ): $ReadOnlyArray<Pattern> {
    let end = exprList.length;
    if (end) {
      const last = exprList[end - 1];
      if (last && last.type === "RestElement") {
        --end;
      } else if (last && last.type === "SpreadElement") {
        last.type = "RestElement";
        const arg = last.argument;
        this.toAssignable(arg, isBinding, contextDescription);
        if (
          arg.type !== "Identifier" &&
          arg.type !== "MemberExpression" &&
          arg.type !== "ArrayPattern" &&
          arg.type !== "ObjectPattern"
        ) {
          this.unexpected(arg.start);
        }

        if (trailingCommaPos) {
          this.raiseTrailingCommaAfterRest(trailingCommaPos);
        }

        --end;
      }
    }
    for (let i = 0; i < end; i++) {
      const elt = exprList[i];
      if (elt) {
        this.toAssignable(elt, isBinding, contextDescription);
        if (elt.type === "RestElement") {
          this.raiseRestNotLast(elt.start);
        }
      }
    }
    return exprList;
  }

  // Convert list of expression atoms to a list of

  toReferencedList(
    exprList: $ReadOnlyArray<?Expression>,
    isParenthesizedExpr?: boolean, // eslint-disable-line no-unused-vars
  ): $ReadOnlyArray<?Expression> {
    return exprList;
  }

  toReferencedListDeep(
    exprList: $ReadOnlyArray<?Expression>,
    isParenthesizedExpr?: boolean,
  ): void {
    this.toReferencedList(exprList, isParenthesizedExpr);

    for (const expr of exprList) {
      if (expr && expr.type === "ArrayExpression") {
        this.toReferencedListDeep(expr.elements);
      }
    }
  }

  // Parses spread element.

  parseSpread(
    refShorthandDefaultPos: ?Pos,
    refNeedsArrowPos?: ?Pos,
  ): SpreadElement {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(
      false,
      refShorthandDefaultPos,
      undefined,
      refNeedsArrowPos,
    );
    return this.finishNode(node, "SpreadElement");
  }

  parseRestBinding(): RestElement {
    const node = this.startNode();
    this.next();
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  }

  // Parses lvalue (assignable) atom.
  parseBindingAtom(): Pattern {
    switch (this.state.type) {
      case tt.bracketL: {
        const node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(
          tt.bracketR,
          charCodes.rightSquareBracket,
          true,
        );
        return this.finishNode(node, "ArrayPattern");
      }

      case tt.braceL:
        return this.parseObj(true);
    }

    return this.parseIdentifier();
  }

  parseBindingList(
    close: TokenType,
    closeCharCode: $Values<typeof charCodes>,
    allowEmpty?: boolean,
    allowModifiers?: boolean,
  ): $ReadOnlyArray<Pattern | TSParameterProperty> {
    const elts: Array<Pattern | TSParameterProperty> = [];
    let first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(tt.comma);
      }
      if (allowEmpty && this.match(tt.comma)) {
        // $FlowFixMe This method returns `$ReadOnlyArray<?Pattern>` if `allowEmpty` is set.
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(tt.ellipsis)) {
        elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));
        this.checkCommaAfterRest(closeCharCode);
        this.expect(close);
        break;
      } else {
        const decorators = [];
        if (this.match(tt.at) && this.hasPlugin("decorators")) {
          this.raise(
            this.state.start,
            "Stage 2 decorators cannot be used to decorate parameters",
          );
        }
        while (this.match(tt.at)) {
          decorators.push(this.parseDecorator());
        }
        elts.push(this.parseAssignableListItem(allowModifiers, decorators));
      }
    }
    return elts;
  }

  parseAssignableListItem(
    allowModifiers: ?boolean,
    decorators: Decorator[],
  ): Pattern | TSParameterProperty {
    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);
    if (decorators.length) {
      left.decorators = decorators;
    }
    return elt;
  }

  parseAssignableListItemTypes(param: Pattern): Pattern {
    return param;
  }

  // Parses assignment pattern around given atom if possible.

  parseMaybeDefault(
    startPos?: ?number,
    startLoc?: ?Position,
    left?: ?Pattern,
  ): Pattern {
    startLoc = startLoc || this.state.startLoc;
    startPos = startPos || this.state.start;
    left = left || this.parseBindingAtom();
    if (!this.eat(tt.eq)) return left;

    const node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern");
  }

  // Verify that a node is an lval — something that can be assigned
  // to.

  checkLVal(
    expr: Expression,
    bindingType: BindingTypes = BIND_NONE,
    checkClashes: ?{ [key: string]: boolean },
    contextDescription: string,
    disallowLetBinding?: boolean,
    strictModeChanged?: boolean = false,
  ): void {
    switch (expr.type) {
      case "Identifier":
        if (
          this.state.strict &&
          // "Global" reserved words have already been checked by parseIdentifier,
          // unless they have been found in the id or parameters of a strict-mode
          // function in a sloppy context.
          (strictModeChanged
            ? isStrictBindReservedWord(expr.name, this.inModule)
            : isStrictBindOnlyReservedWord(expr.name))
        ) {
          this.raise(
            expr.start,
            `${bindingType === BIND_NONE ? "Assigning to" : "Binding"} '${
              expr.name
            }' in strict mode`,
          );
        }

        if (checkClashes) {
          // we need to prefix this with an underscore for the cases where we have a key of
          // `__proto__`. there's a bug in old V8 where the following wouldn't work:
          //
          //   > var obj = Object.create(null);
          //   undefined
          //   > obj.__proto__
          //   null
          //   > obj.__proto__ = true;
          //   true
          //   > obj.__proto__
          //   null
          const key = `_${expr.name}`;

          if (checkClashes[key]) {
            this.raise(expr.start, "Argument name clash");
          } else {
            checkClashes[key] = true;
          }
        }
        if (disallowLetBinding && expr.name === "let") {
          this.raise(
            expr.start,
            "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
          );
        }
        if (!(bindingType & BIND_NONE)) {
          this.scope.declareName(expr.name, bindingType, expr.start);
        }
        break;

      case "MemberExpression":
        if (bindingType !== BIND_NONE) {
          this.raise(expr.start, "Binding member expression");
        }
        break;

      case "ObjectPattern":
        for (let prop of expr.properties) {
          if (prop.type === "ObjectProperty") prop = prop.value;
          // If we find here an ObjectMethod, it's because this was originally
          // an ObjectExpression which has then been converted.
          // toAssignable already reported this error with a nicer message.
          else if (prop.type === "ObjectMethod") continue;

          this.checkLVal(
            prop,
            bindingType,
            checkClashes,
            "object destructuring pattern",
            disallowLetBinding,
          );
        }
        break;

      case "ArrayPattern":
        for (const elem of expr.elements) {
          if (elem) {
            this.checkLVal(
              elem,
              bindingType,
              checkClashes,
              "array destructuring pattern",
              disallowLetBinding,
            );
          }
        }
        break;

      case "AssignmentPattern":
        this.checkLVal(
          expr.left,
          bindingType,
          checkClashes,
          "assignment pattern",
        );
        break;

      case "RestElement":
        this.checkLVal(
          expr.argument,
          bindingType,
          checkClashes,
          "rest element",
        );
        break;

      case "ParenthesizedExpression":
        this.checkLVal(
          expr.expression,
          bindingType,
          checkClashes,
          "parenthesized expression",
        );
        break;

      default: {
        const message =
          (bindingType === BIND_NONE
            ? "Invalid"
            : /* istanbul ignore next */ "Binding invalid") +
          " left-hand side" +
          (contextDescription
            ? " in " + contextDescription
            : /* istanbul ignore next */ "expression");
        this.raise(expr.start, message);
      }
    }
  }

  checkToRestConversion(node: SpreadElement): void {
    if (
      node.argument.type !== "Identifier" &&
      node.argument.type !== "MemberExpression"
    ) {
      this.raise(node.argument.start, "Invalid rest operator's argument");
    }
  }

  checkCommaAfterRest(close: $Values<typeof charCodes>): void {
    if (this.match(tt.comma)) {
      if (this.lookaheadCharCode() === close) {
        this.raiseTrailingCommaAfterRest(this.state.start);
      } else {
        this.raiseRestNotLast(this.state.start);
      }
    }
  }

  raiseRestNotLast(pos: number) {
    throw this.raise(pos, `Rest element must be last element`);
  }

  raiseTrailingCommaAfterRest(pos: number) {
    this.raise(pos, `Unexpected trailing comma after rest element`);
  }
}
