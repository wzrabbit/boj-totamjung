(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();try{}catch(e){console.error("[wxt] Failed to initialize plugins",e)}function n2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O0={exports:{}},mi={},j0={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),r2=Symbol.for("react.portal"),o2=Symbol.for("react.fragment"),i2=Symbol.for("react.strict_mode"),l2=Symbol.for("react.profiler"),s2=Symbol.for("react.provider"),a2=Symbol.for("react.context"),c2=Symbol.for("react.forward_ref"),u2=Symbol.for("react.suspense"),d2=Symbol.for("react.memo"),f2=Symbol.for("react.lazy"),Ba=Symbol.iterator;function p2(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var M0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$0=Object.assign,z0={};function tr(e,t,n){this.props=e,this.context=t,this.refs=z0,this.updater=n||M0}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P0(){}P0.prototype=tr.prototype;function Os(e,t,n){this.props=e,this.context=t,this.refs=z0,this.updater=n||M0}var js=Os.prototype=new P0;js.constructor=Os;$0(js,tr.prototype);js.isPureReactComponent=!0;var Fa=Array.isArray,H0=Object.prototype.hasOwnProperty,Ms={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function F0(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)H0.call(t,r)&&!B0.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Qr,type:e,key:i,ref:l,props:o,_owner:Ms.current}}function h2(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $s(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function g2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ba=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g2(""+e.key):t.toString(36)}function Ao(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case r2:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Gi(l,0):r,Fa(o)?(n="",e!=null&&(n=e.replace(ba,"$&/")+"/"),Ao(o,t,n,"",function(u){return u})):o!=null&&($s(o)&&(o=h2(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ba,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Fa(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+Gi(i,a);l+=Ao(i,t,n,c,o)}else if(c=p2(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+Gi(i,a++),l+=Ao(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ro(e,t,n){if(e==null)return e;var r=[],o=0;return Ao(e,r,"","",function(i){return t.call(n,i,o++)}),r}function m2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},No={transition:null},v2={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:No,ReactCurrentOwner:Ms};function b0(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ro,forEach:function(e,t,n){ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ro(e,function(){t++}),t},toArray:function(e){return ro(e,function(t){return t})||[]},only:function(e){if(!$s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=tr;z.Fragment=o2;z.Profiler=l2;z.PureComponent=Os;z.StrictMode=i2;z.Suspense=u2;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v2;z.act=b0;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$0({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)H0.call(t,c)&&!B0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:a2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s2,_context:e},e.Consumer=e};z.createElement=F0;z.createFactory=function(e){var t=F0.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:c2,render:e}};z.isValidElement=$s;z.lazy=function(e){return{$$typeof:f2,_payload:{_status:-1,_result:e},_init:m2}};z.memo=function(e,t){return{$$typeof:d2,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};z.unstable_act=b0;z.useCallback=function(e,t){return Ae.current.useCallback(e,t)};z.useContext=function(e){return Ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ae.current.useEffect(e,t)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ae.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};z.useRef=function(e){return Ae.current.useRef(e)};z.useState=function(e){return Ae.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.3.1";j0.exports=z;var S=j0.exports;const et=n2(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y2=S,x2=Symbol.for("react.element"),w2=Symbol.for("react.fragment"),S2=Object.prototype.hasOwnProperty,E2=y2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T2={key:!0,ref:!0,__self:!0,__source:!0};function G0(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)S2.call(t,r)&&!T2.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:x2,type:e,key:i,ref:l,props:o,_owner:E2.current}}mi.Fragment=w2;mi.jsx=G0;mi.jsxs=G0;O0.exports=mi;var s=O0.exports,de=function(){return de=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},de.apply(this,arguments)};function bn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var W="-ms-",xr="-moz-",H="-webkit-",V0="comm",vi="rule",zs="decl",A2="@import",U0="@keyframes",N2="@layer",W0=Math.abs,Ps=String.fromCharCode,Cl=Object.assign;function k2(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function q0(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function ko(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function Gn(e,t,n){return e.slice(t,n)}function st(e){return e.length}function K0(e){return e.length}function hr(e,t){return t.push(e),e}function _2(e,t){return e.map(t).join("")}function Ga(e,t){return e.filter(function(n){return!ft(n,t)})}var yi=1,Vn=1,Q0=0,Ue=0,ne=0,nr="";function xi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:yi,column:Vn,length:l,return:"",siblings:a}}function Rt(e,t){return Cl(xi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function wn(e){for(;e.root;)e=Rt(e.root,{children:[e]});hr(e,e.siblings)}function R2(){return ne}function C2(){return ne=Ue>0?ce(nr,--Ue):0,Vn--,ne===10&&(Vn=1,yi--),ne}function tt(){return ne=Ue<Q0?ce(nr,Ue++):0,Vn++,ne===10&&(Vn=1,yi++),ne}function an(){return ce(nr,Ue)}function _o(){return Ue}function wi(e,t){return Gn(nr,e,t)}function Il(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I2(e){return yi=Vn=1,Q0=st(nr=e),Ue=0,[]}function D2(e){return nr="",e}function Vi(e){return q0(wi(Ue-1,Dl(e===91?e+2:e===40?e+1:e)))}function L2(e){for(;(ne=an())&&ne<33;)tt();return Il(e)>2||Il(ne)>3?"":" "}function O2(e,t){for(;--t&&tt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return wi(e,_o()+(t<6&&an()==32&&tt()==32))}function Dl(e){for(;tt();)switch(ne){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Dl(ne);break;case 40:e===41&&Dl(e);break;case 92:tt();break}return Ue}function j2(e,t){for(;tt()&&e+ne!==57;)if(e+ne===84&&an()===47)break;return"/*"+wi(t,Ue-1)+"*"+Ps(e===47?e:tt())}function M2(e){for(;!Il(an());)tt();return wi(e,Ue)}function $2(e){return D2(Ro("",null,null,null,[""],e=I2(e),0,[0],e))}function Ro(e,t,n,r,o,i,l,a,c){for(var u=0,f=0,v=l,g=0,x=0,w=0,E=1,I=1,p=1,d=0,m="",y=o,A=i,N=r,T=m;I;)switch(w=d,d=tt()){case 40:if(w!=108&&ce(T,v-1)==58){ko(T+=M(Vi(d),"&","&\f"),"&\f",W0(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:T+=Vi(d);break;case 9:case 10:case 13:case 32:T+=L2(w);break;case 92:T+=O2(_o()-1,7);continue;case 47:switch(an()){case 42:case 47:hr(z2(j2(tt(),_o()),t,n,c),c);break;default:T+="/"}break;case 123*E:a[u++]=st(T)*p;case 125*E:case 59:case 0:switch(d){case 0:case 125:I=0;case 59+f:p==-1&&(T=M(T,/\f/g,"")),x>0&&st(T)-v&&hr(x>32?Ua(T+";",r,n,v-1,c):Ua(M(T," ","")+";",r,n,v-2,c),c);break;case 59:T+=";";default:if(hr(N=Va(T,t,n,u,f,o,a,m,y=[],A=[],v,i),i),d===123)if(f===0)Ro(T,t,N,N,y,i,v,a,A);else switch(g===99&&ce(T,3)===110?100:g){case 100:case 108:case 109:case 115:Ro(e,N,N,r&&hr(Va(e,N,N,0,0,o,a,m,o,y=[],v,A),A),o,A,v,a,r?y:A);break;default:Ro(T,N,N,N,[""],A,0,a,A)}}u=f=x=0,E=p=1,m=T="",v=l;break;case 58:v=1+st(T),x=w;default:if(E<1){if(d==123)--E;else if(d==125&&E++==0&&C2()==125)continue}switch(T+=Ps(d),d*E){case 38:p=f>0?1:(T+="\f",-1);break;case 44:a[u++]=(st(T)-1)*p,p=1;break;case 64:an()===45&&(T+=Vi(tt())),g=an(),f=v=st(m=T+=M2(_o())),d++;break;case 45:w===45&&st(T)==2&&(E=0)}}return i}function Va(e,t,n,r,o,i,l,a,c,u,f,v){for(var g=o-1,x=o===0?i:[""],w=K0(x),E=0,I=0,p=0;E<r;++E)for(var d=0,m=Gn(e,g+1,g=W0(I=l[E])),y=e;d<w;++d)(y=q0(I>0?x[d]+" "+m:M(m,/&\f/g,x[d])))&&(c[p++]=y);return xi(e,t,n,o===0?vi:a,c,u,f,v)}function z2(e,t,n,r){return xi(e,t,n,V0,Ps(R2()),Gn(e,2,-2),0,r)}function Ua(e,t,n,r,o){return xi(e,t,n,zs,Gn(e,0,r),Gn(e,r+1,-1),r,o)}function Y0(e,t,n){switch(k2(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+xr+e+W+e+e;case 5936:switch(ce(e,t+11)){case 114:return H+e+W+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+W+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+W+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+W+e+e;case 6165:return H+e+W+"flex-"+e+e;case 5187:return H+e+M(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return H+e+W+"flex-item-"+M(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":W+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return H+e+W+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+W+M(e,"shrink","negative")+e;case 5292:return H+e+W+M(e,"basis","preferred-size")+e;case 6060:return H+"box-"+M(e,"-grow","")+H+e+W+M(e,"grow","positive")+e;case 4554:return H+M(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!ft(e,/flex-|baseline/))return W+"grid-column-align"+Gn(e,t)+e;break;case 2592:case 3360:return W+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ft(r.props,/grid-\w+-end/)})?~ko(e+(n=n[t].value),"span",0)?e:W+M(e,"-start","")+e+W+"grid-row-span:"+(~ko(n,"span",0)?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":W+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:W+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+xr+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ko(e,"stretch",0)?Y0(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,c,u){return W+o+":"+i+u+(l?W+o+"-span:"+(a?c:+c-+i)+u:"")+e});case 4949:if(ce(e,t+6)===121)return M(e,":",":"+H)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(ce(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+W+"$2box$3")+e;case 100:return M(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Fo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function P2(e,t,n,r){switch(e.type){case N2:if(e.children.length)break;case A2:case zs:return e.return=e.return||e.value;case V0:return"";case U0:return e.return=e.value+"{"+Fo(e.children,r)+"}";case vi:if(!st(e.value=e.props.join(",")))return""}return st(n=Fo(e.children,r))?e.return=e.value+"{"+n+"}":""}function H2(e){var t=K0(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function B2(e){return function(t){t.root||(t=t.return)&&e(t)}}function F2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zs:e.return=Y0(e.value,e.length,n);return;case U0:return Fo([Rt(e,{value:M(e.value,"@","@"+H)})],r);case vi:if(e.length)return _2(n=e.props,function(o){switch(ft(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wn(Rt(e,{props:[M(o,/:(read-\w+)/,":"+xr+"$1")]})),wn(Rt(e,{props:[o]})),Cl(e,{props:Ga(n,r)});break;case"::placeholder":wn(Rt(e,{props:[M(o,/:(plac\w+)/,":"+H+"input-$1")]})),wn(Rt(e,{props:[M(o,/:(plac\w+)/,":"+xr+"$1")]})),wn(Rt(e,{props:[M(o,/:(plac\w+)/,W+"input-$1")]})),wn(Rt(e,{props:[o]})),Cl(e,{props:Ga(n,r)});break}return""})}}var b2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Le={},Un=typeof process<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",Z0="active",X0="data-styled-version",Si="6.1.13",Hs=`/*!sc*/
`,bo=typeof window<"u"&&"HTMLElement"in window,G2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY),V2={},Ei=Object.freeze([]),Wn=Object.freeze({});function J0(e,t,n){return n===void 0&&(n=Wn),e.theme!==n.theme&&e.theme||t||n.theme}var eu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,W2=/(^-|-$)/g;function Wa(e){return e.replace(U2,"-").replace(W2,"")}var q2=/(a)(d)/gi,oo=52,qa=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ll(e){var t,n="";for(t=Math.abs(e);t>oo;t=t/oo|0)n=qa(t%oo)+n;return(qa(t%oo)+n).replace(q2,"$1-$2")}var Ui,tu=5381,En=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nu=function(e){return En(tu,e)};function Bs(e){return Ll(nu(e)>>>0)}function K2(e){return e.displayName||e.name||"Component"}function Wi(e){return typeof e=="string"&&!0}var ru=typeof Symbol=="function"&&Symbol.for,ou=ru?Symbol.for("react.memo"):60115,Q2=ru?Symbol.for("react.forward_ref"):60112,Y2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X2=((Ui={})[Q2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ui[ou]=iu,Ui);function Ka(e){return("type"in(t=e)&&t.type.$$typeof)===ou?iu:"$$typeof"in e?X2[e.$$typeof]:Y2;var t}var J2=Object.defineProperty,ef=Object.getOwnPropertyNames,Qa=Object.getOwnPropertySymbols,tf=Object.getOwnPropertyDescriptor,nf=Object.getPrototypeOf,Ya=Object.prototype;function lu(e,t,n){if(typeof t!="string"){if(Ya){var r=nf(t);r&&r!==Ya&&lu(e,r,n)}var o=ef(t);Qa&&(o=o.concat(Qa(t)));for(var i=Ka(e),l=Ka(t),a=0;a<o.length;++a){var c=o[a];if(!(c in Z2||n&&n[c]||l&&c in l||i&&c in i)){var u=tf(t,c);try{J2(e,c,u)}catch{}}}}return e}function dn(e){return typeof e=="function"}function Fs(e){return typeof e=="object"&&"styledComponentId"in e}function tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Go(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Cr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ol(e,t,n){if(n===void 0&&(n=!1),!n&&!Cr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ol(e[r],t[r]);else if(Cr(t))for(var r in t)e[r]=Ol(e[r],t[r]);return e}function bs(e,t){Object.defineProperty(e,"toString",{value:t})}function fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rf=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw fn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Hs);return n},e}(),Co=new Map,Vo=new Map,Io=1,io=function(e){if(Co.has(e))return Co.get(e);for(;Vo.has(Io);)Io++;var t=Io++;return Co.set(e,t),Vo.set(t,e),t},of=function(e,t){Io=t+1,Co.set(e,t),Vo.set(t,e)},lf="style[".concat(Un,"][").concat(X0,'="').concat(Si,'"]'),sf=new RegExp("^".concat(Un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),af=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},cf=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hs),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var c=a.match(sf);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(of(f,u),af(e,f,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Za=function(e){for(var t=document.querySelectorAll(lf),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Un)!==Z0&&(cf(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function uf(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var su=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Un,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Un,Z0),r.setAttribute(X0,Si);var l=uf();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},df=function(){function e(t){this.element=su(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ff=function(){function e(t){this.element=su(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pf=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xa=bo,hf={isServer:!bo,useCSSOMInjection:!G2},Uo=function(){function e(t,n,r){t===void 0&&(t=Wn),n===void 0&&(n={});var o=this;this.options=de(de({},hf),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bo&&Xa&&(Xa=!1,Za(this)),bs(this,function(){return function(i){for(var l=i.getTag(),a=l.length,c="",u=function(v){var g=function(p){return Vo.get(p)}(v);if(g===void 0)return"continue";var x=i.names.get(g),w=l.getGroup(v);if(x===void 0||!x.size||w.length===0)return"continue";var E="".concat(Un,".g").concat(v,'[id="').concat(g,'"]'),I="";x!==void 0&&x.forEach(function(p){p.length>0&&(I+="".concat(p,","))}),c+="".concat(w).concat(E,'{content:"').concat(I,'"}').concat(Hs)},f=0;f<a;f++)u(f);return c}(o)})}return e.registerId=function(t){return io(t)},e.prototype.rehydrate=function(){!this.server&&bo&&Za(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(de(de({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new pf(o):r?new df(o):new ff(o)}(this.options),new rf(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(io(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),gf=/&/g,mf=/^\s*\/\/.*$/gm;function au(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=au(n.children,t)),n})}function vf(e){var t,n,r,o=Wn,i=o.options,l=i===void 0?Wn:i,a=o.plugins,c=a===void 0?Ei:a,u=function(g,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},f=c.slice();f.push(function(g){g.type===vi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(gf,n).replace(r,u))}),l.prefix&&f.push(F2),f.push(P2);var v=function(g,x,w,E){x===void 0&&(x=""),w===void 0&&(w=""),E===void 0&&(E="&"),t=E,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var I=g.replace(mf,""),p=$2(w||x?"".concat(w," ").concat(x," { ").concat(I," }"):I);l.namespace&&(p=au(p,l.namespace));var d=[];return Fo(p,H2(f.concat(B2(function(m){return d.push(m)})))),d};return v.hash=c.length?c.reduce(function(g,x){return x.name||fn(15),En(g,x.name)},tu).toString():"",v}var yf=new Uo,jl=vf(),cu=et.createContext({shouldForwardProp:void 0,styleSheet:yf,stylis:jl});cu.Consumer;et.createContext(void 0);function Ml(){return S.useContext(cu)}var uu=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=jl);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,bs(this,function(){throw fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=jl),this.name+t.hash},e}(),xf=function(e){return e>="A"&&e<="Z"};function Ja(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;xf(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var du=function(e){return e==null||e===!1||e===""},fu=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!du(i)&&(Array.isArray(i)&&i.isCss||dn(i)?r.push("".concat(Ja(o),":"),i,";"):Cr(i)?r.push.apply(r,bn(bn(["".concat(o," {")],fu(i),!1),["}"],!1)):r.push("".concat(Ja(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in b2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mt(e,t,n,r){if(du(e))return[];if(Fs(e))return[".".concat(e.styledComponentId)];if(dn(e)){if(!dn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Mt(o,t,n,r)}var i;return e instanceof uu?n?(e.inject(n,r),[e.getName(r)]):[e]:Cr(e)?fu(e):Array.isArray(e)?Array.prototype.concat.apply(Ei,e.map(function(l){return Mt(l,t,n,r)})):[e.toString()]}function pu(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(dn(n)&&!Fs(n))return!1}return!0}var wf=nu(Si),Sf=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pu(t),this.componentId=n,this.baseHash=En(wf,n),this.baseStyle=r,Uo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=tn(o,this.staticRulesId);else{var i=Go(Mt(this.rules,t,n,r)),l=Ll(En(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=tn(o,l),this.staticRulesId=l}else{for(var c=En(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var v=this.rules[f];if(typeof v=="string")u+=v;else if(v){var g=Go(Mt(v,t,n,r));c=En(c,g+f),u+=g}}if(u){var x=Ll(c>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=tn(o,x)}}return o},e}(),Ir=et.createContext(void 0);Ir.Consumer;function Ef(e){var t=et.useContext(Ir),n=S.useMemo(function(){return function(r,o){if(!r)throw fn(14);if(dn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw fn(8);return o?de(de({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?et.createElement(Ir.Provider,{value:n},e.children):null}var qi={};function Tf(e,t,n){var r=Fs(e),o=e,i=!Wi(e),l=t.attrs,a=l===void 0?Ei:l,c=t.componentId,u=c===void 0?function(y,A){var N=typeof y!="string"?"sc":Wa(y);qi[N]=(qi[N]||0)+1;var T="".concat(N,"-").concat(Bs(Si+N+qi[N]));return A?"".concat(A,"-").concat(T):T}(t.displayName,t.parentComponentId):c,f=t.displayName,v=f===void 0?function(y){return Wi(y)?"styled.".concat(y):"Styled(".concat(K2(y),")")}(e):f,g=t.displayName&&t.componentId?"".concat(Wa(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var E=o.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;w=function(y,A){return E(y,A)&&I(y,A)}}else w=E}var p=new Sf(n,g,r?o.componentStyle:void 0);function d(y,A){return function(N,T,C){var B=N.attrs,j=N.componentStyle,me=N.defaultProps,Tt=N.foldedComponentIds,At=N.styledComponentId,ie=N.target,Se=et.useContext(Ir),He=Ml(),Be=N.shouldForwardProp||He.shouldForwardProp,_=J0(T,Se,me)||Wn,D=function(Nt,De,dt){for(var ir,Xt=de(de({},De),{className:void 0,theme:dt}),bi=0;bi<Nt.length;bi+=1){var no=dn(ir=Nt[bi])?ir(Xt):ir;for(var kt in no)Xt[kt]=kt==="className"?tn(Xt[kt],no[kt]):kt==="style"?de(de({},Xt[kt]),no[kt]):no[kt]}return De.className&&(Xt.className=tn(Xt.className,De.className)),Xt}(B,T,_),O=D.as||ie,F={};for(var b in D)D[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&D.theme===_||(b==="forwardedAs"?F.as=D.forwardedAs:Be&&!Be(b,O)||(F[b]=D[b]));var Zt=function(Nt,De){var dt=Ml(),ir=Nt.generateAndInjectStyles(De,dt.styleSheet,dt.stylis);return ir}(j,D),Qe=tn(Tt,At);return Zt&&(Qe+=" "+Zt),D.className&&(Qe+=" "+D.className),F[Wi(O)&&!eu.has(O)?"class":"className"]=Qe,F.ref=C,S.createElement(O,F)}(m,y,A)}d.displayName=v;var m=et.forwardRef(d);return m.attrs=x,m.componentStyle=p,m.displayName=v,m.shouldForwardProp=w,m.foldedComponentIds=r?tn(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=g,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(A){for(var N=[],T=1;T<arguments.length;T++)N[T-1]=arguments[T];for(var C=0,B=N;C<B.length;C++)Ol(A,B[C],!0);return A}({},o.defaultProps,y):y}}),bs(m,function(){return".".concat(m.styledComponentId)}),i&&lu(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ec(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var tc=function(e){return Object.assign(e,{isCss:!0})};function $(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(dn(e)||Cr(e))return tc(Mt(ec(Ei,bn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Mt(r):tc(Mt(ec(r,t)))}function $l(e,t,n){if(n===void 0&&(n=Wn),!t)throw fn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,$.apply(void 0,bn([o],i,!1)))};return r.attrs=function(o){return $l(e,t,de(de({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return $l(e,t,de(de({},n),o))},r}var hu=function(e){return $l(Tf,e)},h=hu;eu.forEach(function(e){h[e]=hu(e)});var Af=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pu(t),Uo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Go(Mt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Uo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Nf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$.apply(void 0,bn([e],t,!1)),o="sc-global-".concat(Bs(JSON.stringify(r))),i=new Af(r,o),l=function(c){var u=Ml(),f=et.useContext(Ir),v=et.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(v,c,u.styleSheet,f,u.stylis),et.useLayoutEffect(function(){if(!u.styleSheet.server)return a(v,c,u.styleSheet,f,u.stylis),function(){return i.removeStyles(v,u.styleSheet)}},[v,c,u.styleSheet,f,u.stylis]),null};function a(c,u,f,v,g){if(i.isStatic)i.renderStyles(c,V2,f,g);else{var x=de(de({},u),{theme:J0(u,v,l.defaultProps)});i.renderStyles(c,x,f,g)}}return et.memo(l)}function Ti(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Go($.apply(void 0,bn([e],t,!1))),o=Bs(r);return new uu(o,r)}const oe={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",ORANGE_TRANSPARENT:"#ff853340",BEIGE:"#c8aaa0",LIME:"#00ed28",LIGHT_PURPLE:"#dcbfff"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%);"}},kf=Nf`
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
    scrollbar-color: ${oe.color.LIGHTEST_BROWN} ${oe.color.SLIGHT_DARK_BROWN};
  }
`;var D0,L0;const ee=((L0=(D0=globalThis.browser)==null?void 0:D0.runtime)==null?void 0:L0.id)==null?globalThis.chrome:globalThis.browser,_f=h.nav`
  display: inline-flex;

  height: 36px;
`,Rf=h.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,Cf=h.li`
  display: flex;
  flex-direction: column;
`,If=h.button`
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
`,Df=h.span`
  display: inline-block;

  width: ${({$isSelected:e})=>e?"100%":"0"};
  height: 2px;

  background-color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:e})=>e.color.LEMON};
  }
`,Lf=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],Of=e=>{const{selectedCategory:t,onChange:n}=e;return s.jsx(_f,{children:s.jsx(Rf,{children:Lf.map(({displayName:r,category:o})=>s.jsxs(Cf,{children:[s.jsx(If,{$isSelected:o===t,onClick:()=>{n(o)},children:r}),s.jsx(Df,{$isSelected:o===t})]},r))})})},jf=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,Mf=h.div`
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
`,$f=h.div`
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
`,zf=h.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme:e})=>e.color.DARK_BROWN};

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,Pf=h.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme:e})=>e.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hf=h.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme:e})=>e.color.GOLD};
  }
`,Bf=h.div`
  padding: 16px;

  background-color: ${({theme:e})=>e.color.BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,Ff=h.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,bf=e=>{const{onEscKeyPress:t}=e,n=r=>{r.key==="Escape"&&t()};S.useEffect(()=>(window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}),[t])},gu=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...e},S.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),Gf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),Ai=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),Vf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),Uf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),Wf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),qf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),Yr=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),Ni=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),Kf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),Qf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),Yf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),Zf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),mu=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),Xf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...e},S.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),Jf=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),ep=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},S.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),tp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},S.createElement("g",{fill:"currentColor"},S.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),S.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),np=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...e},S.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),S.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),vu=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),rp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),op=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),ip=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),lp=e=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},S.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"}));var yu={exports:{}},ze={},xu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,D){var O=_.length;_.push(D);e:for(;0<O;){var F=O-1>>>1,b=_[F];if(0<o(b,D))_[F]=D,_[O]=b,O=F;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var D=_[0],O=_.pop();if(O!==D){_[0]=O;e:for(var F=0,b=_.length,Zt=b>>>1;F<Zt;){var Qe=2*(F+1)-1,Nt=_[Qe],De=Qe+1,dt=_[De];if(0>o(Nt,O))De<b&&0>o(dt,Nt)?(_[F]=dt,_[De]=O,F=De):(_[F]=Nt,_[Qe]=O,F=Qe);else if(De<b&&0>o(dt,O))_[F]=dt,_[De]=O,F=De;else break e}}return D}function o(_,D){var O=_.sortIndex-D.sortIndex;return O!==0?O:_.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],f=1,v=null,g=3,x=!1,w=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=_)r(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function y(_){if(E=!1,m(_),!w)if(n(c)!==null)w=!0,He(A);else{var D=n(u);D!==null&&Be(y,D.startTime-_)}}function A(_,D){w=!1,E&&(E=!1,p(C),C=-1),x=!0;var O=g;try{for(m(D),v=n(c);v!==null&&(!(v.expirationTime>D)||_&&!me());){var F=v.callback;if(typeof F=="function"){v.callback=null,g=v.priorityLevel;var b=F(v.expirationTime<=D);D=e.unstable_now(),typeof b=="function"?v.callback=b:v===n(c)&&r(c),m(D)}else r(c);v=n(c)}if(v!==null)var Zt=!0;else{var Qe=n(u);Qe!==null&&Be(y,Qe.startTime-D),Zt=!1}return Zt}finally{v=null,g=O,x=!1}}var N=!1,T=null,C=-1,B=5,j=-1;function me(){return!(e.unstable_now()-j<B)}function Tt(){if(T!==null){var _=e.unstable_now();j=_;var D=!0;try{D=T(!0,_)}finally{D?At():(N=!1,T=null)}}else N=!1}var At;if(typeof d=="function")At=function(){d(Tt)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Se=ie.port2;ie.port1.onmessage=Tt,At=function(){Se.postMessage(null)}}else At=function(){I(Tt,0)};function He(_){T=_,N||(N=!0,At())}function Be(_,D){C=I(function(){_(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,He(A))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var O=g;g=D;try{return _()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=g;g=_;try{return D()}finally{g=O}},e.unstable_scheduleCallback=function(_,D,O){var F=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?F+O:F):O=F,_){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=O+b,_={id:f++,callback:D,priorityLevel:_,startTime:O,expirationTime:b,sortIndex:-1},O>F?(_.sortIndex=O,t(u,_),n(c)===null&&_===n(u)&&(E?(p(C),C=-1):E=!0,Be(y,O-F))):(_.sortIndex=b,t(c,_),w||x||(w=!0,He(A))),_},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(_){var D=g;return function(){var O=g;g=D;try{return _.apply(this,arguments)}finally{g=O}}}})(wu);xu.exports=wu;var sp=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=S,$e=sp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Su=new Set,Dr={};function yn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Dr[e]=t,e=0;e<t.length;e++)Su.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function up(e){return zl.call(rc,e)?!0:zl.call(nc,e)?!1:cp.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fp(e,t,n,r){if(t===null||typeof t>"u"||dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gs,Vs);ge[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gs,Vs);ge[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gs,Vs);ge[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Us(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fp(t,n,o,r)&&(n=null),r||o===null?up(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Ws=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),Eu=Symbol.for("react.provider"),Tu=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),oc=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ki;function gr(e){if(Ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ki=t&&t[1]||""}return`
`+Ki+e}var Qi=!1;function Yi(e,t){if(!e||Qi)return"";Qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{Qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function pp(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=Yi(e.type,!1),e;case 11:return e=Yi(e.type.render,!1),e;case 1:return e=Yi(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Tn:return"Portal";case Pl:return"Profiler";case Ws:return"StrictMode";case Hl:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tu:return(e.displayName||"Context")+".Consumer";case Eu:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===Ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e){var t=Nu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=gp(e))}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ic(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _u(e,t){t=t.checked,t!=null&&Us(e,"checked",t,!1)}function Gl(e,t){_u(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||Wo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(mr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Ru(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,Iu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mp=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){mp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function Du(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function Lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Du(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var vp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,zn=null,Pn=null;function cc(e){if(e=Jr(e)){if(typeof Yl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ii(t),Yl(e.stateNode,e.type,t))}}function Ou(e){zn?Pn?Pn.push(e):Pn=[e]:zn=e}function ju(){if(zn){var e=zn,t=Pn;if(Pn=zn=null,cc(e),t)for(e=0;e<t.length;e++)cc(t[e])}}function Mu(e,t){return e(t)}function $u(){}var Zi=!1;function zu(e,t,n){if(Zi)return e(t,n);Zi=!0;try{return Mu(e,t,n)}finally{Zi=!1,(zn!==null||Pn!==null)&&($u(),ju())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Zl=!1;if(yt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Zl=!1}function yp(e,t,n,r,o,i,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Sr=!1,qo=null,Ko=!1,Xl=null,xp={onError:function(e){Sr=!0,qo=e}};function wp(e,t,n,r,o,i,l,a,c){Sr=!1,qo=null,yp.apply(xp,arguments)}function Sp(e,t,n,r,o,i,l,a,c){if(wp.apply(this,arguments),Sr){if(Sr){var u=qo;Sr=!1,qo=null}else throw Error(k(198));Ko||(Ko=!0,Xl=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uc(e){if(xn(e)!==e)throw Error(k(188))}function Ep(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uc(o),e;if(i===r)return uc(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Hu(e){return e=Ep(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=$e.unstable_scheduleCallback,dc=$e.unstable_cancelCallback,Tp=$e.unstable_shouldYield,Ap=$e.unstable_requestPaint,te=$e.unstable_now,Np=$e.unstable_getCurrentPriorityLevel,Ys=$e.unstable_ImmediatePriority,bu=$e.unstable_UserBlockingPriority,Qo=$e.unstable_NormalPriority,kp=$e.unstable_LowPriority,Gu=$e.unstable_IdlePriority,ki=null,ct=null;function _p(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Ip,Rp=Math.log,Cp=Math.LN2;function Ip(e){return e>>>=0,e===0?32:31-(Rp(e)/Cp|0)|0}var co=64,uo=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=vr(a):(i&=l,i!==0&&(r=vr(i)))}else l=n&~o,l!==0?r=vr(l):i!==0&&(r=vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-nt(i),a=1<<l,c=o[l];c===-1?(!(a&n)||a&r)&&(o[l]=Dp(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function Xi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Op(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wu,Xs,qu,Ku,Qu,es=!1,fo=[],$t=null,zt=null,Pt=null,jr=new Map,Mr=new Map,Dt=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function ar(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Jr(t),t!==null&&Xs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Mp(e,t,n,r,o){switch(t){case"focusin":return $t=ar($t,e,t,n,r,o),!0;case"dragenter":return zt=ar(zt,e,t,n,r,o),!0;case"mouseover":return Pt=ar(Pt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return jr.set(i,ar(jr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mr.set(i,ar(Mr.get(i)||null,e,t,n,r,o)),!0}return!1}function Yu(e){var t=nn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pu(n),t!==null){e.blockedOn=t,Qu(e.priority,function(){qu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=Jr(n),t!==null&&Xs(t),e.blockedOn=n,!1;t.shift()}return!0}function pc(e,t,n){Do(e)&&n.delete(t)}function $p(){es=!1,$t!==null&&Do($t)&&($t=null),zt!==null&&Do(zt)&&(zt=null),Pt!==null&&Do(Pt)&&(Pt=null),jr.forEach(pc),Mr.forEach(pc)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,$p)))}function $r(e){function t(o){return cr(o,e)}if(0<fo.length){cr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&cr($t,e),zt!==null&&cr(zt,e),Pt!==null&&cr(Pt,e),jr.forEach(t),Mr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Yu(n),n.blockedOn===null&&Dt.shift()}var Hn=Et.ReactCurrentBatchConfig,Zo=!0;function zp(e,t,n,r){var o=G,i=Hn.transition;Hn.transition=null;try{G=1,Js(e,t,n,r)}finally{G=o,Hn.transition=i}}function Pp(e,t,n,r){var o=G,i=Hn.transition;Hn.transition=null;try{G=4,Js(e,t,n,r)}finally{G=o,Hn.transition=i}}function Js(e,t,n,r){if(Zo){var o=ts(e,t,n,r);if(o===null)al(e,t,r,Xo,n),fc(e,r);else if(Mp(o,e,t,n,r))r.stopPropagation();else if(fc(e,r),t&4&&-1<jp.indexOf(e)){for(;o!==null;){var i=Jr(o);if(i!==null&&Wu(i),i=ts(e,t,n,r),i===null&&al(e,t,r,Xo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var Xo=null;function ts(e,t,n,r){if(Xo=null,e=Qs(r),e=nn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xo=e,null}function Zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case Ys:return 1;case bu:return 4;case Qo:case kp:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var Ot=null,ea=null,Lo=null;function Xu(){if(Lo)return Lo;var e,t=ea,n=t.length,r,o="value"in Ot?Ot.value:Ot.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Lo=o.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function hc(){return!1}function Pe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?po:hc,this.isPropagationStopped=hc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=Pe(rr),Xr=X({},rr,{view:0,detail:0}),Hp=Pe(Xr),Ji,el,ur,_i=X({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Ji=e.screenX-ur.screenX,el=e.screenY-ur.screenY):el=Ji=0,ur=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:el}}),gc=Pe(_i),Bp=X({},_i,{dataTransfer:0}),Fp=Pe(Bp),bp=X({},Xr,{relatedTarget:0}),tl=Pe(bp),Gp=X({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=Pe(Gp),Up=X({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=Pe(Up),qp=X({},rr,{data:0}),mc=Pe(qp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function na(){return Zp}var Xp=X({},Xr,{key:function(e){if(e.key){var t=Kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jp=Pe(Xp),e3=X({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=Pe(e3),t3=X({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),n3=Pe(t3),r3=X({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),o3=Pe(r3),i3=X({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l3=Pe(i3),s3=[9,13,27,32],ra=yt&&"CompositionEvent"in window,Er=null;yt&&"documentMode"in document&&(Er=document.documentMode);var a3=yt&&"TextEvent"in window&&!Er,Ju=yt&&(!ra||Er&&8<Er&&11>=Er),yc=" ",xc=!1;function ed(e,t){switch(e){case"keyup":return s3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function c3(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(xc=!0,yc);case"textInput":return e=t.data,e===yc&&xc?null:e;default:return null}}function u3(e,t){if(Nn)return e==="compositionend"||!ra&&ed(e,t)?(e=Xu(),Lo=ea=Ot=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var d3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d3[e.type]:t==="textarea"}function nd(e,t,n,r){Ou(r),t=Jo(t,"onChange"),0<t.length&&(n=new ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,zr=null;function f3(e){pd(e,0)}function Ri(e){var t=Rn(e);if(ku(t))return e}function p3(e,t){if(e==="change")return t}var rd=!1;if(yt){var nl;if(yt){var rl="oninput"in document;if(!rl){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),rl=typeof Sc.oninput=="function"}nl=rl}else nl=!1;rd=nl&&(!document.documentMode||9<document.documentMode)}function Ec(){Tr&&(Tr.detachEvent("onpropertychange",od),zr=Tr=null)}function od(e){if(e.propertyName==="value"&&Ri(zr)){var t=[];nd(t,zr,e,Qs(e)),zu(f3,t)}}function h3(e,t,n){e==="focusin"?(Ec(),Tr=t,zr=n,Tr.attachEvent("onpropertychange",od)):e==="focusout"&&Ec()}function g3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(zr)}function m3(e,t){if(e==="click")return Ri(t)}function v3(e,t){if(e==="input"||e==="change")return Ri(t)}function y3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:y3;function Pr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zl.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ac(e,t){var n=Tc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tc(n)}}function id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ld(){for(var e=window,t=Wo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wo(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function x3(e){var t=ld(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&id(n.ownerDocument.documentElement,n)){if(r!==null&&oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ac(n,i);var l=Ac(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w3=yt&&"documentMode"in document&&11>=document.documentMode,kn=null,ns=null,Ar=null,rs=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||kn==null||kn!==Wo(r)||(r=kn,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Pr(Ar,r)||(Ar=r,r=Jo(ns,"onSelect"),0<r.length&&(t=new ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},ol={},sd={};yt&&(sd=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Ci(e){if(ol[e])return ol[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sd)return ol[e]=t[n];return e}var ad=Ci("animationend"),cd=Ci("animationiteration"),ud=Ci("animationstart"),dd=Ci("transitionend"),fd=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){fd.set(e,t),yn(t,[e])}for(var il=0;il<kc.length;il++){var ll=kc[il],S3=ll.toLowerCase(),E3=ll[0].toUpperCase()+ll.slice(1);Kt(S3,"on"+E3)}Kt(ad,"onAnimationEnd");Kt(cd,"onAnimationIteration");Kt(ud,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(dd,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T3=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sp(r,t,void 0,e),e.currentTarget=null}function pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;_c(o,a,u),i=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;_c(o,a,u),i=c}}}if(Ko)throw e=Xl,Ko=!1,Xl=null,e}function q(e,t){var n=t[as];n===void 0&&(n=t[as]=new Set);var r=e+"__bubble";n.has(r)||(hd(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),hd(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[go]){e[go]=!0,Su.forEach(function(n){n!=="selectionchange"&&(T3.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,sl("selectionchange",!1,t))}}function hd(e,t,n,r){switch(Zu(t)){case 1:var o=zp;break;case 4:o=Pp;break;default:o=Js}n=o.bind(null,t,n,e),o=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function al(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;a!==null;){if(l=nn(a),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}a=a.parentNode}}r=r.return}zu(function(){var u=i,f=Qs(n),v=[];e:{var g=fd.get(e);if(g!==void 0){var x=ta,w=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":x=Jp;break;case"focusin":w="focus",x=tl;break;case"focusout":w="blur",x=tl;break;case"beforeblur":case"afterblur":x=tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=n3;break;case ad:case cd:case ud:x=Vp;break;case dd:x=o3;break;case"scroll":x=Hp;break;case"wheel":x=l3;break;case"copy":case"cut":case"paste":x=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=vc}var E=(t&4)!==0,I=!E&&e==="scroll",p=E?g!==null?g+"Capture":null:g;E=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Or(d,p),y!=null&&E.push(Br(d,y,m)))),I)break;d=d.return}0<E.length&&(g=new x(g,w,null,n,f),v.push({event:g,listeners:E}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Ql&&(w=n.relatedTarget||n.fromElement)&&(nn(w)||w[xt]))break e;if((x||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?nn(w):null,w!==null&&(I=xn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(E=gc,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=vc,y="onPointerLeave",p="onPointerEnter",d="pointer"),I=x==null?g:Rn(x),m=w==null?g:Rn(w),g=new E(y,d+"leave",x,n,f),g.target=I,g.relatedTarget=m,y=null,nn(f)===u&&(E=new E(p,d+"enter",w,n,f),E.target=m,E.relatedTarget=I,y=E),I=y,x&&w)t:{for(E=x,p=w,d=0,m=E;m;m=Sn(m))d++;for(m=0,y=p;y;y=Sn(y))m++;for(;0<d-m;)E=Sn(E),d--;for(;0<m-d;)p=Sn(p),m--;for(;d--;){if(E===p||p!==null&&E===p.alternate)break t;E=Sn(E),p=Sn(p)}E=null}else E=null;x!==null&&Rc(v,g,x,E,!1),w!==null&&I!==null&&Rc(v,I,w,E,!0)}}e:{if(g=u?Rn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var A=p3;else if(wc(g))if(rd)A=v3;else{A=g3;var N=h3}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=m3);if(A&&(A=A(e,u))){nd(v,A,n,f);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Vl(g,"number",g.value)}switch(N=u?Rn(u):window,e){case"focusin":(wc(N)||N.contentEditable==="true")&&(kn=N,ns=u,Ar=null);break;case"focusout":Ar=ns=kn=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Nc(v,n,f);break;case"selectionchange":if(w3)break;case"keydown":case"keyup":Nc(v,n,f)}var T;if(ra)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Nn?ed(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ju&&n.locale!=="ko"&&(Nn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Nn&&(T=Xu()):(Ot=f,ea="value"in Ot?Ot.value:Ot.textContent,Nn=!0)),N=Jo(u,C),0<N.length&&(C=new mc(C,e,null,n,f),v.push({event:C,listeners:N}),T?C.data=T:(T=td(n),T!==null&&(C.data=T)))),(T=a3?c3(e,n):u3(e,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(f=new mc("onBeforeInput","beforeinput",null,n,f),v.push({event:f,listeners:u}),f.data=T))}pd(v,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Or(e,n),i!=null&&r.unshift(Br(e,i,o)),i=Or(e,t),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=Or(n,i),c!=null&&l.unshift(Br(n,c,a))):o||(c=Or(n,i),c!=null&&l.push(Br(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var A3=/\r\n?/g,N3=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(A3,`
`).replace(N3,"")}function mo(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(k(425))}function ei(){}var os=null,is=null;function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,k3=typeof clearTimeout=="function"?clearTimeout:void 0,Ic=typeof Promise=="function"?Promise:void 0,_3=typeof queueMicrotask=="function"?queueMicrotask:typeof Ic<"u"?function(e){return Ic.resolve(null).then(e).catch(R3)}:ss;function R3(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);$r(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),at="__reactFiber$"+or,Fr="__reactProps$"+or,xt="__reactContainer$"+or,as="__reactEvents$"+or,C3="__reactListeners$"+or,I3="__reactHandles$"+or;function nn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dc(e);e!==null;){if(n=e[at])return n;e=Dc(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ii(e){return e[Fr]||null}var cs=[],Cn=-1;function Qt(e){return{current:e}}function K(e){0>Cn||(e.current=cs[Cn],cs[Cn]=null,Cn--)}function U(e,t){Cn++,cs[Cn]=e.current,e.current=t}var Wt={},we=Qt(Wt),Re=Qt(!1),pn=Wt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function ti(){K(Re),K(we)}function Lc(e,t,n){if(we.current!==Wt)throw Error(k(168));U(we,t),U(Re,n)}function gd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,hp(e)||"Unknown",o));return X({},n,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,pn=we.current,U(we,e),U(Re,Re.current),!0}function Oc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=gd(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,K(Re),K(we),U(we,e)):K(Re),U(Re,n)}var ht=null,Di=!1,ul=!1;function md(e){ht===null?ht=[e]:ht.push(e)}function D3(e){Di=!0,md(e)}function Yt(){if(!ul&&ht!==null){ul=!0;var e=0,t=G;try{var n=ht;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Di=!1}catch(o){throw ht!==null&&(ht=ht.slice(e+1)),Fu(Ys,Yt),o}finally{G=t,ul=!1}}return null}var In=[],Dn=0,ri=null,oi=0,Fe=[],be=0,hn=null,gt=1,mt="";function Jt(e,t){In[Dn++]=oi,In[Dn++]=ri,ri=e,oi=t}function vd(e,t,n){Fe[be++]=gt,Fe[be++]=mt,Fe[be++]=hn,hn=e;var r=gt;e=mt;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,gt=1<<32-nt(t)+o|n<<o|r,mt=i+e}else gt=1<<i|n<<o|r,mt=e}function ia(e){e.return!==null&&(Jt(e,1),vd(e,1,0))}function la(e){for(;e===ri;)ri=In[--Dn],In[Dn]=null,oi=In[--Dn],In[Dn]=null;for(;e===hn;)hn=Fe[--be],Fe[be]=null,mt=Fe[--be],Fe[be]=null,gt=Fe[--be],Fe[be]=null}var Me=null,je=null,Q=!1,Je=null;function yd(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,je=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:gt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,je=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(Q){var t=je;if(t){var n=t;if(!jc(e,t)){if(us(e))throw Error(k(418));t=Ht(n.nextSibling);var r=Me;t&&jc(e,t)?yd(r,n):(e.flags=e.flags&-4097|2,Q=!1,Me=e)}}else{if(us(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,Me=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function vo(e){if(e!==Me)return!1;if(!Q)return Mc(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ls(e.type,e.memoizedProps)),t&&(t=je)){if(us(e))throw xd(),Error(k(418));for(;t;)yd(e,t),t=Ht(t.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Me?Ht(e.stateNode.nextSibling):null;return!0}function xd(){for(var e=je;e;)e=Ht(e.nextSibling)}function Qn(){je=Me=null,Q=!1}function sa(e){Je===null?Je=[e]:Je.push(e)}var L3=Et.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $c(e){var t=e._init;return t(e._payload)}function wd(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Gt(p,d),p.index=0,p.sibling=null,p}function i(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,y){return d===null||d.tag!==6?(d=vl(m,p.mode,y),d.return=p,d):(d=o(d,m),d.return=p,d)}function c(p,d,m,y){var A=m.type;return A===An?f(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ct&&$c(A)===d.type)?(y=o(d,m.props),y.ref=dr(p,d,m),y.return=p,y):(y=Bo(m.type,m.key,m.props,null,p.mode,y),y.ref=dr(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=yl(m,p.mode,y),d.return=p,d):(d=o(d,m.children||[]),d.return=p,d)}function f(p,d,m,y,A){return d===null||d.tag!==7?(d=un(m,p.mode,y,A),d.return=p,d):(d=o(d,m),d.return=p,d)}function v(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=vl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lo:return m=Bo(d.type,d.key,d.props,null,p.mode,m),m.ref=dr(p,null,d),m.return=p,m;case Tn:return d=yl(d,p.mode,m),d.return=p,d;case Ct:var y=d._init;return v(p,y(d._payload),m)}if(mr(d)||lr(d))return d=un(d,p.mode,m,null),d.return=p,d;yo(p,d)}return null}function g(p,d,m,y){var A=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:return m.key===A?c(p,d,m,y):null;case Tn:return m.key===A?u(p,d,m,y):null;case Ct:return A=m._init,g(p,d,A(m._payload),y)}if(mr(m)||lr(m))return A!==null?null:f(p,d,m,y,null);yo(p,m)}return null}function x(p,d,m,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(d,p,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lo:return p=p.get(y.key===null?m:y.key)||null,c(d,p,y,A);case Tn:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,A);case Ct:var N=y._init;return x(p,d,m,N(y._payload),A)}if(mr(y)||lr(y))return p=p.get(m)||null,f(d,p,y,A,null);yo(d,y)}return null}function w(p,d,m,y){for(var A=null,N=null,T=d,C=d=0,B=null;T!==null&&C<m.length;C++){T.index>C?(B=T,T=null):B=T.sibling;var j=g(p,T,m[C],y);if(j===null){T===null&&(T=B);break}e&&T&&j.alternate===null&&t(p,T),d=i(j,d,C),N===null?A=j:N.sibling=j,N=j,T=B}if(C===m.length)return n(p,T),Q&&Jt(p,C),A;if(T===null){for(;C<m.length;C++)T=v(p,m[C],y),T!==null&&(d=i(T,d,C),N===null?A=T:N.sibling=T,N=T);return Q&&Jt(p,C),A}for(T=r(p,T);C<m.length;C++)B=x(T,p,C,m[C],y),B!==null&&(e&&B.alternate!==null&&T.delete(B.key===null?C:B.key),d=i(B,d,C),N===null?A=B:N.sibling=B,N=B);return e&&T.forEach(function(me){return t(p,me)}),Q&&Jt(p,C),A}function E(p,d,m,y){var A=lr(m);if(typeof A!="function")throw Error(k(150));if(m=A.call(m),m==null)throw Error(k(151));for(var N=A=null,T=d,C=d=0,B=null,j=m.next();T!==null&&!j.done;C++,j=m.next()){T.index>C?(B=T,T=null):B=T.sibling;var me=g(p,T,j.value,y);if(me===null){T===null&&(T=B);break}e&&T&&me.alternate===null&&t(p,T),d=i(me,d,C),N===null?A=me:N.sibling=me,N=me,T=B}if(j.done)return n(p,T),Q&&Jt(p,C),A;if(T===null){for(;!j.done;C++,j=m.next())j=v(p,j.value,y),j!==null&&(d=i(j,d,C),N===null?A=j:N.sibling=j,N=j);return Q&&Jt(p,C),A}for(T=r(p,T);!j.done;C++,j=m.next())j=x(T,p,C,j.value,y),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?C:j.key),d=i(j,d,C),N===null?A=j:N.sibling=j,N=j);return e&&T.forEach(function(Tt){return t(p,Tt)}),Q&&Jt(p,C),A}function I(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===An&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:e:{for(var A=m.key,N=d;N!==null;){if(N.key===A){if(A=m.type,A===An){if(N.tag===7){n(p,N.sibling),d=o(N,m.props.children),d.return=p,p=d;break e}}else if(N.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ct&&$c(A)===N.type){n(p,N.sibling),d=o(N,m.props),d.ref=dr(p,N,m),d.return=p,p=d;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===An?(d=un(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Bo(m.type,m.key,m.props,null,p.mode,y),y.ref=dr(p,d,m),y.return=p,p=y)}return l(p);case Tn:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=o(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=yl(m,p.mode,y),d.return=p,p=d}return l(p);case Ct:return N=m._init,I(p,d,N(m._payload),y)}if(mr(m))return w(p,d,m,y);if(lr(m))return E(p,d,m,y);yo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,m),d.return=p,p=d):(n(p,d),d=vl(m,p.mode,y),d.return=p,p=d),l(p)):n(p,d)}return I}var Yn=wd(!0),Sd=wd(!1),ii=Qt(null),li=null,Ln=null,aa=null;function ca(){aa=Ln=li=null}function ua(e){var t=ii.current;K(ii),e._currentValue=t}function fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){li=e,aa=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(li===null)throw Error(k(308));Ln=e,li.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var rn=null;function da(e){rn===null?rn=[e]:rn.push(e)}function Ed(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,da(t)):(n.next=o.next,o.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,P&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,wt(e,n)}return o=r.interleaved,o===null?(t.next=t,da(r)):(t.next=o.next,o.next=t),r.interleaved=t,wt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function zc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function si(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(i!==null){var v=o.baseState;l=0,f=u=c=null,a=i;do{var g=a.lane,x=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,E=a;switch(g=t,x=n,E.tag){case 1:if(w=E.payload,typeof w=="function"){v=w.call(x,v,g);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,g=typeof w=="function"?w.call(x,v,g):w,g==null)break e;v=X({},v,g);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=x,c=v):f=f.next=x,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(c=v),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);mn|=l,e.lanes=l,e.memoizedState=v}}function Pc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var eo={},ut=Qt(eo),br=Qt(eo),Gr=Qt(eo);function on(e){if(e===eo)throw Error(k(174));return e}function pa(e,t){switch(U(Gr,t),U(br,e),U(ut,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}K(ut),U(ut,t)}function Zn(){K(ut),K(br),K(Gr)}function Ad(e){on(Gr.current);var t=on(ut.current),n=Wl(t,e.type);t!==n&&(U(br,e),U(ut,n))}function ha(e){br.current===e&&(K(ut),K(br))}var Y=Qt(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function ga(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var Mo=Et.ReactCurrentDispatcher,fl=Et.ReactCurrentBatchConfig,gn=0,Z=null,le=null,ue=null,ci=!1,Nr=!1,Vr=0,O3=0;function ve(){throw Error(k(321))}function ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function va(e,t,n,r,o,i){if(gn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mo.current=e===null||e.memoizedState===null?z3:P3,e=n(r,o),Nr){i=0;do{if(Nr=!1,Vr=0,25<=i)throw Error(k(301));i+=1,ue=le=null,t.updateQueue=null,Mo.current=H3,e=n(r,o)}while(Nr)}if(Mo.current=ui,t=le!==null&&le.next!==null,gn=0,ue=le=Z=null,ci=!1,t)throw Error(k(300));return e}function ya(){var e=Vr!==0;return Vr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Ur(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,c=null,u=i;do{var f=u.lane;if((gn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=v,l=r):c=c.next=v,Z.lanes|=f,mn|=f}u=u.next}while(u!==null&&u!==i);c===null?l=r:c.next=a,ot(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,mn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ot(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nd(){}function kd(e,t){var n=Z,r=qe(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,xa(Cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Rd.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(k(349));gn&30||_d(n,t,o)}return o}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rd(e,t,n,r){t.value=n,t.getSnapshot=r,Id(t)&&Dd(e)}function Cd(e,t,n){return n(function(){Id(t)&&Dd(e)})}function Id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Dd(e){var t=wt(e,1);t!==null&&rt(t,e,1,-1)}function Hc(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=$3.bind(null,Z,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ld(){return qe().memoizedState}function $o(e,t,n,r){var o=lt();Z.flags|=e,o.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&ma(r,l.deps)){o.memoizedState=Wr(t,n,i,r);return}}Z.flags|=e,o.memoizedState=Wr(1|t,n,i,r)}function Bc(e,t){return $o(8390656,8,e,t)}function xa(e,t){return Li(2048,8,e,t)}function Od(e,t){return Li(4,2,e,t)}function jd(e,t){return Li(4,4,e,t)}function Md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,Md.bind(null,t,e),n)}function wa(){}function zd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hd(e,t,n){return gn&21?(ot(n,t)||(n=Vu(),Z.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function j3(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=fl.transition;fl.transition={};try{e(!1),t()}finally{G=n,fl.transition=r}}function Bd(){return qe().memoizedState}function M3(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fd(e))bd(t,n);else if(n=Ed(e,t,n,r),n!==null){var o=Te();rt(n,e,r,o),Gd(n,t,r)}}function $3(e,t,n){var r=bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fd(e))bd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ot(a,l)){var c=t.interleaved;c===null?(o.next=o,da(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Ed(e,t,o,r),n!==null&&(o=Te(),rt(n,e,r,o),Gd(n,t,r))}}function Fd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function bd(e,t){Nr=ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var ui={readContext:We,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},z3={readContext:We,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$o(4194308,4,Md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M3.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Hc,useDebugValue:wa,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Hc(!1),t=e[0];return e=j3.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=lt();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),fe===null)throw Error(k(349));gn&30||_d(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Bc(Cd.bind(null,r,i,e),[e]),r.flags|=2048,Wr(9,Rd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(Q){var n=mt,r=gt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},P3={readContext:We,useCallback:zd,useContext:We,useEffect:xa,useImperativeHandle:$d,useInsertionEffect:Od,useLayoutEffect:jd,useMemo:Pd,useReducer:pl,useRef:Ld,useState:function(){return pl(Ur)},useDebugValue:wa,useDeferredValue:function(e){var t=qe();return Hd(t,le.memoizedState,e)},useTransition:function(){var e=pl(Ur)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:kd,useId:Bd,unstable_isNewReconciler:!1},H3={readContext:We,useCallback:zd,useContext:We,useEffect:xa,useImperativeHandle:$d,useInsertionEffect:Od,useLayoutEffect:jd,useMemo:Pd,useReducer:hl,useRef:Ld,useState:function(){return hl(Ur)},useDebugValue:wa,useDeferredValue:function(e){var t=qe();return le===null?t.memoizedState=e:Hd(t,le.memoizedState,e)},useTransition:function(){var e=hl(Ur)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Nd,useSyncExternalStore:kd,useId:Bd,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oi={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=bt(e),i=vt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(rt(t,e,o,r),jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=bt(e),i=vt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(rt(t,e,o,r),jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=bt(e),o=vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(rt(t,e,r,n),jo(t,e,r))}};function Fc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(o,i):!0}function Vd(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Ce(t)?pn:we.current,r=t.contextTypes,i=(r=r!=null)?Kn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oi.enqueueReplaceState(t,t.state,null)}function hs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},fa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Ce(t)?pn:we.current,o.context=Kn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ps(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oi.enqueueReplaceState(o,o.state,null),si(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=pp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B3=typeof WeakMap=="function"?WeakMap:Map;function Ud(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fi||(fi=!0,Ns=r),gs(e,t)},n}function Wd(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){gs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){gs(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B3;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=eh.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var F3=Et.ReactCurrentOwner,_e=!1;function Ee(e,t,n,r){t.child=e===null?Sd(t,null,n,r):Yn(t,e.child,n,r)}function Wc(e,t,n,r,o){n=n.render;var i=t.ref;return Bn(t,o),r=va(e,t,n,r,i,o),n=ya(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(Q&&n&&ia(t),t.flags|=1,Ee(e,t,r,o),t.child)}function qc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ra(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qd(e,t,i,r,o)):(e=Bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=Gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function qd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,St(e,t,o)}return ms(e,t,n,r,o)}function Kd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(jn,Oe),Oe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(jn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(jn,Oe),Oe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(jn,Oe),Oe|=r;return Ee(e,t,o,n),t.child}function Qd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,o){var i=Ce(n)?pn:we.current;return i=Kn(t,i),Bn(t,o),n=va(e,t,n,r,i,o),r=ya(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(Q&&r&&ia(t),t.flags|=1,Ee(e,t,n,o),t.child)}function Kc(e,t,n,r,o){if(Ce(n)){var i=!0;ni(t)}else i=!1;if(Bn(t,o),t.stateNode===null)zo(e,t),Vd(t,n,r),hs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ce(n)?pn:we.current,u=Kn(t,u));var f=n.getDerivedStateFromProps,v=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&bc(t,l,r,u),It=!1;var g=t.memoizedState;l.state=g,si(t,r,l,o),c=t.memoizedState,a!==r||g!==c||Re.current||It?(typeof f=="function"&&(ps(t,n,f,r),c=t.memoizedState),(a=It||Fc(t,n,a,r,g,c,u))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Td(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ze(t.type,a),l.props=u,v=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=We(c):(c=Ce(n)?pn:we.current,c=Kn(t,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||g!==c)&&bc(t,l,r,c),It=!1,g=t.memoizedState,l.state=g,si(t,r,l,o);var w=t.memoizedState;a!==v||g!==w||Re.current||It?(typeof x=="function"&&(ps(t,n,x,r),w=t.memoizedState),(u=It||Fc(t,n,u,r,g,w,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,i,o)}function vs(e,t,n,r,o,i){Qd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Oc(t,n,!1),St(e,t,i);r=t.stateNode,F3.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,i),t.child=Yn(t,null,a,i)):Ee(e,t,a,i),t.memoizedState=r.state,o&&Oc(t,n,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),pa(e,t.containerInfo)}function Qc(e,t,n,r,o){return Qn(),sa(o),t.flags|=256,Ee(e,t,n,r),t.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Y,o&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=$i(l,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xs(n),t.memoizedState=ys,e):Sa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return b3(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Gt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Gt(a,i):(i=un(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?xs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ys,r}return i=e.child,e=i.sibling,r=Gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sa(e,t){return t=$i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&sa(r),Yn(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b3(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(k(422))),xo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$i({mode:"visible",children:r.children},o,0,null),i=un(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yn(t,e.child,null,l),t.child.memoizedState=xs(l),t.memoizedState=ys,i);if(!(t.mode&1))return xo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=gl(i,r,void 0),xo(e,t,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,wt(e,o),rt(r,e,o,-1))}return _a(),r=gl(Error(k(421))),xo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=th.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,je=Ht(o.nextSibling),Me=t,Q=!0,Je=null,e!==null&&(Fe[be++]=gt,Fe[be++]=mt,Fe[be++]=hn,gt=e.id,mt=e.overflow,hn=t),t=Sa(t,r.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fs(e.return,t,n)}function ml(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Xd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ee(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ml(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ml(t,!0,n,null,i);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G3(e,t,n){switch(t.tag){case 3:Yd(t),Qn();break;case 5:Ad(t);break;case 1:Ce(t.type)&&ni(t);break;case 4:pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Zd(e,t,n):(U(Y,Y.current&1),e=St(e,t,n),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,n)}return St(e,t,n)}var Jd,ws,e1,t1;Jd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ws=function(){};e1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(ut.current);var i=null;switch(n){case"input":o=bl(e,o),r=bl(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=Ul(e,o),r=Ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}ql(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&q("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};t1=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function V3(e,t,n){var r=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ce(t.type)&&ti(),ye(t),null;case 3:return r=t.stateNode,Zn(),K(Re),K(we),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Rs(Je),Je=null))),ws(e,t),ye(t),null;case 5:ha(t);var o=on(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)e1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ye(t),null}if(e=on(ut.current),vo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[Fr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<yr.length;o++)q(yr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":ic(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":sc(r,i),q("invalid",r)}ql(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),o=["children",""+a]):Dr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":so(r),lc(r,i,!0);break;case"textarea":so(r),ac(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ei)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[Fr]=r,Jd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<yr.length;o++)q(yr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":ic(e,r),o=bl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),q("invalid",e);break;case"textarea":sc(e,r),o=Ul(e,r),q("invalid",e);break;default:o=r}ql(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Lu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Iu(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Lr(e,c):typeof c=="number"&&Lr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&q("scroll",e):c!=null&&Us(e,i,c,l))}switch(n){case"input":so(e),lc(e,r,!1);break;case"textarea":so(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$n(e,!!r.multiple,i,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)t1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=on(Gr.current),on(ut.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ye(t),null;case 13:if(K(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&t.mode&1&&!(t.flags&128))xd(),Qn(),t.flags|=98560,i=!1;else if(i=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[at]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else Je!==null&&(Rs(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?se===0&&(se=3):_a())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Zn(),ws(e,t),e===null&&Hr(t.stateNode.containerInfo),ye(t),null;case 10:return ua(t.type._context),ye(t),null;case 17:return Ce(t.type)&&ti(),ye(t),null;case 19:if(K(Y),i=t.memoizedState,i===null)return ye(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ai(e),l!==null){for(t.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Jn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return ye(t),null}else 2*te()-i.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=Y.current,U(Y,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function U3(e,t){switch(la(t),t.tag){case 1:return Ce(t.type)&&ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),K(Re),K(we),ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(K(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Y),null;case 4:return Zn(),null;case 10:return ua(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var wo=!1,xe=!1,W3=typeof WeakSet=="function"?WeakSet:Set,R=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ss(e,t,n){try{n()}catch(r){J(e,t,r)}}var Zc=!1;function q3(e,t){if(os=Zo,e=ld(),oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,f=0,v=e,g=null;t:for(;;){for(var x;v!==n||o!==0&&v.nodeType!==3||(a=l+o),v!==i||r!==0&&v.nodeType!==3||(c=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(x=v.firstChild)!==null;)g=v,v=x;for(;;){if(v===e)break t;if(g===n&&++u===o&&(a=l),g===i&&++f===r&&(c=l),(x=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=x}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},Zo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,I=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:Ze(t.type,E),I);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){J(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=Zc,Zc=!1,w}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ss(t,n,i)}o=o.next}while(o!==r)}}function ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Es(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function n1(e){var t=e.alternate;t!==null&&(e.alternate=null,n1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Fr],delete t[as],delete t[C3],delete t[I3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function r1(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}function As(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}var pe=null,Xe=!1;function _t(e,t,n){for(n=n.child;n!==null;)o1(e,t,n),n=n.sibling}function o1(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:xe||On(n,t);case 6:var r=pe,o=Xe;pe=null,_t(e,t,n),pe=r,Xe=o,pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),$r(e)):cl(pe,n.stateNode));break;case 4:r=pe,o=Xe,pe=n.stateNode.containerInfo,Xe=!0,_t(e,t,n),pe=r,Xe=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ss(n,t,l),o=o.next}while(o!==r)}_t(e,t,n);break;case 1:if(!xe&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,_t(e,t,n),xe=r):_t(e,t,n);break;default:_t(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new W3),t.forEach(function(r){var o=nh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,Xe=!1;break e;case 3:pe=a.stateNode.containerInfo,Xe=!0;break e;case 4:pe=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(pe===null)throw Error(k(160));o1(i,l,o),pe=null,Xe=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){J(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)i1(t,e),t=t.sibling}function i1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),it(e),r&4){try{kr(3,e,e.return),ji(3,e)}catch(E){J(e,e.return,E)}try{kr(5,e,e.return)}catch(E){J(e,e.return,E)}}break;case 1:Ye(t,e),it(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ye(t,e),it(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var o=e.stateNode;try{Lr(o,"")}catch(E){J(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&_u(o,i),Kl(a,l);var u=Kl(a,i);for(l=0;l<c.length;l+=2){var f=c[l],v=c[l+1];f==="style"?Lu(o,v):f==="dangerouslySetInnerHTML"?Iu(o,v):f==="children"?Lr(o,v):Us(o,f,v,u)}switch(a){case"input":Gl(o,i);break;case"textarea":Ru(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?$n(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?$n(o,!!i.multiple,i.defaultValue,!0):$n(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fr]=i}catch(E){J(e,e.return,E)}}break;case 6:if(Ye(t,e),it(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){J(e,e.return,E)}}break;case 3:if(Ye(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(E){J(e,e.return,E)}break;case 4:Ye(t,e),it(e);break;case 13:Ye(t,e),it(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Aa=te())),r&4&&Jc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||f,Ye(t,e),xe=u):Ye(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(v=R=f;R!==null;){switch(g=R,x=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:On(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(E){J(r,n,E)}}break;case 5:On(g,g.return);break;case 22:if(g.memoizedState!==null){t0(v);continue}}x!==null?(x.return=g,R=x):t0(v)}f=f.sibling}e:for(f=null,v=e;;){if(v.tag===5){if(f===null){f=v;try{o=v.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,c=v.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Du("display",l))}catch(E){J(e,e.return,E)}}}else if(v.tag===6){if(f===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(E){J(e,e.return,E)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;f===v&&(f=null),v=v.return}f===v&&(f=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ye(t,e),it(e),r&4&&Jc(e);break;case 21:break;default:Ye(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(r1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lr(o,""),r.flags&=-33);var i=Xc(e);As(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Xc(e);Ts(e,a,l);break;default:throw Error(k(161))}}catch(c){J(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K3(e,t,n){R=e,l1(e)}function l1(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||wo;if(!l){var a=o.alternate,c=a!==null&&a.memoizedState!==null||xe;a=wo;var u=xe;if(wo=l,(xe=c)&&!u)for(R=o;R!==null;)l=R,c=l.child,l.tag===22&&l.memoizedState!==null?n0(o):c!==null?(c.return=l,R=c):n0(o);for(;i!==null;)R=i,l1(i),i=i.sibling;R=o,wo=a,xe=u}e0(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):e0(e)}}function e0(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var v=f.dehydrated;v!==null&&$r(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xe||t.flags&512&&Es(t)}catch(g){J(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function t0(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function n0(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ji(4,t)}catch(c){J(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){J(t,o,c)}}var i=t.return;try{Es(t)}catch(c){J(t,i,c)}break;case 5:var l=t.return;try{Es(t)}catch(c){J(t,l,c)}}}catch(c){J(t,t.return,c)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Q3=Math.ceil,di=Et.ReactCurrentDispatcher,Ea=Et.ReactCurrentOwner,Ve=Et.ReactCurrentBatchConfig,P=0,fe=null,re=null,he=0,Oe=0,jn=Qt(0),se=0,qr=null,mn=0,Mi=0,Ta=0,_r=null,ke=null,Aa=0,Jn=1/0,pt=null,fi=!1,Ns=null,Ft=null,So=!1,jt=null,pi=0,Rr=0,ks=null,Po=-1,Ho=0;function Te(){return P&6?te():Po!==-1?Po:Po=te()}function bt(e){return e.mode&1?P&2&&he!==0?he&-he:L3.transition!==null?(Ho===0&&(Ho=Vu()),Ho):(e=G,e!==0||(e=window.event,e=e===void 0?16:Zu(e.type)),e):1}function rt(e,t,n,r){if(50<Rr)throw Rr=0,ks=null,Error(k(185));Zr(e,n,r),(!(P&2)||e!==fe)&&(e===fe&&(!(P&2)&&(Mi|=n),se===4&&Lt(e,he)),Ie(e,r),n===1&&P===0&&!(t.mode&1)&&(Jn=te()+500,Di&&Yt()))}function Ie(e,t){var n=e.callbackNode;Lp(e,t);var r=Yo(e,e===fe?he:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?D3(r0.bind(null,e)):md(r0.bind(null,e)),_3(function(){!(P&6)&&Yt()}),n=null;else{switch(Uu(r)){case 1:n=Ys;break;case 4:n=bu;break;case 16:n=Qo;break;case 536870912:n=Gu;break;default:n=Qo}n=h1(n,s1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function s1(e,t){if(Po=-1,Ho=0,P&6)throw Error(k(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Yo(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hi(e,r);else{t=r;var o=P;P|=2;var i=c1();(fe!==e||he!==t)&&(pt=null,Jn=te()+500,cn(e,t));do try{X3();break}catch(a){a1(e,a)}while(!0);ca(),di.current=i,P=o,re!==null?t=0:(fe=null,he=0,t=se)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=_s(e,o))),t===1)throw n=qr,cn(e,0),Lt(e,r),Ie(e,te()),n;if(t===6)Lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Y3(o)&&(t=hi(e,r),t===2&&(i=Jl(e),i!==0&&(r=i,t=_s(e,i))),t===1))throw n=qr,cn(e,0),Lt(e,r),Ie(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:en(e,ke,pt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=Aa+500-te(),10<t)){if(Yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ss(en.bind(null,e,ke,pt),t);break}en(e,ke,pt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-nt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q3(r/1960))-r,10<r){e.timeoutHandle=ss(en.bind(null,e,ke,pt),r);break}en(e,ke,pt);break;case 5:en(e,ke,pt);break;default:throw Error(k(329))}}}return Ie(e,te()),e.callbackNode===n?s1.bind(null,e):null}function _s(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=hi(e,t),e!==2&&(t=ke,ke=n,t!==null&&Rs(t)),e}function Rs(e){ke===null?ke=e:ke.push.apply(ke,e)}function Y3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~Ta,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function r0(e){if(P&6)throw Error(k(327));Fn();var t=Yo(e,0);if(!(t&1))return Ie(e,te()),null;var n=hi(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=_s(e,r))}if(n===1)throw n=qr,cn(e,0),Lt(e,t),Ie(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,ke,pt),Ie(e,te()),null}function Na(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(Jn=te()+500,Di&&Yt())}}function vn(e){jt!==null&&jt.tag===0&&!(P&6)&&Fn();var t=P;P|=1;var n=Ve.transition,r=G;try{if(Ve.transition=null,G=1,e)return e()}finally{G=r,Ve.transition=n,P=t,!(P&6)&&Yt()}}function ka(){Oe=jn.current,K(jn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k3(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(la(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:Zn(),K(Re),K(we),ga();break;case 5:ha(r);break;case 4:Zn();break;case 13:K(Y);break;case 19:K(Y);break;case 10:ua(r.type._context);break;case 22:case 23:ka()}n=n.return}if(fe=e,re=e=Gt(e.current,null),he=Oe=t,se=0,qr=null,Ta=Mi=mn=0,ke=_r=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function a1(e,t){do{var n=re;try{if(ca(),Mo.current=ui,ci){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ci=!1}if(gn=0,ue=le=Z=null,Nr=!1,Vr=0,Ea.current=null,n===null||n.return===null){se=1,qr=t,re=null;break}e:{var i=e,l=n.return,a=n,c=t;if(t=he,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,v=f.tag;if(!(f.mode&1)&&(v===0||v===11||v===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Vc(l);if(x!==null){x.flags&=-257,Uc(x,l,a,i,t),x.mode&1&&Gc(i,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var E=new Set;E.add(c),t.updateQueue=E}else w.add(c);break e}else{if(!(t&1)){Gc(i,u,t),_a();break e}c=Error(k(426))}}else if(Q&&a.mode&1){var I=Vc(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Uc(I,l,a,i,t),sa(Xn(c,a));break e}}i=c=Xn(c,a),se!==4&&(se=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ud(i,c,t);zc(i,p);break e;case 1:a=c;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ft===null||!Ft.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Wd(i,a,t);zc(i,y);break e}}i=i.return}while(i!==null)}d1(n)}catch(A){t=A,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function c1(){var e=di.current;return di.current=ui,e===null?ui:e}function _a(){(se===0||se===3||se===2)&&(se=4),fe===null||!(mn&268435455)&&!(Mi&268435455)||Lt(fe,he)}function hi(e,t){var n=P;P|=2;var r=c1();(fe!==e||he!==t)&&(pt=null,cn(e,t));do try{Z3();break}catch(o){a1(e,o)}while(!0);if(ca(),P=n,di.current=r,re!==null)throw Error(k(261));return fe=null,he=0,se}function Z3(){for(;re!==null;)u1(re)}function X3(){for(;re!==null&&!Tp();)u1(re)}function u1(e){var t=p1(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?d1(e):re=t,Ea.current=null}function d1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=U3(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=V3(n,t,Oe),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function en(e,t,n){var r=G,o=Ve.transition;try{Ve.transition=null,G=1,J3(e,t,n,r)}finally{Ve.transition=o,G=r}return null}function J3(e,t,n,r){do Fn();while(jt!==null);if(P&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Op(e,i),e===fe&&(re=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,h1(Qo,function(){return Fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=G;G=1;var a=P;P|=4,Ea.current=null,q3(e,n),i1(n,e),x3(is),Zo=!!os,is=os=null,e.current=n,K3(n),Ap(),P=a,G=l,Ve.transition=i}else e.current=n;if(So&&(So=!1,jt=e,pi=o),i=e.pendingLanes,i===0&&(Ft=null),_p(n.stateNode),Ie(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fi)throw fi=!1,e=Ns,Ns=null,e;return pi&1&&e.tag!==0&&Fn(),i=e.pendingLanes,i&1?e===ks?Rr++:(Rr=0,ks=e):Rr=0,Yt(),null}function Fn(){if(jt!==null){var e=Uu(pi),t=Ve.transition,n=G;try{if(Ve.transition=null,G=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,pi=0,P&6)throw Error(k(331));var o=P;for(P|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:kr(8,f,i)}var v=f.child;if(v!==null)v.return=f,R=v;else for(;R!==null;){f=R;var g=f.sibling,x=f.return;if(n1(f),f===u){R=null;break}if(g!==null){g.return=x,R=g;break}R=x}}}var w=i.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,R=p;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ji(9,a)}}catch(A){J(a,a.return,A)}if(a===l){R=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,R=y;break e}R=a.return}}if(P=o,Yt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{G=n,Ve.transition=t}}return!1}function o0(e,t,n){t=Xn(n,t),t=Ud(e,t,1),e=Bt(e,t,1),t=Te(),e!==null&&(Zr(e,1,t),Ie(e,t))}function J(e,t,n){if(e.tag===3)o0(e,e,n);else for(;t!==null;){if(t.tag===3){o0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Xn(n,e),e=Wd(t,e,1),t=Bt(t,e,1),e=Te(),t!==null&&(Zr(t,1,e),Ie(t,e));break}}t=t.return}}function eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(se===4||se===3&&(he&130023424)===he&&500>te()-Aa?cn(e,0):Ta|=n),Ie(e,t)}function f1(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=Te();e=wt(e,t),e!==null&&(Zr(e,t,n),Ie(e,n))}function th(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),f1(e,n)}function nh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),f1(e,n)}var p1;p1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,G3(e,t,n);_e=!!(e.flags&131072)}else _e=!1,Q&&t.flags&1048576&&vd(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zo(e,t),e=t.pendingProps;var o=Kn(t,we.current);Bn(t,n),o=va(null,t,r,e,o,n);var i=ya();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,ni(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fa(t),o.updater=Oi,t.stateNode=o,o._reactInternals=t,hs(t,r,e,n),t=vs(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&ia(t),Ee(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=oh(r),e=Ze(r,e),o){case 0:t=ms(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Wc(null,t,r,e,n);break e;case 14:t=qc(null,t,r,Ze(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),ms(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Kc(e,t,r,o,n);case 3:e:{if(Yd(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Td(e,t),si(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xn(Error(k(423)),t),t=Qc(e,t,r,n,o);break e}else if(r!==o){o=Xn(Error(k(424)),t),t=Qc(e,t,r,n,o);break e}else for(je=Ht(t.stateNode.containerInfo.firstChild),Me=t,Q=!0,Je=null,n=Sd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===o){t=St(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Ad(t),e===null&&ds(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ls(r,o)?l=null:i!==null&&ls(r,i)&&(t.flags|=32),Qd(e,t),Ee(e,t,l,n),t.child;case 6:return e===null&&ds(t),null;case 13:return Zd(e,t,n);case 4:return pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Wc(e,t,r,o,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,U(ii,r._currentValue),r._currentValue=l,i!==null)if(ot(i.value,l)){if(i.children===o.children&&!Re.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=vt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),fs(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),fs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ee(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Bn(t,n),o=We(o),r=r(o),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,o=Ze(r,t.pendingProps),o=Ze(r.type,o),qc(e,t,r,o,n);case 15:return qd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),zo(e,t),t.tag=1,Ce(r)?(e=!0,ni(t)):e=!1,Bn(t,n),Vd(t,r,o),hs(t,r,o,n),vs(null,t,r,!0,e,n);case 19:return Xd(e,t,n);case 22:return Kd(e,t,n)}throw Error(k(156,t.tag))};function h1(e,t){return Fu(e,t)}function rh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new rh(e,t,n,r)}function Ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oh(e){if(typeof e=="function")return Ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Ks)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ra(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case An:return un(n.children,o,i,t);case Ws:l=8,o|=8;break;case Pl:return e=Ge(12,n,t,o|2),e.elementType=Pl,e.lanes=i,e;case Hl:return e=Ge(13,n,t,o),e.elementType=Hl,e.lanes=i,e;case Bl:return e=Ge(19,n,t,o),e.elementType=Bl,e.lanes=i,e;case Au:return $i(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eu:l=10;break e;case Tu:l=9;break e;case qs:l=11;break e;case Ks:l=14;break e;case Ct:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function $i(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=Au,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ih(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xi(0),this.expirationTimes=Xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ca(e,t,n,r,o,i,l,a,c){return e=new ih(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(i),e}function lh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g1(e){if(!e)return Wt;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ce(n))return gd(e,n,t)}return t}function m1(e,t,n,r,o,i,l,a,c){return e=Ca(n,r,!0,e,o,i,l,a,c),e.context=g1(null),n=e.current,r=Te(),o=bt(n),i=vt(r,o),i.callback=t??null,Bt(n,i,o),e.current.lanes=o,Zr(e,o,r),Ie(e,r),e}function zi(e,t,n,r){var o=t.current,i=Te(),l=bt(o);return n=g1(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,l),e!==null&&(rt(e,o,l,i),jo(e,o,l)),l}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function i0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ia(e,t){i0(e,t),(e=e.alternate)&&i0(e,t)}function sh(){return null}var v1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}Pi.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));zi(e,t,null,null)};Pi.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){zi(null,e,null,null)}),t[xt]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Yu(e)}};function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function l0(){}function ah(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=gi(l);i.call(u)}}var l=m1(t,r,e,0,null,!1,!1,"",l0);return e._reactRootContainer=l,e[xt]=l.current,Hr(e.nodeType===8?e.parentNode:e),vn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=gi(c);a.call(u)}}var c=Ca(e,0,!1,null,null,!1,!1,"",l0);return e._reactRootContainer=c,e[xt]=c.current,Hr(e.nodeType===8?e.parentNode:e),vn(function(){zi(t,c,n,r)}),c}function Bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var c=gi(l);a.call(c)}}zi(t,l,e,o)}else l=ah(n,t,e,o,r);return gi(l)}Wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Zs(t,n|1),Ie(t,te()),!(P&6)&&(Jn=te()+500,Yt()))}break;case 13:vn(function(){var r=wt(e,1);if(r!==null){var o=Te();rt(r,e,1,o)}}),Ia(e,1)}};Xs=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Te();rt(t,e,134217728,n)}Ia(e,134217728)}};qu=function(e){if(e.tag===13){var t=bt(e),n=wt(e,t);if(n!==null){var r=Te();rt(n,e,t,r)}Ia(e,t)}};Ku=function(){return G};Qu=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Yl=function(e,t,n){switch(t){case"input":if(Gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ii(r);if(!o)throw Error(k(90));ku(r),Gl(r,o)}}}break;case"textarea":Ru(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};Mu=Na;$u=vn;var ch={usingClientEntryPoint:!1,Events:[Jr,Rn,Ii,Ou,ju,Na]},pr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uh={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hu(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{ki=Eo.inject(uh),ct=Eo}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!La(t))throw Error(k(200));return lh(e,t,null,n)};ze.createRoot=function(e,t){if(!La(e))throw Error(k(299));var n=!1,r="",o=v1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ca(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,Hr(e.nodeType===8?e.parentNode:e),new Da(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Hu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return vn(e)};ze.hydrate=function(e,t,n){if(!Hi(t))throw Error(k(200));return Bi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!La(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=v1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=m1(t,null,e,1,n??null,o,!1,i,l),e[xt]=t.current,Hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Pi(t)};ze.render=function(e,t,n){if(!Hi(t))throw Error(k(200));return Bi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(k(40));return e._reactRootContainer?(vn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};ze.unstable_batchedUpdates=Na;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Bi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function y1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y1)}catch(e){console.error(e)}}y1(),yu.exports=ze;var x1=yu.exports;const to=e=>{const{title:t,open:n,onClose:r,children:o}=e;return bf({onEscKeyPress:r}),n&&x1.createPortal(s.jsxs(jf,{children:[s.jsx(Mf,{onClick:r}),s.jsxs($f,{role:"dialog",children:[s.jsxs(zf,{children:[s.jsx(Pf,{children:t}),s.jsx(Hf,{onClick:r,"aria-label":"모달 닫기",children:s.jsx(Wf,{})})]}),s.jsx(Bf,{children:o})]})]}),document.body)},Fi=e=>{const{children:t}=e;return s.jsx(Ff,{children:t})},dh=h.button`
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
`,fh=h.span`
  font-size: ${({$size:e})=>e==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,ph=h.img`
  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  object-fit: contain;
`,hh=h.div`
  flex-shrink: 0;

  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:e})=>e};
  }
`,ae=e=>{const{name:t,size:n,width:r,color:o,iconSrc:i,ariaLabel:l,...a}=e;return s.jsxs(dh,{$size:n,$width:r,$color:o,"aria-label":l,...a,children:[i&&(typeof i=="string"?s.jsx(ph,{src:i,alt:t,$size:n}):s.jsx(hh,{$size:n,$color:o,children:i})),s.jsx(fh,{$size:n,children:t})]})},gh=h.p`
  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  line-height: 1.2;

  ${({theme:e,$type:t})=>t==="primary"?$`
        color: ${e.color.GOLD};
        font-weight: 600;
      `:t==="semiPrimary"?$`
        color: ${e.color.LEMON};
      `:t==="code"?$`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:$`
      color: ${e.color.WHITE};
    `}
`,V=e=>{const{type:t,fontSize:n,textAlign:r="left",children:o}=e;return s.jsx(gh,{$type:t,$fontSize:n,$textAlign:r,children:o})},mh=h.div`
  width: ${({$width:e})=>e};
  max-width: 100%;
  min-height: ${({$height:e})=>e};
`,qt=e=>{const{title:t,width:n,height:r,open:o,message:i,actionType:l}=e;return s.jsxs(to,{title:t,open:o,onClose:()=>{l==="yesNo"?e.onNoSelect():e.onClose()},children:[s.jsx(mh,{$width:n,$height:r,children:s.jsx(V,{type:"normal",fontSize:"16px",children:i})}),s.jsx(Fi,{children:l==="confirm"?s.jsx(vh,{onClose:e.onClose}):l==="cancelConfirm"?s.jsx(yh,{onClose:e.onClose,onConfirm:e.onConfirm}):s.jsx(xh,{onYesSelect:e.onYesSelect,onNoSelect:e.onNoSelect})})]})},vh=e=>{const{onClose:t}=e;return s.jsx(ae,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(Ni,{}),color:oe.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:t,autoFocus:!0})},yh=e=>{const{onClose:t,onConfirm:n}=e;return s.jsxs(s.Fragment,{children:[s.jsx(ae,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Yr,{}),color:oe.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:t}),s.jsx(ae,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(Ni,{}),color:oe.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:n})]})},xh=e=>{const{onYesSelect:t,onNoSelect:n}=e;return s.jsxs(s.Fragment,{children:[s.jsx(ae,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:s.jsx(Ni,{}),color:oe.color.LIME,disabled:!1,ariaLabel:"예",onClick:t}),s.jsx(ae,{type:"button",name:"아니요",size:"medium",iconSrc:s.jsx(Yr,{}),color:oe.color.RED,disabled:!1,ariaLabel:"아니요",onClick:n})]})},wh=20,Sh=e=>{const{textList:t,typingTime:n,idleTime:r,erasingTime:o}=e,[i,l]=S.useState(""),[a,c]=S.useState(0),[u,f]=S.useState(Date.now()),[v,g]=S.useState(!1),x=n,w=n+r,E=n+r+o;return S.useEffect(()=>{if(!v||t.length===0)return;a>=t.length&&c(m=>Math.min(t.length-1,m));const d=setInterval(()=>{const m=Date.now(),y=m-u;if(y>=E){f(m),c(N=>(N+1)%t.length);return}if(y>=w){const N=t[a].length-Math.ceil((y-w)/o*t[a].length);l(t[a].slice(0,N));return}if(y>=x){l(t[a]);return}const A=Math.ceil(y/n*t[a].length);l(t[a].slice(0,A))},wh);return()=>{clearInterval(d)}},[v,a,u,t,n,r,o]),{currentText:i,startTyping:()=>{f(Date.now()),l(""),c(0),g(!0)},stopTyping:()=>{l(""),c(0),g(!1)}}},Eh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",Th="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",Ah="/assets/lock-with-clock-DphQokL3.png",Nh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",kh="/assets/settings-title-BAsh2fbw.png",_h="/assets/guidebook-button-DB51pF_8.png",Rh="/assets/info-button-gVHj_-G9.png",Ch="/assets/totamjung-BrXdXI1T.png",Ih="/assets/logo-square-Ly45EudP.png",Dh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",Lh=Ti`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Oh=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,jh=h.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:e})=>e.gradient.BROWN_GRADIENT};

  z-index: 0;
`,Mh=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,$h=h.img`
  width: 160px;
`,zh=h.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:e})=>e.color.GOLD};
`,Ph=h.div`
  position: relative;

  text-align: center;
`,Hh=h.span`
  margin: 0 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,Bh=h.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:e})=>e.color.LEMON};

  animation: ${Lh} 0.8s infinite forwards;
`,Fh=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,bh=h.span`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,Gh=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,Vh=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],Uh=e=>{const{open:t,onClose:n}=e,{currentText:r,startTyping:o,stopTyping:i}=Sh({textList:Vh,typingTime:1600,idleTime:3e3,erasingTime:500});return S.useEffect(()=>{if(t){o();return}i()},[t]),s.jsx(to,{title:"토탐정 정보",open:t,onClose:n,children:s.jsxs(Oh,{children:[s.jsx(jh,{}),s.jsxs(Mh,{children:[s.jsx($h,{src:Ih,alt:""}),s.jsx(zh,{children:"토탐정"}),s.jsxs(Ph,{children:[s.jsx(Hh,{children:r}),s.jsx(Bh,{})]})]}),s.jsxs(Fh,{children:[s.jsxs(V,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전:"," ",s.jsx("b",{children:`v${ee.runtime.getManifest().version} - MV${ee.runtime.getManifest().manifest_version}`})," ","/ 2024. 10. 21. 빌드"]}),s.jsxs(V,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",s.jsx("b",{children:"요술토끼"}),"(",s.jsx(bh,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),s.jsxs(Gh,{children:[s.jsx(ae,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:oe.color.LIGHT_PURPLE,iconSrc:Dh,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),s.jsx(ae,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:oe.color.LEMON,iconSrc:s.jsx(ip,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),s.jsx(ae,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:oe.color.WHITE,iconSrc:s.jsx(lp,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]})]})})},Wh="https://github.com/wzrabbit/boj-totamjung/wiki/%ED%86%A0%ED%83%90%EC%A0%95-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",qh=h.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,Kh=h.h1`
  width: 130px;
  height: 100%;
`,Qh=h.img`
  width: 100%;
`,Yh=h.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,Zh=h.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:e})=>e.color.GOLD};
`,s0=h.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,a0=h.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,Xh=e=>{const{selectedCategory:t,onCategoryChange:n}=e,[r,o]=S.useState("none");return s.jsxs(qh,{children:[s.jsx(Kh,{children:s.jsx(Qh,{src:kh,alt:"토탐정 설정"})}),s.jsx(Of,{selectedCategory:t,onChange:n}),s.jsxs(Yh,{children:[s.jsx(Zh,{children:`v${ee.runtime.getManifest().version}`}),s.jsx(s0,{type:"button","aria-label":"도움말",onClick:()=>{o("guidePageOpenConfirm")},children:s.jsx(a0,{src:_h,alt:""})}),s.jsx(s0,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{o("totamjungInfo")},children:s.jsx(a0,{src:Rh,alt:""})})]}),s.jsx(qt,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:r==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(Wh),o("none")},onNoSelect:()=>{o("none")}}),s.jsx(Uh,{open:r==="totamjungInfo",onClose:()=>{o("none")}})]})},Jh=h.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,eg=h.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,tg=h.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:e})=>e.filter.ORANGE_FILTER};
  object-fit: contain;
`,ng=h.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.ORANGE};
  }
`,rg=h.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:e})=>e.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,og=h.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:e})=>e.color.ORANGE_TRANSPARENT};

  z-index: -1;
`,Vt=e=>{const{iconSrc:t,title:n}=e;return s.jsxs(Jh,{children:[s.jsxs(eg,{children:[t&&(typeof t=="string"?s.jsx(tg,{src:t,alt:""}):s.jsx(ng,{children:t})),s.jsx(rg,{children:n})]}),s.jsx(og,{})]})},ig=h.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:e})=>e.color.GOLD};
`,lg=h.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:e})=>e.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,sg=h.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:e})=>e.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,ag=h.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,cg=h.div`
  & svg {
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,ug=h.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:e})=>e.color.WHITE};
`,dg=h.div`
  display: flex;

  user-select: none;
`,c0=h.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,u0=h.img`
  width: 30px;
  height: 30px;
`,d0=h.p`
  font-size: 16px;
  color: ${({theme:e})=>e.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD};
  }
`,fg=h.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,pg=h.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:t})=>t==="brown"?e.color.BROWN:e.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,hg=h.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,gg=h.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.LEMON};

  cursor: pointer;
`,mg=h.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,vg=h.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:e,$isChecked:t})=>t?$`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:$`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,yg=h.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,xg=e=>{const{isChecked:t,ariaLabel:n,onChange:r}=e;return s.jsxs(mg,{children:[s.jsx(yg,{checked:t,"aria-label":n,onChange:r}),s.jsx(vg,{$isChecked:t})]})},wg=e=>{const{id:t,name:n,isChecked:r,backgroundColor:o,onChange:i}=e;return s.jsx(pg,{$backgroundColor:o,children:s.jsxs(hg,{children:[s.jsx(gg,{children:n}),s.jsx(xg,{isChecked:r,onChange:()=>i(t),ariaLabel:n})]})})},Sg=e=>{const{items:t,checkedIds:n,onChange:r}=e;return s.jsx(fg,{children:t.map((o,i)=>s.jsx(wg,{id:o.id,name:o.name,isChecked:n.includes(o.id),backgroundColor:i%2===0?"brown":"light-brown",onChange:r},o.id))})},Kr=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:[]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:[]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:" Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:[]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:[]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:[]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix ARray And Lcp Array",tag:"suffix_array",alias:[]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:["Knuth-Morris-Pratt"]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열: O(n log n)",englishName:"Longest Increasing Sequence In O(n Log N)",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:[]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp","regular expression"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:[]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"키타마사",englishName:"Kitamasa",tag:"kitamasa",alias:[]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 신장 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]}],w1=Kr.length,f0=e=>e.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),S1=e=>{const t=f0(e),n=[];return Kr.forEach(({id:r,name:o,englishName:i,tag:l,alias:a})=>{const c=[o,i,l,...a].map(f=>f0(f));(t===""||c.some(f=>f.indexOf(t)!==-1))&&n.push({id:r,name:o})}),n},Eg={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo",FETCH_SHOULD_SHOW_WELCOME_MESSAGE:"fetchShouldShowWelcomeMessage",SAVE_SHOULD_SHOW_WELCOME_MESSAGE:"saveShouldShowWelcomeMessage"},L={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},Ke=e=>typeof e=="object"&&e!==null,Tg=e=>Ke(e)&&Object.keys(e).every(t=>!isNaN(Number(t))),Ag=e=>Array.isArray(e)&&e.every(t=>typeof t=="number"),Oa=e=>typeof e=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(e),E1=e=>typeof e=="number"&&e%1===0&&e>=0&&e<=31,ln=e=>E1(e)&&e!==31,Ng=e=>E1(e)&&e!==0&&e!==31,T1=e=>Array.isArray(e)?e.every(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):!1,A1=[1,2],N1={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},Cs={hotkey:"Alt",selectedSlotNo:1,slots:N1};({...N1});const k1={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},kg="none",_1=!1,R1=[],_g=0,Rg=[],Cg={[L.DATA_VERSION]:"v1.2",[L.CHECKED_ALGORITHM_IDS]:A1,[L.QUICK_SLOTS]:Cs,[L.TOTAMJUNG_THEME]:kg,[L.HIDER_OPTIONS]:k1,[L.RANDOM_DEFENSE_HISTORY]:R1,[L.IS_TIER_HIDDEN]:_1,[L.FONT_NO]:_g,[L.TIMERS]:Rg,[L.SHOULD_SHOW_WELCOME_MESSAGE]:!1},Ig=e=>Array.isArray(e)?e.filter(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):A1,Dg=async()=>{const t=(await ee.storage.local.get(L.CHECKED_ALGORITHM_IDS))[L.CHECKED_ALGORITHM_IDS];return{checkedIds:Ig(t)}},Lg=e=>{T1(e)&&ee.storage.local.set({[L.CHECKED_ALGORITHM_IDS]:e})},Og=()=>{const[e,t]=S.useState(""),[n,r]=S.useState([]),[o,i]=S.useState(!1);S.useEffect(()=>{(async()=>{const v=await Dg();r(v.checkedIds),i(!0)})()},[]),S.useEffect(()=>{o&&Lg(n)},[n]);const l=v=>{t(v.target.value)},a=v=>{if(n.includes(v)){const x=n.filter(w=>w!==v);r(x);return}const g=[...n,v];r(g)},c=()=>{r(Array.from({length:w1}).map((v,g)=>g+1))},u=()=>{r([])},f=S1(e);return{keyword:e,items:f,checkedIds:n,isLoaded:o,handleChangeKeyword:l,toggleAlgorithm:a,checkAllAlgorithms:c,uncheckAllAlgorithms:u}},ja=()=>{const[e,t]=S.useState(null);return{activeModalName:e,openModal:o=>{t(o)},closeModal:()=>{t(null)}}},jg=()=>{const{keyword:e,items:t,checkedIds:n,isLoaded:r,handleChangeKeyword:o,toggleAlgorithm:i,checkAllAlgorithms:l,uncheckAllAlgorithms:a}=Og(),{activeModalName:c,openModal:u,closeModal:f}=ja();return s.jsxs(ig,{children:[s.jsx(lg,{children:r&&s.jsx(Sg,{items:t,checkedIds:n,onChange:i})}),s.jsxs(sg,{children:[s.jsxs(ag,{children:[s.jsx(cg,{children:s.jsx(gu,{})}),s.jsx(ug,{placeholder:"검색어를 입력해 주세요...",value:e,onChange:o})]}),s.jsxs(dg,{children:[s.jsxs(c0,{type:"button",onClick:()=>{u("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[s.jsx(u0,{src:Eh}),s.jsx(d0,{children:"전체 선택"})]}),s.jsxs(c0,{type:"button",onClick:()=>{u("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[s.jsx(u0,{src:Th}),s.jsx(d0,{children:"전체 해제"})]})]})]}),s.jsx(qt,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:c==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{l(),f()},onNoSelect:f}),s.jsx(qt,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:c==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{a(),f()},onNoSelect:f})]})},Mg=h.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,$g=h.legend`
  font-size: 16px;
  color: ${({theme:e})=>e.color.WHITE};
  margin-bottom: 6px;
`,zg=h.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:e})=>e?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,Pg=h.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,Hg=h.label`
  width: 16px;
  height: 16px;
`,Bg=h.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  ${({theme:e,$checked:t})=>t?$`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:$`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Fg=h.input.attrs({type:"radio"})`
  display: none;
`,bg=e=>{const{checked:t,disabled:n=!1}=e;return s.jsxs(Hg,{children:[s.jsx(Fg,{...e,onChange:()=>{if("value"in e){e.onChange(e.value);return}e.onChange()}}),s.jsx(Bg,{$checked:t,$disabled:n})]})},Mn=e=>{const{legend:t,name:n,options:r,checkedValue:o,disabled:i,isVertical:l=!1,onChange:a}=e;return s.jsxs(Mg,{disabled:i,children:[s.jsx($g,{children:t}),s.jsx(zg,{$isVertical:l,children:r.map(({label:c,value:u})=>s.jsxs(Pg,{children:[s.jsx(bg,{name:n,value:u,checked:u===o,disabled:i,onChange:a}),typeof c=="string"?s.jsx(V,{type:"semiPrimary",fontSize:"16px",children:c}):c]},u))})]})},Gg=h.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,Vg=h.button`
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

  ${({theme:e,$isActivated:t})=>t?$`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:$`
          border: 1.5px solid ${e.color.BROWN};
        `}
`,p0=h.img`
  width: 12px;
  height: auto;
`,h0=h.p`
  font-size: 14px;
  color: ${({theme:e,$tier:t})=>e.solvedAcTier[t]};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,Ug=h.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Wg=h.ul`
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
`,qg=h.li`
  padding: 2px;
`,Kg=h.button`
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
`,Qg=h.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,C1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Yg="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Zg="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Xg="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Jg="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",em="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",tm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",nm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",rm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",om="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",im="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",lm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",sm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",am="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",cm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",um="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",dm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",fm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",pm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",hm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",gm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",mm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",vm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",ym="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",xm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",wm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Sm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Em="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Tm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Am="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Nm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",km="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",_m="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Rm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Cm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Im="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Dm="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Lm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",I1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",Om="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",er={0:C1,1:Yg,2:Zg,3:Xg,4:Jg,5:em,6:tm,7:nm,8:rm,9:om,10:im,11:lm,12:sm,13:am,14:cm,15:um,16:dm,17:fm,18:pm,19:hm,20:gm,21:mm,22:vm,23:ym,24:xm,25:wm,26:Sm,27:Em,28:Tm,29:Am,30:Nm,31:I1},D1={unrated:C1,bronze:km,silver:_m,gold:Rm,platinum:Cm,diamond:Im,ruby:Dm,hidden:Lm,notratable:I1,warn:Om},jm=e=>{const{initSelectedTier:t,onChange:n}=e,[r,o]=S.useState(t),[i,l]=S.useState(!1),a=S.useRef(null);return S.useEffect(()=>{o(t)},[t]),S.useEffect(()=>{const f=a.current;if(!f)return;const v=g=>{g.target instanceof Node&&g.target!==f&&!f.contains(g.target)&&l(!1)};return document.addEventListener("click",v),()=>{document.removeEventListener("click",v)}},[a]),{selectedTier:r,isDropdownOpen:i,updateSelectedTier:f=>{o(f),l(!1),n(f)},openDropdown:()=>{l(!0)},containerRef:a}},Mm=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],xl={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},$m=e=>{const{selectedTier:t,onChange:n}=e,{selectedTier:r,updateSelectedTier:o,isDropdownOpen:i,openDropdown:l,containerRef:a}=jm({initSelectedTier:t,onChange:n});return s.jsxs(Gg,{ref:a,children:[s.jsxs(Vg,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:i,onClick:l,children:[s.jsx(p0,{src:er[r],alt:""}),s.jsx(h0,{$tier:r,$isBold:!0,children:xl[r]}),s.jsx(Ug,{children:s.jsx(Jf,{})})]}),s.jsx(Wg,{$isOpen:i,children:Mm.map(c=>s.jsx(qg,{children:s.jsxs(Kg,{type:"button","aria-label":`${xl[c]}를 경고 시작 티어로 설정하기`,onClick:()=>{o(c)},children:[s.jsx(p0,{src:er[c],alt:""}),s.jsx(h0,{$tier:c,$isBold:c===r,children:xl[c]}),c===r&&s.jsx(Qg,{children:s.jsx(mu,{})})]})},c))})]})},zm=h.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,g0=h.input`
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
`,L1=99,O1=59,j1=/^\d+$/,Pm=e=>j1.test(e)&&Number(e)>=0&&Number(e)<=L1,Hm=e=>j1.test(e)&&Number(e)>=0&&Number(e)<=O1,Bm=e=>{const{initHours:t,initMinutes:n,onChange:r}=e,[o,i]=S.useState(String(t)),[l,a]=S.useState(String(n));return S.useEffect(()=>{i(String(t)),a(String(n))},[t,n]),{hours:o,minutes:l,updateHours:g=>{const x=g.target.value;x.length>=3||i(x)},updateMinutes:g=>{const x=g.target.value;x.length>=3||a(x)},submitHours:()=>{if(!Pm(o)||Number(o)===t){i(String(t));return}i(String(Number(o))),r(Number(o),Number(l))},submitMinutes:()=>{if(!Hm(l)||Number(l)===n){a(String(n));return}a(String(Number(l))),r(Number(o),Number(l))}}},Fm=e=>{const{hours:t,minutes:n,disabled:r,onChange:o}=e,{hours:i,minutes:l,updateHours:a,updateMinutes:c,submitHours:u,submitMinutes:f}=Bm({initHours:t,initMinutes:n,onChange:o});return s.jsxs(zm,{children:[s.jsx("img",{src:Ah,width:"54px",height:"46px",alt:""}),s.jsx(g0,{name:"hours",type:"number",min:0,max:L1,value:i,disabled:r,onChange:a,onBlur:u,"aria-label":"시간"}),s.jsx(V,{type:"normal",fontSize:"16px",children:"시간"}),s.jsx(g0,{name:"minutes",type:"number",min:0,max:O1,value:l,disabled:r,onChange:c,onBlur:f,"aria-label":"분"}),s.jsx(V,{type:"normal",fontSize:"16px",children:"분"})]})},bm=h.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,Gm=h.span`
  font-size: ${({$fontSize:e})=>e};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:e})=>e.color.LEMON};
  }
`,Vm=h.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:e})=>e};
  height: ${({$fontSize:e})=>e};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,M1=e=>{const{href:t,fontSize:n,children:r}=e;return s.jsxs(bm,{href:t,target:"__blank",rel:"noopener",children:[s.jsx(Gm,{$fontSize:n,children:r}),s.jsx(Vm,{$fontSize:n,children:s.jsx(Uf,{})})]})},Ma=e=>{if(!(Ke(e)&&"problemTagLockDuration"in e&&"shouldHideTier"in e&&"shouldWarnHighTier"in e&&"warnTier"in e&&"algorithmHiderUsage"in e&&"problemTagLockUsage"in e&&Ke(e.problemTagLockDuration)&&"hours"in e.problemTagLockDuration&&"minutes"in e.problemTagLockDuration&&typeof e.problemTagLockDuration.hours=="number"&&typeof e.problemTagLockDuration.minutes=="number"&&typeof e.shouldHideTier=="boolean"&&typeof e.shouldWarnHighTier=="boolean"&&Ng(e.warnTier)&&typeof e.algorithmHiderUsage=="string"&&["click","always"].includes(e.algorithmHiderUsage)&&typeof e.problemTagLockUsage=="string"&&["click","auto"].includes(e.problemTagLockUsage)))return!1;const{hours:t,minutes:n}=e.problemTagLockDuration;return t>=0&&t<100&&n>=0&&n<60&&t%1===0&&n%1===0},Um=async()=>{const t=(await ee.storage.local.get(L.HIDER_OPTIONS))[L.HIDER_OPTIONS];return Ma(t)?t:k1},Wm=e=>{Ma(e)&&ee.storage.local.set({[L.HIDER_OPTIONS]:e})},qm={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},Km=()=>{const[e,t]=S.useState({...qm,isLoaded:!1});return S.useEffect(()=>{(async()=>{const c=await Um();t({...c,isLoaded:!0})})()},[]),S.useEffect(()=>{const{isLoaded:c,...u}=e;c&&Wm(u)},[e]),{...e,updateProblemTagLockDuration:(c,u)=>{t(f=>f.isLoaded?{...f,problemTagLockDuration:{hours:c,minutes:u}}:f)},updateShouldHideTier:c=>{const u=c==="true";t(f=>f.isLoaded?{...f,shouldHideTier:u}:f)},updateShouldWarnHighTier:c=>{const u=c==="true";t(f=>f.isLoaded?{...f,shouldWarnHighTier:u}:f)},updateWarnTier:c=>{t(u=>u.isLoaded?{...u,warnTier:c}:u)},updateAlgorithmHiderUsage:c=>{c!=="click"&&c!=="always"||t(u=>u.isLoaded?{...u,algorithmHiderUsage:c}:u)},updateProblemTagLockUsage:c=>{c!=="click"&&c!=="auto"||t(u=>u.isLoaded?{...u,problemTagLockUsage:c}:u)}}},Qm=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,Ym=h.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,Zm=()=>{const{problemTagLockDuration:e,shouldHideTier:t,shouldWarnHighTier:n,warnTier:r,algorithmHiderUsage:o,problemTagLockUsage:i,updateProblemTagLockDuration:l,updateShouldHideTier:a,updateShouldWarnHighTier:c,updateWarnTier:u,updateAlgorithmHiderUsage:f,updateProblemTagLockUsage:v}=Km(),{hours:g,minutes:x}=e;return s.jsxs(Qm,{children:[s.jsx(Vt,{title:"잠금 시간 설정",iconSrc:ee.runtime.getURL("/lock.png")}),s.jsx(Fm,{hours:g,minutes:x,onChange:l}),s.jsx(Vt,{title:"티어 가리개 설정",iconSrc:Nh}),s.jsx(Mn,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:t?"true":t===void 0?"":"false",onChange:a}),s.jsx(Mn,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!t,options:[{label:"사용하지 않음",value:"false"},{label:s.jsxs(Ym,{children:[s.jsx($m,{selectedTier:r,onChange:u}),s.jsx(V,{type:"semiPrimary",fontSize:"16px",children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:n?"true":"false",onChange:c}),s.jsxs(V,{type:"normal",fontSize:"14px",children:["티어 가리개를 사용하기 위해서는 백준의"," ",s.jsx(M1,{href:"https://www.acmicpc.net/setting/view",fontSize:"14px",children:"설정 페이지"}),'에서 [보기] - [solved.ac 티어]가 "보기"로 설정되어 있어야 합니다.']}),s.jsx(Vt,{title:"기본 설정",iconSrc:s.jsx(ep,{})}),s.jsx(Mn,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:o??"",onChange:f}),s.jsx(Mn,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:i??"",onChange:v})]})},Xm=h.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,Jm=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,e4=e=>{const{show:t}=e;return t?s.jsxs(Xm,{children:[s.jsxs(Jm,{children:[s.jsx(Vt,{title:"알고 있는 알고리즘 관리하기",iconSrc:s.jsx(gu,{})}),s.jsx(jg,{})]}),s.jsx(Zm,{})]}):null},t4=h.div`
  display: inline-block;
  position: relative;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  padding: ${({$padding:e})=>e};

  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,n4=h.div`
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
`,$a=e=>{const{width:t,height:n,padding:r,title:o,children:i}=e;return s.jsxs(t4,{$width:t,$height:n,$padding:r,children:[o!==""&&s.jsx(n4,{children:o}),i]})},r4=h.input`
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
`,sn=S.forwardRef((e,t)=>{const{width:n,hasError:r,textAlign:o,ariaLabel:i,...l}=e;return s.jsx(r4,{$width:n,$hasError:r,$textAlign:o,"aria-label":i,spellCheck:!1,ref:t,...l})}),o4=h.textarea`
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
`,$1=S.forwardRef((e,t)=>{const{width:n,height:r,hasError:o,ariaLabel:i,...l}=e;return s.jsx(o4,{$width:n,$height:r,$hasError:o,spellCheck:!1,"aria-label":i,ref:t,...l})}),wl=e=>`${Number(e.slice(0,2))+3}px`,i4=h.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:e})=>wl(e)};
  height: ${({$height:e})=>e===void 0?"auto":e};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:e})=>wl(e)};
    height: ${({$fontSize:e})=>wl(e)};

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,l4=h.p`
  font-size: ${({$fontSize:e})=>e};

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,z1=e=>{const{fontSize:t,errorMessage:n,height:r}=e;return s.jsx(i4,{$fontSize:t,$height:r,children:n!==""&&s.jsxs(s.Fragment,{children:[s.jsx(Zf,{}),s.jsx(l4,{$fontSize:t,role:"alert",children:n})]})})},P1=h.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,H1=$`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
`,s4=h.div`
  ${H1}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${P1}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,a4=h.div`
  ${H1}

  bottom: 0;
`,c4=h.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:e})=>e.filter.DARK_ORANGE_FILTER};
`,u4=h.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,d4=h.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:e})=>e.color.ORANGE};
`,f4=h.p`
  font-size: 12px;
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,p4=e=>{const{selectedSlotNo:t,isLoaded:n,onClick:r}=e;return s.jsxs(P1,{type:"button","aria-label":`${t}번 슬롯에 추첨 생성하기`,onClick:r,disabled:!n,children:[s.jsxs(s4,{children:[s.jsx(c4,{src:ee.runtime.getURL("/dice.png"),alt:""}),s.jsxs(u4,{children:[s.jsx(d4,{children:"추첨 생성"}),s.jsx(f4,{children:n?`슬롯 번호 − ${t}`:"로딩 중..."})]})]}),s.jsx(a4,{})]})},h4=h.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,B1=$`
  width: 50%;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:e})=>e.color.LIGHTER_BROWN};

  transition: 0.2s;
`,g4=h.button`
  ${B1}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:e})=>e?$`
          border-color: ${({theme:t})=>t.color.MAGENTA};
          background-color: ${({theme:t})=>t.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:t})=>t.color.MAGENTA};

          color: ${({theme:t})=>t.color.WHITE};
        `:$`
          &:hover {
            border-color: ${({theme:t})=>t.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:t})=>t.color.MAGENTA};

            color: ${({theme:t})=>t.color.MAGENTA};
          }
        `}
`,m4=h.button`
  ${B1}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:e})=>e?$`
          border-color: ${({theme:t})=>t.color.AZURE_BLUE};
          background-color: ${({theme:t})=>t.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:t})=>t.color.AZURE_BLUE};

          color: ${({theme:t})=>t.color.WHITE};
        `:$`
          &:hover {
            border-color: ${({theme:t})=>t.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:t})=>t.color.AZURE_BLUE};

            color: ${({theme:t})=>t.color.AZURE_BLUE};
          }
        `}
`,v4=h.span`
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
`,y4=e=>{const{mode:t,onClick:n}=e;return s.jsxs(h4,{children:[s.jsx(g4,{type:"button",$isActivated:t==="easy",onClick:()=>{n("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),s.jsx(m4,{type:"button",$isActivated:t==="manual",onClick:()=>{n("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),s.jsx(v4,{children:"OR"})]})},x4=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,w4=h.div`
  display: flex;
  justify-content: space-around;
`,Sl=31,S4=h.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,E4=h.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:Sl}).map((t,n)=>ln(n)?`${e.solvedAcTier[n]} ${n/Sl*100}%, ${e.solvedAcTier[n]} ${(n+1)/Sl*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,m0=h.input`
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
`,T4=e=>{const{startTier:t,endTier:n,onChange:r}=e;return s.jsxs(S4,{children:[s.jsx(E4,{}),s.jsx(m0,{type:"range",min:0,max:30,value:t,"aria-label":"시작 범위 티어 설정하기",onChange:o=>{const i=Number(o.target.value),l=Math.max(Number(i),n);ln(i)&&ln(l)&&r(i,l)}}),s.jsx(m0,{type:"range",min:0,max:30,value:n,"aria-label":"끝 범위 티어 설정하기",onChange:o=>{const i=Number(o.target.value),l=Math.min(Number(i),t);ln(l)&&ln(i)&&r(l,i)}})]})},A4=h.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,v0=h.img`
  width: 26px;
`,N4=h.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`,k4=e=>{const{startTier:t,endTier:n}=e;return s.jsxs(A4,{children:[s.jsx(v0,{src:er[t],alt:"",draggable:!1}),s.jsx(N4,{children:"~"}),s.jsx(v0,{src:er[n],alt:"",draggable:!1})]})},_4=h.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,y0=(e,t)=>t==="bronze"?e.solvedAcTier.BRONZE:t==="silver"?e.solvedAcTier.SILVER:t==="gold"?e.solvedAcTier.GOLD:t==="platinum"?e.solvedAcTier.PLATINUM:t==="diamond"?e.solvedAcTier.DIAMOND:t==="ruby"?e.solvedAcTier.RUBY:e.color.GRAY,R4=h.li`
  width: 32px;
  height: 32px;
`,C4=h.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:e,$rank:t})=>y0(e,t)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:e,$rank:t})=>`linear-gradient(to top, ${y0(e,t)}70 0%, transparent 100%)`};
  }
`,I4=h.img`
  width: 16px;
`;h.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`;const D4={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},x0={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},L4=e=>{const{rank:t,onClick:n}=e;return s.jsx(R4,{children:s.jsx(C4,{type:"button",$rank:t,"aria-label":D4[t],onClick:()=>{n(x0.START[t],x0.END[t])},children:s.jsx(I4,{src:D1[t],alt:""})})})},O4=["unrated","bronze","silver","gold","platinum","diamond","ruby"],j4=e=>{const{onClick:t}=e;return s.jsx(_4,{children:O4.map(n=>s.jsx(L4,{rank:n,onClick:t},n))})},M4=e=>{const{startTier:t,endTier:n,onChange:r}=e;return s.jsxs(x4,{children:[s.jsx(T4,{startTier:t,endTier:n,onChange:r}),s.jsxs(w4,{children:[s.jsx(k4,{startTier:t,endTier:n}),s.jsx(j4,{onClick:r})]})]})},$4=h.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,z4=h.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,P4=Ti`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,H4=h.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${P4} 0.15s forwards;
  }
`,B4=h.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:t})=>t?e.color.GOLD:e.color.LIGHT_GRAY};
`,F4=["OR","AND","NOR"],b4=e=>{const{searchOperator:t,onClick:n}=e;return s.jsx($4,{children:F4.map(r=>s.jsxs(z4,{children:[r===t&&s.jsx(H4,{children:s.jsx(mu,{})}),s.jsx(B4,{type:"button","aria-label":`알고리즘 검색 옵션을 ${r}로 설정하기`,$isSelected:r===t,onClick:()=>{n(r)},children:r})]},r))})},G4=h.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:e,$isOpen:t})=>t&&$`
      & > ul {
        border-color: ${e.color.LEMON};
        box-shadow: 0 0 12px ${e.color.GOLD}70;
      }
    `}
`,F1=$`
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
`,V4=h.ul`
  ${F1}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,U4=h.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:e})=>!e&&$`
      opacity: 0;
    `}

  ${({theme:e,$isOpen:t})=>t&&$`
      border-color: ${e.color.LEMON};
      outline: 3px solid ${e.color.LEMON}70;
    `}
`,W4=h.ul`
  ${F1}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,q4=h.li`
  display: inline-block;

  height: 26px;
`,K4=h.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,Q4=h.p`
  overflow: hidden;

  color: ${({theme:e})=>e.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Y4=h.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LEMON};
  }
`,w0=e=>{const{id:t,name:n,mode:r,onClick:o}=e;return s.jsx(q4,{children:s.jsxs(K4,{type:"button","aria-label":r==="add"?`${n}을 검색에 포함할 알고리즘 목록에 추가하기`:`${n}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{o(t)},children:[s.jsx(Q4,{children:n}),r==="delete"&&s.jsx(Y4,{children:s.jsx(qf,{})})]})})},Z4=0,X4=30,J4=1e3,ev=99999,tv=500,b1=300,Is=5,Ds=30,nv=/^\w{3,20}$/,To=1e8,S0=/^([1-9][0-9]*|0)$/,Ls=300,rv=e=>{const{selectedAlgorithmIds:t,onChange:n}=e,[r,o]=S.useState(!1),[i,l]=S.useState(""),a=S.useRef(null),c=S.useRef(null),u=w=>{l(w.target.value)},f=t.length<Is?S1(i).filter(({id:w})=>!t.includes(w)).map(({id:w})=>w):[],v=w=>{if(w.key==="Enter"){if(f.length===0)return;n([...t,f[0]]),l("")}if(w.key==="Backspace"){if(i!=="")return;n(t.slice(0,-1))}},g=w=>{n([...t,w]),l("")},x=w=>{n(t.filter(E=>E!==w))};return S.useEffect(()=>{const w=a.current,E=c.current;if(!w||!E)return;const I=m=>{const y=m.target;!y||!(y instanceof Node)||o(w.contains(y))},p=()=>{document.activeElement!==document.body&&o(w.contains(document.activeElement))},d=()=>{E.focus()};return document.addEventListener("mousedown",I),document.addEventListener("focusin",p),document.addEventListener("focusout",p),w.addEventListener("click",d),()=>{document.removeEventListener("mousedown",I),document.removeEventListener("focusin",p),document.removeEventListener("focusout",p),w.removeEventListener("click",d)}},[a,c]),{isOpen:r,inputValue:i,searchedAlgorithmIds:f,updateInputValue:u,processActionIfKeyPress:v,addAlgorithmId:g,deleteAlgorithmId:x,containerRef:a,inputRef:c}},ov=e=>{const{selectedAlgorithmIds:t,onChange:n}=e,{isOpen:r,inputValue:o,searchedAlgorithmIds:i,updateInputValue:l,processActionIfKeyPress:a,addAlgorithmId:c,deleteAlgorithmId:u,containerRef:f,inputRef:v}=rv({selectedAlgorithmIds:t,onChange:n});return s.jsxs(G4,{ref:f,$isOpen:r,tabIndex:-1,children:[s.jsx(V4,{tabIndex:-1,children:s.jsxs(s.Fragment,{children:[t.map(g=>{const x=Kr.find(({id:E})=>E===g),w=x?x.name:"";return s.jsx(w0,{mode:"delete",id:g,name:w,onClick:u},g)}),s.jsx(U4,{ref:v,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:r,value:o,onChange:l,onKeyDown:a})]})}),s.jsx(W4,{$isOpen:r,tabIndex:-1,children:i.map(g=>{const x=Kr.find(({id:E})=>E===g),w=x?x.name:"";return s.jsx(w0,{mode:"add",id:g,name:w,onClick:c},g)})})]})},iv=e=>Ke(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&Ag(e.algorithmIds)&&ln(e.startTier)&&ln(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",lv=e=>{const{mode:t,title:n,handle:r,solvedMin:o,solvedMax:i,startTier:l,endTier:a,algorithmIds:c,customQuery:u}=e,f=t==="easy"?[E0(n),sv(r),av(o,i),cv(l,a),uv(c)]:[E0(n),dv(u)];for(let v=0;v<f.length;v++){const g=f[v];if(!g.isValid)return g}return{isValid:!0}},E0=e=>e.length>Ds?{isValid:!1,errorMessage:`추첨 이름은 ${Ds}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},sv=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:nv.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},av=(e,t)=>{const n=Number(e),r=Number(t),o=e.trim()==="",i=t.trim()==="";return!o&&!S0.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!i&&!S0.test(t)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!o&&n>To?{isValid:!1,errorMessage:`맞은 사람 수는 ${To.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!i&&r>To?{isValid:!1,errorMessage:`맞은 사람 수는 ${To.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!o&&!i&&n>r?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},cv=(e,t)=>{const n=Number(e),r=Number(t);return n>r?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},uv=e=>e.length>Is?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${Is.toLocaleString()}개 이하여야 해요.`}:e.every(n=>typeof n=="number"&&n%1===0&&n>=1&&n<=w1)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},dv=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>Ls?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Ls}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},fv=e=>{const{mode:t,handle:n,solvedMin:r,solvedMax:o,startTier:i,endTier:l,searchOperator:a,algorithmIds:c,customQuery:u}=e;if(t==="manual")return u.replace(/\n/g," ").trim();const f=pv(c),v=hv(a),g=n.trim()!=="",x=r.trim()!==""||o.trim()!=="",w=f.length>0,E=g?`~@${n} `:"",I=x?`s#${r}..${o} `:"",p=i===l?`*${i} `:`*${i}..${l} `,d=w?`(${v==="-"?"-":""}${f.join(v)})`:"";return`(*0&!s?|!*0) o? -w? ${E}${I}${p}${d}`.trim()},pv=e=>{const t=[];return e.forEach(n=>{var o;const r=(o=Kr.find(i=>i.id===n))==null?void 0:o.tag;r&&t.push(`#${r}`)}),t},hv=e=>e==="OR"?"|":e==="AND"?"&":"-",T0={mode:"easy",title:"",handle:"",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},gv=e=>{const{selectedSlotNo:t,onSubmit:n}=e,[r,o]=S.useState(T0),[i,l]=S.useState(""),[a,c]=S.useState(void 0),{mode:u,title:f,handle:v,solvedMin:g,solvedMax:x,startTier:w,endTier:E,searchOperator:I,algorithmIds:p,customQuery:d}=r,m=S.useRef(null),y=S.useRef(null),A=S.useRef(null),N=S.useRef(null),T=S.useRef(null);return{mode:u,title:f,handle:v,solvedMin:g,solvedMax:x,startTier:w,endTier:E,searchOperator:I,algorithmIds:p,customQuery:d,errorMessage:i,errorElementName:a,setMode:ie=>{o(Se=>({...Se,mode:ie})),l(""),c(void 0)},setRandomDefenseInputValue:ie=>{const{name:Se,value:He}=ie.target;Se in T0&&o(Be=>({...Be,[Se]:He}))},setTierRange:(ie,Se)=>{o(He=>({...He,startTier:ie,endTier:Se}))},setSearchOperator:ie=>{o(Se=>({...Se,searchOperator:ie}))},setAlgorithmIds:ie=>{o(Se=>({...Se,algorithmIds:ie}))},submitRandomDefense:()=>{var He,Be,_,D,O;if(!iv(r))return;const ie=lv(r);if(ie.isValid){const F=r.title.trim()===""?`추첨 ${t}`:r.title,b=fv(r);n(F,b),l(""),c(void 0);return}switch(l(ie.errorMessage),c(ie.focusElementName),ie.focusElementName){case"title":(He=m.current)==null||He.select();break;case"handle":(Be=y.current)==null||Be.select();break;case"solvedMin":(_=A.current)==null||_.select();break;case"solvedMax":(D=N.current)==null||D.select();break;case"customQuery":(O=T.current)==null||O.select();break}},titleRef:m,handleRef:y,solvedMinRef:A,solvedMaxRef:N,customQueryRef:T}},mv=h.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 6px;

  z-index: 1;
`,vv=h.div`
  position: absolute;
  top: -32px;
  right: 0;
`,yv=h.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,A0=h.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,El=h.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Tl=h.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,xv=h.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,wv=h.div`
  display: flex;
  justify-content: center;
`,Sv=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Ev=h.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,Tv=e=>{const{selectedSlotNo:t,isLoaded:n,onSubmit:r}=e,{mode:o,title:i,handle:l,solvedMin:a,solvedMax:c,startTier:u,endTier:f,searchOperator:v,algorithmIds:g,customQuery:x,errorMessage:w,errorElementName:E,setMode:I,setRandomDefenseInputValue:p,setTierRange:d,setSearchOperator:m,setAlgorithmIds:y,submitRandomDefense:A,titleRef:N,handleRef:T,solvedMinRef:C,solvedMaxRef:B,customQueryRef:j}=gv({selectedSlotNo:t,onSubmit:r});return s.jsx($a,{width:"650px",height:"357px",padding:"10px",title:"추첨 만들기",children:s.jsxs(mv,{children:[s.jsx(vv,{children:s.jsx(z1,{errorMessage:w,fontSize:"14px"})}),s.jsx(yv,{children:s.jsx(y4,{mode:o,onClick:I})}),s.jsxs(El,{$width:"380px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"추첨 이름"}),s.jsx(sn,{ref:N,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:i,maxLength:30,hasError:E==="title",onChange:p})]}),o==="easy"?s.jsxs(s.Fragment,{children:[s.jsxs(A0,{$columnGap:"30px",children:[s.jsxs(El,{$width:"190px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),s.jsx(sn,{ref:T,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:l,minLength:3,maxLength:20,hasError:E==="handle",onChange:p})]}),s.jsxs(Tl,{$width:"166px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),s.jsxs(xv,{children:[s.jsx(sn,{ref:C,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:a,hasError:E==="solvedMin",onChange:p}),s.jsx(V,{type:"primary",fontSize:"16px",children:"~"}),s.jsx(sn,{ref:B,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:c,hasError:E==="solvedMax",onChange:p})]})]})]}),s.jsxs(Tl,{$width:"100%",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"난이도 범위"}),s.jsx(wv,{children:s.jsx(M4,{startTier:u,endTier:f,onChange:d})})]}),s.jsxs(Tl,{$width:"446px",children:[s.jsxs(A0,{$columnGap:"110px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),s.jsx(b4,{searchOperator:v,onClick:m})]}),s.jsx(ov,{selectedAlgorithmIds:g,onChange:me=>{y(me)}})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(El,{$width:"100%",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"쿼리"}),s.jsx($1,{ref:j,width:"100%",height:"160px",name:"customQuery",value:x,placeholder:"1 ~ 300자",minLength:1,maxLength:300,hasError:E==="customQuery",ariaLabel:"쿼리",onChange:p})]}),s.jsxs(Sv,{children:[s.jsxs(V,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",s.jsx(M1,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),s.jsx(V,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),s.jsx(Ev,{children:s.jsx(p4,{isLoaded:n,selectedSlotNo:t,onClick:A})})]})})},Av=h.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,Nv=h.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,kv=h.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,_v=h.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,Rv=h.li`
  width: 26px;
  height: 26px;
`,Cv=h.button`
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

  ${({theme:e,$isSelected:t,$isOccupied:n})=>{if(t)return $`
        border-color: ${e.color.LEMON};
        background-color: ${e.color.LEMON};
        outline: 3px solid ${e.color.LEMON}70;

        color: ${e.color.DARK_BROWN};
      `;if(n)return $`
        border-color: ${e.color.GOLD};

        color: ${e.color.GOLD};
      `}}
`,Iv=[1,2,3,4,5,6,7,8,9,0],Dv=e=>{const{selectedSlotNo:t,occupiedSlotNos:n,onChange:r}=e;return s.jsx(_v,{children:Iv.map(o=>s.jsx(Rv,{children:s.jsx(Cv,{$isSelected:o===t,$isOccupied:n.includes(o),onClick:()=>{r(o)},"aria-label":`${o}번 슬롯 선택하기. ${o===t?"이미 선택되어 있는 슬롯입니다":""}`,children:o})},o))})},Lv=h.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,Ov=h.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,jv=h.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,N0=h.span`
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
`,Mv=h.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 16px;
`,$v=h.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 14px;
`,G1=$`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,zv=h.div`
  ${G1}

  white-space: nowrap;
`,Pv=h.div`
  ${G1}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,Hv=e=>s.jsxs(Lv,{children:[s.jsxs(Ov,{children:[s.jsx(N0,{$backgroundColor:"gold",children:"추첨 이름"}),s.jsx(zv,{children:e.isEmpty?s.jsx(Mv,{children:"(비어 있음)"}):s.jsx(V,{type:"primary",fontSize:"16px",children:e.title})})]}),s.jsxs(jv,{children:[s.jsx(N0,{$backgroundColor:"white",children:"쿼리"}),s.jsx(Pv,{children:e.isEmpty?s.jsx($v,{children:"(비어 있음)"}):s.jsx(V,{type:"code",fontSize:"13px",children:e.query})})]})]}),Bv=h.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,Fv=h.button`
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
`,bv=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,Gv=e=>{const{selectedSlotNo:t,hotkey:n,onClick:r}=e;return s.jsxs(Bv,{children:[s.jsx(V,{type:"primary",fontSize:"16px",children:`단축키: ${n==="Alt"?bv?"Option":"Alt":"F2"} + ${t}`}),s.jsx(Fv,{"aria-label":"단축키 전환하기",onClick:r,children:s.jsx(Kf,{})})]})},Vv=[1,2,3,4,5,6,7,8,9,0],Uv=e=>{const{quickSlotsInfo:t,isLoaded:n,onHotkeyChange:r,onSlotChange:o,onSlotDelete:i,onSlotNoChange:l}=e,{selectedSlotNo:a,slots:c,hotkey:u}=t,[f,v]=S.useState(!1),g=()=>{n&&r(u==="Alt"?"F2":"Alt")},x=()=>{const y=[];return Vv.forEach(A=>{c[A].isEmpty||y.push(A)}),y},w=()=>{v(!0)},E=()=>{v(!1)},I=(y,A)=>{if(!n)return;const N=y.trim()===""?`추첨 ${a}`:y;o(N,A),E()},p=()=>{n&&i()},d=y=>{l(y)};return{slot:c[a],selectedSlotNo:a,hotkey:u,occupiedSlotNos:x(),shouldEditModalShow:f,switchHotkey:g,openEditModal:w,closeEditModal:E,updateSlot:I,deleteSlot:p,setSelectedSlotNo:d}},Wv=(e,t)=>e.length>30?{isValid:!1,errorMessage:"추첨 이름의 길이가 너무 길어요. 30자 이하가 되도록 줄여 주세요.",focusElementName:"title"}:t.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:t.length>300?{isValid:!1,errorMessage:"쿼리의 길이가 너무 길어요. 300자 이하가 되도록 줄여 주세요.",focusElementName:"query"}:{isValid:!0},qv=e=>{const{initTitle:t,initQuery:n,onSlotChange:r}=e,[o,i]=S.useState(t),[l,a]=S.useState(n),[c,u]=S.useState(""),[f,v]=S.useState(void 0),g=S.useRef(null),x=S.useRef(null);return S.useEffect(()=>{i(t),a(n),u(""),v(void 0)},[t,n]),{title:o,query:l,errorMessage:c,isTitleElementHasErrors:f==="title",isQueryElementHasErrors:f==="query",setQuery:a,setTitle:i,submitSlotInfo:()=>{const p=Wv(o,l);if(p.isValid){r(o,l),u("");return}const d=g.current,m=x.current,{focusElementName:y}=p;y==="title"&&(d==null||d.select()),y==="query"&&(m==null||m.select()),v(y),u(p.errorMessage)},titleRef:g,queryRef:x}},Kv=h.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 270px;
`,k0=h.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,Qv=e=>{const{title:t,query:n,open:r,onClose:o,onSlotChange:i}=e,{title:l,query:a,errorMessage:c,isTitleElementHasErrors:u,isQueryElementHasErrors:f,setQuery:v,setTitle:g,submitSlotInfo:x,titleRef:w,queryRef:E}=qv({initTitle:t,initQuery:n,onSlotChange:i});return s.jsxs(to,{title:"추첨 수정",open:r,onClose:o,children:[s.jsxs(Kv,{children:[s.jsxs(k0,{children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"추첨 이름"}),s.jsx(sn,{type:"text",width:"100%",name:"title",value:l,ref:w,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:u,ariaLabel:"새로운 추첨 이름을 입력해주세요",onChange:I=>{g(I.target.value)}})]}),s.jsxs(k0,{children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"쿼리"}),s.jsx($1,{width:"100%",height:"150px",name:"query",value:a,ref:E,maxLength:300,placeholder:"1 ~ 300자",hasError:f,ariaLabel:"새로운 쿼리를 입력해주세요",onChange:I=>{v(I.target.value)}})]}),s.jsx(z1,{fontSize:"14px",errorMessage:c})]}),s.jsxs(Fi,{children:[s.jsx(ae,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Yr,{}),color:oe.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:o}),s.jsx(ae,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(Ni,{}),color:oe.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:x})]})]})},Yv=Ti`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,Zv=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${Yv} 2s forwards infinite linear;
  }
`,Xv=()=>s.jsx(Zv,{children:s.jsx(Xf,{})}),Jv=e=>{const{isLoaded:t}=e,{activeModalName:n,openModal:r,closeModal:o}=ja(),{slot:i,selectedSlotNo:l,hotkey:a,occupiedSlotNos:c,shouldEditModalShow:u,setSelectedSlotNo:f,switchHotkey:v,openEditModal:g,closeEditModal:x,updateSlot:w,deleteSlot:E}=Uv(e);return s.jsxs($a,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[t?s.jsxs(Av,{children:[s.jsxs(Nv,{children:[s.jsx(Dv,{selectedSlotNo:l,occupiedSlotNos:c,onChange:f}),s.jsx(Gv,{selectedSlotNo:l,hotkey:a,onClick:v})]}),s.jsx(Hv,{...i}),s.jsxs(kv,{children:[s.jsx(ae,{type:"button",name:"쿼리 복사",size:"medium",color:oe.color.LIGHT_GRAY,iconSrc:s.jsx(Qf,{}),disabled:i.isEmpty,ariaLabel:"쿼리 클립보드에 복사하기",onClick:()=>{i.isEmpty||(navigator.clipboard.writeText(i.query),r("copiedQuery"))}}),s.jsx(ae,{type:"button",name:"수정",size:"medium",color:oe.color.SKY_BLUE,iconSrc:s.jsx(Yf,{}),disabled:i.isEmpty,ariaLabel:"슬롯 수정하기",onClick:g}),s.jsx(ae,{type:"button",name:"삭제",size:"medium",color:oe.color.RED,iconSrc:s.jsx(Ai,{}),disabled:i.isEmpty,ariaLabel:"슬롯 삭제하기",onClick:()=>{r("confirmDeleteSlot")}})]})]}):s.jsx(Xv,{}),s.jsx(Qv,{title:i.isEmpty?"":i.title,query:i.isEmpty?"":i.query,open:u,onClose:x,onSlotChange:w}),s.jsx(qt,{actionType:"confirm",width:"350px",height:"auto",open:n==="copiedQuery",onClose:o,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),s.jsx(qt,{actionType:"yesNo",width:"350px",height:"auto",open:n==="confirmDeleteSlot",onYesSelect:()=>{E(),o()},onNoSelect:o,title:"추첨 삭제 확인",message:`${l}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`})]})},ey=e=>e==="Alt"||e==="F2",V1=e=>!Ke(e)||!("isEmpty"in e)||typeof e.isEmpty!="boolean"?!1:e.isEmpty?!0:"title"in e&&"query"in e&&typeof e.title=="string"&&typeof e.query=="string",U1=e=>typeof e!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(e),W1=e=>{if(!(Ke(e)&&"hotkey"in e&&"selectedSlotNo"in e&&"slots"in e&&typeof e.hotkey=="string"&&["Alt","F2"].includes(e.hotkey)&&U1(e.selectedSlotNo)))return!1;const{slots:t}=e;return Tg(t)?Array.from({length:10}).every((n,r)=>r in t&&V1(t[r])):!1},q1=e=>{if(!Ke(e)||!("slots"in e))return!1;const{slots:t}=e;return Ke(t)&&Array.from({length:10}).every((n,r)=>r in t)},ty=[1,2,3,4,5,6,7,8,9,0],ny=(e,t)=>V1(e)?e.isEmpty?{isEmpty:!0}:e.query.trim()===""||e.query.length>Ls?{isEmpty:!0}:e.title.trim()===""||e.title.length>Ds?{...e,isEmpty:!1,title:`추첨 ${t}`}:e:{isEmpty:!0},K1=e=>{if(!q1(e))return Cs;const t="hotkey"in e&&ey(e.hotkey)?e.hotkey:"Alt",n="selectedSlotNo"in e&&U1(e.selectedSlotNo)?e.selectedSlotNo:1,r={...e,hotkey:t,selectedSlotNo:n};return ty.forEach(o=>{const i=r.slots[o];r.slots[o]=ny(i,o)}),W1(r)?r:Cs},ry=async()=>{const t=(await ee.storage.local.get(L.QUICK_SLOTS))[L.QUICK_SLOTS];return K1(t)},oy=(e,t,n)=>{const r={selectedSlotNo:e,slots:t,hotkey:n};if(!q1(r))return;const o=K1(r);ee.storage.local.set({[L.QUICK_SLOTS]:o})},iy={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},ly=()=>{const[e,t]=S.useState(iy),[n,r]=S.useState(1),[o,i]=S.useState("Alt"),[l,a]=S.useState(!1);return S.useEffect(()=>{(async()=>{const{slots:f,selectedSlotNo:v,hotkey:g}=await ry();t(f),r(v),i(g),a(!0)})()},[]),S.useEffect(()=>{l&&oy(n,e,o)},[n,e,o]),{slots:e,selectedSlotNo:n,hotkey:o,isLoaded:l,setSelectedSlotNo:r,setHotkey:i,updateSlot:(f,v)=>{t(g=>({...g,[n]:{isEmpty:!1,title:f,query:v}}))},deleteSlot:()=>{t(f=>({...f,[n]:{isEmpty:!0}}))}}},sy=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,za=(e,t,n)=>t?n.color.GRAY:e>=1&&e<=5?n.solvedAcTier[5]:e>=6&&e<=10?n.solvedAcTier[10]:e>=11&&e<=15?n.solvedAcTier[15]:e>=16&&e<=20?n.solvedAcTier[20]:e>=21&&e<=25?n.solvedAcTier[25]:e>=26&&e<=30?n.solvedAcTier[30]:n.color.WHITE,_0=(e,t,n,r)=>t?$`
      background-image: ${n?r.solvedAcTier.HIDDEN_DARK_GRADIENT200:r.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${r.solvedAcTier.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?$`
      background-image: ${n?r.solvedAcTier.BRONZE_DARK_GRADIENT200:r.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${r.solvedAcTier.BRONZE_GRADIENT};
    `:e>=6&&e<=10?$`
      background-image: ${n?r.solvedAcTier.SILVER_DARK_GRADIENT200:r.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${r.solvedAcTier.SILVER_GRADIENT};
    `:e>=11&&e<=15?$`
      background-image: ${n?r.solvedAcTier.GOLD_DARK_GRADIENT200:r.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${r.solvedAcTier.GOLD_GRADIENT};
    `:e>=16&&e<=20?$`
      background-image: ${n?r.solvedAcTier.PLATINUM_DARK_GRADIENT200:r.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${r.solvedAcTier.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?$`
      background-image: ${n?r.solvedAcTier.DIAMOND_DARK_GRADIENT200:r.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${r.solvedAcTier.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?$`
      background-image: ${n?r.solvedAcTier.RUBY_DARK_GRADIENT200:r.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${r.solvedAcTier.RUBY_GRADIENT};
    `:$`
    background-image: ${n?r.solvedAcTier.UNRATED_DARK_GRADIENT200:r.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${r.solvedAcTier.UNRATED_GRADIENT};
  `,ay=h.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:t,theme:n})=>_0(e,t,!1,n)};

  &:hover {
    ${({$tier:e,$isHidden:t,theme:n})=>_0(e,t,!0,n)};
  }
`,cy=h.a`
  display: flex;
  align-items: center;
`,uy=h.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:t,theme:n})=>za(e,t,n)};
  }
`,dy=h.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,fy=h.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,py=h.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:t,theme:n})=>za(e,t,n)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,hy=h.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,gy=h.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:t,theme:n})=>za(e,t,n)};
`,my=h.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.WHITE};
  }
`,vy=h.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.color.WHITE};
`,Q1=e=>{const t=String(e.getFullYear()).padStart(4,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),l=String(e.getSeconds()).padStart(2,"0");return`${t}-${n}-${r} ${o}:${i}:${l}`},yy=e=>{const{problemId:t,title:n,tier:r,createdAt:o,isHidden:i,onDelete:l}=e;return s.jsxs(ay,{$tier:r,$isHidden:i,children:[s.jsxs(cy,{href:`https://icpc.me/${t}`,target:"__blank","aria-label":`${t}번 ${n} 문제`,children:[s.jsx(dy,{src:i?D1.hidden:er[r],alt:"",draggable:!1}),s.jsxs(fy,{children:[s.jsx(py,{$tier:r,$isHidden:i,children:n}),s.jsxs(hy,{children:[s.jsx(gy,{$tier:r,$isHidden:i,children:`#${t}`}),s.jsxs(my,{children:[s.jsx(Gf,{}),s.jsx(vy,{children:Q1(new Date(o))})]})]})]})]}),s.jsx(uy,{$tier:r,$isHidden:i,onClick:l,"aria-label":"추첨 기록에서 제거하기",children:s.jsx(Ai,{})})]})},xy=e=>{const{items:t,isHidden:n,onDelete:r}=e;return s.jsx(sy,{children:t.map(o=>{const i=`${o.problemId}-${o.createdAt}`;return s.jsx(yy,{isHidden:n,onDelete:()=>{r(i)},...o},i)})})},Pa=e=>Ke(e)&&"problemId"in e&&"title"in e&&"tier"in e&&"createdAt"in e&&typeof e.problemId=="number"&&typeof e.title=="string"&&typeof e.tier=="number"&&e.tier in er&&Oa(e.createdAt),wy=e=>Array.isArray(e)&&e.every(t=>Pa(t)),Sy=e=>{if(!Oa(e))return!1;const[t,n,r,o,i,l,a]=e.split(/[-:.TZ]/).map(Number);return t>=1&&t<=9999&&n>=1&&n<=12&&r>=1&&r<=31&&o>=0&&o<=23&&i>=0&&i<=59&&l>=0&&l<=59&&a>=0&&a<=999},Ey=e=>Pa(e)&&e.problemId%1===0&&e.problemId>=J4&&e.problemId<=ev&&e.title.length<=tv&&Sy(e.createdAt)&&e.tier%1===0&&e.tier>=Z4&&e.tier<=X4,Y1=e=>{if(!Array.isArray(e))return R1;const t=[];return e.forEach(n=>{Pa(n)&&Ey(n)&&t.push(n)}),t.slice(0,b1)},Ty=e=>typeof e=="boolean"?e:_1,Z1=e=>[...e].sort((t,n)=>t.createdAt>n.createdAt?-1:1),Ay=async()=>{const e=await ee.storage.local.get([L.RANDOM_DEFENSE_HISTORY,L.IS_TIER_HIDDEN]),t=e[L.RANDOM_DEFENSE_HISTORY],n=e[L.IS_TIER_HIDDEN],r=Y1(t),o=Z1(r),i=Ty(n);return{randomDefenseHistory:o,isHidden:i}},Ny=(e,t)=>{if(!Array.isArray(e)||typeof t!="boolean")return;const n=Y1(e),r=Z1(n);ee.storage.local.set({[L.RANDOM_DEFENSE_HISTORY]:r,[L.IS_TIER_HIDDEN]:t})},ky=()=>{const[e,t]=S.useState([]),[n,r]=S.useState(!0),[o,i]=S.useState(!1),l=e.length===0;return S.useEffect(()=>{(async()=>{const f=await Ay();r(f.isHidden),t(f.randomDefenseHistory),i(!0)})()},[]),S.useEffect(()=>{o&&Ny(e,n)},[e,n]),{items:e,isHidden:n,isLoaded:o,isEmpty:l,deleteHistoryById:f=>{const v=e.filter(g=>`${g.problemId}-${g.createdAt}`!==f);t(v)},clearHistory:()=>{t([])},updateIsHidden:f=>{r(f.target.checked)}}},_y=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,Ry=h.div`
  width: 348px;
  height: 414px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,Cy=h.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,Iy=h.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,Dy=h.button`
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
`,R0=h.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,Ly=h.div`
  display: flex;
  column-gap: 4px;

  width: 80px;
  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,Oy=h.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`,jy=h.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,My=h.label`
  display: inline-block;
  position: relative;

  width: ${({$size:e})=>e==="large"?"50px":"40px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:e})=>e==="large"?"15px":"12px"};
  }
`,$y=h.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,zy=h.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:e,$isChecked:t})=>t?e.color.GOLD:e.color.LIGHTER_BROWN};

  box-shadow: ${({theme:e,$isChecked:t})=>t?`0 0 12px ${e.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,Py=h.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:e})=>e==="large"?"26px":"20px"};
  height: ${({$size:e})=>e==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:e,$isChecked:t})=>t?e==="large"?$`
            transform: translateX(20px);
          `:$`
            transform: translateX(16px);
          `:$`
          transform: translateX(0);
        `}
`,Hy=e=>{const{size:t,isChecked:n,ariaLabel:r,onChange:o}=e;return s.jsxs(My,{$size:t,children:[s.jsx($y,{checked:n,"aria-label":r,onChange:o,value:""}),s.jsx(zy,{$isChecked:n,children:s.jsx(Py,{$size:t,$isChecked:n})})]})},By=()=>{const{items:e,isHidden:t,isLoaded:n,isEmpty:r,deleteHistoryById:o,clearHistory:i,updateIsHidden:l}=ky(),{activeModalName:a,openModal:c,closeModal:u}=ja();return s.jsx($a,{width:"370px",height:"537px",padding:"10px",title:"추첨 기록",children:s.jsxs(_y,{children:[n&&s.jsxs(s.Fragment,{children:[s.jsxs(Cy,{children:[s.jsx(R0,{children:"티어 숨기기"}),s.jsx(Hy,{size:"large",isChecked:t,ariaLabel:"티어 숨기기",onChange:l})]}),s.jsx(Ry,{children:s.jsx(xy,{items:e,isHidden:t,onDelete:o})}),s.jsxs(Iy,{children:[s.jsxs(Ly,{children:[s.jsx(jy,{children:s.jsx(Vf,{})}),s.jsx(Oy,{children:`${e.length} / ${b1}`})]}),s.jsx(R0,{children:"추첨 기록 비우기"}),s.jsx(Dy,{onClick:()=>{c("confirmClearHistory")},disabled:r,"aria-label":"추첨 기록 비우기",children:s.jsx(Ai,{})})]})]}),s.jsx(qt,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:a==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{i(),u()},onNoSelect:u})]})})},Fy=h.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,by=h.div`
  display: flex;
  column-gap: 12px;
`,Gy=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,Vy=e=>{const{slots:t,selectedSlotNo:n,hotkey:r,isLoaded:o,setSelectedSlotNo:i,setHotkey:l,updateSlot:a,deleteSlot:c}=ly(),{show:u}=e,f={slots:t,selectedSlotNo:n,hotkey:r};return u?s.jsxs(Fy,{children:[s.jsx(Vt,{title:"랜덤 디펜스",iconSrc:ee.runtime.getURL("/dice.png")}),s.jsxs(by,{children:[s.jsxs(Gy,{children:[s.jsx(Tv,{isLoaded:o,selectedSlotNo:n,onSubmit:a}),s.jsx(Jv,{quickSlotsInfo:f,isLoaded:o,onHotkeyChange:l,onSlotChange:a,onSlotDelete:c,onSlotNoChange:i})]}),s.jsx(By,{})]})]}):null},Uy=h.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;h.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const Wy=e=>Ke(e)&&"totamjungTheme"in e&&Ha(e.totamjungTheme),Ha=e=>e==="none"||e==="totamjung",qy=e=>e==="totamjung"?"totamjung":"none",Ky=async()=>{const t=(await ee.storage.local.get(L.TOTAMJUNG_THEME))[L.TOTAMJUNG_THEME],n=qy(t);return{[L.TOTAMJUNG_THEME]:n}},Qy=e=>{Wy({totamjungTheme:e})&&ee.storage.local.set({[L.TOTAMJUNG_THEME]:e})},Yy=e=>typeof e=="number"&&!isNaN(e)&&e%1===0?e:0,X1=e=>typeof e=="number"&&!isNaN(e)&&e%1===0,Zy=async()=>{const t=(await ee.storage.local.get(L.FONT_NO))[L.FONT_NO];return{[L.FONT_NO]:Yy(t)}},Xy=e=>{X1(e)&&ee.storage.local.set({[L.FONT_NO]:e})},Jy=()=>{const[e,t]=S.useState(void 0),[n,r]=S.useState(void 0),[o,i]=S.useState(!1);return S.useEffect(()=>{(async()=>{const[u,f]=await Promise.all([Ky(),Zy()]),{totamjungTheme:v}=u,{fontNo:g}=f;t(v),r(g),i(!0)})()},[]),S.useEffect(()=>{o&&Qy(e)},[e]),S.useEffect(()=>{o&&Xy(n)},[n]),{totamjungTheme:e,fontNo:n,isLoaded:o,updateTotamjungTheme:c=>{o&&Ha(c)&&t(c)},updateFontNo:c=>{const u=Number(c);!o||isNaN(u)||r(u)}}},ex=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,tx=h.p`
  color: ${({theme:e})=>e.color.LEMON};
  font-size: ${({$fontSize:e})=>e};
  font-family: ${({$fontFamily:e})=>e};
`,nx=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],rx=()=>{const{totamjungTheme:e,fontNo:t,updateTotamjungTheme:n,updateFontNo:r}=Jy();return s.jsxs(ex,{children:[s.jsx(Vt,{title:"테마 설정",iconSrc:ee.runtime.getURL("/palette.png")}),s.jsx(Mn,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:e??"",onChange:n}),s.jsx(Vt,{title:"폰트 설정",iconSrc:s.jsx(tp,{})}),s.jsx(Mn,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:nx.map(({name:o,fontFamily:i,fontSize:l},a)=>({label:s.jsx(tx,{$fontFamily:i,$fontSize:l??"16px",children:o}),value:String(a)})),checkedValue:t===void 0?"":String(t),onChange:r})]})},ox=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,J1=e=>{const{confirmText:t}=e,[n,r]=S.useState(""),[o,i]=S.useState(t);return S.useEffect(()=>{i(o)},[t]),{inputValue:n,isSameWithConfirmText:n===o,updateInputValue:c=>{r(c.target.value)}}},ix=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,lx=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,Al=h.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,sx=h.div`
  display: flex;
  justify-content: center;
`,Nl="초기화에 동의합니다",ax=e=>{const{open:t,onClose:n,onReset:r}=e,{inputValue:o,isSameWithConfirmText:i,updateInputValue:l}=J1({confirmText:Nl});return s.jsxs(to,{title:"데이터 초기화",open:t,onClose:n,children:[s.jsxs(ix,{children:[s.jsx(V,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),s.jsxs(lx,{children:[s.jsx(Al,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),s.jsx(Al,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),s.jsx(Al,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),s.jsxs(V,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",s.jsx("b",{children:Nl}),"를 입력해 주십시오."]}),s.jsx(sx,{children:s.jsx(sn,{type:"text",width:"300px",value:o,textAlign:"center",placeholder:`"${Nl}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:l})})]}),s.jsxs(Fi,{children:[s.jsx(ae,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Yr,{}),color:oe.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(ae,{type:"button",name:"초기화",size:"medium",iconSrc:s.jsx(Ai,{}),color:oe.color.RED,disabled:!i,ariaLabel:"초기화",onClick:r})]})]})},cx=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,ux=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,kl=h.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,dx=h.div`
  display: flex;
  justify-content: center;
`,_l="숙지했습니다",fx=e=>{const{open:t,onClose:n,onUpload:r}=e,{inputValue:o,isSameWithConfirmText:i,updateInputValue:l}=J1({confirmText:_l});return s.jsxs(to,{title:"데이터 업로드",open:t,onClose:n,children:[s.jsxs(cx,{children:[s.jsx(V,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),s.jsxs(ux,{children:[s.jsx(kl,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),s.jsx(kl,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),s.jsx(kl,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),s.jsxs(V,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",s.jsx("b",{children:_l}),"를 입력해 주십시오."]}),s.jsx(dx,{children:s.jsx(sn,{type:"text",width:"300px",value:o,textAlign:"center",placeholder:`"${_l}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:l})})]}),s.jsxs(Fi,{children:[s.jsx(ae,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(Yr,{}),color:oe.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(ae,{type:"button",name:"업로드",size:"medium",iconSrc:s.jsx(vu,{}),color:oe.color.LIME,disabled:!i,ariaLabel:"업로드",onClick:r})]})]})},px=e=>Array.isArray(e)?Array.isArray(e)&&e.every(t=>hx(t)):!1,hx=e=>Ke(e)&&"problemId"in e&&"expiresAt"in e&&typeof e.problemId=="number"&&Oa(e.expiresAt)&&!isNaN(e.problemId)&&e.problemId%1===0&&e.problemId>=1e3,e2=e=>Ke(e)&&L.DATA_VERSION in e&&L.CHECKED_ALGORITHM_IDS in e&&L.QUICK_SLOTS in e&&L.TOTAMJUNG_THEME in e&&L.HIDER_OPTIONS in e&&L.RANDOM_DEFENSE_HISTORY in e&&L.IS_TIER_HIDDEN in e&&L.FONT_NO in e&&L.TIMERS in e?e[L.DATA_VERSION]==="v1.2"&&T1(e[L.CHECKED_ALGORITHM_IDS])&&W1(e[L.QUICK_SLOTS])&&Ha(e[L.TOTAMJUNG_THEME])&&Ma(e[L.HIDER_OPTIONS])&&wy(e[L.RANDOM_DEFENSE_HISTORY])&&typeof e[L.IS_TIER_HIDDEN]=="boolean"&&X1(e[L.FONT_NO])&&px(e[L.TIMERS]):!1,gx=async e=>e2(e)?(await ee.storage.local.set({...e,[L.SHOULD_SHOW_WELCOME_MESSAGE]:!1}),!0):!1,mx=async()=>(await ee.storage.local.set(Cg),!0),vx=(e,t)=>{const n=document.createElement("a"),r=new Blob([e],{type:"text/plain"});n.href=URL.createObjectURL(r),n.download=t,n.click(),URL.revokeObjectURL(n.href)},yx=async()=>{const e=await ee.runtime.sendMessage({command:Eg.FETCH_OPTIONS_DATA}),t=JSON.stringify(e),n=`totamjung_savefile_${Q1(new Date).replace(" ","_")}.ttj`;vx(t,n)},xx=()=>{const[e,t]=S.useState("none"),[n,r]=S.useState(void 0),[o,i]=S.useState({errorTitle:"",errorMessage:""}),{errorTitle:l,errorMessage:a}=o,c=w=>{i(w),t("error")};return{activeModal:e,errorTitle:l,errorMessage:a,setActiveModal:t,resetOptionsData:async()=>{await mx()&&(t("none"),location.reload())},extractOptionsData:async()=>{yx(),t("none")},stageOptionsData:async w=>{const E=w.target.files;if(!E)return;const I=E[0];if(I.name.split(".").at(-1)!=="ttj"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(I.size>1048576){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const d=new FileReader;d.onload=async()=>{try{const m=d.result;if(typeof m!="string"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const y=JSON.parse(m);if(!("dataVersion"in y)||typeof y.dataVersion!="string"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(y.dataVersion!=="v1.2"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${y.dataVersion}으로, 이 버전에서 다룰 수 있는 v1.2보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(!e2(y)){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}r(y),t("upload")}catch{c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},d.readAsText(I)},uploadOptionsData:async()=>{n&&(gx(n),location.reload())},closeModal:()=>{t("none")}}},wx=h.label`
  display: block;
  width: 270px;
`,Sx=h.div`
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
`,Ex=h.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIME};
  }
`,Tx=h.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.LIME};
`,Ax=h.input`
  display: none;
`,Nx=e=>{const{onChange:t}=e;return s.jsxs(wx,{children:[s.jsxs(Sx,{role:"button",children:[s.jsx(Ex,{children:s.jsx(vu,{})}),s.jsx(Tx,{children:"설정 데이터 업로드"})]}),s.jsx(Ax,{type:"file",accept:".ttj",onClick:n=>{n.currentTarget.value=""},onChange:t})]})},kx=()=>{const{activeModal:e,errorTitle:t,errorMessage:n,setActiveModal:r,resetOptionsData:o,extractOptionsData:i,stageOptionsData:l,uploadOptionsData:a,closeModal:c}=xx();return s.jsxs(ox,{children:[s.jsx(Vt,{title:"데이터 관리",iconSrc:s.jsx(np,{})}),s.jsx(ae,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,ariaLabel:"설정 데이터 내보내기",iconSrc:s.jsx(rp,{}),onClick:()=>{r("extract")}}),s.jsx(Nx,{onChange:l}),s.jsx(ae,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,ariaLabel:"설정 데이터 초기화",iconSrc:s.jsx(op,{}),onClick:()=>{r("reset")}}),s.jsx(V,{type:"normal",fontSize:"16px",children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),s.jsxs(V,{type:"normal",fontSize:"16px",children:["토탐정 세이브파일의 확장자는 ",s.jsx("b",{children:".ttj"}),"입니다."]}),s.jsx(qt,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:e==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:i,onClose:c}),s.jsx(fx,{open:e==="upload",onUpload:a,onClose:c}),s.jsx(ax,{open:e==="reset",onReset:o,onClose:c}),s.jsx(qt,{title:t,actionType:"confirm",width:"350px",height:"auto",open:e==="error",message:n,onClose:c})]})},_x=e=>{const{show:t}=e;return t?s.jsxs(Uy,{children:[s.jsx(rx,{}),s.jsx(kx,{})]}):null},Rx=()=>{const[e,t]=S.useState("algorithmHider");return{selectedCategory:e,setSelectedCategory:t}},Cx=Ti`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,Ix=h.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,Dx=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Lx=h.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,Ox=h.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,jx=h.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${Cx} 3s forwards infinite;
`,Mx=()=>{const{selectedCategory:e,setSelectedCategory:t}=Rx();return s.jsxs(Ix,{children:[s.jsxs(Dx,{children:[s.jsx(Xh,{selectedCategory:e,onCategoryChange:t}),s.jsxs(Lx,{children:[s.jsx(e4,{show:e==="algorithmHider"}),s.jsx(Vy,{show:e==="randomDefense"}),s.jsx(_x,{show:e==="appearanceAndDataManage"})]})]}),s.jsx(Ox,{children:s.jsx(jx,{src:Ch,alt:""})})]})};var t2,C0=x1;t2=C0.createRoot,C0.hydrateRoot;const I0=document.getElementById("root"),Rl=I0&&t2(I0);Rl==null||Rl.render(s.jsx(S.StrictMode,{children:s.jsxs(Ef,{theme:oe,children:[s.jsx(kf,{}),s.jsx(Mx,{})]})}));
