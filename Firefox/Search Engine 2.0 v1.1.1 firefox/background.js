"use strict";
(() => {
  var hr = Object.create;
  var Te = Object.defineProperty;
  var br = Object.getOwnPropertyDescriptor;
  var vr = Object.getOwnPropertyNames;
  var wr = Object.getPrototypeOf,
    Tr = Object.prototype.hasOwnProperty;
  var V = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
  var Pr = (e, r, t, a) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let s of vr(r))
        !Tr.call(e, s) &&
          s !== t &&
          Te(e, s, {
            get: () => r[s],
            enumerable: !(a = br(r, s)) || a.enumerable,
          });
    return e;
  };
  var z = (e, r, t) => (
    (t = e != null ? hr(wr(e)) : {}),
    Pr(
      r || !e || !e.__esModule
        ? Te(t, "default", { value: e, enumerable: !0 })
        : t,
      e
    )
  );
  var K = V((pe, Pe) => {
    (function (e, r) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], r);
      else if (typeof pe < "u") r(Pe);
      else {
        var t = { exports: {} };
        r(t), (e.browser = t.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : pe,
      function (e) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id)
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          let r = "The message port closed before a response was received.",
            t = (a) => {
              let s = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(s).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class m extends WeakMap {
                constructor(n, f = void 0) {
                  super(f), (this.createItem = n);
                }
                get(n) {
                  return (
                    this.has(n) || this.set(n, this.createItem(n)), super.get(n)
                  );
                }
              }
              let u = (o) =>
                  o && typeof o == "object" && typeof o.then == "function",
                c =
                  (o, n) =>
                  (...f) => {
                    a.runtime.lastError
                      ? o.reject(new Error(a.runtime.lastError.message))
                      : n.singleCallbackArg ||
                        (f.length <= 1 && n.singleCallbackArg !== !1)
                      ? o.resolve(f[0])
                      : o.resolve(f);
                  },
                x = (o) => (o == 1 ? "argument" : "arguments"),
                h = (o, n) =>
                  function (l, ...A) {
                    if (A.length < n.minArgs)
                      throw new Error(
                        `Expected at least ${n.minArgs} ${x(
                          n.minArgs
                        )} for ${o}(), got ${A.length}`
                      );
                    if (A.length > n.maxArgs)
                      throw new Error(
                        `Expected at most ${n.maxArgs} ${x(
                          n.maxArgs
                        )} for ${o}(), got ${A.length}`
                      );
                    return new Promise((T, k) => {
                      if (n.fallbackToNoCallback)
                        try {
                          l[o](...A, c({ resolve: T, reject: k }, n));
                        } catch (i) {
                          console.warn(
                            `${o} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            i
                          ),
                            l[o](...A),
                            (n.fallbackToNoCallback = !1),
                            (n.noCallback = !0),
                            T();
                        }
                      else
                        n.noCallback
                          ? (l[o](...A), T())
                          : l[o](...A, c({ resolve: T, reject: k }, n));
                    });
                  },
                S = (o, n, f) =>
                  new Proxy(n, {
                    apply(l, A, T) {
                      return f.call(A, o, ...T);
                    },
                  }),
                C = Function.call.bind(Object.prototype.hasOwnProperty),
                v = (o, n = {}, f = {}) => {
                  let l = Object.create(null),
                    A = {
                      has(k, i) {
                        return i in o || i in l;
                      },
                      get(k, i, j) {
                        if (i in l) return l[i];
                        if (!(i in o)) return;
                        let g = o[i];
                        if (typeof g == "function")
                          if (typeof n[i] == "function") g = S(o, o[i], n[i]);
                          else if (C(f, i)) {
                            let D = h(i, f[i]);
                            g = S(o, o[i], D);
                          } else g = g.bind(o);
                        else if (
                          typeof g == "object" &&
                          g !== null &&
                          (C(n, i) || C(f, i))
                        )
                          g = v(g, n[i], f[i]);
                        else if (C(f, "*")) g = v(g, n[i], f["*"]);
                        else
                          return (
                            Object.defineProperty(l, i, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return o[i];
                              },
                              set(D) {
                                o[i] = D;
                              },
                            }),
                            g
                          );
                        return (l[i] = g), g;
                      },
                      set(k, i, j, g) {
                        return i in l ? (l[i] = j) : (o[i] = j), !0;
                      },
                      defineProperty(k, i, j) {
                        return Reflect.defineProperty(l, i, j);
                      },
                      deleteProperty(k, i) {
                        return Reflect.deleteProperty(l, i);
                      },
                    },
                    T = Object.create(o);
                  return new Proxy(T, A);
                },
                d = (o) => ({
                  addListener(n, f, ...l) {
                    n.addListener(o.get(f), ...l);
                  },
                  hasListener(n, f) {
                    return n.hasListener(o.get(f));
                  },
                  removeListener(n, f) {
                    n.removeListener(o.get(f));
                  },
                }),
                M = new m((o) =>
                  typeof o != "function"
                    ? o
                    : function (f) {
                        let l = v(
                          f,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        o(l);
                      }
                ),
                P = new m((o) =>
                  typeof o != "function"
                    ? o
                    : function (f, l, A) {
                        let T = !1,
                          k,
                          i = new Promise((L) => {
                            k = function (I) {
                              (T = !0), L(I);
                            };
                          }),
                          j;
                        try {
                          j = o(f, l, k);
                        } catch (L) {
                          j = Promise.reject(L);
                        }
                        let g = j !== !0 && u(j);
                        if (j !== !0 && !g && !T) return !1;
                        let D = (L) => {
                          L.then(
                            (I) => {
                              A(I);
                            },
                            (I) => {
                              let ue;
                              I &&
                              (I instanceof Error ||
                                typeof I.message == "string")
                                ? (ue = I.message)
                                : (ue = "An unexpected error occurred"),
                                A({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: ue,
                                });
                            }
                          ).catch((I) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              I
                            );
                          });
                        };
                        return D(g ? j : i), !0;
                      }
                ),
                E = ({ reject: o, resolve: n }, f) => {
                  a.runtime.lastError
                    ? a.runtime.lastError.message === r
                      ? n()
                      : o(new Error(a.runtime.lastError.message))
                    : f && f.__mozWebExtensionPolyfillReject__
                    ? o(new Error(f.message))
                    : n(f);
                },
                w = (o, n, f, ...l) => {
                  if (l.length < n.minArgs)
                    throw new Error(
                      `Expected at least ${n.minArgs} ${x(
                        n.minArgs
                      )} for ${o}(), got ${l.length}`
                    );
                  if (l.length > n.maxArgs)
                    throw new Error(
                      `Expected at most ${n.maxArgs} ${x(
                        n.maxArgs
                      )} for ${o}(), got ${l.length}`
                    );
                  return new Promise((A, T) => {
                    let k = E.bind(null, { resolve: A, reject: T });
                    l.push(k), f.sendMessage(...l);
                  });
                },
                O = {
                  devtools: { network: { onRequestFinished: d(M) } },
                  runtime: {
                    onMessage: d(P),
                    onMessageExternal: d(P),
                    sendMessage: w.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: w.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                G = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (s.privacy = {
                  network: { "*": G },
                  services: { "*": G },
                  websites: { "*": G },
                }),
                v(a, O, s)
              );
            };
          e.exports = t(chrome);
        } else e.exports = globalThis.browser;
      }
    );
  });
  var ar = V((vs, or) => {
    "use strict";
    or.exports = () => {
      let e = {};
      return (
        (e.promise = new Promise((r, t) => {
          (e.resolve = r), (e.reject = t);
        })),
        e
      );
    };
  });
  var nr = V((ws, sr) => {
    "use strict";
    var yo = ar();
    function ho(e, r = "maxAge") {
      let t,
        a,
        s,
        m = async () => {
          if (t !== void 0) return;
          let x = async (h) => {
            s = yo();
            let S = h[1][r] - Date.now();
            if (S <= 0) {
              e.delete(h[0]), s.resolve();
              return;
            }
            return (
              (t = h[0]),
              (a = setTimeout(() => {
                e.delete(h[0]), s && s.resolve();
              }, S)),
              typeof a.unref == "function" && a.unref(),
              s.promise
            );
          };
          try {
            for (let h of e) await x(h);
          } catch {}
          t = void 0;
        },
        u = () => {
          (t = void 0),
            a !== void 0 && (clearTimeout(a), (a = void 0)),
            s !== void 0 && (s.reject(void 0), (s = void 0));
        },
        c = e.set.bind(e);
      return (
        (e.set = (x, h) => {
          e.has(x) && e.delete(x);
          let S = c(x, h);
          return t && t === x && u(), m(), S;
        }),
        m(),
        e
      );
    }
    sr.exports = ho;
  });
  var fr = V((Ts, ir) => {
    "use strict";
    var bo = nr(),
      ye = class {
        constructor(r, t) {
          if (
            ((this.maxAge = r),
            (this[Symbol.toStringTag] = "Map"),
            (this.data = new Map()),
            bo(this.data),
            t)
          )
            for (let [a, s] of t) this.set(a, s);
        }
        get size() {
          return this.data.size;
        }
        clear() {
          this.data.clear();
        }
        delete(r) {
          return this.data.delete(r);
        }
        has(r) {
          return this.data.has(r);
        }
        get(r) {
          let t = this.data.get(r);
          if (t) return t.data;
        }
        set(r, t) {
          return (
            this.data.set(r, { maxAge: Date.now() + this.maxAge, data: t }),
            this
          );
        }
        values() {
          return this.createIterator((r) => r[1].data);
        }
        keys() {
          return this.data.keys();
        }
        entries() {
          return this.createIterator((r) => [r[0], r[1].data]);
        }
        forEach(r, t) {
          for (let [a, s] of this.entries()) r.apply(t, [s, a, this]);
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        *createIterator(r) {
          for (let t of this.data.entries()) yield r(t);
        }
      };
    ir.exports = ye;
  });
  var U = z(K());
  var kr =
      typeof global == "object" && global && global.Object === Object && global,
    J = kr;
  var jr = typeof self == "object" && self && self.Object === Object && self,
    Sr = J || jr || Function("return this")(),
    b = Sr;
  var Cr = b.Symbol,
    W = Cr;
  var ke = Object.prototype,
    Er = ke.hasOwnProperty,
    Or = ke.toString,
    $ = W ? W.toStringTag : void 0;
  function Mr(e) {
    var r = Er.call(e, $),
      t = e[$];
    try {
      e[$] = void 0;
      var a = !0;
    } catch {}
    var s = Or.call(e);
    return a && (r ? (e[$] = t) : delete e[$]), s;
  }
  var je = Mr;
  var Ir = Object.prototype,
    Nr = Ir.toString;
  function Rr(e) {
    return Nr.call(e);
  }
  var Se = Rr;
  var Br = "[object Null]",
    _r = "[object Undefined]",
    Ce = W ? W.toStringTag : void 0;
  function Dr(e) {
    return e == null
      ? e === void 0
        ? _r
        : Br
      : Ce && Ce in Object(e)
      ? je(e)
      : Se(e);
  }
  var R = Dr;
  function Wr(e) {
    return e != null && typeof e == "object";
  }
  var F = Wr;
  var Fr = Array.isArray,
    Ee = Fr;
  function Ur(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  var H = Ur;
  var Gr = "[object AsyncFunction]",
    Lr = "[object Function]",
    $r = "[object GeneratorFunction]",
    qr = "[object Proxy]";
  function Vr(e) {
    if (!H(e)) return !1;
    var r = R(e);
    return r == Lr || r == $r || r == Gr || r == qr;
  }
  var Z = Vr;
  var zr = b["__core-js_shared__"],
    Q = zr;
  var Oe = (function () {
    var e = /[^.]+$/.exec((Q && Q.keys && Q.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Kr(e) {
    return !!Oe && Oe in e;
  }
  var Me = Kr;
  var Jr = Function.prototype,
    Hr = Jr.toString;
  function Zr(e) {
    if (e != null) {
      try {
        return Hr.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var B = Zr;
  var Qr = /[\\^$.*+?()[\]{}|]/g,
    Xr = /^\[object .+?Constructor\]$/,
    Yr = Function.prototype,
    et = Object.prototype,
    rt = Yr.toString,
    tt = et.hasOwnProperty,
    ot = RegExp(
      "^" +
        rt
          .call(tt)
          .replace(Qr, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function at(e) {
    if (!H(e) || Me(e)) return !1;
    var r = Z(e) ? ot : Xr;
    return r.test(B(e));
  }
  var Ie = at;
  function st(e, r) {
    return e?.[r];
  }
  var Ne = st;
  function nt(e, r) {
    var t = Ne(e, r);
    return Ie(t) ? t : void 0;
  }
  var N = nt;
  var it = N(b, "WeakMap"),
    X = it;
  var ft = 9007199254740991;
  function mt(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ft;
  }
  var Y = mt;
  function lt(e) {
    return e != null && Y(e.length) && !Z(e);
  }
  var Re = lt;
  var ut = Object.prototype;
  function pt(e) {
    var r = e && e.constructor,
      t = (typeof r == "function" && r.prototype) || ut;
    return e === t;
  }
  var ee = pt;
  var dt = "[object Arguments]";
  function gt(e) {
    return F(e) && R(e) == dt;
  }
  var de = gt;
  var Be = Object.prototype,
    ct = Be.hasOwnProperty,
    xt = Be.propertyIsEnumerable,
    At = de(
      (function () {
        return arguments;
      })()
    )
      ? de
      : function (e) {
          return F(e) && ct.call(e, "callee") && !xt.call(e, "callee");
        },
    _e = At;
  function yt() {
    return !1;
  }
  var De = yt;
  var Ue =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    We =
      Ue && typeof module == "object" && module && !module.nodeType && module,
    ht = We && We.exports === Ue,
    Fe = ht ? b.Buffer : void 0,
    bt = Fe ? Fe.isBuffer : void 0,
    vt = bt || De,
    Ge = vt;
  var wt = "[object Arguments]",
    Tt = "[object Array]",
    Pt = "[object Boolean]",
    kt = "[object Date]",
    jt = "[object Error]",
    St = "[object Function]",
    Ct = "[object Map]",
    Et = "[object Number]",
    Ot = "[object Object]",
    Mt = "[object RegExp]",
    It = "[object Set]",
    Nt = "[object String]",
    Rt = "[object WeakMap]",
    Bt = "[object ArrayBuffer]",
    _t = "[object DataView]",
    Dt = "[object Float32Array]",
    Wt = "[object Float64Array]",
    Ft = "[object Int8Array]",
    Ut = "[object Int16Array]",
    Gt = "[object Int32Array]",
    Lt = "[object Uint8Array]",
    $t = "[object Uint8ClampedArray]",
    qt = "[object Uint16Array]",
    Vt = "[object Uint32Array]",
    p = {};
  p[Dt] = p[Wt] = p[Ft] = p[Ut] = p[Gt] = p[Lt] = p[$t] = p[qt] = p[Vt] = !0;
  p[wt] =
    p[Tt] =
    p[Bt] =
    p[Pt] =
    p[_t] =
    p[kt] =
    p[jt] =
    p[St] =
    p[Ct] =
    p[Et] =
    p[Ot] =
    p[Mt] =
    p[It] =
    p[Nt] =
    p[Rt] =
      !1;
  function zt(e) {
    return F(e) && Y(e.length) && !!p[R(e)];
  }
  var Le = zt;
  function Kt(e) {
    return function (r) {
      return e(r);
    };
  }
  var $e = Kt;
  var qe =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    q = qe && typeof module == "object" && module && !module.nodeType && module,
    Jt = q && q.exports === qe,
    ge = Jt && J.process,
    Ht = (function () {
      try {
        var e = q && q.require && q.require("util").types;
        return e || (ge && ge.binding && ge.binding("util"));
      } catch {}
    })(),
    ce = Ht;
  var Ve = ce && ce.isTypedArray,
    Zt = Ve ? $e(Ve) : Le,
    ze = Zt;
  function Qt(e, r) {
    return function (t) {
      return e(r(t));
    };
  }
  var Ke = Qt;
  var Xt = Ke(Object.keys, Object),
    Je = Xt;
  var Yt = Object.prototype,
    eo = Yt.hasOwnProperty;
  function ro(e) {
    if (!ee(e)) return Je(e);
    var r = [];
    for (var t in Object(e)) eo.call(e, t) && t != "constructor" && r.push(t);
    return r;
  }
  var He = ro;
  var to = N(b, "Map"),
    re = to;
  var oo = N(b, "DataView"),
    te = oo;
  var ao = N(b, "Promise"),
    oe = ao;
  var so = N(b, "Set"),
    ae = so;
  var Ze = "[object Map]",
    no = "[object Object]",
    Qe = "[object Promise]",
    Xe = "[object Set]",
    Ye = "[object WeakMap]",
    er = "[object DataView]",
    io = B(te),
    fo = B(re),
    mo = B(oe),
    lo = B(ae),
    uo = B(X),
    _ = R;
  ((te && _(new te(new ArrayBuffer(1))) != er) ||
    (re && _(new re()) != Ze) ||
    (oe && _(oe.resolve()) != Qe) ||
    (ae && _(new ae()) != Xe) ||
    (X && _(new X()) != Ye)) &&
    (_ = function (e) {
      var r = R(e),
        t = r == no ? e.constructor : void 0,
        a = t ? B(t) : "";
      if (a)
        switch (a) {
          case io:
            return er;
          case fo:
            return Ze;
          case mo:
            return Qe;
          case lo:
            return Xe;
          case uo:
            return Ye;
        }
      return r;
    });
  var rr = _;
  var po = "[object Map]",
    go = "[object Set]",
    co = Object.prototype,
    xo = co.hasOwnProperty;
  function Ao(e) {
    if (e == null) return !0;
    if (
      Re(e) &&
      (Ee(e) ||
        typeof e == "string" ||
        typeof e.splice == "function" ||
        Ge(e) ||
        ze(e) ||
        _e(e))
    )
      return !e.length;
    var r = rr(e);
    if (r == po || r == go) return !e.size;
    if (ee(e)) return !He(e).length;
    for (var t in e) if (xo.call(e, t)) return !1;
    return !0;
  }
  var xe = Ao;
  var Ae = z(K());
  async function tr() {
    let { provider: e = "chatgpt" } = await Ae.default.storage.local.get(
        "provider"
      ),
      r = `provider:${"gpt3"}`,
      t = await Ae.default.storage.local.get(r);
    return { provider: e, configs: { ["gpt3"]: t[r] } };
  }
  var xr = z(fr());
  var se,
    vo = new Uint8Array(16);
  function he() {
    if (
      !se &&
      ((se =
        typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !se)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return se(vo);
  }
  var y = [];
  for (let e = 0; e < 256; ++e) y.push((e + 256).toString(16).slice(1));
  function mr(e, r = 0) {
    return (
      y[e[r + 0]] +
      y[e[r + 1]] +
      y[e[r + 2]] +
      y[e[r + 3]] +
      "-" +
      y[e[r + 4]] +
      y[e[r + 5]] +
      "-" +
      y[e[r + 6]] +
      y[e[r + 7]] +
      "-" +
      y[e[r + 8]] +
      y[e[r + 9]] +
      "-" +
      y[e[r + 10]] +
      y[e[r + 11]] +
      y[e[r + 12]] +
      y[e[r + 13]] +
      y[e[r + 14]] +
      y[e[r + 15]]
    ).toLowerCase();
  }
  var wo =
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
    be = { randomUUID: wo };
  function To(e, r, t) {
    if (be.randomUUID && !r && !e) return be.randomUUID();
    e = e || {};
    let a = e.random || (e.rng || he)();
    if (((a[6] = (a[6] & 15) | 64), (a[8] = (a[8] & 63) | 128), r)) {
      t = t || 0;
      for (let s = 0; s < 16; ++s) r[t + s] = a[s];
      return r;
    }
    return mr(a);
  }
  var ne = To;
  var lr = z(K());
  function ur() {
    return lr.default.runtime.getManifest().version;
  }
  var Po = "https://github.com/rakiburrahamanCS";
  async function pr() {
    return fetch(`${Po}/api/config`, { headers: { "x-version": ur() } }).then(
      (e) => e.json()
    );
  }
  function dr(e) {
    let r, t, a, s, m, u, c;
    return x(), { feed: h, reset: x };
    function x() {
      (r = !0),
        (t = ""),
        (a = 0),
        (s = -1),
        (m = void 0),
        (u = void 0),
        (c = "");
    }
    function h(C) {
      (t = t ? t + C : C), r && ko(t) && (t = t.slice(gr.length)), (r = !1);
      let v = t.length,
        d = 0,
        M = !1;
      for (; d < v; ) {
        M &&
          (t[d] ===
            `
` && ++d,
          (M = !1));
        let P = -1,
          E = s,
          w;
        for (let O = a; P < 0 && O < v; ++O)
          (w = t[O]),
            w === ":" && E < 0
              ? (E = O - d)
              : w === "\r"
              ? ((M = !0), (P = O - d))
              : w ===
                  `
` && (P = O - d);
        if (P < 0) {
          (a = v - d), (s = E);
          break;
        } else (a = 0), (s = -1);
        S(t, d, E, P), (d += P + 1);
      }
      d === v ? (t = "") : d > 0 && (t = t.slice(d));
    }
    function S(C, v, d, M) {
      if (M === 0) {
        c.length > 0 &&
          (e({
            type: "event",
            id: m,
            event: u || void 0,
            data: c.slice(0, -1),
          }),
          (c = ""),
          (m = void 0)),
          (u = void 0);
        return;
      }
      let P = d < 0,
        E = C.slice(v, v + (P ? M : d)),
        w = 0;
      P ? (w = M) : C[v + d + 1] === " " ? (w = d + 2) : (w = d + 1);
      let O = v + w,
        G = M - w,
        o = C.slice(O, O + G).toString();
      if (E === "data")
        c += o
          ? "".concat(
              o,
              `
`
            )
          : `
`;
      else if (E === "event") u = o;
      else if (E === "id" && !o.includes("\0")) m = o;
      else if (E === "retry") {
        let n = parseInt(o, 10);
        Number.isNaN(n) || e({ type: "reconnect-interval", value: n });
      }
    }
  }
  var gr = [239, 187, 191];
  function ko(e) {
    return gr.every((r, t) => e.charCodeAt(t) === r);
  }
  async function* cr(e) {
    let r = e.getReader();
    try {
      for (;;) {
        let { done: t, value: a } = await r.read();
        if (t) return;
        yield a;
      }
    } finally {
      r.releaseLock();
    }
  }
  async function ie(e, r) {
    let { onMessage: t, ...a } = r,
      s = await fetch(e, a);
    if (!s.ok) {
      let u = await s.json().catch(() => ({}));
      throw new Error(
        xe(u) ? `${s.status} ${s.statusText}` : JSON.stringify(u)
      );
    }
    let m = dr((u) => {
      u.type === "event" && t(u.data);
    });
    for await (let u of cr(s.body)) {
      let c = new TextDecoder().decode(u);
      m.feed(c);
    }
  }
  async function Ar(e, r, t, a) {
    return fetch(`https://chat.openai.com/backend-api${t}`, {
      method: r,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
      body: JSON.stringify(a),
    });
  }
  async function yr(e, r) {
    await Ar(e, "POST", "/conversation/message_feedback", r);
  }
  async function jo(e, r, t) {
    await Ar(e, "PATCH", `/conversation/${r}`, t);
  }
  var ve = "accessToken",
    we = new xr.default(10 * 1e3);
  async function me() {
    if (we.get(ve)) return we.get(ve);
    let e = await fetch("https://chat.openai.com/api/auth/session");
    if (e.status === 403) throw new Error("CLOUDFLARE");
    let r = await e.json().catch(() => ({}));
    if (!r.accessToken) throw new Error("UNAUTHORIZED");
    return we.set(ve, r.accessToken), r.accessToken;
  }
  async function So() {
    try {
      return (await pr()).chatgpt_webapp_model_name;
    } catch (e) {
      return console.error(e), null;
    }
  }
  var fe = class {
    constructor(r) {
      this.token = r;
      this.token = r;
    }
    async generateAnswer(r) {
      let t,
        a = () => {
          t && jo(this.token, t, { is_visible: !1 });
        };
      return (
        await ie("https://chat.openai.com/backend-api/conversation", {
          method: "POST",
          signal: r.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            action: "next",
            messages: [
              {
                id: ne(),
                role: "user",
                content: { content_type: "text", parts: [r.prompt] },
              },
            ],
            model: (await So()) || "text-davinci-002-render",
            parent_message_id: ne(),
          }),
          onMessage(s) {
            var c, x, h;
            if ((console.debug("sse message", s), s === "[DONE]")) {
              r.onEvent({ type: "done" }), a();
              return;
            }
            let m;
            try {
              m = JSON.parse(s);
            } catch (S) {
              console.error(S);
              return;
            }
            let u =
              (h =
                (x = (c = m.message) == null ? void 0 : c.content) == null
                  ? void 0
                  : x.parts) == null
                ? void 0
                : h[0];
            u &&
              ((t = m.conversation_id),
              r.onEvent({
                type: "answer",
                data: {
                  text: u,
                  messageId: m.message.id,
                  conversationId: m.conversation_id,
                },
              }));
          },
        }),
        { cleanup: a }
      );
    }
  };
  var le = class {
    constructor(r, t) {
      this.token = r;
      this.model = t;
      (this.token = r), (this.model = t);
    }
    buildPrompt(r) {
      return this.model.startsWith("text-chat-davinci")
        ? `Respond conversationally.<|im_end|>

User: ${r}<|im_sep|>
ChatGPT:`
        : r;
    }
    async generateAnswer(r) {
      let t = "";
      return (
        await ie("https://api.openai.com/v1/completions", {
          method: "POST",
          signal: r.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            model: this.model,
            prompt: this.buildPrompt(r.prompt),
            stream: !0,
            max_tokens: 2048,
          }),
          onMessage(a) {
            if ((console.debug("sse message", a), a === "[DONE]")) {
              r.onEvent({ type: "done" });
              return;
            }
            let s;
            try {
              s = JSON.parse(a);
              let m = s.choices[0].text;
              if (m === "<|im_end|>" || m === "<|im_sep|>") return;
              (t += m),
                r.onEvent({
                  type: "answer",
                  data: { text: t, messageId: s.id, conversationId: s.id },
                });
            } catch (m) {
              console.error(m);
              return;
            }
          },
        }),
        {}
      );
    }
  };
  async function Co(e, r) {
    let t = await tr(),
      a;
    if (t.provider === "chatgpt") {
      let u = await me();
      a = new fe(u);
    } else if (t.provider === "gpt3") {
      let { apiKey: u, model: c } = t.configs["gpt3"];
      a = new le(u, c);
    } else throw new Error(`Unknown provider ${t.provider}`);
    let s = new AbortController();
    e.onDisconnect.addListener(() => {
      s.abort(), m == null || m();
    });
    let { cleanup: m } = await a.generateAnswer({
      prompt: r,
      signal: s.signal,
      onEvent(u) {
        if (u.type === "done") {
          e.postMessage({ event: "DONE" });
          return;
        }
        e.postMessage(u.data);
      },
    });
  }
  U.default.runtime.onConnect.addListener((e) => {
    e.onMessage.addListener(async (r) => {
      console.debug("received msg", r);
      try {
        await Co(e, r.question);
      } catch (t) {
        console.error(t), e.postMessage({ error: t.message });
      }
    });
  });
  U.default.runtime.onMessage.addListener(async (e) => {
    if (e.type === "FEEDBACK") {
      let r = await me();
      await yr(r, e.data);
    } else if (e.type === "OPEN_OPTIONS_PAGE")
      U.default.runtime.openOptionsPage();
    else if (e.type === "GET_ACCESS_TOKEN") return me();
  });
  U.default.runtime.onInstalled.addListener((e) => {
    e.reason === "install" && U.default.runtime.openOptionsPage();
  });
})();
