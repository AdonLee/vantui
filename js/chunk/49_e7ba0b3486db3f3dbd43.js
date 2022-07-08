/*! For license information please see 49_e7ba0b3486db3f3dbd43.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    587: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Button
      })
      var o = t(116),
        c = t.n(o),
        r = t(55),
        a = t.n(r),
        i = t(24),
        l = t.n(i),
        s = t(571),
        u = t.n(s),
        d = t(32),
        f = t.n(d),
        b = t(570),
        j = t.n(b),
        p = t(27),
        y = t.n(p),
        m = t(173),
        v = t.n(m),
        x = t(572),
        O = t.n(x),
        h = t(573),
        g = t.n(h),
        S = t(90),
        _ = t(568),
        k = t(569),
        w = t(574),
        C = t(586),
        N = t(28),
        $ = t.n(N),
        T = t(583)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== $()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(T.a)([t])
        )
      }
      var I = t(115),
        B = [
          'type',
          'size',
          'block',
          'round',
          'plain',
          'square',
          'loading',
          'disabled',
          'hairline',
          'color',
          'loadingSize',
          'loadingType',
          'loadingText',
          'icon',
          'classPrefix',
          'onClick',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = l()(e)
        if (u.a) {
          var o = u()(e)
          n &&
            (o = f()(o).call(o, function (n) {
              return j()(e, n).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            o = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            y()((t = ownKeys(Object(o), !0))).call(t, function (n) {
              O()(e, n, o[n])
            })
          else if (v.a) c()(e, v()(o))
          else {
            var r
            y()((r = ownKeys(Object(o)))).call(r, function (n) {
              a()(e, n, j()(o, n))
            })
          }
        }
        return e
      }
      var K = !1,
        M = 10
      if (!K)
        var G = setInterval(function () {
          if (--M > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                o = t.innerHTML
              if (o && /^taro-button-core{/.test(o)) {
                t.remove(), (K = !0), G && clearInterval(G)
                break
              }
            }
          else G && clearInterval(G)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          o = void 0 === t ? 'default' : t,
          c = e.size,
          r = void 0 === c ? 'normal' : c,
          a = e.block,
          i = e.round,
          l = e.plain,
          s = e.square,
          u = e.loading,
          d = e.disabled,
          f = e.hairline,
          b = e.color,
          j = e.loadingSize,
          p = void 0 === j ? S.a.pxTransform(40) : j,
          y = e.loadingType,
          m = void 0 === y ? 'circular' : y,
          v = e.loadingText,
          x = e.icon,
          O = e.classPrefix,
          h = void 0 === O ? 'van-icon' : O,
          N = e.onClick,
          $ = e.children,
          T = e.style,
          K = e.className,
          M = g()(e, B)
        return Object(I.jsx)(
          _.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  k.b('button', [
                    o,
                    r,
                    {
                      block: a,
                      round: i,
                      plain: l,
                      square: s,
                      loading: u,
                      disabled: d,
                      hairline: f,
                      unclickable: d || u,
                    },
                  ]) +
                  ' ' +
                  (f ? 'van-hairline--surround' : '') +
                  ' '.concat(K || ''),
                hoverClass: 'van-button--active hover-class',
                style: k.c([rootStyle({ plain: l, color: b }), T]),
                onClick: d || u ? void 0 : N,
              },
              M,
            ),
            {},
            {
              children: u
                ? Object(I.jsxs)(_.n, {
                    style: 'display: flex',
                    children: [
                      Object(I.jsx)(C.a, {
                        className: 'loading-class',
                        size: p,
                        type: m,
                        color:
                          ((n = { type: o, color: b, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      v &&
                        Object(I.jsx)(_.n, {
                          className: 'van-button__loading-text',
                          children: v,
                        }),
                    ],
                  })
                : Object(I.jsxs)(I.Fragment, {
                    children: [
                      x &&
                        Object(I.jsx)(w.a, {
                          size: '1.2em',
                          name: x,
                          classPrefix: h,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(I.jsx)(_.n, {
                        className: 'van-button__text',
                        children: $,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      n.b = Button
    },
    597: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return jumpLink
      })
      var o = t(77)
      function jumpLink(e, n) {
        var t
        if (((n = null !== (t = n) && void 0 !== t ? t : 'navigateTo'), e))
          if ('navigateTo' === n && Object(o.b)().length > 9)
            Object(o.g)({ url: e })
          else
            switch (n) {
              case 'navigateTo':
                Object(o.e)({ url: e })
                break
              case 'reLaunch':
                Object(o.f)({ url: e })
                break
              case 'redirectTo':
                Object(o.g)({ url: e })
            }
      }
    },
    598: function (e, n, t) {},
    627: function (e, n, t) {
      'use strict'
      var o = t(628)
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function toArray(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = []
          return (
            c.default.Children.forEach(e, function (e) {
              ;(null != e || n.keepEmpty) &&
                (Array.isArray(e)
                  ? (t = t.concat(toArray(e)))
                  : (0, r.isFragment)(e) && e.props
                  ? (t = t.concat(toArray(e.props.children, n)))
                  : t.push(e))
            }),
            t
          )
        })
      var c = o(t(64)),
        r = t(629)
    },
    628: function (e, n) {
      ;(e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    629: function (e, n, t) {
      'use strict'
      e.exports = t(630)
    },
    630: function (e, n, t) {
      'use strict'
      var o = 'function' == typeof Symbol && Symbol.for,
        c = o ? Symbol.for('react.element') : 60103,
        r = o ? Symbol.for('react.portal') : 60106,
        a = o ? Symbol.for('react.fragment') : 60107,
        i = o ? Symbol.for('react.strict_mode') : 60108,
        l = o ? Symbol.for('react.profiler') : 60114,
        s = o ? Symbol.for('react.provider') : 60109,
        u = o ? Symbol.for('react.context') : 60110,
        d = o ? Symbol.for('react.async_mode') : 60111,
        f = o ? Symbol.for('react.concurrent_mode') : 60111,
        b = o ? Symbol.for('react.forward_ref') : 60112,
        j = o ? Symbol.for('react.suspense') : 60113,
        p = o ? Symbol.for('react.suspense_list') : 60120,
        y = o ? Symbol.for('react.memo') : 60115,
        m = o ? Symbol.for('react.lazy') : 60116,
        v = o ? Symbol.for('react.block') : 60121,
        x = o ? Symbol.for('react.fundamental') : 60117,
        O = o ? Symbol.for('react.responder') : 60118,
        h = o ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var n = e.$$typeof
          switch (n) {
            case c:
              switch ((e = e.type)) {
                case d:
                case f:
                case a:
                case l:
                case i:
                case j:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case b:
                    case m:
                    case y:
                    case s:
                      return e
                    default:
                      return n
                  }
              }
            case r:
              return n
          }
        }
      }
      function A(e) {
        return z(e) === f
      }
      ;(n.AsyncMode = d),
        (n.ConcurrentMode = f),
        (n.ContextConsumer = u),
        (n.ContextProvider = s),
        (n.Element = c),
        (n.ForwardRef = b),
        (n.Fragment = a),
        (n.Lazy = m),
        (n.Memo = y),
        (n.Portal = r),
        (n.Profiler = l),
        (n.StrictMode = i),
        (n.Suspense = j),
        (n.isAsyncMode = function (e) {
          return A(e) || z(e) === d
        }),
        (n.isConcurrentMode = A),
        (n.isContextConsumer = function (e) {
          return z(e) === u
        }),
        (n.isContextProvider = function (e) {
          return z(e) === s
        }),
        (n.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === c
        }),
        (n.isForwardRef = function (e) {
          return z(e) === b
        }),
        (n.isFragment = function (e) {
          return z(e) === a
        }),
        (n.isLazy = function (e) {
          return z(e) === m
        }),
        (n.isMemo = function (e) {
          return z(e) === y
        }),
        (n.isPortal = function (e) {
          return z(e) === r
        }),
        (n.isProfiler = function (e) {
          return z(e) === l
        }),
        (n.isStrictMode = function (e) {
          return z(e) === i
        }),
        (n.isSuspense = function (e) {
          return z(e) === j
        }),
        (n.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === a ||
            e === f ||
            e === l ||
            e === i ||
            e === j ||
            e === p ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === y ||
                e.$$typeof === s ||
                e.$$typeof === u ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === O ||
                e.$$typeof === h ||
                e.$$typeof === v))
          )
        }),
        (n.typeOf = z)
    },
    694: function (e, n, t) {
      'use strict'
      var o = t(116),
        c = t.n(o),
        r = t(55),
        a = t.n(r),
        i = t(24),
        l = t.n(i),
        s = t(571),
        u = t.n(s),
        d = t(32),
        f = t.n(d),
        b = t(570),
        j = t.n(b),
        p = t(27),
        y = t.n(p),
        m = t(173),
        v = t.n(m),
        x = t(572),
        O = t.n(x),
        h = t(573),
        g = t.n(h),
        S = t(64),
        _ = t(587),
        k = t(569),
        w = t(597),
        C = t(115),
        N = [
          'text',
          'url',
          'linkType',
          'plain',
          'type',
          'style',
          'isFirst',
          'isLast',
          'onClick',
          'children',
          'className',
        ]
      function ownKeys(e, n) {
        var t = l()(e)
        if (u.a) {
          var o = u()(e)
          n &&
            (o = f()(o).call(o, function (n) {
              return j()(e, n).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            o = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            y()((t = ownKeys(Object(o), !0))).call(t, function (n) {
              O()(e, n, o[n])
            })
          else if (v.a) c()(e, v()(o))
          else {
            var r
            y()((r = ownKeys(Object(o)))).call(r, function (n) {
              a()(e, n, j()(o, n))
            })
          }
        }
        return e
      }
      function GoodsActionButton(e) {
        var n = e.text,
          t = e.url,
          o = e.linkType,
          c = e.plain,
          r = e.type,
          a = void 0 === r ? 'danger' : r,
          i = e.style,
          l = e.isFirst,
          s = e.isLast,
          u = e.onClick,
          d = e.children,
          f = e.className,
          b = g()(e, N),
          j = Object(S.useCallback)(
            function (e) {
              null == u || u(e), t && Object(w.a)(t, o)
            },
            [o, u, t],
          )
        return Object(C.jsxs)(
          _.b,
          _objectSpread(
            _objectSpread(
              {
                type: a,
                plain: c,
                className:
                  k.b('goods-action-button', [
                    a,
                    { first: l, last: s, plain: c },
                  ]) + ' van-goods-action-button__inner '.concat(f || ''),
                style: i,
                onClick: j,
              },
              b,
            ),
            {},
            { children: [n, d] },
          ),
        )
      }
      ;(GoodsActionButton.displayName = 'GoodsActionButton'),
        (n.a = GoodsActionButton)
    },
    695: function (e, n, t) {
      'use strict'
      var o = t(116),
        c = t.n(o),
        r = t(55),
        a = t.n(r),
        i = t(573),
        l = t.n(i),
        s = t(572),
        u = t.n(s),
        d = t(32),
        f = t.n(d),
        b = t(10),
        j = t.n(b),
        p = t(24),
        y = t.n(p),
        m = t(571),
        v = t.n(m),
        x = t(570),
        O = t.n(x),
        h = t(27),
        g = t.n(h),
        S = t(173),
        _ = t.n(S),
        k = t(64),
        w = t(568),
        C = t(627),
        N = t.n(C),
        $ = t(569),
        T = t(115),
        I = ['safeAreaInsetBottom', 'style', 'children', 'className']
      function ownKeys(e, n) {
        var t = y()(e)
        if (v.a) {
          var o = v()(e)
          n &&
            (o = f()(o).call(o, function (n) {
              return O()(e, n).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            o = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            g()((t = ownKeys(Object(o), !0))).call(t, function (n) {
              u()(e, n, o[n])
            })
          else if (_.a) c()(e, _()(o))
          else {
            var r
            g()((r = ownKeys(Object(o)))).call(r, function (n) {
              a()(e, n, O()(o, n))
            })
          }
        }
        return e
      }
      n.a = function GoodsAction(e) {
        var n = e.safeAreaInsetBottom,
          t = void 0 === n || n,
          o = e.style,
          c = e.children,
          r = e.className,
          a = l()(e, I),
          i = (function parseTabList(e) {
            var n, t
            return f()(
              (n = j()((t = N()(e))).call(t, function (e) {
                return Object(k.isValidElement)(e)
                  ? _objectSpread(
                      _objectSpread(
                        { key: void 0 !== e.key ? String(e.key) : void 0 },
                        e.props,
                      ),
                      {},
                      { node: e },
                    )
                  : null
              })),
            ).call(n, function (e) {
              return e
            })
          })(c),
          s = j()(i).call(i, function (e, n) {
            var t,
              o,
              c,
              r,
              a,
              l,
              s,
              u,
              d =
                'GoodsActionButton' ===
                (null === (t = e.node) ||
                void 0 === t ||
                null === (o = t.type) ||
                void 0 === o
                  ? void 0
                  : o.displayName),
              f =
                'GoodsActionButton' ===
                (null === (c = i[n - 1]) ||
                void 0 === c ||
                null === (r = c.node) ||
                void 0 === r ||
                null === (a = r.type) ||
                void 0 === a
                  ? void 0
                  : a.displayName),
              b =
                'GoodsActionButton' ===
                (null === (l = i[n + 1]) ||
                void 0 === l ||
                null === (s = l.node) ||
                void 0 === s ||
                null === (u = s.type) ||
                void 0 === u
                  ? void 0
                  : u.displayName)
            return Object(k.cloneElement)(e.node, {
              key: n,
              index: n,
              isFirst: !f && d,
              isLast: !b && d,
            })
          })
        return Object(T.jsx)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' + $.b('goods-action', { safe: t }) + ' '.concat(r || ''),
                style: o,
              },
              a,
            ),
            {},
            { children: s },
          ),
        )
      }
    },
    731: function (e, n, t) {},
    732: function (e, n, t) {},
    849: function (e, n, t) {},
    890: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return R
        })
      var o = t(39),
        c = t(40),
        r = t(175),
        a = t(66),
        i = t(65),
        l = t(91),
        s = t(64),
        u = t(578),
        d = t(579),
        f = (t(576), t(732), t(695)),
        b = (t(588), t(584), t(585), t(598), t(731), t(694)),
        j = (t(849), t(116)),
        p = t.n(j),
        y = t(55),
        m = t.n(y),
        v = t(24),
        x = t.n(v),
        O = t(571),
        h = t.n(O),
        g = t(32),
        S = t.n(g),
        _ = t(570),
        k = t.n(_),
        w = t(27),
        C = t.n(w),
        N = t(173),
        $ = t.n(N),
        T = t(572),
        I = t.n(T),
        B = t(573),
        K = t.n(B),
        M = t(568),
        G = t(587),
        L = t(574),
        P = t(597),
        D = t(115),
        F = [
          'text',
          'url',
          'linkType',
          'dot',
          'info',
          'icon',
          'style',
          'onClick',
          'renderIcon',
          'className',
        ]
      function ownKeys(e, n) {
        var t = x()(e)
        if (h.a) {
          var o = h()(e)
          n &&
            (o = S()(o).call(o, function (n) {
              return k()(e, n).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            o = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            C()((t = ownKeys(Object(o), !0))).call(t, function (n) {
              I()(e, n, o[n])
            })
          else if ($.a) p()(e, $()(o))
          else {
            var c
            C()((c = ownKeys(Object(o)))).call(c, function (n) {
              m()(e, n, k()(o, n))
            })
          }
        }
        return e
      }
      var E = function GoodsActionIcon(e) {
          var n = e.text,
            t = e.url,
            o = e.linkType,
            c = e.dot,
            r = e.info,
            a = e.icon,
            i = e.style,
            l = e.onClick,
            u = e.renderIcon,
            d = e.className,
            f = K()(e, F),
            b = Object(s.useCallback)(
              function (e) {
                null == l || l(e), t && Object(P.a)(t, o)
              },
              [o, l, t],
            )
          return Object(D.jsxs)(
            G.b,
            _objectSpread(
              _objectSpread(
                {
                  square: !0,
                  size: 'large',
                  className: 'van-goods-action-icon '.concat(d),
                  style: i,
                  onClick: b,
                },
                f,
              ),
              {},
              {
                children: [
                  a
                    ? Object(D.jsx)(L.b, {
                        name: a,
                        dot: c,
                        info: r,
                        className: 'van-goods-action-icon__icon icon-class',
                      })
                    : u,
                  Object(D.jsx)(M.k, { className: 'text-class', children: n }),
                ],
              },
            ),
          )
        },
        q = (t(605), t(603))
      function Demo() {
        var e = function click() {
          q.a.show({ message: '点击demo1' })
        }
        return Object(D.jsxs)(f.a, {
          safeAreaInsetBottom: !1,
          children: [
            Object(D.jsx)(E, { icon: 'chat-o', text: '客服', onClick: e }),
            Object(D.jsx)(E, { icon: 'cart-o', text: '购物车', onClick: e }),
            Object(D.jsx)(b.a, {
              text: '加入购物车',
              type: 'warning',
              onClick: e,
            }),
            Object(D.jsx)(b.a, { text: '立即购买', onClick: e }),
            Object(D.jsx)(q.a, { id: 'GoodsAction-demo1' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(D.jsxs)(f.a, {
          children: [
            Object(D.jsx)(E, { icon: 'chat-o', text: '客服', dot: !0 }),
            Object(D.jsx)(E, { icon: 'cart-o', text: '购物车', info: '5' }),
            Object(D.jsx)(E, { icon: 'shop-o', text: '店铺' }),
            Object(D.jsx)(b.a, { text: '加入购物车', type: 'warning' }),
            Object(D.jsx)(b.a, { text: '立即购买' }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(D.jsxs)(f.a, {
          children: [
            Object(D.jsx)(E, { icon: 'chat-o', text: '客服' }),
            Object(D.jsx)(E, { icon: 'shop-o', text: '店铺' }),
            Object(D.jsx)(b.a, {
              color: '#be99ff',
              text: '加入购物车',
              type: 'warning',
            }),
            Object(D.jsx)(b.a, { color: '#7232dd', text: '立即购买' }),
          ],
        })
      }
      function demo4_Demo() {
        return Object(D.jsxs)(f.a, {
          children: [
            Object(D.jsx)(E, { icon: 'chat-o', text: '客服' }),
            Object(D.jsx)(E, { icon: 'cart-o', text: '购物车', info: '5' }),
            Object(D.jsx)(E, { icon: 'shop-o', text: '店铺' }),
            Object(D.jsx)(b.a, {
              color: '#7232dd',
              text: '加入购物',
              type: 'warning',
            }),
            Object(D.jsx)(b.a, {
              plain: !0,
              color: '#7232dd',
              text: '立即购买',
            }),
          ],
        })
      }
      var R = (function (e) {
        Object(a.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(o.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(r.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(D.jsxs)(u.a, {
                  title: 'GoodsAction 商品导航',
                  className: 'pages-goods-action-index',
                  children: [
                    Object(D.jsx)(d.a, {
                      title: '基础用法',
                      children: Object(D.jsx)(Demo, {}),
                    }),
                    Object(D.jsx)(d.a, {
                      title: '提示信息',
                      children: Object(D.jsx)(demo2_Demo, {}),
                    }),
                    Object(D.jsx)(d.a, {
                      title: '自定义按钮颜色',
                      children: Object(D.jsx)(demo3_Demo, {}),
                    }),
                    Object(D.jsx)(d.a, {
                      title: '朴素按钮',
                      children: Object(D.jsx)(demo4_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(s.Component)
    },
  },
])
