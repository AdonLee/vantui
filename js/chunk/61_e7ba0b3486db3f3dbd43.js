;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(590)
        var c = t(574),
          a = t(568),
          r = t(90),
          i = t(736),
          s = t(77),
          o = t(64),
          l = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            d = n.className,
            j = void 0 === d ? '' : d,
            u = n.children,
            b = r.a.useRouter().path
          return (
            Object(o.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [b],
            ),
            r.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(l.jsxs)(a.n, {
              className: 'demo-page '.concat(j),
              children: [
                Object(l.jsxs)(a.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(c.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(s.d)()
                      },
                    }),
                    Object(l.jsxs)(a.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                u,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return d
      })
      var c = t(39),
        a = t(40),
        r = t(66),
        i = t(65),
        s = t(568),
        o = t(64),
        l = (t(582), t(115)),
        d = (function (e) {
          Object(r.a)(Index, e)
          var n = Object(i.a)(Index)
          function Index() {
            return Object(c.a)(this, Index), n.call(this)
          }
          return (
            Object(a.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    c = e.card
                  return Object(l.jsxs)(s.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(l.jsx)(s.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
                        ? Object(l.jsx)(s.n, {
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
        })(o.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    586: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var c = t(116),
        a = t.n(c),
        r = t(55),
        i = t.n(r),
        s = t(572),
        o = t.n(s),
        l = t(577),
        d = t.n(l),
        j = t(573),
        u = t.n(j),
        b = t(595),
        x = t.n(b),
        O = t(10),
        m = t.n(O),
        f = t(24),
        p = t.n(f),
        h = t(571),
        v = t.n(h),
        _ = t(32),
        g = t.n(_),
        y = t(570),
        N = t.n(y),
        I = t(27),
        z = t.n(I),
        k = t(173),
        w = t.n(k),
        S = t(568),
        D = t(64),
        L = t(569),
        C = t(580)
      function textStyle(e) {
        return Object(L.c)({ 'font-size': Object(C.a)(e.textSize) })
      }
      var A = t(115),
        E = [
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
        var t = p()(e)
        if (v.a) {
          var c = v()(e)
          n &&
            (c = g()(c).call(c, function (n) {
              return N()(e, n).enumerable
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
            z()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              o()(e, n, c[n])
            })
          else if (w.a) a()(e, w()(c))
          else {
            var r
            z()((r = ownKeys(Object(c)))).call(r, function (n) {
              i()(e, n, N()(c, n))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          c = e.type,
          a = void 0 === c ? 'circular' : c,
          r = e.color,
          i = e.size,
          s = e.textSize,
          o = e.className,
          l = e.children,
          j = e.style,
          b = u()(e, E),
          O = Object(D.useState)(x()({ length: 12 })),
          f = d()(O, 1)[0]
        return Object(A.jsxs)(
          S.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + L.b('loading', { vertical: t }) + ' ' + o,
                style: L.c([j]),
              },
              b,
            ),
            {},
            {
              children: [
                Object(A.jsx)(S.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((n = { color: r, size: i }),
                    Object(L.c)({
                      color: n.color,
                      width: Object(C.a)(n.size),
                      height: Object(C.a)(n.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(A.jsx)(A.Fragment, {
                      children: m()(f).call(f, function (e, n) {
                        return Object(A.jsx)(
                          S.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(A.jsx)(S.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: s }),
                  children: l,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    588: function (e, n, t) {},
    703: function (e, n, t) {
      'use strict'
      t(576), t(588)
    },
    919: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return x
        })
      var c = t(39),
        a = t(40),
        r = t(175),
        i = t(66),
        s = t(65),
        o = t(91),
        l = t(64),
        d = t(578),
        j = t(579),
        u = (t(703), t(586)),
        b = t(115)
      function Demo() {
        return Object(b.jsxs)(b.Fragment, {
          children: [
            Object(b.jsx)(u.b, {}),
            Object(b.jsx)(u.b, { type: 'spinner' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(b.jsxs)(b.Fragment, {
          children: [
            Object(b.jsx)(u.b, { color: '#1989fa' }),
            Object(b.jsx)(u.b, { type: 'spinner', color: '#1989fa' }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(b.jsx)(u.b, { size: '24px', children: '加载中...' })
      }
      function demo4_Demo() {
        return Object(b.jsx)(u.b, {
          size: '24px',
          vertical: !0,
          children: '加载中...',
        })
      }
      var x = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(s.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(o.a)(Object(r.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(a.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(b.jsxs)(d.a, {
                  title: 'Loading 加载',
                  className: 'pages-loading-index',
                  children: [
                    Object(b.jsx)(j.a, {
                      title: '加载类型',
                      padding: !0,
                      children: Object(b.jsx)(Demo, {}),
                    }),
                    Object(b.jsx)(j.a, {
                      title: '自定义颜色',
                      padding: !0,
                      children: Object(b.jsx)(demo2_Demo, {}),
                    }),
                    Object(b.jsx)(j.a, {
                      title: '加载文案',
                      padding: !0,
                      children: Object(b.jsx)(demo3_Demo, {}),
                    }),
                    Object(b.jsx)(j.a, {
                      title: '垂直排列',
                      padding: !0,
                      children: Object(b.jsx)(demo4_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(l.Component)
    },
  },
])
