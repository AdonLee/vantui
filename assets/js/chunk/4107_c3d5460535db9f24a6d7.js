/*! For license information please see 4107_c3d5460535db9f24a6d7.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4107],{"7430":function(e,r,t){t.d(r,{"pf":function(){return i},"G7":function(){return c},"Ho":function(){return a},"xv":function(){return s},"zx":function(){return u},"l0":function(){return l},"gx":function(){return d},"C3":function(){return f},"Ee":function(){return p},"nk":function(){return m},"Xz":function(){return v},"gO":function(){return h}});var n=t(2784),o=t(4123),i=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core"),(0,o.Z)("taro-movable-view-core"),(0,o.Z)("taro-page-container-core"),(0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),c=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core"),(0,o.Z)("taro-swiper-item-core"),(0,o.Z)("taro-view-core")),a=((0,o.Z)("taro-icon-core"),(0,o.Z)("taro-progress-core"),(0,o.Z)("taro-rich-text-core")),s=(0,o.Z)("taro-text-core"),u=(0,o.Z)("taro-button-core"),l=((0,o.Z)("taro-checkbox-core"),(0,o.Z)("taro-checkbox-group-core"),(0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),d=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core"),(0,o.Z)("taro-picker-core"),(0,o.Z)("taro-picker-view-core"),(0,o.Z)("taro-picker-view-column-core"),(0,o.Z)("taro-radio-core"),(0,o.Z)("taro-radio-group-core"),(0,o.Z)("taro-slider-core"),(0,o.Z)("taro-switch-core"),(0,o.Z)("taro-textarea-core")),f=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core")),p=((0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core"),(0,o.Z)("taro-image-core")),m=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-live-pusher-core"),(0,o.Z)("taro-video-core")),v=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core")),h=((0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-web-view-core"),(0,o.Z)("taro-page-meta-core"),n.Fragment);(0,o.Z)("taro-custom-wrapper-core")},"4123":function(e,r,t){var n=t(6666),o=t(6234),i=t(6522),c=t(9249),a=t(7371),s=t(5754),u=t(1987),l=t(5058),d=t(8079),f=t(2784);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,n=(0,l.Z)(e);if(r){var o=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.Z)(this,t)}}f.createElement;var p="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||m.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,n,o){var i=e.ref.current,c=o[t],a=n?n[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&i.setAttribute(t,c),r===p){if("scrollTop"===t)return void(i.mpScrollTop=c);if("scrollLeft"===t)return void(i.mpScrollLeft=c);if("scrollIntoView"===t)return void(i.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=c;return r===p&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),i.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(i.setAttribute(t,c),void(i[t]=c)):"boolean"==typeof c?c?(i[t]=!0,i.setAttribute(t,c)):(i[t]=!1,i.removeAttribute(t)):void(i[t]=c)}if("string"==typeof c)return void i.setAttribute(t,c);if(!c)return void i.removeAttribute(t);if(n)if("string"==typeof a)i.style.cssText="";else for(var l in a)updateStyle(i,l,"");for(var f in c)updateStyle(i,f,c[f])}else i.className=n?function getClassName(e,r,t){var n=Array.from(e.classList),o=(r.className||r.class||"").split(" "),i=(t.className||t.class||"").split(" "),c=[];return n.forEach((function(e){i.indexOf(e)>-1?(c.push(e),i=i.filter((function(r){return r!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat((0,d.Z)(c),(0,d.Z)(i))).join(" ")}(i,n,o):c}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,c.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,f.createRef)(),r}return(0,a.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(n){"children"===n||"key"===n||n in t.props||updateProp(t,e,n,r,t.props)})),Object.keys(this.props).forEach((function(n){updateProp(t,e,n,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,i.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],i=t[1];e.ref.current&&e.ref.current.removeEventListener(n,i)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,f.createElement)(e,o,t)}}]),Index}(f.Component);return f.forwardRef((function(e,t){return f.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"4679":function(e,r,t){t.d(r,{"Z":function(){return l}});var n=t(9249),o=t(7371),i=t(5754),c=t(6906),a=t(7430),s=t(2784),u=t(2322),l=function(e){(0,i.Z)(Index,e);var r=(0,c.Z)(Index);function Index(){return(0,n.Z)(this,Index),r.call(this)}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this.props,r=e.padding,t=e.title,n=e.card;return(0,u.jsxs)(a.G7,{"className":"custom-class demo-block van-clearfix "+(r?"demo-block--padding":""),"children":[t&&(0,u.jsx)(a.G7,{"className":"demo-block__title","children":t}),n?(0,u.jsx)(a.G7,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(s.Component)},"4376":function(e,r,t){t.d(r,{"Z":function(){return Page}});var n=t(5273),o=t(7430),i=t(4801),c=t(3829),a=t(2784),s=t(2322);function Page(e){var r=e.title,t=e.className,u=void 0===t?"":t,l=e.children,d=i.ZPm.useRouter().path;return(0,a.useEffect)((function(){document.body.scrollTop=document.documentElement.scrollTop=0}),[d]),i.ZPm.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":d}})),(0,s.jsxs)(o.G7,{"className":"demo-page ".concat(u),"children":[(0,s.jsxs)(o.G7,{"className":"demo-nav","children":[(0,s.jsx)(n.Z,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return(0,c.n)()}}),(0,s.jsxs)(o.G7,{"className":"demo-nav__title","children":[r," "]})]}),l]})}},"4107":function(e,r,t){t.r(r),t.d(r,{"default":function(){return h}});var n=t(9249),o=t(7371),i=t(753),c=t(5754),a=t(6906),s=t(6666),u=t(2784),l=t(4376),d=t(4679),f=t(2704),p=t(4762),m=t(2322);function Demo(){return(0,m.jsxs)(f.Z,{"children":[(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"})]})}function demo2_Demo(){return(0,m.jsx)(f.Z,{"columnNum":"3","children":(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"})})}var v=t(1212);function demo3_Demo(){return(0,m.jsx)(f.Z,{"columnNum":"3","border":!1,"children":[1,2,3].map((function(e,r){return(0,m.jsx)(p.Z,{"forItem":"index","children":(0,m.jsx)(v.Z,{"style":"width: 100%; height: 90px;","src":"https://img.yzcdn.cn/vant/apple-".concat(r+1,".jpg")})},r)}))})}function demo4_Demo(){return(0,m.jsxs)(f.Z,{"square":!0,"iconSize":"48","children":[(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"})]})}function demo5_Demo(){return(0,m.jsxs)(f.Z,{"gutter":10,"children":[(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"})]})}function demo6_Demo(){return(0,m.jsxs)(f.Z,{"direction":"horizontal","columnNum":"2","children":[(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"}),(0,m.jsx)(p.Z,{"icon":"photo-o","text":"文字"})]})}function demo7_Demo(){return(0,m.jsxs)(f.Z,{"clickable":!0,"columnNum":"2","children":[(0,m.jsx)(p.Z,{"icon":"homeO","linkType":"navigateTo","url":"/pages/dashboard/index","text":"Navigate 跳转"}),(0,m.jsx)(p.Z,{"icon":"search","linkType":"reLaunch","url":"/pages/dashboard/index","text":"ReLaunch 跳转"})]})}function demo8_Demo(){return(0,m.jsxs)(f.Z,{"columnNum":"2","children":[(0,m.jsx)(p.Z,{"icon":"home-o","text":"文字","dot":!0}),(0,m.jsx)(p.Z,{"icon":"search","text":"文字","badge":"99+"})]})}var h=function(e){(0,c.Z)(Index,e);var r=(0,a.Z)(Index);function Index(){var e;return(0,n.Z)(this,Index),e=r.call(this),(0,s.Z)((0,i.Z)(e),"state",{"active":0}),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){return(0,m.jsxs)(l.Z,{"title":"Grid 宫格","className":"pages-grid-index","children":[(0,m.jsx)(d.Z,{"title":"基本用法","padding":!0,"children":(0,m.jsx)(Demo,{})}),(0,m.jsx)(d.Z,{"title":"自定义列数","padding":!0,"children":(0,m.jsx)(demo2_Demo,{})}),(0,m.jsx)(d.Z,{"title":"自定义内容","padding":!0,"children":(0,m.jsx)(demo3_Demo,{})}),(0,m.jsx)(d.Z,{"title":"正方形格子","padding":!0,"children":(0,m.jsx)(demo4_Demo,{})}),(0,m.jsx)(d.Z,{"title":"格子间距","padding":!0,"children":(0,m.jsx)(demo5_Demo,{})}),(0,m.jsx)(d.Z,{"title":"内容横排","padding":!0,"children":(0,m.jsx)(demo6_Demo,{})}),(0,m.jsx)(d.Z,{"title":"页面跳转","padding":!0,"children":(0,m.jsx)(demo7_Demo,{})}),(0,m.jsx)(d.Z,{"title":"提示信息","padding":!0,"children":(0,m.jsx)(demo8_Demo,{})})]})}}]),Index}(u.Component)},"2181":function(e,r,t){t.d(r,{"s":function(){return jumpLink}});var n=t(3829);function jumpLink(e,r){var t;if(r=null!==(t=r)&&void 0!==t?t:"navigateTo",e)if("navigateTo"===r&&(0,n.s_)().length>9)(0,n.gB)({"url":e});else switch(r){case"navigateTo":(0,n.T8)({"url":e});break;case"reLaunch":(0,n.UY)({"url":e});break;case"redirectTo":(0,n.gB)({"url":e})}}},"4762":function(e,r,t){t.d(r,{"Z":function(){return m}});var n=t(6234),o=t(2159),i=t(7430),c=t(2784),a=t(2181),s=t(1152),u=t(5273),l=t(1248),d=t(7546);function wrapperStyle(e){var r=100/e.columnNum+"%";return(0,l.o)({"width":r,"padding-top":e.square?r:null,"padding-right":(0,d.N)(e.gutter),"margin-top":e.index>=e.columnNum&&!e.square?(0,d.N)(e.gutter):null})}function contentStyle(e){return e.square?(0,l.o)({"right":(0,d.N)(e.gutter),"bottom":(0,d.N)(e.gutter),"height":"auto"}):""}var f=t(2322),p=["icon","iconColor","iconPrefix","dot","info","badge","text","setChildrenInstance","parentInstance","index","url","linkType","style","className"];var m=function GridItem(e){var r=e.icon,t=e.iconColor,l=e.iconPrefix,d=void 0===l?"van-icon":l,m=e.dot,v=e.info,h=e.badge,y=e.text,x=e.setChildrenInstance,g=e.parentInstance,j=e.index,b=e.url,Z=e.linkType,O=e.style,w=e.className,_=(0,o.Z)(e,p),N=(0,c.useState)({}),k=(0,n.Z)(N,2),P=k[0],S=k[1];(0,c.useEffect)((function(){x(j,{"updateStyle":E})}),[j,x]),(0,c.useEffect)((function(){E()}),[g.columnNum]);var E=(0,c.useCallback)((function(){var e=g.columnNum,r=g.border,t=g.square,n=g.gutter,o=g.clickable,i=g.center,c=g.direction,a=g.reverse,s=g.iconSize;S({"center":i,"border":r,"square":t,"gutter":n,"clickable":o,"direction":c,"reverse":a,"iconSize":s,"index":j,"columnNum":e})}),[g,j]);return(0,f.jsx)(i.G7,{"className":" "+s.PH("grid-item",{"square":null==P?void 0:P.square})+" "+w,"style":s.oB([wrapperStyle({"square":null==P?void 0:P.square,"gutter":null==P?void 0:P.gutter,"columnNum":null==P?void 0:P.columnNum,"index":null==P?void 0:P.index}),O]),"onClick":function onClick(e){var r;b&&(0,a.s)(b,Z),null==_||null===(r=_.onClick)||void 0===r||r.call(_,e)},"children":(0,f.jsx)(i.G7,{"className":"content-class "+s.PH("grid-item__content",[null==P?void 0:P.direction,{"center":null==P?void 0:P.center,"square":null==P?void 0:P.square,"reverse":null==P?void 0:P.reverse,"clickable":null==P?void 0:P.clickable,"surround":(null==P?void 0:P.border)&&(null==P?void 0:P.gutter)}])+" "+(null!=P&&P.border?"van-hairline--surround":""),"style":contentStyle({"square":null==P?void 0:P.square,"gutter":null==P?void 0:P.gutter}),"children":_.children||(0,f.jsxs)(f.Fragment,{"children":[(0,f.jsx)(i.G7,{"className":"van-grid-item__icon icon-class","children":r?(0,f.jsx)(u.Z,{"name":r,"color":t,"classPrefix":d,"dot":m,"info":h||v,"size":null==P?void 0:P.iconSize}):P.renderIcon}),(0,f.jsx)(i.G7,{"className":"van-grid-item__text text-class","children":y?(0,f.jsx)(i.xv,{"children":y}):P.renderText})]})})})}},"2704":function(e,r,t){t.d(r,{"Z":function(){return d}});var n=t(2159),o=t(7430),i=t(2784),c=t(1152),a=t(1248),s=t(7546);function rootStyle(e){return(0,a.o)({"padding-left":(0,s.N)(e.gutter)})}var u=t(2322),l=["gutter","clickable","columnNum","center","border","direction","iconSize","square","reverse","className","style"];var d=function Grid(e){var r=e.gutter,t=void 0===r?null:r,a=e.clickable,s=e.columnNum,d=void 0===s?4:s,f=e.center,p=void 0===f||f,m=e.border,v=void 0===m||m,h=e.direction,y=e.iconSize,x=void 0===y?"48":y,g=e.square,j=e.reverse,b=void 0!==j&&j,Z=e.className,O=void 0===Z?"":Z,w=e.style,_=void 0===w?{}:w,N=(0,n.Z)(e,l),k=(0,i.useRef)([]),P=(0,i.useCallback)((function(){k.current.forEach((function(e){e.updateStyle()}))}),[]);(0,i.useEffect)((function(){P()}),[P]);var S=(0,i.useCallback)((function(e,r){k.current[e]=r}),[]),E=(0,i.useMemo)((function(){var e=[];return N.children&&Array.isArray(N.children)&&N.children.forEach((function(r,n){e.push((0,i.cloneElement)(r,{"setChildrenInstance":S,"key":n,"index":n,"parentInstance":{"columnNum":d,"border":v,"square":g,"gutter":t,"clickable":a,"center":p,"direction":h,"reverse":b,"iconSize":x}}))})),e}),[N.children,d]);return(0,u.jsx)(o.G7,{"className":"van-grid  "+(v&&!t?"van-hairline--top":"")+" "+O,"style":c.oB([rootStyle({"gutter":t}),_]),"children":E})}},"5273":function(e,r,t){t.d(r,{"J":function(){return Icon},"Z":function(){return f}});var n=t(6666),o=t(2159),i=t(7430),c=t(1152),a=t(3162),s=t(1248),u=t(7546);function isImage(e){return-1!==e.indexOf("/")}function rootClass(e){var r=[];if(e.classPrefix&&r.push(e.classPrefix),isImage(e.name))r.push("van-icon--image");else{var t=e.classPrefix?"".concat(e.classPrefix,"-").concat(e.name):e.name;r.push(t)}return r.join(" ")}function rootStyle(e){return(0,s.o)([{"color":e.color,"font-size":(0,u.N)(e.size)}])}var l=t(2322),d=["classPrefix","name","color","size","dot","info","style","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Icon(e){var r=e.classPrefix,t=void 0===r?"van-icon":r,n=e.name,s=e.color,u=e.size,f=e.dot,p=e.info,m=e.style,v=e.className,h=(0,o.Z)(e,d);return(0,l.jsxs)(i.G7,_objectSpread(_objectSpread({"className":rootClass({"classPrefix":t,"name":n})+" ".concat(v||""),"style":c.oB([rootStyle({"color":s,"size":u}),m])},h),{},{"children":[(p||0===p||f)&&(0,l.jsx)(a.k,{"dot":f,"info":p,"className":"van-icon__info"}),isImage(n)&&(0,l.jsx)(i.Ee,{"src":n,"mode":"aspectFit","className":"van-icon__image"})]}))}var f=Icon},"1212":function(e,r,t){t.d(r,{"Z":function(){return m}});var n=t(6666),o=t(6234),i=t(2159),c=t(2784),a=t(7430),s=t(1152),u=t(5273),l=t(7546);var d={"none":"scaleToFill","fill":"scaleToFill","cover":"aspectFill","contain":"aspectFit","widthFix":"widthFix","heightFix":"heightFix","scaleDown":"aspectFit"};function mode(e){return d[e]}var f=t(2322),p=["src","round","width","height","radius","lazyLoad","showMenuByLongpress","fit","showError","showLoading","className","style","renderError","renderLoading"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=function Image(e){var r=e.src,t=e.round,n=e.width,d=e.height,m=e.radius,v=e.lazyLoad,h=e.showMenuByLongpress,y=e.fit,x=e.showError,g=void 0===x||x,j=e.showLoading,b=void 0===j||j,Z=e.className,O=e.style,w=e.renderError,_=e.renderLoading,N=(0,i.Z)(e,p),k=(0,c.useState)(),P=(0,o.Z)(k,2),S=P[0],E=P[1],I=(0,c.useState)(!1),D=(0,o.Z)(I,2),C=D[0],L=D[1];(0,c.useLayoutEffect)((function(){C&&L(!1)}),[r]),(0,c.useEffect)((function(){void 0===S&&E(!0),L(!1)}),[S]);var z,T=(0,c.useCallback)((function(){E(!1)}),[]),G=(0,c.useCallback)((function(){L(!0)}),[]),R=(0,c.useMemo)((function(){var e={};return"heightFix"!==y&&"widthFix"!==y||(e={"display":"flex","alignItems":"center","justifyContent":"center"}),e}),[y]);return(0,f.jsxs)(a.G7,_objectSpread(_objectSpread({"style":s.oB([(z={"width":n,"height":d,"radius":m},(0,s.oB)([{"width":(0,l.N)(z.width),"height":(0,l.N)(z.height),"border-radius":(0,l.N)(z.radius)},z.radius?"overflow: hidden":null])),O]),"className":" "+s.PH("image",{"round":t})+" "+Z,"onClick":N.onClick},N),{},{"children":[!C&&(0,f.jsx)(a.Ee,{"src":r,"mode":mode(y||"none"),"lazyLoad":v,"className":"image-class van-image__img","showMenuByLongpress":h,"onLoad":T,"onError":G,"style":R}),S&&b&&(0,f.jsx)(a.G7,{"className":"loading-class van-image__loading","children":_||(0,f.jsx)(u.Z,{"name":"photo","className":"van-image__loading-icon"})}),C&&g&&(0,f.jsx)(a.G7,{"className":"error-class van-image__error","children":w||(0,f.jsx)(u.Z,{"name":"photo-fail","className":"van-image__error-icon"})})]}))}},"3162":function(e,r,t){t.d(r,{"k":function(){return Info}});var n=t(6666),o=t(2159),i=t(7430),c=t(1152),a=t(2322),s=["dot","info","style","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Info(e){var r=e.dot,t=e.info,n=void 0===t?null:t,u=e.style,l=e.className,d=(0,o.Z)(e,s);return(0,a.jsx)(a.Fragment,{"children":(n||0===n||r)&&(0,a.jsx)(i.G7,_objectSpread(_objectSpread({"className":"van-info "+c.PH("info",{"dot":r})+"  "+l,"style":c.oB([u])},d),{},{"children":r?"":n}))})}r.Z=Info},"7546":function(e,r,t){t.d(r,{"N":function(){return addUnit}});var n=t(4801);function addUnit(e){if(null!=e)return/^-?\d+(\.\d+)?$/.test(""+e)?n.ZPm.pxTransform(e):e}},"8043":function(e,r,t){function isArray(e){return e&&"[object Array]"===toString.call(e)}t.d(r,{"k":function(){return isArray}})},"4560":function(e,r,t){t.d(r,{"X":function(){return keys}});var n=new RegExp('{|}|"',"g");function keys(e){return JSON.stringify(e).replace(n,"").split(",").map((function(e){return e.split(":")[0]}))}},"1248":function(e,r,t){t.d(r,{"o":function(){return style}});var n=t(8043),o=t(4560);function style(e){return n.k(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return style(e)})).join(";")||"":"[object Object]"===toString.call(e)?o.X(e).filter((function(r){return null!=e[r]&&""!==e[r]})).map((function(r){return[(t=r,null===(n=t.replace(new RegExp("[A-Z]","g"),(function(e){return"-"+e})))||void 0===n?void 0:n.toLowerCase()),[e[r]]].join(":");var t,n})).join(";")||"":e||""}},"1152":function(e,r,t){t.d(r,{"Nn":function(){return a.N},"PH":function(){return u},"oB":function(){return s.o}});var n=t(6522),o=t(8043),i=t(4560),c="van-";function traversing(e,r){r&&("string"==typeof r||"number"==typeof r?e.push(r):o.k(r)?r.forEach((function(r){traversing(e,r)})):"object"===(0,n.Z)(r)&&i.X(r).forEach((function(t){r[t]&&e.push(t)})))}function serializer(e){if(1===e.length&&function isPrimitive(e){var r=(0,n.Z)(e);return"boolean"===r||"number"===r||"string"===r||"undefined"===r||null===e}(e[0]))return e[0];for(var r={},t=0;t<e.length;t++)r["key"+t]=e[t];return JSON.stringify(r)}var a=t(7546),s=t(1248),u=function memoize(e){var r={};return function(){var t=serializer(arguments);return void 0===r[t]&&(r[t]=function call(e,r){return 2===r.length?e(r[0],r[1]):1===r.length?e(r[0]):e()}(e,arguments)),r[t]}}((function _bem(e,r){var t=[];return traversing(t,r),function join(e,r){return e=c+e,(r=r.map((function(r){return e+"--"+r}))).unshift(e),r.join(" ")}(e,t)}))},"1837":function(e,r,t){var n=t(2784),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var n,i={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":i,"_owner":a.current}}r.Fragment=i,r.jsx=q,r.jsxs=q},"2322":function(e,r,t){e.exports=t(1837)},"2159":function(e,r,t){function _objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(r,{"Z":function(){return _objectWithoutProperties}})}}]);