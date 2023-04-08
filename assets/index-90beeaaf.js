function LA(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function MA(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={},FA={get exports(){return Gu},set exports(e){Gu=e}},af={},T={},UA={get exports(){return T},set exports(e){T=e}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),$A=Symbol.for("react.portal"),VA=Symbol.for("react.fragment"),BA=Symbol.for("react.strict_mode"),jA=Symbol.for("react.profiler"),zA=Symbol.for("react.provider"),HA=Symbol.for("react.context"),WA=Symbol.for("react.forward_ref"),qA=Symbol.for("react.suspense"),GA=Symbol.for("react.memo"),KA=Symbol.for("react.lazy"),Vv=Symbol.iterator;function YA(e){return e===null||typeof e!="object"?null:(e=Vv&&e[Vv]||e["@@iterator"],typeof e=="function"?e:null)}var bS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},TS=Object.assign,_S={};function Zs(e,t,n){this.props=e,this.context=t,this.refs=_S,this.updater=n||bS}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kS(){}kS.prototype=Zs.prototype;function Ym(e,t,n){this.props=e,this.context=t,this.refs=_S,this.updater=n||bS}var Xm=Ym.prototype=new kS;Xm.constructor=Ym;TS(Xm,Zs.prototype);Xm.isPureReactComponent=!0;var Bv=Array.isArray,xS=Object.prototype.hasOwnProperty,Qm={current:null},CS={key:!0,ref:!0,__self:!0,__source:!0};function IS(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)xS.call(t,r)&&!CS.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Za,type:e,key:s,ref:o,props:i,_owner:Qm.current}}function XA(e,t){return{$$typeof:Za,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Za}function QA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jv=/\/+/g;function _h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?QA(""+e.key):t.toString(36)}function bu(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Za:case $A:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+_h(o,0):r,Bv(i)?(n="",e!=null&&(n=e.replace(jv,"$&/")+"/"),bu(i,t,n,"",function(u){return u})):i!=null&&(Jm(i)&&(i=XA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jv,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Bv(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+_h(s,a);o+=bu(s,t,n,l,i)}else if(l=YA(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+_h(s,a++),o+=bu(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(e,t,n){if(e==null)return e;var r=[],i=0;return bu(e,r,"","",function(s){return t.call(n,s,i++)}),r}function JA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Tu={transition:null},ZA={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Tu,ReactCurrentOwner:Qm};Y.Children={map:Ml,forEach:function(e,t,n){Ml(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ml(e,function(){t++}),t},toArray:function(e){return Ml(e,function(t){return t})||[]},only:function(e){if(!Jm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Zs;Y.Fragment=VA;Y.Profiler=jA;Y.PureComponent=Ym;Y.StrictMode=BA;Y.Suspense=qA;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZA;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=TS({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Qm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)xS.call(t,l)&&!CS.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Za,type:e.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:HA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zA,_context:e},e.Consumer=e};Y.createElement=IS;Y.createFactory=function(e){var t=IS.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:WA,render:e}};Y.isValidElement=Jm;Y.lazy=function(e){return{$$typeof:KA,_payload:{_status:-1,_result:e},_init:JA}};Y.memo=function(e,t){return{$$typeof:GA,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Tu.transition;Tu.transition={};try{e()}finally{Tu.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return vt.current.useCallback(e,t)};Y.useContext=function(e){return vt.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};Y.useEffect=function(e,t){return vt.current.useEffect(e,t)};Y.useId=function(){return vt.current.useId()};Y.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return vt.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};Y.useRef=function(e){return vt.current.useRef(e)};Y.useState=function(e){return vt.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return vt.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(UA);const Lt=MA(T),zd=LA({__proto__:null,default:Lt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eP=T,tP=Symbol.for("react.element"),nP=Symbol.for("react.fragment"),rP=Object.prototype.hasOwnProperty,iP=eP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sP={key:!0,ref:!0,__self:!0,__source:!0};function AS(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)rP.call(t,r)&&!sP.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tP,type:e,key:s,ref:o,props:i,_owner:iP.current}}af.Fragment=nP;af.jsx=AS;af.jsxs=AS;(function(e){e.exports=af})(FA);const g=Gu.jsx,k=Gu.jsxs;var Hd={},Wd={},oP={get exports(){return Wd},set exports(e){Wd=e}},Bt={},qd={},aP={get exports(){return qd},set exports(e){qd=e}},PS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,z){var q=O.length;O.push(z);e:for(;0<q;){var H=q-1>>>1,he=O[H];if(0<i(he,z))O[H]=z,O[q]=he,q=H;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],q=O.pop();if(q!==z){O[0]=q;e:for(var H=0,he=O.length,ii=he>>>1;H<ii;){var gn=2*(H+1)-1,Zi=O[gn],Nt=gn+1,si=O[Nt];if(0>i(Zi,q))Nt<he&&0>i(si,Zi)?(O[H]=si,O[Nt]=q,H=Nt):(O[H]=Zi,O[gn]=q,H=gn);else if(Nt<he&&0>i(si,q))O[H]=si,O[Nt]=q,H=Nt;else break e}}return z}function i(O,z){var q=O.sortIndex-z.sortIndex;return q!==0?q:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,d=!1,m=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=O)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function S(O){if(w=!1,y(O),!m)if(n(l)!==null)m=!0,Wt(b);else{var z=n(u);z!==null&&mn(S,z.startTime-O)}}function b(O,z){m=!1,w&&(w=!1,v(x),x=-1),d=!0;var q=h;try{for(y(z),f=n(l);f!==null&&(!(f.expirationTime>z)||O&&!_e());){var H=f.callback;if(typeof H=="function"){f.callback=null,h=f.priorityLevel;var he=H(f.expirationTime<=z);z=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),y(z)}else r(l);f=n(l)}if(f!==null)var ii=!0;else{var gn=n(u);gn!==null&&mn(S,gn.startTime-z),ii=!1}return ii}finally{f=null,h=q,d=!1}}var I=!1,C=null,x=-1,F=5,$=-1;function _e(){return!(e.unstable_now()-$<F)}function Et(){if(C!==null){var O=e.unstable_now();$=O;var z=!0;try{z=C(!0,O)}finally{z?Ht():(I=!1,C=null)}}else I=!1}var Ht;if(typeof p=="function")Ht=function(){p(Et)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,xe=ke.port2;ke.port1.onmessage=Et,Ht=function(){xe.postMessage(null)}}else Ht=function(){E(Et,0)};function Wt(O){C=O,I||(I=!0,Ht())}function mn(O,z){x=E(function(){O(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){m||d||(m=!0,Wt(b))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var q=h;h=z;try{return O()}finally{h=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=h;h=O;try{return z()}finally{h=q}},e.unstable_scheduleCallback=function(O,z,q){var H=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?H+q:H):q=H,O){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,O={id:c++,callback:z,priorityLevel:O,startTime:q,expirationTime:he,sortIndex:-1},q>H?(O.sortIndex=q,t(u,O),n(l)===null&&O===n(u)&&(w?(v(x),x=-1):w=!0,mn(S,q-H))):(O.sortIndex=he,t(l,O),m||d||(m=!0,Wt(b))),O},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(O){var z=h;return function(){var q=h;h=z;try{return O.apply(this,arguments)}finally{h=q}}}})(PS);(function(e){e.exports=PS})(aP);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NS=T,Ut=qd;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RS=new Set,la={};function Wi(e,t){Ls(e,t),Ls(e+"Capture",t)}function Ls(e,t){for(la[e]=t,e=0;e<t.length;e++)RS.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,lP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zv={},Hv={};function uP(e){return Gd.call(Hv,e)?!0:Gd.call(zv,e)?!1:lP.test(e)?Hv[e]=!0:(zv[e]=!0,!1)}function cP(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fP(e,t,n,r){if(t===null||typeof t>"u"||cP(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zm=/[\-:]([a-z])/g;function eg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zm,eg);Xe[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zm,eg);Xe[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zm,eg);Xe[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function tg(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fP(t,n,i,r)&&(n=null),r||i===null?uP(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fl=Symbol.for("react.element"),is=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),OS=Symbol.for("react.provider"),DS=Symbol.for("react.context"),rg=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),ig=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),LS=Symbol.for("react.offscreen"),Wv=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Wv&&e[Wv]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,kh;function Co(e){if(kh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kh=t&&t[1]||""}return`
`+kh+e}var xh=!1;function Ch(e,t){if(!e||xh)return"";xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{xh=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Co(e):""}function hP(e){switch(e.tag){case 5:return Co(e.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return e=Ch(e.type,!1),e;case 11:return e=Ch(e.type.render,!1),e;case 1:return e=Ch(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ss:return"Fragment";case is:return"Portal";case Kd:return"Profiler";case ng:return"StrictMode";case Yd:return"Suspense";case Xd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case DS:return(e.displayName||"Context")+".Consumer";case OS:return(e._context.displayName||"Context")+".Provider";case rg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ig:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function dP(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===ng?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function MS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pP(e){var t=MS(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ul(e){e._valueTracker||(e._valueTracker=pP(e))}function FS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=MS(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ku(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jd(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function US(e,t){t=t.checked,t!=null&&tg(e,"checked",t,!1)}function Zd(e,t){US(e,t);var n=Vr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ep(e,t.type,n):t.hasOwnProperty("defaultValue")&&ep(e,t.type,Vr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ep(e,t,n){(t!=="number"||Ku(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function _s(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Io(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vr(n)}}function $S(e,t){var n=Vr(t.value),r=Vr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function VS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?VS(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $l,BS=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mP=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(e){mP.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fo[t]=Fo[e]})});function jS(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fo.hasOwnProperty(e)&&Fo[e]?(""+t).trim():t+"px"}function zS(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jS(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gP=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(e,t){if(t){if(gP[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ip(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function sg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var op=null,ks=null,xs=null;function Xv(e){if(e=nl(e)){if(typeof op!="function")throw Error(A(280));var t=e.stateNode;t&&(t=hf(t),op(e.stateNode,e.type,t))}}function HS(e){ks?xs?xs.push(e):xs=[e]:ks=e}function WS(){if(ks){var e=ks,t=xs;if(xs=ks=null,Xv(e),t)for(e=0;e<t.length;e++)Xv(t[e])}}function qS(e,t){return e(t)}function GS(){}var Ih=!1;function KS(e,t,n){if(Ih)return e(t,n);Ih=!0;try{return qS(e,t,n)}finally{Ih=!1,(ks!==null||xs!==null)&&(GS(),WS())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=hf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var ap=!1;if(Gn)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){ap=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{ap=!1}function yP(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,Yu=null,Xu=!1,lp=null,vP={onError:function(e){Uo=!0,Yu=e}};function wP(e,t,n,r,i,s,o,a,l){Uo=!1,Yu=null,yP.apply(vP,arguments)}function EP(e,t,n,r,i,s,o,a,l){if(wP.apply(this,arguments),Uo){if(Uo){var u=Yu;Uo=!1,Yu=null}else throw Error(A(198));Xu||(Xu=!0,lp=u)}}function qi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function YS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qv(e){if(qi(e)!==e)throw Error(A(188))}function SP(e){var t=e.alternate;if(!t){if(t=qi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qv(i),e;if(s===r)return Qv(i),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function XS(e){return e=SP(e),e!==null?QS(e):null}function QS(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=QS(e);if(t!==null)return t;e=e.sibling}return null}var JS=Ut.unstable_scheduleCallback,Jv=Ut.unstable_cancelCallback,bP=Ut.unstable_shouldYield,TP=Ut.unstable_requestPaint,Ce=Ut.unstable_now,_P=Ut.unstable_getCurrentPriorityLevel,og=Ut.unstable_ImmediatePriority,ZS=Ut.unstable_UserBlockingPriority,Qu=Ut.unstable_NormalPriority,kP=Ut.unstable_LowPriority,eb=Ut.unstable_IdlePriority,lf=null,kn=null;function xP(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(lf,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:AP,CP=Math.log,IP=Math.LN2;function AP(e){return e>>>=0,e===0?32:31-(CP(e)/IP|0)|0}var Vl=64,Bl=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ju(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ao(a):(s&=o,s!==0&&(r=Ao(s)))}else o=n&~i,o!==0?r=Ao(o):s!==0&&(r=Ao(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-cn(t),i=1<<n,r|=e[n],t&=~i;return r}function PP(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NP(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=PP(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function up(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tb(){var e=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),e}function Ah(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function el(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=n}function RP(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ag(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-cn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function nb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rb,lg,ib,sb,ob,cp=!1,jl=[],kr=null,xr=null,Cr=null,fa=new Map,ha=new Map,pr=[],OP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zv(e,t){switch(e){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(t.pointerId)}}function go(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=nl(t),t!==null&&lg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function DP(e,t,n,r,i){switch(t){case"focusin":return kr=go(kr,e,t,n,r,i),!0;case"dragenter":return xr=go(xr,e,t,n,r,i),!0;case"mouseover":return Cr=go(Cr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return fa.set(s,go(fa.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ha.set(s,go(ha.get(s)||null,e,t,n,r,i)),!0}return!1}function ab(e){var t=di(e.target);if(t!==null){var n=qi(t);if(n!==null){if(t=n.tag,t===13){if(t=YS(n),t!==null){e.blockedOn=t,ob(e.priority,function(){ib(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sp=r,n.target.dispatchEvent(r),sp=null}else return t=nl(n),t!==null&&lg(t),e.blockedOn=n,!1;t.shift()}return!0}function e0(e,t,n){_u(e)&&n.delete(t)}function LP(){cp=!1,kr!==null&&_u(kr)&&(kr=null),xr!==null&&_u(xr)&&(xr=null),Cr!==null&&_u(Cr)&&(Cr=null),fa.forEach(e0),ha.forEach(e0)}function yo(e,t){e.blockedOn===t&&(e.blockedOn=null,cp||(cp=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,LP)))}function da(e){function t(i){return yo(i,e)}if(0<jl.length){yo(jl[0],e);for(var n=1;n<jl.length;n++){var r=jl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kr!==null&&yo(kr,e),xr!==null&&yo(xr,e),Cr!==null&&yo(Cr,e),fa.forEach(t),ha.forEach(t),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)ab(n),n.blockedOn===null&&pr.shift()}var Cs=rr.ReactCurrentBatchConfig,Zu=!0;function MP(e,t,n,r){var i=te,s=Cs.transition;Cs.transition=null;try{te=1,ug(e,t,n,r)}finally{te=i,Cs.transition=s}}function FP(e,t,n,r){var i=te,s=Cs.transition;Cs.transition=null;try{te=4,ug(e,t,n,r)}finally{te=i,Cs.transition=s}}function ug(e,t,n,r){if(Zu){var i=fp(e,t,n,r);if(i===null)$h(e,t,r,ec,n),Zv(e,r);else if(DP(i,e,t,n,r))r.stopPropagation();else if(Zv(e,r),t&4&&-1<OP.indexOf(e)){for(;i!==null;){var s=nl(i);if(s!==null&&rb(s),s=fp(e,t,n,r),s===null&&$h(e,t,r,ec,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(e,t,r,null,n)}}var ec=null;function fp(e,t,n,r){if(ec=null,e=sg(r),e=di(e),e!==null)if(t=qi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=YS(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ec=e,null}function lb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_P()){case og:return 1;case ZS:return 4;case Qu:case kP:return 16;case eb:return 536870912;default:return 16}default:return 16}}var Sr=null,cg=null,ku=null;function ub(){if(ku)return ku;var e,t=cg,n=t.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ku=i.slice(e,1<r?1-r:void 0)}function xu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function t0(){return!1}function jt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:t0,this.isPropagationStopped=t0,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fg=jt(eo),tl=ve({},eo,{view:0,detail:0}),UP=jt(tl),Ph,Nh,vo,uf=ve({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Ph=e.screenX-vo.screenX,Nh=e.screenY-vo.screenY):Nh=Ph=0,vo=e),Ph)},movementY:function(e){return"movementY"in e?e.movementY:Nh}}),n0=jt(uf),$P=ve({},uf,{dataTransfer:0}),VP=jt($P),BP=ve({},tl,{relatedTarget:0}),Rh=jt(BP),jP=ve({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),zP=jt(jP),HP=ve({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WP=jt(HP),qP=ve({},eo,{data:0}),r0=jt(qP),GP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YP[e])?!!t[e]:!1}function hg(){return XP}var QP=ve({},tl,{key:function(e){if(e.key){var t=GP[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hg,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),JP=jt(QP),ZP=ve({},uf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i0=jt(ZP),eN=ve({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hg}),tN=jt(eN),nN=ve({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rN=jt(nN),iN=ve({},uf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sN=jt(iN),oN=[9,13,27,32],dg=Gn&&"CompositionEvent"in window,$o=null;Gn&&"documentMode"in document&&($o=document.documentMode);var aN=Gn&&"TextEvent"in window&&!$o,cb=Gn&&(!dg||$o&&8<$o&&11>=$o),s0=String.fromCharCode(32),o0=!1;function fb(e,t){switch(e){case"keyup":return oN.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var os=!1;function lN(e,t){switch(e){case"compositionend":return hb(t);case"keypress":return t.which!==32?null:(o0=!0,s0);case"textInput":return e=t.data,e===s0&&o0?null:e;default:return null}}function uN(e,t){if(os)return e==="compositionend"||!dg&&fb(e,t)?(e=ub(),ku=cg=Sr=null,os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cb&&t.locale!=="ko"?null:t.data;default:return null}}var cN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cN[e.type]:t==="textarea"}function db(e,t,n,r){HS(r),t=tc(t,"onChange"),0<t.length&&(n=new fg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vo=null,pa=null;function fN(e){_b(e,0)}function cf(e){var t=us(e);if(FS(t))return e}function hN(e,t){if(e==="change")return t}var pb=!1;if(Gn){var Oh;if(Gn){var Dh="oninput"in document;if(!Dh){var l0=document.createElement("div");l0.setAttribute("oninput","return;"),Dh=typeof l0.oninput=="function"}Oh=Dh}else Oh=!1;pb=Oh&&(!document.documentMode||9<document.documentMode)}function u0(){Vo&&(Vo.detachEvent("onpropertychange",mb),pa=Vo=null)}function mb(e){if(e.propertyName==="value"&&cf(pa)){var t=[];db(t,pa,e,sg(e)),KS(fN,t)}}function dN(e,t,n){e==="focusin"?(u0(),Vo=t,pa=n,Vo.attachEvent("onpropertychange",mb)):e==="focusout"&&u0()}function pN(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cf(pa)}function mN(e,t){if(e==="click")return cf(t)}function gN(e,t){if(e==="input"||e==="change")return cf(t)}function yN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:yN;function ma(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gd.call(t,i)||!hn(e[i],t[i]))return!1}return!0}function c0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function f0(e,t){var n=c0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=c0(n)}}function gb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yb(){for(var e=window,t=Ku();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ku(e.document)}return t}function pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vN(e){var t=yb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gb(n.ownerDocument.documentElement,n)){if(r!==null&&pg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=f0(n,s);var o=f0(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wN=Gn&&"documentMode"in document&&11>=document.documentMode,as=null,hp=null,Bo=null,dp=!1;function h0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dp||as==null||as!==Ku(r)||(r=as,"selectionStart"in r&&pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&ma(Bo,r)||(Bo=r,r=tc(hp,"onSelect"),0<r.length&&(t=new fg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=as)))}function Hl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ls={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},Lh={},vb={};Gn&&(vb=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ff(e){if(Lh[e])return Lh[e];if(!ls[e])return e;var t=ls[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vb)return Lh[e]=t[n];return e}var wb=ff("animationend"),Eb=ff("animationiteration"),Sb=ff("animationstart"),bb=ff("transitionend"),Tb=new Map,d0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,t){Tb.set(e,t),Wi(t,[e])}for(var Mh=0;Mh<d0.length;Mh++){var Fh=d0[Mh],EN=Fh.toLowerCase(),SN=Fh[0].toUpperCase()+Fh.slice(1);Qr(EN,"on"+SN)}Qr(wb,"onAnimationEnd");Qr(Eb,"onAnimationIteration");Qr(Sb,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(bb,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function p0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,EP(r,t,void 0,e),e.currentTarget=null}function _b(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;p0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;p0(i,a,u),s=l}}}if(Xu)throw e=lp,Xu=!1,lp=null,e}function ie(e,t){var n=t[vp];n===void 0&&(n=t[vp]=new Set);var r=e+"__bubble";n.has(r)||(kb(t,e,2,!1),n.add(r))}function Uh(e,t,n){var r=0;t&&(r|=4),kb(n,e,r,t)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[Wl]){e[Wl]=!0,RS.forEach(function(n){n!=="selectionchange"&&(bN.has(n)||Uh(n,!1,e),Uh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wl]||(t[Wl]=!0,Uh("selectionchange",!1,t))}}function kb(e,t,n,r){switch(lb(t)){case 1:var i=MP;break;case 4:i=FP;break;default:i=ug}n=i.bind(null,t,n,e),i=void 0,!ap||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $h(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=di(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}KS(function(){var u=s,c=sg(n),f=[];e:{var h=Tb.get(e);if(h!==void 0){var d=fg,m=e;switch(e){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":d=JP;break;case"focusin":m="focus",d=Rh;break;case"focusout":m="blur",d=Rh;break;case"beforeblur":case"afterblur":d=Rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=VP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=tN;break;case wb:case Eb:case Sb:d=zP;break;case bb:d=rN;break;case"scroll":d=UP;break;case"wheel":d=sN;break;case"copy":case"cut":case"paste":d=WP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=i0}var w=(t&4)!==0,E=!w&&e==="scroll",v=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,v!==null&&(S=ca(p,v),S!=null&&w.push(ya(p,S,y)))),E)break;p=p.return}0<w.length&&(h=new d(h,m,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",h&&n!==sp&&(m=n.relatedTarget||n.fromElement)&&(di(m)||m[Kn]))break e;if((d||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,d?(m=n.relatedTarget||n.toElement,d=u,m=m?di(m):null,m!==null&&(E=qi(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=u),d!==m)){if(w=n0,S="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=i0,S="onPointerLeave",v="onPointerEnter",p="pointer"),E=d==null?h:us(d),y=m==null?h:us(m),h=new w(S,p+"leave",d,n,c),h.target=E,h.relatedTarget=y,S=null,di(c)===u&&(w=new w(v,p+"enter",m,n,c),w.target=y,w.relatedTarget=E,S=w),E=S,d&&m)t:{for(w=d,v=m,p=0,y=w;y;y=es(y))p++;for(y=0,S=v;S;S=es(S))y++;for(;0<p-y;)w=es(w),p--;for(;0<y-p;)v=es(v),y--;for(;p--;){if(w===v||v!==null&&w===v.alternate)break t;w=es(w),v=es(v)}w=null}else w=null;d!==null&&m0(f,h,d,w,!1),m!==null&&E!==null&&m0(f,E,m,w,!0)}}e:{if(h=u?us(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var b=hN;else if(a0(h))if(pb)b=gN;else{b=pN;var I=dN}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=mN);if(b&&(b=b(e,u))){db(f,b,n,c);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&ep(h,"number",h.value)}switch(I=u?us(u):window,e){case"focusin":(a0(I)||I.contentEditable==="true")&&(as=I,hp=u,Bo=null);break;case"focusout":Bo=hp=as=null;break;case"mousedown":dp=!0;break;case"contextmenu":case"mouseup":case"dragend":dp=!1,h0(f,n,c);break;case"selectionchange":if(wN)break;case"keydown":case"keyup":h0(f,n,c)}var C;if(dg)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else os?fb(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cb&&n.locale!=="ko"&&(os||x!=="onCompositionStart"?x==="onCompositionEnd"&&os&&(C=ub()):(Sr=c,cg="value"in Sr?Sr.value:Sr.textContent,os=!0)),I=tc(u,x),0<I.length&&(x=new r0(x,e,null,n,c),f.push({event:x,listeners:I}),C?x.data=C:(C=hb(n),C!==null&&(x.data=C)))),(C=aN?lN(e,n):uN(e,n))&&(u=tc(u,"onBeforeInput"),0<u.length&&(c=new r0("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}_b(f,t)})}function ya(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ca(e,n),s!=null&&r.unshift(ya(e,s,i)),s=ca(e,t),s!=null&&r.push(ya(e,s,i))),e=e.return}return r}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function m0(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ca(n,s),l!=null&&o.unshift(ya(n,l,a))):i||(l=ca(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var TN=/\r\n?/g,_N=/\u0000|\uFFFD/g;function g0(e){return(typeof e=="string"?e:""+e).replace(TN,`
`).replace(_N,"")}function ql(e,t,n){if(t=g0(t),g0(e)!==t&&n)throw Error(A(425))}function nc(){}var pp=null,mp=null;function gp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,kN=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,xN=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(e){return y0.resolve(null).then(e).catch(CN)}:yp;function CN(e){setTimeout(function(){throw e})}function Vh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),da(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);da(t)}function Ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function v0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),En="__reactFiber$"+to,va="__reactProps$"+to,Kn="__reactContainer$"+to,vp="__reactEvents$"+to,IN="__reactListeners$"+to,AN="__reactHandles$"+to;function di(e){var t=e[En];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[En]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=v0(e);e!==null;){if(n=e[En])return n;e=v0(e)}return t}e=n,n=e.parentNode}return null}function nl(e){return e=e[En]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function us(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function hf(e){return e[va]||null}var wp=[],cs=-1;function Jr(e){return{current:e}}function oe(e){0>cs||(e.current=wp[cs],wp[cs]=null,cs--)}function re(e,t){cs++,wp[cs]=e.current,e.current=t}var Br={},ut=Jr(Br),_t=Jr(!1),Ai=Br;function Ms(e,t){var n=e.type.contextTypes;if(!n)return Br;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function rc(){oe(_t),oe(ut)}function w0(e,t,n){if(ut.current!==Br)throw Error(A(168));re(ut,t),re(_t,n)}function xb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,dP(e)||"Unknown",i));return ve({},n,r)}function ic(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Br,Ai=ut.current,re(ut,e),re(_t,_t.current),!0}function E0(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=xb(e,t,Ai),r.__reactInternalMemoizedMergedChildContext=e,oe(_t),oe(ut),re(ut,e)):oe(_t),re(_t,n)}var Rn=null,df=!1,Bh=!1;function Cb(e){Rn===null?Rn=[e]:Rn.push(e)}function PN(e){df=!0,Cb(e)}function Zr(){if(!Bh&&Rn!==null){Bh=!0;var e=0,t=te;try{var n=Rn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,df=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),JS(og,Zr),i}finally{te=t,Bh=!1}}return null}var fs=[],hs=0,sc=null,oc=0,Gt=[],Kt=0,Pi=null,Dn=1,Ln="";function li(e,t){fs[hs++]=oc,fs[hs++]=sc,sc=e,oc=t}function Ib(e,t,n){Gt[Kt++]=Dn,Gt[Kt++]=Ln,Gt[Kt++]=Pi,Pi=e;var r=Dn;e=Ln;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-cn(t)+i|n<<i|r,Ln=s+e}else Dn=1<<s|n<<i|r,Ln=e}function mg(e){e.return!==null&&(li(e,1),Ib(e,1,0))}function gg(e){for(;e===sc;)sc=fs[--hs],fs[hs]=null,oc=fs[--hs],fs[hs]=null;for(;e===Pi;)Pi=Gt[--Kt],Gt[Kt]=null,Ln=Gt[--Kt],Gt[Kt]=null,Dn=Gt[--Kt],Gt[Kt]=null}var Mt=null,Ot=null,ce=!1,sn=null;function Ab(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function S0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Mt=e,Ot=Ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Mt=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pi!==null?{id:Dn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Mt=e,Ot=null,!0):!1;default:return!1}}function Ep(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sp(e){if(ce){var t=Ot;if(t){var n=t;if(!S0(e,t)){if(Ep(e))throw Error(A(418));t=Ir(n.nextSibling);var r=Mt;t&&S0(e,t)?Ab(r,n):(e.flags=e.flags&-4097|2,ce=!1,Mt=e)}}else{if(Ep(e))throw Error(A(418));e.flags=e.flags&-4097|2,ce=!1,Mt=e}}}function b0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Mt=e}function Gl(e){if(e!==Mt)return!1;if(!ce)return b0(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gp(e.type,e.memoizedProps)),t&&(t=Ot)){if(Ep(e))throw Pb(),Error(A(418));for(;t;)Ab(e,t),t=Ir(t.nextSibling)}if(b0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=Ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=Mt?Ir(e.stateNode.nextSibling):null;return!0}function Pb(){for(var e=Ot;e;)e=Ir(e.nextSibling)}function Fs(){Ot=Mt=null,ce=!1}function yg(e){sn===null?sn=[e]:sn.push(e)}var NN=rr.ReactCurrentBatchConfig;function nn(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ac=Jr(null),lc=null,ds=null,vg=null;function wg(){vg=ds=lc=null}function Eg(e){var t=ac.current;oe(ac),e._currentValue=t}function bp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Is(e,t){lc=e,vg=ds=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(vg!==e)if(e={context:e,memoizedValue:t,next:null},ds===null){if(lc===null)throw Error(A(308));ds=e,lc.dependencies={lanes:0,firstContext:e}}else ds=ds.next=e;return t}var pi=null;function Sg(e){pi===null?pi=[e]:pi.push(e)}function Nb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sg(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yn(e,r)}function Yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hr=!1;function bg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sg(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yn(e,n)}function Cu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ag(e,n)}}function T0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uc(e,t,n,r){var i=e.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,d=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,w=a;switch(h=t,d=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){f=m.call(d,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,h=typeof m=="function"?m.call(d,f,h):m,h==null)break e;f=ve({},f,h);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=f):c=c.next=d,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ri|=o,e.lanes=o,e.memoizedState=f}}function _0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Ob=new NS.Component().refs;function Tp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pf={isMounted:function(e){return(e=e._reactInternals)?qi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Nr(e),s=Vn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ar(e,s,i),t!==null&&(fn(t,e,i,r),Cu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Nr(e),s=Vn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ar(e,s,i),t!==null&&(fn(t,e,i,r),Cu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Nr(e),i=Vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ar(e,i,r),t!==null&&(fn(t,e,r,n),Cu(t,e,r))}};function k0(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ma(n,r)||!ma(i,s):!0}function Db(e,t,n){var r=!1,i=Br,s=t.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=kt(t)?Ai:ut.current,r=t.contextTypes,s=(r=r!=null)?Ms(e,i):Br),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pf,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function x0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pf.enqueueReplaceState(t,t.state,null)}function _p(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ob,bg(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=kt(t)?Ai:ut.current,i.context=Ms(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Tp(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pf.enqueueReplaceState(i,i.state,null),uc(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Ob&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Kl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function C0(e){var t=e._init;return t(e._payload)}function Lb(e){function t(v,p){if(e){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=Rr(v,p),v.index=0,v.sibling=null,v}function s(v,p,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,y,S){return p===null||p.tag!==6?(p=Kh(y,v.mode,S),p.return=v,p):(p=i(p,y),p.return=v,p)}function l(v,p,y,S){var b=y.type;return b===ss?c(v,p,y.props.children,S,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===fr&&C0(b)===p.type)?(S=i(p,y.props),S.ref=wo(v,p,y),S.return=v,S):(S=Ou(y.type,y.key,y.props,null,v.mode,S),S.ref=wo(v,p,y),S.return=v,S)}function u(v,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Yh(y,v.mode,S),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function c(v,p,y,S,b){return p===null||p.tag!==7?(p=_i(y,v.mode,S,b),p.return=v,p):(p=i(p,y),p.return=v,p)}function f(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Kh(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fl:return y=Ou(p.type,p.key,p.props,null,v.mode,y),y.ref=wo(v,null,p),y.return=v,y;case is:return p=Yh(p,v.mode,y),p.return=v,p;case fr:var S=p._init;return f(v,S(p._payload),y)}if(Io(p)||po(p))return p=_i(p,v.mode,y,null),p.return=v,p;Kl(v,p)}return null}function h(v,p,y,S){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(v,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fl:return y.key===b?l(v,p,y,S):null;case is:return y.key===b?u(v,p,y,S):null;case fr:return b=y._init,h(v,p,b(y._payload),S)}if(Io(y)||po(y))return b!==null?null:c(v,p,y,S,null);Kl(v,y)}return null}function d(v,p,y,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(y)||null,a(p,v,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fl:return v=v.get(S.key===null?y:S.key)||null,l(p,v,S,b);case is:return v=v.get(S.key===null?y:S.key)||null,u(p,v,S,b);case fr:var I=S._init;return d(v,p,y,I(S._payload),b)}if(Io(S)||po(S))return v=v.get(y)||null,c(p,v,S,b,null);Kl(p,S)}return null}function m(v,p,y,S){for(var b=null,I=null,C=p,x=p=0,F=null;C!==null&&x<y.length;x++){C.index>x?(F=C,C=null):F=C.sibling;var $=h(v,C,y[x],S);if($===null){C===null&&(C=F);break}e&&C&&$.alternate===null&&t(v,C),p=s($,p,x),I===null?b=$:I.sibling=$,I=$,C=F}if(x===y.length)return n(v,C),ce&&li(v,x),b;if(C===null){for(;x<y.length;x++)C=f(v,y[x],S),C!==null&&(p=s(C,p,x),I===null?b=C:I.sibling=C,I=C);return ce&&li(v,x),b}for(C=r(v,C);x<y.length;x++)F=d(C,v,x,y[x],S),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?x:F.key),p=s(F,p,x),I===null?b=F:I.sibling=F,I=F);return e&&C.forEach(function(_e){return t(v,_e)}),ce&&li(v,x),b}function w(v,p,y,S){var b=po(y);if(typeof b!="function")throw Error(A(150));if(y=b.call(y),y==null)throw Error(A(151));for(var I=b=null,C=p,x=p=0,F=null,$=y.next();C!==null&&!$.done;x++,$=y.next()){C.index>x?(F=C,C=null):F=C.sibling;var _e=h(v,C,$.value,S);if(_e===null){C===null&&(C=F);break}e&&C&&_e.alternate===null&&t(v,C),p=s(_e,p,x),I===null?b=_e:I.sibling=_e,I=_e,C=F}if($.done)return n(v,C),ce&&li(v,x),b;if(C===null){for(;!$.done;x++,$=y.next())$=f(v,$.value,S),$!==null&&(p=s($,p,x),I===null?b=$:I.sibling=$,I=$);return ce&&li(v,x),b}for(C=r(v,C);!$.done;x++,$=y.next())$=d(C,v,x,$.value,S),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?x:$.key),p=s($,p,x),I===null?b=$:I.sibling=$,I=$);return e&&C.forEach(function(Et){return t(v,Et)}),ce&&li(v,x),b}function E(v,p,y,S){if(typeof y=="object"&&y!==null&&y.type===ss&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Fl:e:{for(var b=y.key,I=p;I!==null;){if(I.key===b){if(b=y.type,b===ss){if(I.tag===7){n(v,I.sibling),p=i(I,y.props.children),p.return=v,v=p;break e}}else if(I.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===fr&&C0(b)===I.type){n(v,I.sibling),p=i(I,y.props),p.ref=wo(v,I,y),p.return=v,v=p;break e}n(v,I);break}else t(v,I);I=I.sibling}y.type===ss?(p=_i(y.props.children,v.mode,S,y.key),p.return=v,v=p):(S=Ou(y.type,y.key,y.props,null,v.mode,S),S.ref=wo(v,p,y),S.return=v,v=S)}return o(v);case is:e:{for(I=y.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=Yh(y,v.mode,S),p.return=v,v=p}return o(v);case fr:return I=y._init,E(v,p,I(y._payload),S)}if(Io(y))return m(v,p,y,S);if(po(y))return w(v,p,y,S);Kl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=Kh(y,v.mode,S),p.return=v,v=p),o(v)):n(v,p)}return E}var Us=Lb(!0),Mb=Lb(!1),rl={},xn=Jr(rl),wa=Jr(rl),Ea=Jr(rl);function mi(e){if(e===rl)throw Error(A(174));return e}function Tg(e,t){switch(re(Ea,t),re(wa,e),re(xn,rl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:np(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=np(t,e)}oe(xn),re(xn,t)}function $s(){oe(xn),oe(wa),oe(Ea)}function Fb(e){mi(Ea.current);var t=mi(xn.current),n=np(t,e.type);t!==n&&(re(wa,e),re(xn,n))}function _g(e){wa.current===e&&(oe(xn),oe(wa))}var pe=Jr(0);function cc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jh=[];function kg(){for(var e=0;e<jh.length;e++)jh[e]._workInProgressVersionPrimary=null;jh.length=0}var Iu=rr.ReactCurrentDispatcher,zh=rr.ReactCurrentBatchConfig,Ni=0,ye=null,Ne=null,Ue=null,fc=!1,jo=!1,Sa=0,RN=0;function Je(){throw Error(A(321))}function xg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hn(e[n],t[n]))return!1;return!0}function Cg(e,t,n,r,i,s){if(Ni=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Iu.current=e===null||e.memoizedState===null?MN:FN,e=n(r,i),jo){s=0;do{if(jo=!1,Sa=0,25<=s)throw Error(A(301));s+=1,Ue=Ne=null,t.updateQueue=null,Iu.current=UN,e=n(r,i)}while(jo)}if(Iu.current=hc,t=Ne!==null&&Ne.next!==null,Ni=0,Ue=Ne=ye=null,fc=!1,t)throw Error(A(300));return e}function Ig(){var e=Sa!==0;return Sa=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ye.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Jt(){if(Ne===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ue===null?ye.memoizedState:Ue.next;if(t!==null)Ue=t,Ne=e;else{if(e===null)throw Error(A(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ue===null?ye.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function ba(e,t){return typeof t=="function"?t(e):t}function Hh(e){var t=Jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ni&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ye.lanes|=c,Ri|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,t.memoizedState)||(Tt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ye.lanes|=s,Ri|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wh(e){var t=Jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);hn(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ub(){}function $b(e,t){var n=ye,r=Jt(),i=t(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Ag(jb.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ta(9,Bb.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(A(349));Ni&30||Vb(n,t,i)}return i}function Vb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bb(e,t,n,r){t.value=n,t.getSnapshot=r,zb(t)&&Hb(e)}function jb(e,t,n){return n(function(){zb(t)&&Hb(e)})}function zb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hn(e,n)}catch{return!0}}function Hb(e){var t=Yn(e,1);t!==null&&fn(t,e,1,-1)}function I0(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=LN.bind(null,ye,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wb(){return Jt().memoizedState}function Au(e,t,n,r){var i=vn();ye.flags|=e,i.memoizedState=Ta(1|t,n,void 0,r===void 0?null:r)}function mf(e,t,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&xg(r,o.deps)){i.memoizedState=Ta(t,n,s,r);return}}ye.flags|=e,i.memoizedState=Ta(1|t,n,s,r)}function A0(e,t){return Au(8390656,8,e,t)}function Ag(e,t){return mf(2048,8,e,t)}function qb(e,t){return mf(4,2,e,t)}function Gb(e,t){return mf(4,4,e,t)}function Kb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yb(e,t,n){return n=n!=null?n.concat([e]):null,mf(4,4,Kb.bind(null,t,e),n)}function Pg(){}function Xb(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qb(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jb(e,t,n){return Ni&21?(hn(n,t)||(n=tb(),ye.lanes|=n,Ri|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n)}function ON(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=zh.transition;zh.transition={};try{e(!1),t()}finally{te=n,zh.transition=r}}function Zb(){return Jt().memoizedState}function DN(e,t,n){var r=Nr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eT(e))tT(t,n);else if(n=Nb(e,t,n,r),n!==null){var i=gt();fn(n,e,r,i),nT(n,t,r)}}function LN(e,t,n){var r=Nr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eT(e))tT(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=t.interleaved;l===null?(i.next=i,Sg(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Nb(e,t,i,r),n!==null&&(i=gt(),fn(n,e,r,i),nT(n,t,r))}}function eT(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function tT(e,t){jo=fc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nT(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ag(e,n)}}var hc={readContext:Qt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},MN={readContext:Qt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:A0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Au(4194308,4,Kb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Au(4194308,4,e,t)},useInsertionEffect:function(e,t){return Au(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=DN.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:I0,useDebugValue:Pg,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=I0(!1),t=e[0];return e=ON.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=vn();if(ce){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Be===null)throw Error(A(349));Ni&30||Vb(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,A0(jb.bind(null,r,s,e),[e]),r.flags|=2048,Ta(9,Bb.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=vn(),t=Be.identifierPrefix;if(ce){var n=Ln,r=Dn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=RN++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},FN={readContext:Qt,useCallback:Xb,useContext:Qt,useEffect:Ag,useImperativeHandle:Yb,useInsertionEffect:qb,useLayoutEffect:Gb,useMemo:Qb,useReducer:Hh,useRef:Wb,useState:function(){return Hh(ba)},useDebugValue:Pg,useDeferredValue:function(e){var t=Jt();return Jb(t,Ne.memoizedState,e)},useTransition:function(){var e=Hh(ba)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:Ub,useSyncExternalStore:$b,useId:Zb,unstable_isNewReconciler:!1},UN={readContext:Qt,useCallback:Xb,useContext:Qt,useEffect:Ag,useImperativeHandle:Yb,useInsertionEffect:qb,useLayoutEffect:Gb,useMemo:Qb,useReducer:Wh,useRef:Wb,useState:function(){return Wh(ba)},useDebugValue:Pg,useDeferredValue:function(e){var t=Jt();return Ne===null?t.memoizedState=e:Jb(t,Ne.memoizedState,e)},useTransition:function(){var e=Wh(ba)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:Ub,useSyncExternalStore:$b,useId:Zb,unstable_isNewReconciler:!1};function Vs(e,t){try{var n="",r=t;do n+=hP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function qh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $N=typeof WeakMap=="function"?WeakMap:Map;function rT(e,t,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pc||(pc=!0,Lp=r),kp(e,t)},n}function iT(e,t,n){n=Vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){kp(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kp(e,t),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function P0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $N;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ZN.bind(null,e,t,n),t.then(e,e))}function N0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function R0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vn(-1,1),t.tag=2,Ar(n,t,1))),n.lanes|=1),e)}var VN=rr.ReactCurrentOwner,Tt=!1;function dt(e,t,n,r){t.child=e===null?Mb(t,null,n,r):Us(t,e.child,n,r)}function O0(e,t,n,r,i){n=n.render;var s=t.ref;return Is(t,i),r=Cg(e,t,n,r,s,i),n=Ig(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xn(e,t,i)):(ce&&n&&mg(t),t.flags|=1,dt(e,t,r,i),t.child)}function D0(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ug(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,sT(e,t,s,r,i)):(e=Ou(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,r)&&e.ref===t.ref)return Xn(e,t,i)}return t.flags|=1,e=Rr(s,r),e.ref=t.ref,e.return=t,t.child=e}function sT(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ma(s,r)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,Xn(e,t,i)}return xp(e,t,n,r,i)}function oT(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(ms,Rt),Rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(ms,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(ms,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,re(ms,Rt),Rt|=r;return dt(e,t,i,n),t.child}function aT(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xp(e,t,n,r,i){var s=kt(n)?Ai:ut.current;return s=Ms(t,s),Is(t,i),n=Cg(e,t,n,r,s,i),r=Ig(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xn(e,t,i)):(ce&&r&&mg(t),t.flags|=1,dt(e,t,n,i),t.child)}function L0(e,t,n,r,i){if(kt(n)){var s=!0;ic(t)}else s=!1;if(Is(t,i),t.stateNode===null)Pu(e,t),Db(t,n,r),_p(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qt(u):(u=kt(n)?Ai:ut.current,u=Ms(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&x0(t,o,r,u),hr=!1;var h=t.memoizedState;o.state=h,uc(t,r,o,i),l=t.memoizedState,a!==r||h!==l||_t.current||hr?(typeof c=="function"&&(Tp(t,n,c,r),l=t.memoizedState),(a=hr||k0(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Rb(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nn(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qt(l):(l=kt(n)?Ai:ut.current,l=Ms(t,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&x0(t,o,r,l),hr=!1,h=t.memoizedState,o.state=h,uc(t,r,o,i);var m=t.memoizedState;a!==f||h!==m||_t.current||hr?(typeof d=="function"&&(Tp(t,n,d,r),m=t.memoizedState),(u=hr||k0(t,n,u,r,h,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Cp(e,t,n,r,s,i)}function Cp(e,t,n,r,i,s){aT(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&E0(t,n,!1),Xn(e,t,s);r=t.stateNode,VN.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Us(t,e.child,null,s),t.child=Us(t,null,a,s)):dt(e,t,a,s),t.memoizedState=r.state,i&&E0(t,n,!0),t.child}function lT(e){var t=e.stateNode;t.pendingContext?w0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&w0(e,t.context,!1),Tg(e,t.containerInfo)}function M0(e,t,n,r,i){return Fs(),yg(i),t.flags|=256,dt(e,t,n,r),t.child}var Ip={dehydrated:null,treeContext:null,retryLane:0};function Ap(e){return{baseLanes:e,cachePool:null,transitions:null}}function uT(e,t,n){var r=t.pendingProps,i=pe.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(pe,i&1),e===null)return Sp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vf(o,r,0,null),e=_i(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ap(n),t.memoizedState=Ip,e):Ng(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BN(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=_i(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ip,r}return s=e.child,e=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ng(e,t){return t=vf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yl(e,t,n,r){return r!==null&&yg(r),Us(t,e.child,null,n),e=Ng(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function BN(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=qh(Error(A(422))),Yl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=vf({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Us(t,e.child,null,o),t.child.memoizedState=Ap(o),t.memoizedState=Ip,s);if(!(t.mode&1))return Yl(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=qh(s,r,void 0),Yl(e,t,o,r)}if(a=(o&e.childLanes)!==0,Tt||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(e,i),fn(r,e,i,-1))}return Fg(),r=qh(Error(A(421))),Yl(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=eR.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ot=Ir(i.nextSibling),Mt=t,ce=!0,sn=null,e!==null&&(Gt[Kt++]=Dn,Gt[Kt++]=Ln,Gt[Kt++]=Pi,Dn=e.id,Ln=e.overflow,Pi=t),t=Ng(t,r.children),t.flags|=4096,t)}function F0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bp(e.return,t,n)}function Gh(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cT(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(dt(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&F0(e,n,t);else if(e.tag===19)F0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&cc(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gh(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&cc(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gh(t,!0,n,null,s);break;case"together":Gh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ri|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jN(e,t,n){switch(t.tag){case 3:lT(t),Fs();break;case 5:Fb(t);break;case 1:kt(t.type)&&ic(t);break;case 4:Tg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(ac,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?uT(e,t,n):(re(pe,pe.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cT(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,oT(e,t,n)}return Xn(e,t,n)}var fT,Pp,hT,dT;fT=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pp=function(){};hT=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mi(xn.current);var s=null;switch(n){case"input":i=Jd(e,i),r=Jd(e,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=tp(e,i),r=tp(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nc)}rp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};dT=function(e,t,n,r){n!==r&&(t.flags|=4)};function Eo(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zN(e,t,n){var r=t.pendingProps;switch(gg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return kt(t.type)&&rc(),Ze(t),null;case 3:return r=t.stateNode,$s(),oe(_t),oe(ut),kg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sn!==null&&(Up(sn),sn=null))),Pp(e,t),Ze(t),null;case 5:_g(t);var i=mi(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)hT(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ze(t),null}if(e=mi(xn.current),Gl(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[En]=t,r[va]=s,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)ie(Po[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":qv(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Kv(r,s),ie("invalid",r)}rp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ql(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ql(r.textContent,a,e),i=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ul(r),Gv(r,s,!0);break;case"textarea":Ul(r),Yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=VS(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[En]=t,e[va]=r,fT(e,t,!1,!1),t.stateNode=e;e:{switch(o=ip(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)ie(Po[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":qv(e,r),i=Jd(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Kv(e,r),i=tp(e,r),ie("invalid",e);break;default:i=r}rp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zS(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&BS(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(e,l):typeof l=="number"&&ua(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",e):l!=null&&tg(e,s,l,o))}switch(n){case"input":Ul(e),Gv(e,r,!1);break;case"textarea":Ul(e),Yv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?_s(e,!!r.multiple,s,!1):r.defaultValue!=null&&_s(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)dT(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=mi(Ea.current),mi(xn.current),Gl(t)){if(r=t.stateNode,n=t.memoizedProps,r[En]=t,(s=r.nodeValue!==n)&&(e=Mt,e!==null))switch(e.tag){case 3:ql(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ql(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=t,t.stateNode=r}return Ze(t),null;case 13:if(oe(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ot!==null&&t.mode&1&&!(t.flags&128))Pb(),Fs(),t.flags|=98560,s=!1;else if(s=Gl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[En]=t}else Fs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),s=!1}else sn!==null&&(Up(sn),sn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Re===0&&(Re=3):Fg())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return $s(),Pp(e,t),e===null&&ga(t.stateNode.containerInfo),Ze(t),null;case 10:return Eg(t.type._context),Ze(t),null;case 17:return kt(t.type)&&rc(),Ze(t),null;case 19:if(oe(pe),s=t.memoizedState,s===null)return Ze(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Eo(s,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=cc(e),o!==null){for(t.flags|=128,Eo(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ce()>Bs&&(t.flags|=128,r=!0,Eo(s,!1),t.lanes=4194304)}else{if(!r)if(e=cc(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Ze(t),null}else 2*Ce()-s.renderingStartTime>Bs&&n!==1073741824&&(t.flags|=128,r=!0,Eo(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ce(),t.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Mg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Rt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function HN(e,t){switch(gg(t),t.tag){case 1:return kt(t.type)&&rc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $s(),oe(_t),oe(ut),kg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _g(t),null;case 13:if(oe(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Fs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(pe),null;case 4:return $s(),null;case 10:return Eg(t.type._context),null;case 22:case 23:return Mg(),null;case 24:return null;default:return null}}var Xl=!1,rt=!1,WN=typeof WeakSet=="function"?WeakSet:Set,D=null;function ps(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Np(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var U0=!1;function qN(e,t){if(pp=Zu,e=yb(),pg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var d;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:e,selectionRange:n},Zu=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,E=m.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:nn(t.type,w),E);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){Ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return m=U0,U0=!1,m}function zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Np(t,n,s)}i=i.next}while(i!==r)}}function gf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pT(e){var t=e.alternate;t!==null&&(e.alternate=null,pT(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[va],delete t[vp],delete t[IN],delete t[AN])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mT(e){return e.tag===5||e.tag===3||e.tag===4}function $0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mT(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Op(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nc));else if(r!==4&&(e=e.child,e!==null))for(Op(e,t,n),e=e.sibling;e!==null;)Op(e,t,n),e=e.sibling}function Dp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dp(e,t,n),e=e.sibling;e!==null;)Dp(e,t,n),e=e.sibling}var We=null,rn=!1;function or(e,t,n){for(n=n.child;n!==null;)gT(e,t,n),n=n.sibling}function gT(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(lf,n)}catch{}switch(n.tag){case 5:rt||ps(n,t);case 6:var r=We,i=rn;We=null,or(e,t,n),We=r,rn=i,We!==null&&(rn?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(rn?(e=We,n=n.stateNode,e.nodeType===8?Vh(e.parentNode,n):e.nodeType===1&&Vh(e,n),da(e)):Vh(We,n.stateNode));break;case 4:r=We,i=rn,We=n.stateNode.containerInfo,rn=!0,or(e,t,n),We=r,rn=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Np(n,t,o),i=i.next}while(i!==r)}or(e,t,n);break;case 1:if(!rt&&(ps(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,t,a)}or(e,t,n);break;case 21:or(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,or(e,t,n),rt=r):or(e,t,n);break;default:or(e,t,n)}}function V0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new WN),t.forEach(function(r){var i=tR.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,rn=!1;break e;case 3:We=a.stateNode.containerInfo,rn=!0;break e;case 4:We=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(We===null)throw Error(A(160));gT(s,o,i),We=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yT(t,e),t=t.sibling}function yT(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),yn(e),r&4){try{zo(3,e,e.return),gf(3,e)}catch(w){Ee(e,e.return,w)}try{zo(5,e,e.return)}catch(w){Ee(e,e.return,w)}}break;case 1:tn(t,e),yn(e),r&512&&n!==null&&ps(n,n.return);break;case 5:if(tn(t,e),yn(e),r&512&&n!==null&&ps(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(w){Ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&US(i,s),ip(a,o);var u=ip(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?zS(i,f):c==="dangerouslySetInnerHTML"?BS(i,f):c==="children"?ua(i,f):tg(i,c,f,u)}switch(a){case"input":Zd(i,s);break;case"textarea":$S(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?_s(i,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[va]=s}catch(w){Ee(e,e.return,w)}}break;case 6:if(tn(t,e),yn(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Ee(e,e.return,w)}}break;case 3:if(tn(t,e),yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{da(t.containerInfo)}catch(w){Ee(e,e.return,w)}break;case 4:tn(t,e),yn(e);break;case 13:tn(t,e),yn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dg=Ce())),r&4&&V0(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||c,tn(t,e),rt=u):tn(t,e),yn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(f=D=c;D!==null;){switch(h=D,d=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:ps(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(w){Ee(r,n,w)}}break;case 5:ps(h,h.return);break;case 22:if(h.memoizedState!==null){j0(f);continue}}d!==null?(d.return=h,D=d):j0(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jS("display",o))}catch(w){Ee(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Ee(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(t,e),yn(e),r&4&&V0(e);break;case 21:break;default:tn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mT(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var s=$0(e);Dp(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$0(e);Op(e,a,o);break;default:throw Error(A(161))}}catch(l){Ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function GN(e,t,n){D=e,vT(e)}function vT(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||rt;a=Xl;var u=rt;if(Xl=o,(rt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?z0(i):l!==null?(l.return=o,D=l):z0(i);for(;s!==null;)D=s,vT(s),s=s.sibling;D=i,Xl=a,rt=u}B0(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):B0(e)}}function B0(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||gf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&_0(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_0(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}rt||t.flags&512&&Rp(t)}catch(h){Ee(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function j0(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function z0(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gf(4,t)}catch(l){Ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ee(t,i,l)}}var s=t.return;try{Rp(t)}catch(l){Ee(t,s,l)}break;case 5:var o=t.return;try{Rp(t)}catch(l){Ee(t,o,l)}}}catch(l){Ee(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var KN=Math.ceil,dc=rr.ReactCurrentDispatcher,Rg=rr.ReactCurrentOwner,Xt=rr.ReactCurrentBatchConfig,Z=0,Be=null,Pe=null,Ke=0,Rt=0,ms=Jr(0),Re=0,_a=null,Ri=0,yf=0,Og=0,Ho=null,bt=null,Dg=0,Bs=1/0,Nn=null,pc=!1,Lp=null,Pr=null,Ql=!1,br=null,mc=0,Wo=0,Mp=null,Nu=-1,Ru=0;function gt(){return Z&6?Ce():Nu!==-1?Nu:Nu=Ce()}function Nr(e){return e.mode&1?Z&2&&Ke!==0?Ke&-Ke:NN.transition!==null?(Ru===0&&(Ru=tb()),Ru):(e=te,e!==0||(e=window.event,e=e===void 0?16:lb(e.type)),e):1}function fn(e,t,n,r){if(50<Wo)throw Wo=0,Mp=null,Error(A(185));el(e,n,r),(!(Z&2)||e!==Be)&&(e===Be&&(!(Z&2)&&(yf|=n),Re===4&&mr(e,Ke)),xt(e,r),n===1&&Z===0&&!(t.mode&1)&&(Bs=Ce()+500,df&&Zr()))}function xt(e,t){var n=e.callbackNode;NP(e,t);var r=Ju(e,e===Be?Ke:0);if(r===0)n!==null&&Jv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jv(n),t===1)e.tag===0?PN(H0.bind(null,e)):Cb(H0.bind(null,e)),xN(function(){!(Z&6)&&Zr()}),n=null;else{switch(nb(r)){case 1:n=og;break;case 4:n=ZS;break;case 16:n=Qu;break;case 536870912:n=eb;break;default:n=Qu}n=xT(n,wT.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wT(e,t){if(Nu=-1,Ru=0,Z&6)throw Error(A(327));var n=e.callbackNode;if(As()&&e.callbackNode!==n)return null;var r=Ju(e,e===Be?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gc(e,r);else{t=r;var i=Z;Z|=2;var s=ST();(Be!==e||Ke!==t)&&(Nn=null,Bs=Ce()+500,Ti(e,t));do try{QN();break}catch(a){ET(e,a)}while(1);wg(),dc.current=s,Z=i,Pe!==null?t=0:(Be=null,Ke=0,t=Re)}if(t!==0){if(t===2&&(i=up(e),i!==0&&(r=i,t=Fp(e,i))),t===1)throw n=_a,Ti(e,0),mr(e,r),xt(e,Ce()),n;if(t===6)mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!YN(i)&&(t=gc(e,r),t===2&&(s=up(e),s!==0&&(r=s,t=Fp(e,s))),t===1))throw n=_a,Ti(e,0),mr(e,r),xt(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:ui(e,bt,Nn);break;case 3:if(mr(e,r),(r&130023424)===r&&(t=Dg+500-Ce(),10<t)){if(Ju(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yp(ui.bind(null,e,bt,Nn),t);break}ui(e,bt,Nn);break;case 4:if(mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KN(r/1960))-r,10<r){e.timeoutHandle=yp(ui.bind(null,e,bt,Nn),r);break}ui(e,bt,Nn);break;case 5:ui(e,bt,Nn);break;default:throw Error(A(329))}}}return xt(e,Ce()),e.callbackNode===n?wT.bind(null,e):null}function Fp(e,t){var n=Ho;return e.current.memoizedState.isDehydrated&&(Ti(e,t).flags|=256),e=gc(e,t),e!==2&&(t=bt,bt=n,t!==null&&Up(t)),e}function Up(e){bt===null?bt=e:bt.push.apply(bt,e)}function YN(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~Og,t&=~yf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-cn(t),r=1<<n;e[n]=-1,t&=~r}}function H0(e){if(Z&6)throw Error(A(327));As();var t=Ju(e,0);if(!(t&1))return xt(e,Ce()),null;var n=gc(e,t);if(e.tag!==0&&n===2){var r=up(e);r!==0&&(t=r,n=Fp(e,r))}if(n===1)throw n=_a,Ti(e,0),mr(e,t),xt(e,Ce()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ui(e,bt,Nn),xt(e,Ce()),null}function Lg(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Bs=Ce()+500,df&&Zr())}}function Oi(e){br!==null&&br.tag===0&&!(Z&6)&&As();var t=Z;Z|=1;var n=Xt.transition,r=te;try{if(Xt.transition=null,te=1,e)return e()}finally{te=r,Xt.transition=n,Z=t,!(Z&6)&&Zr()}}function Mg(){Rt=ms.current,oe(ms)}function Ti(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kN(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(gg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rc();break;case 3:$s(),oe(_t),oe(ut),kg();break;case 5:_g(r);break;case 4:$s();break;case 13:oe(pe);break;case 19:oe(pe);break;case 10:Eg(r.type._context);break;case 22:case 23:Mg()}n=n.return}if(Be=e,Pe=e=Rr(e.current,null),Ke=Rt=t,Re=0,_a=null,Og=yf=Ri=0,bt=Ho=null,pi!==null){for(t=0;t<pi.length;t++)if(n=pi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return e}function ET(e,t){do{var n=Pe;try{if(wg(),Iu.current=hc,fc){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fc=!1}if(Ni=0,Ue=Ne=ye=null,jo=!1,Sa=0,Rg.current=null,n===null||n.return===null){Re=1,_a=t,Pe=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=N0(o);if(d!==null){d.flags&=-257,R0(d,o,a,s,t),d.mode&1&&P0(s,u,t),t=d,l=u;var m=t.updateQueue;if(m===null){var w=new Set;w.add(l),t.updateQueue=w}else m.add(l);break e}else{if(!(t&1)){P0(s,u,t),Fg();break e}l=Error(A(426))}}else if(ce&&a.mode&1){var E=N0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),R0(E,o,a,s,t),yg(Vs(l,a));break e}}s=l=Vs(l,a),Re!==4&&(Re=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=rT(s,l,t);T0(s,v);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pr===null||!Pr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=iT(s,a,t);T0(s,S);break e}}s=s.return}while(s!==null)}TT(n)}catch(b){t=b,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function ST(){var e=dc.current;return dc.current=hc,e===null?hc:e}function Fg(){(Re===0||Re===3||Re===2)&&(Re=4),Be===null||!(Ri&268435455)&&!(yf&268435455)||mr(Be,Ke)}function gc(e,t){var n=Z;Z|=2;var r=ST();(Be!==e||Ke!==t)&&(Nn=null,Ti(e,t));do try{XN();break}catch(i){ET(e,i)}while(1);if(wg(),Z=n,dc.current=r,Pe!==null)throw Error(A(261));return Be=null,Ke=0,Re}function XN(){for(;Pe!==null;)bT(Pe)}function QN(){for(;Pe!==null&&!bP();)bT(Pe)}function bT(e){var t=kT(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?TT(e):Pe=t,Rg.current=null}function TT(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=HN(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Pe=null;return}}else if(n=zN(n,t,Rt),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Re===0&&(Re=5)}function ui(e,t,n){var r=te,i=Xt.transition;try{Xt.transition=null,te=1,JN(e,t,n,r)}finally{Xt.transition=i,te=r}return null}function JN(e,t,n,r){do As();while(br!==null);if(Z&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(RP(e,s),e===Be&&(Pe=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,xT(Qu,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=te;te=1;var a=Z;Z|=4,Rg.current=null,qN(e,n),yT(n,e),vN(mp),Zu=!!pp,mp=pp=null,e.current=n,GN(n),TP(),Z=a,te=o,Xt.transition=s}else e.current=n;if(Ql&&(Ql=!1,br=e,mc=i),s=e.pendingLanes,s===0&&(Pr=null),xP(n.stateNode),xt(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pc)throw pc=!1,e=Lp,Lp=null,e;return mc&1&&e.tag!==0&&As(),s=e.pendingLanes,s&1?e===Mp?Wo++:(Wo=0,Mp=e):Wo=0,Zr(),null}function As(){if(br!==null){var e=nb(mc),t=Xt.transition,n=te;try{if(Xt.transition=null,te=16>e?16:e,br===null)var r=!1;else{if(e=br,br=null,mc=0,Z&6)throw Error(A(331));var i=Z;for(Z|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:zo(8,c,s)}var f=c.child;if(f!==null)f.return=c,D=f;else for(;D!==null;){c=D;var h=c.sibling,d=c.return;if(pT(c),c===u){D=null;break}if(h!==null){h.return=d,D=h;break}D=d}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,D=v;break e}D=s.return}}var p=e.current;for(D=p;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gf(9,a)}}catch(b){Ee(a,a.return,b)}if(a===o){D=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,D=S;break e}D=a.return}}if(Z=i,Zr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(lf,e)}catch{}r=!0}return r}finally{te=n,Xt.transition=t}}return!1}function W0(e,t,n){t=Vs(n,t),t=rT(e,t,1),e=Ar(e,t,1),t=gt(),e!==null&&(el(e,1,t),xt(e,t))}function Ee(e,t,n){if(e.tag===3)W0(e,e,n);else for(;t!==null;){if(t.tag===3){W0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){e=Vs(n,e),e=iT(t,e,1),t=Ar(t,e,1),e=gt(),t!==null&&(el(t,1,e),xt(t,e));break}}t=t.return}}function ZN(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ke&n)===n&&(Re===4||Re===3&&(Ke&130023424)===Ke&&500>Ce()-Dg?Ti(e,0):Og|=n),xt(e,t)}function _T(e,t){t===0&&(e.mode&1?(t=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):t=1);var n=gt();e=Yn(e,t),e!==null&&(el(e,t,n),xt(e,n))}function eR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_T(e,n)}function tR(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),_T(e,n)}var kT;kT=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)Tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Tt=!1,jN(e,t,n);Tt=!!(e.flags&131072)}else Tt=!1,ce&&t.flags&1048576&&Ib(t,oc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pu(e,t),e=t.pendingProps;var i=Ms(t,ut.current);Is(t,n),i=Cg(null,t,r,e,i,n);var s=Ig();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(s=!0,ic(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bg(t),i.updater=pf,t.stateNode=i,i._reactInternals=t,_p(t,r,e,n),t=Cp(null,t,r,!0,s,n)):(t.tag=0,ce&&s&&mg(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rR(r),e=nn(r,e),i){case 0:t=xp(null,t,r,e,n);break e;case 1:t=L0(null,t,r,e,n);break e;case 11:t=O0(null,t,r,e,n);break e;case 14:t=D0(null,t,r,nn(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),xp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),L0(e,t,r,i,n);case 3:e:{if(lT(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Rb(e,t),uc(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Vs(Error(A(423)),t),t=M0(e,t,r,n,i);break e}else if(r!==i){i=Vs(Error(A(424)),t),t=M0(e,t,r,n,i);break e}else for(Ot=Ir(t.stateNode.containerInfo.firstChild),Mt=t,ce=!0,sn=null,n=Mb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){t=Xn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return Fb(t),e===null&&Sp(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,gp(r,i)?o=null:s!==null&&gp(r,s)&&(t.flags|=32),aT(e,t),dt(e,t,o,n),t.child;case 6:return e===null&&Sp(t),null;case 13:return uT(e,t,n);case 4:return Tg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Us(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),O0(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,re(ac,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!_t.current){t=Xn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bp(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bp(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Is(t,n),i=Qt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=nn(r,t.pendingProps),i=nn(r.type,i),D0(e,t,r,i,n);case 15:return sT(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Pu(e,t),t.tag=1,kt(r)?(e=!0,ic(t)):e=!1,Is(t,n),Db(t,r,i),_p(t,r,i,n),Cp(null,t,r,!0,e,n);case 19:return cT(e,t,n);case 22:return oT(e,t,n)}throw Error(A(156,t.tag))};function xT(e,t){return JS(e,t)}function nR(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new nR(e,t,n,r)}function Ug(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rR(e){if(typeof e=="function")return Ug(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rg)return 11;if(e===ig)return 14}return 2}function Rr(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Ug(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ss:return _i(n.children,i,s,t);case ng:o=8,i|=8;break;case Kd:return e=Yt(12,n,t,i|2),e.elementType=Kd,e.lanes=s,e;case Yd:return e=Yt(13,n,t,i),e.elementType=Yd,e.lanes=s,e;case Xd:return e=Yt(19,n,t,i),e.elementType=Xd,e.lanes=s,e;case LS:return vf(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case OS:o=10;break e;case DS:o=9;break e;case rg:o=11;break e;case ig:o=14;break e;case fr:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Yt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function _i(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function vf(e,t,n,r){return e=Yt(22,e,r,t),e.elementType=LS,e.lanes=n,e.stateNode={isHidden:!1},e}function Kh(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function Yh(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iR(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ah(0),this.expirationTimes=Ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $g(e,t,n,r,i,s,o,a,l){return e=new iR(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bg(s),e}function sR(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function CT(e){if(!e)return Br;e=e._reactInternals;e:{if(qi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(kt(n))return xb(e,n,t)}return t}function IT(e,t,n,r,i,s,o,a,l){return e=$g(n,r,!0,e,i,s,o,a,l),e.context=CT(null),n=e.current,r=gt(),i=Nr(n),s=Vn(r,i),s.callback=t??null,Ar(n,s,i),e.current.lanes=i,el(e,i,r),xt(e,r),e}function wf(e,t,n,r){var i=t.current,s=gt(),o=Nr(i);return n=CT(n),t.context===null?t.context=n:t.pendingContext=n,t=Vn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ar(i,t,o),e!==null&&(fn(e,i,o,s),Cu(e,i,o)),o}function yc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function q0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vg(e,t){q0(e,t),(e=e.alternate)&&q0(e,t)}function oR(){return null}var AT=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bg(e){this._internalRoot=e}Ef.prototype.render=Bg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));wf(e,t,null,null)};Ef.prototype.unmount=Bg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Oi(function(){wf(null,e,null,null)}),t[Kn]=null}};function Ef(e){this._internalRoot=e}Ef.prototype.unstable_scheduleHydration=function(e){if(e){var t=sb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pr.length&&t!==0&&t<pr[n].priority;n++);pr.splice(n,0,e),n===0&&ab(e)}};function jg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function G0(){}function aR(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yc(o);s.call(u)}}var o=IT(t,r,e,0,null,!1,!1,"",G0);return e._reactRootContainer=o,e[Kn]=o.current,ga(e.nodeType===8?e.parentNode:e),Oi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yc(l);a.call(u)}}var l=$g(e,0,!1,null,null,!1,!1,"",G0);return e._reactRootContainer=l,e[Kn]=l.current,ga(e.nodeType===8?e.parentNode:e),Oi(function(){wf(t,l,n,r)}),l}function bf(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=yc(o);a.call(l)}}wf(t,o,e,i)}else o=aR(n,t,e,i,r);return yc(o)}rb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ao(t.pendingLanes);n!==0&&(ag(t,n|1),xt(t,Ce()),!(Z&6)&&(Bs=Ce()+500,Zr()))}break;case 13:Oi(function(){var r=Yn(e,1);if(r!==null){var i=gt();fn(r,e,1,i)}}),Vg(e,1)}};lg=function(e){if(e.tag===13){var t=Yn(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}Vg(e,134217728)}};ib=function(e){if(e.tag===13){var t=Nr(e),n=Yn(e,t);if(n!==null){var r=gt();fn(n,e,t,r)}Vg(e,t)}};sb=function(){return te};ob=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};op=function(e,t,n){switch(t){case"input":if(Zd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hf(r);if(!i)throw Error(A(90));FS(r),Zd(r,i)}}}break;case"textarea":$S(e,n);break;case"select":t=n.value,t!=null&&_s(e,!!n.multiple,t,!1)}};qS=Lg;GS=Oi;var lR={usingClientEntryPoint:!1,Events:[nl,us,hf,HS,WS,Lg]},So={findFiberByHostInstance:di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uR={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=XS(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||oR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{lf=Jl.inject(uR),kn=Jl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lR;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jg(t))throw Error(A(200));return sR(e,t,null,n)};Bt.createRoot=function(e,t){if(!jg(e))throw Error(A(299));var n=!1,r="",i=AT;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$g(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,ga(e.nodeType===8?e.parentNode:e),new Bg(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=XS(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return Oi(e)};Bt.hydrate=function(e,t,n){if(!Sf(t))throw Error(A(200));return bf(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!jg(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=AT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=IT(t,null,e,1,n??null,i,!1,s,o),e[Kn]=t.current,ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ef(t)};Bt.render=function(e,t,n){if(!Sf(t))throw Error(A(200));return bf(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!Sf(e))throw Error(A(40));return e._reactRootContainer?(Oi(function(){bf(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Bt.unstable_batchedUpdates=Lg;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sf(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return bf(e,t,n,!1,r)};Bt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Bt})(oP);var K0=Wd;Hd.createRoot=K0.createRoot,Hd.hydrateRoot=K0.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}var Tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tr||(Tr={}));const Y0="popstate";function cR(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return $p("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vc(i)}return hR(t,n,null,e)}function Oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fR(){return Math.random().toString(36).substr(2,8)}function X0(e,t){return{usr:e.state,key:e.key,idx:t}}function $p(e,t,n,r){return n===void 0&&(n=null),ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?no(t):t,{state:n,key:t&&t.key||r||fR()})}function vc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function no(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hR(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Tr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ka({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Tr.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:v})}function h(E,v){a=Tr.Push;let p=$p(w.location,E,v);n&&n(p,E),u=c()+1;let y=X0(p,u),S=w.createHref(p);try{o.pushState(y,"",S)}catch{i.location.assign(S)}s&&l&&l({action:a,location:w.location,delta:1})}function d(E,v){a=Tr.Replace;let p=$p(w.location,E,v);n&&n(p,E),u=c();let y=X0(p,u),S=w.createHref(p);o.replaceState(y,"",S),s&&l&&l({action:a,location:w.location,delta:0})}function m(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:vc(E);return Oe(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let w={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Y0,f),l=E,()=>{i.removeEventListener(Y0,f),l=null}},createHref(E){return t(i,E)},createURL:m,encodeLocation(E){let v=m(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:d,go(E){return o.go(E)}};return w}var Q0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Q0||(Q0={}));function dR(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?no(t):t,i=Hg(r.pathname||"/",n);if(i==null)return null;let s=PT(e);pR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=TR(s[a],xR(i));return o}function PT(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),PT(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:SR(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of NT(s.path))i(s,o,l)}),t}function NT(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function pR(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bR(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mR=/^:\w+$/,gR=3,yR=2,vR=1,wR=10,ER=-2,J0=e=>e==="*";function SR(e,t){let n=e.split("/"),r=n.length;return n.some(J0)&&(r+=ER),t&&(r+=yR),n.filter(i=>!J0(i)).reduce((i,s)=>i+(mR.test(s)?gR:s===""?vR:wR),r)}function bR(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function TR(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=_R({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:Or([i,c.pathname]),pathnameBase:PR(Or([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Or([i,c.pathnameBase]))}return s}function _R(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kR(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=CR(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function kR(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xR(e){try{return decodeURI(e)}catch(t){return zg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function CR(e,t){try{return decodeURIComponent(e)}catch(n){return zg(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Hg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function IR(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?no(e):e;return{pathname:n?n.startsWith("/")?n:AR(n,t):t,search:NR(r),hash:RR(i)}}function AR(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function OT(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=no(e):(i=ka({},e),Oe(!i.pathname||!i.pathname.includes("?"),Xh("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Xh("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Xh("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=IR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Or=e=>e.join("/").replace(/\/\/+/g,"/"),PR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),NR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,RR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function OR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function DR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const LR=typeof Object.is=="function"?Object.is:DR,{useState:MR,useEffect:FR,useLayoutEffect:UR,useDebugValue:$R}=zd;function VR(e,t,n){const r=t(),[{inst:i},s]=MR({inst:{value:r,getSnapshot:t}});return UR(()=>{i.value=r,i.getSnapshot=t,Qh(i)&&s({inst:i})},[e,r,t]),FR(()=>(Qh(i)&&s({inst:i}),e(()=>{Qh(i)&&s({inst:i})})),[e]),$R(r),r}function Qh(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!LR(n,r)}catch{return!0}}function BR(e,t,n){return t()}const jR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zR=!jR,HR=zR?BR:VR;"useSyncExternalStore"in zd&&(e=>e.useSyncExternalStore)(zd);const DT=T.createContext(null),LT=T.createContext(null),il=T.createContext(null),Tf=T.createContext(null),Gi=T.createContext({outlet:null,matches:[]}),MT=T.createContext(null);function Vp(){return Vp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vp.apply(this,arguments)}function WR(e,t){let{relative:n}=t===void 0?{}:t;sl()||Oe(!1);let{basename:r,navigator:i}=T.useContext(il),{hash:s,pathname:o,search:a}=FT(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function sl(){return T.useContext(Tf)!=null}function _f(){return sl()||Oe(!1),T.useContext(Tf).location}function Wg(){sl()||Oe(!1);let{basename:e,navigator:t}=T.useContext(il),{matches:n}=T.useContext(Gi),{pathname:r}=_f(),i=JSON.stringify(RT(n).map(a=>a.pathnameBase)),s=T.useRef(!1);return T.useEffect(()=>{s.current=!0}),T.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let u=OT(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Or([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const qR=T.createContext(null);function GR(e){let t=T.useContext(Gi).outlet;return t&&T.createElement(qR.Provider,{value:e},t)}function FT(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Gi),{pathname:i}=_f(),s=JSON.stringify(RT(r).map(o=>o.pathnameBase));return T.useMemo(()=>OT(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function KR(e,t){sl()||Oe(!1);let{navigator:n}=T.useContext(il),r=T.useContext(LT),{matches:i}=T.useContext(Gi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=_f(),u;if(t){var c;let w=typeof t=="string"?no(t):t;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Oe(!1),u=w}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",d=dR(e,{pathname:h}),m=JR(d&&d.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Or([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Or([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&m?T.createElement(Tf.Provider,{value:{location:Vp({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tr.Pop}},m):m}function YR(){let e=n2(),t=OR(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}class XR extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Gi.Provider,{value:this.props.routeContext},T.createElement(MT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QR(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(DT);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Gi.Provider,{value:t},r)}function JR(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Oe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=T.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=T.createElement(YR,null));let c=t.concat(r.slice(0,a+1)),f=()=>{let h=s;return l?h=u:o.route.Component?h=T.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),T.createElement(QR,{match:o,routeContext:{outlet:s,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?T.createElement(XR,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Z0;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Z0||(Z0={}));var wc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(wc||(wc={}));function ZR(e){let t=T.useContext(LT);return t||Oe(!1),t}function e2(e){let t=T.useContext(Gi);return t||Oe(!1),t}function t2(e){let t=e2(),n=t.matches[t.matches.length-1];return n.route.id||Oe(!1),n.route.id}function n2(){var e;let t=T.useContext(MT),n=ZR(wc.UseRouteError),r=t2(wc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function qg(e){return GR(e.context)}function tt(e){Oe(!1)}function r2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tr.Pop,navigator:s,static:o=!1}=e;sl()&&Oe(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=no(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:d="default"}=r,m=T.useMemo(()=>{let w=Hg(u,a);return w==null?null:{location:{pathname:w,search:c,hash:f,state:h,key:d},navigationType:i}},[a,u,c,f,h,d,i]);return m==null?null:T.createElement(il.Provider,{value:l},T.createElement(Tf.Provider,{children:n,value:m}))}function i2(e){let{children:t,location:n}=e,r=T.useContext(DT),i=r&&!t?r.router.routes:Bp(t);return KR(i,n)}var e1;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(e1||(e1={}));new Promise(()=>{});function Bp(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Bp(r.props.children,s));return}r.type!==tt&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jp(){return jp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jp.apply(this,arguments)}function s2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function o2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function a2(e,t){return e.button===0&&(!t||t==="_self")&&!o2(e)}const l2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function u2(e){let{basename:t,children:n,window:r}=e,i=T.useRef();i.current==null&&(i.current=cR({window:r,v5Compat:!0}));let s=i.current,[o,a]=T.useState({action:s.action,location:s.location});return T.useLayoutEffect(()=>s.listen(a),[s]),T.createElement(r2,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const c2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pt=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,f=s2(t,l2),{basename:h}=T.useContext(il),d,m=!1;if(typeof u=="string"&&f2.test(u)&&(d=u,c2)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Hg(y.pathname,h);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:m=!0}let w=WR(u,{relative:i}),E=h2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(p){r&&r(p),p.defaultPrevented||E(p)}return T.createElement("a",jp({},f,{href:d||w,onClick:m||s?r:v,ref:n,target:l}))});var t1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(t1||(t1={}));var n1;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(n1||(n1={}));function h2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=Wg(),l=_f(),u=FT(e,{relative:o});return T.useCallback(c=>{if(a2(c,n)){c.preventDefault();let f=r!==void 0?r:vc(l)===vc(u);a(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}const r1=[{navigation:"HOME"},{navigation:"ABOUT "},{navigation:"CONTACT"},{navigation:"ADMIN"}],UT=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),kf=T.createContext({}),Gg=T.createContext(null),xf=typeof document<"u",i1=xf?T.useLayoutEffect:T.useEffect,$T=T.createContext({strict:!1});function d2(e,t,n,r){const{visualElement:i}=T.useContext(kf),s=T.useContext($T),o=T.useContext(Gg),a=T.useContext(UT).reducedMotion,l=T.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;return T.useInsertionEffect(()=>{u&&u.update(n,o)}),i1(()=>{u&&u.render()}),T.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?i1:T.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function gs(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function p2(e,t,n){return T.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):gs(n)&&(n.current=r))},[t])}function xa(e){return typeof e=="string"||Array.isArray(e)}function Cf(e){return typeof e=="object"&&typeof e.start=="function"}const Kg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yg=["initial",...Kg];function If(e){return Cf(e.animate)||Yg.some(t=>xa(e[t]))}function VT(e){return!!(If(e)||e.variants)}function m2(e,t){if(If(e)){const{initial:n,animate:r}=e;return{initial:n===!1||xa(n)?n:void 0,animate:xa(r)?r:void 0}}return e.inherit!==!1?t:{}}function g2(e){const{initial:t,animate:n}=m2(e,T.useContext(kf));return T.useMemo(()=>({initial:t,animate:n}),[s1(t),s1(n)])}function s1(e){return Array.isArray(e)?e.join(" "):e}const o1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ca={};for(const e in o1)Ca[e]={isEnabled:t=>o1[e].some(n=>!!t[n])};function y2(e){for(const t in e)Ca[t]={...Ca[t],...e[t]}}function BT(e){const t=T.useRef(null);return t.current===null&&(t.current=e()),t.current}const qo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let v2=1;function w2(){return BT(()=>{if(qo.hasEverUpdated)return v2++})}const jT=T.createContext({}),zT=T.createContext({}),E2=Symbol.for("motionComponentSymbol");function S2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&y2(e);function s(a,l){let u;const c={...T.useContext(UT),...a,layoutId:b2(a)},{isStatic:f}=c,h=g2(a),d=f?void 0:w2(),m=r(a,f);if(!f&&xf){h.visualElement=d2(i,m,c,t);const w=T.useContext(zT),E=T.useContext($T).strict;h.visualElement&&(u=h.visualElement.loadFeatures(c,E,e,d,w))}return T.createElement(kf.Provider,{value:h},u&&h.visualElement?T.createElement(u,{visualElement:h.visualElement,...c}):null,n(i,a,d,p2(m,h.visualElement,l),m,f,h.visualElement))}const o=T.forwardRef(s);return o[E2]=i,o}function b2({layoutId:e}){const t=T.useContext(jT).id;return t&&e!==void 0?t+"-"+e:e}function T2(e){function t(r,i={}){return S2(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const _2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xg(e){return typeof e!="string"||e.includes("-")?!1:!!(_2.indexOf(e)>-1||/[A-Z]/.test(e))}const Ec={};function k2(e){Object.assign(Ec,e)}const Af=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ki=new Set(Af);function HT(e,{layout:t,layoutId:n}){return Ki.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ec[e]||e==="opacity")}const At=e=>!!(e&&e.getVelocity),x2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},C2=Af.length;function I2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<C2;o++){const a=Af[o];if(e[a]!==void 0){const l=x2[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const WT=e=>t=>typeof t=="string"&&t.startsWith(e),qT=WT("--"),zp=WT("var(--"),A2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Di=(e,t,n)=>Math.min(Math.max(n,e),t),Yi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Go={...Yi,transform:e=>Di(0,1,e)},Zl={...Yi,default:1},Ko=e=>Math.round(e*1e5)/1e5,Ia=/(-)?([\d]*\.?[\d])+/g,Hp=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,P2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ol(e){return typeof e=="string"}const al=e=>({test:t=>ol(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),cr=al("deg"),Cn=al("%"),V=al("px"),N2=al("vh"),R2=al("vw"),a1={...Cn,parse:e=>Cn.parse(e)/100,transform:e=>Cn.transform(e*100)},l1={...Yi,transform:Math.round},GT={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,size:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:Zl,scaleX:Zl,scaleY:Zl,scaleZ:Zl,skew:cr,skewX:cr,skewY:cr,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:Go,originX:a1,originY:a1,originZ:V,zIndex:l1,fillOpacity:Go,strokeOpacity:Go,numOctaves:l1};function Qg(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const f in t){const h=t[f];if(qT(f)){s[f]=h;continue}const d=GT[f],m=A2(h,d);if(Ki.has(f)){if(l=!0,o[f]=m,!c)continue;h!==(d.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=m):i[f]=m}if(t.transform||(l||r?i.transform=I2(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:d=0}=a;i.transformOrigin=`${f} ${h} ${d}`}}const Jg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function KT(e,t,n){for(const r in t)!At(t[r])&&!HT(r,n)&&(e[r]=t[r])}function O2({transformTemplate:e},t,n){return T.useMemo(()=>{const r=Jg();return Qg(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function D2(e,t,n){const r=e.style||{},i={};return KT(i,r,e),Object.assign(i,O2(e,t,n)),e.transformValues?e.transformValues(i):i}function L2(e,t,n){const r={},i=D2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const M2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function Sc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||M2.has(e)}let YT=e=>!Sc(e);function F2(e){e&&(YT=t=>t.startsWith("on")?!Sc(t):e(t))}try{F2(require("@emotion/is-prop-valid").default)}catch{}function U2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(YT(i)||n===!0&&Sc(i)||!t&&!Sc(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function u1(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function $2(e,t,n){const r=u1(t,e.x,e.width),i=u1(n,e.y,e.height);return`${r} ${i}`}const V2={offset:"stroke-dashoffset",array:"stroke-dasharray"},B2={offset:"strokeDashoffset",array:"strokeDasharray"};function j2(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?V2:B2;e[s.offset]=V.transform(-r);const o=V.transform(t),a=V.transform(n);e[s.array]=`${o} ${a}`}function Zg(e,{attrX:t,attrY:n,originX:r,originY:i,pathLength:s,pathSpacing:o=1,pathOffset:a=0,...l},u,c,f){if(Qg(e,l,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:d,dimensions:m}=e;h.transform&&(m&&(d.transform=h.transform),delete h.transform),m&&(r!==void 0||i!==void 0||d.transform)&&(d.transformOrigin=$2(m,r!==void 0?r:.5,i!==void 0?i:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),s!==void 0&&j2(h,s,o,a,!1)}const XT=()=>({...Jg(),attrs:{}}),ey=e=>typeof e=="string"&&e.toLowerCase()==="svg";function z2(e,t,n,r){const i=T.useMemo(()=>{const s=XT();return Zg(s,t,{enableHardwareAcceleration:!1},ey(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};KT(s,e.style,e),i.style={...s,...i.style}}return i}function H2(e=!1){return(n,r,i,s,{latestValues:o},a)=>{const u=(Xg(n)?z2:L2)(r,o,a,n),f={...U2(r,typeof n=="string",e),...u,ref:s},{children:h}=r,d=T.useMemo(()=>At(h)?h.get():h,[h]);return i&&(f["data-projection-id"]=i),T.createElement(n,{...f,children:d})}}const ty=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function QT(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const JT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ZT(e,t,n,r){QT(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(JT.has(i)?i:ty(i),t.attrs[i])}function ny(e,t){const{style:n}=e,r={};for(const i in n)(At(n[i])||t.style&&At(t.style[i])||HT(i,e))&&(r[i]=n[i]);return r}function e_(e,t){const n=ny(e,t);for(const r in e)if(At(e[r])||At(t[r])){const i=r==="x"||r==="y"?"attr"+r.toUpperCase():r;n[i]=e[r]}return n}function ry(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const bc=e=>Array.isArray(e),W2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),q2=e=>bc(e)?e[e.length-1]||0:e;function Du(e){const t=At(e)?e.get():e;return W2(t)?t.toValue():t}function G2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:K2(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const t_=e=>(t,n)=>{const r=T.useContext(kf),i=T.useContext(Gg),s=()=>G2(e,t,r,i);return n?s():BT(s)};function K2(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=Du(s[h]);let{initial:o,animate:a}=e;const l=If(e),u=VT(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;return f&&typeof f!="boolean"&&!Cf(f)&&(Array.isArray(f)?f:[f]).forEach(d=>{const m=ry(e,d);if(!m)return;const{transitionEnd:w,transition:E,...v}=m;for(const p in v){let y=v[p];if(Array.isArray(y)){const S=c?y.length-1:0;y=y[S]}y!==null&&(i[p]=y)}for(const p in w)i[p]=w[p]}),i}const Y2={useVisualState:t_({scrapeMotionValuesFromProps:e_,createRenderState:XT,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Zg(n,r,{enableHardwareAcceleration:!1},ey(t.tagName),e.transformTemplate),ZT(t,n)}})},X2={useVisualState:t_({scrapeMotionValuesFromProps:ny,createRenderState:Jg})};function Q2(e,{forwardMotionProps:t=!1},n,r){return{...Xg(e)?Y2:X2,preloadedFeatures:n,useRender:H2(t),createVisualElement:r,Component:e}}function Mn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const n_=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Pf(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const J2=e=>t=>n_(t)&&e(t,Pf(t));function Bn(e,t,n,r){return Mn(e,t,J2(n),r)}const Z2=(e,t)=>n=>t(e(n)),Dr=(...e)=>e.reduce(Z2);function r_(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const c1=r_("dragHorizontal"),f1=r_("dragVertical");function i_(e){let t=!1;if(e==="y")t=f1();else if(e==="x")t=c1();else{const n=c1(),r=f1();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function s_(){const e=i_(!0);return e?(e(),!1):!0}class ei{constructor(t){this.isMounted=!1,this.node=t}update(){}}function eO(e){let t=[],n=[],r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&i,h=f?t:n;return u&&o.add(l),h.indexOf(l)===-1&&(h.push(l),f&&i&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),o.has(c)&&(a.schedule(c),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const st={delta:0,timestamp:0,isProcessing:!1},tO=40;let Wp=!0,Aa=!1;const ll=["read","update","preRender","render","postRender"],Nf=ll.reduce((e,t)=>(e[t]=eO(()=>Aa=!0),e),{}),ge=ll.reduce((e,t)=>{const n=Nf[t];return e[t]=(r,i=!1,s=!1)=>(Aa||rO(),n.schedule(r,i,s)),e},{}),jr=ll.reduce((e,t)=>(e[t]=Nf[t].cancel,e),{}),Jh=ll.reduce((e,t)=>(e[t]=()=>Nf[t].process(st),e),{}),nO=e=>Nf[e].process(st),o_=e=>{Aa=!1,st.delta=Wp?1e3/60:Math.max(Math.min(e-st.timestamp,tO),1),st.timestamp=e,st.isProcessing=!0,ll.forEach(nO),st.isProcessing=!1,Aa&&(Wp=!1,requestAnimationFrame(o_))},rO=()=>{Aa=!0,Wp=!0,st.isProcessing||requestAnimationFrame(o_)};function h1(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.type==="touch"||s_())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&ge.update(()=>a[r](s,o))};return Bn(e.current,n,i,{passive:!e.getProps()[r]})}class iO extends ei{mount(){this.unmount=Dr(h1(this.node,!0),h1(this.node,!1))}unmount(){}}class sO extends ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dr(Mn(this.node.current,"focus",()=>this.onFocus()),Mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const a_=(e,t)=>t?e===t?!0:a_(e,t.parentElement):!1,$e=e=>e;function Zh(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Pf(n))}class oO extends ei{constructor(){super(...arguments),this.removeStartListeners=$e,this.removeEndListeners=$e,this.removeAccessibleListeners=$e,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),s=Bn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();ge.update(()=>{a_(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=Bn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dr(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Zh("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&ge.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Mn(this.node.current,"keyup",o),Zh("down",(a,l)=>{this.startPress(a,l)})},n=Mn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Zh("cancel",(s,o)=>this.cancelPress(s,o))},i=Mn(this.node.current,"blur",r);this.removeAccessibleListeners=Dr(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ge.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!s_()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ge.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Bn(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const qp=new WeakMap,ed=new WeakMap,aO=e=>{const t=qp.get(e.target);t&&t(e)},lO=e=>{e.forEach(aO)};function uO({root:e,...t}){const n=e||document;ed.has(n)||ed.set(n,{});const r=ed.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(lO,{root:e,...t})),r[i]}function cO(e,t,n){const r=uO(t);return qp.set(e,n),r.observe(e),()=>{qp.delete(e),r.unobserve(e)}}const fO={some:0,all:1};class hO extends ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:fO[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return cO(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(dO(t,n))&&this.startObserver()}unmount(){}}function dO({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const pO={inView:{Feature:hO},tap:{Feature:oO},focus:{Feature:sO},hover:{Feature:iO}};function l_(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function mO(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function gO(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Rf(e,t,n){const r=e.getProps();return ry(r,t,n!==void 0?n:r.custom,mO(e),gO(e))}const yO="framerAppearId",vO="data-"+ty(yO);let wO=$e,iy=$e;const Lr=e=>e*1e3,jn=e=>e/1e3,EO={current:!1},u_=e=>Array.isArray(e)&&typeof e[0]=="number";function c_(e){return!!(!e||typeof e=="string"&&f_[e]||u_(e)||Array.isArray(e)&&e.every(c_))}const No=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,f_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:No([0,.65,.55,1]),circOut:No([.55,0,1,.45]),backIn:No([.31,.01,.66,-.59]),backOut:No([.33,1.53,.69,.99])};function h_(e){if(e)return u_(e)?No(e):Array.isArray(e)?e.map(h_):f_[e]}function SO(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=h_(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const d1={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},td={},d_={};for(const e in d1)d_[e]=()=>(td[e]===void 0&&(td[e]=d1[e]()),td[e]);function bO(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const p_=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,TO=1e-7,_O=12;function kO(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=p_(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>TO&&++a<_O);return o}function ul(e,t,n,r){if(e===t&&n===r)return $e;const i=s=>kO(s,0,1,e,n);return s=>s===0||s===1?s:p_(i(s),t,r)}const xO=ul(.42,0,1,1),CO=ul(0,0,.58,1),m_=ul(.42,0,.58,1),IO=e=>Array.isArray(e)&&typeof e[0]!="number",g_=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,y_=e=>t=>1-e(1-t),v_=e=>1-Math.sin(Math.acos(e)),sy=y_(v_),AO=g_(sy),w_=ul(.33,1.53,.69,.99),oy=y_(w_),PO=g_(oy),NO=e=>(e*=2)<1?.5*oy(e):.5*(2-Math.pow(2,-10*(e-1))),RO={linear:$e,easeIn:xO,easeInOut:m_,easeOut:CO,circIn:v_,circInOut:AO,circOut:sy,backIn:oy,backInOut:PO,backOut:w_,anticipate:NO},p1=e=>{if(Array.isArray(e)){iy(e.length===4);const[t,n,r,i]=e;return ul(t,n,r,i)}else if(typeof e=="string")return RO[e];return e},ay=(e,t)=>n=>!!(ol(n)&&P2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),E_=(e,t,n)=>r=>{if(!ol(r))return r;const[i,s,o,a]=r.match(Ia);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},OO=e=>Di(0,255,e),nd={...Yi,transform:e=>Math.round(OO(e))},gi={test:ay("rgb","red"),parse:E_("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+nd.transform(e)+", "+nd.transform(t)+", "+nd.transform(n)+", "+Ko(Go.transform(r))+")"};function DO(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Gp={test:ay("#"),parse:DO,transform:gi.transform},ys={test:ay("hsl","hue"),parse:E_("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Cn.transform(Ko(t))+", "+Cn.transform(Ko(n))+", "+Ko(Go.transform(r))+")"},ht={test:e=>gi.test(e)||Gp.test(e)||ys.test(e),parse:e=>gi.test(e)?gi.parse(e):ys.test(e)?ys.parse(e):Gp.parse(e),transform:e=>ol(e)?e:e.hasOwnProperty("red")?gi.transform(e):ys.transform(e)},me=(e,t,n)=>-n*e+n*t+e;function rd(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function LO({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=rd(l,a,e+1/3),s=rd(l,a,e),o=rd(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const id=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},MO=[Gp,gi,ys],FO=e=>MO.find(t=>t.test(e));function m1(e){const t=FO(e);let n=t.parse(e);return t===ys&&(n=LO(n)),n}const S_=(e,t)=>{const n=m1(e),r=m1(t),i={...n};return s=>(i.red=id(n.red,r.red,s),i.green=id(n.green,r.green,s),i.blue=id(n.blue,r.blue,s),i.alpha=me(n.alpha,r.alpha,s),gi.transform(i))},b_="${c}",T_="${n}";function UO(e){var t,n;return isNaN(e)&&ol(e)&&(((t=e.match(Ia))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Hp))===null||n===void 0?void 0:n.length)||0)>0}function Tc(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const i=e.match(Hp);i&&(n=i.length,e=e.replace(Hp,b_),t.push(...i.map(ht.parse)));const s=e.match(Ia);return s&&(r=s.length,e=e.replace(Ia,T_),t.push(...s.map(Yi.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function __(e){return Tc(e).values}function k_(e){const{values:t,numColors:n,tokenised:r}=Tc(e),i=t.length;return s=>{let o=r;for(let a=0;a<i;a++)o=o.replace(a<n?b_:T_,a<n?ht.transform(s[a]):Ko(s[a]));return o}}const $O=e=>typeof e=="number"?0:e;function VO(e){const t=__(e);return k_(e)(t.map($O))}const zr={test:UO,parse:__,createTransformer:k_,getAnimatableNone:VO};function x_(e,t){return typeof e=="number"?n=>me(e,t,n):ht.test(e)?S_(e,t):I_(e,t)}const C_=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>x_(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},BO=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=x_(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},I_=(e,t)=>{const n=zr.createTransformer(t),r=Tc(e),i=Tc(t);return r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Dr(C_(r.values,i.values),n):o=>`${o>0?t:e}`},Pa=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},g1=(e,t)=>n=>me(e,t,n);function jO(e){return typeof e=="number"?g1:typeof e=="string"?ht.test(e)?S_:I_:Array.isArray(e)?C_:typeof e=="object"?BO:g1}function zO(e,t,n){const r=[],i=n||jO(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||$e:t;a=Dr(l,a)}r.push(a)}return r}function A_(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(iy(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=zO(t,r,i),a=o.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const f=Pa(e[c],e[c+1],u);return o[c](f)};return n?u=>l(Di(e[0],e[s-1],u)):l}function HO(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Pa(0,t,r);e.push(me(n,1,i))}}function WO(e){const t=[0];return HO(t,e.length-1),t}function qO(e,t){return e.map(n=>n*t)}function GO(e,t){return e.map(()=>t||m_).splice(0,e.length-1)}function _c({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=IO(r)?r.map(p1):p1(r),s={done:!1,value:t[0]},o=qO(n&&n.length===t.length?n:WO(t),e),a=A_(o,t,{ease:Array.isArray(i)?i:GO(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}function P_(e,t){return t?e*(1e3/t):0}const KO=5;function N_(e,t,n){const r=Math.max(t-KO,0);return P_(n-e(r),t-r)}const sd=.001,YO=.01,y1=10,XO=.05,QO=1;function JO({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;wO(e<=Lr(y1));let o=1-t;o=Di(XO,QO,o),e=Di(YO,y1,jn(e)),o<1?(i=u=>{const c=u*o,f=c*e,h=c-n,d=Kp(u,o),m=Math.exp(-f);return sd-h/d*m},s=u=>{const f=u*o*e,h=f*n+n,d=Math.pow(o,2)*Math.pow(u,2)*e,m=Math.exp(-f),w=Kp(Math.pow(u,2),o);return(-i(u)+sd>0?-1:1)*((h-d)*m)/w}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-sd+c*f},s=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=eD(i,s,a);if(e=Lr(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const ZO=12;function eD(e,t,n){let r=n;for(let i=1;i<ZO;i++)r=r-e(r)/t(r);return r}function Kp(e,t){return e*Math.sqrt(1-t*t)}const tD=["duration","bounce"],nD=["stiffness","damping","mass"];function v1(e,t){return t.some(n=>e[n]!==void 0)}function rD(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!v1(e,nD)&&v1(e,tD)){const n=JO(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function R_({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,velocity:c,duration:f,isResolvedFromDuration:h}=rD(r),d=c?-jn(c):0,m=l/(2*Math.sqrt(a*u)),w=s-i,E=jn(Math.sqrt(a/u)),v=Math.abs(w)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let p;if(m<1){const y=Kp(E,m);p=S=>{const b=Math.exp(-m*E*S);return s-b*((d+m*E*w)/y*Math.sin(y*S)+w*Math.cos(y*S))}}else if(m===1)p=y=>s-Math.exp(-E*y)*(w+(d+E*w)*y);else{const y=E*Math.sqrt(m*m-1);p=S=>{const b=Math.exp(-m*E*S),I=Math.min(y*S,300);return s-b*((d+m*E*w)*Math.sinh(I)+y*w*Math.cosh(I))/y}}return{calculatedDuration:h&&f||null,next:y=>{const S=p(y);if(h)o.done=y>=f;else{let b=d;y!==0&&(m<1?b=N_(p,y,S):b=0);const I=Math.abs(b)<=n,C=Math.abs(s-S)<=t;o.done=I&&C}return o.value=o.done?s:S,o}}}function w1({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],h={done:!1,value:f},d=x=>a!==void 0&&x<a||l!==void 0&&x>l,m=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let w=n*t;const E=f+w,v=o===void 0?E:o(E);v!==E&&(w=v-f);const p=x=>-w*Math.exp(-x/r),y=x=>v+p(x),S=x=>{const F=p(x),$=y(x);h.done=Math.abs(F)<=u,h.value=h.done?v:$};let b,I;const C=x=>{d(h.value)&&(b=x,I=R_({keyframes:[h.value,m(h.value)],velocity:N_(y,x,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:x=>{let F=!1;return!I&&b===void 0&&(F=!0,S(x),C(x)),b!==void 0&&x>b?I.next(x-b):(!F&&S(x),h)}}}const iD=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ge.update(t,!0),stop:()=>jr.update(t),now:()=>st.isProcessing?st.timestamp:performance.now()}},sD={decay:w1,inertia:w1,tween:_c,keyframes:_c,spring:R_},E1=2e4;function S1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<E1;)t+=n,r=e.next(t);return t>=E1?1/0:t}function kc({autoplay:e=!0,delay:t=0,driver:n=iD,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...h}){let d=1,m=!1,w,E;const v=()=>{w&&w(),E=new Promise(H=>{w=H})};v();let p;const y=sD[i]||_c;let S;y!==_c&&typeof r[0]!="number"&&(S=A_([0,100],r,{clamp:!1}),r=[0,100]);const b=y({...h,keyframes:r});let I;a==="mirror"&&(I=y({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let C="idle",x=null,F=null,$=null;b.calculatedDuration===null&&s&&(b.calculatedDuration=S1(b));const{calculatedDuration:_e}=b;let Et=1/0,Ht=1/0;_e!==null&&(Et=_e+o,Ht=Et*(s+1)-o);let ke=0;const xe=H=>{if(F===null)return;d>0&&(F=Math.min(F,H)),x!==null?ke=x:ke=(H-F)*d;const he=ke-t,ii=he<0;ke=Math.max(he,0),C==="finished"&&x===null&&(ke=Ht);let gn=ke,Zi=b;if(s){const Th=ke/Et;let Ll=Math.floor(Th),oi=Th%1;!oi&&Th>=1&&(oi=1),oi===1&&Ll--,Ll=Math.min(Ll,s+1);const Uv=!!(Ll%2);Uv&&(a==="reverse"?(oi=1-oi,o&&(oi-=o/Et)):a==="mirror"&&(Zi=I));let $v=Di(0,1,oi);ke>Ht&&($v=a==="reverse"&&Uv?1:0),gn=$v*Et}const Nt=ii?{done:!1,value:r[0]}:Zi.next(gn);S&&(Nt.value=S(Nt.value));let{done:si}=Nt;!ii&&_e!==null&&(si=ke>=Ht);const DA=x===null&&(C==="finished"||C==="running"&&si||d<0&&ke<=0);return f&&f(Nt.value),DA&&O(),Nt},Wt=()=>{p&&p.stop(),p=void 0},mn=()=>{C="idle",Wt(),v(),F=$=null},O=()=>{C="finished",c&&c(),Wt(),v()},z=()=>{if(m)return;p||(p=n(xe));const H=p.now();l&&l(),C="running",x!==null?F=H-x:F||(F=H),$=F,x=null,p.start()};e&&z();const q={then(H,he){return E.then(H,he)},get time(){return jn(ke)},set time(H){H=Lr(H),ke=H,x!==null||!p||d===0?x=H:F=p.now()-H/d},get duration(){const H=b.calculatedDuration===null?S1(b):b.calculatedDuration;return jn(H)},get speed(){return d},set speed(H){H===d||!p||(d=H,q.time=jn(ke))},get state(){return C},play:z,pause:()=>{C="paused",x=ke},stop:()=>{m=!0,C!=="idle"&&(C="idle",u&&u(),mn())},cancel:()=>{$!==null&&xe($),mn()},complete:()=>{C="finished"},sample:H=>(F=0,xe(H))};return q}const oD=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),eu=10,aD=2e4,lD=(e,t)=>t.type==="spring"||e==="backgroundColor"||!c_(t.ease);function uD(e,t,{onUpdate:n,onComplete:r,...i}){if(!(d_.waapi()&&oD.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l;const u=()=>{l=new Promise(w=>{a=w})};u();let{keyframes:c,duration:f=300,ease:h}=i;if(lD(t,i)){const w=kc({...i,repeat:0,delay:0});let E={done:!1,value:c[0]};const v=[];let p=0;for(;!E.done&&p<aD;)E=w.sample(p),v.push(E.value),p+=eu;c=v,f=p-eu,h="linear"}const d=SO(e.owner.current,t,c,{...i,duration:f,ease:h}),m=()=>{ge.update(()=>d.cancel()),a(),u()};return d.onfinish=()=>{e.set(bO(c,i)),r&&r(),m()},{then(w,E){return l.then(w,E)},get time(){return jn(d.currentTime||0)},set time(w){d.currentTime=Lr(w)},get speed(){return d.playbackRate},set speed(w){d.playbackRate=w},get duration(){return jn(f)},play:()=>{o||d.play()},pause:()=>d.pause(),stop:()=>{if(o=!0,d.playState==="idle")return;const{currentTime:w}=d;if(w){const E=kc({...i,autoplay:!1});e.setWithVelocity(E.sample(w-eu).value,E.sample(w).value,eu)}m()},complete:()=>d.finish(),cancel:m}}function cD({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:$e,pause:$e,stop:$e,then:s=>(s(),Promise.resolve()),cancel:$e,complete:$e});return t?kc({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const fD={type:"spring",stiffness:500,damping:25,restSpeed:10},hD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),dD={type:"keyframes",duration:.8},pD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},mD=(e,{keyframes:t})=>t.length>2?dD:Ki.has(e)?e.startsWith("scale")?hD(t[1]):fD:pD,Yp=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&zr.test(t)&&!t.startsWith("url(")),gD=new Set(["brightness","contrast","saturate","opacity"]);function yD(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ia)||[];if(!r)return e;const i=n.replace(r,"");let s=gD.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const vD=/([a-z-]*)\(.*?\)/g,Xp={...zr,getAnimatableNone:e=>{const t=e.match(vD);return t?t.map(yD).join(" "):e}},wD={...GT,color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,filter:Xp,WebkitFilter:Xp},ly=e=>wD[e];function uy(e,t){let n=ly(e);return n!==Xp&&(n=zr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function ED({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function b1(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function T1(e){return typeof e=="number"?0:uy("",e)}function O_(e,t){return e[t]||e.default||e}function SD(e,t,n,r){const i=Yp(t,n);let s=r.from!==void 0?r.from:e.get();if(s==="none"&&i&&typeof n=="string"?s=uy(t,n):b1(s)&&typeof n=="string"?s=T1(n):!Array.isArray(n)&&b1(n)&&typeof s=="string"&&(n=T1(s)),Array.isArray(n)){for(let o=0;o<n.length;o++)n[o]===null&&(n[o]=o===0?s:n[o-1]);return n}else return[s,n]}const cy=(e,t,n,r={})=>i=>{const s=O_(r,e)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Lr(o);const l=SD(t,e,n,s),u=l[0],c=l[l.length-1],f=Yp(e,u),h=Yp(e,c);let d={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{t.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(ED(s)||(d={...d,...mD(e,d)}),d.duration&&(d.duration=Lr(d.duration)),d.repeatDelay&&(d.repeatDelay=Lr(d.repeatDelay)),!f||!h||EO.current||s.type===!1)return cD(d);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=uD(t,e,d);if(m)return m}return kc(d)};function xc(e){return!!(At(e)&&e.add)}const bD=e=>/^\-?\d*\.?\d+$/.test(e),TD=e=>/^0[^.\s]+$/.test(e);function fy(e,t){e.indexOf(t)===-1&&e.push(t)}function hy(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class dy{constructor(){this.subscriptions=[]}add(t){return fy(this.subscriptions,t),()=>hy(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _D=e=>!isNaN(parseFloat(e));class kD{constructor(t,n={}){this.version="10.10.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=st;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,ge.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ge.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=_D(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new dy);const r=this.events[t].add(n);return t==="change"?()=>{r(),ge.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?P_(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function js(e,t){return new kD(e,t)}const D_=e=>t=>t.test(e),xD={test:e=>e==="auto",parse:e=>e},L_=[Yi,V,Cn,cr,R2,N2,xD],bo=e=>L_.find(D_(e)),CD=[...L_,ht,zr],ID=e=>CD.find(D_(e));function AD(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,js(n))}function PD(e,t){const n=Rf(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=q2(s[o]);AD(e,o,a)}}function ND(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(bD(c)||TD(c))?c=parseFloat(c):!ID(c)&&zr.test(u)&&(c=uy(l,u)),e.addValue(l,js(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function RD(e,t){return t?(t[e]||t.default||t).from:void 0}function OD(e,t,n){const r={};for(const i in e){const s=RD(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function DD({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function M_(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f),d=a[f];if(!h||d===void 0||c&&DD(c,f))continue;const m={delay:n,elapsed:0,...s};if(window.HandoffAppearAnimations&&!h.hasAnimated){const E=e.getProps()[vO];E&&(m.elapsed=window.HandoffAppearAnimations(E,f,h,ge))}h.start(cy(f,h,d,e.shouldReduceMotion&&Ki.has(f)?{type:!1}:m));const w=h.animation;xc(l)&&(l.add(f),w.then(()=>l.remove(f))),u.push(w)}return o&&Promise.all(u).then(()=>{o&&PD(e,o)}),u}function Qp(e,t,n={}){const r=Rf(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(M_(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=i;return LD(e,t,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function LD(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(MD).forEach((u,c)=>{u.notify("AnimationStart",t),o.push(Qp(u,t,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function MD(e,t){return e.sortNodePosition(t)}function FD(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Qp(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Qp(e,t,n);else{const i=typeof t=="function"?Rf(e,t,n.custom):t;r=Promise.all(M_(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const UD=[...Kg].reverse(),$D=Kg.length;function VD(e){return t=>Promise.all(t.map(({animation:n,options:r})=>FD(e,n,r)))}function BD(e){let t=VD(e);const n=zD();let r=!0;const i=(l,u)=>{const c=Rf(e,u);if(c){const{transition:f,transitionEnd:h,...d}=c;l={...l,...d,...h}}return l};function s(l){t=l(e)}function o(l,u){const c=e.getProps(),f=e.getVariantContext(!0)||{},h=[],d=new Set;let m={},w=1/0;for(let v=0;v<$D;v++){const p=UD[v],y=n[p],S=c[p]!==void 0?c[p]:f[p],b=xa(S),I=p===u?y.isActive:null;I===!1&&(w=v);let C=S===f[p]&&S!==c[p]&&b;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),y.protectedKeys={...m},!y.isActive&&I===null||!S&&!y.prevProp||Cf(S)||typeof S=="boolean")continue;const x=jD(y.prevProp,S);let F=x||p===u&&y.isActive&&!C&&b||v>w&&b;const $=Array.isArray(S)?S:[S];let _e=$.reduce(i,{});I===!1&&(_e={});const{prevResolvedValues:Et={}}=y,Ht={...Et,..._e},ke=xe=>{F=!0,d.delete(xe),y.needsAnimating[xe]=!0};for(const xe in Ht){const Wt=_e[xe],mn=Et[xe];m.hasOwnProperty(xe)||(Wt!==mn?bc(Wt)&&bc(mn)?!l_(Wt,mn)||x?ke(xe):y.protectedKeys[xe]=!0:Wt!==void 0?ke(xe):d.add(xe):Wt!==void 0&&d.has(xe)?ke(xe):y.protectedKeys[xe]=!0)}y.prevProp=S,y.prevResolvedValues=_e,y.isActive&&(m={...m,..._e}),r&&e.blockInitialAnimation&&(F=!1),F&&!C&&h.push(...$.map(xe=>({animation:xe,options:{type:p,...l}})))}if(d.size){const v={};d.forEach(p=>{const y=e.getBaseTarget(p);y!==void 0&&(v[p]=y)}),h.push({animation:v})}let E=!!h.length;return r&&c.initial===!1&&!e.manuallyAnimateOnMount&&(E=!1),r=!1,E?t(h):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const h=o(c,l);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function jD(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!l_(t,e):!1}function ai(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zD(){return{animate:ai(!0),whileInView:ai(),whileHover:ai(),whileTap:ai(),whileDrag:ai(),whileFocus:ai(),exit:ai()}}class HD extends ei{constructor(t){super(t),t.animationState||(t.animationState=BD(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Cf(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let WD=0;class qD extends ei{constructor(){super(...arguments),this.id=WD++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const GD={animation:{Feature:HD},exit:{Feature:qD}},_1=(e,t)=>Math.abs(e-t);function KD(e,t){const n=_1(e.x,t.x),r=_1(e.y,t.y);return Math.sqrt(n**2+r**2)}class F_{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=ad(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,f=KD(u.offset,{x:0,y:0})>=3;if(!c&&!f)return;const{point:h}=u,{timestamp:d}=st;this.history.push({...h,timestamp:d});const{onStart:m,onMove:w}=this.handlers;c||(m&&m(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=od(c,this.transformPagePoint),ge.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:f,onSessionEnd:h}=this.handlers,d=ad(u.type==="pointercancel"?this.lastMoveEventInfo:od(c,this.transformPagePoint),this.history);this.startEvent&&f&&f(u,d),h&&h(u,d)},!n_(t))return;this.handlers=n,this.transformPagePoint=r;const i=Pf(t),s=od(i,this.transformPagePoint),{point:o}=s,{timestamp:a}=st;this.history=[{...o,timestamp:a}];const{onSessionStart:l}=n;l&&l(t,ad(s,this.history)),this.removeListeners=Dr(Bn(window,"pointermove",this.handlePointerMove),Bn(window,"pointerup",this.handlePointerUp),Bn(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),jr.update(this.updatePoint)}}function od(e,t){return t?{point:t(e.point)}:e}function k1(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ad({point:e},t){return{point:e,delta:k1(e,U_(t)),offset:k1(e,YD(t)),velocity:XD(t,.1)}}function YD(e){return e[0]}function U_(e){return e[e.length-1]}function XD(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=U_(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Lr(t)));)n--;if(!r)return{x:0,y:0};const s=jn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function $t(e){return e.max-e.min}function Jp(e,t=0,n=.01){return Math.abs(e-t)<=n}function x1(e,t,n,r=.5){e.origin=r,e.originPoint=me(t.min,t.max,e.origin),e.scale=$t(n)/$t(t),(Jp(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=me(n.min,n.max,e.origin)-e.originPoint,(Jp(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Yo(e,t,n,r){x1(e.x,t.x,n.x,r?r.originX:void 0),x1(e.y,t.y,n.y,r?r.originY:void 0)}function C1(e,t,n){e.min=n.min+t.min,e.max=e.min+$t(t)}function QD(e,t,n){C1(e.x,t.x,n.x),C1(e.y,t.y,n.y)}function I1(e,t,n){e.min=t.min-n.min,e.max=e.min+$t(t)}function Xo(e,t,n){I1(e.x,t.x,n.x),I1(e.y,t.y,n.y)}function JD(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?me(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?me(n,e,r.max):Math.min(e,n)),e}function A1(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function ZD(e,{top:t,left:n,bottom:r,right:i}){return{x:A1(e.x,n,i),y:A1(e.y,t,r)}}function P1(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function eL(e,t){return{x:P1(e.x,t.x),y:P1(e.y,t.y)}}function tL(e,t){let n=.5;const r=$t(e),i=$t(t);return i>r?n=Pa(t.min,t.max-r,e.min):r>i&&(n=Pa(e.min,e.max-i,t.min)),Di(0,1,n)}function nL(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Zp=.35;function rL(e=Zp){return e===!1?e=0:e===!0&&(e=Zp),{x:N1(e,"left","right"),y:N1(e,"top","bottom")}}function N1(e,t,n){return{min:R1(e,t),max:R1(e,n)}}function R1(e,t){return typeof e=="number"?e:e[t]||0}const O1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qo=()=>({x:O1(),y:O1()}),D1=()=>({min:0,max:0}),Ae=()=>({x:D1(),y:D1()});function wn(e){return[e("x"),e("y")]}function $_({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function iL({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function sL(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ld(e){return e===void 0||e===1}function em({scale:e,scaleX:t,scaleY:n}){return!ld(e)||!ld(t)||!ld(n)}function ci(e){return em(e)||V_(e)||e.z||e.rotate||e.rotateX||e.rotateY}function V_(e){return L1(e.x)||L1(e.y)}function L1(e){return e&&e!=="0%"}function Cc(e,t,n){const r=e-n,i=t*r;return n+i}function M1(e,t,n,r,i){return i!==void 0&&(e=Cc(e,i,r)),Cc(e,n,r)+t}function tm(e,t=0,n=1,r,i){e.min=M1(e.min,t,n,r,i),e.max=M1(e.max,t,n,r,i)}function B_(e,{x:t,y:n}){tm(e.x,t.translate,t.scale,t.originPoint),tm(e.y,n.translate,n.scale,n.originPoint)}function oL(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&vs(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,B_(e,o)),r&&ci(s.latestValues)&&vs(e,s.latestValues))}t.x=F1(t.x),t.y=F1(t.y)}function F1(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function dr(e,t){e.min=e.min+t,e.max=e.max+t}function U1(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=me(e.min,e.max,s);tm(e,t[n],t[r],o,t.scale)}const aL=["x","scaleX","originX"],lL=["y","scaleY","originY"];function vs(e,t){U1(e.x,t,aL),U1(e.y,t,lL)}function j_(e,t){return $_(sL(e.getBoundingClientRect(),t))}function uL(e,t,n){const r=j_(e,n),{scroll:i}=t;return i&&(dr(r.x,i.offset.x),dr(r.y,i.offset.y)),r}const cL=new WeakMap;class fL{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=l=>{this.stopAnimation(),n&&this.snapToCursor(Pf(l,"page").point)},s=(l,u)=>{const{drag:c,dragPropagation:f,onDragStart:h}=this.getProps();if(c&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=i_(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wn(m=>{let w=this.getAxisMotionValue(m).get()||0;if(Cn.test(w)){const{projection:E}=this.visualElement;if(E&&E.layout){const v=E.layout.layoutBox[m];v&&(w=$t(v)*(parseFloat(w)/100))}}this.originPoint[m]=w}),h&&ge.update(()=>h(l,u));const{animationState:d}=this.visualElement;d&&d.setActive("whileDrag",!0)},o=(l,u)=>{const{dragPropagation:c,dragDirectionLock:f,onDirectionLock:h,onDrag:d}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:m}=u;if(f&&this.currentDirection===null){this.currentDirection=hL(m),this.currentDirection!==null&&h&&h(this.currentDirection);return}this.updateAxis("x",u.point,m),this.updateAxis("y",u.point,m),this.visualElement.render(),d&&d(l,u)},a=(l,u)=>this.stop(l,u);this.panSession=new F_(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ge.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!tu(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=JD(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&gs(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=ZD(r.layoutBox,t):this.constraints=!1,this.elastic=rL(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&wn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=nL(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!gs(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=uL(r,i.root,this.visualElement.getTransformPagePoint());let o=eL(i.layout.layoutBox,s);if(n){const a=n(iL(o));this.hasMutatedConstraints=!!a,a&&(o=$_(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=wn(c=>{if(!tu(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=i?200:1e6,d=i?40:1e7,m={type:"inertia",velocity:r?t[c]:0,bounceStiffness:h,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(cy(t,r,0,n))}stopAnimation(){wn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){wn(n=>{const{drag:r}=this.getProps();if(!tu(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-me(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!gs(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};wn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=tL({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),wn(o=>{if(!tu(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(me(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;cL.set(this.visualElement,this);const t=this.visualElement.current,n=Bn(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();gs(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=Mn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(wn(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Zp,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function tu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function hL(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class dL extends ei{constructor(t){super(t),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new fL(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}unmount(){this.removeGroupControls(),this.removeListeners()}}const $1=e=>(t,n)=>{e&&ge.update(()=>e(t,n))};class pL extends ei{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(t){this.session=new F_(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:$1(t),onStart:$1(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ge.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=Bn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function mL(){const e=T.useContext(Gg);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=T.useId();return T.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function V1(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const To={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=V1(e,t.target.x),r=V1(e,t.target.y);return`${n}% ${r}%`}},z_=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function gL(e){const t=z_.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function nm(e,t,n=1){const[r,i]=gL(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);return s?s.trim():zp(i)?nm(i,t,n+1):i}function yL(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!zp(s))return;const o=nm(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!zp(s))continue;const o=nm(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const B1="_$css",vL={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=e.includes("var("),s=[];i&&(e=e.replace(z_,d=>(s.push(d),B1)));const o=zr.parse(e);if(o.length>5)return r;const a=zr.createTransformer(e),l=typeof o[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;o[0+l]/=u,o[1+l]/=c;const f=me(u,c,.5);typeof o[2+l]=="number"&&(o[2+l]/=f),typeof o[3+l]=="number"&&(o[3+l]/=f);let h=a(o);if(i){let d=0;h=h.replace(B1,()=>{const m=s[d];return d++,m})}return h}};class wL extends Lt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;k2(EL),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),qo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||ge.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function H_(e){const[t,n]=mL(),r=T.useContext(jT);return Lt.createElement(wL,{...e,layoutGroup:r,switchLayoutGroup:T.useContext(zT),isPresent:t,safeToRemove:n})}const EL={borderRadius:{...To,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:To,borderTopRightRadius:To,borderBottomLeftRadius:To,borderBottomRightRadius:To,boxShadow:vL},W_=["TopLeft","TopRight","BottomLeft","BottomRight"],SL=W_.length,j1=e=>typeof e=="string"?parseFloat(e):e,z1=e=>typeof e=="number"||V.test(e);function bL(e,t,n,r,i,s){i?(e.opacity=me(0,n.opacity!==void 0?n.opacity:1,TL(r)),e.opacityExit=me(t.opacity!==void 0?t.opacity:1,0,_L(r))):s&&(e.opacity=me(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<SL;o++){const a=`border${W_[o]}Radius`;let l=H1(t,a),u=H1(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||z1(l)===z1(u)?(e[a]=Math.max(me(j1(l),j1(u),r),0),(Cn.test(u)||Cn.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=me(t.rotate||0,n.rotate||0,r))}function H1(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const TL=q_(0,.5,sy),_L=q_(.5,.95,$e);function q_(e,t,n){return r=>r<e?0:r>t?1:n(Pa(e,t,r))}function W1(e,t){e.min=t.min,e.max=t.max}function qt(e,t){W1(e.x,t.x),W1(e.y,t.y)}function q1(e,t,n,r,i){return e-=t,e=Cc(e,1/n,r),i!==void 0&&(e=Cc(e,1/i,r)),e}function kL(e,t=0,n=1,r=.5,i,s=e,o=e){if(Cn.test(t)&&(t=parseFloat(t),t=me(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=me(s.min,s.max,r);e===s&&(a-=t),e.min=q1(e.min,t,n,a,i),e.max=q1(e.max,t,n,a,i)}function G1(e,t,[n,r,i],s,o){kL(e,t[n],t[r],t[i],t.scale,s,o)}const xL=["x","scaleX","originX"],CL=["y","scaleY","originY"];function K1(e,t,n,r){G1(e.x,t,xL,n?n.x:void 0,r?r.x:void 0),G1(e.y,t,CL,n?n.y:void 0,r?r.y:void 0)}function Y1(e){return e.translate===0&&e.scale===1}function G_(e){return Y1(e.x)&&Y1(e.y)}function rm(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function X1(e){return $t(e.x)/$t(e.y)}class IL{constructor(){this.members=[]}add(t){fy(this.members,t),t.scheduleRender()}remove(t){if(hy(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Q1(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const AL=(e,t)=>e.depth-t.depth;class PL{constructor(){this.children=[],this.isDirty=!1}add(t){fy(this.children,t),this.isDirty=!0}remove(t){hy(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(AL),this.isDirty=!1,this.children.forEach(t)}}function NL(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(jr.read(r),e(s-t))};return ge.read(r,!0),()=>jr.read(r)}function RL(e){window.MotionDebug&&window.MotionDebug.record(e)}function OL(e){return e instanceof SVGElement&&e.tagName!=="svg"}function DL(e,t,n){const r=At(e)?e:js(e);return r.start(cy("",r,t,n)),r.animation}const J1=["","X","Y","Z"],Z1=1e3;let LL=0;const fi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function K_({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o,a={},l=t==null?void 0:t()){this.id=LL++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{fi.totalNodes=fi.resolvedTargetDeltas=fi.recalculatedProjection=0,this.nodes.forEach(UL),this.nodes.forEach(jL),this.nodes.forEach(zL),this.nodes.forEach($L),RL(fi)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=o,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,o&&this.root.registerPotentialNode(o,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new PL)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new dy),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}registerPotentialNode(o,a){this.potentialNodes.set(o,a)}mount(o,a=!1){if(this.instance)return;this.isSVG=OL(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=NL(h,250),qo.hasAnimatedSinceResize&&(qo.hasAnimatedSinceResize=!1,this.nodes.forEach(tw))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:d,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||c.getDefaultTransition()||KL,{onLayoutAnimationStart:E,onLayoutAnimationComplete:v}=c.getProps(),p=!this.targetLayout||!rm(this.targetLayout,m)||d,y=!h&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||h&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const S={...O_(w,"layout"),onPlay:E,onComplete:v};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else!h&&this.animationProgress===0&&tw(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,jr.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(HL),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ew);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(YL),this.potentialNodes.clear()),this.nodes.forEach(BL),this.nodes.forEach(ML),this.nodes.forEach(FL),this.clearAllSnapshots(),Jh.update(),Jh.preRender(),Jh.render())}clearAllSnapshots(){this.nodes.forEach(VL),this.sharedNodes.forEach(WL)}scheduleUpdateProjection(){ge.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){ge.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!G_(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||ci(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),XL(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Ae();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(dr(a.x,l.offset.x),dr(a.y,l.offset.y)),a}removeElementScroll(o){const a=Ae();qt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){qt(a,o);const{scroll:h}=this.root;h&&(dr(a.x,-h.offset.x),dr(a.y,-h.offset.y))}dr(a.x,c.offset.x),dr(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=Ae();qt(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&vs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),ci(c.latestValues)&&vs(l,c.latestValues)}return ci(this.latestValues)&&vs(l,this.latestValues),l}removeTransform(o){const a=Ae();qt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ci(u.latestValues))continue;em(u.latestValues)&&u.updateSnapshot();const c=Ae(),f=u.measurePageBox();qt(c,f),K1(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return ci(this.latestValues)&&K1(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=st.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout?(this.relativeParent=d,this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Xo(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0),QD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qt(this.target,this.layout.layoutBox),B_(this.target,this.targetDelta)):qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target?(this.relativeParent=d,this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Xo(this.relativeTargetOrigin,this.target,d.target),qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||em(this.parent.latestValues)||V_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===st.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;qt(this.layoutCorrected,this.layout.layoutBox),oL(this.layoutCorrected,this.treeScale,this.path,l);const{target:h}=a;if(!h)return;this.projectionDelta||(this.projectionDelta=Qo(),this.projectionDeltaWithTransform=Qo());const d=this.treeScale.x,m=this.treeScale.y,w=this.projectionTransform;Yo(this.projectionDelta,this.layoutCorrected,h,this.latestValues),this.projectionTransform=Q1(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==d||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",h)),fi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Qo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Ae(),d=l?l.source:void 0,m=this.layout?this.layout.source:void 0,w=d!==m,E=this.getStack(),v=!E||E.members.length<=1,p=!!(w&&!v&&this.options.crossfade===!0&&!this.path.some(GL));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const b=S/1e3;nw(f.x,o.x,b),nw(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xo(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),qL(this.relativeTarget,this.relativeTargetOrigin,h,b),y&&rm(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Ae()),qt(y,this.relativeTarget)),w&&(this.animationValues=c,bL(c,u,this.latestValues,b,p,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(jr.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ge.update(()=>{qo.hasAnimatedSinceResize=!0,this.currentAnimation=DL(0,Z1,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Z1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Y_(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ae();const f=$t(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=$t(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}qt(a,l),vs(a,c),Yo(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new IL),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<J1.length;c++){const f="rotate"+J1[c];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o={}){var a,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Du(o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=Du(o.pointerEvents)||""),this.hasProjected&&!ci(this.latestValues)&&(w.transform=c?c({},""):"none",this.hasProjected=!1),w}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Q1(this.projectionDeltaWithTransform,this.treeScale,h),c&&(u.transform=c(h,u.transform));const{x:d,y:m}=this.projectionDelta;u.transformOrigin=`${d.origin*100}% ${m.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in Ec){if(h[w]===void 0)continue;const{correct:E,applyTo:v}=Ec[w],p=u.transform==="none"?h[w]:E(h[w],f);if(v){const y=v.length;for(let S=0;S<y;S++)u[v[S]]=p}else u[w]=p}return this.options.layoutId&&(u.pointerEvents=f===this?Du(o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ew),this.root.sharedNodes.clear()}}}function ML(e){e.updateLayout()}function FL(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?wn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],d=$t(h);h.min=r[f].min,h.max=h.min+d}):Y_(s,n.layoutBox,r)&&wn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],d=$t(r[f]);h.max=h.min+d,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+d)});const a=Qo();Yo(a,r,n.layoutBox);const l=Qo();o?Yo(l,e.applyTransform(i,!0),n.measuredBox):Yo(l,r,n.layoutBox);const u=!G_(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:d}=f;if(h&&d){const m=Ae();Xo(m,n.layoutBox,h.layoutBox);const w=Ae();Xo(w,r,d.layoutBox),rm(m,w)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=m,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function UL(e){fi.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $L(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function VL(e){e.clearSnapshot()}function ew(e){e.clearMeasurements()}function BL(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function tw(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function jL(e){e.resolveTargetDelta()}function zL(e){e.calcProjection()}function HL(e){e.resetRotation()}function WL(e){e.removeLeadSnapshot()}function nw(e,t,n){e.translate=me(t.translate,0,n),e.scale=me(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function rw(e,t,n,r){e.min=me(t.min,n.min,r),e.max=me(t.max,n.max,r)}function qL(e,t,n,r){rw(e.x,t.x,n.x,r),rw(e.y,t.y,n.y,r)}function GL(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const KL={duration:.45,ease:[.4,0,.1,1]};function YL(e,t){let n=e.root;for(let s=e.path.length-1;s>=0;s--)if(e.path[s].instance){n=e.path[s];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function iw(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function XL(e){iw(e.x),iw(e.y)}function Y_(e,t,n){return e==="position"||e==="preserve-aspect"&&!Jp(X1(t),X1(n),.2)}const QL=K_({attachResizeListener:(e,t)=>Mn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ud={current:void 0},X_=K_({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ud.current){const e=new QL(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),ud.current=e}return ud.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),JL={pan:{Feature:pL},drag:{Feature:dL,ProjectionNode:X_,MeasureLayout:H_}},ZL=new Set(["width","height","top","left","right","bottom","x","y"]),Q_=e=>ZL.has(e),eM=e=>Object.keys(e).some(Q_),sw=e=>e===Yi||e===V,ow=(e,t)=>parseFloat(e.split(", ")[t]),aw=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return ow(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?ow(s[1],e):0}},tM=new Set(["x","y","z"]),nM=Af.filter(e=>!tM.has(e));function rM(e){const t=[];return nM.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const lw={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:aw(4,13),y:aw(5,14)},iM=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=lw[u](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=lw[u](l,s)}),e},sM=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Q_);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],f=bo(c);const h=t[l];let d;if(bc(h)){const m=h.length,w=h[0]===null?1:0;c=h[w],f=bo(c);for(let E=w;E<m;E++)d?iy(bo(h[E])===d):d=bo(h[E])}else d=bo(h);if(f!==d)if(sw(f)&&sw(d)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&d===V&&(t[l]=h.map(parseFloat))}else f!=null&&f.transform&&(d!=null&&d.transform)&&(c===0||h===0)?c===0?u.set(d.transform(c)):t[l]=f.transform(h):(o||(s=rM(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=iM(t,e,a);return s.length&&s.forEach(([c,f])=>{e.getValue(c).set(f)}),e.render(),xf&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function oM(e,t,n,r){return eM(t)?sM(e,t,n,r):{target:t,transitionEnd:r}}const aM=(e,t,n,r)=>{const i=yL(e,t,r);return t=i.target,r=i.transitionEnd,oM(e,t,n,r)},im={current:null},J_={current:!1};function lM(){if(J_.current=!0,!!xf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>im.current=e.matches;e.addListener(t),t()}else im.current=!1}function uM(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(At(s))e.addValue(i,s),xc(r)&&r.add(i);else if(At(o))e.addValue(i,js(s,{owner:e})),xc(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,js(a!==void 0?a:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const uw=new WeakMap,Z_=Object.keys(Ca),cM=Z_.length,cw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],fM=Yg.length;class hM{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ge.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=If(n),this.isVariantNode=VT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const h=c[f];a[f]!==void 0&&At(h)&&(h.set(a[f],!1),xc(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,uw.set(t,this),this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),J_.current||lM(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:im.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){uw.delete(this.current),this.projection&&this.projection.unmount(),jr.update(this.notifyUpdate),jr.render(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Ki.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&ge.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s,o){let a,l;for(let u=0;u<cM;u++){const c=Z_[u],{isEnabled:f,Feature:h,ProjectionNode:d,MeasureLayout:m}=Ca[c];d&&(a=d),f(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),m&&(l=m))}if(!this.projection&&a){this.projection=new a(s,this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:f,dragConstraints:h,layoutScroll:d,layoutRoot:m}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!f||h&&gs(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:d,layoutRoot:m})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update(this.props,this.prevProps):(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cw.length;r++){const i=cw[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=uM(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<fM;r++){const i=Yg[r],s=this.props[i];(xa(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=js(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=ry(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!At(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new dy),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ek extends hM{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=OD(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){ND(this,r,o);const a=aM(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function dM(e){return window.getComputedStyle(e)}class pM extends ek{readValueFromInstance(t,n){if(Ki.has(n)){const r=ly(n);return r&&r.default||0}else{const r=dM(t),i=(qT(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return j_(t,n)}build(t,n,r,i){Qg(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return ny(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;At(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){QT(t,n,r,i)}}class mM extends ek{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ki.has(n)){const r=ly(n);return r&&r.default||0}return n=JT.has(n)?n:ty(n),t.getAttribute(n)}measureInstanceViewportBox(){return Ae()}scrapeMotionValuesFromProps(t,n){return e_(t,n)}build(t,n,r,i){Zg(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){ZT(t,n,r,i)}mount(t){this.isSVGTag=ey(t.tagName),super.mount(t)}}const gM=(e,t)=>Xg(e)?new mM(t,{enableHardwareAcceleration:!1}):new pM(t,{enableHardwareAcceleration:!0}),yM={layout:{ProjectionNode:X_,MeasureLayout:H_}},vM={...GD,...pO,...JL,...yM},Ic=T2((e,t)=>Q2(e,t,vM,gM));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},wM=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},nk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(h=64)),r.push(n[c],n[f],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tk(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wM(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new EM;const h=s<<2|a>>4;if(r.push(h),u!==64){const d=a<<4&240|u>>2;if(r.push(d),f!==64){const m=u<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class EM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SM=function(e){const t=tk(e);return nk.encodeByteArray(t,!0)},Ac=function(e){return SM(e).replace(/\./g,"")},rk=function(e){try{return nk.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=()=>bM().__FIREBASE_DEFAULTS__,_M=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kM=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rk(e[1]);return t&&JSON.parse(t)},Of=()=>{try{return TM()||_M()||kM()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ik=e=>{var t,n;return(n=(t=Of())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sk=e=>{const t=ik(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},xM=()=>{var e;return(e=Of())===null||e===void 0?void 0:e.config},ok=e=>{var t;return(t=Of())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ac(JSON.stringify(n)),Ac(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function AM(){var e;const t=(e=Of())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function PM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NM(){const e=ct();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function uk(){try{return typeof indexedDB=="object"}catch{return!1}}function ck(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function RM(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM="FirebaseError";class en extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=OM,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?DM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function DM(e,t){return e.replace(LM,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const LM=/\{\$([^}]+)}/g;function MM(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Na(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(fw(s)&&fw(o)){if(!Na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ro(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Oo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function FM(e,t){const n=new UM(e,t);return n.subscribe.bind(n)}class UM{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$M(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=cd),i.error===void 0&&(i.error=cd),i.complete===void 0&&(i.complete=cd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $M(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function cd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=1e3,BM=2,jM=4*60*60*1e3,zM=.5;function hw(e,t=VM,n=BM){const r=t*Math.pow(n,e),i=Math.round(zM*r*(Math.random()-.5)*2);return Math.min(jM,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return e&&e._delegate?e._delegate:e}class Zt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new CM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qM(t))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=hi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hi){return this.instances.has(t)}getOptions(t=hi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WM(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hi){return this.component?this.component.multipleInstances?t:hi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WM(e){return e===hi?void 0:e}function qM(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new HM(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ee||(ee={}));const KM={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},YM=ee.INFO,XM={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},QM=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=XM[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Df{constructor(t){this.name=t,this._logLevel=YM,this._logHandler=QM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?KM[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...t),this._logHandler(this,ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...t),this._logHandler(this,ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...t),this._logHandler(this,ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...t),this._logHandler(this,ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...t),this._logHandler(this,ee.ERROR,...t)}}const JM=(e,t)=>t.some(n=>e instanceof n);let dw,pw;function ZM(){return dw||(dw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e4(){return pw||(pw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fk=new WeakMap,sm=new WeakMap,hk=new WeakMap,fd=new WeakMap,py=new WeakMap;function t4(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Mr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fk.set(n,e)}).catch(()=>{}),py.set(t,e),t}function n4(e){if(sm.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});sm.set(e,t)}let om={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function r4(e){om=e(om)}function i4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hd(this),t,...n);return hk.set(r,t.sort?t.sort():[t]),Mr(r)}:e4().includes(e)?function(...t){return e.apply(hd(this),t),Mr(fk.get(this))}:function(...t){return Mr(e.apply(hd(this),t))}}function s4(e){return typeof e=="function"?i4(e):(e instanceof IDBTransaction&&n4(e),JM(e,ZM())?new Proxy(e,om):e)}function Mr(e){if(e instanceof IDBRequest)return t4(e);if(fd.has(e))return fd.get(e);const t=s4(e);return t!==e&&(fd.set(e,t),py.set(t,e)),t}const hd=e=>py.get(e);function dk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const o4=["get","getKey","getAll","getAllKeys","count"],a4=["put","add","delete","clear"],dd=new Map;function mw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(dd.get(t))return dd.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||o4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return dd.set(t,s),s}r4(e=>({...e,get:(t,n,r)=>mw(t,n)||e.get(t,n,r),has:(t,n)=>!!mw(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u4(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const am="@firebase/app",gw="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Df("@firebase/app"),c4="@firebase/app-compat",f4="@firebase/analytics-compat",h4="@firebase/analytics",d4="@firebase/app-check-compat",p4="@firebase/app-check",m4="@firebase/auth",g4="@firebase/auth-compat",y4="@firebase/database",v4="@firebase/database-compat",w4="@firebase/functions",E4="@firebase/functions-compat",S4="@firebase/installations",b4="@firebase/installations-compat",T4="@firebase/messaging",_4="@firebase/messaging-compat",k4="@firebase/performance",x4="@firebase/performance-compat",C4="@firebase/remote-config",I4="@firebase/remote-config-compat",A4="@firebase/storage",P4="@firebase/storage-compat",N4="@firebase/firestore",R4="@firebase/firestore-compat",O4="firebase",D4="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="[DEFAULT]",L4={[am]:"fire-core",[c4]:"fire-core-compat",[h4]:"fire-analytics",[f4]:"fire-analytics-compat",[p4]:"fire-app-check",[d4]:"fire-app-check-compat",[m4]:"fire-auth",[g4]:"fire-auth-compat",[y4]:"fire-rtdb",[v4]:"fire-rtdb-compat",[w4]:"fire-fn",[E4]:"fire-fn-compat",[S4]:"fire-iid",[b4]:"fire-iid-compat",[T4]:"fire-fcm",[_4]:"fire-fcm-compat",[k4]:"fire-perf",[x4]:"fire-perf-compat",[C4]:"fire-rc",[I4]:"fire-rc-compat",[A4]:"fire-gcs",[P4]:"fire-gcs-compat",[N4]:"fire-fst",[R4]:"fire-fst-compat","fire-js":"fire-js",[O4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map,um=new Map;function M4(e,t){try{e.container.addComponent(t)}catch(n){Li.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dn(e){const t=e.name;if(um.has(t))return Li.debug(`There were multiple attempts to register component ${t}.`),!1;um.set(t,e);for(const n of Pc.values())M4(n,e);return!0}function ti(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fr=new Xi("app","Firebase",F4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=D4;function pk(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:lm,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=xM()),!n)throw Fr.create("no-options");const s=Pc.get(i);if(s){if(Na(n,s.options)&&Na(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new GM(i);for(const l of um.values())o.addComponent(l);const a=new U4(n,r,o);return Pc.set(i,a),a}function Lf(e=lm){const t=Pc.get(e);if(!t&&e===lm)return pk();if(!t)throw Fr.create("no-app",{appName:e});return t}function Ct(e,t,n){var r;let i=(r=L4[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Li.warn(a.join(" "));return}dn(new Zt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4="firebase-heartbeat-database",V4=1,Ra="firebase-heartbeat-store";let pd=null;function mk(){return pd||(pd=dk($4,V4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ra)}}}).catch(e=>{throw Fr.create("idb-open",{originalErrorMessage:e.message})})),pd}async function B4(e){try{return(await mk()).transaction(Ra).objectStore(Ra).get(gk(e))}catch(t){if(t instanceof en)Li.warn(t.message);else{const n=Fr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Li.warn(n.message)}}}async function yw(e,t){try{const r=(await mk()).transaction(Ra,"readwrite");return await r.objectStore(Ra).put(t,gk(e)),r.done}catch(n){if(n instanceof en)Li.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Li.warn(r.message)}}}function gk(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=1024,z4=30*24*60*60*1e3;class H4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=z4}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vw(),{heartbeatsToSend:n,unsentEntries:r}=W4(this._heartbeatsCache.heartbeats),i=Ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vw(){return new Date().toISOString().substring(0,10)}function W4(e,t=j4){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ww(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ww(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uk()?ck().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await B4(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ww(e){return Ac(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(e){dn(new Zt("platform-logger",t=>new l4(t),"PRIVATE")),dn(new Zt("heartbeat",t=>new H4(t),"PRIVATE")),Ct(am,gw,e),Ct(am,gw,"esm2017"),Ct("fire-js","")}G4("");var K4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,my=my||{},j=K4||self;function Nc(){}function Mf(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function fl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Y4(e){return Object.prototype.hasOwnProperty.call(e,md)&&e[md]||(e[md]=++X4)}var md="closure_uid_"+(1e9*Math.random()>>>0),X4=0;function Q4(e,t,n){return e.call.apply(e.bind,arguments)}function J4(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function at(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=Q4:at=J4,at.apply(null,arguments)}function nu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Qe(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ni(){this.s=this.s,this.o=this.o}var Z4=0;ni.prototype.s=!1;ni.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Z4!=0)&&Y4(this)};ni.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yk=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function gy(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ew(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Mf(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var e3=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{j.addEventListener("test",Nc,t),j.removeEventListener("test",Nc,t)}catch{}return e}();function Rc(e){return/^[\s\xa0]*$/.test(e)}var Sw=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function gd(e,t){return e<t?-1:e>t?1:0}function Ff(){var e=j.navigator;return e&&(e=e.userAgent)?e:""}function Sn(e){return Ff().indexOf(e)!=-1}function yy(e){return yy[" "](e),e}yy[" "]=Nc;function t3(e){var t=i3;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var n3=Sn("Opera"),zs=Sn("Trident")||Sn("MSIE"),vk=Sn("Edge"),cm=vk||zs,wk=Sn("Gecko")&&!(Ff().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),r3=Ff().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function Ek(){var e=j.document;return e?e.documentMode:void 0}var Oc;e:{var yd="",vd=function(){var e=Ff();if(wk)return/rv:([^\);]+)(\)|;)/.exec(e);if(vk)return/Edge\/([\d\.]+)/.exec(e);if(zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(r3)return/WebKit\/(\S+)/.exec(e);if(n3)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(vd&&(yd=vd?vd[1]:""),zs){var wd=Ek();if(wd!=null&&wd>parseFloat(yd)){Oc=String(wd);break e}}Oc=yd}var i3={};function s3(){return t3(function(){let e=0;const t=Sw(String(Oc)).split("."),n=Sw("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=gd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||gd(i[2].length==0,s[2].length==0)||gd(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var fm;if(j.document&&zs){var bw=Ek();fm=bw||parseInt(Oc,10)||void 0}else fm=void 0;var o3=fm;function Oa(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wk){e:{try{yy(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:a3[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Oa.X.h.call(this)}}Qe(Oa,lt);var a3={2:"touch",3:"pen",4:"mouse"};Oa.prototype.h=function(){Oa.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var hl="closure_listenable_"+(1e6*Math.random()|0),l3=0;function u3(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++l3,this.ba=this.ea=!1}function Uf(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function vy(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Sk(e){const t={};for(const n in e)t[n]=e[n];return t}const Tw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bk(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Tw.length;s++)n=Tw[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $f(e){this.src=e,this.g={},this.h=0}$f.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=dm(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new u3(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function hm(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=yk(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Uf(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function dm(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var wy="closure_lm_"+(1e6*Math.random()|0),Ed={};function Tk(e,t,n,r,i){if(r&&r.once)return kk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Tk(e,t[s],n,r,i);return null}return n=by(n),e&&e[hl]?e.N(t,n,fl(r)?!!r.capture:!!r,i):_k(e,t,n,!1,r,i)}function _k(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=fl(i)?!!i.capture:!!i,a=Sy(e);if(a||(e[wy]=a=new $f(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=c3(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)e3||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ck(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c3(){function e(n){return t.call(e.src,e.listener,n)}const t=f3;return e}function kk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)kk(e,t[s],n,r,i);return null}return n=by(n),e&&e[hl]?e.O(t,n,fl(r)?!!r.capture:!!r,i):_k(e,t,n,!0,r,i)}function xk(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)xk(e,t[s],n,r,i);else r=fl(r)?!!r.capture:!!r,n=by(n),e&&e[hl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=dm(s,n,r,i),-1<n&&(Uf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Sy(e))&&(t=e.g[t.toString()],e=-1,t&&(e=dm(t,n,r,i)),(n=-1<e?t[e]:null)&&Ey(n))}function Ey(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[hl])hm(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ck(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Sy(t))?(hm(n,e),n.h==0&&(n.src=null,t[wy]=null)):Uf(e)}}}function Ck(e){return e in Ed?Ed[e]:Ed[e]="on"+e}function f3(e,t){if(e.ba)e=!0;else{t=new Oa(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ey(e),e=n.call(r,t)}return e}function Sy(e){return e=e[wy],e instanceof $f?e:null}var Sd="__closure_events_fn_"+(1e9*Math.random()>>>0);function by(e){return typeof e=="function"?e:(e[Sd]||(e[Sd]=function(t){return e.handleEvent(t)}),e[Sd])}function ze(){ni.call(this),this.i=new $f(this),this.P=this,this.I=null}Qe(ze,ni);ze.prototype[hl]=!0;ze.prototype.removeEventListener=function(e,t,n,r){xk(this,e,t,n,r)};function Ye(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var i=t;t=new lt(r,e),bk(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ru(o,r,!0,t)&&i}if(o=t.g=e,i=ru(o,r,!0,t)&&i,i=ru(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ru(o,r,!1,t)&&i}ze.prototype.M=function(){if(ze.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Uf(n[r]);delete e.g[t],e.h--}}this.I=null};ze.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ze.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ru(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&hm(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ty=j.JSON.stringify;function h3(){var e=Pk;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class d3{constructor(){this.h=this.g=null}add(t,n){const r=Ik.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ik=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new p3,e=>e.reset());class p3{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function m3(e){j.setTimeout(()=>{throw e},0)}function Ak(e,t){pm||g3(),mm||(pm(),mm=!0),Pk.add(e,t)}var pm;function g3(){var e=j.Promise.resolve(void 0);pm=function(){e.then(y3)}}var mm=!1,Pk=new d3;function y3(){for(var e;e=h3();){try{e.h.call(e.g)}catch(n){m3(n)}var t=Ik;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}mm=!1}function Vf(e,t){ze.call(this),this.h=e||1,this.g=t||j,this.j=at(this.lb,this),this.l=Date.now()}Qe(Vf,ze);M=Vf.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ye(this,"tick"),this.ca&&(_y(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _y(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}M.M=function(){Vf.X.M.call(this),_y(this),delete this.g};function ky(e,t,n){if(typeof e=="function")n&&(e=at(e,n));else if(e&&typeof e.handleEvent=="function")e=at(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:j.setTimeout(e,t||0)}function Nk(e){e.g=ky(()=>{e.g=null,e.i&&(e.i=!1,Nk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class v3 extends ni{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nk(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Da(e){ni.call(this),this.h=e,this.g={}}Qe(Da,ni);var _w=[];function Rk(e,t,n,r){Array.isArray(n)||(n&&(_w[0]=n.toString()),n=_w);for(var i=0;i<n.length;i++){var s=Tk(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ok(e){vy(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ey(t)},e),e.g={}}Da.prototype.M=function(){Da.X.M.call(this),Ok(this)};Da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bf(){this.g=!0}Bf.prototype.Aa=function(){this.g=!1};function w3(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function E3(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ws(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+b3(e,n)+(r?" "+r:"")})}function S3(e,t){e.info(function(){return"TIMEOUT: "+t})}Bf.prototype.info=function(){};function b3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ty(n)}catch{return t}}var Qi={},kw=null;function jf(){return kw=kw||new ze}Qi.Pa="serverreachability";function Dk(e){lt.call(this,Qi.Pa,e)}Qe(Dk,lt);function La(e){const t=jf();Ye(t,new Dk(t))}Qi.STAT_EVENT="statevent";function Lk(e,t){lt.call(this,Qi.STAT_EVENT,e),this.stat=t}Qe(Lk,lt);function mt(e){const t=jf();Ye(t,new Lk(t,e))}Qi.Qa="timingevent";function Mk(e,t){lt.call(this,Qi.Qa,e),this.size=t}Qe(Mk,lt);function dl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){e()},t)}var zf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xy(){}xy.prototype.h=null;function xw(e){return e.h||(e.h=e.i())}function Uk(){}var pl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cy(){lt.call(this,"d")}Qe(Cy,lt);function Iy(){lt.call(this,"c")}Qe(Iy,lt);var gm;function Hf(){}Qe(Hf,xy);Hf.prototype.g=function(){return new XMLHttpRequest};Hf.prototype.i=function(){return{}};gm=new Hf;function ml(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Da(this),this.O=T3,e=cm?125:void 0,this.T=new Vf(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $k}function $k(){this.i=null,this.g="",this.h=!1}var T3=45e3,ym={},Dc={};M=ml.prototype;M.setTimeout=function(e){this.O=e};function vm(e,t,n){e.K=1,e.v=qf(Qn(t)),e.s=n,e.P=!0,Vk(e,null)}function Vk(e,t){e.F=Date.now(),gl(e),e.A=Qn(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Kk(n.i,"t",r),e.C=0,n=e.l.H,e.h=new $k,e.g=mx(e.l,n?t:null,!e.s),0<e.N&&(e.L=new v3(at(e.La,e,e.g),e.N)),Rk(e.S,e.g,"readystatechange",e.ib),t=e.H?Sk(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),La(),w3(e.j,e.u,e.A,e.m,e.U,e.s)}M.ib=function(e){e=e.target;const t=this.L;t&&Fn(e)==3?t.l():this.La(e)};M.La=function(e){try{if(e==this.g)e:{const c=Fn(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||cm||this.g&&(this.h.h||this.g.fa()||Pw(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?La(3):La(2)),Wf(this);var n=this.g.aa();this.Y=n;t:if(Bk(this)){var r=Pw(this.g);e="";var i=r.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),Jo(this);var o="";break t}this.h.i=new j.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,E3(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rc(a)){var u=a;break t}}u=null}if(n=u)ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wm(this,n);else{this.i=!1,this.o=3,mt(12),yi(this),Jo(this);break e}}this.P?(jk(this,c,o),cm&&this.i&&c==3&&(Rk(this.S,this.T,"tick",this.hb),this.T.start())):(ws(this.j,this.m,o,null),wm(this,o)),c==4&&yi(this),this.i&&!this.I&&(c==4?fx(this.l,this):(this.i=!1,gl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),yi(this),Jo(this)}}}catch{}finally{}};function Bk(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function jk(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=_3(e,n),i==Dc){t==4&&(e.o=4,mt(14),r=!1),ws(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ym){e.o=4,mt(15),ws(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ws(e.j,e.m,i,null),wm(e,i);Bk(e)&&i!=Dc&&i!=ym&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,mt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ly(t),t.K=!0,mt(11))):(ws(e.j,e.m,n,"[Invalid Chunked Response]"),yi(e),Jo(e))}M.hb=function(){if(this.g){var e=Fn(this.g),t=this.g.fa();this.C<t.length&&(Wf(this),jk(this,e,t),this.i&&e!=4&&gl(this))}};function _3(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Dc:(n=Number(t.substring(n,r)),isNaN(n)?ym:(r+=1,r+n>t.length?Dc:(t=t.substr(r,n),e.C=r+n,t)))}M.cancel=function(){this.I=!0,yi(this)};function gl(e){e.V=Date.now()+e.O,zk(e,e.O)}function zk(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=dl(at(e.gb,e),t)}function Wf(e){e.B&&(j.clearTimeout(e.B),e.B=null)}M.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(S3(this.j,this.A),this.K!=2&&(La(),mt(17)),yi(this),this.o=2,Jo(this)):zk(this,this.V-e)};function Jo(e){e.l.G==0||e.I||fx(e.l,e)}function yi(e){Wf(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,_y(e.T),Ok(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function wm(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Em(n.h,e))){if(!e.J&&Em(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Fc(n),Yf(n);else break e;Dy(n),mt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=dl(at(n.cb,n),6e3));if(1>=Qk(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else vi(n,11)}else if((e.J||n.g==e)&&Fc(n),!Rc(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ay(s,s.h),s.h=null))}if(r.D){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,fe(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=px(r,r.H?r.ka:null,r.V),o.J){Jk(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Wf(a),gl(a)),r.g=o}else ux(r);0<n.i.length&&Xf(n)}else u[0]!="stop"&&u[0]!="close"||vi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vi(n,7):Oy(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}La(4)}catch{}}function k3(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Mf(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function x3(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Mf(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Hk(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Mf(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=x3(e),r=k3(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Wk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ki(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ki){this.h=t!==void 0?t:e.h,Lc(this,e.j),this.s=e.s,this.g=e.g,Mc(this,e.m),this.l=e.l,t=e.i;var n=new Ma;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Cw(this,n),this.o=e.o}else e&&(n=String(e).match(Wk))?(this.h=!!t,Lc(this,n[1]||"",!0),this.s=Do(n[2]||""),this.g=Do(n[3]||"",!0),Mc(this,n[4]),this.l=Do(n[5]||"",!0),Cw(this,n[6]||"",!0),this.o=Do(n[7]||"")):(this.h=!!t,this.i=new Ma(null,this.h))}ki.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Lo(t,Iw,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Lo(t,Iw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Lo(n,n.charAt(0)=="/"?P3:A3,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Lo(n,R3)),e.join("")};function Qn(e){return new ki(e)}function Lc(e,t,n){e.j=n?Do(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Cw(e,t,n){t instanceof Ma?(e.i=t,O3(e.i,e.h)):(n||(t=Lo(t,N3)),e.i=new Ma(t,e.h))}function fe(e,t,n){e.i.set(t,n)}function qf(e){return fe(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Do(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Lo(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,I3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function I3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Iw=/[#\/\?@]/g,A3=/[#\?:]/g,P3=/[#\?]/g,N3=/[#\?@]/g,R3=/#/g;function Ma(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ri(e){e.g||(e.g=new Map,e.h=0,e.i&&C3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}M=Ma.prototype;M.add=function(e,t){ri(this),this.i=null,e=io(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function qk(e,t){ri(e),t=io(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Gk(e,t){return ri(e),t=io(e,t),e.g.has(t)}M.forEach=function(e,t){ri(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};M.oa=function(){ri(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};M.W=function(e){ri(this);let t=[];if(typeof e=="string")Gk(this,e)&&(t=t.concat(this.g.get(io(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};M.set=function(e,t){return ri(this),this.i=null,e=io(this,e),Gk(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};M.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Kk(e,t,n){qk(e,t),0<n.length&&(e.i=null,e.g.set(io(e,t),gy(n)),e.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function io(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function O3(e,t){t&&!e.j&&(ri(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(qk(this,r),Kk(this,i,n))},e)),e.j=t}var D3=class{constructor(e,t){this.h=e,this.g=t}};function Yk(e){this.l=e||L3,j.PerformanceNavigationTiming?(e=j.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(j.g&&j.g.Ga&&j.g.Ga()&&j.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L3=10;function Xk(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qk(e){return e.h?1:e.g?e.g.size:0}function Em(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ay(e,t){e.g?e.g.add(t):e.h=t}function Jk(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Yk.prototype.cancel=function(){if(this.i=Zk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Zk(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return gy(e.i)}function Py(){}Py.prototype.stringify=function(e){return j.JSON.stringify(e,void 0)};Py.prototype.parse=function(e){return j.JSON.parse(e,void 0)};function M3(){this.g=new Py}function F3(e,t,n){const r=n||"";try{Hk(e,function(i,s){let o=i;fl(i)&&(o=Ty(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function U3(e,t){const n=new Bf;if(j.Image){const r=new Image;r.onload=nu(iu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=nu(iu,n,r,"TestLoadImage: error",!1,t),r.onabort=nu(iu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=nu(iu,n,r,"TestLoadImage: timeout",!1,t),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function iu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function yl(e){this.l=e.ac||null,this.j=e.jb||!1}Qe(yl,xy);yl.prototype.g=function(){return new Gf(this.l,this.j)};yl.prototype.i=function(e){return function(){return e}}({});function Gf(e,t){ze.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ny,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Gf,ze);var Ny=0;M=Gf.prototype;M.open=function(e,t){if(this.readyState!=Ny)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fa(this)};M.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||j).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vl(this)),this.readyState=Ny};M.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fa(this)),this.g&&(this.readyState=3,Fa(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ex(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ex(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}M.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vl(this):Fa(this),this.readyState==3&&ex(this)}};M.Va=function(e){this.g&&(this.response=this.responseText=e,vl(this))};M.Ua=function(e){this.g&&(this.response=e,vl(this))};M.ga=function(){this.g&&vl(this)};function vl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fa(e)}M.setRequestHeader=function(e,t){this.v.append(e,t)};M.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fa(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Gf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var $3=j.JSON.parse;function Te(e){ze.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tx,this.K=this.L=!1}Qe(Te,ze);var tx="",V3=/^https?$/i,B3=["POST","PUT"];M=Te.prototype;M.Ka=function(e){this.L=e};M.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gm.g(),this.C=this.u?xw(this.u):xw(gm),this.g.onreadystatechange=at(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){Aw(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&e instanceof j.FormData,!(0<=yk(B3,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ix(this),0<this.B&&((this.K=j3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.qa,this)):this.A=ky(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Aw(this,s)}};function j3(e){return zs&&s3()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}M.qa=function(){typeof my<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Aw(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nx(e),Kf(e)}function nx(e){e.D||(e.D=!0,Ye(e,"complete"),Ye(e,"error"))}M.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ye(this,"complete"),Ye(this,"abort"),Kf(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kf(this,!0)),Te.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?rx(this):this.fb())};M.fb=function(){rx(this)};function rx(e){if(e.h&&typeof my<"u"&&(!e.C[1]||Fn(e)!=4||e.aa()!=2)){if(e.v&&Fn(e)==4)ky(e.Ha,0,e);else if(Ye(e,"readystatechange"),Fn(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(Wk)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!V3.test(i?i.toLowerCase():"")}n=r}if(n)Ye(e,"complete"),Ye(e,"success");else{e.m=6;try{var o=2<Fn(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",nx(e)}}finally{Kf(e)}}}}function Kf(e,t){if(e.g){ix(e);const n=e.g,r=e.C[0]?Nc:null;e.g=null,e.C=null,t||Ye(e,"ready");try{n.onreadystatechange=r}catch{}}}function ix(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(j.clearTimeout(e.A),e.A=null)}function Fn(e){return e.g?e.g.readyState:0}M.aa=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),$3(t)}};function Pw(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tx:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sx(e){let t="";return vy(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ry(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sx(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):fe(e,t,n))}function _o(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ox(e){this.Ca=0,this.i=[],this.j=new Bf,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_o("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_o("baseRetryDelayMs",5e3,e),this.bb=_o("retryDelaySeedMs",1e4,e),this.$a=_o("forwardChannelMaxRetries",2,e),this.ta=_o("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Yk(e&&e.concurrentRequestLimit),this.Fa=new M3,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=ox.prototype;M.ma=8;M.G=1;function Oy(e){if(ax(e),e.G==3){var t=e.U++,n=Qn(e.F);fe(n,"SID",e.I),fe(n,"RID",t),fe(n,"TYPE","terminate"),wl(e,n),t=new ml(e,e.j,t,void 0),t.K=2,t.v=qf(Qn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(t.v.toString(),"")),!n&&j.Image&&(new Image().src=t.v,n=!0),n||(t.g=mx(t.l,null),t.g.da(t.v)),t.F=Date.now(),gl(t)}dx(e)}function Yf(e){e.g&&(Ly(e),e.g.cancel(),e.g=null)}function ax(e){Yf(e),e.u&&(j.clearTimeout(e.u),e.u=null),Fc(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&j.clearTimeout(e.m),e.m=null)}function Xf(e){Xk(e.h)||e.m||(e.m=!0,Ak(e.Ja,e),e.C=0)}function z3(e,t){return Qk(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=dl(at(e.Ja,e,t),hx(e,e.C)),e.C++,!0)}M.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ml(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Sk(s),bk(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=lx(this,i,t),n=Qn(this.F),fe(n,"RID",e),fe(n,"CVER",22),this.D&&fe(n,"X-HTTP-Session-Id",this.D),wl(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(sx(s)))+"&"+t:this.o&&Ry(n,this.o,s)),Ay(this.h,i),this.Ya&&fe(n,"TYPE","init"),this.O?(fe(n,"$req",t),fe(n,"SID","null"),i.Z=!0,vm(i,n,null)):vm(i,n,t),this.G=2}}else this.G==3&&(e?Nw(this,e):this.i.length==0||Xk(this.h)||Nw(this))};function Nw(e,t){var n;t?n=t.m:n=e.U++;const r=Qn(e.F);fe(r,"SID",e.I),fe(r,"RID",n),fe(r,"AID",e.T),wl(e,r),e.o&&e.s&&Ry(r,e.o,e.s),n=new ml(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=lx(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Ay(e.h,n),vm(n,r,t)}function wl(e,t){e.ia&&vy(e.ia,function(n,r){fe(t,r,n)}),e.l&&Hk({},function(n,r){fe(t,r,n)})}function lx(e,t,n){n=Math.min(e.i.length,n);var r=e.l?at(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{F3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function ux(e){e.g||e.u||(e.Z=1,Ak(e.Ia,e),e.A=0)}function Dy(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=dl(at(e.Ia,e),hx(e,e.A)),e.A++,!0)}M.Ia=function(){if(this.u=null,cx(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=dl(at(this.eb,this),e)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mt(10),Yf(this),cx(this))};function Ly(e){e.B!=null&&(j.clearTimeout(e.B),e.B=null)}function cx(e){e.g=new ml(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Qn(e.sa);fe(t,"RID","rpc"),fe(t,"SID",e.I),fe(t,"CI",e.L?"0":"1"),fe(t,"AID",e.T),fe(t,"TYPE","xmlhttp"),wl(e,t),e.o&&e.s&&Ry(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=qf(Qn(t)),n.s=null,n.P=!0,Vk(n,e)}M.cb=function(){this.v!=null&&(this.v=null,Yf(this),Dy(this),mt(19))};function Fc(e){e.v!=null&&(j.clearTimeout(e.v),e.v=null)}function fx(e,t){var n=null;if(e.g==t){Fc(e),Ly(e),e.g=null;var r=2}else if(Em(e.h,t))n=t.D,Jk(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=jf(),Ye(r,new Mk(r,n)),Xf(e)}else ux(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&z3(e,t)||r==2&&Dy(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:vi(e,5);break;case 4:vi(e,10);break;case 3:vi(e,6);break;default:vi(e,2)}}}function hx(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function vi(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=at(e.kb,e);n||(n=new ki("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Lc(n,"https"),qf(n)),U3(n.toString(),r)}else mt(2);e.G=0,e.l&&e.l.va(t),dx(e),ax(e)}M.kb=function(e){e?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function dx(e){if(e.G=0,e.la=[],e.l){const t=Zk(e.h);(t.length!=0||e.i.length!=0)&&(Ew(e.la,t),Ew(e.la,e.i),e.h.i.length=0,gy(e.i),e.i.length=0),e.l.ua()}}function px(e,t,n){var r=n instanceof ki?Qn(n):new ki(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Mc(r,r.m);else{var i=j.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ki(null,void 0);r&&Lc(s,r),t&&(s.g=t),i&&Mc(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&fe(r,n,t),fe(r,"VER",e.ma),wl(e,r),r}function mx(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Te(new yl({jb:!0})):new Te(e.ra),t.Ka(e.H),t}function gx(){}M=gx.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Uc(){if(zs&&!(10<=Number(o3)))throw Error("Environmental error: no available transport.")}Uc.prototype.g=function(e,t){return new Vt(e,t)};function Vt(e,t){ze.call(this),this.g=new ox(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Rc(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Rc(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new so(this)}Qe(Vt,ze);Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;mt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=px(e,null,e.V),Xf(e)};Vt.prototype.close=function(){Oy(this.g)};Vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ty(e),e=n);t.i.push(new D3(t.ab++,e)),t.G==3&&Xf(t)};Vt.prototype.M=function(){this.g.l=null,delete this.j,Oy(this.g),delete this.g,Vt.X.M.call(this)};function yx(e){Cy.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Qe(yx,Cy);function vx(){Iy.call(this),this.status=1}Qe(vx,Iy);function so(e){this.g=e}Qe(so,gx);so.prototype.xa=function(){Ye(this.g,"a")};so.prototype.wa=function(e){Ye(this.g,new yx(e))};so.prototype.va=function(e){Ye(this.g,new vx)};so.prototype.ua=function(){Ye(this.g,"b")};Uc.prototype.createWebChannel=Uc.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;zf.NO_ERROR=0;zf.TIMEOUT=8;zf.HTTP_ERROR=6;Fk.COMPLETE="complete";Uk.EventType=pl;pl.OPEN="a";pl.CLOSE="b";pl.ERROR="c";pl.MESSAGE="d";ze.prototype.listen=ze.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.Oa;Te.prototype.getLastErrorCode=Te.prototype.Ea;Te.prototype.getStatus=Te.prototype.aa;Te.prototype.getResponseJson=Te.prototype.Sa;Te.prototype.getResponseText=Te.prototype.fa;Te.prototype.send=Te.prototype.da;Te.prototype.setWithCredentials=Te.prototype.Ka;var H3=function(){return new Uc},W3=function(){return jf()},bd=zf,q3=Fk,G3=Qi,Rw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},K3=yl,su=Uk,Y3=Te;const Ow="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Df("@firebase/firestore");function Dw(){return Mi.logLevel}function U(e,...t){if(Mi.logLevel<=ee.DEBUG){const n=t.map(My);Mi.debug(`Firestore (${oo}): ${e}`,...n)}}function Fi(e,...t){if(Mi.logLevel<=ee.ERROR){const n=t.map(My);Mi.error(`Firestore (${oo}): ${e}`,...n)}}function $c(e,...t){if(Mi.logLevel<=ee.WARN){const n=t.map(My);Mi.warn(`Firestore (${oo}): ${e}`,...n)}}function My(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e="Unexpected state"){const t=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: `+e;throw Fi(t),new Error(t)}function He(e,t){e||X()}function le(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends en{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class X3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Q3{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J3{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new xi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xi,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xi)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string"),new wx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return He(t===null||typeof t=="string"),new nt(t)}}class Z3{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class eF{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new Z3(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tF{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nF{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(He(typeof n.token=="string"),this.T=n.token,new tF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=rF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ne(e,t){return e<t?-1:e>t?1:0}function Hs(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return je.fromMillis(Date.now())}static fromDate(t){return je.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ne(this.nanoseconds,t.nanoseconds):ne(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.timestamp=t}static fromTimestamp(t){return new de(t)}static min(){return new de(new je(0,0))}static max(){return new de(new je(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,n,r){n===void 0?n=0:n>t.length&&X(),r===void 0?r=t.length-n:r>t.length-n&&X(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ua.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ua?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class be extends Ua{construct(t,n,r){return new be(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new W(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const iF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ua{construct(t,n,r){return new ot(t,n,r)}static isValidIdentifier(t){return iF.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new W(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(be.fromString(t))}static fromName(t){return new G(be.fromString(t).popFirst(5))}static empty(){return new G(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&be.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return be.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new be(t.slice()))}}function sF(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Hr(i,G.empty(),t)}function oF(e){return new Hr(e.readTime,e.key,-1)}class Hr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(de.min(),G.empty(),-1)}static max(){return new Hr(de.max(),G.empty(),-1)}}function aF(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=G.comparator(e.documentKey,t.documentKey),n!==0?n:ne(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==lF)throw e;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):P.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):P.reject(n)}static resolve(t){return new P((n,r)=>{n(t)})}static reject(t){return new P((n,r)=>{r(t)})}static waitFor(t){return new P((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=P.resolve(!1);for(const r of t)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new P((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new P((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Qf(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}bx.ct=-1;function Fy(e){return e==null}function Vc(e){return e===0&&1/e==-1/0}function cF(e){return typeof e=="number"&&Number.isInteger(e)&&!Vc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function El(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Tx(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new Pt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new Pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ou(this.root,t,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ou(this.root,t,this.comparator,!0)}}class ou{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new qe(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const t=this.left.check();if(t!==this.right.check())throw X();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.comparator=t,this.data=new Pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mw(this.data.getIterator())}getIteratorFrom(t){return new Mw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof yt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new yt(this.comparator);return n.data=t,n}}class Mw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new ln([])}unionWith(t){let n=new yt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ln(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Hs(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fF("Invalid base64 string: "+i):i}}(t);return new Jn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Jn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ne(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jn.EMPTY_BYTE_STRING=new Jn("");const hF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(e){if(He(!!e),typeof e=="string"){let t=0;const n=hF.exec(e);if(He(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ge(e.seconds),nanos:Ge(e.nanos)}}function Ge(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function $a(e){return typeof e=="string"?Jn.fromBase64String(e):Jn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bc(e){const t=Ui(e.mapValue.fields.__local_write_time__.timestampValue);return new je(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(t,n,r,i,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class jc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new jc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof jc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ws(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?dF(e)?4:mF(e)?9007199254740991:10:X()}function Pn(e,t){if(e===t)return!0;const n=Ws(e);if(n!==Ws(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Bc(e).isEqual(Bc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ui(r.timestampValue),o=Ui(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return $a(r.bytesValue).isEqual($a(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ge(r.doubleValue),o=Ge(i.doubleValue);return s===o?Vc(s)===Vc(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return Hs(e.arrayValue.values||[],t.arrayValue.values||[],Pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Lw(s)!==Lw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Pn(s[a],o[a])))return!1;return!0}(e,t);default:return X()}}function Va(e,t){return(e.values||[]).find(n=>Pn(n,t))!==void 0}function qs(e,t){if(e===t)return 0;const n=Ws(e),r=Ws(t);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Ge(i.integerValue||i.doubleValue),a=Ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Fw(e.timestampValue,t.timestampValue);case 4:return Fw(Bc(e),Bc(t));case 5:return ne(e.stringValue,t.stringValue);case 6:return function(i,s){const o=$a(i),a=$a(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ne(o[l],a[l]);if(u!==0)return u}return ne(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=ne(Ge(i.latitude),Ge(s.latitude));return o!==0?o:ne(Ge(i.longitude),Ge(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=qs(o[l],a[l]);if(u)return u}return ne(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===au.mapValue&&s===au.mapValue)return 0;if(i===au.mapValue)return 1;if(s===au.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=ne(a[c],u[c]);if(f!==0)return f;const h=qs(o[a[c]],l[u[c]]);if(h!==0)return h}return ne(a.length,u.length)}(e.mapValue,t.mapValue);default:throw X()}}function Fw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ne(e,t);const n=Ui(e),r=Ui(t),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Gs(e){return Sm(e)}function Sm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Ui(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?$a(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,G.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Sm(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Sm(r.fields[a])}`;return s+"}"}(e.mapValue):X();var t,n}function bm(e){return!!e&&"integerValue"in e}function Uy(e){return!!e&&"arrayValue"in e}function Lu(e){return!!e&&"mapValue"in e}function Zo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return El(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Zo(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Zo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function mF(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.value=t}static empty(){return new an({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Lu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zo(n)}setAll(t){let n=ot.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Zo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Pn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){El(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new an(Zo(this.value))}}function _x(e){const t=[];return El(e.fields,(n,r)=>{const i=new ot([n]);if(Lu(r)){const s=_x(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ln(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new on(t,0,de.min(),de.min(),de.min(),an.empty(),0)}static newFoundDocument(t,n,r,i){return new on(t,1,n,de.min(),r,i,0)}static newNoDocument(t,n){return new on(t,2,n,de.min(),de.min(),an.empty(),0)}static newUnknownDocument(t,n){return new on(t,3,n,de.min(),de.min(),an.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n){this.position=t,this.inclusive=n}}function Uw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $w(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,n="asc"){this.field=t,this.dir=n}}function gF(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{}class Ve extends kx{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new vF(t,n,r):n==="array-contains"?new SF(t,r):n==="in"?new bF(t,r):n==="not-in"?new TF(t,r):n==="array-contains-any"?new _F(t,r):new Ve(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new wF(t,r):new EF(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Ws(this.value)===Ws(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wr extends kx{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Wr(t,n)}matches(t){return xx(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function xx(e){return e.op==="and"}function Cx(e){return yF(e)&&xx(e)}function yF(e){for(const t of e.filters)if(t instanceof Wr)return!1;return!0}function Tm(e){if(e instanceof Ve)return e.field.canonicalString()+e.op.toString()+Gs(e.value);if(Cx(e))return e.filters.map(t=>Tm(t)).join(",");{const t=e.filters.map(n=>Tm(n)).join(",");return`${e.op}(${t})`}}function Ix(e,t){return e instanceof Ve?function(n,r){return r instanceof Ve&&n.op===r.op&&n.field.isEqual(r.field)&&Pn(n.value,r.value)}(e,t):e instanceof Wr?function(n,r){return r instanceof Wr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Ix(s,r.filters[o]),!0):!1}(e,t):void X()}function Ax(e){return e instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Gs(t.value)}`}(e):e instanceof Wr?function(t){return t.op.toString()+" {"+t.getFilters().map(Ax).join(" ,")+"}"}(e):"Filter"}class vF extends Ve{constructor(t,n,r){super(t,n,r),this.key=G.fromName(r.referenceValue)}matches(t){const n=G.comparator(t.key,this.key);return this.matchesComparison(n)}}class wF extends Ve{constructor(t,n){super(t,"in",n),this.keys=Px("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class EF extends Ve{constructor(t,n){super(t,"not-in",n),this.keys=Px("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Px(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class SF extends Ve{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Uy(n)&&Va(n.arrayValue,this.value)}}class bF extends Ve{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Va(this.value.arrayValue,n)}}class TF extends Ve{constructor(t,n){super(t,"not-in",n)}matches(t){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Va(this.value.arrayValue,n)}}class _F extends Ve{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Uy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Va(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Vw(e,t=null,n=[],r=[],i=null,s=null,o=null){return new kF(e,t,n,r,i,s,o)}function $y(e){const t=le(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Tm(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fy(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Gs(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Gs(r)).join(",")),t.ft=n}return t.ft}function Vy(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gF(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ix(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$w(e.startAt,t.startAt)&&$w(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function xF(e,t,n,r,i,s,o,a){return new Jf(e,t,n,r,i,s,o,a)}function CF(e){return new Jf(e)}function Bw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function IF(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function AF(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function PF(e){return e.collectionGroup!==null}function Ps(e){const t=le(e);if(t.dt===null){t.dt=[];const n=AF(t),r=IF(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new ea(n)),t.dt.push(new ea(ot.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ea(ot.keyField(),s))}}}return t.dt}function Ks(e){const t=le(e);if(!t.wt)if(t.limitType==="F")t.wt=Vw(t.path,t.collectionGroup,Ps(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Ps(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new ea(s.field,o))}const r=t.endAt?new zc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new zc(t.startAt.position,t.startAt.inclusive):null;t.wt=Vw(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.wt}function _m(e,t,n){return new Jf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Nx(e,t){return Vy(Ks(e),Ks(t))&&e.limitType===t.limitType}function Rx(e){return`${$y(Ks(e))}|lt:${e.limitType}`}function jw(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>Ax(r)).join(", ")}]`),Fy(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Gs(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Gs(r)).join(",")),`Target(${n})`}(Ks(e))}; limitType=${e.limitType})`}function By(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):G.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of Ps(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Uw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ps(n),r)||n.endAt&&!function(i,s,o){const a=Uw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ps(n),r))}(e,t)}function NF(e){return(t,n)=>{let r=!1;for(const i of Ps(e)){const s=RF(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RF(e,t,n){const r=e.field.isKeyField()?G.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?qs(a,l):X()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){El(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Tx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=new Pt(G.comparator);function Hc(){return OF}const Ox=new Pt(G.comparator);function lu(...e){let t=Ox;for(const n of e)t=t.insert(n.key,n);return t}function Dx(e){let t=Ox;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function wi(){return ta()}function Lx(){return ta()}function ta(){return new ao(e=>e.toString(),(e,t)=>e.isEqual(t))}const DF=new Pt(G.comparator),LF=new yt(G.comparator);function it(...e){let t=LF;for(const n of e)t=t.add(n);return t}const MF=new yt(ne);function FF(){return MF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vc(t)?"-0":t}}function Fx(e){return{integerValue:""+e}}function UF(e,t){return cF(t)?Fx(t):Mx(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this._=void 0}}function $F(e,t,n){return e instanceof Wc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Ba?$x(e,t):e instanceof ja?Vx(e,t):function(r,i){const s=Ux(r,i),o=zw(s)+zw(r._t);return bm(s)&&bm(r._t)?Fx(o):Mx(r.serializer,o)}(e,t)}function VF(e,t,n){return e instanceof Ba?$x(e,t):e instanceof ja?Vx(e,t):n}function Ux(e,t){return e instanceof qc?bm(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Wc extends Zf{}class Ba extends Zf{constructor(t){super(),this.elements=t}}function $x(e,t){const n=Bx(t);for(const r of e.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ja extends Zf{constructor(t){super(),this.elements=t}}function Vx(e,t){let n=Bx(t);for(const r of e.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class qc extends Zf{constructor(t,n){super(),this.serializer=t,this._t=n}}function zw(e){return Ge(e.integerValue||e.doubleValue)}function Bx(e){return Uy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function BF(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Ba&&r instanceof Ba||n instanceof ja&&r instanceof ja?Hs(n.elements,r.elements,Pn):n instanceof qc&&r instanceof qc?Pn(n._t,r._t):n instanceof Wc&&r instanceof Wc}(e.transform,t.transform)}class jF{constructor(t,n){this.version=t,this.transformResults=n}}class zn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new zn}static exists(t){return new zn(void 0,t)}static updateTime(t){return new zn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class eh{}function jx(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Hx(e.key,zn.none()):new Sl(e.key,e.data,zn.none());{const n=e.data,r=an.empty();let i=new yt(ot.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ji(e.key,r,new ln(i.toArray()),zn.none())}}function zF(e,t,n){e instanceof Sl?function(r,i,s){const o=r.value.clone(),a=Ww(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ji?function(r,i,s){if(!Mu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ww(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(zx(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function na(e,t,n,r){return e instanceof Sl?function(i,s,o,a){if(!Mu(i.precondition,s))return o;const l=i.value.clone(),u=qw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ji?function(i,s,o,a){if(!Mu(i.precondition,s))return o;const l=qw(i.fieldTransforms,a,s),u=s.data;return u.setAll(zx(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,s,o){return Mu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function HF(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Ux(r.transform,i||null);s!=null&&(n===null&&(n=an.empty()),n.set(r.field,s))}return n||null}function Hw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hs(n,r,(i,s)=>BF(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Sl extends eh{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ji extends eh{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zx(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ww(e,t,n){const r=new Map;He(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,VF(o,a,n[i]))}return r}function qw(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$F(s,o,t))}return r}class Hx extends eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WF extends eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&zF(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=na(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=na(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Lx();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=jx(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),it())}isEqual(t){return this.batchId===t.batchId&&Hs(this.mutations,t.mutations,(n,r)=>Hw(n,r))&&Hs(this.baseMutations,t.baseMutations,(n,r)=>Hw(n,r))}}class jy{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){He(t.mutations.length===r.length);let i=DF;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jy(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Q;function KF(e){switch(e){default:return X();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function YF(e){if(e===void 0)return Fi("GRPC error has no .code"),N.UNKNOWN;switch(e){case Ie.OK:return N.OK;case Ie.CANCELLED:return N.CANCELLED;case Ie.UNKNOWN:return N.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return N.INTERNAL;case Ie.UNAVAILABLE:return N.UNAVAILABLE;case Ie.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ie.NOT_FOUND:return N.NOT_FOUND;case Ie.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ie.ABORTED:return N.ABORTED;case Ie.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ie.DATA_LOSS:return N.DATA_LOSS;default:return X()}}(Q=Ie||(Ie={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class XF{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function km(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function QF(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function JF(e,t){return km(e,t.toTimestamp())}function Ns(e){return He(!!e),de.fromTimestamp(function(t){const n=Ui(t);return new je(n.seconds,n.nanos)}(e))}function Wx(e,t){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ZF(e){const t=be.fromString(e);return He(aU(t)),t}function xm(e,t){return Wx(e.databaseId,t.path)}function eU(e){const t=ZF(e);return t.length===4?be.emptyPath():nU(t)}function tU(e){return new be(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nU(e){return He(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Gw(e,t,n){return{name:xm(e,t),fields:n.value.mapValue.fields}}function rU(e,t){let n;if(t instanceof Sl)n={update:Gw(e,t.key,t.value)};else if(t instanceof Hx)n={delete:xm(e,t.key)};else if(t instanceof Ji)n={update:Gw(e,t.key,t.data),updateMask:oU(t.fieldMask)};else{if(!(t instanceof WF))return X();n={verify:xm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Wc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ba)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ja)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw X()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JF(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(e,t.precondition)),n}function iU(e,t){return e&&e.length>0?(He(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?Ns(r.updateTime):Ns(i);return s.isEqual(de.min())&&(s=Ns(i)),new jF(s,r.transformResults||[])}(n,t))):[]}function sU(e){let t=eU(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){He(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(c){const f=qx(c);return f instanceof Wr&&Cx(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new ea(ns(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,Fy(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,h=c.values||[];return new zc(h,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,h=c.values||[];return new zc(h,f)}(n.endAt)),xF(t,i,o,s,a,"F",l,u)}function qx(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ns(t.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ns(t.unaryFilter.field);return Ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ns(t.unaryFilter.field);return Ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(e):e.fieldFilter!==void 0?function(t){return Ve.create(ns(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Wr.create(t.compositeFilter.filters.map(n=>qx(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(t.compositeFilter.op))}(e):X()}function ns(e){return ot.fromServerFormat(e.fieldPath)}function oU(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function aU(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(t){this.se=t}}function uU(e){const t=sU({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?_m(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(){this.He=new fU}addToCollectionParentIndex(t,n){return this.He.add(n),P.resolve()}getCollectionParents(t,n){return P.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return P.resolve()}deleteFieldIndex(t,n){return P.resolve()}getDocumentsMatchingTarget(t,n){return P.resolve(null)}getIndexType(t,n){return P.resolve(0)}getFieldIndexes(t,n){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,n){return P.resolve(Hr.min())}getMinOffsetFromCollectionGroup(t,n){return P.resolve(Hr.min())}updateCollectionGroup(t,n,r){return P.resolve()}updateIndexEntries(t,n){return P.resolve()}}class fU{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new yt(be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new yt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Ys(0)}static bn(){return new Ys(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(){this.changes=new ao(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&na(r.mutation,i,ln.empty(),je.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,it()).next(()=>r))}getLocalViewOfDocuments(t,n,r=it()){const i=wi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=lu();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=wi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,it()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Hc();const o=ta(),a=ta();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ji)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),na(c.mutation,u,c.mutation.getFieldMask(),je.now())):o.set(u.key,ln.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new dU(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ta();let i=new Pt((o,a)=>o-a),s=it();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ln.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||it()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=Lx();c.forEach(h=>{if(!s.has(h)){const d=jx(n.get(h),r.get(h));d!==null&&f.set(h,d),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):PF(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):P.resolve(wi());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,it())).next(c=>({batchId:a,changes:Dx(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new G(n)).next(r=>{let i=lu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=lu();return this.indexManager.getCollectionParents(t,i).next(o=>P.forEach(o,a=>{const l=function(u,c){return new Jf(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,on.newInvalidDocument(u)))});let o=lu();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&na(u.mutation,l,ln.empty(),je.now()),By(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return P.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ns(r.createTime)}),P.resolve()}getNamedQuery(t,n){return P.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:uU(r.bundledQuery),readTime:Ns(r.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{constructor(){this.overlays=new Pt(G.comparator),this.ts=new Map}getOverlay(t,n){return P.resolve(this.overlays.get(n))}getOverlays(t,n){const r=wi();return P.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.re(t,n,s)}),P.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),P.resolve()}getOverlaysForCollection(t,n,r){const i=wi(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Pt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=wi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}re(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GF(n,r));let s=this.ts.get(n);s===void 0&&(s=it(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.es=new yt(Fe.ns),this.ss=new yt(Fe.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const r=new Fe(t,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.us(new Fe(t,n))}cs(t,n){t.forEach(r=>this.removeReference(r,n))}hs(t){const n=new G(new be([])),r=new Fe(n,t),i=new Fe(n,t+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new G(new be([])),r=new Fe(n,t),i=new Fe(n,t+1);let s=it();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Fe(t,0),r=this.es.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Fe{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return G.comparator(t.key,n.key)||ne(t.ds,n.ds)}static rs(t,n){return ne(t.ds,n.ds)||G.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new yt(Fe.ns)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,n){return P.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new yt(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),P.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new G(s),0);let a=new yt(ne);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),P.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){He(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return P.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this._s=r})}En(t){}containsKey(t,n){const r=new Fe(n,0),i=this._s.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vU{constructor(t){this.Ts=t,this.docs=new Pt(G.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():on.newInvalidDocument(n))}getEntries(t,n){let r=Hc();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():on.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Hc();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||aF(oF(c),r)<=0||(i.has(c.key)||By(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(t,n,r,i){X()}Es(t,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new wU(this)}getSize(t){return P.resolve(this.size)}}class wU extends hU{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(r)}),P.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(t){this.persistence=t,this.As=new ao(n=>$y(n),Vy),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Rs=0,this.vs=new zy,this.targetCount=0,this.bs=Ys.vn()}forEachTarget(t,n){return this.As.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),P.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Ys(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,P.resolve()}updateTargetData(t,n){return this.Sn(n),P.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,n){const r=this.As.get(n)||null;return P.resolve(r)}addMatchingKeys(t,n,r){return this.vs.os(n,r),P.resolve()}removeMatchingKeys(t,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),P.resolve()}getMatchingKeysForTargetId(t,n){const r=this.vs.fs(n);return P.resolve(r)}containsKey(t,n){return P.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new bx(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new EU(this),this.indexManager=new cU,this.remoteDocumentCache=function(r){return new vU(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new lU(n),this.xs=new mU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new gU,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ps[t.toKey()];return r||(r=new yU(n,this.referenceDelegate),this.Ps[t.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,r){U("MemoryPersistence","Starting transaction:",t);const i=new bU(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(t,n){return P.or(Object.values(this.Ps).map(r=>()=>r.containsKey(t,n)))}}class bU extends uF{constructor(t){super(),this.currentSequenceNumber=t}}class Hy{constructor(t){this.persistence=t,this.$s=new zy,this.Ms=null}static Fs(t){return new Hy(t)}get Bs(){if(this.Ms)return this.Ms;throw X()}addReference(t,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),P.resolve()}removeReference(t,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),P.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Bs,r=>{const i=G.fromPath(r);return this.Ls(t,i).next(s=>{s||n.removeEntry(i,de.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return P.or([()=>P.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Vi=r,this.Si=i}static Di(t,n){let r=it(),i=it();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wy(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ni(t,n).next(s=>s||this.ki(t,n,i,r)).next(s=>s||this.Oi(t,n))}Ni(t,n){if(Bw(n))return P.resolve(null);let r=Ks(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_m(n,null,"F"),r=Ks(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=it(...s);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(t,_m(n,null,"F")):this.Fi(t,u,n,l)}))})))}ki(t,n,r,i){return Bw(n)||i.isEqual(de.min())?this.Oi(t,n):this.xi.getDocuments(t,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(t,n):(Dw()<=ee.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jw(n)),this.Fi(t,o,n,sF(i,-1)))})}$i(t,n){let r=new yt(NF(t));return n.forEach((i,s)=>{By(t,s)&&(r=r.add(s))}),r}Mi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(t,n){return Dw()<=ee.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",jw(n)),this.xi.getDocumentsMatchingQuery(t,n,Hr.min())}Fi(t,n,r,i){return this.xi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(t,n,r,i){this.persistence=t,this.Bi=n,this.serializer=i,this.Li=new Pt(ne),this.qi=new ao(s=>$y(s),Vy),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(r)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pU(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function kU(e,t,n,r){return new _U(e,t,n,r)}async function Gx(e,t){const n=le(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=it();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function xU(e,t){const n=le(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,f=c.keys();let h=P.resolve();return f.forEach(d=>{h=h.next(()=>u.getEntry(a,d)).next(m=>{const w=l.docVersions.get(d);He(w!==null),m.version.compareTo(w)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=it();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function CU(e){const t=le(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function IU(e,t){const n=le(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Kw{constructor(){this.activeTargetIds=FF()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class AU{constructor(){this.Br=new Kw,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,r){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Kw,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu=null;function Td(){return uu===null?uu=268435456+Math.round(2147483648*Math.random()):uu++,"0x"+uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class OU extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,r,i,s){const o=Td(),a=this.ao(t,n);U("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(t,a,l,r).then(u=>(U("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw $c("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(t,n,r,i,s,o){return this.co(t,n,r,i,s)}ho(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+oo,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}ao(t,n){const r=NU[t];return`${this.ro}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,r,i){const s=Td();return new Promise((o,a)=>{const l=new Y3;l.setWithCredentials(!0),l.listenOnce(q3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bd.NO_ERROR:const c=l.getResponseJson();U(et,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case bd.TIMEOUT:U(et,`RPC '${t}' ${s} timed out`),a(new W(N.DEADLINE_EXCEEDED,"Request time out"));break;case bd.HTTP_ERROR:const f=l.getStatus();if(U(et,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(E)>=0?E:N.UNKNOWN}(d.status);a(new W(m,d.message))}else a(new W(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(N.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{U(et,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);U(et,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(t,n,r){const i=Td(),s=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=H3(),a=W3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new K3({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");U(et,`Creating RPC '${t}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let f=!1,h=!1;const d=new RU({Wr:w=>{h?U(et,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(U(et,`Opening RPC '${t}' stream ${i} transport.`),c.open(),f=!0),U(et,`RPC '${t}' stream ${i} sending:`,w),c.send(w))},Hr:()=>c.close()}),m=(w,E,v)=>{w.listen(E,p=>{try{v(p)}catch(y){setTimeout(()=>{throw y},0)}})};return m(c,su.EventType.OPEN,()=>{h||U(et,`RPC '${t}' stream ${i} transport opened.`)}),m(c,su.EventType.CLOSE,()=>{h||(h=!0,U(et,`RPC '${t}' stream ${i} transport closed`),d.so())}),m(c,su.EventType.ERROR,w=>{h||(h=!0,$c(et,`RPC '${t}' stream ${i} transport errored:`,w),d.so(new W(N.UNAVAILABLE,"The operation could not be completed")))}),m(c,su.EventType.MESSAGE,w=>{var E;if(!h){const v=w.data[0];He(!!v);const p=v,y=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(y){U(et,`RPC '${t}' stream ${i} received error:`,y);const S=y.status;let b=function(C){const x=Ie[C];if(x!==void 0)return YF(x)}(S),I=y.message;b===void 0&&(b=N.INTERNAL,I="Unknown error status: "+S+" with message "+y.message),h=!0,d.so(new W(b,I)),c.close()}else U(et,`RPC '${t}' stream ${i} received:`,v),d.io(v)}}),m(a,G3.STAT_EVENT,w=>{w.stat===Rw.PROXY?U(et,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Rw.NOPROXY&&U(et,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function _d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){return new XF(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Ws=t,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(t,n,r,i,s,o,a,l){this.Ws=t,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Kx(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Fi(n.toString()),Fi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{t(()=>{const i=new W(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(t,n){const r=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LU extends DU{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(He(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=iU(t.writeResults,t.commitTime),r=Ns(t.commitTime);return this.listener.Zo(r,n)}return He(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=tU(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>rU(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}fo(t,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(N.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class FU{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Fi(n),this.ru=!1):U("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Tl(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=le(a);l.du.add(4),await bl(l),l.mu.set("Unknown"),l.du.delete(4),await nh(l)}(this))})}),this.mu=new FU(r,i)}}async function nh(e){if(Tl(e))for(const t of e.wu)await t(!0)}async function bl(e){for(const t of e.wu)await t(!1)}function Tl(e){return le(e).du.size===0}async function Yx(e,t,n){if(!Qf(t))throw t;e.du.add(1),await bl(e),e.mu.set("Offline"),n||(n=()=>CU(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await nh(e)})}function Xx(e,t){return t().catch(n=>Yx(e,n,t))}async function rh(e){const t=le(e),n=qr(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;$U(t);)try{const i=await IU(t.localStore,r);if(i===null){t.lu.length===0&&n.$o();break}r=i.batchId,VU(t,i)}catch(i){await Yx(t,i)}Qx(t)&&Jx(t)}function $U(e){return Tl(e)&&e.lu.length<10}function VU(e,t){e.lu.push(t);const n=qr(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Qx(e){return Tl(e)&&!qr(e).xo()&&e.lu.length>0}function Jx(e){qr(e).start()}async function BU(e){qr(e).tu()}async function jU(e){const t=qr(e);for(const n of e.lu)t.Yo(n.mutations)}async function zU(e,t,n){const r=e.lu.shift(),i=jy.from(r,t,n);await Xx(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rh(e)}async function HU(e,t){t&&qr(e).Jo&&await async function(n,r){if(i=r.code,KF(i)&&i!==N.ABORTED){const s=n.lu.shift();qr(n).Oo(),await Xx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await rh(n)}var i}(e,t),Qx(e)&&Jx(e)}async function Xw(e,t){const n=le(e);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Tl(n);n.du.add(3),await bl(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await nh(n)}async function WU(e,t){const n=le(e);t?(n.du.delete(2),await nh(n)):t||(n.du.add(2),await bl(n),n.mu.set("Unknown"))}function qr(e){return e.pu||(e.pu=function(t,n,r){const i=le(t);return i.nu(),new LU(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{Jr:BU.bind(null,e),Zr:HU.bind(null,e),Xo:jU.bind(null,e),Zo:zU.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await rh(e)):(await e.pu.stop(),e.lu.length>0&&(U("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new qy(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zx(e,t){if(Fi("AsyncQueue",`${t}: ${e}`),Qf(e))return new W(N.UNAVAILABLE,`${t}: ${e}`);throw e}class qU{constructor(){this.queries=new ao(t=>Rx(t),Nx),this.onlineState="Unknown",this.Au=new Set}}function GU(e){e.Au.forEach(t=>{t.next()})}class KU{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ao(a=>Rx(a),Nx),this.ic=new Map,this.rc=new Set,this.oc=new Pt(G.comparator),this.uc=new Map,this.cc=new zy,this.ac={},this.hc=new Map,this.lc=Ys.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function YU(e,t,n){const r=ZU(e);try{const i=await function(s,o){const a=le(s),l=je.now(),u=o.reduce((h,d)=>h.add(d.key),it());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=Hc(),m=it();return a.Ki.getEntries(h,u).next(w=>{d=w,d.forEach((E,v)=>{v.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,d)).next(w=>{c=w;const E=[];for(const v of o){const p=HF(v,c.get(v.key).overlayedDocument);p!=null&&E.push(new Ji(v.key,p,_x(p.value.mapValue),zn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,E,o)}).next(w=>{f=w;const E=w.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(h,w.batchId,E)})}).then(()=>({batchId:f.batchId,changes:Dx(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Pt(ne)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await ih(r,i.changes),await rh(r.remoteStore)}catch(i){const s=Zx(i,"Failed to persist write");n.reject(s)}}function Qw(e,t,n){const r=le(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=le(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.Ru(o)&&(l=!0)}),l&&GU(a)}(r.eventManager,t),i.length&&r.nc.zo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function XU(e,t){const n=le(e),r=t.batch.batchId;try{const i=await xU(n.localStore,t);tC(n,r,null),eC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ih(n,i)}catch(i){await Sx(i)}}async function QU(e,t,n){const r=le(e);try{const i=await function(s,o){const a=le(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(He(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,t);tC(r,t,n),eC(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ih(r,i)}catch(i){await Sx(i)}}function eC(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function tC(e,t,n){const r=le(e);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}async function ih(e,t,n){const r=le(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Wy.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=le(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>P.forEach(l,f=>P.forEach(f.Vi,h=>u.persistence.referenceDelegate.addReference(c,f.targetId,h)).next(()=>P.forEach(f.Si,h=>u.persistence.referenceDelegate.removeReference(c,f.targetId,h)))))}catch(c){if(!Qf(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const h=u.Li.get(f),d=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(f,m)}}}(r.localStore,s))}async function JU(e,t){const n=le(e);if(!n.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Gx(n.localStore,t);n.currentUser=t,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new W(N.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ih(n,r.Qi)}}function ZU(e){const t=le(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=XU.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=QU.bind(null,t),t}class Jw{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=th(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return kU(this.persistence,new TU,t.initialUser,this.serializer)}createPersistence(t){return new SU(Hy.Fs,this.serializer)}createSharedClientState(t){return new AU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e${async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JU.bind(null,this.syncEngine),await WU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qU}createDatastore(t){const n=th(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new OU(i));var i;return function(s,o,a,l){return new MU(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>Qw(this.syncEngine,a,0),o=Yw.D()?new Yw:new PU,new UU(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,l,u){const c=new KU(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=le(t);U("RemoteStore","RemoteStore shutting down."),n.du.add(5),await bl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Ex.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Zx(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function kd(e,t){e.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gx(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Zw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await r$(e);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Xw(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Xw(t.remoteStore,s)),e._onlineComponents=t}function n$(e){return e.name==="FirebaseError"?e.code===N.FAILED_PRECONDITION||e.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function r$(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await kd(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!n$(n))throw n;$c("Error using user provided cache. Falling back to memory cache: "+n),await kd(e,new Jw)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await kd(e,new Jw);return e._offlineComponents}async function i$(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Zw(e,e._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Zw(e,new e$))),e._onlineComponents}function s$(e){return i$(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(e,t,n){if(!n)throw new W(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function o$(e,t,n,r){if(t===!0&&r===!0)throw new W(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tE(e){if(!G.isDocumentKey(e))throw new W(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function nE(e){if(G.isDocumentKey(e))throw new W(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Gy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":X()}function rC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new W(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gy(e);throw new W(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new W(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,o$("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new W(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rE(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new X3;switch(n.type){case"firstParty":return new eF(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=eE.get(t);n&&(U("ComponentProvider","Removing Datastore"),eE.delete(t),n.terminate())}(this),Promise.resolve()}}function a$(e,t,n,r={}){var i;const s=(e=rC(e,sh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&$c("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=nt.MOCK_USER;else{o=ak(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new W(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(l)}e._authCredentials=new Q3(new wx(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Hn(this.firestore,t,this._key)}}class Ky{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ky(this.firestore,t,this._query)}}class Ur extends Ky{constructor(t,n,r){super(t,n,CF(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Hn(this.firestore,null,new G(t))}withConverter(t){return new Ur(this.firestore,t,this._path)}}function l$(e,t,...n){if(e=De(e),nC("collection","path",t),e instanceof sh){const r=be.fromString(t,...n);return nE(r),new Ur(e,null,r)}{if(!(e instanceof Hn||e instanceof Ur))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(be.fromString(t,...n));return nE(r),new Ur(e.firestore,null,r)}}function u$(e,t,...n){if(e=De(e),arguments.length===1&&(t=Ex.A()),nC("doc","path",t),e instanceof sh){const r=be.fromString(t,...n);return tE(r),new Hn(e,null,new G(r))}{if(!(e instanceof Hn||e instanceof Ur))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(be.fromString(t,...n));return tE(r),new Hn(e.firestore,e instanceof Ur?e.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Kx(this,"async_queue_retry"),this.qc=()=>{const n=_d();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=_d();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=_d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new xi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Qf(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Fi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(t,n,r){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const i=qy.createAndSchedule(this,t,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&X()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class iC extends sh{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new c$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sC(this),this._firestoreClient.terminate()}}function f$(e,t){const n=typeof e=="object"?e:Lf(),r=typeof e=="string"?e:t||"(default)",i=ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sk("firestore");s&&a$(i,...s)}return i}function h$(e){return e._firestoreClient||sC(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sC(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,l,u){return new pF(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new t$(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this._byteString=t}static fromBase64String(t){try{return new za(Jn.fromBase64String(t))}catch(n){throw new W(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new za(Jn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new W(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new W(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new W(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ne(this._lat,t._lat)||ne(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d$=/^__.*__$/;class p${constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ji(t,this.data,this.fieldMask,n,this.fieldTransforms):new Sl(t,this.data,n,this.fieldTransforms)}}function uC(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Yy{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Yy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:r,ta:!1});return i.ea(t),i}na(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return Gc(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(uC(this.Yc)&&d$.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class m${constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||th(t)}ua(t,n,r,i=!1){return new Yy({Yc:t,methodName:n,oa:r,path:ot.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function g$(e){const t=e._freezeSettings(),n=th(e._databaseId);return new m$(e._databaseId,!!t.ignoreUndefinedProperties,n)}function y$(e,t,n,r,i,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,i);dC("Data must be an object, but it was:",o,r);const a=fC(r,o);let l,u;if(s.merge)l=new ln(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=v$(t,f,n);if(!o.contains(h))throw new W(N.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);S$(c,h)||c.push(h)}l=new ln(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new p$(new an(a),l,u)}function cC(e,t){if(hC(e=De(e)))return dC("Unsupported field value:",t,e),fC(e,t);if(e instanceof aC)return function(n,r){if(!uC(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=cC(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=De(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UF(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=je.fromDate(n);return{timestampValue:km(r.serializer,i)}}if(n instanceof je){const i=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:km(r.serializer,i)}}if(n instanceof lC)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof za)return{bytesValue:QF(r.serializer,n._byteString)};if(n instanceof Hn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wx(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Gy(n)}`)}(e,t)}function fC(e,t){const n={};return Tx(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):El(e,(r,i)=>{const s=cC(i,t.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hC(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof je||e instanceof lC||e instanceof za||e instanceof Hn||e instanceof aC)}function dC(e,t,n){if(!hC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Gy(n);throw r==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+r)}}function v$(e,t,n){if((t=De(t))instanceof oC)return t._internalPath;if(typeof t=="string")return E$(e,t);throw Gc("Field path arguments must be of type string or ",e,!1,void 0,n)}const w$=new RegExp("[~\\*/\\[\\]]");function E$(e,t,n){if(t.search(w$)>=0)throw Gc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oC(...t.split("."))._internalPath}catch{throw Gc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gc(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(N.INVALID_ARGUMENT,a+e+l)}function S$(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b$(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function T$(e,t){const n=rC(e.firestore,iC),r=u$(e),i=b$(e.converter,t);return _$(n,[y$(g$(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,zn.exists(!1))]).then(()=>r)}function _$(e,t){return function(n,r){const i=new xi;return n.asyncQueue.enqueueAndForget(async()=>YU(await s$(n),r,i)),i.promise}(h$(e),t)}(function(e,t=!0){(function(n){oo=n})(ro),dn(new Zt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new iC(new J3(n.getProvider("auth-internal")),new nF(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jc(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ct(Ow,"3.10.0",e),Ct(Ow,"3.10.0","esm2017")})();var k$="firebase",x$="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(k$,x$,"app");const pC="@firebase/installations",Xy="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1e4,gC=`w:${Xy}`,yC="FIS_v2",C$="https://firebaseinstallations.googleapis.com/v1",I$=60*60*1e3,A$="installations",P$="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},$i=new Xi(A$,P$,N$);function vC(e){return e instanceof en&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC({projectId:e}){return`${C$}/projects/${e}/installations`}function EC(e){return{token:e.token,requestStatus:2,expiresIn:O$(e.expiresIn),creationTime:Date.now()}}async function SC(e,t){const r=(await t.json()).error;return $i.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bC({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function R$(e,{refreshToken:t}){const n=bC(e);return n.append("Authorization",D$(t)),n}async function TC(e){const t=await e();return t.status>=500&&t.status<600?e():t}function O$(e){return Number(e.replace("s","000"))}function D$(e){return`${yC} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L$({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wC(e),i=bC(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:yC,appId:e.appId,sdkVersion:gC},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await TC(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:EC(u.authToken)}}else throw await SC("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M$(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F$=/^[cdef][\w-]{21}$/,Cm="";function U$(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=$$(e);return F$.test(n)?n:Cm}catch{return Cm}}function $$(e){return M$(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new Map;function xC(e,t){const n=oh(e);CC(n,t),V$(n,t)}function CC(e,t){const n=kC.get(e);if(n)for(const r of n)r(t)}function V$(e,t){const n=B$();n&&n.postMessage({key:e,fid:t}),j$()}let Ei=null;function B$(){return!Ei&&"BroadcastChannel"in self&&(Ei=new BroadcastChannel("[Firebase] FID Change"),Ei.onmessage=e=>{CC(e.data.key,e.data.fid)}),Ei}function j$(){kC.size===0&&Ei&&(Ei.close(),Ei=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z$="firebase-installations-database",H$=1,Vi="firebase-installations-store";let xd=null;function Qy(){return xd||(xd=dk(z$,H$,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vi)}}})),xd}async function Kc(e,t){const n=oh(e),i=(await Qy()).transaction(Vi,"readwrite"),s=i.objectStore(Vi),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&xC(e,t.fid),t}async function IC(e){const t=oh(e),r=(await Qy()).transaction(Vi,"readwrite");await r.objectStore(Vi).delete(t),await r.done}async function ah(e,t){const n=oh(e),i=(await Qy()).transaction(Vi,"readwrite"),s=i.objectStore(Vi),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&xC(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(e){let t;const n=await ah(e.appConfig,r=>{const i=W$(r),s=q$(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Cm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function W$(e){const t=e||{fid:U$(),registrationStatus:0};return AC(t)}function q$(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($i.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=G$(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:K$(e)}:{installationEntry:t}}async function G$(e,t){try{const n=await L$(e,t);return Kc(e.appConfig,n)}catch(n){throw vC(n)&&n.customData.serverCode===409?await IC(e.appConfig):await Kc(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function K$(e){let t=await iE(e.appConfig);for(;t.registrationStatus===1;)await _C(100),t=await iE(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jy(e);return r||n}return t}function iE(e){return ah(e,t=>{if(!t)throw $i.create("installation-not-found");return AC(t)})}function AC(e){return Y$(e)?{fid:e.fid,registrationStatus:0}:e}function Y$(e){return e.registrationStatus===1&&e.registrationTime+mC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X$({appConfig:e,heartbeatServiceProvider:t},n){const r=Q$(e,n),i=R$(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:gC,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await TC(()=>fetch(r,a));if(l.ok){const u=await l.json();return EC(u)}else throw await SC("Generate Auth Token",l)}function Q$(e,{fid:t}){return`${wC(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(e,t=!1){let n;const r=await ah(e.appConfig,s=>{if(!PC(s))throw $i.create("not-registered");const o=s.authToken;if(!t&&e5(o))return s;if(o.requestStatus===1)return n=J$(e,t),s;{if(!navigator.onLine)throw $i.create("app-offline");const a=n5(s);return n=Z$(e,a),a}});return n?await n:r.authToken}async function J$(e,t){let n=await sE(e.appConfig);for(;n.authToken.requestStatus===1;)await _C(100),n=await sE(e.appConfig);const r=n.authToken;return r.requestStatus===0?Zy(e,t):r}function sE(e){return ah(e,t=>{if(!PC(t))throw $i.create("not-registered");const n=t.authToken;return r5(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Z$(e,t){try{const n=await X$(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Kc(e.appConfig,r),n}catch(n){if(vC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await IC(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Kc(e.appConfig,r)}throw n}}function PC(e){return e!==void 0&&e.registrationStatus===2}function e5(e){return e.requestStatus===2&&!t5(e)}function t5(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+I$}function n5(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function r5(e){return e.requestStatus===1&&e.requestTime+mC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i5(e){const t=e,{installationEntry:n,registrationPromise:r}=await Jy(t);return r?r.catch(console.error):Zy(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s5(e,t=!1){const n=e;return await o5(n),(await Zy(n,t)).token}async function o5(e){const{registrationPromise:t}=await Jy(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a5(e){if(!e||!e.options)throw Cd("App Configuration");if(!e.name)throw Cd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Cd(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Cd(e){return $i.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="installations",l5="installations-internal",u5=e=>{const t=e.getProvider("app").getImmediate(),n=a5(t),r=ti(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},c5=e=>{const t=e.getProvider("app").getImmediate(),n=ti(t,NC).getImmediate();return{getId:()=>i5(n),getToken:i=>s5(n,i)}};function f5(){dn(new Zt(NC,u5,"PUBLIC")),dn(new Zt(l5,c5,"PRIVATE"))}f5();Ct(pC,Xy);Ct(pC,Xy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="analytics",h5="firebase_id",d5="origin",p5=60*1e3,m5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ev="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Df("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new Xi("analytics","Analytics",g5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y5(e){if(!e.startsWith(ev)){const t=Ft.create("invalid-gtag-resource",{gtagURL:e});return It.warn(t.message),""}return e}function RC(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function v5(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function w5(e,t){const n=v5("firebase-js-sdk-policy",{createScriptURL:y5}),r=document.createElement("script"),i=`${ev}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function E5(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function S5(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await RC(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){It.error(a)}e("config",i,s)}async function b5(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await RC(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){It.error(s)}}function T5(e,t,n,r){async function i(s,o,a){try{s==="event"?await b5(e,t,n,o,a):s==="config"?await S5(e,t,n,r,o,a):s==="consent"?e("consent","update",a):e("set",o)}catch(l){It.error(l)}}return i}function _5(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=T5(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function k5(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ev)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x5=30,C5=1e3;class I5{constructor(t={},n=C5){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const OC=new I5;function A5(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function P5(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:A5(r)},s=m5.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function N5(e,t=OC,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ft.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new D5;return setTimeout(async()=>{a.abort()},n!==void 0?n:p5),DC({appId:r,apiKey:i,measurementId:s},o,a,t)}async function DC(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=OC){var s;const{appId:o,measurementId:a}=e;try{await R5(r,t)}catch(l){if(a)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await P5(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!O5(u)){if(i.deleteThrottleMetadata(o),a)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?hw(n,i.intervalMillis,x5):hw(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),It.debug(`Calling attemptFetch again in ${c} millis`),DC(e,f,r,i)}}function R5(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function O5(e){if(!(e instanceof en)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class D5{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function L5(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M5(){if(uk())try{await ck()}catch(e){return It.warn(Ft.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return It.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function F5(e,t,n,r,i,s,o){var a;const l=N5(e);l.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>It.error(d)),t.push(l);const u=M5().then(d=>{if(d)return r.getId()}),[c,f]=await Promise.all([l,u]);k5(s)||w5(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[d5]="firebase",h.update=!0,f!=null&&(h[h5]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(t){this.app=t}_delete(){return delete ra[this.app.options.appId],Promise.resolve()}}let ra={},oE=[];const aE={};let Id="dataLayer",$5="gtag",lE,LC,uE=!1;function V5(){const e=[];if(lk()&&e.push("This is a browser extension environment."),RM()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:t});It.warn(n.message)}}function B5(e,t,n){V5();const r=e.options.appId;if(!r)throw Ft.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(ra[r]!=null)throw Ft.create("already-exists",{id:r});if(!uE){E5(Id);const{wrappedGtag:s,gtagCore:o}=_5(ra,oE,aE,Id,$5);LC=s,lE=o,uE=!0}return ra[r]=F5(e,oE,aE,t,lE,Id,n),new U5(e)}function j5(e=Lf()){e=De(e);const t=ti(e,Yc);return t.isInitialized()?t.getImmediate():z5(e)}function z5(e,t={}){const n=ti(e,Yc);if(n.isInitialized()){const i=n.getImmediate();if(Na(t,n.getOptions()))return i;throw Ft.create("already-initialized")}return n.initialize({options:t})}function H5(e,t,n,r){e=De(e),L5(LC,ra[e.app.options.appId],t,n,r).catch(i=>It.error(i))}const cE="@firebase/analytics",fE="0.9.5";function W5(){dn(new Zt(Yc,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return B5(r,i,n)},"PUBLIC")),dn(new Zt("analytics-internal",e,"PRIVATE")),Ct(cE,fE),Ct(cE,fE,"esm2017");function e(t){try{const n=t.getProvider(Yc).getImmediate();return{logEvent:(r,i,s)=>H5(n,r,i,s)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}W5();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="firebasestorage.googleapis.com",FC="storageBucket",q5=2*60*1e3,G5=10*60*1e3,K5=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends en{constructor(t,n,r=0){super(Ad(t),`Firebase Storage: ${n} (${Ad(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ad(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Ad(e){return"storage/"+e}function tv(){const e="An unknown error occurred, please check the error payload for server response.";return new we(ue.UNKNOWN,e)}function Y5(e){return new we(ue.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function X5(e){return new we(ue.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Q5(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(ue.UNAUTHENTICATED,e)}function J5(){return new we(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Z5(e){return new we(ue.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function UC(){return new we(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $C(){return new we(ue.CANCELED,"User canceled the upload/download.")}function e6(e){return new we(ue.INVALID_URL,"Invalid URL '"+e+"'.")}function t6(e){return new we(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function n6(){return new we(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+FC+"' property when initializing the app?")}function VC(){return new we(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function r6(){return new we(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function i6(){return new we(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function s6(e){return new we(ue.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Im(e){return new we(ue.INVALID_ARGUMENT,e)}function BC(){return new we(ue.APP_DELETED,"The Firebase app was deleted.")}function o6(e){return new we(ue.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ia(e,t){return new we(ue.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function ko(e){throw new we(ue.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Dt.makeFromUrl(t,n)}catch{return new Dt(t,"")}if(r.path==="")return r;throw t6(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},w=n===MC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${w}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:d,indices:m,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<y.length;S++){const b=y[S],I=b.regex.exec(t);if(I){const C=I[b.indices.bucket];let x=I[b.indices.path];x||(x=""),r=new Dt(C,x),b.postModify(r);break}}if(r==null)throw e6(t);return r}}class a6{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l6(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,t.apply(null,E))}function f(E){i=setTimeout(()=>{i=null,e(d,l())},E)}function h(){s&&clearTimeout(s)}function d(E,...v){if(u){h();return}if(E){h(),c.call(null,E,...v);return}if(l()||o){h(),c.call(null,E,...v);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,f(y)}let m=!1;function w(E){m||(m=!0,h(),!u&&(i!==null?(E||(a=2),clearTimeout(i),f(0)):E||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function u6(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c6(e){return e!==void 0}function f6(e){return typeof e=="function"}function h6(e){return typeof e=="object"&&!Array.isArray(e)}function lh(e){return typeof e=="string"||e instanceof String}function hE(e){return nv()&&e instanceof Blob}function nv(){return typeof Blob<"u"&&!AM()}function dE(e,t,n,r){if(r<t)throw Im(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Im(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function jC(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ci;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Ci||(Ci={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(t,n,r,i,s,o,a,l,u,c,f,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new cu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ci.NO_ERROR,l=s.getStatus();if(!a||zC(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ci.ABORT;r(!1,new cu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new cu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());c6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=tv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?BC():$C();o(l)}else{const l=UC();o(l)}};this.canceled_?n(!1,new cu(!1,null,!0)):this.backoffId_=l6(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&u6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cu{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function p6(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function m6(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function g6(e,t){t&&(e["X-Firebase-GMPID"]=t)}function y6(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function v6(e,t,n,r,i,s,o=!0){const a=jC(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return g6(u,t),p6(u,n),m6(u,s),y6(u,r),new d6(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function E6(...e){const t=w6();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(nv())return new Blob(e);throw new we(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function S6(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(e){if(typeof atob>"u")throw s6("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pd{constructor(t,n){this.data=t,this.contentType=n||null}}function T6(e,t){switch(e){case bn.RAW:return new Pd(HC(t));case bn.BASE64:case bn.BASE64URL:return new Pd(WC(e,t));case bn.DATA_URL:return new Pd(k6(t),x6(t))}throw tv()}function HC(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function _6(e){let t;try{t=decodeURIComponent(e)}catch{throw ia(bn.DATA_URL,"Malformed data URL.")}return HC(t)}function WC(e,t){switch(e){case bn.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw ia(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case bn.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw ia(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=b6(t)}catch(i){throw i.message.includes("polyfill")?i:ia(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class qC{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ia(bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=C6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function k6(e){const t=new qC(e);return t.base64?WC(bn.BASE64,t.rest):_6(t.rest)}function x6(e){return new qC(e).contentType}function C6(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){let r=0,i="";hE(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(hE(this.data_)){const r=this.data_,i=S6(r,t,n);return i===null?null:new gr(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new gr(r,!0)}}static getBlob(...t){if(nv()){const n=t.map(r=>r instanceof gr?r.data_:r);return new gr(E6.apply(null,n))}else{const n=t.map(o=>lh(o)?T6(bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new gr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(e){let t;try{t=JSON.parse(e)}catch{return null}return h6(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I6(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function A6(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function KC(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P6(e,t){return t}class ft{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||P6}}let fu=null;function N6(e){return!lh(e)||e.length<2?e:KC(e)}function YC(){if(fu)return fu;const e=[];e.push(new ft("bucket")),e.push(new ft("generation")),e.push(new ft("metageneration")),e.push(new ft("name","fullPath",!0));function t(s,o){return N6(o)}const n=new ft("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=r,e.push(i),e.push(new ft("timeCreated")),e.push(new ft("updated")),e.push(new ft("md5Hash",null,!0)),e.push(new ft("cacheControl",null,!0)),e.push(new ft("contentDisposition",null,!0)),e.push(new ft("contentEncoding",null,!0)),e.push(new ft("contentLanguage",null,!0)),e.push(new ft("contentType",null,!0)),e.push(new ft("metadata","customMetadata",!0)),fu=e,fu}function R6(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Dt(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function O6(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return R6(r,e),r}function XC(e,t,n){const r=GC(t);return r===null?null:O6(e,r,n)}function D6(e,t,n,r){const i=GC(t);if(i===null||!lh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=e.bucket,f=e.fullPath,h="/b/"+o(c)+"/o/"+o(f),d=_l(h,n,r),m=jC({alt:"media",token:u});return d+m})[0]}function QC(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class lo{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e){if(!e)throw tv()}function rv(e,t){function n(r,i){const s=XC(e,i,t);return Wn(s!==null),s}return n}function L6(e,t){function n(r,i){const s=XC(e,i,t);return Wn(s!==null),D6(s,i,e.host,e._protocol)}return n}function kl(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=J5():i=Q5():n.getStatus()===402?i=X5(e.bucket):n.getStatus()===403?i=Z5(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function JC(e){const t=kl(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=Y5(e.path)),s.serverResponse=i.serverResponse,s}return n}function M6(e,t,n){const r=t.fullServerUrl(),i=_l(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new lo(i,s,rv(e,n),o);return a.errorHandler=JC(t),a}function F6(e,t,n){const r=t.fullServerUrl(),i=_l(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new lo(i,s,L6(e,n),o);return a.errorHandler=JC(t),a}function U6(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function ZC(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=U6(null,t)),r}function $6(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let S=0;S<2;S++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=ZC(t,r,i),c=QC(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",d=gr.getBlob(f,r,h);if(d===null)throw VC();const m={name:u.fullPath},w=_l(s,e.host,e._protocol),E="POST",v=e.maxUploadRetryTime,p=new lo(w,E,rv(e,n),v);return p.urlParams=m,p.headers=o,p.body=d.uploadData(),p.errorHandler=kl(t),p}class Xc{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function iv(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{Wn(!1)}return Wn(!!n&&(t||["active"]).indexOf(n)!==-1),n}function V6(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=ZC(t,r,i),a={name:o.fullPath},l=_l(s,e.host,e._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=QC(o,n),h=e.maxUploadRetryTime;function d(w){iv(w);let E;try{E=w.getResponseHeader("X-Goog-Upload-URL")}catch{Wn(!1)}return Wn(lh(E)),E}const m=new lo(l,u,d,h);return m.urlParams=a,m.headers=c,m.body=f,m.errorHandler=kl(t),m}function B6(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=iv(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wn(!1)}f||Wn(!1);const h=Number(f);return Wn(!isNaN(h)),new Xc(h,r.size(),c==="final")}const o="POST",a=e.maxUploadRetryTime,l=new lo(n,o,s,a);return l.headers=i,l.errorHandler=kl(t),l}const pE=256*1024;function j6(e,t,n,r,i,s,o,a){const l=new Xc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw r6();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const f=l.current,h=f+c;let d="";c===0?d="finalize":u===c?d="upload, finalize":d="upload";const m={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(f,h);if(w===null)throw VC();function E(S,b){const I=iv(S,["active","final"]),C=l.current+c,x=r.size();let F;return I==="final"?F=rv(t,s)(S,b):F=null,new Xc(C,x,I==="final",F)}const v="POST",p=t.maxUploadRetryTime,y=new lo(n,v,E,p);return y.headers=m,y.body=w.uploadData(),y.progressCallback=a||null,y.errorHandler=kl(e),y}const St={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Nd(e){switch(e){case"running":case"pausing":case"canceling":return St.RUNNING;case"paused":return St.PAUSED;case"success":return St.SUCCESS;case"canceled":return St.CANCELED;case"error":return St.ERROR;default:return St.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{constructor(t,n,r){if(f6(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const s=t;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class H6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ci.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ci.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ci.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw ko("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ko("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ko("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ko("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ko("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class W6 extends H6{initXhr(){this.xhr_.responseType="text"}}function rs(){return new W6}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q6{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=YC(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(zC(i.status,[]))if(s)i=UC();else{this.sleepTime=Math.max(this.sleepTime*2,K5),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=V6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,rs,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=B6(this._ref.storage,this._ref._location,t,this._blob),s=this._ref.storage._makeRequest(i,rs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=pE*this._chunkMultiplier,n=new Xc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=j6(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,rs,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){pE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=M6(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,rs,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=$6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,rs,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=$C(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Nd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const s=new z6(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Nd(this._state)){case St.SUCCESS:ts(this._resolve.bind(null,this.snapshot))();break;case St.CANCELED:case St.ERROR:const n=this._reject;ts(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Nd(this._state)){case St.RUNNING:case St.PAUSED:t.next&&ts(t.next.bind(t,this.snapshot))();break;case St.SUCCESS:t.complete&&ts(t.complete.bind(t))();break;case St.CANCELED:case St.ERROR:t.error&&ts(t.error.bind(t,this._error))();break;default:t.error&&ts(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){this._service=t,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Bi(t,n)}get root(){const t=new Dt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KC(this._location.path)}get storage(){return this._service}get parent(){const t=I6(this._location.path);if(t===null)return null;const n=new Dt(this._location.bucket,t);return new Bi(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw o6(t)}}function G6(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new q6(e,new gr(t),n)}function K6(e){e._throwIfRoot("getDownloadURL");const t=F6(e.storage,e._location,YC());return e.storage.makeRequestWithTokens(t,rs).then(n=>{if(n===null)throw i6();return n})}function Y6(e,t){const n=A6(e._location.path,t),r=new Dt(e._location.bucket,n);return new Bi(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X6(e){return/^[A-Za-z]+:\/\//.test(e)}function Q6(e,t){return new Bi(e,t)}function eI(e,t){if(e instanceof sv){const n=e;if(n._bucket==null)throw n6();const r=new Bi(n,n._bucket);return t!=null?eI(r,t):r}else return t!==void 0?Y6(e,t):e}function J6(e,t){if(t&&X6(t)){if(e instanceof sv)return Q6(e,t);throw Im("To use ref(service, url), the first argument must be a Storage instance.")}else return eI(e,t)}function mE(e,t){const n=t==null?void 0:t[FC];return n==null?null:Dt.makeFromBucketSpec(n,e)}function Z6(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:ak(i,e.app.options.projectId))}class sv{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=MC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q5,this._maxUploadRetryTime=G5,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=mE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,t):this._bucket=mE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){dE("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){dE("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Bi(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new a6(BC());{const o=v6(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const gE="@firebase/storage",yE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="storage";function eV(e,t,n){return e=De(e),G6(e,t,n)}function tV(e){return e=De(e),K6(e)}function nV(e,t){return e=De(e),J6(e,t)}function rV(e=Lf(),t){e=De(e);const r=ti(e,tI).getImmediate({identifier:t}),i=sk("storage");return i&&iV(r,...i),r}function iV(e,t,n,r={}){Z6(e,t,n,r)}function sV(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new sv(n,r,i,t,ro)}function oV(){dn(new Zt(tI,sV,"PUBLIC").setMultipleInstances(!0)),Ct(gE,yE,""),Ct(gE,yE,"esm2017")}oV();const aV={apiKey:"AIzaSyCIejZW_r35h1KXlmQmohYIglM5zcN4yto",authDomain:"mrcomputerlabt.firebaseapp.com",projectId:"mrcomputerlabt",storageBucket:"mrcomputerlabt.appspot.com",messagingSenderId:"1069606943871",appId:"1:1069606943871:web:1f55474fe3ec410760134a",measurementId:"G-HJN76RBCXM"},ov=pk(aV);j5(ov);const lV=f$(ov),uV=rV(ov);function nI(e,t){return function(){return e.apply(t,arguments)}}const{toString:rI}=Object.prototype,{getPrototypeOf:av}=Object,lv=(e=>t=>{const n=rI.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ir=e=>(e=e.toLowerCase(),t=>lv(t)===e),uh=e=>t=>typeof t===e,{isArray:uo}=Array,Ha=uh("undefined");function cV(e){return e!==null&&!Ha(e)&&e.constructor!==null&&!Ha(e.constructor)&&Gr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const iI=ir("ArrayBuffer");function fV(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&iI(e.buffer),t}const hV=uh("string"),Gr=uh("function"),sI=uh("number"),uv=e=>e!==null&&typeof e=="object",dV=e=>e===!0||e===!1,Fu=e=>{if(lv(e)!=="object")return!1;const t=av(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},pV=ir("Date"),mV=ir("File"),gV=ir("Blob"),yV=ir("FileList"),vV=e=>uv(e)&&Gr(e.pipe),wV=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||rI.call(e)===t||Gr(e.toString)&&e.toString()===t)},EV=ir("URLSearchParams"),SV=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),uo(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(r=0;r<o;r++)a=s[r],t.call(null,e[a],a,e)}}function oI(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const aI=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),lI=e=>!Ha(e)&&e!==aI;function Am(){const{caseless:e}=lI(this)&&this||{},t={},n=(r,i)=>{const s=e&&oI(t,i)||i;Fu(t[s])&&Fu(r)?t[s]=Am(t[s],r):Fu(r)?t[s]=Am({},r):uo(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&xl(arguments[r],n);return t}const bV=(e,t,n,{allOwnKeys:r}={})=>(xl(t,(i,s)=>{n&&Gr(i)?e[s]=nI(i,n):e[s]=i},{allOwnKeys:r}),e),TV=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_V=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},kV=(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&av(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xV=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},CV=e=>{if(!e)return null;if(uo(e))return e;let t=e.length;if(!sI(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},IV=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&av(Uint8Array)),AV=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},PV=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},NV=ir("HTMLFormElement"),RV=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),vE=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),OV=ir("RegExp"),uI=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};xl(n,(i,s)=>{t(i,s,e)!==!1&&(r[s]=i)}),Object.defineProperties(e,r)},DV=e=>{uI(e,(t,n)=>{if(Gr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Gr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},LV=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return uo(e)?r(e):r(String(e).split(t)),n},MV=()=>{},FV=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Rd="abcdefghijklmnopqrstuvwxyz",wE="0123456789",cI={DIGIT:wE,ALPHA:Rd,ALPHA_DIGIT:Rd+Rd.toUpperCase()+wE},UV=(e=16,t=cI.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function $V(e){return!!(e&&Gr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const VV=e=>{const t=new Array(10),n=(r,i)=>{if(uv(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=uo(r)?[]:{};return xl(r,(o,a)=>{const l=n(o,i+1);!Ha(l)&&(s[a]=l)}),t[i]=void 0,s}}return r};return n(e,0)},_={isArray:uo,isArrayBuffer:iI,isBuffer:cV,isFormData:wV,isArrayBufferView:fV,isString:hV,isNumber:sI,isBoolean:dV,isObject:uv,isPlainObject:Fu,isUndefined:Ha,isDate:pV,isFile:mV,isBlob:gV,isRegExp:OV,isFunction:Gr,isStream:vV,isURLSearchParams:EV,isTypedArray:IV,isFileList:yV,forEach:xl,merge:Am,extend:bV,trim:SV,stripBOM:TV,inherits:_V,toFlatObject:kV,kindOf:lv,kindOfTest:ir,endsWith:xV,toArray:CV,forEachEntry:AV,matchAll:PV,isHTMLForm:NV,hasOwnProperty:vE,hasOwnProp:vE,reduceDescriptors:uI,freezeMethods:DV,toObjectSet:LV,toCamelCase:RV,noop:MV,toFiniteNumber:FV,findKey:oI,global:aI,isContextDefined:lI,ALPHABET:cI,generateString:UV,isSpecCompliantForm:$V,toJSONObject:VV};function J(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}_.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fI=J.prototype,hI={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{hI[e]={value:e}});Object.defineProperties(J,hI);Object.defineProperty(fI,"isAxiosError",{value:!0});J.from=(e,t,n,r,i,s)=>{const o=Object.create(fI);return _.toFlatObject(e,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),J.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const BV=null;function Pm(e){return _.isPlainObject(e)||_.isArray(e)}function dI(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function EE(e,t,n){return e?e.concat(t).map(function(i,s){return i=dI(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function jV(e){return _.isArray(e)&&!e.some(Pm)}const zV=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function ch(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,E){return!_.isUndefined(E[w])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(_.isDate(m))return m.toISOString();if(!l&&_.isBlob(m))throw new J("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(m)||_.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,w,E){let v=m;if(m&&!E&&typeof m=="object"){if(_.endsWith(w,"{}"))w=r?w:w.slice(0,-2),m=JSON.stringify(m);else if(_.isArray(m)&&jV(m)||(_.isFileList(m)||_.endsWith(w,"[]"))&&(v=_.toArray(m)))return w=dI(w),v.forEach(function(y,S){!(_.isUndefined(y)||y===null)&&t.append(o===!0?EE([w],S,s):o===null?w:w+"[]",u(y))}),!1}return Pm(m)?!0:(t.append(EE(E,w,s),u(m)),!1)}const f=[],h=Object.assign(zV,{defaultVisitor:c,convertValue:u,isVisitable:Pm});function d(m,w){if(!_.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(m),_.forEach(m,function(v,p){(!(_.isUndefined(v)||v===null)&&i.call(t,v,_.isString(p)?p.trim():p,w,h))===!0&&d(v,w?w.concat(p):[p])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return d(e),t}function SE(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function cv(e,t){this._pairs=[],e&&ch(e,this,t)}const pI=cv.prototype;pI.append=function(t,n){this._pairs.push([t,n])};pI.toString=function(t){const n=t?function(r){return t.call(this,r,SE)}:SE;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function HV(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mI(e,t,n){if(!t)return e;const r=n&&n.encode||HV,i=n&&n.serialize;let s;if(i?s=i(t,n):s=_.isURLSearchParams(t)?t.toString():new cv(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class WV{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const bE=WV,gI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qV=typeof URLSearchParams<"u"?URLSearchParams:cv,GV=typeof FormData<"u"?FormData:null,KV=typeof Blob<"u"?Blob:null,YV=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),XV=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Tn={isBrowser:!0,classes:{URLSearchParams:qV,FormData:GV,Blob:KV},isStandardBrowserEnv:YV,isStandardBrowserWebWorkerEnv:XV,protocols:["http","https","file","blob","url","data"]};function QV(e,t){return ch(e,new Tn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Tn.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function JV(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ZV(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function yI(e){function t(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&_.isArray(i)?i.length:o,l?(_.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!_.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&_.isArray(i[o])&&(i[o]=ZV(i[o])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,i)=>{t(JV(r),i,n,0)}),n}return null}const eB={"Content-Type":void 0};function tB(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fh={transitional:gI,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=_.isObject(t);if(s&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return i&&i?JSON.stringify(yI(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return QV(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ch(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),tB(t)):t}],transformResponse:[function(t){const n=this.transitional||fh.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?J.from(a,J.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tn.classes.FormData,Blob:Tn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){fh.headers[t]={}});_.forEach(["post","put","patch"],function(t){fh.headers[t]=_.merge(eB)});const fv=fh,nB=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rB=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&nB[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},TE=Symbol("internals");function xo(e){return e&&String(e).trim().toLowerCase()}function Uu(e){return e===!1||e==null?e:_.isArray(e)?e.map(Uu):String(e)}function iB(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function sB(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Od(e,t,n,r,i){if(_.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function oB(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function aB(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class hh{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(a,l,u){const c=xo(l);if(!c)throw new Error("header name must be a non-empty string");const f=_.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Uu(a))}const o=(a,l)=>_.forEach(a,(u,c)=>s(u,c,l));return _.isPlainObject(t)||t instanceof this.constructor?o(t,n):_.isString(t)&&(t=t.trim())&&!sB(t)?o(rB(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=xo(t),t){const r=_.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return iB(i);if(_.isFunction(n))return n.call(this,i,r);if(_.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=xo(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Od(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=xo(o),o){const a=_.findKey(r,o);a&&(!n||Od(r,r[a],a,n))&&(delete r[a],i=!0)}}return _.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Od(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return _.forEach(this,(i,s)=>{const o=_.findKey(r,s);if(o){n[o]=Uu(i),delete n[s];return}const a=t?oB(s):String(s).trim();a!==s&&delete n[s],n[a]=Uu(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[TE]=this[TE]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=xo(o);r[a]||(aB(i,o),r[a]=!0)}return _.isArray(t)?t.forEach(s):s(t),this}}hh.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods(hh.prototype);_.freezeMethods(hh);const qn=hh;function Dd(e,t){const n=this||fv,r=t||n,i=qn.from(r.headers);let s=r.data;return _.forEach(e,function(a){s=a.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function vI(e){return!!(e&&e.__CANCEL__)}function Cl(e,t,n){J.call(this,e??"canceled",J.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(Cl,J,{__CANCEL__:!0});function lB(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const uB=Tn.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),_.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),_.isString(s)&&l.push("path="+s),_.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function cB(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fB(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function wI(e,t){return e&&!cB(t)?fB(e,t):t}const hB=Tn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=_.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function dB(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pB(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let f=s,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const d=c&&u-c;return d?Math.round(h*1e3/d):void 0}}function _E(e,t){let n=0;const r=pB(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const mB=typeof XMLHttpRequest<"u",gB=mB&&function(e){return new Promise(function(n,r){let i=e.data;const s=qn.from(e.headers).normalize(),o=e.responseType;let a;function l(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}_.isFormData(i)&&(Tn.isStandardBrowserEnv||Tn.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(d+":"+m))}const c=wI(e.baseURL,e.url);u.open(e.method.toUpperCase(),mI(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const d=qn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};lB(function(v){n(v),l()},function(v){r(v),l()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new J("Request aborted",J.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new J("Network Error",J.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||gI;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new J(m,w.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,u)),u=null},Tn.isStandardBrowserEnv){const d=(e.withCredentials||hB(c))&&e.xsrfCookieName&&uB.read(e.xsrfCookieName);d&&s.set(e.xsrfHeaderName,d)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&_.forEach(s.toJSON(),function(m,w){u.setRequestHeader(w,m)}),_.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",_E(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",_E(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=d=>{u&&(r(!d||d.type?new Cl(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const h=dB(c);if(h&&Tn.protocols.indexOf(h)===-1){r(new J("Unsupported protocol "+h+":",J.ERR_BAD_REQUEST,e));return}u.send(i||null)})},$u={http:BV,xhr:gB};_.forEach($u,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const yB={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=_.isString(n)?$u[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new J(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp($u,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$u};function Ld(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Cl(null,e)}function kE(e){return Ld(e),e.headers=qn.from(e.headers),e.data=Dd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),yB.getAdapter(e.adapter||fv.adapter)(e).then(function(r){return Ld(e),r.data=Dd.call(e,e.transformResponse,r),r.headers=qn.from(r.headers),r},function(r){return vI(r)||(Ld(e),r&&r.response&&(r.response.data=Dd.call(e,e.transformResponse,r.response),r.response.headers=qn.from(r.response.headers))),Promise.reject(r)})}const xE=e=>e instanceof qn?e.toJSON():e;function Xs(e,t){t=t||{};const n={};function r(u,c,f){return _.isPlainObject(u)&&_.isPlainObject(c)?_.merge.call({caseless:f},u,c):_.isPlainObject(c)?_.merge({},c):_.isArray(c)?c.slice():c}function i(u,c,f){if(_.isUndefined(c)){if(!_.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function s(u,c){if(!_.isUndefined(c))return r(void 0,c)}function o(u,c){if(_.isUndefined(c)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(xE(u),xE(c),!0)};return _.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,h=f(e[c],t[c],c);_.isUndefined(h)&&f!==a||(n[c]=h)}),n}const EI="1.3.4",hv={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hv[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const CE={};hv.transitional=function(t,n,r){function i(s,o){return"[Axios v"+EI+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(t===!1)throw new J(i(o," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!CE[o]&&(CE[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,a):!0}};function vB(e,t,n){if(typeof e!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const a=e[s],l=a===void 0||o(a,s,e);if(l!==!0)throw new J("option "+s+" must be "+l,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}}const Nm={assertOptions:vB,validators:hv},ar=Nm.validators;class Qc{constructor(t){this.defaults=t,this.interceptors={request:new bE,response:new bE}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Xs(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Nm.assertOptions(r,{silentJSONParsing:ar.transitional(ar.boolean),forcedJSONParsing:ar.transitional(ar.boolean),clarifyTimeoutError:ar.transitional(ar.boolean)},!1),i!==void 0&&Nm.assertOptions(i,{encode:ar.function,serialize:ar.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&_.merge(s.common,s[n.method]),o&&_.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=qn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,f=0,h;if(!l){const m=[kE.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),h=m.length,c=Promise.resolve(n);f<h;)c=c.then(m[f++],m[f++]);return c}h=a.length;let d=n;for(f=0;f<h;){const m=a[f++],w=a[f++];try{d=m(d)}catch(E){w.call(this,E);break}}try{c=kE.call(this,d)}catch(m){return Promise.reject(m)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Xs(this.defaults,t);const n=wI(t.baseURL,t.url);return mI(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Qc.prototype[t]=function(n,r){return this.request(Xs(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,a){return this.request(Xs(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Qc.prototype[t]=n(),Qc.prototype[t+"Form"]=n(!0)});const Vu=Qc;class dv{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,a){r.reason||(r.reason=new Cl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new dv(function(i){t=i}),cancel:t}}}const wB=dv;function EB(e){return function(n){return e.apply(null,n)}}function SB(e){return _.isObject(e)&&e.isAxiosError===!0}const Rm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rm).forEach(([e,t])=>{Rm[t]=e});const bB=Rm;function SI(e){const t=new Vu(e),n=nI(Vu.prototype.request,t);return _.extend(n,Vu.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return SI(Xs(e,i))},n}const Le=SI(fv);Le.Axios=Vu;Le.CanceledError=Cl;Le.CancelToken=wB;Le.isCancel=vI;Le.VERSION=EI;Le.toFormData=ch;Le.AxiosError=J;Le.Cancel=Le.CanceledError;Le.all=function(t){return Promise.all(t)};Le.spread=EB;Le.isAxiosError=SB;Le.mergeConfig=Xs;Le.AxiosHeaders=qn;Le.formToJSON=e=>yI(_.isHTMLForm(e)?new FormData(e):e);Le.HttpStatusCode=bB;Le.default=Le;const pv=Le,TB=()=>{const[e,t]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState("");T.useState(!1);const[l,u]=T.useState(null),c=f=>{const h=l$(lV,"Students");if(f.preventDefault(),!l){console.error("No file selected");return}new FormData().append("file",l),pv.post("http://localhost:3000/Submittion",{fullname:e,matriculation:n,program:i,level:o},{headers:{"Content-Type":"multipart/form-data"}}).then(E=>{console.log("it was sent successfully...",E)}).catch(E=>{console.log(E)});const m=nV(uV,"images/"+l.name),w=eV(m,l);w.on("state_changed",E=>{const v=E.bytesTransferred/E.totalBytes*100;switch(console.log("Upload is "+v+"% done"),E.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},E=>{alert(E.message)},()=>{tV(w.snapshot.ref).then(E=>{console.log("File available at",E),T$(h,{fullname:e,matriculation:n,program:i,level:o,downloadURL:E}).then(v=>{console.log(v),alert("it was successfully sent")}).catch(v=>{console.log(v.message)})})})};return g("div",{className:"container",children:g(Ic.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:g("div",{className:"row justify-content-center",children:g("div",{className:"col-md-6",children:k("div",{className:"card shadow",children:[g("div",{className:"card-header text-center",children:g("h2",{children:"Submit Assignment"})}),g("div",{className:"card-body",children:k("form",{onSubmit:c,children:[k("div",{className:"form-group",children:[g("label",{htmlFor:"fullname",children:"Full Name"}),g("input",{type:"text",className:"form-control",placeholder:"Enter your full name",value:e,onChange:f=>t(f.target.value),required:!0})]}),k("div",{className:"form-group",children:[g("label",{htmlFor:"matriculation",children:"Matriculation"}),g("input",{type:"text",className:"form-control",placeholder:"Enter your matriculation number",value:n,onChange:f=>r(f.target.value),required:!0})]}),k("div",{className:"form-group",children:[g("label",{htmlFor:"program",children:"Program"}),g("input",{type:"text",className:"form-control",placeholder:"Enter your program",value:i,onChange:f=>s(f.target.value),required:!0})]}),k("div",{className:"form-group",children:[g("label",{htmlFor:"level",children:"Level"}),g("input",{type:"text",className:"form-control",placeholder:"Enter your level",value:o,onChange:f=>a(f.target.value),required:!0})]}),k("div",{className:"form-group",children:[g("label",{htmlFor:"Document",children:"Document Upload"}),g("input",{type:"file",className:"form-control",placeholder:"Enter your Document which could be in the following format. pdf, doc",onChange:f=>u(f.target.files[0]),required:!0})]}),g(Ic.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.5},className:"form-group text-center",children:g("button",{type:"submit",className:"btn btn-primary btn-lg mt-3",children:"Submit Assignment"})})]})})]})})})})})},_B="/assets/professor-b011f08b.jpeg";const kB=()=>g("div",{className:"container card-group",children:k("div",{className:"row",children:[g("div",{className:"col-lg-4",children:k("div",{className:"card",children:[k("div",{className:"card-body",children:[g("h5",{className:"card-title",children:"Card 1"}),g("p",{className:"card-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper, felis eget malesuada lacinia, magna sapien suscipit dolor, vel tristique odio enim in risus."})]}),g("div",{className:"card-footer",children:g("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})}),g("div",{className:"col-lg-4",children:k("div",{className:"card",children:[k("div",{className:"card-body",children:[g("h5",{className:"card-title",children:"Card 2"}),g("p",{className:"card-text",children:"Donec commodo turpis quis nisl pharetra, eu consectetur est dapibus. Nam dignissim enim a augue vulputate, non pharetra eros hendrerit."})]}),g("div",{className:"card-footer",children:g("small",{className:"text-muted",children:"Last updated 7 mins ago"})})]})}),g("div",{className:"col-lg-4",children:k("div",{className:"card",children:[k("div",{className:"card-body",children:[g("h5",{className:"card-title",children:"Card 3"}),g("p",{className:"card-text",children:"Morbi id dolor id nisl tristique dignissim. Etiam dapibus fermentum metus, eget dignissim est condimentum eu. Ut vel augue nec lectus placerat dictum ac vel enim."})]}),g("div",{className:"card-footer",children:g("small",{className:"text-muted",children:"Last updated 12 mins ago"})})]})})]})});function IE(){return k("div",{className:"container-fluid px-0",children:[k("div",{className:"row no-gutters",children:[g("div",{className:"col-md-6",children:g("img",{src:_B,alt:"Showcase",className:"w-100",style:{height:"100vh",objectFit:"cover",objectPosition:"center"}})}),g("div",{className:"col-md-6 py-5 px-5 d-flex align-items-center",children:k("div",{className:"w-100",children:[g("h1",{className:"display-4 mb-4",children:"NEED'S COMPUTER HELP?"}),g("h2",{className:"mb-4",children:"PROF. TEMPLE VOKE"}),g("p",{className:"lead mb-4",children:'"Hello everyone, my name is Dr. Jane Smith and I am a professor of Psychology here at XYZ University. I earned my PhD in Psychology from ABC University, and have been teaching and researching in this field for over 10 years.'}),g("button",{className:"btn btn-primary btn-lg",children:"CONTACT NOW"})]})})]}),g(kB,{}),g(TB,{})]})}var bI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},AE=Lt.createContext&&Lt.createContext(bI),$r=globalThis&&globalThis.__assign||function(){return $r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$r.apply(this,arguments)},xB=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function TI(e){return e&&e.map(function(t,n){return Lt.createElement(t.tag,$r({key:n},t.attr),TI(t.child))})}function co(e){return function(t){return Lt.createElement(CB,$r({attr:$r({},e.attr)},t),TI(e.child))}}function CB(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=xB(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Lt.createElement("svg",$r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:$r($r({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Lt.createElement("title",null,s),e.children)};return AE!==void 0?Lt.createElement(AE.Consumer,null,function(n){return t(n)}):t(bI)}function IB(e){return co({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}function AB(e){return co({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function _I(e){return co({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)}function PB({Data:e}){const[t,n]=T.useState(!1);function r({Data:i,isMobileNavVisible:s}){return s?k("div",{className:"mobile-nav position-fixed top-0 start-0 w-100 h-100 bg-light",children:[g("button",{className:"btn btn-secondary d-block d-md-none position-absolute top-0 end-0 mt-3 me-3",onClick:()=>n(!1),children:"Close"}),g("div",{className:"d-flex flex-column align-items-center justify-content-center h-100",children:i.map((o,a)=>{const{navigation:l}=o;return g(pt,{to:l,className:"nav-link",onClick:()=>n(!1),children:l},a)})})]}):null}return k("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",style:{height:70},children:[k("div",{className:"container",children:[k(pt,{className:"navbar-brand",to:"/",children:[g(_I,{style:{fontSize:60,color:"#5950F6"}}),g("span",{className:"",style:{color:"#404040"},children:"UNI"}),g("span",{className:"",style:{color:"#5950F6"},children:"TECH"})]}),g("button",{className:"navbar-toggler",type:"button",onClick:()=>n(!t),children:g("span",{className:"navbar-toggler-icon"})}),g("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:g("ul",{className:"navbar-nav d-none d-sm-flex",children:e.map((i,s)=>{const{navigation:o}=i;return g("li",{className:"nav-item",children:g(pt,{className:"nav-link",to:o,children:o})},s)})})})]}),g(r,{Data:e,isMobileNavVisible:t})]})}function NB(e){return co({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}}]})(e)}function RB(e){return co({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}}]})(e)}function OB(e){return co({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"}}]})(e)}function kI(){return k("div",{className:"d-flex justify-content-sm-between px-sm-5 align-items-sm-center py-2",style:{backgroundColor:"#5950f6"},children:[g("div",{style:{color:"rgb(246,254,254)"},children:"Have any question +2347011951761"}),k("div",{className:"d-flex justify-content-around gap-4 align-items-center ",style:{fontSize:20},children:[g(NB,{}),g(OB,{}),g(IB,{}),g(RB,{}),g(AB,{})]})]})}function PE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?PE(Object(n),!0).forEach(function(r){Me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PE(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jc(e){return Jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jc(e)}function DB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function NE(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function LB(e,t,n){return t&&NE(e.prototype,t),n&&NE(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mv(e,t){return FB(e)||$B(e,t)||xI(e,t)||BB()}function Il(e){return MB(e)||UB(e)||xI(e)||VB()}function MB(e){if(Array.isArray(e))return Om(e)}function FB(e){if(Array.isArray(e))return e}function UB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $B(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function xI(e,t){if(e){if(typeof e=="string")return Om(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Om(e,t)}}function Om(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function VB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var RE=function(){},gv={},CI={},II=null,AI={mark:RE,measure:RE};try{typeof window<"u"&&(gv=window),typeof document<"u"&&(CI=document),typeof MutationObserver<"u"&&(II=MutationObserver),typeof performance<"u"&&(AI=performance)}catch{}var jB=gv.navigator||{},OE=jB.userAgent,DE=OE===void 0?"":OE,Kr=gv,ae=CI,LE=II,hu=AI;Kr.document;var sr=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",PI=~DE.indexOf("MSIE")||~DE.indexOf("Trident/"),du,pu,mu,gu,yu,Zn="___FONT_AWESOME___",Dm=16,NI="fa",RI="svg-inline--fa",ji="data-fa-i2svg",Lm="data-fa-pseudo-element",zB="data-fa-pseudo-element-pending",yv="data-prefix",vv="data-icon",ME="fontawesome-i2svg",HB="async",WB=["HTML","HEAD","STYLE","SCRIPT"],OI=function(){try{return!0}catch{return!1}}(),se="classic",Se="sharp",wv=[se,Se];function Al(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[se]}})}var Wa=Al((du={},Me(du,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Me(du,Se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),du)),qa=Al((pu={},Me(pu,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Me(pu,Se,{solid:"fass",regular:"fasr",light:"fasl"}),pu)),Ga=Al((mu={},Me(mu,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Me(mu,Se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),mu)),qB=Al((gu={},Me(gu,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Me(gu,Se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gu)),GB=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,DI="fa-layers-text",KB=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,YB=Al((yu={},Me(yu,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Me(yu,Se,{900:"fass",400:"fasr",300:"fasl"}),yu)),LI=[1,2,3,4,5,6,7,8,9,10],XB=LI.concat([11,12,13,14,15,16,17,18,19,20]),QB=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Si={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ka=new Set;Object.keys(qa[se]).map(Ka.add.bind(Ka));Object.keys(qa[Se]).map(Ka.add.bind(Ka));var JB=[].concat(wv,Il(Ka),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Si.GROUP,Si.SWAP_OPACITY,Si.PRIMARY,Si.SECONDARY]).concat(LI.map(function(e){return"".concat(e,"x")})).concat(XB.map(function(e){return"w-".concat(e)})),sa=Kr.FontAwesomeConfig||{};function ZB(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ej(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var tj=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tj.forEach(function(e){var t=mv(e,2),n=t[0],r=t[1],i=ej(ZB(n));i!=null&&(sa[r]=i)})}var MI={styleDefault:"solid",familyDefault:"classic",cssPrefix:NI,replacementClass:RI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sa.familyPrefix&&(sa.cssPrefix=sa.familyPrefix);var Qs=R(R({},MI),sa);Qs.autoReplaceSvg||(Qs.observeMutations=!1);var L={};Object.keys(MI).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Qs[e]=n,oa.forEach(function(r){return r(L)})},get:function(){return Qs[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Qs.cssPrefix=t,oa.forEach(function(n){return n(L)})},get:function(){return Qs.cssPrefix}});Kr.FontAwesomeConfig=L;var oa=[];function nj(e){return oa.push(e),function(){oa.splice(oa.indexOf(e),1)}}var lr=Dm,_n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rj(e){if(!(!e||!sr)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ae.head.insertBefore(t,r),e}}var ij="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ya(){for(var e=12,t="";e-- >0;)t+=ij[Math.random()*62|0];return t}function fo(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ev(e){return e.classList?fo(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function FI(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sj(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(FI(e[n]),'" ')},"").trim()}function dh(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Sv(e){return e.size!==_n.size||e.x!==_n.x||e.y!==_n.y||e.rotate!==_n.rotate||e.flipX||e.flipY}function oj(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function aj(e){var t=e.transform,n=e.width,r=n===void 0?Dm:n,i=e.height,s=i===void 0?Dm:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&PI?l+="translate(".concat(t.x/lr-r/2,"em, ").concat(t.y/lr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/lr,"em), calc(-50% + ").concat(t.y/lr,"em)) "):l+="translate(".concat(t.x/lr,"em, ").concat(t.y/lr,"em) "),l+="scale(".concat(t.size/lr*(t.flipX?-1:1),", ").concat(t.size/lr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var lj=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function UI(){var e=NI,t=RI,n=L.cssPrefix,r=L.replacementClass,i=lj;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var FE=!1;function Md(){L.autoAddCss&&!FE&&(rj(UI()),FE=!0)}var uj={mixout:function(){return{dom:{css:UI,insertCss:Md}}},hooks:function(){return{beforeDOMElementCreation:function(){Md()},beforeI2svg:function(){Md()}}}},er=Kr||{};er[Zn]||(er[Zn]={});er[Zn].styles||(er[Zn].styles={});er[Zn].hooks||(er[Zn].hooks={});er[Zn].shims||(er[Zn].shims=[]);var un=er[Zn],$I=[],cj=function e(){ae.removeEventListener("DOMContentLoaded",e),Zc=1,$I.map(function(t){return t()})},Zc=!1;sr&&(Zc=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Zc||ae.addEventListener("DOMContentLoaded",cj));function fj(e){sr&&(Zc?setTimeout(e,0):$I.push(e))}function Pl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?FI(e):"<".concat(t," ").concat(sj(r),">").concat(s.map(Pl).join(""),"</").concat(t,">")}function UE(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var hj=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Fd=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?hj(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,t[u],u,t);return c};function dj(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Mm(e){var t=dj(e);return t.length===1?t[0].toString(16):null}function pj(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function $E(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=$E(t);typeof un.hooks.addPack=="function"&&!i?un.hooks.addPack(e,$E(t)):un.styles[e]=R(R({},un.styles[e]||{}),s),e==="fas"&&Fm("fa",t)}var vu,wu,Eu,Es=un.styles,mj=un.shims,gj=(vu={},Me(vu,se,Object.values(Ga[se])),Me(vu,Se,Object.values(Ga[Se])),vu),bv=null,VI={},BI={},jI={},zI={},HI={},yj=(wu={},Me(wu,se,Object.keys(Wa[se])),Me(wu,Se,Object.keys(Wa[Se])),wu);function vj(e){return~JB.indexOf(e)}function wj(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!vj(i)?i:null}var WI=function(){var t=function(s){return Fd(Es,function(o,a,l){return o[l]=Fd(a,s,{}),o},{})};VI=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),BI=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),HI=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Es||L.autoFetchSvg,r=Fd(mj,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});jI=r.names,zI=r.unicodes,bv=ph(L.styleDefault,{family:L.familyDefault})};nj(function(e){bv=ph(e.styleDefault,{family:L.familyDefault})});WI();function Tv(e,t){return(VI[e]||{})[t]}function Ej(e,t){return(BI[e]||{})[t]}function bi(e,t){return(HI[e]||{})[t]}function qI(e){return jI[e]||{prefix:null,iconName:null}}function Sj(e){var t=zI[e],n=Tv("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yr(){return bv}var _v=function(){return{prefix:null,iconName:null,rest:[]}};function ph(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?se:n,i=Wa[r][e],s=qa[r][e]||qa[r][i],o=e in un.styles?e:null;return s||o||null}var VE=(Eu={},Me(Eu,se,Object.keys(Ga[se])),Me(Eu,Se,Object.keys(Ga[Se])),Eu);function mh(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Me(t,se,"".concat(L.cssPrefix,"-").concat(se)),Me(t,Se,"".concat(L.cssPrefix,"-").concat(Se)),t),o=null,a=se;(e.includes(s[se])||e.some(function(u){return VE[se].includes(u)}))&&(a=se),(e.includes(s[Se])||e.some(function(u){return VE[Se].includes(u)}))&&(a=Se);var l=e.reduce(function(u,c){var f=wj(L.cssPrefix,c);if(Es[c]?(c=gj[a].includes(c)?qB[a][c]:c,o=c,u.prefix=c):yj[a].indexOf(c)>-1?(o=c,u.prefix=ph(c,{family:a})):f?u.iconName=f:c!==L.replacementClass&&c!==s[se]&&c!==s[Se]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?qI(u.iconName):{},d=bi(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||d||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Es.far&&Es.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},_v());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Se&&(Es.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=bi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Yr()||"fas"),l}var bj=function(){function e(){DB(this,e),this.definitions={}}return LB(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Fm(a,o[a]);var l=Ga[se][a];l&&Fm(l,o[a]),WI()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),BE=[],Ss={},Rs={},Tj=Object.keys(Rs);function _j(e,t){var n=t.mixoutsTo;return BE=e,Ss={},Object.keys(Rs).forEach(function(r){Tj.indexOf(r)===-1&&delete Rs[r]}),BE.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Jc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ss[o]||(Ss[o]=[]),Ss[o].push(s[o])})}r.provides&&r.provides(Rs)}),n}function Um(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ss[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function zi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ss[e]||[];i.forEach(function(s){s.apply(null,n)})}function tr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rs[e]?Rs[e].apply(null,t):void 0}function $m(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Yr();if(t)return t=bi(n,t)||t,UE(GI.definitions,n,t)||UE(un.styles,n,t)}var GI=new bj,kj=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,zi("noAuto")},xj={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sr?(zi("beforeI2svg",t),tr("pseudoElements2svg",t),tr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,fj(function(){Ij({autoReplaceSvgRoot:n}),zi("watch",t)})}},Cj={icon:function(t){if(t===null)return null;if(Jc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ph(t[0]);return{prefix:r,iconName:bi(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(GB))){var i=mh(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yr(),iconName:bi(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Yr();return{prefix:s,iconName:bi(s,t)||t}}}},zt={noAuto:kj,config:L,dom:xj,parse:Cj,library:GI,findIconDefinition:$m,toHtml:Pl},Ij=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(un.styles).length>0||L.autoFetchSvg)&&sr&&L.autoReplaceSvg&&zt.dom.i2svg({node:r})};function gh(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Pl(r)})}}),Object.defineProperty(e,"node",{get:function(){if(sr){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Aj(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Sv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=dh(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Pj(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function kv(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,d=h===void 0?!1:h,m=r.found?r:n,w=m.width,E=m.height,v=i==="fak",p=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),y={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},S=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};d&&(y.attributes[ji]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Ya())},children:[l]}),delete y.attributes.title);var b=R(R({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},S),f.styles)}),I=r.found&&n.found?tr("generateAbstractMask",b)||{children:[],attributes:{}}:tr("generateAbstractIcon",b)||{children:[],attributes:{}},C=I.children,x=I.attributes;return b.children=C,b.attributes=x,a?Pj(b):Aj(b)}function jE(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ji]="");var c=R({},o.styles);Sv(i)&&(c.transform=aj({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=dh(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Nj(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=dh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ud=un.styles;function Vm(e){var t=e[0],n=e[1],r=e.slice(4),i=mv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Si.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Si.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Si.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var Rj={found:!1,width:512,height:512};function Oj(e,t){!OI&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Bm(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Yr()),new Promise(function(r,i){if(tr("missingIconAbstract"),n==="fa"){var s=qI(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ud[t]&&Ud[t][e]){var o=Ud[t][e];return r(Vm(o))}Oj(e,t),r(R(R({},Rj),{},{icon:L.showMissingIcons&&e?tr("missingIconAbstract")||{}:{}}))})}var zE=function(){},jm=L.measurePerformance&&hu&&hu.mark&&hu.measure?hu:{mark:zE,measure:zE},Mo='FA "6.4.0"',Dj=function(t){return jm.mark("".concat(Mo," ").concat(t," begins")),function(){return KI(t)}},KI=function(t){jm.mark("".concat(Mo," ").concat(t," ends")),jm.measure("".concat(Mo," ").concat(t),"".concat(Mo," ").concat(t," begins"),"".concat(Mo," ").concat(t," ends"))},xv={begin:Dj,end:KI},Bu=function(){};function HE(e){var t=e.getAttribute?e.getAttribute(ji):null;return typeof t=="string"}function Lj(e){var t=e.getAttribute?e.getAttribute(yv):null,n=e.getAttribute?e.getAttribute(vv):null;return t&&n}function Mj(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function Fj(){if(L.autoReplaceSvg===!0)return ju.replace;var e=ju[L.autoReplaceSvg];return e||ju.replace}function Uj(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function $j(e){return ae.createElement(e)}function YI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uj:$j:n;if(typeof e=="string")return ae.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(YI(o,{ceFn:r}))}),i}function Vj(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ju={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(YI(i),n)}),n.getAttribute(ji)===null&&L.keepOriginalSource){var r=ae.createComment(Vj(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ev(n).indexOf(L.replacementClass))return ju.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Pl(a)}).join(`
`);n.setAttribute(ji,""),n.innerHTML=o}};function WE(e){e()}function XI(e,t){var n=typeof t=="function"?t:Bu;if(e.length===0)n();else{var r=WE;L.mutateApproach===HB&&(r=Kr.requestAnimationFrame||WE),r(function(){var i=Fj(),s=xv.begin("mutate");e.map(i),s(),n()})}}var Cv=!1;function QI(){Cv=!0}function zm(){Cv=!1}var ef=null;function qE(e){if(LE&&L.observeMutations){var t=e.treeCallback,n=t===void 0?Bu:t,r=e.nodeCallback,i=r===void 0?Bu:r,s=e.pseudoElementsCallback,o=s===void 0?Bu:s,a=e.observeMutationsRoot,l=a===void 0?ae:a;ef=new LE(function(u){if(!Cv){var c=Yr();fo(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!HE(f.addedNodes[0])&&(L.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&HE(f.target)&&~QB.indexOf(f.attributeName))if(f.attributeName==="class"&&Lj(f.target)){var h=mh(Ev(f.target)),d=h.prefix,m=h.iconName;f.target.setAttribute(yv,d||c),m&&f.target.setAttribute(vv,m)}else Mj(f.target)&&i(f.target)})}}),sr&&ef.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bj(){ef&&ef.disconnect()}function jj(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function zj(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=mh(Ev(e));return i.prefix||(i.prefix=Yr()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Ej(i.prefix,e.innerText)||Tv(i.prefix,Mm(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Hj(e){var t=fo(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Ya()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wj(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function GE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zj(e),r=n.iconName,i=n.prefix,s=n.rest,o=Hj(e),a=Um("parseNodeAttributes",{},e),l=t.styleParser?jj(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:_n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var qj=un.styles;function JI(e){var t=L.autoReplaceSvg==="nest"?GE(e,{styleParser:!1}):GE(e);return~t.extra.classes.indexOf(DI)?tr("generateLayersText",e,t):tr("generateSvgReplacementMutation",e,t)}var Xr=new Set;wv.map(function(e){Xr.add("fa-".concat(e))});Object.keys(Wa[se]).map(Xr.add.bind(Xr));Object.keys(Wa[Se]).map(Xr.add.bind(Xr));Xr=Il(Xr);function KE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sr)return Promise.resolve();var n=ae.documentElement.classList,r=function(f){return n.add("".concat(ME,"-").concat(f))},i=function(f){return n.remove("".concat(ME,"-").concat(f))},s=L.autoFetchSvg?Xr:wv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(qj));s.includes("fa")||s.push("fa");var o=[".".concat(DI,":not([").concat(ji,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ji,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fo(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=xv.begin("onTree"),u=a.reduce(function(c,f){try{var h=JI(f);h&&c.push(h)}catch(d){OI||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){XI(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function Gj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;JI(e).then(function(n){n&&XI([n],t)})}function Kj(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$m(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$m(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Yj=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_n:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,d=n.titleId,m=d===void 0?null:d,w=n.classes,E=w===void 0?[]:w,v=n.attributes,p=v===void 0?{}:v,y=n.styles,S=y===void 0?{}:y;if(t){var b=t.prefix,I=t.iconName,C=t.icon;return gh(R({type:"icon"},t),function(){return zi("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(h?p["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(m||Ya()):(p["aria-hidden"]="true",p.focusable="false")),kv({icons:{main:Vm(C),mask:l?Vm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:I,transform:R(R({},_n),i),symbol:o,title:h,maskId:c,titleId:m,extra:{attributes:p,styles:S,classes:E}})})}},Xj={mixout:function(){return{icon:Kj(Yj)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=KE,n.nodeCallback=Gj,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ae:r,s=n.callback,o=s===void 0?function(){}:s;return KE(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(d,m){Promise.all([Bm(i,a),c.iconName?Bm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=mv(w,2),v=E[0],p=E[1];d([n,kv({icons:{main:v,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=dh(a);l.length>0&&(i.style=l);var u;return Sv(o)&&(u=tr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Qj={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return gh({type:"layer"},function(){zi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Il(s)).join(" ")},children:o}]})}}}},Jj={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return gh({type:"counter",content:n},function(){return zi("beforeDOMElementCreation",{content:n,params:r}),Nj({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Il(a))}})})}}}},Zj={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?_n:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,d=h===void 0?{}:h;return gh({type:"text",content:n},function(){return zi("beforeDOMElementCreation",{content:n,params:r}),jE({content:n,transform:R(R({},_n),s),title:a,extra:{attributes:f,styles:d,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Il(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(PI){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,jE({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},e8=new RegExp('"',"ug"),YE=[1105920,1112319];function t8(e){var t=e.replace(e8,""),n=pj(t,0),r=n>=YE[0]&&n<=YE[1],i=t.length===2?t[0]===t[1]:!1;return{value:Mm(i?t[0]:t),isSecondary:r||i}}function XE(e,t){var n="".concat(zB).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=fo(e.children),o=s.filter(function(C){return C.getAttribute(Lm)===t})[0],a=Kr.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(KB),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Se:se,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qa[h][l[2].toLowerCase()]:YB[h][u],m=t8(f),w=m.value,E=m.isSecondary,v=l[0].startsWith("FontAwesome"),p=Tv(d,w),y=p;if(v){var S=Sj(w);S.iconName&&S.prefix&&(p=S.iconName,d=S.prefix)}if(p&&!E&&(!o||o.getAttribute(yv)!==d||o.getAttribute(vv)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var b=Wj(),I=b.extra;I.attributes[Lm]=t,Bm(p,d).then(function(C){var x=kv(R(R({},b),{},{icons:{main:C,mask:_v()},prefix:d,iconName:y,extra:I,watchable:!0})),F=ae.createElement("svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=x.map(function($){return Pl($)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function n8(e){return Promise.all([XE(e,"::before"),XE(e,"::after")])}function r8(e){return e.parentNode!==document.head&&!~WB.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lm)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function QE(e){if(sr)return new Promise(function(t,n){var r=fo(e.querySelectorAll("*")).filter(r8).map(n8),i=xv.begin("searchPseudoElements");QI(),Promise.all(r).then(function(){i(),zm(),t()}).catch(function(){i(),zm(),n()})})}var i8={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=QE,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ae:r;L.searchPseudoElements&&QE(i)}}},JE=!1,s8={mixout:function(){return{dom:{unwatch:function(){QI(),JE=!0}}}},hooks:function(){return{bootstrap:function(){qE(Um("mutationObserverCallbacks",{}))},noAuto:function(){Bj()},watch:function(n){var r=n.observeMutationsRoot;JE?zm():qE(Um("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ZE=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},o8={mixout:function(){return{parse:{transform:function(n){return ZE(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ZE(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:f,path:h};return{tag:"g",attributes:R({},d.outer),children:[{tag:"g",attributes:R({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),d.path)}]}]}}}},$d={x:0,y:0,width:"100%",height:"100%"};function eS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function a8(e){return e.tag==="g"?e.children:[e]}var l8={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?mh(i.split(" ").map(function(o){return o.trim()})):_v();return s.prefix||(s.prefix=Yr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,d=oj({transform:l,containerWidth:f,iconWidth:u}),m={tag:"rect",attributes:R(R({},$d),{},{fill:"white"})},w=c.children?{children:c.children.map(eS)}:{},E={tag:"g",attributes:R({},d.inner),children:[eS(R({tag:c.tag,attributes:R(R({},c.attributes),d.path)},w))]},v={tag:"g",attributes:R({},d.outer),children:[E]},p="mask-".concat(a||Ya()),y="clip-".concat(a||Ya()),S={tag:"mask",attributes:R(R({},$d),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,v]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:a8(h)},S]};return r.push(b,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},$d)}),{children:r,attributes:i}}}},u8={provides:function(t){var n=!1;Kr.matchMedia&&(n=Kr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},c8={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},f8=[uj,Xj,Qj,Jj,Zj,i8,s8,o8,l8,u8,c8];_j(f8,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;var Hm=zt.parse;zt.findIconDefinition;zt.toHtml;var h8=zt.icon;zt.layer;zt.text;zt.counter;var K={},d8={get exports(){return K},set exports(e){K=e}},p8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m8=p8,g8=m8;function ZI(){}function eA(){}eA.resetWarningCache=ZI;var y8=function(){function e(r,i,s,o,a,l){if(l!==g8){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:eA,resetWarningCache:ZI};return n.PropTypes=n,n};d8.exports=y8();function tS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tS(Object(n),!0).forEach(function(r){bs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tf(e){return tf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tf(e)}function bs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function w8(e,t){if(e==null)return{};var n=v8(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wm(e){return E8(e)||S8(e)||b8(e)||T8()}function E8(e){if(Array.isArray(e))return qm(e)}function S8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function b8(e,t){if(e){if(typeof e=="string")return qm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qm(e,t)}}function qm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _8(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,d=e.inverse,m=e.border,w=e.listItem,E=e.flip,v=e.size,p=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":d,"fa-border":m,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},bs(t,"fa-".concat(v),typeof v<"u"&&v!==null),bs(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),bs(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),bs(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(b){return S[b]?b:null}).filter(function(b){return b})}function k8(e){return e=e-0,e===e}function tA(e){return k8(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var x8=["style"];function C8(e){return e.charAt(0).toUpperCase()+e.slice(1)}function I8(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=tA(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[C8(i)]=s:t[i]=s,t},{})}function nA(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return nA(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=I8(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[tA(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=w8(n,x8);return i.attrs.style=_r(_r({},i.attrs.style),o),e.apply(void 0,[t.tag,_r(_r({},i.attrs),a)].concat(Wm(r)))}var rA=!1;try{rA=!0}catch{}function A8(){if(!rA&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nS(e){if(e&&tf(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hm.icon)return Hm.icon(e);if(e===null)return null;if(e&&tf(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Vd(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?bs({},e,t):{}}var On=Lt.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,u=nS(n),c=Vd("classes",[].concat(Wm(_8(e)),Wm(s.split(" ")))),f=Vd("transform",typeof e.transform=="string"?Hm.transform(e.transform):e.transform),h=Vd("mask",nS(r)),d=h8(u,_r(_r(_r(_r({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!d)return A8("Could not find icon",u),null;var m=d.abstract,w={ref:t};return Object.keys(e).forEach(function(E){On.defaultProps.hasOwnProperty(E)||(w[E]=e[E])}),P8(m[0],w)});On.displayName="FontAwesomeIcon";On.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};On.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var P8=nA.bind(null,Lt.createElement),N8={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},R8={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},O8={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},D8={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},L8={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const iA=()=>g("footer",{className:"bg-dark text-light",children:k("div",{className:"container py-5",children:[k("div",{className:"row",children:[k("div",{className:"col-md-4 mb-3",children:[g("h5",{children:"About Us"}),g("p",{className:"text-muted",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),k("div",{className:"col-md-4 mb-3",children:[g("h5",{children:"Contact Us"}),k("ul",{className:"list-unstyled text-muted",children:[k("li",{className:"mb-2",children:[g(On,{icon:L8,className:"me-2"}),"example@example.com"]}),k("li",{className:"mb-2",children:[g(On,{icon:D8,className:"me-2"}),"+1-555-555-5555"]})]})]}),k("div",{className:"col-md-4 mb-3",children:[g("h5",{children:"Follow Us"}),k("ul",{className:"list-unstyled d-flex justify-content-start",children:[g("li",{className:"me-3",children:g(pt,{to:"/Dashboard",children:g(On,{icon:R8})})}),g("li",{className:"me-3",children:g("a",{href:"#",children:g(On,{icon:O8})})}),g("li",{className:"me-3",children:g("a",{href:"#",children:g(On,{icon:N8})})})]})]})]}),g("hr",{className:"border-secondary"}),g("div",{className:"text-center text-muted pb-3",children:k("small",{children:["© 2023 Company Name. All rights reserved. | Designed by"," ",g("a",{href:"#",className:"text-light",children:"Your Name"})]})})]})});function M8({Data:e}){return k("div",{children:[g(kI,{}),g(PB,{Data:e}),g(qg,{}),g(iA,{})]})}function Iv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function sA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F8=sA,oA=new Xi("auth","Firebase",sA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new Df("@firebase/auth");function zu(e,...t){rS.logLevel<=ee.ERROR&&rS.error(`Auth (${ro}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e,...t){throw Av(e,...t)}function In(e,...t){return Av(e,...t)}function U8(e,t,n){const r=Object.assign(Object.assign({},F8()),{[t]:n});return new Xi("auth","Firebase",r).create(t,{appName:e.name})}function Av(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return oA.create(e,...t)}function B(e,t,...n){if(!e)throw Av(t,...n)}function Un(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zu(t),new Error(t)}function nr(e,t){e||Un(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new Map;function $n(e){nr(e instanceof Function,"Expected a class definition");let t=iS.get(e);return t?(nr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,iS.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $8(e,t){const n=ti(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Na(s,t??{}))return i;pn(i,"already-initialized")}return n.initialize({options:t})}function V8(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function B8(){return sS()==="http:"||sS()==="https:"}function sS(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j8(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B8()||lk()||"connection"in navigator)?navigator.onLine:!0}function z8(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n){this.shortDelay=t,this.longDelay=n,nr(n>t,"Short delay should be less than long delay!"),this.isMobile=IM()||PM()}get(){return j8()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(e,t){nr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H8={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W8=new Nl(3e4,6e4);function yh(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Rl(e,t,n,r,i={}){return lA(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=cl(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),aA.fetch()(uA(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function lA(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},H8),t);try{const i=new q8(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Su(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Su(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw U8(e,c,u);pn(e,c)}}catch(i){if(i instanceof en)throw i;pn(e,"network-request-failed",{message:String(i)})}}async function vh(e,t,n,r,i={}){const s=await Rl(e,t,n,r,i);return"mfaPendingCredential"in s&&pn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function uA(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Pv(e.config,i):`${e.config.apiScheme}://${i}`}class q8{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),W8.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Su(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=In(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G8(e,t){return Rl(e,"POST","/v1/accounts:delete",t)}async function K8(e,t){return Rl(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Y8(e,t=!1){const n=De(e),r=await n.getIdToken(t),i=Nv(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:aa(Bd(i.auth_time)),issuedAtTime:aa(Bd(i.iat)),expirationTime:aa(Bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(e){return Number(e)*1e3}function Nv(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=rk(n);return i?JSON.parse(i):(zu("Failed to decode base64 JWT payload"),null)}catch(i){return zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function X8(e){const t=Nv(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof en&&Q8(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q8({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J8{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=aa(this.lastLoginAt),this.creationTime=aa(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xa(e,K8(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?t9(s.providerUserInfo):[],a=e9(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cA(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function Z8(e){const t=De(e);await nf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function e9(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function t9(e){return e.map(t=>{var{providerId:n}=t,r=Iv(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n9(e,t){const n=await lA(e,{},async()=>{const r=cl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=uA(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):X8(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return B(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n9(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qa;return r&&(B(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ii{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Iv(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J8(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Xa(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Y8(this,t)}reload(){return Z8(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ii(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await nf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Xa(this,G8(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:b,providerData:I,stsTokenManager:C}=n;B(y&&C,t,"internal-error");const x=Qa.fromJSON(this.name,C);B(typeof y=="string",t,"internal-error"),ur(f,t.name),ur(h,t.name),B(typeof S=="boolean",t,"internal-error"),B(typeof b=="boolean",t,"internal-error"),ur(d,t.name),ur(m,t.name),ur(w,t.name),ur(E,t.name),ur(v,t.name),ur(p,t.name);const F=new Ii({uid:y,auth:t,email:h,emailVerified:S,displayName:f,isAnonymous:b,photoURL:m,phoneNumber:d,tenantId:w,stsTokenManager:x,createdAt:v,lastLoginAt:p});return I&&Array.isArray(I)&&(F.providerData=I.map($=>Object.assign({},$))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new Qa;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await nf(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}fA.type="NONE";const oS=fA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(e,t,n){return`firebase:${e}:${t}:${n}`}class Os{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ii._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Os($n(oS),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$n(oS);const o=Hu(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Ii._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Os(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Os(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gA(t))return"Blackberry";if(yA(t))return"Webos";if(Rv(t))return"Safari";if((t.includes("chrome/")||dA(t))&&!t.includes("edge/"))return"Chrome";if(mA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hA(e=ct()){return/firefox\//i.test(e)}function Rv(e=ct()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dA(e=ct()){return/crios\//i.test(e)}function pA(e=ct()){return/iemobile/i.test(e)}function mA(e=ct()){return/android/i.test(e)}function gA(e=ct()){return/blackberry/i.test(e)}function yA(e=ct()){return/webos/i.test(e)}function wh(e=ct()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function r9(e=ct()){var t;return wh(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function i9(){return NM()&&document.documentMode===10}function vA(e=ct()){return wh(e)||mA(e)||yA(e)||gA(e)||/windows phone/i.test(e)||pA(e)}function s9(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(e,t=[]){let n;switch(e){case"Browser":n=aS(ct());break;case"Worker":n=`${aS(ct())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ro}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lS(this),this.idTokenSubscription=new lS(this),this.beforeStateQueue=new o9(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oA,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await nf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=z8()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?De(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence($n(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Xi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&$n(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Eh(e){return De(e)}class lS{constructor(t){this.auth=t,this.observer=null,this.addObserver=FM(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function l9(e,t,n){const r=Eh(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=EA(t),{host:o,port:a}=u9(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||c9()}function EA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function u9(e){const t=EA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uS(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uS(o)}}}function uS(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function c9(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(t){return Un("not implemented")}_linkToIdToken(t,n){return Un("not implemented")}_getReauthenticationResolver(t){return Un("not implemented")}}async function f9(e,t){return Rl(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h9(e,t){return vh(e,"POST","/v1/accounts:signInWithPassword",yh(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d9(e,t){return vh(e,"POST","/v1/accounts:signInWithEmailLink",yh(e,t))}async function p9(e,t){return vh(e,"POST","/v1/accounts:signInWithEmailLink",yh(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Ov{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ja(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ja(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return h9(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d9(t,{email:this._email,oobCode:this._password});default:pn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return f9(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return p9(t,{idToken:n,email:this._email,oobCode:this._password});default:pn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e,t){return vh(e,"POST","/v1/accounts:signInWithIdp",yh(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m9="http://localhost";class Hi extends Ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Iv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ds(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ds(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ds(t,n)}buildRequest(){const t={requestUri:m9,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=cl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g9(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y9(e){const t=Ro(Oo(e)).link,n=t?Ro(Oo(t)).deep_link_id:null,r=Ro(Oo(e)).deep_link_id;return(r?Ro(Oo(r)).link:null)||r||n||t||e}class Dv{constructor(t){var n,r,i,s,o,a;const l=Ro(Oo(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=g9((i=l.mode)!==null&&i!==void 0?i:null);B(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=y9(t);try{return new Dv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.providerId=ho.PROVIDER_ID}static credential(t,n){return Ja._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Dv.parseLink(n);return B(r,"argument-error"),Ja._fromEmailAndCode(t,r.code,r.tenantId)}}ho.PROVIDER_ID="password";ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends SA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ol{constructor(){super("facebook.com")}static credential(t){return Hi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yr.credentialFromTaggedObject(t)}static credentialFromError(t){return yr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yr.credential(t.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return vr.credentialFromTaggedObject(t)}static credentialFromError(t){return vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ol{constructor(){super("github.com")}static credential(t){return Hi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wr.credentialFromTaggedObject(t)}static credentialFromError(t){return wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wr.credential(t.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ol{constructor(){super("twitter.com")}static credential(t,n){return Hi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Er.credentialFromTaggedObject(t)}static credentialFromError(t){return Er.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ii._fromIdTokenResponse(t,r,i),o=cS(r);return new Js({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=cS(r);return new Js({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function cS(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends en{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rf.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new rf(t,n,r,i)}}function bA(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rf._fromErrorAndOperation(e,s,t,r):s})}async function v9(e,t,n=!1){const r=await Xa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Js._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Xa(e,bA(r,i,t,e),n);B(s.idToken,r,"internal-error");const o=Nv(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(e.uid===a,r,"user-mismatch"),Js._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(e,t,n=!1){const r="signIn",i=await bA(e,r,t),s=await Js._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function E9(e,t){return TA(Eh(e),t)}function S9(e,t,n){return E9(De(e),ho.credential(t,n))}function b9(e,t,n,r){return De(e).onIdTokenChanged(t,n,r)}function T9(e,t,n){return De(e).beforeAuthStateChanged(t,n)}function _9(e){return De(e).signOut()}const sf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sf,"1"),this.storage.removeItem(sf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k9(){const e=ct();return Rv(e)||wh(e)}const x9=1e3,C9=10;class kA extends _A{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=k9()&&s9(),this.fallbackToPolling=vA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);i9()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,C9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},x9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}kA.type="LOCAL";const I9=kA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends _A{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}xA.type="SESSION";const CA=xA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A9(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Sh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await A9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Lv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function N9(e){An().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function R9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O9(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function D9(){return IA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="firebaseLocalStorageDb",L9=1,of="firebaseLocalStorage",PA="fbase_key";class Dl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(e,t){return e.transaction([of],t?"readwrite":"readonly").objectStore(of)}function M9(){const e=indexedDB.deleteDatabase(AA);return new Dl(e).toPromise()}function Km(){const e=indexedDB.open(AA,L9);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(of,{keyPath:PA})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(of)?t(r):(r.close(),await M9(),t(await Km()))})})}async function fS(e,t,n){const r=bh(e,!0).put({[PA]:t,value:n});return new Dl(r).toPromise()}async function F9(e,t){const n=bh(e,!1).get(t),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function hS(e,t){const n=bh(e,!0).delete(t);return new Dl(n).toPromise()}const U9=800,$9=3;class NA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Km(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>$9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(D9()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await R9(),!this.activeServiceWorker)return;this.sender=new P9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||O9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Km();return await fS(t,sf,"1"),await hS(t,sf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fS(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>F9(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hS(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=bh(i,!1).getAll();return new Dl(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NA.type="LOCAL";const V9=NA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B9(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function j9(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=In("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",B9().appendChild(r)})}function z9(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H9(e,t){return t?$n(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv extends Ov{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ds(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ds(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ds(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function W9(e){return TA(e.auth,new Mv(e),e.bypassAuthState)}function q9(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),w9(n,new Mv(e),e.bypassAuthState)}async function G9(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),v9(n,new Mv(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return W9;case"linkViaPopup":case"linkViaRedirect":return G9;case"reauthViaPopup":case"reauthViaRedirect":return q9;default:pn(this.auth,"internal-error")}}resolve(t){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K9=new Nl(2e3,1e4);class Ts extends RA{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const t=Lv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,K9.get())};t()}}Ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y9="pendingRedirect",Wu=new Map;class X9 extends RA{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Wu.get(this.auth._key());if(!t){try{const r=await Q9(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Wu.set(this.auth._key(),t)}return this.bypassAuthState||Wu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q9(e,t){const n=ez(t),r=Z9(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function J9(e,t){Wu.set(e._key(),t)}function Z9(e){return $n(e._redirectPersistence)}function ez(e){return Hu(Y9,e.config.apiKey,e.name)}async function tz(e,t,n=!1){const r=Eh(e),i=H9(r,t),o=await new X9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nz=10*60*1e3;class rz{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!iz(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!OA(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nz&&this.cachedEventUids.clear(),this.cachedEventUids.has(dS(t))}saveEventToCache(t){this.cachedEventUids.add(dS(t)),this.lastProcessedEventTime=Date.now()}}function dS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function OA({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function iz(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OA(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sz(e,t={}){return Rl(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,az=/^https?/;async function lz(e){if(e.config.emulator)return;const{authorizedDomains:t}=await sz(e);for(const n of t)try{if(uz(n))return}catch{}pn(e,"unauthorized-domain")}function uz(e){const t=Gm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!az.test(n))return!1;if(oz.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cz=new Nl(3e4,6e4);function pS(){const e=An().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function fz(e){return new Promise((t,n)=>{var r,i,s;function o(){pS(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pS(),n(In(e,"network-request-failed"))},timeout:cz.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const a=z9("iframefcb");return An()[a]=()=>{gapi.load?o():n(In(e,"network-request-failed"))},j9(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw qu=null,t})}let qu=null;function hz(e){return qu=qu||fz(e),qu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dz=new Nl(5e3,15e3),pz="__/auth/iframe",mz="emulator/auth/iframe",gz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yz=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vz(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Pv(t,mz):`https://${e.config.authDomain}/${pz}`,r={apiKey:t.apiKey,appName:e.name,v:ro},i=yz.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${cl(r).slice(1)}`}async function wz(e){const t=await hz(e),n=An().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:vz(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gz,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=In(e,"network-request-failed"),a=An().setTimeout(()=>{s(o)},dz.get());function l(){An().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ez={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sz=500,bz=600,Tz="_blank",_z="http://localhost";class mS{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kz(e,t,n,r=Sz,i=bz){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ez),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ct().toLowerCase();n&&(a=dA(u)?Tz:n),hA(u)&&(t=t||_z,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[d,m])=>`${h}${d}=${m},`,"");if(r9(u)&&a!=="_self")return xz(t||"",a),new mS(null);const f=window.open(t||"",a,c);B(f,e,"popup-blocked");try{f.focus()}catch{}return new mS(f)}function xz(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cz="__/auth/handler",Iz="emulator/auth/handler";function gS(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ro,eventId:i};if(t instanceof SA){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",MM(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(t instanceof Ol){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Az(e)}?${cl(a).slice(1)}`}function Az({config:e}){return e.emulator?Pv(e,Iz):`https://${e.authDomain}/${Cz}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="webStorageSupport";class Pz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CA,this._completeRedirectFn=tz,this._overrideRedirectResult=J9}async _openPopup(t,n,r,i){var s;nr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=gS(t,n,r,Gm(),i);return kz(t,o,Lv())}async _openRedirect(t,n,r,i){return await this._originValidation(t),N9(gS(t,n,r,Gm(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await wz(t),r=new rz(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(jd,{type:jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jd];o!==void 0&&n(!!o),pn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lz(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return vA()||Rv()||wh()}}const Nz=Pz;var yS="@firebase/auth",vS="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rz{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oz(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dz(e){dn(new Zt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wA(e)},c=new a9(a,l,u);return V8(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),dn(new Zt("auth-internal",t=>{const n=Eh(t.getProvider("auth").getImmediate());return(r=>new Rz(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(yS,vS,Oz(e)),Ct(yS,vS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lz=5*60,Mz=ok("authIdTokenMaxAge")||Lz;let wS=null;const Fz=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mz)return;const i=n==null?void 0:n.token;wS!==i&&(wS=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fv(e=Lf()){const t=ti(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$8(e,{popupRedirectResolver:Nz,persistence:[V9,I9,CA]}),r=ok("authTokenSyncURL");if(r){const s=Fz(r);T9(n,s,()=>s(n.currentUser)),b9(n,o=>s(o))}const i=ik("auth");return i&&l9(n,`http://${i}`),n}Dz("Browser");const Uz=()=>{const[e,t]=T.useState(""),[n,r]=T.useState(""),i=Wg();let s=Fv();const o=a=>{a.preventDefault(),S9(s,e,n).then(l=>{const u=l.user;i("/Admin/Dashboard"),console.log(u)}).catch(l=>{console.log(l.message),alert(`please enter the correct informations:  ${l.message}   `)})};return g("div",{className:"container my-5",children:g(Ic.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:g("div",{className:"row justify-content-center",children:g("div",{className:"col-md-6",children:k("div",{className:"card shadow",children:[g("div",{className:"card-header text-center",children:g("h2",{children:"DashBoard Login"})}),g("div",{className:"card-body",children:k("form",{onSubmit:o,children:[k("div",{className:"form-group",children:[g("label",{htmlFor:"email",children:"Email"}),g("input",{type:"email",className:"form-control",placeholder:"Enter your program",value:e,onChange:a=>t(a.target.value),required:!0})]}),k("div",{className:"form-group",children:[g("label",{htmlFor:"password",children:"Password"}),g("input",{type:"text",className:"form-control",placeholder:"Enter your password",value:n,onChange:a=>r(a.target.value),required:!0})]}),g(Ic.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.5},className:"form-group text-center",children:g("button",{type:"submit",className:"btn btn-primary btn-lg mt-3",children:"DashBoard Login"})})]})})]})})})})})};function ES(){return k("div",{children:["Sorry  this page does not exist. Click the link below to return to the home page",g(pt,{to:"/",children:"Click to Return"})]})}function $z(){return g("div",{children:"About"})}function Vz(){return g("div",{children:"Contact"})}function Bz(){const[e,t]=T.useState(window.innerWidth<768),[n,r]=T.useState(!1),i=Wg();let s=Fv();return T.useEffect(()=>{const a=document.querySelectorAll(".sidebar .side-menu.top li a");a.forEach(h=>{const d=h.parentElement;h.addEventListener("click",function(){a.forEach(m=>{m.parentElement.classList.remove("active")}),d.classList.add("active")})});const l=document.querySelector(".content nav .bx.bx-menu");document.querySelector(".sidebar"),l.addEventListener("click",function(){t(!e)});const u=document.querySelector(".content nav form .form-input button"),c=document.querySelector(".content nav form .form-input button .bx");document.querySelector(".content nav form"),u.addEventListener("click",function(h){window.innerWidth<576&&(h.preventDefault(),r(!n),n?c.classList.replace("bx-search","bx-x"):c.classList.replace("bx-x","bx-search"))}),window.innerWidth<768?t(!0):window.innerWidth>576&&(c.classList.replace("bx-x","bx-search"),r(!1));const f=()=>{window.innerWidth>576&&(c.classList.replace("bx-x","bx-search"),r(!1)),t(window.innerWidth<768)};return window.addEventListener("resize",f),()=>{a.forEach(h=>h.removeEventListener("click",()=>{})),l.removeEventListener("click",()=>{}),u.removeEventListener("click",()=>{}),window.removeEventListener("resize",f)}},[e,n]),k("section",{className:"sidebar",children:[k(pt,{to:"/Admin/Dashboard",className:"brand",children:[g("i",{className:"bx bxs-smile"}),g("span",{className:"text",children:"AdminHub"})]}),k("ul",{className:"side-menu top",children:[g("li",{className:"active",children:k(pt,{to:"/Admin/Dashboard/Home",children:[g("i",{className:"bx bxs-dashboard"}),g("span",{className:"text",children:"Dashboard"})]})}),g("li",{children:k(pt,{to:"/Admin/Dashboard/Notification",children:[g("i",{className:"bx bxs-shopping-bag-alt"}),g("span",{className:"text",children:"Assignment Notification"})]})}),g("li",{children:k(pt,{to:"/Admin/Dashboard/Analytics",children:[g("i",{className:"bx bxs-doughnut-chart"}),g("span",{className:"text",children:"Analytics"})]})}),g("li",{children:k(pt,{to:"/Admin/Dashboard/Message",children:[g("i",{className:"bx bxs-message-dots"}),g("span",{className:"text",children:"Message"})]})})]}),k("ul",{className:"side-menu",children:[g("li",{children:k("a",{href:"#",children:[g("i",{className:"bx bxs-cog"}),g("span",{className:"text",children:"Settings"})]})}),g("li",{children:k("a",{href:"#",onClick:()=>{_9(s).then(()=>{i("/Admin")}).catch(a=>{alert(`${a}`)})},className:"logout",children:[g("i",{className:"bx bxs-log-out-circle"}),g("span",{className:"text",children:"Logout"})]})})]})]})}function jz(){const[e,t]=T.useState(!1);return T.useEffect(()=>{e?document.body.classList.add("dark"):document.body.classList.remove("dark")},[e]),k("nav",{children:[g("i",{className:"bx bx-menu"}),g("a",{href:"#",className:"nav-link",children:"Categories"}),g("form",{action:"#",children:k("div",{className:"form-input",children:[g("input",{type:"search",placeholder:"Search..."}),g("button",{type:"submit",className:"search-btn",children:g("i",{className:"bx bx-search"})})]})}),g("input",{type:"checkbox",className:"switch-mode",hidden:!0}),g("label",{htmlFor:"switch-mode",onClick:()=>{t(!e)},className:"switch-mode"}),k("a",{href:"#",className:"notification",children:[g("i",{className:"bx bxs-bell"}),g("span",{className:"num",children:"8"})]}),g("a",{href:"#",className:"profile",children:g("img",{src:"img/people.png"})})]})}function zz(){return k("div",{children:[g(Bz,{}),k("section",{className:"content",children:[g(jz,{}),g(qg,{})]})]})}function Hz(){const[e,t]=T.useState([]);return T.useEffect(()=>{pv.get("").then(n=>{console.log(n.data),t(n.data)}).catch(n=>{setTimeout(()=>{alert("Error trying to fetch the assignment Notification")},3e3)})},[]),e==null||e.map((n,r)=>{console.log(n)}),k("div",{className:"todo",children:[k("div",{className:"head",children:[g("h3",{children:"Todos"}),g("i",{className:"bx bx-plus"}),g("i",{className:"bx bx-filter"})]}),g("ul",{className:"todo-list",children:k("li",{className:"completed",children:[g("p",{children:"Todo List"}),g("i",{className:"bx bx-dots-vertical-rounded"})]})})]})}function Wz(){return g("div",{className:"table-data",children:k("div",{className:"order",children:[k("div",{className:"head",children:[g("h3",{children:"Recent Orders"}),g("i",{className:"bx bx-search"}),g("i",{className:"bx bx-filter"})]}),k("table",{children:[g("thead",{children:k("tr",{children:[g("th",{children:"Full Name"}),g("th",{children:"Matriculation"}),g("th",{children:"Level"}),g("th",{children:"Program"}),g("th",{children:"Files"})]})}),k("tbody",{children:[k("tr",{children:[k("td",{children:[g("img",{src:"img/people.png"}),g("p",{children:"John Doe"})]}),g("td",{children:"01-10-2021"}),g("td",{children:g("span",{className:"status completed",children:"Completed"})}),g("td",{children:g("span",{className:"status completed",children:"Completed"})}),g("td",{children:g("span",{className:"status completed",children:"Completed"})})]}),k("tr",{children:[k("td",{children:[g("img",{src:"img/people.png"}),g("p",{children:"John Doe"})]}),g("td",{children:"01-10-2021"}),g("td",{children:g("span",{className:"status pending",children:"Pending"})})]})]})]})]})})}function qz(){const[e,t]=T.useState(window.innerWidth<768),[n,r]=T.useState(!1);return T.useEffect(()=>{const i=document.querySelectorAll(".sidebar .side-menu.top li a");i.forEach(u=>{const c=u.parentElement;u.addEventListener("click",function(){i.forEach(f=>{f.parentElement.classList.remove("active")}),c.classList.add("active")})});const s=document.querySelector(".content nav .bx.bx-menu");document.querySelector(".sidebar"),s.addEventListener("click",function(){t(!e)});const o=document.querySelector(".content nav form .form-input button"),a=document.querySelector(".content nav form .form-input button .bx");document.querySelector(".content nav form"),o.addEventListener("click",function(u){window.innerWidth<576&&(u.preventDefault(),r(!n),n?a.classList.replace("bx-search","bx-x"):a.classList.replace("bx-x","bx-search"))}),window.innerWidth<768?t(!0):window.innerWidth>576&&(a.classList.replace("bx-x","bx-search"),r(!1));const l=()=>{window.innerWidth>576&&(a.classList.replace("bx-x","bx-search"),r(!1)),t(window.innerWidth<768)};return window.addEventListener("resize",l),()=>{i.forEach(u=>u.removeEventListener("click",()=>{})),s.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{}),window.removeEventListener("resize",l)}},[e,n]),k("main",{children:[k("div",{className:"head-title",children:[k("div",{className:"left",children:[g("h1",{children:"Dashboard"}),k("ul",{className:"breadcrumb",children:[g("li",{children:g("a",{href:"#",children:"Dashboard"})}),g("li",{children:g("i",{className:"bx bx-chevron-right"})}),g("li",{children:g("a",{className:"active",href:"#",children:"Home"})})]})]}),k("a",{href:"#",className:"btn-download",children:[g("i",{className:"bx bxs-cloud-download"}),g("span",{className:"text",children:"Download PDF"})]})]}),k("ul",{className:"box-info",children:[k("li",{children:[g("i",{className:"bx bxs-calendar-check"}),k("span",{className:"text",children:[g("h3",{children:"1020"}),g("p",{children:"New Order"})]})]}),k("li",{children:[g("i",{className:"bx bxs-group"}),k("span",{className:"text",children:[g("h3",{children:"2834"}),g("p",{children:"Visitors"})]})]}),k("li",{children:[g("i",{className:"bx bxs-dollar-circle"}),k("span",{className:"text",children:[g("h3",{children:"$2543"}),g("p",{children:"Total Sales"})]})]})]}),g(Wz,{})]})}function SS(){const[e,t]=T.useState(window.innerWidth<768),[n,r]=T.useState(!1);return T.useEffect(()=>{const i=document.querySelectorAll(".sidebar .side-menu.top li a");i.forEach(u=>{const c=u.parentElement;u.addEventListener("click",function(){i.forEach(f=>{f.parentElement.classList.remove("active")}),c.classList.add("active")})});const s=document.querySelector(".content nav .bx.bx-menu");document.querySelector(".sidebar"),s.addEventListener("click",function(){t(!e)});const o=document.querySelector(".content nav form .form-input button"),a=document.querySelector(".content nav form .form-input button .bx");document.querySelector(".content nav form"),o.addEventListener("click",function(u){window.innerWidth<576&&(u.preventDefault(),r(!n),n?a.classList.replace("bx-search","bx-x"):a.classList.replace("bx-x","bx-search"))}),window.innerWidth<768?t(!0):window.innerWidth>576&&(a.classList.replace("bx-x","bx-search"),r(!1));const l=()=>{window.innerWidth>576&&(a.classList.replace("bx-x","bx-search"),r(!1)),t(window.innerWidth<768)};return window.addEventListener("resize",l),()=>{i.forEach(u=>u.removeEventListener("click",()=>{})),s.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{}),window.removeEventListener("resize",l)}},[e,n]),g("div",{children:g(qz,{})})}function Gz({Data:e}){const[t,n]=T.useState(!1);Fv();function r({Data:i,isMobileNavVisible:s}){return s?k("div",{className:"mobile-nav position-fixed top-0 start-0 w-100 h-100 bg-light",children:[g("button",{className:"btn btn-secondary d-block d-md-none position-absolute top-0 end-0 mt-3 me-3",onClick:()=>n(!1),children:"Close"}),g("div",{className:"d-flex flex-column align-items-center justify-content-center h-100",children:g("ul",{className:"navbar-nav d-none d-sm-flex",children:g("li",{onClick:()=>n(!1),className:"nav-item",children:g(pt,{className:"nav-link",to:"",children:"DashBoard"})})})})]}):null}return k("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",style:{height:70},children:[k("div",{className:"container",children:[k(pt,{className:"navbar-brand",to:"/",children:[g(_I,{style:{fontSize:60,color:"#5950F6"}}),g("span",{className:"",style:{color:"#404040"},children:"UNI"}),g("span",{className:"",style:{color:"#5950F6"},children:"TECH"})]}),g("button",{className:"navbar-toggler",type:"button",onClick:()=>n(!t),children:g("span",{className:"navbar-toggler-icon"})}),g("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:g("ul",{className:"navbar-nav d-none d-sm-flex",children:g("li",{className:"nav-item",children:g(pt,{className:"nav-link",to:"",children:"Contact Developer"})})})})]}),g(r,{Data:e,isMobileNavVisible:t})]})}function Kz({Data:e}){return k("div",{children:[g(kI,{}),g(Gz,{}),g(qg,{}),g("br",{}),g("br",{}),g(iA,{})]})}function Yz(){const[e,t]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(""),[l,u]=T.useState("");return k("main",{children:[k("div",{className:"head-title",children:[k("div",{className:"left",children:[g("h1",{children:"Dashboard"}),k("ul",{className:"breadcrumb",children:[g("li",{children:g("a",{href:"#",children:"Dashboard"})}),g("li",{children:g("i",{className:"bx bx-chevron-right"})}),g("li",{children:g(pt,{className:"active",to:"/Admin/Dashboard/Notification",children:"Assignment Notification"})})]})]}),k("a",{href:"#",className:"btn-download",children:[g("i",{className:"bx bxs-cloud-download"}),g("span",{className:"text",children:"Download PDF"})]})]}),g("section",{className:"container",children:g("div",{children:k("form",{className:"form  my-4 ",onSubmit:f=>{if(f.preventDefault(),console.log(e,n,i,o,l),!e||!n||!i||!o||!l)return alert("please enter all the field");pv.post("/",{messageA:e,DepartmentA:n,levelA:o,programmA:i,timeA:l}).then(h=>{alert("it was successfully sent")}).catch(h=>{console.log(h)})},children:[k("div",{children:[g("label",{htmlFor:"name",children:"ASSIGNMENT MESSAGE"}),g("textarea",{type:"text",className:"form-control",onChange:f=>t(f.target.value),placeholder:"enter your message",name:"message"})]}),k("div",{children:[g("label",{className:"program",htmlFor:"mat",children:"DEPARTMENT"}),k("select",{className:"form-control department",name:"department",id:"cars",onChange:f=>r(f.target.value),children:[g("option",{value:"CIVIL",children:"CIVIL ENGINEERING"}),g("option",{value:"CHEMICAL",children:"CHEMICAL ENGINEERING"}),g("option",{value:"ELECTRICAL",children:"ELECTRICAL AND ELECTRONIC ENGINEERING"}),g("option",{value:"MINIRAL",children:"MINIRAL ENGINEERING"}),g("option",{value:"MECHANICAL",children:"MECHANICAL ENGINEERING"})]})]}),k("div",{children:[g("label",{htmlFor:"mat",children:"PROGRAM"}),k("select",{className:"form-control morneven",name:"morneven",id:"cars",onChange:f=>s(f.target.value),children:[g("option",{value:"MORNING",children:"MORNING"}),g("option",{value:"EVENING",children:"EVENING"})]})]}),k("div",{children:[g("label",{htmlFor:"mat",children:"LEVEL"}),k("select",{className:"form-control level",name:"level",id:"level",onChange:f=>a(f.target.value),children:[g("option",{value:"HND2",children:"HND2"}),g("option",{value:"HND1",children:"HND1"}),g("option",{value:"ND2",children:"ND2"}),g("option",{value:"ND1",children:"ND1"})]})]}),k("div",{children:[g("label",{htmlFor:"date",children:"TIME OF SUBMITION"}),g("input",{type:"date",name:"time",className:"form-control ",onChange:f=>u(f.target.value)})]}),g("button",{type:"submit",className:"form-control btn-primary btn btns",children:"Click To Submit"})]})})})]})}function Xz(){return g("div",{children:"Analysis"})}function Qz(){return g("div",{children:k("main",{children:[k("div",{className:"head-title",children:[k("div",{className:"left",children:[g("h1",{children:"Dashboard"}),k("ul",{className:"breadcrumb",children:[g("li",{children:g("a",{href:"#",children:"Dashboard"})}),g("li",{children:g("i",{className:"bx bx-chevron-right"})}),g("li",{children:g(pt,{className:"active",to:"/Admin/Dashboard/Notification",children:"Message"})})]})]}),k("a",{href:"#",className:"btn-download",children:[g("i",{className:"bx bxs-cloud-download"}),g("span",{className:"text",children:"Download PDF"})]})]}),k("ul",{className:"box-info",children:[k("li",{children:[g("i",{className:"bx bxs-calendar-check"}),k("span",{className:"text",children:[g("h3",{children:"1020"}),g("p",{children:"New Order"})]})]}),k("li",{children:[g("i",{className:"bx bxs-group"}),k("span",{className:"text",children:[g("h3",{children:"2834"}),g("p",{children:"Visitors"})]})]}),k("li",{children:[g("i",{className:"bx bxs-dollar-circle"}),k("span",{className:"text",children:[g("h3",{children:"$2543"}),g("p",{children:"Total Sales"})]})]})]}),g("div",{className:"table-data",children:g(Hz,{})})]})})}function Jz(){return T.useState(0),g(u2,{children:k(i2,{children:[k(tt,{path:"/",element:g(M8,{Data:r1}),children:[g(tt,{index:!0,element:g(IE,{})}),g(tt,{path:"Home",element:g(IE,{})}),g(tt,{path:"About",element:g($z,{})}),g(tt,{path:"Contact",element:g(Vz,{})}),g(tt,{path:"*",element:g(ES,{})})]}),k(tt,{path:"/Admin",element:g(Kz,{Data:r1}),children:[g(tt,{index:!0,element:g(Uz,{})}),g(tt,{path:"*",element:g(ES,{})})]}),k(tt,{path:"/Admin/Dashboard",element:g(zz,{}),children:[g(tt,{index:!0,element:g(SS,{})}),g(tt,{path:"Home",element:g(SS,{})}),g(tt,{path:"Notification",element:g(Yz,{})}),g(tt,{path:"Analytics",element:g(Xz,{})}),g(tt,{path:"Message",element:g(Qz,{})})]})]})})}Hd.createRoot(document.getElementById("root")).render(g(Lt.StrictMode,{children:g(Jz,{})}));
