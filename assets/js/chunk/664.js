"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[664],{"10664":function(t,i,n){n.r(i),n.d(i,{"taro_switch_core":function(){return a}});var o=n(96718),c=n.n(o),s=n(76986),h=n.n(s),r=n(20139),a=function(){function e(t){var i=this;(0,r.r)(this,t),this.onChange=(0,r.c)(this,"change",7),this.type="switch",this.checked=!1,this.color="#04BE02",this.disabled=!1,this.nativeProps={},this.isWillLoadCalled=!1,this.switchChange=function(t){t.stopPropagation();var n=t.target.checked;i.isChecked=n,i.onChange.emit({"value":n})}}return e.prototype.function=function(t,i){this.isWillLoadCalled&&t!==i&&(this.isChecked=t)},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0,this.isChecked=this.checked},e.prototype.componentDidLoad=function(){var t=this;c()(this.el,"value",{"get":function get(){return t.isChecked},"configurable":!0})},e.prototype.render=function(){var t=this,i=t.type,n=t.color,o=t.isChecked,c=t.name,s=t.disabled,a=t.nativeProps,l=o?{"borderColor":n||"04BE02","backgroundColor":n||"04BE02"}:{};return(0,r.h)("input",h()({"type":"checkbox","class":"weui-"+i,"style":l,"checked":o,"name":c,"disabled":s,"onChange":this.switchChange},a))},c()(e.prototype,"el",{"get":function get(){return(0,r.g)(this)},"enumerable":!1,"configurable":!0}),c()(e,"watchers",{"get":function get(){return{"checked":["function"]}},"enumerable":!1,"configurable":!0}),e}();a.style="taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}"}}]);