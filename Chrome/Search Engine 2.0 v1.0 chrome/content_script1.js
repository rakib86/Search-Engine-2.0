(() => {
  "use strict";
  var e = {
      278: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return o(t, e), t;
            },
          i =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, s) {
                function i(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(i, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const a = s(n(218)),
          c = document.getElementsByName("q")[0];
        var u;
        c instanceof HTMLInputElement &&
          c.value &&
          "0" === (new URL(location.href).searchParams.get("start") || "0") &&
          ((u = c.value),
          i(void 0, void 0, void 0, function* () {
            const e = document.createElement("div");
            e.className = "dalle-container";
            const t = document.createElement("p");
            (t.className = "dalle-loading"),
              (t.innerText = "Loading AI generated images..."),
              e.appendChild(t),
              document.getElementById("islmp").prepend(e);
            const {
              apiKey: n,
              resolution: r,
              numberOfImages: o,
            } = yield chrome.storage.sync.get({
              apiKey: "",
              resolution: "1024x1024",
              numberOfImages: 5,
            });
            if ("" === n) {
              const t = document.createElement("p");
              (t.className = "dalle-warning"),
                (t.innerText =
                  "You need an API key to generate AI images here. You can get your API key at https://beta.openai.com/account/api-keys, and then set it in the extension settings."),
                e.appendChild(t);
            } else
              try {
                const t = yield ((e, t, n, r) =>
                    i(void 0, void 0, void 0, function* () {
                      return (yield a.default.post(
                        "https://api.openai.com/v1/images/generations",
                        { prompt: t, n, size: r },
                        { headers: { Authorization: `Bearer ${e}` } }
                      )).data.data.map((e) => e.url);
                    }))(n, u, Number(o), r),
                  s = document.createElement("div");
                (s.className = "dalle-images-container"),
                  e.appendChild(s),
                  t
                    .map((e) =>
                      ((e, t) => {
                        const n = document.createElement("img");
                        (n.className = "dalle-image"), (n.src = e), (n.alt = t);
                        const r = document.createElement("a");
                        return (
                          (r.href = e),
                          (r.className = "dalle-link"),
                          (r.target = "_blank"),
                          r.appendChild(n),
                          r
                        );
                      })(e, u)
                    )
                    .forEach((e) => {
                      s.appendChild(e);
                    });
              } catch (t) {
                const n = ((e) => {
                  var t;
                  const n = document.createElement("p");
                  return (
                    (n.className = "dalle-error"),
                    e instanceof a.AxiosError &&
                    401 ===
                      (null === (t = e.response) || void 0 === t
                        ? void 0
                        : t.status)
                      ? (n.innerText = "Incorrect API Key was provided.")
                      : (n.innerText = "Failed to generate images."),
                    n
                  );
                })(t);
                e.appendChild(n), console.log(t);
              }
            (t.className = "dalle-title"), (t.innerText = "AI Generated Images:");
          }));
      },
      218: (e, t, n) => {
        function r(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        const { toString: o } = Object.prototype,
          { getPrototypeOf: s } = Object,
          i =
            ((a = Object.create(null)),
            (e) => {
              const t = o.call(e);
              return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
            });
        var a;
        const c = (e) => ((e = e.toLowerCase()), (t) => i(t) === e),
          u = (e) => (t) => typeof t === e,
          { isArray: l } = Array,
          f = u("undefined"),
          d = c("ArrayBuffer"),
          p = u("string"),
          h = u("function"),
          m = u("number"),
          g = (e) => null !== e && "object" == typeof e,
          y = (e) => {
            if ("object" !== i(e)) return !1;
            const t = s(e);
            return !(
              (null !== t &&
                t !== Object.prototype &&
                null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          b = c("Date"),
          E = c("File"),
          w = c("Blob"),
          O = c("FileList"),
          v = c("URLSearchParams");
        function S(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, o;
          if (("object" != typeof e && (e = [e]), l(e)))
            for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              s = o.length;
            let i;
            for (r = 0; r < s; r++) (i = o[r]), t.call(null, e[i], i, e);
          }
        }
        function R(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const A =
            "undefined" == typeof self ? (void 0 === n.g ? void 0 : n.g) : self,
          j = (e) => !f(e) && e !== A,
          x =
            ((T = "undefined" != typeof Uint8Array && s(Uint8Array)),
            (e) => T && e instanceof T);
        var T;
        const N = c("HTMLFormElement"),
          _ = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          P = c("RegExp"),
          C = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            S(n, (n, o) => {
              !1 !== t(n, o, e) && (r[o] = n);
            }),
              Object.defineProperties(e, r);
          };
        var B = {
          isArray: l,
          isArrayBuffer: d,
          isBuffer: function (e) {
            return (
              null !== e &&
              !f(e) &&
              null !== e.constructor &&
              !f(e.constructor) &&
              h(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            const t = "[object FormData]";
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                o.call(e) === t ||
                (h(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && d(e.buffer)),
              t
            );
          },
          isString: p,
          isNumber: m,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: g,
          isPlainObject: y,
          isUndefined: f,
          isDate: b,
          isFile: E,
          isBlob: w,
          isRegExp: P,
          isFunction: h,
          isStream: (e) => g(e) && h(e.pipe),
          isURLSearchParams: v,
          isTypedArray: x,
          isFileList: O,
          forEach: S,
          merge: function e() {
            const { caseless: t } = (j(this) && this) || {},
              n = {},
              r = (r, o) => {
                const s = (t && R(n, o)) || o;
                y(n[s]) && y(r)
                  ? (n[s] = e(n[s], r))
                  : y(r)
                  ? (n[s] = e({}, r))
                  : l(r)
                  ? (n[s] = r.slice())
                  : (n[s] = r);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && S(arguments[e], r);
            return n;
          },
          extend: (e, t, n, { allOwnKeys: o } = {}) => (
            S(
              t,
              (t, o) => {
                n && h(t) ? (e[o] = r(t, n)) : (e[o] = t);
              },
              { allOwnKeys: o }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let o, i, a;
            const c = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
                (a = o[i]),
                  (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
              e = !1 !== n && s(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: i,
          kindOfTest: c,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (l(e)) return e;
            let t = e.length;
            if (!m(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: N,
          hasOwnProperty: _,
          hasOwnProp: _,
          reduceDescriptors: C,
          freezeMethods: (e) => {
            C(e, (t, n) => {
              if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              h(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return l(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: R,
          global: A,
          isContextDefined: j,
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (g(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const o = l(e) ? [] : {};
                    return (
                      S(e, (e, t) => {
                        const s = n(e, r + 1);
                        !f(s) && (o[t] = s);
                      }),
                      (t[r] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
        };
        function D(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        B.inherits(D, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: B.toJSONObject(this.config),
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        const L = D.prototype,
          F = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((e) => {
          F[e] = { value: e };
        }),
          Object.defineProperties(D, F),
          Object.defineProperty(L, "isAxiosError", { value: !0 }),
          (D.from = (e, t, n, r, o, s) => {
            const i = Object.create(L);
            return (
              B.toFlatObject(
                e,
                i,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e
              ),
              D.call(i, e.message, t, n, r, o),
              (i.cause = e),
              (i.name = e.name),
              s && Object.assign(i, s),
              i
            );
          });
        var U = "object" == typeof self ? self.FormData : window.FormData;
        function k(e) {
          return B.isPlainObject(e) || B.isArray(e);
        }
        function I(e) {
          return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function z(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = I(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        const M = B.toFlatObject(B, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        });
        function q(e, t, n) {
          if (!B.isObject(e)) throw new TypeError("target must be an object");
          t = t || new (U || FormData)();
          const r = (n = B.toFlatObject(
              n,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !B.isUndefined(t[e]);
              }
            )).metaTokens,
            o = n.visitor || l,
            s = n.dots,
            i = n.indexes,
            a =
              (n.Blob || ("undefined" != typeof Blob && Blob)) &&
              (c = t) &&
              B.isFunction(c.append) &&
              "FormData" === c[Symbol.toStringTag] &&
              c[Symbol.iterator];
          var c;
          if (!B.isFunction(o))
            throw new TypeError("visitor must be a function");
          function u(e) {
            if (null === e) return "";
            if (B.isDate(e)) return e.toISOString();
            if (!a && B.isBlob(e))
              throw new D("Blob is not supported. Use a Buffer instead.");
            return B.isArrayBuffer(e) || B.isTypedArray(e)
              ? a && "function" == typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          function l(e, n, o) {
            let a = e;
            if (e && !o && "object" == typeof e)
              if (B.endsWith(n, "{}"))
                (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
              else if (
                (B.isArray(e) &&
                  (function (e) {
                    return B.isArray(e) && !e.some(k);
                  })(e)) ||
                B.isFileList(e) ||
                (B.endsWith(n, "[]") && (a = B.toArray(e)))
              )
                return (
                  (n = I(n)),
                  a.forEach(function (e, r) {
                    !B.isUndefined(e) &&
                      null !== e &&
                      t.append(
                        !0 === i ? z([n], r, s) : null === i ? n : n + "[]",
                        u(e)
                      );
                  }),
                  !1
                );
            return !!k(e) || (t.append(z(o, n, s), u(e)), !1);
          }
          const f = [],
            d = Object.assign(M, {
              defaultVisitor: l,
              convertValue: u,
              isVisitable: k,
            });
          if (!B.isObject(e)) throw new TypeError("data must be an object");
          return (
            (function e(n, r) {
              if (!B.isUndefined(n)) {
                if (-1 !== f.indexOf(n))
                  throw Error("Circular reference detected in " + r.join("."));
                f.push(n),
                  B.forEach(n, function (n, s) {
                    !0 ===
                      (!(B.isUndefined(n) || null === n) &&
                        o.call(t, n, B.isString(s) ? s.trim() : s, r, d)) &&
                      e(n, r ? r.concat(s) : [s]);
                  }),
                  f.pop();
              }
            })(e),
            t
          );
        }
        function J(e) {
          const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(e).replace(
            /[!'()~]|%20|%00/g,
            function (e) {
              return t[e];
            }
          );
        }
        function K(e, t) {
          (this._pairs = []), e && q(e, this, t);
        }
        const H = K.prototype;
        function W(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function V(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || W,
            o = n && n.serialize;
          let s;
          if (
            ((s = o
              ? o(t, n)
              : B.isURLSearchParams(t)
              ? t.toString()
              : new K(t, n).toString(r)),
            s)
          ) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
          }
          return e;
        }
        (H.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (H.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, J);
                }
              : J;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + "=" + t(e[1]);
              }, "")
              .join("&");
          });
        var $ = class {
            constructor() {
              this.handlers = [];
            }
            use(e, t, n) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              B.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          X = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          G = "undefined" != typeof URLSearchParams ? URLSearchParams : K,
          Q = FormData;
        const Z = (() => {
            let e;
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== (e = navigator.product) &&
                  "NativeScript" !== e &&
                  "NS" !== e)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          })(),
          Y =
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" == typeof self.importScripts;
        var ee = {
          isBrowser: !0,
          classes: { URLSearchParams: G, FormData: Q, Blob },
          isStandardBrowserEnv: Z,
          isStandardBrowserWebWorkerEnv: Y,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
        function te(e) {
          function t(e, n, r, o) {
            let s = e[o++];
            const i = Number.isFinite(+s),
              a = o >= e.length;
            return (
              (s = !s && B.isArray(r) ? r.length : s),
              a
                ? (B.hasOwnProp(r, s) ? (r[s] = [r[s], n]) : (r[s] = n), !i)
                : ((r[s] && B.isObject(r[s])) || (r[s] = []),
                  t(e, n, r[s], o) &&
                    B.isArray(r[s]) &&
                    (r[s] = (function (e) {
                      const t = {},
                        n = Object.keys(e);
                      let r;
                      const o = n.length;
                      let s;
                      for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
                      return t;
                    })(r[s])),
                  !i)
            );
          }
          if (B.isFormData(e) && B.isFunction(e.entries)) {
            const n = {};
            return (
              B.forEachEntry(e, (e, r) => {
                t(
                  (function (e) {
                    return B.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                      "[]" === e[0] ? "" : e[1] || e[0]
                    );
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        }
        const ne = { "Content-Type": void 0 },
          re = {
            transitional: X,
            adapter: ["xhr", "http"],
            transformRequest: [
              function (e, t) {
                const n = t.getContentType() || "",
                  r = n.indexOf("application/json") > -1,
                  o = B.isObject(e);
                if (
                  (o && B.isHTMLForm(e) && (e = new FormData(e)),
                  B.isFormData(e))
                )
                  return r && r ? JSON.stringify(te(e)) : e;
                if (
                  B.isArrayBuffer(e) ||
                  B.isBuffer(e) ||
                  B.isStream(e) ||
                  B.isFile(e) ||
                  B.isBlob(e)
                )
                  return e;
                if (B.isArrayBufferView(e)) return e.buffer;
                if (B.isURLSearchParams(e))
                  return (
                    t.setContentType(
                      "application/x-www-form-urlencoded;charset=utf-8",
                      !1
                    ),
                    e.toString()
                  );
                let s;
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return (function (e, t) {
                      return q(
                        e,
                        new ee.classes.URLSearchParams(),
                        Object.assign(
                          {
                            visitor: function (e, t, n, r) {
                              return ee.isNode && B.isBuffer(e)
                                ? (this.append(t, e.toString("base64")), !1)
                                : r.defaultVisitor.apply(this, arguments);
                            },
                          },
                          t
                        )
                      );
                    })(e, this.formSerializer).toString();
                  if (
                    (s = B.isFileList(e)) ||
                    n.indexOf("multipart/form-data") > -1
                  ) {
                    const t = this.env && this.env.FormData;
                    return q(
                      s ? { "files[]": e } : e,
                      t && new t(),
                      this.formSerializer
                    );
                  }
                }
                return o || r
                  ? (t.setContentType("application/json", !1),
                    (function (e, t, n) {
                      if (B.isString(e))
                        try {
                          return (0, JSON.parse)(e), B.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e;
              },
            ],
            transformResponse: [
              function (e) {
                const t = this.transitional || re.transitional,
                  n = t && t.forcedJSONParsing,
                  r = "json" === this.responseType;
                if (e && B.isString(e) && ((n && !this.responseType) || r)) {
                  const n = !(t && t.silentJSONParsing) && r;
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (n) {
                      if ("SyntaxError" === e.name)
                        throw D.from(
                          e,
                          D.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response
                        );
                      throw e;
                    }
                  }
                }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: ee.classes.FormData, Blob: ee.classes.Blob },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        B.forEach(["delete", "get", "head"], function (e) {
          re.headers[e] = {};
        }),
          B.forEach(["post", "put", "patch"], function (e) {
            re.headers[e] = B.merge(ne);
          });
        var oe = re;
        const se = B.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          ie = Symbol("internals");
        function ae(e) {
          return e && String(e).trim().toLowerCase();
        }
        function ce(e) {
          return !1 === e || null == e
            ? e
            : B.isArray(e)
            ? e.map(ce)
            : String(e);
        }
        function ue(e, t, n, r) {
          return B.isFunction(r)
            ? r.call(this, t, n)
            : B.isString(t)
            ? B.isString(r)
              ? -1 !== t.indexOf(r)
              : B.isRegExp(r)
              ? r.test(t)
              : void 0
            : void 0;
        }
        class le {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = ae(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const s = B.findKey(r, o);
              (!s ||
                void 0 === r[s] ||
                !0 === n ||
                (void 0 === n && !1 !== r[s])) &&
                (r[s || t] = ce(e));
            }
            const s = (e, t) => B.forEach(e, (e, n) => o(e, n, t));
            return (
              B.isPlainObject(e) || e instanceof this.constructor
                ? s(e, t)
                : B.isString(e) &&
                  (e = e.trim()) &&
                  !/^[-_a-zA-Z]+$/.test(e.trim())
                ? s(
                    ((e) => {
                      const t = {};
                      let n, r, o;
                      return (
                        e &&
                          e.split("\n").forEach(function (e) {
                            (o = e.indexOf(":")),
                              (n = e.substring(0, o).trim().toLowerCase()),
                              (r = e.substring(o + 1).trim()),
                              !n ||
                                (t[n] && se[n]) ||
                                ("set-cookie" === n
                                  ? t[n]
                                    ? t[n].push(r)
                                    : (t[n] = [r])
                                  : (t[n] = t[n] ? t[n] + ", " + r : r));
                          }),
                        t
                      );
                    })(e),
                    t
                  )
                : null != e && o(t, e, n),
              this
            );
          }
          get(e, t) {
            if ((e = ae(e))) {
              const n = B.findKey(this, e);
              if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t)
                  return (function (e) {
                    const t = Object.create(null),
                      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                    return t;
                  })(e);
                if (B.isFunction(t)) return t.call(this, e, n);
                if (B.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if ((e = ae(e))) {
              const n = B.findKey(this, e);
              return !(!n || (t && !ue(0, this[n], n, t)));
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = ae(e))) {
                const o = B.findKey(n, e);
                !o || (t && !ue(0, n[o], o, t)) || (delete n[o], (r = !0));
              }
            }
            return B.isArray(e) ? e.forEach(o) : o(e), r;
          }
          clear() {
            return Object.keys(this).forEach(this.delete.bind(this));
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              B.forEach(this, (r, o) => {
                const s = B.findKey(n, o);
                if (s) return (t[s] = ce(r)), void delete t[o];
                const i = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(
                          /([a-z\d])(\w*)/g,
                          (e, t, n) => t.toUpperCase() + n
                        );
                    })(o)
                  : String(o).trim();
                i !== o && delete t[o], (t[i] = ce(r)), (n[i] = !0);
              }),
              this
            );
          }
          concat(...e) {
            return this.constructor.concat(this, ...e);
          }
          toJSON(e) {
            const t = Object.create(null);
            return (
              B.forEach(this, (n, r) => {
                null != n &&
                  !1 !== n &&
                  (t[r] = e && B.isArray(n) ? n.join(", ") : n);
              }),
              t
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([e, t]) => e + ": " + t)
              .join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e) => n.set(e)), n;
          }
          static accessor(e) {
            const t = (this[ie] = this[ie] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = ae(e);
              t[r] ||
                ((function (e, t) {
                  const n = B.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach((r) => {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, o) {
                        return this[r].call(this, t, e, n, o);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return B.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        le.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
        ]),
          B.freezeMethods(le.prototype),
          B.freezeMethods(le);
        var fe = le;
        function de(e, t) {
          const n = this || oe,
            r = t || n,
            o = fe.from(r.headers);
          let s = r.data;
          return (
            B.forEach(e, function (e) {
              s = e.call(n, s, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            s
          );
        }
        function pe(e) {
          return !(!e || !e.__CANCEL__);
        }
        function he(e, t, n) {
          D.call(this, null == e ? "canceled" : e, D.ERR_CANCELED, t, n),
            (this.name = "CanceledError");
        }
        B.inherits(he, D, { __CANCEL__: !0 });
        var me = ee.isStandardBrowserEnv
          ? {
              write: function (e, t, n, r, o, s) {
                const i = [];
                i.push(e + "=" + encodeURIComponent(t)),
                  B.isNumber(n) &&
                    i.push("expires=" + new Date(n).toGMTString()),
                  B.isString(r) && i.push("path=" + r),
                  B.isString(o) && i.push("domain=" + o),
                  !0 === s && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read: function (e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
        function ge(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t
                  ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                  : e;
              })(e, t)
            : t;
        }
        var ye = ee.isStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = B.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        function be(e, t) {
          let n = 0;
          const r = (function (e, t) {
            e = e || 10;
            const n = new Array(e),
              r = new Array(e);
            let o,
              s = 0,
              i = 0;
            return (
              (t = void 0 !== t ? t : 1e3),
              function (a) {
                const c = Date.now(),
                  u = r[i];
                o || (o = c), (n[s] = a), (r[s] = c);
                let l = i,
                  f = 0;
                for (; l !== s; ) (f += n[l++]), (l %= e);
                if (
                  ((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)
                )
                  return;
                const d = u && c - u;
                return d ? Math.round((1e3 * f) / d) : void 0;
              }
            );
          })(50, 250);
          return (o) => {
            const s = o.loaded,
              i = o.lengthComputable ? o.total : void 0,
              a = s - n,
              c = r(a);
            n = s;
            const u = {
              loaded: s,
              total: i,
              progress: i ? s / i : void 0,
              bytes: a,
              rate: c || void 0,
              estimated: c && i && s <= i ? (i - s) / c : void 0,
              event: o,
            };
            (u[t ? "download" : "upload"] = !0), e(u);
          };
        }
        const Ee = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                let r = e.data;
                const o = fe.from(e.headers).normalize(),
                  s = e.responseType;
                let i;
                function a() {
                  e.cancelToken && e.cancelToken.unsubscribe(i),
                    e.signal && e.signal.removeEventListener("abort", i);
                }
                B.isFormData(r) &&
                  (ee.isStandardBrowserEnv ||
                    ee.isStandardBrowserWebWorkerEnv) &&
                  o.setContentType(!1);
                let c = new XMLHttpRequest();
                if (e.auth) {
                  const t = e.auth.username || "",
                    n = e.auth.password
                      ? unescape(encodeURIComponent(e.auth.password))
                      : "";
                  o.set("Authorization", "Basic " + btoa(t + ":" + n));
                }
                const u = ge(e.baseURL, e.url);
                function l() {
                  if (!c) return;
                  const r = fe.from(
                    "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new D(
                            "Request failed with status code " + n.status,
                            [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), a();
                    },
                    function (e) {
                      n(e), a();
                    },
                    {
                      data:
                        s && "text" !== s && "json" !== s
                          ? c.response
                          : c.responseText,
                      status: c.status,
                      statusText: c.statusText,
                      headers: r,
                      config: e,
                      request: c,
                    }
                  ),
                    (c = null);
                }
                if (
                  (c.open(
                    e.method.toUpperCase(),
                    V(u, e.params, e.paramsSerializer),
                    !0
                  ),
                  (c.timeout = e.timeout),
                  "onloadend" in c
                    ? (c.onloadend = l)
                    : (c.onreadystatechange = function () {
                        c &&
                          4 === c.readyState &&
                          (0 !== c.status ||
                            (c.responseURL &&
                              0 === c.responseURL.indexOf("file:"))) &&
                          setTimeout(l);
                      }),
                  (c.onabort = function () {
                    c &&
                      (n(new D("Request aborted", D.ECONNABORTED, e, c)),
                      (c = null));
                  }),
                  (c.onerror = function () {
                    n(new D("Network Error", D.ERR_NETWORK, e, c)), (c = null);
                  }),
                  (c.ontimeout = function () {
                    let t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded";
                    const r = e.transitional || X;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(
                        new D(
                          t,
                          r.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                          e,
                          c
                        )
                      ),
                      (c = null);
                  }),
                  ee.isStandardBrowserEnv)
                ) {
                  const t =
                    (e.withCredentials || ye(u)) &&
                    e.xsrfCookieName &&
                    me.read(e.xsrfCookieName);
                  t && o.set(e.xsrfHeaderName, t);
                }
                void 0 === r && o.setContentType(null),
                  "setRequestHeader" in c &&
                    B.forEach(o.toJSON(), function (e, t) {
                      c.setRequestHeader(t, e);
                    }),
                  B.isUndefined(e.withCredentials) ||
                    (c.withCredentials = !!e.withCredentials),
                  s && "json" !== s && (c.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress &&
                    c.addEventListener(
                      "progress",
                      be(e.onDownloadProgress, !0)
                    ),
                  "function" == typeof e.onUploadProgress &&
                    c.upload &&
                    c.upload.addEventListener(
                      "progress",
                      be(e.onUploadProgress)
                    ),
                  (e.cancelToken || e.signal) &&
                    ((i = (t) => {
                      c &&
                        (n(!t || t.type ? new he(null, e, c) : t),
                        c.abort(),
                        (c = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(i),
                    e.signal &&
                      (e.signal.aborted
                        ? i()
                        : e.signal.addEventListener("abort", i)));
                const f = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(u);
                f && -1 === ee.protocols.indexOf(f)
                  ? n(
                      new D(
                        "Unsupported protocol " + f + ":",
                        D.ERR_BAD_REQUEST,
                        e
                      )
                    )
                  : c.send(r || null);
              });
            },
        };
        B.forEach(Ee, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        function we(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new he(null, e);
        }
        function Oe(e) {
          return (
            we(e),
            (e.headers = fe.from(e.headers)),
            (e.data = de.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) &&
              e.headers.setContentType("application/x-www-form-urlencoded", !1),
            ((e) => {
              e = B.isArray(e) ? e : [e];
              const { length: t } = e;
              let n, r;
              for (
                let o = 0;
                o < t &&
                ((n = e[o]), !(r = B.isString(n) ? Ee[n.toLowerCase()] : n));
                o++
              );
              if (!r) {
                if (!1 === r)
                  throw new D(
                    `Adapter ${n} is not supported by the environment`,
                    "ERR_NOT_SUPPORT"
                  );
                throw new Error(
                  B.hasOwnProp(Ee, n)
                    ? `Adapter '${n}' is not available in the build`
                    : `Unknown adapter '${n}'`
                );
              }
              if (!B.isFunction(r))
                throw new TypeError("adapter is not a function");
              return r;
            })(e.adapter || oe.adapter)(e).then(
              function (t) {
                return (
                  we(e),
                  (t.data = de.call(e, e.transformResponse, t)),
                  (t.headers = fe.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  pe(t) ||
                    (we(e),
                    t &&
                      t.response &&
                      ((t.response.data = de.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = fe.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const ve = (e) => (e instanceof fe ? e.toJSON() : e);
        function Se(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return B.isPlainObject(e) && B.isPlainObject(t)
              ? B.merge.call({ caseless: n }, e, t)
              : B.isPlainObject(t)
              ? B.merge({}, t)
              : B.isArray(t)
              ? t.slice()
              : t;
          }
          function o(e, t, n) {
            return B.isUndefined(t)
              ? B.isUndefined(e)
                ? void 0
                : r(void 0, e, n)
              : r(e, t, n);
          }
          function s(e, t) {
            if (!B.isUndefined(t)) return r(void 0, t);
          }
          function i(e, t) {
            return B.isUndefined(t)
              ? B.isUndefined(e)
                ? void 0
                : r(void 0, e)
              : r(void 0, t);
          }
          function a(n, o, s) {
            return s in t ? r(n, o) : s in e ? r(void 0, n) : void 0;
          }
          const c = {
            url: s,
            method: s,
            data: s,
            baseURL: i,
            transformRequest: i,
            transformResponse: i,
            paramsSerializer: i,
            timeout: i,
            timeoutMessage: i,
            withCredentials: i,
            adapter: i,
            responseType: i,
            xsrfCookieName: i,
            xsrfHeaderName: i,
            onUploadProgress: i,
            onDownloadProgress: i,
            decompress: i,
            maxContentLength: i,
            maxBodyLength: i,
            beforeRedirect: i,
            transport: i,
            httpAgent: i,
            httpsAgent: i,
            cancelToken: i,
            socketPath: i,
            responseEncoding: i,
            validateStatus: a,
            headers: (e, t) => o(ve(e), ve(t), !0),
          };
          return (
            B.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
              const s = c[r] || o,
                i = s(e[r], t[r], r);
              (B.isUndefined(i) && s !== a) || (n[r] = i);
            }),
            n
          );
        }
        const Re = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (e, t) => {
            Re[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        const Ae = {};
        Re.transitional = function (e, t, n) {
          function r(e, t) {
            return (
              "[Axios v1.2.1] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return (n, o, s) => {
            if (!1 === e)
              throw new D(
                r(o, " has been removed" + (t ? " in " + t : "")),
                D.ERR_DEPRECATED
              );
            return (
              t &&
                !Ae[o] &&
                ((Ae[o] = !0),
                console.warn(
                  r(
                    o,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, o, s)
            );
          };
        };
        var je = {
          assertOptions: function (e, t, n) {
            if ("object" != typeof e)
              throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0; ) {
              const s = r[o],
                i = t[s];
              if (i) {
                const t = e[s],
                  n = void 0 === t || i(t, s, e);
                if (!0 !== n)
                  throw new D(
                    "option " + s + " must be " + n,
                    D.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new D("Unknown option " + s, D.ERR_BAD_OPTION);
            }
          },
          validators: Re,
        };
        const xe = je.validators;
        class Te {
          constructor(e) {
            (this.defaults = e),
              (this.interceptors = { request: new $(), response: new $() });
          }
          request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
              (t = Se(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            let s;
            void 0 !== n &&
              je.assertOptions(
                n,
                {
                  silentJSONParsing: xe.transitional(xe.boolean),
                  forcedJSONParsing: xe.transitional(xe.boolean),
                  clarifyTimeoutError: xe.transitional(xe.boolean),
                },
                !1
              ),
              void 0 !== r &&
                je.assertOptions(
                  r,
                  { encode: xe.function, serialize: xe.function },
                  !0
                ),
              (t.method = (
                t.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase()),
              (s = o && B.merge(o.common, o[t.method])),
              s &&
                B.forEach(
                  ["delete", "get", "head", "post", "put", "patch", "common"],
                  (e) => {
                    delete o[e];
                  }
                ),
              (t.headers = fe.concat(s, o));
            const i = [];
            let a = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((a = a && e.synchronous), i.unshift(e.fulfilled, e.rejected));
            });
            const c = [];
            let u;
            this.interceptors.response.forEach(function (e) {
              c.push(e.fulfilled, e.rejected);
            });
            let l,
              f = 0;
            if (!a) {
              const e = [Oe.bind(this), void 0];
              for (
                e.unshift.apply(e, i),
                  e.push.apply(e, c),
                  l = e.length,
                  u = Promise.resolve(t);
                f < l;

              )
                u = u.then(e[f++], e[f++]);
              return u;
            }
            l = i.length;
            let d = t;
            for (f = 0; f < l; ) {
              const e = i[f++],
                t = i[f++];
              try {
                d = e(d);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              u = Oe.call(this, d);
            } catch (e) {
              return Promise.reject(e);
            }
            for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
            return u;
          }
          getUri(e) {
            return V(
              ge((e = Se(this.defaults, e)).baseURL, e.url),
              e.params,
              e.paramsSerializer
            );
          }
        }
        B.forEach(["delete", "get", "head", "options"], function (e) {
          Te.prototype[e] = function (t, n) {
            return this.request(
              Se(n || {}, { method: e, url: t, data: (n || {}).data })
            );
          };
        }),
          B.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  Se(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (Te.prototype[e] = t()), (Te.prototype[e + "Form"] = t(!0));
          });
        var Ne = Te;
        class _e {
          constructor(e) {
            if ("function" != typeof e)
              throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            const n = this;
            this.promise.then((e) => {
              if (!n._listeners) return;
              let t = n._listeners.length;
              for (; t-- > 0; ) n._listeners[t](e);
              n._listeners = null;
            }),
              (this.promise.then = (e) => {
                let t;
                const r = new Promise((e) => {
                  n.subscribe(e), (t = e);
                }).then(e);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(t);
                  }),
                  r
                );
              }),
              e(function (e, r, o) {
                n.reason || ((n.reason = new he(e, r, o)), t(n.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          static source() {
            let e;
            return {
              token: new _e(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }
        }
        var Pe = _e;
        const Ce = (function e(t) {
          const n = new Ne(t),
            o = r(Ne.prototype.request, n);
          return (
            B.extend(o, Ne.prototype, n, { allOwnKeys: !0 }),
            B.extend(o, n, null, { allOwnKeys: !0 }),
            (o.create = function (n) {
              return e(Se(t, n));
            }),
            o
          );
        })(oe);
        (Ce.Axios = Ne),
          (Ce.CanceledError = he),
          (Ce.CancelToken = Pe),
          (Ce.isCancel = pe),
          (Ce.VERSION = "1.2.1"),
          (Ce.toFormData = q),
          (Ce.AxiosError = D),
          (Ce.Cancel = Ce.CanceledError),
          (Ce.all = function (e) {
            return Promise.all(e);
          }),
          (Ce.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Ce.isAxiosError = function (e) {
            return B.isObject(e) && !0 === e.isAxiosError;
          }),
          (Ce.mergeConfig = Se),
          (Ce.AxiosHeaders = fe),
          (Ce.formToJSON = (e) => te(B.isHTMLForm(e) ? new FormData(e) : e)),
          (Ce.default = Ce),
          (e.exports = Ce);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { exports: {} });
    return e[r].call(s.exports, s, s.exports, n), s.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    n(278);
})();
