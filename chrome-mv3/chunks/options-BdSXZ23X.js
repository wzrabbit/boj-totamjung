(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();try{}catch(n){console.error("[wxt] Failed to initialize plugins",n)}function Bp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var aa={exports:{}},go={},ca={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function Fp(){if(cd)return fe;cd=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),T=Symbol.iterator;function C(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function P(N,D,te){this.props=N,this.context=D,this.refs=b,this.updater=te||j}P.prototype.isReactComponent={},P.prototype.setState=function(N,D){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,D,"setState")},P.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function X(){}X.prototype=P.prototype;function $(N,D,te){this.props=N,this.context=D,this.refs=b,this.updater=te||j}var Z=$.prototype=new X;Z.constructor=$,M(Z,P.prototype),Z.isPureReactComponent=!0;var U=Array.isArray,re=Object.prototype.hasOwnProperty,q={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function ye(N,D,te){var oe,ce={},ue=null,xe=null;if(D!=null)for(oe in D.ref!==void 0&&(xe=D.ref),D.key!==void 0&&(ue=""+D.key),D)re.call(D,oe)&&!W.hasOwnProperty(oe)&&(ce[oe]=D[oe]);var he=arguments.length-2;if(he===1)ce.children=te;else if(1<he){for(var me=Array(he),Xe=0;Xe<he;Xe++)me[Xe]=arguments[Xe+2];ce.children=me}if(N&&N.defaultProps)for(oe in he=N.defaultProps,he)ce[oe]===void 0&&(ce[oe]=he[oe]);return{$$typeof:n,type:N,key:ue,ref:xe,props:ce,_owner:q.current}}function _e(N,D){return{$$typeof:n,type:N.type,key:D,ref:N.ref,props:N.props,_owner:N._owner}}function Le(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function qe(N){var D={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return D[te]})}var Ke=/\/+/g;function He(N,D){return typeof N=="object"&&N!==null&&N.key!=null?qe(""+N.key):D.toString(36)}function Be(N,D,te,oe,ce){var ue=typeof N;(ue==="undefined"||ue==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(ue){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case n:case i:xe=!0}}if(xe)return xe=N,ce=ce(xe),N=oe===""?"."+He(xe,0):oe,U(ce)?(te="",N!=null&&(te=N.replace(Ke,"$&/")+"/"),Be(ce,D,te,"",function(Xe){return Xe})):ce!=null&&(Le(ce)&&(ce=_e(ce,te+(!ce.key||xe&&xe.key===ce.key?"":(""+ce.key).replace(Ke,"$&/")+"/")+N)),D.push(ce)),1;if(xe=0,oe=oe===""?".":oe+":",U(N))for(var he=0;he<N.length;he++){ue=N[he];var me=oe+He(ue,he);xe+=Be(ue,D,te,me,ce)}else if(me=C(N),typeof me=="function")for(N=me.call(N),he=0;!(ue=N.next()).done;)ue=ue.value,me=oe+He(ue,he++),xe+=Be(ue,D,te,me,ce);else if(ue==="object")throw D=String(N),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return xe}function it(N,D,te){if(N==null)return N;var oe=[],ce=0;return Be(N,oe,"","",function(ue){return D.call(te,ue,ce++)}),oe}function Fe(N){if(N._status===-1){var D=N._result;D=D(),D.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=D)}if(N._status===1)return N._result.default;throw N._result}var se={current:null},_={transition:null},Y={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:_,ReactCurrentOwner:q};function F(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:it,forEach:function(N,D,te){it(N,function(){D.apply(this,arguments)},te)},count:function(N){var D=0;return it(N,function(){D++}),D},toArray:function(N){return it(N,function(D){return D})||[]},only:function(N){if(!Le(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},fe.Component=P,fe.Fragment=l,fe.Profiler=d,fe.PureComponent=$,fe.StrictMode=u,fe.Suspense=v,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,fe.act=F,fe.cloneElement=function(N,D,te){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var oe=M({},N.props),ce=N.key,ue=N.ref,xe=N._owner;if(D!=null){if(D.ref!==void 0&&(ue=D.ref,xe=q.current),D.key!==void 0&&(ce=""+D.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(me in D)re.call(D,me)&&!W.hasOwnProperty(me)&&(oe[me]=D[me]===void 0&&he!==void 0?he[me]:D[me])}var me=arguments.length-2;if(me===1)oe.children=te;else if(1<me){he=Array(me);for(var Xe=0;Xe<me;Xe++)he[Xe]=arguments[Xe+2];oe.children=he}return{$$typeof:n,type:N.type,key:ce,ref:ue,props:oe,_owner:xe}},fe.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:p,_context:N},N.Consumer=N},fe.createElement=ye,fe.createFactory=function(N){var D=ye.bind(null,N);return D.type=N,D},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:y,render:N}},fe.isValidElement=Le,fe.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:Fe}},fe.memo=function(N,D){return{$$typeof:x,type:N,compare:D===void 0?null:D}},fe.startTransition=function(N){var D=_.transition;_.transition={};try{N()}finally{_.transition=D}},fe.unstable_act=F,fe.useCallback=function(N,D){return se.current.useCallback(N,D)},fe.useContext=function(N){return se.current.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N){return se.current.useDeferredValue(N)},fe.useEffect=function(N,D){return se.current.useEffect(N,D)},fe.useId=function(){return se.current.useId()},fe.useImperativeHandle=function(N,D,te){return se.current.useImperativeHandle(N,D,te)},fe.useInsertionEffect=function(N,D){return se.current.useInsertionEffect(N,D)},fe.useLayoutEffect=function(N,D){return se.current.useLayoutEffect(N,D)},fe.useMemo=function(N,D){return se.current.useMemo(N,D)},fe.useReducer=function(N,D,te){return se.current.useReducer(N,D,te)},fe.useRef=function(N){return se.current.useRef(N)},fe.useState=function(N){return se.current.useState(N)},fe.useSyncExternalStore=function(N,D,te){return se.current.useSyncExternalStore(N,D,te)},fe.useTransition=function(){return se.current.useTransition()},fe.version="18.3.1",fe}var ud;function Ua(){return ud||(ud=1,ca.exports=Fp()),ca.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function Up(){if(dd)return go;dd=1;var n=Ua(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(y,v,x){var S,T={},C=null,j=null;x!==void 0&&(C=""+x),v.key!==void 0&&(C=""+v.key),v.ref!==void 0&&(j=v.ref);for(S in v)u.call(v,S)&&!p.hasOwnProperty(S)&&(T[S]=v[S]);if(y&&y.defaultProps)for(S in v=y.defaultProps,v)T[S]===void 0&&(T[S]=v[S]);return{$$typeof:i,type:y,key:C,ref:j,props:T,_owner:d.current}}return go.Fragment=l,go.jsx=h,go.jsxs=h,go}var fd;function $p(){return fd||(fd=1,aa.exports=Up()),aa.exports}var c=$p(),w=Ua();const Gt=Bp(w);var Ze=function(){return Ze=Object.assign||function(i){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ze.apply(this,arguments)};function Tr(n,i,l){if(l||arguments.length===2)for(var u=0,d=i.length,p;u<d;u++)(p||!(u in i))&&(p||(p=Array.prototype.slice.call(i,0,u)),p[u]=i[u]);return n.concat(p||Array.prototype.slice.call(i))}var ke="-ms-",xo="-moz-",we="-webkit-",d2="comm",il="rule",$a="decl",Vp="@import",f2="@keyframes",Yp="@layer",p2=Math.abs,Va=String.fromCharCode,ja=Object.assign;function Wp(n,i){return Qe(n,0)^45?(((i<<2^Qe(n,0))<<2^Qe(n,1))<<2^Qe(n,2))<<2^Qe(n,3):0}function h2(n){return n.trim()}function en(n,i){return(n=i.exec(n))?n[0]:n}function de(n,i,l){return n.replace(i,l)}function Wi(n,i,l){return n.indexOf(i,l)}function Qe(n,i){return n.charCodeAt(i)|0}function Er(n,i,l){return n.slice(i,l)}function Ut(n){return n.length}function g2(n){return n.length}function mo(n,i){return i.push(n),n}function Qp(n,i){return n.map(i).join("")}function pd(n,i){return n.filter(function(l){return!en(l,i)})}var ll=1,Nr=1,m2=0,It=0,Pe=0,kr="";function sl(n,i,l,u,d,p,h,y){return{value:n,root:i,parent:l,type:u,props:d,children:p,line:ll,column:Nr,length:h,return:"",siblings:y}}function Sn(n,i){return ja(sl("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function wr(n){for(;n.root;)n=Sn(n.root,{children:[n]});mo(n,n.siblings)}function Zp(){return Pe}function qp(){return Pe=It>0?Qe(kr,--It):0,Nr--,Pe===10&&(Nr=1,ll--),Pe}function _t(){return Pe=It<m2?Qe(kr,It++):0,Nr++,Pe===10&&(Nr=1,ll++),Pe}function $n(){return Qe(kr,It)}function Qi(){return It}function al(n,i){return Er(kr,n,i)}function Ma(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kp(n){return ll=Nr=1,m2=Ut(kr=n),It=0,[]}function Xp(n){return kr="",n}function ua(n){return h2(al(It-1,Da(n===91?n+2:n===40?n+1:n)))}function Jp(n){for(;(Pe=$n())&&Pe<33;)_t();return Ma(n)>2||Ma(Pe)>3?"":" "}function eh(n,i){for(;--i&&_t()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return al(n,Qi()+(i<6&&$n()==32&&_t()==32))}function Da(n){for(;_t();)switch(Pe){case n:return It;case 34:case 39:n!==34&&n!==39&&Da(Pe);break;case 40:n===41&&Da(n);break;case 92:_t();break}return It}function th(n,i){for(;_t()&&n+Pe!==57;)if(n+Pe===84&&$n()===47)break;return"/*"+al(i,It-1)+"*"+Va(n===47?n:_t())}function nh(n){for(;!Ma($n());)_t();return al(n,It)}function rh(n){return Xp(Zi("",null,null,null,[""],n=Kp(n),0,[0],n))}function Zi(n,i,l,u,d,p,h,y,v){for(var x=0,S=0,T=h,C=0,j=0,M=0,b=1,P=1,X=1,$=0,Z="",U=d,re=p,q=u,W=Z;P;)switch(M=$,$=_t()){case 40:if(M!=108&&Qe(W,T-1)==58){Wi(W+=de(ua($),"&","&\f"),"&\f",p2(x?y[x-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:W+=ua($);break;case 9:case 10:case 13:case 32:W+=Jp(M);break;case 92:W+=eh(Qi()-1,7);continue;case 47:switch($n()){case 42:case 47:mo(oh(th(_t(),Qi()),i,l,v),v);break;default:W+="/"}break;case 123*b:y[x++]=Ut(W)*X;case 125*b:case 59:case 0:switch($){case 0:case 125:P=0;case 59+S:X==-1&&(W=de(W,/\f/g,"")),j>0&&Ut(W)-T&&mo(j>32?gd(W+";",u,l,T-1,v):gd(de(W," ","")+";",u,l,T-2,v),v);break;case 59:W+=";";default:if(mo(q=hd(W,i,l,x,S,d,y,Z,U=[],re=[],T,p),p),$===123)if(S===0)Zi(W,i,q,q,U,p,T,y,re);else switch(C===99&&Qe(W,3)===110?100:C){case 100:case 108:case 109:case 115:Zi(n,q,q,u&&mo(hd(n,q,q,0,0,d,y,Z,d,U=[],T,re),re),d,re,T,y,u?U:re);break;default:Zi(W,q,q,q,[""],re,0,y,re)}}x=S=j=0,b=X=1,Z=W="",T=h;break;case 58:T=1+Ut(W),j=M;default:if(b<1){if($==123)--b;else if($==125&&b++==0&&qp()==125)continue}switch(W+=Va($),$*b){case 38:X=S>0?1:(W+="\f",-1);break;case 44:y[x++]=(Ut(W)-1)*X,X=1;break;case 64:$n()===45&&(W+=ua(_t())),C=$n(),S=T=Ut(Z=W+=nh(Qi())),$++;break;case 45:M===45&&Ut(W)==2&&(b=0)}}return p}function hd(n,i,l,u,d,p,h,y,v,x,S,T){for(var C=d-1,j=d===0?p:[""],M=g2(j),b=0,P=0,X=0;b<u;++b)for(var $=0,Z=Er(n,C+1,C=p2(P=h[b])),U=n;$<M;++$)(U=h2(P>0?j[$]+" "+Z:de(Z,/&\f/g,j[$])))&&(v[X++]=U);return sl(n,i,l,d===0?il:y,v,x,S,T)}function oh(n,i,l,u){return sl(n,i,l,d2,Va(Zp()),Er(n,2,-2),0,u)}function gd(n,i,l,u,d){return sl(n,i,l,$a,Er(n,0,u),Er(n,u+1,-1),u,d)}function v2(n,i,l){switch(Wp(n,i)){case 5103:return we+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+n+n;case 4789:return xo+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return we+n+xo+n+ke+n+n;case 5936:switch(Qe(n,i+11)){case 114:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return we+n+ke+n+n;case 6165:return we+n+ke+"flex-"+n+n;case 5187:return we+n+de(n,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+n;case 5443:return we+n+ke+"flex-item-"+de(n,/flex-|-self/g,"")+(en(n,/flex-|baseline/)?"":ke+"grid-row-"+de(n,/flex-|-self/g,""))+n;case 4675:return we+n+ke+"flex-line-pack"+de(n,/align-content|flex-|-self/g,"")+n;case 5548:return we+n+ke+de(n,"shrink","negative")+n;case 5292:return we+n+ke+de(n,"basis","preferred-size")+n;case 6060:return we+"box-"+de(n,"-grow","")+we+n+ke+de(n,"grow","positive")+n;case 4554:return we+de(n,/([^-])(transform)/g,"$1"+we+"$2")+n;case 6187:return de(de(de(n,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),n,"")+n;case 5495:case 3959:return de(n,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(n,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+n+n;case 4200:if(!en(n,/flex-|baseline/))return ke+"grid-column-align"+Er(n,i)+n;break;case 2592:case 3360:return ke+de(n,"template-","")+n;case 4384:case 3616:return l&&l.some(function(u,d){return i=d,en(u.props,/grid-\w+-end/)})?~Wi(n+(l=l[i].value),"span",0)?n:ke+de(n,"-start","")+n+ke+"grid-row-span:"+(~Wi(l,"span",0)?en(l,/\d+/):+en(l,/\d+/)-+en(n,/\d+/))+";":ke+de(n,"-start","")+n;case 4896:case 4128:return l&&l.some(function(u){return en(u.props,/grid-\w+-start/)})?n:ke+de(de(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return de(n,/(.+)-inline(.+)/,we+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(n)-1-i>6)switch(Qe(n,i+1)){case 109:if(Qe(n,i+4)!==45)break;case 102:return de(n,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+xo+(Qe(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Wi(n,"stretch",0)?v2(de(n,"stretch","fill-available"),i,l)+n:n}break;case 5152:case 5920:return de(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,p,h,y,v,x){return ke+d+":"+p+x+(h?ke+d+"-span:"+(y?v:+v-+p)+x:"")+n});case 4949:if(Qe(n,i+6)===121)return de(n,":",":"+we)+n;break;case 6444:switch(Qe(n,Qe(n,14)===45?18:11)){case 120:return de(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Qe(n,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+n;case 100:return de(n,":",":"+ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(n,"scroll-","scroll-snap-")+n}return n}function Ji(n,i){for(var l="",u=0;u<n.length;u++)l+=i(n[u],u,n,i)||"";return l}function ih(n,i,l,u){switch(n.type){case Yp:if(n.children.length)break;case Vp:case $a:return n.return=n.return||n.value;case d2:return"";case f2:return n.return=n.value+"{"+Ji(n.children,u)+"}";case il:if(!Ut(n.value=n.props.join(",")))return""}return Ut(l=Ji(n.children,u))?n.return=n.value+"{"+l+"}":""}function lh(n){var i=g2(n);return function(l,u,d,p){for(var h="",y=0;y<i;y++)h+=n[y](l,u,d,p)||"";return h}}function sh(n){return function(i){i.root||(i=i.return)&&n(i)}}function ah(n,i,l,u){if(n.length>-1&&!n.return)switch(n.type){case $a:n.return=v2(n.value,n.length,l);return;case f2:return Ji([Sn(n,{value:de(n.value,"@","@"+we)})],u);case il:if(n.length)return Qp(l=n.props,function(d){switch(en(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wr(Sn(n,{props:[de(d,/:(read-\w+)/,":"+xo+"$1")]})),wr(Sn(n,{props:[d]})),ja(n,{props:pd(l,u)});break;case"::placeholder":wr(Sn(n,{props:[de(d,/:(plac\w+)/,":"+we+"input-$1")]})),wr(Sn(n,{props:[de(d,/:(plac\w+)/,":"+xo+"$1")]})),wr(Sn(n,{props:[de(d,/:(plac\w+)/,ke+"input-$1")]})),wr(Sn(n,{props:[d]})),ja(n,{props:pd(l,u)});break}return""})}}var ch={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Rr=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",y2="active",x2="data-styled-version",cl="6.1.19",Ya=`/*!sc*/
`,el=typeof window<"u"&&typeof document<"u",uh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),dh={},ul=Object.freeze([]),Ir=Object.freeze({});function A2(n,i,l){return l===void 0&&(l=Ir),n.theme!==l.theme&&n.theme||i||l.theme}var w2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ph=/(^-|-$)/g;function md(n){return n.replace(fh,"-").replace(ph,"")}var hh=/(a)(d)/gi,Pi=52,vd=function(n){return String.fromCharCode(n+(n>25?39:97))};function La(n){var i,l="";for(i=Math.abs(n);i>Pi;i=i/Pi|0)l=vd(i%Pi)+l;return(vd(i%Pi)+l).replace(hh,"$1-$2")}var da,S2=5381,Sr=function(n,i){for(var l=i.length;l;)n=33*n^i.charCodeAt(--l);return n},T2=function(n){return Sr(S2,n)};function Wa(n){return La(T2(n)>>>0)}function gh(n){return n.displayName||n.name||"Component"}function fa(n){return typeof n=="string"&&!0}var E2=typeof Symbol=="function"&&Symbol.for,N2=E2?Symbol.for("react.memo"):60115,mh=E2?Symbol.for("react.forward_ref"):60112,vh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xh=((da={})[mh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},da[N2]=R2,da);function yd(n){return("type"in(i=n)&&i.type.$$typeof)===N2?R2:"$$typeof"in n?xh[n.$$typeof]:vh;var i}var Ah=Object.defineProperty,wh=Object.getOwnPropertyNames,xd=Object.getOwnPropertySymbols,Sh=Object.getOwnPropertyDescriptor,Th=Object.getPrototypeOf,Ad=Object.prototype;function I2(n,i,l){if(typeof i!="string"){if(Ad){var u=Th(i);u&&u!==Ad&&I2(n,u,l)}var d=wh(i);xd&&(d=d.concat(xd(i)));for(var p=yd(n),h=yd(i),y=0;y<d.length;++y){var v=d[y];if(!(v in yh||l&&l[v]||h&&v in h||p&&v in p)){var x=Sh(i,v);try{Ah(n,v,x)}catch{}}}}return n}function Yn(n){return typeof n=="function"}function Qa(n){return typeof n=="object"&&"styledComponentId"in n}function Fn(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function tl(n,i){if(n.length===0)return"";for(var l=n[0],u=1;u<n.length;u++)l+=n[u];return l}function Ao(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Oa(n,i,l){if(l===void 0&&(l=!1),!l&&!Ao(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var u=0;u<i.length;u++)n[u]=Oa(n[u],i[u]);else if(Ao(i))for(var u in i)n[u]=Oa(n[u],i[u]);return n}function Za(n,i){Object.defineProperty(n,"toString",{value:i})}function Wn(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Eh=(function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var l=0,u=0;u<i;u++)l+=this.groupSizes[u];return l},n.prototype.insertRules=function(i,l){if(i>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,p=d;i>=p;)if((p<<=1)<0)throw Wn(16,"".concat(i));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var h=d;h<p;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(i+1),v=(h=0,l.length);h<v;h++)this.tag.insertRule(y,l[h])&&(this.groupSizes[i]++,y++)},n.prototype.clearGroup=function(i){if(i<this.length){var l=this.groupSizes[i],u=this.indexOfGroup(i),d=u+l;this.groupSizes[i]=0;for(var p=u;p<d;p++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(i){var l="";if(i>=this.length||this.groupSizes[i]===0)return l;for(var u=this.groupSizes[i],d=this.indexOfGroup(i),p=d+u,h=d;h<p;h++)l+="".concat(this.tag.getRule(h)).concat(Ya);return l},n})(),qi=new Map,nl=new Map,Ki=1,Bi=function(n){if(qi.has(n))return qi.get(n);for(;nl.has(Ki);)Ki++;var i=Ki++;return qi.set(n,i),nl.set(i,n),i},Nh=function(n,i){Ki=i+1,qi.set(n,i),nl.set(i,n)},Rh="style[".concat(Rr,"][").concat(x2,'="').concat(cl,'"]'),Ih=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kh=function(n,i,l){for(var u,d=l.split(","),p=0,h=d.length;p<h;p++)(u=d[p])&&n.registerName(i,u)},Ch=function(n,i){for(var l,u=((l=i.textContent)!==null&&l!==void 0?l:"").split(Ya),d=[],p=0,h=u.length;p<h;p++){var y=u[p].trim();if(y){var v=y.match(Ih);if(v){var x=0|parseInt(v[1],10),S=v[2];x!==0&&(Nh(S,x),kh(n,S,v[3]),n.getTag().insertRules(x,d)),d.length=0}else d.push(y)}}},wd=function(n){for(var i=document.querySelectorAll(Rh),l=0,u=i.length;l<u;l++){var d=i[l];d&&d.getAttribute(Rr)!==y2&&(Ch(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function jh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var k2=function(n){var i=document.head,l=n||i,u=document.createElement("style"),d=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(Rr,"]")));return v[v.length-1]})(l),p=d!==void 0?d.nextSibling:null;u.setAttribute(Rr,y2),u.setAttribute(x2,cl);var h=jh();return h&&u.setAttribute("nonce",h),l.insertBefore(u,p),u},Mh=(function(){function n(i){this.element=k2(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var u=document.styleSheets,d=0,p=u.length;d<p;d++){var h=u[d];if(h.ownerNode===l)return h}throw Wn(17)})(this.element),this.length=0}return n.prototype.insertRule=function(i,l){try{return this.sheet.insertRule(l,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var l=this.sheet.cssRules[i];return l&&l.cssText?l.cssText:""},n})(),Dh=(function(){function n(i){this.element=k2(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,l){if(i<=this.length&&i>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n})(),Lh=(function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,l){return i<=this.length&&(this.rules.splice(i,0,l),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n})(),Sd=el,Oh={isServer:!el,useCSSOMInjection:!uh},rl=(function(){function n(i,l,u){i===void 0&&(i=Ir),l===void 0&&(l={});var d=this;this.options=Ze(Ze({},Oh),i),this.gs=l,this.names=new Map(u),this.server=!!i.isServer,!this.server&&el&&Sd&&(Sd=!1,wd(this)),Za(this,function(){return(function(p){for(var h=p.getTag(),y=h.length,v="",x=function(T){var C=(function(X){return nl.get(X)})(T);if(C===void 0)return"continue";var j=p.names.get(C),M=h.getGroup(T);if(j===void 0||!j.size||M.length===0)return"continue";var b="".concat(Rr,".g").concat(T,'[id="').concat(C,'"]'),P="";j!==void 0&&j.forEach(function(X){X.length>0&&(P+="".concat(X,","))}),v+="".concat(M).concat(b,'{content:"').concat(P,'"}').concat(Ya)},S=0;S<y;S++)x(S);return v})(d)})}return n.registerId=function(i){return Bi(i)},n.prototype.rehydrate=function(){!this.server&&el&&wd(this)},n.prototype.reconstructWithOptions=function(i,l){return l===void 0&&(l=!0),new n(Ze(Ze({},this.options),i),this.gs,l&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(l){var u=l.useCSSOMInjection,d=l.target;return l.isServer?new Lh(d):u?new Mh(d):new Dh(d)})(this.options),new Eh(i)));var i},n.prototype.hasNameForId=function(i,l){return this.names.has(i)&&this.names.get(i).has(l)},n.prototype.registerName=function(i,l){if(Bi(i),this.names.has(i))this.names.get(i).add(l);else{var u=new Set;u.add(l),this.names.set(i,u)}},n.prototype.insertRules=function(i,l,u){this.registerName(i,l),this.getTag().insertRules(Bi(i),u)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Bi(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n})(),bh=/&/g,Gh=/^\s*\/\/.*$/gm;function C2(n,i){return n.map(function(l){return l.type==="rule"&&(l.value="".concat(i," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(i," ")),l.props=l.props.map(function(u){return"".concat(i," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=C2(l.children,i)),l})}function _h(n){var i,l,u,d=Ir,p=d.options,h=p===void 0?Ir:p,y=d.plugins,v=y===void 0?ul:y,x=function(C,j,M){return M.startsWith(l)&&M.endsWith(l)&&M.replaceAll(l,"").length>0?".".concat(i):C},S=v.slice();S.push(function(C){C.type===il&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(bh,l).replace(u,x))}),h.prefix&&S.push(ah),S.push(ih);var T=function(C,j,M,b){j===void 0&&(j=""),M===void 0&&(M=""),b===void 0&&(b="&"),i=b,l=j,u=new RegExp("\\".concat(l,"\\b"),"g");var P=C.replace(Gh,""),X=rh(M||j?"".concat(M," ").concat(j," { ").concat(P," }"):P);h.namespace&&(X=C2(X,h.namespace));var $=[];return Ji(X,lh(S.concat(sh(function(Z){return $.push(Z)})))),$};return T.hash=v.length?v.reduce(function(C,j){return j.name||Wn(15),Sr(C,j.name)},S2).toString():"",T}var Hh=new rl,ba=_h(),j2=Gt.createContext({shouldForwardProp:void 0,styleSheet:Hh,stylis:ba});j2.Consumer;Gt.createContext(void 0);function Ga(){return w.useContext(j2)}var M2=(function(){function n(i,l){var u=this;this.inject=function(d,p){p===void 0&&(p=ba);var h=u.name+p.hash;d.hasNameForId(u.id,h)||d.insertRules(u.id,h,p(u.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=l,Za(this,function(){throw Wn(12,String(u.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=ba),this.name+i.hash},n})(),zh=function(n){return n>="A"&&n<="Z"};function Td(n){for(var i="",l=0;l<n.length;l++){var u=n[l];if(l===1&&u==="-"&&n[0]==="-")return n;zh(u)?i+="-"+u.toLowerCase():i+=u}return i.startsWith("ms-")?"-"+i:i}var D2=function(n){return n==null||n===!1||n===""},L2=function(n){var i,l,u=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!D2(p)&&(Array.isArray(p)&&p.isCss||Yn(p)?u.push("".concat(Td(d),":"),p,";"):Ao(p)?u.push.apply(u,Tr(Tr(["".concat(d," {")],L2(p),!1),["}"],!1)):u.push("".concat(Td(d),": ").concat((i=d,(l=p)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in ch||i.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return u};function En(n,i,l,u){if(D2(n))return[];if(Qa(n))return[".".concat(n.styledComponentId)];if(Yn(n)){if(!Yn(p=n)||p.prototype&&p.prototype.isReactComponent||!i)return[n];var d=n(i);return En(d,i,l,u)}var p;return n instanceof M2?l?(n.inject(l,u),[n.getName(u)]):[n]:Ao(n)?L2(n):Array.isArray(n)?Array.prototype.concat.apply(ul,n.map(function(h){return En(h,i,l,u)})):[n.toString()]}function O2(n){for(var i=0;i<n.length;i+=1){var l=n[i];if(Yn(l)&&!Qa(l))return!1}return!0}var Ph=T2(cl),Bh=(function(){function n(i,l,u){this.rules=i,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&O2(i),this.componentId=l,this.baseHash=Sr(Ph,l),this.baseStyle=u,rl.registerId(l)}return n.prototype.generateAndInjectStyles=function(i,l,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))d=Fn(d,this.staticRulesId);else{var p=tl(En(this.rules,i,l,u)),h=La(Sr(this.baseHash,p)>>>0);if(!l.hasNameForId(this.componentId,h)){var y=u(p,".".concat(h),void 0,this.componentId);l.insertRules(this.componentId,h,y)}d=Fn(d,h),this.staticRulesId=h}else{for(var v=Sr(this.baseHash,u.hash),x="",S=0;S<this.rules.length;S++){var T=this.rules[S];if(typeof T=="string")x+=T;else if(T){var C=tl(En(T,i,l,u));v=Sr(v,C+S),x+=C}}if(x){var j=La(v>>>0);l.hasNameForId(this.componentId,j)||l.insertRules(this.componentId,j,u(x,".".concat(j),void 0,this.componentId)),d=Fn(d,j)}}return d},n})(),wo=Gt.createContext(void 0);wo.Consumer;function Fh(n){var i=Gt.useContext(wo),l=w.useMemo(function(){return(function(u,d){if(!u)throw Wn(14);if(Yn(u)){var p=u(d);return p}if(Array.isArray(u)||typeof u!="object")throw Wn(8);return d?Ze(Ze({},d),u):u})(n.theme,i)},[n.theme,i]);return n.children?Gt.createElement(wo.Provider,{value:l},n.children):null}var pa={};function Uh(n,i,l){var u=Qa(n),d=n,p=!fa(n),h=i.attrs,y=h===void 0?ul:h,v=i.componentId,x=v===void 0?(function(U,re){var q=typeof U!="string"?"sc":md(U);pa[q]=(pa[q]||0)+1;var W="".concat(q,"-").concat(Wa(cl+q+pa[q]));return re?"".concat(re,"-").concat(W):W})(i.displayName,i.parentComponentId):v,S=i.displayName,T=S===void 0?(function(U){return fa(U)?"styled.".concat(U):"Styled(".concat(gh(U),")")})(n):S,C=i.displayName&&i.componentId?"".concat(md(i.displayName),"-").concat(i.componentId):i.componentId||x,j=u&&d.attrs?d.attrs.concat(y).filter(Boolean):y,M=i.shouldForwardProp;if(u&&d.shouldForwardProp){var b=d.shouldForwardProp;if(i.shouldForwardProp){var P=i.shouldForwardProp;M=function(U,re){return b(U,re)&&P(U,re)}}else M=b}var X=new Bh(l,C,u?d.componentStyle:void 0);function $(U,re){return(function(q,W,ye){var _e=q.attrs,Le=q.componentStyle,qe=q.defaultProps,Ke=q.foldedComponentIds,He=q.styledComponentId,Be=q.target,it=Gt.useContext(wo),Fe=Ga(),se=q.shouldForwardProp||Fe.shouldForwardProp,_=A2(W,it,qe)||Ir,Y=(function(ce,ue,xe){for(var he,me=Ze(Ze({},ue),{className:void 0,theme:xe}),Xe=0;Xe<ce.length;Xe+=1){var Vt=Yn(he=ce[Xe])?he(me):he;for(var kt in Vt)me[kt]=kt==="className"?Fn(me[kt],Vt[kt]):kt==="style"?Ze(Ze({},me[kt]),Vt[kt]):Vt[kt]}return ue.className&&(me.className=Fn(me.className,ue.className)),me})(_e,W,_),F=Y.as||Be,N={};for(var D in Y)Y[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&Y.theme===_||(D==="forwardedAs"?N.as=Y.forwardedAs:se&&!se(D,F)||(N[D]=Y[D]));var te=(function(ce,ue){var xe=Ga(),he=ce.generateAndInjectStyles(ue,xe.styleSheet,xe.stylis);return he})(Le,Y),oe=Fn(Ke,He);return te&&(oe+=" "+te),Y.className&&(oe+=" "+Y.className),N[fa(F)&&!w2.has(F)?"class":"className"]=oe,ye&&(N.ref=ye),w.createElement(F,N)})(Z,U,re)}$.displayName=T;var Z=Gt.forwardRef($);return Z.attrs=j,Z.componentStyle=X,Z.displayName=T,Z.shouldForwardProp=M,Z.foldedComponentIds=u?Fn(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=C,Z.target=u?d.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=u?(function(re){for(var q=[],W=1;W<arguments.length;W++)q[W-1]=arguments[W];for(var ye=0,_e=q;ye<_e.length;ye++)Oa(re,_e[ye],!0);return re})({},d.defaultProps,U):U}}),Za(Z,function(){return".".concat(Z.styledComponentId)}),p&&I2(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Ed(n,i){for(var l=[n[0]],u=0,d=i.length;u<d;u+=1)l.push(i[u],n[u+1]);return l}var Nd=function(n){return Object.assign(n,{isCss:!0})};function ne(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];if(Yn(n)||Ao(n))return Nd(En(Ed(ul,Tr([n],i,!0))));var u=n;return i.length===0&&u.length===1&&typeof u[0]=="string"?En(u):Nd(En(Ed(u,i)))}function _a(n,i,l){if(l===void 0&&(l=Ir),!i)throw Wn(1,i);var u=function(d){for(var p=[],h=1;h<arguments.length;h++)p[h-1]=arguments[h];return n(i,l,ne.apply(void 0,Tr([d],p,!1)))};return u.attrs=function(d){return _a(n,i,Ze(Ze({},l),{attrs:Array.prototype.concat(l.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return _a(n,i,Ze(Ze({},l),d))},u}var b2=function(n){return _a(Uh,n)},g=b2;w2.forEach(function(n){g[n]=b2(n)});var $h=(function(){function n(i,l){this.rules=i,this.componentId=l,this.isStatic=O2(i),rl.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,l,u,d){var p=d(tl(En(this.rules,l,u,d)),""),h=this.componentId+i;u.insertRules(h,h,p)},n.prototype.removeStyles=function(i,l){l.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,l,u,d){i>2&&rl.registerId(this.componentId+i),this.removeStyles(i,u),this.createStyles(i,l,u,d)},n})();function Vh(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=ne.apply(void 0,Tr([n],i,!1)),d="sc-global-".concat(Wa(JSON.stringify(u))),p=new $h(u,d),h=function(v){var x=Ga(),S=Gt.useContext(wo),T=Gt.useRef(x.styleSheet.allocateGSInstance(d)).current;return x.styleSheet.server&&y(T,v,x.styleSheet,S,x.stylis),Gt.useLayoutEffect(function(){if(!x.styleSheet.server)return y(T,v,x.styleSheet,S,x.stylis),function(){return p.removeStyles(T,x.styleSheet)}},[T,v,x.styleSheet,S,x.stylis]),null};function y(v,x,S,T,C){if(p.isStatic)p.renderStyles(v,dh,S,C);else{var j=Ze(Ze({},x),{theme:A2(x,T,h.defaultProps)});p.renderStyles(v,j,S,C)}}return Gt.memo(h)}function at(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=tl(ne.apply(void 0,Tr([n],i,!1))),d=Wa(u);return new M2(d,u)}const H={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",DARK_GRAY:"#333333",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK:"#000000",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",BEIGE:"#c8aaa0",LIME:"#00ed28",GREEN:"#008000",LIGHT_PURPLE:"#dcbfff",PURPLE:"#963eff",MANGO:"#ffd900"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%)",LIGHT_GRAY_FILTER:"brightness(0) saturate(100%) invert(86%) sepia(0%) saturate(1969%) hue-rotate(175deg) brightness(78%) contrast(96%)"},solvedAcColor:{LIME:"#17ce3a",OFF_WHITE:"#f7f8f9",GRAY:"#8a8f95",LIGHT_GRAY:"#b8bcbf",LIGHTER_GRAY:"#dddfe0",INDIGO:"#15202b",DARK_INDIGO:"#0b131b"},bojExtendedColor:{SKY_BLUE:"#008db4",DARK_SKY_BLUE:"#002635",DARK_INDIGO:"#001a26",DARK_GRAY:"#545454",DARKER_GRAY:"#202020",DARKEST_GRAY:"#161616",LIGHT_GRAY:"#a2a4a5"},solvedAcFilter:{LIME:"brightness(0) saturate(100%) invert(60%) sepia(34%) saturate(3800%) hue-rotate(87deg) brightness(105%) contrast(86%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(79%) sepia(4%) saturate(201%) hue-rotate(163deg) brightness(94%) contrast(93%)"},bojExtendedFilter:{DARK_GRAY:"brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(1005%) hue-rotate(147deg) brightness(100%) contrast(88%)",SKY_BLUE:"brightness(0) saturate(100%) invert(31%) sepia(81%) saturate(2692%) hue-rotate(171deg) brightness(96%) contrast(101%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(76%) sepia(5%) saturate(94%) hue-rotate(155deg) brightness(86%) contrast(88%)"}},Yh=Vh`
  ${({usesShadowRoot:n=!1})=>n?ne`
          :host {
            all: initial !important;
            display: block;
          }

          :host #totamjung-root {
            font-family: Pretendard;
          }
        `:ne`
          body {
            font-family: Pretendard;
          }
        `};
    
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    outline: none;
  }
  
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
    scrollbar-color: ${H.color.LIGHTEST_BROWN} ${H.color.SLIGHT_DARK_BROWN};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-duration: 0.001s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001s !important;
    }
  }
`;var c2,u2;const Wh=(u2=(c2=globalThis.browser)==null?void 0:c2.runtime)!=null&&u2.id?globalThis.browser:globalThis.chrome,Ae=Wh,Qh=g.nav`
  display: inline-flex;

  height: 36px;
`,Zh=g.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,qh=g.li`
  display: flex;
  flex-direction: column;
`,Kh=g.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme:n})=>n.color.GOLD};
  background: none;

  font-size: 20px;
  font-weight: ${({$isSelected:n})=>n?800:600};
  color: ${({theme:n})=>n.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme:n})=>n.color.LEMON};
  }
`,Xh=g.span`
  display: inline-block;

  width: ${({$isSelected:n})=>n?"100%":"0"};
  height: 2px;

  background-color: ${({theme:n})=>n.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:n})=>n.color.LEMON};
  }
`,Jh=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],eg=n=>{const{selectedCategory:i,onChange:l}=n;return c.jsx(Qh,{children:c.jsx(Zh,{children:Jh.map(({displayName:u,category:d})=>c.jsxs(qh,{children:[c.jsx(Kh,{$isSelected:d===i,onClick:()=>{l(d)},children:u}),c.jsx(Xh,{$isSelected:d===i})]},u))})})},Xi={none:H.color.WHITE,totamjung:H.color.DARK_BROWN,bojExtendedDark:H.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_INDIGO,solvedAcLight:H.color.WHITE,solvedAcDark:H.solvedAcColor.DARK_INDIGO,solvedAcBlack:H.color.BLACK},G2={none:H.color.BLACK,totamjung:H.color.GOLD,bojExtendedDark:H.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:H.color.WHITE,solvedAcLight:H.color.BLACK,solvedAcDark:H.color.WHITE,solvedAcBlack:H.color.WHITE},tg={...G2,none:H.solvedAcColor.GRAY,solvedAcLight:H.solvedAcColor.GRAY,solvedAcDark:H.solvedAcColor.LIGHT_GRAY,solvedAcBlack:H.solvedAcColor.LIGHT_GRAY},ng={none:H.color.PURE_WHITE,totamjung:H.color.BROWN,bojExtendedDark:H.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:H.color.PURE_WHITE,solvedAcDark:H.solvedAcColor.INDIGO,solvedAcBlack:H.solvedAcColor.DARK_INDIGO},rg={none:H.color.LIGHT_GRAY,totamjung:H.color.GOLD,bojExtendedDark:H.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_INDIGO,solvedAcLight:H.color.WHITE,solvedAcDark:H.solvedAcColor.DARK_INDIGO,solvedAcBlack:H.color.BLACK},og=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 2;
`,ig=g.div`
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
`,_2=g.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`,H2=g.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,z2=g.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  border-radius: 2px;
  background-color: transparent;

  &:focus-visible {
    outline-color: ${({theme:n})=>n.color.LEMON};
    outline-offset: 2px;
    outline-style: dashed;
    outline-width: 1px;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`,P2=g.div`
  padding: ${({$padding:n})=>n};

  font-size: 16px;
`,lg=g.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:n})=>Xi[n]};
`,sg=g.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:n})=>rg[n]};
  background-color: ${({$totamjungTheme:n})=>Xi[n]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$totamjungTheme:n})=>ne`
    & ${_2} {
      border-bottom: 16px solid ${Xi[n]};

      background-color: ${Xi[n]};
    }

    & ${H2} {
      color: ${G2[n]};
    }

    & ${z2} > svg {
      color: ${tg[n]};
    }

    & ${P2} {
      background-color: ${ng[n]};

      color: ${({theme:i})=>i.color.DARK_GRAY};
    }
  `};
`,ag=n=>{const{onEscKeyPress:i}=n,l=u=>{u.key==="Escape"&&i()};w.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[i])},cg=()=>{var i;let n=document.activeElement;for(;(i=n==null?void 0:n.shadowRoot)!=null&&i.activeElement;)n=n.shadowRoot.activeElement;return n},ug=n=>{const i=w.useRef(null),l=w.useRef(null),u=w.useRef(null),d=w.useRef(n);return!d.current&&n&&document.activeElement instanceof HTMLElement&&(u.current=document.activeElement),d.current=n,w.useEffect(()=>(n&&i.current&&l.current&&!i.current.contains(cg())&&l.current.focus(),()=>{n&&u.current instanceof HTMLElement&&u.current.focus()}),[n]),{modalRef:i,closeButtonRef:l}},B2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...n},w.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),dg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),dl=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),fg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),pg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),hg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),gg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),Io=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),ko=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),mg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),F2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),vg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),U2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),Co=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),$2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},w.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),V2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),yg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},w.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),xg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},w.createElement("g",{fill:"currentColor"},w.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),w.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),Ag=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...n},w.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),w.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),Y2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),wg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),Sg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),Tg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),Eg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"})),Ng=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},w.createElement("g",{fill:"currentColor"},w.createElement("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"}),w.createElement("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"}))),Rg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,color:"currentColor"},w.createElement("path",{d:"M13.5 5.5V2m0 10V9m0 13c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2S6 6.51 6 12s1.5 10 7.5 10"}),w.createElement("path",{d:"M15 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C15 8.199 15 7.966 15 7.5zm-9 5h15M5 3.167L4.619 2m-.59 3.567L3 6"}))),W2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},w.createElement("rect",{width:12,height:12,x:2,y:10,rx:2,ry:2}),w.createElement("path",{d:"m17.92 14l3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01"}))),Ig=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"})),kg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"})),Cg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"})),jg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},w.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4},w.createElement("path",{d:"M44 44V4H24v16H4v24z"}),w.createElement("path",{d:"m21 28l-4 4l4 4"}),w.createElement("path",{d:"M34 23v9H17"})));var ha={exports:{}},ht={},ga={exports:{}},ma={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Mg(){return Rd||(Rd=1,(function(n){function i(_,Y){var F=_.length;_.push(Y);e:for(;0<F;){var N=F-1>>>1,D=_[N];if(0<d(D,Y))_[N]=Y,_[F]=D,F=N;else break e}}function l(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var Y=_[0],F=_.pop();if(F!==Y){_[0]=F;e:for(var N=0,D=_.length,te=D>>>1;N<te;){var oe=2*(N+1)-1,ce=_[oe],ue=oe+1,xe=_[ue];if(0>d(ce,F))ue<D&&0>d(xe,ce)?(_[N]=xe,_[ue]=F,N=ue):(_[N]=ce,_[oe]=F,N=oe);else if(ue<D&&0>d(xe,F))_[N]=xe,_[ue]=F,N=ue;else break e}}return Y}function d(_,Y){var F=_.sortIndex-Y.sortIndex;return F!==0?F:_.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var h=Date,y=h.now();n.unstable_now=function(){return h.now()-y}}var v=[],x=[],S=1,T=null,C=3,j=!1,M=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(_){for(var Y=l(x);Y!==null;){if(Y.callback===null)u(x);else if(Y.startTime<=_)u(x),Y.sortIndex=Y.expirationTime,i(v,Y);else break;Y=l(x)}}function U(_){if(b=!1,Z(_),!M)if(l(v)!==null)M=!0,Fe(re);else{var Y=l(x);Y!==null&&se(U,Y.startTime-_)}}function re(_,Y){M=!1,b&&(b=!1,X(ye),ye=-1),j=!0;var F=C;try{for(Z(Y),T=l(v);T!==null&&(!(T.expirationTime>Y)||_&&!qe());){var N=T.callback;if(typeof N=="function"){T.callback=null,C=T.priorityLevel;var D=N(T.expirationTime<=Y);Y=n.unstable_now(),typeof D=="function"?T.callback=D:T===l(v)&&u(v),Z(Y)}else u(v);T=l(v)}if(T!==null)var te=!0;else{var oe=l(x);oe!==null&&se(U,oe.startTime-Y),te=!1}return te}finally{T=null,C=F,j=!1}}var q=!1,W=null,ye=-1,_e=5,Le=-1;function qe(){return!(n.unstable_now()-Le<_e)}function Ke(){if(W!==null){var _=n.unstable_now();Le=_;var Y=!0;try{Y=W(!0,_)}finally{Y?He():(q=!1,W=null)}}else q=!1}var He;if(typeof $=="function")He=function(){$(Ke)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,it=Be.port2;Be.port1.onmessage=Ke,He=function(){it.postMessage(null)}}else He=function(){P(Ke,0)};function Fe(_){W=_,q||(q=!0,He())}function se(_,Y){ye=P(function(){_(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){M||j||(M=!0,Fe(re))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return l(v)},n.unstable_next=function(_){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var F=C;C=Y;try{return _()}finally{C=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,Y){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=C;C=_;try{return Y()}finally{C=F}},n.unstable_scheduleCallback=function(_,Y,F){var N=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?N+F:N):F=N,_){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=F+D,_={id:S++,callback:Y,priorityLevel:_,startTime:F,expirationTime:D,sortIndex:-1},F>N?(_.sortIndex=F,i(x,_),l(v)===null&&_===l(x)&&(b?(X(ye),ye=-1):b=!0,se(U,F-N))):(_.sortIndex=D,i(v,_),M||j||(M=!0,Fe(re))),_},n.unstable_shouldYield=qe,n.unstable_wrapCallback=function(_){var Y=C;return function(){var F=C;C=Y;try{return _.apply(this,arguments)}finally{C=F}}}})(ma)),ma}var Id;function Dg(){return Id||(Id=1,ga.exports=Mg()),ga.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Lg(){if(kd)return ht;kd=1;var n=Ua(),i=Dg();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},T={};function C(e){return v.call(T,e)?!0:v.call(S,e)?!1:x.test(e)?T[e]=!0:(S[e]=!0,!1)}function j(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,r,o){if(t===null||typeof t>"u"||j(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,r,o,s,a,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=f}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(X,$);P[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(X,$);P[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(X,$);P[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,t,r,o){var s=P.hasOwnProperty(t)?P[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,r,s,o)&&(r=null),o||s===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var U=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),q=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),qe=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),_=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,N;function D(e){if(N===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return`
`+N+e}var te=!1;function oe(e,t){if(!e||te)return"";te=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var o=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){o=k}e.call(t.prototype)}else{try{throw Error()}catch(k){o=k}e()}}catch(k){if(k&&o&&typeof k.stack=="string"){for(var s=k.stack.split(`
`),a=o.stack.split(`
`),f=s.length-1,m=a.length-1;1<=f&&0<=m&&s[f]!==a[m];)m--;for(;1<=f&&0<=m;f--,m--)if(s[f]!==a[m]){if(f!==1||m!==1)do if(f--,m--,0>m||s[f]!==a[m]){var A=`
`+s[f].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=f&&0<=m);break}}}finally{te=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?D(e):""}function ce(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case q:return"Portal";case _e:return"Profiler";case ye:return"StrictMode";case He:return"Suspense";case Be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qe:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){o=""+f,a.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(f){o=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){e._valueTracker||(e._valueTracker=Xe(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=me(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function mc(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&Z(e,"checked",t,!1)}function ml(e,t){vc(e,t);var r=he(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,r):t.hasOwnProperty("defaultValue")&&vl(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function vl(e,t,r){(t!=="number"||Mo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Cr=Array.isArray;function qn(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Cr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function Ac(e,t){var r=he(t.value),o=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Tc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$1=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){$1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Ec(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Nc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Ec(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var V1=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(V1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,Kn=null,Xn=null;function Rc(e){if(e=Jr(e)){if(typeof El!="function")throw Error(l(280));var t=e.stateNode;t&&(t=ti(t),El(e.stateNode,e.type,t))}}function Ic(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function kc(){if(Kn){var e=Kn,t=Xn;if(Xn=Kn=null,Rc(e),t)for(e=0;e<t.length;e++)Rc(t[e])}}function Cc(e,t){return e(t)}function jc(){}var Nl=!1;function Mc(e,t,r){if(Nl)return e(t,r);Nl=!0;try{return Cc(e,t,r)}finally{Nl=!1,(Kn!==null||Xn!==null)&&(jc(),kc())}}function Dr(e,t){var r=e.stateNode;if(r===null)return null;var o=ti(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Rl=!1;if(y)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Rl=!1}function Y1(e,t,r,o,s,a,f,m,A){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(O){this.onError(O)}}var Or=!1,Lo=null,Oo=!1,Il=null,W1={onError:function(e){Or=!0,Lo=e}};function Q1(e,t,r,o,s,a,f,m,A){Or=!1,Lo=null,Y1.apply(W1,arguments)}function Z1(e,t,r,o,s,a,f,m,A){if(Q1.apply(this,arguments),Or){if(Or){var k=Lo;Or=!1,Lo=null}else throw Error(l(198));Oo||(Oo=!0,Il=k)}}function In(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lc(e){if(In(e)!==e)throw Error(l(188))}function q1(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return Lc(s),e;if(a===o)return Lc(s),t;a=a.sibling}throw Error(l(188))}if(r.return!==o.return)r=s,o=a;else{for(var f=!1,m=s.child;m;){if(m===r){f=!0,r=s,o=a;break}if(m===o){f=!0,o=s,r=a;break}m=m.sibling}if(!f){for(m=a.child;m;){if(m===r){f=!0,r=a,o=s;break}if(m===o){f=!0,o=a,r=s;break}m=m.sibling}if(!f)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Oc(e){return e=q1(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=i.unstable_scheduleCallback,_c=i.unstable_cancelCallback,K1=i.unstable_shouldYield,X1=i.unstable_requestPaint,be=i.unstable_now,J1=i.unstable_getCurrentPriorityLevel,kl=i.unstable_ImmediatePriority,Hc=i.unstable_UserBlockingPriority,bo=i.unstable_NormalPriority,ef=i.unstable_LowPriority,zc=i.unstable_IdlePriority,Go=null,Ht=null;function tf(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:of,nf=Math.log,rf=Math.LN2;function of(e){return e>>>=0,e===0?32:31-(nf(e)/rf|0)|0}var _o=64,Ho=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,f=r&268435455;if(f!==0){var m=f&~s;m!==0?o=br(m):(a&=f,a!==0&&(o=br(a)))}else f=r&~s,f!==0?o=br(f):a!==0&&(o=br(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Ct(t),s=1<<r,o|=e[r],t&=~s;return o}function lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var f=31-Ct(a),m=1<<f,A=s[f];A===-1?((m&r)===0||(m&o)!==0)&&(s[f]=lf(m,t)):A<=t&&(e.expiredLanes|=m),a&=~m}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pc(){var e=_o;return _o<<=1,(_o&4194240)===0&&(_o=64),e}function jl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Gr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=r}function af(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ct(r),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~a}}function Ml(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ct(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var Se=0;function Bc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Fc,Dl,Uc,$c,Vc,Ll=!1,Po=[],nn=null,rn=null,on=null,_r=new Map,Hr=new Map,ln=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function zr(e,t,r,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Jr(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function uf(e,t,r,o,s){switch(t){case"focusin":return nn=zr(nn,e,t,r,o,s),!0;case"dragenter":return rn=zr(rn,e,t,r,o,s),!0;case"mouseover":return on=zr(on,e,t,r,o,s),!0;case"pointerover":var a=s.pointerId;return _r.set(a,zr(_r.get(a)||null,e,t,r,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Hr.set(a,zr(Hr.get(a)||null,e,t,r,o,s)),!0}return!1}function Wc(e){var t=kn(e.target);if(t!==null){var r=In(t);if(r!==null){if(t=r.tag,t===13){if(t=Dc(r),t!==null){e.blockedOn=t,Vc(e.priority,function(){Uc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Sl=o,r.target.dispatchEvent(o),Sl=null}else return t=Jr(r),t!==null&&Dl(t),e.blockedOn=r,!1;t.shift()}return!0}function Qc(e,t,r){Bo(e)&&r.delete(t)}function df(){Ll=!1,nn!==null&&Bo(nn)&&(nn=null),rn!==null&&Bo(rn)&&(rn=null),on!==null&&Bo(on)&&(on=null),_r.forEach(Qc),Hr.forEach(Qc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,df)))}function Br(e){function t(s){return Pr(s,e)}if(0<Po.length){Pr(Po[0],e);for(var r=1;r<Po.length;r++){var o=Po[r];o.blockedOn===e&&(o.blockedOn=null)}}for(nn!==null&&Pr(nn,e),rn!==null&&Pr(rn,e),on!==null&&Pr(on,e),_r.forEach(t),Hr.forEach(t),r=0;r<ln.length;r++)o=ln[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<ln.length&&(r=ln[0],r.blockedOn===null);)Wc(r),r.blockedOn===null&&ln.shift()}var Jn=U.ReactCurrentBatchConfig,Fo=!0;function ff(e,t,r,o){var s=Se,a=Jn.transition;Jn.transition=null;try{Se=1,Ol(e,t,r,o)}finally{Se=s,Jn.transition=a}}function pf(e,t,r,o){var s=Se,a=Jn.transition;Jn.transition=null;try{Se=4,Ol(e,t,r,o)}finally{Se=s,Jn.transition=a}}function Ol(e,t,r,o){if(Fo){var s=bl(e,t,r,o);if(s===null)Xl(e,t,o,Uo,r),Yc(e,o);else if(uf(s,e,t,r,o))o.stopPropagation();else if(Yc(e,o),t&4&&-1<cf.indexOf(e)){for(;s!==null;){var a=Jr(s);if(a!==null&&Fc(a),a=bl(e,t,r,o),a===null&&Xl(e,t,o,Uo,r),a===s)break;s=a}s!==null&&o.stopPropagation()}else Xl(e,t,o,null,r)}}var Uo=null;function bl(e,t,r,o){if(Uo=null,e=Tl(o),e=kn(e),e!==null)if(t=In(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Dc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J1()){case kl:return 1;case Hc:return 4;case bo:case ef:return 16;case zc:return 536870912;default:return 16}default:return 16}}var sn=null,Gl=null,$o=null;function qc(){if($o)return $o;var e,t=Gl,r=t.length,o,s="value"in sn?sn.value:sn.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var f=r-e;for(o=1;o<=f&&t[r-o]===s[a-o];o++);return $o=s.slice(e,1<o?1-o:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Kc(){return!1}function mt(e){function t(r,o,s,a,f){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yo:Kc,this.isPropagationStopped=Kc,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=mt(er),Fr=F({},er,{view:0,detail:0}),hf=mt(Fr),Hl,zl,Ur,Wo=F({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(Hl=e.screenX-Ur.screenX,zl=e.screenY-Ur.screenY):zl=Hl=0,Ur=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Xc=mt(Wo),gf=F({},Wo,{dataTransfer:0}),mf=mt(gf),vf=F({},Fr,{relatedTarget:0}),Pl=mt(vf),yf=F({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=mt(yf),Af=F({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=mt(Af),Sf=F({},er,{data:0}),Jc=mt(Sf),Tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nf[e])?!!t[e]:!1}function Bl(){return Rf}var If=F({},Fr,{key:function(e){if(e.key){var t=Tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=mt(If),Cf=F({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=mt(Cf),jf=F({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),Mf=mt(jf),Df=F({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lf=mt(Df),Of=F({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=mt(Of),Gf=[9,13,27,32],Fl=y&&"CompositionEvent"in window,$r=null;y&&"documentMode"in document&&($r=document.documentMode);var _f=y&&"TextEvent"in window&&!$r,tu=y&&(!Fl||$r&&8<$r&&11>=$r),nu=" ",ru=!1;function ou(e,t){switch(e){case"keyup":return Gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function Hf(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function zf(e,t){if(tr)return e==="compositionend"||!Fl&&ou(e,t)?(e=qc(),$o=Gl=sn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tu&&t.locale!=="ko"?null:t.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pf[e.type]:t==="textarea"}function su(e,t,r,o){Ic(o),t=Xo(t,"onChange"),0<t.length&&(r=new _l("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Vr=null,Yr=null;function Bf(e){Nu(e,0)}function Qo(e){var t=lr(e);if(kt(t))return e}function Ff(e,t){if(e==="change")return t}var au=!1;if(y){var Ul;if(y){var $l="oninput"in document;if(!$l){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),$l=typeof cu.oninput=="function"}Ul=$l}else Ul=!1;au=Ul&&(!document.documentMode||9<document.documentMode)}function uu(){Vr&&(Vr.detachEvent("onpropertychange",du),Yr=Vr=null)}function du(e){if(e.propertyName==="value"&&Qo(Yr)){var t=[];su(t,Yr,e,Tl(e)),Mc(Bf,t)}}function Uf(e,t,r){e==="focusin"?(uu(),Vr=t,Yr=r,Vr.attachEvent("onpropertychange",du)):e==="focusout"&&uu()}function $f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Yr)}function Vf(e,t){if(e==="click")return Qo(t)}function Yf(e,t){if(e==="input"||e==="change")return Qo(t)}function Wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Wf;function Wr(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!v.call(t,s)||!jt(e[s],t[s]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,t){var r=fu(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fu(r)}}function hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gu(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Mo(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=gu(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&hu(r.ownerDocument.documentElement,r)){if(o!==null&&Vl(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=pu(r,a);var f=pu(r,o);s&&f&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zf=y&&"documentMode"in document&&11>=document.documentMode,nr=null,Yl=null,Qr=null,Wl=!1;function mu(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wl||nr==null||nr!==Mo(o)||(o=nr,"selectionStart"in o&&Vl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qr&&Wr(Qr,o)||(Qr=o,o=Xo(Yl,"onSelect"),0<o.length&&(t=new _l("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=nr)))}function Zo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var rr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Ql={},vu={};y&&(vu=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function qo(e){if(Ql[e])return Ql[e];if(!rr[e])return e;var t=rr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vu)return Ql[e]=t[r];return e}var yu=qo("animationend"),xu=qo("animationiteration"),Au=qo("animationstart"),wu=qo("transitionend"),Su=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){Su.set(e,t),p(t,[e])}for(var Zl=0;Zl<Tu.length;Zl++){var ql=Tu[Zl],qf=ql.toLowerCase(),Kf=ql[0].toUpperCase()+ql.slice(1);an(qf,"on"+Kf)}an(yu,"onAnimationEnd"),an(xu,"onAnimationIteration"),an(Au,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(wu,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Eu(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,Z1(o,t,void 0,e),e.currentTarget=null}function Nu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var f=o.length-1;0<=f;f--){var m=o[f],A=m.instance,k=m.currentTarget;if(m=m.listener,A!==a&&s.isPropagationStopped())break e;Eu(s,m,k),a=A}else for(f=0;f<o.length;f++){if(m=o[f],A=m.instance,k=m.currentTarget,m=m.listener,A!==a&&s.isPropagationStopped())break e;Eu(s,m,k),a=A}}}if(Oo)throw e=Il,Oo=!1,Il=null,e}function Re(e,t){var r=t[os];r===void 0&&(r=t[os]=new Set);var o=e+"__bubble";r.has(o)||(Ru(t,e,2,!1),r.add(o))}function Kl(e,t,r){var o=0;t&&(o|=4),Ru(r,e,o,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Ko]){e[Ko]=!0,u.forEach(function(r){r!=="selectionchange"&&(Xf.has(r)||Kl(r,!1,e),Kl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,Kl("selectionchange",!1,t))}}function Ru(e,t,r,o){switch(Zc(t)){case 1:var s=ff;break;case 4:s=pf;break;default:s=Ol}r=s.bind(null,t,r,e),s=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Xl(e,t,r,o,s){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var m=o.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(f===4)for(f=o.return;f!==null;){var A=f.tag;if((A===3||A===4)&&(A=f.stateNode.containerInfo,A===s||A.nodeType===8&&A.parentNode===s))return;f=f.return}for(;m!==null;){if(f=kn(m),f===null)return;if(A=f.tag,A===5||A===6){o=a=f;continue e}m=m.parentNode}}o=o.return}Mc(function(){var k=a,O=Tl(r),G=[];e:{var L=Su.get(e);if(L!==void 0){var V=_l,K=e;switch(e){case"keypress":if(Vo(r)===0)break e;case"keydown":case"keyup":V=kf;break;case"focusin":K="focus",V=Pl;break;case"focusout":K="blur",V=Pl;break;case"beforeblur":case"afterblur":V=Pl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Mf;break;case yu:case xu:case Au:V=xf;break;case wu:V=Lf;break;case"scroll":V=hf;break;case"wheel":V=bf;break;case"copy":case"cut":case"paste":V=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=eu}var J=(t&4)!==0,Ge=!J&&e==="scroll",R=J?L!==null?L+"Capture":null:L;J=[];for(var E=k,I;E!==null;){I=E;var z=I.stateNode;if(I.tag===5&&z!==null&&(I=z,R!==null&&(z=Dr(E,R),z!=null&&J.push(Kr(E,z,I)))),Ge)break;E=E.return}0<J.length&&(L=new V(L,K,null,r,O),G.push({event:L,listeners:J}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",L&&r!==Sl&&(K=r.relatedTarget||r.fromElement)&&(kn(K)||K[Yt]))break e;if((V||L)&&(L=O.window===O?O:(L=O.ownerDocument)?L.defaultView||L.parentWindow:window,V?(K=r.relatedTarget||r.toElement,V=k,K=K?kn(K):null,K!==null&&(Ge=In(K),K!==Ge||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=k),V!==K)){if(J=Xc,z="onMouseLeave",R="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(J=eu,z="onPointerLeave",R="onPointerEnter",E="pointer"),Ge=V==null?L:lr(V),I=K==null?L:lr(K),L=new J(z,E+"leave",V,r,O),L.target=Ge,L.relatedTarget=I,z=null,kn(O)===k&&(J=new J(R,E+"enter",K,r,O),J.target=I,J.relatedTarget=Ge,z=J),Ge=z,V&&K)t:{for(J=V,R=K,E=0,I=J;I;I=or(I))E++;for(I=0,z=R;z;z=or(z))I++;for(;0<E-I;)J=or(J),E--;for(;0<I-E;)R=or(R),I--;for(;E--;){if(J===R||R!==null&&J===R.alternate)break t;J=or(J),R=or(R)}J=null}else J=null;V!==null&&Iu(G,L,V,J,!1),K!==null&&Ge!==null&&Iu(G,Ge,K,J,!0)}}e:{if(L=k?lr(k):window,V=L.nodeName&&L.nodeName.toLowerCase(),V==="select"||V==="input"&&L.type==="file")var ee=Ff;else if(lu(L))if(au)ee=Yf;else{ee=$f;var ie=Uf}else(V=L.nodeName)&&V.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=Vf);if(ee&&(ee=ee(e,k))){su(G,ee,r,O);break e}ie&&ie(e,L,k),e==="focusout"&&(ie=L._wrapperState)&&ie.controlled&&L.type==="number"&&vl(L,"number",L.value)}switch(ie=k?lr(k):window,e){case"focusin":(lu(ie)||ie.contentEditable==="true")&&(nr=ie,Yl=k,Qr=null);break;case"focusout":Qr=Yl=nr=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,mu(G,r,O);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":mu(G,r,O)}var le;if(Fl)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else tr?ou(e,r)&&(ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ae="onCompositionStart");ae&&(tu&&r.locale!=="ko"&&(tr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&tr&&(le=qc()):(sn=O,Gl="value"in sn?sn.value:sn.textContent,tr=!0)),ie=Xo(k,ae),0<ie.length&&(ae=new Jc(ae,e,null,r,O),G.push({event:ae,listeners:ie}),le?ae.data=le:(le=iu(r),le!==null&&(ae.data=le)))),(le=_f?Hf(e,r):zf(e,r))&&(k=Xo(k,"onBeforeInput"),0<k.length&&(O=new Jc("onBeforeInput","beforeinput",null,r,O),G.push({event:O,listeners:k}),O.data=le))}Nu(G,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Xo(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Dr(e,r),a!=null&&o.unshift(Kr(e,a,s)),a=Dr(e,t),a!=null&&o.push(Kr(e,a,s))),e=e.return}return o}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Iu(e,t,r,o,s){for(var a=t._reactName,f=[];r!==null&&r!==o;){var m=r,A=m.alternate,k=m.stateNode;if(A!==null&&A===o)break;m.tag===5&&k!==null&&(m=k,s?(A=Dr(r,a),A!=null&&f.unshift(Kr(r,A,m))):s||(A=Dr(r,a),A!=null&&f.push(Kr(r,A,m)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var Jf=/\r\n?/g,ep=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(Jf,`
`).replace(ep,"")}function Jo(e,t,r){if(t=ku(t),ku(e)!==t&&r)throw Error(l(425))}function ei(){}var Jl=null,es=null;function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(rp)}:ns;function rp(e){setTimeout(function(){throw e})}function rs(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),Br(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Br(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),zt="__reactFiber$"+ir,Xr="__reactProps$"+ir,Yt="__reactContainer$"+ir,os="__reactEvents$"+ir,op="__reactListeners$"+ir,ip="__reactHandles$"+ir;function kn(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Yt]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ju(e);e!==null;){if(r=e[zt])return r;e=ju(e)}return t}e=r,r=e.parentNode}return null}function Jr(e){return e=e[zt]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function ti(e){return e[Xr]||null}var is=[],sr=-1;function un(e){return{current:e}}function Ie(e){0>sr||(e.current=is[sr],is[sr]=null,sr--)}function Ee(e,t){sr++,is[sr]=e.current,e.current=t}var dn={},tt=un(dn),ct=un(!1),Cn=dn;function ar(e,t){var r=e.type.contextTypes;if(!r)return dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ut(e){return e=e.childContextTypes,e!=null}function ni(){Ie(ct),Ie(tt)}function Mu(e,t,r){if(tt.current!==dn)throw Error(l(168));Ee(tt,t),Ee(ct,r)}function Du(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,xe(e)||"Unknown",s));return F({},r,o)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Cn=tt.current,Ee(tt,e),Ee(ct,ct.current),!0}function Lu(e,t,r){var o=e.stateNode;if(!o)throw Error(l(169));r?(e=Du(e,t,Cn),o.__reactInternalMemoizedMergedChildContext=e,Ie(ct),Ie(tt),Ee(tt,e)):Ie(ct),Ee(ct,r)}var Wt=null,oi=!1,ls=!1;function Ou(e){Wt===null?Wt=[e]:Wt.push(e)}function lp(e){oi=!0,Ou(e)}function fn(){if(!ls&&Wt!==null){ls=!0;var e=0,t=Se;try{var r=Wt;for(Se=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Wt=null,oi=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(e+1)),Gc(kl,fn),s}finally{Se=t,ls=!1}}return null}var cr=[],ur=0,ii=null,li=0,wt=[],St=0,jn=null,Qt=1,Zt="";function Mn(e,t){cr[ur++]=li,cr[ur++]=ii,ii=e,li=t}function bu(e,t,r){wt[St++]=Qt,wt[St++]=Zt,wt[St++]=jn,jn=e;var o=Qt;e=Zt;var s=32-Ct(o)-1;o&=~(1<<s),r+=1;var a=32-Ct(t)+s;if(30<a){var f=s-s%5;a=(o&(1<<f)-1).toString(32),o>>=f,s-=f,Qt=1<<32-Ct(t)+s|r<<s|o,Zt=a+e}else Qt=1<<a|r<<s|o,Zt=e}function ss(e){e.return!==null&&(Mn(e,1),bu(e,1,0))}function as(e){for(;e===ii;)ii=cr[--ur],cr[ur]=null,li=cr[--ur],cr[ur]=null;for(;e===jn;)jn=wt[--St],wt[St]=null,Zt=wt[--St],wt[St]=null,Qt=wt[--St],wt[St]=null}var vt=null,yt=null,je=!1,Mt=null;function Gu(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function _u(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jn!==null?{id:Qt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,yt=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(je){var t=yt;if(t){var r=t;if(!_u(e,t)){if(cs(e))throw Error(l(418));t=cn(r.nextSibling);var o=vt;t&&_u(e,t)?Gu(o,r):(e.flags=e.flags&-4097|2,je=!1,vt=e)}}else{if(cs(e))throw Error(l(418));e.flags=e.flags&-4097|2,je=!1,vt=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function si(e){if(e!==vt)return!1;if(!je)return Hu(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ts(e.type,e.memoizedProps)),t&&(t=yt)){if(cs(e))throw zu(),Error(l(418));for(;t;)Gu(e,t),t=cn(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yt=cn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?cn(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=yt;e;)e=cn(e.nextSibling)}function dr(){yt=vt=null,je=!1}function ds(e){Mt===null?Mt=[e]:Mt.push(e)}var sp=U.ReactCurrentBatchConfig;function eo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var o=r.stateNode}if(!o)throw Error(l(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(f){var m=s.refs;f===null?delete m[a]:m[a]=f},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pu(e){var t=e._init;return t(e._payload)}function Bu(e){function t(R,E){if(e){var I=R.deletions;I===null?(R.deletions=[E],R.flags|=16):I.push(E)}}function r(R,E){if(!e)return null;for(;E!==null;)t(R,E),E=E.sibling;return null}function o(R,E){for(R=new Map;E!==null;)E.key!==null?R.set(E.key,E):R.set(E.index,E),E=E.sibling;return R}function s(R,E){return R=An(R,E),R.index=0,R.sibling=null,R}function a(R,E,I){return R.index=I,e?(I=R.alternate,I!==null?(I=I.index,I<E?(R.flags|=2,E):I):(R.flags|=2,E)):(R.flags|=1048576,E)}function f(R){return e&&R.alternate===null&&(R.flags|=2),R}function m(R,E,I,z){return E===null||E.tag!==6?(E=na(I,R.mode,z),E.return=R,E):(E=s(E,I),E.return=R,E)}function A(R,E,I,z){var ee=I.type;return ee===W?O(R,E,I.props.children,z,I.key):E!==null&&(E.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Fe&&Pu(ee)===E.type)?(z=s(E,I.props),z.ref=eo(R,E,I),z.return=R,z):(z=Di(I.type,I.key,I.props,null,R.mode,z),z.ref=eo(R,E,I),z.return=R,z)}function k(R,E,I,z){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=ra(I,R.mode,z),E.return=R,E):(E=s(E,I.children||[]),E.return=R,E)}function O(R,E,I,z,ee){return E===null||E.tag!==7?(E=zn(I,R.mode,z,ee),E.return=R,E):(E=s(E,I),E.return=R,E)}function G(R,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=na(""+E,R.mode,I),E.return=R,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case re:return I=Di(E.type,E.key,E.props,null,R.mode,I),I.ref=eo(R,null,E),I.return=R,I;case q:return E=ra(E,R.mode,I),E.return=R,E;case Fe:var z=E._init;return G(R,z(E._payload),I)}if(Cr(E)||Y(E))return E=zn(E,R.mode,I,null),E.return=R,E;ai(R,E)}return null}function L(R,E,I,z){var ee=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ee!==null?null:m(R,E,""+I,z);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case re:return I.key===ee?A(R,E,I,z):null;case q:return I.key===ee?k(R,E,I,z):null;case Fe:return ee=I._init,L(R,E,ee(I._payload),z)}if(Cr(I)||Y(I))return ee!==null?null:O(R,E,I,z,null);ai(R,I)}return null}function V(R,E,I,z,ee){if(typeof z=="string"&&z!==""||typeof z=="number")return R=R.get(I)||null,m(E,R,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case re:return R=R.get(z.key===null?I:z.key)||null,A(E,R,z,ee);case q:return R=R.get(z.key===null?I:z.key)||null,k(E,R,z,ee);case Fe:var ie=z._init;return V(R,E,I,ie(z._payload),ee)}if(Cr(z)||Y(z))return R=R.get(I)||null,O(E,R,z,ee,null);ai(E,z)}return null}function K(R,E,I,z){for(var ee=null,ie=null,le=E,ae=E=0,We=null;le!==null&&ae<I.length;ae++){le.index>ae?(We=le,le=null):We=le.sibling;var ve=L(R,le,I[ae],z);if(ve===null){le===null&&(le=We);break}e&&le&&ve.alternate===null&&t(R,le),E=a(ve,E,ae),ie===null?ee=ve:ie.sibling=ve,ie=ve,le=We}if(ae===I.length)return r(R,le),je&&Mn(R,ae),ee;if(le===null){for(;ae<I.length;ae++)le=G(R,I[ae],z),le!==null&&(E=a(le,E,ae),ie===null?ee=le:ie.sibling=le,ie=le);return je&&Mn(R,ae),ee}for(le=o(R,le);ae<I.length;ae++)We=V(le,R,ae,I[ae],z),We!==null&&(e&&We.alternate!==null&&le.delete(We.key===null?ae:We.key),E=a(We,E,ae),ie===null?ee=We:ie.sibling=We,ie=We);return e&&le.forEach(function(wn){return t(R,wn)}),je&&Mn(R,ae),ee}function J(R,E,I,z){var ee=Y(I);if(typeof ee!="function")throw Error(l(150));if(I=ee.call(I),I==null)throw Error(l(151));for(var ie=ee=null,le=E,ae=E=0,We=null,ve=I.next();le!==null&&!ve.done;ae++,ve=I.next()){le.index>ae?(We=le,le=null):We=le.sibling;var wn=L(R,le,ve.value,z);if(wn===null){le===null&&(le=We);break}e&&le&&wn.alternate===null&&t(R,le),E=a(wn,E,ae),ie===null?ee=wn:ie.sibling=wn,ie=wn,le=We}if(ve.done)return r(R,le),je&&Mn(R,ae),ee;if(le===null){for(;!ve.done;ae++,ve=I.next())ve=G(R,ve.value,z),ve!==null&&(E=a(ve,E,ae),ie===null?ee=ve:ie.sibling=ve,ie=ve);return je&&Mn(R,ae),ee}for(le=o(R,le);!ve.done;ae++,ve=I.next())ve=V(le,R,ae,ve.value,z),ve!==null&&(e&&ve.alternate!==null&&le.delete(ve.key===null?ae:ve.key),E=a(ve,E,ae),ie===null?ee=ve:ie.sibling=ve,ie=ve);return e&&le.forEach(function(Pp){return t(R,Pp)}),je&&Mn(R,ae),ee}function Ge(R,E,I,z){if(typeof I=="object"&&I!==null&&I.type===W&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case re:e:{for(var ee=I.key,ie=E;ie!==null;){if(ie.key===ee){if(ee=I.type,ee===W){if(ie.tag===7){r(R,ie.sibling),E=s(ie,I.props.children),E.return=R,R=E;break e}}else if(ie.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Fe&&Pu(ee)===ie.type){r(R,ie.sibling),E=s(ie,I.props),E.ref=eo(R,ie,I),E.return=R,R=E;break e}r(R,ie);break}else t(R,ie);ie=ie.sibling}I.type===W?(E=zn(I.props.children,R.mode,z,I.key),E.return=R,R=E):(z=Di(I.type,I.key,I.props,null,R.mode,z),z.ref=eo(R,E,I),z.return=R,R=z)}return f(R);case q:e:{for(ie=I.key;E!==null;){if(E.key===ie)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){r(R,E.sibling),E=s(E,I.children||[]),E.return=R,R=E;break e}else{r(R,E);break}else t(R,E);E=E.sibling}E=ra(I,R.mode,z),E.return=R,R=E}return f(R);case Fe:return ie=I._init,Ge(R,E,ie(I._payload),z)}if(Cr(I))return K(R,E,I,z);if(Y(I))return J(R,E,I,z);ai(R,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(r(R,E.sibling),E=s(E,I),E.return=R,R=E):(r(R,E),E=na(I,R.mode,z),E.return=R,R=E),f(R)):r(R,E)}return Ge}var fr=Bu(!0),Fu=Bu(!1),ci=un(null),ui=null,pr=null,fs=null;function ps(){fs=pr=ui=null}function hs(e){var t=ci.current;Ie(ci),e._currentValue=t}function gs(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function hr(e,t){ui=e,fs=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(ui===null)throw Error(l(308));pr=e,ui.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Dn=null;function ms(e){Dn===null?Dn=[e]:Dn.push(e)}function Uu(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,ms(t)):(r.next=s.next,s.next=r),t.interleaved=r,qt(e,o)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pn=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ge&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,qt(e,r)}return s=o.interleaved,s===null?(t.next=t,ms(o)):(t.next=s.next,s.next=t),o.interleaved=t,qt(e,r)}function di(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ml(e,r)}}function Vu(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=f:a=a.next=f,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fi(e,t,r,o){var s=e.updateQueue;pn=!1;var a=s.firstBaseUpdate,f=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var A=m,k=A.next;A.next=null,f===null?a=k:f.next=k,f=A;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==f&&(m===null?O.firstBaseUpdate=k:m.next=k,O.lastBaseUpdate=A))}if(a!==null){var G=s.baseState;f=0,O=k=A=null,m=a;do{var L=m.lane,V=m.eventTime;if((o&L)===L){O!==null&&(O=O.next={eventTime:V,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var K=e,J=m;switch(L=t,V=r,J.tag){case 1:if(K=J.payload,typeof K=="function"){G=K.call(V,G,L);break e}G=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=J.payload,L=typeof K=="function"?K.call(V,G,L):K,L==null)break e;G=F({},G,L);break e;case 2:pn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,L=s.effects,L===null?s.effects=[m]:L.push(m))}else V={eventTime:V,lane:L,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(k=O=V,A=G):O=O.next=V,f|=L;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;L=m,m=L.next,L.next=null,s.lastBaseUpdate=L,s.shared.pending=null}}while(!0);if(O===null&&(A=G),s.baseState=A,s.firstBaseUpdate=k,s.lastBaseUpdate=O,t=s.shared.interleaved,t!==null){s=t;do f|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);bn|=f,e.lanes=f,e.memoizedState=G}}function Yu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var to={},Pt=un(to),no=un(to),ro=un(to);function Ln(e){if(e===to)throw Error(l(174));return e}function ys(e,t){switch(Ee(ro,t),Ee(no,e),Ee(Pt,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Ie(Pt),Ee(Pt,t)}function gr(){Ie(Pt),Ie(no),Ie(ro)}function Wu(e){Ln(ro.current);var t=Ln(Pt.current),r=xl(t,e.type);t!==r&&(Ee(no,e),Ee(Pt,r))}function xs(e){no.current===e&&(Ie(Pt),Ie(no))}var Me=un(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function ws(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var hi=U.ReactCurrentDispatcher,Ss=U.ReactCurrentBatchConfig,On=0,De=null,Ue=null,Ve=null,gi=!1,oo=!1,io=0,ap=0;function nt(){throw Error(l(321))}function Ts(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function Es(e,t,r,o,s,a){if(On=a,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hi.current=e===null||e.memoizedState===null?fp:pp,e=r(o,s),oo){a=0;do{if(oo=!1,io=0,25<=a)throw Error(l(301));a+=1,Ve=Ue=null,t.updateQueue=null,hi.current=hp,e=r(o,s)}while(oo)}if(hi.current=yi,t=Ue!==null&&Ue.next!==null,On=0,Ve=Ue=De=null,gi=!1,t)throw Error(l(300));return e}function Ns(){var e=io!==0;return io=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?De.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Et(){if(Ue===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ve===null?De.memoizedState:Ve.next;if(t!==null)Ve=t,Ue=e;else{if(e===null)throw Error(l(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?De.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function lo(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=Ue,s=o.baseQueue,a=r.pending;if(a!==null){if(s!==null){var f=s.next;s.next=a.next,a.next=f}o.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,o=o.baseState;var m=f=null,A=null,k=a;do{var O=k.lane;if((On&O)===O)A!==null&&(A=A.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),o=k.hasEagerState?k.eagerState:e(o,k.action);else{var G={lane:O,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};A===null?(m=A=G,f=o):A=A.next=G,De.lanes|=O,bn|=O}k=k.next}while(k!==null&&k!==a);A===null?f=o:A.next=m,jt(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=A,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do a=s.lane,De.lanes|=a,bn|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Is(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var f=s=s.next;do a=e(a,f.action),f=f.next;while(f!==s);jt(a,t.memoizedState)||(dt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function Qu(){}function Zu(e,t){var r=De,o=Et(),s=t(),a=!jt(o.memoizedState,s);if(a&&(o.memoizedState=s,dt=!0),o=o.queue,ks(Xu.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,so(9,Ku.bind(null,r,o,s,t),void 0,null),Ye===null)throw Error(l(349));(On&30)!==0||qu(r,t,s)}return s}function qu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ku(e,t,r,o){t.value=r,t.getSnapshot=o,Ju(t)&&e0(e)}function Xu(e,t,r){return r(function(){Ju(t)&&e0(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function e0(e){var t=qt(e,1);t!==null&&bt(t,e,1,-1)}function t0(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,De,e),[t.memoizedState,e]}function so(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function n0(){return Et().memoizedState}function mi(e,t,r,o){var s=Bt();De.flags|=e,s.memoizedState=so(1|t,r,void 0,o===void 0?null:o)}function vi(e,t,r,o){var s=Et();o=o===void 0?null:o;var a=void 0;if(Ue!==null){var f=Ue.memoizedState;if(a=f.destroy,o!==null&&Ts(o,f.deps)){s.memoizedState=so(t,r,a,o);return}}De.flags|=e,s.memoizedState=so(1|t,r,a,o)}function r0(e,t){return mi(8390656,8,e,t)}function ks(e,t){return vi(2048,8,e,t)}function o0(e,t){return vi(4,2,e,t)}function i0(e,t){return vi(4,4,e,t)}function l0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function s0(e,t,r){return r=r!=null?r.concat([e]):null,vi(4,4,l0.bind(null,t,e),r)}function Cs(){}function a0(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ts(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function c0(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ts(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function u0(e,t,r){return(On&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=r):(jt(r,t)||(r=Pc(),De.lanes|=r,bn|=r,e.baseState=!0),t)}function cp(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var o=Ss.transition;Ss.transition={};try{e(!1),t()}finally{Se=r,Ss.transition=o}}function d0(){return Et().memoizedState}function up(e,t,r){var o=yn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},f0(e))p0(t,r);else if(r=Uu(e,t,r,o),r!==null){var s=st();bt(r,e,o,s),h0(r,t,o)}}function dp(e,t,r){var o=yn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(f0(e))p0(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var f=t.lastRenderedState,m=a(f,r);if(s.hasEagerState=!0,s.eagerState=m,jt(m,f)){var A=t.interleaved;A===null?(s.next=s,ms(t)):(s.next=A.next,A.next=s),t.interleaved=s;return}}catch{}finally{}r=Uu(e,t,s,o),r!==null&&(s=st(),bt(r,e,o,s),h0(r,t,o))}}function f0(e){var t=e.alternate;return e===De||t!==null&&t===De}function p0(e,t){oo=gi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function h0(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ml(e,r)}}var yi={readContext:Tt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},fp={readContext:Tt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:r0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,mi(4194308,4,l0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Bt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=up.bind(null,De,e),[o.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:t0,useDebugValue:Cs,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=t0(!1),t=e[0];return e=cp.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=De,s=Bt();if(je){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ye===null)throw Error(l(349));(On&30)!==0||qu(o,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,r0(Xu.bind(null,o,a,e),[e]),o.flags|=2048,so(9,Ku.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Ye.identifierPrefix;if(je){var r=Zt,o=Qt;r=(o&~(1<<32-Ct(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=io++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ap++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:Tt,useCallback:a0,useContext:Tt,useEffect:ks,useImperativeHandle:s0,useInsertionEffect:o0,useLayoutEffect:i0,useMemo:c0,useReducer:Rs,useRef:n0,useState:function(){return Rs(lo)},useDebugValue:Cs,useDeferredValue:function(e){var t=Et();return u0(t,Ue.memoizedState,e)},useTransition:function(){var e=Rs(lo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Qu,useSyncExternalStore:Zu,useId:d0,unstable_isNewReconciler:!1},hp={readContext:Tt,useCallback:a0,useContext:Tt,useEffect:ks,useImperativeHandle:s0,useInsertionEffect:o0,useLayoutEffect:i0,useMemo:c0,useReducer:Is,useRef:n0,useState:function(){return Is(lo)},useDebugValue:Cs,useDeferredValue:function(e){var t=Et();return Ue===null?t.memoizedState=e:u0(t,Ue.memoizedState,e)},useTransition:function(){var e=Is(lo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Qu,useSyncExternalStore:Zu,useId:d0,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function js(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xi={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=st(),s=yn(e),a=Kt(o,s);a.payload=t,r!=null&&(a.callback=r),t=hn(e,a,s),t!==null&&(bt(t,e,s,o),di(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=st(),s=yn(e),a=Kt(o,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=hn(e,a,s),t!==null&&(bt(t,e,s,o),di(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),o=yn(e),s=Kt(r,o);s.tag=2,t!=null&&(s.callback=t),t=hn(e,s,o),t!==null&&(bt(t,e,o,r),di(t,e,o))}};function g0(e,t,r,o,s,a,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,f):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,o)||!Wr(s,a):!0}function m0(e,t,r){var o=!1,s=dn,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(s=ut(t)?Cn:tt.current,o=t.contextTypes,a=(o=o!=null)?ar(e,s):dn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function v0(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Ms(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},vs(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Tt(a):(a=ut(t)?Cn:tt.current,s.context=ar(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(js(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&xi.enqueueReplaceState(s,s.state,null),fi(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",o=t;do r+=ce(o),o=o.return;while(o);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Ds(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function y0(e,t,r){r=Kt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Ri||(Ri=!0,Qs=o),Ls(e,t)},r}function x0(e,t,r){r=Kt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Ls(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ls(e,t),typeof o!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function A0(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new gp;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=Cp.bind(null,e,t,r),t.then(e,e))}function w0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function S0(e,t,r,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Kt(-1,1),t.tag=2,hn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var mp=U.ReactCurrentOwner,dt=!1;function lt(e,t,r,o){t.child=e===null?Fu(t,null,r,o):fr(t,e.child,r,o)}function T0(e,t,r,o,s){r=r.render;var a=t.ref;return hr(t,s),o=Es(e,t,r,o,a,s),r=Ns(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xt(e,t,s)):(je&&r&&ss(t),t.flags|=1,lt(e,t,o,s),t.child)}function E0(e,t,r,o,s){if(e===null){var a=r.type;return typeof a=="function"&&!ta(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,N0(e,t,a,o,s)):(e=Di(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var f=a.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(f,o)&&e.ref===t.ref)return Xt(e,t,s)}return t.flags|=1,e=An(a,o),e.ref=t.ref,e.return=t,t.child=e}function N0(e,t,r,o,s){if(e!==null){var a=e.memoizedProps;if(Wr(a,o)&&e.ref===t.ref)if(dt=!1,t.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,Xt(e,t,s)}return Os(e,t,r,o,s)}function R0(e,t,r){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(yr,xt),xt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(yr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,Ee(yr,xt),xt|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,Ee(yr,xt),xt|=o;return lt(e,t,s,r),t.child}function I0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Os(e,t,r,o,s){var a=ut(r)?Cn:tt.current;return a=ar(t,a),hr(t,s),r=Es(e,t,r,o,a,s),o=Ns(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xt(e,t,s)):(je&&o&&ss(t),t.flags|=1,lt(e,t,r,s),t.child)}function k0(e,t,r,o,s){if(ut(r)){var a=!0;ri(t)}else a=!1;if(hr(t,s),t.stateNode===null)wi(e,t),m0(t,r,o),Ms(t,r,o,s),o=!0;else if(e===null){var f=t.stateNode,m=t.memoizedProps;f.props=m;var A=f.context,k=r.contextType;typeof k=="object"&&k!==null?k=Tt(k):(k=ut(r)?Cn:tt.current,k=ar(t,k));var O=r.getDerivedStateFromProps,G=typeof O=="function"||typeof f.getSnapshotBeforeUpdate=="function";G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==o||A!==k)&&v0(t,f,o,k),pn=!1;var L=t.memoizedState;f.state=L,fi(t,o,f,s),A=t.memoizedState,m!==o||L!==A||ct.current||pn?(typeof O=="function"&&(js(t,r,O,o),A=t.memoizedState),(m=pn||g0(t,r,m,o,L,A,k))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=A),f.props=o,f.state=A,f.context=k,o=m):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,$u(e,t),m=t.memoizedProps,k=t.type===t.elementType?m:Dt(t.type,m),f.props=k,G=t.pendingProps,L=f.context,A=r.contextType,typeof A=="object"&&A!==null?A=Tt(A):(A=ut(r)?Cn:tt.current,A=ar(t,A));var V=r.getDerivedStateFromProps;(O=typeof V=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==G||L!==A)&&v0(t,f,o,A),pn=!1,L=t.memoizedState,f.state=L,fi(t,o,f,s);var K=t.memoizedState;m!==G||L!==K||ct.current||pn?(typeof V=="function"&&(js(t,r,V,o),K=t.memoizedState),(k=pn||g0(t,r,k,o,L,K,A)||!1)?(O||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,K,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,K,A)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=K),f.props=o,f.state=K,f.context=A,o=k):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),o=!1)}return bs(e,t,r,o,a,s)}function bs(e,t,r,o,s,a){I0(e,t);var f=(t.flags&128)!==0;if(!o&&!f)return s&&Lu(t,r,!1),Xt(e,t,a);o=t.stateNode,mp.current=t;var m=f&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&f?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,m,a)):lt(e,t,m,a),t.memoizedState=o.state,s&&Lu(t,r,!0),t.child}function C0(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),ys(e,t.containerInfo)}function j0(e,t,r,o,s){return dr(),ds(s),t.flags|=256,lt(e,t,r,o),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function M0(e,t,r){var o=t.pendingProps,s=Me.current,a=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ee(Me,s&1),e===null)return us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=o.children,e=o.fallback,a?(o=t.mode,a=t.child,f={mode:"hidden",children:f},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=f):a=Li(f,o,0,null),e=zn(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=_s(r),t.memoizedState=Gs,e):Hs(t,f));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return vp(e,t,f,o,m,s,r);if(a){a=o.fallback,f=t.mode,s=e.child,m=s.sibling;var A={mode:"hidden",children:o.children};return(f&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=A,t.deletions=null):(o=An(s,A),o.subtreeFlags=s.subtreeFlags&14680064),m!==null?a=An(m,a):(a=zn(a,f,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,f=e.child.memoizedState,f=f===null?_s(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},a.memoizedState=f,a.childLanes=e.childLanes&~r,t.memoizedState=Gs,o}return a=e.child,e=a.sibling,o=An(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Hs(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,r,o){return o!==null&&ds(o),fr(t,e.child,null,r),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,r,o,s,a,f){if(r)return t.flags&256?(t.flags&=-257,o=Ds(Error(l(422))),Ai(e,t,f,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=Li({mode:"visible",children:o.children},s,0,null),a=zn(a,s,f,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&fr(t,e.child,null,f),t.child.memoizedState=_s(f),t.memoizedState=Gs,a);if((t.mode&1)===0)return Ai(e,t,f,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;return o=m,a=Error(l(419)),o=Ds(a,o,void 0),Ai(e,t,f,o)}if(m=(f&e.childLanes)!==0,dt||m){if(o=Ye,o!==null){switch(f&-f){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|f))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,qt(e,s),bt(o,e,s,-1))}return ea(),o=Ds(Error(l(421))),Ai(e,t,f,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=jp.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,yt=cn(s.nextSibling),vt=t,je=!0,Mt=null,e!==null&&(wt[St++]=Qt,wt[St++]=Zt,wt[St++]=jn,Qt=e.id,Zt=e.overflow,jn=t),t=Hs(t,o.children),t.flags|=4096,t)}function D0(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),gs(e.return,t,r)}function zs(e,t,r,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=s)}function L0(e,t,r){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(lt(e,t,o.children,r),o=Me.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&D0(e,r,t);else if(e.tag===19)D0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(Me,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&pi(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),zs(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&pi(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}zs(t,!0,r,null,a);break;case"together":zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=An(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=An(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function yp(e,t,r){switch(t.tag){case 3:C0(t),dr();break;case 5:Wu(t);break;case 1:ut(t.type)&&ri(t);break;case 4:ys(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;Ee(ci,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(Me,Me.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?M0(e,t,r):(Ee(Me,Me.current&1),e=Xt(e,t,r),e!==null?e.sibling:null);Ee(Me,Me.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return L0(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Me,Me.current),o)break;return null;case 22:case 23:return t.lanes=0,R0(e,t,r)}return Xt(e,t,r)}var O0,Ps,b0,G0;O0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ps=function(){},b0=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Ln(Pt.current);var a=null;switch(r){case"input":s=gl(e,s),o=gl(e,o),a=[];break;case"select":s=F({},s,{value:void 0}),o=F({},o,{value:void 0}),a=[];break;case"textarea":s=yl(e,s),o=yl(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ei)}Al(r,o);var f;r=null;for(k in s)if(!o.hasOwnProperty(k)&&s.hasOwnProperty(k)&&s[k]!=null)if(k==="style"){var m=s[k];for(f in m)m.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(d.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in o){var A=o[k];if(m=s!=null?s[k]:void 0,o.hasOwnProperty(k)&&A!==m&&(A!=null||m!=null))if(k==="style")if(m){for(f in m)!m.hasOwnProperty(f)||A&&A.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in A)A.hasOwnProperty(f)&&m[f]!==A[f]&&(r||(r={}),r[f]=A[f])}else r||(a||(a=[]),a.push(k,r)),r=A;else k==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,m=m?m.__html:void 0,A!=null&&m!==A&&(a=a||[]).push(k,A)):k==="children"?typeof A!="string"&&typeof A!="number"||(a=a||[]).push(k,""+A):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(d.hasOwnProperty(k)?(A!=null&&k==="onScroll"&&Re("scroll",e),a||m===A||(a=[])):(a=a||[]).push(k,A))}r&&(a=a||[]).push("style",r);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},G0=function(e,t,r,o){r!==o&&(t.flags|=4)};function ao(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function xp(e,t,r){var o=t.pendingProps;switch(as(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return ut(t.type)&&ni(),rt(t),null;case 3:return o=t.stateNode,gr(),Ie(ct),Ie(tt),ws(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(Ks(Mt),Mt=null))),Ps(e,t),rt(t),null;case 5:xs(t);var s=Ln(ro.current);if(r=t.type,e!==null&&t.stateNode!=null)b0(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return rt(t),null}if(e=Ln(Pt.current),si(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[zt]=t,o[Xr]=a,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<Zr.length;s++)Re(Zr[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":mc(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":xc(o,a),Re("invalid",o)}Al(r,a),s=null;for(var f in a)if(a.hasOwnProperty(f)){var m=a[f];f==="children"?typeof m=="string"?o.textContent!==m&&(a.suppressHydrationWarning!==!0&&Jo(o.textContent,m,e),s=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Jo(o.textContent,m,e),s=["children",""+m]):d.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&Re("scroll",o)}switch(r){case"input":Vt(o),yc(o,a,!0);break;case"textarea":Vt(o),wc(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ei)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{f=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=f.createElement(r,{is:o.is}):(e=f.createElement(r),r==="select"&&(f=e,o.multiple?f.multiple=!0:o.size&&(f.size=o.size))):e=f.createElementNS(e,r),e[zt]=t,e[Xr]=o,O0(e,t,!1,!1),t.stateNode=e;e:{switch(f=wl(r,o),r){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<Zr.length;s++)Re(Zr[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":mc(e,o),s=gl(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=F({},o,{value:void 0}),Re("invalid",e);break;case"textarea":xc(e,o),s=yl(e,o),Re("invalid",e);break;default:s=o}Al(r,s),m=s;for(a in m)if(m.hasOwnProperty(a)){var A=m[a];a==="style"?Nc(e,A):a==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Tc(e,A)):a==="children"?typeof A=="string"?(r!=="textarea"||A!=="")&&jr(e,A):typeof A=="number"&&jr(e,""+A):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?A!=null&&a==="onScroll"&&Re("scroll",e):A!=null&&Z(e,a,A,f))}switch(r){case"input":Vt(e),yc(e,o,!1);break;case"textarea":Vt(e),wc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+he(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?qn(e,!!o.multiple,a,!1):o.defaultValue!=null&&qn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ei)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)G0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(r=Ln(ro.current),Ln(Pt.current),si(t)){if(o=t.stateNode,r=t.memoizedProps,o[zt]=t,(a=o.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:Jo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jo(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[zt]=t,t.stateNode=o}return rt(t),null;case 13:if(Ie(Me),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zu(),dr(),t.flags|=98560,a=!1;else if(a=si(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[zt]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Mt!==null&&(Ks(Mt),Mt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?$e===0&&($e=3):ea())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return gr(),Ps(e,t),e===null&&qr(t.stateNode.containerInfo),rt(t),null;case 10:return hs(t.type._context),rt(t),null;case 17:return ut(t.type)&&ni(),rt(t),null;case 19:if(Ie(Me),a=t.memoizedState,a===null)return rt(t),null;if(o=(t.flags&128)!==0,f=a.rendering,f===null)if(o)ao(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=pi(e),f!==null){for(t.flags|=128,ao(a,!1),o=f.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,f=a.alternate,f===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=f.childLanes,a.lanes=f.lanes,a.child=f.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=f.memoizedProps,a.memoizedState=f.memoizedState,a.updateQueue=f.updateQueue,a.type=f.type,e=f.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(Me,Me.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>xr&&(t.flags|=128,o=!0,ao(a,!1),t.lanes=4194304)}else{if(!o)if(e=pi(f),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ao(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!je)return rt(t),null}else 2*be()-a.renderingStartTime>xr&&r!==1073741824&&(t.flags|=128,o=!0,ao(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(r=a.last,r!==null?r.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,r=Me.current,Ee(Me,o?r&1|2:r&1),t):(rt(t),null);case 22:case 23:return Js(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(xt&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Ap(e,t){switch(as(t),t.tag){case 1:return ut(t.type)&&ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),Ie(ct),Ie(tt),ws(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return xs(t),null;case 13:if(Ie(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Me),null;case 4:return gr(),null;case 10:return hs(t.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var Si=!1,ot=!1,wp=typeof WeakSet=="function"?WeakSet:Set,Q=null;function vr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Oe(e,t,o)}else r.current=null}function Bs(e,t,r){try{r()}catch(o){Oe(e,t,o)}}var _0=!1;function Sp(e,t){if(Jl=Fo,e=gu(),Vl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var f=0,m=-1,A=-1,k=0,O=0,G=e,L=null;t:for(;;){for(var V;G!==r||s!==0&&G.nodeType!==3||(m=f+s),G!==a||o!==0&&G.nodeType!==3||(A=f+o),G.nodeType===3&&(f+=G.nodeValue.length),(V=G.firstChild)!==null;)L=G,G=V;for(;;){if(G===e)break t;if(L===r&&++k===s&&(m=f),L===a&&++O===o&&(A=f),(V=G.nextSibling)!==null)break;G=L,L=G.parentNode}G=V}r=m===-1||A===-1?null:{start:m,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(es={focusedElem:e,selectionRange:r},Fo=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var J=K.memoizedProps,Ge=K.memoizedState,R=t.stateNode,E=R.getSnapshotBeforeUpdate(t.elementType===t.type?J:Dt(t.type,J),Ge);R.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(z){Oe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return K=_0,_0=!1,K}function co(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Bs(t,r,a)}s=s.next}while(s!==o)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Fs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function H0(e){var t=e.alternate;t!==null&&(e.alternate=null,H0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Xr],delete t[os],delete t[op],delete t[ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function z0(e){return e.tag===5||e.tag===3||e.tag===4}function P0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ei));else if(o!==4&&(e=e.child,e!==null))for(Us(e,t,r),e=e.sibling;e!==null;)Us(e,t,r),e=e.sibling}function $s(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for($s(e,t,r),e=e.sibling;e!==null;)$s(e,t,r),e=e.sibling}var Je=null,Lt=!1;function gn(e,t,r){for(r=r.child;r!==null;)B0(e,t,r),r=r.sibling}function B0(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Go,r)}catch{}switch(r.tag){case 5:ot||vr(r,t);case 6:var o=Je,s=Lt;Je=null,gn(e,t,r),Je=o,Lt=s,Je!==null&&(Lt?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Lt?(e=Je,r=r.stateNode,e.nodeType===8?rs(e.parentNode,r):e.nodeType===1&&rs(e,r),Br(e)):rs(Je,r.stateNode));break;case 4:o=Je,s=Lt,Je=r.stateNode.containerInfo,Lt=!0,gn(e,t,r),Je=o,Lt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,f=a.destroy;a=a.tag,f!==void 0&&((a&2)!==0||(a&4)!==0)&&Bs(r,t,f),s=s.next}while(s!==o)}gn(e,t,r);break;case 1:if(!ot&&(vr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){Oe(r,t,m)}gn(e,t,r);break;case 21:gn(e,t,r);break;case 22:r.mode&1?(ot=(o=ot)||r.memoizedState!==null,gn(e,t,r),ot=o):gn(e,t,r);break;default:gn(e,t,r)}}function F0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wp),t.forEach(function(o){var s=Mp.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Ot(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var a=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 5:Je=m.stateNode,Lt=!1;break e;case 3:Je=m.stateNode.containerInfo,Lt=!0;break e;case 4:Je=m.stateNode.containerInfo,Lt=!0;break e}m=m.return}if(Je===null)throw Error(l(160));B0(a,f,s),Je=null,Lt=!1;var A=s.alternate;A!==null&&(A.return=null),s.return=null}catch(k){Oe(s,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U0(t,e),t=t.sibling}function U0(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Ft(e),o&4){try{co(3,e,e.return),Ti(3,e)}catch(J){Oe(e,e.return,J)}try{co(5,e,e.return)}catch(J){Oe(e,e.return,J)}}break;case 1:Ot(t,e),Ft(e),o&512&&r!==null&&vr(r,r.return);break;case 5:if(Ot(t,e),Ft(e),o&512&&r!==null&&vr(r,r.return),e.flags&32){var s=e.stateNode;try{jr(s,"")}catch(J){Oe(e,e.return,J)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,f=r!==null?r.memoizedProps:a,m=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&vc(s,a),wl(m,f);var k=wl(m,a);for(f=0;f<A.length;f+=2){var O=A[f],G=A[f+1];O==="style"?Nc(s,G):O==="dangerouslySetInnerHTML"?Tc(s,G):O==="children"?jr(s,G):Z(s,O,G,k)}switch(m){case"input":ml(s,a);break;case"textarea":Ac(s,a);break;case"select":var L=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var V=a.value;V!=null?qn(s,!!a.multiple,V,!1):L!==!!a.multiple&&(a.defaultValue!=null?qn(s,!!a.multiple,a.defaultValue,!0):qn(s,!!a.multiple,a.multiple?[]:"",!1))}s[Xr]=a}catch(J){Oe(e,e.return,J)}}break;case 6:if(Ot(t,e),Ft(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(J){Oe(e,e.return,J)}}break;case 3:if(Ot(t,e),Ft(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(J){Oe(e,e.return,J)}break;case 4:Ot(t,e),Ft(e);break;case 13:Ot(t,e),Ft(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Ws=be())),o&4&&F0(e);break;case 22:if(O=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(k=ot)||O,Ot(t,e),ot=k):Ot(t,e),Ft(e),o&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!O&&(e.mode&1)!==0)for(Q=e,O=e.child;O!==null;){for(G=Q=O;Q!==null;){switch(L=Q,V=L.child,L.tag){case 0:case 11:case 14:case 15:co(4,L,L.return);break;case 1:vr(L,L.return);var K=L.stateNode;if(typeof K.componentWillUnmount=="function"){o=L,r=L.return;try{t=o,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(J){Oe(o,r,J)}}break;case 5:vr(L,L.return);break;case 22:if(L.memoizedState!==null){Y0(G);continue}}V!==null?(V.return=L,Q=V):Y0(G)}O=O.sibling}e:for(O=null,G=e;;){if(G.tag===5){if(O===null){O=G;try{s=G.stateNode,k?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=G.stateNode,A=G.memoizedProps.style,f=A!=null&&A.hasOwnProperty("display")?A.display:null,m.style.display=Ec("display",f))}catch(J){Oe(e,e.return,J)}}}else if(G.tag===6){if(O===null)try{G.stateNode.nodeValue=k?"":G.memoizedProps}catch(J){Oe(e,e.return,J)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;O===G&&(O=null),G=G.return}O===G&&(O=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Ot(t,e),Ft(e),o&4&&F0(e);break;case 21:break;default:Ot(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(z0(r)){var o=r;break e}r=r.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(jr(s,""),o.flags&=-33);var a=P0(e);$s(e,a,s);break;case 3:case 4:var f=o.stateNode.containerInfo,m=P0(e);Us(e,m,f);break;default:throw Error(l(161))}}catch(A){Oe(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,r){Q=e,$0(e)}function $0(e,t,r){for(var o=(e.mode&1)!==0;Q!==null;){var s=Q,a=s.child;if(s.tag===22&&o){var f=s.memoizedState!==null||Si;if(!f){var m=s.alternate,A=m!==null&&m.memoizedState!==null||ot;m=Si;var k=ot;if(Si=f,(ot=A)&&!k)for(Q=s;Q!==null;)f=Q,A=f.child,f.tag===22&&f.memoizedState!==null?W0(s):A!==null?(A.return=f,Q=A):W0(s);for(;a!==null;)Q=a,$0(a),a=a.sibling;Q=s,Si=m,ot=k}V0(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,Q=a):V0(e)}}function V0(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||Ti(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ot)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Dt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Yu(t,a,o);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yu(t,f,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&r.focus();break;case"img":A.src&&(r.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var O=k.memoizedState;if(O!==null){var G=O.dehydrated;G!==null&&Br(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ot||t.flags&512&&Fs(t)}catch(L){Oe(t,t.return,L)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function Y0(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function W0(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ti(4,t)}catch(A){Oe(t,r,A)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(A){Oe(t,s,A)}}var a=t.return;try{Fs(t)}catch(A){Oe(t,a,A)}break;case 5:var f=t.return;try{Fs(t)}catch(A){Oe(t,f,A)}}}catch(A){Oe(t,t.return,A)}if(t===e){Q=null;break}var m=t.sibling;if(m!==null){m.return=t.return,Q=m;break}Q=t.return}}var Ep=Math.ceil,Ei=U.ReactCurrentDispatcher,Vs=U.ReactCurrentOwner,Nt=U.ReactCurrentBatchConfig,ge=0,Ye=null,ze=null,et=0,xt=0,yr=un(0),$e=0,uo=null,bn=0,Ni=0,Ys=0,fo=null,ft=null,Ws=0,xr=1/0,Jt=null,Ri=!1,Qs=null,mn=null,Ii=!1,vn=null,ki=0,po=0,Zs=null,Ci=-1,ji=0;function st(){return(ge&6)!==0?be():Ci!==-1?Ci:Ci=be()}function yn(e){return(e.mode&1)===0?1:(ge&2)!==0&&et!==0?et&-et:sp.transition!==null?(ji===0&&(ji=Pc()),ji):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e)}function bt(e,t,r,o){if(50<po)throw po=0,Zs=null,Error(l(185));Gr(e,r,o),((ge&2)===0||e!==Ye)&&(e===Ye&&((ge&2)===0&&(Ni|=r),$e===4&&xn(e,et)),pt(e,o),r===1&&ge===0&&(t.mode&1)===0&&(xr=be()+500,oi&&fn()))}function pt(e,t){var r=e.callbackNode;sf(e,t);var o=zo(e,e===Ye?et:0);if(o===0)r!==null&&_c(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&_c(r),t===1)e.tag===0?lp(Z0.bind(null,e)):Ou(Z0.bind(null,e)),np(function(){(ge&6)===0&&fn()}),r=null;else{switch(Bc(o)){case 1:r=kl;break;case 4:r=Hc;break;case 16:r=bo;break;case 536870912:r=zc;break;default:r=bo}r=rd(r,Q0.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Q0(e,t){if(Ci=-1,ji=0,(ge&6)!==0)throw Error(l(327));var r=e.callbackNode;if(Ar()&&e.callbackNode!==r)return null;var o=zo(e,e===Ye?et:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Mi(e,o);else{t=o;var s=ge;ge|=2;var a=K0();(Ye!==e||et!==t)&&(Jt=null,xr=be()+500,_n(e,t));do try{Ip();break}catch(m){q0(e,m)}while(!0);ps(),Ei.current=a,ge=s,ze!==null?t=0:(Ye=null,et=0,t=$e)}if(t!==0){if(t===2&&(s=Cl(e),s!==0&&(o=s,t=qs(e,s))),t===1)throw r=uo,_n(e,0),xn(e,o),pt(e,be()),r;if(t===6)xn(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Np(s)&&(t=Mi(e,o),t===2&&(a=Cl(e),a!==0&&(o=a,t=qs(e,a))),t===1))throw r=uo,_n(e,0),xn(e,o),pt(e,be()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:Hn(e,ft,Jt);break;case 3:if(xn(e,o),(o&130023424)===o&&(t=Ws+500-be(),10<t)){if(zo(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){st(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ns(Hn.bind(null,e,ft,Jt),t);break}Hn(e,ft,Jt);break;case 4:if(xn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var f=31-Ct(o);a=1<<f,f=t[f],f>s&&(s=f),o&=~a}if(o=s,o=be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ep(o/1960))-o,10<o){e.timeoutHandle=ns(Hn.bind(null,e,ft,Jt),o);break}Hn(e,ft,Jt);break;case 5:Hn(e,ft,Jt);break;default:throw Error(l(329))}}}return pt(e,be()),e.callbackNode===r?Q0.bind(null,e):null}function qs(e,t){var r=fo;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=ft,ft=r,t!==null&&Ks(t)),e}function Ks(e){ft===null?ft=e:ft.push.apply(ft,e)}function Np(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],a=s.getSnapshot;s=s.value;try{if(!jt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Ys,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ct(t),o=1<<r;e[r]=-1,t&=~o}}function Z0(e){if((ge&6)!==0)throw Error(l(327));Ar();var t=zo(e,0);if((t&1)===0)return pt(e,be()),null;var r=Mi(e,t);if(e.tag!==0&&r===2){var o=Cl(e);o!==0&&(t=o,r=qs(e,o))}if(r===1)throw r=uo,_n(e,0),xn(e,t),pt(e,be()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,ft,Jt),pt(e,be()),null}function Xs(e,t){var r=ge;ge|=1;try{return e(t)}finally{ge=r,ge===0&&(xr=be()+500,oi&&fn())}}function Gn(e){vn!==null&&vn.tag===0&&(ge&6)===0&&Ar();var t=ge;ge|=1;var r=Nt.transition,o=Se;try{if(Nt.transition=null,Se=1,e)return e()}finally{Se=o,Nt.transition=r,ge=t,(ge&6)===0&&fn()}}function Js(){xt=yr.current,Ie(yr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,tp(r)),ze!==null)for(r=ze.return;r!==null;){var o=r;switch(as(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ni();break;case 3:gr(),Ie(ct),Ie(tt),ws();break;case 5:xs(o);break;case 4:gr();break;case 13:Ie(Me);break;case 19:Ie(Me);break;case 10:hs(o.type._context);break;case 22:case 23:Js()}r=r.return}if(Ye=e,ze=e=An(e.current,null),et=xt=t,$e=0,uo=null,Ys=Ni=bn=0,ft=fo=null,Dn!==null){for(t=0;t<Dn.length;t++)if(r=Dn[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,a=r.pending;if(a!==null){var f=a.next;a.next=s,o.next=f}r.pending=o}Dn=null}return e}function q0(e,t){do{var r=ze;try{if(ps(),hi.current=yi,gi){for(var o=De.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}gi=!1}if(On=0,Ve=Ue=De=null,oo=!1,io=0,Vs.current=null,r===null||r.return===null){$e=1,uo=t,ze=null;break}e:{var a=e,f=r.return,m=r,A=t;if(t=et,m.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var k=A,O=m,G=O.tag;if((O.mode&1)===0&&(G===0||G===11||G===15)){var L=O.alternate;L?(O.updateQueue=L.updateQueue,O.memoizedState=L.memoizedState,O.lanes=L.lanes):(O.updateQueue=null,O.memoizedState=null)}var V=w0(f);if(V!==null){V.flags&=-257,S0(V,f,m,a,t),V.mode&1&&A0(a,k,t),t=V,A=k;var K=t.updateQueue;if(K===null){var J=new Set;J.add(A),t.updateQueue=J}else K.add(A);break e}else{if((t&1)===0){A0(a,k,t),ea();break e}A=Error(l(426))}}else if(je&&m.mode&1){var Ge=w0(f);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),S0(Ge,f,m,a,t),ds(mr(A,m));break e}}a=A=mr(A,m),$e!==4&&($e=2),fo===null?fo=[a]:fo.push(a),a=f;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var R=y0(a,A,t);Vu(a,R);break e;case 1:m=A;var E=a.type,I=a.stateNode;if((a.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(mn===null||!mn.has(I)))){a.flags|=65536,t&=-t,a.lanes|=t;var z=x0(a,m,t);Vu(a,z);break e}}a=a.return}while(a!==null)}J0(r)}catch(ee){t=ee,ze===r&&r!==null&&(ze=r=r.return);continue}break}while(!0)}function K0(){var e=Ei.current;return Ei.current=yi,e===null?yi:e}function ea(){($e===0||$e===3||$e===2)&&($e=4),Ye===null||(bn&268435455)===0&&(Ni&268435455)===0||xn(Ye,et)}function Mi(e,t){var r=ge;ge|=2;var o=K0();(Ye!==e||et!==t)&&(Jt=null,_n(e,t));do try{Rp();break}catch(s){q0(e,s)}while(!0);if(ps(),ge=r,Ei.current=o,ze!==null)throw Error(l(261));return Ye=null,et=0,$e}function Rp(){for(;ze!==null;)X0(ze)}function Ip(){for(;ze!==null&&!K1();)X0(ze)}function X0(e){var t=nd(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?J0(e):ze=t,Vs.current=null}function J0(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=xp(r,t,xt),r!==null){ze=r;return}}else{if(r=Ap(r,t),r!==null){r.flags&=32767,ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);$e===0&&($e=5)}function Hn(e,t,r){var o=Se,s=Nt.transition;try{Nt.transition=null,Se=1,kp(e,t,r,o)}finally{Nt.transition=s,Se=o}return null}function kp(e,t,r,o){do Ar();while(vn!==null);if((ge&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(af(e,a),e===Ye&&(ze=Ye=null,et=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ii||(Ii=!0,rd(bo,function(){return Ar(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Nt.transition,Nt.transition=null;var f=Se;Se=1;var m=ge;ge|=4,Vs.current=null,Sp(e,r),U0(r,e),Qf(es),Fo=!!Jl,es=Jl=null,e.current=r,Tp(r),X1(),ge=m,Se=f,Nt.transition=a}else e.current=r;if(Ii&&(Ii=!1,vn=e,ki=s),a=e.pendingLanes,a===0&&(mn=null),tf(r.stateNode),pt(e,be()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ri)throw Ri=!1,e=Qs,Qs=null,e;return(ki&1)!==0&&e.tag!==0&&Ar(),a=e.pendingLanes,(a&1)!==0?e===Zs?po++:(po=0,Zs=e):po=0,fn(),null}function Ar(){if(vn!==null){var e=Bc(ki),t=Nt.transition,r=Se;try{if(Nt.transition=null,Se=16>e?16:e,vn===null)var o=!1;else{if(e=vn,vn=null,ki=0,(ge&6)!==0)throw Error(l(331));var s=ge;for(ge|=4,Q=e.current;Q!==null;){var a=Q,f=a.child;if((Q.flags&16)!==0){var m=a.deletions;if(m!==null){for(var A=0;A<m.length;A++){var k=m[A];for(Q=k;Q!==null;){var O=Q;switch(O.tag){case 0:case 11:case 15:co(8,O,a)}var G=O.child;if(G!==null)G.return=O,Q=G;else for(;Q!==null;){O=Q;var L=O.sibling,V=O.return;if(H0(O),O===k){Q=null;break}if(L!==null){L.return=V,Q=L;break}Q=V}}}var K=a.alternate;if(K!==null){var J=K.child;if(J!==null){K.child=null;do{var Ge=J.sibling;J.sibling=null,J=Ge}while(J!==null)}}Q=a}}if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,Q=f;else e:for(;Q!==null;){if(a=Q,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:co(9,a,a.return)}var R=a.sibling;if(R!==null){R.return=a.return,Q=R;break e}Q=a.return}}var E=e.current;for(Q=E;Q!==null;){f=Q;var I=f.child;if((f.subtreeFlags&2064)!==0&&I!==null)I.return=f,Q=I;else e:for(f=E;Q!==null;){if(m=Q,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Ti(9,m)}}catch(ee){Oe(m,m.return,ee)}if(m===f){Q=null;break e}var z=m.sibling;if(z!==null){z.return=m.return,Q=z;break e}Q=m.return}}if(ge=s,fn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Go,e)}catch{}o=!0}return o}finally{Se=r,Nt.transition=t}}return!1}function ed(e,t,r){t=mr(r,t),t=y0(e,t,1),e=hn(e,t,1),t=st(),e!==null&&(Gr(e,1,t),pt(e,t))}function Oe(e,t,r){if(e.tag===3)ed(e,e,r);else for(;t!==null;){if(t.tag===3){ed(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(mn===null||!mn.has(o))){e=mr(r,e),e=x0(t,e,1),t=hn(t,e,1),e=st(),t!==null&&(Gr(t,1,e),pt(t,e));break}}t=t.return}}function Cp(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(et&r)===r&&($e===4||$e===3&&(et&130023424)===et&&500>be()-Ws?_n(e,0):Ys|=r),pt(e,t)}function td(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ho,Ho<<=1,(Ho&130023424)===0&&(Ho=4194304)));var r=st();e=qt(e,t),e!==null&&(Gr(e,t,r),pt(e,r))}function jp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),td(e,r)}function Mp(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),td(e,r)}var nd;nd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)dt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return dt=!1,yp(e,t,r);dt=(e.flags&131072)!==0}else dt=!1,je&&(t.flags&1048576)!==0&&bu(t,li,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;wi(e,t),e=t.pendingProps;var s=ar(t,tt.current);hr(t,r),s=Es(null,t,o,e,s,r);var a=Ns();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(o)?(a=!0,ri(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,vs(t),s.updater=xi,t.stateNode=s,s._reactInternals=t,Ms(t,o,e,r),t=bs(null,t,o,!0,a,r)):(t.tag=0,je&&a&&ss(t),lt(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(wi(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=Lp(o),e=Dt(o,e),s){case 0:t=Os(null,t,o,e,r);break e;case 1:t=k0(null,t,o,e,r);break e;case 11:t=T0(null,t,o,e,r);break e;case 14:t=E0(null,t,o,Dt(o.type,e),r);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),Os(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),k0(e,t,o,s,r);case 3:e:{if(C0(t),e===null)throw Error(l(387));o=t.pendingProps,a=t.memoizedState,s=a.element,$u(e,t),fi(t,o,null,r);var f=t.memoizedState;if(o=f.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=mr(Error(l(423)),t),t=j0(e,t,o,r,s);break e}else if(o!==s){s=mr(Error(l(424)),t),t=j0(e,t,o,r,s);break e}else for(yt=cn(t.stateNode.containerInfo.firstChild),vt=t,je=!0,Mt=null,r=Fu(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),o===s){t=Xt(e,t,r);break e}lt(e,t,o,r)}t=t.child}return t;case 5:return Wu(t),e===null&&us(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,f=s.children,ts(o,s)?f=null:a!==null&&ts(o,a)&&(t.flags|=32),I0(e,t),lt(e,t,f,r),t.child;case 6:return e===null&&us(t),null;case 13:return M0(e,t,r);case 4:return ys(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=fr(t,null,o,r):lt(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),T0(e,t,o,s,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,f=s.value,Ee(ci,o._currentValue),o._currentValue=f,a!==null)if(jt(a.value,f)){if(a.children===s.children&&!ct.current){t=Xt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){f=a.child;for(var A=m.firstContext;A!==null;){if(A.context===o){if(a.tag===1){A=Kt(-1,r&-r),A.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var O=k.pending;O===null?A.next=A:(A.next=O.next,O.next=A),k.pending=A}}a.lanes|=r,A=a.alternate,A!==null&&(A.lanes|=r),gs(a.return,r,t),m.lanes|=r;break}A=A.next}}else if(a.tag===10)f=a.type===t.type?null:a.child;else if(a.tag===18){if(f=a.return,f===null)throw Error(l(341));f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),gs(f,r,t),f=a.sibling}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===t){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}lt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,hr(t,r),s=Tt(s),o=o(s),t.flags|=1,lt(e,t,o,r),t.child;case 14:return o=t.type,s=Dt(o,t.pendingProps),s=Dt(o.type,s),E0(e,t,o,s,r);case 15:return N0(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),wi(e,t),t.tag=1,ut(o)?(e=!0,ri(t)):e=!1,hr(t,r),m0(t,o,s),Ms(t,o,s,r),bs(null,t,o,!0,e,r);case 19:return L0(e,t,r);case 22:return R0(e,t,r)}throw Error(l(156,t.tag))};function rd(e,t){return Gc(e,t)}function Dp(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,o){return new Dp(e,t,r,o)}function ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===it)return 14}return 2}function An(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Di(e,t,r,o,s,a){var f=2;if(o=e,typeof e=="function")ta(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case W:return zn(r.children,s,a,t);case ye:f=8,s|=8;break;case _e:return e=Rt(12,r,t,s|2),e.elementType=_e,e.lanes=a,e;case He:return e=Rt(13,r,t,s),e.elementType=He,e.lanes=a,e;case Be:return e=Rt(19,r,t,s),e.elementType=Be,e.lanes=a,e;case se:return Li(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:f=10;break e;case qe:f=9;break e;case Ke:f=11;break e;case it:f=14;break e;case Fe:f=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Rt(f,r,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function zn(e,t,r,o){return e=Rt(7,e,o,t),e.lanes=r,e}function Li(e,t,r,o){return e=Rt(22,e,o,t),e.elementType=se,e.lanes=r,e.stateNode={isHidden:!1},e}function na(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function ra(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Op(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function oa(e,t,r,o,s,a,f,m,A){return e=new Op(e,t,r,m,A),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(a),e}function bp(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function od(e){if(!e)return dn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(ut(r))return Du(e,r,t)}return t}function id(e,t,r,o,s,a,f,m,A){return e=oa(r,o,!0,e,s,a,f,m,A),e.context=od(null),r=e.current,o=st(),s=yn(r),a=Kt(o,s),a.callback=t??null,hn(r,a,s),e.current.lanes=s,Gr(e,s,o),pt(e,o),e}function Oi(e,t,r,o){var s=t.current,a=st(),f=yn(s);return r=od(r),t.context===null?t.context=r:t.pendingContext=r,t=Kt(a,f),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=hn(s,t,f),e!==null&&(bt(e,s,f,a),di(e,s,f)),f}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ia(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function Gp(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}Gi.prototype.render=la.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Oi(e,t,null,null)},Gi.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){Oi(null,e,null,null)}),t[Yt]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$c();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ln.length&&t!==0&&t<ln[r].priority;r++);ln.splice(r,0,e),r===0&&Wc(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function _p(e,t,r,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var k=bi(f);a.call(k)}}var f=id(t,o,e,0,null,!1,!1,"",ad);return e._reactRootContainer=f,e[Yt]=f.current,qr(e.nodeType===8?e.parentNode:e),Gn(),f}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var m=o;o=function(){var k=bi(A);m.call(k)}}var A=oa(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=A,e[Yt]=A.current,qr(e.nodeType===8?e.parentNode:e),Gn(function(){Oi(t,A,r,o)}),A}function Hi(e,t,r,o,s){var a=r._reactRootContainer;if(a){var f=a;if(typeof s=="function"){var m=s;s=function(){var A=bi(f);m.call(A)}}Oi(t,f,e,s)}else f=_p(r,t,e,s,o);return bi(f)}Fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(Ml(t,r|1),pt(t,be()),(ge&6)===0&&(xr=be()+500,fn()))}break;case 13:Gn(function(){var o=qt(e,1);if(o!==null){var s=st();bt(o,e,1,s)}}),ia(e,1)}},Dl=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=st();bt(t,e,134217728,r)}ia(e,134217728)}},Uc=function(e){if(e.tag===13){var t=yn(e),r=qt(e,t);if(r!==null){var o=st();bt(r,e,t,o)}ia(e,t)}},$c=function(){return Se},Vc=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},El=function(e,t,r){switch(t){case"input":if(ml(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=ti(o);if(!s)throw Error(l(90));kt(o),ml(o,s)}}}break;case"textarea":Ac(e,r);break;case"select":t=r.value,t!=null&&qn(e,!!r.multiple,t,!1)}},Cc=Xs,jc=Gn;var Hp={usingClientEntryPoint:!1,Events:[Jr,lr,ti,Ic,kc,Xs]},ho={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oc(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{Go=zi.inject(zp),Ht=zi}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp,ht.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(l(200));return bp(e,t,null,r)},ht.createRoot=function(e,t){if(!sa(e))throw Error(l(299));var r=!1,o="",s=sd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=oa(e,1,!1,null,null,r,!1,o,s),e[Yt]=t.current,qr(e.nodeType===8?e.parentNode:e),new la(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Oc(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return Gn(e)},ht.hydrate=function(e,t,r){if(!_i(t))throw Error(l(200));return Hi(null,e,t,!0,r)},ht.hydrateRoot=function(e,t,r){if(!sa(e))throw Error(l(405));var o=r!=null&&r.hydratedSources||null,s=!1,a="",f=sd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=id(t,null,e,1,r??null,s,!1,a,f),e[Yt]=t.current,qr(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Gi(t)},ht.render=function(e,t,r){if(!_i(t))throw Error(l(200));return Hi(null,e,t,!1,r)},ht.unmountComponentAtNode=function(e){if(!_i(e))throw Error(l(40));return e._reactRootContainer?(Gn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1},ht.unstable_batchedUpdates=Xs,ht.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!_i(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Hi(e,t,r,!1,o)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var Cd;function Q2(){if(Cd)return ha.exports;Cd=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),ha.exports=Lg(),ha.exports}var Z2=Q2();const Zn=n=>{const{title:i,open:l,padding:u="16px",closeOnBackdropClick:d=!0,theme:p="totamjung",portalTarget:h,onClose:y,children:v}=n,{modalRef:x,closeButtonRef:S}=ug(l);return ag({onEscKeyPress:y}),l&&Z2.createPortal(c.jsxs(og,{children:[c.jsx(ig,{onClick:()=>{d&&y()}}),c.jsxs(sg,{role:"dialog",$totamjungTheme:p,ref:x,children:[c.jsxs(_2,{children:[c.jsx(H2,{children:i}),c.jsx(z2,{onClick:y,"aria-label":"모달 닫기",ref:S,children:c.jsx(hg,{})})]}),c.jsx(P2,{$padding:u,children:v})]})]}),h??document.body)},jo=n=>{const{children:i,theme:l="totamjung"}=n;return c.jsx(lg,{$totamjungTheme:l,children:i})},Og=g.button`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({$width:n})=>n||"auto"};
  height: ${({$size:n})=>n==="large"?"40px":"32px"};
  padding: ${({$size:n})=>n==="large"?"4px 6px":"2px 4px"};

  border: ${({$size:n,$color:i})=>n==="large"?`3px solid ${i}`:`2px solid ${i}`};
  border-radius: ${({$size:n})=>n==="large"?"6px":"4px"};
  background-color: transparent;

  color: ${({$color:n})=>n};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 10px ${({$color:n})=>n};
  }

  transition: 0.2s;
`,bg=g.span`
  font-size: ${({$size:n})=>n==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,Gg=g.img`
  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  object-fit: contain;
`,_g=g.div`
  flex-shrink: 0;

  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:n})=>n};
  }
`,Ce=n=>{const{name:i,size:l,width:u,color:d,iconSrc:p,...h}=n;return c.jsxs(Og,{$size:l,$width:u,$color:d,...h,children:[p&&(typeof p=="string"?c.jsx(Gg,{src:p,alt:i,$size:l}):c.jsx(_g,{$size:l,$color:d,children:p})),c.jsx(bg,{$size:l,children:i})]})},Hg=g.div`
  width: ${({$width:n})=>n};
  max-width: 100%;
  min-height: ${({$height:n})=>n};
`,zg=g.p`
  font-size: 16px;
  color: ${({theme:n,$totamjungTheme:i})=>So.includes(i)?n.color.BLACK:n.color.WHITE};
`,So=["none","solvedAcLight"],tn=n=>{const{title:i,width:l,height:u,open:d,message:p,actionType:h,portalTarget:y,theme:v="totamjung",closeOnBackdropClick:x=!0}=n;return c.jsxs(Zn,{title:i,open:d,closeOnBackdropClick:x,portalTarget:y,theme:v,onClose:()=>{h==="yesNo"?n.onNoSelect():n.onClose()},children:[c.jsx(Hg,{$width:l,$height:u,children:c.jsx(zg,{$totamjungTheme:v,children:p})}),c.jsx(jo,{theme:v,children:h==="confirm"?c.jsx(Pg,{theme:v,onClose:n.onClose}):h==="cancelConfirm"?c.jsx(Bg,{theme:v,onClose:n.onClose,onConfirm:n.onConfirm}):c.jsx(Fg,{theme:v,onYesSelect:n.onYesSelect,onNoSelect:n.onNoSelect})})]})},Pg=n=>{const{theme:i="totamjung",onClose:l}=n;return c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:So.includes(i)?H.color.DARK_GRAY:H.color.GOLD,disabled:!1,onClick:l,autoFocus:!0})},Bg=n=>{const{theme:i="totamjung",onClose:l,onConfirm:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:So.includes(i)?H.color.DARK_GRAY:H.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:So.includes(i)?H.color.DARK_GRAY:H.color.GOLD,disabled:!1,onClick:u})]})},Fg=n=>{const{theme:i="totamjung",onYesSelect:l,onNoSelect:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:c.jsx(ko,{}),color:So.includes(i)?H.color.GREEN:H.color.LIME,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"아니요",size:"medium",iconSrc:c.jsx(Io,{}),color:H.color.RED,disabled:!1,onClick:u})]})},Ug=g.p`
  display: inline-block;

  width: ${({$width:n})=>n};

  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n}px;
  line-height: 1.2;

  ${({theme:n,$type:i,$color:l,$fontFamily:u,$fontWeight:d,$opacity:p})=>i==="primary"?ne`
        font-family: Pretendard;
        color: ${n.color.GOLD};
        font-weight: 600;
      `:i==="semiPrimary"?ne`
        font-family: Pretendard;
        color: ${n.color.LEMON};
      `:i==="normal"?ne`
        font-family: Pretendard;
        color: ${n.color.WHITE};
      `:i==="gray"?ne`
        font-family: Pretendard;
        color: ${n.color.LIGHT_GRAY};
      `:i==="black"?ne`
        font-family: Pretendard;
        color: ${n.color.BLACK};
      `:i==="code"?ne`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${n.color.WHITE};
      `:ne`
      color: ${l??n.color.WHITE};
      font-family: ${u??"Pretendard"};
      font-weight: ${d??400};
      opacity: ${p??1};
    `}
`,Tn=n=>typeof n=="number"?`${n}px`:n,pe=n=>{const{type:i,fontSize:l,textAlign:u="left",width:d="100%",as:p="p",children:h}=n;return c.jsx(Ug,{as:p,$type:i,$fontSize:l,$textAlign:u,$width:Tn(d),$color:"color"in n?n.color:void 0,$fontFamily:"fontFamily"in n?n.fontFamily:void 0,$fontWeight:"fontWeight"in n?n.fontWeight:void 0,$opacity:"opacity"in n?n.opacity:1,children:h})},$g=20,Vg=n=>{const{textList:i,typingTime:l,idleTime:u,erasingTime:d}=n,[p,h]=w.useState(""),[y,v]=w.useState(0),[x,S]=w.useState(Date.now()),[T,C]=w.useState(!1),j=l,M=l+u,b=l+u+d;return w.useEffect(()=>{if(!T||i.length===0)return;y>=i.length&&v(Z=>Math.min(i.length-1,Z));const $=setInterval(()=>{const Z=Date.now(),U=Z-x;if(U>=b){S(Z),v(q=>(q+1)%i.length);return}if(U>=M){const q=i[y].length-Math.ceil((U-M)/d*i[y].length);h(i[y].slice(0,q));return}if(U>=j){h(i[y]);return}const re=Math.ceil(U/l*i[y].length);h(i[y].slice(0,re))},$g);return()=>{clearInterval($)}},[T,y,x,i,l,u,d]),{currentText:p,startTyping:()=>{S(Date.now()),h(""),v(0),C(!0)},stopTyping:()=>{h(""),v(0),C(!1)}}},Yg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",Wg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",Qg="/assets/lock-with-clock-DphQokL3.png",q2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",Zg="/assets/tier-1-badge-CyfFUTea.png",qg="/assets/settings-title-BAsh2fbw.png",Kg="/assets/guidebook-button-DB51pF_8.png",Xg="/assets/info-button-gVHj_-G9.png",Jg="/assets/totamjung-BrXdXI1T.png",em="/assets/logo-square-Ly45EudP.png",tm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",nm="/assets/wood-background-BTxo82aE.png",rm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAC4CAMAAACRpFNtAAAANlBMVEVHcEzQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3FD2FoDAAAAEXRSTlMAQgWMDvDi0HIZpVn6vCUwOp++H4kAAA8xSURBVHja7FwNk6yoDh0B+Qbp//9nnwhqgKA9LT1vt2qt2q17x7lqSE5yEkJ+fv67/rv+u/7yIoT8mz+fqWUyklKttXNaUyrNFBT7d6lABUmd4POrvOzMnZaT/3coiAWpRS3CLkn83yqNnNQ/XgrqOkIU8syC/oNlIV6+IcV+rbKEaxtjRv4/hCWT5tWncpFQLlfMUx1BY4tf4NpcgX+aX/TP4cQmPRfL7aiZvGKb593+I4z5YCr8WGf6iy5fL6H+XBvn51m+eiZFLjyaFhaKwvqCzNOfyhGAGKu53LpXogw9ZbFuwv8BXW/KPxRD0QMbs5PvBgllTulnvWDi6vWW/jOQECPO75l+E7hJOFdASNZqLd7lf+W4FN3Xld95U+Tyhyi2Ugrbbc8K8xdKmdyhjfDR+05RePHB5kSd8N83K8lv8PrGtexYmSmwouVwBrNm3zer/DIu2QiUWQfW3q+ObTO56etyeI2b9wOgiVDFkReHz/4OWIK7UwdRMZRHehJpigmedb8kK8VyU1KUFwdKMjR8A+bZHgQee9liaEmu1mREaNmLlrt6oSSeFxzFi5cbb2YTz2bl8ZTEcYtz3pW/LMjnEJbNaz4lIavOwacvc2loQ+Wg7TeR5Y7Mx/jfd4GzhCABkX21NGu+Y1ezJAgL5veJlUWjp+GVTrwAUv0Y+4x6BdpgbBG1FWAsOGcka0oS6w91MsKRCJrX58TJAn0vfUa9/GqoYml+VOGyZcEv7qjcMpL0byZjYkEC/gL1PUlCj0O6z5lX9IEvWliPxvUBWPCakpgC0mSZtisKAyh/47mD6LIS5eqw8kvLiu+FiRqhuByABbvGyaokxxSiMGcuYl2obTMtBkJLlnjnAdpZXAiYqCU6ZyucAxaMkAoSJniZ0681SslssU3WzSb9A7RLWwiycOxF/mDBmDsiaqov6ezOCSuzlzOi8DU/Tm8QRn2Kd6Vn8DKWnleBbhKXLLhSSBZlN0VX2n02XQgTJsXh8mIV6VNJprPSQWR6y4IFACTP6ylkvZbDOVQsJ68VgIkpA6wbkDQG3uqdJGPos2BUIbHQuCuST0iYArgOYrQgabFsCZAsx0xZV6XIFdjGoC0WkpIGTuNaWc9RDrNCD+DA0rYrkvXOu6k1rpBlI5c7Eyh1kmFSrFeqRaxebkQt328qLotmWQ4xXWCsY1nbneS2bRnMsRcl6cYQ+bxQCA0WfXXvQb21rHQnW2YZzFPQKMOi7ETKD8oE20cX5VgvMC/2hkIWslkWkKT4xESDSqeykaUhBTv6qklCpl0X+ugo5LCs6bCuEhLJPRaGFBPG0hzeLrCXxG9pn53Af1lpxhVyWtYmiW3WnzSrRjaX+QFFWXPPlcQuVwrBosp7Ctl81vlX3cKkXbYo2yekcTNJYLm+eXIOwZebMbhCNsvygEUiT6KNslf9fy7IWY6RjUKwqPKeQiKxhOElpHy9+OykEgju9SefCJLKGodGtrymUEhSEZ+ucYZevtFVgkltSWUmtVrARxs/ylBHl1JBsokql+jrKYRt+XhxJfIjG5OQRe72YRghoDSoazgiUQUpcN0FkZPVbwkgfBxrbOBnQOOEEnVQb50YwmnegjrwXIVK5K1v/+DaOIOdKoTYa+rTUcgG9droguEoCC0dKwit7UjehpCuQjzultsQqMfRxK5lpR9cv6Tg77Esn3uEWMcLNP52M4N5aAl+8yDQspKpmZsc+YSy3rJuuzUIyYVgRqcaf5sc/NAdarnlDMCy9L3LOle9rmpzirKWUPtb4l6Dd6iTtYIntk6srxCj2+I8IopCMCHvl+sTiMjaeqc3oB6kQLcWKBIkZW1b01OQqNjDB0pUm9Lhdycn9o7vNaKzSUJbV5ZirKkd8Odl0lT/BCxqUwCASAq69A2F9OSIZYSGtTSYIG+85439KFkqABjvGyuVfa/ub/foWiE7Jqo9kQdoT4KcH5pQSCuIcH8PdXmxCTcbIAhLtXhbgUTem/A1g+erv6dVwVdWz7+Mhsn39g1rIx8ljcQ0vcUv/nkPBwsGNrVuTgs8P3vjW6gHaq+2Ek/bCqqzYsv8PLaTynmAxzXv60G9UAiPDY4wNOpaIe0KqYduC9u1AqZba6gHdYgQq038YC8QQQKD4LbuXEMmKoc8gGkBS00aui8C0dqOPIHGpmF+goP7Dd3/OhkBTCFZ7nJLs4DvFWZbebjTMcvKsJA3Nf7yoSDVOt36khzVXa2QAJsJuGkUkjgJfPJYQZK3JdXr1G1GJUqNBAXDo9UgYSzR6OuICJXtPRsryAUp3TMqVwYNP6EKKeqLm9FeCLJQwbUfJAi5E0QVldC8X7ZGb4mRxsB+IcgiHoH/l6Z1ZFTQRbkV0xSLhr519H1B6H2R9lYQQSqwq7viSTAcCqJ+KGJYhUJ+QgX2JDstv4RPz9wv6wbIbvHkVImNjQTSXrosDH2V11rczPXnHa1NHOFXDAgWT/T+6duphACiCG1iSPynt3FETcuD8lAdN64ZECxZmdSGZp2JJgT5icMU0tDqwZE9rqQFkZxd+g5YsgqT1C6dJfk5OzDTNnCrkAwJ4G0Hc62UJkzvEYeqZBVOTLMAWKTDFNKk0Kp685AiiqmcoiO/qJPmMqkr3W/dSaTq6kOYh9YaG0u9SHXxPod981PORenBY2CE3/1GTv2rq853wtzVuLquW+/dvbSNIVhBrsmp2bMtkvp5qov2zh7VWbemYp7jKURMIU1B86f+weSe9dQYlF1j1Qd8S8TD7UQppZlQhfh6fWqb3v7+pMupaYw0r05s9z2FwDvh3Gxv1wtmnvV7N0t40lfeBI6lU/DvtDS1e4bGHKWTixK/qepcW6b8qO9MV/6WONy21DsKmeJBBqGbBq+0HdLsU8K3KOme9Z2ZVwUSfKMSh/pStQeY1DfXtKo1z8RKzOzZbkkDEs+xqiwOdVapameSHGvKhOu/pVljTyiwZu+IYk3svquQpdpRRxKktkNZvsaGw/O7fRWEq09hvXbSopXjTFKKbDmtVdHuO3znbf9uqOXc4xZuoR5qqANBfKMQWifwo0/rtqtTt0H1oO5rr3wKAh1pIgtFjJCvh1Gjb1uwuti2HfYVUtw5Mnl4UCC3eNOGcw8/dZz0TGtrK9qMe71y1Z39YAM8P5lqkK2tDT9VlRWAHCQ58H4B9eoOjUfiirPfqu1ySjG3qp6NUE/rHX3Zw+7fgvp+sKeYKJLXpGAKU2MCP8xQ+dwZJ75VqCTJloMJC+9E9bM7oFikuQmQidKXUI+/Jp7nvbLpmGOwO9Tf9vc2W4bH4vPGsHanSBrZnp8KT16keE42ruhGr1NcRLyfqqCLtmIXYYqM6kST3dZ4re47x2vgnKvhkLZ0MyO+V0WWxp+XInLMKh6UqglWK/9+01+Z4mY5yoXGXhWPBkkh5ADPJdszBPumoO53jl8rZHHYacBe1Z0oNcID5wM9xTsZBZuE7zX9QajnXa3qNGAKj/x7wx5yd/ZSGi7WJHNY1iXUidlPYRdyIOFx8JUDV9lGnJ1wHIuCtJMiUD8+ej+FWZ/ORMLj6Cv723KtWMaJdbK1rD7UyV5ArU+TI+Fx/JVeUvlytldCuTZ4WQ6But+5Y52757Dy5alB+7nN6jTnTs2toKYAdQ/q6ugQrDmHcq/RnYx4MEHPuB4zOaAofaifYjRDI3YvyL8+aSfgB7XP49O7KGlLpFUICVS8eqNhyLHPOMtvS7If1K4/YXL2PNG+yrKgUAdHwJFDsQRsBc3yyzNq8qK1EziU5MWsPLOopcpCtpOq9mjraL50P5Q4I9Fl/JXNGJklcs5mSiNdhHB6G1RD0/gK2IcmkMlZWQ7ntz/YmU7fneSUgzk2FcVT0YyYtG1DoBVIqrfb1eoS8x/XpfjuoLDsul4aeYu6H9a4hhuFKXo+j2eeDt2Fr+Bj8ZB719MB9iqEdN0pL3Y7rYCq2cJjpkyfHVLjobKuU67h7Dq5moHUDGWd+erNOse4F1dMpmKgIYePd8Qrj99J/E56u06SMD+ZODDTiXjFFlPT7Rk7hoVlOfIMspnfnPn/GBv8zHb2eWf2sg+MxImZjCnv/cV+LBhGMgEz42bR2dWrwZY1A3Z9UEVhni0Yga12cWpC1nb8Y/YAVg+UJA9qOs98n57l0fC2gwZvbtpy4zUYBLFPq9LjIsrekQiwd1BF/rHu2UmDTTJWLko3kpfLjZKETMccDIUY92eRi5mDoK1aha4KuMNJNDMDn5mWTMOLOKRA5wRQ+3tR1ClGosGnJMXQglyhcIO2SgjZwqCuGhZOE38JuvzC43t5TnXa95x3SapwvoyVZKsKWGTM2cnfcfKBKWNa+SVCg/PW7oKHy2E6MRZpniIAsNskmbuBv0TF1hpwlE/VFZR2m2qwJCve8aqZgof0Ip2aOkGcqUlqOPqQ06XdhkHOAKMV4ifVoF61CVh8FkbLNUvcxmLH8K7UEuLgtiopoQv6wbwniR0jCTF6uvJBczPGkK8sK14r26pnlHfmNU69CQy7TsIYz3V5N1Dx7uB4Kyg+NzbnVGLq6uQrCUrLY94Z5R8T+v+1dybIDYMwFPW+AF56/8vWMRJuGolkJob2e8IJ/EYIiS9ZjFplk45g4XtPtckLLLdpWJ3TIcyTpxX0QT4s3uUbwr5drIZdbgh+4dq22w6A2q7PKxyU/Qp+Tflkn3ec/HYLWW8DM/dly3UZX2228iROJ+nykryt0wgko1Hmj/7TNRvthCJrgZGIHm9cHpX7LBI1atD5nF7lPtlPBJuAkei7y9vEuaFBJ2FtuAYjKYV7d5tC8EruJ6VqE4NBUkVI7OmC1x/ZJAheCxSJlF2xTLRehaQvUUiclicu0xdSutLoJDyMHyTIU3YlkZC5WpAgP0ZIagcU5CvOeAVnSFELSr+7JJIq9BlAkQhuzUEeJKDQFhJvIVgBhTJe0SZrjxRQIiShf3hAIhFvhjMFFJBjmGwifS0HFJBjOELCHQwgNxSr39a5uaBG8JOKg4boC75YDhIZiUT2hb0XA0ZciZEMLsVfmGlJhE5EshYMSPgl6rczeG93Nc7L9qw7zEKUgXERjQSSIzyldKhaITvG4nhoGUKrmjwmvF6sH3E5mGQvarGYYhE5frRChFovJsfRCjFh1awlm9xNgyuKK5BgcxxN+rl6hhKS7IGwXwr41VgzmQtwFPePCaGjFJ/1WfnWNw9tf/5FurfGAAAAAElFTkSuQmCC",om="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACACAMAAADeUGBWAAAAPFBMVEVHcEzQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3FkF6GlAAAAE3RSTlMAGAUNjMr7Tzq8J/V47GOr1uGaL54SGAAACS5JREFUeNrFXOm6oyAMLYuAgLi9/7sOLiCVBKnXdvw1322rx5OThRDm9foPFyOa/ekGRDpJHgZFNW+bSdH7d1BtJ7pePQtLt7O/BvnHG8ytfpQsLra73raCM+sNhH0SFtnedTZ36aJ2u8HcPCkv0ux3vf2yAVanvsDWPN0VvTT7HdyT2poCrLtBQg9zvbgoUUoRWm8DTm87zW5EeQ3J9k3Xdc1kL6Gpse6mhTts8uxJGZKbmk7sHAgPzRWDOLPd4og8vSn9jDnZdqYQTynTjjdjgBQuMbZc4tCY65vWHqiYstyqj5Sm8ezDtOTtaGbwEmboHWpPRpJPCPfvJQbHHnAnb7l+6ObiJbqFNAhZ+je2R/3xr1FotVwn5pprJa3Igxz3l+D0LzRJi1oOpGxRmpW4e9r9/cTtOOZp8j63PAqBgDKIuyeNsCy9pyZPkyhYy3Pi9YYSKcbexzTAiLtCB/U0TSYGhM07cdIAHyDT+vXB0Tz80IsIPpYEPvI3US/hFXfSbjibU9tmHPJq1TPRc6cIFpsunU4M00nSZcc4m5NpletOt2YLzPYEeKVpqHM60/DzewXD4yGtlDzJFL/7Zl7iRVIZm4Ju7PmdKSkprZg81ZAY43AG1XeFCDk1BjaOy4I6U7h7CjzY7mXGKdCqppRPGNVygp7lnzPlKXQTKC40KBvqFEAItGxCaEqkuiAToG2AaqDozmYiQPWTvHVgK6UwPi2rVbyo+xGRGWCaxQdgc0J5x9cVMQDJcxEfftciRacvldoOykKQzJYFNWxOaHFG1eYuYrQMgWUaqynaD+AgB3k0S8x5/kFcBfkFwfEk7y58OoinZ1j+9SEtRw4crBsfzcAfaXu2fcuOanhAy2lpkMBEUWSgMSGZebvneWNfIG/RCi1xpEGcGafMP46D0Wzu+iNqLsRC8DdYIQCM8iNYqJPFoA7HDP86qwNgnwdYsT1hy7AMJBnYybYSHZfZwJ1t0Lfd2QqwXBnW4AsBU5WYL2OG/1UhoW6wQqU66AtYZCEeev2SMb2X88ZUZffmXfKkXx41OnoJa/MyU5mYk2g2XdREK+X81Koirm/x/uUbrBemVVE05lJeDqJUOfrv8KyDxgqV8hkWHphKxmRqggk7eOYfNfZyWChlmDFX5V9VGPQBWGswBCnLqiy2xQmBGi9cj8BCY7lIOVjqUbi06s680qdgbbEcfOpiTLKvE0FUwmYqfA7W2tWC9S+GYntCSKzd+AisTyLmZmIM1utpWIUqK3NU3v2MrXKVlejN12iq+yFbF1VWEmrDguVXbJXCbBL+Y3vf/YwtcGW2NjRI6JDSuMvjfslWzDXBmMPCEwV2eexv2dqf3u/P6E9RMxSdM/8DW0sP7has+OotBivfE6uF5T1rmpy9BctisCKN9CZbzC1eY0JF8hkshzyD9gjearaSbtd9WOcVQthBFBmsSrb2ru8RpN0nAwtu//GIwLrL1ltTKWlpVfbxpUD2kNE97zq21Ag2AJvSLlwNrEBj/vAqWBZvcdeQFmCZEywaPsiWpVVs0am41mymC9Jii0AiH+R7czWwYnxB97oW0th9WGca69iKKXVA+8IhC8PS7K5gyTts6aB4u+6NFDaUHKgzFBZaB1axFW/rtmUVvjfil18E/71AYbk7bLmTgzNPWo8sZQTQS9dYFRo/cHfY4kDyQDeUgNYYCiuIVtzRFpZR4Z0ykVcpsTg+Pz32RO94YnREYFSIaXkmrWevalL23fvpTk48HLGwpy/yDn8OywH1khFdr+9UpxL2l7QPtnQ9BAoeh/Wiylmod14BK9Yl6n0epn8LBrJDJc+a0rgXOD1SAYvntR9VvVna5BSPIpA468frrmGx3BGZHc5Dj5QjJWjKVjWsCrZyRyTcZBDiKqZlD8CqYCtkiEMZcYsl+VGITdAIXWGZep+tPM3bOWcGT2+lZeof2LJnR6R+GWTW6J6EqILiI1uCP8dWLE2Pb1Bl5QI2Zaag+K+wxaAOAl3BJoGM4SvR77AVHfFNy+tf2zrFf4WtuBhzWUJKIOTuCnnig2zB9bY9/SUqHtq2/QZbcEZsT+ouKf4rbIFfWC2b+EBR8d9gC36gO4UHMpSGyr/AFliarlhTq0bFg+nlC2zF0jSFtYaDlL79FAQyvf0FtiIP6WjEisK+KhX/DbZcLNKPkbf1XdLkV1b8N9jiyZKGpD9Kz73oouK/wBbt01E8dqyjRlcsyb7MFklH8bowHsGklQyofZCTLM+zFdfp60IQGS+OtQ/SgGYfH5W5YitmRLvS1ihwJ2FAF9Q3YV2xdRw0WtflIjs2RtMZEKRWD7DEx7AEDCstTV2XHVZZpm2TzUzs9NfnbOm2yD9LPmbbMiz0r2g+zDrqZ2BpG/mHDzwcXVO1tH3EFiYYUdIBh1Na9gQsYpujzwKfLIhxcsW1brGIru+bsUsmLcx8Uap/Aou4BBR24OGAteLSPTRExwW6Qf8pLOLat4YxcnAr7chvuEQ2Qh5PK6IHcg6F0itQJ11MSEqUyW5P4xWtw0iFGZt+Ow4DLCRvwcpBmQk9xSqTjcQlOxM7eECTlYqwzSHjrDr60Bi3CrC0O49NmLZ0TEu17/PpTGuy9QGXEGGnoz+JHhO6Zkun3rcHUlfeSk10fvTZmFbOIzLpzUyP3IlewAJADfbyFHKCq3Nbd9n2AzRIZ+DpZnyrfM1eGai5AlSaCpY5WHTmfo8XNh/DZD2aSmgS0eMzuK7MBkfVNQ5XM1DjpFglLAjUWAvq5I/Xw2Jd/1YkYrCo5tltB/7RmX3XfXCyZznHkqqfgr0oxcf5rvniTawpgAC2P5fjEAVYj4B6YUdpPKKWO6WJzI+qiGiQbC+LqWmc85Bw5xxilqZ3RPsWC1OZUITYj9yd2GIyO0ggGnv3f0tIwoSH5BOifh9+hgKQd0uv/je2yAJKPAVqTUPiOBTHwL0yl0+qe7cMA1yiZTr/xt9ALXzxZjVcYUeU5AbysT+Yt+EZn+Yq99X4I9GXIyJM5nLO/pFUCeRFXz+5vPMPVQcYTevI64cXqP58akL+FNRe1rXF0ebFE17/44LUf8wOS/b6TxfFgOU1xo8vKMs097LMV93SO59+/X9Ur7cp9dLBvP+j/rEbW/ufJQUAU1I9QdQ/65PRPTw+Zi4AAAAASUVORK5CYII=",im=at`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,lm=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,sm=g.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:n})=>n.gradient.BROWN_GRADIENT};

  z-index: 0;
`,am=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,cm=g.img.attrs(({$scaleX:n,$scaleY:i})=>({style:{transform:`scale(${n}, ${i})`}}))`
  width: 160px;

  transform-origin: bottom;
`,um=g.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:n})=>n.color.GOLD};
`,dm=g.div`
  position: relative;

  text-align: center;
`,fm=g.span`
  margin: 0 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,pm=g.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:n})=>n.color.LEMON};

  animation: ${im} 0.8s infinite forwards;
`,hm=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,gm=g.span`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,mm=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,fl=()=>{const[n,i]=w.useState(null);return{activeModalName:n,openModal:d=>{i(d)},closeModal:()=>{i(null)}}},va=20,vm=n=>{const{onShowComplainModal:i}=n,[l,u]=w.useState(0),d=()=>{u(y=>{const v=y+1;return l===va&&i(),v})},p=Math.min(1.5,1+Math.max(l-va,0)*.0025),h=Math.max(.5,1-Math.max(l-va,0)*.0025);return{increaseClickCount:d,totamjungScaleX:p,totamjungScaleY:h}},ym=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],xm=n=>{const{open:i,onClose:l}=n,{currentText:u,startTyping:d,stopTyping:p}=Vg({textList:ym,typingTime:1600,idleTime:3e3,erasingTime:500}),{activeModalName:h,openModal:y,closeModal:v}=fl(),{increaseClickCount:x,totamjungScaleX:S,totamjungScaleY:T}=vm({onShowComplainModal:()=>y("totamjungComplain")});return w.useEffect(()=>{if(i){d();return}p()},[i]),c.jsx(Zn,{title:"토탐정 정보",open:i,onClose:l,children:c.jsxs(lm,{children:[c.jsx(sm,{}),c.jsxs(am,{children:[c.jsx(cm,{src:em,alt:"",onClick:x,$scaleX:S,$scaleY:T}),c.jsx(um,{children:"토탐정"}),c.jsxs(dm,{children:[c.jsx(fm,{children:u}),c.jsx(pm,{})]})]}),c.jsxs(hm,{children:[c.jsxs(pe,{type:"normal",fontSize:14,textAlign:"center",children:["버전:"," ",c.jsx("b",{children:`v${Ae.runtime.getManifest().version} - MV${Ae.runtime.getManifest().manifest_version}`})," ","/ 2026. 2. 1. 빌드"]}),c.jsxs(pe,{type:"normal",fontSize:14,textAlign:"center",children:["개발: ",c.jsx("b",{children:"요술토끼"}),"(",c.jsx(gm,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),c.jsxs(mm,{children:[c.jsx(Ce,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:H.color.LIGHT_PURPLE,iconSrc:tm,disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),c.jsx(Ce,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:H.color.LEMON,iconSrc:c.jsx(Tg,{}),disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),c.jsx(Ce,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:H.color.WHITE,iconSrc:c.jsx(Eg,{}),disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]}),c.jsx(tn,{title:"왜 그런 짓을...",width:"350px",height:"auto",open:h==="totamjungComplain",message:"그만 좀 두드려 주시면 안 될까요!?",actionType:"confirm",closeOnBackdropClick:!1,onClose:v})]})})},Am={LANDING:"https://wzrabbit.github.io/boj-totamjung"},wm=g.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,Sm=g.h1`
  width: 130px;
  height: 100%;
`,Tm=g.img`
  width: 100%;
`,Em=g.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,Nm=g.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:n})=>n.color.GOLD};
`,jd=g.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,Md=g.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,Rm=n=>{const{selectedCategory:i,onCategoryChange:l}=n,[u,d]=w.useState("none");return c.jsxs(wm,{children:[c.jsx(Sm,{children:c.jsx(Tm,{src:qg,alt:"토탐정 설정"})}),c.jsx(eg,{selectedCategory:i,onChange:l}),c.jsxs(Em,{children:[c.jsx(Nm,{children:`v${Ae.runtime.getManifest().version}`}),c.jsx(jd,{type:"button","aria-label":"도움말",onClick:()=>{d("guidePageOpenConfirm")},children:c.jsx(Md,{src:Kg,alt:""})}),c.jsx(jd,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{d("totamjungInfo")},children:c.jsx(Md,{src:Xg,alt:""})})]}),c.jsx(tn,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:u==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(Am.LANDING),d("none")},onNoSelect:()=>{d("none")}}),c.jsx(xm,{open:u==="totamjungInfo",onClose:()=>{d("none")}})]})},Im=/^#([0-9a-f]{6})$/,Vn=(n,i)=>{if(!Im.test(n))throw new Error("잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.");if(isNaN(i)||i<0||i>1)throw new Error("투명도는 반드시 0 이상 1 이하의 수여야 합니다.");const l=parseInt(n.slice(1,3),16),u=parseInt(n.slice(3,5),16),d=parseInt(n.slice(5,7),16),p=Math.round(i*255).toString(16).padStart(2,"0");return`#${[l,u,d].map(h=>h.toString(16).padStart(2,"0")).join("")}${p}`},km=g.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,Cm=g.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,jm=g.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:n})=>n.filter.ORANGE_FILTER};
  object-fit: contain;
`,Mm=g.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.ORANGE};
  }
`,Dm=g.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:n})=>n.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lm=g.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:n})=>Vn(n.color.ORANGE,.25)};

  z-index: -1;
`,Nn=n=>{const{iconSrc:i,title:l}=n;return c.jsxs(km,{children:[c.jsxs(Cm,{children:[i&&(typeof i=="string"?c.jsx(jm,{src:i,alt:""}):c.jsx(Mm,{children:i})),c.jsx(Dm,{children:l})]}),c.jsx(Lm,{})]})},Om=g.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:n})=>n.color.GOLD};
`,bm=g.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Gm=g.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,_m=g.div`
  display: flex;
  column-gap: 6px;

  width: 420px;
  height: 100%;
  margin-right: auto;
`,Hm=g.div`
  & svg {
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,zm=g.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:n})=>n.color.WHITE};
`,Pm=g.div`
  display: flex;

  user-select: none;
`,Dd=g.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,Ld=g.img`
  width: 30px;
  height: 30px;
`,Od=g.p`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:n})=>n.color.GOLD};
  }
`,Bm=g.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,Fm=g.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:n,$backgroundColor:i})=>i==="brown"?n.color.BROWN:n.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Um=g.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,$m=g.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,Vm=g.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:n})=>n.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:n,$isChecked:i})=>i?ne`
          box-shadow: 0 0 8px ${n.color.GOLD};
          background-color: ${n.color.GOLD};
        `:ne`
          box-shadow: 0 0 8px ${n.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Ym=g.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,Wm=w.forwardRef((n,i)=>{const{isChecked:l,name:u,ariaLabel:d,tabIndex:p=0,onChange:h,onKeyDown:y}=n;return c.jsxs($m,{children:[c.jsx(Ym,{checked:l,name:u,"aria-label":d,onChange:h,ref:i,tabIndex:p,onKeyDown:y}),c.jsx(Vm,{$isChecked:l})]})}),Qm=w.forwardRef((n,i)=>{const{id:l,name:u,isChecked:d,backgroundColor:p,tabIndex:h=0,onChange:y,...v}=n;return c.jsx(Fm,{$backgroundColor:p,children:c.jsxs(Um,{children:[c.jsx(pe,{type:"semiPrimary",fontSize:16,width:"auto",children:u}),c.jsx(Wm,{isChecked:d,onChange:()=>y(l),name:"algorithm",ariaLabel:u,tabIndex:h,ref:i,...v})]})})}),To=n=>{const{count:i,shouldResetFocusIndexOnItemChange:l=!0}=n,[u,d]=w.useState(0),p=w.useRef([]);w.useEffect(()=>{if(l){d(0);return}d(Math.min(i-1,u))},[i]);const h=w.useCallback((x,S)=>{var C;let T=S;switch(x.key){case"ArrowLeft":x.preventDefault(),T=Math.max(0,S-1);break;case"ArrowRight":x.preventDefault(),T=Math.min(i-1,S+1);break;case"Home":x.preventDefault(),T=0;break;case"End":x.preventDefault(),T=i-1;break}T!==S&&(d(T),(C=p.current[T])==null||C.focus())},[i]),y=x=>{d(x)};return{getRovingProps:x=>({ref:S=>{p.current[x]=S},tabIndex:u===x?0:-1,onKeyDown:S=>h(S,x),onClick:()=>y(x)})}},Zm=n=>{const{items:i,checkedAlgorithmIds:l,onChange:u}=n,{getRovingProps:d}=To({count:i.length});return c.jsx(Bm,{children:i.map((p,h)=>c.jsx(Qm,{id:p.id,name:p.name,isChecked:l.includes(p.id),backgroundColor:h%2===0?"brown":"light-brown",onChange:u,...d(h)},p.id))})},qm=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  width: 100%;
  height: 100%;

  user-select: none;
`,Km=g.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.GOLD};
  font-family: 'Do Hyeon';
  font-size: 22px;
`,Xm=g.img`
  margin-bottom: 10px;
`,K2=n=>{const{imageSrc:i,imageWidth:l,imageHeight:u,title:d,description:p}=n;return c.jsxs(qm,{children:[c.jsx(Xm,{width:l,height:u,src:i,alt:"",draggable:!1}),c.jsx(Km,{children:d}),p&&c.jsx(pe,{type:"normal",fontSize:14,textAlign:"center",children:p})]})},Jm=at`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,e3=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${Jm} 2s forwards infinite linear;
  }
`,qa=()=>c.jsx(e3,{children:c.jsx($2,{})}),Eo=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force","무차별 대입","무작위 대입"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:["소트","소팅"]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:["수학"]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:"Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬","imos"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap","pq","우큐"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우","네트워크 플로우","network flow"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:["냅색"]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:["gcd"]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:["어쩔FFT"]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix Array And Lcp Array",tag:"suffix_array",alias:["서픽스 어레이"]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:[]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle","밋 인더 미들"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열 문제",englishName:"Longest Increasing Sequence Problem",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:["egcd","gcd"]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시","벌리캄프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:["외계인 트릭"]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"다항식을 이용한 선형점화식 계산",englishName:"Kitamasa",tag:"kitamasa",alias:["키타마사"]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 스패닝 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]},{id:208,name:"집합과 맵",englishName:"Set / Map",tag:"set",alias:[]},{id:209,name:"트리의 지름",englishName:"Diameter Of A Tree",tag:"tree_diameter",alias:[]},{id:210,name:"cdq 분할 정복",englishName:"Cdq",tag:"cdq",alias:[]},{id:211,name:"최장 공통 부분 수열 문제",englishName:"Longest Common Subsequence",tag:"lcs",alias:[]},{id:212,name:"다이얼",englishName:"Dial",tag:"dial",alias:[]},{id:213,name:"세그먼트 트리 비츠",englishName:"Segment Tree Beats",tag:"beats",alias:["세그비츠"]},{id:214,name:"홀짝성",englishName:"Parity",tag:"parity",alias:["패리티"]},{id:215,name:"피사노 주기",englishName:"Pisano Period",tag:"pisano",alias:[]},{id:216,name:"bulldozer 트릭",englishName:"Bulldozer Trick",tag:"bulldozer",alias:[]},{id:217,name:"불변량 찾기",englishName:"Finding Invariants",tag:"invariant",alias:[]},{id:218,name:"트리에서의 전방향 다이나믹 프로그래밍",englishName:"Rerooting On Trees",tag:"rerooting",alias:[]},{id:219,name:"역추적",englishName:"Traceback",tag:"traceback",alias:[]},{id:220,name:"제한된 트리 너비",englishName:"Treewidth",tag:"treewidth",alias:[]},{id:221,name:"배타적 논리합 기저 (gf(2))",englishName:"XOR Basis (gf(2))",tag:"xor_basis",alias:[]},{id:222,name:"비트 집합을 이용한 최장 공통 부분 수열 최적화",englishName:"Longest Common Subsequence Using Bit Sets",tag:"bitset_lcs",alias:["비트셋 lcs"]},{id:223,name:"격자 그래프",englishName:"Grid Graph",tag:"grid_graph",alias:[]},{id:224,name:"순환군",englishName:"Cyclic Group",tag:"cyclic_group",alias:[]},{id:225,name:"리-차오 트리",englishName:"Li-Chao Tree",tag:"li_chao_tree",alias:["리차오 트리"]},{id:226,name:"키네틱 세그먼트 트리",englishName:"Kinetic Segment Tree",tag:"kinetic_segtree",alias:[]},{id:227,name:"차분 배열 트릭",englishName:"Difference Array",tag:"difference_array",alias:[]},{id:228,name:"최대 부분 배열 문제",englishName:"Maximum Subarray",tag:"maximum_subarray",alias:[]},{id:229,name:"각도 정렬",englishName:"Angle Sorting",tag:"angle_sorting",alias:[]},{id:230,name:"조화수",englishName:"Harmonic Number",tag:"harmonic_number",alias:[]},{id:231,name:"소인수분해",englishName:"Prime Factorization",tag:"prime_factorization",alias:[]}],X2=Eo.length,bd=n=>n.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),J2=n=>{const i=bd(n),l=[];return Eo.forEach(({id:u,name:d,englishName:p,tag:h,alias:y})=>{const v=[d,p,h,...y].map(S=>bd(S));(i===""||v.some(S=>S.indexOf(i)!==-1))&&l.push({id:u,name:d})}),l},vo={FETCH_OPTIONS_DATA:"fetchOptionsData",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",ADD_RANDOM_DEFENSE_HISTORY_INFOS:"addRandomDefenseHistoryInfos",FETCH_GACHA_OPTIONS:"fetchGachaOptions",SAVE_GACHA_OPTIONS:"saveGachaOptions"},Pn={CHECKED_ALGORITHM_IDS:"algorithm",QUICK_SLOTS:"query",TIMER:"timer",SETTINGS:"settings"},t3={RANDOM_DEFENSE_HISTORY:"queryLog"},Te={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},B={...Te,GACHA_OPTIONS:"gachaOptions"},Ka=n=>Array.isArray(n)?n.every(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):!1,e1=[1,2],t1={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},Ha={hotkey:"Alt",selectedSlotNo:1,slots:t1},Xa={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},n1={...Xa,shouldRevealTierOnHover:!1},n3="none",r1=!1,Ja=[],r3=0,o1=[],i1={isTierHidden:!1,isAudioMuted:!0},Gd={selectedNo:1,...t1},o3={[B.DATA_VERSION]:2,[B.CHECKED_ALGORITHM_IDS]:e1,[B.QUICK_SLOTS]:Ha,[B.TOTAMJUNG_THEME]:n3,[B.HIDER_OPTIONS]:n1,[B.RANDOM_DEFENSE_HISTORY]:Ja,[B.IS_TIER_HIDDEN]:r1,[B.FONT_NO]:r3,[B.TIMERS]:o1,[B.SHOULD_SHOW_WELCOME_MESSAGE]:!1},i3={...o3,[B.DATA_VERSION]:3,[B.GACHA_OPTIONS]:i1},ec=n=>Array.isArray(n)?n.filter(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):e1,l3=async()=>{const i=(await Ae.storage.local.get(B.CHECKED_ALGORITHM_IDS))[B.CHECKED_ALGORITHM_IDS];return ec(i)},s3=n=>{Ka(n)&&Ae.storage.local.set({[B.CHECKED_ALGORITHM_IDS]:n})},a3=()=>{const[n,i]=w.useState(""),[l,u]=w.useState([]),[d,p]=w.useState(!1);w.useEffect(()=>{(async()=>{const T=await l3();u(T),p(!0)})()},[]),w.useEffect(()=>{d&&s3(l)},[l]);const h=T=>{i(T.target.value)},y=T=>{if(l.includes(T)){const j=l.filter(M=>M!==T);u(j);return}const C=[...l,T];u(C)},v=()=>{u(Array.from({length:X2}).map((T,C)=>C+1))},x=()=>{u([])},S=J2(n);return{keyword:n,items:S,checkedAlgorithmIds:l,isLoaded:d,handleChangeKeyword:h,toggleAlgorithm:y,checkAllAlgorithms:v,uncheckAllAlgorithms:x}},c3=()=>{const{keyword:n,items:i,checkedAlgorithmIds:l,isLoaded:u,handleChangeKeyword:d,toggleAlgorithm:p,checkAllAlgorithms:h,uncheckAllAlgorithms:y}=a3(),{activeModalName:v,openModal:x,closeModal:S}=fl();return c.jsxs(Om,{role:"group",children:[c.jsx(bm,{children:u?i.length>0?c.jsx(Zm,{items:i,checkedAlgorithmIds:l,onChange:p}):c.jsx(K2,{imageSrc:rm,imageWidth:136,imageHeight:125,title:"검색 결과가 없습니다.",description:"검색어에 오탈자가 있는지 확인해주세요."}):c.jsx(qa,{})}),c.jsxs(Gm,{children:[c.jsxs(_m,{children:[c.jsx(Hm,{children:c.jsx(B2,{})}),c.jsx(zm,{placeholder:"알고리즘 분류를 입력해 주세요...",value:n,onChange:d})]}),c.jsxs(Pm,{children:[c.jsxs(Dd,{type:"button",onClick:()=>{x("checkAll")},"aria-label":"알고리즘 분류 전체 선택",disabled:!u,children:[c.jsx(Ld,{src:Yg}),c.jsx(Od,{children:"전체 선택"})]}),c.jsxs(Dd,{type:"button",onClick:()=>{x("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",disabled:!u,children:[c.jsx(Ld,{src:Wg}),c.jsx(Od,{children:"전체 해제"})]})]})]}),c.jsx(tn,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{h(),S()},onNoSelect:S}),c.jsx(tn,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{y(),S()},onNoSelect:S})]})},u3=g.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,d3=g.legend`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  margin-bottom: 6px;
`,f3=g.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:n})=>n?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,p3=g.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,h3=g.label`
  position: relative;

  width: 16px;
  height: 16px;
`,g3=g.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:n})=>n.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:n})=>n?"not-allowed":"pointer"};

  ${({theme:n,$checked:i})=>i?ne`
          box-shadow: 0 0 8px ${n.color.GOLD};
          background-color: ${n.color.GOLD};
        `:ne`
          box-shadow: 0 0 8px ${n.color.DARK_BROWN};
          background-color: transparent;
        `}
`,m3=g.input.attrs({type:"radio"})`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: transparent;
  border: none;
  margin: 0;

  appearance: none;
  -webkit-appearance: none;
`,v3=n=>{const{checked:i,disabled:l=!1}=n;return c.jsxs(h3,{children:[c.jsx(m3,{...n,onChange:()=>{if("value"in n){n.onChange(n.value);return}n.onChange()}}),c.jsx(g3,{$checked:i,$disabled:l})]})},Bn=n=>{const{legend:i,name:l,options:u,checkedValue:d,disabled:p,isVertical:h=!1,onChange:y}=n;return c.jsxs(u3,{disabled:p,children:[c.jsx(d3,{children:i}),c.jsx(f3,{$isVertical:h,children:u.map(({label:v,value:x})=>c.jsxs(p3,{children:[c.jsx(v3,{name:l,value:x,checked:x===d,disabled:p,onChange:y}),typeof v=="string"?c.jsx(pe,{type:"semiPrimary",fontSize:16,children:v}):v]},x))})]})},y3=g.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,x3=g.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 134px;
  height: 32px;
  padding: 6px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHT_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:n,$isActivated:i})=>i?ne`
          border: 1.5px solid ${n.color.LEMON};
          box-shadow: 0 0 12px ${n.color.GOLD}70;
        `:ne`
          border: 1.5px solid ${n.color.BROWN};
        `}
`,_d=g.img`
  width: 12px;
  height: auto;
`,Hd=g.p`
  font-size: 14px;
  color: ${({theme:n,$tier:i})=>n.solvedAcTier[i]};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,A3=g.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,w3=g.ul`
  display: ${({$isOpen:n})=>n?"flex":"none"};
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 150px;
  height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:n})=>n.color.LEMON};
  box-shadow: 0 0 12px ${({theme:n})=>n.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

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
`,S3=g.li`
  padding: 2px;
`,T3=g.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:n})=>n.color.BROWN};
  }
`,E3=g.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,l1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",N3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",R3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",I3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",k3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",C3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",j3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",M3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",D3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",L3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",O3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",b3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",G3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",_3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",H3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",P3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",B3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",F3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",U3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",$3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",V3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Y3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",W3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Q3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",q3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",K3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",X3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",J3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",e4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",t4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",n4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",r4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",o4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",i4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",l4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",s4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",s1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",a4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",Rn={0:l1,1:N3,2:R3,3:I3,4:k3,5:C3,6:j3,7:M3,8:D3,9:L3,10:O3,11:b3,12:G3,13:_3,14:H3,15:z3,16:P3,17:B3,18:F3,19:U3,20:$3,21:V3,22:Y3,23:W3,24:Q3,25:Z3,26:q3,27:K3,28:X3,29:J3,30:e4,31:s1},tc={unrated:l1,bronze:t4,silver:n4,gold:r4,platinum:o4,diamond:i4,ruby:l4,hidden:s4,notratable:s1,warn:a4},a1=n=>{const{initSelectedValue:i,onChange:l}=n,[u,d]=w.useState(i),[p,h]=w.useState(!1),y=w.useRef(null),v=w.useRef(null);return w.useEffect(()=>{d(i)},[i]),w.useEffect(()=>{const T=y.current;if(!T)return;const C=j=>{j.target instanceof Node&&j.target!==T&&!T.contains(j.target)&&h(!1)};return document.addEventListener("click",C),()=>{document.removeEventListener("click",C)}},[y]),{selectedValue:u,isSelectOpen:p,updateSelectedValue:T=>{var C;d(T),h(!1),(C=v.current)==null||C.focus(),l(T)},toggleSelect:()=>{h(T=>!T)},containerRef:y,selectButtonRef:v}},c4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],ya={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},u4=n=>{const{selectedTier:i,onChange:l}=n,{selectedValue:u,updateSelectedValue:d,isSelectOpen:p,toggleSelect:h,containerRef:y,selectButtonRef:v}=a1({initSelectedValue:i,onChange:l});return c.jsxs(y3,{ref:y,children:[c.jsxs(x3,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:p,ref:v,onClick:h,children:[c.jsx(_d,{src:Rn[u],alt:""}),c.jsx(Hd,{$tier:u,$isBold:!0,children:ya[u]}),c.jsx(A3,{children:c.jsx(V2,{})})]}),c.jsx(w3,{$isOpen:p,children:c4.map(x=>c.jsx(S3,{children:c.jsxs(T3,{type:"button","aria-label":`${ya[x]}를 경고 시작 티어로 설정하기`,onClick:()=>{d(x)},children:[c.jsx(_d,{src:Rn[x],alt:""}),c.jsx(Hd,{$tier:x,$isBold:x===u,children:ya[x]}),x===u&&c.jsx(E3,{children:c.jsx(Co,{})})]})},x))})]})},d4=g.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  height: 46px;
`,c1={none:H.color.LIGHT_GRAY,totamjung:H.color.LIGHTER_BROWN,bojExtendedDark:H.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:H.bojExtendedColor.SKY_BLUE,solvedAcLight:H.color.LIGHT_GRAY,solvedAcDark:H.color.LIGHT_GRAY,solvedAcBlack:H.color.LIGHT_GRAY},zd={...c1,totamjung:H.color.LEMON},f4={none:H.color.WHITE,totamjung:H.color.DARK_BROWN,bojExtendedDark:H.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_INDIGO,solvedAcLight:H.color.WHITE,solvedAcDark:H.solvedAcColor.DARK_INDIGO,solvedAcBlack:H.color.BLACK},p4=["none","solvedAcLight"],h4=g.input`
  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};
  padding: 0 ${({$horizontalPadding:n})=>n};

  border: ${({$borderWidth:n})=>`${n}px`} solid
    ${({$totamjungTheme:n})=>c1[n]};
  border-radius: ${({$borderRadius:n})=>n};
  background-color: ${({$totamjungTheme:n})=>f4[n]};

  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n};
  font-weight: ${({$fontWeight:n})=>n};

  color: ${({theme:n,$color:i,$totamjungTheme:l})=>i||(p4.includes(l)?n.color.BLACK:n.color.WHITE)};

  &:focus {
    border-color: ${({theme:n,$totamjungTheme:i,$hasError:l})=>l?n.color.RED:zd[i]};
    outline: 3px solid
      ${({theme:n,$totamjungTheme:i,$hasError:l})=>Vn(l?n.color.RED:zd[i],.5)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`,$t=w.forwardRef((n,i)=>{const{width:l,height:u,borderWidth:d=1.5,borderRadius:p="4px",horizontalPadding:h="6px",fontSize:y="13px",fontWeight:v=400,hasError:x=!1,theme:S="totamjung",color:T,textAlign:C="left",...j}=n;return c.jsx(h4,{$width:Tn(l),$height:Tn(u),$borderWidth:d,$borderRadius:Tn(p),$horizontalPadding:Tn(h),$fontSize:Tn(y),$fontWeight:v,$hasError:x,$color:T,$totamjungTheme:S,$textAlign:C,spellCheck:!1,ref:i,...j})}),u1=99,d1=59,f1=/^\d+$/,g4=n=>f1.test(n)&&Number(n)>=0&&Number(n)<=u1,m4=n=>f1.test(n)&&Number(n)>=0&&Number(n)<=d1,v4=n=>{const{initHours:i,initMinutes:l,onChange:u}=n,[d,p]=w.useState(String(i)),[h,y]=w.useState(String(l));return w.useEffect(()=>{p(String(i)),y(String(l))},[i,l]),{hours:d,minutes:h,updateHours:C=>{const j=C.target.value;j.length>=3||p(j)},updateMinutes:C=>{const j=C.target.value;j.length>=3||y(j)},submitHours:()=>{if(!g4(d)||Number(d)===i){p(String(i));return}p(String(Number(d))),u(Number(d),Number(h))},submitMinutes:()=>{if(!m4(h)||Number(h)===l){y(String(l));return}y(String(Number(h))),u(Number(d),Number(h))}}},y4=n=>{const{hours:i,minutes:l,disabled:u,onChange:d}=n,{hours:p,minutes:h,updateHours:y,updateMinutes:v,submitHours:x,submitMinutes:S}=v4({initHours:i,initMinutes:l,onChange:d});return c.jsxs(d4,{children:[c.jsx("img",{src:Qg,width:"54px",height:"46px",alt:""}),c.jsx($t,{name:"hours",type:"number",width:60,height:46,min:0,max:u1,value:p,borderWidth:2,borderRadius:8,fontSize:26,fontWeight:800,color:H.color.GOLD,textAlign:"center",disabled:u,onChange:y,onBlur:x,"aria-label":"시간"}),c.jsx(pe,{type:"normal",as:"span",fontSize:16,width:30,children:"시간"}),c.jsx($t,{name:"minutes",type:"number",width:60,height:46,min:0,max:d1,value:h,borderWidth:2,borderRadius:8,fontSize:26,fontWeight:800,color:H.color.GOLD,textAlign:"center",disabled:u,onChange:v,onBlur:S,"aria-label":"분"}),c.jsx(pe,{type:"normal",as:"span",fontSize:16,width:30,children:"분"})]})},Ne=n=>typeof n=="object"&&n!==null,p1=n=>Ne(n)&&Object.keys(n).every(i=>!isNaN(Number(i))),x4=n=>Array.isArray(n)&&n.every(i=>typeof i=="number"),pl=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(n),nc=n=>typeof n=="number"&&n%1===0&&n>=0&&n<=31,Un=n=>nc(n)&&n!==31,A4=n=>nc(n)&&n!==0&&n!==31,w4=n=>typeof n=="string"&&["unrated","bronze","silver","gold","platinum","diamond","ruby"].includes(n),S4=n=>/^[1-9]\d*$/.test(n),Pd=n=>/^\d+$/.test(n),rc=n=>{if(!(Ne(n)&&"problemTagLockDuration"in n&&"shouldHideTier"in n&&"shouldWarnHighTier"in n&&"warnTier"in n&&"algorithmHiderUsage"in n&&"problemTagLockUsage"in n&&Ne(n.problemTagLockDuration)&&"hours"in n.problemTagLockDuration&&"minutes"in n.problemTagLockDuration&&typeof n.problemTagLockDuration.hours=="number"&&typeof n.problemTagLockDuration.minutes=="number"&&typeof n.shouldHideTier=="boolean"&&typeof n.shouldWarnHighTier=="boolean"&&A4(n.warnTier)&&typeof n.algorithmHiderUsage=="string"&&["click","always"].includes(n.algorithmHiderUsage)&&typeof n.problemTagLockUsage=="string"&&["click","auto"].includes(n.problemTagLockUsage)))return!1;const{hours:i,minutes:l}=n.problemTagLockDuration;return i>=0&&i<100&&l>=0&&l<60&&i%1===0&&l%1===0},oc=n=>rc(n)&&"shouldRevealTierOnHover"in n&&typeof n.shouldRevealTierOnHover=="boolean",h1=n=>Ne(n)&&"expire"in n&&"hour"in n&&"minute"in n&&"problem"in n&&typeof n.expire=="number"&&typeof n.hour=="string"&&typeof n.minute=="string"&&typeof n.problem=="number"&&n.hour.length>=1&&n.hour.length<=2&&Pd(n.hour)&&n.minute.length>=1&&n.minute.length<=2&&Pd(n.minute)&&(n.problem>=1e3&&n.problem%1===0||n.problem===-1),T4=n=>{if(!(Ne(n)&&"font"in n&&"lock"in n&&"predict"in n&&"theme"in n&&typeof n.font=="string"&&typeof n.lock=="string"&&typeof n.predict=="string"&&typeof n.theme=="string"&&typeof n.lock=="string"&&["click","always"].includes(n.lock)&&typeof n.predict=="string"&&["click","always"].includes(n.predict)&&typeof n.theme=="string"&&["yes","no"].includes(n.theme)))return!1;if(n.font==="none")return!0;if(!/^font-\d+$/.test(n.font))return!1;const i=n.font.split("-")[1];if(!S4(i))return!1;const l=Number(i);return l>=1&&l<=19},E4=async()=>{const i=(await Ae.storage.local.get(B.HIDER_OPTIONS))[B.HIDER_OPTIONS];return oc(i)?i:n1},N4=n=>{oc(n)&&Ae.storage.local.set({[B.HIDER_OPTIONS]:n})},R4={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,shouldRevealTierOnHover:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},I4=()=>{const[n,i]=w.useState({...R4,isLoaded:!1});return w.useEffect(()=>{(async()=>{const x=await E4();i({...x,isLoaded:!0})})()},[]),w.useEffect(()=>{const{isLoaded:x,...S}=n;x&&N4(S)},[n]),{...n,updateProblemTagLockDuration:(x,S)=>{i(T=>T.isLoaded?{...T,problemTagLockDuration:{hours:x,minutes:S}}:T)},updateShouldHideTier:x=>{const S=x==="true";i(T=>T.isLoaded?{...T,shouldHideTier:S}:T)},updateShouldWarnHighTier:x=>{const S=x==="true";i(T=>T.isLoaded?{...T,shouldWarnHighTier:S}:T)},updateShouldRevealTierOnHover:x=>{const S=x==="true";i(T=>T.isLoaded?{...T,shouldRevealTierOnHover:S}:T)},updateWarnTier:x=>{i(S=>S.isLoaded?{...S,warnTier:x}:S)},updateAlgorithmHiderUsage:x=>{x!=="click"&&x!=="always"||i(S=>S.isLoaded?{...S,algorithmHiderUsage:x}:S)},updateProblemTagLockUsage:x=>{x!=="click"&&x!=="auto"||i(S=>S.isLoaded?{...S,problemTagLockUsage:x}:S)}}},k4=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,C4=g.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,j4=()=>{const{problemTagLockDuration:n,shouldHideTier:i,shouldWarnHighTier:l,shouldRevealTierOnHover:u,warnTier:d,algorithmHiderUsage:p,problemTagLockUsage:h,updateProblemTagLockDuration:y,updateShouldHideTier:v,updateShouldWarnHighTier:x,updateShouldRevealTierOnHover:S,updateWarnTier:T,updateAlgorithmHiderUsage:C,updateProblemTagLockUsage:j}=I4(),{hours:M,minutes:b}=n;return c.jsxs(k4,{children:[c.jsx(Nn,{title:"잠금 시간 설정",iconSrc:Ae.runtime.getURL("/lock.png")}),c.jsx(y4,{hours:M,minutes:b,onChange:y}),c.jsx(Nn,{title:"티어 가리개 설정",iconSrc:q2}),c.jsx(Bn,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:i?"true":i===void 0?"":"false",onChange:v}),c.jsx(Bn,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!i,options:[{label:"사용하지 않음",value:"false"},{label:c.jsxs(C4,{children:[c.jsx(u4,{selectedTier:d,onChange:T}),c.jsx(pe,{type:"semiPrimary",fontSize:16,children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:l?"true":"false",onChange:x}),c.jsx(Bn,{legend:"티어 아이콘에 마우스를 올릴 경우 난이도 공개하기",name:"shouldRevealTierOnHover",disabled:!i,options:[{label:"공개",value:"true"},{label:"공개하지 않음",value:"false"}],checkedValue:u?"true":"false",onChange:S}),c.jsx(Nn,{title:"기본 설정",iconSrc:c.jsx(yg,{})}),c.jsx(Bn,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:p??"",onChange:C}),c.jsx(Bn,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:h??"",onChange:j})]})},M4=g.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,D4=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,L4=n=>{const{show:i}=n;return i?c.jsxs(M4,{children:[c.jsxs(D4,{children:[c.jsx(Nn,{title:"알고 있는 알고리즘 관리하기",iconSrc:c.jsx(B2,{})}),c.jsx(c3,{})]}),c.jsx(j4,{})]}):null},O4=g.div`
  display: inline-block;
  position: relative;

  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};

  padding: ${({$padding:n})=>n};

  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,b4=g.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({theme:n})=>n.color.LIGHTER_BROWN};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ic=n=>{const{width:i,height:l,padding:u,title:d,children:p}=n;return c.jsxs(O4,{$width:i,$height:l,$padding:u,children:[d!==""&&c.jsx(b4,{children:d}),p]})},G4=g.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,_4=g.span`
  font-size: ${({$fontSize:n})=>n}px;
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:n})=>n.color.LEMON};
  }
`,H4=g.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:n})=>n}px;
  height: ${({$fontSize:n})=>n}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,g1=n=>{const{href:i,fontSize:l,children:u}=n;return c.jsxs(G4,{href:i,target:"__blank",rel:"noopener",children:[c.jsx(_4,{$fontSize:l,children:u}),c.jsx(H4,{$fontSize:l,children:c.jsx(pg,{})})]})},z4=g.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:n})=>n+3}px;
  height: ${({$height:n})=>n===void 0?"auto":n}px;

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:n})=>n+3}px;
    height: ${({$fontSize:n})=>n+3}px;

    color: ${({theme:n})=>n.color.LIGHT_RED};
  }
`,P4=g.p`
  font-size: ${({$fontSize:n})=>n}px;

  color: ${({theme:n})=>n.color.LIGHT_RED};
`,m1=n=>{const{fontSize:i,errorMessage:l,height:u}=n;return c.jsx(z4,{$fontSize:i,$height:u,children:l!==""&&c.jsxs(c.Fragment,{children:[c.jsx(U2,{}),c.jsx(P4,{$fontSize:i,role:"alert",children:l})]})})},v1=g.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,y1=ne`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};
  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
`,B4=g.div`
  ${y1}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${v1}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,F4=g.div`
  ${y1}

  bottom: 0;
`,U4=g.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:n})=>n.filter.DARK_ORANGE_FILTER};
`,$4=g.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,V4=g.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:n})=>n.color.ORANGE};
`,Y4=g.p`
  font-size: 12px;
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,W4=n=>{const{selectedSlotNo:i,isLoaded:l,onClick:u}=n;return c.jsxs(v1,{type:"button","aria-label":`${i}번 슬롯에 추첨 생성하기`,onClick:u,disabled:!l,children:[c.jsxs(B4,{children:[c.jsx(U4,{src:Ae.runtime.getURL("/dice.png"),alt:""}),c.jsxs($4,{children:[c.jsx(V4,{children:"추첨 생성"}),c.jsx(Y4,{children:l?`슬롯 번호 − ${i}`:"로딩 중..."})]})]}),c.jsx(F4,{})]})},Q4=g.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,x1=ne`
  width: 50%;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:n})=>n.color.LIGHTER_BROWN};

  transition: 0.2s;
`,Z4=g.button`
  ${x1}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:n})=>n?ne`
          border-color: ${({theme:i})=>i.color.MAGENTA};
          background-color: ${({theme:i})=>i.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:i})=>i.color.MAGENTA};

          color: ${({theme:i})=>i.color.WHITE};
        `:ne`
          &:hover {
            border-color: ${({theme:i})=>i.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:i})=>i.color.MAGENTA};

            color: ${({theme:i})=>i.color.MAGENTA};
          }
        `}
`,q4=g.button`
  ${x1}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:n})=>n?ne`
          border-color: ${({theme:i})=>i.color.AZURE_BLUE};
          background-color: ${({theme:i})=>i.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:i})=>i.color.AZURE_BLUE};

          color: ${({theme:i})=>i.color.WHITE};
        `:ne`
          &:hover {
            border-color: ${({theme:i})=>i.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:i})=>i.color.AZURE_BLUE};

            color: ${({theme:i})=>i.color.AZURE_BLUE};
          }
        `}
`,K4=g.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.LIGHTER_BROWN};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`,X4=n=>{const{mode:i,onClick:l}=n;return c.jsxs(Q4,{children:[c.jsx(Z4,{type:"button",$isActivated:i==="easy",onClick:()=>{l("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),c.jsx(q4,{type:"button",$isActivated:i==="manual",onClick:()=>{l("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),c.jsx(K4,{children:"OR"})]})},J4=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,ev=g.div`
  display: flex;
  justify-content: space-around;
`,xa=31,tv=g.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,nv=g.div`
  width: 100%;
  height: 3px;

  background: ${({theme:n})=>`linear-gradient(to right, ${Array.from({length:xa}).map((i,l)=>Un(l)?`${n.solvedAcTier[l]} ${l/xa*100}%, ${n.solvedAcTier[l]} ${(l+1)/xa*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,Bd=g.input`
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
    background-color: ${({theme:n,value:i})=>n.solvedAcTier[i]};
    box-shadow: 0 0 0 2px ${({theme:n})=>n.color.TRANSPARENT_FAINT_WHITE}
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
    background-color: ${({theme:n,value:i})=>n.solvedAcTier[i]};
    box-shadow: 0 0 0 2px ${({theme:n})=>n.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`,rv=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(tv,{children:[c.jsx(nv,{}),c.jsx(Bd,{type:"range",min:0,max:30,value:i,"aria-label":"시작 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),h=Math.max(Number(p),l);Un(p)&&Un(h)&&u(p,h)}}),c.jsx(Bd,{type:"range",min:0,max:30,value:l,"aria-label":"끝 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),h=Math.min(Number(p),i);Un(h)&&Un(p)&&u(h,p)}})]})},ov=g.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,Fd=g.img`
  width: 26px;
`,iv=g.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`,lv=n=>{const{startTier:i,endTier:l}=n;return c.jsxs(ov,{children:[c.jsx(Fd,{src:Rn[i],alt:"",draggable:!1}),c.jsx(iv,{children:"~"}),c.jsx(Fd,{src:Rn[l],alt:"",draggable:!1})]})},sv=g.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,Ud=(n,i)=>i==="bronze"?n.solvedAcTier.BRONZE:i==="silver"?n.solvedAcTier.SILVER:i==="gold"?n.solvedAcTier.GOLD:i==="platinum"?n.solvedAcTier.PLATINUM:i==="diamond"?n.solvedAcTier.DIAMOND:i==="ruby"?n.solvedAcTier.RUBY:n.color.GRAY,av=g.li`
  width: 32px;
  height: 32px;
`,cv=g.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:n,$rank:i})=>Ud(n,i)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:n,$rank:i})=>`linear-gradient(to top, ${Ud(n,i)}70 0%, transparent 100%)`};
  }
`,uv=g.img`
  width: 16px;
`;g.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`;const dv={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},$d={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},fv=n=>{const{rank:i,onClick:l}=n;return c.jsx(av,{children:c.jsx(cv,{type:"button",$rank:i,"aria-label":dv[i],onClick:()=>{l($d.START[i],$d.END[i])},children:c.jsx(uv,{src:tc[i],alt:""})})})},pv=["unrated","bronze","silver","gold","platinum","diamond","ruby"],hv=n=>{const{onClick:i}=n;return c.jsx(sv,{children:pv.map(l=>c.jsx(fv,{rank:l,onClick:i},l))})},gv=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(J4,{children:[c.jsx(rv,{startTier:i,endTier:l,onChange:u}),c.jsxs(ev,{children:[c.jsx(lv,{startTier:i,endTier:l}),c.jsx(hv,{onClick:u})]})]})},mv=g.ul`
  display: flex;
  justify-content: space-between;

  width: 210px;
  height: 18px;

  user-select: none;
`,vv=g.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 70px;
  height: 18px;
`,yv=at`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,xv=g.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${yv} 0.15s forwards;
  }
`,Av=g.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:n,$isSelected:i})=>i?n.color.GOLD:n.color.LIGHT_GRAY};
`,wv=[{operator:"OR",description:"OR: 선택된 알고리즘 분류 중 하나 이상 포함되는 문제들만 추첨에서 등장합니다."},{operator:"AND",description:"AND: 선택된 알고리즘 분류 모두를 포함하는 문제들만 추첨에서 등장합니다."},{operator:"NOR",description:"NOR: 선택된 알고리즘 분류 모두를 포함하지 않는 문제들만 추첨에서 등장합니다."}],Sv=n=>{const{selectedOperator:i,onClick:l}=n;return c.jsx(mv,{children:wv.map(({operator:u,description:d})=>c.jsxs(vv,{children:[u===i&&c.jsx(xv,{children:c.jsx(Co,{})}),c.jsx(Av,{type:"button",title:d,"aria-label":`알고리즘 검색 옵션을 ${u}로 설정하기`,$isSelected:u===i,onClick:()=>{l(u)},children:u})]},u))})},Tv=g.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:n,$isOpen:i})=>i&&ne`
      & > ul {
        border-color: ${n.color.LEMON};
        box-shadow: 0 0 12px ${n.color.GOLD}70;
      }
    `}
`,A1=ne`
  display: flex;
  overflow: auto;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  padding: 4px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Ev=g.ul`
  ${A1}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,Nv=g.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:n})=>!n&&ne`
      opacity: 0;
    `}

  ${({theme:n,$isOpen:i})=>i&&ne`
      border-color: ${n.color.LEMON};
      outline: 3px solid ${n.color.LEMON}70;
    `}
`,Rv=g.ul`
  ${A1}

  position: absolute;

  height: ${({$isOpen:n})=>n?"90px":"64px"};

  transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,Iv=g.li`
  display: inline-block;

  height: 26px;
`,kv=g.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Cv=g.p`
  overflow: hidden;

  color: ${({theme:n})=>n.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,jv=g.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LEMON};
  }
`,Vd=w.forwardRef((n,i)=>{const{id:l,name:u,mode:d,tabIndex:p,onClick:h,onKeyDown:y}=n;return c.jsx(Iv,{children:c.jsxs(kv,{type:"button",tabIndex:p,"aria-label":d==="add"?`${u}을 검색에 포함할 알고리즘 목록에 추가하기`:`${u}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{h(l)},onKeyDown:y,ref:i,children:[c.jsx(Cv,{children:u}),d==="delete"&&c.jsx(jv,{children:c.jsx(gg,{})})]})})}),w1=0,Mv=30,Dv=31,S1=1e3,T1=99999,E1=500,No=300,za=5,Ro=30,Lv=/^\w{3,20}$/,Fi=1e8,Yd=/^([1-9][0-9]*|0)$/,Qn=512,ol=50,Ov=5,bv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,[u,d]=w.useState(!1),[p,h]=w.useState(""),y=w.useRef(null),v=w.useRef(null),x=M=>{h(M.target.value)},S=i.length<za?J2(p).filter(({id:M})=>!i.includes(M)).map(({id:M})=>M):[],T=M=>{if(M.key==="Enter"){if(S.length===0)return;l([...i,S[0]]),h("")}if(M.key==="Backspace"){if(p!=="")return;l(i.slice(0,-1))}},C=M=>{l([...i,M]),h("")},j=M=>{l(i.filter(b=>b!==M))};return w.useEffect(()=>{const M=y.current,b=v.current;if(!M||!b)return;const P=Z=>{const U=Z.target;!U||!(U instanceof Node)||d(M.contains(U))},X=()=>{document.activeElement!==document.body&&d(M.contains(document.activeElement))},$=()=>{b.focus()};return document.addEventListener("mousedown",P),document.addEventListener("focusin",X),document.addEventListener("focusout",X),M.addEventListener("click",$),()=>{document.removeEventListener("mousedown",P),document.removeEventListener("focusin",X),document.removeEventListener("focusout",X),M.removeEventListener("click",$)}},[y,v]),{isOpen:u,inputValue:p,searchedAlgorithmIds:S,updateInputValue:x,processActionIfKeyPress:T,addAlgorithmId:C,deleteAlgorithmId:j,containerRef:y,inputRef:v}},Gv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,{isOpen:u,inputValue:d,searchedAlgorithmIds:p,updateInputValue:h,processActionIfKeyPress:y,addAlgorithmId:v,deleteAlgorithmId:x,containerRef:S,inputRef:T}=bv({selectedAlgorithmIds:i,onChange:l}),{getRovingProps:C}=To({count:i.length}),{getRovingProps:j}=To({count:p.length});return c.jsxs(Tv,{ref:S,$isOpen:u,tabIndex:-1,children:[c.jsx(Ev,{tabIndex:-1,children:c.jsxs(c.Fragment,{children:[i.map((M,b)=>{const P=Eo.find(({id:$})=>$===M),X=P?P.name:"";return c.jsx(Vd,{mode:"delete",id:M,name:X,...C(b),onClick:x},M)}),c.jsx(Nv,{ref:T,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:u,value:d,onChange:h,onKeyDown:y})]})}),c.jsx(Rv,{$isOpen:u,tabIndex:-1,children:p.map((M,b)=>{const P=Eo.find(({id:$})=>$===M),X=P?P.name:"";return c.jsx(Vd,{mode:"add",id:M,name:X,...j(b),onClick:v},M)})})]})},_v=n=>typeof n=="string"&&["ko","en","ko/en","all"].includes(n),Hv=n=>Ne(n)&&"mode"in n&&"title"in n&&"handle"in n&&"solvedMin"in n&&"solvedMax"in n&&"language"in n&&"startTier"in n&&"endTier"in n&&"searchOperator"in n&&"algorithmIds"in n&&"customQuery"in n&&typeof n.mode=="string"&&["easy","manual"].includes(n.mode)&&typeof n.title=="string"&&typeof n.handle=="string"&&typeof n.language=="string"&&typeof n.solvedMin=="string"&&typeof n.solvedMax=="string"&&x4(n.algorithmIds)&&Un(n.startTier)&&Un(n.endTier)&&typeof n.searchOperator=="string"&&["OR","AND","NOR"].includes(n.searchOperator)&&typeof n.customQuery=="string",zv=n=>{const{mode:i,title:l,handle:u,solvedMin:d,solvedMax:p,startTier:h,endTier:y,algorithmIds:v,customQuery:x}=n,S=i==="easy"?[Wd(l),Pv(u),Bv(d,p),Fv(h,y),Uv(v)]:[Wd(l),$v(x)];for(let T=0;T<S.length;T++){const C=S[T];if(!C.isValid)return C}return{isValid:!0}},Wd=n=>n.length>Ro?{isValid:!1,errorMessage:`추첨 이름은 ${Ro}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},Pv=n=>n.trim()===""?{isValid:!0}:n.length<3||n.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:Lv.test(n)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},Bv=(n,i)=>{const l=Number(n),u=Number(i),d=n.trim()==="",p=i.trim()==="";return!d&&!Yd.test(n)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!p&&!Yd.test(i)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!d&&l>Fi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Fi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!p&&u>Fi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Fi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!d&&!p&&l>u?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Fv=(n,i)=>{const l=Number(n),u=Number(i);return l>u?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},Uv=n=>n.length>za?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${za.toLocaleString()}개 이하여야 해요.`}:n.every(l=>typeof l=="number"&&l%1===0&&l>=1&&l<=X2)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},$v=n=>n.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:n.length>Qn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Qn}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Vv=n=>{const{mode:i,handle:l,solvedMin:u,solvedMax:d,language:p,startTier:h,endTier:y,searchOperator:v,algorithmIds:x,customQuery:S}=n;if(i==="manual")return S.replace(/\n/g," ").trim();const T=Qv(x),C=Zv(p),j=qv(v),M=l.trim()!=="",b=T.length>0,P=M?`~@${l} `:"",X=Yv(u,d),$=C===""?"":`${C} `,Z=Wv(h,y),U=b?T.length===1?`${j==="~"?"~":""}${T[0]}`:`(${j==="~"?"~":""}${T.join(j)})`:"";return`(*0&!s?|!*0) o? -w? ${P}${X}${$}${Z}${U}`.trim()},Yv=(n,i)=>n.trim()===""&&i.trim()===""?"":n===i?`s#${n} `:`s#${n}..${i} `,Aa=["b","s","g","p","d","r"],Wv=(n,i)=>{if(n===0&&i===30)return"";if(n%5===1&&n+4===i)return`*${Aa[Math.floor(n/5)]} `;if(n%5===1&&i%5===0){const l=Aa[Math.floor(n/5)],u=Aa[Math.floor(i/5)-1];return`*${l}..${u} `}return n===i?`*${n} `:`*${n}..${i} `},Qv=n=>{const i=[];return n.forEach(l=>{var d;const u=(d=Eo.find(p=>p.id===l))==null?void 0:d.tag;u&&i.push(`#${u}`)}),i},Zv=n=>{switch(n){case"ko":return"%ko";case"en":return"(%en~%ko~%ja~%sv)";case"ko/en":return"(%ko|(%en~%ja~%sv))";default:return""}},qv=n=>{switch(n){case"OR":return"|";case"AND":return"&";default:return"~"}},Qd={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Kv=n=>{const{selectedSlotNo:i,onSubmit:l}=n,[u,d]=w.useState(Qd),[p,h]=w.useState(""),[y,v]=w.useState(void 0),{mode:x,title:S,handle:T,solvedMin:C,solvedMax:j,language:M,startTier:b,endTier:P,searchOperator:X,algorithmIds:$,customQuery:Z}=u,U=w.useRef(null),re=w.useRef(null),q=w.useRef(null),W=w.useRef(null),ye=w.useRef(null);return{mode:x,title:S,handle:T,solvedMin:C,solvedMax:j,language:M,startTier:b,endTier:P,searchOperator:X,algorithmIds:$,customQuery:Z,errorMessage:p,errorElementName:y,setMode:se=>{d(_=>({..._,mode:se})),h(""),v(void 0)},setRandomDefenseInputValue:se=>{const{name:_,value:Y}=se.target;_ in Qd&&d(F=>({...F,[_]:Y}))},setLanguage:se=>{_v(se)&&d(_=>({..._,language:se}))},setTierRange:(se,_)=>{d(Y=>({...Y,startTier:se,endTier:_}))},setSearchOperator:se=>{d(_=>({..._,searchOperator:se}))},setAlgorithmIds:se=>{d(_=>({..._,algorithmIds:se}))},setCustomQuery:se=>{d(_=>({..._,customQuery:se}))},submitRandomDefense:()=>{var Y,F,N,D,te;if(!Hv(u))return;const se=zv(u);if(se.isValid){const oe=u.title.trim()===""?`추첨 ${i}`:u.title,ce=Vv(u);l(oe,ce),h(""),v(void 0);return}switch(h(se.errorMessage),v(se.focusElementName),se.focusElementName){case"title":(Y=U.current)==null||Y.select();break;case"handle":(F=re.current)==null||F.select();break;case"solvedMin":(N=q.current)==null||N.select();break;case"solvedMax":(D=W.current)==null||D.select();break;case"customQuery":(te=ye.current)==null||te.select();break}},titleRef:U,handleRef:re,solvedMinRef:q,solvedMaxRef:W,customQueryRef:ye}},Xv=g.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,Jv=g.div`
  position: absolute;
  top: -32px;
  right: 0;
`,ey=g.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,Zd=g.div`
  display: flex;
  column-gap: ${({$columnGap:n})=>n||0};

  width: 100%;
`,wa=g.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,Ui=g.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,ty=g.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,ny=g.div`
  display: flex;
  justify-content: center;
`,ry=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,oy=g.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,iy=g.div`
  overflow: visible;
  position: relative;

  width: ${({$width:n})=>n};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,ly=g.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 100%;
  height: 32px;
  padding: 6px;

  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:n,$isActivated:i})=>i?ne`
          border: 1.5px solid ${n.color.LEMON};
          box-shadow: 0 0 12px ${n.color.GOLD}70;
        `:ne`
          border: 1.5px solid ${n.color.LIGHTER_BROWN};
        `}
`;g.img`
  width: 12px;
  height: auto;
`;const qd=g.p`
  font-size: 14px;
  color: ${({theme:n})=>n.color.WHITE};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,sy=g.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,ay=g.ul`
  display: ${({$isOpen:n})=>n?"flex":"none"};
  left: 8px;
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 100%;
  max-height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:n})=>n.color.LEMON};
  box-shadow: 0 0 12px ${({theme:n})=>n.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

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
`,cy=g.li`
  padding: 2px;
`,uy=g.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:n})=>n.color.BROWN};
  }
`,dy=g.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,fy=n=>{var j;const{options:i,selectedValue:l,width:u,ariaLabel:d,onChange:p}=n,{selectedValue:h,updateSelectedValue:y,isSelectOpen:v,toggleSelect:x,containerRef:S,selectButtonRef:T}=a1({initSelectedValue:l,onChange:p}),C=((j=i.find(({value:M})=>M===h))==null?void 0:j.label)??"";return c.jsxs(iy,{ref:S,$width:u,role:"combobox",children:[c.jsxs(ly,{type:"button","aria-label":d,"aria-haspopup":"listbox","aria-expanded":v,onClick:x,ref:T,$isActivated:v,children:[c.jsx(qd,{$isBold:!0,children:C}),c.jsx(sy,{children:c.jsx(V2,{})})]}),c.jsx(ay,{$isOpen:v,role:"listbox","aria-labelledby":d,children:i.map(({label:M,value:b})=>c.jsx(cy,{role:"option","aria-selected":b===h,children:c.jsxs(uy,{type:"button",onClick:()=>{y(b)},children:[c.jsx(qd,{$isBold:b===h,children:M}),b===h&&c.jsx(dy,{children:c.jsx(Co,{})})]})},b))})]})},py=n=>Ne(n)&&"autocomplete"in n&&"tags"in n&&hy(n.autocomplete)&&my(n.tags),hy=n=>Array.isArray(n)&&n.every(i=>gy(i)),gy=n=>Ne(n)&&"caption"in n&&"description"in n&&typeof n.caption=="string"&&typeof n.description=="string",my=n=>Array.isArray(n)&&n.every(i=>vy(i)),vy=n=>Ne(n)&&"caption"in n&&"name"in n&&typeof n.caption=="string"&&typeof n.name=="string",yy=async n=>{try{const i=await fetch(`https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(n)}`,{headers:{"x-solvedac-language":"ko"}});if(!i.ok)return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."};const l=await i.json();return py(l)?{success:!0,suggestions:xy(l)}:{success:!1,errorMessage:"예기치 못한 오류가 발생했습니다. 개발자에게 이 버그를 제보해주세요."}}catch{return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."}}},xy=n=>{const{autocomplete:i,tags:l}=n;return[...i.filter(({description:d})=>d!==""),...l.map(({name:d,caption:p})=>({caption:p,description:d}))].slice(0,Ov)},Ay=["*","tier:","id:","s#","solved:","#","tag","/","from:","t#","average_try:","µ#","%","lang:","@","solved_by:","o@","solved_by_org","t@","tried_by:","v@","voted_by:","c@","contributed_by:","c/","in_class:","e/","in_class_essentials:","s?","standard:","p?","sprout:","sp?","o?","solvable:","v?","votable:","c?","contributable:","w?","warning:","v#","voted:","c#","contributed:","**","vote_average:","a*","µ*"],wy=/^[A-z가-힣 ]+$/,Sy=["|","&","(",")","!","~","-"," "],Ty=n=>{if(wy.test(n))return 0;for(let i=n.length-1;i>=0;i-=1)if(Sy.includes(n[i]))return i+1;return 0},Ey=(n,i)=>{const l=Ty(n);return`${n.slice(0,l)}${i}${Ay.includes(i)?"":" "}`},Ny=n=>{const{value:i,textareaRef:l,onChange:u}=n,[d,p]=w.useState([]),[h,y]=w.useState("잠시만 기다려주세요..."),v=w.useRef(i),x=w.useRef(!1);w.useEffect(()=>{if(v.current=i,x.current)return;x.current=!0;const j=async()=>{const M=await yy(v.current);if(M.success){p(M.suggestions),y(null);return}p([]),y(M.errorMessage)};setTimeout(()=>{x.current=!1,j()},200)},[i]);const S=j=>{const M=j.target.value.replace(/\n/g,"");u(M)},T=j=>{var b;const M=Ey(i,j.caption);u(M),l&&"current"in l&&((b=l.current)==null||b.focus())};return{suggestions:d,fallbackMessage:h,textareaRef:l,updateQuery:S,applySuggestion:T,applyFirstSuggestionIfEnterKeyPressed:j=>{j.code==="Enter"&&d.length>0&&!j.nativeEvent.isComposing&&T(d[0])}}},Ry=g.div`
  display: flex;
  flex-direction: column;

  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  &:focus-within {
    border-color: ${({theme:n,$hasError:i})=>i?n.color.RED:n.color.LEMON};
    outline: 3px solid
      ${({theme:n,$hasError:i})=>Vn(i?n.color.RED:n.color.LEMON,.5)};
  }

  transition: outline 0.05s;
`,Iy=g.textarea`
  flex-grow: 1;

  width: 100%;

  padding: 6px;

  border: none;
  border-bottom: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background: transparent;

  color: ${({theme:n})=>n.color.WHITE};
  font-size: 13px;

  resize: none;
  outline: none;
  transition: border-bottom-color 0.2s;
`,Pa=g.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  column-gap: 20px;
  flex-wrap: wrap;

  width: 100%;
  height: 48px;

  padding: 4px 6px;
`,Ba=g.div`
  display: inline-flex;

  width: auto;
  height: 20px;
`,N1=g.button`
  background: none;
  border: none;

  height: 100%;
  padding: 0 4px;

  color: ${({theme:n})=>n.color.GOLD};
  font-size: 13px;
  line-height: 20px;

  transition: 0.15s;
  outline: none;
  opacity: 0.6;

  &:hover,
  &:focus {
    opacity: 1;
    text-shadow: 0 0 5px ${({theme:n})=>n.color.GOLD};
  }
`,ky=g.div`
  width: 14px;
  height: 20px;
  padding: 3px 0;

  opacity: 0;
  transition: 0.15s;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }

  ${Pa}:not(:has(:focus-visible)) ${Ba}:first-child & {
    opacity: 0.6;
  }

  ${Pa} ${Ba} ${N1}:focus-visible + & {
    opacity: 1;
  }
`,R1=w.forwardRef((n,i)=>{const{width:l,height:u,value:d,placeholder:p,hasError:h=!1,onChange:y}=n,{suggestions:v,fallbackMessage:x,updateQuery:S,applySuggestion:T,applyFirstSuggestionIfEnterKeyPressed:C}=Ny({value:d,textareaRef:i,onChange:y});return c.jsxs(Ry,{$width:Tn(l),$height:Tn(u),$hasError:h,children:[c.jsx(Iy,{value:d,onChange:S,onKeyDown:C,ref:i,placeholder:p,minLength:1,maxLength:Qn,spellCheck:!1}),c.jsx(Pa,{tabIndex:-1,children:x?c.jsx(pe,{as:"span",type:"gray",fontSize:13,children:x}):v.length===0?c.jsx(pe,{as:"span",type:"gray",fontSize:13,children:"자동완성 결과가 없습니다."}):v.map(j=>c.jsxs(Ba,{children:[c.jsx(N1,{title:j.description,type:"button",onClick:()=>T(j),children:j.caption}),c.jsx(ky,{children:c.jsx(jg,{})})]},j.caption))})]})}),Cy=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],jy=n=>{const{selectedSlotNo:i,isLoaded:l,onSubmit:u}=n,{mode:d,title:p,handle:h,solvedMin:y,solvedMax:v,language:x,startTier:S,endTier:T,searchOperator:C,algorithmIds:j,customQuery:M,errorMessage:b,errorElementName:P,setMode:X,setRandomDefenseInputValue:$,setLanguage:Z,setTierRange:U,setSearchOperator:re,setAlgorithmIds:q,setCustomQuery:W,submitRandomDefense:ye,titleRef:_e,handleRef:Le,solvedMinRef:qe,solvedMaxRef:Ke,customQueryRef:He}=Kv({selectedSlotNo:i,onSubmit:u});return c.jsx(ic,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:c.jsxs(Xv,{children:[c.jsx(Jv,{children:c.jsx(m1,{errorMessage:b,fontSize:14})}),c.jsx(ey,{children:c.jsx(X4,{mode:d,onClick:X})}),c.jsxs(wa,{$width:"380px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"추첨 이름"}),c.jsx($t,{ref:_e,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"0 ~ 30자","aria-label":"추첨 이름",name:"title",value:p,maxLength:30,hasError:P==="title",onChange:$})]}),d==="easy"?c.jsxs(c.Fragment,{children:[c.jsxs(Zd,{$columnGap:"50px",children:[c.jsxs(wa,{$width:"190px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"검색에서 제외할 닉네임"}),c.jsx($t,{ref:Le,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"3 ~ 20자","aria-label":"검색에서 제외할 닉네임",name:"handle",value:h,minLength:3,maxLength:20,hasError:P==="handle",onChange:$})]}),c.jsxs(Ui,{$width:"166px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"맞은 사람 수"}),c.jsxs(ty,{children:[c.jsx($t,{ref:qe,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 하한",name:"solvedMin",value:y,hasError:P==="solvedMin",onChange:$}),c.jsx(pe,{type:"primary",fontSize:16,children:"~"}),c.jsx($t,{ref:Ke,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 상한",name:"solvedMax",value:v,hasError:P==="solvedMax",onChange:$})]})]}),c.jsxs(Ui,{$width:"190px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"문제 언어"}),c.jsx(fy,{options:Cy,selectedValue:x,width:"130px",ariaLabel:"문제 언어 고르기",onChange:Z})]})]}),c.jsxs(Ui,{$width:"100%",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"난이도 범위"}),c.jsx(ny,{children:c.jsx(gv,{startTier:S,endTier:T,onChange:U})})]}),c.jsxs(Ui,{$width:"446px",children:[c.jsxs(Zd,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"검색에 포함할 알고리즘"}),c.jsx(Sv,{selectedOperator:C,onClick:re})]}),c.jsx(Gv,{selectedAlgorithmIds:j,onChange:Be=>{q(Be)}})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs(wa,{$width:"100%",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"쿼리"}),c.jsx(R1,{ref:He,width:"100%",height:"160px",value:M,placeholder:`1 ~ ${Qn}자`,hasError:P==="customQuery",onChange:W})]}),c.jsxs(ry,{children:[c.jsxs(pe,{type:"normal",fontSize:14,children:[c.jsx(g1,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),c.jsx(pe,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]})]}),c.jsx(oy,{children:c.jsx(W4,{isLoaded:l,selectedSlotNo:i,onClick:ye})})]})})},My=g.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,Dy=g.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,Ly=g.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,Oy=g.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,by=g.li`
  width: 26px;
  height: 26px;
`,Gy=g.button`
  width: 100%;
  height: 100%;

  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.LIGHTER_BROWN};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({theme:n,$isSelected:i,$isOccupied:l})=>{if(i)return ne`
        border-color: ${n.color.LEMON};
        background-color: ${n.color.LEMON};
        outline: 3px solid ${n.color.LEMON}70;

        color: ${n.color.DARK_BROWN};
      `;if(l)return ne`
        border-color: ${n.color.GOLD};

        color: ${n.color.GOLD};
      `}}
`,_y=[1,2,3,4,5,6,7,8,9,0],Hy=n=>{const{selectedSlotNo:i,occupiedSlotNos:l,onChange:u}=n;return c.jsx(Oy,{children:_y.map(d=>c.jsx(by,{children:c.jsx(Gy,{$isSelected:d===i,$isOccupied:l.includes(d),onClick:()=>{u(d)},"aria-label":`${d}번 슬롯 선택하기. ${d===i?"이미 선택되어 있는 슬롯입니다":""}`,children:d})},d))})},zy=g.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,Py=g.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,By=g.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,Kd=g.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme:n,$backgroundColor:i})=>i==="gold"?n.color.GOLD:n.color.WHITE};

  color: ${({theme:n})=>n.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,Fy=g.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 16px;
`,Uy=g.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 14px;
`,I1=ne`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,$y=g.div`
  ${I1}

  white-space: nowrap;
`,Vy=g.div`
  ${I1}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,Yy=n=>c.jsxs(zy,{children:[c.jsxs(Py,{children:[c.jsx(Kd,{$backgroundColor:"gold",children:"추첨 이름"}),c.jsx($y,{children:n.isEmpty?c.jsx(Fy,{children:"(비어 있음)"}):c.jsx(pe,{type:"primary",fontSize:16,children:n.title})})]}),c.jsxs(By,{children:[c.jsx(Kd,{$backgroundColor:"white",children:"쿼리"}),c.jsx(Vy,{children:n.isEmpty?c.jsx(Uy,{children:"(비어 있음)"}):c.jsx(pe,{type:"code",fontSize:13,children:n.query})})]})]}),Wy=g.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,Qy=g.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme:n})=>n.color.LEMON};

    transform: scale(1.1);
  }
`,Zy=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,qy=(n,i)=>n?n==="F2"?`단축키: F2 + ${i}`:`단축키: ${Zy?"Option":"Alt"} + ${i}`:"단축키: 미사용",Ky=n=>{const{selectedSlotNo:i,hotkey:l,onClick:u}=n;return c.jsxs(Wy,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:qy(l,i)}),c.jsx(Qy,{"aria-label":"단축키 전환하기",onClick:u,children:c.jsx(mg,{})})]})},Xy=[1,2,3,4,5,6,7,8,9,0],Jy=n=>{const{quickSlotsInfo:i,isLoaded:l,onHotkeyChange:u,onSlotChange:d,onSlotDelete:p,onSlotNoChange:h}=n,{selectedSlotNo:y,slots:v,hotkey:x}=i,[S,T]=w.useState(!1),[C,j]=w.useState(0),M=()=>{if(l){if(x===null){u("Alt");return}if(x==="Alt"){u("F2");return}u(null)}},b=()=>{const q=[];return Xy.forEach(W=>{v[W].isEmpty||q.push(W)}),q},P=()=>{T(!0)},X=()=>{T(!1)},$=(q,W)=>{if(!l)return;const ye=q.trim()===""?`추첨 ${y}`:q;d(ye,W),X()},Z=()=>{l&&p()},U=q=>{h(q)};return{slot:v[y],selectedSlotNo:y,hotkey:x,occupiedSlotNos:b(),gachaProblemCount:C,shouldEditModalShow:S,switchHotkey:M,openEditModal:P,closeEditModal:X,updateSlot:$,deleteSlot:Z,setSelectedSlotNo:U,setGachaProblemCount:j}},ex=(n,i)=>n.length>Ro?{isValid:!1,errorMessage:`추첨 이름의 길이가 너무 길어요. ${Ro}자 이하가 되도록 줄여 주세요.`,focusElementName:"title"}:i.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:i.length>Qn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Qn}자 이하가 되도록 줄여 주세요.`,focusElementName:"query"}:{isValid:!0},tx=n=>{const{initTitle:i,initQuery:l,onSlotChange:u}=n,[d,p]=w.useState(i),[h,y]=w.useState(l),[v,x]=w.useState(""),[S,T]=w.useState(void 0),C=w.useRef(null),j=w.useRef(null);return w.useEffect(()=>{p(i),y(l),x(""),T(void 0)},[i,l]),{title:d,query:h,errorMessage:v,isTitleElementHasErrors:S==="title",isQueryElementHasErrors:S==="query",setQuery:y,setTitle:p,submitSlotInfo:()=>{const X=ex(d,h);if(X.isValid){u(d,h),x("");return}const $=C.current,Z=j.current,{focusElementName:U}=X;U==="title"&&($==null||$.select()),U==="query"&&(Z==null||Z.select()),T(U),x(X.errorMessage)},titleRef:C,queryRef:j}},nx=g.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 320px;
`,Xd=g.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,rx=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`,ox=n=>{const{title:i,query:l,open:u,onClose:d,onSlotChange:p}=n,{title:h,query:y,errorMessage:v,isTitleElementHasErrors:x,isQueryElementHasErrors:S,setQuery:T,setTitle:C,submitSlotInfo:j,titleRef:M,queryRef:b}=tx({initTitle:i,initQuery:l,onSlotChange:p});return c.jsxs(Zn,{title:"추첨 수정",open:u,onClose:d,closeOnBackdropClick:!1,children:[c.jsxs(nx,{children:[c.jsxs(Xd,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"추첨 이름"}),c.jsx($t,{type:"text",width:"100%",height:"30px",name:"title",value:h,ref:M,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:x,"aria-label":"새로운 추첨 이름을 입력해주세요",onChange:P=>{C(P.target.value)}})]}),c.jsxs(Xd,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"쿼리"}),c.jsx(R1,{width:"100%",height:"150px",value:y,ref:b,hasError:S,placeholder:"새로운 쿼리를 입력해주세요",onChange:T})]}),c.jsxs(rx,{children:[c.jsxs(pe,{type:"normal",fontSize:14,children:[c.jsx(g1,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),c.jsx(pe,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]}),c.jsx(m1,{fontSize:14,errorMessage:v})]}),c.jsxs(jo,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:H.color.LIGHT_GRAY,disabled:!1,onClick:d}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:H.color.GOLD,disabled:!1,onClick:j})]})]})},ix=at`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`,lx=at`
  0% {
   opacity: 0.3;
  }
  
  50% {
    opacity: 1;
  }

  100% {
   opacity: 0.3;
  }
`,sx=at`
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
`,ax=at`
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
`,cx=at`
  from {
    pointer-events: none;
    opacity: 0;
  }

  to {
    pointer-events: auto;
    opacity: 1;
  }
`,ux=g.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 550px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${nm});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }
`,Jd=g.div`
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

  ${({$align:n})=>n==="left"?ne`
          left: 20px;
        `:ne`
          right: 20px;
        `};
`,e2=g.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,k1=ne`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  border: 2px solid ${({theme:n})=>n.color.LIGHT_GRAY};
  border-radius: 50%;
  background: transparent;

  &:hover {
    box-shadow: 0 0 10px ${({theme:n})=>n.color.LIGHT_GRAY};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  transition:
    box-shadow,
    transform 0.2s;
`,dx=g.button`
  ${k1}

  & > img {
    height: 70%;

    filter: ${({theme:n})=>n.filter.LIGHT_GRAY_FILTER};
  }
`,fx=g.button`
  ${k1}

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_GRAY};
  }
`,px=g.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,hx=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,gx=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,mx=g.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`,vx=g.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_RED};
  }
`,yx=g.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({theme:n})=>n.color.LIGHT_RED};
  text-align: center;
`,xx=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,t2=g.li`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  word-break: break-all;
`,Sa=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;
`,Ax=g.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`,wx=g.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.WHITE};
  }

  animation: ${ix} 3s linear infinite;
`,n2=g.div`
  display: flex;
  column-gap: 8px;
`,Sx=g.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};

  animation: ${lx} 2s linear infinite;
`,Tx=g.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100%;
`,Ex=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,Nx=g.div`
  width: 25px;
  height: 25px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.PURE_WHITE};
  }

  animation: ${sx} 1.5s infinite;
`,Rx=g.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.WHITE};
`,Ix=g.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,kx=g.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 60px 20px 20px 20px;

  opacity: 0;
  animation: ${ax} cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s 0.3s forwards;
`,Cx=g.div`
  position: absolute;
  left: 0;
  bottom: 65px;

  width: 100%;
  height: 20px;
`,jx=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;

  opacity: 0;
  pointer-events: none;
  animation: ${cx} 0.3s 1s forwards;
`,Mx="/assets/unrated-card-iGk2lhrr.png",Dx="/assets/bronze-card-Ctc25mzn.png",Lx="/assets/silver-card-Cgb8QXRF.png",Ox="/assets/gold-card-DjMsoKXy.png",bx="/assets/platinum-card-CZ601BWQ.png",Gx="/assets/diamond-card-Eub_to2I.png",_x="/assets/ruby-card--BnHlKWe.png",Hx="/assets/hidden-card-BS-zY2RF.png",zx="/assets/card-box-front-black-Bn2hoJwG.png",Px="/assets/card-box-front-red-CP52fAYR.png",Bx="/assets/card-box-front-green-CaU66ZRJ.png",Fx="/assets/card-box-front-blue-BM7ozDKr.png",Ux="/assets/card-box-front-gold-as3E5etT.png",$x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgKRT1kAAAOJSURBVHic7d0xchNJFMbx1z1VMolLE26VPa4mIzQ3gBuwN+AGcAM22xBu4CPADSAkg802Q5Tt3FYozeveRHaxxmBNv+6xLP1/mV0186YUdM1rff3kZGRd170UkZOx6wK4d3+enp5+GLOgG7NYCCGo6hcRacesC2AjXDRN83Q2m83GKujHKiQioqpvhcUN2FWtqo7avTVjFTo6OnotIq/HqgdgI4W2bS8vLy8/j1FslBb14ODg2Hv/UXh7AyAiMcan5+fnX2vXqd6ihhDapmlOhMUNwMrqhad+ndoFVPVNSum4dh0AD0rbdd372kWq7sF1XfdCRN7VrAHgwXoynU7/mc/n/9YqUG0PLoTQquo3oTUF8GtVoyPVWtTV18FtrfsD2ApVoyNVWlQiIQAGqBYdKd6icloBQI4a0ZGiLepq343WFMBg3vvi36oWXeD6vn8lIs9K3hPAzghd1xXdjyvWoh4eHj5zzr2XzLe3lJIsFgtJKZV6JAD3xDknk8lEnBu+xKSUnp+dnX0q8hwlbhJCaGOMHy2B3sViITHGEo8DYAN472UymeRcetE0zePZbHZhfgbrDUTspxX6vmdxA7ZMjFH6vs+5tFXVIvtx5pjIKhLyV+71KaXcDwHAhosxStM0Oa1qKHHKwdSiWiMhKSVZLpe8vQFbzDkne3t7OZeaTzmYWlTrAEtVZXEDttzVi0yGNsZoalWzW1TraQVDfw7ggUkpifc+p1X9w3LKIatFtQ6wJBIC7B5LdCT3lMPgFrXEAEtVZXEDdoyhVc0ekDl4gbNGQlSV1hTYUTHG3H33rAGZg/bgrAMsLSs4gO1giI4MHpC5doUSAyw5rQBAZLzoyNotqnVKCKcVAFwxBPwHDchcq0W1RkI4rQDgJssph3WjI3femUgIgFoMrepa0ZHftqghhNZ7bz6twOIG4DZXL0A51hmQ+dsFzjrAktMKAO5iiI6Eu6Ijv9yDWw2wfCcij3IqEwkBsK5a0ZFb78YASwBjqzEg89YWVVVPGGAJYEw1BmT+1KISCQFwX4wDMr/P5/OvP/7zf3dhgCWA+2Y55RBjfP5jdOS6RS3xm6YMsARgZYiOtDejI9cLXIzxpRgjIaqaezkAXDNGR95e/eFEOK0AYPOU+G1VX2KA5XK5ZHEDUJQlS7v6EXpp9vf3/xaRF7kP0fc9rSmAKlJK4pwT7wfP5n00nU6P/wNvYiJR2sRuggAAAABJRU5ErkJggg==",Vx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2NWJjNmE2LTdhYjMtNGQ0Ny1hYTI1LWIxYzQ5NmFkZDI5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3ZDViNDA4LWNmNzUtNmE0Yy04ODgyLWQwZWI3MmNjMTdkZCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjViYzZhNi03YWIzLTRkNDctYWEyNS1iMWM0OTZhZGQyOTYiIHN0RXZ0OndoZW49IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46OB6bAAAD0UlEQVR4nO3dS24bRxCA4eomQSm72dsjTG4g7wLJAkY3kG+gnMC6QY6gI+gI9g0swE6QXXKDEKC91zKa6e7KwqRhO9ZjuqebFPl/OwkY1mhT6GpWlYyswUldX6rIxTpiA1iLtx8Wi1clA6qqmJIBRUSO6vrcilyVjgtgvYzIq/eLxdtS8YonuF+appl6/5eIVCXjAtgIN24yefHnfD4vEUxVxZYItDL1/lJIbsCuqqbeF63eiiW444ODCxE5KxUPwEZql7mgiCIl6tGzZ4fW2nfC6Q2AiIQQXvzx6dPfOWMUKVHbpqnsZHIlJDcAS8sDT/44uQN4738T1cPccQA8KdXLun6TO0jWEvWkrs9UJPsfAeBpytk6krVNpG2aynn/j1CaArhbttaRrHdw7vPXwVWuzwewFbK2jmRJcLSEABggW+vI6CUq0woAYozdOjJ6ido2zeq4WY35uQC2n7F29C8kp2N+mHPutRjTxjzrQ5DbrhvzdQCsyd5sJhM77PxkRJrjur76fbH4daz3GK1Effn8eSvGvJGI05uqyr9dJ6o61usAWCNjjOzNZmJNRIpRPf3w8eN16juM1ibSNk3lQngX29B723XiQxjjVQBsCGut7M9mMY/eTCeTn6/n85uU+KPdwaVMKzjnSG7AFgohiHMu5tHKeT/KfVxygjs+OLiI3c4bVKX3PvUVAGyozjkJcVdP7Uldn6XGTypRU1pCVFVu+14Cpzdgq1ljZH9vL+bRpCmH5BI1ZYGl857kBuyAoCpd38c8Wk1DSCpVoxNcyrSCD0EcpSmwM5z3cXftqocpUw5RJWrKAktVlduui63LATxRxhjZn83ERLSOxEw5RJWoqQsse+9JbsAOWt27x4hdkDk4wSW1hHgf+7UxgC0QQohtC4takDnorJiywDIsS1OmFYDdljLlMGRB5qBJhtQFlkwrAFgp0Toy6A4uZYEl0woAvhZUo6cchizIfFSCS2kJYVoBwI+kTDk8tnXkwRKVlhAAuRhj5Ke4UvXB1pEHS9S2aSprbfS0Ai0hAO6zOgTFeMyCzHsTnHPutYi0McF9/CYBADvER7aOGJHmodaROxPccoHlxeCo8jkrR86eAdhBXd/HVntn920d+eEdHAssAZQ29oLMO+/gnPdXLLAEUFKOBZn/S3C0hABYl5TWkaO6Pv/+l9+UqCywBLBuKVMOIYTTVevINyVq6v80ZYElgDGE+NaR6vvWkS8Jrg/hXFJaQihNAYwkpXXkpK4vv/qZaQUAmydlQaaonr5fLK5t6gLLhP4VALhTyoLM5T+hl/8A2pI/aItnBBUAAAAASUVORK5CYII=",Yx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfDJPYAAAPwSURBVHic7d1BVtxGEIDh6paDAGehfTx5yiJmlvL4AnADfAN8AnODHIEjcAT7BvYFYs8uJFmE90j2bBIYSd2VxXjy4jgwo+6WZvD83w7ea0rMop6qqSqMrMFocnAmYk7XERvAOuibq/c/vxg0oqqYIQOKiIwm4xMROR86LoA1M/7F1Y+/vBkq3OAJrqzGpbP6QcQUQ8YFsAn0OvPm2eX04nKQaKpihwi04KyekdyAbWUKZ4at3gZLcN9ODk5FzPFQ8QBsICOH81wwVLgBfFN9X1lr3/L2BkBExHv37I/pr9M+YwxSopZVWWSZPSe5AViYv/AMEKfvAM7mP6iaqu84AB4SU4wmB697j9LnDx89f3osanv/JQA8UD22jvTaJlJWZeFs/hulKYC79dc60usdnLM5924Alui3daSXBEdLCICV9dg6krxEZVoBQIjUrSPJS9SyKj++bpLcAHRjbZb8D5KPUv6w1u6+MiKHoed920hd3yZ8IgDrsLOzK/bRV12PlaPJ+Pzq/cXLVM+RrER9Uo0PjdXXoW9vqir1zZ+ioqkeCcCaGDGys7cvxnQvEtXL0e/Ti3exz5CsTaSsysJn+duYht56diveNSkeB8AGsFkmO/l+wEm9zvzsu8vp5XVM/GR3cLHTCm1Tk9yAL4x3TtqmDjhpCmd2k9zHRSe4jy0hp6HnVb24oA8BwKZrm5mod90PGjkcPX96HBs/qkSNbQlRVWnqG/Eu4AMA8CAYYyXfexxwMm7KIbpEjV1g6dqa5AZ84VS9NEHdEabwmUaVqsEJLnZawTsnruHeDdgGrm2CXmZUTRUz5RBUosYusFRVqW9vRJW3N2BbzFtHHosx3dNOyJRDUImaYoGla2qSG7BlVOZ37iFCF2R2TnCxLSGubaRt+aspsI28c+LbkKupsAWZnd4VYxdYqnqpb/5iWgHYYjFTDl0WZHaaZEixwJJpBQAiIsZkku+FTjms1jrS6Q4udoEl0woAFlRjphxWX5C5UoKLbQlR75hWAPCJmCmHVVtHlpaotIQA6IsRI/n+10Fnl7WOLC1Ry6osrMniphVoCQFwBxWVeha2A3KVBZn3JrjW7r4SE7fAkpYQAPfxrglsHZFyWevInQnuSTU+NKKnIVFFFoP0s9DjALZIU89E1QecNMf3bR353zs4FlgCGFrqBZl33sE5m5+zwBLAkPpYkPlZgqMlBMC6RC3InIxPPv/2v7DAEsC6xSzI9N4fLVpHPilRU/xPUxZYAoil6gNbR0zx39aRfxKct/lJVEsICywBJBLZOnK2+MKIMK0AYPPELMhUL0dXH356Z1MssJz3sJDcAKQTsyBz/k/oRf4Gq9snW0kHgDsAAAAASUVORK5CYII=",Wx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoJaQIcAAAPESURBVHic7d1LbhNBEIDh6rZlw272YdBwg7BDgUjODcINwgnIDThCjpAjwA2IxEPs4AZYcthnSTzdXSxsRyRgnOmeadv4/3aJ1KnJpjTVriobWYOyPDwT0dN1xAawFu8mk48vcwZUVTE5A4qIlOXBiYg9zx0XwLqZl5PJh3e5omVPcFX1rPK+/1VEipxxAWyEq17PPR2Pv4xzBFNVsTkCLXjfPxOSG7CrCu/7Wau3bAnu8ePnpyJynCsegI00mueCLLKUqHt7B/vW2vfC2xsAEQkhPP3x4/O3LmNkKVGralT0evZcSG4A5uYvPN3H6TqA9/6Nqux3HQfAVinK8sXbroN0WqKW5eGxiHb+TwDYVt21jnTaJlJVo8J7910oTQEs11nrSKd3cN477t0ArNJp60gnCY6WEAANdNY60nqJyrQCgBhtt460XqLO7t36lKYAGrPWtP6BZL/NP+ace22MjGLOhuBlOr1u83EArMlgMBRrew1Pmaosn59PJp9etfUcrZWojx69GBkjbyXi7U1VZTr9Kara1uMAWCNjjAwGQzGmeZGoKkeXlx8vUp+htTaRqhoVIbj3sQ290+m1hODbeBQAG8JaK4PBg5ijV71e/8l4fHGVEr+1O7iUaQXnHMkN+A+FEMQ5F3O08N61ch+XnOBmH+/GbedVDeJ9nfoIADaUc1NRDTFHR7NJqDRJJWpKS4iqSl1fSwhR/zyALWGMleEwtlSNn3JILlFTFlh670huwA5QDVLX05ijRQj9pFI1OsGlTCuE4MX7qNocwBaavdA0v2tXlf2UKYeoEjVlgeWsJeQ6ti4HsKVmrSMPxJjmaSdmyiGqRE1dYOl9TXIDdtDi3j1G7ILMxgkupSXEexf7sTGA/0AIIbYtLGpBZqN3xZQFlqphXpoyrQDsspQphyYLMhtNMqQusGRaAcBCjtaRRndwKQssmVYA8DvVlCmH+y/IvFeCS2kJYVoBwN+kTDnct3VkZYlKSwiArhhjZDh8GHV2VevIyhK1qkaFtTZhWoGWEADLLV6CYtxnQeY/E5xz7rVI/AJLWkIArBKCj7yjN9Wq1pGlCW6+wPI0Iuq8oS9q9gzADqrr6Pu4439tHfnrHRwLLAHk1vaCzKV3cN67cxZYAsipiwWZfyQ4WkIArEvagsyDk7u/vFWissASwLqlTDmEEI4WrSO3StTU7zRlgSWANizm1iMUd1tHbhJcCPWJJLSEsMASQFvSWkcOz25+EmFaAcDmSVmQqSpHk8mHC5u6wDKhfwUAlkpZkDn/Enr5Be7yP2gjXwXJAAAAAElFTkSuQmCC",Qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm80oXMAAAPjSURBVHic7d1LbhtHEIDh6iYh0rvZxxSYvUWPd4EewOgG8g2UE4Q38BF0BB3BvoEF2AmyiwxnHwFK9lqaw+7qLCQGjm2amu6eISX+304ChjXaFLpaVUUja3A0GZ0Fkek6YgNYAyNv3n+4ftllyBCCmC4Diojs741OrZHzruMCWC8T5OW7j9dvuorXeYL7qRyP++r/EJGiy7gANsKNs70Xv19eXXURLIQgtotAC/3gz4TkBmyrou99p9VbZwnuYLI7lSAnXcUDsIGMVAeT3Wl34TqwX/5QWrVvhdMbABFRqy9+u/znss0YnZSoVTkurPbOheQG4M7dgaf9OG0H8OpfiYSy7TgAHpTi8PnoddtBWi1Rj/ZGJ8FI638EgIepzdaRVttEqnJcOPV/CaUpgOVaax1p9Q7OBc+9G4BVWm0daSXB0RIC4N5abB3JXqIyrQAgRu7WkewlalWOF8fNIufnAnj8jNrs/5Ds5/wwp+4XMaaKfd57ldmszvdCANZiMNiRXq/Z+cmIjA+ej85//XD9c673yFaiHj57Wok1ryXy9BZCkE+fagkh5HolAGtijJHBYEesjUgxGo7f//n3Reo7ZGsTuW0J0bcpDb2zWS3ea47XAbABbM/KcLAT8+hN3/Z+vLi8ukmJn+0OLnVawTlHcgMeGfUqzrmYRwvnfZb7uOQEdzDZnaZs51UNMp/71NcAsIHq2olqxLWTkepob3SSGj+pRE1tCQkhyKyei3J6Ax4ta4wMnwxiHk2ackguUVMXWDrnSW7AI6chSD2bxzxa9FWTStXoBJc6reC9inOUpsA2cN5H3rOHMmXKIapETV1gGUKQ2ayOq80BPEjGGBkOd8SY5mknZsohqkTNscByPvckN2DLLO7cY8QuyGyc4NJbQnzsv44BPHDqNbYlLGpBZqOzYuoCS9Xb0pRpBWB7pUw5NFmQ2WiSIccCS6YVAIiIWGtkOGy3daTRHVzqAkumFQAsqIboKYcmCzLvleBSW0KYVgDwpZQph/u2jqwsUWkJAdAWY4w8iZtyWNk6srJErcpxYb1NmlagJQTAMosDUIz7LMj8boK7XWApVVR0WUwr0BICYDkf2TpiRMarWkeWJrjDZ08rETNtHPVOCEHqyKY+ANulrudxlV6Qk+9tHfnmHRwLLAF0LfeCzKV3cLctISywBNCdNhZkfpXgaAkBsC4prSP7e6PTr3/9GRZYAli3lAWZavV40TryvxI1x3eassASQCqNbx0pvmwd+S/BzVVP01tCKE0BpEtpHTmajM4++5lpBQCbJ2VBpmg4fvfx+sLmWGAZ3cMCAEukLMi8+xJ6+RcJHUqkAQAT5gAAAABJRU5ErkJggg==",Zx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABVCAMAAAAbt1PlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaGhoaGhkZGRkZGRgYGBoaGhsbGyAgIBoaGhoaGhoaGhgYGBoaGhsbGxoaGhsbGxQUFEvJrZYAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWVJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Yhl+QYycZD1FNITiwAAAABJRU5ErkJggg==",qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcaGjcaGjcZGTcZGTgYGDcaGjUbGzAgIDcaGjYaGjcaGjgYGDcaGjcbGzYaGjgbGygUFCzbu+wAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Kx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABQyHxQyHhQxHRQyHhAwIBQyHhUwIBAwIBMyHhQyHhMyHhQwHBQzHhQyHhMzHRMyHRUjGd0mtLoAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Xx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaNxoaNxkZNxkZNxgYOBoaNxsbNSAgMBoaNxoaNhoaNxgYOBoaNxsbNxoaNhsbOBQUKK3qr6AAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Jx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcnGjcoGjcoGTcnGTgoGDcnGjUlGzAgIDcoGjYoGjcoGjgoGDcnGjcnGzYmGjgoGygeFGHYzFEAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",gt={unrated:Mx,bronze:Dx,silver:Lx,gold:Ox,platinum:bx,diamond:Gx,ruby:_x,hidden:Hx},Ta={front:{black:zx,red:Px,green:Bx,blue:Fx,gold:Ux},inside:{black:$x,red:Vx,green:Yx,blue:Wx,gold:Qx},top:{black:Zx,red:qx,green:Kx,blue:Xx,gold:Jx}},e5=at`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,t5=at`
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
`,n5=at`
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
`,r5=at`
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
`,o5=g.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${e5} 0.25s forwards;
`,C1=g.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:n})=>n&&ne`
      animation: ${t5} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:n})=>!n&&ne`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,i5=g.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:n})=>n.color.BLACK};

  ${C1}:hover > & {
    box-shadow: 0 0 75px ${({theme:n})=>n.color.GOLD};
  }

  ${({theme:n,$isCardBoxOpening:i})=>i&&ne`
      box-shadow: 0 0 75px ${n.color.GOLD};
    `};
`,l5=g.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,s5=g.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:n})=>!n&&ne`
      opacity: 0;
    `}
`,Ea=g.img`
  position: absolute;
  top: ${({$top:n})=>n};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:n,$delay:i})=>n&&ne`
      animation: ${r5} 1.5s ${i}s forwards;
    `}
`,a5=g.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,c5=g.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:n})=>n&&ne`
      animation: ${n5} 1.1s ease-in-out forwards;
    `}
`,u5=n=>{const{color:i,isTierHidden:l,cardRanks:u,onFirstClick:d,onOpenAnimationEnd:p}=n,[h,y]=w.useState(!1),v=u[0],x=u[1],S=u[2];return c.jsx(o5,{children:c.jsxs(C1,{autoFocus:!0,onClick:()=>{y(T=>(T||d(),!0))},$isCardBoxOpening:h,onAnimationEnd:T=>{h&&T.target===T.currentTarget&&p()},"aria-label":"카드 상자를 열어 추첨 진행하기",children:[c.jsx(i5,{$isCardBoxOpening:h}),c.jsx(l5,{src:Ta.inside[i],draggable:!1}),c.jsxs(s5,{$isCardBoxOpening:h,children:[v&&c.jsx(Ea,{src:v!=="unrated"&&l?gt.hidden:gt[v],draggable:!1,alt:"",$isCardBoxOpening:h,$top:"0",$delay:1.5}),x&&c.jsx(Ea,{src:x!=="unrated"&&l?gt.hidden:gt[x],draggable:!1,alt:"",$isCardBoxOpening:h,$top:"4%",$delay:1.65}),S&&c.jsx(Ea,{src:S!=="unrated"&&l?gt.hidden:gt[S],draggable:!1,alt:"",$isCardBoxOpening:h,$top:"8%",$delay:1.8})]}),c.jsx(a5,{src:Ta.front[i],draggable:!1,alt:""}),c.jsx(c5,{src:Ta.top[i],draggable:!1,alt:"",$isCardBoxOpening:h})]})})},d5=g.div`
  display: flex;
  visibility: ${({$visible:n})=>n?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:n})=>n};
  justify-content: center;

  width: 100%;
  height: 100%;
`,f5=g.div.attrs(({$gap:n,$width:i,$height:l})=>({style:{gap:`${n}px`,padding:`${n}px`,width:`${i}px`,height:`${l}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,p5=g.div.attrs(({$gap:n})=>({style:{rowGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,h5=g.div.attrs(({$gap:n})=>({style:{columnGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,g5=()=>{const[n,i]=w.useState(0),[l,u]=w.useState(0);return{rotateX:n,rotateY:l,adjustCardTweak:h=>{const y=h.currentTarget.getBoundingClientRect(),v=h.clientX-y.left,S=((h.clientY-y.top)/y.height-.5)*20,T=(v/y.width-.5)*-20;i(S),u(T)},resetCardTweak:()=>{i(0),u(0)}}},m5=(n,i)=>i?gt.hidden:n>=1&&n<=5?gt.bronze:n>=6&&n<=10?gt.silver:n>=11&&n<=15?gt.gold:n>=16&&n<=20?gt.platinum:n>=21&&n<=25?gt.diamond:n>=26&&n<=30?gt.ruby:gt.unrated,v5=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,y5=g.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,x5=g.div.attrs(({$rotateX:n,$rotateY:i,$width:l})=>({style:{transform:`perspective(${l*3}px) rotateX(${n}deg) rotateY(${i}deg)`,width:`${l}px`,height:`${l*1.36}px`,borderRadius:`${l*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:n})=>n.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:n,$isTierHidden:i})=>`url(${m5(n,i)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  }
`,A5=g.a.attrs(({$cardWidth:n})=>({style:{rowGap:`${n/30}px`,padding:`${n/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,w5=g.img.attrs(({$cardWidth:n})=>({style:{height:`${n/2.4}px`,margin:`${n/4.016}px 0 ${n/16.066}px 0`}}))``,S5=g.div.attrs(({$cardWidth:n})=>({style:{fontSize:`${n/7.531}px`,lineHeight:`${n/7.531}px`}}))`
  color: ${({$tier:n,$isTierHidden:i,theme:l})=>v5(n,i,l)};
  font-family: 'Cafe24ClassicType';
`,T5=g.div.attrs(({$cardWidth:n,theme:i})=>({style:{height:`${Math.max(28,n/6.694)}px`,color:`${i.color.WHITE}`,fontSize:`${Math.max(14,n/13.388)}px`,lineHeight:`${Math.max(14,n/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,E5=g.div.attrs(({$movement:n})=>({style:{backgroundPosition:`${n+60}%`}}))`
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
`,r2=n=>{const{problemInfo:i,isTierHidden:l,width:u,tabIndex:d,linkButtonRef:p,onHover:h,onKeyDown:y}=n,{problemId:v,title:x,tier:S}=i,{rotateX:T,rotateY:C,adjustCardTweak:j,resetCardTweak:M}=g5();return c.jsx(y5,{children:c.jsx(x5,{$width:u,$tier:S,$isTierHidden:l,$rotateX:T,$rotateY:C,onMouseMove:j,onMouseOut:M,onMouseOver:h,children:c.jsxs(A5,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${v}`,"aria-label":`문제 번호 ${v}번 ${x}`,tabIndex:d,ref:p,onKeyDown:y,$cardWidth:u,children:[c.jsx(w5,{$cardWidth:u,src:l?tc.hidden:Rn[S],alt:"",draggable:!1}),c.jsx(S5,{$cardWidth:u,$tier:S,$isTierHidden:l,children:`#${v}`}),c.jsx(T5,{$cardWidth:u,children:x}),c.jsx(E5,{$movement:T+C})]})})})},yo=120,Fa=1/1.36,N5=(n,i,l)=>{const{rowCount:u,columnCount:d,cardGridGap:p,cardWidth:h,innerGridWidth:y,innerGridHeight:v,isOverflow:x}=R5(n,i,l);if(x)return{cardWidth:h,cardGridGap:p,innerGridWidth:y,innerGridHeight:v,isOverflow:x};const S=k5(u,d,l);return{cardWidth:h,cardGridGap:p,rowCardCounts:S,isOverflow:x}},R5=(n,i,l)=>{let u={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let C=1;C<=l;C+=1){const j=Math.ceil(l/C),{cardWidth:M,cardGridGap:b,isOverflow:P}=I5(n,i,j,C);!P&&M>u.cardWidth&&(u={rowCount:j,columnCount:C,cardWidth:M,cardGridGap:b,isOverflow:P})}if(u.isOverflow){const C=Math.max(1,Math.floor((n-yo/10)/(yo*1.1)));u={rowCount:Math.ceil(l/C),columnCount:C,cardWidth:yo,cardGridGap:yo/10,isOverflow:!0}}const{rowCount:d,columnCount:p,cardWidth:h,cardGridGap:y,isOverflow:v}=u,x=h/Fa,S=p*h+(p+1)*y,T=d*x+(d+1)*y;return{rowCount:d,columnCount:p,cardWidth:h,cardGridGap:y,innerGridWidth:S,innerGridHeight:T,isOverflow:v}},I5=(n,i,l,u)=>{const d=n*10/(11*u+1),p=i/(l*(1/Fa+.1)+.1),h=Math.max(yo,Math.min(d,p)-1),y=h/10,v=h/Fa,x=u*h+(u+1)*y,S=l*v+(l+1)*y,T=x>n||S>i;return{cardWidth:h,cardGridGap:h/10,isOverflow:T}},k5=(n,i,l)=>{const u=Array.from({length:n}).map(()=>i),d=n*i-l;for(let p=0;p<d;p+=1)u[n-p%n-1]-=1;return u},C5=n=>{const{cardCount:i}=n,[l,u]=w.useState(i),[d,p]=w.useState(0),[h,y]=w.useState(0),[v,x]=w.useState(!1),S=w.useRef(null);return w.useEffect(()=>{u(l)},[i]),w.useLayoutEffect(()=>{const T=S.current;if(!T)return;const C=()=>{const{clientWidth:M,clientHeight:b}=T;p(M),y(b),x(!0)},j=new ResizeObserver(()=>{C()});return j.observe(S.current),()=>{j.disconnect()}},[]),{...N5(d,h,l),isLoaded:v,cardGridRef:S}},j5=n=>{const{problemInfos:i,isTierHidden:l,onCardHover:u}=n,d=i.length,p=C5({cardCount:d}),{cardWidth:h,cardGridGap:y,isOverflow:v,isLoaded:x,cardGridRef:S}=p,{getRovingProps:T}=To({count:d});let C=0;return c.jsx(d5,{ref:S,$visible:x,$overflowY:v?"auto":"visible",children:v?c.jsx(f5,{$width:p.innerGridWidth,$height:p.innerGridHeight,$gap:y,children:i.map(j=>{const{ref:M,...b}=T(C),P={...b,linkButtonRef:M};return C+=1,c.jsx(r2,{width:h,problemInfo:j,isTierHidden:![0,31].includes(j.tier)&&l,onHover:u,...P},j.problemId)})}):c.jsx(p5,{$gap:y,children:p.rowCardCounts.map((j,M)=>c.jsx(h5,{$gap:y,children:Array.from({length:j}).map(()=>{if(!i[C])return null;const b=i[C],{ref:P,...X}=T(C),$={...X,linkButtonRef:P};return C+=1,c.jsx(r2,{width:h,problemInfo:b,isTierHidden:![0,31].includes(b.tier)&&l,onHover:u,...$},b.problemId)})},M))})})},M5=n=>{if(!(Ne(n)&&"success"in n&&typeof n.success=="boolean"))return!1;const{success:i}=n;if(i)return"problemInfos"in n&&L5(n.problemInfos);if("statusCode"in n&&typeof n.statusCode!="number"||!("errorMessage"in n)||typeof n.errorMessage!="string")return!1;if(!("errorDescriptions"in n))return!0;const{errorDescriptions:l}=n;return typeof l=="string"||Array.isArray(l)&&l.every(u=>typeof u=="string")},D5=n=>Ne(n)&&"problemId"in n&&"title"in n&&"tier"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&nc(n.tier),L5=n=>Array.isArray(n)&&n.every(i=>D5(i)),O5=["bronze","silver","gold","platinum","diamond","ruby"],b5=n=>{if(n.length===0)throw Error("프리뷰 카드 랭크 계산을 위해서는 최소 1문제의 정보가 제공되어야 합니다.");if(n.length===1){const y=n[0].tier;return[$i(y)]}if(n.length===2){const y=n[0].tier,v=n[1].tier;return[$i(y),$i(v)]}const i={unrated:0,bronze:0,silver:0,gold:0,platinum:0,diamond:0,ruby:0};n.forEach(({tier:y})=>{i[$i(y)]+=1});const l=Object.entries(i).sort((y,v)=>v[1]-y[1]);if(!G5(l))throw Error("프리뷰 카드 랭크 계산 중 데이터 불일치를 발견했습니다.");const[u,d]=l[0],p=l[1][0],h=l[2][0];return d===n.length?[u,u,u]:d*2>n.length?[u,u,p]:[u,p,h]},$i=n=>n===0||n===31?"unrated":O5[Math.floor((n-1)/5)],G5=n=>n.every(([i])=>w4(i)),_5=n=>{const i=n.reduce((d,p)=>d+p.probability,0);if(Math.abs(i-1)>1e-6)throw new Error(`확률의 합은 1이어야 하는데, 실제 확률의 합이 ${i}였습니다.`);const l=Math.random();let u=0;for(const{choice:d,probability:p}of n)if(u+=p,l<=u)return d;throw new Error("잘못된 확률 정보를 사용하셨습니다. 다시 확인해 주세요.")},H5=(n,i)=>Math.floor(Math.random()*(i-n+1))+n,z5="/assets/card-slide-1-BWULmWDl.wav",P5="/assets/card-slide-2-DSpetA15.wav",B5="/assets/card-slide-3-DsJdFER7.wav",F5="/assets/card-slide-4-2Wc5wS26.wav",U5="/assets/gacha-COr4DCSI.mp3",$5=[z5,P5,B5,F5],j1=n=>Ne(n)&&"isTierHidden"in n&&"isAudioMuted"in n&&typeof n.isTierHidden=="boolean"&&typeof n.isAudioMuted=="boolean",V5="🎲",Y5="✅",W5="📜",Q5=(n,i)=>{const l=i.map(({problemId:u,title:d})=>`- ${u}번 - ${d} (https://acmicpc.net/problem/${u})`).join(`
`);return`
# 추첨 결과 ${V5}

## 추첨 정보 ${Y5}

- 추첨 이름: ${n}
- 문제 수: ${i.length}

## 문제 목록 ${W5}
${l}
`.trim()},Z5=[{choice:"black",probability:.24975},{choice:"red",probability:.24975},{choice:"green",probability:.24975},{choice:"blue",probability:.24975},{choice:"gold",probability:.001}],q5=$5.map(n=>new Audio(n)),K5=n=>{const{open:i,slot:l,problemCount:u}=n,[d,p]=w.useState("loading"),[h,y]=w.useState([]),[v,x]=w.useState("black"),[S,T]=w.useState(""),[C,j]=w.useState([]),[M,b]=w.useState(!1),[P,X]=w.useState(!0),[$,Z]=w.useState(""),[U,re]=w.useState(!0),[q,W]=w.useState(!1),[ye,_e]=w.useState(!1),Le=w.useRef(new Audio(U5)),qe=h.length>0?b5(h):["unrated"],Ke=w.useCallback(async()=>{const te=await Ae.runtime.sendMessage({command:vo.GET_RANDOM_DEFENSE_RESULT,query:l.query,problemCount:u});if(!M5(te)){T("API로부터 불러온 데이터에서 데이터 불일치가 발견되었습니다."),j("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}if(!te.success){const{errorMessage:ce,errorDescriptions:ue}=te;T(ce),j(ue??[]),p("error");return}const oe=te.problemInfos;y(oe),p("ready")},[l,u]),He=w.useCallback(async()=>{const te=await Ae.runtime.sendMessage({command:vo.FETCH_GACHA_OPTIONS});if(!j1(te)){T("설정 데이터에서 불일치가 발견되었습니다."),j("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}const{isTierHidden:oe,isAudioMuted:ce}=te;b(oe),X(ce),_e(!0),Le.current.muted=ce},[]),Be=()=>{p("loading"),W(!1),x(_5(Z5)),Ke()},it=()=>{b(te=>!te)},Fe=()=>{X(te=>{const oe=!te;return Le.current.muted=oe,oe})},se=()=>{P||q5[H5(0,3)].play()},_=()=>{Y(),Le.current.play()},Y=()=>{Le.current.pause(),Le.current.currentTime=0},F=()=>{navigator.clipboard.writeText(Q5(l.title,h)),Z("문제 목록을 클립보드에 복사했어요!"),re(!1),setTimeout(()=>re(!0))},N=()=>{p("showingResult"),Z("")},D=()=>{const te=new Date().toISOString(),oe=h.map(ce=>({...ce,createdAt:te})).reverse();Ae.runtime.sendMessage({command:vo.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:oe}),W(!0),Z("문제 목록을 추첨 기록에 저장했어요!"),re(!1),setTimeout(()=>re(!0))};return w.useEffect(()=>{i&&Be()},[i,l,u]),w.useEffect(()=>{He()},[]),w.useEffect(()=>{ye&&Ae.runtime.sendMessage({command:vo.SAVE_GACHA_OPTIONS,isTierHidden:M,isAudioMuted:P})},[ye,M,P]),{gachaStatus:d,problemInfos:h,cardBoxColor:v,previewCardRanks:qe,errorMessage:S,errorDescriptions:C,isTierHidden:M,isAudioMuted:P,notificationMessage:$,shouldNotificationFadeOut:U,isSavedToHistory:q,restartGacha:Be,toggleIsTierHidden:it,toggleIsAudioMuted:Fe,playCardSlideAudio:se,playGachaAudio:_,stopGachaAudio:Y,copyProblemInfosMarkdownToClipboard:F,showResultScreenAndResetNotificationMessage:N,saveGachaResultToStorage:D}},X5=at`
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
`,J5=g.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${X5} 2s forwards;
  }
`,e7=g.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,t7=g.div`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 600;
`,n7=n=>{const{children:i,shouldFadeOut:l}=n;return c.jsxs(J5,{className:l?"fading":"",children:[i!==""&&c.jsx(e7,{children:c.jsx(Co,{})}),c.jsx(t7,{children:i})]})},r7=n=>{const{open:i,theme:l="totamjung",slot:u,problemCount:d,portalTarget:p,onClose:h}=n,{gachaStatus:y,problemInfos:v,cardBoxColor:x,previewCardRanks:S,errorMessage:T,errorDescriptions:C,isTierHidden:j,isAudioMuted:M,isSavedToHistory:b,notificationMessage:P,shouldNotificationFadeOut:X,restartGacha:$,toggleIsTierHidden:Z,toggleIsAudioMuted:U,playCardSlideAudio:re,playGachaAudio:q,stopGachaAudio:W,copyProblemInfosMarkdownToClipboard:ye,showResultScreenAndResetNotificationMessage:_e,saveGachaResultToStorage:Le}=K5({open:i,slot:u,problemCount:d});return c.jsx(Zn,{title:"즉석 추첨",open:i,theme:l,padding:"0",closeOnBackdropClick:!1,portalTarget:p,onClose:()=>{W(),h()},children:c.jsxs(ux,{children:[y==="loading"&&c.jsx(Ax,{children:c.jsx(Sa,{children:c.jsxs(n2,{children:[c.jsx(wx,{children:c.jsx($2,{})}),c.jsx(Sx,{children:"잠시만 기다려주세요..."})]})})}),y==="ready"&&c.jsxs(Tx,{children:[c.jsx(Ex,{children:c.jsx(u5,{color:x,isTierHidden:j,cardRanks:S,onFirstClick:q,onOpenAnimationEnd:_e})}),c.jsx(Sa,{children:c.jsxs(n2,{children:[c.jsx(Nx,{children:c.jsx(Rg,{})}),c.jsx(Rx,{children:"카드 상자를 클릭하면 결과를 확인할 수 있습니다"})]})})]}),y==="error"&&c.jsxs(px,{children:[c.jsx(hx,{children:c.jsxs(gx,{children:[c.jsxs(mx,{children:[c.jsx(vx,{children:c.jsx(U2,{})}),c.jsx(yx,{children:T})]}),c.jsx(xx,{children:typeof C=="string"?c.jsx(t2,{children:C}):C.map(qe=>c.jsx(t2,{children:qe},qe))})]})}),c.jsx(Sa,{children:c.jsx(Ce,{type:"button",name:"다시 시도하기",size:"large",color:H.color.LIGHT_RED,iconSrc:c.jsx(Ng,{}),disabled:!1,onClick:$})})]}),y==="showingResult"&&c.jsxs(Ix,{children:[c.jsx(kx,{children:c.jsx(j5,{problemInfos:v,onCardHover:re,isTierHidden:j})}),c.jsx(Cx,{children:c.jsx(n7,{shouldFadeOut:X,children:P})}),c.jsxs(jx,{children:[c.jsx(Ce,{type:"button",name:"문제 목록 복사",size:"large",color:H.color.LIGHT_GRAY,iconSrc:c.jsx(F2,{}),disabled:!1,onClick:ye}),c.jsx(Ce,{type:"button",name:"추첨 기록 저장",size:"large",color:H.color.LEMON,iconSrc:b?c.jsx(Co,{}):c.jsx(Ig,{}),disabled:b,onClick:Le}),c.jsx(Ce,{type:"button",name:"다시 추첨하기!",size:"large",color:H.color.ORANGE,iconSrc:c.jsx(W2,{}),disabled:!1,onClick:$})]})]}),c.jsxs(Jd,{$align:"left",children:[c.jsx(dx,{onClick:Z,"aria-label":j?"문제 난이도 보이기":"문제 난이도 감추기",children:j?c.jsx("img",{src:q2,alt:"",draggable:!1}):c.jsx("img",{src:Zg,alt:"",draggable:!1})}),c.jsx(e2,{children:`티어 숨기기: ${j?"ON":"OFF"}`})]}),c.jsxs(Jd,{$align:"right",children:[c.jsx(e2,{children:`효과음: ${M?"OFF":"ON"}`}),c.jsx(fx,{onClick:U,"aria-label":M?"효과음 켜기":"효과음 끄기",children:M?c.jsx(Cg,{}):c.jsx(kg,{})})]})]})})},o7=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,i7=/^\d+$/,l7=()=>{const[n,i]=w.useState("5"),l=d=>{const p=d.target.value;p.length>=3||i(p)},u=i7.test(n)&&Number(n)>=1&&Number(n)<=ol;return{inputValue:n,updateInputValue:l,isInputValueValid:u}},o2=["none","solvedAcLight"],s7=n=>{const{open:i,theme:l="totamjung",portalTarget:u,shouldShowHotkeyMessage:d,onClose:p,onSubmitProblemCount:h}=n,{inputValue:y,updateInputValue:v,isInputValueValid:x}=l7(),S=o2.includes(l);return c.jsxs(Zn,{title:"즉석 추첨",theme:l,portalTarget:u,open:i,onClose:p,children:[c.jsxs(o7,{children:[c.jsx(pe,{type:S?"black":"normal",fontSize:16,children:"추첨을 진행할 문제 수를 입력해 주세요."}),c.jsx($t,{type:"number",width:"100%",height:40,borderWidth:2,borderRadius:6,horizontalPadding:8,fontSize:18,min:1,max:ol,value:y,theme:l,onChange:v,autoFocus:!0}),c.jsx(pe,{type:S?"black":"normal",fontSize:14,textAlign:"right",children:`1문제 이상, ${ol}문제 이하`}),d&&c.jsx(pe,{type:"custom",fontSize:16,color:S?H.color.BLACK:H.color.WHITE,opacity:.8,children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),c.jsx(jo,{theme:l,children:c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:o2.includes(l)?H.color.DARK_GRAY:H.color.GOLD,disabled:!x,onClick:()=>h(Number(y))})})]})},a7=n=>{const{isLoaded:i}=n,{activeModalName:l,openModal:u,closeModal:d}=fl(),{slot:p,selectedSlotNo:h,hotkey:y,occupiedSlotNos:v,shouldEditModalShow:x,gachaProblemCount:S,setSelectedSlotNo:T,switchHotkey:C,openEditModal:j,closeEditModal:M,updateSlot:b,deleteSlot:P,setGachaProblemCount:X}=Jy(n);return c.jsxs(ic,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[i?c.jsxs(My,{children:[c.jsxs(Dy,{children:[c.jsx(Hy,{selectedSlotNo:h,occupiedSlotNos:v,onChange:T}),c.jsx(Ky,{selectedSlotNo:h,hotkey:y,onClick:C})]}),c.jsx(Yy,{...p}),c.jsxs(Ly,{children:[c.jsx(Ce,{type:"button",name:"쿼리 복사",size:"medium",color:H.color.LIGHT_GRAY,iconSrc:c.jsx(F2,{}),disabled:p.isEmpty,onClick:()=>{p.isEmpty||(navigator.clipboard.writeText(p.query),u("copiedQuery"))}}),c.jsx(Ce,{type:"button",name:"수정",size:"medium",color:H.color.SKY_BLUE,iconSrc:c.jsx(vg,{}),disabled:p.isEmpty,onClick:j}),c.jsx(Ce,{type:"button",name:"삭제",size:"medium",color:H.color.RED,iconSrc:c.jsx(dl,{}),disabled:p.isEmpty,onClick:()=>{u("confirmDeleteSlot")}}),c.jsx(Ce,{type:"button",name:"즉석 추첨",size:"medium",color:H.color.PURPLE,iconSrc:c.jsx(W2,{}),disabled:p.isEmpty,onClick:()=>{u("gachaProblemCount")}})]})]}):c.jsx(qa,{}),c.jsx(ox,{title:p.isEmpty?"":p.title,query:p.isEmpty?"":p.query,open:x,onClose:M,onSlotChange:b}),c.jsx(tn,{actionType:"confirm",width:"350px",height:"auto",open:l==="copiedQuery",onClose:d,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),c.jsx(tn,{actionType:"yesNo",width:"350px",height:"auto",open:l==="confirmDeleteSlot",onYesSelect:()=>{P(),d()},onNoSelect:d,title:"추첨 삭제 확인",message:`${h}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`}),c.jsx(s7,{open:l==="gachaProblemCount",shouldShowHotkeyMessage:!0,onClose:d,onSubmitProblemCount:$=>{X($),u("gacha")}}),!p.isEmpty&&c.jsx(r7,{open:l==="gacha",slot:p,problemCount:S,onClose:d})]})},c7=n=>n===null||n==="Alt"||n==="F2",lc=n=>!Ne(n)||!("isEmpty"in n)||typeof n.isEmpty!="boolean"?!1:n.isEmpty?!0:"title"in n&&"query"in n&&typeof n.title=="string"&&typeof n.query=="string",sc=n=>typeof n!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(n),u7=n=>{if(!(Ne(n)&&"selectedNo"in n&&typeof n.selectedNo=="number"))return!1;const{selectedNo:i,...l}=n;return!(i%1===0&&i>=0&&i<=9)||!p1(l)?!1:Array.from({length:10}).every((u,d)=>d in l&&lc(l[d]))},ac=n=>{if(!(Ne(n)&&"hotkey"in n&&"selectedSlotNo"in n&&"slots"in n&&typeof n.hotkey=="string"&&["Alt","F2"].includes(n.hotkey)&&sc(n.selectedSlotNo)))return!1;const{slots:i}=n;return p1(i)?Array.from({length:10}).every((l,u)=>u in i&&lc(i[u])):!1},d7=n=>Ne(n)&&Array.from({length:10}).every((i,l)=>l in n),M1=n=>{if(!Ne(n)||!("slots"in n))return!1;const{slots:i}=n;return Ne(i)&&Array.from({length:10}).every((l,u)=>u in i)},D1=[1,2,3,4,5,6,7,8,9,0],L1=(n,i)=>lc(n)?n.isEmpty?{isEmpty:!0}:n.query.trim()===""||n.query.length>Qn?{isEmpty:!0}:n.title.trim()===""||n.title.length>Ro?{...n,isEmpty:!1,title:`추첨 ${i}`}:n:{isEmpty:!0},cc=n=>{if(!M1(n))return Ha;const i="hotkey"in n&&c7(n.hotkey)?n.hotkey:"Alt",l="selectedSlotNo"in n&&sc(n.selectedSlotNo)?n.selectedSlotNo:1,u={...n,hotkey:i,selectedSlotNo:l};return D1.forEach(d=>{const p=u.slots[d];u.slots[d]=L1(p,d)}),ac(u)?u:Ha},f7=n=>{if(!d7(n))return Gd;const{selectedNo:i,...l}=n,u=sc(i)?n.selectedNo:1,d={...l,selectedNo:u};return D1.forEach(p=>{const h=d[p];d[p]=L1(h,p)}),u7(d)?d:Gd},p7=async()=>{const i=(await Ae.storage.local.get(B.QUICK_SLOTS))[B.QUICK_SLOTS];return cc(i)},h7=(n,i,l)=>{const u={selectedSlotNo:n,slots:i,hotkey:l};if(!M1(u))return;const d=cc(u);Ae.storage.local.set({[B.QUICK_SLOTS]:d})},g7={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},m7=()=>{const[n,i]=w.useState(g7),[l,u]=w.useState(1),[d,p]=w.useState("Alt"),[h,y]=w.useState(!1);return w.useEffect(()=>{(async()=>{const{slots:S,selectedSlotNo:T,hotkey:C}=await p7();i(S),u(T),p(C),y(!0)})()},[]),w.useEffect(()=>{h&&h7(l,n,d)},[l,n,d]),{slots:n,selectedSlotNo:l,hotkey:d,isLoaded:h,setSelectedSlotNo:u,setHotkey:p,updateSlot:(S,T)=>{i(C=>({...C,[l]:{isEmpty:!1,title:S,query:T}}))},deleteSlot:()=>{i(S=>({...S,[l]:{isEmpty:!0}}))}}},v7=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,uc=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,i2=(n,i,l,u)=>i?ne`
      background-image:
        ${l?u.solvedAcTier.HIDDEN_DARK_GRADIENT200:u.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${u.solvedAcTier.HIDDEN_GRADIENT};
    `:n>=1&&n<=5?ne`
      background-image:
        ${l?u.solvedAcTier.BRONZE_DARK_GRADIENT200:u.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${u.solvedAcTier.BRONZE_GRADIENT};
    `:n>=6&&n<=10?ne`
      background-image:
        ${l?u.solvedAcTier.SILVER_DARK_GRADIENT200:u.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${u.solvedAcTier.SILVER_GRADIENT};
    `:n>=11&&n<=15?ne`
      background-image:
        ${l?u.solvedAcTier.GOLD_DARK_GRADIENT200:u.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${u.solvedAcTier.GOLD_GRADIENT};
    `:n>=16&&n<=20?ne`
      background-image:
        ${l?u.solvedAcTier.PLATINUM_DARK_GRADIENT200:u.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${u.solvedAcTier.PLATINUM_GRADIENT};
    `:n>=21&&n<=25?ne`
      background-image:
        ${l?u.solvedAcTier.DIAMOND_DARK_GRADIENT200:u.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${u.solvedAcTier.DIAMOND_GRADIENT};
    `:n>=26&&n<=30?ne`
      background-image:
        ${l?u.solvedAcTier.RUBY_DARK_GRADIENT200:u.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${u.solvedAcTier.RUBY_GRADIENT};
    `:ne`
    background-image:
      ${l?u.solvedAcTier.UNRATED_DARK_GRADIENT200:u.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${u.solvedAcTier.UNRATED_GRADIENT};
  `,y7=g.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:n,$isHidden:i,theme:l})=>i2(n,i,!1,l)};

  &:hover {
    ${({$tier:n,$isHidden:i,theme:l})=>i2(n,i,!0,l)};
  }
`,x7=g.a`
  display: flex;
  align-items: center;
`,A7=g.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:n,$isHidden:i,theme:l})=>uc(n,i,l)};
  }
`,w7=g.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,S7=g.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,T7=g.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:n,$isHidden:i,theme:l})=>uc(n,i,l)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,E7=g.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,N7=g.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:n,$isHidden:i,theme:l})=>uc(n,i,l)};
`,R7=g.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.WHITE};
  }
`,I7=g.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:n})=>n.color.WHITE};
`,O1=n=>{const i=String(n.getFullYear()).padStart(4,"0"),l=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0"),d=String(n.getHours()).padStart(2,"0"),p=String(n.getMinutes()).padStart(2,"0"),h=String(n.getSeconds()).padStart(2,"0");return`${i}-${l}-${u} ${d}:${p}:${h}`},k7=n=>{const{problemId:i,title:l,tier:u,createdAt:d,isHidden:p,tabIndex:h,linkButtonRef:y,onKeyDown:v,onDelete:x}=n;return c.jsxs(y7,{$tier:u,$isHidden:p,onKeyDown:v,children:[c.jsxs(x7,{href:`https://icpc.me/${i}`,target:"__blank","aria-label":`${i}번 ${l} 문제`,ref:y,tabIndex:h,children:[c.jsx(w7,{src:p?tc.hidden:Rn[u],alt:"",draggable:!1}),c.jsxs(S7,{children:[c.jsx(T7,{$tier:u,$isHidden:p,children:l}),c.jsxs(E7,{children:[c.jsx(N7,{$tier:u,$isHidden:p,children:`#${i}`}),c.jsxs(R7,{children:[c.jsx(dg,{}),c.jsx(I7,{children:O1(new Date(d))})]})]})]})]}),c.jsx(A7,{$tier:u,$isHidden:p,tabIndex:h,onClick:x,"aria-label":"추첨 기록에서 제거하기",children:c.jsx(dl,{})})]})},C7=n=>{const{items:i,isHidden:l,onDelete:u}=n,{getRovingProps:d}=To({count:i.length,shouldResetFocusIndexOnItemChange:!1});return c.jsx(v7,{children:i.map((p,h)=>{const y=`${p.problemId}-${p.createdAt}`,v=![0,31].includes(p.tier)&&l,{ref:x,...S}=d(h),T={...S,linkButtonRef:x};return c.jsx(k7,{isHidden:v,onDelete:()=>{u(y)},...p,...T},y)})})},b1=n=>Ne(n)&&"no"in n&&"title"in n&&"tier"in n&&"date"in n&&typeof n.no=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&typeof n.date=="string"&&n.tier in Rn,dc=n=>Ne(n)&&"problemId"in n&&"title"in n&&"tier"in n&&"createdAt"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&n.tier in Rn&&pl(n.createdAt),G1=n=>Array.isArray(n)&&n.every(i=>dc(i)),j7=n=>{if(!pl(n))return!1;const[i,l,u,d,p,h,y]=n.split(/[-:.TZ]/).map(Number);return i>=1&&i<=9999&&l>=1&&l<=12&&u>=1&&u<=31&&d>=0&&d<=23&&p>=0&&p<=59&&h>=0&&h<=59&&y>=0&&y<=999},M7=n=>!isNaN(Number(new Date(n))),D7=n=>dc(n)&&n.problemId%1===0&&n.problemId>=S1&&n.problemId<=T1&&n.title.length<=E1&&j7(n.createdAt)&&n.tier%1===0&&n.tier>=w1&&n.tier<=Dv,L7=n=>b1(n)&&n.no%1===0&&n.no>=S1&&n.no<=T1&&n.title.length<=E1&&M7(n.date)&&n.tier%1===0&&n.tier>=w1&&n.tier<=Mv,O7=n=>[...n].sort((i,l)=>new Date(i.date).getTime()>new Date(l.date).getTime()?-1:1),b7=n=>[...n].sort((i,l)=>i.createdAt>l.createdAt?-1:1),fc=n=>{if(!Array.isArray(n))return Ja;const i=[];return n.forEach(l=>{dc(l)&&D7(l)&&i.push(l)}),b7(i).slice(0,No)},G7=n=>{if(!Array.isArray(n))return Ja;const i=[];return n.forEach(l=>{b1(l)&&L7(l)&&i.push(l)}),O7(i).slice(0,No)},pc=n=>typeof n=="boolean"?n:r1,_7=async()=>{const n=await Ae.storage.local.get([B.RANDOM_DEFENSE_HISTORY,B.IS_TIER_HIDDEN]),i=n[B.RANDOM_DEFENSE_HISTORY],l=n[B.IS_TIER_HIDDEN],u=fc(i),d=pc(l);return{randomDefenseHistory:u,isHidden:d}},H7=async(n,i)=>{if(!Array.isArray(n)||typeof i!="boolean")return;const l=fc(n);Ae.storage.local.set({[B.RANDOM_DEFENSE_HISTORY]:l,[B.IS_TIER_HIDDEN]:i})},z7=()=>{const[n,i]=w.useState([]),[l,u]=w.useState(!0),[d,p]=w.useState(!1),h=n.length===0;return w.useEffect(()=>{(async()=>{const S=await _7();u(S.isHidden),i(S.randomDefenseHistory),p(!0)})()},[]),w.useEffect(()=>{d&&H7(n,l)},[n,l]),{items:n,isHidden:l,isLoaded:d,isEmpty:h,deleteHistoryById:S=>{const T=n.filter(C=>`${C.problemId}-${C.createdAt}`!==S);i(T)},clearHistory:()=>{i([])},updateIsHidden:S=>{u(S.target.checked)}}},P7=g.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,B7=g.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:n})=>n.color.LIGHT_BROWN};
  border-radius: 6px;
`,F7=g.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,U7=g.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,$7=g.button`
  width: 36px;
  height: 36px;

  border: 1px solid ${({theme:n})=>n.color.RED};
  border-radius: 4px;
  background: none;

  transition: 0.2s;

  svg {
    color: ${({theme:n})=>n.color.RED};
  }

  &:hover {
    box-shadow: 0 0 8px ${({theme:n})=>n.color.RED};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`,V7=g.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,Y7=g.div`
  color: ${({$color:n})=>n};
  font-size: 14px;
  line-height: 20px;
`,W7=g.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,Q7=g.label`
  display: inline-block;
  position: relative;

  width: ${({$size:n})=>n==="large"?"50px":"40px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:n})=>n==="large"?"15px":"12px"};
  }
`,Z7=g.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,q7=g.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:n,$isChecked:i})=>i?n.color.GOLD:n.color.LIGHTER_BROWN};

  box-shadow: ${({theme:n,$isChecked:i})=>i?`0 0 12px ${n.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,K7=g.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:n})=>n==="large"?"26px":"20px"};
  height: ${({$size:n})=>n==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:n,$isChecked:i})=>i?n==="large"?ne`
            transform: translateX(20px);
          `:ne`
            transform: translateX(16px);
          `:ne`
          transform: translateX(0);
        `}
`,X7=n=>{const{size:i,isChecked:l,ariaLabel:u,onChange:d}=n;return c.jsxs(Q7,{$size:i,children:[c.jsx(Z7,{checked:l,"aria-label":u,onChange:d,value:""}),c.jsx(q7,{$isChecked:l,children:c.jsx(K7,{$size:i,$isChecked:l})})]})},J7=n=>{const i=No-n,l=i>=ol?"normal":i>0?"warn":"danger",p=`${`현재 ${n}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${No}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${l==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:l==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,h=l==="normal"?H.color.WHITE:l==="warn"?H.color.ORANGE:H.color.LIGHT_RED;return{indicatorMessage:p,indicatorColor:h}},e6=()=>{const{items:n,isHidden:i,isLoaded:l,isEmpty:u,deleteHistoryById:d,clearHistory:p,updateIsHidden:h}=z7(),{activeModalName:y,openModal:v,closeModal:x}=fl(),{indicatorMessage:S,indicatorColor:T}=J7(n.length);return c.jsx(ic,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:c.jsxs(P7,{children:[l?c.jsxs(c.Fragment,{children:[c.jsxs(F7,{children:[c.jsx(pe,{type:"normal",fontSize:16,width:"auto",as:"span",children:"티어 숨기기"}),c.jsx(X7,{size:"large",isChecked:i,ariaLabel:"티어 숨기기",onChange:h})]}),c.jsx(B7,{children:n.length>0?c.jsx(C7,{items:n,isHidden:i,onDelete:d}):c.jsx(K2,{imageSrc:om,imageWidth:100,imageHeight:86,title:"추첨 기록",description:"문제를 추첨하면 여기에 기록이 표시될 거에요."})}),c.jsxs(U7,{children:[c.jsxs(V7,{title:S,children:[c.jsx(W7,{children:c.jsx(fg,{})}),c.jsx(Y7,{$color:T,children:`${n.length} / ${No}`})]}),c.jsx(pe,{type:"normal",fontSize:16,width:"auto",as:"span",children:"추첨 기록 비우기"}),c.jsx($7,{onClick:()=>{v("confirmClearHistory")},disabled:u,"aria-label":"추첨 기록 비우기",children:c.jsx(dl,{})})]})]}):c.jsx(qa,{}),c.jsx(tn,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:y==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{p(),x()},onNoSelect:x})]})})},t6=g.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,n6=g.div`
  display: flex;
  column-gap: 12px;
`,r6=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,o6=n=>{const{slots:i,selectedSlotNo:l,hotkey:u,isLoaded:d,setSelectedSlotNo:p,setHotkey:h,updateSlot:y,deleteSlot:v}=m7(),{show:x}=n,S={slots:i,selectedSlotNo:l,hotkey:u};return x?c.jsxs(t6,{children:[c.jsx(Nn,{title:"랜덤 디펜스",iconSrc:Ae.runtime.getURL("/dice.png")}),c.jsxs(n6,{children:[c.jsxs(r6,{children:[c.jsx(jy,{isLoaded:d,selectedSlotNo:l,onSubmit:y}),c.jsx(a7,{quickSlotsInfo:S,isLoaded:d,onHotkeyChange:h,onSlotChange:y,onSlotDelete:v,onSlotNoChange:p})]}),c.jsx(e6,{})]})]}):null},i6=g.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;g.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const hl=n=>n==="none"||n==="totamjung",_1=n=>n==="totamjung"?"totamjung":"none",l6=async()=>{const i=(await Ae.storage.local.get(B.TOTAMJUNG_THEME))[B.TOTAMJUNG_THEME];return _1(i)},s6=n=>{hl(n)&&Ae.storage.local.set({[B.TOTAMJUNG_THEME]:n})},H1=n=>typeof n=="number"&&!isNaN(n)&&n%1===0?n:0,a6=/^(none|font-\d{1,2})$/,c6=n=>typeof n=="string"&&a6.test(n),hc=n=>typeof n=="number"&&!isNaN(n)&&n%1===0,u6=async()=>{const i=(await Ae.storage.local.get(B.FONT_NO))[B.FONT_NO];return H1(i)},d6=n=>{hc(n)&&Ae.storage.local.set({[B.FONT_NO]:n})},f6=()=>{const[n,i]=w.useState(void 0),[l,u]=w.useState(void 0),[d,p]=w.useState(!1);return w.useEffect(()=>{(async()=>{const[x,S]=await Promise.all([l6(),u6()]);i(x),u(S),p(!0)})()},[]),w.useEffect(()=>{d&&s6(n)},[n]),w.useEffect(()=>{d&&d6(l)},[l]),{totamjungTheme:n,fontNo:l,isLoaded:d,updateTotamjungTheme:v=>{d&&hl(v)&&i(v)},updateFontNo:v=>{const x=Number(v);!d||isNaN(x)||u(x)}}},p6=g.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,h6=g.p`
  color: ${({theme:n})=>n.color.LEMON};
  font-size: ${({$fontSize:n})=>n};
  font-family: ${({$fontFamily:n})=>n};
`,g6=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],m6=()=>{const{totamjungTheme:n,fontNo:i,updateTotamjungTheme:l,updateFontNo:u}=f6();return c.jsxs(p6,{children:[c.jsx(Nn,{title:"테마 설정",iconSrc:Ae.runtime.getURL("/palette.png")}),c.jsx(Bn,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:n??"",onChange:l}),c.jsx(Nn,{title:"폰트 설정",iconSrc:c.jsx(xg,{})}),c.jsx(Bn,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:g6.map(({name:d,fontFamily:p,fontSize:h},y)=>({label:c.jsx(h6,{$fontFamily:p,$fontSize:h??"16px",children:d}),value:String(y)})),checkedValue:i===void 0?"":String(i),onChange:u})]})},v6=g.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,z1=n=>{const{confirmText:i}=n,[l,u]=w.useState(""),[d,p]=w.useState(i);return w.useEffect(()=>{p(d)},[i]),{inputValue:l,isSameWithConfirmText:l===d,updateInputValue:v=>{u(v.target.value)}}},y6=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,x6=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Na=g.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,A6=g.div`
  display: flex;
  justify-content: center;
`,Ra="초기화에 동의합니다",w6=n=>{const{open:i,onClose:l,onReset:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:h}=z1({confirmText:Ra});return c.jsxs(Zn,{title:"데이터 초기화",open:i,onClose:l,children:[c.jsxs(y6,{children:[c.jsx(pe,{type:"normal",fontSize:16,children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(x6,{children:[c.jsx(Na,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),c.jsx(Na,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Na,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(pe,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:Ra}),"를 입력해 주십시오."]}),c.jsx(A6,{children:c.jsx($t,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:d,textAlign:"center",placeholder:`"${Ra}"를 입력해 주세요`,hasError:!1,onChange:h})})]}),c.jsxs(jo,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:H.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"초기화",size:"medium",iconSrc:c.jsx(dl,{}),color:H.color.RED,disabled:!p,onClick:u})]})]})},S6=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,T6=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Ia=g.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,E6=g.div`
  display: flex;
  justify-content: center;
`,ka="숙지했습니다",N6=n=>{const{open:i,onClose:l,onUpload:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:h}=z1({confirmText:ka});return c.jsxs(Zn,{title:"데이터 업로드",open:i,onClose:l,children:[c.jsxs(S6,{children:[c.jsx(pe,{type:"normal",fontSize:16,children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(T6,{children:[c.jsx(Ia,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),c.jsx(Ia,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Ia,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(pe,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:ka}),"를 입력해 주십시오."]}),c.jsx(E6,{children:c.jsx($t,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:d,textAlign:"center",placeholder:`"${ka}"를 입력해 주세요`,hasError:!1,onChange:h})})]}),c.jsxs(jo,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:H.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"업로드",size:"medium",iconSrc:c.jsx(Y2,{}),color:H.color.LIME,disabled:!p,onClick:u})]})]})},P1=n=>Array.isArray(n)?Array.isArray(n)&&n.every(i=>gc(i)):!1,gc=n=>Ne(n)&&"problemId"in n&&"expiresAt"in n&&typeof n.problemId=="number"&&pl(n.expiresAt)&&!isNaN(n.problemId)&&n.problemId%1===0&&n.problemId>=1e3,R6=n=>{if(!Array.isArray(n))return o1;const i=Date.now();return n.filter(l=>gc(l)&&i<Date.parse(l.expiresAt)).slice(-300)},I6=n=>typeof n=="boolean",B1=n=>Ne(n)&&Te.DATA_VERSION in n&&Te.CHECKED_ALGORITHM_IDS in n&&Te.QUICK_SLOTS in n&&Te.TOTAMJUNG_THEME in n&&Te.HIDER_OPTIONS in n&&Te.RANDOM_DEFENSE_HISTORY in n&&Te.IS_TIER_HIDDEN in n&&Te.FONT_NO in n&&Te.TIMERS in n?(n[B.DATA_VERSION]==="v1.2"||n[B.DATA_VERSION]===2)&&Ka(n[B.CHECKED_ALGORITHM_IDS])&&ac(n[B.QUICK_SLOTS])&&hl(n[B.TOTAMJUNG_THEME])&&rc(n[B.HIDER_OPTIONS])&&G1(n[B.RANDOM_DEFENSE_HISTORY])&&typeof n[B.IS_TIER_HIDDEN]=="boolean"&&hc(n[B.FONT_NO])&&P1(n[B.TIMERS]):!1,F1=n=>Ne(n)&&B.DATA_VERSION in n&&B.CHECKED_ALGORITHM_IDS in n&&B.QUICK_SLOTS in n&&B.TOTAMJUNG_THEME in n&&B.HIDER_OPTIONS in n&&B.RANDOM_DEFENSE_HISTORY in n&&B.IS_TIER_HIDDEN in n&&B.FONT_NO in n&&B.TIMERS in n&&B.GACHA_OPTIONS in n&&B.SHOULD_SHOW_WELCOME_MESSAGE in n?n[B.DATA_VERSION]===3&&Ka(n[B.CHECKED_ALGORITHM_IDS])&&ac(n[B.QUICK_SLOTS])&&hl(n[B.TOTAMJUNG_THEME])&&oc(n[B.HIDER_OPTIONS])&&G1(n[B.RANDOM_DEFENSE_HISTORY])&&typeof n[B.IS_TIER_HIDDEN]=="boolean"&&hc(n[B.FONT_NO])&&P1(n[B.TIMERS])&&j1(n[B.GACHA_OPTIONS])&&I6(n[B.SHOULD_SHOW_WELCOME_MESSAGE]):!1,k6=n=>n===!0,U1=["v1.2",2,3],C6=n=>rc(n)?n:Xa,j6=(n,i)=>{const l=h1(n)?{hours:Number(n.hour),minutes:Number(n.minute)}:{hours:0,minutes:20},u=T4(i)?{algorithmHiderUsage:i.predict,problemTagLockUsage:i.lock==="always"?"auto":"click"}:{algorithmHiderUsage:"click",problemTagLockUsage:"click"};return{...Xa,problemTagLockDuration:l,...u}},M6=n=>({...n,shouldRevealTierOnHover:!1}),D6=n=>{if(!Ne(n)||!("theme"in n))return"none";const{theme:i}=n;return i==="yes"?"totamjung":"none"},L6=n=>{const{selectedNo:i,...l}=n;return{selectedSlotNo:i,slots:l,hotkey:"Alt"}},O6=n=>{const i=[];return n.forEach(({no:l,title:u,tier:d,date:p})=>{const h=new Date(p).toISOString();pl(h)&&i.push({problemId:l,title:u,tier:d,createdAt:h})}),i},b6=n=>{if(!Ne(n)||!("font"in n))return 0;const i=n.font;return!c6(i)||i==="none"?0:Number(i.split("-")[1])},G6=n=>{if(!h1(n))return[];const{expire:i,problem:l}=n,u=new Date(i);if(isNaN(u.getTime()))return[];if(l===-1)return[];const d=new Date(i).toISOString(),p={problemId:l,expiresAt:d};return gc(p)?[p]:[]},_6=(n,i)=>{const l=f7(n[Pn.QUICK_SLOTS]),u=G7(i[t3.RANDOM_DEFENSE_HISTORY]),d=ec(n[Pn.CHECKED_ALGORITHM_IDS]),p=pc(n[B.IS_TIER_HIDDEN]),h=D6(n[Pn.SETTINGS]),y=j6(n[Pn.TIMER],n[Pn.SETTINGS]),v=L6(l),x=O6(u),S=b6(n[Pn.SETTINGS]),T=G6(n[Pn.TIMER]);return{[Te.CHECKED_ALGORITHM_IDS]:d,[Te.QUICK_SLOTS]:v,[Te.TOTAMJUNG_THEME]:h,[Te.HIDER_OPTIONS]:y,[Te.RANDOM_DEFENSE_HISTORY]:x,[Te.IS_TIER_HIDDEN]:p,[Te.FONT_NO]:S,[Te.TIMERS]:T,[Te.SHOULD_SHOW_WELCOME_MESSAGE]:!1,[Te.DATA_VERSION]:2}},l2=n=>{const i=C6(n[Te.HIDER_OPTIONS]),l=ec(n[Te.CHECKED_ALGORITHM_IDS]),u=cc(n[Te.QUICK_SLOTS]),d=_1(n[Te.TOTAMJUNG_THEME]),p=M6(i),h=fc(n[Te.RANDOM_DEFENSE_HISTORY]),y=pc(n[B.IS_TIER_HIDDEN]),v=H1(n[Te.FONT_NO]),x=R6(n[Te.TIMERS]),S=k6(n[Te.SHOULD_SHOW_WELCOME_MESSAGE]);return{[B.CHECKED_ALGORITHM_IDS]:l,[B.QUICK_SLOTS]:u,[B.TOTAMJUNG_THEME]:d,[B.HIDER_OPTIONS]:p,[B.RANDOM_DEFENSE_HISTORY]:h,[B.IS_TIER_HIDDEN]:y,[B.FONT_NO]:v,[B.TIMERS]:x,[B.GACHA_OPTIONS]:i1,[B.SHOULD_SHOW_WELCOME_MESSAGE]:S,[B.DATA_VERSION]:3}},H6=n=>{const{dataVersion:i}=n;return i===2||i==="v1.2"?2:i===3?3:1},z6=async()=>{const[n,i]=await Promise.all([Ae.storage.sync.get(),Ae.storage.local.get()]),l=H6(i);if(l!==3){if(l===1){Ae.storage.local.set(l2(_6(n,i)));return}await Ae.storage.local.set(l2(i))}},P6=async n=>{if(!Ne(n)||!("dataVersion"in n))return!1;const{dataVersion:i}=n;return typeof i!="number"&&typeof i!="string"||!U1.includes(i)||(i==="v1.2"||i===2)&&!B1(n)?!1:i!==3?(await Ae.storage.local.set(n),await z6(),!0):F1(n)?(await Ae.storage.local.set(n),!0):!1},B6=async()=>(await Ae.storage.local.set(i3),!0),F6=(n,i)=>{const l=document.createElement("a"),u=new Blob([n],{type:"text/plain"});l.href=URL.createObjectURL(u),l.download=i,l.click(),URL.revokeObjectURL(l.href)},U6=async()=>{const n=await Ae.runtime.sendMessage({command:vo.FETCH_OPTIONS_DATA}),i=JSON.stringify(n),l=`totamjung_savefile_${O1(new Date).replace(" ","_")}.ttj`;F6(i,l)},$6=()=>{const[n,i]=w.useState("none"),[l,u]=w.useState(void 0),[d,p]=w.useState({errorTitle:"",errorMessage:""}),{errorTitle:h,errorMessage:y}=d,v=M=>{p(M),i("error")};return{activeModal:n,errorTitle:h,errorMessage:y,setActiveModal:i,resetOptionsData:async()=>{await B6()&&(i("none"),location.reload())},extractOptionsData:async()=>{U6(),i("none")},stageOptionsData:async M=>{const b=M.target.files;if(!b)return;const P=b[0];if(P.name.split(".").at(-1)!=="ttj"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(P.size>1048576){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const $=new FileReader;$.onload=async()=>{try{const Z=$.result;if(typeof Z!="string"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const U=JSON.parse(Z),{dataVersion:re}=U;if(!("dataVersion"in U)||re!=="v1.2"&&typeof re!="number"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(!U1.includes(re)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${re}으로, 이 버전에서 다룰 수 있는 가장 높은 데이터 버전인 3보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(["v1.2",2].includes(re)&&!B1(U)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"v1.2.* 버전 데이터의 세이브파일은 업로드 가능하나, 이 세이브파일은 데이터의 일부 또는 전부가 손실된 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(re===3&&!F1(U)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}u(U),i("upload")}catch{v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},$.readAsText(P)},uploadOptionsData:async()=>{l&&(P6(l),location.reload())},closeModal:()=>{i("none")}}},V6=g.label`
  display: block;
  width: 270px;
`,Y6=g.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme:n})=>n.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme:n})=>n.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme:n})=>n.color.LIME};
  }
`,W6=g.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIME};
  }
`,Q6=g.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:n})=>n.color.LIME};
`,Z6=g.input`
  display: none;
`,q6=n=>{const{onChange:i}=n,l=w.useRef(null),u=d=>{var p;(d.key===" "||d.key==="Enter")&&((p=l.current)==null||p.click())};return c.jsxs(V6,{children:[c.jsxs(Y6,{role:"button",tabIndex:0,ref:l,onKeyDown:u,children:[c.jsx(W6,{children:c.jsx(Y2,{})}),c.jsx(Q6,{children:"설정 데이터 업로드"})]}),c.jsx(Z6,{type:"file",accept:".ttj",onClick:d=>{d.currentTarget.value=""},onChange:i})]})},K6=()=>{const{activeModal:n,errorTitle:i,errorMessage:l,setActiveModal:u,resetOptionsData:d,extractOptionsData:p,stageOptionsData:h,uploadOptionsData:y,closeModal:v}=$6();return c.jsxs(v6,{children:[c.jsx(Nn,{title:"데이터 관리",iconSrc:c.jsx(Ag,{})}),c.jsx(Ce,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,iconSrc:c.jsx(wg,{}),onClick:()=>{u("extract")}}),c.jsx(q6,{onChange:h}),c.jsx(Ce,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,iconSrc:c.jsx(Sg,{}),onClick:()=>{u("reset")}}),c.jsx(pe,{type:"normal",fontSize:16,children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),c.jsxs(pe,{type:"normal",fontSize:16,children:["토탐정 세이브파일의 확장자는 ",c.jsx("b",{children:".ttj"}),"입니다."]}),c.jsx(tn,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:n==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:p,onClose:v}),c.jsx(N6,{open:n==="upload",onUpload:y,onClose:v}),c.jsx(w6,{open:n==="reset",onReset:d,onClose:v}),c.jsx(tn,{title:i,actionType:"confirm",width:"350px",height:"auto",open:n==="error",message:l,onClose:v})]})},X6=n=>{const{show:i}=n;return i?c.jsxs(i6,{children:[c.jsx(m6,{}),c.jsx(K6,{})]}):null},J6=()=>{const[n,i]=w.useState("algorithmHider");return{selectedCategory:n,setSelectedCategory:i}},Vi=6,e8=n=>{const{activeScope:i}=n,[l,u]=w.useState(null),[d,p]=w.useState(!0),[h,y]=w.useState({top:0,left:0,width:0,height:0}),v=l&&!d?1:0,x=w.useCallback(S=>{if(!S.getBoundingClientRect)return;const T=S.getBoundingClientRect();y({top:`${T.top-Vi}px`,left:`${T.left-Vi}px`,width:`${T.width+Vi*2}px`,height:`${T.height+Vi*2}px`})},[]);return w.useEffect(()=>{if(!l||d)return;let S;const T=()=>{x(l),S=requestAnimationFrame(T)};return T(),()=>{cancelAnimationFrame(S)}},[l,d,x]),w.useEffect(()=>{const S=M=>{["Tab","ArrowLeft","ArrowRight"].includes(M.code)&&p(!1)},T=()=>{p(!0)},C=M=>{M.target instanceof HTMLElement&&i.contains(M.target)&&u(M.target)},j=M=>{(!(M.relatedTarget instanceof HTMLElement)||!i.contains(M.relatedTarget))&&u(null)};return window.addEventListener("keydown",S),window.addEventListener("mousedown",T),i.addEventListener("focusin",C),i.addEventListener("focusout",j),()=>{window.removeEventListener("keydown",S),window.removeEventListener("mousedown",T),i.removeEventListener("focusin",C),i.removeEventListener("focusout",j)}},[i]),{indicatorInfo:{...h,opacity:v}}},t8=at`
  0% {
    border-color: ${H.color.ORANGE};
    box-shadow: 0 0 12px ${Vn(H.color.ORANGE,.6)};
  }
  50% {
    border-color: ${H.color.MANGO};
    box-shadow: 0 0 12px ${Vn(H.color.MANGO,.6)};
  }
  100% {
    border-color: ${H.color.ORANGE};
    box-shadow: 0 0 12px ${Vn(H.color.ORANGE,.6)};
  }
`,n8=g.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 3;
  pointer-events: none;
`,r8=g.div`
  position: absolute;

  border: 3px solid ${({theme:n})=>n.color.ORANGE};
  border-radius: 4px;

  box-shadow: 0 0 12px
    ${({theme:n})=>Vn(n.color.ORANGE,.6)};
  will-change: top, left, width, height, opacity;
  transition:
    top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease-out;
  animation: ${t8} 1.5s ease-in-out infinite;
`,o8=n=>{const{activeScope:i,portalTarget:l}=n,{indicatorInfo:u}=e8({activeScope:i});return Z2.createPortal(c.jsx(n8,{children:c.jsx(r8,{style:{...u}})}),l??document.body)},i8=at`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,l8=g.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,s8=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,a8=g.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,c8=g.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,u8=g.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${i8} 3s forwards infinite;
`,d8=()=>{const{selectedCategory:n,setSelectedCategory:i}=J6();return c.jsxs(l8,{children:[c.jsxs(s8,{children:[c.jsx(Rm,{selectedCategory:n,onCategoryChange:i}),c.jsxs(a8,{children:[c.jsx(L4,{show:n==="algorithmHider"}),c.jsx(o6,{show:n==="randomDefense"}),c.jsx(X6,{show:n==="appearanceAndDataManage"})]})]}),c.jsx(c8,{children:c.jsx(u8,{src:Jg,alt:""})}),c.jsx(o8,{activeScope:document.body})]})};var Yi={},s2;function f8(){if(s2)return Yi;s2=1;var n=Q2();return Yi.createRoot=n.createRoot,Yi.hydrateRoot=n.hydrateRoot,Yi}var p8=f8();const a2=document.getElementById("root"),Ca=a2&&p8.createRoot(a2);Ca==null||Ca.render(c.jsx(w.StrictMode,{children:c.jsxs(Fh,{theme:H,children:[c.jsx(Yh,{}),c.jsx(d8,{})]})}));
