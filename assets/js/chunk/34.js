(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"282":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Page}));var c=n(281),a=n(280),i=n(31),r=n(27),s=(n(283),n(44));function Page(t){var n=t.title,o=t.children;return Object(r.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(i.pageScrollTo)({"scrollTop":0})})),Object(s.jsxs)(a.m,{"className":"demo-page","children":[Object(s.jsxs)(a.m,{"className":"demo-nav","children":[Object(s.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(s.jsxs)(a.m,{"className":"demo-nav__title","children":[n," "]})]}),o]})}}).call(this,n(121))},"283":function(e,t,n){},"284":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(3),a=n.n(c),i=n(6),r=n.n(i),s=n(16),o=n.n(s),d=n(17),l=n.n(d),m=n(280),u=n(27),h=(n(285),n(44)),j=function(e){o()(Index,e);var t=l()(Index);function Index(){return a()(this,Index),t.call(this)}return r()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,c=e.card;return Object(h.jsxs)(m.m,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(h.jsx)(m.m,{"className":"demo-block__title","children":n}),c?Object(h.jsx)(m.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.Component)},"285":function(e,t,n){},"704":function(e,t,n){},"756":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var c=n(3),a=n.n(c),i=n(6),r=n.n(i),s=n(24),o=n.n(s),d=n(16),l=n.n(d),m=n(17),u=n.n(m),h=n(9),j=n.n(h),p=n(27),f=n(280),b=n(281),y=n(282),g=n(284),x=(n(704),n(44)),O=function(e){l()(Index,e);var t=u()(Index);function Index(){var e;return a()(this,Index),e=t.call(this),j()(o()(e),"showNotify",(function(){Object(b.nb)("通知内容")})),j()(o()(e),"showCustomColor",(function(){Object(b.nb)({"message":"自定义颜色","color":"#ad0000","background":"#ffe1e1"})})),j()(o()(e),"showCustomDuration",(function(){Object(b.nb)({"duration":1e3,"message":"自定义时长"})})),j()(o()(e),"showNotifyByType",(function(e){var t=e.currentTarget.dataset.type;Object(b.nb)({"type":t,"message":"通知内容"})})),j()(o()(e),"showSafe",(function(){Object(b.nb)({"message":"通知内容","safeAreaInsetTop":!0})})),e}return r()(Index,[{"key":"render","value":function render(){var e=this;return Object(x.jsx)(y.a,{"title":"Notify 消息通知","children":Object(x.jsxs)(x.Fragment,{"children":[Object(x.jsx)(g.a,{"padding":!0,"title":"基础用法","children":Object(x.jsx)(b.c,{"type":"danger","onClick":this.showNotify,"children":"基础用法"})}),Object(x.jsxs)(g.a,{"padding":!0,"title":"通知类型","children":[Object(x.jsxs)(f.m,{"className":"demo-margin-bottom","children":[Object(x.jsx)(b.c,{"className":"demo-margin-right","type":"info","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"primary"}},"target":{"dataset":{"type":"primary"}}})},"children":"主要通知"}),Object(x.jsx)(b.c,{"className":"demo-margin-right","type":"primary","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"success"}},"target":{"dataset":{"type":"success"}}})},"children":"成功通知"})]}),Object(x.jsxs)(f.m,{"className":"demo-margin-bottom","children":[Object(x.jsx)(b.c,{"className":"demo-margin-right","type":"danger","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"danger"}},"target":{"dataset":{"type":"danger"}}})},"children":"危险通知"}),Object(x.jsx)(b.c,{"type":"warning","onClick":function onClick(t){e.showNotifyByType({"detail":t.detail,"currentTarget":{"dataset":{"type":"warning"}},"target":{"dataset":{"type":"warning"}}})},"children":"警告通知"})]})]}),Object(x.jsxs)(g.a,{"padding":!0,"title":"自定义通知","children":[Object(x.jsx)(b.c,{"type":"primary","className":"demo-margin-right","onClick":this.showCustomColor,"children":"自定义颜色"}),Object(x.jsx)(b.c,{"type":"primary","onClick":this.showCustomDuration,"children":"自定义时长"})]}),Object(x.jsx)(g.a,{"padding":!0,"title":"插入状态栏高度","children":Object(x.jsx)(b.c,{"type":"primary","className":"demo-margin-right","onClick":this.showSafe,"children":"插入状态栏高度"})}),Object(x.jsx)(b.I,{"id":"van-notify"})]})})}}]),Index}(p.Component)}}]);