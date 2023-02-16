"use strict";
(() => {
  var K = Object.create;
  var O = Object.defineProperty;
  var Y = Object.getOwnPropertyDescriptor;
  var J = Object.getOwnPropertyNames;
  var Q = Object.getPrototypeOf,
    X = Object.prototype.hasOwnProperty;
  var T = (n, r) => () => (r || n((r = { exports: {} }).exports, r), r.exports);
  var ee = (n, r, a, m) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let o of J(r))
        !X.call(n, o) &&
          o !== a &&
          O(n, o, {
            get: () => r[o],
            enumerable: !(m = Y(r, o)) || m.enumerable,
          });
    return n;
  };
  var L = (n, r, a) => (
    (a = n != null ? K(Q(n)) : {}),
    ee(
      r || !n || !n.__esModule
        ? O(a, "default", { value: n, enumerable: !0 })
        : a,
      n
    )
  );
  var j = T((oe, $) => {
    "use strict";
    $.exports = () => {
      let n = {};
      return (
        (n.promise = new Promise((r, a) => {
          (n.resolve = r), (n.reject = a);
        })),
        n
      );
    };
  });
  var D = T((me, B) => {
    "use strict";
    var re = j();
    function se(n, r = "maxAge") {
      let a,
        m,
        o,
        w = async () => {
          if (a !== void 0) return;
          let d = async (f) => {
            o = re();
            let b = f[1][r] - Date.now();
            if (b <= 0) {
              n.delete(f[0]), o.resolve();
              return;
            }
            return (
              (a = f[0]),
              (m = setTimeout(() => {
                n.delete(f[0]), o && o.resolve();
              }, b)),
              typeof m.unref == "function" && m.unref(),
              o.promise
            );
          };
          try {
            for (let f of n) await d(f);
          } catch {}
          a = void 0;
        },
        E = () => {
          (a = void 0),
            m !== void 0 && (clearTimeout(m), (m = void 0)),
            o !== void 0 && (o.reject(void 0), (o = void 0));
        },
        y = n.set.bind(n);
      return (
        (n.set = (d, f) => {
          n.has(d) && n.delete(d);
          let b = y(d, f);
          return a && a === d && E(), w(), b;
        }),
        w(),
        n
      );
    }
    B.exports = se;
  });
  var q = T((le, I) => {
    "use strict";
    var ne = D(),
      _ = class {
        constructor(r, a) {
          if (
            ((this.maxAge = r),
            (this[Symbol.toStringTag] = "Map"),
            (this.data = new Map()),
            ne(this.data),
            a)
          )
            for (let [m, o] of a) this.set(m, o);
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
          let a = this.data.get(r);
          if (a) return a.data;
        }
        set(r, a) {
          return (
            this.data.set(r, { maxAge: Date.now() + this.maxAge, data: a }),
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
        forEach(r, a) {
          for (let [m, o] of this.entries()) r.apply(a, [o, m, this]);
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        *createIterator(r) {
          for (let a of this.data.entries()) yield r(a);
        }
      };
    I.exports = _;
  });
  var W = T((F, U) => {
    (function (n, r) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], r);
      else if (typeof F < "u") r(U);
      else {
        var a = { exports: {} };
        r(a), (n.browser = a.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F,
      function (n) {
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
            a = (m) => {
              let o = {
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
              if (Object.keys(o).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class w extends WeakMap {
                constructor(s, i = void 0) {
                  super(i), (this.createItem = s);
                }
                get(s) {
                  return (
                    this.has(s) || this.set(s, this.createItem(s)), super.get(s)
                  );
                }
              }
              let E = (e) =>
                  e && typeof e == "object" && typeof e.then == "function",
                y =
                  (e, s) =>
                  (...i) => {
                    m.runtime.lastError
                      ? e.reject(new Error(m.runtime.lastError.message))
                      : s.singleCallbackArg ||
                        (i.length <= 1 && s.singleCallbackArg !== !1)
                      ? e.resolve(i[0])
                      : e.resolve(i);
                  },
                d = (e) => (e == 1 ? "argument" : "arguments"),
                f = (e, s) =>
                  function (g, ...A) {
                    if (A.length < s.minArgs)
                      throw new Error(
                        `Expected at least ${s.minArgs} ${d(
                          s.minArgs
                        )} for ${e}(), got ${A.length}`
                      );
                    if (A.length > s.maxArgs)
                      throw new Error(
                        `Expected at most ${s.maxArgs} ${d(
                          s.maxArgs
                        )} for ${e}(), got ${A.length}`
                      );
                    return new Promise((c, u) => {
                      if (s.fallbackToNoCallback)
                        try {
                          g[e](...A, y({ resolve: c, reject: u }, s));
                        } catch (t) {
                          console.warn(
                            `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            t
                          ),
                            g[e](...A),
                            (s.fallbackToNoCallback = !1),
                            (s.noCallback = !0),
                            c();
                        }
                      else
                        s.noCallback
                          ? (g[e](...A), c())
                          : g[e](...A, y({ resolve: c, reject: u }, s));
                    });
                  },
                b = (e, s, i) =>
                  new Proxy(s, {
                    apply(g, A, c) {
                      return i.call(A, e, ...c);
                    },
                  }),
                k = Function.call.bind(Object.prototype.hasOwnProperty),
                v = (e, s = {}, i = {}) => {
                  let g = Object.create(null),
                    A = {
                      has(u, t) {
                        return t in e || t in g;
                      },
                      get(u, t, x) {
                        if (t in g) return g[t];
                        if (!(t in e)) return;
                        let l = e[t];
                        if (typeof l == "function")
                          if (typeof s[t] == "function") l = b(e, e[t], s[t]);
                          else if (k(i, t)) {
                            let p = f(t, i[t]);
                            l = b(e, e[t], p);
                          } else l = l.bind(e);
                        else if (
                          typeof l == "object" &&
                          l !== null &&
                          (k(s, t) || k(i, t))
                        )
                          l = v(l, s[t], i[t]);
                        else if (k(i, "*")) l = v(l, s[t], i["*"]);
                        else
                          return (
                            Object.defineProperty(g, t, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return e[t];
                              },
                              set(p) {
                                e[t] = p;
                              },
                            }),
                            l
                          );
                        return (g[t] = l), l;
                      },
                      set(u, t, x, l) {
                        return t in g ? (g[t] = x) : (e[t] = x), !0;
                      },
                      defineProperty(u, t, x) {
                        return Reflect.defineProperty(g, t, x);
                      },
                      deleteProperty(u, t) {
                        return Reflect.deleteProperty(g, t);
                      },
                    },
                    c = Object.create(e);
                  return new Proxy(c, A);
                },
                S = (e) => ({
                  addListener(s, i, ...g) {
                    s.addListener(e.get(i), ...g);
                  },
                  hasListener(s, i) {
                    return s.hasListener(e.get(i));
                  },
                  removeListener(s, i) {
                    s.removeListener(e.get(i));
                  },
                }),
                G = new w((e) =>
                  typeof e != "function"
                    ? e
                    : function (i) {
                        let g = v(
                          i,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        e(g);
                      }
                ),
                N = new w((e) =>
                  typeof e != "function"
                    ? e
                    : function (i, g, A) {
                        let c = !1,
                          u,
                          t = new Promise((C) => {
                            u = function (h) {
                              (c = !0), C(h);
                            };
                          }),
                          x;
                        try {
                          x = e(i, g, u);
                        } catch (C) {
                          x = Promise.reject(C);
                        }
                        let l = x !== !0 && E(x);
                        if (x !== !0 && !l && !c) return !1;
                        let p = (C) => {
                          C.then(
                            (h) => {
                              A(h);
                            },
                            (h) => {
                              let M;
                              h &&
                              (h instanceof Error ||
                                typeof h.message == "string")
                                ? (M = h.message)
                                : (M = "An unexpected error occurred"),
                                A({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: M,
                                });
                            }
                          ).catch((h) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              h
                            );
                          });
                        };
                        return p(l ? x : t), !0;
                      }
                ),
                Z = ({ reject: e, resolve: s }, i) => {
                  m.runtime.lastError
                    ? m.runtime.lastError.message === r
                      ? s()
                      : e(new Error(m.runtime.lastError.message))
                    : i && i.__mozWebExtensionPolyfillReject__
                    ? e(new Error(i.message))
                    : s(i);
                },
                R = (e, s, i, ...g) => {
                  if (g.length < s.minArgs)
                    throw new Error(
                      `Expected at least ${s.minArgs} ${d(
                        s.minArgs
                      )} for ${e}(), got ${g.length}`
                    );
                  if (g.length > s.maxArgs)
                    throw new Error(
                      `Expected at most ${s.maxArgs} ${d(
                        s.maxArgs
                      )} for ${e}(), got ${g.length}`
                    );
                  return new Promise((A, c) => {
                    let u = Z.bind(null, { resolve: A, reject: c });
                    g.push(u), i.sendMessage(...g);
                  });
                },
                H = {
                  devtools: { network: { onRequestFinished: S(G) } },
                  runtime: {
                    onMessage: S(N),
                    onMessageExternal: S(N),
                    sendMessage: R.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: R.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                P = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (o.privacy = {
                  network: { "*": P },
                  services: { "*": P },
                  websites: { "*": P },
                }),
                v(m, H, o)
              );
            };
          n.exports = a(chrome);
        } else n.exports = globalThis.browser;
      }
    );
  });
  var V = L(q()),
    z = L(W()),
    te = new V.default(10 * 1e3),
    ae = "accessToken";
  async function ie() {
    let n = 0,
      r = "";
    if (te.get(ae)) n = 0;
    else {
      let a = await fetch("https://chat.openai.com/api/auth/session");
      a.status === 403
        ? (n = "cloudflare")
        : (await a.json().catch(() => ({}))).accessToken ||
          (n = "unauthorized");
    }
    return (
      n == "cloudflare"
        ? (r = `
            Please login at
            <a href="https://chat.openai.com" target="_blank" rel="noreferrer">
            chat.openai.com
            </a>
            or go to Search Engine 2.0 setting protocol
            <a href="options1.html" target="_blank" rel="noreferrer">
            setting
            </a>
        `)
        : n == "unauthorized" &&
          (r = `
            Please login at <a href="https://chat.openai.com" target="_blank" rel="noreferrer">
            chat.openai.com
            </a>
        `),
      n
        ? (r = `
    <div class="extension-body">
      <div class="notice">
          <svg viewBox="-2 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_iconCarrier">
                  <path
                      d="M13.6466 31.9999C16.1714 31.9999 18.2181 29.9532 18.2181 27.4285C18.2181 24.9038 16.1714 22.8571 13.6466 22.8571C11.1219 22.8571 9.0752 24.9038 9.0752 27.4285C9.0752 29.9532 11.1219 31.9999 13.6466 31.9999Z"
                      fill="#FF7700"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.1892 6.17181C19.8652 4.84783 18.3669 3.94466 16.6944 3.46231V3.04762C16.6944 2.20605 16.3968 1.48771 15.8018 0.892626C15.2066 0.297542 14.4883 0 13.6467 0C12.8052 0 12.0868 0.297542 11.4917 0.892626C10.8967 1.48771 10.5991 2.20605 10.5991 3.04762V3.46231C8.92652 3.94466 7.42824 4.84783 6.10426 6.17181C4.02147 8.2546 2.98007 10.7688 2.98007 13.7143V21.9429L0.491411 24.9292C0.302152 25.1564 0.184215 25.4165 0.137601 25.7097C0.108531 26.0029 0.156694 26.2834 0.282088 26.5512C0.407483 26.8188 0.594914 27.032 0.844382 27.1906C1.09385 27.3492 1.3664 27.4286 1.66203 27.4286H25.6314C25.927 27.4286 26.1996 27.3492 26.4491 27.1906C26.6986 27.032 26.886 26.8188 27.0114 26.5512C27.1368 26.2834 27.1806 26.0029 27.1427 25.7097C27.1048 25.4165 26.9912 25.1564 26.802 24.9292L24.3134 21.9429V13.7143C24.3134 10.7688 23.272 8.2546 21.1892 6.17181Z"
                      fill="url(#paint0_radial_103_1590)"></path>
                  <defs>
                      <radialGradient id="paint0_radial_103_1590" cx="0" cy="0" r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(9.12995 7.54174) rotate(53.71) scale(21.2682 20.9501)">
                          <stop stop-color="#FADF73"></stop>
                          <stop offset="0.457142" stop-color="#FFD500"></stop>
                          <stop offset="1" stop-color="#FC9900"></stop>
                      </radialGradient>
                  </defs>
              </g>
          </svg>
          <div>
            ${r}
          </div>
      </div>
    </div>`)
        : (r =
            '<iframe scrolling="no" src="https://chat.openai.com/chat" frameborder="0" style="width: 100%;height:580px;"></iframe>'),
      r
    );
  }
  (async function () {
    let n = await ie();
    document.getElementById("iframe").innerHTML = n;
  })();
  document.getElementsByClassName("setting")[0].onclick = function () {
    console.log("Setting"),
      z.default.runtime.sendMessage({ type: "OPEN_OPTIONS_PAGE" });
  };
})();
