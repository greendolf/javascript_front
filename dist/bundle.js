/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t,
    e,
    r = {
      528: (t, e, r) => {
        function n(t) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            n(t)
          );
        }
        function o(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, e) {
                  if ("object" !== n(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== n(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(o.key)),
                "symbol" === n(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function i(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (i = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return a(t, arguments, l(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                u(r, t)
              );
            }),
            i(t)
          );
        }
        function a(t, e, r) {
          return (
            (a = c()
              ? Reflect.construct.bind()
              : function (t, e, r) {
                  var n = [null];
                  n.push.apply(n, e);
                  var o = new (Function.bind.apply(t, n))();
                  return r && u(o, r.prototype), o;
                }),
            a.apply(null, arguments)
          );
        }
        function c() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function u(t, e) {
          return (
            (u = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            u(t, e)
          );
        }
        function l(t) {
          return (
            (l = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            l(t)
          );
        }
        r.d(e, { u: () => P }),
          console.log("Log:Exporting template for auth-page");
        var f = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && u(t, e);
          })(p, t);
          var e,
            r,
            i,
            a,
            f,
            s =
              ((a = p),
              (f = c()),
              function () {
                var t,
                  e = l(a);
                if (f) {
                  var r = l(this).constructor;
                  t = Reflect.construct(e, arguments, r);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === n(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function p() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              console.log("constructor auth-page..."),
              ((t = s.call(this))._shadow = t.attachShadow({ mode: "closed" })),
              t
            );
          }
          return (
            (e = p),
            (i = [
              {
                key: "observedAttributes",
                get: function () {
                  return [];
                },
              },
            ]),
            (r = [
              {
                key: "connectedCallback",
                value: function () {
                  console.log("connectedCallback auth-page..."), this._render();
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  console.log("disconnectedCallback auth-page...");
                },
              },
              {
                key: "attributeChangedCallback",
                value: function (t, e, r) {
                  console.log("attributeChangedCallback auth-page...");
                },
              },
              {
                key: "_render",
                value: function () {
                  console.log("_render auth-page..."),
                    this.ownerDocument.defaultView &&
                      (this._shadow.innerHTML =
                        "\n    <welcome-window></welcome-window>\n    <auth-form></auth-form>\n");
                },
              },
            ]) && o(e.prototype, r),
            i && o(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            p
          );
        })(i(HTMLElement));
        function s(t) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            s(t)
          );
        }
        function p(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (o = (function (t, e) {
                  if ("object" !== s(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== s(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(t);
                })(n.key)),
                "symbol" === s(o) ? o : String(o)),
                n
              );
          }
          var o;
        }
        function h(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (h = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return y(t, arguments, g(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                d(r, t)
              );
            }),
            h(t)
          );
        }
        function y(t, e, r) {
          return (
            (y = v()
              ? Reflect.construct.bind()
              : function (t, e, r) {
                  var n = [null];
                  n.push.apply(n, e);
                  var o = new (Function.bind.apply(t, n))();
                  return r && d(o, r.prototype), o;
                }),
            y.apply(null, arguments)
          );
        }
        function v() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function d(t, e) {
          return (
            (d = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            d(t, e)
          );
        }
        function g(t) {
          return (
            (g = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            g(t)
          );
        }
        customElements.define("auth-page", f),
          console.log("Log:Defining auth-page"),
          console.log("Log:Exporting template for auth-page");
        var b = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && d(t, e);
          })(c, t);
          var e,
            r,
            n,
            o,
            i,
            a =
              ((o = c),
              (i = v()),
              function () {
                var t,
                  e = g(o);
                if (i) {
                  var r = g(this).constructor;
                  t = Reflect.construct(e, arguments, r);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === s(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t);
              });
          function c() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              console.log("constructor tasks-page..."),
              ((t = a.call(this))._shadow = t.attachShadow({ mode: "closed" })),
              t
            );
          }
          return (
            (e = c),
            (n = [
              {
                key: "observedAttributes",
                get: function () {
                  return [];
                },
              },
            ]),
            (r = [
              {
                key: "connectedCallback",
                value: function () {
                  console.log("connectedCallback tasks-page..."),
                    this._render();
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  console.log("disconnectedCallback tasks-page...");
                },
              },
              {
                key: "attributeChangedCallback",
                value: function (t, e, r) {
                  console.log("attributeChangedCallback tasks-page...");
                },
              },
              {
                key: "_render",
                value: function () {
                  console.log("_render tasks-page..."),
                    this.ownerDocument.defaultView &&
                      (this._shadow.innerHTML =
                        "\n    <welcome-window></welcome-window>\n    <auth-form></auth-form>\n");
                },
              },
            ]) && p(e.prototype, r),
            n && p(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            c
          );
        })(h(HTMLElement));
        function m(t) {
          return (
            (m =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            m(t)
          );
        }
        function w() {
          w = function () {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function l(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            l({}, "");
          } catch (t) {
            l = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var i = e && e.prototype instanceof g ? e : g,
              a = Object.create(i.prototype),
              c = new N(n || []);
            return o(a, "_invoke", { value: S(t, r, c) }), a;
          }
          function s(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            h = "suspendedYield",
            y = "executing",
            v = "completed",
            d = {};
          function g() {}
          function b() {}
          function E() {}
          var _ = {};
          l(_, a, function () {
            return this;
          });
          var j = Object.getPrototypeOf,
            L = j && j(j(F([])));
          L && L !== r && n.call(L, a) && (_ = L);
          var O = (E.prototype = g.prototype = Object.create(_));
          function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
              l(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function k(t, e) {
            function r(o, i, a, c) {
              var u = s(t[o], t, i);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" == m(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), a(l);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      }
                    );
              }
              c(u.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function S(e, r, n) {
            var o = p;
            return function (i, a) {
              if (o === y) throw new Error("Generator is already running");
              if (o === v) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = P(c, n);
                  if (u) {
                    if (u === d) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = v), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var l = s(e, r, n);
                if ("normal" === l.type) {
                  if (((o = n.done ? v : h), l.arg === d)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((o = v), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          }
          function P(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  P(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                d
              );
            var i = s(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), d
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  d)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                d);
          }
          function T(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function N(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(T, this),
              this.reset(!0);
          }
          function F(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(m(e) + " is not iterable");
          }
          return (
            (b.prototype = E),
            o(O, "constructor", { value: E, configurable: !0 }),
            o(E, "constructor", { value: b, configurable: !0 }),
            (b.displayName = l(E, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === b || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, E)
                  : ((t.__proto__ = E), l(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(O)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            x(k.prototype),
            l(k.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new k(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(O),
            l(O, u, "Generator"),
            l(O, a, function () {
              return this;
            }),
            l(O, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = F),
            (N.prototype = {
              constructor: N,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(C),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      l = n.call(a, "finallyLoc");
                    if (u && l) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), C(r), d;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      C(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: F(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  d
                );
              },
            }),
            e
          );
        }
        function E(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void r(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function _(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function j(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, O(n.key), n);
          }
        }
        function L(t, e, r) {
          return (
            e && j(t.prototype, e),
            r && j(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function O(t) {
          var e = (function (t, e) {
            if ("object" !== m(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== m(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === m(e) ? e : String(e);
        }
        customElements.define("tasks-page", b),
          console.log("Log:Defining tasks-page"),
          console.log("Log:Exporting router");
        var x,
          k,
          S = (function () {
            function t() {
              _(this, t), (this._routes = {});
            }
            var e, r;
            return (
              L(t, [
                {
                  key: "add",
                  value: function (t, e) {
                    this._routes[t] = document.createElement(e);
                  },
                },
                {
                  key: "default",
                  value: function (t) {
                    this._routes.default = this._routes[t];
                  },
                },
                {
                  key: "go",
                  value:
                    ((e = w().mark(function t() {
                      var e,
                        r,
                        n,
                        o = arguments;
                      return w().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (e =
                                  o.length > 0 && void 0 !== o[0]
                                    ? o[0]
                                    : "default"),
                                  (r = this._routes[e]),
                                  console.log(r),
                                  void 0 !== r &&
                                    ((n = document.getElementById("app"))
                                      .childNodes.length &&
                                      n.removeChild(n.childNodes[0]),
                                    n.appendChild(r),
                                    history.pushState(null, null, e));
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })),
                    (r = function () {
                      var t = this,
                        r = arguments;
                      return new Promise(function (n, o) {
                        var i = e.apply(t, r);
                        function a(t) {
                          E(i, n, o, a, c, "next", t);
                        }
                        function c(t) {
                          E(i, n, o, a, c, "throw", t);
                        }
                        a(void 0);
                      });
                    }),
                    function () {
                      return r.apply(this, arguments);
                    }),
                },
              ]),
              t
            );
          })(),
          P = (function () {
            function t() {
              _(this, t);
            }
            return (
              L(t, null, [
                {
                  key: "_createInstance",
                  value: function () {
                    return new S();
                  },
                },
                {
                  key: "createInstance",
                  value: function () {
                    return (
                      null === t._router && (t._router = t._createInstance()),
                      t._router
                    );
                  },
                },
              ]),
              t
            );
          })();
        (x = P),
          (k = O((k = "_router"))) in x
            ? Object.defineProperty(x, k, {
                value: null,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (x[k] = null);
      },
    },
    n = {};
  function o(t) {
    var e = n[t];
    if (void 0 !== e) return e.exports;
    var i = (n[t] = { exports: {} });
    return r[t](i, i.exports, o), i.exports;
  }
  (o.m = r),
    (o.d = (t, e) => {
      for (var r in e)
        o.o(e, r) &&
          !o.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (o.f = {}),
    (o.e = (t) =>
      Promise.all(Object.keys(o.f).reduce((e, r) => (o.f[r](t, e), e), []))),
    (o.u = (t) => t + ".bundle.js"),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = {}),
    (e = "javascript_front:"),
    (o.l = (r, n, i, a) => {
      if (t[r]) t[r].push(n);
      else {
        var c, u;
        if (void 0 !== i)
          for (
            var l = document.getElementsByTagName("script"), f = 0;
            f < l.length;
            f++
          ) {
            var s = l[f];
            if (
              s.getAttribute("src") == r ||
              s.getAttribute("data-webpack") == e + i
            ) {
              c = s;
              break;
            }
          }
        c ||
          ((u = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", e + i),
          (c.src = r)),
          (t[r] = [n]);
        var p = (e, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var o = t[r];
            if (
              (delete t[r],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((t) => t(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = p.bind(null, c.onerror)),
          (c.onload = p.bind(null, c.onload)),
          u && document.head.appendChild(c);
      }
    }),
    (o.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t;
      o.g.importScripts && (t = o.g.location + "");
      var e = o.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        if (r.length) for (var n = r.length - 1; n > -1 && !t; ) t = r[n--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = t);
    })(),
    (() => {
      var t = { 179: 0 };
      o.f.j = (e, r) => {
        var n = o.o(t, e) ? t[e] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var i = new Promise((r, o) => (n = t[e] = [r, o]));
            r.push((n[2] = i));
            var a = o.p + o.u(e),
              c = new Error();
            o.l(
              a,
              (r) => {
                if (o.o(t, e) && (0 !== (n = t[e]) && (t[e] = void 0), n)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (c.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + a + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = a),
                    n[1](c);
                }
              },
              "chunk-" + e,
              e
            );
          }
      };
      var e = (e, r) => {
          var n,
            i,
            [a, c, u] = r,
            l = 0;
          if (a.some((e) => 0 !== t[e])) {
            for (n in c) o.o(c, n) && (o.m[n] = c[n]);
            u && u(o);
          }
          for (e && e(r); l < a.length; l++)
            (i = a[l]), o.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
        },
        r = (self.webpackChunkjavascript_front =
          self.webpackChunkjavascript_front || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var t = o(528);
      function e(t) {
        return (
          (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          e(t)
        );
      }
      function r() {
        r = function () {
          return n;
        };
        var t,
          n = {},
          o = Object.prototype,
          i = o.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          u = c.iterator || "@@iterator",
          l = c.asyncIterator || "@@asyncIterator",
          f = c.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function p(t, e, r, n) {
          var o = e && e.prototype instanceof m ? e : m,
            i = Object.create(o.prototype),
            c = new N(n || []);
          return a(i, "_invoke", { value: S(t, r, c) }), i;
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        n.wrap = p;
        var y = "suspendedStart",
          v = "suspendedYield",
          d = "executing",
          g = "completed",
          b = {};
        function m() {}
        function w() {}
        function E() {}
        var _ = {};
        s(_, u, function () {
          return this;
        });
        var j = Object.getPrototypeOf,
          L = j && j(j(F([])));
        L && L !== o && i.call(L, u) && (_ = L);
        var O = (E.prototype = m.prototype = Object.create(_));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function k(t, r) {
          function n(o, a, c, u) {
            var l = h(t[o], t, a);
            if ("throw" !== l.type) {
              var f = l.arg,
                s = f.value;
              return s && "object" == e(s) && i.call(s, "__await")
                ? r.resolve(s.__await).then(
                    function (t) {
                      n("next", t, c, u);
                    },
                    function (t) {
                      n("throw", t, c, u);
                    }
                  )
                : r.resolve(s).then(
                    function (t) {
                      (f.value = t), c(f);
                    },
                    function (t) {
                      return n("throw", t, c, u);
                    }
                  );
            }
            u(l.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (t, e) {
              function i() {
                return new r(function (r, o) {
                  n(t, e, r, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function S(e, r, n) {
          var o = y;
          return function (i, a) {
            if (o === d) throw new Error("Generator is already running");
            if (o === g) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = P(c, n);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === y) throw ((o = g), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = d;
              var l = h(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? g : v), l.arg === b)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = g), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function P(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                P(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              b
            );
          var i = h(o, e.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                b)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              b);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function C(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function F(r) {
          if (r || "" === r) {
            var n = r[u];
            if (n) return n.call(r);
            if ("function" == typeof r.next) return r;
            if (!isNaN(r.length)) {
              var o = -1,
                a = function e() {
                  for (; ++o < r.length; )
                    if (i.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
                  return (e.value = t), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(e(r) + " is not iterable");
        }
        return (
          (w.prototype = E),
          a(O, "constructor", { value: E, configurable: !0 }),
          a(E, "constructor", { value: w, configurable: !0 }),
          (w.displayName = s(E, f, "GeneratorFunction")),
          (n.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (n.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, E)
                : ((t.__proto__ = E), s(t, f, "GeneratorFunction")),
              (t.prototype = Object.create(O)),
              t
            );
          }),
          (n.awrap = function (t) {
            return { __await: t };
          }),
          x(k.prototype),
          s(k.prototype, l, function () {
            return this;
          }),
          (n.AsyncIterator = k),
          (n.async = function (t, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(p(t, e, r, o), i);
            return n.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(O),
          s(O, f, "Generator"),
          s(O, u, function () {
            return this;
          }),
          s(O, "toString", function () {
            return "[object Generator]";
          }),
          (n.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (n.values = F),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    i.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function n(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, "catchLoc"),
                    l = i.call(a, "finallyLoc");
                  if (u && l) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (
                  n.tryLoc <= this.prev &&
                  i.call(n, "finallyLoc") &&
                  this.prev < n.finallyLoc
                ) {
                  var o = n;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), C(r), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    C(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: F(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                b
              );
            },
          }),
          n
        );
      }
      function n(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, r);
            function c(t) {
              n(a, o, i, c, u, "next", t);
            }
            function u(t) {
              n(a, o, i, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      console.log("Log:Starting"),
        console.log("syka")(
          i(
            r().mark(function e() {
              var n;
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), !0;
                    case 2:
                      return (
                        console.log("Log:Importing"),
                        (e.next = 5),
                        o.e(301).then(o.bind(o, 301))
                      );
                    case 5:
                      return (e.next = 7), o.e(472).then(o.bind(o, 472));
                    case 7:
                      (n = t.u.createInstance()).add("auth", "auth-page"),
                        n.add("tasks", "tasks-page"),
                        n.default("auth"),
                        n.go(),
                        console.log("Log:Document is ready:"),
                        console.log(document);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        )(),
        console.log("Log:Finishing");
    })();
})();
