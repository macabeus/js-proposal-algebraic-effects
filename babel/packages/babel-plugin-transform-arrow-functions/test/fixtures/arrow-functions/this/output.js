function b() {
  var _this = this;

  var t = function (x) {
    return _this.x + x;
  };
}

class Foo extends function () {} {
  constructor() {
    var _this2;

    var foo = function () {
      return _this2;
    };

    if (true) {
      console.log((super(), _this2 = this), foo());
    } else {
      super();
      _this2 = this;
      console.log(foo());
    }
  }

}
