class A {}

(function (_A) {
  let C;

  (function (_C) {
    class G {}

    _C.G = G;
    const E = _C.E = 7;
  })(C || (C = _A.C || (_A.C = {})));

  function M() {}

  (function (_M) {
    const N = _M.N = C.E;
  })(M || (M = {}));

  function D() {}

  _A.D = D;

  (function (_D) {
    const C = 5;
    let H;

    (function (H) {
      H[H["I"] = 11] = "I";
      H[H["J"] = 13] = "J";
      H[H["K"] = 17] = "K";
    })(H || (H = {}));

    _D.H = H;
  })(D || (D = _A.D || (_A.D = {})));

  class F {}

  (function (_F) {})(F || (F = {}));

  let G;

  (function (_G) {})(G || (G = {}));

  let L;

  (function (L) {
    L[L["M"] = 19] = "M";
  })(L || (L = {}));
})(A || (A = {}));
