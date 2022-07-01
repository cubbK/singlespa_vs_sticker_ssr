System.register(["react", "react-dom"], function (e) {
  var t, n;
  return {
    setters: [
      function (e) {
        t = e;
      },
      function (e) {
        n = e;
      },
    ],
    execute: function () {
      e(
        (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function (t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 2))
          );
        })([
          function (e, n) {
            e.exports = t;
          },
          function (e, t) {
            e.exports = n;
          },
          function (e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "bootstrap", function () {
                return v;
              }),
              n.d(t, "mount", function () {
                return E;
              }),
              n.d(t, "unmount", function () {
                return w;
              }),
              (function (e, t) {
                if (
                  (t || (t = 1), "string" != typeof e || 0 === e.trim().length)
                )
                  throw Error(
                    "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
                  );
                if ("number" != typeof t || t <= 0 || !Number.isInteger(t))
                  throw Error(
                    "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
                  );
                let r;
                try {
                  if (((r = window.System.resolve(e)), !r)) throw Error();
                } catch (t) {
                  throw Error(
                    "systemjs-webpack-interop: There is no such module '" +
                      e +
                      "' in the SystemJS registry. Did you misspell the name of your module?"
                  );
                }
                n.p = (function (e, t) {
                  const n = new URL(e),
                    r = new URL(e).pathname;
                  let o = 0,
                    a = r.length;
                  for (; o !== t && a >= 0; ) {
                    "/" === r[--a] && o++;
                  }
                  if (o !== t)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        t +
                        ") is greater than the number of directories (" +
                        o +
                        ") in the URL path " +
                        fullUrl
                    );
                  return (n.pathname = n.pathname.slice(0, a + 1)), n.href;
                })(r, t);
              })("@app1");
            var r = n(0),
              o = n.n(r),
              a = n(1),
              i = n.n(a);
            function c(e) {
              return (c =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
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
                    })(e);
            }
            function u(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function s(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            var p = null,
              l = {
                React: null,
                ReactDOM: null,
                rootComponent: null,
                loadRootComponent: null,
                suppressComponentDidCatchWarning: !1,
                domElements: {},
                errorBoundary: null,
                domElementGetter: null,
                parcelCanUpdate: !0,
              };
            function m(e, t) {
              return e.rootComponent
                ? Promise.resolve()
                : e.loadRootComponent(t).then(function (t) {
                    e.rootComponent = t;
                  });
            }
            function d(e, t) {
              return new Promise(function (n, r) {
                e.suppressComponentDidCatchWarning ||
                  !(function (e) {
                    if (
                      !(
                        e &&
                        "string" == typeof e.version &&
                        e.version.indexOf(".") >= 0
                      )
                    )
                      return !1;
                    var t = e.version.slice(0, e.version.indexOf("."));
                    try {
                      return Number(t) >= 16;
                    } catch (e) {
                      return !1;
                    }
                  })(e.React) ||
                  e.errorBoundary ||
                  (e.rootComponent.prototype
                    ? e.rootComponent.prototype.componentDidCatch ||
                      console.warn(
                        "single-spa-react: ".concat(
                          t.name || t.appName || t.childAppName,
                          "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application."
                        )
                      )
                    : console.warn(
                        "single-spa-react: ".concat(
                          t.name || t.appName || t.childAppName,
                          "'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts)."
                        )
                      ));
                var o = (function (e, t) {
                  return t.domElement
                    ? function () {
                        return t.domElement;
                      }
                    : t.domElementGetter
                    ? t.domElementGetter
                    : e.domElementGetter
                    ? e.domElementGetter
                    : (function (e) {
                        var t = e.appName || e.name;
                        if (!t)
                          throw Error(
                            "single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application"
                          );
                        var n = "single-spa-application:".concat(t);
                        return function () {
                          var e = document.getElementById(n);
                          return (
                            e ||
                              (((e = document.createElement("div")).id = n),
                              document.body.appendChild(e)),
                            e
                          );
                        };
                      })(t);
                })(e, t);
                if ("function" != typeof o)
                  throw new Error(
                    "single-spa-react: the domElementGetter for react application '".concat(
                      t.appName || t.name,
                      "' is not a function"
                    )
                  );
                var a = b(e, t),
                  i = (function (e, t) {
                    var n = e(t);
                    if (!n)
                      throw new Error(
                        "single-spa-react: domElementGetter function for application '".concat(
                          t.appName || t.name,
                          "' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"
                        )
                      );
                    return n;
                  })(o, t);
                h({
                  elementToRender: a,
                  domElement: i,
                  whenFinished: function () {
                    n(this);
                  },
                  opts: e,
                }),
                  (e.domElements[t.name] = i);
              });
            }
            function f(e, t) {
              return Promise.resolve().then(function () {
                e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),
                  delete e.domElements[t.name];
              });
            }
            function y(e, t) {
              return new Promise(function (n, r) {
                h({
                  elementToRender: b(e, t),
                  domElement: e.domElements[t.name],
                  whenFinished: function () {
                    n(this);
                  },
                  opts: e,
                });
              });
            }
            function h(e) {
              var t = e.opts,
                n = e.elementToRender,
                r = e.domElement,
                o = e.whenFinished;
              return "createRoot" === t.renderType
                ? t.ReactDOM.createRoot(r).render(n, o)
                : "createBlockingRoot" === t.renderType
                ? t.ReactDOM.createBlockingRoot(r).render(n, o)
                : "hydrate" === t.renderType
                ? t.ReactDOM.hydrate(n, r, o)
                : t.ReactDOM.render(n, r, o);
            }
            function b(e, t) {
              var n = e.React.createElement(e.rootComponent, t),
                r = p ? e.React.createElement(p.Provider, { value: t }, n) : n;
              return (
                e.errorBoundary &&
                  ((e.errorBoundaryClass =
                    e.errorBoundaryClass ||
                    (function (e) {
                      function t(n) {
                        e.React.Component.apply(this, arguments),
                          (this.state = {
                            caughtError: null,
                            caughtErrorInfo: null,
                          }),
                          (t.displayName = "SingleSpaReactErrorBoundary(".concat(
                            n.name,
                            ")"
                          ));
                      }
                      return (
                        (t.prototype = Object.create(
                          e.React.Component.prototype
                        )),
                        (t.prototype.render = function () {
                          return this.state.caughtError
                            ? e.errorBoundary(
                                this.state.caughtError,
                                this.state.caughtErrorInfo,
                                this.props
                              )
                            : this.props.children;
                        }),
                        (t.prototype.componentDidCatch = function (e, t) {
                          this.setState({ caughtError: e, caughtErrorInfo: t });
                        }),
                        t
                      );
                    })(e)),
                  (r = e.React.createElement(e.errorBoundaryClass, t, r))),
                r
              );
            }
            const g = (function (e) {
                if ("object" !== c(e))
                  throw new Error(
                    "single-spa-react requires a configuration object"
                  );
                var t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? s(Object(n), !0).forEach(function (t) {
                          u(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : s(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, l, {}, e);
                if (!t.React)
                  throw new Error("single-spa-react must be passed opts.React");
                if (!t.ReactDOM)
                  throw new Error(
                    "single-spa-react must be passed opts.ReactDOM"
                  );
                if (!t.rootComponent && !t.loadRootComponent)
                  throw new Error(
                    "single-spa-react must be passed opts.rootComponent or opts.loadRootComponent"
                  );
                if (t.errorBoundary && "function" != typeof t.errorBoundary)
                  throw Error(
                    "The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements"
                  );
                !p && t.React.createContext && (p = t.React.createContext());
                var n = {
                  bootstrap: m.bind(null, t),
                  mount: d.bind(null, t),
                  unmount: f.bind(null, t),
                };
                return t.parcelCanUpdate && (n.update = y.bind(null, t)), n;
              })({
                React: o.a,
                ReactDOM: i.a,
                rootComponent: function (e) {
                  return o.a.createElement(
                    "div",
                    null,
                    "Look at me I'm an app1 version 1"
                  );
                },
                renderType: "hydrate",
              }),
              v = g.bootstrap,
              E = g.mount,
              w = g.unmount;
          },
        ])
      );
    },
  };
});
//# sourceMappingURL=isomorphic-mf-navbar.js.map
