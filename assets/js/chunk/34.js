(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"277":function(e,t,n){"use strict";n.d(t,"a",(function(){return Page}));var a=n(276),c=n(275),i=n(23),r=(n(26),n(278),n(41));function Page(e){var t=e.title,n=e.children;return Object(r.jsxs)(c.l,{"className":"demo-page","children":[Object(r.jsxs)(c.l,{"className":"demo-nav","children":[Object(r.jsx)(a.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(r.jsxs)(c.l,{"className":"demo-nav__title","children":[t," "]})]}),n]})}},"278":function(e,t,n){},"279":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(3),c=n.n(a),i=n(6),r=n.n(i),s=n(15),o=n.n(s),d=n(16),l=n.n(d),u=n(275),m=n(26),h=(n(280),n(41)),j=function(e){o()(Index,e);var t=l()(Index);function Index(){return c()(this,Index),t.call(this)}return r()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,a=e.card;return Object(h.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(h.jsx)(u.l,{"className":"demo-block__title","children":n}),a?Object(h.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(m.Component)},"280":function(e,t,n){},"689":function(e,t,n){},"741":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(3),c=n.n(a),i=n(6),r=n.n(i),s=n(21),o=n.n(s),d=n(15),l=n.n(d),u=n(16),m=n.n(u),h=n(8),j=n.n(h),p=n(26),f=n(275),y=n(276),b=n(277),g=n(279),x=(n(689),n(41)),O=function(e){l()(Index,e);var t=m()(Index);function Index(){var e;return c()(this,Index),e=t.call(this),j()(o()(e),"showNotify",(function(){Object(y.nb)("通知内容")})),j()(o()(e),"showCustomColor",(function(){Object(y.nb)({"message":"自定义颜色","color":"#ad0000","background":"#ffe1e1"})})),j()(o()(e),"showCustomDuration",(function(){Object(y.nb)({"duration":1e3,"message":"自定义时长"})})),j()(o()(e),"showNotifyByType",(function(e){var t=e.currentTarget.dataset.type;Object(y.nb)({"type":t,"message":"通知内容"})})),j()(o()(e),"showSafe",(function(){Object(y.nb)({"message":"通知内容","safeAreaInsetTop":!0})})),e}return r()(Index,[{"key":"render","value":function render(){var e=this;return Object(x.jsx)(b.a,{"title":"Notify 消息通知","children":Object(x.jsxs)(x.Fragment,{"children":[Object(x.jsx)(g.a,{"padding":!0,"title":"基础用法","children":Object(x.jsx)(y.c,{"type":"danger","onClick":this.showNotify,"children":"基础用法"})}),Object(x.jsxs)(g.a,{"padding":!0,"title":"通知类型","children":[Object(x.jsxs)(f.l,{"className":"demo-margin-bottom","children":[Object(x.jsx)(y.c,{"className":"demo-margin-right","type":"info","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"primary"}},"target":{"dataset":{"type":"primary"}}})},"children":"主要通知"}),Object(x.jsx)(y.c,{"className":"demo-margin-right","type":"primary","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"success"}},"target":{"dataset":{"type":"success"}}})},"children":"成功通知"})]}),Object(x.jsxs)(f.l,{"className":"demo-margin-bottom","children":[Object(x.jsx)(y.c,{"className":"demo-margin-right","type":"danger","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"danger"}},"target":{"dataset":{"type":"danger"}}})},"children":"危险通知"}),Object(x.jsx)(y.c,{"type":"warning","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"warning"}},"target":{"dataset":{"type":"warning"}}})},"children":"警告通知"})]})]}),Object(x.jsxs)(g.a,{"padding":!0,"title":"自定义通知","children":[Object(x.jsx)(y.c,{"type":"primary","className":"demo-margin-right","onClick":this.showCustomColor,"children":"自定义颜色"}),Object(x.jsx)(y.c,{"type":"primary","onClick":this.showCustomDuration,"children":"自定义时长"})]}),Object(x.jsx)(g.a,{"padding":!0,"title":"插入状态栏高度","children":Object(x.jsx)(y.c,{"type":"primary","className":"demo-margin-right","onClick":this.showSafe,"children":"插入状态栏高度"})}),Object(x.jsx)(y.I,{"id":"van-notify"})]})})}}]),Index}(p.Component)}}]);