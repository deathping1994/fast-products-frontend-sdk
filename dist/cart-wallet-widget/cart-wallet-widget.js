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
  const style = '/* :root {\n	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n	line-height: 1.5;\n	font-weight: 400;\n\n	color: #222;\n	background-color: #ffffff;\n\n	font-synthesis: none;\n	text-rendering: optimizeLegibility;\n	-webkit-font-smoothing: antialiased;\n	-moz-osx-font-smoothing: grayscale;\n	-webkit-text-size-adjust: 100%;\n}\n\nbody {\n	margin: 0;\n	display: flex;\n	align-items: center;\n	min-height: 100vh;\n} */\n\n.fc-wallet-cart-widget-19212-root * {\n	padding: 0;\n	margin: 0;\n	box-sizing: border-box;\n}\n\n.fc-wallet-cart-widget-19212-root a {\n	text-decoration: none;\n	color: inherit;\n}\n\n.fc-wallet-cart-widget-19212-root {\n	width: 100%;\n}\n\n.fc-wallet-cart-widget-19212-root .login-container {\n	background-color: #ebebeb;\n	display: flex;\n	justify-content: center;\n	padding: 10px 10px;\n}\n\n.fc-wallet-cart-widget-19212-root .wallet-box-container {\n	background-color: #ebebeb;\n	display: flex;\n	justify-content: space-between;\n	align-items: center;\n	padding: 14px 8px;\n}\n\n.fc-wallet-cart-widget-19212-root .point-details {\n	font-weight: bolder;\n	margin-left: 6px;\n}\n\n.fc-wallet-cart-widget-19212-root .checkbox-container {\n	padding: 0px 10px;\n}\n\n.fc-wallet-cart-widget-19212-root .checkbox-container .container input {\n	display: none;\n}\n\n.fc-wallet-cart-widget-19212-root .checkbox-container .container {\n	display: block;\n	position: relative;\n	cursor: pointer;\n	font-size: 20px;\n	user-select: none;\n	-webkit-tap-highlight-color: transparent;\n}\n\n.fc-wallet-cart-widget-19212-root .checkbox-container .checkmark {\n	position: relative;\n	top: 0;\n	left: 0;\n	height: 25px;\n	width: 25px;\n	background-color: #2196F300;\n	border-radius: 5px;\n	transition: all 0.25s;\n}\n\n/* When the checkbox is checked, add a blue background */\n.fc-wallet-cart-widget-19212-root .checkbox-container .container input:checked~.checkmark {\n	background-color: #000000;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.fc-wallet-cart-widget-19212-root .checkbox-container .checkmark:after {\n	content: "";\n	position: absolute;\n	transform: rotate(0deg);\n	border: 0.1em solid black;\n	left: 0;\n	top: 0;\n	width: 25px;\n	height: 25px;\n	border-radius: 5px;\n	transition: all 0.25s, border-width 0.1s;\n}\n\n/* Show the checkmark when checked */\n.fc-wallet-cart-widget-19212-root .checkbox-container .container input:checked~.checkmark:after {\n	left: 0.45em;\n	top: 0.25em;\n	width: 0.25em;\n	height: 0.5em;\n	border-color: #fff0 white white #fff0;\n	border-width: 0 0.15em 0.15em 0;\n	border-radius: 0em;\n	transform: rotate(45deg);\n}\n\n.fc-wallet-cart-widget-19212-root .circularloader {\n	width: 20px;\n	transform-origin: center;\n	animation: rotate4 2s linear infinite;\n	margin-left: 8px;\n}\n\n.fc-wallet-cart-widget-19212-root .circularloader circle {\n	fill: none;\n	stroke: hsl(3, 0%, 0%);\n	stroke-width: 5;\n	stroke-dasharray: 1, 200;\n	stroke-dashoffset: 0;\n	stroke-linecap: round;\n	animation: dash4 1.5s ease-in-out infinite;\n}\n\n@keyframes rotate4 {\n	100% {\n		transform: rotate(360deg);\n	}\n}\n\n@keyframes dash4 {\n	0% {\n		stroke-dasharray: 1, 200;\n		stroke-dashoffset: 0;\n	}\n\n	50% {\n		stroke-dasharray: 90, 200;\n		stroke-dashoffset: -35px;\n	}\n\n	100% {\n		stroke-dashoffset: -125px;\n	}\n}\n\n.fc-wallet-cart-widget-19212-root .skeletonloader {\n	background-image: linear-gradient(90deg,\n			#ccc 0px,\n			rgb(229 229 229 / 90%) 40px,\n			#ccc 80px);\n	background-size: 300%;\n	background-position: 100% 0;\n	border-radius: inherit;\n	animation: shimmer 1.5s infinite;\n}\n\n@keyframes shimmer {\n	to {\n		background-position: -100% 0;\n	}\n}\n\n\n.fc-wallet-cart-widget-19212-root .wallet-applied-details-container {\n	background-color: #ebebeb;\n    margin-top: 8px;\n    padding: 4px 8px;\n}\n\n.fc-wallet-cart-widget-19212-root .wallet-applied-details-container .wallet-applied-details {\n	display: flex;\n	justify-content: space-between;\n	align-items: center;\n}';
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
  function Checkbox({
    walletApplied,
    setWalletApplied
  }) {
    return o(k$1, {
      children: o("div", {
        class: "checkbox-container",
        children: o("label", {
          class: "container",
          children: [o("input", {
            checked: walletApplied,
            type: "checkbox",
            onClick: () => {
              setWalletApplied((prev) => !prev);
            }
          }), o("div", {
            class: "checkmark"
          })]
        })
      })
    });
  }
  function CircularLoader() {
    return o(k$1, {
      children: o("svg", {
        class: "circularloader",
        viewBox: "25 25 50 50",
        children: o("circle", {
          r: "20",
          cy: "50",
          cx: "50"
        })
      })
    });
  }
  function SkeletonLoader({
    width = "30px",
    height = "10px"
  }) {
    return o(k$1, {
      children: o("div", {
        class: "skeletonloader",
        style: {
          width,
          height
        }
      })
    });
  }
  function setCookie(name, value, daysToExpire) {
    var expires = "";
    if (daysToExpire) {
      var date = /* @__PURE__ */ new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  let debounceTimer;
  const returnDebouncedFunc = (mainFunction, delay) => {
    return function(...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };
  function ApplyWallet({
    customerDetails,
    checkoutTarget
  }) {
    const [userPoints, setUserPoints] = h(null);
    const [walletApplied, setWalletApplied] = h(localStorage.getItem("fc-wallet-cart-applied") === "true" || false);
    const [loadingWalletBal, setLoadingWalletBal] = h(false);
    const [walletAppliedDetails, setWalletAppliedDetails] = h({
      remainingWalletBalance: 0,
      walletDiscountApplied: 0,
      currency: null,
      totalPayablePrice: 0
    });
    const getUserPoints = async () => {
      var _a, _b, _c, _d;
      setLoadingWalletBal(true);
      try {
        const response = await fetch(`${WALLET_API_URI}/user-walletlogs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            customer_id: customerDetails == null ? void 0 : customerDetails.customerID,
            user_hash: customerDetails == null ? void 0 : customerDetails.customerTags,
            client_id: customerDetails == null ? void 0 : customerDetails.clientID
          })
        });
        let walletData = await response.json();
        let walletAmount = ((_d = (_c = (_b = (_a = walletData == null ? void 0 : walletData.data) == null ? void 0 : _a.data) == null ? void 0 : _b.wallet) == null ? void 0 : _c.wallet) == null ? void 0 : _d.amount) || 0;
        setUserPoints(walletAmount);
      } catch (err) {
        setUserPoints(0);
        setLoadingWalletBal(false);
      }
      setLoadingWalletBal(false);
    };
    const toggleUserWalletApplied = async (prevWalletApplied) => {
      var _a, _b, _c, _d, _e;
      setLoadingWalletBal(true);
      if (prevWalletApplied) {
        if (checkoutTarget == null ? void 0 : checkoutTarget.enable) {
          setCookie("discount_code", "", 7);
          const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetails = await cartRes.json();
          const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
          setWalletAppliedDetails({
            remainingWalletBalance: Number(userPoints),
            walletDiscountApplied: 0,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice)
          });
          setLoadingWalletBal(false);
        }
        const walletCouponCode2 = "WALLET_REMOVED19212";
        fetch(`/discount/${walletCouponCode2}`);
        await fetch(`/checkout/?discount=${walletCouponCode2}`, {
          method: "POST"
        });
        setCookie("discount_code", "", 7);
        if (!(checkoutTarget == null ? void 0 : checkoutTarget.enable)) {
          const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetails = await cartRes.json();
          const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
          setWalletAppliedDetails({
            remainingWalletBalance: Number(userPoints),
            walletDiscountApplied: 0,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice)
          });
          setLoadingWalletBal(false);
        }
      } else {
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        const prevWalletAmountApplied = (_b = (_a = cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications) == null ? void 0 : _a.find((item) => {
          var _a2;
          return (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.includes("WALLETAPPLIED");
        })) == null ? void 0 : _b.total_allocated_amount;
        const alreadyAppliedWalletDiscount = prevWalletAmountApplied ? prevWalletAmountApplied / 100 : 0;
        const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100 + alreadyAppliedWalletDiscount;
        const walletPointsToApply = Math.min(Number(userPoints), Number(totalPrice));
        try {
          const walletCouponResponse = await fetch(`${WALLET_API_URI}/loyalty/get-wallet-coupon`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              client_id: customerDetails == null ? void 0 : customerDetails.clientID,
              customer_id: customerDetails == null ? void 0 : customerDetails.customerID,
              wallet_points: walletPointsToApply
            })
          });
          const walletCouponData = await walletCouponResponse.json();
          var walletCouponCode = (_c = walletCouponData == null ? void 0 : walletCouponData.data) == null ? void 0 : _c.coupon_code;
        } catch (err) {
          setLoadingWalletBal(false);
        }
        if (checkoutTarget == null ? void 0 : checkoutTarget.enable) {
          setCookie("discount_code", walletCouponCode, 7);
          fetch(`/discount/${walletCouponCode}`);
          setWalletAppliedDetails({
            remainingWalletBalance: Number(userPoints) - walletPointsToApply,
            walletDiscountApplied: walletPointsToApply,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice) - walletPointsToApply
          });
          setLoadingWalletBal(false);
          const checkoutResponse = await fetch(`/checkout/?discount=${walletCouponCode}`, {
            method: "POST"
          });
          const checkoutURL = checkoutResponse == null ? void 0 : checkoutResponse.url;
          const updatedCheckoutRes = await fetch(checkoutURL);
          const updatedCheckout = await updatedCheckoutRes.text();
          let updatedCheckoutContainer = document.createElement("div");
          updatedCheckoutContainer.innerHTML = updatedCheckout;
          const totalFinalPrice = Number(updatedCheckoutContainer == null ? void 0 : updatedCheckoutContainer.querySelector("[data-checkout-payment-due-target]").getAttribute("data-checkout-payment-due-target")) / 100;
          setWalletAppliedDetails({
            remainingWalletBalance: Number(userPoints) - walletPointsToApply,
            walletDiscountApplied: walletPointsToApply,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: totalFinalPrice
          });
        } else {
          fetch(`/discount/${walletCouponCode}`);
          await fetch(`/checkout/?discount=${walletCouponCode}`, {
            method: "POST"
          });
          const cartResUpdated = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetailsUpdated = await cartResUpdated.json();
          const walletAppliedFromUpdatedCart = (_e = (_d = cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.cart_level_discount_applications) == null ? void 0 : _d.find((item) => {
            var _a2;
            return (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.includes("WALLETAPPLIED");
          })) == null ? void 0 : _e.total_allocated_amount;
          const walletPointsApplied = walletAppliedFromUpdatedCart ? walletAppliedFromUpdatedCart / 100 : 0;
          setWalletAppliedDetails({
            remainingWalletBalance: Number(userPoints) - walletPointsApplied,
            walletDiscountApplied: walletPointsApplied,
            currency: cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.currency,
            totalPayablePrice: (cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.total_price) / 100
          });
        }
      }
      setLoadingWalletBal(false);
    };
    const debouncedToggleUserWalletApplied = returnDebouncedFunc((prevWalletApplied) => toggleUserWalletApplied(prevWalletApplied), 200);
    const toggleUserWallet = () => {
      setWalletApplied((prev) => {
        debouncedToggleUserWalletApplied(prev);
        try {
          localStorage.setItem("fc-wallet-cart-applied", `${!prev}`);
        } catch (err) {
          console.log(err);
        }
        return !prev;
      });
    };
    p(() => {
      getUserPoints();
    }, []);
    p(() => {
      if (userPoints !== null && (checkoutTarget == null ? void 0 : checkoutTarget.isSet)) {
        toggleUserWalletApplied(!walletApplied);
      }
    }, [userPoints, checkoutTarget == null ? void 0 : checkoutTarget.isSet]);
    return o(k$1, {
      children: [o("div", {
        class: "wallet-box-container",
        onClick: toggleUserWallet,
        children: [o("p", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [o(Checkbox, {
            walletApplied,
            setWalletApplied
          }), o("span", {
            children: "Use Wallet Credit"
          }), loadingWalletBal ? o("span", {
            children: o(CircularLoader, {})
          }) : o(k$1, {})]
        }), o("p", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [o("p", {
            children: "Avl Bal "
          }), o("strong", {
            class: "point-details",
            children: [" ", loadingWalletBal ? o(k$1, {
              children: o(SkeletonLoader, {
                width: "50px",
                height: "16px"
              })
            }) : userPoints]
          })]
        })]
      }), o("div", {
        class: "wallet-applied-details-container",
        children: [walletApplied ? o(k$1, {
          children: [o("div", {
            class: "wallet-applied-details",
            children: [o("p", {
              children: "Remaining Wallet Balance"
            }), o("p", {
              class: "point-details",
              children: loadingWalletBal ? o(SkeletonLoader, {
                width: "50px",
                height: "16px"
              }) : walletAppliedDetails == null ? void 0 : walletAppliedDetails.remainingWalletBalance
            })]
          }), o("div", {
            class: "wallet-applied-details",
            children: [o("p", {
              children: "Wallet Discount Applied"
            }), o("p", {
              class: "point-details",
              children: loadingWalletBal ? o(SkeletonLoader, {
                width: "50px",
                height: "16px"
              }) : (walletAppliedDetails == null ? void 0 : walletAppliedDetails.walletDiscountApplied) ? o(k$1, {
                children: ["- ", ` ${Number(walletAppliedDetails == null ? void 0 : walletAppliedDetails.walletDiscountApplied).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "INR"
                })}`]
              }) : 0
            })]
          })]
        }) : o(k$1, {}), o("div", {
          class: "wallet-applied-details",
          children: [o("p", {
            children: "Total Payable Amount"
          }), o("p", {
            class: "point-details",
            children: loadingWalletBal ? o(SkeletonLoader, {
              width: "50px",
              height: "16px"
            }) : o(k$1, {
              children: ` ${Number(walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalPayablePrice).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              })}`
            })
          })]
        })]
      })]
    });
  }
  function Login({
    themeDetails
  }) {
    var _a;
    return o(k$1, {
      children: o("div", {
        class: "login-container",
        children: o("a", {
          href: (_a = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _a.login_page,
          children: "Login to use wallet discount"
        })
      })
    });
  }
  function Main({
    themeDetailsData
  }) {
    const [customerDetails, setCustomerDetails] = h({
      customerID: "",
      customerTags: "",
      clientID: ""
    });
    const [checkoutTarget, setCheckoutTarget] = h({
      enable: false,
      isSet: false
    });
    p(() => {
      var _a;
      const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
      const customer_id = mainScript.getAttribute("data-customer-id");
      const customer_tags = (_a = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a.trim();
      const client_id = mainScript.getAttribute("data-client-id");
      const checkout_target = mainScript.getAttribute("data-checkout-target");
      if (checkout_target) {
        setCheckoutTarget({
          enable: true,
          isSet: true
        });
      } else {
        setCheckoutTarget({
          enable: false,
          isSet: true
        });
      }
      setCustomerDetails({
        customerID: customer_id,
        customerTags: customer_tags,
        clientID: client_id
      });
    }, []);
    return o(k$1, {
      children: (customerDetails == null ? void 0 : customerDetails.customerID) ? o(ApplyWallet, {
        customerDetails,
        checkoutTarget
      }) : o(Login, {
        themeDetails: themeDetailsData
      })
    });
  }
  function App({
    themeDetailsData
  }) {
    return o(k$1, {
      children: [o("div", {
        class: "widget-container",
        children: o(Main, {
          themeDetailsData
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
  const WALLET_API_URI = "https://boat-api.farziengineer.co";
  async function renderWalletBox() {
    var _a, _b;
    try {
      const targetDiv = document.getElementById("fc-wallet-cart-widget-19212");
      targetDiv.innerHTML = "";
      let shadowTarget = document.createElement("div");
      shadowTarget.className = "fc-wallet-cart-widget-19212-target";
      shadowTarget.style.display = "block";
      targetDiv.appendChild(shadowTarget);
      let shadow = shadowTarget.attachShadow({
        mode: "open"
      });
      let shadowRoot = document.createElement("div");
      shadowRoot.className = "fc-wallet-cart-widget-19212-root";
      shadow.appendChild(shadowRoot);
      let themeDetailsData;
      if ((_a = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _a.theme_details) {
        themeDetailsData = window.fc_loyalty_vars.theme_details;
      } else {
        const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
        const client_id = mainScript.getAttribute("data-client-id");
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
          theme_details: themeDetailsData
        };
      }
      const clientCustomStyleData = ((_b = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _b.apply_wallet_snippet_css) || "";
      B$1(o(App, {
        themeDetailsData
      }), shadowRoot);
      B$1(o(AppCSS, {}), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-styles"));
      B$1(o(AppCustomCSS, {
        customStyles: clientCustomStyleData
      }), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-custom-styles"));
    } catch (err) {
      console.log("error", err);
    }
  }
  window.fc_loyalty_render_wallet_box = renderWalletBox;
  renderWalletBox();
  function checkWalletBox() {
    setInterval(() => {
      if (document.querySelector("#fc-wallet-cart-widget-19212 .fc-wallet-cart-widget-19212-target"))
        ;
      else {
        renderWalletBox();
      }
    }, 300);
  }
  window.fc_loyalty_check_wallet_box = checkWalletBox;
  checkWalletBox();
})();
