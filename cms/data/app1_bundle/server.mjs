import * as ___WEBPACK_EXTERNAL_MODULE__0__ from "react";
var __WEBPACK_EXTERNAL_MODULE__0__ = cloneWithEsModuleProperty(
  ___WEBPACK_EXTERNAL_MODULE__0__
);
import * as ___WEBPACK_EXTERNAL_MODULE__1__ from "react-dom/server.js";
var __WEBPACK_EXTERNAL_MODULE__1__ = cloneWithEsModuleProperty(
  ___WEBPACK_EXTERNAL_MODULE__1__
);
function cloneWithEsModuleProperty(e) {
  const t = Object.create(null);
  Object.defineProperty(t, "__esModule", {
    value: !0,
    enumerable: !1,
    configurable: !0,
  });
  const r = Object.getOwnPropertyNames(e);
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    Object.defineProperty(t, i, {
      get: function () {
        return e[i];
      },
      enumerable: !0,
      configurable: !1,
    });
  }
  if (Object.getOwnPropertySymbols) {
    const r = Object.getOwnPropertySymbols(e);
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      Object.defineProperty(t, i, {
        get: function () {
          return e[i];
        },
        enumerable: !1,
        configurable: !1,
      });
    }
  }
  return (
    Object.preventExtensions(t),
    Object.seal(t),
    Object.freeze && Object.freeze(t),
    t
  );
}
var mf = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 6))
  );
})([
  function (e, t) {
    e.exports = __WEBPACK_EXTERNAL_MODULE__0__;
  },
  function (e, t) {
    e.exports = __WEBPACK_EXTERNAL_MODULE__1__;
  },
  ,
  function (e, t, r) {
    e.exports = r(4)();
  },
  function (e, t, r) {
    "use strict";
    var n = r(5);
    function i() {}
    function o() {}
    (o.resetWarningCache = i),
      (e.exports = function () {
        function e(e, t, r, i, o, s) {
          if (s !== n) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((a.name = "Invariant Violation"), a);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var r = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: i,
        };
        return (r.PropTypes = r), r;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "getResponseHeaders", function () {
        return hr;
      }),
      r.d(t, "serverRender", function () {
        return dr;
      });
    var n = r(0),
      i = r.n(n),
      o = r(1),
      s = r.n(o);
    function a(e) {
      return i.a.createElement("div", null, "Look at me I'm an app1 version 1");
    }
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function l(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function f() {
      return (f =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var h =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      d =
        "object" === ("undefined" == typeof window ? "undefined" : h(window)) &&
        "object" ===
          ("undefined" == typeof document ? "undefined" : h(document)) &&
        9 === document.nodeType;
    function p(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function y(e, t, r) {
      return t && p(e.prototype, t), r && p(e, r), e;
    }
    function v(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    function g(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    var m = {}.constructor;
    function b(e) {
      if (null == e || "object" != typeof e) return e;
      if (Array.isArray(e)) return e.map(b);
      if (e.constructor !== m) return e;
      var t = {};
      for (var r in e) t[r] = b(e[r]);
      return t;
    }
    function x(e, t, r) {
      void 0 === e && (e = "unnamed");
      var n = r.jss,
        i = b(t),
        o = n.plugins.onCreateRule(e, i, r);
      return o || (e[0], null);
    }
    var P = function (e, t) {
      for (var r = "", n = 0; n < e.length && "!important" !== e[n]; n++)
        r && (r += t), (r += e[n]);
      return r;
    };
    function k(e, t) {
      if ((void 0 === t && (t = !1), !Array.isArray(e))) return e;
      var r = "";
      if (Array.isArray(e[0]))
        for (var n = 0; n < e.length && "!important" !== e[n]; n++)
          r && (r += ", "), (r += P(e[n], " "));
      else r = P(e, ", ");
      return t || "!important" !== e[e.length - 1] || (r += " !important"), r;
    }
    function S(e, t) {
      for (var r = "", n = 0; n < t; n++) r += "  ";
      return r + e;
    }
    function w(e, t, r) {
      void 0 === r && (r = {});
      var n = "";
      if (!t) return n;
      var i = r.indent,
        o = void 0 === i ? 0 : i,
        s = t.fallbacks;
      if ((e && o++, s))
        if (Array.isArray(s))
          for (var a = 0; a < s.length; a++) {
            var u = s[a];
            for (var l in u) {
              var c = u[l];
              null != c &&
                (n && (n += "\n"), (n += "" + S(l + ": " + k(c) + ";", o)));
            }
          }
        else
          for (var f in s) {
            var h = s[f];
            null != h &&
              (n && (n += "\n"), (n += "" + S(f + ": " + k(h) + ";", o)));
          }
      for (var d in t) {
        var p = t[d];
        null != p &&
          "fallbacks" !== d &&
          (n && (n += "\n"), (n += "" + S(d + ": " + k(p) + ";", o)));
      }
      return (n || r.allowEmpty) && e
        ? (n && (n = "\n" + n + "\n"), S(e + " {" + n, --o) + S("}", o))
        : n;
    }
    var R = /([[\].#*$><+~=|^:(),"'`\s])/g,
      O = "undefined" != typeof CSS && CSS.escape,
      _ = function (e) {
        return O ? O(e) : e.replace(R, "\\$1");
      },
      j = (function () {
        function e(e, t, r) {
          (this.type = "style"),
            (this.key = void 0),
            (this.isProcessed = !1),
            (this.style = void 0),
            (this.renderer = void 0),
            (this.renderable = void 0),
            (this.options = void 0);
          var n = r.sheet,
            i = r.Renderer;
          (this.key = e),
            (this.options = r),
            (this.style = t),
            n ? (this.renderer = n.renderer) : i && (this.renderer = new i());
        }
        return (
          (e.prototype.prop = function (e, t, r) {
            if (void 0 === t) return this.style[e];
            var n = !!r && r.force;
            if (!n && this.style[e] === t) return this;
            var i = t;
            (r && !1 === r.process) ||
              (i = this.options.jss.plugins.onChangeValue(t, e, this));
            var o = null == i || !1 === i,
              s = e in this.style;
            if (o && !s && !n) return this;
            var a = o && s;
            if (
              (a ? delete this.style[e] : (this.style[e] = i),
              this.renderable && this.renderer)
            )
              return (
                a
                  ? this.renderer.removeProperty(this.renderable, e)
                  : this.renderer.setProperty(this.renderable, e, i),
                this
              );
            var u = this.options.sheet;
            return u && u.attached, this;
          }),
          e
        );
      })(),
      E = (function (e) {
        function t(t, r, n) {
          var i;
          ((i = e.call(this, t, r, n) || this).selectorText = void 0),
            (i.id = void 0),
            (i.renderable = void 0);
          var o = n.selector,
            s = n.scoped,
            a = n.sheet,
            u = n.generateId;
          return (
            o
              ? (i.selectorText = o)
              : !1 !== s &&
                ((i.id = u(g(g(i)), a)), (i.selectorText = "." + _(i.id))),
            i
          );
        }
        v(t, e);
        var r = t.prototype;
        return (
          (r.applyTo = function (e) {
            var t = this.renderer;
            if (t) {
              var r = this.toJSON();
              for (var n in r) t.setProperty(e, n, r[n]);
            }
            return this;
          }),
          (r.toJSON = function () {
            var e = {};
            for (var t in this.style) {
              var r = this.style[t];
              "object" != typeof r
                ? (e[t] = r)
                : Array.isArray(r) && (e[t] = k(r));
            }
            return e;
          }),
          (r.toString = function (e) {
            var t = this.options.sheet,
              r = !!t && t.options.link ? f({}, e, { allowEmpty: !0 }) : e;
            return w(this.selectorText, this.style, r);
          }),
          y(t, [
            {
              key: "selector",
              set: function (e) {
                if (e !== this.selectorText) {
                  this.selectorText = e;
                  var t = this.renderer,
                    r = this.renderable;
                  if (r && t) t.setSelector(r, e) || t.replaceRule(r, this);
                }
              },
              get: function () {
                return this.selectorText;
              },
            },
          ]),
          t
        );
      })(j),
      C = {
        onCreateRule: function (e, t, r) {
          return "@" === e[0] || (r.parent && "keyframes" === r.parent.type)
            ? null
            : new E(e, t, r);
        },
      },
      A = { indent: 1, children: !0 },
      T = /@([\w-]+)/,
      M = (function () {
        function e(e, t, r) {
          (this.type = "conditional"),
            (this.at = void 0),
            (this.key = void 0),
            (this.query = void 0),
            (this.rules = void 0),
            (this.options = void 0),
            (this.isProcessed = !1),
            (this.renderable = void 0),
            (this.key = e),
            (this.query = r.name);
          var n = e.match(T);
          for (var i in ((this.at = n ? n[1] : "unknown"),
          (this.options = r),
          (this.rules = new re(f({}, r, { parent: this }))),
          t))
            this.rules.add(i, t[i]);
          this.rules.process();
        }
        var t = e.prototype;
        return (
          (t.getRule = function (e) {
            return this.rules.get(e);
          }),
          (t.indexOf = function (e) {
            return this.rules.indexOf(e);
          }),
          (t.addRule = function (e, t, r) {
            var n = this.rules.add(e, t, r);
            return n ? (this.options.jss.plugins.onProcessRule(n), n) : null;
          }),
          (t.toString = function (e) {
            if (
              (void 0 === e && (e = A),
              null == e.indent && (e.indent = A.indent),
              null == e.children && (e.children = A.children),
              !1 === e.children)
            )
              return this.query + " {}";
            var t = this.rules.toString(e);
            return t ? this.query + " {\n" + t + "\n}" : "";
          }),
          e
        );
      })(),
      I = /@media|@supports\s+/,
      N = {
        onCreateRule: function (e, t, r) {
          return I.test(e) ? new M(e, t, r) : null;
        },
      },
      W = { indent: 1, children: !0 },
      L = /@keyframes\s+([\w-]+)/,
      U = (function () {
        function e(e, t, r) {
          (this.type = "keyframes"),
            (this.at = "@keyframes"),
            (this.key = void 0),
            (this.name = void 0),
            (this.id = void 0),
            (this.rules = void 0),
            (this.options = void 0),
            (this.isProcessed = !1),
            (this.renderable = void 0);
          var n = e.match(L);
          n && n[1] ? (this.name = n[1]) : (this.name = "noname"),
            (this.key = this.type + "-" + this.name),
            (this.options = r);
          var i = r.scoped,
            o = r.sheet,
            s = r.generateId;
          for (var a in ((this.id = !1 === i ? this.name : _(s(this, o))),
          (this.rules = new re(f({}, r, { parent: this }))),
          t))
            this.rules.add(a, t[a], f({}, r, { parent: this }));
          this.rules.process();
        }
        return (
          (e.prototype.toString = function (e) {
            if (
              (void 0 === e && (e = W),
              null == e.indent && (e.indent = W.indent),
              null == e.children && (e.children = W.children),
              !1 === e.children)
            )
              return this.at + " " + this.id + " {}";
            var t = this.rules.toString(e);
            return (
              t && (t = "\n" + t + "\n"),
              this.at + " " + this.id + " {" + t + "}"
            );
          }),
          e
        );
      })(),
      q = /@keyframes\s+/,
      z = /\$([\w-]+)/g,
      V = function (e, t) {
        return "string" == typeof e
          ? e.replace(z, function (e, r) {
              return r in t ? t[r] : e;
            })
          : e;
      },
      B = function (e, t, r) {
        var n = e[t],
          i = V(n, r);
        i !== n && (e[t] = i);
      },
      D = {
        onCreateRule: function (e, t, r) {
          return "string" == typeof e && q.test(e) ? new U(e, t, r) : null;
        },
        onProcessStyle: function (e, t, r) {
          return "style" === t.type && r
            ? ("animation-name" in e && B(e, "animation-name", r.keyframes),
              "animation" in e && B(e, "animation", r.keyframes),
              e)
            : e;
        },
        onChangeValue: function (e, t, r) {
          var n = r.options.sheet;
          if (!n) return e;
          switch (t) {
            case "animation":
            case "animation-name":
              return V(e, n.keyframes);
            default:
              return e;
          }
        },
      },
      G = (function (e) {
        function t() {
          for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            ((t =
              e.call.apply(e, [this].concat(n)) || this).renderable = void 0),
            t
          );
        }
        return (
          v(t, e),
          (t.prototype.toString = function (e) {
            var t = this.options.sheet,
              r = !!t && t.options.link ? f({}, e, { allowEmpty: !0 }) : e;
            return w(this.key, this.style, r);
          }),
          t
        );
      })(j),
      $ = {
        onCreateRule: function (e, t, r) {
          return r.parent && "keyframes" === r.parent.type
            ? new G(e, t, r)
            : null;
        },
      },
      H = (function () {
        function e(e, t, r) {
          (this.type = "font-face"),
            (this.at = "@font-face"),
            (this.key = void 0),
            (this.style = void 0),
            (this.options = void 0),
            (this.isProcessed = !1),
            (this.renderable = void 0),
            (this.key = e),
            (this.style = t),
            (this.options = r);
        }
        return (
          (e.prototype.toString = function (e) {
            if (Array.isArray(this.style)) {
              for (var t = "", r = 0; r < this.style.length; r++)
                (t += w(this.at, this.style[r])),
                  this.style[r + 1] && (t += "\n");
              return t;
            }
            return w(this.at, this.style, e);
          }),
          e
        );
      })(),
      K = /@font-face/,
      X = {
        onCreateRule: function (e, t, r) {
          return K.test(e) ? new H(e, t, r) : null;
        },
      },
      F = (function () {
        function e(e, t, r) {
          (this.type = "viewport"),
            (this.at = "@viewport"),
            (this.key = void 0),
            (this.style = void 0),
            (this.options = void 0),
            (this.isProcessed = !1),
            (this.renderable = void 0),
            (this.key = e),
            (this.style = t),
            (this.options = r);
        }
        return (
          (e.prototype.toString = function (e) {
            return w(this.key, this.style, e);
          }),
          e
        );
      })(),
      J = {
        onCreateRule: function (e, t, r) {
          return "@viewport" === e || "@-ms-viewport" === e
            ? new F(e, t, r)
            : null;
        },
      },
      Y = (function () {
        function e(e, t, r) {
          (this.type = "simple"),
            (this.key = void 0),
            (this.value = void 0),
            (this.options = void 0),
            (this.isProcessed = !1),
            (this.renderable = void 0),
            (this.key = e),
            (this.value = t),
            (this.options = r);
        }
        return (
          (e.prototype.toString = function (e) {
            if (Array.isArray(this.value)) {
              for (var t = "", r = 0; r < this.value.length; r++)
                (t += this.key + " " + this.value[r] + ";"),
                  this.value[r + 1] && (t += "\n");
              return t;
            }
            return this.key + " " + this.value + ";";
          }),
          e
        );
      })(),
      Z = { "@charset": !0, "@import": !0, "@namespace": !0 },
      Q = [
        C,
        N,
        D,
        $,
        X,
        J,
        {
          onCreateRule: function (e, t, r) {
            return e in Z ? new Y(e, t, r) : null;
          },
        },
      ],
      ee = { process: !0 },
      te = { force: !0, process: !0 },
      re = (function () {
        function e(e) {
          (this.map = {}),
            (this.raw = {}),
            (this.index = []),
            (this.counter = 0),
            (this.options = void 0),
            (this.classes = void 0),
            (this.keyframes = void 0),
            (this.options = e),
            (this.classes = e.classes),
            (this.keyframes = e.keyframes);
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, r) {
            var n = this.options,
              i = n.parent,
              o = n.sheet,
              s = n.jss,
              a = n.Renderer,
              u = n.generateId,
              l = n.scoped,
              c = f(
                {
                  classes: this.classes,
                  parent: i,
                  sheet: o,
                  jss: s,
                  Renderer: a,
                  generateId: u,
                  scoped: l,
                  name: e,
                  keyframes: this.keyframes,
                  selector: void 0,
                },
                r
              ),
              h = e;
            e in this.raw && (h = e + "-d" + this.counter++),
              (this.raw[h] = t),
              h in this.classes && (c.selector = "." + _(this.classes[h]));
            var d = x(h, t, c);
            if (!d) return null;
            this.register(d);
            var p = void 0 === c.index ? this.index.length : c.index;
            return this.index.splice(p, 0, d), d;
          }),
          (t.get = function (e) {
            return this.map[e];
          }),
          (t.remove = function (e) {
            this.unregister(e),
              delete this.raw[e.key],
              this.index.splice(this.index.indexOf(e), 1);
          }),
          (t.indexOf = function (e) {
            return this.index.indexOf(e);
          }),
          (t.process = function () {
            var e = this.options.jss.plugins;
            this.index.slice(0).forEach(e.onProcessRule, e);
          }),
          (t.register = function (e) {
            (this.map[e.key] = e),
              e instanceof E
                ? ((this.map[e.selector] = e),
                  e.id && (this.classes[e.key] = e.id))
                : e instanceof U &&
                  this.keyframes &&
                  (this.keyframes[e.name] = e.id);
          }),
          (t.unregister = function (e) {
            delete this.map[e.key],
              e instanceof E
                ? (delete this.map[e.selector], delete this.classes[e.key])
                : e instanceof U && delete this.keyframes[e.name];
          }),
          (t.update = function () {
            var e, t, r;
            if (
              ("string" ==
              typeof (arguments.length <= 0 ? void 0 : arguments[0])
                ? ((e = arguments.length <= 0 ? void 0 : arguments[0]),
                  (t = arguments.length <= 1 ? void 0 : arguments[1]),
                  (r = arguments.length <= 2 ? void 0 : arguments[2]))
                : ((t = arguments.length <= 0 ? void 0 : arguments[0]),
                  (r = arguments.length <= 1 ? void 0 : arguments[1]),
                  (e = null)),
              e)
            )
              this.updateOne(this.map[e], t, r);
            else
              for (var n = 0; n < this.index.length; n++)
                this.updateOne(this.index[n], t, r);
          }),
          (t.updateOne = function (t, r, n) {
            void 0 === n && (n = ee);
            var i = this.options,
              o = i.jss.plugins,
              s = i.sheet;
            if (t.rules instanceof e) t.rules.update(r, n);
            else {
              var a = t,
                u = a.style;
              if ((o.onUpdate(r, t, s, n), n.process && u && u !== a.style)) {
                for (var l in (o.onProcessStyle(a.style, a, s), a.style)) {
                  var c = a.style[l];
                  c !== u[l] && a.prop(l, c, te);
                }
                for (var f in u) {
                  var h = a.style[f],
                    d = u[f];
                  null == h && h !== d && a.prop(f, null, te);
                }
              }
            }
          }),
          (t.toString = function (e) {
            for (
              var t = "",
                r = this.options.sheet,
                n = !!r && r.options.link,
                i = 0;
              i < this.index.length;
              i++
            ) {
              var o = this.index[i].toString(e);
              (o || n) && (t && (t += "\n"), (t += o));
            }
            return t;
          }),
          e
        );
      })(),
      ne = (function () {
        function e(e, t) {
          for (var r in ((this.options = void 0),
          (this.deployed = void 0),
          (this.attached = void 0),
          (this.rules = void 0),
          (this.renderer = void 0),
          (this.classes = void 0),
          (this.keyframes = void 0),
          (this.queue = void 0),
          (this.attached = !1),
          (this.deployed = !1),
          (this.classes = {}),
          (this.keyframes = {}),
          (this.options = f({}, t, {
            sheet: this,
            parent: this,
            classes: this.classes,
            keyframes: this.keyframes,
          })),
          t.Renderer && (this.renderer = new t.Renderer(this)),
          (this.rules = new re(this.options)),
          e))
            this.rules.add(r, e[r]);
          this.rules.process();
        }
        var t = e.prototype;
        return (
          (t.attach = function () {
            return (
              this.attached ||
                (this.renderer && this.renderer.attach(),
                (this.attached = !0),
                this.deployed || this.deploy()),
              this
            );
          }),
          (t.detach = function () {
            return this.attached
              ? (this.renderer && this.renderer.detach(),
                (this.attached = !1),
                this)
              : this;
          }),
          (t.addRule = function (e, t, r) {
            var n = this.queue;
            this.attached && !n && (this.queue = []);
            var i = this.rules.add(e, t, r);
            return i
              ? (this.options.jss.plugins.onProcessRule(i),
                this.attached
                  ? this.deployed
                    ? (n
                        ? n.push(i)
                        : (this.insertRule(i),
                          this.queue &&
                            (this.queue.forEach(this.insertRule, this),
                            (this.queue = void 0))),
                      i)
                    : i
                  : ((this.deployed = !1), i))
              : null;
          }),
          (t.insertRule = function (e) {
            this.renderer && this.renderer.insertRule(e);
          }),
          (t.addRules = function (e, t) {
            var r = [];
            for (var n in e) {
              var i = this.addRule(n, e[n], t);
              i && r.push(i);
            }
            return r;
          }),
          (t.getRule = function (e) {
            return this.rules.get(e);
          }),
          (t.deleteRule = function (e) {
            var t = "object" == typeof e ? e : this.rules.get(e);
            return (
              !!t &&
              (this.rules.remove(t),
              !(this.attached && t.renderable && this.renderer) ||
                this.renderer.deleteRule(t.renderable))
            );
          }),
          (t.indexOf = function (e) {
            return this.rules.indexOf(e);
          }),
          (t.deploy = function () {
            return (
              this.renderer && this.renderer.deploy(),
              (this.deployed = !0),
              this
            );
          }),
          (t.update = function () {
            var e;
            return (e = this.rules).update.apply(e, arguments), this;
          }),
          (t.updateOne = function (e, t, r) {
            return this.rules.updateOne(e, t, r), this;
          }),
          (t.toString = function (e) {
            return this.rules.toString(e);
          }),
          e
        );
      })(),
      ie = (function () {
        function e() {
          (this.plugins = { internal: [], external: [] }),
            (this.registry = void 0);
        }
        var t = e.prototype;
        return (
          (t.onCreateRule = function (e, t, r) {
            for (var n = 0; n < this.registry.onCreateRule.length; n++) {
              var i = this.registry.onCreateRule[n](e, t, r);
              if (i) return i;
            }
            return null;
          }),
          (t.onProcessRule = function (e) {
            if (!e.isProcessed) {
              for (
                var t = e.options.sheet, r = 0;
                r < this.registry.onProcessRule.length;
                r++
              )
                this.registry.onProcessRule[r](e, t);
              e.style && this.onProcessStyle(e.style, e, t),
                (e.isProcessed = !0);
            }
          }),
          (t.onProcessStyle = function (e, t, r) {
            for (var n = 0; n < this.registry.onProcessStyle.length; n++)
              t.style = this.registry.onProcessStyle[n](t.style, t, r);
          }),
          (t.onProcessSheet = function (e) {
            for (var t = 0; t < this.registry.onProcessSheet.length; t++)
              this.registry.onProcessSheet[t](e);
          }),
          (t.onUpdate = function (e, t, r, n) {
            for (var i = 0; i < this.registry.onUpdate.length; i++)
              this.registry.onUpdate[i](e, t, r, n);
          }),
          (t.onChangeValue = function (e, t, r) {
            for (var n = e, i = 0; i < this.registry.onChangeValue.length; i++)
              n = this.registry.onChangeValue[i](n, t, r);
            return n;
          }),
          (t.use = function (e, t) {
            void 0 === t && (t = { queue: "external" });
            var r = this.plugins[t.queue];
            -1 === r.indexOf(e) &&
              (r.push(e),
              (this.registry = []
                .concat(this.plugins.external, this.plugins.internal)
                .reduce(
                  function (e, t) {
                    for (var r in t) r in e && e[r].push(t[r]);
                    return e;
                  },
                  {
                    onCreateRule: [],
                    onProcessRule: [],
                    onProcessStyle: [],
                    onProcessSheet: [],
                    onChangeValue: [],
                    onUpdate: [],
                  }
                )));
          }),
          e
        );
      })(),
      oe = (function () {
        function e() {
          this.registry = [];
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this.registry,
              r = e.options.index;
            if (-1 === t.indexOf(e))
              if (0 === t.length || r >= this.index) t.push(e);
              else
                for (var n = 0; n < t.length; n++)
                  if (t[n].options.index > r) return void t.splice(n, 0, e);
          }),
          (t.reset = function () {
            this.registry = [];
          }),
          (t.remove = function (e) {
            var t = this.registry.indexOf(e);
            this.registry.splice(t, 1);
          }),
          (t.toString = function (e) {
            for (
              var t = void 0 === e ? {} : e,
                r = t.attached,
                n = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    i = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i;
                })(t, ["attached"]),
                i = "",
                o = 0;
              o < this.registry.length;
              o++
            ) {
              var s = this.registry[o];
              (null != r && s.attached !== r) ||
                (i && (i += "\n"), (i += s.toString(n)));
            }
            return i;
          }),
          y(e, [
            {
              key: "index",
              get: function () {
                return 0 === this.registry.length
                  ? 0
                  : this.registry[this.registry.length - 1].options.index;
              },
            },
          ]),
          e
        );
      })(),
      se = new oe(),
      ae =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")(),
      ue = "2f1acc6c3a606b082e5eef5e54414ffb";
    null == ae[ue] && (ae[ue] = 0);
    var le = ae[ue]++,
      ce = function (e) {
        void 0 === e && (e = {});
        var t = 0;
        return function (r, n) {
          t += 1;
          var i = "",
            o = "";
          return (
            n &&
              (n.options.classNamePrefix && (o = n.options.classNamePrefix),
              null != n.options.jss.id && (i = String(n.options.jss.id))),
            e.minify
              ? "" + (o || "c") + le + i + t
              : o + r.key + "-" + le + (i ? "-" + i : "") + "-" + t
          );
        };
      },
      fe = function (e) {
        var t;
        return function () {
          return t || (t = e()), t;
        };
      };
    function he(e, t) {
      try {
        return e.attributeStyleMap
          ? e.attributeStyleMap.get(t)
          : e.style.getPropertyValue(t);
      } catch (e) {
        return "";
      }
    }
    function de(e, t, r) {
      try {
        var n = r;
        if (
          Array.isArray(r) &&
          ((n = k(r, !0)), "!important" === r[r.length - 1])
        )
          return e.style.setProperty(t, n, "important"), !0;
        e.attributeStyleMap
          ? e.attributeStyleMap.set(t, n)
          : e.style.setProperty(t, n);
      } catch (e) {
        return !1;
      }
      return !0;
    }
    function pe(e, t) {
      try {
        e.attributeStyleMap
          ? e.attributeStyleMap.delete(t)
          : e.style.removeProperty(t);
      } catch (e) {}
    }
    function ye(e, t) {
      return (e.selectorText = t), e.selectorText === t;
    }
    var ve = fe(function () {
      return document.querySelector("head");
    });
    function ge(e) {
      var t = se.registry;
      if (t.length > 0) {
        var r = (function (e, t) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            if (
              n.attached &&
              n.options.index > t.index &&
              n.options.insertionPoint === t.insertionPoint
            )
              return n;
          }
          return null;
        })(t, e);
        if (r && r.renderer)
          return {
            parent: r.renderer.element.parentNode,
            node: r.renderer.element,
          };
        if (
          (r = (function (e, t) {
            for (var r = e.length - 1; r >= 0; r--) {
              var n = e[r];
              if (n.attached && n.options.insertionPoint === t.insertionPoint)
                return n;
            }
            return null;
          })(t, e)) &&
          r.renderer
        )
          return {
            parent: r.renderer.element.parentNode,
            node: r.renderer.element.nextSibling,
          };
      }
      var n = e.insertionPoint;
      if (n && "string" == typeof n) {
        var i = (function (e) {
          for (var t = ve(), r = 0; r < t.childNodes.length; r++) {
            var n = t.childNodes[r];
            if (8 === n.nodeType && n.nodeValue.trim() === e) return n;
          }
          return null;
        })(n);
        if (i) return { parent: i.parentNode, node: i.nextSibling };
      }
      return !1;
    }
    var me = fe(function () {
        var e = document.querySelector('meta[property="csp-nonce"]');
        return e ? e.getAttribute("content") : null;
      }),
      be = function (e, t, r) {
        var n = e.cssRules.length;
        (void 0 === r || r > n) && (r = n);
        try {
          if ("insertRule" in e) e.insertRule(t, r);
          else if ("appendRule" in e) {
            e.appendRule(t);
          }
        } catch (e) {
          return !1;
        }
        return e.cssRules[r];
      },
      xe = (function () {
        function e(e) {
          (this.getPropertyValue = he),
            (this.setProperty = de),
            (this.removeProperty = pe),
            (this.setSelector = ye),
            (this.element = void 0),
            (this.sheet = void 0),
            (this.hasInsertedRules = !1),
            e && se.add(e),
            (this.sheet = e);
          var t = this.sheet ? this.sheet.options : {},
            r = t.media,
            n = t.meta,
            i = t.element;
          (this.element =
            i ||
            (function () {
              var e = document.createElement("style");
              return (e.textContent = "\n"), e;
            })()),
            this.element.setAttribute("data-jss", ""),
            r && this.element.setAttribute("media", r),
            n && this.element.setAttribute("data-meta", n);
          var o = me();
          o && this.element.setAttribute("nonce", o);
        }
        var t = e.prototype;
        return (
          (t.attach = function () {
            if (!this.element.parentNode && this.sheet) {
              !(function (e, t) {
                var r = t.insertionPoint,
                  n = ge(t);
                if (!1 !== n && n.parent) n.parent.insertBefore(e, n.node);
                else if (r && "number" == typeof r.nodeType) {
                  var i = r,
                    o = i.parentNode;
                  o && o.insertBefore(e, i.nextSibling);
                } else ve().appendChild(e);
              })(this.element, this.sheet.options);
              var e = Boolean(this.sheet && this.sheet.deployed);
              this.hasInsertedRules &&
                e &&
                ((this.hasInsertedRules = !1), this.deploy());
            }
          }),
          (t.detach = function () {
            var e = this.element.parentNode;
            e && e.removeChild(this.element);
          }),
          (t.deploy = function () {
            var e = this.sheet;
            e &&
              (e.options.link
                ? this.insertRules(e.rules)
                : (this.element.textContent = "\n" + e.toString() + "\n"));
          }),
          (t.insertRules = function (e, t) {
            for (var r = 0; r < e.index.length; r++)
              this.insertRule(e.index[r], r, t);
          }),
          (t.insertRule = function (e, t, r) {
            if ((void 0 === r && (r = this.element.sheet), e.rules)) {
              var n = e,
                i = r;
              return (
                (("conditional" !== e.type && "keyframes" !== e.type) ||
                  !1 !== (i = be(r, n.toString({ children: !1 }), t))) &&
                (this.insertRules(n.rules, i), i)
              );
            }
            if (
              e.renderable &&
              e.renderable.parentStyleSheet === this.element.sheet
            )
              return e.renderable;
            var o = e.toString();
            if (!o) return !1;
            var s = be(r, o, t);
            return (
              !1 !== s && ((this.hasInsertedRules = !0), (e.renderable = s), s)
            );
          }),
          (t.deleteRule = function (e) {
            var t = this.element.sheet,
              r = this.indexOf(e);
            return -1 !== r && (t.deleteRule(r), !0);
          }),
          (t.indexOf = function (e) {
            for (var t = this.element.sheet.cssRules, r = 0; r < t.length; r++)
              if (e === t[r]) return r;
            return -1;
          }),
          (t.replaceRule = function (e, t) {
            var r = this.indexOf(e);
            return (
              -1 !== r &&
              (this.element.sheet.deleteRule(r), this.insertRule(t, r))
            );
          }),
          (t.getRules = function () {
            return this.element.sheet.cssRules;
          }),
          e
        );
      })(),
      Pe = 0,
      ke = (function () {
        function e(e) {
          (this.id = Pe++),
            (this.version = "10.4.0"),
            (this.plugins = new ie()),
            (this.options = {
              id: { minify: !1 },
              createGenerateId: ce,
              Renderer: d ? xe : null,
              plugins: [],
            }),
            (this.generateId = ce({ minify: !1 }));
          for (var t = 0; t < Q.length; t++)
            this.plugins.use(Q[t], { queue: "internal" });
          this.setup(e);
        }
        var t = e.prototype;
        return (
          (t.setup = function (e) {
            return (
              void 0 === e && (e = {}),
              e.createGenerateId &&
                (this.options.createGenerateId = e.createGenerateId),
              e.id && (this.options.id = f({}, this.options.id, e.id)),
              (e.createGenerateId || e.id) &&
                (this.generateId = this.options.createGenerateId(
                  this.options.id
                )),
              null != e.insertionPoint &&
                (this.options.insertionPoint = e.insertionPoint),
              "Renderer" in e && (this.options.Renderer = e.Renderer),
              e.plugins && this.use.apply(this, e.plugins),
              this
            );
          }),
          (t.createStyleSheet = function (e, t) {
            void 0 === t && (t = {});
            var r = t.index;
            "number" != typeof r && (r = 0 === se.index ? 0 : se.index + 1);
            var n = new ne(
              e,
              f({}, t, {
                jss: this,
                generateId: t.generateId || this.generateId,
                insertionPoint: this.options.insertionPoint,
                Renderer: this.options.Renderer,
                index: r,
              })
            );
            return this.plugins.onProcessSheet(n), n;
          }),
          (t.removeStyleSheet = function (e) {
            return e.detach(), se.remove(e), this;
          }),
          (t.createRule = function (e, t, r) {
            if (
              (void 0 === t && (t = {}),
              void 0 === r && (r = {}),
              "object" == typeof e)
            )
              return this.createRule(void 0, e, t);
            var n = f({}, r, {
              name: e,
              jss: this,
              Renderer: this.options.Renderer,
            });
            n.generateId || (n.generateId = this.generateId),
              n.classes || (n.classes = {}),
              n.keyframes || (n.keyframes = {});
            var i = x(e, t, n);
            return i && this.plugins.onProcessRule(i), i;
          }),
          (t.use = function () {
            for (
              var e = this, t = arguments.length, r = new Array(t), n = 0;
              n < t;
              n++
            )
              r[n] = arguments[n];
            return (
              r.forEach(function (t) {
                e.plugins.use(t);
              }),
              this
            );
          }),
          e
        );
      })();
    var Se = "undefined" != typeof CSS && CSS && "number" in CSS,
      we = function (e) {
        return new ke(e);
      };
    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */ we();
    function Re(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]));
      }
      return i;
    }
    r(3);
    var Oe =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("mui.nested")
          : "__THEME_NESTED__",
      _e = [
        "checked",
        "disabled",
        "error",
        "focused",
        "focusVisible",
        "required",
        "expanded",
        "selected",
      ];
    function je() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.disableGlobal,
        r = void 0 !== t && t,
        n = e.productionPrefix,
        i = void 0 === n ? "jss" : n,
        o = e.seed,
        s = void 0 === o ? "" : o,
        a = "" === s ? "" : "".concat(s, "-"),
        u = 0,
        l = function () {
          return (u += 1);
        };
      return function (e, t) {
        var n = t.options.name;
        if (n && 0 === n.indexOf("Mui") && !t.options.link && !r) {
          if (-1 !== _e.indexOf(e.key)) return "Mui-".concat(e.key);
          var o = "".concat(a).concat(n, "-").concat(e.key);
          return t.options.theme[Oe] && "" === s
            ? "".concat(o, "-").concat(l())
            : o;
        }
        return "".concat(a).concat(i).concat(l());
      };
    }
    var Ee = Date.now(),
      Ce = "fnValues" + Ee,
      Ae = "fnStyle" + ++Ee;
    var Te = function () {
      return {
        onCreateRule: function (e, t, r) {
          if ("function" != typeof t) return null;
          var n = x(e, {}, r);
          return (n[Ae] = t), n;
        },
        onProcessStyle: function (e, t) {
          if (Ce in t || Ae in t) return e;
          var r = {};
          for (var n in e) {
            var i = e[n];
            "function" == typeof i && (delete e[n], (r[n] = i));
          }
          return (t[Ce] = r), e;
        },
        onUpdate: function (e, t, r, n) {
          var i = t,
            o = i[Ae];
          o && (i.style = o(e) || {});
          var s = i[Ce];
          if (s) for (var a in s) i.prop(a, s[a](e), n);
        },
      };
    };
    function Me() {
      return (Me =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Ie = "@global",
      Ne = (function () {
        function e(e, t, r) {
          for (var n in ((this.type = "global"),
          (this.at = Ie),
          (this.rules = void 0),
          (this.options = void 0),
          (this.key = void 0),
          (this.isProcessed = !1),
          (this.key = e),
          (this.options = r),
          (this.rules = new re(Me({}, r, { parent: this }))),
          t))
            this.rules.add(n, t[n]);
          this.rules.process();
        }
        var t = e.prototype;
        return (
          (t.getRule = function (e) {
            return this.rules.get(e);
          }),
          (t.addRule = function (e, t, r) {
            var n = this.rules.add(e, t, r);
            return this.options.jss.plugins.onProcessRule(n), n;
          }),
          (t.indexOf = function (e) {
            return this.rules.indexOf(e);
          }),
          (t.toString = function () {
            return this.rules.toString();
          }),
          e
        );
      })(),
      We = (function () {
        function e(e, t, r) {
          (this.type = "global"),
            (this.at = Ie),
            (this.options = void 0),
            (this.rule = void 0),
            (this.isProcessed = !1),
            (this.key = void 0),
            (this.key = e),
            (this.options = r);
          var n = e.substr("@global ".length);
          this.rule = r.jss.createRule(n, t, Me({}, r, { parent: this }));
        }
        return (
          (e.prototype.toString = function (e) {
            return this.rule ? this.rule.toString(e) : "";
          }),
          e
        );
      })(),
      Le = /\s*,\s*/g;
    function Ue(e, t) {
      for (var r = e.split(Le), n = "", i = 0; i < r.length; i++)
        (n += t + " " + r[i].trim()), r[i + 1] && (n += ", ");
      return n;
    }
    var qe = function () {
      return {
        onCreateRule: function (e, t, r) {
          if (!e) return null;
          if (e === Ie) return new Ne(e, t, r);
          if ("@" === e[0] && "@global " === e.substr(0, "@global ".length))
            return new We(e, t, r);
          var n = r.parent;
          return (
            n &&
              ("global" === n.type ||
                (n.options.parent && "global" === n.options.parent.type)) &&
              (r.scoped = !1),
            !1 === r.scoped && (r.selector = e),
            null
          );
        },
        onProcessRule: function (e) {
          "style" === e.type &&
            ((function (e) {
              var t = e.options,
                r = e.style,
                n = r ? r[Ie] : null;
              if (n) {
                for (var i in n)
                  t.sheet.addRule(
                    i,
                    n[i],
                    Me({}, t, { selector: Ue(i, e.selector) })
                  );
                delete r[Ie];
              }
            })(e),
            (function (e) {
              var t = e.options,
                r = e.style;
              for (var n in r)
                if ("@" === n[0] && n.substr(0, Ie.length) === Ie) {
                  var i = Ue(n.substr(Ie.length), e.selector);
                  t.sheet.addRule(i, r[n], Me({}, t, { selector: i })),
                    delete r[n];
                }
            })(e));
        },
      };
    };
    function ze() {
      return (ze =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Ve = /\s*,\s*/g,
      Be = /&/g,
      De = /\$([\w-]+)/g;
    var Ge = function () {
        function e(e, t) {
          return function (r, n) {
            var i = e.getRule(n) || (t && t.getRule(n));
            return i ? (i = i).selector : n;
          };
        }
        function t(e, t) {
          for (
            var r = t.split(Ve), n = e.split(Ve), i = "", o = 0;
            o < r.length;
            o++
          )
            for (var s = r[o], a = 0; a < n.length; a++) {
              var u = n[a];
              i && (i += ", "),
                (i += -1 !== u.indexOf("&") ? u.replace(Be, s) : s + " " + u);
            }
          return i;
        }
        function r(e, t, r) {
          if (r) return ze({}, r, { index: r.index + 1 });
          var n = e.options.nestingLevel;
          n = void 0 === n ? 1 : n + 1;
          var i = ze({}, e.options, {
            nestingLevel: n,
            index: t.indexOf(e) + 1,
          });
          return delete i.name, i;
        }
        return {
          onProcessStyle: function (n, i, o) {
            if ("style" !== i.type) return n;
            var s,
              a,
              u = i,
              l = u.options.parent;
            for (var c in n) {
              var f = -1 !== c.indexOf("&"),
                h = "@" === c[0];
              if (f || h) {
                if (((s = r(u, l, s)), f)) {
                  var d = t(c, u.selector);
                  a || (a = e(l, o)),
                    (d = d.replace(De, a)),
                    l.addRule(d, n[c], ze({}, s, { selector: d }));
                } else
                  h &&
                    l
                      .addRule(c, {}, s)
                      .addRule(u.key, n[c], { selector: u.selector });
                delete n[c];
              }
            }
            return n;
          },
        };
      },
      $e = /[A-Z]/g,
      He = /^ms-/,
      Ke = {};
    function Xe(e) {
      return "-" + e.toLowerCase();
    }
    var Fe = function (e) {
      if (Ke.hasOwnProperty(e)) return Ke[e];
      var t = e.replace($e, Xe);
      return (Ke[e] = He.test(t) ? "-" + t : t);
    };
    function Je(e) {
      var t = {};
      for (var r in e) {
        t[0 === r.indexOf("--") ? r : Fe(r)] = e[r];
      }
      return (
        e.fallbacks &&
          (Array.isArray(e.fallbacks)
            ? (t.fallbacks = e.fallbacks.map(Je))
            : (t.fallbacks = Je(e.fallbacks))),
        t
      );
    }
    var Ye = function () {
        return {
          onProcessStyle: function (e) {
            if (Array.isArray(e)) {
              for (var t = 0; t < e.length; t++) e[t] = Je(e[t]);
              return e;
            }
            return Je(e);
          },
          onChangeValue: function (e, t, r) {
            if (0 === t.indexOf("--")) return e;
            var n = Fe(t);
            return t === n ? e : (r.prop(n, e), null);
          },
        };
      },
      Ze = Se && CSS ? CSS.px : "px",
      Qe = Se && CSS ? CSS.ms : "ms",
      et = Se && CSS ? CSS.percent : "%";
    function tt(e) {
      var t = /(-[a-z])/g,
        r = function (e) {
          return e[1].toUpperCase();
        },
        n = {};
      for (var i in e) (n[i] = e[i]), (n[i.replace(t, r)] = e[i]);
      return n;
    }
    var rt = tt({
      "animation-delay": Qe,
      "animation-duration": Qe,
      "background-position": Ze,
      "background-position-x": Ze,
      "background-position-y": Ze,
      "background-size": Ze,
      border: Ze,
      "border-bottom": Ze,
      "border-bottom-left-radius": Ze,
      "border-bottom-right-radius": Ze,
      "border-bottom-width": Ze,
      "border-left": Ze,
      "border-left-width": Ze,
      "border-radius": Ze,
      "border-right": Ze,
      "border-right-width": Ze,
      "border-top": Ze,
      "border-top-left-radius": Ze,
      "border-top-right-radius": Ze,
      "border-top-width": Ze,
      "border-width": Ze,
      margin: Ze,
      "margin-bottom": Ze,
      "margin-left": Ze,
      "margin-right": Ze,
      "margin-top": Ze,
      padding: Ze,
      "padding-bottom": Ze,
      "padding-left": Ze,
      "padding-right": Ze,
      "padding-top": Ze,
      "mask-position-x": Ze,
      "mask-position-y": Ze,
      "mask-size": Ze,
      height: Ze,
      width: Ze,
      "min-height": Ze,
      "max-height": Ze,
      "min-width": Ze,
      "max-width": Ze,
      bottom: Ze,
      left: Ze,
      top: Ze,
      right: Ze,
      "box-shadow": Ze,
      "text-shadow": Ze,
      "column-gap": Ze,
      "column-rule": Ze,
      "column-rule-width": Ze,
      "column-width": Ze,
      "font-size": Ze,
      "font-size-delta": Ze,
      "letter-spacing": Ze,
      "text-indent": Ze,
      "text-stroke": Ze,
      "text-stroke-width": Ze,
      "word-spacing": Ze,
      motion: Ze,
      "motion-offset": Ze,
      outline: Ze,
      "outline-offset": Ze,
      "outline-width": Ze,
      perspective: Ze,
      "perspective-origin-x": et,
      "perspective-origin-y": et,
      "transform-origin": et,
      "transform-origin-x": et,
      "transform-origin-y": et,
      "transform-origin-z": et,
      "transition-delay": Qe,
      "transition-duration": Qe,
      "vertical-align": Ze,
      "flex-basis": Ze,
      "shape-margin": Ze,
      size: Ze,
      grid: Ze,
      "grid-gap": Ze,
      "grid-row-gap": Ze,
      "grid-column-gap": Ze,
      "grid-template-rows": Ze,
      "grid-template-columns": Ze,
      "grid-auto-rows": Ze,
      "grid-auto-columns": Ze,
      "box-shadow-x": Ze,
      "box-shadow-y": Ze,
      "box-shadow-blur": Ze,
      "box-shadow-spread": Ze,
      "font-line-height": Ze,
      "text-shadow-x": Ze,
      "text-shadow-y": Ze,
      "text-shadow-blur": Ze,
    });
    function nt(e, t, r) {
      if (!t) return t;
      if (Array.isArray(t))
        for (var n = 0; n < t.length; n++) t[n] = nt(e, t[n], r);
      else if ("object" == typeof t)
        if ("fallbacks" === e) for (var i in t) t[i] = nt(i, t[i], r);
        else for (var o in t) t[o] = nt(e + "-" + o, t[o], r);
      else if ("number" == typeof t) {
        var s = r[e] || rt[e];
        return s
          ? "function" == typeof s
            ? s(t).toString()
            : "" + t + s
          : t.toString();
      }
      return t;
    }
    var it = function (e) {
      void 0 === e && (e = {});
      var t = tt(e);
      return {
        onProcessStyle: function (e, r) {
          if ("style" !== r.type) return e;
          for (var n in e) e[n] = nt(n, e[n], t);
          return e;
        },
        onChangeValue: function (e, r) {
          return nt(r, e, t);
        },
      };
    };
    function ot(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function st(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return ot(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return ot(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? ot(e, t)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var at = "",
      ut = "",
      lt = "",
      ct = "",
      ft = d && "ontouchstart" in document.documentElement;
    if (d) {
      var ht = { Moz: "-moz-", ms: "-ms-", O: "-o-", Webkit: "-webkit-" },
        dt = document.createElement("p").style;
      for (var pt in ht)
        if (pt + "Transform" in dt) {
          (at = pt), (ut = ht[pt]);
          break;
        }
      "Webkit" === at &&
        "msHyphens" in dt &&
        ((at = "ms"), (ut = ht.ms), (ct = "edge")),
        "Webkit" === at && "-apple-trailing-word" in dt && (lt = "apple");
    }
    var yt = at,
      vt = ut,
      gt = lt,
      mt = ct,
      bt = ft;
    var xt = {
        noPrefill: ["appearance"],
        supportedProperty: function (e) {
          return "appearance" === e && ("ms" === yt ? "-webkit-" + e : vt + e);
        },
      },
      Pt = {
        noPrefill: ["color-adjust"],
        supportedProperty: function (e) {
          return (
            "color-adjust" === e && ("Webkit" === yt ? vt + "print-" + e : e)
          );
        },
      },
      kt = /[-\s]+(.)?/g;
    function St(e, t) {
      return t ? t.toUpperCase() : "";
    }
    function wt(e) {
      return e.replace(kt, St);
    }
    function Rt(e) {
      return wt("-" + e);
    }
    var Ot,
      _t = {
        noPrefill: ["mask"],
        supportedProperty: function (e, t) {
          if (!/^mask/.test(e)) return !1;
          if ("Webkit" === yt) {
            if (wt("mask-image") in t) return e;
            if (yt + Rt("mask-image") in t) return vt + e;
          }
          return e;
        },
      },
      jt = {
        noPrefill: ["text-orientation"],
        supportedProperty: function (e) {
          return (
            "text-orientation" === e && ("apple" !== gt || bt ? e : vt + e)
          );
        },
      },
      Et = {
        noPrefill: ["transform"],
        supportedProperty: function (e, t, r) {
          return "transform" === e && (r.transform ? e : vt + e);
        },
      },
      Ct = {
        noPrefill: ["transition"],
        supportedProperty: function (e, t, r) {
          return "transition" === e && (r.transition ? e : vt + e);
        },
      },
      At = {
        noPrefill: ["writing-mode"],
        supportedProperty: function (e) {
          return (
            "writing-mode" === e &&
            ("Webkit" === yt || ("ms" === yt && "edge" !== mt) ? vt + e : e)
          );
        },
      },
      Tt = {
        noPrefill: ["user-select"],
        supportedProperty: function (e) {
          return (
            "user-select" === e &&
            ("Moz" === yt || "ms" === yt || "apple" === gt ? vt + e : e)
          );
        },
      },
      Mt = {
        supportedProperty: function (e, t) {
          return (
            !!/^break-/.test(e) &&
            ("Webkit" === yt
              ? "WebkitColumn" + Rt(e) in t && vt + "column-" + e
              : "Moz" === yt && "page" + Rt(e) in t && "page-" + e)
          );
        },
      },
      It = {
        supportedProperty: function (e, t) {
          if (!/^(border|margin|padding)-inline/.test(e)) return !1;
          if ("Moz" === yt) return e;
          var r = e.replace("-inline", "");
          return yt + Rt(r) in t && vt + r;
        },
      },
      Nt = {
        supportedProperty: function (e, t) {
          return wt(e) in t && e;
        },
      },
      Wt = {
        supportedProperty: function (e, t) {
          var r = Rt(e);
          return "-" === e[0] || ("-" === e[0] && "-" === e[1])
            ? e
            : yt + r in t
            ? vt + e
            : "Webkit" !== yt && "Webkit" + r in t && "-webkit-" + e;
        },
      },
      Lt = {
        supportedProperty: function (e) {
          return (
            "scroll-snap" === e.substring(0, 11) &&
            ("ms" === yt ? "" + vt + e : e)
          );
        },
      },
      Ut = {
        supportedProperty: function (e) {
          return (
            "overscroll-behavior" === e &&
            ("ms" === yt ? vt + "scroll-chaining" : e)
          );
        },
      },
      qt = {
        "flex-grow": "flex-positive",
        "flex-shrink": "flex-negative",
        "flex-basis": "flex-preferred-size",
        "justify-content": "flex-pack",
        order: "flex-order",
        "align-items": "flex-align",
        "align-content": "flex-line-pack",
      },
      zt = {
        supportedProperty: function (e, t) {
          var r = qt[e];
          return !!r && yt + Rt(r) in t && vt + r;
        },
      },
      Vt = {
        flex: "box-flex",
        "flex-grow": "box-flex",
        "flex-direction": ["box-orient", "box-direction"],
        order: "box-ordinal-group",
        "align-items": "box-align",
        "flex-flow": ["box-orient", "box-direction"],
        "justify-content": "box-pack",
      },
      Bt = Object.keys(Vt),
      Dt = function (e) {
        return vt + e;
      },
      Gt = [
        xt,
        Pt,
        _t,
        jt,
        Et,
        Ct,
        At,
        Tt,
        Mt,
        It,
        Nt,
        Wt,
        Lt,
        Ut,
        zt,
        {
          supportedProperty: function (e, t, r) {
            var n = r.multiple;
            if (Bt.indexOf(e) > -1) {
              var i = Vt[e];
              if (!Array.isArray(i)) return yt + Rt(i) in t && vt + i;
              if (!n) return !1;
              for (var o = 0; o < i.length; o++)
                if (!(yt + Rt(i[0]) in t)) return !1;
              return i.map(Dt);
            }
            return !1;
          },
        },
      ],
      $t = Gt.filter(function (e) {
        return e.supportedProperty;
      }).map(function (e) {
        return e.supportedProperty;
      }),
      Ht = Gt.filter(function (e) {
        return e.noPrefill;
      }).reduce(function (e, t) {
        return e.push.apply(e, st(t.noPrefill)), e;
      }, []),
      Kt = {};
    if (d) {
      Ot = document.createElement("p");
      var Xt = window.getComputedStyle(document.documentElement, "");
      for (var Ft in Xt) isNaN(Ft) || (Kt[Xt[Ft]] = Xt[Ft]);
      Ht.forEach(function (e) {
        return delete Kt[e];
      });
    }
    function Jt(e, t) {
      if ((void 0 === t && (t = {}), !Ot)) return e;
      if (null != Kt[e]) return Kt[e];
      ("transition" !== e && "transform" !== e) || (t[e] = e in Ot.style);
      for (
        var r = 0;
        r < $t.length && ((Kt[e] = $t[r](e, Ot.style, t)), !Kt[e]);
        r++
      );
      try {
        Ot.style[e] = "";
      } catch (e) {
        return !1;
      }
      return Kt[e];
    }
    var Yt,
      Zt = {},
      Qt = {
        transition: 1,
        "transition-property": 1,
        "-webkit-transition": 1,
        "-webkit-transition-property": 1,
      },
      er = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    function tr(e, t, r) {
      if ("var" === t) return "var";
      if ("all" === t) return "all";
      if ("all" === r) return ", all";
      var n = t ? Jt(t) : ", " + Jt(r);
      return n || t || r;
    }
    function rr(e, t) {
      var r = t;
      if (!Yt || "content" === e) return t;
      if ("string" != typeof r || !isNaN(parseInt(r, 10))) return r;
      var n = e + r;
      if (null != Zt[n]) return Zt[n];
      try {
        Yt.style[e] = r;
      } catch (e) {
        return (Zt[n] = !1), !1;
      }
      if (Qt[e]) r = r.replace(er, tr);
      else if (
        "" === Yt.style[e] &&
        ("-ms-flex" === (r = vt + r) && (Yt.style[e] = "-ms-flexbox"),
        (Yt.style[e] = r),
        "" === Yt.style[e])
      )
        return (Zt[n] = !1), !1;
      return (Yt.style[e] = ""), (Zt[n] = r), Zt[n];
    }
    d && (Yt = document.createElement("p"));
    var nr = function () {
      function e(t) {
        for (var r in t) {
          var n = t[r];
          if ("fallbacks" === r && Array.isArray(n)) t[r] = n.map(e);
          else {
            var i = !1,
              o = Jt(r);
            o && o !== r && (i = !0);
            var s = !1,
              a = rr(o, k(n));
            a && a !== n && (s = !0),
              (i || s) && (i && delete t[r], (t[o || r] = a || n));
          }
        }
        return t;
      }
      return {
        onProcessRule: function (e) {
          if ("keyframes" === e.type) {
            var t = e;
            t.at =
              "-" === (r = t.at)[1] || "ms" === yt
                ? r
                : "@" + vt + "keyframes" + r.substr(10);
          }
          var r;
        },
        onProcessStyle: function (t, r) {
          return "style" !== r.type ? t : e(t);
        },
        onChangeValue: function (e, t) {
          return rr(t, k(e)) || e;
        },
      };
    };
    var ir = function () {
      var e = function (e, t) {
        return e.length === t.length ? (e > t ? 1 : -1) : e.length - t.length;
      };
      return {
        onProcessStyle: function (t, r) {
          if ("style" !== r.type) return t;
          for (var n = {}, i = Object.keys(t).sort(e), o = 0; o < i.length; o++)
            n[i[o]] = t[i[o]];
          return n;
        },
      };
    };
    function or() {
      return {
        plugins: [
          Te(),
          qe(),
          Ge(),
          Ye(),
          it(),
          "undefined" == typeof window ? null : nr(),
          ir(),
        ],
      };
    }
    var sr,
      ar = we(or()),
      ur = {
        disableGeneration: !1,
        generateClassName: je(),
        jss: ar,
        sheetsCache: null,
        sheetsManager: new Map(),
        sheetsRegistry: null,
      },
      lr = i.a.createContext(ur);
    function cr(e) {
      var t = e.children,
        r = e.injectFirst,
        n = void 0 !== r && r,
        o = e.disableGeneration,
        s = void 0 !== o && o,
        a = Re(e, ["children", "injectFirst", "disableGeneration"]),
        l = u(u({}, i.a.useContext(lr)), {}, { disableGeneration: s }, a);
      if (!l.jss.options.insertionPoint && n && "undefined" != typeof window) {
        if (!sr) {
          var c = document.head;
          (sr = document.createComment("mui-inject-first")),
            c.insertBefore(sr, c.firstChild);
        }
        l.jss = we({ plugins: or().plugins, insertionPoint: sr });
      }
      return i.a.createElement(lr.Provider, { value: l }, t);
    }
    var fr = (function () {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(this, e), (this.options = t);
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "collect",
            value: function (e) {
              var t = new Map();
              this.sheetsRegistry = new oe();
              var r = je();
              return i.a.createElement(
                cr,
                u(
                  {
                    sheetsManager: t,
                    serverGenerateClassName: r,
                    sheetsRegistry: this.sheetsRegistry,
                  },
                  this.options
                ),
                e
              );
            },
          },
          {
            key: "toString",
            value: function () {
              return this.sheetsRegistry ? this.sheetsRegistry.toString() : "";
            },
          },
          {
            key: "getStyleElement",
            value: function (e) {
              return i.a.createElement(
                "style",
                u(
                  {
                    id: "jss-server-side",
                    key: "jss-server-side",
                    dangerouslySetInnerHTML: { __html: this.toString() },
                  },
                  e
                )
              );
            },
          },
        ]) && c(t.prototype, r),
        n && c(t, n),
        e
      );
    })();
    const hr = (e) => ({ "x-navbar": 1 });
    function dr(e) {
      const t = new fr(),
        r = t.collect(i.a.createElement(a, e));
      return {
        content: s.a.renderToString(r),
        assets: `<style id="jss-server-side">${t.toString()}</style>`,
      };
    }
  },
]);
void 0 === mf && console.error("esm-webpack-plugin: nothing exported!");
const _mf$getResponseHeaders = mf.getResponseHeaders,
  _mf$serverRender = mf.serverRender;
export {
  _mf$getResponseHeaders as getResponseHeaders,
  _mf$serverRender as serverRender,
};
//# sourceMappingURL=server.mjs.map
