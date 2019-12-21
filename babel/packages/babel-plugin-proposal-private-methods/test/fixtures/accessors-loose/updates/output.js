class Cl {
  constructor() {
    Object.defineProperty(this, _privateFieldValue, {
      get: _get_privateFieldValue,
      set: _set_privateFieldValue
    });
    Object.defineProperty(this, _privateField, {
      writable: true,
      value: "top secret string"
    });
    this.publicField = "not secret string";
  }

  publicGetPrivateField() {
    return babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue];
  }

  publicSetPrivateField(newValue) {
    babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue] = newValue;
  }

  get publicFieldValue() {
    return this.publicField;
  }

  set publicFieldValue(newValue) {
    this.publicField = newValue;
  }

  testUpdates() {
    babelHelpers.classPrivateFieldLooseBase(this, _privateField)[_privateField] = 0;
    this.publicField = 0;
    babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue] = babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue]++;
    this.publicFieldValue = this.publicFieldValue++;
    ++babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue];
    ++this.publicFieldValue;
    babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue] += 1;
    this.publicFieldValue += 1;
    babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue] = -(babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue] ** babelHelpers.classPrivateFieldLooseBase(this, _privateFieldValue)[_privateFieldValue]);
    this.publicFieldValue = -(this.publicFieldValue ** this.publicFieldValue);
  }

}

var _privateField = babelHelpers.classPrivateFieldLooseKey("privateField");

var _privateFieldValue = babelHelpers.classPrivateFieldLooseKey("privateFieldValue");

var _get_privateFieldValue = function () {
  return babelHelpers.classPrivateFieldLooseBase(this, _privateField)[_privateField];
};

var _set_privateFieldValue = function (newValue) {
  babelHelpers.classPrivateFieldLooseBase(this, _privateField)[_privateField] = newValue;
};
