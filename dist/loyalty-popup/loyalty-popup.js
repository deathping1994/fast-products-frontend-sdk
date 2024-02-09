(function() {
  "use strict";
  var n, l$1, u$1, i$1, o$2, r$1, f$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v$1 = Array.isArray;
  function h$1(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function p$1(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function y(l2, u2, t2) {
    var i2, o2, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return d$1(l2, f2, i2, o2, null);
  }
  function d$1(n2, t2, i2, o2, r2) {
    var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$1 : r2 };
    return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
  }
  function k$1(n2) {
    return n2.children;
  }
  function b$1(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function g$1(n2, l2) {
    if (null == l2)
      return n2.__ ? g$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__d || u2.__e;
    return "function" == typeof n2.type ? g$1(n2) : null;
  }
  function m$1(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return m$1(n2);
    }
  }
  function w$1(n2) {
    (!n2.__d && (n2.__d = true) && i$1.push(n2) && !x.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$1)(x);
  }
  function x() {
    var n2, l2, u2, t2, o2, r2, e2, c2, s2;
    for (i$1.sort(f$1); n2 = i$1.shift(); )
      n2.__d && (l2 = i$1.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = h$1({}, e2)).__v = e2.__v + 1, z$1(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g$1(e2) : c2, e2.__h, o2), L(t2, e2, o2), e2.__e != c2 && m$1(e2)), i$1.length > l2 && i$1.sort(f$1));
    x.__r = 0;
  }
  function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
    var p2, y2, _2, b2, m2, w2, x2, P2, C, D2 = 0, H2 = t2 && t2.__k || s$1, I2 = H2.length, T2 = I2, j2 = l2.length;
    for (u2.__k = [], p2 = 0; p2 < j2; p2++)
      null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d$1(null, b2, null, null, b2) : v$1(b2) ? d$1(k$1, { children: b2 }, null, null, null) : b2.__b > 0 ? d$1(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) ? (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (P2 = A(b2, H2, x2 = p2 + D2, T2)) ? _2 = c$1 : (_2 = H2[P2] || c$1, H2[P2] = void 0, T2--), z$1(n2, b2, _2, i2, o2, r2, f2, e2, a2, h2), m2 = b2.__e, (y2 = b2.ref) && _2.ref != y2 && (_2.ref && N(_2.ref, null, b2), h2.push(y2, b2.__c || m2, b2)), null != m2 && (null == w2 && (w2 = m2), (C = _2 === c$1 || null === _2.__v) ? -1 == P2 && D2-- : P2 !== x2 && (P2 === x2 + 1 ? D2++ : P2 > x2 ? T2 > j2 - x2 ? D2 += P2 - x2 : D2-- : D2 = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p2 + D2, "function" != typeof b2.type || P2 === x2 && _2.__k !== b2.__k ? "function" == typeof b2.type || P2 === x2 && !C ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = m2.nextSibling : e2 = S(n2, m2, e2) : e2 = $(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2))) : (_2 = H2[p2]) && null == _2.key && _2.__e && (_2.__e == e2 && (_2.__ = t2, e2 = g$1(_2)), O(_2, _2, false), H2[p2] = null);
    for (u2.__e = w2, p2 = I2; p2--; )
      null != H2[p2] && ("function" == typeof u2.type && null != H2[p2].__e && H2[p2].__e == u2.__d && (u2.__d = H2[p2].__e.nextSibling), O(H2[p2], H2[p2]));
  }
  function $(n2, l2, u2) {
    for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
      (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? $(t2, l2, u2) : S(u2, t2.__e, l2));
    return l2;
  }
  function S(n2, l2, u2) {
    return null == u2 || u2.parentNode !== n2 ? n2.insertBefore(l2, null) : l2 == u2 && null != l2.parentNode || n2.insertBefore(l2, u2), l2.nextSibling;
  }
  function A(n2, l2, u2, t2) {
    var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
    if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
      return u2;
    if (t2 > (null != e2 ? 1 : 0))
      for (; r2 >= 0 || f2 < l2.length; ) {
        if (r2 >= 0) {
          if ((e2 = l2[r2]) && i2 == e2.key && o2 === e2.type)
            return r2;
          r2--;
        }
        if (f2 < l2.length) {
          if ((e2 = l2[f2]) && i2 == e2.key && o2 === e2.type)
            return f2;
          f2++;
        }
      }
    return -1;
  }
  function D(n2, l2, u2, t2, i2) {
    var o2;
    for (o2 in u2)
      "children" === o2 || "key" === o2 || o2 in l2 || I(n2, o2, null, u2[o2], t2);
    for (o2 in l2)
      i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || I(n2, o2, l2[o2], u2[o2], t2);
  }
  function H(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
  }
  function I(n2, l2, u2, t2, i2) {
    var o2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || H(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] === t2[l2] || H(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? j$1 : T, o2)) : n2.removeEventListener(l2, o2 ? j$1 : T, o2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (i2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
      }
  }
  function T(n2) {
    var u2 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u2.u)
        return;
    } else
      n2.t = Date.now();
    return u2(l$1.event ? l$1.event(n2) : n2);
  }
  function j$1(n2) {
    return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
  }
  function z$1(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
    var a2, p2, y2, d2, _2, g2, m2, w2, x2, $2, C, S2, A2, D2, H2, I2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l$1.__b) && a2(u2);
    n:
      if ("function" == typeof I2)
        try {
          if (w2 = u2.props, x2 = (a2 = I2.contextType) && i2[a2.__c], $2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = p2 = new I2(w2, $2) : (u2.__c = p2 = new b$1(w2, $2), p2.constructor = I2, p2.render = q), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = $2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != I2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = h$1({}, p2.__s)), h$1(p2.__s, I2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u2, y2)
            null == I2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, $2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, $2) || u2.__v === t2.__v)) {
              for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), C = 0; C < p2._sb.length; C++)
                p2.__h.push(p2._sb[C]);
              p2._sb = [], p2.__h.length && f2.push(p2);
              break n;
            }
            null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, $2), null != p2.componentDidUpdate && p2.__h.push(function() {
              p2.componentDidUpdate(d2, _2, g2);
            });
          }
          if (p2.context = $2, p2.props = w2, p2.__P = n2, p2.__e = false, S2 = l$1.__r, A2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (p2.state = p2.__s, p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), D2 = 0; D2 < p2._sb.length; D2++)
              p2.__h.push(p2._sb[D2]);
            p2._sb = [];
          } else
            do {
              p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
            } while (p2.__d && ++A2 < 25);
          p2.state = p2.__s, null != p2.getChildContext && (i2 = h$1(h$1({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g2 = p2.getSnapshotBeforeUpdate(d2, _2)), P(n2, v$1(H2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? H2 : [H2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), m2 && (p2.__E = p2.__ = null);
        } catch (n3) {
          u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$1.__e(n3, u2, t2);
        }
      else
        null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = M(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
    (a2 = l$1.diffed) && a2(u2);
  }
  function L(n2, u2, t2) {
    for (var i2 = 0; i2 < t2.length; i2++)
      N(t2[i2], t2[++i2], t2[++i2]);
    l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l$1.__e(n3, u3.__v);
      }
    });
  }
  function M(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
    var a2, h2, y2, d2 = t2.props, _2 = u2.props, k2 = u2.type, b2 = 0;
    if ("svg" === k2 && (o2 = true), null != r2) {
      for (; b2 < r2.length; b2++)
        if ((a2 = r2[b2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
          l2 = a2, r2[b2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === k2)
        return document.createTextNode(_2);
      l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _2.is && _2), r2 = null, e2 = false;
    }
    if (null === k2)
      d2 === _2 || e2 && l2.data === _2 || (l2.data = _2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), h2 = (d2 = t2.props || c$1).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e2) {
        if (null != r2)
          for (d2 = {}, b2 = 0; b2 < l2.attributes.length; b2++)
            d2[l2.attributes[b2].name] = l2.attributes[b2].value;
        (y2 || h2) && (y2 && (h2 && y2.__html == h2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
      }
      if (D(l2, _2, d2, o2, e2), y2)
        u2.__k = [];
      else if (P(l2, v$1(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g$1(t2, 0), e2, s2), null != r2)
        for (b2 = r2.length; b2--; )
          null != r2[b2] && p$1(r2[b2]);
      e2 || ("value" in _2 && void 0 !== (b2 = _2.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && I(l2, "value", b2, d2.value, false), "checked" in _2 && void 0 !== (b2 = _2.checked) && b2 !== l2.checked && I(l2, "checked", b2, d2.checked, false));
    }
    return l2;
  }
  function N(n2, u2, t2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l$1.__e(n3, t2);
    }
  }
  function O(n2, u2, t2) {
    var i2, o2;
    if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount)
        try {
          i2.componentWillUnmount();
        } catch (n3) {
          l$1.__e(n3, u2);
        }
      i2.base = i2.__P = null, n2.__c = void 0;
    }
    if (i2 = n2.__k)
      for (o2 = 0; o2 < i2.length; o2++)
        i2[o2] && O(i2[o2], u2, t2 || "function" != typeof n2.type);
    t2 || null == n2.__e || p$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function B$1(u2, t2, i2) {
    var o2, r2, f2, e2;
    l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], z$1(t2, u2 = (!o2 && i2 || t2).__k = y(k$1, null, [u2]), r2 || c$1, c$1, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), L(f2, u2, e2);
  }
  n = s$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
    for (var i2, o2, r2; l2 = l2.__; )
      if ((i2 = l2.__c) && !i2.__)
        try {
          if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
            return i2.__E = i2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u$1 = 0, b$1.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$1(this));
  }, b$1.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w$1(this));
  }, b$1.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, x.__r = 0;
  const style = `/* :root {\r
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r
	line-height: 1.5;\r
	font-weight: 400;\r
	\r
	color: #222;\r
	background-color: #ffffff;\r
	\r
	font-synthesis: none;\r
	text-rendering: optimizeLegibility;\r
	-webkit-font-smoothing: antialiased;\r
	-moz-osx-font-smoothing: grayscale;\r
	-webkit-text-size-adjust: 100%;\r
}\r
*/\r
.mainPopup {\r
	--loyalty_popup_theme_background: #000000;\r
	--coin-svg-url: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23000000'/%3E%3Cpath d='M11.6003 6.28047C11.6301 6.19829 11.6845 6.12728 11.7561 6.0771C11.8277 6.02692 11.913 6 12.0004 6C12.0879 6 12.1732 6.02692 12.2448 6.0771C12.3164 6.12728 12.3708 6.19829 12.4006 6.28047L12.8076 7.39245C13.1264 8.2644 13.6316 9.05626 14.2881 9.71274C14.9446 10.3692 15.7364 10.8745 16.6084 11.1933L17.7195 11.6003C17.8017 11.6301 17.8727 11.6845 17.9229 11.7561C17.9731 11.8277 18 11.913 18 12.0004C18 12.0879 17.9731 12.1732 17.9229 12.2448C17.8727 12.3164 17.8017 12.3708 17.7195 12.4006L16.6084 12.8076C15.7364 13.1264 14.9446 13.6316 14.2881 14.2881C13.6316 14.9446 13.1264 15.7364 12.8076 16.6084L12.4006 17.7195C12.3708 17.8017 12.3164 17.8727 12.2448 17.9229C12.1732 17.9731 12.0879 18 12.0004 18C11.913 18 11.8277 17.9731 11.7561 17.9229C11.6845 17.8727 11.6301 17.8017 11.6003 17.7195L11.1933 16.6084C10.8745 15.7364 10.3692 14.9446 9.71274 14.2881C9.05626 13.6316 8.2644 13.1264 7.39245 12.8076L6.28047 12.4006C6.19829 12.3708 6.12728 12.3164 6.0771 12.2448C6.02692 12.1732 6 12.0879 6 12.0004C6 11.913 6.02692 11.8277 6.0771 11.7561C6.12728 11.6845 6.19829 11.6301 6.28047 11.6003L7.39245 11.1933C8.2644 10.8745 9.05626 10.3692 9.71274 9.71274C10.3692 9.05626 10.8745 8.2644 11.1933 7.39245L11.6003 6.28047Z' fill='white'/%3E%3C/svg%3E%0A");\r
	--coin-svg-inverted-url: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9.5' cy='9.5' r='9.5' fill='white'/%3E%3Cpath d='M9.18353 4.97204C9.20715 4.90698 9.25022 4.85076 9.3069 4.81104C9.36358 4.77131 9.43112 4.75 9.50034 4.75C9.56955 4.75 9.63709 4.77131 9.69377 4.81104C9.75045 4.85076 9.79353 4.90698 9.81714 4.97204L10.1393 5.85236C10.3917 6.54265 10.7917 7.16954 11.3114 7.68925C11.8311 8.20896 12.458 8.60897 13.1483 8.86133L14.028 9.18353C14.093 9.20715 14.1492 9.25022 14.189 9.3069C14.2287 9.36358 14.25 9.43112 14.25 9.50034C14.25 9.56955 14.2287 9.63709 14.189 9.69377C14.1492 9.75045 14.093 9.79353 14.028 9.81714L13.1483 10.1393C12.458 10.3917 11.8311 10.7917 11.3114 11.3114C10.7917 11.8311 10.3917 12.458 10.1393 13.1483L9.81714 14.028C9.79353 14.093 9.75045 14.1492 9.69377 14.189C9.63709 14.2287 9.56955 14.25 9.50034 14.25C9.43112 14.25 9.36358 14.2287 9.3069 14.189C9.25022 14.1492 9.20715 14.093 9.18353 14.028L8.86133 13.1483C8.60897 12.458 8.20896 11.8311 7.68925 11.3114C7.16954 10.7917 6.54265 10.3917 5.85236 10.1393L4.97204 9.81714C4.90698 9.79353 4.85076 9.75045 4.81104 9.69377C4.77131 9.63709 4.75 9.56955 4.75 9.50034C4.75 9.43112 4.77131 9.36358 4.81104 9.3069C4.85076 9.25022 4.90698 9.20715 4.97204 9.18353L5.85236 8.86133C6.54265 8.60897 7.16954 8.20896 7.68925 7.68925C8.20896 7.16954 8.60897 6.54265 8.86133 5.85236L9.18353 4.97204Z' fill='%23000000'/%3E%3C/svg%3E%0A");\r
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r
	\r
}\r
\r
@keyframes rotate {\r
	from {\r
		transform: rotate(0deg);\r
	}\r
	to {\r
		transform: rotate(360deg);\r
	}\r
}\r
\r
 @keyframes slide-in-bottom {\r
	0% {\r
	  -webkit-transform: translateY(calc(100%));\r
		ransform: translateY(calc(100%));\r
	}\r
	100% {\r
	  -webkit-transform: translateY(0);\r
		transform: translateY(0);\r
	}\r
  }\r
\r
  @keyframes slide-in-top {\r
	0% {\r
	  -webkit-transform: translateY(-1000px);\r
			  transform: translateY(-1000px);\r
	  opacity: 0;\r
	}\r
	100% {\r
	  -webkit-transform: translateY(0);\r
			  transform: translateY(0);\r
	  opacity: 1;\r
	}\r
  }\r
\r
  @keyframes fade-in {\r
	0% {\r
		opacity: 0;\r
	}\r
	100% {\r
		opacity: 1;\r
	}\r
  }\r
  \r
  \r
.loader{\r
	height: 100%;\r
	width: 100%;\r
	position: absolute;\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	top: 0;\r
	z-index: 999999;\r
	background-color: rgba(255, 255, 255, 0.6);\r
}\r
.loaderFullHeight{\r
	height: 100vh;\r
	width: 100%;\r
	position: absolute;\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	top: 0;\r
	z-index: 999999;\r
	background-color: rgba(255, 255, 255, 0.6);\r
}\r
.loading-screen {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
}\r
\r
.loading-screen p {\r
	font-size: 12px;\r
}\r
\r
.spinner {\r
	animation: rotate 2s linear infinite;\r
}\r
\r
body {\r
	margin: 0;\r
	padding: 0;\r
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r
} \r
\r
\r
.fc-loyalty-popup-19212-root * {\r
	padding: 0;\r
	margin: 0;\r
	box-sizing: border-box;\r
}\r
\r
.fc-loyalty-popup-19212-root a {\r
	text-decoration: none;\r
	color: inherit;\r
}\r
\r
.fc-loyalty-popup-19212-root {\r
	width: 100%;\r
}\r
/* Loyality popup styles */\r
\r
.floatingPopup {\r
    background-color: var(--loyalty_popup_theme_background, #000);\r
	padding: 1rem;\r
	display: none;\r
	position: fixed;\r
	width: 60px;\r
	height: 60px;\r
	bottom: 3%;\r
    right: 3%;\r
	justify-content: center;\r
	align-items: center;\r
	border-radius: 100%;\r
	z-index: 9999;\r
	cursor: pointer;\r
	\r
}\r
\r
.mainPopup {\r
	background-color: white;\r
	scrollbar-width: none;\r
	z-index: 999;\r
	position: fixed;\r
	gap: 16px;\r
	bottom: 13%;\r
	right: 7%;\r
	max-width: 360px;\r
	max-height: 580px;\r
	width: 85vw;\r
    height: 80vh;\r
	border-radius: 15px;\r
	overflow-x: hidden;\r
	overflow-y: scroll;\r
	padding-bottom: 16px;\r
	box-shadow: 0 0.0625em 0.0625em rgba(0,0,0,.55), 0 0.125em 0.5em rgba(0,0,0,.55), inset 0 0 0 1px hsla(0,0%,100%,.1);\r
}\r
\r
.mainContent {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: start;\r
	align-items: start;\r
	padding-bottom: 16px;\r
}\r
\r
.header {\r
	display: flex;\r
	justify-content: space-between;\r
  	align-items: flex-start;\r
	height: 10vh;\r
	padding: 14px;\r
	margin-bottom: 14px;\r
}\r
\r
.header p {\r
	color: #0c0c0c;\r
    font-size: 12px;\r
}\r
.header h6 {\r
	color: #0c0c0c;\r
    font-size: 20px;\r
	font-weight: 600;\r
}\r
\r
.closePopup {\r
	cursor: pointer;\r
	width: 30px;\r
	height: 30px;\r
}\r
\r
.walletCard {\r
	background-color: var(--loyalty_popup_theme_background, #000);\r
    padding: 12px;\r
    border-radius: 16px;\r
    box-shadow: none;\r
    margin: 0 14px;\r
    width: calc(100% - 32px);\r
	display: flex;\r
	justify-content: space-between;\r
	cursor: pointer;\r
}\r
\r
.coinCard img {\r
	width: 20px;\r
	height: 20px;\r
}\r
\r
.coinCard {\r
	background-color: #fff;\r
    border-radius: 4px;\r
    margin: 0 6px;\r
    padding: 5px 10px;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
	gap: 8px;\r
}\r
\r
.coinCard h1 {\r
    font-size: 18px;\r
	font-weight: 600;\r
	color: var(--loyalty_popup_theme_background, #000);\r
}\r
\r
.badgeCard img {\r
	height: 12px;\r
	width: 12px;\r
}\r
\r
.badgeCard p {\r
	font-size: 11px;\r
}\r
.badgeCard {\r
	display: flex;\r
	justify-content: left;\r
	align-items: center;\r
	color: white;\r
	gap: 4px;\r
}\r
\r
.walletCardText {\r
	color: white;\r
	font-size: 14px;\r
	font-weight: bold;\r
}\r
\r
.inviteCard {\r
	background: linear-gradient(100.56deg,#495fd9 0,#5285e8 57.67%,#5aa6f4 104.69%);\r
    margin: 0 20px;\r
    border-radius: 8px;\r
    padding: 12px;\r
}\r
\r
.inviteTextSection {\r
	color: white;\r
	display: flex;\r
	align-items: start;\r
	margin-bottom: 18px;\r
	gap: 8px;\r
}\r
\r
.inviteTextContainer {\r
	padding-top: 8px;\r
}\r
\r
.inviteTextContainer h2 {\r
	font-weight: 700;\r
	font-size: 20px;\r
	margin-bottom: 10px;\r
	line-height: 16px;\r
}\r
\r
.inviteTextContainer p {\r
	font-weight: 400;\r
    font-size: 12px;\r
	line-height: 14px;\r
}\r
\r
.invitebtn {\r
	width: 100%;\r
    background: #fff;\r
    border-radius: 4px;\r
    border: none;\r
    padding: 8px;\r
    color: #3e56d2;\r
    font-weight: 700;\r
    font-size: 12px;\r
    text-align: center;\r
    cursor: pointer;\r
	line-height: normal;\r
	font-family: Inter, sans-serif;\r
}\r
\r
.couponCard {\r
	border-radius: 12px;\r
	color: var(--loyalty_popup_theme_background, #000);\r
	font-size: 14px;\r
	line-height: 20px;\r
	cursor: pointer;\r
	width: 120px;\r
}\r
\r
.couponCardDesc {\r
	padding: 8px;\r
	background: #f4f4f4;\r
	border-radius: 8px;\r
	box-shadow: 0 -4px 10px rgba(0,0,0,.1);\r
	position: relative;\r
	top: -12px;\r
	min-width: 120px;\r
	font-size: 13px;\r
	font-weight: normal;\r
	display: flex;\r
	flex-direction: column;\r
	gap: 4px;\r
}\r
\r
.couponImg {\r
	border-radius: 8px 8px 0 0;\r
	width: 120px;\r
}\r
\r
.couponCardPrice {\r
	display: flex;\r
	align-items: center;\r
	justify-content: start;\r
	gap: 4px;\r
	font-size: 14px;\r
	font-weight: 400;\r
	margin-top: 8px;\r
}\r
\r
.couponFloatingLabel {\r
	position: absolute;\r
	top: -10px;\r
  	right: 10px;\r
    background: var(--loyalty_popup_theme_background,#000);\r
    color: #fff;\r
    width: 40px;\r
    height: 24px;\r
    text-align: center;\r
    line-height: 24px;\r
    font-weight: 600;\r
    font-size: 12px;\r
    border-radius: 4px;\r
}\r
\r
.couponText {\r
	padding-top: 8px;\r
	font-size: 13px;\r
}\r
\r
.couponCardPrice img {\r
	width: 14px;\r
	height: 14px;\r
}\r
\r
.viewAllCouponsContainer {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: 16px;\r
	padding-bottom: 6px;\r
	width: 100%;\r
}\r
\r
.viewAllCouponsContainer h1 {\r
	font-size: 20px;\r
    font-weight: 700;\r
}\r
\r
.viewAllCouponsContainer a {\r
	cursor: pointer;\r
    font-weight: 500;\r
    font-size: 12px;\r
}\r
.gamesArenaContainer {\r
	padding: 8px 16px;\r
	margin-top: 16px;\r
}\r
.gamesArenaContainer h1 {\r
	font-size: 20px;\r
    font-weight: 700;\r
}\r
.gamesArenaContainer p {\r
	font-size: 12px;\r
    font-weight: 500;\r
	line-height: 14px;\r
}\r
\r
.gamesCard {\r
	background-color: #efefef;\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	padding: 8px;\r
	padding-top: 8px;\r
	padding-top: 30px;\r
	border-radius: 8px;\r
	position: relative;\r
	bottom: 20px;\r
	min-width: 126px;\r
	}\r
\r
.gamesCardImg {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	z-index: 2;\r
	position: relative;\r
}\r
\r
.gamesCardImg img {\r
	min-height: 66px;\r
}\r
\r
.coinBox {\r
	background: #fff;\r
	border-radius: 4px;\r
	display: flex;\r
	justify-content: center;\r
	padding: 4px 14px;\r
	align-items: center;\r
	margin-bottom: 8px;\r
	color: var(--loyalty_popup_theme_background, #000);\r
	font-size: 14px;\r
	gap: 4px;\r
}\r
\r
.gamesCardBtn {\r
	background: var(--loyalty_popup_theme_background, #000);\r
    border-radius: 4px;\r
    font-weight: 700;\r
    font-size: 12px;\r
    text-align: center;\r
    color: #fff;\r
    width: 100%;\r
    padding: 8px;\r
    cursor: pointer;\r
	border: none;\r
}\r
\r
.gamesCardTitle {\r
	font-weight: 600;\r
    font-size: 12px;\r
	text-align: center;\r
	color: black;\r
}\r
\r
.gamesCardDesc {\r
	font-weight: 500;\r
    font-size: 10px;\r
    margin-bottom: 8px;\r
}\r
\r
.gamesHorizontalList {\r
	height: fit-content;\r
	padding: 8px 16px;\r
	display: flex;\r
	gap: 16px;\r
	width: 100%;\r
}\r
\r
/* Invite and Earn */\r
\r
.inviteWhatsappBtn {\r
	height: 40px;\r
    width: 96%;\r
    background-color: #faa;\r
    border-radius: 4px;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
	border: none;\r
}\r
\r
.inviteWhatsappBtn p {\r
	font-size: 14px;\r
	font-weight: 500;\r
}\r
\r
.inviteRoundedBtn {\r
	width: 40px;\r
    height: 40px;\r
    background-color: #faa;\r
    border-radius: 50%;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
	border: none;\r
}\r
\r
.inviteAndEarnContainer {\r
	width: 100%;\r
	padding: 22px;\r
	border-radius: 16px;\r
	transition: all 0.5s;\r
	-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r
	animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;	\r
}\r
\r
.overlay{\r
	position: absolute;\r
	display: none;\r
	top: 0;\r
	z-index: 99;\r
	height: 100%;\r
	width: 100%;\r
	background-color: rgba(255, 255, 255, 0.6);\r
	flex-direction: column;\r
	justify-content: end;\r
}\r
\r
.dashedDivider {\r
	border: none;\r
    height: 1px;\r
    background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);\r
    margin: 20px 0 16px 0;\r
}\r
\r
.inviteEarnTextContainer {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	font-weight: 400;\r
    font-size: 14px;\r
    color: #acacac;\r
    margin: 8px 0px;\r
    text-align: center;\r
}\r
\r
.inviteAndEarn {\r
	display: flex;\r
	justify-content: flex-start;\r
	align-items: center;\r
	gap: 16px;\r
}\r
\r
.inviteAndEarn h2 {\r
	font-weight: 700;\r
    font-size: 30px;\r
}\r
\r
.inviteAndEarnMessage h4 {\r
	text-align: center;\r
    font-weight: 500;\r
    font-size: 16px;\r
    line-height: 30px;\r
    margin: 20px 0!important;\r
}\r
\r
.inviteLinkContainer {\r
	padding: 12px;\r
    background: #faa;\r
    border-radius: 4px;\r
    border: 1px dashed var(--loyalty_popup_theme_background, #000);;\r
    font-size: 16px;\r
    font-weight: 700;\r
    display: flex;\r
	justify-content: space-between;\r
    align-items: center;\r
}\r
\r
.couponCodeContainer {\r
	padding: 12px;\r
    background: #faa;\r
    border-radius: 4px;\r
    border: 1px dashed var(--loyalty_popup_theme_background, #000);;\r
    font-size: 16px;\r
    font-weight: 700;\r
    display: flex;\r
	width: 100%;\r
	justify-content: center;\r
    align-items: center;\r
	position: relative;\r
}\r
\r
.couponCodeContainer img {\r
	position: absolute;\r
	right: 20px;\r
	cursor: pointer;\r
}\r
\r
.inviteLinkContainer p {\r
	font-size: 14px;\r
}\r
\r
.inviteLinkContainer img {\r
	max-width: 16px;\r
	cursor: pointer;\r
}\r
\r
.sendInvitesBtnContainer, .inviteWhatsappBtn {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	gap: 8px;\r
}\r
\r
.closeInviteContainer {\r
	display: flex;\r
	justify-content: end;\r
	align-items: center;\r
}\r
\r
.couponUnlockBtn {\r
	background-color: var(--loyalty_popup_theme_background, #000);\r
    color: #fff;\r
    padding: 11px 0;\r
    border-radius: 8px;\r
    font-family: Inter,sans-serif;\r
    font-weight: 700;\r
    cursor: pointer;\r
    width: 100%;\r
    font-size: 14px;\r
	border: none;\r
}\r
\r
\r
.slide-in-bottom {\r
	-webkit-animation: slide-in-bottom 0.5s ease-in-out both;\r
	animation: slide-in-bottom 0.5s ease-in-out both;\r
}\r
\r
.couponOverlayContainer {\r
	display: flex;\r
	justify-content: start;\r
	align-items: center;\r
	gap: 8px;\r
}\r
\r
.couponOverlayContainer h2 {\r
	font-size: 30px;\r
}\r
\r
.couponContainer {\r
	background-color: white;\r
	width: 100%;\r
	padding: 16px;\r
	border-radius: 16px;\r
	box-shadow: 0 -4px 50px rgba(0,0,0,.25);\r
}\r
\r
.showAllCouponsList {\r
	display: flex;\r
	justify-content: start;\r
	align-items: start;\r
	gap: 16px;\r
	scrollbar-width: none;\r
	overflow-x: scroll;\r
	overflow-y: hidden;\r
	padding: 0 16px;\r
}\r
\r
/* .pointsActivityClass {\r
    height: 100%;\r
	width: 100%;\r
	background-color: white;\r
	position: absolute;\r
	top: 0px;\r
	z-index: 999;\r
	overflow-x: hidden;\r
	overflow-y: scroll;\r
	scrollbar-width: none;\r
} */\r
\r
.pointsActivityClass h4 {\r
	margin-left: 22px;\r
    font-size: 20px;\r
}\r
\r
.transaction-log-container {\r
	margin: 24px 20px;\r
    padding: 6px;\r
    background: #fff;\r
    border-radius: 8px;\r
    border: 1px solid rgb(231, 231, 231);\r
    border-radius: 6px;\r
    box-shadow: 1px 2px 2px rgb(231, 231, 231);\r
}\r
\r
.transaction-log-container .log-body {\r
    padding: 8px 18px;\r
}\r
\r
.transaction-log-container .log-body .amount {\r
    font-size: 18px;\r
    font-weight: 600;\r
}\r
\r
.transaction-log-container .log-header {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	border-bottom: 1px solid rgb(231, 231, 231);\r
	padding: 8px 18px;\r
	font-size: 14px;\r
}\r
\r
.transaction-log-container .log-header .log-type {\r
	border-radius: 4px;\r
	padding: 4px 8px;\r
	font-weight: 600;\r
}\r
\r
.transaction-log-container .log-header .log-type.credited {\r
	background-color: rgb(209, 255, 217);\r
	color: rgb(30, 175, 109);\r
	font-size: 12px;\r
}\r
\r
.transaction-log-container .log-header .log-type.debited {\r
	background-color: rgba(181, 0, 0, 0.1);\r
	color: rgb(181, 0, 0);\r
	font-size: 12px;\r
}\r
\r
.inviteAndEarnContainer {\r
	background-color: white;\r
	max-width: 360px;\r
	max-height: 580px;\r
	width: 85vw;\r
	height: fit-content;\r
	bottom: 2px;\r
	z-index: 999;\r
	background-color: white;\r
	box-shadow: 3px 3px 90px 6px #ccc;\r
}\r
\r
.shareTextContainer {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	font-weight: 400;\r
	font-size: 14px;\r
	color: #acacac;\r
	text-align: center;\r
	margin-bottom: 12px;\r
}\r
\r
.pointsActivityHeader {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding-right: 12px;\r
  	padding-top: 12px;\r
}\r
\r
.pointsActivityHeader img {\r
	width: 30px;\r
	height: 30px;\r
	cursor: pointer;\r
}\r
\r
.showGamesOverlay {\r
	background-color: white;\r
	width: 100%;\r
	height: 100%;\r
	position: absolute;\r
	display: flex;\r
	flex-direction: column;\r
	top: 0;\r
}\r
\r
.unlockTextContainer {\r
	font-weight: 700;\r
    font-size: 16px;\r
    margin: 22px;\r
	text-align: center;\r
}\r
\r
.unlockText h5 {\r
	font-weight: 700;\r
    font-size: 16px;\r
    margin: 16px 0;\r
}\r
\r
.crossImg {\r
	display: flex;\r
	justify-content: end;\r
	align-items: center;\r
}\r
\r
.crossImg img {\r
	width: 24px;\r
	height: 24px;\r
	cursor: pointer;\r
}\r
\r
.unlockDesc p {\r
	font-weight: 500;\r
	font-size: 13px;\r
	line-height: 16px;\r
}\r
\r
.showGamesHeader {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: 8px 16px;\r
}\r
\r
.showGamesHeader img {\r
	width: 30px;\r
	height: 30px;\r
	cursor: pointer;\r
}\r
.showGamesHeader h2 {\r
	font-size: 20px;\r
}\r
\r
.showGamesTab {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: 0px 16px;\r
}\r
\r
.showGamesTab h2 {\r
	font-size: 18px;\r
}\r
\r
.gamesTab {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	gap: 8px;\r
}\r
\r
.walletCoinsBox {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	background-color: var(--loyalty_popup_theme_background, #000);\r
	padding: 2px 8px;\r
	border-radius: 50px;\r
	gap: 4px;\r
	width: fit-content;\r
}\r
\r
.walletCoinsBox p {\r
	color: white;\r
	font-size: 20px;\r
}\r
\r
.walletCoinsBox img {\r
	width: 16px;\r
	height: 16px;\r
}\r
\r
.showGamesCards {\r
	background-color: white;\r
	display: flex;\r
	justify-content: start;\r
	align-items: center;\r
	padding: 0px 16px;\r
	gap: 16px;\r
}\r
\r
.viewAllCoupons {\r
	background-color: white;\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.viewAllCouponsHeader {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: 8px 16px;\r
}\r
\r
.viewAllCouponsHeader h4 {\r
	font-size: 20px;\r
	font-weight: 700;\r
}\r
.viewAllCouponsHeader img {\r
	width: 30px;\r
	height: 30px;\r
	cursor: pointer;\r
}\r
\r
.viewAllCouponTabText {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	gap: 8px;\r
}\r
\r
.viewAllCouponTabText h4 {\r
	cursor: pointer;\r
	color: #959595;\r
}\r
\r
.viewAllCouponsTab {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: 8px 16px;\r
}\r
\r
.viewAllFeaturedComponent h3 {\r
	margin-left: 16px;\r
}\r
.reedemfcCoins {\r
	padding: 16px;\r
}\r
.reedemfcCoins h5, .exploreCoupons h5{\r
	font-weight: 700;\r
    font-size: 16px;\r
}\r
.reedemfcCoins p{\r
	/* margin-top: 8px; */\r
    font-weight: 400;\r
    font-size: 12px;\r
	line-height: 14px;\r
}\r
\r
\r
.reedemfcCoinsCard {\r
	background-color: #f4f4f4;\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	gap: 8px;\r
	padding: 8px;\r
	border-radius: 8px;\r
	cursor: pointer;\r
}\r
.exploreCouponCard {\r
	background-color: #f4f4f4;\r
	display: flex;\r
	justify-content: start;\r
	align-items: center;\r
	padding: 16px;\r
	border-radius: 8px;\r
	cursor: pointer;\r
}\r
.exploreCoupons {\r
	padding: 16px;\r
}\r
\r
.shipImgBox {\r
	border-right: 1px dashed #959595;\r
	padding-right: 8px;\r
    margin-right: 8px\r
}\r
\r
.exploreCouponCardText {\r
	font-weight: 700;\r
    font-size: 14px;\r
}\r
\r
.exploreCouponCardText img {\r
	width: 12px;\r
	height: 12px;\r
}\r
\r
.yourCouponsCardMainContainer {\r
	padding: 16px;\r
}\r
\r
.yourCouponsCardContainer {\r
	background-color: #f4f4f4;\r
	border-radius: 8px;\r
	display: flex;\r
	margin-top: 16px;\r
}\r
\r
.youCouponCardLeft, .youCouponCardRight {\r
	padding: 16px;\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
}\r
\r
.youCouponCardLeft {\r
	border-right: 1px dashed #959595;\r
	align-items: center;\r
}\r
\r
.youCouponCardRight {\r
	align-items: start;\r
}\r
\r
.youCouponCardLeft h5 {\r
	font-size: 24px;\r
}\r
\r
.youCouponCardLeft p {\r
	font-size: 14px;\r
}\r
\r
\r
.youCouponCardRight h4, .yourCouponCode {\r
	font-weight: bold;\r
	font-size: 13px;\r
	color: var(--loyalty_popup_theme_background, #000);\r
}\r
\r
.youCouponCardRight p {\r
	color: #acacac;\r
	font-size: 12px;\r
}\r
\r
.yourCouponsActiveTab {\r
	display: flex;\r
	justify-content: start;\r
	align-items: center;\r
	gap: 30px;\r
}\r
\r
.yourCouponsActiveTab div {\r
	background: #d9d9d9;\r
    border-radius: 8px;\r
    padding: 8px;\r
    font-weight: 700;\r
    font-size: 14px;\r
    cursor: pointer;\r
}\r
\r
.couponNotFound {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	margin-top: 16px;\r
}\r
\r
.couponNotFound p{\r
	font-weight: 400;\r
    font-size: 12px;\r
}\r
\r
.couponNotFound h4 {\r
	font-weight: 700;\r
    font-size: 20px;\r
}\r
\r
.redeemCoinBox {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	gap: 8px;\r
}\r
\r
.redeemHeading h3 {\r
	font-weight: 700;\r
    font-size: 14px;\r
}\r
\r
.redeemText p {\r
	font-weight: 400;\r
    font-size: 14px;\r
}\r
\r
.redeemCoinMainContainer {\r
	width: 100%;\r
	height: 100%;\r
    background-color: #ffffff8c;\r
}\r
\r
.redeemCoinContainer {\r
	background-color: white;\r
	position: absolute;\r
	padding: 16px;\r
	width: 100%;\r
	height: fit-content;\r
	bottom: 0px;\r
	border-radius: 8px;\r
	box-shadow: 0px -44px 60px -11px rgba(194,194,194,1);\r
	-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r
	animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;	\r
}\r
\r
.redeemCloseContainer {\r
	display: flex;\r
	justify-content: end;\r
	align-items: center;\r
}\r
\r
.redeemVoucherMain {\r
	display: flex;\r
	justify-content: start;\r
	align-items: center;\r
	gap: 16px;\r
}\r
\r
.redeemVoucherMain h2 {\r
	font-weight: 700;\r
    font-size: 30px;\r
}\r
.redeemRangeContainer {\r
	padding: 0px 32px;\r
}\r
\r
.redeemRangeContainer p {\r
	text-align: center;\r
}\r
\r
.redeemRangeContainer, .redeemRangeContainer input {\r
	width: 100%;\r
}\r
\r
.redeemRangeContainer input {\r
	accent-color: #959595;\r
}\r
\r
.screenContainer {\r
	background-color: white;\r
}\r
\r
.screenHeader {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: 8px 16px;\r
}\r
\r
.screenHeader h2 {\r
	font-weight: 700;\r
    font-size: 20px;\r
}\r
\r
.screenHeader img {\r
	width: 30px;\r
	height: 30px;\r
}\r
\r
.walletCoinContainer {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
}\r
\r
.walletCoinContainer h4 {\r
	font-weight: 700;\r
    font-size: 20px\r
}\r
\r
\r
.spinWheelBottom h4 {\r
	font-weight: 700;\r
	font-size: 16px;\r
	text-align: center;\r
}\r
\r
.spinWheelBottom hr {\r
	width: 100%;\r
	border: none;\r
	height: 1px;\r
	background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);\r
}\r
\r
.spinWheelBottom {\r
	padding: 16px;\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	gap: 8px;\r
}\r
\r
#fw-chart-spin-wheel svg {\r
	transform: rotate(-90deg);\r
}\r
\r
.lockedIcon {\r
	position: absolute;\r
	top: 20px;\r
	z-index: 2;\r
	top: 51%;\r
  	left: 37%;\r
}\r
	\r
.lockedIcon img {\r
	height: 115px;\r
	width: 115px;\r
}\r
\r
.spinWinContainer {\r
	position: absolute;\r
    width: 100%;\r
	height: 100%;\r
    overflow: hidden;\r
    transition: height .5s ease;\r
    top: 0;\r
    left: 0;\r
    background: #ffffff7d;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
	z-index: 2;\r
	animation-name: movedown;\r
	animation-duration: 1s;\r
}\r
\r
.spinWinPopup {\r
	background-color: var(--loyalty_popup_theme_background, #000);\r
    color: #fff;\r
    padding: 30px 25px;\r
    box-shadow: 0 -4px 24px rgba(0,0,0,.12);\r
    border-radius: 12px;\r
    max-width: 90%;\r
	display: flex;\r
	flex-direction: column;\r
    justify-content: center;\r
    align-items: center;\r
	gap: 8px;\r
	-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r
	animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r
}\r
\r
.spinWinPopup h3 {\r
	font-size: 18px;\r
    text-align: center;\r
}\r
.spinWinPopup h3 {\r
	font-size: 20px;\r
    text-align: center;\r
}\r
.spinWinPopup p {\r
	font-size: 14px;\r
}\r
\r
.playagainbtn {\r
	width: 100%;\r
    background: #fff;\r
    color: var(--loyalty_popup_theme_background, #000);;\r
    font-family: Inter;\r
    font-size: 14px;\r
    font-weight: 600;\r
    padding: 10px;\r
    border-radius: 4px;\r
    cursor: pointer;\r
	border: none;\r
}\r
\r
.closebtn {\r
	color: #fff;\r
    background: var(--loyalty_popup_theme_background, #000);;\r
    border: 0;\r
    font-size: 14px;\r
    font-weight: 500;\r
    padding: 5px;\r
    margin: 10px;\r
    cursor: pointer;\r
}\r
\r
.scratchCardDiv {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
}\r
\r
.scratchCardDiv canvas {\r
	z-index: 2;\r
	border-radius: 8px;\r
	cursor: grabbing;\r
}\r
\r
.scratchCardDiv h4 {\r
	position: absolute;\r
	top: 45%;\r
}\r
\r
.scratchCardDiv img {\r
	position: absolute;\r
	z-index: 3;\r
}\r
\r
.copied {\r
	background-color: green;\r
  padding: 8px;\r
  position: absolute;\r
  top: 50%;\r
  left: 40%;\r
  border-radius: 12px;\r
  color: white;\r
  font-weight: bold;\r
  font-size: 14px;\r
}\r
\r
.coinIcon { \r
    background-image: var(--coin-svg-url);\r
	width: 20px;\r
	height: 20px;\r
	background-size: 100% 100%;\r
}\r
\r
.logoutWalletCard {\r
	background-color: var(--loyalty_popup_theme_background, #000);\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
    padding: 12px;\r
    border-radius: 16px;\r
    box-shadow: none;\r
    margin: 0 14px;\r
    width: auto;\r
}\r
.walletLogoutBtn {\r
	background-color: #fff;\r
    border-radius: 4px;\r
    margin: 0 6px;\r
    padding: 5px 10px;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
	cursor: pointer;\r
}\r
\r
.logoutWallerCardHeading {\r
	color: white;\r
}\r
\r
.logoutWalletCard p {\r
	color: var(--loyalty_popup_theme_background, #000);\r
	font-size: 20px;\r
	font-weight: 600;\r
}\r
\r
.exploreCouponText {\r
	display: flex;\r
	justify-content: start;\r
	align-items: center;\r
	gap: 4px;\r
}\r
\r
.exploreCouponText div {\r
	width: 16px;\r
	height: 16px;\r
}\r
\r
.alert {\r
	position: absolute;\r
	bottom: 50%;\r
	left: 50%;\r
	z-index: 999;\r
	background: #160b0b;\r
	color: #f4c7c7;\r
	font-weight: 400;\r
	font-size: 14px;\r
	border-radius: 4px;\r
	padding: 8px 22px;\r
	transition: 0.5s all ease;\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	transform: translate(-50%, -50%);\r
	width: 80%;\r
	animation-name: fade-in;\r
	animation-duration: 0.5s;\r
}\r
\r
.alert svg.fw-wallet-alert-popup-error {\r
	width: 22px;\r
	height: 22px;\r
	fill: rgb(244, 67, 54);\r
	margin-right: 8px;\r
}\r
\r
.referralPopupContainer {\r
	background-color: var(--loyalty_popup_theme_background, #000);\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: center;\r
	align-items: center;\r
	position: absolute;\r
	top: 50%;\r
	left: 50%;\r
	transform: translate(-50%, -50%);\r
	max-width: 500px;\r
	min-height: fit-content;\r
	padding: 16px;\r
	border-radius: 16px;\r
	z-index: 999;\r
	animation-name: fade-in;\r
	animation-duration: 1s;\r
	margin: 18px;\r
	-webkit-box-shadow: 0px 0px 116px -13px rgba(0,0,0,0.75);\r
	-moz-box-shadow: 0px 0px 116px -13px rgba(0,0,0,0.75);\r
	box-shadow: 0px 0px 50px -13px rgba(0,0,0,0.75);\r
}\r
\r
.referralPopupContainer img {\r
	width: 28px;\r
	height: 28px;\r
	position: absolute;\r
	top: 14px;\r
	right: 14px;\r
	background-color: white;\r
	border-radius: 8px;\r
}\r
.referralPopupContainer h2 {\r
	font-size: 28px;\r
	color: white;\r
}\r
\r
.referralPopupContainer p {\r
	font-size: 16px;\r
	text-align: center;\r
	color: white;\r
}\r
.referralPopupContainer span {\r
	color: gold;\r
}`;
  var t, r, u, i, o$1 = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
  function d(t2, u2) {
    l$1.__h && l$1.__h(r, t2, o$1 || u2), o$1 = 0;
    var i2 = r.__H || (r.__H = { __: [], __h: [] });
    return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
  }
  function h(n2) {
    return o$1 = 1, s(B, n2);
  }
  function s(n2, u2, i2) {
    var o2 = d(t++, 2);
    if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B(void 0, u2), function(n3) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r, !r.u)) {
      var f2 = function(n3, t2, r2) {
        if (!o2.__c.__H)
          return true;
        var u3 = o2.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u3.every(function(n4) {
          return !n4.__N;
        }))
          return !c2 || c2.call(this, n3, t2, r2);
        var i3 = false;
        return u3.forEach(function(n4) {
          if (n4.__N) {
            var t3 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
          }
        }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
      };
      r.u = true;
      var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
      r.componentWillUpdate = function(n3, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n3, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n3, t2, r2);
      }, r.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function p(u2, i2) {
    var o2 = d(t++, 3);
    !l$1.__s && z(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
  }
  function b() {
    for (var t2; t2 = f.shift(); )
      if (t2.__P && t2.__H)
        try {
          t2.__H.__h.forEach(k), t2.__H.__h.forEach(w), t2.__H.__h = [];
        } catch (r2) {
          t2.__H.__h = [], l$1.__e(r2, t2.__v);
        }
  }
  l$1.__b = function(n2) {
    r = null, e && e(n2);
  }, l$1.__r = function(n2) {
    a && a(n2), t = 0;
    var i2 = (r = n2.__c).__H;
    i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
    })) : (i2.__h.forEach(k), i2.__h.forEach(w), i2.__h = [], t = 0)), u = r;
  }, l$1.diffed = function(t2) {
    v && v(t2);
    var o2 = t2.__c;
    o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o2.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
    })), u = r = null;
  }, l$1.__c = function(t2, r2) {
    r2.some(function(t3) {
      try {
        t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || w(n2);
        });
      } catch (u2) {
        r2.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r2 = [], l$1.__e(u2, t3.__v);
      }
    }), l && l(t2, r2);
  }, l$1.unmount = function(t2) {
    m && m(t2);
    var r2, u2 = t2.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
      try {
        k(n2);
      } catch (n3) {
        r2 = n3;
      }
    }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
  };
  var g = "function" == typeof requestAnimationFrame;
  function j(n2) {
    var t2, r2 = function() {
      clearTimeout(u2), g && cancelAnimationFrame(t2), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    g && (t2 = requestAnimationFrame(r2));
  }
  function k(n2) {
    var t2 = r, u2 = n2.__c;
    "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
  }
  function w(n2) {
    var t2 = r;
    n2.__c = n2.__(), r = t2;
  }
  function z(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n2[r2];
    });
  }
  function B(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }
  var _ = 0;
  function o(o2, e2, n2, t2, f2, l2) {
    var s2, u2, a2 = {};
    for (u2 in e2)
      "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
    var i2 = { type: o2, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
    if ("function" == typeof o2 && (s2 = o2.defaultProps))
      for (u2 in s2)
        void 0 === a2[u2] && (a2[u2] = s2[u2]);
    return l$1.vnode && l$1.vnode(i2), i2;
  }
  const WalletCard = ({
    walletAmount,
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        onClick,
        class: "walletCard",
        children: [o("div", {
          children: [o("p", {
            class: "walletCardText",
            children: ["My ", window.fc_loyalty_vars.coin_name, " Coins"]
          }), o("div", {
            class: "badgeCard",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/silver-tier-icon.png",
              alt: ""
            }), o("p", {
              children: "Silver"
            })]
          })]
        }), o("div", {
          class: "coinCard",
          children: [o("div", {
            class: "coinIcon"
          }), o("h1", {
            children: walletAmount
          })]
        })]
      })
    });
  };
  const InviteCard = ({
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "inviteCard",
        children: [o("div", {
          class: "inviteTextSection",
          children: [o("div", {
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/rupee-icon.png",
              alt: ""
            })
          }), o("div", {
            class: "inviteTextContainer",
            children: [o("h2", {
              children: "Invite & Earn"
            }), o("p", {
              children: ["Get 200 ", window.fc_loyalty_vars.coin_name, " coins every time you invite a friend to try loyalty"]
            })]
          })]
        }), o("button", {
          onClick,
          class: "invitebtn",
          children: "Share Invite"
        })]
      })
    });
  };
  const Loading = () => {
    return o(k$1, {
      children: o("main", {
        class: "loading-screen",
        children: [o("svg", {
          class: "spinner",
          width: "50px",
          height: "50px",
          viewBox: "0 0 66 66",
          xmlns: "http://www.w3.org/2000/svg",
          children: [o("circle", {
            class: "path",
            fill: "transparent",
            "stroke-width": "2",
            cx: "33",
            cy: "33",
            r: "30",
            stroke: "url(#gradient)"
          }), o("linearGradient", {
            id: "gradient",
            children: [o("stop", {
              offset: "50%",
              "stop-color": "#009cdf",
              "stop-opacity": "1"
            }), o("stop", {
              offset: "65%",
              "stop-color": "#009cdf",
              "stop-opacity": ".5"
            }), o("stop", {
              offset: "100%",
              "stop-color": "#009cdf",
              "stop-opacity": "0"
            })]
          }), o("svg", {
            class: "spinner-dot dot",
            width: "5px",
            height: "5px",
            viewBox: "0 0 66 66",
            xmlns: "http://www.w3.org/2000/svg",
            x: "37",
            y: "1.5",
            children: o("circle", {
              class: "path",
              fill: "#009cdf",
              cx: "33",
              cy: "33",
              r: "30"
            })
          })]
        }), o("p", {
          children: "Loading, please wait..."
        })]
      })
    });
  };
  const fetchApi = async (route, method, data) => {
    const resp = await fetch(`${WALLET_API_URI}${route}`, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...data
      })
    });
    const response = await resp.json();
    return response;
  };
  const Alert = ({
    message
  }) => {
    return o("div", {
      class: "alert",
      children: [o("svg", {
        focusable: "false",
        class: "fw-wallet-alert-popup-error",
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        "data-testid": "ErrorOutlineIcon",
        children: o("path", {
          d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        })
      }), o("p", {
        children: `${message || "Something went wrong"}`
      })]
    });
  };
  const CouponOverlay = ({
    couponData,
    onClick,
    customerDetails
  }) => {
    const [couponCode, setCouponCode] = h("");
    const [isCouponUnlocked, setIsCouponUnlocked] = h(false);
    const [error, setError] = h(false);
    const [loading, setLoading] = h(false);
    const showError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3e3);
    };
    const fetchCouponCode = async () => {
      var _a;
      try {
        setLoading(true);
        console.log("coupon Overlay couponData", couponData);
        const response = await fetchApi("/get-code", "post", {
          ...customerDetails,
          couponAmount: couponData == null ? void 0 : couponData.amount
        });
        if ((response == null ? void 0 : response.status) !== "success") {
          console.log("failed overlay");
          showError();
          return;
        }
        setCouponCode((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.coupon_code);
        setIsCouponUnlocked(true);
      } catch (error2) {
        console.log("error in coupon card overlay");
      } finally {
        setLoading(false);
      }
    };
    return loading ? o("div", {
      className: "loader",
      children: o(Loading, {})
    }) : o(k$1, {
      children: [o("div", {
        class: "unlockCouponContainer slide-in-bottom",
        children: o("div", {
          class: "couponContainer",
          children: [o("div", {
            class: "crossImg",
            children: o("img", {
              onClick,
              src: "https://media.farziengineer.co/farziwallet/cross.png",
              alt: ""
            })
          }), o("div", {
            class: "couponOverlayContainer",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/voucher-icon.png",
              alt: ""
            }), o("h2", {
              children: couponData == null ? void 0 : couponData.heading
            })]
          }), o("div", {
            class: "unlockText",
            children: o("h5", {
              children: couponData == null ? void 0 : couponData.title
            })
          }), o("div", {
            class: "unlockDesc",
            children: o("p", {
              children: couponData == null ? void 0 : couponData.description
            })
          }), o("div", {
            children: o("hr", {
              class: "dashedDivider"
            })
          }), o("div", {
            class: "unlockTextContainer",
            children: o("h4", {
              children: !isCouponUnlocked ? `Unlock for ${couponData == null ? void 0 : couponData.amount} ${window.fc_loyalty_vars.coin_name} Coins` : "Use this code at checkout"
            })
          }), !isCouponUnlocked && o("div", {
            children: !loading && o("button", {
              onClick: fetchCouponCode,
              class: "couponUnlockBtn",
              children: "Tap to Unlock"
            })
          }), isCouponUnlocked && o("div", {
            class: "couponCodeContainer",
            children: [o("p", {
              children: couponCode
            }), o("img", {
              src: "https://media.farziengineer.co/farziwallet/copy-icon.png",
              alt: ""
            })]
          })]
        })
      }), error && o(Alert, {})]
    });
  };
  const InviteAndEarnOverlay = ({
    closeOverlay,
    customerDetails
  }) => {
    const [referralData, setReferralData] = h({
      referral_code: "",
      path: ""
    });
    const [showCopied, setShowCopied] = h(false);
    p(() => {
      try {
        const fetchReferralCode = async () => {
          const resp = await fetchApi("/get-referral-code", "post", customerDetails);
          console.log(resp == null ? void 0 : resp.data);
          setReferralData(resp == null ? void 0 : resp.data);
        };
        fetchReferralCode();
      } catch (error) {
        console.log("error in inviteEarn");
      }
    }, []);
    const copyReferralLinkFunc = () => {
      setShowCopied(true);
      navigator.clipboard.writeText(window.location.href.slice(0, -1) + referralData.path);
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    return o(k$1, {
      children: o("div", {
        class: "inviteAndEarnContainer",
        children: [o("div", {
          onClick: closeOverlay,
          class: "closeInviteContainer",
          children: o("img", {
            width: 30,
            src: "https://media.farziengineer.co/farziwallet/cross.png",
            alt: ""
          })
        }), o("div", {
          class: "inviteAndEarn",
          children: [o("img", {
            src: "https://media.farziengineer.co/farziwallet/invite-earn.png",
            alt: ""
          }), o("h2", {
            children: "Invite & Earn"
          })]
        }), o("div", {
          class: "inviteAndEarnMessage",
          children: o("h4", {
            children: ["Every time you successfully refer friend. You get 200 ", window.fc_loyalty_vars.coin_name, " Coins & they get 100 ", window.fc_loyalty_vars.coin_name, " Coins"]
          })
        }), o("div", {
          class: "inviteEarnTextContainer",
          children: o("p", {
            children: "copy referral link"
          })
        }), showCopied && o("div", {
          class: "copied",
          children: "copied"
        }), o("div", {
          class: "inviteLinkContainer",
          children: [o("p", {
            children: [(window.location.href.slice(0, -1) + referralData.path).substring(0, 29), "..."]
          }), o("img", {
            onClick: copyReferralLinkFunc,
            src: "https://media.farziengineer.co/farziwallet/copy-icon.png",
            alt: ""
          })]
        }), o("div", {
          children: o("hr", {
            class: "dashedDivider"
          })
        }), o("div", {
          class: "shareTextContainer",
          children: o("p", {
            children: "or share with"
          })
        }), o("div", {
          class: "sendInvitesBtnContainer",
          children: [o("a", {
            href: `https://api.whatsapp.com/send?text=Click%20on%20the%20referral%20link%20below%20and%20get%20rewarded%20with%20100%20FC%20Coins.%20${window.location.href.slice(0, -1) + referralData.path}`,
            class: "inviteWhatsappBtn",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/whatsapp-icon.png",
              alt: ""
            }), o("p", {
              children: "Send on whatsapp"
            })]
          }), o("a", {
            href: `sms://18005555555/?body=Click%20on%20the%20referral%20link%20below%20and%20get%20rewarded%20with%20100%20FC%20Coins.%20${window.location.href.slice(0, -1) + referralData.path}`,
            class: "inviteRoundedBtn",
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/share-icon.png",
              alt: ""
            })
          })]
        })]
      })
    });
  };
  const GamesCard = ({
    btnClick,
    cardImage,
    coinImage,
    gameTitle,
    gameDesc,
    btnText,
    gamePrice
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "gamesMainContainer",
        children: [o("div", {
          class: "gamesCardImg",
          children: o("img", {
            src: cardImage,
            alt: ""
          })
        }), o("div", {
          class: "gamesCard",
          children: [o("p", {
            class: "gamesCardTitle",
            children: gameTitle
          }), o("p", {
            class: "gamesCardDesc",
            children: gameDesc
          }), o("div", {
            class: "coinBox",
            children: [o("div", {
              class: "coinIcon"
            }), o("p", {
              children: gamePrice
            })]
          }), o("button", {
            onClick: btnClick,
            class: "gamesCardBtn",
            children: btnText
          })]
        })]
      })
    });
  };
  const YourCoupons = ({
    yourCouponTab,
    customerDetails
  }) => {
    const [unlockedTab, setUnlockedTab] = h(true);
    const [redeemedTab, setRedeemedTab] = h(false);
    const [yourUnlockedCoupon, setYourUnlockedCoupon] = h([]);
    const [yourRedeemedCoupon, setYourRedeemedCoupon] = h([]);
    const [loading, setLoading] = h(false);
    p(() => {
      const fetchUnlockCoupon = async () => {
        var _a, _b;
        try {
          setLoading(true);
          const response = await fetchApi("/get-user-coupons", "post", customerDetails);
          setYourUnlockedCoupon((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.unlocked);
          setYourRedeemedCoupon((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.redeemed);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchUnlockCoupon();
    }, [customerDetails]);
    const handleYourCouponsTab = (tab) => {
      setUnlockedTab(tab === "unlock");
      setRedeemedTab(tab === "redeem");
    };
    const couponCardTabStyles = {
      borderRadius: "8px",
      padding: "8px",
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      backgroundColor: "#ff8f8f"
    };
    return loading ? o("div", {
      className: "loader",
      children: o(Loading, {})
    }) : o(k$1, {
      children: yourCouponTab && o("div", {
        class: "yourCouponsCardMainContainer",
        children: [o("div", {
          class: "yourCouponsActiveTab",
          children: [o("div", {
            style: unlockedTab && couponCardTabStyles,
            onClick: () => handleYourCouponsTab("unlock"),
            class: "unlockedTab",
            children: "Unlocked"
          }), o("div", {
            style: redeemedTab && couponCardTabStyles,
            onClick: () => handleYourCouponsTab("redeem"),
            class: "redeemedTab",
            children: "Redeemed"
          })]
        }), unlockedTab && (yourUnlockedCoupon.length !== 0 ? yourUnlockedCoupon.map((ele, idx) => o("div", {
          class: "yourCouponsCardContainer",
          children: [o("div", {
            class: "youCouponCardLeft",
            children: [o("h5", {
              children: ["₹", ele.amount]
            }), o("p", {
              children: "Voucher"
            })]
          }), o("div", {
            class: "youCouponCardRight",
            children: [o("h4", {
              children: ele.title
            }), o("p", {
              children: ["code: ", o("span", {
                class: "yourCouponCode",
                children: ele.coupon
              })]
            }), o("p", {
              children: ele.date
            })]
          })]
        }, idx)) : o("div", {
          class: "couponNotFound",
          children: [o("img", {
            src: "https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png",
            alt: ""
          }), o("h4", {
            children: "Uh-Oh!"
          }), o("p", {
            children: "Looks like you don't have any redeemed coupons"
          })]
        })), redeemedTab && (yourRedeemedCoupon.length === 0 ? o("div", {
          class: "couponNotFound",
          children: [o("img", {
            src: "https://earthrhythm-media.farziengineer.co/hosted/image_24-c96b6aaf23b2.png",
            alt: ""
          }), o("h4", {
            children: "Uh-Oh!"
          }), o("p", {
            children: "Looks like you don't have any redeemed coupons"
          })]
        }) : yourRedeemedCoupon.map((ele, idx) => o("div", {
          class: "yourCouponsCardContainer",
          children: [o("div", {
            class: "youCouponCardLeft",
            children: [o("h5", {
              children: ["₹", ele.amount]
            }), o("p", {
              children: "Voucher"
            })]
          }), o("div", {
            class: "youCouponCardRight",
            children: [o("h4", {
              children: ele.title
            }), o("p", {
              children: ["code: ", o("span", {
                class: "yourCouponCode",
                children: ele.coupon
              })]
            }), o("p", {
              children: ele.date
            })]
          })]
        }, idx)))]
      })
    });
  };
  const ShowGames = ({
    funcSetSpinWheelAmount,
    handleOverlay,
    showPlayGameScreen,
    walletAmount,
    customerDetails,
    screenDetails
  }) => {
    const [availableTab, setAvailableTab] = h(true);
    const [yourCouponTab, setYourCouponTab] = h(false);
    const [loading, setLoading] = h(false);
    const [gamesData, setGamesData] = h([]);
    p(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetchApi("/get-featured-spin-wheels", "post", customerDetails);
          setGamesData(response == null ? void 0 : response.data);
          console.log("spin card data", response == null ? void 0 : response.data);
        } catch (error) {
          console.error("Error fetching wallet data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [availableTab]);
    const handleMainTab = (mainTab) => {
      if (mainTab === "available") {
        setAvailableTab(true);
        setYourCouponTab(false);
      }
      if (mainTab === "yourcoupons") {
        setAvailableTab(false);
        setYourCouponTab(true);
      }
    };
    const activeTabStyles = {
      color: "#373737",
      borderBottom: "2px solid #373737"
    };
    const showWheelOfFortune = (amount) => {
      funcSetSpinWheelAmount(amount);
      showPlayGameScreen();
      handleOverlay();
      setAvailableTab(false);
    };
    return o(k$1, {
      children: [o("div", {
        class: "showGamesTab",
        children: [o("div", {
          class: "viewAllCouponTabText",
          children: [o("h4", {
            style: availableTab && activeTabStyles,
            onClick: () => handleMainTab("available"),
            children: "Available"
          }), o("h4", {
            style: yourCouponTab && activeTabStyles,
            onClick: () => handleMainTab("yourcoupons"),
            children: "Your Coupons"
          })]
        }), o("div", {
          class: "walletCoinsBox",
          children: [o("img", {
            class: "coinIcon",
            src: "https://media.farziengineer.co/farziwallet/coin-icon.png",
            alt: ""
          }), o("p", {
            children: walletAmount
          })]
        })]
      }), availableTab && (loading ? o("div", {
        className: "loader",
        children: o(Loading, {})
      }) : o("div", {
        class: "showGamesCards",
        children: gamesData.map((game, idx) => o(GamesCard, {
          btnClick: () => showWheelOfFortune(game.amount),
          gameDesc: game.description,
          gameTitle: game.title,
          cardImage: game.image,
          coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
          btnText: "Explore",
          gamePrice: game.amount
        }, idx))
      })), console.log(gamesData), yourCouponTab && o(YourCoupons, {
        customerDetails,
        yourCouponTab
      })]
    });
  };
  const ScreenHeader = ({
    screenTitle,
    closeScreen
  }) => {
    return o(k$1, {
      children: o("div", {
        className: "screenHeader",
        children: [o("h2", {
          children: screenTitle
        }), o("img", {
          onClick: closeScreen,
          src: "https://media.farziengineer.co/farziwallet/cross.png",
          alt: ""
        })]
      })
    });
  };
  const Screen = ({
    screenTitle,
    closeScreen,
    content
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "screenContainer",
        children: [o(ScreenHeader, {
          screenTitle: screenTitle || "check title",
          closeScreen
        }), o("div", {
          class: "screenContent",
          children: content
        })]
      })
    });
  };
  const PlayGame = ({
    shadowRoot,
    spinWheelAmount,
    walletAmount,
    showSpinGameScreen,
    customerDetails
  }) => {
    const spinAudio = new Audio("https://media.farziengineer.co/farziwallet/spinwheel.mp3");
    const [btnVisibility, setBtnVisibility] = h(false);
    const [showWinPopup, setShowWinPopup] = h(false);
    const [spinWheelRewardData, setSpinWheelRewardData] = h([]);
    const [loading, setLoading] = h(true);
    const [winData, setWinData] = h({
      win_message: "",
      win_index: -1
    });
    function winAudio() {
      const audio = new Audio("https://media.farziengineer.co/farziwallet/success.mp3");
      audio.play();
    }
    function splitStringOnLength(inputString, maxLength) {
      if (typeof inputString !== "string") {
        return [];
      }
      const words = inputString.split(" ");
      const result = [];
      let currentSubstring = "";
      for (const word of words) {
        if (currentSubstring.length + word.length + 1 <= maxLength) {
          if (currentSubstring.length > 0) {
            currentSubstring += " ";
          }
          currentSubstring += word;
        } else {
          result.push(currentSubstring);
          currentSubstring = word;
        }
      }
      if (currentSubstring.length > 0) {
        result.push(currentSubstring);
      }
      return result;
    }
    function wrap(text, width) {
      text.each(function() {
        var text2 = d3.select(this), words = splitStringOnLength(text2.text(), 12).reverse(), word, line = [], lineNumber = 1, x2 = text2.attr("x"), y2 = text2.attr("y"), dy = 0, tspan = text2.text(null).append("tspan").attr("x", x2).attr("y", y2).attr("dy", "-1em");
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text2.append("tspan").attr("x", x2).attr("y", y2).attr("dy", "1em").attr("dx", "-" + ++lineNumber + dy + "em").text(word);
          }
        }
      });
    }
    const loadD3JS = async () => {
      const res1 = await fetch("https://d3js.org/d3.v3.min.js");
      const fileContent1 = await res1.text();
      var script1 = document.createElement("script");
      script1.innerHTML = fileContent1;
      console.log("adding", script1);
      document.querySelector("body").appendChild(script1);
    };
    p(() => {
      loadD3JS().then(() => {
        console.log("the script is loaded");
        console.log(spinWheelRewardData);
      }).catch((error) => {
        console.log("error inlloading d3", error);
      });
    }, [spinWheelRewardData]);
    function drawWheel(shadowRoot2, data, unlock, winningIdx, spinnedCallback) {
      console.log("drawwheel", data);
      console.log("shadowRoot", shadowRoot2);
      console.log("screenContent", shadowRoot2.querySelector(".screenContent"));
      const ggg = shadowRoot2.querySelector(".screenContent");
      const hhh = ggg.querySelector(".spinWheelMainContainer");
      console.log("mainCOntinaire", hhh);
      console.log("spinwheel", hhh.querySelector("#fw-chart-spin-wheel"));
      (function auto() {
        const chartElement = hhh.querySelector("#fw-chart-spin-wheel");
        console.log("charele", chartElement);
        var padding = {
          top: 20,
          right: 40,
          bottom: 0,
          left: 0
        }, w2 = chartElement.offsetWidth - padding.left - padding.right, h2 = chartElement.offsetWidth - padding.top - padding.bottom, r2 = Math.min(w2, h2) / 2, rotation = 0, oldrotation = 0, picked = winningIdx, color = d3.scale.category20();
        var svg = d3.select(chartElement).append("svg").data([data]).attr("width", w2 + padding.left + padding.right).attr("height", h2 + padding.top + padding.bottom);
        console.log(w2 + padding.left + padding.right);
        console.log(h2 + padding.top + padding.bottom);
        var container = svg.append("g").attr("class", "chartholder").attr("transform", "translate(" + (w2 / 2 + padding.left) + "," + (h2 / 2 + padding.top) + ")");
        var vis = container.append("g");
        var pie = d3.layout.pie().sort(null).value(function(d2) {
          return 1;
        });
        var arc = d3.svg.arc().outerRadius(r2);
        var arcs = vis.selectAll("g.slice").data(pie).enter().append("g").attr("class", "slice");
        arcs.append("path").attr("fill", function(d2, i2) {
          return color(i2);
        }).attr("d", function(d2) {
          return arc(d2);
        });
        arcs.append("text").attr("transform", function(d2) {
          d2.innerRadius = 0;
          d2.outerRadius = r2;
          d2.angle = (d2.startAngle + d2.endAngle) / 2;
          return "rotate(" + (d2.angle * 180 / Math.PI - 90) + ")translate(" + (d2.outerRadius - 10) + ")";
        }).attr("text-anchor", "end").text(function(d2, i2) {
          return data[i2].label;
        }).call(wrap, 36);
        console.log("draw comp");
        unlock && container.on("click", spin);
        function spin(d2) {
          spinAudio.play();
          container.on("click", null);
          var totalValues = data.length;
          var x2 = winningIdx - 1;
          var anglePerValue = 360 / totalValues;
          rotation = -(x2 * anglePerValue + 360 * 3);
          vis.transition().duration(3e3).attrTween("transform", rotTween).each("end", function() {
            d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr("fill", "#111");
            oldrotation = rotation;
            spinnedCallback();
          });
        }
        svg.append("g").attr("transform", "translate(" + (w2 + padding.left + padding.right) + "," + (h2 / 2 + padding.top) + ")").append("path").attr("d", "M-" + r2 * 0.15 + ",0L0," + r2 * 0.05 + "L0,-" + r2 * 0.05 + "Z").style({
          fill: "black"
        });
        container.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 45).style({
          fill: "white",
          cursor: "pointer"
        });
        container.append("text").attr("x", 0).attr("y", 15).attr("text-anchor", "middle").text("SPIN").style({
          "font-weight": "bold",
          "font-size": "30px",
          transform: "rotate(90deg)"
        });
        function rotTween(to) {
          var i2 = d3.interpolate(oldrotation % 360, rotation);
          return function(t2) {
            return "rotate(" + i2(t2) + ")";
          };
        }
      })();
    }
    const spinCB = () => {
      winAudio();
      setTimeout(() => {
        setShowWinPopup(true);
      }, 1e3);
    };
    const fetchSpinWheelReward = async () => {
      const ggg = shadowRoot.querySelector(".screenContent");
      const hhh = ggg.querySelector(".spinWheelMainContainer");
      try {
        const response = await fetchApi(`/get-spin-wheel-rewards`, "post", {
          ...customerDetails,
          couponAmount: spinWheelAmount
        });
        console.log("spin wheel reward array", response);
        setSpinWheelRewardData(response == null ? void 0 : response.data);
        hhh.querySelector("#fw-chart-spin-wheel").innerHTML = ``;
        drawWheel(shadowRoot, response == null ? void 0 : response.data.map((item, index) => {
          return {
            label: item,
            value: index
          };
        }), false);
      } catch (error) {
        console.log("error in Playgame");
      } finally {
        setLoading(false);
      }
    };
    p(() => {
      console.log("spinwheelamt", spinWheelAmount);
      const func = async () => {
        await fetchSpinWheelReward();
      };
      func();
      console.log("amt wala useeffect", spinWheelRewardData);
    }, []);
    const playAgain = () => {
      setBtnVisibility(false);
      setShowWinPopup(false);
      fetchSpinWheelReward();
    };
    const closeWinPopup = () => {
      showSpinGameScreen("show_spin_wheel", "Wheel of Fortune");
    };
    const drawUnlockSpinWheel = async () => {
      const redeemSpinWheel = async () => {
        try {
          setLoading(true);
          const response = await fetchApi(`/redeem-spin-wheel`, "post", {
            ...customerDetails,
            couponAmount: spinWheelAmount
          });
          console.log("win spinwheel data", response == null ? void 0 : response.data);
          drawWheel;
          setWinData(response == null ? void 0 : response.data);
        } catch (error) {
          console.log("error in redeem spinwheel");
        } finally {
          setLoading(false);
        }
      };
      await redeemSpinWheel();
      const unlockSpinWheel = shadowRoot.querySelector("#fw-chart-spin-wheel");
      unlockSpinWheel.innerHTML = ``;
      setBtnVisibility(true);
    };
    p(() => {
      drawWheel(shadowRoot, spinWheelRewardData.map((item, index) => {
        return {
          label: item,
          value: index
        };
      }), true, winData.win_index, spinCB);
    }, [winData]);
    return (
      // loading ? <div className="loader"><Loading/></div> :
      o(k$1, {
        children: o("div", {
          class: "spinWheelMainContainer",
          children: [o("div", {
            class: "walletCoinContainer",
            children: [o("div", {
              class: "walletCoinsBox",
              children: [o("div", {
                class: "coinIcon"
              }), o("p", {
                children: walletAmount
              })]
            }), o("h4", {
              children: "Spin and Win"
            })]
          }), !btnVisibility && o("div", {
            class: "lockedIcon",
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/lock.png",
              alt: ""
            })
          }), o("div", {
            id: "fw-chart-spin-wheel"
          }), o("div", {
            class: "spinWheelBottom",
            children: [o("hr", {}), btnVisibility ? o("h4", {
              children: "Click 'SPIN' to start"
            }) : o("h4", {
              children: ["Unlock for 10 ", window.fc_loyalty_vars.coin_name, " Coins"]
            }), !btnVisibility && o("button", {
              onClick: drawUnlockSpinWheel,
              class: "couponUnlockBtn",
              children: "Tap to Unlock"
            })]
          }), showWinPopup && o("div", {
            class: "spinWinContainer",
            children: o("div", {
              class: "spinWinPopup",
              children: [o("h3", {
                children: "Congratulations!"
              }), o("p", {
                children: "You Won"
              }), o("h2", {
                children: winData.win_message
              }), o("button", {
                onClick: playAgain,
                class: "playagainbtn",
                children: "Play Again"
              }), o("button", {
                onClick: closeWinPopup,
                class: "closebtn",
                children: "close"
              })]
            })
          })]
        })
      })
    );
  };
  const Overlay = ({
    content
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "overlayContainer",
        children: content
      })
    });
  };
  const WalletPointsActivity = ({
    id,
    reason,
    created,
    amount,
    type
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "transaction-log-container",
        children: [o("div", {
          class: "log-header",
          children: [o("div", {
            class: "log-date",
            children: created == null ? void 0 : created.split("T")[0]
          }), o("div", {
            class: `log-type ${type === "ADD" ? "credited" : "debited"}`,
            children: type === "ADD" ? "Credited" : "Debited"
          })]
        }), o("div", {
          class: "log-body",
          children: [o("p", {
            class: "amount",
            children: o("span", {
              children: [type === "ADD" ? "+" : "-", " ", ` ${Number(amount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })}`]
            })
          }), o("p", {
            class: "reason",
            children: reason
          })]
        })]
      })
    });
  };
  const TransactionLog = ({
    walletLogs
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "pointsActivityClass",
        children: walletLogs.map((log) => o(WalletPointsActivity, {
          id: log.node.id,
          reason: log.node.reason,
          created: log.node.created,
          amount: log.node.amount,
          type: log.node.type
        }))
      })
    });
  };
  const ShowScratchCard = ({
    funcScratchCardAmount,
    handleOverlay,
    showScratchCardScreen,
    walletAmount,
    customerDetails
  }) => {
    const [availableTab, setAvailableTab] = h(true);
    const [yourCouponTab, setYourCouponTab] = h(false);
    const [loading, setLoading] = h(false);
    const [scratchCardData, setScratchCardData] = h([]);
    p(() => {
      const fetchScratchCard = async () => {
        try {
          setLoading(true);
          const response = await fetchApi("/get-featured-scratch-cards", "post", customerDetails);
          console.log("showscratchCard", response);
          setScratchCardData(response == null ? void 0 : response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchScratchCard();
    }, [availableTab]);
    const handleMainTab = (mainTab) => {
      if (mainTab === "available") {
        setAvailableTab(true);
        setYourCouponTab(false);
      }
      if (mainTab === "yourcoupons") {
        setAvailableTab(false);
        setYourCouponTab(true);
      }
    };
    const activeTabStyles = {
      color: "#373737",
      borderBottom: "2px solid #373737"
    };
    const showScratchCard = (amount) => {
      console.log("scratch card amount ======", amount);
      funcScratchCardAmount(amount);
      showScratchCardScreen();
      handleOverlay();
    };
    return o(k$1, {
      children: [o("div", {
        class: "showGamesTab",
        children: [o("div", {
          class: "viewAllCouponTabText",
          children: [o("h4", {
            style: availableTab && activeTabStyles,
            onClick: () => handleMainTab("available"),
            children: "Available"
          }), o("h4", {
            style: yourCouponTab && activeTabStyles,
            onClick: () => handleMainTab("yourcoupons"),
            children: "Your Coupons"
          })]
        }), o("div", {
          class: "walletCoinsBox",
          children: [o("div", {
            class: "coinIcon"
          }), o("p", {
            children: walletAmount
          })]
        })]
      }), availableTab && (loading ? o("div", {
        className: "loader",
        children: o(Loading, {})
      }) : o("div", {
        class: "showGamesCards",
        children: scratchCardData.map((game, idx) => o(GamesCard, {
          btnClick: () => showScratchCard(game.amount),
          gameTitle: game.title,
          gameDesc: game.description,
          cardImage: game.image,
          coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
          btnText: "Scratch",
          gamePrice: game.amount
        }, idx))
      })), yourCouponTab && o(YourCoupons, {
        customerDetails,
        yourCouponTab
      })]
    });
  };
  const ScratchCard = ({
    shadowRoot,
    scratchCardAmount,
    walletAmount,
    showScratchCardScreen,
    customerDetails
  }) => {
    const [isLocked, setIsLocked] = h(true);
    const [loading, setLoading] = h(false);
    const [showWinPopup, setShowWinPopup] = h(false);
    const [playAgain, setPlayAgain] = h(false);
    const [winMessage, setWinMessage] = h({
      win_message: ""
    });
    const init = (context) => {
      let gradientColor = context.createLinearGradient(0, 0, 135, 135);
      console.log("gradientColor", gradientColor);
      gradientColor.addColorStop(0, "#AEE7FF");
      gradientColor.addColorStop(1, "#AEE7FF");
      context.fillStyle = gradientColor;
      context.fillRect(0, 0, 300, 300);
      context.fillStyle = "#94DDFF";
      const seatSize = 5;
      const gap = 40;
      const rows = 6;
      const seatsPerRow = 6;
      const startX = 30;
      const startY = 30;
      for (let row = 0; row < rows; row++) {
        for (let seat = 0; seat < seatsPerRow; seat++) {
          const x2 = startX + seat * (seatSize + gap);
          const y2 = startY + row * (seatSize + gap);
          context.beginPath();
          context.arc(x2, y2, seatSize, 0, 2 * Math.PI);
          context.fill();
        }
      }
    };
    p(() => {
      const screenContent = shadowRoot.querySelector(".screenContent");
      const canvas = screenContent.querySelector("#scratchCardCanvas");
      const context = canvas.getContext("2d");
      console.log("useeffect", context);
      init(context);
    }, [shadowRoot, playAgain]);
    const handlePlayAgainBtn = () => {
      const scratchCardDiv = shadowRoot.querySelector(".scratchCardDiv");
      const existingCanvas = scratchCardDiv.querySelector("#scratchCardCanvas");
      if (existingCanvas) {
        existingCanvas.parentNode.removeChild(existingCanvas);
      }
      const newCanvas = document.createElement("canvas");
      newCanvas.setAttribute("id", "scratchCardCanvas");
      newCanvas.width = 300;
      newCanvas.height = 300;
      scratchCardDiv.appendChild(newCanvas);
      setPlayAgain(!playAgain);
      setShowWinPopup(false);
      setIsLocked(true);
      setWinMessage({
        win_message: ""
      });
      const context = newCanvas.getContext("2d");
      init(context);
    };
    const getScratchCardWinData = async () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      try {
        setLoading(true);
        const response = await fetchApi(`/redeem-scratch-card`, "post", {
          ...customerDetails,
          couponAmount: scratchCardAmount
        });
        console.log("scratchc card resp", response.data);
        setWinMessage(response == null ? void 0 : response.data);
      } catch (error) {
        console.log("error inSC");
      } finally {
        setLoading(false);
        drawUnlockedScratchCard();
      }
    };
    const drawUnlockedScratchCard = () => {
      setIsLocked(false);
      const screenContent = shadowRoot.querySelector(".screenContent");
      const canvas = screenContent.querySelector("#scratchCardCanvas");
      const context = canvas.getContext("2d");
      console.log("context drawUnlockFunc", context);
      let mouseX = 0;
      let mouseY = 0;
      let isDragged = false;
      let events = {
        mouse: {
          down: "mousedown",
          move: "mousemove",
          up: "mouseup"
        },
        touch: {
          down: "touchstart",
          move: "touchmove",
          up: "touchend"
        }
      };
      let deviceType = "";
      const isTouchDevice = () => {
        try {
          document.createEvent("TouchEvent");
          deviceType = "touch";
          return true;
        } catch (e2) {
          deviceType = "mouse";
          return false;
        }
      };
      let rectLeft = canvas.getBoundingClientRect().left;
      let rectTop = canvas.getBoundingClientRect().top;
      const getXY = (e2) => {
        mouseX = (!isTouchDevice() ? e2.pageX : e2.touches[0].pageX) - rectLeft;
        mouseY = (!isTouchDevice() ? e2.pageY : e2.touches[0].pageY) - rectTop;
      };
      isTouchDevice();
      canvas.addEventListener(events[deviceType].down, (event) => {
        isDragged = true;
        getXY(event);
        scratch(mouseX, mouseY);
      });
      canvas.addEventListener(events[deviceType].move, (event) => {
        if (!isTouchDevice()) {
          event.preventDefault();
        }
        if (isDragged) {
          getXY(event);
          scratch(mouseX, mouseY);
        }
      });
      canvas.addEventListener(events[deviceType].up, () => {
        isDragged = false;
      });
      canvas.addEventListener("mouseleave", () => {
        isDragged = false;
      });
      let scratchedPixels = 0;
      const threshold = 300;
      let cardScratchable = true;
      const scratch = async (x2, y2) => {
        context.globalCompositeOperation = "destination-out";
        context.beginPath();
        context.arc(x2, y2, 12, 0, 2 * Math.PI);
        context.fill();
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distanceFromCenter = Math.sqrt((x2 - centerX) ** 2 + (y2 - centerY) ** 2);
        const centerAreaRadius = 200;
        if (distanceFromCenter <= centerAreaRadius) {
          scratchedPixels++;
        }
        if (scratchedPixels >= threshold && cardScratchable) {
          cardScratchable = false;
          setShowWinPopup(true);
        }
      };
      init(context);
    };
    return o(k$1, {
      children: [loading && o("div", {
        class: "loaderFullHeight",
        children: o(Loading, {})
      }), o("div", {
        class: !loading ? "walletCoinContainer" : "",
        children: [o("div", {
          class: "walletCoinsBox",
          children: [o("div", {
            class: "coinIcon"
          }), o("p", {
            children: walletAmount
          })]
        }), o("h4", {
          children: "Scratch and Win"
        })]
      }), o("div", {
        class: "scratchCardDiv",
        children: [o("h4", {
          children: winMessage == null ? void 0 : winMessage.win_message
        }), isLocked && o("img", {
          src: "https://media.farziengineer.co/farziwallet/lock.png",
          alt: ""
        }), o("canvas", {
          width: 300,
          height: 300,
          id: "scratchCardCanvas"
        })]
      }), o("div", {
        class: "spinWheelBottom",
        children: [o("hr", {}), o("h4", {
          children: isLocked ? `Unlock for ${scratchCardAmount} ${window.fc_loyalty_vars.coin_name} Coin` : `Click and drag your cursor across the card`
        }), isLocked && o("button", {
          onClick: getScratchCardWinData,
          class: "couponUnlockBtn",
          children: "Tap to Unlock"
        })]
      }), showWinPopup && o("div", {
        class: "spinWinContainer",
        children: o("div", {
          class: "spinWinPopup",
          children: [o("h3", {
            children: "Congratulations!"
          }), o("p", {
            children: "You Won"
          }), o("h2", {
            children: winMessage == null ? void 0 : winMessage.win_message
          }), o("button", {
            onClick: handlePlayAgainBtn,
            class: "playagainbtn",
            children: "Play Again"
          }), o("button", {
            onClick: () => showScratchCardScreen("show_scratch_card", "Scratch Card"),
            class: "closebtn",
            children: "close"
          })]
        })
      })]
    });
  };
  const CouponCard = ({
    couponImgLink,
    couponPrice,
    couponDesc,
    onClick
  }) => {
    return o(k$1, {
      children: o("div", {
        onClick,
        class: "couponCard",
        children: [o("img", {
          class: "couponImg",
          src: couponImgLink,
          alt: ""
        }), o("div", {
          class: "couponCardDesc",
          children: [o("div", {
            class: "couponFloatingLabel",
            children: ["₹ ", couponPrice]
          }), o("p", {
            class: "couponText",
            children: couponDesc
          }), o("div", {
            className: "couponCardPrice",
            children: [o("div", {
              class: "coinIcon"
            }), o("p", {
              children: couponPrice
            })]
          })]
        })]
      })
    });
  };
  const RedeemCoin = ({
    customerDetails,
    closePopup
  }) => {
    const [showCopied, setShowCopied] = h(false);
    const copyFunc = (code) => {
      setShowCopied(true);
      navigator.clipboard.writeText(code);
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    const [rangeValue, setRangeValue] = h(10);
    const [loading, setLoading] = h(false);
    const [error, setError] = h(false);
    const [redeemCoinCode, setRedeemCoinCode] = h("");
    const handleChangeRange = (e2) => {
      const {
        value
      } = e2.target;
      setRangeValue(value);
    };
    const showError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3e3);
    };
    const getRedeemCoin = async () => {
      var _a;
      try {
        setLoading(true);
        const response = await fetchApi(`/get-code`, "post", {
          ...customerDetails,
          couponAmount: rangeValue,
          coupon_title: `Custom Discount: ${rangeValue} ${window.fc_loyalty_vars.coin_name} Coins for ₹${rangeValue} off`
        });
        if ((response == null ? void 0 : response.status) !== "success") {
          console.log("failed overlay");
          showError();
          return;
        }
        setRedeemCoinCode((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.coupon_code);
      } catch (error2) {
        console.log("error in redeem coin");
      } finally {
        setLoading(false);
      }
    };
    return loading ? o("div", {
      class: "loader",
      children: o(Loading, {})
    }) : o(k$1, {
      children: o("div", {
        className: "redeemCoinMainContainer",
        children: [o("div", {
          class: "redeemCoinContainer",
          children: [o("div", {
            class: "redeemCloseContainer",
            children: o("img", {
              onClick: closePopup,
              class: "closePopup",
              src: "https://media.farziengineer.co/farziwallet/cross.png",
              alt: ""
            })
          }), o("div", {
            class: "redeemCoinBox",
            children: [o("div", {
              class: "redeemVoucherMain",
              children: [o("img", {
                src: "https://media.farziengineer.co/farziwallet/voucher-icon.png",
                alt: ""
              }), o("h2", {
                children: "Redeem Coins"
              })]
            }), o("div", {
              class: "redeemHeading",
              children: o("h3", {
                children: ["Use ", window.fc_loyalty_vars.coin_name, " Coins to create a Discount Coupon"]
              })
            }), o("div", {
              class: "redeemText",
              children: o("p", {
                children: [rangeValue, " ", window.fc_loyalty_vars.coin_name, " Coins for ₹", rangeValue, " off"]
              })
            }), o("div", {
              class: "redeemRangeContainer",
              children: redeemCoinCode ? o("p", {
                children: "Use this code at checkout"
              }) : o("input", {
                type: "range",
                onChange: handleChangeRange,
                defaultValue: "10",
                min: 0,
                max: 100,
                name: "coinRange"
              })
            }), redeemCoinCode === "" ? o("button", {
              onClick: getRedeemCoin,
              class: "couponUnlockBtn",
              children: "Redeem Coins"
            }) : o(k$1, {
              children: o("div", {
                class: "couponCodeContainer",
                children: [o("p", {
                  children: redeemCoinCode
                }), o("img", {
                  onClick: () => copyFunc(redeemCoinCode),
                  src: "https://media.farziengineer.co/farziwallet/copy-icon.png",
                  alt: ""
                })]
              })
            }), showCopied && o("div", {
              class: "copied",
              children: "copied"
            })]
          })]
        }), error && o(Alert, {})]
      })
    });
  };
  const ViewAllCoupons = ({
    couponCardResponse,
    walletAmount,
    customerDetails,
    shadowRoot
  }) => {
    const [availableTab, setAvailableTab] = h(true);
    const [yourCouponTab, setYourCouponTab] = h(false);
    const [exploreCoupon, setExploreCoupon] = h([]);
    const [exploreCouponIdx, setExploreCouponIdx] = h(0);
    const [couponIdx, setCouponIdx] = h(0);
    const [loading, setLoading] = h(false);
    const [overlayVisible, setOverlayVisible] = h({
      overlay: "none",
      active: false
    });
    p(() => {
      const exploreCouponResp = async () => {
        var _a;
        try {
          setLoading(true);
          const resp = await fetchApi("/get-coupons-to-explore", "post", customerDetails);
          setExploreCoupon((_a = resp == null ? void 0 : resp.data) == null ? void 0 : _a.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      exploreCouponResp();
    }, []);
    const handleOverlay = (overlayname) => {
      if (overlayname === "coupon") {
        return o(CouponOverlay, {
          customerDetails,
          couponData: couponCardResponse[couponIdx],
          onClick: closeOverlay
        });
      }
      if (overlayname === "explore") {
        return o(CouponOverlay, {
          customerDetails,
          couponData: exploreCoupon[exploreCouponIdx],
          onClick: closeOverlay
        });
      }
      if (overlayname === "redeem") {
        return o(RedeemCoin, {
          customerDetails,
          closePopup: closeOverlay
        });
      }
    };
    const handleAndShowCouponOverlay = (idx) => {
      changeOverlay("coupon");
      setCouponIdx(idx);
    };
    const changeOverlay = (overlayname) => {
      const mainPopup = shadowRoot.querySelector(".mainPopup");
      const scrolledTop = mainPopup.scrollTop;
      mainPopup.style.overflowY = "hidden";
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "flex";
      overlay.style.position = "absolute";
      overlay.style.top = `${scrolledTop}px`;
      overlay.style.height = "100%";
      overlay.style.width = "100%";
      setOverlayVisible({
        ...overlayVisible,
        overlay: overlayname,
        active: true
      });
    };
    const closeOverlay = () => {
      const mainPopup = shadowRoot.querySelector(".mainPopup");
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "none";
      mainPopup.style.overflowY = "scroll";
      setOverlayVisible({
        ...overlayVisible,
        overlay: "none",
        active: false
      });
    };
    const handleMainTab = (mainTab) => {
      if (mainTab === "available") {
        setAvailableTab(true);
        setYourCouponTab(false);
      }
      if (mainTab === "yourcoupons") {
        setAvailableTab(false);
        setYourCouponTab(true);
      }
    };
    const handleExploreOverlayVisibility = (idx) => {
      changeOverlay("explore");
      setExploreCouponIdx(idx);
    };
    const activeTabStyles = {
      color: "#373737",
      borderBottom: "2px solid #373737"
    };
    return o(k$1, {
      children: o("div", {
        class: "viewAllCoupons",
        children: [o("div", {
          class: "viewAllCouponsTab",
          children: [o("div", {
            class: "viewAllCouponTabText",
            children: [o("h4", {
              style: availableTab && activeTabStyles,
              onClick: () => handleMainTab("available"),
              children: "Available"
            }), o("h4", {
              style: yourCouponTab && activeTabStyles,
              onClick: () => handleMainTab("yourcoupons"),
              children: "Your Coupons"
            })]
          }), o("div", {
            class: "walletCoinsBox",
            children: [o("div", {
              class: "coinIcon"
            }), o("p", {
              children: walletAmount
            })]
          })]
        }), availableTab && (loading ? o("div", {
          className: "loader",
          children: o(Loading, {})
        }) : o("div", {
          children: [o("div", {
            class: "viewAllFeaturedComponent",
            children: [o("h3", {
              children: "Featured Components"
            }), o("div", {
              class: "showAllCouponsList",
              children: couponCardResponse.map((card, index) => o(CouponCard, {
                onClick: () => handleAndShowCouponOverlay(index),
                couponPrice: card.amount,
                couponDesc: card.title,
                couponImgLink: card.image
              }, index))
            })]
          }), o("div", {
            class: "reedemfcCoins",
            children: [o("h3", {
              children: ["Redeem ", window.fc_loyalty_vars.coin_name, " Coins"]
            }), o("div", {
              onClick: () => changeOverlay("redeem"),
              class: "reedemfcCoinsCard",
              children: [o("div", {
                children: o("img", {
                  src: "https://media.farziengineer.co/farziwallet/voucher-icon.png",
                  alt: ""
                })
              }), o("div", {
                children: [o("h5", {
                  children: ["100 ", window.fc_loyalty_vars.coin_name, " Coins = ₹100"]
                }), o("p", {
                  children: ["Use ", window.fc_loyalty_vars.coin_name, " Coins to create a custom discount coupon"]
                })]
              }), o("div", {
                children: o("img", {
                  src: "https://media.farziengineer.co/farziwallet/arrow.png",
                  alt: ""
                })
              })]
            })]
          }), o("div", {
            class: "exploreCoupons",
            children: [o("h5", {
              children: "Coupons to Explore"
            }), exploreCoupon.map((card, idx) => o("div", {
              onClick: () => handleExploreOverlayVisibility(idx),
              class: "exploreCouponCard",
              children: [o("div", {
                class: "shipImgBox",
                children: o("img", {
                  src: card.image,
                  alt: ""
                })
              }), o("div", {
                class: "exploreCouponCardText",
                children: [o("p", {
                  children: card.heading
                }), o("p", {
                  class: "exploreCouponText",
                  children: ["Unlock for ", o("div", {
                    class: "coinIcon"
                  }), " ", card.amount]
                })]
              })]
            }))]
          })]
        })), yourCouponTab && o(YourCoupons, {
          customerDetails,
          yourCouponTab
        }), o("div", {
          class: "overlay",
          children: (overlayVisible == null ? void 0 : overlayVisible.active) ? o(k$1, {
            children: o(Overlay, {
              content: handleOverlay(overlayVisible == null ? void 0 : overlayVisible.overlay)
            })
          }) : o(k$1, {})
        })]
      })
    });
  };
  const Referral = () => {
    p(() => {
      (function storeReferHash() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const referHash = urlSearchParams.get("fc_refer_hash");
        if (referHash) {
          try {
            localStorage.setItem("fc_refer_hash", referHash);
          } catch (error) {
            console.log("error in storeReferHash", error);
          }
        }
      })();
    }, []);
    return o("div", {});
  };
  const Logout = () => {
    return o(k$1, {
      children: o("div", {
        class: "logoutWalletCard",
        children: [o("h4", {
          class: "logoutWallerCardHeading",
          children: "Login to access points"
        }), o("div", {
          class: "walletLogoutBtn",
          children: o("p", {
            children: "Login"
          })
        })]
      })
    });
  };
  const ReferralPopup = ({
    closeReferralPopup
  }) => {
    const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
    const clientName = mainScript.getAttribute("client-name");
    return o(k$1, {
      children: o("div", {
        class: "referralPopupContainer",
        children: [o("img", {
          onClick: closeReferralPopup,
          src: "https://media.farziengineer.co/farziwallet/cross.png",
          alt: ""
        }), o("h2", {
          children: ["Welcome to ", clientName]
        }), o("p", {
          children: ["You have received 100 points into your ", clientName, " wallet for signing up with us. Your total wallet balance is 100. ", o("span", {
            class: "referralPopupHashtag",
            children: "#LiveYourBrilliance"
          }), " "]
        })]
      })
    });
  };
  function Main({
    themeDetailsData,
    shadowRoot
  }) {
    const [visibilty, setVisibility] = h(true);
    const [referralPopup, setReferralPopup] = h(false);
    const [gamesVisibility, setGamesVisibility] = h(false);
    const [walletAmount, setWalletAmount] = h(0);
    const [walletLogs, setWalletLogs] = h([]);
    const [spinWheelAmount, setSpinWheelAmount] = h(0);
    const [scratchCardAmount, setScratchCardAmount] = h(0);
    const [loading, setLoading] = h(false);
    const [isLoggedIn, setIsLoggedIn] = h(false);
    const [error, setError] = h(false);
    const [featuredCoupons, setFeaturedCoupons] = h([]);
    const [couponCardIdx, setCouponCardIdx] = h(0);
    const [customerDetails, setCustomerDetails] = h({
      customer_id: "",
      user_hash: "",
      client_id: ""
    });
    const [screenDetails, setScreenDetails] = h({
      screen: "home_screen",
      screenTitle: "",
      active: false
    });
    const [overlayVisible, setOverlayVisible] = h({
      overlay: "none",
      active: false
    });
    const couponCardData = [{
      "heading": "₹ 10 Voucher",
      "title": "Rs. 10 off on Striped Silk Blouse",
      "description": "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.",
      "label": "₹ 10",
      "image": "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      "amount": 10
    }, {
      "heading": "₹ 30 Voucher",
      "title": "Rs. 30 off on Striped Silk Blouse",
      "description": "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.",
      "label": "₹ 30",
      "image": "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      "amount": 30
    }, {
      "heading": "₹ 50 Voucher",
      "title": "Rs. 50 off on Striped Silk Blouse",
      "description": "The management reserves the right to modify the coupon as they see fit and to adjust the customer's wallet if they determine the event.",
      "label": "₹ 50",
      "image": "https://media.farziengineer.co/farziwallet/coupon-image-top.png",
      "amount": 50
    }];
    const handleLogin = () => {
      var _a;
      if (!isLoggedIn) {
        window.location.href = (_a = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a.login_page;
      }
    };
    const handleCloseReferralPopup = () => {
      setReferralPopup(false);
    };
    const showError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3e3);
    };
    const funcScratchCardAmount = (amount) => {
      console.log("func scr card===", amount);
      setScratchCardAmount(amount);
    };
    async function redeemReferHash({
      customer_id,
      user_hash,
      client_id
    }) {
      const fc_refer_hash = localStorage.getItem("fc_refer_hash");
      console.log("fc refer", fc_refer_hash);
      if (fc_refer_hash) {
        try {
          const response = await fetchApi("/redeem-referral-code", "post", {
            ...customerDetails,
            refer_hash: fc_refer_hash
          });
          setReferralPopup(true);
          console.log("fc_refer response", response);
          localStorage.removeItem("fc_refer_hash");
        } catch (err) {
          console.log("error in redeemReferHash", err);
        }
      }
    }
    function setTheme({
      themeDetails
    }) {
      var _a, _b, _c, _d, _e, _f, _g;
      var cssVariablesScope = shadowRoot.querySelector(".mainPopup");
      if (cssVariablesScope && ((_a = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _a.theme_color)) {
        cssVariablesScope.style.setProperty("--loyalty_popup_theme_background", (_b = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _b.theme_color);
        if ((_c = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _c.coin_icon) {
          cssVariablesScope.style.setProperty("--coin-svg-url", `url("${(_d = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _d.coin_icon}")`);
          cssVariablesScope.style.setProperty("--coin-svg-inverted-url", `url("${(_e = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _e.coin_icon}")`);
        } else {
          cssVariablesScope.style.setProperty("--coin-svg-url", `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`);
          cssVariablesScope.style.setProperty("--coin-svg-inverted-url", `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`);
        }
      }
      if ((_f = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _f.coin_name) {
        window.fc_loyalty_vars = {
          coin_name: (_g = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _g.coin_name
        };
      } else {
        window.fc_loyalty_vars = {
          coin_name: "FC"
        };
      }
      shadowRoot.querySelector(".floatingPopup").style.display = "flex";
    }
    p(() => {
      setTheme({
        themeDetails: themeDetailsData
      });
      console.log(themeDetailsData);
    }, [visibilty]);
    p(() => {
      var _a;
      (function loadfont() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
        document.head.appendChild(link);
      })();
      (function loadGlobalStyles() {
        const styles = document.createElement("style");
        styles.innerHTML = `
          .fc-no-scroll {
              overflow: hidden;
          }
      `;
        document.body.appendChild(styles);
      })();
      const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
      const customer_id = mainScript.getAttribute("data-customer-id");
      const user_hash = (_a = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a.trim();
      const client_id = mainScript.getAttribute("data-client-id");
      setCustomerDetails({
        client_id,
        customer_id,
        user_hash
      });
      if (customer_id) {
        setIsLoggedIn(true);
        redeemReferHash({
          client_id,
          customer_id,
          user_hash
        });
      }
    }, []);
    p(() => {
      if (customerDetails.customer_id !== "") {
        const fetchData = async () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
          try {
            setLoading(true);
            const walletResponse = await fetchApi("/user-walletlogs", "post", {
              ...customerDetails
            });
            console.log("responsedata", (_d = (_c = (_b = (_a = walletResponse == null ? void 0 : walletResponse.data) == null ? void 0 : _a.data) == null ? void 0 : _b.wallet) == null ? void 0 : _c.wallet) == null ? void 0 : _d.amount);
            if ((walletResponse == null ? void 0 : walletResponse.status) !== "success") {
              showError();
            } else {
              setWalletAmount((_h = (_g = (_f = (_e = walletResponse == null ? void 0 : walletResponse.data) == null ? void 0 : _e.data) == null ? void 0 : _f.wallet) == null ? void 0 : _g.wallet) == null ? void 0 : _h.amount);
              setWalletLogs((_m = (_l = (_k = (_j = (_i = walletResponse == null ? void 0 : walletResponse.data) == null ? void 0 : _i.data) == null ? void 0 : _j.wallet) == null ? void 0 : _k.wallet) == null ? void 0 : _l.logs) == null ? void 0 : _m.edges);
            }
            const couponResponse = await fetchApi("/get-featured-coupons", "post", {
              ...customerDetails
            });
            if ((couponResponse == null ? void 0 : couponResponse.status) !== "success") {
              showError();
            } else {
              console.log(couponResponse == null ? void 0 : couponResponse.data);
              setFeaturedCoupons(couponResponse == null ? void 0 : couponResponse.data);
            }
          } catch (error2) {
            console.error("Error fetching wallet data:", error2);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }
    }, [customerDetails, screenDetails == null ? void 0 : screenDetails.screen]);
    const btnClick = (idx) => {
      changeOverlay("coupon");
      setCouponCardIdx(idx);
    };
    const funcSetSpinWheelAmount = (amount) => {
      setSpinWheelAmount(amount);
    };
    const handleViewPopup = () => {
      setVisibility(!visibilty);
    };
    const changeOverlay = (overlayname) => {
      const mainPopup = shadowRoot.querySelector(".mainPopup");
      const scrolledTop = mainPopup.scrollTop;
      mainPopup.style.overflowY = "hidden";
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "flex";
      overlay.style.position = "absolute";
      overlay.style.top = `${scrolledTop}px`;
      overlay.style.height = "100%";
      overlay.style.width = "100%";
      setOverlayVisible({
        ...overlayVisible,
        overlay: overlayname,
        active: true
      });
    };
    const closeOverlay = () => {
      const mainPopup = shadowRoot.querySelector(".mainPopup");
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "none";
      mainPopup.style.overflowY = "scroll";
      setOverlayVisible({
        ...overlayVisible,
        overlay: "none",
        active: false
      });
    };
    const handleOverlay = (overlayname) => {
      if (overlayname === "coupon") {
        return o(CouponOverlay, {
          customerDetails,
          couponData: featuredCoupons[couponCardIdx],
          onClick: closeOverlay
        });
      }
      if (overlayname === "invite_and_earn") {
        return o(InviteAndEarnOverlay, {
          customerDetails,
          closeOverlay
        });
      }
    };
    const gamesData = [{
      name: "show_spin_wheel",
      gameTitle: "Wheel of Fortune",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/spin-wheel.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore"
    }, {
      name: "show_scratch_card",
      gameTitle: "Scratch Card",
      gameDesc: "Start at",
      cardImage: "https://media.farziengineer.co/farziwallet/scratch-card.png",
      gamePrice: "10",
      coinImage: "https://media.farziengineer.co/farziwallet/coin-icon.png",
      btnText: "Explore"
    }];
    p(() => {
      if (visibilty) {
        document.body.classList.add("fc-no-scroll");
      } else {
        document.body.classList.remove("fc-no-scroll");
      }
    }, [visibilty]);
    const showPlayGameScreen = () => {
      setScreenDetails({
        ...screenDetails,
        screen: "play_spin_wheel",
        screenTitle: "Wheel of Fortune",
        active: true
      });
    };
    const showScratchCardScreen = () => {
      setScreenDetails({
        ...screenDetails,
        screen: "play_scratch_card",
        screenTitle: "Scratch Card",
        active: true
      });
    };
    const closeScreen = () => {
      setScreenDetails({
        ...screenDetails,
        screen: "home_screen",
        screenTitle: "",
        active: false
      });
    };
    const handleShowGames = () => {
      setGamesVisibility(!gamesVisibility);
      console.log(" handle show games log ");
    };
    const handleScreenComponent = (screenname, screenTitle) => {
      setScreenDetails({
        ...screenDetails,
        screen: screenname,
        screenTitle,
        active: true
      });
    };
    const getScreenComponent = (screenname) => {
      switch (screenname) {
        case "play_spin_wheel":
          return o(PlayGame, {
            customerDetails,
            showSpinGameScreen: handleScreenComponent,
            walletAmount,
            spinWheelAmount,
            shadowRoot
          });
        case "show_spin_wheel":
          return o(ShowGames, {
            customerDetails,
            walletAmount,
            funcSetSpinWheelAmount,
            handleOverlay: handleShowGames,
            showPlayGameScreen,
            screenDetails
          });
        case "transaction_log":
          return o(TransactionLog, {
            walletLogs
          });
        case "play_scratch_card":
          return o(ScratchCard, {
            customerDetails,
            showScratchCardScreen: handleScreenComponent,
            scratchCardAmount,
            walletAmount,
            shadowRoot
          });
        case "show_scratch_card":
          return o(ShowScratchCard, {
            customerDetails,
            walletAmount,
            funcScratchCardAmount,
            handleOverlay: handleShowGames,
            showScratchCardScreen
          });
        case "show_all_coupons":
          return o(ViewAllCoupons, {
            shadowRoot,
            walletAmount,
            couponCardResponse: featuredCoupons,
            customerDetails
          });
        default:
          console.warn("Unknown screen:", screenname);
      }
    };
    return o(k$1, {
      children: [o(Referral, {}), o("img", {
        onClick: handleViewPopup,
        class: "floatingPopup",
        src: "https://media.farziengineer.co/farziwallet/gift-icon.png",
        width: 30,
        height: 30,
        alt: "gift icon"
      }), visibilty && o(k$1, {
        children: o("div", {
          onClick: handleLogin,
          class: "mainPopup",
          children: [(screenDetails == null ? void 0 : screenDetails.active) ? o(Screen, {
            closeScreen,
            screenTitle: (screenDetails == null ? void 0 : screenDetails.screenTitle) || "screentitle",
            content: getScreenComponent(screenDetails == null ? void 0 : screenDetails.screen)
          }) : loading ? o("div", {
            className: "loader",
            children: o(Loading, {})
          }) : o(k$1, {
            children: [o("div", {
              class: "header",
              children: [o("div", {
                class: "leftHeader",
                children: [o("p", {
                  children: "Welcome to NEW"
                }), o("h6", {
                  children: "Loyalty"
                })]
              }), o("div", {
                class: "rightHeader",
                children: o("img", {
                  class: "closePopup",
                  onClick: handleViewPopup,
                  src: "https://media.farziengineer.co/farziwallet/cross.png",
                  alt: ""
                })
              })]
            }), isLoggedIn ? o(WalletCard, {
              walletAmount,
              onClick: () => handleScreenComponent("transaction_log", "Points activity")
            }) : o(Logout, {}), o("div", {
              class: "viewAllCouponsContainer",
              children: [o("h1", {
                children: "Coupons"
              }), o("a", {
                onClick: () => handleScreenComponent("show_all_coupons", "Coupons"),
                children: "View All"
              })]
            }), o("div", {
              class: "showAllCouponsList",
              children: isLoggedIn ? featuredCoupons.map((card, index) => o(CouponCard, {
                onClick: () => btnClick(index),
                couponPrice: card.amount,
                couponDesc: card.title,
                couponImgLink: card.image
              }, index)) : couponCardData.map((card, index) => o(CouponCard, {
                onClick: handleLogin,
                couponPrice: card.amount,
                couponDesc: card.title,
                couponImgLink: card.image
              }, index))
            }), o("div", {
              children: [o("div", {
                class: "gamesArenaContainer",
                children: [o("h1", {
                  children: "Games Arena"
                }), o("p", {
                  children: ["Play games to win ", window.fc_loyalty_vars.coin_name, " ", "coins, coupons & rewards"]
                })]
              }), o("div", {
                class: "gamesHorizontalList",
                children: gamesData.map((card, idx) => o(GamesCard, {
                  btnClick: () => isLoggedIn && handleScreenComponent(card.name, card.gameTitle),
                  gameTitle: card.gameTitle,
                  gameDesc: card.gameDesc,
                  cardImage: card.cardImage,
                  gamePrice: card.gamePrice,
                  coinImage: card.coinImage,
                  btnText: card.btnText
                }, idx))
              }), o(InviteCard, {
                onClick: () => isLoggedIn && changeOverlay("invite_and_earn")
              })]
            })]
          }), o("div", {
            class: "overlay",
            children: (overlayVisible == null ? void 0 : overlayVisible.active) ? o(k$1, {
              children: o(Overlay, {
                content: handleOverlay(overlayVisible == null ? void 0 : overlayVisible.overlay)
              })
            }) : o(k$1, {})
          }), error && o(Alert, {})]
        })
      }), referralPopup && o(ReferralPopup, {
        closeReferralPopup: handleCloseReferralPopup
      })]
    });
  }
  function App({
    themeDetailsData,
    shadowRoot
  }) {
    return o(k$1, {
      children: [o("div", {
        class: "widget-container",
        children: o(Main, {
          themeDetailsData,
          shadowRoot
        })
      }), o("div", {
        class: "widget-styles"
      }), o("div", {
        class: "widget-custom-styles"
      })]
    });
  }
  function AppCSS() {
    return o("style", {
      children: style
    });
  }
  function AppCustomCSS({
    customStyles
  }) {
    return o("style", {
      children: customStyles
    });
  }
  const WALLET_API_URI = "https://fastloyaltyapi.farziengineer.co";
  async function renderLoyaltyPopup() {
    var _a, _b, _c;
    try {
      const targetDiv = document.body;
      let shadowTarget = document.createElement("div");
      shadowTarget.className = "fc-loyalty-popup-19212-target";
      shadowTarget.style.display = "block";
      targetDiv.appendChild(shadowTarget);
      let shadow = shadowTarget.attachShadow({
        mode: "open"
      });
      let shadowRoot = document.createElement("div");
      shadowRoot.className = "fc-loyalty-popup-19212-root";
      shadow.appendChild(shadowRoot);
      let themeDetailsData;
      if ((_a = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _a.theme_details) {
        themeDetailsData = (_b = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _b.theme_details;
      } else {
        const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
        const client_id = mainScript == null ? void 0 : mainScript.getAttribute("data-client-id");
        if (client_id) {
          const themeDetailsRes = await fetch(`${WALLET_API_URI}/get-theme-details`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              client_id
            })
          });
          themeDetailsData = await themeDetailsRes.json();
          window.fc_loyalty_vars = {
            // @ts-ignore
            ...window.fc_loyalty_vars,
            theme_details: themeDetailsData
          };
          console.log("shadowroot", window.fc_loyalty_vars);
        }
      }
      const clientCustomStyleData = ((_c = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _c.custom_css) || "";
      B$1(o(App, {
        themeDetailsData,
        shadowRoot
      }), shadowRoot);
      B$1(o(AppCSS, {}), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-styles"));
      B$1(o(AppCustomCSS, {
        customStyles: clientCustomStyleData
      }), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-custom-styles"));
    } catch (err) {
      console.log("error", err);
    }
  }
  window.fc_loyalty_render_wallet_box = renderLoyaltyPopup;
  renderLoyaltyPopup();
})();
