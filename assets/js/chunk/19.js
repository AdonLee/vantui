(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"518":function(e,t,r){"use strict";r.d(t,"n",(function(){return $})),r.d(t,"i",(function(){return G})),r.d(t,"k",(function(){return Q})),r.d(t,"b",(function(){return X})),r.d(t,"e",(function(){return ee})),r.d(t,"g",(function(){return te})),r.d(t,"l",(function(){return re})),r.d(t,"d",(function(){return ne})),r.d(t,"j",(function(){return oe})),r.d(t,"h",(function(){return ce})),r.d(t,"f",(function(){return ae})),r.d(t,"m",(function(){return ie})),r.d(t,"c",(function(){return se})),r.d(t,"a",(function(){return le}));var n=r(63),o=r.n(n),c=r(22),a=r.n(c),i=r(520),s=r.n(i),l=r(30),u=r.n(l),p=r(519),d=r.n(p),f=r(26),m=r.n(f),b=r(169),v=r.n(b),h=r(109),j=r.n(h),x=r(52),g=r.n(x),y=r(172),O=r.n(y),_=r(536),w=r.n(_),N=r(27),k=r.n(N),P=r(6),S=r.n(P),C=r(24),I=r.n(C),T=r(115),E=r.n(T),M=r(35),K=r.n(M),R=r(67),L=r.n(R),A=r(68),D=r.n(A),H=r(553),z=r.n(H),F=r(555),W=r.n(F),q=r(557),B=r.n(q),U=r(44),V=r.n(U);function ownKeys(e,t){var r=a()(e);if(s.a){var n=s()(e);t&&(n=u()(n).call(n,(function(t){return d()(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r,n=null!=arguments[t]?arguments[t]:{};if(t%2)m()(r=ownKeys(Object(n),!0)).call(r,(function(t){I()(e,t,n[t])}));else if(v.a)j()(e,v()(n));else{var o;m()(o=ownKeys(Object(n))).call(o,(function(t){g()(e,t,d()(n,t))}))}}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!O.a)return!1;if(O.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(O()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=B()(e);if(t){var o=B()(this).constructor;r=O()(n,arguments,o)}else r=n.apply(this,arguments);return W()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var c=e.ref.current,a=o[r],i=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,w()(arguments))}),e.eventHandlers.push([s,l]),c.addEventListener(s,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(n)if("string"==typeof i)c.style.cssText="";else for(var p in i)updateStyle(c,p,"");for(var d in a)updateStyle(c,d,a[d])}else c.className=n?function getClassName(e,t,r){var n,o=w()(e.classList),c=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),i=[];return m()(o).call(o,(function(e){k()(a).call(a,e)>-1?(i.push(e),a=u()(a).call(a,(function(t){return t!==e}))):-1===k()(c).call(c,e)&&i.push(e)})),(i=S()(n=[]).call(n,V()(i),V()(a))).join(" ")}(c,n,o):a}var J=function reactifyWebComponent(e){var t=function(t){z()(Index,t);var r=_createSuper(Index);function Index(e){var t;return L()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return D()(Index,[{"key":"update","value":function update(t){var r,n,o=this;this.clearEventHandlers(),this.ref.current&&(m()(r=a()(t||{})).call(r,(function(r){"children"===r||"key"===r||r in o.props||updateProp(o,e,r,t,o.props)})),m()(n=a()(this.props)).call(n,(function(r){updateProp(o,e,r,t,o.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===K()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e,t=this;m()(e=this.eventHandlers).call(e,(function(e){var r=E()(e,2),n=r[0],o=r[1];t.ref.current&&t.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,c={"ref":this.ref};return o&&(c.dangerouslySetInnerHTML=o),Object(n.createElement)(e,c,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=a()(e);if(s.a){var n=s()(e);t&&(n=u()(n).call(n,(function(t){return d()(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r,n=null!=arguments[t]?arguments[t]:{};if(t%2)m()(r=input_ownKeys(Object(n),!0)).call(r,(function(t){I()(e,t,n[t])}));else if(v.a)j()(e,v()(n));else{var o;m()(o=input_ownKeys(Object(n))).call(o,(function(t){g()(e,t,d()(n,t))}))}}return e}var Y=J("taro-input-core"),Z=(o.a.createElement,o.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),o.a.createElement(Y,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),$=J("taro-view-core"),G=(J("taro-icon-core"),J("taro-progress-core"),J("taro-rich-text-core")),Q=J("taro-text-core"),X=J("taro-button-core"),ee=(J("taro-checkbox-core"),J("taro-checkbox-group-core"),J("taro-editor-core"),J("taro-form-core")),te=Z,re=(J("taro-label-core"),J("taro-picker-core"),J("taro-picker-view-core"),J("taro-picker-view-column-core"),J("taro-radio-core"),J("taro-radio-group-core"),J("taro-slider-core"),J("taro-switch-core"),J("taro-cover-image-core"),J("taro-textarea-core")),ne=J("taro-cover-view-core"),oe=(J("taro-movable-area-core"),J("taro-movable-view-core"),J("taro-scroll-view-core")),ce=(J("taro-swiper-core"),J("taro-swiper-item-core"),J("taro-functional-page-navigator-core"),J("taro-navigator-core")),ae=(J("taro-audio-core"),J("taro-camera-core"),J("taro-image-core")),ie=(J("taro-live-player-core"),J("taro-video-core")),se=(J("taro-map-core"),J("taro-canvas-core")),le=(J("taro-ad-core"),J("taro-official-account-core"),J("taro-open-data-core"),J("taro-web-view-core"),J("taro-navigation-bar-core"),n.Fragment);J("taro-custom-wrapper-core")},"519":function(e,t,r){e.exports=r(540)},"520":function(e,t,r){e.exports=r(535)},"522":function(e,t,r){var n=r(111);e.exports=function _defineProperty(e,t,r){return t in e?n(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},"523":function(e,t,r){var n=r(541),o=r(533),c=r(551);e.exports=function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,i=c(e,t);if(n){var s=n(e);for(a=0;a<s.length;a++)r=s[a],o(t).call(t,r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},"528":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(37),o=r(38),c=r(65),a=r(64),i=r(518),s=r(63),l=(r(529),r(108)),u=function(e){Object(c.a)(Index,e);var t=Object(a.a)(Index);function Index(){return Object(n.a)(this,Index),t.call(this)}return Object(o.a)(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,r=e.title,n=e.card;return Object(l.jsxs)(i.n,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[r&&Object(l.jsx)(i.n,{"className":"demo-block__title","children":r}),n?Object(l.jsx)(i.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(s.Component)},"529":function(e,t,r){},"531":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Page}));r(564);var n=r(527),o=r(518),c=r(87),a=r(578),i=r(75),s=r(63),l=(r(538),r(108));function Page(t){var r=t.title,u=t.className,p=void 0===u?"":u,d=t.children,f=c.a.useRouter().path;return Object(s.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(a.a)({"scrollTop":0})}),[f]),c.a.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":f}})),Object(l.jsxs)(o.n,{"className":"demo-page ".concat(p),"children":[Object(l.jsxs)(o.n,{"className":"demo-nav","children":[Object(l.jsx)(n.b,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return Object(i.d)()}}),Object(l.jsxs)(o.n,{"className":"demo-nav__title","children":[r," "]})]}),d]})}}).call(this,r(227))},"533":function(e,t,r){e.exports=r(550)},"535":function(e,t,r){var n=r(548);e.exports=n},"536":function(e,t,r){e.exports=r(228)},"538":function(e,t,r){},"540":function(e,t,r){var n=r(545);e.exports=n},"541":function(e,t,r){e.exports=r(549)},"542":function(e,t,r){e.exports=r(552)},"545":function(e,t,r){r(546);var n=r(11).Object,o=e.exports=function getOwnPropertyDescriptor(e,t){return n.getOwnPropertyDescriptor(e,t)};n.getOwnPropertyDescriptor.sham&&(o.sham=!0)},"546":function(e,t,r){var n=r(4),o=r(10),c=r(39),a=r(66).f,i=r(25),s=o((function(){a(1)}));n({"target":"Object","stat":!0,"forced":!i||s,"sham":!i},{"getOwnPropertyDescriptor":function getOwnPropertyDescriptor(e,t){return a(c(e),t)}})},"548":function(e,t,r){r(229);var n=r(11);e.exports=n.Object.getOwnPropertySymbols},"549":function(e,t,r){var n=r(535);e.exports=n},"550":function(e,t,r){var n=r(230);e.exports=n},"551":function(e,t,r){var n=r(542),o=r(533);e.exports=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,c,a={},i=n(e);for(c=0;c<i.length;c++)r=i[c],o(t).call(t,r)>=0||(a[r]=e[r]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},"552":function(e,t,r){var n=r(231);e.exports=n},"553":function(e,t,r){var n=r(554);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"554":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"555":function(e,t,r){var n=r(35).default,o=r(556);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"556":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"557":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"578":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n,o=r(5),c=r.n(o),a=r(3),i=r(43),s=r(16),l=function pageScrollTo(e){var t,r=e.scrollTop,o=e.selector,l=void 0===o?"":o,u=e.duration,p=void 0===u?300:u,d=e.success,f=e.fail,m=e.complete,b=new i.a({"name":"pageScrollTo","success":d,"fail":f,"complete":m});return new c.a((function(e,o){var c,i;try{if(void 0===r&&!l)return b.fail({"errMsg":'scrollTop" 或 "selector" 需要其之一'},o);var u=null===(i=null===(c=a.a.page)||void 0===c?void 0:c.path)||void 0===i?void 0:i.replace(/([^a-z0-9\u00a0-\uffff_-])/gi,"\\$1"),d=u?document.querySelector(".taro_page#".concat(u)):document.querySelector(".taro_page")||document.querySelector(".taro_router");t||(t=d?function scrollFunc(e){if(void 0===e)return d.scrollTop;d.scrollTop=e}:function scrollFunc(e){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}),r&&l&&console.warn('"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector');var f,m=t();if("number"==typeof r)f=r;else{var v=document.querySelector(l);f=(null==v?void 0:v.offsetTop)||0}var h=f-m,j=p/17,x=Object(s.d)(s.a,j);!function scroll(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=m+h*x(r);if(t(o),!(r<j))return b.success({},e);n&&clearTimeout(n),n=setTimeout((function(){scroll(r+1)}),17)}()}catch(e){return b.fail({"errMsg":e.message},o)}}))}},"588":function(e,t,r){"use strict";r.d(t,"a",(function(){return _objectSpread2}));var n=r(542),o=r.n(n),c=r(541),a=r.n(c),i=r(591),s=r.n(i),l=r(593),u=r.n(l),p=r(595),d=r.n(p),f=r(597),m=r.n(f),b=r(599),v=r.n(b),h=r(111),j=r.n(h),x=r(88);function ownKeys(e,t){var r=o()(e);if(a.a){var n=a()(e);t&&(n=s()(n).call(n,(function(t){return u()(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r,n=null!=arguments[t]?arguments[t]:{};if(t%2)d()(r=ownKeys(Object(n),!0)).call(r,(function(t){Object(x.a)(e,t,n[t])}));else if(m.a)v()(e,m()(n));else{var o;d()(o=ownKeys(Object(n))).call(o,(function(t){j()(e,t,u()(n,t))}))}}return e}},"591":function(e,t,r){e.exports=r(592)},"592":function(e,t,r){var n=r(232);e.exports=n},"593":function(e,t,r){e.exports=r(594)},"594":function(e,t,r){var n=r(540);e.exports=n},"595":function(e,t,r){e.exports=r(596)},"596":function(e,t,r){var n=r(233);e.exports=n},"597":function(e,t,r){e.exports=r(598)},"598":function(e,t,r){var n=r(235);e.exports=n},"599":function(e,t,r){e.exports=r(600)},"600":function(e,t,r){var n=r(234);e.exports=n},"607":function(e,t,r){},"609":function(e,t,r){"use strict";r.d(t,"a",(function(){return Tag}));var n=r(109),o=r.n(n),c=r(52),a=r.n(c),i=r(22),s=r.n(i),l=r(520),u=r.n(l),p=r(30),d=r.n(p),f=r(519),m=r.n(f),b=r(26),v=r.n(b),h=r(169),j=r.n(h),x=r(522),g=r.n(x),y=r(523),O=r.n(y),_=r(518),w=r(521),N=r(527),k=r(537);var P=r(108),S=["type","size","mark","plain","round","color","textColor","closeable","children","onClose","style","className"];function ownKeys(e,t){var r=s()(e);if(u.a){var n=u()(e);t&&(n=d()(n).call(n,(function(t){return m()(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r,n=null!=arguments[t]?arguments[t]:{};if(t%2)v()(r=ownKeys(Object(n),!0)).call(r,(function(t){g()(e,t,n[t])}));else if(j.a)o()(e,j()(n));else{var c;v()(c=ownKeys(Object(n))).call(c,(function(t){a()(e,t,m()(n,t))}))}}return e}function Tag(e){var t,r=e.type,n=void 0===r?"default":r,o=e.size,c=e.mark,a=e.plain,i=e.round,s=e.color,l=e.textColor,u=e.closeable,p=e.children,d=e.onClose,f=e.style,m=e.className,b=O()(e,S);return Object(P.jsxs)(_.n,_objectSpread(_objectSpread({"className":" "+w.b("tag",[n,o,{"mark":c,"plain":a,"round":i}])+" ".concat(m||""),"style":w.c([(t={"plain":a,"color":s,"textColor":l},Object(k.a)({"background-color":t.plain?"":t.color,"color":t.textColor||t.plain?t.textColor||t.color:""})),f])},b),{},{"children":[p,u&&Object(P.jsx)(N.a,{"name":"cross","className":"van-tag__close","onClick":d})]}))}t.b=Tag},"610":function(e,t,r){"use strict";r(524),r(530),r(532),r(607)},"770":function(e,t,r){},"850":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));r(610);var n=r(609),o=r(588),c=r(37),a=r(38),i=r(170),s=r(65),l=r(64),u=r(88),p=r(63),d=r(531),f=r(528),m=(r(770),r(108)),b=function(e){Object(s.a)(Index,e);var t=Object(l.a)(Index);function Index(){var e;return Object(c.a)(this,Index),e=t.call(this),Object(u.a)(Object(i.a)(e),"state",{"show":{"success":!0,"primary":!0}}),Object(u.a)(Object(i.a)(e),"onClose",(function(t){e.setState({"show":Object(o.a)(Object(o.a)({},e.state.show),{},Object(u.a)({},t.target.id,!1))})})),e}return Object(a.a)(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(m.jsx)(d.a,{"title":"Tag 标记","children":Object(m.jsxs)(m.Fragment,{"children":[Object(m.jsxs)(f.a,{"title":"基础用法","padding":!0,"children":[Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"primary","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"success","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"danger","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"warning","children":"标签"})]}),Object(m.jsxs)(f.a,{"title":"圆角样式","padding":!0,"children":[Object(m.jsx)(n.b,{"className":"demo-margin-right","round":!0,"type":"primary","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","round":!0,"type":"success","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","round":!0,"type":"danger","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","round":!0,"type":"warning","children":"标签"})]}),Object(m.jsxs)(f.a,{"title":"标记样式","padding":!0,"children":[Object(m.jsx)(n.b,{"className":"demo-margin-right","mark":!0,"type":"primary","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","mark":!0,"type":"success","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","mark":!0,"type":"danger","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","mark":!0,"type":"warning","children":"标签"})]}),Object(m.jsxs)(f.a,{"title":"空心样式","padding":!0,"children":[Object(m.jsx)(n.b,{"className":"demo-margin-right","plain":!0,"type":"primary","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","plain":!0,"type":"success","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","plain":!0,"type":"danger","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","plain":!0,"type":"warning","children":"标签"})]}),Object(m.jsxs)(f.a,{"title":"自定义颜色","padding":!0,"children":[Object(m.jsx)(n.b,{"className":"demo-margin-right","color":"#f2826a","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","color":"#7232dd","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","color":"#7232dd","plain":!0,"children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","color":"#ffe1e1","textColor":"#ad0000","children":"标签"})]}),Object(m.jsxs)(f.a,{"title":"标签大小","padding":!0,"children":[Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"danger","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"danger","size":"medium","children":"标签"}),Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"danger","size":"large","children":"标签"})]}),Object(m.jsxs)(f.a,{"title":"可关闭标签","padding":!0,"children":[e.primary&&Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"primary","size":"medium","closeable":!0,"id":"primary","onClose":this.onClose,"children":"标签"}),e.success&&Object(m.jsx)(n.b,{"className":"demo-margin-right","type":"success","size":"medium","closeable":!0,"id":"success","onClose":this.onClose,"children":"标签"})]})]})})}}]),Index}(p.Component)}}]);