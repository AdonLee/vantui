/*! For license information please see 79_98c0bfcc3207558cac2a.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[79],{"98840":function(t,a,n){"use strict";n.d(a,{"a":function(){return createCommonjsModule},"b":function(){return b},"c":function(){return d},"g":function(){return getDefaultExportFromCjs}});var i=n(99361),s=n(1858),l=n.n(s),b=void 0!==l()?l():"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,a,n){return t(n={"path":a,"exports":{},"require":function require(t,a){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var d=createCommonjsModule((function(t){!function(){var a={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var l=(0,i.Z)(s);if("string"===l||"number"===l)t.push(s);else if(Array.isArray(s)){if(s.length){var b=r.apply(null,s);b&&t.push(b)}}else if("object"===l)if(s.toString===Object.prototype.toString)for(var d in s)a.call(s,d)&&s[d]&&t.push(d);else t.push(s.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"94320":function(t,a,n){"use strict";n.r(a),n.d(a,{"taro_tabbar":function(){return k}});var i=n(83188),s=n.n(i),l=n(82985),b=n.n(l),d=n(40192),c=n.n(d),h=n(40453),u=n.n(h),f=n(21463),g=n.n(f),p=n(14903),m=n.n(p),_=n(57961),T=n.n(_),B=n(47109),w=n(3829),x=n(64801),H=n(98840),__spreadArray=function(t,a){for(var n=0,i=a.length,s=t.length;n<i;n++,s++)t[s]=a[n];return t},y=function splitUrl(t){var a,n=t||"",i={"path":null,"query":null,"fragment":null};return(a=s()(n).call(n,"#"))>-1&&(i.fragment=n.substring(a+1),n=n.substring(0,a)),(a=s()(n).call(n,"?"))>-1&&(i.query=n.substring(a+1),n=n.substring(0,a)),i.path=n,i},C=function addLeadingSlash(t){return void 0===t&&(t=""),"/"===t.charAt(0)?t:"/"+t},P=function stripBasename(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),function hasBasename(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),new RegExp("^"+a+"(\\/|\\?|#|$)","i").test(t)||t===a}(t,a)?t.substring(a.length):t};function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,a){for(var n=a,i=n+1,s=t.length;i<s;n+=1,i+=1)t[n]=t[i];t.pop()}var S=function TabbarItem(t){var a=t.index,n=t.isSelected,i=void 0!==n&&n,s=t.textColor,l=t.iconPath,b=t.badgeText,d=t.showRedDot,c=void 0!==d&&d,h=t.text,u=t.onSelect,f=(0,H.c)("weui-tabbar__item",{"weui-bar__item_on":i});return(0,B.h)("a",{"key":a,"href":"javascript:;","class":f,"onClick":function v(){u(a)}},(0,B.h)("span",{"style":{"display":"inline-block","position":"relative"}},(0,B.h)("img",{"src":l,"alt":"","class":"weui-tabbar__icon"}),!!b&&(0,B.h)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},b),c&&(0,B.h)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),(0,B.h)("p",{"class":"weui-tabbar__label","style":{"color":s}},h))},R="taro-tabbar__tabbar",k=function(){function e(t){var a=this;(0,B.r)(this,t),this.onLongPress=(0,B.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(t){var n,i=u()(n=a.customRoutes).call(n,(function(a){var n=a[1];return y(n).path===y(t).path}));return function stripSuffix(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),b()(t).call(t,a)?t.substring(0,t.length-a.length):t}(i.length?i[0][0]:t,".html")},this.getSelectedIndex=function(t){var n,i=-1;return g()(n=a.list).call(n,(function(a,n){var s=a.pagePath;y(t).path===y(s).path&&(i=n)})),i},this.switchTab=function(t){a.selectedIndex=t,(0,w.MR)({"url":a.list[t].pagePath})},this.switchTabHandler=function(t){var n=t.url,i=t.successHandler,s=t.errorHandler,l=function resolvePathname(t,a){void 0===a&&(a="");var n,i=t&&t.split("/")||[],s=a&&a.split("/")||[],l=t&&isAbsolute(t),b=a&&isAbsolute(a),d=l||b;if(t&&isAbsolute(t)?s=i:i.length&&(s.pop(),s=c()(s).call(s,i)),!s.length)return"/";if(s.length){var h=s[s.length-1];n="."===h||".."===h||""===h}else n=!1;for(var u=0,f=s.length;f>=0;f--){var g=s[f];"."===g?spliceOne(s,f):".."===g?(spliceOne(s,f),u++):u&&(spliceOne(s,f),u--)}if(!d)for(;u--;u)s.unshift("..");!d||""===s[0]||s[0]&&isAbsolute(s[0])||s.unshift("");var p=s.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p}(n,a.getOriginUrl(a.getCurrentUrl()||a.homePage)),b=a.getSelectedIndex(l);b>-1?(a.switchTab(b),i({"errMsg":"switchTab:ok"})):s({"errMsg":'switchTab:fail page "'+l+'" is not found'})},this.routerChangeHandler=function(t){var n,i,s=null===(n=null==t?void 0:t.toLocation)||void 0===n?void 0:n.path;if("string"==typeof s){var l=a.conf.basename||"/";i=P(C(s||a.homePage),l)||"/"}else i=a.getCurrentUrl();a.selectedIndex=a.getSelectedIndex(a.getOriginUrl(i))},this.setTabBarBadgeHandler=function(t){var n=t.index,i=t.text,s=t.successHandler,l=t.errorHandler,b=__spreadArray([],a.list);n in b?(b[n].showRedDot=!1,b[n].badgeText=i,s({"errMsg":"setTabBarBadge:ok"})):l({"errMsg":"setTabBarBadge:fail tabbar item not found"}),a.list=b},this.removeTabBarBadgeHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].badgeText=null,l[n].badgeText=null,i({"errMsg":"removeTabBarBadge:ok"})):s({"errMsg":"removeTabBarBadge:fail tabbar item not found"}),a.list=l},this.showTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].badgeText=null,l[n].showRedDot=!0,i({"errMsg":"showTabBarRedDot:ok"})):s({"errMsg":"showTabBarRedDot:fail tabbar item not found"}),a.list=l},this.hideTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].showRedDot=!1,i({"errMsg":"hideTabBarRedDot:ok"})):s({"errMsg":"hideTabBarRedDot:fail tabbar item not found"}),a.list=l},this.showTabBarHandler=function(t){var n=t.successHandler;a.status=0,n({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var n=t.animation,i=t.successHandler;a.status=n?2:1,i({"errMsg":"hideTabBar:ok"})},this.setTabBarStyleHandler=function(t){var n=t.color,i=t.selectedColor,s=t.backgroundColor,l=t.borderStyle,b=t.successHandler;s&&(a.backgroundColor=s),l&&(a.borderStyle=l),n&&(a.color=n),i&&(a.selectedColor=i),b({"errMsg":"setTabBarStyle:ok"})},this.setTabBarItemHandler=function(t){var n=t.index,i=t.iconPath,s=t.selectedIconPath,l=t.text,b=t.successHandler,d=t.errorHandler,c=__spreadArray([],a.list);n in c?(i&&(c[n].iconPath=i),s&&(c[n].selectedIconPath=s),l&&(c[n].text=l),b({"errMsg":"setTabBarItem:ok"})):d({"errMsg":"setTabBarItem:fail tabbar item not found"}),a.list=c};var n=this.conf.list,i=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(n)||n.length<2||n.length>5)throw new Error("tabBar 配置错误");this.homePage=C(this.conf.homePage);var l=function o(t){var a,n=i[t];t=C(t),"string"==typeof n?d.customRoutes.push([t,C(n)]):(null==n?void 0:n.length)>0&&(a=d.customRoutes).push.apply(a,m()(n).call(n,(function(a){return[t,C(a)]})))},d=this;for(var h in i)l(h);g()(n).call(n,(function(t){var a;0!==s()(a=t.pagePath).call(a,"/")&&(t.pagePath="/"+t.pagePath)})),this.list=n,this.borderStyle=this.conf.borderStyle,this.backgroundColor=this.conf.backgroundColor,this.color=this.conf.color,this.selectedColor=this.conf.selectedColor}return e.prototype.getCurrentUrl=function(){var t,a=this.conf.mode,n=this.conf.basename||"/";if("hash"===a){var i=window.location.href,l=s()(i).call(i,"#");t=-1===l?"":i.substring(l+1)}else t=location.pathname;var b=C(P(t,n));return decodeURI("/"===b?this.homePage:b)},e.prototype.bindEvent=function(){x.ZPm.eventCenter.on("__taroRouterChange",this.routerChangeHandler),x.ZPm.eventCenter.on("__taroSwitchTab",this.switchTabHandler),x.ZPm.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),x.ZPm.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),x.ZPm.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),x.ZPm.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),x.ZPm.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),x.ZPm.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler),x.ZPm.eventCenter.on("__taroSetTabBarStyle",this.setTabBarStyleHandler),x.ZPm.eventCenter.on("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.removeEvent=function(){x.ZPm.eventCenter.off("__taroRouterChange",this.routerChangeHandler),x.ZPm.eventCenter.off("__taroSwitchTab",this.switchTabHandler),x.ZPm.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),x.ZPm.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),x.ZPm.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),x.ZPm.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),x.ZPm.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),x.ZPm.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler),x.ZPm.eventCenter.off("__taroSetTabBarStyle",this.setTabBarStyleHandler),x.ZPm.eventCenter.off("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,a,n,i=this,s=this.tabbarPos,l=void 0===s?"bottom":s,b=this.status,d=(0,H.c)("weui-tabbar",((a={})["taro-tabbar__border-"+(this.borderStyle||"black")]=!0,a)),c=-1===this.selectedIndex||1===b,h=2===b;return(0,B.h)(B.H,{"class":(0,H.c)(R,"taro-tabbar__tabbar-"+l,(n={},n["taro-tabbar__tabbar-hide"]=c,n["taro-tabbar__tabbar-slideout"]=h,n))},(0,B.h)("div",{"class":d,"style":{"backgroundColor":this.backgroundColor||"","height":"inherit"}},m()(t=this.list).call(t,(function(t,a){var n,s,l=i.selectedIndex===a;return l?(n=i.selectedColor||"",s=t.selectedIconPath):(n=i.color||"",s=t.iconPath),(0,B.h)(S,{"index":a,"onSelect":i.switchTab.bind(i),"isSelected":l,"textColor":n,"iconPath":s,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},T()(e.prototype,"tabbar",{"get":function get(){return(0,B.g)(this)},"enumerable":!1,"configurable":!0}),e}();k.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-direction:column;flex-direction:column;height:100%}.taro-tabbar__panel{overflow:auto;position:relative;-ms-flex:1;flex:1;-webkit-overflow-scrolling:auto}.taro-tabbar__tabbar{position:relative;width:100%;height:50px;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom)}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"},"42142":function(t,a,n){var i=n(31585);t.exports=i},"74030":function(t,a,n){n(25067),t.exports=n(98576)},"36516":function(t,a,n){t.exports=n(79987)},"79987":function(t,a,n){n(5363);var i=n(42142);t.exports=i},"25067":function(t,a,n){n(93085)({"global":!0},{"globalThis":n(98576)})},"5363":function(t,a,n){n(25067)},"31585":function(t,a,n){var i=n(74030);t.exports=i},"1858":function(t,a,n){t.exports=n(36516)}}]);