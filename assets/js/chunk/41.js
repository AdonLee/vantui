(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),a=t(280),s=t(31),r=t(27),o=(t(283),t(44));function Page(n){var t=n.title,i=n.children,l=s.default.useRouter();return Object(r.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(s.pageScrollTo)({"scrollTop":0})}),[l.path]),Object(o.jsxs)(a.m,{"className":"demo-page","children":[Object(o.jsxs)(a.m,{"className":"demo-nav","children":[Object(o.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(o.jsxs)(a.m,{"className":"demo-nav__title","children":[t," "]})]}),i]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var c=t(3),a=t.n(c),s=t(6),r=t.n(s),o=t(16),i=t.n(o),l=t(17),d=t.n(l),u=t(280),m=t(27),j=(t(285),t(44)),h=function(e){i()(Index,e);var n=d()(Index);function Index(){return a()(this,Index),n.call(this)}return r()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(j.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(j.jsx)(u.m,{"className":"demo-block__title","children":t}),c?Object(j.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(m.Component)},"285":function(e,n,t){},"736":function(e,n,t){},"787":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return w}));var c=t(3),a=t.n(c),s=t(6),r=t.n(s),o=t(24),i=t.n(o),l=t(16),d=t.n(l),u=t(17),m=t.n(u),j=t(9),h=t.n(j),x=t(27),b=t(280),p=t(281),f=t(282),v=t(284),O=(t(736),t(44)),w=function(e){d()(Index,e);var n=m()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),h()(i()(e),"state",{"show":!1}),h()(i()(e),"onChange",(function(n){var t=n.detail;e.setState({"show":t})})),e}return r()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(O.jsx)(f.a,{"title":"Skeleton 骨架屏","children":Object(O.jsxs)(O.Fragment,{"children":[Object(O.jsx)(v.a,{"title":"基础用法","children":Object(O.jsx)(p.V,{"title":!0,"row":"3","rowWidth":["100%","100%","80%"]})}),Object(O.jsx)(v.a,{"title":"显示头像","children":Object(O.jsx)(p.V,{"title":!0,"avatar":!0,"row":"3"})}),Object(O.jsxs)(v.a,{"title":"展示子组件","children":[Object(O.jsx)(p.cb,{"checked":e,"size":"24px","onChange":this.onChange}),Object(O.jsx)(p.V,{"title":!0,"avatar":!0,"row":"3","loading":!e,"children":Object(O.jsxs)(b.m,{"className":"demo-preview","children":[Object(O.jsx)(p.C,{"className":"demo-preview-img","src":"https://img.yzcdn.cn/vant/logo.png"}),Object(O.jsxs)(b.m,{"className":"demo-content","children":[Object(O.jsx)(b.m,{"className":"demo-content-h3","children":"关于 @antmjs/vantui"}),Object(O.jsx)(b.m,{"className":"domo-content-p","children":"一套基于 vant-weapp 开发的在 Taro-React / React 框架中使用的多端 UI 组件库，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。"})]})]})})]})]})})}}]),Index}(x.Component)}}]);