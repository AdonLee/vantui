/*! For license information please see 1666.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[1666],{"94426":function(o,e,n){"use strict";n.d(e,{"a":function(){return createCommonjsModule},"b":function(){return a},"c":function(){return c},"g":function(){return getDefaultExportFromCjs}});var i=n(19623),s=n(92381),u=n.n(s),a=void 0!==u()?u():"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function createCommonjsModule(o,e,n){return o(n={"path":e,"exports":{},"require":function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var c=createCommonjsModule((function(o){!function(){var e={}.hasOwnProperty;function r(){for(var o=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var u=(0,i.Z)(s);if("string"===u||"number"===u)o.push(s);else if(Array.isArray(s)){if(s.length){var a=r.apply(null,s);a&&o.push(a)}}else if("object"===u)if(s.toString===Object.prototype.toString)for(var c in s)e.call(s,c)&&s[c]&&o.push(c);else o.push(s.toString())}}return o.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r}()}))},"91666":function(o,e,n){"use strict";n.r(e),n.d(e,{"taro_cover_view_core":function(){return c}});var i=n(76986),s=n.n(i),u=n(20139),a=n(94426),c=function(){function t(o){(0,u.r)(this,o),this.onLongPress=(0,u.c)(this,"longpress",7),this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1,this.startTime=0}return t.prototype.onTouchStart=function(){var o=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){o.touch&&(o.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){o.onLongPress.emit()}),350),this.startTime=Date.now()},t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},t.prototype.onTouchEnd=function(){var o=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){o.touch||(o.hover=!1)}),this.hoverStayTime))},t.prototype.render=function(){var o,e=(0,a.c)(((o={})[""+this.hoverClass]=this.hover,o)),n={};return this.animation&&(n.animation=this.animation,n["data-animation"]=this.animation),(0,u.h)(u.H,s()({"class":e},n),(0,u.h)("slot",null))},t}();c.style="taro-cover-view-core{display:block}"},"5023":function(o,e,n){var i=n(72369);o.exports=i},"91031":function(o,e,n){n(52595),o.exports=n(21899)},"30888":function(o,e,n){o.exports=n(51403)},"51403":function(o,e,n){n(9668);var i=n(5023);o.exports=i},"52595":function(o,e,n){n(76887)({"global":!0},{"globalThis":n(21899)})},"9668":function(o,e,n){n(52595)},"72369":function(o,e,n){var i=n(91031);o.exports=i},"92381":function(o,e,n){o.exports=n(30888)}}]);