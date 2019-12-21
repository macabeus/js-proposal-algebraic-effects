class Cl {
  static publicGetPrivateField() {
    return babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue];
  }

  static publicSetPrivateField(newValue) {
    babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue] = newValue;
  }

  static get publicFieldValue() {
    return Cl.publicField;
  }

  static set publicFieldValue(newValue) {
    Cl.publicField = newValue;
  }

  static testUpdates() {
    babelHelpers.classPrivateFieldLooseBase(Cl, _privateField)[_privateField] = 0;
    Cl.publicField = 0;
    babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue] = babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue]++;
    Cl.publicFieldValue = Cl.publicFieldValue++;
    ++babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue];
    ++Cl.publicFieldValue;
    babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue] += 1;
    Cl.publicFieldValue += 1;
    babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue] = -(babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue] ** babelHelpers.classPrivateFieldLooseBase(Cl, _privateFieldValue)[_privateFieldValue]);
    Cl.publicFieldValue = -(Cl.publicFieldValue ** Cl.publicFieldValue);
  }

}

var _privateField = babelHelpers.classPrivateFieldLooseKey("privateField");

var _privateFieldValue = babelHelpers.classPrivateFieldLooseKey("privateFieldValue");

var _set_privateFieldValue = function (newValue) {
  babelHelpers.classPrivateFieldLooseBase(Cl, _privateField)[_privateField] = newValue;
};

var _get_privateFieldValue = function () {
  return babelHelpers.classPrivateFieldLooseBase(Cl, _privateField)[_privateField];
};

Object.defineProperty(Cl, _privateField, {
  writable: true,
  value: "top secret string"
});
Cl.publicField = "not secret string";
Object.defineProperty(Cl, _privateFieldValue, {
  get: _get_privateFieldValue,
  set: _set_privateFieldValue
});
