(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),o=t(280),r=t(31),l=t(27),i=(t(283),t(44));function Page(n){var t=n.title,s=n.children;return Object(l.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(r.pageScrollTo)({"scrollTop":0})})),Object(i.jsxs)(o.m,{"className":"demo-page","children":[Object(i.jsxs)(o.m,{"className":"demo-nav","children":[Object(i.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return r.default.navigateBack()}}),Object(i.jsxs)(o.m,{"className":"demo-nav__title","children":[t," "]})]}),s]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var c=t(3),o=t.n(c),r=t(6),l=t.n(r),i=t(16),s=t.n(i),a=t(17),d=t.n(a),u=t(280),j=t(27),f=(t(285),t(44)),p=function(e){s()(Index,e);var n=d()(Index);function Index(){return o()(this,Index),n.call(this)}return l()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(f.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(f.jsx)(u.m,{"className":"demo-block__title","children":t}),c?Object(f.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"285":function(e,n,t){},"708":function(e,n,t){},"761":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var c=t(3),o=t.n(c),r=t(6),l=t.n(r),i=t(24),s=t.n(i),a=t(16),d=t.n(a),u=t(17),j=t.n(u),f=t(9),p=t.n(f),x=(t(85),t(280)),h=t(27),b=t(31),m=t(281),O=t(282),y=t(284),g=(t(708),t(44)),v=function(e){d()(Index,e);var n=j()(Index);function Index(){var e;return o()(this,Index),e=n.call(this),p()(s()(e),"state",{"container":null,"scrollTop":0,"offsetTop":0}),p()(s()(e),"onReady",(function(){e.setState({"container":function container(){return Object(b.createSelectorQuery)().select("#container")}})})),p()(s()(e),"onScroll",(function(n){Object(b.createSelectorQuery)().select("#scroller").boundingClientRect((function(t){console.log("#scroller:",t.top),e.setState({"scrollTop":n.detail.scrollTop,"offsetTop":t.top})})).exec()})),e}return l()(Index,[{"key":"componentDidMount","value":function componentDidMount(){this.onReady()}},{"key":"render","value":function render(){var e=this.state,n=e.container,t=e.scrollTop,c=e.offsetTop;return Object(g.jsxs)(O.a,{"title":"Sticky 粘性布局","children":[Object(g.jsx)(y.a,{"title":"基础用法","children":Object(g.jsx)(m.Z,{"children":Object(g.jsx)(m.c,{"type":"primary","style":"margin-left: 15px","children":"基础用法"})})}),Object(g.jsx)(y.a,{"title":"吸顶距离","children":Object(g.jsx)(m.Z,{"offsetTop":50,"children":Object(g.jsx)(m.c,{"type":"info","style":"margin-left: 115px","children":"吸顶距离"})})}),Object(g.jsx)(y.a,{"title":"指定容器","children":Object(g.jsx)(x.m,{"id":"container","style":"height: 150px; background-color: #fff;","children":Object(g.jsx)(m.Z,{"container":n,"children":Object(g.jsx)(m.c,{"type":"warning","style":"margin-left: 215px;","children":"指定容器"})})})}),Object(g.jsx)(y.a,{"title":"嵌套在 scroll-view 内使用","children":Object(g.jsx)(x.i,{"onScroll":this.onScroll,"scrollY":!0,"id":"scroller","style":"height: 200px; background-color: #fff;","children":Object(g.jsx)(x.m,{"style":"height: 400px;","children":Object(g.jsx)(m.Z,{"scrollTop":t,"offsetTop":c,"children":Object(g.jsx)(m.c,{"type":"warning","children":"嵌套在 scroll-view 内"})})})})}),Object(g.jsx)(x.m,{"className":"sticky-page"})]})}}]),Index}(h.Component)}}]);