const babelCore = require('../../babel/packages/babel-core')

const { types: t } = babelCore

const selfInvokingFunctions = body => (
  t.callExpression(
    t.arrowFunctionExpression(
      [],
      body
    ),
    []
  )
)

module.exports = selfInvokingFunctions
