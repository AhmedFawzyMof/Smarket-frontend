"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  "use strict";

  var t = /*#__PURE__*/function () {
    function t(_t) {
      _classCallCheck(this, t);
      this.params = _t;
    }
    _createClass(t, [{
      key: "setTitle",
      value: function setTitle(_t2) {
        document.title = _t2;
      }
    }, {
      key: "setStyle",
      value: function setStyle(_t3) {
        document.querySelector("[data-style]").href = _t3;
      }
    }, {
      key: "getHtml",
      value: function () {
        var _getHtml = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", "");
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function getHtml() {
          return _getHtml.apply(this, arguments);
        }
        return getHtml;
      }()
    }]);
    return t;
  }();
  var e = /*#__PURE__*/function (_t4) {
      _inherits(e, _t4);
      var _super = _createSuper(e);
      function e(t, _e) {
        var _this;
        _classCallCheck(this, e);
        _this = _super.call(this, t, _e), _this.setTitle("Alwadi | Home"), _this.setStyle("/static/css/index.css");
        return _this;
      }
      _createClass(e, [{
        key: "getHtml",
        value: function () {
          var _getHtml2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var t, _e2, n, a, i, s, r, _d, _p, _u, c, _h, _v, _m, o, _loop, _f, l;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  loading(!0), localStorage.getItem("home") ? (localStorage.removeItem("home"), location.reload()) : localStorage.setItem("home", "loded");
                  _context3.next = 3;
                  return fetch("http://192.168.1.5:5500/");
                case 3:
                  t = _context3.sent;
                  _context3.next = 6;
                  return t.json();
                case 6:
                  _e2 = _context3.sent;
                  delete _e2.exp, _e2.Home ? (n = _e2.Home.Categories, a = _e2.Home.Offers, i = _e2.Home.Products) : (n = _e2.Categories, a = _e2.Offers, i = _e2.Products);
                  s = "", r = "";
                  for (_d = 0; _d < a.length; _d++) {
                    _p = a[_d], _u = "https://drive.google.com/uc?export=view&id=" + _p.Image.split("/")[5];
                    s += "\n          <a data-link href='/product/".concat(_p.Id, "' key='").concat(_d, "'>\n            <img id='carousel' src=\"").concat(_u, "\" />\n          </a>\n      "), r += "\n      <div class='dot' id='d".concat(_d + 1, "'></div>\n      ");
                  }
                  c = "";
                  for (_h = 0; _h < n.length; _h++) {
                    _v = n[_h], _m = "https://drive.google.com/uc?export=view&id=" + _v.Image.split("/")[5];
                    c += "\n      <div class='category' key=\"".concat(_h, "\">\n        <a data-link href=\"/category/").concat(_v.Name, "\">\n          <img src=\"").concat(_m, "\" />\n        </a>\n        <p>").concat(_v.Name, "</p>\n      </div>\n      ");
                  }
                  o = "";
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var b, g, y, $, k;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          y = function _y() {
                            return b.Offer > 0 ? "<p class=\"price offer\">".concat(b.Price + b.Offer, " \u062C</p>\n            <p class=\"price\">").concat(b.Price, " \u062C</p>\n            ") : "<p class=\"price\">".concat(b.Price, " \u062C</p>");
                          };
                          g = function _g() {
                            var t = "product";
                            return 1 !== b.Available && (t += " notavailable"), b.Offer > 0 && (t += " offer"), t;
                          };
                          b = i[_f];
                          $ = b.Name.substr(0, 17) + "...", k = "https://drive.google.com/uc?export=view&id=" + b.Image.split("/")[5];
                          o += "\n      <div class='".concat(g(), "' id='").concat(b.Id, "' key='").concat(_f, "'>\n        <button id='addtofav' onclick='addToFav(").concat(b.Id, ")'>\n        <i class=\"bx bxs-heart\"></i>\n        </button>\n        <a href='/product/").concat(b.Id, "' data-link>\n            <img class='image' src='").concat(k, "' />\n          <div class='body'>\n            <p>").concat($, "</p>\n          </div>\n        </a>\n        ").concat(y(), "\n      </div>\n      ");
                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop);
                  });
                  _f = 0;
                case 15:
                  if (!(_f < i.length)) {
                    _context3.next = 20;
                    break;
                  }
                  return _context3.delegateYield(_loop(), "t0", 17);
                case 17:
                  _f++;
                  _context3.next = 15;
                  break;
                case 20:
                  l = "\n       <div class=\"wrapper\">\n    <div class=\"carousel\">\n    ".concat(s, "\n    </div>\n    <div class='dots'>\n    ").concat(r, "\n    </div>\n    </div>\n    <div class='container'>\n    ").concat(c, "\n    </div>\n    <div class=\"containerProducts\">\n    ").concat(o, "\n    </div>\n    ");
                  return _context3.abrupt("return", (localStorage.getItem("cart") || localStorage.setItem("cart", "[]"), fetch("/static/siteJs/index.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), l));
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _callee2);
          }));
          function getHtml() {
            return _getHtml2.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return e;
    }(t),
    n = /*#__PURE__*/function (_t5) {
      _inherits(n, _t5);
      var _super2 = _createSuper(n);
      function n(t, e) {
        var _this2;
        _classCallCheck(this, n);
        _this2 = _super2.call(this, t, e), _this2.auth = e, _this2.setTitle("Alwadi | Profile"), _this2.setStyle("/static/css/profile.css");
        return _this2;
      }
      _createClass(n, [{
        key: "getHtml",
        value: function () {
          var _getHtml3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _t6, _e3, _n;
            return _regeneratorRuntime().wrap(function _callee3$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!this.auth) {
                    _context4.next = 11;
                    break;
                  }
                  if (!(loading(!0), localStorage.getItem("AuthToken"))) {
                    _context4.next = 10;
                    break;
                  }
                  _context4.next = 4;
                  return fetch("http://192.168.1.5:5500/profile", {
                    method: "post",
                    body: JSON.stringify({
                      token: localStorage.getItem("AuthToken")
                    })
                  });
                case 4:
                  _t6 = _context4.sent;
                  _context4.next = 7;
                  return _t6.json();
                case 7:
                  _e3 = _context4.sent;
                  _n = _e3.User;
                  return _context4.abrupt("return", (_e3.Error && (localStorage.removeItem("AuthToken"), CreateToast({
                    type: "error",
                    msg: "حدث خطأ ما، يرجى تسجيل الدخول",
                    time: 2e3
                  }), setTimeout(function () {
                    window.location = "/";
                  }, 2e3)), fetch("/static/siteJs/profile.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), "\n          <div class=\"profile\">\n            <p>\u0627\u0644\u0627\u0633\u0645: ".concat(_n.Username, "</p>\n            <p>\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A: ").concat(_n.Email, "</p>\n            <p>\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641: ").concat(_n.Phone, "</p>\n            <p>\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A: ").concat(_n.Spare_phone, "</p>\n            <button onclick=\"logout()\">\u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C</button>\n          </div>        \n        ")));
                case 10:
                  return _context4.abrupt("return", (loading(!1), "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "));
                case 11:
                case "end":
                  return _context4.stop();
              }
            }, _callee3, this);
          }));
          function getHtml() {
            return _getHtml3.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return n;
    }(t),
    a = /*#__PURE__*/function (_t7) {
      _inherits(a, _t7);
      var _super3 = _createSuper(a);
      function a(t, e) {
        var _this3;
        _classCallCheck(this, a);
        _this3 = _super3.call(this, t, e), _this3.auth = e, _this3.setTitle("Alwadi | تاريخ الطلب"), _this3.setStyle("/static/css/orderHistory.css");
        return _this3;
      }
      _createClass(a, [{
        key: "getHtml",
        value: function () {
          var _getHtml4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _t8, _e4, n;
            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(loading(!0), this.auth)) {
                    _context5.next = 11;
                    break;
                  }
                  if (!localStorage.getItem("AuthToken")) {
                    _context5.next = 10;
                    break;
                  }
                  _context5.next = 4;
                  return fetch("http://192.168.1.5:5500/orderhistory", {
                    method: "post",
                    body: JSON.stringify({
                      token: localStorage.getItem("AuthToken")
                    })
                  });
                case 4:
                  _t8 = _context5.sent;
                  _context5.next = 7;
                  return _t8.json();
                case 7:
                  _e4 = _context5.sent;
                  n = _e4.Orders.map(function (t) {
                    var e = t.Id.substr(0, 8),
                      n = t.Date.replace("T", " ").replace(".", " ").substr(0, 20);
                    return "<div class=\"order\">\n            <div class=\"TH\">\n              <h3>\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628</h3>\n              <h3>\u0627\u0644\u062A\u0627\u0631\u064A\u062E</h3>\n              <h3>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639</h3>\n              <h3>\u0645\u062F\u0641\u0648\u0639</h3>\n              <h3>\u062A\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644</h3>\n              <h3>\u062A\u0645 \u062A\u0623\u0643\u064A\u062F</h3>\n              <a href=\"/order/".concat(t.Id, "\">\u062A\u0641\u0627\u0635\u064A\u0644</a>\n            </div>\n            <div class=\"TB\">\n              <p>").concat(e, "</p>\n              <p>").concat(n, "</p>\n              <p>").concat(t.Method, "</p>\n              <p>").concat(1 == t.Paid ? "نعم" : "لا", "</p>\n              <p>").concat(1 == t.Delivered ? "نعم" : "لا", "</p>\n              <p>").concat(1 == t.Confirmed ? "نعم" : "لا", "</p>\n              ").concat(1 == t.Confirmed ? '<p class="cancel off">الغاء الطلب</p>' : "<button class=\"cancel\" onclick=\"CancelOrder('".concat(t.Id, "', ").concat(t.Confirmed, ")\">\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628</button>"), "\n            </div>\n           </div>");
                  });
                  return _context5.abrupt("return", (_e4.Error && (localStorage.removeItem("AuthToken"), CreateToast({
                    type: "error",
                    msg: "حدث خطأ ما، يرجى تسجيل الدخول",
                    time: 2e3
                  }), setTimeout(function () {
                    window.location = "/";
                  }, 2e3)), fetch("/static/siteJs/orderHistory.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), "\n          <div class=\"table\">\n          ".concat(n, "\n          </div>\n        ")));
                case 10:
                  return _context5.abrupt("return", (loading(!1), "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "));
                case 11:
                case "end":
                  return _context5.stop();
              }
            }, _callee4, this);
          }));
          function getHtml() {
            return _getHtml4.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return a;
    }(t),
    i = /*#__PURE__*/function (_t9) {
      _inherits(i, _t9);
      var _super4 = _createSuper(i);
      function i(t, e) {
        var _this4;
        _classCallCheck(this, i);
        _this4 = _super4.call(this, t, e);
        var n = decodeURI(t.id);
        _this4.productId = n, _this4.setStyle("/static/css/product.css");
        return _this4;
      }
      _createClass(i, [{
        key: "getHtml",
        value: function () {
          var _getHtml5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var t, e, n;
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  loading(!0);
                  _context6.next = 3;
                  return fetch("http://192.168.1.5:5500/product/" + this.productId);
                case 3:
                  t = _context6.sent;
                  _context6.next = 6;
                  return t.json();
                case 6:
                  e = _context6.sent.Product;
                  this.setTitle("Alwadi | " + e.Name);
                  n = "\n    <div class='image'>\n      <img src='https://drive.google.com/uc?export=view&id=".concat(e.Image.split("/")[5], "' />\n    </div>\n    <div class='details'>\n      <div class='box1'>\n        <p class='compony'>\u062A\u0631\u064A\u062F \u0631\u0624\u064A\u0629 \u0645\u0646\u062A\u062C\u0627\u062A \u0623\u062E\u0631\u0649 \u0645\u0646 : <a href='/compony/").concat(e.Company, "' data-link class='seemore'>").concat(e.Company, "</a></p>\n        <div class='prices'>\n          ").concat(function (t) {
                    var e = t.Price + t.Offer,
                      n = Math.abs(e - t.Price) / e * 100;
                    return t.Offer > 0 ? "\n        <h2 class='price'>".concat(t.Price, " \u062C</h2>\n        <p class='offer'>").concat(t.Price + t.Offer, " \u062C</p>\n        <p class='percent'>").concat(Math.trunc(n), "%</p>\n        ") : "\n        <h2 class='price'>".concat(t.Price, " \u062C</h2>\n        ");
                  }(e), "\n        </div>\n        <h2>").concat(e.Name, "</h2>\n        <p>").concat(e.Description, "</p>\n      </div>\n      <div class='box2'>\n          ").concat(function (t) {
                    if (1 == t.Available) {
                      var _e5 = "";
                      var _n2 = "https://drive.google.com/uc?export=view&id=" + t.Image.split("/")[5];
                      return t.Types.forEach(function (t, a) {
                        _e5 += "\n        <div class=\"type\" id=\"".concat(t.Id, "\">\n          <label for=\"pt").concat(a, "\">\n          <img src=\"").concat(_n2, "\" />\n           ").concat(t.Offer > 0 ? "<p class=\"price offer\">\u0627\u0644\u0633\u0639\u0631: ".concat(t.Price + t.Offer, " \u062C</p>\n                <p class=\"price\">").concat(t.Price, " \u062C</p>\n                ") : "<p class=\"price\">\u0627\u0644\u0633\u0639\u0631: ".concat(t.Price, " \u062C</p>"), "\n          <p class=\"weight\">\u0627\u0644\u0648\u0632\u0646: ").concat(t.Portion, " ").concat(t.Uint, "</p>\n          </label>\n          <input type=\"radio\" id=\"pt").concat(a, "\" name=\"pt1\">\n          <input type=\"hidden\" id=\"price\" value=\"").concat(t.Price, "\">\n          <input type=\"hidden\" id=\"size\" value=\"").concat(t.Portion, " ").concat(t.Uint, "\">\n        </div>\n        ");
                      }), "\n        <div class=\"types\">\n        ".concat(_e5, "\n        </div>\n        <button class=\"addToCart\" onclick=\"addTo(").concat(t.Id, ", '").concat(t.Image, "', '").concat(t.Name, "')\">\n        \u0623\u0636\u0641 \u0625\u0644\u0649 \u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642 <i class='bx bxs-cart-add'></i>\n        </button>\n        ");
                    }
                    return "\n        <div class='unAvailable'>\n         <h2>غير متاح</h2>\n        </div>";
                  }(e), "\n      </div>\n    </div>\n    ");
                  return _context6.abrupt("return", (fetch("/static/siteJs/product.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), n));
                case 10:
                case "end":
                  return _context6.stop();
              }
            }, _callee5, this);
          }));
          function getHtml() {
            return _getHtml5.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return i;
    }(t),
    s = /*#__PURE__*/function (_t10) {
      _inherits(s, _t10);
      var _super5 = _createSuper(s);
      function s(t, e) {
        var _this5;
        _classCallCheck(this, s);
        _this5 = _super5.call(this, t, e);
        var n = decodeURI(t.name);
        _this5.company = n, _this5.setTitle("Alwadi | " + _this5.company), _this5.setStyle("/static/css/company.css");
        return _this5;
      }
      _createClass(s, [{
        key: "getHtml",
        value: function () {
          var _getHtml6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var t, e;
            return _regeneratorRuntime().wrap(function _callee6$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  loading(!0);
                  _context7.next = 3;
                  return fetch("http://192.168.1.5:5500/company/" + this.company);
                case 3:
                  t = _context7.sent;
                  _context7.next = 6;
                  return t.json();
                case 6:
                  e = _context7.sent.Products.map(function (t, e) {
                    var n = t.Name.substr(0, 20);
                    var a = "https://drive.google.com/uc?export=view&id=" + t.Image.split("/")[5];
                    return "\n      <div class='".concat(function () {
                      var e = "product";
                      return 1 !== t.Available && (e += " notavailable"), t.Offer > 0 && (e += " offer"), e;
                    }(), "' id='").concat(t.Id, "' key='").concat(e, "'>\n        <button id='addtofav' onclick='addToFav(").concat(t.Id, ")'><i class=\"bx bxs-heart\"></i></button>\n        <a href='/product/").concat(t.Id, "' data-link>\n            <img class='image' src='").concat(a, "' />\n          <div class='body'>\n            <p>").concat(n, "</p>\n          </div>\n        </a>\n        ").concat(t.Offer > 0 ? "<p class=\"price offer\">".concat(t.Price + t.Offer, " \u062C</p>\n            <p class=\"price\">").concat(t.Price, " \u062C</p>\n            ") : "<p class=\"price\">".concat(t.Price, " \u062C</p>"), "\n      </div>\n      ");
                  }).join("");
                  return _context7.abrupt("return", (fetch("/static/siteJs/compony.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), "\n    <div class='containerProducts'>\n     ".concat(e, "\n    </div>\n    ")));
                case 8:
                case "end":
                  return _context7.stop();
              }
            }, _callee6, this);
          }));
          function getHtml() {
            return _getHtml6.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return s;
    }(t),
    r = /*#__PURE__*/function (_t11) {
      _inherits(r, _t11);
      var _super6 = _createSuper(r);
      function r(t, e) {
        var _this6;
        _classCallCheck(this, r);
        _this6 = _super6.call(this, t, e);
        var n = decodeURI(t.name);
        _this6.category = n, _this6.setTitle("Alwadi | " + _this6.category), _this6.setStyle("/static/css/company.css");
        return _this6;
      }
      _createClass(r, [{
        key: "getHtml",
        value: function () {
          var _getHtml7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var t, e, n, a, i, _t12, _e6, _n3, s;
            return _regeneratorRuntime().wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  loading(!0);
                  _context8.next = 3;
                  return fetch("http://192.168.1.5:5500/category/" + this.category);
                case 3:
                  t = _context8.sent;
                  _context8.next = 6;
                  return t.json();
                case 6:
                  e = _context8.sent;
                  n = e.Products;
                  a = e.SubCategories;
                  i = "";
                  for (_t12 = 0; _t12 < a.length; _t12++) {
                    _e6 = a[_t12], _n3 = "https://drive.google.com/uc?export=view&id=" + _e6.Image.split("/")[5];
                    i += "\n      <div class='category' key=\"".concat(_t12, "\">\n        <a data-link href=\"/subcategory/").concat(_e6.Name, "\">\n          <img src=\"").concat(_n3, "\" />\n        </a>\n        <p>").concat(_e6.Name, "</p>\n      </div>\n      ");
                  }
                  s = n.map(function (t, e) {
                    var n = t.Name.substr(0, 17);
                    var a = "https://drive.google.com/uc?export=view&id=" + t.Image.split("/")[5];
                    return "\n      <div class='".concat(function () {
                      var e = "product";
                      return 1 !== t.Available && (e += " notavailable"), t.Offer > 0 && (e += " offer"), e;
                    }(), "' id='").concat(t.Id, "' key='").concat(e, "'>\n        <button id='addtofav' onclick='addToFav(").concat(t.Id, ")'>\n          <i class=\"bx bxs-heart\"></i>\n        </button>\n        <a href='/product/").concat(t.Id, "' data-link>\n            <img class='image' src='").concat(a, "' />\n          <div class='body'>\n            <p>").concat(n, "</p>\n          </div>\n        </a>\n        ").concat(t.offer > 0 ? "<p class=\"price offer\">".concat(t.Price + t.Offer, " \u062C</p>\n            <p class=\"price\">").concat(t.Price, " \u062C</p>\n            ") : "<p class=\"price\">".concat(t.Price, " \u062C</p>"), "\n      </div>\n      ");
                  }).join("");
                  return _context8.abrupt("return", (fetch("/static/siteJs/compony.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), "\n    <div class=\"countainer\">\n    ".concat(i, "\n    </div>\n    <div class='containerProducts'>\n     ").concat(s, "\n    </div>\n    ")));
                case 13:
                case "end":
                  return _context8.stop();
              }
            }, _callee7, this);
          }));
          function getHtml() {
            return _getHtml7.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return r;
    }(t),
    c = /*#__PURE__*/function (_t13) {
      _inherits(c, _t13);
      var _super7 = _createSuper(c);
      function c(t, e) {
        var _this7;
        _classCallCheck(this, c);
        _this7 = _super7.call(this, t, e), _this7.setTitle("My Cart"), _this7.setStyle("/static/css/cart.css");
        return _this7;
      }
      _createClass(c, [{
        key: "getHtml",
        value: function () {
          var _getHtml8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var _e7, n, _t14, a;
            return _regeneratorRuntime().wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (!(loading(!0), Cart.length > 0)) {
                    _context9.next = 6;
                    break;
                  }
                  _e7 = function _e7() {
                    var e = Cart.reduce(function (t, e) {
                      return t + e.quantity * e.price;
                    }, 0);
                    return _t14 >= 551 ? 0 !== length && (quantityInCart.innerHTML = length, cartA[0].appendChild(quantityInCart)) : 0 !== length && (quantityInCart.innerHTML = length, cartA[1].appendChild(quantityInCart)), e;
                  };
                  n = function n() {
                    var t = screen.width;
                    var e = "";
                    return Cart.forEach(function (n) {
                      var a = "https://drive.google.com/uc?export=view&id=" + n.image.split("/")[5];
                      return e += "\n        <div id='".concat(n.id, "' class='productB'>\n            <img src=\"").concat(a, "\"/>\n            <div class=\"ditails\">\n              <a data-link href=\"/product/").concat(n.id, "\">\n                ").concat(function (e) {
                        return t >= 551 ? e.name : e.name.substr(0, 15) + "...";
                      }(n), "\n              </a>\n              <p class=\"weight\">\u0627\u0644\u0648\u0632\u0646: ").concat(n.size, "</p>\n            </div>\n            <div class='quantityDiv'>\n                <div id=\"productFunc\">\n                    <button id='inc' onclick='inc(").concat(n.id, ")'>\n                        <i class='bx bx-plus'></i>\n                    </button>\n                        <p id='quan'>").concat(n.quantity, "</p>\n                    <button id='dec' onclick='dec(").concat(n.id, ")'>\n                        <i class='bx bx-minus'></i>\n                    </button>\n                </div>\n                <div id=\"productTotal\">\n                    <p id='PT'>").concat(n.price * n.quantity, " \u062C<p>\n                    <button onclick=\"removeProduct(").concat(n.id, ")\">\n                    <i class='bx bxs-trash'></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    }), e;
                  };
                  _t14 = screen.width;
                  a = "\n    <div class='Thecart'>\n        <div class='head'>\n            <p>\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642</p>\n            <button onclick='removeAll()'><i class='bx bxs-trash'></i> \u0625\u0632\u0627\u0644\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</button>\n        </div>\n        <div class='body'>\n            ".concat(n(), "\n        </div>\n        <div class='bottomT'>\n            <div class='total'>\n                <div>\n                    <h3>\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A</h3>\n                    <p id='TotalPro'>\u0645\u0646\u062A\u062C\u0627\u062A ").concat(cartLength(), "</p>\n                </div>\n                <h2 id='TP'>").concat(_e7(), " \u062C</h2>\n            </div>\n            <a href=\"/OrderMethod\" data-link>\u0627\u0644\u062F\u0641\u0639</a>\n        </div>\n    </div>\n    ");
                  return _context9.abrupt("return", (fetch("/static/siteJs/cart.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), a));
                case 6:
                  return _context9.abrupt("return", (loading(!1), "\n      <div id='emptyCart'>\n        <p>عربة التسوق فارغة</p>\n        <span>0</span>\n        <img src='/static/img/cart.png' />\n        <a data-link href=\"/\">اذهب للتسوق</a>\n      </div>\n      "));
                case 7:
                case "end":
                  return _context9.stop();
              }
            }, _callee8);
          }));
          function getHtml() {
            return _getHtml8.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return c;
    }(t),
    o = /*#__PURE__*/function (_t15) {
      _inherits(o, _t15);
      var _super8 = _createSuper(o);
      function o(t, e) {
        var _this8;
        _classCallCheck(this, o);
        _this8 = _super8.call(this, t, e), _this8.auth = e, _this8.setTitle("Alwadi | تسجيل الدخول"), _this8.setStyle("/static/css/login.css");
        return _this8;
      }
      _createClass(o, [{
        key: "getHtml",
        value: function () {
          var _getHtml9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            return _regeneratorRuntime().wrap(function _callee9$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (!(loading(!0), !localStorage.getItem("AuthToken"))) {
                    _context10.next = 2;
                    break;
                  }
                  return _context10.abrupt("return", (fetch("/static/siteJs/login.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), '\n      <div class=\'logIn\'>\n        <div class="logo">            \n          <img src="/static/img/logo.png"/>\n        </div>\n        <form id="login">\n            <div class=\'input\'>\n                <label>بريد إلكتروني</label>\n                <input type=\'email\' name="email" placeholder="بريد إلكتروني" />\n            </div>\n            <div class=\'input\'>\n                <label>كلمة المرور</label>\n                <input type="password" name="password" placeholder="كلمة المرور">            </div>\n            <a href="/forget" data-link>هل نسيت كلمة المرور الخاصة بك؟</a>\n            <div class="input">\n                <button type="submit">تسجيل الدخول</button>\n            </div>\n        </form>\n          <div class="media">\n            <p>أو قم بتسجيل الدخول باستخدام</p>\n            <div class="mediaBtns">\n                <button><i class=\'bx bxl-facebook\'></i></button>\n                <button><i class=\'bx bxl-twitter\'></i></button>\n                <button><i class=\'bx bxl-google\'></i></button>\n            </div>\n        </div>\n        <div class="signup">\n            <a href="/register" data-link>أو قم بتسجيل حساب</a>\n        </div>\n      </div>\n      '));
                case 2:
                  location.replace("/");
                case 3:
                case "end":
                  return _context10.stop();
              }
            }, _callee9);
          }));
          function getHtml() {
            return _getHtml9.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return o;
    }(t),
    l = /*#__PURE__*/function (_t16) {
      _inherits(l, _t16);
      var _super9 = _createSuper(l);
      function l(t, e) {
        var _this9;
        _classCallCheck(this, l);
        _this9 = _super9.call(this, t, e), _this9.auth = e, _this9.setTitle("Alwadi | تسجيل حساب"), _this9.setStyle("/static/css/login.css");
        return _this9;
      }
      _createClass(l, [{
        key: "getHtml",
        value: function () {
          var _getHtml10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            return _regeneratorRuntime().wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  if (this.auth) {
                    _context11.next = 2;
                    break;
                  }
                  return _context11.abrupt("return", (loading(!0), fetch("/static/oldJs/register.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), '\n      <div class=\'logIn\'>\n        <div class="logo">\n            <img src="/static/img/logo.png"/>\n        </div>\n        <form id="register">\n            <div class=\'input\'>\n                <label>اسم المستخدم</label>\n                <input type=\'text\' name="username" placeholder="اسم المستخدم" />\n            </div>\n            <div class=\'input\'>\n                <label>بريد إلكتروني</label>\n                <input type=\'email\' name="email" placeholder="بريد إلكتروني" />\n            </div>\n            <div class=\'input\'>\n                <label>كلمة المرور</label>\n                <input type="password" name="password" placeholder="كلمة المرور" />\n            </div>\n            <div class=\'input\'>\n                <label>تأكيد كلمة المرور</label>\n                <input type="password" name="password2" placeholder="تأكيد كلمة المرور" />\n            </div>\n            <div class=\'input\'>\n                <label>رقم الهاتف</label>\n                <input type="tel" name="phone" placeholder="رقم الهاتف" />\n            </div>\n            <div class=\'input\'>\n                <label>رقم هاتف احتياطي</label>\n                <input type="tel" name="spare_phone" placeholder="رقم هاتف احتياطي" />\n            </div>\n            <div class=\'terms\'>\n                <a href=\'/terms\' data-link>هل تقبل الشروط والأحكام</a>\n                <input type="checkbox" name="terms" value="yes" />\n            </div>\n            <div class="input">\n                <button type="submit">تسجيل حساب</button>\n            </div>\n        </form>\n      </div>\n      '));
                case 2:
                  location.replace("/");
                case 3:
                case "end":
                  return _context11.stop();
              }
            }, _callee10, this);
          }));
          function getHtml() {
            return _getHtml10.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return l;
    }(t),
    d = /*#__PURE__*/function (_t17) {
      _inherits(d, _t17);
      var _super10 = _createSuper(d);
      function d(t, e) {
        var _this10;
        _classCallCheck(this, d);
        _this10 = _super10.call(this, t, e), _this10.auth = e, _this10.setTitle("my Favourite"), _this10.setStyle("/static/css/company.css");
        return _this10;
      }
      _createClass(d, [{
        key: "getHtml",
        value: function () {
          var _getHtml11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var _t18, _e8, n, _t19;
            return _regeneratorRuntime().wrap(function _callee11$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  if (!(loading(!0), this.auth)) {
                    _context12.next = 16;
                    break;
                  }
                  if (localStorage.getItem("AuthToken")) {
                    _context12.next = 3;
                    break;
                  }
                  return _context12.abrupt("return", (loading(!1), "\n          <div class='notLoginPop'>\n            <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n            <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n            <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n            <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n          </div>\n        "));
                case 3:
                  _context12.next = 5;
                  return fetch("http://192.168.1.5:5500/fav", {
                    method: "post",
                    body: JSON.stringify({
                      token: localStorage.getItem("AuthToken")
                    })
                  });
                case 5:
                  _t18 = _context12.sent;
                  _context12.next = 8;
                  return _t18.json();
                case 8:
                  _e8 = _context12.sent;
                  _e8.Error && (localStorage.removeItem("AuthToken"), window.location = "/", CreateToast({
                    type: "Err",
                    msg: "حدث خطأ ما، يرجى تسجيل الدخول",
                    time: 2e3
                  }), setTimeout(function () {
                    location.replace("/login");
                  }, 2e3));
                  n = _e8.Products;
                  if (!(n || (n = []), n.length > 0)) {
                    _context12.next = 14;
                    break;
                  }
                  _t19 = n.map(function (t, e) {
                    var n = t.Name.substr(0, 17) + "...",
                      a = "https://drive.google.com/uc?export=view&id=" + t.Image.split("/")[5];
                    return "\n        <div class='".concat(function () {
                      var e = "product";
                      return 1 !== t.Available && (e += " notavailable"), t.Offer > 0 && (e += " offer"), e;
                    }(), "' id='").concat(t.Id, "' key='").concat(e, "'>\n          <button id='addtofav' onclick='delToFav(").concat(t.Id, ")'><i class='bx bxs-x-circle'></i></button>\n          <a href='/product/").concat(t.Id, "' data-link>\n              <img class='image' src='").concat(a, "' />\n            <div class='body'>\n              <p>").concat(n, "</p>\n            </div>\n          </a>\n          ").concat(t.Offer > 0 ? "<p class=\"price offer\">".concat(t.Price + t.Offer, " \u062C</p>\n              <p class=\"price\">").concat(t.Price, " \u062C</p>\n              ") : "<p class=\"price\">".concat(t.Price, " \u062C</p>"), "\n        </div>\n        ");
                  }).join("");
                  return _context12.abrupt("return", (fetch("/static/siteJs/fav.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), "\n        <div class='containerProducts'>\n          ".concat(_t19, "\n        </div>\n        ")));
                case 14:
                  if (!(0 == n.length)) {
                    _context12.next = 16;
                    break;
                  }
                  return _context12.abrupt("return", (loading(!1), "\n          <div class='noProducts'>\n            <p>لا يوجد منتجات في المفضلة</p>\n          </div>\n          "));
                case 16:
                case "end":
                  return _context12.stop();
              }
            }, _callee11, this);
          }));
          function getHtml() {
            return _getHtml11.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return d;
    }(t),
    p = /*#__PURE__*/function (_t20) {
      _inherits(p, _t20);
      var _super11 = _createSuper(p);
      function p(t, e) {
        var _this11;
        _classCallCheck(this, p);
        _this11 = _super11.call(this, t, e), _this11.auth = e, _this11.setTitle("Alwadi | الدفع"), _this11.setStyle("/static/css/orderMethod.css");
        return _this11;
      }
      _createClass(p, [{
        key: "getHtml",
        value: function () {
          var _getHtml12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            return _regeneratorRuntime().wrap(function _callee12$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  if (!(loading(!0), this.auth)) {
                    _context13.next = 2;
                    break;
                  }
                  return _context13.abrupt("return", localStorage.getItem("AuthToken") ? (fetch("/static/siteJs/orderMethod.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), '\n        <div class="wraper">\n            <a href="/Order/cash" data-link id="cash">نقدي</a>\n            <a href="/Order/cash" data-link id="cash">نقدي</a>\n            <a href="/Order/cash" data-link id="cash">نقدي</a>\n        </div>') : (loading(!1), "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "));
                case 2:
                case "end":
                  return _context13.stop();
              }
            }, _callee12, this);
          }));
          function getHtml() {
            return _getHtml12.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return p;
    }(t),
    u = /*#__PURE__*/function (_t21) {
      _inherits(u, _t21);
      var _super12 = _createSuper(u);
      function u(t, e) {
        var _this12;
        _classCallCheck(this, u);
        _this12 = _super12.call(this, t, e), _this12.method = t.method, _this12.auth = e, _this12.setTitle("Alwadi | طلب"), _this12.setStyle("/static/css/Order.css");
        return _this12;
      }
      _createClass(u, [{
        key: "getHtml",
        value: function () {
          var _getHtml13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            return _regeneratorRuntime().wrap(function _callee13$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  if (!(localStorage.setItem("method", this.method), loading(!0), this.auth)) {
                    _context14.next = 6;
                    break;
                  }
                  if (localStorage.getItem("AuthToken")) {
                    _context14.next = 3;
                    break;
                  }
                  return _context14.abrupt("return", (loading(!1), "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "));
                case 3:
                  if (!(fetch("/static/siteJs/Order.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), Cart.length > 0)) {
                    _context14.next = 5;
                    break;
                  }
                  return _context14.abrupt("return", '\n        <form id="Order">\n            <div class="input">\n                <label>محافظة</label>\n                <input type="text" name="governorate" required/>\n            </div>\n            <div class="input">\n                <label>المدينة</label>\n                <input type="text" name="city" required/>\n            </div>\n            <div class="input">\n                <label>الشارع</label>\n                <input type="text" name="street" required/>\n            </div>\n            <div class="input">\n                <label>المبنى</label>\n                <input type="text" name="building" required/>\n            </div>\n            <div class="input">\n                <label>طابق</label>\n                <input type="text" name="floor" required/>\n            </div>\n            <div class="input">\n                <button type="submit">اطلب الان</button>\n            </div>\n        </form>\n        ');
                case 5:
                  CreateToast({
                    type: "error",
                    message: "عربة التسوق فارغة",
                    time: 2e3
                  }), setTimeout(function () {
                    location.replace("/");
                  }, 2e3);
                case 6:
                case "end":
                  return _context14.stop();
              }
            }, _callee13, this);
          }));
          function getHtml() {
            return _getHtml13.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return u;
    }(t),
    h = /*#__PURE__*/function (_t22) {
      _inherits(h, _t22);
      var _super13 = _createSuper(h);
      function h(t, e) {
        var _this13;
        _classCallCheck(this, h);
        _this13 = _super13.call(this, t, e), _this13.auth = e, _this13.setTitle("Chose Method"), _this13.setStyle("/static/css/orderMethod.css");
        return _this13;
      }
      _createClass(h, [{
        key: "getHtml",
        value: function () {
          var _getHtml14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            return _regeneratorRuntime().wrap(function _callee14$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  if (!(loading(!0), this.auth)) {
                    _context15.next = 2;
                    break;
                  }
                  return _context15.abrupt("return", localStorage.getItem("AuthToken") ? (loading(!1), '\n        <div class="suc">\n            <div class="cir">\n                <i class=\'bx bx-check\'></i>\n            </div>            \n            <p>تم تسجيل طلبك بنجاح</p>\n            <p>سنتواصل معك قريبًا</p>\n        </div>') : (loading(!1), "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "));
                case 2:
                case "end":
                  return _context15.stop();
              }
            }, _callee14, this);
          }));
          function getHtml() {
            return _getHtml14.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return h;
    }(t),
    v = /*#__PURE__*/function (_t23) {
      _inherits(v, _t23);
      var _super14 = _createSuper(v);
      function v(t, e) {
        var _this14;
        _classCallCheck(this, v);
        _this14 = _super14.call(this, t, e), _this14.auth = e, _this14.setTitle("Alwadi | العروض"), _this14.setStyle("/static/css/company.css");
        return _this14;
      }
      _createClass(v, [{
        key: "getHtml",
        value: function () {
          var _getHtml15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            var t, e, n, a, _loop2, _t24;
            return _regeneratorRuntime().wrap(function _callee15$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  loading(!0);
                  _context17.next = 3;
                  return fetch("http://192.168.1.5:5500/offers");
                case 3:
                  t = _context17.sent;
                  e = [];
                  _context17.next = 7;
                  return t.json();
                case 7:
                  a = _context17.sent.Products;
                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                    var n, _t25, _a;
                    return _regeneratorRuntime().wrap(function _loop2$(_context16) {
                      while (1) switch (_context16.prev = _context16.next) {
                        case 0:
                          n = a[_t24];
                          e.find(function (t) {
                            return t.name === n.Category;
                          }) || e.push({
                            name: n.Category,
                            products: []
                          });
                          for (_t25 = 0; _t25 < e.length; _t25++) {
                            _a = e[_t25];
                            n.Category === _a.name && _a.products.push(n);
                          }
                        case 3:
                        case "end":
                          return _context16.stop();
                      }
                    }, _loop2);
                  });
                  _t24 = 0;
                case 10:
                  if (!(_t24 < a.length)) {
                    _context17.next = 15;
                    break;
                  }
                  return _context17.delegateYield(_loop2(), "t0", 12);
                case 12:
                  _t24++;
                  _context17.next = 10;
                  break;
                case 15:
                  return _context17.abrupt("return", (fetch("/static/siteJs/offers.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), n = e.length > 0 ? e.map(function (t, e) {
                    var n = t.products.map(function (t, e) {
                      var n = t.Name.substr(0, 17) + "...";
                      var a = "https://drive.google.com/uc?export=view&id=" + t.Image.split("/")[5];
                      return "\n      <div class='".concat(function () {
                        var e = "Product";
                        return 1 !== t.Available && (e += " Notavailable"), t.Offer > 0 && (e += " offer"), e;
                      }(), "' id='").concat(t.Id, "' key='").concat(e, "'>\n        <button id='addtofav' onclick='addToFav(").concat(t.Id, ")'><i class=\"bx bxs-heart\"></i></button>\n        <a href='/product/").concat(t.Id, "' data-link>\n            <img class='image' src='").concat(a, "' />\n          <div class='body'>\n            <p>").concat(n, "</p>\n          </div>\n        </a>\n        ").concat(t.Offer > 0 ? "<p class=\"price offer\">".concat(t.Price + t.Offer, " \u062C</p>\n            <p class=\"price\">").concat(t.Price, " \u062C</p>\n            ") : "<p class=\"price\">".concat(t.Price, " \u062C</p>"), "\n      </div>\n      ");
                    }).join("");
                    return "\n      <div class=\"categoryO\">\n        <h3>".concat(t.name, "</h3>\n        <div id=\"").concat(t.name, "\" class=\"CategoryProducts\" key=\"").concat(e, "\">\n          ").concat(n, "\n        </div>\n      </div>\n      ");
                  }).join("") : "no products found", loading(!1), "".concat(n)));
                case 16:
                case "end":
                  return _context17.stop();
              }
            }, _callee15);
          }));
          function getHtml() {
            return _getHtml15.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return v;
    }(t),
    m = /*#__PURE__*/function (_t26) {
      _inherits(m, _t26);
      var _super15 = _createSuper(m);
      function m(t, e) {
        var _this15;
        _classCallCheck(this, m);
        _this15 = _super15.call(this, t, e), _this15.category = decodeURI(t.name), _this15.setTitle("Alwadi | " + _this15.category), _this15.setStyle("/static/css/company.css");
        return _this15;
      }
      _createClass(m, [{
        key: "getHtml",
        value: function () {
          var _getHtml16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            var t, e;
            return _regeneratorRuntime().wrap(function _callee16$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  loading(!0);
                  _context18.next = 3;
                  return fetch("http://192.168.1.5:5500/subcategory/" + this.category);
                case 3:
                  t = _context18.sent;
                  _context18.next = 6;
                  return t.json();
                case 6:
                  e = _context18.sent.Products.map(function (t, e) {
                    var n = t.Name.substr(0, 20);
                    var a = "https://drive.google.com/uc?export=view&id=" + t.Image.split("/")[5];
                    return "\n      <div class='".concat(function () {
                      var e = "product";
                      return 1 !== t.Available && (e += " notavailable"), t.Offer > 0 && (e += " offer"), e;
                    }(), "' id='").concat(t.Id, "' key='").concat(e, "'>\n        <button id='addtofav' onclick='addToFav(").concat(t.Id, ")'><i class=\"bx bxs-heart\"></i></button>\n        <a href='/product/").concat(t.Id, "' data-link>\n            <img class='image' src='").concat(a, "' />\n          <div class='body'>\n            <p>").concat(n, "</p>\n          </div>\n        </a>\n        ").concat(t.Offer > 0 ? "<p class=\"price offer\">".concat(t.Price + t.Offer, " \u062C</p>\n            <p class=\"price\">").concat(t.Price, " \u062C</p>\n            ") : "<p class=\"price\">".concat(t.Price, " \u062C</p>"), "\n      </div>\n      ");
                  }).join("");
                  return _context18.abrupt("return", (fetch("/static/siteJs/compony.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  }), loading(!1), "\n    <div class='containerProducts'>\n     ".concat(e, "\n    </div>\n    ")));
                case 8:
                case "end":
                  return _context18.stop();
              }
            }, _callee16, this);
          }));
          function getHtml() {
            return _getHtml16.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return m;
    }(t),
    f = /*#__PURE__*/function (_t27) {
      _inherits(f, _t27);
      var _super16 = _createSuper(f);
      function f(t, e) {
        var _this16;
        _classCallCheck(this, f);
        _this16 = _super16.call(this, t, e), _this16.auth = e;
        var n = decodeURI(t.id);
        _this16.id = n, _this16.setTitle("Alwadi | Order " + _this16.id), _this16.setStyle("/static/css/orderHistory.css");
        return _this16;
      }
      _createClass(f, [{
        key: "getHtml",
        value: function () {
          var _getHtml17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var a, i, _s, _t28, _e9, n, _r, _c, _o, _l;
            return _regeneratorRuntime().wrap(function _callee17$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  if (!(loading(!0), this.auth)) {
                    _context19.next = 19;
                    break;
                  }
                  if (!localStorage.getItem("AuthToken")) {
                    _context19.next = 18;
                    break;
                  }
                  a = function a() {
                    return 1 == n.Delivered ? '\n              <div class="Delivered True">\n                 تسليم الطلب: نعم\n              </div>' : '\n              <div class="Delivered">\n                 تسليم الطلب: لا\n              </div>';
                  };
                  i = function i() {
                    return 1 == n.Paid ? '\n              <div class="Paid True">\n                 تم الدفع: نعم\n              </div>' : '\n              <div class="Paid">\n                 تم الدفع: لا\n              </div>';
                  };
                  _s = function _s() {
                    var t = 0;
                    return n.cart.map(function (e) {
                      t += e.Price * e.Quantity;
                    }), t;
                  };
                  _context19.next = 7;
                  return fetch("http://192.168.1.5:5500/order/" + this.id, {
                    method: "post",
                    body: JSON.stringify({
                      token: localStorage.getItem("AuthToken")
                    })
                  });
                case 7:
                  _t28 = _context19.sent;
                  _context19.next = 10;
                  return _t28.json();
                case 10:
                  _e9 = _context19.sent;
                  n = _e9.Order[0];
                  n.cart = _e9.Products, console.log(n), fetch("/static/siteJs/orderMethod.js").then(function (t) {
                    return !!t.ok && t.blob();
                  }).then(function (t) {
                    var e = URL.createObjectURL(t);
                    document.querySelectorAll("[data-script]").forEach(function (t) {
                      t.src !== e && document.head.removeChild(t);
                    });
                    var n = document.createElement("script");
                    n.setAttribute("src", e), n.setAttribute("defer", ""), n.setAttribute("data-script", ""), n.setAttribute("type", "text/javascript"), document.head.appendChild(n), n.onload = function () {
                      URL.revokeObjectURL(e);
                    };
                  });
                  _r = n.Id;
                  _r = _r.substr(0, 8);
                  _c = n.Date.replace("T", " ").replace("Z", " ").split(".")[0];
                  _o = n.cart.map(function (t, e) {
                    return "\n          <div class=\"orderitem\">\n            <img src=\"/static/".concat(t.Image, "\" alt=\"").concat(t.Name, "\">\n            <div class=\"itemInfo\">\n              <p>").concat(t.Name, "</p>\n              <p>\u0627\u0644\u0643\u0645\u064A\u0629: ").concat(t.Quantity, "</p>\n              <p>\u0627\u0644\u0633\u0639\u0631: ").concat(t.Price, " \u062C</p>\n              <p>\u0627\u0644\u0648\u0632\u0646: ").concat(t.Portion, " ").concat(t.Uint, "</p>\n              <p>\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0644\u0644\u0645\u0646\u062A\u062C: ").concat(t.Price * t.Quantity, " \u062C</p>\n            </div>\n          </div>\n        ");
                  }).join(""), _l = "\n          <div class=\"orderRec\">\n        <p>\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628: ".concat(_r, "</p>\n        <div class=\"date\">\n          <p>\n            \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628:\n          </p>\n          <h4 dir=\"ltr\" style=\"color: #b3b2b2\">\n            ").concat(_c, "\n          </h4>\n        </div>\n        <p>\u0627\u0644\u0645\u062C\u0645\u0648\u0639: ").concat(_s(), " \u062C</p>\n        ").concat(_o, "\n          ").concat(a(), "\n          ").concat(i(), "\n      </div>\n          ");
                  return _context19.abrupt("return", (loading(!1), "".concat(_l)));
                case 18:
                  return _context19.abrupt("return", (loading(!1), "\n        <div class='notLoginPop'>\n          <a href=\"/\" data-link class=\"backToHome\"><i class='bx bxs-x-circle'></i></a>\n          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>\n          <a href='/login' data-link class=\"log\">تسجيل الدخول</a>\n          <a href='/register' data-link class=\"log\">تسجيل حساب</a>\n        </div>\n        "));
                case 19:
                case "end":
                  return _context19.stop();
              }
            }, _callee17, this);
          }));
          function getHtml() {
            return _getHtml17.apply(this, arguments);
          }
          return getHtml;
        }()
      }]);
      return f;
    }(t),
    b = function b(t) {
      history.pushState(null, null, t), g();
    },
    g = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var t, b, g;
        return _regeneratorRuntime().wrap(function _callee18$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              t = [{
                path: "/",
                view: e,
                auth: !1
              }, {
                path: "/cart",
                view: c,
                auth: !1
              }, {
                path: "/login",
                view: o,
                auth: !1
              }, {
                path: "/register",
                view: l,
                auth: !1
              }, {
                path: "/profile",
                view: n,
                auth: !0
              }, {
                path: "/product/:id",
                view: i,
                auth: !1
              }, {
                path: "/compony/:name",
                view: s,
                auth: !1
              }, {
                path: "/category/:name",
                view: r,
                auth: !1
              }, {
                path: "/subcategory/:name",
                view: m,
                auth: !1
              }, {
                path: "/orderHistory",
                view: a,
                auth: !0
              }, {
                path: "/fav",
                view: d,
                auth: !0
              }, {
                path: "/offers",
                view: v,
                auth: !1
              }, {
                path: "/OrderMethod",
                view: p,
                auth: !0
              }, {
                path: "/Order/:method",
                view: u,
                auth: !0
              }, {
                path: "/order/success",
                view: h,
                auth: !0
              }, {
                path: "/order/:id",
                view: f,
                auth: !0
              }];
              b = t.map(function (t) {
                return {
                  route: t,
                  result: location.pathname.match((e = t.path, new RegExp("^" + e.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")))
                };
                var e;
              }).find(function (t) {
                return null !== t.result;
              });
              b || (b = {
                route: t[0],
                result: [location.pathname]
              });
              g = new b.route.view(function (t) {
                var e = t.result.slice(1),
                  n = Array.from(t.route.path.matchAll(/:(\w+)/g)).map(function (t) {
                    return t[1];
                  });
                return Object.fromEntries(n.map(function (t, n) {
                  return [t, e[n]];
                }));
              }(b), b.route.auth);
              if (!b.route.auth) {
                _context20.next = 11;
                break;
              }
              localStorage.getItem("AuthToken");
              _context20.next = 8;
              return g.getHtml();
            case 8:
              document.querySelector("#app").innerHTML = _context20.sent;
              _context20.next = 14;
              break;
            case 11:
              _context20.next = 13;
              return g.getHtml();
            case 13:
              document.querySelector("#app").innerHTML = _context20.sent;
            case 14:
            case "end":
              return _context20.stop();
          }
        }, _callee18);
      }));
      return function g() {
        return _ref.apply(this, arguments);
      };
    }();
  window.addEventListener("popstate", g), document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (t) {
      t.target.matches("[data-link]") ? (t.preventDefault(), b(t.target.href)) : t.target.parentElement.matches("[data-link]") && (t.preventDefault(), b(t.target.parentElement.href));
    }), g();
  });
})();