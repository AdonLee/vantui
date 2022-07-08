/*! For license information please see 37_e7ba0b3486db3f3dbd43.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    575: function (e, n, t) {
      'use strict'
      t.d(n, 'e', function () {
        return isPlainObject
      }),
        t.d(n, 'f', function () {
          return isPromise
        }),
        t.d(n, 'b', function () {
          return isDef
        }),
        t.d(n, 'd', function () {
          return isObj
        }),
        t.d(n, 'a', function () {
          return isBoolean
        }),
        t.d(n, 'c', function () {
          return isImageUrl
        }),
        t.d(n, 'g', function () {
          return isVideoUrl
        })
      var r = t(591),
        c = t.n(r)
      function isFunction(e) {
        return 'function' == typeof e
      }
      function isPlainObject(e) {
        return null !== e && 'object' === c()(e) && !Array.isArray(e)
      }
      function isPromise(e) {
        return isPlainObject(e) && isFunction(e.then) && isFunction(e.catch)
      }
      function isDef(e) {
        return null != e
      }
      function isObj(e) {
        var n = c()(e)
        return null !== e && ('object' === n || 'function' === n)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var o = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return o.test(e)
      }
      function isVideoUrl(e) {
        return i.test(e)
      }
    },
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(590)
        var r = t(574),
          c = t(568),
          o = t(90),
          i = t(736),
          a = t(77),
          l = t(64),
          u = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            s = n.className,
            f = void 0 === s ? '' : s,
            d = n.children,
            b = o.a.useRouter().path
          return (
            Object(l.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [b],
            ),
            o.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(u.jsxs)(c.n, {
              className: 'demo-page '.concat(f),
              children: [
                Object(u.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(u.jsx)(r.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(a.d)()
                      },
                    }),
                    Object(u.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                d,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return s
      })
      var r = t(39),
        c = t(40),
        o = t(66),
        i = t(65),
        a = t(568),
        l = t(64),
        u = (t(582), t(115)),
        s = (function (e) {
          Object(o.a)(Index, e)
          var n = Object(i.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), n.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    r = e.card
                  return Object(u.jsxs)(a.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(u.jsx)(a.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      r
                        ? Object(u.jsx)(a.n, {
                            className: 'demo-block__card',
                            children: this.props.children,
                          })
                        : this.props.children,
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(l.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    589: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Cell
      })
      var r = t(116),
        c = t.n(r),
        o = t(55),
        i = t.n(o),
        a = t(24),
        l = t.n(a),
        u = t(571),
        s = t.n(u),
        f = t(32),
        d = t.n(f),
        b = t(570),
        p = t.n(b),
        j = t(27),
        h = t.n(j),
        v = t(173),
        m = t.n(v),
        x = t(572),
        y = t.n(x),
        O = t(573),
        g = t.n(O),
        S = t(64),
        _ = t(568),
        k = t(569),
        C = t(597),
        w = t(574),
        I = t(583),
        N = t(580)
      var T = t(115),
        $ = [
          'url',
          'linkType',
          'size',
          'center',
          'required',
          'border',
          'isLink',
          'clickable',
          'icon',
          'titleWidth',
          'titleStyle',
          'title',
          'label',
          'value',
          'arrowDirection',
          'onClick',
          'renderIcon',
          'renderTitle',
          'renderLabel',
          'renderRightIcon',
          'renderExtra',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = l()(e)
        if (s.a) {
          var r = s()(e)
          n &&
            (r = d()(r).call(r, function (n) {
              return p()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            h()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              y()(e, n, r[n])
            })
          else if (m.a) c()(e, m()(r))
          else {
            var o
            h()((o = ownKeys(Object(r)))).call(o, function (n) {
              i()(e, n, p()(r, n))
            })
          }
        }
        return e
      }
      function Cell(e) {
        var n,
          t = e.url,
          r = e.linkType,
          c = e.size,
          o = e.center,
          i = e.required,
          a = e.border,
          l = void 0 === a || a,
          u = e.isLink,
          s = e.clickable,
          f = e.icon,
          d = e.titleWidth,
          b = e.titleStyle,
          p = e.title,
          j = e.label,
          h = e.value,
          v = e.arrowDirection,
          m = e.onClick,
          x = e.renderIcon,
          y = e.renderTitle,
          O = e.renderLabel,
          M = e.renderRightIcon,
          R = e.renderExtra,
          P = e.children,
          E = e.style,
          F = e.className,
          L = g()(e, $),
          K = Object(S.useCallback)(
            function (e) {
              null == m || m(e), t && Object(C.a)(t, r)
            },
            [r, m, t],
          )
        return Object(T.jsxs)(
          _.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  k.b('cell', [
                    c,
                    {
                      center: o,
                      required: i,
                      borderless: !l,
                      clickable: u || s,
                    },
                  ]) +
                  ' '.concat(F || ''),
                hoverClass: 'van-cell--hover hover-class',
                hoverStayTime: 70,
                style: k.c([E]),
                onClick: K,
              },
              L,
            ),
            {},
            {
              children: [
                f
                  ? Object(T.jsx)(w.a, {
                      name: f,
                      className: 'van-cell__left-icon-wrap van-cell__left-icon',
                    })
                  : x,
                Object(T.jsxs)(_.n, {
                  style:
                    ((n = { titleWidth: d, titleStyle: b }),
                    Object(I.a)([
                      {
                        'max-width': Object(N.a)(n.titleWidth),
                        'min-width': Object(N.a)(n.titleWidth),
                      },
                      n.titleStyle,
                    ])),
                  className: 'van-cell__title title-class',
                  children: [
                    p || 0 === p
                      ? Object(T.jsx)(T.Fragment, { children: p })
                      : y,
                    (j || O) &&
                      Object(T.jsx)(_.n, {
                        className: 'van-cell__label label-class',
                        children:
                          O ||
                          (j && Object(T.jsx)(T.Fragment, { children: j })),
                      }),
                  ],
                }),
                Object(T.jsx)(_.n, {
                  className: 'van-cell__value value-class',
                  children:
                    h || 0 === h
                      ? Object(T.jsx)(T.Fragment, { children: h })
                      : P,
                }),
                u
                  ? Object(T.jsx)(w.a, {
                      name: v ? 'arrow-' + v : 'arrow',
                      className:
                        'van-cell__right-icon-wrap right-icon-class van-cell__right-icon',
                    })
                  : M,
                R,
              ],
            },
          ),
        )
      }
      n.b = Cell
    },
    593: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(601)
    },
    594: function (e, n, t) {
      'use strict'
      t.d(n, 'g', function () {
        return range
      }),
        t.d(n, 'd', function () {
          return getSystemInfoSync
        }),
        t.d(n, 'a', function () {
          return addUnit
        }),
        t.d(n, 'h', function () {
          return requestAnimationFrame
        }),
        t.d(n, 'f', function () {
          return pickExclude
        }),
        t.d(n, 'c', function () {
          return getRect
        }),
        t.d(n, 'b', function () {
          return getAllRect
        }),
        t.d(n, 'i', function () {
          return toPromise
        })
      var r,
        c = t(148),
        o = t.n(c),
        i = t(24),
        a = t.n(i),
        l = t(21),
        u = t.n(l),
        s = t(5),
        f = t.n(s),
        d = (t(567), t(862)),
        b = (t(865), t(90)),
        p = t(789),
        j = (t(77), t(575))
      t(596)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
      }
      function addUnit(e) {
        if (Object(j.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? b.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(p.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, n) {
        var t
        return Object(j.e)(e)
          ? o()((t = a()(e))).call(
              t,
              function (t, r) {
                return u()(n).call(n, r) || (t[r] = e[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(e, n) {
        return new f.a(function (t) {
          var r = Object(p.a)()
          e && (r = r.in(e)),
            r
              .select(n)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(e[0])
              })
        })
      }
      function getAllRect(e, n) {
        return new f.a(function (t) {
          var r = Object(p.a)()
          e && (r = r.in(e)),
            r
              .selectAll(n)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(e[0])
              })
        })
      }
      function toPromise(e) {
        return Object(j.f)(e) ? e : f.a.resolve(e)
      }
      t.d(n, 'e', function () {
        return j.b
      })
    },
    596: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return canIUseModel
      }),
        t.d(n, 'b', function () {
          return canIUseNextTick
        })
      var r,
        c = t(117),
        o = t.n(c),
        i = t(862),
        a = t(863)
      t(864)
      function gte(e) {
        return (
          (function compareVersion(e, n) {
            ;(e = e.split('.')), (n = n.split('.'))
            for (var t = Math.max(e.length, n.length); e.length < t; )
              e.push('0')
            for (; n.length < t; ) n.push('0')
            for (var r = 0; r < t; r++) {
              var c = o()(e[r], 10),
                i = o()(n[r], 10)
              if (c > i) return 1
              if (c < i) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(i.a)()), r
            })().SDKVersion,
            e,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(a.a)('nextTick')
      }
    },
    597: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return jumpLink
      })
      var r = t(77)
      function jumpLink(e, n) {
        var t
        if (((n = null !== (t = n) && void 0 !== t ? t : 'navigateTo'), e))
          if ('navigateTo' === n && Object(r.b)().length > 9)
            Object(r.g)({ url: e })
          else
            switch (n) {
              case 'navigateTo':
                Object(r.e)({ url: e })
                break
              case 'reLaunch':
                Object(r.f)({ url: e })
                break
              case 'redirectTo':
                Object(r.g)({ url: e })
            }
      }
    },
    601: function (e, n, t) {},
    627: function (e, n, t) {
      'use strict'
      var r = t(628)
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
                  : (0, o.isFragment)(e) && e.props
                  ? (t = t.concat(toArray(e.props.children, n)))
                  : t.push(e))
            }),
            t
          )
        })
      var c = r(t(64)),
        o = t(629)
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
      var r = 'function' == typeof Symbol && Symbol.for,
        c = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        l = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        s = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        b = r ? Symbol.for('react.forward_ref') : 60112,
        p = r ? Symbol.for('react.suspense') : 60113,
        j = r ? Symbol.for('react.suspense_list') : 60120,
        h = r ? Symbol.for('react.memo') : 60115,
        v = r ? Symbol.for('react.lazy') : 60116,
        m = r ? Symbol.for('react.block') : 60121,
        x = r ? Symbol.for('react.fundamental') : 60117,
        y = r ? Symbol.for('react.responder') : 60118,
        O = r ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var n = e.$$typeof
          switch (n) {
            case c:
              switch ((e = e.type)) {
                case f:
                case d:
                case i:
                case l:
                case a:
                case p:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case b:
                    case v:
                    case h:
                    case u:
                      return e
                    default:
                      return n
                  }
              }
            case o:
              return n
          }
        }
      }
      function A(e) {
        return z(e) === d
      }
      ;(n.AsyncMode = f),
        (n.ConcurrentMode = d),
        (n.ContextConsumer = s),
        (n.ContextProvider = u),
        (n.Element = c),
        (n.ForwardRef = b),
        (n.Fragment = i),
        (n.Lazy = v),
        (n.Memo = h),
        (n.Portal = o),
        (n.Profiler = l),
        (n.StrictMode = a),
        (n.Suspense = p),
        (n.isAsyncMode = function (e) {
          return A(e) || z(e) === f
        }),
        (n.isConcurrentMode = A),
        (n.isContextConsumer = function (e) {
          return z(e) === s
        }),
        (n.isContextProvider = function (e) {
          return z(e) === u
        }),
        (n.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === c
        }),
        (n.isForwardRef = function (e) {
          return z(e) === b
        }),
        (n.isFragment = function (e) {
          return z(e) === i
        }),
        (n.isLazy = function (e) {
          return z(e) === v
        }),
        (n.isMemo = function (e) {
          return z(e) === h
        }),
        (n.isPortal = function (e) {
          return z(e) === o
        }),
        (n.isProfiler = function (e) {
          return z(e) === l
        }),
        (n.isStrictMode = function (e) {
          return z(e) === a
        }),
        (n.isSuspense = function (e) {
          return z(e) === p
        }),
        (n.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === i ||
            e === d ||
            e === l ||
            e === a ||
            e === p ||
            e === j ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === y ||
                e.$$typeof === O ||
                e.$$typeof === m))
          )
        }),
        (n.typeOf = z)
    },
    760: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return r
      }),
        t.d(n, 'c', function () {
          return c
        }),
        t.d(n, 'b', function () {
          return o
        })
      var r = '#1989fa',
        c = '#07c160',
        o = '#969799'
    },
    840: function (e, n, t) {},
    841: function (e, n, t) {},
    913: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return ie
        })
      var r = t(39),
        c = t(40),
        o = t(175),
        i = t(66),
        a = t(65),
        l = t(91),
        u = t(64),
        s = t(578),
        f = t(579),
        d = (t(576), t(840), t(116)),
        b = t.n(d),
        p = t(55),
        j = t.n(p),
        h = t(24),
        v = t.n(h),
        m = t(571),
        x = t.n(m),
        y = t(570),
        O = t.n(y),
        g = t(173),
        S = t.n(g),
        _ = t(572),
        k = t.n(_),
        C = t(577),
        w = t.n(C),
        I = t(10),
        N = t.n(I),
        T = t(5),
        $ = t.n(T),
        M = t(27),
        R = t.n(M),
        P = t(6),
        E = t.n(P),
        F = t(32),
        L = t.n(F),
        K = t(568),
        U = t(736),
        D = t(567),
        V = t(90),
        q = t(627),
        B = t.n(q),
        W = t(569),
        J = t(594),
        Y = t(760),
        G = t(115)
      function ownKeys(e, n) {
        var t = v()(e)
        if (x.a) {
          var r = x()(e)
          n &&
            (r = L()(r).call(r, function (n) {
              return O()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            R()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              k()(e, n, r[n])
            })
          else if (S.a) b()(e, S()(r))
          else {
            var c
            R()((c = ownKeys(Object(r)))).call(c, function (n) {
              j()(e, n, O()(r, n))
            })
          }
        }
        return e
      }
      var H = function IndexBar(e) {
          var n = e.sticky,
            t = void 0 === n || n,
            r = e.zIndex,
            c = void 0 === r ? 1 : r,
            o = e.highlightColor,
            i = void 0 === o ? Y.c : o,
            a = e.stickyOffsetTop,
            l = void 0 === a ? 0 : a,
            s = e.indexList,
            f = void 0 === s ? Q() : s,
            d = e.onSelect,
            b = e.children,
            p = e.className,
            j = e.style,
            h = Object(u.useState)(null),
            v = w()(h, 2),
            m = v[0],
            x = v[1],
            y = Object(u.useState)([]),
            O = w()(y, 2),
            g = O[0],
            S = O[1],
            _ = Object(u.useRef)(null),
            k = Object(u.useRef)(0),
            C = Object(u.useRef)(null),
            I = Object(u.useRef)(null),
            T = Object(u.useRef)({}),
            M = Object(u.useRef)([]),
            P = Object(u.useMemo)(
              function () {
                var e,
                  n = 0
                return N()(
                  (e = (function parseIndexAnchor(e) {
                    var n, t
                    return L()(
                      (n = N()((t = B()(e))).call(t, function (e, n) {
                        return Object(u.isValidElement)(e)
                          ? _objectSpread(
                              _objectSpread(
                                { key: void 0 !== e.key ? String(e.key) : n },
                                e.props,
                              ),
                              {},
                              { node: e },
                            )
                          : null
                      })),
                    ).call(n, function (e) {
                      return !!e
                    })
                  })(b)),
                ).call(e, function (e, t) {
                  var r, c, o, i, a
                  'IndexAnchor' ===
                    (null === (r = e.node) ||
                    void 0 === r ||
                    null === (c = r.type) ||
                    void 0 === c
                      ? void 0
                      : c.displayName) &&
                    ((M.current[n] = _objectSpread(
                      _objectSpread(
                        {},
                        null !== (o = M.current[n]) && void 0 !== o
                          ? o
                          : { top: 0, height: 0 },
                      ),
                      {},
                      {
                        childIndex: t,
                        index:
                          null === (i = e.node) ||
                          void 0 === i ||
                          null === (a = i.props) ||
                          void 0 === a
                            ? void 0
                            : a.index,
                      },
                    )),
                    (n += 1))
                  var l = g[t],
                    s = { key: t, id: 'index-bar-item_'.concat(n - 1) },
                    f = l ? _objectSpread(_objectSpread({}, s), l) : s
                  return Object(u.cloneElement)(e.node, f)
                })
              },
              [g, b],
            ),
            F = Object(u.useCallback)(function () {
              return Object(J.b)(null, '.van-index-anchor-wrapper').then(
                function (e) {
                  M.current = N()(e).call(e, function (e, n) {
                    var t
                    return _objectSpread(
                      _objectSpread(
                        {},
                        null !== (t = M.current[n]) && void 0 !== t ? t : {},
                      ),
                      {},
                      { top: e.top, height: e.height },
                    )
                  })
                },
              )
            }, []),
            q = Object(u.useCallback)(
              function (e) {
                Object(U.a)({ duration: 0, scrollTop: e + l })
              },
              [l],
            ),
            H = Object(u.useCallback)(function () {
              return Object(J.c)(null, '.van-index-bar').then(function (e) {
                Object(J.e)(e) &&
                  (T.current = { height: e.height, top: e.top + k.current })
              })
            }, []),
            X = Object(u.useCallback)(function () {
              return Object(J.c)(null, '.van-index-bar__sidebar').then(
                function (e) {
                  Object(J.e)(e) &&
                    (C.current = { height: e.height, top: e.top })
                },
              )
            }, []),
            Z = Object(u.useCallback)(
              function () {
                for (var e = M.current, n = e.length - 1; n >= 0; n--) {
                  var r,
                    c = e[n]
                  if (c) {
                    var o =
                      n > 0
                        ? null === (r = e[n - 1]) || void 0 === r
                          ? void 0
                          : r.height
                        : 0
                    if ((t ? o + l : 0) + k.current >= c.top) return n
                  }
                }
                return -1
              },
              [t, l],
            ),
            ee = Object(u.useCallback)(
              function () {
                return $.a.all([F(), H(), X()])
              },
              [F, H, X],
            ),
            ne = Object(u.useCallback)(
              function () {
                if (null != P && P.length) {
                  var e = M.current,
                    n = Z()
                  x(n)
                  var r = []
                  if (t) {
                    var o,
                      a,
                      u = !1
                    if (-1 !== n)
                      u =
                        ((null === (a = e[n]) || void 0 === a
                          ? void 0
                          : a.top) || 0) <=
                        l + k.current
                    R()((o = M.current)).call(o, function (e, t) {
                      if (t === n) {
                        var o,
                          a,
                          s = '',
                          f = '\n          color: '.concat(i, ';\n        ')
                        if (u)
                          (s = '\n            height: '.concat(
                            e.height,
                            'px;\n          ',
                          )),
                            (f = E()(
                              (o = E()(
                                (a =
                                  '\n            position: fixed;\n            top: '.concat(
                                    l,
                                    'px;\n            z-index: ',
                                  )),
                              ).call(a, c, ';\n            color: ')),
                            ).call(o, i, ';\n          '))
                        r[e.childIndex] = {
                          active: !0,
                          anchorStyle: f,
                          wrapperStyle: s,
                        }
                      } else if (t === n - 1) {
                        var d,
                          b,
                          p,
                          j = e,
                          h = (null == j ? void 0 : j.top) || 0,
                          v =
                            (t === P.length - 1
                              ? T.current.top
                              : null === (d = M.current[t + 1]) || void 0 === d
                              ? void 0
                              : d.top) -
                            h -
                            ((null == j ? void 0 : j.height) || 0),
                          m = E()(
                            (b = E()(
                              (p =
                                '\n          position: relative;\n          transform: translate3d(0, '.concat(
                                  v,
                                  'px, 0);\n          z-index: ',
                                )),
                            ).call(p, c, ';\n          color: ')),
                          ).call(b, i, ';\n        ')
                        r[e.childIndex] = { active: !0, anchorStyle: m }
                      } else
                        r[e.childIndex] = {
                          active: !1,
                          anchorStyle: '',
                          wrapperStyle: '',
                        }
                    }),
                      S(r)
                  }
                }
              },
              [P.length, Z, i, t, l, c],
            ),
            te = Object(u.useCallback)(
              function (e) {
                if ('number' == typeof e && I.current !== e) {
                  I.current = e
                  var n = M.current[e]
                  n && (q(n.top), null == d || d({ detail: n.index }))
                }
              },
              [q, d],
            ),
            re = Object(u.useCallback)(
              function (e) {
                e.stopPropagation(), e.preventDefault()
                var n = M.current.length || 0,
                  t = e.touches[0],
                  r = C.current.height / n,
                  c = Math.floor((t.clientY - C.current.top) / r)
                c < 0 ? (c = 0) : c > n - 1 && (c = n - 1), te(c)
              },
              [te],
            ),
            ce = Object(u.useCallback)(function () {
              I.current = null
            }, []),
            oe = Object(u.useCallback)(
              function () {
                Object(D.a)(function () {
                  null !== _.current && clearTimeout(_.current),
                    (_.current = setTimeout(function () {
                      ee().then(function () {
                        ne()
                      })
                    }, 100))
                })
              },
              [ne, ee],
            ),
            ie = Object(u.useCallback)(
              function (e) {
                var n = Number(e.target.dataset.index)
                te(n)
              },
              [te],
            ),
            ae = Object(u.useCallback)(
              function (e) {
                ;(k.current = (null == e ? void 0 : e.scrollTop) || 0),
                  Object(D.a)(function () {
                    ne()
                  })
              },
              [ne],
            )
          return (
            V.a.usePageScroll(ae),
            Object(u.useEffect)(
              function () {
                oe()
              },
              [oe],
            ),
            Object(G.jsx)(K.n, {
              className: 'van-index-bar-wrapper',
              children: Object(G.jsxs)(K.n, {
                className: 'van-index-bar '.concat(p || ''),
                style: W.c([j]),
                children: [
                  P,
                  Object(G.jsx)(K.n, {
                    className: 'van-index-bar__sidebar',
                    onClick: ie,
                    onTouchMove: re,
                    onTouchEnd: ce,
                    onTouchCancel: ce,
                    children: N()(f).call(f, function (e, n) {
                      return Object(G.jsx)(
                        K.n,
                        {
                          className: 'van-index-bar__index',
                          style:
                            'z-index: ' +
                            (c + 1) +
                            '; color: ' +
                            (m === n ? i : ''),
                          'data-index': n,
                          children: e,
                        },
                        n,
                      )
                    }),
                  }),
                ],
              }),
            })
          )
        },
        Q = function genIndexList() {
          for (var e = [], n = 'A'.charCodeAt(0), t = 0; t < 26; t++)
            e.push(String.fromCharCode(n + t))
          return e
        }
      t(593)
      var X = t(589),
        Z = (t(841), t(573)),
        ee = t.n(Z),
        ne = [
          'wrapperStyle',
          'active',
          'anchorStyle',
          'index',
          'children',
          'style',
          'className',
        ]
      function index_anchor_ownKeys(e, n) {
        var t = v()(e)
        if (x.a) {
          var r = x()(e)
          n &&
            (r = L()(r).call(r, function (n) {
              return O()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function index_anchor_objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            R()((t = index_anchor_ownKeys(Object(r), !0))).call(
              t,
              function (n) {
                k()(e, n, r[n])
              },
            )
          else if (S.a) b()(e, S()(r))
          else {
            var c
            R()((c = index_anchor_ownKeys(Object(r)))).call(c, function (n) {
              j()(e, n, O()(r, n))
            })
          }
        }
        return e
      }
      function IndexAnchor(e) {
        var n = e.wrapperStyle,
          t = e.active,
          r = e.anchorStyle,
          c = e.index,
          o = e.children,
          i = e.style,
          a = e.className,
          l = ee()(e, ne)
        return Object(G.jsx)(
          K.n,
          index_anchor_objectSpread(
            index_anchor_objectSpread(
              {
                className: 'van-index-anchor-wrapper '.concat(a || ''),
                style: W.c([n, i]),
              },
              l,
            ),
            {},
            {
              children: Object(G.jsx)(K.n, {
                className:
                  'van-index-anchor ' +
                  (t ? 'van-index-anchor--active van-hairline--bottom' : ''),
                style: r,
                children: o
                  ? Object(G.jsx)(G.Fragment, { children: o })
                  : Object(G.jsx)(G.Fragment, {
                      children: Object(G.jsx)(K.k, { children: c }),
                    }),
              }),
            },
          ),
        )
      }
      IndexAnchor.displayName = 'IndexAnchor'
      for (
        var te = IndexAnchor, re = [], ce = 'A'.charCodeAt(0), oe = 0;
        oe < 26;
        oe++
      )
        re.push(String.fromCharCode(ce + oe))
      function Demo() {
        return Object(G.jsx)(H, {
          children: N()(re).call(re, function (e) {
            return Object(G.jsxs)(
              K.a,
              {
                children: [
                  Object(G.jsx)(te, { index: e }),
                  Object(G.jsx)(X.b, { title: '文本' }),
                  Object(G.jsx)(X.b, { title: '文本' }),
                  Object(G.jsx)(X.b, { title: '文本' }),
                ],
              },
              e.item,
            )
          }),
        })
      }
      var ie = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(a.a)(Index)
        function Index() {
          var e
          return (
            Object(r.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(o.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(G.jsx)(s.a, {
                  title: 'IndexBar 索引栏',
                  className: 'pages-index-bar-index',
                  children: Object(G.jsx)(f.a, {
                    title: '基础用法',
                    padding: !0,
                    children: Object(G.jsx)(Demo, {}),
                  }),
                })
              },
            },
          ]),
          Index
        )
      })(u.Component)
    },
  },
])
