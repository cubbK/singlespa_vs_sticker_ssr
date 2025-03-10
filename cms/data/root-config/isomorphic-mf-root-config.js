System.register(["single-spa"], function(e) {
  var t;
  return {
    setters: [
      function(e) {
        t = e;
      }
    ],
    execute: function() {
      e(
        (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 1))
          );
        })([
          function(e, n) {
            e.exports = t;
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
              o = n.n(r);
            function a(e) {
              return (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
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
                    })(e);
            }
            function i(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = n),
                e
              );
            }
            function c(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function u(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? c(Object(n), !0).forEach(function(t) {
                      i(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : c(Object(n)).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function s(e) {
              return (
                (function(e) {
                  if (Array.isArray(e)) return p(e);
                })(e) ||
                (function(e) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  )
                    return Array.from(e);
                })(e) ||
                l(e) ||
                (function() {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function l(e, t) {
              if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? p(e, t)
                    : void 0
                );
              }
            }
            function p(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            var d = "undefined" != typeof window;
            function f(e, t) {
              if ("object" !== a(t) || Array.isArray(t) || null === t)
                throw Error(
                  "Invalid "
                    .concat(e, ": received ")
                    .concat(
                      Array.isArray(t) ? "array" : t,
                      " but expected a plain object"
                    )
                );
            }
            function v(e, t, n, r) {
              if (!r) {
                var o = Object.keys(t),
                  a = [];
                o.forEach(function(e) {
                  n.indexOf(e) < 0 && a.push(e);
                }),
                  a.length > 0 &&
                    console.warn(
                      Error(
                        "Invalid "
                          .concat(e, ": received invalid properties '")
                          .concat(a.join(", "), "', but valid properties are ")
                          .concat(n.join(", "))
                      )
                    );
              }
            }
            function m(e, t) {
              var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              if ("string" != typeof t || (n && "" === t.trim()))
                throw Error(
                  "Invalid "
                    .concat(e, ": received '")
                    .concat(t, "', but expected a")
                    .concat(n ? " non-blank" : "", " string")
                );
            }
            function h(e, t, n) {
              if (
                !Array.isArray(t) &&
                ("object" !== a(a(t)) || "number" !== t.length)
              )
                throw Error(
                  "Invalid "
                    .concat(e, ": received '")
                    .concat(t, "', but expected an array")
                );
              for (
                var r = arguments.length,
                  o = new Array(r > 3 ? r - 3 : 0),
                  i = 3;
                i < r;
                i++
              )
                o[i - 3] = arguments[i];
              for (var c = 0; c < t.length; c++)
                n.apply(
                  void 0,
                  [t[c], "".concat(e, "[").concat(c, "]")].concat(o)
                );
            }
            function y(e, t) {
              for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
              return null;
            }
            var b = o.a ? o.a.pathToActiveWhen : r.pathToActiveWhen,
              g = "undefined" != typeof Symbol ? Symbol() : "@";
            function w(e, t) {
              if (d) return e.getAttribute(t);
              var n = y(e.attrs, function(e) {
                return e.name === t.toLowerCase();
              });
              return n ? n.value : null;
            }
            function E(e, t) {
              if ("application" === e.nodeName.toLowerCase()) {
                if (e.childNodes.length > 0)
                  throw Error(
                    "<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed"
                  );
                var n = { type: "application", name: w(e, "name") },
                  r = w(e, "loader");
                if (r)
                  if (t.loaders && t.loaders.hasOwnProperty(r))
                    n.loader = t.loaders[r];
                  else if (d)
                    throw Error(
                      "Application loader '".concat(
                        r,
                        "' was not defined in the htmlLayoutData"
                      )
                    );
                var o = w(e, "error");
                if (o)
                  if (t.errors && t.errors.hasOwnProperty(o))
                    n.error = t.errors[o];
                  else if (d)
                    throw Error(
                      "Application error handler '".concat(
                        r,
                        "' was not defined in the htmlLayoutData"
                      )
                    );
                return O(e, n, t), [n];
              }
              if ("route" === e.nodeName.toLowerCase()) {
                var a = { type: "route", routes: [] },
                  i = w(e, "path");
                i && (a.path = i),
                  (function(e, t) {
                    return d
                      ? e.hasAttribute(t)
                      : e.attrs.some(function(e) {
                          return e.name === t;
                        });
                  })(e, "default") && (a.default = !0),
                  O(e, a, t);
                for (var c = 0; c < e.childNodes.length; c++) {
                  var u;
                  (u = a.routes).push.apply(u, s(E(e.childNodes[c], t)));
                }
                return [a];
              }
              if ("undefined" != typeof Node && e instanceof Node) {
                if (
                  e.nodeType === Node.TEXT_NODE &&
                  "" === e.textContent.trim()
                )
                  return [];
                if (e.childNodes && e.childNodes.length > 0) {
                  e.routes = [];
                  for (var l = 0; l < e.childNodes.length; l++) {
                    var p;
                    (p = e.routes).push.apply(p, s(E(e.childNodes[l], t)));
                  }
                }
                return [e];
              }
              if (e.childNodes) {
                for (
                  var f = {
                      type: e.nodeName.toLowerCase(),
                      routes: [],
                      attrs: e.attrs
                    },
                    v = 0;
                  v < e.childNodes.length;
                  v++
                ) {
                  var m;
                  (m = f.routes).push.apply(m, s(E(e.childNodes[v], t)));
                }
                return [f];
              }
              return "#comment" === e.nodeName
                ? [{ type: "#comment", value: e.data }]
                : "#text" === e.nodeName
                ? [{ type: "#text", value: e.value }]
                : void 0;
            }
            function O(e, t, n) {
              for (
                var r = (w(e, "props") || "").split(","), o = 0;
                o < r.length;
                o++
              ) {
                var a = r[o].trim();
                if (0 !== a.length)
                  if (
                    (t.props || (t.props = {}),
                    n.props && n.props.hasOwnProperty(a))
                  )
                    t.props[a] = n.props[a];
                  else {
                    if (d)
                      throw Error(
                        "Prop '".concat(
                          a,
                          "' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"
                        )
                      );
                    t.props[a] = g;
                  }
              }
            }
            function N(e) {
              return {
                bootstrap: function() {
                  return Promise.resolve();
                },
                mount: function(t) {
                  return Promise.resolve().then(function() {
                    t.domElement.innerHTML = e;
                  });
                },
                unmount: function(e) {
                  return Promise.resolve().then(function() {
                    e.domElement.innerHTML = "";
                  });
                }
              };
            }
            function j(e, t, n) {
              n && n.nextSibling
                ? n.parentNode.insertBefore(e, n.nextSibling)
                : t.appendChild(e);
            }
            function S(e) {
              return "single-spa-application:".concat(e);
            }
            function P(e) {
              return e === r.SKIP_BECAUSE_BROKEN || e === r.LOAD_ERROR;
            }
            function A(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return u(u({}, e), t);
            }
            function C() {
              return !0;
            }
            var L,
              x,
              T,
              W,
              I = (function(e, t) {
                if (e && e.nodeName)
                  d &&
                    !t &&
                    window.singleSpaLayoutData &&
                    (t = window.singleSpaLayoutData),
                    (e = (function(e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (
                        ("template" === e.nodeName.toLowerCase() &&
                          (e = (e.content || e).querySelector(
                            "single-spa-router"
                          )),
                        "single-spa-router" !== e.nodeName.toLowerCase())
                      )
                        throw Error(
                          "single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(
                            e.nodeName
                          )
                        );
                      d && e.isConnected && e.parentNode.removeChild(e);
                      var n = { routes: [] };
                      w(e, "mode") && (n.mode = w(e, "mode")),
                        w(e, "base") && (n.base = w(e, "base")),
                        w(e, "containerEl") &&
                          (n.containerEl = w(e, "containerEl"));
                      for (var r = 0; r < e.childNodes.length; r++) {
                        var o;
                        (o = n.routes).push.apply(o, s(E(e.childNodes[r], t)));
                      }
                      return n;
                    })(e, t));
                else if (t)
                  throw Error(
                    "constructRoutes should be called either with an HTMLElement and layoutData, or a single json object."
                  );
                return (
                  (function(e) {
                    f("routesConfig", e);
                    var t,
                      n = e.disableWarnings;
                    v(
                      "routesConfig",
                      e,
                      [
                        "mode",
                        "base",
                        "containerEl",
                        "routes",
                        "disableWarnings"
                      ],
                      n
                    ),
                      e.hasOwnProperty("containerEl")
                        ? (function(e, t) {
                            if (
                              "string" == typeof t
                                ? "" === t.trim()
                                : !(d && t instanceof HTMLElement)
                            )
                              throw Error(
                                "Invalid "
                                  .concat(
                                    "routesConfig.containerEl",
                                    ": received "
                                  )
                                  .concat(
                                    t,
                                    " but expected either non-blank string or HTMLElement"
                                  )
                              );
                          })(0, e.containerEl)
                        : (e.containerEl = "body"),
                      e.hasOwnProperty("mode") || (e.mode = "history"),
                      (function(e, t, n) {
                        if (n.indexOf(t) < 0)
                          throw Error(
                            "Invalid "
                              .concat("routesConfig.mode", ": received '")
                              .concat(t, "' but expected ")
                              .concat(n.join(", "))
                          );
                      })(0, e.mode, ["history", "hash"]),
                      e.hasOwnProperty("base")
                        ? (m("routesConfig.base", e.base),
                          (e.base =
                            (0 !== (t = e.base).indexOf("/") && (t = "/" + t),
                            "/" !== t[t.length - 1] && (t += "/"),
                            t)))
                        : (e.base = "/");
                    var r = d ? window.location.pathname : "/",
                      o = "hash" === e.mode ? r + "#" : "";
                    h(
                      "routesConfig.routes",
                      e.routes,
                      function e(t, r, o) {
                        var i,
                          c,
                          u,
                          s,
                          l = o.parentPath,
                          p = o.siblingActiveWhens;
                        if ((f(r, t), "application" === t.type))
                          v(
                            r,
                            t,
                            ["type", "name", "props", "loader", "error"],
                            n
                          ),
                            t.props && f("".concat(r, ".props"), t.props),
                            m("".concat(r, ".name"), t.name);
                        else if ("route" === t.type) {
                          v(
                            r,
                            t,
                            ["type", "path", "routes", "props", "default"],
                            n
                          );
                          var d,
                            y = t.hasOwnProperty("path"),
                            g = t.hasOwnProperty("default");
                          if (y)
                            m("".concat(r, ".path"), t.path),
                              (c = l),
                              (u = t.path),
                              "/" ===
                                (s =
                                  "/" === c.substr(-1)
                                    ? "/" === u[0]
                                      ? c + u.slice(1)
                                      : c + u
                                    : "/" === u[0]
                                    ? c + u
                                    : c + "/" + u).substr(-1) &&
                                (s = s.slice(0, s.length - 1)),
                              (d = s),
                              (t.activeWhen = b(d)),
                              p.push(t.activeWhen);
                          else {
                            if (!g)
                              throw Error(
                                "Invalid ".concat(
                                  r,
                                  ": routes must have either a path or default property."
                                )
                              );
                            !(function(e, t) {
                              if ("boolean" != typeof t)
                                throw Error(
                                  "Invalid "
                                    .concat(e, ": received ")
                                    .concat(a(t), ", but expected a boolean")
                                );
                            })("".concat(r, ".default"), t.default),
                              (d = l),
                              (t.activeWhen =
                                ((i = p),
                                function(e) {
                                  return !i.some(function(t) {
                                    return t(e);
                                  });
                                }));
                          }
                          if (y && g && t.default)
                            throw Error(
                              "Invalid ".concat(
                                r,
                                ": cannot have both path and set default to true."
                              )
                            );
                          t.routes &&
                            h("".concat(r, ".routes"), t.routes, e, {
                              parentPath: d,
                              siblingActiveWhens: []
                            });
                        } else {
                          if ("undefined" != typeof Node && t instanceof Node);
                          else
                            for (var w in t)
                              "routes" !== w &&
                                "attrs" !== w &&
                                m("".concat(r, "['").concat(w, "']"), t[w], !1);
                          t.routes &&
                            h("".concat(r, ".routes"), t.routes, e, {
                              parentPath: l,
                              siblingActiveWhens: p
                            });
                        }
                      },
                      { parentPath: o + e.base, siblingActiveWhens: [] }
                    ),
                      delete e.disableWarnings;
                  })(e),
                  e
                );
              })(document.querySelector("#single-spa-layout")),
              M =
                ((x = (L = {
                  routes: I,
                  loadApp: function(e) {
                    var t = e.name;
                    return System.import(t);
                  }
                }).routes),
                (T = L.loadApp),
                (function e(t, n, r, o) {
                  o.forEach(function(o) {
                    "application" === o.type
                      ? (t[o.name] || (t[o.name] = []),
                        t[o.name].push({
                          activeWhen: n,
                          props: A(r, o.props),
                          loader: o.loader
                        }))
                      : "route" === o.type
                      ? e(t, o.activeWhen, A(r, o.props), o.routes)
                      : o.routes && e(t, n, r, o.routes);
                  });
                })((W = {}), C, {}, x.routes),
                Object.keys(W).map(function(e) {
                  var t = W[e];
                  return {
                    name: e,
                    customProps: function(e, n) {
                      var r = y(t, function(e) {
                        return e.activeWhen(n);
                      });
                      return r ? r.props : {};
                    },
                    activeWhen: t.map(function(e) {
                      return e.activeWhen;
                    }),
                    app: function() {
                      var n;
                      d &&
                        (n = y(t, function(e) {
                          return e.activeWhen(window.location);
                        }));
                      var o = T({ name: e });
                      return n && n.loader
                        ? (function(e, t, n) {
                            return Promise.resolve().then(function() {
                              var o,
                                a = S(e),
                                i = document.getElementById(a);
                              i ||
                                (((i = document.createElement("div")).id = a),
                                (i.style.display = "none"),
                                document.body.appendChild(i),
                                (o = function() {
                                  i.style.removeProperty("display"),
                                    "" === i.getAttribute("style") &&
                                      i.removeAttribute("style"),
                                    window.removeEventListener(
                                      "single-spa:before-mount-routing-event",
                                      o
                                    );
                                }),
                                window.addEventListener(
                                  "single-spa:before-mount-routing-event",
                                  o
                                ));
                              var c =
                                  "string" == typeof t.loader
                                    ? N(t.loader)
                                    : t.loader,
                                u = Object(r.mountRootParcel)(c, {
                                  name: "application-loader:".concat(e),
                                  domElement: i
                                });
                              return Promise.all([u.mountPromise, n]).then(
                                function(e) {
                                  var t,
                                    n =
                                      (function(e) {
                                        if (Array.isArray(e)) return e;
                                      })((t = e)) ||
                                      (function(e, t) {
                                        if (
                                          "undefined" != typeof Symbol &&
                                          Symbol.iterator in Object(e)
                                        ) {
                                          var n = [],
                                            r = !0,
                                            o = !1,
                                            a = void 0;
                                          try {
                                            for (
                                              var i, c = e[Symbol.iterator]();
                                              !(r = (i = c.next()).done) &&
                                              (n.push(i.value), 2 !== n.length);
                                              r = !0
                                            );
                                          } catch (e) {
                                            (o = !0), (a = e);
                                          } finally {
                                            try {
                                              r ||
                                                null == c.return ||
                                                c.return();
                                            } finally {
                                              if (o) throw a;
                                            }
                                          }
                                          return n;
                                        }
                                      })(t) ||
                                      l(t, 2) ||
                                      (function() {
                                        throw new TypeError(
                                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                        );
                                      })(),
                                    r = (n[0], n[1]);
                                  return u.unmount().then(function() {
                                    return o && o(), r;
                                  });
                                }
                              );
                            });
                          })(e, n, o)
                        : o;
                    }
                  };
                }));
            !(function(e) {
              var t = e.routes,
                n = (e.applications, e.active),
                o = void 0 === n || n,
                a = !1,
                i = [],
                c = {},
                u = t.base.slice(0, t.base.length - 1),
                s = {
                  isActive: function() {
                    return a;
                  },
                  activate: function() {
                    a ||
                      ((a = !0),
                      d &&
                        (window.addEventListener(
                          "single-spa:before-routing-event",
                          p
                        ),
                        window.addEventListener(
                          "single-spa:before-mount-routing-event",
                          f
                        ),
                        window.addEventListener("single-spa:routing-event", v),
                        Object(r.addErrorHandler)(l),
                        f()));
                  },
                  deactivate: function() {
                    a &&
                      ((a = !1),
                      d &&
                        (window.removeEventListener(
                          "single-spa:before-routing-event",
                          p
                        ),
                        window.removeEventListener(
                          "single-spa:before-mount-routing-event",
                          f
                        ),
                        window.removeEventListener(
                          "single-spa:routing-event",
                          v
                        ),
                        Object(r.removeErrorHandler)(l)));
                  }
                };
              return o && s.activate(), s;
              function l(e) {
                var n = (function e(t) {
                  for (
                    var n = t.applicationName,
                      r = t.location,
                      o = t.routes,
                      a = 0;
                    a < o.length;
                    a++
                  ) {
                    var i = o[a];
                    if ("application" === i.type) {
                      if (i.name === n) return i;
                    } else if ("route" === i.type) {
                      if (i.activeWhen(r)) {
                        var c = e({
                          applicationName: n,
                          location: r,
                          routes: i.routes
                        });
                        if (c) return c;
                      }
                    } else if (i.routes) {
                      var u = e({
                        applicationName: n,
                        location: r,
                        routes: i.routes
                      });
                      if (u) return u;
                    }
                  }
                })({
                  applicationName: e.appOrParcelName,
                  location: window.location,
                  routes: t.routes
                });
                if (n && n.error) {
                  var o = document.getElementById(S(n.name)),
                    a = "string" == typeof n.error ? N(n.error) : n.error;
                  c[n.name] = Object(r.mountRootParcel)(a, { domElement: o });
                }
              }
              function p(e) {
                var t = e.detail.newAppStatuses;
                for (var n in t)
                  c[n] &&
                    P(Object(r.getAppStatus)(n)) &&
                    !P(t[n]) &&
                    (c[n].unmount(), delete c[n]);
              }
              function f() {
                if (
                  0 ===
                  location["hash" === t.mode ? "hash" : "pathname"].indexOf(u)
                ) {
                  var e =
                    "string" == typeof t.containerEl
                      ? document.querySelector(t.containerEl)
                      : t.containerEl;
                  !(function e(t) {
                    var n = t.location,
                      r = t.routes,
                      o = t.parentContainer,
                      a = t.previousSibling,
                      i = t.shouldMount,
                      c = t.pendingRemovals;
                    return (
                      r.forEach(function(t, r) {
                        if ("application" === t.type) {
                          var u = S(t.name),
                            s = document.getElementById(u);
                          i &&
                            (s || ((s = document.createElement("div")).id = u),
                            j(s, o, a),
                            (a = s));
                        } else if ("route" === t.type)
                          a = e({
                            location: n,
                            routes: t.routes,
                            parentContainer: o,
                            previousSibling: a,
                            shouldMount: i && t.activeWhen(n),
                            pendingRemovals: c
                          });
                        else if (t instanceof Node || "string" == typeof t.type)
                          if (i) {
                            if (!t.connectedNode) {
                              var l =
                                t instanceof Node
                                  ? t.cloneNode(!1)
                                  : (function e(t) {
                                      if ("#text" === t.type.toLowerCase())
                                        return document.createTextNode(t.value);
                                      if ("#comment" === t.type.toLowerCase())
                                        return document.createComment(t.value);
                                      var n = document.createElement(t.type);
                                      return (
                                        (t.attrs || []).forEach(function(e) {
                                          n.setAttribute(e.name, e.value);
                                        }),
                                        n.routes &&
                                          n.routes.forEach(function(t) {
                                            n.appendChild(e(t));
                                          }),
                                        n
                                      );
                                    })(t);
                              t.connectedNode = l;
                            }
                            j(t.connectedNode, o, a),
                              t.routes &&
                                e({
                                  location: n,
                                  routes: t.routes,
                                  parentContainer: t.connectedNode,
                                  previousSibling: null,
                                  shouldMount: i,
                                  pendingRemovals: c
                                }),
                              (a = t.connectedNode);
                          } else
                            c.push(function() {
                              var e;
                              (e = t.connectedNode) &&
                                (e.remove
                                  ? e.remove()
                                  : e.parentNode.removeChild(e)),
                                delete t.connectedNode;
                            });
                      }),
                      a
                    );
                  })({
                    location: window.location,
                    routes: t.routes,
                    parentContainer: e,
                    shouldMount: !0,
                    pendingRemovals: i
                  });
                }
              }
              function v(e) {
                var t = e.detail.appsByNewStatus;
                i.forEach(function(e) {
                  return e();
                }),
                  (i = []),
                  t.NOT_MOUNTED.concat(t.NOT_LOADED).forEach(function(e) {
                    var t = document.getElementById(S(e));
                    t && t.isConnected && t.parentNode.removeChild(t);
                  });
              }
            })({ routes: I, applications: M });
            M.forEach(r.registerApplication), Object(r.start)();
          }
        ])
      );
    }
  };
});
//# sourceMappingURL=isomorphic-mf-root-config.js.map
