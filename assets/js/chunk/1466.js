"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1466],{"41466":function(e,n,i){i.r(n),i.d(n,{"taro_audio_core":function(){return d}});var o=i(76986),r=i.n(o),s=i(20139),d=function(){function t(e){(0,s.r)(this,e),this.onError=(0,s.c)(this,"error",7),this.onPlay=(0,s.c)(this,"play",7),this.onPause=(0,s.c)(this,"pause",7),this.onTimeUpdate=(0,s.c)(this,"timeupdate",7),this.onEnded=(0,s.c)(this,"ended",7),this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.nativeProps={}}return t.prototype.bindevent=function(){var e=this;this.audio.addEventListener("timeupdate",(function(n){e.onTimeUpdate.emit({"duration":n.srcElement.duration,"currentTime":n.srcElement.duration})})),this.audio.addEventListener("ended",(function(){e.onEnded.emit()})),this.audio.addEventListener("play",(function(){e.onPlay.emit()})),this.audio.addEventListener("pause",(function(n){e.onPause.emit(n)})),this.audio.addEventListener("error",(function(n){var i;e.onError.emit({"errMsg":null===(i=n.srcElement.error)||void 0===i?void 0:i.code})}))},t.prototype.componentDidLoad=function(){this.bindevent()},t.prototype.render=function(){var e=this,n=this,i=n.src,o=n.controls,d=n.autoplay,a=n.loop,u=n.muted,c=n.nativeProps;return(0,s.h)("audio",r()({"src":i,"controls":o,"autoplay":d,"loop":a,"muted":u,"ref":function ref(n){e.audio=n}},c))},t}();d.style="audio{max-width:100%;outline:none}"}}]);