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
  const style$1 = "p, h5, h4, h2 {\n    margin: 0;\n}\n.widget-container{ \n	display: flex;\n	justify-content: center;\n	align-items: center;\n	font-family: Inter, sans-serif;\n	width: 60%;\n}\n@keyframes rotate {\n	from {\n		transform: rotate(0deg);\n	}\n	to {\n		transform: rotate(360deg);\n	}\n}\n\n@keyframes slide-in-bottom {\n    0% {\n        -webkit-transform: translateY(calc(100%));\n        ransform: translateY(calc(100%));\n    }\n    100% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n}\n\n\n.spinner {\n	animation: rotate 2s linear infinite;\n}\n\n.alert {\n	position: absolute;\n	bottom: 50%;\n	left: 50%;\n	z-index: 999;\n	background: #160b0b;\n	color: #f4c7c7;\n	font-weight: 400;\n	font-size: 14px;\n	border-radius: 4px;\n	padding: 8px 22px;\n	transition: 0.5s all ease;\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	transform: translate(-50%, -50%);\n	width: fit-content;\n	animation-name: fade-in;\n	animation-duration: 0.5s;\n}\n\n.alert svg.fw-wallet-alert-popup-error {\n	width: 22px;\n	height: 22px;\n	fill: rgb(244, 67, 54);\n	margin-right: 8px;\n}\n\n.loading-screen{\n	height: 100%;\n	width: 100%;\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n	z-index: 999999;\n	background-color: rgba(255, 255, 255, 0.6);\n}\n\n.fc-wallet-gifting-coupons-snippet-19212-root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.youCouponCardRight h4, .yourCouponCode {\n	font-weight: bold;\n	font-size: 13px;\n	color: var(--loyalty_popup_theme_background, #000);\n}\n\n.viewAllCouponsTab {\n	display: flex;\n	justify-content: space-between;\n	align-items: center;\n	padding: 8px 16px;\n	margin: 0 16px;\n}\n\n.viewAllCouponTabText {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	gap: 8px;\n}\n\n.viewAllCouponTabText h4 {\n	cursor: pointer;\n	color: #959595;\n}\n\n.walletCoinsBox {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	background-color: var(--loyalty_popup_theme_background, #000);\n	padding: 2px 8px;\n	border-radius: 50px;\n	gap: 4px;\n	width: fit-content;\n}\n\n.viewAllFeaturedComponent h3 {\n	margin-left: 16px;\n}\n\n.couponCard {\n	border-radius: 12px;\n	color: var(--loyalty_popup_theme_background, #000);\n	font-size: 14px;\n	line-height: 20px;\n	cursor: pointer;\n	max-width: 200px;\n	display: flex;\n  	flex-direction: column;\n}\n\n.couponCardDesc {\n	padding: 8px;\n    background: #f4f4f4;\n    border-radius: 8px;\n    box-shadow: 0 -4px 10px rgba(0,0,0,.1);\n    position: relative;\n    top: -12px;\n    max-width: 200px;\n    font-size: 13px;\n    font-weight: normal;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    \n}\n\n.couponImg {\n	border-radius: 8px 8px 0 0;\n    height: 120px;\n}\n\n.couponCardPrice {\n	display: flex;\n	align-items: center;\n	justify-content: start;\n	gap: 4px;\n	font-size: 14px;\n	font-weight: 400;\n	margin-top: 8px;\n}\n\n.couponFloatingLabel {\n	position: absolute;\n	top: -10px;\n  	right: 10px;\n    background: var(--loyalty_popup_theme_background,#000);\n    color: #fff;\n    width: fit-content;\n    height: 24px;\n    text-align: center;\n    line-height: 24px;\n    font-weight: 600;\n    font-size: 12px;\n    border-radius: 4px;\n	padding: 0 4px;\n}\n\n.couponText {\n	padding-top: 8px;\n	font-size: 16px;\n}\n\n.couponCardPrice img {\n	width: 14px;\n	height: 14px;\n}\n\n.couponCardPrice p {\n	font-size: 16px;\n	font-weight: bold;\n}\n\n.showAllCouponsList {\n	display: flex;\n	justify-content: center;\n	align-items: start;\n	gap: 32px;\n	scrollbar-width: none;\n	padding: 0 16px;\n	width: 100%;\n}\n\n.redeemCoinBox {\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n	gap: 8px;\n}\n\n.redeemHeading h3 {\n	font-weight: 700;\n    font-size: 14px;\n}\n\n.redeemText p {\n	font-weight: 400;\n    font-size: 14px;\n}\n\n.redeemCoinMainContainer {\n	width: 100%;\n	height: 100%;\n    background-color: #ffffff8c;\n}\n\n.redeemCoinContainer {\n	background-color: white;\n	position: absolute;\n	padding: 16px;\n	width: 100%;\n	height: fit-content;\n	bottom: 0px;\n	border-radius: 8px;\n	box-shadow: 0px -44px 60px -11px rgba(194,194,194,0.5);\n	-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n	animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;	\n}\n\n.redeemCloseContainer {\n	display: flex;\n	justify-content: end;\n	align-items: center;\n}\n\n.redeemVoucherMain {\n	display: flex;\n	justify-content: start;\n	align-items: center;\n	gap: 16px;\n}\n\n.redeemVoucherMain h2 {\n	font-weight: 700;\n    font-size: 30px;\n}\n.redeemRangeContainer {\n	padding: 0px 32px;\n}\n\n.redeemRangeContainer p {\n	text-align: center;\n}\n\n.redeemRangeContainer, .redeemRangeContainer input {\n	width: 100%;\n}\n\n.redeemRangeContainer input {\n	accent-color: #959595;\n}\n\n.reedemfcCoinsCard {\n	background-color: #f4f4f4;\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	gap: 8px;\n	padding: 8px;\n	border-radius: 8px;\n	cursor: pointer;\n    width: fit-content;\n}\n\n.reedemfcCoins {\n	padding: 16px;\n}\n.reedemfcCoins h5{\n	font-weight: 700;\n    font-size: 16px;\n}\n.reedemfcCoins p{\n	/* margin-top: 8px; */\n    font-weight: 400;\n    font-size: 12px;\n	line-height: 14px;\n}\n\n\n.reedemfcCoinsCard {\n	background-color: #f4f4f4;\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	gap: 8px;\n	padding: 8px;\n	border-radius: 8px;\n	cursor: pointer;\n}\n\n.exploreCouponCard {\n	background-color: #f4f4f4;\n	display: flex;\n	justify-content: start;\n	align-items: center;\n	padding: 8px;\n	border-radius: 8px;\n	cursor: pointer;\n    min-width: fit-content;\n	width: 100%;\n}\n.exploreCoupons {\n	padding: 24px;\n}\n\n.shipImgBox {\n	border-right: 1px dashed #959595;\n	padding-right: 8px;\n    margin-right: 8px\n}\n\n.exploreCouponCardText {\n	font-weight: 700;\n    font-size: 14px;\n}\n\n.exploreCouponCardText img {\n	width: 12px;\n	height: 12px;\n}\n\n.couponNotFound {\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n	margin-top: 16px;\n}\n\n.couponNotFound p{\n	font-weight: 400;\n    font-size: 12px;\n}\n\n.couponNotFound h4 {\n	font-weight: 700;\n    font-size: 20px;\n}\n\n.unlockedTab, .redeemedTab{\n    width: fit-content;\n}\n\n.yourCouponsCardContainer {\n	background-color: #f4f4f4;\n	border-radius: 8px;\n	display: flex;\n	margin-top: 16px;\n}\n\n.youCouponCardLeft, .youCouponCardRight {\n	padding: 16px;\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n}\n\n.youCouponCardLeft {\n	border-right: 1px dashed #959595;\n	align-items: center;\n}\n\n.youCouponCardRight {\n	align-items: start;\n}\n\n.youCouponCardLeft h5 {\n	font-size: 24px;\n}\n\n.youCouponCardLeft p {\n	font-size: 14px;\n}\n\n.exploreCouponText {\n	display: flex;\n	justify-content: start;\n	align-items: center;\n	gap: 4px;\n}\n\n.exploreCouponText div {\n	width: 16px;\n	height: 16px;\n}\n\n.yourCouponsActiveTab div {\n    background: #d9d9d9;\n    border-radius: 8px;\n    padding: 8px;\n    font-weight: 700;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.yourCouponsActiveTab {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 30px;\n}\n\n.yourCouponsCardMainContainer {\n    margin-left: 16px;\n}\n\n.coinIcon { \n    background-image: var(--coin-svg-url);\n	width: 20px;\n	height: 20px;\n	background-size: 100% 100%;\n}\n\n.walletCoinsBox p {\n	color: white;\n	font-size: 20px;\n}\n\n.walletCoinsBox img {\n	width: 16px;\n	height: 16px;\n}\n\n.overlay{\n	position: absolute;\n	display: none;\n	top: 0;\n	z-index: 99;\n	height: 100%;\n	width: 100%;\n	background-color: rgba(255, 255, 255, 0.6);\n	flex-direction: column;\n	justify-content: center;\n}\n\n.couponOverlayContainer {\n	display: flex;\n	justify-content: start;\n	align-items: center;\n	gap: 8px;\n}\n\n.couponOverlayContainer h2 {\n	font-size: 30px;\n}\n\n.couponContainer {\n	background-color: white;\n	width: 100%;\n	padding: 16px;\n	border-radius: 16px;\n	box-shadow: 0 -4px 50px rgba(0,0,0,.25);\n    width: 100%;\n}\n\n.couponUnlockBtn {\n	background-color: var(--loyalty_popup_theme_background, #000);\n    color: #fff;\n    padding: 11px 0;\n    border-radius: 8px;\n    font-family: Inter,sans-serif;\n    font-weight: 700;\n    cursor: pointer;\n    width: 100%;\n    font-size: 14px;\n	border: none;\n}\n\n.unlockText {\n    margin-top: 18px;\n}\n\n.unlockTextContainer {\n    margin-bottom: 18px;\n}\n.unlockTextContainer h4 {\n    text-align: center;\n}\n\n.crossImg {\n	display: flex;\n	justify-content: end;\n	align-items: center;\n}\n\n.crossImg img {\n	width: 24px;\n	height: 24px;\n	cursor: pointer;\n}\n\n.unlockDesc p {\n	font-weight: 500;\n	font-size: 13px;\n	line-height: 16px;\n}\n\n.dashedDivider {\n	border: none;\n    height: 1px;\n    background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);\n    margin: 20px 0 16px 0;\n}\n\n.slide-in-bottom {\n	-webkit-animation: slide-in-bottom 0.5s ease-in-out both;\n	animation: slide-in-bottom 0.5s ease-in-out both;\n}\n\n.viewAllCoupons {\n    position: relative;\n    width: 100%;\n}\n\n.unlockCouponContainer  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.redeemCloseContainer img {\n    cursor: pointer;\n	width: 30px;\n	height: 30px;\n}\n\n.couponCodeContainer {\n	padding: 12px 0;\n    background: #fff;\n    border-radius: 4px;\n    border: 1px solid var(--loyalty_popup_theme_background, #000);;\n    font-size: 16px;\n    font-weight: 700;\n    display: flex;\n	width: 100%;\n	justify-content: center;\n    align-items: center;\n	position: relative;\n}\n\n.couponCodeContainer img {\n	position: absolute;\n	right: 20px;\n	cursor: pointer;\n}\n\n.copied {\n	background-color: green;\n  padding: 8px;\n  position: absolute;\n  top: 50%;\n  left: 40%;\n  border-radius: 12px;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.unlockText h5 {\n	font-weight: 700;\n    font-size: 16px;\n    margin: 16px 0;\n}\n\n.exploreCoupons, .reedemfcCoins, .viewAllFeaturedComponent {\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n}\n\n.exploreCoupons h5 {\n	font-size: 20px;\n}\n\n.exploreCouponCardText {\n	font-size: 18px;\n}\n\n.giftMainContainer{\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n}\n\n@media (max-width:768px) {\n	.widget-container{\n		width: 85%;\n	}\n}\n\n.loginbtn{\n	background-color: #efefef;\n	text-decoration: none;\n	color: black;\n	padding: 12px;\n	border-radius: 8px;\n}";
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
  function _$1(n2) {
    return o$1 = 5, F$1(function() {
      return { current: n2 };
    }, []);
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
  const CouponCard$1 = ({
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
  const Loading$1 = () => {
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
*/
.mainPopup {
  --loyalty_popup_theme_background: #000000;
  --coin-svg-url: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23000000'/%3E%3Cpath d='M11.6003 6.28047C11.6301 6.19829 11.6845 6.12728 11.7561 6.0771C11.8277 6.02692 11.913 6 12.0004 6C12.0879 6 12.1732 6.02692 12.2448 6.0771C12.3164 6.12728 12.3708 6.19829 12.4006 6.28047L12.8076 7.39245C13.1264 8.2644 13.6316 9.05626 14.2881 9.71274C14.9446 10.3692 15.7364 10.8745 16.6084 11.1933L17.7195 11.6003C17.8017 11.6301 17.8727 11.6845 17.9229 11.7561C17.9731 11.8277 18 11.913 18 12.0004C18 12.0879 17.9731 12.1732 17.9229 12.2448C17.8727 12.3164 17.8017 12.3708 17.7195 12.4006L16.6084 12.8076C15.7364 13.1264 14.9446 13.6316 14.2881 14.2881C13.6316 14.9446 13.1264 15.7364 12.8076 16.6084L12.4006 17.7195C12.3708 17.8017 12.3164 17.8727 12.2448 17.9229C12.1732 17.9731 12.0879 18 12.0004 18C11.913 18 11.8277 17.9731 11.7561 17.9229C11.6845 17.8727 11.6301 17.8017 11.6003 17.7195L11.1933 16.6084C10.8745 15.7364 10.3692 14.9446 9.71274 14.2881C9.05626 13.6316 8.2644 13.1264 7.39245 12.8076L6.28047 12.4006C6.19829 12.3708 6.12728 12.3164 6.0771 12.2448C6.02692 12.1732 6 12.0879 6 12.0004C6 11.913 6.02692 11.8277 6.0771 11.7561C6.12728 11.6845 6.19829 11.6301 6.28047 11.6003L7.39245 11.1933C8.2644 10.8745 9.05626 10.3692 9.71274 9.71274C10.3692 9.05626 10.8745 8.2644 11.1933 7.39245L11.6003 6.28047Z' fill='white'/%3E%3C/svg%3E%0A");
  --coin-svg-inverted-url: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9.5' cy='9.5' r='9.5' fill='white'/%3E%3Cpath d='M9.18353 4.97204C9.20715 4.90698 9.25022 4.85076 9.3069 4.81104C9.36358 4.77131 9.43112 4.75 9.50034 4.75C9.56955 4.75 9.63709 4.77131 9.69377 4.81104C9.75045 4.85076 9.79353 4.90698 9.81714 4.97204L10.1393 5.85236C10.3917 6.54265 10.7917 7.16954 11.3114 7.68925C11.8311 8.20896 12.458 8.60897 13.1483 8.86133L14.028 9.18353C14.093 9.20715 14.1492 9.25022 14.189 9.3069C14.2287 9.36358 14.25 9.43112 14.25 9.50034C14.25 9.56955 14.2287 9.63709 14.189 9.69377C14.1492 9.75045 14.093 9.79353 14.028 9.81714L13.1483 10.1393C12.458 10.3917 11.8311 10.7917 11.3114 11.3114C10.7917 11.8311 10.3917 12.458 10.1393 13.1483L9.81714 14.028C9.79353 14.093 9.75045 14.1492 9.69377 14.189C9.63709 14.2287 9.56955 14.25 9.50034 14.25C9.43112 14.25 9.36358 14.2287 9.3069 14.189C9.25022 14.1492 9.20715 14.093 9.18353 14.028L8.86133 13.1483C8.60897 12.458 8.20896 11.8311 7.68925 11.3114C7.16954 10.7917 6.54265 10.3917 5.85236 10.1393L4.97204 9.81714C4.90698 9.79353 4.85076 9.75045 4.81104 9.69377C4.77131 9.63709 4.75 9.56955 4.75 9.50034C4.75 9.43112 4.77131 9.36358 4.81104 9.3069C4.85076 9.25022 4.90698 9.20715 4.97204 9.18353L5.85236 8.86133C6.54265 8.60897 7.16954 8.20896 7.68925 7.68925C8.20896 7.16954 8.60897 6.54265 8.86133 5.85236L9.18353 4.97204Z' fill='%23000000'/%3E%3C/svg%3E%0A");
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(calc(100%));
    ransform: translateY(calc(100%));
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.loader {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 999999;
  background-color: rgba(255, 255, 255, 0.6);
}
.loaderFullHeight {
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 999999;
  background-color: rgba(255, 255, 255, 0.6);
}
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-screen p {
  font-size: 12px;
}

.spinner {
  animation: rotate 2s linear infinite;
}

body {
  margin: 0;
  padding: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.fc-loyalty-popup-19212-root * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.fc-loyalty-popup-19212-root a {
  text-decoration: none;
  color: inherit;
}

.fc-loyalty-popup-19212-root {
  width: 100%;
}
/* Loyality popup styles */

.floatingPopup {
  background-color: var(--loyalty_popup_theme_background, #000);
  padding: 1rem;
  display: none;
  position: fixed;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  z-index: 3;
  cursor: pointer;
  padding: 12px;
}

.mainPopup {
  background-color: white;
  scrollbar-width: none;
  z-index: 9999;
  position: fixed;
  gap: 16px;
  max-width: 360px;
  max-height: 580px;
  width: 85vw;
  height: 80vh;
  border-radius: 15px;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.0625em 0.0625em rgba(0, 0, 0, 0.55),
    0 0.125em 0.5em rgba(0, 0, 0, 0.55), inset 0 0 0 1px hsla(0, 0%, 100%, 0.1);
}

.mainContent {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-bottom: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px;
}

.header p {
  color: #0c0c0c;
  font-size: 12px;
}
.header h6 {
  color: #0c0c0c;
  font-size: 20px;
  font-weight: 600;
}

.closePopup {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.logoutwalletCard,
.walletCard {
  background-color: var(--loyalty_popup_theme_background, #000);
  padding: 12px;
  border-radius: 16px;
  box-shadow: none;
  margin: 0 14px;
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}

.walletCard {
  cursor: pointer;
  align-items: center;
}

.coinCard img {
  width: 20px;
  height: 20px;
}

.coinCard {
  background-color: #fff;
  border-radius: 4px;
  margin: 0 6px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.coinCard h1 {
  font-size: 18px;
  font-weight: 600;
  color: var(--loyalty_popup_theme_background, #000);
}

.badgeCard img {
  height: 12px;
  width: 12px;
}

.badgeCard p {
  font-size: 11px;
}
.badgeCard {
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  gap: 4px;
  display: none;
}

.walletCardText {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.inviteCard {
  background: linear-gradient(
    100.56deg,
    #495fd9 0,
    #5285e8 57.67%,
    #5aa6f4 104.69%
  );
  margin: 0 20px;
  border-radius: 8px;
  padding: 12px;
}

.inviteTextSection {
  color: white;
  display: flex;
  align-items: start;
  margin-bottom: 18px;
  gap: 8px;
}

.inviteTextContainer {
  padding-top: 8px;
}

.inviteTextContainer h2 {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 16px;
}

.inviteTextContainer p {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

.invitebtn {
  width: 100%;
  background: #fff;
  border-radius: 4px;
  border: none;
  padding: 8px;
  color: #3e56d2;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  line-height: normal;
  font-family: Inter, sans-serif;
}

/* change here */

.couponCard {
  border-radius: 12px;
  color: var(--loyalty_popup_theme_background, #000);
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  width: 120px;
  height: 100%;
}

.couponCardDesc {
  padding: 8px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -12px;
  min-width: 120px;
  font-size: 13px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  min-height: 120px;
}

.couponImg {
  border-radius: 8px 8px 0 0;
  width: 120px;
  max-height: 120px;
}

.couponCardPrice {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
}

.couponFloatingLabel {
  position: absolute;
  top: -10px;
  right: 16px;
  background: var(--loyalty_popup_theme_background, #000);
  color: #fff;
  width: fit-content;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-weight: 600;
  font-size: 12px;
  border-radius: 4px;
  padding: 0 4px;
}

.couponText {
  padding-top: 8px;
  font-size: 13px;
}

.couponCardPrice img {
  width: 14px;
  height: 14px;
}

/* till here */
.couponMainContainer {
  position: relative;
}

.viewAllCouponsContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-bottom: 6px;
  width: 100%;
}

.scrollBtnPrev {
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 55%;
  left: 10%;
  transform: translate(-50%, -50%);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.3);
}

.scrollBtnPrev img {
  rotate: 180deg;
}

.scrollBtnNext {
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 55%;
  left: 90%;
  transform: translate(-50%, -50%);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.3);
}

.scrollBtnNext img,
.scrollBtnPrev img {
  width: 8px;
}

.viewAllCouponsContainer h1 {
  font-size: 20px;
  font-weight: 700;
}

.viewAllCouponsContainer a {
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
}

.viewAllBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}
.gamesArenaContainer {
  padding: 8px 16px;
}
.gamesArenaContainer h1 {
  font-size: 20px;
  font-weight: 700;
}
.gamesArenaContainer p {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}

.gamesCard {
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  padding-top: 8px;
  padding-top: 30px;
  border-radius: 8px;
  position: relative;
  bottom: 20px;
  max-width: 130px;
  min-width: 130px;
}

.gamesCardImg {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
}

.gamesCardImg img {
  max-height: 60px;
}

.coinBox {
  background: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 4px 14px;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
  color: var(--loyalty_popup_theme_background, #000);
  font-size: 14px;
  gap: 4px;
}

.gamesCardBtn {
  background: var(--loyalty_popup_theme_background, #000);
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  border: none;
}

.gamesCardTitle {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: black;
}

.gamesCardDesc {
  font-weight: 500;
  font-size: 10px;
  text-align: center;
}

.gamesHorizontalList {
  height: fit-content;
  padding: 8px 16px;
  display: flex;
  gap: 16px;
  width: 100%;
  scrollbar-width: none;
  overflow-x: scroll;
  overflow-y: hidden;
}

/* Invite and Earn */

.inviteWhatsappBtn {
  height: 40px;
  width: 96%;
  background-color: #29a71a;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.inviteWhatsappBtn p {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.inviteWhatsappBtn img {
  filter: brightness(0) invert(1);
}

.inviteRoundedBtn {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--loyalty_popup_theme_background, #000);
  cursor: pointer;
}

.inviteRoundedBtn img {
  width: 16px;
  height: 16px;
}

.inviteAndEarnContainer {
  width: 100%;
  padding: 22px;
  border-radius: 16px;
  transition: all 0.5s;
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.overlay {
  position: absolute;
  display: none;
  top: 0;
  z-index: 99;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  flex-direction: column;
  justify-content: center;
}

.dashedDivider {
  border: none;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    #000,
    #000 6px,
    transparent 6px,
    transparent 12px
  );
  margin: 20px 0 16px 0;
}

.inviteEarnTextContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  margin: 8px 0px;
  text-align: center;
}

.inviteAndEarn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

.inviteAndEarn h2 {
  font-weight: 700;
  font-size: 30px;
}

.inviteAndEarnMessage h4 {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  margin: 20px 0 !important;
}

.inviteLinkContainer {
  padding: 12px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid var(--loyalty_popup_theme_background, #000);
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.couponCodeContainer {
  padding: 12px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid var(--loyalty_popup_theme_background, #000);
  font-size: 16px;
  font-weight: 700;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

.couponCodeContainer img {
  position: absolute;
  right: 20px;
  cursor: pointer;
}

.inviteLinkContainer p {
  font-size: 14px;
}

.inviteLinkContainer img {
  max-width: 16px;
  cursor: pointer;
}

.sendInvitesBtnContainer,
.inviteWhatsappBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.closeInviteContainer {
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
}

.couponUnlockBtn {
  background-color: var(--loyalty_popup_theme_background, #000);
  color: #fff;
  padding: 11px 0;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  border: none;
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 0.5s ease-in-out both;
  animation: slide-in-bottom 0.5s ease-in-out both;
}

.couponOverlayContainer {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
}

.couponOverlayContainer h2 {
  font-size: 30px;
}

.couponContainer,
.easyEarnOverlayContainer {
  background-color: white;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 -4px 50px rgba(0, 0, 0, 0.25);
}

.showAllCouponsList {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 16px;
  scrollbar-width: none;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 16px;
}

/* .pointsActivityClass {
    height: 100%;
	width: 100%;
	background-color: white;
	position: absolute;
	top: 0px;
	z-index: 999;
	overflow-x: hidden;
	overflow-y: scroll;
	scrollbar-width: none;
} */

.pointsActivityClass h4 {
  margin-left: 22px;
  font-size: 20px;
}

.transaction-log-container {
  margin: 24px 20px;
  padding: 6px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 6px;
  box-shadow: 1px 2px 2px rgb(231, 231, 231);
}

.transaction-log-container .log-body {
  padding: 8px 18px;
}

.transaction-log-container .log-body .amount {
  font-size: 18px;
  font-weight: 600;
}

.transaction-log-container .log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(231, 231, 231);
  padding: 8px 18px;
  font-size: 14px;
}

.transaction-log-container .log-header .log-type {
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 600;
}

.transaction-log-container .log-header .log-type.credited {
  background-color: rgb(209, 255, 217);
  color: rgb(30, 175, 109);
  font-size: 12px;
}

.transaction-log-container .log-header .log-type.debited {
  background-color: rgba(181, 0, 0, 0.1);
  color: rgb(181, 0, 0);
  font-size: 12px;
}

.inviteAndEarnContainer {
  background-color: white;
  max-width: 360px;
  max-height: 580px;
  width: 85vw;
  height: fit-content;
  bottom: 2px;
  z-index: 999;
  background-color: white;
  box-shadow: 3px 3px 90px 6px #ccc;
}

.shareTextContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  text-align: center;
  margin-bottom: 12px;
}

.pointsActivityHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  padding-top: 12px;
}

.pointsActivityHeader img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.showGamesOverlay {
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
}

.unlockTextContainer {
  font-weight: 700;
  font-size: 16px;
  margin: 22px;
  text-align: center;
}

.unlockText h5 {
  font-weight: 700;
  font-size: 16px;
  margin: 16px 0;
}

.crossImg {
  display: flex;
  justify-content: end;
  align-items: center;
}

.crossImg img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.unlockDesc p {
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #797979;
}

.showGamesHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.showGamesHeader img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.showGamesHeader h2 {
  font-size: 20px;
}

.showGamesTab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
}

.showGamesTab h2 {
  font-size: 18px;
}

.gamesTab {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.walletCoinsBox {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--loyalty_popup_theme_background, #000);
  padding: 2px 8px;
  border-radius: 50px;
  gap: 4px;
  width: fit-content;
}

.walletCoinsBox p {
  color: white;
  font-size: 20px;
}

.walletCoinsBox img {
  width: 16px;
  height: 16px;
}

.showGamesCards {
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  overflow-y: scroll;
  scrollbar-width: none;
  margin-top: 8px;
}

.viewAllCoupons {
  background-color: white;
  width: 100%;
  height: 100%;
}

.viewAllCouponsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.viewAllCouponsHeader h4 {
  font-size: 20px;
  font-weight: 700;
}
.viewAllCouponsHeader img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.viewAllCouponTabText {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.viewAllCouponTabText h4 {
  cursor: pointer;
  color: #959595;
}

.viewAllCouponsTab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.viewAllFeaturedComponent h3 {
  margin-left: 16px;
}
.reedemfcCoins {
  padding: 16px;
  padding-bottom: 0;
}

.reedemfcCoins h5,
.exploreCoupons h5 {
  font-weight: 700;
  font-size: 16px;
}
.reedemfcCoins p {
  /* margin-top: 8px; */
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

.reedemfcCoinsCard {
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(
    100.56deg,
    #495fd9 0,
    #5285e8 57.67%,
    #5aa6f4 104.69%
  );
  color: white;
}

.reedemfcCoinsCardArrow {
  filter: invert(100%);
}

.exploreCouponCard {
  background-color: #f4f4f4;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
.exploreCoupons {
  padding: 16px;
}
.exploreCoupons h5 {
  margin-bottom: 8px;
}
.shipImgBox {
  border-right: 1px dashed #959595;
  padding-right: 8px;
  margin-right: 8px;
}

.exploreCouponCardText {
  font-weight: 700;
  font-size: 14px;
}

.exploreCouponCardText img {
  width: 12px;
  height: 12px;
}

.yourCouponsCardMainContainer {
  padding: 16px;
}

.yourCouponsCardContainer {
  background-color: #f4f4f4;
  border-radius: 8px;
  display: flex;
  margin-top: 16px;
}

.youCouponCardLeft,
.youCouponCardRight {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.youCouponCardLeft {
  border-right: 1px dashed #959595;
  align-items: center;
}

.youCouponCardRight {
  align-items: start;
}

.youCouponCardLeft h5 {
  font-size: 24px;
}

.youCouponCardLeft p {
  font-size: 14px;
}

.youCouponCardRight h4,
.yourCouponCode {
  font-weight: bold;
  font-size: 13px;
  color: var(--loyalty_popup_theme_background, #000);
}

.youCouponCardRight p {
  color: #acacac;
  font-size: 12px;
}

.yourCouponsActiveTab {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
}

.yourCouponsActiveTab div {
  background: #d9d9d9;
  border-radius: 8px;
  padding: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}

.couponNotFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.couponNotFound p {
  font-weight: 400;
  font-size: 12px;
}

.couponNotFound h4 {
  font-weight: 700;
  font-size: 20px;
}

.redeemCoinBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.redeemHeading h3 {
  font-weight: 700;
  font-size: 14px;
}

.redeemText p {
  font-weight: 400;
  font-size: 14px;
}

.redeemCoinMainContainer {
  width: 100%;
  height: 100%;
  background-color: #ffffff8c;
}

.redeemCoinContainer {
  background-color: white;
  position: absolute;
  padding: 16px;
  width: 100%;
  height: fit-content;
  bottom: 0px;
  border-radius: 16px;
  box-shadow: 0 -4px 50px rgba(0, 0, 0, 0.25);
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.redeemCloseContainer {
  display: flex;
  justify-content: end;
  align-items: center;
}

.redeemVoucherMain {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
}

.redeemVoucherMain h2 {
  font-weight: 700;
  font-size: 30px;
}
.redeemRangeContainer {
  padding: 0px 32px;
}

.redeemRangeContainer p {
  text-align: center;
}

.redeemRangeContainer,
.redeemRangeContainer input {
  width: 100%;
}

.redeemRangeContainer input {
  accent-color: #959595;
}

.screenContainer {
  background-color: white;
}

.screenHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.screenHeader h2 {
  font-weight: 700;
  font-size: 20px;
}

.screenHeader img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.walletCoinContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.walletCoinContainer h4 {
  font-weight: 700;
  font-size: 20px;
}

.spinWheelBottom h4 {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
}

.spinWheelBottom hr {
  width: 100%;
  border: none;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    #000,
    #000 6px,
    transparent 6px,
    transparent 12px
  );
}

.spinWheelBottom {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: auto;
}

#fw-chart-spin-wheel svg {
  transform: rotate(-90deg);
}

.lockedIcon {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lockedIcon img {
  height: 160px;
  width: 160px;
}

.spinWinContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: height 0.5s ease;
  top: 0;
  left: 0;
  background: #ffffff7d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  animation-name: movedown;
  animation-duration: 1s;
}

.spinWinPopup {
  background-color: var(--loyalty_popup_theme_background, #000);
  color: #fff;
  padding: 30px 25px;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.spinWinPopup h3 {
  font-size: 18px;
  text-align: center;
}
.spinWinPopup h3 {
  font-size: 20px;
  text-align: center;
}
.spinWinPopup p {
  font-size: 14px;
}

.playagainbtn {
  width: 100%;
  background: #fff;
  color: var(--loyalty_popup_theme_background, #000);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}

.closebtn {
  color: #fff;
  background: var(--loyalty_popup_theme_background, #000);
  border: 0;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
}

.scratchCardDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.scratchCardDiv canvas {
  z-index: 2;
  border-radius: 8px;
  cursor: grabbing;
}

.scratchCardDiv h4 {
  position: absolute;
  top: 45%;
}

.scratchCardDiv img {
  position: absolute;
  z-index: 3;
}

#sparkImg {
  position: absolute;
  width: 60px;
  top: 32px;
  left: 35%;
  clip-path: inset(0 0 44% 0);
  transform: translate(-50%);
}

#sparkImg2 {
  position: absolute;
  top: 22px;
  width: 30px;
  left: 50%;
  transform: translate(-100%);
}
.copied {
  background-color: green;
  padding: 8px;
  position: absolute;
  top: 50%;
  left: 40%;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.coinIcon {
  background-image: var(--coin-svg-url);
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
}

.logoutWalletCard {
  background-color: var(--loyalty_popup_theme_background, #000);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 16px;
  box-shadow: none;
  margin: 0 14px;
  width: auto;
}
.walletLogoutBtn {
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.logoutWallerCardHeading {
  color: white;
}

.logoutWalletCard p {
  color: var(--loyalty_popup_theme_background, #000);
  font-size: 20px;
  font-weight: 600;
}

.exploreCouponText {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
}

.exploreCouponText div {
  width: 16px;
  height: 16px;
}

.alert {
  position: absolute;
  bottom: 50%;
  left: 50%;
  z-index: 999;
  background: #160b0b;
  color: #f4c7c7;
  font-weight: 400;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 22px;
  transition: 0.5s all ease;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 80%;
  animation-name: fade-in;
  animation-duration: 0.5s;
}

.alert svg.fw-wallet-alert-popup-error {
  width: 22px;
  height: 22px;
  fill: rgb(244, 67, 54);
  margin-right: 8px;
}

.referralPopupContainer {
  background-color: var(--loyalty_popup_theme_background, #000);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-height: fit-content;
  padding: 16px;
  border-radius: 16px;
  z-index: 999;
  animation-name: fade-in;
  animation-duration: 1s;
  margin: 18px;
  -webkit-box-shadow: 0px 0px 116px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 116px -13px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 50px -13px rgba(0, 0, 0, 0.75);
}

.referralPopupContainer img {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: white;
  border-radius: 8px;
}
.referralPopupContainer h2 {
  font-size: 28px;
  color: white;
}

.referralPopupContainer p {
  font-size: 16px;
  text-align: center;
  color: white;
}
.referralPopupContainer span {
  color: gold;
}

.easyEarnTitleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.easyEarnTitleBox a {
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
}

.easyEarnScreenContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  row-gap: 0;
  column-gap: 2rem;
}

.easyEarnScreenDesc {
  font-size: 14px;
  margin-left: 16px;
}

.easyEarnCardBtn {
  background-color: gray;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  border: none;
}

.coinContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.easyEarnMainContainer {
  position: relative;
}

.easyEarnOverlayContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.easyEarnCoinBox {
  background-color: #efeded;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 4px 14px;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
  color: var(--loyalty_popup_theme_background, #000);
  font-size: 14px;
  gap: 4px;
}

#watermarkContainer {
  color: white;
  background-color: black;
  font-size: 12px;
  text-align: end;
  padding: 4px 16px;
  margin-top: 16px;
}

#watermarkContainer:hover {
  text-decoration: underline;
}

.loyaltyMainPage {
  position: relative;
  margin: 0px 15%;
  scrollbar-width: none;
}

#fw-chart-spin-wheel {
  display: flex;
  justify-content: center;
  position: relative;
}

.ellipsis-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding-right: 4px;
}

.screenHeaderBackBtn {
  background-color: #efefef;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

@media (min-width: 350px) {
  .loyaltyMainPage {
    margin: 0 10%;
  }
  .loyaltyMainPage .spinWheelBottom {
    max-width: 75%;
  }

  .loyaltyMainPage #watermarkContainer {
    border-radius: 4px;
    margin: 16px 16px 0 16px;
  }

  .loyaltyMainPage .gamesCardTitle {
    font-size: 14px;
  }

  .loyaltyMainPage .gamesCardDesc {
    font-size: 12px;
  }

  .loyaltyMainPage .inviteTextContainer p {
    font-size: 16px;
  }

  .loyaltyMainPage .gamesArenaContainer h1,
  .loyaltyMainPage .viewAllCouponsContainer h1,
  .loyaltyMainPage .inviteTextContainer {
    font-size: 24px;
  }

  .loyaltyMainPage .gamesArenaContainer p {
    font-size: 14px;
  }

  .loyaltyMainPage .leftHeader p {
    font-size: 14px;
  }

  .loyaltyMainPage .leftHeader h6 {
    font-size: 22px;
  }

  .loyaltyMainPage .spinner {
    animation: rotate 2s linear infinite;
  }

  .loyaltyMainPage .inviteAndEarnContainer {
    padding: 22px;
    border-radius: 16px;
    transition: all 0.5s;
    animation: none;
    box-shadow: none;
    max-width: 100%;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.3);
  }

  .loyaltyMainPage .inviteEarnTextContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: #acacac;
    margin: 8px 0px;
    text-align: center;
  }

  .loyaltyMainPage .inviteAndEarn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .loyaltyMainPage .inviteAndEarn h2 {
    font-weight: 700;
    font-size: 30px;
  }

  .loyaltyMainPage .inviteAndEarnMessage h4 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin: 20px 0 !important;
  }

  .loyaltyMainPage .inviteLinkContainer {
    padding: 10px 12px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid var(--loyalty_popup_theme_background, #000);
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .loyaltyMainPage .couponCodeContainer {
    padding: 12px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid var(--loyalty_popup_theme_background, #000);
    font-size: 16px;
    font-weight: 700;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .loyaltyMainPage .couponCodeContainer img {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }

  .loyaltyMainPage .inviteLinkContainer p {
    font-size: 14px;
  }

  .loyaltyMainPage .inviteLinkContainer img {
    max-width: 16px;
    cursor: pointer;
  }

  .loyaltyMainPage .sendInvitesBtnContainer,
  .inviteWhatsappBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  .loyaltyMainPage .inviteWhatsappBtn {
    height: 40px;
    width: 96%;
    background-color: #29a71a;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  .inviteWhatsappBtn p {
    font-weight: 500;
    color: white;
  }

  .inviteWhatsappBtn img {
    filter: brightness(0) invert(1);
  }

  .loyaltyMainPage .inviteRoundedBtn {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--loyalty_popup_theme_background, #000);
  }

  .loyaltyMainPage .inviteRoundedBtn img {
    width: 16px;
    height: 16px;
  }

  .loyaltyMainPage .alert {
    position: absolute;
    bottom: 50%;
    left: 50%;
    z-index: 999;
    background: #160b0b;
    color: #f4c7c7;
    font-weight: 400;
    font-size: 14px;
    border-radius: 4px;
    padding: 8px 22px;
    transition: 0.5s all ease;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: fit-content;
    animation-name: fade-in;
    animation-duration: 0.5s;
  }

  .loyaltyMainPage .alert svg.fw-wallet-alert-popup-error {
    width: 22px;
    height: 22px;
    fill: rgb(244, 67, 54);
    margin-right: 8px;
  }

  .loyaltyMainPage .shareTextContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: #acacac;
    text-align: center;
    margin-bottom: 12px;
  }

  .loyaltyMainPage .dashedDivider {
    border: none;
    height: 1px;
    background: repeating-linear-gradient(
      90deg,
      #000,
      #000 6px,
      transparent 6px,
      transparent 12px
    );
    margin: 20px 0 16px 0;
  }

  .loyaltyMainPage .referralContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loyaltyMainPage .copied {
    background-color: green;
    padding: 8px;
    position: absolute;
    top: 55%;
    left: 48%;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .loyaltyMainPage .loader {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .loyaltyMainPage .loading-screen {
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loyaltyMainPage .loginbtn {
    background-color: #efefef;
    text-decoration: none;
    color: black;
    padding: 12px;
    border-radius: 8px;
    display: block;
    width: fit-content;
  }

  .loyaltyMainPage #couponOverlayId {
    width: 80%;
  }

  .loyaltyMainPage .unlockCouponContainer {
    display: flex;
    justify-content: center;
  }

  .loyaltyMainPage .redeemCoinContainer {
    width: 80%;
  }

  .loyaltyMainPage .redeemCoinMainContainer {
    display: flex;
    justify-content: center;
  }

  .loyaltyMainPage .lockedIcon img {
    width: 130px;
    height: 130px;
  }
  .loyaltyMainPage .lockedIcon {
    transform: translate(-42%, -40%);
  }
  .loyaltyMainPage .loginBtnWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .loyaltyMainPage .overlayContainer {
    display: flex;
    justify-content: center;
  }
  .loyaltyMainPage .loader {
    position: relative;
  }
}

@media (min-width: 634px) {
  .loyaltyMainPage .inviteAndEarnContainer {
    width: 80%;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.3);
  }
  .loyaltyMainPage .spinWheelBottom {
    max-width: 40%;
  }
  .loyaltyMainPage .reedemfcCoins,
  .loyaltyMainPage .exploreCoupons {
    width: 100%;
  }
}

@media (min-width: 810px) {
  .loyaltyMainPage .couponWrapper {
    display: flex;
  }
  .loyaltyMainPage .redeemCoinContainer {
    width: 65%;
  }
}

.screenHeaderBackBtn {
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  margin-top: 7px;
  color: rgb(91, 91, 91);
  font-weight: 700;
}
`;
  const WalletCard = ({
    walletAmount,
    onClick
  }) => {
    const [coinName, setCoinName] = h(localStorage.getItem("coinName"));
    p(() => {
      setTimeout(() => {
        const coinName2 = window.fc_loyalty_vars.coin_name;
        if (coinName2) {
          localStorage.setItem("coinName", coinName2);
          setCoinName(coinName2);
        }
      }, 500);
    }, []);
    return o(k$1, {
      children: o("div", {
        onClick,
        class: "walletCard",
        children: [o("div", {
          children: [o("p", {
            class: "walletCardText",
            children: ["My", " ", coinName]
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
        }), o("img", {
          src: "https://static.farziengineer.co/farziwallet/sparks.png",
          id: "sparkImg",
          alt: ""
        }), o("img", {
          src: "https://static.farziengineer.co/farziwallet/sparks.png",
          id: "sparkImg2",
          alt: ""
        })]
      })
    });
  };
  const InviteCard = ({
    onClick,
    customer_id,
    client_id,
    handleLogin,
    isLoggedIn
  }) => {
    const [cardMessage, setCardMessage] = h("");
    p(() => {
      if (localStorage.getItem(`fc-invite-text-${customer_id}`)) {
        setCardMessage(localStorage.getItem(`fc-invite-text-${customer_id}`));
      } else {
        const fetch2 = async () => {
          var _a, _b;
          const resp = await fetchApi("/get-referrer-message", "post", {
            client_id
          });
          if ((resp == null ? void 0 : resp.status) !== "success") {
            setCardMessage("Invite your friends to get rewards");
          } else {
            setCardMessage((_a = resp == null ? void 0 : resp.data) == null ? void 0 : _a.getReferrerMessage);
            localStorage.setItem(`fc-invite-text-${customer_id}`, (_b = resp == null ? void 0 : resp.data) == null ? void 0 : _b.getReferrerMessage);
          }
        };
        fetch2();
      }
    }, []);
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
              children: localStorage.getItem(`fc-invite-text-${customer_id}`) || cardMessage
            })]
          })]
        }), o("button", {
          onClick: isLoggedIn ? onClick : handleLogin,
          class: "invitebtn",
          children: "Share Invite"
        })]
      })
    });
  };
  const Alert$1 = ({
    message
  }) => {
    const capitalizeFirstLetter = (str) => {
      const alphabeticStr = str.replace(/[^a-zA-Z ]/g, "");
      return alphabeticStr.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    };
    const formattedMessage = capitalizeFirstLetter(message || "Something went wrong");
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
        children: `${formattedMessage}`
      })]
    });
  };
  const InviteAndEarnOverlay = ({
    closeOverlay,
    customerDetails
  }) => {
    h({
      referral_code: "",
      path: ""
    });
    const [loading, setLoading] = h(false);
    const [error, setError] = h(false);
    const showError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3e3);
    };
    const [showCopied, setShowCopied] = h(false);
    const handleShareClick = async () => {
      var _a;
      let whatsappMsg = localStorage.getItem("fc-whatsapp-msg");
      if (!whatsappMsg) {
        try {
          const whatsappResp = await fetchApi("/get-referred-message", "post", customerDetails);
          if ((whatsappResp == null ? void 0 : whatsappResp.status) === "success") {
            whatsappMsg = (_a = whatsappResp == null ? void 0 : whatsappResp.data) == null ? void 0 : _a.getReferredMessage;
            localStorage.setItem("fc-whatsapp-msg", whatsappMsg);
          } else {
            showError();
            return;
          }
        } catch (error2) {
          showError();
          return;
        }
      }
      if (navigator.share) {
        navigator.share({
          title: "Invite your friend to get rewards",
          text: whatsappMsg
        }).then(() => console.log("Successful share")).catch((error2) => console.log("Error sharing", error2));
      } else {
        navigator.clipboard.writeText(whatsappMsg);
        setShowCopied(true);
        setTimeout(() => {
          setShowCopied(false);
        }, 1e3);
      }
    };
    const hanldeWhatsappClick = async () => {
      var _a;
      if (localStorage.getItem("fc-whatsapp-msg")) {
        window.open(`https://api.whatsapp.com/send?text=${localStorage.getItem("fc-whatsapp-msg")}`, "_blank");
      } else {
        try {
          const whatsappResp = await fetchApi("/get-referred-message", "post", customerDetails);
          if ((whatsappResp == null ? void 0 : whatsappResp.status) === "success") {
            const message = (_a = whatsappResp == null ? void 0 : whatsappResp.data) == null ? void 0 : _a.getReferredMessage;
            localStorage.setItem("fc-whatsapp-msg", message);
            window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
          } else {
            showError();
          }
        } catch (error2) {
          showError();
        }
      }
    };
    const copyReferralLinkFunc = () => {
      setShowCopied(true);
      navigator.clipboard.writeText(window.location.origin + (localStorage.getItem(`fc-referral-code-${customerDetails == null ? void 0 : customerDetails.customer_id}`) || "/account/register"));
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    return o(k$1, {
      children: [loading ? o("div", {
        className: "loader",
        children: o(Loading$1, {})
      }) : o("div", {
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
            children: localStorage.getItem(`fc-invite-text-${customerDetails == null ? void 0 : customerDetails.customer_id}`)
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
            className: "ellipsis-text",
            children: `${window.location.origin}${localStorage.getItem(`fc-referral-code-${customerDetails == null ? void 0 : customerDetails.customer_id}`) || "/account/register"}`
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
          children: [o("button", {
            onClick: () => hanldeWhatsappClick(),
            class: "inviteWhatsappBtn",
            children: [o("img", {
              src: "https://media.farziengineer.co/farziwallet/whatsapp-icon.png",
              alt: ""
            }), o("p", {
              children: "Send on whatsapp"
            })]
          }), o("button", {
            onClick: handleShareClick,
            class: "inviteRoundedBtn",
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/share_arrow.png",
              alt: ""
            })
          })]
        })]
      }), error && o(Alert$1, {
        message: `Something went wrong`
      })]
    });
  };
  const GamesCard = ({
    btnClick,
    cardImage,
    gameTitle,
    gameDesc,
    btnText,
    gamePrice,
    isLoggedIn,
    handleLogin
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
            onClick: isLoggedIn ? btnClick : handleLogin,
            class: "gamesCardBtn",
            children: btnText
          })]
        })]
      })
    });
  };
  const YourCoupons$1 = ({
    customerDetails
  }) => {
    const [activeTab, setActiveTab] = h("");
    const [yourUnlockedCoupon, setYourUnlockedCoupon] = h([]);
    const [yourRedeemedCoupon, setYourRedeemedCoupon] = h([]);
    const [loading, setLoading] = h(false);
    if (activeTab === "") {
      setActiveTab("unlock");
    }
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
    }, [customerDetails, activeTab]);
    const handleTab = (tab) => {
      setActiveTab(tab);
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
      children: o(Loading$1, {})
    }) : o(k$1, {
      children: o("div", {
        class: "yourCouponsCardMainContainer",
        children: [o("div", {
          class: "yourCouponsActiveTab",
          children: [o("div", {
            style: activeTab === "unlock" && couponCardTabStyles,
            onClick: () => handleTab("unlock"),
            class: "unlockedTab",
            children: "Unlocked"
          }), o("div", {
            style: activeTab === "redeem" && couponCardTabStyles,
            onClick: () => handleTab("redeem"),
            class: "redeemedTab",
            children: "Redeemed"
          })]
        }), activeTab === "unlock" && (yourUnlockedCoupon.length !== 0 ? yourUnlockedCoupon.map((ele, idx) => o("div", {
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
            children: [o("p", {
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
        })), activeTab === "redeem" && (yourRedeemedCoupon.length === 0 ? o("div", {
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
    showPlayGameScreen,
    customerDetails,
    screenDetails
  }) => {
    const [activeTab, setActiveTab] = h("");
    const [loading, setLoading] = h(false);
    const [walletAmount, setWalletAmount] = h(0);
    const [gamesData, setGamesData] = h([]);
    if (activeTab === "") {
      setActiveTab("available");
    }
    p(() => {
      const fetchData = async () => {
        var _a, _b;
        try {
          setLoading(true);
          const response = await fetchApi("/get-featured-spin-wheels", "post", customerDetails);
          const amountResp = await fetchApi("/user-wallet-amount", "post", {
            ...customerDetails
          });
          setGamesData(response == null ? void 0 : response.data);
          setWalletAmount((_b = (_a = amountResp == null ? void 0 : amountResp.data) == null ? void 0 : _a.userWallet) == null ? void 0 : _b.amount);
        } catch (error) {
          console.error("Error fetching wallet data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [customerDetails, activeTab]);
    const handleTab = (mainTab) => {
      setActiveTab(mainTab);
    };
    const activeTabStyles = {
      color: "#373737",
      borderBottom: "2px solid #373737"
    };
    const showWheelOfFortune = (amount) => {
      funcSetSpinWheelAmount(amount);
      showPlayGameScreen();
    };
    return o(k$1, {
      children: [o("div", {
        class: "showGamesTab",
        children: [o("div", {
          class: "viewAllCouponTabText",
          children: [o("h4", {
            style: activeTab === "available" && activeTabStyles,
            onClick: () => handleTab("available"),
            children: "Available"
          }), o("h4", {
            style: activeTab === "yourcoupons" && activeTabStyles,
            onClick: () => handleTab("yourcoupons"),
            children: "Your Coupons"
          })]
        }), o("div", {
          class: "walletCoinsBox",
          children: [o("div", {
            className: "coinIcon"
          }), o("p", {
            children: walletAmount
          })]
        })]
      }), activeTab === "available" && (loading ? o("div", {
        className: "loader",
        children: o(Loading$1, {})
      }) : o("div", {
        class: "showGamesCards",
        children: gamesData.map((game, idx) => o(GamesCard, {
          isLoggedIn: true,
          handleLogin: () => {
          },
          btnClick: () => showWheelOfFortune(game.amount),
          gameDesc: game.description,
          gameTitle: game.title,
          cardImage: game.image,
          btnText: "Explore",
          gamePrice: game.amount
        }, idx))
      })), activeTab === "yourcoupons" && o(YourCoupons$1, {
        customerDetails
      })]
    });
  };
  const ScreenHeader = ({
    screenTitle,
    closeScreen,
    activePage,
    handleBackBtn,
    backBtnVisible
  }) => {
    return o(k$1, {
      children: o("div", {
        className: "screenHeader",
        children: [o("h2", {
          children: screenTitle
        }), backBtnVisible ? o("button", {
          class: "screenHeaderBackBtn",
          onClick: handleBackBtn,
          children: "Back"
        }) : o(k$1, {
          children: !(activePage === "coupon" || activePage === "spinwheel" || activePage === "scratchcard" || activePage === "referral") && o("p", {
            class: "screenHeaderBackBtn",
            onClick: closeScreen,
            children: "Back"
          })
        })]
      })
    });
  };
  const Screen = ({
    screenTitle,
    closeScreen,
    content,
    loyalty_theme,
    isLoggedIn,
    loginURL,
    handleScreenComponent,
    activePage,
    screenDetails
  }) => {
    const [backBtnVisible, setBackBtnVisible] = h(false);
    p(() => {
      if (loyalty_theme === "page") {
        if ((screenDetails == null ? void 0 : screenDetails.screen) === "play_spin_wheel" || (screenDetails == null ? void 0 : screenDetails.screen) === "play_scratch_card") {
          setBackBtnVisible(true);
        }
        if (activePage === "all") {
          setBackBtnVisible(false);
        }
      }
    }, [screenDetails == null ? void 0 : screenDetails.screen]);
    const handleBackBtn = () => {
      if (activePage === "coupon") {
        handleScreenComponent("show_all_coupons", "Coupons");
      } else if (activePage === "spinwheel") {
        handleScreenComponent("show_spin_wheel", "Play Wheel of Fortune");
      } else if (activePage === "scratchcard") {
        handleScreenComponent("show_scratch_card", "Scratch Card");
      }
      setBackBtnVisible(false);
    };
    return o(k$1, {
      children: o("div", {
        class: "screenContainer",
        children: [o(ScreenHeader, {
          handleBackBtn,
          backBtnVisible,
          activePage,
          screenTitle: screenTitle || "check title",
          closeScreen
        }), loyalty_theme === "page" && !isLoggedIn && o("div", {
          className: "loginBtnWrapper",
          children: o("a", {
            class: "loginbtn",
            href: `${loginURL}`,
            children: "Login to Continue"
          })
        }), loyalty_theme === "page" && isLoggedIn && o("div", {
          class: "screenContent",
          children: content
        }), loyalty_theme === "popup" && o("div", {
          class: "screenContent",
          children: content
        })]
      })
    });
  };
  const PlayGame = ({
    shadowRoot,
    spinWheelAmount,
    showSpinGameScreen,
    customerDetails
  }) => {
    const spinAudio = new Audio("https://media.farziengineer.co/farziwallet/spinwheel.mp3");
    const [btnVisibility, setBtnVisibility] = h(false);
    const [showWinPopup, setShowWinPopup] = h(false);
    const [walletAmount, setWalletAmount] = h(0);
    const [spinWheelRewardData, setSpinWheelRewardData] = h([]);
    const [loading, setLoading] = h(true);
    const [error, setError] = h({
      error: false,
      msg: ""
    });
    const [winData, setWinData] = h({
      win_message: "",
      win_index: -1
    });
    const showError = (msg) => {
      setError({
        error: true,
        msg
      });
      setTimeout(() => {
        console.log(error);
        setError({
          error: false,
          msg
        });
      }, 3e3);
    };
    function winAudio() {
      const audio = new Audio("https://media.farziengineer.co/farziwallet/success.mp3");
      audio.play();
    }
    const loadD3JS = async () => {
      const res1 = await fetch("https://d3js.org/d3.v3.min.js");
      const fileContent1 = await res1.text();
      var script1 = document.createElement("script");
      script1.innerHTML = fileContent1;
      document.querySelector("body").appendChild(script1);
    };
    p(() => {
      const fetchWalletAmount = async () => {
        var _a, _b;
        const amountResp = await fetchApi("/user-wallet-amount", "post", {
          ...customerDetails
        });
        setWalletAmount((_b = (_a = amountResp == null ? void 0 : amountResp.data) == null ? void 0 : _a.userWallet) == null ? void 0 : _b.amount);
      };
      fetchWalletAmount();
    }, [showWinPopup]);
    p(() => {
      const fetchRewardArray = async () => {
        const response = await fetchApi(`/get-spin-wheel-rewards`, "post", {
          ...customerDetails,
          couponAmount: spinWheelAmount
        });
        return response;
      };
      loadD3JS().then(() => {
        fetchRewardArray().then((resp) => {
          if ((resp == null ? void 0 : resp.status) === "success") {
            setSpinWheelRewardData(resp == null ? void 0 : resp.data);
            drawWheel(shadowRoot, resp == null ? void 0 : resp.data.map((item, index) => {
              return {
                label: item,
                value: index
              };
            }), false);
            setLoading(false);
          } else {
            setLoading(false);
            showError(resp == null ? void 0 : resp.error);
          }
        });
      }).catch((error2) => {
        console.log("error in loading d3", error2);
      });
    }, []);
    function drawWheel(shadowRoot2, data, unlock, winningIdx, spinnedCallback) {
      (function auto() {
        const scrContent = shadowRoot2.querySelector(".screenContent");
        const spinWheelMainContainer = scrContent.querySelector(".spinWheelMainContainer");
        const chartElement = spinWheelMainContainer.querySelector("#fw-chart-spin-wheel");
        var padding = {
          top: 20,
          right: 40,
          bottom: 0,
          left: 0
        }, w2 = Math.min(chartElement.offsetWidth - padding.left - padding.right, 300), h2 = Math.min(chartElement.offsetWidth - padding.top - padding.bottom, 300), r2 = Math.min(w2, h2) / 2, rotation = 0, oldrotation = 0, picked = winningIdx, color = d3.scale.category20();
        var svg = d3.select(chartElement).append("svg").data([data]).attr("width", w2 + padding.left + padding.right).attr("height", h2 + padding.top + padding.bottom);
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
        });
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
    const playAgain = () => {
      setBtnVisibility(false);
      setShowWinPopup(false);
    };
    const closeWinPopup = () => {
      showSpinGameScreen("show_spin_wheel", "Wheel of Fortune");
    };
    const drawUnlockSpinWheel = () => {
      const redeemSpinWheel = async () => {
        try {
          setLoading(true);
          const response = await fetchApi(`/redeem-spin-wheel`, "post", {
            ...customerDetails,
            couponAmount: spinWheelAmount
          });
          if ((response == null ? void 0 : response.status) === "success") {
            setWinData(response == null ? void 0 : response.data);
            setBtnVisibility(true);
            return response == null ? void 0 : response.data;
          } else {
            showError(response == null ? void 0 : response.error);
          }
        } catch (error2) {
          console.log("error in redeem spinwheel");
        } finally {
          setLoading(false);
        }
      };
      redeemSpinWheel().then((data) => {
        drawWheel(shadowRoot, spinWheelRewardData.map((item, index) => {
          return {
            label: item,
            value: index
          };
        }), true, data == null ? void 0 : data.win_index, spinCB);
      }).catch((error2) => {
        console.log("error in reddeemo spin wheel", error2);
      });
      const unlockSpinWheel = shadowRoot.querySelector("#fw-chart-spin-wheel");
      unlockSpinWheel.innerHTML = ``;
    };
    return o(k$1, {
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
        }), o("div", {
          className: "spinWheelWrapper",
          children: [o("div", {
            id: "fw-chart-spin-wheel"
          }), !btnVisibility && o("div", {
            class: "lockedIcon",
            children: o("img", {
              src: "https://media.farziengineer.co/farziwallet/lock.png",
              alt: ""
            })
          })]
        }), o("div", {
          class: "spinWheelBottom",
          children: [o("hr", {}), btnVisibility ? o("h4", {
            children: "Click 'SPIN' to start"
          }) : o("h4", {
            children: ["Unlock for ", spinWheelAmount, " ", window.fc_loyalty_vars.coin_name, " Coins"]
          }), !btnVisibility && o("button", {
            onClick: drawUnlockSpinWheel,
            class: "couponUnlockBtn",
            children: "Tap to Unlock"
          })]
        }), loading && o("div", {
          class: "loader",
          children: o(Loading$1, {})
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
        }), error.error && o(Alert$1, {
          message: error == null ? void 0 : error.msg
        })]
      })
    });
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
        children: walletLogs.length > 0 ? walletLogs.map((log) => o(WalletPointsActivity, {
          id: log.node.id,
          reason: log.node.reason,
          created: log.node.created,
          amount: log.node.amount,
          type: log.node.type
        })) : o("h3", {
          children: "No Logs Found"
        })
      })
    });
  };
  const ShowScratchCard = ({
    funcScratchCardAmount,
    showScratchCardScreen,
    customerDetails
  }) => {
    const [activeTab, setActiveTab] = h("");
    const [loading, setLoading] = h(false);
    const [walletAmount, setWalletAmount] = h(0);
    const [scratchCardData, setScratchCardData] = h([]);
    if (activeTab === "") {
      setActiveTab("available");
    }
    p(() => {
      const fetchScratchCard = async () => {
        var _a, _b;
        try {
          setLoading(true);
          const response = await fetchApi("/get-featured-scratch-cards", "post", customerDetails);
          setScratchCardData(response == null ? void 0 : response.data);
          const amountResp = await fetchApi("/user-wallet-amount", "post", {
            ...customerDetails
          });
          setWalletAmount((_b = (_a = amountResp == null ? void 0 : amountResp.data) == null ? void 0 : _a.userWallet) == null ? void 0 : _b.amount);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchScratchCard();
    }, [customerDetails, activeTab]);
    const handleMainTab = (mainTab) => {
      setActiveTab(mainTab);
    };
    const activeTabStyles = {
      color: "#373737",
      borderBottom: "2px solid #373737"
    };
    const showScratchCard = (amount) => {
      funcScratchCardAmount(amount);
      showScratchCardScreen("show_scratch_card", "Scratch Card");
    };
    return o(k$1, {
      children: [o("div", {
        class: "showGamesTab",
        children: [o("div", {
          class: "viewAllCouponTabText",
          children: [o("h4", {
            style: activeTab === "available" && activeTabStyles,
            onClick: () => handleMainTab("available"),
            children: "Available"
          }), o("h4", {
            style: activeTab === "yourcoupons" && activeTabStyles,
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
      }), activeTab === "available" && (loading ? o("div", {
        className: "loader",
        children: o(Loading$1, {})
      }) : o("div", {
        class: "showGamesCards",
        children: scratchCardData.map((game, idx) => o(GamesCard, {
          isLoggedIn: true,
          handleLogin: () => {
          },
          btnClick: () => showScratchCard(game.amount),
          gameTitle: game.title,
          gameDesc: game.description,
          cardImage: game.image,
          btnText: "Scratch",
          gamePrice: game.amount
        }, idx))
      })), activeTab === "yourcoupons" && o(YourCoupons$1, {
        customerDetails
      })]
    });
  };
  const ScratchCard = ({
    shadowRoot,
    scratchCardAmount,
    showScratchCardScreen,
    customerDetails
  }) => {
    const [isLocked, setIsLocked] = h(true);
    const [loading, setLoading] = h(false);
    const [walletAmount, setWalletAmount] = h(0);
    const [showWinPopup, setShowWinPopup] = h(false);
    const [playAgain, setPlayAgain] = h(false);
    const [error, setError] = h({
      error: false,
      msg: ""
    });
    const [winMessage, setWinMessage] = h({
      win_message: ""
    });
    const showError = (msg) => {
      setError({
        error: true,
        msg
      });
      setTimeout(() => {
        setError({
          error: false,
          msg: ""
        });
      }, 3e3);
    };
    const init = (context) => {
      let gradientColor = context.createLinearGradient(0, 0, 135, 135);
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
      const fetchWalletAmount = async () => {
        var _a, _b;
        const amountResp = await fetchApi("/user-wallet-amount", "post", {
          ...customerDetails
        });
        setWalletAmount((_b = (_a = amountResp == null ? void 0 : amountResp.data) == null ? void 0 : _a.userWallet) == null ? void 0 : _b.amount);
      };
      fetchWalletAmount();
    }, [showWinPopup]);
    p(() => {
      const screenContent = shadowRoot.querySelector(".screenContent");
      const canvas = screenContent.querySelector("#scratchCardCanvas");
      const context = canvas.getContext("2d");
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
        if ((response == null ? void 0 : response.status) !== "success") {
          showError(response == null ? void 0 : response.error);
        } else {
          setWinMessage(response == null ? void 0 : response.data);
          drawUnlockedScratchCard();
        }
      } catch (error2) {
        console.log("error in SC", error2);
      } finally {
        setLoading(false);
      }
    };
    const drawUnlockedScratchCard = () => {
      setIsLocked(false);
      const screenContent = shadowRoot.querySelector(".screenContent");
      const canvas = screenContent.querySelector("#scratchCardCanvas");
      const context = canvas.getContext("2d");
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
      const threshold = 100;
      let cardScratchable = true;
      const scratch = async (x2, y2) => {
        context.globalCompositeOperation = "destination-out";
        context.beginPath();
        context.arc(x2, y2, 18, 0, 2 * Math.PI);
        context.fill();
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distanceFromCenter = Math.sqrt((x2 - centerX) ** 2 + (y2 - centerY) ** 2) / 2;
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
        children: o(Loading$1, {})
      }), o("div", {
        class: "walletCoinContainer",
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
      }), error.error && o(Alert$1, {
        message: error == null ? void 0 : error.msg
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
    closePopup,
    updateWalletAmount
  }) => {
    const [showCopied, setShowCopied] = h(false);
    const [error, setError] = h({
      error: false,
      msg: ""
    });
    const copyFunc = (code) => {
      setShowCopied(true);
      navigator.clipboard.writeText(code);
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    const [rangeValue, setRangeValue] = h(10);
    const [loading, setLoading] = h(false);
    const [redeemCoinCode, setRedeemCoinCode] = h("");
    const handleChangeRange = (e2) => {
      const {
        value
      } = e2.target;
      setRangeValue(value);
    };
    const showError = (msg) => {
      setError({
        error: true,
        msg
      });
      setTimeout(() => {
        setError({
          error: false,
          msg: ""
        });
      }, 3e3);
    };
    const getRedeemCoin = async () => {
      var _a;
      try {
        setLoading(true);
        const response = await fetchApi(`/get-code`, "post", {
          ...customerDetails,
          couponAmount: rangeValue,
          // @ts-ignore
          coupon_title: `Custom Discount: ${rangeValue} ${window.fc_loyalty_vars.coin_name} Coins for ₹${rangeValue} off`
        });
        if ((response == null ? void 0 : response.status) !== "success") {
          showError(response == null ? void 0 : response.error);
          return;
        }
        setRedeemCoinCode((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.coupon_code);
        updateWalletAmount();
      } catch (error2) {
        console.log("error in redeem coin", error2);
      } finally {
        setLoading(false);
      }
    };
    return loading ? o("div", {
      class: "loader",
      children: o(Loading$1, {})
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
        }), error.error && o(Alert$1, {
          message: error.msg
        })]
      })
    });
  };
  const ViewAllCoupons = ({
    couponCardResponse,
    customerDetails,
    shadowRoot,
    loyalty_theme
  }) => {
    const [availableTab, setAvailableTab] = h(true);
    const [yourCouponTab, setYourCouponTab] = h(false);
    const [exploreCoupon, setExploreCoupon] = h([]);
    const [exploreCouponIdx, setExploreCouponIdx] = h(0);
    const [couponIdx, setCouponIdx] = h(0);
    const [walletAmount, setWalletAmount] = h(0);
    const [loading, setLoading] = h(false);
    const [overlayVisible, setOverlayVisible] = h({
      overlay: "none",
      active: false
    });
    const fetchWalletAmount = async () => {
      var _a, _b;
      const walletAmountResponse = await fetchApi("/user-wallet-amount", "post", customerDetails);
      setWalletAmount((_b = (_a = walletAmountResponse == null ? void 0 : walletAmountResponse.data) == null ? void 0 : _a.userWallet) == null ? void 0 : _b.amount);
    };
    p(() => {
      const exploreCouponResp = async () => {
        var _a, _b, _c;
        try {
          setLoading(true);
          const resp = await fetchApi("/get-coupons-to-explore", "post", customerDetails);
          setExploreCoupon((_a = resp == null ? void 0 : resp.data) == null ? void 0 : _a.data);
          const walletAmountResponse = await fetchApi("/user-wallet-amount", "post", customerDetails);
          setWalletAmount((_c = (_b = walletAmountResponse == null ? void 0 : walletAmountResponse.data) == null ? void 0 : _b.userWallet) == null ? void 0 : _c.amount);
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
          isLoggedIn: true,
          handleLogin: () => {
          },
          updateWalletAmount: fetchWalletAmount,
          customerDetails,
          couponData: couponCardResponse[couponIdx],
          onClick: closeOverlay
        });
      }
      if (overlayname === "explore") {
        return o(CouponOverlay, {
          isLoggedIn: true,
          handleLogin: () => {
          },
          updateWalletAmount: fetchWalletAmount,
          customerDetails,
          couponData: exploreCoupon[exploreCouponIdx],
          onClick: closeOverlay
        });
      }
      if (overlayname === "redeem") {
        return o(RedeemCoin, {
          updateWalletAmount: fetchWalletAmount,
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
      const mainPopup = shadowRoot.querySelector(`${loyalty_theme === "popup" ? ".mainPopup" : ".loyaltyMainPage"}`);
      const scrolledTop = mainPopup.scrollTop;
      mainPopup.style.overflowY = "hidden";
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "flex";
      overlay.style.justifyContent = "end";
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
      const mainPopup = shadowRoot.querySelector(`${loyalty_theme === "popup" ? ".mainPopup" : ".loyaltyMainPage"}`);
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
    const sliderRef = _$1(null);
    const [prevBtn, setPrevBtn] = h(false);
    const [nextBtn, setNextBtn] = h(true);
    const scrollLeft = () => {
      sliderRef.current.scrollBy({
        left: -200,
        behavior: "smooth"
      });
      if (sliderRef.current.scrollLeft - 200 <= 5) {
        setPrevBtn(false);
        setNextBtn(true);
      } else {
        setPrevBtn(true);
        setNextBtn(true);
      }
    };
    const scrollRight = () => {
      sliderRef.current.scrollBy({
        left: 200,
        behavior: "smooth"
      });
      if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth + 200 >= sliderRef.current.scrollWidth - 5) {
        setPrevBtn(true);
        setNextBtn(false);
      } else {
        setPrevBtn(true);
        setNextBtn(true);
      }
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
          children: o(Loading$1, {})
        }) : o("div", {
          children: [o("div", {
            class: "couponMainContainer",
            children: o("div", {
              class: "viewAllFeaturedComponent",
              children: [o("h3", {
                children: "Featured Coupons"
              }), o("div", {
                class: "showAllCouponsList",
                ref: sliderRef,
                children: couponCardResponse.map((card, index) => o(CouponCard, {
                  onClick: () => handleAndShowCouponOverlay(index),
                  couponPrice: card.amount,
                  couponDesc: card.title,
                  couponImgLink: card.image
                }, index))
              }), couponCardResponse.length > (loyalty_theme === "popup" ? 2 : 10) && o(k$1, {
                children: [prevBtn && o("div", {
                  className: "scrollBtnPrev",
                  onClick: scrollLeft,
                  children: o("img", {
                    src: "https://media.farziengineer.co/farziwallet/arrow.png",
                    alt: ""
                  })
                }), nextBtn && o("div", {
                  className: "scrollBtnNext",
                  onClick: scrollRight,
                  children: o("img", {
                    src: "https://media.farziengineer.co/farziwallet/arrow.png",
                    alt: ""
                  })
                })]
              })]
            })
          }), o("div", {
            className: "couponWrapper",
            children: [o("div", {
              class: "reedemfcCoins",
              children: [o("h3", {
                children: ["Redeem ", window.fc_loyalty_vars.coin_name, " "]
              }), o("div", {
                onClick: () => changeOverlay("redeem"),
                class: "reedemfcCoinsCard",
                children: [o("div", {
                  children: o("img", {
                    src: "https://media.farziengineer.co/farziwallet/rupee-icon.png",
                    alt: ""
                  })
                }), o("div", {
                  children: [o("h5", {
                    children: ["100 ", window.fc_loyalty_vars.coin_name, "  = ₹100"]
                  }), o("p", {
                    children: ["Use ", window.fc_loyalty_vars.coin_name, " to create a custom discount coupon"]
                  })]
                }), o("div", {
                  children: o("img", {
                    class: "reedemfcCoinsCardArrow",
                    src: "https://media.farziengineer.co/farziwallet/arrow.png",
                    alt: ""
                  })
                })]
              })]
            }), exploreCoupon.length > 0 && o("div", {
              class: "exploreCoupons",
              children: [o("h3", {
                children: "Coupons to Explore"
              }), o(k$1, {
                children: exploreCoupon && exploreCoupon.map((card, idx) => o("div", {
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
                }))
              })]
            })]
          })]
        })), yourCouponTab && o(YourCoupons$1, {
          customerDetails
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
  const Logout = ({
    handleLogin
  }) => {
    return o(k$1, {
      children: o("div", {
        class: "logoutwalletCard",
        children: [o("div", {
          children: [o("p", {
            class: "walletCardText",
            children: ["My ", window.fc_loyalty_vars.coin_name]
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
          onClick: handleLogin,
          class: "coinCard",
          children: [o("div", {
            class: "coinIcon"
          }), o("h1", {
            children: "Login"
          })]
        }), o("img", {
          src: "https://static.farziengineer.co/farziwallet/sparks.png",
          id: "sparkImg",
          alt: ""
        }), o("img", {
          src: "https://static.farziengineer.co/farziwallet/sparks.png",
          id: "sparkImg2",
          alt: ""
        })]
      })
    });
  };
  const ReferralPopup = ({
    referedAmount,
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
          children: ["You have received ", referedAmount, " points into your ", clientName, " wallet for signing up with us."]
        })]
      })
    });
  };
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
  const EasyEarnCard = ({
    btnClick,
    cardImage,
    gameTitle,
    gameDesc,
    btnText,
    gamePrice,
    isLoggedIn,
    handleLogin
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
            disabled: btnText.toLowerCase() === "signup here" && isLoggedIn ? true : false,
            onClick: isLoggedIn ? btnClick : handleLogin,
            class: btnText.toLowerCase() === "signup here" && isLoggedIn ? "easyEarnCardBtn" : "gamesCardBtn",
            children: btnText.toLowerCase() === "signup here" && isLoggedIn ? "Claimed" : btnText
          })]
        })]
      })
    });
  };
  const EasyEarn = ({
    walletAmount
  }) => {
    const gamesData = [{
      gameTitle: "Place an Order",
      gameDesc: `Earn Rs. 10% ${window.fc_loyalty_vars.coin_name} Cashback`,
      cardImage: "https://media.farziengineer.co/farziwallet/Place_order.png",
      gamePrice: "100",
      btnText: "Order Now",
      btnClick: () => {
        console.log("clicked");
      }
    }, {
      gameTitle: "Signup",
      gameDesc: `Earn Rs. 100 ${window.fc_loyalty_vars.coin_name} Cashback`,
      cardImage: "https://media.farziengineer.co/farziwallet/Sign_up.png",
      gamePrice: "100",
      btnText: "Signup Here",
      btnClick: () => {
        console.log("clicked");
      }
    }, {
      gameTitle: "Birthday",
      gameDesc: `Add birthday to get 100 ${window.fc_loyalty_vars.coin_name} points`,
      cardImage: "https://media.farziengineer.co/farziwallet/Birthday.png",
      gamePrice: "100",
      btnText: "Earn Now",
      btnClick: () => {
        console.log("clicked");
      }
    }, {
      gameTitle: "Anniversary",
      gameDesc: `Add anniversary to get 100 ${window.fc_loyalty_vars.coin_name} points`,
      cardImage: "https://media.farziengineer.co/farziwallet/anniversary.png",
      gamePrice: "100",
      btnText: "Earn Now",
      btnClick: () => {
        console.log("clicked");
      }
    }];
    return o(k$1, {
      children: o("div", {
        className: "easyEarnScreen",
        children: [o("p", {
          className: "easyEarnScreenDesc",
          children: "Earn Reward just by inputting your details"
        }), o("div", {
          className: "coinContainer",
          children: o("div", {
            className: "walletCoinsBox",
            children: [o("div", {
              class: "coinIcon"
            }), o("p", {
              children: walletAmount
            })]
          })
        }), o("div", {
          className: "easyEarnScreenContainer",
          children: gamesData.map((game, index) => o(EasyEarnCard, {
            btnClick: game.btnClick,
            gameTitle: game.gameTitle,
            gameDesc: game.gameDesc,
            cardImage: game.cardImage,
            gamePrice: game.gamePrice,
            btnText: game.btnText,
            isLoggedIn: true,
            handleLogin: () => {
            }
          }, index))
        })]
      })
    });
  };
  const EasyEarnOverlay = ({
    easyEarnTitle,
    easyPoints,
    easyEarnDesc,
    easyEarnBtnText,
    easyEarnImg
  }) => {
    return o("div", {
      className: "easyEarnOverlayContainer",
      children: [o("img", {
        className: "easyEarnImg",
        src: "https://media.farziengineer.co/farziwallet/Birthday.png",
        alt: ""
      }), o("h2", {
        className: "easyEarn",
        children: "Birthday"
      }), o("div", {
        className: "easyEarnCoinBox",
        children: [o("div", {
          className: "coinIcon"
        }), o("p", {
          children: "100"
        })]
      }), o("p", {
        className: "easyEarnDesc",
        children: "Earn Rs. 100 JH Cashback on your Birthday Date."
      }), o("div", {
        className: "easyEarnDateContainer",
        children: [o("input", {
          type: "tel",
          name: "",
          id: ""
        }), o("input", {
          type: "tel",
          name: "",
          id: ""
        }), o("input", {
          type: "tel",
          name: "",
          id: ""
        })]
      }), o("button", {
        className: "gamesCardBtn",
        children: "Save"
      })]
    });
  };
  const Alert = ({
    message
  }) => {
    const capitalizeFirstLetter = (str) => {
      const alphabeticStr = str.replace(/[^a-zA-Z ]/g, "");
      return alphabeticStr.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    };
    const formattedMessage = capitalizeFirstLetter(message || "Something went wrong");
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
        children: `${formattedMessage}`
      })]
    });
  };
  const WALLET_API_URI$2 = "https://fastloyaltyapi.farziengineer.co";
  const fetchApi$1 = async (route, method, data) => {
    const resp = await fetch(`${WALLET_API_URI$2}${route}`, {
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
  const ReferralPage = ({
    shadowRoot,
    themeDetailsData
  }) => {
    var _a;
    const [login, setLogin] = h(false);
    const [loading, setLoading] = h(false);
    const [error, setError] = h(false);
    const [showCopied, setShowCopied] = h(false);
    const [inviteMsg, setInviteMsg] = h("");
    const mainScript = document.getElementById("fc-loyalty-popup-script-19212");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const user_hash = (_a = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a.trim();
    const client_id = mainScript.getAttribute("data-client-id");
    if (customer_id) {
      setLogin(true);
    }
    console.log("running referral ui ");
    p(() => {
      const fetch2 = async () => {
        try {
          const walletResponse = await fetchApi$1("/user-walletlogs", "post", {
            client_id,
            customer_id,
            user_hash
          });
        } catch (error2) {
          const checkUser = await fetchApi$1("/sync-external-user", "post", {
            client_id,
            customer_id
          });
          if (checkUser.status === "success") {
            console.log("user mil gya");
          }
        }
      };
      fetch2();
    }, []);
    const handleShareClick = async () => {
      var _a2;
      if (!localStorage.getItem(`fc-whatsapp-msg-${customer_id}`)) {
        const whatsappResp = await fetchApi$1("/get-referred-message", "post", {
          client_id,
          customer_id,
          user_hash
        });
        if ((whatsappResp == null ? void 0 : whatsappResp.status) === "success") {
          const message = (_a2 = whatsappResp == null ? void 0 : whatsappResp.data) == null ? void 0 : _a2.getReferredMessage;
          localStorage.setItem(`fc-whatsapp-msg-${customer_id}`, message);
        } else {
          showError();
        }
      } else {
        if (navigator.share) {
          navigator.share({
            title: "Invite your friend to get rewards",
            text: localStorage.getItem(`fc-whatsapp-msg-${customer_id}`)
          }).then(() => console.log("Successful share")).catch((error2) => console.log("Error sharing", error2));
        } else {
          navigator.clipboard.writeText(localStorage.getItem(`fc-whatsapp-msg-${customer_id}`));
          setShowCopied(true);
          setTimeout(() => {
            setShowCopied(false);
          }, 1e3);
        }
      }
    };
    p(() => {
      const fetchData = async () => {
        var _a2, _b;
        try {
          setLoading(true);
          if (!localStorage.getItem(`fc-referral-code-${customer_id}`)) {
            const resp = await fetchApi$1("/get-referral-code", "post", {
              client_id,
              customer_id,
              user_hash
            });
            if ((resp == null ? void 0 : resp.status) === "success") {
              if (!((_a2 = resp == null ? void 0 : resp.data) == null ? void 0 : _a2.path.includes("undefined"))) {
                localStorage.setItem(`fc-referral-code-${customer_id}`, (_b = resp == null ? void 0 : resp.data) == null ? void 0 : _b.path);
              }
            } else {
              showError();
            }
          }
        } catch (error2) {
          console.error("Error fetching data:", error2);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
    p(() => {
      const fetchData = async () => {
        var _a2, _b;
        if (!localStorage.getItem(`fc-invite-text-${customer_id}`)) {
          const resp = await fetchApi$1("/get-referrer-message", "post", {
            client_id
          });
          if ((resp == null ? void 0 : resp.status) === "success") {
            localStorage.setItem(`fc-invite-text-${customer_id}`, (_a2 = resp == null ? void 0 : resp.data) == null ? void 0 : _a2.getReferrerMessage);
            setInviteMsg((_b = resp == null ? void 0 : resp.data) == null ? void 0 : _b.getReferrerMessage);
          } else {
            showError();
          }
        } else {
          setInviteMsg(localStorage.getItem(`fc-invite-text-${customer_id}`));
        }
      };
      fetchData();
    }, []);
    const showError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3e3);
    };
    const copyReferralLinkFunc = () => {
      console.log("referral copy func", localStorage.getItem(`fc-referral-code-${customer_id}`));
      setShowCopied(true);
      navigator.clipboard.writeText(window.location.origin + (localStorage.getItem(`fc-referral-code-${customer_id}`) || "/account/register"));
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    const hanldeWhatsappClick = async () => {
      var _a2;
      if (localStorage.getItem(`fc-whatsapp-msg-${client_id}`)) {
        window.open(`https://api.whatsapp.com/send?text=${localStorage.getItem(`fc-whatsapp-msg-${client_id}`)}`, "_blank");
      } else {
        try {
          const whatsappResp = await fetchApi$1("/get-referred-message", "post", {
            client_id,
            customer_id,
            user_hash
          });
          if ((whatsappResp == null ? void 0 : whatsappResp.status) === "success") {
            const message = (_a2 = whatsappResp == null ? void 0 : whatsappResp.data) == null ? void 0 : _a2.getReferredMessage;
            localStorage.setItem(`fc-whatsapp-msg-${client_id}`, message);
            window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
          } else {
            showError();
          }
        } catch (error2) {
          showError();
        }
      }
    };
    return login ? o(k$1, {
      children: [loading ? o("div", {
        className: "loader",
        children: o(Loading, {})
      }) : o("div", {
        className: "referralContainer",
        children: o("div", {
          className: "inviteAndEarnContainerPage",
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
              children: inviteMsg
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
              className: "ellipsis-text",
              children: `${window.location.origin}${localStorage.getItem(`fc-referral-code-${customer_id}`) || "/account/register"}`
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
            children: [o("button", {
              onClick: () => hanldeWhatsappClick(),
              className: "inviteWhatsappBtn",
              children: [o("img", {
                src: "https://media.farziengineer.co/farziwallet/whatsapp-icon.png",
                alt: ""
              }), o("p", {
                children: "Send on WhatsApp"
              })]
            }), o("button", {
              onClick: () => handleShareClick(),
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
  function Main$1({
    themeDetailsData,
    shadowRoot,
    loyalty_theme
  }) {
    var _a, _b;
    const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
    const client_id = mainScript.getAttribute("data-client-id");
    const customer_id = mainScript.getAttribute("data-customer-id");
    const client_name = mainScript.getAttribute("client-name");
    const activePage = mainScript.getAttribute("data-active-page");
    const [visibilty, setVisibility] = h(false);
    const [referralPopup, setReferralPopup] = h(false);
    const [referedAmount, setReferedAmount] = h(0);
    const [walletAmount, setWalletAmount] = h(0);
    const [walletLogs, setWalletLogs] = h([]);
    const [spinWheelAmount, setSpinWheelAmount] = h(0);
    const [scratchCardAmount, setScratchCardAmount] = h(0);
    const [loading, setLoading] = h(false);
    const [isLoggedIn, setIsLoggedIn] = h(false);
    const [error, setError] = h({
      error: false,
      msg: ""
    });
    const [featuredCoupons, setFeaturedCoupons] = h([]);
    const [couponCardIdx, setCouponCardIdx] = h(0);
    const [customerDetails, setCustomerDetails] = h({
      customer_id: "",
      user_hash: "",
      client_id: ""
    });
    const [voucherDetails, setVoucherDetails] = h({
      voucherCategory: "",
      categoryId: ""
    });
    const [singleSpinWheel, setSingleSpinWheel] = h({
      title: "",
      description: "",
      image: "",
      amount: "",
      btnText: ""
    });
    const [singleScratchCard, setSingleScratchCard] = h({
      title: "",
      description: "",
      image: "",
      amount: "",
      btnText: ""
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
    const handleLogin = () => {
      var _a2;
      if (!isLoggedIn) {
        window.location.href = (_a2 = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a2.login_page;
      }
    };
    const handleCloseReferralPopup = () => {
      setReferralPopup(false);
      location.reload();
    };
    const showError = (msg) => {
      setError({
        error: true,
        msg
      });
      setTimeout(() => {
        setError({
          error: false,
          msg: ""
        });
      }, 3e3);
    };
    const funcScratchCardAmount = (amount) => {
      setScratchCardAmount(amount);
    };
    async function redeemReferHash({
      client_id: client_id2,
      customer_id: customer_id2
    }) {
      const fc_refer_hash = localStorage.getItem("fc_refer_hash");
      if (fc_refer_hash) {
        setTimeout(async () => {
          var _a2, _b2, _c;
          try {
            const user_hash = (_a2 = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a2.trim();
            if (!localStorage.getItem(`fc-referral-code-${customer_id2}`)) {
              try {
                const resp = await fetchApi("/get-referral-code", "post", {
                  client_id: client_id2,
                  customer_id: customer_id2,
                  user_hash
                });
                if ((resp == null ? void 0 : resp.status) === "success") {
                  localStorage.setItem(`fc-referral-code-${customer_id2}`, (_b2 = resp == null ? void 0 : resp.data) == null ? void 0 : _b2.path);
                }
              } catch (error2) {
                console.log("error", error2);
              }
            }
            const response = await fetchApi("/redeem-referral-code", "post", {
              client_id: client_id2,
              customer_id: customer_id2,
              refer_hash: fc_refer_hash
            });
            if ((response == null ? void 0 : response.status) === "success") {
              setReferralPopup(true);
              setReferedAmount((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.referredReward);
              localStorage.removeItem("fc_refer_hash");
              return;
            }
          } catch (err) {
            console.log("error in redeemReferHash", err);
          }
        }, 2e3);
      }
    }
    p(() => {
      redeemReferHash({
        client_id,
        customer_id
      });
    }, [referralPopup]);
    function setTheme({
      themeDetails
    }) {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      let cssVariablesScope;
      if (loyalty_theme === "page") {
        cssVariablesScope = shadowRoot.querySelector(".loyaltyMainPage");
      } else {
        cssVariablesScope = shadowRoot.querySelector(".mainPopup");
      }
      let floatingPopupPos;
      if (loyalty_theme === "popup") {
        floatingPopupPos = shadowRoot.querySelector(".floatingPopup");
      }
      if (loyalty_theme === "popup" && floatingPopupPos) {
        if (((_a2 = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _a2.icon_position) === "left") {
          const leftOffset = ((_c = (_b2 = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _b2.icon_offset) == null ? void 0 : _c.left) || 0;
          const bottomOffset = ((_e = (_d = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _d.icon_offset) == null ? void 0 : _e.bottom) || 0;
          floatingPopupPos.style.left = `calc(2% + ${leftOffset})`;
          floatingPopupPos.style.top = `calc(86% - ${bottomOffset})`;
          if (cssVariablesScope) {
            cssVariablesScope.style.left = `calc(8% + ${leftOffset})`;
            cssVariablesScope.style.top = `calc(9% - ${leftOffset})`;
          }
        } else {
          const leftOffset = ((_g = (_f = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _f.icon_offset) == null ? void 0 : _g.left) || 0;
          const bottomOffset = ((_i = (_h = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _h.icon_offset) == null ? void 0 : _i.bottom) || 0;
          floatingPopupPos.style.left = `calc(93% - ${leftOffset})`;
          floatingPopupPos.style.top = `calc(86% - ${bottomOffset})`;
          if (cssVariablesScope) {
            cssVariablesScope.style.left = `calc(65% - ${leftOffset})`;
            cssVariablesScope.style.top = `calc(9% - ${leftOffset})`;
          }
        }
      }
      if (cssVariablesScope && ((_j = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _j.theme_color)) {
        cssVariablesScope.style.setProperty("--loyalty_popup_theme_background", (_k = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _k.theme_color);
        if ((_l = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _l.coin_icon) {
          cssVariablesScope.style.setProperty("--coin-svg-url", `url("${(_m = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _m.coin_icon}")`);
          cssVariablesScope.style.setProperty("--coin-svg-inverted-url", `url("${(_n = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _n.coin_icon}")`);
        } else {
          cssVariablesScope.style.setProperty("--coin-svg-url", `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`);
          cssVariablesScope.style.setProperty("--coin-svg-inverted-url", `url("https://media.farziengineer.co/farziwallet/coin-icon.png")`);
        }
      }
      if ((_o = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _o.coin_name) {
        window.fc_loyalty_vars = {
          coin_name: (_p = themeDetails == null ? void 0 : themeDetails.data) == null ? void 0 : _p.coin_name
        };
      } else {
        window.fc_loyalty_vars = {
          coin_name: "FC"
        };
      }
      if (loyalty_theme === "popup") {
        shadowRoot.querySelector(".floatingPopup").style.display = "flex";
      }
    }
    p(() => {
      setTheme({
        themeDetails: themeDetailsData
      });
    }, [visibilty]);
    p(() => {
      var _a2;
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
              // overflow: hidden;
          }
      `;
        document.body.appendChild(styles);
      })();
      const user_hash = (_a2 = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a2.trim();
      setCustomerDetails({
        client_id,
        customer_id,
        user_hash
      });
      if (customer_id) {
        setIsLoggedIn(true);
      }
      if (loyalty_theme === "page") {
        setVisibility(true);
      }
      if (loyalty_theme === "page") {
        switch (activePage) {
          case "coupon":
            setScreenDetails({
              screen: "show_all_coupons",
              screenTitle: "Coupons",
              active: true
            });
            break;
          case "spinwheel":
            setScreenDetails({
              screen: "show_spin_wheel",
              screenTitle: "Play Wheel of Fortune",
              active: true
            });
            break;
          case "scratchcard":
            setScreenDetails({
              screen: "show_scratch_card",
              screenTitle: "Play Scratch Card",
              active: true
            });
            break;
          case "referral":
            setScreenDetails({
              screen: "referral",
              screenTitle: "Referral",
              active: true
            });
            break;
          default:
            setScreenDetails({
              screen: "home_screen",
              screenTitle: "",
              active: false
            });
        }
      }
      console.log("screenDetails", activePage);
    }, []);
    p(() => {
      if ((customerDetails == null ? void 0 : customerDetails.customer_id) !== "") {
        const fetchData = async () => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
          try {
            setLoading(true);
            const walletResponse = await fetchApi("/user-walletlogs", "post", {
              ...customerDetails
            });
            if ((walletResponse == null ? void 0 : walletResponse.status) !== "success") {
              showError("Failed");
            } else {
              setWalletLogs((_e = (_d = (_c = (_b2 = (_a2 = walletResponse == null ? void 0 : walletResponse.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.wallet) == null ? void 0 : _c.wallet) == null ? void 0 : _d.logs) == null ? void 0 : _e.edges);
            }
          } catch (error2) {
            const checkUser = await fetchApi("/sync-external-user", "post", {
              ...customerDetails
            });
            if (checkUser.status === "success") {
              const walletResponse = await fetchApi("/user-walletlogs", "post", {
                ...customerDetails
              });
              setWalletAmount((_i = (_h = (_g = (_f = walletResponse == null ? void 0 : walletResponse.data) == null ? void 0 : _f.data) == null ? void 0 : _g.wallet) == null ? void 0 : _h.wallet) == null ? void 0 : _i.amount);
            }
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }
    }, [customerDetails, screenDetails == null ? void 0 : screenDetails.screen, referralPopup]);
    p(() => {
      const fetch2 = async () => {
        if (localStorage.getItem(`fc-coupon-card-${client_id}`)) {
          let coupons = localStorage.getItem(`fc-coupon-card-${client_id}`);
          setFeaturedCoupons(JSON.parse(coupons));
        } else {
          const couponResponse = await fetchApi("/get-featured-coupons", "post", {
            client_id
          });
          if ((couponResponse == null ? void 0 : couponResponse.status) !== "success") {
            showError(couponResponse == null ? void 0 : couponResponse.error);
          } else {
            if (couponResponse == null ? void 0 : couponResponse.data) {
              setFeaturedCoupons(couponResponse == null ? void 0 : couponResponse.data);
              localStorage.setItem(`fc-coupon-card-${client_id}`, JSON.stringify(couponResponse == null ? void 0 : couponResponse.data));
            } else {
              showError("No coupons found");
            }
          }
        }
        const spinWheelResponse = await fetchApi("/get-featured-spin-wheels", "post", {
          client_id
        });
        setSingleSpinWheel(spinWheelResponse == null ? void 0 : spinWheelResponse.data[0]);
        const scratchCardResponse = await fetchApi("/get-featured-scratch-cards", "post", {
          client_id
        });
        setSingleScratchCard(scratchCardResponse == null ? void 0 : scratchCardResponse.data[0]);
      };
      fetch2();
    }, []);
    const fetchWalletAmount = async () => {
      var _a2, _b2;
      const walletAmountResponse = await fetchApi("/user-wallet-amount", "post", {
        client_id,
        customer_id
      });
      setWalletAmount((_b2 = (_a2 = walletAmountResponse == null ? void 0 : walletAmountResponse.data) == null ? void 0 : _a2.userWallet) == null ? void 0 : _b2.amount);
    };
    p(() => {
      var _a2;
      const user_hash = (_a2 = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a2.trim();
      const fetchData = async () => {
        var _a3, _b2;
        if (!localStorage.getItem(`fc-referral-code-${customer_id}`)) {
          const resp = await fetchApi("/get-referral-code", "post", {
            client_id,
            customer_id,
            user_hash
          });
          if ((resp == null ? void 0 : resp.status) === "success") {
            if (!((_a3 = resp == null ? void 0 : resp.data) == null ? void 0 : _a3.path.includes("undefined"))) {
              localStorage.setItem(`fc-referral-code-${customer_id}`, (_b2 = resp == null ? void 0 : resp.data) == null ? void 0 : _b2.path);
            }
          }
        }
      };
      fetchData();
    }, []);
    p(() => {
      const fetchWalletAmount2 = async () => {
        var _a2, _b2;
        const walletAmountResponse = await fetchApi("/user-wallet-amount", "post", {
          client_id,
          customer_id
        });
        setWalletAmount((_b2 = (_a2 = walletAmountResponse == null ? void 0 : walletAmountResponse.data) == null ? void 0 : _a2.userWallet) == null ? void 0 : _b2.amount);
      };
      fetchWalletAmount2();
    }, [screenDetails, overlayVisible]);
    const btnClick = (idx, category, id) => {
      setVoucherDetails({
        voucherCategory: category,
        categoryId: id
      });
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
      let mainPopup;
      if (loyalty_theme === "page") {
        mainPopup = document.body;
      }
      if (loyalty_theme === "popup") {
        mainPopup = shadowRoot.querySelector(".mainPopup");
      }
      const scrolledTop = mainPopup.scrollTop;
      console.log("scrolledTop", scrolledTop);
      if (loyalty_theme === "popup") {
        mainPopup.style.overflowY = "hidden";
      }
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "flex";
      overlay.style.justifyContent = `${loyalty_theme === "popup" ? "end" : "center"}`;
      if (loyalty_theme === "page") {
        overlay.style.alignItems = "center";
        window.scrollTo({
          top: window.innerHeight * 0.6,
          behavior: "smooth"
        });
      }
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
      let mainPopup;
      if (loyalty_theme === "page") {
        mainPopup = document.body;
      }
      if (loyalty_theme === "popup") {
        mainPopup = shadowRoot.querySelector(".mainPopup");
      }
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
          isLoggedIn,
          handleLogin,
          updateWalletAmount: fetchWalletAmount,
          customerDetails,
          couponData: featuredCoupons[couponCardIdx],
          onClick: closeOverlay,
          voucherDetails
        });
      }
      if (overlayname === "invite_and_earn") {
        return o(InviteAndEarnOverlay, {
          customerDetails,
          closeOverlay
        });
      }
      if (overlayname === "easy_earn") {
        return o(EasyEarnOverlay, {
          easyEarnBtnText: "",
          easyEarnDesc: "",
          easyEarnTitle: "",
          easyEarnImg: "",
          easyPoints: ""
        });
      }
    };
    p(() => {
      if (!referralPopup) {
        if (loyalty_theme !== "page") {
          if (visibilty) {
            document.body.classList.add("fc-no-scroll");
          } else {
            document.body.classList.remove("fc-no-scroll");
          }
        }
      }
    }, [visibilty]);
    const showPlayGameScreen = () => {
      setScreenDetails({
        ...screenDetails,
        screen: "play_spin_wheel",
        screenTitle: "Play Wheel of Fortune",
        active: true
      });
    };
    const showScratchCardScreen = () => {
      setScreenDetails({
        ...screenDetails,
        screen: "play_scratch_card",
        screenTitle: "Scratch Your Card",
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
    const handleScreenComponent = (screenname, screenTitle) => {
      setScreenDetails({
        ...screenDetails,
        screen: screenname,
        screenTitle,
        active: true
      });
    };
    const easyEarnData = [{
      gameTitle: "Place an Order",
      gameDesc: `Earn Rs. 10% ${window.fc_loyalty_vars.coin_name} Cashback`,
      cardImage: "https://media.farziengineer.co/farziwallet/Place_order.png",
      gamePrice: "100",
      btnText: "Order Now"
    }, {
      gameTitle: "Signup",
      gameDesc: `Earn Rs. 100 ${window.fc_loyalty_vars.coin_name} Cashback`,
      cardImage: "https://media.farziengineer.co/farziwallet/Sign_up.png",
      gamePrice: "100",
      btnText: "Signup Here"
    }, {
      gameTitle: "Birthday",
      gameDesc: `Add birthday to get 100 ${window.fc_loyalty_vars.coin_name} points`,
      cardImage: "https://media.farziengineer.co/farziwallet/Birthday.png",
      gamePrice: "100",
      btnText: "Earn Now"
    }, {
      gameTitle: "Anniversary",
      gameDesc: `Add anniversary to get 100 ${window.fc_loyalty_vars.coin_name} points`,
      cardImage: "https://media.farziengineer.co/farziwallet/anniversary.png",
      gamePrice: "100",
      btnText: "Earn Now"
    }];
    const getScreenComponent = (screenname) => {
      switch (screenname) {
        case "play_spin_wheel":
          return o(PlayGame, {
            customerDetails,
            showSpinGameScreen: handleScreenComponent,
            spinWheelAmount,
            shadowRoot
          });
        case "show_spin_wheel":
          return o(ShowGames, {
            customerDetails,
            funcSetSpinWheelAmount,
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
            shadowRoot
          });
        case "show_scratch_card":
          return o(ShowScratchCard, {
            customerDetails,
            funcScratchCardAmount,
            showScratchCardScreen
          });
        case "show_all_coupons":
          return o(ViewAllCoupons, {
            loyalty_theme,
            shadowRoot,
            couponCardResponse: featuredCoupons,
            customerDetails
          });
        case "easy_earn":
          return o(EasyEarn, {
            walletAmount
          });
        case "referral":
          return o(ReferralPage, {
            shadowRoot,
            themeDetailsData
          });
        default:
          console.warn("Unknown screen:", screenname);
      }
    };
    const sliderRef = _$1(null);
    const easyEarnSliderRef = _$1(null);
    const [prevBtn, setPrevBtn] = h(false);
    const [nextBtn, setNextBtn] = h(true);
    const [easyEarnPrevBtn, seteasyEarnPrevBtn] = h(false);
    const [easyEarnNextBtn, setEasyEarnNextBtn] = h(true);
    const scrollLeft = () => {
      sliderRef.current.scrollBy({
        left: -200,
        behavior: "smooth"
      });
      if (sliderRef.current.scrollLeft - 200 <= 5) {
        setPrevBtn(false);
        setNextBtn(true);
      } else {
        setPrevBtn(true);
        setNextBtn(true);
      }
    };
    const easyEarnScrollLeft = () => {
      easyEarnSliderRef.current.scrollBy({
        left: -200,
        behavior: "smooth"
      });
      if (easyEarnSliderRef.current.scrollLeft - 200 <= 5) {
        seteasyEarnPrevBtn(false);
        setEasyEarnNextBtn(true);
      } else {
        seteasyEarnPrevBtn(true);
        setEasyEarnNextBtn(true);
      }
    };
    const easyEarnScrollRight = () => {
      easyEarnSliderRef.current.scrollBy({
        left: 200,
        behavior: "smooth"
      });
      if (easyEarnSliderRef.current.scrollLeft + easyEarnSliderRef.current.offsetWidth + 200 >= easyEarnSliderRef.current.scrollWidth - 5) {
        seteasyEarnPrevBtn(true);
        setEasyEarnNextBtn(false);
      } else {
        seteasyEarnPrevBtn(true);
        setEasyEarnNextBtn(true);
      }
    };
    const scrollRight = () => {
      sliderRef.current.scrollBy({
        left: 200,
        behavior: "smooth"
      });
      if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth + 200 >= sliderRef.current.scrollWidth - 5) {
        setPrevBtn(true);
        setNextBtn(false);
      } else {
        setPrevBtn(true);
        setNextBtn(true);
      }
    };
    return o(k$1, {
      children: [o(Referral, {}), loyalty_theme === "popup" && o("img", {
        onClick: handleViewPopup,
        style: {
          backgroundColor: (_a = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _a.theme_color
        },
        class: "floatingPopup",
        src: "https://media.farziengineer.co/farziwallet/gift-icon.png",
        width: 30,
        height: 30,
        alt: "gift icon"
      }), !referralPopup && visibilty && o(k$1, {
        children: o("div", {
          className: loyalty_theme === "page" ? "loyaltyMainPage" : "mainPopup",
          children: [(screenDetails == null ? void 0 : screenDetails.active) ? o(Screen, {
            loyalty_theme,
            closeScreen,
            screenTitle: (screenDetails == null ? void 0 : screenDetails.screenTitle) || "screentitle",
            content: getScreenComponent(screenDetails == null ? void 0 : screenDetails.screen),
            isLoggedIn,
            loginURL: (_b = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _b.login_page,
            handleScreenComponent,
            activePage,
            screenDetails
          }) : loading ? o("div", {
            className: "loader",
            children: o(Loading$1, {})
          }) : o(k$1, {
            children: [o("div", {
              class: "header",
              children: [o("div", {
                class: "leftHeader",
                children: [o("p", {
                  children: "Welcome to"
                }), o("h6", {
                  children: client_name
                })]
              }), o("div", {
                class: "rightHeader",
                children: loyalty_theme === "popup" && o("img", {
                  class: "closePopup",
                  onClick: handleViewPopup,
                  src: "https://media.farziengineer.co/farziwallet/cross.png",
                  alt: ""
                })
              })]
            }), isLoggedIn ? o(WalletCard, {
              walletAmount,
              onClick: () => handleScreenComponent("transaction_log", "Points activity")
            }) : o(Logout, {
              handleLogin
            }), o("div", {
              class: "couponMainContainer",
              children: [o("div", {
                class: "viewAllCouponsContainer",
                children: [o("h1", {
                  children: "Redeem with Coupons"
                }), o("div", {
                  class: "viewAllBtn",
                  children: [o("a", {
                    onClick: isLoggedIn ? () => handleScreenComponent("show_all_coupons", "Coupons") : handleLogin,
                    children: "View All"
                  }), o("img", {
                    width: 6,
                    src: "https://media.farziengineer.co/farziwallet/arrow.png",
                    alt: ""
                  })]
                })]
              }), o("div", {
                class: "showAllCouponsList",
                ref: sliderRef,
                children: [featuredCoupons.length !== 0 && featuredCoupons.map((card, index) => o(CouponCard, {
                  onClick: () => {
                    const imgUrl = card.image;
                    const imgUrlObj = new URL(imgUrl);
                    const params = new URLSearchParams(imgUrlObj.search);
                    const category = params.get("type");
                    const id = params.get("id");
                    btnClick(index, category, id);
                  },
                  couponPrice: card.amount,
                  couponDesc: card.title,
                  couponImgLink: card.image
                }, index)), featuredCoupons.length > (loyalty_theme === "popup" ? 2 : 10) && o(k$1, {
                  children: [prevBtn && o("div", {
                    className: "scrollBtnPrev",
                    onClick: scrollLeft,
                    children: o("img", {
                      src: "https://media.farziengineer.co/farziwallet/arrow.png",
                      alt: ""
                    })
                  }), nextBtn && o("div", {
                    className: "scrollBtnNext",
                    onClick: scrollRight,
                    children: o("img", {
                      src: "https://media.farziengineer.co/farziwallet/arrow.png",
                      alt: ""
                    })
                  })]
                })]
              })]
            }), o("div", {
              className: "easyEarnMainContainer",
              children: [o("div", {
                class: "gamesArenaContainer",
                children: [o("div", {
                  className: "easyEarnTitleBox",
                  children: [o("h1", {
                    children: "Easy Earn"
                  }), o("a", {
                    onClick: () => handleScreenComponent("easy_earn", "Easy Earn"),
                    children: "View All"
                  })]
                }), o("p", {
                  children: "Earn Reward just by inputting your details"
                })]
              }), o("div", {
                class: "gamesHorizontalList",
                ref: easyEarnSliderRef,
                children: [easyEarnData.map((game, index) => o(EasyEarnCard, {
                  btnClick: () => isLoggedIn && changeOverlay("easy_earn"),
                  gameTitle: game.gameTitle,
                  gameDesc: game.gameDesc,
                  cardImage: game.cardImage,
                  gamePrice: game.gamePrice,
                  btnText: game.btnText,
                  isLoggedIn,
                  handleLogin
                }, index)), featuredCoupons.length > (loyalty_theme === "popup" ? 2 : 10) && o(k$1, {
                  children: [easyEarnPrevBtn && o("div", {
                    className: "scrollBtnPrev",
                    onClick: easyEarnScrollLeft,
                    children: o("img", {
                      src: "https://media.farziengineer.co/farziwallet/arrow.png",
                      alt: ""
                    })
                  }), easyEarnNextBtn && o("div", {
                    className: "scrollBtnNext",
                    onClick: easyEarnScrollRight,
                    children: o("img", {
                      src: "https://media.farziengineer.co/farziwallet/arrow.png",
                      alt: ""
                    })
                  })]
                })]
              })]
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
                children: [o(GamesCard, {
                  btnClick: () => isLoggedIn && handleScreenComponent("show_spin_wheel", "Wheel of Fortune"),
                  gameTitle: (singleSpinWheel == null ? void 0 : singleSpinWheel.title) || "Spin and Win",
                  gameDesc: (singleSpinWheel == null ? void 0 : singleSpinWheel.description) || "Spin and win coins",
                  cardImage: (singleSpinWheel == null ? void 0 : singleSpinWheel.image) || "https://media.farziengineer.co/farziwallet/spin-wheel.png",
                  gamePrice: (singleSpinWheel == null ? void 0 : singleSpinWheel.amount) || "10",
                  btnText: (singleSpinWheel == null ? void 0 : singleSpinWheel.btnText) || "Explore",
                  isLoggedIn,
                  handleLogin
                }), o(GamesCard, {
                  btnClick: () => isLoggedIn && handleScreenComponent("show_scratch_card", "Scratch Card"),
                  gameTitle: (singleScratchCard == null ? void 0 : singleScratchCard.title) || "Scratch and Win",
                  gameDesc: (singleScratchCard == null ? void 0 : singleScratchCard.description) || "Scratch and win coins",
                  cardImage: (singleScratchCard == null ? void 0 : singleScratchCard.image) || "https://media.farziengineer.co/farziwallet/scratch-card.png",
                  gamePrice: (singleScratchCard == null ? void 0 : singleScratchCard.amount) || "10",
                  btnText: (singleScratchCard == null ? void 0 : singleScratchCard.btnText) || "Explore",
                  isLoggedIn,
                  handleLogin
                })]
              }), o(InviteCard, {
                isLoggedIn,
                handleLogin,
                client_id,
                customer_id,
                onClick: () => changeOverlay("invite_and_earn")
              })]
            }), o("p", {
              id: "watermarkContainer",
              children: o("a", {
                href: "https://retainley.com/",
                target: "_blank",
                children: "Powered by Retainley"
              })
            })]
          }), o("div", {
            class: "overlay",
            children: (overlayVisible == null ? void 0 : overlayVisible.active) ? o(k$1, {
              children: o(Overlay, {
                content: handleOverlay(overlayVisible == null ? void 0 : overlayVisible.overlay)
              })
            }) : o(k$1, {})
          }), (error == null ? void 0 : error.error) && o(Alert$1, {
            message: error == null ? void 0 : error.msg
          })]
        })
      }), referralPopup && customer_id && o(ReferralPopup, {
        referedAmount,
        closeReferralPopup: handleCloseReferralPopup
      })]
    });
  }
  function App$1({
    themeDetailsData,
    shadowRoot,
    loyalty_theme
  }) {
    return o(k$1, {
      children: [o("div", {
        class: "widget-container",
        children: o(Main$1, {
          themeDetailsData,
          loyalty_theme,
          shadowRoot
        })
      }), o("div", {
        class: "widget-styles"
      }), o("div", {
        class: "widget-custom-styles"
      })]
    });
  }
  function AppCSS$1() {
    return o("style", {
      children: style
    });
  }
  function AppCustomCSS$1({
    customStyles
  }) {
    return o("style", {
      children: customStyles
    });
  }
  const WALLET_API_URI$1 = "https://fastloyaltyapi.farziengineer.co";
  async function renderLoyaltyPopup() {
    var _a, _b, _c;
    try {
      const mainScript = document.querySelector("#fc-loyalty-popup-script-19212");
      const loyalty_theme = mainScript == null ? void 0 : mainScript.getAttribute("data-loyalty-theme");
      let targetDiv;
      if (loyalty_theme === "page") {
        targetDiv = document.getElementById("fc-loyalty-page");
      } else {
        targetDiv = document.body;
      }
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
        const mainScript2 = document.querySelector("#fc-loyalty-popup-script-19212");
        const client_id = mainScript2 == null ? void 0 : mainScript2.getAttribute("data-client-id");
        if (client_id) {
          const themeDetailsRes = await fetch(`${WALLET_API_URI$1}/get-theme-details`, {
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
        }
      }
      const clientCustomStyleData = ((_c = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _c.custom_css) || "";
      B$2(o(App$1, {
        themeDetailsData,
        loyalty_theme,
        shadowRoot
      }), shadowRoot);
      B$2(o(AppCSS$1, {}), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-styles"));
      B$2(o(AppCustomCSS$1, {
        customStyles: clientCustomStyleData
      }), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-custom-styles"));
    } catch (err) {
      console.log("error", err);
    }
  }
  window.fc_loyalty_render_wallet_box = renderLoyaltyPopup;
  renderLoyaltyPopup();
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
  const CouponOverlay = ({
    couponData,
    onClick,
    customerDetails,
    updateWalletAmount,
    isLoggedIn,
    handleLogin,
    voucherDetails
  }) => {
    const [couponCode, setCouponCode] = h("");
    const [isCouponUnlocked, setIsCouponUnlocked] = h(false);
    const [showCopied, setShowCopied] = h(false);
    const [error, setError] = h({
      error: false,
      msg: ""
    });
    const [loading, setLoading] = h(false);
    const showError = (msg) => {
      setError({
        error: true,
        msg
      });
      setTimeout(() => {
        setError({
          error: false,
          msg: ""
        });
      }, 3e3);
    };
    const copyReferralLinkFunc = () => {
      setShowCopied(true);
      navigator.clipboard.writeText(couponCode);
      setTimeout(() => {
        setShowCopied(false);
      }, 1e3);
    };
    const fetchCouponCode = async () => {
      var _a;
      try {
        setLoading(true);
        const voucher_category = voucherDetails == null ? void 0 : voucherDetails.voucherCategory;
        const category_id = voucherDetails == null ? void 0 : voucherDetails.categoryId;
        const response = await fetchApi("/get-code", "post", {
          ...customerDetails,
          couponAmount: couponData == null ? void 0 : couponData.amount,
          voucher_category,
          category_id
        });
        if ((response == null ? void 0 : response.status) !== "success") {
          showError(response == null ? void 0 : response.error);
        } else {
          setCouponCode((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.coupon_code);
          setIsCouponUnlocked(true);
          updateWalletAmount();
        }
      } catch (error2) {
        console.log("error in coupon card overlay", error2);
      } finally {
        setLoading(false);
      }
    };
    return loading ? o("div", {
      className: "loader",
      children: o(Loading$1, {})
    }) : o(k$1, {
      children: [o("div", {
        class: "unlockCouponContainer slide-in-bottom",
        children: o("div", {
          class: "couponContainer",
          id: "couponOverlayId",
          children: [o("div", {
            class: "crossImg",
            children: o("img", {
              onClick: () => {
                setIsCouponUnlocked(false);
                onClick();
              },
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
              children: !isCouponUnlocked ? `Unlock for ${couponData == null ? void 0 : couponData.amount} ${window.fc_loyalty_vars.coin_name}` : "Use this code at checkout"
            })
          }), !isCouponUnlocked && o("div", {
            children: !loading && o("button", {
              onClick: isLoggedIn ? fetchCouponCode : handleLogin,
              class: "couponUnlockBtn",
              children: "Tap to Unlock"
            })
          }), isCouponUnlocked && o("div", {
            class: "couponCodeContainer",
            children: [o("p", {
              children: couponCode
            }), o("img", {
              onClick: copyReferralLinkFunc,
              src: "https://media.farziengineer.co/farziwallet/copy-icon.png",
              alt: ""
            })]
          })]
        })
      }), error.error && o(Alert$1, {
        message: error == null ? void 0 : error.msg
      }), showCopied && o("div", {
        class: "copied",
        children: "copied"
      })]
    });
  };
  const YourCoupons = ({
    customerDetails
  }) => {
    const [activeTab, setActiveTab] = h("");
    const [yourUnlockedCoupon, setYourUnlockedCoupon] = h([]);
    const [yourRedeemedCoupon, setYourRedeemedCoupon] = h([]);
    const [loading, setLoading] = h(false);
    if (activeTab === "") {
      setActiveTab("unlock");
    }
    p(() => {
      const fetchUnlockCoupon = async () => {
        var _a, _b;
        try {
          setLoading(true);
          const response = await fetchApi$1("/get-user-coupons", "post", customerDetails);
          setYourUnlockedCoupon((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.unlocked);
          setYourRedeemedCoupon((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.redeemed);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchUnlockCoupon();
    }, [customerDetails, activeTab]);
    const handleTab = (tab) => {
      setActiveTab(tab);
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
      children: o("div", {
        class: "yourCouponsCardMainContainer",
        children: [o("div", {
          class: "yourCouponsActiveTab",
          children: [o("div", {
            style: activeTab === "unlock" && couponCardTabStyles,
            onClick: () => handleTab("unlock"),
            class: "unlockedTab",
            children: "Unlocked"
          }), o("div", {
            style: activeTab === "redeem" && couponCardTabStyles,
            onClick: () => handleTab("redeem"),
            class: "redeemedTab",
            children: "Redeemed"
          })]
        }), activeTab === "unlock" && (yourUnlockedCoupon.length !== 0 ? yourUnlockedCoupon.map((ele, idx) => o("div", {
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
            children: [o("p", {
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
        })), activeTab === "redeem" && (yourRedeemedCoupon.length === 0 ? o("div", {
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
  const Main = ({
    shadowRoot,
    themeDetailsData
  }) => {
    const mainScript = document.querySelector("#fc-wallet-gifting-coupons-snippet-script-19212");
    const [availableTab, setAvailableTab] = h(true);
    const [yourCouponTab, setYourCouponTab] = h(false);
    const [login, setLogin] = h(false);
    const [couponCardResponse, setCouponCardResponse] = h([]);
    const [exploreCoupon, setExploreCoupon] = h([]);
    const [exploreCouponIdx, setExploreCouponIdx] = h(0);
    const [couponIdx, setCouponIdx] = h(0);
    const [loading, setLoading] = h(false);
    const [walletAmount, setWalletAmount] = h(0);
    const [voucherDetails, setVoucherDetails] = h({
      voucherCategory: "",
      categoryId: ""
    });
    const [customerDetails, setCustomerDetails] = h({
      client_id: "",
      customer_id: "",
      user_hash: ""
    });
    const fetchWalletAmount = async () => {
      var _a, _b;
      const walletAmountResponse = await fetchApi$1("/user-wallet-amount", "post", customerDetails);
      setWalletAmount((_b = (_a = walletAmountResponse == null ? void 0 : walletAmountResponse.data) == null ? void 0 : _a.userWallet) == null ? void 0 : _b.amount);
    };
    const [overlayVisible, setOverlayVisible] = h({
      overlay: "none",
      active: false
    });
    function setTheme({
      themeDetails
    }) {
      var _a, _b, _c, _d, _e, _f, _g;
      var cssVariablesScope = shadowRoot.querySelector(".widget-container");
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
    }
    p(() => {
      setTheme({
        themeDetails: themeDetailsData
      });
    }, [themeDetailsData]);
    p(() => {
      var _a;
      (function loadfont() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
        document.head.appendChild(link);
      })();
      const client_id = mainScript.getAttribute("data-client-id");
      const customer_id = mainScript.getAttribute("data-customer-id");
      const user_hash = (_a = mainScript.getAttribute("data-customer-tag")) == null ? void 0 : _a.trim();
      setCustomerDetails({
        client_id,
        customer_id,
        user_hash
      });
      if (customer_id) {
        setLogin(true);
      }
      const exploreCouponResp = async () => {
        var _a2;
        try {
          setLoading(true);
          const resp = await fetchApi$1("/get-coupons-to-explore", "post", {
            client_id,
            customer_id,
            user_hash
          });
          setExploreCoupon((_a2 = resp == null ? void 0 : resp.data) == null ? void 0 : _a2.data);
        } catch (error) {
          console.log("Error fetching coupons to explore:", error);
        } finally {
          setLoading(false);
        }
      };
      const fetchWallet = async () => {
        var _a2, _b, _c, _d, _e, _f;
        try {
          const walletLogResp = await fetchApi$1("/user-walletlogs", "post", {
            client_id,
            customer_id,
            user_hash
          });
          setWalletAmount((_d = (_c = (_b = (_a2 = walletLogResp == null ? void 0 : walletLogResp.data) == null ? void 0 : _a2.data) == null ? void 0 : _b.wallet) == null ? void 0 : _c.wallet) == null ? void 0 : _d.amount);
        } catch (error) {
          console.log("Error fetching wallet logs:", error);
          const checkUser = await fetchApi$1("/sync-external-user", "post", {
            client_id,
            customer_id
          });
          if (checkUser.status === "success") {
            const walletResponse = await fetchApi$1("/user-wallet-amount", "post", {
              client_id,
              customer_id,
              user_hash
            });
            setWalletAmount((_f = (_e = walletResponse == null ? void 0 : walletResponse.data) == null ? void 0 : _e.userWallet) == null ? void 0 : _f.amount);
          }
        }
      };
      fetchWallet();
      exploreCouponResp();
    }, []);
    p(() => {
      const client_id = mainScript.getAttribute("data-client-id");
      const getCoupon = async () => {
        if (localStorage.getItem(`fc-coupon-card-${client_id}`)) {
          setCouponCardResponse(JSON.parse(localStorage.getItem(`fc-coupon-card-${client_id}`)));
        } else {
          const couponResp = await fetchApi$1("/get-featured-coupons", "post", {
            client_id
          });
          setCouponCardResponse(couponResp == null ? void 0 : couponResp.data);
          localStorage.setItem(`fc-coupon-card-${client_id}`, JSON.stringify(couponResp == null ? void 0 : couponResp.data));
        }
      };
      getCoupon();
    }, []);
    const handleOverlay = (overlayname) => {
      if (overlayname === "coupon") {
        return o(CouponOverlay, {
          updateWalletAmount: fetchWalletAmount,
          customerDetails,
          couponData: couponCardResponse[couponIdx],
          onClick: closeOverlay,
          isLoggedIn: login,
          handleLogin: setLogin,
          voucherDetails
        });
      }
      if (overlayname === "explore") {
        return o(CouponOverlay, {
          updateWalletAmount: fetchWalletAmount,
          customerDetails,
          couponData: exploreCoupon[exploreCouponIdx],
          onClick: closeOverlay,
          isLoggedIn: login,
          handleLogin: setLogin,
          voucherDetails: {}
        });
      }
      if (overlayname === "redeem") {
        return o(RedeemCoin, {
          updateWalletAmount: fetchWalletAmount,
          customerDetails,
          closePopup: closeOverlay
        });
      }
    };
    const handleAndShowCouponOverlay = (idx, category, id) => {
      setVoucherDetails({
        voucherCategory: category,
        categoryId: id
      });
      changeOverlay("coupon");
      setCouponIdx(idx);
    };
    const changeOverlay = (overlayname) => {
      const overlay = shadowRoot.querySelector(".overlay");
      overlay.style.display = "flex";
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
    return login ? o(k$1, {
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
          class: "giftMainContainer",
          children: [o("div", {
            class: "viewAllFeaturedComponent",
            children: [o("h3", {
              children: "Featured Coupons"
            }), o("div", {
              class: "showAllCouponsList",
              children: couponCardResponse.map((card, index) => o(CouponCard$1, {
                onClick: () => {
                  const imgUrl = card.image;
                  const imgUrlObj = new URL(imgUrl);
                  const params = new URLSearchParams(imgUrlObj.search);
                  const category = params.get("type");
                  const id = params.get("id");
                  handleAndShowCouponOverlay(index, category, id);
                },
                couponPrice: card == null ? void 0 : card.amount,
                couponDesc: card == null ? void 0 : card.title,
                couponImgLink: card == null ? void 0 : card.image
              }, index))
            })]
          }), o("div", {
            className: "gift-container",
            children: [o("div", {
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
              }), exploreCoupon && exploreCoupon.map((card, idx) => o("div", {
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
          })]
        })), yourCouponTab && o(YourCoupons, {
          customerDetails
        }), o("div", {
          class: "overlay",
          children: (overlayVisible == null ? void 0 : overlayVisible.active) ? o(k$1, {
            children: o(Overlay, {
              content: handleOverlay(overlayVisible == null ? void 0 : overlayVisible.overlay)
            })
          }) : o(k$1, {})
        })]
      })
    }) : o("a", {
      class: "loginbtn",
      href: `/account/login`,
      children: "Login to Continue"
    });
  };
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
      children: style$1
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
  async function renderGiftCouponSnippet() {
    var _a, _b, _c;
    try {
      const targetDiv = document.getElementById("fc-wallet-gifting-coupons-snippet-19212");
      const ele = targetDiv.querySelector(".fc-scratch-card-snippet-19212-target");
      if (ele) {
        targetDiv.removeChild(ele);
      }
      let shadowTarget = document.createElement("div");
      shadowTarget.className = "fc-wallet-gifting-coupons-snippet-19212";
      shadowTarget.style.display = "block";
      targetDiv.appendChild(shadowTarget);
      let shadow = shadowTarget.attachShadow({
        mode: "open"
      });
      let shadowRoot = document.createElement("div");
      shadowRoot.className = "fc-wallet-gifting-coupons-snippet-19212-root";
      shadow.appendChild(shadowRoot);
      let themeDetailsData;
      if ((_a = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _a.theme_details) {
        themeDetailsData = (_b = window == null ? void 0 : window.fc_loyalty_vars) == null ? void 0 : _b.theme_details;
      } else {
        const mainScript = document.querySelector("#fc-wallet-gifting-coupons-snippet-script-19212");
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
        }
      }
      const clientCustomStyleData = ((_c = themeDetailsData == null ? void 0 : themeDetailsData.data) == null ? void 0 : _c.custom_css) || "";
      B$2(o(App, {
        themeDetailsData,
        shadowRoot
      }), shadowRoot);
      B$2(o(AppCSS, {}), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-styles"));
      B$2(o(AppCustomCSS, {
        customStyles: clientCustomStyleData
      }), shadowRoot == null ? void 0 : shadowRoot.querySelector(".widget-custom-styles"));
    } catch (err) {
      console.log("error", err);
    }
  }
  window.fc_loyalty_render_wallet_box = renderGiftCouponSnippet;
  renderGiftCouponSnippet();
})();
