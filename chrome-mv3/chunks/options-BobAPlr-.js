(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();try{}catch(e){console.error("[wxt] Failed to initialize plugins",e)}function i2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M0={exports:{}},xi={},z0={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),l2=Symbol.for("react.portal"),s2=Symbol.for("react.fragment"),a2=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),u2=Symbol.for("react.provider"),d2=Symbol.for("react.context"),f2=Symbol.for("react.forward_ref"),p2=Symbol.for("react.suspense"),h2=Symbol.for("react.memo"),g2=Symbol.for("react.lazy"),Fa=Symbol.iterator;function m2(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var P0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,B0={};function er(e,t,n){this.props=e,this.context=t,this.refs=B0,this.updater=n||P0}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function b0(){}b0.prototype=er.prototype;function Os(e,t,n){this.props=e,this.context=t,this.refs=B0,this.updater=n||P0}var $s=Os.prototype=new b0;$s.constructor=Os;H0($s,er.prototype);$s.isPureReactComponent=!0;var Ga=Array.isArray,F0=Object.prototype.hasOwnProperty,js={current:null},G0={key:!0,ref:!0,__self:!0,__source:!0};function V0(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)F0.call(t,r)&&!G0.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var a=Array(c),u=0;u<c;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)o[r]===void 0&&(o[r]=c[r]);return{$$typeof:Yr,type:e,key:i,ref:l,props:o,_owner:js.current}}function v2(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function y2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Va=/\/+/g;function Wi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y2(""+e.key):t.toString(36)}function _o(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yr:case l2:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Wi(l,0):r,Ga(o)?(n="",e!=null&&(n=e.replace(Va,"$&/")+"/"),_o(o,t,n,"",function(u){return u})):o!=null&&(Ms(o)&&(o=v2(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Va,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ga(e))for(var c=0;c<e.length;c++){i=e[c];var a=r+Wi(i,c);l+=_o(i,t,n,a,o)}else if(a=m2(e),typeof a=="function")for(e=a.call(e),c=0;!(i=e.next()).done;)i=i.value,a=r+Wi(i,c++),l+=_o(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,n){if(e==null)return e;var r=[],o=0;return _o(e,r,"","",function(i){return t.call(n,i,o++)}),r}function x2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Ro={transition:null},w2={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:js};function U0(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=er;z.Fragment=s2;z.Profiler=c2;z.PureComponent=Os;z.StrictMode=a2;z.Suspense=p2;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w2;z.act=U0;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=H0({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=js.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)F0.call(t,a)&&!G0.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){c=Array(a);for(var u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:Yr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:d2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:u2,_context:e},e.Consumer=e};z.createElement=V0;z.createFactory=function(e){var t=V0.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:f2,render:e}};z.isValidElement=Ms;z.lazy=function(e){return{$$typeof:g2,_payload:{_status:-1,_result:e},_init:x2}};z.memo=function(e,t){return{$$typeof:h2,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};z.unstable_act=U0;z.useCallback=function(e,t){return Ae.current.useCallback(e,t)};z.useContext=function(e){return Ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ae.current.useEffect(e,t)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ae.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};z.useRef=function(e){return Ae.current.useRef(e)};z.useState=function(e){return Ae.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.3.1";z0.exports=z;var S=z0.exports;const Xe=i2(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2=S,E2=Symbol.for("react.element"),T2=Symbol.for("react.fragment"),A2=Object.prototype.hasOwnProperty,N2=S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k2={key:!0,ref:!0,__self:!0,__source:!0};function W0(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)A2.call(t,r)&&!k2.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:E2,type:e,key:i,ref:l,props:o,_owner:N2.current}}xi.Fragment=T2;xi.jsx=W0;xi.jsxs=W0;M0.exports=xi;var s=M0.exports,fe=function(){return fe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fe.apply(this,arguments)};function bn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var W="-ms-",xr="-moz-",F="-webkit-",q0="comm",wi="rule",zs="decl",_2="@import",K0="@keyframes",R2="@layer",Q0=Math.abs,Ps=String.fromCharCode,Ll=Object.assign;function C2(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Y0(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function Co(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function Fn(e,t,n){return e.slice(t,n)}function st(e){return e.length}function Z0(e){return e.length}function hr(e,t){return t.push(e),e}function I2(e,t){return e.map(t).join("")}function Ua(e,t){return e.filter(function(n){return!pt(n,t)})}var Si=1,Gn=1,X0=0,Ve=0,oe=0,tr="";function Ei(e,t,n,r,o,i,l,c){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Si,column:Gn,length:l,return:"",siblings:c}}function Rt(e,t){return Ll(Ei("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xn(e){for(;e.root;)e=Rt(e.root,{children:[e]});hr(e,e.siblings)}function L2(){return oe}function D2(){return oe=Ve>0?ue(tr,--Ve):0,Gn--,oe===10&&(Gn=1,Si--),oe}function Je(){return oe=Ve<X0?ue(tr,Ve++):0,Gn++,oe===10&&(Gn=1,Si++),oe}function sn(){return ue(tr,Ve)}function Io(){return Ve}function Ti(e,t){return Fn(tr,e,t)}function Dl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O2(e){return Si=Gn=1,X0=st(tr=e),Ve=0,[]}function $2(e){return tr="",e}function qi(e){return Y0(Ti(Ve-1,Ol(e===91?e+2:e===40?e+1:e)))}function j2(e){for(;(oe=sn())&&oe<33;)Je();return Dl(e)>2||Dl(oe)>3?"":" "}function M2(e,t){for(;--t&&Je()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Ti(e,Io()+(t<6&&sn()==32&&Je()==32))}function Ol(e){for(;Je();)switch(oe){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Ol(oe);break;case 40:e===41&&Ol(e);break;case 92:Je();break}return Ve}function z2(e,t){for(;Je()&&e+oe!==57;)if(e+oe===84&&sn()===47)break;return"/*"+Ti(t,Ve-1)+"*"+Ps(e===47?e:Je())}function P2(e){for(;!Dl(sn());)Je();return Ti(e,Ve)}function H2(e){return $2(Lo("",null,null,null,[""],e=O2(e),0,[0],e))}function Lo(e,t,n,r,o,i,l,c,a){for(var u=0,f=0,v=l,h=0,x=0,w=0,E=1,I=1,g=1,d=0,m="",y=o,A=i,N=r,T=m;I;)switch(w=d,d=Je()){case 40:if(w!=108&&ue(T,v-1)==58){Co(T+=j(qi(d),"&","&\f"),"&\f",Q0(u?c[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:T+=qi(d);break;case 9:case 10:case 13:case 32:T+=j2(w);break;case 92:T+=M2(Io()-1,7);continue;case 47:switch(sn()){case 42:case 47:hr(B2(z2(Je(),Io()),t,n,a),a);break;default:T+="/"}break;case 123*E:c[u++]=st(T)*g;case 125*E:case 59:case 0:switch(d){case 0:case 125:I=0;case 59+f:g==-1&&(T=j(T,/\f/g,"")),x>0&&st(T)-v&&hr(x>32?qa(T+";",r,n,v-1,a):qa(j(T," ","")+";",r,n,v-2,a),a);break;case 59:T+=";";default:if(hr(N=Wa(T,t,n,u,f,o,c,m,y=[],A=[],v,i),i),d===123)if(f===0)Lo(T,t,N,N,y,i,v,c,A);else switch(h===99&&ue(T,3)===110?100:h){case 100:case 108:case 109:case 115:Lo(e,N,N,r&&hr(Wa(e,N,N,0,0,o,c,m,o,y=[],v,A),A),o,A,v,c,r?y:A);break;default:Lo(T,N,N,N,[""],A,0,c,A)}}u=f=x=0,E=g=1,m=T="",v=l;break;case 58:v=1+st(T),x=w;default:if(E<1){if(d==123)--E;else if(d==125&&E++==0&&D2()==125)continue}switch(T+=Ps(d),d*E){case 38:g=f>0?1:(T+="\f",-1);break;case 44:c[u++]=(st(T)-1)*g,g=1;break;case 64:sn()===45&&(T+=qi(Je())),h=sn(),f=v=st(m=T+=P2(Io())),d++;break;case 45:w===45&&st(T)==2&&(E=0)}}return i}function Wa(e,t,n,r,o,i,l,c,a,u,f,v){for(var h=o-1,x=o===0?i:[""],w=Z0(x),E=0,I=0,g=0;E<r;++E)for(var d=0,m=Fn(e,h+1,h=Q0(I=l[E])),y=e;d<w;++d)(y=Y0(I>0?x[d]+" "+m:j(m,/&\f/g,x[d])))&&(a[g++]=y);return Ei(e,t,n,o===0?wi:c,a,u,f,v)}function B2(e,t,n,r){return Ei(e,t,n,q0,Ps(L2()),Fn(e,2,-2),0,r)}function qa(e,t,n,r,o){return Ei(e,t,n,zs,Fn(e,0,r),Fn(e,r+1,-1),r,o)}function J0(e,t,n){switch(C2(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+xr+e+W+e+e;case 5936:switch(ue(e,t+11)){case 114:return F+e+W+j(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+W+j(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+W+j(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+W+e+e;case 6165:return F+e+W+"flex-"+e+e;case 5187:return F+e+j(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return F+e+W+"flex-item-"+j(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":W+"grid-row-"+j(e,/flex-|-self/g,""))+e;case 4675:return F+e+W+"flex-line-pack"+j(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+W+j(e,"shrink","negative")+e;case 5292:return F+e+W+j(e,"basis","preferred-size")+e;case 6060:return F+"box-"+j(e,"-grow","")+F+e+W+j(e,"grow","positive")+e;case 4554:return F+j(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return j(j(j(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!pt(e,/flex-|baseline/))return W+"grid-column-align"+Fn(e,t)+e;break;case 2592:case 3360:return W+j(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,pt(r.props,/grid-\w+-end/)})?~Co(e+(n=n[t].value),"span",0)?e:W+j(e,"-start","")+e+W+"grid-row-span:"+(~Co(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":W+j(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:W+j(j(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+xr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Co(e,"stretch",0)?J0(j(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,c,a,u){return W+o+":"+i+u+(l?W+o+"-span:"+(c?a:+a-+i)+u:"")+e});case 4949:if(ue(e,t+6)===121)return j(e,":",":"+F)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ue(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+W+"$2box$3")+e;case 100:return j(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,"scroll-","scroll-snap-")+e}return e}function Vo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function b2(e,t,n,r){switch(e.type){case R2:if(e.children.length)break;case _2:case zs:return e.return=e.return||e.value;case q0:return"";case K0:return e.return=e.value+"{"+Vo(e.children,r)+"}";case wi:if(!st(e.value=e.props.join(",")))return""}return st(n=Vo(e.children,r))?e.return=e.value+"{"+n+"}":""}function F2(e){var t=Z0(e);return function(n,r,o,i){for(var l="",c=0;c<t;c++)l+=e[c](n,r,o,i)||"";return l}}function G2(e){return function(t){t.root||(t=t.return)&&e(t)}}function V2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zs:e.return=J0(e.value,e.length,n);return;case K0:return Vo([Rt(e,{value:j(e.value,"@","@"+F)})],r);case wi:if(e.length)return I2(n=e.props,function(o){switch(pt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(Rt(e,{props:[j(o,/:(read-\w+)/,":"+xr+"$1")]})),xn(Rt(e,{props:[o]})),Ll(e,{props:Ua(n,r)});break;case"::placeholder":xn(Rt(e,{props:[j(o,/:(plac\w+)/,":"+F+"input-$1")]})),xn(Rt(e,{props:[j(o,/:(plac\w+)/,":"+xr+"$1")]})),xn(Rt(e,{props:[j(o,/:(plac\w+)/,W+"input-$1")]})),xn(Rt(e,{props:[o]})),Ll(e,{props:Ua(n,r)});break}return""})}}var U2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},Vn=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",eu="active",tu="data-styled-version",Ai="6.1.13",Hs=`/*!sc*/
`,Uo=typeof window<"u"&&"HTMLElement"in window,W2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),q2={},Ni=Object.freeze([]),Un=Object.freeze({});function nu(e,t,n){return n===void 0&&(n=Un),e.theme!==n.theme&&e.theme||t||n.theme}var ru=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),K2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q2=/(^-|-$)/g;function Ka(e){return e.replace(K2,"-").replace(Q2,"")}var Y2=/(a)(d)/gi,lo=52,Qa=function(e){return String.fromCharCode(e+(e>25?39:97))};function $l(e){var t,n="";for(t=Math.abs(e);t>lo;t=t/lo|0)n=Qa(t%lo)+n;return(Qa(t%lo)+n).replace(Y2,"$1-$2")}var Ki,ou=5381,Sn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},iu=function(e){return Sn(ou,e)};function Bs(e){return $l(iu(e)>>>0)}function Z2(e){return e.displayName||e.name||"Component"}function Qi(e){return typeof e=="string"&&!0}var lu=typeof Symbol=="function"&&Symbol.for,su=lu?Symbol.for("react.memo"):60115,X2=lu?Symbol.for("react.forward_ref"):60112,J2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ef={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},au={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tf=((Ki={})[X2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ki[su]=au,Ki);function Ya(e){return("type"in(t=e)&&t.type.$$typeof)===su?au:"$$typeof"in e?tf[e.$$typeof]:J2;var t}var nf=Object.defineProperty,rf=Object.getOwnPropertyNames,Za=Object.getOwnPropertySymbols,of=Object.getOwnPropertyDescriptor,lf=Object.getPrototypeOf,Xa=Object.prototype;function cu(e,t,n){if(typeof t!="string"){if(Xa){var r=lf(t);r&&r!==Xa&&cu(e,r,n)}var o=rf(t);Za&&(o=o.concat(Za(t)));for(var i=Ya(e),l=Ya(t),c=0;c<o.length;++c){var a=o[c];if(!(a in ef||n&&n[a]||l&&a in l||i&&a in i)){var u=of(t,a);try{nf(e,a,u)}catch{}}}}return e}function un(e){return typeof e=="function"}function bs(e){return typeof e=="object"&&"styledComponentId"in e}function en(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Cr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jl(e,t,n){if(n===void 0&&(n=!1),!n&&!Cr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=jl(e[r],t[r]);else if(Cr(t))for(var r in t)e[r]=jl(e[r],t[r]);return e}function Fs(e,t){Object.defineProperty(e,"toString",{value:t})}function dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sf=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw dn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(c,n[l])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Hs);return n},e}(),Do=new Map,qo=new Map,Oo=1,so=function(e){if(Do.has(e))return Do.get(e);for(;qo.has(Oo);)Oo++;var t=Oo++;return Do.set(e,t),qo.set(t,e),t},af=function(e,t){Oo=t+1,Do.set(e,t),qo.set(t,e)},cf="style[".concat(Vn,"][").concat(tu,'="').concat(Ai,'"]'),uf=new RegExp("^".concat(Vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),df=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},ff=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hs),o=[],i=0,l=r.length;i<l;i++){var c=r[i].trim();if(c){var a=c.match(uf);if(a){var u=0|parseInt(a[1],10),f=a[2];u!==0&&(af(f,u),df(e,f,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}}},Ja=function(e){for(var t=document.querySelectorAll(cf),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Vn)!==eu&&(ff(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function pf(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uu=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){var a=Array.from(c.querySelectorAll("style[".concat(Vn,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vn,eu),r.setAttribute(tu,Ai);var l=pf();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},hf=function(){function e(t){this.element=uu(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),gf=function(){function e(t){this.element=uu(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mf=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ec=Uo,vf={isServer:!Uo,useCSSOMInjection:!W2},Ko=function(){function e(t,n,r){t===void 0&&(t=Un),n===void 0&&(n={});var o=this;this.options=fe(fe({},vf),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Uo&&ec&&(ec=!1,Ja(this)),Fs(this,function(){return function(i){for(var l=i.getTag(),c=l.length,a="",u=function(v){var h=function(g){return qo.get(g)}(v);if(h===void 0)return"continue";var x=i.names.get(h),w=l.getGroup(v);if(x===void 0||!x.size||w.length===0)return"continue";var E="".concat(Vn,".g").concat(v,'[id="').concat(h,'"]'),I="";x!==void 0&&x.forEach(function(g){g.length>0&&(I+="".concat(g,","))}),a+="".concat(w).concat(E,'{content:"').concat(I,'"}').concat(Hs)},f=0;f<c;f++)u(f);return a}(o)})}return e.registerId=function(t){return so(t)},e.prototype.rehydrate=function(){!this.server&&Uo&&Ja(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fe(fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new mf(o):r?new hf(o):new gf(o)}(this.options),new sf(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(so(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(so(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(so(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yf=/&/g,xf=/^\s*\/\/.*$/gm;function du(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=du(n.children,t)),n})}function wf(e){var t,n,r,o=Un,i=o.options,l=i===void 0?Un:i,c=o.plugins,a=c===void 0?Ni:c,u=function(h,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},f=a.slice();f.push(function(h){h.type===wi&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(yf,n).replace(r,u))}),l.prefix&&f.push(V2),f.push(b2);var v=function(h,x,w,E){x===void 0&&(x=""),w===void 0&&(w=""),E===void 0&&(E="&"),t=E,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var I=h.replace(xf,""),g=H2(w||x?"".concat(w," ").concat(x," { ").concat(I," }"):I);l.namespace&&(g=du(g,l.namespace));var d=[];return Vo(g,F2(f.concat(G2(function(m){return d.push(m)})))),d};return v.hash=a.length?a.reduce(function(h,x){return x.name||dn(15),Sn(h,x.name)},ou).toString():"",v}var Sf=new Ko,Ml=wf(),fu=Xe.createContext({shouldForwardProp:void 0,styleSheet:Sf,stylis:Ml});fu.Consumer;Xe.createContext(void 0);function zl(){return S.useContext(fu)}var pu=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ml);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fs(this,function(){throw dn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ml),this.name+t.hash},e}(),Ef=function(e){return e>="A"&&e<="Z"};function tc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ef(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var hu=function(e){return e==null||e===!1||e===""},gu=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!hu(i)&&(Array.isArray(i)&&i.isCss||un(i)?r.push("".concat(tc(o),":"),i,";"):Cr(i)?r.push.apply(r,bn(bn(["".concat(o," {")],gu(i),!1),["}"],!1)):r.push("".concat(tc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in U2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function jt(e,t,n,r){if(hu(e))return[];if(bs(e))return[".".concat(e.styledComponentId)];if(un(e)){if(!un(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return jt(o,t,n,r)}var i;return e instanceof pu?n?(e.inject(n,r),[e.getName(r)]):[e]:Cr(e)?gu(e):Array.isArray(e)?Array.prototype.concat.apply(Ni,e.map(function(l){return jt(l,t,n,r)})):[e.toString()]}function mu(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(un(n)&&!bs(n))return!1}return!0}var Tf=iu(Ai),Af=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mu(t),this.componentId=n,this.baseHash=Sn(Tf,n),this.baseStyle=r,Ko.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=en(o,this.staticRulesId);else{var i=Wo(jt(this.rules,t,n,r)),l=$l(Sn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var c=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,c)}o=en(o,l),this.staticRulesId=l}else{for(var a=Sn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var v=this.rules[f];if(typeof v=="string")u+=v;else if(v){var h=Wo(jt(v,t,n,r));a=Sn(a,h+f),u+=h}}if(u){var x=$l(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=en(o,x)}}return o},e}(),Ir=Xe.createContext(void 0);Ir.Consumer;function Nf(e){var t=Xe.useContext(Ir),n=S.useMemo(function(){return function(r,o){if(!r)throw dn(14);if(un(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw dn(8);return o?fe(fe({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Xe.createElement(Ir.Provider,{value:n},e.children):null}var Yi={};function kf(e,t,n){var r=bs(e),o=e,i=!Qi(e),l=t.attrs,c=l===void 0?Ni:l,a=t.componentId,u=a===void 0?function(y,A){var N=typeof y!="string"?"sc":Ka(y);Yi[N]=(Yi[N]||0)+1;var T="".concat(N,"-").concat(Bs(Ai+N+Yi[N]));return A?"".concat(A,"-").concat(T):T}(t.displayName,t.parentComponentId):a,f=t.displayName,v=f===void 0?function(y){return Qi(y)?"styled.".concat(y):"Styled(".concat(Z2(y),")")}(e):f,h=t.displayName&&t.componentId?"".concat(Ka(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(c).filter(Boolean):c,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var E=o.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;w=function(y,A){return E(y,A)&&I(y,A)}}else w=E}var g=new Af(n,h,r?o.componentStyle:void 0);function d(y,A){return function(N,T,C){var G=N.attrs,$=N.componentStyle,ve=N.defaultProps,rt=N.foldedComponentIds,ot=N.styledComponentId,or=N.target,ro=Xe.useContext(Ir),Y=zl(),ne=N.shouldForwardProp||Y.shouldForwardProp,_=nu(T,ro,ve)||Un,L=function(Nt,De,ft){for(var ir,Zt=fe(fe({},De),{className:void 0,theme:ft}),Ui=0;Ui<Nt.length;Ui+=1){var oo=un(ir=Nt[Ui])?ir(Zt):ir;for(var kt in oo)Zt[kt]=kt==="className"?en(Zt[kt],oo[kt]):kt==="style"?fe(fe({},Zt[kt]),oo[kt]):oo[kt]}return De.className&&(Zt.className=en(Zt.className,De.className)),Zt}(G,T,_),O=L.as||or,B={};for(var b in L)L[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&L.theme===_||(b==="forwardedAs"?B.as=L.forwardedAs:ne&&!ne(b,O)||(B[b]=L[b]));var dt=function(Nt,De){var ft=zl(),ir=Nt.generateAndInjectStyles(De,ft.styleSheet,ft.stylis);return ir}($,L),Le=en(rt,ot);return dt&&(Le+=" "+dt),L.className&&(Le+=" "+L.className),B[Qi(O)&&!ru.has(O)?"class":"className"]=Le,B.ref=C,S.createElement(O,B)}(m,y,A)}d.displayName=v;var m=Xe.forwardRef(d);return m.attrs=x,m.componentStyle=g,m.displayName=v,m.shouldForwardProp=w,m.foldedComponentIds=r?en(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=h,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(A){for(var N=[],T=1;T<arguments.length;T++)N[T-1]=arguments[T];for(var C=0,G=N;C<G.length;C++)jl(A,G[C],!0);return A}({},o.defaultProps,y):y}}),Fs(m,function(){return".".concat(m.styledComponentId)}),i&&cu(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function nc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var rc=function(e){return Object.assign(e,{isCss:!0})};function M(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(un(e)||Cr(e))return rc(jt(nc(Ni,bn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?jt(r):rc(jt(nc(r,t)))}function Pl(e,t,n){if(n===void 0&&(n=Un),!t)throw dn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,M.apply(void 0,bn([o],i,!1)))};return r.attrs=function(o){return Pl(e,t,fe(fe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Pl(e,t,fe(fe({},n),o))},r}var vu=function(e){return Pl(kf,e)},p=vu;ru.forEach(function(e){p[e]=vu(e)});var _f=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=mu(t),Ko.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Wo(jt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ko.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Rf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=M.apply(void 0,bn([e],t,!1)),o="sc-global-".concat(Bs(JSON.stringify(r))),i=new _f(r,o),l=function(a){var u=zl(),f=Xe.useContext(Ir),v=Xe.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&c(v,a,u.styleSheet,f,u.stylis),Xe.useLayoutEffect(function(){if(!u.styleSheet.server)return c(v,a,u.styleSheet,f,u.stylis),function(){return i.removeStyles(v,u.styleSheet)}},[v,a,u.styleSheet,f,u.stylis]),null};function c(a,u,f,v,h){if(i.isStatic)i.renderStyles(a,q2,f,h);else{var x=fe(fe({},u),{theme:nu(u,v,l.defaultProps)});i.renderStyles(a,x,f,h)}}return Xe.memo(l)}function ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wo(M.apply(void 0,bn([e],t,!1))),o=Bs(r);return new pu(o,r)}const le={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",ORANGE_TRANSPARENT:"#ff853340",BEIGE:"#c8aaa0",LIME:"#00ed28",LIGHT_PURPLE:"#dcbfff"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%);"}},Cf=Rf`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  
  body,
  input,
  select,
  textarea,
  button {
    font-family: 'Pretendard';
  }
  
  a,
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
  }
  
  button {
    border: 0;
    
    cursor: pointer;
  }
  
  button:disabled {
    cursor: not-allowed;
  }
  
  ul, ol, li {
    list-style: none;
  }

  fieldset {
    border: 0;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  body:has([role="dialog"]) {
    overflow: hidden;
  }

  * {
    scrollbar-width: 15px;
    scrollbar-color: ${le.color.LIGHTEST_BROWN} ${le.color.SLIGHT_DARK_BROWN};
  }
`;var $0,j0;const te=((j0=($0=globalThis.browser)==null?void 0:$0.runtime)==null?void 0:j0.id)==null?globalThis.chrome:globalThis.browser,If=p.nav`
  display: inline-flex;

  height: 36px;
`,Lf=p.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,Df=p.li`
  display: flex;
  flex-direction: column;
`,Of=p.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme:e})=>e.color.GOLD};
  background: none;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: ${({$isSelected:e})=>e?800:600};
  color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme:e})=>e.color.LEMON};
  }
`,$f=p.span`
  display: inline-block;

  width: ${({$isSelected:e})=>e?"100%":"0"};
  height: 2px;

  background-color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:e})=>e.color.LEMON};
  }
`,jf=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],Mf=e=>{const{selectedCategory:t,onChange:n}=e;return s.jsx(If,{children:s.jsx(Lf,{children:jf.map(({displayName:r,category:o})=>s.jsxs(Df,{children:[s.jsx(Of,{$isSelected:o===t,onClick:()=>{n(o)},children:r}),s.jsx($f,{$isSelected:o===t})]},r))})})},zf=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,Pf=p.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(5px);
  animation: fadeIn 0.2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Hf=p.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px ${({theme:e})=>e.color.GOLD};
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,Bf=p.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme:e})=>e.color.DARK_BROWN};

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,bf=p.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme:e})=>e.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ff=p.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme:e})=>e.color.GOLD};
  }
`,Gf=p.div`
  padding: 16px;

  background-color: ${({theme:e})=>e.color.BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,Vf=p.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,Uf=e=>{const{onEscKeyPress:t}=e,n=r=>{r.key==="Escape"&&t()};S.useEffect(()=>(window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}),[t])},yu=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...e},S.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),Wf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),_i=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),qf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),Kf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),Qf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),Yf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),Zr=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),Ri=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),Zf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),Xf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),Jf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),ep=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),Gs=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),tp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...e},S.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),xu=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),np=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},S.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),rp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},S.createElement("g",{fill:"currentColor"},S.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),S.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),op=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...e},S.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),S.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),wu=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),ip=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),lp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),sp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),ap=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"}));var Su={exports:{}},Pe={},Eu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var O=_.length;_.push(L);e:for(;0<O;){var B=O-1>>>1,b=_[B];if(0<o(b,L))_[B]=L,_[O]=b,O=B;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],O=_.pop();if(O!==L){_[0]=O;e:for(var B=0,b=_.length,dt=b>>>1;B<dt;){var Le=2*(B+1)-1,Nt=_[Le],De=Le+1,ft=_[De];if(0>o(Nt,O))De<b&&0>o(ft,Nt)?(_[B]=ft,_[De]=O,B=De):(_[B]=Nt,_[Le]=O,B=Le);else if(De<b&&0>o(ft,O))_[B]=ft,_[De]=O,B=De;else break e}}return L}function o(_,L){var O=_.sortIndex-L.sortIndex;return O!==0?O:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var a=[],u=[],f=1,v=null,h=3,x=!1,w=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=_)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function y(_){if(E=!1,m(_),!w)if(n(a)!==null)w=!0,Y(A);else{var L=n(u);L!==null&&ne(y,L.startTime-_)}}function A(_,L){w=!1,E&&(E=!1,g(C),C=-1),x=!0;var O=h;try{for(m(L),v=n(a);v!==null&&(!(v.expirationTime>L)||_&&!ve());){var B=v.callback;if(typeof B=="function"){v.callback=null,h=v.priorityLevel;var b=B(v.expirationTime<=L);L=e.unstable_now(),typeof b=="function"?v.callback=b:v===n(a)&&r(a),m(L)}else r(a);v=n(a)}if(v!==null)var dt=!0;else{var Le=n(u);Le!==null&&ne(y,Le.startTime-L),dt=!1}return dt}finally{v=null,h=O,x=!1}}var N=!1,T=null,C=-1,G=5,$=-1;function ve(){return!(e.unstable_now()-$<G)}function rt(){if(T!==null){var _=e.unstable_now();$=_;var L=!0;try{L=T(!0,_)}finally{L?ot():(N=!1,T=null)}}else N=!1}var ot;if(typeof d=="function")ot=function(){d(rt)};else if(typeof MessageChannel<"u"){var or=new MessageChannel,ro=or.port2;or.port1.onmessage=rt,ot=function(){ro.postMessage(null)}}else ot=function(){I(rt,0)};function Y(_){T=_,N||(N=!0,ot())}function ne(_,L){C=I(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Y(A))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var O=h;h=L;try{return _()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=h;h=_;try{return L()}finally{h=O}},e.unstable_scheduleCallback=function(_,L,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,_){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=O+b,_={id:f++,callback:L,priorityLevel:_,startTime:O,expirationTime:b,sortIndex:-1},O>B?(_.sortIndex=O,t(u,_),n(a)===null&&_===n(u)&&(E?(g(C),C=-1):E=!0,ne(y,O-B))):(_.sortIndex=b,t(a,_),w||x||(w=!0,Y(A))),_},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(_){var L=h;return function(){var O=h;h=L;try{return _.apply(this,arguments)}finally{h=O}}}})(Tu);Eu.exports=Tu;var cp=Eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=S,ze=cp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Au=new Set,Lr={};function vn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},ic={};function fp(e){return Hl.call(ic,e)?!0:Hl.call(oc,e)?!1:dp.test(e)?ic[e]=!0:(oc[e]=!0,!1)}function pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hp(e,t,n,r){if(t===null||typeof t>"u"||pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Us);me[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Us);me[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Us);me[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hp(t,n,o,r)&&(n=null),r||o===null?fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),En=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),qs=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),Nu=Symbol.for("react.provider"),ku=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Qs=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),lc=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Zi;function gr(e){if(Zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||""}return`
`+Zi+e}var Xi=!1;function Ji(e,t){if(!e||Xi)return"";Xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,c=i.length-1;1<=l&&0<=c&&o[l]!==i[c];)c--;for(;1<=l&&0<=c;l--,c--)if(o[l]!==i[c]){if(l!==1||c!==1)do if(l--,c--,0>c||o[l]!==i[c]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=c);break}}}finally{Xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function gp(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case En:return"Portal";case Bl:return"Profiler";case qs:return"StrictMode";case bl:return"Suspense";case Fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ku:return(e.displayName||"Context")+".Consumer";case Nu:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qs:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function mp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=Ru(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=vp(e))}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ru(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Iu(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Ul(e,t){Iu(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(mr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Lu(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Du(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,Ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function $u(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$u(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Mn=null,zn=null;function dc(e){if(e=eo(e)){if(typeof Xl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Oi(t),Xl(e.stateNode,e.type,t))}}function Mu(e){Mn?zn?zn.push(e):zn=[e]:Mn=e}function zu(){if(Mn){var e=Mn,t=zn;if(zn=Mn=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function Pu(e,t){return e(t)}function Hu(){}var el=!1;function Bu(e,t,n){if(el)return e(t,n);el=!0;try{return Pu(e,t,n)}finally{el=!1,(Mn!==null||zn!==null)&&(Hu(),zu())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=Oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Jl=!1;if(xt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Jl=!1}function wp(e,t,n,r,o,i,l,c,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Sr=!1,Yo=null,Zo=!1,es=null,Sp={onError:function(e){Sr=!0,Yo=e}};function Ep(e,t,n,r,o,i,l,c,a){Sr=!1,Yo=null,wp.apply(Sp,arguments)}function Tp(e,t,n,r,o,i,l,c,a){if(Ep.apply(this,arguments),Sr){if(Sr){var u=Yo;Sr=!1,Yo=null}else throw Error(k(198));Zo||(Zo=!0,es=u)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(yn(e)!==e)throw Error(k(188))}function Ap(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fc(o),e;if(i===r)return fc(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Fu(e){return e=Ap(e),e!==null?Gu(e):null}function Gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gu(e);if(t!==null)return t;e=e.sibling}return null}var Vu=ze.unstable_scheduleCallback,pc=ze.unstable_cancelCallback,Np=ze.unstable_shouldYield,kp=ze.unstable_requestPaint,re=ze.unstable_now,_p=ze.unstable_getCurrentPriorityLevel,Zs=ze.unstable_ImmediatePriority,Uu=ze.unstable_UserBlockingPriority,Xo=ze.unstable_NormalPriority,Rp=ze.unstable_LowPriority,Wu=ze.unstable_IdlePriority,Ci=null,ct=null;function Cp(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Dp,Ip=Math.log,Lp=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(Ip(e)/Lp|0)|0}var fo=64,po=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~o;c!==0?r=vr(c):(i&=l,i!==0&&(r=vr(i)))}else l=n&~o,l!==0?r=vr(l):i!==0&&(r=vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function Op(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-et(i),c=1<<l,a=o[l];a===-1?(!(c&n)||c&r)&&(o[l]=Op(c,t)):a<=t&&(e.expiredLanes|=c),i&=~c}}function ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qu(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qu,Js,Yu,Zu,Xu,ns=!1,ho=[],Mt=null,zt=null,Pt=null,$r=new Map,jr=new Map,Lt=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function ar(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=eo(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zp(e,t,n,r,o){switch(t){case"focusin":return Mt=ar(Mt,e,t,n,r,o),!0;case"dragenter":return zt=ar(zt,e,t,n,r,o),!0;case"mouseover":return Pt=ar(Pt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return $r.set(i,ar($r.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,jr.set(i,ar(jr.get(i)||null,e,t,n,r,o)),!0}return!1}function Ju(e){var t=tn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,Xu(e.priority,function(){Yu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=eo(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function gc(e,t,n){$o(e)&&n.delete(t)}function Pp(){ns=!1,Mt!==null&&$o(Mt)&&(Mt=null),zt!==null&&$o(zt)&&(zt=null),Pt!==null&&$o(Pt)&&(Pt=null),$r.forEach(gc),jr.forEach(gc)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Pp)))}function Mr(e){function t(o){return cr(o,e)}if(0<ho.length){cr(ho[0],e);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&cr(Mt,e),zt!==null&&cr(zt,e),Pt!==null&&cr(Pt,e),$r.forEach(t),jr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Ju(n),n.blockedOn===null&&Lt.shift()}var Pn=At.ReactCurrentBatchConfig,ei=!0;function Hp(e,t,n,r){var o=V,i=Pn.transition;Pn.transition=null;try{V=1,ea(e,t,n,r)}finally{V=o,Pn.transition=i}}function Bp(e,t,n,r){var o=V,i=Pn.transition;Pn.transition=null;try{V=4,ea(e,t,n,r)}finally{V=o,Pn.transition=i}}function ea(e,t,n,r){if(ei){var o=rs(e,t,n,r);if(o===null)dl(e,t,r,ti,n),hc(e,r);else if(zp(o,e,t,n,r))r.stopPropagation();else if(hc(e,r),t&4&&-1<Mp.indexOf(e)){for(;o!==null;){var i=eo(o);if(i!==null&&Qu(i),i=rs(e,t,n,r),i===null&&dl(e,t,r,ti,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var ti=null;function rs(e,t,n,r){if(ti=null,e=Ys(r),e=tn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_p()){case Zs:return 1;case Uu:return 4;case Xo:case Rp:return 16;case Wu:return 536870912;default:return 16}default:return 16}}var Ot=null,ta=null,jo=null;function td(){if(jo)return jo;var e,t=ta,n=t.length,r,o="value"in Ot?Ot.value:Ot.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return jo=o.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function mc(){return!1}function He(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:mc,this.isPropagationStopped=mc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=He(nr),Jr=J({},nr,{view:0,detail:0}),bp=He(Jr),nl,rl,ur,Ii=J({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(nl=e.screenX-ur.screenX,rl=e.screenY-ur.screenY):rl=nl=0,ur=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),vc=He(Ii),Fp=J({},Ii,{dataTransfer:0}),Gp=He(Fp),Vp=J({},Jr,{relatedTarget:0}),ol=He(Vp),Up=J({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=He(Up),qp=J({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=He(qp),Qp=J({},nr,{data:0}),yc=He(Qp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xp[e])?!!t[e]:!1}function ra(){return Jp}var e3=J({},Jr,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t3=He(e3),n3=J({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=He(n3),r3=J({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),o3=He(r3),i3=J({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),l3=He(i3),s3=J({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a3=He(s3),c3=[9,13,27,32],oa=xt&&"CompositionEvent"in window,Er=null;xt&&"documentMode"in document&&(Er=document.documentMode);var u3=xt&&"TextEvent"in window&&!Er,nd=xt&&(!oa||Er&&8<Er&&11>=Er),wc=" ",Sc=!1;function rd(e,t){switch(e){case"keyup":return c3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function d3(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(Sc=!0,wc);case"textInput":return e=t.data,e===wc&&Sc?null:e;default:return null}}function f3(e,t){if(An)return e==="compositionend"||!oa&&rd(e,t)?(e=td(),jo=ta=Ot=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nd&&t.locale!=="ko"?null:t.data;default:return null}}var p3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p3[e.type]:t==="textarea"}function id(e,t,n,r){Mu(r),t=ni(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,zr=null;function h3(e){md(e,0)}function Li(e){var t=_n(e);if(Cu(t))return e}function g3(e,t){if(e==="change")return t}var ld=!1;if(xt){var il;if(xt){var ll="oninput"in document;if(!ll){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),ll=typeof Tc.oninput=="function"}il=ll}else il=!1;ld=il&&(!document.documentMode||9<document.documentMode)}function Ac(){Tr&&(Tr.detachEvent("onpropertychange",sd),zr=Tr=null)}function sd(e){if(e.propertyName==="value"&&Li(zr)){var t=[];id(t,zr,e,Ys(e)),Bu(h3,t)}}function m3(e,t,n){e==="focusin"?(Ac(),Tr=t,zr=n,Tr.attachEvent("onpropertychange",sd)):e==="focusout"&&Ac()}function v3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(zr)}function y3(e,t){if(e==="click")return Li(t)}function x3(e,t){if(e==="input"||e==="change")return Li(t)}function w3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:w3;function Pr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hl.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=Nc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nc(n)}}function ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S3(e){var t=cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ad(n.ownerDocument.documentElement,n)){if(r!==null&&ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=kc(n,i);var l=kc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E3=xt&&"documentMode"in document&&11>=document.documentMode,Nn=null,os=null,Ar=null,is=!1;function _c(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;is||Nn==null||Nn!==Qo(r)||(r=Nn,"selectionStart"in r&&ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Pr(Ar,r)||(Ar=r,r=ni(os,"onSelect"),0<r.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},sl={},ud={};xt&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Di(e){if(sl[e])return sl[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return sl[e]=t[n];return e}var dd=Di("animationend"),fd=Di("animationiteration"),pd=Di("animationstart"),hd=Di("transitionend"),gd=new Map,Rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){gd.set(e,t),vn(t,[e])}for(var al=0;al<Rc.length;al++){var cl=Rc[al],T3=cl.toLowerCase(),A3=cl[0].toUpperCase()+cl.slice(1);Kt(T3,"on"+A3)}Kt(dd,"onAnimationEnd");Kt(fd,"onAnimationIteration");Kt(pd,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(hd,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N3=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tp(r,t,void 0,e),e.currentTarget=null}function md(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],a=c.instance,u=c.currentTarget;if(c=c.listener,a!==i&&o.isPropagationStopped())break e;Cc(o,c,u),i=a}else for(l=0;l<r.length;l++){if(c=r[l],a=c.instance,u=c.currentTarget,c=c.listener,a!==i&&o.isPropagationStopped())break e;Cc(o,c,u),i=a}}}if(Zo)throw e=es,Zo=!1,es=null,e}function q(e,t){var n=t[us];n===void 0&&(n=t[us]=new Set);var r=e+"__bubble";n.has(r)||(vd(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),vd(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[vo]){e[vo]=!0,Au.forEach(function(n){n!=="selectionchange"&&(N3.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,ul("selectionchange",!1,t))}}function vd(e,t,n,r){switch(ed(t)){case 1:var o=Hp;break;case 4:o=Bp;break;default:o=ea}n=o.bind(null,t,n,e),o=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;c!==null;){if(l=tn(c),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}c=c.parentNode}}r=r.return}Bu(function(){var u=i,f=Ys(n),v=[];e:{var h=gd.get(e);if(h!==void 0){var x=na,w=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":x=t3;break;case"focusin":w="focus",x=ol;break;case"focusout":w="blur",x=ol;break;case"beforeblur":case"afterblur":x=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=o3;break;case dd:case fd:case pd:x=Wp;break;case hd:x=l3;break;case"scroll":x=bp;break;case"wheel":x=a3;break;case"copy":case"cut":case"paste":x=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=xc}var E=(t&4)!==0,I=!E&&e==="scroll",g=E?h!==null?h+"Capture":null:h;E=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,g!==null&&(y=Or(d,g),y!=null&&E.push(Br(d,y,m)))),I)break;d=d.return}0<E.length&&(h=new x(h,w,null,n,f),v.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Zl&&(w=n.relatedTarget||n.fromElement)&&(tn(w)||w[wt]))break e;if((x||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?tn(w):null,w!==null&&(I=yn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(E=vc,y="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=xc,y="onPointerLeave",g="onPointerEnter",d="pointer"),I=x==null?h:_n(x),m=w==null?h:_n(w),h=new E(y,d+"leave",x,n,f),h.target=I,h.relatedTarget=m,y=null,tn(f)===u&&(E=new E(g,d+"enter",w,n,f),E.target=m,E.relatedTarget=I,y=E),I=y,x&&w)t:{for(E=x,g=w,d=0,m=E;m;m=wn(m))d++;for(m=0,y=g;y;y=wn(y))m++;for(;0<d-m;)E=wn(E),d--;for(;0<m-d;)g=wn(g),m--;for(;d--;){if(E===g||g!==null&&E===g.alternate)break t;E=wn(E),g=wn(g)}E=null}else E=null;x!==null&&Ic(v,h,x,E,!1),w!==null&&I!==null&&Ic(v,I,w,E,!0)}}e:{if(h=u?_n(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var A=g3;else if(Ec(h))if(ld)A=x3;else{A=v3;var N=m3}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=y3);if(A&&(A=A(e,u))){id(v,A,n,f);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Wl(h,"number",h.value)}switch(N=u?_n(u):window,e){case"focusin":(Ec(N)||N.contentEditable==="true")&&(Nn=N,os=u,Ar=null);break;case"focusout":Ar=os=Nn=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,_c(v,n,f);break;case"selectionchange":if(E3)break;case"keydown":case"keyup":_c(v,n,f)}var T;if(oa)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else An?rd(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(nd&&n.locale!=="ko"&&(An||C!=="onCompositionStart"?C==="onCompositionEnd"&&An&&(T=td()):(Ot=f,ta="value"in Ot?Ot.value:Ot.textContent,An=!0)),N=ni(u,C),0<N.length&&(C=new yc(C,e,null,n,f),v.push({event:C,listeners:N}),T?C.data=T:(T=od(n),T!==null&&(C.data=T)))),(T=u3?d3(e,n):f3(e,n))&&(u=ni(u,"onBeforeInput"),0<u.length&&(f=new yc("onBeforeInput","beforeinput",null,n,f),v.push({event:f,listeners:u}),f.data=T))}md(v,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Or(e,n),i!=null&&r.unshift(Br(e,i,o)),i=Or(e,t),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ic(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var c=n,a=c.alternate,u=c.stateNode;if(a!==null&&a===r)break;c.tag===5&&u!==null&&(c=u,o?(a=Or(n,i),a!=null&&l.unshift(Br(n,a,c))):o||(a=Or(n,i),a!=null&&l.push(Br(n,a,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var k3=/\r\n?/g,_3=/\u0000|\uFFFD/g;function Lc(e){return(typeof e=="string"?e:""+e).replace(k3,`
`).replace(_3,"")}function yo(e,t,n){if(t=Lc(t),Lc(e)!==t&&n)throw Error(k(425))}function ri(){}var ls=null,ss=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=typeof setTimeout=="function"?setTimeout:void 0,R3=typeof clearTimeout=="function"?clearTimeout:void 0,Dc=typeof Promise=="function"?Promise:void 0,C3=typeof queueMicrotask=="function"?queueMicrotask:typeof Dc<"u"?function(e){return Dc.resolve(null).then(e).catch(I3)}:cs;function I3(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Mr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),at="__reactFiber$"+rr,br="__reactProps$"+rr,wt="__reactContainer$"+rr,us="__reactEvents$"+rr,L3="__reactListeners$"+rr,D3="__reactHandles$"+rr;function tn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oc(e);e!==null;){if(n=e[at])return n;e=Oc(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Oi(e){return e[br]||null}var ds=[],Rn=-1;function Qt(e){return{current:e}}function K(e){0>Rn||(e.current=ds[Rn],ds[Rn]=null,Rn--)}function U(e,t){Rn++,ds[Rn]=e.current,e.current=t}var Wt={},Se=Qt(Wt),Re=Qt(!1),fn=Wt;function qn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function oi(){K(Re),K(Se)}function $c(e,t,n){if(Se.current!==Wt)throw Error(k(168));U(Se,t),U(Re,n)}function yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,mp(e)||"Unknown",o));return J({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,fn=Se.current,U(Se,e),U(Re,Re.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=yd(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,K(Re),K(Se),U(Se,e)):K(Re),U(Re,n)}var gt=null,$i=!1,pl=!1;function xd(e){gt===null?gt=[e]:gt.push(e)}function O3(e){$i=!0,xd(e)}function Yt(){if(!pl&&gt!==null){pl=!0;var e=0,t=V;try{var n=gt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,$i=!1}catch(o){throw gt!==null&&(gt=gt.slice(e+1)),Vu(Zs,Yt),o}finally{V=t,pl=!1}}return null}var Cn=[],In=0,li=null,si=0,Be=[],be=0,pn=null,mt=1,vt="";function Xt(e,t){Cn[In++]=si,Cn[In++]=li,li=e,si=t}function wd(e,t,n){Be[be++]=mt,Be[be++]=vt,Be[be++]=pn,pn=e;var r=mt;e=vt;var o=32-et(r)-1;r&=~(1<<o),n+=1;var i=32-et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,mt=1<<32-et(t)+o|n<<o|r,vt=i+e}else mt=1<<i|n<<o|r,vt=e}function la(e){e.return!==null&&(Xt(e,1),wd(e,1,0))}function sa(e){for(;e===li;)li=Cn[--In],Cn[In]=null,si=Cn[--In],Cn[In]=null;for(;e===pn;)pn=Be[--be],Be[be]=null,vt=Be[--be],Be[be]=null,mt=Be[--be],Be[be]=null}var Me=null,je=null,Q=!1,Ze=null;function Sd(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,je=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:mt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,je=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(Q){var t=je;if(t){var n=t;if(!Mc(e,t)){if(fs(e))throw Error(k(418));t=Ht(n.nextSibling);var r=Me;t&&Mc(e,t)?Sd(r,n):(e.flags=e.flags&-4097|2,Q=!1,Me=e)}}else{if(fs(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,Me=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function xo(e){if(e!==Me)return!1;if(!Q)return zc(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=je)){if(fs(e))throw Ed(),Error(k(418));for(;t;)Sd(e,t),t=Ht(t.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Me?Ht(e.stateNode.nextSibling):null;return!0}function Ed(){for(var e=je;e;)e=Ht(e.nextSibling)}function Kn(){je=Me=null,Q=!1}function aa(e){Ze===null?Ze=[e]:Ze.push(e)}var $3=At.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var c=o.refs;l===null?delete c[i]:c[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function Td(e){function t(g,d){if(e){var m=g.deletions;m===null?(g.deletions=[d],g.flags|=16):m.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function o(g,d){return g=Gt(g,d),g.index=0,g.sibling=null,g}function i(g,d,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<d?(g.flags|=2,d):m):(g.flags|=2,d)):(g.flags|=1048576,d)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,d,m,y){return d===null||d.tag!==6?(d=wl(m,g.mode,y),d.return=g,d):(d=o(d,m),d.return=g,d)}function a(g,d,m,y){var A=m.type;return A===Tn?f(g,d,m.props.children,y,m.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ct&&Pc(A)===d.type)?(y=o(d,m.props),y.ref=dr(g,d,m),y.return=g,y):(y=Go(m.type,m.key,m.props,null,g.mode,y),y.ref=dr(g,d,m),y.return=g,y)}function u(g,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Sl(m,g.mode,y),d.return=g,d):(d=o(d,m.children||[]),d.return=g,d)}function f(g,d,m,y,A){return d===null||d.tag!==7?(d=cn(m,g.mode,y,A),d.return=g,d):(d=o(d,m),d.return=g,d)}function v(g,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wl(""+d,g.mode,m),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ao:return m=Go(d.type,d.key,d.props,null,g.mode,m),m.ref=dr(g,null,d),m.return=g,m;case En:return d=Sl(d,g.mode,m),d.return=g,d;case Ct:var y=d._init;return v(g,y(d._payload),m)}if(mr(d)||lr(d))return d=cn(d,g.mode,m,null),d.return=g,d;wo(g,d)}return null}function h(g,d,m,y){var A=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:c(g,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:return m.key===A?a(g,d,m,y):null;case En:return m.key===A?u(g,d,m,y):null;case Ct:return A=m._init,h(g,d,A(m._payload),y)}if(mr(m)||lr(m))return A!==null?null:f(g,d,m,y,null);wo(g,m)}return null}function x(g,d,m,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(m)||null,c(d,g,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ao:return g=g.get(y.key===null?m:y.key)||null,a(d,g,y,A);case En:return g=g.get(y.key===null?m:y.key)||null,u(d,g,y,A);case Ct:var N=y._init;return x(g,d,m,N(y._payload),A)}if(mr(y)||lr(y))return g=g.get(m)||null,f(d,g,y,A,null);wo(d,y)}return null}function w(g,d,m,y){for(var A=null,N=null,T=d,C=d=0,G=null;T!==null&&C<m.length;C++){T.index>C?(G=T,T=null):G=T.sibling;var $=h(g,T,m[C],y);if($===null){T===null&&(T=G);break}e&&T&&$.alternate===null&&t(g,T),d=i($,d,C),N===null?A=$:N.sibling=$,N=$,T=G}if(C===m.length)return n(g,T),Q&&Xt(g,C),A;if(T===null){for(;C<m.length;C++)T=v(g,m[C],y),T!==null&&(d=i(T,d,C),N===null?A=T:N.sibling=T,N=T);return Q&&Xt(g,C),A}for(T=r(g,T);C<m.length;C++)G=x(T,g,C,m[C],y),G!==null&&(e&&G.alternate!==null&&T.delete(G.key===null?C:G.key),d=i(G,d,C),N===null?A=G:N.sibling=G,N=G);return e&&T.forEach(function(ve){return t(g,ve)}),Q&&Xt(g,C),A}function E(g,d,m,y){var A=lr(m);if(typeof A!="function")throw Error(k(150));if(m=A.call(m),m==null)throw Error(k(151));for(var N=A=null,T=d,C=d=0,G=null,$=m.next();T!==null&&!$.done;C++,$=m.next()){T.index>C?(G=T,T=null):G=T.sibling;var ve=h(g,T,$.value,y);if(ve===null){T===null&&(T=G);break}e&&T&&ve.alternate===null&&t(g,T),d=i(ve,d,C),N===null?A=ve:N.sibling=ve,N=ve,T=G}if($.done)return n(g,T),Q&&Xt(g,C),A;if(T===null){for(;!$.done;C++,$=m.next())$=v(g,$.value,y),$!==null&&(d=i($,d,C),N===null?A=$:N.sibling=$,N=$);return Q&&Xt(g,C),A}for(T=r(g,T);!$.done;C++,$=m.next())$=x(T,g,C,$.value,y),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?C:$.key),d=i($,d,C),N===null?A=$:N.sibling=$,N=$);return e&&T.forEach(function(rt){return t(g,rt)}),Q&&Xt(g,C),A}function I(g,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Tn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:e:{for(var A=m.key,N=d;N!==null;){if(N.key===A){if(A=m.type,A===Tn){if(N.tag===7){n(g,N.sibling),d=o(N,m.props.children),d.return=g,g=d;break e}}else if(N.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ct&&Pc(A)===N.type){n(g,N.sibling),d=o(N,m.props),d.ref=dr(g,N,m),d.return=g,g=d;break e}n(g,N);break}else t(g,N);N=N.sibling}m.type===Tn?(d=cn(m.props.children,g.mode,y,m.key),d.return=g,g=d):(y=Go(m.type,m.key,m.props,null,g.mode,y),y.ref=dr(g,d,m),y.return=g,g=y)}return l(g);case En:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(g,d.sibling),d=o(d,m.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=Sl(m,g.mode,y),d.return=g,g=d}return l(g);case Ct:return N=m._init,I(g,d,N(m._payload),y)}if(mr(m))return w(g,d,m,y);if(lr(m))return E(g,d,m,y);wo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(g,d.sibling),d=o(d,m),d.return=g,g=d):(n(g,d),d=wl(m,g.mode,y),d.return=g,g=d),l(g)):n(g,d)}return I}var Qn=Td(!0),Ad=Td(!1),ai=Qt(null),ci=null,Ln=null,ca=null;function ua(){ca=Ln=ci=null}function da(e){var t=ai.current;K(ai),e._currentValue=t}function hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){ci=e,ca=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(ci===null)throw Error(k(308));Ln=e,ci.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var nn=null;function fa(e){nn===null?nn=[e]:nn.push(e)}function Nd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,fa(t)):(n.next=o.next,o.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,P&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,St(e,n)}return o=r.interleaved,o===null?(t.next=t,fa(r)):(t.next=o.next,o.next=t),r.interleaved=t,St(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function Hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var a=c,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==l&&(c===null?f.firstBaseUpdate=u:c.next=u,f.lastBaseUpdate=a))}if(i!==null){var v=o.baseState;l=0,f=u=a=null,c=i;do{var h=c.lane,x=c.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,E=c;switch(h=t,x=n,E.tag){case 1:if(w=E.payload,typeof w=="function"){v=w.call(x,v,h);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,h=typeof w=="function"?w.call(x,v,h):w,h==null)break e;v=J({},v,h);break e;case 2:It=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[c]:h.push(c))}else x={eventTime:x,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(u=f=x,a=v):f=f.next=x,l|=h;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;h=c,c=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(a=v),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);gn|=l,e.lanes=l,e.memoizedState=v}}function Bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var to={},ut=Qt(to),Fr=Qt(to),Gr=Qt(to);function rn(e){if(e===to)throw Error(k(174));return e}function ha(e,t){switch(U(Gr,t),U(Fr,e),U(ut,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}K(ut),U(ut,t)}function Yn(){K(ut),K(Fr),K(Gr)}function _d(e){rn(Gr.current);var t=rn(ut.current),n=Kl(t,e.type);t!==n&&(U(Fr,e),U(ut,n))}function ga(e){Fr.current===e&&(K(ut),K(Fr))}var Z=Qt(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function ma(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Po=At.ReactCurrentDispatcher,gl=At.ReactCurrentBatchConfig,hn=0,X=null,se=null,de=null,fi=!1,Nr=!1,Vr=0,j3=0;function ye(){throw Error(k(321))}function va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,o,i){if(hn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?H3:B3,e=n(r,o),Nr){i=0;do{if(Nr=!1,Vr=0,25<=i)throw Error(k(301));i+=1,de=se=null,t.updateQueue=null,Po.current=b3,e=n(r,o)}while(Nr)}if(Po.current=pi,t=se!==null&&se.next!==null,hn=0,de=se=X=null,fi=!1,t)throw Error(k(300));return e}function xa(){var e=Vr!==0;return Vr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?X.memoizedState=de=e:de=de.next=e,de}function We(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=de===null?X.memoizedState:de.next;if(t!==null)de=t,se=e;else{if(e===null)throw Error(k(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?X.memoizedState=de=e:de=de.next=e}return de}function Ur(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var c=l=null,a=null,u=i;do{var f=u.lane;if((hn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(c=a=v,l=r):a=a.next=v,X.lanes|=f,gn|=f}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=c,nt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,gn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);nt(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Rd(){}function Cd(e,t){var n=X,r=We(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,wa(Dd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Ld.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(k(349));hn&30||Id(n,t,o)}return o}function Id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ld(e,t,n,r){t.value=n,t.getSnapshot=r,Od(t)&&$d(e)}function Dd(e,t,n){return n(function(){Od(t)&&$d(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function $d(e){var t=St(e,1);t!==null&&tt(t,e,1,-1)}function bc(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=P3.bind(null,X,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jd(){return We().memoizedState}function Ho(e,t,n,r){var o=lt();X.flags|=e,o.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function ji(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(se!==null){var l=se.memoizedState;if(i=l.destroy,r!==null&&va(r,l.deps)){o.memoizedState=Wr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Wr(1|t,n,i,r)}function Fc(e,t){return Ho(8390656,8,e,t)}function wa(e,t){return ji(2048,8,e,t)}function Md(e,t){return ji(4,2,e,t)}function zd(e,t){return ji(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){return n=n!=null?n.concat([e]):null,ji(4,4,Pd.bind(null,t,e),n)}function Sa(){}function Bd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fd(e,t,n){return hn&21?(nt(n,t)||(n=qu(),X.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function M3(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=gl.transition;gl.transition={};try{e(!1),t()}finally{V=n,gl.transition=r}}function Gd(){return We().memoizedState}function z3(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vd(e))Ud(t,n);else if(n=Nd(e,t,n,r),n!==null){var o=Te();tt(n,e,r,o),Wd(n,t,r)}}function P3(e,t,n){var r=Ft(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vd(e))Ud(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,c=i(l,n);if(o.hasEagerState=!0,o.eagerState=c,nt(c,l)){var a=t.interleaved;a===null?(o.next=o,fa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Nd(e,t,o,r),n!==null&&(o=Te(),tt(n,e,r,o),Wd(n,t,r))}}function Vd(e){var t=e.alternate;return e===X||t!==null&&t===X}function Ud(e,t){Nr=fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var pi={readContext:Ue,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},H3={readContext:Ue,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z3.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:Sa,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=M3.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=lt();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),pe===null)throw Error(k(349));hn&30||Id(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fc(Dd.bind(null,r,i,e),[e]),r.flags|=2048,Wr(9,Ld.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=pe.identifierPrefix;if(Q){var n=vt,r=mt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=j3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B3={readContext:Ue,useCallback:Bd,useContext:Ue,useEffect:wa,useImperativeHandle:Hd,useInsertionEffect:Md,useLayoutEffect:zd,useMemo:bd,useReducer:ml,useRef:jd,useState:function(){return ml(Ur)},useDebugValue:Sa,useDeferredValue:function(e){var t=We();return Fd(t,se.memoizedState,e)},useTransition:function(){var e=ml(Ur)[0],t=We().memoizedState;return[e,t]},useMutableSource:Rd,useSyncExternalStore:Cd,useId:Gd,unstable_isNewReconciler:!1},b3={readContext:Ue,useCallback:Bd,useContext:Ue,useEffect:wa,useImperativeHandle:Hd,useInsertionEffect:Md,useLayoutEffect:zd,useMemo:bd,useReducer:vl,useRef:jd,useState:function(){return vl(Ur)},useDebugValue:Sa,useDeferredValue:function(e){var t=We();return se===null?t.memoizedState=e:Fd(t,se.memoizedState,e)},useTransition:function(){var e=vl(Ur)[0],t=We().memoizedState;return[e,t]},useMutableSource:Rd,useSyncExternalStore:Cd,useId:Gd,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Ft(e),i=yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(tt(t,e,o,r),zo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Ft(e),i=yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(tt(t,e,o,r),zo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ft(e),o=yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(tt(t,e,r,n),zo(t,e,r))}};function Gc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(o,i):!0}function qd(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Ce(t)?fn:Se.current,r=t.contextTypes,i=(r=r!=null)?qn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},pa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Ce(t)?fn:Se.current,o.context=qn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(gs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mi.enqueueReplaceState(o,o.state,null),ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=gp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var F3=typeof WeakMap=="function"?WeakMap:Map;function Kd(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,_s=r),vs(e,t)},n}function Qd(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){vs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vs(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new F3;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=nh.bind(null,e,t,n),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var G3=At.ReactCurrentOwner,_e=!1;function Ee(e,t,n,r){t.child=e===null?Ad(t,null,n,r):Qn(t,e.child,n,r)}function Kc(e,t,n,r,o){n=n.render;var i=t.ref;return Hn(t,o),r=ya(e,t,n,r,i,o),n=xa(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(Q&&n&&la(t),t.flags|=1,Ee(e,t,r,o),t.child)}function Qc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ca(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Yd(e,t,i,r,o)):(e=Go(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return Et(e,t,o)}return t.flags|=1,e=Gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Yd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,Et(e,t,o)}return ys(e,t,n,r,o)}function Zd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(On,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(On,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(On,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(On,$e),$e|=r;return Ee(e,t,o,n),t.child}function Xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,o){var i=Ce(n)?fn:Se.current;return i=qn(t,i),Hn(t,o),n=ya(e,t,n,r,i,o),r=xa(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(Q&&r&&la(t),t.flags|=1,Ee(e,t,n,o),t.child)}function Yc(e,t,n,r,o){if(Ce(n)){var i=!0;ii(t)}else i=!1;if(Hn(t,o),t.stateNode===null)Bo(e,t),qd(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ce(n)?fn:Se.current,u=qn(t,u));var f=n.getDerivedStateFromProps,v=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||a!==u)&&Vc(t,l,r,u),It=!1;var h=t.memoizedState;l.state=h,ui(t,r,l,o),a=t.memoizedState,c!==r||h!==a||Re.current||It?(typeof f=="function"&&(gs(t,n,f,r),a=t.memoizedState),(c=It||Gc(t,n,c,r,h,a,u))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,kd(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Qe(t.type,c),l.props=u,v=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Ce(n)?fn:Se.current,a=qn(t,a));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==v||h!==a)&&Vc(t,l,r,a),It=!1,h=t.memoizedState,l.state=h,ui(t,r,l,o);var w=t.memoizedState;c!==v||h!==w||Re.current||It?(typeof x=="function"&&(gs(t,n,x,r),w=t.memoizedState),(u=It||Gc(t,n,u,r,h,w,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,i,o)}function xs(e,t,n,r,o,i){Xd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&jc(t,n,!1),Et(e,t,i);r=t.stateNode,G3.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qn(t,e.child,null,i),t.child=Qn(t,null,c,i)):Ee(e,t,c,i),t.memoizedState=r.state,o&&jc(t,n,!0),t.child}function Jd(e){var t=e.stateNode;t.pendingContext?$c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$c(e,t.context,!1),ha(e,t.containerInfo)}function Zc(e,t,n,r,o){return Kn(),aa(o),t.flags|=256,Ee(e,t,n,r),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function Ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function e1(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Z,o&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Hi(l,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ss(n),t.memoizedState=ws,e):Ea(t,l));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return V3(e,t,l,r,c,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,c=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?i=Gt(c,i):(i=cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ss(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ws,r}return i=e.child,e=i.sibling,r=Gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ea(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&aa(r),Qn(t,e.child,null,n),e=Ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V3(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(k(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Hi({mode:"visible",children:r.children},o,0,null),i=cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Qn(t,e.child,null,l),t.child.memoizedState=Ss(l),t.memoizedState=ws,i);if(!(t.mode&1))return So(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(k(419)),r=yl(i,r,void 0),So(e,t,l,r)}if(c=(l&e.childLanes)!==0,_e||c){if(r=pe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,St(e,o),tt(r,e,o,-1))}return Ra(),r=yl(Error(k(421))),So(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,je=Ht(o.nextSibling),Me=t,Q=!0,Ze=null,e!==null&&(Be[be++]=mt,Be[be++]=vt,Be[be++]=pn,mt=e.id,vt=e.overflow,pn=t),t=Ea(t,r.children),t.flags|=4096,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hs(e.return,t,n)}function xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function t1(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ee(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xl(t,!0,n,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U3(e,t,n){switch(t.tag){case 3:Jd(t),Kn();break;case 5:_d(t);break;case 1:Ce(t.type)&&ii(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(ai,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?e1(e,t,n):(U(Z,Z.current&1),e=Et(e,t,n),e!==null?e.sibling:null);U(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return t1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,n)}return Et(e,t,n)}var n1,Es,r1,o1;n1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};r1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(ut.current);var i=null;switch(n){case"input":o=Vl(e,o),r=Vl(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=ql(e,o),r=ql(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Ql(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(c=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==c&&(a!=null||c!=null))if(u==="style")if(c){for(l in c)!c.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&c[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",e),i||c===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};o1=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W3(e,t,n){var r=t.pendingProps;switch(sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ce(t.type)&&oi(),xe(t),null;case 3:return r=t.stateNode,Yn(),K(Re),K(Se),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Is(Ze),Ze=null))),Es(e,t),xe(t),null;case 5:ga(t);var o=rn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)r1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return xe(t),null}if(e=rn(ut.current),xo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[br]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<yr.length;o++)q(yr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":sc(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":cc(r,i),q("invalid",r)}Ql(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var c=i[l];l==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,c,e),o=["children",""+c]):Lr.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":co(r),ac(r,i,!0);break;case"textarea":co(r),uc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ri)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Du(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[br]=r,n1(e,t,!1,!1),t.stateNode=e;e:{switch(l=Yl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<yr.length;o++)q(yr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":sc(e,r),o=Vl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),q("invalid",e);break;case"textarea":cc(e,r),o=ql(e,r),q("invalid",e);break;default:o=r}Ql(n,o),c=o;for(i in c)if(c.hasOwnProperty(i)){var a=c[i];i==="style"?ju(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ou(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dr(e,a):typeof a=="number"&&Dr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&q("scroll",e):a!=null&&Ws(e,i,a,l))}switch(n){case"input":co(e),ac(e,r,!1);break;case"textarea":co(e),uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)o1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=rn(Gr.current),rn(ut.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return xe(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&t.mode&1&&!(t.flags&128))Ed(),Kn(),t.flags|=98560,i=!1;else if(i=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[at]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else Ze!==null&&(Is(Ze),Ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ae===0&&(ae=3):Ra())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Yn(),Es(e,t),e===null&&Hr(t.stateNode.containerInfo),xe(t),null;case 10:return da(t.type._context),xe(t),null;case 17:return Ce(t.type)&&oi(),xe(t),null;case 19:if(K(Z),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=di(e),l!==null){for(t.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Xn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=di(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return xe(t),null}else 2*re()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=Z.current,U(Z,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function q3(e,t){switch(sa(t),t.tag){case 1:return Ce(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),K(Re),K(Se),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return Yn(),null;case 10:return da(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var Eo=!1,we=!1,K3=typeof WeakSet=="function"?WeakSet:Set,R=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ts(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Jc=!1;function Q3(e,t){if(ls=ei,e=cd(),ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,c=-1,a=-1,u=0,f=0,v=e,h=null;t:for(;;){for(var x;v!==n||o!==0&&v.nodeType!==3||(c=l+o),v!==i||r!==0&&v.nodeType!==3||(a=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(x=v.firstChild)!==null;)h=v,v=x;for(;;){if(v===e)break t;if(h===n&&++u===o&&(c=l),h===i&&++f===r&&(a=l),(x=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=x}n=c===-1||a===-1?null:{start:c,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ss={focusedElem:e,selectionRange:n},ei=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,I=w.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?E:Qe(t.type,E),I);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=Jc,Jc=!1,w}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ts(t,n,i)}o=o.next}while(o!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function i1(e){var t=e.alternate;t!==null&&(e.alternate=null,i1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[br],delete t[us],delete t[L3],delete t[D3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l1(e){return e.tag===5||e.tag===3||e.tag===4}function e0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var he=null,Ye=!1;function _t(e,t,n){for(n=n.child;n!==null;)s1(e,t,n),n=n.sibling}function s1(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:we||Dn(n,t);case 6:var r=he,o=Ye;he=null,_t(e,t,n),he=r,Ye=o,he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),Mr(e)):fl(he,n.stateNode));break;case 4:r=he,o=Ye,he=n.stateNode.containerInfo,Ye=!0,_t(e,t,n),he=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ts(n,t,l),o=o.next}while(o!==r)}_t(e,t,n);break;case 1:if(!we&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ee(n,t,c)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,_t(e,t,n),we=r):_t(e,t,n);break;default:_t(e,t,n)}}function t0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new K3),t.forEach(function(r){var o=oh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:he=c.stateNode,Ye=!1;break e;case 3:he=c.stateNode.containerInfo,Ye=!0;break e;case 4:he=c.stateNode.containerInfo,Ye=!0;break e}c=c.return}if(he===null)throw Error(k(160));s1(i,l,o),he=null,Ye=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a1(t,e),t=t.sibling}function a1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),it(e),r&4){try{kr(3,e,e.return),zi(3,e)}catch(E){ee(e,e.return,E)}try{kr(5,e,e.return)}catch(E){ee(e,e.return,E)}}break;case 1:Ke(t,e),it(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(Ke(t,e),it(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{Dr(o,"")}catch(E){ee(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Iu(o,i),Yl(c,l);var u=Yl(c,i);for(l=0;l<a.length;l+=2){var f=a[l],v=a[l+1];f==="style"?ju(o,v):f==="dangerouslySetInnerHTML"?Ou(o,v):f==="children"?Dr(o,v):Ws(o,f,v,u)}switch(c){case"input":Ul(o,i);break;case"textarea":Lu(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?jn(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?jn(o,!!i.multiple,i.defaultValue,!0):jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[br]=i}catch(E){ee(e,e.return,E)}}break;case 6:if(Ke(t,e),it(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){ee(e,e.return,E)}}break;case 3:if(Ke(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(E){ee(e,e.return,E)}break;case 4:Ke(t,e),it(e);break;case 13:Ke(t,e),it(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Na=re())),r&4&&t0(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||f,Ke(t,e),we=u):Ke(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(v=R=f;R!==null;){switch(h=R,x=h.child,h.tag){case 0:case 11:case 14:case 15:kr(4,h,h.return);break;case 1:Dn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(E){ee(r,n,E)}}break;case 5:Dn(h,h.return);break;case 22:if(h.memoizedState!==null){r0(v);continue}}x!==null?(x.return=h,R=x):r0(v)}f=f.sibling}e:for(f=null,v=e;;){if(v.tag===5){if(f===null){f=v;try{o=v.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=v.stateNode,a=v.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=$u("display",l))}catch(E){ee(e,e.return,E)}}}else if(v.tag===6){if(f===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(E){ee(e,e.return,E)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;f===v&&(f=null),v=v.return}f===v&&(f=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ke(t,e),it(e),r&4&&t0(e);break;case 21:break;default:Ke(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(l1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Dr(o,""),r.flags&=-33);var i=e0(e);ks(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,c=e0(e);Ns(e,c,l);break;default:throw Error(k(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Y3(e,t,n){R=e,c1(e)}function c1(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Eo;if(!l){var c=o.alternate,a=c!==null&&c.memoizedState!==null||we;c=Eo;var u=we;if(Eo=l,(we=a)&&!u)for(R=o;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?o0(o):a!==null?(a.return=l,R=a):o0(o);for(;i!==null;)R=i,c1(i),i=i.sibling;R=o,Eo=c,we=u}n0(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):n0(e)}}function n0(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bc(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var v=f.dehydrated;v!==null&&Mr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}we||t.flags&512&&As(t)}catch(h){ee(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function r0(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function o0(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{As(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{As(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){R=null;break}var c=t.sibling;if(c!==null){c.return=t.return,R=c;break}R=t.return}}var Z3=Math.ceil,hi=At.ReactCurrentDispatcher,Ta=At.ReactCurrentOwner,Ge=At.ReactCurrentBatchConfig,P=0,pe=null,ie=null,ge=0,$e=0,On=Qt(0),ae=0,qr=null,gn=0,Pi=0,Aa=0,_r=null,ke=null,Na=0,Xn=1/0,ht=null,gi=!1,_s=null,bt=null,To=!1,$t=null,mi=0,Rr=0,Rs=null,bo=-1,Fo=0;function Te(){return P&6?re():bo!==-1?bo:bo=re()}function Ft(e){return e.mode&1?P&2&&ge!==0?ge&-ge:$3.transition!==null?(Fo===0&&(Fo=qu()),Fo):(e=V,e!==0||(e=window.event,e=e===void 0?16:ed(e.type)),e):1}function tt(e,t,n,r){if(50<Rr)throw Rr=0,Rs=null,Error(k(185));Xr(e,n,r),(!(P&2)||e!==pe)&&(e===pe&&(!(P&2)&&(Pi|=n),ae===4&&Dt(e,ge)),Ie(e,r),n===1&&P===0&&!(t.mode&1)&&(Xn=re()+500,$i&&Yt()))}function Ie(e,t){var n=e.callbackNode;$p(e,t);var r=Jo(e,e===pe?ge:0);if(r===0)n!==null&&pc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pc(n),t===1)e.tag===0?O3(i0.bind(null,e)):xd(i0.bind(null,e)),C3(function(){!(P&6)&&Yt()}),n=null;else{switch(Ku(r)){case 1:n=Zs;break;case 4:n=Uu;break;case 16:n=Xo;break;case 536870912:n=Wu;break;default:n=Xo}n=v1(n,u1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function u1(e,t){if(bo=-1,Fo=0,P&6)throw Error(k(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=Jo(e,e===pe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vi(e,r);else{t=r;var o=P;P|=2;var i=f1();(pe!==e||ge!==t)&&(ht=null,Xn=re()+500,an(e,t));do try{eh();break}catch(c){d1(e,c)}while(!0);ua(),hi.current=i,P=o,ie!==null?t=0:(pe=null,ge=0,t=ae)}if(t!==0){if(t===2&&(o=ts(e),o!==0&&(r=o,t=Cs(e,o))),t===1)throw n=qr,an(e,0),Dt(e,r),Ie(e,re()),n;if(t===6)Dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!X3(o)&&(t=vi(e,r),t===2&&(i=ts(e),i!==0&&(r=i,t=Cs(e,i))),t===1))throw n=qr,an(e,0),Dt(e,r),Ie(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Jt(e,ke,ht);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Na+500-re(),10<t)){if(Jo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=cs(Jt.bind(null,e,ke,ht),t);break}Jt(e,ke,ht);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z3(r/1960))-r,10<r){e.timeoutHandle=cs(Jt.bind(null,e,ke,ht),r);break}Jt(e,ke,ht);break;case 5:Jt(e,ke,ht);break;default:throw Error(k(329))}}}return Ie(e,re()),e.callbackNode===n?u1.bind(null,e):null}function Cs(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=vi(e,t),e!==2&&(t=ke,ke=n,t!==null&&Is(t)),e}function Is(e){ke===null?ke=e:ke.push.apply(ke,e)}function X3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Aa,t&=~Pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function i0(e){if(P&6)throw Error(k(327));Bn();var t=Jo(e,0);if(!(t&1))return Ie(e,re()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=ts(e);r!==0&&(t=r,n=Cs(e,r))}if(n===1)throw n=qr,an(e,0),Dt(e,t),Ie(e,re()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,ke,ht),Ie(e,re()),null}function ka(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(Xn=re()+500,$i&&Yt())}}function mn(e){$t!==null&&$t.tag===0&&!(P&6)&&Bn();var t=P;P|=1;var n=Ge.transition,r=V;try{if(Ge.transition=null,V=1,e)return e()}finally{V=r,Ge.transition=n,P=t,!(P&6)&&Yt()}}function _a(){$e=On.current,K(On)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R3(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:Yn(),K(Re),K(Se),ma();break;case 5:ga(r);break;case 4:Yn();break;case 13:K(Z);break;case 19:K(Z);break;case 10:da(r.type._context);break;case 22:case 23:_a()}n=n.return}if(pe=e,ie=e=Gt(e.current,null),ge=$e=t,ae=0,qr=null,Aa=Pi=gn=0,ke=_r=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function d1(e,t){do{var n=ie;try{if(ua(),Po.current=pi,fi){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fi=!1}if(hn=0,de=se=X=null,Nr=!1,Vr=0,Ta.current=null,n===null||n.return===null){ae=1,qr=t,ie=null;break}e:{var i=e,l=n.return,c=n,a=t;if(t=ge,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=c,v=f.tag;if(!(f.mode&1)&&(v===0||v===11||v===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Wc(l);if(x!==null){x.flags&=-257,qc(x,l,c,i,t),x.mode&1&&Uc(i,u,t),t=x,a=u;var w=t.updateQueue;if(w===null){var E=new Set;E.add(a),t.updateQueue=E}else w.add(a);break e}else{if(!(t&1)){Uc(i,u,t),Ra();break e}a=Error(k(426))}}else if(Q&&c.mode&1){var I=Wc(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),qc(I,l,c,i,t),aa(Zn(a,c));break e}}i=a=Zn(a,c),ae!==4&&(ae=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Kd(i,a,t);Hc(i,g);break e;case 1:c=a;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bt===null||!bt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Qd(i,c,t);Hc(i,y);break e}}i=i.return}while(i!==null)}h1(n)}catch(A){t=A,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function f1(){var e=hi.current;return hi.current=pi,e===null?pi:e}function Ra(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(gn&268435455)&&!(Pi&268435455)||Dt(pe,ge)}function vi(e,t){var n=P;P|=2;var r=f1();(pe!==e||ge!==t)&&(ht=null,an(e,t));do try{J3();break}catch(o){d1(e,o)}while(!0);if(ua(),P=n,hi.current=r,ie!==null)throw Error(k(261));return pe=null,ge=0,ae}function J3(){for(;ie!==null;)p1(ie)}function eh(){for(;ie!==null&&!Np();)p1(ie)}function p1(e){var t=m1(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?h1(e):ie=t,Ta.current=null}function h1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=q3(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=W3(n,t,$e),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function Jt(e,t,n){var r=V,o=Ge.transition;try{Ge.transition=null,V=1,th(e,t,n,r)}finally{Ge.transition=o,V=r}return null}function th(e,t,n,r){do Bn();while($t!==null);if(P&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jp(e,i),e===pe&&(ie=pe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,v1(Xo,function(){return Bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var l=V;V=1;var c=P;P|=4,Ta.current=null,Q3(e,n),a1(n,e),S3(ss),ei=!!ls,ss=ls=null,e.current=n,Y3(n),kp(),P=c,V=l,Ge.transition=i}else e.current=n;if(To&&(To=!1,$t=e,mi=o),i=e.pendingLanes,i===0&&(bt=null),Cp(n.stateNode),Ie(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(gi)throw gi=!1,e=_s,_s=null,e;return mi&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===Rs?Rr++:(Rr=0,Rs=e):Rr=0,Yt(),null}function Bn(){if($t!==null){var e=Ku(mi),t=Ge.transition,n=V;try{if(Ge.transition=null,V=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,mi=0,P&6)throw Error(k(331));var o=P;for(P|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var c=i.deletions;if(c!==null){for(var a=0;a<c.length;a++){var u=c[a];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:kr(8,f,i)}var v=f.child;if(v!==null)v.return=f,R=v;else for(;R!==null;){f=R;var h=f.sibling,x=f.return;if(i1(f),f===u){R=null;break}if(h!==null){h.return=x,R=h;break}R=x}}}var w=i.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,R=g;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=d;R!==null;){if(c=R,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:zi(9,c)}}catch(A){ee(c,c.return,A)}if(c===l){R=null;break e}var y=c.sibling;if(y!==null){y.return=c.return,R=y;break e}R=c.return}}if(P=o,Yt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{V=n,Ge.transition=t}}return!1}function l0(e,t,n){t=Zn(n,t),t=Kd(e,t,1),e=Bt(e,t,1),t=Te(),e!==null&&(Xr(e,1,t),Ie(e,t))}function ee(e,t,n){if(e.tag===3)l0(e,e,n);else for(;t!==null;){if(t.tag===3){l0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Zn(n,e),e=Qd(t,e,1),t=Bt(t,e,1),e=Te(),t!==null&&(Xr(t,1,e),Ie(t,e));break}}t=t.return}}function nh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>re()-Na?an(e,0):Aa|=n),Ie(e,t)}function g1(e,t){t===0&&(e.mode&1?(t=po,po<<=1,!(po&130023424)&&(po=4194304)):t=1);var n=Te();e=St(e,t),e!==null&&(Xr(e,t,n),Ie(e,n))}function rh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),g1(e,n)}function oh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),g1(e,n)}var m1;m1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,U3(e,t,n);_e=!!(e.flags&131072)}else _e=!1,Q&&t.flags&1048576&&wd(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var o=qn(t,Se.current);Hn(t,n),o=ya(null,t,r,e,o,n);var i=xa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,ii(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,pa(t),o.updater=Mi,t.stateNode=o,o._reactInternals=t,ms(t,r,e,n),t=xs(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&la(t),Ee(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=lh(r),e=Qe(r,e),o){case 0:t=ys(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Kc(null,t,r,e,n);break e;case 14:t=Qc(null,t,r,Qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Yc(e,t,r,o,n);case 3:e:{if(Jd(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,kd(e,t),ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Zn(Error(k(423)),t),t=Zc(e,t,r,n,o);break e}else if(r!==o){o=Zn(Error(k(424)),t),t=Zc(e,t,r,n,o);break e}else for(je=Ht(t.stateNode.containerInfo.firstChild),Me=t,Q=!0,Ze=null,n=Ad(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===o){t=Et(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return _d(t),e===null&&ps(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,as(r,o)?l=null:i!==null&&as(r,i)&&(t.flags|=32),Xd(e,t),Ee(e,t,l,n),t.child;case 6:return e===null&&ps(t),null;case 13:return e1(e,t,n);case 4:return ha(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Kc(e,t,r,o,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,U(ai,r._currentValue),r._currentValue=l,i!==null)if(nt(i.value,l)){if(i.children===o.children&&!Re.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){l=i.child;for(var a=c.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=yt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),hs(i.return,n,t),c.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),hs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ee(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hn(t,n),o=Ue(o),r=r(o),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),Qc(e,t,r,o,n);case 15:return Yd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Bo(e,t),t.tag=1,Ce(r)?(e=!0,ii(t)):e=!1,Hn(t,n),qd(t,r,o),ms(t,r,o,n),xs(null,t,r,!0,e,n);case 19:return t1(e,t,n);case 22:return Zd(e,t,n)}throw Error(k(156,t.tag))};function v1(e,t){return Vu(e,t)}function ih(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new ih(e,t,n,r)}function Ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===Qs)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Go(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ca(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Tn:return cn(n.children,o,i,t);case qs:l=8,o|=8;break;case Bl:return e=Fe(12,n,t,o|2),e.elementType=Bl,e.lanes=i,e;case bl:return e=Fe(13,n,t,o),e.elementType=bl,e.lanes=i,e;case Fl:return e=Fe(19,n,t,o),e.elementType=Fl,e.lanes=i,e;case _u:return Hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nu:l=10;break e;case ku:l=9;break e;case Ks:l=11;break e;case Qs:l=14;break e;case Ct:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Hi(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=_u,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ia(e,t,n,r,o,i,l,c,a){return e=new sh(e,t,n,c,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pa(i),e}function ah(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function y1(e){if(!e)return Wt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ce(n))return yd(e,n,t)}return t}function x1(e,t,n,r,o,i,l,c,a){return e=Ia(n,r,!0,e,o,i,l,c,a),e.context=y1(null),n=e.current,r=Te(),o=Ft(n),i=yt(r,o),i.callback=t??null,Bt(n,i,o),e.current.lanes=o,Xr(e,o,r),Ie(e,r),e}function Bi(e,t,n,r){var o=t.current,i=Te(),l=Ft(o);return n=y1(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,l),e!==null&&(tt(e,o,l,i),zo(e,o,l)),l}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function s0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function La(e,t){s0(e,t),(e=e.alternate)&&s0(e,t)}function ch(){return null}var w1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}bi.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Bi(e,t,null,null)};bi.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Bi(null,e,null,null)}),t[wt]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Ju(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function a0(){}function uh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=yi(l);i.call(u)}}var l=x1(t,r,e,0,null,!1,!1,"",a0);return e._reactRootContainer=l,e[wt]=l.current,Hr(e.nodeType===8?e.parentNode:e),mn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var u=yi(a);c.call(u)}}var a=Ia(e,0,!1,null,null,!1,!1,"",a0);return e._reactRootContainer=a,e[wt]=a.current,Hr(e.nodeType===8?e.parentNode:e),mn(function(){Bi(t,a,n,r)}),a}function Gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var c=o;o=function(){var a=yi(l);c.call(a)}}Bi(t,l,e,o)}else l=uh(n,t,e,o,r);return yi(l)}Qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Xs(t,n|1),Ie(t,re()),!(P&6)&&(Xn=re()+500,Yt()))}break;case 13:mn(function(){var r=St(e,1);if(r!==null){var o=Te();tt(r,e,1,o)}}),La(e,1)}};Js=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Te();tt(t,e,134217728,n)}La(e,134217728)}};Yu=function(e){if(e.tag===13){var t=Ft(e),n=St(e,t);if(n!==null){var r=Te();tt(n,e,t,r)}La(e,t)}};Zu=function(){return V};Xu=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Xl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oi(r);if(!o)throw Error(k(90));Cu(r),Ul(r,o)}}}break;case"textarea":Lu(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};Pu=ka;Hu=mn;var dh={usingClientEntryPoint:!1,Events:[eo,_n,Oi,Mu,zu,ka]},pr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fh={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fu(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Ci=Ao.inject(fh),ct=Ao}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dh;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(k(200));return ah(e,t,null,n)};Pe.createRoot=function(e,t){if(!Oa(e))throw Error(k(299));var n=!1,r="",o=w1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ia(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,Hr(e.nodeType===8?e.parentNode:e),new Da(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Fu(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return mn(e)};Pe.hydrate=function(e,t,n){if(!Fi(t))throw Error(k(200));return Gi(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=w1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=x1(t,null,e,1,n??null,o,!1,i,l),e[wt]=t.current,Hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bi(t)};Pe.render=function(e,t,n){if(!Fi(t))throw Error(k(200));return Gi(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(k(40));return e._reactRootContainer?(mn(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Pe.unstable_batchedUpdates=ka;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Gi(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function S1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S1)}catch(e){console.error(e)}}S1(),Su.exports=Pe;var E1=Su.exports;const no=e=>{const{title:t,open:n,onClose:r,children:o}=e;return Uf({onEscKeyPress:r}),n&&E1.createPortal(s.jsxs(zf,{children:[s.jsx(Pf,{onClick:r}),s.jsxs(Hf,{role:"dialog",children:[s.jsxs(Bf,{children:[s.jsx(bf,{children:t}),s.jsx(Ff,{onClick:r,"aria-label":"모달 닫기",children:s.jsx(Qf,{})})]}),s.jsx(Gf,{children:o})]})]}),document.body)},Vi=e=>{const{children:t}=e;return s.jsx(Vf,{children:t})},ph=p.button`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({$width:e})=>e||"auto"};
  height: ${({$size:e})=>e==="large"?"40px":"32px"};
  padding: ${({$size:e})=>e==="large"?"4px 6px":"2px 4px"};

  border: ${({$size:e,$color:t})=>e==="large"?`3px solid ${t}`:`2px solid ${t}`};
  border-radius: ${({$size:e})=>e==="large"?"6px":"4px"};
  background-color: transparent;

  color: ${({$color:e})=>e};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 10px ${({$color:e})=>e};
  }

  transition: 0.2s;
`,hh=p.span`
  font-size: ${({$size:e})=>e==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,gh=p.img`
  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  object-fit: contain;
`,mh=p.div`
  flex-shrink: 0;

  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:e})=>e};
  }
`,ce=e=>{const{name:t,size:n,width:r,color:o,iconSrc:i,ariaLabel:l,...c}=e;return s.jsxs(ph,{$size:n,$width:r,$color:o,"aria-label":l,...c,children:[i&&(typeof i=="string"?s.jsx(gh,{src:i,alt:t,$size:n}):s.jsx(mh,{$size:n,$color:o,children:i})),s.jsx(hh,{$size:n,children:t})]})},vh=p.p`
  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  line-height: 1.2;

  ${({theme:e,$type:t})=>t==="primary"?M`
        color: ${e.color.GOLD};
        font-weight: 600;
      `:t==="semiPrimary"?M`
        color: ${e.color.LEMON};
      `:t==="code"?M`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:M`
      color: ${e.color.WHITE};
    `}
`,H=e=>{const{type:t,fontSize:n,textAlign:r="left",children:o}=e;return s.jsx(vh,{$type:t,$fontSize:n,$textAlign:r,children:o})},yh=p.div`
  width: ${({$width:e})=>e};
  max-width: 100%;
  min-height: ${({$height:e})=>e};
`,qt=e=>{const{title:t,width:n,height:r,open:o,message:i,actionType:l}=e;return s.jsxs(no,{title:t,open:o,onClose:()=>{l==="yesNo"?e.onNoSelect():e.onClose()},children:[s.jsx(yh,{$width:n,$height:r,children:s.jsx(H,{type:"normal",fontSize:"16px",children:i})}),s.jsx(Vi,{children:l==="confirm"?s.jsx(xh,{onClose:e.onClose}):l==="cancelConfirm"?s.jsx(wh,{onClose:e.onClose,onConfirm:e.onConfirm}):s.jsx(Sh,{onYesSelect:e.onYesSelect,onNoSelect:e.onNoSelect})})]})},xh=e=>{const{onClose:t}=e;return s.jsx(ce,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(Ri,{}),color:le.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:t,autoFocus:!0})},wh=e=>{const{onClose:t,onConfirm:n}=e;return s.jsxs(s.Fragment,{children:[s.jsx(ce,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Zr,{}),color:le.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:t}),s.jsx(ce,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(Ri,{}),color:le.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:n})]})},Sh=e=>{const{onYesSelect:t,onNoSelect:n}=e;return s.jsxs(s.Fragment,{children:[s.jsx(ce,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:s.jsx(Ri,{}),color:le.color.LIME,disabled:!1,ariaLabel:"예",onClick:t}),s.jsx(ce,{type:"button",name:"아니요",size:"medium",iconSrc:s.jsx(Zr,{}),color:le.color.RED,disabled:!1,ariaLabel:"아니요",onClick:n})]})},Eh=20,Th=e=>{const{textList:t,typingTime:n,idleTime:r,erasingTime:o}=e,[i,l]=S.useState(""),[c,a]=S.useState(0),[u,f]=S.useState(Date.now()),[v,h]=S.useState(!1),x=n,w=n+r,E=n+r+o;return S.useEffect(()=>{if(!v||t.length===0)return;c>=t.length&&a(m=>Math.min(t.length-1,m));const d=setInterval(()=>{const m=Date.now(),y=m-u;if(y>=E){f(m),a(N=>(N+1)%t.length);return}if(y>=w){const N=t[c].length-Math.ceil((y-w)/o*t[c].length);l(t[c].slice(0,N));return}if(y>=x){l(t[c]);return}const A=Math.ceil(y/n*t[c].length);l(t[c].slice(0,A))},Eh);return()=>{clearInterval(d)}},[v,c,u,t,n,r,o]),{currentText:i,startTyping:()=>{f(Date.now()),l(""),a(0),h(!0)},stopTyping:()=>{l(""),a(0),h(!1)}}},Ah="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",Nh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",kh="/assets/lock-with-clock-DphQokL3.png",_h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",Rh="/assets/settings-title-BAsh2fbw.png",Ch="/assets/guidebook-button-DB51pF_8.png",Ih="/assets/info-button-gVHj_-G9.png",Lh="/assets/totamjung-BrXdXI1T.png",Dh="/assets/logo-square-Ly45EudP.png",Oh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",$h=ki`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,jh=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,Mh=p.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:e})=>e.gradient.BROWN_GRADIENT};

  z-index: 0;
`,zh=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,Ph=p.img`
  width: 160px;
`,Hh=p.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:e})=>e.color.GOLD};
`,Bh=p.div`
  position: relative;

  text-align: center;
`,bh=p.span`
  margin: 0 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,Fh=p.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:e})=>e.color.LEMON};

  animation: ${$h} 0.8s infinite forwards;
`,Gh=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,Vh=p.span`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,Uh=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,Wh=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],qh=e=>{const{open:t,onClose:n}=e,{currentText:r,startTyping:o,stopTyping:i}=Th({textList:Wh,typingTime:1600,idleTime:3e3,erasingTime:500});return S.useEffect(()=>{if(t){o();return}i()},[t]),s.jsx(no,{title:"토탐정 정보",open:t,onClose:n,children:s.jsxs(jh,{children:[s.jsx(Mh,{}),s.jsxs(zh,{children:[s.jsx(Ph,{src:Dh,alt:""}),s.jsx(Hh,{children:"토탐정"}),s.jsxs(Bh,{children:[s.jsx(bh,{children:r}),s.jsx(Fh,{})]})]}),s.jsxs(Gh,{children:[s.jsxs(H,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전:"," ",s.jsx("b",{children:`v${te.runtime.getManifest().version} - MV${te.runtime.getManifest().manifest_version}`})," ","/ 2024. 10. 25. 빌드"]}),s.jsxs(H,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",s.jsx("b",{children:"요술토끼"}),"(",s.jsx(Vh,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),s.jsxs(Uh,{children:[s.jsx(ce,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:le.color.LIGHT_PURPLE,iconSrc:Oh,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),s.jsx(ce,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:le.color.LEMON,iconSrc:s.jsx(sp,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),s.jsx(ce,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:le.color.WHITE,iconSrc:s.jsx(ap,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]})]})})},Kh="https://github.com/wzrabbit/boj-totamjung/wiki/%ED%86%A0%ED%83%90%EC%A0%95-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",Qh=p.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,Yh=p.h1`
  width: 130px;
  height: 100%;
`,Zh=p.img`
  width: 100%;
`,Xh=p.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,Jh=p.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:e})=>e.color.GOLD};
`,c0=p.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,u0=p.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,eg=e=>{const{selectedCategory:t,onCategoryChange:n}=e,[r,o]=S.useState("none");return s.jsxs(Qh,{children:[s.jsx(Yh,{children:s.jsx(Zh,{src:Rh,alt:"토탐정 설정"})}),s.jsx(Mf,{selectedCategory:t,onChange:n}),s.jsxs(Xh,{children:[s.jsx(Jh,{children:`v${te.runtime.getManifest().version}`}),s.jsx(c0,{type:"button","aria-label":"도움말",onClick:()=>{o("guidePageOpenConfirm")},children:s.jsx(u0,{src:Ch,alt:""})}),s.jsx(c0,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{o("totamjungInfo")},children:s.jsx(u0,{src:Ih,alt:""})})]}),s.jsx(qt,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:r==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(Kh),o("none")},onNoSelect:()=>{o("none")}}),s.jsx(qh,{open:r==="totamjungInfo",onClose:()=>{o("none")}})]})},tg=p.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,ng=p.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,rg=p.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:e})=>e.filter.ORANGE_FILTER};
  object-fit: contain;
`,og=p.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.ORANGE};
  }
`,ig=p.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:e})=>e.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lg=p.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:e})=>e.color.ORANGE_TRANSPARENT};

  z-index: -1;
`,Vt=e=>{const{iconSrc:t,title:n}=e;return s.jsxs(tg,{children:[s.jsxs(ng,{children:[t&&(typeof t=="string"?s.jsx(rg,{src:t,alt:""}):s.jsx(og,{children:t})),s.jsx(ig,{children:n})]}),s.jsx(lg,{})]})},sg=p.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:e})=>e.color.GOLD};
`,ag=p.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:e})=>e.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,cg=p.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:e})=>e.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,ug=p.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,dg=p.div`
  & svg {
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,fg=p.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:e})=>e.color.WHITE};
`,pg=p.div`
  display: flex;

  user-select: none;
`,d0=p.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,f0=p.img`
  width: 30px;
  height: 30px;
`,p0=p.p`
  font-size: 16px;
  color: ${({theme:e})=>e.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD};
  }
`,hg=p.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,gg=p.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:t})=>t==="brown"?e.color.BROWN:e.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,mg=p.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,vg=p.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.LEMON};

  cursor: pointer;
`,yg=p.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,xg=p.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:e,$isChecked:t})=>t?M`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:M`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,wg=p.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,Sg=e=>{const{isChecked:t,ariaLabel:n,onChange:r}=e;return s.jsxs(yg,{children:[s.jsx(wg,{checked:t,"aria-label":n,onChange:r}),s.jsx(xg,{$isChecked:t})]})},Eg=e=>{const{id:t,name:n,isChecked:r,backgroundColor:o,onChange:i}=e;return s.jsx(gg,{$backgroundColor:o,children:s.jsxs(mg,{children:[s.jsx(vg,{children:n}),s.jsx(Sg,{isChecked:r,onChange:()=>i(t),ariaLabel:n})]})})},Tg=e=>{const{items:t,checkedIds:n,onChange:r}=e;return s.jsx(hg,{children:t.map((o,i)=>s.jsx(Eg,{id:o.id,name:o.name,isChecked:n.includes(o.id),backgroundColor:i%2===0?"brown":"light-brown",onChange:r},o.id))})},Kr=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:[]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:[]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:"Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:[]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:[]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:[]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix ARray And Lcp Array",tag:"suffix_array",alias:[]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:["Knuth-Morris-Pratt"]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열: O(n log n)",englishName:"Longest Increasing Sequence In O(n Log N)",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:[]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp","regular expression"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:[]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"키타마사",englishName:"Kitamasa",tag:"kitamasa",alias:[]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 신장 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]}],T1=Kr.length,h0=e=>e.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),A1=e=>{const t=h0(e),n=[];return Kr.forEach(({id:r,name:o,englishName:i,tag:l,alias:c})=>{const a=[o,i,l,...c].map(f=>h0(f));(t===""||a.some(f=>f.indexOf(t)!==-1))&&n.push({id:r,name:o})}),n},Ag={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo",FETCH_SHOULD_SHOW_WELCOME_MESSAGE:"fetchShouldShowWelcomeMessage",SAVE_SHOULD_SHOW_WELCOME_MESSAGE:"saveShouldShowWelcomeMessage"},D={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},qe=e=>typeof e=="object"&&e!==null,Ng=e=>qe(e)&&Object.keys(e).every(t=>!isNaN(Number(t))),kg=e=>Array.isArray(e)&&e.every(t=>typeof t=="number"),$a=e=>typeof e=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(e),N1=e=>typeof e=="number"&&e%1===0&&e>=0&&e<=31,on=e=>N1(e)&&e!==31,_g=e=>N1(e)&&e!==0&&e!==31,k1=e=>Array.isArray(e)?e.every(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):!1,_1=[1,2],R1={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},Ls={hotkey:"Alt",selectedSlotNo:1,slots:R1};({...R1});const C1={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},Rg="none",I1=!1,L1=[],Cg=0,Ig=[],Lg={[D.DATA_VERSION]:"v1.2",[D.CHECKED_ALGORITHM_IDS]:_1,[D.QUICK_SLOTS]:Ls,[D.TOTAMJUNG_THEME]:Rg,[D.HIDER_OPTIONS]:C1,[D.RANDOM_DEFENSE_HISTORY]:L1,[D.IS_TIER_HIDDEN]:I1,[D.FONT_NO]:Cg,[D.TIMERS]:Ig,[D.SHOULD_SHOW_WELCOME_MESSAGE]:!1},Dg=e=>Array.isArray(e)?e.filter(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):_1,Og=async()=>{const t=(await te.storage.local.get(D.CHECKED_ALGORITHM_IDS))[D.CHECKED_ALGORITHM_IDS];return{checkedIds:Dg(t)}},$g=e=>{k1(e)&&te.storage.local.set({[D.CHECKED_ALGORITHM_IDS]:e})},jg=()=>{const[e,t]=S.useState(""),[n,r]=S.useState([]),[o,i]=S.useState(!1);S.useEffect(()=>{(async()=>{const v=await Og();r(v.checkedIds),i(!0)})()},[]),S.useEffect(()=>{o&&$g(n)},[n]);const l=v=>{t(v.target.value)},c=v=>{if(n.includes(v)){const x=n.filter(w=>w!==v);r(x);return}const h=[...n,v];r(h)},a=()=>{r(Array.from({length:T1}).map((v,h)=>h+1))},u=()=>{r([])},f=A1(e);return{keyword:e,items:f,checkedIds:n,isLoaded:o,handleChangeKeyword:l,toggleAlgorithm:c,checkAllAlgorithms:a,uncheckAllAlgorithms:u}},ja=()=>{const[e,t]=S.useState(null);return{activeModalName:e,openModal:o=>{t(o)},closeModal:()=>{t(null)}}},Mg=()=>{const{keyword:e,items:t,checkedIds:n,isLoaded:r,handleChangeKeyword:o,toggleAlgorithm:i,checkAllAlgorithms:l,uncheckAllAlgorithms:c}=jg(),{activeModalName:a,openModal:u,closeModal:f}=ja();return s.jsxs(sg,{children:[s.jsx(ag,{children:r&&s.jsx(Tg,{items:t,checkedIds:n,onChange:i})}),s.jsxs(cg,{children:[s.jsxs(ug,{children:[s.jsx(dg,{children:s.jsx(yu,{})}),s.jsx(fg,{placeholder:"알고리즘 분류를 입력해 주세요...",value:e,onChange:o})]}),s.jsxs(pg,{children:[s.jsxs(d0,{type:"button",onClick:()=>{u("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[s.jsx(f0,{src:Ah}),s.jsx(p0,{children:"전체 선택"})]}),s.jsxs(d0,{type:"button",onClick:()=>{u("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[s.jsx(f0,{src:Nh}),s.jsx(p0,{children:"전체 해제"})]})]})]}),s.jsx(qt,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:a==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{l(),f()},onNoSelect:f}),s.jsx(qt,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:a==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{c(),f()},onNoSelect:f})]})},zg=p.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,Pg=p.legend`
  font-size: 16px;
  color: ${({theme:e})=>e.color.WHITE};
  margin-bottom: 6px;
`,Hg=p.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:e})=>e?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,Bg=p.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,bg=p.label`
  width: 16px;
  height: 16px;
`,Fg=p.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  ${({theme:e,$checked:t})=>t?M`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:M`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Gg=p.input.attrs({type:"radio"})`
  display: none;
`,Vg=e=>{const{checked:t,disabled:n=!1}=e;return s.jsxs(bg,{children:[s.jsx(Gg,{...e,onChange:()=>{if("value"in e){e.onChange(e.value);return}e.onChange()}}),s.jsx(Fg,{$checked:t,$disabled:n})]})},$n=e=>{const{legend:t,name:n,options:r,checkedValue:o,disabled:i,isVertical:l=!1,onChange:c}=e;return s.jsxs(zg,{disabled:i,children:[s.jsx(Pg,{children:t}),s.jsx(Hg,{$isVertical:l,children:r.map(({label:a,value:u})=>s.jsxs(Bg,{children:[s.jsx(Vg,{name:n,value:u,checked:u===o,disabled:i,onChange:c}),typeof a=="string"?s.jsx(H,{type:"semiPrimary",fontSize:"16px",children:a}):a]},u))})]})},Ug=p.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,Wg=p.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 134px;
  height: 32px;
  padding: 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:e,$isActivated:t})=>t?M`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:M`
          border: 1.5px solid ${e.color.BROWN};
        `}
`,g0=p.img`
  width: 12px;
  height: auto;
`,m0=p.p`
  font-size: 14px;
  color: ${({theme:e,$tier:t})=>e.solvedAcTier[t]};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,qg=p.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Kg=p.ul`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 150px;
  height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:e})=>e.color.LEMON};
  box-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  scrollbar-width: none;

  transform-origin: top;
  pointer-events: auto;
  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,Qg=p.li`
  padding: 2px;
`,Yg=p.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.color.BROWN};
  }
`,Zg=p.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,D1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Xg="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Jg="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",em="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",tm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",nm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",rm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",om="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",im="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",lm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",sm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",am="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",cm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",um="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",dm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",fm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",pm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",hm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",gm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",mm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",vm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",ym="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",xm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",wm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Sm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Em="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Tm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Am="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Nm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",km="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",_m="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Rm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Cm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Im="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Lm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Dm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Om="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",$m="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",O1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",jm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",Jn={0:D1,1:Xg,2:Jg,3:em,4:tm,5:nm,6:rm,7:om,8:im,9:lm,10:sm,11:am,12:cm,13:um,14:dm,15:fm,16:pm,17:hm,18:gm,19:mm,20:vm,21:ym,22:xm,23:wm,24:Sm,25:Em,26:Tm,27:Am,28:Nm,29:km,30:_m,31:O1},$1={unrated:D1,bronze:Rm,silver:Cm,gold:Im,platinum:Lm,diamond:Dm,ruby:Om,hidden:$m,notratable:O1,warn:jm},j1=e=>{const{initSelectedValue:t,onChange:n}=e,[r,o]=S.useState(t),[i,l]=S.useState(!1),c=S.useRef(null);return S.useEffect(()=>{o(t)},[t]),S.useEffect(()=>{const f=c.current;if(!f)return;const v=h=>{h.target instanceof Node&&h.target!==f&&!f.contains(h.target)&&l(!1)};return document.addEventListener("click",v),()=>{document.removeEventListener("click",v)}},[c]),{selectedValue:r,isSelectOpen:i,updateSelectedValue:f=>{o(f),l(!1),n(f)},openSelect:()=>{l(!0)},containerRef:c}},Mm=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],El={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},zm=e=>{const{selectedTier:t,onChange:n}=e,{selectedValue:r,updateSelectedValue:o,isSelectOpen:i,openSelect:l,containerRef:c}=j1({initSelectedValue:t,onChange:n});return s.jsxs(Ug,{ref:c,children:[s.jsxs(Wg,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:i,onClick:l,children:[s.jsx(g0,{src:Jn[r],alt:""}),s.jsx(m0,{$tier:r,$isBold:!0,children:El[r]}),s.jsx(qg,{children:s.jsx(xu,{})})]}),s.jsx(Kg,{$isOpen:i,children:Mm.map(a=>s.jsx(Qg,{children:s.jsxs(Yg,{type:"button","aria-label":`${El[a]}를 경고 시작 티어로 설정하기`,onClick:()=>{o(a)},children:[s.jsx(g0,{src:Jn[a],alt:""}),s.jsx(m0,{$tier:a,$isBold:a===r,children:El[a]}),a===r&&s.jsx(Zg,{children:s.jsx(Gs,{})})]})},a))})]})},Pm=p.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,v0=p.input`
  width: 60px;
  height: 46px;

  border: none;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  font-size: 26px;
  font-weight: 800;
  text-align: center;
  color: ${({theme:e})=>e.color.GOLD};
  border: 2px solid ${({theme:e})=>e.color.LIGHT_BROWN};

  transition: outline 0.05s;

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    border: 2px solid ${({theme:e})=>e.color.LEMON};
    outline: 3px solid ${({theme:e})=>e.color.LEMON}70;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`,M1=99,z1=59,P1=/^\d+$/,Hm=e=>P1.test(e)&&Number(e)>=0&&Number(e)<=M1,Bm=e=>P1.test(e)&&Number(e)>=0&&Number(e)<=z1,bm=e=>{const{initHours:t,initMinutes:n,onChange:r}=e,[o,i]=S.useState(String(t)),[l,c]=S.useState(String(n));return S.useEffect(()=>{i(String(t)),c(String(n))},[t,n]),{hours:o,minutes:l,updateHours:h=>{const x=h.target.value;x.length>=3||i(x)},updateMinutes:h=>{const x=h.target.value;x.length>=3||c(x)},submitHours:()=>{if(!Hm(o)||Number(o)===t){i(String(t));return}i(String(Number(o))),r(Number(o),Number(l))},submitMinutes:()=>{if(!Bm(l)||Number(l)===n){c(String(n));return}c(String(Number(l))),r(Number(o),Number(l))}}},Fm=e=>{const{hours:t,minutes:n,disabled:r,onChange:o}=e,{hours:i,minutes:l,updateHours:c,updateMinutes:a,submitHours:u,submitMinutes:f}=bm({initHours:t,initMinutes:n,onChange:o});return s.jsxs(Pm,{children:[s.jsx("img",{src:kh,width:"54px",height:"46px",alt:""}),s.jsx(v0,{name:"hours",type:"number",min:0,max:M1,value:i,disabled:r,onChange:c,onBlur:u,"aria-label":"시간"}),s.jsx(H,{type:"normal",fontSize:"16px",children:"시간"}),s.jsx(v0,{name:"minutes",type:"number",min:0,max:z1,value:l,disabled:r,onChange:a,onBlur:f,"aria-label":"분"}),s.jsx(H,{type:"normal",fontSize:"16px",children:"분"})]})},Gm=p.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,Vm=p.span`
  font-size: ${({$fontSize:e})=>e};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:e})=>e.color.LEMON};
  }
`,Um=p.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:e})=>e};
  height: ${({$fontSize:e})=>e};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,Ma=e=>{const{href:t,fontSize:n,children:r}=e;return s.jsxs(Gm,{href:t,target:"__blank",rel:"noopener",children:[s.jsx(Vm,{$fontSize:n,children:r}),s.jsx(Um,{$fontSize:n,children:s.jsx(Kf,{})})]})},za=e=>{if(!(qe(e)&&"problemTagLockDuration"in e&&"shouldHideTier"in e&&"shouldWarnHighTier"in e&&"warnTier"in e&&"algorithmHiderUsage"in e&&"problemTagLockUsage"in e&&qe(e.problemTagLockDuration)&&"hours"in e.problemTagLockDuration&&"minutes"in e.problemTagLockDuration&&typeof e.problemTagLockDuration.hours=="number"&&typeof e.problemTagLockDuration.minutes=="number"&&typeof e.shouldHideTier=="boolean"&&typeof e.shouldWarnHighTier=="boolean"&&_g(e.warnTier)&&typeof e.algorithmHiderUsage=="string"&&["click","always"].includes(e.algorithmHiderUsage)&&typeof e.problemTagLockUsage=="string"&&["click","auto"].includes(e.problemTagLockUsage)))return!1;const{hours:t,minutes:n}=e.problemTagLockDuration;return t>=0&&t<100&&n>=0&&n<60&&t%1===0&&n%1===0},Wm=async()=>{const t=(await te.storage.local.get(D.HIDER_OPTIONS))[D.HIDER_OPTIONS];return za(t)?t:C1},qm=e=>{za(e)&&te.storage.local.set({[D.HIDER_OPTIONS]:e})},Km={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},Qm=()=>{const[e,t]=S.useState({...Km,isLoaded:!1});return S.useEffect(()=>{(async()=>{const a=await Wm();t({...a,isLoaded:!0})})()},[]),S.useEffect(()=>{const{isLoaded:a,...u}=e;a&&qm(u)},[e]),{...e,updateProblemTagLockDuration:(a,u)=>{t(f=>f.isLoaded?{...f,problemTagLockDuration:{hours:a,minutes:u}}:f)},updateShouldHideTier:a=>{const u=a==="true";t(f=>f.isLoaded?{...f,shouldHideTier:u}:f)},updateShouldWarnHighTier:a=>{const u=a==="true";t(f=>f.isLoaded?{...f,shouldWarnHighTier:u}:f)},updateWarnTier:a=>{t(u=>u.isLoaded?{...u,warnTier:a}:u)},updateAlgorithmHiderUsage:a=>{a!=="click"&&a!=="always"||t(u=>u.isLoaded?{...u,algorithmHiderUsage:a}:u)},updateProblemTagLockUsage:a=>{a!=="click"&&a!=="auto"||t(u=>u.isLoaded?{...u,problemTagLockUsage:a}:u)}}},Ym=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,Zm=p.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,Xm=()=>{const{problemTagLockDuration:e,shouldHideTier:t,shouldWarnHighTier:n,warnTier:r,algorithmHiderUsage:o,problemTagLockUsage:i,updateProblemTagLockDuration:l,updateShouldHideTier:c,updateShouldWarnHighTier:a,updateWarnTier:u,updateAlgorithmHiderUsage:f,updateProblemTagLockUsage:v}=Qm(),{hours:h,minutes:x}=e;return s.jsxs(Ym,{children:[s.jsx(Vt,{title:"잠금 시간 설정",iconSrc:te.runtime.getURL("/lock.png")}),s.jsx(Fm,{hours:h,minutes:x,onChange:l}),s.jsx(Vt,{title:"티어 가리개 설정",iconSrc:_h}),s.jsx($n,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:t?"true":t===void 0?"":"false",onChange:c}),s.jsx($n,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!t,options:[{label:"사용하지 않음",value:"false"},{label:s.jsxs(Zm,{children:[s.jsx(zm,{selectedTier:r,onChange:u}),s.jsx(H,{type:"semiPrimary",fontSize:"16px",children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:n?"true":"false",onChange:a}),s.jsxs(H,{type:"normal",fontSize:"14px",children:["티어 가리개를 사용하기 위해서는 백준의"," ",s.jsx(Ma,{href:"https://www.acmicpc.net/setting/view",fontSize:"14px",children:"설정 페이지"}),'에서 [보기] - [solved.ac 티어]가 "보기"로 설정되어 있어야 합니다.']}),s.jsx(Vt,{title:"기본 설정",iconSrc:s.jsx(np,{})}),s.jsx($n,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:o??"",onChange:f}),s.jsx($n,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:i??"",onChange:v})]})},Jm=p.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,e4=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,t4=e=>{const{show:t}=e;return t?s.jsxs(Jm,{children:[s.jsxs(e4,{children:[s.jsx(Vt,{title:"알고 있는 알고리즘 관리하기",iconSrc:s.jsx(yu,{})}),s.jsx(Mg,{})]}),s.jsx(Xm,{})]}):null},n4=p.div`
  display: inline-block;
  position: relative;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  padding: ${({$padding:e})=>e};

  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,r4=p.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({theme:e})=>e.color.LIGHTER_BROWN};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pa=e=>{const{width:t,height:n,padding:r,title:o,children:i}=e;return s.jsxs(n4,{$width:t,$height:n,$padding:r,children:[o!==""&&s.jsx(r4,{children:o}),i]})},o4=p.input`
  width: ${({$width:e})=>e};
  height: 30px;
  padding: 0 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  text-align: ${({$textAlign:e})=>e};
  font-size: 13px;

  &:focus,
  &:active {
    border-color: ${({theme:e,$hasError:t})=>t?e.color.RED:e.color.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:t})=>t?e.color.RED:e.color.LEMON}70;
  }

  transition: outline 0.05s;
`,ln=S.forwardRef((e,t)=>{const{width:n,hasError:r,textAlign:o,ariaLabel:i,...l}=e;return s.jsx(o4,{$width:n,$hasError:r,$textAlign:o,"aria-label":i,spellCheck:!1,ref:t,...l})}),i4=p.textarea`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  padding: 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 13px;

  resize: none;

  &:focus,
  &:active {
    border-color: ${({theme:e,$hasError:t})=>t?e.color.RED:e.color.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:t})=>t?e.color.RED:e.color.LEMON}70;
  }

  transition: outline 0.05s;
`,H1=S.forwardRef((e,t)=>{const{width:n,height:r,hasError:o,ariaLabel:i,...l}=e;return s.jsx(i4,{$width:n,$height:r,$hasError:o,spellCheck:!1,"aria-label":i,ref:t,...l})}),Tl=e=>`${Number(e.slice(0,2))+3}px`,l4=p.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:e})=>Tl(e)};
  height: ${({$height:e})=>e===void 0?"auto":e};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:e})=>Tl(e)};
    height: ${({$fontSize:e})=>Tl(e)};

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,s4=p.p`
  font-size: ${({$fontSize:e})=>e};

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,B1=e=>{const{fontSize:t,errorMessage:n,height:r}=e;return s.jsx(l4,{$fontSize:t,$height:r,children:n!==""&&s.jsxs(s.Fragment,{children:[s.jsx(ep,{}),s.jsx(s4,{$fontSize:t,role:"alert",children:n})]})})},b1=p.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,F1=M`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
`,a4=p.div`
  ${F1}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${b1}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,c4=p.div`
  ${F1}

  bottom: 0;
`,u4=p.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:e})=>e.filter.DARK_ORANGE_FILTER};
`,d4=p.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,f4=p.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:e})=>e.color.ORANGE};
`,p4=p.p`
  font-size: 12px;
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,h4=e=>{const{selectedSlotNo:t,isLoaded:n,onClick:r}=e;return s.jsxs(b1,{type:"button","aria-label":`${t}번 슬롯에 추첨 생성하기`,onClick:r,disabled:!n,children:[s.jsxs(a4,{children:[s.jsx(u4,{src:te.runtime.getURL("/dice.png"),alt:""}),s.jsxs(d4,{children:[s.jsx(f4,{children:"추첨 생성"}),s.jsx(p4,{children:n?`슬롯 번호 − ${t}`:"로딩 중..."})]})]}),s.jsx(c4,{})]})},g4=p.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,G1=M`
  width: 50%;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:e})=>e.color.LIGHTER_BROWN};

  transition: 0.2s;
`,m4=p.button`
  ${G1}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:e})=>e?M`
          border-color: ${({theme:t})=>t.color.MAGENTA};
          background-color: ${({theme:t})=>t.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:t})=>t.color.MAGENTA};

          color: ${({theme:t})=>t.color.WHITE};
        `:M`
          &:hover {
            border-color: ${({theme:t})=>t.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:t})=>t.color.MAGENTA};

            color: ${({theme:t})=>t.color.MAGENTA};
          }
        `}
`,v4=p.button`
  ${G1}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:e})=>e?M`
          border-color: ${({theme:t})=>t.color.AZURE_BLUE};
          background-color: ${({theme:t})=>t.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:t})=>t.color.AZURE_BLUE};

          color: ${({theme:t})=>t.color.WHITE};
        `:M`
          &:hover {
            border-color: ${({theme:t})=>t.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:t})=>t.color.AZURE_BLUE};

            color: ${({theme:t})=>t.color.AZURE_BLUE};
          }
        `}
`,y4=p.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.LIGHTER_BROWN};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`,x4=e=>{const{mode:t,onClick:n}=e;return s.jsxs(g4,{children:[s.jsx(m4,{type:"button",$isActivated:t==="easy",onClick:()=>{n("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),s.jsx(v4,{type:"button",$isActivated:t==="manual",onClick:()=>{n("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),s.jsx(y4,{children:"OR"})]})},w4=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,S4=p.div`
  display: flex;
  justify-content: space-around;
`,Al=31,E4=p.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,T4=p.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:Al}).map((t,n)=>on(n)?`${e.solvedAcTier[n]} ${n/Al*100}%, ${e.solvedAcTier[n]} ${(n+1)/Al*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,y0=p.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  background-color: transparent;

  pointer-events: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-moz-range-track {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({theme:e,value:t})=>e.solvedAcTier[t]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({theme:e,value:t})=>e.solvedAcTier[t]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`,A4=e=>{const{startTier:t,endTier:n,onChange:r}=e;return s.jsxs(E4,{children:[s.jsx(T4,{}),s.jsx(y0,{type:"range",min:0,max:30,value:t,"aria-label":"시작 범위 티어 설정하기",onChange:o=>{const i=Number(o.target.value),l=Math.max(Number(i),n);on(i)&&on(l)&&r(i,l)}}),s.jsx(y0,{type:"range",min:0,max:30,value:n,"aria-label":"끝 범위 티어 설정하기",onChange:o=>{const i=Number(o.target.value),l=Math.min(Number(i),t);on(l)&&on(i)&&r(l,i)}})]})},N4=p.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,x0=p.img`
  width: 26px;
`,k4=p.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`,_4=e=>{const{startTier:t,endTier:n}=e;return s.jsxs(N4,{children:[s.jsx(x0,{src:Jn[t],alt:"",draggable:!1}),s.jsx(k4,{children:"~"}),s.jsx(x0,{src:Jn[n],alt:"",draggable:!1})]})},R4=p.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,w0=(e,t)=>t==="bronze"?e.solvedAcTier.BRONZE:t==="silver"?e.solvedAcTier.SILVER:t==="gold"?e.solvedAcTier.GOLD:t==="platinum"?e.solvedAcTier.PLATINUM:t==="diamond"?e.solvedAcTier.DIAMOND:t==="ruby"?e.solvedAcTier.RUBY:e.color.GRAY,C4=p.li`
  width: 32px;
  height: 32px;
`,I4=p.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:e,$rank:t})=>w0(e,t)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:e,$rank:t})=>`linear-gradient(to top, ${w0(e,t)}70 0%, transparent 100%)`};
  }
`,L4=p.img`
  width: 16px;
`;p.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`;const D4={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},S0={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},O4=e=>{const{rank:t,onClick:n}=e;return s.jsx(C4,{children:s.jsx(I4,{type:"button",$rank:t,"aria-label":D4[t],onClick:()=>{n(S0.START[t],S0.END[t])},children:s.jsx(L4,{src:$1[t],alt:""})})})},$4=["unrated","bronze","silver","gold","platinum","diamond","ruby"],j4=e=>{const{onClick:t}=e;return s.jsx(R4,{children:$4.map(n=>s.jsx(O4,{rank:n,onClick:t},n))})},M4=e=>{const{startTier:t,endTier:n,onChange:r}=e;return s.jsxs(w4,{children:[s.jsx(A4,{startTier:t,endTier:n,onChange:r}),s.jsxs(S4,{children:[s.jsx(_4,{startTier:t,endTier:n}),s.jsx(j4,{onClick:r})]})]})},z4=p.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,P4=p.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,H4=ki`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,B4=p.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${H4} 0.15s forwards;
  }
`,b4=p.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:t})=>t?e.color.GOLD:e.color.LIGHT_GRAY};
`,F4=["OR","AND","NOR"],G4=e=>{const{searchOperator:t,onClick:n}=e;return s.jsx(z4,{children:F4.map(r=>s.jsxs(P4,{children:[r===t&&s.jsx(B4,{children:s.jsx(Gs,{})}),s.jsx(b4,{type:"button","aria-label":`알고리즘 검색 옵션을 ${r}로 설정하기`,$isSelected:r===t,onClick:()=>{n(r)},children:r})]},r))})},V4=p.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:e,$isOpen:t})=>t&&M`
      & > ul {
        border-color: ${e.color.LEMON};
        box-shadow: 0 0 12px ${e.color.GOLD}70;
      }
    `}
`,V1=M`
  display: flex;
  overflow: auto;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  padding: 4px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,U4=p.ul`
  ${V1}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,W4=p.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:e})=>!e&&M`
      opacity: 0;
    `}

  ${({theme:e,$isOpen:t})=>t&&M`
      border-color: ${e.color.LEMON};
      outline: 3px solid ${e.color.LEMON}70;
    `}
`,q4=p.ul`
  ${V1}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,K4=p.li`
  display: inline-block;

  height: 26px;
`,Q4=p.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,Y4=p.p`
  overflow: hidden;

  color: ${({theme:e})=>e.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Z4=p.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LEMON};
  }
`,E0=e=>{const{id:t,name:n,mode:r,onClick:o}=e;return s.jsx(K4,{children:s.jsxs(Q4,{type:"button","aria-label":r==="add"?`${n}을 검색에 포함할 알고리즘 목록에 추가하기`:`${n}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{o(t)},children:[s.jsx(Y4,{children:n}),r==="delete"&&s.jsx(Z4,{children:s.jsx(Yf,{})})]})})},X4=0,J4=30,ev=1e3,tv=99999,nv=500,U1=300,Ds=5,Qr=30,rv=/^\w{3,20}$/,No=1e8,T0=/^([1-9][0-9]*|0)$/,Tt=512,ov=e=>{const{selectedAlgorithmIds:t,onChange:n}=e,[r,o]=S.useState(!1),[i,l]=S.useState(""),c=S.useRef(null),a=S.useRef(null),u=w=>{l(w.target.value)},f=t.length<Ds?A1(i).filter(({id:w})=>!t.includes(w)).map(({id:w})=>w):[],v=w=>{if(w.key==="Enter"){if(f.length===0)return;n([...t,f[0]]),l("")}if(w.key==="Backspace"){if(i!=="")return;n(t.slice(0,-1))}},h=w=>{n([...t,w]),l("")},x=w=>{n(t.filter(E=>E!==w))};return S.useEffect(()=>{const w=c.current,E=a.current;if(!w||!E)return;const I=m=>{const y=m.target;!y||!(y instanceof Node)||o(w.contains(y))},g=()=>{document.activeElement!==document.body&&o(w.contains(document.activeElement))},d=()=>{E.focus()};return document.addEventListener("mousedown",I),document.addEventListener("focusin",g),document.addEventListener("focusout",g),w.addEventListener("click",d),()=>{document.removeEventListener("mousedown",I),document.removeEventListener("focusin",g),document.removeEventListener("focusout",g),w.removeEventListener("click",d)}},[c,a]),{isOpen:r,inputValue:i,searchedAlgorithmIds:f,updateInputValue:u,processActionIfKeyPress:v,addAlgorithmId:h,deleteAlgorithmId:x,containerRef:c,inputRef:a}},iv=e=>{const{selectedAlgorithmIds:t,onChange:n}=e,{isOpen:r,inputValue:o,searchedAlgorithmIds:i,updateInputValue:l,processActionIfKeyPress:c,addAlgorithmId:a,deleteAlgorithmId:u,containerRef:f,inputRef:v}=ov({selectedAlgorithmIds:t,onChange:n});return s.jsxs(V4,{ref:f,$isOpen:r,tabIndex:-1,children:[s.jsx(U4,{tabIndex:-1,children:s.jsxs(s.Fragment,{children:[t.map(h=>{const x=Kr.find(({id:E})=>E===h),w=x?x.name:"";return s.jsx(E0,{mode:"delete",id:h,name:w,onClick:u},h)}),s.jsx(W4,{ref:v,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:r,value:o,onChange:l,onKeyDown:c})]})}),s.jsx(q4,{$isOpen:r,tabIndex:-1,children:i.map(h=>{const x=Kr.find(({id:E})=>E===h),w=x?x.name:"";return s.jsx(E0,{mode:"add",id:h,name:w,onClick:a},h)})})]})},lv=e=>typeof e=="string"&&["ko","en","ko/en","all"].includes(e),sv=e=>qe(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"language"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.language=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&kg(e.algorithmIds)&&on(e.startTier)&&on(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",av=e=>{const{mode:t,title:n,handle:r,solvedMin:o,solvedMax:i,startTier:l,endTier:c,algorithmIds:a,customQuery:u}=e,f=t==="easy"?[A0(n),cv(r),uv(o,i),dv(l,c),fv(a)]:[A0(n),pv(u)];for(let v=0;v<f.length;v++){const h=f[v];if(!h.isValid)return h}return{isValid:!0}},A0=e=>e.length>Qr?{isValid:!1,errorMessage:`추첨 이름은 ${Qr}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},cv=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:rv.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},uv=(e,t)=>{const n=Number(e),r=Number(t),o=e.trim()==="",i=t.trim()==="";return!o&&!T0.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!i&&!T0.test(t)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!o&&n>No?{isValid:!1,errorMessage:`맞은 사람 수는 ${No.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!i&&r>No?{isValid:!1,errorMessage:`맞은 사람 수는 ${No.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!o&&!i&&n>r?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},dv=(e,t)=>{const n=Number(e),r=Number(t);return n>r?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},fv=e=>e.length>Ds?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${Ds.toLocaleString()}개 이하여야 해요.`}:e.every(n=>typeof n=="number"&&n%1===0&&n>=1&&n<=T1)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},pv=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>Tt?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Tt}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},hv=e=>{const{mode:t,handle:n,solvedMin:r,solvedMax:o,language:i,startTier:l,endTier:c,searchOperator:a,algorithmIds:u,customQuery:f}=e;if(t==="manual")return f.replace(/\n/g," ").trim();const v=gv(u),h=mv(i),x=vv(a),w=n.trim()!=="",E=r.trim()!==""||o.trim()!=="",I=v.length>0,g=w?`~@${n} `:"",d=E?`s#${r}..${o} `:"",m=h===""?"":`${h} `,y=l===c?`*${l} `:`*${l}..${c} `,A=I?v.length===1?v[0]:`(${x==="~"?"~":""}${v.join(x)})`:"";return`(*0&!s?|!*0) o? -w? ${g}${d}${m}${y}${A}`.trim()},gv=e=>{const t=[];return e.forEach(n=>{var o;const r=(o=Kr.find(i=>i.id===n))==null?void 0:o.tag;r&&t.push(`#${r}`)}),t},mv=e=>{switch(e){case"ko":return"lang:ko";case"en":return"(lang:en~lang:ko~lang:ja~lang:sv)";case"ko/en":return"(lang:ko|(lang:en~lang:ja~lang:sv))";default:return""}},vv=e=>{switch(e){case"OR":return"|";case"AND":return"&";default:return"~"}},N0={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},yv=e=>{const{selectedSlotNo:t,onSubmit:n}=e,[r,o]=S.useState(N0),[i,l]=S.useState(""),[c,a]=S.useState(void 0),{mode:u,title:f,handle:v,solvedMin:h,solvedMax:x,language:w,startTier:E,endTier:I,searchOperator:g,algorithmIds:d,customQuery:m}=r,y=S.useRef(null),A=S.useRef(null),N=S.useRef(null),T=S.useRef(null),C=S.useRef(null);return{mode:u,title:f,handle:v,solvedMin:h,solvedMax:x,language:w,startTier:E,endTier:I,searchOperator:g,algorithmIds:d,customQuery:m,errorMessage:i,errorElementName:c,setMode:Y=>{o(ne=>({...ne,mode:Y})),l(""),a(void 0)},setRandomDefenseInputValue:Y=>{const{name:ne,value:_}=Y.target;ne in N0&&o(L=>({...L,[ne]:_}))},setLanguage:Y=>{lv(Y)&&o(ne=>({...ne,language:Y}))},setTierRange:(Y,ne)=>{o(_=>({..._,startTier:Y,endTier:ne}))},setSearchOperator:Y=>{o(ne=>({...ne,searchOperator:Y}))},setAlgorithmIds:Y=>{o(ne=>({...ne,algorithmIds:Y}))},submitRandomDefense:()=>{var _,L,O,B,b;if(!sv(r))return;const Y=av(r);if(Y.isValid){const dt=r.title.trim()===""?`추첨 ${t}`:r.title,Le=hv(r);n(dt,Le),l(""),a(void 0);return}switch(l(Y.errorMessage),a(Y.focusElementName),Y.focusElementName){case"title":(_=y.current)==null||_.select();break;case"handle":(L=A.current)==null||L.select();break;case"solvedMin":(O=N.current)==null||O.select();break;case"solvedMax":(B=T.current)==null||B.select();break;case"customQuery":(b=C.current)==null||b.select();break}},titleRef:y,handleRef:A,solvedMinRef:N,solvedMaxRef:T,customQueryRef:C}},xv=p.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,wv=p.div`
  position: absolute;
  top: -32px;
  right: 0;
`,Sv=p.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,k0=p.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,Nl=p.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,ko=p.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Ev=p.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Tv=p.div`
  display: flex;
  justify-content: center;
`,Av=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Nv=p.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,kv=p.div`
  overflow: visible;
  position: relative;

  width: ${({$width:e})=>e};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,_v=p.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 100%;
  height: 32px;
  padding: 6px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:e,$isActivated:t})=>t?M`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:M`
          border: 1.5px solid ${e.color.LIGHTER_BROWN};
        `}
`;p.img`
  width: 12px;
  height: auto;
`;const _0=p.p`
  font-size: 14px;
  color: ${({theme:e})=>e.color.WHITE};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,Rv=p.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Cv=p.ul`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  left: 8px;
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 100%;
  max-height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:e})=>e.color.LEMON};
  box-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  scrollbar-width: none;

  transform-origin: top;
  pointer-events: auto;
  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,Iv=p.li`
  padding: 2px;
`,Lv=p.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.color.BROWN};
  }
`,Dv=p.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Ov=e=>{var h;const{options:t,selectedValue:n,width:r,ariaLabel:o,onChange:i}=e,{selectedValue:l,updateSelectedValue:c,isSelectOpen:a,openSelect:u,containerRef:f}=j1({initSelectedValue:n,onChange:i}),v=((h=t.find(({value:x})=>x===l))==null?void 0:h.label)??"";return s.jsxs(kv,{ref:f,$width:r,role:"combobox",children:[s.jsxs(_v,{type:"button","aria-label":o,"aria-haspopup":"listbox","aria-expanded":a,onClick:u,$isActivated:a,children:[s.jsx(_0,{$isBold:!0,children:v}),s.jsx(Rv,{children:s.jsx(xu,{})})]}),s.jsx(Cv,{$isOpen:a,role:"listbox","aria-labelledby":o,children:t.map(({label:x,value:w})=>s.jsx(Iv,{role:"option","aria-selected":w===l,children:s.jsxs(Lv,{type:"button",onClick:()=>{c(w)},children:[s.jsx(_0,{$isBold:w===l,children:x}),w===l&&s.jsx(Dv,{children:s.jsx(Gs,{})})]})},w))})]})},$v=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],jv=e=>{const{selectedSlotNo:t,isLoaded:n,onSubmit:r}=e,{mode:o,title:i,handle:l,solvedMin:c,solvedMax:a,language:u,startTier:f,endTier:v,searchOperator:h,algorithmIds:x,customQuery:w,errorMessage:E,errorElementName:I,setMode:g,setRandomDefenseInputValue:d,setLanguage:m,setTierRange:y,setSearchOperator:A,setAlgorithmIds:N,submitRandomDefense:T,titleRef:C,handleRef:G,solvedMinRef:$,solvedMaxRef:ve,customQueryRef:rt}=yv({selectedSlotNo:t,onSubmit:r});return s.jsx(Pa,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:s.jsxs(xv,{children:[s.jsx(wv,{children:s.jsx(B1,{errorMessage:E,fontSize:"14px"})}),s.jsx(Sv,{children:s.jsx(x4,{mode:o,onClick:g})}),s.jsxs(Nl,{$width:"380px",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"추첨 이름"}),s.jsx(ln,{ref:C,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:i,maxLength:30,hasError:I==="title",onChange:d})]}),o==="easy"?s.jsxs(s.Fragment,{children:[s.jsxs(k0,{$columnGap:"50px",children:[s.jsxs(Nl,{$width:"190px",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),s.jsx(ln,{ref:G,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:l,minLength:3,maxLength:20,hasError:I==="handle",onChange:d})]}),s.jsxs(ko,{$width:"166px",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),s.jsxs(Ev,{children:[s.jsx(ln,{ref:$,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:c,hasError:I==="solvedMin",onChange:d}),s.jsx(H,{type:"primary",fontSize:"16px",children:"~"}),s.jsx(ln,{ref:ve,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:a,hasError:I==="solvedMax",onChange:d})]})]}),s.jsxs(ko,{$width:"190px",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"문제 언어"}),s.jsx(Ov,{options:$v,selectedValue:u,width:"130px",ariaLabel:"문제 언어 고르기",onChange:m})]})]}),s.jsxs(ko,{$width:"100%",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"난이도 범위"}),s.jsx(Tv,{children:s.jsx(M4,{startTier:f,endTier:v,onChange:y})})]}),s.jsxs(ko,{$width:"446px",children:[s.jsxs(k0,{$columnGap:"110px",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),s.jsx(G4,{searchOperator:h,onClick:A})]}),s.jsx(iv,{selectedAlgorithmIds:x,onChange:ot=>{N(ot)}})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Nl,{$width:"100%",children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"쿼리"}),s.jsx(H1,{ref:rt,width:"100%",height:"160px",name:"customQuery",value:w,placeholder:`1 ~ ${Tt}자`,minLength:1,maxLength:Tt,hasError:I==="customQuery",ariaLabel:"쿼리",onChange:d})]}),s.jsxs(Av,{children:[s.jsxs(H,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",s.jsx(Ma,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),s.jsx(H,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),s.jsx(Nv,{children:s.jsx(h4,{isLoaded:n,selectedSlotNo:t,onClick:T})})]})})},Mv=p.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,zv=p.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,Pv=p.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,Hv=p.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,Bv=p.li`
  width: 26px;
  height: 26px;
`,bv=p.button`
  width: 100%;
  height: 100%;

  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.LIGHTER_BROWN};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({theme:e,$isSelected:t,$isOccupied:n})=>{if(t)return M`
        border-color: ${e.color.LEMON};
        background-color: ${e.color.LEMON};
        outline: 3px solid ${e.color.LEMON}70;

        color: ${e.color.DARK_BROWN};
      `;if(n)return M`
        border-color: ${e.color.GOLD};

        color: ${e.color.GOLD};
      `}}
`,Fv=[1,2,3,4,5,6,7,8,9,0],Gv=e=>{const{selectedSlotNo:t,occupiedSlotNos:n,onChange:r}=e;return s.jsx(Hv,{children:Fv.map(o=>s.jsx(Bv,{children:s.jsx(bv,{$isSelected:o===t,$isOccupied:n.includes(o),onClick:()=>{r(o)},"aria-label":`${o}번 슬롯 선택하기. ${o===t?"이미 선택되어 있는 슬롯입니다":""}`,children:o})},o))})},Vv=p.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,Uv=p.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,Wv=p.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,R0=p.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:t})=>t==="gold"?e.color.GOLD:e.color.WHITE};

  color: ${({theme:e})=>e.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,qv=p.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 16px;
`,Kv=p.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 14px;
`,W1=M`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,Qv=p.div`
  ${W1}

  white-space: nowrap;
`,Yv=p.div`
  ${W1}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,Zv=e=>s.jsxs(Vv,{children:[s.jsxs(Uv,{children:[s.jsx(R0,{$backgroundColor:"gold",children:"추첨 이름"}),s.jsx(Qv,{children:e.isEmpty?s.jsx(qv,{children:"(비어 있음)"}):s.jsx(H,{type:"primary",fontSize:"16px",children:e.title})})]}),s.jsxs(Wv,{children:[s.jsx(R0,{$backgroundColor:"white",children:"쿼리"}),s.jsx(Yv,{children:e.isEmpty?s.jsx(Kv,{children:"(비어 있음)"}):s.jsx(H,{type:"code",fontSize:"13px",children:e.query})})]})]}),Xv=p.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,Jv=p.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme:e})=>e.color.LEMON};

    transform: scale(1.1);
  }
`,ey=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,ty=e=>{const{selectedSlotNo:t,hotkey:n,onClick:r}=e;return s.jsxs(Xv,{children:[s.jsx(H,{type:"primary",fontSize:"16px",children:`단축키: ${n==="Alt"?ey?"Option":"Alt":"F2"} + ${t}`}),s.jsx(Jv,{"aria-label":"단축키 전환하기",onClick:r,children:s.jsx(Zf,{})})]})},ny=[1,2,3,4,5,6,7,8,9,0],ry=e=>{const{quickSlotsInfo:t,isLoaded:n,onHotkeyChange:r,onSlotChange:o,onSlotDelete:i,onSlotNoChange:l}=e,{selectedSlotNo:c,slots:a,hotkey:u}=t,[f,v]=S.useState(!1),h=()=>{n&&r(u==="Alt"?"F2":"Alt")},x=()=>{const y=[];return ny.forEach(A=>{a[A].isEmpty||y.push(A)}),y},w=()=>{v(!0)},E=()=>{v(!1)},I=(y,A)=>{if(!n)return;const N=y.trim()===""?`추첨 ${c}`:y;o(N,A),E()},g=()=>{n&&i()},d=y=>{l(y)};return{slot:a[c],selectedSlotNo:c,hotkey:u,occupiedSlotNos:x(),shouldEditModalShow:f,switchHotkey:h,openEditModal:w,closeEditModal:E,updateSlot:I,deleteSlot:g,setSelectedSlotNo:d}},oy=(e,t)=>e.length>Qr?{isValid:!1,errorMessage:`추첨 이름의 길이가 너무 길어요. ${Qr}자 이하가 되도록 줄여 주세요.`,focusElementName:"title"}:t.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:t.length>Tt?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Tt}자 이하가 되도록 줄여 주세요.`,focusElementName:"query"}:{isValid:!0},iy=e=>{const{initTitle:t,initQuery:n,onSlotChange:r}=e,[o,i]=S.useState(t),[l,c]=S.useState(n),[a,u]=S.useState(""),[f,v]=S.useState(void 0),h=S.useRef(null),x=S.useRef(null);return S.useEffect(()=>{i(t),c(n),u(""),v(void 0)},[t,n]),{title:o,query:l,errorMessage:a,isTitleElementHasErrors:f==="title",isQueryElementHasErrors:f==="query",setQuery:c,setTitle:i,submitSlotInfo:()=>{const g=oy(o,l);if(g.isValid){r(o,l),u("");return}const d=h.current,m=x.current,{focusElementName:y}=g;y==="title"&&(d==null||d.select()),y==="query"&&(m==null||m.select()),v(y),u(g.errorMessage)},titleRef:h,queryRef:x}},ly=p.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 320px;
`,C0=p.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,sy=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`,ay=e=>{const{title:t,query:n,open:r,onClose:o,onSlotChange:i}=e,{title:l,query:c,errorMessage:a,isTitleElementHasErrors:u,isQueryElementHasErrors:f,setQuery:v,setTitle:h,submitSlotInfo:x,titleRef:w,queryRef:E}=iy({initTitle:t,initQuery:n,onSlotChange:i});return s.jsxs(no,{title:"추첨 수정",open:r,onClose:o,children:[s.jsxs(ly,{children:[s.jsxs(C0,{children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"추첨 이름"}),s.jsx(ln,{type:"text",width:"100%",name:"title",value:l,ref:w,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:u,ariaLabel:"새로운 추첨 이름을 입력해주세요",onChange:I=>{h(I.target.value)}})]}),s.jsxs(C0,{children:[s.jsx(H,{type:"primary",fontSize:"16px",children:"쿼리"}),s.jsx(H1,{width:"100%",height:"150px",name:"query",value:c,ref:E,maxLength:Tt,placeholder:`1 ~ ${Tt}자`,hasError:f,ariaLabel:"새로운 쿼리를 입력해주세요",onChange:I=>{v(I.target.value)}})]}),s.jsxs(sy,{children:[s.jsxs(H,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",s.jsx(Ma,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),s.jsx(H,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]}),s.jsx(B1,{fontSize:"14px",errorMessage:a})]}),s.jsxs(Vi,{children:[s.jsx(ce,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Zr,{}),color:le.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:o}),s.jsx(ce,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(Ri,{}),color:le.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:x})]})]})},cy=ki`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,uy=p.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${cy} 2s forwards infinite linear;
  }
`,dy=()=>s.jsx(uy,{children:s.jsx(tp,{})}),fy=e=>{const{isLoaded:t}=e,{activeModalName:n,openModal:r,closeModal:o}=ja(),{slot:i,selectedSlotNo:l,hotkey:c,occupiedSlotNos:a,shouldEditModalShow:u,setSelectedSlotNo:f,switchHotkey:v,openEditModal:h,closeEditModal:x,updateSlot:w,deleteSlot:E}=ry(e);return s.jsxs(Pa,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[t?s.jsxs(Mv,{children:[s.jsxs(zv,{children:[s.jsx(Gv,{selectedSlotNo:l,occupiedSlotNos:a,onChange:f}),s.jsx(ty,{selectedSlotNo:l,hotkey:c,onClick:v})]}),s.jsx(Zv,{...i}),s.jsxs(Pv,{children:[s.jsx(ce,{type:"button",name:"쿼리 복사",size:"medium",color:le.color.LIGHT_GRAY,iconSrc:s.jsx(Xf,{}),disabled:i.isEmpty,ariaLabel:"쿼리 클립보드에 복사하기",onClick:()=>{i.isEmpty||(navigator.clipboard.writeText(i.query),r("copiedQuery"))}}),s.jsx(ce,{type:"button",name:"수정",size:"medium",color:le.color.SKY_BLUE,iconSrc:s.jsx(Jf,{}),disabled:i.isEmpty,ariaLabel:"슬롯 수정하기",onClick:h}),s.jsx(ce,{type:"button",name:"삭제",size:"medium",color:le.color.RED,iconSrc:s.jsx(_i,{}),disabled:i.isEmpty,ariaLabel:"슬롯 삭제하기",onClick:()=>{r("confirmDeleteSlot")}})]})]}):s.jsx(dy,{}),s.jsx(ay,{title:i.isEmpty?"":i.title,query:i.isEmpty?"":i.query,open:u,onClose:x,onSlotChange:w}),s.jsx(qt,{actionType:"confirm",width:"350px",height:"auto",open:n==="copiedQuery",onClose:o,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),s.jsx(qt,{actionType:"yesNo",width:"350px",height:"auto",open:n==="confirmDeleteSlot",onYesSelect:()=>{E(),o()},onNoSelect:o,title:"추첨 삭제 확인",message:`${l}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`})]})},py=e=>e==="Alt"||e==="F2",q1=e=>!qe(e)||!("isEmpty"in e)||typeof e.isEmpty!="boolean"?!1:e.isEmpty?!0:"title"in e&&"query"in e&&typeof e.title=="string"&&typeof e.query=="string",K1=e=>typeof e!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(e),Q1=e=>{if(!(qe(e)&&"hotkey"in e&&"selectedSlotNo"in e&&"slots"in e&&typeof e.hotkey=="string"&&["Alt","F2"].includes(e.hotkey)&&K1(e.selectedSlotNo)))return!1;const{slots:t}=e;return Ng(t)?Array.from({length:10}).every((n,r)=>r in t&&q1(t[r])):!1},Y1=e=>{if(!qe(e)||!("slots"in e))return!1;const{slots:t}=e;return qe(t)&&Array.from({length:10}).every((n,r)=>r in t)},hy=[1,2,3,4,5,6,7,8,9,0],gy=(e,t)=>q1(e)?e.isEmpty?{isEmpty:!0}:e.query.trim()===""||e.query.length>Tt?{isEmpty:!0}:e.title.trim()===""||e.title.length>Qr?{...e,isEmpty:!1,title:`추첨 ${t}`}:e:{isEmpty:!0},Z1=e=>{if(!Y1(e))return Ls;const t="hotkey"in e&&py(e.hotkey)?e.hotkey:"Alt",n="selectedSlotNo"in e&&K1(e.selectedSlotNo)?e.selectedSlotNo:1,r={...e,hotkey:t,selectedSlotNo:n};return hy.forEach(o=>{const i=r.slots[o];r.slots[o]=gy(i,o)}),Q1(r)?r:Ls},my=async()=>{const t=(await te.storage.local.get(D.QUICK_SLOTS))[D.QUICK_SLOTS];return Z1(t)},vy=(e,t,n)=>{const r={selectedSlotNo:e,slots:t,hotkey:n};if(!Y1(r))return;const o=Z1(r);te.storage.local.set({[D.QUICK_SLOTS]:o})},yy={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},xy=()=>{const[e,t]=S.useState(yy),[n,r]=S.useState(1),[o,i]=S.useState("Alt"),[l,c]=S.useState(!1);return S.useEffect(()=>{(async()=>{const{slots:f,selectedSlotNo:v,hotkey:h}=await my();t(f),r(v),i(h),c(!0)})()},[]),S.useEffect(()=>{l&&vy(n,e,o)},[n,e,o]),{slots:e,selectedSlotNo:n,hotkey:o,isLoaded:l,setSelectedSlotNo:r,setHotkey:i,updateSlot:(f,v)=>{t(h=>({...h,[n]:{isEmpty:!1,title:f,query:v}}))},deleteSlot:()=>{t(f=>({...f,[n]:{isEmpty:!0}}))}}},wy=p.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,Ha=(e,t,n)=>t?n.color.GRAY:e>=1&&e<=5?n.solvedAcTier[5]:e>=6&&e<=10?n.solvedAcTier[10]:e>=11&&e<=15?n.solvedAcTier[15]:e>=16&&e<=20?n.solvedAcTier[20]:e>=21&&e<=25?n.solvedAcTier[25]:e>=26&&e<=30?n.solvedAcTier[30]:n.color.WHITE,I0=(e,t,n,r)=>t?M`
      background-image: ${n?r.solvedAcTier.HIDDEN_DARK_GRADIENT200:r.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${r.solvedAcTier.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?M`
      background-image: ${n?r.solvedAcTier.BRONZE_DARK_GRADIENT200:r.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${r.solvedAcTier.BRONZE_GRADIENT};
    `:e>=6&&e<=10?M`
      background-image: ${n?r.solvedAcTier.SILVER_DARK_GRADIENT200:r.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${r.solvedAcTier.SILVER_GRADIENT};
    `:e>=11&&e<=15?M`
      background-image: ${n?r.solvedAcTier.GOLD_DARK_GRADIENT200:r.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${r.solvedAcTier.GOLD_GRADIENT};
    `:e>=16&&e<=20?M`
      background-image: ${n?r.solvedAcTier.PLATINUM_DARK_GRADIENT200:r.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${r.solvedAcTier.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?M`
      background-image: ${n?r.solvedAcTier.DIAMOND_DARK_GRADIENT200:r.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${r.solvedAcTier.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?M`
      background-image: ${n?r.solvedAcTier.RUBY_DARK_GRADIENT200:r.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${r.solvedAcTier.RUBY_GRADIENT};
    `:M`
    background-image: ${n?r.solvedAcTier.UNRATED_DARK_GRADIENT200:r.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${r.solvedAcTier.UNRATED_GRADIENT};
  `,Sy=p.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:t,theme:n})=>I0(e,t,!1,n)};

  &:hover {
    ${({$tier:e,$isHidden:t,theme:n})=>I0(e,t,!0,n)};
  }
`,Ey=p.a`
  display: flex;
  align-items: center;
`,Ty=p.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:t,theme:n})=>Ha(e,t,n)};
  }
`,Ay=p.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,Ny=p.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,ky=p.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:t,theme:n})=>Ha(e,t,n)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,_y=p.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,Ry=p.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:t,theme:n})=>Ha(e,t,n)};
`,Cy=p.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.WHITE};
  }
`,Iy=p.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.color.WHITE};
`,X1=e=>{const t=String(e.getFullYear()).padStart(4,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),l=String(e.getSeconds()).padStart(2,"0");return`${t}-${n}-${r} ${o}:${i}:${l}`},Ly=e=>{const{problemId:t,title:n,tier:r,createdAt:o,isHidden:i,onDelete:l}=e;return s.jsxs(Sy,{$tier:r,$isHidden:i,children:[s.jsxs(Ey,{href:`https://icpc.me/${t}`,target:"__blank","aria-label":`${t}번 ${n} 문제`,children:[s.jsx(Ay,{src:i?$1.hidden:Jn[r],alt:"",draggable:!1}),s.jsxs(Ny,{children:[s.jsx(ky,{$tier:r,$isHidden:i,children:n}),s.jsxs(_y,{children:[s.jsx(Ry,{$tier:r,$isHidden:i,children:`#${t}`}),s.jsxs(Cy,{children:[s.jsx(Wf,{}),s.jsx(Iy,{children:X1(new Date(o))})]})]})]})]}),s.jsx(Ty,{$tier:r,$isHidden:i,onClick:l,"aria-label":"추첨 기록에서 제거하기",children:s.jsx(_i,{})})]})},Dy=e=>{const{items:t,isHidden:n,onDelete:r}=e;return s.jsx(wy,{children:t.map(o=>{const i=`${o.problemId}-${o.createdAt}`;return s.jsx(Ly,{isHidden:n,onDelete:()=>{r(i)},...o},i)})})},Ba=e=>qe(e)&&"problemId"in e&&"title"in e&&"tier"in e&&"createdAt"in e&&typeof e.problemId=="number"&&typeof e.title=="string"&&typeof e.tier=="number"&&e.tier in Jn&&$a(e.createdAt),Oy=e=>Array.isArray(e)&&e.every(t=>Ba(t)),$y=e=>{if(!$a(e))return!1;const[t,n,r,o,i,l,c]=e.split(/[-:.TZ]/).map(Number);return t>=1&&t<=9999&&n>=1&&n<=12&&r>=1&&r<=31&&o>=0&&o<=23&&i>=0&&i<=59&&l>=0&&l<=59&&c>=0&&c<=999},jy=e=>Ba(e)&&e.problemId%1===0&&e.problemId>=ev&&e.problemId<=tv&&e.title.length<=nv&&$y(e.createdAt)&&e.tier%1===0&&e.tier>=X4&&e.tier<=J4,J1=e=>{if(!Array.isArray(e))return L1;const t=[];return e.forEach(n=>{Ba(n)&&jy(n)&&t.push(n)}),t.slice(0,U1)},My=e=>typeof e=="boolean"?e:I1,e2=e=>[...e].sort((t,n)=>t.createdAt>n.createdAt?-1:1),zy=async()=>{const e=await te.storage.local.get([D.RANDOM_DEFENSE_HISTORY,D.IS_TIER_HIDDEN]),t=e[D.RANDOM_DEFENSE_HISTORY],n=e[D.IS_TIER_HIDDEN],r=J1(t),o=e2(r),i=My(n);return{randomDefenseHistory:o,isHidden:i}},Py=(e,t)=>{if(!Array.isArray(e)||typeof t!="boolean")return;const n=J1(e),r=e2(n);te.storage.local.set({[D.RANDOM_DEFENSE_HISTORY]:r,[D.IS_TIER_HIDDEN]:t})},Hy=()=>{const[e,t]=S.useState([]),[n,r]=S.useState(!0),[o,i]=S.useState(!1),l=e.length===0;return S.useEffect(()=>{(async()=>{const f=await zy();r(f.isHidden),t(f.randomDefenseHistory),i(!0)})()},[]),S.useEffect(()=>{o&&Py(e,n)},[e,n]),{items:e,isHidden:n,isLoaded:o,isEmpty:l,deleteHistoryById:f=>{const v=e.filter(h=>`${h.problemId}-${h.createdAt}`!==f);t(v)},clearHistory:()=>{t([])},updateIsHidden:f=>{r(f.target.checked)}}},By=p.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,by=p.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,Fy=p.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,Gy=p.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,Vy=p.button`
  width: 36px;
  height: 36px;

  border: 1px solid ${({theme:e})=>e.color.RED};
  border-radius: 4px;
  background: none;

  transition: 0.2s;

  svg {
    color: ${({theme:e})=>e.color.RED};
  }

  &:hover {
    box-shadow: 0 0 8px ${({theme:e})=>e.color.RED};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`,L0=p.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,Uy=p.div`
  display: flex;
  column-gap: 4px;

  width: 80px;
  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,Wy=p.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`,qy=p.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Ky=p.label`
  display: inline-block;
  position: relative;

  width: ${({$size:e})=>e==="large"?"50px":"40px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:e})=>e==="large"?"15px":"12px"};
  }
`,Qy=p.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,Yy=p.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:e,$isChecked:t})=>t?e.color.GOLD:e.color.LIGHTER_BROWN};

  box-shadow: ${({theme:e,$isChecked:t})=>t?`0 0 12px ${e.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,Zy=p.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:e})=>e==="large"?"26px":"20px"};
  height: ${({$size:e})=>e==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:e,$isChecked:t})=>t?e==="large"?M`
            transform: translateX(20px);
          `:M`
            transform: translateX(16px);
          `:M`
          transform: translateX(0);
        `}
`,Xy=e=>{const{size:t,isChecked:n,ariaLabel:r,onChange:o}=e;return s.jsxs(Ky,{$size:t,children:[s.jsx(Qy,{checked:n,"aria-label":r,onChange:o,value:""}),s.jsx(Yy,{$isChecked:n,children:s.jsx(Zy,{$size:t,$isChecked:n})})]})},Jy=()=>{const{items:e,isHidden:t,isLoaded:n,isEmpty:r,deleteHistoryById:o,clearHistory:i,updateIsHidden:l}=Hy(),{activeModalName:c,openModal:a,closeModal:u}=ja();return s.jsx(Pa,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:s.jsxs(By,{children:[n&&s.jsxs(s.Fragment,{children:[s.jsxs(Fy,{children:[s.jsx(L0,{children:"티어 숨기기"}),s.jsx(Xy,{size:"large",isChecked:t,ariaLabel:"티어 숨기기",onChange:l})]}),s.jsx(by,{children:s.jsx(Dy,{items:e,isHidden:t,onDelete:o})}),s.jsxs(Gy,{children:[s.jsxs(Uy,{children:[s.jsx(qy,{children:s.jsx(qf,{})}),s.jsx(Wy,{children:`${e.length} / ${U1}`})]}),s.jsx(L0,{children:"추첨 기록 비우기"}),s.jsx(Vy,{onClick:()=>{a("confirmClearHistory")},disabled:r,"aria-label":"추첨 기록 비우기",children:s.jsx(_i,{})})]})]}),s.jsx(qt,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:c==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{i(),u()},onNoSelect:u})]})})},ex=p.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,tx=p.div`
  display: flex;
  column-gap: 12px;
`,nx=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,rx=e=>{const{slots:t,selectedSlotNo:n,hotkey:r,isLoaded:o,setSelectedSlotNo:i,setHotkey:l,updateSlot:c,deleteSlot:a}=xy(),{show:u}=e,f={slots:t,selectedSlotNo:n,hotkey:r};return u?s.jsxs(ex,{children:[s.jsx(Vt,{title:"랜덤 디펜스",iconSrc:te.runtime.getURL("/dice.png")}),s.jsxs(tx,{children:[s.jsxs(nx,{children:[s.jsx(jv,{isLoaded:o,selectedSlotNo:n,onSubmit:c}),s.jsx(fy,{quickSlotsInfo:f,isLoaded:o,onHotkeyChange:l,onSlotChange:c,onSlotDelete:a,onSlotNoChange:i})]}),s.jsx(Jy,{})]})]}):null},ox=p.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;p.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const ix=e=>qe(e)&&"totamjungTheme"in e&&ba(e.totamjungTheme),ba=e=>e==="none"||e==="totamjung",lx=e=>e==="totamjung"?"totamjung":"none",sx=async()=>{const t=(await te.storage.local.get(D.TOTAMJUNG_THEME))[D.TOTAMJUNG_THEME],n=lx(t);return{[D.TOTAMJUNG_THEME]:n}},ax=e=>{ix({totamjungTheme:e})&&te.storage.local.set({[D.TOTAMJUNG_THEME]:e})},cx=e=>typeof e=="number"&&!isNaN(e)&&e%1===0?e:0,t2=e=>typeof e=="number"&&!isNaN(e)&&e%1===0,ux=async()=>{const t=(await te.storage.local.get(D.FONT_NO))[D.FONT_NO];return{[D.FONT_NO]:cx(t)}},dx=e=>{t2(e)&&te.storage.local.set({[D.FONT_NO]:e})},fx=()=>{const[e,t]=S.useState(void 0),[n,r]=S.useState(void 0),[o,i]=S.useState(!1);return S.useEffect(()=>{(async()=>{const[u,f]=await Promise.all([sx(),ux()]),{totamjungTheme:v}=u,{fontNo:h}=f;t(v),r(h),i(!0)})()},[]),S.useEffect(()=>{o&&ax(e)},[e]),S.useEffect(()=>{o&&dx(n)},[n]),{totamjungTheme:e,fontNo:n,isLoaded:o,updateTotamjungTheme:a=>{o&&ba(a)&&t(a)},updateFontNo:a=>{const u=Number(a);!o||isNaN(u)||r(u)}}},px=p.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,hx=p.p`
  color: ${({theme:e})=>e.color.LEMON};
  font-size: ${({$fontSize:e})=>e};
  font-family: ${({$fontFamily:e})=>e};
`,gx=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],mx=()=>{const{totamjungTheme:e,fontNo:t,updateTotamjungTheme:n,updateFontNo:r}=fx();return s.jsxs(px,{children:[s.jsx(Vt,{title:"테마 설정",iconSrc:te.runtime.getURL("/palette.png")}),s.jsx($n,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:e??"",onChange:n}),s.jsx(Vt,{title:"폰트 설정",iconSrc:s.jsx(rp,{})}),s.jsx($n,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:gx.map(({name:o,fontFamily:i,fontSize:l},c)=>({label:s.jsx(hx,{$fontFamily:i,$fontSize:l??"16px",children:o}),value:String(c)})),checkedValue:t===void 0?"":String(t),onChange:r})]})},vx=p.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,n2=e=>{const{confirmText:t}=e,[n,r]=S.useState(""),[o,i]=S.useState(t);return S.useEffect(()=>{i(o)},[t]),{inputValue:n,isSameWithConfirmText:n===o,updateInputValue:a=>{r(a.target.value)}}},yx=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,xx=p.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,kl=p.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,wx=p.div`
  display: flex;
  justify-content: center;
`,_l="초기화에 동의합니다",Sx=e=>{const{open:t,onClose:n,onReset:r}=e,{inputValue:o,isSameWithConfirmText:i,updateInputValue:l}=n2({confirmText:_l});return s.jsxs(no,{title:"데이터 초기화",open:t,onClose:n,children:[s.jsxs(yx,{children:[s.jsx(H,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),s.jsxs(xx,{children:[s.jsx(kl,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),s.jsx(kl,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),s.jsx(kl,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),s.jsxs(H,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",s.jsx("b",{children:_l}),"를 입력해 주십시오."]}),s.jsx(wx,{children:s.jsx(ln,{type:"text",width:"300px",value:o,textAlign:"center",placeholder:`"${_l}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:l})})]}),s.jsxs(Vi,{children:[s.jsx(ce,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Zr,{}),color:le.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(ce,{type:"button",name:"초기화",size:"medium",iconSrc:s.jsx(_i,{}),color:le.color.RED,disabled:!i,ariaLabel:"초기화",onClick:r})]})]})},Ex=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,Tx=p.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,Rl=p.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,Ax=p.div`
  display: flex;
  justify-content: center;
`,Cl="숙지했습니다",Nx=e=>{const{open:t,onClose:n,onUpload:r}=e,{inputValue:o,isSameWithConfirmText:i,updateInputValue:l}=n2({confirmText:Cl});return s.jsxs(no,{title:"데이터 업로드",open:t,onClose:n,children:[s.jsxs(Ex,{children:[s.jsx(H,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),s.jsxs(Tx,{children:[s.jsx(Rl,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),s.jsx(Rl,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),s.jsx(Rl,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),s.jsxs(H,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",s.jsx("b",{children:Cl}),"를 입력해 주십시오."]}),s.jsx(Ax,{children:s.jsx(ln,{type:"text",width:"300px",value:o,textAlign:"center",placeholder:`"${Cl}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:l})})]}),s.jsxs(Vi,{children:[s.jsx(ce,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Zr,{}),color:le.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(ce,{type:"button",name:"업로드",size:"medium",iconSrc:s.jsx(wu,{}),color:le.color.LIME,disabled:!i,ariaLabel:"업로드",onClick:r})]})]})},kx=e=>Array.isArray(e)?Array.isArray(e)&&e.every(t=>_x(t)):!1,_x=e=>qe(e)&&"problemId"in e&&"expiresAt"in e&&typeof e.problemId=="number"&&$a(e.expiresAt)&&!isNaN(e.problemId)&&e.problemId%1===0&&e.problemId>=1e3,r2=e=>qe(e)&&D.DATA_VERSION in e&&D.CHECKED_ALGORITHM_IDS in e&&D.QUICK_SLOTS in e&&D.TOTAMJUNG_THEME in e&&D.HIDER_OPTIONS in e&&D.RANDOM_DEFENSE_HISTORY in e&&D.IS_TIER_HIDDEN in e&&D.FONT_NO in e&&D.TIMERS in e?e[D.DATA_VERSION]==="v1.2"&&k1(e[D.CHECKED_ALGORITHM_IDS])&&Q1(e[D.QUICK_SLOTS])&&ba(e[D.TOTAMJUNG_THEME])&&za(e[D.HIDER_OPTIONS])&&Oy(e[D.RANDOM_DEFENSE_HISTORY])&&typeof e[D.IS_TIER_HIDDEN]=="boolean"&&t2(e[D.FONT_NO])&&kx(e[D.TIMERS]):!1,Rx=async e=>r2(e)?(await te.storage.local.set({...e,[D.SHOULD_SHOW_WELCOME_MESSAGE]:!1}),!0):!1,Cx=async()=>(await te.storage.local.set(Lg),!0),Ix=(e,t)=>{const n=document.createElement("a"),r=new Blob([e],{type:"text/plain"});n.href=URL.createObjectURL(r),n.download=t,n.click(),URL.revokeObjectURL(n.href)},Lx=async()=>{const e=await te.runtime.sendMessage({command:Ag.FETCH_OPTIONS_DATA}),t=JSON.stringify(e),n=`totamjung_savefile_${X1(new Date).replace(" ","_")}.ttj`;Ix(t,n)},Dx=()=>{const[e,t]=S.useState("none"),[n,r]=S.useState(void 0),[o,i]=S.useState({errorTitle:"",errorMessage:""}),{errorTitle:l,errorMessage:c}=o,a=w=>{i(w),t("error")};return{activeModal:e,errorTitle:l,errorMessage:c,setActiveModal:t,resetOptionsData:async()=>{await Cx()&&(t("none"),location.reload())},extractOptionsData:async()=>{Lx(),t("none")},stageOptionsData:async w=>{const E=w.target.files;if(!E)return;const I=E[0];if(I.name.split(".").at(-1)!=="ttj"){a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(I.size>1048576){a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const d=new FileReader;d.onload=async()=>{try{const m=d.result;if(typeof m!="string"){a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const y=JSON.parse(m);if(!("dataVersion"in y)||typeof y.dataVersion!="string"){a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(y.dataVersion!=="v1.2"){a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${y.dataVersion}으로, 이 버전에서 다룰 수 있는 v1.2보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(!r2(y)){a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}r(y),t("upload")}catch{a({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},d.readAsText(I)},uploadOptionsData:async()=>{n&&(Rx(n),location.reload())},closeModal:()=>{t("none")}}},Ox=p.label`
  display: block;
  width: 270px;
`,$x=p.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme:e})=>e.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme:e})=>e.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme:e})=>e.color.LIME};
  }
`,jx=p.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIME};
  }
`,Mx=p.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.LIME};
`,zx=p.input`
  display: none;
`,Px=e=>{const{onChange:t}=e;return s.jsxs(Ox,{children:[s.jsxs($x,{role:"button",children:[s.jsx(jx,{children:s.jsx(wu,{})}),s.jsx(Mx,{children:"설정 데이터 업로드"})]}),s.jsx(zx,{type:"file",accept:".ttj",onClick:n=>{n.currentTarget.value=""},onChange:t})]})},Hx=()=>{const{activeModal:e,errorTitle:t,errorMessage:n,setActiveModal:r,resetOptionsData:o,extractOptionsData:i,stageOptionsData:l,uploadOptionsData:c,closeModal:a}=Dx();return s.jsxs(vx,{children:[s.jsx(Vt,{title:"데이터 관리",iconSrc:s.jsx(op,{})}),s.jsx(ce,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,ariaLabel:"설정 데이터 내보내기",iconSrc:s.jsx(ip,{}),onClick:()=>{r("extract")}}),s.jsx(Px,{onChange:l}),s.jsx(ce,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,ariaLabel:"설정 데이터 초기화",iconSrc:s.jsx(lp,{}),onClick:()=>{r("reset")}}),s.jsx(H,{type:"normal",fontSize:"16px",children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),s.jsxs(H,{type:"normal",fontSize:"16px",children:["토탐정 세이브파일의 확장자는 ",s.jsx("b",{children:".ttj"}),"입니다."]}),s.jsx(qt,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:e==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:i,onClose:a}),s.jsx(Nx,{open:e==="upload",onUpload:c,onClose:a}),s.jsx(Sx,{open:e==="reset",onReset:o,onClose:a}),s.jsx(qt,{title:t,actionType:"confirm",width:"350px",height:"auto",open:e==="error",message:n,onClose:a})]})},Bx=e=>{const{show:t}=e;return t?s.jsxs(ox,{children:[s.jsx(mx,{}),s.jsx(Hx,{})]}):null},bx=()=>{const[e,t]=S.useState("algorithmHider");return{selectedCategory:e,setSelectedCategory:t}},Fx=ki`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,Gx=p.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,Vx=p.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Ux=p.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,Wx=p.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,qx=p.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${Fx} 3s forwards infinite;
`,Kx=()=>{const{selectedCategory:e,setSelectedCategory:t}=bx();return s.jsxs(Gx,{children:[s.jsxs(Vx,{children:[s.jsx(eg,{selectedCategory:e,onCategoryChange:t}),s.jsxs(Ux,{children:[s.jsx(t4,{show:e==="algorithmHider"}),s.jsx(rx,{show:e==="randomDefense"}),s.jsx(Bx,{show:e==="appearanceAndDataManage"})]})]}),s.jsx(Wx,{children:s.jsx(qx,{src:Lh,alt:""})})]})};var o2,D0=E1;o2=D0.createRoot,D0.hydrateRoot;const O0=document.getElementById("root"),Il=O0&&o2(O0);Il==null||Il.render(s.jsx(S.StrictMode,{children:s.jsxs(Nf,{theme:le,children:[s.jsx(Cf,{}),s.jsx(Kx,{})]})}));
