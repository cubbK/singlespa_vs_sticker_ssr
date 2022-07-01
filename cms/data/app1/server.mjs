import * as ___WEBPACK_EXTERNAL_MODULE__0__ from "react";
var __WEBPACK_EXTERNAL_MODULE__0__ = cloneWithEsModuleProperty(
  ___WEBPACK_EXTERNAL_MODULE__0__
);
import * as ___WEBPACK_EXTERNAL_MODULE__2__ from "react-dom/server.js";
var __WEBPACK_EXTERNAL_MODULE__2__ = cloneWithEsModuleProperty(
  ___WEBPACK_EXTERNAL_MODULE__2__
);
function cloneWithEsModuleProperty(e) {
  const t = Object.create(null);
  Object.defineProperty(t, "__esModule", {
    value: !0,
    enumerable: !1,
    configurable: !0
  });
  const r = Object.getOwnPropertyNames(e);
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    Object.defineProperty(t, i, {
      get: function() {
        return e[i];
      },
      enumerable: !0,
      configurable: !1
    });
  }
  if (Object.getOwnPropertySymbols) {
    const r = Object.getOwnPropertySymbols(e);
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      Object.defineProperty(t, i, {
        get: function() {
          return e[i];
        },
        enumerable: !1,
        configurable: !1
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
var mf = (function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
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
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 8))
  );
})([
  function(e, t) {
    e.exports = __WEBPACK_EXTERNAL_MODULE__0__;
  },
  function(e, t, r) {
    "use strict";
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    r.d(t, "a", function() {
      return n;
    });
  },
  function(e, t) {
    e.exports = __WEBPACK_EXTERNAL_MODULE__2__;
  },
  function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return i;
    });
    var n = r(1);
    function i(e, t) {
      if (e) {
        if ("string" == typeof e) return Object(n.a)(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? Object(n.a)(e, t)
            : void 0
        );
      }
    }
  },
  ,
  function(e, t, r) {
    e.exports = r(6)();
  },
  function(e, t, r) {
    "use strict";
    var n = r(7);
    function i() {}
    function o() {}
    (o.resetWarningCache = i),
      (e.exports = function() {
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
          resetWarningCache: i
        };
        return (r.PropTypes = r), r;
      });
  },
  function(e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "getResponseHeaders", function() {
        return lr;
      }),
      r.d(t, "serverRender", function() {
        return cr;
      });
    var n = r(0),
      i = r.n(n),
      o = r(2),
      s = r.n(o);
    function a() {
      return i.a.createElement("div", null, "App 1 ssr");
    }
    function u() {
      return (u =
        Object.assign ||
        function(e) {
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
    function f(e, t, r) {
      return t && c(e.prototype, t), r && c(e, r), e;
    }
    var d =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      h =
        "object" === ("undefined" == typeof window ? "undefined" : d(window)) &&
        "object" ===
          ("undefined" == typeof document ? "undefined" : d(document)) &&
        9 === document.nodeType;
    function p(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    function y(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function v(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i;
    }
    var g = {}.constructor;
    function m(e) {
      if (null == e || "object" != typeof e) return e;
      if (Array.isArray(e)) return e.map(m);
      if (e.constructor !== g) return e;
      var t = {};
      for (var r in e) t[r] = m(e[r]);
      return t;
    }
    function b(e, t, r) {
      void 0 === e && (e = "unnamed");
      var n = r.jss,
        i = m(t),
        o = n.plugins.onCreateRule(e, i, r);
      return o || (e[0], null);
    }
    var x = function(e, t) {
      for (var r = "", n = 0; n < e.length && "!important" !== e[n]; n++)
        r && (r += t), (r += e[n]);
      return r;
    };
    function P(e, t) {
      if ((void 0 === t && (t = !1), !Array.isArray(e))) return e;
      var r = "";
      if (Array.isArray(e[0]))
        for (var n = 0; n < e.length && "!important" !== e[n]; n++)
          r && (r += ", "), (r += x(e[n], " "));
      else r = x(e, ", ");
      return t || "!important" !== e[e.length - 1] || (r += " !important"), r;
    }
    function k(e, t) {
      for (var r = "", n = 0; n < t; n++) r += "  ";
      return r + e;
    }
    function S(e, t, r) {
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
                (n && (n += "\n"), (n += "" + k(l + ": " + P(c) + ";", o)));
            }
          }
        else
          for (var f in s) {
            var d = s[f];
            null != d &&
              (n && (n += "\n"), (n += "" + k(f + ": " + P(d) + ";", o)));
          }
      for (var h in t) {
        var p = t[h];
        null != p &&
          "fallbacks" !== h &&
          (n && (n += "\n"), (n += "" + k(h + ": " + P(p) + ";", o)));
      }
      return (n || r.allowEmpty) && e
        ? (n && (n = "\n" + n + "\n"), k(e + " {" + n, --o) + k("}", o))
        : n;
    }
    var w = /([[\].#*$><+~=|^:(),"'`\s])/g,
      R = "undefined" != typeof CSS && CSS.escape,
      _ = function(e) {
        return R ? R(e) : e.replace(w, "\\$1");
      },
      O = (function() {
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
          (e.prototype.prop = function(e, t, r) {
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
      j = (function(e) {
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
                ((i.id = u(y(y(i)), a)), (i.selectorText = "." + _(i.id))),
            i
          );
        }
        p(t, e);
        var r = t.prototype;
        return (
          (r.applyTo = function(e) {
            var t = this.renderer;
            if (t) {
              var r = this.toJSON();
              for (var n in r) t.setProperty(e, n, r[n]);
            }
            return this;
          }),
          (r.toJSON = function() {
            var e = {};
            for (var t in this.style) {
              var r = this.style[t];
              "object" != typeof r
                ? (e[t] = r)
                : Array.isArray(r) && (e[t] = P(r));
            }
            return e;
          }),
          (r.toString = function(e) {
            var t = this.options.sheet,
              r = !!t && t.options.link ? u({}, e, { allowEmpty: !0 }) : e;
            return S(this.selectorText, this.style, r);
          }),
          f(t, [
            {
              key: "selector",
              set: function(e) {
                if (e !== this.selectorText) {
                  this.selectorText = e;
                  var t = this.renderer,
                    r = this.renderable;
                  if (r && t) t.setSelector(r, e) || t.replaceRule(r, this);
                }
              },
              get: function() {
                return this.selectorText;
              }
            }
          ]),
          t
        );
      })(O),
      E = {
        onCreateRule: function(e, t, r) {
          return "@" === e[0] || (r.parent && "keyframes" === r.parent.type)
            ? null
            : new j(e, t, r);
        }
      },
      C = { indent: 1, children: !0 },
      A = /@([\w-]+)/,
      T = (function() {
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
          var n = e.match(A);
          for (var i in ((this.at = n ? n[1] : "unknown"),
          (this.options = r),
          (this.rules = new te(u({}, r, { parent: this }))),
          t))
            this.rules.add(i, t[i]);
          this.rules.process();
        }
        var t = e.prototype;
        return (
          (t.getRule = function(e) {
            return this.rules.get(e);
          }),
          (t.indexOf = function(e) {
            return this.rules.indexOf(e);
          }),
          (t.addRule = function(e, t, r) {
            var n = this.rules.add(e, t, r);
            return n ? (this.options.jss.plugins.onProcessRule(n), n) : null;
          }),
          (t.toString = function(e) {
            if (
              (void 0 === e && (e = C),
              null == e.indent && (e.indent = C.indent),
              null == e.children && (e.children = C.children),
              !1 === e.children)
            )
              return this.query + " {}";
            var t = this.rules.toString(e);
            return t ? this.query + " {\n" + t + "\n}" : "";
          }),
          e
        );
      })(),
      M = /@media|@supports\s+/,
      I = {
        onCreateRule: function(e, t, r) {
          return M.test(e) ? new T(e, t, r) : null;
        }
      },
      N = { indent: 1, children: !0 },
      W = /@keyframes\s+([\w-]+)/,
      L = (function() {
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
          var n = e.match(W);
          n && n[1] ? (this.name = n[1]) : (this.name = "noname"),
            (this.key = this.type + "-" + this.name),
            (this.options = r);
          var i = r.scoped,
            o = r.sheet,
            s = r.generateId;
          for (var a in ((this.id = !1 === i ? this.name : _(s(this, o))),
          (this.rules = new te(u({}, r, { parent: this }))),
          t))
            this.rules.add(a, t[a], u({}, r, { parent: this }));
          this.rules.process();
        }
        return (
          (e.prototype.toString = function(e) {
            if (
              (void 0 === e && (e = N),
              null == e.indent && (e.indent = N.indent),
              null == e.children && (e.children = N.children),
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
      U = /@keyframes\s+/,
      q = /\$([\w-]+)/g,
      z = function(e, t) {
        return "string" == typeof e
          ? e.replace(q, function(e, r) {
              return r in t ? t[r] : e;
            })
          : e;
      },
      V = function(e, t, r) {
        var n = e[t],
          i = z(n, r);
        i !== n && (e[t] = i);
      },
      B = {
        onCreateRule: function(e, t, r) {
          return "string" == typeof e && U.test(e) ? new L(e, t, r) : null;
        },
        onProcessStyle: function(e, t, r) {
          return "style" === t.type && r
            ? ("animation-name" in e && V(e, "animation-name", r.keyframes),
              "animation" in e && V(e, "animation", r.keyframes),
              e)
            : e;
        },
        onChangeValue: function(e, t, r) {
          var n = r.options.sheet;
          if (!n) return e;
          switch (t) {
            case "animation":
            case "animation-name":
              return z(e, n.keyframes);
            default:
              return e;
          }
        }
      },
      D = (function(e) {
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
          p(t, e),
          (t.prototype.toString = function(e) {
            var t = this.options.sheet,
              r = !!t && t.options.link ? u({}, e, { allowEmpty: !0 }) : e;
            return S(this.key, this.style, r);
          }),
          t
        );
      })(O),
      G = {
        onCreateRule: function(e, t, r) {
          return r.parent && "keyframes" === r.parent.type
            ? new D(e, t, r)
            : null;
        }
      },
      $ = (function() {
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
          (e.prototype.toString = function(e) {
            if (Array.isArray(this.style)) {
              for (var t = "", r = 0; r < this.style.length; r++)
                (t += S(this.at, this.style[r])),
                  this.style[r + 1] && (t += "\n");
              return t;
            }
            return S(this.at, this.style, e);
          }),
          e
        );
      })(),
      H = /@font-face/,
      K = {
        onCreateRule: function(e, t, r) {
          return H.test(e) ? new $(e, t, r) : null;
        }
      },
      X = (function() {
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
          (e.prototype.toString = function(e) {
            return S(this.key, this.style, e);
          }),
          e
        );
      })(),
      F = {
        onCreateRule: function(e, t, r) {
          return "@viewport" === e || "@-ms-viewport" === e
            ? new X(e, t, r)
            : null;
        }
      },
      J = (function() {
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
          (e.prototype.toString = function(e) {
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
      Y = { "@charset": !0, "@import": !0, "@namespace": !0 },
      Z = [
        E,
        I,
        B,
        G,
        K,
        F,
        {
          onCreateRule: function(e, t, r) {
            return e in Y ? new J(e, t, r) : null;
          }
        }
      ],
      Q = { process: !0 },
      ee = { force: !0, process: !0 },
      te = (function() {
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
          (t.add = function(e, t, r) {
            var n = this.options,
              i = n.parent,
              o = n.sheet,
              s = n.jss,
              a = n.Renderer,
              l = n.generateId,
              c = n.scoped,
              f = u(
                {
                  classes: this.classes,
                  parent: i,
                  sheet: o,
                  jss: s,
                  Renderer: a,
                  generateId: l,
                  scoped: c,
                  name: e,
                  keyframes: this.keyframes,
                  selector: void 0
                },
                r
              ),
              d = e;
            e in this.raw && (d = e + "-d" + this.counter++),
              (this.raw[d] = t),
              d in this.classes && (f.selector = "." + _(this.classes[d]));
            var h = b(d, t, f);
            if (!h) return null;
            this.register(h);
            var p = void 0 === f.index ? this.index.length : f.index;
            return this.index.splice(p, 0, h), h;
          }),
          (t.get = function(e) {
            return this.map[e];
          }),
          (t.remove = function(e) {
            this.unregister(e),
              delete this.raw[e.key],
              this.index.splice(this.index.indexOf(e), 1);
          }),
          (t.indexOf = function(e) {
            return this.index.indexOf(e);
          }),
          (t.process = function() {
            var e = this.options.jss.plugins;
            this.index.slice(0).forEach(e.onProcessRule, e);
          }),
          (t.register = function(e) {
            (this.map[e.key] = e),
              e instanceof j
                ? ((this.map[e.selector] = e),
                  e.id && (this.classes[e.key] = e.id))
                : e instanceof L &&
                  this.keyframes &&
                  (this.keyframes[e.name] = e.id);
          }),
          (t.unregister = function(e) {
            delete this.map[e.key],
              e instanceof j
                ? (delete this.map[e.selector], delete this.classes[e.key])
                : e instanceof L && delete this.keyframes[e.name];
          }),
          (t.update = function() {
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
          (t.updateOne = function(t, r, n) {
            void 0 === n && (n = Q);
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
                  c !== u[l] && a.prop(l, c, ee);
                }
                for (var f in u) {
                  var d = a.style[f],
                    h = u[f];
                  null == d && d !== h && a.prop(f, null, ee);
                }
              }
            }
          }),
          (t.toString = function(e) {
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
      re = (function() {
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
          (this.options = u({}, t, {
            sheet: this,
            parent: this,
            classes: this.classes,
            keyframes: this.keyframes
          })),
          t.Renderer && (this.renderer = new t.Renderer(this)),
          (this.rules = new te(this.options)),
          e))
            this.rules.add(r, e[r]);
          this.rules.process();
        }
        var t = e.prototype;
        return (
          (t.attach = function() {
            return (
              this.attached ||
                (this.renderer && this.renderer.attach(),
                (this.attached = !0),
                this.deployed || this.deploy()),
              this
            );
          }),
          (t.detach = function() {
            return this.attached
              ? (this.renderer && this.renderer.detach(),
                (this.attached = !1),
                this)
              : this;
          }),
          (t.addRule = function(e, t, r) {
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
          (t.insertRule = function(e) {
            this.renderer && this.renderer.insertRule(e);
          }),
          (t.addRules = function(e, t) {
            var r = [];
            for (var n in e) {
              var i = this.addRule(n, e[n], t);
              i && r.push(i);
            }
            return r;
          }),
          (t.getRule = function(e) {
            return this.rules.get(e);
          }),
          (t.deleteRule = function(e) {
            var t = "object" == typeof e ? e : this.rules.get(e);
            return (
              !!t &&
              (this.rules.remove(t),
              !(this.attached && t.renderable && this.renderer) ||
                this.renderer.deleteRule(t.renderable))
            );
          }),
          (t.indexOf = function(e) {
            return this.rules.indexOf(e);
          }),
          (t.deploy = function() {
            return (
              this.renderer && this.renderer.deploy(),
              (this.deployed = !0),
              this
            );
          }),
          (t.update = function() {
            var e;
            return (e = this.rules).update.apply(e, arguments), this;
          }),
          (t.updateOne = function(e, t, r) {
            return this.rules.updateOne(e, t, r), this;
          }),
          (t.toString = function(e) {
            return this.rules.toString(e);
          }),
          e
        );
      })(),
      ne = (function() {
        function e() {
          (this.plugins = { internal: [], external: [] }),
            (this.registry = void 0);
        }
        var t = e.prototype;
        return (
          (t.onCreateRule = function(e, t, r) {
            for (var n = 0; n < this.registry.onCreateRule.length; n++) {
              var i = this.registry.onCreateRule[n](e, t, r);
              if (i) return i;
            }
            return null;
          }),
          (t.onProcessRule = function(e) {
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
          (t.onProcessStyle = function(e, t, r) {
            for (var n = 0; n < this.registry.onProcessStyle.length; n++)
              t.style = this.registry.onProcessStyle[n](t.style, t, r);
          }),
          (t.onProcessSheet = function(e) {
            for (var t = 0; t < this.registry.onProcessSheet.length; t++)
              this.registry.onProcessSheet[t](e);
          }),
          (t.onUpdate = function(e, t, r, n) {
            for (var i = 0; i < this.registry.onUpdate.length; i++)
              this.registry.onUpdate[i](e, t, r, n);
          }),
          (t.onChangeValue = function(e, t, r) {
            for (var n = e, i = 0; i < this.registry.onChangeValue.length; i++)
              n = this.registry.onChangeValue[i](n, t, r);
            return n;
          }),
          (t.use = function(e, t) {
            void 0 === t && (t = { queue: "external" });
            var r = this.plugins[t.queue];
            -1 === r.indexOf(e) &&
              (r.push(e),
              (this.registry = []
                .concat(this.plugins.external, this.plugins.internal)
                .reduce(
                  function(e, t) {
                    for (var r in t) r in e && e[r].push(t[r]);
                    return e;
                  },
                  {
                    onCreateRule: [],
                    onProcessRule: [],
                    onProcessStyle: [],
                    onProcessSheet: [],
                    onChangeValue: [],
                    onUpdate: []
                  }
                )));
          }),
          e
        );
      })(),
      ie = (function() {
        function e() {
          this.registry = [];
        }
        var t = e.prototype;
        return (
          (t.add = function(e) {
            var t = this.registry,
              r = e.options.index;
            if (-1 === t.indexOf(e))
              if (0 === t.length || r >= this.index) t.push(e);
              else
                for (var n = 0; n < t.length; n++)
                  if (t[n].options.index > r) return void t.splice(n, 0, e);
          }),
          (t.reset = function() {
            this.registry = [];
          }),
          (t.remove = function(e) {
            var t = this.registry.indexOf(e);
            this.registry.splice(t, 1);
          }),
          (t.toString = function(e) {
            for (
              var t = void 0 === e ? {} : e,
                r = t.attached,
                n = v(t, ["attached"]),
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
          f(e, [
            {
              key: "index",
              get: function() {
                return 0 === this.registry.length
                  ? 0
                  : this.registry[this.registry.length - 1].options.index;
              }
            }
          ]),
          e
        );
      })(),
      oe = new ie(),
      se =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")(),
      ae = "2f1acc6c3a606b082e5eef5e54414ffb";
    null == se[ae] && (se[ae] = 0);
    var ue = se[ae]++,
      le = function(e) {
        void 0 === e && (e = {});
        var t = 0;
        return function(r, n) {
          t += 1;
          var i = "",
            o = "";
          return (
            n &&
              (n.options.classNamePrefix && (o = n.options.classNamePrefix),
              null != n.options.jss.id && (i = String(n.options.jss.id))),
            e.minify
              ? "" + (o || "c") + ue + i + t
              : o + r.key + "-" + ue + (i ? "-" + i : "") + "-" + t
          );
        };
      },
      ce = function(e) {
        var t;
        return function() {
          return t || (t = e()), t;
        };
      };
    function fe(e, t) {
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
          ((n = P(r, !0)), "!important" === r[r.length - 1])
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
    function he(e, t) {
      try {
        e.attributeStyleMap
          ? e.attributeStyleMap.delete(t)
          : e.style.removeProperty(t);
      } catch (e) {}
    }
    function pe(e, t) {
      return (e.selectorText = t), e.selectorText === t;
    }
    var ye = ce(function() {
      return document.querySelector("head");
    });
    function ve(e) {
      var t = oe.registry;
      if (t.length > 0) {
        var r = (function(e, t) {
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
            node: r.renderer.element
          };
        if (
          (r = (function(e, t) {
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
            node: r.renderer.element.nextSibling
          };
      }
      var n = e.insertionPoint;
      if (n && "string" == typeof n) {
        var i = (function(e) {
          for (var t = ye(), r = 0; r < t.childNodes.length; r++) {
            var n = t.childNodes[r];
            if (8 === n.nodeType && n.nodeValue.trim() === e) return n;
          }
          return null;
        })(n);
        if (i) return { parent: i.parentNode, node: i.nextSibling };
      }
      return !1;
    }
    var ge = ce(function() {
        var e = document.querySelector('meta[property="csp-nonce"]');
        return e ? e.getAttribute("content") : null;
      }),
      me = function(e, t, r) {
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
      be = (function() {
        function e(e) {
          (this.getPropertyValue = fe),
            (this.setProperty = de),
            (this.removeProperty = he),
            (this.setSelector = pe),
            (this.element = void 0),
            (this.sheet = void 0),
            (this.hasInsertedRules = !1),
            e && oe.add(e),
            (this.sheet = e);
          var t = this.sheet ? this.sheet.options : {},
            r = t.media,
            n = t.meta,
            i = t.element;
          (this.element =
            i ||
            (function() {
              var e = document.createElement("style");
              return (e.textContent = "\n"), e;
            })()),
            this.element.setAttribute("data-jss", ""),
            r && this.element.setAttribute("media", r),
            n && this.element.setAttribute("data-meta", n);
          var o = ge();
          o && this.element.setAttribute("nonce", o);
        }
        var t = e.prototype;
        return (
          (t.attach = function() {
            if (!this.element.parentNode && this.sheet) {
              !(function(e, t) {
                var r = t.insertionPoint,
                  n = ve(t);
                if (!1 !== n && n.parent) n.parent.insertBefore(e, n.node);
                else if (r && "number" == typeof r.nodeType) {
                  var i = r,
                    o = i.parentNode;
                  o && o.insertBefore(e, i.nextSibling);
                } else ye().appendChild(e);
              })(this.element, this.sheet.options);
              var e = Boolean(this.sheet && this.sheet.deployed);
              this.hasInsertedRules &&
                e &&
                ((this.hasInsertedRules = !1), this.deploy());
            }
          }),
          (t.detach = function() {
            var e = this.element.parentNode;
            e && e.removeChild(this.element);
          }),
          (t.deploy = function() {
            var e = this.sheet;
            e &&
              (e.options.link
                ? this.insertRules(e.rules)
                : (this.element.textContent = "\n" + e.toString() + "\n"));
          }),
          (t.insertRules = function(e, t) {
            for (var r = 0; r < e.index.length; r++)
              this.insertRule(e.index[r], r, t);
          }),
          (t.insertRule = function(e, t, r) {
            if ((void 0 === r && (r = this.element.sheet), e.rules)) {
              var n = e,
                i = r;
              return (
                (("conditional" !== e.type && "keyframes" !== e.type) ||
                  !1 !== (i = me(r, n.toString({ children: !1 }), t))) &&
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
            var s = me(r, o, t);
            return (
              !1 !== s && ((this.hasInsertedRules = !0), (e.renderable = s), s)
            );
          }),
          (t.deleteRule = function(e) {
            var t = this.element.sheet,
              r = this.indexOf(e);
            return -1 !== r && (t.deleteRule(r), !0);
          }),
          (t.indexOf = function(e) {
            for (var t = this.element.sheet.cssRules, r = 0; r < t.length; r++)
              if (e === t[r]) return r;
            return -1;
          }),
          (t.replaceRule = function(e, t) {
            var r = this.indexOf(e);
            return (
              -1 !== r &&
              (this.element.sheet.deleteRule(r), this.insertRule(t, r))
            );
          }),
          (t.getRules = function() {
            return this.element.sheet.cssRules;
          }),
          e
        );
      })(),
      xe = 0,
      Pe = (function() {
        function e(e) {
          (this.id = xe++),
            (this.version = "10.4.0"),
            (this.plugins = new ne()),
            (this.options = {
              id: { minify: !1 },
              createGenerateId: le,
              Renderer: h ? be : null,
              plugins: []
            }),
            (this.generateId = le({ minify: !1 }));
          for (var t = 0; t < Z.length; t++)
            this.plugins.use(Z[t], { queue: "internal" });
          this.setup(e);
        }
        var t = e.prototype;
        return (
          (t.setup = function(e) {
            return (
              void 0 === e && (e = {}),
              e.createGenerateId &&
                (this.options.createGenerateId = e.createGenerateId),
              e.id && (this.options.id = u({}, this.options.id, e.id)),
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
          (t.createStyleSheet = function(e, t) {
            void 0 === t && (t = {});
            var r = t.index;
            "number" != typeof r && (r = 0 === oe.index ? 0 : oe.index + 1);
            var n = new re(
              e,
              u({}, t, {
                jss: this,
                generateId: t.generateId || this.generateId,
                insertionPoint: this.options.insertionPoint,
                Renderer: this.options.Renderer,
                index: r
              })
            );
            return this.plugins.onProcessSheet(n), n;
          }),
          (t.removeStyleSheet = function(e) {
            return e.detach(), oe.remove(e), this;
          }),
          (t.createRule = function(e, t, r) {
            if (
              (void 0 === t && (t = {}),
              void 0 === r && (r = {}),
              "object" == typeof e)
            )
              return this.createRule(void 0, e, t);
            var n = u({}, r, {
              name: e,
              jss: this,
              Renderer: this.options.Renderer
            });
            n.generateId || (n.generateId = this.generateId),
              n.classes || (n.classes = {}),
              n.keyframes || (n.keyframes = {});
            var i = b(e, t, n);
            return i && this.plugins.onProcessRule(i), i;
          }),
          (t.use = function() {
            for (
              var e = this, t = arguments.length, r = new Array(t), n = 0;
              n < t;
              n++
            )
              r[n] = arguments[n];
            return (
              r.forEach(function(t) {
                e.plugins.use(t);
              }),
              this
            );
          }),
          e
        );
      })();
    var ke = "undefined" != typeof CSS && CSS && "number" in CSS,
      Se = function(e) {
        return new Pe(e);
      };
    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */ Se();
    r(5);
    var we =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("mui.nested")
          : "__THEME_NESTED__",
      Re = [
        "checked",
        "disabled",
        "error",
        "focused",
        "focusVisible",
        "required",
        "expanded",
        "selected"
      ];
    function _e() {
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
        l = function() {
          return (u += 1);
        };
      return function(e, t) {
        var n = t.options.name;
        if (n && 0 === n.indexOf("Mui") && !t.options.link && !r) {
          if (-1 !== Re.indexOf(e.key)) return "Mui-".concat(e.key);
          var o = ""
            .concat(a)
            .concat(n, "-")
            .concat(e.key);
          return t.options.theme[we] && "" === s
            ? "".concat(o, "-").concat(l())
            : o;
        }
        return ""
          .concat(a)
          .concat(i)
          .concat(l());
      };
    }
    var Oe = Date.now(),
      je = "fnValues" + Oe,
      Ee = "fnStyle" + ++Oe;
    var Ce = function() {
        return {
          onCreateRule: function(e, t, r) {
            if ("function" != typeof t) return null;
            var n = b(e, {}, r);
            return (n[Ee] = t), n;
          },
          onProcessStyle: function(e, t) {
            if (je in t || Ee in t) return e;
            var r = {};
            for (var n in e) {
              var i = e[n];
              "function" == typeof i && (delete e[n], (r[n] = i));
            }
            return (t[je] = r), e;
          },
          onUpdate: function(e, t, r, n) {
            var i = t,
              o = i[Ee];
            o && (i.style = o(e) || {});
            var s = i[je];
            if (s) for (var a in s) i.prop(a, s[a](e), n);
          }
        };
      },
      Ae = "@global",
      Te = (function() {
        function e(e, t, r) {
          for (var n in ((this.type = "global"),
          (this.at = Ae),
          (this.rules = void 0),
          (this.options = void 0),
          (this.key = void 0),
          (this.isProcessed = !1),
          (this.key = e),
          (this.options = r),
          (this.rules = new te(u({}, r, { parent: this }))),
          t))
            this.rules.add(n, t[n]);
          this.rules.process();
        }
        var t = e.prototype;
        return (
          (t.getRule = function(e) {
            return this.rules.get(e);
          }),
          (t.addRule = function(e, t, r) {
            var n = this.rules.add(e, t, r);
            return this.options.jss.plugins.onProcessRule(n), n;
          }),
          (t.indexOf = function(e) {
            return this.rules.indexOf(e);
          }),
          (t.toString = function() {
            return this.rules.toString();
          }),
          e
        );
      })(),
      Me = (function() {
        function e(e, t, r) {
          (this.type = "global"),
            (this.at = Ae),
            (this.options = void 0),
            (this.rule = void 0),
            (this.isProcessed = !1),
            (this.key = void 0),
            (this.key = e),
            (this.options = r);
          var n = e.substr("@global ".length);
          this.rule = r.jss.createRule(n, t, u({}, r, { parent: this }));
        }
        return (
          (e.prototype.toString = function(e) {
            return this.rule ? this.rule.toString(e) : "";
          }),
          e
        );
      })(),
      Ie = /\s*,\s*/g;
    function Ne(e, t) {
      for (var r = e.split(Ie), n = "", i = 0; i < r.length; i++)
        (n += t + " " + r[i].trim()), r[i + 1] && (n += ", ");
      return n;
    }
    var We = function() {
        return {
          onCreateRule: function(e, t, r) {
            if (!e) return null;
            if (e === Ae) return new Te(e, t, r);
            if ("@" === e[0] && "@global " === e.substr(0, "@global ".length))
              return new Me(e, t, r);
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
          onProcessRule: function(e) {
            "style" === e.type &&
              ((function(e) {
                var t = e.options,
                  r = e.style,
                  n = r ? r[Ae] : null;
                if (n) {
                  for (var i in n)
                    t.sheet.addRule(
                      i,
                      n[i],
                      u({}, t, { selector: Ne(i, e.selector) })
                    );
                  delete r[Ae];
                }
              })(e),
              (function(e) {
                var t = e.options,
                  r = e.style;
                for (var n in r)
                  if ("@" === n[0] && n.substr(0, Ae.length) === Ae) {
                    var i = Ne(n.substr(Ae.length), e.selector);
                    t.sheet.addRule(i, r[n], u({}, t, { selector: i })),
                      delete r[n];
                  }
              })(e));
          }
        };
      },
      Le = /\s*,\s*/g,
      Ue = /&/g,
      qe = /\$([\w-]+)/g;
    var ze = function() {
        function e(e, t) {
          return function(r, n) {
            var i = e.getRule(n) || (t && t.getRule(n));
            return i ? (i = i).selector : n;
          };
        }
        function t(e, t) {
          for (
            var r = t.split(Le), n = e.split(Le), i = "", o = 0;
            o < r.length;
            o++
          )
            for (var s = r[o], a = 0; a < n.length; a++) {
              var u = n[a];
              i && (i += ", "),
                (i += -1 !== u.indexOf("&") ? u.replace(Ue, s) : s + " " + u);
            }
          return i;
        }
        function r(e, t, r) {
          if (r) return u({}, r, { index: r.index + 1 });
          var n = e.options.nestingLevel;
          n = void 0 === n ? 1 : n + 1;
          var i = u({}, e.options, {
            nestingLevel: n,
            index: t.indexOf(e) + 1
          });
          return delete i.name, i;
        }
        return {
          onProcessStyle: function(n, i, o) {
            if ("style" !== i.type) return n;
            var s,
              a,
              l = i,
              c = l.options.parent;
            for (var f in n) {
              var d = -1 !== f.indexOf("&"),
                h = "@" === f[0];
              if (d || h) {
                if (((s = r(l, c, s)), d)) {
                  var p = t(f, l.selector);
                  a || (a = e(c, o)),
                    (p = p.replace(qe, a)),
                    c.addRule(p, n[f], u({}, s, { selector: p }));
                } else
                  h &&
                    c
                      .addRule(f, {}, s)
                      .addRule(l.key, n[f], { selector: l.selector });
                delete n[f];
              }
            }
            return n;
          }
        };
      },
      Ve = /[A-Z]/g,
      Be = /^ms-/,
      De = {};
    function Ge(e) {
      return "-" + e.toLowerCase();
    }
    var $e = function(e) {
      if (De.hasOwnProperty(e)) return De[e];
      var t = e.replace(Ve, Ge);
      return (De[e] = Be.test(t) ? "-" + t : t);
    };
    function He(e) {
      var t = {};
      for (var r in e) {
        t[0 === r.indexOf("--") ? r : $e(r)] = e[r];
      }
      return (
        e.fallbacks &&
          (Array.isArray(e.fallbacks)
            ? (t.fallbacks = e.fallbacks.map(He))
            : (t.fallbacks = He(e.fallbacks))),
        t
      );
    }
    var Ke = function() {
        return {
          onProcessStyle: function(e) {
            if (Array.isArray(e)) {
              for (var t = 0; t < e.length; t++) e[t] = He(e[t]);
              return e;
            }
            return He(e);
          },
          onChangeValue: function(e, t, r) {
            if (0 === t.indexOf("--")) return e;
            var n = $e(t);
            return t === n ? e : (r.prop(n, e), null);
          }
        };
      },
      Xe = ke && CSS ? CSS.px : "px",
      Fe = ke && CSS ? CSS.ms : "ms",
      Je = ke && CSS ? CSS.percent : "%";
    function Ye(e) {
      var t = /(-[a-z])/g,
        r = function(e) {
          return e[1].toUpperCase();
        },
        n = {};
      for (var i in e) (n[i] = e[i]), (n[i.replace(t, r)] = e[i]);
      return n;
    }
    var Ze = Ye({
      "animation-delay": Fe,
      "animation-duration": Fe,
      "background-position": Xe,
      "background-position-x": Xe,
      "background-position-y": Xe,
      "background-size": Xe,
      border: Xe,
      "border-bottom": Xe,
      "border-bottom-left-radius": Xe,
      "border-bottom-right-radius": Xe,
      "border-bottom-width": Xe,
      "border-left": Xe,
      "border-left-width": Xe,
      "border-radius": Xe,
      "border-right": Xe,
      "border-right-width": Xe,
      "border-top": Xe,
      "border-top-left-radius": Xe,
      "border-top-right-radius": Xe,
      "border-top-width": Xe,
      "border-width": Xe,
      margin: Xe,
      "margin-bottom": Xe,
      "margin-left": Xe,
      "margin-right": Xe,
      "margin-top": Xe,
      padding: Xe,
      "padding-bottom": Xe,
      "padding-left": Xe,
      "padding-right": Xe,
      "padding-top": Xe,
      "mask-position-x": Xe,
      "mask-position-y": Xe,
      "mask-size": Xe,
      height: Xe,
      width: Xe,
      "min-height": Xe,
      "max-height": Xe,
      "min-width": Xe,
      "max-width": Xe,
      bottom: Xe,
      left: Xe,
      top: Xe,
      right: Xe,
      "box-shadow": Xe,
      "text-shadow": Xe,
      "column-gap": Xe,
      "column-rule": Xe,
      "column-rule-width": Xe,
      "column-width": Xe,
      "font-size": Xe,
      "font-size-delta": Xe,
      "letter-spacing": Xe,
      "text-indent": Xe,
      "text-stroke": Xe,
      "text-stroke-width": Xe,
      "word-spacing": Xe,
      motion: Xe,
      "motion-offset": Xe,
      outline: Xe,
      "outline-offset": Xe,
      "outline-width": Xe,
      perspective: Xe,
      "perspective-origin-x": Je,
      "perspective-origin-y": Je,
      "transform-origin": Je,
      "transform-origin-x": Je,
      "transform-origin-y": Je,
      "transform-origin-z": Je,
      "transition-delay": Fe,
      "transition-duration": Fe,
      "vertical-align": Xe,
      "flex-basis": Xe,
      "shape-margin": Xe,
      size: Xe,
      grid: Xe,
      "grid-gap": Xe,
      "grid-row-gap": Xe,
      "grid-column-gap": Xe,
      "grid-template-rows": Xe,
      "grid-template-columns": Xe,
      "grid-auto-rows": Xe,
      "grid-auto-columns": Xe,
      "box-shadow-x": Xe,
      "box-shadow-y": Xe,
      "box-shadow-blur": Xe,
      "box-shadow-spread": Xe,
      "font-line-height": Xe,
      "text-shadow-x": Xe,
      "text-shadow-y": Xe,
      "text-shadow-blur": Xe
    });
    function Qe(e, t, r) {
      if (!t) return t;
      if (Array.isArray(t))
        for (var n = 0; n < t.length; n++) t[n] = Qe(e, t[n], r);
      else if ("object" == typeof t)
        if ("fallbacks" === e) for (var i in t) t[i] = Qe(i, t[i], r);
        else for (var o in t) t[o] = Qe(e + "-" + o, t[o], r);
      else if ("number" == typeof t) {
        var s = r[e] || Ze[e];
        return s
          ? "function" == typeof s
            ? s(t).toString()
            : "" + t + s
          : t.toString();
      }
      return t;
    }
    var et = function(e) {
        void 0 === e && (e = {});
        var t = Ye(e);
        return {
          onProcessStyle: function(e, r) {
            if ("style" !== r.type) return e;
            for (var n in e) e[n] = Qe(n, e[n], t);
            return e;
          },
          onChangeValue: function(e, r) {
            return Qe(r, e, t);
          }
        };
      },
      tt = r(1);
    var rt = r(3);
    function nt(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) return Object(tt.a)(e);
        })(e) ||
        (function(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        Object(rt.a)(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var it = "",
      ot = "",
      st = "",
      at = "",
      ut = h && "ontouchstart" in document.documentElement;
    if (h) {
      var lt = { Moz: "-moz-", ms: "-ms-", O: "-o-", Webkit: "-webkit-" },
        ct = document.createElement("p").style;
      for (var ft in lt)
        if (ft + "Transform" in ct) {
          (it = ft), (ot = lt[ft]);
          break;
        }
      "Webkit" === it &&
        "msHyphens" in ct &&
        ((it = "ms"), (ot = lt.ms), (at = "edge")),
        "Webkit" === it && "-apple-trailing-word" in ct && (st = "apple");
    }
    var dt = it,
      ht = ot,
      pt = st,
      yt = at,
      vt = ut;
    var gt = {
        noPrefill: ["appearance"],
        supportedProperty: function(e) {
          return "appearance" === e && ("ms" === dt ? "-webkit-" + e : ht + e);
        }
      },
      mt = {
        noPrefill: ["color-adjust"],
        supportedProperty: function(e) {
          return (
            "color-adjust" === e && ("Webkit" === dt ? ht + "print-" + e : e)
          );
        }
      },
      bt = /[-\s]+(.)?/g;
    function xt(e, t) {
      return t ? t.toUpperCase() : "";
    }
    function Pt(e) {
      return e.replace(bt, xt);
    }
    function kt(e) {
      return Pt("-" + e);
    }
    var St,
      wt = {
        noPrefill: ["mask"],
        supportedProperty: function(e, t) {
          if (!/^mask/.test(e)) return !1;
          if ("Webkit" === dt) {
            if (Pt("mask-image") in t) return e;
            if (dt + kt("mask-image") in t) return ht + e;
          }
          return e;
        }
      },
      Rt = {
        noPrefill: ["text-orientation"],
        supportedProperty: function(e) {
          return (
            "text-orientation" === e && ("apple" !== pt || vt ? e : ht + e)
          );
        }
      },
      _t = {
        noPrefill: ["transform"],
        supportedProperty: function(e, t, r) {
          return "transform" === e && (r.transform ? e : ht + e);
        }
      },
      Ot = {
        noPrefill: ["transition"],
        supportedProperty: function(e, t, r) {
          return "transition" === e && (r.transition ? e : ht + e);
        }
      },
      jt = {
        noPrefill: ["writing-mode"],
        supportedProperty: function(e) {
          return (
            "writing-mode" === e &&
            ("Webkit" === dt || ("ms" === dt && "edge" !== yt) ? ht + e : e)
          );
        }
      },
      Et = {
        noPrefill: ["user-select"],
        supportedProperty: function(e) {
          return (
            "user-select" === e &&
            ("Moz" === dt || "ms" === dt || "apple" === pt ? ht + e : e)
          );
        }
      },
      Ct = {
        supportedProperty: function(e, t) {
          return (
            !!/^break-/.test(e) &&
            ("Webkit" === dt
              ? "WebkitColumn" + kt(e) in t && ht + "column-" + e
              : "Moz" === dt && "page" + kt(e) in t && "page-" + e)
          );
        }
      },
      At = {
        supportedProperty: function(e, t) {
          if (!/^(border|margin|padding)-inline/.test(e)) return !1;
          if ("Moz" === dt) return e;
          var r = e.replace("-inline", "");
          return dt + kt(r) in t && ht + r;
        }
      },
      Tt = {
        supportedProperty: function(e, t) {
          return Pt(e) in t && e;
        }
      },
      Mt = {
        supportedProperty: function(e, t) {
          var r = kt(e);
          return "-" === e[0] || ("-" === e[0] && "-" === e[1])
            ? e
            : dt + r in t
            ? ht + e
            : "Webkit" !== dt && "Webkit" + r in t && "-webkit-" + e;
        }
      },
      It = {
        supportedProperty: function(e) {
          return (
            "scroll-snap" === e.substring(0, 11) &&
            ("ms" === dt ? "" + ht + e : e)
          );
        }
      },
      Nt = {
        supportedProperty: function(e) {
          return (
            "overscroll-behavior" === e &&
            ("ms" === dt ? ht + "scroll-chaining" : e)
          );
        }
      },
      Wt = {
        "flex-grow": "flex-positive",
        "flex-shrink": "flex-negative",
        "flex-basis": "flex-preferred-size",
        "justify-content": "flex-pack",
        order: "flex-order",
        "align-items": "flex-align",
        "align-content": "flex-line-pack"
      },
      Lt = {
        supportedProperty: function(e, t) {
          var r = Wt[e];
          return !!r && dt + kt(r) in t && ht + r;
        }
      },
      Ut = {
        flex: "box-flex",
        "flex-grow": "box-flex",
        "flex-direction": ["box-orient", "box-direction"],
        order: "box-ordinal-group",
        "align-items": "box-align",
        "flex-flow": ["box-orient", "box-direction"],
        "justify-content": "box-pack"
      },
      qt = Object.keys(Ut),
      zt = function(e) {
        return ht + e;
      },
      Vt = [
        gt,
        mt,
        wt,
        Rt,
        _t,
        Ot,
        jt,
        Et,
        Ct,
        At,
        Tt,
        Mt,
        It,
        Nt,
        Lt,
        {
          supportedProperty: function(e, t, r) {
            var n = r.multiple;
            if (qt.indexOf(e) > -1) {
              var i = Ut[e];
              if (!Array.isArray(i)) return dt + kt(i) in t && ht + i;
              if (!n) return !1;
              for (var o = 0; o < i.length; o++)
                if (!(dt + kt(i[0]) in t)) return !1;
              return i.map(zt);
            }
            return !1;
          }
        }
      ],
      Bt = Vt.filter(function(e) {
        return e.supportedProperty;
      }).map(function(e) {
        return e.supportedProperty;
      }),
      Dt = Vt.filter(function(e) {
        return e.noPrefill;
      }).reduce(function(e, t) {
        return e.push.apply(e, nt(t.noPrefill)), e;
      }, []),
      Gt = {};
    if (h) {
      St = document.createElement("p");
      var $t = window.getComputedStyle(document.documentElement, "");
      for (var Ht in $t) isNaN(Ht) || (Gt[$t[Ht]] = $t[Ht]);
      Dt.forEach(function(e) {
        return delete Gt[e];
      });
    }
    function Kt(e, t) {
      if ((void 0 === t && (t = {}), !St)) return e;
      if (null != Gt[e]) return Gt[e];
      ("transition" !== e && "transform" !== e) || (t[e] = e in St.style);
      for (
        var r = 0;
        r < Bt.length && ((Gt[e] = Bt[r](e, St.style, t)), !Gt[e]);
        r++
      );
      try {
        St.style[e] = "";
      } catch (e) {
        return !1;
      }
      return Gt[e];
    }
    var Xt,
      Ft = {},
      Jt = {
        transition: 1,
        "transition-property": 1,
        "-webkit-transition": 1,
        "-webkit-transition-property": 1
      },
      Yt = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    function Zt(e, t, r) {
      if ("var" === t) return "var";
      if ("all" === t) return "all";
      if ("all" === r) return ", all";
      var n = t ? Kt(t) : ", " + Kt(r);
      return n || t || r;
    }
    function Qt(e, t) {
      var r = t;
      if (!Xt || "content" === e) return t;
      if ("string" != typeof r || !isNaN(parseInt(r, 10))) return r;
      var n = e + r;
      if (null != Ft[n]) return Ft[n];
      try {
        Xt.style[e] = r;
      } catch (e) {
        return (Ft[n] = !1), !1;
      }
      if (Jt[e]) r = r.replace(Yt, Zt);
      else if (
        "" === Xt.style[e] &&
        ("-ms-flex" === (r = ht + r) && (Xt.style[e] = "-ms-flexbox"),
        (Xt.style[e] = r),
        "" === Xt.style[e])
      )
        return (Ft[n] = !1), !1;
      return (Xt.style[e] = ""), (Ft[n] = r), Ft[n];
    }
    h && (Xt = document.createElement("p"));
    var er = function() {
      function e(t) {
        for (var r in t) {
          var n = t[r];
          if ("fallbacks" === r && Array.isArray(n)) t[r] = n.map(e);
          else {
            var i = !1,
              o = Kt(r);
            o && o !== r && (i = !0);
            var s = !1,
              a = Qt(o, P(n));
            a && a !== n && (s = !0),
              (i || s) && (i && delete t[r], (t[o || r] = a || n));
          }
        }
        return t;
      }
      return {
        onProcessRule: function(e) {
          if ("keyframes" === e.type) {
            var t = e;
            t.at =
              "-" === (r = t.at)[1] || "ms" === dt
                ? r
                : "@" + ht + "keyframes" + r.substr(10);
          }
          var r;
        },
        onProcessStyle: function(t, r) {
          return "style" !== r.type ? t : e(t);
        },
        onChangeValue: function(e, t) {
          return Qt(t, P(e)) || e;
        }
      };
    };
    var tr = function() {
      var e = function(e, t) {
        return e.length === t.length ? (e > t ? 1 : -1) : e.length - t.length;
      };
      return {
        onProcessStyle: function(t, r) {
          if ("style" !== r.type) return t;
          for (var n = {}, i = Object.keys(t).sort(e), o = 0; o < i.length; o++)
            n[i[o]] = t[i[o]];
          return n;
        }
      };
    };
    function rr() {
      return {
        plugins: [
          Ce(),
          We(),
          ze(),
          Ke(),
          et(),
          "undefined" == typeof window ? null : er(),
          tr()
        ]
      };
    }
    var nr,
      ir = Se(rr()),
      or = {
        disableGeneration: !1,
        generateClassName: _e(),
        jss: ir,
        sheetsCache: null,
        sheetsManager: new Map(),
        sheetsRegistry: null
      },
      sr = i.a.createContext(or);
    function ar(e) {
      var t = e.children,
        r = e.injectFirst,
        n = void 0 !== r && r,
        o = e.disableGeneration,
        s = void 0 !== o && o,
        a = (function(e, t) {
          if (null == e) return {};
          var r,
            n,
            i = v(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]),
                t.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]));
          }
          return i;
        })(e, ["children", "injectFirst", "disableGeneration"]),
        l = u(u({}, i.a.useContext(sr)), {}, { disableGeneration: s }, a);
      if (!l.jss.options.insertionPoint && n && "undefined" != typeof window) {
        if (!nr) {
          var c = document.head;
          (nr = document.createComment("mui-inject-first")),
            c.insertBefore(nr, c.firstChild);
        }
        l.jss = Se({ plugins: rr().plugins, insertionPoint: nr });
      }
      return i.a.createElement(sr.Provider, { value: l }, t);
    }
    var ur = (function() {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(this, e), (this.options = t);
      }
      return (
        f(e, [
          {
            key: "collect",
            value: function(e) {
              var t = new Map();
              this.sheetsRegistry = new ie();
              var r = _e();
              return i.a.createElement(
                ar,
                u(
                  {
                    sheetsManager: t,
                    serverGenerateClassName: r,
                    sheetsRegistry: this.sheetsRegistry
                  },
                  this.options
                ),
                e
              );
            }
          },
          {
            key: "toString",
            value: function() {
              return this.sheetsRegistry ? this.sheetsRegistry.toString() : "";
            }
          },
          {
            key: "getStyleElement",
            value: function(e) {
              return i.a.createElement(
                "style",
                u(
                  {
                    id: "jss-server-side",
                    key: "jss-server-side",
                    dangerouslySetInnerHTML: { __html: this.toString() }
                  },
                  e
                )
              );
            }
          }
        ]),
        e
      );
    })();
    const lr = e => ({ "x-pokemons": 1 });
    async function cr(e) {
      const t = new ur({}),
        r = t.collect(i.a.createElement(a, null));
      return {
        content: s.a.renderToString(r),
        assets: `<style id="jss-server-side-pokemons">${t.toString()}</style>`
      };
    }
  }
]);
void 0 === mf && console.error("esm-webpack-plugin: nothing exported!");
const _mf$getResponseHeaders = mf.getResponseHeaders,
  _mf$serverRender = mf.serverRender;
export {
  _mf$getResponseHeaders as getResponseHeaders,
  _mf$serverRender as serverRender
};
//# sourceMappingURL=server.mjs.map
