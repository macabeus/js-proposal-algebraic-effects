function test() {
  (function (e) {
    throw e;
  })(new Error('test'));
}
