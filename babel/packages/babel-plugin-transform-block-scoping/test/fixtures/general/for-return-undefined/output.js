(function () {
  var _loop = function (i) {
    fns.push(function () {
      return i;
    });
    return {
      v: void 0
    };
  };

  for (var i in nums) {
    var _ret = _loop(i);

    if (typeof _ret === "object") return _ret.v;
  }
})();
