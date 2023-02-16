"use strict";
(() => {
  var Ol = Object.create;
  var B5 = Object.defineProperty;
  var Dl = Object.getOwnPropertyDescriptor;
  var Hl = Object.getOwnPropertyNames;
  var Vl = Object.getPrototypeOf,
    Fl = Object.prototype.hasOwnProperty;
  var U5 = (e, t) => () => (e && (t = e((e = 0))), t);
  var Pe = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    i0 = (e, t) => {
      for (var n in t) B5(e, n, { get: t[n], enumerable: !0 });
    },
    na = (e, t, n, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of Hl(t))
          !Fl.call(e, r) &&
            r !== n &&
            B5(e, r, {
              get: () => t[r],
              enumerable: !(a = Dl(t, r)) || a.enumerable,
            });
      return e;
    };
  var Be = (e, t, n) => (
      (n = e != null ? Ol(Vl(e)) : {}),
      na(
        t || !e || !e.__esModule
          ? B5(n, "default", { value: e, enumerable: !0 })
          : n,
        e
      )
    ),
    Pl = (e) => na(B5({}, "__esModule", { value: !0 }), e);
  function ht(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function ua(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Ue(e, t, n) {
    var a,
      r,
      o,
      i = {};
    for (o in t)
      o == "key" ? (a = t[o]) : o == "ref" ? (r = t[o]) : (i[o] = t[o]);
    if (
      (arguments.length > 2 &&
        (i.children = arguments.length > 3 ? g5.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (o in e.defaultProps) i[o] === void 0 && (i[o] = e.defaultProps[o]);
    return m5(e, i, a, r, null);
  }
  function m5(e, t, n, a, r) {
    var o = {
      type: e,
      props: t,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: r ?? ++la,
    };
    return r == null && P.vnode != null && P.vnode(o), o;
  }
  function W5() {
    return { current: null };
  }
  function $e(e) {
    return e.children;
  }
  function Qe(e, t) {
    (this.props = e), (this.context = t);
  }
  function f5(e, t) {
    if (t == null) return e.__ ? f5(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? f5(e) : null;
  }
  function da(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return da(e);
    }
  }
  function l0(e) {
    ((!e.__d && (e.__d = !0) && h5.push(e) && !q5.__r++) ||
      aa !== P.debounceRendering) &&
      ((aa = P.debounceRendering) || setTimeout)(q5);
  }
  function q5() {
    for (var e; (q5.__r = h5.length); )
      (e = h5.sort(function (t, n) {
        return t.__v.__b - n.__v.__b;
      })),
        (h5 = []),
        e.some(function (t) {
          var n, a, r, o, i, l;
          t.__d &&
            ((i = (o = (n = t).__v).__e),
            (l = n.__P) &&
              ((a = []),
              ((r = ht({}, o)).__v = o.__v + 1),
              c0(
                l,
                o,
                r,
                n.__n,
                l.ownerSVGElement !== void 0,
                o.__h != null ? [i] : null,
                a,
                i ?? f5(o),
                o.__h
              ),
              fa(a, o),
              o.__e != i && da(o)));
        });
  }
  function pa(e, t, n, a, r, o, i, l, s, u) {
    var c,
      h,
      d,
      p,
      m,
      g,
      b,
      _ = (a && a.__k) || sa,
      C = _.length;
    for (n.__k = [], c = 0; c < t.length; c++)
      if (
        (p = n.__k[c] =
          (p = t[c]) == null || typeof p == "boolean"
            ? null
            : typeof p == "string" ||
              typeof p == "number" ||
              typeof p == "bigint"
            ? m5(null, p, null, null, p)
            : Array.isArray(p)
            ? m5($e, { children: p }, null, null, null)
            : p.__b > 0
            ? m5(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v)
            : p) != null
      ) {
        if (
          ((p.__ = n),
          (p.__b = n.__b + 1),
          (d = _[c]) === null || (d && p.key == d.key && p.type === d.type))
        )
          _[c] = void 0;
        else
          for (h = 0; h < C; h++) {
            if ((d = _[h]) && p.key == d.key && p.type === d.type) {
              _[h] = void 0;
              break;
            }
            d = null;
          }
        c0(e, p, (d = d || $5), r, o, i, l, s, u),
          (m = p.__e),
          (h = p.ref) &&
            d.ref != h &&
            (b || (b = []),
            d.ref && b.push(d.ref, null, p),
            b.push(h, p.__c || m, p)),
          m != null
            ? (g == null && (g = m),
              typeof p.type == "function" && p.__k === d.__k
                ? (p.__d = s = ha(p, s, e))
                : (s = ma(e, p, d, _, m, s)),
              typeof n.type == "function" && (n.__d = s))
            : s && d.__e == s && s.parentNode != e && (s = f5(d));
      }
    for (n.__e = g, c = C; c--; ) _[c] != null && va(_[c], _[c]);
    if (b) for (c = 0; c < b.length; c++) ga(b[c], b[++c], b[++c]);
  }
  function ha(e, t, n) {
    for (var a, r = e.__k, o = 0; r && o < r.length; o++)
      (a = r[o]) &&
        ((a.__ = e),
        (t =
          typeof a.type == "function"
            ? ha(a, t, n)
            : ma(n, a, a, r, a.__e, t)));
    return t;
  }
  function lt(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (Array.isArray(e)
          ? e.some(function (n) {
              lt(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function ma(e, t, n, a, r, o) {
    var i, l, s;
    if (t.__d !== void 0) (i = t.__d), (t.__d = void 0);
    else if (n == null || r != o || r.parentNode == null)
      e: if (o == null || o.parentNode !== e) e.appendChild(r), (i = null);
      else {
        for (l = o, s = 0; (l = l.nextSibling) && s < a.length; s += 1)
          if (l == r) break e;
        e.insertBefore(r, o), (i = o);
      }
    return i !== void 0 ? i : r.nextSibling;
  }
  function $l(e, t, n, a, r) {
    var o;
    for (o in n)
      o === "children" || o === "key" || o in t || G5(e, o, null, n[o], a);
    for (o in t)
      (r && typeof t[o] != "function") ||
        o === "children" ||
        o === "key" ||
        o === "value" ||
        o === "checked" ||
        n[o] === t[o] ||
        G5(e, o, t[o], n[o], a);
  }
  function ra(e, t, n) {
    t[0] === "-"
      ? e.setProperty(t, n)
      : (e[t] =
          n == null ? "" : typeof n != "number" || Ul.test(t) ? n : n + "px");
  }
  function G5(e, t, n, a, r) {
    var o;
    e: if (t === "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof a == "string" && (e.style.cssText = a = ""), a))
          for (t in a) (n && t in n) || ra(e.style, t, "");
        if (n) for (t in n) (a && n[t] === a[t]) || ra(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      (o = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + o] = n),
        n
          ? a || e.addEventListener(t, o ? ia : oa, o)
          : e.removeEventListener(t, o ? ia : oa, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t !== "href" &&
        t !== "list" &&
        t !== "form" &&
        t !== "tabIndex" &&
        t !== "download" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t.indexOf("-") == -1)
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function oa(e) {
    this.l[e.type + !1](P.event ? P.event(e) : e);
  }
  function ia(e) {
    this.l[e.type + !0](P.event ? P.event(e) : e);
  }
  function c0(e, t, n, a, r, o, i, l, s) {
    var u,
      c,
      h,
      d,
      p,
      m,
      g,
      b,
      _,
      C,
      M,
      y,
      w,
      E,
      x,
      R = t.type;
    if (t.constructor !== void 0) return null;
    n.__h != null &&
      ((s = n.__h), (l = t.__e = n.__e), (t.__h = null), (o = [l])),
      (u = P.__b) && u(t);
    try {
      e: if (typeof R == "function") {
        if (
          ((b = t.props),
          (_ = (u = R.contextType) && a[u.__c]),
          (C = u ? (_ ? _.props.value : u.__) : a),
          n.__c
            ? (g = (c = t.__c = n.__c).__ = c.__E)
            : ("prototype" in R && R.prototype.render
                ? (t.__c = c = new R(b, C))
                : ((t.__c = c = new Qe(b, C)),
                  (c.constructor = R),
                  (c.render = Gl)),
              _ && _.sub(c),
              (c.props = b),
              c.state || (c.state = {}),
              (c.context = C),
              (c.__n = a),
              (h = c.__d = !0),
              (c.__h = []),
              (c._sb = [])),
          c.__s == null && (c.__s = c.state),
          R.getDerivedStateFromProps != null &&
            (c.__s == c.state && (c.__s = ht({}, c.__s)),
            ht(c.__s, R.getDerivedStateFromProps(b, c.__s))),
          (d = c.props),
          (p = c.state),
          h)
        )
          R.getDerivedStateFromProps == null &&
            c.componentWillMount != null &&
            c.componentWillMount(),
            c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (
            (R.getDerivedStateFromProps == null &&
              b !== d &&
              c.componentWillReceiveProps != null &&
              c.componentWillReceiveProps(b, C),
            (!c.__e &&
              c.shouldComponentUpdate != null &&
              c.shouldComponentUpdate(b, c.__s, C) === !1) ||
              t.__v === n.__v)
          ) {
            for (
              c.props = b,
                c.state = c.__s,
                t.__v !== n.__v && (c.__d = !1),
                c.__v = t,
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.forEach(function (T) {
                  T && (T.__ = t);
                }),
                M = 0;
              M < c._sb.length;
              M++
            )
              c.__h.push(c._sb[M]);
            (c._sb = []), c.__h.length && i.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, C),
            c.componentDidUpdate != null &&
              c.__h.push(function () {
                c.componentDidUpdate(d, p, m);
              });
        }
        if (
          ((c.context = C),
          (c.props = b),
          (c.__v = t),
          (c.__P = e),
          (y = P.__r),
          (w = 0),
          "prototype" in R && R.prototype.render)
        ) {
          for (
            c.state = c.__s,
              c.__d = !1,
              y && y(t),
              u = c.render(c.props, c.state, c.context),
              E = 0;
            E < c._sb.length;
            E++
          )
            c.__h.push(c._sb[E]);
          c._sb = [];
        } else
          do
            (c.__d = !1),
              y && y(t),
              (u = c.render(c.props, c.state, c.context)),
              (c.state = c.__s);
          while (c.__d && ++w < 25);
        (c.state = c.__s),
          c.getChildContext != null && (a = ht(ht({}, a), c.getChildContext())),
          h ||
            c.getSnapshotBeforeUpdate == null ||
            (m = c.getSnapshotBeforeUpdate(d, p)),
          (x =
            u != null && u.type === $e && u.key == null ? u.props.children : u),
          pa(e, Array.isArray(x) ? x : [x], t, n, a, r, o, i, l, s),
          (c.base = t.__e),
          (t.__h = null),
          c.__h.length && i.push(c),
          g && (c.__E = c.__ = null),
          (c.__e = !1);
      } else
        o == null && t.__v === n.__v
          ? ((t.__k = n.__k), (t.__e = n.__e))
          : (t.__e = ql(n.__e, t, n, a, r, o, i, s));
      (u = P.diffed) && u(t);
    } catch (T) {
      (t.__v = null),
        (s || o != null) &&
          ((t.__e = l), (t.__h = !!s), (o[o.indexOf(l)] = null)),
        P.__e(T, t, n);
    }
  }
  function fa(e, t) {
    P.__c && P.__c(t, e),
      e.some(function (n) {
        try {
          (e = n.__h),
            (n.__h = []),
            e.some(function (a) {
              a.call(n);
            });
        } catch (a) {
          P.__e(a, n.__v);
        }
      });
  }
  function ql(e, t, n, a, r, o, i, l) {
    var s,
      u,
      c,
      h = n.props,
      d = t.props,
      p = t.type,
      m = 0;
    if ((p === "svg" && (r = !0), o != null)) {
      for (; m < o.length; m++)
        if (
          (s = o[m]) &&
          "setAttribute" in s == !!p &&
          (p ? s.localName === p : s.nodeType === 3)
        ) {
          (e = s), (o[m] = null);
          break;
        }
    }
    if (e == null) {
      if (p === null) return document.createTextNode(d);
      (e = r
        ? document.createElementNS("http://www.w3.org/2000/svg", p)
        : document.createElement(p, d.is && d)),
        (o = null),
        (l = !1);
    }
    if (p === null) h === d || (l && e.data === d) || (e.data = d);
    else {
      if (
        ((o = o && g5.call(e.childNodes)),
        (u = (h = n.props || $5).dangerouslySetInnerHTML),
        (c = d.dangerouslySetInnerHTML),
        !l)
      ) {
        if (o != null)
          for (h = {}, m = 0; m < e.attributes.length; m++)
            h[e.attributes[m].name] = e.attributes[m].value;
        (c || u) &&
          ((c && ((u && c.__html == u.__html) || c.__html === e.innerHTML)) ||
            (e.innerHTML = (c && c.__html) || ""));
      }
      if (($l(e, d, h, r, l), c)) t.__k = [];
      else if (
        ((m = t.props.children),
        pa(
          e,
          Array.isArray(m) ? m : [m],
          t,
          n,
          a,
          r && p !== "foreignObject",
          o,
          i,
          o ? o[0] : n.__k && f5(n, 0),
          l
        ),
        o != null)
      )
        for (m = o.length; m--; ) o[m] != null && ua(o[m]);
      l ||
        ("value" in d &&
          (m = d.value) !== void 0 &&
          (m !== e.value ||
            (p === "progress" && !m) ||
            (p === "option" && m !== h.value)) &&
          G5(e, "value", m, h.value, !1),
        "checked" in d &&
          (m = d.checked) !== void 0 &&
          m !== e.checked &&
          G5(e, "checked", m, h.checked, !1));
    }
    return e;
  }
  function ga(e, t, n) {
    try {
      typeof e == "function" ? e(t) : (e.current = t);
    } catch (a) {
      P.__e(a, n);
    }
  }
  function va(e, t, n) {
    var a, r;
    if (
      (P.unmount && P.unmount(e),
      (a = e.ref) && ((a.current && a.current !== e.__e) || ga(a, null, t)),
      (a = e.__c) != null)
    ) {
      if (a.componentWillUnmount)
        try {
          a.componentWillUnmount();
        } catch (o) {
          P.__e(o, t);
        }
      (a.base = a.__P = null), (e.__c = void 0);
    }
    if ((a = e.__k))
      for (r = 0; r < a.length; r++)
        a[r] && va(a[r], t, n || typeof e.type != "function");
    n || e.__e == null || ua(e.__e), (e.__ = e.__e = e.__d = void 0);
  }
  function Gl(e, t, n) {
    return this.constructor(e, n);
  }
  function bt(e, t, n) {
    var a, r, o;
    P.__ && P.__(e, t),
      (r = (a = typeof n == "function") ? null : (n && n.__k) || t.__k),
      (o = []),
      c0(
        t,
        (e = ((!a && n) || t).__k = Ue($e, null, [e])),
        r || $5,
        $5,
        t.ownerSVGElement !== void 0,
        !a && n ? [n] : r ? null : t.firstChild ? g5.call(t.childNodes) : null,
        o,
        !a && n ? n : r ? r.__e : t.firstChild,
        a
      ),
      fa(o, e);
  }
  function s0(e, t) {
    bt(e, t, s0);
  }
  function ba(e, t, n) {
    var a,
      r,
      o,
      i = ht({}, e.props);
    for (o in t)
      o == "key" ? (a = t[o]) : o == "ref" ? (r = t[o]) : (i[o] = t[o]);
    return (
      arguments.length > 2 &&
        (i.children = arguments.length > 3 ? g5.call(arguments, 2) : n),
      m5(e.type, i, a || e.key, r || e.ref, null)
    );
  }
  function qt(e, t) {
    var n = {
      __c: (t = "__cC" + ca++),
      __: e,
      Consumer: function (a, r) {
        return a.children(r);
      },
      Provider: function (a) {
        var r, o;
        return (
          this.getChildContext ||
            ((r = []),
            ((o = {})[t] = this),
            (this.getChildContext = function () {
              return o;
            }),
            (this.shouldComponentUpdate = function (i) {
              this.props.value !== i.value && r.some(l0);
            }),
            (this.sub = function (i) {
              r.push(i);
              var l = i.componentWillUnmount;
              i.componentWillUnmount = function () {
                r.splice(r.indexOf(i), 1), l && l.call(i);
              };
            })),
          a.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  var g5,
    P,
    la,
    Bl,
    h5,
    aa,
    ca,
    $5,
    sa,
    Ul,
    It = U5(() => {
      ($5 = {}),
        (sa = []),
        (Ul =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i);
      (g5 = sa.slice),
        (P = {
          __e: function (e, t, n, a) {
            for (var r, o, i; (t = t.__); )
              if ((r = t.__c) && !r.__)
                try {
                  if (
                    ((o = r.constructor) &&
                      o.getDerivedStateFromError != null &&
                      (r.setState(o.getDerivedStateFromError(e)), (i = r.__d)),
                    r.componentDidCatch != null &&
                      (r.componentDidCatch(e, a || {}), (i = r.__d)),
                    i)
                  )
                    return (r.__E = r);
                } catch (l) {
                  e = l;
                }
            throw e;
          },
        }),
        (la = 0),
        (Bl = function (e) {
          return e != null && e.constructor === void 0;
        }),
        (Qe.prototype.setState = function (e, t) {
          var n;
          (n =
            this.__s != null && this.__s !== this.state
              ? this.__s
              : (this.__s = ht({}, this.state))),
            typeof e == "function" && (e = e(ht({}, n), this.props)),
            e && ht(n, e),
            e != null && this.__v && (t && this._sb.push(t), l0(this));
        }),
        (Qe.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), l0(this));
        }),
        (Qe.prototype.render = $e),
        (h5 = []),
        (q5.__r = 0),
        (ca = 0);
    });
  var Qt = Pe((f0, rr) => {
    (function (e, t) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], t);
      else if (typeof f0 < "u") t(rr);
      else {
        var n = { exports: {} };
        t(n), (e.browser = n.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : f0,
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
          let t = "The message port closed before a response was received.",
            n = (a) => {
              let r = {
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
              if (Object.keys(r).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class o extends WeakMap {
                constructor(w, E = void 0) {
                  super(E), (this.createItem = w);
                }
                get(w) {
                  return (
                    this.has(w) || this.set(w, this.createItem(w)), super.get(w)
                  );
                }
              }
              let i = (y) =>
                  y && typeof y == "object" && typeof y.then == "function",
                l =
                  (y, w) =>
                  (...E) => {
                    a.runtime.lastError
                      ? y.reject(new Error(a.runtime.lastError.message))
                      : w.singleCallbackArg ||
                        (E.length <= 1 && w.singleCallbackArg !== !1)
                      ? y.resolve(E[0])
                      : y.resolve(E);
                  },
                s = (y) => (y == 1 ? "argument" : "arguments"),
                u = (y, w) =>
                  function (x, ...R) {
                    if (R.length < w.minArgs)
                      throw new Error(
                        `Expected at least ${w.minArgs} ${s(
                          w.minArgs
                        )} for ${y}(), got ${R.length}`
                      );
                    if (R.length > w.maxArgs)
                      throw new Error(
                        `Expected at most ${w.maxArgs} ${s(
                          w.maxArgs
                        )} for ${y}(), got ${R.length}`
                      );
                    return new Promise((T, W) => {
                      if (w.fallbackToNoCallback)
                        try {
                          x[y](...R, l({ resolve: T, reject: W }, w));
                        } catch (O) {
                          console.warn(
                            `${y} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            O
                          ),
                            x[y](...R),
                            (w.fallbackToNoCallback = !1),
                            (w.noCallback = !0),
                            T();
                        }
                      else
                        w.noCallback
                          ? (x[y](...R), T())
                          : x[y](...R, l({ resolve: T, reject: W }, w));
                    });
                  },
                c = (y, w, E) =>
                  new Proxy(w, {
                    apply(x, R, T) {
                      return E.call(R, y, ...T);
                    },
                  }),
                h = Function.call.bind(Object.prototype.hasOwnProperty),
                d = (y, w = {}, E = {}) => {
                  let x = Object.create(null),
                    R = {
                      has(W, O) {
                        return O in y || O in x;
                      },
                      get(W, O, U) {
                        if (O in x) return x[O];
                        if (!(O in y)) return;
                        let S = y[O];
                        if (typeof S == "function")
                          if (typeof w[O] == "function") S = c(y, y[O], w[O]);
                          else if (h(E, O)) {
                            let V = u(O, E[O]);
                            S = c(y, y[O], V);
                          } else S = S.bind(y);
                        else if (
                          typeof S == "object" &&
                          S !== null &&
                          (h(w, O) || h(E, O))
                        )
                          S = d(S, w[O], E[O]);
                        else if (h(E, "*")) S = d(S, w[O], E["*"]);
                        else
                          return (
                            Object.defineProperty(x, O, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return y[O];
                              },
                              set(V) {
                                y[O] = V;
                              },
                            }),
                            S
                          );
                        return (x[O] = S), S;
                      },
                      set(W, O, U, S) {
                        return O in x ? (x[O] = U) : (y[O] = U), !0;
                      },
                      defineProperty(W, O, U) {
                        return Reflect.defineProperty(x, O, U);
                      },
                      deleteProperty(W, O) {
                        return Reflect.deleteProperty(x, O);
                      },
                    },
                    T = Object.create(y);
                  return new Proxy(T, R);
                },
                p = (y) => ({
                  addListener(w, E, ...x) {
                    w.addListener(y.get(E), ...x);
                  },
                  hasListener(w, E) {
                    return w.hasListener(y.get(E));
                  },
                  removeListener(w, E) {
                    w.removeListener(y.get(E));
                  },
                }),
                m = new o((y) =>
                  typeof y != "function"
                    ? y
                    : function (E) {
                        let x = d(
                          E,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        y(x);
                      }
                ),
                g = new o((y) =>
                  typeof y != "function"
                    ? y
                    : function (E, x, R) {
                        let T = !1,
                          W,
                          O = new Promise((Q) => {
                            W = function (z) {
                              (T = !0), Q(z);
                            };
                          }),
                          U;
                        try {
                          U = y(E, x, W);
                        } catch (Q) {
                          U = Promise.reject(Q);
                        }
                        let S = U !== !0 && i(U);
                        if (U !== !0 && !S && !T) return !1;
                        let V = (Q) => {
                          Q.then(
                            (z) => {
                              R(z);
                            },
                            (z) => {
                              let I;
                              z &&
                              (z instanceof Error ||
                                typeof z.message == "string")
                                ? (I = z.message)
                                : (I = "An unexpected error occurred"),
                                R({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: I,
                                });
                            }
                          ).catch((z) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              z
                            );
                          });
                        };
                        return V(S ? U : O), !0;
                      }
                ),
                b = ({ reject: y, resolve: w }, E) => {
                  a.runtime.lastError
                    ? a.runtime.lastError.message === t
                      ? w()
                      : y(new Error(a.runtime.lastError.message))
                    : E && E.__mozWebExtensionPolyfillReject__
                    ? y(new Error(E.message))
                    : w(E);
                },
                _ = (y, w, E, ...x) => {
                  if (x.length < w.minArgs)
                    throw new Error(
                      `Expected at least ${w.minArgs} ${s(
                        w.minArgs
                      )} for ${y}(), got ${x.length}`
                    );
                  if (x.length > w.maxArgs)
                    throw new Error(
                      `Expected at most ${w.maxArgs} ${s(
                        w.maxArgs
                      )} for ${y}(), got ${x.length}`
                    );
                  return new Promise((R, T) => {
                    let W = b.bind(null, { resolve: R, reject: T });
                    x.push(W), E.sendMessage(...x);
                  });
                },
                C = {
                  devtools: { network: { onRequestFinished: p(m) } },
                  runtime: {
                    onMessage: p(g),
                    onMessageExternal: p(g),
                    sendMessage: _.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: _.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                M = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (r.privacy = {
                  network: { "*": M },
                  services: { "*": M },
                  websites: { "*": M },
                }),
                d(a, C, r)
              );
            };
          e.exports = n(chrome);
        } else e.exports = globalThis.browser;
      }
    );
  });
  function Rt(e, t) {
    P.__h && P.__h(ve, e, Zt || t), (Zt = 0);
    var n = ve.__H || (ve.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: t1 }), n.__[e];
  }
  function ye(e) {
    return (Zt = 1), a1(br, e);
  }
  function a1(e, t, n) {
    var a = Rt(_t++, 2);
    if (
      ((a.t = e),
      !a.__c &&
        ((a.__ = [
          n ? n(t) : br(void 0, t),
          function (o) {
            var i = a.__N ? a.__N[0] : a.__[0],
              l = a.t(i, o);
            i !== l && ((a.__N = [l, a.__[1]]), a.__c.setState({}));
          },
        ]),
        (a.__c = ve),
        !ve.u))
    ) {
      ve.u = !0;
      var r = ve.shouldComponentUpdate;
      ve.shouldComponentUpdate = function (o, i, l) {
        if (!a.__c.__H) return !0;
        var s = a.__c.__H.__.filter(function (c) {
          return c.__c;
        });
        if (
          s.every(function (c) {
            return !c.__N;
          })
        )
          return !r || r.call(this, o, i, l);
        var u = !1;
        return (
          s.forEach(function (c) {
            if (c.__N) {
              var h = c.__[0];
              (c.__ = c.__N), (c.__N = void 0), h !== c.__[0] && (u = !0);
            }
          }),
          !(!u && a.__c.props === o) && (!r || r.call(this, o, i, l))
        );
      };
    }
    return a.__N || a.__;
  }
  function qe(e, t) {
    var n = Rt(_t++, 3);
    !P.__s && A0(n.__H, t) && ((n.__ = e), (n.i = t), ve.__H.__h.push(n));
  }
  function At(e, t) {
    var n = Rt(_t++, 4);
    !P.__s && A0(n.__H, t) && ((n.__ = e), (n.i = t), ve.__h.push(n));
  }
  function Xe(e) {
    return (
      (Zt = 5),
      ct(function () {
        return { current: e };
      }, [])
    );
  }
  function E0(e, t, n) {
    (Zt = 6),
      At(
        function () {
          return typeof e == "function"
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
        },
        n == null ? n : n.concat(e)
      );
  }
  function ct(e, t) {
    var n = Rt(_t++, 7);
    return A0(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function Ne(e, t) {
    return (
      (Zt = 8),
      ct(function () {
        return e;
      }, t)
    );
  }
  function jt(e) {
    var t = ve.context[e.__c],
      n = Rt(_t++, 9);
    return (
      (n.c = e),
      t ? (n.__ == null && ((n.__ = !0), t.sub(ve)), t.props.value) : e.__
    );
  }
  function E5(e, t) {
    P.useDebugValue && P.useDebugValue(t ? t(e) : e);
  }
  function Ws(e) {
    var t = Rt(_t++, 10),
      n = ye();
    return (
      (t.__ = e),
      ve.componentDidCatch ||
        (ve.componentDidCatch = function (a, r) {
          t.__ && t.__(a, r), n[1](a);
        }),
      [
        n[0],
        function () {
          n[1](void 0);
        },
      ]
    );
  }
  function _0() {
    var e = Rt(_t++, 11);
    if (!e.__) {
      for (var t = ve.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function Ks() {
    for (var e; (e = vr.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(n1), e.__H.__h.forEach(b0), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), P.__e(t, e.__v);
        }
  }
  function Ys(e) {
    var t,
      n = function () {
        clearTimeout(a), gr && cancelAnimationFrame(t), setTimeout(e);
      },
      a = setTimeout(n, 100);
    gr && (t = requestAnimationFrame(n));
  }
  function n1(e) {
    var t = ve,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (ve = t);
  }
  function b0(e) {
    var t = ve;
    (e.__c = e.__()), (ve = t);
  }
  function A0(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, a) {
        return n !== e[a];
      })
    );
  }
  function br(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  var _t,
    ve,
    v0,
    ur,
    Zt,
    vr,
    t1,
    dr,
    pr,
    hr,
    mr,
    fr,
    gr,
    Xt = U5(() => {
      It();
      (Zt = 0),
        (vr = []),
        (t1 = []),
        (dr = P.__b),
        (pr = P.__r),
        (hr = P.diffed),
        (mr = P.__c),
        (fr = P.unmount);
      (P.__b = function (e) {
        (ve = null), dr && dr(e);
      }),
        (P.__r = function (e) {
          pr && pr(e), (_t = 0);
          var t = (ve = e.__c).__H;
          t &&
            (v0 === ve
              ? ((t.__h = []),
                (ve.__h = []),
                t.__.forEach(function (n) {
                  n.__N && (n.__ = n.__N), (n.__V = t1), (n.__N = n.i = void 0);
                }))
              : (t.__h.forEach(n1), t.__h.forEach(b0), (t.__h = []))),
            (v0 = ve);
        }),
        (P.diffed = function (e) {
          hr && hr(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((vr.push(t) !== 1 && ur === P.requestAnimationFrame) ||
                ((ur = P.requestAnimationFrame) || Ys)(Ks)),
            t.__H.__.forEach(function (n) {
              n.i && (n.__H = n.i),
                n.__V !== t1 && (n.__ = n.__V),
                (n.i = void 0),
                (n.__V = t1);
            })),
            (v0 = ve = null);
        }),
        (P.__c = function (e, t) {
          t.some(function (n) {
            try {
              n.__h.forEach(n1),
                (n.__h = n.__h.filter(function (a) {
                  return !a.__ || b0(a);
                }));
            } catch (a) {
              t.some(function (r) {
                r.__h && (r.__h = []);
              }),
                (t = []),
                P.__e(a, n.__v);
            }
          }),
            mr && mr(e, t);
        }),
        (P.unmount = function (e) {
          fr && fr(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (a) {
              try {
                n1(a);
              } catch (r) {
                t = r;
              }
            }),
            (n.__H = void 0),
            t && P.__e(t, n.__v));
        });
      gr = typeof requestAnimationFrame == "function";
    });
  function Sr(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function w0(e, t) {
    for (var n in e) if (n !== "__source" && !(n in t)) return !0;
    for (var a in t) if (a !== "__source" && e[a] !== t[a]) return !0;
    return !1;
  }
  function y0(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
  }
  function r1(e) {
    this.props = e;
  }
  function e5(e, t) {
    function n(r) {
      var o = this.props.ref,
        i = o == r.ref;
      return (
        !i && o && (o.call ? o(null) : (o.current = null)),
        t ? !t(this.props, r) || !i : w0(this.props, r)
      );
    }
    function a(r) {
      return (this.shouldComponentUpdate = n), Ue(e, r);
    }
    return (
      (a.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (a.prototype.isReactComponent = !0),
      (a.__f = !0),
      a
    );
  }
  function Cr(e) {
    function t(n) {
      var a = Sr({}, n);
      return delete a.ref, e(a, n.ref || null);
    }
    return (
      (t.$$typeof = Qs),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  function Rr(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (a) {
            typeof a.__c == "function" && a.__c();
          }),
          (e.__c.__H = null)),
        (e = Sr({}, e)).__c != null &&
          (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (a) {
            return Rr(a, t, n);
          }))),
      e
    );
  }
  function kr(e, t, n) {
    return (
      e &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (a) {
            return kr(a, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.insertBefore(e.__e, e.__d),
          (e.__c.__e = !0),
          (e.__c.__P = n))),
      e
    );
  }
  function _5() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Nr(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Tr(e) {
    var t, n, a;
    function r(o) {
      if (
        (t ||
          (t = e()).then(
            function (i) {
              n = i.default || i;
            },
            function (i) {
              a = i;
            }
          ),
        a)
      )
        throw a;
      if (!n) throw t;
      return Ue(n, o);
    }
    return (r.displayName = "Lazy"), (r.__f = !0), r;
  }
  function Jt() {
    (this.u = null), (this.o = null);
  }
  function js(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function Xs(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      bt(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (a) {
                this.childNodes.push(a), t.i.appendChild(a);
              },
              insertBefore: function (a, r) {
                this.childNodes.push(a), t.i.appendChild(a);
              },
              removeChild: function (a) {
                this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1),
                  t.i.removeChild(a);
              },
            })),
          bt(Ue(js, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  function Lr(e, t) {
    var n = Ue(Xs, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  function Dr(e, t, n) {
    return (
      t.__k == null && (t.textContent = ""),
      bt(e, t),
      typeof n == "function" && n(),
      e ? e.__c : null
    );
  }
  function Hr(e, t, n) {
    return s0(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  function nu() {}
  function au() {
    return this.cancelBubble;
  }
  function ru() {
    return this.defaultPrevented;
  }
  function Pr(e) {
    return Ue.bind(null, e);
  }
  function x0(e) {
    return !!e && e.$$typeof === Or;
  }
  function Br(e) {
    return x0(e) ? ba.apply(null, arguments) : e;
  }
  function Ur(e) {
    return !!e.__k && (bt(null, e), !0);
  }
  function $r(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  function M0(e) {
    e();
  }
  function Kr(e) {
    return e;
  }
  function Yr() {
    return [!1, M0];
  }
  function Zr(e, t) {
    var n = t(),
      a = ye({ h: { __: n, v: t } }),
      r = a[0].h,
      o = a[1];
    return (
      At(
        function () {
          (r.__ = n), (r.v = t), y0(r.__, t()) || o({ h: r });
        },
        [e, n, t]
      ),
      qe(
        function () {
          return (
            y0(r.__, r.v()) || o({ h: r }),
            e(function () {
              y0(r.__, r.v()) || o({ h: r });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  var Er,
    Qs,
    _r,
    Ir,
    Zs,
    Ar,
    yr,
    Or,
    Js,
    eu,
    tu,
    wr,
    Vr,
    xr,
    Mr,
    zr,
    Fr,
    ou,
    qr,
    Gr,
    Wr,
    Qr,
    ae,
    z0 = U5(() => {
      It();
      It();
      Xt();
      Xt();
      ((r1.prototype = new Qe()).isPureReactComponent = !0),
        (r1.prototype.shouldComponentUpdate = function (e, t) {
          return w0(this.props, e) || w0(this.state, t);
        });
      Er = P.__b;
      P.__b = function (e) {
        e.type &&
          e.type.__f &&
          e.ref &&
          ((e.props.ref = e.ref), (e.ref = null)),
          Er && Er(e);
      };
      Qs =
        (typeof Symbol < "u" &&
          Symbol.for &&
          Symbol.for("react.forward_ref")) ||
        3911;
      (_r = function (e, t) {
        return e == null ? null : lt(lt(e).map(t));
      }),
        (Ir = {
          map: _r,
          forEach: _r,
          count: function (e) {
            return e ? lt(e).length : 0;
          },
          only: function (e) {
            var t = lt(e);
            if (t.length !== 1) throw "Children.only";
            return t[0];
          },
          toArray: lt,
        }),
        (Zs = P.__e);
      P.__e = function (e, t, n, a) {
        if (e.then) {
          for (var r, o = t; (o = o.__); )
            if ((r = o.__c) && r.__c)
              return (
                t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t)
              );
        }
        Zs(e, t, n, a);
      };
      Ar = P.unmount;
      (P.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(),
          t && e.__h === !0 && (e.type = null),
          Ar && Ar(e);
      }),
        ((_5.prototype = new Qe()).__c = function (e, t) {
          var n = t.__c,
            a = this;
          a.t == null && (a.t = []), a.t.push(n);
          var r = Nr(a.__v),
            o = !1,
            i = function () {
              o || ((o = !0), (n.__R = null), r ? r(l) : l());
            };
          n.__R = i;
          var l = function () {
              if (!--a.__u) {
                if (a.state.__a) {
                  var u = a.state.__a;
                  a.__v.__k[0] = kr(u, u.__c.__P, u.__c.__O);
                }
                var c;
                for (a.setState({ __a: (a.__b = null) }); (c = a.t.pop()); )
                  c.forceUpdate();
              }
            },
            s = t.__h === !0;
          a.__u++ || s || a.setState({ __a: (a.__b = a.__v.__k[0]) }),
            e.then(i, i);
        }),
        (_5.prototype.componentWillUnmount = function () {
          this.t = [];
        }),
        (_5.prototype.render = function (e, t) {
          if (this.__b) {
            if (this.__v.__k) {
              var n = document.createElement("div"),
                a = this.__v.__k[0].__c;
              this.__v.__k[0] = Rr(this.__b, n, (a.__O = a.__P));
            }
            this.__b = null;
          }
          var r = t.__a && Ue($e, null, e.fallback);
          return (
            r && (r.__h = null), [Ue($e, null, t.__a ? null : e.children), r]
          );
        });
      yr = function (e, t, n) {
        if (
          (++n[1] === n[0] && e.o.delete(t),
          e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        )
          for (n = e.u; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2];
          }
      };
      ((Jt.prototype = new Qe()).__a = function (e) {
        var t = this,
          n = Nr(t.__v),
          a = t.o.get(e);
        return (
          a[0]++,
          function (r) {
            var o = function () {
              t.props.revealOrder ? (a.push(r), yr(t, e, a)) : r();
            };
            n ? n(o) : o();
          }
        );
      }),
        (Jt.prototype.render = function (e) {
          (this.u = null), (this.o = new Map());
          var t = lt(e.children);
          e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
          for (var n = t.length; n--; )
            this.o.set(t[n], (this.u = [1, 0, this.u]));
          return e.children;
        }),
        (Jt.prototype.componentDidUpdate = Jt.prototype.componentDidMount =
          function () {
            var e = this;
            this.o.forEach(function (t, n) {
              yr(e, n, t);
            });
          });
      (Or =
        (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
        60103),
        (Js =
          /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/),
        (eu = typeof document < "u"),
        (tu = function (e) {
          return (
            typeof Symbol < "u" && typeof Symbol() == "symbol"
              ? /fil|che|rad/i
              : /fil|che|ra/i
          ).test(e);
        });
      (Qe.prototype.isReactComponent = {}),
        [
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUpdate",
        ].forEach(function (e) {
          Object.defineProperty(Qe.prototype, e, {
            configurable: !0,
            get: function () {
              return this["UNSAFE_" + e];
            },
            set: function (t) {
              Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        });
      wr = P.event;
      P.event = function (e) {
        return (
          wr && (e = wr(e)),
          (e.persist = nu),
          (e.isPropagationStopped = au),
          (e.isDefaultPrevented = ru),
          (e.nativeEvent = e)
        );
      };
      (xr = {
        configurable: !0,
        get: function () {
          return this.class;
        },
      }),
        (Mr = P.vnode);
      P.vnode = function (e) {
        var t = e.type,
          n = e.props,
          a = n;
        if (typeof t == "string") {
          var r = t.indexOf("-") === -1;
          for (var o in ((a = {}), n)) {
            var i = n[o];
            (eu && o === "children" && t === "noscript") ||
              (o === "value" && "defaultValue" in n && i == null) ||
              (o === "defaultValue" && "value" in n && n.value == null
                ? (o = "value")
                : o === "download" && i === !0
                ? (i = "")
                : /ondoubleclick/i.test(o)
                ? (o = "ondblclick")
                : /^onchange(textarea|input)/i.test(o + t) && !tu(n.type)
                ? (o = "oninput")
                : /^onfocus$/i.test(o)
                ? (o = "onfocusin")
                : /^onblur$/i.test(o)
                ? (o = "onfocusout")
                : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
                ? (o = o.toLowerCase())
                : r && Js.test(o)
                ? (o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
                : i === null && (i = void 0),
              /^oninput$/i.test(o) &&
                ((o = o.toLowerCase()), a[o] && (o = "oninputCapture")),
              (a[o] = i));
          }
          t == "select" &&
            a.multiple &&
            Array.isArray(a.value) &&
            (a.value = lt(n.children).forEach(function (l) {
              l.props.selected = a.value.indexOf(l.props.value) != -1;
            })),
            t == "select" &&
              a.defaultValue != null &&
              (a.value = lt(n.children).forEach(function (l) {
                l.props.selected = a.multiple
                  ? a.defaultValue.indexOf(l.props.value) != -1
                  : a.defaultValue == l.props.value;
              })),
            (e.props = a),
            n.class != n.className &&
              ((xr.enumerable = "className" in n),
              n.className != null && (a.class = n.className),
              Object.defineProperty(a, "className", xr));
        }
        (e.$$typeof = Or), Mr && Mr(e);
      };
      zr = P.__r;
      P.__r = function (e) {
        zr && zr(e), (Vr = e.__c);
      };
      (Fr = {
        ReactCurrentDispatcher: {
          current: {
            readContext: function (e) {
              return Vr.__n[e.__c].props.value;
            },
          },
        },
      }),
        (ou = "17.0.2");
      (qr = function (e, t) {
        return e(t);
      }),
        (Gr = function (e, t) {
          return e(t);
        }),
        (Wr = $e);
      Qr = At;
      ae = {
        useState: ye,
        useId: _0,
        useReducer: a1,
        useEffect: qe,
        useLayoutEffect: At,
        useInsertionEffect: Qr,
        useTransition: Yr,
        useDeferredValue: Kr,
        useSyncExternalStore: Zr,
        startTransition: M0,
        useRef: Xe,
        useImperativeHandle: E0,
        useMemo: ct,
        useCallback: Ne,
        useContext: jt,
        useDebugValue: E5,
        version: "17.0.2",
        Children: Ir,
        render: Dr,
        hydrate: Hr,
        unmountComponentAtNode: Ur,
        createPortal: Lr,
        createElement: Ue,
        createContext: qt,
        createFactory: Pr,
        cloneElement: Br,
        createRef: W5,
        Fragment: $e,
        isValidElement: x0,
        findDOMNode: $r,
        Component: Qe,
        PureComponent: r1,
        memo: e5,
        forwardRef: Cr,
        flushSync: Gr,
        unstable_batchedUpdates: qr,
        StrictMode: Wr,
        Suspense: _5,
        SuspenseList: Jt,
        lazy: Tr,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fr,
      };
    });
  var jr = {};
  i0(jr, {
    Children: () => Ir,
    Component: () => Qe,
    Fragment: () => $e,
    PureComponent: () => r1,
    StrictMode: () => Wr,
    Suspense: () => _5,
    SuspenseList: () => Jt,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Fr,
    cloneElement: () => Br,
    createContext: () => qt,
    createElement: () => Ue,
    createFactory: () => Pr,
    createPortal: () => Lr,
    createRef: () => W5,
    default: () => ae,
    findDOMNode: () => $r,
    flushSync: () => Gr,
    forwardRef: () => Cr,
    hydrate: () => Hr,
    isValidElement: () => x0,
    lazy: () => Tr,
    memo: () => e5,
    render: () => Dr,
    startTransition: () => M0,
    unmountComponentAtNode: () => Ur,
    unstable_batchedUpdates: () => qr,
    useCallback: () => Ne,
    useContext: () => jt,
    useDebugValue: () => E5,
    useDeferredValue: () => Kr,
    useEffect: () => qe,
    useErrorBoundary: () => Ws,
    useId: () => _0,
    useImperativeHandle: () => E0,
    useInsertionEffect: () => Qr,
    useLayoutEffect: () => At,
    useMemo: () => ct,
    useReducer: () => a1,
    useRef: () => Xe,
    useState: () => ye,
    useSyncExternalStore: () => Zr,
    useTransition: () => Yr,
    version: () => ou,
  });
  var at = U5(() => {
    z0();
    z0();
  });
  var Jr = Pe((Xr) => {
    "use strict";
    var t5 = (at(), Pl(jr));
    function iu(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var lu = typeof Object.is == "function" ? Object.is : iu,
      cu = t5.useState,
      su = t5.useEffect,
      uu = t5.useLayoutEffect,
      du = t5.useDebugValue;
    function pu(e, t) {
      var n = t(),
        a = cu({ inst: { value: n, getSnapshot: t } }),
        r = a[0].inst,
        o = a[1];
      return (
        uu(
          function () {
            (r.value = n), (r.getSnapshot = t), S0(r) && o({ inst: r });
          },
          [e, n, t]
        ),
        su(
          function () {
            return (
              S0(r) && o({ inst: r }),
              e(function () {
                S0(r) && o({ inst: r });
              })
            );
          },
          [e]
        ),
        du(n),
        n
      );
    }
    function S0(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !lu(e, n);
      } catch {
        return !0;
      }
    }
    function hu(e, t) {
      return t();
    }
    var mu =
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
        ? hu
        : pu;
    Xr.useSyncExternalStore =
      t5.useSyncExternalStore !== void 0 ? t5.useSyncExternalStore : mu;
  });
  var t2 = Pe((vh, e2) => {
    "use strict";
    e2.exports = Jr();
  });
  var B0 = Pe((Lh, N2) => {
    N2.exports = function (t) {
      return (
        t != null &&
        t.constructor != null &&
        typeof t.constructor.isBuffer == "function" &&
        t.constructor.isBuffer(t)
      );
    };
  });
  var K2 = Pe((Xh, W2) => {
    "use strict";
    var u1 = Object.prototype.hasOwnProperty,
      G2 = Object.prototype.toString,
      F2 = Object.defineProperty,
      P2 = Object.getOwnPropertyDescriptor,
      B2 = function (t) {
        return typeof Array.isArray == "function"
          ? Array.isArray(t)
          : G2.call(t) === "[object Array]";
      },
      U2 = function (t) {
        if (!t || G2.call(t) !== "[object Object]") return !1;
        var n = u1.call(t, "constructor"),
          a =
            t.constructor &&
            t.constructor.prototype &&
            u1.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !a) return !1;
        var r;
        for (r in t);
        return typeof r > "u" || u1.call(t, r);
      },
      $2 = function (t, n) {
        F2 && n.name === "__proto__"
          ? F2(t, n.name, {
              enumerable: !0,
              configurable: !0,
              value: n.newValue,
              writable: !0,
            })
          : (t[n.name] = n.newValue);
      },
      q2 = function (t, n) {
        if (n === "__proto__")
          if (u1.call(t, n)) {
            if (P2) return P2(t, n).value;
          } else return;
        return t[n];
      };
    W2.exports = function e() {
      var t,
        n,
        a,
        r,
        o,
        i,
        l = arguments[0],
        s = 1,
        u = arguments.length,
        c = !1;
      for (
        typeof l == "boolean" && ((c = l), (l = arguments[1] || {}), (s = 2)),
          (l == null || (typeof l != "object" && typeof l != "function")) &&
            (l = {});
        s < u;
        ++s
      )
        if (((t = arguments[s]), t != null))
          for (n in t)
            (a = q2(l, n)),
              (r = q2(t, n)),
              l !== r &&
                (c && r && (U2(r) || (o = B2(r)))
                  ? (o
                      ? ((o = !1), (i = a && B2(a) ? a : []))
                      : (i = a && U2(a) ? a : {}),
                    $2(l, { name: n, newValue: e(c, i, r) }))
                  : typeof r < "u" && $2(l, { name: n, newValue: r }));
      return l;
    };
  });
  var pi = Pe((kb, di) => {
    "use strict";
    var R4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    di.exports = R4;
  });
  var gi = Pe((Nb, fi) => {
    "use strict";
    var k4 = pi();
    function hi() {}
    function mi() {}
    mi.resetWarningCache = hi;
    fi.exports = function () {
      function e(a, r, o, i, l, s) {
        if (s !== k4) {
          var u = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((u.name = "Invariant Violation"), u);
        }
      }
      e.isRequired = e;
      function t() {
        return e;
      }
      var n = {
        array: e,
        bigint: e,
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
        checkPropTypes: mi,
        resetWarningCache: hi,
      };
      return (n.PropTypes = n), n;
    };
  });
  var bi = Pe((Ob, vi) => {
    vi.exports = gi()();
    var Tb, Lb;
  });
  var zi = Pe((de) => {
    "use strict";
    var Cn = Symbol.for("react.element"),
      In = Symbol.for("react.portal"),
      N1 = Symbol.for("react.fragment"),
      T1 = Symbol.for("react.strict_mode"),
      L1 = Symbol.for("react.profiler"),
      O1 = Symbol.for("react.provider"),
      D1 = Symbol.for("react.context"),
      V4 = Symbol.for("react.server_context"),
      H1 = Symbol.for("react.forward_ref"),
      V1 = Symbol.for("react.suspense"),
      F1 = Symbol.for("react.suspense_list"),
      P1 = Symbol.for("react.memo"),
      B1 = Symbol.for("react.lazy"),
      F4 = Symbol.for("react.offscreen"),
      Mi;
    Mi = Symbol.for("react.module.reference");
    function tt(e) {
      if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
          case Cn:
            switch (((e = e.type), e)) {
              case N1:
              case L1:
              case T1:
              case V1:
              case F1:
                return e;
              default:
                switch (((e = e && e.$$typeof), e)) {
                  case V4:
                  case D1:
                  case H1:
                  case B1:
                  case P1:
                  case O1:
                    return e;
                  default:
                    return t;
                }
            }
          case In:
            return t;
        }
      }
    }
    de.ContextConsumer = D1;
    de.ContextProvider = O1;
    de.Element = Cn;
    de.ForwardRef = H1;
    de.Fragment = N1;
    de.Lazy = B1;
    de.Memo = P1;
    de.Portal = In;
    de.Profiler = L1;
    de.StrictMode = T1;
    de.Suspense = V1;
    de.SuspenseList = F1;
    de.isAsyncMode = function () {
      return !1;
    };
    de.isConcurrentMode = function () {
      return !1;
    };
    de.isContextConsumer = function (e) {
      return tt(e) === D1;
    };
    de.isContextProvider = function (e) {
      return tt(e) === O1;
    };
    de.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === Cn;
    };
    de.isForwardRef = function (e) {
      return tt(e) === H1;
    };
    de.isFragment = function (e) {
      return tt(e) === N1;
    };
    de.isLazy = function (e) {
      return tt(e) === B1;
    };
    de.isMemo = function (e) {
      return tt(e) === P1;
    };
    de.isPortal = function (e) {
      return tt(e) === In;
    };
    de.isProfiler = function (e) {
      return tt(e) === L1;
    };
    de.isStrictMode = function (e) {
      return tt(e) === T1;
    };
    de.isSuspense = function (e) {
      return tt(e) === V1;
    };
    de.isSuspenseList = function (e) {
      return tt(e) === F1;
    };
    de.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === N1 ||
        e === L1 ||
        e === T1 ||
        e === V1 ||
        e === F1 ||
        e === F4 ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === B1 ||
            e.$$typeof === P1 ||
            e.$$typeof === O1 ||
            e.$$typeof === D1 ||
            e.$$typeof === H1 ||
            e.$$typeof === Mi ||
            e.getModuleId !== void 0))
      );
    };
    de.typeOf = tt;
  });
  var Ci = Pe((NE, Si) => {
    "use strict";
    Si.exports = zi();
  });
  var Hi = Pe((DE, Di) => {
    var Ni = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      P4 = /\n/g,
      B4 = /^\s*/,
      U4 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      $4 = /^:\s*/,
      q4 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      G4 = /^[;\s]*/,
      W4 = /^\s+|\s+$/g,
      K4 = `
`,
      Ti = "/",
      Li = "*",
      Ft = "",
      Y4 = "comment",
      Q4 = "declaration";
    Di.exports = function (e, t) {
      if (typeof e != "string")
        throw new TypeError("First argument must be a string");
      if (!e) return [];
      t = t || {};
      var n = 1,
        a = 1;
      function r(g) {
        var b = g.match(P4);
        b && (n += b.length);
        var _ = g.lastIndexOf(K4);
        a = ~_ ? g.length - _ : a + g.length;
      }
      function o() {
        var g = { line: n, column: a };
        return function (b) {
          return (b.position = new i(g)), c(), b;
        };
      }
      function i(g) {
        (this.start = g),
          (this.end = { line: n, column: a }),
          (this.source = t.source);
      }
      i.prototype.content = e;
      var l = [];
      function s(g) {
        var b = new Error(t.source + ":" + n + ":" + a + ": " + g);
        if (
          ((b.reason = g),
          (b.filename = t.source),
          (b.line = n),
          (b.column = a),
          (b.source = e),
          t.silent)
        )
          l.push(b);
        else throw b;
      }
      function u(g) {
        var b = g.exec(e);
        if (b) {
          var _ = b[0];
          return r(_), (e = e.slice(_.length)), b;
        }
      }
      function c() {
        u(B4);
      }
      function h(g) {
        var b;
        for (g = g || []; (b = d()); ) b !== !1 && g.push(b);
        return g;
      }
      function d() {
        var g = o();
        if (!(Ti != e.charAt(0) || Li != e.charAt(1))) {
          for (
            var b = 2;
            Ft != e.charAt(b) && (Li != e.charAt(b) || Ti != e.charAt(b + 1));

          )
            ++b;
          if (((b += 2), Ft === e.charAt(b - 1)))
            return s("End of comment missing");
          var _ = e.slice(2, b - 2);
          return (
            (a += 2),
            r(_),
            (e = e.slice(b)),
            (a += 2),
            g({ type: Y4, comment: _ })
          );
        }
      }
      function p() {
        var g = o(),
          b = u(U4);
        if (b) {
          if ((d(), !u($4))) return s("property missing ':'");
          var _ = u(q4),
            C = g({
              type: Q4,
              property: Oi(b[0].replace(Ni, Ft)),
              value: _ ? Oi(_[0].replace(Ni, Ft)) : Ft,
            });
          return u(G4), C;
        }
      }
      function m() {
        var g = [];
        h(g);
        for (var b; (b = p()); ) b !== !1 && (g.push(b), h(g));
        return g;
      }
      return c(), m();
    };
    function Oi(e) {
      return e ? e.replace(W4, Ft) : Ft;
    }
  });
  var Fi = Pe((HE, Vi) => {
    var Z4 = Hi();
    function j4(e, t) {
      var n = null;
      if (!e || typeof e != "string") return n;
      for (
        var a, r = Z4(e), o = typeof t == "function", i, l, s = 0, u = r.length;
        s < u;
        s++
      )
        (a = r[s]),
          (i = a.property),
          (l = a.value),
          o ? t(i, l, a) : l && (n || (n = {}), (n[i] = l));
      return n;
    }
    Vi.exports = j4;
  });
  var dl = Pe((F_, ul) => {
    var Bn = { exports: {} };
    function Un(e) {
      return (
        e instanceof Map
          ? (e.clear =
              e.delete =
              e.set =
                function () {
                  throw new Error("map is read-only");
                })
          : e instanceof Set &&
            (e.add =
              e.clear =
              e.delete =
                function () {
                  throw new Error("set is read-only");
                }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach(function (t) {
          var n = e[t];
          typeof n == "object" && !Object.isFrozen(n) && Un(n);
        }),
        e
      );
    }
    Bn.exports = Un;
    Bn.exports.default = Un;
    var j1 = class {
      constructor(t) {
        t.data === void 0 && (t.data = {}),
          (this.data = t.data),
          (this.isMatchIgnored = !1);
      }
      ignoreMatch() {
        this.isMatchIgnored = !0;
      }
    };
    function el(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    }
    function St(e, ...t) {
      let n = Object.create(null);
      for (let a in e) n[a] = e[a];
      return (
        t.forEach(function (a) {
          for (let r in a) n[r] = a[r];
        }),
        n
      );
    }
    var H6 = "</span>",
      Y7 = (e) => !!e.scope || (e.sublanguage && e.language),
      V6 = (e, { prefix: t }) => {
        if (e.includes(".")) {
          let n = e.split(".");
          return [
            `${t}${n.shift()}`,
            ...n.map((a, r) => `${a}${"_".repeat(r + 1)}`),
          ].join(" ");
        }
        return `${t}${e}`;
      },
      Vn = class {
        constructor(t, n) {
          (this.buffer = ""), (this.classPrefix = n.classPrefix), t.walk(this);
        }
        addText(t) {
          this.buffer += el(t);
        }
        openNode(t) {
          if (!Y7(t)) return;
          let n = "";
          t.sublanguage
            ? (n = `language-${t.language}`)
            : (n = V6(t.scope, { prefix: this.classPrefix })),
            this.span(n);
        }
        closeNode(t) {
          Y7(t) && (this.buffer += H6);
        }
        value() {
          return this.buffer;
        }
        span(t) {
          this.buffer += `<span class="${t}">`;
        }
      },
      Q7 = (e = {}) => {
        let t = { children: [] };
        return Object.assign(t, e), t;
      },
      D5 = class {
        constructor() {
          (this.rootNode = Q7()), (this.stack = [this.rootNode]);
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        add(t) {
          this.top.children.push(t);
        }
        openNode(t) {
          let n = Q7({ scope: t });
          this.add(n), this.stack.push(n);
        }
        closeNode() {
          if (this.stack.length > 1) return this.stack.pop();
        }
        closeAllNodes() {
          for (; this.closeNode(); );
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        walk(t) {
          return this.constructor._walk(t, this.rootNode);
        }
        static _walk(t, n) {
          return (
            typeof n == "string"
              ? t.addText(n)
              : n.children &&
                (t.openNode(n),
                n.children.forEach((a) => this._walk(t, a)),
                t.closeNode(n)),
            t
          );
        }
        static _collapse(t) {
          typeof t != "string" &&
            t.children &&
            (t.children.every((n) => typeof n == "string")
              ? (t.children = [t.children.join("")])
              : t.children.forEach((n) => {
                  D5._collapse(n);
                }));
        }
      },
      Fn = class extends D5 {
        constructor(t) {
          super(), (this.options = t);
        }
        addKeyword(t, n) {
          t !== "" && (this.openNode(n), this.addText(t), this.closeNode());
        }
        addText(t) {
          t !== "" && this.add(t);
        }
        addSublanguage(t, n) {
          let a = t.root;
          (a.sublanguage = !0), (a.language = n), this.add(a);
        }
        toHTML() {
          return new Vn(this, this.options).value();
        }
        finalize() {
          return !0;
        }
      };
    function H5(e) {
      return e ? (typeof e == "string" ? e : e.source) : null;
    }
    function tl(e) {
      return Bt("(?=", e, ")");
    }
    function F6(e) {
      return Bt("(?:", e, ")*");
    }
    function P6(e) {
      return Bt("(?:", e, ")?");
    }
    function Bt(...e) {
      return e.map((n) => H5(n)).join("");
    }
    function B6(e) {
      let t = e[e.length - 1];
      return typeof t == "object" && t.constructor === Object
        ? (e.splice(e.length - 1, 1), t)
        : {};
    }
    function $n(...e) {
      return (
        "(" + (B6(e).capture ? "" : "?:") + e.map((a) => H5(a)).join("|") + ")"
      );
    }
    function nl(e) {
      return new RegExp(e.toString() + "|").exec("").length - 1;
    }
    function U6(e, t) {
      let n = e && e.exec(t);
      return n && n.index === 0;
    }
    var $6 = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function qn(e, { joinWith: t }) {
      let n = 0;
      return e
        .map((a) => {
          n += 1;
          let r = n,
            o = H5(a),
            i = "";
          for (; o.length > 0; ) {
            let l = $6.exec(o);
            if (!l) {
              i += o;
              break;
            }
            (i += o.substring(0, l.index)),
              (o = o.substring(l.index + l[0].length)),
              l[0][0] === "\\" && l[1]
                ? (i += "\\" + String(Number(l[1]) + r))
                : ((i += l[0]), l[0] === "(" && n++);
          }
          return i;
        })
        .map((a) => `(${a})`)
        .join(t);
    }
    var q6 = /\b\B/,
      al = "[a-zA-Z]\\w*",
      Gn = "[a-zA-Z_]\\w*",
      rl = "\\b\\d+(\\.\\d+)?",
      ol =
        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      il = "\\b(0b[01]+)",
      G6 =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      W6 = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
          e.binary && (e.begin = Bt(t, /.*\b/, e.binary, /\b.*/)),
          St(
            {
              scope: "meta",
              begin: t,
              end: /$/,
              relevance: 0,
              "on:begin": (n, a) => {
                n.index !== 0 && a.ignoreMatch();
              },
            },
            e
          )
        );
      },
      V5 = { begin: "\\\\[\\s\\S]", relevance: 0 },
      K6 = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [V5],
      },
      Y6 = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [V5],
      },
      Q6 = {
        begin:
          /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
      },
      J1 = function (e, t, n = {}) {
        let a = St({ scope: "comment", begin: e, end: t, contains: [] }, n);
        a.contains.push({
          scope: "doctag",
          begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0,
        });
        let r = $n(
          "I",
          "a",
          "is",
          "so",
          "us",
          "to",
          "at",
          "if",
          "in",
          "it",
          "on",
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          /[A-Za-z]+[-][a-z]+/,
          /[A-Za-z][a-z]{2,}/
        );
        return (
          a.contains.push({
            begin: Bt(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
          }),
          a
        );
      },
      Z6 = J1("//", "$"),
      j6 = J1("/\\*", "\\*/"),
      X6 = J1("#", "$"),
      J6 = { scope: "number", begin: rl, relevance: 0 },
      ed = { scope: "number", begin: ol, relevance: 0 },
      td = { scope: "number", begin: il, relevance: 0 },
      nd = {
        begin: /(?=\/[^/\n]*\/)/,
        contains: [
          {
            scope: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
              V5,
              { begin: /\[/, end: /\]/, relevance: 0, contains: [V5] },
            ],
          },
        ],
      },
      ad = { scope: "title", begin: al, relevance: 0 },
      rd = { scope: "title", begin: Gn, relevance: 0 },
      od = { begin: "\\.\\s*" + Gn, relevance: 0 },
      id = function (e) {
        return Object.assign(e, {
          "on:begin": (t, n) => {
            n.data._beginMatch = t[1];
          },
          "on:end": (t, n) => {
            n.data._beginMatch !== t[1] && n.ignoreMatch();
          },
        });
      },
      Z1 = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: q6,
        IDENT_RE: al,
        UNDERSCORE_IDENT_RE: Gn,
        NUMBER_RE: rl,
        C_NUMBER_RE: ol,
        BINARY_NUMBER_RE: il,
        RE_STARTERS_RE: G6,
        SHEBANG: W6,
        BACKSLASH_ESCAPE: V5,
        APOS_STRING_MODE: K6,
        QUOTE_STRING_MODE: Y6,
        PHRASAL_WORDS_MODE: Q6,
        COMMENT: J1,
        C_LINE_COMMENT_MODE: Z6,
        C_BLOCK_COMMENT_MODE: j6,
        HASH_COMMENT_MODE: X6,
        NUMBER_MODE: J6,
        C_NUMBER_MODE: ed,
        BINARY_NUMBER_MODE: td,
        REGEXP_MODE: nd,
        TITLE_MODE: ad,
        UNDERSCORE_TITLE_MODE: rd,
        METHOD_GUARD: od,
        END_SAME_AS_BEGIN: id,
      });
    function ld(e, t) {
      e.input[e.index - 1] === "." && t.ignoreMatch();
    }
    function cd(e, t) {
      e.className !== void 0 && ((e.scope = e.className), delete e.className);
    }
    function sd(e, t) {
      t &&
        e.beginKeywords &&
        ((e.begin =
          "\\b(" +
          e.beginKeywords.split(" ").join("|") +
          ")(?!\\.)(?=\\b|\\s)"),
        (e.__beforeBegin = ld),
        (e.keywords = e.keywords || e.beginKeywords),
        delete e.beginKeywords,
        e.relevance === void 0 && (e.relevance = 0));
    }
    function ud(e, t) {
      Array.isArray(e.illegal) && (e.illegal = $n(...e.illegal));
    }
    function dd(e, t) {
      if (e.match) {
        if (e.begin || e.end)
          throw new Error("begin & end are not supported with match");
        (e.begin = e.match), delete e.match;
      }
    }
    function pd(e, t) {
      e.relevance === void 0 && (e.relevance = 1);
    }
    var hd = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw new Error("beforeMatch cannot be used with starts");
        let n = Object.assign({}, e);
        Object.keys(e).forEach((a) => {
          delete e[a];
        }),
          (e.keywords = n.keywords),
          (e.begin = Bt(n.beforeMatch, tl(n.begin))),
          (e.starts = {
            relevance: 0,
            contains: [Object.assign(n, { endsParent: !0 })],
          }),
          (e.relevance = 0),
          delete n.beforeMatch;
      },
      md = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        "list",
        "value",
      ],
      fd = "keyword";
    function ll(e, t, n = fd) {
      let a = Object.create(null);
      return (
        typeof e == "string"
          ? r(n, e.split(" "))
          : Array.isArray(e)
          ? r(n, e)
          : Object.keys(e).forEach(function (o) {
              Object.assign(a, ll(e[o], t, o));
            }),
        a
      );
      function r(o, i) {
        t && (i = i.map((l) => l.toLowerCase())),
          i.forEach(function (l) {
            let s = l.split("|");
            a[s[0]] = [o, gd(s[0], s[1])];
          });
      }
    }
    function gd(e, t) {
      return t ? Number(t) : vd(e) ? 0 : 1;
    }
    function vd(e) {
      return md.includes(e.toLowerCase());
    }
    var Z7 = {},
      Pt = (e) => {
        console.error(e);
      },
      j7 = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
      },
      c5 = (e, t) => {
        Z7[`${e}/${t}`] ||
          (console.log(`Deprecated as of ${e}. ${t}`), (Z7[`${e}/${t}`] = !0));
      },
      X1 = new Error();
    function cl(e, t, { key: n }) {
      let a = 0,
        r = e[n],
        o = {},
        i = {};
      for (let l = 1; l <= t.length; l++)
        (i[l + a] = r[l]), (o[l + a] = !0), (a += nl(t[l - 1]));
      (e[n] = i), (e[n]._emit = o), (e[n]._multi = !0);
    }
    function bd(e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin)
          throw (
            (Pt(
              "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
            ),
            X1)
          );
        if (typeof e.beginScope != "object" || e.beginScope === null)
          throw (Pt("beginScope must be object"), X1);
        cl(e, e.begin, { key: "beginScope" }),
          (e.begin = qn(e.begin, { joinWith: "" }));
      }
    }
    function Ed(e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd)
          throw (
            (Pt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
            X1)
          );
        if (typeof e.endScope != "object" || e.endScope === null)
          throw (Pt("endScope must be object"), X1);
        cl(e, e.end, { key: "endScope" }),
          (e.end = qn(e.end, { joinWith: "" }));
      }
    }
    function _d(e) {
      e.scope &&
        typeof e.scope == "object" &&
        e.scope !== null &&
        ((e.beginScope = e.scope), delete e.scope);
    }
    function Ad(e) {
      _d(e),
        typeof e.beginScope == "string" &&
          (e.beginScope = { _wrap: e.beginScope }),
        typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }),
        bd(e),
        Ed(e);
    }
    function yd(e) {
      function t(i, l) {
        return new RegExp(
          H5(i),
          "m" +
            (e.case_insensitive ? "i" : "") +
            (e.unicodeRegex ? "u" : "") +
            (l ? "g" : "")
        );
      }
      class n {
        constructor() {
          (this.matchIndexes = {}),
            (this.regexes = []),
            (this.matchAt = 1),
            (this.position = 0);
        }
        addRule(l, s) {
          (s.position = this.position++),
            (this.matchIndexes[this.matchAt] = s),
            this.regexes.push([s, l]),
            (this.matchAt += nl(l) + 1);
        }
        compile() {
          this.regexes.length === 0 && (this.exec = () => null);
          let l = this.regexes.map((s) => s[1]);
          (this.matcherRe = t(qn(l, { joinWith: "|" }), !0)),
            (this.lastIndex = 0);
        }
        exec(l) {
          this.matcherRe.lastIndex = this.lastIndex;
          let s = this.matcherRe.exec(l);
          if (!s) return null;
          let u = s.findIndex((h, d) => d > 0 && h !== void 0),
            c = this.matchIndexes[u];
          return s.splice(0, u), Object.assign(s, c);
        }
      }
      class a {
        constructor() {
          (this.rules = []),
            (this.multiRegexes = []),
            (this.count = 0),
            (this.lastIndex = 0),
            (this.regexIndex = 0);
        }
        getMatcher(l) {
          if (this.multiRegexes[l]) return this.multiRegexes[l];
          let s = new n();
          return (
            this.rules.slice(l).forEach(([u, c]) => s.addRule(u, c)),
            s.compile(),
            (this.multiRegexes[l] = s),
            s
          );
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        addRule(l, s) {
          this.rules.push([l, s]), s.type === "begin" && this.count++;
        }
        exec(l) {
          let s = this.getMatcher(this.regexIndex);
          s.lastIndex = this.lastIndex;
          let u = s.exec(l);
          if (
            this.resumingScanAtSamePosition() &&
            !(u && u.index === this.lastIndex)
          ) {
            let c = this.getMatcher(0);
            (c.lastIndex = this.lastIndex + 1), (u = c.exec(l));
          }
          return (
            u &&
              ((this.regexIndex += u.position + 1),
              this.regexIndex === this.count && this.considerAll()),
            u
          );
        }
      }
      function r(i) {
        let l = new a();
        return (
          i.contains.forEach((s) =>
            l.addRule(s.begin, { rule: s, type: "begin" })
          ),
          i.terminatorEnd && l.addRule(i.terminatorEnd, { type: "end" }),
          i.illegal && l.addRule(i.illegal, { type: "illegal" }),
          l
        );
      }
      function o(i, l) {
        let s = i;
        if (i.isCompiled) return s;
        [cd, dd, Ad, hd].forEach((c) => c(i, l)),
          e.compilerExtensions.forEach((c) => c(i, l)),
          (i.__beforeBegin = null),
          [sd, ud, pd].forEach((c) => c(i, l)),
          (i.isCompiled = !0);
        let u = null;
        return (
          typeof i.keywords == "object" &&
            i.keywords.$pattern &&
            ((i.keywords = Object.assign({}, i.keywords)),
            (u = i.keywords.$pattern),
            delete i.keywords.$pattern),
          (u = u || /\w+/),
          i.keywords && (i.keywords = ll(i.keywords, e.case_insensitive)),
          (s.keywordPatternRe = t(u, !0)),
          l &&
            (i.begin || (i.begin = /\B|\b/),
            (s.beginRe = t(s.begin)),
            !i.end && !i.endsWithParent && (i.end = /\B|\b/),
            i.end && (s.endRe = t(s.end)),
            (s.terminatorEnd = H5(s.end) || ""),
            i.endsWithParent &&
              l.terminatorEnd &&
              (s.terminatorEnd += (i.end ? "|" : "") + l.terminatorEnd)),
          i.illegal && (s.illegalRe = t(i.illegal)),
          i.contains || (i.contains = []),
          (i.contains = [].concat(
            ...i.contains.map(function (c) {
              return wd(c === "self" ? i : c);
            })
          )),
          i.contains.forEach(function (c) {
            o(c, s);
          }),
          i.starts && o(i.starts, l),
          (s.matcher = r(s)),
          s
        );
      }
      if (
        (e.compilerExtensions || (e.compilerExtensions = []),
        e.contains && e.contains.includes("self"))
      )
        throw new Error(
          "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
        );
      return (e.classNameAliases = St(e.classNameAliases || {})), o(e);
    }
    function sl(e) {
      return e ? e.endsWithParent || sl(e.starts) : !1;
    }
    function wd(e) {
      return (
        e.variants &&
          !e.cachedVariants &&
          (e.cachedVariants = e.variants.map(function (t) {
            return St(e, { variants: null }, t);
          })),
        e.cachedVariants
          ? e.cachedVariants
          : sl(e)
          ? St(e, { starts: e.starts ? St(e.starts) : null })
          : Object.isFrozen(e)
          ? St(e)
          : e
      );
    }
    var xd = "11.7.0",
      Pn = class extends Error {
        constructor(t, n) {
          super(t), (this.name = "HTMLInjectionError"), (this.html = n);
        }
      },
      Hn = el,
      X7 = St,
      J7 = Symbol("nomatch"),
      Md = 7,
      zd = function (e) {
        let t = Object.create(null),
          n = Object.create(null),
          a = [],
          r = !0,
          o =
            "Could not find the language '{}', did you forget to load/include a language module?",
          i = { disableAutodetect: !0, name: "Plain text", contains: [] },
          l = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: "hljs-",
            cssSelector: "pre code",
            languages: null,
            __emitter: Fn,
          };
        function s(z) {
          return l.noHighlightRe.test(z);
        }
        function u(z) {
          let I = z.className + " ";
          I += z.parentNode ? z.parentNode.className : "";
          let L = l.languageDetectRe.exec(I);
          if (L) {
            let F = T(L[1]);
            return (
              F ||
                (j7(o.replace("{}", L[1])),
                j7("Falling back to no-highlight mode for this block.", z)),
              F ? L[1] : "no-highlight"
            );
          }
          return I.split(/\s+/).find((F) => s(F) || T(F));
        }
        function c(z, I, L) {
          let F = "",
            q = "";
          typeof I == "object"
            ? ((F = z), (L = I.ignoreIllegals), (q = I.language))
            : (c5(
                "10.7.0",
                "highlight(lang, code, ...args) has been deprecated."
              ),
              c5(
                "10.7.0",
                `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
              ),
              (q = z),
              (F = I)),
            L === void 0 && (L = !0);
          let f = { code: F, language: q };
          V("before:highlight", f);
          let v = f.result ? f.result : h(f.language, f.code, L);
          return (v.code = f.code), V("after:highlight", v), v;
        }
        function h(z, I, L, F) {
          let q = Object.create(null);
          function f(D, $) {
            return D.keywords[$];
          }
          function v() {
            if (!Y.keywords) {
              be.addText(ne);
              return;
            }
            let D = 0;
            Y.keywordPatternRe.lastIndex = 0;
            let $ = Y.keywordPatternRe.exec(ne),
              te = "";
            for (; $; ) {
              te += ne.substring(D, $.index);
              let A = ze.case_insensitive ? $[0].toLowerCase() : $[0],
                k = f(Y, A);
              if (k) {
                let [G, le] = k;
                if (
                  (be.addText(te),
                  (te = ""),
                  (q[A] = (q[A] || 0) + 1),
                  q[A] <= Md && (Se += le),
                  G.startsWith("_"))
                )
                  te += $[0];
                else {
                  let Fe = ze.classNameAliases[G] || G;
                  be.addKeyword($[0], Fe);
                }
              } else te += $[0];
              (D = Y.keywordPatternRe.lastIndex),
                ($ = Y.keywordPatternRe.exec(ne));
            }
            (te += ne.substring(D)), be.addText(te);
          }
          function Oe() {
            if (ne === "") return;
            let D = null;
            if (typeof Y.subLanguage == "string") {
              if (!t[Y.subLanguage]) {
                be.addText(ne);
                return;
              }
              (D = h(Y.subLanguage, ne, !0, vt[Y.subLanguage])),
                (vt[Y.subLanguage] = D._top);
            } else D = p(ne, Y.subLanguage.length ? Y.subLanguage : null);
            Y.relevance > 0 && (Se += D.relevance),
              be.addSublanguage(D._emitter, D.language);
          }
          function he() {
            Y.subLanguage != null ? Oe() : v(), (ne = "");
          }
          function xe(D, $) {
            let te = 1,
              A = $.length - 1;
            for (; te <= A; ) {
              if (!D._emit[te]) {
                te++;
                continue;
              }
              let k = ze.classNameAliases[D[te]] || D[te],
                G = $[te];
              k ? be.addKeyword(G, k) : ((ne = G), v(), (ne = "")), te++;
            }
          }
          function Re(D, $) {
            return (
              D.scope &&
                typeof D.scope == "string" &&
                be.openNode(ze.classNameAliases[D.scope] || D.scope),
              D.beginScope &&
                (D.beginScope._wrap
                  ? (be.addKeyword(
                      ne,
                      ze.classNameAliases[D.beginScope._wrap] ||
                        D.beginScope._wrap
                    ),
                    (ne = ""))
                  : D.beginScope._multi && (xe(D.beginScope, $), (ne = ""))),
              (Y = Object.create(D, { parent: { value: Y } })),
              Y
            );
          }
          function ke(D, $, te) {
            let A = U6(D.endRe, te);
            if (A) {
              if (D["on:end"]) {
                let k = new j1(D);
                D["on:end"]($, k), k.isMatchIgnored && (A = !1);
              }
              if (A) {
                for (; D.endsParent && D.parent; ) D = D.parent;
                return D;
              }
            }
            if (D.endsWithParent) return ke(D.parent, $, te);
          }
          function X(D) {
            return Y.matcher.regexIndex === 0
              ? ((ne += D[0]), 1)
              : ((u5 = !0), 0);
          }
          function K(D) {
            let $ = D[0],
              te = D.rule,
              A = new j1(te),
              k = [te.__beforeBegin, te["on:begin"]];
            for (let G of k) if (G && (G(D, A), A.isMatchIgnored)) return X($);
            return (
              te.skip
                ? (ne += $)
                : (te.excludeBegin && (ne += $),
                  he(),
                  !te.returnBegin && !te.excludeBegin && (ne = $)),
              Re(te, D),
              te.returnBegin ? 0 : $.length
            );
          }
          function re(D) {
            let $ = D[0],
              te = I.substring(D.index),
              A = ke(Y, D, te);
            if (!A) return J7;
            let k = Y;
            Y.endScope && Y.endScope._wrap
              ? (he(), be.addKeyword($, Y.endScope._wrap))
              : Y.endScope && Y.endScope._multi
              ? (he(), xe(Y.endScope, D))
              : k.skip
              ? (ne += $)
              : (k.returnEnd || k.excludeEnd || (ne += $),
                he(),
                k.excludeEnd && (ne = $));
            do
              Y.scope && be.closeNode(),
                !Y.skip && !Y.subLanguage && (Se += Y.relevance),
                (Y = Y.parent);
            while (Y !== A.parent);
            return A.starts && Re(A.starts, D), k.returnEnd ? 0 : $.length;
          }
          function se() {
            let D = [];
            for (let $ = Y; $ !== ze; $ = $.parent)
              $.scope && D.unshift($.scope);
            D.forEach(($) => be.openNode($));
          }
          let ie = {};
          function Ye(D, $) {
            let te = $ && $[0];
            if (((ne += D), te == null)) return he(), 0;
            if (
              ie.type === "begin" &&
              $.type === "end" &&
              ie.index === $.index &&
              te === ""
            ) {
              if (((ne += I.slice($.index, $.index + 1)), !r)) {
                let A = new Error(`0 width match regex (${z})`);
                throw ((A.languageName = z), (A.badRule = ie.rule), A);
              }
              return 1;
            }
            if (((ie = $), $.type === "begin")) return K($);
            if ($.type === "illegal" && !L) {
              let A = new Error(
                'Illegal lexeme "' +
                  te +
                  '" for mode "' +
                  (Y.scope || "<unnamed>") +
                  '"'
              );
              throw ((A.mode = Y), A);
            } else if ($.type === "end") {
              let A = re($);
              if (A !== J7) return A;
            }
            if ($.type === "illegal" && te === "") return 1;
            if (s5 > 1e5 && s5 > $.index * 3)
              throw new Error(
                "potential infinite loop, way more iterations than matches"
              );
            return (ne += te), te.length;
          }
          let ze = T(z);
          if (!ze)
            throw (
              (Pt(o.replace("{}", z)),
              new Error('Unknown language: "' + z + '"'))
            );
          let dt = yd(ze),
            it = "",
            Y = F || dt,
            vt = {},
            be = new l.__emitter(l);
          se();
          let ne = "",
            Se = 0,
            Ve = 0,
            s5 = 0,
            u5 = !1;
          try {
            for (Y.matcher.considerAll(); ; ) {
              s5++,
                u5 ? (u5 = !1) : Y.matcher.considerAll(),
                (Y.matcher.lastIndex = Ve);
              let D = Y.matcher.exec(I);
              if (!D) break;
              let $ = I.substring(Ve, D.index),
                te = Ye($, D);
              Ve = D.index + te;
            }
            return (
              Ye(I.substring(Ve)),
              be.closeAllNodes(),
              be.finalize(),
              (it = be.toHTML()),
              {
                language: z,
                value: it,
                relevance: Se,
                illegal: !1,
                _emitter: be,
                _top: Y,
              }
            );
          } catch (D) {
            if (D.message && D.message.includes("Illegal"))
              return {
                language: z,
                value: Hn(I),
                illegal: !0,
                relevance: 0,
                _illegalBy: {
                  message: D.message,
                  index: Ve,
                  context: I.slice(Ve - 100, Ve + 100),
                  mode: D.mode,
                  resultSoFar: it,
                },
                _emitter: be,
              };
            if (r)
              return {
                language: z,
                value: Hn(I),
                illegal: !1,
                relevance: 0,
                errorRaised: D,
                _emitter: be,
                _top: Y,
              };
            throw D;
          }
        }
        function d(z) {
          let I = {
            value: Hn(z),
            illegal: !1,
            relevance: 0,
            _top: i,
            _emitter: new l.__emitter(l),
          };
          return I._emitter.addText(z), I;
        }
        function p(z, I) {
          I = I || l.languages || Object.keys(t);
          let L = d(z),
            F = I.filter(T)
              .filter(O)
              .map((he) => h(he, z, !1));
          F.unshift(L);
          let q = F.sort((he, xe) => {
              if (he.relevance !== xe.relevance)
                return xe.relevance - he.relevance;
              if (he.language && xe.language) {
                if (T(he.language).supersetOf === xe.language) return 1;
                if (T(xe.language).supersetOf === he.language) return -1;
              }
              return 0;
            }),
            [f, v] = q,
            Oe = f;
          return (Oe.secondBest = v), Oe;
        }
        function m(z, I, L) {
          let F = (I && n[I]) || L;
          z.classList.add("hljs"), z.classList.add(`language-${F}`);
        }
        function g(z) {
          let I = null,
            L = u(z);
          if (s(L)) return;
          if (
            (V("before:highlightElement", { el: z, language: L }),
            z.children.length > 0 &&
              (l.ignoreUnescapedHTML ||
                (console.warn(
                  "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
                ),
                console.warn(
                  "https://github.com/highlightjs/highlight.js/wiki/security"
                ),
                console.warn("The element with unescaped HTML:"),
                console.warn(z)),
              l.throwUnescapedHTML))
          )
            throw new Pn(
              "One of your code blocks includes unescaped HTML.",
              z.innerHTML
            );
          I = z;
          let F = I.textContent,
            q = L ? c(F, { language: L, ignoreIllegals: !0 }) : p(F);
          (z.innerHTML = q.value),
            m(z, L, q.language),
            (z.result = {
              language: q.language,
              re: q.relevance,
              relevance: q.relevance,
            }),
            q.secondBest &&
              (z.secondBest = {
                language: q.secondBest.language,
                relevance: q.secondBest.relevance,
              }),
            V("after:highlightElement", { el: z, result: q, text: F });
        }
        function b(z) {
          l = X7(l, z);
        }
        let _ = () => {
          y(),
            c5(
              "10.6.0",
              "initHighlighting() deprecated.  Use highlightAll() now."
            );
        };
        function C() {
          y(),
            c5(
              "10.6.0",
              "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
            );
        }
        let M = !1;
        function y() {
          if (document.readyState === "loading") {
            M = !0;
            return;
          }
          document.querySelectorAll(l.cssSelector).forEach(g);
        }
        function w() {
          M && y();
        }
        typeof window < "u" &&
          window.addEventListener &&
          window.addEventListener("DOMContentLoaded", w, !1);
        function E(z, I) {
          let L = null;
          try {
            L = I(e);
          } catch (F) {
            if (
              (Pt(
                "Language definition for '{}' could not be registered.".replace(
                  "{}",
                  z
                )
              ),
              r)
            )
              Pt(F);
            else throw F;
            L = i;
          }
          L.name || (L.name = z),
            (t[z] = L),
            (L.rawDefinition = I.bind(null, e)),
            L.aliases && W(L.aliases, { languageName: z });
        }
        function x(z) {
          delete t[z];
          for (let I of Object.keys(n)) n[I] === z && delete n[I];
        }
        function R() {
          return Object.keys(t);
        }
        function T(z) {
          return (z = (z || "").toLowerCase()), t[z] || t[n[z]];
        }
        function W(z, { languageName: I }) {
          typeof z == "string" && (z = [z]),
            z.forEach((L) => {
              n[L.toLowerCase()] = I;
            });
        }
        function O(z) {
          let I = T(z);
          return I && !I.disableAutodetect;
        }
        function U(z) {
          z["before:highlightBlock"] &&
            !z["before:highlightElement"] &&
            (z["before:highlightElement"] = (I) => {
              z["before:highlightBlock"](Object.assign({ block: I.el }, I));
            }),
            z["after:highlightBlock"] &&
              !z["after:highlightElement"] &&
              (z["after:highlightElement"] = (I) => {
                z["after:highlightBlock"](Object.assign({ block: I.el }, I));
              });
        }
        function S(z) {
          U(z), a.push(z);
        }
        function V(z, I) {
          let L = z;
          a.forEach(function (F) {
            F[L] && F[L](I);
          });
        }
        function Q(z) {
          return (
            c5("10.7.0", "highlightBlock will be removed entirely in v12.0"),
            c5("10.7.0", "Please use highlightElement now."),
            g(z)
          );
        }
        Object.assign(e, {
          highlight: c,
          highlightAuto: p,
          highlightAll: y,
          highlightElement: g,
          highlightBlock: Q,
          configure: b,
          initHighlighting: _,
          initHighlightingOnLoad: C,
          registerLanguage: E,
          unregisterLanguage: x,
          listLanguages: R,
          getLanguage: T,
          registerAliases: W,
          autoDetection: O,
          inherit: X7,
          addPlugin: S,
        }),
          (e.debugMode = function () {
            r = !1;
          }),
          (e.safeMode = function () {
            r = !0;
          }),
          (e.versionString = xd),
          (e.regex = {
            concat: Bt,
            lookahead: tl,
            either: $n,
            optional: P6,
            anyNumberOfTimes: F6,
          });
        for (let z in Z1) typeof Z1[z] == "object" && Bn.exports(Z1[z]);
        return Object.assign(e, Z1), e;
      },
      F5 = zd({});
    ul.exports = F5;
    F5.HighlightJS = F5;
    F5.default = F5;
  });
  var hl = Pe((B_, Wn) => {
    (function () {
      var e;
      typeof Wn < "u"
        ? (e = Wn.exports = a)
        : (e = (function () {
            return this || (0, eval)("this");
          })()),
        (e.format = a),
        (e.vsprintf = n),
        typeof console < "u" &&
          typeof console.log == "function" &&
          (e.printf = t);
      function t() {
        console.log(a.apply(null, arguments));
      }
      function n(r, o) {
        return a.apply(null, [r].concat(o));
      }
      function a(r) {
        for (
          var o = 1,
            i = [].slice.call(arguments),
            l = 0,
            s = r.length,
            u = "",
            c,
            h = !1,
            d,
            p,
            m = !1,
            g,
            b = function () {
              return i[o++];
            },
            _ = function () {
              for (var C = ""; /\d/.test(r[l]); ) (C += r[l++]), (c = r[l]);
              return C.length > 0 ? parseInt(C) : null;
            };
          l < s;
          ++l
        )
          if (((c = r[l]), h))
            switch (
              ((h = !1),
              c == "."
                ? ((m = !1), (c = r[++l]))
                : c == "0" && r[l + 1] == "."
                ? ((m = !0), (l += 2), (c = r[l]))
                : (m = !0),
              (g = _()),
              c)
            ) {
              case "b":
                u += parseInt(b(), 10).toString(2);
                break;
              case "c":
                (d = b()),
                  typeof d == "string" || d instanceof String
                    ? (u += d)
                    : (u += String.fromCharCode(parseInt(d, 10)));
                break;
              case "d":
                u += parseInt(b(), 10);
                break;
              case "f":
                (p = String(parseFloat(b()).toFixed(g || 6))),
                  (u += m ? p : p.replace(/^0/, ""));
                break;
              case "j":
                u += JSON.stringify(b());
                break;
              case "o":
                u += "0" + parseInt(b(), 10).toString(8);
                break;
              case "s":
                u += b();
                break;
              case "x":
                u += "0x" + parseInt(b(), 10).toString(16);
                break;
              case "X":
                u += "0x" + parseInt(b(), 10).toString(16).toUpperCase();
                break;
              default:
                u += c;
                break;
            }
          else c === "%" ? (h = !0) : (u += c);
        return u;
      }
    })();
  });
  It();
  var Wl =
      typeof global == "object" && global && global.Object === Object && global,
    K5 = Wl;
  var Kl = typeof self == "object" && self && self.Object === Object && self,
    Yl = K5 || Kl || Function("return this")(),
    Gt = Yl;
  var Ql = Gt.Symbol,
    Wt = Ql;
  var Ea = Object.prototype,
    Zl = Ea.hasOwnProperty,
    jl = Ea.toString,
    v5 = Wt ? Wt.toStringTag : void 0;
  function Xl(e) {
    var t = Zl.call(e, v5),
      n = e[v5];
    try {
      e[v5] = void 0;
      var a = !0;
    } catch {}
    var r = jl.call(e);
    return a && (t ? (e[v5] = n) : delete e[v5]), r;
  }
  var _a = Xl;
  var Jl = Object.prototype,
    ec = Jl.toString;
  function tc(e) {
    return ec.call(e);
  }
  var Aa = tc;
  var nc = "[object Null]",
    ac = "[object Undefined]",
    ya = Wt ? Wt.toStringTag : void 0;
  function rc(e) {
    return e == null
      ? e === void 0
        ? ac
        : nc
      : ya && ya in Object(e)
      ? _a(e)
      : Aa(e);
  }
  var Kt = rc;
  function oc(e) {
    return e != null && typeof e == "object";
  }
  var Yt = oc;
  var ic = Array.isArray,
    wa = ic;
  function lc(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Et = lc;
  function cc(e) {
    return e;
  }
  var Y5 = cc;
  var sc = "[object AsyncFunction]",
    uc = "[object Function]",
    dc = "[object GeneratorFunction]",
    pc = "[object Proxy]";
  function hc(e) {
    if (!Et(e)) return !1;
    var t = Kt(e);
    return t == uc || t == dc || t == sc || t == pc;
  }
  var Q5 = hc;
  var mc = Gt["__core-js_shared__"],
    Z5 = mc;
  var xa = (function () {
    var e = /[^.]+$/.exec((Z5 && Z5.keys && Z5.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function fc(e) {
    return !!xa && xa in e;
  }
  var Ma = fc;
  var gc = Function.prototype,
    vc = gc.toString;
  function bc(e) {
    if (e != null) {
      try {
        return vc.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var za = bc;
  var Ec = /[\\^$.*+?()[\]{}|]/g,
    _c = /^\[object .+?Constructor\]$/,
    Ac = Function.prototype,
    yc = Object.prototype,
    wc = Ac.toString,
    xc = yc.hasOwnProperty,
    Mc = RegExp(
      "^" +
        wc
          .call(xc)
          .replace(Ec, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function zc(e) {
    if (!Et(e) || Ma(e)) return !1;
    var t = Q5(e) ? Mc : _c;
    return t.test(za(e));
  }
  var Sa = zc;
  function Sc(e, t) {
    return e?.[t];
  }
  var Ca = Sc;
  function Cc(e, t) {
    var n = Ca(e, t);
    return Sa(n) ? n : void 0;
  }
  var Ia = Cc;
  function Ic(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  var Ra = Ic;
  var Rc = 800,
    kc = 16,
    Nc = Date.now;
  function Tc(e) {
    var t = 0,
      n = 0;
    return function () {
      var a = Nc(),
        r = kc - (a - n);
      if (((n = a), r > 0)) {
        if (++t >= Rc) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var ka = Tc;
  function Lc(e) {
    return function () {
      return e;
    };
  }
  var Na = Lc;
  var Oc = (function () {
      try {
        var e = Ia(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    u0 = Oc;
  var Dc = u0
      ? function (e, t) {
          return u0(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Na(t),
            writable: !0,
          });
        }
      : Y5,
    Ta = Dc;
  var Hc = ka(Ta),
    La = Hc;
  var Vc = 9007199254740991,
    Fc = /^(?:0|[1-9]\d*)$/;
  function Pc(e, t) {
    var n = typeof e;
    return (
      (t = t ?? Vc),
      !!t &&
        (n == "number" || (n != "symbol" && Fc.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var j5 = Pc;
  function Bc(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var X5 = Bc;
  var Oa = Math.max;
  function Uc(e, t, n) {
    return (
      (t = Oa(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var a = arguments, r = -1, o = Oa(a.length - t, 0), i = Array(o);
          ++r < o;

        )
          i[r] = a[t + r];
        r = -1;
        for (var l = Array(t + 1); ++r < t; ) l[r] = a[r];
        return (l[t] = n(i)), Ra(e, this, l);
      }
    );
  }
  var Da = Uc;
  function $c(e, t) {
    return La(Da(e, t, Y5), e + "");
  }
  var Ha = $c;
  var qc = 9007199254740991;
  function Gc(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qc;
  }
  var J5 = Gc;
  function Wc(e) {
    return e != null && J5(e.length) && !Q5(e);
  }
  var e1 = Wc;
  function Kc(e, t, n) {
    if (!Et(n)) return !1;
    var a = typeof t;
    return (a == "number" ? e1(n) && j5(t, n.length) : a == "string" && t in n)
      ? X5(n[t], e)
      : !1;
  }
  var Va = Kc;
  var Yc = Object.prototype;
  function Qc(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || Yc;
    return e === n;
  }
  var Fa = Qc;
  function Zc(e, t) {
    for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
    return a;
  }
  var Pa = Zc;
  var jc = "[object Arguments]";
  function Xc(e) {
    return Yt(e) && Kt(e) == jc;
  }
  var d0 = Xc;
  var Ba = Object.prototype,
    Jc = Ba.hasOwnProperty,
    es = Ba.propertyIsEnumerable,
    ts = d0(
      (function () {
        return arguments;
      })()
    )
      ? d0
      : function (e) {
          return Yt(e) && Jc.call(e, "callee") && !es.call(e, "callee");
        },
    Ua = ts;
  function ns() {
    return !1;
  }
  var $a = ns;
  var Wa =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    qa =
      Wa && typeof module == "object" && module && !module.nodeType && module,
    as = qa && qa.exports === Wa,
    Ga = as ? Gt.Buffer : void 0,
    rs = Ga ? Ga.isBuffer : void 0,
    os = rs || $a,
    Ka = os;
  var is = "[object Arguments]",
    ls = "[object Array]",
    cs = "[object Boolean]",
    ss = "[object Date]",
    us = "[object Error]",
    ds = "[object Function]",
    ps = "[object Map]",
    hs = "[object Number]",
    ms = "[object Object]",
    fs = "[object RegExp]",
    gs = "[object Set]",
    vs = "[object String]",
    bs = "[object WeakMap]",
    Es = "[object ArrayBuffer]",
    _s = "[object DataView]",
    As = "[object Float32Array]",
    ys = "[object Float64Array]",
    ws = "[object Int8Array]",
    xs = "[object Int16Array]",
    Ms = "[object Int32Array]",
    zs = "[object Uint8Array]",
    Ss = "[object Uint8ClampedArray]",
    Cs = "[object Uint16Array]",
    Is = "[object Uint32Array]",
    ge = {};
  ge[As] =
    ge[ys] =
    ge[ws] =
    ge[xs] =
    ge[Ms] =
    ge[zs] =
    ge[Ss] =
    ge[Cs] =
    ge[Is] =
      !0;
  ge[is] =
    ge[ls] =
    ge[Es] =
    ge[cs] =
    ge[_s] =
    ge[ss] =
    ge[us] =
    ge[ds] =
    ge[ps] =
    ge[hs] =
    ge[ms] =
    ge[fs] =
    ge[gs] =
    ge[vs] =
    ge[bs] =
      !1;
  function Rs(e) {
    return Yt(e) && J5(e.length) && !!ge[Kt(e)];
  }
  var Ya = Rs;
  function ks(e) {
    return function (t) {
      return e(t);
    };
  }
  var Qa = ks;
  var Za =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    b5 =
      Za && typeof module == "object" && module && !module.nodeType && module,
    Ns = b5 && b5.exports === Za,
    p0 = Ns && K5.process,
    Ts = (function () {
      try {
        var e = b5 && b5.require && b5.require("util").types;
        return e || (p0 && p0.binding && p0.binding("util"));
      } catch {}
    })(),
    h0 = Ts;
  var ja = h0 && h0.isTypedArray,
    Ls = ja ? Qa(ja) : Ya,
    Xa = Ls;
  var Os = Object.prototype,
    Ds = Os.hasOwnProperty;
  function Hs(e, t) {
    var n = wa(e),
      a = !n && Ua(e),
      r = !n && !a && Ka(e),
      o = !n && !a && !r && Xa(e),
      i = n || a || r || o,
      l = i ? Pa(e.length, String) : [],
      s = l.length;
    for (var u in e)
      (t || Ds.call(e, u)) &&
        !(
          i &&
          (u == "length" ||
            (r && (u == "offset" || u == "parent")) ||
            (o && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            j5(u, s))
        ) &&
        l.push(u);
    return l;
  }
  var Ja = Hs;
  function Vs(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var er = Vs;
  var Fs = Object.prototype,
    Ps = Fs.hasOwnProperty;
  function Bs(e) {
    if (!Et(e)) return er(e);
    var t = Fa(e),
      n = [];
    for (var a in e) (a == "constructor" && (t || !Ps.call(e, a))) || n.push(a);
    return n;
  }
  var tr = Bs;
  function Us(e) {
    return e1(e) ? Ja(e, !0) : tr(e);
  }
  var nr = Us;
  var ar = Object.prototype,
    $s = ar.hasOwnProperty,
    qs = Ha(function (e, t) {
      e = Object(e);
      var n = -1,
        a = t.length,
        r = a > 2 ? t[2] : void 0;
      for (r && Va(t[0], t[1], r) && (a = 1); ++n < a; )
        for (var o = t[n], i = nr(o), l = -1, s = i.length; ++l < s; ) {
          var u = i[l],
            c = e[u];
          (c === void 0 || (X5(c, ar[u]) && !$s.call(e, u))) && (e[u] = o[u]);
        }
      return e;
    }),
    m0 = qs;
  var ir = Be(Qt());
  var or = { triggerMode: "always", theme: "auto", language: "auto" };
  async function g0() {
    let e = await ir.default.storage.local.get(Object.keys(or));
    return m0(e, or);
  }
  var lr = Be(Qt());
  function cr() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  function sr() {
    return lr.default.runtime.getManifest().version;
  }
  at();
  at();
  var E2 = Be(t2(), 1);
  at();
  var st = new WeakMap(),
    n2 = {},
    yt = () => {},
    Ze = yt(),
    A5 = Object,
    Ee = (e) => e === Ze,
    rt = (e) => typeof e == "function",
    ut = (e, t) => ({ ...e, ...t }),
    L0 = "undefined",
    l1 = typeof window != L0,
    I0 = typeof document != L0,
    fu = () => l1 && typeof window.requestAnimationFrame != L0,
    O0 = (e, t) => {
      let n = st.get(e);
      return [
        () => e.get(t) || n2,
        (a) => {
          let r = e.get(t);
          n[5](t, ut(r, a), r || n2);
        },
        n[6],
      ];
    },
    o1 = new WeakMap(),
    gu = 0,
    y5 = (e) => {
      let t = typeof e,
        n = e && e.constructor,
        a = n == Date,
        r,
        o;
      if (A5(e) === e && !a && n != RegExp) {
        if (((r = o1.get(e)), r)) return r;
        if (((r = ++gu + "~"), o1.set(e, r), n == Array)) {
          for (r = "@", o = 0; o < e.length; o++) r += y5(e[o]) + ",";
          o1.set(e, r);
        }
        if (n == A5) {
          r = "#";
          let i = A5.keys(e).sort();
          for (; !Ee((o = i.pop())); )
            Ee(e[o]) || (r += o + ":" + y5(e[o]) + ",");
          o1.set(e, r);
        }
      } else
        r = a
          ? e.toJSON()
          : t == "symbol"
          ? e.toString()
          : t == "string"
          ? JSON.stringify(e)
          : "" + e;
      return r;
    },
    R0 = !0,
    vu = () => R0,
    [k0, N0] =
      l1 && window.addEventListener
        ? [
            window.addEventListener.bind(window),
            window.removeEventListener.bind(window),
          ]
        : [yt, yt],
    bu = () => {
      let e = I0 && document.visibilityState;
      return Ee(e) || e !== "hidden";
    },
    Eu = (e) => (
      I0 && document.addEventListener("visibilitychange", e),
      k0("focus", e),
      () => {
        I0 && document.removeEventListener("visibilitychange", e),
          N0("focus", e);
      }
    ),
    _u = (e) => {
      let t = () => {
          (R0 = !0), e();
        },
        n = () => {
          R0 = !1;
        };
      return (
        k0("online", t),
        k0("offline", n),
        () => {
          N0("online", t), N0("offline", n);
        }
      );
    },
    Au = { isOnline: vu, isVisible: bu },
    yu = { initFocus: Eu, initReconnect: _u },
    D0 = !ae.useId,
    n5 = !l1 || "Deno" in window,
    o2 = (e) => (fu() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
    w5 = n5 ? qe : At,
    C0 = typeof navigator < "u" && navigator.connection,
    a2 =
      !n5 &&
      C0 &&
      (["slow-2g", "2g"].includes(C0.effectiveType) || C0.saveData),
    c1 = (e) => {
      if (rt(e))
        try {
          e = e();
        } catch {
          e = "";
        }
      let t = e;
      return (
        (e =
          typeof e == "string"
            ? e
            : (Array.isArray(e) ? e.length : e)
            ? y5(e)
            : ""),
        [e, t]
      );
    },
    wu = 0,
    i1 = () => ++wu,
    i2 = 0,
    l2 = 1,
    c2 = 2,
    s1 = {
      __proto__: null,
      FOCUS_EVENT: i2,
      RECONNECT_EVENT: l2,
      MUTATE_EVENT: c2,
    };
  async function H0(...e) {
    let [t, n, a, r] = e,
      o = ut(
        { populateCache: !0, throwOnError: !0 },
        typeof r == "boolean" ? { revalidate: r } : r || {}
      ),
      i = o.populateCache,
      l = o.rollbackOnError,
      s = o.optimisticData,
      u = o.revalidate !== !1,
      c = (p) => (typeof l == "function" ? l(p) : l !== !1),
      h = o.throwOnError;
    if (rt(n)) {
      let p = n,
        m = [],
        g = t.keys();
      for (let b = g.next(); !b.done; b = g.next()) {
        let _ = b.value;
        !_.startsWith("$inf$") && p(t.get(_)._k) && m.push(_);
      }
      return Promise.all(m.map(d));
    }
    return d(n);
    async function d(p) {
      let [m] = c1(p);
      if (!m) return;
      let [g, b] = O0(t, m),
        [_, C, M] = st.get(t),
        y = _[m],
        w = () =>
          u && (delete M[m], y && y[0])
            ? y[0](c2).then(() => g().data)
            : g().data;
      if (e.length < 3) return w();
      let E = a,
        x,
        R = i1();
      C[m] = [R, 0];
      let T = !Ee(s),
        W = g(),
        O = W.data,
        U = W._c,
        S = Ee(U) ? O : U;
      if ((T && ((s = rt(s) ? s(S) : s), b({ data: s, _c: S })), rt(E)))
        try {
          E = E(S);
        } catch (Q) {
          x = Q;
        }
      if (E && rt(E.then))
        if (
          ((E = await E.catch((Q) => {
            x = Q;
          })),
          R !== C[m][0])
        ) {
          if (x) throw x;
          return E;
        } else x && T && c(x) && ((i = !0), (E = S), b({ data: E, _c: Ze }));
      i && (x || (rt(i) && (E = i(E, S)), b({ data: E, _c: Ze }))),
        (C[m][1] = i1());
      let V = await w();
      if ((b({ _c: Ze }), x)) {
        if (h) throw x;
        return;
      }
      return i ? V : E;
    }
  }
  var r2 = (e, t) => {
      for (let n in e) e[n][0] && e[n][0](t);
    },
    s2 = (e, t) => {
      if (!st.has(e)) {
        let n = ut(yu, t),
          a = {},
          r = H0.bind(Ze, e),
          o = yt,
          i = {},
          l = (c, h) => {
            let d = i[c] || [];
            return (i[c] = d), d.push(h), () => d.splice(d.indexOf(h), 1);
          },
          s = (c, h, d) => {
            e.set(c, h);
            let p = i[c];
            if (p) for (let m = p.length; m--; ) p[m](d, h);
          },
          u = () => {
            if (!st.has(e) && (st.set(e, [a, {}, {}, {}, r, s, l]), !n5)) {
              let c = n.initFocus(setTimeout.bind(Ze, r2.bind(Ze, a, i2))),
                h = n.initReconnect(setTimeout.bind(Ze, r2.bind(Ze, a, l2)));
              o = () => {
                c && c(), h && h(), st.delete(e);
              };
            }
          };
        return u(), [e, r, u, o];
      }
      return [e, st.get(e)[4]];
    },
    xu = (e, t, n, a, r) => {
      let o = n.errorRetryCount,
        i = r.retryCount,
        l =
          ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) *
          n.errorRetryInterval;
      (!Ee(o) && i > o) || setTimeout(a, l, r);
    },
    Mu = (e, t) => y5(e) == y5(t),
    [V0, u2] = s2(new Map()),
    F0 = ut(
      {
        onLoadingSlow: yt,
        onSuccess: yt,
        onError: yt,
        onErrorRetry: xu,
        onDiscarded: yt,
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
        revalidateIfStale: !0,
        shouldRetryOnError: !0,
        errorRetryInterval: a2 ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: a2 ? 5e3 : 3e3,
        compare: Mu,
        isPaused: () => !1,
        cache: V0,
        mutate: u2,
        fallback: {},
      },
      Au
    ),
    d2 = (e, t) => {
      let n = ut(e, t);
      if (t) {
        let { use: a, fallback: r } = e,
          { use: o, fallback: i } = t;
        a && o && (n.use = a.concat(o)), r && i && (n.fallback = ut(r, i));
      }
      return n;
    },
    T0 = qt({}),
    p2 = (e) => {
      let { value: t } = e,
        n = jt(T0),
        a = rt(t),
        r = ct(() => (a ? t(n) : t), [a, n, t]),
        o = ct(() => (a ? r : d2(n, r)), [a, n, r]),
        i = r && r.provider,
        [l] = ye(() => (i ? s2(i(o.cache || V0), r) : Ze));
      return (
        l && ((o.cache = l[0]), (o.mutate = l[1])),
        w5(() => {
          if (l) return l[2] && l[2](), l[3];
        }, []),
        Ue(T0.Provider, ut(e, { value: o }))
      );
    },
    h2 = l1 && window.__SWR_DEVTOOLS_USE__,
    zu = h2 ? window.__SWR_DEVTOOLS_USE__ : [],
    Su = () => {
      h2 && (window.__SWR_DEVTOOLS_REACT__ = ae);
    },
    m2 = (e) =>
      rt(e[1])
        ? [e[0], e[1], e[2] || {}]
        : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
    f2 = () => ut(F0, jt(T0));
  var Cu = (e) => (t, n, a) =>
      e(
        t,
        n &&
          ((...o) => {
            let i = c1(t)[0],
              [, , , l] = st.get(V0),
              s = l[i];
            return s ? (delete l[i], s) : n(...o);
          }),
        a
      ),
    Iu = zu.concat(Cu),
    g2 = (e) =>
      function (...n) {
        let a = f2(),
          [r, o, i] = m2(n),
          l = d2(a, i),
          s = e,
          { use: u } = l,
          c = (u || []).concat(Iu);
        for (let h = c.length; h--; ) s = c[h](s);
        return s(r, o || l.fetcher || null, l);
      };
  var v2 = (e, t, n) => {
      let a = t[e] || (t[e] = []);
      return (
        a.push(n),
        () => {
          let r = a.indexOf(n);
          r >= 0 && ((a[r] = a[a.length - 1]), a.pop());
        }
      );
    },
    b2 =
      (e, t) =>
      (...n) => {
        let [a, r, o] = m2(n),
          i = (o.use || []).concat(t);
        return e(a, r, { ...o, use: i });
      };
  Su();
  var P0 = { dedupe: !0 },
    Ru = (e, t, n) => {
      let {
          cache: a,
          compare: r,
          suspense: o,
          fallbackData: i,
          revalidateOnMount: l,
          refreshInterval: s,
          refreshWhenHidden: u,
          refreshWhenOffline: c,
          keepPreviousData: h,
        } = n,
        [d, p, m] = st.get(a),
        [g, b] = c1(e),
        _ = Xe(!1),
        C = Xe(!1),
        M = Xe(g),
        y = Xe(t),
        w = Xe(n),
        E = () => w.current,
        x = () => E().isVisible() && E().isOnline(),
        [R, T, W] = O0(a, g),
        O = Xe({}).current,
        U = Ee(i) ? n.fallback[g] : i,
        S = (X, K) => {
          let re = !0;
          for (let se in O) {
            let ie = se;
            r(K[ie], X[ie]) ||
              (ie === "data" && Ee(X[ie]) && r(K[ie], f)) ||
              (re = !1);
          }
          return re;
        },
        V = ct(() => {
          let X = (() =>
              !g || !t ? !1 : Ee(l) ? !(E().isPaused() || o) : l)(),
            K = () => {
              let se = R(),
                ie = ut(se);
              return (
                delete ie._k,
                X ? { isValidating: !0, isLoading: !0, ...ie } : ie
              );
            },
            re = K();
          return () => {
            let se = K();
            return S(se, re) ? re : (re = se);
          };
        }, [a, g]),
        Q = (0, E2.useSyncExternalStore)(
          Ne(
            (X) =>
              W(g, (K, re) => {
                S(K, re) || X();
              }),
            [a, g]
          ),
          V,
          V
        ),
        z = !_.current,
        I = Q.data,
        L = Ee(I) ? U : I,
        F = Q.error,
        q = Xe(L),
        f = h ? (Ee(I) ? q.current : I) : L,
        v = (() =>
          z && !Ee(l)
            ? l
            : E().isPaused()
            ? !1
            : o
            ? Ee(L)
              ? !1
              : n.revalidateIfStale
            : Ee(L) || n.revalidateIfStale)(),
        Oe = !!(g && t && z && v),
        he = Ee(Q.isValidating) ? Oe : Q.isValidating,
        xe = Ee(Q.isLoading) ? Oe : Q.isLoading,
        Re = Ne(
          async (X) => {
            let K = y.current;
            if (!g || !K || C.current || E().isPaused()) return !1;
            let re,
              se,
              ie = !0,
              Ye = X || {},
              ze = !m[g] || !Ye.dedupe,
              dt = () =>
                D0
                  ? !C.current && g === M.current && _.current
                  : g === M.current,
              it = { isValidating: !1, isLoading: !1 },
              Y = () => {
                T(it);
              },
              vt = () => {
                let ne = m[g];
                ne && ne[1] === se && delete m[g];
              },
              be = { isValidating: !0 };
            Ee(R().data) && (be.isLoading = !0);
            try {
              if (
                (ze &&
                  (T(be),
                  n.loadingTimeout &&
                    Ee(R().data) &&
                    setTimeout(() => {
                      ie && dt() && E().onLoadingSlow(g, n);
                    }, n.loadingTimeout),
                  (m[g] = [K(b), i1()])),
                ([re, se] = m[g]),
                (re = await re),
                ze && setTimeout(vt, n.dedupingInterval),
                !m[g] || m[g][1] !== se)
              )
                return ze && dt() && E().onDiscarded(g), !1;
              it.error = Ze;
              let ne = p[g];
              if (!Ee(ne) && (se <= ne[0] || se <= ne[1] || ne[1] === 0))
                return Y(), ze && dt() && E().onDiscarded(g), !1;
              let Se = R().data;
              (it.data = r(Se, re) ? Se : re),
                ze && dt() && E().onSuccess(re, g, n);
            } catch (ne) {
              vt();
              let Se = E(),
                { shouldRetryOnError: Ve } = Se;
              Se.isPaused() ||
                ((it.error = ne),
                ze &&
                  dt() &&
                  (Se.onError(ne, g, Se),
                  (Ve === !0 || (rt(Ve) && Ve(ne))) &&
                    x() &&
                    Se.onErrorRetry(ne, g, Se, Re, {
                      retryCount: (Ye.retryCount || 0) + 1,
                      dedupe: !0,
                    })));
            }
            return (ie = !1), Y(), !0;
          },
          [g, a]
        ),
        ke = Ne((...X) => H0(a, M.current, ...X), []);
      if (
        (w5(() => {
          (y.current = t), (w.current = n), Ee(I) || (q.current = I);
        }),
        w5(() => {
          if (!g) return;
          let X = Re.bind(Ze, P0),
            K = 0,
            se = v2(g, d, (ie) => {
              if (ie == s1.FOCUS_EVENT) {
                let Ye = Date.now();
                E().revalidateOnFocus &&
                  Ye > K &&
                  x() &&
                  ((K = Ye + E().focusThrottleInterval), X());
              } else if (ie == s1.RECONNECT_EVENT)
                E().revalidateOnReconnect && x() && X();
              else if (ie == s1.MUTATE_EVENT) return Re();
            });
          return (
            (C.current = !1),
            (M.current = g),
            (_.current = !0),
            T({ _k: b }),
            v && (Ee(L) || n5 ? X() : o2(X)),
            () => {
              (C.current = !0), se();
            }
          );
        }, [g]),
        w5(() => {
          let X;
          function K() {
            let se = rt(s) ? s(L) : s;
            se && X !== -1 && (X = setTimeout(re, se));
          }
          function re() {
            !R().error && (u || E().isVisible()) && (c || E().isOnline())
              ? Re(P0).then(K)
              : K();
          }
          return (
            K(),
            () => {
              X && (clearTimeout(X), (X = -1));
            }
          );
        }, [s, u, c, g]),
        E5(f),
        o && Ee(L) && g)
      )
        throw !D0 && n5
          ? new Error("Fallback data is required when using suspense in SSR.")
          : ((y.current = t),
            (w.current = n),
            (C.current = !1),
            Ee(F) ? Re(P0) : F);
      return {
        mutate: ke,
        get data() {
          return (O.data = !0), f;
        },
        get error() {
          return (O.error = !0), F;
        },
        get isValidating() {
          return (O.isValidating = !0), he;
        },
        get isLoading() {
          return (O.isLoading = !0), xe;
        },
      };
    },
    wh = A5.defineProperty(p2, "defaultValue", { value: F0 });
  var _2 = g2(Ru);
  var ku = (e) => (t, n, a) => (
      (a.revalidateOnFocus = !1),
      (a.revalidateIfStale = !1),
      (a.revalidateOnReconnect = !1),
      e(t, n, a)
    ),
    A2 = b2(_2, ku);
  var Nu = "https://github.com/rakiburrahamanCS";
  async function y2() {
    return fetch(`${Nu}/api/p`, { headers: { "x-version": sr() } }).then((e) =>
      e.json()
    );
  }
  at();
  var Tu = { small: 16, medium: 32, large: 64 };
  function kt(e, t, n) {
    var a = n(),
      r = Object.keys(a);
    function o(i) {
      var l = i["aria-label"],
        s = i.tabIndex,
        u = i.className,
        c = i.fill,
        h = c === void 0 ? "currentColor" : c,
        d = i.size,
        p = i.verticalAlign,
        m = Tu[d] || d,
        g = Lu(r, m),
        b = a[g].width,
        _ = m * (b / g),
        C = a[g].path;
      return ae.createElement(
        "svg",
        {
          "aria-hidden": l ? "false" : "true",
          tabIndex: s,
          focusable: s >= 0 ? "true" : "false",
          "aria-label": l,
          role: "img",
          className: u,
          viewBox: "0 0 ".concat(b, " ").concat(g),
          width: _,
          height: m,
          fill: h,
          style: {
            display: "inline-block",
            userSelect: "none",
            verticalAlign: p,
            overflow: "visible",
          },
        },
        C
      );
    }
    return (
      (o.displayName = e),
      (o.defaultProps = {
        className: t,
        size: 16,
        verticalAlign: "text-bottom",
      }),
      o
    );
  }
  function Lu(e, t) {
    return e
      .map(function (n) {
        return parseInt(n, 10);
      })
      .reduce(function (n, a) {
        return a <= t ? a : n;
      }, e[0]);
  }
  var w2 = kt("CheckIcon", "octicon octicon-check", function () {
    return {
      16: {
        width: 16,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z",
        }),
      },
      24: {
        width: 24,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z",
        }),
      },
    };
  });
  var x2 = kt("CopyIcon", "octicon octicon-copy", function () {
    return {
      16: {
        width: 16,
        path: ae.createElement(
          ae.Fragment,
          null,
          ae.createElement("path", {
            fillRule: "evenodd",
            d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z",
          }),
          ae.createElement("path", {
            fillRule: "evenodd",
            d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z",
          })
        ),
      },
      24: {
        width: 24,
        path: ae.createElement(
          ae.Fragment,
          null,
          ae.createElement("path", {
            fillRule: "evenodd",
            d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z",
          }),
          ae.createElement("path", {
            d: "M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z",
          })
        ),
      },
    };
  });
  var M2 = kt("GearIcon", "octicon octicon-gear", function () {
    return {
      16: {
        width: 16,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z",
        }),
      },
      24: {
        width: 24,
        path: ae.createElement(
          ae.Fragment,
          null,
          ae.createElement("path", {
            fillRule: "evenodd",
            d: "M16 12a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
          }),
          ae.createElement("path", {
            fillRule: "evenodd",
            d: "M12 1c-.268 0-.534.01-.797.028-.763.055-1.345.617-1.512 1.304l-.352 1.45c-.02.078-.09.172-.225.22a8.45 8.45 0 00-.728.303c-.13.06-.246.044-.315.002l-1.274-.776c-.604-.368-1.412-.354-1.99.147-.403.348-.78.726-1.129 1.128-.5.579-.515 1.387-.147 1.99l.776 1.275c.042.069.059.185-.002.315-.112.237-.213.48-.302.728-.05.135-.143.206-.221.225l-1.45.352c-.687.167-1.249.749-1.304 1.512a11.149 11.149 0 000 1.594c.055.763.617 1.345 1.304 1.512l1.45.352c.078.02.172.09.22.225.09.248.191.491.303.729.06.129.044.245.002.314l-.776 1.274c-.368.604-.354 1.412.147 1.99.348.403.726.78 1.128 1.129.579.5 1.387.515 1.99.147l1.275-.776c.069-.042.185-.059.315.002.237.112.48.213.728.302.135.05.206.143.225.221l.352 1.45c.167.687.749 1.249 1.512 1.303a11.125 11.125 0 001.594 0c.763-.054 1.345-.616 1.512-1.303l.352-1.45c.02-.078.09-.172.225-.22.248-.09.491-.191.729-.303.129-.06.245-.044.314-.002l1.274.776c.604.368 1.412.354 1.99-.147.403-.348.78-.726 1.129-1.128.5-.579.515-1.387.147-1.99l-.776-1.275c-.042-.069-.059-.185.002-.315.112-.237.213-.48.302-.728.05-.135.143-.206.221-.225l1.45-.352c.687-.167 1.249-.749 1.303-1.512a11.125 11.125 0 000-1.594c-.054-.763-.616-1.345-1.303-1.512l-1.45-.352c-.078-.02-.172-.09-.22-.225a8.469 8.469 0 00-.303-.728c-.06-.13-.044-.246-.002-.315l.776-1.274c.368-.604.354-1.412-.147-1.99-.348-.403-.726-.78-1.128-1.129-.579-.5-1.387-.515-1.99-.147l-1.275.776c-.069.042-.185.059-.315-.002a8.465 8.465 0 00-.728-.302c-.135-.05-.206-.143-.225-.221l-.352-1.45c-.167-.687-.749-1.249-1.512-1.304A11.149 11.149 0 0012 1zm-.69 1.525a9.648 9.648 0 011.38 0c.055.004.135.05.162.16l.351 1.45c.153.628.626 1.08 1.173 1.278.205.074.405.157.6.249a1.832 1.832 0 001.733-.074l1.275-.776c.097-.06.186-.036.228 0 .348.302.674.628.976.976.036.042.06.13 0 .228l-.776 1.274a1.832 1.832 0 00-.074 1.734c.092.195.175.395.248.6.198.547.652 1.02 1.278 1.172l1.45.353c.111.026.157.106.161.161a9.653 9.653 0 010 1.38c-.004.055-.05.135-.16.162l-1.45.351a1.833 1.833 0 00-1.278 1.173 6.926 6.926 0 01-.25.6 1.832 1.832 0 00.075 1.733l.776 1.275c.06.097.036.186 0 .228a9.555 9.555 0 01-.976.976c-.042.036-.13.06-.228 0l-1.275-.776a1.832 1.832 0 00-1.733-.074 6.926 6.926 0 01-.6.248 1.833 1.833 0 00-1.172 1.278l-.353 1.45c-.026.111-.106.157-.161.161a9.653 9.653 0 01-1.38 0c-.055-.004-.135-.05-.162-.16l-.351-1.45a1.833 1.833 0 00-1.173-1.278 6.928 6.928 0 01-.6-.25 1.832 1.832 0 00-1.734.075l-1.274.776c-.097.06-.186.036-.228 0a9.56 9.56 0 01-.976-.976c-.036-.042-.06-.13 0-.228l.776-1.275a1.832 1.832 0 00.074-1.733 6.948 6.948 0 01-.249-.6 1.833 1.833 0 00-1.277-1.172l-1.45-.353c-.111-.026-.157-.106-.161-.161a9.648 9.648 0 010-1.38c.004-.055.05-.135.16-.162l1.45-.351a1.833 1.833 0 001.278-1.173 6.95 6.95 0 01.249-.6 1.832 1.832 0 00-.074-1.734l-.776-1.274c-.06-.097-.036-.186 0-.228.302-.348.628-.674.976-.976.042-.036.13-.06.228 0l1.274.776a1.832 1.832 0 001.734.074 6.95 6.95 0 01.6-.249 1.833 1.833 0 001.172-1.277l.353-1.45c.026-.111.106-.157.161-.161z",
          })
        ),
      },
    };
  });
  var z2 = kt("LightBulbIcon", "octicon octicon-light-bulb", function () {
    return {
      16: {
        width: 16,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z",
        }),
      },
      24: {
        width: 24,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 01-1.436.432c-.138-.46-.397-.89-.753-1.357a18.354 18.354 0 00-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.75.75 0 01-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5zM9.5 21.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM8.75 18a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z",
        }),
      },
    };
  });
  var S2 = kt("SearchIcon", "octicon octicon-search", function () {
    return {
      16: {
        width: 16,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z",
        }),
      },
      24: {
        width: 24,
        path: ae.createElement("path", {
          fillRule: "evenodd",
          d: "M10.25 2a8.25 8.25 0 105.28 14.59l5.69 5.69a.75.75 0 101.06-1.06l-5.69-5.69A8.25 8.25 0 0010.25 2zM3.5 10.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z",
        }),
      },
    };
  });
  var C2 = kt("ThumbsdownIcon", "octicon octicon-thumbsdown", function () {
      return {
        16: {
          width: 16,
          path: ae.createElement("path", {
            fillRule: "evenodd",
            d: "M7.083 15.986c1.34.153 2.334-.982 2.334-2.183v-.5c0-1.329.646-2.123 1.317-2.614.329-.24.66-.403.919-.508a1.75 1.75 0 001.514.872h1a1.75 1.75 0 001.75-1.75v-7.5a1.75 1.75 0 00-1.75-1.75h-1a1.75 1.75 0 00-1.662 1.2c-.525-.074-1.068-.228-1.726-.415L9.305.705C8.151.385 6.765.053 4.917.053c-1.706 0-2.97.152-3.722 1.139-.353.463-.537 1.042-.669 1.672C.41 3.424.32 4.108.214 4.897l-.04.306c-.25 1.869-.266 3.318.188 4.316.244.537.622.943 1.136 1.2.495.248 1.066.334 1.669.334h1.422l-.015.112c-.07.518-.157 1.17-.157 1.638 0 .921.151 1.718.655 2.299.512.589 1.248.797 2.011.884zm4.334-13.232c-.706-.089-1.39-.284-2.072-.479a63.914 63.914 0 00-.441-.125c-1.096-.304-2.335-.597-3.987-.597-1.794 0-2.28.222-2.529.548-.147.193-.275.505-.393 1.07-.105.502-.188 1.124-.295 1.93l-.04.3c-.25 1.882-.19 2.933.067 3.497a.921.921 0 00.443.48c.208.104.52.175.997.175h1.75c.685 0 1.295.577 1.205 1.335-.022.192-.049.39-.075.586-.066.488-.13.97-.13 1.329 0 .808.144 1.15.288 1.316.137.157.401.303 1.048.377.307.035.664-.237.664-.693v-.5c0-1.922.978-3.127 1.932-3.825a5.862 5.862 0 011.568-.809V2.754zm1.75 6.798a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1z",
          }),
        },
        24: {
          width: 24,
          path: ae.createElement("path", {
            fillRule: "evenodd",
            d: "M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.864 1.864 0 00-.523-.13A1.75 1.75 0 015.25 16h-1.5A1.75 1.75 0 012 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 011.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955zM7 5.082c1.059-.064 2.079-.355 3.118-.651.188-.054.377-.108.568-.16 1.406-.392 3.006-.771 5.142-.771 2.277 0 3.004.274 3.39.781.216.283.388.718.54 1.448.136.65.242 1.45.379 2.477l.05.385c.32 2.398.253 3.794-.102 4.574-.16.352-.375.569-.66.711-.305.153-.74.245-1.365.245h-2.37c-.681 0-1.293.57-1.211 1.328.026.244.065.537.105.834l.07.527c.06.482.105.922.105 1.25 0 1.125-.213 1.617-.473 1.873-.275.27-.774.456-1.795.528-.351.024-.698-.274-.698-.71v-1.053c0-3.55-2.488-5.063-3.68-5.577A3.485 3.485 0 007 12.861V5.08zM3.75 3.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25h-1.5z",
          }),
        },
      };
    }),
    I2 = kt("ThumbsupIcon", "octicon octicon-thumbsup", function () {
      return {
        16: {
          width: 16,
          path: ae.createElement("path", {
            fillRule: "evenodd",
            d: "M8.834.066C7.494-.087 6.5 1.048 6.5 2.25v.5c0 1.329-.647 2.124-1.318 2.614-.328.24-.66.403-.918.508A1.75 1.75 0 002.75 5h-1A1.75 1.75 0 000 6.75v7.5C0 15.216.784 16 1.75 16h1a1.75 1.75 0 001.662-1.201c.525.075 1.067.229 1.725.415.152.043.31.088.475.133 1.154.32 2.54.653 4.388.653 1.706 0 2.97-.153 3.722-1.14.353-.463.537-1.042.668-1.672.118-.56.208-1.243.313-2.033l.04-.306c.25-1.869.265-3.318-.188-4.316a2.418 2.418 0 00-1.137-1.2C13.924 5.085 13.353 5 12.75 5h-1.422l.015-.113c.07-.518.157-1.17.157-1.637 0-.922-.151-1.719-.656-2.3-.51-.589-1.247-.797-2.01-.884zM4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598 1.794 0 2.28-.223 2.528-.549.147-.193.276-.505.394-1.07.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.922.922 0 00-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336.023-.192.05-.39.076-.586.065-.488.13-.97.13-1.328 0-.809-.144-1.15-.288-1.316-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.861 5.861 0 01-1.567.81V13.3zM2.75 6.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1z",
          }),
        },
        24: {
          width: 24,
          path: ae.createElement("path", {
            fillRule: "evenodd",
            d: "M12.596 2.043c-1.301-.092-2.303.986-2.303 2.206v1.053c0 2.666-1.813 3.785-2.774 4.2a1.866 1.866 0 01-.523.131A1.75 1.75 0 005.25 8h-1.5A1.75 1.75 0 002 9.75v10.5c0 .967.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.742-1.58c.838.06 1.667.296 2.69.586l.602.17c1.464.406 3.213.824 5.544.824 2.188 0 3.693-.204 4.583-1.372.422-.554.65-1.255.816-2.05.148-.708.262-1.57.396-2.58l.051-.39c.319-2.386.328-4.18-.223-5.394-.293-.644-.743-1.125-1.355-1.431-.59-.296-1.284-.404-2.036-.404h-2.05l.056-.429c.025-.18.05-.372.076-.572.06-.483.117-1.006.117-1.438 0-1.245-.222-2.253-.92-2.941-.684-.675-1.668-.88-2.743-.956zM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26v7.78zM3.75 20.5a.25.25 0 01-.25-.25V9.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25h-1.5z",
          }),
        },
      };
    });
  Xt();
  Xt();
  at();
  var R2 = ["http", "https", "mailto", "tel"];
  function k2(e) {
    let t = (e || "").trim(),
      n = t.charAt(0);
    if (n === "#" || n === "/") return t;
    let a = t.indexOf(":");
    if (a === -1) return t;
    let r = -1;
    for (; ++r < R2.length; ) {
      let o = R2[r];
      if (a === o.length && t.slice(0, o.length).toLowerCase() === o) return t;
    }
    return (
      (r = t.indexOf("?")),
      (r !== -1 && a > r) || ((r = t.indexOf("#")), r !== -1 && a > r)
        ? t
        : "javascript:void(0)"
    );
  }
  at();
  var V2 = Be(B0(), 1);
  function Nt(e) {
    return !e || typeof e != "object"
      ? ""
      : "position" in e || "type" in e
      ? T2(e.position)
      : "start" in e || "end" in e
      ? T2(e)
      : "line" in e || "column" in e
      ? U0(e)
      : "";
  }
  function U0(e) {
    return L2(e && e.line) + ":" + L2(e && e.column);
  }
  function T2(e) {
    return U0(e && e.start) + "-" + U0(e && e.end);
  }
  function L2(e) {
    return e && typeof e == "number" ? e : 1;
  }
  var De = class extends Error {
    constructor(t, n, a) {
      let r = [null, null],
        o = {
          start: { line: null, column: null },
          end: { line: null, column: null },
        };
      if (
        (super(),
        typeof n == "string" && ((a = n), (n = void 0)),
        typeof a == "string")
      ) {
        let i = a.indexOf(":");
        i === -1
          ? (r[1] = a)
          : ((r[0] = a.slice(0, i)), (r[1] = a.slice(i + 1)));
      }
      n &&
        ("type" in n || "position" in n
          ? n.position && (o = n.position)
          : "start" in n || "end" in n
          ? (o = n)
          : ("line" in n || "column" in n) && (o.start = n)),
        (this.name = Nt(n) || "1:1"),
        (this.message = typeof t == "object" ? t.message : t),
        (this.stack = ""),
        typeof t == "object" && t.stack && (this.stack = t.stack),
        (this.reason = this.message),
        this.fatal,
        (this.line = o.start.line),
        (this.column = o.start.column),
        (this.position = o),
        (this.source = r[0]),
        (this.ruleId = r[1]),
        this.file,
        this.actual,
        this.expected,
        this.url,
        this.note;
    }
  };
  De.prototype.file = "";
  De.prototype.name = "";
  De.prototype.reason = "";
  De.prototype.message = "";
  De.prototype.stack = "";
  De.prototype.fatal = null;
  De.prototype.column = null;
  De.prototype.line = null;
  De.prototype.source = null;
  De.prototype.ruleId = null;
  De.prototype.position = null;
  var ot = { basename: Ou, dirname: Du, extname: Hu, join: Vu, sep: "/" };
  function Ou(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    x5(e);
    let n = 0,
      a = -1,
      r = e.length,
      o;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
      for (; r--; )
        if (e.charCodeAt(r) === 47) {
          if (o) {
            n = r + 1;
            break;
          }
        } else a < 0 && ((o = !0), (a = r + 1));
      return a < 0 ? "" : e.slice(n, a);
    }
    if (t === e) return "";
    let i = -1,
      l = t.length - 1;
    for (; r--; )
      if (e.charCodeAt(r) === 47) {
        if (o) {
          n = r + 1;
          break;
        }
      } else
        i < 0 && ((o = !0), (i = r + 1)),
          l > -1 &&
            (e.charCodeAt(r) === t.charCodeAt(l--)
              ? l < 0 && (a = r)
              : ((l = -1), (a = i)));
    return n === a ? (a = i) : a < 0 && (a = e.length), e.slice(n, a);
  }
  function Du(e) {
    if ((x5(e), e.length === 0)) return ".";
    let t = -1,
      n = e.length,
      a;
    for (; --n; )
      if (e.charCodeAt(n) === 47) {
        if (a) {
          t = n;
          break;
        }
      } else a || (a = !0);
    return t < 0
      ? e.charCodeAt(0) === 47
        ? "/"
        : "."
      : t === 1 && e.charCodeAt(0) === 47
      ? "//"
      : e.slice(0, t);
  }
  function Hu(e) {
    x5(e);
    let t = e.length,
      n = -1,
      a = 0,
      r = -1,
      o = 0,
      i;
    for (; t--; ) {
      let l = e.charCodeAt(t);
      if (l === 47) {
        if (i) {
          a = t + 1;
          break;
        }
        continue;
      }
      n < 0 && ((i = !0), (n = t + 1)),
        l === 46 ? (r < 0 ? (r = t) : o !== 1 && (o = 1)) : r > -1 && (o = -1);
    }
    return r < 0 || n < 0 || o === 0 || (o === 1 && r === n - 1 && r === a + 1)
      ? ""
      : e.slice(r, n);
  }
  function Vu(...e) {
    let t = -1,
      n;
    for (; ++t < e.length; )
      x5(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : Fu(n);
  }
  function Fu(e) {
    x5(e);
    let t = e.charCodeAt(0) === 47,
      n = Pu(e, !t);
    return (
      n.length === 0 && !t && (n = "."),
      n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"),
      t ? "/" + n : n
    );
  }
  function Pu(e, t) {
    let n = "",
      a = 0,
      r = -1,
      o = 0,
      i = -1,
      l,
      s;
    for (; ++i <= e.length; ) {
      if (i < e.length) l = e.charCodeAt(i);
      else {
        if (l === 47) break;
        l = 47;
      }
      if (l === 47) {
        if (!(r === i - 1 || o === 1))
          if (r !== i - 1 && o === 2) {
            if (
              n.length < 2 ||
              a !== 2 ||
              n.charCodeAt(n.length - 1) !== 46 ||
              n.charCodeAt(n.length - 2) !== 46
            ) {
              if (n.length > 2) {
                if (((s = n.lastIndexOf("/")), s !== n.length - 1)) {
                  s < 0
                    ? ((n = ""), (a = 0))
                    : ((n = n.slice(0, s)),
                      (a = n.length - 1 - n.lastIndexOf("/"))),
                    (r = i),
                    (o = 0);
                  continue;
                }
              } else if (n.length > 0) {
                (n = ""), (a = 0), (r = i), (o = 0);
                continue;
              }
            }
            t && ((n = n.length > 0 ? n + "/.." : ".."), (a = 2));
          } else
            n.length > 0
              ? (n += "/" + e.slice(r + 1, i))
              : (n = e.slice(r + 1, i)),
              (a = i - r - 1);
        (r = i), (o = 0);
      } else l === 46 && o > -1 ? o++ : (o = -1);
    }
    return n;
  }
  function x5(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e)
      );
  }
  var O2 = { cwd: Bu };
  function Bu() {
    return "/";
  }
  function a5(e) {
    return e !== null && typeof e == "object" && e.href && e.origin;
  }
  function D2(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!a5(e)) {
      let t = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' +
          e +
          "`"
      );
      throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
    }
    if (e.protocol !== "file:") {
      let t = new TypeError("The URL must be of scheme file");
      throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
    }
    return Uu(e);
  }
  function Uu(e) {
    if (e.hostname !== "") {
      let a = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      throw ((a.code = "ERR_INVALID_FILE_URL_HOST"), a);
    }
    let t = e.pathname,
      n = -1;
    for (; ++n < t.length; )
      if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
        let a = t.charCodeAt(n + 2);
        if (a === 70 || a === 102) {
          let r = new TypeError(
            "File URL path must not include encoded / characters"
          );
          throw ((r.code = "ERR_INVALID_FILE_URL_PATH"), r);
        }
      }
    return decodeURIComponent(t);
  }
  var $0 = ["history", "path", "basename", "stem", "extname", "dirname"],
    Tt = class {
      constructor(t) {
        let n;
        t
          ? typeof t == "string" || (0, V2.default)(t)
            ? (n = { value: t })
            : a5(t)
            ? (n = { path: t })
            : (n = t)
          : (n = {}),
          (this.data = {}),
          (this.messages = []),
          (this.history = []),
          (this.cwd = O2.cwd()),
          this.value,
          this.stored,
          this.result,
          this.map;
        let a = -1;
        for (; ++a < $0.length; ) {
          let o = $0[a];
          o in n &&
            n[o] !== void 0 &&
            (this[o] = o === "history" ? [...n[o]] : n[o]);
        }
        let r;
        for (r in n) $0.includes(r) || (this[r] = n[r]);
      }
      get path() {
        return this.history[this.history.length - 1];
      }
      set path(t) {
        a5(t) && (t = D2(t)),
          G0(t, "path"),
          this.path !== t && this.history.push(t);
      }
      get dirname() {
        return typeof this.path == "string" ? ot.dirname(this.path) : void 0;
      }
      set dirname(t) {
        H2(this.basename, "dirname"),
          (this.path = ot.join(t || "", this.basename));
      }
      get basename() {
        return typeof this.path == "string" ? ot.basename(this.path) : void 0;
      }
      set basename(t) {
        G0(t, "basename"),
          q0(t, "basename"),
          (this.path = ot.join(this.dirname || "", t));
      }
      get extname() {
        return typeof this.path == "string" ? ot.extname(this.path) : void 0;
      }
      set extname(t) {
        if ((q0(t, "extname"), H2(this.dirname, "extname"), t)) {
          if (t.charCodeAt(0) !== 46)
            throw new Error("`extname` must start with `.`");
          if (t.includes(".", 1))
            throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = ot.join(this.dirname, this.stem + (t || ""));
      }
      get stem() {
        return typeof this.path == "string"
          ? ot.basename(this.path, this.extname)
          : void 0;
      }
      set stem(t) {
        G0(t, "stem"),
          q0(t, "stem"),
          (this.path = ot.join(this.dirname || "", t + (this.extname || "")));
      }
      toString(t) {
        return (this.value || "").toString(t);
      }
      message(t, n, a) {
        let r = new De(t, n, a);
        return (
          this.path &&
            ((r.name = this.path + ":" + r.name), (r.file = this.path)),
          (r.fatal = !1),
          this.messages.push(r),
          r
        );
      }
      info(t, n, a) {
        let r = this.message(t, n, a);
        return (r.fatal = null), r;
      }
      fail(t, n, a) {
        let r = this.message(t, n, a);
        throw ((r.fatal = !0), r);
      }
    };
  function q0(e, t) {
    if (e && e.includes(ot.sep))
      throw new Error(
        "`" + t + "` cannot be a path: did not expect `" + ot.sep + "`"
      );
  }
  function G0(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
  }
  function H2(e, t) {
    if (!e)
      throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
  function W0(e) {
    if (e) throw e;
  }
  var X2 = Be(B0(), 1),
    Z0 = Be(K2(), 1);
  function M5(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function Y2() {
    let e = [],
      t = { run: n, use: a };
    return t;
    function n(...r) {
      let o = -1,
        i = r.pop();
      if (typeof i != "function")
        throw new TypeError("Expected function as last argument, not " + i);
      l(null, ...r);
      function l(s, ...u) {
        let c = e[++o],
          h = -1;
        if (s) {
          i(s);
          return;
        }
        for (; ++h < r.length; )
          (u[h] === null || u[h] === void 0) && (u[h] = r[h]);
        (r = u), c ? $u(c, l)(...u) : i(null, ...u);
      }
    }
    function a(r) {
      if (typeof r != "function")
        throw new TypeError("Expected `middelware` to be a function, not " + r);
      return e.push(r), t;
    }
  }
  function $u(e, t) {
    let n;
    return a;
    function a(...i) {
      let l = e.length > i.length,
        s;
      l && i.push(r);
      try {
        s = e.apply(this, i);
      } catch (u) {
        let c = u;
        if (l && n) throw c;
        return r(c);
      }
      l ||
        (s instanceof Promise
          ? s.then(o, r)
          : s instanceof Error
          ? r(s)
          : o(s));
    }
    function r(i, ...l) {
      n || ((n = !0), t(i, ...l));
    }
    function o(i) {
      r(null, i);
    }
  }
  var j0 = eo().freeze(),
    J2 = {}.hasOwnProperty;
  function eo() {
    let e = Y2(),
      t = [],
      n = {},
      a,
      r = -1;
    return (
      (o.data = i),
      (o.Parser = void 0),
      (o.Compiler = void 0),
      (o.freeze = l),
      (o.attachers = t),
      (o.use = s),
      (o.parse = u),
      (o.stringify = c),
      (o.run = h),
      (o.runSync = d),
      (o.process = p),
      (o.processSync = m),
      o
    );
    function o() {
      let g = eo(),
        b = -1;
      for (; ++b < t.length; ) g.use(...t[b]);
      return g.data((0, Z0.default)(!0, {}, n)), g;
    }
    function i(g, b) {
      return typeof g == "string"
        ? arguments.length === 2
          ? (Q0("data", a), (n[g] = b), o)
          : (J2.call(n, g) && n[g]) || null
        : g
        ? (Q0("data", a), (n = g), o)
        : n;
    }
    function l() {
      if (a) return o;
      for (; ++r < t.length; ) {
        let [g, ...b] = t[r];
        if (b[0] === !1) continue;
        b[0] === !0 && (b[0] = void 0);
        let _ = g.call(o, ...b);
        typeof _ == "function" && e.use(_);
      }
      return (a = !0), (r = Number.POSITIVE_INFINITY), o;
    }
    function s(g, ...b) {
      let _;
      if ((Q0("use", a), g != null))
        if (typeof g == "function") w(g, ...b);
        else if (typeof g == "object") Array.isArray(g) ? y(g) : M(g);
        else throw new TypeError("Expected usable value, not `" + g + "`");
      return _ && (n.settings = Object.assign(n.settings || {}, _)), o;
      function C(E) {
        if (typeof E == "function") w(E);
        else if (typeof E == "object")
          if (Array.isArray(E)) {
            let [x, ...R] = E;
            w(x, ...R);
          } else M(E);
        else throw new TypeError("Expected usable value, not `" + E + "`");
      }
      function M(E) {
        y(E.plugins), E.settings && (_ = Object.assign(_ || {}, E.settings));
      }
      function y(E) {
        let x = -1;
        if (E != null)
          if (Array.isArray(E))
            for (; ++x < E.length; ) {
              let R = E[x];
              C(R);
            }
          else
            throw new TypeError("Expected a list of plugins, not `" + E + "`");
      }
      function w(E, x) {
        let R = -1,
          T;
        for (; ++R < t.length; )
          if (t[R][0] === E) {
            T = t[R];
            break;
          }
        T
          ? (M5(T[1]) && M5(x) && (x = (0, Z0.default)(!0, T[1], x)),
            (T[1] = x))
          : t.push([...arguments]);
      }
    }
    function u(g) {
      o.freeze();
      let b = z5(g),
        _ = o.Parser;
      return (
        K0("parse", _),
        Q2(_, "parse") ? new _(String(b), b).parse() : _(String(b), b)
      );
    }
    function c(g, b) {
      o.freeze();
      let _ = z5(b),
        C = o.Compiler;
      return (
        Y0("stringify", C),
        Z2(g),
        Q2(C, "compile") ? new C(g, _).compile() : C(g, _)
      );
    }
    function h(g, b, _) {
      if (
        (Z2(g),
        o.freeze(),
        !_ && typeof b == "function" && ((_ = b), (b = void 0)),
        !_)
      )
        return new Promise(C);
      C(null, _);
      function C(M, y) {
        e.run(g, z5(b), w);
        function w(E, x, R) {
          (x = x || g), E ? y(E) : M ? M(x) : _(null, x, R);
        }
      }
    }
    function d(g, b) {
      let _, C;
      return o.run(g, b, M), j2("runSync", "run", C), _;
      function M(y, w) {
        W0(y), (_ = w), (C = !0);
      }
    }
    function p(g, b) {
      if ((o.freeze(), K0("process", o.Parser), Y0("process", o.Compiler), !b))
        return new Promise(_);
      _(null, b);
      function _(C, M) {
        let y = z5(g);
        o.run(o.parse(y), y, (E, x, R) => {
          if (E || !x || !R) w(E);
          else {
            let T = o.stringify(x, R);
            T == null || (Wu(T) ? (R.value = T) : (R.result = T)), w(E, R);
          }
        });
        function w(E, x) {
          E || !x ? M(E) : C ? C(x) : b(null, x);
        }
      }
    }
    function m(g) {
      let b;
      o.freeze(), K0("processSync", o.Parser), Y0("processSync", o.Compiler);
      let _ = z5(g);
      return o.process(_, C), j2("processSync", "process", b), _;
      function C(M) {
        (b = !0), W0(M);
      }
    }
  }
  function Q2(e, t) {
    return (
      typeof e == "function" &&
      e.prototype &&
      (qu(e.prototype) || t in e.prototype)
    );
  }
  function qu(e) {
    let t;
    for (t in e) if (J2.call(e, t)) return !0;
    return !1;
  }
  function K0(e, t) {
    if (typeof t != "function")
      throw new TypeError("Cannot `" + e + "` without `Parser`");
  }
  function Y0(e, t) {
    if (typeof t != "function")
      throw new TypeError("Cannot `" + e + "` without `Compiler`");
  }
  function Q0(e, t) {
    if (t)
      throw new Error(
        "Cannot call `" +
          e +
          "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
      );
  }
  function Z2(e) {
    if (!M5(e) || typeof e.type != "string")
      throw new TypeError("Expected node, got `" + e + "`");
  }
  function j2(e, t, n) {
    if (!n)
      throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
  function z5(e) {
    return Gu(e) ? e : new Tt(e);
  }
  function Gu(e) {
    return Boolean(
      e && typeof e == "object" && "message" in e && "messages" in e
    );
  }
  function Wu(e) {
    return typeof e == "string" || (0, X2.default)(e);
  }
  function no(e, t) {
    var { includeImageAlt: n = !0 } = t || {};
    return ao(e, n);
  }
  function ao(e, t) {
    return (
      (e &&
        typeof e == "object" &&
        (e.value ||
          (t ? e.alt : "") ||
          ("children" in e && to(e.children, t)) ||
          (Array.isArray(e) && to(e, t)))) ||
      ""
    );
  }
  function to(e, t) {
    for (var n = [], a = -1; ++a < e.length; ) n[a] = ao(e[a], t);
    return n.join("");
  }
  function Ie(e, t, n, a) {
    let r = e.length,
      o = 0,
      i;
    if (
      (t < 0 ? (t = -t > r ? 0 : r + t) : (t = t > r ? r : t),
      (n = n > 0 ? n : 0),
      a.length < 1e4)
    )
      (i = Array.from(a)), i.unshift(t, n), [].splice.apply(e, i);
    else
      for (n && [].splice.apply(e, [t, n]); o < a.length; )
        (i = a.slice(o, o + 1e4)),
          i.unshift(t, 0),
          [].splice.apply(e, i),
          (o += 1e4),
          (t += 1e4);
  }
  function He(e, t) {
    return e.length > 0 ? (Ie(e, e.length, 0, t), e) : t;
  }
  var ro = {}.hasOwnProperty;
  function oo(e) {
    let t = {},
      n = -1;
    for (; ++n < e.length; ) Ku(t, e[n]);
    return t;
  }
  function Ku(e, t) {
    let n;
    for (n in t) {
      let r = (ro.call(e, n) ? e[n] : void 0) || (e[n] = {}),
        o = t[n],
        i;
      for (i in o) {
        ro.call(r, i) || (r[i] = []);
        let l = o[i];
        Yu(r[i], Array.isArray(l) ? l : l ? [l] : []);
      }
    }
  }
  function Yu(e, t) {
    let n = -1,
      a = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : a).push(t[n]);
    Ie(e, 0, 0, a);
  }
  var io =
    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  var je = wt(/[A-Za-z]/),
    S5 = wt(/\d/),
    lo = wt(/[\dA-Fa-f]/),
    Me = wt(/[\dA-Za-z]/),
    co = wt(/[!-/:-@[-`{-~]/),
    X0 = wt(/[#-'*+\--9=?A-Z^-~]/);
  function C5(e) {
    return e !== null && (e < 32 || e === 127);
  }
  function we(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function H(e) {
    return e !== null && e < -2;
  }
  function ue(e) {
    return e === -2 || e === -1 || e === 32;
  }
  var so = wt(/\s/),
    uo = wt(io);
  function wt(e) {
    return t;
    function t(n) {
      return n !== null && e.test(String.fromCharCode(n));
    }
  }
  function J(e, t, n, a) {
    let r = a ? a - 1 : Number.POSITIVE_INFINITY,
      o = 0;
    return i;
    function i(s) {
      return ue(s) ? (e.enter(n), l(s)) : t(s);
    }
    function l(s) {
      return ue(s) && o++ < r ? (e.consume(s), l) : (e.exit(n), t(s));
    }
  }
  var po = { tokenize: Qu };
  function Qu(e) {
    let t = e.attempt(this.parser.constructs.contentInitial, a, r),
      n;
    return t;
    function a(l) {
      if (l === null) {
        e.consume(l);
        return;
      }
      return (
        e.enter("lineEnding"),
        e.consume(l),
        e.exit("lineEnding"),
        J(e, t, "linePrefix")
      );
    }
    function r(l) {
      return e.enter("paragraph"), o(l);
    }
    function o(l) {
      let s = e.enter("chunkText", { contentType: "text", previous: n });
      return n && (n.next = s), (n = s), i(l);
    }
    function i(l) {
      if (l === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
        return;
      }
      return H(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), i);
    }
  }
  var mo = { tokenize: Zu },
    ho = { tokenize: ju };
  function Zu(e) {
    let t = this,
      n = [],
      a = 0,
      r,
      o,
      i;
    return l;
    function l(M) {
      if (a < n.length) {
        let y = n[a];
        return (t.containerState = y[1]), e.attempt(y[0].continuation, s, u)(M);
      }
      return u(M);
    }
    function s(M) {
      if ((a++, t.containerState._closeFlow)) {
        (t.containerState._closeFlow = void 0), r && C();
        let y = t.events.length,
          w = y,
          E;
        for (; w--; )
          if (
            t.events[w][0] === "exit" &&
            t.events[w][1].type === "chunkFlow"
          ) {
            E = t.events[w][1].end;
            break;
          }
        _(a);
        let x = y;
        for (; x < t.events.length; )
          (t.events[x][1].end = Object.assign({}, E)), x++;
        return (
          Ie(t.events, w + 1, 0, t.events.slice(y)), (t.events.length = x), u(M)
        );
      }
      return l(M);
    }
    function u(M) {
      if (a === n.length) {
        if (!r) return d(M);
        if (r.currentConstruct && r.currentConstruct.concrete) return m(M);
        t.interrupt = Boolean(
          r.currentConstruct && !r._gfmTableDynamicInterruptHack
        );
      }
      return (t.containerState = {}), e.check(ho, c, h)(M);
    }
    function c(M) {
      return r && C(), _(a), d(M);
    }
    function h(M) {
      return (
        (t.parser.lazy[t.now().line] = a !== n.length),
        (i = t.now().offset),
        m(M)
      );
    }
    function d(M) {
      return (t.containerState = {}), e.attempt(ho, p, m)(M);
    }
    function p(M) {
      return a++, n.push([t.currentConstruct, t.containerState]), d(M);
    }
    function m(M) {
      if (M === null) {
        r && C(), _(0), e.consume(M);
        return;
      }
      return (
        (r = r || t.parser.flow(t.now())),
        e.enter("chunkFlow", {
          contentType: "flow",
          previous: o,
          _tokenizer: r,
        }),
        g(M)
      );
    }
    function g(M) {
      if (M === null) {
        b(e.exit("chunkFlow"), !0), _(0), e.consume(M);
        return;
      }
      return H(M)
        ? (e.consume(M),
          b(e.exit("chunkFlow")),
          (a = 0),
          (t.interrupt = void 0),
          l)
        : (e.consume(M), g);
    }
    function b(M, y) {
      let w = t.sliceStream(M);
      if (
        (y && w.push(null),
        (M.previous = o),
        o && (o.next = M),
        (o = M),
        r.defineSkip(M.start),
        r.write(w),
        t.parser.lazy[M.start.line])
      ) {
        let E = r.events.length;
        for (; E--; )
          if (
            r.events[E][1].start.offset < i &&
            (!r.events[E][1].end || r.events[E][1].end.offset > i)
          )
            return;
        let x = t.events.length,
          R = x,
          T,
          W;
        for (; R--; )
          if (
            t.events[R][0] === "exit" &&
            t.events[R][1].type === "chunkFlow"
          ) {
            if (T) {
              W = t.events[R][1].end;
              break;
            }
            T = !0;
          }
        for (_(a), E = x; E < t.events.length; )
          (t.events[E][1].end = Object.assign({}, W)), E++;
        Ie(t.events, R + 1, 0, t.events.slice(x)), (t.events.length = E);
      }
    }
    function _(M) {
      let y = n.length;
      for (; y-- > M; ) {
        let w = n[y];
        (t.containerState = w[1]), w[0].exit.call(t, e);
      }
      n.length = M;
    }
    function C() {
      r.write([null]),
        (o = void 0),
        (r = void 0),
        (t.containerState._closeFlow = void 0);
    }
  }
  function ju(e, t, n) {
    return J(
      e,
      e.attempt(this.parser.constructs.document, t, n),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function J0(e) {
    if (e === null || we(e) || so(e)) return 1;
    if (uo(e)) return 2;
  }
  function r5(e, t, n) {
    let a = [],
      r = -1;
    for (; ++r < e.length; ) {
      let o = e[r].resolveAll;
      o && !a.includes(o) && ((t = o(t, n)), a.push(o));
    }
    return t;
  }
  var I5 = { name: "attention", tokenize: Ju, resolveAll: Xu };
  function Xu(e, t) {
    let n = -1,
      a,
      r,
      o,
      i,
      l,
      s,
      u,
      c;
    for (; ++n < e.length; )
      if (
        e[n][0] === "enter" &&
        e[n][1].type === "attentionSequence" &&
        e[n][1]._close
      ) {
        for (a = n; a--; )
          if (
            e[a][0] === "exit" &&
            e[a][1].type === "attentionSequence" &&
            e[a][1]._open &&
            t.sliceSerialize(e[a][1]).charCodeAt(0) ===
              t.sliceSerialize(e[n][1]).charCodeAt(0)
          ) {
            if (
              (e[a][1]._close || e[n][1]._open) &&
              (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
              !(
                (e[a][1].end.offset -
                  e[a][1].start.offset +
                  e[n][1].end.offset -
                  e[n][1].start.offset) %
                3
              )
            )
              continue;
            s =
              e[a][1].end.offset - e[a][1].start.offset > 1 &&
              e[n][1].end.offset - e[n][1].start.offset > 1
                ? 2
                : 1;
            let h = Object.assign({}, e[a][1].end),
              d = Object.assign({}, e[n][1].start);
            fo(h, -s),
              fo(d, s),
              (i = {
                type: s > 1 ? "strongSequence" : "emphasisSequence",
                start: h,
                end: Object.assign({}, e[a][1].end),
              }),
              (l = {
                type: s > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, e[n][1].start),
                end: d,
              }),
              (o = {
                type: s > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, e[a][1].end),
                end: Object.assign({}, e[n][1].start),
              }),
              (r = {
                type: s > 1 ? "strong" : "emphasis",
                start: Object.assign({}, i.start),
                end: Object.assign({}, l.end),
              }),
              (e[a][1].end = Object.assign({}, i.start)),
              (e[n][1].start = Object.assign({}, l.end)),
              (u = []),
              e[a][1].end.offset - e[a][1].start.offset &&
                (u = He(u, [
                  ["enter", e[a][1], t],
                  ["exit", e[a][1], t],
                ])),
              (u = He(u, [
                ["enter", r, t],
                ["enter", i, t],
                ["exit", i, t],
                ["enter", o, t],
              ])),
              (u = He(
                u,
                r5(t.parser.constructs.insideSpan.null, e.slice(a + 1, n), t)
              )),
              (u = He(u, [
                ["exit", o, t],
                ["enter", l, t],
                ["exit", l, t],
                ["exit", r, t],
              ])),
              e[n][1].end.offset - e[n][1].start.offset
                ? ((c = 2),
                  (u = He(u, [
                    ["enter", e[n][1], t],
                    ["exit", e[n][1], t],
                  ])))
                : (c = 0),
              Ie(e, a - 1, n - a + 3, u),
              (n = a + u.length - c - 2);
            break;
          }
      }
    for (n = -1; ++n < e.length; )
      e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
  }
  function Ju(e, t) {
    let n = this.parser.constructs.attentionMarkers.null,
      a = this.previous,
      r = J0(a),
      o;
    return i;
    function i(s) {
      return e.enter("attentionSequence"), (o = s), l(s);
    }
    function l(s) {
      if (s === o) return e.consume(s), l;
      let u = e.exit("attentionSequence"),
        c = J0(s),
        h = !c || (c === 2 && r) || n.includes(s),
        d = !r || (r === 2 && c) || n.includes(a);
      return (
        (u._open = Boolean(o === 42 ? h : h && (r || !d))),
        (u._close = Boolean(o === 42 ? d : d && (c || !h))),
        t(s)
      );
    }
  }
  function fo(e, t) {
    (e.column += t), (e.offset += t), (e._bufferIndex += t);
  }
  var en = { name: "autolink", tokenize: e3 };
  function e3(e, t, n) {
    let a = 1;
    return r;
    function r(m) {
      return (
        e.enter("autolink"),
        e.enter("autolinkMarker"),
        e.consume(m),
        e.exit("autolinkMarker"),
        e.enter("autolinkProtocol"),
        o
      );
    }
    function o(m) {
      return je(m) ? (e.consume(m), i) : X0(m) ? u(m) : n(m);
    }
    function i(m) {
      return m === 43 || m === 45 || m === 46 || Me(m) ? l(m) : u(m);
    }
    function l(m) {
      return m === 58
        ? (e.consume(m), s)
        : (m === 43 || m === 45 || m === 46 || Me(m)) && a++ < 32
        ? (e.consume(m), l)
        : u(m);
    }
    function s(m) {
      return m === 62
        ? (e.exit("autolinkProtocol"), p(m))
        : m === null || m === 32 || m === 60 || C5(m)
        ? n(m)
        : (e.consume(m), s);
    }
    function u(m) {
      return m === 64
        ? (e.consume(m), (a = 0), c)
        : X0(m)
        ? (e.consume(m), u)
        : n(m);
    }
    function c(m) {
      return Me(m) ? h(m) : n(m);
    }
    function h(m) {
      return m === 46
        ? (e.consume(m), (a = 0), c)
        : m === 62
        ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), p(m))
        : d(m);
    }
    function d(m) {
      return (m === 45 || Me(m)) && a++ < 63
        ? (e.consume(m), m === 45 ? d : h)
        : n(m);
    }
    function p(m) {
      return (
        e.enter("autolinkMarker"),
        e.consume(m),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t
      );
    }
  }
  var xt = { tokenize: t3, partial: !0 };
  function t3(e, t, n) {
    return J(e, a, "linePrefix");
    function a(r) {
      return r === null || H(r) ? t(r) : n(r);
    }
  }
  var d1 = {
    name: "blockQuote",
    tokenize: n3,
    continuation: { tokenize: a3 },
    exit: r3,
  };
  function n3(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      if (i === 62) {
        let l = a.containerState;
        return (
          l.open || (e.enter("blockQuote", { _container: !0 }), (l.open = !0)),
          e.enter("blockQuotePrefix"),
          e.enter("blockQuoteMarker"),
          e.consume(i),
          e.exit("blockQuoteMarker"),
          o
        );
      }
      return n(i);
    }
    function o(i) {
      return ue(i)
        ? (e.enter("blockQuotePrefixWhitespace"),
          e.consume(i),
          e.exit("blockQuotePrefixWhitespace"),
          e.exit("blockQuotePrefix"),
          t)
        : (e.exit("blockQuotePrefix"), t(i));
    }
  }
  function a3(e, t, n) {
    return J(
      e,
      e.attempt(d1, t, n),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function r3(e) {
    e.exit("blockQuote");
  }
  var p1 = { name: "characterEscape", tokenize: o3 };
  function o3(e, t, n) {
    return a;
    function a(o) {
      return (
        e.enter("characterEscape"),
        e.enter("escapeMarker"),
        e.consume(o),
        e.exit("escapeMarker"),
        r
      );
    }
    function r(o) {
      return co(o)
        ? (e.enter("characterEscapeValue"),
          e.consume(o),
          e.exit("characterEscapeValue"),
          e.exit("characterEscape"),
          t)
        : n(o);
    }
  }
  var go = document.createElement("i");
  function o5(e) {
    let t = "&" + e + ";";
    go.innerHTML = t;
    let n = go.textContent;
    return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
      ? !1
      : n;
  }
  var h1 = { name: "characterReference", tokenize: i3 };
  function i3(e, t, n) {
    let a = this,
      r = 0,
      o,
      i;
    return l;
    function l(h) {
      return (
        e.enter("characterReference"),
        e.enter("characterReferenceMarker"),
        e.consume(h),
        e.exit("characterReferenceMarker"),
        s
      );
    }
    function s(h) {
      return h === 35
        ? (e.enter("characterReferenceMarkerNumeric"),
          e.consume(h),
          e.exit("characterReferenceMarkerNumeric"),
          u)
        : (e.enter("characterReferenceValue"), (o = 31), (i = Me), c(h));
    }
    function u(h) {
      return h === 88 || h === 120
        ? (e.enter("characterReferenceMarkerHexadecimal"),
          e.consume(h),
          e.exit("characterReferenceMarkerHexadecimal"),
          e.enter("characterReferenceValue"),
          (o = 6),
          (i = lo),
          c)
        : (e.enter("characterReferenceValue"), (o = 7), (i = S5), c(h));
    }
    function c(h) {
      let d;
      return h === 59 && r
        ? ((d = e.exit("characterReferenceValue")),
          i === Me && !o5(a.sliceSerialize(d))
            ? n(h)
            : (e.enter("characterReferenceMarker"),
              e.consume(h),
              e.exit("characterReferenceMarker"),
              e.exit("characterReference"),
              t))
        : i(h) && r++ < o
        ? (e.consume(h), c)
        : n(h);
    }
  }
  var m1 = { name: "codeFenced", tokenize: l3, concrete: !0 };
  function l3(e, t, n) {
    let a = this,
      r = { tokenize: w, partial: !0 },
      o = { tokenize: y, partial: !0 },
      i = this.events[this.events.length - 1],
      l =
        i && i[1].type === "linePrefix"
          ? i[2].sliceSerialize(i[1], !0).length
          : 0,
      s = 0,
      u;
    return c;
    function c(E) {
      return (
        e.enter("codeFenced"),
        e.enter("codeFencedFence"),
        e.enter("codeFencedFenceSequence"),
        (u = E),
        h(E)
      );
    }
    function h(E) {
      return E === u
        ? (e.consume(E), s++, h)
        : (e.exit("codeFencedFenceSequence"),
          s < 3 ? n(E) : J(e, d, "whitespace")(E));
    }
    function d(E) {
      return E === null || H(E)
        ? b(E)
        : (e.enter("codeFencedFenceInfo"),
          e.enter("chunkString", { contentType: "string" }),
          p(E));
    }
    function p(E) {
      return E === null || we(E)
        ? (e.exit("chunkString"),
          e.exit("codeFencedFenceInfo"),
          J(e, m, "whitespace")(E))
        : E === 96 && E === u
        ? n(E)
        : (e.consume(E), p);
    }
    function m(E) {
      return E === null || H(E)
        ? b(E)
        : (e.enter("codeFencedFenceMeta"),
          e.enter("chunkString", { contentType: "string" }),
          g(E));
    }
    function g(E) {
      return E === null || H(E)
        ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), b(E))
        : E === 96 && E === u
        ? n(E)
        : (e.consume(E), g);
    }
    function b(E) {
      return e.exit("codeFencedFence"), a.interrupt ? t(E) : _(E);
    }
    function _(E) {
      return E === null
        ? M(E)
        : H(E)
        ? e.attempt(
            o,
            e.attempt(r, M, l ? J(e, _, "linePrefix", l + 1) : _),
            M
          )(E)
        : (e.enter("codeFlowValue"), C(E));
    }
    function C(E) {
      return E === null || H(E)
        ? (e.exit("codeFlowValue"), _(E))
        : (e.consume(E), C);
    }
    function M(E) {
      return e.exit("codeFenced"), t(E);
    }
    function y(E, x, R) {
      let T = this;
      return W;
      function W(U) {
        return E.enter("lineEnding"), E.consume(U), E.exit("lineEnding"), O;
      }
      function O(U) {
        return T.parser.lazy[T.now().line] ? R(U) : x(U);
      }
    }
    function w(E, x, R) {
      let T = 0;
      return J(
        E,
        W,
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented")
          ? void 0
          : 4
      );
      function W(S) {
        return (
          E.enter("codeFencedFence"), E.enter("codeFencedFenceSequence"), O(S)
        );
      }
      function O(S) {
        return S === u
          ? (E.consume(S), T++, O)
          : T < s
          ? R(S)
          : (E.exit("codeFencedFenceSequence"), J(E, U, "whitespace")(S));
      }
      function U(S) {
        return S === null || H(S) ? (E.exit("codeFencedFence"), x(S)) : R(S);
      }
    }
  }
  var R5 = { name: "codeIndented", tokenize: s3 },
    c3 = { tokenize: u3, partial: !0 };
  function s3(e, t, n) {
    let a = this;
    return r;
    function r(u) {
      return e.enter("codeIndented"), J(e, o, "linePrefix", 4 + 1)(u);
    }
    function o(u) {
      let c = a.events[a.events.length - 1];
      return c &&
        c[1].type === "linePrefix" &&
        c[2].sliceSerialize(c[1], !0).length >= 4
        ? i(u)
        : n(u);
    }
    function i(u) {
      return u === null
        ? s(u)
        : H(u)
        ? e.attempt(c3, i, s)(u)
        : (e.enter("codeFlowValue"), l(u));
    }
    function l(u) {
      return u === null || H(u)
        ? (e.exit("codeFlowValue"), i(u))
        : (e.consume(u), l);
    }
    function s(u) {
      return e.exit("codeIndented"), t(u);
    }
  }
  function u3(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return a.parser.lazy[a.now().line]
        ? n(i)
        : H(i)
        ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), r)
        : J(e, o, "linePrefix", 4 + 1)(i);
    }
    function o(i) {
      let l = a.events[a.events.length - 1];
      return l &&
        l[1].type === "linePrefix" &&
        l[2].sliceSerialize(l[1], !0).length >= 4
        ? t(i)
        : H(i)
        ? r(i)
        : n(i);
    }
  }
  var tn = { name: "codeText", tokenize: h3, resolve: d3, previous: p3 };
  function d3(e) {
    let t = e.length - 4,
      n = 3,
      a,
      r;
    if (
      (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
      (e[t][1].type === "lineEnding" || e[t][1].type === "space")
    ) {
      for (a = n; ++a < t; )
        if (e[a][1].type === "codeTextData") {
          (e[n][1].type = "codeTextPadding"),
            (e[t][1].type = "codeTextPadding"),
            (n += 2),
            (t -= 2);
          break;
        }
    }
    for (a = n - 1, t++; ++a <= t; )
      r === void 0
        ? a !== t && e[a][1].type !== "lineEnding" && (r = a)
        : (a === t || e[a][1].type === "lineEnding") &&
          ((e[r][1].type = "codeTextData"),
          a !== r + 2 &&
            ((e[r][1].end = e[a - 1][1].end),
            e.splice(r + 2, a - r - 2),
            (t -= a - r - 2),
            (a = r + 2)),
          (r = void 0));
    return e;
  }
  function p3(e) {
    return (
      e !== 96 ||
      this.events[this.events.length - 1][1].type === "characterEscape"
    );
  }
  function h3(e, t, n) {
    let a = this,
      r = 0,
      o,
      i;
    return l;
    function l(d) {
      return e.enter("codeText"), e.enter("codeTextSequence"), s(d);
    }
    function s(d) {
      return d === 96
        ? (e.consume(d), r++, s)
        : (e.exit("codeTextSequence"), u(d));
    }
    function u(d) {
      return d === null
        ? n(d)
        : d === 96
        ? ((i = e.enter("codeTextSequence")), (o = 0), h(d))
        : d === 32
        ? (e.enter("space"), e.consume(d), e.exit("space"), u)
        : H(d)
        ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u)
        : (e.enter("codeTextData"), c(d));
    }
    function c(d) {
      return d === null || d === 32 || d === 96 || H(d)
        ? (e.exit("codeTextData"), u(d))
        : (e.consume(d), c);
    }
    function h(d) {
      return d === 96
        ? (e.consume(d), o++, h)
        : o === r
        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d))
        : ((i.type = "codeTextData"), c(d));
    }
  }
  function f1(e) {
    let t = {},
      n = -1,
      a,
      r,
      o,
      i,
      l,
      s,
      u;
    for (; ++n < e.length; ) {
      for (; n in t; ) n = t[n];
      if (
        ((a = e[n]),
        n &&
          a[1].type === "chunkFlow" &&
          e[n - 1][1].type === "listItemPrefix" &&
          ((s = a[1]._tokenizer.events),
          (o = 0),
          o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2),
          o < s.length && s[o][1].type === "content"))
      )
        for (; ++o < s.length && s[o][1].type !== "content"; )
          s[o][1].type === "chunkText" &&
            ((s[o][1]._isInFirstContentOfListItem = !0), o++);
      if (a[0] === "enter")
        a[1].contentType && (Object.assign(t, m3(e, n)), (n = t[n]), (u = !0));
      else if (a[1]._container) {
        for (
          o = n, r = void 0;
          o-- &&
          ((i = e[o]),
          i[1].type === "lineEnding" || i[1].type === "lineEndingBlank");

        )
          i[0] === "enter" &&
            (r && (e[r][1].type = "lineEndingBlank"),
            (i[1].type = "lineEnding"),
            (r = o));
        r &&
          ((a[1].end = Object.assign({}, e[r][1].start)),
          (l = e.slice(r, n)),
          l.unshift(a),
          Ie(e, r, n - r + 1, l));
      }
    }
    return !u;
  }
  function m3(e, t) {
    let n = e[t][1],
      a = e[t][2],
      r = t - 1,
      o = [],
      i = n._tokenizer || a.parser[n.contentType](n.start),
      l = i.events,
      s = [],
      u = {},
      c,
      h,
      d = -1,
      p = n,
      m = 0,
      g = 0,
      b = [g];
    for (; p; ) {
      for (; e[++r][1] !== p; );
      o.push(r),
        p._tokenizer ||
          ((c = a.sliceStream(p)),
          p.next || c.push(null),
          h && i.defineSkip(p.start),
          p._isInFirstContentOfListItem &&
            (i._gfmTasklistFirstContentOfListItem = !0),
          i.write(c),
          p._isInFirstContentOfListItem &&
            (i._gfmTasklistFirstContentOfListItem = void 0)),
        (h = p),
        (p = p.next);
    }
    for (p = n; ++d < l.length; )
      l[d][0] === "exit" &&
        l[d - 1][0] === "enter" &&
        l[d][1].type === l[d - 1][1].type &&
        l[d][1].start.line !== l[d][1].end.line &&
        ((g = d + 1),
        b.push(g),
        (p._tokenizer = void 0),
        (p.previous = void 0),
        (p = p.next));
    for (
      i.events = [],
        p ? ((p._tokenizer = void 0), (p.previous = void 0)) : b.pop(),
        d = b.length;
      d--;

    ) {
      let _ = l.slice(b[d], b[d + 1]),
        C = o.pop();
      s.unshift([C, C + _.length - 1]), Ie(e, C, 2, _);
    }
    for (d = -1; ++d < s.length; )
      (u[m + s[d][0]] = m + s[d][1]), (m += s[d][1] - s[d][0] - 1);
    return u;
  }
  var nn = { tokenize: v3, resolve: g3 },
    f3 = { tokenize: b3, partial: !0 };
  function g3(e) {
    return f1(e), e;
  }
  function v3(e, t) {
    let n;
    return a;
    function a(l) {
      return (
        e.enter("content"),
        (n = e.enter("chunkContent", { contentType: "content" })),
        r(l)
      );
    }
    function r(l) {
      return l === null
        ? o(l)
        : H(l)
        ? e.check(f3, i, o)(l)
        : (e.consume(l), r);
    }
    function o(l) {
      return e.exit("chunkContent"), e.exit("content"), t(l);
    }
    function i(l) {
      return (
        e.consume(l),
        e.exit("chunkContent"),
        (n.next = e.enter("chunkContent", {
          contentType: "content",
          previous: n,
        })),
        (n = n.next),
        r
      );
    }
  }
  function b3(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return (
        e.exit("chunkContent"),
        e.enter("lineEnding"),
        e.consume(i),
        e.exit("lineEnding"),
        J(e, o, "linePrefix")
      );
    }
    function o(i) {
      if (i === null || H(i)) return n(i);
      let l = a.events[a.events.length - 1];
      return !a.parser.constructs.disable.null.includes("codeIndented") &&
        l &&
        l[1].type === "linePrefix" &&
        l[2].sliceSerialize(l[1], !0).length >= 4
        ? t(i)
        : e.interrupt(a.parser.constructs.flow, n, t)(i);
    }
  }
  function g1(e, t, n, a, r, o, i, l, s) {
    let u = s || Number.POSITIVE_INFINITY,
      c = 0;
    return h;
    function h(_) {
      return _ === 60
        ? (e.enter(a), e.enter(r), e.enter(o), e.consume(_), e.exit(o), d)
        : _ === null || _ === 41 || C5(_)
        ? n(_)
        : (e.enter(a),
          e.enter(i),
          e.enter(l),
          e.enter("chunkString", { contentType: "string" }),
          g(_));
    }
    function d(_) {
      return _ === 62
        ? (e.enter(o), e.consume(_), e.exit(o), e.exit(r), e.exit(a), t)
        : (e.enter(l), e.enter("chunkString", { contentType: "string" }), p(_));
    }
    function p(_) {
      return _ === 62
        ? (e.exit("chunkString"), e.exit(l), d(_))
        : _ === null || _ === 60 || H(_)
        ? n(_)
        : (e.consume(_), _ === 92 ? m : p);
    }
    function m(_) {
      return _ === 60 || _ === 62 || _ === 92 ? (e.consume(_), p) : p(_);
    }
    function g(_) {
      return _ === 40
        ? ++c > u
          ? n(_)
          : (e.consume(_), g)
        : _ === 41
        ? c--
          ? (e.consume(_), g)
          : (e.exit("chunkString"), e.exit(l), e.exit(i), e.exit(a), t(_))
        : _ === null || we(_)
        ? c
          ? n(_)
          : (e.exit("chunkString"), e.exit(l), e.exit(i), e.exit(a), t(_))
        : C5(_)
        ? n(_)
        : (e.consume(_), _ === 92 ? b : g);
    }
    function b(_) {
      return _ === 40 || _ === 41 || _ === 92 ? (e.consume(_), g) : g(_);
    }
  }
  function v1(e, t, n, a, r, o) {
    let i = this,
      l = 0,
      s;
    return u;
    function u(p) {
      return e.enter(a), e.enter(r), e.consume(p), e.exit(r), e.enter(o), c;
    }
    function c(p) {
      return p === null ||
        p === 91 ||
        (p === 93 && !s) ||
        (p === 94 && !l && "_hiddenFootnoteSupport" in i.parser.constructs) ||
        l > 999
        ? n(p)
        : p === 93
        ? (e.exit(o), e.enter(r), e.consume(p), e.exit(r), e.exit(a), t)
        : H(p)
        ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c)
        : (e.enter("chunkString", { contentType: "string" }), h(p));
    }
    function h(p) {
      return p === null || p === 91 || p === 93 || H(p) || l++ > 999
        ? (e.exit("chunkString"), c(p))
        : (e.consume(p), (s = s || !ue(p)), p === 92 ? d : h);
    }
    function d(p) {
      return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, h) : h(p);
    }
  }
  function b1(e, t, n, a, r, o) {
    let i;
    return l;
    function l(d) {
      return (
        e.enter(a),
        e.enter(r),
        e.consume(d),
        e.exit(r),
        (i = d === 40 ? 41 : d),
        s
      );
    }
    function s(d) {
      return d === i
        ? (e.enter(r), e.consume(d), e.exit(r), e.exit(a), t)
        : (e.enter(o), u(d));
    }
    function u(d) {
      return d === i
        ? (e.exit(o), s(i))
        : d === null
        ? n(d)
        : H(d)
        ? (e.enter("lineEnding"),
          e.consume(d),
          e.exit("lineEnding"),
          J(e, u, "linePrefix"))
        : (e.enter("chunkString", { contentType: "string" }), c(d));
    }
    function c(d) {
      return d === i || d === null || H(d)
        ? (e.exit("chunkString"), u(d))
        : (e.consume(d), d === 92 ? h : c);
    }
    function h(d) {
      return d === i || d === 92 ? (e.consume(d), c) : c(d);
    }
  }
  function Lt(e, t) {
    let n;
    return a;
    function a(r) {
      return H(r)
        ? (e.enter("lineEnding"),
          e.consume(r),
          e.exit("lineEnding"),
          (n = !0),
          a)
        : ue(r)
        ? J(e, a, n ? "linePrefix" : "lineSuffix")(r)
        : t(r);
    }
  }
  function mt(e) {
    return e
      .replace(/[\t\n\r ]+/g, " ")
      .replace(/^ | $/g, "")
      .toLowerCase()
      .toUpperCase();
  }
  var an = { name: "definition", tokenize: _3 },
    E3 = { tokenize: A3, partial: !0 };
  function _3(e, t, n) {
    let a = this,
      r;
    return o;
    function o(s) {
      return (
        e.enter("definition"),
        v1.call(
          a,
          e,
          i,
          n,
          "definitionLabel",
          "definitionLabelMarker",
          "definitionLabelString"
        )(s)
      );
    }
    function i(s) {
      return (
        (r = mt(
          a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1)
        )),
        s === 58
          ? (e.enter("definitionMarker"),
            e.consume(s),
            e.exit("definitionMarker"),
            Lt(
              e,
              g1(
                e,
                e.attempt(E3, J(e, l, "whitespace"), J(e, l, "whitespace")),
                n,
                "definitionDestination",
                "definitionDestinationLiteral",
                "definitionDestinationLiteralMarker",
                "definitionDestinationRaw",
                "definitionDestinationString"
              )
            ))
          : n(s)
      );
    }
    function l(s) {
      return s === null || H(s)
        ? (e.exit("definition"),
          a.parser.defined.includes(r) || a.parser.defined.push(r),
          t(s))
        : n(s);
    }
  }
  function A3(e, t, n) {
    return a;
    function a(i) {
      return we(i) ? Lt(e, r)(i) : n(i);
    }
    function r(i) {
      return i === 34 || i === 39 || i === 40
        ? b1(
            e,
            J(e, o, "whitespace"),
            n,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
          )(i)
        : n(i);
    }
    function o(i) {
      return i === null || H(i) ? t(i) : n(i);
    }
  }
  var rn = { name: "hardBreakEscape", tokenize: y3 };
  function y3(e, t, n) {
    return a;
    function a(o) {
      return (
        e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(o), r
      );
    }
    function r(o) {
      return H(o)
        ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(o))
        : n(o);
    }
  }
  var on = { name: "headingAtx", tokenize: x3, resolve: w3 };
  function w3(e, t) {
    let n = e.length - 2,
      a = 3,
      r,
      o;
    return (
      e[a][1].type === "whitespace" && (a += 2),
      n - 2 > a && e[n][1].type === "whitespace" && (n -= 2),
      e[n][1].type === "atxHeadingSequence" &&
        (a === n - 1 || (n - 4 > a && e[n - 2][1].type === "whitespace")) &&
        (n -= a + 1 === n ? 2 : 4),
      n > a &&
        ((r = {
          type: "atxHeadingText",
          start: e[a][1].start,
          end: e[n][1].end,
        }),
        (o = {
          type: "chunkText",
          start: e[a][1].start,
          end: e[n][1].end,
          contentType: "text",
        }),
        Ie(e, a, n - a + 1, [
          ["enter", r, t],
          ["enter", o, t],
          ["exit", o, t],
          ["exit", r, t],
        ])),
      e
    );
  }
  function x3(e, t, n) {
    let a = this,
      r = 0;
    return o;
    function o(c) {
      return e.enter("atxHeading"), e.enter("atxHeadingSequence"), i(c);
    }
    function i(c) {
      return c === 35 && r++ < 6
        ? (e.consume(c), i)
        : c === null || we(c)
        ? (e.exit("atxHeadingSequence"), a.interrupt ? t(c) : l(c))
        : n(c);
    }
    function l(c) {
      return c === 35
        ? (e.enter("atxHeadingSequence"), s(c))
        : c === null || H(c)
        ? (e.exit("atxHeading"), t(c))
        : ue(c)
        ? J(e, l, "whitespace")(c)
        : (e.enter("atxHeadingText"), u(c));
    }
    function s(c) {
      return c === 35
        ? (e.consume(c), s)
        : (e.exit("atxHeadingSequence"), l(c));
    }
    function u(c) {
      return c === null || c === 35 || we(c)
        ? (e.exit("atxHeadingText"), l(c))
        : (e.consume(c), u);
    }
  }
  var vo = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul",
    ],
    ln = ["pre", "script", "style", "textarea"];
  var cn = { name: "htmlFlow", tokenize: S3, resolveTo: z3, concrete: !0 },
    M3 = { tokenize: C3, partial: !0 };
  function z3(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
    return (
      t > 1 &&
        e[t - 2][1].type === "linePrefix" &&
        ((e[t][1].start = e[t - 2][1].start),
        (e[t + 1][1].start = e[t - 2][1].start),
        e.splice(t - 2, 2)),
      e
    );
  }
  function S3(e, t, n) {
    let a = this,
      r,
      o,
      i,
      l,
      s;
    return u;
    function u(v) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(v), c;
    }
    function c(v) {
      return v === 33
        ? (e.consume(v), h)
        : v === 47
        ? (e.consume(v), m)
        : v === 63
        ? (e.consume(v), (r = 3), a.interrupt ? t : F)
        : je(v)
        ? (e.consume(v), (i = String.fromCharCode(v)), (o = !0), g)
        : n(v);
    }
    function h(v) {
      return v === 45
        ? (e.consume(v), (r = 2), d)
        : v === 91
        ? (e.consume(v), (r = 5), (i = "CDATA["), (l = 0), p)
        : je(v)
        ? (e.consume(v), (r = 4), a.interrupt ? t : F)
        : n(v);
    }
    function d(v) {
      return v === 45 ? (e.consume(v), a.interrupt ? t : F) : n(v);
    }
    function p(v) {
      return v === i.charCodeAt(l++)
        ? (e.consume(v), l === i.length ? (a.interrupt ? t : O) : p)
        : n(v);
    }
    function m(v) {
      return je(v) ? (e.consume(v), (i = String.fromCharCode(v)), g) : n(v);
    }
    function g(v) {
      return v === null || v === 47 || v === 62 || we(v)
        ? v !== 47 && o && ln.includes(i.toLowerCase())
          ? ((r = 1), a.interrupt ? t(v) : O(v))
          : vo.includes(i.toLowerCase())
          ? ((r = 6), v === 47 ? (e.consume(v), b) : a.interrupt ? t(v) : O(v))
          : ((r = 7),
            a.interrupt && !a.parser.lazy[a.now().line]
              ? n(v)
              : o
              ? C(v)
              : _(v))
        : v === 45 || Me(v)
        ? (e.consume(v), (i += String.fromCharCode(v)), g)
        : n(v);
    }
    function b(v) {
      return v === 62 ? (e.consume(v), a.interrupt ? t : O) : n(v);
    }
    function _(v) {
      return ue(v) ? (e.consume(v), _) : T(v);
    }
    function C(v) {
      return v === 47
        ? (e.consume(v), T)
        : v === 58 || v === 95 || je(v)
        ? (e.consume(v), M)
        : ue(v)
        ? (e.consume(v), C)
        : T(v);
    }
    function M(v) {
      return v === 45 || v === 46 || v === 58 || v === 95 || Me(v)
        ? (e.consume(v), M)
        : y(v);
    }
    function y(v) {
      return v === 61 ? (e.consume(v), w) : ue(v) ? (e.consume(v), y) : C(v);
    }
    function w(v) {
      return v === null || v === 60 || v === 61 || v === 62 || v === 96
        ? n(v)
        : v === 34 || v === 39
        ? (e.consume(v), (s = v), E)
        : ue(v)
        ? (e.consume(v), w)
        : ((s = null), x(v));
    }
    function E(v) {
      return v === null || H(v)
        ? n(v)
        : v === s
        ? (e.consume(v), R)
        : (e.consume(v), E);
    }
    function x(v) {
      return v === null ||
        v === 34 ||
        v === 39 ||
        v === 60 ||
        v === 61 ||
        v === 62 ||
        v === 96 ||
        we(v)
        ? y(v)
        : (e.consume(v), x);
    }
    function R(v) {
      return v === 47 || v === 62 || ue(v) ? C(v) : n(v);
    }
    function T(v) {
      return v === 62 ? (e.consume(v), W) : n(v);
    }
    function W(v) {
      return ue(v) ? (e.consume(v), W) : v === null || H(v) ? O(v) : n(v);
    }
    function O(v) {
      return v === 45 && r === 2
        ? (e.consume(v), Q)
        : v === 60 && r === 1
        ? (e.consume(v), z)
        : v === 62 && r === 4
        ? (e.consume(v), q)
        : v === 63 && r === 3
        ? (e.consume(v), F)
        : v === 93 && r === 5
        ? (e.consume(v), L)
        : H(v) && (r === 6 || r === 7)
        ? e.check(M3, q, U)(v)
        : v === null || H(v)
        ? U(v)
        : (e.consume(v), O);
    }
    function U(v) {
      return e.exit("htmlFlowData"), S(v);
    }
    function S(v) {
      return v === null
        ? f(v)
        : H(v)
        ? e.attempt({ tokenize: V, partial: !0 }, S, f)(v)
        : (e.enter("htmlFlowData"), O(v));
    }
    function V(v, Oe, he) {
      return xe;
      function xe(ke) {
        return v.enter("lineEnding"), v.consume(ke), v.exit("lineEnding"), Re;
      }
      function Re(ke) {
        return a.parser.lazy[a.now().line] ? he(ke) : Oe(ke);
      }
    }
    function Q(v) {
      return v === 45 ? (e.consume(v), F) : O(v);
    }
    function z(v) {
      return v === 47 ? (e.consume(v), (i = ""), I) : O(v);
    }
    function I(v) {
      return v === 62 && ln.includes(i.toLowerCase())
        ? (e.consume(v), q)
        : je(v) && i.length < 8
        ? (e.consume(v), (i += String.fromCharCode(v)), I)
        : O(v);
    }
    function L(v) {
      return v === 93 ? (e.consume(v), F) : O(v);
    }
    function F(v) {
      return v === 62
        ? (e.consume(v), q)
        : v === 45 && r === 2
        ? (e.consume(v), F)
        : O(v);
    }
    function q(v) {
      return v === null || H(v)
        ? (e.exit("htmlFlowData"), f(v))
        : (e.consume(v), q);
    }
    function f(v) {
      return e.exit("htmlFlow"), t(v);
    }
  }
  function C3(e, t, n) {
    return a;
    function a(r) {
      return (
        e.exit("htmlFlowData"),
        e.enter("lineEndingBlank"),
        e.consume(r),
        e.exit("lineEndingBlank"),
        e.attempt(xt, t, n)
      );
    }
  }
  var sn = { name: "htmlText", tokenize: I3 };
  function I3(e, t, n) {
    let a = this,
      r,
      o,
      i,
      l;
    return s;
    function s(f) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(f), u;
    }
    function u(f) {
      return f === 33
        ? (e.consume(f), c)
        : f === 47
        ? (e.consume(f), x)
        : f === 63
        ? (e.consume(f), w)
        : je(f)
        ? (e.consume(f), W)
        : n(f);
    }
    function c(f) {
      return f === 45
        ? (e.consume(f), h)
        : f === 91
        ? (e.consume(f), (o = "CDATA["), (i = 0), b)
        : je(f)
        ? (e.consume(f), y)
        : n(f);
    }
    function h(f) {
      return f === 45 ? (e.consume(f), d) : n(f);
    }
    function d(f) {
      return f === null || f === 62
        ? n(f)
        : f === 45
        ? (e.consume(f), p)
        : m(f);
    }
    function p(f) {
      return f === null || f === 62 ? n(f) : m(f);
    }
    function m(f) {
      return f === null
        ? n(f)
        : f === 45
        ? (e.consume(f), g)
        : H(f)
        ? ((l = m), L(f))
        : (e.consume(f), m);
    }
    function g(f) {
      return f === 45 ? (e.consume(f), q) : m(f);
    }
    function b(f) {
      return f === o.charCodeAt(i++)
        ? (e.consume(f), i === o.length ? _ : b)
        : n(f);
    }
    function _(f) {
      return f === null
        ? n(f)
        : f === 93
        ? (e.consume(f), C)
        : H(f)
        ? ((l = _), L(f))
        : (e.consume(f), _);
    }
    function C(f) {
      return f === 93 ? (e.consume(f), M) : _(f);
    }
    function M(f) {
      return f === 62 ? q(f) : f === 93 ? (e.consume(f), M) : _(f);
    }
    function y(f) {
      return f === null || f === 62
        ? q(f)
        : H(f)
        ? ((l = y), L(f))
        : (e.consume(f), y);
    }
    function w(f) {
      return f === null
        ? n(f)
        : f === 63
        ? (e.consume(f), E)
        : H(f)
        ? ((l = w), L(f))
        : (e.consume(f), w);
    }
    function E(f) {
      return f === 62 ? q(f) : w(f);
    }
    function x(f) {
      return je(f) ? (e.consume(f), R) : n(f);
    }
    function R(f) {
      return f === 45 || Me(f) ? (e.consume(f), R) : T(f);
    }
    function T(f) {
      return H(f) ? ((l = T), L(f)) : ue(f) ? (e.consume(f), T) : q(f);
    }
    function W(f) {
      return f === 45 || Me(f)
        ? (e.consume(f), W)
        : f === 47 || f === 62 || we(f)
        ? O(f)
        : n(f);
    }
    function O(f) {
      return f === 47
        ? (e.consume(f), q)
        : f === 58 || f === 95 || je(f)
        ? (e.consume(f), U)
        : H(f)
        ? ((l = O), L(f))
        : ue(f)
        ? (e.consume(f), O)
        : q(f);
    }
    function U(f) {
      return f === 45 || f === 46 || f === 58 || f === 95 || Me(f)
        ? (e.consume(f), U)
        : S(f);
    }
    function S(f) {
      return f === 61
        ? (e.consume(f), V)
        : H(f)
        ? ((l = S), L(f))
        : ue(f)
        ? (e.consume(f), S)
        : O(f);
    }
    function V(f) {
      return f === null || f === 60 || f === 61 || f === 62 || f === 96
        ? n(f)
        : f === 34 || f === 39
        ? (e.consume(f), (r = f), Q)
        : H(f)
        ? ((l = V), L(f))
        : ue(f)
        ? (e.consume(f), V)
        : (e.consume(f), (r = void 0), I);
    }
    function Q(f) {
      return f === r
        ? (e.consume(f), z)
        : f === null
        ? n(f)
        : H(f)
        ? ((l = Q), L(f))
        : (e.consume(f), Q);
    }
    function z(f) {
      return f === 62 || f === 47 || we(f) ? O(f) : n(f);
    }
    function I(f) {
      return f === null ||
        f === 34 ||
        f === 39 ||
        f === 60 ||
        f === 61 ||
        f === 96
        ? n(f)
        : f === 62 || we(f)
        ? O(f)
        : (e.consume(f), I);
    }
    function L(f) {
      return (
        e.exit("htmlTextData"),
        e.enter("lineEnding"),
        e.consume(f),
        e.exit("lineEnding"),
        J(
          e,
          F,
          "linePrefix",
          a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )
      );
    }
    function F(f) {
      return e.enter("htmlTextData"), l(f);
    }
    function q(f) {
      return f === 62
        ? (e.consume(f), e.exit("htmlTextData"), e.exit("htmlText"), t)
        : n(f);
    }
  }
  var Ot = { name: "labelEnd", tokenize: O3, resolveTo: L3, resolveAll: T3 },
    R3 = { tokenize: D3 },
    k3 = { tokenize: H3 },
    N3 = { tokenize: V3 };
  function T3(e) {
    let t = -1,
      n;
    for (; ++t < e.length; )
      (n = e[t][1]),
        (n.type === "labelImage" ||
          n.type === "labelLink" ||
          n.type === "labelEnd") &&
          (e.splice(t + 1, n.type === "labelImage" ? 4 : 2),
          (n.type = "data"),
          t++);
    return e;
  }
  function L3(e, t) {
    let n = e.length,
      a = 0,
      r,
      o,
      i,
      l;
    for (; n--; )
      if (((r = e[n][1]), o)) {
        if (r.type === "link" || (r.type === "labelLink" && r._inactive)) break;
        e[n][0] === "enter" && r.type === "labelLink" && (r._inactive = !0);
      } else if (i) {
        if (
          e[n][0] === "enter" &&
          (r.type === "labelImage" || r.type === "labelLink") &&
          !r._balanced &&
          ((o = n), r.type !== "labelLink")
        ) {
          a = 2;
          break;
        }
      } else r.type === "labelEnd" && (i = n);
    let s = {
        type: e[o][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, e[o][1].start),
        end: Object.assign({}, e[e.length - 1][1].end),
      },
      u = {
        type: "label",
        start: Object.assign({}, e[o][1].start),
        end: Object.assign({}, e[i][1].end),
      },
      c = {
        type: "labelText",
        start: Object.assign({}, e[o + a + 2][1].end),
        end: Object.assign({}, e[i - 2][1].start),
      };
    return (
      (l = [
        ["enter", s, t],
        ["enter", u, t],
      ]),
      (l = He(l, e.slice(o + 1, o + a + 3))),
      (l = He(l, [["enter", c, t]])),
      (l = He(
        l,
        r5(t.parser.constructs.insideSpan.null, e.slice(o + a + 4, i - 3), t)
      )),
      (l = He(l, [["exit", c, t], e[i - 2], e[i - 1], ["exit", u, t]])),
      (l = He(l, e.slice(i + 1))),
      (l = He(l, [["exit", s, t]])),
      Ie(e, o, e.length, l),
      e
    );
  }
  function O3(e, t, n) {
    let a = this,
      r = a.events.length,
      o,
      i;
    for (; r--; )
      if (
        (a.events[r][1].type === "labelImage" ||
          a.events[r][1].type === "labelLink") &&
        !a.events[r][1]._balanced
      ) {
        o = a.events[r][1];
        break;
      }
    return l;
    function l(c) {
      return o
        ? o._inactive
          ? u(c)
          : ((i = a.parser.defined.includes(
              mt(a.sliceSerialize({ start: o.end, end: a.now() }))
            )),
            e.enter("labelEnd"),
            e.enter("labelMarker"),
            e.consume(c),
            e.exit("labelMarker"),
            e.exit("labelEnd"),
            s)
        : n(c);
    }
    function s(c) {
      return c === 40
        ? e.attempt(R3, t, i ? t : u)(c)
        : c === 91
        ? e.attempt(k3, t, i ? e.attempt(N3, t, u) : u)(c)
        : i
        ? t(c)
        : u(c);
    }
    function u(c) {
      return (o._balanced = !0), n(c);
    }
  }
  function D3(e, t, n) {
    return a;
    function a(s) {
      return (
        e.enter("resource"),
        e.enter("resourceMarker"),
        e.consume(s),
        e.exit("resourceMarker"),
        Lt(e, r)
      );
    }
    function r(s) {
      return s === 41
        ? l(s)
        : g1(
            e,
            o,
            n,
            "resourceDestination",
            "resourceDestinationLiteral",
            "resourceDestinationLiteralMarker",
            "resourceDestinationRaw",
            "resourceDestinationString",
            32
          )(s);
    }
    function o(s) {
      return we(s) ? Lt(e, i)(s) : l(s);
    }
    function i(s) {
      return s === 34 || s === 39 || s === 40
        ? b1(
            e,
            Lt(e, l),
            n,
            "resourceTitle",
            "resourceTitleMarker",
            "resourceTitleString"
          )(s)
        : l(s);
    }
    function l(s) {
      return s === 41
        ? (e.enter("resourceMarker"),
          e.consume(s),
          e.exit("resourceMarker"),
          e.exit("resource"),
          t)
        : n(s);
    }
  }
  function H3(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return v1.call(
        a,
        e,
        o,
        n,
        "reference",
        "referenceMarker",
        "referenceString"
      )(i);
    }
    function o(i) {
      return a.parser.defined.includes(
        mt(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1))
      )
        ? t(i)
        : n(i);
    }
  }
  function V3(e, t, n) {
    return a;
    function a(o) {
      return (
        e.enter("reference"),
        e.enter("referenceMarker"),
        e.consume(o),
        e.exit("referenceMarker"),
        r
      );
    }
    function r(o) {
      return o === 93
        ? (e.enter("referenceMarker"),
          e.consume(o),
          e.exit("referenceMarker"),
          e.exit("reference"),
          t)
        : n(o);
    }
  }
  var un = { name: "labelStartImage", tokenize: F3, resolveAll: Ot.resolveAll };
  function F3(e, t, n) {
    let a = this;
    return r;
    function r(l) {
      return (
        e.enter("labelImage"),
        e.enter("labelImageMarker"),
        e.consume(l),
        e.exit("labelImageMarker"),
        o
      );
    }
    function o(l) {
      return l === 91
        ? (e.enter("labelMarker"),
          e.consume(l),
          e.exit("labelMarker"),
          e.exit("labelImage"),
          i)
        : n(l);
    }
    function i(l) {
      return l === 94 && "_hiddenFootnoteSupport" in a.parser.constructs
        ? n(l)
        : t(l);
    }
  }
  var dn = { name: "labelStartLink", tokenize: P3, resolveAll: Ot.resolveAll };
  function P3(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return (
        e.enter("labelLink"),
        e.enter("labelMarker"),
        e.consume(i),
        e.exit("labelMarker"),
        e.exit("labelLink"),
        o
      );
    }
    function o(i) {
      return i === 94 && "_hiddenFootnoteSupport" in a.parser.constructs
        ? n(i)
        : t(i);
    }
  }
  var k5 = { name: "lineEnding", tokenize: B3 };
  function B3(e, t) {
    return n;
    function n(a) {
      return (
        e.enter("lineEnding"),
        e.consume(a),
        e.exit("lineEnding"),
        J(e, t, "linePrefix")
      );
    }
  }
  var Dt = { name: "thematicBreak", tokenize: U3 };
  function U3(e, t, n) {
    let a = 0,
      r;
    return o;
    function o(s) {
      return e.enter("thematicBreak"), (r = s), i(s);
    }
    function i(s) {
      return s === r
        ? (e.enter("thematicBreakSequence"), l(s))
        : ue(s)
        ? J(e, i, "whitespace")(s)
        : a < 3 || (s !== null && !H(s))
        ? n(s)
        : (e.exit("thematicBreak"), t(s));
    }
    function l(s) {
      return s === r
        ? (e.consume(s), a++, l)
        : (e.exit("thematicBreakSequence"), i(s));
    }
  }
  var Te = {
      name: "list",
      tokenize: G3,
      continuation: { tokenize: W3 },
      exit: Y3,
    },
    $3 = { tokenize: Q3, partial: !0 },
    q3 = { tokenize: K3, partial: !0 };
  function G3(e, t, n) {
    let a = this,
      r = a.events[a.events.length - 1],
      o =
        r && r[1].type === "linePrefix"
          ? r[2].sliceSerialize(r[1], !0).length
          : 0,
      i = 0;
    return l;
    function l(p) {
      let m =
        a.containerState.type ||
        (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
      if (
        m === "listUnordered"
          ? !a.containerState.marker || p === a.containerState.marker
          : S5(p)
      ) {
        if (
          (a.containerState.type ||
            ((a.containerState.type = m), e.enter(m, { _container: !0 })),
          m === "listUnordered")
        )
          return (
            e.enter("listItemPrefix"),
            p === 42 || p === 45 ? e.check(Dt, n, u)(p) : u(p)
          );
        if (!a.interrupt || p === 49)
          return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
      }
      return n(p);
    }
    function s(p) {
      return S5(p) && ++i < 10
        ? (e.consume(p), s)
        : (!a.interrupt || i < 2) &&
          (a.containerState.marker
            ? p === a.containerState.marker
            : p === 41 || p === 46)
        ? (e.exit("listItemValue"), u(p))
        : n(p);
    }
    function u(p) {
      return (
        e.enter("listItemMarker"),
        e.consume(p),
        e.exit("listItemMarker"),
        (a.containerState.marker = a.containerState.marker || p),
        e.check(xt, a.interrupt ? n : c, e.attempt($3, d, h))
      );
    }
    function c(p) {
      return (a.containerState.initialBlankLine = !0), o++, d(p);
    }
    function h(p) {
      return ue(p)
        ? (e.enter("listItemPrefixWhitespace"),
          e.consume(p),
          e.exit("listItemPrefixWhitespace"),
          d)
        : n(p);
    }
    function d(p) {
      return (
        (a.containerState.size =
          o + a.sliceSerialize(e.exit("listItemPrefix"), !0).length),
        t(p)
      );
    }
  }
  function W3(e, t, n) {
    let a = this;
    return (a.containerState._closeFlow = void 0), e.check(xt, r, o);
    function r(l) {
      return (
        (a.containerState.furtherBlankLines =
          a.containerState.furtherBlankLines ||
          a.containerState.initialBlankLine),
        J(e, t, "listItemIndent", a.containerState.size + 1)(l)
      );
    }
    function o(l) {
      return a.containerState.furtherBlankLines || !ue(l)
        ? ((a.containerState.furtherBlankLines = void 0),
          (a.containerState.initialBlankLine = void 0),
          i(l))
        : ((a.containerState.furtherBlankLines = void 0),
          (a.containerState.initialBlankLine = void 0),
          e.attempt(q3, t, i)(l));
    }
    function i(l) {
      return (
        (a.containerState._closeFlow = !0),
        (a.interrupt = void 0),
        J(
          e,
          e.attempt(Te, t, n),
          "linePrefix",
          a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(l)
      );
    }
  }
  function K3(e, t, n) {
    let a = this;
    return J(e, r, "listItemIndent", a.containerState.size + 1);
    function r(o) {
      let i = a.events[a.events.length - 1];
      return i &&
        i[1].type === "listItemIndent" &&
        i[2].sliceSerialize(i[1], !0).length === a.containerState.size
        ? t(o)
        : n(o);
    }
  }
  function Y3(e) {
    e.exit(this.containerState.type);
  }
  function Q3(e, t, n) {
    let a = this;
    return J(
      e,
      r,
      "listItemPrefixWhitespace",
      a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
    );
    function r(o) {
      let i = a.events[a.events.length - 1];
      return !ue(o) && i && i[1].type === "listItemPrefixWhitespace"
        ? t(o)
        : n(o);
    }
  }
  var E1 = { name: "setextUnderline", tokenize: j3, resolveTo: Z3 };
  function Z3(e, t) {
    let n = e.length,
      a,
      r,
      o;
    for (; n--; )
      if (e[n][0] === "enter") {
        if (e[n][1].type === "content") {
          a = n;
          break;
        }
        e[n][1].type === "paragraph" && (r = n);
      } else
        e[n][1].type === "content" && e.splice(n, 1),
          !o && e[n][1].type === "definition" && (o = n);
    let i = {
      type: "setextHeading",
      start: Object.assign({}, e[r][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    };
    return (
      (e[r][1].type = "setextHeadingText"),
      o
        ? (e.splice(r, 0, ["enter", i, t]),
          e.splice(o + 1, 0, ["exit", e[a][1], t]),
          (e[a][1].end = Object.assign({}, e[o][1].end)))
        : (e[a][1] = i),
      e.push(["exit", i, t]),
      e
    );
  }
  function j3(e, t, n) {
    let a = this,
      r = a.events.length,
      o,
      i;
    for (; r--; )
      if (
        a.events[r][1].type !== "lineEnding" &&
        a.events[r][1].type !== "linePrefix" &&
        a.events[r][1].type !== "content"
      ) {
        i = a.events[r][1].type === "paragraph";
        break;
      }
    return l;
    function l(c) {
      return !a.parser.lazy[a.now().line] && (a.interrupt || i)
        ? (e.enter("setextHeadingLine"),
          e.enter("setextHeadingLineSequence"),
          (o = c),
          s(c))
        : n(c);
    }
    function s(c) {
      return c === o
        ? (e.consume(c), s)
        : (e.exit("setextHeadingLineSequence"), J(e, u, "lineSuffix")(c));
    }
    function u(c) {
      return c === null || H(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
    }
  }
  var bo = { tokenize: X3 };
  function X3(e) {
    let t = this,
      n = e.attempt(
        xt,
        a,
        e.attempt(
          this.parser.constructs.flowInitial,
          r,
          J(
            e,
            e.attempt(this.parser.constructs.flow, r, e.attempt(nn, r)),
            "linePrefix"
          )
        )
      );
    return n;
    function a(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return (
        e.enter("lineEndingBlank"),
        e.consume(o),
        e.exit("lineEndingBlank"),
        (t.currentConstruct = void 0),
        n
      );
    }
    function r(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return (
        e.enter("lineEnding"),
        e.consume(o),
        e.exit("lineEnding"),
        (t.currentConstruct = void 0),
        n
      );
    }
  }
  var Eo = { resolveAll: wo() },
    _o = yo("string"),
    Ao = yo("text");
  function yo(e) {
    return { tokenize: t, resolveAll: wo(e === "text" ? J3 : void 0) };
    function t(n) {
      let a = this,
        r = this.parser.constructs[e],
        o = n.attempt(r, i, l);
      return i;
      function i(c) {
        return u(c) ? o(c) : l(c);
      }
      function l(c) {
        if (c === null) {
          n.consume(c);
          return;
        }
        return n.enter("data"), n.consume(c), s;
      }
      function s(c) {
        return u(c) ? (n.exit("data"), o(c)) : (n.consume(c), s);
      }
      function u(c) {
        if (c === null) return !0;
        let h = r[c],
          d = -1;
        if (h)
          for (; ++d < h.length; ) {
            let p = h[d];
            if (!p.previous || p.previous.call(a, a.previous)) return !0;
          }
        return !1;
      }
    }
  }
  function wo(e) {
    return t;
    function t(n, a) {
      let r = -1,
        o;
      for (; ++r <= n.length; )
        o === void 0
          ? n[r] && n[r][1].type === "data" && ((o = r), r++)
          : (!n[r] || n[r][1].type !== "data") &&
            (r !== o + 2 &&
              ((n[o][1].end = n[r - 1][1].end),
              n.splice(o + 2, r - o - 2),
              (r = o + 2)),
            (o = void 0));
      return e ? e(n, a) : n;
    }
  }
  function J3(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
      if (
        (n === e.length || e[n][1].type === "lineEnding") &&
        e[n - 1][1].type === "data"
      ) {
        let a = e[n - 1][1],
          r = t.sliceStream(a),
          o = r.length,
          i = -1,
          l = 0,
          s;
        for (; o--; ) {
          let u = r[o];
          if (typeof u == "string") {
            for (i = u.length; u.charCodeAt(i - 1) === 32; ) l++, i--;
            if (i) break;
            i = -1;
          } else if (u === -2) (s = !0), l++;
          else if (u !== -1) {
            o++;
            break;
          }
        }
        if (l) {
          let u = {
            type:
              n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              line: a.end.line,
              column: a.end.column - l,
              offset: a.end.offset - l,
              _index: a.start._index + o,
              _bufferIndex: o ? i : a.start._bufferIndex + i,
            },
            end: Object.assign({}, a.end),
          };
          (a.end = Object.assign({}, u.start)),
            a.start.offset === a.end.offset
              ? Object.assign(a, u)
              : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), (n += 2));
        }
        n++;
      }
    return e;
  }
  function xo(e, t, n) {
    let a = Object.assign(
        n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
        { _index: 0, _bufferIndex: -1 }
      ),
      r = {},
      o = [],
      i = [],
      l = [],
      s = !0,
      u = {
        consume: y,
        enter: w,
        exit: E,
        attempt: T(x),
        check: T(R),
        interrupt: T(R, { interrupt: !0 }),
      },
      c = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser: e,
        sliceStream: g,
        sliceSerialize: m,
        now: b,
        defineSkip: _,
        write: p,
      },
      h = t.tokenize.call(c, u),
      d;
    return t.resolveAll && o.push(t), c;
    function p(S) {
      return (
        (i = He(i, S)),
        C(),
        i[i.length - 1] !== null
          ? []
          : (W(t, 0), (c.events = r5(o, c.events, c)), c.events)
      );
    }
    function m(S, V) {
      return t4(g(S), V);
    }
    function g(S) {
      return e4(i, S);
    }
    function b() {
      return Object.assign({}, a);
    }
    function _(S) {
      (r[S.line] = S.column), U();
    }
    function C() {
      let S;
      for (; a._index < i.length; ) {
        let V = i[a._index];
        if (typeof V == "string")
          for (
            S = a._index, a._bufferIndex < 0 && (a._bufferIndex = 0);
            a._index === S && a._bufferIndex < V.length;

          )
            M(V.charCodeAt(a._bufferIndex));
        else M(V);
      }
    }
    function M(S) {
      (s = void 0), (d = S), (h = h(S));
    }
    function y(S) {
      H(S)
        ? (a.line++, (a.column = 1), (a.offset += S === -3 ? 2 : 1), U())
        : S !== -1 && (a.column++, a.offset++),
        a._bufferIndex < 0
          ? a._index++
          : (a._bufferIndex++,
            a._bufferIndex === i[a._index].length &&
              ((a._bufferIndex = -1), a._index++)),
        (c.previous = S),
        (s = !0);
    }
    function w(S, V) {
      let Q = V || {};
      return (
        (Q.type = S),
        (Q.start = b()),
        c.events.push(["enter", Q, c]),
        l.push(Q),
        Q
      );
    }
    function E(S) {
      let V = l.pop();
      return (V.end = b()), c.events.push(["exit", V, c]), V;
    }
    function x(S, V) {
      W(S, V.from);
    }
    function R(S, V) {
      V.restore();
    }
    function T(S, V) {
      return Q;
      function Q(z, I, L) {
        let F, q, f, v;
        return Array.isArray(z) ? he(z) : "tokenize" in z ? he([z]) : Oe(z);
        function Oe(X) {
          return K;
          function K(re) {
            let se = re !== null && X[re],
              ie = re !== null && X.null,
              Ye = [
                ...(Array.isArray(se) ? se : se ? [se] : []),
                ...(Array.isArray(ie) ? ie : ie ? [ie] : []),
              ];
            return he(Ye)(re);
          }
        }
        function he(X) {
          return (F = X), (q = 0), X.length === 0 ? L : xe(X[q]);
        }
        function xe(X) {
          return K;
          function K(re) {
            return (
              (v = O()),
              (f = X),
              X.partial || (c.currentConstruct = X),
              X.name && c.parser.constructs.disable.null.includes(X.name)
                ? ke(re)
                : X.tokenize.call(
                    V ? Object.assign(Object.create(c), V) : c,
                    u,
                    Re,
                    ke
                  )(re)
            );
          }
        }
        function Re(X) {
          return (s = !0), S(f, v), I;
        }
        function ke(X) {
          return (s = !0), v.restore(), ++q < F.length ? xe(F[q]) : L;
        }
      }
    }
    function W(S, V) {
      S.resolveAll && !o.includes(S) && o.push(S),
        S.resolve &&
          Ie(c.events, V, c.events.length - V, S.resolve(c.events.slice(V), c)),
        S.resolveTo && (c.events = S.resolveTo(c.events, c));
    }
    function O() {
      let S = b(),
        V = c.previous,
        Q = c.currentConstruct,
        z = c.events.length,
        I = Array.from(l);
      return { restore: L, from: z };
      function L() {
        (a = S),
          (c.previous = V),
          (c.currentConstruct = Q),
          (c.events.length = z),
          (l = I),
          U();
      }
    }
    function U() {
      a.line in r &&
        a.column < 2 &&
        ((a.column = r[a.line]), (a.offset += r[a.line] - 1));
    }
  }
  function e4(e, t) {
    let n = t.start._index,
      a = t.start._bufferIndex,
      r = t.end._index,
      o = t.end._bufferIndex,
      i;
    return (
      n === r
        ? (i = [e[n].slice(a, o)])
        : ((i = e.slice(n, r)),
          a > -1 && (i[0] = i[0].slice(a)),
          o > 0 && i.push(e[r].slice(0, o))),
      i
    );
  }
  function t4(e, t) {
    let n = -1,
      a = [],
      r;
    for (; ++n < e.length; ) {
      let o = e[n],
        i;
      if (typeof o == "string") i = o;
      else
        switch (o) {
          case -5: {
            i = "\r";
            break;
          }
          case -4: {
            i = `
`;
            break;
          }
          case -3: {
            i = `\r
`;
            break;
          }
          case -2: {
            i = t ? " " : "	";
            break;
          }
          case -1: {
            if (!t && r) continue;
            i = " ";
            break;
          }
          default:
            i = String.fromCharCode(o);
        }
      (r = o === -2), a.push(i);
    }
    return a.join("");
  }
  var pn = {};
  i0(pn, {
    attentionMarkers: () => s4,
    contentInitial: () => a4,
    disable: () => u4,
    document: () => n4,
    flow: () => o4,
    flowInitial: () => r4,
    insideSpan: () => c4,
    string: () => i4,
    text: () => l4,
  });
  var n4 = {
      [42]: Te,
      [43]: Te,
      [45]: Te,
      [48]: Te,
      [49]: Te,
      [50]: Te,
      [51]: Te,
      [52]: Te,
      [53]: Te,
      [54]: Te,
      [55]: Te,
      [56]: Te,
      [57]: Te,
      [62]: d1,
    },
    a4 = { [91]: an },
    r4 = { [-2]: R5, [-1]: R5, [32]: R5 },
    o4 = {
      [35]: on,
      [42]: Dt,
      [45]: [E1, Dt],
      [60]: cn,
      [61]: E1,
      [95]: Dt,
      [96]: m1,
      [126]: m1,
    },
    i4 = { [38]: h1, [92]: p1 },
    l4 = {
      [-5]: k5,
      [-4]: k5,
      [-3]: k5,
      [33]: un,
      [38]: h1,
      [42]: I5,
      [60]: [en, sn],
      [91]: dn,
      [92]: [rn, p1],
      [93]: Ot,
      [95]: I5,
      [96]: tn,
    },
    c4 = { null: [I5, Eo] },
    s4 = { null: [42, 95] },
    u4 = { null: [] };
  function Mo(e = {}) {
    let t = oo([pn].concat(e.extensions || [])),
      n = {
        defined: [],
        lazy: {},
        constructs: t,
        content: a(po),
        document: a(mo),
        flow: a(bo),
        string: a(_o),
        text: a(Ao),
      };
    return n;
    function a(r) {
      return o;
      function o(i) {
        return xo(n, r, i);
      }
    }
  }
  var zo = /[\0\t\n\r]/g;
  function So() {
    let e = 1,
      t = "",
      n = !0,
      a;
    return r;
    function r(o, i, l) {
      let s = [],
        u,
        c,
        h,
        d,
        p;
      for (
        o = t + o.toString(i),
          h = 0,
          t = "",
          n && (o.charCodeAt(0) === 65279 && h++, (n = void 0));
        h < o.length;

      ) {
        if (
          ((zo.lastIndex = h),
          (u = zo.exec(o)),
          (d = u && u.index !== void 0 ? u.index : o.length),
          (p = o.charCodeAt(d)),
          !u)
        ) {
          t = o.slice(h);
          break;
        }
        if (p === 10 && h === d && a) s.push(-3), (a = void 0);
        else
          switch (
            (a && (s.push(-5), (a = void 0)),
            h < d && (s.push(o.slice(h, d)), (e += d - h)),
            p)
          ) {
            case 0: {
              s.push(65533), e++;
              break;
            }
            case 9: {
              for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
              break;
            }
            case 10: {
              s.push(-4), (e = 1);
              break;
            }
            default:
              (a = !0), (e = 1);
          }
        h = d + 1;
      }
      return l && (a && s.push(-5), t && s.push(t), s.push(null)), s;
    }
  }
  function Co(e) {
    for (; !f1(e); );
    return e;
  }
  function _1(e, t) {
    let n = Number.parseInt(e, t);
    return n < 9 ||
      n === 11 ||
      (n > 13 && n < 32) ||
      (n > 126 && n < 160) ||
      (n > 55295 && n < 57344) ||
      (n > 64975 && n < 65008) ||
      (n & 65535) === 65535 ||
      (n & 65535) === 65534 ||
      n > 1114111
      ? "\uFFFD"
      : String.fromCharCode(n);
  }
  var d4 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function Io(e) {
    return e.replace(d4, p4);
  }
  function p4(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
      let r = n.charCodeAt(1),
        o = r === 120 || r === 88;
      return _1(n.slice(o ? 2 : 1), o ? 16 : 10);
    }
    return o5(n) || e;
  }
  var hn = {}.hasOwnProperty,
    mn = function (e, t, n) {
      return (
        typeof t != "string" && ((n = t), (t = void 0)),
        h4(n)(Co(Mo(n).document().write(So()(e, t, !0))))
      );
    };
  function h4(e = {}) {
    let t = ko(
        {
          transforms: [],
          canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong",
          ],
          enter: {
            autolink: s(Se),
            autolinkProtocol: U,
            autolinkEmail: U,
            atxHeading: s(Y),
            blockQuote: s(ie),
            characterEscape: U,
            characterReference: U,
            codeFenced: s(Ye),
            codeFencedFenceInfo: u,
            codeFencedFenceMeta: u,
            codeIndented: s(Ye, u),
            codeText: s(ze, u),
            codeTextData: U,
            data: U,
            codeFlowValue: U,
            definition: s(dt),
            definitionDestinationString: u,
            definitionLabelString: u,
            definitionTitleString: u,
            emphasis: s(it),
            hardBreakEscape: s(vt),
            hardBreakTrailing: s(vt),
            htmlFlow: s(be, u),
            htmlFlowData: U,
            htmlText: s(be, u),
            htmlTextData: U,
            image: s(ne),
            label: u,
            link: s(Se),
            listItem: s(s5),
            listItemValue: g,
            listOrdered: s(Ve, m),
            listUnordered: s(Ve),
            paragraph: s(u5),
            reference: Re,
            referenceString: u,
            resourceDestinationString: u,
            resourceTitleString: u,
            setextHeading: s(Y),
            strong: s(D),
            thematicBreak: s(te),
          },
          exit: {
            atxHeading: h(),
            atxHeadingSequence: R,
            autolink: h(),
            autolinkEmail: se,
            autolinkProtocol: re,
            blockQuote: h(),
            characterEscapeValue: S,
            characterReferenceMarkerHexadecimal: X,
            characterReferenceMarkerNumeric: X,
            characterReferenceValue: K,
            codeFenced: h(M),
            codeFencedFence: C,
            codeFencedFenceInfo: b,
            codeFencedFenceMeta: _,
            codeFlowValue: S,
            codeIndented: h(y),
            codeText: h(L),
            codeTextData: S,
            data: S,
            definition: h(),
            definitionDestinationString: x,
            definitionLabelString: w,
            definitionTitleString: E,
            emphasis: h(),
            hardBreakEscape: h(Q),
            hardBreakTrailing: h(Q),
            htmlFlow: h(z),
            htmlFlowData: S,
            htmlText: h(I),
            htmlTextData: S,
            image: h(q),
            label: v,
            labelText: f,
            lineEnding: V,
            link: h(F),
            listItem: h(),
            listOrdered: h(),
            listUnordered: h(),
            paragraph: h(),
            referenceString: ke,
            resourceDestinationString: Oe,
            resourceTitleString: he,
            resource: xe,
            setextHeading: h(O),
            setextHeadingLineSequence: W,
            setextHeadingText: T,
            strong: h(),
            thematicBreak: h(),
          },
        },
        e.mdastExtensions || []
      ),
      n = {};
    return a;
    function a(A) {
      let k = { type: "root", children: [] },
        G = [k],
        le = [],
        Fe = [],
        d5 = {
          stack: G,
          tokenStack: le,
          config: t,
          enter: c,
          exit: d,
          buffer: u,
          resume: p,
          setData: o,
          getData: i,
        },
        fe = -1;
      for (; ++fe < A.length; )
        if (
          A[fe][1].type === "listOrdered" ||
          A[fe][1].type === "listUnordered"
        )
          if (A[fe][0] === "enter") Fe.push(fe);
          else {
            let Ce = Fe.pop();
            fe = r(A, Ce, fe);
          }
      for (fe = -1; ++fe < A.length; ) {
        let Ce = t[A[fe][0]];
        hn.call(Ce, A[fe][1].type) &&
          Ce[A[fe][1].type].call(
            Object.assign({ sliceSerialize: A[fe][2].sliceSerialize }, d5),
            A[fe][1]
          );
      }
      if (le.length > 0) {
        let Ce = le[le.length - 1];
        (Ce[1] || Ro).call(d5, void 0, Ce[0]);
      }
      for (
        k.position = {
          start: l(
            A.length > 0 ? A[0][1].start : { line: 1, column: 1, offset: 0 }
          ),
          end: l(
            A.length > 0
              ? A[A.length - 2][1].end
              : { line: 1, column: 1, offset: 0 }
          ),
        },
          fe = -1;
        ++fe < t.transforms.length;

      )
        k = t.transforms[fe](k) || k;
      return k;
    }
    function r(A, k, G) {
      let le = k - 1,
        Fe = -1,
        d5 = !1,
        fe,
        Ce,
        $t,
        p5;
      for (; ++le <= G; ) {
        let Ae = A[le];
        if (
          (Ae[1].type === "listUnordered" ||
          Ae[1].type === "listOrdered" ||
          Ae[1].type === "blockQuote"
            ? (Ae[0] === "enter" ? Fe++ : Fe--, (p5 = void 0))
            : Ae[1].type === "lineEndingBlank"
            ? Ae[0] === "enter" &&
              (fe && !p5 && !Fe && !$t && ($t = le), (p5 = void 0))
            : Ae[1].type === "linePrefix" ||
              Ae[1].type === "listItemValue" ||
              Ae[1].type === "listItemMarker" ||
              Ae[1].type === "listItemPrefix" ||
              Ae[1].type === "listItemPrefixWhitespace" ||
              (p5 = void 0),
          (!Fe && Ae[0] === "enter" && Ae[1].type === "listItemPrefix") ||
            (Fe === -1 &&
              Ae[0] === "exit" &&
              (Ae[1].type === "listUnordered" || Ae[1].type === "listOrdered")))
        ) {
          if (fe) {
            let o0 = le;
            for (Ce = void 0; o0--; ) {
              let pt = A[o0];
              if (
                pt[1].type === "lineEnding" ||
                pt[1].type === "lineEndingBlank"
              ) {
                if (pt[0] === "exit") continue;
                Ce && ((A[Ce][1].type = "lineEndingBlank"), (d5 = !0)),
                  (pt[1].type = "lineEnding"),
                  (Ce = o0);
              } else if (
                !(
                  pt[1].type === "linePrefix" ||
                  pt[1].type === "blockQuotePrefix" ||
                  pt[1].type === "blockQuotePrefixWhitespace" ||
                  pt[1].type === "blockQuoteMarker" ||
                  pt[1].type === "listItemIndent"
                )
              )
                break;
            }
            $t && (!Ce || $t < Ce) && (fe._spread = !0),
              (fe.end = Object.assign({}, Ce ? A[Ce][1].start : Ae[1].end)),
              A.splice(Ce || le, 0, ["exit", fe, Ae[2]]),
              le++,
              G++;
          }
          Ae[1].type === "listItemPrefix" &&
            ((fe = {
              type: "listItem",
              _spread: !1,
              start: Object.assign({}, Ae[1].start),
            }),
            A.splice(le, 0, ["enter", fe, Ae[2]]),
            le++,
            G++,
            ($t = void 0),
            (p5 = !0));
        }
      }
      return (A[k][1]._spread = d5), G;
    }
    function o(A, k) {
      n[A] = k;
    }
    function i(A) {
      return n[A];
    }
    function l(A) {
      return { line: A.line, column: A.column, offset: A.offset };
    }
    function s(A, k) {
      return G;
      function G(le) {
        c.call(this, A(le), le), k && k.call(this, le);
      }
    }
    function u() {
      this.stack.push({ type: "fragment", children: [] });
    }
    function c(A, k, G) {
      return (
        this.stack[this.stack.length - 1].children.push(A),
        this.stack.push(A),
        this.tokenStack.push([k, G]),
        (A.position = { start: l(k.start) }),
        A
      );
    }
    function h(A) {
      return k;
      function k(G) {
        A && A.call(this, G), d.call(this, G);
      }
    }
    function d(A, k) {
      let G = this.stack.pop(),
        le = this.tokenStack.pop();
      if (le)
        le[0].type !== A.type &&
          (k ? k.call(this, A, le[0]) : (le[1] || Ro).call(this, A, le[0]));
      else
        throw new Error(
          "Cannot close `" +
            A.type +
            "` (" +
            Nt({ start: A.start, end: A.end }) +
            "): it\u2019s not open"
        );
      return (G.position.end = l(A.end)), G;
    }
    function p() {
      return no(this.stack.pop());
    }
    function m() {
      o("expectingFirstListItemValue", !0);
    }
    function g(A) {
      if (i("expectingFirstListItemValue")) {
        let k = this.stack[this.stack.length - 2];
        (k.start = Number.parseInt(this.sliceSerialize(A), 10)),
          o("expectingFirstListItemValue");
      }
    }
    function b() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.lang = A;
    }
    function _() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.meta = A;
    }
    function C() {
      i("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
    }
    function M() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      (k.value = A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
        o("flowCodeInside");
    }
    function y() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A.replace(/(\r?\n|\r)$/g, "");
    }
    function w(A) {
      let k = this.resume(),
        G = this.stack[this.stack.length - 1];
      (G.label = k), (G.identifier = mt(this.sliceSerialize(A)).toLowerCase());
    }
    function E() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.title = A;
    }
    function x() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.url = A;
    }
    function R(A) {
      let k = this.stack[this.stack.length - 1];
      if (!k.depth) {
        let G = this.sliceSerialize(A).length;
        k.depth = G;
      }
    }
    function T() {
      o("setextHeadingSlurpLineEnding", !0);
    }
    function W(A) {
      let k = this.stack[this.stack.length - 1];
      k.depth = this.sliceSerialize(A).charCodeAt(0) === 61 ? 1 : 2;
    }
    function O() {
      o("setextHeadingSlurpLineEnding");
    }
    function U(A) {
      let k = this.stack[this.stack.length - 1],
        G = k.children[k.children.length - 1];
      (!G || G.type !== "text") &&
        ((G = $()), (G.position = { start: l(A.start) }), k.children.push(G)),
        this.stack.push(G);
    }
    function S(A) {
      let k = this.stack.pop();
      (k.value += this.sliceSerialize(A)), (k.position.end = l(A.end));
    }
    function V(A) {
      let k = this.stack[this.stack.length - 1];
      if (i("atHardBreak")) {
        let G = k.children[k.children.length - 1];
        (G.position.end = l(A.end)), o("atHardBreak");
        return;
      }
      !i("setextHeadingSlurpLineEnding") &&
        t.canContainEols.includes(k.type) &&
        (U.call(this, A), S.call(this, A));
    }
    function Q() {
      o("atHardBreak", !0);
    }
    function z() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A;
    }
    function I() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A;
    }
    function L() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A;
    }
    function F() {
      let A = this.stack[this.stack.length - 1];
      i("inReference")
        ? ((A.type += "Reference"),
          (A.referenceType = i("referenceType") || "shortcut"),
          delete A.url,
          delete A.title)
        : (delete A.identifier, delete A.label),
        o("referenceType");
    }
    function q() {
      let A = this.stack[this.stack.length - 1];
      i("inReference")
        ? ((A.type += "Reference"),
          (A.referenceType = i("referenceType") || "shortcut"),
          delete A.url,
          delete A.title)
        : (delete A.identifier, delete A.label),
        o("referenceType");
    }
    function f(A) {
      let k = this.stack[this.stack.length - 2],
        G = this.sliceSerialize(A);
      (k.label = Io(G)), (k.identifier = mt(G).toLowerCase());
    }
    function v() {
      let A = this.stack[this.stack.length - 1],
        k = this.resume(),
        G = this.stack[this.stack.length - 1];
      o("inReference", !0),
        G.type === "link" ? (G.children = A.children) : (G.alt = k);
    }
    function Oe() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.url = A;
    }
    function he() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.title = A;
    }
    function xe() {
      o("inReference");
    }
    function Re() {
      o("referenceType", "collapsed");
    }
    function ke(A) {
      let k = this.resume(),
        G = this.stack[this.stack.length - 1];
      (G.label = k),
        (G.identifier = mt(this.sliceSerialize(A)).toLowerCase()),
        o("referenceType", "full");
    }
    function X(A) {
      o("characterReferenceType", A.type);
    }
    function K(A) {
      let k = this.sliceSerialize(A),
        G = i("characterReferenceType"),
        le;
      G
        ? ((le = _1(k, G === "characterReferenceMarkerNumeric" ? 10 : 16)),
          o("characterReferenceType"))
        : (le = o5(k));
      let Fe = this.stack.pop();
      (Fe.value += le), (Fe.position.end = l(A.end));
    }
    function re(A) {
      S.call(this, A);
      let k = this.stack[this.stack.length - 1];
      k.url = this.sliceSerialize(A);
    }
    function se(A) {
      S.call(this, A);
      let k = this.stack[this.stack.length - 1];
      k.url = "mailto:" + this.sliceSerialize(A);
    }
    function ie() {
      return { type: "blockquote", children: [] };
    }
    function Ye() {
      return { type: "code", lang: null, meta: null, value: "" };
    }
    function ze() {
      return { type: "inlineCode", value: "" };
    }
    function dt() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: "",
      };
    }
    function it() {
      return { type: "emphasis", children: [] };
    }
    function Y() {
      return { type: "heading", depth: void 0, children: [] };
    }
    function vt() {
      return { type: "break" };
    }
    function be() {
      return { type: "html", value: "" };
    }
    function ne() {
      return { type: "image", title: null, url: "", alt: null };
    }
    function Se() {
      return { type: "link", title: null, url: "", children: [] };
    }
    function Ve(A) {
      return {
        type: "list",
        ordered: A.type === "listOrdered",
        start: null,
        spread: A._spread,
        children: [],
      };
    }
    function s5(A) {
      return {
        type: "listItem",
        spread: A._spread,
        checked: null,
        children: [],
      };
    }
    function u5() {
      return { type: "paragraph", children: [] };
    }
    function D() {
      return { type: "strong", children: [] };
    }
    function $() {
      return { type: "text", value: "" };
    }
    function te() {
      return { type: "thematicBreak" };
    }
  }
  function ko(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
      let a = t[n];
      Array.isArray(a) ? ko(e, a) : m4(e, a);
    }
    return e;
  }
  function m4(e, t) {
    let n;
    for (n in t)
      if (hn.call(t, n)) {
        let a = n === "canContainEols" || n === "transforms",
          o = (hn.call(e, n) ? e[n] : void 0) || (e[n] = a ? [] : {}),
          i = t[n];
        i && (a ? (e[n] = [...o, ...i]) : Object.assign(o, i));
      }
  }
  function Ro(e, t) {
    throw e
      ? new Error(
          "Cannot close `" +
            e.type +
            "` (" +
            Nt({ start: e.start, end: e.end }) +
            "): a different token (`" +
            t.type +
            "`, " +
            Nt({ start: t.start, end: t.end }) +
            ") is open"
        )
      : new Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            Nt({ start: t.start, end: t.end }) +
            ") is still open"
        );
  }
  function fn(e) {
    Object.assign(this, {
      Parser: (n) => {
        let a = this.data("settings");
        return mn(
          n,
          Object.assign({}, a, e, {
            extensions: this.data("micromarkExtensions") || [],
            mdastExtensions: this.data("fromMarkdownExtensions") || [],
          })
        );
      },
    });
  }
  var No = fn;
  var oe = function (e, t, n) {
    var a = { type: String(e) };
    return (
      n == null && (typeof t == "string" || Array.isArray(t))
        ? (n = t)
        : Object.assign(a, t),
      Array.isArray(n) ? (a.children = n) : n != null && (a.value = String(n)),
      a
    );
  };
  var A1 = {}.hasOwnProperty;
  function f4(e, t) {
    let n = t.data || {};
    return "value" in t &&
      !(
        A1.call(n, "hName") ||
        A1.call(n, "hProperties") ||
        A1.call(n, "hChildren")
      )
      ? e.augment(t, oe("text", t.value))
      : e(t, "div", ce(e, t));
  }
  function gn(e, t, n) {
    let a = t && t.type,
      r;
    if (!a) throw new Error("Expected node, got `" + t + "`");
    return (
      A1.call(e.handlers, a)
        ? (r = e.handlers[a])
        : e.passThrough && e.passThrough.includes(a)
        ? (r = g4)
        : (r = e.unknownHandler),
      (typeof r == "function" ? r : f4)(e, t, n)
    );
  }
  function g4(e, t) {
    return "children" in t ? { ...t, children: ce(e, t) } : t;
  }
  function ce(e, t) {
    let n = [];
    if ("children" in t) {
      let a = t.children,
        r = -1;
      for (; ++r < a.length; ) {
        let o = gn(e, a[r], t);
        if (o) {
          if (
            r &&
            a[r - 1].type === "break" &&
            (!Array.isArray(o) &&
              o.type === "text" &&
              (o.value = o.value.replace(/^\s+/, "")),
            !Array.isArray(o) && o.type === "element")
          ) {
            let i = o.children[0];
            i && i.type === "text" && (i.value = i.value.replace(/^\s+/, ""));
          }
          Array.isArray(o) ? n.push(...o) : n.push(o);
        }
      }
    }
    return n;
  }
  var N5 = function (e) {
    if (e == null) return _4;
    if (typeof e == "string") return E4(e);
    if (typeof e == "object") return Array.isArray(e) ? v4(e) : b4(e);
    if (typeof e == "function") return y1(e);
    throw new Error("Expected function, string, or object as test");
  };
  function v4(e) {
    let t = [],
      n = -1;
    for (; ++n < e.length; ) t[n] = N5(e[n]);
    return y1(a);
    function a(...r) {
      let o = -1;
      for (; ++o < t.length; ) if (t[o].call(this, ...r)) return !0;
      return !1;
    }
  }
  function b4(e) {
    return y1(t);
    function t(n) {
      let a;
      for (a in e) if (n[a] !== e[a]) return !1;
      return !0;
    }
  }
  function E4(e) {
    return y1(t);
    function t(n) {
      return n && n.type === e;
    }
  }
  function y1(e) {
    return t;
    function t(...n) {
      return Boolean(e.call(this, ...n));
    }
  }
  function _4() {
    return !0;
  }
  var A4 = !0,
    y4 = "skip",
    To = !1,
    Lo = function (e, t, n, a) {
      typeof t == "function" &&
        typeof n != "function" &&
        ((a = n), (n = t), (t = null));
      let r = N5(t),
        o = a ? -1 : 1;
      i(e, null, [])();
      function i(l, s, u) {
        let c = typeof l == "object" && l !== null ? l : {},
          h;
        return (
          typeof c.type == "string" &&
            ((h =
              typeof c.tagName == "string"
                ? c.tagName
                : typeof c.name == "string"
                ? c.name
                : void 0),
            Object.defineProperty(d, "name", {
              value: "node (" + (c.type + (h ? "<" + h + ">" : "")) + ")",
            })),
          d
        );
        function d() {
          let p = [],
            m,
            g,
            b;
          if (
            (!t || r(l, s, u[u.length - 1] || null)) &&
            ((p = w4(n(l, u))), p[0] === To)
          )
            return p;
          if (l.children && p[0] !== y4)
            for (
              g = (a ? l.children.length : -1) + o, b = u.concat(l);
              g > -1 && g < l.children.length;

            ) {
              if (((m = i(l.children[g], g, b)()), m[0] === To)) return m;
              g = typeof m[1] == "number" ? m[1] : g + o;
            }
          return p;
        }
      }
    };
  function w4(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [A4, e] : [e];
  }
  var Mt = function (e, t, n, a) {
    typeof t == "function" &&
      typeof n != "function" &&
      ((a = n), (n = t), (t = null)),
      Lo(e, t, r, a);
    function r(o, i) {
      let l = i[i.length - 1];
      return n(o, l ? l.children.indexOf(o) : null, l);
    }
  };
  var w1 = Oo("start"),
    x1 = Oo("end");
  function Oo(e) {
    return t;
    function t(n) {
      let a = (n && n.position && n.position[e]) || {};
      return {
        line: a.line || null,
        column: a.column || null,
        offset: a.offset > -1 ? a.offset : null,
      };
    }
  }
  function Do(e) {
    return (
      !e ||
      !e.position ||
      !e.position.start ||
      !e.position.start.line ||
      !e.position.start.column ||
      !e.position.end ||
      !e.position.end.line ||
      !e.position.end.column
    );
  }
  var Ho = {}.hasOwnProperty;
  function Fo(e) {
    let t = Object.create(null);
    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
    return (
      Mt(e, "definition", (a) => {
        let r = Vo(a.identifier);
        r && !Ho.call(t, r) && (t[r] = a);
      }),
      n
    );
    function n(a) {
      let r = Vo(a);
      return r && Ho.call(t, r) ? t[r] : null;
    }
  }
  function Vo(e) {
    return String(e || "").toUpperCase();
  }
  function Je(e) {
    let t = [],
      n = -1,
      a = 0,
      r = 0;
    for (; ++n < e.length; ) {
      let o = e.charCodeAt(n),
        i = "";
      if (o === 37 && Me(e.charCodeAt(n + 1)) && Me(e.charCodeAt(n + 2))) r = 2;
      else if (o < 128)
        /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
          (i = String.fromCharCode(o));
      else if (o > 55295 && o < 57344) {
        let l = e.charCodeAt(n + 1);
        o < 56320 && l > 56319 && l < 57344
          ? ((i = String.fromCharCode(o, l)), (r = 1))
          : (i = "\uFFFD");
      } else i = String.fromCharCode(o);
      i &&
        (t.push(e.slice(a, n), encodeURIComponent(i)),
        (a = n + r + 1),
        (i = "")),
        r && ((n += r), (r = 0));
    }
    return t.join("") + e.slice(a);
  }
  function Ge(e, t) {
    let n = [],
      a = -1;
    for (
      t &&
      n.push(
        oe(
          "text",
          `
`
        )
      );
      ++a < e.length;

    )
      a &&
        n.push(
          oe(
            "text",
            `
`
          )
        ),
        n.push(e[a]);
    return (
      t &&
        e.length > 0 &&
        n.push(
          oe(
            "text",
            `
`
          )
        ),
      n
    );
  }
  function Po(e) {
    let t = -1,
      n = [];
    for (; ++t < e.footnoteOrder.length; ) {
      let a = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
      if (!a) continue;
      let r = ce(e, a),
        o = String(a.identifier),
        i = Je(o.toLowerCase()),
        l = 0,
        s = [];
      for (; ++l <= e.footnoteCounts[o]; ) {
        let h = {
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + e.clobberPrefix + "fnref-" + i + (l > 1 ? "-" + l : ""),
            dataFootnoteBackref: !0,
            className: ["data-footnote-backref"],
            ariaLabel: e.footnoteBackLabel,
          },
          children: [{ type: "text", value: "\u21A9" }],
        };
        l > 1 &&
          h.children.push({
            type: "element",
            tagName: "sup",
            children: [{ type: "text", value: String(l) }],
          }),
          s.length > 0 && s.push({ type: "text", value: " " }),
          s.push(h);
      }
      let u = r[r.length - 1];
      if (u && u.type === "element" && u.tagName === "p") {
        let h = u.children[u.children.length - 1];
        h && h.type === "text"
          ? (h.value += " ")
          : u.children.push({ type: "text", value: " " }),
          u.children.push(...s);
      } else r.push(...s);
      let c = {
        type: "element",
        tagName: "li",
        properties: { id: e.clobberPrefix + "fn-" + i },
        children: Ge(r, !0),
      };
      a.position && (c.position = a.position), n.push(c);
    }
    return n.length === 0
      ? null
      : {
          type: "element",
          tagName: "section",
          properties: { dataFootnotes: !0, className: ["footnotes"] },
          children: [
            {
              type: "element",
              tagName: e.footnoteLabelTagName,
              properties: {
                ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                id: "footnote-label",
              },
              children: [oe("text", e.footnoteLabel)],
            },
            {
              type: "text",
              value: `
`,
            },
            {
              type: "element",
              tagName: "ol",
              properties: {},
              children: Ge(n, !0),
            },
            {
              type: "text",
              value: `
`,
            },
          ],
        };
  }
  function Bo(e, t) {
    return e(t, "blockquote", Ge(ce(e, t), !0));
  }
  function Uo(e, t) {
    return [
      e(t, "br"),
      oe(
        "text",
        `
`
      ),
    ];
  }
  function $o(e, t) {
    let n = t.value
        ? t.value +
          `
`
        : "",
      a = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
      r = {};
    a && (r.className = ["language-" + a]);
    let o = e(t, "code", r, [oe("text", n)]);
    return t.meta && (o.data = { meta: t.meta }), e(t.position, "pre", [o]);
  }
  function qo(e, t) {
    return e(t, "del", ce(e, t));
  }
  function Go(e, t) {
    return e(t, "em", ce(e, t));
  }
  function M1(e, t) {
    let n = String(t.identifier),
      a = Je(n.toLowerCase()),
      r = e.footnoteOrder.indexOf(n),
      o;
    r === -1
      ? (e.footnoteOrder.push(n),
        (e.footnoteCounts[n] = 1),
        (o = e.footnoteOrder.length))
      : (e.footnoteCounts[n]++, (o = r + 1));
    let i = e.footnoteCounts[n];
    return e(t, "sup", [
      e(
        t.position,
        "a",
        {
          href: "#" + e.clobberPrefix + "fn-" + a,
          id: e.clobberPrefix + "fnref-" + a + (i > 1 ? "-" + i : ""),
          dataFootnoteRef: !0,
          ariaDescribedBy: "footnote-label",
        },
        [oe("text", String(o))]
      ),
    ]);
  }
  function Wo(e, t) {
    let n = e.footnoteById,
      a = 1;
    for (; a in n; ) a++;
    let r = String(a);
    return (
      (n[r] = {
        type: "footnoteDefinition",
        identifier: r,
        children: [{ type: "paragraph", children: t.children }],
        position: t.position,
      }),
      M1(e, { type: "footnoteReference", identifier: r, position: t.position })
    );
  }
  function Ko(e, t) {
    return e(t, "h" + t.depth, ce(e, t));
  }
  function Yo(e, t) {
    return e.dangerous ? e.augment(t, oe("raw", t.value)) : null;
  }
  function z1(e, t) {
    let n = t.referenceType,
      a = "]";
    if (
      (n === "collapsed"
        ? (a += "[]")
        : n === "full" && (a += "[" + (t.label || t.identifier) + "]"),
      t.type === "imageReference")
    )
      return oe("text", "![" + t.alt + a);
    let r = ce(e, t),
      o = r[0];
    o && o.type === "text"
      ? (o.value = "[" + o.value)
      : r.unshift(oe("text", "["));
    let i = r[r.length - 1];
    return i && i.type === "text" ? (i.value += a) : r.push(oe("text", a)), r;
  }
  function Qo(e, t) {
    let n = e.definition(t.identifier);
    if (!n) return z1(e, t);
    let a = { src: Je(n.url || ""), alt: t.alt };
    return (
      n.title !== null && n.title !== void 0 && (a.title = n.title),
      e(t, "img", a)
    );
  }
  function Zo(e, t) {
    let n = { src: Je(t.url), alt: t.alt };
    return (
      t.title !== null && t.title !== void 0 && (n.title = t.title),
      e(t, "img", n)
    );
  }
  function jo(e, t) {
    return e(t, "code", [oe("text", t.value.replace(/\r?\n|\r/g, " "))]);
  }
  function Xo(e, t) {
    let n = e.definition(t.identifier);
    if (!n) return z1(e, t);
    let a = { href: Je(n.url || "") };
    return (
      n.title !== null && n.title !== void 0 && (a.title = n.title),
      e(t, "a", a, ce(e, t))
    );
  }
  function Jo(e, t) {
    let n = { href: Je(t.url) };
    return (
      t.title !== null && t.title !== void 0 && (n.title = t.title),
      e(t, "a", n, ce(e, t))
    );
  }
  function ei(e, t, n) {
    let a = ce(e, t),
      r = n ? x4(n) : ti(t),
      o = {},
      i = [];
    if (typeof t.checked == "boolean") {
      let u;
      a[0] && a[0].type === "element" && a[0].tagName === "p"
        ? (u = a[0])
        : ((u = e(null, "p", [])), a.unshift(u)),
        u.children.length > 0 && u.children.unshift(oe("text", " ")),
        u.children.unshift(
          e(null, "input", {
            type: "checkbox",
            checked: t.checked,
            disabled: !0,
          })
        ),
        (o.className = ["task-list-item"]);
    }
    let l = -1;
    for (; ++l < a.length; ) {
      let u = a[l];
      (r || l !== 0 || u.type !== "element" || u.tagName !== "p") &&
        i.push(
          oe(
            "text",
            `
`
          )
        ),
        u.type === "element" && u.tagName === "p" && !r
          ? i.push(...u.children)
          : i.push(u);
    }
    let s = a[a.length - 1];
    return (
      s &&
        (r || !("tagName" in s) || s.tagName !== "p") &&
        i.push(
          oe(
            "text",
            `
`
          )
        ),
      e(t, "li", o, i)
    );
  }
  function x4(e) {
    let t = e.spread,
      n = e.children,
      a = -1;
    for (; !t && ++a < n.length; ) t = ti(n[a]);
    return Boolean(t);
  }
  function ti(e) {
    let t = e.spread;
    return t ?? e.children.length > 1;
  }
  function ni(e, t) {
    let n = {},
      a = t.ordered ? "ol" : "ul",
      r = ce(e, t),
      o = -1;
    for (
      typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
      ++o < r.length;

    ) {
      let i = r[o];
      if (
        i.type === "element" &&
        i.tagName === "li" &&
        i.properties &&
        Array.isArray(i.properties.className) &&
        i.properties.className.includes("task-list-item")
      ) {
        n.className = ["contains-task-list"];
        break;
      }
    }
    return e(t, a, n, Ge(r, !0));
  }
  function ai(e, t) {
    return e(t, "p", ce(e, t));
  }
  function ri(e, t) {
    return e.augment(t, oe("root", Ge(ce(e, t))));
  }
  function oi(e, t) {
    return e(t, "strong", ce(e, t));
  }
  function ii(e, t) {
    let n = t.children,
      a = -1,
      r = t.align || [],
      o = [];
    for (; ++a < n.length; ) {
      let i = n[a].children,
        l = a === 0 ? "th" : "td",
        s = [],
        u = -1,
        c = t.align ? r.length : i.length;
      for (; ++u < c; ) {
        let h = i[u];
        s.push(e(h, l, { align: r[u] }, h ? ce(e, h) : []));
      }
      o[a] = e(n[a], "tr", Ge(s, !0));
    }
    return e(
      t,
      "table",
      Ge(
        [e(o[0].position, "thead", Ge([o[0]], !0))].concat(
          o[1]
            ? e(
                { start: w1(o[1]), end: x1(o[o.length - 1]) },
                "tbody",
                Ge(o.slice(1), !0)
              )
            : []
        ),
        !0
      )
    );
  }
  function ci(e) {
    let t = String(e),
      n = /\r?\n|\r/g,
      a = n.exec(t),
      r = 0,
      o = [];
    for (; a; )
      o.push(li(t.slice(r, a.index), r > 0, !0), a[0]),
        (r = a.index + a[0].length),
        (a = n.exec(t));
    return o.push(li(t.slice(r), r > 0, !1)), o.join("");
  }
  function li(e, t, n) {
    let a = 0,
      r = e.length;
    if (t) {
      let o = e.codePointAt(a);
      for (; o === 9 || o === 32; ) a++, (o = e.codePointAt(a));
    }
    if (n) {
      let o = e.codePointAt(r - 1);
      for (; o === 9 || o === 32; ) r--, (o = e.codePointAt(r - 1));
    }
    return r > a ? e.slice(a, r) : "";
  }
  function si(e, t) {
    return e.augment(t, oe("text", ci(String(t.value))));
  }
  function ui(e, t) {
    return e(t, "hr");
  }
  var vn = {
    blockquote: Bo,
    break: Uo,
    code: $o,
    delete: qo,
    emphasis: Go,
    footnoteReference: M1,
    footnote: Wo,
    heading: Ko,
    html: Yo,
    imageReference: Qo,
    image: Zo,
    inlineCode: jo,
    linkReference: Xo,
    link: Jo,
    listItem: ei,
    list: ni,
    paragraph: ai,
    root: ri,
    strong: oi,
    table: ii,
    text: si,
    thematicBreak: ui,
    toml: S1,
    yaml: S1,
    definition: S1,
    footnoteDefinition: S1,
  };
  function S1() {
    return null;
  }
  var M4 = {}.hasOwnProperty;
  function z4(e, t) {
    let n = t || {},
      a = n.allowDangerousHtml || !1,
      r = {};
    return (
      (i.dangerous = a),
      (i.clobberPrefix =
        n.clobberPrefix === void 0 || n.clobberPrefix === null
          ? "user-content-"
          : n.clobberPrefix),
      (i.footnoteLabel = n.footnoteLabel || "Footnotes"),
      (i.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
      (i.footnoteLabelProperties = n.footnoteLabelProperties || {
        className: ["sr-only"],
      }),
      (i.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
      (i.definition = Fo(e)),
      (i.footnoteById = r),
      (i.footnoteOrder = []),
      (i.footnoteCounts = {}),
      (i.augment = o),
      (i.handlers = { ...vn, ...n.handlers }),
      (i.unknownHandler = n.unknownHandler),
      (i.passThrough = n.passThrough),
      Mt(e, "footnoteDefinition", (l) => {
        let s = String(l.identifier).toUpperCase();
        M4.call(r, s) || (r[s] = l);
      }),
      i
    );
    function o(l, s) {
      if (l && "data" in l && l.data) {
        let u = l.data;
        u.hName &&
          (s.type !== "element" &&
            (s = {
              type: "element",
              tagName: "",
              properties: {},
              children: [],
            }),
          (s.tagName = u.hName)),
          s.type === "element" &&
            u.hProperties &&
            (s.properties = { ...s.properties, ...u.hProperties }),
          "children" in s &&
            s.children &&
            u.hChildren &&
            (s.children = u.hChildren);
      }
      if (l) {
        let u = "type" in l ? l : { position: l };
        Do(u) || (s.position = { start: w1(u), end: x1(u) });
      }
      return s;
    }
    function i(l, s, u, c) {
      return (
        Array.isArray(u) && ((c = u), (u = {})),
        o(l, {
          type: "element",
          tagName: s,
          properties: u || {},
          children: c || [],
        })
      );
    }
  }
  function C1(e, t) {
    let n = z4(e, t),
      a = gn(n, e, null),
      r = Po(n);
    return (
      r &&
        a.children.push(
          oe(
            "text",
            `
`
          ),
          r
        ),
      Array.isArray(a) ? { type: "root", children: a } : a
    );
  }
  var S4 = function (e, t) {
      return e && "run" in e ? C4(e, t) : I4(e || t);
    },
    bn = S4;
  function C4(e, t) {
    return (n, a, r) => {
      e.run(C1(n, t), a, (o) => {
        r(o);
      });
    };
  }
  function I4(e) {
    return (t) => C1(t, e);
  }
  var Z = Be(bi(), 1);
  var ft = class {
    constructor(t, n, a) {
      (this.property = t), (this.normal = n), a && (this.space = a);
    }
  };
  ft.prototype.property = {};
  ft.prototype.normal = {};
  ft.prototype.space = null;
  function En(e, t) {
    let n = {},
      a = {},
      r = -1;
    for (; ++r < e.length; )
      Object.assign(n, e[r].property), Object.assign(a, e[r].normal);
    return new ft(n, a, t);
  }
  function T5(e) {
    return e.toLowerCase();
  }
  var Le = class {
    constructor(t, n) {
      (this.property = t), (this.attribute = n);
    }
  };
  Le.prototype.space = null;
  Le.prototype.boolean = !1;
  Le.prototype.booleanish = !1;
  Le.prototype.overloadedBoolean = !1;
  Le.prototype.number = !1;
  Le.prototype.commaSeparated = !1;
  Le.prototype.spaceSeparated = !1;
  Le.prototype.commaOrSpaceSeparated = !1;
  Le.prototype.mustUseProperty = !1;
  Le.prototype.defined = !1;
  var L5 = {};
  i0(L5, {
    boolean: () => ee,
    booleanish: () => _e,
    commaOrSpaceSeparated: () => We,
    commaSeparated: () => zt,
    number: () => N,
    overloadedBoolean: () => _n,
    spaceSeparated: () => pe,
  });
  var N4 = 0,
    ee = Ht(),
    _e = Ht(),
    _n = Ht(),
    N = Ht(),
    pe = Ht(),
    zt = Ht(),
    We = Ht();
  function Ht() {
    return 2 ** ++N4;
  }
  var An = Object.keys(L5),
    Vt = class extends Le {
      constructor(t, n, a, r) {
        let o = -1;
        if ((super(t, n), Ei(this, "space", r), typeof a == "number"))
          for (; ++o < An.length; ) {
            let i = An[o];
            Ei(this, An[o], (a & L5[i]) === L5[i]);
          }
      }
    };
  Vt.prototype.defined = !0;
  function Ei(e, t, n) {
    n && (e[t] = n);
  }
  var T4 = {}.hasOwnProperty;
  function et(e) {
    let t = {},
      n = {},
      a;
    for (a in e.properties)
      if (T4.call(e.properties, a)) {
        let r = e.properties[a],
          o = new Vt(a, e.transform(e.attributes || {}, a), r, e.space);
        e.mustUseProperty &&
          e.mustUseProperty.includes(a) &&
          (o.mustUseProperty = !0),
          (t[a] = o),
          (n[T5(a)] = a),
          (n[T5(o.attribute)] = a);
      }
    return new ft(t, n, e.space);
  }
  var yn = et({
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  });
  var wn = et({
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
  function I1(e, t) {
    return t in e ? e[t] : t;
  }
  function R1(e, t) {
    return I1(e, t.toLowerCase());
  }
  var xn = et({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: R1,
    properties: { xmlns: null, xmlnsXLink: null },
  });
  var Mn = et({
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: _e,
      ariaAutoComplete: null,
      ariaBusy: _e,
      ariaChecked: _e,
      ariaColCount: N,
      ariaColIndex: N,
      ariaColSpan: N,
      ariaControls: pe,
      ariaCurrent: null,
      ariaDescribedBy: pe,
      ariaDetails: null,
      ariaDisabled: _e,
      ariaDropEffect: pe,
      ariaErrorMessage: null,
      ariaExpanded: _e,
      ariaFlowTo: pe,
      ariaGrabbed: _e,
      ariaHasPopup: null,
      ariaHidden: _e,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: pe,
      ariaLevel: N,
      ariaLive: null,
      ariaModal: _e,
      ariaMultiLine: _e,
      ariaMultiSelectable: _e,
      ariaOrientation: null,
      ariaOwns: pe,
      ariaPlaceholder: null,
      ariaPosInSet: N,
      ariaPressed: _e,
      ariaReadOnly: _e,
      ariaRelevant: null,
      ariaRequired: _e,
      ariaRoleDescription: pe,
      ariaRowCount: N,
      ariaRowIndex: N,
      ariaRowSpan: N,
      ariaSelected: _e,
      ariaSetSize: N,
      ariaSort: null,
      ariaValueMax: N,
      ariaValueMin: N,
      ariaValueNow: N,
      ariaValueText: null,
      role: null,
    },
  });
  var _i = et({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: R1,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: zt,
      acceptCharset: pe,
      accessKey: pe,
      action: null,
      allow: null,
      allowFullScreen: ee,
      allowPaymentRequest: ee,
      allowUserMedia: ee,
      alt: null,
      as: null,
      async: ee,
      autoCapitalize: null,
      autoComplete: pe,
      autoFocus: ee,
      autoPlay: ee,
      capture: ee,
      charSet: null,
      checked: ee,
      cite: null,
      className: pe,
      cols: N,
      colSpan: null,
      content: null,
      contentEditable: _e,
      controls: ee,
      controlsList: pe,
      coords: N | zt,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ee,
      defer: ee,
      dir: null,
      dirName: null,
      disabled: ee,
      download: _n,
      draggable: _e,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ee,
      formTarget: null,
      headers: pe,
      height: N,
      hidden: ee,
      high: N,
      href: null,
      hrefLang: null,
      htmlFor: pe,
      httpEquiv: pe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ee,
      itemId: null,
      itemProp: pe,
      itemRef: pe,
      itemScope: ee,
      itemType: pe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ee,
      low: N,
      manifest: null,
      max: null,
      maxLength: N,
      media: null,
      method: null,
      min: null,
      minLength: N,
      multiple: ee,
      muted: ee,
      name: null,
      nonce: null,
      noModule: ee,
      noValidate: ee,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: ee,
      optimum: N,
      pattern: null,
      ping: pe,
      placeholder: null,
      playsInline: ee,
      poster: null,
      preload: null,
      readOnly: ee,
      referrerPolicy: null,
      rel: pe,
      required: ee,
      reversed: ee,
      rows: N,
      rowSpan: N,
      sandbox: pe,
      scope: null,
      scoped: ee,
      seamless: ee,
      selected: ee,
      shape: null,
      size: N,
      sizes: null,
      slot: null,
      span: N,
      spellCheck: _e,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: N,
      step: null,
      style: null,
      tabIndex: N,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ee,
      useMap: null,
      value: _e,
      width: N,
      wrap: null,
      align: null,
      aLink: null,
      archive: pe,
      axis: null,
      background: null,
      bgColor: null,
      border: N,
      borderColor: null,
      bottomMargin: N,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: ee,
      declare: ee,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: N,
      leftMargin: N,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: N,
      marginWidth: N,
      noResize: ee,
      noHref: ee,
      noShade: ee,
      noWrap: ee,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: N,
      rules: null,
      scheme: null,
      scrolling: _e,
      standby: null,
      summary: null,
      text: null,
      topMargin: N,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: N,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ee,
      disableRemotePlayback: ee,
      prefix: null,
      property: null,
      results: N,
      security: null,
      unselectable: null,
    },
  });
  var Ai = et({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: I1,
    properties: {
      about: We,
      accentHeight: N,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: N,
      amplitude: N,
      arabicForm: null,
      ascent: N,
      attributeName: null,
      attributeType: null,
      azimuth: N,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: N,
      by: null,
      calcMode: null,
      capHeight: N,
      className: pe,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: N,
      diffuseConstant: N,
      direction: null,
      display: null,
      dur: null,
      divisor: N,
      dominantBaseline: null,
      download: ee,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: N,
      enableBackground: null,
      end: null,
      event: null,
      exponent: N,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: N,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: zt,
      g2: zt,
      glyphName: zt,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: N,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: N,
      horizOriginX: N,
      horizOriginY: N,
      id: null,
      ideographic: N,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: N,
      k: N,
      k1: N,
      k2: N,
      k3: N,
      k4: N,
      kernelMatrix: We,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: N,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: N,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: N,
      overlineThickness: N,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: N,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: pe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: N,
      pointsAtY: N,
      pointsAtZ: N,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: We,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: We,
      rev: We,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: We,
      requiredFeatures: We,
      requiredFonts: We,
      requiredFormats: We,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: N,
      specularExponent: N,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: N,
      strikethroughThickness: N,
      string: null,
      stroke: null,
      strokeDashArray: We,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: N,
      strokeOpacity: N,
      strokeWidth: null,
      style: null,
      surfaceScale: N,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: We,
      tabIndex: N,
      tableValues: null,
      target: null,
      targetX: N,
      targetY: N,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: We,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: N,
      underlineThickness: N,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: N,
      values: null,
      vAlphabetic: N,
      vMathematical: N,
      vectorEffect: null,
      vHanging: N,
      vIdeographic: N,
      version: null,
      vertAdvY: N,
      vertOriginX: N,
      vertOriginY: N,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: N,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  });
  var L4 = /^data[-\w.:]+$/i,
    yi = /-[a-z]/g,
    O4 = /[A-Z]/g;
  function zn(e, t) {
    let n = T5(t),
      a = t,
      r = Le;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && L4.test(t)) {
      if (t.charAt(4) === "-") {
        let o = t.slice(5).replace(yi, H4);
        a = "data" + o.charAt(0).toUpperCase() + o.slice(1);
      } else {
        let o = t.slice(4);
        if (!yi.test(o)) {
          let i = o.replace(O4, D4);
          i.charAt(0) !== "-" && (i = "-" + i), (t = "data" + i);
        }
      }
      r = Vt;
    }
    return new r(a, t);
  }
  function D4(e) {
    return "-" + e.toLowerCase();
  }
  function H4(e) {
    return e.charAt(1).toUpperCase();
  }
  var k1 = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  };
  var wi = En([wn, yn, xn, Mn, _i], "html"),
    xi = En([wn, yn, xn, Mn, Ai], "svg");
  function Sn(e) {
    if (e.allowedElements && e.disallowedElements)
      throw new TypeError(
        "Only one of `allowedElements` and `disallowedElements` should be defined"
      );
    if (e.allowedElements || e.disallowedElements || e.allowElement)
      return (t) => {
        Mt(t, "element", (n, a, r) => {
          let o = r,
            i;
          if (
            (e.allowedElements
              ? (i = !e.allowedElements.includes(n.tagName))
              : e.disallowedElements &&
                (i = e.disallowedElements.includes(n.tagName)),
            !i &&
              e.allowElement &&
              typeof a == "number" &&
              (i = !e.allowElement(n, a, o)),
            i && typeof a == "number")
          )
            return (
              e.unwrapDisallowed && n.children
                ? o.children.splice(a, 1, ...n.children)
                : o.children.splice(a, 1),
              a
            );
        });
      };
  }
  at();
  var Pi = Be(Ci(), 1);
  function Ii(e) {
    var t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
    return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
  }
  function Ri(e) {
    return e.join(" ").trim();
  }
  function ki(e, t) {
    let n = t || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e)
      .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
      .trim();
  }
  var Bi = Be(Fi(), 1),
    kn = {}.hasOwnProperty,
    X4 = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
  function Nn(e, t) {
    let n = [],
      a = -1,
      r;
    for (; ++a < t.children.length; )
      (r = t.children[a]),
        r.type === "element"
          ? n.push(J4(e, r, a, t))
          : r.type === "text"
          ? (t.type !== "element" || !X4.has(t.tagName) || !Ii(r)) &&
            n.push(r.value)
          : r.type === "raw" && !e.options.skipHtml && n.push(r.value);
    return n;
  }
  function J4(e, t, n, a) {
    let r = e.options,
      o = e.schema,
      i = t.tagName,
      l = {},
      s = o,
      u;
    if (
      (o.space === "html" && i === "svg" && ((s = xi), (e.schema = s)),
      t.properties)
    )
      for (u in t.properties)
        kn.call(t.properties, u) && t6(l, u, t.properties[u], e);
    (i === "ol" || i === "ul") && e.listDepth++;
    let c = Nn(e, t);
    (i === "ol" || i === "ul") && e.listDepth--, (e.schema = o);
    let h = t.position || {
        start: { line: null, column: null, offset: null },
        end: { line: null, column: null, offset: null },
      },
      d = r.components && kn.call(r.components, i) ? r.components[i] : i,
      p = typeof d == "string" || d === ae.Fragment;
    if (!Pi.default.isValidElementType(d))
      throw new TypeError(
        `Component for name \`${i}\` not defined or is not renderable`
      );
    if (
      ((l.key = [i, h.start.line, h.start.column, n].join("-")),
      i === "a" &&
        r.linkTarget &&
        (l.target =
          typeof r.linkTarget == "function"
            ? r.linkTarget(
                String(l.href || ""),
                t.children,
                typeof l.title == "string" ? l.title : null
              )
            : r.linkTarget),
      i === "a" &&
        r.transformLinkUri &&
        (l.href = r.transformLinkUri(
          String(l.href || ""),
          t.children,
          typeof l.title == "string" ? l.title : null
        )),
      !p &&
        i === "code" &&
        a.type === "element" &&
        a.tagName !== "pre" &&
        (l.inline = !0),
      !p &&
        (i === "h1" ||
          i === "h2" ||
          i === "h3" ||
          i === "h4" ||
          i === "h5" ||
          i === "h6") &&
        (l.level = Number.parseInt(i.charAt(1), 10)),
      i === "img" &&
        r.transformImageUri &&
        (l.src = r.transformImageUri(
          String(l.src || ""),
          String(l.alt || ""),
          typeof l.title == "string" ? l.title : null
        )),
      !p && i === "li" && a.type === "element")
    ) {
      let m = e6(t);
      (l.checked = m && m.properties ? Boolean(m.properties.checked) : null),
        (l.index = Rn(a, t)),
        (l.ordered = a.tagName === "ol");
    }
    return (
      !p &&
        (i === "ol" || i === "ul") &&
        ((l.ordered = i === "ol"), (l.depth = e.listDepth)),
      (i === "td" || i === "th") &&
        (l.align &&
          (l.style || (l.style = {}),
          (l.style.textAlign = l.align),
          delete l.align),
        p || (l.isHeader = i === "th")),
      !p &&
        i === "tr" &&
        a.type === "element" &&
        (l.isHeader = Boolean(a.tagName === "thead")),
      r.sourcePos && (l["data-sourcepos"] = r6(h)),
      !p && r.rawSourcePos && (l.sourcePosition = t.position),
      !p &&
        r.includeElementIndex &&
        ((l.index = Rn(a, t)), (l.siblingCount = Rn(a))),
      p || (l.node = t),
      c.length > 0 ? ae.createElement(d, l, c) : ae.createElement(d, l)
    );
  }
  function e6(e) {
    let t = -1;
    for (; ++t < e.children.length; ) {
      let n = e.children[t];
      if (n.type === "element" && n.tagName === "input") return n;
    }
    return null;
  }
  function Rn(e, t) {
    let n = -1,
      a = 0;
    for (; ++n < e.children.length && e.children[n] !== t; )
      e.children[n].type === "element" && a++;
    return a;
  }
  function t6(e, t, n, a) {
    let r = zn(a.schema, t),
      o = n;
    o == null ||
      o !== o ||
      (Array.isArray(o) && (o = r.commaSeparated ? ki(o) : Ri(o)),
      r.property === "style" && typeof o == "string" && (o = n6(o)),
      r.space && r.property
        ? (e[kn.call(k1, r.property) ? k1[r.property] : r.property] = o)
        : r.attribute && (e[r.attribute] = o));
  }
  function n6(e) {
    let t = {};
    try {
      (0, Bi.default)(e, n);
    } catch {}
    return t;
    function n(a, r) {
      let o = a.slice(0, 4) === "-ms-" ? `ms-${a.slice(4)}` : a;
      t[o.replace(/-([a-z])/g, a6)] = r;
    }
  }
  function a6(e, t) {
    return t.toUpperCase();
  }
  function r6(e) {
    return [
      e.start.line,
      ":",
      e.start.column,
      "-",
      e.end.line,
      ":",
      e.end.column,
    ]
      .map(String)
      .join("");
  }
  var Ui = {}.hasOwnProperty,
    o6 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    U1 = {
      plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
      renderers: { to: "components", id: "change-renderers-to-components" },
      astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
      allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
      escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
      source: { to: "children", id: "change-source-to-children" },
      allowNode: {
        to: "allowElement",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
      },
      allowedTypes: {
        to: "allowedElements",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
      },
      disallowedTypes: {
        to: "disallowedElements",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
      },
      includeNodeIndex: {
        to: "includeElementIndex",
        id: "change-includenodeindex-to-includeelementindex",
      },
    };
  function O5(e) {
    for (let o in U1)
      if (Ui.call(U1, o) && Ui.call(e, o)) {
        let i = U1[o];
        console.warn(
          `[react-markdown] Warning: please ${
            i.to ? `use \`${i.to}\` instead of` : "remove"
          } \`${o}\` (see <${o6}#${i.id}> for more info)`
        ),
          delete U1[o];
      }
    let t = j0()
        .use(No)
        .use(e.remarkPlugins || [])
        .use(bn, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
        .use(e.rehypePlugins || [])
        .use(Sn, e),
      n = new Tt();
    typeof e.children == "string"
      ? (n.value = e.children)
      : e.children !== void 0 &&
        e.children !== null &&
        console.warn(
          `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
        );
    let a = t.runSync(t.parse(n), n);
    if (a.type !== "root") throw new TypeError("Expected a `root` node");
    let r = ae.createElement(
      ae.Fragment,
      {},
      Nn({ options: e, schema: wi, listDepth: 0 }, a)
    );
    return (
      e.className &&
        (r = ae.createElement("div", { className: e.className }, r)),
      r
    );
  }
  O5.defaultProps = { transformLinkUri: k2 };
  O5.propTypes = {
    children: Z.default.string,
    className: Z.default.string,
    allowElement: Z.default.func,
    allowedElements: Z.default.arrayOf(Z.default.string),
    disallowedElements: Z.default.arrayOf(Z.default.string),
    unwrapDisallowed: Z.default.bool,
    remarkPlugins: Z.default.arrayOf(
      Z.default.oneOfType([
        Z.default.object,
        Z.default.func,
        Z.default.arrayOf(
          Z.default.oneOfType([
            Z.default.bool,
            Z.default.string,
            Z.default.object,
            Z.default.func,
            Z.default.arrayOf(Z.default.any),
          ])
        ),
      ])
    ),
    rehypePlugins: Z.default.arrayOf(
      Z.default.oneOfType([
        Z.default.object,
        Z.default.func,
        Z.default.arrayOf(
          Z.default.oneOfType([
            Z.default.bool,
            Z.default.string,
            Z.default.object,
            Z.default.func,
            Z.default.arrayOf(Z.default.any),
          ])
        ),
      ])
    ),
    sourcePos: Z.default.bool,
    rawSourcePos: Z.default.bool,
    skipHtml: Z.default.bool,
    includeElementIndex: Z.default.bool,
    transformLinkUri: Z.default.oneOfType([Z.default.func, Z.default.bool]),
    linkTarget: Z.default.oneOfType([Z.default.func, Z.default.string]),
    transformImageUri: Z.default.func,
    components: Z.default.object,
  };
  function i6(e) {
    let t = e.regex,
      n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
      a = "decltype\\(auto\\)",
      r = "[a-zA-Z_]\\w*::",
      o = "<[^<>]+>",
      i =
        "(?!struct)(" +
        a +
        "|" +
        t.optional(r) +
        "[a-zA-Z_]\\w*" +
        t.optional(o) +
        ")",
      l = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
      s = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      u = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: "(u8?|U|L)?'(" + s + "|.)", end: "'", illegal: "." },
          e.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/,
          }),
        ],
      },
      c = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      h = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(u, { className: "string" }),
          { className: "string", begin: /<.*?>/ },
          n,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      d = {
        className: "title",
        begin: t.optional(r) + e.IDENT_RE,
        relevance: 0,
      },
      p = t.optional(r) + e.IDENT_RE + "\\s*\\(",
      m = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq",
      ],
      g = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static",
      ],
      b = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view",
      ],
      _ = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf",
      ],
      y = {
        type: g,
        keyword: m,
        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
        built_in: ["_Pragma"],
        _type_hints: b,
      },
      w = {
        className: "function.dispatch",
        relevance: 0,
        keywords: { _hint: _ },
        begin: t.concat(
          /\b/,
          /(?!decltype)/,
          /(?!if)/,
          /(?!for)/,
          /(?!switch)/,
          /(?!while)/,
          e.IDENT_RE,
          t.lookahead(/(<[^<>]+>|)\s*\(/)
        ),
      },
      E = [w, h, l, n, e.C_BLOCK_COMMENT_MODE, c, u],
      x = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: "new throw return else", end: /;/ },
        ],
        keywords: y,
        contains: E.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: y,
            contains: E.concat(["self"]),
            relevance: 0,
          },
        ]),
        relevance: 0,
      },
      R = {
        className: "function",
        begin: "(" + i + "[\\*&\\s]+)+" + p,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: y,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: a, keywords: y, relevance: 0 },
          { begin: p, returnBegin: !0, contains: [d], relevance: 0 },
          { begin: /::/, relevance: 0 },
          { begin: /:/, endsWithParent: !0, contains: [u, c] },
          { relevance: 0, match: /,/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: y,
            relevance: 0,
            contains: [
              n,
              e.C_BLOCK_COMMENT_MODE,
              u,
              c,
              l,
              {
                begin: /\(/,
                end: /\)/,
                keywords: y,
                relevance: 0,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, u, c, l],
              },
            ],
          },
          l,
          n,
          e.C_BLOCK_COMMENT_MODE,
          h,
        ],
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: y,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(x, R, w, E, [
        h,
        {
          begin:
            "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: y,
          contains: ["self", l],
        },
        { begin: e.IDENT_RE + "::", keywords: y },
        {
          match: [
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
      ]),
    };
  }
  function $i(e) {
    let t = {
        type: ["boolean", "byte", "word", "String"],
        built_in: [
          "KeyboardController",
          "MouseController",
          "SoftwareSerial",
          "EthernetServer",
          "EthernetClient",
          "LiquidCrystal",
          "RobotControl",
          "GSMVoiceCall",
          "EthernetUDP",
          "EsploraTFT",
          "HttpClient",
          "RobotMotor",
          "WiFiClient",
          "GSMScanner",
          "FileSystem",
          "Scheduler",
          "GSMServer",
          "YunClient",
          "YunServer",
          "IPAddress",
          "GSMClient",
          "GSMModem",
          "Keyboard",
          "Ethernet",
          "Console",
          "GSMBand",
          "Esplora",
          "Stepper",
          "Process",
          "WiFiUDP",
          "GSM_SMS",
          "Mailbox",
          "USBHost",
          "Firmata",
          "PImage",
          "Client",
          "Server",
          "GSMPIN",
          "FileIO",
          "Bridge",
          "Serial",
          "EEPROM",
          "Stream",
          "Mouse",
          "Audio",
          "Servo",
          "File",
          "Task",
          "GPRS",
          "WiFi",
          "Wire",
          "TFT",
          "GSM",
          "SPI",
          "SD",
        ],
        _hints: [
          "setup",
          "loop",
          "runShellCommandAsynchronously",
          "analogWriteResolution",
          "retrieveCallingNumber",
          "printFirmwareVersion",
          "analogReadResolution",
          "sendDigitalPortPair",
          "noListenOnLocalhost",
          "readJoystickButton",
          "setFirmwareVersion",
          "readJoystickSwitch",
          "scrollDisplayRight",
          "getVoiceCallStatus",
          "scrollDisplayLeft",
          "writeMicroseconds",
          "delayMicroseconds",
          "beginTransmission",
          "getSignalStrength",
          "runAsynchronously",
          "getAsynchronously",
          "listenOnLocalhost",
          "getCurrentCarrier",
          "readAccelerometer",
          "messageAvailable",
          "sendDigitalPorts",
          "lineFollowConfig",
          "countryNameWrite",
          "runShellCommand",
          "readStringUntil",
          "rewindDirectory",
          "readTemperature",
          "setClockDivider",
          "readLightSensor",
          "endTransmission",
          "analogReference",
          "detachInterrupt",
          "countryNameRead",
          "attachInterrupt",
          "encryptionType",
          "readBytesUntil",
          "robotNameWrite",
          "readMicrophone",
          "robotNameRead",
          "cityNameWrite",
          "userNameWrite",
          "readJoystickY",
          "readJoystickX",
          "mouseReleased",
          "openNextFile",
          "scanNetworks",
          "noInterrupts",
          "digitalWrite",
          "beginSpeaker",
          "mousePressed",
          "isActionDone",
          "mouseDragged",
          "displayLogos",
          "noAutoscroll",
          "addParameter",
          "remoteNumber",
          "getModifiers",
          "keyboardRead",
          "userNameRead",
          "waitContinue",
          "processInput",
          "parseCommand",
          "printVersion",
          "readNetworks",
          "writeMessage",
          "blinkVersion",
          "cityNameRead",
          "readMessage",
          "setDataMode",
          "parsePacket",
          "isListening",
          "setBitOrder",
          "beginPacket",
          "isDirectory",
          "motorsWrite",
          "drawCompass",
          "digitalRead",
          "clearScreen",
          "serialEvent",
          "rightToLeft",
          "setTextSize",
          "leftToRight",
          "requestFrom",
          "keyReleased",
          "compassRead",
          "analogWrite",
          "interrupts",
          "WiFiServer",
          "disconnect",
          "playMelody",
          "parseFloat",
          "autoscroll",
          "getPINUsed",
          "setPINUsed",
          "setTimeout",
          "sendAnalog",
          "readSlider",
          "analogRead",
          "beginWrite",
          "createChar",
          "motorsStop",
          "keyPressed",
          "tempoWrite",
          "readButton",
          "subnetMask",
          "debugPrint",
          "macAddress",
          "writeGreen",
          "randomSeed",
          "attachGPRS",
          "readString",
          "sendString",
          "remotePort",
          "releaseAll",
          "mouseMoved",
          "background",
          "getXChange",
          "getYChange",
          "answerCall",
          "getResult",
          "voiceCall",
          "endPacket",
          "constrain",
          "getSocket",
          "writeJSON",
          "getButton",
          "available",
          "connected",
          "findUntil",
          "readBytes",
          "exitValue",
          "readGreen",
          "writeBlue",
          "startLoop",
          "IPAddress",
          "isPressed",
          "sendSysex",
          "pauseMode",
          "gatewayIP",
          "setCursor",
          "getOemKey",
          "tuneWrite",
          "noDisplay",
          "loadImage",
          "switchPIN",
          "onRequest",
          "onReceive",
          "changePIN",
          "playFile",
          "noBuffer",
          "parseInt",
          "overflow",
          "checkPIN",
          "knobRead",
          "beginTFT",
          "bitClear",
          "updateIR",
          "bitWrite",
          "position",
          "writeRGB",
          "highByte",
          "writeRed",
          "setSpeed",
          "readBlue",
          "noStroke",
          "remoteIP",
          "transfer",
          "shutdown",
          "hangCall",
          "beginSMS",
          "endWrite",
          "attached",
          "maintain",
          "noCursor",
          "checkReg",
          "checkPUK",
          "shiftOut",
          "isValid",
          "shiftIn",
          "pulseIn",
          "connect",
          "println",
          "localIP",
          "pinMode",
          "getIMEI",
          "display",
          "noBlink",
          "process",
          "getBand",
          "running",
          "beginSD",
          "drawBMP",
          "lowByte",
          "setBand",
          "release",
          "bitRead",
          "prepare",
          "pointTo",
          "readRed",
          "setMode",
          "noFill",
          "remove",
          "listen",
          "stroke",
          "detach",
          "attach",
          "noTone",
          "exists",
          "buffer",
          "height",
          "bitSet",
          "circle",
          "config",
          "cursor",
          "random",
          "IRread",
          "setDNS",
          "endSMS",
          "getKey",
          "micros",
          "millis",
          "begin",
          "print",
          "write",
          "ready",
          "flush",
          "width",
          "isPIN",
          "blink",
          "clear",
          "press",
          "mkdir",
          "rmdir",
          "close",
          "point",
          "yield",
          "image",
          "BSSID",
          "click",
          "delay",
          "read",
          "text",
          "move",
          "peek",
          "beep",
          "rect",
          "line",
          "open",
          "seek",
          "fill",
          "size",
          "turn",
          "stop",
          "home",
          "find",
          "step",
          "tone",
          "sqrt",
          "RSSI",
          "SSID",
          "end",
          "bit",
          "tan",
          "cos",
          "sin",
          "pow",
          "map",
          "abs",
          "max",
          "min",
          "get",
          "run",
          "put",
        ],
        literal: [
          "DIGITAL_MESSAGE",
          "FIRMATA_STRING",
          "ANALOG_MESSAGE",
          "REPORT_DIGITAL",
          "REPORT_ANALOG",
          "INPUT_PULLUP",
          "SET_PIN_MODE",
          "INTERNAL2V56",
          "SYSTEM_RESET",
          "LED_BUILTIN",
          "INTERNAL1V1",
          "SYSEX_START",
          "INTERNAL",
          "EXTERNAL",
          "DEFAULT",
          "OUTPUT",
          "INPUT",
          "HIGH",
          "LOW",
        ],
      },
      n = i6(e),
      a = n.keywords;
    return (
      (a.type = [...a.type, ...t.type]),
      (a.literal = [...a.literal, ...t.literal]),
      (a.built_in = [...a.built_in, ...t.built_in]),
      (a._hints = t._hints),
      (n.name = "Arduino"),
      (n.aliases = ["ino"]),
      (n.supersetOf = "cpp"),
      n
    );
  }
  function qi(e) {
    let t = e.regex,
      n = {},
      a = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", { begin: /:-/, contains: [n] }],
      };
    Object.assign(n, {
      className: "variable",
      variants: [
        { begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") },
        a,
      ],
    });
    let r = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [e.BACKSLASH_ESCAPE],
      },
      o = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string",
            }),
          ],
        },
      },
      i = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, n, r],
      };
    r.contains.push(i);
    let l = { className: "", begin: /\\"/ },
      s = { className: "string", begin: /'/, end: /'/ },
      u = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [
          { begin: /\d+#[0-9a-f]+/, className: "number" },
          e.NUMBER_MODE,
          n,
        ],
      },
      c = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
      h = e.SHEBANG({ binary: `(${c.join("|")})`, relevance: 10 }),
      d = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0,
      },
      p = [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "for",
        "while",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "function",
      ],
      m = ["true", "false"],
      g = { match: /(\/[a-z._-]+)+/ },
      b = [
        "break",
        "cd",
        "continue",
        "eval",
        "exec",
        "exit",
        "export",
        "getopts",
        "hash",
        "pwd",
        "readonly",
        "return",
        "shift",
        "test",
        "times",
        "trap",
        "umask",
        "unset",
      ],
      _ = [
        "alias",
        "bind",
        "builtin",
        "caller",
        "command",
        "declare",
        "echo",
        "enable",
        "help",
        "let",
        "local",
        "logout",
        "mapfile",
        "printf",
        "read",
        "readarray",
        "source",
        "type",
        "typeset",
        "ulimit",
        "unalias",
      ],
      C = [
        "autoload",
        "bg",
        "bindkey",
        "bye",
        "cap",
        "chdir",
        "clone",
        "comparguments",
        "compcall",
        "compctl",
        "compdescribe",
        "compfiles",
        "compgroups",
        "compquote",
        "comptags",
        "comptry",
        "compvalues",
        "dirs",
        "disable",
        "disown",
        "echotc",
        "echoti",
        "emulate",
        "fc",
        "fg",
        "float",
        "functions",
        "getcap",
        "getln",
        "history",
        "integer",
        "jobs",
        "kill",
        "limit",
        "log",
        "noglob",
        "popd",
        "print",
        "pushd",
        "pushln",
        "rehash",
        "sched",
        "setcap",
        "setopt",
        "stat",
        "suspend",
        "ttyctl",
        "unfunction",
        "unhash",
        "unlimit",
        "unsetopt",
        "vared",
        "wait",
        "whence",
        "where",
        "which",
        "zcompile",
        "zformat",
        "zftp",
        "zle",
        "zmodload",
        "zparseopts",
        "zprof",
        "zpty",
        "zregexparse",
        "zsocket",
        "zstyle",
        "ztcp",
      ],
      M = [
        "chcon",
        "chgrp",
        "chown",
        "chmod",
        "cp",
        "dd",
        "df",
        "dir",
        "dircolors",
        "ln",
        "ls",
        "mkdir",
        "mkfifo",
        "mknod",
        "mktemp",
        "mv",
        "realpath",
        "rm",
        "rmdir",
        "shred",
        "sync",
        "touch",
        "truncate",
        "vdir",
        "b2sum",
        "base32",
        "base64",
        "cat",
        "cksum",
        "comm",
        "csplit",
        "cut",
        "expand",
        "fmt",
        "fold",
        "head",
        "join",
        "md5sum",
        "nl",
        "numfmt",
        "od",
        "paste",
        "ptx",
        "pr",
        "sha1sum",
        "sha224sum",
        "sha256sum",
        "sha384sum",
        "sha512sum",
        "shuf",
        "sort",
        "split",
        "sum",
        "tac",
        "tail",
        "tr",
        "tsort",
        "unexpand",
        "uniq",
        "wc",
        "arch",
        "basename",
        "chroot",
        "date",
        "dirname",
        "du",
        "echo",
        "env",
        "expr",
        "factor",
        "groups",
        "hostid",
        "id",
        "link",
        "logname",
        "nice",
        "nohup",
        "nproc",
        "pathchk",
        "pinky",
        "printenv",
        "printf",
        "pwd",
        "readlink",
        "runcon",
        "seq",
        "sleep",
        "stat",
        "stdbuf",
        "stty",
        "tee",
        "test",
        "timeout",
        "tty",
        "uname",
        "unlink",
        "uptime",
        "users",
        "who",
        "whoami",
        "yes",
      ];
    return {
      name: "Bash",
      aliases: ["sh"],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: p,
        literal: m,
        built_in: [...b, ..._, "set", "shopt", ...C, ...M],
      },
      contains: [h, e.SHEBANG(), d, u, e.HASH_COMMENT_MODE, o, g, i, l, s, n],
    };
  }
  function Gi(e) {
    let t = e.regex,
      n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
      a = "decltype\\(auto\\)",
      r = "[a-zA-Z_]\\w*::",
      o = "<[^<>]+>",
      i = "(" + a + "|" + t.optional(r) + "[a-zA-Z_]\\w*" + t.optional(o) + ")",
      l = {
        className: "type",
        variants: [
          { begin: "\\b[a-z\\d_]*_t\\b" },
          { match: /\batomic_[a-z]{3,6}\b/ },
        ],
      },
      s = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      u = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: "(u8?|U|L)?'(" + s + "|.)", end: "'", illegal: "." },
          e.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/,
          }),
        ],
      },
      c = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      h = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(u, { className: "string" }),
          { className: "string", begin: /<.*?>/ },
          n,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      d = {
        className: "title",
        begin: t.optional(r) + e.IDENT_RE,
        relevance: 0,
      },
      p = t.optional(r) + e.IDENT_RE + "\\s*\\(",
      b = {
        keyword: [
          "asm",
          "auto",
          "break",
          "case",
          "continue",
          "default",
          "do",
          "else",
          "enum",
          "extern",
          "for",
          "fortran",
          "goto",
          "if",
          "inline",
          "register",
          "restrict",
          "return",
          "sizeof",
          "struct",
          "switch",
          "typedef",
          "union",
          "volatile",
          "while",
          "_Alignas",
          "_Alignof",
          "_Atomic",
          "_Generic",
          "_Noreturn",
          "_Static_assert",
          "_Thread_local",
          "alignas",
          "alignof",
          "noreturn",
          "static_assert",
          "thread_local",
          "_Pragma",
        ],
        type: [
          "float",
          "double",
          "signed",
          "unsigned",
          "int",
          "short",
          "long",
          "char",
          "void",
          "_Bool",
          "_Complex",
          "_Imaginary",
          "_Decimal32",
          "_Decimal64",
          "_Decimal128",
          "const",
          "static",
          "complex",
          "bool",
          "imaginary",
        ],
        literal: "true false NULL",
        built_in:
          "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
      },
      _ = [h, l, n, e.C_BLOCK_COMMENT_MODE, c, u],
      C = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: "new throw return else", end: /;/ },
        ],
        keywords: b,
        contains: _.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: b,
            contains: _.concat(["self"]),
            relevance: 0,
          },
        ]),
        relevance: 0,
      },
      M = {
        begin: "(" + i + "[\\*&\\s]+)+" + p,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: b,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: a, keywords: b, relevance: 0 },
          {
            begin: p,
            returnBegin: !0,
            contains: [e.inherit(d, { className: "title.function" })],
            relevance: 0,
          },
          { relevance: 0, match: /,/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: b,
            relevance: 0,
            contains: [
              n,
              e.C_BLOCK_COMMENT_MODE,
              u,
              c,
              l,
              {
                begin: /\(/,
                end: /\)/,
                keywords: b,
                relevance: 0,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, u, c, l],
              },
            ],
          },
          l,
          n,
          e.C_BLOCK_COMMENT_MODE,
          h,
        ],
      };
    return {
      name: "C",
      aliases: ["h"],
      keywords: b,
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(C, M, _, [
        h,
        { begin: e.IDENT_RE + "::", keywords: b },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [{ beginKeywords: "final class struct" }, e.TITLE_MODE],
        },
      ]),
      exports: { preprocessor: h, strings: u, keywords: b },
    };
  }
  function Wi(e) {
    let t = e.regex,
      n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
      a = "decltype\\(auto\\)",
      r = "[a-zA-Z_]\\w*::",
      o = "<[^<>]+>",
      i =
        "(?!struct)(" +
        a +
        "|" +
        t.optional(r) +
        "[a-zA-Z_]\\w*" +
        t.optional(o) +
        ")",
      l = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
      s = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      u = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: "(u8?|U|L)?'(" + s + "|.)", end: "'", illegal: "." },
          e.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/,
          }),
        ],
      },
      c = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      h = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(u, { className: "string" }),
          { className: "string", begin: /<.*?>/ },
          n,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      d = {
        className: "title",
        begin: t.optional(r) + e.IDENT_RE,
        relevance: 0,
      },
      p = t.optional(r) + e.IDENT_RE + "\\s*\\(",
      m = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq",
      ],
      g = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static",
      ],
      b = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view",
      ],
      _ = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf",
      ],
      y = {
        type: g,
        keyword: m,
        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
        built_in: ["_Pragma"],
        _type_hints: b,
      },
      w = {
        className: "function.dispatch",
        relevance: 0,
        keywords: { _hint: _ },
        begin: t.concat(
          /\b/,
          /(?!decltype)/,
          /(?!if)/,
          /(?!for)/,
          /(?!switch)/,
          /(?!while)/,
          e.IDENT_RE,
          t.lookahead(/(<[^<>]+>|)\s*\(/)
        ),
      },
      E = [w, h, l, n, e.C_BLOCK_COMMENT_MODE, c, u],
      x = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: "new throw return else", end: /;/ },
        ],
        keywords: y,
        contains: E.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: y,
            contains: E.concat(["self"]),
            relevance: 0,
          },
        ]),
        relevance: 0,
      },
      R = {
        className: "function",
        begin: "(" + i + "[\\*&\\s]+)+" + p,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: y,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: a, keywords: y, relevance: 0 },
          { begin: p, returnBegin: !0, contains: [d], relevance: 0 },
          { begin: /::/, relevance: 0 },
          { begin: /:/, endsWithParent: !0, contains: [u, c] },
          { relevance: 0, match: /,/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: y,
            relevance: 0,
            contains: [
              n,
              e.C_BLOCK_COMMENT_MODE,
              u,
              c,
              l,
              {
                begin: /\(/,
                end: /\)/,
                keywords: y,
                relevance: 0,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, u, c, l],
              },
            ],
          },
          l,
          n,
          e.C_BLOCK_COMMENT_MODE,
          h,
        ],
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: y,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(x, R, w, E, [
        h,
        {
          begin:
            "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: y,
          contains: ["self", l],
        },
        { begin: e.IDENT_RE + "::", keywords: y },
        {
          match: [
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
      ]),
    };
  }
  function Ki(e) {
    let t = [
        "bool",
        "byte",
        "char",
        "decimal",
        "delegate",
        "double",
        "dynamic",
        "enum",
        "float",
        "int",
        "long",
        "nint",
        "nuint",
        "object",
        "sbyte",
        "short",
        "string",
        "ulong",
        "uint",
        "ushort",
      ],
      n = [
        "public",
        "private",
        "protected",
        "static",
        "internal",
        "protected",
        "abstract",
        "async",
        "extern",
        "override",
        "unsafe",
        "virtual",
        "new",
        "sealed",
        "partial",
      ],
      a = ["default", "false", "null", "true"],
      r = [
        "abstract",
        "as",
        "base",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "do",
        "else",
        "event",
        "explicit",
        "extern",
        "finally",
        "fixed",
        "for",
        "foreach",
        "goto",
        "if",
        "implicit",
        "in",
        "interface",
        "internal",
        "is",
        "lock",
        "namespace",
        "new",
        "operator",
        "out",
        "override",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "record",
        "ref",
        "return",
        "scoped",
        "sealed",
        "sizeof",
        "stackalloc",
        "static",
        "struct",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "unchecked",
        "unsafe",
        "using",
        "virtual",
        "void",
        "volatile",
        "while",
      ],
      o = [
        "add",
        "alias",
        "and",
        "ascending",
        "async",
        "await",
        "by",
        "descending",
        "equals",
        "from",
        "get",
        "global",
        "group",
        "init",
        "into",
        "join",
        "let",
        "nameof",
        "not",
        "notnull",
        "on",
        "or",
        "orderby",
        "partial",
        "remove",
        "select",
        "set",
        "unmanaged",
        "value|0",
        "var",
        "when",
        "where",
        "with",
        "yield",
      ],
      i = { keyword: r.concat(o), built_in: t, literal: a },
      l = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
      s = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      u = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{ begin: '""' }],
      },
      c = e.inherit(u, { illegal: /\n/ }),
      h = { className: "subst", begin: /\{/, end: /\}/, keywords: i },
      d = e.inherit(h, { illegal: /\n/ }),
      p = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, d],
      },
      m = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, h],
      },
      g = e.inherit(m, {
        illegal: /\n/,
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, d],
      });
    (h.contains = [
      m,
      p,
      u,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      s,
      e.C_BLOCK_COMMENT_MODE,
    ]),
      (d.contains = [
        g,
        p,
        c,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        s,
        e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
      ]);
    let b = { variants: [m, p, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
      _ = { begin: "<", end: ">", contains: [{ beginKeywords: "in out" }, l] },
      C =
        e.IDENT_RE +
        "(<" +
        e.IDENT_RE +
        "(\\s*,\\s*" +
        e.IDENT_RE +
        ")*>)?(\\[\\])?",
      M = { begin: "@" + e.IDENT_RE, relevance: 0 };
    return {
      name: "C#",
      aliases: ["cs", "c#"],
      keywords: i,
      illegal: /::/,
      contains: [
        e.COMMENT("///", "$", {
          returnBegin: !0,
          contains: [
            {
              className: "doctag",
              variants: [
                { begin: "///", relevance: 0 },
                { begin: "<!--|-->" },
                { begin: "</?", end: ">" },
              ],
            },
          ],
        }),
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: {
            keyword:
              "if else elif endif define undef warning error line region endregion pragma checksum",
          },
        },
        b,
        s,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            l,
            _,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [l, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [l, _, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        {
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [{ className: "string", begin: /"/, end: /"/ }],
        },
        { beginKeywords: "new return throw await else", relevance: 0 },
        {
          className: "function",
          begin: "(" + C + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: i,
          contains: [
            { beginKeywords: n.join(" "), relevance: 0 },
            {
              begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [e.TITLE_MODE, _],
              relevance: 0,
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: i,
              relevance: 0,
              contains: [b, s, e.C_BLOCK_COMMENT_MODE],
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        M,
      ],
    };
  }
  var l6 = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    c6 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    s6 = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    u6 = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    d6 = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    p6 = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
    ].reverse();
  function Yi(e) {
    let t = e.regex,
      n = l6(e),
      a = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
      r = "and or not only",
      o = /@-?\w[\w]*(-\w+)*/,
      i = "[a-zA-Z-][a-zA-Z0-9_-]*",
      l = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: { keyframePosition: "selector-tag" },
      contains: [
        n.BLOCK_COMMENT,
        a,
        n.CSS_NUMBER_MODE,
        { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
        { className: "selector-class", begin: "\\." + i, relevance: 0 },
        n.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + u6.join("|") + ")" },
            { begin: ":(:)?(" + d6.join("|") + ")" },
          ],
        },
        n.CSS_VARIABLE,
        { className: "attribute", begin: "\\b(" + p6.join("|") + ")\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            n.BLOCK_COMMENT,
            n.HEXCOLOR,
            n.IMPORTANT,
            n.CSS_NUMBER_MODE,
            ...l,
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              keywords: { built_in: "url data-uri" },
              contains: [
                ...l,
                {
                  className: "string",
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0,
                },
              ],
            },
            n.FUNCTION_DISPATCH,
          ],
        },
        {
          begin: t.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          contains: [
            { className: "keyword", begin: o },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: r,
                attribute: s6.join(" "),
              },
              contains: [
                { begin: /[a-z-]+(?=:)/, className: "attribute" },
                ...l,
                n.CSS_NUMBER_MODE,
              ],
            },
          ],
        },
        { className: "selector-tag", begin: "\\b(" + c6.join("|") + ")\\b" },
      ],
    };
  }
  function Qi(e) {
    let t = e.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: t.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          ),
        },
        {
          className: "comment",
          variants: [
            {
              begin: t.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/,
            },
            { match: /^\*{15}$/ },
          ],
        },
        { className: "addition", begin: /^\+/, end: /$/ },
        { className: "deletion", begin: /^-/, end: /$/ },
        { className: "addition", begin: /^!/, end: /$/ },
      ],
    };
  }
  function Zi(e) {
    let o = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var",
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune",
      ],
      literal: ["true", "false", "iota", "nil"],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete",
      ],
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: o,
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            { begin: "`", end: "`" },
          ],
        },
        {
          className: "number",
          variants: [
            { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
            e.C_NUMBER_MODE,
          ],
        },
        { begin: /:=/ },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            e.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: o,
              illegal: /["']/,
            },
          ],
        },
      ],
    };
  }
  function ji(e) {
    let t = e.regex,
      n = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on",
        ],
        literal: ["true", "false", "null"],
      },
      contains: [
        e.HASH_COMMENT_MODE,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE,
        { scope: "punctuation", match: /[.]{3}/, relevance: 0 },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0,
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0,
        },
        { scope: "meta", match: /@\w+/, excludeEnd: !0 },
        {
          scope: "symbol",
          begin: t.concat(n, t.lookahead(/\s*:/)),
          relevance: 0,
        },
      ],
      illegal: [/[;<']/, /BEGIN/],
    };
  }
  function Xi(e) {
    let t = e.regex,
      n = {
        className: "number",
        relevance: 0,
        variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }],
      },
      a = e.COMMENT();
    a.variants = [
      { begin: /;/, end: /$/ },
      { begin: /#/, end: /$/ },
    ];
    let r = {
        className: "variable",
        variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }],
      },
      o = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ },
      i = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          { begin: "'''", end: "'''", relevance: 10 },
          { begin: '"""', end: '"""', relevance: 10 },
          { begin: '"', end: '"' },
          { begin: "'", end: "'" },
        ],
      },
      l = {
        begin: /\[/,
        end: /\]/,
        contains: [a, o, r, i, n, "self"],
        relevance: 0,
      },
      s = /[A-Za-z0-9_-]+/,
      u = /"(\\"|[^"])*"/,
      c = /'[^']*'/,
      h = t.either(s, u, c),
      d = t.concat(h, "(\\s*\\.\\s*", h, ")*", t.lookahead(/\s*=\s*[^#\s]/));
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        a,
        { className: "section", begin: /\[+/, end: /\]+/ },
        {
          begin: d,
          className: "attr",
          starts: { end: /$/, contains: [a, l, o, r, i, n] },
        },
      ],
    };
  }
  var i5 = "[0-9](_*[0-9])*",
    $1 = `\\.(${i5})`,
    q1 = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    Ji = {
      className: "number",
      variants: [
        {
          begin: `(\\b(${i5})((${$1})|\\.)?|(${$1}))[eE][+-]?(${i5})[fFdD]?\\b`,
        },
        { begin: `\\b(${i5})((${$1})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${$1})[fFdD]?\\b` },
        { begin: `\\b(${i5})[fFdD]\\b` },
        {
          begin: `\\b0[xX]((${q1})\\.?|(${q1})?\\.(${q1}))[pP][+-]?(${i5})[fFdD]?\\b`,
        },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${q1})[lL]?\\b` },
        { begin: "\\b0(_*[0-7])*[lL]?\\b" },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
      ],
      relevance: 0,
    };
  function e7(e, t, n) {
    return n === -1 ? "" : e.replace(t, (a) => e7(e, t, n - 1));
  }
  function t7(e) {
    let t = e.regex,
      n = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",
      a = n + e7("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
      s = {
        keyword: [
          "synchronized",
          "abstract",
          "private",
          "var",
          "static",
          "if",
          "const ",
          "for",
          "while",
          "strictfp",
          "finally",
          "protected",
          "import",
          "native",
          "final",
          "void",
          "enum",
          "else",
          "break",
          "transient",
          "catch",
          "instanceof",
          "volatile",
          "case",
          "assert",
          "package",
          "default",
          "public",
          "try",
          "switch",
          "continue",
          "throws",
          "protected",
          "public",
          "private",
          "module",
          "requires",
          "exports",
          "do",
          "sealed",
          "yield",
          "permits",
        ],
        literal: ["false", "true", "null"],
        type: [
          "char",
          "boolean",
          "long",
          "float",
          "int",
          "byte",
          "short",
          "double",
        ],
        built_in: ["super", "this"],
      },
      u = {
        className: "meta",
        begin: "@" + n,
        contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }],
      },
      c = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: s,
        relevance: 0,
        contains: [e.C_BLOCK_COMMENT_MODE],
        endsParent: !0,
      };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: s,
      illegal: /<\/|#/,
      contains: [
        e.COMMENT("/\\*\\*", "\\*/", {
          relevance: 0,
          contains: [
            { begin: /\w+@/, relevance: 0 },
            { className: "doctag", begin: "@[A-Za-z]+" },
          ],
        }),
        { begin: /import java\.[a-z]+\./, keywords: "import", relevance: 2 },
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [e.BACKSLASH_ESCAPE],
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            n,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
        { match: /non-sealed/, scope: "keyword" },
        {
          begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
          className: { 1: "type", 3: "variable", 5: "operator" },
        },
        {
          begin: [/record/, /\s+/, n],
          className: { 1: "keyword", 3: "title.class" },
          contains: [c, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        { beginKeywords: "new throw return else", relevance: 0 },
        {
          begin: ["(?:" + a + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
          className: { 2: "title.function" },
          keywords: s,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: s,
              relevance: 0,
              contains: [
                u,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                Ji,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        Ji,
        u,
      ],
    };
  }
  var n7 = "[A-Za-z$_][0-9A-Za-z$_]*",
    h6 = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends",
    ],
    m6 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    a7 = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly",
    ],
    r7 = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ],
    o7 = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape",
    ],
    f6 = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global",
    ],
    g6 = [].concat(o7, a7, r7);
  function i7(e) {
    let t = e.regex,
      n = (I, { after: L }) => {
        let F = "</" + I[0].slice(1);
        return I.input.indexOf(F, L) !== -1;
      },
      a = n7,
      r = { begin: "<>", end: "</>" },
      o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
      i = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (I, L) => {
          let F = I[0].length + I.index,
            q = I.input[F];
          if (q === "<" || q === ",") {
            L.ignoreMatch();
            return;
          }
          q === ">" && (n(I, { after: F }) || L.ignoreMatch());
          let f,
            v = I.input.substring(F);
          if ((f = v.match(/^\s*=/))) {
            L.ignoreMatch();
            return;
          }
          if ((f = v.match(/^\s+extends\s+/)) && f.index === 0) {
            L.ignoreMatch();
            return;
          }
        },
      },
      l = {
        $pattern: n7,
        keyword: h6,
        literal: m6,
        built_in: g6,
        "variable.language": f6,
      },
      s = "[0-9](_?[0-9])*",
      u = `\\.(${s})`,
      c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      h = {
        className: "number",
        variants: [
          { begin: `(\\b(${c})((${u})|\\.)?|(${u}))[eE][+-]?(${s})\\b` },
          { begin: `\\b(${c})\\b((${u})\\b|\\.)?|(${u})\\b` },
          { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" },
        ],
        relevance: 0,
      },
      d = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: l,
        contains: [],
      },
      p = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, d],
          subLanguage: "xml",
        },
      },
      m = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, d],
          subLanguage: "css",
        },
      },
      g = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, d],
      },
      _ = {
        className: "comment",
        variants: [
          e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0,
                  },
                  {
                    className: "variable",
                    begin: a + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
        ],
      },
      C = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        p,
        m,
        g,
        { match: /\$\d+/ },
        h,
      ];
    d.contains = C.concat({
      begin: /\{/,
      end: /\}/,
      keywords: l,
      contains: ["self"].concat(C),
    });
    let M = [].concat(_, d.contains),
      y = M.concat([
        { begin: /\(/, end: /\)/, keywords: l, contains: ["self"].concat(M) },
      ]),
      w = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: l,
        contains: y,
      },
      E = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              a,
              /\s+/,
              /extends/,
              /\s+/,
              t.concat(a, "(", t.concat(/\./, a), ")*"),
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited",
            },
          },
          {
            match: [/class/, /\s+/, a],
            scope: { 1: "keyword", 3: "title.class" },
          },
        ],
      },
      x = {
        relevance: 0,
        match: t.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: "title.class",
        keywords: { _: [...a7, ...r7] },
      },
      R = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/,
      },
      T = {
        variants: [
          { match: [/function/, /\s+/, a, /(?=\s*\()/] },
          { match: [/function/, /\s*(?=\()/] },
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [w],
        illegal: /%/,
      },
      W = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant",
      };
    function O(I) {
      return t.concat("(?!", I.join("|"), ")");
    }
    let U = {
        match: t.concat(
          /\b/,
          O([...o7, "super", "import"]),
          a,
          t.lookahead(/\(/)
        ),
        className: "title.function",
        relevance: 0,
      },
      S = {
        begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
        end: a,
        excludeBegin: !0,
        keywords: "prototype",
        className: "property",
        relevance: 0,
      },
      V = {
        match: [/get|set/, /\s+/, a, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, w],
      },
      Q =
        "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
        e.UNDERSCORE_IDENT_RE +
        ")\\s*=>",
      z = {
        match: [
          /const|var|let/,
          /\s+/,
          a,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          t.lookahead(Q),
        ],
        keywords: "async",
        className: { 1: "keyword", 3: "title.function" },
        contains: [w],
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: l,
      exports: { PARAMS_CONTAINS: y, CLASS_REFERENCE: x },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
        R,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        p,
        m,
        g,
        _,
        { match: /\$\d+/ },
        h,
        x,
        { className: "attr", begin: a + t.lookahead(":"), relevance: 0 },
        z,
        {
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            _,
            e.REGEXP_MODE,
            {
              className: "function",
              begin: Q,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: l,
                      contains: y,
                    },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: r.begin, end: r.end },
                { match: o },
                { begin: i.begin, "on:begin": i.isTrulyOpeningTag, end: i.end },
              ],
              subLanguage: "xml",
              contains: [
                { begin: i.begin, end: i.end, skip: !0, contains: ["self"] },
              ],
            },
          ],
        },
        T,
        { beginKeywords: "while if switch catch for" },
        {
          begin:
            "\\b(?!function)" +
            e.UNDERSCORE_IDENT_RE +
            "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [
            w,
            e.inherit(e.TITLE_MODE, { begin: a, className: "title.function" }),
          ],
        },
        { match: /\.\.\./, relevance: 0 },
        S,
        { match: "\\$" + a, relevance: 0 },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [w],
        },
        U,
        W,
        E,
        V,
        { match: /\$[(.]/ },
      ],
    };
  }
  function l7(e) {
    let t = {
        className: "attr",
        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
        relevance: 1.01,
      },
      n = { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
      a = ["true", "false", "null"],
      r = { scope: "literal", beginKeywords: a.join(" ") };
    return {
      name: "JSON",
      keywords: { literal: a },
      contains: [
        t,
        n,
        e.QUOTE_STRING_MODE,
        r,
        e.C_NUMBER_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
      ],
      illegal: "\\S",
    };
  }
  var l5 = "[0-9](_*[0-9])*",
    G1 = `\\.(${l5})`,
    W1 = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    v6 = {
      className: "number",
      variants: [
        {
          begin: `(\\b(${l5})((${G1})|\\.)?|(${G1}))[eE][+-]?(${l5})[fFdD]?\\b`,
        },
        { begin: `\\b(${l5})((${G1})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${G1})[fFdD]?\\b` },
        { begin: `\\b(${l5})[fFdD]\\b` },
        {
          begin: `\\b0[xX]((${W1})\\.?|(${W1})?\\.(${W1}))[pP][+-]?(${l5})[fFdD]?\\b`,
        },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${W1})[lL]?\\b` },
        { begin: "\\b0(_*[0-7])*[lL]?\\b" },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
      ],
      relevance: 0,
    };
  function c7(e) {
    let t = {
        keyword:
          "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in:
          "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null",
      },
      n = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: { contains: [{ className: "symbol", begin: /@\w+/ }] },
      },
      a = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
      r = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [e.C_NUMBER_MODE],
      },
      o = { className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE },
      i = {
        className: "string",
        variants: [
          { begin: '"""', end: '"""(?=[^"])', contains: [o, r] },
          {
            begin: "'",
            end: "'",
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE],
          },
          {
            begin: '"',
            end: '"',
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE, o, r],
          },
        ],
      };
    r.contains.push(i);
    let l = {
        className: "meta",
        begin:
          "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
          e.UNDERSCORE_IDENT_RE +
          ")?",
      },
      s = {
        className: "meta",
        begin: "@" + e.UNDERSCORE_IDENT_RE,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            contains: [e.inherit(i, { className: "string" }), "self"],
          },
        ],
      },
      u = v6,
      c = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }),
      h = {
        variants: [
          { className: "type", begin: e.UNDERSCORE_IDENT_RE },
          { begin: /\(/, end: /\)/, contains: [] },
        ],
      },
      d = h;
    return (
      (d.variants[1].contains = [h]),
      (h.variants[1].contains = [d]),
      {
        name: "Kotlin",
        aliases: ["kt", "kts"],
        keywords: t,
        contains: [
          e.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
          }),
          e.C_LINE_COMMENT_MODE,
          c,
          n,
          a,
          l,
          s,
          {
            className: "function",
            beginKeywords: "fun",
            end: "[(]|$",
            returnBegin: !0,
            excludeEnd: !0,
            keywords: t,
            relevance: 5,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE],
              },
              {
                className: "type",
                begin: /</,
                end: />/,
                keywords: "reified",
                relevance: 0,
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                endsParent: !0,
                keywords: t,
                relevance: 0,
                contains: [
                  {
                    begin: /:/,
                    end: /[=,\/]/,
                    endsWithParent: !0,
                    contains: [h, e.C_LINE_COMMENT_MODE, c],
                    relevance: 0,
                  },
                  e.C_LINE_COMMENT_MODE,
                  c,
                  l,
                  s,
                  i,
                  e.C_NUMBER_MODE,
                ],
              },
              c,
            ],
          },
          {
            begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
            beginScope: { 3: "title.class" },
            keywords: "class interface trait",
            end: /[:\{(]|$/,
            excludeEnd: !0,
            illegal: "extends implements",
            contains: [
              {
                beginKeywords: "public protected internal private constructor",
              },
              e.UNDERSCORE_TITLE_MODE,
              {
                className: "type",
                begin: /</,
                end: />/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
              },
              {
                className: "type",
                begin: /[,:]\s*/,
                end: /[<\(,){\s]|$/,
                excludeBegin: !0,
                returnEnd: !0,
              },
              l,
              s,
            ],
          },
          i,
          {
            className: "meta",
            begin: "^#!/usr/bin/env",
            end: "$",
            illegal: `
`,
          },
          u,
        ],
      }
    );
  }
  var b6 = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    E6 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    _6 = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    s7 = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    u7 = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    A6 = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
    ].reverse(),
    y6 = s7.concat(u7);
  function d7(e) {
    let t = b6(e),
      n = y6,
      a = "and or not only",
      r = "[\\w-]+",
      o = "(" + r + "|@\\{" + r + "\\})",
      i = [],
      l = [],
      s = function (M) {
        return { className: "string", begin: "~?" + M + ".*?" + M };
      },
      u = function (M, y, w) {
        return { className: M, begin: y, relevance: w };
      },
      c = { $pattern: /[a-z-]+/, keyword: a, attribute: _6.join(" ") },
      h = { begin: "\\(", end: "\\)", contains: l, keywords: c, relevance: 0 };
    l.push(
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      s("'"),
      s('"'),
      t.CSS_NUMBER_MODE,
      {
        begin: "(url|data-uri)\\(",
        starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 },
      },
      t.HEXCOLOR,
      h,
      u("variable", "@@?" + r, 10),
      u("variable", "@\\{" + r + "\\}"),
      u("built_in", "~?`[^`]*?`"),
      {
        className: "attribute",
        begin: r + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0,
      },
      t.IMPORTANT,
      { beginKeywords: "and not" },
      t.FUNCTION_DISPATCH
    );
    let d = l.concat({ begin: /\{/, end: /\}/, contains: i }),
      p = {
        beginKeywords: "when",
        endsWithParent: !0,
        contains: [{ beginKeywords: "and not" }].concat(l),
      },
      m = {
        begin: o + "\\s*:",
        returnBegin: !0,
        end: /[;}]/,
        relevance: 0,
        contains: [
          { begin: /-(webkit|moz|ms|o)-/ },
          t.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + A6.join("|") + ")\\b",
            end: /(?=:)/,
            starts: {
              endsWithParent: !0,
              illegal: "[<=$]",
              relevance: 0,
              contains: l,
            },
          },
        ],
      },
      g = {
        className: "keyword",
        begin:
          "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: c,
          returnEnd: !0,
          contains: l,
          relevance: 0,
        },
      },
      b = {
        className: "variable",
        variants: [
          { begin: "@" + r + "\\s*:", relevance: 15 },
          { begin: "@" + r },
        ],
        starts: { end: "[;}]", returnEnd: !0, contains: d },
      },
      _ = {
        variants: [
          { begin: "[\\.#:&\\[>]", end: "[;{}]" },
          { begin: o, end: /\{/ },
        ],
        returnBegin: !0,
        returnEnd: !0,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          p,
          u("keyword", "all\\b"),
          u("variable", "@\\{" + r + "\\}"),
          { begin: "\\b(" + E6.join("|") + ")\\b", className: "selector-tag" },
          t.CSS_NUMBER_MODE,
          u("selector-tag", o, 0),
          u("selector-id", "#" + o),
          u("selector-class", "\\." + o, 0),
          u("selector-tag", "&", 0),
          t.ATTRIBUTE_SELECTOR_MODE,
          { className: "selector-pseudo", begin: ":(" + s7.join("|") + ")" },
          {
            className: "selector-pseudo",
            begin: ":(:)?(" + u7.join("|") + ")",
          },
          { begin: /\(/, end: /\)/, relevance: 0, contains: d },
          { begin: "!important" },
          t.FUNCTION_DISPATCH,
        ],
      },
      C = {
        begin: r + `:(:)?(${n.join("|")})`,
        returnBegin: !0,
        contains: [_],
      };
    return (
      i.push(
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        g,
        b,
        C,
        m,
        _,
        p,
        t.FUNCTION_DISPATCH
      ),
      { name: "Less", case_insensitive: !0, illegal: `[=>'/<($"]`, contains: i }
    );
  }
  function p7(e) {
    let t = "\\[=*\\[",
      n = "\\]=*\\]",
      a = { begin: t, end: n, contains: ["self"] },
      r = [
        e.COMMENT("--(?!" + t + ")", "$"),
        e.COMMENT("--" + t, n, { contains: [a], relevance: 10 }),
      ];
    return {
      name: "Lua",
      keywords: {
        $pattern: e.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword:
          "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
      },
      contains: r.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            e.inherit(e.TITLE_MODE, {
              begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
            }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: r,
            },
          ].concat(r),
        },
        e.C_NUMBER_MODE,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        { className: "string", begin: t, end: n, contains: [a], relevance: 5 },
      ]),
    };
  }
  function h7(e) {
    let t = {
        className: "variable",
        variants: [
          {
            begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: /\$[@%<?\^\+\*]/ },
        ],
      },
      n = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, t],
      },
      a = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in:
            "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
        },
        contains: [t],
      },
      r = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" },
      o = {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" },
      },
      i = { className: "section", begin: /^[^\s]+:/, end: /$/, contains: [t] };
    return {
      name: "Makefile",
      aliases: ["mk", "mak", "make"],
      keywords: {
        $pattern: /[\w-]+/,
        keyword:
          "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
      },
      contains: [e.HASH_COMMENT_MODE, t, n, a, r, o, i],
    };
  }
  function m7(e) {
    let t = e.regex,
      n = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0,
      },
      a = { begin: "^[-\\*]{3,}", end: "$" },
      r = {
        className: "code",
        variants: [
          { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
          { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
          { begin: "```", end: "```+[ ]*$" },
          { begin: "~~~", end: "~~~+[ ]*$" },
          { begin: "`.+?`" },
          {
            begin: "(?=^( {4}|\\t))",
            contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
            relevance: 0,
          },
        ],
      },
      o = {
        className: "bullet",
        begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: !0,
      },
      i = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [
          {
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0,
          },
          { className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0 },
        ],
      },
      l = /[A-Za-z][A-Za-z0-9+.-]*/,
      s = {
        variants: [
          { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
          {
            begin:
              /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
            relevance: 2,
          },
          { begin: t.concat(/\[.+?\]\(/, l, /:\/\/.*?\)/), relevance: 2 },
          { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
          { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
        ],
        returnBegin: !0,
        contains: [
          { match: /\[(?=\])/ },
          {
            className: "string",
            relevance: 0,
            begin: "\\[",
            end: "\\]",
            excludeBegin: !0,
            returnEnd: !0,
          },
          {
            className: "link",
            relevance: 0,
            begin: "\\]\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
          },
          {
            className: "symbol",
            relevance: 0,
            begin: "\\]\\[",
            end: "\\]",
            excludeBegin: !0,
            excludeEnd: !0,
          },
        ],
      },
      u = {
        className: "strong",
        contains: [],
        variants: [
          { begin: /_{2}(?!\s)/, end: /_{2}/ },
          { begin: /\*{2}(?!\s)/, end: /\*{2}/ },
        ],
      },
      c = {
        className: "emphasis",
        contains: [],
        variants: [
          { begin: /\*(?![*\s])/, end: /\*/ },
          { begin: /_(?![_\s])/, end: /_/, relevance: 0 },
        ],
      },
      h = e.inherit(u, { contains: [] }),
      d = e.inherit(c, { contains: [] });
    u.contains.push(d), c.contains.push(h);
    let p = [n, s];
    return (
      [u, c, h, d].forEach((b) => {
        b.contains = b.contains.concat(p);
      }),
      (p = p.concat(u, c)),
      {
        name: "Markdown",
        aliases: ["md", "mkdown", "mkd"],
        contains: [
          {
            className: "section",
            variants: [
              { begin: "^#{1,6}", end: "$", contains: p },
              {
                begin: "(?=^.+?\\n[=-]{2,}$)",
                contains: [
                  { begin: "^[=-]*$" },
                  { begin: "^", end: "\\n", contains: p },
                ],
              },
            ],
          },
          n,
          o,
          u,
          c,
          { className: "quote", begin: "^>\\s+", contains: p, end: "$" },
          r,
          a,
          s,
          i,
        ],
      }
    );
  }
  function f7(e) {
    let t = {
        className: "built_in",
        begin:
          "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
      },
      n = /[a-zA-Z@][a-zA-Z0-9_]*/,
      l = {
        "variable.language": ["this", "super"],
        $pattern: n,
        keyword: [
          "while",
          "export",
          "sizeof",
          "typedef",
          "const",
          "struct",
          "for",
          "union",
          "volatile",
          "static",
          "mutable",
          "if",
          "do",
          "return",
          "goto",
          "enum",
          "else",
          "break",
          "extern",
          "asm",
          "case",
          "default",
          "register",
          "explicit",
          "typename",
          "switch",
          "continue",
          "inline",
          "readonly",
          "assign",
          "readwrite",
          "self",
          "@synchronized",
          "id",
          "typeof",
          "nonatomic",
          "IBOutlet",
          "IBAction",
          "strong",
          "weak",
          "copy",
          "in",
          "out",
          "inout",
          "bycopy",
          "byref",
          "oneway",
          "__strong",
          "__weak",
          "__block",
          "__autoreleasing",
          "@private",
          "@protected",
          "@public",
          "@try",
          "@property",
          "@end",
          "@throw",
          "@catch",
          "@finally",
          "@autoreleasepool",
          "@synthesize",
          "@dynamic",
          "@selector",
          "@optional",
          "@required",
          "@encode",
          "@package",
          "@import",
          "@defs",
          "@compatibility_alias",
          "__bridge",
          "__bridge_transfer",
          "__bridge_retained",
          "__bridge_retain",
          "__covariant",
          "__contravariant",
          "__kindof",
          "_Nonnull",
          "_Nullable",
          "_Null_unspecified",
          "__FUNCTION__",
          "__PRETTY_FUNCTION__",
          "__attribute__",
          "getter",
          "setter",
          "retain",
          "unsafe_unretained",
          "nonnull",
          "nullable",
          "null_unspecified",
          "null_resettable",
          "class",
          "instancetype",
          "NS_DESIGNATED_INITIALIZER",
          "NS_UNAVAILABLE",
          "NS_REQUIRES_SUPER",
          "NS_RETURNS_INNER_POINTER",
          "NS_INLINE",
          "NS_AVAILABLE",
          "NS_DEPRECATED",
          "NS_ENUM",
          "NS_OPTIONS",
          "NS_SWIFT_UNAVAILABLE",
          "NS_ASSUME_NONNULL_BEGIN",
          "NS_ASSUME_NONNULL_END",
          "NS_REFINED_FOR_SWIFT",
          "NS_SWIFT_NAME",
          "NS_SWIFT_NOTHROW",
          "NS_DURING",
          "NS_HANDLER",
          "NS_ENDHANDLER",
          "NS_VALUERETURN",
          "NS_VOIDRETURN",
        ],
        literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
        built_in: [
          "dispatch_once_t",
          "dispatch_queue_t",
          "dispatch_sync",
          "dispatch_async",
          "dispatch_once",
        ],
        type: [
          "int",
          "float",
          "char",
          "unsigned",
          "signed",
          "short",
          "long",
          "double",
          "wchar_t",
          "unichar",
          "void",
          "bool",
          "BOOL",
          "id|0",
          "_Bool",
        ],
      },
      s = {
        $pattern: n,
        keyword: ["@interface", "@class", "@protocol", "@implementation"],
      };
    return {
      name: "Objective-C",
      aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
      keywords: l,
      illegal: "</",
      contains: [
        t,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE],
            },
          ],
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: {
            keyword:
              "if else elif endif define undef warning error line pragma ifdef ifndef include",
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
            { className: "string", begin: /<.*?>/, end: /$/, illegal: "\\n" },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        {
          className: "class",
          begin: "(" + s.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: s,
          contains: [e.UNDERSCORE_TITLE_MODE],
        },
        { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
      ],
    };
  }
  function g7(e) {
    let t = e.regex,
      n = [
        "abs",
        "accept",
        "alarm",
        "and",
        "atan2",
        "bind",
        "binmode",
        "bless",
        "break",
        "caller",
        "chdir",
        "chmod",
        "chomp",
        "chop",
        "chown",
        "chr",
        "chroot",
        "close",
        "closedir",
        "connect",
        "continue",
        "cos",
        "crypt",
        "dbmclose",
        "dbmopen",
        "defined",
        "delete",
        "die",
        "do",
        "dump",
        "each",
        "else",
        "elsif",
        "endgrent",
        "endhostent",
        "endnetent",
        "endprotoent",
        "endpwent",
        "endservent",
        "eof",
        "eval",
        "exec",
        "exists",
        "exit",
        "exp",
        "fcntl",
        "fileno",
        "flock",
        "for",
        "foreach",
        "fork",
        "format",
        "formline",
        "getc",
        "getgrent",
        "getgrgid",
        "getgrnam",
        "gethostbyaddr",
        "gethostbyname",
        "gethostent",
        "getlogin",
        "getnetbyaddr",
        "getnetbyname",
        "getnetent",
        "getpeername",
        "getpgrp",
        "getpriority",
        "getprotobyname",
        "getprotobynumber",
        "getprotoent",
        "getpwent",
        "getpwnam",
        "getpwuid",
        "getservbyname",
        "getservbyport",
        "getservent",
        "getsockname",
        "getsockopt",
        "given",
        "glob",
        "gmtime",
        "goto",
        "grep",
        "gt",
        "hex",
        "if",
        "index",
        "int",
        "ioctl",
        "join",
        "keys",
        "kill",
        "last",
        "lc",
        "lcfirst",
        "length",
        "link",
        "listen",
        "local",
        "localtime",
        "log",
        "lstat",
        "lt",
        "ma",
        "map",
        "mkdir",
        "msgctl",
        "msgget",
        "msgrcv",
        "msgsnd",
        "my",
        "ne",
        "next",
        "no",
        "not",
        "oct",
        "open",
        "opendir",
        "or",
        "ord",
        "our",
        "pack",
        "package",
        "pipe",
        "pop",
        "pos",
        "print",
        "printf",
        "prototype",
        "push",
        "q|0",
        "qq",
        "quotemeta",
        "qw",
        "qx",
        "rand",
        "read",
        "readdir",
        "readline",
        "readlink",
        "readpipe",
        "recv",
        "redo",
        "ref",
        "rename",
        "require",
        "reset",
        "return",
        "reverse",
        "rewinddir",
        "rindex",
        "rmdir",
        "say",
        "scalar",
        "seek",
        "seekdir",
        "select",
        "semctl",
        "semget",
        "semop",
        "send",
        "setgrent",
        "sethostent",
        "setnetent",
        "setpgrp",
        "setpriority",
        "setprotoent",
        "setpwent",
        "setservent",
        "setsockopt",
        "shift",
        "shmctl",
        "shmget",
        "shmread",
        "shmwrite",
        "shutdown",
        "sin",
        "sleep",
        "socket",
        "socketpair",
        "sort",
        "splice",
        "split",
        "sprintf",
        "sqrt",
        "srand",
        "stat",
        "state",
        "study",
        "sub",
        "substr",
        "symlink",
        "syscall",
        "sysopen",
        "sysread",
        "sysseek",
        "system",
        "syswrite",
        "tell",
        "telldir",
        "tie",
        "tied",
        "time",
        "times",
        "tr",
        "truncate",
        "uc",
        "ucfirst",
        "umask",
        "undef",
        "unless",
        "unlink",
        "unpack",
        "unshift",
        "untie",
        "until",
        "use",
        "utime",
        "values",
        "vec",
        "wait",
        "waitpid",
        "wantarray",
        "warn",
        "when",
        "while",
        "write",
        "x|0",
        "xor",
        "y|0",
      ],
      a = /[dualxmsipngr]{0,12}/,
      r = { $pattern: /[\w.]+/, keyword: n.join(" ") },
      o = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: r },
      i = { begin: /->\{/, end: /\}/ },
      l = {
        variants: [
          { begin: /\$\d/ },
          {
            begin: t.concat(
              /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
              "(?![A-Za-z])(?![@$%])"
            ),
          },
          { begin: /[$%@][^\s\w{]/, relevance: 0 },
        ],
      },
      s = [e.BACKSLASH_ESCAPE, o, l],
      u = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
      c = (p, m, g = "\\1") => {
        let b = g === "\\1" ? g : t.concat(g, m);
        return t.concat(
          t.concat("(?:", p, ")"),
          m,
          /(?:\\.|[^\\\/])*?/,
          b,
          /(?:\\.|[^\\\/])*?/,
          g,
          a
        );
      },
      h = (p, m, g) =>
        t.concat(t.concat("(?:", p, ")"), m, /(?:\\.|[^\\\/])*?/, g, a),
      d = [
        l,
        e.HASH_COMMENT_MODE,
        e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
        i,
        {
          className: "string",
          contains: s,
          variants: [
            { begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5 },
            { begin: "q[qwxr]?\\s*\\[", end: "\\]", relevance: 5 },
            { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 },
            { begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5 },
            { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
            { begin: "qw\\s+q", end: "q", relevance: 5 },
            { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
            { begin: '"', end: '"' },
            { begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE] },
            { begin: /\{\w+\}/, relevance: 0 },
            { begin: "-?\\w+\\s*=>", relevance: 0 },
          ],
        },
        {
          className: "number",
          begin:
            "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
          relevance: 0,
        },
        {
          begin:
            "(\\/\\/|" +
            e.RE_STARTERS_RE +
            "|\\b(split|return|print|reverse|grep)\\b)\\s*",
          keywords: "split return print reverse grep",
          relevance: 0,
          contains: [
            e.HASH_COMMENT_MODE,
            {
              className: "regexp",
              variants: [
                { begin: c("s|tr|y", t.either(...u, { capture: !0 })) },
                { begin: c("s|tr|y", "\\(", "\\)") },
                { begin: c("s|tr|y", "\\[", "\\]") },
                { begin: c("s|tr|y", "\\{", "\\}") },
              ],
              relevance: 2,
            },
            {
              className: "regexp",
              variants: [
                { begin: /(m|qr)\/\//, relevance: 0 },
                { begin: h("(?:m|qr)?", /\//, /\//) },
                { begin: h("m|qr", t.either(...u, { capture: !0 }), /\1/) },
                { begin: h("m|qr", /\(/, /\)/) },
                { begin: h("m|qr", /\[/, /\]/) },
                { begin: h("m|qr", /\{/, /\}/) },
              ],
            },
          ],
        },
        {
          className: "function",
          beginKeywords: "sub",
          end: "(\\s*\\(.*?\\))?[;{]",
          excludeEnd: !0,
          relevance: 5,
          contains: [e.TITLE_MODE],
        },
        { begin: "-\\w\\b", relevance: 0 },
        {
          begin: "^__DATA__$",
          end: "^__END__$",
          subLanguage: "mojolicious",
          contains: [{ begin: "^@@.*", end: "$", className: "comment" }],
        },
      ];
    return (
      (o.contains = d),
      (i.contains = d),
      { name: "Perl", aliases: ["pl", "pm"], keywords: r, contains: d }
    );
  }
  function v7(e) {
    let t = e.regex,
      n = /(?![A-Za-z0-9])(?![$])/,
      a = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
      r = t.concat(
        /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
        n
      ),
      o = { scope: "variable", match: "\\$+" + a },
      i = {
        scope: "meta",
        variants: [
          { begin: /<\?php/, relevance: 10 },
          { begin: /<\?=/ },
          { begin: /<\?/, relevance: 0.1 },
          { begin: /\?>/ },
        ],
      },
      l = {
        scope: "subst",
        variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
      },
      s = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
      u = e.inherit(e.QUOTE_STRING_MODE, {
        illegal: null,
        contains: e.QUOTE_STRING_MODE.contains.concat(l),
      }),
      c = e.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: e.QUOTE_STRING_MODE.contains.concat(l),
      }),
      h = `[ 	
]`,
      d = { scope: "string", variants: [u, s, c] },
      p = {
        scope: "number",
        variants: [
          { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
          { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
          { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
          {
            begin:
              "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?",
          },
        ],
        relevance: 0,
      },
      m = ["false", "null", "true"],
      g = [
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__FUNCTION__",
        "__COMPILER_HALT_OFFSET__",
        "__LINE__",
        "__METHOD__",
        "__NAMESPACE__",
        "__TRAIT__",
        "die",
        "echo",
        "exit",
        "include",
        "include_once",
        "print",
        "require",
        "require_once",
        "array",
        "abstract",
        "and",
        "as",
        "binary",
        "bool",
        "boolean",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "double",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "enum",
        "eval",
        "extends",
        "final",
        "finally",
        "float",
        "for",
        "foreach",
        "from",
        "global",
        "goto",
        "if",
        "implements",
        "instanceof",
        "insteadof",
        "int",
        "integer",
        "interface",
        "isset",
        "iterable",
        "list",
        "match|0",
        "mixed",
        "new",
        "never",
        "object",
        "or",
        "private",
        "protected",
        "public",
        "readonly",
        "real",
        "return",
        "string",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "void",
        "while",
        "xor",
        "yield",
      ],
      b = [
        "Error|0",
        "AppendIterator",
        "ArgumentCountError",
        "ArithmeticError",
        "ArrayIterator",
        "ArrayObject",
        "AssertionError",
        "BadFunctionCallException",
        "BadMethodCallException",
        "CachingIterator",
        "CallbackFilterIterator",
        "CompileError",
        "Countable",
        "DirectoryIterator",
        "DivisionByZeroError",
        "DomainException",
        "EmptyIterator",
        "ErrorException",
        "Exception",
        "FilesystemIterator",
        "FilterIterator",
        "GlobIterator",
        "InfiniteIterator",
        "InvalidArgumentException",
        "IteratorIterator",
        "LengthException",
        "LimitIterator",
        "LogicException",
        "MultipleIterator",
        "NoRewindIterator",
        "OutOfBoundsException",
        "OutOfRangeException",
        "OuterIterator",
        "OverflowException",
        "ParentIterator",
        "ParseError",
        "RangeException",
        "RecursiveArrayIterator",
        "RecursiveCachingIterator",
        "RecursiveCallbackFilterIterator",
        "RecursiveDirectoryIterator",
        "RecursiveFilterIterator",
        "RecursiveIterator",
        "RecursiveIteratorIterator",
        "RecursiveRegexIterator",
        "RecursiveTreeIterator",
        "RegexIterator",
        "RuntimeException",
        "SeekableIterator",
        "SplDoublyLinkedList",
        "SplFileInfo",
        "SplFileObject",
        "SplFixedArray",
        "SplHeap",
        "SplMaxHeap",
        "SplMinHeap",
        "SplObjectStorage",
        "SplObserver",
        "SplPriorityQueue",
        "SplQueue",
        "SplStack",
        "SplSubject",
        "SplTempFileObject",
        "TypeError",
        "UnderflowException",
        "UnexpectedValueException",
        "UnhandledMatchError",
        "ArrayAccess",
        "BackedEnum",
        "Closure",
        "Fiber",
        "Generator",
        "Iterator",
        "IteratorAggregate",
        "Serializable",
        "Stringable",
        "Throwable",
        "Traversable",
        "UnitEnum",
        "WeakReference",
        "WeakMap",
        "Directory",
        "__PHP_Incomplete_Class",
        "parent",
        "php_user_filter",
        "self",
        "static",
        "stdClass",
      ],
      C = {
        keyword: g,
        literal: ((U) => {
          let S = [];
          return (
            U.forEach((V) => {
              S.push(V),
                V.toLowerCase() === V
                  ? S.push(V.toUpperCase())
                  : S.push(V.toLowerCase());
            }),
            S
          );
        })(m),
        built_in: b,
      },
      M = (U) => U.map((S) => S.replace(/\|\d+$/, "")),
      y = {
        variants: [
          {
            match: [
              /new/,
              t.concat(h, "+"),
              t.concat("(?!", M(b).join("\\b|"), "\\b)"),
              r,
            ],
            scope: { 1: "keyword", 4: "title.class" },
          },
        ],
      },
      w = t.concat(a, "\\b(?!\\()"),
      E = {
        variants: [
          {
            match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), w],
            scope: { 2: "variable.constant" },
          },
          { match: [/::/, /class/], scope: { 2: "variable.language" } },
          {
            match: [r, t.concat(/::/, t.lookahead(/(?!class\b)/)), w],
            scope: { 1: "title.class", 3: "variable.constant" },
          },
          {
            match: [r, t.concat("::", t.lookahead(/(?!class\b)/))],
            scope: { 1: "title.class" },
          },
          {
            match: [r, /::/, /class/],
            scope: { 1: "title.class", 3: "variable.language" },
          },
        ],
      },
      x = {
        scope: "attr",
        match: t.concat(a, t.lookahead(":"), t.lookahead(/(?!::)/)),
      },
      R = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: C,
        contains: [x, o, E, e.C_BLOCK_COMMENT_MODE, d, p, y],
      },
      T = {
        relevance: 0,
        match: [
          /\b/,
          t.concat(
            "(?!fn\\b|function\\b|",
            M(g).join("\\b|"),
            "|",
            M(b).join("\\b|"),
            "\\b)"
          ),
          a,
          t.concat(h, "*"),
          t.lookahead(/(?=\()/),
        ],
        scope: { 3: "title.function.invoke" },
        contains: [R],
      };
    R.contains.push(T);
    let W = [x, E, e.C_BLOCK_COMMENT_MODE, d, p, y],
      O = {
        begin: t.concat(/#\[\s*/, r),
        beginScope: "meta",
        end: /]/,
        endScope: "meta",
        keywords: { literal: m, keyword: ["new", "array"] },
        contains: [
          {
            begin: /\[/,
            end: /]/,
            keywords: { literal: m, keyword: ["new", "array"] },
            contains: ["self", ...W],
          },
          ...W,
          { scope: "meta", match: r },
        ],
      };
    return {
      case_insensitive: !1,
      keywords: C,
      contains: [
        O,
        e.HASH_COMMENT_MODE,
        e.COMMENT("//", "$"),
        e.COMMENT("/\\*", "\\*/", {
          contains: [{ scope: "doctag", match: "@[A-Za-z]+" }],
        }),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: e.MATCH_NOTHING_RE,
            contains: [{ match: /\?>/, scope: "meta", endsParent: !0 }],
          },
        },
        i,
        { scope: "variable.language", match: /\$this\b/ },
        o,
        T,
        E,
        {
          match: [/const/, /\s/, a],
          scope: { 1: "keyword", 3: "variable.constant" },
        },
        y,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            e.UNDERSCORE_TITLE_MODE,
            { begin: "=>", endsParent: !0 },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: C,
              contains: ["self", o, E, e.C_BLOCK_COMMENT_MODE, d, p],
            },
          ],
        },
        {
          scope: "class",
          variants: [
            { beginKeywords: "enum", illegal: /[($"]/ },
            { beginKeywords: "class interface trait", illegal: /[:($"]/ },
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE,
          ],
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [
            e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" }),
          ],
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            { match: /\b(as|const|function)\b/, scope: "keyword" },
            e.UNDERSCORE_TITLE_MODE,
          ],
        },
        d,
        p,
      ],
    };
  }
  function b7(e) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            { begin: "/\\*", end: "\\*/", skip: !0 },
            { begin: 'b"', end: '"', skip: !0 },
            { begin: "b'", end: "'", skip: !0 },
            e.inherit(e.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0,
            }),
            e.inherit(e.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0,
            }),
          ],
        },
      ],
    };
  }
  function E7(e) {
    return {
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0,
    };
  }
  function _7(e) {
    let t = e.regex,
      n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
      a = [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "case",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "match",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield",
      ],
      l = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: a,
        built_in: [
          "__import__",
          "abs",
          "all",
          "any",
          "ascii",
          "bin",
          "bool",
          "breakpoint",
          "bytearray",
          "bytes",
          "callable",
          "chr",
          "classmethod",
          "compile",
          "complex",
          "delattr",
          "dict",
          "dir",
          "divmod",
          "enumerate",
          "eval",
          "exec",
          "filter",
          "float",
          "format",
          "frozenset",
          "getattr",
          "globals",
          "hasattr",
          "hash",
          "help",
          "hex",
          "id",
          "input",
          "int",
          "isinstance",
          "issubclass",
          "iter",
          "len",
          "list",
          "locals",
          "map",
          "max",
          "memoryview",
          "min",
          "next",
          "object",
          "oct",
          "open",
          "ord",
          "pow",
          "print",
          "property",
          "range",
          "repr",
          "reversed",
          "round",
          "set",
          "setattr",
          "slice",
          "sorted",
          "staticmethod",
          "str",
          "sum",
          "super",
          "tuple",
          "type",
          "vars",
          "zip",
        ],
        literal: [
          "__debug__",
          "Ellipsis",
          "False",
          "None",
          "NotImplemented",
          "True",
        ],
        type: [
          "Any",
          "Callable",
          "Coroutine",
          "Dict",
          "List",
          "Literal",
          "Generic",
          "Optional",
          "Sequence",
          "Set",
          "Tuple",
          "Type",
          "Union",
        ],
      },
      s = { className: "meta", begin: /^(>>>|\.\.\.) / },
      u = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: l,
        illegal: /#/,
      },
      c = { begin: /\{\{/, relevance: 0 },
      h = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE, s],
            relevance: 10,
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [e.BACKSLASH_ESCAPE, s],
            relevance: 10,
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE, s, c, u],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
            end: /"""/,
            contains: [e.BACKSLASH_ESCAPE, s, c, u],
          },
          { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
          { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
          { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
          { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'/,
            end: /'/,
            contains: [e.BACKSLASH_ESCAPE, c, u],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, c, u],
          },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
        ],
      },
      d = "[0-9](_?[0-9])*",
      p = `(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,
      m = `\\b|${a.join("|")}`,
      g = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: `(\\b(${d})|(${p}))[eE][+-]?(${d})[jJ]?(?=${m})` },
          { begin: `(${p})[jJ]?` },
          { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})` },
          { begin: `\\b0[bB](_?[01])+[lL]?(?=${m})` },
          { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${m})` },
          { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})` },
          { begin: `\\b(${d})[jJ](?=${m})` },
        ],
      },
      b = {
        className: "comment",
        begin: t.lookahead(/# type:/),
        end: /$/,
        keywords: l,
        contains: [
          { begin: /# type:/ },
          { begin: /#/, end: /\b\B/, endsWithParent: !0 },
        ],
      },
      _ = {
        className: "params",
        variants: [
          { className: "", begin: /\(\s*\)/, skip: !0 },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: l,
            contains: ["self", s, g, h, e.HASH_COMMENT_MODE],
          },
        ],
      };
    return (
      (u.contains = [h, g, s]),
      {
        name: "Python",
        aliases: ["py", "gyp", "ipython"],
        unicodeRegex: !0,
        keywords: l,
        illegal: /(<\/|->|\?)|=>/,
        contains: [
          s,
          g,
          { begin: /\bself\b/ },
          { beginKeywords: "if", relevance: 0 },
          h,
          b,
          e.HASH_COMMENT_MODE,
          {
            match: [/\bdef/, /\s+/, n],
            scope: { 1: "keyword", 3: "title.function" },
            contains: [_],
          },
          {
            variants: [
              { match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] },
              { match: [/\bclass/, /\s+/, n] },
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              6: "title.class.inherited",
            },
          },
          {
            className: "meta",
            begin: /^[\t ]*@/,
            end: /(?=#)|$/,
            contains: [g, _, h],
          },
        ],
      }
    );
  }
  function A7(e) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: { end: / |$/, starts: { end: "$", subLanguage: "python" } },
          variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }],
        },
      ],
    };
  }
  function y7(e) {
    let t = e.regex,
      n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      a = t.either(
        /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
        /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
        /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
      ),
      r = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
      o = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
    return {
      name: "R",
      keywords: {
        $pattern: n,
        keyword: "function if in break next repeat else for while",
        literal:
          "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in:
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
      },
      contains: [
        e.COMMENT(/#'/, /$/, {
          contains: [
            {
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: t.lookahead(
                  t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)
                ),
                endsParent: !0,
              },
            },
            {
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [{ match: n }, { match: /`(?:\\.|[^`\\])+`/ }],
                  endsParent: !0,
                },
              ],
            },
            { scope: "doctag", match: /@[a-zA-Z]+/ },
            { scope: "keyword", match: /\\[a-zA-Z]+/ },
          ],
        }),
        e.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
            { begin: '"', end: '"', relevance: 0 },
            { begin: "'", end: "'", relevance: 0 },
          ],
        },
        {
          relevance: 0,
          variants: [
            { scope: { 1: "operator", 2: "number" }, match: [r, a] },
            { scope: { 1: "operator", 2: "number" }, match: [/%[^%]*%/, a] },
            { scope: { 1: "punctuation", 2: "number" }, match: [o, a] },
            { scope: { 2: "number" }, match: [/[^a-zA-Z0-9._]|^/, a] },
          ],
        },
        { scope: { 3: "operator" }, match: [n, /\s+/, /<-/, /\s+/] },
        {
          scope: "operator",
          relevance: 0,
          variants: [{ match: r }, { match: /%[^%]*%/ }],
        },
        { scope: "punctuation", relevance: 0, match: o },
        { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
      ],
    };
  }
  function w7(e) {
    let t = e.regex,
      n =
        "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
      a = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
      r = t.concat(a, /(::\w+)*/),
      i = {
        "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
        "variable.language": ["self", "super"],
        keyword: [
          "alias",
          "and",
          "begin",
          "BEGIN",
          "break",
          "case",
          "class",
          "defined",
          "do",
          "else",
          "elsif",
          "end",
          "END",
          "ensure",
          "for",
          "if",
          "in",
          "module",
          "next",
          "not",
          "or",
          "redo",
          "require",
          "rescue",
          "retry",
          "return",
          "then",
          "undef",
          "unless",
          "until",
          "when",
          "while",
          "yield",
          ...[
            "include",
            "extend",
            "prepend",
            "public",
            "private",
            "protected",
            "raise",
            "throw",
          ],
        ],
        built_in: [
          "proc",
          "lambda",
          "attr_accessor",
          "attr_reader",
          "attr_writer",
          "define_method",
          "private_constant",
          "module_function",
        ],
        literal: ["true", "false", "nil"],
      },
      l = { className: "doctag", begin: "@[A-Za-z]+" },
      s = { begin: "#<", end: ">" },
      u = [
        e.COMMENT("#", "$", { contains: [l] }),
        e.COMMENT("^=begin", "^=end", { contains: [l], relevance: 10 }),
        e.COMMENT("^__END__", e.MATCH_NOTHING_RE),
      ],
      c = { className: "subst", begin: /#\{/, end: /\}/, keywords: i },
      h = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, c],
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /`/, end: /`/ },
          { begin: /%[qQwWx]?\(/, end: /\)/ },
          { begin: /%[qQwWx]?\[/, end: /\]/ },
          { begin: /%[qQwWx]?\{/, end: /\}/ },
          { begin: /%[qQwWx]?</, end: />/ },
          { begin: /%[qQwWx]?\//, end: /\// },
          { begin: /%[qQwWx]?%/, end: /%/ },
          { begin: /%[qQwWx]?-/, end: /-/ },
          { begin: /%[qQwWx]?\|/, end: /\|/ },
          { begin: /\B\?(\\\d{1,3})/ },
          { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
          { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
          { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
          { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
          { begin: /\B\?\\?\S/ },
          {
            begin: t.concat(
              /<<[-~]?'?/,
              t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
            ),
            contains: [
              e.END_SAME_AS_BEGIN({
                begin: /(\w+)/,
                end: /(\w+)/,
                contains: [e.BACKSLASH_ESCAPE, c],
              }),
            ],
          },
        ],
      },
      d = "[1-9](_?[0-9])*|0",
      p = "[0-9](_?[0-9])*",
      m = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: `\\b(${d})(\\.(${p}))?([eE][+-]?(${p})|r)?i?\\b` },
          { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
          { begin: "\\b0(_?[0-7])+r?i?\\b" },
        ],
      },
      g = {
        variants: [
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /(?=\))/,
            excludeBegin: !0,
            endsParent: !0,
            keywords: i,
          },
        ],
      },
      E = [
        h,
        {
          variants: [
            { match: [/class\s+/, r, /\s+<\s+/, r] },
            { match: [/\b(class|module)\s+/, r] },
          ],
          scope: { 2: "title.class", 4: "title.class.inherited" },
          keywords: i,
        },
        {
          match: [/(include|extend)\s+/, r],
          scope: { 2: "title.class" },
          keywords: i,
        },
        { relevance: 0, match: [r, /\.new[. (]/], scope: { 1: "title.class" } },
        {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant",
        },
        { relevance: 0, match: a, scope: "title.class" },
        {
          match: [/def/, /\s+/, n],
          scope: { 1: "keyword", 3: "title.function" },
          contains: [g],
        },
        { begin: e.IDENT_RE + "::" },
        {
          className: "symbol",
          begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
          relevance: 0,
        },
        {
          className: "symbol",
          begin: ":(?!\\s)",
          contains: [h, { begin: n }],
          relevance: 0,
        },
        m,
        {
          className: "variable",
          begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
        },
        {
          className: "params",
          begin: /\|/,
          end: /\|/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: i,
        },
        {
          begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
          keywords: "unless",
          contains: [
            {
              className: "regexp",
              contains: [e.BACKSLASH_ESCAPE, c],
              illegal: /\n/,
              variants: [
                { begin: "/", end: "/[a-z]*" },
                { begin: /%r\{/, end: /\}[a-z]*/ },
                { begin: "%r\\(", end: "\\)[a-z]*" },
                { begin: "%r!", end: "![a-z]*" },
                { begin: "%r\\[", end: "\\][a-z]*" },
              ],
            },
          ].concat(s, u),
          relevance: 0,
        },
      ].concat(s, u);
    (c.contains = E), (g.contains = E);
    let x = "[>?]>",
      R = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",
      T = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
      W = [
        { begin: /^\s*=>/, starts: { end: "$", contains: E } },
        {
          className: "meta.prompt",
          begin: "^(" + x + "|" + R + "|" + T + ")(?=[ ])",
          starts: { end: "$", keywords: i, contains: E },
        },
      ];
    return (
      u.unshift(s),
      {
        name: "Ruby",
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        keywords: i,
        illegal: /\/\*/,
        contains: [e.SHEBANG({ binary: "ruby" })].concat(W).concat(u).concat(E),
      }
    );
  }
  function x7(e) {
    let t = e.regex,
      n = {
        className: "title.function.invoke",
        relevance: 0,
        begin: t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/)),
      },
      a = "([ui](8|16|32|64|128|size)|f(32|64))?",
      r = [
        "abstract",
        "as",
        "async",
        "await",
        "become",
        "box",
        "break",
        "const",
        "continue",
        "crate",
        "do",
        "dyn",
        "else",
        "enum",
        "extern",
        "false",
        "final",
        "fn",
        "for",
        "if",
        "impl",
        "in",
        "let",
        "loop",
        "macro",
        "match",
        "mod",
        "move",
        "mut",
        "override",
        "priv",
        "pub",
        "ref",
        "return",
        "self",
        "Self",
        "static",
        "struct",
        "super",
        "trait",
        "true",
        "try",
        "type",
        "typeof",
        "unsafe",
        "unsized",
        "use",
        "virtual",
        "where",
        "while",
        "yield",
      ],
      o = ["true", "false", "Some", "None", "Ok", "Err"],
      i = [
        "drop ",
        "Copy",
        "Send",
        "Sized",
        "Sync",
        "Drop",
        "Fn",
        "FnMut",
        "FnOnce",
        "ToOwned",
        "Clone",
        "Debug",
        "PartialEq",
        "PartialOrd",
        "Eq",
        "Ord",
        "AsRef",
        "AsMut",
        "Into",
        "From",
        "Default",
        "Iterator",
        "Extend",
        "IntoIterator",
        "DoubleEndedIterator",
        "ExactSizeIterator",
        "SliceConcatExt",
        "ToString",
        "assert!",
        "assert_eq!",
        "bitflags!",
        "bytes!",
        "cfg!",
        "col!",
        "concat!",
        "concat_idents!",
        "debug_assert!",
        "debug_assert_eq!",
        "env!",
        "panic!",
        "file!",
        "format!",
        "format_args!",
        "include_bytes!",
        "include_str!",
        "line!",
        "local_data_key!",
        "module_path!",
        "option_env!",
        "print!",
        "println!",
        "select!",
        "stringify!",
        "try!",
        "unimplemented!",
        "unreachable!",
        "vec!",
        "write!",
        "writeln!",
        "macro_rules!",
        "assert_ne!",
        "debug_assert_ne!",
      ],
      l = [
        "i8",
        "i16",
        "i32",
        "i64",
        "i128",
        "isize",
        "u8",
        "u16",
        "u32",
        "u64",
        "u128",
        "usize",
        "f32",
        "f64",
        "str",
        "char",
        "bool",
        "Box",
        "Option",
        "Result",
        "String",
        "Vec",
      ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: e.IDENT_RE + "!?",
        type: l,
        keyword: r,
        literal: o,
        built_in: i,
      },
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
        {
          className: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
          ],
        },
        { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + a },
            { begin: "\\b0o([0-7_]+)" + a },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + a },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a },
          ],
          relevance: 0,
        },
        {
          begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
          className: { 1: "keyword", 3: "title.function" },
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [{ className: "string", begin: /"/, end: /"/ }],
        },
        {
          begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
          className: { 1: "keyword", 3: "keyword", 4: "variable" },
        },
        {
          begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
          className: { 1: "keyword", 3: "variable", 5: "keyword" },
        },
        {
          begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
          className: { 1: "keyword", 3: "title.class" },
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            e.UNDERSCORE_IDENT_RE,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: { keyword: "Self", built_in: i, type: l },
        },
        { className: "punctuation", begin: "->" },
        n,
      ],
    };
  }
  var w6 = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    x6 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    M6 = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    z6 = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    S6 = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    C6 = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
    ].reverse();
  function M7(e) {
    let t = w6(e),
      n = S6,
      a = z6,
      r = "@[a-z-]+",
      o = "and or not only",
      l = {
        className: "variable",
        begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
        relevance: 0,
      };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        t.CSS_NUMBER_MODE,
        { className: "selector-id", begin: "#[A-Za-z0-9_-]+", relevance: 0 },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0,
        },
        t.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + x6.join("|") + ")\\b",
          relevance: 0,
        },
        { className: "selector-pseudo", begin: ":(" + a.join("|") + ")" },
        { className: "selector-pseudo", begin: ":(:)?(" + n.join("|") + ")" },
        l,
        { begin: /\(/, end: /\)/, contains: [t.CSS_NUMBER_MODE] },
        t.CSS_VARIABLE,
        { className: "attribute", begin: "\\b(" + C6.join("|") + ")\\b" },
        {
          begin:
            "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
        },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            t.BLOCK_COMMENT,
            l,
            t.HEXCOLOR,
            t.CSS_NUMBER_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            t.IMPORTANT,
            t.FUNCTION_DISPATCH,
          ],
        },
        {
          begin: "@(page|font-face)",
          keywords: { $pattern: r, keyword: "@page @font-face" },
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: o,
            attribute: M6.join(" "),
          },
          contains: [
            { begin: r, className: "keyword" },
            { begin: /[a-z-]+(?=:)/, className: "attribute" },
            l,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            t.HEXCOLOR,
            t.CSS_NUMBER_MODE,
          ],
        },
        t.FUNCTION_DISPATCH,
      ],
    };
  }
  function z7(e) {
    return {
      name: "Shell Session",
      aliases: ["console", "shellsession"],
      contains: [
        {
          className: "meta.prompt",
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
        },
      ],
    };
  }
  function S7(e) {
    let t = e.regex,
      n = e.COMMENT("--", "$"),
      a = {
        className: "string",
        variants: [{ begin: /'/, end: /'/, contains: [{ begin: /''/ }] }],
      },
      r = { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
      o = ["true", "false", "unknown"],
      i = [
        "double precision",
        "large object",
        "with timezone",
        "without timezone",
      ],
      l = [
        "bigint",
        "binary",
        "blob",
        "boolean",
        "char",
        "character",
        "clob",
        "date",
        "dec",
        "decfloat",
        "decimal",
        "float",
        "int",
        "integer",
        "interval",
        "nchar",
        "nclob",
        "national",
        "numeric",
        "real",
        "row",
        "smallint",
        "time",
        "timestamp",
        "varchar",
        "varying",
        "varbinary",
      ],
      s = ["add", "asc", "collation", "desc", "final", "first", "last", "view"],
      u = [
        "abs",
        "acos",
        "all",
        "allocate",
        "alter",
        "and",
        "any",
        "are",
        "array",
        "array_agg",
        "array_max_cardinality",
        "as",
        "asensitive",
        "asin",
        "asymmetric",
        "at",
        "atan",
        "atomic",
        "authorization",
        "avg",
        "begin",
        "begin_frame",
        "begin_partition",
        "between",
        "bigint",
        "binary",
        "blob",
        "boolean",
        "both",
        "by",
        "call",
        "called",
        "cardinality",
        "cascaded",
        "case",
        "cast",
        "ceil",
        "ceiling",
        "char",
        "char_length",
        "character",
        "character_length",
        "check",
        "classifier",
        "clob",
        "close",
        "coalesce",
        "collate",
        "collect",
        "column",
        "commit",
        "condition",
        "connect",
        "constraint",
        "contains",
        "convert",
        "copy",
        "corr",
        "corresponding",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "create",
        "cross",
        "cube",
        "cume_dist",
        "current",
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_row",
        "current_schema",
        "current_time",
        "current_timestamp",
        "current_path",
        "current_role",
        "current_transform_group_for_type",
        "current_user",
        "cursor",
        "cycle",
        "date",
        "day",
        "deallocate",
        "dec",
        "decimal",
        "decfloat",
        "declare",
        "default",
        "define",
        "delete",
        "dense_rank",
        "deref",
        "describe",
        "deterministic",
        "disconnect",
        "distinct",
        "double",
        "drop",
        "dynamic",
        "each",
        "element",
        "else",
        "empty",
        "end",
        "end_frame",
        "end_partition",
        "end-exec",
        "equals",
        "escape",
        "every",
        "except",
        "exec",
        "execute",
        "exists",
        "exp",
        "external",
        "extract",
        "false",
        "fetch",
        "filter",
        "first_value",
        "float",
        "floor",
        "for",
        "foreign",
        "frame_row",
        "free",
        "from",
        "full",
        "function",
        "fusion",
        "get",
        "global",
        "grant",
        "group",
        "grouping",
        "groups",
        "having",
        "hold",
        "hour",
        "identity",
        "in",
        "indicator",
        "initial",
        "inner",
        "inout",
        "insensitive",
        "insert",
        "int",
        "integer",
        "intersect",
        "intersection",
        "interval",
        "into",
        "is",
        "join",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "language",
        "large",
        "last_value",
        "lateral",
        "lead",
        "leading",
        "left",
        "like",
        "like_regex",
        "listagg",
        "ln",
        "local",
        "localtime",
        "localtimestamp",
        "log",
        "log10",
        "lower",
        "match",
        "match_number",
        "match_recognize",
        "matches",
        "max",
        "member",
        "merge",
        "method",
        "min",
        "minute",
        "mod",
        "modifies",
        "module",
        "month",
        "multiset",
        "national",
        "natural",
        "nchar",
        "nclob",
        "new",
        "no",
        "none",
        "normalize",
        "not",
        "nth_value",
        "ntile",
        "null",
        "nullif",
        "numeric",
        "octet_length",
        "occurrences_regex",
        "of",
        "offset",
        "old",
        "omit",
        "on",
        "one",
        "only",
        "open",
        "or",
        "order",
        "out",
        "outer",
        "over",
        "overlaps",
        "overlay",
        "parameter",
        "partition",
        "pattern",
        "per",
        "percent",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "period",
        "portion",
        "position",
        "position_regex",
        "power",
        "precedes",
        "precision",
        "prepare",
        "primary",
        "procedure",
        "ptf",
        "range",
        "rank",
        "reads",
        "real",
        "recursive",
        "ref",
        "references",
        "referencing",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "release",
        "result",
        "return",
        "returns",
        "revoke",
        "right",
        "rollback",
        "rollup",
        "row",
        "row_number",
        "rows",
        "running",
        "savepoint",
        "scope",
        "scroll",
        "search",
        "second",
        "seek",
        "select",
        "sensitive",
        "session_user",
        "set",
        "show",
        "similar",
        "sin",
        "sinh",
        "skip",
        "smallint",
        "some",
        "specific",
        "specifictype",
        "sql",
        "sqlexception",
        "sqlstate",
        "sqlwarning",
        "sqrt",
        "start",
        "static",
        "stddev_pop",
        "stddev_samp",
        "submultiset",
        "subset",
        "substring",
        "substring_regex",
        "succeeds",
        "sum",
        "symmetric",
        "system",
        "system_time",
        "system_user",
        "table",
        "tablesample",
        "tan",
        "tanh",
        "then",
        "time",
        "timestamp",
        "timezone_hour",
        "timezone_minute",
        "to",
        "trailing",
        "translate",
        "translate_regex",
        "translation",
        "treat",
        "trigger",
        "trim",
        "trim_array",
        "true",
        "truncate",
        "uescape",
        "union",
        "unique",
        "unknown",
        "unnest",
        "update",
        "upper",
        "user",
        "using",
        "value",
        "values",
        "value_of",
        "var_pop",
        "var_samp",
        "varbinary",
        "varchar",
        "varying",
        "versioning",
        "when",
        "whenever",
        "where",
        "width_bucket",
        "window",
        "with",
        "within",
        "without",
        "year",
      ],
      c = [
        "abs",
        "acos",
        "array_agg",
        "asin",
        "atan",
        "avg",
        "cast",
        "ceil",
        "ceiling",
        "coalesce",
        "corr",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "cume_dist",
        "dense_rank",
        "deref",
        "element",
        "exp",
        "extract",
        "first_value",
        "floor",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "last_value",
        "lead",
        "listagg",
        "ln",
        "log",
        "log10",
        "lower",
        "max",
        "min",
        "mod",
        "nth_value",
        "ntile",
        "nullif",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "position",
        "position_regex",
        "power",
        "rank",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "row_number",
        "sin",
        "sinh",
        "sqrt",
        "stddev_pop",
        "stddev_samp",
        "substring",
        "substring_regex",
        "sum",
        "tan",
        "tanh",
        "translate",
        "translate_regex",
        "treat",
        "trim",
        "trim_array",
        "unnest",
        "upper",
        "value_of",
        "var_pop",
        "var_samp",
        "width_bucket",
      ],
      h = [
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_schema",
        "current_transform_group_for_type",
        "current_user",
        "session_user",
        "system_time",
        "system_user",
        "current_time",
        "localtime",
        "current_timestamp",
        "localtimestamp",
      ],
      d = [
        "create table",
        "insert into",
        "primary key",
        "foreign key",
        "not null",
        "alter table",
        "add constraint",
        "grouping sets",
        "on overflow",
        "character set",
        "respect nulls",
        "ignore nulls",
        "nulls first",
        "nulls last",
        "depth first",
        "breadth first",
      ],
      p = c,
      m = [...u, ...s].filter((M) => !c.includes(M)),
      g = { className: "variable", begin: /@[a-z0-9]+/ },
      b = {
        className: "operator",
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0,
      },
      _ = {
        begin: t.concat(/\b/, t.either(...p), /\s*\(/),
        relevance: 0,
        keywords: { built_in: p },
      };
    function C(M, { exceptions: y, when: w } = {}) {
      let E = w;
      return (
        (y = y || []),
        M.map((x) =>
          x.match(/\|\d+$/) || y.includes(x) ? x : E(x) ? `${x}|0` : x
        )
      );
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: C(m, { when: (M) => M.length < 3 }),
        literal: o,
        type: l,
        built_in: h,
      },
      contains: [
        {
          begin: t.either(...d),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: m.concat(d),
            literal: o,
            type: l,
          },
        },
        { className: "type", begin: t.either(...i) },
        _,
        g,
        a,
        r,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
        n,
        b,
      ],
    };
  }
  function k7(e) {
    return e ? (typeof e == "string" ? e : e.source) : null;
  }
  function K1(e) {
    return me("(?=", e, ")");
  }
  function me(...e) {
    return e.map((n) => k7(n)).join("");
  }
  function I6(e) {
    let t = e[e.length - 1];
    return typeof t == "object" && t.constructor === Object
      ? (e.splice(e.length - 1, 1), t)
      : {};
  }
  function Ke(...e) {
    return (
      "(" + (I6(e).capture ? "" : "?:") + e.map((a) => k7(a)).join("|") + ")"
    );
  }
  var Dn = (e) => me(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    R6 = ["Protocol", "Type"].map(Dn),
    C7 = ["init", "self"].map(Dn),
    k6 = ["Any", "Self"],
    Tn = [
      "actor",
      "any",
      "associatedtype",
      "async",
      "await",
      /as\?/,
      /as!/,
      "as",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "convenience",
      "default",
      "defer",
      "deinit",
      "didSet",
      "distributed",
      "do",
      "dynamic",
      "else",
      "enum",
      "extension",
      "fallthrough",
      /fileprivate\(set\)/,
      "fileprivate",
      "final",
      "for",
      "func",
      "get",
      "guard",
      "if",
      "import",
      "indirect",
      "infix",
      /init\?/,
      /init!/,
      "inout",
      /internal\(set\)/,
      "internal",
      "in",
      "is",
      "isolated",
      "nonisolated",
      "lazy",
      "let",
      "mutating",
      "nonmutating",
      /open\(set\)/,
      "open",
      "operator",
      "optional",
      "override",
      "postfix",
      "precedencegroup",
      "prefix",
      /private\(set\)/,
      "private",
      "protocol",
      /public\(set\)/,
      "public",
      "repeat",
      "required",
      "rethrows",
      "return",
      "set",
      "some",
      "static",
      "struct",
      "subscript",
      "super",
      "switch",
      "throws",
      "throw",
      /try\?/,
      /try!/,
      "try",
      "typealias",
      /unowned\(safe\)/,
      /unowned\(unsafe\)/,
      "unowned",
      "var",
      "weak",
      "where",
      "while",
      "willSet",
    ],
    I7 = ["false", "nil", "true"],
    N6 = [
      "assignment",
      "associativity",
      "higherThan",
      "left",
      "lowerThan",
      "none",
      "right",
    ],
    T6 = [
      "#colorLiteral",
      "#column",
      "#dsohandle",
      "#else",
      "#elseif",
      "#endif",
      "#error",
      "#file",
      "#fileID",
      "#fileLiteral",
      "#filePath",
      "#function",
      "#if",
      "#imageLiteral",
      "#keyPath",
      "#line",
      "#selector",
      "#sourceLocation",
      "#warn_unqualified_access",
      "#warning",
    ],
    R7 = [
      "abs",
      "all",
      "any",
      "assert",
      "assertionFailure",
      "debugPrint",
      "dump",
      "fatalError",
      "getVaList",
      "isKnownUniquelyReferenced",
      "max",
      "min",
      "numericCast",
      "pointwiseMax",
      "pointwiseMin",
      "precondition",
      "preconditionFailure",
      "print",
      "readLine",
      "repeatElement",
      "sequence",
      "stride",
      "swap",
      "swift_unboxFromSwiftValueWithType",
      "transcode",
      "type",
      "unsafeBitCast",
      "unsafeDowncast",
      "withExtendedLifetime",
      "withUnsafeMutablePointer",
      "withUnsafePointer",
      "withVaList",
      "withoutActuallyEscaping",
      "zip",
    ],
    N7 = Ke(
      /[/=\-+!*%<>&|^~?]/,
      /[\u00A1-\u00A7]/,
      /[\u00A9\u00AB]/,
      /[\u00AC\u00AE]/,
      /[\u00B0\u00B1]/,
      /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
      /[\u2016-\u2017]/,
      /[\u2020-\u2027]/,
      /[\u2030-\u203E]/,
      /[\u2041-\u2053]/,
      /[\u2055-\u205E]/,
      /[\u2190-\u23FF]/,
      /[\u2500-\u2775]/,
      /[\u2794-\u2BFF]/,
      /[\u2E00-\u2E7F]/,
      /[\u3001-\u3003]/,
      /[\u3008-\u3020]/,
      /[\u3030]/
    ),
    T7 = Ke(
      N7,
      /[\u0300-\u036F]/,
      /[\u1DC0-\u1DFF]/,
      /[\u20D0-\u20FF]/,
      /[\uFE00-\uFE0F]/,
      /[\uFE20-\uFE2F]/
    ),
    Ln = me(N7, T7, "*"),
    L7 = Ke(
      /[a-zA-Z_]/,
      /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
      /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
      /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
      /[\u1E00-\u1FFF]/,
      /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
      /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
      /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
      /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
      /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
      /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    ),
    Y1 = Ke(L7, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    gt = me(L7, Y1, "*"),
    On = me(/[A-Z]/, Y1, "*"),
    L6 = [
      "autoclosure",
      me(/convention\(/, Ke("swift", "block", "c"), /\)/),
      "discardableResult",
      "dynamicCallable",
      "dynamicMemberLookup",
      "escaping",
      "frozen",
      "GKInspectable",
      "IBAction",
      "IBDesignable",
      "IBInspectable",
      "IBOutlet",
      "IBSegueAction",
      "inlinable",
      "main",
      "nonobjc",
      "NSApplicationMain",
      "NSCopying",
      "NSManaged",
      me(/objc\(/, gt, /\)/),
      "objc",
      "objcMembers",
      "propertyWrapper",
      "requires_stored_property_inits",
      "resultBuilder",
      "testable",
      "UIApplicationMain",
      "unknown",
      "usableFromInline",
    ],
    O6 = [
      "iOS",
      "iOSApplicationExtension",
      "macOS",
      "macOSApplicationExtension",
      "macCatalyst",
      "macCatalystApplicationExtension",
      "watchOS",
      "watchOSApplicationExtension",
      "tvOS",
      "tvOSApplicationExtension",
      "swift",
    ];
  function O7(e) {
    let t = { match: /\s+/, relevance: 0 },
      n = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      a = [e.C_LINE_COMMENT_MODE, n],
      r = { match: [/\./, Ke(...R6, ...C7)], className: { 2: "keyword" } },
      o = { match: me(/\./, Ke(...Tn)), relevance: 0 },
      i = Tn.filter((K) => typeof K == "string").concat(["_|0"]),
      l = Tn.filter((K) => typeof K != "string")
        .concat(k6)
        .map(Dn),
      s = { variants: [{ className: "keyword", match: Ke(...l, ...C7) }] },
      u = { $pattern: Ke(/\b\w+/, /#\w+/), keyword: i.concat(T6), literal: I7 },
      c = [r, o, s],
      h = { match: me(/\./, Ke(...R7)), relevance: 0 },
      d = { className: "built_in", match: me(/\b/, Ke(...R7), /(?=\()/) },
      p = [h, d],
      m = { match: /->/, relevance: 0 },
      g = {
        className: "operator",
        relevance: 0,
        variants: [{ match: Ln }, { match: `\\.(\\.|${T7})+` }],
      },
      b = [m, g],
      _ = "([0-9]_*)+",
      C = "([0-9a-fA-F]_*)+",
      M = {
        className: "number",
        relevance: 0,
        variants: [
          { match: `\\b(${_})(\\.(${_}))?([eE][+-]?(${_}))?\\b` },
          { match: `\\b0x(${C})(\\.(${C}))?([pP][+-]?(${_}))?\\b` },
          { match: /\b0o([0-7]_*)+\b/ },
          { match: /\b0b([01]_*)+\b/ },
        ],
      },
      y = (K = "") => ({
        className: "subst",
        variants: [
          { match: me(/\\/, K, /[0\\tnr"']/) },
          { match: me(/\\/, K, /u\{[0-9a-fA-F]{1,8}\}/) },
        ],
      }),
      w = (K = "") => ({
        className: "subst",
        match: me(/\\/, K, /[\t ]*(?:[\r\n]|\r\n)/),
      }),
      E = (K = "") => ({
        className: "subst",
        label: "interpol",
        begin: me(/\\/, K, /\(/),
        end: /\)/,
      }),
      x = (K = "") => ({
        begin: me(K, /"""/),
        end: me(/"""/, K),
        contains: [y(K), w(K), E(K)],
      }),
      R = (K = "") => ({
        begin: me(K, /"/),
        end: me(/"/, K),
        contains: [y(K), E(K)],
      }),
      T = {
        className: "string",
        variants: [
          x(),
          x("#"),
          x("##"),
          x("###"),
          R(),
          R("#"),
          R("##"),
          R("###"),
        ],
      },
      W = { match: me(/`/, gt, /`/) },
      O = { className: "variable", match: /\$\d+/ },
      U = { className: "variable", match: `\\$${Y1}+` },
      S = [W, O, U],
      V = {
        match: /(@|#(un)?)available/,
        className: "keyword",
        starts: {
          contains: [
            { begin: /\(/, end: /\)/, keywords: O6, contains: [...b, M, T] },
          ],
        },
      },
      Q = { className: "keyword", match: me(/@/, Ke(...L6)) },
      z = { className: "meta", match: me(/@/, gt) },
      I = [V, Q, z],
      L = {
        match: K1(/\b[A-Z]/),
        relevance: 0,
        contains: [
          {
            className: "type",
            match: me(
              /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
              Y1,
              "+"
            ),
          },
          { className: "type", match: On, relevance: 0 },
          { match: /[?!]+/, relevance: 0 },
          { match: /\.\.\./, relevance: 0 },
          { match: me(/\s+&\s+/, K1(On)), relevance: 0 },
        ],
      },
      F = {
        begin: /</,
        end: />/,
        keywords: u,
        contains: [...a, ...c, ...I, m, L],
      };
    L.contains.push(F);
    let q = { match: me(gt, /\s*:/), keywords: "_|0", relevance: 0 },
      f = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: u,
        contains: ["self", q, ...a, ...c, ...p, ...b, M, T, ...S, ...I, L],
      },
      v = { begin: /</, end: />/, contains: [...a, L] },
      Oe = {
        begin: Ke(K1(me(gt, /\s*:/)), K1(me(gt, /\s+/, gt, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [
          { className: "keyword", match: /\b_\b/ },
          { className: "params", match: gt },
        ],
      },
      he = {
        begin: /\(/,
        end: /\)/,
        keywords: u,
        contains: [Oe, ...a, ...c, ...b, M, T, ...I, L, f],
        endsParent: !0,
        illegal: /["']/,
      },
      xe = {
        match: [/func/, /\s+/, Ke(W.match, gt, Ln)],
        className: { 1: "keyword", 3: "title.function" },
        contains: [v, he, t],
        illegal: [/\[/, /%/],
      },
      Re = {
        match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
        className: { 1: "keyword" },
        contains: [v, he, t],
        illegal: /\[|%/,
      },
      ke = {
        match: [/operator/, /\s+/, Ln],
        className: { 1: "keyword", 3: "title" },
      },
      X = {
        begin: [/precedencegroup/, /\s+/, On],
        className: { 1: "keyword", 3: "title" },
        contains: [L],
        keywords: [...N6, ...I7],
        end: /}/,
      };
    for (let K of T.variants) {
      let re = K.contains.find((ie) => ie.label === "interpol");
      re.keywords = u;
      let se = [...c, ...p, ...b, M, T, ...S];
      re.contains = [
        ...se,
        { begin: /\(/, end: /\)/, contains: ["self", ...se] },
      ];
    }
    return {
      name: "Swift",
      keywords: u,
      contains: [
        ...a,
        xe,
        Re,
        {
          beginKeywords: "struct protocol class extension enum actor",
          end: "\\{",
          excludeEnd: !0,
          keywords: u,
          contains: [
            e.inherit(e.TITLE_MODE, {
              className: "title.class",
              begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
            }),
            ...c,
          ],
        },
        ke,
        X,
        { beginKeywords: "import", end: /$/, contains: [...a], relevance: 0 },
        ...c,
        ...p,
        ...b,
        M,
        T,
        ...S,
        ...I,
        L,
        f,
      ],
    };
  }
  var Q1 = "[A-Za-z$_][0-9A-Za-z$_]*",
    D7 = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends",
    ],
    H7 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    V7 = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly",
    ],
    F7 = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ],
    P7 = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape",
    ],
    B7 = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global",
    ],
    U7 = [].concat(P7, V7, F7);
  function D6(e) {
    let t = e.regex,
      n = (I, { after: L }) => {
        let F = "</" + I[0].slice(1);
        return I.input.indexOf(F, L) !== -1;
      },
      a = Q1,
      r = { begin: "<>", end: "</>" },
      o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
      i = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (I, L) => {
          let F = I[0].length + I.index,
            q = I.input[F];
          if (q === "<" || q === ",") {
            L.ignoreMatch();
            return;
          }
          q === ">" && (n(I, { after: F }) || L.ignoreMatch());
          let f,
            v = I.input.substring(F);
          if ((f = v.match(/^\s*=/))) {
            L.ignoreMatch();
            return;
          }
          if ((f = v.match(/^\s+extends\s+/)) && f.index === 0) {
            L.ignoreMatch();
            return;
          }
        },
      },
      l = {
        $pattern: Q1,
        keyword: D7,
        literal: H7,
        built_in: U7,
        "variable.language": B7,
      },
      s = "[0-9](_?[0-9])*",
      u = `\\.(${s})`,
      c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      h = {
        className: "number",
        variants: [
          { begin: `(\\b(${c})((${u})|\\.)?|(${u}))[eE][+-]?(${s})\\b` },
          { begin: `\\b(${c})\\b((${u})\\b|\\.)?|(${u})\\b` },
          { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" },
        ],
        relevance: 0,
      },
      d = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: l,
        contains: [],
      },
      p = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, d],
          subLanguage: "xml",
        },
      },
      m = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, d],
          subLanguage: "css",
        },
      },
      g = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, d],
      },
      _ = {
        className: "comment",
        variants: [
          e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0,
                  },
                  {
                    className: "variable",
                    begin: a + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
        ],
      },
      C = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        p,
        m,
        g,
        { match: /\$\d+/ },
        h,
      ];
    d.contains = C.concat({
      begin: /\{/,
      end: /\}/,
      keywords: l,
      contains: ["self"].concat(C),
    });
    let M = [].concat(_, d.contains),
      y = M.concat([
        { begin: /\(/, end: /\)/, keywords: l, contains: ["self"].concat(M) },
      ]),
      w = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: l,
        contains: y,
      },
      E = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              a,
              /\s+/,
              /extends/,
              /\s+/,
              t.concat(a, "(", t.concat(/\./, a), ")*"),
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited",
            },
          },
          {
            match: [/class/, /\s+/, a],
            scope: { 1: "keyword", 3: "title.class" },
          },
        ],
      },
      x = {
        relevance: 0,
        match: t.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: "title.class",
        keywords: { _: [...V7, ...F7] },
      },
      R = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/,
      },
      T = {
        variants: [
          { match: [/function/, /\s+/, a, /(?=\s*\()/] },
          { match: [/function/, /\s*(?=\()/] },
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [w],
        illegal: /%/,
      },
      W = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant",
      };
    function O(I) {
      return t.concat("(?!", I.join("|"), ")");
    }
    let U = {
        match: t.concat(
          /\b/,
          O([...P7, "super", "import"]),
          a,
          t.lookahead(/\(/)
        ),
        className: "title.function",
        relevance: 0,
      },
      S = {
        begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
        end: a,
        excludeBegin: !0,
        keywords: "prototype",
        className: "property",
        relevance: 0,
      },
      V = {
        match: [/get|set/, /\s+/, a, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, w],
      },
      Q =
        "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
        e.UNDERSCORE_IDENT_RE +
        ")\\s*=>",
      z = {
        match: [
          /const|var|let/,
          /\s+/,
          a,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          t.lookahead(Q),
        ],
        keywords: "async",
        className: { 1: "keyword", 3: "title.function" },
        contains: [w],
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: l,
      exports: { PARAMS_CONTAINS: y, CLASS_REFERENCE: x },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
        R,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        p,
        m,
        g,
        _,
        { match: /\$\d+/ },
        h,
        x,
        { className: "attr", begin: a + t.lookahead(":"), relevance: 0 },
        z,
        {
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            _,
            e.REGEXP_MODE,
            {
              className: "function",
              begin: Q,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: l,
                      contains: y,
                    },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: r.begin, end: r.end },
                { match: o },
                { begin: i.begin, "on:begin": i.isTrulyOpeningTag, end: i.end },
              ],
              subLanguage: "xml",
              contains: [
                { begin: i.begin, end: i.end, skip: !0, contains: ["self"] },
              ],
            },
          ],
        },
        T,
        { beginKeywords: "while if switch catch for" },
        {
          begin:
            "\\b(?!function)" +
            e.UNDERSCORE_IDENT_RE +
            "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [
            w,
            e.inherit(e.TITLE_MODE, { begin: a, className: "title.function" }),
          ],
        },
        { match: /\.\.\./, relevance: 0 },
        S,
        { match: "\\$" + a, relevance: 0 },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [w],
        },
        U,
        W,
        E,
        V,
        { match: /\$[(.]/ },
      ],
    };
  }
  function $7(e) {
    let t = D6(e),
      n = Q1,
      a = [
        "any",
        "void",
        "number",
        "boolean",
        "string",
        "object",
        "never",
        "symbol",
        "bigint",
        "unknown",
      ],
      r = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: !0,
        contains: [t.exports.CLASS_REFERENCE],
      },
      o = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: !0,
        keywords: { keyword: "interface extends", built_in: a },
        contains: [t.exports.CLASS_REFERENCE],
      },
      i = { className: "meta", relevance: 10, begin: /^\s*['"]use strict['"]/ },
      l = [
        "type",
        "namespace",
        "interface",
        "public",
        "private",
        "protected",
        "implements",
        "declare",
        "abstract",
        "readonly",
        "enum",
        "override",
      ],
      s = {
        $pattern: Q1,
        keyword: D7.concat(l),
        literal: H7,
        built_in: U7.concat(a),
        "variable.language": B7,
      },
      u = { className: "meta", begin: "@" + n },
      c = (d, p, m) => {
        let g = d.contains.findIndex((b) => b.label === p);
        if (g === -1) throw new Error("can not find mode to replace");
        d.contains.splice(g, 1, m);
      };
    Object.assign(t.keywords, s),
      t.exports.PARAMS_CONTAINS.push(u),
      (t.contains = t.contains.concat([u, r, o])),
      c(t, "shebang", e.SHEBANG()),
      c(t, "use_strict", i);
    let h = t.contains.find((d) => d.label === "func.def");
    return (
      (h.relevance = 0),
      Object.assign(t, { name: "TypeScript", aliases: ["ts", "tsx"] }),
      t
    );
  }
  function q7(e) {
    let t = e.regex,
      n = { className: "string", begin: /"(""|[^/n])"C\b/ },
      a = {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [{ begin: /""/ }],
      },
      r = /\d{1,2}\/\d{1,2}\/\d{4}/,
      o = /\d{4}-\d{1,2}-\d{1,2}/,
      i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
      l = /\d{1,2}(:\d{1,2}){1,2}/,
      s = {
        className: "literal",
        variants: [
          { begin: t.concat(/# */, t.either(o, r), / *#/) },
          { begin: t.concat(/# */, l, / *#/) },
          { begin: t.concat(/# */, i, / *#/) },
          {
            begin: t.concat(/# */, t.either(o, r), / +/, t.either(i, l), / *#/),
          },
        ],
      },
      u = {
        className: "number",
        relevance: 0,
        variants: [
          {
            begin:
              /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
          },
          { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
          { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
          { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
          { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
        ],
      },
      c = { className: "label", begin: /^\w+:/ },
      h = e.COMMENT(/'''/, /$/, {
        contains: [{ className: "doctag", begin: /<\/?/, end: />/ }],
      }),
      d = e.COMMENT(null, /$/, {
        variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }],
      });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword:
          "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in:
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
        type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
        literal: "true false nothing",
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        n,
        a,
        s,
        u,
        c,
        h,
        d,
        {
          className: "meta",
          begin:
            /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: {
            keyword:
              "const disable else elseif enable end externalsource if region then",
          },
          contains: [d],
        },
      ],
    };
  }
  function G7(e) {
    e.regex;
    let t = e.COMMENT(/\(;/, /;\)/);
    t.contains.push("self");
    let n = e.COMMENT(/;;/, /$/),
      a = [
        "anyfunc",
        "block",
        "br",
        "br_if",
        "br_table",
        "call",
        "call_indirect",
        "data",
        "drop",
        "elem",
        "else",
        "end",
        "export",
        "func",
        "global.get",
        "global.set",
        "local.get",
        "local.set",
        "local.tee",
        "get_global",
        "get_local",
        "global",
        "if",
        "import",
        "local",
        "loop",
        "memory",
        "memory.grow",
        "memory.size",
        "module",
        "mut",
        "nop",
        "offset",
        "param",
        "result",
        "return",
        "select",
        "set_global",
        "set_local",
        "start",
        "table",
        "tee_local",
        "then",
        "type",
        "unreachable",
      ],
      r = {
        begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
        className: { 1: "keyword", 3: "title.function" },
      },
      o = { className: "variable", begin: /\$[\w_]+/ },
      i = { match: /(\((?!;)|\))+/, className: "punctuation", relevance: 0 },
      l = {
        className: "number",
        relevance: 0,
        match:
          /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
      },
      s = { match: /(i32|i64|f32|f64)(?!\.)/, className: "type" },
      u = {
        className: "keyword",
        match:
          /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/,
      };
    return {
      name: "WebAssembly",
      keywords: { $pattern: /[\w.]+/, keyword: a },
      contains: [
        n,
        t,
        {
          match: [/(?:offset|align)/, /\s*/, /=/],
          className: { 1: "keyword", 3: "operator" },
        },
        o,
        i,
        r,
        e.QUOTE_STRING_MODE,
        s,
        u,
        l,
      ],
    };
  }
  function W7(e) {
    let t = e.regex,
      n = t.concat(
        /[\p{L}_]/u,
        t.optional(/[\p{L}0-9_.-]*:/u),
        /[\p{L}0-9_.-]*/u
      ),
      a = /[\p{L}0-9._:-]+/u,
      r = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
      o = {
        begin: /\s/,
        contains: [
          { className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
        ],
      },
      i = e.inherit(o, { begin: /\(/, end: /\)/ }),
      l = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
      s = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
      u = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [
          { className: "attr", begin: a, relevance: 0 },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: "string",
                endsParent: !0,
                variants: [
                  { begin: /"/, end: /"/, contains: [r] },
                  { begin: /'/, end: /'/, contains: [r] },
                  { begin: /[^\s"'=<>`]+/ },
                ],
              },
            ],
          },
        ],
      };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg",
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            o,
            s,
            l,
            i,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [o, i, s, l],
                },
              ],
            },
          ],
        },
        e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
        { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
        r,
        {
          className: "meta",
          end: /\?>/,
          variants: [
            { begin: /<\?xml/, relevance: 10, contains: [s] },
            { begin: /<\?[a-z][a-z0-9]+/ },
          ],
        },
        {
          className: "tag",
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [u],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: ["css", "xml"],
          },
        },
        {
          className: "tag",
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [u],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: ["javascript", "handlebars", "xml"],
          },
        },
        { className: "tag", begin: /<>|<\/>/ },
        {
          className: "tag",
          begin: t.concat(
            /</,
            t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))
          ),
          end: /\/?>/,
          contains: [{ className: "name", begin: n, relevance: 0, starts: u }],
        },
        {
          className: "tag",
          begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
          contains: [
            { className: "name", begin: n, relevance: 0 },
            { begin: />/, relevance: 0, endsParent: !0 },
          ],
        },
      ],
    };
  }
  function K7(e) {
    let t = "true false yes no null",
      n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
      a = {
        className: "attr",
        variants: [
          { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
          { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
          { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" },
        ],
      },
      r = {
        className: "template-variable",
        variants: [
          { begin: /\{\{/, end: /\}\}/ },
          { begin: /%\{/, end: /\}/ },
        ],
      },
      o = {
        className: "string",
        relevance: 0,
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /\S+/ },
        ],
        contains: [e.BACKSLASH_ESCAPE, r],
      },
      i = e.inherit(o, {
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /[^\s,{}[\]]+/ },
        ],
      }),
      l = "[0-9]{4}(-[0-9][0-9]){0,2}",
      s = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
      u = "(\\.[0-9]*)?",
      c = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
      h = { className: "number", begin: "\\b" + l + s + u + c + "\\b" },
      d = {
        end: ",",
        endsWithParent: !0,
        excludeEnd: !0,
        keywords: t,
        relevance: 0,
      },
      p = {
        begin: /\{/,
        end: /\}/,
        contains: [d],
        illegal: "\\n",
        relevance: 0,
      },
      m = {
        begin: "\\[",
        end: "\\]",
        contains: [d],
        illegal: "\\n",
        relevance: 0,
      },
      g = [
        a,
        { className: "meta", begin: "^---\\s*$", relevance: 10 },
        {
          className: "string",
          begin:
            "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
        },
        {
          begin: "<%[%=-]?",
          end: "[%-]?%>",
          subLanguage: "ruby",
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
        },
        { className: "type", begin: "!\\w+!" + n },
        { className: "type", begin: "!<" + n + ">" },
        { className: "type", begin: "!" + n },
        { className: "type", begin: "!!" + n },
        { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
        { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
        { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
        e.HASH_COMMENT_MODE,
        { beginKeywords: t, keywords: { literal: t } },
        h,
        { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
        p,
        m,
        o,
      ],
      b = [...g];
    return (
      b.pop(),
      b.push(i),
      (d.contains = b),
      { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: g }
    );
  }
  var pl = Be(dl(), 1);
  var nt = pl.default;
  var ml = Be(hl(), 1),
    P5 = Object.assign(Ut(Error), {
      eval: Ut(EvalError),
      range: Ut(RangeError),
      reference: Ut(ReferenceError),
      syntax: Ut(SyntaxError),
      type: Ut(TypeError),
      uri: Ut(URIError),
    });
  function Ut(e) {
    return (t.displayName = e.displayName || e.name), t;
    function t(n, ...a) {
      let r = n && (0, ml.default)(n, ...a);
      return new e(r);
    }
  }
  var Sd = {}.hasOwnProperty,
    fl = "hljs-";
  function gl(e, t, n = {}) {
    let a = n.prefix;
    if (typeof e != "string")
      throw P5("Expected `string` for name, got `%s`", e);
    if (!nt.getLanguage(e))
      throw P5("Unknown language: `%s` is not registered", e);
    if (typeof t != "string")
      throw P5("Expected `string` for value, got `%s`", t);
    a == null && (a = fl), nt.configure({ __emitter: Kn, classPrefix: a });
    let r = nt.highlight(t, { language: e, ignoreIllegals: !0 });
    if ((nt.configure({}), r.errorRaised)) throw r.errorRaised;
    return (
      (r._emitter.root.data.language = r.language),
      (r._emitter.root.data.relevance = r.relevance),
      r._emitter.root
    );
  }
  function Cd(e, t = {}) {
    let n = t.subset || nt.listLanguages(),
      a = t.prefix,
      r = -1,
      o = {
        type: "root",
        data: { language: null, relevance: 0 },
        children: [],
      };
    if ((a == null && (a = fl), typeof e != "string"))
      throw P5("Expected `string` for value, got `%s`", e);
    for (; ++r < n.length; ) {
      let i = n[r];
      if (!nt.getLanguage(i)) continue;
      let l = gl(i, e, t);
      l.data.relevance > o.data.relevance && (o = l);
    }
    return o;
  }
  function Id(e, t) {
    nt.registerLanguage(e, t);
  }
  var Rd = function (e, t) {
    if (typeof e == "string") nt.registerAliases(t, { languageName: e });
    else {
      let n;
      for (n in e)
        Sd.call(e, n) && nt.registerAliases(e[n], { languageName: n });
    }
  };
  function kd(e) {
    return Boolean(nt.getLanguage(e));
  }
  function Nd() {
    return nt.listLanguages();
  }
  var Kn = class {
      constructor(t) {
        (this.options = t),
          (this.root = {
            type: "root",
            data: { language: null, relevance: 0 },
            children: [],
          }),
          (this.stack = [this.root]);
      }
      addText(t) {
        if (t === "") return;
        let n = this.stack[this.stack.length - 1],
          a = n.children[n.children.length - 1];
        a && a.type === "text"
          ? (a.value += t)
          : n.children.push({ type: "text", value: t });
      }
      addKeyword(t, n) {
        this.openNode(n), this.addText(t), this.closeNode();
      }
      addSublanguage(t, n) {
        let a = this.stack[this.stack.length - 1],
          r = t.root.children;
        n
          ? a.children.push({
              type: "element",
              tagName: "span",
              properties: { className: [n] },
              children: r,
            })
          : a.children.push(...r);
      }
      openNode(t) {
        let n = t
            .split(".")
            .map((o, i) =>
              i ? o + "_".repeat(i) : this.options.classPrefix + o
            ),
          a = this.stack[this.stack.length - 1],
          r = {
            type: "element",
            tagName: "span",
            properties: { className: n },
            children: [],
          };
        a.children.push(r), this.stack.push(r);
      }
      closeNode() {
        this.stack.pop();
      }
      closeAllNodes() {}
      finalize() {}
      toHTML() {
        return "";
      }
    },
    j = {
      highlight: gl,
      highlightAuto: Cd,
      registerLanguage: Id,
      registered: kd,
      listLanguages: Nd,
      registerAlias: Rd,
    };
  j.registerLanguage("arduino", $i);
  j.registerLanguage("bash", qi);
  j.registerLanguage("c", Gi);
  j.registerLanguage("cpp", Wi);
  j.registerLanguage("csharp", Ki);
  j.registerLanguage("css", Yi);
  j.registerLanguage("diff", Qi);
  j.registerLanguage("go", Zi);
  j.registerLanguage("graphql", ji);
  j.registerLanguage("ini", Xi);
  j.registerLanguage("java", t7);
  j.registerLanguage("javascript", i7);
  j.registerLanguage("json", l7);
  j.registerLanguage("kotlin", c7);
  j.registerLanguage("less", d7);
  j.registerLanguage("lua", p7);
  j.registerLanguage("makefile", h7);
  j.registerLanguage("markdown", m7);
  j.registerLanguage("objectivec", f7);
  j.registerLanguage("perl", g7);
  j.registerLanguage("php", v7);
  j.registerLanguage("php-template", b7);
  j.registerLanguage("plaintext", E7);
  j.registerLanguage("python", _7);
  j.registerLanguage("python-repl", A7);
  j.registerLanguage("r", y7);
  j.registerLanguage("ruby", w7);
  j.registerLanguage("rust", x7);
  j.registerLanguage("scss", M7);
  j.registerLanguage("shell", z7);
  j.registerLanguage("sql", S7);
  j.registerLanguage("swift", O7);
  j.registerLanguage("typescript", $7);
  j.registerLanguage("vbnet", q7);
  j.registerLanguage("wasm", G7);
  j.registerLanguage("xml", W7);
  j.registerLanguage("yaml", K7);
  var Ct = function (e) {
    if (e == null) return Yn;
    if (typeof e == "string") return Ld(e);
    if (typeof e == "object") return Td(e);
    if (typeof e == "function") return vl(e);
    throw new Error("Expected function, string, or array as test");
  };
  function Td(e) {
    let t = [],
      n = -1;
    for (; ++n < e.length; ) t[n] = Ct(e[n]);
    return vl(a);
    function a(...r) {
      let o = -1;
      for (; ++o < t.length; ) if (t[o].call(this, ...r)) return !0;
      return !1;
    }
  }
  function Ld(e) {
    return t;
    function t(n) {
      return Yn(n) && n.tagName === e;
    }
  }
  function vl(e) {
    return t;
    function t(n, ...a) {
      return Yn(n) && Boolean(e.call(this, n, ...a));
    }
  }
  function Yn(e) {
    return Boolean(
      e &&
        typeof e == "object" &&
        e.type === "element" &&
        typeof e.tagName == "string"
    );
  }
  var Qn = function (e, t, n) {
    var a = N5(n);
    if (!e || !e.type || !e.children) throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (((t = e.children.indexOf(t)), t < 0))
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (a(e.children[t], t, e)) return e.children[t];
    return null;
  };
  var bl = /\n/g,
    El = /[\t ]+/g,
    Zn = Ct("br"),
    Od = Ct("p"),
    _l = Ct(["th", "td"]),
    Al = Ct("tr"),
    Dd = Ct([
      "datalist",
      "head",
      "noembed",
      "noframes",
      "noscript",
      "rp",
      "script",
      "style",
      "template",
      "title",
      Pd,
      Bd,
    ]),
    yl = Ct([
      "address",
      "article",
      "aside",
      "blockquote",
      "body",
      "caption",
      "center",
      "dd",
      "dialog",
      "dir",
      "dl",
      "dt",
      "div",
      "figure",
      "figcaption",
      "footer",
      "form,",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "html",
      "legend",
      "listing",
      "main",
      "menu",
      "nav",
      "ol",
      "p",
      "plaintext",
      "pre",
      "section",
      "ul",
      "xmp",
    ]);
  function jn(e, t = {}) {
    let n = e.children || [],
      a = yl(e),
      r = Ml(e, {
        whitespace: t.whitespace || "normal",
        breakBefore: !1,
        breakAfter: !1,
      }),
      o = -1,
      i,
      l,
      s;
    if (e.type === "text" || e.type === "comment")
      return xl(e, { whitespace: r, breakBefore: !0, breakAfter: !0 });
    for (i = []; ++o < n.length; )
      i = i.concat(
        wl(n[o], e, {
          whitespace: r,
          breakBefore: o ? null : a,
          breakAfter: o < n.length - 1 ? Zn(n[o + 1]) : a,
        })
      );
    o = -1;
    let u = [];
    for (; ++o < i.length; )
      (l = i[o]),
        typeof l == "number"
          ? s !== void 0 && l > s && (s = l)
          : l &&
            (s &&
              u.push(
                `
`.repeat(s)
              ),
            (s = 0),
            u.push(l));
    return u.join("");
  }
  function wl(e, t, n) {
    return e.type === "element"
      ? Hd(e, t, n)
      : e.type === "text"
      ? [n.whitespace === "normal" ? xl(e, n) : Vd(e)]
      : [];
  }
  function Hd(e, t, n) {
    let a = Ml(e, n),
      r = e.children || [],
      o = -1,
      i = [],
      l,
      s;
    if (Dd(e)) return i;
    for (
      Zn(e) || (Al(e) && Qn(t, e, Al))
        ? (s = `
`)
        : Od(e)
        ? ((l = 2), (s = 2))
        : yl(e) && ((l = 1), (s = 1));
      ++o < r.length;

    )
      i = i.concat(
        wl(r[o], e, {
          whitespace: a,
          breakBefore: o ? void 0 : l,
          breakAfter: o < r.length - 1 ? Zn(r[o + 1]) : s,
        })
      );
    return (
      _l(e) && Qn(t, e, _l) && i.push("	"), l && i.unshift(l), s && i.push(s), i
    );
  }
  function xl(e, t) {
    let n = String(e.value),
      a = [],
      r = [],
      o = 0,
      i = -1,
      l,
      s,
      u;
    for (; o < n.length; )
      (bl.lastIndex = o),
        (l = bl.exec(n)),
        (s = l ? l.index : n.length),
        a.push(
          Fd(
            n
              .slice(o, s)
              .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
            t.breakBefore,
            t.breakAfter
          )
        ),
        (o = s + 1);
    for (; ++i < a.length; )
      a[i].charCodeAt(a[i].length - 1) === 8203 ||
      (i < a.length - 1 && a[i + 1].charCodeAt(0) === 8203)
        ? (r.push(a[i]), (u = ""))
        : a[i] && (u && r.push(u), r.push(a[i]), (u = " "));
    return r.join("");
  }
  function Vd(e) {
    return String(e.value);
  }
  function Fd(e, t, n) {
    let a = [],
      r = 0,
      o,
      i;
    for (; r < e.length; )
      (El.lastIndex = r),
        (o = El.exec(e)),
        (i = o ? o.index : e.length),
        !r && !i && o && !t && a.push(""),
        r !== i && a.push(e.slice(r, i)),
        (r = o ? i + o[0].length : i);
    return r !== i && !n && a.push(""), a.join(" ");
  }
  function Ml(e, t) {
    let n;
    if (e.type === "element")
      switch (((n = e.properties || {}), e.tagName)) {
        case "listing":
        case "plaintext":
        case "xmp":
          return "pre";
        case "nobr":
          return "nowrap";
        case "pre":
          return n.wrap ? "pre-wrap" : "pre";
        case "td":
        case "th":
          return n.noWrap ? "nowrap" : t.whitespace;
        case "textarea":
          return "pre-wrap";
        default:
      }
    return t.whitespace;
  }
  function Pd(e) {
    return Boolean((e.properties || {}).hidden);
  }
  function Bd(e) {
    return e.tagName === "dialog" && !(e.properties || {}).open;
  }
  var Ud = {}.hasOwnProperty;
  function e0(e = {}) {
    let {
        aliases: t,
        languages: n,
        prefix: a,
        plainText: r,
        ignoreMissing: o,
        subset: i,
        detect: l,
      } = e,
      s = "hljs";
    if ((t && j.registerAlias(t), n)) {
      let u;
      for (u in n) Ud.call(n, u) && j.registerLanguage(u, n[u]);
    }
    if (a) {
      let u = a.indexOf("-");
      s = u > -1 ? a.slice(0, u) : a;
    }
    return (u, c) => {
      Mt(u, "element", (h, d, p) => {
        let m = p;
        if (
          !m ||
          !("tagName" in m) ||
          m.tagName !== "pre" ||
          h.tagName !== "code" ||
          !h.properties
        )
          return;
        let g = $d(h);
        if (g === !1 || (!g && !l) || (g && r && r.includes(g))) return;
        Array.isArray(h.properties.className) || (h.properties.className = []),
          h.properties.className.includes(s) ||
            h.properties.className.unshift(s);
        let b;
        try {
          b = g
            ? j.highlight(g, jn(m), { prefix: a })
            : j.highlightAuto(jn(m), { prefix: a, subset: i });
        } catch (_) {
          let C = _;
          (!o || !/Unknown language/.test(C.message)) &&
            c.fail(C, h, "rehype-highlight:missing-language");
          return;
        }
        !g &&
          b.data.language &&
          h.properties.className.push("language-" + b.data.language),
          Array.isArray(b.children) &&
            b.children.length > 0 &&
            (h.children = b.children);
      });
    };
  }
  function $d(e) {
    let t = e.properties && e.properties.className,
      n = -1;
    if (Array.isArray(t))
      for (; ++n < t.length; ) {
        let a = String(t[n]);
        if (a === "no-highlight" || a === "nohighlight") return !1;
        if (a.slice(0, 5) === "lang-") return a.slice(5);
        if (a.slice(0, 9) === "language-") return a.slice(9);
      }
  }
  var ea = Be(Qt());
  function t0(e, t) {
    fetch("https://api.axiom.co/v1/datasets/extension/ingest", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-ndjson",
        Authorization: "Bearer xaat-fcafae5c-a800-47ca-896a-1d4157c491d0",
      },
      body: JSON.stringify({ event: e, ...(t || {}) }),
    }).catch((n) => console.error("captureEvent error", n));
  }
  at();
  Xt();
  var Xn = Be(Qt());
  It();
  It();
  var qd = 0;
  function B(e, t, n, a, r) {
    var o,
      i,
      l = {};
    for (i in t) i == "ref" ? (o = t[i]) : (l[i] = t[i]);
    var s = {
      type: e,
      props: l,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --qd,
      __source: r,
      __self: a,
    };
    if (typeof e == "function" && (o = e.defaultProps))
      for (i in o) l[i] === void 0 && (l[i] = o[i]);
    return P.vnode && P.vnode(s), s;
  }
  function Gd(e) {
    let [t, n] = ye(!1),
      [a, r] = ye(null),
      o = Ne(async () => {
        a ||
          (r("thumbsUp"),
          await Xn.default.runtime.sendMessage({
            type: "FEEDBACK",
            data: {
              conversation_id: e.conversationId,
              message_id: e.messageId,
              rating: "thumbsUp",
            },
          }));
      }, [a, e.conversationId, e.messageId]),
      i = Ne(async () => {
        a ||
          (r("thumbsDown"),
          await Xn.default.runtime.sendMessage({
            type: "FEEDBACK",
            data: {
              conversation_id: e.conversationId,
              message_id: e.messageId,
              rating: "thumbsDown",
              text: "",
              tags: [],
            },
          }));
      }, [a, e.conversationId, e.messageId]),
      l = Ne(async () => {
        await navigator.clipboard.writeText(e.answerText), n(!0);
      }, [e.answerText]);
    return (
      qe(() => {
        if (t) {
          let s = setTimeout(() => {
            n(!1);
          }, 500);
          return () => clearTimeout(s);
        }
      }, [t]),
      B("div", {
        className: "gpt-feedback",
        children: [
          B("span", {
            onClick: o,
            className: a === "thumbsUp" ? "gpt-feedback-selected" : void 0,
            children: B(I2, { size: 14 }),
          }),
          B("span", {
            onClick: i,
            className: a === "thumbsDown" ? "gpt-feedback-selected" : void 0,
            children: B(C2, { size: 14 }),
          }),
          B("span", {
            onClick: l,
            children: t ? B(w2, { size: 14 }) : B(x2, { size: 14 }),
          }),
        ],
      })
    );
  }
  var zl = e5(Gd);
  var Jn = Be(Qt());
  function n0(e) {
    for (let t of e) {
      let n = document.querySelector(t);
      if (n) return n;
    }
  }
  function Sl(e) {
    return (
      e.endsWith("?") ||
      e.endsWith("\uFF1F") ||
      e.endsWith("\u061F") ||
      e.endsWith("\u2E2E")
    );
  }
  function Cl() {
    var e;
    return (e = navigator.brave) == null ? void 0 : e.isBrave();
  }
  async function Il() {
    let { ratingTipShowTimes: e = 0 } = await Jn.default.storage.local.get(
      "ratingTipShowTimes"
    );
    return e >= 5
      ? !1
      : (await Jn.default.storage.local.set({ ratingTipShowTimes: e + 1 }),
        e >= 2);
  }
  function Wd(e) {
    let [t, n] = ye(null),
      [a, r] = ye(""),
      [o, i] = ye(0),
      [l, s] = ye(!1),
      [u, c] = ye(!1),
      [h, d] = ye();
    qe(() => {
      var m;
      (m = e.onStatusChange) == null || m.call(e, h);
    }, [e, h]),
      qe(() => {
        let m = ea.default.runtime.connect(),
          g = (b) => {
            b.text
              ? (n(b), d("success"))
              : b.error
              ? (r(b.error), d("error"))
              : b.event === "DONE" && s(!0);
          };
        return (
          m.onMessage.addListener(g),
          m.postMessage({ question: e.question }),
          () => {
            m.onMessage.removeListener(g), m.disconnect();
          }
        );
      }, [e.question, o]),
      qe(() => {
        let m = () => {
          a &&
            (a == "UNAUTHORIZED" || a === "CLOUDFLARE") &&
            (r(""), i((g) => g + 1));
        };
        return (
          window.addEventListener("focus", m),
          () => {
            window.removeEventListener("focus", m);
          }
        );
      }, [a]),
      qe(() => {
        Il().then((m) => c(m));
      }, []),
      qe(() => {
        h === "success" &&
          t0("show_answer", {
            host: location.host,
            language: navigator.language,
          });
      }, [e.question, h]);
    let p = Ne(() => {
      ea.default.runtime.sendMessage({ type: "OPEN_OPTIONS_PAGE" });
    }, []);
    return t
      ? B("div", {
          className: "markdown-body gpt-markdown",
          id: "gpt-answer",
          dir: "auto",
          children: [
            B("div", {
              className: "gpt-header",
              children: [
                B("span", { className: "font-bold", children: "Search Engine 2.0" }),
                B("span", {
                  className: "cursor-pointer leading-[0]",
                  onClick: p,
                  children: B(M2, { size: 14 }),
                }),
                B(zl, {
                  messageId: t.messageId,
                  conversationId: t.conversationId,
                  answerText: t.text,
                }),
              ],
            }),
            B(O5, { rehypePlugins: [[e0, { detect: !0 }]], children: t.text }),
            l &&
              u &&
              B("p", {
                className: "italic mt-2",
                
              }),
          ],
        })
      : a === "UNAUTHORIZED" || a === "CLOUDFLARE"
      ? B("p", {
          children: [
            "Please login at ",
            " ",
            B("a", {
              href: "https://chat.openai.com",
              target: "_blank",
              rel: "noreferrer",
              children: "chat.openai.com",
            }),
            
            
            o > 0 &&
              (() =>
                Cl()
                  ? B("span", {
                      className: "block mt-2",
                      children: [
                        "Still not working? Follow",
                        " ",
                        B("a", {
                          href: "https://github.com/rakiburrahamanCS",
                          children: "Brave Troubleshooting",
                        }),
                      ],
                    })
                  : B("span", {
                      className: "italic block mt-2 text-xs",
                      children:
                        "OpenAI requires passing a security check every once in a while. If this keeps happening, change AI provider to OpenAI API in the extension options.",
                    }))(),
          ],
        })
      : a
      ? B("p", {
          children: [
            "ChatGPT is now at its limit. Please try again after a while.",
            B("span", { className: "break-all block", children: a }),
          ],
        })
      : B("p", {
          className: "text-[#b6b8ba] animate-pulse",
          children: "generating answer from ChatGPT",
        });
  }
  var a0 = e5(Wd);
  function Kd(e) {
    let [t, n] = ye(!1);
    return e.triggerMode === "always"
      ? B(a0, { question: e.question, onStatusChange: e.onStatusChange })
      : e.triggerMode === "questionMark"
      ? Sl(e.question.trim())
        ? B(a0, { question: e.question, onStatusChange: e.onStatusChange })
        : B("p", {
            className: "icon-and-text",
            children: [
              B(z2, { size: "small" }),
              " Trigger ChatGPT by appending a question mark after your query",
            ],
          })
      : t
      ? B(a0, { question: e.question, onStatusChange: e.onStatusChange })
      : B("p", {
          className: "icon-and-text cursor-pointer",
          onClick: () => n(!0),
          children: [B(S2, { size: "small" }), " Ask ChatGPT for this query"],
        });
  }
  var Rl = Kd;
  at();
  function Yd({ data: e }) {
    let t = Ne(() => {
      t0("click_promotion", { link: e.url });
    }, [e.url]);
    return B("a", {
      href: e.url,
      target: "_blank",
      rel: "noreferrer",
      onClick: t,
      className: "gpt-promotion-link",
      children: B("div", {
        className: "chat-gpt-card flex flex-row gap-2 mt-5 gpt-promotion",
        children: [
          !!e.image &&
            B("img", {
              src: e.image.url,
              width: e.image.size || 100,
              height: e.image.size || 100,
            }),
          B("div", {
            className: "flex flex-col justify-between",
            children: [
              B("div", {
                children: [
                  !!e.title &&
                    B("p", { className: "font-bold", children: e.title }),
                  !!e.text && B("p", { children: e.text }),
                ],
              }),
              B("div", {
                className: "flex flex-row justify-between",
                children: [
                  !!e.footer &&
                    B("span", {
                      className: "text-xs underline",
                      children: e.footer.text,
                    }),
                  !!e.label &&
                    B("a", {
                      href: e.label.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "text-xs rounded-sm border border-solid px-[2px] text-inherit",
                      onClick: t,
                      children: e.label.text,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
  var kl = Yd;
  function Qd(e) {
    let [t, n] = ye(),
      a = A2(t === "success" ? "promotion" : void 0, y2, {
        shouldRetryOnError: !1,
      });
    return B($e, {
      children: [
        B("div", {
          className: "chat-gpt-card",
          children: B(Rl, {
            question: e.question,
            triggerMode: e.triggerMode,
            onStatusChange: n,
          }),
        }),
        a.data && B(kl, { data: a.data }),
      ],
    });
  }
  var Nl = Qd;
  var ta = {
    google: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: ["#rhs"],
      appendContainerQuery: ["#rcnt"],
    },
    bing: {
      inputQuery: ["[name='q']"],
      sidebarContainerQuery: ["#b_context"],
      appendContainerQuery: [],
    },
    yahoo: {
      inputQuery: ["input[name='p']"],
      sidebarContainerQuery: [
        "#right",
        ".Contents__inner.Contents__inner--sub",
      ],
      appendContainerQuery: ["#cols", "#contents__wrap"],
    },
    duckduckgo: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: [".results--sidebar.js-results-sidebar"],
      appendContainerQuery: ["#links_wrapper"],
    },
    baidu: {
      inputQuery: ["input[name='wd']"],
      sidebarContainerQuery: ["#content_right"],
      appendContainerQuery: ["#container"],
      watchRouteChange(e) {
        let t = document.getElementById("wrapper_wrapper");
        new MutationObserver(function (a) {
          for (let r of a)
            if (r.type === "childList") {
              for (let o of r.addedNodes)
                if ("id" in o && o.id === "container") {
                  e();
                  return;
                }
            }
        }).observe(t, { childList: !0 });
      },
    },
    kagi: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: [".right-content-box._0_right_sidebar"],
      appendContainerQuery: ["#_0_app_content"],
    },
    yandex: {
      inputQuery: ["input[name='text']"],
      sidebarContainerQuery: ["#search-result-aside"],
      appendContainerQuery: [],
    },
    naver: {
      inputQuery: ["input[name='query']"],
      sidebarContainerQuery: ["#sub_pack"],
      appendContainerQuery: ["#content"],
    },
    brave: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: ["#side-right"],
      appendContainerQuery: [],
    },
    searx: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: ["#sidebar_results"],
      appendContainerQuery: [],
    },
  };
  async function Zd(e, t) {
    let n = document.createElement("div");
    n.className = "chat-gpt-container";
    let a = await g0(),
      r;
    a.theme === "auto" ? (r = cr()) : (r = a.theme),
      r === "dark" ? n.classList.add("gpt-dark") : n.classList.add("gpt-light");
    let o = n0(t.sidebarContainerQuery);
    if (o) o.prepend(n);
    else {
      n.classList.add("sidebar-free");
      let i = n0(t.appendContainerQuery);
      i && i.appendChild(n);
    }
    bt(B(Nl, { question: e, triggerMode: a.triggerMode || "always" }), n);
  }
  var jd = new RegExp(Object.keys(ta).join("|")),
    Tl = location.hostname.match(jd)[0],
    r0 = ta[Tl];
  async function Ll() {
    let e = n0(r0.inputQuery);
    if (e && e.value) {
      console.debug("Mount ChatGPT on", Tl);
      let t = await g0(),
        n = t.language === "auto" ? e.value : `${e.value}(in ${t.language})`;
      Zd(n, r0);
    }
  }
  Ll();
  r0.watchRouteChange && r0.watchRouteChange(Ll);
})();
