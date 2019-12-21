"use strict";

var _foo = _interopRequireDefault(require("foo"));

var Bar = _interopRequireDefault(require("bar"));

var _baz = require("baz");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_foo.default = (42, function () {
  throw new Error('"' + "Foo" + '" is read-only.');
}());
Bar = (43, function () {
  throw new Error('"' + "Bar" + '" is read-only.');
}());
_baz.Baz = (44, function () {
  throw new Error('"' + "Baz" + '" is read-only.');
}());
({
  Foo
} = ({}, function () {
  throw new Error('"' + "Foo" + '" is read-only.');
}()));
({
  Bar
} = ({}, function () {
  throw new Error('"' + "Bar" + '" is read-only.');
}()));
({
  Baz
} = ({}, function () {
  throw new Error('"' + "Baz" + '" is read-only.');
}()));
({
  prop: Foo
} = ({}, function () {
  throw new Error('"' + "Foo" + '" is read-only.');
}()));
({
  prop: Bar
} = ({}, function () {
  throw new Error('"' + "Bar" + '" is read-only.');
}()));
({
  prop: Baz
} = ({}, function () {
  throw new Error('"' + "Baz" + '" is read-only.');
}()));
