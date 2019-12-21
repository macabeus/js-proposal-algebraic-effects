(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./evens"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./evens"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.evens);
    global.input = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _evens) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.nextOdd = nextOdd;
  _exports.isOdd = void 0;

  function nextOdd(n) {
    return (0, _evens.isEven)(n) ? n + 1 : n + 2;
  }

  var isOdd = function (isEven) {
    return function (n) {
      return !isEven(n);
    };
  }(_evens.isEven);

  _exports.isOdd = isOdd;
});
