;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
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
          o = t(77),
          l = t(64),
          s = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            u = n.className,
            d = void 0 === u ? '' : u,
            b = n.children,
            j = r.a.useRouter().path
          return (
            Object(l.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [j],
            ),
            r.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: j }
            }),
            Object(s.jsxs)(a.n, {
              className: 'demo-page '.concat(d),
              children: [
                Object(s.jsxs)(a.n, {
                  className: 'demo-nav',
                  children: [
                    Object(s.jsx)(c.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(o.d)()
                      },
                    }),
                    Object(s.jsxs)(a.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                b,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return u
      })
      var c = t(39),
        a = t(40),
        r = t(66),
        i = t(65),
        o = t(568),
        l = t(64),
        s = (t(582), t(115)),
        u = (function (e) {
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
                  return Object(s.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
                        ? Object(s.jsx)(o.n, {
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
        a = t.n(c),
        r = t(55),
        i = t.n(r),
        o = t(572),
        l = t.n(o),
        s = t(577),
        u = t.n(s),
        d = t(573),
        b = t.n(d),
        j = t(595),
        f = t.n(j),
        p = t(10),
        m = t.n(p),
        v = t(24),
        x = t.n(v),
        h = t(571),
        O = t.n(h),
        _ = t(32),
        y = t.n(_),
        g = t(570),
        S = t.n(g),
        N = t(27),
        k = t.n(N),
        T = t(173),
        I = t.n(T),
        w = t(568),
        z = t(64),
        C = t(569),
        K = t(580)
      function textStyle(e) {
        return Object(C.c)({ 'font-size': Object(K.a)(e.textSize) })
      }
      var B = t(115),
        L = [
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
        var t = x()(e)
        if (O.a) {
          var c = O()(e)
          n &&
            (c = y()(c).call(c, function (n) {
              return S()(e, n).enumerable
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
            k()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              l()(e, n, c[n])
            })
          else if (I.a) a()(e, I()(c))
          else {
            var r
            k()((r = ownKeys(Object(c)))).call(r, function (n) {
              i()(e, n, S()(c, n))
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
          o = e.textSize,
          l = e.className,
          s = e.children,
          d = e.style,
          j = b()(e, L),
          p = Object(z.useState)(f()({ length: 12 })),
          v = u()(p, 1)[0]
        return Object(B.jsxs)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + C.b('loading', { vertical: t }) + ' ' + l,
                style: C.c([d]),
              },
              j,
            ),
            {},
            {
              children: [
                Object(B.jsx)(w.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((n = { color: r, size: i }),
                    Object(C.c)({
                      color: n.color,
                      width: Object(K.a)(n.size),
                      height: Object(K.a)(n.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(B.jsx)(B.Fragment, {
                      children: m()(v).call(v, function (e, n) {
                        return Object(B.jsx)(
                          w.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(B.jsx)(w.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: o }),
                  children: s,
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
        a = t.n(c),
        r = t(55),
        i = t.n(r),
        o = t(24),
        l = t.n(o),
        s = t(571),
        u = t.n(s),
        d = t(32),
        b = t.n(d),
        j = t(570),
        f = t.n(j),
        p = t(27),
        m = t.n(p),
        v = t(173),
        x = t.n(v),
        h = t(572),
        O = t.n(h),
        _ = t(573),
        y = t.n(_),
        g = t(90),
        S = t(568),
        N = t(569),
        k = t(574),
        T = t(586),
        I = t(28),
        w = t.n(I),
        z = t(583)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== w()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(z.a)([t])
        )
      }
      var C = t(115),
        K = [
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
          var c = u()(e)
          n &&
            (c = b()(c).call(c, function (n) {
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
            m()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              O()(e, n, c[n])
            })
          else if (x.a) a()(e, x()(c))
          else {
            var r
            m()((r = ownKeys(Object(c)))).call(r, function (n) {
              i()(e, n, f()(c, n))
            })
          }
        }
        return e
      }
      var B = !1,
        L = 10
      if (!B)
        var D = setInterval(function () {
          if (--L > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                c = t.innerHTML
              if (c && /^taro-button-core{/.test(c)) {
                t.remove(), (B = !0), D && clearInterval(D)
                break
              }
            }
          else D && clearInterval(D)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          c = void 0 === t ? 'default' : t,
          a = e.size,
          r = void 0 === a ? 'normal' : a,
          i = e.block,
          o = e.round,
          l = e.plain,
          s = e.square,
          u = e.loading,
          d = e.disabled,
          b = e.hairline,
          j = e.color,
          f = e.loadingSize,
          p = void 0 === f ? g.a.pxTransform(40) : f,
          m = e.loadingType,
          v = void 0 === m ? 'circular' : m,
          x = e.loadingText,
          h = e.icon,
          O = e.classPrefix,
          _ = void 0 === O ? 'van-icon' : O,
          I = e.onClick,
          w = e.children,
          z = e.style,
          B = e.className,
          L = y()(e, K)
        return Object(C.jsx)(
          S.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  N.b('button', [
                    c,
                    r,
                    {
                      block: i,
                      round: o,
                      plain: l,
                      square: s,
                      loading: u,
                      disabled: d,
                      hairline: b,
                      unclickable: d || u,
                    },
                  ]) +
                  ' ' +
                  (b ? 'van-hairline--surround' : '') +
                  ' '.concat(B || ''),
                hoverClass: 'van-button--active hover-class',
                style: N.c([rootStyle({ plain: l, color: j }), z]),
                onClick: d || u ? void 0 : I,
              },
              L,
            ),
            {},
            {
              children: u
                ? Object(C.jsxs)(S.n, {
                    style: 'display: flex',
                    children: [
                      Object(C.jsx)(T.a, {
                        className: 'loading-class',
                        size: p,
                        type: v,
                        color:
                          ((n = { type: c, color: j, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      x &&
                        Object(C.jsx)(S.n, {
                          className: 'van-button__loading-text',
                          children: x,
                        }),
                    ],
                  })
                : Object(C.jsxs)(C.Fragment, {
                    children: [
                      h &&
                        Object(C.jsx)(k.a, {
                          size: '1.2em',
                          name: h,
                          classPrefix: _,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(C.jsx)(S.n, {
                        className: 'van-button__text',
                        children: w,
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
    598: function (e, n, t) {},
    647: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Tag
      })
      var c = t(116),
        a = t.n(c),
        r = t(55),
        i = t.n(r),
        o = t(24),
        l = t.n(o),
        s = t(571),
        u = t.n(s),
        d = t(32),
        b = t.n(d),
        j = t(570),
        f = t.n(j),
        p = t(27),
        m = t.n(p),
        v = t(173),
        x = t.n(v),
        h = t(572),
        O = t.n(h),
        _ = t(573),
        y = t.n(_),
        g = t(568),
        S = t(569),
        N = t(574),
        k = t(583)
      var T = t(115),
        I = [
          'type',
          'size',
          'mark',
          'plain',
          'round',
          'color',
          'textColor',
          'closeable',
          'children',
          'onClose',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = l()(e)
        if (u.a) {
          var c = u()(e)
          n &&
            (c = b()(c).call(c, function (n) {
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
            m()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              O()(e, n, c[n])
            })
          else if (x.a) a()(e, x()(c))
          else {
            var r
            m()((r = ownKeys(Object(c)))).call(r, function (n) {
              i()(e, n, f()(c, n))
            })
          }
        }
        return e
      }
      function Tag(e) {
        var n,
          t = e.type,
          c = void 0 === t ? 'default' : t,
          a = e.size,
          r = e.mark,
          i = e.plain,
          o = e.round,
          l = e.color,
          s = e.textColor,
          u = e.closeable,
          d = e.children,
          b = e.onClose,
          j = e.style,
          f = e.className,
          p = y()(e, I)
        return Object(T.jsxs)(
          g.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  S.b('tag', [c, a, { mark: r, plain: i, round: o }]) +
                  ' '.concat(f || ''),
                style: S.c([
                  ((n = { plain: i, color: l, textColor: s }),
                  Object(k.a)({
                    'background-color': n.plain ? '' : n.color,
                    color: n.textColor || n.plain ? n.textColor || n.color : '',
                  })),
                  j,
                ]),
              },
              p,
            ),
            {},
            {
              children: [
                d,
                u &&
                  Object(T.jsx)(N.a, {
                    name: 'cross',
                    className: 'van-tag__close',
                    onClick: b,
                  }),
              ],
            },
          ),
        )
      }
      n.b = Tag
    },
    664: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(701)
    },
    701: function (e, n, t) {},
    848: function (e, n, t) {},
    905: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return M
        })
      var c = t(39),
        a = t(40),
        r = t(175),
        i = t(66),
        o = t(65),
        l = t(91),
        s = t(64),
        u = t(578),
        d = t(579),
        b = (t(576), t(588), t(584), t(585), t(598), t(848), t(116)),
        j = t.n(b),
        f = t(55),
        p = t.n(f),
        m = t(24),
        v = t.n(m),
        x = t(571),
        h = t.n(x),
        O = t(32),
        _ = t.n(O),
        y = t(570),
        g = t.n(y),
        S = t(27),
        N = t.n(S),
        k = t(173),
        T = t.n(k),
        I = t(572),
        w = t.n(I),
        z = t(577),
        C = t.n(z),
        K = t(573),
        B = t.n(K),
        L = t(568),
        D = t(574),
        P = t(587),
        E = t(115),
        A = [
          'tipIcon',
          'tip',
          'label',
          'currency',
          'suffixLabel',
          'buttonType',
          'price',
          'loading',
          'disabled',
          'buttonText',
          'safeAreaInsetBottom',
          'renderTop',
          'renderTip',
          'decimalLength',
          'onSubmit',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = v()(e)
        if (h.a) {
          var c = h()(e)
          n &&
            (c = _()(c).call(c, function (n) {
              return g()(e, n).enumerable
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
            N()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              w()(e, n, c[n])
            })
          else if (T.a) j()(e, T()(c))
          else {
            var a
            N()((a = ownKeys(Object(c)))).call(a, function (n) {
              p()(e, n, g()(c, n))
            })
          }
        }
        return e
      }
      var q = function SubmitBar(e) {
        var n = e.tipIcon,
          t = e.tip,
          c = e.label,
          a = e.currency,
          r = void 0 === a ? '¥' : a,
          i = e.suffixLabel,
          o = e.buttonType,
          l = void 0 === o ? 'danger' : o,
          u = e.price,
          d = e.loading,
          b = e.disabled,
          j = e.buttonText,
          f = e.safeAreaInsetBottom,
          p = void 0 === f || f,
          m = e.renderTop,
          v = e.renderTip,
          x = e.decimalLength,
          h = e.onSubmit,
          O = e.children,
          _ = e.style,
          y = e.className,
          g = B()(e, A),
          S = Object(s.useState)({
            hasTip: !1,
            integerStr: '',
            decimalStr: '',
            hasPrice: !1,
          }),
          N = C()(S, 2),
          k = N[0],
          T = N[1],
          I = k.hasTip,
          w = k.integerStr,
          z = k.decimalStr,
          K = k.hasPrice
        return (
          Object(s.useEffect)(
            function () {
              T(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { hasTip: 'string' == typeof t },
                )
              })
            },
            [t],
          ),
          Object(s.useEffect)(
            function () {
              var e = 'number' == typeof u && (u / 100).toFixed(x).split('.')
              T(function (n) {
                return _objectSpread(
                  _objectSpread({}, n),
                  {},
                  {
                    hasPrice: 'number' == typeof u,
                    integerStr: e && e[0],
                    decimalStr: x && e ? '.'.concat(e[1]) : '',
                  },
                )
              })
            },
            [x, u],
          ),
          Object(E.jsxs)(
            L.n,
            _objectSpread(
              _objectSpread(
                { className: 'van-submit-bar  '.concat(y || ''), style: _ },
                g,
              ),
              {},
              {
                children: [
                  m,
                  Object(E.jsxs)(L.n, {
                    className: 'van-submit-bar__tip',
                    children: [
                      n &&
                        Object(E.jsx)(D.a, {
                          size: '12px',
                          name: n,
                          className: 'van-submit-bar__tip-icon',
                        }),
                      I &&
                        Object(E.jsx)(L.n, {
                          className: 'van-submit-bar__tip-text',
                          children: t,
                        }),
                      v,
                    ],
                  }),
                  Object(E.jsxs)(L.n, {
                    className: 'bar-class van-submit-bar__bar',
                    children: [
                      O,
                      K &&
                        Object(E.jsxs)(L.n, {
                          className: 'van-submit-bar__text',
                          children: [
                            Object(E.jsx)(L.k, { children: c || '合计：' }),
                            Object(E.jsxs)(L.k, {
                              className: 'van-submit-bar__price price-class',
                              children: [
                                Object(E.jsx)(L.k, {
                                  className: 'van-submit-bar__currency',
                                  children: r,
                                }),
                                Object(E.jsx)(L.k, {
                                  className: 'van-submit-bar__price-integer',
                                  children: w,
                                }),
                                Object(E.jsx)(L.k, { children: z }),
                              ],
                            }),
                            Object(E.jsx)(L.k, {
                              className: 'van-submit-bar__suffix-label',
                              children: i,
                            }),
                          ],
                        }),
                      Object(E.jsx)(P.a, {
                        round: !0,
                        type: l,
                        loading: d,
                        disabled: b,
                        className: 'van-submit-bar__button button-class',
                        onClick: h,
                        children: d ? '' : j,
                      }),
                    ],
                  }),
                  p &&
                    Object(E.jsx)(L.n, { className: 'van-submit-bar__safe' }),
                ],
              },
            ),
          )
        )
      }
      function Demo() {
        return Object(E.jsx)(q, {
          price: 3050,
          buttonText: '提交订单',
          onSubmit: function onSubmit() {
            return console.info('提交')
          },
        })
      }
      function demo2_Demo() {
        return Object(E.jsx)(q, {
          disabled: !0,
          price: 3050,
          buttonText: '提交订单',
          tip: '您的收货地址不支持同城送, 我们已为您推荐快递',
          tipIcon: 'infoO',
          onSubmit: function onSubmit() {
            return console.info('提交')
          },
        })
      }
      function demo3_Demo() {
        return Object(E.jsx)(q, {
          loading: !0,
          price: 3050,
          buttonText: '提交订单',
          onSubmit: function onSubmit() {
            return console.info('提交')
          },
        })
      }
      t(664)
      var F = t(647)
      function demo4_Demo() {
        return Object(E.jsx)(q, {
          price: 3050,
          buttonText: '提交订单',
          tip: !0,
          renderTip: Object(E.jsxs)(L.n, {
            children: [
              '您的收货地址不支持同城送,',
              Object(E.jsx)(L.k, { children: '修改地址' }),
            ],
          }),
          children: Object(E.jsx)(F.b, { type: 'primary', children: '标签' }),
        })
      }
      var M = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(o.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(r.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(a.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(E.jsxs)(u.a, {
                  title: 'SubmitBar 提交订单栏',
                  className: 'pages-submit-bar-index',
                  children: [
                    Object(E.jsx)(d.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(E.jsx)(Demo, {}),
                    }),
                    Object(E.jsx)(d.a, {
                      title: '禁用状态',
                      padding: !0,
                      children: Object(E.jsx)(demo2_Demo, {}),
                    }),
                    Object(E.jsx)(d.a, {
                      title: '加载状态',
                      padding: !0,
                      children: Object(E.jsx)(demo3_Demo, {}),
                    }),
                    Object(E.jsx)(d.a, {
                      title: '高级用法',
                      padding: !0,
                      children: Object(E.jsx)(demo4_Demo, {}),
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
