class Cl {
  constructor() {
    _privateFieldValue.set(this, {
      get: _get_privateFieldValue,
      set: _set_privateFieldValue
    });

    _privateField.set(this, {
      writable: true,
      value: "top secret string"
    });

    this.publicField = "not secret string";
  }

  publicGetPrivateField() {
    return babelHelpers.classPrivateFieldGet(this, _privateFieldValue);
  }

  publicSetPrivateField(newValue) {
    babelHelpers.classPrivateFieldSet(this, _privateFieldValue, newValue);
  }

  get publicFieldValue() {
    return this.publicField;
  }

  set publicFieldValue(newValue) {
    this.publicField = newValue;
  }

  testUpdates() {
    var _this$privateFieldVal, _this$privateFieldVal2;

    babelHelpers.classPrivateFieldSet(this, _privateField, 0);
    this.publicField = 0;
    babelHelpers.classPrivateFieldSet(this, _privateFieldValue, (babelHelpers.classPrivateFieldSet(this, _privateFieldValue, (_this$privateFieldVal2 = +babelHelpers.classPrivateFieldGet(this, _privateFieldValue)) + 1), _this$privateFieldVal2));
    this.publicFieldValue = this.publicFieldValue++;
    babelHelpers.classPrivateFieldSet(this, _privateFieldValue, +babelHelpers.classPrivateFieldGet(this, _privateFieldValue) + 1);
    ++this.publicFieldValue;
    babelHelpers.classPrivateFieldSet(this, _privateFieldValue, babelHelpers.classPrivateFieldGet(this, _privateFieldValue) + 1);
    this.publicFieldValue += 1;
    babelHelpers.classPrivateFieldSet(this, _privateFieldValue, -(babelHelpers.classPrivateFieldGet(this, _privateFieldValue) ** babelHelpers.classPrivateFieldGet(this, _privateFieldValue)));
    this.publicFieldValue = -(this.publicFieldValue ** this.publicFieldValue);
  }

}

var _privateField = new WeakMap();

var _privateFieldValue = new WeakMap();

var _get_privateFieldValue = function () {
  return babelHelpers.classPrivateFieldGet(this, _privateField);
};

var _set_privateFieldValue = function (newValue) {
  babelHelpers.classPrivateFieldSet(this, _privateField, newValue);
};
