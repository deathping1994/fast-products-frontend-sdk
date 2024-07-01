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
  function g$2(n2, l2) {
    if (null == l2)
      return n2.__ ? g$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__d || u2.__e;
    return "function" == typeof n2.type ? g$2(n2) : null;
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
  function w$2(n2) {
    (!n2.__d && (n2.__d = true) && i$1.push(n2) && !x.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$1)(x);
  }
  function x() {
    var n2, l2, u2, t2, o2, r2, e2, c2, s2;
    for (i$1.sort(f$1); n2 = i$1.shift(); )
      n2.__d && (l2 = i$1.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = h$1({}, e2)).__v = e2.__v + 1, z$1(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g$2(e2) : c2, e2.__h, o2), L$1(t2, e2, o2), e2.__e != c2 && m$1(e2)), i$1.length > l2 && i$1.sort(f$1));
    x.__r = 0;
  }
  function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
    var p2, y2, _2, b2, m2, w2, x2, P2, C2, D2 = 0, H2 = t2 && t2.__k || s$1, I2 = H2.length, T2 = I2, j2 = l2.length;
    for (u2.__k = [], p2 = 0; p2 < j2; p2++)
      null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d$1(null, b2, null, null, b2) : v$1(b2) ? d$1(k$1, { children: b2 }, null, null, null) : b2.__b > 0 ? d$1(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) ? (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (P2 = A(b2, H2, x2 = p2 + D2, T2)) ? _2 = c$1 : (_2 = H2[P2] || c$1, H2[P2] = void 0, T2--), z$1(n2, b2, _2, i2, o2, r2, f2, e2, a2, h2), m2 = b2.__e, (y2 = b2.ref) && _2.ref != y2 && (_2.ref && N(_2.ref, null, b2), h2.push(y2, b2.__c || m2, b2)), null != m2 && (null == w2 && (w2 = m2), (C2 = _2 === c$1 || null === _2.__v) ? -1 == P2 && D2-- : P2 !== x2 && (P2 === x2 + 1 ? D2++ : P2 > x2 ? T2 > j2 - x2 ? D2 += P2 - x2 : D2-- : D2 = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p2 + D2, "function" != typeof b2.type || P2 === x2 && _2.__k !== b2.__k ? "function" == typeof b2.type || P2 === x2 && !C2 ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = m2.nextSibling : e2 = S(n2, m2, e2) : e2 = $$1(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2))) : (_2 = H2[p2]) && null == _2.key && _2.__e && (_2.__e == e2 && (_2.__ = t2, e2 = g$2(_2)), O(_2, _2, false), H2[p2] = null);
    for (u2.__e = w2, p2 = I2; p2--; )
      null != H2[p2] && ("function" == typeof u2.type && null != H2[p2].__e && H2[p2].__e == u2.__d && (u2.__d = H2[p2].__e.nextSibling), O(H2[p2], H2[p2]));
  }
  function $$1(n2, l2, u2) {
    for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
      (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? $$1(t2, l2, u2) : S(u2, t2.__e, l2));
    return l2;
  }
  function C$1(n2, l2) {
    return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (v$1(n2) ? n2.some(function(n3) {
      C$1(n3, l2);
    }) : l2.push(n2)), l2;
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
  function D$1(n2, l2, u2, t2, i2) {
    var o2;
    for (o2 in u2)
      "children" === o2 || "key" === o2 || o2 in l2 || I$1(n2, o2, null, u2[o2], t2);
    for (o2 in l2)
      i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || I$1(n2, o2, l2[o2], u2[o2], t2);
  }
  function H$1(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
  }
  function I$1(n2, l2, u2, t2, i2) {
    var o2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || H$1(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] === t2[l2] || H$1(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? j$1 : T$1, o2)) : n2.removeEventListener(l2, o2 ? j$1 : T$1, o2);
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
  function T$1(n2) {
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
    var a2, p2, y2, d2, _2, g2, m2, w2, x2, $2, C2, S2, A2, D2, H2, I2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l$1.__b) && a2(u2);
    n:
      if ("function" == typeof I2)
        try {
          if (w2 = u2.props, x2 = (a2 = I2.contextType) && i2[a2.__c], $2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = p2 = new I2(w2, $2) : (u2.__c = p2 = new b$1(w2, $2), p2.constructor = I2, p2.render = q$1), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = $2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != I2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = h$1({}, p2.__s)), h$1(p2.__s, I2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u2, y2)
            null == I2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, $2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, $2) || u2.__v === t2.__v)) {
              for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), C2 = 0; C2 < p2._sb.length; C2++)
                p2.__h.push(p2._sb[C2]);
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
  function L$1(n2, u2, t2) {
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
      if (D$1(l2, _2, d2, o2, e2), y2)
        u2.__k = [];
      else if (P(l2, v$1(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g$2(t2, 0), e2, s2), null != r2)
        for (b2 = r2.length; b2--; )
          null != r2[b2] && p$1(r2[b2]);
      e2 || ("value" in _2 && void 0 !== (b2 = _2.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && I$1(l2, "value", b2, d2.value, false), "checked" in _2 && void 0 !== (b2 = _2.checked) && b2 !== l2.checked && I$1(l2, "checked", b2, d2.checked, false));
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
  function q$1(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function B$2(u2, t2, i2) {
    var o2, r2, f2, e2;
    l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], z$1(t2, u2 = (!o2 && i2 || t2).__k = y(k$1, null, [u2]), r2 || c$1, c$1, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), L$1(f2, u2, e2);
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
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$2(this));
  }, b$1.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w$2(this));
  }, b$1.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, x.__r = 0;
  const style = `/* :root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color: #222;
	background-color: #ffffff;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
	display: flex;
	align-items: center;
	min-height: 100vh;
} */

.widget-container {
  --gradient_start_color: #20abff;
  --gradient_end_color: #8cc9ff;
  --gradient_deg:90deg;
  --discount_loading_icon:url('https://media.farziengineer.co/farziwallet/wallet_icon.svg');
}

.fc-wallet-cart-widget-19212-root * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.fc-wallet-cart-widget-19212-root a {
  text-decoration: none;
  color: inherit;
}

.fc-wallet-cart-widget-19212-root {
  width: 100%;
}

.fc-wallet-cart-widget-19212-root .login-container {
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  padding: 10px 10px;
}

.fc-wallet-cart-widget-19212-root .wallet-box-container {
  background-color: #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 8px;
}

.fc-wallet-cart-widget-19212-root .point-details {
  font-weight: bolder;
  margin-left: 6px;
}

.fc-wallet-cart-widget-19212-root .checkbox-container {
  padding: 0px 10px;
}

.fc-wallet-cart-widget-19212-root .checkbox-container .container input {
  display: none;
}

.fc-wallet-cart-widget-19212-root .checkbox-container .container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.fc-wallet-cart-widget-19212-root .checkbox-container .checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #2196f300;
  border-radius: 5px;
  transition: all 0.25s;
}

/* When the checkbox is checked, add a blue background */
.fc-wallet-cart-widget-19212-root
  .checkbox-container
  .container
  input:checked
  ~ .checkmark {
  background-color: #000000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.fc-wallet-cart-widget-19212-root .checkbox-container .checkmark:after {
  content: "";
  position: absolute;
  transform: rotate(0deg);
  border: 0.1em solid black;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  transition: all 0.25s, border-width 0.1s;
}

/* Show the checkmark when checked */
.fc-wallet-cart-widget-19212-root
  .checkbox-container
  .container
  input:checked
  ~ .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border-color: #fff0 white white #fff0;
  border-width: 0 0.15em 0.15em 0;
  border-radius: 0em;
  transform: rotate(45deg);
}

.fc-wallet-cart-widget-19212-root .circularloader {
  width: 20px;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
  margin-left: 8px;
}

.fc-wallet-cart-widget-19212-root .circularloader circle {
  fill: none;
  stroke: hsl(3, 0%, 0%);
  stroke-width: 5;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

.fc-wallet-cart-widget-19212-root .skeletonloader {
  background-image: linear-gradient(
    90deg,
    #ccc 0px,
    rgb(229 229 229 / 90%) 40px,
    #ccc 80px
  );
  background-size: 300%;
  background-position: 100% 0;
  border-radius: inherit;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  to {
    background-position: -100% 0;
  }
}

.fc-wallet-cart-widget-19212-root .wallet-applied-details-container {
  background-color: #ebebeb;
  margin-top: 8px;
  padding: 4px 8px;
}

.fc-wallet-cart-widget-19212-root
  .wallet-applied-details-container
  .wallet-applied-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fc-wallet-cart-widget-19212-root .apply-code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
}

.fc-wallet-cart-widget-19212-root .apply-code-container .input-container {
  width: 100%;
}

.fc-wallet-cart-widget-19212-root .apply-code-container .input-container input {
  width: 95%;
  padding: 10px;
}

.fc-wallet-cart-widget-19212-root .apply-code-container .apply-btn {
  background: #000;
  color: #fff;
  padding: 6px 16px;
}

.fc-wallet-cart-widget-19212-root .apply-btn .circularloader {
  width: 22px;
}

.fc-wallet-cart-widget-19212-root .apply-btn .circularloader circle {
  stroke: hsl(0, 0%, 100%);
}

.fc-wallet-cart-widget-19212-root .cashback-strip-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  color: white;
}

.fc-wallet-cart-widget-19212-root .cashback-strip-container p {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.fc-wallet-cart-widget-19212-root .cashback-strip-container p span {
  font-weight: 600;
}

.fc-wallet-cart-widget-19212-root .cashback-strip-container p::before {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: url("https://media.farziengineer.co/farziwallet/get-cashback.png");
  background-size: 100%;
  margin-right: 8px;
}

.modernWalletContainer {
  display: flex;
  justify-content: center;
  align-items: start;
}

.modernWalletContainer {
  padding: 12px;
  gap: 4px;
  border-radius: 8px;
  background-color: rgb(32, 171, 255);
  background: linear-gradient( var(--gradient_deg, 90deg), var(--gradient_start_color, #20abff) 0%, var(--gradient_end_color, #215aab) 100% );
}
.modernWalletMidContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
}

.modernWalletBalance {
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  padding: 0 4px;
  margin-top: 14px;
}

.modernWalletMidSection {
  width: 100%;
  font-size: 14px;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  gap: 0;
  color: black;
}

.modernWalletMidSection p:first-child {
  font-weight: bold;
  font-size: 16px;
}

.modernWalletMidSection p:nth-child(2) {
  font-size: 14px;
  line-height: 16px;
}

.moderWalletIcon {
  padding: 4px 0;
}

.wallet_icon {
  width: 28px;
  aspect-ratio: 1/1;
  background-image: var(--discount_loading_icon, url("https://media.farziengineer.co/farziwallet/wallet_icon.svg"));
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  background-position: center;
  background-size: cover;
}

.modernLoginButton {
  color: #215aab;
  background: none;
  border: none;
  font-size: 16px;
  height: 65px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
}

.modernLoginBox {
  width: 40%;
}

.modernWalletCheckboxContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
}

/* animated checkbox */

.modern-checkbox {
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  --background: #fff;
  --border: #7d7d7d;
  --border-hover: #bbc1e1;
  --border-active: #000;
  --tick: #fff;
  position: relative;
  input,
  svg {
    width: 21px;
    height: 21px;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: var(--background);
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    transition: box-shadow 0.3s;
    box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    &:hover {
      --s: 2px;
      --b: var(--border-hover);
    }
    &:checked {
      --b: var(--border-active);
    }
  }
  svg {
    pointer-events: none;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--stroke, var(--border-active));
    position: absolute;
    top: 4;
    left: 4;
    width: 21px;
    height: 21px;
    transform: scale(var(--scale, 1)) translateZ(0);
  }
  &.path {
    input {
      &:checked {
        --s: 2px;
        transition-delay: 0.4s;
        & + svg {
          --a: 16.1 86.12;
          --o: 102.22;
        }
      }
    }
    svg {
      stroke-dasharray: var(--a, 86.12);
      stroke-dashoffset: var(--o, 86.12);
      transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;
    }
  }
  &.bounce {
    --stroke: var(--tick);
    input {
      &:checked {
        --s: 11px;
        & + svg {
          animation: bounce 0.4s linear forwards 0.2s;
        }
      }
    }
    svg {
      --scale: 0;
    }
  }
}

@keyframes bounce {
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    .loaderBox {
      position: relative;
    }

    .loader {
      width: 26px;
      height: 26px; /* adjust this to fit the image */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      aspect-ratio: 1/1;
      border: 3px solid #000;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    .loader img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}

/* spinner */

.spinner-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
  }
  
  .spinner {
	width: 28px;
  	height: 28px;
	border: 4px solid #ccc;
	border-top-color: #111;
	border-radius: 50%;
	animation: spin 1s linear infinite;
  }
  
  .spinner-image {
	width: 14px;
	height: 15px;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
  }
  
  @keyframes spin {
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
  }`;
  var t, r, u, i, o$1 = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
  function d(t2, u2) {
    l$1.__h && l$1.__h(r, t2, o$1 || u2), o$1 = 0;
    var i2 = r.__H || (r.__H = { __: [], __h: [] });
    return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
  }
  function h(n2) {
    return o$1 = 1, s(B$1, n2);
  }
  function s(n2, u2, i2) {
    var o2 = d(t++, 2);
    if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$1(void 0, u2), function(n3) {
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
  function F$1(n2, r2) {
    var u2 = d(t++, 7);
    return z(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
  }
  function b() {
    for (var t2; t2 = f.shift(); )
      if (t2.__P && t2.__H)
        try {
          t2.__H.__h.forEach(k), t2.__H.__h.forEach(w$1), t2.__H.__h = [];
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
    })) : (i2.__h.forEach(k), i2.__h.forEach(w$1), i2.__h = [], t = 0)), u = r;
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
          return !n2.__ || w$1(n2);
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
  var g$1 = "function" == typeof requestAnimationFrame;
  function j(n2) {
    var t2, r2 = function() {
      clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    g$1 && (t2 = requestAnimationFrame(r2));
  }
  function k(n2) {
    var t2 = r, u2 = n2.__c;
    "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
  }
  function w$1(n2) {
    var t2 = r;
    n2.__c = n2.__(), r = t2;
  }
  function z(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n2[r2];
    });
  }
  function B$1(n2, t2) {
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
  function g(n2, t2) {
    for (var e2 in t2)
      n2[e2] = t2[e2];
    return n2;
  }
  function C(n2, t2) {
    for (var e2 in n2)
      if ("__source" !== e2 && !(e2 in t2))
        return true;
    for (var r2 in t2)
      if ("__source" !== r2 && n2[r2] !== t2[r2])
        return true;
    return false;
  }
  function w(n2) {
    this.props = n2;
  }
  (w.prototype = new b$1()).isPureReactComponent = true, w.prototype.shouldComponentUpdate = function(n2, t2) {
    return C(this.props, n2) || C(this.state, t2);
  };
  var R = l$1.__b;
  l$1.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
  };
  var T = l$1.__e;
  l$1.__e = function(n2, t2, e2, r2) {
    if (n2.then) {
      for (var u2, o2 = t2; o2 = o2.__; )
        if ((u2 = o2.__c) && u2.__c)
          return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
    }
    T(n2, t2, e2, r2);
  };
  var F = l$1.unmount;
  function I(n2, t2, e2) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I(n3, t2, e2);
    })), n2;
  }
  function L(n2, t2, e2) {
    return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L(n3, t2, e2);
    }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D(n2) {
    var t2 = n2.__.__c;
    return t2 && t2.__a && t2.__a(n2);
  }
  function V() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function(n2) {
    var t2 = n2.__c;
    t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), F && F(n2);
  }, (U.prototype = new b$1()).__c = function(n2, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u2 = D(r2.__v), o2 = false, i2 = function() {
      o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
    };
    e2.__R = i2;
    var l2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var n3 = r2.state.__a;
          r2.__v.__k[0] = L(n3, n3.__c.__P, n3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
          t3.forceUpdate();
      }
    }, c2 = true === t2.__h;
    r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
  }, U.prototype.componentWillUnmount = function() {
    this.t = [];
  }, U.prototype.render = function(n2, e2) {
    if (this.__b) {
      if (this.__v.__k) {
        var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = I(this.__b, r2, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i2 = e2.__a && y(k$1, null, n2.fallback);
    return i2 && (i2.__h = null), [y(k$1, null, e2.__a ? null : n2.children), i2];
  };
  var W = function(n2, t2, e2) {
    if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e2 = n2.u; e2; ) {
        for (; e2.length > 3; )
          e2.pop()();
        if (e2[1] < e2[0])
          break;
        n2.u = e2 = e2[2];
      }
  };
  (V.prototype = new b$1()).__a = function(n2) {
    var t2 = this, e2 = D(t2.__v), r2 = t2.o.get(n2);
    return r2[0]++, function(u2) {
      var o2 = function() {
        t2.props.revealOrder ? (r2.push(u2), W(t2, n2, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, V.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = C$1(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; )
      this.o.set(t2[e2], this.u = [1, 0, this.u]);
    return n2.children;
  }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t2, e2) {
      W(n2, e2, t2);
    });
  };
  var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, $ = "undefined" != typeof document, q = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  b$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
    Object.defineProperty(b$1.prototype, t2, { configurable: true, get: function() {
      return this["UNSAFE_" + t2];
    }, set: function(n2) {
      Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
    } });
  });
  var K = l$1.event;
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  l$1.event = function(n2) {
    return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
  };
  var en = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } }, rn = l$1.vnode;
  l$1.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t2 = n3.props, e2 = n3.type, u2 = {};
      for (var o2 in t2) {
        var i2 = t2[o2];
        if (!("value" === o2 && "defaultValue" in t2 && null == i2 || $ && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
          var l2 = o2.toLowerCase();
          "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || q(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : Z.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && H.test(o2) ? o2 = o2.replace(Y, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
        }
      }
      "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = C$1(t2.children).forEach(function(n4) {
        n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
      })), "select" == e2 && null != u2.defaultValue && (u2.value = C$1(t2.children).forEach(function(n4) {
        n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
      })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", en)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
    }(n2), n2.$$typeof = B, rn && rn(n2);
  };
  var un = l$1.__r;
  l$1.__r = function(n2) {
    un && un(n2), n2.__c;
  };
  var on = l$1.diffed;
  l$1.diffed = function(n2) {
    on && on(n2);
    var t2 = n2.props, e2 = n2.__e;
    null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value);
  };
  const ModernLogin = ({
    themeDetailsData,
    customerDetails
  }) => {
    var _a, _b;
    const [walletRedemptionLimitDetails, setWalletRedemptionLimitDetails] = h({
      amount: 0,
      type: null
    });
    p(() => {
      const getWalletRemeptionLimit = async () => {
        var _a2, _b2, _c, _d;
        try {
          const response = await fetch(`${WALLET_API_URI}/client-wallet-limit`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              // customer_id: customerDetails?.customerID,
              // user_hash: customerDetails?.customerTags,
              client_id: customerDetails == null ? void 0 : customerDetails.clientID
            })
          });
          let walletData = await response.json();
          setWalletRedemptionLimitDetails({
            type: (_b2 = (_a2 = walletData == null ? void 0 : walletData.data) == null ? void 0 : _a2.limit_details) == null ? void 0 : _b2.type,
            amount: Number((_d = (_c = walletData == null ? void 0 : walletData.data) == null ? void 0 : _c.limit_details) == null ? void 0 : _d.amount)
          });
        } catch (err) {
          setWalletRedemptionLimitDetails({
            type: "FIXED",
            amount: 0
          });
        }
      };
      getWalletRemeptionLimit();
    }, []);
    const handleLogin = () => {
      var _a2;
      if (window == null ? void 0 : window.fc_custom_login)
        window == null ? void 0 : window.fc_custom_login();
      else
        window.location.href = ((_a2 = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a2.login_page) || "/account/login";
    };
    return o(k$1, {
      children: o("div", {
        className: "modernWalletContainer",
        children: [o("div", {
          className: "modernWalletIcon",
          children: o("div", {
            className: "wallet_icon"
          })
        }), o("div", {
          className: "modernWalletMidContainer",
          children: o("div", {
            className: "modernWalletMidSection",
            children: [o("p", {
              children: (_a = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a.coin_name
            }), o("p", {
              children: [(walletRedemptionLimitDetails == null ? void 0 : walletRedemptionLimitDetails.type) === "CART_PERCENT" ? `${walletRedemptionLimitDetails == null ? void 0 : walletRedemptionLimitDetails.amount}% of the Grand Total ` : `Maximum ${Number(walletRedemptionLimitDetails == null ? void 0 : walletRedemptionLimitDetails.amount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              })} `, "can be paid via", " " + ((_b = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _b.coin_name)]
            })]
          })
        }), o("div", {
          className: "modernLoginBox",
          children: o("button", {
            className: "modernLoginButton",
            onClick: handleLogin,
            children: "Login Now"
          })
        })]
      })
    });
  };
  const ModernMain = ({
    themeDetailsData,
    walletAppliedDetails,
    toggleUserWallet,
    walletApplied,
    customerDetails,
    loadingWalletBal,
    walletRedemptionLimitDetails
  }) => {
    var _a, _b, _c, _d;
    const [storedWalletDetails, setStoredWalletDetails] = h(null);
    const applyWalletLoader = ((_b = (_a = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a.apply_wallet_loader) == null ? void 0 : _b.toLowerCase()) !== "false";
    const getWalletRedemptionLimitDetails = () => {
      if (!(walletRedemptionLimitDetails == null ? void 0 : walletRedemptionLimitDetails.type)) {
        const storedLimitDetails = localStorage.getItem("fc-wallet-redemption-limit");
        return storedLimitDetails ? JSON.parse(storedLimitDetails) : null;
      }
      return walletRedemptionLimitDetails;
    };
    const effectiveWalletRedemptionLimitDetails = getWalletRedemptionLimitDetails();
    p(() => {
      const storedDetails = sessionStorage.getItem("walletAppliedDetails");
      if (storedDetails) {
        setStoredWalletDetails(JSON.parse(storedDetails));
      } else {
        sessionStorage.setItem("walletAppliedDetails", JSON.stringify(walletAppliedDetails));
        setStoredWalletDetails(walletAppliedDetails);
      }
    }, [walletAppliedDetails]);
    p(() => {
      if (walletAppliedDetails.walletDiscountApplied !== 0 || walletAppliedDetails.remainingWalletBalance !== 0) {
        sessionStorage.setItem("walletAppliedDetails", JSON.stringify(walletAppliedDetails));
        setStoredWalletDetails(walletAppliedDetails);
      }
    }, [walletAppliedDetails]);
    const handleCheckbox = (event) => {
      event.stopPropagation();
      toggleUserWallet(walletApplied);
    };
    const detailsToUse = storedWalletDetails || walletAppliedDetails;
    return o(k$1, {
      children: (customerDetails == null ? void 0 : customerDetails.customerTags) !== "" ? o("div", {
        className: "modernWalletContainer",
        children: [o("div", {
          className: "modernWalletIcon",
          children: o("div", {
            className: "wallet_icon"
          })
        }), o("div", {
          className: "modernWalletMidContainer",
          children: [o("div", {
            className: "modernWalletMidSection",
            children: [o("p", {
              children: [(_c = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _c.coin_name, walletApplied && ` Applied : ${Number(detailsToUse.walletDiscountApplied.toFixed(2)).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              })}`]
            }), (effectiveWalletRedemptionLimitDetails == null ? void 0 : effectiveWalletRedemptionLimitDetails.type) && o("p", {
              children: [(effectiveWalletRedemptionLimitDetails == null ? void 0 : effectiveWalletRedemptionLimitDetails.type) === "CART_PERCENT" ? `${effectiveWalletRedemptionLimitDetails == null ? void 0 : effectiveWalletRedemptionLimitDetails.amount}% of the Grand Total ` : `Maximum ${Number(effectiveWalletRedemptionLimitDetails == null ? void 0 : effectiveWalletRedemptionLimitDetails.amount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              })} `, "can be paid via ", (_d = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _d.coin_name]
            })]
          }), o("div", {
            className: "modernWalletBalance",
            children: [o("p", {
              children: "Balance"
            }), o("p", {
              children: walletApplied ? Number(detailsToUse == null ? void 0 : detailsToUse.remainingWalletBalance.toFixed(2)).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              }) : Number(detailsToUse == null ? void 0 : detailsToUse.remainingWalletBalance.toFixed(2)).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              })
            })]
          })]
        }), o("div", {
          className: "modernWalletCheckboxContainer",
          children: applyWalletLoader && loadingWalletBal ? o("div", {
            className: "spinner-container",
            children: [o("div", {
              className: "spinner"
            }), o("img", {
              src: "https://media.farziengineer.co/farziwallet/wallet_icon.svg",
              alt: "Wallet Icon",
              className: "spinner-image"
            })]
          }) : o("div", {
            className: "modern-checkbox bounce",
            children: [o("input", {
              type: "checkbox",
              checked: walletApplied,
              onChange: handleCheckbox
            }), o("svg", {
              viewBox: "0 0 21 21",
              children: o("polyline", {
                points: "5 10.75 8.5 14.25 16 6"
              })
            })]
          })
        })]
      }) : o(ModernLogin, {
        themeDetailsData,
        customerDetails
      })
    });
  };
  let debounceTimer;
  const returnDebouncedFunc = (mainFunction, delay) => {
    return function(...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };
  const calculateWalletRedemptionLimit = ({
    walletRedemptionLimitDetails,
    cartTotalPrice
  }) => {
    let walletLimitAmount;
    const walletRedemptionLimitDetails2 = JSON.parse(localStorage.getItem("fc-wallet-redemption-limit"));
    if ((walletRedemptionLimitDetails2 == null ? void 0 : walletRedemptionLimitDetails2.type) === "CART_PERCENT") {
      walletLimitAmount = (walletRedemptionLimitDetails2 == null ? void 0 : walletRedemptionLimitDetails2.amount) / 100 * cartTotalPrice;
    } else if ((walletRedemptionLimitDetails2 == null ? void 0 : walletRedemptionLimitDetails2.type) === "FIXED") {
      walletLimitAmount = Number((walletRedemptionLimitDetails2 == null ? void 0 : walletRedemptionLimitDetails2.amount) || "0");
    } else {
      JSON.parse(localStorage.getItem("fc-wallet-redemption-limit"));
      walletLimitAmount = Number((walletRedemptionLimitDetails2 == null ? void 0 : walletRedemptionLimitDetails2.amount) || "0");
    }
    return walletLimitAmount;
  };
  function ApplyWallet({
    customerDetails,
    checkoutTarget,
    renderApplyCouponCodeBox,
    refetchCartSummary,
    calculateCashback,
    setUserHash,
    renderWalletCredit,
    themeDetailsData
  }) {
    const [userPoints, setUserPoints] = h(null);
    const [walletApplied, setWalletApplied] = h(localStorage.getItem("fc-wallet-cart-applied") === "true" || false);
    const [loadingWalletBal, setLoadingWalletBal] = h(false);
    const [walletAppliedDetails, setWalletAppliedDetails] = h({
      remainingWalletBalance: 0,
      walletDiscountApplied: 0,
      currency: null,
      totalPayablePrice: 0,
      couponDiscountApplied: 0
    });
    F$1(() => localStorage.getItem("totalCartPrice"), []);
    const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
    const checkout_total = mainScript.getAttribute("data-checkout-total");
    const walletUiTheme = mainScript.getAttribute("wallet-theme");
    try {
      const checkoutTotalTag = document.querySelector(`.${checkout_total}`);
      checkoutTotalTag.innerHTML = `${String.fromCharCode(160)}${Number(walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalPayablePrice).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        style: "currency",
        currency: "INR"
      })}`;
    } catch (error) {
      console.log(error);
    }
    const [walletRedemptionLimitDetails, setWalletRedemptionLimitDetails] = h({
      amount: 0,
      type: null
    });
    const applyWalletAmount = (amount) => {
      const event = new CustomEvent("wallet_amount_applied", {
        detail: {
          amount
        }
      });
      window.fc_wallet_amount = amount;
      document.dispatchEvent(event);
    };
    const getUserPoints = async () => {
      var _a, _b, _c, _d, _e, _f;
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
        let get_user_hash = (_f = (_e = walletData == null ? void 0 : walletData.data) == null ? void 0 : _e.data) == null ? void 0 : _f.user_hash;
        if (get_user_hash) {
          setUserHash({
            ...customerDetails,
            customerTags: get_user_hash
          });
          sessionStorage.setItem("fc_wallet_user_hash", get_user_hash);
        }
        setUserPoints(walletAmount);
      } catch (err) {
        setUserPoints(0);
      }
    };
    const getWalletRemeptionLimit = async () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      try {
        const response = await fetch(`${WALLET_API_URI}/client-wallet-limit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            // customer_id: customerDetails?.customerID,
            // user_hash: customerDetails?.customerTags,
            client_id: customerDetails == null ? void 0 : customerDetails.clientID
          })
        });
        let walletData = await response.json();
        setWalletRedemptionLimitDetails({
          type: (_b = (_a = walletData == null ? void 0 : walletData.data) == null ? void 0 : _a.limit_details) == null ? void 0 : _b.type,
          amount: Number((_d = (_c = walletData == null ? void 0 : walletData.data) == null ? void 0 : _c.limit_details) == null ? void 0 : _d.amount)
        });
        const lmt = {
          type: (_f = (_e = walletData == null ? void 0 : walletData.data) == null ? void 0 : _e.limit_details) == null ? void 0 : _f.type,
          amount: Number((_h = (_g = walletData == null ? void 0 : walletData.data) == null ? void 0 : _g.limit_details) == null ? void 0 : _h.amount)
        };
        localStorage.setItem("fc-wallet-redemption-limit", JSON.stringify(lmt));
      } catch (err) {
        setWalletRedemptionLimitDetails({
          type: "FIXED",
          amount: 0
        });
        localStorage.setItem("fc-wallet-redemption-limit", JSON.stringify({
          type: "FIXED",
          amount: 0
        }));
      }
    };
    const copyToggleUserWalletApplied = async (prevWalletApplied) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      setLoadingWalletBal(true);
      if (prevWalletApplied) {
        if (checkoutTarget == null ? void 0 : checkoutTarget.enable) {
          setCookie("discount_code", "", 7);
          const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetails = await cartRes.json();
          const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
          localStorage.setItem("totalCartPrice", `${totalPrice}`);
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints),
            walletDiscountApplied: 0,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice)
          });
          applyWalletAmount(0);
          setLoadingWalletBal(false);
        }
        setCookie("docapp-coupon", "", 7);
        setCookie("docapp-auto-coupon", "", 7);
        try {
          localStorage.removeItem("docapp-coupon");
        } catch (err) {
          console.log(err);
        }
        const walletCouponCode2 = "WALLET_REMOVED19212";
        const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode2}`);
        if (localStorage.getItem("fc_refresh_cart_update_status") === "true") {
          localStorage.setItem("fc_refresh_cart_update_status", "false");
          fc_coupon_toggle(window.fc_refresh_cart);
        }
        await fetch(`/checkout/?discount=${walletCouponCode2},${appliedDiscountCode}`, {
          method: "POST"
        });
        setCookie("discount_code", "", 7);
        if (!(checkoutTarget == null ? void 0 : checkoutTarget.enable)) {
          const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetails = await cartRes.json();
          const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
          localStorage.setItem("totalCartPrice", `${totalPrice}`);
          const appliedDiscountCodeAmount = (_b = (_a = cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications) == null ? void 0 : _a.find((item) => {
            var _a2;
            return ((_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.toLowerCase()) === (appliedDiscountCode == null ? void 0 : appliedDiscountCode.toLowerCase());
          })) == null ? void 0 : _b.total_allocated_amount;
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints),
            walletDiscountApplied: 0,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice),
            couponDiscountApplied: appliedDiscountCodeAmount / 100
          });
          applyWalletAmount(0);
          setLoadingWalletBal(false);
        }
      } else {
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        const prevWalletAmountApplied = (_d = (_c = cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications) == null ? void 0 : _c.find((item) => {
          var _a2;
          return (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.includes("CLENSTACASH");
        })) == null ? void 0 : _d.total_allocated_amount;
        const alreadyAppliedWalletDiscount = prevWalletAmountApplied ? prevWalletAmountApplied / 100 : 0;
        const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100 + alreadyAppliedWalletDiscount;
        const walletPointsToApplyBeforeLimit = Math.min(Number(userPoints), Number(totalPrice));
        const walletRedemptionLimit = calculateWalletRedemptionLimit({
          walletRedemptionLimitDetails,
          cartTotalPrice: Number(totalPrice)
        });
        const walletPointsToApply = walletRedemptionLimit ? Math.min(Number(walletPointsToApplyBeforeLimit), Number(walletRedemptionLimit)) : walletPointsToApplyBeforeLimit;
        try {
          localStorage.setItem("rtly-applied-discount", `${Math.round(walletPointsToApply)}`);
          if (walletPointsToApply > 0) {
            const walletCouponResponse = await fetch(`${WALLET_API_URI}/loyalty/get-wallet-coupon`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                client_id: customerDetails == null ? void 0 : customerDetails.clientID,
                customer_id: customerDetails == null ? void 0 : customerDetails.customerID,
                user_hash: customerDetails == null ? void 0 : customerDetails.customerTags,
                wallet_points: Math.round(walletPointsToApply)
              })
            });
            const walletCouponData = await walletCouponResponse.json();
            var walletCouponCode = (_e = walletCouponData == null ? void 0 : walletCouponData.data) == null ? void 0 : _e.coupon_code;
            localStorage.setItem("fc-wallet-applied-code", walletCouponCode);
          } else {
            setWalletApplied(false);
          }
        } catch (err) {
          console.log(err);
        }
        if (checkoutTarget == null ? void 0 : checkoutTarget.enable) {
          setCookie("discount_code", walletCouponCode, 7);
          !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
          if (localStorage.getItem("fc_refresh_cart_update_status") === "true" || localStorage.getItem("fc_refresh_cart_update_status") === null) {
            localStorage.setItem("fc_refresh_cart_update_status", "false");
            fc_coupon_toggle(window.fc_refresh_cart);
          }
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints) - walletPointsToApply,
            walletDiscountApplied: walletPointsToApply,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice) - walletPointsToApply
          });
          const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
          const checkoutResponse = await fetch(appliedDiscountCode ? `/checkout/?discount=${walletCouponCode},${appliedDiscountCode}` : `/checkout/?discount=${walletCouponCode}`, {
            method: "POST"
          });
          const checkoutURL = checkoutResponse == null ? void 0 : checkoutResponse.url;
          const updatedCheckoutRes = await fetch(checkoutURL);
          const updatedCheckout = await updatedCheckoutRes.text();
          let updatedCheckoutContainer = document.createElement("div");
          updatedCheckoutContainer.innerHTML = updatedCheckout;
          const totalFinalPrice = Number(updatedCheckoutContainer == null ? void 0 : updatedCheckoutContainer.querySelector("[data-checkout-payment-due-target]").getAttribute("data-checkout-payment-due-target")) / 100;
          setWalletAppliedDetails((prevWalletAppliedDetails) => ({
            ...prevWalletAppliedDetails,
            remainingWalletBalance: Number(userPoints) - walletPointsToApply,
            walletDiscountApplied: walletPointsToApply,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: totalFinalPrice
          }));
          applyWalletAmount(walletPointsToApply);
          setLoadingWalletBal(false);
        } else {
          const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
          !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
          const checkoutResponse = await fetch(`/checkout/?discount=${walletCouponCode},${appliedDiscountCode}`, {
            method: "POST"
          });
          if (checkoutResponse) {
            if (localStorage.getItem("fc_refresh_cart_update_status") === "true" || localStorage.getItem("fc_refresh_cart_update_status") === null) {
              localStorage.setItem("fc_refresh_cart_update_status", "false");
              fc_coupon_toggle(window.fc_refresh_cart);
            }
          }
          const cartResUpdated = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetailsUpdated = await cartResUpdated.json();
          const walletAppliedFromUpdatedCart = (_g = (_f = cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.cart_level_discount_applications) == null ? void 0 : _f.find((item) => {
            var _a2;
            return (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.includes("CLENSTACASH");
          })) == null ? void 0 : _g.total_allocated_amount;
          const walletPointsApplied = walletAppliedFromUpdatedCart ? walletAppliedFromUpdatedCart / 100 : 0;
          const appliedDiscountCodeAmount = (_i = (_h = cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.cart_level_discount_applications) == null ? void 0 : _h.find((item) => {
            var _a2;
            return ((_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.toLowerCase()) === (appliedDiscountCode == null ? void 0 : appliedDiscountCode.toLowerCase());
          })) == null ? void 0 : _i.total_allocated_amount;
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints) - walletPointsApplied,
            walletDiscountApplied: walletPointsApplied,
            currency: cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.currency,
            totalPayablePrice: (cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.total_price) / 100,
            couponDiscountApplied: appliedDiscountCodeAmount / 100
          });
          applyWalletAmount(walletPointsApplied);
          setLoadingWalletBal(false);
        }
      }
    };
    const toggleUserWalletApplied = async (prevWalletApplied) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      localStorage.setItem("fc-cart-updated", "false");
      setLoadingWalletBal(true);
      if (prevWalletApplied) {
        if (checkoutTarget == null ? void 0 : checkoutTarget.enable) {
          setCookie("discount_code", "", 7);
          const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetails = await cartRes.json();
          const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
          localStorage.setItem("totalCartPrice", `${totalPrice}`);
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints),
            walletDiscountApplied: 0,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice)
          });
          applyWalletAmount(0);
          setLoadingWalletBal(false);
        }
        setCookie("docapp-coupon", "", 7);
        setCookie("docapp-auto-coupon", "", 7);
        try {
          localStorage.removeItem("docapp-coupon");
        } catch (err) {
          console.log(err);
        }
        const walletCouponCode2 = "WALLET_REMOVED19212";
        const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
        !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode2}`);
        if (localStorage.getItem("fc_refresh_cart_update_status") === "true" || localStorage.getItem("fc_refresh_cart_update_status") === null) {
          localStorage.setItem("fc_refresh_cart_update_status", "false");
          fc_coupon_toggle(window.fc_refresh_cart);
        }
        await fetch(`/checkout/?discount=${walletCouponCode2},${appliedDiscountCode}`, {
          method: "POST"
        });
        setCookie("discount_code", "", 7);
        if (!(checkoutTarget == null ? void 0 : checkoutTarget.enable)) {
          const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetails = await cartRes.json();
          const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
          localStorage.setItem("totalCartPrice", `${totalPrice}`);
          const appliedDiscountCodeAmount = (_b = (_a = cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications) == null ? void 0 : _a.find((item) => {
            var _a2;
            return ((_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.toLowerCase()) === (appliedDiscountCode == null ? void 0 : appliedDiscountCode.toLowerCase());
          })) == null ? void 0 : _b.total_allocated_amount;
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints),
            walletDiscountApplied: 0,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice),
            couponDiscountApplied: appliedDiscountCodeAmount / 100
          });
          applyWalletAmount(0);
          setLoadingWalletBal(false);
        }
      } else {
        const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
        const cartDetails = await cartRes.json();
        const prevWalletAmountApplied = (_d = (_c = cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications) == null ? void 0 : _c.find((item) => {
          var _a2;
          return (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.includes("CLENSTACASH");
        })) == null ? void 0 : _d.total_allocated_amount;
        const alreadyAppliedWalletDiscount = prevWalletAmountApplied ? prevWalletAmountApplied / 100 : 0;
        const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100 + alreadyAppliedWalletDiscount;
        const walletPointsToApplyBeforeLimit = Math.min(Number(userPoints), Number(totalPrice));
        const walletRedemptionLimit = calculateWalletRedemptionLimit({
          walletRedemptionLimitDetails,
          cartTotalPrice: Number(totalPrice)
        });
        const walletPointsToApply = walletRedemptionLimit ? Math.min(Number(walletPointsToApplyBeforeLimit), Number(walletRedemptionLimit)) : walletPointsToApplyBeforeLimit;
        try {
          localStorage.setItem("rtly-applied-discount", `${Math.round(walletPointsToApply)}`);
          if (walletPointsToApply > 0) {
            const walletCouponResponse = await fetch(`${WALLET_API_URI}/loyalty/get-wallet-coupon`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                client_id: customerDetails == null ? void 0 : customerDetails.clientID,
                customer_id: customerDetails == null ? void 0 : customerDetails.customerID,
                user_hash: customerDetails == null ? void 0 : customerDetails.customerTags,
                wallet_points: Math.round(walletPointsToApply)
              })
            });
            const walletCouponData = await walletCouponResponse.json();
            var walletCouponCode = (_e = walletCouponData == null ? void 0 : walletCouponData.data) == null ? void 0 : _e.coupon_code;
            localStorage.setItem("fc-wallet-applied-code", walletCouponCode);
          } else {
            setWalletApplied(false);
          }
        } catch (err) {
          console.log(err);
        }
        if (checkoutTarget == null ? void 0 : checkoutTarget.enable) {
          setCookie("discount_code", walletCouponCode, 7);
          !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
          if (localStorage.getItem("fc_refresh_cart_update_status") === "true" || localStorage.getItem("fc_refresh_cart_update_status") === null) {
            localStorage.setItem("fc_refresh_cart_update_status", "false");
            fc_coupon_toggle(window.fc_refresh_cart);
          }
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints) - walletPointsToApply,
            walletDiscountApplied: walletPointsToApply,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: Number(totalPrice) - walletPointsToApply
          });
          const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
          const checkoutResponse = await fetch(appliedDiscountCode ? `/checkout/?discount=${walletCouponCode},${appliedDiscountCode}` : `/checkout/?discount=${walletCouponCode}`, {
            method: "POST"
          });
          const checkoutURL = checkoutResponse == null ? void 0 : checkoutResponse.url;
          const updatedCheckoutRes = await fetch(checkoutURL);
          const updatedCheckout = await updatedCheckoutRes.text();
          let updatedCheckoutContainer = document.createElement("div");
          updatedCheckoutContainer.innerHTML = updatedCheckout;
          const totalFinalPrice = Number(updatedCheckoutContainer == null ? void 0 : updatedCheckoutContainer.querySelector("[data-checkout-payment-due-target]").getAttribute("data-checkout-payment-due-target")) / 100;
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints) - walletPointsToApply,
            walletDiscountApplied: walletPointsToApply,
            currency: cartDetails == null ? void 0 : cartDetails.currency,
            totalPayablePrice: totalFinalPrice
          });
          applyWalletAmount(walletPointsToApply);
          setLoadingWalletBal(false);
        } else {
          const appliedDiscountCode = localStorage.getItem("fc-coupon-applied-code");
          !renderApplyCouponCodeBox && fetch(`/discount/${walletCouponCode}`);
          if (localStorage.getItem("fc_refresh_cart_update_status") === "true" || localStorage.getItem("fc_refresh_cart_update_status") === null) {
            localStorage.setItem("fc_refresh_cart_update_status", "false");
            fc_coupon_toggle(window.fc_refresh_cart);
          }
          await fetch(`/checkout/?discount=${walletCouponCode},${appliedDiscountCode}`, {
            method: "POST"
          });
          const cartResUpdated = await fetch(`/cart.json?v=${Date.now()}`);
          const cartDetailsUpdated = await cartResUpdated.json();
          const walletAppliedFromUpdatedCart = (_g = (_f = cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.cart_level_discount_applications) == null ? void 0 : _f.find((item) => {
            var _a2;
            return (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.includes("CLENSTACASH");
          })) == null ? void 0 : _g.total_allocated_amount;
          const walletPointsApplied = walletAppliedFromUpdatedCart ? walletAppliedFromUpdatedCart / 100 : 0;
          const appliedDiscountCodeAmount = (_i = (_h = cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.cart_level_discount_applications) == null ? void 0 : _h.find((item) => {
            var _a2;
            return ((_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.toLowerCase()) === (appliedDiscountCode == null ? void 0 : appliedDiscountCode.toLowerCase());
          })) == null ? void 0 : _i.total_allocated_amount;
          setWalletAppliedDetails({
            ...walletAppliedDetails,
            remainingWalletBalance: Number(userPoints) - walletPointsApplied,
            walletDiscountApplied: walletPointsApplied,
            currency: cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.currency,
            totalPayablePrice: (cartDetailsUpdated == null ? void 0 : cartDetailsUpdated.total_price) / 100,
            couponDiscountApplied: appliedDiscountCodeAmount / 100
          });
          applyWalletAmount(walletPointsApplied);
          setLoadingWalletBal(false);
        }
      }
      if (localStorage.getItem("fc_refresh_cart_update_status") === "true" || localStorage.getItem("fc_refresh_cart_update_status") === null) {
        localStorage.setItem("fc_refresh_cart_update_status", "false");
        fc_coupon_toggle(window.fc_refresh_cart);
      }
      try {
        fc_coupon_toggle(window.fc_coupon_callback);
      } catch (error) {
        console.log(error);
      }
    };
    const debouncedToggleUserWalletApplied = returnDebouncedFunc((prevWalletApplied) => toggleUserWalletApplied(prevWalletApplied), 200);
    p(() => {
      window.set_cartdrawer_wallet_amount = (element_id) => {
        const exposed_wallet_amt = document.getElementById(`${element_id}`);
        const changeWalletAmt = (data) => {
          var _a;
          exposed_wallet_amt.innerHTML = `-${Number(data.detail.amount).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: "currency",
            currency: "INR"
          })}`;
          exposed_wallet_amt.removeEventListener("wallet_amount_applied", changeWalletAmt);
          return {
            amount: (_a = data == null ? void 0 : data.detail) == null ? void 0 : _a.amount
          };
        };
        exposed_wallet_amt.addEventListener("wallet_amount_applied", changeWalletAmt);
      };
    }, [walletApplied]);
    const fc_coupon_toggle = (callback = () => {
    }) => {
      callback();
    };
    const toggleUserWallet = () => {
      setWalletApplied((prev) => {
        debouncedToggleUserWalletApplied(prev);
        try {
          localStorage.setItem("fc-wallet-cart-applied", `${!prev}`);
          const cart_applied = localStorage.getItem("fc-wallet-cart-applied");
          localStorage.setItem("rtly-applied-discount", `${cart_applied === "false" ? "0" : walletAppliedDetails == null ? void 0 : walletAppliedDetails.walletDiscountApplied}`);
        } catch (err) {
          console.log(err);
        }
        return !prev;
      });
    };
    p(() => {
      getUserPoints();
      getWalletRemeptionLimit();
      const cart_wallet_amount_id = mainScript.getAttribute("data-show-wallet-amount-on-cart");
      if (cart_wallet_amount_id) {
        document.addEventListener("wallet_amount_applied", (data) => {
          document.getElementById(`${cart_wallet_amount_id}`).innerHTML = `-${Number(data.detail.amount).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: "currency",
            currency: "INR"
          })}`;
        });
      }
    }, []);
    p(() => {
      if (userPoints !== null && (checkoutTarget == null ? void 0 : checkoutTarget.isSet)) {
        copyToggleUserWalletApplied(!walletApplied);
      }
    }, [userPoints, checkoutTarget == null ? void 0 : checkoutTarget.isSet, refetchCartSummary]);
    p(() => {
      if (walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalPayablePrice) {
        calculateCashback({
          totalPrice: walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalPayablePrice
        });
      }
    }, [walletAppliedDetails]);
    return o(k$1, {
      children: walletUiTheme === "classic" ? o(k$1, {
        children: [renderWalletCredit && o("div", {
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
              class: "walletCreditText",
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
              }) : (userPoints || 0).toFixed(2)]
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
                }) : walletAppliedDetails == null ? void 0 : walletAppliedDetails.remainingWalletBalance.toFixed(2)
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
          }) : o(k$1, {}), renderApplyCouponCodeBox && (walletAppliedDetails == null ? void 0 : walletAppliedDetails.couponDiscountApplied) ? o("div", {
            class: "wallet-applied-details",
            children: [o("p", {
              children: "Coupon Discount"
            }), o("p", {
              class: "point-details",
              children: loadingWalletBal ? o(SkeletonLoader, {
                width: "50px",
                height: "16px"
              }) : (walletAppliedDetails == null ? void 0 : walletAppliedDetails.couponDiscountApplied) ? o(k$1, {
                children: ["- ", ` ${Number(walletAppliedDetails == null ? void 0 : walletAppliedDetails.couponDiscountApplied).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "INR"
                })}`]
              }) : 0
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
      }) : o(ModernMain, {
        customerDetails,
        themeDetailsData,
        walletAppliedDetails,
        toggleUserWallet,
        walletApplied,
        loadingWalletBal,
        walletRedemptionLimitDetails
      })
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
  function LoggedoutCartSummary({
    loadingWalletBal,
    walletAppliedDetails
  }) {
    const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
    const checkout_total = mainScript.getAttribute("data-checkout-total");
    try {
      const checkoutTotalTag = document.querySelector(`.${checkout_total}`);
      checkoutTotalTag.innerHTML = `${String.fromCharCode(160)}${Number(walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalPayablePrice).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        style: "currency",
        currency: "INR"
      })}`;
    } catch (error) {
    }
    return o(k$1, {
      children: o("div", {
        class: "wallet-applied-details-container",
        children: [(walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalDiscount) ? o("div", {
          class: "wallet-applied-details",
          children: [o("p", {
            children: "Discount Applied"
          }), o("p", {
            class: "point-details",
            children: loadingWalletBal ? o(SkeletonLoader, {
              width: "50px",
              height: "16px"
            }) : (walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalDiscount) ? o(k$1, {
              children: ["- ", ` ${Number(walletAppliedDetails == null ? void 0 : walletAppliedDetails.totalDiscount).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR"
              })}`]
            }) : 0
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
      })
    });
  }
  function Main({
    themeDetailsData,
    shadowRoot
  }) {
    var _a, _b;
    const polling = ((_b = (_a = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a.polling) == null ? void 0 : _b.toLowerCase()) !== "false";
    const [customerDetails, setCustomerDetails] = h({
      customerID: "",
      customerTags: "",
      clientID: ""
    });
    const [checkoutTarget, setCheckoutTarget] = h({
      enable: false,
      isSet: false
    });
    const [refetchCartSummary, setRefetchSummary] = h(false);
    const [renderApplyCouponCodeBox, setRenderApplyCouponCodeBox] = h(false);
    const [renderCashbackStrip, setRenderCashbackStrip] = h(false);
    const [renderWalletCredit, setRenderWalletCredit] = h(false);
    const [loadingWalletBal, setLoadingWalletBal] = h(false);
    const [walletAppliedDetails, setWalletAppliedDetails] = h({
      currency: null,
      totalPayablePrice: 0,
      totalDiscount: 0
    });
    const [appliedDiscountCode, setAppliedDiscountCode] = h("");
    const [appliedDiscountsList, setAppliedDiscountsList] = h(null);
    const [loadingCashbackDetails, setLoadingCashbackDetails] = h(true);
    const [cashbackDetails, setCashbackDetails] = h({
      amount: 0,
      type: null
    });
    const [modernUiTheme, setModernUiTheme] = h("");
    const [cashbackAmount, setCashbackAmount] = h(0);
    const [isCartEmpty, setIsCartEmpty] = h(false);
    const setTheme = ({
      themeDetailsData: themeDetailsData2
    }) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h;
      var cssVariablesScope = shadowRoot.querySelector(".widget-container");
      if (cssVariablesScope && ((_a2 = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _a2.gradient_start_color)) {
        cssVariablesScope.style.setProperty("--gradient_start_color", (_b2 = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _b2.gradient_start_color);
      }
      if (cssVariablesScope && ((_c = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _c.gradient_end_color)) {
        cssVariablesScope.style.setProperty("--gradient_end_color", (_d = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _d.gradient_end_color);
      }
      if (cssVariablesScope && ((_e = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _e.gradient_angle)) {
        cssVariablesScope.style.setProperty("--gradient_angle", (_f = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _f.gradient_angle);
      }
      if (cssVariablesScope && ((_g = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _g.discount_loading_icon)) {
        cssVariablesScope.style.setProperty("--discount_loading_icon", `url("${(_h = themeDetailsData2 == null ? void 0 : themeDetailsData2.data) == null ? void 0 : _h.discount_loading_icon}")`);
      }
    };
    const loadCartSummary = async () => {
      var _a2, _b2;
      const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
      const cartDetails = await cartRes.json();
      setIsCartEmpty((cartDetails == null ? void 0 : cartDetails.item_count) === 0 ? true : false);
      const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
      localStorage.setItem("totalCartPrice", `${totalPrice}`);
      const totalDiscount = (cartDetails == null ? void 0 : cartDetails.total_discount) / 100;
      const appliedDiscountCode2 = ((_b2 = (_a2 = cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications) == null ? void 0 : _a2.find((item) => {
        return item.type === "discount_code" && !item.title.includes("WALLETAPPLIED");
      })) == null ? void 0 : _b2.title) || "";
      setAppliedDiscountsList(cartDetails == null ? void 0 : cartDetails.cart_level_discount_applications);
      setWalletAppliedDetails({
        currency: cartDetails == null ? void 0 : cartDetails.currency,
        totalPayablePrice: Number(totalPrice),
        totalDiscount: Number(totalDiscount)
      });
      window.fc_cart_details = {
        totalPayablePrice: Number(totalPrice),
        totalDiscount: Number(totalDiscount)
      };
      setAppliedDiscountCode(appliedDiscountCode2);
      calculateCashback({
        totalPrice: Number(totalPrice)
      });
    };
    const syncCartSummary = async (walletAppliedDetails2) => {
      var _a2, _b2;
      const cartRes = await fetch(`/cart.json?v=${Date.now()}`);
      const cartDetails = await cartRes.json();
      const totalPrice = (cartDetails == null ? void 0 : cartDetails.total_price) / 100;
      const totalDiscount = (cartDetails == null ? void 0 : cartDetails.total_discount) / 100;
      window.fc_cart_details = {
        totalPayablePrice: Number(totalPrice),
        totalDiscount: Number(totalDiscount)
      };
      if (totalPrice === ((_a2 = window.fc_cart_details) == null ? void 0 : _a2.totalPayablePrice) && totalDiscount === ((_b2 = window.fc_cart_details) == null ? void 0 : _b2.totalDiscount))
        ;
      else {
        setRefetchSummary((prev) => !prev);
      }
    };
    const getCashbackDetails = async ({
      customerID,
      customerTags,
      clientID
    }) => {
      var _a2, _b2, _c, _d;
      setLoadingCashbackDetails(true);
      const cashbackRes = await fetch(`${WALLET_API_URI}/loyalty/cashback-detail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          customer_id: customerID,
          user_hash: customerTags,
          client_id: clientID
        })
      });
      const cashbackResDetails = await cashbackRes.json();
      setCashbackDetails({
        type: (_b2 = (_a2 = cashbackResDetails == null ? void 0 : cashbackResDetails.data) == null ? void 0 : _a2.cashback_data) == null ? void 0 : _b2.type,
        amount: Number((_d = (_c = cashbackResDetails == null ? void 0 : cashbackResDetails.data) == null ? void 0 : _c.cashback_data) == null ? void 0 : _d.amount)
      });
      setLoadingCashbackDetails(false);
    };
    const calculateCashback = ({
      totalPrice
    }) => {
      var _a2;
      if ((cashbackDetails == null ? void 0 : cashbackDetails.type) === "percent") {
        const cartAmount = (_a2 = window.fc_cart_details) == null ? void 0 : _a2.totalPayablePrice;
        const finalAmount = (cashbackDetails == null ? void 0 : cashbackDetails.amount) / 100 * (totalPrice || cartAmount);
        setCashbackAmount(finalAmount);
        return finalAmount;
      } else {
        setCashbackAmount(cashbackDetails == null ? void 0 : cashbackDetails.amount);
        return cashbackDetails == null ? void 0 : cashbackDetails.amount;
      }
    };
    p(() => {
      var _a2;
      const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
      const customer_id = mainScript.getAttribute("data-customer-id");
      const customer_tags = (_a2 = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a2.trim();
      const client_id = mainScript.getAttribute("data-client-id");
      const checkout_target = mainScript.getAttribute("data-checkout-target");
      const coupon_code_box = mainScript.getAttribute("data-coupon-code-box");
      const cashback_strip = mainScript.getAttribute("data-cashback-strip");
      const wallet_credit = mainScript.getAttribute("data-wallet-credit-box");
      const walletUiTheme = mainScript.getAttribute("wallet-theme");
      setModernUiTheme(walletUiTheme);
      if (coupon_code_box === "true") {
        setRenderApplyCouponCodeBox(true);
      }
      if (cashback_strip === "true") {
        setRenderCashbackStrip(true);
      }
      if (wallet_credit === "true") {
        setRenderWalletCredit(true);
      }
      if (checkout_target) {
        setCheckoutTarget({
          enable: true,
          isSet: true
        });
      } else {
        if (polling) {
          setInterval(() => {
            syncCartSummary();
          }, 1e4);
        }
        setCheckoutTarget({
          enable: false,
          isSet: true
        });
      }
      setCustomerDetails({
        customerID: customer_id,
        customerTags: customer_tags || sessionStorage.getItem("fc_wallet_user_hash") || "",
        clientID: client_id
      });
      getCashbackDetails({
        customerID: customer_id,
        customerTags: customer_tags,
        clientID: client_id
      });
      setTheme({
        themeDetailsData
      });
    }, []);
    p(() => {
      loadCartSummary();
    }, [refetchCartSummary, cashbackDetails == null ? void 0 : cashbackDetails.type]);
    p(() => {
      const mainScript = document.querySelector("#fc-wallet-cart-widget-script-19212");
      const customer_id = mainScript.getAttribute("data-customer-id");
      setCustomerDetails((prev) => ({
        ...prev,
        customerID: customer_id
      }));
      if (!customer_id) {
        removeAppliedCouponCode();
      }
    }, []);
    const removeAppliedCouponCode = async () => {
      const clearDiscountCode = "FC_REMOVE_CODE";
      const walletAppliedCode = localStorage.getItem("fc-wallet-applied-code") || "";
      try {
        if (walletAppliedCode) {
          await fetch(`/discount/${clearDiscountCode}`);
          localStorage.removeItem("fc-wallet-applied-code");
        }
        const appliedDiscountCode2 = localStorage.getItem("fc-coupon-applied-code");
        if (appliedDiscountCode2) {
          await fetch(`/discount/${appliedDiscountCode2}`);
          localStorage.removeItem("fc-coupon-applied-code");
        }
      } catch (error) {
        console.error("Error removing applied coupon code:", error);
      }
    };
    return !isCartEmpty && o(k$1, {
      children: [!loadingCashbackDetails && cashbackAmount !== 0 && o(k$1, {
        children: renderCashbackStrip && o("div", {
          class: "cashback-strip-container",
          children: o("p", {
            children: ["You'll get ", o("span", {
              children: ["Rs. ", parseFloat(`${cashbackAmount}`).toFixed(2), " cashback"]
            }), " with this order"]
          })
        })
      }), (customerDetails == null ? void 0 : customerDetails.customerID) ? o("div", {
        children: o(ApplyWallet, {
          customerDetails,
          checkoutTarget,
          renderApplyCouponCodeBox,
          refetchCartSummary,
          calculateCashback,
          setUserHash: setCustomerDetails,
          renderWalletCredit,
          themeDetailsData
        })
      }) : o(k$1, {
        children: modernUiTheme === "modern" ? o(ModernLogin, {
          themeDetailsData,
          customerDetails
        }) : o(k$1, {
          children: [o(Login, {
            themeDetails: themeDetailsData
          }), o(LoggedoutCartSummary, {
            loadingWalletBal,
            walletAppliedDetails
          })]
        })
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
      B$2(o(App, {
        themeDetailsData,
        shadowRoot
      }), shadowRoot);
      B$2(o(AppCSS, {}), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-styles"));
      B$2(o(AppCustomCSS, {
        customStyles: clientCustomStyleData
      }), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-custom-styles"));
    } catch (err) {
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
