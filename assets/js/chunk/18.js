(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"282":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return Page}));var o=t(281),a=t(280),c=t(31),i=t(27),r=(t(283),t(44));function Page(e){var t=e.title,s=e.children,l=c.default.useRouter();return Object(i.useEffect)((function(){"react"===n.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(c.pageScrollTo)({"scrollTop":0})}),[l.path]),Object(r.jsxs)(a.m,{"className":"demo-page","children":[Object(r.jsxs)(a.m,{"className":"demo-nav","children":[Object(r.jsx)(o.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return c.default.navigateBack()}}),Object(r.jsxs)(a.m,{"className":"demo-nav__title","children":[t," "]})]}),s]})}}).call(this,t(121))},"283":function(n,e,t){},"284":function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var o=t(3),a=t.n(o),c=t(6),i=t.n(c),r=t(16),s=t.n(r),l=t(17),d=t.n(l),u=t(280),m=t(27),h=(t(285),t(44)),j=function(n){s()(Index,n);var e=d()(Index);function Index(){return a()(this,Index),e.call(this)}return i()(Index,[{"key":"render","value":function render(){var n=this.props,e=n.padding,t=n.title,o=n.card;return Object(h.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(e?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.m,{"className":"demo-block__title","children":t}),o?Object(h.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(m.Component)},"285":function(n,e,t){},"719":function(n,e,t){},"771":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return p}));var o=t(3),a=t.n(o),c=t(6),i=t.n(c),r=t(24),s=t.n(r),l=t(16),d=t.n(l),u=t(17),m=t.n(u),h=t(9),j=t.n(h),f=(t(83),t(123),t(128),t(388),t(291),t(27)),b=t(281),x=t(718),g=t(282),C=t(284),v=(t(719),t(44)),p=function(n){d()(Index,n);var e=m()(Index);function Index(){var n;return a()(this,Index),n=e.call(this),j()(s()(n),"state",{"areaList":x.areaList,"loading":!1,"value":330302}),j()(s()(n),"onChange",(function(n){var e=n.detail.values;Object(b.ob)(e.map((function(n){return n.name})).join("-"))})),j()(s()(n),"onConfirm",(function(n){console.log(n)})),j()(s()(n),"onCancel",(function(n){console.log(n)})),n}return i()(Index,[{"key":"render","value":function render(){var n=this.state,e=n.value,t=n.loading,o=n.areaList;return Object(v.jsx)(g.a,{"title":"Area 省市区选择","children":Object(v.jsxs)(v.Fragment,{"children":[Object(v.jsx)(C.a,{"title":"基础用法","children":Object(v.jsx)(b.b,{"value":e,"loading":t,"areaList":o,"onChange":this.onChange,"onConfirm":this.onConfirm,"onCancel":this.onCancel})}),Object(v.jsx)(C.a,{"title":"选中省市县","children":Object(v.jsx)(b.b,{"value":e,"loading":t,"areaList":o,"onChange":this.onChange,"onConfirm":this.onConfirm})}),Object(v.jsx)(C.a,{"title":"配置显示列","children":Object(v.jsx)(b.b,{"title":"标题","columnsNum":2,"loading":t,"areaList":o,"onChange":this.onChange,"onConfirm":this.onConfirm})}),Object(v.jsx)(C.a,{"title":"配置列占位提示文字","children":Object(v.jsx)(b.b,{"title":"标题","columnsNum":2,"loading":t,"areaList":o,"columnsPlaceholder":["请选择","请选择","请选择"],"onChange":this.onChange,"onConfirm":this.onConfirm})}),Object(v.jsx)(b.ib,{"id":"van-toast"})]})})}}]),Index}(f.Component)}}]);