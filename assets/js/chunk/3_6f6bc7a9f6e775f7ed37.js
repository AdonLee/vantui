"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3],{"315":function(o,r,t){t.r(r),t.d(r,{"taro_web_view_core":function(){return i}});var n=t(47109),i=function(){function e(o){(0,n.r)(this,o),this.onLoad=(0,n.c)(this,"load",7),this.onError=(0,n.c)(this,"error",7)}return e.prototype.render=function(){var o=this,r=o.src,t=o.onLoad,i=o.onError;return(0,n.h)("iframe",{"class":"taro-webview","onLoad":function onLoad(o){o.stopPropagation(),t.emit({"src":r})},"onError":function onError(o){o.stopPropagation(),i.emit({"src":r})},"src":r})},e}();i.style="iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;z-index:999;width:100%;height:100%}"}}]);