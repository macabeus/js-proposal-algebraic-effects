class Foo {
  constructor(status) {
    Object.defineProperty(this, _getStatus, {
      value: _getStatus2
    });
    this.status = status;
  }

  getCurrentStatus() {
    return babelHelpers.classPrivateFieldLooseBase(this, _getStatus)[_getStatus]();
  }

  setCurrentStatus(newStatus) {
    this.status = newStatus;
  }

  getFakeStatus(fakeStatus) {
    var fakeGetStatus = babelHelpers.classPrivateFieldLooseBase(this, _getStatus)[_getStatus];

    return function () {
      return fakeGetStatus.call({
        status: fakeStatus
      });
    };
  }

  getFakeStatusFunc() {
    return {
      status: 'fake-status',
      getFakeStatus: babelHelpers.classPrivateFieldLooseBase(this, _getStatus)[_getStatus]
    };
  }

}

var _getStatus = babelHelpers.classPrivateFieldLooseKey("getStatus");

var _getStatus2 = function _getStatus2() {
  return this.status;
};
