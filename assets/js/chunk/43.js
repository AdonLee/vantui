(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"277":function(e,n,t){"use strict";t.d(n,"a",(function(){return Page}));var c=t(276),r=t(275),l=t(29),o=(t(25),t(278),t(41));function Page(e){var n=e.title,t=e.children;return Object(o.jsxs)(r.l,{"className":"demo-page","children":[Object(o.jsxs)(r.l,{"className":"demo-nav","children":[Object(o.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return l.default.navigateBack()}}),Object(o.jsxs)(r.l,{"className":"demo-nav__title","children":[n," "]})]}),t]})}},"278":function(e,n,t){},"279":function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var c=t(3),r=t.n(c),l=t(6),o=t.n(l),i=t(15),s=t.n(i),a=t(16),d=t.n(a),j=t(275),u=t(25),f=(t(280),t(41)),x=function(e){s()(Index,e);var n=d()(Index);function Index(){return r()(this,Index),n.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(f.jsxs)(j.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(f.jsx)(j.l,{"className":"demo-block__title","children":t}),c?Object(f.jsx)(j.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.Component)},"280":function(e,n,t){},"693":function(e,n,t){},"746":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return y}));var c=t(3),r=t.n(c),l=t(6),o=t.n(l),i=t(21),s=t.n(i),a=t(15),d=t.n(a),j=t(16),u=t.n(j),f=t(8),x=t.n(f),h=(t(79),t(275)),p=t(25),b=t(29),O=t(276),m=t(277),g=t(279),v=(t(693),t(41)),y=function(e){d()(Index,e);var n=u()(Index);function Index(){var e;return r()(this,Index),e=n.call(this),x()(s()(e),"state",{"container":null,"scrollTop":0,"offsetTop":0}),x()(s()(e),"onReady",(function(){e.setState({"container":function container(){return Object(b.createSelectorQuery)().select("#container")}})})),x()(s()(e),"onScroll",(function(n){Object(b.createSelectorQuery)().select("#scroller").boundingClientRect((function(t){console.log("#scroller:",t.top),e.setState({"scrollTop":n.detail.scrollTop,"offsetTop":t.top})})).exec()})),e}return o()(Index,[{"key":"render","value":function render(){var e=this.state,n=e.container,t=e.scrollTop,c=e.offsetTop;return Object(v.jsx)(m.a,{"title":"Sticky 粘性布局","children":Object(v.jsxs)(h.l,{"className":"sticky-page","children":[Object(v.jsx)(g.a,{"title":"基础用法","children":Object(v.jsx)(O.Z,{"children":Object(v.jsx)(O.c,{"type":"primary","style":"margin-left: 15px","children":"基础用法"})})}),Object(v.jsx)(g.a,{"title":"吸顶距离","children":Object(v.jsx)(O.Z,{"offsetTop":50,"children":Object(v.jsx)(O.c,{"type":"info","style":"margin-left: 115px","children":"吸顶距离"})})}),Object(v.jsx)(g.a,{"title":"指定容器","children":Object(v.jsx)(h.l,{"id":"container","style":"height: 150px; background-color: #fff;","children":Object(v.jsx)(O.Z,{"container":n,"children":Object(v.jsx)(O.c,{"type":"warning","style":"margin-left: 215px;","children":"指定容器"})})})}),Object(v.jsx)(g.a,{"title":"嵌套在 scroll-view 内使用","children":Object(v.jsx)(h.h,{"onScroll":this.onScroll,"scrollY":!0,"id":"scroller","style":"height: 200px; background-color: #fff;","children":Object(v.jsx)(h.l,{"style":"height: 400px;","children":Object(v.jsx)(O.Z,{"scrollTop":t,"offsetTop":c,"children":Object(v.jsx)(O.c,{"type":"warning","children":"嵌套在 scroll-view 内"})})})})})]})})}}]),Index}(p.Component)}}]);