(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8555],{3839:function(e,t,o){Promise.resolve().then(o.bind(o,5857))},2671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function i(e,t,o){this.props=e,this.context=t,this.refs=a,this.updater=o||r}function s(){}function c(e,t,o){this.props=e,this.context=t,this.refs=a,this.updater=o||r}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=i.prototype;var f=c.prototype=new s;f.constructor=c,n(f,i.prototype),f.isPureReactComponent=!0;var l=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)l.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var f=Array(c),p=0;p<c;p++)f[p]=arguments[p+2];a.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:null}}},2846:function(e,t,o){"use strict";e.exports=o(2671)},5857:function(e,t,o){"use strict";o.r(t);var r=o(7437),n=o(130),a=o(5306),i=o.n(a);t.default=e=>{let{variant:t="fixed"}=e;return(0,r.jsx)("div",{className:i().loading,style:{position:t},children:(0,r.jsx)("div",{className:i().loading__logo,children:(0,r.jsx)(n.mp,{})})})}},5306:function(e){e.exports={loading:"loading_loading__HySPd",loading__logo:"loading_loading__logo__0PYtv",anime_preloader:"loading_anime_preloader__GZOVs"}}},function(e){e.O(0,[130,2971,8069,1744],function(){return e(e.s=3839)}),_N_E=e.O()}]);