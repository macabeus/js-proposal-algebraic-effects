const fs = require('fs')
const babelCore = require('../../babel/packages/babel-core')
const traverse = require('../../babel/packages/babel-traverse')
const parser = require('../../babel/packages/babel-parser')
const generator = require('../../babel/packages/babel-generator');
const selfInvokingFunctions = require('./selfInvokingFunctions')
const thisMember = require('./thisMember')
const traverseStateMachine = require('./traverseStateMachine')

const { types: t } = babelCore

const code = fs.readFileSync(`${__dirname}/../../samples/basic.js`).toString()
const ast = parser.parse(code)

traverse.default(ast, {
  FunctionDeclaration(path) {
    const { scope, node } = path

    let hasPerformExpression = false
    let hasCallWithInjectEffects = false
    scope.traverse(
      node,
      {
        PerformExpression(path) {
          hasPerformExpression = true
        },

        CallExpression(path) {
          const { node } = path

          if (!node.injectEffects) {
            return
          }

          hasCallWithInjectEffects = true
          path.stop()
        }
      },
      this
    )

    // if there is a perform expression or function call injecting an effect,
    // we should replace the return statement with a call for this.stateMachine
    const shouldReplaceReturnWithCallStateMachine = hasCallWithInjectEffects || hasPerformExpression
    if (shouldReplaceReturnWithCallStateMachine) {
      scope.traverse(
        node,
        {
          ReturnStatement(path) {
            const { node } = path

            const thisStateMachineCall = (
              t.callExpression(
                thisMember('stateMachine'),
                [t.identifier(node.argument.name)]
              )
            ) // this.stateMachine(argName)

            // TODO: Needs to check if there is this.stateMachine, otherwise should call return statement
            path.replaceWith(thisStateMachineCall)
          }
        },
        this
      )
    }

    // if there is a function call injecting an effect,
    // we should replace the function body with a state machine
    if (hasCallWithInjectEffects) {
      const [variablesHoisted, initializer, cases] = traverseStateMachine(
        scope,
        node,
        node.body.body,
        (node) => (node.callee.arguments && node.callee.arguments[0].callee.name === 'handleEffect'),
        this
      )

      const letHandleEffect = (
        t.variableDeclaration(
          'let',
          [t.variableDeclarator(t.Identifier('handleEffect'))]
        )
      ) // let handleEffect

      const stateMachineProperty = (
        t.objectProperty(
          t.identifier('stateMachine'),
          t.arrowFunctionExpression(
            [t.identifier('result')],
            t.blockStatement([
              t.switchStatement(
                t.identifier('step'),
                cases
              )
            ])
            // node.block.body
          )
        )
      ) // stateMachine: (result) => { switch (step) { ... } }

      const assignHandleEffect = (
        t.assignmentExpression(
          '=',
          t.Identifier('handleEffect'),
          t.arrowFunctionExpression(
            [t.Identifier('step')],
            t.objectExpression([
              t.spreadElement(t.thisExpression()),
              stateMachineProperty
            ])
          )
        )
      ) // handleEffect = { handle(effect) { ... } }

      path.get('body').replaceWithMultiple([
        variablesHoisted,
        letHandleEffect,
        t.toStatement(assignHandleEffect),
        t.expressionStatement(initializer)
      ])
    }
  },

  PerformExpression(path) {
    const { scope, node } = path

    // Copy the rest of the code after perform expression
    // TODO: This code is ungly and it doesn't work if the perform expression is nested deeper than two levels
    const indexCurrentNodeAtBody = path.getStatementParent().container.findIndex(i => i.start > node.end)
    const nodesAfterHere = (
      path.parentPath.parentPath.getAllNextSiblings().length === 0 && path.parentPath.getAllNextSiblings().length === 0
        ? []
        : path.getStatementParent().container.slice(indexCurrentNodeAtBody)
    )
    const nodesAfterHereUpperScope = (
      (path.getFunctionParent() === null || path.getAncestry().length === 6 || path.getAncestry().length === 5)
        ? []
        : (() => {
          const indexCurrentNodeAtUpperScope = path.getFunctionParent().node.body.body.findIndex(i => i.start > node.start)
          return path.getFunctionParent().node.body.body.slice(indexCurrentNodeAtUpperScope)
        })()
    )
    const copiedRestOfBody = [
      ...nodesAfterHere,
      ...nodesAfterHereUpperScope
    ]

    // Replace perform expression with a call to this.handle
    const continueHandle = args => (
      t.arrowFunctionExpression(
        args,
        t.blockStatement(copiedRestOfBody)
      )
    ) // (var) => { ... }

    const thisHandleCall = args => (
      t.callExpression(
        thisMember('handle'),
        [
          node.argument,
          continueHandle(args)
        ]
      )
    ) // this.handle(args)

    const mapPerformExpressionWhenInsideOf = {
      AssignmentExpression: () => {
        path.parentPath.replaceWithMultiple([
          thisHandleCall([path.parentPath.node.left]),
          t.returnStatement()
        ])
      },

      ExpressionStatement: () => {
        path.replaceWithMultiple([
          thisHandleCall([]),
          t.returnStatement()
        ])
      },

      VariableDeclarator: () => {
        path.parentPath.parentPath.replaceWithMultiple([
          thisHandleCall([path.parentPath.node.id]),
          t.returnStatement()
        ])
      }
    }

    const performCanBeUsedAt = Object.keys(mapPerformExpressionWhenInsideOf)
    if (performCanBeUsedAt.includes(path.parentPath.node.type) === false) {
      throw new TypeError(`Perform Expression only can be used with [${performCanBeUsedAt.join(',')}], but where as used with "${path.parentPath.node.type}"`)
    }

    mapPerformExpressionWhenInsideOf[path.parentPath.node.type]()
  },

  ResumeStatement(path) {
    const { node } = path

    const callNextWithArgs = (
      t.callExpression(
        t.identifier('next'),
        [node.argument]
      )
    ) // next(args)

    path.parentPath.replaceWith(callNextWithArgs)
  },

  CallExpression(path) {
    const { node } = path

    if (!node.injectEffects) {
      return
    }

    const calleeBind = (
      t.memberExpression(
        t.Identifier(node.callee.name),
        t.Identifier('bind')
      )
    ) // calle.bind

    const calleeBindCallThis = (
      t.callExpression(
        calleeBind,
        [
          t.Identifier('this')
        ]
      )
    ) // calle.bind(this)

    const calleeBindCallThisCallArgs = (
      t.callExpression(
        calleeBindCallThis,
        node.arguments
      )
    ) // calle.bind(this)(args)

    path.replaceWith(calleeBindCallThisCallArgs)
  },

  TryStatement(path) {
    const { scope, node } = path

    if (node.handleEffects === null) {
      return
    }

    const [variablesHoisted, initializer, cases] = traverseStateMachine(
      scope,
      node,
      node.block.body,
      (node) => (node.callee.name === 'handleEffect'),
      this
    )

    const letHandleEffect = (
      t.variableDeclaration(
        'let',
        [t.variableDeclarator(t.Identifier('handleEffect'))]
      )
    ) // let handleEffect

    const handleEffectMethod = (
      t.objectMethod(
        'method',
        t.Identifier('handle'),
        [t.Identifier('effect'), t.Identifier('next')],
        node.handleEffects
      )
    )

    const stateMachineProperty = (
      t.objectProperty(
        t.identifier('stateMachine'),
        t.arrowFunctionExpression(
          [t.identifier('result')],
          t.blockStatement([
            t.switchStatement(
              t.identifier('step'),
              cases
            )
          ])
          // node.block.body
        )
      )
    ) // stateMachine: (result) => { switch (step) { ... } }

    const assignHandleEffect = (
      t.assignmentExpression(
        '=',
        t.Identifier('handleEffect'),
        t.arrowFunctionExpression(
          [t.Identifier('step')],
          t.objectExpression([
            handleEffectMethod,
            stateMachineProperty
          ])
        )
      )
    ) // handleEffect = { handle(effect) { ... } }

    path.replaceWith(
      selfInvokingFunctions(
        t.blockStatement([
          variablesHoisted,
          letHandleEffect,
          t.toStatement(assignHandleEffect),
          t.expressionStatement(initializer)
        ])
      )
    )
  }
})

const result = generator.default(ast, {}, code)

console.log(result.code)
