(self.webpackJsonp=self.webpackJsonp||[]).push([[3950],{"23950":function(t,n,o){"use strict";o.r(n),o.d(n,{"taro_movable_area_core":function(){return m}});var i=o(21463),l=o.n(i),c=o(48621),s=o.n(c),h=o(14903),u=o.n(h),d=o(91092),v=o.n(d),f=o(57961),g=o.n(f),p=o(47109),m=function(){function e(t){var n=this;(0,p.r)(this,t),this.views=[],this.scaleLength=0,this.viewsChanged=function(){var t;n.views=[];var o=n.element.querySelectorAll("taro-movable-view-core");l()(t=s()(o)).call(t,(function(t){n.views.push(t)})),n.updateArea()},this.handleTouchStart=function(t){var o=t.touches;if(o&&!(o.length<=1)){var i=o[1].pageX-o[0].pageX,l=o[1].pageY-o[0].pageY;if(n.scaleLength=Math.sqrt(i*i+l*l),!n.scaleArea){var c=function r(t,n){for(var o=function a(t,n){return!!(t=t.parentNode)&&((!(t instanceof HTMLElement)||t!==document.body)&&(t===n||t===n.element||t.element===n||a(t,n)))},i=0;i<n.length;i++){var r=n[i];if(t===r.element||o(t,r))return r}},s=c(o[0].target,n.views),h=c(o[1].target,n.views);n.scaleTarget=s&&s===h?s:void 0}}},this.handleTouchMove=function(t){var o=t.touches;if(o&&!(o.length<=1)){t.preventDefault();var i=o[1].pageX-o[0].pageX,l=o[1].pageY-o[0].pageY;n.scaleLength>0&&n.updateScale(Math.sqrt(i*i+l*l)/n.scaleLength)}},this.handleTouchEnd=function(t){var o,i;if(!(t.touches&&t.touches.length||!t.changedTouches)){var c;if(n.scaleLength=0,n.scaleArea)l()(c=n.views).call(c,(function(t){var n;null===(n=t.endScale)||void 0===n||n.call(t)}));else null===(i=null===(o=n.scaleTarget)||void 0===o?void 0:o.endScale)||void 0===i||i.call(o);n.scaleTarget=void 0}},this.updateScale=function(t){var o,i,c;t&&1!==t&&(n.scaleArea?l()(c=n.views).call(c,(function(n){var o;null===(o=n.setScale)||void 0===o||o.call(n,t)})):null===(i=null===(o=n.scaleTarget)||void 0===o?void 0:o.setScale)||void 0===i||i.call(o,t))},this.updateArea=function(){var t,o,i,c=window.getComputedStyle(n.element),s=n.element.getBoundingClientRect(),h=u()(t=["Left","Right"]).call(t,(function(t){return v()(c["border"+t+"Width"])+v()(c["padding"+t])})),d=u()(o=["Top","Bottom"]).call(o,(function(t){return v()(c["border"+t+"Width"])+v()(c["padding"+t])}));l()(i=n.views).call(i,(function(t){var o;null===(o=t.setParent)||void 0===o||o.call(t,{"element":n.element,"area":{"height":s.height-d[0]-d[1],"width":s.width-h[0]-h[1]}})}))}}return e.prototype.connectedCallback=function(){var t=this;this.observer=new MutationObserver((function(n){l()(n).call(n,(function(n){var o,i;if("class"===n.attributeName||"style"===n.attributeName){var l=t.element.offsetWidth,c=t.element.offsetHeight;l===(null===(o=t.offset)||void 0===o?void 0:o.width)&&c===(null===(i=t.offset)||void 0===i?void 0:i.height)||t.updateArea(),t.offset={"width":l,"height":c}}}))})),this.observer.observe(this.element,{"attributes":!0})},e.prototype.disconnectedCallback=function(){var t;null===(t=this.observer)||void 0===t||t.disconnect()},e.prototype.componentDidLoad=function(){this.viewsChanged()},e.prototype.render=function(){return(0,p.h)(p.H,{"onTouchStart":this.handleTouchStart,"onTouchMove":this.handleTouchMove,"onTouchEnd":this.handleTouchEnd})},g()(e.prototype,"element",{"get":function get(){return(0,p.g)(this)},"enumerable":!1,"configurable":!0}),e}();m.style="taro-movable-area-core{display:block;height:10px;width:10px;position:relative}"},"48621":function(t,n,o){t.exports=o(53822)}}]);