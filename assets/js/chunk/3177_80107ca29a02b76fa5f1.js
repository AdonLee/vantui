"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3177],{"73177":function(n,o,i){i.r(o),i.d(o,{"taro_canvas_core":function(){return h}});var e=i(45932),r=i.n(e),c=i(57961),s=i.n(c),a=i(47109),h=function(){function t(n){var o=this;(0,a.r)(this,n),this.onLongTap=(0,a.c)(this,"longtap",7),this.nativeProps={},this.onTouchStart=function(){o.timer=setTimeout((function(){o.onLongTap.emit()}),500)},this.onTouchMove=function(){clearTimeout(o.timer)},this.onTouchEnd=function(){clearTimeout(o.timer)}}return t.prototype.render=function(){var n=this.canvasId,o=this.nativeProps;return(0,a.h)("canvas",r()({"canvas-id":n,"style":{"width":"100%","height":"100%"},"onTouchStart":this.onTouchStart,"onTouchMove":this.onTouchMove,"onTouchEnd":this.onTouchEnd},o))},s()(t.prototype,"el",{"get":function get(){return(0,a.g)(this)},"enumerable":!1,"configurable":!0}),t}();h.style="taro-canvas-core{display:block;position:relative;width:300px;height:150px}"}}]);