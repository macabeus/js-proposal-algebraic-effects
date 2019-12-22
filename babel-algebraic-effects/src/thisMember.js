const babelCore = require('../../babel/packages/babel-core')

const { types: t } = babelCore

const thisMember = identifierName => (
  t.memberExpression(
    t.thisExpression(),
    t.Identifier(identifierName)
  )
)

module.exports = thisMember
