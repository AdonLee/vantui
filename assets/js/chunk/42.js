(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"277":function(e,n,t){"use strict";t.d(n,"a",(function(){return Page}));var a=t(276),c=t(275),s=t(29),r=(t(25),t(278),t(41));function Page(e){var n=e.title,t=e.children;return Object(r.jsxs)(c.l,{"className":"demo-page","children":[Object(r.jsxs)(c.l,{"className":"demo-nav","children":[Object(r.jsx)(a.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(r.jsxs)(c.l,{"className":"demo-nav__title","children":[n," "]})]}),t]})}},"278":function(e,n,t){},"279":function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var a=t(3),c=t.n(a),s=t(6),r=t.n(s),l=t(15),i=t.n(l),o=t(16),d=t.n(o),u=t(275),j=t(25),h=(t(280),t(41)),x=function(e){i()(Index,e);var n=d()(Index);function Index(){return c()(this,Index),n.call(this)}return r()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,a=e.card;return Object(h.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.l,{"className":"demo-block__title","children":t}),a?Object(h.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"280":function(e,n,t){},"695":function(e,n,t){},"749":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var a=t(3),c=t.n(a),s=t(6),r=t.n(s),l=t(21),i=t.n(l),o=t(15),d=t.n(o),u=t(16),j=t.n(u),h=t(8),x=t.n(h),b=t(25),m=t(29),O=t(275),v=t(276),f=t(277),g=t(279),p=(t(695),t(41)),C=function(e){d()(Index,e);var n=j()(Index);function Index(){var e;return c()(this,Index),e=n.call(this),x()(i()(e),"state",{"currentValue":50}),x()(i()(e),"onChange",(function(e){Object(m.showToast)({"icon":"none","title":"当前值：".concat(e.detail)})})),x()(i()(e),"onDrag",(function(n){e.setState({"currentValue":n.detail.value})})),e}return r()(Index,[{"key":"render","value":function render(){var e=this.state.currentValue;return Object(p.jsx)(f.a,{"title":"Slider 滑块","children":Object(p.jsxs)(p.Fragment,{"children":[Object(p.jsx)(g.a,{"title":"基础用法","children":Object(p.jsx)(v.W,{"value":"50","className":"slider","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"双滑块","children":Object(p.jsx)(v.W,{"range":!0,"value":[20,60],"className":"slider","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"指定选择范围","children":Object(p.jsx)(v.W,{"className":"slider","min":-50,"max":50,"onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"禁用","children":Object(p.jsx)(v.W,{"className":"slider","value":"50","disabled":!0})}),Object(p.jsx)(g.a,{"title":"指定步长","children":Object(p.jsx)(v.W,{"className":"slider","value":"50","step":"10","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"自定义样式","children":Object(p.jsx)(v.W,{"value":"50","className":"slider","barHeight":"4px","activeColor":"#ee0a24"})}),Object(p.jsx)(g.a,{"title":"自定义按钮","children":Object(p.jsx)(v.W,{"value":e,"className":"slider","activeColor":"#ee0a24","onDrag":this.onDrag,"renderButton":function renderButton(){return Object(p.jsx)(p.Fragment,{"children":Object(p.jsx)(O.l,{"className":"custom-button","children":e})})}})})]})})}}]),Index}(b.Component)}}]);