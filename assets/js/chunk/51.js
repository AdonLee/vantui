(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"277":function(e,n,t){"use strict";t.d(n,"a",(function(){return Page}));var c=t(276),a=t(275),l=t(23),o=(t(26),t(278),t(41));function Page(e){var n=e.title,t=e.children;return Object(o.jsxs)(a.l,{"className":"demo-page","children":[Object(o.jsxs)(a.l,{"className":"demo-nav","children":[Object(o.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return l.default.navigateBack()}}),Object(o.jsxs)(a.l,{"className":"demo-nav__title","children":[n," "]})]}),t]})}},"278":function(e,n,t){},"279":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var c=t(3),a=t.n(c),l=t(6),o=t.n(l),r=t(15),i=t.n(r),s=t(16),d=t.n(s),u=t(275),h=t(26),j=(t(280),t(41)),b=function(e){i()(Index,e);var n=d()(Index);function Index(){return a()(this,Index),n.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(j.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(j.jsx)(u.l,{"className":"demo-block__title","children":t}),c?Object(j.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"280":function(e,n,t){},"748":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var c=t(3),a=t.n(c),l=t(6),o=t.n(l),r=t(21),i=t.n(r),s=t(15),d=t.n(s),u=t(16),h=t.n(u),j=t(8),b=t.n(j),x=t(26),f=t(23),O=t(275),p=t(276),v=t(277),m=t(279),k=t(41),C=function(e){d()(Index,e);var n=h()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),b()(i()(e),"state",{"value":""}),b()(i()(e),"onChange",(function(n){e.setState({"value":n.detail})})),b()(i()(e),"onSearch",(function(){e.state.value&&Object(f.showToast)({"title":"搜索："+e.state.value,"icon":"none"})})),b()(i()(e),"onClick",(function(){e.state.value&&Object(f.showToast)({"title":"搜索："+e.state.value,"icon":"none"})})),b()(i()(e),"onCancel",(function(){Object(f.showToast)({"title":"取消","icon":"none"})})),b()(i()(e),"onClear",(function(){Object(f.showToast)({"title":"清空","icon":"none"})})),e}return o()(Index,[{"key":"render","value":function render(){var e=this.state.value;return Object(k.jsx)(v.a,{"title":"Search 搜索","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsx)(m.a,{"title":"基本用法","children":Object(k.jsx)(p.R,{"defaultValue":e,"placeholder":"请输入搜索关键词","onSearch":this.onSearch})}),Object(k.jsx)(m.a,{"title":"事件监听","children":Object(k.jsx)(p.R,{"defaultValue":e,"showAction":!0,"placeholder":"请输入搜索关键词","onSearch":this.onSearch,"onCancel":this.onCancel,"onClear":this.onClear})}),Object(k.jsx)(m.a,{"title":"搜索框内容对齐","children":Object(k.jsx)(p.R,{"defaultValue":e,"inputAlign":"center","placeholder":"请输入搜索关键词"})}),Object(k.jsx)(m.a,{"title":"禁用搜索框","children":Object(k.jsx)(p.R,{"disabled":!0,"defaultValue":e,"placeholder":"请输入搜索关键词"})}),Object(k.jsx)(m.a,{"title":"自定义背景色","children":Object(k.jsx)(p.R,{"defaultValue":e,"shape":"round","background":"#4fc08d","placeholder":"请输入搜索关键词"})}),Object(k.jsx)(m.a,{"title":"自定义按钮","children":Object(k.jsx)(p.R,{"value":e,"label":"地址","shape":"round","placeholder":"请输入搜索关键词","onSearch":this.onSearch,"onChange":this.onChange,"renderAction":Object(k.jsx)(k.Fragment,{"children":Object(k.jsx)(O.l,{"onClick":this.onClick,"children":"搜索"})})})})]})})}}]),Index}(x.Component)}}]);