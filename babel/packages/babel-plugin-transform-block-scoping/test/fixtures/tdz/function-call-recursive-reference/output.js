var x = babelHelpers.temporalUndefined;

function f(i) {
  return () => {
    babelHelpers.temporalRef(x, "x");
    f(i - 1);
  };
}

var g = f(1);
x = void 0;
g();
