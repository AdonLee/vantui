;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
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
      var c = t(591),
        r = t.n(c)
      function isFunction(e) {
        return 'function' == typeof e
      }
      function isPlainObject(e) {
        return null !== e && 'object' === r()(e) && !Array.isArray(e)
      }
      function isPromise(e) {
        return isPlainObject(e) && isFunction(e.then) && isFunction(e.catch)
      }
      function isDef(e) {
        return null != e
      }
      function isObj(e) {
        var n = r()(e)
        return null !== e && ('object' === n || 'function' === n)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var a = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return a.test(e)
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
        var c = t(574),
          r = t(568),
          a = t(90),
          i = t(736),
          o = t(77),
          l = t(64),
          u = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            s = n.className,
            d = void 0 === s ? '' : s,
            f = n.children,
            b = a.a.useRouter().path
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
            a.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(u.jsxs)(r.n, {
              className: 'demo-page '.concat(d),
              children: [
                Object(u.jsxs)(r.n, {
                  className: 'demo-nav',
                  children: [
                    Object(u.jsx)(c.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(o.d)()
                      },
                    }),
                    Object(u.jsxs)(r.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                f,
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
      var c = t(39),
        r = t(40),
        a = t(66),
        i = t(65),
        o = t(568),
        l = t(64),
        u = (t(582), t(115)),
        s = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(i.a)(Index)
          function Index() {
            return Object(c.a)(this, Index), n.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    c = e.card
                  return Object(u.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(u.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
                        ? Object(u.jsx)(o.n, {
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
    586: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var c = t(116),
        r = t.n(c),
        a = t(55),
        i = t.n(a),
        o = t(572),
        l = t.n(o),
        u = t(577),
        s = t.n(u),
        d = t(573),
        f = t.n(d),
        b = t(595),
        j = t.n(b),
        v = t(10),
        h = t.n(v),
        p = t(24),
        O = t.n(p),
        m = t(571),
        x = t.n(m),
        g = t(32),
        y = t.n(g),
        _ = t(570),
        k = t.n(_),
        S = t(27),
        C = t.n(S),
        N = t(173),
        w = t.n(N),
        I = t(568),
        z = t(64),
        V = t(569),
        P = t(580)
      function textStyle(e) {
        return Object(V.c)({ 'font-size': Object(P.a)(e.textSize) })
      }
      var E = t(115),
        T = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(e, n) {
        var t = O()(e)
        if (x.a) {
          var c = x()(e)
          n &&
            (c = y()(c).call(c, function (n) {
              return k()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            C()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              l()(e, n, c[n])
            })
          else if (w.a) r()(e, w()(c))
          else {
            var a
            C()((a = ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, k()(c, n))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          c = e.type,
          r = void 0 === c ? 'circular' : c,
          a = e.color,
          i = e.size,
          o = e.textSize,
          l = e.className,
          u = e.children,
          d = e.style,
          b = f()(e, T),
          v = Object(z.useState)(j()({ length: 12 })),
          p = s()(v, 1)[0]
        return Object(E.jsxs)(
          I.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + V.b('loading', { vertical: t }) + ' ' + l,
                style: V.c([d]),
              },
              b,
            ),
            {},
            {
              children: [
                Object(E.jsx)(I.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + r,
                  style:
                    ((n = { color: a, size: i }),
                    Object(V.c)({
                      color: n.color,
                      width: Object(P.a)(n.size),
                      height: Object(P.a)(n.size),
                    })),
                  children:
                    'spinner' === r &&
                    Object(E.jsx)(E.Fragment, {
                      children: h()(p).call(p, function (e, n) {
                        return Object(E.jsx)(
                          I.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(E.jsx)(I.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: o }),
                  children: u,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    587: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Button
      })
      var c = t(116),
        r = t.n(c),
        a = t(55),
        i = t.n(a),
        o = t(24),
        l = t.n(o),
        u = t(571),
        s = t.n(u),
        d = t(32),
        f = t.n(d),
        b = t(570),
        j = t.n(b),
        v = t(27),
        h = t.n(v),
        p = t(173),
        O = t.n(p),
        m = t(572),
        x = t.n(m),
        g = t(573),
        y = t.n(g),
        _ = t(90),
        k = t(568),
        S = t(569),
        C = t(574),
        N = t(586),
        w = t(28),
        I = t.n(w),
        z = t(583)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== I()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(z.a)([t])
        )
      }
      var V = t(115),
        P = [
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
        if (s.a) {
          var c = s()(e)
          n &&
            (c = f()(c).call(c, function (n) {
              return j()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            h()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              x()(e, n, c[n])
            })
          else if (O.a) r()(e, O()(c))
          else {
            var a
            h()((a = ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, j()(c, n))
            })
          }
        }
        return e
      }
      var E = !1,
        T = 10
      if (!E)
        var L = setInterval(function () {
          if (--T > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                c = t.innerHTML
              if (c && /^taro-button-core{/.test(c)) {
                t.remove(), (E = !0), L && clearInterval(L)
                break
              }
            }
          else L && clearInterval(L)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          c = void 0 === t ? 'default' : t,
          r = e.size,
          a = void 0 === r ? 'normal' : r,
          i = e.block,
          o = e.round,
          l = e.plain,
          u = e.square,
          s = e.loading,
          d = e.disabled,
          f = e.hairline,
          b = e.color,
          j = e.loadingSize,
          v = void 0 === j ? _.a.pxTransform(40) : j,
          h = e.loadingType,
          p = void 0 === h ? 'circular' : h,
          O = e.loadingText,
          m = e.icon,
          x = e.classPrefix,
          g = void 0 === x ? 'van-icon' : x,
          w = e.onClick,
          I = e.children,
          z = e.style,
          E = e.className,
          T = y()(e, P)
        return Object(V.jsx)(
          k.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  S.b('button', [
                    c,
                    a,
                    {
                      block: i,
                      round: o,
                      plain: l,
                      square: u,
                      loading: s,
                      disabled: d,
                      hairline: f,
                      unclickable: d || s,
                    },
                  ]) +
                  ' ' +
                  (f ? 'van-hairline--surround' : '') +
                  ' '.concat(E || ''),
                hoverClass: 'van-button--active hover-class',
                style: S.c([rootStyle({ plain: l, color: b }), z]),
                onClick: d || s ? void 0 : w,
              },
              T,
            ),
            {},
            {
              children: s
                ? Object(V.jsxs)(k.n, {
                    style: 'display: flex',
                    children: [
                      Object(V.jsx)(N.a, {
                        className: 'loading-class',
                        size: v,
                        type: p,
                        color:
                          ((n = { type: c, color: b, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      O &&
                        Object(V.jsx)(k.n, {
                          className: 'van-button__loading-text',
                          children: O,
                        }),
                    ],
                  })
                : Object(V.jsxs)(V.Fragment, {
                    children: [
                      m &&
                        Object(V.jsx)(C.a, {
                          size: '1.2em',
                          name: m,
                          classPrefix: g,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(V.jsx)(k.n, {
                        className: 'van-button__text',
                        children: I,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      n.b = Button
    },
    588: function (e, n, t) {},
    592: function (e, n, t) {
      'use strict'
      t(576), t(588), t(584), t(585), t(598)
    },
    598: function (e, n, t) {},
    780: function (e, n, t) {
      'use strict'
      ;(function (e) {
        var c = t(116),
          r = t.n(c),
          a = t(55),
          i = t.n(a),
          o = t(571),
          l = t.n(o),
          u = t(32),
          s = t.n(u),
          d = t(570),
          f = t.n(d),
          b = t(27),
          j = t.n(b),
          v = t(173),
          h = t.n(v),
          p = t(572),
          O = t.n(p),
          m = t(573),
          x = t.n(m),
          g = t(577),
          y = t.n(g),
          _ = t(761),
          k = t.n(_),
          S = t(5),
          C = t.n(S),
          N = t(10),
          w = t.n(N),
          I = t(38),
          z = t.n(I),
          V = t(24),
          P = t.n(V),
          E = t(181),
          T = t.n(E),
          L = t(869),
          M = t(64),
          B = t(568),
          K = t(4),
          R = t(575),
          D = t(115),
          A = [
            'text',
            'lineCap',
            'value',
            'speed',
            'size',
            'fill',
            'layerColor',
            'color',
            'type',
            'strokeWidth',
            'clockwise',
            'style',
            'className',
            'children',
          ]
        function ownKeys(e, n) {
          var t = P()(e)
          if (l.a) {
            var c = l()(e)
            n &&
              (c = s()(c).call(c, function (n) {
                return f()(e, n).enumerable
              })),
              t.push.apply(t, c)
          }
          return t
        }
        function _objectSpread(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t,
              c = null != arguments[n] ? arguments[n] : {}
            if (n % 2)
              j()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                O()(e, n, c[n])
              })
            else if (h.a) r()(e, h()(c))
            else {
              var a
              j()((a = ownKeys(Object(c)))).call(a, function (n) {
                i()(e, n, f()(c, n))
              })
            }
          }
          return e
        }
        var F = 2 * Math.PI,
          q = -Math.PI / 2,
          U = 0
        n.a = function Circle(n) {
          var t = Object(M.useState)({ ready: !1, hoverColor: '', unitag: '' }),
            c = y()(t, 2),
            r = c[0],
            a = c[1],
            i = Object(M.useRef)({
              inited: !1,
              currentValue: void 0,
              interval: void 0,
            }),
            o = n.text,
            l = n.lineCap,
            u = void 0 === l ? 'round' : l,
            s = n.value,
            d = void 0 === s ? 0 : s,
            f = n.speed,
            b = void 0 === f ? 50 : f,
            j = n.size,
            v = void 0 === j ? 100 : j,
            h = k()(n),
            p = n.layerColor,
            O = void 0 === p ? '#ffffff' : p,
            m = n.color,
            g = void 0 === m ? '#1989fa' : m,
            _ = (n.type, n.strokeWidth),
            S = void 0 === _ ? 4 : _,
            N = n.clockwise,
            I = void 0 === N || N,
            V = n.style,
            E = n.className,
            W = n.children,
            Y = x()(n, A)
          Object(M.useEffect)(function () {
            a(function (e) {
              return _objectSpread(
                _objectSpread({}, e),
                {},
                { unitag: 'van-circle_uni_'.concat(U++) },
              )
            })
          }, []),
            Object(M.useEffect)(function () {
              a(function (e) {
                return _objectSpread(_objectSpread({}, e), {}, { ready: !0 })
              })
            }, []),
            Object(M.useEffect)(function () {
              'react' === e.env.LIBRARY_ENV &&
                setTimeout(function () {
                  a(function (e) {
                    return _objectSpread(
                      _objectSpread({}, e),
                      {},
                      { ready: !0 },
                    )
                  })
                }, 100)
            }, [])
          var H = Object(M.useCallback)(
              function () {
                'react' === e.env.LIBRARY_ENV &&
                  (K.a.page = { path: 'page-'.concat(r.unitag) })
                var n = null
                try {
                  n = Object(L.a)(r.unitag)
                } catch (e) {}
                return C.a.resolve(n)
              },
              [r.unitag],
            ),
            J = Object(M.useCallback)(
              function (e, n, t, c, r) {
                var a = v / 2,
                  i = a - S / 2
                e.setStrokeStyle(n),
                  e.setLineWidth(S),
                  e.setLineCap(u),
                  e.beginPath(),
                  e.arc(a, a, i, t, c, !I),
                  e.stroke(),
                  r && (e.setFillStyle(r), k()(e).call(e))
              },
              [I, u, v, S],
            ),
            G = Object(M.useCallback)(
              function (e) {
                J(e, O, 0, F, h)
              },
              [h, O, J],
            ),
            Q = Object(M.useCallback)(
              function (e, n) {
                var t = F * (n / 100),
                  c = I ? q + t : 3 * Math.PI - (q + t)
                J(e, r.hoverColor, q, c)
              },
              [I, J, r.hoverColor],
            ),
            X = Object(M.useCallback)(
              function (e) {
                H()
                  .then(function (n) {
                    if (n) {
                      n.clearRect(0, 0, v, v), G(n)
                      var t = (function format(e) {
                        return Math.min(Math.max(e, 0), 100)
                      })(e)
                      0 !== t && Q(n, t), n.draw().catch(function () {})
                    }
                  })
                  .catch(function () {})
              },
              [H, Q, G, v],
            ),
            Z = function clearMockInterval() {
              i.current.interval &&
                (clearTimeout(i.current.interval), (i.current.interval = null))
            },
            $ = Object(M.useCallback)(
              function () {
                if (b <= 0 || b > 1e3) X(d)
                else {
                  Z(), (i.current.currentValue = i.current.currentValue || 0)
                  !(function run() {
                    i.current.interval = setTimeout(function () {
                      i.current.currentValue !== d
                        ? (Math.abs(i.current.currentValue - d) < 1
                            ? (i.current.currentValue = d)
                            : i.current.currentValue < d
                            ? (i.current.currentValue += 1)
                            : (i.current.currentValue -= 1),
                          X(i.current.currentValue),
                          run())
                        : Z()
                    }, 1e3 / b)
                  })()
                }
              },
              [X, b, d],
            )
          return (
            Object(M.useEffect)(
              function () {
                r.ready && $()
              },
              [$, r.ready, d],
            ),
            Object(M.useEffect)(
              function () {
                r.ready && r.unitag && X(i.current.currentValue)
              },
              [r.ready, v, r.unitag],
            ),
            Object(M.useEffect)(
              function () {
                r.ready &&
                  r.unitag &&
                  (function setHoverColor() {
                    if (Object(R.d)(g)) {
                      var e = g
                      return H()
                        .then(function (n) {
                          if (n) {
                            var t,
                              c,
                              r = n.createLinearGradient(v, 0, 0, 0)
                            w()(
                              (t = z()((c = P()(g))).call(c, function (e, n) {
                                return T()(e) - T()(n)
                              })),
                            ).call(t, function (n) {
                              return r.addColorStop(T()(n) / 100, e[n])
                            }),
                              a(function (e) {
                                return _objectSpread(
                                  _objectSpread({}, e),
                                  {},
                                  { hoverColor: r },
                                )
                              })
                          }
                        })
                        .catch(function () {})
                    }
                    return (
                      a(function (e) {
                        return _objectSpread(
                          _objectSpread({}, e),
                          {},
                          { hoverColor: g },
                        )
                      }),
                      C.a.resolve()
                    )
                  })()
                    .then(function () {
                      X(i.current.currentValue)
                    })
                    .catch(function () {})
              },
              [r.ready, g, r.unitag],
            ),
            Object(M.useEffect)(
              function () {
                return function () {
                  Z()
                }
              },
              [r.ready],
            ),
            Object(D.jsxs)(
              B.n,
              _objectSpread(
                _objectSpread(
                  {
                    id: 'page-'.concat(r.unitag),
                    className: 'van-circle '.concat(E),
                    style: V,
                  },
                  Y,
                ),
                {},
                {
                  children: [
                    Object(D.jsx)(B.c, {
                      width: v,
                      height: v,
                      nativeProps: { width: v, height: v },
                      className: 'van-circle__canvas '.concat(r.unitag),
                      style:
                        'width: ' +
                        ''.concat(v, 'px') +
                        ';height:' +
                        ''.concat(v, 'px'),
                      id: r.unitag,
                      canvasId: r.unitag,
                    }),
                    o
                      ? Object(D.jsx)(B.d, {
                          className: 'van-circle__text',
                          children: o,
                        })
                      : Object(D.jsx)(B.n, {
                          className: 'van-circle__text',
                          children: W,
                        }),
                  ],
                },
              ),
            )
          )
        }
      }.call(this, t(236)))
    },
    827: function (e, n, t) {},
    869: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return a
      })
      var c = t(16),
        r = t(762),
        a = function createCanvasContext(e, n) {
          var t = Object(c.b)(n),
            a =
              null == t
                ? void 0
                : t.querySelector('canvas[canvas-id="'.concat(e, '"]')),
            i = null == a ? void 0 : a.getContext('2d'),
            o = new r.a(a, i)
          return i ? ((o.canvas = a), (o.ctx = i), o) : o
        }
    },
    921: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return O
        })
      var c = t(39),
        r = t(40),
        a = t(175),
        i = t(66),
        o = t(65),
        l = t(91),
        u = t(64),
        s = t.n(u),
        d = t(578),
        f = t(579),
        b = (t(576), t(827), t(780)),
        j = t(115)
      function Demo() {
        return Object(j.jsx)(b.a, { value: 30, text: 'text' })
      }
      t(592)
      var v = t(587),
        h = t(174),
        p = t(568)
      function demo2_Demo() {
        var e = s.a.useState(50),
          n = Object(h.a)(e, 2),
          t = n[0],
          c = n[1]
        return Object(j.jsxs)(p.n, {
          children: [
            Object(j.jsx)(b.a, {
              value: t,
              strokeWidth: '6',
              text: '宽度定制',
            }),
            Object(j.jsx)(b.a, {
              value: t,
              layerColor: '#eeeeee',
              color: '#ee0a24',
              text: '颜色定制',
            }),
            Object(j.jsx)(b.a, {
              type: '2d',
              value: t,
              wait: !0,
              solve: !0,
              color: { '0%': '#ffd01e', '100%': '#ee0a24' },
              text: '渐变色',
            }),
            Object(j.jsx)(b.a, { value: t, size: '120', text: '大小定制' }),
            Object(j.jsx)(v.b, {
              onClick: function onClick() {
                return c(t + 10)
              },
              children: '增加',
            }),
          ],
        })
      }
      function demo3_Demo() {
        var e = s.a.useState(50),
          n = Object(h.a)(e, 2),
          t = n[0],
          c = n[1]
        return Object(j.jsxs)(j.Fragment, {
          children: [
            Object(j.jsx)(b.a, {
              value: t,
              color: '#07c160',
              clockwise: !1,
              text: '逆时针',
            }),
            Object(j.jsx)(v.b, {
              onClick: function onClick() {
                return c(t + 10)
              },
              children: '增加',
            }),
          ],
        })
      }
      var O = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(o.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(a.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(j.jsxs)(d.a, {
                  title: 'Circle 环形进度条',
                  className: 'pages-circle-index',
                  children: [
                    Object(j.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(j.jsx)(Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '样式定制',
                      padding: !0,
                      children: Object(j.jsx)(demo2_Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '逆时针方向',
                      padding: !0,
                      children: Object(j.jsx)(demo3_Demo, {}),
                    }),
                  ],
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
