var x = babelHelpers.temporalUndefined;

function f() {
  babelHelpers.temporalRef(x, "x");
}

Math.random() === 2 && f();
x = 3;
expect(x).toBe(3);
