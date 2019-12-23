(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["foo", "foo-bar", "./directory/foo-bar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("foo"), require("foo-bar"), require("./directory/foo-bar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.foo, global.fooBar, global.fooBar);
    global.input = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_foo, _fooBar, _fooBar2) {
  "use strict";
});
