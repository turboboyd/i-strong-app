"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6348],{6348:function(e,t,n){n.r(t),n.d(t,{AppWeb:function(){return s}});var i=n(9263);class s extends i.Uw{constructor(){super(),this.handleVisibilityChange=()=>{let e={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",e),document.hidden?this.notifyListeners("pause",null):this.notifyListeners("resume",null)},document.addEventListener("visibilitychange",this.handleVisibilityChange,!1)}exitApp(){throw this.unimplemented("Not implemented on web.")}async getInfo(){throw this.unimplemented("Not implemented on web.")}async getLaunchUrl(){return{url:""}}async getState(){return{isActive:!0!==document.hidden}}async minimizeApp(){throw this.unimplemented("Not implemented on web.")}}}}]);