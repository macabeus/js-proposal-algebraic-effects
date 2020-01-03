# js-proposal-algebraic-effects

> 📐Let there be algebraic effects in JavaScript

<p align="center">
  <img src="https://i.imgur.com/OfAmREf.png">
</p>
 
# Why?

No more **function color**! Yes **one-shot delimited continuation**!

What the hell?! Well... I **really** recommend that you read [this blog post by Dan Abramov](https://overreacted.io/algebraic-effects-for-the-rest-of-us/) explaining algebraic effects - and how it could be very useful on our JavaScript code!

This project is a runnable POC with a Babel's "plugin", so you could write some code and taste this new concept in JavaScript. Its features, syntax, and goals are very inspired by Dan Abramov's blog post mentioned above. In short, with algebraic effects, you could separate _what_ from the _how_ and have fewer refactors.

Related:

- [Sebatian's post "One-shot Delimited Continuations with Effect Handlers" at ES Discuss forum](https://esdiscuss.org/topic/one-shot-delimited-continuations-with-effect-handlers)

> It's a very simple proof of concept! There is a lot of work to improve this idea, spec, and implementation.

# What does it add to the language?

Again, the syntax needs to be improved. But at this moment we have:

- **Expression `perform <value>`**

You could use this keyword inside of any function (not arrow functions!) in order to launch an effect.<br />
Similar to `throw`, it'll search for the closest `try/handle` at call stack to perform an effect passing `<value>` as the effect name. Unlike `throw`, `perform` is an expression and will return a value to continue running the code.

```js
if (name === null) {
 name = perform 'ask_name'
 console.log(name) // after evaluate perform, will run this line
}
```

- **Block `handle` at `try`**

Just like the `catch` block, you should use it to handle the effect launched inside of the `try` block.<br />
And again as like `catch` block, this block has a parameter to bind the `<value>` used at `perform`.

```js
try {
 ...
} handle (effect) {
 if (effect === 'ask_name') {
   ...
 }
}
```

- **Statement `resume`**

It should be used inside of the `handle` block in order to resume the `perform` expression, returning a value.<br />
It must be used inside of `handle` block and must be in `handle` block directly.

```js
try {
 ...
} handle (effect) {
 if (effect === 'ask_name') {
  resume 'Arya Stark'
 }
}
```

One of its most powerful features is to use inside a block with an async operation so you could call an async operator without the need to use an async/await operators on the function - that is, less refactors and a function could be sync and async at the same time!

```js
if (effect === 'ask_name') {
 await wait(1000)
 resume 'Arya Stark'
}
```

- **operator `@@`**

Unfortunately, we still can't inject implicitly the effects inside of a function call outside of the `try` block, so you should use `@@` at a function call that could launch effects.

```js
function getName(user) {
 let name = user.name;
 if (name === null) {
   name = perform 'ask_name';
 }

 return name;
}

function displayNameCapitalized(user) {
 const name = getName@@(user) // need to use @@
 console.log(name.toUpperCase())
}

const arya = { name: null };

try {
 displayNameCapitalized(arya); // doesn't need to use @@
} handle (effect) {
 ...
}
```

### Edge cases

- no `resume`

Since `perform` is an expression, it always return a value. If `resume` wasn't called after a perform, it'll be `undefined`:

```js
function sayName () {
 const name = perform 'a_typo_error'
 console.log(name) // undefined 
}

try {
 sayName()
} handle (effect) {
 if (effect === 'ask_name') {
  resume 'Arya Stark'
 }
}
```

- no `try/handle` block

If a `perform` is called without a `try/handle`, an expection will be launched.

```js
function sayName () {
 const name = perform 'ask_name' // will throw Error('Unhandled effect')
 console.log(name)
}

sayName()
```

- nested `try/handle` (not implemented yet)

If you have two or more nested `try/handle`, you'll need to call `resume` on `handle` block

```js
function sayNameAndAge () {
 const name = perform 'ask_name'
 const age = perform 'ask_age'
 console.log(name, age) // 'Arya Stark 25'
}

function wrapperAgeEffect () {
 try {
  sayNameAndAge()
 } handle (effect) {
  if (effect === 'ask_age') {
   resume 25
  }

  const result = perform effect
  return result
 }
}

try {
 wrapperAgeEffect()
} handle (effect) {
 if (effect === 'ask_name') {
  resume 'Arya Stark'
 }
}
```

# How to run

1 - Clone this repo:

```
> git clone git@github.com:macabeus/js-proposal-algebraic-effects.git
```

2 - Run some commands on Babel:

```
> cd babel
> make bootstrap
> make watch
```

3 - So you could compile [the sample](https://github.com/macabeus/js-proposal-algebraic-effects/blob/master/samples/basic.js) with:

```
> cd babel-algebraic-effects
> yarn start
```

# TODO

Check [Issues](https://github.com/macabeus/js-proposal-algebraic-effects/issues) and [TODOs](https://github.com/macabeus/js-proposal-algebraic-effects/search?q=TODO&unscoped_q=TODO).
