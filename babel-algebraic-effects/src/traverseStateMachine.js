const babelCore = require('../../babel/packages/babel-core')

const { types: t } = babelCore

const traverseStateMachine = (scope, node, block, splitWhen, state) => {
  const callHandleEffect = step => (
    t.callExpression(
      t.identifier('handleEffect'),
      [t.numericLiteral(step)]
    )
  ) // handleEffect(step)

  // firstly need to
  // - get the variables name that should be hosted
  // - clear the initialize of the variables
  // - replace function calls with @@ to a bind expresion to handle the effects
  const variablesToHoist = []
  let countStep = 0

  const traversalHandler = {
    CallExpression(path) {
      const { node } = path

      if (!node.callee.name || node.callee.name === 'handleEffect') {
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
          [callHandleEffect(countStep)]
        )
      ) // calle.bind(handleEffect)
      countStep += 1

      const calleeBindCallCallArgs = (
        t.callExpression(
          calleeBindCall,
          node.arguments
        )
      ) // calle.bind(handleEffect)(arguments)

      path.replaceWith(calleeBindCallCallArgs)
    },

    VariableDeclaration(path) {
      const { node } = path

      // TODO: Need to work with multiple variable declaration

      const variableName = node.declarations[0].id.name
      variablesToHoist.push(variableName)

      path.replaceWith(
        t.assignmentExpression(
          '=',
          node.declarations[0].id,
          node.declarations[0].init
        )
      )
    }
  }

  scope.traverse(node, traversalHandler, state)

  // so need to create the statement to initialize the variables
  const variablesHoisted = (
    t.variableDeclaration(
      'let',
      variablesToHoist.map(name => t.variableDeclarator(t.identifier(name)))
    )
  ) // let a, b, c

  // so need to split the block with to handle the different states
  const splitBodyForStates = [[]]
  let lastNodeHasEffect = false
  block.forEach(nodeBody => {
    let hasHandleEffectCall = false

    scope.traverse(
      nodeBody,
      {
        CallExpression(path) {
          const { node } = path

          if (splitWhen(node)) {
            hasHandleEffectCall = true
            path.stop()
          }
        }
      },
      this
    )

    if (hasHandleEffectCall) {
      if (splitBodyForStates[splitBodyForStates.length - 1].length === 0) {
        splitBodyForStates[splitBodyForStates.length - 1].push(nodeBody)
      } else if (lastNodeHasEffect === false) {
        splitBodyForStates[splitBodyForStates.length - 1].push(nodeBody)
        splitBodyForStates.push([])
      } else {
        splitBodyForStates.push([nodeBody])
        splitBodyForStates.push([])
      }

      lastNodeHasEffect = true
    } else {
      if (lastNodeHasEffect) {
        if (splitBodyForStates[splitBodyForStates.length - 1].length === 0) {
          splitBodyForStates[splitBodyForStates.length - 1].push(nodeBody)
        } else {
          splitBodyForStates.push([nodeBody])
        }
      } else {
        splitBodyForStates[splitBodyForStates.length - 1].push(nodeBody)
      }

      lastNodeHasEffect = false
    }
  })

  // TODO: initializer e cases só funcionam corretamente apenas se for usado assignment expressions na chamada da função com efeito
  // TODO: não funcionará corretamente se tiver blocos aninhados
  const initializer = ( // TODO: Precisa funcionar em casos em que o splitBodyForStates[0].length seja diferente de 1
    splitBodyForStates[0][0].expression.right
  )
  const cases = (
    splitBodyForStates.slice(1).map((arrayNodes, index) => {
      return (
        t.switchCase(
          t.numericLiteral(index),
          [
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.identifier(splitBodyForStates[index][splitBodyForStates[index].length - 1].expression.left.name),
                t.identifier('result')
              )
            ),
            ...arrayNodes,
            t.breakStatement()
          ]
        )
      )
    })
  )

  return [variablesHoisted, initializer, cases]
}

module.exports = traverseStateMachine
