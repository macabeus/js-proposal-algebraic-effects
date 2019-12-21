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
  }
})

const result = generator.default(ast, {}, code)

console.log(result.code)
