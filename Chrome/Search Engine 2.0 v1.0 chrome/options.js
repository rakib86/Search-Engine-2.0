"use strict";
(() => {
  var nc = Object.create;
  var Ht = Object.defineProperty;
  var ic = Object.getOwnPropertyDescriptor;
  var sc = Object.getOwnPropertyNames;
  var lc = Object.getPrototypeOf,
    cc = Object.prototype.hasOwnProperty;
  var Vt = (t, e) => () => (t && (e = t((t = 0))), e);
  var qr = (t, e) => () => (
      e || t((e = { exports: {} }).exports, e), e.exports
    ),
    uc = (t, e) => {
      for (var r in e) Ht(t, r, { get: e[r], enumerable: !0 });
    },
    Ma = (t, e, r, o) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let a of sc(e))
          !cc.call(t, a) &&
            a !== r &&
            Ht(t, a, {
              get: () => e[a],
              enumerable: !(o = ic(e, a)) || o.enumerable,
            });
      return t;
    };
  var $r = (t, e, r) => (
      (r = t != null ? nc(lc(t)) : {}),
      Ma(
        e || !t || !t.__esModule
          ? Ht(r, "default", { value: t, enumerable: !0 })
          : r,
        t
      )
    ),
    mc = (t) => Ma(Ht({}, "__esModule", { value: !0 }), t);
  function De(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function Ua(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function Te(t, e, r) {
    var o,
      a,
      i,
      s = {};
    for (i in e)
      i == "key" ? (o = e[i]) : i == "ref" ? (a = e[i]) : (s[i] = e[i]);
    if (
      (arguments.length > 2 &&
        (s.children = arguments.length > 3 ? St.call(arguments, 2) : r),
      typeof t == "function" && t.defaultProps != null)
    )
      for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
    return _t(t, s, o, a, null);
  }
  function _t(t, e, r, o, a) {
    var i = {
      type: t,
      props: e,
      key: r,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: a ?? ++Ha,
    };
    return a == null && L.vnode != null && L.vnode(i), i;
  }
  function $t() {
    return { current: null };
  }
  function Pe(t) {
    return t.children;
  }
  function Re(t, e) {
    (this.props = t), (this.context = e);
  }
  function wt(t, e) {
    if (e == null) return t.__ ? wt(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var r; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
    return typeof t.type == "function" ? wt(t) : null;
  }
  function qa(t) {
    var e, r;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
        if ((r = t.__k[e]) != null && r.__e != null) {
          t.__e = t.__c.base = r.__e;
          break;
        }
      return qa(t);
    }
  }
  function Xr(t) {
    ((!t.__d && (t.__d = !0) && yt.push(t) && !Ut.__r++) ||
      za !== L.debounceRendering) &&
      ((za = L.debounceRendering) || setTimeout)(Ut);
  }
  function Ut() {
    for (var t; (Ut.__r = yt.length); )
      (t = yt.sort(function (e, r) {
        return e.__v.__b - r.__v.__b;
      })),
        (yt = []),
        t.some(function (e) {
          var r, o, a, i, s, l;
          e.__d &&
            ((s = (i = (r = e).__v).__e),
            (l = r.__P) &&
              ((o = []),
              ((a = De({}, i)).__v = i.__v + 1),
              Jr(
                l,
                i,
                a,
                r.__n,
                l.ownerSVGElement !== void 0,
                i.__h != null ? [s] : null,
                o,
                s ?? wt(i),
                i.__h
              ),
              Ka(o, i),
              i.__e != s && qa(i)));
        });
  }
  function $a(t, e, r, o, a, i, s, l, m, c) {
    var n,
      d,
      u,
      p,
      h,
      _,
      x,
      A = (o && o.__k) || Fa,
      y = A.length;
    for (r.__k = [], n = 0; n < e.length; n++)
      if (
        (p = r.__k[n] =
          (p = e[n]) == null || typeof p == "boolean"
            ? null
            : typeof p == "string" ||
              typeof p == "number" ||
              typeof p == "bigint"
            ? _t(null, p, null, null, p)
            : Array.isArray(p)
            ? _t(Pe, { children: p }, null, null, null)
            : p.__b > 0
            ? _t(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v)
            : p) != null
      ) {
        if (
          ((p.__ = r),
          (p.__b = r.__b + 1),
          (u = A[n]) === null || (u && p.key == u.key && p.type === u.type))
        )
          A[n] = void 0;
        else
          for (d = 0; d < y; d++) {
            if ((u = A[d]) && p.key == u.key && p.type === u.type) {
              A[d] = void 0;
              break;
            }
            u = null;
          }
        Jr(t, p, (u = u || Ft), a, i, s, l, m, c),
          (h = p.__e),
          (d = p.ref) &&
            u.ref != d &&
            (x || (x = []),
            u.ref && x.push(u.ref, null, p),
            x.push(d, p.__c || h, p)),
          h != null
            ? (_ == null && (_ = h),
              typeof p.type == "function" && p.__k === u.__k
                ? (p.__d = m = Xa(p, m, t))
                : (m = Ja(t, p, u, A, h, m)),
              typeof r.type == "function" && (r.__d = m))
            : m && u.__e == m && m.parentNode != t && (m = wt(u));
      }
    for (r.__e = _, n = y; n--; ) A[n] != null && Za(A[n], A[n]);
    if (x) for (n = 0; n < x.length; n++) Ya(x[n], x[++n], x[++n]);
  }
  function Xa(t, e, r) {
    for (var o, a = t.__k, i = 0; a && i < a.length; i++)
      (o = a[i]) &&
        ((o.__ = t),
        (e =
          typeof o.type == "function"
            ? Xa(o, e, r)
            : Ja(r, o, o, a, o.__e, e)));
    return e;
  }
  function Le(t, e) {
    return (
      (e = e || []),
      t == null ||
        typeof t == "boolean" ||
        (Array.isArray(t)
          ? t.some(function (r) {
              Le(r, e);
            })
          : e.push(t)),
      e
    );
  }
  function Ja(t, e, r, o, a, i) {
    var s, l, m;
    if (e.__d !== void 0) (s = e.__d), (e.__d = void 0);
    else if (r == null || a != i || a.parentNode == null)
      e: if (i == null || i.parentNode !== t) t.appendChild(a), (s = null);
      else {
        for (l = i, m = 0; (l = l.nextSibling) && m < o.length; m += 1)
          if (l == a) break e;
        t.insertBefore(a, i), (s = i);
      }
    return s !== void 0 ? s : a.nextSibling;
  }
  function pc(t, e, r, o, a) {
    var i;
    for (i in r)
      i === "children" || i === "key" || i in e || qt(t, i, null, r[i], o);
    for (i in e)
      (a && typeof e[i] != "function") ||
        i === "children" ||
        i === "key" ||
        i === "value" ||
        i === "checked" ||
        r[i] === e[i] ||
        qt(t, i, e[i], r[i], o);
  }
  function Da(t, e, r) {
    e[0] === "-"
      ? t.setProperty(e, r)
      : (t[e] =
          r == null ? "" : typeof r != "number" || fc.test(e) ? r : r + "px");
  }
  function qt(t, e, r, o, a) {
    var i;
    e: if (e === "style")
      if (typeof r == "string") t.style.cssText = r;
      else {
        if ((typeof o == "string" && (t.style.cssText = o = ""), o))
          for (e in o) (r && e in r) || Da(t.style, e, "");
        if (r) for (e in r) (o && r[e] === o[e]) || Da(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      (i = e !== (e = e.replace(/Capture$/, ""))),
        (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
        t.l || (t.l = {}),
        (t.l[e + i] = r),
        r
          ? o || t.addEventListener(e, i ? Ga : Wa, i)
          : t.removeEventListener(e, i ? Ga : Wa, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (a) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        e !== "href" &&
        e !== "list" &&
        e !== "form" &&
        e !== "tabIndex" &&
        e !== "download" &&
        e in t
      )
        try {
          t[e] = r ?? "";
          break e;
        } catch {}
      typeof r == "function" ||
        (r == null || (r === !1 && e.indexOf("-") == -1)
          ? t.removeAttribute(e)
          : t.setAttribute(e, r));
    }
  }
  function Wa(t) {
    this.l[t.type + !1](L.event ? L.event(t) : t);
  }
  function Ga(t) {
    this.l[t.type + !0](L.event ? L.event(t) : t);
  }
  function Jr(t, e, r, o, a, i, s, l, m) {
    var c,
      n,
      d,
      u,
      p,
      h,
      _,
      x,
      A,
      y,
      b,
      v,
      k,
      g,
      T,
      C = e.type;
    if (e.constructor !== void 0) return null;
    r.__h != null &&
      ((m = r.__h), (l = e.__e = r.__e), (e.__h = null), (i = [l])),
      (c = L.__b) && c(e);
    try {
      e: if (typeof C == "function") {
        if (
          ((x = e.props),
          (A = (c = C.contextType) && o[c.__c]),
          (y = c ? (A ? A.props.value : c.__) : o),
          r.__c
            ? (_ = (n = e.__c = r.__c).__ = n.__E)
            : ("prototype" in C && C.prototype.render
                ? (e.__c = n = new C(x, y))
                : ((e.__c = n = new Re(x, y)),
                  (n.constructor = C),
                  (n.render = hc)),
              A && A.sub(n),
              (n.props = x),
              n.state || (n.state = {}),
              (n.context = y),
              (n.__n = o),
              (d = n.__d = !0),
              (n.__h = []),
              (n._sb = [])),
          n.__s == null && (n.__s = n.state),
          C.getDerivedStateFromProps != null &&
            (n.__s == n.state && (n.__s = De({}, n.__s)),
            De(n.__s, C.getDerivedStateFromProps(x, n.__s))),
          (u = n.props),
          (p = n.state),
          d)
        )
          C.getDerivedStateFromProps == null &&
            n.componentWillMount != null &&
            n.componentWillMount(),
            n.componentDidMount != null && n.__h.push(n.componentDidMount);
        else {
          if (
            (C.getDerivedStateFromProps == null &&
              x !== u &&
              n.componentWillReceiveProps != null &&
              n.componentWillReceiveProps(x, y),
            (!n.__e &&
              n.shouldComponentUpdate != null &&
              n.shouldComponentUpdate(x, n.__s, y) === !1) ||
              e.__v === r.__v)
          ) {
            for (
              n.props = x,
                n.state = n.__s,
                e.__v !== r.__v && (n.__d = !1),
                n.__v = e,
                e.__e = r.__e,
                e.__k = r.__k,
                e.__k.forEach(function (O) {
                  O && (O.__ = e);
                }),
                b = 0;
              b < n._sb.length;
              b++
            )
              n.__h.push(n._sb[b]);
            (n._sb = []), n.__h.length && s.push(n);
            break e;
          }
          n.componentWillUpdate != null && n.componentWillUpdate(x, n.__s, y),
            n.componentDidUpdate != null &&
              n.__h.push(function () {
                n.componentDidUpdate(u, p, h);
              });
        }
        if (
          ((n.context = y),
          (n.props = x),
          (n.__v = e),
          (n.__P = t),
          (v = L.__r),
          (k = 0),
          "prototype" in C && C.prototype.render)
        ) {
          for (
            n.state = n.__s,
              n.__d = !1,
              v && v(e),
              c = n.render(n.props, n.state, n.context),
              g = 0;
            g < n._sb.length;
            g++
          )
            n.__h.push(n._sb[g]);
          n._sb = [];
        } else
          do
            (n.__d = !1),
              v && v(e),
              (c = n.render(n.props, n.state, n.context)),
              (n.state = n.__s);
          while (n.__d && ++k < 25);
        (n.state = n.__s),
          n.getChildContext != null && (o = De(De({}, o), n.getChildContext())),
          d ||
            n.getSnapshotBeforeUpdate == null ||
            (h = n.getSnapshotBeforeUpdate(u, p)),
          (T =
            c != null && c.type === Pe && c.key == null ? c.props.children : c),
          $a(t, Array.isArray(T) ? T : [T], e, r, o, a, i, s, l, m),
          (n.base = e.__e),
          (e.__h = null),
          n.__h.length && s.push(n),
          _ && (n.__E = n.__ = null),
          (n.__e = !1);
      } else
        i == null && e.__v === r.__v
          ? ((e.__k = r.__k), (e.__e = r.__e))
          : (e.__e = gc(r.__e, e, r, o, a, i, s, m));
      (c = L.diffed) && c(e);
    } catch (O) {
      (e.__v = null),
        (m || i != null) &&
          ((e.__e = l), (e.__h = !!m), (i[i.indexOf(l)] = null)),
        L.__e(O, e, r);
    }
  }
  function Ka(t, e) {
    L.__c && L.__c(e, t),
      t.some(function (r) {
        try {
          (t = r.__h),
            (r.__h = []),
            t.some(function (o) {
              o.call(r);
            });
        } catch (o) {
          L.__e(o, r.__v);
        }
      });
  }
  function gc(t, e, r, o, a, i, s, l) {
    var m,
      c,
      n,
      d = r.props,
      u = e.props,
      p = e.type,
      h = 0;
    if ((p === "svg" && (a = !0), i != null)) {
      for (; h < i.length; h++)
        if (
          (m = i[h]) &&
          "setAttribute" in m == !!p &&
          (p ? m.localName === p : m.nodeType === 3)
        ) {
          (t = m), (i[h] = null);
          break;
        }
    }
    if (t == null) {
      if (p === null) return document.createTextNode(u);
      (t = a
        ? document.createElementNS("http://www.w3.org/2000/svg", p)
        : document.createElement(p, u.is && u)),
        (i = null),
        (l = !1);
    }
    if (p === null) d === u || (l && t.data === u) || (t.data = u);
    else {
      if (
        ((i = i && St.call(t.childNodes)),
        (c = (d = r.props || Ft).dangerouslySetInnerHTML),
        (n = u.dangerouslySetInnerHTML),
        !l)
      ) {
        if (i != null)
          for (d = {}, h = 0; h < t.attributes.length; h++)
            d[t.attributes[h].name] = t.attributes[h].value;
        (n || c) &&
          ((n && ((c && n.__html == c.__html) || n.__html === t.innerHTML)) ||
            (t.innerHTML = (n && n.__html) || ""));
      }
      if ((pc(t, u, d, a, l), n)) e.__k = [];
      else if (
        ((h = e.props.children),
        $a(
          t,
          Array.isArray(h) ? h : [h],
          e,
          r,
          o,
          a && p !== "foreignObject",
          i,
          s,
          i ? i[0] : r.__k && wt(r, 0),
          l
        ),
        i != null)
      )
        for (h = i.length; h--; ) i[h] != null && Ua(i[h]);
      l ||
        ("value" in u &&
          (h = u.value) !== void 0 &&
          (h !== t.value ||
            (p === "progress" && !h) ||
            (p === "option" && h !== d.value)) &&
          qt(t, "value", h, d.value, !1),
        "checked" in u &&
          (h = u.checked) !== void 0 &&
          h !== t.checked &&
          qt(t, "checked", h, d.checked, !1));
    }
    return t;
  }
  function Ya(t, e, r) {
    try {
      typeof t == "function" ? t(e) : (t.current = e);
    } catch (o) {
      L.__e(o, r);
    }
  }
  function Za(t, e, r) {
    var o, a;
    if (
      (L.unmount && L.unmount(t),
      (o = t.ref) && ((o.current && o.current !== t.__e) || Ya(o, null, e)),
      (o = t.__c) != null)
    ) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          L.__e(i, e);
        }
      (o.base = o.__P = null), (t.__c = void 0);
    }
    if ((o = t.__k))
      for (a = 0; a < o.length; a++)
        o[a] && Za(o[a], e, r || typeof t.type != "function");
    r || t.__e == null || Ua(t.__e), (t.__ = t.__e = t.__d = void 0);
  }
  function hc(t, e, r) {
    return this.constructor(t, r);
  }
  function Ve(t, e, r) {
    var o, a, i;
    L.__ && L.__(t, e),
      (a = (o = typeof r == "function") ? null : (r && r.__k) || e.__k),
      (i = []),
      Jr(
        e,
        (t = ((!o && r) || e).__k = Te(Pe, null, [t])),
        a || Ft,
        Ft,
        e.ownerSVGElement !== void 0,
        !o && r ? [r] : a ? null : e.firstChild ? St.call(e.childNodes) : null,
        i,
        !o && r ? r : a ? a.__e : e.firstChild,
        o
      ),
      Ka(i, t);
  }
  function Kr(t, e) {
    Ve(t, e, Kr);
  }
  function Qa(t, e, r) {
    var o,
      a,
      i,
      s = De({}, t.props);
    for (i in e)
      i == "key" ? (o = e[i]) : i == "ref" ? (a = e[i]) : (s[i] = e[i]);
    return (
      arguments.length > 2 &&
        (s.children = arguments.length > 3 ? St.call(arguments, 2) : r),
      _t(t.type, s, o || t.key, a || t.ref, null)
    );
  }
  function at(t, e) {
    var r = {
      __c: (e = "__cC" + Va++),
      __: t,
      Consumer: function (o, a) {
        return o.children(a);
      },
      Provider: function (o) {
        var a, i;
        return (
          this.getChildContext ||
            ((a = []),
            ((i = {})[e] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (s) {
              this.props.value !== s.value && a.some(Xr);
            }),
            (this.sub = function (s) {
              a.push(s);
              var l = s.componentWillUnmount;
              s.componentWillUnmount = function () {
                a.splice(a.indexOf(s), 1), l && l.call(s);
              };
            })),
          o.children
        );
      },
    };
    return (r.Provider.__ = r.Consumer.contextType = r);
  }
  var St,
    L,
    Ha,
    dc,
    yt,
    za,
    Va,
    Ft,
    Fa,
    fc,
    Ke = Vt(() => {
      (Ft = {}),
        (Fa = []),
        (fc =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i);
      (St = Fa.slice),
        (L = {
          __e: function (t, e, r, o) {
            for (var a, i, s; (e = e.__); )
              if ((a = e.__c) && !a.__)
                try {
                  if (
                    ((i = a.constructor) &&
                      i.getDerivedStateFromError != null &&
                      (a.setState(i.getDerivedStateFromError(t)), (s = a.__d)),
                    a.componentDidCatch != null &&
                      (a.componentDidCatch(t, o || {}), (s = a.__d)),
                    s)
                  )
                    return (a.__E = a);
                } catch (l) {
                  t = l;
                }
            throw t;
          },
        }),
        (Ha = 0),
        (dc = function (t) {
          return t != null && t.constructor === void 0;
        }),
        (Re.prototype.setState = function (t, e) {
          var r;
          (r =
            this.__s != null && this.__s !== this.state
              ? this.__s
              : (this.__s = De({}, this.state))),
            typeof t == "function" && (t = t(De({}, r), this.props)),
            t && De(r, t),
            t != null && this.__v && (e && this._sb.push(e), Xr(this));
        }),
        (Re.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), Xr(this));
        }),
        (Re.prototype.render = Pe),
        (yt = []),
        (Ut.__r = 0),
        (Va = 0);
    });
  function Ye(t, e) {
    L.__h && L.__h(ce, t, it || e), (it = 0);
    var r = ce.__H || (ce.__H = { __: [], __h: [] });
    return t >= r.__.length && r.__.push({ __V: Xt }), r.__[t];
  }
  function B(t) {
    return (it = 1), Kt(cn, t);
  }
  function Kt(t, e, r) {
    var o = Ye(Fe++, 2);
    if (
      ((o.t = t),
      !o.__c &&
        ((o.__ = [
          r ? r(e) : cn(void 0, e),
          function (i) {
            var s = o.__N ? o.__N[0] : o.__[0],
              l = o.t(s, i);
            s !== l && ((o.__N = [l, o.__[1]]), o.__c.setState({}));
          },
        ]),
        (o.__c = ce),
        !ce.u))
    ) {
      ce.u = !0;
      var a = ce.shouldComponentUpdate;
      ce.shouldComponentUpdate = function (i, s, l) {
        if (!o.__c.__H) return !0;
        var m = o.__c.__H.__.filter(function (n) {
          return n.__c;
        });
        if (
          m.every(function (n) {
            return !n.__N;
          })
        )
          return !a || a.call(this, i, s, l);
        var c = !1;
        return (
          m.forEach(function (n) {
            if (n.__N) {
              var d = n.__[0];
              (n.__ = n.__N), (n.__N = void 0), d !== n.__[0] && (c = !0);
            }
          }),
          !(!c && o.__c.props === i) && (!a || a.call(this, i, s, l))
        );
      };
    }
    return o.__N || o.__;
  }
  function M(t, e) {
    var r = Ye(Fe++, 3);
    !L.__s && ao(r.__H, e) && ((r.__ = t), (r.i = e), ce.__H.__h.push(r));
  }
  function Ue(t, e) {
    var r = Ye(Fe++, 4);
    !L.__s && ao(r.__H, e) && ((r.__ = t), (r.i = e), ce.__h.push(r));
  }
  function $(t) {
    return (
      (it = 5),
      E(function () {
        return { current: t };
      }, [])
    );
  }
  function we(t, e, r) {
    (it = 6),
      Ue(
        function () {
          return typeof t == "function"
            ? (t(e()),
              function () {
                return t(null);
              })
            : t
            ? ((t.current = e()),
              function () {
                return (t.current = null);
              })
            : void 0;
        },
        r == null ? r : r.concat(t)
      );
  }
  function E(t, e) {
    var r = Ye(Fe++, 7);
    return ao(r.__H, e) ? ((r.__V = t()), (r.i = e), (r.__h = t), r.__V) : r.__;
  }
  function Se(t, e) {
    return (
      (it = 8),
      E(function () {
        return t;
      }, e)
    );
  }
  function st(t) {
    var e = ce.context[t.__c],
      r = Ye(Fe++, 9);
    return (
      (r.c = t),
      e ? (r.__ == null && ((r.__ = !0), e.sub(ce)), e.props.value) : t.__
    );
  }
  function Ct(t, e) {
    L.useDebugValue && L.useDebugValue(e ? e(t) : t);
  }
  function bc(t) {
    var e = Ye(Fe++, 10),
      r = B();
    return (
      (e.__ = t),
      ce.componentDidCatch ||
        (ce.componentDidCatch = function (o, a) {
          e.__ && e.__(o, a), r[1](o);
        }),
      [
        r[0],
        function () {
          r[1](void 0);
        },
      ]
    );
  }
  function oo() {
    var t = Ye(Fe++, 11);
    if (!t.__) {
      for (var e = ce.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
      var r = e.__m || (e.__m = [0, 0]);
      t.__ = "P" + r[0] + "-" + r[1]++;
    }
    return t.__;
  }
  function vc() {
    for (var t; (t = ln.shift()); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(Jt), t.__H.__h.forEach(ro), (t.__H.__h = []);
        } catch (e) {
          (t.__H.__h = []), L.__e(e, t.__v);
        }
  }
  function xc(t) {
    var e,
      r = function () {
        clearTimeout(o), sn && cancelAnimationFrame(e), setTimeout(t);
      },
      o = setTimeout(r, 100);
    sn && (e = requestAnimationFrame(r));
  }
  function Jt(t) {
    var e = ce,
      r = t.__c;
    typeof r == "function" && ((t.__c = void 0), r()), (ce = e);
  }
  function ro(t) {
    var e = ce;
    (t.__c = t.__()), (ce = e);
  }
  function ao(t, e) {
    return (
      !t ||
      t.length !== e.length ||
      e.some(function (r, o) {
        return r !== t[o];
      })
    );
  }
  function cn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  var Fe,
    ce,
    to,
    en,
    it,
    ln,
    Xt,
    tn,
    rn,
    on,
    an,
    nn,
    sn,
    Yt = Vt(() => {
      Ke();
      (it = 0),
        (ln = []),
        (Xt = []),
        (tn = L.__b),
        (rn = L.__r),
        (on = L.diffed),
        (an = L.__c),
        (nn = L.unmount);
      (L.__b = function (t) {
        (ce = null), tn && tn(t);
      }),
        (L.__r = function (t) {
          rn && rn(t), (Fe = 0);
          var e = (ce = t.__c).__H;
          e &&
            (to === ce
              ? ((e.__h = []),
                (ce.__h = []),
                e.__.forEach(function (r) {
                  r.__N && (r.__ = r.__N), (r.__V = Xt), (r.__N = r.i = void 0);
                }))
              : (e.__h.forEach(Jt), e.__h.forEach(ro), (e.__h = []))),
            (to = ce);
        }),
        (L.diffed = function (t) {
          on && on(t);
          var e = t.__c;
          e &&
            e.__H &&
            (e.__H.__h.length &&
              ((ln.push(e) !== 1 && en === L.requestAnimationFrame) ||
                ((en = L.requestAnimationFrame) || xc)(vc)),
            e.__H.__.forEach(function (r) {
              r.i && (r.__H = r.i),
                r.__V !== Xt && (r.__ = r.__V),
                (r.i = void 0),
                (r.__V = Xt);
            })),
            (to = ce = null);
        }),
        (L.__c = function (t, e) {
          e.some(function (r) {
            try {
              r.__h.forEach(Jt),
                (r.__h = r.__h.filter(function (o) {
                  return !o.__ || ro(o);
                }));
            } catch (o) {
              e.some(function (a) {
                a.__h && (a.__h = []);
              }),
                (e = []),
                L.__e(o, r.__v);
            }
          }),
            an && an(t, e);
        }),
        (L.unmount = function (t) {
          nn && nn(t);
          var e,
            r = t.__c;
          r &&
            r.__H &&
            (r.__H.__.forEach(function (o) {
              try {
                Jt(o);
              } catch (a) {
                e = a;
              }
            }),
            (r.__H = void 0),
            e && L.__e(e, r.__v));
        });
      sn = typeof requestAnimationFrame == "function";
    });
  function vn(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function io(t, e) {
    for (var r in t) if (r !== "__source" && !(r in e)) return !0;
    for (var o in e) if (o !== "__source" && t[o] !== e[o]) return !0;
    return !1;
  }
  function no(t, e) {
    return (t === e && (t !== 0 || 1 / t == 1 / e)) || (t != t && e != e);
  }
  function Zt(t) {
    this.props = t;
  }
  function xn(t, e) {
    function r(a) {
      var i = this.props.ref,
        s = i == a.ref;
      return (
        !s && i && (i.call ? i(null) : (i.current = null)),
        e ? !e(this.props, a) || !s : io(this.props, a)
      );
    }
    function o(a) {
      return (this.shouldComponentUpdate = r), Te(t, a);
    }
    return (
      (o.displayName = "Memo(" + (t.displayName || t.name) + ")"),
      (o.prototype.isReactComponent = !0),
      (o.__f = !0),
      o
    );
  }
  function Qt(t) {
    function e(r) {
      var o = vn({}, r);
      return delete o.ref, t(o, r.ref || null);
    }
    return (
      (e.$$typeof = yc),
      (e.render = e),
      (e.prototype.isReactComponent = e.__f = !0),
      (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
      e
    );
  }
  function _n(t, e, r) {
    return (
      t &&
        (t.__c &&
          t.__c.__H &&
          (t.__c.__H.__.forEach(function (o) {
            typeof o.__c == "function" && o.__c();
          }),
          (t.__c.__H = null)),
        (t = vn({}, t)).__c != null &&
          (t.__c.__P === r && (t.__c.__P = e), (t.__c = null)),
        (t.__k =
          t.__k &&
          t.__k.map(function (o) {
            return _n(o, e, r);
          }))),
      t
    );
  }
  function wn(t, e, r) {
    return (
      t &&
        ((t.__v = null),
        (t.__k =
          t.__k &&
          t.__k.map(function (o) {
            return wn(o, e, r);
          })),
        t.__c &&
          t.__c.__P === e &&
          (t.__e && r.insertBefore(t.__e, t.__d),
          (t.__c.__e = !0),
          (t.__c.__P = r))),
      t
    );
  }
  function At() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Sn(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function kn(t) {
    var e, r, o;
    function a(i) {
      if (
        (e ||
          (e = t()).then(
            function (s) {
              r = s.default || s;
            },
            function (s) {
              o = s;
            }
          ),
        o)
      )
        throw o;
      if (!r) throw e;
      return Te(r, i);
    }
    return (a.displayName = "Lazy"), (a.__f = !0), a;
  }
  function lt() {
    (this.u = null), (this.o = null);
  }
  function wc(t) {
    return (
      (this.getChildContext = function () {
        return t.context;
      }),
      t.children
    );
  }
  function Sc(t) {
    var e = this,
      r = t.i;
    (e.componentWillUnmount = function () {
      Ve(null, e.l), (e.l = null), (e.i = null);
    }),
      e.i && e.i !== r && e.componentWillUnmount(),
      t.__v
        ? (e.l ||
            ((e.i = r),
            (e.l = {
              nodeType: 1,
              parentNode: r,
              childNodes: [],
              appendChild: function (o) {
                this.childNodes.push(o), e.i.appendChild(o);
              },
              insertBefore: function (o, a) {
                this.childNodes.push(o), e.i.appendChild(o);
              },
              removeChild: function (o) {
                this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1),
                  e.i.removeChild(o);
              },
            })),
          Ve(Te(wc, { context: e.context }, t.__v), e.l))
        : e.l && e.componentWillUnmount();
  }
  function ct(t, e) {
    var r = Te(Sc, { __v: t, i: e });
    return (r.containerInfo = e), r;
  }
  function An(t, e, r) {
    return (
      e.__k == null && (e.textContent = ""),
      Ve(t, e),
      typeof r == "function" && r(),
      t ? t.__c : null
    );
  }
  function Tn(t, e, r) {
    return Kr(t, e), typeof r == "function" && r(), t ? t.__c : null;
  }
  function Tc() {}
  function Ec() {
    return this.cancelBubble;
  }
  function Rc() {
    return this.defaultPrevented;
  }
  function Nn(t) {
    return Te.bind(null, t);
  }
  function so(t) {
    return !!t && t.$$typeof === Cn;
  }
  function Pn(t) {
    return so(t) ? Qa.apply(null, arguments) : t;
  }
  function jn(t) {
    return !!t.__k && (Ve(null, t), !0);
  }
  function In(t) {
    return (t && (t.base || (t.nodeType === 1 && t))) || null;
  }
  function lo(t) {
    t();
  }
  function Mn(t) {
    return t;
  }
  function zn() {
    return [!1, lo];
  }
  function Wn(t, e) {
    var r = e(),
      o = B({ h: { __: r, v: e } }),
      a = o[0].h,
      i = o[1];
    return (
      Ue(
        function () {
          (a.__ = r), (a.v = e), no(a.__, e()) || i({ h: a });
        },
        [t, r, e]
      ),
      M(
        function () {
          return (
            no(a.__, a.v()) || i({ h: a }),
            t(function () {
              no(a.__, a.v()) || i({ h: a });
            })
          );
        },
        [t]
      ),
      r
    );
  }
  var un,
    yc,
    mn,
    yn,
    _c,
    dn,
    fn,
    Cn,
    kc,
    Cc,
    Ac,
    pn,
    En,
    gn,
    hn,
    bn,
    Rn,
    Nc,
    Ln,
    On,
    Bn,
    Dn,
    f,
    Tt = Vt(() => {
      Ke();
      Ke();
      Yt();
      Yt();
      ((Zt.prototype = new Re()).isPureReactComponent = !0),
        (Zt.prototype.shouldComponentUpdate = function (t, e) {
          return io(this.props, t) || io(this.state, e);
        });
      un = L.__b;
      L.__b = function (t) {
        t.type &&
          t.type.__f &&
          t.ref &&
          ((t.props.ref = t.ref), (t.ref = null)),
          un && un(t);
      };
      yc =
        (typeof Symbol < "u" &&
          Symbol.for &&
          Symbol.for("react.forward_ref")) ||
        3911;
      (mn = function (t, e) {
        return t == null ? null : Le(Le(t).map(e));
      }),
        (yn = {
          map: mn,
          forEach: mn,
          count: function (t) {
            return t ? Le(t).length : 0;
          },
          only: function (t) {
            var e = Le(t);
            if (e.length !== 1) throw "Children.only";
            return e[0];
          },
          toArray: Le,
        }),
        (_c = L.__e);
      L.__e = function (t, e, r, o) {
        if (t.then) {
          for (var a, i = e; (i = i.__); )
            if ((a = i.__c) && a.__c)
              return (
                e.__e == null && ((e.__e = r.__e), (e.__k = r.__k)), a.__c(t, e)
              );
        }
        _c(t, e, r, o);
      };
      dn = L.unmount;
      (L.unmount = function (t) {
        var e = t.__c;
        e && e.__R && e.__R(),
          e && t.__h === !0 && (t.type = null),
          dn && dn(t);
      }),
        ((At.prototype = new Re()).__c = function (t, e) {
          var r = e.__c,
            o = this;
          o.t == null && (o.t = []), o.t.push(r);
          var a = Sn(o.__v),
            i = !1,
            s = function () {
              i || ((i = !0), (r.__R = null), a ? a(l) : l());
            };
          r.__R = s;
          var l = function () {
              if (!--o.__u) {
                if (o.state.__a) {
                  var c = o.state.__a;
                  o.__v.__k[0] = wn(c, c.__c.__P, c.__c.__O);
                }
                var n;
                for (o.setState({ __a: (o.__b = null) }); (n = o.t.pop()); )
                  n.forceUpdate();
              }
            },
            m = e.__h === !0;
          o.__u++ || m || o.setState({ __a: (o.__b = o.__v.__k[0]) }),
            t.then(s, s);
        }),
        (At.prototype.componentWillUnmount = function () {
          this.t = [];
        }),
        (At.prototype.render = function (t, e) {
          if (this.__b) {
            if (this.__v.__k) {
              var r = document.createElement("div"),
                o = this.__v.__k[0].__c;
              this.__v.__k[0] = _n(this.__b, r, (o.__O = o.__P));
            }
            this.__b = null;
          }
          var a = e.__a && Te(Pe, null, t.fallback);
          return (
            a && (a.__h = null), [Te(Pe, null, e.__a ? null : t.children), a]
          );
        });
      fn = function (t, e, r) {
        if (
          (++r[1] === r[0] && t.o.delete(e),
          t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
        )
          for (r = t.u; r; ) {
            for (; r.length > 3; ) r.pop()();
            if (r[1] < r[0]) break;
            t.u = r = r[2];
          }
      };
      ((lt.prototype = new Re()).__a = function (t) {
        var e = this,
          r = Sn(e.__v),
          o = e.o.get(t);
        return (
          o[0]++,
          function (a) {
            var i = function () {
              e.props.revealOrder ? (o.push(a), fn(e, t, o)) : a();
            };
            r ? r(i) : i();
          }
        );
      }),
        (lt.prototype.render = function (t) {
          (this.u = null), (this.o = new Map());
          var e = Le(t.children);
          t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
          for (var r = e.length; r--; )
            this.o.set(e[r], (this.u = [1, 0, this.u]));
          return t.children;
        }),
        (lt.prototype.componentDidUpdate = lt.prototype.componentDidMount =
          function () {
            var t = this;
            this.o.forEach(function (e, r) {
              fn(t, r, e);
            });
          });
      (Cn =
        (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
        60103),
        (kc =
          /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/),
        (Cc = typeof document < "u"),
        (Ac = function (t) {
          return (
            typeof Symbol < "u" && typeof Symbol() == "symbol"
              ? /fil|che|rad/i
              : /fil|che|ra/i
          ).test(t);
        });
      (Re.prototype.isReactComponent = {}),
        [
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUpdate",
        ].forEach(function (t) {
          Object.defineProperty(Re.prototype, t, {
            configurable: !0,
            get: function () {
              return this["UNSAFE_" + t];
            },
            set: function (e) {
              Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        });
      pn = L.event;
      L.event = function (t) {
        return (
          pn && (t = pn(t)),
          (t.persist = Tc),
          (t.isPropagationStopped = Ec),
          (t.isDefaultPrevented = Rc),
          (t.nativeEvent = t)
        );
      };
      (gn = {
        configurable: !0,
        get: function () {
          return this.class;
        },
      }),
        (hn = L.vnode);
      L.vnode = function (t) {
        var e = t.type,
          r = t.props,
          o = r;
        if (typeof e == "string") {
          var a = e.indexOf("-") === -1;
          for (var i in ((o = {}), r)) {
            var s = r[i];
            (Cc && i === "children" && e === "noscript") ||
              (i === "value" && "defaultValue" in r && s == null) ||
              (i === "defaultValue" && "value" in r && r.value == null
                ? (i = "value")
                : i === "download" && s === !0
                ? (s = "")
                : /ondoubleclick/i.test(i)
                ? (i = "ondblclick")
                : /^onchange(textarea|input)/i.test(i + e) && !Ac(r.type)
                ? (i = "oninput")
                : /^onfocus$/i.test(i)
                ? (i = "onfocusin")
                : /^onblur$/i.test(i)
                ? (i = "onfocusout")
                : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
                ? (i = i.toLowerCase())
                : a && kc.test(i)
                ? (i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
                : s === null && (s = void 0),
              /^oninput$/i.test(i) &&
                ((i = i.toLowerCase()), o[i] && (i = "oninputCapture")),
              (o[i] = s));
          }
          e == "select" &&
            o.multiple &&
            Array.isArray(o.value) &&
            (o.value = Le(r.children).forEach(function (l) {
              l.props.selected = o.value.indexOf(l.props.value) != -1;
            })),
            e == "select" &&
              o.defaultValue != null &&
              (o.value = Le(r.children).forEach(function (l) {
                l.props.selected = o.multiple
                  ? o.defaultValue.indexOf(l.props.value) != -1
                  : o.defaultValue == l.props.value;
              })),
            (t.props = o),
            r.class != r.className &&
              ((gn.enumerable = "className" in r),
              r.className != null && (o.class = r.className),
              Object.defineProperty(o, "className", gn));
        }
        (t.$$typeof = Cn), hn && hn(t);
      };
      bn = L.__r;
      L.__r = function (t) {
        bn && bn(t), (En = t.__c);
      };
      (Rn = {
        ReactCurrentDispatcher: {
          current: {
            readContext: function (t) {
              return En.__n[t.__c].props.value;
            },
          },
        },
      }),
        (Nc = "17.0.2");
      (Ln = function (t, e) {
        return t(e);
      }),
        (On = function (t, e) {
          return t(e);
        }),
        (Bn = Pe);
      Dn = Ue;
      f = {
        useState: B,
        useId: oo,
        useReducer: Kt,
        useEffect: M,
        useLayoutEffect: Ue,
        useInsertionEffect: Dn,
        useTransition: zn,
        useDeferredValue: Mn,
        useSyncExternalStore: Wn,
        startTransition: lo,
        useRef: $,
        useImperativeHandle: we,
        useMemo: E,
        useCallback: Se,
        useContext: st,
        useDebugValue: Ct,
        version: "17.0.2",
        Children: yn,
        render: An,
        hydrate: Tn,
        unmountComponentAtNode: jn,
        createPortal: ct,
        createElement: Te,
        createContext: at,
        createFactory: Nn,
        cloneElement: Pn,
        createRef: $t,
        Fragment: Pe,
        isValidElement: so,
        findDOMNode: In,
        Component: Re,
        PureComponent: Zt,
        memo: xn,
        forwardRef: Qt,
        flushSync: On,
        unstable_batchedUpdates: Ln,
        StrictMode: Bn,
        Suspense: At,
        SuspenseList: lt,
        lazy: kn,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Rn,
      };
    });
  var Gn = {};
  uc(Gn, {
    Children: () => yn,
    Component: () => Re,
    Fragment: () => Pe,
    PureComponent: () => Zt,
    StrictMode: () => Bn,
    Suspense: () => At,
    SuspenseList: () => lt,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Rn,
    cloneElement: () => Pn,
    createContext: () => at,
    createElement: () => Te,
    createFactory: () => Nn,
    createPortal: () => ct,
    createRef: () => $t,
    default: () => f,
    findDOMNode: () => In,
    flushSync: () => On,
    forwardRef: () => Qt,
    hydrate: () => Tn,
    isValidElement: () => so,
    lazy: () => kn,
    memo: () => xn,
    render: () => An,
    startTransition: () => lo,
    unmountComponentAtNode: () => jn,
    unstable_batchedUpdates: () => Ln,
    useCallback: () => Se,
    useContext: () => st,
    useDebugValue: () => Ct,
    useDeferredValue: () => Mn,
    useEffect: () => M,
    useErrorBoundary: () => bc,
    useId: () => oo,
    useImperativeHandle: () => we,
    useInsertionEffect: () => Dn,
    useLayoutEffect: () => Ue,
    useMemo: () => E,
    useReducer: () => Kt,
    useRef: () => $,
    useState: () => B,
    useSyncExternalStore: () => Wn,
    useTransition: () => zn,
    version: () => Nc,
  });
  var j = Vt(() => {
    Tt();
    Tt();
  });
  var ba = qr((ha, xl) => {
    (function (t, e) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], e);
      else if (typeof ha < "u") e(xl);
      else {
        var r = { exports: {} };
        e(r), (t.browser = r.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ha,
      function (t) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id)
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          let e = "The message port closed before a response was received.",
            r = (o) => {
              let a = {
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
              if (Object.keys(a).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class i extends WeakMap {
                constructor(k, g = void 0) {
                  super(g), (this.createItem = k);
                }
                get(k) {
                  return (
                    this.has(k) || this.set(k, this.createItem(k)), super.get(k)
                  );
                }
              }
              let s = (v) =>
                  v && typeof v == "object" && typeof v.then == "function",
                l =
                  (v, k) =>
                  (...g) => {
                    o.runtime.lastError
                      ? v.reject(new Error(o.runtime.lastError.message))
                      : k.singleCallbackArg ||
                        (g.length <= 1 && k.singleCallbackArg !== !1)
                      ? v.resolve(g[0])
                      : v.resolve(g);
                  },
                m = (v) => (v == 1 ? "argument" : "arguments"),
                c = (v, k) =>
                  function (T, ...C) {
                    if (C.length < k.minArgs)
                      throw new Error(
                        `Expected at least ${k.minArgs} ${m(
                          k.minArgs
                        )} for ${v}(), got ${C.length}`
                      );
                    if (C.length > k.maxArgs)
                      throw new Error(
                        `Expected at most ${k.maxArgs} ${m(
                          k.maxArgs
                        )} for ${v}(), got ${C.length}`
                      );
                    return new Promise((O, S) => {
                      if (k.fallbackToNoCallback)
                        try {
                          T[v](...C, l({ resolve: O, reject: S }, k));
                        } catch (R) {
                          console.warn(
                            `${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            R
                          ),
                            T[v](...C),
                            (k.fallbackToNoCallback = !1),
                            (k.noCallback = !0),
                            O();
                        }
                      else
                        k.noCallback
                          ? (T[v](...C), O())
                          : T[v](...C, l({ resolve: O, reject: S }, k));
                    });
                  },
                n = (v, k, g) =>
                  new Proxy(k, {
                    apply(T, C, O) {
                      return g.call(C, v, ...O);
                    },
                  }),
                d = Function.call.bind(Object.prototype.hasOwnProperty),
                u = (v, k = {}, g = {}) => {
                  let T = Object.create(null),
                    C = {
                      has(S, R) {
                        return R in v || R in T;
                      },
                      get(S, R, P) {
                        if (R in T) return T[R];
                        if (!(R in v)) return;
                        let D = v[R];
                        if (typeof D == "function")
                          if (typeof k[R] == "function") D = n(v, v[R], k[R]);
                          else if (d(g, R)) {
                            let G = c(R, g[R]);
                            D = n(v, v[R], G);
                          } else D = D.bind(v);
                        else if (
                          typeof D == "object" &&
                          D !== null &&
                          (d(k, R) || d(g, R))
                        )
                          D = u(D, k[R], g[R]);
                        else if (d(g, "*")) D = u(D, k[R], g["*"]);
                        else
                          return (
                            Object.defineProperty(T, R, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return v[R];
                              },
                              set(G) {
                                v[R] = G;
                              },
                            }),
                            D
                          );
                        return (T[R] = D), D;
                      },
                      set(S, R, P, D) {
                        return R in T ? (T[R] = P) : (v[R] = P), !0;
                      },
                      defineProperty(S, R, P) {
                        return Reflect.defineProperty(T, R, P);
                      },
                      deleteProperty(S, R) {
                        return Reflect.deleteProperty(T, R);
                      },
                    },
                    O = Object.create(v);
                  return new Proxy(O, C);
                },
                p = (v) => ({
                  addListener(k, g, ...T) {
                    k.addListener(v.get(g), ...T);
                  },
                  hasListener(k, g) {
                    return k.hasListener(v.get(g));
                  },
                  removeListener(k, g) {
                    k.removeListener(v.get(g));
                  },
                }),
                h = new i((v) =>
                  typeof v != "function"
                    ? v
                    : function (g) {
                        let T = u(
                          g,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        v(T);
                      }
                ),
                _ = new i((v) =>
                  typeof v != "function"
                    ? v
                    : function (g, T, C) {
                        let O = !1,
                          S,
                          R = new Promise((J) => {
                            S = function (ne) {
                              (O = !0), J(ne);
                            };
                          }),
                          P;
                        try {
                          P = v(g, T, S);
                        } catch (J) {
                          P = Promise.reject(J);
                        }
                        let D = P !== !0 && s(P);
                        if (P !== !0 && !D && !O) return !1;
                        let G = (J) => {
                          J.then(
                            (ne) => {
                              C(ne);
                            },
                            (ne) => {
                              let Z;
                              ne &&
                              (ne instanceof Error ||
                                typeof ne.message == "string")
                                ? (Z = ne.message)
                                : (Z = "An unexpected error occurred"),
                                C({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: Z,
                                });
                            }
                          ).catch((ne) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              ne
                            );
                          });
                        };
                        return G(D ? P : R), !0;
                      }
                ),
                x = ({ reject: v, resolve: k }, g) => {
                  o.runtime.lastError
                    ? o.runtime.lastError.message === e
                      ? k()
                      : v(new Error(o.runtime.lastError.message))
                    : g && g.__mozWebExtensionPolyfillReject__
                    ? v(new Error(g.message))
                    : k(g);
                },
                A = (v, k, g, ...T) => {
                  if (T.length < k.minArgs)
                    throw new Error(
                      `Expected at least ${k.minArgs} ${m(
                        k.minArgs
                      )} for ${v}(), got ${T.length}`
                    );
                  if (T.length > k.maxArgs)
                    throw new Error(
                      `Expected at most ${k.maxArgs} ${m(
                        k.maxArgs
                      )} for ${v}(), got ${T.length}`
                    );
                  return new Promise((C, O) => {
                    let S = x.bind(null, { resolve: C, reject: O });
                    T.push(S), g.sendMessage(...T);
                  });
                },
                y = {
                  devtools: { network: { onRequestFinished: p(h) } },
                  runtime: {
                    onMessage: p(_),
                    onMessageExternal: p(_),
                    sendMessage: A.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: A.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                b = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (a.privacy = {
                  network: { "*": b },
                  services: { "*": b },
                  websites: { "*": b },
                }),
                u(o, y, a)
              );
            };
          t.exports = r(chrome);
        } else t.exports = globalThis.browser;
      }
    );
  });
  var Rl = qr((El) => {
    "use strict";
    var ht = (j(), mc(Gn));
    function Fp(t, e) {
      return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
    }
    var Up = typeof Object.is == "function" ? Object.is : Fp,
      qp = ht.useState,
      $p = ht.useEffect,
      Xp = ht.useLayoutEffect,
      Jp = ht.useDebugValue;
    function Kp(t, e) {
      var r = e(),
        o = qp({ inst: { value: r, getSnapshot: e } }),
        a = o[0].inst,
        i = o[1];
      return (
        Xp(
          function () {
            (a.value = r), (a.getSnapshot = e), ya(a) && i({ inst: a });
          },
          [t, r, e]
        ),
        $p(
          function () {
            return (
              ya(a) && i({ inst: a }),
              t(function () {
                ya(a) && i({ inst: a });
              })
            );
          },
          [t]
        ),
        Jp(r),
        r
      );
    }
    function ya(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var r = e();
        return !Up(t, r);
      } catch {
        return !0;
      }
    }
    function Yp(t, e) {
      return e();
    }
    var Zp =
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
        ? Yp
        : Kp;
    El.useSyncExternalStore =
      ht.useSyncExternalStore !== void 0 ? ht.useSyncExternalStore : Zp;
  });
  var Pl = qr((mA, Nl) => {
    "use strict";
    Nl.exports = Rl();
  });
  Ke();
  function N() {
    return (
      (N = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
            return t;
          }),
      N.apply(this, arguments)
    );
  }
  function Yr(t) {
    if (Array.isArray(t)) return t;
  }
  function Zr(t, e) {
    var r =
      t == null
        ? null
        : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (r != null) {
      var o,
        a,
        i,
        s,
        l = [],
        m = !0,
        c = !1;
      try {
        if (((i = (r = r.call(t)).next), e === 0)) {
          if (Object(r) !== r) return;
          m = !1;
        } else
          for (
            ;
            !(m = (o = i.call(r)).done) && (l.push(o.value), l.length !== e);
            m = !0
          );
      } catch (n) {
        (c = !0), (a = n);
      } finally {
        try {
          if (!m && r.return != null && ((s = r.return()), Object(s) !== s))
            return;
        } finally {
          if (c) throw a;
        }
      }
      return l;
    }
  }
  function nt(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
    return o;
  }
  function kt(t, e) {
    if (t) {
      if (typeof t == "string") return nt(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (
        (r === "Object" && t.constructor && (r = t.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(t);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return nt(t, e);
    }
  }
  function Qr() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function W(t, e) {
    return Yr(t) || Zr(t, e) || kt(t, e) || Qr();
  }
  function eo(t, e) {
    if (t == null) return {};
    var r = {},
      o = Object.keys(t),
      a,
      i;
    for (i = 0; i < o.length; i++)
      (a = o[i]), !(e.indexOf(a) >= 0) && (r[a] = t[a]);
    return r;
  }
  function F(t, e) {
    if (t == null) return {};
    var r = eo(t, e),
      o,
      a;
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (a = 0; a < i.length; a++)
        (o = i[a]),
          !(e.indexOf(o) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(t, o) &&
            (r[o] = t[o]);
    }
    return r;
  }
  j();
  var Ze = {},
    Hn = {};
  function Pc(t) {
    for (var e = 5381, r = t.length; r; ) e = (e * 33) ^ t.charCodeAt(--r);
    return e >>> 0;
  }
  var jc = Pc,
    Vn = {};
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    function e(l, m) {
      for (var c = 0; c < m.length; c++) {
        var n = m[c];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(l, n.key, n);
      }
    }
    function r(l, m, c) {
      return m && e(l.prototype, m), c && e(l, c), l;
    }
    var o = typeof process < "u" && process.env && !0,
      a = function (m) {
        return Object.prototype.toString.call(m) === "[object String]";
      },
      i = (function () {
        function l(c) {
          var n = c === void 0 ? {} : c,
            d = n.name,
            u = d === void 0 ? "stylesheet" : d,
            p = n.optimizeForSpeed,
            h = p === void 0 ? o : p,
            _ = n.isBrowser,
            x = _ === void 0 ? typeof window < "u" : _;
          s(a(u), "`name` must be a string"),
            (this._name = u),
            (this._deletedRulePlaceholder = "#" + u + "-deleted-rule____{}"),
            s(typeof h == "boolean", "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = h),
            (this._isBrowser = x),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0);
          var A =
            this._isBrowser &&
            document.querySelector('meta[property="csp-nonce"]');
          this._nonce = A ? A.getAttribute("content") : null;
        }
        var m = l.prototype;
        return (
          (m.setOptimizeForSpeed = function (n) {
            s(typeof n == "boolean", "`setOptimizeForSpeed` accepts a boolean"),
              s(
                this._rulesCount === 0,
                "optimizeForSpeed cannot be when rules have already been inserted"
              ),
              this.flush(),
              (this._optimizeForSpeed = n),
              this.inject();
          }),
          (m.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (m.inject = function () {
            var n = this;
            if (
              (s(!this._injected, "sheet already injected"),
              (this._injected = !0),
              this._isBrowser && this._optimizeForSpeed)
            ) {
              (this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (o ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                    ),
                  this.flush(),
                  (this._injected = !0));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (u, p) {
                return (
                  typeof p == "number"
                    ? (n._serverSheet.cssRules[p] = { cssText: u })
                    : n._serverSheet.cssRules.push({ cssText: u }),
                  p
                );
              },
              deleteRule: function (u) {
                n._serverSheet.cssRules[u] = null;
              },
            };
          }),
          (m.getSheetForTag = function (n) {
            if (n.sheet) return n.sheet;
            for (var d = 0; d < document.styleSheets.length; d++)
              if (document.styleSheets[d].ownerNode === n)
                return document.styleSheets[d];
          }),
          (m.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (m.insertRule = function (n, d) {
            if (
              (s(a(n), "`insertRule` accepts only strings"), !this._isBrowser)
            )
              return (
                typeof d != "number" && (d = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(n, d),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var u = this.getSheet();
              typeof d != "number" && (d = u.cssRules.length);
              try {
                u.insertRule(n, d);
              } catch {
                return (
                  o ||
                    console.warn(
                      `StyleSheet: illegal rule: 

` +
                        n +
                        `

See https://stackoverflow.com/q/20007992 for more info`
                    ),
                  -1
                );
              }
            } else {
              var p = this._tags[d];
              this._tags.push(this.makeStyleTag(this._name, n, p));
            }
            return this._rulesCount++;
          }),
          (m.replaceRule = function (n, d) {
            if (this._optimizeForSpeed || !this._isBrowser) {
              var u = this._isBrowser ? this.getSheet() : this._serverSheet;
              if (
                (d.trim() || (d = this._deletedRulePlaceholder), !u.cssRules[n])
              )
                return n;
              u.deleteRule(n);
              try {
                u.insertRule(d, n);
              } catch {
                o ||
                  console.warn(
                    `StyleSheet: illegal rule: 

` +
                      d +
                      `

See https://stackoverflow.com/q/20007992 for more info`
                  ),
                  u.insertRule(this._deletedRulePlaceholder, n);
              }
            } else {
              var p = this._tags[n];
              s(p, "old rule at index `" + n + "` not found"),
                (p.textContent = d);
            }
            return n;
          }),
          (m.deleteRule = function (n) {
            if (!this._isBrowser) {
              this._serverSheet.deleteRule(n);
              return;
            }
            if (this._optimizeForSpeed) this.replaceRule(n, "");
            else {
              var d = this._tags[n];
              s(d, "rule at index `" + n + "` not found"),
                d.parentNode.removeChild(d),
                (this._tags[n] = null);
            }
          }),
          (m.flush = function () {
            (this._injected = !1),
              (this._rulesCount = 0),
              this._isBrowser
                ? (this._tags.forEach(function (n) {
                    return n && n.parentNode.removeChild(n);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []);
          }),
          (m.cssRules = function () {
            var n = this;
            return this._isBrowser
              ? this._tags.reduce(function (d, u) {
                  return (
                    u
                      ? (d = d.concat(
                          Array.prototype.map.call(
                            n.getSheetForTag(u).cssRules,
                            function (p) {
                              return p.cssText === n._deletedRulePlaceholder
                                ? null
                                : p;
                            }
                          )
                        ))
                      : d.push(null),
                    d
                  );
                }, [])
              : this._serverSheet.cssRules;
          }),
          (m.makeStyleTag = function (n, d, u) {
            d &&
              s(a(d), "makeStyleTag acceps only strings as second parameter");
            var p = document.createElement("style");
            this._nonce && p.setAttribute("nonce", this._nonce),
              (p.type = "text/css"),
              p.setAttribute("data-" + n, ""),
              d && p.appendChild(document.createTextNode(d));
            var h = document.head || document.getElementsByTagName("head")[0];
            return u ? h.insertBefore(p, u) : h.appendChild(p), p;
          }),
          r(l, [
            {
              key: "length",
              get: function () {
                return this._rulesCount;
              },
            },
          ]),
          l
        );
      })();
    t.default = i;
    function s(l, m) {
      if (!l) throw new Error("StyleSheet: " + m + ".");
    }
  })(Vn);
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = o(jc),
      r = o(Vn);
    function o(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var a = function (m) {
        return m.replace(/\/style/gi, "\\/style");
      },
      i = (function () {
        function l(c) {
          var n = c === void 0 ? {} : c,
            d = n.styleSheet,
            u = d === void 0 ? null : d,
            p = n.optimizeForSpeed,
            h = p === void 0 ? !1 : p,
            _ = n.isBrowser,
            x = _ === void 0 ? typeof window < "u" : _;
          (this._sheet =
            u || new r.default({ name: "styled-jsx", optimizeForSpeed: h })),
            this._sheet.inject(),
            u &&
              typeof h == "boolean" &&
              (this._sheet.setOptimizeForSpeed(h),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = x),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var m = l.prototype;
        return (
          (m.add = function (n) {
            var d = this;
            this._optimizeForSpeed === void 0 &&
              ((this._optimizeForSpeed = Array.isArray(n.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (x, A) {
                    return (x[A] = 0), x;
                  },
                  {}
                )));
            var u = this.getIdAndRules(n),
              p = u.styleId,
              h = u.rules;
            if (p in this._instancesCounts) {
              this._instancesCounts[p] += 1;
              return;
            }
            var _ = h
              .map(function (x) {
                return d._sheet.insertRule(x);
              })
              .filter(function (x) {
                return x !== -1;
              });
            (this._indices[p] = _), (this._instancesCounts[p] = 1);
          }),
          (m.remove = function (n) {
            var d = this,
              u = this.getIdAndRules(n),
              p = u.styleId;
            if (
              (s(p in this._instancesCounts, "styleId: `" + p + "` not found"),
              (this._instancesCounts[p] -= 1),
              this._instancesCounts[p] < 1)
            ) {
              var h = this._fromServer && this._fromServer[p];
              h
                ? (h.parentNode.removeChild(h), delete this._fromServer[p])
                : (this._indices[p].forEach(function (_) {
                    return d._sheet.deleteRule(_);
                  }),
                  delete this._indices[p]),
                delete this._instancesCounts[p];
            }
          }),
          (m.update = function (n, d) {
            this.add(d), this.remove(n);
          }),
          (m.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (m.cssRules = function () {
            var n = this,
              d = this._fromServer
                ? Object.keys(this._fromServer).map(function (p) {
                    return [p, n._fromServer[p]];
                  })
                : [],
              u = this._sheet.cssRules();
            return d.concat(
              Object.keys(this._indices)
                .map(function (p) {
                  return [
                    p,
                    n._indices[p]
                      .map(function (h) {
                        return u[h].cssText;
                      })
                      .join(
                        n._optimizeForSpeed
                          ? ""
                          : `
`
                      ),
                  ];
                })
                .filter(function (p) {
                  return Boolean(p[1]);
                })
            );
          }),
          (m.createComputeId = function () {
            var n = {};
            return function (d, u) {
              if (!u) return "jsx-" + d;
              var p = String(u),
                h = d + p;
              return (
                n[h] || (n[h] = "jsx-" + (0, e.default)(d + "-" + p)), n[h]
              );
            };
          }),
          (m.createComputeSelector = function (n) {
            n === void 0 && (n = /__jsx-style-dynamic-selector/g);
            var d = {};
            return function (u, p) {
              this._isBrowser || (p = a(p));
              var h = u + p;
              return d[h] || (d[h] = p.replace(n, u)), d[h];
            };
          }),
          (m.getIdAndRules = function (n) {
            var d = this,
              u = n.children,
              p = n.dynamic,
              h = n.id;
            if (p) {
              var _ = this.computeId(h, p);
              return {
                styleId: _,
                rules: Array.isArray(u)
                  ? u.map(function (x) {
                      return d.computeSelector(_, x);
                    })
                  : [this.computeSelector(_, u)],
              };
            }
            return {
              styleId: this.computeId(h),
              rules: Array.isArray(u) ? u : [u],
            };
          }),
          (m.selectFromServer = function () {
            var n = Array.prototype.slice.call(
              document.querySelectorAll('[id^="__jsx-"]')
            );
            return n.reduce(function (d, u) {
              var p = u.id.slice(2);
              return (d[p] = u), d;
            }, {});
          }),
          l
        );
      })();
    t.default = i;
    function s(l, m) {
      if (!l) throw new Error("StyleSheetRegistry: " + m + ".");
    }
  })(Hn);
  (function (t) {
    (t.__esModule = !0), (t.default = i), (t.flush = s);
    var e = f,
      r = o(Hn);
    function o(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var a = new r.default();
    function i(l) {
      return typeof window > "u"
        ? (a.add(l), null)
        : ((0, e.useLayoutEffect)(
            function () {
              return (
                a.add(l),
                function () {
                  a.remove(l);
                }
              );
            },
            [l.id, String(l.dynamic)]
          ),
          null);
    }
    i.dynamic = function (l) {
      return l
        .map(function (m) {
          var c = m[0],
            n = m[1];
          return a.computeId(c, n);
        })
        .join(" ");
    };
    function s() {
      var l = a.cssRules();
      return a.flush(), l;
    }
  })(Ze);
  var Fn = Ze.default || Ze;
  Fn.flush = Ze.flush;
  var er = {};
  (function (t) {
    (t.__esModule = !0), (t.default = a), (t.flushToHTML = i);
    var e = o(f),
      r = Ze.default || Ze;
    r.flush = Ze.flush;
    function o(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function a(s) {
      return (
        s === void 0 && (s = {}),
        (0, r.flush)().map(function (l) {
          var m = l[0],
            c = l[1];
          return e.default.createElement("style", {
            id: "__" + m,
            key: "__" + m,
            nonce: s.nonce ? s.nonce : void 0,
            dangerouslySetInnerHTML: { __html: c },
          });
        })
      );
    }
    function i(s) {
      return (
        s === void 0 && (s = {}),
        (0, r.flush)().reduce(function (l, m) {
          var c = m[0],
            n = m[1];
          return (
            (l +=
              '<style id="__' +
              c +
              '"' +
              (s.nonce ? ' nonce="' + s.nonce + '"' : "") +
              ">" +
              n +
              "</style>"),
            l
          );
        }, "")
      );
    }
  })(er);
  var tr = er.default || er;
  tr.flushToHTML = er.flushToHTML;
  var w = Fn;
  j();
  j();
  function Ee(t) {
    return (
      (Ee =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      Ee(t)
    );
  }
  var rr = {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
      prism:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace',
    },
    ut = {
      xs: { min: "0", max: "650px" },
      sm: { min: "650px", max: "900px" },
      md: { min: "900px", max: "1280px" },
      lg: { min: "1280px", max: "1920px" },
      xl: { min: "1920px", max: "10000px" },
    },
    or = {
      gap: "16pt",
      gapNegative: "-16pt",
      gapHalf: "8pt",
      gapHalfNegative: "-8pt",
      gapQuarter: "4pt",
      gapQuarterNegative: "-4pt",
      pageMargin: "16pt",
      pageWidth: "750pt",
      pageWidthWithMargin: "782pt",
      breakpointMobile: ut.xs.max,
      breakpointTablet: ut.sm.max,
      radius: "6px",
      unit: "16px",
    };
  var Ic = {
      accents_1: "#fafafa",
      accents_2: "#eaeaea",
      accents_3: "#999",
      accents_4: "#888",
      accents_5: "#666",
      accents_6: "#444",
      accents_7: "#333",
      accents_8: "#111",
      background: "#fff",
      foreground: "#000",
      selection: "#79ffe1",
      secondary: "#666",
      code: "#f81ce5",
      border: "#eaeaea",
      error: "#e00",
      errorLight: "#ff1a1a",
      errorLighter: "#f7d4d6",
      errorDark: "#c50000",
      success: "#0070f3",
      successLight: "#3291ff",
      successLighter: "#d3e5ff",
      successDark: "#0761d1",
      warning: "#f5a623",
      warningLight: "#f7b955",
      warningLighter: "#ffefcf",
      warningDark: "#ab570a",
      cyan: "#50e3c2",
      cyanLighter: "#aaffec",
      cyanLight: "#79ffe1",
      cyanDark: "#29bc9b",
      violet: "#7928ca",
      violetLighter: "#e3d7fc",
      violetLight: "#8a63d2",
      violetDark: "#4c2889",
      purple: "#f81ce5",
      alert: "#ff0080",
      magenta: "#eb367f",
      link: "#0070f3",
    },
    Lc = {
      linkStyle: "none",
      linkHoverStyle: "none",
      dropdownBoxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.02)",
      scrollerStart: "rgba(255, 255, 255, 1)",
      scrollerEnd: "rgba(255, 255, 255, 0)",
      shadowSmall: "0 5px 10px rgba(0, 0, 0, 0.12)",
      shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      shadowLarge: "0 30px 60px rgba(0, 0, 0, 0.12)",
      portalOpacity: 0.25,
    },
    Oc = rr,
    Bc = ut,
    Mc = or,
    zc = {
      type: "light",
      font: Oc,
      layout: Mc,
      palette: Ic,
      breakpoints: Bc,
      expressiveness: Lc,
    },
    ar = zc;
  var Dc = {
      accents_1: "#111",
      accents_2: "#333",
      accents_3: "#444",
      accents_4: "#666",
      accents_5: "#888",
      accents_6: "#999",
      accents_7: "#eaeaea",
      accents_8: "#fafafa",
      background: "#000",
      foreground: "#fff",
      selection: "#f81ce5",
      secondary: "#888",
      code: "#79ffe1",
      border: "#333",
      error: "#e00",
      errorLighter: "#f7d4d6",
      errorLight: "#ff1a1a",
      errorDark: "#c50000",
      success: "#0070f3",
      successLighter: "#d3e5ff",
      successLight: "#3291ff",
      successDark: "#0761d1",
      warning: "#f5a623",
      warningLighter: "#ffefcf",
      warningLight: "#f7b955",
      warningDark: "#ab570a",
      cyan: "#50e3c2",
      cyanLighter: "#aaffec",
      cyanLight: "#79ffe1",
      cyanDark: "#29bc9b",
      violet: "#7928ca",
      violetLighter: "#e3d7fc",
      violetLight: "#8a63d2",
      violetDark: "#4c2889",
      purple: "#f81ce5",
      alert: "#ff0080",
      magenta: "#eb367f",
      link: "#3291ff",
    },
    Wc = {
      linkStyle: "none",
      linkHoverStyle: "none",
      dropdownBoxShadow: "0 0 0 1px #333",
      scrollerStart: "rgba(255, 255, 255, 1)",
      scrollerEnd: "rgba(255, 255, 255, 0)",
      shadowSmall: "0 0 0 1px #333",
      shadowMedium: "0 0 0 1px #333",
      shadowLarge: "0 0 0 1px #333",
      portalOpacity: 0.75,
    },
    Gc = rr,
    Hc = ut,
    Vc = or,
    Fc = {
      type: "dark",
      font: Gc,
      layout: Vc,
      palette: Dc,
      breakpoints: Hc,
      expressiveness: Wc,
    },
    co = Fc;
  var nr = function (e) {
      return e && Ee(e) === "object";
    },
    Uc = function t(e, r) {
      if (!nr(r) || !nr(e)) return e;
      for (var o = Object.keys(e), a = {}, i = 0, s = o; i < s.length; i++) {
        var l = s[i],
          m = e[l],
          c = r[l];
        Array.isArray(m) && Array.isArray(c)
          ? (a[l] = c.concat(m))
          : nr(m) && nr(c)
          ? (a[l] = t(m, N({}, c)))
          : c
          ? (a[l] = c)
          : (a[l] = m);
      }
      return a;
    },
    Un = function () {
      return [ar, co];
    },
    qc = function () {
      return ar;
    },
    ir = function (e) {
      if (!e) return !1;
      var r = Un(),
        o = r.find(function (a) {
          return a.type === e;
        });
      return !o;
    },
    $c = function (e) {
      if (!e) return !1;
      var r = typeof e == "string",
        o = r ? e : e.type;
      return !ir(o);
    },
    Xc = function () {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return !!e.find(function (r) {
        return ir(r.type);
      });
    },
    uo = function (e, r) {
      if (!ir(r.type)) throw new Error("Duplicate or unavailable theme type");
      return Uc(e, r);
    },
    Jc = function (e) {
      return uo(co, e);
    },
    Kc = function (e) {
      return uo(ar, e);
    },
    Yc = {
      isPresetTheme: $c,
      isAvailableThemeType: ir,
      hasUserCustomTheme: Xc,
      getPresets: Un,
      getPresetStaticTheme: qc,
      create: uo,
      createFromDark: Jc,
      createFromLight: Kc,
    },
    sr = Yc;
  var Qe = sr;
  var Zc = Qe.getPresetStaticTheme(),
    mo = f.createContext(Zc),
    qn = function () {
      return f.useContext(mo);
    };
  var H = qn;
  j();
  var Qc = function (e) {
      var r = e.children,
        o = e.isRight,
        a = H();
      return f.createElement(
        "span",
        {
          className:
            w.dynamic([
              [
                "3089782703",
                [
                  a.layout.gapHalf,
                  a.palette.accents_4,
                  a.palette.accents_1,
                  a.layout.radius,
                  a.layout.radius,
                  a.palette.border,
                  a.palette.border,
                  a.palette.border,
                  a.layout.radius,
                  a.layout.radius,
                  a.palette.border,
                ],
              ],
            ]) +
            " " +
            ((o ? "right" : "") || ""),
        },
        r,
        f.createElement(
          w,
          {
            id: "3089782703",
            dynamic: [
              a.layout.gapHalf,
              a.palette.accents_4,
              a.palette.accents_1,
              a.layout.radius,
              a.layout.radius,
              a.palette.border,
              a.palette.border,
              a.palette.border,
              a.layout.radius,
              a.layout.radius,
              a.palette.border,
            ],
          },
          "span.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:initial;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0;padding:0 "
            .concat(a.layout.gapHalf, ";color:")
            .concat(a.palette.accents_4, ";background-color:")
            .concat(a.palette.accents_1, ";border-top-left-radius:")
            .concat(a.layout.radius, ";border-bottom-left-radius:")
            .concat(a.layout.radius, ";border-top:1px solid ")
            .concat(a.palette.border, ";border-left:1px solid ")
            .concat(a.palette.border, ";border-bottom:1px solid ")
            .concat(
              a.palette.border,
              ";font-size:inherit;line-height:1;}span.right.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:"
            )
            .concat(a.layout.radius, ";border-bottom-right-radius:")
            .concat(a.layout.radius, ";border-left:0;border-right:1px solid ")
            .concat(a.palette.border, ";}")
        )
      );
    },
    eu = f.memo(Qc),
    fo = eu;
  j();
  var $n = function (e) {
    var r = e.children,
      o = H();
    return f.createElement(
      "label",
      { className: w.dynamic([["1278828862", [o.palette.accents_6]]]) },
      r,
      f.createElement(
        w,
        { id: "1278828862", dynamic: [o.palette.accents_6] },
        "label.__jsx-style-dynamic-selector{display:block;font-weight:normal;color:".concat(
          o.palette.accents_6,
          ";padding:0 0 0 1px;margin-bottom:0.5em;font-size:1em;line-height:1.5;}label.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}label.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}"
        )
      )
    );
  };
  $n.displayName = "GeistInputBlockLabel";
  var tu = f.memo($n),
    Xn = tu;
  j();
  var Jn = function (e) {
    var r = e.icon,
      o = e.clickable,
      a = e.onClick;
    return f.createElement(
      "span",
      {
        onClick: a,
        className:
          w.dynamic([
            ["4247656379", [o ? "pointer" : "default", o ? "auto" : "none"]],
          ]) + " input-icon",
      },
      r,
      f.createElement(
        w,
        {
          id: "4247656379",
          dynamic: [o ? "pointer" : "default", o ? "auto" : "none"],
        },
        ".input-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;line-height:1;position:relative;cursor:"
          .concat(o ? "pointer" : "default", ";pointer-events:")
          .concat(
            o ? "auto" : "none",
            ";}.input-icon.__jsx-style-dynamic-selector svg{width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}"
          )
      )
    );
  };
  Jn.displayName = "GeistInputIcon";
  var ru = f.memo(Jn),
    po = ru;
  j();
  var ou = function (e) {
      for (var r = Object.keys(e), o = r.length, a = "", i = 0; i < o; i++) {
        var s = r[i],
          l = e[r[i]];
        l && (a = a ? "".concat(a, " ").concat(String(s)) : String(s));
      }
      return a;
    },
    au = function (e) {
      return Ee(e) === "object" && !Array.isArray(e);
    },
    nu = function () {
      var e = arguments.length,
        r = "";
      if (e === 0) return r;
      for (var o = 0; o < e; o++) {
        var a = o < 0 || arguments.length <= o ? void 0 : arguments[o];
        a &&
          (au(a)
            ? (r += " ".concat(ou(a)))
            : (r += " ".concat(String(a).trim())));
      }
      return r.trim();
    },
    Kn = nu;
  var V = Kn;
  var iu = function (e) {
      var r = e.onClick,
        o = e.disabled,
        a = e.visible,
        i = H(),
        s = V("clear-icon", { visible: a }),
        l = function (c) {
          c.preventDefault(),
            c.stopPropagation(),
            c.nativeEvent.stopImmediatePropagation(),
            r && r(c);
        };
      return f.createElement(
        "div",
        {
          onClick: l,
          className:
            w.dynamic([
              [
                "1567030211",
                [
                  o ? "not-allowed" : "pointer",
                  i.palette.accents_3,
                  o ? i.palette.accents_3 : i.palette.foreground,
                ],
              ],
            ]) +
            " " +
            (s || ""),
        },
        f.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
            shapeRendering: "geometricPrecision",
            className: w.dynamic([
              [
                "1567030211",
                [
                  o ? "not-allowed" : "pointer",
                  i.palette.accents_3,
                  o ? i.palette.accents_3 : i.palette.foreground,
                ],
              ],
            ]),
          },
          f.createElement("path", {
            d: "M18 6L6 18",
            className: w.dynamic([
              [
                "1567030211",
                [
                  o ? "not-allowed" : "pointer",
                  i.palette.accents_3,
                  o ? i.palette.accents_3 : i.palette.foreground,
                ],
              ],
            ]),
          }),
          f.createElement("path", {
            d: "M6 6l12 12",
            className: w.dynamic([
              [
                "1567030211",
                [
                  o ? "not-allowed" : "pointer",
                  i.palette.accents_3,
                  o ? i.palette.accents_3 : i.palette.foreground,
                ],
              ],
            ]),
          })
        ),
        f.createElement(
          w,
          {
            id: "1567030211",
            dynamic: [
              o ? "not-allowed" : "pointer",
              i.palette.accents_3,
              o ? i.palette.accents_3 : i.palette.foreground,
            ],
          },
          ".clear-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:"
            .concat(
              o ? "not-allowed" : "pointer",
              ";-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;margin:0;padding:0;color:"
            )
            .concat(
              i.palette.accents_3,
              ";visibility:hidden;opacity:0;}.visible.__jsx-style-dynamic-selector{visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:"
            )
            .concat(
              o ? i.palette.accents_3 : i.palette.foreground,
              ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}"
            )
        )
      );
    },
    su = f.memo(iu),
    Yn = su;
  var lr = function (e, r) {
    var o = {
      default: {
        color: e.foreground,
        borderColor: e.border,
        hoverBorder: e.accents_5,
      },
      secondary: {
        color: e.foreground,
        borderColor: e.secondary,
        hoverBorder: e.secondary,
      },
      success: {
        color: e.foreground,
        borderColor: e.successLight,
        hoverBorder: e.success,
      },
      warning: {
        color: e.foreground,
        borderColor: e.warningLight,
        hoverBorder: e.warning,
      },
      error: { color: e.error, borderColor: e.error, hoverBorder: e.errorDark },
    };
    return r ? o[r] : o.default;
  };
  var cr = {
    disabled: !1,
    readOnly: !1,
    clearable: !1,
    iconClickable: !1,
    type: "default",
    htmlType: "text",
    autoComplete: "off",
    className: "",
    placeholder: "",
    initialValue: "",
  };
  j();
  j();
  var Zn = [
      "width",
      "height",
      "padding",
      "margin",
      "w",
      "h",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "pl",
      "pr",
      "pt",
      "pb",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "ml",
      "mr",
      "mt",
      "mb",
      "px",
      "py",
      "mx",
      "my",
      "font",
      "unit",
      "scale",
    ],
    Ae = function (e) {
      return "".concat(e);
    },
    lu = {
      getScaleProps: function () {},
      getAllScaleProps: function () {
        return {};
      },
      SCALES: {
        pl: Ae,
        pr: Ae,
        pb: Ae,
        pt: Ae,
        px: Ae,
        py: Ae,
        mb: Ae,
        ml: Ae,
        mr: Ae,
        mt: Ae,
        mx: Ae,
        my: Ae,
        width: Ae,
        height: Ae,
        font: Ae,
      },
      unit: "16px",
    },
    go = f.createContext(lu),
    ur = function () {
      return f.useContext(go);
    };
  j();
  var mr = function () {
    return Math.random().toString(32).slice(2, 10);
  };
  var Qn = function (e, r) {
      var o = [],
        a = f.Children.map(e, function (s) {
          return f.isValidElement(s) && s.type === r ? (o.push(s), null) : s;
        }),
        i = o.length >= 0 ? o : void 0;
      return [a, i];
    },
    ei = function (e, r, o) {
      var a = [],
        i = Array.isArray(o),
        s = f.Children.map(e, function (m) {
          return f.isValidElement(m)
            ? m.props
              ? i
                ? o.includes(m.props[r])
                  ? (a.push(m), null)
                  : m
                : m.props[r] === o
                ? (a.push(m), null)
                : m
              : m
            : null;
        }),
        l = a.length >= 0 ? a : void 0;
      return [s, l];
    };
  var ti = function (e) {
      return e
        ? e != null &&
          e.dataset &&
          e !== null &&
          e !== void 0 &&
          e.dataset.geist
          ? !0
          : (e.attributes.getNamedItem("data-geist"),
            !!e.attributes.getNamedItem("data-geist"))
        : !1;
    },
    ri = function () {
      return Boolean(
        typeof window < "u" && window.document && window.document.createElement
      );
    };
  var oi = function (e) {
    return e !== void 0 && !Number.isNaN(+e);
  };
  function ni(t, e) {
    var r = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = cu(t)) ||
        (e && t && typeof t.length == "number")
      ) {
        r && (t = r);
        var o = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
          },
          e: function (c) {
            throw c;
          },
          f: a,
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var i = !0,
      s = !1,
      l;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var c = r.next();
        return (i = c.done), c;
      },
      e: function (c) {
        (s = !0), (l = c);
      },
      f: function () {
        try {
          !i && r.return != null && r.return();
        } finally {
          if (s) throw l;
        }
      },
    };
  }
  function cu(t, e) {
    if (t) {
      if (typeof t == "string") return ai(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (
        (r === "Object" && t.constructor && (r = t.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(t);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return ai(t, e);
    }
  }
  function ai(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
    return o;
  }
  var ii = function (e) {
      var r = function (a) {
        if (!Array.isArray(a)) return e[a];
        var i = void 0,
          s = ni(a),
          l;
        try {
          for (s.s(); !(l = s.n()).done; ) {
            var m = l.value,
              c = e[m];
            typeof c < "u" && (i = c);
          }
        } catch (n) {
          s.e(n);
        } finally {
          s.f();
        }
        return i;
      };
      return r;
    },
    si = function (e) {
      var r = function () {
        var a = {},
          i = ni(Zn),
          s;
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var l = s.value,
              m = e[l];
            typeof m < "u" && (a[l] = m);
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return a;
      };
      return r;
    };
  var uu = ["children"],
    mu = [
      "paddingLeft",
      "pl",
      "paddingRight",
      "pr",
      "paddingTop",
      "pt",
      "paddingBottom",
      "pb",
      "marginTop",
      "mt",
      "marginRight",
      "mr",
      "marginBottom",
      "mb",
      "marginLeft",
      "ml",
      "px",
      "py",
      "mx",
      "my",
      "width",
      "height",
      "font",
      "w",
      "h",
      "margin",
      "padding",
      "unit",
      "scale",
    ],
    du = function (e) {
      if (e === 1) return e;
      var r = Math.abs((e - 1) / 2);
      return e > 1 ? 1 + r : 1 - r;
    },
    fu = function (e) {
      var r = Qt(function (o, a) {
        var i,
          s,
          l,
          m,
          c,
          n,
          d,
          u,
          p,
          h,
          _,
          x,
          A,
          y,
          b,
          v,
          k,
          g,
          T,
          C,
          O,
          S,
          R,
          P,
          D,
          G,
          J,
          ne,
          Z,
          se,
          le,
          te,
          de = o.children,
          I = F(o, uu),
          ke = H(),
          K = ke.layout,
          q = I.paddingLeft,
          X = I.pl,
          he = I.paddingRight,
          U = I.pr,
          re = I.paddingTop,
          oe = I.pt,
          ae = I.paddingBottom,
          ie = I.pb,
          xe = I.marginTop,
          ve = I.mt,
          be = I.marginRight,
          fe = I.mr,
          pe = I.marginBottom,
          ee = I.mb,
          ye = I.marginLeft,
          ge = I.ml,
          _e = I.px,
          ze = I.py,
          vt = I.mx,
          xt = I.my,
          Hr = I.width,
          Vr = I.height,
          Zl = I.font,
          Ql = I.w,
          ec = I.h,
          rt = I.margin,
          ot = I.padding,
          La = I.unit,
          Fr = La === void 0 ? K.unit : La,
          Oa = I.scale,
          tc = Oa === void 0 ? 1 : Oa,
          rc = F(I, mu),
          Ce = function (Wt) {
            return function (Ur, Gt) {
              Ur === 0 && ((Ur = 1), (Gt = Gt || 0));
              var Ba = du(tc) * Ur;
              if (typeof Wt > "u")
                return typeof Gt < "u"
                  ? "".concat(Gt)
                  : "calc(".concat(Ba, " * ").concat(Fr, ")");
              if (!oi(Wt)) return "".concat(Wt);
              var ac = Ba * Number(Wt);
              return "calc(".concat(ac, " * ").concat(Fr, ")");
            };
          },
          oc = {
            unit: Fr,
            SCALES: {
              pt: Ce(
                (i = (s = re ?? oe) !== null && s !== void 0 ? s : ze) !==
                  null && i !== void 0
                  ? i
                  : ot
              ),
              pr: Ce(
                (l = (m = he ?? U) !== null && m !== void 0 ? m : _e) !==
                  null && l !== void 0
                  ? l
                  : ot
              ),
              pb: Ce(
                (c = (n = ae ?? ie) !== null && n !== void 0 ? n : ze) !==
                  null && c !== void 0
                  ? c
                  : ot
              ),
              pl: Ce(
                (d = (u = q ?? X) !== null && u !== void 0 ? u : _e) !== null &&
                  d !== void 0
                  ? d
                  : ot
              ),
              px: Ce(
                (p =
                  (h =
                    (_ = (x = _e ?? q) !== null && x !== void 0 ? x : he) !==
                      null && _ !== void 0
                      ? _
                      : X) !== null && h !== void 0
                    ? h
                    : U) !== null && p !== void 0
                  ? p
                  : ot
              ),
              py: Ce(
                (A =
                  (y =
                    (b = (v = ze ?? re) !== null && v !== void 0 ? v : ae) !==
                      null && b !== void 0
                      ? b
                      : oe) !== null && y !== void 0
                    ? y
                    : ie) !== null && A !== void 0
                  ? A
                  : ot
              ),
              mt: Ce(
                (k = (g = xe ?? ve) !== null && g !== void 0 ? g : xt) !==
                  null && k !== void 0
                  ? k
                  : rt
              ),
              mr: Ce(
                (T = (C = be ?? fe) !== null && C !== void 0 ? C : vt) !==
                  null && T !== void 0
                  ? T
                  : rt
              ),
              mb: Ce(
                (O = (S = pe ?? ee) !== null && S !== void 0 ? S : xt) !==
                  null && O !== void 0
                  ? O
                  : rt
              ),
              ml: Ce(
                (R = (P = ye ?? ge) !== null && P !== void 0 ? P : vt) !==
                  null && R !== void 0
                  ? R
                  : rt
              ),
              mx: Ce(
                (D =
                  (G =
                    (J =
                      (ne = vt ?? ye) !== null && ne !== void 0 ? ne : be) !==
                      null && J !== void 0
                      ? J
                      : ge) !== null && G !== void 0
                    ? G
                    : fe) !== null && D !== void 0
                  ? D
                  : rt
              ),
              my: Ce(
                (Z =
                  (se =
                    (le =
                      (te = xt ?? xe) !== null && te !== void 0 ? te : pe) !==
                      null && le !== void 0
                      ? le
                      : ve) !== null && se !== void 0
                    ? se
                    : ee) !== null && Z !== void 0
                  ? Z
                  : rt
              ),
              width: Ce(Hr ?? Ql),
              height: Ce(Vr ?? ec),
              font: Ce(Zl),
            },
            getScaleProps: ii(I),
            getAllScaleProps: si(I),
          };
        return f.createElement(
          go.Provider,
          { value: oc },
          f.createElement(e, N({}, rc, { ref: a }), de)
        );
      });
      return (r.displayName = "Scale".concat(e.displayName || "Wrapper")), r;
    },
    Y = fu;
  var Q = ur;
  var pu = [
      "label",
      "labelRight",
      "type",
      "htmlType",
      "icon",
      "iconRight",
      "iconClickable",
      "onIconClick",
      "initialValue",
      "onChange",
      "readOnly",
      "value",
      "onClearClick",
      "clearable",
      "className",
      "onBlur",
      "onFocus",
      "autoComplete",
      "placeholder",
      "children",
      "disabled",
    ],
    gu = function (e, r) {
      return N({}, r, { target: e, currentTarget: e });
    },
    ho = f.forwardRef(function (t, e) {
      var r = t.label,
        o = t.labelRight,
        a = t.type,
        i = t.htmlType,
        s = t.icon,
        l = t.iconRight,
        m = t.iconClickable,
        c = t.onIconClick,
        n = t.initialValue,
        d = t.onChange,
        u = t.readOnly,
        p = t.value,
        h = t.onClearClick,
        _ = t.clearable,
        x = t.className,
        A = t.onBlur,
        y = t.onFocus,
        b = t.autoComplete,
        v = t.placeholder,
        k = t.children,
        g = t.disabled,
        T = F(t, pu),
        C = H(),
        O = Q(),
        S = O.SCALES,
        R = $(null);
      we(e, function () {
        return R.current;
      });
      var P = B(n),
        D = W(P, 2),
        G = D[0],
        J = D[1],
        ne = B(!1),
        Z = W(ne, 2),
        se = Z[0],
        le = Z[1],
        te = E(
          function () {
            return p !== void 0;
          },
          [p]
        ),
        de = E(
          function () {
            return o ? "right-label" : r ? "left-label" : "";
          },
          [r, o]
        ),
        I = E(
          function () {
            return l ? "right-icon" : s ? "left-icon" : "";
          },
          [s, l]
        ),
        ke = E(
          function () {
            return lr(C.palette, a);
          },
          [C.palette, a]
        ),
        K = ke.color,
        q = ke.borderColor,
        X = ke.hoverBorder,
        he = function (fe) {
          g || u || (J(fe.target.value), d && d(fe));
        },
        U = function (fe) {
          if ((J(""), h && h(fe), !!R.current)) {
            var pe = gu(R.current, fe);
            (pe.target.value = ""), d && d(pe), R.current.focus();
          }
        },
        re = function (fe) {
          le(!0), y && y(fe);
        },
        oe = function (fe) {
          le(!1), A && A(fe);
        },
        ae = function (fe) {
          g || (c && c(fe));
        },
        ie = E(
          function () {
            return { clickable: m, onClick: ae };
          },
          [m, ae]
        );
      M(function () {
        te && J(p);
      });
      var xe = te ? { value: G } : { defaultValue: n },
        ve = N({}, T, xe);
      return f.createElement(
        "div",
        {
          className:
            w.dynamic([
              [
                "575189429",
                [
                  S.height(2.25),
                  S.font(0.875),
                  S.width(1, "initial"),
                  S.pt(0),
                  S.pr(0),
                  S.pb(0),
                  S.pl(0),
                  S.mt(0),
                  S.mr(0),
                  S.mb(0),
                  S.ml(0),
                  S.width(1, "initial"),
                  C.layout.radius,
                  q,
                  C.palette.accents_1,
                  C.palette.accents_2,
                  X,
                  S.font(0.875),
                  K,
                  C.palette.accents_3,
                  C.palette.background,
                  K,
                ],
              ],
            ]) + " with-label",
        },
        k && f.createElement(Xn, null, k),
        f.createElement(
          "div",
          {
            className:
              w.dynamic([
                [
                  "575189429",
                  [
                    S.height(2.25),
                    S.font(0.875),
                    S.width(1, "initial"),
                    S.pt(0),
                    S.pr(0),
                    S.pb(0),
                    S.pl(0),
                    S.mt(0),
                    S.mr(0),
                    S.mb(0),
                    S.ml(0),
                    S.width(1, "initial"),
                    C.layout.radius,
                    q,
                    C.palette.accents_1,
                    C.palette.accents_2,
                    X,
                    S.font(0.875),
                    K,
                    C.palette.accents_3,
                    C.palette.background,
                    K,
                  ],
                ],
              ]) +
              " " +
              (V("input-container", x) || ""),
          },
          r && f.createElement(fo, null, r),
          f.createElement(
            "div",
            {
              className:
                w.dynamic([
                  [
                    "575189429",
                    [
                      S.height(2.25),
                      S.font(0.875),
                      S.width(1, "initial"),
                      S.pt(0),
                      S.pr(0),
                      S.pb(0),
                      S.pl(0),
                      S.mt(0),
                      S.mr(0),
                      S.mb(0),
                      S.ml(0),
                      S.width(1, "initial"),
                      C.layout.radius,
                      q,
                      C.palette.accents_1,
                      C.palette.accents_2,
                      X,
                      S.font(0.875),
                      K,
                      C.palette.accents_3,
                      C.palette.background,
                      K,
                    ],
                  ],
                ]) +
                " " +
                (V("input-wrapper", { hover: se, disabled: g }, de) || ""),
            },
            s && f.createElement(po, N({ icon: s }, ie)),
            f.createElement(
              "input",
              N(
                {
                  type: i,
                  ref: R,
                  placeholder: v,
                  disabled: g,
                  readOnly: u,
                  onFocus: re,
                  onBlur: oe,
                  onChange: he,
                  autoComplete: b,
                },
                ve,
                {
                  className:
                    w.dynamic([
                      [
                        "575189429",
                        [
                          S.height(2.25),
                          S.font(0.875),
                          S.width(1, "initial"),
                          S.pt(0),
                          S.pr(0),
                          S.pb(0),
                          S.pl(0),
                          S.mt(0),
                          S.mr(0),
                          S.mb(0),
                          S.ml(0),
                          S.width(1, "initial"),
                          C.layout.radius,
                          q,
                          C.palette.accents_1,
                          C.palette.accents_2,
                          X,
                          S.font(0.875),
                          K,
                          C.palette.accents_3,
                          C.palette.background,
                          K,
                        ],
                      ],
                    ]) +
                    " " +
                    ((ve && ve.className != null && ve.className) ||
                      V({ disabled: g }, I) ||
                      ""),
                }
              )
            ),
            _ &&
              f.createElement(Yn, {
                visible: Boolean(R.current && R.current.value !== ""),
                disabled: g || u,
                onClick: U,
              }),
            l && f.createElement(po, N({ icon: l }, ie))
          ),
          o && f.createElement(fo, { isRight: !0 }, o)
        ),
        f.createElement(
          w,
          {
            id: "575189429",
            dynamic: [
              S.height(2.25),
              S.font(0.875),
              S.width(1, "initial"),
              S.pt(0),
              S.pr(0),
              S.pb(0),
              S.pl(0),
              S.mt(0),
              S.mr(0),
              S.mb(0),
              S.ml(0),
              S.width(1, "initial"),
              C.layout.radius,
              q,
              C.palette.accents_1,
              C.palette.accents_2,
              X,
              S.font(0.875),
              K,
              C.palette.accents_3,
              C.palette.background,
              K,
            ],
          },
          ".with-label.__jsx-style-dynamic-selector{display:inline-block;box-sizing:border-box;-webkit-box-align:center;--input-height:"
            .concat(S.height(2.25), ";font-size:")
            .concat(S.font(0.875), ";width:")
            .concat(S.width(1, "initial"), ";padding:")
            .concat(S.pt(0), " ")
            .concat(S.pr(0), " ")
            .concat(S.pb(0), " ")
            .concat(S.pl(0), ";margin:")
            .concat(S.mt(0), " ")
            .concat(S.mr(0), " ")
            .concat(S.mb(0), " ")
            .concat(
              S.ml(0),
              ";}.input-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:"
            )
            .concat(
              S.width(1, "initial"),
              ";height:var(--input-height);}.input-wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:"
            )
            .concat(C.layout.radius, ";border:1px solid ")
            .concat(
              q,
              ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;}.input-wrapper.left-label.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;}.input-wrapper.right-label.__jsx-style-dynamic-selector{border-top-right-radius:0;border-bottom-right-radius:0;}.input-wrapper.disabled.__jsx-style-dynamic-selector{background-color:"
            )
            .concat(C.palette.accents_1, ";border-color:")
            .concat(
              C.palette.accents_2,
              ";cursor:not-allowed;}input.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}.input-wrapper.hover.__jsx-style-dynamic-selector{border-color:"
            )
            .concat(
              X,
              ";}input.__jsx-style-dynamic-selector{margin:0.25em 0.625em;padding:0;box-shadow:none;font-size:"
            )
            .concat(
              S.font(0.875),
              ";background-color:transparent;border:none;color:"
            )
            .concat(
              K,
              ";outline:none;border-radius:0;width:100%;min-width:0;-webkit-appearance:none;}input.left-icon.__jsx-style-dynamic-selector{margin-left:0;}input.right-icon.__jsx-style-dynamic-selector{margin-right:0;}.__jsx-style-dynamic-selector::-webkit-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:"
            )
            .concat(
              C.palette.accents_3,
              ";}.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:"
            )
            .concat(
              C.palette.accents_3,
              ";}.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:"
            )
            .concat(
              C.palette.accents_3,
              ";}.__jsx-style-dynamic-selector::placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:"
            )
            .concat(
              C.palette.accents_3,
              ";}.__jsx-style-dynamic-selector::-ms-reveal{display:none !important;}input.__jsx-style-dynamic-selector:-webkit-autofill,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px "
            )
            .concat(
              C.palette.background,
              " inset !important;-webkit-text-fill-color:"
            )
            .concat(K, " !important;}")
        )
      );
    });
  ho.defaultProps = cr;
  ho.displayName = "GeistInput";
  var hu = Y(ho),
    mt = hu;
  j();
  var je = function () {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return r;
  };
  var v0 = je(
      "default",
      "secondary",
      "success",
      "warning",
      "error",
      "abort",
      "secondary-light",
      "success-light",
      "warning-light",
      "error-light"
    ),
    x0 = je("default", "secondary", "success", "warning", "error"),
    y0 = je(
      "default",
      "secondary",
      "success",
      "warning",
      "error",
      "dark",
      "lite"
    ),
    _0 = je(
      "default",
      "secondary",
      "success",
      "warning",
      "error",
      "dark",
      "lite",
      "alert",
      "purple",
      "violet",
      "cyan"
    ),
    w0 = je("default", "silent", "prevent"),
    S0 = je("hover", "click"),
    k0 = je(
      "top",
      "topStart",
      "topEnd",
      "left",
      "leftStart",
      "leftEnd",
      "bottom",
      "bottomStart",
      "bottomEnd",
      "right",
      "rightStart",
      "rightEnd"
    ),
    C0 = je("start", "center", "end", "left", "right");
  var bu = [
      "type",
      "disabled",
      "readOnly",
      "onFocus",
      "onBlur",
      "className",
      "initialValue",
      "onChange",
      "value",
      "placeholder",
      "resize",
    ],
    M0 = je("none", "both", "horizontal", "vertical", "initial", "inherit"),
    vu = {
      initialValue: "",
      type: "default",
      disabled: !1,
      readOnly: !1,
      className: "",
      resize: "none",
    },
    bo = f.forwardRef(function (t, e) {
      var r = t.type,
        o = t.disabled,
        a = t.readOnly,
        i = t.onFocus,
        s = t.onBlur,
        l = t.className,
        m = t.initialValue,
        c = t.onChange,
        n = t.value,
        d = t.placeholder,
        u = t.resize,
        p = F(t, bu),
        h = H(),
        _ = Q(),
        x = _.SCALES,
        A = $(null);
      we(e, function () {
        return A.current;
      });
      var y = E(
          function () {
            return n !== void 0;
          },
          [n]
        ),
        b = B(m),
        v = W(b, 2),
        k = v[0],
        g = v[1],
        T = B(!1),
        C = W(T, 2),
        O = C[0],
        S = C[1],
        R = E(
          function () {
            return lr(h.palette, r);
          },
          [h.palette, r]
        ),
        P = R.color,
        D = R.borderColor,
        G = R.hoverBorder,
        J = V("wrapper", { hover: O, disabled: o }, l),
        ne = function (I) {
          o || a || (g(I.target.value), c && c(I));
        },
        Z = function (I) {
          S(!0), i && i(I);
        },
        se = function (I) {
          S(!1), s && s(I);
        };
      M(function () {
        y && g(n);
      });
      var le = y ? { value: k } : { defaultValue: m },
        te = N({}, p, le);
      return f.createElement(
        "div",
        {
          className:
            w.dynamic([
              [
                "12276481",
                [
                  h.layout.radius,
                  D,
                  P,
                  x.font(0.875),
                  x.height(1, "auto"),
                  x.width(1, "initial"),
                  x.mt(0),
                  x.mr(0),
                  x.mb(0),
                  x.ml(0),
                  G,
                  h.palette.accents_1,
                  h.palette.accents_2,
                  h.font.sans,
                  x.pt(0.5),
                  x.pr(0.5),
                  x.pb(0.5),
                  x.pl(0.5),
                  u,
                  h.palette.background,
                ],
              ],
            ]) +
            " " +
            (J || ""),
        },
        f.createElement(
          "textarea",
          N(
            {
              ref: A,
              disabled: o,
              placeholder: d,
              readOnly: a,
              onFocus: Z,
              onBlur: se,
              onChange: ne,
            },
            te,
            {
              className:
                w.dynamic([
                  [
                    "12276481",
                    [
                      h.layout.radius,
                      D,
                      P,
                      x.font(0.875),
                      x.height(1, "auto"),
                      x.width(1, "initial"),
                      x.mt(0),
                      x.mr(0),
                      x.mb(0),
                      x.ml(0),
                      G,
                      h.palette.accents_1,
                      h.palette.accents_2,
                      h.font.sans,
                      x.pt(0.5),
                      x.pr(0.5),
                      x.pb(0.5),
                      x.pl(0.5),
                      u,
                      h.palette.background,
                    ],
                  ],
                ]) +
                " " +
                ((te && te.className != null && te.className) || ""),
            }
          )
        ),
        f.createElement(
          w,
          {
            id: "12276481",
            dynamic: [
              h.layout.radius,
              D,
              P,
              x.font(0.875),
              x.height(1, "auto"),
              x.width(1, "initial"),
              x.mt(0),
              x.mr(0),
              x.mb(0),
              x.ml(0),
              G,
              h.palette.accents_1,
              h.palette.accents_2,
              h.font.sans,
              x.pt(0.5),
              x.pr(0.5),
              x.pb(0.5),
              x.pl(0.5),
              u,
              h.palette.background,
            ],
          },
          ".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:"
            .concat(h.layout.radius, ";border:1px solid ")
            .concat(D, ";color:")
            .concat(
              P,
              ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;min-width:12.5rem;max-width:95vw;--textarea-font-size:"
            )
            .concat(x.font(0.875), ";--textarea-height:")
            .concat(x.height(1, "auto"), ";width:")
            .concat(
              x.width(1, "initial"),
              ";height:var(--textarea-height);margin:"
            )
            .concat(x.mt(0), " ")
            .concat(x.mr(0), " ")
            .concat(x.mb(0), " ")
            .concat(
              x.ml(0),
              ";}.wrapper.hover.__jsx-style-dynamic-selector{border-color:"
            )
            .concat(
              G,
              ";}.wrapper.disabled.__jsx-style-dynamic-selector{background-color:"
            )
            .concat(h.palette.accents_1, ";border-color:")
            .concat(
              h.palette.accents_2,
              ";cursor:not-allowed;}textarea.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:none;display:block;font-family:"
            )
            .concat(
              h.font.sans,
              ";font-size:var(--textarea-font-size);width:100%;height:var(--textarea-height);border:none;outline:none;padding:"
            )
            .concat(x.pt(0.5), " ")
            .concat(x.pr(0.5), " ")
            .concat(x.pb(0.5), " ")
            .concat(x.pl(0.5), ";resize:")
            .concat(
              u,
              ";}.disabled.__jsx-style-dynamic-selector>textarea.__jsx-style-dynamic-selector{cursor:not-allowed;}textarea.__jsx-style-dynamic-selector:-webkit-autofill,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px "
            )
            .concat(h.palette.background, " inset !important;}")
        )
      );
    });
  bo.defaultProps = vu;
  bo.displayName = "GeistTextarea";
  var xu = Y(bo),
    li = xu;
  var ci = li;
  j();
  j();
  var yu = function (e) {
      var r = e.visible;
      return f.createElement(
        "svg",
        {
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          shapeRendering: "geometricPrecision",
          style: { color: "currentColor" },
        },
        r
          ? f.createElement(
              f.Fragment,
              null,
              f.createElement("path", {
                d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24",
              }),
              f.createElement("path", { d: "M1 1l22 22" })
            )
          : f.createElement(
              f.Fragment,
              null,
              f.createElement("path", {
                d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
              }),
              f.createElement("circle", { cx: "12", cy: "12", r: "3" })
            )
      );
    },
    _u = f.memo(yu),
    ui = _u;
  var wu = ["hideToggle", "children"],
    Su = N({}, cr, { hideToggle: !1 }),
    vo = f.forwardRef(function (t, e) {
      var r = t.hideToggle,
        o = t.children,
        a = F(t, wu),
        i = ur(),
        s = i.getAllScaleProps,
        l = $(null),
        m = B(!1),
        c = W(m, 2),
        n = c[0],
        d = c[1];
      we(e, function () {
        return l.current;
      });
      var u = function () {
          d(function (x) {
            return !x;
          }),
            l && l.current && l.current.focus();
        },
        p = E(
          function () {
            return N({}, a, {
              ref: l,
              iconClickable: !0,
              onIconClick: u,
              htmlType: n ? "text" : "password",
            });
          },
          [a, u, n, l]
        ),
        h = E(
          function () {
            return r ? null : f.createElement(ui, { visible: n });
          },
          [r, n]
        );
      return f.createElement(mt, N({ iconRight: h }, s(), p), o);
    });
  vo.defaultProps = Su;
  vo.displayName = "GeistInputPassword";
  var ku = Y(vo),
    mi = ku;
  mt.Textarea = ci;
  mt.Password = mi;
  var xo = mt;
  j();
  var Cu = function (e) {
      var r = e.children,
        o = e.height;
      return f.createElement(
        "span",
        { className: w.dynamic([["822089635", [o]]]) },
        r,
        f.createElement(
          w,
          { id: "822089635", dynamic: [o] },
          "span.__jsx-style-dynamic-selector{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:".concat(
            o,
            ";min-width:0;}"
          )
        )
      );
    },
    dr = f.memo(Cu);
  j();
  Tt();
  Tt();
  j();
  j();
  var Au = function () {
      var e = B(!1),
        r = W(e, 2),
        o = r[0],
        a = r[1];
      return (
        M(function () {
          a(ri());
        }, []),
        { isBrowser: o, isServer: !o }
      );
    },
    di = Au;
  var fi = function (e) {
      var r = document.createElement("div");
      return r.setAttribute("id", e), r;
    },
    Tu = function () {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mr(),
        r = arguments.length > 1 ? arguments[1] : void 0,
        o = "geist-ui-".concat(e),
        a = di(),
        i = a.isBrowser,
        s = B(i ? fi(o) : null),
        l = W(s, 2),
        m = l[0],
        c = l[1];
      return (
        M(function () {
          var n = r ? r() : null,
            d = n || document.body,
            u = d.querySelector("#".concat(o)),
            p = u || fi(o);
          u || d.appendChild(p), c(p);
        }, []),
        m
      );
    },
    fr = Tu;
  j();
  var Eu = function (e) {
      var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      M(function () {
        var o = function () {
          return e();
        };
        return (
          r && o(),
          window.addEventListener("resize", o),
          function () {
            return window.removeEventListener("resize", o);
          }
        );
      }, []);
    },
    pi = Eu;
  j();
  var Ru = [
      "children",
      "className",
      "visible",
      "enterTime",
      "leaveTime",
      "clearTime",
      "name",
    ],
    Nu = {
      visible: !1,
      enterTime: 60,
      leaveTime: 60,
      clearTime: 60,
      className: "",
      name: "transition",
    },
    yo = function (e) {
      var r = e.children,
        o = e.className,
        a = e.visible,
        i = e.enterTime,
        s = e.leaveTime,
        l = e.clearTime,
        m = e.name,
        c = F(e, Ru),
        n = B(""),
        d = W(n, 2),
        u = d[0],
        p = d[1],
        h = B(a),
        _ = W(h, 2),
        x = _[0],
        A = _[1];
      return (
        M(
          function () {
            var y = a ? "enter" : "leave",
              b = a ? i : s;
            a && !x && A(!0), p("".concat(m, "-").concat(y));
            var v = setTimeout(function () {
                p(
                  ""
                    .concat(m, "-")
                    .concat(y, " ")
                    .concat(m, "-")
                    .concat(y, "-active")
                ),
                  clearTimeout(v);
              }, b),
              k = setTimeout(function () {
                a || (p(""), A(!1)), clearTimeout(k);
              }, b + l);
            return function () {
              clearTimeout(v), clearTimeout(k);
            };
          },
          [a, x]
        ),
        !f.isValidElement(r) || !x
          ? null
          : f.cloneElement(
              r,
              N({}, c, {
                className: ""
                  .concat(r.props.className, " ")
                  .concat(o, " ")
                  .concat(u),
              })
            )
      );
    };
  yo.defaultProps = Nu;
  yo.displayName = "GeistCssTransition";
  var pr = yo;
  j();
  var Pu = function (e) {
      M(
        function () {
          var r = function (a) {
            return e(a);
          };
          return (
            document.addEventListener("click", r),
            function () {
              return document.removeEventListener("click", r);
            }
          );
        },
        [e]
      );
    },
    gi = Pu;
  j();
  var ju = function (e) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : function () {},
        o = { attributes: !1, childList: !0, subtree: !0 };
      M(
        function () {
          if (!(!e || !e.current)) {
            var a = !1,
              i = function () {
                a || r.apply(void 0, arguments);
              },
              s = new MutationObserver(i);
            return (
              s.observe(e.current, o),
              function () {
                (a = !0), s.disconnect();
              }
            );
          }
        },
        [e]
      );
    },
    hi = ju;
  var bi = {},
    Iu = function (e, r) {
      var o = r ? " [".concat(r, "]") : " ",
        a = "[Geist UI]".concat(o, ": ").concat(e);
      typeof console > "u" || bi[a] || ((bi[a] = !0), console.warn(a));
    },
    Et = Iu;
  j();
  var Lu = function (e) {
      if (!e) return { top: 0, left: 0 };
      var r = e.getBoundingClientRect(),
        o = r.top,
        a = r.left;
      return { top: o, left: a };
    },
    dt = {
      top: -1e3,
      left: -1e3,
      right: -1e3,
      width: 0,
      height: 0,
      elementTop: -1e3,
    },
    vi = function (e, r) {
      if (!e) return dt;
      var o = r ? r() : null,
        a = o || document.documentElement,
        i = Lu(o),
        s = i.top,
        l = i.left;
      return N({}, e, {
        width: e.width || e.right - e.left,
        height: e.height || e.top - e.bottom,
        top: e.bottom + a.scrollTop - s,
        left: e.left + a.scrollLeft - l,
        elementTop: e.top + a.scrollTop - s,
      });
    },
    xi = function (e) {
      return e ? e.top === dt.top && e.left === dt.left : !0;
    },
    gr = function (e, r) {
      if (!e || !e.current) return dt;
      var o = e.current.getBoundingClientRect();
      return vi(o, r);
    },
    Ou = function (e, r) {
      var o,
        a =
          e == null || (o = e.target) === null || o === void 0
            ? void 0
            : o.getBoundingClientRect();
      return a ? vi(a, r) : dt;
    },
    Bu = function (e) {
      return typeof e?.target > "u";
    },
    yi = function (e) {
      var r = B(e || dt),
        o = W(r, 2),
        a = o[0],
        i = o[1],
        s = function (m, c) {
          if (Bu(m)) return i(gr(m, c));
          i(Ou(m, c));
        };
      return { rect: a, setRect: s };
    };
  var Mu = { top: -1e3, left: -1e3, right: -1e3, width: 0 },
    zu = f.memo(function (t) {
      var e = t.children,
        r = t.parent,
        o = t.visible,
        a = t.disableMatchWidth,
        i = t.getPopupContainer,
        s = fr("dropdown", i),
        l = B(Mu),
        m = W(l, 2),
        c = m[0],
        n = m[1],
        d = V("dropdown", a ? "disable-match" : "width-match");
      if (!r) return null;
      if (!1 && i && i()) var u, p;
      var h = function () {
        var y = gr(r, i),
          b = y.top,
          v = y.left,
          k = y.right,
          g = y.width;
        n({ top: b, left: v, right: k, width: g });
      };
      pi(h),
        gi(function () {
          var A = gr(r, i),
            y = A.top,
            b = A.left,
            v = y !== c.top || b !== c.left;
          v && h();
        }),
        hi(r, function () {
          h();
        }),
        M(
          function () {
            if (!(!r || !r.current))
              return (
                r.current.addEventListener("mouseenter", h),
                function () {
                  !r ||
                    !r.current ||
                    r.current.removeEventListener("mouseenter", h);
                }
              );
          },
          [r]
        );
      var _ = function (y) {
          y.stopPropagation(),
            y.nativeEvent.stopImmediatePropagation(),
            y.preventDefault();
        },
        x = function (y) {
          y.preventDefault();
        };
      return s
        ? ct(
            f.createElement(
              pr,
              { visible: o },
              f.createElement(
                "div",
                {
                  onClick: _,
                  onMouseDown: x,
                  className:
                    w.dynamic([
                      ["1644673105", [c.top + 2, c.left, c.width, c.width]],
                    ]) +
                    " " +
                    (d || ""),
                },
                e,
                f.createElement(
                  w,
                  {
                    id: "1644673105",
                    dynamic: [c.top + 2, c.left, c.width, c.width],
                  },
                  ".dropdown.__jsx-style-dynamic-selector{position:absolute;top:"
                    .concat(c.top + 2, "px;left:")
                    .concat(
                      c.left,
                      "px;z-index:1100;}.width-match.__jsx-style-dynamic-selector{width:"
                    )
                    .concat(
                      c.width,
                      "px;}.disable-match.__jsx-style-dynamic-selector{min-width:"
                    )
                    .concat(c.width, "px;}")
                )
              )
            ),
            s
          )
        : null;
    }),
    _i = zu;
  j();
  var Du = ["children", "type", "color", "className", "spaceRatio"],
    Wu = { type: "default", className: "", spaceRatio: 1 },
    Gu = function (e, r, o) {
      var a = {
        default: r.accents_6,
        secondary: r.secondary,
        success: r.success,
        warning: r.warning,
        error: r.error,
      };
      return o || a[e];
    },
    _o = function (e) {
      var r = e.children,
        o = e.type,
        a = e.color,
        i = e.className,
        s = e.spaceRatio,
        l = F(e, Du),
        m = H(),
        c = Q(),
        n = c.SCALES,
        d = V("loading-container", i),
        u = E(
          function () {
            return Gu(o, m.palette, a);
          },
          [o, m.palette, a]
        );
      return f.createElement(
        "div",
        N({}, l, {
          className:
            w.dynamic([
              [
                "2201634259",
                [
                  n.font(1),
                  n.width(1, "100%"),
                  n.height(1, "100%"),
                  n.pt(0),
                  n.pr(0),
                  n.pb(0),
                  n.pl(0),
                  n.mt(0),
                  n.mr(0),
                  n.mb(0),
                  n.ml(0),
                  m.palette.accents_5,
                  u,
                  s,
                ],
              ],
            ]) +
            " " +
            ((l && l.className != null && l.className) || d || ""),
        }),
        f.createElement(
          "span",
          {
            className:
              w.dynamic([
                [
                  "2201634259",
                  [
                    n.font(1),
                    n.width(1, "100%"),
                    n.height(1, "100%"),
                    n.pt(0),
                    n.pr(0),
                    n.pb(0),
                    n.pl(0),
                    n.mt(0),
                    n.mr(0),
                    n.mb(0),
                    n.ml(0),
                    m.palette.accents_5,
                    u,
                    s,
                  ],
                ],
              ]) + " loading",
          },
          r &&
            f.createElement(
              "label",
              {
                className: w.dynamic([
                  [
                    "2201634259",
                    [
                      n.font(1),
                      n.width(1, "100%"),
                      n.height(1, "100%"),
                      n.pt(0),
                      n.pr(0),
                      n.pb(0),
                      n.pl(0),
                      n.mt(0),
                      n.mr(0),
                      n.mb(0),
                      n.ml(0),
                      m.palette.accents_5,
                      u,
                      s,
                    ],
                  ],
                ]),
              },
              r
            ),
          f.createElement("i", {
            className: w.dynamic([
              [
                "2201634259",
                [
                  n.font(1),
                  n.width(1, "100%"),
                  n.height(1, "100%"),
                  n.pt(0),
                  n.pr(0),
                  n.pb(0),
                  n.pl(0),
                  n.mt(0),
                  n.mr(0),
                  n.mb(0),
                  n.ml(0),
                  m.palette.accents_5,
                  u,
                  s,
                ],
              ],
            ]),
          }),
          f.createElement("i", {
            className: w.dynamic([
              [
                "2201634259",
                [
                  n.font(1),
                  n.width(1, "100%"),
                  n.height(1, "100%"),
                  n.pt(0),
                  n.pr(0),
                  n.pb(0),
                  n.pl(0),
                  n.mt(0),
                  n.mr(0),
                  n.mb(0),
                  n.ml(0),
                  m.palette.accents_5,
                  u,
                  s,
                ],
              ],
            ]),
          }),
          f.createElement("i", {
            className: w.dynamic([
              [
                "2201634259",
                [
                  n.font(1),
                  n.width(1, "100%"),
                  n.height(1, "100%"),
                  n.pt(0),
                  n.pr(0),
                  n.pb(0),
                  n.pl(0),
                  n.mt(0),
                  n.mr(0),
                  n.mb(0),
                  n.ml(0),
                  m.palette.accents_5,
                  u,
                  s,
                ],
              ],
            ]),
          })
        ),
        f.createElement(
          w,
          {
            id: "2201634259",
            dynamic: [
              n.font(1),
              n.width(1, "100%"),
              n.height(1, "100%"),
              n.pt(0),
              n.pr(0),
              n.pb(0),
              n.pl(0),
              n.mt(0),
              n.mr(0),
              n.mb(0),
              n.ml(0),
              m.palette.accents_5,
              u,
              s,
            ],
          },
          ".loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:"
            .concat(n.font(1), ";width:")
            .concat(n.width(1, "100%"), ";height:")
            .concat(n.height(1, "100%"), ";min-height:1em;padding:")
            .concat(n.pt(0), " ")
            .concat(n.pr(0), " ")
            .concat(n.pb(0), " ")
            .concat(n.pl(0), ";margin:")
            .concat(n.mt(0), " ")
            .concat(n.mr(0), " ")
            .concat(n.mb(0), " ")
            .concat(
              n.ml(0),
              ";}label.__jsx-style-dynamic-selector{margin-right:0.5em;color:"
            )
            .concat(
              m.palette.accents_5,
              ";line-height:1;}label.__jsx-style-dynamic-selector *{margin:0;}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}i.__jsx-style-dynamic-selector{width:0.25em;height:0.25em;border-radius:50%;background-color:"
            )
            .concat(u, ";margin:0 calc(0.25em / 2 * ")
            .concat(
              s,
              ");display:inline-block;-webkit-animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s;}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}@keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}"
            )
        )
      );
    };
  _o.defaultProps = Wu;
  _o.displayName = "GeistLoading";
  var Hu = Y(_o),
    wi = Hu;
  var Si = wi;
  j();
  var Vu = function (e) {
      var r = B(function () {
          return typeof e == "function" ? e() : e;
        }),
        o = W(r, 2),
        a = o[0],
        i = o[1],
        s = $(e);
      M(
        function () {
          s.current = a;
        },
        [a]
      );
      var l = function (c) {
        var n = typeof c == "function" ? c(s.current) : c;
        (s.current = n), i(n);
      };
      return [a, l, s];
    },
    ki = Vu;
  var Ci = ki;
  var We = Ci;
  var Fu = function (e) {
      var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        o = e.replace(r, function (i, s, l, m) {
          return "".concat(s).concat(s).concat(l).concat(l).concat(m).concat(m);
        }),
        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);
      if (!a) throw new Error("Geist UI: Unsupported ".concat(e, " color."));
      return [
        Number.parseInt(a[1], 16),
        Number.parseInt(a[2], 16),
        Number.parseInt(a[3], 16),
      ];
    },
    Uu = function (e) {
      if (e.charAt(0) === "#") return Fu(e);
      var r = e.replace(/ /g, ""),
        o = e.substr(0, 4),
        a = r.match(/\((.+)\)/);
      if (!o.startsWith("rgb") || !a)
        throw (
          (console.log(e),
          new Error('Geist UI: Only support ["RGB", "RGBA", "HEX"] color.'))
        );
      return a[1].split(",").map(function (i) {
        return Number.parseFloat(i);
      });
    },
    hr = function (e, r) {
      if (!/^#|rgb|RGB/.test(e)) return e;
      var o = Uu(e),
        a = W(o, 3),
        i = a[0],
        s = a[1],
        l = a[2],
        m = r > 1 ? 1 : r < 0 ? 0 : r;
      return "rgba("
        .concat(i, ", ")
        .concat(s, ", ")
        .concat(l, ", ")
        .concat(m, ")");
    };
  j();
  j();
  var qu = { x: 0, y: 0 },
    wo = function (e) {
      var r = e.x,
        o = e.y,
        a = e.color,
        i = e.onCompleted,
        s = $(null),
        l = Number.isNaN(+o) ? 0 : o - 10,
        m = Number.isNaN(+r) ? 0 : r - 10;
      return (
        M(function () {
          if (s.current)
            return (
              s.current.addEventListener("animationend", i),
              function () {
                s.current && s.current.removeEventListener("animationend", i);
              }
            );
        }),
        f.createElement(
          "div",
          { ref: s, className: "jsx-3424889537 drip" },
          f.createElement(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              style: { top: l, left: m },
              className: "jsx-3424889537",
            },
            f.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                className: "jsx-3424889537",
              },
              f.createElement(
                "g",
                { fill: a, className: "jsx-3424889537" },
                f.createElement("rect", {
                  width: "100%",
                  height: "100%",
                  rx: "10",
                  className: "jsx-3424889537",
                })
              )
            )
          ),
          f.createElement(
            w,
            { id: "3424889537" },
            ".drip.jsx-3424889537{position:absolute;left:0;right:0;top:0;bottom:0;}svg.jsx-3424889537{position:absolute;-webkit-animation:350ms ease-in expand-jsx-3424889537;animation:350ms ease-in expand-jsx-3424889537;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem;}@-webkit-keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}@keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}"
          )
        )
      );
    };
  wo.defaultProps = qu;
  wo.displayName = "GeistButtonDrip";
  var Ai = wo;
  j();
  var Ti = function (e) {
    var r = e.color;
    return f.createElement(
      "div",
      { className: "jsx-3416748964 btn-loading" },
      f.createElement(Si, { color: r }),
      f.createElement(
        w,
        { id: "3416748964" },
        ".btn-loading.jsx-3416748964{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--geist-ui-button-bg);}"
      )
    );
  };
  Ti.displayName = "GeistButtonLoading";
  var Ei = Ti;
  j();
  j();
  var $u = ["isRight", "isSingle", "children", "className"],
    Xu = { isRight: !1, className: "" },
    So = function (e) {
      var r = e.isRight,
        o = e.isSingle,
        a = e.children,
        i = e.className,
        s = F(e, $u),
        l = V("icon", { right: r, single: o }, i);
      return f.createElement(
        "span",
        N({}, s, {
          className:
            "jsx-643337184 " +
            ((s && s.className != null && s.className) || l || ""),
        }),
        a,
        f.createElement(
          w,
          { id: "643337184" },
          ".icon.jsx-643337184{position:absolute;left:var(--geist-ui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--geist-ui-button-color);z-index:1;}.right.jsx-643337184{right:var(--geist-ui-button-icon-padding);left:auto;}.icon.jsx-643337184 svg{background:transparent;height:calc(var(--geist-ui-button-height) / 2.35);width:calc(var(--geist-ui-button-height) / 2.35);}.single.jsx-643337184{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}"
        )
      );
    };
  So.defaultProps = Xu;
  So.displayName = "GeistButtonIcon";
  var ko = So;
  var Ri = function (e, r, o) {
      var a = o.icon,
        i = o.iconRight,
        s = a || i,
        l = Boolean(i),
        m = e
          ? "calc(var(--geist-ui-button-height) / 2 + var(--geist-ui-button-icon-padding) * .5)"
          : 0,
        c = V("text", l ? "right" : "left");
      return s
        ? f.Children.count(r) === 0
          ? f.createElement(ko, { isRight: l, isSingle: !0 }, s)
          : f.createElement(
              f.Fragment,
              null,
              f.createElement(ko, { isRight: l }, s),
              f.createElement(
                "div",
                {
                  className:
                    w.dynamic([["3568181479", [m, m]]]) + " " + (c || ""),
                },
                r,
                f.createElement(
                  w,
                  { id: "3568181479", dynamic: [m, m] },
                  ".left.__jsx-style-dynamic-selector{padding-left:"
                    .concat(
                      m,
                      ";}.right.__jsx-style-dynamic-selector{padding-right:"
                    )
                    .concat(m, ";}")
                )
              )
            )
        : f.createElement("div", { className: "text" }, r);
    },
    Ni = function (e, r) {
      return r.isButtonGroup
        ? N({}, e, {
            auto: !0,
            shadow: !1,
            ghost: r.ghost || e.ghost,
            type: r.type || e.type,
            disabled: r.disabled || e.disabled,
          })
        : e;
    };
  j();
  var Ju = { isButtonGroup: !1, disabled: !1 },
    Ku = f.createContext(Ju),
    Pi = function () {
      return f.useContext(Ku);
    };
  var Yu = function (e, r) {
      var o = {
        secondary: {
          bg: e.background,
          border: e.foreground,
          color: e.foreground,
        },
        success: { bg: e.background, border: e.success, color: e.success },
        warning: { bg: e.background, border: e.warning, color: e.warning },
        error: { bg: e.background, border: e.error, color: e.error },
      };
      return o[r] || null;
    },
    Co = function (e, r) {
      var o = r.type,
        a = r.disabled,
        i = r.ghost,
        s = {
          default: { bg: e.background, border: e.border, color: e.accents_5 },
          secondary: {
            bg: e.foreground,
            border: e.foreground,
            color: e.background,
          },
          success: { bg: e.success, border: e.success, color: "#fff" },
          warning: { bg: e.warning, border: e.warning, color: "#fff" },
          error: { bg: e.error, border: e.error, color: "#fff" },
          abort: {
            bg: "transparent",
            border: "transparent",
            color: e.accents_5,
          },
        };
      if (a) return { bg: e.accents_1, border: e.accents_2, color: "#ccc" };
      var l = o?.replace("-light", ""),
        m = s.default;
      return i ? Yu(e, l) || m : s[l] || m;
    },
    Zu = function (e, r) {
      var o = {
          secondary: {
            bg: e.foreground,
            border: e.background,
            color: e.background,
          },
          success: { bg: e.success, border: e.background, color: "white" },
          warning: { bg: e.warning, border: e.background, color: "white" },
          error: { bg: e.error, border: e.background, color: "white" },
        },
        a = r.replace("-light", "");
      return o[a] || null;
    },
    Ao = function (e, r) {
      var o = r.type,
        a = r.disabled,
        i = r.loading,
        s = r.shadow,
        l = r.ghost,
        m = Co(e, r),
        c = hr(m.bg, 0.85),
        n = {
          default: { bg: e.background, border: e.foreground },
          secondary: { bg: e.background, border: e.foreground },
          success: { bg: e.background, border: e.success },
          warning: { bg: e.background, border: e.warning },
          error: { bg: e.background, border: e.error },
          abort: {
            bg: "transparent",
            border: "transparent",
            color: e.accents_5,
          },
          "secondary-light": N({}, m, { bg: c }),
          "success-light": N({}, m, { bg: c }),
          "warning-light": N({}, m, { bg: c }),
          "error-light": N({}, m, { bg: c }),
        };
      if (a) return { bg: e.accents_1, border: e.accents_2, color: "#ccc" };
      if (i) return N({}, m, { color: "transparent" });
      if (s) return m;
      var d = (l ? Zu(e, o) : n[o]) || n.default;
      return N({}, d, { color: d.color || d.border });
    },
    ji = function (e, r) {
      return e
        ? { cursor: "not-allowed", events: "auto" }
        : r
        ? { cursor: "default", events: "none" }
        : { cursor: "pointer", events: "auto" };
    },
    Ii = function (e, r) {
      var o = r.type,
        a = o.endsWith("light"),
        i = Ao(e, r);
      return a ? hr(i.bg, 0.65) : hr(e.accents_2, 0.65);
    };
  var Qu = [
      "children",
      "disabled",
      "type",
      "loading",
      "shadow",
      "ghost",
      "effect",
      "onClick",
      "auto",
      "icon",
      "htmlType",
      "iconRight",
      "className",
    ],
    em = {
      type: "default",
      htmlType: "button",
      ghost: !1,
      loading: !1,
      shadow: !1,
      auto: !1,
      effect: !0,
      disabled: !1,
      className: "",
    },
    To = f.forwardRef(function (t, e) {
      var r = H(),
        o = Q(),
        a = o.SCALES,
        i = $(null);
      we(e, function () {
        return i.current;
      });
      var s = B(!1),
        l = W(s, 2),
        m = l[0],
        c = l[1],
        n = B(0),
        d = W(n, 2),
        u = d[0],
        p = d[1],
        h = B(0),
        _ = W(h, 2),
        x = _[0],
        A = _[1],
        y = Pi(),
        b = Ni(t, y),
        v = b.children,
        k = b.disabled,
        g = b.type,
        T = b.loading,
        C = b.shadow,
        O = b.ghost,
        S = b.effect,
        R = b.onClick,
        P = b.auto,
        D = b.icon,
        G = b.htmlType,
        J = b.iconRight,
        ne = b.className,
        Z = F(b, Qu),
        se = E(
          function () {
            return Co(r.palette, b);
          },
          [r.palette, b]
        ),
        le = se.bg,
        te = se.border,
        de = se.color,
        I = E(
          function () {
            return Ao(r.palette, b);
          },
          [r.palette, b]
        ),
        ke = E(
          function () {
            return ji(k, T);
          },
          [k, T]
        ),
        K = ke.cursor,
        q = ke.events,
        X = E(
          function () {
            return Ii(r.palette, b);
          },
          [r.palette, b]
        ),
        he = function () {
          c(!1), p(0), A(0);
        },
        U = function (xe) {
          if (!(k || T)) {
            var ve = !C && !O && S;
            if (ve && i.current) {
              var be = i.current.getBoundingClientRect();
              c(!0), p(xe.clientX - be.left), A(xe.clientY - be.top);
            }
            R && R(xe);
          }
        },
        re = E(
          function () {
            return Ri(P, v, { icon: D, iconRight: J });
          },
          [P, v, D, J]
        ),
        oe = P ? a.pl(1.15) : a.pl(1.375),
        ae = P ? a.pr(1.15) : a.pr(1.375);
      return f.createElement(
        "button",
        N({ ref: i, type: G, disabled: k, onClick: U }, Z, {
          className:
            w.dynamic([
              [
                "86551275",
                [
                  a.height(2.5),
                  r.layout.radius,
                  a.font(0.875),
                  de,
                  le,
                  te,
                  K,
                  q,
                  C ? r.expressiveness.shadowSmall : "none",
                  a.pl(0.727),
                  a.height(2.5),
                  de,
                  le,
                  P ? "min-content" : a.width(10.5),
                  P ? "auto" : "initial",
                  a.height(2.5),
                  a.pt(0),
                  ae,
                  a.pb(0),
                  oe,
                  a.mt(0),
                  a.mr(0),
                  a.mb(0),
                  a.ml(0),
                  I.color,
                  I.color,
                  I.bg,
                  I.border,
                  K,
                  q,
                  C ? r.expressiveness.shadowMedium : "none",
                  C ? "-1px" : "0px",
                ],
              ],
            ]) +
            " " +
            ((Z && Z.className != null && Z.className) || V("btn", ne) || ""),
        }),
        T && f.createElement(Ei, { color: de }),
        re,
        m && f.createElement(Ai, { x: u, y: x, color: X, onCompleted: he }),
        f.createElement(
          w,
          {
            id: "86551275",
            dynamic: [
              a.height(2.5),
              r.layout.radius,
              a.font(0.875),
              de,
              le,
              te,
              K,
              q,
              C ? r.expressiveness.shadowSmall : "none",
              a.pl(0.727),
              a.height(2.5),
              de,
              le,
              P ? "min-content" : a.width(10.5),
              P ? "auto" : "initial",
              a.height(2.5),
              a.pt(0),
              ae,
              a.pb(0),
              oe,
              a.mt(0),
              a.mr(0),
              a.mb(0),
              a.ml(0),
              I.color,
              I.color,
              I.bg,
              I.border,
              K,
              q,
              C ? r.expressiveness.shadowMedium : "none",
              C ? "-1px" : "0px",
            ],
          },
          ".btn.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;line-height:"
            .concat(a.height(2.5), ";border-radius:")
            .concat(r.layout.radius, ";font-weight:400;font-size:")
            .concat(
              a.font(0.875),
              ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:"
            )
            .concat(de, ";background-color:")
            .concat(le, ";border:1px solid ")
            .concat(te, ";cursor:")
            .concat(K, ";pointer-events:")
            .concat(q, ";box-shadow:")
            .concat(
              C ? r.expressiveness.shadowSmall : "none",
              ";--geist-ui-button-icon-padding:"
            )
            .concat(a.pl(0.727), ";--geist-ui-button-height:")
            .concat(a.height(2.5), ";--geist-ui-button-color:")
            .concat(de, ";--geist-ui-button-bg:")
            .concat(le, ";min-width:")
            .concat(P ? "min-content" : a.width(10.5), ";width:")
            .concat(P ? "auto" : "initial", ";height:")
            .concat(a.height(2.5), ";padding:")
            .concat(a.pt(0), " ")
            .concat(ae, " ")
            .concat(a.pb(0), " ")
            .concat(oe, ";margin:")
            .concat(a.mt(0), " ")
            .concat(a.mr(0), " ")
            .concat(a.mb(0), " ")
            .concat(
              a.ml(0),
              ";}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:"
            )
            .concat(I.color, ";--geist-ui-button-color:")
            .concat(I.color, ";background-color:")
            .concat(I.bg, ";border-color:")
            .concat(I.border, ";cursor:")
            .concat(K, ";pointer-events:")
            .concat(q, ";box-shadow:")
            .concat(
              C ? r.expressiveness.shadowMedium : "none",
              ";-webkit-transform:translate3d(0px,"
            )
            .concat(C ? "-1px" : "0px", ",0px);-ms-transform:translate3d(0px,")
            .concat(C ? "-1px" : "0px", ",0px);transform:translate3d(0px,")
            .concat(
              C ? "-1px" : "0px",
              ",0px);}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px;}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0;}"
            )
        )
      );
    });
  To.defaultProps = em;
  To.displayName = "GeistButton";
  var tm = Y(To),
    Li = tm;
  var Rt = Li;
  function Eo(t) {
    if (Array.isArray(t)) return nt(t);
  }
  function Ro(t) {
    if (
      (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
      t["@@iterator"] != null
    )
      return Array.from(t);
  }
  function No() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ge(t) {
    return Eo(t) || Ro(t) || kt(t) || No();
  }
  j();
  j();
  var ft = {
      padding: "12px 16px",
      margin: "8px 0",
      width: "420px",
      maxWidth: "90vw",
      maxHeight: "75px",
      placement: "bottomRight",
    },
    rm = {
      toasts: [],
      toastLayout: ft,
      updateToastLayout: function (e) {
        return e;
      },
      updateToasts: function (e) {
        return e;
      },
      lastUpdateToastId: null,
      updateLastToastId: function () {
        return null;
      },
    },
    Po = f.createContext(rm),
    br = function () {
      return f.useContext(Po);
    };
  j();
  j();
  var om = { themes: sr.getPresets() },
    Oi = f.createContext(om);
  var am = function (e) {
      var r = e.children,
        o = e.themeType,
        a = e.themes,
        i = a === void 0 ? [] : a,
        s = B({ themes: Qe.getPresets() }),
        l = W(s, 2),
        m = l[0],
        c = l[1],
        n = E(
          function () {
            var d = m.themes.find(function (u) {
              return u.type === o;
            });
            return d || Qe.getPresetStaticTheme();
          },
          [m, o]
        );
      return (
        M(
          function () {
            i != null &&
              i.length &&
              c(function (d) {
                var u = i.filter(function (h) {
                    return Qe.isAvailableThemeType(h.type);
                  }),
                  p = Qe.getPresets().concat(u);
                return N({}, d, { themes: p });
              });
          },
          [i]
        ),
        f.createElement(
          Oi.Provider,
          { value: m },
          f.createElement(mo.Provider, { value: n }, r)
        )
      );
    },
    Bi = am;
  j();
  j();
  j();
  var Mi = function (e, r) {
      var o = function (i, s) {
        s && s(i, r);
      };
      return !e || !e.length
        ? null
        : e.map(function (a, i) {
            return f.createElement(
              Rt,
              {
                auto: !0,
                scale: 1 / 3,
                font: "13px",
                type: a.passive ? "default" : "secondary",
                key: "action-".concat(i),
                onClick: function (l) {
                  return o(l, a.handler);
                },
              },
              a.name
            );
          });
    },
    zi = function (e, r) {
      var o = {
          default: e.background,
          secondary: e.secondary,
          success: e.success,
          warning: e.warning,
          error: e.error,
        },
        a = !r || r === "default";
      return a
        ? { bgColor: o.default, color: e.foreground }
        : { bgColor: o[r], color: "white" };
    },
    yx = je("topLeft", "topRight", "bottomLeft", "bottomRight"),
    Di = function (e) {
      return "".concat(e).toLowerCase().startsWith("top");
    },
    Wi = function (e) {
      return "".concat(e).toLowerCase().endsWith("left");
    },
    Gi = function (e) {
      var r = {
          topLeft: "translate(-60px, -60px)",
          topRight: "translate(60px, -60px)",
          bottomLeft: "translate(-60px, 60px)",
          bottomRight: "translate(60px, 60px)",
        },
        o = {
          topLeft: "translate(-50px, 15px) scale(0.85)",
          topRight: "translate(50px, 15px) scale(0.85)",
          bottomLeft: "translate(-50px, -15px) scale(0.85)",
          bottomRight: "translate(50px, -15px) scale(0.85)",
        };
      return { enter: r[e], leave: o[e] };
    };
  var nm = f.memo(function (t) {
      var e = t.toast,
        r = t.layout,
        o = H(),
        a = E(
          function () {
            return zi(o.palette, e.type);
          },
          [o.palette, e.type]
        ),
        i = a.color,
        s = a.bgColor,
        l = typeof e.text != "string",
        m = r.padding,
        c = r.margin,
        n = r.maxHeight,
        d = r.maxWidth,
        u = r.width,
        p = r.placement,
        h = E(
          function () {
            return Gi(p);
          },
          [p]
        ),
        _ = h.enter,
        x = h.leave;
      return f.createElement(
        pr,
        { name: "toast", visible: e.visible, clearTime: 350 },
        f.createElement(
          "div",
          {
            key: e.id,
            className:
              w.dynamic([
                [
                  "1407001838",
                  [
                    u,
                    d,
                    n,
                    o.palette.foreground,
                    s,
                    i,
                    o.layout.radius,
                    o.expressiveness.shadowSmall,
                    o.layout.gapHalf,
                    _,
                    c,
                    m,
                    c,
                    m,
                    x,
                  ],
                ],
              ]) + " toast",
          },
          l
            ? e.text
            : f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  {
                    className:
                      w.dynamic([
                        [
                          "1407001838",
                          [
                            u,
                            d,
                            n,
                            o.palette.foreground,
                            s,
                            i,
                            o.layout.radius,
                            o.expressiveness.shadowSmall,
                            o.layout.gapHalf,
                            _,
                            c,
                            m,
                            c,
                            m,
                            x,
                          ],
                        ],
                      ]) + " message",
                  },
                  e.text
                ),
                f.createElement(
                  "div",
                  {
                    className:
                      w.dynamic([
                        [
                          "1407001838",
                          [
                            u,
                            d,
                            n,
                            o.palette.foreground,
                            s,
                            i,
                            o.layout.radius,
                            o.expressiveness.shadowSmall,
                            o.layout.gapHalf,
                            _,
                            c,
                            m,
                            c,
                            m,
                            x,
                          ],
                        ],
                      ]) + " action",
                  },
                  Mi(e.actions, e.cancel)
                )
              ),
          f.createElement(
            w,
            {
              id: "1407001838",
              dynamic: [
                u,
                d,
                n,
                o.palette.foreground,
                s,
                i,
                o.layout.radius,
                o.expressiveness.shadowSmall,
                o.layout.gapHalf,
                _,
                c,
                m,
                c,
                m,
                x,
              ],
            },
            ".toast.__jsx-style-dynamic-selector{width:"
              .concat(u, ";max-width:")
              .concat(d, ";max-height:")
              .concat(
                n,
                ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:"
              )
              .concat(o.palette.foreground, ";background-color:")
              .concat(s, ";color:")
              .concat(i, ";border:0;border-radius:")
              .concat(o.layout.radius, ";opacity:1;box-shadow:")
              .concat(
                o.expressiveness.shadowSmall,
                ";-webkit-transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);overflow:hidden;}.message.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:0.875em;display:-webkit-box;word-break:break-all;padding-right:"
              )
              .concat(
                o.layout.gapHalf,
                ";overflow:hidden;max-height:100%;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.1rem;}.toast-enter.__jsx-style-dynamic-selector{opacity:0;height:0;padding:0;margin:0;-webkit-transform:"
              )
              .concat(_, ";-ms-transform:")
              .concat(_, ";transform:")
              .concat(
                _,
                ";}.toast-enter-active.__jsx-style-dynamic-selector{opacity:1;height:auto;margin:"
              )
              .concat(c, ";padding:")
              .concat(
                m,
                ";-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.toast-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);height:auto;margin:"
              )
              .concat(c, ";padding:")
              .concat(
                m,
                ";}.toast-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:"
              )
              .concat(x, ";-ms-transform:")
              .concat(x, ";transform:")
              .concat(x, ";}")
          )
        )
      );
    }),
    Hi = nm;
  var im = function () {
      var e = H(),
        r = fr("toast"),
        o = We(!1),
        a = W(o, 3),
        i = a[1],
        s = a[2],
        l = br(),
        m = l.toasts,
        c = l.updateToasts,
        n = l.toastLayout,
        d = l.lastUpdateToastId,
        u = E(
          function () {
            return n;
          },
          [n]
        ),
        p = E(
          function () {
            return m.map(function (x) {
              return f.createElement(Hi, {
                toast: x,
                layout: u,
                key: x._internalIdent,
              });
            });
          },
          [m, u]
        ),
        h = E(
          function () {
            return V("toasts", { top: Di(n.placement), left: Wi(n.placement) });
          },
          [u]
        ),
        _ = function (A) {
          if ((i(A), A))
            return c(function (y) {
              return y.map(function (b) {
                return b.visible
                  ? (b._timeout && window.clearTimeout(b._timeout),
                    N({}, b, { timeout: null }))
                  : b;
              });
            });
          c(function (y) {
            return y.map(function (b, v) {
              return b.visible
                ? (b._timeout && window.clearTimeout(b._timeout),
                  N({}, b, {
                    _timeout: (function () {
                      var k = window.setTimeout(function () {
                        b.cancel(), window.clearTimeout(k);
                      }, b.delay + v * 100);
                      return k;
                    })(),
                  }))
                : b;
            });
          });
        };
      return (
        M(
          function () {
            var x = m.findIndex(function (b) {
                return b._internalIdent === d;
              }),
              A = m[x];
            if (!(!A || A.visible || !s.current)) {
              var y = m.find(function (b, v) {
                return v < x && b.visible;
              });
              y || !s.current || _(!1);
            }
          },
          [m, d]
        ),
        M(
          function () {
            var x = null,
              A = window.setInterval(function () {
                m.length !== 0 &&
                  (x = window.setTimeout(function () {
                    var y = !m.find(function (b) {
                      return b.visible;
                    });
                    y &&
                      c(function () {
                        return [];
                      }),
                      x && clearTimeout(x);
                  }, 350));
              }, 5e3);
            return function () {
              A && clearInterval(A), x && clearTimeout(x);
            };
          },
          [m]
        ),
        !r || !m || m.length === 0
          ? null
          : ct(
              f.createElement(
                "div",
                {
                  onMouseEnter: function () {
                    return _(!0);
                  },
                  onMouseLeave: function () {
                    return _(!1);
                  },
                  className:
                    w.dynamic([
                      [
                        "622610754",
                        [
                          e.layout.gap,
                          e.layout.gap,
                          e.layout.gap,
                          e.layout.gap,
                        ],
                      ],
                    ]) +
                    " " +
                    (h || ""),
                },
                p,
                f.createElement(
                  w,
                  {
                    id: "622610754",
                    dynamic: [
                      e.layout.gap,
                      e.layout.gap,
                      e.layout.gap,
                      e.layout.gap,
                    ],
                  },
                  ".toasts.__jsx-style-dynamic-selector{position:fixed;width:auto;max-width:100%;right:"
                    .concat(e.layout.gap, ";bottom:")
                    .concat(
                      e.layout.gap,
                      ";z-index:2000;-webkit-transition:all 400ms ease;transition:all 400ms ease;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.top.__jsx-style-dynamic-selector{bottom:unset;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;top:"
                    )
                    .concat(
                      e.layout.gap,
                      ";}.left.__jsx-style-dynamic-selector{right:unset;left:"
                    )
                    .concat(e.layout.gap, ";}")
                )
              ),
              r
            )
      );
    },
    Vi = im;
  var sm = function (e) {
      var r = e.themes,
        o = e.themeType,
        a = e.children,
        i = B(null),
        s = W(i, 2),
        l = s[0],
        m = s[1],
        c = We([]),
        n = W(c, 3),
        d = n[0],
        u = n[1],
        p = n[2],
        h = We(ft),
        _ = W(h, 3),
        x = _[0],
        A = _[1],
        y = _[2],
        b = function (C) {
          var O = C(p.current);
          u(O);
        },
        v = function (C) {
          var O = C(y.current);
          A(O);
        },
        k = function (C) {
          m(C());
        },
        g = E(
          function () {
            return {
              toasts: d,
              toastLayout: x,
              updateToasts: b,
              lastUpdateToastId: l,
              updateToastLayout: v,
              updateLastToastId: k,
            };
          },
          [d, x, l]
        );
      return f.createElement(
        Po.Provider,
        { value: g },
        f.createElement(
          Bi,
          { themes: r, themeType: o },
          a,
          f.createElement(Vi, null)
        )
      );
    },
    Fi = sm;
  var jo = Fi;
  j();
  j();
  var lm = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "justify",
      "direction",
      "alignItems",
      "alignContent",
      "children",
      "className",
    ],
    cm = { xs: !1, sm: !1, md: !1, lg: !1, xl: !1, className: "" },
    Nt = function (e) {
      var r = e === 0 ? "display: none;" : "display: inherit;";
      if (typeof e == "number") {
        var o = 4.166666666666667 * e,
          a = o > 100 ? "100%" : o < 0 ? "0" : "".concat(o, "%");
        return { grow: 0, display: r, width: a, basis: a };
      }
      return { grow: 1, display: r, width: "100%", basis: "0" };
    },
    Io = function (e) {
      var r = e.xs,
        o = e.sm,
        a = e.md,
        i = e.lg,
        s = e.xl,
        l = e.justify,
        m = e.direction,
        c = e.alignItems,
        n = e.alignContent,
        d = e.children,
        u = e.className,
        p = F(e, lm),
        h = H(),
        _ = Q(),
        x = _.SCALES,
        A = E(
          function () {
            var b = {
                justify: l,
                direction: m,
                alignItems: c,
                alignContent: n,
                xs: r,
                sm: o,
                md: a,
                lg: i,
                xl: s,
              },
              v = Object.keys(b).reduce(function (k, g) {
                return b[g] !== void 0 && b[g] !== !1
                  ? "".concat(k, " ").concat(g)
                  : k;
              }, "");
            return v.trim();
          },
          [l, m, c, n, r, o, a, i, s]
        ),
        y = E(
          function () {
            return { xs: Nt(r), sm: Nt(o), md: Nt(a), lg: Nt(i), xl: Nt(s) };
          },
          [r, o, a, i, s]
        );
      return f.createElement(
        "div",
        N({}, p, {
          className:
            w.dynamic([
              [
                "568430467",
                [
                  x.font(1, "inherit"),
                  x.height(1, "auto"),
                  l,
                  m,
                  n,
                  c,
                  y.xs.grow,
                  y.xs.width,
                  y.xs.basis,
                  y.xs.display,
                  h.breakpoints.sm.min,
                  y.sm.grow,
                  y.sm.width,
                  y.sm.basis,
                  y.sm.display,
                  h.breakpoints.md.min,
                  y.md.grow,
                  y.md.width,
                  y.md.basis,
                  y.md.display,
                  h.breakpoints.lg.min,
                  y.lg.grow,
                  y.lg.width,
                  y.lg.basis,
                  y.lg.display,
                  h.breakpoints.xl.min,
                  y.xl.grow,
                  y.xl.width,
                  y.xl.basis,
                  y.xl.display,
                ],
              ],
            ]) +
            " " +
            ((p && p.className != null && p.className) ||
              V("item", A, u) ||
              ""),
        }),
        d,
        f.createElement(
          w,
          {
            id: "568430467",
            dynamic: [
              x.font(1, "inherit"),
              x.height(1, "auto"),
              l,
              m,
              n,
              c,
              y.xs.grow,
              y.xs.width,
              y.xs.basis,
              y.xs.display,
              h.breakpoints.sm.min,
              y.sm.grow,
              y.sm.width,
              y.sm.basis,
              y.sm.display,
              h.breakpoints.md.min,
              y.md.grow,
              y.md.width,
              y.md.basis,
              y.md.display,
              h.breakpoints.lg.min,
              y.lg.grow,
              y.lg.width,
              y.lg.basis,
              y.lg.display,
              h.breakpoints.xl.min,
              y.xl.grow,
              y.xl.width,
              y.xl.basis,
              y.xl.display,
            ],
          },
          ".item.__jsx-style-dynamic-selector{font-size:"
            .concat(x.font(1, "inherit"), ";height:")
            .concat(
              x.height(1, "auto"),
              ";}.justify.__jsx-style-dynamic-selector{-webkit-box-pack:"
            )
            .concat(l, ";-webkit-justify-content:")
            .concat(l, ";-ms-flex-pack:")
            .concat(l, ";justify-content:")
            .concat(
              l,
              ";}.direction.__jsx-style-dynamic-selector{-webkit-flex-direction:"
            )
            .concat(m, ";-ms-flex-direction:")
            .concat(m, ";flex-direction:")
            .concat(
              m,
              ";}.alignContent.__jsx-style-dynamic-selector{-webkit-align-content:"
            )
            .concat(n, ";-ms-flex-line-pack:")
            .concat(n, ";align-content:")
            .concat(
              n,
              ";}.alignItems.__jsx-style-dynamic-selector{-webkit-align-items:"
            )
            .concat(c, ";-webkit-box-align:")
            .concat(c, ";-ms-flex-align:")
            .concat(c, ";align-items:")
            .concat(c, ";}.xs.__jsx-style-dynamic-selector{-webkit-box-flex:")
            .concat(y.xs.grow, ";-webkit-flex-grow:")
            .concat(y.xs.grow, ";-ms-flex-positive:")
            .concat(y.xs.grow, ";flex-grow:")
            .concat(y.xs.grow, ";max-width:")
            .concat(y.xs.width, ";-webkit-flex-basis:")
            .concat(y.xs.basis, ";-ms-flex-preferred-size:")
            .concat(y.xs.basis, ";flex-basis:")
            .concat(y.xs.basis, ";")
            .concat(y.xs.display, ";}@media only screen and (min-width:")
            .concat(
              h.breakpoints.sm.min,
              "){.sm.__jsx-style-dynamic-selector{-webkit-box-flex:"
            )
            .concat(y.sm.grow, ";-webkit-flex-grow:")
            .concat(y.sm.grow, ";-ms-flex-positive:")
            .concat(y.sm.grow, ";flex-grow:")
            .concat(y.sm.grow, ";max-width:")
            .concat(y.sm.width, ";-webkit-flex-basis:")
            .concat(y.sm.basis, ";-ms-flex-preferred-size:")
            .concat(y.sm.basis, ";flex-basis:")
            .concat(y.sm.basis, ";")
            .concat(y.sm.display, ";}}@media only screen and (min-width:")
            .concat(
              h.breakpoints.md.min,
              "){.md.__jsx-style-dynamic-selector{-webkit-box-flex:"
            )
            .concat(y.md.grow, ";-webkit-flex-grow:")
            .concat(y.md.grow, ";-ms-flex-positive:")
            .concat(y.md.grow, ";flex-grow:")
            .concat(y.md.grow, ";max-width:")
            .concat(y.md.width, ";-webkit-flex-basis:")
            .concat(y.md.basis, ";-ms-flex-preferred-size:")
            .concat(y.md.basis, ";flex-basis:")
            .concat(y.md.basis, ";")
            .concat(y.md.display, ";}}@media only screen and (min-width:")
            .concat(
              h.breakpoints.lg.min,
              "){.lg.__jsx-style-dynamic-selector{-webkit-box-flex:"
            )
            .concat(y.lg.grow, ";-webkit-flex-grow:")
            .concat(y.lg.grow, ";-ms-flex-positive:")
            .concat(y.lg.grow, ";flex-grow:")
            .concat(y.lg.grow, ";max-width:")
            .concat(y.lg.width, ";-webkit-flex-basis:")
            .concat(y.lg.basis, ";-ms-flex-preferred-size:")
            .concat(y.lg.basis, ";flex-basis:")
            .concat(y.lg.basis, ";")
            .concat(y.lg.display, ";}}@media only screen and (min-width:")
            .concat(
              h.breakpoints.xl.min,
              "){.xl.__jsx-style-dynamic-selector{-webkit-box-flex:"
            )
            .concat(y.xl.grow, ";-webkit-flex-grow:")
            .concat(y.xl.grow, ";-ms-flex-positive:")
            .concat(y.xl.grow, ";flex-grow:")
            .concat(y.xl.grow, ";max-width:")
            .concat(y.xl.width, ";-webkit-flex-basis:")
            .concat(y.xl.basis, ";-ms-flex-preferred-size:")
            .concat(y.xl.basis, ";flex-basis:")
            .concat(y.xl.basis, ";")
            .concat(y.xl.display, ";}}")
        )
      );
    };
  Io.defaultProps = cm;
  Io.displayName = "GeistGridBasicItem";
  var vr = Io;
  var um = ["children", "className"],
    mm = { className: "" },
    Lo = function (e) {
      var r = e.children,
        o = e.className,
        a = F(e, um),
        i = Q(),
        s = i.SCALES,
        l = {
          styles: f.createElement(
            w,
            {
              id: "1271839607",
              dynamic: [
                s.mt(0),
                s.mr(0),
                s.mb(0),
                s.ml(0),
                s.pt(0, "var(--grid-gap-unit)"),
                s.pr(0, "var(--grid-gap-unit)"),
                s.pb(0, "var(--grid-gap-unit)"),
                s.pl(0, "var(--grid-gap-unit)"),
              ],
            },
            "div.__jsx-style-dynamic-selector{margin:"
              .concat(s.mt(0), " ")
              .concat(s.mr(0), " ")
              .concat(s.mb(0), " ")
              .concat(s.ml(0), ";box-sizing:border-box;padding:")
              .concat(s.pt(0, "var(--grid-gap-unit)"), " ")
              .concat(s.pr(0, "var(--grid-gap-unit)"), " ")
              .concat(s.pb(0, "var(--grid-gap-unit)"), " ")
              .concat(s.pl(0, "var(--grid-gap-unit)"), ";}")
          ),
          className: w.dynamic([
            [
              "1271839607",
              [
                s.mt(0),
                s.mr(0),
                s.mb(0),
                s.ml(0),
                s.pt(0, "var(--grid-gap-unit)"),
                s.pr(0, "var(--grid-gap-unit)"),
                s.pb(0, "var(--grid-gap-unit)"),
                s.pl(0, "var(--grid-gap-unit)"),
              ],
            ],
          ]),
        },
        m = l.className,
        c = l.styles,
        n = V(m, o);
      return f.createElement(vr, N({ className: n }, a), r, c);
    };
  Lo.defaultProps = mm;
  Lo.displayName = "GeistGrid";
  var dm = Y(Lo),
    Oo = dm;
  j();
  var fm = ["gap", "wrap", "children", "className"],
    pm = { gap: 0, wrap: "wrap", className: "" },
    Bo = function (e) {
      var r = e.gap,
        o = e.wrap,
        a = e.children,
        i = e.className,
        s = F(e, fm),
        l = Q(),
        m = l.unit,
        c = l.SCALES,
        n = E(
          function () {
            return "calc(".concat(r, " * ").concat(m, " * 1/3)");
          },
          [r, m]
        ),
        d = {
          styles: f.createElement(
            w,
            {
              id: "3631618093",
              dynamic: [
                n,
                o,
                c.width(1, "var(--grid-container-width)"),
                c.mt(0, "var(--grid-container-margin)"),
                c.mr(0, "var(--grid-container-margin)"),
                c.mb(0, "var(--grid-container-margin)"),
                c.ml(0, "var(--grid-container-margin)"),
              ],
            },
            "div.__jsx-style-dynamic-selector{--grid-gap-unit:"
              .concat(
                n,
                ";--grid-container-margin:calc(-1 * var(--grid-gap-unit));--grid-container-width:calc(100% + var(--grid-gap-unit) * 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:"
              )
              .concat(o, ";-ms-flex-wrap:")
              .concat(o, ";flex-wrap:")
              .concat(o, ";box-sizing:border-box;width:")
              .concat(c.width(1, "var(--grid-container-width)"), ";margin:")
              .concat(c.mt(0, "var(--grid-container-margin)"), " ")
              .concat(c.mr(0, "var(--grid-container-margin)"), " ")
              .concat(c.mb(0, "var(--grid-container-margin)"), " ")
              .concat(c.ml(0, "var(--grid-container-margin)"), ";}")
          ),
          className: w.dynamic([
            [
              "3631618093",
              [
                n,
                o,
                c.width(1, "var(--grid-container-width)"),
                c.mt(0, "var(--grid-container-margin)"),
                c.mr(0, "var(--grid-container-margin)"),
                c.mb(0, "var(--grid-container-margin)"),
                c.ml(0, "var(--grid-container-margin)"),
              ],
            ],
          ]),
        },
        u = d.className,
        p = d.styles,
        h = V(u, i);
      return f.createElement(vr, N({ className: h }, s), a, p);
    };
  Bo.defaultProps = pm;
  Bo.displayName = "GeistGridContainer";
  var gm = Y(Bo),
    Ui = gm;
  Oo.Container = Ui;
  var xr = Oo;
  j();
  j();
  var hm = { disabledAll: !1, inGroup: !1 },
    Mo = f.createContext(hm),
    qi = function () {
      return f.useContext(Mo);
    };
  j();
  var bm = ["className", "children"],
    vm = { className: "" },
    zo = function (e) {
      var r = e.className,
        o = e.children,
        a = F(e, bm),
        i = H(),
        s = Q(),
        l = s.SCALES;
      return f.createElement(
        "span",
        N({}, a, {
          className:
            w.dynamic([
              [
                "2489497926",
                [
                  i.palette.accents_3,
                  l.font(0.85, "calc(var(--radio-size) * 0.85)"),
                  l.width(1, "auto"),
                  l.height(1, "auto"),
                  l.pt(0),
                  l.pr(0),
                  l.pb(0),
                  l.pl(0),
                  l.mt(0),
                  l.mr(0),
                  l.mb(0),
                  l.ml(
                    0,
                    "calc(var(--radio-size) + var(--radio-size) * 0.375)"
                  ),
                ],
              ],
            ]) +
            " " +
            ((a && a.className != null && a.className) || r || ""),
        }),
        o,
        f.createElement(
          w,
          {
            id: "2489497926",
            dynamic: [
              i.palette.accents_3,
              l.font(0.85, "calc(var(--radio-size) * 0.85)"),
              l.width(1, "auto"),
              l.height(1, "auto"),
              l.pt(0),
              l.pr(0),
              l.pb(0),
              l.pl(0),
              l.mt(0),
              l.mr(0),
              l.mb(0),
              l.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)"),
            ],
          },
          "span.__jsx-style-dynamic-selector{color:"
            .concat(i.palette.accents_3, ";font-size:")
            .concat(l.font(0.85, "calc(var(--radio-size) * 0.85)"), ";width:")
            .concat(l.width(1, "auto"), ";height:")
            .concat(l.height(1, "auto"), ";padding:")
            .concat(l.pt(0), " ")
            .concat(l.pr(0), " ")
            .concat(l.pb(0), " ")
            .concat(l.pl(0), ";margin:")
            .concat(l.mt(0), " ")
            .concat(l.mr(0), " ")
            .concat(l.mb(0), " ")
            .concat(
              l.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)"),
              ";}"
            )
        )
      );
    };
  zo.defaultProps = vm;
  zo.displayName = "GeistRadioDescription";
  var xm = Y(zo),
    Pt = xm;
  var $i = function (e, r) {
    var o = {
      default: { label: e.foreground, border: e.border, bg: e.foreground },
      secondary: { label: e.foreground, border: e.border, bg: e.foreground },
      success: { label: e.success, border: e.success, bg: e.success },
      warning: { label: e.warning, border: e.warning, bg: e.warning },
      error: { label: e.error, border: e.error, bg: e.error },
    };
    return r ? o[r] : o.default;
  };
  var ym = [
      "className",
      "checked",
      "onChange",
      "disabled",
      "type",
      "value",
      "children",
    ],
    _m = { type: "default", disabled: !1, className: "" },
    Do = function (e) {
      var r = e.className,
        o = e.checked,
        a = e.onChange,
        i = e.disabled,
        s = e.type,
        l = e.value,
        m = e.children,
        c = F(e, ym),
        n = H(),
        d = Q(),
        u = d.SCALES,
        p = B(!!o),
        h = W(p, 2),
        _ = h[0],
        x = h[1],
        A = qi(),
        y = A.value,
        b = A.disabledAll,
        v = A.inGroup,
        k = A.updateState,
        g = Qn(m, Pt),
        T = W(g, 2),
        C = T[0],
        O = T[1];
      v &&
        (o !== void 0 &&
          Et('Remove props "checked" if in the Radio.Group.', "Radio"),
        l === void 0 &&
          Et('Props "value" must be deinfed if in the Radio.Group.', "Radio"),
        M(
          function () {
            x(y === l);
          },
          [y, l]
        ));
      var S = E(
          function () {
            return $i(n.palette, s);
          },
          [n.palette, s]
        ),
        R = S.label,
        P = S.border,
        D = S.bg,
        G = E(
          function () {
            return i || b;
          },
          [i, b]
        ),
        J = function (Z) {
          if (!G) {
            var se = {
              target: { checked: !_ },
              stopPropagation: Z.stopPropagation,
              preventDefault: Z.preventDefault,
              nativeEvent: Z,
            };
            x(!_), v && k && k(l), a && a(se);
          }
        };
      return (
        M(
          function () {
            o !== void 0 && x(Boolean(o));
          },
          [o]
        ),
        f.createElement(
          "div",
          {
            className:
              w.dynamic([
                [
                  "2664604043",
                  [
                    u.font(1),
                    u.width(1, "initial"),
                    u.height(1, "auto"),
                    u.pt(0),
                    u.pr(0),
                    u.pb(0),
                    u.pl(0),
                    u.mt(0),
                    u.mr(0),
                    u.mb(0),
                    u.ml(0),
                    G ? n.palette.accents_4 : R,
                    G ? "not-allowed" : "pointer",
                    P,
                    G ? n.palette.accents_4 : D,
                  ],
                ],
              ]) +
              " " +
              (V("radio", r) || ""),
          },
          f.createElement(
            "label",
            {
              className: w.dynamic([
                [
                  "2664604043",
                  [
                    u.font(1),
                    u.width(1, "initial"),
                    u.height(1, "auto"),
                    u.pt(0),
                    u.pr(0),
                    u.pb(0),
                    u.pl(0),
                    u.mt(0),
                    u.mr(0),
                    u.mb(0),
                    u.ml(0),
                    G ? n.palette.accents_4 : R,
                    G ? "not-allowed" : "pointer",
                    P,
                    G ? n.palette.accents_4 : D,
                  ],
                ],
              ]),
            },
            f.createElement(
              "input",
              N({ type: "radio", value: l, checked: _, onChange: J }, c, {
                className:
                  w.dynamic([
                    [
                      "2664604043",
                      [
                        u.font(1),
                        u.width(1, "initial"),
                        u.height(1, "auto"),
                        u.pt(0),
                        u.pr(0),
                        u.pb(0),
                        u.pl(0),
                        u.mt(0),
                        u.mr(0),
                        u.mb(0),
                        u.ml(0),
                        G ? n.palette.accents_4 : R,
                        G ? "not-allowed" : "pointer",
                        P,
                        G ? n.palette.accents_4 : D,
                      ],
                    ],
                  ]) +
                  " " +
                  ((c && c.className != null && c.className) || ""),
              })
            ),
            f.createElement(
              "span",
              {
                className:
                  w.dynamic([
                    [
                      "2664604043",
                      [
                        u.font(1),
                        u.width(1, "initial"),
                        u.height(1, "auto"),
                        u.pt(0),
                        u.pr(0),
                        u.pb(0),
                        u.pl(0),
                        u.mt(0),
                        u.mr(0),
                        u.mb(0),
                        u.ml(0),
                        G ? n.palette.accents_4 : R,
                        G ? "not-allowed" : "pointer",
                        P,
                        G ? n.palette.accents_4 : D,
                      ],
                    ],
                  ]) + " name",
              },
              f.createElement("span", {
                className:
                  w.dynamic([
                    [
                      "2664604043",
                      [
                        u.font(1),
                        u.width(1, "initial"),
                        u.height(1, "auto"),
                        u.pt(0),
                        u.pr(0),
                        u.pb(0),
                        u.pl(0),
                        u.mt(0),
                        u.mr(0),
                        u.mb(0),
                        u.ml(0),
                        G ? n.palette.accents_4 : R,
                        G ? "not-allowed" : "pointer",
                        P,
                        G ? n.palette.accents_4 : D,
                      ],
                    ],
                  ]) +
                  " " +
                  (V("point", { active: _ }) || ""),
              }),
              C
            ),
            O && O
          ),
          f.createElement(
            w,
            {
              id: "2664604043",
              dynamic: [
                u.font(1),
                u.width(1, "initial"),
                u.height(1, "auto"),
                u.pt(0),
                u.pr(0),
                u.pb(0),
                u.pl(0),
                u.mt(0),
                u.mr(0),
                u.mb(0),
                u.ml(0),
                G ? n.palette.accents_4 : R,
                G ? "not-allowed" : "pointer",
                P,
                G ? n.palette.accents_4 : D,
              ],
            },
            "input.__jsx-style-dynamic-selector{opacity:0;visibility:hidden;overflow:hidden;width:1px;height:1px;top:-1000px;right:-1000px;position:fixed;font-size:0;}.radio.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;--radio-size:"
              .concat(u.font(1), ";width:")
              .concat(u.width(1, "initial"), ";height:")
              .concat(u.height(1, "auto"), ";padding:")
              .concat(u.pt(0), " ")
              .concat(u.pr(0), " ")
              .concat(u.pb(0), " ")
              .concat(u.pl(0), ";margin:")
              .concat(u.mt(0), " ")
              .concat(u.mr(0), " ")
              .concat(u.mb(0), " ")
              .concat(
                u.ml(0),
                ";}label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:"
              )
              .concat(G ? n.palette.accents_4 : R, ";cursor:")
              .concat(
                G ? "not-allowed" : "pointer",
                ";}.name.__jsx-style-dynamic-selector{font-size:var(--radio-size);font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.point.__jsx-style-dynamic-selector{height:var(--radio-size);width:var(--radio-size);border-radius:50%;border:1px solid "
              )
              .concat(
                P,
                ";-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;position:relative;display:inline-block;-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);margin-right:calc(var(--radio-size) * 0.375);}.point.__jsx-style-dynamic-selector:before{content:'';position:absolute;left:-1px;top:-1px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);height:var(--radio-size);width:var(--radio-size);border-radius:50%;background-color:"
              )
              .concat(
                G ? n.palette.accents_4 : D,
                ";}.active.__jsx-style-dynamic-selector:before{-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}"
              )
          )
        )
      );
    };
  Do.defaultProps = _m;
  Do.displayName = "GeistRadio";
  var wm = Y(Do),
    jt = wm;
  j();
  var Sm = [
      "disabled",
      "onChange",
      "value",
      "children",
      "className",
      "initialValue",
      "useRow",
    ],
    km = { disabled: !1, className: "", useRow: !1 },
    Wo = function (e) {
      var r = e.disabled,
        o = e.onChange,
        a = e.value,
        i = e.children,
        s = e.className,
        l = e.initialValue,
        m = e.useRow,
        c = F(e, Sm),
        n = Q(),
        d = n.SCALES,
        u = B(l),
        p = W(u, 2),
        h = p[0],
        _ = p[1],
        x = function (b) {
          _(b), o && o(b);
        },
        A = E(
          function () {
            return { updateState: x, disabledAll: r, inGroup: !0, value: h };
          },
          [r, h]
        );
      return (
        M(
          function () {
            a !== void 0 && _(a);
          },
          [a]
        ),
        f.createElement(
          Mo.Provider,
          { value: A },
          f.createElement(
            "div",
            N({}, c, {
              className:
                w.dynamic([
                  [
                    "1223822443",
                    [
                      m ? "col" : "column",
                      d.font(1),
                      d.width(1, "auto"),
                      d.height(1, "auto"),
                      d.pt(0),
                      d.pr(0),
                      d.pb(0),
                      d.pl(0),
                      d.mt(0),
                      d.mr(0),
                      d.mb(0),
                      d.ml(0),
                      m ? 0 : "var(--radio-group-gap)",
                      m ? "var(--radio-group-gap)" : 0,
                      d.font(1),
                    ],
                  ],
                ]) +
                " " +
                ((c && c.className != null && c.className) ||
                  V("radio-group", s) ||
                  ""),
            }),
            i
          ),
          f.createElement(
            w,
            {
              id: "1223822443",
              dynamic: [
                m ? "col" : "column",
                d.font(1),
                d.width(1, "auto"),
                d.height(1, "auto"),
                d.pt(0),
                d.pr(0),
                d.pb(0),
                d.pl(0),
                d.mt(0),
                d.mr(0),
                d.mb(0),
                d.ml(0),
                m ? 0 : "var(--radio-group-gap)",
                m ? "var(--radio-group-gap)" : 0,
                d.font(1),
              ],
            },
            ".radio-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:"
              .concat(m ? "col" : "column", ";-ms-flex-direction:")
              .concat(m ? "col" : "column", ";flex-direction:")
              .concat(m ? "col" : "column", ";--radio-group-gap:")
              .concat(d.font(1), ";width:")
              .concat(d.width(1, "auto"), ";height:")
              .concat(d.height(1, "auto"), ";padding:")
              .concat(d.pt(0), " ")
              .concat(d.pr(0), " ")
              .concat(d.pb(0), " ")
              .concat(d.pl(0), ";margin:")
              .concat(d.mt(0), " ")
              .concat(d.mr(0), " ")
              .concat(d.mb(0), " ")
              .concat(
                d.ml(0),
                ";}.radio-group.__jsx-style-dynamic-selector .radio{margin-top:"
              )
              .concat(m ? 0 : "var(--radio-group-gap)", ";margin-left:")
              .concat(m ? "var(--radio-group-gap)" : 0, ";--radio-size:")
              .concat(
                d.font(1),
                ";}.radio-group.__jsx-style-dynamic-selector .radio:first-of-type{margin:0;}"
              )
          )
        )
      );
    };
  Wo.defaultProps = km;
  Wo.displayName = "GeistRadioGroup";
  var Cm = Y(Wo),
    Xi = Cm;
  jt.Group = Xi;
  jt.Description = Pt;
  jt.Desc = Pt;
  var et = jt;
  j();
  j();
  var Ji = function () {
    return f.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        className: "jsx-2742933678",
      },
      f.createElement("path", {
        d: "M6 9l6 6 6-6",
        className: "jsx-2742933678",
      }),
      f.createElement(
        w,
        { id: "2742933678" },
        "svg.jsx-2742933678{color:inherit;stroke:currentColor;-webkit-transition:all 200ms ease;transition:all 200ms ease;width:1.214em;height:1.214em;}"
      )
    );
  };
  Ji.displayName = "GeistSelectIcon";
  var Am = f.memo(Ji),
    Ki = Am;
  j();
  j();
  var Tm = { visible: !1, disableAll: !1 },
    Go = f.createContext(Tm),
    yr = function () {
      return f.useContext(Go);
    };
  var Em = { className: "", dropdownStyle: {} },
    Ho = f.forwardRef(function (t, e) {
      var r = t.visible,
        o = t.children,
        a = t.className,
        i = t.dropdownStyle,
        s = t.disableMatchWidth,
        l = t.getPopupContainer,
        m = H(),
        c = $(null),
        n = yr(),
        d = n.ref,
        u = V("select-dropdown", a);
      return (
        we(e, function () {
          return c.current;
        }),
        f.createElement(
          _i,
          { parent: d, visible: r, disableMatchWidth: s, getPopupContainer: l },
          f.createElement(
            "div",
            {
              ref: c,
              style: i,
              className:
                w.dynamic([
                  [
                    "2782510679",
                    [
                      m.layout.radius,
                      m.expressiveness.shadowLarge,
                      m.palette.background,
                    ],
                  ],
                ]) +
                " " +
                (u || ""),
            },
            o,
            f.createElement(
              w,
              {
                id: "2782510679",
                dynamic: [
                  m.layout.radius,
                  m.expressiveness.shadowLarge,
                  m.palette.background,
                ],
              },
              ".select-dropdown.__jsx-style-dynamic-selector{border-radius:"
                .concat(m.layout.radius, ";box-shadow:")
                .concat(m.expressiveness.shadowLarge, ";background-color:")
                .concat(
                  m.palette.background,
                  ";max-height:17em;overflow-y:auto;overflow-anchor:none;padding:0.38em 0;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}"
                )
            )
          )
        )
      );
    });
  Ho.defaultProps = Em;
  Ho.displayName = "GeistSelectDropdown";
  var Yi = Ho;
  j();
  j();
  var Rm = function (e) {
      var r = e.onClick,
        o = H(),
        a = function (s) {
          s.preventDefault(),
            s.stopPropagation(),
            s.nativeEvent.stopImmediatePropagation(),
            r && r(s);
        };
      return f.createElement(
        "div",
        {
          onClick: a,
          className:
            w.dynamic([
              ["1984024521", [o.palette.accents_3, o.palette.foreground]],
            ]) + " clear-icon",
        },
        f.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
            shapeRendering: "geometricPrecision",
            className: w.dynamic([
              ["1984024521", [o.palette.accents_3, o.palette.foreground]],
            ]),
          },
          f.createElement("path", {
            d: "M18 6L6 18",
            className: w.dynamic([
              ["1984024521", [o.palette.accents_3, o.palette.foreground]],
            ]),
          }),
          f.createElement("path", {
            d: "M6 6l12 12",
            className: w.dynamic([
              ["1984024521", [o.palette.accents_3, o.palette.foreground]],
            ]),
          })
        ),
        f.createElement(
          w,
          {
            id: "1984024521",
            dynamic: [o.palette.accents_3, o.palette.foreground],
          },
          ".clear-icon.__jsx-style-dynamic-selector{padding:0 0 0 0.5em;margin:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;cursor:pointer;box-sizing:border-box;-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;color:"
            .concat(
              o.palette.accents_3,
              ";visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:"
            )
            .concat(
              o.palette.foreground,
              ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:1em;height:1em;}"
            )
        )
      );
    },
    Nm = f.memo(Rm),
    Zi = Nm;
  var Qi = function (e) {
    var r = e.disabled,
      o = e.onClear,
      a = e.children,
      i = H();
    return f.createElement(
      xr,
      null,
      f.createElement(
        "div",
        {
          className:
            w.dynamic([
              [
                "3357578496",
                [
                  i.layout.radius,
                  i.palette.accents_2,
                  r ? i.palette.accents_4 : i.palette.accents_6,
                ],
              ],
            ]) + " item",
        },
        a,
        !!o && f.createElement(Zi, { onClick: o })
      ),
      f.createElement(
        w,
        {
          id: "3357578496",
          dynamic: [
            i.layout.radius,
            i.palette.accents_2,
            r ? i.palette.accents_4 : i.palette.accents_6,
          ],
        },
        ".item.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0 0.5em;font-size:var(--select-font-size);height:calc(var(--select-font-size) * 2);border-radius:"
          .concat(i.layout.radius, ";background-color:")
          .concat(i.palette.accents_2, ";color:")
          .concat(
            r ? i.palette.accents_4 : i.palette.accents_6,
            ";}.item.__jsx-style-dynamic-selector>div:not(.clear-icon),.item.__jsx-style-dynamic-selector>div:not(.clear-icon):hover{border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit;}"
          )
      )
    );
  };
  Qi.displayName = "GeistSelectMultipleValue";
  var es = Qi;
  var ts = function (e, r) {
    var o = {
      default: {
        border: e.border,
        borderActive: e.foreground,
        iconBorder: e.accents_5,
        placeholderColor: e.accents_3,
      },
      secondary: {
        border: e.border,
        borderActive: e.foreground,
        iconBorder: e.accents_5,
        placeholderColor: e.accents_3,
      },
      success: {
        border: e.successLight,
        borderActive: e.successDark,
        iconBorder: e.success,
        placeholderColor: e.accents_3,
      },
      warning: {
        border: e.warningLight,
        borderActive: e.warningDark,
        iconBorder: e.warning,
        placeholderColor: e.accents_3,
      },
      error: {
        border: e.errorLight,
        borderActive: e.errorDark,
        iconBorder: e.error,
        placeholderColor: e.error,
      },
    };
    return r ? o[r] : o.default;
  };
  j();
  var rs = f.forwardRef(function (t, e) {
    var r = t.visible,
      o = t.onBlur,
      a = t.onFocus,
      i = $(null);
    return (
      we(e, function () {
        return i.current;
      }),
      M(
        function () {
          if (r) {
            var s;
            (s = i.current) === null || s === void 0 || s.focus();
          }
        },
        [r]
      ),
      f.createElement(
        f.Fragment,
        null,
        f.createElement("input", {
          ref: i,
          type: "search",
          role: "combobox",
          "aria-haspopup": "listbox",
          readOnly: !0,
          unselectable: "on",
          "aria-expanded": r,
          onBlur: o,
          onFocus: a,
          className: "jsx-2813108835",
        }),
        f.createElement(
          w,
          { id: "2813108835" },
          "input.jsx-2813108835{position:fixed;top:-10000px;left:-10000px;opacity:0;z-index:-1;width:0;height:0;padding:0;font-size:0;border:none;}"
        )
      )
    );
  });
  rs.displayName = "GeistSelectInput";
  var os = rs;
  var Pm = [
      "children",
      "type",
      "disabled",
      "initialValue",
      "value",
      "icon",
      "onChange",
      "pure",
      "multiple",
      "clearable",
      "placeholder",
      "className",
      "dropdownClassName",
      "dropdownStyle",
      "disableMatchWidth",
      "getPopupContainer",
      "onDropdownVisibleChange",
    ],
    jm = {
      disabled: !1,
      type: "default",
      icon: Ki,
      pure: !1,
      multiple: !1,
      clearable: !0,
      className: "",
      disableMatchWidth: !1,
      onDropdownVisibleChange: function () {},
    },
    Vo = f.forwardRef(function (t, e) {
      var r = t.children,
        o = t.type,
        a = t.disabled,
        i = t.initialValue,
        s = t.value,
        l = t.icon,
        m = t.onChange,
        c = t.pure,
        n = t.multiple,
        d = t.clearable,
        u = t.placeholder,
        p = t.className,
        h = t.dropdownClassName,
        _ = t.dropdownStyle,
        x = t.disableMatchWidth,
        A = t.getPopupContainer,
        y = t.onDropdownVisibleChange,
        b = F(t, Pm),
        v = H(),
        k = Q(),
        g = k.SCALES,
        T = $(null),
        C = $(null),
        O = $(null),
        S = B(!1),
        R = W(S, 2),
        P = R[0],
        D = R[1],
        G = B(!1),
        J = W(G, 2),
        ne = J[0],
        Z = J[1],
        se = We(function () {
          return !n || Array.isArray(i) ? i : typeof i > "u" ? [] : [i];
        }),
        le = W(se, 3),
        te = le[0],
        de = le[1],
        I = le[2],
        ke = E(
          function () {
            return Array.isArray(te) ? te.length === 0 : !te;
          },
          [te]
        ),
        K = E(
          function () {
            return ts(v.palette, o);
          },
          [v.palette, o]
        ),
        q = K.border,
        X = K.borderActive,
        he = K.iconBorder,
        U = K.placeholderColor,
        re = function (ee) {
          y(ee), D(ee);
        },
        oe = function (ee) {
          de(function (ye) {
            return Array.isArray(ye)
              ? ye.includes(ee)
                ? ye.filter(function (ge) {
                    return ge !== ee;
                  })
                : [].concat(Ge(ye), [ee])
              : ee;
          }),
            m && m(I.current),
            n || re(!1);
        },
        ae = E(
          function () {
            return {
              value: te,
              visible: P,
              updateValue: oe,
              updateVisible: re,
              ref: T,
              disableAll: a,
            };
          },
          [P, a, T, te, n]
        ),
        ie = function (ee) {
          ee.stopPropagation(),
            ee.nativeEvent.stopImmediatePropagation(),
            ee.preventDefault(),
            !a && (re(!P), ee.preventDefault());
        },
        xe = function (ee) {
          P && ee.preventDefault();
        };
      M(
        function () {
          s !== void 0 && de(s);
        },
        [s]
      ),
        we(
          e,
          function () {
            return {
              focus: function () {
                var ee;
                return (ee = C.current) === null || ee === void 0
                  ? void 0
                  : ee.focus();
              },
              blur: function () {
                var ee;
                return (ee = C.current) === null || ee === void 0
                  ? void 0
                  : ee.blur();
              },
              scrollTo: function (ee) {
                var ye;
                return (ye = O.current) === null || ye === void 0
                  ? void 0
                  : ye.scrollTo(ee);
              },
            };
          },
          [C, O]
        );
      var ve = E(
          function () {
            var pe = ei(r, "value", te),
              ee = W(pe, 2),
              ye = ee[1];
            return f.Children.map(ye, function (ge) {
              if (!f.isValidElement(ge)) return null;
              var _e = f.cloneElement(ge, { preventAllEvents: !0 });
              return n
                ? f.createElement(
                    es,
                    {
                      disabled: a,
                      onClear: d
                        ? function () {
                            return oe(ge.props.value);
                          }
                        : null,
                    },
                    _e
                  )
                : _e;
            });
          },
          [te, r, n]
        ),
        be = function () {
          re(!1), Z(!1);
        },
        fe = V("select", { active: ne || P, multiple: n }, p);
      return f.createElement(
        Go.Provider,
        { value: ae },
        f.createElement(
          "div",
          N({ ref: T, onClick: ie, onMouseDown: xe }, b, {
            className:
              w.dynamic([
                [
                  "3282295248",
                  [
                    a ? "not-allowed" : "pointer",
                    q,
                    v.layout.radius,
                    a ? v.palette.accents_1 : v.palette.background,
                    g.font(0.875),
                    g.height(2.25),
                    g.width(1, "initial"),
                    g.pt(0),
                    g.pr(0.334),
                    g.pb(0),
                    g.pl(0.667),
                    g.mt(0),
                    g.mr(0),
                    g.mb(0),
                    g.ml(0),
                    g.pt(0.334),
                    g.pr(0.334),
                    g.pb(0.334),
                    g.pl(0.667),
                    a ? v.palette.border : X,
                    a ? v.palette.accents_5 : X,
                    a ? v.palette.accents_4 : v.palette.foreground,
                    U,
                    v.layout.gapQuarter,
                    P ? "180" : "0",
                    he,
                  ],
                ],
              ]) +
              " " +
              ((b && b.className != null && b.className) || fe || ""),
          }),
          f.createElement(os, {
            ref: C,
            visible: P,
            onBlur: be,
            onFocus: function () {
              return Z(!0);
            },
          }),
          ke &&
            f.createElement(
              "span",
              {
                className:
                  w.dynamic([
                    [
                      "3282295248",
                      [
                        a ? "not-allowed" : "pointer",
                        q,
                        v.layout.radius,
                        a ? v.palette.accents_1 : v.palette.background,
                        g.font(0.875),
                        g.height(2.25),
                        g.width(1, "initial"),
                        g.pt(0),
                        g.pr(0.334),
                        g.pb(0),
                        g.pl(0.667),
                        g.mt(0),
                        g.mr(0),
                        g.mb(0),
                        g.ml(0),
                        g.pt(0.334),
                        g.pr(0.334),
                        g.pb(0.334),
                        g.pl(0.667),
                        a ? v.palette.border : X,
                        a ? v.palette.accents_5 : X,
                        a ? v.palette.accents_4 : v.palette.foreground,
                        U,
                        v.layout.gapQuarter,
                        P ? "180" : "0",
                        he,
                      ],
                    ],
                  ]) + " value placeholder",
              },
              f.createElement(dr, { height: "var(--select-height)" }, u)
            ),
          te &&
            !n &&
            f.createElement(
              "span",
              {
                className:
                  w.dynamic([
                    [
                      "3282295248",
                      [
                        a ? "not-allowed" : "pointer",
                        q,
                        v.layout.radius,
                        a ? v.palette.accents_1 : v.palette.background,
                        g.font(0.875),
                        g.height(2.25),
                        g.width(1, "initial"),
                        g.pt(0),
                        g.pr(0.334),
                        g.pb(0),
                        g.pl(0.667),
                        g.mt(0),
                        g.mr(0),
                        g.mb(0),
                        g.ml(0),
                        g.pt(0.334),
                        g.pr(0.334),
                        g.pb(0.334),
                        g.pl(0.667),
                        a ? v.palette.border : X,
                        a ? v.palette.accents_5 : X,
                        a ? v.palette.accents_4 : v.palette.foreground,
                        U,
                        v.layout.gapQuarter,
                        P ? "180" : "0",
                        he,
                      ],
                    ],
                  ]) + " value",
              },
              ve
            ),
          te && n && f.createElement(xr.Container, { gap: 0.5 }, ve),
          f.createElement(
            Yi,
            {
              ref: O,
              visible: P,
              className: h,
              dropdownStyle: _,
              disableMatchWidth: x,
              getPopupContainer: A,
            },
            r
          ),
          !c &&
            f.createElement(
              "div",
              {
                className:
                  w.dynamic([
                    [
                      "3282295248",
                      [
                        a ? "not-allowed" : "pointer",
                        q,
                        v.layout.radius,
                        a ? v.palette.accents_1 : v.palette.background,
                        g.font(0.875),
                        g.height(2.25),
                        g.width(1, "initial"),
                        g.pt(0),
                        g.pr(0.334),
                        g.pb(0),
                        g.pl(0.667),
                        g.mt(0),
                        g.mr(0),
                        g.mb(0),
                        g.ml(0),
                        g.pt(0.334),
                        g.pr(0.334),
                        g.pb(0.334),
                        g.pl(0.667),
                        a ? v.palette.border : X,
                        a ? v.palette.accents_5 : X,
                        a ? v.palette.accents_4 : v.palette.foreground,
                        U,
                        v.layout.gapQuarter,
                        P ? "180" : "0",
                        he,
                      ],
                    ],
                  ]) + " icon",
              },
              f.createElement(l, {
                className: w.dynamic([
                  [
                    "3282295248",
                    [
                      a ? "not-allowed" : "pointer",
                      q,
                      v.layout.radius,
                      a ? v.palette.accents_1 : v.palette.background,
                      g.font(0.875),
                      g.height(2.25),
                      g.width(1, "initial"),
                      g.pt(0),
                      g.pr(0.334),
                      g.pb(0),
                      g.pl(0.667),
                      g.mt(0),
                      g.mr(0),
                      g.mb(0),
                      g.ml(0),
                      g.pt(0.334),
                      g.pr(0.334),
                      g.pb(0.334),
                      g.pl(0.667),
                      a ? v.palette.border : X,
                      a ? v.palette.accents_5 : X,
                      a ? v.palette.accents_4 : v.palette.foreground,
                      U,
                      v.layout.gapQuarter,
                      P ? "180" : "0",
                      he,
                    ],
                  ],
                ]),
              })
            ),
          f.createElement(
            w,
            {
              id: "3282295248",
              dynamic: [
                a ? "not-allowed" : "pointer",
                q,
                v.layout.radius,
                a ? v.palette.accents_1 : v.palette.background,
                g.font(0.875),
                g.height(2.25),
                g.width(1, "initial"),
                g.pt(0),
                g.pr(0.334),
                g.pb(0),
                g.pl(0.667),
                g.mt(0),
                g.mr(0),
                g.mb(0),
                g.ml(0),
                g.pt(0.334),
                g.pr(0.334),
                g.pb(0.334),
                g.pl(0.667),
                a ? v.palette.border : X,
                a ? v.palette.accents_5 : X,
                a ? v.palette.accents_4 : v.palette.foreground,
                U,
                v.layout.gapQuarter,
                P ? "180" : "0",
                he,
              ],
            },
            ".select.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;position:relative;cursor:"
              .concat(
                a ? "not-allowed" : "pointer",
                ";max-width:90vw;overflow:hidden;-webkit-transition:border 150ms ease-in 0s,color 200ms ease-out 0s, box-shadow 200ms ease 0s;transition:border 150ms ease-in 0s,color 200ms ease-out 0s, box-shadow 200ms ease 0s;border:1px solid "
              )
              .concat(q, ";border-radius:")
              .concat(v.layout.radius, ";background-color:")
              .concat(
                a ? v.palette.accents_1 : v.palette.background,
                ";--select-font-size:"
              )
              .concat(g.font(0.875), ";--select-height:")
              .concat(g.height(2.25), ";min-width:11.5em;width:")
              .concat(
                g.width(1, "initial"),
                ";height:var(--select-height);padding:"
              )
              .concat(g.pt(0), " ")
              .concat(g.pr(0.334), " ")
              .concat(g.pb(0), " ")
              .concat(g.pl(0.667), ";margin:")
              .concat(g.mt(0), " ")
              .concat(g.mr(0), " ")
              .concat(g.mb(0), " ")
              .concat(
                g.ml(0),
                ";}.multiple.__jsx-style-dynamic-selector{height:auto;min-height:var(--select-height);padding:"
              )
              .concat(g.pt(0.334), " ")
              .concat(g.pr(0.334), " ")
              .concat(g.pb(0.334), " ")
              .concat(
                g.pl(0.667),
                ";}.select.active.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover{border-color:"
              )
              .concat(
                a ? v.palette.border : X,
                ";}.select.active.icon.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover .icon.__jsx-style-dynamic-selector{color:"
              )
              .concat(
                a ? v.palette.accents_5 : X,
                ";}.value.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0;margin-right:1.25em;font-size:var(--select-font-size);color:"
              )
              .concat(
                a ? v.palette.accents_4 : v.palette.foreground,
                ";width:calc(100% - 1.25em);}.value.__jsx-style-dynamic-selector>div,.value.__jsx-style-dynamic-selector>div:hover{border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit;}.placeholder.__jsx-style-dynamic-selector{color:"
              )
              .concat(
                U,
                ";}.icon.__jsx-style-dynamic-selector{position:absolute;right:"
              )
              .concat(
                v.layout.gapQuarter,
                ";font-size:var(--select-font-size);top:50%;bottom:0;-webkit-transform:translateY(-50%) rotate("
              )
              .concat(
                P ? "180" : "0",
                "deg);-ms-transform:translateY(-50%) rotate("
              )
              .concat(
                P ? "180" : "0",
                "deg);transform:translateY(-50%) rotate("
              )
              .concat(
                P ? "180" : "0",
                "deg);pointer-events:none;-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:"
              )
              .concat(he, ";}")
          )
        )
      );
    });
  Vo.defaultProps = jm;
  Vo.displayName = "GeistSelect";
  var Im = Y(Vo),
    Fo = Im;
  j();
  var Lm = [
      "value",
      "className",
      "children",
      "disabled",
      "divider",
      "label",
      "preventAllEvents",
    ],
    Om = {
      disabled: !1,
      divider: !1,
      label: !1,
      className: "",
      preventAllEvents: !1,
    },
    Uo = function (e) {
      var r = e.value,
        o = e.className,
        a = e.children,
        i = e.disabled,
        s = e.divider,
        l = e.label,
        m = e.preventAllEvents,
        c = F(e, Lm),
        n = H(),
        d = Q(),
        u = d.SCALES,
        p = yr(),
        h = p.updateValue,
        _ = p.value,
        x = p.disableAll,
        A = E(
          function () {
            return i || x;
          },
          [i, x]
        ),
        y = E(
          function () {
            return l || s;
          },
          [l, s]
        ),
        b = V("option", { divider: s, label: l }, o);
      !y &&
        r === void 0 &&
        Et('The props "value" is required.', "Select Option");
      var v = E(
          function () {
            return _
              ? typeof _ == "string"
                ? r === _
                : _.includes("".concat(r))
              : !1;
          },
          [r, _]
        ),
        k = E(
          function () {
            return A
              ? n.palette.accents_1
              : v
              ? n.palette.accents_2
              : n.palette.background;
          },
          [v, A, n.palette]
        ),
        g = E(
          function () {
            return A || y || v ? k : n.palette.accents_1;
          },
          [v, A, n.palette, y, k]
        ),
        T = E(
          function () {
            return A
              ? n.palette.accents_4
              : v
              ? n.palette.foreground
              : n.palette.accents_5;
          },
          [v, A, n.palette]
        ),
        C = function (S) {
          m ||
            (S.stopPropagation(),
            S.nativeEvent.stopImmediatePropagation(),
            S.preventDefault(),
            !(A || y) && h && h(r));
        };
      return f.createElement(
        "div",
        N({ onClick: C }, c, {
          className:
            w.dynamic([
              [
                "199367556",
                [
                  k,
                  T,
                  A ? "not-allowed" : "pointer",
                  u.font(0.75),
                  u.width(1, "100%"),
                  u.height(2.25),
                  u.pt(0),
                  u.pr(0.667),
                  u.pb(0),
                  u.pl(0.667),
                  u.mt(0),
                  u.mr(0),
                  u.mb(0),
                  u.ml(0),
                  g,
                  n.palette.accents_7,
                  n.palette.border,
                  u.width(1, "100%"),
                  u.height(1, 0),
                  u.pt(0),
                  u.pr(0),
                  u.pb(0),
                  u.pl(0),
                  u.mt(0.5),
                  u.mr(0),
                  u.mb(0.5),
                  u.ml(0),
                  n.palette.accents_7,
                  n.palette.border,
                  u.font(0.875),
                  u.width(1, "100%"),
                ],
              ],
            ]) +
            " " +
            ((c && c.className != null && c.className) || b || ""),
        }),
        f.createElement(dr, { height: u.height(2.25) }, a),
        f.createElement(
          w,
          {
            id: "199367556",
            dynamic: [
              k,
              T,
              A ? "not-allowed" : "pointer",
              u.font(0.75),
              u.width(1, "100%"),
              u.height(2.25),
              u.pt(0),
              u.pr(0.667),
              u.pb(0),
              u.pl(0.667),
              u.mt(0),
              u.mr(0),
              u.mb(0),
              u.ml(0),
              g,
              n.palette.accents_7,
              n.palette.border,
              u.width(1, "100%"),
              u.height(1, 0),
              u.pt(0),
              u.pr(0),
              u.pb(0),
              u.pl(0),
              u.mt(0.5),
              u.mr(0),
              u.mb(0.5),
              u.ml(0),
              n.palette.accents_7,
              n.palette.border,
              u.font(0.875),
              u.width(1, "100%"),
            ],
          },
          ".option.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100%;box-sizing:border-box;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;background-color:"
            .concat(k, ";color:")
            .concat(
              T,
              ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;cursor:"
            )
            .concat(
              A ? "not-allowed" : "pointer",
              ";-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;--select-font-size:"
            )
            .concat(u.font(0.75), ";font-size:var(--select-font-size);width:")
            .concat(u.width(1, "100%"), ";height:")
            .concat(u.height(2.25), ";padding:")
            .concat(u.pt(0), " ")
            .concat(u.pr(0.667), " ")
            .concat(u.pb(0), " ")
            .concat(u.pl(0.667), ";margin:")
            .concat(u.mt(0), " ")
            .concat(u.mr(0), " ")
            .concat(u.mb(0), " ")
            .concat(
              u.ml(0),
              ";}.option.__jsx-style-dynamic-selector:hover{background-color:"
            )
            .concat(g, ";color:")
            .concat(
              n.palette.accents_7,
              ";}.divider.__jsx-style-dynamic-selector{line-height:0;overflow:hidden;border-top:1px solid "
            )
            .concat(n.palette.border, ";width:")
            .concat(u.width(1, "100%"), ";height:")
            .concat(u.height(1, 0), ";padding:")
            .concat(u.pt(0), " ")
            .concat(u.pr(0), " ")
            .concat(u.pb(0), " ")
            .concat(u.pl(0), ";margin:")
            .concat(u.mt(0.5), " ")
            .concat(u.mr(0), " ")
            .concat(u.mb(0.5), " ")
            .concat(u.ml(0), ";}.label.__jsx-style-dynamic-selector{color:")
            .concat(n.palette.accents_7, ";border-bottom:1px solid ")
            .concat(
              n.palette.border,
              ";text-transform:capitalize;cursor:default;font-size:"
            )
            .concat(u.font(0.875), ";width:")
            .concat(u.width(1, "100%"), ";font-weight:500;}")
        )
      );
    };
  Uo.defaultProps = Om;
  Uo.displayName = "GeistSelectOption";
  var Bm = Y(Uo),
    as = Bm;
  Fo.Option = as;
  var tt = Fo;
  j();
  var ns = { delay: 2e3, type: "default" },
    Mm = function (e) {
      var r = br(),
        o = r.updateToasts,
        a = r.toasts,
        i = r.updateToastLayout,
        s = r.updateLastToastId;
      M(function () {
        e &&
          i(function () {
            return e ? N({}, ft, e) : ft;
          });
      }, []);
      var l = function (p) {
          o(function (h) {
            return h.map(function (_) {
              return _._internalIdent !== p ? _ : N({}, _, { visible: !1 });
            });
          }),
            s(function () {
              return p;
            });
        },
        m = function () {
          o(function (p) {
            return p.map(function (h) {
              return N({}, h, { visible: !1 });
            });
          });
        },
        c = function (p) {
          return a.find(function (h) {
            return h.id === p;
          });
        },
        n = function (p) {
          o(function (h) {
            return h.map(function (_) {
              return _.id !== p ? _ : N({}, _, { visible: !1 });
            });
          });
        },
        d = function (p) {
          var h = "toast-".concat(mr()),
            _ = p.delay || ns.delay;
          if (p.id) {
            var x = a.find(function (A) {
              return A.id === p.id;
            });
            if (x) throw new Error('Toast: Already have the same key: "ident"');
          }
          o(function (A) {
            var y = {
              delay: _,
              text: p.text,
              visible: !0,
              type: p.type || ns.type,
              id: p.id || h,
              actions: p.actions || [],
              _internalIdent: h,
              _timeout: window.setTimeout(function () {
                l(h),
                  y._timeout &&
                    (window.clearTimeout(y._timeout), (y._timeout = null));
              }, _),
              cancel: (function (b) {
                function v() {
                  return b.apply(this, arguments);
                }
                return (
                  (v.toString = function () {
                    return b.toString();
                  }),
                  v
                );
              })(function () {
                return l(h);
              }),
            };
            return [].concat(Ge(A), [y]);
          });
        };
      return {
        toasts: a,
        setToast: d,
        removeAll: m,
        findToastOneByID: c,
        removeToastOneByID: n,
      };
    },
    is = Mm;
  var It = is;
  j();
  var zm = ["className"],
    Dm = { className: "" },
    Wm = function (e) {
      return Ge(new Array(12)).map(function (r, o) {
        return f.createElement(
          "span",
          {
            key: "spinner-".concat(o),
            className: w.dynamic([
              ["3296107463", [e.palette.foreground, e.layout.radius]],
            ]),
          },
          f.createElement(
            w,
            {
              id: "3296107463",
              dynamic: [e.palette.foreground, e.layout.radius],
            },
            "span.__jsx-style-dynamic-selector{background-color:"
              .concat(
                e.palette.foreground,
                ";position:absolute;top:-3.9%;width:24%;height:8%;left:-10%;border-radius:"
              )
              .concat(
                e.layout.radius,
                ";-webkit-animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;}span.__jsx-style-dynamic-selector:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s;-webkit-transform:rotate(0deg) translate(146%);-ms-transform:rotate(0deg) translate(146%);transform:rotate(0deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s;-webkit-transform:rotate(30deg) translate(146%);-ms-transform:rotate(30deg) translate(146%);transform:rotate(30deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-transform:rotate(60deg) translate(146%);-ms-transform:rotate(60deg) translate(146%);transform:rotate(60deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(4){-webkit-animation-delay:-0.9s;animation-delay:-0.9s;-webkit-transform:rotate(90deg) translate(146%);-ms-transform:rotate(90deg) translate(146%);transform:rotate(90deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(5){-webkit-animation-delay:-0.8s;animation-delay:-0.8s;-webkit-transform:rotate(120deg) translate(146%);-ms-transform:rotate(120deg) translate(146%);transform:rotate(120deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(6){-webkit-animation-delay:-0.7s;animation-delay:-0.7s;-webkit-transform:rotate(150deg) translate(146%);-ms-transform:rotate(150deg) translate(146%);transform:rotate(150deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(7){-webkit-animation-delay:-0.6s;animation-delay:-0.6s;-webkit-transform:rotate(180deg) translate(146%);-ms-transform:rotate(180deg) translate(146%);transform:rotate(180deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(8){-webkit-animation-delay:-0.5s;animation-delay:-0.5s;-webkit-transform:rotate(210deg) translate(146%);-ms-transform:rotate(210deg) translate(146%);transform:rotate(210deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(9){-webkit-animation-delay:-0.4s;animation-delay:-0.4s;-webkit-transform:rotate(240deg) translate(146%);-ms-transform:rotate(240deg) translate(146%);transform:rotate(240deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(10){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;-webkit-transform:rotate(270deg) translate(146%);-ms-transform:rotate(270deg) translate(146%);transform:rotate(270deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(11){-webkit-animation-delay:-0.2s;animation-delay:-0.2s;-webkit-transform:rotate(300deg) translate(146%);-ms-transform:rotate(300deg) translate(146%);transform:rotate(300deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(12){-webkit-animation-delay:-0.1s;animation-delay:-0.1s;-webkit-transform:rotate(330deg) translate(146%);-ms-transform:rotate(330deg) translate(146%);transform:rotate(330deg) translate(146%);}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}@keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}"
              )
          )
        );
      });
    },
    qo = function (e) {
      var r = e.className,
        o = F(e, zm),
        a = H(),
        i = Q(),
        s = i.SCALES,
        l = V("spinner", r);
      return f.createElement(
        "div",
        N({}, o, {
          className:
            w.dynamic([
              [
                "1153799566",
                [
                  s.width(1.25),
                  s.height(1.25),
                  s.pt(0),
                  s.pr(0),
                  s.pb(0),
                  s.pl(0),
                  s.mt(0),
                  s.mr(0),
                  s.mb(0),
                  s.ml(0),
                ],
              ],
            ]) +
            " " +
            ((o && o.className != null && o.className) || l || ""),
        }),
        f.createElement(
          "div",
          {
            className:
              w.dynamic([
                [
                  "1153799566",
                  [
                    s.width(1.25),
                    s.height(1.25),
                    s.pt(0),
                    s.pr(0),
                    s.pb(0),
                    s.pl(0),
                    s.mt(0),
                    s.mr(0),
                    s.mb(0),
                    s.ml(0),
                  ],
                ],
              ]) + " container",
          },
          Wm(a)
        ),
        f.createElement(
          w,
          {
            id: "1153799566",
            dynamic: [
              s.width(1.25),
              s.height(1.25),
              s.pt(0),
              s.pr(0),
              s.pb(0),
              s.pl(0),
              s.mt(0),
              s.mr(0),
              s.mb(0),
              s.ml(0),
            ],
          },
          ".spinner.__jsx-style-dynamic-selector{display:block;box-sizing:border-box;width:"
            .concat(s.width(1.25), ";height:")
            .concat(s.height(1.25), ";padding:")
            .concat(s.pt(0), " ")
            .concat(s.pr(0), " ")
            .concat(s.pb(0), " ")
            .concat(s.pl(0), ";margin:")
            .concat(s.mt(0), " ")
            .concat(s.mr(0), " ")
            .concat(s.mb(0), " ")
            .concat(
              s.ml(0),
              ";}.container.__jsx-style-dynamic-selector{width:100%;height:100%;position:relative;left:50%;top:50%;}"
            )
        )
      );
    };
  qo.defaultProps = Dm;
  qo.displayName = "GeistSpinner";
  var Gm = Y(qo),
    ss = Gm;
  var $o = ss;
  j();
  j();
  var Hm = { inGroup: !1 },
    Xo = f.createContext(Hm),
    Jo = function () {
      return f.useContext(Xo);
    };
  j();
  j();
  var Vm = function (e) {
      var r = $(null);
      return (
        M(function () {
          r.current = e;
        }),
        r ? r.current : null
      );
    },
    ls = Vm;
  var Fm = [
      "rect",
      "visible",
      "hoverHeightRatio",
      "hoverWidthRatio",
      "activeOpacity",
      "className",
    ],
    Um = function (e) {
      var r = e.rect,
        o = e.visible,
        a = e.hoverHeightRatio,
        i = a === void 0 ? 1 : a,
        s = e.hoverWidthRatio,
        l = s === void 0 ? 1 : s,
        m = e.activeOpacity,
        c = m === void 0 ? 0.8 : m,
        n = e.className,
        d = F(e, Fm),
        u = H(),
        p = $(null),
        h = ls(xi(r)),
        _ = E(
          function () {
            var x = r.width * l,
              A = r.height * i;
            return {
              width: "".concat(x, "px"),
              left: "".concat(r.left + (r.width - x) / 2, "px"),
              height: "".concat(A, "px"),
              top: "".concat(r.elementTop + (r.height - A) / 2, "px"),
              transition: h ? "opacity" : "opacity, width, left, top",
            };
          },
          [r, l, i]
        );
      return f.createElement(
        "div",
        N({ ref: p }, d, {
          className:
            w.dynamic([
              [
                "603024321",
                [
                  u.palette.accents_2,
                  _.width,
                  _.left,
                  _.height,
                  _.top,
                  o ? c : 0,
                  _.transition,
                ],
              ],
            ]) +
            " " +
            ((d && d.className != null && d.className) ||
              V("highlight", n) ||
              ""),
        }),
        f.createElement(
          w,
          {
            id: "603024321",
            dynamic: [
              u.palette.accents_2,
              _.width,
              _.left,
              _.height,
              _.top,
              o ? c : 0,
              _.transition,
            ],
          },
          ".highlight.__jsx-style-dynamic-selector{background:"
            .concat(
              u.palette.accents_2,
              ";position:absolute;border-radius:5px;width:"
            )
            .concat(_.width, ";left:")
            .concat(_.left, ";height:")
            .concat(_.height, ";top:")
            .concat(_.top, ";opacity:")
            .concat(
              o ? c : 0,
              ";-webkit-transition:0.15s ease;transition:0.15s ease;-webkit-transition-property:"
            )
            .concat(_.transition, ";transition-property:")
            .concat(_.transition, ";}")
        )
      );
    },
    cs = Um;
  var qm = [
      "initialValue",
      "value",
      "hideDivider",
      "hideBorder",
      "children",
      "onChange",
      "className",
      "leftSpace",
      "highlight",
      "hoverHeightRatio",
      "hoverWidthRatio",
      "activeClassName",
      "activeStyle",
      "align",
    ],
    $m = {
      className: "",
      hideDivider: !1,
      highlight: !0,
      leftSpace: "12px",
      hoverHeightRatio: 0.7,
      hoverWidthRatio: 1.15,
      activeClassName: "",
      activeStyle: {},
      align: "left",
    },
    Ko = function (e) {
      var r = e.initialValue,
        o = e.value,
        a = e.hideDivider,
        i = e.hideBorder,
        s = e.children,
        l = e.onChange,
        m = e.className,
        c = e.leftSpace,
        n = e.highlight,
        d = e.hoverHeightRatio,
        u = e.hoverWidthRatio,
        p = e.activeClassName,
        h = e.activeStyle,
        _ = e.align,
        x = F(e, qm),
        A = H(),
        y = Q(),
        b = y.SCALES,
        v = B([]),
        k = W(v, 2),
        g = k[0],
        T = k[1],
        C = B(r),
        O = W(C, 2),
        S = O[0],
        R = O[1],
        P = $(null),
        D = B(!1),
        G = W(D, 2),
        J = G[0],
        ne = G[1],
        Z = yi(),
        se = Z.rect,
        le = Z.setRect,
        te = function (q) {
          T(function (X) {
            var he = X.find(function (U) {
              return U.value === q.value;
            });
            return he
              ? X.map(function (U) {
                  return U.value !== q.value ? U : N({}, U, q);
                })
              : [].concat(Ge(X), [q]);
          });
        },
        de = E(
          function () {
            return { register: te, currentValue: S, inGroup: !0, leftSpace: c };
          },
          [S, c]
        );
      M(
        function () {
          typeof o > "u" || R(o);
        },
        [o]
      );
      var I = function (q) {
          R(q), l && l(q);
        },
        ke = function (q) {
          ti(q.target) &&
            (le(q, function () {
              return P.current;
            }),
            n && ne(!0));
        };
      return f.createElement(
        Xo.Provider,
        { value: de },
        f.createElement(
          "div",
          N({}, x, {
            className:
              w.dynamic([
                [
                  "1340018565",
                  [
                    b.font(1),
                    b.width(1, "initial"),
                    b.height(1, "auto"),
                    b.pt(0),
                    b.pr(0),
                    b.pb(0),
                    b.pl(0),
                    b.mt(0),
                    b.mr(0),
                    b.mb(0),
                    b.ml(0),
                    _,
                    A.palette.border,
                    c,
                  ],
                ],
              ]) +
              " " +
              ((x && x.className != null && x.className) || V("tabs", m) || ""),
          }),
          f.createElement(
            "header",
            {
              ref: P,
              onMouseLeave: function () {
                return ne(!1);
              },
              className: w.dynamic([
                [
                  "1340018565",
                  [
                    b.font(1),
                    b.width(1, "initial"),
                    b.height(1, "auto"),
                    b.pt(0),
                    b.pr(0),
                    b.pb(0),
                    b.pl(0),
                    b.mt(0),
                    b.mr(0),
                    b.mb(0),
                    b.ml(0),
                    _,
                    A.palette.border,
                    c,
                  ],
                ],
              ]),
            },
            f.createElement(cs, {
              rect: se,
              visible: J,
              hoverHeightRatio: d,
              hoverWidthRatio: u,
            }),
            f.createElement(
              "div",
              {
                className:
                  w.dynamic([
                    [
                      "1340018565",
                      [
                        b.font(1),
                        b.width(1, "initial"),
                        b.height(1, "auto"),
                        b.pt(0),
                        b.pr(0),
                        b.pb(0),
                        b.pl(0),
                        b.mt(0),
                        b.mr(0),
                        b.mb(0),
                        b.ml(0),
                        _,
                        A.palette.border,
                        c,
                      ],
                    ],
                  ]) +
                  " " +
                  (V("scroll-container", { "hide-divider": a }) || ""),
              },
              g.map(function (K) {
                var q = K.cell,
                  X = K.value;
                return f.createElement(q, {
                  key: X,
                  onClick: I,
                  onMouseOver: ke,
                  activeClassName: p,
                  activeStyle: h,
                  hideBorder: i,
                  className: w.dynamic([
                    [
                      "1340018565",
                      [
                        b.font(1),
                        b.width(1, "initial"),
                        b.height(1, "auto"),
                        b.pt(0),
                        b.pr(0),
                        b.pb(0),
                        b.pl(0),
                        b.mt(0),
                        b.mr(0),
                        b.mb(0),
                        b.ml(0),
                        _,
                        A.palette.border,
                        c,
                      ],
                    ],
                  ]),
                });
              })
            )
          ),
          f.createElement(
            "div",
            {
              className:
                w.dynamic([
                  [
                    "1340018565",
                    [
                      b.font(1),
                      b.width(1, "initial"),
                      b.height(1, "auto"),
                      b.pt(0),
                      b.pr(0),
                      b.pb(0),
                      b.pl(0),
                      b.mt(0),
                      b.mr(0),
                      b.mb(0),
                      b.ml(0),
                      _,
                      A.palette.border,
                      c,
                    ],
                  ],
                ]) + " content",
            },
            s
          ),
          f.createElement(
            w,
            {
              id: "1340018565",
              dynamic: [
                b.font(1),
                b.width(1, "initial"),
                b.height(1, "auto"),
                b.pt(0),
                b.pr(0),
                b.pb(0),
                b.pl(0),
                b.mt(0),
                b.mr(0),
                b.mb(0),
                b.ml(0),
                _,
                A.palette.border,
                c,
              ],
            },
            ".tabs.__jsx-style-dynamic-selector{font-size:"
              .concat(b.font(1), ";width:")
              .concat(b.width(1, "initial"), ";height:")
              .concat(b.height(1, "auto"), ";padding:")
              .concat(b.pt(0), " ")
              .concat(b.pr(0), " ")
              .concat(b.pb(0), " ")
              .concat(b.pl(0), ";margin:")
              .concat(b.mt(0), " ")
              .concat(b.mr(0), " ")
              .concat(b.mb(0), " ")
              .concat(
                b.ml(0),
                ";}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;overflow-x:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;position:relative;}.scroll-container.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:"
              )
              .concat(_, ";-webkit-justify-content:")
              .concat(_, ";-ms-flex-pack:")
              .concat(_, ";justify-content:")
              .concat(_, ";border-bottom:1px solid ")
              .concat(A.palette.border, ";padding-left:")
              .concat(
                c,
                ";}header.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.hide-divider.__jsx-style-dynamic-selector{border-color:transparent;}.content.__jsx-style-dynamic-selector{padding-top:0.625rem;}"
              )
          )
        )
      );
    };
  Ko.defaultProps = $m;
  Ko.displayName = "GeistTabs";
  var Xm = Y(Ko),
    _r = Xm;
  function Yo(t, e) {
    if (Ee(t) !== "object" || t === null) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var o = r.call(t, e || "default");
      if (Ee(o) !== "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  function Zo(t) {
    var e = Yo(t, "string");
    return Ee(e) === "symbol" ? e : String(e);
  }
  function wr(t, e, r) {
    return (
      (e = Zo(e)),
      e in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  j();
  var Jm = { disabled: !1 },
    Qo = function (e) {
      var r = e.children,
        o = e.value,
        a = e.label,
        i = e.disabled,
        s = Q(),
        l = s.SCALES,
        m = Jo(),
        c = m.register,
        n = m.currentValue,
        d = E(
          function () {
            return n === o;
          },
          [n, o]
        ),
        u = function (h) {
          var _,
            x = h.onClick,
            A = h.onMouseOver,
            y = h.activeClassName,
            b = h.activeStyle,
            v = h.hideBorder,
            k = H(),
            g = $(null),
            T = Jo(),
            C = T.currentValue,
            O = C === o,
            S = V(
              "tab",
              ((_ = { active: O, disabled: i }),
              wr(_, y, O),
              wr(_, "hide-border", v),
              _)
            ),
            R = function () {
              i || (x && x(o));
            };
          return f.createElement(
            "div",
            {
              ref: g,
              role: "button",
              key: o,
              onMouseOver: A,
              onClick: R,
              style: O ? b : {},
              "data-geist": "tab-item",
              className:
                w.dynamic([
                  [
                    "2444688710",
                    [
                      k.palette.accents_5,
                      l.font(0.875),
                      l.width(1, "auto"),
                      l.height(1, "auto"),
                      l.pt(0.875),
                      l.pr(0.55),
                      l.pb(0.875),
                      l.pl(0.55),
                      l.mt(0),
                      l.mr(0.2),
                      l.mb(0),
                      l.ml(0.2),
                      l.pl(0.28),
                      l.pr(0.28),
                      k.palette.foreground,
                      k.palette.foreground,
                      k.palette.foreground,
                      k.palette.accents_3,
                      a,
                    ],
                  ],
                ]) +
                " " +
                (S || ""),
            },
            a,
            f.createElement(
              w,
              {
                id: "2444688710",
                dynamic: [
                  k.palette.accents_5,
                  l.font(0.875),
                  l.width(1, "auto"),
                  l.height(1, "auto"),
                  l.pt(0.875),
                  l.pr(0.55),
                  l.pb(0.875),
                  l.pl(0.55),
                  l.mt(0),
                  l.mr(0.2),
                  l.mb(0),
                  l.ml(0.2),
                  l.pl(0.28),
                  l.pr(0.28),
                  k.palette.foreground,
                  k.palette.foreground,
                  k.palette.foreground,
                  k.palette.accents_3,
                  a,
                ],
              },
              ".tab.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;cursor:pointer;outline:0;text-transform:capitalize;white-space:nowrap;background-color:transparent;color:"
                .concat(
                  k.palette.accents_5,
                  ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:"
                )
                .concat(l.font(0.875), ";line-height:normal;width:")
                .concat(l.width(1, "auto"), ";height:")
                .concat(l.height(1, "auto"), ";padding:")
                .concat(l.pt(0.875), " ")
                .concat(l.pr(0.55), " ")
                .concat(l.pb(0.875), " ")
                .concat(l.pl(0.55), ";margin:")
                .concat(l.mt(0), " ")
                .concat(l.mr(0.2), " ")
                .concat(l.mb(0), " ")
                .concat(
                  l.ml(0.2),
                  ";z-index:1;--tabs-item-hover-left:calc(-1 * "
                )
                .concat(l.pl(0.28), ");--tabs-item-hover-right:calc(-1 * ")
                .concat(
                  l.pr(0.28),
                  ");}.tab.__jsx-style-dynamic-selector:hover{color:"
                )
                .concat(
                  k.palette.foreground,
                  ";}.tab.__jsx-style-dynamic-selector:after{position:absolute;content:'';bottom:-1px;left:0;right:0;width:100%;height:2px;border-radius:4px;-webkit-transform:scaleX(0.75);-ms-transform:scaleX(0.75);transform:scaleX(0.75);background-color:"
                )
                .concat(
                  k.palette.foreground,
                  ";-webkit-transition:opacity,-webkit-transform 200ms ease-in;-webkit-transition:opacity,transform 200ms ease-in;transition:opacity,transform 200ms ease-in;opacity:0;}.active.__jsx-style-dynamic-selector:after{opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.tab.__jsx-style-dynamic-selector svg{max-height:1em;margin-right:5px;}.tab.__jsx-style-dynamic-selector:first-of-type{margin-left:0;}.active.__jsx-style-dynamic-selector{color:"
                )
                .concat(
                  k.palette.foreground,
                  ";}.disabled.__jsx-style-dynamic-selector{color:"
                )
                .concat(
                  k.palette.accents_3,
                  ";cursor:not-allowed;}.hide-border.__jsx-style-dynamic-selector:before{display:block;content:"
                )
                .concat(
                  a,
                  ";font-weight:500;height:0;overflow:hidden;visibility:hidden;}.hide-border.__jsx-style-dynamic-selector:after{display:none;}.hide-border.active.__jsx-style-dynamic-selector{font-weight:500;}"
                )
            )
          );
        };
      return (
        (u.displayName = "GeistTabsInternalCell"),
        M(
          function () {
            c && c({ value: o, cell: u });
          },
          [o, a, i]
        ),
        d ? f.createElement(f.Fragment, null, r) : null
      );
    };
  Qo.defaultProps = Jm;
  Qo.displayName = "GeistTabsItem";
  var Km = Y(Qo),
    ea = Km;
  _r.Item = ea;
  _r.Tab = ea;
  var Lt = _r;
  j();
  j();
  var Ym = ["children", "tag", "className", "type"],
    Zm = { type: "default", className: "" },
    Qm = function (e, r) {
      var o = {
        default: "inherit",
        secondary: r.secondary,
        success: r.success,
        warning: r.warning,
        error: r.error,
      };
      return o[e] || o.default;
    },
    ta = function (e) {
      var r = e.children,
        o = e.tag,
        a = e.className,
        i = e.type,
        s = F(e, Ym),
        l = o,
        m = H(),
        c = Q(),
        n = c.SCALES,
        d = c.getScaleProps,
        u = d("font"),
        p = d(["margin", "marginLeft", "marginRight", "mx", "ml", "mr"]),
        h = d(["margin", "marginTop", "marginBottom", "my", "mt", "mb"]),
        _ = d(["padding", "paddingLeft", "paddingRight", "pl", "pr", "px"]),
        x = d(["padding", "paddingTop", "paddingBottom", "pt", "pb", "py"]),
        A = E(
          function () {
            return Qm(i, m.palette);
          },
          [i, m.palette]
        ),
        y = E(
          function () {
            var b = [
                { value: p, className: "mx" },
                { value: h, className: "my" },
                { value: _, className: "px" },
                { value: x, className: "py" },
                { value: u, className: "font" },
              ],
              v = b.reduce(function (k, g) {
                return typeof g.value > "u"
                  ? k
                  : "".concat(k, " ").concat(g.className);
              }, "");
            return "".concat(v, " ").concat(a).trim();
          },
          [p, h, _, x, u, a]
        );
      return f.createElement(
        l,
        N({}, s, {
          className:
            w.dynamic([
              [
                "3155699851",
                [
                  o,
                  A,
                  n.width(1, "auto"),
                  n.height(1, "auto"),
                  n.font(1, "inherit"),
                  n.ml(0, "revert"),
                  n.mr(0, "revert"),
                  n.mt(0, "revert"),
                  n.mb(0, "revert"),
                  n.pl(0, "revert"),
                  n.pr(0, "revert"),
                  n.pt(0, "revert"),
                  n.pb(0, "revert"),
                ],
              ],
            ]) +
            " " +
            ((s && s.className != null && s.className) || y || ""),
        }),
        r,
        f.createElement(
          w,
          {
            id: "3155699851",
            dynamic: [
              o,
              A,
              n.width(1, "auto"),
              n.height(1, "auto"),
              n.font(1, "inherit"),
              n.ml(0, "revert"),
              n.mr(0, "revert"),
              n.mt(0, "revert"),
              n.mb(0, "revert"),
              n.pl(0, "revert"),
              n.pr(0, "revert"),
              n.pt(0, "revert"),
              n.pb(0, "revert"),
            ],
          },
          ""
            .concat(o, ".__jsx-style-dynamic-selector{color:")
            .concat(A, ";width:")
            .concat(n.width(1, "auto"), ";height:")
            .concat(
              n.height(1, "auto"),
              ";}.font.__jsx-style-dynamic-selector{font-size:"
            )
            .concat(
              n.font(1, "inherit"),
              ";}.mx.__jsx-style-dynamic-selector{margin-left:"
            )
            .concat(n.ml(0, "revert"), ";margin-right:")
            .concat(
              n.mr(0, "revert"),
              ";}.my.__jsx-style-dynamic-selector{margin-top:"
            )
            .concat(n.mt(0, "revert"), ";margin-bottom:")
            .concat(
              n.mb(0, "revert"),
              ";}.px.__jsx-style-dynamic-selector{padding-left:"
            )
            .concat(n.pl(0, "revert"), ";padding-right:")
            .concat(
              n.pr(0, "revert"),
              ";}.py.__jsx-style-dynamic-selector{padding-top:"
            )
            .concat(n.pt(0, "revert"), ";padding-bottom:")
            .concat(n.pb(0, "revert"), ";}")
        )
      );
    };
  ta.defaultProps = Zm;
  ta.displayName = "GeistTextChild";
  var ra = ta;
  var ed = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "b",
      "small",
      "i",
      "span",
      "del",
      "em",
      "blockquote",
      "children",
      "className",
    ],
    td = {
      h1: !1,
      h2: !1,
      h3: !1,
      h4: !1,
      h5: !1,
      h6: !1,
      p: !1,
      b: !1,
      small: !1,
      i: !1,
      span: !1,
      del: !1,
      em: !1,
      blockquote: !1,
      className: "",
      type: "default",
    },
    rd = function t(e, r) {
      if (!e.length) return r;
      var o = e.slice(1, e.length);
      return f.createElement(ra, { tag: e[0] }, t(o, r));
    },
    oa = function (e) {
      var r = e.h1,
        o = e.h2,
        a = e.h3,
        i = e.h4,
        s = e.h5,
        l = e.h6,
        m = e.p,
        c = e.b,
        n = e.small,
        d = e.i,
        u = e.span,
        p = e.del,
        h = e.em,
        _ = e.blockquote,
        x = e.children,
        A = e.className,
        y = F(e, ed),
        b = { h1: r, h2: o, h3: a, h4: i, h5: s, h6: l, p: m, blockquote: _ },
        v = { span: u, small: n, b: c, em: h, i: d, del: p },
        k = Object.keys(b).filter(function (S) {
          return b[S];
        }),
        g = Object.keys(v).filter(function (S) {
          return v[S];
        }),
        T = E(
          function () {
            return k[0] ? k[0] : g[0] ? g[0] : "p";
          },
          [k, g]
        ),
        C = g.filter(function (S) {
          return S !== T;
        }),
        O = E(
          function () {
            return C.length ? rd(C, x) : x;
          },
          [C, x]
        );
      return f.createElement(ra, N({ className: A, tag: T }, y), O);
    };
  oa.defaultProps = td;
  oa.displayName = "GeistText";
  var od = Y(oa),
    us = od;
  var Oe = us;
  j();
  var ms = function (e, r) {
    var o = {
      default: { bg: e.success },
      secondary: { bg: e.secondary },
      success: { bg: e.success },
      warning: { bg: e.warning },
      error: { bg: e.error },
    };
    return r ? o[r] : o.default;
  };
  var ad = [
      "initialChecked",
      "checked",
      "disabled",
      "onChange",
      "type",
      "className",
    ],
    nd = { type: "default", disabled: !1, initialChecked: !1, className: "" },
    aa = function (e) {
      var r = e.initialChecked,
        o = e.checked,
        a = e.disabled,
        i = e.onChange,
        s = e.type,
        l = e.className,
        m = F(e, ad),
        c = H(),
        n = Q(),
        d = n.SCALES,
        u = B(r),
        p = W(u, 2),
        h = p[0],
        _ = p[1],
        x = V("toggle", { checked: h, disabled: a }),
        A = Se(
          function (v) {
            if (!a) {
              var k = {
                target: { checked: !h },
                stopPropagation: v.stopPropagation,
                preventDefault: v.preventDefault,
                nativeEvent: v,
              };
              _(!h), i && i(k);
            }
          },
          [a, h, i]
        ),
        y = E(
          function () {
            return ms(c.palette, s);
          },
          [c.palette, s]
        ),
        b = y.bg;
      return (
        M(
          function () {
            o !== void 0 && _(o);
          },
          [o]
        ),
        f.createElement(
          "label",
          N({}, m, {
            className:
              w.dynamic([
                [
                  "4106206985",
                  [
                    a ? "not-allowed" : "pointer",
                    d.font(1),
                    d.height(0.875),
                    d.width(1.75),
                    d.pt(0.1875),
                    d.pr(0),
                    d.pb(0.1875),
                    d.pl(0),
                    d.mt(0),
                    d.mr(0),
                    d.mb(0),
                    d.ml(0),
                    c.palette.accents_2,
                    c.palette.background,
                    c.palette.accents_2,
                    c.palette.accents_1,
                    c.palette.accents_2,
                    c.palette.accents_4,
                    c.palette.accents_4,
                    b,
                  ],
                ],
              ]) +
              " " +
              ((m && m.className != null && m.className) || l || ""),
          }),
          f.createElement("input", {
            type: "checkbox",
            disabled: a,
            checked: h,
            onChange: A,
            className: w.dynamic([
              [
                "4106206985",
                [
                  a ? "not-allowed" : "pointer",
                  d.font(1),
                  d.height(0.875),
                  d.width(1.75),
                  d.pt(0.1875),
                  d.pr(0),
                  d.pb(0.1875),
                  d.pl(0),
                  d.mt(0),
                  d.mr(0),
                  d.mb(0),
                  d.ml(0),
                  c.palette.accents_2,
                  c.palette.background,
                  c.palette.accents_2,
                  c.palette.accents_1,
                  c.palette.accents_2,
                  c.palette.accents_4,
                  c.palette.accents_4,
                  b,
                ],
              ],
            ]),
          }),
          f.createElement(
            "div",
            {
              className:
                w.dynamic([
                  [
                    "4106206985",
                    [
                      a ? "not-allowed" : "pointer",
                      d.font(1),
                      d.height(0.875),
                      d.width(1.75),
                      d.pt(0.1875),
                      d.pr(0),
                      d.pb(0.1875),
                      d.pl(0),
                      d.mt(0),
                      d.mr(0),
                      d.mb(0),
                      d.ml(0),
                      c.palette.accents_2,
                      c.palette.background,
                      c.palette.accents_2,
                      c.palette.accents_1,
                      c.palette.accents_2,
                      c.palette.accents_4,
                      c.palette.accents_4,
                      b,
                    ],
                  ],
                ]) +
                " " +
                (x || ""),
            },
            f.createElement("span", {
              className:
                w.dynamic([
                  [
                    "4106206985",
                    [
                      a ? "not-allowed" : "pointer",
                      d.font(1),
                      d.height(0.875),
                      d.width(1.75),
                      d.pt(0.1875),
                      d.pr(0),
                      d.pb(0.1875),
                      d.pl(0),
                      d.mt(0),
                      d.mr(0),
                      d.mb(0),
                      d.ml(0),
                      c.palette.accents_2,
                      c.palette.background,
                      c.palette.accents_2,
                      c.palette.accents_1,
                      c.palette.accents_2,
                      c.palette.accents_4,
                      c.palette.accents_4,
                      b,
                    ],
                  ],
                ]) + " inner",
            })
          ),
          f.createElement(
            w,
            {
              id: "4106206985",
              dynamic: [
                a ? "not-allowed" : "pointer",
                d.font(1),
                d.height(0.875),
                d.width(1.75),
                d.pt(0.1875),
                d.pr(0),
                d.pb(0.1875),
                d.pl(0),
                d.mt(0),
                d.mr(0),
                d.mb(0),
                d.ml(0),
                c.palette.accents_2,
                c.palette.background,
                c.palette.accents_2,
                c.palette.accents_1,
                c.palette.accents_2,
                c.palette.accents_4,
                c.palette.accents_4,
                b,
              ],
            },
            "label.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:transparent;display:inline-block;vertical-align:middle;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:"
              .concat(a ? "not-allowed" : "pointer", ";--toggle-font-size:")
              .concat(d.font(1), ";--toggle-height:")
              .concat(d.height(0.875), ";width:")
              .concat(d.width(1.75), ";height:var(--toggle-height);padding:")
              .concat(d.pt(0.1875), " ")
              .concat(d.pr(0), " ")
              .concat(d.pb(0.1875), " ")
              .concat(d.pl(0), ";margin:")
              .concat(d.mt(0), " ")
              .concat(d.mr(0), " ")
              .concat(d.mb(0), " ")
              .concat(
                d.ml(0),
                ";}input.__jsx-style-dynamic-selector{overflow:hidden;visibility:hidden;height:0;opacity:0;width:0;position:absolute;background-color:transparent;z-index:-1;}.toggle.__jsx-style-dynamic-selector{height:var(--toggle-height);width:100%;border-radius:var(--toggle-height);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-property:background,border;transition-property:background,border;-webkit-transition-timing-function:cubic-bezier(0,0,0.2,1);transition-timing-function:cubic-bezier(0,0,0.2,1);position:relative;border:1px solid transparent;background-color:"
              )
              .concat(
                c.palette.accents_2,
                ";padding:0;}.inner.__jsx-style-dynamic-selector{width:calc(var(--toggle-height) - 2px);height:calc(var(--toggle-height) - 2px);position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:1px;box-shadow:rgba(0,0,0,0.2) 0 1px 2px 0,rgba(0,0,0,0.1) 0 1px 3px 0;-webkit-transition:left 280ms cubic-bezier(0,0,0.2,1);transition:left 280ms cubic-bezier(0,0,0.2,1);border-radius:50%;background-color:"
              )
              .concat(
                c.palette.background,
                ";}.disabled.__jsx-style-dynamic-selector{border-color:"
              )
              .concat(c.palette.accents_2, ";background-color:")
              .concat(
                c.palette.accents_1,
                ";}.disabled.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{background-color:"
              )
              .concat(
                c.palette.accents_2,
                ";}.disabled.checked.__jsx-style-dynamic-selector{border-color:"
              )
              .concat(c.palette.accents_4, ";background-color:")
              .concat(
                c.palette.accents_4,
                ";}.checked.__jsx-style-dynamic-selector{background-color:"
              )
              .concat(
                b,
                ";}.checked.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{left:calc(100% - (var(--toggle-height) - 2px));box-shadow:none;}"
              )
          )
        )
      );
    };
  aa.defaultProps = nd;
  aa.displayName = "GeistToggle";
  var id = Y(aa),
    ds = id;
  var na = ds;
  var sd = function (e) {
      var r = We(e),
        o = W(r, 3),
        a = o[0],
        i = o[1],
        s = o[2];
      return {
        state: a,
        setState: i,
        currentRef: s,
        reset: function () {
          return i(e);
        },
        bindings: {
          value: a,
          onChange: function (m) {
            Ee(m) === "object" && m.target ? i(m.target.value) : i(m);
          },
        },
      };
    },
    fs = sd;
  var ia = fs;
  j();
  var { flushToHTML: ps } = tr;
  var gs = tr;
  var ld = function (e) {
      var r = e.children,
        o = H();
      return f.createElement(
        f.Fragment,
        null,
        r,
        f.createElement(
          w,
          {
            id: "1357910706",
            dynamic: [
              o.palette.background,
              o.palette.foreground,
              o.palette.background,
              o.font.sans,
              o.font.sans,
              o.palette.link,
              o.expressiveness.linkStyle,
              o.expressiveness.linkHoverStyle,
              o.layout.gapHalf,
              o.layout.gapHalf,
              o.layout.gapHalf,
              o.layout.gap,
              o.palette.foreground,
              o.palette.accents_4,
              o.palette.code,
              o.font.mono,
              o.layout.gap,
              o.layout.gap,
              o.layout.gap,
              o.palette.accents_2,
              o.layout.radius,
              o.font.mono,
              o.palette.foreground,
              o.palette.accents_2,
              o.palette.accents_1,
              o.layout.gap,
              o.layout.gap,
              o.palette.accents_5,
              o.palette.accents_1,
              o.layout.radius,
              o.palette.border,
              o.palette.selection,
              o.palette.foreground,
            ],
          },
          "html,body{background-color:"
            .concat(o.palette.background, ";color:")
            .concat(
              o.palette.foreground,
              ";}html{font-size:16px;--geist-icons-background:"
            )
            .concat(
              o.palette.background,
              ";}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.5;margin:0;padding:0;min-height:100%;position:relative;overflow-x:hidden;font-family:"
            )
            .concat(
              o.font.sans,
              ";}#__next{overflow-x:hidden;}*,*:before,*:after{box-sizing:inherit;text-rendering:geometricPrecision;-webkit-tap-highlight-color:transparent;}p,small{font-weight:400;color:inherit;-webkit-letter-spacing:-0.005625em;-moz-letter-spacing:-0.005625em;-ms-letter-spacing:-0.005625em;letter-spacing:-0.005625em;font-family:"
            )
            .concat(
              o.font.sans,
              ";}p{margin:1em 0;font-size:1em;line-height:1.625em;}small{margin:0;line-height:1.5;font-size:0.875em;}b{font-weight:600;}span{font-size:inherit;color:inherit;font-weight:inherit;}img{max-width:100%;}a{cursor:pointer;font-size:inherit;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:"
            )
            .concat(o.palette.link, ";-webkit-text-decoration:")
            .concat(o.expressiveness.linkStyle, ";text-decoration:")
            .concat(
              o.expressiveness.linkStyle,
              ";}a:hover{-webkit-text-decoration:"
            )
            .concat(o.expressiveness.linkHoverStyle, ";text-decoration:")
            .concat(
              o.expressiveness.linkHoverStyle,
              ";}ul,ol{padding:0;list-style-type:none;margin:"
            )
            .concat(o.layout.gapHalf, " ")
            .concat(o.layout.gapHalf, " ")
            .concat(o.layout.gapHalf, " ")
            .concat(o.layout.gap, ";color:")
            .concat(
              o.palette.foreground,
              ";}ol{list-style-type:decimal;}li{margin-bottom:0.625em;font-size:1em;line-height:1.625em;}ul li:before{content:'\u2013';display:inline-block;color:"
            )
            .concat(
              o.palette.accents_4,
              ";position:absolute;margin-left:-0.9375em;}h1,h2,h3,h4,h5,h6{color:inherit;margin:0 0 0.7rem 0;}h1{font-size:3rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;line-height:1.5;font-weight:700;}h2{font-size:2.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h3{font-size:1.5rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h4{font-size:1.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h5{font-size:1rem;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;font-weight:600;}h6{font-size:0.875rem;-webkit-letter-spacing:-0.005em;-moz-letter-spacing:-0.005em;-ms-letter-spacing:-0.005em;letter-spacing:-0.005em;font-weight:600;}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;margin:0;}button:focus,input:focus,select:focus,textarea:focus{outline:none;}code{color:"
            )
            .concat(o.palette.code, ";font-family:")
            .concat(
              o.font.mono,
              ";font-size:0.9em;white-space:pre-wrap;}code:before,code:after{content:'\\`';}pre{padding:calc("
            )
            .concat(o.layout.gap, " * 0.9) ")
            .concat(o.layout.gap, ";margin:")
            .concat(o.layout.gap, " 0;border:1px solid ")
            .concat(o.palette.accents_2, ";border-radius:")
            .concat(o.layout.radius, ";font-family:")
            .concat(
              o.font.mono,
              ";white-space:pre;overflow:auto;line-height:1.5;text-align:left;font-size:14px;-webkit-overflow-scrolling:touch;}pre code{color:"
            )
            .concat(
              o.palette.foreground,
              ";font-size:1em;line-height:1.25em;white-space:pre;}pre code:before,pre code:after{display:none;}pre p{margin:0;}pre::-webkit-scrollbar{display:none;width:0;height:0;background:transparent;}hr{border-color:"
            )
            .concat(o.palette.accents_2, ";}details{background-color:")
            .concat(
              o.palette.accents_1,
              ";border:none;}details:focus,details:hover,details:active{outline:none;}summary{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;list-style:none;outline:none;}summary::marker,summary::before,summary::-webkit-details-marker{display:none;}summary::-moz-list-bullet{font-size:0;}summary:focus,summary:hover,summary:active{outline:none;list-style:none;}blockquote{padding:calc(0.667 * "
            )
            .concat(o.layout.gap, ") ")
            .concat(o.layout.gap, ";color:")
            .concat(o.palette.accents_5, ";background-color:")
            .concat(o.palette.accents_1, ";border-radius:")
            .concat(o.layout.radius, ";margin:1.5em 0;border:1px solid ")
            .concat(
              o.palette.border,
              ";}blockquote *:first-child{margin-top:0;}blockquote *:last-child{margin-bottom:0;}::selection{background-color:"
            )
            .concat(o.palette.selection, ";color:")
            .concat(o.palette.foreground, ";}")
        )
      );
    },
    sa = f.memo(ld);
  sa.flush = gs;
  sa.flushToHTML = ps;
  var Sr = sa;
  var cd =
      typeof global == "object" && global && global.Object === Object && global,
    kr = cd;
  var ud = typeof self == "object" && self && self.Object === Object && self,
    md = kr || ud || Function("return this")(),
    pt = md;
  var dd = pt.Symbol,
    He = dd;
  var hs = Object.prototype,
    fd = hs.hasOwnProperty,
    pd = hs.toString,
    Ot = He ? He.toStringTag : void 0;
  function gd(t) {
    var e = fd.call(t, Ot),
      r = t[Ot];
    try {
      t[Ot] = void 0;
      var o = !0;
    } catch {}
    var a = pd.call(t);
    return o && (e ? (t[Ot] = r) : delete t[Ot]), a;
  }
  var bs = gd;
  var hd = Object.prototype,
    bd = hd.toString;
  function vd(t) {
    return bd.call(t);
  }
  var vs = vd;
  var xd = "[object Null]",
    yd = "[object Undefined]",
    xs = He ? He.toStringTag : void 0;
  function _d(t) {
    return t == null
      ? t === void 0
        ? yd
        : xd
      : xs && xs in Object(t)
      ? bs(t)
      : vs(t);
  }
  var qe = _d;
  function wd(t) {
    return t != null && typeof t == "object";
  }
  var $e = wd;
  var Sd = "[object Symbol]";
  function kd(t) {
    return typeof t == "symbol" || ($e(t) && qe(t) == Sd);
  }
  var ys = kd;
  function Cd(t, e) {
    for (var r = -1, o = t == null ? 0 : t.length, a = Array(o); ++r < o; )
      a[r] = e(t[r], r, t);
    return a;
  }
  var _s = Cd;
  var Ad = Array.isArray,
    Cr = Ad;
  var Td = 1 / 0,
    ws = He ? He.prototype : void 0,
    Ss = ws ? ws.toString : void 0;
  function ks(t) {
    if (typeof t == "string") return t;
    if (Cr(t)) return _s(t, ks) + "";
    if (ys(t)) return Ss ? Ss.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -Td ? "-0" : e;
  }
  var Cs = ks;
  function Ed(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  var Xe = Ed;
  function Rd(t) {
    return t;
  }
  var Ar = Rd;
  var Nd = "[object AsyncFunction]",
    Pd = "[object Function]",
    jd = "[object GeneratorFunction]",
    Id = "[object Proxy]";
  function Ld(t) {
    if (!Xe(t)) return !1;
    var e = qe(t);
    return e == Pd || e == jd || e == Nd || e == Id;
  }
  var Tr = Ld;
  var Od = pt["__core-js_shared__"],
    Er = Od;
  var As = (function () {
    var t = /[^.]+$/.exec((Er && Er.keys && Er.keys.IE_PROTO) || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function Bd(t) {
    return !!As && As in t;
  }
  var Ts = Bd;
  var Md = Function.prototype,
    zd = Md.toString;
  function Dd(t) {
    if (t != null) {
      try {
        return zd.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var Es = Dd;
  var Wd = /[\\^$.*+?()[\]{}|]/g,
    Gd = /^\[object .+?Constructor\]$/,
    Hd = Function.prototype,
    Vd = Object.prototype,
    Fd = Hd.toString,
    Ud = Vd.hasOwnProperty,
    qd = RegExp(
      "^" +
        Fd.call(Ud)
          .replace(Wd, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function $d(t) {
    if (!Xe(t) || Ts(t)) return !1;
    var e = Tr(t) ? qd : Gd;
    return e.test(Es(t));
  }
  var Rs = $d;
  function Xd(t, e) {
    return t?.[e];
  }
  var Ns = Xd;
  function Jd(t, e) {
    var r = Ns(t, e);
    return Rs(r) ? r : void 0;
  }
  var Ps = Jd;
  function Kd(t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  }
  var js = Kd;
  var Yd = 800,
    Zd = 16,
    Qd = Date.now;
  function ef(t) {
    var e = 0,
      r = 0;
    return function () {
      var o = Qd(),
        a = Zd - (o - r);
      if (((r = o), a > 0)) {
        if (++e >= Yd) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  var Is = ef;
  function tf(t) {
    return function () {
      return t;
    };
  }
  var Ls = tf;
  var rf = (function () {
      try {
        var t = Ps(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    la = rf;
  var of = la
      ? function (t, e) {
          return la(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ls(e),
            writable: !0,
          });
        }
      : Ar,
    Os = of;
  var af = Is(Os),
    Bs = af;
  var nf = 9007199254740991,
    sf = /^(?:0|[1-9]\d*)$/;
  function lf(t, e) {
    var r = typeof t;
    return (
      (e = e ?? nf),
      !!e &&
        (r == "number" || (r != "symbol" && sf.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
    );
  }
  var Rr = lf;
  function cf(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var Nr = cf;
  var Ms = Math.max;
  function uf(t, e, r) {
    return (
      (e = Ms(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (
          var o = arguments, a = -1, i = Ms(o.length - e, 0), s = Array(i);
          ++a < i;

        )
          s[a] = o[e + a];
        a = -1;
        for (var l = Array(e + 1); ++a < e; ) l[a] = o[a];
        return (l[e] = r(s)), js(t, this, l);
      }
    );
  }
  var zs = uf;
  function mf(t, e) {
    return Bs(zs(t, e, Ar), t + "");
  }
  var Ds = mf;
  var df = 9007199254740991;
  function ff(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= df;
  }
  var Pr = ff;
  function pf(t) {
    return t != null && Pr(t.length) && !Tr(t);
  }
  var jr = pf;
  function gf(t, e, r) {
    if (!Xe(r)) return !1;
    var o = typeof e;
    return (o == "number" ? jr(r) && Rr(e, r.length) : o == "string" && e in r)
      ? Nr(r[e], t)
      : !1;
  }
  var Ws = gf;
  var hf = Object.prototype;
  function bf(t) {
    var e = t && t.constructor,
      r = (typeof e == "function" && e.prototype) || hf;
    return t === r;
  }
  var Gs = bf;
  function vf(t, e) {
    for (var r = -1, o = Array(t); ++r < t; ) o[r] = e(r);
    return o;
  }
  var Hs = vf;
  var xf = "[object Arguments]";
  function yf(t) {
    return $e(t) && qe(t) == xf;
  }
  var ca = yf;
  var Vs = Object.prototype,
    _f = Vs.hasOwnProperty,
    wf = Vs.propertyIsEnumerable,
    Sf = ca(
      (function () {
        return arguments;
      })()
    )
      ? ca
      : function (t) {
          return $e(t) && _f.call(t, "callee") && !wf.call(t, "callee");
        },
    Fs = Sf;
  function kf() {
    return !1;
  }
  var Us = kf;
  var Xs =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    qs =
      Xs && typeof module == "object" && module && !module.nodeType && module,
    Cf = qs && qs.exports === Xs,
    $s = Cf ? pt.Buffer : void 0,
    Af = $s ? $s.isBuffer : void 0,
    Tf = Af || Us,
    Js = Tf;
  var Ef = "[object Arguments]",
    Rf = "[object Array]",
    Nf = "[object Boolean]",
    Pf = "[object Date]",
    jf = "[object Error]",
    If = "[object Function]",
    Lf = "[object Map]",
    Of = "[object Number]",
    Bf = "[object Object]",
    Mf = "[object RegExp]",
    zf = "[object Set]",
    Df = "[object String]",
    Wf = "[object WeakMap]",
    Gf = "[object ArrayBuffer]",
    Hf = "[object DataView]",
    Vf = "[object Float32Array]",
    Ff = "[object Float64Array]",
    Uf = "[object Int8Array]",
    qf = "[object Int16Array]",
    $f = "[object Int32Array]",
    Xf = "[object Uint8Array]",
    Jf = "[object Uint8ClampedArray]",
    Kf = "[object Uint16Array]",
    Yf = "[object Uint32Array]",
    ue = {};
  ue[Vf] =
    ue[Ff] =
    ue[Uf] =
    ue[qf] =
    ue[$f] =
    ue[Xf] =
    ue[Jf] =
    ue[Kf] =
    ue[Yf] =
      !0;
  ue[Ef] =
    ue[Rf] =
    ue[Gf] =
    ue[Nf] =
    ue[Hf] =
    ue[Pf] =
    ue[jf] =
    ue[If] =
    ue[Lf] =
    ue[Of] =
    ue[Bf] =
    ue[Mf] =
    ue[zf] =
    ue[Df] =
    ue[Wf] =
      !1;
  function Zf(t) {
    return $e(t) && Pr(t.length) && !!ue[qe(t)];
  }
  var Ks = Zf;
  function Qf(t) {
    return function (e) {
      return t(e);
    };
  }
  var Ys = Qf;
  var Zs =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    Bt =
      Zs && typeof module == "object" && module && !module.nodeType && module,
    ep = Bt && Bt.exports === Zs,
    ua = ep && kr.process,
    tp = (function () {
      try {
        var t = Bt && Bt.require && Bt.require("util").types;
        return t || (ua && ua.binding && ua.binding("util"));
      } catch {}
    })(),
    ma = tp;
  var Qs = ma && ma.isTypedArray,
    rp = Qs ? Ys(Qs) : Ks,
    el = rp;
  var op = Object.prototype,
    ap = op.hasOwnProperty;
  function np(t, e) {
    var r = Cr(t),
      o = !r && Fs(t),
      a = !r && !o && Js(t),
      i = !r && !o && !a && el(t),
      s = r || o || a || i,
      l = s ? Hs(t.length, String) : [],
      m = l.length;
    for (var c in t)
      (e || ap.call(t, c)) &&
        !(
          s &&
          (c == "length" ||
            (a && (c == "offset" || c == "parent")) ||
            (i && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            Rr(c, m))
        ) &&
        l.push(c);
    return l;
  }
  var tl = np;
  function ip(t) {
    var e = [];
    if (t != null) for (var r in Object(t)) e.push(r);
    return e;
  }
  var rl = ip;
  var sp = Object.prototype,
    lp = sp.hasOwnProperty;
  function cp(t) {
    if (!Xe(t)) return rl(t);
    var e = Gs(t),
      r = [];
    for (var o in t) (o == "constructor" && (e || !lp.call(t, o))) || r.push(o);
    return r;
  }
  var ol = cp;
  function up(t) {
    return jr(t) ? tl(t, !0) : ol(t);
  }
  var al = up;
  function mp(t) {
    return t == null ? "" : Cs(t);
  }
  var Ir = mp;
  function dp(t, e, r) {
    var o = -1,
      a = t.length;
    e < 0 && (e = -e > a ? 0 : a + e),
      (r = r > a ? a : r),
      r < 0 && (r += a),
      (a = e > r ? 0 : (r - e) >>> 0),
      (e >>>= 0);
    for (var i = Array(a); ++o < a; ) i[o] = t[o + e];
    return i;
  }
  var nl = dp;
  function fp(t, e, r) {
    var o = t.length;
    return (r = r === void 0 ? o : r), !e && r >= o ? t : nl(t, e, r);
  }
  var il = fp;
  var pp = "\\ud800-\\udfff",
    gp = "\\u0300-\\u036f",
    hp = "\\ufe20-\\ufe2f",
    bp = "\\u20d0-\\u20ff",
    vp = gp + hp + bp,
    xp = "\\ufe0e\\ufe0f",
    yp = "\\u200d",
    _p = RegExp("[" + yp + pp + vp + xp + "]");
  function wp(t) {
    return _p.test(t);
  }
  var Lr = wp;
  function Sp(t) {
    return t.split("");
  }
  var sl = Sp;
  var ll = "\\ud800-\\udfff",
    kp = "\\u0300-\\u036f",
    Cp = "\\ufe20-\\ufe2f",
    Ap = "\\u20d0-\\u20ff",
    Tp = kp + Cp + Ap,
    Ep = "\\ufe0e\\ufe0f",
    Rp = "[" + ll + "]",
    da = "[" + Tp + "]",
    fa = "\\ud83c[\\udffb-\\udfff]",
    Np = "(?:" + da + "|" + fa + ")",
    cl = "[^" + ll + "]",
    ul = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    ml = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Pp = "\\u200d",
    dl = Np + "?",
    fl = "[" + Ep + "]?",
    jp = "(?:" + Pp + "(?:" + [cl, ul, ml].join("|") + ")" + fl + dl + ")*",
    Ip = fl + dl + jp,
    Lp = "(?:" + [cl + da + "?", da, ul, ml, Rp].join("|") + ")",
    Op = RegExp(fa + "(?=" + fa + ")|" + Lp + Ip, "g");
  function Bp(t) {
    return t.match(Op) || [];
  }
  var pl = Bp;
  function Mp(t) {
    return Lr(t) ? pl(t) : sl(t);
  }
  var gl = Mp;
  function zp(t) {
    return function (e) {
      e = Ir(e);
      var r = Lr(e) ? gl(e) : void 0,
        o = r ? r[0] : e.charAt(0),
        a = r ? il(r, 1).join("") : e.slice(1);
      return o[t]() + a;
    };
  }
  var hl = zp;
  var Dp = hl("toUpperCase"),
    bl = Dp;
  function Wp(t) {
    return bl(Ir(t).toLowerCase());
  }
  var pa = Wp;
  var vl = Object.prototype,
    Gp = vl.hasOwnProperty,
    Hp = Ds(function (t, e) {
      t = Object(t);
      var r = -1,
        o = e.length,
        a = o > 2 ? e[2] : void 0;
      for (a && Ws(e[0], e[1], a) && (o = 1); ++r < o; )
        for (var i = e[r], s = al(i), l = -1, m = s.length; ++l < m; ) {
          var c = s[l],
            n = t[c];
          (n === void 0 || (Nr(n, vl[c]) && !Gp.call(t, c))) && (t[c] = i[c]);
        }
      return t;
    }),
    ga = Hp;
  Yt();
  var gt = $r(ba());
  var _l = {
      ["always"]: {
        title: "Always",
        desc: "ChatGPT is queried on every search",
      },
      ["questionMark"]: {
        title: "Question Mark",
        desc: "When your query ends with a question mark (?)",
      },
      ["manually"]: {
        title: "Manually",
        desc: "ChatGPT is queried when you manually click a button",
      },
    },
    Or = ((o) => (
      (o.Auto = "auto"), (o.Light = "light"), (o.Dark = "dark"), o
    ))(Or || {}),
    va = ((c) => (
      (c.Auto = "auto"),
      (c.English = "english"),
      (c.Chinese = "chinese"),
      (c.Spanish = "spanish"),
      (c.French = "french"),
      (c.Korean = "korean"),
      (c.Japanese = "japanese"),
      (c.German = "german"),
      (c.Portuguese = "portuguese"),
      c
    ))(va || {}),
    yl = { triggerMode: "always", theme: "auto", language: "auto" };
  async function xa() {
    let t = await gt.default.storage.local.get(Object.keys(yl));
    return ga(t, yl);
  }
  async function Br(t) {
    return console.debug("update configs", t), gt.default.storage.local.set(t);
  }
  async function wl() {
    let { provider: t = "chatgpt" } = await gt.default.storage.local.get(
        "provider"
      ),
      e = `provider:${"gpt3"}`,
      r = await gt.default.storage.local.get(e);
    return { provider: t, configs: { ["gpt3"]: r[e] } };
  }
  async function Sl(t, e) {
    return gt.default.storage.local.set({
      provider: t,
      [`provider:${"gpt3"}`]: e["gpt3"],
    });
  }
  var kl =
    "data:image/png;base64,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";
  var Cl = $r(ba());
  function Al() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  function Tl() {
    return Cl.default.runtime.getManifest().version;
  }
  j();
  j();
  var $l = $r(Pl(), 1);
  j();
  var Be = new WeakMap(),
    jl = {},
    Je = () => {},
    Ne = Je(),
    Mt = Object,
    me = (t) => t === Ne,
    Ie = (t) => typeof t == "function",
    Me = (t, e) => ({ ...t, ...e }),
    Ta = "undefined",
    Dr = typeof window != Ta,
    wa = typeof document != Ta,
    Qp = () => Dr && typeof window.requestAnimationFrame != Ta,
    Ea = (t, e) => {
      let r = Be.get(t);
      return [
        () => t.get(e) || jl,
        (o) => {
          let a = t.get(e);
          r[5](e, Me(a, o), a || jl);
        },
        r[6],
      ];
    },
    Mr = new WeakMap(),
    eg = 0,
    zt = (t) => {
      let e = typeof t,
        r = t && t.constructor,
        o = r == Date,
        a,
        i;
      if (Mt(t) === t && !o && r != RegExp) {
        if (((a = Mr.get(t)), a)) return a;
        if (((a = ++eg + "~"), Mr.set(t, a), r == Array)) {
          for (a = "@", i = 0; i < t.length; i++) a += zt(t[i]) + ",";
          Mr.set(t, a);
        }
        if (r == Mt) {
          a = "#";
          let s = Mt.keys(t).sort();
          for (; !me((i = s.pop())); )
            me(t[i]) || (a += i + ":" + zt(t[i]) + ",");
          Mr.set(t, a);
        }
      } else
        a = o
          ? t.toJSON()
          : e == "symbol"
          ? t.toString()
          : e == "string"
          ? JSON.stringify(t)
          : "" + t;
      return a;
    },
    Sa = !0,
    tg = () => Sa,
    [ka, Ca] =
      Dr && window.addEventListener
        ? [
            window.addEventListener.bind(window),
            window.removeEventListener.bind(window),
          ]
        : [Je, Je],
    rg = () => {
      let t = wa && document.visibilityState;
      return me(t) || t !== "hidden";
    },
    og = (t) => (
      wa && document.addEventListener("visibilitychange", t),
      ka("focus", t),
      () => {
        wa && document.removeEventListener("visibilitychange", t),
          Ca("focus", t);
      }
    ),
    ag = (t) => {
      let e = () => {
          (Sa = !0), t();
        },
        r = () => {
          Sa = !1;
        };
      return (
        ka("online", e),
        ka("offline", r),
        () => {
          Ca("online", e), Ca("offline", r);
        }
      );
    },
    ng = { isOnline: tg, isVisible: rg },
    ig = { initFocus: og, initReconnect: ag },
    Ra = !f.useId,
    bt = !Dr || "Deno" in window,
    Ol = (t) => (Qp() ? window.requestAnimationFrame(t) : setTimeout(t, 1)),
    Dt = bt ? M : Ue,
    _a = typeof navigator < "u" && navigator.connection,
    Il =
      !bt &&
      _a &&
      (["slow-2g", "2g"].includes(_a.effectiveType) || _a.saveData),
    Wr = (t) => {
      if (Ie(t))
        try {
          t = t();
        } catch {
          t = "";
        }
      let e = t;
      return (
        (t =
          typeof t == "string"
            ? t
            : (Array.isArray(t) ? t.length : t)
            ? zt(t)
            : ""),
        [t, e]
      );
    },
    sg = 0,
    zr = () => ++sg,
    Bl = 0,
    Ml = 1,
    zl = 2,
    Gr = {
      __proto__: null,
      FOCUS_EVENT: Bl,
      RECONNECT_EVENT: Ml,
      MUTATE_EVENT: zl,
    };
  async function Na(...t) {
    let [e, r, o, a] = t,
      i = Me(
        { populateCache: !0, throwOnError: !0 },
        typeof a == "boolean" ? { revalidate: a } : a || {}
      ),
      s = i.populateCache,
      l = i.rollbackOnError,
      m = i.optimisticData,
      c = i.revalidate !== !1,
      n = (p) => (typeof l == "function" ? l(p) : l !== !1),
      d = i.throwOnError;
    if (Ie(r)) {
      let p = r,
        h = [],
        _ = e.keys();
      for (let x = _.next(); !x.done; x = _.next()) {
        let A = x.value;
        !A.startsWith("$inf$") && p(e.get(A)._k) && h.push(A);
      }
      return Promise.all(h.map(u));
    }
    return u(r);
    async function u(p) {
      let [h] = Wr(p);
      if (!h) return;
      let [_, x] = Ea(e, h),
        [A, y, b] = Be.get(e),
        v = A[h],
        k = () =>
          c && (delete b[h], v && v[0])
            ? v[0](zl).then(() => _().data)
            : _().data;
      if (t.length < 3) return k();
      let g = o,
        T,
        C = zr();
      y[h] = [C, 0];
      let O = !me(m),
        S = _(),
        R = S.data,
        P = S._c,
        D = me(P) ? R : P;
      if ((O && ((m = Ie(m) ? m(D) : m), x({ data: m, _c: D })), Ie(g)))
        try {
          g = g(D);
        } catch (J) {
          T = J;
        }
      if (g && Ie(g.then))
        if (
          ((g = await g.catch((J) => {
            T = J;
          })),
          C !== y[h][0])
        ) {
          if (T) throw T;
          return g;
        } else T && O && n(T) && ((s = !0), (g = D), x({ data: g, _c: Ne }));
      s && (T || (Ie(s) && (g = s(g, D)), x({ data: g, _c: Ne }))),
        (y[h][1] = zr());
      let G = await k();
      if ((x({ _c: Ne }), T)) {
        if (d) throw T;
        return;
      }
      return s ? G : g;
    }
  }
  var Ll = (t, e) => {
      for (let r in t) t[r][0] && t[r][0](e);
    },
    Dl = (t, e) => {
      if (!Be.has(t)) {
        let r = Me(ig, e),
          o = {},
          a = Na.bind(Ne, t),
          i = Je,
          s = {},
          l = (n, d) => {
            let u = s[n] || [];
            return (s[n] = u), u.push(d), () => u.splice(u.indexOf(d), 1);
          },
          m = (n, d, u) => {
            t.set(n, d);
            let p = s[n];
            if (p) for (let h = p.length; h--; ) p[h](u, d);
          },
          c = () => {
            if (!Be.has(t) && (Be.set(t, [o, {}, {}, {}, a, m, l]), !bt)) {
              let n = r.initFocus(setTimeout.bind(Ne, Ll.bind(Ne, o, Bl))),
                d = r.initReconnect(setTimeout.bind(Ne, Ll.bind(Ne, o, Ml)));
              i = () => {
                n && n(), d && d(), Be.delete(t);
              };
            }
          };
        return c(), [t, a, c, i];
      }
      return [t, Be.get(t)[4]];
    },
    lg = (t, e, r, o, a) => {
      let i = r.errorRetryCount,
        s = a.retryCount,
        l =
          ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) *
          r.errorRetryInterval;
      (!me(i) && s > i) || setTimeout(o, l, a);
    },
    cg = (t, e) => zt(t) == zt(e),
    [Pa, Wl] = Dl(new Map()),
    ja = Me(
      {
        onLoadingSlow: Je,
        onSuccess: Je,
        onError: Je,
        onErrorRetry: lg,
        onDiscarded: Je,
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
        revalidateIfStale: !0,
        shouldRetryOnError: !0,
        errorRetryInterval: Il ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: Il ? 5e3 : 3e3,
        compare: cg,
        isPaused: () => !1,
        cache: Pa,
        mutate: Wl,
        fallback: {},
      },
      ng
    ),
    Gl = (t, e) => {
      let r = Me(t, e);
      if (e) {
        let { use: o, fallback: a } = t,
          { use: i, fallback: s } = e;
        o && i && (r.use = o.concat(i)), a && s && (r.fallback = Me(a, s));
      }
      return r;
    },
    Aa = at({}),
    Hl = (t) => {
      let { value: e } = t,
        r = st(Aa),
        o = Ie(e),
        a = E(() => (o ? e(r) : e), [o, r, e]),
        i = E(() => (o ? a : Gl(r, a)), [o, r, a]),
        s = a && a.provider,
        [l] = B(() => (s ? Dl(s(i.cache || Pa), a) : Ne));
      return (
        l && ((i.cache = l[0]), (i.mutate = l[1])),
        Dt(() => {
          if (l) return l[2] && l[2](), l[3];
        }, []),
        Te(Aa.Provider, Me(t, { value: i }))
      );
    },
    Vl = Dr && window.__SWR_DEVTOOLS_USE__,
    ug = Vl ? window.__SWR_DEVTOOLS_USE__ : [],
    mg = () => {
      Vl && (window.__SWR_DEVTOOLS_REACT__ = f);
    },
    dg = (t) =>
      Ie(t[1])
        ? [t[0], t[1], t[2] || {}]
        : [t[0], null, (t[1] === null ? t[2] : t[1]) || {}],
    Fl = () => Me(ja, st(Aa));
  var fg = (t) => (e, r, o) =>
      t(
        e,
        r &&
          ((...i) => {
            let s = Wr(e)[0],
              [, , , l] = Be.get(Pa),
              m = l[s];
            return m ? (delete l[s], m) : r(...i);
          }),
        o
      ),
    pg = ug.concat(fg),
    Ul = (t) =>
      function (...r) {
        let o = Fl(),
          [a, i, s] = dg(r),
          l = Gl(o, s),
          m = t,
          { use: c } = l,
          n = (c || []).concat(pg);
        for (let d = n.length; d--; ) m = n[d](m);
        return m(a, i || l.fetcher || null, l);
      };
  var ql = (t, e, r) => {
    let o = e[t] || (e[t] = []);
    return (
      o.push(r),
      () => {
        let a = o.indexOf(r);
        a >= 0 && ((o[a] = o[o.length - 1]), o.pop());
      }
    );
  };
  mg();
  var Ia = { dedupe: !0 },
    gg = (t, e, r) => {
      let {
          cache: o,
          compare: a,
          suspense: i,
          fallbackData: s,
          revalidateOnMount: l,
          refreshInterval: m,
          refreshWhenHidden: c,
          refreshWhenOffline: n,
          keepPreviousData: d,
        } = r,
        [u, p, h] = Be.get(o),
        [_, x] = Wr(t),
        A = $(!1),
        y = $(!1),
        b = $(_),
        v = $(e),
        k = $(r),
        g = () => k.current,
        T = () => g().isVisible() && g().isOnline(),
        [C, O, S] = Ea(o, _),
        R = $({}).current,
        P = me(s) ? r.fallback[_] : s,
        D = (U, re) => {
          let oe = !0;
          for (let ae in R) {
            let ie = ae;
            a(re[ie], U[ie]) ||
              (ie === "data" && me(U[ie]) && a(re[ie], de)) ||
              (oe = !1);
          }
          return oe;
        },
        G = E(() => {
          let U = (() =>
              !_ || !e ? !1 : me(l) ? !(g().isPaused() || i) : l)(),
            re = () => {
              let ae = C(),
                ie = Me(ae);
              return (
                delete ie._k,
                U ? { isValidating: !0, isLoading: !0, ...ie } : ie
              );
            },
            oe = re();
          return () => {
            let ae = re();
            return D(ae, oe) ? oe : (oe = ae);
          };
        }, [o, _]),
        J = (0, $l.useSyncExternalStore)(
          Se(
            (U) =>
              S(_, (re, oe) => {
                D(re, oe) || U();
              }),
            [o, _]
          ),
          G,
          G
        ),
        ne = !A.current,
        Z = J.data,
        se = me(Z) ? P : Z,
        le = J.error,
        te = $(se),
        de = d ? (me(Z) ? te.current : Z) : se,
        I = (() =>
          ne && !me(l)
            ? l
            : g().isPaused()
            ? !1
            : i
            ? me(se)
              ? !1
              : r.revalidateIfStale
            : me(se) || r.revalidateIfStale)(),
        ke = !!(_ && e && ne && I),
        K = me(J.isValidating) ? ke : J.isValidating,
        q = me(J.isLoading) ? ke : J.isLoading,
        X = Se(
          async (U) => {
            let re = v.current;
            if (!_ || !re || y.current || g().isPaused()) return !1;
            let oe,
              ae,
              ie = !0,
              xe = U || {},
              ve = !h[_] || !xe.dedupe,
              be = () =>
                Ra
                  ? !y.current && _ === b.current && A.current
                  : _ === b.current,
              fe = { isValidating: !1, isLoading: !1 },
              pe = () => {
                O(fe);
              },
              ee = () => {
                let ge = h[_];
                ge && ge[1] === ae && delete h[_];
              },
              ye = { isValidating: !0 };
            me(C().data) && (ye.isLoading = !0);
            try {
              if (
                (ve &&
                  (O(ye),
                  r.loadingTimeout &&
                    me(C().data) &&
                    setTimeout(() => {
                      ie && be() && g().onLoadingSlow(_, r);
                    }, r.loadingTimeout),
                  (h[_] = [re(x), zr()])),
                ([oe, ae] = h[_]),
                (oe = await oe),
                ve && setTimeout(ee, r.dedupingInterval),
                !h[_] || h[_][1] !== ae)
              )
                return ve && be() && g().onDiscarded(_), !1;
              fe.error = Ne;
              let ge = p[_];
              if (!me(ge) && (ae <= ge[0] || ae <= ge[1] || ge[1] === 0))
                return pe(), ve && be() && g().onDiscarded(_), !1;
              let _e = C().data;
              (fe.data = a(_e, oe) ? _e : oe),
                ve && be() && g().onSuccess(oe, _, r);
            } catch (ge) {
              ee();
              let _e = g(),
                { shouldRetryOnError: ze } = _e;
              _e.isPaused() ||
                ((fe.error = ge),
                ve &&
                  be() &&
                  (_e.onError(ge, _, _e),
                  (ze === !0 || (Ie(ze) && ze(ge))) &&
                    T() &&
                    _e.onErrorRetry(ge, _, _e, X, {
                      retryCount: (xe.retryCount || 0) + 1,
                      dedupe: !0,
                    })));
            }
            return (ie = !1), pe(), !0;
          },
          [_, o]
        ),
        he = Se((...U) => Na(o, b.current, ...U), []);
      if (
        (Dt(() => {
          (v.current = e), (k.current = r), me(Z) || (te.current = Z);
        }),
        Dt(() => {
          if (!_) return;
          let U = X.bind(Ne, Ia),
            re = 0,
            ae = ql(_, u, (ie) => {
              if (ie == Gr.FOCUS_EVENT) {
                let xe = Date.now();
                g().revalidateOnFocus &&
                  xe > re &&
                  T() &&
                  ((re = xe + g().focusThrottleInterval), U());
              } else if (ie == Gr.RECONNECT_EVENT)
                g().revalidateOnReconnect && T() && U();
              else if (ie == Gr.MUTATE_EVENT) return X();
            });
          return (
            (y.current = !1),
            (b.current = _),
            (A.current = !0),
            O({ _k: x }),
            I && (me(se) || bt ? U() : Ol(U)),
            () => {
              (y.current = !0), ae();
            }
          );
        }, [_]),
        Dt(() => {
          let U;
          function re() {
            let ae = Ie(m) ? m(se) : m;
            ae && U !== -1 && (U = setTimeout(oe, ae));
          }
          function oe() {
            !C().error && (c || g().isVisible()) && (n || g().isOnline())
              ? X(Ia).then(re)
              : re();
          }
          return (
            re(),
            () => {
              U && (clearTimeout(U), (U = -1));
            }
          );
        }, [m, c, n, _]),
        Ct(de),
        i && me(se) && _)
      )
        throw !Ra && bt
          ? new Error("Fallback data is required when using suspense in SSR.")
          : ((v.current = e),
            (k.current = r),
            (y.current = !1),
            me(le) ? X(Ia) : le);
      return {
        mutate: he,
        get data() {
          return (R.data = !0), de;
        },
        get error() {
          return (R.error = !0), le;
        },
        get isValidating() {
          return (R.isValidating = !0), K;
        },
        get isLoading() {
          return (R.isLoading = !0), q;
        },
      };
    },
    bA = Mt.defineProperty(Hl, "defaultValue", { value: ja });
  var Xl = Ul(gg);
  var hg = "https://github.com/rakiburrahamanCS";
  async function Jl() {
    return fetch(`${hg}/api/config`, { headers: { "x-version": Tl() } }).then(
      (t) => t.json()
    );
  }
  Ke();
  Ke();
  var bg = 0;
  function z(t, e, r, o, a) {
    var i,
      s,
      l = {};
    for (s in e) s == "ref" ? (i = e[s]) : (l[s] = e[s]);
    var m = {
      type: t,
      props: l,
      key: r,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --bg,
      __source: a,
      __self: o,
    };
    if (typeof t == "function" && (i = t.defaultProps))
      for (s in i) l[s] === void 0 && (l[s] = i[s]);
    return L.vnode && L.vnode(m), m;
  }
  async function vg() {
    return (await Jl()).openai_model_names;
  }
  var xg = ({ config: t, models: e }) => {
    var c, n, d, u;
    let [r, o] = B(t.provider),
      { bindings: a } = ia(
        (n = (c = t.configs["gpt3"]) == null ? void 0 : c.apiKey) != null
          ? n
          : ""
      ),
      [i, s] = B(
        (u = (d = t.configs["gpt3"]) == null ? void 0 : d.model) != null
          ? u
          : e[0]
      ),
      { setToast: l } = It(),
      m = Se(async () => {
        if (r === "gpt3") {
          if (!a.value) {
            alert("Please enter your OpenAI API key");
            return;
          }
          if (!i || !e.includes(i)) {
            alert("Please select a valid model");
            return;
          }
        }
        await Sl(r, { ["gpt3"]: { model: i, apiKey: a.value } }),
          l({ text: "Changes saved", type: "success" });
      }, [a.value, i, e, l, r]);
    return z("div", {
      className: "flex flex-col gap-3",
      children: [
        z(Lt, {
          value: r,
          onChange: (p) => o(p),
          children: [
            z(Lt.Item, {
              label: "ChatGPT webapp",
              value: "chatgpt",
              children:
                "The API that powers ChatGPT webapp, free, but sometimes unstable",
            }),
            z(Lt.Item, {
              label: "OpenAI API",
              value: "gpt3",
              children: z("div", {
                className: "flex flex-col gap-2",
                children: [
                  z("span", {
                    children: [
                      "OpenAI official API, more stable,",
                      " ",
                      z("span", {
                        className: "font-semibold",
                        children: "charge by usage",
                      }),
                    ],
                  }),
                  z("div", {
                    className: "flex flex-row gap-2",
                    children: [
                      z(tt, {
                        scale: 2 / 3,
                        value: i,
                        onChange: (p) => s(p),
                        placeholder: "model",
                        children: e.map((p) =>
                          z(tt.Option, { value: p, children: p }, p)
                        ),
                      }),
                      z(xo, {
                        htmlType: "password",
                        label: "API key",
                        scale: 2 / 3,
                        ...a,
                      }),
                    ],
                  }),
                  z("span", {
                    className: "italic text-xs",
                    children: [
                      "You can find or create your API key",
                      " ",
                      z("a", {
                        href: "https://platform.openai.com/account/api-keys",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "here",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        z(Rt, {
          scale: 2 / 3,
          ghost: !0,
          style: { width: 20 },
          type: "success",
          onClick: m,
          children: "Save",
        }),
      ],
    });
  };
  function yg() {
    let t = Xl("provider-configs", async () => {
      let [e, r] = await Promise.all([wl(), vg()]);
      return { config: e, models: r };
    });
    return t.isLoading
      ? z($o, {})
      : z(xg, { config: t.data.config, models: t.data.models });
  }
  var Kl = yg;
  function _g(t) {
    let [e, r] = B("always"),
      [o, a] = B("auto"),
      { setToast: i } = It();
    M(() => {
      xa().then((c) => {
        r(c.triggerMode), a(c.language);
      });
    }, []);
    let s = Se(
        (c) => {
          r(c),
            Br({ triggerMode: c }),
            i({ text: "Changes saved", type: "success" });
        },
        [i]
      ),
      l = Se(
        (c) => {
          Br({ theme: c }),
            t.onThemeChange(c),
            i({ text: "Changes saved", type: "success" });
        },
        [t, i]
      ),
      m = Se(
        (c) => {
          Br({ language: c }), i({ text: "Changes saved", type: "success" });
        },
        [i]
      );
    return z("div", {
      className: "container mx-auto",
      children: [
        z("nav", {
          className: "flex flex-row justify-between items-center mt-5 px-2",
          children: [
            z("div", {
              className: "flex flex-row items-center gap-2",
              children: [
                z("img", { src: kl, className: "w-10 h-10 rounded-lg" }),
                z("span", {
                  className: "font-semibold",
                  children: "Search Engine 2.0",
                }),
              ],
            }),
            z("div", {
              className: "flex flex-row gap-3",
              children: [
                z("a", {
                  href: "https://github.com/rakiburrahamanCS",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Changelog",
                }),
                z("a", {
                  href: "https://github.com/rakiburrahamanCS",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Feedback",
                }),
                z("a", {
                  href: "https://github.com/rakiburrahamanCS",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Twitter",
                }),
                z("a", {
                  href: "https://github.com/rakiburrahamanCS",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Source code",
                }),
              ],
            }),
          ],
        }),
        z("main", {
          className: "w-[500px] mx-auto mt-14",
          children: [
            z(Oe, { h2: !0, children: "Options" }),
            z(Oe, { h3: !0, className: "mt-5", children: "Trigger Mode" }),
            z(et.Group, {
              value: e,
              onChange: (c) => s(c),
              children: Object.entries(_l).map(([c, n]) =>
                z(
                  et,
                  {
                    value: c,
                    children: [
                      n.title,
                      z(et.Description, { children: n.desc }),
                    ],
                  },
                  c
                )
              ),
            }),
            z(Oe, { h3: !0, className: "mt-5", children: "Theme" }),
            z(et.Group, {
              value: t.theme,
              onChange: (c) => l(c),
              useRow: !0,
              children: Object.entries(Or).map(([c, n]) =>
                z(et, { value: n, children: c }, n)
              ),
            }),
            z(Oe, { h3: !0, className: "mt-5 mb-0", children: "Language" }),
            z(Oe, {
              className: "my-1",
              children: [
                "The language used in ChatGPT response. ",
                z("span", { className: "italic", children: "Auto" }),
                " is recommended.",
              ],
            }),
            z(tt, {
              value: o,
              placeholder: "Choose one",
              onChange: (c) => m(c),
              children: Object.entries(va).map(([c, n]) =>
                z(tt.Option, { value: n, children: pa(n) }, c)
              ),
            }),
            z(Oe, { h3: !0, className: "mt-5 mb-0", children: "AI Provider" }),
            z(Kl, {}),
            z(Oe, { h3: !0, className: "mt-8", children: "Misc" }),
            z("div", {
              className: "flex flex-row items-center gap-4",
              children: [
                z(na, { initialChecked: !0, disabled: !0 }),
                z(Oe, {
                  b: !0,
                  margin: 0,
                  children: "Auto delete conversations generated by search",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function wg() {
    let [t, e] = B("auto"),
      r = E(() => (t === "auto" ? Al() : t), [t]);
    return (
      M(() => {
        xa().then((o) => e(o.theme));
      }, []),
      z(jo, {
        themeType: r,
        children: [z(Sr, {}), z(_g, { theme: t, onThemeChange: e })],
      })
    );
  }
  var Yl = wg;
  Ve(z(Yl, {}), document.getElementById("app"));
})();
