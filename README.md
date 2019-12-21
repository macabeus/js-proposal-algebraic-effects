# js-proposal-algebraic-effects
> 📐Let there be algebraic effects in JS

<p align="center">
  <img src="https://i.imgur.com/daBFyR1.png">
</p>

# Why?

No more **function color**! Yes **one-shot delimited continuation**!

What the hell!? Well... I **really** recommend that you read [this Abramov's blogpost](https://overreacted.io/algebraic-effects-for-the-rest-of-us/) explaing about algebraic effects - and how it could be very useful on our JS code!

This project is a runnable POC with a Babel's "plugin", so you could write a code and taste this new concept in JS. Its features, syntax and goals are very inspired by Abramov's blogpost that I said. In short, with algebraic effects you could separate _what_ from the _how_ and have less refactors.

Related:
- [Sebatian's post "One-shot Delimited Continuations with Effect Handlers" at ES Discuss forum](https://esdiscuss.org/topic/one-shot-delimited-continuations-with-effect-handlers)

> It's a very simple proof of concept! There are a lot of works to improve this idea, spec and implementation.

# What it adds on the language?

Again, the syntax need to be improved. But in this moment we have:

- **Expression `perform <value>`**

You could use this keyword inside of any function (not arrow function!) in order to launch an effect.<br />
Similar to `throw`, it'll search for the closest `try/handle` at call stack to perform an effect passing `<value>` as the effect name. Unlike `throw`, `perform` is an expression and will returns a value.

```js
if (name === nulll) {
  name = perform 'ask_name'
}
```

- **Block `handle` at `try`**

As like `catch` block, you should use it to handle the effect launched inside of `try` block. At scope of `handle` is injected implicitly a variable called `effect`, with the `<value>` from `perform`.

```js
try {
  ...
} handle {
  if (effect === 'ask_name') {
    ...
  }
}
```


- **Statement `resume`**

Should be used inside of `handle` block in order to resume to `perform` expression, returning a value. 

```js
if (effect === 'ask_name') {
  resume 'Arya Stark'
}
```

One of the most powerful features is to use inside a block with an async operation. So you could call an async operator without need to use an async/await operators on the function - that is, less refactors and a function could be sync and async at the same time!

```js
if (effect === 'ask_name') {
  setTimeout(() => {
    resume 'Arya Stark';
  }, 1000);
}
```

- **operator `@@`**

Unfortunately, we still can't inject implicitly the effects inside of a function call outside of `try` block, so you should use `@@` at a function call that could launchs effects.

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
} handle {
  ...
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

See at [Issues tab](https://github.com/macabeus/js-proposal-algebraic-effects/issues) and [TODOs](https://github.com/macabeus/js-proposal-algebraic-effects/search?q=TODO&unscoped_q=TODO).

