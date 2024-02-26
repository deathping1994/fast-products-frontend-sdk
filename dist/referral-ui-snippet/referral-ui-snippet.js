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
  const style = "@keyframes rotate {\n	from {\n		transform: rotate(0deg);\n	}\n	to {\n		transform: rotate(360deg);\n	}\n}\n\n.spinner {\n	animation: rotate 2s linear infinite;\n}\n\n.inviteAndEarnContainer {\n	max-width: 50%;\n	padding: 22px;\n	border-radius: 16px;\n	transition: all 0.5s;\n	width: 40%;\n	-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n	animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;	\n}\n\n.inviteEarnTextContainer {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	font-weight: 400;\n    font-size: 14px;\n    color: #acacac;\n    margin: 8px 0px;\n    text-align: center;\n}\n.inviteAndEarn {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	gap: 16px;\n}\n\n.inviteAndEarn h2 {\n	font-weight: 700;\n    font-size: 30px;\n}\n\n.inviteAndEarnMessage h4 {\n	text-align: center;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 30px;\n    margin: 20px 0!important;\n}\n\n.inviteLinkContainer {\n	padding: 0px 12px;\n    background: #fff;\n    border-radius: 4px;\n    border: 1px solid var(--loyalty_popup_theme_background, #000);\n    font-size: 16px;\n    font-weight: 700;\n    display: flex;\n	justify-content: space-between;\n    align-items: center;\n}\n\n.couponCodeContainer {\n	padding: 12px;\n    background: #fff;\n    border-radius: 4px;\n    border: 1px solid var(--loyalty_popup_theme_background, #000);;\n    font-size: 16px;\n    font-weight: 700;\n    display: flex;\n	width: 100%;\n	justify-content: center;\n    align-items: center;\n	position: relative;\n}\n\n.couponCodeContainer img {\n	position: absolute;\n	right: 20px;\n	cursor: pointer;\n}\n\n.inviteLinkContainer p {\n	font-size: 14px;\n}\n\n.inviteLinkContainer img {\n	max-width: 16px;\n	cursor: pointer;\n}\n\n.sendInvitesBtnContainer, .inviteWhatsappBtn {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	gap: 8px;\n    text-decoration: none;\n}\n\n\n.inviteWhatsappBtn {\n	height: 40px;\n    width: 96%;\n    background-color: #29a71a;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n	border: none;\n}\n\n.inviteWhatsappBtn p {\n	font-weight: 500;\n	color: white;\n}\n\n.inviteWhatsappBtn img {\n	filter: brightness(0) invert(1);\n}\n\n.inviteRoundedBtn {\n	width: 40px;\n    height: 40px;\n    background-color: #fff;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n	border: 1px solid var(--loyalty_popup_theme_background, #000);\n}\n\n.inviteRoundedBtn img {\n	width: 16px;\n	height: 16px;\n}\n\n\n.alert {\n	position: absolute;\n	bottom: 50%;\n	left: 50%;\n	z-index: 999;\n	background: #160b0b;\n	color: #f4c7c7;\n	font-weight: 400;\n	font-size: 14px;\n	border-radius: 4px;\n	padding: 8px 22px;\n	transition: 0.5s all ease;\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	transform: translate(-50%, -50%);\n	width: 80%;\n	animation-name: fade-in;\n	animation-duration: 0.5s;\n}\n\n.alert svg.fw-wallet-alert-popup-error {\n	width: 22px;\n	height: 22px;\n	fill: rgb(244, 67, 54);\n	margin-right: 8px;\n}\n\n\n.shareTextContainer {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	font-weight: 400;\n	font-size: 14px;\n	color: #acacac;\n	text-align: center;\n	margin-bottom: 12px;\n}\n\n.dashedDivider {\n	border: none;\n    height: 1px;\n    background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);\n    margin: 20px 0 16px 0;\n}\n\n.referralContainer {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.copied {\n	background-color: green;\n    padding: 8px;\n    position: absolute;\n    top: 55%;\n    left: 48%;\n    border-radius: 12px;\n    color: white;\n    font-weight: bold;\n    font-size: 14px;\n}\n\n.loader{\n	height: 100%;\n	width: 100%;\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n	z-index: 999999;\n	background-color: rgba(255, 255, 255, 0.6);\n}\n\n.loading-screen {\n	padding-top: 16px;\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n}\n\n.loginbtn{\n	background-color: #efefef;\n	text-decoration: none;\n	color: black;\n	padding: 12px;\n	border-radius: 8px;\n}\n\n@media (max-width: 948px) {\n    .inviteAndEarnContainer {\n      max-width: 100%;\n    }\n  }";
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
  const WALLET_API_URI$1 = "https://fastloyaltyapi.farziengineer.co";
  const fetchApi = async (route, method, data) => {
    const resp = await fetch(`${WALLET_API_URI$1}${route}`, {
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
  const Main = ({
    shadowRoot,
    themeDetailsData
  }) => {
    const [invitemsg, setInvitemsg] = h("");
    const [whatsappmsg, setWhatsappmsg] = h("");
    const [login, setLogin] = h(false);
    const [loading, setLoading] = h(false);
    const [error, setError] = h(false);
    const [showCopied, setShowCopied] = h(false);
    const mainScript = document.getElementById("fc-wallet-referral-snippet-ui-script-19212");
    const customer_id = mainScript.getAttribute("data-customer-id");
    if (customer_id) {
      setLogin(true);
    }
    console.log("running referral ui ");
    const [referralData, setReferralData] = h({
      referral_code: "",
      path: ""
    });
    const showError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3e3);
    };
    p(() => {
      const fetchReferralCode = async () => {
        var _a, _b, _c;
        try {
          setLoading(true);
          const customer_id2 = mainScript.getAttribute("data-customer-id");
          const user_hash = (_a = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a.trim();
          const client_id = mainScript.getAttribute("data-client-id");
          const resp = await fetchApi("/get-referral-code", "post", {
            client_id,
            customer_id: customer_id2,
            user_hash
          });
          const response = await fetchApi("/get-referral-message", "post", {
            client_id
          });
          const whatsappResp = await fetchApi("/get-referred-message", "post", {
            client_id,
            customer_id: customer_id2,
            user_hash
          });
          console.log("all referral resp", resp, response, whatsappResp);
          if ((response == null ? void 0 : response.status) !== "success") {
            setInvitemsg("Share with your friends to get rewards.");
            setWhatsappmsg("Share this with WhatsApp");
          } else {
            setInvitemsg((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.getReferralMessage);
            setWhatsappmsg((_c = whatsappResp == null ? void 0 : whatsappResp.data) == null ? void 0 : _c.getReferredMessage);
          }
          setReferralData(resp == null ? void 0 : resp.data);
        } catch (error2) {
          showError();
        } finally {
          setLoading(false);
        }
      };
      fetchReferralCode();
    }, []);
    const copyReferralLinkFunc = () => {
      setShowCopied(true);
      navigator.clipboard.writeText(window.location.origin + ((referralData == null ? void 0 : referralData.path) || "/account/register"));
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    return login ? o(k$1, {
      children: [loading ? o("div", {
        className: "loader",
        children: o(Loading, {})
      }) : o("div", {
        className: "referralContainer",
        children: o("div", {
          className: "inviteAndEarnContainer",
          children: [o("div", {
            className: "inviteAndEarn",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/invite-earn.png",
              alt: ""
            }), o("h2", {
              children: "Invite & Earn"
            })]
          }), o("div", {
            className: "inviteAndEarnMessage",
            children: o("h4", {
              children: invitemsg
            })
          }), o("div", {
            className: "inviteEarnTextContainer",
            children: o("p", {
              children: "copy referral link"
            })
          }), showCopied && o("div", {
            className: "copied",
            children: "copied"
          }), o("div", {
            className: "inviteLinkContainer",
            children: [o("p", {
              children: `${window.location.origin}${(referralData == null ? void 0 : referralData.path) || "/account/register"}`
            }), o("img", {
              onClick: copyReferralLinkFunc,
              src: "https://media.farziengineer.co/farziwallet/copy-icon.png",
              alt: ""
            })]
          }), o("div", {
            children: o("hr", {
              className: "dashedDivider"
            })
          }), o("div", {
            className: "shareTextContainer",
            children: o("p", {
              children: "or share with"
            })
          }), o("div", {
            className: "sendInvitesBtnContainer",
            children: [o("a", {
              href: `https://api.whatsapp.com/send?text=${whatsappmsg}`,
              target: "_blank",
              className: "inviteWhatsappBtn",
              children: [o("img", {
                src: "https://media.farziengineer.co/farziwallet/whatsapp-icon.png",
                alt: ""
              }), o("p", {
                children: "Send on WhatsApp"
              })]
            }), o("a", {
              href: `sms://18005555555/?body=${whatsappmsg}`,
              target: "_blank",
              className: "inviteRoundedBtn",
              children: o("img", {
                src: "https://media.farziengineer.co/farziwallet/share_arrow.png",
                alt: ""
              })
            })]
          })]
        })
      }), error && o(Alert, {
        message: `Something went wrong`
      })]
    }) : o("a", {
      class: "loginbtn",
      href: `/account/login`,
      children: "Login to Continue"
    });
  };
  function App({
    shadowRoot,
    themeDetailsData
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
  async function renderReferralSnippet() {
    var _a, _b, _c;
    try {
      const targetDiv = document.getElementById("MainContent");
      const ele = targetDiv.querySelector(".fc-scratch-card-snippet-19212-target");
      if (ele) {
        targetDiv.removeChild(ele);
      }
      let shadowTarget = document.createElement("div");
      shadowTarget.className = "fc-referral-ui-snippet-19212-target";
      shadowTarget.style.display = "block";
      targetDiv.appendChild(shadowTarget);
      let shadow = shadowTarget.attachShadow({
        mode: "open"
      });
      let shadowRoot = document.createElement("div");
      shadowRoot.className = "fc-referral-ui-snippet-19212-root";
      shadow.appendChild(shadowRoot);
      let themeDetailsData;
      if ((_a = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _a.theme_details) {
        themeDetailsData = (_b = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _b.theme_details;
      } else {
        const mainScript = document.querySelector("#fc-wallet-referral-snippet-ui-script-19212");
        console.log("mainScript", mainScript);
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
  window.fc_loyalty_render_wallet_box = renderReferralSnippet;
  renderReferralSnippet();
})();
