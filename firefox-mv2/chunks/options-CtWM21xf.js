(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();try{}catch(e){console.error("[wxt] Failed to initialize plugins",e)}function pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},Li={},Eu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),fp=Symbol.for("react.portal"),hp=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),Ac=Symbol.iterator;function Tp(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var Nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Iu={};function sr(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Nu}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ku(){}ku.prototype=sr.prototype;function ea(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Nu}var ta=ea.prototype=new ku;ta.constructor=ea;Ru(ta,sr.prototype);ta.isPureReactComponent=!0;var wc=Array.isArray,Cu=Object.prototype.hasOwnProperty,na={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Cu.call(t,r)&&!ju.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:lo,type:e,key:i,ref:l,props:o,_owner:na.current}}function Ep(e,t){return{$$typeof:lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function Np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sc=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Np(""+e.key):t.toString(36)}function zo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case lo:case fp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ll(l,0):r,wc(o)?(n="",e!=null&&(n=e.replace(Sc,"$&/")+"/"),zo(o,t,n,"",function(u){return u})):o!=null&&(ra(o)&&(o=Ep(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Sc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",wc(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+ll(i,a);l+=zo(i,t,n,c,o)}else if(c=Tp(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+ll(i,a++),l+=zo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vo(e,t,n){if(e==null)return e;var r=[],o=0;return zo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},$o={transition:null},Ip={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:$o,ReactCurrentOwner:na};function Du(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:vo,forEach:function(e,t,n){vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vo(e,function(){t++}),t},toArray:function(e){return vo(e,function(t){return t})||[]},only:function(e){if(!ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=sr;H.Fragment=hp;H.Profiler=mp;H.PureComponent=ea;H.StrictMode=gp;H.Suspense=Ap;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;H.act=Du;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=na.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Cu.call(t,c)&&!ju.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:lo,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vp,_context:e},e.Consumer=e};H.createElement=Mu;H.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:yp,render:e}};H.isValidElement=ra;H.lazy=function(e){return{$$typeof:Sp,_payload:{_status:-1,_result:e},_init:Rp}};H.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};H.unstable_act=Du;H.useCallback=function(e,t){return je.current.useCallback(e,t)};H.useContext=function(e){return je.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return je.current.useDeferredValue(e)};H.useEffect=function(e,t){return je.current.useEffect(e,t)};H.useId=function(){return je.current.useId()};H.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return je.current.useMemo(e,t)};H.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};H.useRef=function(e){return je.current.useRef(e)};H.useState=function(e){return je.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return je.current.useTransition()};H.version="18.3.1";Eu.exports=H;var x=Eu.exports;const it=pp(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=x,Cp=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,Dp=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Mp.call(t,r)&&!Lp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Cp,type:e,key:i,ref:l,props:o,_owner:Dp.current}}Li.Fragment=jp;Li.jsx=Lu;Li.jsxs=Lu;Tu.exports=Li;var s=Tu.exports,ve=function(){return ve=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ve.apply(this,arguments)};function Qn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var q="-ms-",Ir="-moz-",F="-webkit-",Ou="comm",Oi="rule",oa="decl",Op="@import",_u="@keyframes",_p="@layer",bu=Math.abs,ia=String.fromCharCode,ql=Object.assign;function bp(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Gu(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Po(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function qn(e,t,n){return e.slice(t,n)}function pt(e){return e.length}function Hu(e){return e.length}function Ar(e,t){return t.push(e),e}function Gp(e,t){return e.map(t).join("")}function Tc(e,t){return e.filter(function(n){return!vt(n,t)})}var _i=1,Kn=1,zu=0,Xe=0,de=0,ar="";function bi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:_i,column:Kn,length:l,return:"",siblings:a}}function Lt(e,t){return ql(bi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function kn(e){for(;e.root;)e=Lt(e.root,{children:[e]});Ar(e,e.siblings)}function Hp(){return de}function zp(){return de=Xe>0?ge(ar,--Xe):0,Kn--,de===10&&(Kn=1,_i--),de}function lt(){return de=Xe<zu?ge(ar,Xe++):0,Kn++,de===10&&(Kn=1,_i++),de}function hn(){return ge(ar,Xe)}function Bo(){return Xe}function Gi(e,t){return qn(ar,e,t)}function Kl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $p(e){return _i=Kn=1,zu=pt(ar=e),Xe=0,[]}function Pp(e){return ar="",e}function sl(e){return Gu(Gi(Xe-1,Xl(e===91?e+2:e===40?e+1:e)))}function Bp(e){for(;(de=hn())&&de<33;)lt();return Kl(e)>2||Kl(de)>3?"":" "}function Up(e,t){for(;--t&&lt()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return Gi(e,Bo()+(t<6&&hn()==32&&lt()==32))}function Xl(e){for(;lt();)switch(de){case e:return Xe;case 34:case 39:e!==34&&e!==39&&Xl(de);break;case 40:e===41&&Xl(e);break;case 92:lt();break}return Xe}function Fp(e,t){for(;lt()&&e+de!==57;)if(e+de===84&&hn()===47)break;return"/*"+Gi(t,Xe-1)+"*"+ia(e===47?e:lt())}function Vp(e){for(;!Kl(hn());)lt();return Gi(e,Xe)}function Yp(e){return Pp(Uo("",null,null,null,[""],e=$p(e),0,[0],e))}function Uo(e,t,n,r,o,i,l,a,c){for(var u=0,p=0,h=l,g=0,y=0,A=0,S=1,j=1,m=1,f=0,v="",w=o,E=i,N=r,T=v;j;)switch(A=f,f=lt()){case 40:if(A!=108&&ge(T,h-1)==58){Po(T+=G(sl(f),"&","&\f"),"&\f",bu(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:T+=sl(f);break;case 9:case 10:case 13:case 32:T+=Bp(A);break;case 92:T+=Up(Bo()-1,7);continue;case 47:switch(hn()){case 42:case 47:Ar(Wp(Fp(lt(),Bo()),t,n,c),c);break;default:T+="/"}break;case 123*S:a[u++]=pt(T)*m;case 125*S:case 59:case 0:switch(f){case 0:case 125:j=0;case 59+p:m==-1&&(T=G(T,/\f/g,"")),y>0&&pt(T)-h&&Ar(y>32?Nc(T+";",r,n,h-1,c):Nc(G(T," ","")+";",r,n,h-2,c),c);break;case 59:T+=";";default:if(Ar(N=Ec(T,t,n,u,p,o,a,v,w=[],E=[],h,i),i),f===123)if(p===0)Uo(T,t,N,N,w,i,h,a,E);else switch(g===99&&ge(T,3)===110?100:g){case 100:case 108:case 109:case 115:Uo(e,N,N,r&&Ar(Ec(e,N,N,0,0,o,a,v,o,w=[],h,E),E),o,E,h,a,r?w:E);break;default:Uo(T,N,N,N,[""],E,0,a,E)}}u=p=y=0,S=m=1,v=T="",h=l;break;case 58:h=1+pt(T),y=A;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&zp()==125)continue}switch(T+=ia(f),f*S){case 38:m=p>0?1:(T+="\f",-1);break;case 44:a[u++]=(pt(T)-1)*m,m=1;break;case 64:hn()===45&&(T+=sl(lt())),g=hn(),p=h=pt(v=T+=Vp(Bo())),f++;break;case 45:A===45&&pt(T)==2&&(S=0)}}return i}function Ec(e,t,n,r,o,i,l,a,c,u,p,h){for(var g=o-1,y=o===0?i:[""],A=Hu(y),S=0,j=0,m=0;S<r;++S)for(var f=0,v=qn(e,g+1,g=bu(j=l[S])),w=e;f<A;++f)(w=Gu(j>0?y[f]+" "+v:G(v,/&\f/g,y[f])))&&(c[m++]=w);return bi(e,t,n,o===0?Oi:a,c,u,p,h)}function Wp(e,t,n,r){return bi(e,t,n,Ou,ia(Hp()),qn(e,2,-2),0,r)}function Nc(e,t,n,r,o){return bi(e,t,n,oa,qn(e,0,r),qn(e,r+1,-1),r,o)}function $u(e,t,n){switch(bp(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Ir+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Ir+e+q+e+e;case 5936:switch(ge(e,t+11)){case 114:return F+e+q+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+q+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+q+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+q+e+e;case 6165:return F+e+q+"flex-"+e+e;case 5187:return F+e+G(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return F+e+q+"flex-item-"+G(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":q+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return F+e+q+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+q+G(e,"shrink","negative")+e;case 5292:return F+e+q+G(e,"basis","preferred-size")+e;case 6060:return F+"box-"+G(e,"-grow","")+F+e+q+G(e,"grow","positive")+e;case 4554:return F+G(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!vt(e,/flex-|baseline/))return q+"grid-column-align"+qn(e,t)+e;break;case 2592:case 3360:return q+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vt(r.props,/grid-\w+-end/)})?~Po(e+(n=n[t].value),"span",0)?e:q+G(e,"-start","")+e+q+"grid-row-span:"+(~Po(n,"span",0)?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":q+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:q+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Ir+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Po(e,"stretch",0)?$u(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,c,u){return q+o+":"+i+u+(l?q+o+"-span:"+(a?c:+c-+i)+u:"")+e});case 4949:if(ge(e,t+6)===121)return G(e,":",":"+F)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ge(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+q+"$2box$3")+e;case 100:return G(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function ri(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Zp(e,t,n,r){switch(e.type){case _p:if(e.children.length)break;case Op:case oa:return e.return=e.return||e.value;case Ou:return"";case _u:return e.return=e.value+"{"+ri(e.children,r)+"}";case Oi:if(!pt(e.value=e.props.join(",")))return""}return pt(n=ri(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qp(e){var t=Hu(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function qp(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kp(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case oa:e.return=$u(e.value,e.length,n);return;case _u:return ri([Lt(e,{value:G(e.value,"@","@"+F)})],r);case Oi:if(e.length)return Gp(n=e.props,function(o){switch(vt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":kn(Lt(e,{props:[G(o,/:(read-\w+)/,":"+Ir+"$1")]})),kn(Lt(e,{props:[o]})),ql(e,{props:Tc(n,r)});break;case"::placeholder":kn(Lt(e,{props:[G(o,/:(plac\w+)/,":"+F+"input-$1")]})),kn(Lt(e,{props:[G(o,/:(plac\w+)/,":"+Ir+"$1")]})),kn(Lt(e,{props:[G(o,/:(plac\w+)/,q+"input-$1")]})),kn(Lt(e,{props:[o]})),ql(e,{props:Tc(n,r)});break}return""})}}var Xp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},Xn=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",Pu="active",Bu="data-styled-version",Hi="6.1.13",la=`/*!sc*/
`,oi=typeof window<"u"&&"HTMLElement"in window,Jp=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),ef={},zi=Object.freeze([]),Jn=Object.freeze({});function Uu(e,t,n){return n===void 0&&(n=Jn),e.theme!==n.theme&&e.theme||t||n.theme}var Fu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nf=/(^-|-$)/g;function Rc(e){return e.replace(tf,"-").replace(nf,"")}var rf=/(a)(d)/gi,xo=52,Ic=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jl(e){var t,n="";for(t=Math.abs(e);t>xo;t=t/xo|0)n=Ic(t%xo)+n;return(Ic(t%xo)+n).replace(rf,"$1-$2")}var al,Vu=5381,jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Yu=function(e){return jn(Vu,e)};function sa(e){return Jl(Yu(e)>>>0)}function of(e){return e.displayName||e.name||"Component"}function cl(e){return typeof e=="string"&&!0}var Wu=typeof Symbol=="function"&&Symbol.for,Zu=Wu?Symbol.for("react.memo"):60115,lf=Wu?Symbol.for("react.forward_ref"):60112,sf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},af={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cf=((al={})[lf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},al[Zu]=Qu,al);function kc(e){return("type"in(t=e)&&t.type.$$typeof)===Zu?Qu:"$$typeof"in e?cf[e.$$typeof]:sf;var t}var uf=Object.defineProperty,df=Object.getOwnPropertyNames,Cc=Object.getOwnPropertySymbols,pf=Object.getOwnPropertyDescriptor,ff=Object.getPrototypeOf,jc=Object.prototype;function qu(e,t,n){if(typeof t!="string"){if(jc){var r=ff(t);r&&r!==jc&&qu(e,r,n)}var o=df(t);Cc&&(o=o.concat(Cc(t)));for(var i=kc(e),l=kc(t),a=0;a<o.length;++a){var c=o[a];if(!(c in af||n&&n[c]||l&&c in l||i&&c in i)){var u=pf(t,c);try{uf(e,c,u)}catch{}}}}return e}function vn(e){return typeof e=="function"}function aa(e){return typeof e=="object"&&"styledComponentId"in e}function an(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ii(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Gr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function es(e,t,n){if(n===void 0&&(n=!1),!n&&!Gr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=es(e[r],t[r]);else if(Gr(t))for(var r in t)e[r]=es(e[r],t[r]);return e}function ca(e,t){Object.defineProperty(e,"toString",{value:t})}function xn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hf=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw xn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(la);return n},e}(),Fo=new Map,li=new Map,Vo=1,yo=function(e){if(Fo.has(e))return Fo.get(e);for(;li.has(Vo);)Vo++;var t=Vo++;return Fo.set(e,t),li.set(t,e),t},gf=function(e,t){Vo=t+1,Fo.set(e,t),li.set(t,e)},mf="style[".concat(Xn,"][").concat(Bu,'="').concat(Hi,'"]'),vf=new RegExp("^".concat(Xn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xf=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},yf=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(la),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var c=a.match(vf);if(c){var u=0|parseInt(c[1],10),p=c[2];u!==0&&(gf(p,u),xf(e,p,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Mc=function(e){for(var t=document.querySelectorAll(mf),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Xn)!==Pu&&(yf(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Af(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ku=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Xn,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Xn,Pu),r.setAttribute(Bu,Hi);var l=Af();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},wf=function(){function e(t){this.element=Ku(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw xn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sf=function(){function e(t){this.element=Ku(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Tf=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dc=oi,Ef={isServer:!oi,useCSSOMInjection:!Jp},si=function(){function e(t,n,r){t===void 0&&(t=Jn),n===void 0&&(n={});var o=this;this.options=ve(ve({},Ef),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oi&&Dc&&(Dc=!1,Mc(this)),ca(this,function(){return function(i){for(var l=i.getTag(),a=l.length,c="",u=function(h){var g=function(m){return li.get(m)}(h);if(g===void 0)return"continue";var y=i.names.get(g),A=l.getGroup(h);if(y===void 0||!y.size||A.length===0)return"continue";var S="".concat(Xn,".g").concat(h,'[id="').concat(g,'"]'),j="";y!==void 0&&y.forEach(function(m){m.length>0&&(j+="".concat(m,","))}),c+="".concat(A).concat(S,'{content:"').concat(j,'"}').concat(la)},p=0;p<a;p++)u(p);return c}(o)})}return e.registerId=function(t){return yo(t)},e.prototype.rehydrate=function(){!this.server&&oi&&Mc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Tf(o):r?new wf(o):new Sf(o)}(this.options),new hf(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(yo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(yo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(yo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Nf=/&/g,Rf=/^\s*\/\/.*$/gm;function Xu(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Xu(n.children,t)),n})}function If(e){var t,n,r,o=Jn,i=o.options,l=i===void 0?Jn:i,a=o.plugins,c=a===void 0?zi:a,u=function(g,y,A){return A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(t):g},p=c.slice();p.push(function(g){g.type===Oi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Nf,n).replace(r,u))}),l.prefix&&p.push(Kp),p.push(Zp);var h=function(g,y,A,S){y===void 0&&(y=""),A===void 0&&(A=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(Rf,""),m=Yp(A||y?"".concat(A," ").concat(y," { ").concat(j," }"):j);l.namespace&&(m=Xu(m,l.namespace));var f=[];return ri(m,Qp(p.concat(qp(function(v){return f.push(v)})))),f};return h.hash=c.length?c.reduce(function(g,y){return y.name||xn(15),jn(g,y.name)},Vu).toString():"",h}var kf=new si,ts=If(),Ju=it.createContext({shouldForwardProp:void 0,styleSheet:kf,stylis:ts});Ju.Consumer;it.createContext(void 0);function ns(){return x.useContext(Ju)}var ed=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ts);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ca(this,function(){throw xn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ts),this.name+t.hash},e}(),Cf=function(e){return e>="A"&&e<="Z"};function Lc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Cf(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var td=function(e){return e==null||e===!1||e===""},nd=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!td(i)&&(Array.isArray(i)&&i.isCss||vn(i)?r.push("".concat(Lc(o),":"),i,";"):Gr(i)?r.push.apply(r,Qn(Qn(["".concat(o," {")],nd(i),!1),["}"],!1)):r.push("".concat(Lc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Xp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $t(e,t,n,r){if(td(e))return[];if(aa(e))return[".".concat(e.styledComponentId)];if(vn(e)){if(!vn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return $t(o,t,n,r)}var i;return e instanceof ed?n?(e.inject(n,r),[e.getName(r)]):[e]:Gr(e)?nd(e):Array.isArray(e)?Array.prototype.concat.apply(zi,e.map(function(l){return $t(l,t,n,r)})):[e.toString()]}function rd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!aa(n))return!1}return!0}var jf=Yu(Hi),Mf=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rd(t),this.componentId=n,this.baseHash=jn(jf,n),this.baseStyle=r,si.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=an(o,this.staticRulesId);else{var i=ii($t(this.rules,t,n,r)),l=Jl(jn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=an(o,l),this.staticRulesId=l}else{for(var c=jn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var h=this.rules[p];if(typeof h=="string")u+=h;else if(h){var g=ii($t(h,t,n,r));c=jn(c,g+p),u+=g}}if(u){var y=Jl(c>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=an(o,y)}}return o},e}(),Hr=it.createContext(void 0);Hr.Consumer;function Df(e){var t=it.useContext(Hr),n=x.useMemo(function(){return function(r,o){if(!r)throw xn(14);if(vn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw xn(8);return o?ve(ve({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?it.createElement(Hr.Provider,{value:n},e.children):null}var ul={};function Lf(e,t,n){var r=aa(e),o=e,i=!cl(e),l=t.attrs,a=l===void 0?zi:l,c=t.componentId,u=c===void 0?function(w,E){var N=typeof w!="string"?"sc":Rc(w);ul[N]=(ul[N]||0)+1;var T="".concat(N,"-").concat(sa(Hi+N+ul[N]));return E?"".concat(E,"-").concat(T):T}(t.displayName,t.parentComponentId):c,p=t.displayName,h=p===void 0?function(w){return cl(w)?"styled.".concat(w):"Styled(".concat(of(w),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Rc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,A=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;A=function(w,E){return S(w,E)&&j(w,E)}}else A=S}var m=new Mf(n,g,r?o.componentStyle:void 0);function f(w,E){return function(N,T,M){var z=N.attrs,_=N.componentStyle,ce=N.defaultProps,Ye=N.foldedComponentIds,We=N.styledComponentId,jt=N.target,In=it.useContext(Hr),Q=ns(),te=N.shouldForwardProp||Q.shouldForwardProp,C=Uu(T,In,ce)||Jn,L=function(Re,Ie,mt){for(var dr,nn=ve(ve({},Ie),{className:void 0,theme:mt}),il=0;il<Re.length;il+=1){var mo=vn(dr=Re[il])?dr(nn):dr;for(var Mt in mo)nn[Mt]=Mt==="className"?an(nn[Mt],mo[Mt]):Mt==="style"?ve(ve({},nn[Mt]),mo[Mt]):mo[Mt]}return Ie.className&&(nn.className=an(nn.className,Ie.className)),nn}(z,T,C),b=L.as||jt,P={};for(var B in L)L[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&L.theme===C||(B==="forwardedAs"?P.as=L.forwardedAs:te&&!te(B,b)||(P[B]=L[B]));var ne=function(Re,Ie){var mt=ns(),dr=Re.generateAndInjectStyles(Ie,mt.styleSheet,mt.stylis);return dr}(_,L),se=an(Ye,We);return ne&&(se+=" "+ne),L.className&&(se+=" "+L.className),P[cl(b)&&!Fu.has(b)?"class":"className"]=se,P.ref=M,x.createElement(b,P)}(v,w,E)}f.displayName=h;var v=it.forwardRef(f);return v.attrs=y,v.componentStyle=m,v.displayName=h,v.shouldForwardProp=A,v.foldedComponentIds=r?an(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=g,v.target=r?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(E){for(var N=[],T=1;T<arguments.length;T++)N[T-1]=arguments[T];for(var M=0,z=N;M<z.length;M++)es(E,z[M],!0);return E}({},o.defaultProps,w):w}}),ca(v,function(){return".".concat(v.styledComponentId)}),i&&qu(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Oc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var _c=function(e){return Object.assign(e,{isCss:!0})};function O(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||Gr(e))return _c($t(Oc(zi,Qn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?$t(r):_c($t(Oc(r,t)))}function rs(e,t,n){if(n===void 0&&(n=Jn),!t)throw xn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,O.apply(void 0,Qn([o],i,!1)))};return r.attrs=function(o){return rs(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return rs(e,t,ve(ve({},n),o))},r}var od=function(e){return rs(Lf,e)},d=od;Fu.forEach(function(e){d[e]=od(e)});var Of=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=rd(t),si.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ii($t(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&si.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function _f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=O.apply(void 0,Qn([e],t,!1)),o="sc-global-".concat(sa(JSON.stringify(r))),i=new Of(r,o),l=function(c){var u=ns(),p=it.useContext(Hr),h=it.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(h,c,u.styleSheet,p,u.stylis),it.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,c,u.styleSheet,p,u.stylis),function(){return i.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,p,u.stylis]),null};function a(c,u,p,h,g){if(i.isStatic)i.renderStyles(c,ef,p,g);else{var y=ve(ve({},u),{theme:Uu(u,h,l.defaultProps)});i.renderStyles(c,y,p,g)}}return it.memo(l)}function He(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ii(O.apply(void 0,Qn([e],t,!1))),o=sa(r);return new ed(o,r)}const I={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",DARK_GRAY:"#333333",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK:"#000000",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",ORANGE_TRANSPARENT:"#ff853340",BEIGE:"#c8aaa0",LIME:"#00ed28",GREEN:"#008000",LIGHT_PURPLE:"#dcbfff",PURPLE:"#963eff"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%)",LIGHT_GRAY_FILTER:"brightness(0) saturate(100%) invert(86%) sepia(0%) saturate(1969%) hue-rotate(175deg) brightness(78%) contrast(96%)"},solvedAcColor:{LIME:"#17ce3a",OFF_WHITE:"#f7f8f9",GRAY:"#8a8f95",LIGHT_GRAY:"#b8bcbf",LIGHTER_GRAY:"#dddfe0",INDIGO:"#15202b",DARK_INDIGO:"#0b131b"},bojExtendedColor:{SKY_BLUE:"#008db4",DARK_SKY_BLUE:"#002635",DARK_INDIGO:"#001a26",DARK_GRAY:"#545454",DARKER_GRAY:"#202020",DARKEST_GRAY:"#161616",LIGHT_GRAY:"#a2a4a5"},solvedAcFilter:{LIME:"brightness(0) saturate(100%) invert(60%) sepia(34%) saturate(3800%) hue-rotate(87deg) brightness(105%) contrast(86%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(79%) sepia(4%) saturate(201%) hue-rotate(163deg) brightness(94%) contrast(93%)"},bojExtendedFilter:{DARK_GRAY:"brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(1005%) hue-rotate(147deg) brightness(100%) contrast(88%)",SKY_BLUE:"brightness(0) saturate(100%) invert(31%) sepia(81%) saturate(2692%) hue-rotate(171deg) brightness(96%) contrast(101%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(76%) sepia(5%) saturate(94%) hue-rotate(155deg) brightness(86%) contrast(88%)"}},bf=_f`
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
    scrollbar-color: ${I.color.LIGHTEST_BROWN} ${I.color.SLIGHT_DARK_BROWN};
  }
`;var wu,Su;const U=((Su=(wu=globalThis.browser)==null?void 0:wu.runtime)==null?void 0:Su.id)==null?globalThis.chrome:globalThis.browser,Gf=d.nav`
  display: inline-flex;

  height: 36px;
`,Hf=d.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,zf=d.li`
  display: flex;
  flex-direction: column;
`,$f=d.button`
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
`,Pf=d.span`
  display: inline-block;

  width: ${({$isSelected:e})=>e?"100%":"0"};
  height: 2px;

  background-color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:e})=>e.color.LEMON};
  }
`,Bf=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],Uf=e=>{const{selectedCategory:t,onChange:n}=e;return s.jsx(Gf,{children:s.jsx(Hf,{children:Bf.map(({displayName:r,category:o})=>s.jsxs(zf,{children:[s.jsx($f,{$isSelected:o===t,onClick:()=>{n(o)},children:r}),s.jsx(Pf,{$isSelected:o===t})]},r))})})},Yo={none:I.color.WHITE,totamjung:I.color.DARK_BROWN,bojExtendedDark:I.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:I.bojExtendedColor.DARK_INDIGO,solvedAcLight:I.color.WHITE,solvedAcDark:I.solvedAcColor.DARK_INDIGO,solvedAcBlack:I.color.BLACK},id={none:I.color.BLACK,totamjung:I.color.GOLD,bojExtendedDark:I.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:I.color.WHITE,solvedAcLight:I.color.BLACK,solvedAcDark:I.color.WHITE,solvedAcBlack:I.color.WHITE},Ff={...id,none:I.solvedAcColor.GRAY,solvedAcLight:I.solvedAcColor.GRAY,solvedAcDark:I.solvedAcColor.LIGHT_GRAY,solvedAcBlack:I.solvedAcColor.LIGHT_GRAY},Vf={none:I.color.PURE_WHITE,totamjung:I.color.BROWN,bojExtendedDark:I.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:I.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:I.color.PURE_WHITE,solvedAcDark:I.solvedAcColor.INDIGO,solvedAcBlack:I.solvedAcColor.DARK_INDIGO},Yf={none:I.color.LIGHT_GRAY,totamjung:I.color.GOLD,bojExtendedDark:I.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:I.bojExtendedColor.DARK_INDIGO,solvedAcLight:I.color.WHITE,solvedAcDark:I.solvedAcColor.DARK_INDIGO,solvedAcBlack:I.color.BLACK},Wf=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,Zf=d.div`
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
`,ld=d.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`,sd=d.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ad=d.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,cd=d.div`
  padding: ${({$padding:e})=>e};

  font-size: 16px;
`,Qf=d.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:e})=>Yo[e]};
`,qf=d.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:e})=>Yf[e]};
  background-color: ${({$totamjungTheme:e})=>Yo[e]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$totamjungTheme:e})=>O`
    & ${ld} {
      border-bottom: 16px solid ${Yo[e]};

      background-color: ${Yo[e]};
    }

    & ${sd} {
      color: ${id[e]};
    }

    & ${ad} > svg {
      color: ${Ff[e]};
    }

    & ${cd} {
      background-color: ${Vf[e]};

      color: ${({theme:t})=>t.color.DARK_GRAY};
    }
  `};
`,Kf=e=>{const{onEscKeyPress:t}=e,n=r=>{r.key==="Escape"&&t()};x.useEffect(()=>(window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}),[t])},ud=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...e},x.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),Xf=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),$i=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),Jf=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),eh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),th=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),nh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),so=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),ao=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),rh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),dd=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),oh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),pd=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),co=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),fd=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...e},x.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),hd=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),ih=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},x.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),lh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),x.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),sh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...e},x.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),x.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),gd=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),ah=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),ch=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),uh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),dh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"})),ph=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...e},x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"}),x.createElement("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"}))),fh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,color:"currentColor"},x.createElement("path",{d:"M13.5 5.5V2m0 10V9m0 13c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2S6 6.51 6 12s1.5 10 7.5 10"}),x.createElement("path",{d:"M15 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C15 8.199 15 7.966 15 7.5zm-9 5h15M5 3.167L4.619 2m-.59 3.567L3 6"}))),md=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},x.createElement("rect",{width:12,height:12,x:2,y:10,rx:2,ry:2}),x.createElement("path",{d:"m17.92 14l3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01"}))),hh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"})),gh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"})),mh=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},x.createElement("path",{fill:"currentColor",d:"M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"}));var vd={exports:{}},Fe={},xd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var b=C.length;C.push(L);e:for(;0<b;){var P=b-1>>>1,B=C[P];if(0<o(B,L))C[P]=L,C[b]=B,b=P;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],b=C.pop();if(b!==L){C[0]=b;e:for(var P=0,B=C.length,ne=B>>>1;P<ne;){var se=2*(P+1)-1,Re=C[se],Ie=se+1,mt=C[Ie];if(0>o(Re,b))Ie<B&&0>o(mt,Re)?(C[P]=mt,C[Ie]=b,P=Ie):(C[P]=Re,C[se]=b,P=se);else if(Ie<B&&0>o(mt,b))C[P]=mt,C[Ie]=b,P=Ie;else break e}}return L}function o(C,L){var b=C.sortIndex-L.sortIndex;return b!==0?b:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],p=1,h=null,g=3,y=!1,A=!1,S=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=C)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function w(C){if(S=!1,v(C),!A)if(n(c)!==null)A=!0,Q(E);else{var L=n(u);L!==null&&te(w,L.startTime-C)}}function E(C,L){A=!1,S&&(S=!1,m(M),M=-1),y=!0;var b=g;try{for(v(L),h=n(c);h!==null&&(!(h.expirationTime>L)||C&&!ce());){var P=h.callback;if(typeof P=="function"){h.callback=null,g=h.priorityLevel;var B=P(h.expirationTime<=L);L=e.unstable_now(),typeof B=="function"?h.callback=B:h===n(c)&&r(c),v(L)}else r(c);h=n(c)}if(h!==null)var ne=!0;else{var se=n(u);se!==null&&te(w,se.startTime-L),ne=!1}return ne}finally{h=null,g=b,y=!1}}var N=!1,T=null,M=-1,z=5,_=-1;function ce(){return!(e.unstable_now()-_<z)}function Ye(){if(T!==null){var C=e.unstable_now();_=C;var L=!0;try{L=T(!0,C)}finally{L?We():(N=!1,T=null)}}else N=!1}var We;if(typeof f=="function")We=function(){f(Ye)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,In=jt.port2;jt.port1.onmessage=Ye,We=function(){In.postMessage(null)}}else We=function(){j(Ye,0)};function Q(C){T=C,N||(N=!0,We())}function te(C,L){M=j(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){A||y||(A=!0,Q(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var b=g;g=L;try{return C()}finally{g=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var b=g;g=C;try{return L()}finally{g=b}},e.unstable_scheduleCallback=function(C,L,b){var P=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?P+b:P):b=P,C){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=b+B,C={id:p++,callback:L,priorityLevel:C,startTime:b,expirationTime:B,sortIndex:-1},b>P?(C.sortIndex=b,t(u,C),n(c)===null&&C===n(u)&&(S?(m(M),M=-1):S=!0,te(w,b-P))):(C.sortIndex=B,t(c,C),A||y||(A=!0,Q(E))),C},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(C){var L=g;return function(){var b=g;g=L;try{return C.apply(this,arguments)}finally{g=b}}}})(yd);xd.exports=yd;var vh=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=x,Ue=vh;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ad=new Set,zr={};function En(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(zr[e]=t,e=0;e<t.length;e++)Ad.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=Object.prototype.hasOwnProperty,yh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},Gc={};function Ah(e){return os.call(Gc,e)?!0:os.call(bc,e)?!1:yh.test(e)?Gc[e]=!0:(bc[e]=!0,!1)}function wh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sh(e,t,n,r){if(t===null||typeof t>"u"||wh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function da(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ua,da);we[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ua,da);we[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ua,da);we[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function pa(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sh(t,n,o,r)&&(n=null),r||o===null?Ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),ha=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),ga=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),Hc=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,dl;function wr(e){if(dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dl=t&&t[1]||""}return`
`+dl+e}var pl=!1;function fl(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wr(e):""}function Th(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function as(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Mn:return"Portal";case is:return"Profiler";case fa:return"StrictMode";case ls:return"Suspense";case ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sd:return(e.displayName||"Context")+".Consumer";case wd:return(e._context.displayName||"Context")+".Provider";case ha:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ga:return t=e.displayName||null,t!==null?t:as(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return as(e(t))}catch{}}return null}function Eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return as(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nh(e){var t=Ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=Nh(e))}function Nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rd(e,t){t=t.checked,t!=null&&pa(e,"checked",t,!1)}function us(e,t){Rd(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Sr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function Id(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rh=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){Rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ih=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,t){if(t){if(Ih[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vs=null,Fn=null,Vn=null;function Uc(e){if(e=fo(e)){if(typeof vs!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Vi(t),vs(e.stateNode,e.type,t))}}function Dd(e){Fn?Vn?Vn.push(e):Vn=[e]:Fn=e}function Ld(){if(Fn){var e=Fn,t=Vn;if(Vn=Fn=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function Od(e,t){return e(t)}function _d(){}var hl=!1;function bd(e,t,n){if(hl)return e(t,n);hl=!0;try{return Od(e,t,n)}finally{hl=!1,(Fn!==null||Vn!==null)&&(_d(),Ld())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var xs=!1;if(Tt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{xs=!1}function kh(e,t,n,r,o,i,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Cr=!1,ci=null,ui=!1,ys=null,Ch={onError:function(e){Cr=!0,ci=e}};function jh(e,t,n,r,o,i,l,a,c){Cr=!1,ci=null,kh.apply(Ch,arguments)}function Mh(e,t,n,r,o,i,l,a,c){if(jh.apply(this,arguments),Cr){if(Cr){var u=ci;Cr=!1,ci=null}else throw Error(R(198));ui||(ui=!0,ys=u)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(Nn(e)!==e)throw Error(R(188))}function Dh(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fc(o),e;if(i===r)return Fc(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Hd(e){return e=Dh(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var $d=Ue.unstable_scheduleCallback,Vc=Ue.unstable_cancelCallback,Lh=Ue.unstable_shouldYield,Oh=Ue.unstable_requestPaint,ue=Ue.unstable_now,_h=Ue.unstable_getCurrentPriorityLevel,va=Ue.unstable_ImmediatePriority,Pd=Ue.unstable_UserBlockingPriority,di=Ue.unstable_NormalPriority,bh=Ue.unstable_LowPriority,Bd=Ue.unstable_IdlePriority,Pi=null,ht=null;function Gh(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:$h,Hh=Math.log,zh=Math.LN2;function $h(e){return e>>>=0,e===0?32:31-(Hh(e)/zh|0)|0}var To=64,Eo=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Tr(a):(i&=l,i!==0&&(r=Tr(i)))}else l=n&~o,l!==0?r=Tr(l):i!==0&&(r=Tr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),o=1<<n,r|=e[n],t&=~o;return r}function Ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-st(i),a=1<<l,c=o[l];c===-1?(!(a&n)||a&r)&&(o[l]=Ph(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ud(){var e=To;return To<<=1,!(To&4194240)&&(To=64),e}function gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function Uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-st(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Y=0;function Fd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vd,ya,Yd,Wd,Zd,ws=!1,No=[],Pt=null,Bt=null,Ut=null,Br=new Map,Ur=new Map,bt=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function hr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fo(t),t!==null&&ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vh(e,t,n,r,o){switch(t){case"focusin":return Pt=hr(Pt,e,t,n,r,o),!0;case"dragenter":return Bt=hr(Bt,e,t,n,r,o),!0;case"mouseover":return Ut=hr(Ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Br.set(i,hr(Br.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ur.set(i,hr(Ur.get(i)||null,e,t,n,r,o)),!0}return!1}function Qd(e){var t=cn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gd(n),t!==null){e.blockedOn=t,Zd(e.priority,function(){Yd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ms=r,n.target.dispatchEvent(r),ms=null}else return t=fo(n),t!==null&&ya(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){Wo(e)&&n.delete(t)}function Yh(){ws=!1,Pt!==null&&Wo(Pt)&&(Pt=null),Bt!==null&&Wo(Bt)&&(Bt=null),Ut!==null&&Wo(Ut)&&(Ut=null),Br.forEach(Wc),Ur.forEach(Wc)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Yh)))}function Fr(e){function t(o){return gr(o,e)}if(0<No.length){gr(No[0],e);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&gr(Pt,e),Bt!==null&&gr(Bt,e),Ut!==null&&gr(Ut,e),Br.forEach(t),Ur.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Qd(n),n.blockedOn===null&&bt.shift()}var Yn=Ct.ReactCurrentBatchConfig,fi=!0;function Wh(e,t,n,r){var o=Y,i=Yn.transition;Yn.transition=null;try{Y=1,Aa(e,t,n,r)}finally{Y=o,Yn.transition=i}}function Zh(e,t,n,r){var o=Y,i=Yn.transition;Yn.transition=null;try{Y=4,Aa(e,t,n,r)}finally{Y=o,Yn.transition=i}}function Aa(e,t,n,r){if(fi){var o=Ss(e,t,n,r);if(o===null)Nl(e,t,r,hi,n),Yc(e,r);else if(Vh(o,e,t,n,r))r.stopPropagation();else if(Yc(e,r),t&4&&-1<Fh.indexOf(e)){for(;o!==null;){var i=fo(o);if(i!==null&&Vd(i),i=Ss(e,t,n,r),i===null&&Nl(e,t,r,hi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var hi=null;function Ss(e,t,n,r){if(hi=null,e=ma(r),e=cn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hi=e,null}function qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_h()){case va:return 1;case Pd:return 4;case di:case bh:return 16;case Bd:return 536870912;default:return 16}default:return 16}}var Ht=null,wa=null,Zo=null;function Kd(){if(Zo)return Zo;var e,t=wa,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function Zc(){return!1}function Ve(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ro:Zc,this.isPropagationStopped=Zc,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Ve(cr),po=ie({},cr,{view:0,detail:0}),Qh=Ve(po),ml,vl,mr,Bi=ie({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(ml=e.screenX-mr.screenX,vl=e.screenY-mr.screenY):vl=ml=0,mr=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:vl}}),Qc=Ve(Bi),qh=ie({},Bi,{dataTransfer:0}),Kh=Ve(qh),Xh=ie({},po,{relatedTarget:0}),xl=Ve(Xh),Jh=ie({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),eg=Ve(Jh),tg=ie({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=Ve(tg),rg=ie({},cr,{data:0}),qc=Ve(rg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function Ta(){return sg}var ag=ie({},po,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cg=Ve(ag),ug=ie({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=Ve(ug),dg=ie({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),pg=Ve(dg),fg=ie({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Ve(fg),gg=ie({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=Ve(gg),vg=[9,13,27,32],Ea=Tt&&"CompositionEvent"in window,jr=null;Tt&&"documentMode"in document&&(jr=document.documentMode);var xg=Tt&&"TextEvent"in window&&!jr,Xd=Tt&&(!Ea||jr&&8<jr&&11>=jr),Xc=" ",Jc=!1;function Jd(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function yg(e,t){switch(e){case"compositionend":return e1(t);case"keypress":return t.which!==32?null:(Jc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Jc?null:e;default:return null}}function Ag(e,t){if(Ln)return e==="compositionend"||!Ea&&Jd(e,t)?(e=Kd(),Zo=wa=Ht=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xd&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function t1(e,t,n,r){Dd(r),t=gi(t,"onChange"),0<t.length&&(n=new Sa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Vr=null;function Sg(e){p1(e,0)}function Ui(e){var t=bn(e);if(Nd(t))return e}function Tg(e,t){if(e==="change")return t}var n1=!1;if(Tt){var yl;if(Tt){var Al="oninput"in document;if(!Al){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),Al=typeof t0.oninput=="function"}yl=Al}else yl=!1;n1=yl&&(!document.documentMode||9<document.documentMode)}function n0(){Mr&&(Mr.detachEvent("onpropertychange",r1),Vr=Mr=null)}function r1(e){if(e.propertyName==="value"&&Ui(Vr)){var t=[];t1(t,Vr,e,ma(e)),bd(Sg,t)}}function Eg(e,t,n){e==="focusin"?(n0(),Mr=t,Vr=n,Mr.attachEvent("onpropertychange",r1)):e==="focusout"&&n0()}function Ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(Vr)}function Rg(e,t){if(e==="click")return Ui(t)}function Ig(e,t){if(e==="input"||e==="change")return Ui(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:kg;function Yr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!os.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function r0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o0(e,t){var n=r0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r0(n)}}function o1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?o1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function i1(){for(var e=window,t=ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ai(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cg(e){var t=i1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&o1(n.ownerDocument.documentElement,n)){if(r!==null&&Na(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=o0(n,i);var l=o0(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jg=Tt&&"documentMode"in document&&11>=document.documentMode,On=null,Ts=null,Dr=null,Es=!1;function i0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Es||On==null||On!==ai(r)||(r=On,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Yr(Dr,r)||(Dr=r,r=gi(Ts,"onSelect"),0<r.length&&(t=new Sa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},wl={},l1={};Tt&&(l1=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Fi(e){if(wl[e])return wl[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in l1)return wl[e]=t[n];return e}var s1=Fi("animationend"),a1=Fi("animationiteration"),c1=Fi("animationstart"),u1=Fi("transitionend"),d1=new Map,l0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){d1.set(e,t),En(t,[e])}for(var Sl=0;Sl<l0.length;Sl++){var Tl=l0[Sl],Mg=Tl.toLowerCase(),Dg=Tl[0].toUpperCase()+Tl.slice(1);Jt(Mg,"on"+Dg)}Jt(s1,"onAnimationEnd");Jt(a1,"onAnimationIteration");Jt(c1,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(u1,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function s0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mh(r,t,void 0,e),e.currentTarget=null}function p1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;s0(o,a,u),i=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;s0(o,a,u),i=c}}}if(ui)throw e=ys,ui=!1,ys=null,e}function K(e,t){var n=t[Cs];n===void 0&&(n=t[Cs]=new Set);var r=e+"__bubble";n.has(r)||(f1(t,e,2,!1),n.add(r))}function El(e,t,n){var r=0;t&&(r|=4),f1(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[ko]){e[ko]=!0,Ad.forEach(function(n){n!=="selectionchange"&&(Lg.has(n)||El(n,!1,e),El(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,El("selectionchange",!1,t))}}function f1(e,t,n,r){switch(qd(t)){case 1:var o=Wh;break;case 4:o=Zh;break;default:o=Aa}n=o.bind(null,t,n,e),o=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;a!==null;){if(l=cn(a),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}a=a.parentNode}}r=r.return}bd(function(){var u=i,p=ma(n),h=[];e:{var g=d1.get(e);if(g!==void 0){var y=Sa,A=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":y=cg;break;case"focusin":A="focus",y=xl;break;case"focusout":A="blur",y=xl;break;case"beforeblur":case"afterblur":y=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pg;break;case s1:case a1:case c1:y=eg;break;case u1:y=hg;break;case"scroll":y=Qh;break;case"wheel":y=mg;break;case"copy":case"cut":case"paste":y=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kc}var S=(t&4)!==0,j=!S&&e==="scroll",m=S?g!==null?g+"Capture":null:g;S=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=Pr(f,m),w!=null&&S.push(Zr(f,w,v)))),j)break;f=f.return}0<S.length&&(g=new y(g,A,null,n,p),h.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ms&&(A=n.relatedTarget||n.fromElement)&&(cn(A)||A[Et]))break e;if((y||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=u,A=A?cn(A):null,A!==null&&(j=Nn(A),A!==j||A.tag!==5&&A.tag!==6)&&(A=null)):(y=null,A=u),y!==A)){if(S=Qc,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Kc,w="onPointerLeave",m="onPointerEnter",f="pointer"),j=y==null?g:bn(y),v=A==null?g:bn(A),g=new S(w,f+"leave",y,n,p),g.target=j,g.relatedTarget=v,w=null,cn(p)===u&&(S=new S(m,f+"enter",A,n,p),S.target=v,S.relatedTarget=j,w=S),j=w,y&&A)t:{for(S=y,m=A,f=0,v=S;v;v=Cn(v))f++;for(v=0,w=m;w;w=Cn(w))v++;for(;0<f-v;)S=Cn(S),f--;for(;0<v-f;)m=Cn(m),v--;for(;f--;){if(S===m||m!==null&&S===m.alternate)break t;S=Cn(S),m=Cn(m)}S=null}else S=null;y!==null&&a0(h,g,y,S,!1),A!==null&&j!==null&&a0(h,j,A,S,!0)}}e:{if(g=u?bn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=Tg;else if(e0(g))if(n1)E=Ig;else{E=Ng;var N=Eg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Rg);if(E&&(E=E(e,u))){t1(h,E,n,p);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ds(g,"number",g.value)}switch(N=u?bn(u):window,e){case"focusin":(e0(N)||N.contentEditable==="true")&&(On=N,Ts=u,Dr=null);break;case"focusout":Dr=Ts=On=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,i0(h,n,p);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":i0(h,n,p)}var T;if(Ea)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Ln?Jd(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Xd&&n.locale!=="ko"&&(Ln||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ln&&(T=Kd()):(Ht=p,wa="value"in Ht?Ht.value:Ht.textContent,Ln=!0)),N=gi(u,M),0<N.length&&(M=new qc(M,e,null,n,p),h.push({event:M,listeners:N}),T?M.data=T:(T=e1(n),T!==null&&(M.data=T)))),(T=xg?yg(e,n):Ag(e,n))&&(u=gi(u,"onBeforeInput"),0<u.length&&(p=new qc("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=T))}p1(h,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Zr(e,i,o)),i=Pr(e,t),i!=null&&r.push(Zr(e,i,o))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function a0(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,o?(c=Pr(n,i),c!=null&&l.unshift(Zr(n,c,a))):o||(c=Pr(n,i),c!=null&&l.push(Zr(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Og=/\r\n?/g,_g=/\u0000|\uFFFD/g;function c0(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(_g,"")}function Co(e,t,n){if(t=c0(t),c0(e)!==t&&n)throw Error(R(425))}function mi(){}var Ns=null,Rs=null;function Is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ks=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(e){return u0.resolve(null).then(e).catch(Hg)}:ks;function Hg(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function d0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),ft="__reactFiber$"+ur,Qr="__reactProps$"+ur,Et="__reactContainer$"+ur,Cs="__reactEvents$"+ur,zg="__reactListeners$"+ur,$g="__reactHandles$"+ur;function cn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=d0(e);e!==null;){if(n=e[ft])return n;e=d0(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[ft]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Vi(e){return e[Qr]||null}var js=[],Gn=-1;function en(e){return{current:e}}function X(e){0>Gn||(e.current=js[Gn],js[Gn]=null,Gn--)}function Z(e,t){Gn++,js[Gn]=e.current,e.current=t}var Kt={},Ne=en(Kt),_e=en(!1),yn=Kt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function vi(){X(_e),X(Ne)}function p0(e,t,n){if(Ne.current!==Kt)throw Error(R(168));Z(Ne,t),Z(_e,n)}function h1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Eh(e)||"Unknown",o));return ie({},n,r)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,yn=Ne.current,Z(Ne,e),Z(_e,_e.current),!0}function f0(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=h1(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,X(_e),X(Ne),Z(Ne,e)):X(_e),Z(_e,n)}var yt=null,Yi=!1,Il=!1;function g1(e){yt===null?yt=[e]:yt.push(e)}function Pg(e){Yi=!0,g1(e)}function tn(){if(!Il&&yt!==null){Il=!0;var e=0,t=Y;try{var n=yt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,Yi=!1}catch(o){throw yt!==null&&(yt=yt.slice(e+1)),$d(va,tn),o}finally{Y=t,Il=!1}}return null}var Hn=[],zn=0,yi=null,Ai=0,Ze=[],Qe=0,An=null,At=1,wt="";function on(e,t){Hn[zn++]=Ai,Hn[zn++]=yi,yi=e,Ai=t}function m1(e,t,n){Ze[Qe++]=At,Ze[Qe++]=wt,Ze[Qe++]=An,An=e;var r=At;e=wt;var o=32-st(r)-1;r&=~(1<<o),n+=1;var i=32-st(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,At=1<<32-st(t)+o|n<<o|r,wt=i+e}else At=1<<i|n<<o|r,wt=e}function Ra(e){e.return!==null&&(on(e,1),m1(e,1,0))}function Ia(e){for(;e===yi;)yi=Hn[--zn],Hn[zn]=null,Ai=Hn[--zn],Hn[zn]=null;for(;e===An;)An=Ze[--Qe],Ze[Qe]=null,wt=Ze[--Qe],Ze[Qe]=null,At=Ze[--Qe],Ze[Qe]=null}var Be=null,Pe=null,ee=!1,ot=null;function v1(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function h0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Pe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:At,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Pe=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ds(e){if(ee){var t=Pe;if(t){var n=t;if(!h0(e,t)){if(Ms(e))throw Error(R(418));t=Ft(n.nextSibling);var r=Be;t&&h0(e,t)?v1(r,n):(e.flags=e.flags&-4097|2,ee=!1,Be=e)}}else{if(Ms(e))throw Error(R(418));e.flags=e.flags&-4097|2,ee=!1,Be=e}}}function g0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function jo(e){if(e!==Be)return!1;if(!ee)return g0(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Is(e.type,e.memoizedProps)),t&&(t=Pe)){if(Ms(e))throw x1(),Error(R(418));for(;t;)v1(e,t),t=Ft(t.nextSibling)}if(g0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Be?Ft(e.stateNode.nextSibling):null;return!0}function x1(){for(var e=Pe;e;)e=Ft(e.nextSibling)}function nr(){Pe=Be=null,ee=!1}function ka(e){ot===null?ot=[e]:ot.push(e)}var Bg=Ct.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Mo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function m0(e){var t=e._init;return t(e._payload)}function y1(e){function t(m,f){if(e){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Zt(m,f),m.index=0,m.sibling=null,m}function i(m,f,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,w){return f===null||f.tag!==6?(f=Ol(v,m.mode,w),f.return=m,f):(f=o(f,v),f.return=m,f)}function c(m,f,v,w){var E=v.type;return E===Dn?p(m,f,v.props.children,w,v.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ot&&m0(E)===f.type)?(w=o(f,v.props),w.ref=vr(m,f,v),w.return=m,w):(w=ni(v.type,v.key,v.props,null,m.mode,w),w.ref=vr(m,f,v),w.return=m,w)}function u(m,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=_l(v,m.mode,w),f.return=m,f):(f=o(f,v.children||[]),f.return=m,f)}function p(m,f,v,w,E){return f===null||f.tag!==7?(f=mn(v,m.mode,w,E),f.return=m,f):(f=o(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ol(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ao:return v=ni(f.type,f.key,f.props,null,m.mode,v),v.ref=vr(m,null,f),v.return=m,v;case Mn:return f=_l(f,m.mode,v),f.return=m,f;case Ot:var w=f._init;return h(m,w(f._payload),v)}if(Sr(f)||pr(f))return f=mn(f,m.mode,v,null),f.return=m,f;Mo(m,f)}return null}function g(m,f,v,w){var E=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(m,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ao:return v.key===E?c(m,f,v,w):null;case Mn:return v.key===E?u(m,f,v,w):null;case Ot:return E=v._init,g(m,f,E(v._payload),w)}if(Sr(v)||pr(v))return E!==null?null:p(m,f,v,w,null);Mo(m,v)}return null}function y(m,f,v,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,a(f,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ao:return m=m.get(w.key===null?v:w.key)||null,c(f,m,w,E);case Mn:return m=m.get(w.key===null?v:w.key)||null,u(f,m,w,E);case Ot:var N=w._init;return y(m,f,v,N(w._payload),E)}if(Sr(w)||pr(w))return m=m.get(v)||null,p(f,m,w,E,null);Mo(f,w)}return null}function A(m,f,v,w){for(var E=null,N=null,T=f,M=f=0,z=null;T!==null&&M<v.length;M++){T.index>M?(z=T,T=null):z=T.sibling;var _=g(m,T,v[M],w);if(_===null){T===null&&(T=z);break}e&&T&&_.alternate===null&&t(m,T),f=i(_,f,M),N===null?E=_:N.sibling=_,N=_,T=z}if(M===v.length)return n(m,T),ee&&on(m,M),E;if(T===null){for(;M<v.length;M++)T=h(m,v[M],w),T!==null&&(f=i(T,f,M),N===null?E=T:N.sibling=T,N=T);return ee&&on(m,M),E}for(T=r(m,T);M<v.length;M++)z=y(T,m,M,v[M],w),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?M:z.key),f=i(z,f,M),N===null?E=z:N.sibling=z,N=z);return e&&T.forEach(function(ce){return t(m,ce)}),ee&&on(m,M),E}function S(m,f,v,w){var E=pr(v);if(typeof E!="function")throw Error(R(150));if(v=E.call(v),v==null)throw Error(R(151));for(var N=E=null,T=f,M=f=0,z=null,_=v.next();T!==null&&!_.done;M++,_=v.next()){T.index>M?(z=T,T=null):z=T.sibling;var ce=g(m,T,_.value,w);if(ce===null){T===null&&(T=z);break}e&&T&&ce.alternate===null&&t(m,T),f=i(ce,f,M),N===null?E=ce:N.sibling=ce,N=ce,T=z}if(_.done)return n(m,T),ee&&on(m,M),E;if(T===null){for(;!_.done;M++,_=v.next())_=h(m,_.value,w),_!==null&&(f=i(_,f,M),N===null?E=_:N.sibling=_,N=_);return ee&&on(m,M),E}for(T=r(m,T);!_.done;M++,_=v.next())_=y(T,m,M,_.value,w),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?M:_.key),f=i(_,f,M),N===null?E=_:N.sibling=_,N=_);return e&&T.forEach(function(Ye){return t(m,Ye)}),ee&&on(m,M),E}function j(m,f,v,w){if(typeof v=="object"&&v!==null&&v.type===Dn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ao:e:{for(var E=v.key,N=f;N!==null;){if(N.key===E){if(E=v.type,E===Dn){if(N.tag===7){n(m,N.sibling),f=o(N,v.props.children),f.return=m,m=f;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ot&&m0(E)===N.type){n(m,N.sibling),f=o(N,v.props),f.ref=vr(m,N,v),f.return=m,m=f;break e}n(m,N);break}else t(m,N);N=N.sibling}v.type===Dn?(f=mn(v.props.children,m.mode,w,v.key),f.return=m,m=f):(w=ni(v.type,v.key,v.props,null,m.mode,w),w.ref=vr(m,f,v),w.return=m,m=w)}return l(m);case Mn:e:{for(N=v.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=o(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=_l(v,m.mode,w),f.return=m,m=f}return l(m);case Ot:return N=v._init,j(m,f,N(v._payload),w)}if(Sr(v))return A(m,f,v,w);if(pr(v))return S(m,f,v,w);Mo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,v),f.return=m,m=f):(n(m,f),f=Ol(v,m.mode,w),f.return=m,m=f),l(m)):n(m,f)}return j}var rr=y1(!0),A1=y1(!1),wi=en(null),Si=null,$n=null,Ca=null;function ja(){Ca=$n=Si=null}function Ma(e){var t=wi.current;X(wi),e._currentValue=t}function Ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){Si=e,Ca=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(Si===null)throw Error(R(308));$n=e,Si.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var un=null;function Da(e){un===null?un=[e]:un.push(e)}function w1(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Da(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Da(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xa(e,n)}}function v0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var o=e.updateQueue;_t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;l=0,p=u=c=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=e,S=a;switch(g=t,y=n,S.tag){case 1:if(A=S.payload,typeof A=="function"){h=A.call(y,h,g);break e}h=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=S.payload,g=typeof A=="function"?A.call(y,h,g):A,g==null)break e;h=ie({},h,g);break e;case 2:_t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,c=h):p=p.next=y,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(c=h),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Sn|=l,e.lanes=l,e.memoizedState=h}}function x0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var ho={},gt=en(ho),qr=en(ho),Kr=en(ho);function dn(e){if(e===ho)throw Error(R(174));return e}function Oa(e,t){switch(Z(Kr,t),Z(qr,e),Z(gt,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}X(gt),Z(gt,t)}function or(){X(gt),X(qr),X(Kr)}function T1(e){dn(Kr.current);var t=dn(gt.current),n=fs(t,e.type);t!==n&&(Z(qr,e),Z(gt,n))}function _a(e){qr.current===e&&(X(gt),X(qr))}var re=en(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function ba(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var Ko=Ct.ReactCurrentDispatcher,Cl=Ct.ReactCurrentBatchConfig,wn=0,oe=null,fe=null,me=null,Ni=!1,Lr=!1,Xr=0,Ug=0;function Se(){throw Error(R(321))}function Ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,o,i){if(wn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?Wg:Zg,e=n(r,o),Lr){i=0;do{if(Lr=!1,Xr=0,25<=i)throw Error(R(301));i+=1,me=fe=null,t.updateQueue=null,Ko.current=Qg,e=n(r,o)}while(Lr)}if(Ko.current=Ri,t=fe!==null&&fe.next!==null,wn=0,me=fe=oe=null,Ni=!1,t)throw Error(R(300));return e}function za(){var e=Xr!==0;return Xr=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function et(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(R(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function Jr(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=et(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,c=null,u=i;do{var p=u.lane;if((wn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,l=r):c=c.next=h,oe.lanes|=p,Sn|=p}u=u.next}while(u!==null&&u!==i);c===null?l=r:c.next=a,ct(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,Sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ml(e){var t=et(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ct(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function E1(){}function N1(e,t){var n=oe,r=et(),o=t(),i=!ct(r.memoizedState,o);if(i&&(r.memoizedState=o,Oe=!0),r=r.queue,$a(k1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,eo(9,I1.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(R(349));wn&30||R1(n,t,o)}return o}function R1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function I1(e,t,n,r){t.value=n,t.getSnapshot=r,C1(t)&&j1(e)}function k1(e,t,n){return n(function(){C1(t)&&j1(e)})}function C1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function j1(e){var t=Nt(e,1);t!==null&&at(t,e,1,-1)}function y0(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Yg.bind(null,oe,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function M1(){return et().memoizedState}function Xo(e,t,n,r){var o=dt();oe.flags|=e,o.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var o=et();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&Ga(r,l.deps)){o.memoizedState=eo(t,n,i,r);return}}oe.flags|=e,o.memoizedState=eo(1|t,n,i,r)}function A0(e,t){return Xo(8390656,8,e,t)}function $a(e,t){return Wi(2048,8,e,t)}function D1(e,t){return Wi(4,2,e,t)}function L1(e,t){return Wi(4,4,e,t)}function O1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _1(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,O1.bind(null,t,e),n)}function Pa(){}function b1(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function G1(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function H1(e,t,n){return wn&21?(ct(n,t)||(n=Ud(),oe.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Fg(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{Y=n,Cl.transition=r}}function z1(){return et().memoizedState}function Vg(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$1(e))P1(t,n);else if(n=w1(e,t,n,r),n!==null){var o=Ce();at(n,e,r,o),B1(n,t,r)}}function Yg(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($1(e))P1(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ct(a,l)){var c=t.interleaved;c===null?(o.next=o,Da(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=w1(e,t,o,r),n!==null&&(o=Ce(),at(n,e,r,o),B1(n,t,r))}}function $1(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function P1(e,t){Lr=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function B1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xa(e,n)}}var Ri={readContext:Je,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Wg={readContext:Je,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:A0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4194308,4,O1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vg.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:y0,useDebugValue:Pa,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=y0(!1),t=e[0];return e=Fg.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=dt();if(ee){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),xe===null)throw Error(R(349));wn&30||R1(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,A0(k1.bind(null,r,i,e),[e]),r.flags|=2048,eo(9,I1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=dt(),t=xe.identifierPrefix;if(ee){var n=wt,r=At;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ug++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:Je,useCallback:b1,useContext:Je,useEffect:$a,useImperativeHandle:_1,useInsertionEffect:D1,useLayoutEffect:L1,useMemo:G1,useReducer:jl,useRef:M1,useState:function(){return jl(Jr)},useDebugValue:Pa,useDeferredValue:function(e){var t=et();return H1(t,fe.memoizedState,e)},useTransition:function(){var e=jl(Jr)[0],t=et().memoizedState;return[e,t]},useMutableSource:E1,useSyncExternalStore:N1,useId:z1,unstable_isNewReconciler:!1},Qg={readContext:Je,useCallback:b1,useContext:Je,useEffect:$a,useImperativeHandle:_1,useInsertionEffect:D1,useLayoutEffect:L1,useMemo:G1,useReducer:Ml,useRef:M1,useState:function(){return Ml(Jr)},useDebugValue:Pa,useDeferredValue:function(e){var t=et();return fe===null?t.memoizedState=e:H1(t,fe.memoizedState,e)},useTransition:function(){var e=Ml(Jr)[0],t=et().memoizedState;return[e,t]},useMutableSource:E1,useSyncExternalStore:N1,useId:z1,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Os(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zi={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=Wt(e),i=St(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(at(t,e,o,r),qo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=Wt(e),i=St(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(at(t,e,o,r),qo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Wt(e),o=St(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(at(t,e,r,n),qo(t,e,r))}};function w0(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(o,i):!0}function U1(e,t,n){var r=!1,o=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(o=be(t)?yn:Ne.current,r=t.contextTypes,i=(r=r!=null)?tr(e,o):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function S0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zi.enqueueReplaceState(t,t.state,null)}function _s(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},La(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Je(i):(i=be(t)?yn:Ne.current,o.context=tr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Os(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Zi.enqueueReplaceState(o,o.state,null),Ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=Th(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function F1(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ki||(ki=!0,Ys=r),bs(e,t)},n}function V1(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bs(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function T0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=um.bind(null,e,t,n),t.then(e,e))}function E0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function N0(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var Kg=Ct.ReactCurrentOwner,Oe=!1;function ke(e,t,n,r){t.child=e===null?A1(t,null,n,r):rr(t,e.child,n,r)}function R0(e,t,n,r,o){n=n.render;var i=t.ref;return Wn(t,o),r=Ha(e,t,n,r,i,o),n=za(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(ee&&n&&Ra(t),t.flags|=1,ke(e,t,r,o),t.child)}function I0(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Y1(e,t,i,r,o)):(e=ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(l,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Y1(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Yr(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return Gs(e,t,n,r,o)}function W1(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Bn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Bn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Bn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Bn,$e),$e|=r;return ke(e,t,o,n),t.child}function Z1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,o){var i=be(n)?yn:Ne.current;return i=tr(t,i),Wn(t,o),n=Ha(e,t,n,r,i,o),r=za(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(ee&&r&&Ra(t),t.flags|=1,ke(e,t,n,o),t.child)}function k0(e,t,n,r,o){if(be(n)){var i=!0;xi(t)}else i=!1;if(Wn(t,o),t.stateNode===null)Jo(e,t),U1(t,n,r),_s(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=be(n)?yn:Ne.current,u=tr(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&S0(t,l,r,u),_t=!1;var g=t.memoizedState;l.state=g,Ti(t,r,l,o),c=t.memoizedState,a!==r||g!==c||_e.current||_t?(typeof p=="function"&&(Os(t,n,p,r),c=t.memoizedState),(a=_t||w0(t,n,a,r,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,S1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nt(t.type,a),l.props=u,h=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Je(c):(c=be(n)?yn:Ne.current,c=tr(t,c));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||g!==c)&&S0(t,l,r,c),_t=!1,g=t.memoizedState,l.state=g,Ti(t,r,l,o);var A=t.memoizedState;a!==h||g!==A||_e.current||_t?(typeof y=="function"&&(Os(t,n,y,r),A=t.memoizedState),(u=_t||w0(t,n,u,r,g,A,c)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,A,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,A,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),l.props=r,l.state=A,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,i,o)}function Hs(e,t,n,r,o,i){Z1(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&f0(t,n,!1),Rt(e,t,i);r=t.stateNode,Kg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,i),t.child=rr(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&f0(t,n,!0),t.child}function Q1(e){var t=e.stateNode;t.pendingContext?p0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&p0(e,t.context,!1),Oa(e,t.containerInfo)}function C0(e,t,n,r,o){return nr(),ka(o),t.flags|=256,ke(e,t,n,r),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function q1(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(re,o&1),e===null)return Ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ki(l,r,0,null),e=mn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$s(n),t.memoizedState=zs,e):Ba(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Xg(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Zt(a,i):(i=mn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?$s(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=zs,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=Ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&ka(r),rr(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error(R(422))),Do(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ki({mode:"visible",children:r.children},o,0,null),i=mn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=$s(l),t.memoizedState=zs,i);if(!(t.mode&1))return Do(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(R(419)),r=Dl(i,r,void 0),Do(e,t,l,r)}if(a=(l&e.childLanes)!==0,Oe||a){if(r=xe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),at(r,e,o,-1))}return Za(),r=Dl(Error(R(421))),Do(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=dm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=Ft(o.nextSibling),Be=t,ee=!0,ot=null,e!==null&&(Ze[Qe++]=At,Ze[Qe++]=wt,Ze[Qe++]=An,At=e.id,wt=e.overflow,An=t),t=Ba(t,r.children),t.flags|=4096,t)}function j0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ls(e.return,t,n)}function Ll(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function K1(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&j0(e,n,t);else if(e.tag===19)j0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ei(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ll(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ei(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ll(t,!0,n,null,i);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jg(e,t,n){switch(t.tag){case 3:Q1(t),nr();break;case 5:T1(t);break;case 1:be(t.type)&&xi(t);break;case 4:Oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(wi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?q1(e,t,n):(Z(re,re.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);Z(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return K1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,W1(e,t,n)}return Rt(e,t,n)}var X1,Ps,J1,e2;X1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ps=function(){};J1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,dn(gt.current);var i=null;switch(n){case"input":o=cs(e,o),r=cs(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=ps(e,o),r=ps(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}hs(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&K("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};e2=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function em(e,t,n){var r=t.pendingProps;switch(Ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return be(t.type)&&vi(),Te(t),null;case 3:return r=t.stateNode,or(),X(_e),X(Ne),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Qs(ot),ot=null))),Ps(e,t),Te(t),null;case 5:_a(t);var o=dn(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)J1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Te(t),null}if(e=dn(gt.current),jo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[Qr]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Er.length;o++)K(Er[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":zc(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":Pc(r,i),K("invalid",r)}hs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),o=["children",""+a]):zr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&K("scroll",r)}switch(n){case"input":wo(r),$c(r,i,!0);break;case"textarea":wo(r),Bc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=mi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ft]=t,e[Qr]=r,X1(e,t,!1,!1),t.stateNode=e;e:{switch(l=gs(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<Er.length;o++)K(Er[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":zc(e,r),o=cs(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),K("invalid",e);break;case"textarea":Pc(e,r),o=ps(e,r),K("invalid",e);break;default:o=r}hs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Md(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cd(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$r(e,c):typeof c=="number"&&$r(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&K("scroll",e):c!=null&&pa(e,i,c,l))}switch(n){case"input":wo(e),$c(e,r,!1);break;case"textarea":wo(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Un(e,!!r.multiple,i,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)e2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=dn(Kr.current),dn(gt.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Te(t),null;case 13:if(X(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Pe!==null&&t.mode&1&&!(t.flags&128))x1(),nr(),t.flags|=98560,i=!1;else if(i=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[ft]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else ot!==null&&(Qs(ot),ot=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):Za())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return or(),Ps(e,t),e===null&&Wr(t.stateNode.containerInfo),Te(t),null;case 10:return Ma(t.type._context),Te(t),null;case 17:return be(t.type)&&vi(),Te(t),null;case 19:if(X(re),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)xr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ei(e),l!==null){for(t.flags|=128,xr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>lr&&(t.flags|=128,r=!0,xr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ei(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ee)return Te(t),null}else 2*ue()-i.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,xr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=re.current,Z(re,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function tm(e,t){switch(Ia(t),t.tag){case 1:return be(t.type)&&vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),X(_e),X(Ne),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _a(t),null;case 13:if(X(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(re),null;case 4:return or(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var Lo=!1,Ee=!1,nm=typeof WeakSet=="function"?WeakSet:Set,D=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Bs(e,t,n){try{n()}catch(r){ae(e,t,r)}}var M0=!1;function rm(e,t){if(Ns=fi,e=i1(),Na(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,p=0,h=e,g=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++u===o&&(a=l),g===i&&++p===r&&(c=l),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rs={focusedElem:e,selectionRange:n},fi=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var S=A.memoizedProps,j=A.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:nt(t.type,S),j);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return A=M0,M0=!1,A}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bs(t,n,i)}o=o.next}while(o!==r)}}function Qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function t2(e){var t=e.alternate;t!==null&&(e.alternate=null,t2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[Qr],delete t[Cs],delete t[zg],delete t[$g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function n2(e){return e.tag===5||e.tag===3||e.tag===4}function D0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var ye=null,rt=!1;function Dt(e,t,n){for(n=n.child;n!==null;)r2(e,t,n),n=n.sibling}function r2(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Pi,n)}catch{}switch(n.tag){case 5:Ee||Pn(n,t);case 6:var r=ye,o=rt;ye=null,Dt(e,t,n),ye=r,rt=o,ye!==null&&(rt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(rt?(e=ye,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Fr(e)):Rl(ye,n.stateNode));break;case 4:r=ye,o=rt,ye=n.stateNode.containerInfo,rt=!0,Dt(e,t,n),ye=r,rt=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Bs(n,t,l),o=o.next}while(o!==r)}Dt(e,t,n);break;case 1:if(!Ee&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Dt(e,t,n),Ee=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function L0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nm),t.forEach(function(r){var o=pm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,rt=!1;break e;case 3:ye=a.stateNode.containerInfo,rt=!0;break e;case 4:ye=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(ye===null)throw Error(R(160));r2(i,l,o),ye=null,rt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ae(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)o2(t,e),t=t.sibling}function o2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ut(e),r&4){try{Or(3,e,e.return),Qi(3,e)}catch(S){ae(e,e.return,S)}try{Or(5,e,e.return)}catch(S){ae(e,e.return,S)}}break;case 1:tt(t,e),ut(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(tt(t,e),ut(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{$r(o,"")}catch(S){ae(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Rd(o,i),gs(a,l);var u=gs(a,i);for(l=0;l<c.length;l+=2){var p=c[l],h=c[l+1];p==="style"?Md(o,h):p==="dangerouslySetInnerHTML"?Cd(o,h):p==="children"?$r(o,h):pa(o,p,h,u)}switch(a){case"input":us(o,i);break;case"textarea":Id(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Un(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?Un(o,!!i.multiple,i.defaultValue,!0):Un(o,!!i.multiple,i.multiple?[]:"",!1))}o[Qr]=i}catch(S){ae(e,e.return,S)}}break;case 6:if(tt(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){ae(e,e.return,S)}}break;case 3:if(tt(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(S){ae(e,e.return,S)}break;case 4:tt(t,e),ut(e);break;case 13:tt(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Va=ue())),r&4&&L0(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||p,tt(t,e),Ee=u):tt(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(D=e,p=e.child;p!==null;){for(h=D=p;D!==null;){switch(g=D,y=g.child,g.tag){case 0:case 11:case 14:case 15:Or(4,g,g.return);break;case 1:Pn(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(S){ae(r,n,S)}}break;case 5:Pn(g,g.return);break;case 22:if(g.memoizedState!==null){_0(h);continue}}y!==null?(y.return=g,D=y):_0(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=jd("display",l))}catch(S){ae(e,e.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){ae(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tt(t,e),ut(e),r&4&&L0(e);break;case 21:break;default:tt(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(n2(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($r(o,""),r.flags&=-33);var i=D0(e);Vs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=D0(e);Fs(e,a,l);break;default:throw Error(R(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function om(e,t,n){D=e,i2(e)}function i2(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Lo;if(!l){var a=o.alternate,c=a!==null&&a.memoizedState!==null||Ee;a=Lo;var u=Ee;if(Lo=l,(Ee=c)&&!u)for(D=o;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?b0(o):c!==null?(c.return=l,D=c):b0(o);for(;i!==null;)D=i,i2(i),i=i.sibling;D=o,Lo=a,Ee=u}O0(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):O0(e)}}function O0(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&x0(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}x0(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Fr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ee||t.flags&512&&Us(t)}catch(g){ae(t,t.return,g)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function _0(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function b0(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qi(4,t)}catch(c){ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ae(t,o,c)}}var i=t.return;try{Us(t)}catch(c){ae(t,i,c)}break;case 5:var l=t.return;try{Us(t)}catch(c){ae(t,l,c)}}}catch(c){ae(t,t.return,c)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var im=Math.ceil,Ii=Ct.ReactCurrentDispatcher,Ua=Ct.ReactCurrentOwner,Ke=Ct.ReactCurrentBatchConfig,$=0,xe=null,pe=null,Ae=0,$e=0,Bn=en(0),he=0,to=null,Sn=0,qi=0,Fa=0,_r=null,Le=null,Va=0,lr=1/0,xt=null,ki=!1,Ys=null,Yt=null,Oo=!1,zt=null,Ci=0,br=0,Ws=null,ei=-1,ti=0;function Ce(){return $&6?ue():ei!==-1?ei:ei=ue()}function Wt(e){return e.mode&1?$&2&&Ae!==0?Ae&-Ae:Bg.transition!==null?(ti===0&&(ti=Ud()),ti):(e=Y,e!==0||(e=window.event,e=e===void 0?16:qd(e.type)),e):1}function at(e,t,n,r){if(50<br)throw br=0,Ws=null,Error(R(185));uo(e,n,r),(!($&2)||e!==xe)&&(e===xe&&(!($&2)&&(qi|=n),he===4&&Gt(e,Ae)),Ge(e,r),n===1&&$===0&&!(t.mode&1)&&(lr=ue()+500,Yi&&tn()))}function Ge(e,t){var n=e.callbackNode;Bh(e,t);var r=pi(e,e===xe?Ae:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?Pg(G0.bind(null,e)):g1(G0.bind(null,e)),Gg(function(){!($&6)&&tn()}),n=null;else{switch(Fd(r)){case 1:n=va;break;case 4:n=Pd;break;case 16:n=di;break;case 536870912:n=Bd;break;default:n=di}n=f2(n,l2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function l2(e,t){if(ei=-1,ti=0,$&6)throw Error(R(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=pi(e,e===xe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var o=$;$|=2;var i=a2();(xe!==e||Ae!==t)&&(xt=null,lr=ue()+500,gn(e,t));do try{am();break}catch(a){s2(e,a)}while(!0);ja(),Ii.current=i,$=o,pe!==null?t=0:(xe=null,Ae=0,t=he)}if(t!==0){if(t===2&&(o=As(e),o!==0&&(r=o,t=Zs(e,o))),t===1)throw n=to,gn(e,0),Gt(e,r),Ge(e,ue()),n;if(t===6)Gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!lm(o)&&(t=ji(e,r),t===2&&(i=As(e),i!==0&&(r=i,t=Zs(e,i))),t===1))throw n=to,gn(e,0),Gt(e,r),Ge(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:ln(e,Le,xt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Va+500-ue(),10<t)){if(pi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ks(ln.bind(null,e,Le,xt),t);break}ln(e,Le,xt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-st(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*im(r/1960))-r,10<r){e.timeoutHandle=ks(ln.bind(null,e,Le,xt),r);break}ln(e,Le,xt);break;case 5:ln(e,Le,xt);break;default:throw Error(R(329))}}}return Ge(e,ue()),e.callbackNode===n?l2.bind(null,e):null}function Zs(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=ji(e,t),e!==2&&(t=Le,Le=n,t!==null&&Qs(t)),e}function Qs(e){Le===null?Le=e:Le.push.apply(Le,e)}function lm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ct(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Fa,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function G0(e){if($&6)throw Error(R(327));Zn();var t=pi(e,0);if(!(t&1))return Ge(e,ue()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=As(e);r!==0&&(t=r,n=Zs(e,r))}if(n===1)throw n=to,gn(e,0),Gt(e,t),Ge(e,ue()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Le,xt),Ge(e,ue()),null}function Ya(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(lr=ue()+500,Yi&&tn())}}function Tn(e){zt!==null&&zt.tag===0&&!($&6)&&Zn();var t=$;$|=1;var n=Ke.transition,r=Y;try{if(Ke.transition=null,Y=1,e)return e()}finally{Y=r,Ke.transition=n,$=t,!($&6)&&tn()}}function Wa(){$e=Bn.current,X(Bn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vi();break;case 3:or(),X(_e),X(Ne),ba();break;case 5:_a(r);break;case 4:or();break;case 13:X(re);break;case 19:X(re);break;case 10:Ma(r.type._context);break;case 22:case 23:Wa()}n=n.return}if(xe=e,pe=e=Zt(e.current,null),Ae=$e=t,he=0,to=null,Fa=qi=Sn=0,Le=_r=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}un=null}return e}function s2(e,t){do{var n=pe;try{if(ja(),Ko.current=Ri,Ni){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ni=!1}if(wn=0,me=fe=oe=null,Lr=!1,Xr=0,Ua.current=null,n===null||n.return===null){he=1,to=t,pe=null;break}e:{var i=e,l=n.return,a=n,c=t;if(t=Ae,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=E0(l);if(y!==null){y.flags&=-257,N0(y,l,a,i,t),y.mode&1&&T0(i,u,t),t=y,c=u;var A=t.updateQueue;if(A===null){var S=new Set;S.add(c),t.updateQueue=S}else A.add(c);break e}else{if(!(t&1)){T0(i,u,t),Za();break e}c=Error(R(426))}}else if(ee&&a.mode&1){var j=E0(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),N0(j,l,a,i,t),ka(ir(c,a));break e}}i=c=ir(c,a),he!==4&&(he=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=F1(i,c,t);v0(i,m);break e;case 1:a=c;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yt===null||!Yt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=V1(i,a,t);v0(i,w);break e}}i=i.return}while(i!==null)}u2(n)}catch(E){t=E,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function a2(){var e=Ii.current;return Ii.current=Ri,e===null?Ri:e}function Za(){(he===0||he===3||he===2)&&(he=4),xe===null||!(Sn&268435455)&&!(qi&268435455)||Gt(xe,Ae)}function ji(e,t){var n=$;$|=2;var r=a2();(xe!==e||Ae!==t)&&(xt=null,gn(e,t));do try{sm();break}catch(o){s2(e,o)}while(!0);if(ja(),$=n,Ii.current=r,pe!==null)throw Error(R(261));return xe=null,Ae=0,he}function sm(){for(;pe!==null;)c2(pe)}function am(){for(;pe!==null&&!Lh();)c2(pe)}function c2(e){var t=p2(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?u2(e):pe=t,Ua.current=null}function u2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tm(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}else if(n=em(n,t,$e),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);he===0&&(he=5)}function ln(e,t,n){var r=Y,o=Ke.transition;try{Ke.transition=null,Y=1,cm(e,t,n,r)}finally{Ke.transition=o,Y=r}return null}function cm(e,t,n,r){do Zn();while(zt!==null);if($&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Uh(e,i),e===xe&&(pe=xe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,f2(di,function(){return Zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ke.transition,Ke.transition=null;var l=Y;Y=1;var a=$;$|=4,Ua.current=null,rm(e,n),o2(n,e),Cg(Rs),fi=!!Ns,Rs=Ns=null,e.current=n,om(n),Oh(),$=a,Y=l,Ke.transition=i}else e.current=n;if(Oo&&(Oo=!1,zt=e,Ci=o),i=e.pendingLanes,i===0&&(Yt=null),Gh(n.stateNode),Ge(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ki)throw ki=!1,e=Ys,Ys=null,e;return Ci&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Ws?br++:(br=0,Ws=e):br=0,tn(),null}function Zn(){if(zt!==null){var e=Fd(Ci),t=Ke.transition,n=Y;try{if(Ke.transition=null,Y=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,Ci=0,$&6)throw Error(R(331));var o=$;for($|=4,D=e.current;D!==null;){var i=D,l=i.child;if(D.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(D=u;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:Or(8,p,i)}var h=p.child;if(h!==null)h.return=p,D=h;else for(;D!==null;){p=D;var g=p.sibling,y=p.return;if(t2(p),p===u){D=null;break}if(g!==null){g.return=y,D=g;break}D=y}}}var A=i.alternate;if(A!==null){var S=A.child;if(S!==null){A.child=null;do{var j=S.sibling;S.sibling=null,S=j}while(S!==null)}}D=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Or(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,D=m;break e}D=i.return}}var f=e.current;for(D=f;D!==null;){l=D;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,D=v;else e:for(l=f;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qi(9,a)}}catch(E){ae(a,a.return,E)}if(a===l){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if($=o,tn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Pi,e)}catch{}r=!0}return r}finally{Y=n,Ke.transition=t}}return!1}function H0(e,t,n){t=ir(n,t),t=F1(e,t,1),e=Vt(e,t,1),t=Ce(),e!==null&&(uo(e,1,t),Ge(e,t))}function ae(e,t,n){if(e.tag===3)H0(e,e,n);else for(;t!==null;){if(t.tag===3){H0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=ir(n,e),e=V1(t,e,1),t=Vt(t,e,1),e=Ce(),t!==null&&(uo(t,1,e),Ge(t,e));break}}t=t.return}}function um(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Ae&n)===n&&(he===4||he===3&&(Ae&130023424)===Ae&&500>ue()-Va?gn(e,0):Fa|=n),Ge(e,t)}function d2(e,t){t===0&&(e.mode&1?(t=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):t=1);var n=Ce();e=Nt(e,t),e!==null&&(uo(e,t,n),Ge(e,n))}function dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),d2(e,n)}function pm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),d2(e,n)}var p2;p2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Jg(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,ee&&t.flags&1048576&&m1(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var o=tr(t,Ne.current);Wn(t,n),o=Ha(null,t,r,e,o,n);var i=za();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,xi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,La(t),o.updater=Zi,t.stateNode=o,o._reactInternals=t,_s(t,r,e,n),t=Hs(null,t,r,!0,i,n)):(t.tag=0,ee&&i&&Ra(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hm(r),e=nt(r,e),o){case 0:t=Gs(null,t,r,e,n);break e;case 1:t=k0(null,t,r,e,n);break e;case 11:t=R0(null,t,r,e,n);break e;case 14:t=I0(null,t,r,nt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),Gs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),k0(e,t,r,o,n);case 3:e:{if(Q1(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,S1(e,t),Ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ir(Error(R(423)),t),t=C0(e,t,r,n,o);break e}else if(r!==o){o=ir(Error(R(424)),t),t=C0(e,t,r,n,o);break e}else for(Pe=Ft(t.stateNode.containerInfo.firstChild),Be=t,ee=!0,ot=null,n=A1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===o){t=Rt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return T1(t),e===null&&Ds(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Is(r,o)?l=null:i!==null&&Is(r,i)&&(t.flags|=32),Z1(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&Ds(t),null;case 13:return q1(e,t,n);case 4:return Oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),R0(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(wi,r._currentValue),r._currentValue=l,i!==null)if(ct(i.value,l)){if(i.children===o.children&&!_e.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=St(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ls(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(R(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ls(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Wn(t,n),o=Je(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=nt(r,t.pendingProps),o=nt(r.type,o),I0(e,t,r,o,n);case 15:return Y1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),Jo(e,t),t.tag=1,be(r)?(e=!0,xi(t)):e=!1,Wn(t,n),U1(t,r,o),_s(t,r,o,n),Hs(null,t,r,!0,e,n);case 19:return K1(e,t,n);case 22:return W1(e,t,n)}throw Error(R(156,t.tag))};function f2(e,t){return $d(e,t)}function fm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new fm(e,t,n,r)}function Qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hm(e){if(typeof e=="function")return Qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ha)return 11;if(e===ga)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dn:return mn(n.children,o,i,t);case fa:l=8,o|=8;break;case is:return e=qe(12,n,t,o|2),e.elementType=is,e.lanes=i,e;case ls:return e=qe(13,n,t,o),e.elementType=ls,e.lanes=i,e;case ss:return e=qe(19,n,t,o),e.elementType=ss,e.lanes=i,e;case Td:return Ki(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wd:l=10;break e;case Sd:l=9;break e;case ha:l=11;break e;case ga:l=14;break e;case Ot:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function mn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Ki(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Td,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qa(e,t,n,r,o,i,l,a,c){return e=new gm(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(i),e}function mm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function h2(e){if(!e)return Kt;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(be(n))return h1(e,n,t)}return t}function g2(e,t,n,r,o,i,l,a,c){return e=qa(n,r,!0,e,o,i,l,a,c),e.context=h2(null),n=e.current,r=Ce(),o=Wt(n),i=St(r,o),i.callback=t??null,Vt(n,i,o),e.current.lanes=o,uo(e,o,r),Ge(e,r),e}function Xi(e,t,n,r){var o=t.current,i=Ce(),l=Wt(o);return n=h2(n),t.context===null?t.context=n:t.pendingContext=n,t=St(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,l),e!==null&&(at(e,o,l,i),qo(e,o,l)),l}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function z0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ka(e,t){z0(e,t),(e=e.alternate)&&z0(e,t)}function vm(){return null}var m2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}Ji.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Xi(e,t,null,null)};Ji.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Xi(null,e,null,null)}),t[Et]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Qd(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $0(){}function xm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Mi(l);i.call(u)}}var l=g2(t,r,e,0,null,!1,!1,"",$0);return e._reactRootContainer=l,e[Et]=l.current,Wr(e.nodeType===8?e.parentNode:e),Tn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Mi(c);a.call(u)}}var c=qa(e,0,!1,null,null,!1,!1,"",$0);return e._reactRootContainer=c,e[Et]=c.current,Wr(e.nodeType===8?e.parentNode:e),Tn(function(){Xi(t,c,n,r)}),c}function tl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var c=Mi(l);a.call(c)}}Xi(t,l,e,o)}else l=xm(n,t,e,o,r);return Mi(l)}Vd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(xa(t,n|1),Ge(t,ue()),!($&6)&&(lr=ue()+500,tn()))}break;case 13:Tn(function(){var r=Nt(e,1);if(r!==null){var o=Ce();at(r,e,1,o)}}),Ka(e,1)}};ya=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ce();at(t,e,134217728,n)}Ka(e,134217728)}};Yd=function(e){if(e.tag===13){var t=Wt(e),n=Nt(e,t);if(n!==null){var r=Ce();at(n,e,t,r)}Ka(e,t)}};Wd=function(){return Y};Zd=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};vs=function(e,t,n){switch(t){case"input":if(us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vi(r);if(!o)throw Error(R(90));Nd(r),us(r,o)}}}break;case"textarea":Id(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};Od=Ya;_d=Tn;var ym={usingClientEntryPoint:!1,Events:[fo,bn,Vi,Dd,Ld,Ya]},yr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Am={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hd(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Pi=_o.inject(Am),ht=_o}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(R(200));return mm(e,t,null,n)};Fe.createRoot=function(e,t){if(!Ja(e))throw Error(R(299));var n=!1,r="",o=m2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qa(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Xa(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Hd(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Tn(e)};Fe.hydrate=function(e,t,n){if(!el(t))throw Error(R(200));return tl(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=m2;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=g2(t,null,e,1,n??null,o,!1,i,l),e[Et]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ji(t)};Fe.render=function(e,t,n){if(!el(t))throw Error(R(200));return tl(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!el(e))throw Error(R(40));return e._reactRootContainer?(Tn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Fe.unstable_batchedUpdates=Ya;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return tl(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function v2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v2)}catch(e){console.error(e)}}v2(),vd.exports=Fe;var x2=vd.exports;const Rn=e=>{const{title:t,open:n,padding:r="16px",closeOnBackdropClick:o=!0,theme:i="totamjung",portalTarget:l,onClose:a,children:c}=e;return Kf({onEscKeyPress:a}),n&&x2.createPortal(s.jsxs(Wf,{children:[s.jsx(Zf,{onClick:()=>{o&&a()}}),s.jsxs(qf,{role:"dialog",$totamjungTheme:i,children:[s.jsxs(ld,{children:[s.jsx(sd,{children:t}),s.jsx(ad,{onClick:a,"aria-label":"모달 닫기",children:s.jsx(th,{})})]}),s.jsx(cd,{$padding:r,children:c})]})]}),l??document.body)},go=e=>{const{children:t,theme:n="totamjung"}=e;return s.jsx(Qf,{$totamjungTheme:n,children:t})},wm=d.button`
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
`,Sm=d.span`
  font-size: ${({$size:e})=>e==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,Tm=d.img`
  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  object-fit: contain;
`,Em=d.div`
  flex-shrink: 0;

  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:e})=>e};
  }
`,J=e=>{const{name:t,size:n,width:r,color:o,iconSrc:i,ariaLabel:l,...a}=e;return s.jsxs(wm,{$size:n,$width:r,$color:o,"aria-label":l,...a,children:[i&&(typeof i=="string"?s.jsx(Tm,{src:i,alt:t,$size:n}):s.jsx(Em,{$size:n,$color:o,children:i})),s.jsx(Sm,{$size:n,children:t})]})},Nm=d.div`
  width: ${({$width:e})=>e};
  max-width: 100%;
  min-height: ${({$height:e})=>e};
`,Rm=d.p`
  font-size: 16px;
  color: ${({theme:e,$totamjungTheme:t})=>no.includes(t)?e.color.BLACK:e.color.WHITE};
`,no=["none","solvedAcLight"],It=e=>{const{title:t,width:n,height:r,open:o,message:i,actionType:l,portalTarget:a,theme:c="totamjung",closeOnBackdropClick:u=!0}=e;return s.jsxs(Rn,{title:t,open:o,closeOnBackdropClick:u,portalTarget:a,theme:c,onClose:()=>{l==="yesNo"?e.onNoSelect():e.onClose()},children:[s.jsx(Nm,{$width:n,$height:r,children:s.jsx(Rm,{$totamjungTheme:c,children:i})}),s.jsx(go,{theme:c,children:l==="confirm"?s.jsx(Im,{theme:c,onClose:e.onClose}):l==="cancelConfirm"?s.jsx(km,{theme:c,onClose:e.onClose,onConfirm:e.onConfirm}):s.jsx(Cm,{theme:c,onYesSelect:e.onYesSelect,onNoSelect:e.onNoSelect})})]})},Im=e=>{const{theme:t="totamjung",onClose:n}=e;return s.jsx(J,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(ao,{}),color:no.includes(t)?I.color.DARK_GRAY:I.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:n,autoFocus:!0})},km=e=>{const{theme:t="totamjung",onClose:n,onConfirm:r}=e;return s.jsxs(s.Fragment,{children:[s.jsx(J,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(so,{}),color:no.includes(t)?I.color.DARK_GRAY:I.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(J,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(ao,{}),color:no.includes(t)?I.color.DARK_GRAY:I.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:r})]})},Cm=e=>{const{theme:t="totamjung",onYesSelect:n,onNoSelect:r}=e;return s.jsxs(s.Fragment,{children:[s.jsx(J,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:s.jsx(ao,{}),color:no.includes(t)?I.color.GREEN:I.color.LIME,disabled:!1,ariaLabel:"예",onClick:n}),s.jsx(J,{type:"button",name:"아니요",size:"medium",iconSrc:s.jsx(so,{}),color:I.color.RED,disabled:!1,ariaLabel:"아니요",onClick:r})]})},jm=d.p`
  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  line-height: 1.2;

  ${({theme:e,$type:t})=>t==="primary"?O`
        font-family: Pretendard;
        color: ${e.color.GOLD};
        font-weight: 600;
      `:t==="semiPrimary"?O`
        font-family: Pretendard;
        color: ${e.color.LEMON};
      `:t==="gray"?O`
        font-family: Pretendard;
        color: ${e.color.LIGHT_GRAY};
      `:t==="darkGray"?O`
        font-family: Pretendard;
        color: ${e.color.DARK_GRAY};
      `:t==="code"?O`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:O`
      font-family: Pretendard;
      color: ${e.color.WHITE};
    `}
`,V=e=>{const{type:t,fontSize:n,textAlign:r="left",children:o}=e;return s.jsx(jm,{$type:t,$fontSize:n,$textAlign:r,children:o})},Mm=20,Dm=e=>{const{textList:t,typingTime:n,idleTime:r,erasingTime:o}=e,[i,l]=x.useState(""),[a,c]=x.useState(0),[u,p]=x.useState(Date.now()),[h,g]=x.useState(!1),y=n,A=n+r,S=n+r+o;return x.useEffect(()=>{if(!h||t.length===0)return;a>=t.length&&c(v=>Math.min(t.length-1,v));const f=setInterval(()=>{const v=Date.now(),w=v-u;if(w>=S){p(v),c(N=>(N+1)%t.length);return}if(w>=A){const N=t[a].length-Math.ceil((w-A)/o*t[a].length);l(t[a].slice(0,N));return}if(w>=y){l(t[a]);return}const E=Math.ceil(w/n*t[a].length);l(t[a].slice(0,E))},Mm);return()=>{clearInterval(f)}},[h,a,u,t,n,r,o]),{currentText:i,startTyping:()=>{p(Date.now()),l(""),c(0),g(!0)},stopTyping:()=>{l(""),c(0),g(!1)}}},Lm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",Om="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",_m="/assets/lock-with-clock-DphQokL3.png",y2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",bm="/assets/tier-1-badge-CyfFUTea.png",Gm="/assets/settings-title-BAsh2fbw.png",Hm="/assets/guidebook-button-DB51pF_8.png",zm="/assets/info-button-gVHj_-G9.png",$m="/assets/totamjung-BrXdXI1T.png",Pm="/assets/logo-square-Ly45EudP.png",Bm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",Um="/assets/wood-background-BTxo82aE.png",Fm=He`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Vm=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,Ym=d.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:e})=>e.gradient.BROWN_GRADIENT};

  z-index: 0;
`,Wm=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,Zm=d.img.attrs(({$scaleX:e,$scaleY:t})=>({style:{transform:`scale(${e}, ${t})`}}))`
  width: 160px;

  transform-origin: bottom;
`,Qm=d.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:e})=>e.color.GOLD};
`,qm=d.div`
  position: relative;

  text-align: center;
`,Km=d.span`
  margin: 0 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,Xm=d.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:e})=>e.color.LEMON};

  animation: ${Fm} 0.8s infinite forwards;
`,Jm=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,e3=d.span`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,t3=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,nl=()=>{const[e,t]=x.useState(null);return{activeModalName:e,openModal:o=>{t(o)},closeModal:()=>{t(null)}}},bl=20,n3=e=>{const{onShowComplainModal:t}=e,[n,r]=x.useState(0),o=()=>{r(a=>{const c=a+1;return n===bl&&t(),c})},i=Math.min(1.5,1+Math.max(n-bl,0)*.0025),l=Math.max(.5,1-Math.max(n-bl,0)*.0025);return{increaseClickCount:o,totamjungScaleX:i,totamjungScaleY:l}},r3=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],o3=e=>{const{open:t,onClose:n}=e,{currentText:r,startTyping:o,stopTyping:i}=Dm({textList:r3,typingTime:1600,idleTime:3e3,erasingTime:500}),{activeModalName:l,openModal:a,closeModal:c}=nl(),{increaseClickCount:u,totamjungScaleX:p,totamjungScaleY:h}=n3({onShowComplainModal:()=>a("totamjungComplain")});return x.useEffect(()=>{if(t){o();return}i()},[t]),s.jsx(Rn,{title:"토탐정 정보",open:t,onClose:n,children:s.jsxs(Vm,{children:[s.jsx(Ym,{}),s.jsxs(Wm,{children:[s.jsx(Zm,{src:Pm,alt:"",onClick:u,$scaleX:p,$scaleY:h}),s.jsx(Qm,{children:"토탐정"}),s.jsxs(qm,{children:[s.jsx(Km,{children:r}),s.jsx(Xm,{})]})]}),s.jsxs(Jm,{children:[s.jsxs(V,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전:"," ",s.jsx("b",{children:`v${U.runtime.getManifest().version} - MV${U.runtime.getManifest().manifest_version}`})," ","/ 2025. 5. 4. 빌드"]}),s.jsxs(V,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",s.jsx("b",{children:"요술토끼"}),"(",s.jsx(e3,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),s.jsxs(t3,{children:[s.jsx(J,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:I.color.LIGHT_PURPLE,iconSrc:Bm,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),s.jsx(J,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:I.color.LEMON,iconSrc:s.jsx(uh,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),s.jsx(J,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:I.color.WHITE,iconSrc:s.jsx(dh,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]}),s.jsx(It,{title:"왜 그런 짓을...",width:"350px",height:"auto",open:l==="totamjungComplain",message:"그만 좀 두드려 주시면 안 될까요!?",actionType:"confirm",closeOnBackdropClick:!1,onClose:c})]})})},i3="https://github.com/wzrabbit/boj-totamjung/wiki/%ED%86%A0%ED%83%90%EC%A0%95-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",l3=d.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,s3=d.h1`
  width: 130px;
  height: 100%;
`,a3=d.img`
  width: 100%;
`,c3=d.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,u3=d.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:e})=>e.color.GOLD};
`,P0=d.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,B0=d.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,d3=e=>{const{selectedCategory:t,onCategoryChange:n}=e,[r,o]=x.useState("none");return s.jsxs(l3,{children:[s.jsx(s3,{children:s.jsx(a3,{src:Gm,alt:"토탐정 설정"})}),s.jsx(Uf,{selectedCategory:t,onChange:n}),s.jsxs(c3,{children:[s.jsx(u3,{children:`v${U.runtime.getManifest().version}`}),s.jsx(P0,{type:"button","aria-label":"도움말",onClick:()=>{o("guidePageOpenConfirm")},children:s.jsx(B0,{src:Hm,alt:""})}),s.jsx(P0,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{o("totamjungInfo")},children:s.jsx(B0,{src:zm,alt:""})})]}),s.jsx(It,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:r==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(i3),o("none")},onNoSelect:()=>{o("none")}}),s.jsx(o3,{open:r==="totamjungInfo",onClose:()=>{o("none")}})]})},p3=d.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,f3=d.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,h3=d.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:e})=>e.filter.ORANGE_FILTER};
  object-fit: contain;
`,g3=d.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.ORANGE};
  }
`,m3=d.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:e})=>e.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v3=d.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:e})=>e.color.ORANGE_TRANSPARENT};

  z-index: -1;
`,Qt=e=>{const{iconSrc:t,title:n}=e;return s.jsxs(p3,{children:[s.jsxs(f3,{children:[t&&(typeof t=="string"?s.jsx(h3,{src:t,alt:""}):s.jsx(g3,{children:t})),s.jsx(m3,{children:n})]}),s.jsx(v3,{})]})},x3=d.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:e})=>e.color.GOLD};
`,y3=d.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:e})=>e.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,A3=d.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:e})=>e.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,w3=d.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,S3=d.div`
  & svg {
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,T3=d.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:e})=>e.color.WHITE};
`,E3=d.div`
  display: flex;

  user-select: none;
`,U0=d.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,F0=d.img`
  width: 30px;
  height: 30px;
`,V0=d.p`
  font-size: 16px;
  color: ${({theme:e})=>e.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD};
  }
`,N3=d.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,R3=d.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:t})=>t==="brown"?e.color.BROWN:e.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,I3=d.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,k3=d.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.LEMON};

  cursor: pointer;
`,C3=d.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,j3=d.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:e,$isChecked:t})=>t?O`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:O`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,M3=d.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,D3=e=>{const{isChecked:t,ariaLabel:n,onChange:r}=e;return s.jsxs(C3,{children:[s.jsx(M3,{checked:t,"aria-label":n,onChange:r}),s.jsx(j3,{$isChecked:t})]})},L3=e=>{const{id:t,name:n,isChecked:r,backgroundColor:o,onChange:i}=e;return s.jsx(R3,{$backgroundColor:o,children:s.jsxs(I3,{children:[s.jsx(k3,{children:n}),s.jsx(D3,{isChecked:r,onChange:()=>i(t),ariaLabel:n})]})})},O3=e=>{const{items:t,checkedAlgorithmIds:n,onChange:r}=e;return s.jsx(N3,{children:t.map((o,i)=>s.jsx(L3,{id:o.id,name:o.name,isChecked:n.includes(o.id),backgroundColor:i%2===0?"brown":"light-brown",onChange:r},o.id))})},ro=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force","무차별 대입","무작위 대입"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:["소트","소팅"]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:["수학"]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:"Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬","imos"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap","pq","우큐"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우","네트워크 플로우","network flow"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:["냅색"]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:["gcd"]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:["어쩔FFT"]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix ARray And Lcp Array",tag:"suffix_array",alias:["서픽스 어레이"]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:[]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle","밋 인더 미들"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열 문제",englishName:"Longest Increasing Sequence Problem",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:["egcd","gcd"]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시","벌리캄프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:["외계인 트릭"]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"키타마사",englishName:"Kitamasa",tag:"kitamasa",alias:[]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 스패닝 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]},{id:208,name:"집합과 맵",englishName:"Set / Map",tag:"set",alias:[]},{id:209,name:"트리의 지름",englishName:"Diameter Of A Tree",tag:"tree_diameter",alias:[]},{id:210,name:"cdq 분할 정복",englishName:"Cdq",tag:"cdq",alias:[]},{id:211,name:"최장 공통 부분 수열 문제",englishName:"Longest Common Subsequence",tag:"lcs",alias:[]},{id:212,name:"다이얼",englishName:"Dial",tag:"dial",alias:[]},{id:213,name:"세그먼트 트리 비츠",englishName:"Segment Tree Beats",tag:"beats",alias:["세그비츠"]},{id:214,name:"홀짝성",englishName:"Parity",tag:"parity",alias:["패리티"]},{id:215,name:"피사노 주기",englishName:"Pisano Period",tag:"pisano",alias:[]},{id:216,name:"bulldozer 트릭",englishName:"Bulldozer Trick",tag:"bulldozer",alias:[]},{id:217,name:"불변량 찾기",englishName:"Finding Invariants",tag:"invariant",alias:[]},{id:218,name:"트리에서의 전방향 다이나믹 프로그래밍",englishName:"Rerooting On Trees",tag:"rerooting",alias:[]},{id:219,name:"역추적",englishName:"Traceback",tag:"traceback",alias:[]},{id:220,name:"제한된 트리 너비",englishName:"Treewidth",tag:"treewidth",alias:[]},{id:221,name:"배타적 논리합 기저 (gf(2))",englishName:"XOR Basis (gf(2))",tag:"xor_basis",alias:[]},{id:222,name:"비트 집합을 이용한 최장 공통 부분 수열 최적화",englishName:"Longest Common Subsequence Using Bit Sets",tag:"bitset_lcs",alias:["비트셋 lcs"]},{id:223,name:"격자 그래프",englishName:"Grid Graph",tag:"grid_graph",alias:[]},{id:224,name:"순환군",englishName:"Cyclic Group",tag:"cyclic_group",alias:[]},{id:225,name:"리-차오 트리",englishName:"Li-Chao Tree",tag:"li_chao_tree",alias:["리차오 트리"]},{id:226,name:"키네틱 세그먼트 트리",englishName:"Kinetic Segment Tree",tag:"kinetic_segtree",alias:[]},{id:227,name:"차분 배열 트릭",englishName:"Difference Array",tag:"difference_array",alias:[]},{id:228,name:"최대 부분 배열 문제",englishName:"Maximum Subarray",tag:"maximum_subarray",alias:[]},{id:229,name:"각도 정렬",englishName:"Angle Sorting",tag:"angle_sorting",alias:[]},{id:230,name:"조화수",englishName:"Harmonic Number",tag:"harmonic_number",alias:[]},{id:231,name:"소인수분해",englishName:"Prime Factorization",tag:"prime_factorization",alias:[]}],A2=ro.length,Y0=e=>e.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),w2=e=>{const t=Y0(e),n=[];return ro.forEach(({id:r,name:o,englishName:i,tag:l,alias:a})=>{const c=[o,i,l,...a].map(p=>Y0(p));(t===""||c.some(p=>p.indexOf(t)!==-1))&&n.push({id:r,name:o})}),n},Nr={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",ADD_RANDOM_DEFENSE_HISTORY_INFOS:"addRandomDefenseHistoryInfos",FETCH_GACHA_OPTIONS:"fetchGachaOptions",SAVE_GACHA_OPTIONS:"saveGachaOptions",FETCH_SHOULD_SHOW_WELCOME_MESSAGE:"fetchShouldShowWelcomeMessage",SAVE_SHOULD_SHOW_WELCOME_MESSAGE:"saveShouldShowWelcomeMessage"},rn={CHECKED_ALGORITHM_IDS:"algorithm",QUICK_SLOTS:"query",TIMER:"timer",SETTINGS:"settings"},_3={RANDOM_DEFENSE_HISTORY:"queryLog"},W={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},k={...W,GACHA_OPTIONS:"gachaOptions"},ec=e=>Array.isArray(e)?e.every(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):!1,S2=[1,2],T2={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},qs={hotkey:"Alt",selectedSlotNo:1,slots:T2},tc={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},E2={...tc,shouldRevealTierOnHover:!1},b3="none",N2=!1,nc=[],G3=0,R2=[],I2={isTierHidden:!1,isAudioMuted:!0},W0={selectedNo:1,...T2},H3={[k.DATA_VERSION]:2,[k.CHECKED_ALGORITHM_IDS]:S2,[k.QUICK_SLOTS]:qs,[k.TOTAMJUNG_THEME]:b3,[k.HIDER_OPTIONS]:E2,[k.RANDOM_DEFENSE_HISTORY]:nc,[k.IS_TIER_HIDDEN]:N2,[k.FONT_NO]:G3,[k.TIMERS]:R2,[k.SHOULD_SHOW_WELCOME_MESSAGE]:!1},z3={...H3,[k.DATA_VERSION]:3,[k.GACHA_OPTIONS]:I2},rc=e=>Array.isArray(e)?e.filter(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):S2,$3=async()=>{const t=(await U.storage.local.get(k.CHECKED_ALGORITHM_IDS))[k.CHECKED_ALGORITHM_IDS];return rc(t)},P3=e=>{ec(e)&&U.storage.local.set({[k.CHECKED_ALGORITHM_IDS]:e})},B3=()=>{const[e,t]=x.useState(""),[n,r]=x.useState([]),[o,i]=x.useState(!1);x.useEffect(()=>{(async()=>{const h=await $3();r(h),i(!0)})()},[]),x.useEffect(()=>{o&&P3(n)},[n]);const l=h=>{t(h.target.value)},a=h=>{if(n.includes(h)){const y=n.filter(A=>A!==h);r(y);return}const g=[...n,h];r(g)},c=()=>{r(Array.from({length:A2}).map((h,g)=>g+1))},u=()=>{r([])},p=w2(e);return{keyword:e,items:p,checkedAlgorithmIds:n,isLoaded:o,handleChangeKeyword:l,toggleAlgorithm:a,checkAllAlgorithms:c,uncheckAllAlgorithms:u}},U3=()=>{const{keyword:e,items:t,checkedAlgorithmIds:n,isLoaded:r,handleChangeKeyword:o,toggleAlgorithm:i,checkAllAlgorithms:l,uncheckAllAlgorithms:a}=B3(),{activeModalName:c,openModal:u,closeModal:p}=nl();return s.jsxs(x3,{children:[s.jsx(y3,{children:r&&s.jsx(O3,{items:t,checkedAlgorithmIds:n,onChange:i})}),s.jsxs(A3,{children:[s.jsxs(w3,{children:[s.jsx(S3,{children:s.jsx(ud,{})}),s.jsx(T3,{placeholder:"알고리즘 분류를 입력해 주세요...",value:e,onChange:o})]}),s.jsxs(E3,{children:[s.jsxs(U0,{type:"button",onClick:()=>{u("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[s.jsx(F0,{src:Lm}),s.jsx(V0,{children:"전체 선택"})]}),s.jsxs(U0,{type:"button",onClick:()=>{u("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[s.jsx(F0,{src:Om}),s.jsx(V0,{children:"전체 해제"})]})]})]}),s.jsx(It,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:c==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{l(),p()},onNoSelect:p}),s.jsx(It,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:c==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{a(),p()},onNoSelect:p})]})},F3=d.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,V3=d.legend`
  font-size: 16px;
  color: ${({theme:e})=>e.color.WHITE};
  margin-bottom: 6px;
`,Y3=d.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:e})=>e?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,W3=d.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,Z3=d.label`
  width: 16px;
  height: 16px;
`,Q3=d.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  ${({theme:e,$checked:t})=>t?O`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:O`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,q3=d.input.attrs({type:"radio"})`
  display: none;
`,K3=e=>{const{checked:t,disabled:n=!1}=e;return s.jsxs(Z3,{children:[s.jsx(q3,{...e,onChange:()=>{if("value"in e){e.onChange(e.value);return}e.onChange()}}),s.jsx(Q3,{$checked:t,$disabled:n})]})},sn=e=>{const{legend:t,name:n,options:r,checkedValue:o,disabled:i,isVertical:l=!1,onChange:a}=e;return s.jsxs(F3,{disabled:i,children:[s.jsx(V3,{children:t}),s.jsx(Y3,{$isVertical:l,children:r.map(({label:c,value:u})=>s.jsxs(W3,{children:[s.jsx(K3,{name:n,value:u,checked:u===o,disabled:i,onChange:a}),typeof c=="string"?s.jsx(V,{type:"semiPrimary",fontSize:"16px",children:c}):c]},u))})]})},X3=d.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,J3=d.button`
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

  ${({theme:e,$isActivated:t})=>t?O`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:O`
          border: 1.5px solid ${e.color.BROWN};
        `}
`,Z0=d.img`
  width: 12px;
  height: auto;
`,Q0=d.p`
  font-size: 14px;
  color: ${({theme:e,$tier:t})=>e.solvedAcTier[t]};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,e4=d.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,t4=d.ul`
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
`,n4=d.li`
  padding: 2px;
`,r4=d.button`
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
`,o4=d.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,k2="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",i4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",l4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",s4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",a4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",c4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",u4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",d4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",p4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",f4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",h4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",g4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",m4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",v4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",x4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",y4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",A4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",w4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",S4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",T4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",E4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",N4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",R4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",I4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",k4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",C4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",j4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",M4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",D4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",L4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",O4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",_4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",b4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",G4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",H4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",z4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",$4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",P4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",C2="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",B4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",Xt={0:k2,1:i4,2:l4,3:s4,4:a4,5:c4,6:u4,7:d4,8:p4,9:f4,10:h4,11:g4,12:m4,13:v4,14:x4,15:y4,16:A4,17:w4,18:S4,19:T4,20:E4,21:N4,22:R4,23:I4,24:k4,25:C4,26:j4,27:M4,28:D4,29:L4,30:O4,31:C2},oc={unrated:k2,bronze:_4,silver:b4,gold:G4,platinum:H4,diamond:z4,ruby:$4,hidden:P4,notratable:C2,warn:B4},j2=e=>{const{initSelectedValue:t,onChange:n}=e,[r,o]=x.useState(t),[i,l]=x.useState(!1),a=x.useRef(null);return x.useEffect(()=>{o(t)},[t]),x.useEffect(()=>{const p=a.current;if(!p)return;const h=g=>{g.target instanceof Node&&g.target!==p&&!p.contains(g.target)&&l(!1)};return document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}},[a]),{selectedValue:r,isSelectOpen:i,updateSelectedValue:p=>{o(p),l(!1),n(p)},openSelect:()=>{l(!0)},containerRef:a}},U4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],Gl={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},F4=e=>{const{selectedTier:t,onChange:n}=e,{selectedValue:r,updateSelectedValue:o,isSelectOpen:i,openSelect:l,containerRef:a}=j2({initSelectedValue:t,onChange:n});return s.jsxs(X3,{ref:a,children:[s.jsxs(J3,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:i,onClick:l,children:[s.jsx(Z0,{src:Xt[r],alt:""}),s.jsx(Q0,{$tier:r,$isBold:!0,children:Gl[r]}),s.jsx(e4,{children:s.jsx(hd,{})})]}),s.jsx(t4,{$isOpen:i,children:U4.map(c=>s.jsx(n4,{children:s.jsxs(r4,{type:"button","aria-label":`${Gl[c]}를 경고 시작 티어로 설정하기`,onClick:()=>{o(c)},children:[s.jsx(Z0,{src:Xt[c],alt:""}),s.jsx(Q0,{$tier:c,$isBold:c===r,children:Gl[c]}),c===r&&s.jsx(o4,{children:s.jsx(co,{})})]})},c))})]})},V4=d.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,q0=d.input`
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
`,M2=99,D2=59,L2=/^\d+$/,Y4=e=>L2.test(e)&&Number(e)>=0&&Number(e)<=M2,W4=e=>L2.test(e)&&Number(e)>=0&&Number(e)<=D2,Z4=e=>{const{initHours:t,initMinutes:n,onChange:r}=e,[o,i]=x.useState(String(t)),[l,a]=x.useState(String(n));return x.useEffect(()=>{i(String(t)),a(String(n))},[t,n]),{hours:o,minutes:l,updateHours:g=>{const y=g.target.value;y.length>=3||i(y)},updateMinutes:g=>{const y=g.target.value;y.length>=3||a(y)},submitHours:()=>{if(!Y4(o)||Number(o)===t){i(String(t));return}i(String(Number(o))),r(Number(o),Number(l))},submitMinutes:()=>{if(!W4(l)||Number(l)===n){a(String(n));return}a(String(Number(l))),r(Number(o),Number(l))}}},Q4=e=>{const{hours:t,minutes:n,disabled:r,onChange:o}=e,{hours:i,minutes:l,updateHours:a,updateMinutes:c,submitHours:u,submitMinutes:p}=Z4({initHours:t,initMinutes:n,onChange:o});return s.jsxs(V4,{children:[s.jsx("img",{src:_m,width:"54px",height:"46px",alt:""}),s.jsx(q0,{name:"hours",type:"number",min:0,max:M2,value:i,disabled:r,onChange:a,onBlur:u,"aria-label":"시간"}),s.jsx(V,{type:"normal",fontSize:"16px",children:"시간"}),s.jsx(q0,{name:"minutes",type:"number",min:0,max:D2,value:l,disabled:r,onChange:c,onBlur:p,"aria-label":"분"}),s.jsx(V,{type:"normal",fontSize:"16px",children:"분"})]})},le=e=>typeof e=="object"&&e!==null,O2=e=>le(e)&&Object.keys(e).every(t=>!isNaN(Number(t))),q4=e=>Array.isArray(e)&&e.every(t=>typeof t=="number"),rl=e=>typeof e=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(e),ic=e=>typeof e=="number"&&e%1===0&&e>=0&&e<=31,pn=e=>ic(e)&&e!==31,K4=e=>ic(e)&&e!==0&&e!==31,X4=e=>typeof e=="string"&&["unrated","bronze","silver","gold","platinum","diamond","ruby"].includes(e),J4=e=>/^[1-9]\d*$/.test(e),K0=e=>/^\d+$/.test(e),lc=e=>{if(!(le(e)&&"problemTagLockDuration"in e&&"shouldHideTier"in e&&"shouldWarnHighTier"in e&&"warnTier"in e&&"algorithmHiderUsage"in e&&"problemTagLockUsage"in e&&le(e.problemTagLockDuration)&&"hours"in e.problemTagLockDuration&&"minutes"in e.problemTagLockDuration&&typeof e.problemTagLockDuration.hours=="number"&&typeof e.problemTagLockDuration.minutes=="number"&&typeof e.shouldHideTier=="boolean"&&typeof e.shouldWarnHighTier=="boolean"&&K4(e.warnTier)&&typeof e.algorithmHiderUsage=="string"&&["click","always"].includes(e.algorithmHiderUsage)&&typeof e.problemTagLockUsage=="string"&&["click","auto"].includes(e.problemTagLockUsage)))return!1;const{hours:t,minutes:n}=e.problemTagLockDuration;return t>=0&&t<100&&n>=0&&n<60&&t%1===0&&n%1===0},sc=e=>lc(e)&&"shouldRevealTierOnHover"in e&&typeof e.shouldRevealTierOnHover=="boolean",_2=e=>le(e)&&"expire"in e&&"hour"in e&&"minute"in e&&"problem"in e&&typeof e.expire=="number"&&typeof e.hour=="string"&&typeof e.minute=="string"&&typeof e.problem=="number"&&e.hour.length>=1&&e.hour.length<=2&&K0(e.hour)&&e.minute.length>=1&&e.minute.length<=2&&K0(e.minute)&&(e.problem>=1e3&&e.problem%1===0||e.problem===-1),ev=e=>{if(!(le(e)&&"font"in e&&"lock"in e&&"predict"in e&&"theme"in e&&typeof e.font=="string"&&typeof e.lock=="string"&&typeof e.predict=="string"&&typeof e.theme=="string"&&typeof e.lock=="string"&&["click","always"].includes(e.lock)&&typeof e.predict=="string"&&["click","always"].includes(e.predict)&&typeof e.theme=="string"&&["yes","no"].includes(e.theme)))return!1;if(e.font==="none")return!0;if(!/^font-\d+$/.test(e.font))return!1;const t=e.font.split("-")[1];if(!J4(t))return!1;const n=Number(t);return n>=1&&n<=19},tv=async()=>{const t=(await U.storage.local.get(k.HIDER_OPTIONS))[k.HIDER_OPTIONS];return sc(t)?t:E2},nv=e=>{sc(e)&&U.storage.local.set({[k.HIDER_OPTIONS]:e})},rv={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,shouldRevealTierOnHover:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},ov=()=>{const[e,t]=x.useState({...rv,isLoaded:!1});return x.useEffect(()=>{(async()=>{const u=await tv();t({...u,isLoaded:!0})})()},[]),x.useEffect(()=>{const{isLoaded:u,...p}=e;u&&nv(p)},[e]),{...e,updateProblemTagLockDuration:(u,p)=>{t(h=>h.isLoaded?{...h,problemTagLockDuration:{hours:u,minutes:p}}:h)},updateShouldHideTier:u=>{const p=u==="true";t(h=>h.isLoaded?{...h,shouldHideTier:p}:h)},updateShouldWarnHighTier:u=>{const p=u==="true";t(h=>h.isLoaded?{...h,shouldWarnHighTier:p}:h)},updateShouldRevealTierOnHover:u=>{const p=u==="true";t(h=>h.isLoaded?{...h,shouldRevealTierOnHover:p}:h)},updateWarnTier:u=>{t(p=>p.isLoaded?{...p,warnTier:u}:p)},updateAlgorithmHiderUsage:u=>{u!=="click"&&u!=="always"||t(p=>p.isLoaded?{...p,algorithmHiderUsage:u}:p)},updateProblemTagLockUsage:u=>{u!=="click"&&u!=="auto"||t(p=>p.isLoaded?{...p,problemTagLockUsage:u}:p)}}},iv=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,lv=d.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,sv=()=>{const{problemTagLockDuration:e,shouldHideTier:t,shouldWarnHighTier:n,shouldRevealTierOnHover:r,warnTier:o,algorithmHiderUsage:i,problemTagLockUsage:l,updateProblemTagLockDuration:a,updateShouldHideTier:c,updateShouldWarnHighTier:u,updateShouldRevealTierOnHover:p,updateWarnTier:h,updateAlgorithmHiderUsage:g,updateProblemTagLockUsage:y}=ov(),{hours:A,minutes:S}=e;return s.jsxs(iv,{children:[s.jsx(Qt,{title:"잠금 시간 설정",iconSrc:U.runtime.getURL("/lock.png")}),s.jsx(Q4,{hours:A,minutes:S,onChange:a}),s.jsx(Qt,{title:"티어 가리개 설정",iconSrc:y2}),s.jsx(sn,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:t?"true":t===void 0?"":"false",onChange:c}),s.jsx(sn,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!t,options:[{label:"사용하지 않음",value:"false"},{label:s.jsxs(lv,{children:[s.jsx(F4,{selectedTier:o,onChange:h}),s.jsx(V,{type:"semiPrimary",fontSize:"16px",children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:n?"true":"false",onChange:u}),s.jsx(sn,{legend:"티어 아이콘에 마우스를 올릴 경우 난이도 공개하기",name:"shouldRevealTierOnHover",disabled:!t,options:[{label:"공개",value:"true"},{label:"공개하지 않음",value:"false"}],checkedValue:r?"true":"false",onChange:p}),s.jsx(Qt,{title:"기본 설정",iconSrc:s.jsx(ih,{})}),s.jsx(sn,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:i??"",onChange:g}),s.jsx(sn,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:l??"",onChange:y})]})},av=d.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,cv=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,uv=e=>{const{show:t}=e;return t?s.jsxs(av,{children:[s.jsxs(cv,{children:[s.jsx(Qt,{title:"알고 있는 알고리즘 관리하기",iconSrc:s.jsx(ud,{})}),s.jsx(U3,{})]}),s.jsx(sv,{})]}):null},dv=d.div`
  display: inline-block;
  position: relative;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  padding: ${({$padding:e})=>e};

  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,pv=d.div`
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
`,ac=e=>{const{width:t,height:n,padding:r,title:o,children:i}=e;return s.jsxs(dv,{$width:t,$height:n,$padding:r,children:[o!==""&&s.jsx(pv,{children:o}),i]})},fv=d.input`
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
`,fn=x.forwardRef((e,t)=>{const{width:n,hasError:r,textAlign:o,ariaLabel:i,...l}=e;return s.jsx(fv,{$width:n,$hasError:r,$textAlign:o,"aria-label":i,spellCheck:!1,ref:t,...l})}),hv=d.textarea`
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
`,b2=x.forwardRef((e,t)=>{const{width:n,height:r,hasError:o,ariaLabel:i,...l}=e;return s.jsx(hv,{$width:n,$height:r,$hasError:o,spellCheck:!1,"aria-label":i,ref:t,...l})}),gv=d.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,mv=d.span`
  font-size: ${({$fontSize:e})=>e};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:e})=>e.color.LEMON};
  }
`,vv=d.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:e})=>e};
  height: ${({$fontSize:e})=>e};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,G2=e=>{const{href:t,fontSize:n,children:r}=e;return s.jsxs(gv,{href:t,target:"__blank",rel:"noopener",children:[s.jsx(mv,{$fontSize:n,children:r}),s.jsx(vv,{$fontSize:n,children:s.jsx(eh,{})})]})},Hl=e=>`${Number(e.slice(0,2))+3}px`,xv=d.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:e})=>Hl(e)};
  height: ${({$height:e})=>e===void 0?"auto":e};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:e})=>Hl(e)};
    height: ${({$fontSize:e})=>Hl(e)};

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,yv=d.p`
  font-size: ${({$fontSize:e})=>e};

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,H2=e=>{const{fontSize:t,errorMessage:n,height:r}=e;return s.jsx(xv,{$fontSize:t,$height:r,children:n!==""&&s.jsxs(s.Fragment,{children:[s.jsx(pd,{}),s.jsx(yv,{$fontSize:t,role:"alert",children:n})]})})},z2=d.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,$2=O`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
`,Av=d.div`
  ${$2}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${z2}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,wv=d.div`
  ${$2}

  bottom: 0;
`,Sv=d.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:e})=>e.filter.DARK_ORANGE_FILTER};
`,Tv=d.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,Ev=d.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:e})=>e.color.ORANGE};
`,Nv=d.p`
  font-size: 12px;
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,Rv=e=>{const{selectedSlotNo:t,isLoaded:n,onClick:r}=e;return s.jsxs(z2,{type:"button","aria-label":`${t}번 슬롯에 추첨 생성하기`,onClick:r,disabled:!n,children:[s.jsxs(Av,{children:[s.jsx(Sv,{src:U.runtime.getURL("/dice.png"),alt:""}),s.jsxs(Tv,{children:[s.jsx(Ev,{children:"추첨 생성"}),s.jsx(Nv,{children:n?`슬롯 번호 − ${t}`:"로딩 중..."})]})]}),s.jsx(wv,{})]})},Iv=d.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,P2=O`
  width: 50%;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:e})=>e.color.LIGHTER_BROWN};

  transition: 0.2s;
`,kv=d.button`
  ${P2}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:e})=>e?O`
          border-color: ${({theme:t})=>t.color.MAGENTA};
          background-color: ${({theme:t})=>t.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:t})=>t.color.MAGENTA};

          color: ${({theme:t})=>t.color.WHITE};
        `:O`
          &:hover {
            border-color: ${({theme:t})=>t.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:t})=>t.color.MAGENTA};

            color: ${({theme:t})=>t.color.MAGENTA};
          }
        `}
`,Cv=d.button`
  ${P2}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:e})=>e?O`
          border-color: ${({theme:t})=>t.color.AZURE_BLUE};
          background-color: ${({theme:t})=>t.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:t})=>t.color.AZURE_BLUE};

          color: ${({theme:t})=>t.color.WHITE};
        `:O`
          &:hover {
            border-color: ${({theme:t})=>t.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:t})=>t.color.AZURE_BLUE};

            color: ${({theme:t})=>t.color.AZURE_BLUE};
          }
        `}
`,jv=d.span`
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
`,Mv=e=>{const{mode:t,onClick:n}=e;return s.jsxs(Iv,{children:[s.jsx(kv,{type:"button",$isActivated:t==="easy",onClick:()=>{n("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),s.jsx(Cv,{type:"button",$isActivated:t==="manual",onClick:()=>{n("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),s.jsx(jv,{children:"OR"})]})},Dv=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,Lv=d.div`
  display: flex;
  justify-content: space-around;
`,zl=31,Ov=d.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,_v=d.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:zl}).map((t,n)=>pn(n)?`${e.solvedAcTier[n]} ${n/zl*100}%, ${e.solvedAcTier[n]} ${(n+1)/zl*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,X0=d.input`
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
`,bv=e=>{const{startTier:t,endTier:n,onChange:r}=e;return s.jsxs(Ov,{children:[s.jsx(_v,{}),s.jsx(X0,{type:"range",min:0,max:30,value:t,"aria-label":"시작 범위 티어 설정하기",onChange:o=>{const i=Number(o.target.value),l=Math.max(Number(i),n);pn(i)&&pn(l)&&r(i,l)}}),s.jsx(X0,{type:"range",min:0,max:30,value:n,"aria-label":"끝 범위 티어 설정하기",onChange:o=>{const i=Number(o.target.value),l=Math.min(Number(i),t);pn(l)&&pn(i)&&r(l,i)}})]})},Gv=d.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,J0=d.img`
  width: 26px;
`,Hv=d.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`,zv=e=>{const{startTier:t,endTier:n}=e;return s.jsxs(Gv,{children:[s.jsx(J0,{src:Xt[t],alt:"",draggable:!1}),s.jsx(Hv,{children:"~"}),s.jsx(J0,{src:Xt[n],alt:"",draggable:!1})]})},$v=d.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,eu=(e,t)=>t==="bronze"?e.solvedAcTier.BRONZE:t==="silver"?e.solvedAcTier.SILVER:t==="gold"?e.solvedAcTier.GOLD:t==="platinum"?e.solvedAcTier.PLATINUM:t==="diamond"?e.solvedAcTier.DIAMOND:t==="ruby"?e.solvedAcTier.RUBY:e.color.GRAY,Pv=d.li`
  width: 32px;
  height: 32px;
`,Bv=d.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:e,$rank:t})=>eu(e,t)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:e,$rank:t})=>`linear-gradient(to top, ${eu(e,t)}70 0%, transparent 100%)`};
  }
`,Uv=d.img`
  width: 16px;
`;d.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`;const Fv={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},tu={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},Vv=e=>{const{rank:t,onClick:n}=e;return s.jsx(Pv,{children:s.jsx(Bv,{type:"button",$rank:t,"aria-label":Fv[t],onClick:()=>{n(tu.START[t],tu.END[t])},children:s.jsx(Uv,{src:oc[t],alt:""})})})},Yv=["unrated","bronze","silver","gold","platinum","diamond","ruby"],Wv=e=>{const{onClick:t}=e;return s.jsx($v,{children:Yv.map(n=>s.jsx(Vv,{rank:n,onClick:t},n))})},Zv=e=>{const{startTier:t,endTier:n,onChange:r}=e;return s.jsxs(Dv,{children:[s.jsx(bv,{startTier:t,endTier:n,onChange:r}),s.jsxs(Lv,{children:[s.jsx(zv,{startTier:t,endTier:n}),s.jsx(Wv,{onClick:r})]})]})},Qv=d.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,qv=d.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,Kv=He`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,Xv=d.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${Kv} 0.15s forwards;
  }
`,Jv=d.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:t})=>t?e.color.GOLD:e.color.LIGHT_GRAY};
`,ex=["OR","AND","NOR"],tx=e=>{const{searchOperator:t,onClick:n}=e;return s.jsx(Qv,{children:ex.map(r=>s.jsxs(qv,{children:[r===t&&s.jsx(Xv,{children:s.jsx(co,{})}),s.jsx(Jv,{type:"button","aria-label":`알고리즘 검색 옵션을 ${r}로 설정하기`,$isSelected:r===t,onClick:()=>{n(r)},children:r})]},r))})},nx=d.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:e,$isOpen:t})=>t&&O`
      & > ul {
        border-color: ${e.color.LEMON};
        box-shadow: 0 0 12px ${e.color.GOLD}70;
      }
    `}
`,B2=O`
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
`,rx=d.ul`
  ${B2}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,ox=d.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:e})=>!e&&O`
      opacity: 0;
    `}

  ${({theme:e,$isOpen:t})=>t&&O`
      border-color: ${e.color.LEMON};
      outline: 3px solid ${e.color.LEMON}70;
    `}
`,ix=d.ul`
  ${B2}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,lx=d.li`
  display: inline-block;

  height: 26px;
`,sx=d.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,ax=d.p`
  overflow: hidden;

  color: ${({theme:e})=>e.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,cx=d.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LEMON};
  }
`,nu=e=>{const{id:t,name:n,mode:r,onClick:o}=e;return s.jsx(lx,{children:s.jsxs(sx,{type:"button","aria-label":r==="add"?`${n}을 검색에 포함할 알고리즘 목록에 추가하기`:`${n}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{o(t)},children:[s.jsx(ax,{children:n}),r==="delete"&&s.jsx(cx,{children:s.jsx(nh,{})})]})})},U2=0,ux=30,dx=31,F2=1e3,V2=99999,Y2=500,oo=300,Ks=5,io=30,px=/^\w{3,20}$/,bo=1e8,ru=/^([1-9][0-9]*|0)$/,kt=512,Di=50,fx=e=>{const{selectedAlgorithmIds:t,onChange:n}=e,[r,o]=x.useState(!1),[i,l]=x.useState(""),a=x.useRef(null),c=x.useRef(null),u=A=>{l(A.target.value)},p=t.length<Ks?w2(i).filter(({id:A})=>!t.includes(A)).map(({id:A})=>A):[],h=A=>{if(A.key==="Enter"){if(p.length===0)return;n([...t,p[0]]),l("")}if(A.key==="Backspace"){if(i!=="")return;n(t.slice(0,-1))}},g=A=>{n([...t,A]),l("")},y=A=>{n(t.filter(S=>S!==A))};return x.useEffect(()=>{const A=a.current,S=c.current;if(!A||!S)return;const j=v=>{const w=v.target;!w||!(w instanceof Node)||o(A.contains(w))},m=()=>{document.activeElement!==document.body&&o(A.contains(document.activeElement))},f=()=>{S.focus()};return document.addEventListener("mousedown",j),document.addEventListener("focusin",m),document.addEventListener("focusout",m),A.addEventListener("click",f),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("focusin",m),document.removeEventListener("focusout",m),A.removeEventListener("click",f)}},[a,c]),{isOpen:r,inputValue:i,searchedAlgorithmIds:p,updateInputValue:u,processActionIfKeyPress:h,addAlgorithmId:g,deleteAlgorithmId:y,containerRef:a,inputRef:c}},hx=e=>{const{selectedAlgorithmIds:t,onChange:n}=e,{isOpen:r,inputValue:o,searchedAlgorithmIds:i,updateInputValue:l,processActionIfKeyPress:a,addAlgorithmId:c,deleteAlgorithmId:u,containerRef:p,inputRef:h}=fx({selectedAlgorithmIds:t,onChange:n});return s.jsxs(nx,{ref:p,$isOpen:r,tabIndex:-1,children:[s.jsx(rx,{tabIndex:-1,children:s.jsxs(s.Fragment,{children:[t.map(g=>{const y=ro.find(({id:S})=>S===g),A=y?y.name:"";return s.jsx(nu,{mode:"delete",id:g,name:A,onClick:u},g)}),s.jsx(ox,{ref:h,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:r,value:o,onChange:l,onKeyDown:a})]})}),s.jsx(ix,{$isOpen:r,tabIndex:-1,children:i.map(g=>{const y=ro.find(({id:S})=>S===g),A=y?y.name:"";return s.jsx(nu,{mode:"add",id:g,name:A,onClick:c},g)})})]})},gx=e=>typeof e=="string"&&["ko","en","ko/en","all"].includes(e),mx=e=>le(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"language"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.language=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&q4(e.algorithmIds)&&pn(e.startTier)&&pn(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",vx=e=>{const{mode:t,title:n,handle:r,solvedMin:o,solvedMax:i,startTier:l,endTier:a,algorithmIds:c,customQuery:u}=e,p=t==="easy"?[ou(n),xx(r),yx(o,i),Ax(l,a),wx(c)]:[ou(n),Sx(u)];for(let h=0;h<p.length;h++){const g=p[h];if(!g.isValid)return g}return{isValid:!0}},ou=e=>e.length>io?{isValid:!1,errorMessage:`추첨 이름은 ${io}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},xx=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:px.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},yx=(e,t)=>{const n=Number(e),r=Number(t),o=e.trim()==="",i=t.trim()==="";return!o&&!ru.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!i&&!ru.test(t)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!o&&n>bo?{isValid:!1,errorMessage:`맞은 사람 수는 ${bo.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!i&&r>bo?{isValid:!1,errorMessage:`맞은 사람 수는 ${bo.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!o&&!i&&n>r?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Ax=(e,t)=>{const n=Number(e),r=Number(t);return n>r?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},wx=e=>e.length>Ks?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${Ks.toLocaleString()}개 이하여야 해요.`}:e.every(n=>typeof n=="number"&&n%1===0&&n>=1&&n<=A2)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Sx=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>kt?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${kt}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Tx=e=>{const{mode:t,handle:n,solvedMin:r,solvedMax:o,language:i,startTier:l,endTier:a,searchOperator:c,algorithmIds:u,customQuery:p}=e;if(t==="manual")return p.replace(/\n/g," ").trim();const h=Ex(u),g=Nx(i),y=Rx(c),A=n.trim()!=="",S=r.trim()!==""||o.trim()!=="",j=h.length>0,m=A?`~@${n} `:"",f=S?`s#${r}..${o} `:"",v=g===""?"":`${g} `,w=l===a?`*${l} `:`*${l}..${a} `,E=j?h.length===1?h[0]:`(${y==="~"?"~":""}${h.join(y)})`:"";return`(*0&!s?|!*0) o? -w? ${m}${f}${v}${w}${E}`.trim()},Ex=e=>{const t=[];return e.forEach(n=>{var o;const r=(o=ro.find(i=>i.id===n))==null?void 0:o.tag;r&&t.push(`#${r}`)}),t},Nx=e=>{switch(e){case"ko":return"lang:ko";case"en":return"(lang:en~lang:ko~lang:ja~lang:sv)";case"ko/en":return"(lang:ko|(lang:en~lang:ja~lang:sv))";default:return""}},Rx=e=>{switch(e){case"OR":return"|";case"AND":return"&";default:return"~"}},iu={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Ix=e=>{const{selectedSlotNo:t,onSubmit:n}=e,[r,o]=x.useState(iu),[i,l]=x.useState(""),[a,c]=x.useState(void 0),{mode:u,title:p,handle:h,solvedMin:g,solvedMax:y,language:A,startTier:S,endTier:j,searchOperator:m,algorithmIds:f,customQuery:v}=r,w=x.useRef(null),E=x.useRef(null),N=x.useRef(null),T=x.useRef(null),M=x.useRef(null);return{mode:u,title:p,handle:h,solvedMin:g,solvedMax:y,language:A,startTier:S,endTier:j,searchOperator:m,algorithmIds:f,customQuery:v,errorMessage:i,errorElementName:a,setMode:Q=>{o(te=>({...te,mode:Q})),l(""),c(void 0)},setRandomDefenseInputValue:Q=>{const{name:te,value:C}=Q.target;te in iu&&o(L=>({...L,[te]:C}))},setLanguage:Q=>{gx(Q)&&o(te=>({...te,language:Q}))},setTierRange:(Q,te)=>{o(C=>({...C,startTier:Q,endTier:te}))},setSearchOperator:Q=>{o(te=>({...te,searchOperator:Q}))},setAlgorithmIds:Q=>{o(te=>({...te,algorithmIds:Q}))},submitRandomDefense:()=>{var C,L,b,P,B;if(!mx(r))return;const Q=vx(r);if(Q.isValid){const ne=r.title.trim()===""?`추첨 ${t}`:r.title,se=Tx(r);n(ne,se),l(""),c(void 0);return}switch(l(Q.errorMessage),c(Q.focusElementName),Q.focusElementName){case"title":(C=w.current)==null||C.select();break;case"handle":(L=E.current)==null||L.select();break;case"solvedMin":(b=N.current)==null||b.select();break;case"solvedMax":(P=T.current)==null||P.select();break;case"customQuery":(B=M.current)==null||B.select();break}},titleRef:w,handleRef:E,solvedMinRef:N,solvedMaxRef:T,customQueryRef:M}},kx=d.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,Cx=d.div`
  position: absolute;
  top: -32px;
  right: 0;
`,jx=d.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,lu=d.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,$l=d.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Go=d.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Mx=d.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Dx=d.div`
  display: flex;
  justify-content: center;
`,Lx=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Ox=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,_x=d.div`
  overflow: visible;
  position: relative;

  width: ${({$width:e})=>e};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,bx=d.button`
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

  ${({theme:e,$isActivated:t})=>t?O`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:O`
          border: 1.5px solid ${e.color.LIGHTER_BROWN};
        `}
`;d.img`
  width: 12px;
  height: auto;
`;const su=d.p`
  font-size: 14px;
  color: ${({theme:e})=>e.color.WHITE};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,Gx=d.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Hx=d.ul`
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
`,zx=d.li`
  padding: 2px;
`,$x=d.button`
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
`,Px=d.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Bx=e=>{var g;const{options:t,selectedValue:n,width:r,ariaLabel:o,onChange:i}=e,{selectedValue:l,updateSelectedValue:a,isSelectOpen:c,openSelect:u,containerRef:p}=j2({initSelectedValue:n,onChange:i}),h=((g=t.find(({value:y})=>y===l))==null?void 0:g.label)??"";return s.jsxs(_x,{ref:p,$width:r,role:"combobox",children:[s.jsxs(bx,{type:"button","aria-label":o,"aria-haspopup":"listbox","aria-expanded":c,onClick:u,$isActivated:c,children:[s.jsx(su,{$isBold:!0,children:h}),s.jsx(Gx,{children:s.jsx(hd,{})})]}),s.jsx(Hx,{$isOpen:c,role:"listbox","aria-labelledby":o,children:t.map(({label:y,value:A})=>s.jsx(zx,{role:"option","aria-selected":A===l,children:s.jsxs($x,{type:"button",onClick:()=>{a(A)},children:[s.jsx(su,{$isBold:A===l,children:y}),A===l&&s.jsx(Px,{children:s.jsx(co,{})})]})},A))})]})},Ux=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],Fx=e=>{const{selectedSlotNo:t,isLoaded:n,onSubmit:r}=e,{mode:o,title:i,handle:l,solvedMin:a,solvedMax:c,language:u,startTier:p,endTier:h,searchOperator:g,algorithmIds:y,customQuery:A,errorMessage:S,errorElementName:j,setMode:m,setRandomDefenseInputValue:f,setLanguage:v,setTierRange:w,setSearchOperator:E,setAlgorithmIds:N,submitRandomDefense:T,titleRef:M,handleRef:z,solvedMinRef:_,solvedMaxRef:ce,customQueryRef:Ye}=Ix({selectedSlotNo:t,onSubmit:r});return s.jsx(ac,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:s.jsxs(kx,{children:[s.jsx(Cx,{children:s.jsx(H2,{errorMessage:S,fontSize:"14px"})}),s.jsx(jx,{children:s.jsx(Mv,{mode:o,onClick:m})}),s.jsxs($l,{$width:"380px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"추첨 이름"}),s.jsx(fn,{ref:M,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:i,maxLength:30,hasError:j==="title",onChange:f})]}),o==="easy"?s.jsxs(s.Fragment,{children:[s.jsxs(lu,{$columnGap:"50px",children:[s.jsxs($l,{$width:"190px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),s.jsx(fn,{ref:z,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:l,minLength:3,maxLength:20,hasError:j==="handle",onChange:f})]}),s.jsxs(Go,{$width:"166px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),s.jsxs(Mx,{children:[s.jsx(fn,{ref:_,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:a,hasError:j==="solvedMin",onChange:f}),s.jsx(V,{type:"primary",fontSize:"16px",children:"~"}),s.jsx(fn,{ref:ce,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:c,hasError:j==="solvedMax",onChange:f})]})]}),s.jsxs(Go,{$width:"190px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"문제 언어"}),s.jsx(Bx,{options:Ux,selectedValue:u,width:"130px",ariaLabel:"문제 언어 고르기",onChange:v})]})]}),s.jsxs(Go,{$width:"100%",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"난이도 범위"}),s.jsx(Dx,{children:s.jsx(Zv,{startTier:p,endTier:h,onChange:w})})]}),s.jsxs(Go,{$width:"446px",children:[s.jsxs(lu,{$columnGap:"110px",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),s.jsx(tx,{searchOperator:g,onClick:E})]}),s.jsx(hx,{selectedAlgorithmIds:y,onChange:We=>{N(We)}})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs($l,{$width:"100%",children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"쿼리"}),s.jsx(b2,{ref:Ye,width:"100%",height:"160px",name:"customQuery",value:A,placeholder:`1 ~ ${kt}자`,minLength:1,maxLength:kt,hasError:j==="customQuery",ariaLabel:"쿼리",onChange:f})]}),s.jsxs(Lx,{children:[s.jsxs(V,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",s.jsx(G2,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),s.jsx(V,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),s.jsx(Ox,{children:s.jsx(Rv,{isLoaded:n,selectedSlotNo:t,onClick:T})})]})})},Vx=d.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,Yx=d.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,Wx=d.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,Zx=d.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,Qx=d.li`
  width: 26px;
  height: 26px;
`,qx=d.button`
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

  ${({theme:e,$isSelected:t,$isOccupied:n})=>{if(t)return O`
        border-color: ${e.color.LEMON};
        background-color: ${e.color.LEMON};
        outline: 3px solid ${e.color.LEMON}70;

        color: ${e.color.DARK_BROWN};
      `;if(n)return O`
        border-color: ${e.color.GOLD};

        color: ${e.color.GOLD};
      `}}
`,Kx=[1,2,3,4,5,6,7,8,9,0],Xx=e=>{const{selectedSlotNo:t,occupiedSlotNos:n,onChange:r}=e;return s.jsx(Zx,{children:Kx.map(o=>s.jsx(Qx,{children:s.jsx(qx,{$isSelected:o===t,$isOccupied:n.includes(o),onClick:()=>{r(o)},"aria-label":`${o}번 슬롯 선택하기. ${o===t?"이미 선택되어 있는 슬롯입니다":""}`,children:o})},o))})},Jx=d.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,ey=d.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,ty=d.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,au=d.span`
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
`,ny=d.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 16px;
`,ry=d.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 14px;
`,W2=O`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,oy=d.div`
  ${W2}

  white-space: nowrap;
`,iy=d.div`
  ${W2}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,ly=e=>s.jsxs(Jx,{children:[s.jsxs(ey,{children:[s.jsx(au,{$backgroundColor:"gold",children:"추첨 이름"}),s.jsx(oy,{children:e.isEmpty?s.jsx(ny,{children:"(비어 있음)"}):s.jsx(V,{type:"primary",fontSize:"16px",children:e.title})})]}),s.jsxs(ty,{children:[s.jsx(au,{$backgroundColor:"white",children:"쿼리"}),s.jsx(iy,{children:e.isEmpty?s.jsx(ry,{children:"(비어 있음)"}):s.jsx(V,{type:"code",fontSize:"13px",children:e.query})})]})]}),sy=d.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,ay=d.button`
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
`,cy=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,uy=e=>{const{selectedSlotNo:t,hotkey:n,onClick:r}=e;return s.jsxs(sy,{children:[s.jsx(V,{type:"primary",fontSize:"16px",children:`단축키: ${n==="Alt"?cy?"Option":"Alt":"F2"} + ${t}`}),s.jsx(ay,{"aria-label":"단축키 전환하기",onClick:r,children:s.jsx(rh,{})})]})},dy=[1,2,3,4,5,6,7,8,9,0],py=e=>{const{quickSlotsInfo:t,isLoaded:n,onHotkeyChange:r,onSlotChange:o,onSlotDelete:i,onSlotNoChange:l}=e,{selectedSlotNo:a,slots:c,hotkey:u}=t,[p,h]=x.useState(!1),[g,y]=x.useState(0),A=()=>{n&&r(u==="Alt"?"F2":"Alt")},S=()=>{const N=[];return dy.forEach(T=>{c[T].isEmpty||N.push(T)}),N},j=()=>{h(!0)},m=()=>{h(!1)},f=(N,T)=>{if(!n)return;const M=N.trim()===""?`추첨 ${a}`:N;o(M,T),m()},v=()=>{n&&i()},w=N=>{l(N)};return{slot:c[a],selectedSlotNo:a,hotkey:u,occupiedSlotNos:S(),gachaProblemCount:g,shouldEditModalShow:p,switchHotkey:A,openEditModal:j,closeEditModal:m,updateSlot:f,deleteSlot:v,setSelectedSlotNo:w,setGachaProblemCount:y}},fy=(e,t)=>e.length>io?{isValid:!1,errorMessage:`추첨 이름의 길이가 너무 길어요. ${io}자 이하가 되도록 줄여 주세요.`,focusElementName:"title"}:t.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:t.length>kt?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${kt}자 이하가 되도록 줄여 주세요.`,focusElementName:"query"}:{isValid:!0},hy=e=>{const{initTitle:t,initQuery:n,onSlotChange:r}=e,[o,i]=x.useState(t),[l,a]=x.useState(n),[c,u]=x.useState(""),[p,h]=x.useState(void 0),g=x.useRef(null),y=x.useRef(null);return x.useEffect(()=>{i(t),a(n),u(""),h(void 0)},[t,n]),{title:o,query:l,errorMessage:c,isTitleElementHasErrors:p==="title",isQueryElementHasErrors:p==="query",setQuery:a,setTitle:i,submitSlotInfo:()=>{const m=fy(o,l);if(m.isValid){r(o,l),u("");return}const f=g.current,v=y.current,{focusElementName:w}=m;w==="title"&&(f==null||f.select()),w==="query"&&(v==null||v.select()),h(w),u(m.errorMessage)},titleRef:g,queryRef:y}},gy=d.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 320px;
`,cu=d.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,my=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`,vy=e=>{const{title:t,query:n,open:r,onClose:o,onSlotChange:i}=e,{title:l,query:a,errorMessage:c,isTitleElementHasErrors:u,isQueryElementHasErrors:p,setQuery:h,setTitle:g,submitSlotInfo:y,titleRef:A,queryRef:S}=hy({initTitle:t,initQuery:n,onSlotChange:i});return s.jsxs(Rn,{title:"추첨 수정",open:r,onClose:o,children:[s.jsxs(gy,{children:[s.jsxs(cu,{children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"추첨 이름"}),s.jsx(fn,{type:"text",width:"100%",name:"title",value:l,ref:A,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:u,ariaLabel:"새로운 추첨 이름을 입력해주세요",onChange:j=>{g(j.target.value)}})]}),s.jsxs(cu,{children:[s.jsx(V,{type:"primary",fontSize:"16px",children:"쿼리"}),s.jsx(b2,{width:"100%",height:"150px",name:"query",value:a,ref:S,maxLength:kt,placeholder:`1 ~ ${kt}자`,hasError:p,ariaLabel:"새로운 쿼리를 입력해주세요",onChange:j=>{h(j.target.value)}})]}),s.jsxs(my,{children:[s.jsxs(V,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",s.jsx(G2,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),s.jsx(V,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]}),s.jsx(H2,{fontSize:"14px",errorMessage:c})]}),s.jsxs(go,{children:[s.jsx(J,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(so,{}),color:I.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:o}),s.jsx(J,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(ao,{}),color:I.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:y})]})]})},xy=He`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,yy=d.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${xy} 2s forwards infinite linear;
  }
`,Ay=()=>s.jsx(yy,{children:s.jsx(fd,{})}),wy=He`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`,Sy=He`
  0% {
   opacity: 0.3;
  }
  
  50% {
    opacity: 1;
  }

  100% {
   opacity: 0.3;
  }
`,Ty=He`
  0% {
    transform: rotate(0deg);
  }
  
  10% {
    transform: rotate(-3deg);
  }

  20% {
    transform: rotate(3deg);
  }

  30% {
    transform: rotate(-3deg);
  }

  40% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(0deg);
  }
`,Ey=He`
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  
  60% {
    transform: scale(1.02);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`,Ny=He`
  from {
    pointer-events: none;
    opacity: 0;
  }

  to {
    pointer-events: auto;
    opacity: 1;
  }
`,Ry=d.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 550px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${Um});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }

  &,
  & * {
    font-family: Pretendard;
  }
`,uu=d.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  position: absolute;
  top: 20px;

  height: 35px;

  opacity: 0.6;
  transition: opacity 0.2s;
  user-select: none;

  &:hover {
    opacity: 1;
  }

  ${({$align:e})=>e==="left"?O`
          left: 20px;
        `:O`
          right: 20px;
        `};
`,du=d.div`
  display: inline-block;

  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,Z2=O`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  border: 2px solid ${({theme:e})=>e.color.LIGHT_GRAY};
  border-radius: 50%;
  background: transparent;

  &:hover {
    box-shadow: 0 0 10px ${({theme:e})=>e.color.LIGHT_GRAY};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  transition:
    box-shadow,
    transform 0.2s;
`,Iy=d.button`
  ${Z2}

  & > img {
    height: 70%;

    filter: ${({theme:e})=>e.filter.LIGHT_GRAY_FILTER};
  }
`,ky=d.button`
  ${Z2}

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIGHT_GRAY};
  }
`,Cy=d.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,jy=d.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,My=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,Dy=d.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`,Ly=d.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,Oy=d.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({theme:e})=>e.color.LIGHT_RED};
  text-align: center;
`,_y=d.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,pu=d.li`
  font-size: 16px;
  color: ${({theme:e})=>e.color.WHITE};
  word-break: break-all;
`,Pl=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;
`,by=d.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`,Gy=d.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.WHITE};
  }

  animation: ${wy} 3s linear infinite;
`,fu=d.div`
  display: flex;
  column-gap: 8px;
`,Hy=d.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  color: ${({theme:e})=>e.color.LIGHT_GRAY};

  animation: ${Sy} 2s linear infinite;
`,zy=d.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100%;
`,$y=d.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,Py=d.div`
  width: 25px;
  height: 25px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.PURE_WHITE};
  }

  animation: ${Ty} 1.5s infinite;
`,By=d.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;

  color: ${({theme:e})=>e.color.WHITE};
`,Uy=d.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,Fy=d.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 60px 20px 20px 20px;

  opacity: 0;
  animation: ${Ey} cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s 0.3s forwards;
`,Vy=d.div`
  position: absolute;
  left: 0;
  bottom: 65px;

  width: 100%;
  height: 20px;
`,Yy=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;

  opacity: 0;
  pointer-events: none;
  animation: ${Ny} 0.3s 1s forwards;
`,Wy="/assets/unrated-card-iGk2lhrr.png",Zy="/assets/bronze-card-Ctc25mzn.png",Qy="/assets/silver-card-Cgb8QXRF.png",qy="/assets/gold-card-DjMsoKXy.png",Ky="/assets/platinum-card-CZ601BWQ.png",Xy="/assets/diamond-card-Eub_to2I.png",Jy="/assets/ruby-card--BnHlKWe.png",e5="/assets/hidden-card-BS-zY2RF.png",t5="/assets/card-box-front-black-Bn2hoJwG.png",n5="/assets/card-box-front-red-CP52fAYR.png",r5="/assets/card-box-front-green-CaU66ZRJ.png",o5="/assets/card-box-front-blue-BM7ozDKr.png",i5="/assets/card-box-front-gold-as3E5etT.png",l5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgKRT1kAAAOJSURBVHic7d0xchNJFMbx1z1VMolLE26VPa4mIzQ3gBuwN+AGcAM22xBu4CPADSAkg802Q5Tt3FYozeveRHaxxmBNv+6xLP1/mV0186YUdM1rff3kZGRd170UkZOx6wK4d3+enp5+GLOgG7NYCCGo6hcRacesC2AjXDRN83Q2m83GKujHKiQioqpvhcUN2FWtqo7avTVjFTo6OnotIq/HqgdgI4W2bS8vLy8/j1FslBb14ODg2Hv/UXh7AyAiMcan5+fnX2vXqd6ihhDapmlOhMUNwMrqhad+ndoFVPVNSum4dh0AD0rbdd372kWq7sF1XfdCRN7VrAHgwXoynU7/mc/n/9YqUG0PLoTQquo3oTUF8GtVoyPVWtTV18FtrfsD2ApVoyNVWlQiIQAGqBYdKd6icloBQI4a0ZGiLepq343WFMBg3vvi36oWXeD6vn8lIs9K3hPAzghd1xXdjyvWoh4eHj5zzr2XzLe3lJIsFgtJKZV6JAD3xDknk8lEnBu+xKSUnp+dnX0q8hwlbhJCaGOMHy2B3sViITHGEo8DYAN472UymeRcetE0zePZbHZhfgbrDUTspxX6vmdxA7ZMjFH6vs+5tFXVIvtx5pjIKhLyV+71KaXcDwHAhosxStM0Oa1qKHHKwdSiWiMhKSVZLpe8vQFbzDkne3t7OZeaTzmYWlTrAEtVZXEDttzVi0yGNsZoalWzW1TraQVDfw7ggUkpifc+p1X9w3LKIatFtQ6wJBIC7B5LdCT3lMPgFrXEAEtVZXEDdoyhVc0ekDl4gbNGQlSV1hTYUTHG3H33rAGZg/bgrAMsLSs4gO1giI4MHpC5doUSAyw5rQBAZLzoyNotqnVKCKcVAFwxBPwHDchcq0W1RkI4rQDgJssph3WjI3femUgIgFoMrepa0ZHftqghhNZ7bz6twOIG4DZXL0A51hmQ+dsFzjrAktMKAO5iiI6Eu6Ijv9yDWw2wfCcij3IqEwkBsK5a0ZFb78YASwBjqzEg89YWVVVPGGAJYEw1BmT+1KISCQFwX4wDMr/P5/OvP/7zf3dhgCWA+2Y55RBjfP5jdOS6RS3xm6YMsARgZYiOtDejI9cLXIzxpRgjIaqaezkAXDNGR95e/eFEOK0AYPOU+G1VX2KA5XK5ZHEDUJQlS7v6EXpp9vf3/xaRF7kP0fc9rSmAKlJK4pwT7wfP5n00nU6P/wNvYiJR2sRuggAAAABJRU5ErkJggg==",s5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2NWJjNmE2LTdhYjMtNGQ0Ny1hYTI1LWIxYzQ5NmFkZDI5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3ZDViNDA4LWNmNzUtNmE0Yy04ODgyLWQwZWI3MmNjMTdkZCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjViYzZhNi03YWIzLTRkNDctYWEyNS1iMWM0OTZhZGQyOTYiIHN0RXZ0OndoZW49IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46OB6bAAAD0UlEQVR4nO3dS24bRxCA4eomQSm72dsjTG4g7wLJAkY3kG+gnMC6QY6gI+gI9g0swE6QXXKDEKC91zKa6e7KwqRhO9ZjuqebFPl/OwkY1mhT6GpWlYyswUldX6rIxTpiA1iLtx8Wi1clA6qqmJIBRUSO6vrcilyVjgtgvYzIq/eLxdtS8YonuF+appl6/5eIVCXjAtgIN24yefHnfD4vEUxVxZYItDL1/lJIbsCuqqbeF63eiiW444ODCxE5KxUPwEZql7mgiCIl6tGzZ4fW2nfC6Q2AiIQQXvzx6dPfOWMUKVHbpqnsZHIlJDcAS8sDT/44uQN4738T1cPccQA8KdXLun6TO0jWEvWkrs9UJPsfAeBpytk6krVNpG2aynn/j1CaArhbttaRrHdw7vPXwVWuzwewFbK2jmRJcLSEABggW+vI6CUq0woAYozdOjJ6ido2zeq4WY35uQC2n7F29C8kp2N+mHPutRjTxjzrQ5DbrhvzdQCsyd5sJhM77PxkRJrjur76fbH4daz3GK1Effn8eSvGvJGI05uqyr9dJ6o61usAWCNjjOzNZmJNRIpRPf3w8eN16juM1ibSNk3lQngX29B723XiQxjjVQBsCGut7M9mMY/eTCeTn6/n85uU+KPdwaVMKzjnSG7AFgohiHMu5tHKeT/KfVxygjs+OLiI3c4bVKX3PvUVAGyozjkJcVdP7Uldn6XGTypRU1pCVFVu+14Cpzdgq1ljZH9vL+bRpCmH5BI1ZYGl857kBuyAoCpd38c8Wk1DSCpVoxNcyrSCD0EcpSmwM5z3cXftqocpUw5RJWrKAktVlduui63LATxRxhjZn83ERLSOxEw5RJWoqQsse+9JbsAOWt27x4hdkDk4wSW1hHgf+7UxgC0QQohtC4takDnorJiywDIsS1OmFYDdljLlMGRB5qBJhtQFlkwrAFgp0Toy6A4uZYEl0woAvhZUo6cchizIfFSCS2kJYVoBwI+kTDk8tnXkwRKVlhAAuRhj5Ke4UvXB1pEHS9S2aSprbfS0Ai0hAO6zOgTFeMyCzHsTnHPutYi0McF9/CYBADvER7aOGJHmodaROxPccoHlxeCo8jkrR86eAdhBXd/HVntn920d+eEdHAssAZQ29oLMO+/gnPdXLLAEUFKOBZn/S3C0hABYl5TWkaO6Pv/+l9+UqCywBLBuKVMOIYTTVevINyVq6v80ZYElgDGE+NaR6vvWkS8Jrg/hXFJaQihNAYwkpXXkpK4vv/qZaQUAmydlQaaonr5fLK5t6gLLhP4VALhTyoLM5T+hl/8A2pI/aItnBBUAAAAASUVORK5CYII=",a5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfDJPYAAAPwSURBVHic7d1BVtxGEIDh6paDAGehfTx5yiJmlvL4AnADfAN8AnODHIEjcAT7BvYFYs8uJFmE90j2bBIYSd2VxXjy4jgwo+6WZvD83w7ea0rMop6qqSqMrMFocnAmYk7XERvAOuibq/c/vxg0oqqYIQOKiIwm4xMROR86LoA1M/7F1Y+/vBkq3OAJrqzGpbP6QcQUQ8YFsAn0OvPm2eX04nKQaKpihwi04KyekdyAbWUKZ4at3gZLcN9ODk5FzPFQ8QBsICOH81wwVLgBfFN9X1lr3/L2BkBExHv37I/pr9M+YwxSopZVWWSZPSe5AViYv/AMEKfvAM7mP6iaqu84AB4SU4wmB697j9LnDx89f3osanv/JQA8UD22jvTaJlJWZeFs/hulKYC79dc60usdnLM5924Alui3daSXBEdLCICV9dg6krxEZVoBQIjUrSPJS9SyKj++bpLcAHRjbZb8D5KPUv6w1u6+MiKHoed920hd3yZ8IgDrsLOzK/bRV12PlaPJ+Pzq/cXLVM+RrER9Uo0PjdXXoW9vqir1zZ+ioqkeCcCaGDGys7cvxnQvEtXL0e/Ti3exz5CsTaSsysJn+duYht56diveNSkeB8AGsFkmO/l+wEm9zvzsu8vp5XVM/GR3cLHTCm1Tk9yAL4x3TtqmDjhpCmd2k9zHRSe4jy0hp6HnVb24oA8BwKZrm5mod90PGjkcPX96HBs/qkSNbQlRVWnqG/Eu4AMA8CAYYyXfexxwMm7KIbpEjV1g6dqa5AZ84VS9NEHdEabwmUaVqsEJLnZawTsnruHeDdgGrm2CXmZUTRUz5RBUosYusFRVqW9vRJW3N2BbzFtHHosx3dNOyJRDUImaYoGla2qSG7BlVOZ37iFCF2R2TnCxLSGubaRt+aspsI28c+LbkKupsAWZnd4VYxdYqnqpb/5iWgHYYjFTDl0WZHaaZEixwJJpBQAiIsZkku+FTjms1jrS6Q4udoEl0woAFlRjphxWX5C5UoKLbQlR75hWAPCJmCmHVVtHlpaotIQA6IsRI/n+10Fnl7WOLC1Ry6osrMniphVoCQFwBxWVeha2A3KVBZn3JrjW7r4SE7fAkpYQAPfxrglsHZFyWevInQnuSTU+NKKnIVFFFoP0s9DjALZIU89E1QecNMf3bR353zs4FlgCGFrqBZl33sE5m5+zwBLAkPpYkPlZgqMlBMC6RC3InIxPPv/2v7DAEsC6xSzI9N4fLVpHPilRU/xPUxZYAoil6gNbR0zx39aRfxKct/lJVEsICywBJBLZOnK2+MKIMK0AYPPELMhUL0dXH356Z1MssJz3sJDcAKQTsyBz/k/oRf4Gq9snW0kHgDsAAAAASUVORK5CYII=",c5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoJaQIcAAAPESURBVHic7d1LbhNBEIDh6rZlw272YdBwg7BDgUjODcINwgnIDThCjpAjwA2IxEPs4AZYcthnSTzdXSxsRyRgnOmeadv4/3aJ1KnJpjTVriobWYOyPDwT0dN1xAawFu8mk48vcwZUVTE5A4qIlOXBiYg9zx0XwLqZl5PJh3e5omVPcFX1rPK+/1VEipxxAWyEq17PPR2Pv4xzBFNVsTkCLXjfPxOSG7CrCu/7Wau3bAnu8ePnpyJynCsegI00mueCLLKUqHt7B/vW2vfC2xsAEQkhPP3x4/O3LmNkKVGralT0evZcSG4A5uYvPN3H6TqA9/6Nqux3HQfAVinK8sXbroN0WqKW5eGxiHb+TwDYVt21jnTaJlJVo8J7910oTQEs11nrSKd3cN477t0ArNJp60gnCY6WEAANdNY60nqJyrQCgBhtt460XqLO7t36lKYAGrPWtP6BZL/NP+ace22MjGLOhuBlOr1u83EArMlgMBRrew1Pmaosn59PJp9etfUcrZWojx69GBkjbyXi7U1VZTr9Kara1uMAWCNjjAwGQzGmeZGoKkeXlx8vUp+htTaRqhoVIbj3sQ290+m1hODbeBQAG8JaK4PBg5ijV71e/8l4fHGVEr+1O7iUaQXnHMkN+A+FEMQ5F3O08N61ch+XnOBmH+/GbedVDeJ9nfoIADaUc1NRDTFHR7NJqDRJJWpKS4iqSl1fSwhR/zyALWGMleEwtlSNn3JILlFTFlh670huwA5QDVLX05ijRQj9pFI1OsGlTCuE4MX7qNocwBaavdA0v2tXlf2UKYeoEjVlgeWsJeQ6ti4HsKVmrSMPxJjmaSdmyiGqRE1dYOl9TXIDdtDi3j1G7ILMxgkupSXEexf7sTGA/0AIIbYtLGpBZqN3xZQFlqphXpoyrQDsspQphyYLMhtNMqQusGRaAcBCjtaRRndwKQssmVYA8DvVlCmH+y/IvFeCS2kJYVoBwN+kTDnct3VkZYlKSwiArhhjZDh8GHV2VevIyhK1qkaFtTZhWoGWEADLLV6CYtxnQeY/E5xz7rVI/AJLWkIArBKCj7yjN9Wq1pGlCW6+wPI0Iuq8oS9q9gzADqrr6Pu4439tHfnrHRwLLAHk1vaCzKV3cN67cxZYAsipiwWZfyQ4WkIArEvagsyDk7u/vFWissASwLqlTDmEEI4WrSO3StTU7zRlgSWANizm1iMUd1tHbhJcCPWJJLSEsMASQFvSWkcOz25+EmFaAcDmSVmQqSpHk8mHC5u6wDKhfwUAlkpZkDn/Enr5Be7yP2gjXwXJAAAAAElFTkSuQmCC",u5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm80oXMAAAPjSURBVHic7d1LbhtHEIDh6iYh0rvZxxSYvUWPd4EewOgG8g2UE4Q38BF0BB3BvoEF2AmyiwxnHwFK9lqaw+7qLCQGjm2amu6eISX+304ChjXaFLpaVUUja3A0GZ0Fkek6YgNYAyNv3n+4ftllyBCCmC4Diojs741OrZHzruMCWC8T5OW7j9dvuorXeYL7qRyP++r/EJGiy7gANsKNs70Xv19eXXURLIQgtotAC/3gz4TkBmyrou99p9VbZwnuYLI7lSAnXcUDsIGMVAeT3Wl34TqwX/5QWrVvhdMbABFRqy9+u/znss0YnZSoVTkurPbOheQG4M7dgaf9OG0H8OpfiYSy7TgAHpTi8PnoddtBWi1Rj/ZGJ8FI638EgIepzdaRVttEqnJcOPV/CaUpgOVaax1p9Q7OBc+9G4BVWm0daSXB0RIC4N5abB3JXqIyrQAgRu7WkewlalWOF8fNIufnAnj8jNrs/5Ds5/wwp+4XMaaKfd57ldmszvdCANZiMNiRXq/Z+cmIjA+ej85//XD9c673yFaiHj57Wok1ryXy9BZCkE+fagkh5HolAGtijJHBYEesjUgxGo7f//n3Reo7ZGsTuW0J0bcpDb2zWS3ea47XAbABbM/KcLAT8+hN3/Z+vLi8ukmJn+0OLnVawTlHcgMeGfUqzrmYRwvnfZb7uOQEdzDZnaZs51UNMp/71NcAsIHq2olqxLWTkepob3SSGj+pRE1tCQkhyKyei3J6Ax4ta4wMnwxiHk2ackguUVMXWDrnSW7AI6chSD2bxzxa9FWTStXoBJc6reC9inOUpsA2cN5H3rOHMmXKIapETV1gGUKQ2ayOq80BPEjGGBkOd8SY5mknZsohqkTNscByPvckN2DLLO7cY8QuyGyc4NJbQnzsv44BPHDqNbYlLGpBZqOzYuoCS9Xb0pRpBWB7pUw5NFmQ2WiSIccCS6YVAIiIWGtkOGy3daTRHVzqAkumFQAsqIboKYcmCzLvleBSW0KYVgDwpZQph/u2jqwsUWkJAdAWY4w8iZtyWNk6srJErcpxYb1NmlagJQTAMosDUIz7LMj8boK7XWApVVR0WUwr0BICYDkf2TpiRMarWkeWJrjDZ08rETNtHPVOCEHqyKY+ANulrudxlV6Qk+9tHfnmHRwLLAF0LfeCzKV3cLctISywBNCdNhZkfpXgaAkBsC4prSP7e6PTr3/9GRZYAli3lAWZavV40TryvxI1x3eassASQCqNbx0pvmwd+S/BzVVP01tCKE0BpEtpHTmajM4++5lpBQCbJ2VBpmg4fvfx+sLmWGAZ3cMCAEukLMi8+xJ6+RcJHUqkAQAT5gAAAABJRU5ErkJggg==",d5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABVCAMAAAAbt1PlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaGhoaGhkZGRkZGRgYGBoaGhsbGyAgIBoaGhoaGhoaGhgYGBoaGhsbGxoaGhsbGxQUFEvJrZYAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWVJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Yhl+QYycZD1FNITiwAAAABJRU5ErkJggg==",p5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcaGjcaGjcZGTcZGTgYGDcaGjUbGzAgIDcaGjYaGjcaGjgYGDcaGjcbGzYaGjgbGygUFCzbu+wAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",f5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABQyHxQyHhQxHRQyHhAwIBQyHhUwIBAwIBMyHhQyHhMyHhQwHBQzHhQyHhMzHRMyHRUjGd0mtLoAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",h5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaNxoaNxkZNxkZNxgYOBoaNxsbNSAgMBoaNxoaNhoaNxgYOBoaNxsbNxoaNhsbOBQUKK3qr6AAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",g5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcnGjcoGjcoGTcnGTgoGDcnGjUlGzAgIDcoGjYoGjcoGjgoGDcnGjcnGzYmGjgoGygeFGHYzFEAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",De={unrated:Wy,bronze:Zy,silver:Qy,gold:qy,platinum:Ky,diamond:Xy,ruby:Jy,hidden:e5},Bl={front:{black:t5,red:n5,green:r5,blue:o5,gold:i5},inside:{black:l5,red:s5,green:a5,blue:c5,gold:u5},top:{black:d5,red:p5,green:f5,blue:h5,gold:g5}},m5=He`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,v5=He`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  22% {
    transform: translateY(22%) scale(1); opacity: 1;
  }

  44% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  66% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  100% {
    transform: translateY(0) scale(0.8); opacity: 0;
  }
`,x5=He`
  0% {
    transform: scale(1) rotate(0deg) translateY(0);
    opacity: 1;
  }

  50% {
    transform: scale(1) rotate(-30deg) translateY(-100%);
    opacity: 1;
  }

  100% {
    transform: scale(0.8) rotate(-30deg) translateY(-100%);
    opacity: 0;
  }
`,y5=He`
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(-15%);
  }

  40% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(-1000%);
  }
`,A5=d.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${m5} 0.25s forwards;
`,Q2=d.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:e})=>e&&O`
      animation: ${v5} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:e})=>!e&&O`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,w5=d.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:e})=>e.color.BLACK};

  ${Q2}:hover > & {
    box-shadow: 0 0 75px ${({theme:e})=>e.color.GOLD};
  }

  ${({theme:e,$isCardBoxOpening:t})=>t&&O`
      box-shadow: 0 0 75px ${e.color.GOLD};
    `};
`,S5=d.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,T5=d.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:e})=>!e&&O`
      opacity: 0;
    `}
`,Ul=d.img`
  position: absolute;
  top: ${({$top:e})=>e};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:e,$delay:t})=>e&&O`
      animation: ${y5} 1.5s ${t}s forwards;
    `}
`,E5=d.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,N5=d.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:e})=>e&&O`
      animation: ${x5} 1.1s ease-in-out forwards;
    `}
`,R5=e=>{const{color:t,isTierHidden:n,cardRanks:r,onFirstClick:o,onOpenAnimationEnd:i}=e,[l,a]=x.useState(!1),c=r[0],u=r[1],p=r[2];return s.jsx(A5,{children:s.jsxs(Q2,{onClick:()=>{a(h=>(h||o(),!0))},$isCardBoxOpening:l,onAnimationEnd:h=>{l&&h.target===h.currentTarget&&i()},"aria-label":"카드 상자를 열어 추첨 진행하기",children:[s.jsx(w5,{$isCardBoxOpening:l}),s.jsx(S5,{src:Bl.inside[t],draggable:!1}),s.jsxs(T5,{$isCardBoxOpening:l,children:[c&&s.jsx(Ul,{src:c!=="unrated"&&n?De.hidden:De[c],draggable:!1,alt:"",$isCardBoxOpening:l,$top:"0",$delay:1.5}),u&&s.jsx(Ul,{src:u!=="unrated"&&n?De.hidden:De[u],draggable:!1,alt:"",$isCardBoxOpening:l,$top:"4%",$delay:1.65}),p&&s.jsx(Ul,{src:p!=="unrated"&&n?De.hidden:De[p],draggable:!1,alt:"",$isCardBoxOpening:l,$top:"8%",$delay:1.8})]}),s.jsx(E5,{src:Bl.front[t],draggable:!1,alt:""}),s.jsx(N5,{src:Bl.top[t],draggable:!1,alt:"",$isCardBoxOpening:l})]})})},I5=d.div`
  display: flex;
  visibility: ${({$visible:e})=>e?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:e})=>e};
  justify-content: center;

  width: 100%;
  height: 100%;
`,k5=d.div.attrs(({$gap:e,$width:t,$height:n})=>({style:{gap:`${e}px`,padding:`${e}px`,width:`${t}px`,height:`${n}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,C5=d.div.attrs(({$gap:e})=>({style:{rowGap:`${e}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,j5=d.div.attrs(({$gap:e})=>({style:{columnGap:`${e}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,M5=()=>{const[e,t]=x.useState(0),[n,r]=x.useState(0);return{rotateX:e,rotateY:n,adjustCardTweak:l=>{const a=l.currentTarget.getBoundingClientRect(),c=l.clientX-a.left,p=((l.clientY-a.top)/a.height-.5)*20,h=(c/a.width-.5)*-20;t(p),r(h)},resetCardTweak:()=>{t(0),r(0)}}},D5=(e,t)=>t?De.hidden:e>=1&&e<=5?De.bronze:e>=6&&e<=10?De.silver:e>=11&&e<=15?De.gold:e>=16&&e<=20?De.platinum:e>=21&&e<=25?De.diamond:e>=26&&e<=30?De.ruby:De.unrated,L5=(e,t,n)=>t?n.color.GRAY:e>=1&&e<=5?n.solvedAcTier[5]:e>=6&&e<=10?n.solvedAcTier[10]:e>=11&&e<=15?n.solvedAcTier[15]:e>=16&&e<=20?n.solvedAcTier[20]:e>=21&&e<=25?n.solvedAcTier[25]:e>=26&&e<=30?n.solvedAcTier[30]:n.color.WHITE,O5=d.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,_5=d.div.attrs(({$rotateX:e,$rotateY:t,$width:n})=>({style:{transform:`perspective(${n*3}px) rotateX(${e}deg) rotateY(${t}deg)`,width:`${n}px`,height:`${n*1.36}px`,borderRadius:`${n*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:e})=>e.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:e,$isTierHidden:t})=>`url(${D5(e,t)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  }
`,b5=d.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,G5=d.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,H5=d.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`,lineHeight:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isTierHidden:t,theme:n})=>L5(e,t,n)};
  font-family: 'Cafe24ClassicType';
`,z5=d.div.attrs(({$cardWidth:e,theme:t})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${t.color.WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,$5=d.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    115deg,
    transparent 32%,
    rgba(250, 215, 110, 0.3) 42%,
    rgba(135, 50, 255, 0.3) 53%,
    transparent 63%
  );
  background-size: 150% 150%;

  mix-blend-mode: color-dodge;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`,hu=e=>{const{problemInfo:t,isTierHidden:n,width:r,onHover:o}=e,{problemId:i,title:l,tier:a}=t,{rotateX:c,rotateY:u,adjustCardTweak:p,resetCardTweak:h}=M5();return s.jsx(O5,{children:s.jsx(_5,{$width:r,$tier:a,$isTierHidden:n,$rotateX:c,$rotateY:u,onMouseMove:p,onMouseOut:h,onMouseOver:o,children:s.jsxs(b5,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${i}`,"aria-label":`문제 번호 ${i}번 ${l}`,$cardWidth:r,children:[s.jsx(G5,{$cardWidth:r,src:n?oc.hidden:Xt[a],alt:"",draggable:!1}),s.jsx(H5,{$cardWidth:r,$tier:a,$isTierHidden:n,children:`#${i}`}),s.jsx(z5,{$cardWidth:r,children:l}),s.jsx($5,{$movement:c+u})]})})})},Rr=120,Xs=1/1.36,P5=(e,t,n)=>{const{rowCount:r,columnCount:o,cardGridGap:i,cardWidth:l,innerGridWidth:a,innerGridHeight:c,isOverflow:u}=B5(e,t,n);if(u)return{cardWidth:l,cardGridGap:i,innerGridWidth:a,innerGridHeight:c,isOverflow:u};const p=F5(r,o,n);return{cardWidth:l,cardGridGap:i,rowCardCounts:p,isOverflow:u}},B5=(e,t,n)=>{let r={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let g=1;g<=n;g+=1){const y=Math.ceil(n/g),{cardWidth:A,cardGridGap:S,isOverflow:j}=U5(e,t,y,g);!j&&A>r.cardWidth&&(r={rowCount:y,columnCount:g,cardWidth:A,cardGridGap:S,isOverflow:j})}if(r.isOverflow){const g=Math.max(1,Math.floor((e-Rr/10)/(Rr*1.1)));r={rowCount:Math.ceil(n/g),columnCount:g,cardWidth:Rr,cardGridGap:Rr/10,isOverflow:!0}}const{rowCount:o,columnCount:i,cardWidth:l,cardGridGap:a,isOverflow:c}=r,u=l/Xs,p=i*l+(i+1)*a,h=o*u+(o+1)*a;return{rowCount:o,columnCount:i,cardWidth:l,cardGridGap:a,innerGridWidth:p,innerGridHeight:h,isOverflow:c}},U5=(e,t,n,r)=>{const o=e*10/(11*r+1),i=t/(n*(1/Xs+.1)+.1),l=Math.max(Rr,Math.min(o,i)-1),a=l/10,c=l/Xs,u=r*l+(r+1)*a,p=n*c+(n+1)*a,h=u>e||p>t;return{cardWidth:l,cardGridGap:l/10,isOverflow:h}},F5=(e,t,n)=>{const r=Array.from({length:e}).map(()=>t),o=e*t-n;for(let i=0;i<o;i+=1)r[e-i%e-1]-=1;return r},V5=e=>{const{cardCount:t}=e,[n,r]=x.useState(t),[o,i]=x.useState(0),[l,a]=x.useState(0),[c,u]=x.useState(!1),p=x.useRef(null);return x.useEffect(()=>{r(n)},[t]),x.useLayoutEffect(()=>{const h=p.current;if(!h)return;const g=()=>{const{clientWidth:A,clientHeight:S}=h;i(A),a(S),u(!0)},y=new ResizeObserver(()=>{g()});return y.observe(p.current),()=>{y.disconnect()}},[]),{...P5(o,l,n),isLoaded:c,cardGridRef:p}},Y5=e=>{const{problemInfos:t,isTierHidden:n,onCardHover:r}=e,o=t.length,i=V5({cardCount:o}),{cardWidth:l,cardGridGap:a,isOverflow:c,isLoaded:u,cardGridRef:p}=i;let h=0;return s.jsx(I5,{ref:p,$visible:u,$overflowY:c?"auto":"visible",children:c?s.jsx(k5,{$width:i.innerGridWidth,$height:i.innerGridHeight,$gap:a,children:t.map(g=>s.jsx(hu,{width:l,problemInfo:g,isTierHidden:![0,31].includes(g.tier)&&n,onHover:r},g.problemId))}):s.jsx(C5,{$gap:a,children:i.rowCardCounts.map((g,y)=>s.jsx(j5,{$gap:a,children:Array.from({length:g}).map(()=>{if(!t[h])return null;const A=t[h];return h+=1,s.jsx(hu,{width:l,problemInfo:A,isTierHidden:![0,31].includes(A.tier)&&n,onHover:r},A.problemId)})},y))})})},W5=e=>{if(!(le(e)&&"success"in e&&typeof e.success=="boolean"))return!1;const{success:t}=e;if(t)return"problemInfos"in e&&Q5(e.problemInfos);if("statusCode"in e&&typeof e.statusCode!="number"||!("errorMessage"in e)||typeof e.errorMessage!="string")return!1;if(!("errorDescriptions"in e))return!0;const{errorDescriptions:n}=e;return typeof n=="string"||Array.isArray(n)&&n.every(r=>typeof r=="string")},Z5=e=>le(e)&&"problemId"in e&&"title"in e&&"tier"in e&&typeof e.problemId=="number"&&typeof e.title=="string"&&ic(e.tier),Q5=e=>Array.isArray(e)&&e.every(t=>Z5(t)),q5=["bronze","silver","gold","platinum","diamond","ruby"],K5=e=>{if(e.length===0)throw Error("프리뷰 카드 랭크 계산을 위해서는 최소 1문제의 정보가 제공되어야 합니다.");if(e.length===1){const a=e[0].tier;return[Ho(a)]}if(e.length===2){const a=e[0].tier,c=e[1].tier;return[Ho(a),Ho(c)]}const t={unrated:0,bronze:0,silver:0,gold:0,platinum:0,diamond:0,ruby:0};e.forEach(({tier:a})=>{t[Ho(a)]+=1});const n=Object.entries(t).sort((a,c)=>c[1]-a[1]);if(!X5(n))throw Error("프리뷰 카드 랭크 계산 중 데이터 불일치를 발견했습니다.");const[r,o]=n[0],i=n[1][0],l=n[2][0];return o===e.length?[r,r,r]:o*2>e.length?[r,r,i]:[r,i,l]},Ho=e=>e===0||e===31?"unrated":q5[Math.floor((e-1)/5)],X5=e=>e.every(([t])=>X4(t)),J5=e=>{const t=e.reduce((o,i)=>o+i.probability,0);if(Math.abs(t-1)>1e-6)throw new Error(`확률의 합은 1이어야 하는데, 실제 확률의 합이 ${t}였습니다.`);const n=Math.random();let r=0;for(const{choice:o,probability:i}of e)if(r+=i,n<=r)return o;throw new Error("잘못된 확률 정보를 사용하셨습니다. 다시 확인해 주세요.")},e7=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,t7="/assets/card-slide-1-BWULmWDl.wav",n7="/assets/card-slide-2-DSpetA15.wav",r7="/assets/card-slide-3-DsJdFER7.wav",o7="/assets/card-slide-4-2Wc5wS26.wav",i7="/assets/gacha-COr4DCSI.mp3",l7=[t7,n7,r7,o7],q2=e=>le(e)&&"isTierHidden"in e&&"isAudioMuted"in e&&typeof e.isTierHidden=="boolean"&&typeof e.isAudioMuted=="boolean",s7="🎲",a7="✅",c7="📜",u7=(e,t)=>{const n=t.map(({problemId:r,title:o})=>`- ${r}번 - ${o} (https://acmicpc.net/problem/${r})`).join(`
`);return`
# 추첨 결과 ${s7}

## 추첨 정보 ${a7}

- 추첨 이름: ${e}
- 문제 수: ${t.length}

## 문제 목록 ${c7}
${n}
`.trim()},d7=[{choice:"black",probability:.24975},{choice:"red",probability:.24975},{choice:"green",probability:.24975},{choice:"blue",probability:.24975},{choice:"gold",probability:.001}],p7=l7.map(e=>new Audio(e)),f7=e=>{const{open:t,slot:n,problemCount:r}=e,[o,i]=x.useState("loading"),[l,a]=x.useState([]),[c,u]=x.useState("black"),[p,h]=x.useState(""),[g,y]=x.useState([]),[A,S]=x.useState(!1),[j,m]=x.useState(!0),[f,v]=x.useState(""),[w,E]=x.useState(!0),[N,T]=x.useState(!1),[M,z]=x.useState(!1),_=x.useRef(new Audio(i7)),ce=l.length>0?K5(l):["unrated"],Ye=x.useCallback(async()=>{const ne=await U.runtime.sendMessage({command:Nr.GET_RANDOM_DEFENSE_RESULT,query:n.query,problemCount:r});if(!W5(ne)){h("API로부터 불러온 데이터에서 데이터 불일치가 발견되었습니다."),y("개발자에게 이 문제가 발생했음을 알려주세요."),i("error");return}if(!ne.success){const{errorMessage:Re,errorDescriptions:Ie}=ne;h(Re),y(Ie??[]),i("error");return}const se=ne.problemInfos;a(se),i("ready")},[n,r]),We=x.useCallback(async()=>{const ne=await U.runtime.sendMessage({command:Nr.FETCH_GACHA_OPTIONS});if(!q2(ne)){h("설정 데이터에서 불일치가 발견되었습니다."),y("개발자에게 이 문제가 발생했음을 알려주세요."),i("error");return}const{isTierHidden:se,isAudioMuted:Re}=ne;S(se),m(Re),z(!0),_.current.muted=Re},[]),jt=()=>{i("loading"),T(!1),u(J5(d7)),Ye()},In=()=>{S(ne=>!ne)},Q=()=>{m(ne=>{const se=!ne;return _.current.muted=se,se})},te=()=>{j||p7[e7(0,3)].play()},C=()=>{L(),_.current.play()},L=()=>{_.current.pause(),_.current.currentTime=0},b=()=>{navigator.clipboard.writeText(u7(n.title,l)),v("문제 목록을 클립보드에 복사했어요!"),E(!1),setTimeout(()=>E(!0))},P=()=>{i("showingResult"),v("")},B=()=>{const ne=new Date().toISOString(),se=l.map(Re=>({...Re,createdAt:ne})).reverse();U.runtime.sendMessage({command:Nr.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:se}),T(!0),v("문제 목록을 추첨 기록에 저장했어요!"),E(!1),setTimeout(()=>E(!0))};return x.useEffect(()=>{t&&jt()},[t,n,r]),x.useEffect(()=>{We()},[]),x.useEffect(()=>{M&&U.runtime.sendMessage({command:Nr.SAVE_GACHA_OPTIONS,isTierHidden:A,isAudioMuted:j})},[M,A,j]),{gachaStatus:o,problemInfos:l,cardBoxColor:c,previewCardRanks:ce,errorMessage:p,errorDescriptions:g,isTierHidden:A,isAudioMuted:j,notificationMessage:f,shouldNotificationFadeOut:w,isSavedToHistory:N,restartGacha:jt,toggleIsTierHidden:In,toggleIsAudioMuted:Q,playCardSlideAudio:te,playGachaAudio:C,stopGachaAudio:L,copyProblemInfosMarkdownToClipboard:b,showResultScreenAndResetNotificationMessage:P,saveGachaResultToStorage:B}},h7=He`
  0% {
    opacity: 1;
    filter: brightness(200%);
  }

  20% {
    opacity: 1;
    filter: brightness(100%);
  }

  80% {
    opacity: 1;
    filter: brightness(100%);
  }

  100% {
    opacity: 0;
    filter: brightness(100%);
  }
`,g7=d.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${h7} 2s forwards;
  }
`,m7=d.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,v7=d.div`
  font-size: 16px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 600;
`,x7=e=>{const{children:t,shouldFadeOut:n}=e;return s.jsxs(g7,{className:n?"fading":"",children:[t!==""&&s.jsx(m7,{children:s.jsx(co,{})}),s.jsx(v7,{children:t})]})},y7=e=>{const{open:t,theme:n="totamjung",slot:r,problemCount:o,portalTarget:i,onClose:l}=e,{gachaStatus:a,problemInfos:c,cardBoxColor:u,previewCardRanks:p,errorMessage:h,errorDescriptions:g,isTierHidden:y,isAudioMuted:A,isSavedToHistory:S,notificationMessage:j,shouldNotificationFadeOut:m,restartGacha:f,toggleIsTierHidden:v,toggleIsAudioMuted:w,playCardSlideAudio:E,playGachaAudio:N,stopGachaAudio:T,copyProblemInfosMarkdownToClipboard:M,showResultScreenAndResetNotificationMessage:z,saveGachaResultToStorage:_}=f7({open:t,slot:r,problemCount:o});return s.jsx(Rn,{title:"즉석 추첨",open:t,theme:n,padding:"0",closeOnBackdropClick:!1,portalTarget:i,onClose:()=>{T(),l()},children:s.jsxs(Ry,{children:[a==="loading"&&s.jsx(by,{children:s.jsx(Pl,{children:s.jsxs(fu,{children:[s.jsx(Gy,{children:s.jsx(fd,{})}),s.jsx(Hy,{children:"잠시만 기다려주세요..."})]})})}),a==="ready"&&s.jsxs(zy,{children:[s.jsx($y,{children:s.jsx(R5,{color:u,isTierHidden:y,cardRanks:p,onFirstClick:N,onOpenAnimationEnd:z})}),s.jsx(Pl,{children:s.jsxs(fu,{children:[s.jsx(Py,{children:s.jsx(fh,{})}),s.jsx(By,{children:"카드 상자를 클릭하면 결과를 확인할 수 있습니다"})]})})]}),a==="error"&&s.jsxs(Cy,{children:[s.jsx(jy,{children:s.jsxs(My,{children:[s.jsxs(Dy,{children:[s.jsx(Ly,{children:s.jsx(pd,{})}),s.jsx(Oy,{children:h})]}),s.jsx(_y,{children:typeof g=="string"?s.jsx(pu,{children:g}):g.map(ce=>s.jsx(pu,{children:ce},ce))})]})}),s.jsx(Pl,{children:s.jsx(J,{type:"button",name:"다시 시도하기",size:"large",color:I.color.LIGHT_RED,iconSrc:s.jsx(ph,{}),disabled:!1,ariaLabel:"다시 시도하기",onClick:f})})]}),a==="showingResult"&&s.jsxs(Uy,{children:[s.jsx(Fy,{children:s.jsx(Y5,{problemInfos:c,onCardHover:E,isTierHidden:y})}),s.jsx(Vy,{children:s.jsx(x7,{shouldFadeOut:m,children:j})}),s.jsxs(Yy,{children:[s.jsx(J,{type:"button",name:"문제 목록 복사",size:"large",color:I.color.LIGHT_GRAY,iconSrc:s.jsx(dd,{}),disabled:!1,ariaLabel:"문제 목록 복사",onClick:M}),s.jsx(J,{type:"button",name:"추첨 기록 저장",size:"large",color:I.color.LEMON,iconSrc:S?s.jsx(co,{}):s.jsx(hh,{}),disabled:S,ariaLabel:"추첨 기록 저장",onClick:_}),s.jsx(J,{type:"button",name:"다시 추첨하기!",size:"large",color:I.color.ORANGE,iconSrc:s.jsx(md,{}),disabled:!1,ariaLabel:"다시 추첨하기!",onClick:f})]})]}),s.jsxs(uu,{$align:"left",children:[s.jsx(Iy,{onClick:v,"aria-label":y?"문제 난이도 보이기":"문제 난이도 감추기",children:y?s.jsx("img",{src:y2,alt:"",draggable:!1}):s.jsx("img",{src:bm,alt:"",draggable:!1})}),s.jsx(du,{children:`티어 숨기기: ${y?"ON":"OFF"}`})]}),s.jsxs(uu,{$align:"right",children:[s.jsx(du,{children:`효과음: ${A?"OFF":"ON"}`}),s.jsx(ky,{onClick:w,"aria-label":A?"효과음 켜기":"효과음 끄기",children:A?s.jsx(mh,{}):s.jsx(gh,{})})]})]})})},A7=/^#([0-9a-f]{6})$/,Js=(e,t)=>{if(!A7.test(e))throw new Error("잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.");if(isNaN(t)||t<0||t>1)throw new Error("투명도는 반드시 0 이상 1 이하의 수여야 합니다.");const n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16),i=Math.round(t*255).toString(16).padStart(2,"0");return`#${[n,r,o].map(l=>l.toString(16).padStart(2,"0")).join("")}${i}`},K2={none:I.color.LIGHT_GRAY,totamjung:I.color.LIGHTER_BROWN,bojExtendedDark:I.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:I.bojExtendedColor.SKY_BLUE,solvedAcLight:I.color.LIGHT_GRAY,solvedAcDark:I.color.LIGHT_GRAY,solvedAcBlack:I.color.LIGHT_GRAY},gu={...K2,totamjung:I.color.LEMON},w7={none:I.color.WHITE,totamjung:I.color.DARK_BROWN,bojExtendedDark:I.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:I.bojExtendedColor.DARK_INDIGO,solvedAcLight:I.color.WHITE,solvedAcDark:I.solvedAcColor.DARK_INDIGO,solvedAcBlack:I.color.BLACK},S7=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,T7=d.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid
    ${({$totamjungTheme:e})=>K2[e]};
  border-radius: 5.666px;
  background-color: ${({$totamjungTheme:e})=>w7[e]};

  color: ${({theme:e,$totamjungTheme:t})=>cc.includes(t)?e.color.BLACK:e.color.WHITE};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({$totamjungTheme:e})=>gu[e]};
    outline: 3px solid
      ${({$totamjungTheme:e})=>Js(gu[e],.5)};
  }

  transition: outline 0.05s;
`,Fl=d.p`
  font-family: Pretendard;
  font-size: ${({$fontSize:e})=>e};
  text-align: ${({$textAlign:e})=>e};
  color: ${({theme:e,$totamjungTheme:t,$isTransparent:n})=>{const r=n?.6:1;return cc.includes(t)?Js(e.color.BLACK,r):Js(e.color.WHITE,r)}};
`,E7=/^\d+$/,N7=()=>{const[e,t]=x.useState("5"),n=o=>{const i=o.target.value;i.length>=3||t(i)},r=E7.test(e)&&Number(e)>=1&&Number(e)<=Di;return{inputValue:e,updateInputValue:n,isInputValueValid:r}},cc=["none","solvedAcLight"],R7=e=>{const{open:t,theme:n="totamjung",portalTarget:r,shouldShowHotkeyMessage:o,onClose:i,onSubmitProblemCount:l}=e,{inputValue:a,updateInputValue:c,isInputValueValid:u}=N7();return s.jsxs(Rn,{title:"즉석 추첨",theme:n,portalTarget:r,open:t,onClose:i,children:[s.jsxs(S7,{children:[s.jsx(Fl,{$totamjungTheme:n,$fontSize:"16px",$textAlign:"left",children:"추첨을 진행할 문제 수를 입력해 주세요."}),s.jsx(T7,{type:"number",min:1,max:Di,value:a,$totamjungTheme:n,onChange:c,autoFocus:!0}),s.jsx(Fl,{$totamjungTheme:n,$fontSize:"14px",$textAlign:"right",children:`1문제 이상, ${Di}문제 이하`}),o&&s.jsx(Fl,{$totamjungTheme:n,$fontSize:"16px",$textAlign:"left",$isTransparent:!0,children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),s.jsx(go,{theme:n,children:s.jsx(J,{type:"button",name:"확인",size:"medium",iconSrc:s.jsx(ao,{}),color:cc.includes(n)?I.color.DARK_GRAY:I.color.GOLD,disabled:!u,ariaLabel:"확인",onClick:()=>l(Number(a))})})]})},I7=e=>{const{isLoaded:t}=e,{activeModalName:n,openModal:r,closeModal:o}=nl(),{slot:i,selectedSlotNo:l,hotkey:a,occupiedSlotNos:c,shouldEditModalShow:u,gachaProblemCount:p,setSelectedSlotNo:h,switchHotkey:g,openEditModal:y,closeEditModal:A,updateSlot:S,deleteSlot:j,setGachaProblemCount:m}=py(e);return s.jsxs(ac,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[t?s.jsxs(Vx,{children:[s.jsxs(Yx,{children:[s.jsx(Xx,{selectedSlotNo:l,occupiedSlotNos:c,onChange:h}),s.jsx(uy,{selectedSlotNo:l,hotkey:a,onClick:g})]}),s.jsx(ly,{...i}),s.jsxs(Wx,{children:[s.jsx(J,{type:"button",name:"쿼리 복사",size:"medium",color:I.color.LIGHT_GRAY,iconSrc:s.jsx(dd,{}),disabled:i.isEmpty,ariaLabel:"쿼리 클립보드에 복사하기",onClick:()=>{i.isEmpty||(navigator.clipboard.writeText(i.query),r("copiedQuery"))}}),s.jsx(J,{type:"button",name:"수정",size:"medium",color:I.color.SKY_BLUE,iconSrc:s.jsx(oh,{}),disabled:i.isEmpty,ariaLabel:"슬롯 수정하기",onClick:y}),s.jsx(J,{type:"button",name:"삭제",size:"medium",color:I.color.RED,iconSrc:s.jsx($i,{}),disabled:i.isEmpty,ariaLabel:"슬롯 삭제하기",onClick:()=>{r("confirmDeleteSlot")}}),s.jsx(J,{type:"button",name:"즉석 추첨",size:"medium",color:I.color.PURPLE,iconSrc:s.jsx(md,{}),disabled:i.isEmpty,ariaLabel:"즉석 추첨 진행",onClick:()=>{r("gachaProblemCount")}})]})]}):s.jsx(Ay,{}),s.jsx(vy,{title:i.isEmpty?"":i.title,query:i.isEmpty?"":i.query,open:u,onClose:A,onSlotChange:S}),s.jsx(It,{actionType:"confirm",width:"350px",height:"auto",open:n==="copiedQuery",onClose:o,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),s.jsx(It,{actionType:"yesNo",width:"350px",height:"auto",open:n==="confirmDeleteSlot",onYesSelect:()=>{j(),o()},onNoSelect:o,title:"추첨 삭제 확인",message:`${l}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`}),s.jsx(R7,{open:n==="gachaProblemCount",shouldShowHotkeyMessage:!0,onClose:o,onSubmitProblemCount:f=>{m(f),r("gacha")}}),!i.isEmpty&&s.jsx(y7,{open:n==="gacha",slot:i,problemCount:p,onClose:o})]})},k7=e=>e==="Alt"||e==="F2",uc=e=>!le(e)||!("isEmpty"in e)||typeof e.isEmpty!="boolean"?!1:e.isEmpty?!0:"title"in e&&"query"in e&&typeof e.title=="string"&&typeof e.query=="string",dc=e=>typeof e!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(e),C7=e=>{if(!(le(e)&&"selectedNo"in e&&typeof e.selectedNo=="number"))return!1;const{selectedNo:t,...n}=e;return!(t%1===0&&t>=0&&t<=9)||!O2(n)?!1:Array.from({length:10}).every((r,o)=>o in n&&uc(n[o]))},pc=e=>{if(!(le(e)&&"hotkey"in e&&"selectedSlotNo"in e&&"slots"in e&&typeof e.hotkey=="string"&&["Alt","F2"].includes(e.hotkey)&&dc(e.selectedSlotNo)))return!1;const{slots:t}=e;return O2(t)?Array.from({length:10}).every((n,r)=>r in t&&uc(t[r])):!1},j7=e=>le(e)&&Array.from({length:10}).every((t,n)=>n in e),X2=e=>{if(!le(e)||!("slots"in e))return!1;const{slots:t}=e;return le(t)&&Array.from({length:10}).every((n,r)=>r in t)},J2=[1,2,3,4,5,6,7,8,9,0],ep=(e,t)=>uc(e)?e.isEmpty?{isEmpty:!0}:e.query.trim()===""||e.query.length>kt?{isEmpty:!0}:e.title.trim()===""||e.title.length>io?{...e,isEmpty:!1,title:`추첨 ${t}`}:e:{isEmpty:!0},fc=e=>{if(!X2(e))return qs;const t="hotkey"in e&&k7(e.hotkey)?e.hotkey:"Alt",n="selectedSlotNo"in e&&dc(e.selectedSlotNo)?e.selectedSlotNo:1,r={...e,hotkey:t,selectedSlotNo:n};return J2.forEach(o=>{const i=r.slots[o];r.slots[o]=ep(i,o)}),pc(r)?r:qs},M7=e=>{if(!j7(e))return W0;const{selectedNo:t,...n}=e,r=dc(t)?e.selectedNo:1,o={...n,selectedNo:r};return J2.forEach(i=>{const l=o[i];o[i]=ep(l,i)}),C7(o)?o:W0},D7=async()=>{const t=(await U.storage.local.get(k.QUICK_SLOTS))[k.QUICK_SLOTS];return fc(t)},L7=(e,t,n)=>{const r={selectedSlotNo:e,slots:t,hotkey:n};if(!X2(r))return;const o=fc(r);U.storage.local.set({[k.QUICK_SLOTS]:o})},O7={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},_7=()=>{const[e,t]=x.useState(O7),[n,r]=x.useState(1),[o,i]=x.useState("Alt"),[l,a]=x.useState(!1);return x.useEffect(()=>{(async()=>{const{slots:p,selectedSlotNo:h,hotkey:g}=await D7();t(p),r(h),i(g),a(!0)})()},[]),x.useEffect(()=>{l&&L7(n,e,o)},[n,e,o]),{slots:e,selectedSlotNo:n,hotkey:o,isLoaded:l,setSelectedSlotNo:r,setHotkey:i,updateSlot:(p,h)=>{t(g=>({...g,[n]:{isEmpty:!1,title:p,query:h}}))},deleteSlot:()=>{t(p=>({...p,[n]:{isEmpty:!0}}))}}},b7=d.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,hc=(e,t,n)=>t?n.color.GRAY:e>=1&&e<=5?n.solvedAcTier[5]:e>=6&&e<=10?n.solvedAcTier[10]:e>=11&&e<=15?n.solvedAcTier[15]:e>=16&&e<=20?n.solvedAcTier[20]:e>=21&&e<=25?n.solvedAcTier[25]:e>=26&&e<=30?n.solvedAcTier[30]:n.color.WHITE,mu=(e,t,n,r)=>t?O`
      background-image: ${n?r.solvedAcTier.HIDDEN_DARK_GRADIENT200:r.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${r.solvedAcTier.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?O`
      background-image: ${n?r.solvedAcTier.BRONZE_DARK_GRADIENT200:r.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${r.solvedAcTier.BRONZE_GRADIENT};
    `:e>=6&&e<=10?O`
      background-image: ${n?r.solvedAcTier.SILVER_DARK_GRADIENT200:r.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${r.solvedAcTier.SILVER_GRADIENT};
    `:e>=11&&e<=15?O`
      background-image: ${n?r.solvedAcTier.GOLD_DARK_GRADIENT200:r.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${r.solvedAcTier.GOLD_GRADIENT};
    `:e>=16&&e<=20?O`
      background-image: ${n?r.solvedAcTier.PLATINUM_DARK_GRADIENT200:r.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${r.solvedAcTier.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?O`
      background-image: ${n?r.solvedAcTier.DIAMOND_DARK_GRADIENT200:r.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${r.solvedAcTier.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?O`
      background-image: ${n?r.solvedAcTier.RUBY_DARK_GRADIENT200:r.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${r.solvedAcTier.RUBY_GRADIENT};
    `:O`
    background-image: ${n?r.solvedAcTier.UNRATED_DARK_GRADIENT200:r.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${r.solvedAcTier.UNRATED_GRADIENT};
  `,G7=d.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:t,theme:n})=>mu(e,t,!1,n)};

  &:hover {
    ${({$tier:e,$isHidden:t,theme:n})=>mu(e,t,!0,n)};
  }
`,H7=d.a`
  display: flex;
  align-items: center;
`,z7=d.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:t,theme:n})=>hc(e,t,n)};
  }
`,$7=d.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,P7=d.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,B7=d.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:t,theme:n})=>hc(e,t,n)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,U7=d.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,F7=d.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:t,theme:n})=>hc(e,t,n)};
`,V7=d.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.WHITE};
  }
`,Y7=d.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.color.WHITE};
`,tp=e=>{const t=String(e.getFullYear()).padStart(4,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),l=String(e.getSeconds()).padStart(2,"0");return`${t}-${n}-${r} ${o}:${i}:${l}`},W7=e=>{const{problemId:t,title:n,tier:r,createdAt:o,isHidden:i,onDelete:l}=e;return s.jsxs(G7,{$tier:r,$isHidden:i,children:[s.jsxs(H7,{href:`https://icpc.me/${t}`,target:"__blank","aria-label":`${t}번 ${n} 문제`,children:[s.jsx($7,{src:i?oc.hidden:Xt[r],alt:"",draggable:!1}),s.jsxs(P7,{children:[s.jsx(B7,{$tier:r,$isHidden:i,children:n}),s.jsxs(U7,{children:[s.jsx(F7,{$tier:r,$isHidden:i,children:`#${t}`}),s.jsxs(V7,{children:[s.jsx(Xf,{}),s.jsx(Y7,{children:tp(new Date(o))})]})]})]})]}),s.jsx(z7,{$tier:r,$isHidden:i,onClick:l,"aria-label":"추첨 기록에서 제거하기",children:s.jsx($i,{})})]})},Z7=e=>{const{items:t,isHidden:n,onDelete:r}=e;return s.jsx(b7,{children:t.map(o=>{const i=`${o.problemId}-${o.createdAt}`,l=![0,31].includes(o.tier)&&n;return s.jsx(W7,{isHidden:l,onDelete:()=>{r(i)},...o},i)})})},np=e=>le(e)&&"no"in e&&"title"in e&&"tier"in e&&"date"in e&&typeof e.no=="number"&&typeof e.title=="string"&&typeof e.tier=="number"&&typeof e.date=="string"&&e.tier in Xt,gc=e=>le(e)&&"problemId"in e&&"title"in e&&"tier"in e&&"createdAt"in e&&typeof e.problemId=="number"&&typeof e.title=="string"&&typeof e.tier=="number"&&e.tier in Xt&&rl(e.createdAt),rp=e=>Array.isArray(e)&&e.every(t=>gc(t)),Q7=e=>{if(!rl(e))return!1;const[t,n,r,o,i,l,a]=e.split(/[-:.TZ]/).map(Number);return t>=1&&t<=9999&&n>=1&&n<=12&&r>=1&&r<=31&&o>=0&&o<=23&&i>=0&&i<=59&&l>=0&&l<=59&&a>=0&&a<=999},q7=e=>!isNaN(Number(new Date(e))),K7=e=>gc(e)&&e.problemId%1===0&&e.problemId>=F2&&e.problemId<=V2&&e.title.length<=Y2&&Q7(e.createdAt)&&e.tier%1===0&&e.tier>=U2&&e.tier<=dx,X7=e=>np(e)&&e.no%1===0&&e.no>=F2&&e.no<=V2&&e.title.length<=Y2&&q7(e.date)&&e.tier%1===0&&e.tier>=U2&&e.tier<=ux,J7=e=>[...e].sort((t,n)=>new Date(t.date).getTime()>new Date(n.date).getTime()?-1:1),e8=e=>[...e].sort((t,n)=>t.createdAt>n.createdAt?-1:1),mc=e=>{if(!Array.isArray(e))return nc;const t=[];return e.forEach(n=>{gc(n)&&K7(n)&&t.push(n)}),e8(t).slice(0,oo)},t8=e=>{if(!Array.isArray(e))return nc;const t=[];return e.forEach(n=>{np(n)&&X7(n)&&t.push(n)}),J7(t).slice(0,oo)},vc=e=>typeof e=="boolean"?e:N2,n8=async()=>{const e=await U.storage.local.get([k.RANDOM_DEFENSE_HISTORY,k.IS_TIER_HIDDEN]),t=e[k.RANDOM_DEFENSE_HISTORY],n=e[k.IS_TIER_HIDDEN],r=mc(t),o=vc(n);return{randomDefenseHistory:r,isHidden:o}},r8=async(e,t)=>{if(!Array.isArray(e)||typeof t!="boolean")return;const n=mc(e);U.storage.local.set({[k.RANDOM_DEFENSE_HISTORY]:n,[k.IS_TIER_HIDDEN]:t})},o8=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(!0),[o,i]=x.useState(!1),l=e.length===0;return x.useEffect(()=>{(async()=>{const p=await n8();r(p.isHidden),t(p.randomDefenseHistory),i(!0)})()},[]),x.useEffect(()=>{o&&r8(e,n)},[e,n]),{items:e,isHidden:n,isLoaded:o,isEmpty:l,deleteHistoryById:p=>{const h=e.filter(g=>`${g.problemId}-${g.createdAt}`!==p);t(h)},clearHistory:()=>{t([])},updateIsHidden:p=>{r(p.target.checked)}}},i8=d.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,l8=d.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,s8=d.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,a8=d.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,c8=d.button`
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
`,vu=d.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,u8=d.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,d8=d.div`
  color: ${({$color:e})=>e};
  font-size: 14px;
  line-height: 20px;
`,p8=d.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,f8=d.label`
  display: inline-block;
  position: relative;

  width: ${({$size:e})=>e==="large"?"50px":"40px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:e})=>e==="large"?"15px":"12px"};
  }
`,h8=d.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,g8=d.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:e,$isChecked:t})=>t?e.color.GOLD:e.color.LIGHTER_BROWN};

  box-shadow: ${({theme:e,$isChecked:t})=>t?`0 0 12px ${e.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,m8=d.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:e})=>e==="large"?"26px":"20px"};
  height: ${({$size:e})=>e==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:e,$isChecked:t})=>t?e==="large"?O`
            transform: translateX(20px);
          `:O`
            transform: translateX(16px);
          `:O`
          transform: translateX(0);
        `}
`,v8=e=>{const{size:t,isChecked:n,ariaLabel:r,onChange:o}=e;return s.jsxs(f8,{$size:t,children:[s.jsx(h8,{checked:n,"aria-label":r,onChange:o,value:""}),s.jsx(g8,{$isChecked:n,children:s.jsx(m8,{$size:t,$isChecked:n})})]})},x8=e=>{const t=oo-e,n=t>=Di?"normal":t>0?"warn":"danger",i=`${`현재 ${e}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${oo}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${n==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:n==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,l=n==="normal"?I.color.WHITE:n==="warn"?I.color.ORANGE:I.color.LIGHT_RED;return{indicatorMessage:i,indicatorColor:l}},y8=()=>{const{items:e,isHidden:t,isLoaded:n,isEmpty:r,deleteHistoryById:o,clearHistory:i,updateIsHidden:l}=o8(),{activeModalName:a,openModal:c,closeModal:u}=nl(),{indicatorMessage:p,indicatorColor:h}=x8(e.length);return s.jsx(ac,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:s.jsxs(i8,{children:[n&&s.jsxs(s.Fragment,{children:[s.jsxs(s8,{children:[s.jsx(vu,{children:"티어 숨기기"}),s.jsx(v8,{size:"large",isChecked:t,ariaLabel:"티어 숨기기",onChange:l})]}),s.jsx(l8,{children:s.jsx(Z7,{items:e,isHidden:t,onDelete:o})}),s.jsxs(a8,{children:[s.jsxs(u8,{title:p,children:[s.jsx(p8,{children:s.jsx(Jf,{})}),s.jsx(d8,{$color:h,children:`${e.length} / ${oo}`})]}),s.jsx(vu,{children:"추첨 기록 비우기"}),s.jsx(c8,{onClick:()=>{c("confirmClearHistory")},disabled:r,"aria-label":"추첨 기록 비우기",children:s.jsx($i,{})})]})]}),s.jsx(It,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:a==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{i(),u()},onNoSelect:u})]})})},A8=d.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,w8=d.div`
  display: flex;
  column-gap: 12px;
`,S8=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,T8=e=>{const{slots:t,selectedSlotNo:n,hotkey:r,isLoaded:o,setSelectedSlotNo:i,setHotkey:l,updateSlot:a,deleteSlot:c}=_7(),{show:u}=e,p={slots:t,selectedSlotNo:n,hotkey:r};return u?s.jsxs(A8,{children:[s.jsx(Qt,{title:"랜덤 디펜스",iconSrc:U.runtime.getURL("/dice.png")}),s.jsxs(w8,{children:[s.jsxs(S8,{children:[s.jsx(Fx,{isLoaded:o,selectedSlotNo:n,onSubmit:a}),s.jsx(I7,{quickSlotsInfo:p,isLoaded:o,onHotkeyChange:l,onSlotChange:a,onSlotDelete:c,onSlotNoChange:i})]}),s.jsx(y8,{})]})]}):null},E8=d.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;d.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const ol=e=>e==="none"||e==="totamjung",op=e=>e==="totamjung"?"totamjung":"none",N8=async()=>{const t=(await U.storage.local.get(k.TOTAMJUNG_THEME))[k.TOTAMJUNG_THEME];return op(t)},R8=e=>{ol(e)&&U.storage.local.set({[k.TOTAMJUNG_THEME]:e})},ip=e=>typeof e=="number"&&!isNaN(e)&&e%1===0?e:0,I8=/^(none|font-\d{1,2})$/,k8=e=>typeof e=="string"&&I8.test(e),xc=e=>typeof e=="number"&&!isNaN(e)&&e%1===0,C8=async()=>{const t=(await U.storage.local.get(k.FONT_NO))[k.FONT_NO];return ip(t)},j8=e=>{xc(e)&&U.storage.local.set({[k.FONT_NO]:e})},M8=()=>{const[e,t]=x.useState(void 0),[n,r]=x.useState(void 0),[o,i]=x.useState(!1);return x.useEffect(()=>{(async()=>{const[u,p]=await Promise.all([N8(),C8()]);t(u),r(p),i(!0)})()},[]),x.useEffect(()=>{o&&R8(e)},[e]),x.useEffect(()=>{o&&j8(n)},[n]),{totamjungTheme:e,fontNo:n,isLoaded:o,updateTotamjungTheme:c=>{o&&ol(c)&&t(c)},updateFontNo:c=>{const u=Number(c);!o||isNaN(u)||r(u)}}},D8=d.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,L8=d.p`
  color: ${({theme:e})=>e.color.LEMON};
  font-size: ${({$fontSize:e})=>e};
  font-family: ${({$fontFamily:e})=>e};
`,O8=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],_8=()=>{const{totamjungTheme:e,fontNo:t,updateTotamjungTheme:n,updateFontNo:r}=M8();return s.jsxs(D8,{children:[s.jsx(Qt,{title:"테마 설정",iconSrc:U.runtime.getURL("/palette.png")}),s.jsx(sn,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:e??"",onChange:n}),s.jsx(Qt,{title:"폰트 설정",iconSrc:s.jsx(lh,{})}),s.jsx(sn,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:O8.map(({name:o,fontFamily:i,fontSize:l},a)=>({label:s.jsx(L8,{$fontFamily:i,$fontSize:l??"16px",children:o}),value:String(a)})),checkedValue:t===void 0?"":String(t),onChange:r})]})},b8=d.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,lp=e=>{const{confirmText:t}=e,[n,r]=x.useState(""),[o,i]=x.useState(t);return x.useEffect(()=>{i(o)},[t]),{inputValue:n,isSameWithConfirmText:n===o,updateInputValue:c=>{r(c.target.value)}}},G8=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,H8=d.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,Vl=d.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,z8=d.div`
  display: flex;
  justify-content: center;
`,Yl="초기화에 동의합니다",$8=e=>{const{open:t,onClose:n,onReset:r}=e,{inputValue:o,isSameWithConfirmText:i,updateInputValue:l}=lp({confirmText:Yl});return s.jsxs(Rn,{title:"데이터 초기화",open:t,onClose:n,children:[s.jsxs(G8,{children:[s.jsx(V,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),s.jsxs(H8,{children:[s.jsx(Vl,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),s.jsx(Vl,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),s.jsx(Vl,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),s.jsxs(V,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",s.jsx("b",{children:Yl}),"를 입력해 주십시오."]}),s.jsx(z8,{children:s.jsx(fn,{type:"text",width:"300px",value:o,textAlign:"center",placeholder:`"${Yl}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:l})})]}),s.jsxs(go,{children:[s.jsx(J,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(so,{}),color:I.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(J,{type:"button",name:"초기화",size:"medium",iconSrc:s.jsx($i,{}),color:I.color.RED,disabled:!i,ariaLabel:"초기화",onClick:r})]})]})},P8=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,B8=d.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,Wl=d.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,U8=d.div`
  display: flex;
  justify-content: center;
`,Zl="숙지했습니다",F8=e=>{const{open:t,onClose:n,onUpload:r}=e,{inputValue:o,isSameWithConfirmText:i,updateInputValue:l}=lp({confirmText:Zl});return s.jsxs(Rn,{title:"데이터 업로드",open:t,onClose:n,children:[s.jsxs(P8,{children:[s.jsx(V,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),s.jsxs(B8,{children:[s.jsx(Wl,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),s.jsx(Wl,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),s.jsx(Wl,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),s.jsxs(V,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",s.jsx("b",{children:Zl}),"를 입력해 주십시오."]}),s.jsx(U8,{children:s.jsx(fn,{type:"text",width:"300px",value:o,textAlign:"center",placeholder:`"${Zl}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:l})})]}),s.jsxs(go,{children:[s.jsx(J,{type:"button",name:"취소",size:"medium",iconSrc:s.jsx(so,{}),color:I.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),s.jsx(J,{type:"button",name:"업로드",size:"medium",iconSrc:s.jsx(gd,{}),color:I.color.LIME,disabled:!i,ariaLabel:"업로드",onClick:r})]})]})},sp=e=>Array.isArray(e)?Array.isArray(e)&&e.every(t=>yc(t)):!1,yc=e=>le(e)&&"problemId"in e&&"expiresAt"in e&&typeof e.problemId=="number"&&rl(e.expiresAt)&&!isNaN(e.problemId)&&e.problemId%1===0&&e.problemId>=1e3,V8=300,Y8=e=>{if(!Array.isArray(e))return R2;const t=Date.now();return e.filter(n=>yc(n)&&t<Date.parse(n.expiresAt)).slice(-V8)},W8=e=>typeof e=="boolean",ap=e=>le(e)&&W.DATA_VERSION in e&&W.CHECKED_ALGORITHM_IDS in e&&W.QUICK_SLOTS in e&&W.TOTAMJUNG_THEME in e&&W.HIDER_OPTIONS in e&&W.RANDOM_DEFENSE_HISTORY in e&&W.IS_TIER_HIDDEN in e&&W.FONT_NO in e&&W.TIMERS in e?(e[k.DATA_VERSION]==="v1.2"||e[k.DATA_VERSION]===2)&&ec(e[k.CHECKED_ALGORITHM_IDS])&&pc(e[k.QUICK_SLOTS])&&ol(e[k.TOTAMJUNG_THEME])&&lc(e[k.HIDER_OPTIONS])&&rp(e[k.RANDOM_DEFENSE_HISTORY])&&typeof e[k.IS_TIER_HIDDEN]=="boolean"&&xc(e[k.FONT_NO])&&sp(e[k.TIMERS]):!1,cp=e=>le(e)&&k.DATA_VERSION in e&&k.CHECKED_ALGORITHM_IDS in e&&k.QUICK_SLOTS in e&&k.TOTAMJUNG_THEME in e&&k.HIDER_OPTIONS in e&&k.RANDOM_DEFENSE_HISTORY in e&&k.IS_TIER_HIDDEN in e&&k.FONT_NO in e&&k.TIMERS in e&&k.GACHA_OPTIONS in e&&k.SHOULD_SHOW_WELCOME_MESSAGE in e?e[k.DATA_VERSION]===3&&ec(e[k.CHECKED_ALGORITHM_IDS])&&pc(e[k.QUICK_SLOTS])&&ol(e[k.TOTAMJUNG_THEME])&&sc(e[k.HIDER_OPTIONS])&&rp(e[k.RANDOM_DEFENSE_HISTORY])&&typeof e[k.IS_TIER_HIDDEN]=="boolean"&&xc(e[k.FONT_NO])&&sp(e[k.TIMERS])&&q2(e[k.GACHA_OPTIONS])&&W8(e[k.SHOULD_SHOW_WELCOME_MESSAGE]):!1,Z8=e=>e===!0,up=["v1.2",2,3],Q8=e=>lc(e)?e:tc,q8=(e,t)=>{const n=_2(e)?{hours:Number(e.hour),minutes:Number(e.minute)}:{hours:0,minutes:20},r=ev(t)?{algorithmHiderUsage:t.predict,problemTagLockUsage:t.lock==="always"?"auto":"click"}:{algorithmHiderUsage:"click",problemTagLockUsage:"click"};return{...tc,problemTagLockDuration:n,...r}},K8=e=>({...e,shouldRevealTierOnHover:!1}),X8=e=>{if(!le(e)||!("theme"in e))return"none";const{theme:t}=e;return t==="yes"?"totamjung":"none"},J8=e=>{const{selectedNo:t,...n}=e;return{selectedSlotNo:t,slots:n,hotkey:"Alt"}},e6=e=>{const t=[];return e.forEach(({no:n,title:r,tier:o,date:i})=>{const l=new Date(i).toISOString();rl(l)&&t.push({problemId:n,title:r,tier:o,createdAt:l})}),t},t6=e=>{if(!le(e)||!("font"in e))return 0;const t=e.font;return!k8(t)||t==="none"?0:Number(t.split("-")[1])},n6=e=>{if(!_2(e))return[];const{expire:t,problem:n}=e,r=new Date(t);if(isNaN(r.getTime()))return[];if(n===-1)return[];const o=new Date(t).toISOString(),i={problemId:n,expiresAt:o};return yc(i)?[i]:[]},r6=(e,t)=>{const n=M7(e[rn.QUICK_SLOTS]),r=t8(t[_3.RANDOM_DEFENSE_HISTORY]),o=rc(e[rn.CHECKED_ALGORITHM_IDS]),i=vc(e[k.IS_TIER_HIDDEN]),l=X8(e[rn.SETTINGS]),a=q8(e[rn.TIMER],e[rn.SETTINGS]),c=J8(n),u=e6(r),p=t6(e[rn.SETTINGS]),h=n6(e[rn.TIMER]);return{[W.CHECKED_ALGORITHM_IDS]:o,[W.QUICK_SLOTS]:c,[W.TOTAMJUNG_THEME]:l,[W.HIDER_OPTIONS]:a,[W.RANDOM_DEFENSE_HISTORY]:u,[W.IS_TIER_HIDDEN]:i,[W.FONT_NO]:p,[W.TIMERS]:h,[W.SHOULD_SHOW_WELCOME_MESSAGE]:!1,[W.DATA_VERSION]:2}},xu=e=>{const t=Q8(e[W.HIDER_OPTIONS]),n=rc(e[W.CHECKED_ALGORITHM_IDS]),r=fc(e[W.QUICK_SLOTS]),o=op(e[W.TOTAMJUNG_THEME]),i=K8(t),l=mc(e[W.RANDOM_DEFENSE_HISTORY]),a=vc(e[k.IS_TIER_HIDDEN]),c=ip(e[W.FONT_NO]),u=Y8(e[W.TIMERS]),p=Z8(e[W.SHOULD_SHOW_WELCOME_MESSAGE]);return{[k.CHECKED_ALGORITHM_IDS]:n,[k.QUICK_SLOTS]:r,[k.TOTAMJUNG_THEME]:o,[k.HIDER_OPTIONS]:i,[k.RANDOM_DEFENSE_HISTORY]:l,[k.IS_TIER_HIDDEN]:a,[k.FONT_NO]:c,[k.TIMERS]:u,[k.GACHA_OPTIONS]:I2,[k.SHOULD_SHOW_WELCOME_MESSAGE]:p,[k.DATA_VERSION]:3}},o6=e=>{const{dataVersion:t}=e;return t===2||t==="v1.2"?2:t===3?3:1},i6=async()=>{const[e,t]=await Promise.all([U.storage.sync.get(),U.storage.local.get()]),n=o6(t);if(n!==3){if(n===1){U.storage.local.set(xu(r6(e,t)));return}await U.storage.local.set(xu(t))}},l6=async e=>{if(!le(e)||!("dataVersion"in e))return!1;const{dataVersion:t}=e;return typeof t!="number"&&typeof t!="string"||!up.includes(t)||(t==="v1.2"||t===2)&&!ap(e)?!1:t!==3?(await U.storage.local.set(e),await i6(),!0):cp(e)?(await U.storage.local.set(e),!0):!1},s6=async()=>(await U.storage.local.set(z3),!0),a6=(e,t)=>{const n=document.createElement("a"),r=new Blob([e],{type:"text/plain"});n.href=URL.createObjectURL(r),n.download=t,n.click(),URL.revokeObjectURL(n.href)},c6=async()=>{const e=await U.runtime.sendMessage({command:Nr.FETCH_OPTIONS_DATA}),t=JSON.stringify(e),n=`totamjung_savefile_${tp(new Date).replace(" ","_")}.ttj`;a6(t,n)},u6=()=>{const[e,t]=x.useState("none"),[n,r]=x.useState(void 0),[o,i]=x.useState({errorTitle:"",errorMessage:""}),{errorTitle:l,errorMessage:a}=o,c=A=>{i(A),t("error")};return{activeModal:e,errorTitle:l,errorMessage:a,setActiveModal:t,resetOptionsData:async()=>{await s6()&&(t("none"),location.reload())},extractOptionsData:async()=>{c6(),t("none")},stageOptionsData:async A=>{const S=A.target.files;if(!S)return;const j=S[0];if(j.name.split(".").at(-1)!=="ttj"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(j.size>1048576){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const f=new FileReader;f.onload=async()=>{try{const v=f.result;if(typeof v!="string"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const w=JSON.parse(v),{dataVersion:E}=w;if(!("dataVersion"in w)||E!=="v1.2"&&typeof E!="number"){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(!up.includes(E)){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${E}으로, 이 버전에서 다룰 수 있는 가장 높은 데이터 버전인 3보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(["v1.2",2].includes(E)&&!ap(w)){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"v1.2.* 버전 데이터의 세이브파일은 업로드 가능하나, 이 세이브파일은 데이터의 일부 또는 전부가 손실된 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(E===3&&!cp(w)){c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}r(w),t("upload")}catch{c({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},f.readAsText(j)},uploadOptionsData:async()=>{n&&(l6(n),location.reload())},closeModal:()=>{t("none")}}},d6=d.label`
  display: block;
  width: 270px;
`,p6=d.div`
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
`,f6=d.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIME};
  }
`,h6=d.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.LIME};
`,g6=d.input`
  display: none;
`,m6=e=>{const{onChange:t}=e;return s.jsxs(d6,{children:[s.jsxs(p6,{role:"button",children:[s.jsx(f6,{children:s.jsx(gd,{})}),s.jsx(h6,{children:"설정 데이터 업로드"})]}),s.jsx(g6,{type:"file",accept:".ttj",onClick:n=>{n.currentTarget.value=""},onChange:t})]})},v6=()=>{const{activeModal:e,errorTitle:t,errorMessage:n,setActiveModal:r,resetOptionsData:o,extractOptionsData:i,stageOptionsData:l,uploadOptionsData:a,closeModal:c}=u6();return s.jsxs(b8,{children:[s.jsx(Qt,{title:"데이터 관리",iconSrc:s.jsx(sh,{})}),s.jsx(J,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,ariaLabel:"설정 데이터 내보내기",iconSrc:s.jsx(ah,{}),onClick:()=>{r("extract")}}),s.jsx(m6,{onChange:l}),s.jsx(J,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,ariaLabel:"설정 데이터 초기화",iconSrc:s.jsx(ch,{}),onClick:()=>{r("reset")}}),s.jsx(V,{type:"normal",fontSize:"16px",children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),s.jsxs(V,{type:"normal",fontSize:"16px",children:["토탐정 세이브파일의 확장자는 ",s.jsx("b",{children:".ttj"}),"입니다."]}),s.jsx(It,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:e==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:i,onClose:c}),s.jsx(F8,{open:e==="upload",onUpload:a,onClose:c}),s.jsx($8,{open:e==="reset",onReset:o,onClose:c}),s.jsx(It,{title:t,actionType:"confirm",width:"350px",height:"auto",open:e==="error",message:n,onClose:c})]})},x6=e=>{const{show:t}=e;return t?s.jsxs(E8,{children:[s.jsx(_8,{}),s.jsx(v6,{})]}):null},y6=()=>{const[e,t]=x.useState("algorithmHider");return{selectedCategory:e,setSelectedCategory:t}},A6=He`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,w6=d.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,S6=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,T6=d.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,E6=d.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,N6=d.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${A6} 3s forwards infinite;
`,R6=()=>{const{selectedCategory:e,setSelectedCategory:t}=y6();return s.jsxs(w6,{children:[s.jsxs(S6,{children:[s.jsx(d3,{selectedCategory:e,onCategoryChange:t}),s.jsxs(T6,{children:[s.jsx(uv,{show:e==="algorithmHider"}),s.jsx(T8,{show:e==="randomDefense"}),s.jsx(x6,{show:e==="appearanceAndDataManage"})]})]}),s.jsx(E6,{children:s.jsx(N6,{src:$m,alt:""})})]})};var dp,yu=x2;dp=yu.createRoot,yu.hydrateRoot;const Au=document.getElementById("root"),Ql=Au&&dp(Au);Ql==null||Ql.render(s.jsx(x.StrictMode,{children:s.jsxs(Df,{theme:I,children:[s.jsx(bf,{}),s.jsx(R6,{})]})}));
