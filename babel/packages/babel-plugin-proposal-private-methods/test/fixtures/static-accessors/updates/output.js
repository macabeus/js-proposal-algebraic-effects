class Cl {
  static publicGetPrivateField() {
    return babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateFieldValue);
  }

  static publicSetPrivateField(newValue) {
    babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateFieldValue, newValue);
  }

  static get publicFieldValue() {
    return Cl.publicField;
  }

  static set publicFieldValue(newValue) {
    Cl.publicField = newValue;
  }

  static testUpdates() {
    var _Cl$privateFieldValue, _Cl$privateFieldValue2;

    babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateField, 0);
    Cl.publicField = 0;
    babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateFieldValue, (babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateFieldValue, (_Cl$privateFieldValue2 = +babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateFieldValue)) + 1), _Cl$privateFieldValue2));
    Cl.publicFieldValue = Cl.publicFieldValue++;
    babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateFieldValue, +babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateFieldValue) + 1);
    ++Cl.publicFieldValue;
    babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateFieldValue, babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateFieldValue) + 1);
    Cl.publicFieldValue += 1;
    babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateFieldValue, -(babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateFieldValue) ** babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateFieldValue)));
    Cl.publicFieldValue = -(Cl.publicFieldValue ** Cl.publicFieldValue);
  }

}

var _set_privateFieldValue = function (newValue) {
  babelHelpers.classStaticPrivateFieldSpecSet(Cl, Cl, _privateField, newValue);
};

var _get_privateFieldValue = function () {
  return babelHelpers.classStaticPrivateFieldSpecGet(Cl, Cl, _privateField);
};

var _privateField = {
  writable: true,
  value: "top secret string"
};
babelHelpers.defineProperty(Cl, "publicField", "not secret string");
var _privateFieldValue = {
  get: _get_privateFieldValue,
  set: _set_privateFieldValue
};
