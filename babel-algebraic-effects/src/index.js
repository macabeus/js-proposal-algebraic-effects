const fs = require('fs')
const babelCore = require('../../babel/packages/babel-core')
const traverse = require('../../babel/packages/babel-traverse')
const parser = require('../../babel/packages/babel-parser')
const generator = require('../../babel/packages/babel-generator');

const { types: t } = babelCore

const code = fs.readFileSync(`${__dirname}/../../samples/basic.js`).toString()
const ast = parser.parse(code)

traverse.default(ast, {
  PerformExpression(path) {
    const { node } = path

    const thisHandle = (
      t.memberExpression(
        t.thisExpression(),
        t.Identifier('handle')
      )
    ) // this.handle

    const thisHandleCall = (
      t.callExpression(
        thisHandle,
        [node.argument]
      )
    ) // this.handle(args)

    path.replaceWith(thisHandleCall)
  },

  TryStatement(path) {
    const { scope, node } = path

    if (node.handleEffects === null) {
      return
    }

    const traversalHandler = {
      CallExpression(path) {
        const { node } = path

        if (!node.callee.name) {
          return
        }

        const calleeBind = (
          t.memberExpression(
            t.Identifier(node.callee.name),
            t.Identifier('bind')
          )
        ) // calle.bind

        const calleeBindCall = (
          t.callExpression(
            calleeBind,
            [t.Identifier('handleEffect')]
          )
        ) // calle.bind(handleEffect)

        const calleeBindCallCallArgs = (
          t.callExpression(
            calleeBindCall,
            node.arguments
          )
        ) // calle.bind(handleEffect)(arguments)

        path.replaceWith(calleeBindCallCallArgs)
      }
    }

    scope.traverse(node, traversalHandler, this)

    const letHandleEffect = (
      t.variableDeclaration(
        'let',
        [t.variableDeclarator(t.Identifier('handleEffect'))]
      )
    ) // let handleEffect

    const assignHandleEffect = (
      t.assignmentPattern(
        t.Identifier('handleEffect'),
        t.objectExpression([
          t.objectMethod(
            'method',
            t.Identifier('handle'),
            [t.Identifier('effect')],
            node.handleEffects
          )
        ])
      )
    ) // handleEffect = { handle(effect) { ... } }

    path.replaceWithMultiple([
      letHandleEffect,
      assignHandleEffect,
      ...node.block.body
    ])
  }
})

const result = generator.default(ast, {}, code)

console.log(result.code)
