define(["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.f = _exports.e = _exports.c = _exports.a = _exports.test = void 0;
  var test = 2;
  _exports.test = test;
  _exports.test = test = 5;
  _exports.test = test = test + 1;

  (function () {
    var test = 2;
    test = 3;
    test++;
  })();

  var a = 2;
  _exports.a = a;
  _exports.a = a = 3;
  var b = 2;
  _exports.c = b;
  _exports.c = b = 3;
  var d = 3;
  _exports.f = _exports.e = d;
  _exports.f = _exports.e = d = 4;
});
