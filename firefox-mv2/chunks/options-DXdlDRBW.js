(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();try{}catch(n){console.error("[wxt] Failed to initialize plugins",n)}function Hp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ia={exports:{}},ho={},la={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function zp(){if(ld)return fe;ld=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.iterator;function C(E){return E===null||typeof E!="object"?null:(E=N&&E[N]||E["@@iterator"],typeof E=="function"?E:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,H={};function U(E,D,ee){this.props=E,this.context=D,this.refs=H,this.updater=ee||j}U.prototype.isReactComponent={},U.prototype.setState=function(E,D){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,D,"setState")},U.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function te(){}te.prototype=U.prototype;function Z(E,D,ee){this.props=E,this.context=D,this.refs=H,this.updater=ee||j}var Q=Z.prototype=new te;Q.constructor=Z,M(Q,U.prototype),Q.isPureReactComponent=!0;var F=Array.isArray,ne=Object.prototype.hasOwnProperty,q={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function ye(E,D,ee){var re,ce={},ue=null,xe=null;if(D!=null)for(re in D.ref!==void 0&&(xe=D.ref),D.key!==void 0&&(ue=""+D.key),D)ne.call(D,re)&&!$.hasOwnProperty(re)&&(ce[re]=D[re]);var he=arguments.length-2;if(he===1)ce.children=ee;else if(1<he){for(var me=Array(he),Xe=0;Xe<he;Xe++)me[Xe]=arguments[Xe+2];ce.children=me}if(E&&E.defaultProps)for(re in he=E.defaultProps,he)ce[re]===void 0&&(ce[re]=he[re]);return{$$typeof:n,type:E,key:ue,ref:xe,props:ce,_owner:q.current}}function _e(E,D){return{$$typeof:n,type:E.type,key:D,ref:E.ref,props:E.props,_owner:E._owner}}function Le(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function qe(E){var D={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ee){return D[ee]})}var Ke=/\/+/g;function He(E,D){return typeof E=="object"&&E!==null&&E.key!=null?qe(""+E.key):D.toString(36)}function Pe(E,D,ee,re,ce){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var xe=!1;if(E===null)xe=!0;else switch(ue){case"string":case"number":xe=!0;break;case"object":switch(E.$$typeof){case n:case i:xe=!0}}if(xe)return xe=E,ce=ce(xe),E=re===""?"."+He(xe,0):re,F(ce)?(ee="",E!=null&&(ee=E.replace(Ke,"$&/")+"/"),Pe(ce,D,ee,"",function(Xe){return Xe})):ce!=null&&(Le(ce)&&(ce=_e(ce,ee+(!ce.key||xe&&xe.key===ce.key?"":(""+ce.key).replace(Ke,"$&/")+"/")+E)),D.push(ce)),1;if(xe=0,re=re===""?".":re+":",F(E))for(var he=0;he<E.length;he++){ue=E[he];var me=re+He(ue,he);xe+=Pe(ue,D,ee,me,ce)}else if(me=C(E),typeof me=="function")for(E=me.call(E),he=0;!(ue=E.next()).done;)ue=ue.value,me=re+He(ue,he++),xe+=Pe(ue,D,ee,me,ce);else if(ue==="object")throw D=String(E),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return xe}function it(E,D,ee){if(E==null)return E;var re=[],ce=0;return Pe(E,re,"","",function(ue){return D.call(ee,ue,ce++)}),re}function Ue(E){if(E._status===-1){var D=E._result;D=D(),D.then(function(ee){(E._status===0||E._status===-1)&&(E._status=1,E._result=ee)},function(ee){(E._status===0||E._status===-1)&&(E._status=2,E._result=ee)}),E._status===-1&&(E._status=0,E._result=D)}if(E._status===1)return E._result.default;throw E._result}var se={current:null},G={transition:null},Y={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:G,ReactCurrentOwner:q};function P(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:it,forEach:function(E,D,ee){it(E,function(){D.apply(this,arguments)},ee)},count:function(E){var D=0;return it(E,function(){D++}),D},toArray:function(E){return it(E,function(D){return D})||[]},only:function(E){if(!Le(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},fe.Component=U,fe.Fragment=l,fe.Profiler=d,fe.PureComponent=Z,fe.StrictMode=u,fe.Suspense=v,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,fe.act=P,fe.cloneElement=function(E,D,ee){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var re=M({},E.props),ce=E.key,ue=E.ref,xe=E._owner;if(D!=null){if(D.ref!==void 0&&(ue=D.ref,xe=q.current),D.key!==void 0&&(ce=""+D.key),E.type&&E.type.defaultProps)var he=E.type.defaultProps;for(me in D)ne.call(D,me)&&!$.hasOwnProperty(me)&&(re[me]=D[me]===void 0&&he!==void 0?he[me]:D[me])}var me=arguments.length-2;if(me===1)re.children=ee;else if(1<me){he=Array(me);for(var Xe=0;Xe<me;Xe++)he[Xe]=arguments[Xe+2];re.children=he}return{$$typeof:n,type:E.type,key:ce,ref:ue,props:re,_owner:xe}},fe.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:p,_context:E},E.Consumer=E},fe.createElement=ye,fe.createFactory=function(E){var D=ye.bind(null,E);return D.type=E,D},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:x,render:E}},fe.isValidElement=Le,fe.lazy=function(E){return{$$typeof:w,_payload:{_status:-1,_result:E},_init:Ue}},fe.memo=function(E,D){return{$$typeof:T,type:E,compare:D===void 0?null:D}},fe.startTransition=function(E){var D=G.transition;G.transition={};try{E()}finally{G.transition=D}},fe.unstable_act=P,fe.useCallback=function(E,D){return se.current.useCallback(E,D)},fe.useContext=function(E){return se.current.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E){return se.current.useDeferredValue(E)},fe.useEffect=function(E,D){return se.current.useEffect(E,D)},fe.useId=function(){return se.current.useId()},fe.useImperativeHandle=function(E,D,ee){return se.current.useImperativeHandle(E,D,ee)},fe.useInsertionEffect=function(E,D){return se.current.useInsertionEffect(E,D)},fe.useLayoutEffect=function(E,D){return se.current.useLayoutEffect(E,D)},fe.useMemo=function(E,D){return se.current.useMemo(E,D)},fe.useReducer=function(E,D,ee){return se.current.useReducer(E,D,ee)},fe.useRef=function(E){return se.current.useRef(E)},fe.useState=function(E){return se.current.useState(E)},fe.useSyncExternalStore=function(E,D,ee){return se.current.useSyncExternalStore(E,D,ee)},fe.useTransition=function(){return se.current.useTransition()},fe.version="18.3.1",fe}var sd;function Ba(){return sd||(sd=1,la.exports=zp()),la.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function Bp(){if(ad)return ho;ad=1;var n=Ba(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(x,v,T){var w,N={},C=null,j=null;T!==void 0&&(C=""+T),v.key!==void 0&&(C=""+v.key),v.ref!==void 0&&(j=v.ref);for(w in v)u.call(v,w)&&!p.hasOwnProperty(w)&&(N[w]=v[w]);if(x&&x.defaultProps)for(w in v=x.defaultProps,v)N[w]===void 0&&(N[w]=v[w]);return{$$typeof:i,type:x,key:C,ref:j,props:N,_owner:d.current}}return ho.Fragment=l,ho.jsx=g,ho.jsxs=g,ho}var cd;function Pp(){return cd||(cd=1,ia.exports=Bp()),ia.exports}var c=Pp(),S=Ba();const Gt=Hp(S);var Ze=function(){return Ze=Object.assign||function(i){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ze.apply(this,arguments)};function Sr(n,i,l){if(l||arguments.length===2)for(var u=0,d=i.length,p;u<d;u++)(p||!(u in i))&&(p||(p=Array.prototype.slice.call(i,0,u)),p[u]=i[u]);return n.concat(p||Array.prototype.slice.call(i))}var ke="-ms-",yo="-moz-",we="-webkit-",a2="comm",nl="rule",Pa="decl",Up="@import",c2="@keyframes",Fp="@layer",u2=Math.abs,Ua=String.fromCharCode,Ia=Object.assign;function Vp(n,i){return Qe(n,0)^45?(((i<<2^Qe(n,0))<<2^Qe(n,1))<<2^Qe(n,2))<<2^Qe(n,3):0}function d2(n){return n.trim()}function en(n,i){return(n=i.exec(n))?n[0]:n}function de(n,i,l){return n.replace(i,l)}function Vi(n,i,l){return n.indexOf(i,l)}function Qe(n,i){return n.charCodeAt(i)|0}function Tr(n,i,l){return n.slice(i,l)}function Ft(n){return n.length}function f2(n){return n.length}function go(n,i){return i.push(n),n}function Yp(n,i){return n.map(i).join("")}function ud(n,i){return n.filter(function(l){return!en(l,i)})}var rl=1,Er=1,p2=0,It=0,Be=0,Ir="";function ol(n,i,l,u,d,p,g,x){return{value:n,root:i,parent:l,type:u,props:d,children:p,line:rl,column:Er,length:g,return:"",siblings:x}}function Sn(n,i){return Ia(ol("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Ar(n){for(;n.root;)n=Sn(n.root,{children:[n]});go(n,n.siblings)}function $p(){return Be}function Wp(){return Be=It>0?Qe(Ir,--It):0,Er--,Be===10&&(Er=1,rl--),Be}function _t(){return Be=It<p2?Qe(Ir,It++):0,Er++,Be===10&&(Er=1,rl++),Be}function Vn(){return Qe(Ir,It)}function Yi(){return It}function il(n,i){return Tr(Ir,n,i)}function ka(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qp(n){return rl=Er=1,p2=Ft(Ir=n),It=0,[]}function Zp(n){return Ir="",n}function sa(n){return d2(il(It-1,Ca(n===91?n+2:n===40?n+1:n)))}function qp(n){for(;(Be=Vn())&&Be<33;)_t();return ka(n)>2||ka(Be)>3?"":" "}function Kp(n,i){for(;--i&&_t()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return il(n,Yi()+(i<6&&Vn()==32&&_t()==32))}function Ca(n){for(;_t();)switch(Be){case n:return It;case 34:case 39:n!==34&&n!==39&&Ca(Be);break;case 40:n===41&&Ca(n);break;case 92:_t();break}return It}function Xp(n,i){for(;_t()&&n+Be!==57;)if(n+Be===84&&Vn()===47)break;return"/*"+il(i,It-1)+"*"+Ua(n===47?n:_t())}function Jp(n){for(;!ka(Vn());)_t();return il(n,It)}function eh(n){return Zp($i("",null,null,null,[""],n=Qp(n),0,[0],n))}function $i(n,i,l,u,d,p,g,x,v){for(var T=0,w=0,N=g,C=0,j=0,M=0,H=1,U=1,te=1,Z=0,Q="",F=d,ne=p,q=u,$=Q;U;)switch(M=Z,Z=_t()){case 40:if(M!=108&&Qe($,N-1)==58){Vi($+=de(sa(Z),"&","&\f"),"&\f",u2(T?x[T-1]:0))!=-1&&(te=-1);break}case 34:case 39:case 91:$+=sa(Z);break;case 9:case 10:case 13:case 32:$+=qp(M);break;case 92:$+=Kp(Yi()-1,7);continue;case 47:switch(Vn()){case 42:case 47:go(th(Xp(_t(),Yi()),i,l,v),v);break;default:$+="/"}break;case 123*H:x[T++]=Ft($)*te;case 125*H:case 59:case 0:switch(Z){case 0:case 125:U=0;case 59+w:te==-1&&($=de($,/\f/g,"")),j>0&&Ft($)-N&&go(j>32?fd($+";",u,l,N-1,v):fd(de($," ","")+";",u,l,N-2,v),v);break;case 59:$+=";";default:if(go(q=dd($,i,l,T,w,d,x,Q,F=[],ne=[],N,p),p),Z===123)if(w===0)$i($,i,q,q,F,p,N,x,ne);else switch(C===99&&Qe($,3)===110?100:C){case 100:case 108:case 109:case 115:$i(n,q,q,u&&go(dd(n,q,q,0,0,d,x,Q,d,F=[],N,ne),ne),d,ne,N,x,u?F:ne);break;default:$i($,q,q,q,[""],ne,0,x,ne)}}T=w=j=0,H=te=1,Q=$="",N=g;break;case 58:N=1+Ft($),j=M;default:if(H<1){if(Z==123)--H;else if(Z==125&&H++==0&&Wp()==125)continue}switch($+=Ua(Z),Z*H){case 38:te=w>0?1:($+="\f",-1);break;case 44:x[T++]=(Ft($)-1)*te,te=1;break;case 64:Vn()===45&&($+=sa(_t())),C=Vn(),w=N=Ft(Q=$+=Jp(Yi())),Z++;break;case 45:M===45&&Ft($)==2&&(H=0)}}return p}function dd(n,i,l,u,d,p,g,x,v,T,w,N){for(var C=d-1,j=d===0?p:[""],M=f2(j),H=0,U=0,te=0;H<u;++H)for(var Z=0,Q=Tr(n,C+1,C=u2(U=g[H])),F=n;Z<M;++Z)(F=d2(U>0?j[Z]+" "+Q:de(Q,/&\f/g,j[Z])))&&(v[te++]=F);return ol(n,i,l,d===0?nl:x,v,T,w,N)}function th(n,i,l,u){return ol(n,i,l,a2,Ua($p()),Tr(n,2,-2),0,u)}function fd(n,i,l,u,d){return ol(n,i,l,Pa,Tr(n,0,u),Tr(n,u+1,-1),u,d)}function h2(n,i,l){switch(Vp(n,i)){case 5103:return we+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+n+n;case 4789:return yo+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return we+n+yo+n+ke+n+n;case 5936:switch(Qe(n,i+11)){case 114:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return we+n+ke+n+n;case 6165:return we+n+ke+"flex-"+n+n;case 5187:return we+n+de(n,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+n;case 5443:return we+n+ke+"flex-item-"+de(n,/flex-|-self/g,"")+(en(n,/flex-|baseline/)?"":ke+"grid-row-"+de(n,/flex-|-self/g,""))+n;case 4675:return we+n+ke+"flex-line-pack"+de(n,/align-content|flex-|-self/g,"")+n;case 5548:return we+n+ke+de(n,"shrink","negative")+n;case 5292:return we+n+ke+de(n,"basis","preferred-size")+n;case 6060:return we+"box-"+de(n,"-grow","")+we+n+ke+de(n,"grow","positive")+n;case 4554:return we+de(n,/([^-])(transform)/g,"$1"+we+"$2")+n;case 6187:return de(de(de(n,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),n,"")+n;case 5495:case 3959:return de(n,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(n,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+n+n;case 4200:if(!en(n,/flex-|baseline/))return ke+"grid-column-align"+Tr(n,i)+n;break;case 2592:case 3360:return ke+de(n,"template-","")+n;case 4384:case 3616:return l&&l.some(function(u,d){return i=d,en(u.props,/grid-\w+-end/)})?~Vi(n+(l=l[i].value),"span",0)?n:ke+de(n,"-start","")+n+ke+"grid-row-span:"+(~Vi(l,"span",0)?en(l,/\d+/):+en(l,/\d+/)-+en(n,/\d+/))+";":ke+de(n,"-start","")+n;case 4896:case 4128:return l&&l.some(function(u){return en(u.props,/grid-\w+-start/)})?n:ke+de(de(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return de(n,/(.+)-inline(.+)/,we+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(n)-1-i>6)switch(Qe(n,i+1)){case 109:if(Qe(n,i+4)!==45)break;case 102:return de(n,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+yo+(Qe(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Vi(n,"stretch",0)?h2(de(n,"stretch","fill-available"),i,l)+n:n}break;case 5152:case 5920:return de(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,p,g,x,v,T){return ke+d+":"+p+T+(g?ke+d+"-span:"+(x?v:+v-+p)+T:"")+n});case 4949:if(Qe(n,i+6)===121)return de(n,":",":"+we)+n;break;case 6444:switch(Qe(n,Qe(n,14)===45?18:11)){case 120:return de(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Qe(n,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+n;case 100:return de(n,":",":"+ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(n,"scroll-","scroll-snap-")+n}return n}function qi(n,i){for(var l="",u=0;u<n.length;u++)l+=i(n[u],u,n,i)||"";return l}function nh(n,i,l,u){switch(n.type){case Fp:if(n.children.length)break;case Up:case Pa:return n.return=n.return||n.value;case a2:return"";case c2:return n.return=n.value+"{"+qi(n.children,u)+"}";case nl:if(!Ft(n.value=n.props.join(",")))return""}return Ft(l=qi(n.children,u))?n.return=n.value+"{"+l+"}":""}function rh(n){var i=f2(n);return function(l,u,d,p){for(var g="",x=0;x<i;x++)g+=n[x](l,u,d,p)||"";return g}}function oh(n){return function(i){i.root||(i=i.return)&&n(i)}}function ih(n,i,l,u){if(n.length>-1&&!n.return)switch(n.type){case Pa:n.return=h2(n.value,n.length,l);return;case c2:return qi([Sn(n,{value:de(n.value,"@","@"+we)})],u);case nl:if(n.length)return Yp(l=n.props,function(d){switch(en(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ar(Sn(n,{props:[de(d,/:(read-\w+)/,":"+yo+"$1")]})),Ar(Sn(n,{props:[d]})),Ia(n,{props:ud(l,u)});break;case"::placeholder":Ar(Sn(n,{props:[de(d,/:(plac\w+)/,":"+we+"input-$1")]})),Ar(Sn(n,{props:[de(d,/:(plac\w+)/,":"+yo+"$1")]})),Ar(Sn(n,{props:[de(d,/:(plac\w+)/,ke+"input-$1")]})),Ar(Sn(n,{props:[d]})),Ia(n,{props:ud(l,u)});break}return""})}}var lh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Nr=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",g2="active",m2="data-styled-version",ll="6.1.19",Fa=`/*!sc*/
`,Ki=typeof window<"u"&&typeof document<"u",sh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),ah={},sl=Object.freeze([]),Rr=Object.freeze({});function v2(n,i,l){return l===void 0&&(l=Rr),n.theme!==l.theme&&n.theme||i||l.theme}var y2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ch=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uh=/(^-|-$)/g;function pd(n){return n.replace(ch,"-").replace(uh,"")}var dh=/(a)(d)/gi,Hi=52,hd=function(n){return String.fromCharCode(n+(n>25?39:97))};function ja(n){var i,l="";for(i=Math.abs(n);i>Hi;i=i/Hi|0)l=hd(i%Hi)+l;return(hd(i%Hi)+l).replace(dh,"$1-$2")}var aa,x2=5381,wr=function(n,i){for(var l=i.length;l;)n=33*n^i.charCodeAt(--l);return n},A2=function(n){return wr(x2,n)};function Va(n){return ja(A2(n)>>>0)}function fh(n){return n.displayName||n.name||"Component"}function ca(n){return typeof n=="string"&&!0}var w2=typeof Symbol=="function"&&Symbol.for,S2=w2?Symbol.for("react.memo"):60115,ph=w2?Symbol.for("react.forward_ref"):60112,hh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},T2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mh=((aa={})[ph]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},aa[S2]=T2,aa);function gd(n){return("type"in(i=n)&&i.type.$$typeof)===S2?T2:"$$typeof"in n?mh[n.$$typeof]:hh;var i}var vh=Object.defineProperty,yh=Object.getOwnPropertyNames,md=Object.getOwnPropertySymbols,xh=Object.getOwnPropertyDescriptor,Ah=Object.getPrototypeOf,vd=Object.prototype;function E2(n,i,l){if(typeof i!="string"){if(vd){var u=Ah(i);u&&u!==vd&&E2(n,u,l)}var d=yh(i);md&&(d=d.concat(md(i)));for(var p=gd(n),g=gd(i),x=0;x<d.length;++x){var v=d[x];if(!(v in gh||l&&l[v]||g&&v in g||p&&v in p)){var T=xh(i,v);try{vh(n,v,T)}catch{}}}}return n}function Yn(n){return typeof n=="function"}function Ya(n){return typeof n=="object"&&"styledComponentId"in n}function Un(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Xi(n,i){if(n.length===0)return"";for(var l=n[0],u=1;u<n.length;u++)l+=n[u];return l}function xo(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ma(n,i,l){if(l===void 0&&(l=!1),!l&&!xo(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var u=0;u<i.length;u++)n[u]=Ma(n[u],i[u]);else if(xo(i))for(var u in i)n[u]=Ma(n[u],i[u]);return n}function $a(n,i){Object.defineProperty(n,"toString",{value:i})}function $n(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var wh=(function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var l=0,u=0;u<i;u++)l+=this.groupSizes[u];return l},n.prototype.insertRules=function(i,l){if(i>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,p=d;i>=p;)if((p<<=1)<0)throw $n(16,"".concat(i));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var g=d;g<p;g++)this.groupSizes[g]=0}for(var x=this.indexOfGroup(i+1),v=(g=0,l.length);g<v;g++)this.tag.insertRule(x,l[g])&&(this.groupSizes[i]++,x++)},n.prototype.clearGroup=function(i){if(i<this.length){var l=this.groupSizes[i],u=this.indexOfGroup(i),d=u+l;this.groupSizes[i]=0;for(var p=u;p<d;p++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(i){var l="";if(i>=this.length||this.groupSizes[i]===0)return l;for(var u=this.groupSizes[i],d=this.indexOfGroup(i),p=d+u,g=d;g<p;g++)l+="".concat(this.tag.getRule(g)).concat(Fa);return l},n})(),Wi=new Map,Ji=new Map,Qi=1,zi=function(n){if(Wi.has(n))return Wi.get(n);for(;Ji.has(Qi);)Qi++;var i=Qi++;return Wi.set(n,i),Ji.set(i,n),i},Sh=function(n,i){Qi=i+1,Wi.set(n,i),Ji.set(i,n)},Th="style[".concat(Nr,"][").concat(m2,'="').concat(ll,'"]'),Eh=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nh=function(n,i,l){for(var u,d=l.split(","),p=0,g=d.length;p<g;p++)(u=d[p])&&n.registerName(i,u)},Rh=function(n,i){for(var l,u=((l=i.textContent)!==null&&l!==void 0?l:"").split(Fa),d=[],p=0,g=u.length;p<g;p++){var x=u[p].trim();if(x){var v=x.match(Eh);if(v){var T=0|parseInt(v[1],10),w=v[2];T!==0&&(Sh(w,T),Nh(n,w,v[3]),n.getTag().insertRules(T,d)),d.length=0}else d.push(x)}}},yd=function(n){for(var i=document.querySelectorAll(Th),l=0,u=i.length;l<u;l++){var d=i[l];d&&d.getAttribute(Nr)!==g2&&(Rh(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Ih(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N2=function(n){var i=document.head,l=n||i,u=document.createElement("style"),d=(function(x){var v=Array.from(x.querySelectorAll("style[".concat(Nr,"]")));return v[v.length-1]})(l),p=d!==void 0?d.nextSibling:null;u.setAttribute(Nr,g2),u.setAttribute(m2,ll);var g=Ih();return g&&u.setAttribute("nonce",g),l.insertBefore(u,p),u},kh=(function(){function n(i){this.element=N2(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var u=document.styleSheets,d=0,p=u.length;d<p;d++){var g=u[d];if(g.ownerNode===l)return g}throw $n(17)})(this.element),this.length=0}return n.prototype.insertRule=function(i,l){try{return this.sheet.insertRule(l,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var l=this.sheet.cssRules[i];return l&&l.cssText?l.cssText:""},n})(),Ch=(function(){function n(i){this.element=N2(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,l){if(i<=this.length&&i>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n})(),jh=(function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,l){return i<=this.length&&(this.rules.splice(i,0,l),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n})(),xd=Ki,Mh={isServer:!Ki,useCSSOMInjection:!sh},el=(function(){function n(i,l,u){i===void 0&&(i=Rr),l===void 0&&(l={});var d=this;this.options=Ze(Ze({},Mh),i),this.gs=l,this.names=new Map(u),this.server=!!i.isServer,!this.server&&Ki&&xd&&(xd=!1,yd(this)),$a(this,function(){return(function(p){for(var g=p.getTag(),x=g.length,v="",T=function(N){var C=(function(te){return Ji.get(te)})(N);if(C===void 0)return"continue";var j=p.names.get(C),M=g.getGroup(N);if(j===void 0||!j.size||M.length===0)return"continue";var H="".concat(Nr,".g").concat(N,'[id="').concat(C,'"]'),U="";j!==void 0&&j.forEach(function(te){te.length>0&&(U+="".concat(te,","))}),v+="".concat(M).concat(H,'{content:"').concat(U,'"}').concat(Fa)},w=0;w<x;w++)T(w);return v})(d)})}return n.registerId=function(i){return zi(i)},n.prototype.rehydrate=function(){!this.server&&Ki&&yd(this)},n.prototype.reconstructWithOptions=function(i,l){return l===void 0&&(l=!0),new n(Ze(Ze({},this.options),i),this.gs,l&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(l){var u=l.useCSSOMInjection,d=l.target;return l.isServer?new jh(d):u?new kh(d):new Ch(d)})(this.options),new wh(i)));var i},n.prototype.hasNameForId=function(i,l){return this.names.has(i)&&this.names.get(i).has(l)},n.prototype.registerName=function(i,l){if(zi(i),this.names.has(i))this.names.get(i).add(l);else{var u=new Set;u.add(l),this.names.set(i,u)}},n.prototype.insertRules=function(i,l,u){this.registerName(i,l),this.getTag().insertRules(zi(i),u)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(zi(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Dh=/&/g,Lh=/^\s*\/\/.*$/gm;function R2(n,i){return n.map(function(l){return l.type==="rule"&&(l.value="".concat(i," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(i," ")),l.props=l.props.map(function(u){return"".concat(i," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=R2(l.children,i)),l})}function Oh(n){var i,l,u,d=Rr,p=d.options,g=p===void 0?Rr:p,x=d.plugins,v=x===void 0?sl:x,T=function(C,j,M){return M.startsWith(l)&&M.endsWith(l)&&M.replaceAll(l,"").length>0?".".concat(i):C},w=v.slice();w.push(function(C){C.type===nl&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(Dh,l).replace(u,T))}),g.prefix&&w.push(ih),w.push(nh);var N=function(C,j,M,H){j===void 0&&(j=""),M===void 0&&(M=""),H===void 0&&(H="&"),i=H,l=j,u=new RegExp("\\".concat(l,"\\b"),"g");var U=C.replace(Lh,""),te=eh(M||j?"".concat(M," ").concat(j," { ").concat(U," }"):U);g.namespace&&(te=R2(te,g.namespace));var Z=[];return qi(te,rh(w.concat(oh(function(Q){return Z.push(Q)})))),Z};return N.hash=v.length?v.reduce(function(C,j){return j.name||$n(15),wr(C,j.name)},x2).toString():"",N}var bh=new el,Da=Oh(),I2=Gt.createContext({shouldForwardProp:void 0,styleSheet:bh,stylis:Da});I2.Consumer;Gt.createContext(void 0);function La(){return S.useContext(I2)}var k2=(function(){function n(i,l){var u=this;this.inject=function(d,p){p===void 0&&(p=Da);var g=u.name+p.hash;d.hasNameForId(u.id,g)||d.insertRules(u.id,g,p(u.rules,g,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=l,$a(this,function(){throw $n(12,String(u.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Da),this.name+i.hash},n})(),Gh=function(n){return n>="A"&&n<="Z"};function Ad(n){for(var i="",l=0;l<n.length;l++){var u=n[l];if(l===1&&u==="-"&&n[0]==="-")return n;Gh(u)?i+="-"+u.toLowerCase():i+=u}return i.startsWith("ms-")?"-"+i:i}var C2=function(n){return n==null||n===!1||n===""},j2=function(n){var i,l,u=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!C2(p)&&(Array.isArray(p)&&p.isCss||Yn(p)?u.push("".concat(Ad(d),":"),p,";"):xo(p)?u.push.apply(u,Sr(Sr(["".concat(d," {")],j2(p),!1),["}"],!1)):u.push("".concat(Ad(d),": ").concat((i=d,(l=p)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in lh||i.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return u};function En(n,i,l,u){if(C2(n))return[];if(Ya(n))return[".".concat(n.styledComponentId)];if(Yn(n)){if(!Yn(p=n)||p.prototype&&p.prototype.isReactComponent||!i)return[n];var d=n(i);return En(d,i,l,u)}var p;return n instanceof k2?l?(n.inject(l,u),[n.getName(u)]):[n]:xo(n)?j2(n):Array.isArray(n)?Array.prototype.concat.apply(sl,n.map(function(g){return En(g,i,l,u)})):[n.toString()]}function M2(n){for(var i=0;i<n.length;i+=1){var l=n[i];if(Yn(l)&&!Ya(l))return!1}return!0}var _h=A2(ll),Hh=(function(){function n(i,l,u){this.rules=i,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&M2(i),this.componentId=l,this.baseHash=wr(_h,l),this.baseStyle=u,el.registerId(l)}return n.prototype.generateAndInjectStyles=function(i,l,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))d=Un(d,this.staticRulesId);else{var p=Xi(En(this.rules,i,l,u)),g=ja(wr(this.baseHash,p)>>>0);if(!l.hasNameForId(this.componentId,g)){var x=u(p,".".concat(g),void 0,this.componentId);l.insertRules(this.componentId,g,x)}d=Un(d,g),this.staticRulesId=g}else{for(var v=wr(this.baseHash,u.hash),T="",w=0;w<this.rules.length;w++){var N=this.rules[w];if(typeof N=="string")T+=N;else if(N){var C=Xi(En(N,i,l,u));v=wr(v,C+w),T+=C}}if(T){var j=ja(v>>>0);l.hasNameForId(this.componentId,j)||l.insertRules(this.componentId,j,u(T,".".concat(j),void 0,this.componentId)),d=Un(d,j)}}return d},n})(),Ao=Gt.createContext(void 0);Ao.Consumer;function zh(n){var i=Gt.useContext(Ao),l=S.useMemo(function(){return(function(u,d){if(!u)throw $n(14);if(Yn(u)){var p=u(d);return p}if(Array.isArray(u)||typeof u!="object")throw $n(8);return d?Ze(Ze({},d),u):u})(n.theme,i)},[n.theme,i]);return n.children?Gt.createElement(Ao.Provider,{value:l},n.children):null}var ua={};function Bh(n,i,l){var u=Ya(n),d=n,p=!ca(n),g=i.attrs,x=g===void 0?sl:g,v=i.componentId,T=v===void 0?(function(F,ne){var q=typeof F!="string"?"sc":pd(F);ua[q]=(ua[q]||0)+1;var $="".concat(q,"-").concat(Va(ll+q+ua[q]));return ne?"".concat(ne,"-").concat($):$})(i.displayName,i.parentComponentId):v,w=i.displayName,N=w===void 0?(function(F){return ca(F)?"styled.".concat(F):"Styled(".concat(fh(F),")")})(n):w,C=i.displayName&&i.componentId?"".concat(pd(i.displayName),"-").concat(i.componentId):i.componentId||T,j=u&&d.attrs?d.attrs.concat(x).filter(Boolean):x,M=i.shouldForwardProp;if(u&&d.shouldForwardProp){var H=d.shouldForwardProp;if(i.shouldForwardProp){var U=i.shouldForwardProp;M=function(F,ne){return H(F,ne)&&U(F,ne)}}else M=H}var te=new Hh(l,C,u?d.componentStyle:void 0);function Z(F,ne){return(function(q,$,ye){var _e=q.attrs,Le=q.componentStyle,qe=q.defaultProps,Ke=q.foldedComponentIds,He=q.styledComponentId,Pe=q.target,it=Gt.useContext(Ao),Ue=La(),se=q.shouldForwardProp||Ue.shouldForwardProp,G=v2($,it,qe)||Rr,Y=(function(ce,ue,xe){for(var he,me=Ze(Ze({},ue),{className:void 0,theme:xe}),Xe=0;Xe<ce.length;Xe+=1){var Yt=Yn(he=ce[Xe])?he(me):he;for(var kt in Yt)me[kt]=kt==="className"?Un(me[kt],Yt[kt]):kt==="style"?Ze(Ze({},me[kt]),Yt[kt]):Yt[kt]}return ue.className&&(me.className=Un(me.className,ue.className)),me})(_e,$,G),P=Y.as||Pe,E={};for(var D in Y)Y[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&Y.theme===G||(D==="forwardedAs"?E.as=Y.forwardedAs:se&&!se(D,P)||(E[D]=Y[D]));var ee=(function(ce,ue){var xe=La(),he=ce.generateAndInjectStyles(ue,xe.styleSheet,xe.stylis);return he})(Le,Y),re=Un(Ke,He);return ee&&(re+=" "+ee),Y.className&&(re+=" "+Y.className),E[ca(P)&&!y2.has(P)?"class":"className"]=re,ye&&(E.ref=ye),S.createElement(P,E)})(Q,F,ne)}Z.displayName=N;var Q=Gt.forwardRef(Z);return Q.attrs=j,Q.componentStyle=te,Q.displayName=N,Q.shouldForwardProp=M,Q.foldedComponentIds=u?Un(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=C,Q.target=u?d.target:n,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?(function(ne){for(var q=[],$=1;$<arguments.length;$++)q[$-1]=arguments[$];for(var ye=0,_e=q;ye<_e.length;ye++)Ma(ne,_e[ye],!0);return ne})({},d.defaultProps,F):F}}),$a(Q,function(){return".".concat(Q.styledComponentId)}),p&&E2(Q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function wd(n,i){for(var l=[n[0]],u=0,d=i.length;u<d;u+=1)l.push(i[u],n[u+1]);return l}var Sd=function(n){return Object.assign(n,{isCss:!0})};function le(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];if(Yn(n)||xo(n))return Sd(En(wd(sl,Sr([n],i,!0))));var u=n;return i.length===0&&u.length===1&&typeof u[0]=="string"?En(u):Sd(En(wd(u,i)))}function Oa(n,i,l){if(l===void 0&&(l=Rr),!i)throw $n(1,i);var u=function(d){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];return n(i,l,le.apply(void 0,Sr([d],p,!1)))};return u.attrs=function(d){return Oa(n,i,Ze(Ze({},l),{attrs:Array.prototype.concat(l.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Oa(n,i,Ze(Ze({},l),d))},u}var D2=function(n){return Oa(Bh,n)},h=D2;y2.forEach(function(n){h[n]=D2(n)});var Ph=(function(){function n(i,l){this.rules=i,this.componentId=l,this.isStatic=M2(i),el.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,l,u,d){var p=d(Xi(En(this.rules,l,u,d)),""),g=this.componentId+i;u.insertRules(g,g,p)},n.prototype.removeStyles=function(i,l){l.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,l,u,d){i>2&&el.registerId(this.componentId+i),this.removeStyles(i,u),this.createStyles(i,l,u,d)},n})();function Uh(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=le.apply(void 0,Sr([n],i,!1)),d="sc-global-".concat(Va(JSON.stringify(u))),p=new Ph(u,d),g=function(v){var T=La(),w=Gt.useContext(Ao),N=Gt.useRef(T.styleSheet.allocateGSInstance(d)).current;return T.styleSheet.server&&x(N,v,T.styleSheet,w,T.stylis),Gt.useLayoutEffect(function(){if(!T.styleSheet.server)return x(N,v,T.styleSheet,w,T.stylis),function(){return p.removeStyles(N,T.styleSheet)}},[N,v,T.styleSheet,w,T.stylis]),null};function x(v,T,w,N,C){if(p.isStatic)p.renderStyles(v,ah,w,C);else{var j=Ze(Ze({},T),{theme:v2(T,N,g.defaultProps)});p.renderStyles(v,j,w,C)}}return Gt.memo(g)}function gt(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=Xi(le.apply(void 0,Sr([n],i,!1))),d=Va(u);return new k2(d,u)}const z={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",DARK_GRAY:"#333333",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK:"#000000",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",ORANGE_TRANSPARENT:"#ff853340",BEIGE:"#c8aaa0",LIME:"#00ed28",GREEN:"#008000",LIGHT_PURPLE:"#dcbfff",PURPLE:"#963eff"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%)",LIGHT_GRAY_FILTER:"brightness(0) saturate(100%) invert(86%) sepia(0%) saturate(1969%) hue-rotate(175deg) brightness(78%) contrast(96%)"},solvedAcColor:{LIME:"#17ce3a",OFF_WHITE:"#f7f8f9",GRAY:"#8a8f95",LIGHT_GRAY:"#b8bcbf",LIGHTER_GRAY:"#dddfe0",INDIGO:"#15202b",DARK_INDIGO:"#0b131b"},bojExtendedColor:{SKY_BLUE:"#008db4",DARK_SKY_BLUE:"#002635",DARK_INDIGO:"#001a26",DARK_GRAY:"#545454",DARKER_GRAY:"#202020",DARKEST_GRAY:"#161616",LIGHT_GRAY:"#a2a4a5"},solvedAcFilter:{LIME:"brightness(0) saturate(100%) invert(60%) sepia(34%) saturate(3800%) hue-rotate(87deg) brightness(105%) contrast(86%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(79%) sepia(4%) saturate(201%) hue-rotate(163deg) brightness(94%) contrast(93%)"},bojExtendedFilter:{DARK_GRAY:"brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(1005%) hue-rotate(147deg) brightness(100%) contrast(88%)",SKY_BLUE:"brightness(0) saturate(100%) invert(31%) sepia(81%) saturate(2692%) hue-rotate(171deg) brightness(96%) contrast(101%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(76%) sepia(5%) saturate(94%) hue-rotate(155deg) brightness(86%) contrast(88%)"}},Fh=Uh`
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
    scrollbar-color: ${z.color.LIGHTEST_BROWN} ${z.color.SLIGHT_DARK_BROWN};
  }
`;var l2,s2;const Vh=(s2=(l2=globalThis.browser)==null?void 0:l2.runtime)!=null&&s2.id?globalThis.browser:globalThis.chrome,Ae=Vh,Yh=h.nav`
  display: inline-flex;

  height: 36px;
`,$h=h.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,Wh=h.li`
  display: flex;
  flex-direction: column;
`,Qh=h.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme:n})=>n.color.GOLD};
  background: none;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: ${({$isSelected:n})=>n?800:600};
  color: ${({theme:n})=>n.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme:n})=>n.color.LEMON};
  }
`,Zh=h.span`
  display: inline-block;

  width: ${({$isSelected:n})=>n?"100%":"0"};
  height: 2px;

  background-color: ${({theme:n})=>n.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:n})=>n.color.LEMON};
  }
`,qh=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],Kh=n=>{const{selectedCategory:i,onChange:l}=n;return c.jsx(Yh,{children:c.jsx($h,{children:qh.map(({displayName:u,category:d})=>c.jsxs(Wh,{children:[c.jsx(Qh,{$isSelected:d===i,onClick:()=>{l(d)},children:u}),c.jsx(Zh,{$isSelected:d===i})]},u))})})},Zi={none:z.color.WHITE,totamjung:z.color.DARK_BROWN,bojExtendedDark:z.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_INDIGO,solvedAcLight:z.color.WHITE,solvedAcDark:z.solvedAcColor.DARK_INDIGO,solvedAcBlack:z.color.BLACK},L2={none:z.color.BLACK,totamjung:z.color.GOLD,bojExtendedDark:z.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:z.color.WHITE,solvedAcLight:z.color.BLACK,solvedAcDark:z.color.WHITE,solvedAcBlack:z.color.WHITE},Xh={...L2,none:z.solvedAcColor.GRAY,solvedAcLight:z.solvedAcColor.GRAY,solvedAcDark:z.solvedAcColor.LIGHT_GRAY,solvedAcBlack:z.solvedAcColor.LIGHT_GRAY},Jh={none:z.color.PURE_WHITE,totamjung:z.color.BROWN,bojExtendedDark:z.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:z.color.PURE_WHITE,solvedAcDark:z.solvedAcColor.INDIGO,solvedAcBlack:z.solvedAcColor.DARK_INDIGO},eg={none:z.color.LIGHT_GRAY,totamjung:z.color.GOLD,bojExtendedDark:z.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_INDIGO,solvedAcLight:z.color.WHITE,solvedAcDark:z.solvedAcColor.DARK_INDIGO,solvedAcBlack:z.color.BLACK},tg=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,ng=h.div`
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
`,O2=h.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`,b2=h.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,G2=h.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,_2=h.div`
  padding: ${({$padding:n})=>n};

  font-size: 16px;
`,rg=h.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:n})=>Zi[n]};
`,og=h.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:n})=>eg[n]};
  background-color: ${({$totamjungTheme:n})=>Zi[n]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$totamjungTheme:n})=>le`
    & ${O2} {
      border-bottom: 16px solid ${Zi[n]};

      background-color: ${Zi[n]};
    }

    & ${b2} {
      color: ${L2[n]};
    }

    & ${G2} > svg {
      color: ${Xh[n]};
    }

    & ${_2} {
      background-color: ${Jh[n]};

      color: ${({theme:i})=>i.color.DARK_GRAY};
    }
  `};
`,ig=n=>{const{onEscKeyPress:i}=n,l=u=>{u.key==="Escape"&&i()};S.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[i])},H2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...n},S.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),lg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),al=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),sg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),ag=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),cg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),ug=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),No=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),Ro=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),dg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),z2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),fg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),B2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),Io=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),P2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},S.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),U2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),pg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},S.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),hg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},S.createElement("g",{fill:"currentColor"},S.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),S.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),gg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...n},S.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),S.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),F2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),mg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),vg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),yg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),xg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"})),Ag=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},S.createElement("g",{fill:"currentColor"},S.createElement("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"}),S.createElement("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"}))),wg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,color:"currentColor"},S.createElement("path",{d:"M13.5 5.5V2m0 10V9m0 13c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2S6 6.51 6 12s1.5 10 7.5 10"}),S.createElement("path",{d:"M15 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C15 8.199 15 7.966 15 7.5zm-9 5h15M5 3.167L4.619 2m-.59 3.567L3 6"}))),V2=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},S.createElement("rect",{width:12,height:12,x:2,y:10,rx:2,ry:2}),S.createElement("path",{d:"m17.92 14l3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01"}))),Sg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"})),Tg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"})),Eg=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},S.createElement("path",{fill:"currentColor",d:"M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"})),Ng=n=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},S.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4},S.createElement("path",{d:"M44 44V4H24v16H4v24z"}),S.createElement("path",{d:"m21 28l-4 4l4 4"}),S.createElement("path",{d:"M34 23v9H17"})));var da={exports:{}},pt={},fa={exports:{}},pa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Rg(){return Td||(Td=1,(function(n){function i(G,Y){var P=G.length;G.push(Y);e:for(;0<P;){var E=P-1>>>1,D=G[E];if(0<d(D,Y))G[E]=Y,G[P]=D,P=E;else break e}}function l(G){return G.length===0?null:G[0]}function u(G){if(G.length===0)return null;var Y=G[0],P=G.pop();if(P!==Y){G[0]=P;e:for(var E=0,D=G.length,ee=D>>>1;E<ee;){var re=2*(E+1)-1,ce=G[re],ue=re+1,xe=G[ue];if(0>d(ce,P))ue<D&&0>d(xe,ce)?(G[E]=xe,G[ue]=P,E=ue):(G[E]=ce,G[re]=P,E=re);else if(ue<D&&0>d(xe,P))G[E]=xe,G[ue]=P,E=ue;else break e}}return Y}function d(G,Y){var P=G.sortIndex-Y.sortIndex;return P!==0?P:G.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var g=Date,x=g.now();n.unstable_now=function(){return g.now()-x}}var v=[],T=[],w=1,N=null,C=3,j=!1,M=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(G){for(var Y=l(T);Y!==null;){if(Y.callback===null)u(T);else if(Y.startTime<=G)u(T),Y.sortIndex=Y.expirationTime,i(v,Y);else break;Y=l(T)}}function F(G){if(H=!1,Q(G),!M)if(l(v)!==null)M=!0,Ue(ne);else{var Y=l(T);Y!==null&&se(F,Y.startTime-G)}}function ne(G,Y){M=!1,H&&(H=!1,te(ye),ye=-1),j=!0;var P=C;try{for(Q(Y),N=l(v);N!==null&&(!(N.expirationTime>Y)||G&&!qe());){var E=N.callback;if(typeof E=="function"){N.callback=null,C=N.priorityLevel;var D=E(N.expirationTime<=Y);Y=n.unstable_now(),typeof D=="function"?N.callback=D:N===l(v)&&u(v),Q(Y)}else u(v);N=l(v)}if(N!==null)var ee=!0;else{var re=l(T);re!==null&&se(F,re.startTime-Y),ee=!1}return ee}finally{N=null,C=P,j=!1}}var q=!1,$=null,ye=-1,_e=5,Le=-1;function qe(){return!(n.unstable_now()-Le<_e)}function Ke(){if($!==null){var G=n.unstable_now();Le=G;var Y=!0;try{Y=$(!0,G)}finally{Y?He():(q=!1,$=null)}}else q=!1}var He;if(typeof Z=="function")He=function(){Z(Ke)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,it=Pe.port2;Pe.port1.onmessage=Ke,He=function(){it.postMessage(null)}}else He=function(){U(Ke,0)};function Ue(G){$=G,q||(q=!0,He())}function se(G,Y){ye=U(function(){G(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){M||j||(M=!0,Ue(ne))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return l(v)},n.unstable_next=function(G){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var P=C;C=Y;try{return G()}finally{C=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var P=C;C=G;try{return Y()}finally{C=P}},n.unstable_scheduleCallback=function(G,Y,P){var E=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?E+P:E):P=E,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,G={id:w++,callback:Y,priorityLevel:G,startTime:P,expirationTime:D,sortIndex:-1},P>E?(G.sortIndex=P,i(T,G),l(v)===null&&G===l(T)&&(H?(te(ye),ye=-1):H=!0,se(F,P-E))):(G.sortIndex=D,i(v,G),M||j||(M=!0,Ue(ne))),G},n.unstable_shouldYield=qe,n.unstable_wrapCallback=function(G){var Y=C;return function(){var P=C;C=Y;try{return G.apply(this,arguments)}finally{C=P}}}})(pa)),pa}var Ed;function Ig(){return Ed||(Ed=1,fa.exports=Rg()),fa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function kg(){if(Nd)return pt;Nd=1;var n=Ba(),i=Ig();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},N={};function C(e){return v.call(N,e)?!0:v.call(w,e)?!1:T.test(e)?N[e]=!0:(w[e]=!0,!1)}function j(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,r,o){if(t===null||typeof t>"u"||j(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,r,o,s,a,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=f}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,Z);U[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,Z);U[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,Z);U[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,t,r,o){var s=U.hasOwnProperty(t)?U[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,r,s,o)&&(r=null),o||s===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var F=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),q=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),qe=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,E;function D(e){if(E===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var ee=!1;function re(e,t){if(!e||ee)return"";ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var o=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){o=k}e.call(t.prototype)}else{try{throw Error()}catch(k){o=k}e()}}catch(k){if(k&&o&&typeof k.stack=="string"){for(var s=k.stack.split(`
`),a=o.stack.split(`
`),f=s.length-1,m=a.length-1;1<=f&&0<=m&&s[f]!==a[m];)m--;for(;1<=f&&0<=m;f--,m--)if(s[f]!==a[m]){if(f!==1||m!==1)do if(f--,m--,0>m||s[f]!==a[m]){var y=`
`+s[f].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=f&&0<=m);break}}}finally{ee=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?D(e):""}function ce(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case q:return"Portal";case _e:return"Profiler";case ye:return"StrictMode";case He:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qe:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){o=""+f,a.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(f){o=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yt(e){e._valueTracker||(e._valueTracker=Xe(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=me(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var r=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function pc(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hc(e,t){t=t.checked,t!=null&&Q(e,"checked",t,!1)}function pl(e,t){hc(e,t);var r=he(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,r):t.hasOwnProperty("defaultValue")&&hl(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function hl(e,t,r){(t!=="number"||Co(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var kr=Array.isArray;function Zn(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(kr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function vc(e,t){var r=he(t.value),o=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function yc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,Ac=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P1=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){P1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function wc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function Sc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=wc(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var U1=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(U1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,qn=null,Kn=null;function Tc(e){if(e=Xr(e)){if(typeof wl!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Jo(t),wl(e.stateNode,e.type,t))}}function Ec(e){qn?Kn?Kn.push(e):Kn=[e]:qn=e}function Nc(){if(qn){var e=qn,t=Kn;if(Kn=qn=null,Tc(e),t)for(e=0;e<t.length;e++)Tc(t[e])}}function Rc(e,t){return e(t)}function Ic(){}var Sl=!1;function kc(e,t,r){if(Sl)return e(t,r);Sl=!0;try{return Rc(e,t,r)}finally{Sl=!1,(qn!==null||Kn!==null)&&(Ic(),Nc())}}function Mr(e,t){var r=e.stateNode;if(r===null)return null;var o=Jo(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Tl=!1;if(x)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Tl=!1}function F1(e,t,r,o,s,a,f,m,y){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(O){this.onError(O)}}var Lr=!1,Mo=null,Do=!1,El=null,V1={onError:function(e){Lr=!0,Mo=e}};function Y1(e,t,r,o,s,a,f,m,y){Lr=!1,Mo=null,F1.apply(V1,arguments)}function $1(e,t,r,o,s,a,f,m,y){if(Y1.apply(this,arguments),Lr){if(Lr){var k=Mo;Lr=!1,Mo=null}else throw Error(l(198));Do||(Do=!0,El=k)}}function In(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jc(e){if(In(e)!==e)throw Error(l(188))}function W1(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return jc(s),e;if(a===o)return jc(s),t;a=a.sibling}throw Error(l(188))}if(r.return!==o.return)r=s,o=a;else{for(var f=!1,m=s.child;m;){if(m===r){f=!0,r=s,o=a;break}if(m===o){f=!0,o=s,r=a;break}m=m.sibling}if(!f){for(m=a.child;m;){if(m===r){f=!0,r=a,o=s;break}if(m===o){f=!0,o=a,r=s;break}m=m.sibling}if(!f)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Mc(e){return e=W1(e),e!==null?Dc(e):null}function Dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dc(e);if(t!==null)return t;e=e.sibling}return null}var Lc=i.unstable_scheduleCallback,Oc=i.unstable_cancelCallback,Q1=i.unstable_shouldYield,Z1=i.unstable_requestPaint,be=i.unstable_now,q1=i.unstable_getCurrentPriorityLevel,Nl=i.unstable_ImmediatePriority,bc=i.unstable_UserBlockingPriority,Lo=i.unstable_NormalPriority,K1=i.unstable_LowPriority,Gc=i.unstable_IdlePriority,Oo=null,Ht=null;function X1(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:tf,J1=Math.log,ef=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(J1(e)/ef|0)|0}var bo=64,Go=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,f=r&268435455;if(f!==0){var m=f&~s;m!==0?o=Or(m):(a&=f,a!==0&&(o=Or(a)))}else f=r&~s,f!==0?o=Or(f):a!==0&&(o=Or(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Ct(t),s=1<<r,o|=e[r],t&=~s;return o}function nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var f=31-Ct(a),m=1<<f,y=s[f];y===-1?((m&r)===0||(m&o)!==0)&&(s[f]=nf(m,t)):y<=t&&(e.expiredLanes|=m),a&=~m}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _c(){var e=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),e}function Il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function br(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=r}function of(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ct(r),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~a}}function kl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ct(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var Se=0;function Hc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zc,Cl,Bc,Pc,Uc,jl=!1,Ho=[],nn=null,rn=null,on=null,Gr=new Map,_r=new Map,ln=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fc(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function Hr(e,t,r,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Xr(t),t!==null&&Cl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function sf(e,t,r,o,s){switch(t){case"focusin":return nn=Hr(nn,e,t,r,o,s),!0;case"dragenter":return rn=Hr(rn,e,t,r,o,s),!0;case"mouseover":return on=Hr(on,e,t,r,o,s),!0;case"pointerover":var a=s.pointerId;return Gr.set(a,Hr(Gr.get(a)||null,e,t,r,o,s)),!0;case"gotpointercapture":return a=s.pointerId,_r.set(a,Hr(_r.get(a)||null,e,t,r,o,s)),!0}return!1}function Vc(e){var t=kn(e.target);if(t!==null){var r=In(t);if(r!==null){if(t=r.tag,t===13){if(t=Cc(r),t!==null){e.blockedOn=t,Uc(e.priority,function(){Bc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);xl=o,r.target.dispatchEvent(o),xl=null}else return t=Xr(r),t!==null&&Cl(t),e.blockedOn=r,!1;t.shift()}return!0}function Yc(e,t,r){zo(e)&&r.delete(t)}function af(){jl=!1,nn!==null&&zo(nn)&&(nn=null),rn!==null&&zo(rn)&&(rn=null),on!==null&&zo(on)&&(on=null),Gr.forEach(Yc),_r.forEach(Yc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,af)))}function Br(e){function t(s){return zr(s,e)}if(0<Ho.length){zr(Ho[0],e);for(var r=1;r<Ho.length;r++){var o=Ho[r];o.blockedOn===e&&(o.blockedOn=null)}}for(nn!==null&&zr(nn,e),rn!==null&&zr(rn,e),on!==null&&zr(on,e),Gr.forEach(t),_r.forEach(t),r=0;r<ln.length;r++)o=ln[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<ln.length&&(r=ln[0],r.blockedOn===null);)Vc(r),r.blockedOn===null&&ln.shift()}var Xn=F.ReactCurrentBatchConfig,Bo=!0;function cf(e,t,r,o){var s=Se,a=Xn.transition;Xn.transition=null;try{Se=1,Ml(e,t,r,o)}finally{Se=s,Xn.transition=a}}function uf(e,t,r,o){var s=Se,a=Xn.transition;Xn.transition=null;try{Se=4,Ml(e,t,r,o)}finally{Se=s,Xn.transition=a}}function Ml(e,t,r,o){if(Bo){var s=Dl(e,t,r,o);if(s===null)Zl(e,t,o,Po,r),Fc(e,o);else if(sf(s,e,t,r,o))o.stopPropagation();else if(Fc(e,o),t&4&&-1<lf.indexOf(e)){for(;s!==null;){var a=Xr(s);if(a!==null&&zc(a),a=Dl(e,t,r,o),a===null&&Zl(e,t,o,Po,r),a===s)break;s=a}s!==null&&o.stopPropagation()}else Zl(e,t,o,null,r)}}var Po=null;function Dl(e,t,r,o){if(Po=null,e=Al(o),e=kn(e),e!==null)if(t=In(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Cc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case Nl:return 1;case bc:return 4;case Lo:case K1:return 16;case Gc:return 536870912;default:return 16}default:return 16}}var sn=null,Ll=null,Uo=null;function Wc(){if(Uo)return Uo;var e,t=Ll,r=t.length,o,s="value"in sn?sn.value:sn.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var f=r-e;for(o=1;o<=f&&t[r-o]===s[a-o];o++);return Uo=s.slice(e,1<o?1-o:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function Qc(){return!1}function mt(e){function t(r,o,s,a,f){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vo:Qc,this.isPropagationStopped=Qc,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=mt(Jn),Pr=P({},Jn,{view:0,detail:0}),df=mt(Pr),bl,Gl,Ur,Yo=P({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(bl=e.screenX-Ur.screenX,Gl=e.screenY-Ur.screenY):Gl=bl=0,Ur=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),Zc=mt(Yo),ff=P({},Yo,{dataTransfer:0}),pf=mt(ff),hf=P({},Pr,{relatedTarget:0}),_l=mt(hf),gf=P({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=mt(gf),vf=P({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=mt(vf),xf=P({},Jn,{data:0}),qc=mt(xf),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sf[e])?!!t[e]:!1}function Hl(){return Tf}var Ef=P({},Pr,{key:function(e){if(e.key){var t=Af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nf=mt(Ef),Rf=P({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=mt(Rf),If=P({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),kf=mt(If),Cf=P({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=mt(Cf),Mf=P({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Df=mt(Mf),Lf=[9,13,27,32],zl=x&&"CompositionEvent"in window,Fr=null;x&&"documentMode"in document&&(Fr=document.documentMode);var Of=x&&"TextEvent"in window&&!Fr,Xc=x&&(!zl||Fr&&8<Fr&&11>=Fr),Jc=" ",eu=!1;function tu(e,t){switch(e){case"keyup":return Lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function bf(e,t){switch(e){case"compositionend":return nu(t);case"keypress":return t.which!==32?null:(eu=!0,Jc);case"textInput":return e=t.data,e===Jc&&eu?null:e;default:return null}}function Gf(e,t){if(er)return e==="compositionend"||!zl&&tu(e,t)?(e=Wc(),Uo=Ll=sn=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xc&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function ou(e,t,r,o){Ec(o),t=qo(t,"onChange"),0<t.length&&(r=new Ol("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Vr=null,Yr=null;function Hf(e){Su(e,0)}function $o(e){var t=ir(e);if(kt(t))return e}function zf(e,t){if(e==="change")return t}var iu=!1;if(x){var Bl;if(x){var Pl="oninput"in document;if(!Pl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Pl=typeof lu.oninput=="function"}Bl=Pl}else Bl=!1;iu=Bl&&(!document.documentMode||9<document.documentMode)}function su(){Vr&&(Vr.detachEvent("onpropertychange",au),Yr=Vr=null)}function au(e){if(e.propertyName==="value"&&$o(Yr)){var t=[];ou(t,Yr,e,Al(e)),kc(Hf,t)}}function Bf(e,t,r){e==="focusin"?(su(),Vr=t,Yr=r,Vr.attachEvent("onpropertychange",au)):e==="focusout"&&su()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Yr)}function Uf(e,t){if(e==="click")return $o(t)}function Ff(e,t){if(e==="input"||e==="change")return $o(t)}function Vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Vf;function $r(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!v.call(t,s)||!jt(e[s],t[s]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var r=cu(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cu(r)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Co(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yf(e){var t=fu(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&du(r.ownerDocument.documentElement,r)){if(o!==null&&Ul(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=uu(r,a);var f=uu(r,o);s&&f&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $f=x&&"documentMode"in document&&11>=document.documentMode,tr=null,Fl=null,Wr=null,Vl=!1;function pu(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vl||tr==null||tr!==Co(o)||(o=tr,"selectionStart"in o&&Ul(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wr&&$r(Wr,o)||(Wr=o,o=qo(Fl,"onSelect"),0<o.length&&(t=new Ol("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=tr)))}function Wo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var nr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Yl={},hu={};x&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Qo(e){if(Yl[e])return Yl[e];if(!nr[e])return e;var t=nr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in hu)return Yl[e]=t[r];return e}var gu=Qo("animationend"),mu=Qo("animationiteration"),vu=Qo("animationstart"),yu=Qo("transitionend"),xu=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){xu.set(e,t),p(t,[e])}for(var $l=0;$l<Au.length;$l++){var Wl=Au[$l],Wf=Wl.toLowerCase(),Qf=Wl[0].toUpperCase()+Wl.slice(1);an(Wf,"on"+Qf)}an(gu,"onAnimationEnd"),an(mu,"onAnimationIteration"),an(vu,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(yu,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function wu(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,$1(o,t,void 0,e),e.currentTarget=null}function Su(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var f=o.length-1;0<=f;f--){var m=o[f],y=m.instance,k=m.currentTarget;if(m=m.listener,y!==a&&s.isPropagationStopped())break e;wu(s,m,k),a=y}else for(f=0;f<o.length;f++){if(m=o[f],y=m.instance,k=m.currentTarget,m=m.listener,y!==a&&s.isPropagationStopped())break e;wu(s,m,k),a=y}}}if(Do)throw e=El,Do=!1,El=null,e}function Re(e,t){var r=t[ts];r===void 0&&(r=t[ts]=new Set);var o=e+"__bubble";r.has(o)||(Tu(t,e,2,!1),r.add(o))}function Ql(e,t,r){var o=0;t&&(o|=4),Tu(r,e,o,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Zo]){e[Zo]=!0,u.forEach(function(r){r!=="selectionchange"&&(Zf.has(r)||Ql(r,!1,e),Ql(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,Ql("selectionchange",!1,t))}}function Tu(e,t,r,o){switch($c(t)){case 1:var s=cf;break;case 4:s=uf;break;default:s=Ml}r=s.bind(null,t,r,e),s=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Zl(e,t,r,o,s){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var m=o.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(f===4)for(f=o.return;f!==null;){var y=f.tag;if((y===3||y===4)&&(y=f.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;f=f.return}for(;m!==null;){if(f=kn(m),f===null)return;if(y=f.tag,y===5||y===6){o=a=f;continue e}m=m.parentNode}}o=o.return}kc(function(){var k=a,O=Al(r),b=[];e:{var L=xu.get(e);if(L!==void 0){var V=Ol,K=e;switch(e){case"keypress":if(Fo(r)===0)break e;case"keydown":case"keyup":V=Nf;break;case"focusin":K="focus",V=_l;break;case"focusout":K="blur",V=_l;break;case"beforeblur":case"afterblur":V=_l;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=kf;break;case gu:case mu:case vu:V=mf;break;case yu:V=jf;break;case"scroll":V=df;break;case"wheel":V=Df;break;case"copy":case"cut":case"paste":V=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Kc}var X=(t&4)!==0,Ge=!X&&e==="scroll",R=X?L!==null?L+"Capture":null:L;X=[];for(var A=k,I;A!==null;){I=A;var _=I.stateNode;if(I.tag===5&&_!==null&&(I=_,R!==null&&(_=Mr(A,R),_!=null&&X.push(qr(A,_,I)))),Ge)break;A=A.return}0<X.length&&(L=new V(L,K,null,r,O),b.push({event:L,listeners:X}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",L&&r!==xl&&(K=r.relatedTarget||r.fromElement)&&(kn(K)||K[$t]))break e;if((V||L)&&(L=O.window===O?O:(L=O.ownerDocument)?L.defaultView||L.parentWindow:window,V?(K=r.relatedTarget||r.toElement,V=k,K=K?kn(K):null,K!==null&&(Ge=In(K),K!==Ge||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=k),V!==K)){if(X=Zc,_="onMouseLeave",R="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(X=Kc,_="onPointerLeave",R="onPointerEnter",A="pointer"),Ge=V==null?L:ir(V),I=K==null?L:ir(K),L=new X(_,A+"leave",V,r,O),L.target=Ge,L.relatedTarget=I,_=null,kn(O)===k&&(X=new X(R,A+"enter",K,r,O),X.target=I,X.relatedTarget=Ge,_=X),Ge=_,V&&K)t:{for(X=V,R=K,A=0,I=X;I;I=rr(I))A++;for(I=0,_=R;_;_=rr(_))I++;for(;0<A-I;)X=rr(X),A--;for(;0<I-A;)R=rr(R),I--;for(;A--;){if(X===R||R!==null&&X===R.alternate)break t;X=rr(X),R=rr(R)}X=null}else X=null;V!==null&&Eu(b,L,V,X,!1),K!==null&&Ge!==null&&Eu(b,Ge,K,X,!0)}}e:{if(L=k?ir(k):window,V=L.nodeName&&L.nodeName.toLowerCase(),V==="select"||V==="input"&&L.type==="file")var J=zf;else if(ru(L))if(iu)J=Ff;else{J=Pf;var oe=Bf}else(V=L.nodeName)&&V.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(J=Uf);if(J&&(J=J(e,k))){ou(b,J,r,O);break e}oe&&oe(e,L,k),e==="focusout"&&(oe=L._wrapperState)&&oe.controlled&&L.type==="number"&&hl(L,"number",L.value)}switch(oe=k?ir(k):window,e){case"focusin":(ru(oe)||oe.contentEditable==="true")&&(tr=oe,Fl=k,Wr=null);break;case"focusout":Wr=Fl=tr=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,pu(b,r,O);break;case"selectionchange":if($f)break;case"keydown":case"keyup":pu(b,r,O)}var ie;if(zl)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else er?tu(e,r)&&(ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ae="onCompositionStart");ae&&(Xc&&r.locale!=="ko"&&(er||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&er&&(ie=Wc()):(sn=O,Ll="value"in sn?sn.value:sn.textContent,er=!0)),oe=qo(k,ae),0<oe.length&&(ae=new qc(ae,e,null,r,O),b.push({event:ae,listeners:oe}),ie?ae.data=ie:(ie=nu(r),ie!==null&&(ae.data=ie)))),(ie=Of?bf(e,r):Gf(e,r))&&(k=qo(k,"onBeforeInput"),0<k.length&&(O=new qc("onBeforeInput","beforeinput",null,r,O),b.push({event:O,listeners:k}),O.data=ie))}Su(b,t)})}function qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qo(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Mr(e,r),a!=null&&o.unshift(qr(e,a,s)),a=Mr(e,t),a!=null&&o.push(qr(e,a,s))),e=e.return}return o}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,r,o,s){for(var a=t._reactName,f=[];r!==null&&r!==o;){var m=r,y=m.alternate,k=m.stateNode;if(y!==null&&y===o)break;m.tag===5&&k!==null&&(m=k,s?(y=Mr(r,a),y!=null&&f.unshift(qr(r,y,m))):s||(y=Mr(r,a),y!=null&&f.push(qr(r,y,m)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var qf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(qf,`
`).replace(Kf,"")}function Ko(e,t,r){if(t=Nu(t),Nu(e)!==t&&r)throw Error(l(425))}function Xo(){}var ql=null,Kl=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,Ru=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ru<"u"?function(e){return Ru.resolve(null).then(e).catch(ep)}:Jl;function ep(e){setTimeout(function(){throw e})}function es(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),Br(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Br(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),zt="__reactFiber$"+or,Kr="__reactProps$"+or,$t="__reactContainer$"+or,ts="__reactEvents$"+or,tp="__reactListeners$"+or,np="__reactHandles$"+or;function kn(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[$t]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Iu(e);e!==null;){if(r=e[zt])return r;e=Iu(e)}return t}e=r,r=e.parentNode}return null}function Xr(e){return e=e[zt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Jo(e){return e[Kr]||null}var ns=[],lr=-1;function un(e){return{current:e}}function Ie(e){0>lr||(e.current=ns[lr],ns[lr]=null,lr--)}function Ee(e,t){lr++,ns[lr]=e.current,e.current=t}var dn={},tt=un(dn),at=un(!1),Cn=dn;function sr(e,t){var r=e.type.contextTypes;if(!r)return dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ct(e){return e=e.childContextTypes,e!=null}function ei(){Ie(at),Ie(tt)}function ku(e,t,r){if(tt.current!==dn)throw Error(l(168));Ee(tt,t),Ee(at,r)}function Cu(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,xe(e)||"Unknown",s));return P({},r,o)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Cn=tt.current,Ee(tt,e),Ee(at,at.current),!0}function ju(e,t,r){var o=e.stateNode;if(!o)throw Error(l(169));r?(e=Cu(e,t,Cn),o.__reactInternalMemoizedMergedChildContext=e,Ie(at),Ie(tt),Ee(tt,e)):Ie(at),Ee(at,r)}var Wt=null,ni=!1,rs=!1;function Mu(e){Wt===null?Wt=[e]:Wt.push(e)}function rp(e){ni=!0,Mu(e)}function fn(){if(!rs&&Wt!==null){rs=!0;var e=0,t=Se;try{var r=Wt;for(Se=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Wt=null,ni=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(e+1)),Lc(Nl,fn),s}finally{Se=t,rs=!1}}return null}var ar=[],cr=0,ri=null,oi=0,wt=[],St=0,jn=null,Qt=1,Zt="";function Mn(e,t){ar[cr++]=oi,ar[cr++]=ri,ri=e,oi=t}function Du(e,t,r){wt[St++]=Qt,wt[St++]=Zt,wt[St++]=jn,jn=e;var o=Qt;e=Zt;var s=32-Ct(o)-1;o&=~(1<<s),r+=1;var a=32-Ct(t)+s;if(30<a){var f=s-s%5;a=(o&(1<<f)-1).toString(32),o>>=f,s-=f,Qt=1<<32-Ct(t)+s|r<<s|o,Zt=a+e}else Qt=1<<a|r<<s|o,Zt=e}function os(e){e.return!==null&&(Mn(e,1),Du(e,1,0))}function is(e){for(;e===ri;)ri=ar[--cr],ar[cr]=null,oi=ar[--cr],ar[cr]=null;for(;e===jn;)jn=wt[--St],wt[St]=null,Zt=wt[--St],wt[St]=null,Qt=wt[--St],wt[St]=null}var vt=null,yt=null,je=!1,Mt=null;function Lu(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ou(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jn!==null?{id:Qt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,yt=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ss(e){if(je){var t=yt;if(t){var r=t;if(!Ou(e,t)){if(ls(e))throw Error(l(418));t=cn(r.nextSibling);var o=vt;t&&Ou(e,t)?Lu(o,r):(e.flags=e.flags&-4097|2,je=!1,vt=e)}}else{if(ls(e))throw Error(l(418));e.flags=e.flags&-4097|2,je=!1,vt=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function ii(e){if(e!==vt)return!1;if(!je)return bu(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=yt)){if(ls(e))throw Gu(),Error(l(418));for(;t;)Lu(e,t),t=cn(t.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yt=cn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?cn(e.stateNode.nextSibling):null;return!0}function Gu(){for(var e=yt;e;)e=cn(e.nextSibling)}function ur(){yt=vt=null,je=!1}function as(e){Mt===null?Mt=[e]:Mt.push(e)}var op=F.ReactCurrentBatchConfig;function Jr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var o=r.stateNode}if(!o)throw Error(l(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(f){var m=s.refs;f===null?delete m[a]:m[a]=f},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function li(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _u(e){var t=e._init;return t(e._payload)}function Hu(e){function t(R,A){if(e){var I=R.deletions;I===null?(R.deletions=[A],R.flags|=16):I.push(A)}}function r(R,A){if(!e)return null;for(;A!==null;)t(R,A),A=A.sibling;return null}function o(R,A){for(R=new Map;A!==null;)A.key!==null?R.set(A.key,A):R.set(A.index,A),A=A.sibling;return R}function s(R,A){return R=An(R,A),R.index=0,R.sibling=null,R}function a(R,A,I){return R.index=I,e?(I=R.alternate,I!==null?(I=I.index,I<A?(R.flags|=2,A):I):(R.flags|=2,A)):(R.flags|=1048576,A)}function f(R){return e&&R.alternate===null&&(R.flags|=2),R}function m(R,A,I,_){return A===null||A.tag!==6?(A=Js(I,R.mode,_),A.return=R,A):(A=s(A,I),A.return=R,A)}function y(R,A,I,_){var J=I.type;return J===$?O(R,A,I.props.children,_,I.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ue&&_u(J)===A.type)?(_=s(A,I.props),_.ref=Jr(R,A,I),_.return=R,_):(_=ji(I.type,I.key,I.props,null,R.mode,_),_.ref=Jr(R,A,I),_.return=R,_)}function k(R,A,I,_){return A===null||A.tag!==4||A.stateNode.containerInfo!==I.containerInfo||A.stateNode.implementation!==I.implementation?(A=ea(I,R.mode,_),A.return=R,A):(A=s(A,I.children||[]),A.return=R,A)}function O(R,A,I,_,J){return A===null||A.tag!==7?(A=zn(I,R.mode,_,J),A.return=R,A):(A=s(A,I),A.return=R,A)}function b(R,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Js(""+A,R.mode,I),A.return=R,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ne:return I=ji(A.type,A.key,A.props,null,R.mode,I),I.ref=Jr(R,null,A),I.return=R,I;case q:return A=ea(A,R.mode,I),A.return=R,A;case Ue:var _=A._init;return b(R,_(A._payload),I)}if(kr(A)||Y(A))return A=zn(A,R.mode,I,null),A.return=R,A;li(R,A)}return null}function L(R,A,I,_){var J=A!==null?A.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return J!==null?null:m(R,A,""+I,_);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ne:return I.key===J?y(R,A,I,_):null;case q:return I.key===J?k(R,A,I,_):null;case Ue:return J=I._init,L(R,A,J(I._payload),_)}if(kr(I)||Y(I))return J!==null?null:O(R,A,I,_,null);li(R,I)}return null}function V(R,A,I,_,J){if(typeof _=="string"&&_!==""||typeof _=="number")return R=R.get(I)||null,m(A,R,""+_,J);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ne:return R=R.get(_.key===null?I:_.key)||null,y(A,R,_,J);case q:return R=R.get(_.key===null?I:_.key)||null,k(A,R,_,J);case Ue:var oe=_._init;return V(R,A,I,oe(_._payload),J)}if(kr(_)||Y(_))return R=R.get(I)||null,O(A,R,_,J,null);li(A,_)}return null}function K(R,A,I,_){for(var J=null,oe=null,ie=A,ae=A=0,We=null;ie!==null&&ae<I.length;ae++){ie.index>ae?(We=ie,ie=null):We=ie.sibling;var ve=L(R,ie,I[ae],_);if(ve===null){ie===null&&(ie=We);break}e&&ie&&ve.alternate===null&&t(R,ie),A=a(ve,A,ae),oe===null?J=ve:oe.sibling=ve,oe=ve,ie=We}if(ae===I.length)return r(R,ie),je&&Mn(R,ae),J;if(ie===null){for(;ae<I.length;ae++)ie=b(R,I[ae],_),ie!==null&&(A=a(ie,A,ae),oe===null?J=ie:oe.sibling=ie,oe=ie);return je&&Mn(R,ae),J}for(ie=o(R,ie);ae<I.length;ae++)We=V(ie,R,ae,I[ae],_),We!==null&&(e&&We.alternate!==null&&ie.delete(We.key===null?ae:We.key),A=a(We,A,ae),oe===null?J=We:oe.sibling=We,oe=We);return e&&ie.forEach(function(wn){return t(R,wn)}),je&&Mn(R,ae),J}function X(R,A,I,_){var J=Y(I);if(typeof J!="function")throw Error(l(150));if(I=J.call(I),I==null)throw Error(l(151));for(var oe=J=null,ie=A,ae=A=0,We=null,ve=I.next();ie!==null&&!ve.done;ae++,ve=I.next()){ie.index>ae?(We=ie,ie=null):We=ie.sibling;var wn=L(R,ie,ve.value,_);if(wn===null){ie===null&&(ie=We);break}e&&ie&&wn.alternate===null&&t(R,ie),A=a(wn,A,ae),oe===null?J=wn:oe.sibling=wn,oe=wn,ie=We}if(ve.done)return r(R,ie),je&&Mn(R,ae),J;if(ie===null){for(;!ve.done;ae++,ve=I.next())ve=b(R,ve.value,_),ve!==null&&(A=a(ve,A,ae),oe===null?J=ve:oe.sibling=ve,oe=ve);return je&&Mn(R,ae),J}for(ie=o(R,ie);!ve.done;ae++,ve=I.next())ve=V(ie,R,ae,ve.value,_),ve!==null&&(e&&ve.alternate!==null&&ie.delete(ve.key===null?ae:ve.key),A=a(ve,A,ae),oe===null?J=ve:oe.sibling=ve,oe=ve);return e&&ie.forEach(function(_p){return t(R,_p)}),je&&Mn(R,ae),J}function Ge(R,A,I,_){if(typeof I=="object"&&I!==null&&I.type===$&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ne:e:{for(var J=I.key,oe=A;oe!==null;){if(oe.key===J){if(J=I.type,J===$){if(oe.tag===7){r(R,oe.sibling),A=s(oe,I.props.children),A.return=R,R=A;break e}}else if(oe.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ue&&_u(J)===oe.type){r(R,oe.sibling),A=s(oe,I.props),A.ref=Jr(R,oe,I),A.return=R,R=A;break e}r(R,oe);break}else t(R,oe);oe=oe.sibling}I.type===$?(A=zn(I.props.children,R.mode,_,I.key),A.return=R,R=A):(_=ji(I.type,I.key,I.props,null,R.mode,_),_.ref=Jr(R,A,I),_.return=R,R=_)}return f(R);case q:e:{for(oe=I.key;A!==null;){if(A.key===oe)if(A.tag===4&&A.stateNode.containerInfo===I.containerInfo&&A.stateNode.implementation===I.implementation){r(R,A.sibling),A=s(A,I.children||[]),A.return=R,R=A;break e}else{r(R,A);break}else t(R,A);A=A.sibling}A=ea(I,R.mode,_),A.return=R,R=A}return f(R);case Ue:return oe=I._init,Ge(R,A,oe(I._payload),_)}if(kr(I))return K(R,A,I,_);if(Y(I))return X(R,A,I,_);li(R,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,A!==null&&A.tag===6?(r(R,A.sibling),A=s(A,I),A.return=R,R=A):(r(R,A),A=Js(I,R.mode,_),A.return=R,R=A),f(R)):r(R,A)}return Ge}var dr=Hu(!0),zu=Hu(!1),si=un(null),ai=null,fr=null,cs=null;function us(){cs=fr=ai=null}function ds(e){var t=si.current;Ie(si),e._currentValue=t}function fs(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){ai=e,cs=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(ai===null)throw Error(l(308));fr=e,ai.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Dn=null;function ps(e){Dn===null?Dn=[e]:Dn.push(e)}function Bu(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,ps(t)):(r.next=s.next,s.next=r),t.interleaved=r,qt(e,o)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pn=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ge&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,qt(e,r)}return s=o.interleaved,s===null?(t.next=t,ps(o)):(t.next=s.next,s.next=t),o.interleaved=t,qt(e,r)}function ci(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,kl(e,r)}}function Uu(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=f:a=a.next=f,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ui(e,t,r,o){var s=e.updateQueue;pn=!1;var a=s.firstBaseUpdate,f=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var y=m,k=y.next;y.next=null,f===null?a=k:f.next=k,f=y;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==f&&(m===null?O.firstBaseUpdate=k:m.next=k,O.lastBaseUpdate=y))}if(a!==null){var b=s.baseState;f=0,O=k=y=null,m=a;do{var L=m.lane,V=m.eventTime;if((o&L)===L){O!==null&&(O=O.next={eventTime:V,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var K=e,X=m;switch(L=t,V=r,X.tag){case 1:if(K=X.payload,typeof K=="function"){b=K.call(V,b,L);break e}b=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=X.payload,L=typeof K=="function"?K.call(V,b,L):K,L==null)break e;b=P({},b,L);break e;case 2:pn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,L=s.effects,L===null?s.effects=[m]:L.push(m))}else V={eventTime:V,lane:L,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(k=O=V,y=b):O=O.next=V,f|=L;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;L=m,m=L.next,L.next=null,s.lastBaseUpdate=L,s.shared.pending=null}}while(!0);if(O===null&&(y=b),s.baseState=y,s.firstBaseUpdate=k,s.lastBaseUpdate=O,t=s.shared.interleaved,t!==null){s=t;do f|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);bn|=f,e.lanes=f,e.memoizedState=b}}function Fu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var eo={},Bt=un(eo),to=un(eo),no=un(eo);function Ln(e){if(e===eo)throw Error(l(174));return e}function gs(e,t){switch(Ee(no,t),Ee(to,e),Ee(Bt,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}Ie(Bt),Ee(Bt,t)}function hr(){Ie(Bt),Ie(to),Ie(no)}function Vu(e){Ln(no.current);var t=Ln(Bt.current),r=ml(t,e.type);t!==r&&(Ee(to,e),Ee(Bt,r))}function ms(e){to.current===e&&(Ie(Bt),Ie(to))}var Me=un(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vs=[];function ys(){for(var e=0;e<vs.length;e++)vs[e]._workInProgressVersionPrimary=null;vs.length=0}var fi=F.ReactCurrentDispatcher,xs=F.ReactCurrentBatchConfig,On=0,De=null,Fe=null,Ye=null,pi=!1,ro=!1,oo=0,ip=0;function nt(){throw Error(l(321))}function As(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function ws(e,t,r,o,s,a){if(On=a,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?cp:up,e=r(o,s),ro){a=0;do{if(ro=!1,oo=0,25<=a)throw Error(l(301));a+=1,Ye=Fe=null,t.updateQueue=null,fi.current=dp,e=r(o,s)}while(ro)}if(fi.current=mi,t=Fe!==null&&Fe.next!==null,On=0,Ye=Fe=De=null,pi=!1,t)throw Error(l(300));return e}function Ss(){var e=oo!==0;return oo=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Et(){if(Fe===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ye===null?De.memoizedState:Ye.next;if(t!==null)Ye=t,Fe=e;else{if(e===null)throw Error(l(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function io(e,t){return typeof t=="function"?t(e):t}function Ts(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=Fe,s=o.baseQueue,a=r.pending;if(a!==null){if(s!==null){var f=s.next;s.next=a.next,a.next=f}o.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,o=o.baseState;var m=f=null,y=null,k=a;do{var O=k.lane;if((On&O)===O)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),o=k.hasEagerState?k.eagerState:e(o,k.action);else{var b={lane:O,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(m=y=b,f=o):y=y.next=b,De.lanes|=O,bn|=O}k=k.next}while(k!==null&&k!==a);y===null?f=o:y.next=m,jt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=y,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do a=s.lane,De.lanes|=a,bn|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Es(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var f=s=s.next;do a=e(a,f.action),f=f.next;while(f!==s);jt(a,t.memoizedState)||(ut=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function Yu(){}function $u(e,t){var r=De,o=Et(),s=t(),a=!jt(o.memoizedState,s);if(a&&(o.memoizedState=s,ut=!0),o=o.queue,Ns(Zu.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||Ye!==null&&Ye.memoizedState.tag&1){if(r.flags|=2048,lo(9,Qu.bind(null,r,o,s,t),void 0,null),$e===null)throw Error(l(349));(On&30)!==0||Wu(r,t,s)}return s}function Wu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qu(e,t,r,o){t.value=r,t.getSnapshot=o,qu(t)&&Ku(e)}function Zu(e,t,r){return r(function(){qu(t)&&Ku(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function Ku(e){var t=qt(e,1);t!==null&&bt(t,e,1,-1)}function Xu(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=ap.bind(null,De,e),[t.memoizedState,e]}function lo(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Ju(){return Et().memoizedState}function hi(e,t,r,o){var s=Pt();De.flags|=e,s.memoizedState=lo(1|t,r,void 0,o===void 0?null:o)}function gi(e,t,r,o){var s=Et();o=o===void 0?null:o;var a=void 0;if(Fe!==null){var f=Fe.memoizedState;if(a=f.destroy,o!==null&&As(o,f.deps)){s.memoizedState=lo(t,r,a,o);return}}De.flags|=e,s.memoizedState=lo(1|t,r,a,o)}function e0(e,t){return hi(8390656,8,e,t)}function Ns(e,t){return gi(2048,8,e,t)}function t0(e,t){return gi(4,2,e,t)}function n0(e,t){return gi(4,4,e,t)}function r0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function o0(e,t,r){return r=r!=null?r.concat([e]):null,gi(4,4,r0.bind(null,t,e),r)}function Rs(){}function i0(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&As(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function l0(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&As(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function s0(e,t,r){return(On&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(jt(r,t)||(r=_c(),De.lanes|=r,bn|=r,e.baseState=!0),t)}function lp(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var o=xs.transition;xs.transition={};try{e(!1),t()}finally{Se=r,xs.transition=o}}function a0(){return Et().memoizedState}function sp(e,t,r){var o=yn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},c0(e))u0(t,r);else if(r=Bu(e,t,r,o),r!==null){var s=st();bt(r,e,o,s),d0(r,t,o)}}function ap(e,t,r){var o=yn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(c0(e))u0(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var f=t.lastRenderedState,m=a(f,r);if(s.hasEagerState=!0,s.eagerState=m,jt(m,f)){var y=t.interleaved;y===null?(s.next=s,ps(t)):(s.next=y.next,y.next=s),t.interleaved=s;return}}catch{}finally{}r=Bu(e,t,s,o),r!==null&&(s=st(),bt(r,e,o,s),d0(r,t,o))}}function c0(e){var t=e.alternate;return e===De||t!==null&&t===De}function u0(e,t){ro=pi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function d0(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,kl(e,r)}}var mi={readContext:Tt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},cp={readContext:Tt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:e0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,hi(4194308,4,r0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var r=Pt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Pt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=sp.bind(null,De,e),[o.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Xu,useDebugValue:Rs,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Xu(!1),t=e[0];return e=lp.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=De,s=Pt();if(je){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),$e===null)throw Error(l(349));(On&30)!==0||Wu(o,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,e0(Zu.bind(null,o,a,e),[e]),o.flags|=2048,lo(9,Qu.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=Pt(),t=$e.identifierPrefix;if(je){var r=Zt,o=Qt;r=(o&~(1<<32-Ct(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=oo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ip++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:Tt,useCallback:i0,useContext:Tt,useEffect:Ns,useImperativeHandle:o0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:l0,useReducer:Ts,useRef:Ju,useState:function(){return Ts(io)},useDebugValue:Rs,useDeferredValue:function(e){var t=Et();return s0(t,Fe.memoizedState,e)},useTransition:function(){var e=Ts(io)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:$u,useId:a0,unstable_isNewReconciler:!1},dp={readContext:Tt,useCallback:i0,useContext:Tt,useEffect:Ns,useImperativeHandle:o0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:l0,useReducer:Es,useRef:Ju,useState:function(){return Es(io)},useDebugValue:Rs,useDeferredValue:function(e){var t=Et();return Fe===null?t.memoizedState=e:s0(t,Fe.memoizedState,e)},useTransition:function(){var e=Es(io)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:$u,useId:a0,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Is(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:P({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vi={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=st(),s=yn(e),a=Kt(o,s);a.payload=t,r!=null&&(a.callback=r),t=hn(e,a,s),t!==null&&(bt(t,e,s,o),ci(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=st(),s=yn(e),a=Kt(o,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=hn(e,a,s),t!==null&&(bt(t,e,s,o),ci(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),o=yn(e),s=Kt(r,o);s.tag=2,t!=null&&(s.callback=t),t=hn(e,s,o),t!==null&&(bt(t,e,o,r),ci(t,e,o))}};function f0(e,t,r,o,s,a,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,f):t.prototype&&t.prototype.isPureReactComponent?!$r(r,o)||!$r(s,a):!0}function p0(e,t,r){var o=!1,s=dn,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(s=ct(t)?Cn:tt.current,o=t.contextTypes,a=(o=o!=null)?sr(e,s):dn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function h0(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function ks(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},hs(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Tt(a):(a=ct(t)?Cn:tt.current,s.context=sr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Is(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&vi.enqueueReplaceState(s,s.state,null),ui(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var r="",o=t;do r+=ce(o),o=o.return;while(o);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Cs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function g0(e,t,r){r=Kt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Ei||(Ei=!0,Ys=o),js(e,t)},r}function m0(e,t,r){r=Kt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){js(e,t),typeof o!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function v0(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new fp;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=Rp.bind(null,e,t,r),t.then(e,e))}function y0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function x0(e,t,r,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Kt(-1,1),t.tag=2,hn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var pp=F.ReactCurrentOwner,ut=!1;function lt(e,t,r,o){t.child=e===null?zu(t,null,r,o):dr(t,e.child,r,o)}function A0(e,t,r,o,s){r=r.render;var a=t.ref;return pr(t,s),o=ws(e,t,r,o,a,s),r=Ss(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xt(e,t,s)):(je&&r&&os(t),t.flags|=1,lt(e,t,o,s),t.child)}function w0(e,t,r,o,s){if(e===null){var a=r.type;return typeof a=="function"&&!Xs(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,S0(e,t,a,o,s)):(e=ji(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var f=a.memoizedProps;if(r=r.compare,r=r!==null?r:$r,r(f,o)&&e.ref===t.ref)return Xt(e,t,s)}return t.flags|=1,e=An(a,o),e.ref=t.ref,e.return=t,t.child=e}function S0(e,t,r,o,s){if(e!==null){var a=e.memoizedProps;if($r(a,o)&&e.ref===t.ref)if(ut=!1,t.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Xt(e,t,s)}return Ms(e,t,r,o,s)}function T0(e,t,r){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(vr,xt),xt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(vr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,Ee(vr,xt),xt|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,Ee(vr,xt),xt|=o;return lt(e,t,s,r),t.child}function E0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ms(e,t,r,o,s){var a=ct(r)?Cn:tt.current;return a=sr(t,a),pr(t,s),r=ws(e,t,r,o,a,s),o=Ss(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xt(e,t,s)):(je&&o&&os(t),t.flags|=1,lt(e,t,r,s),t.child)}function N0(e,t,r,o,s){if(ct(r)){var a=!0;ti(t)}else a=!1;if(pr(t,s),t.stateNode===null)xi(e,t),p0(t,r,o),ks(t,r,o,s),o=!0;else if(e===null){var f=t.stateNode,m=t.memoizedProps;f.props=m;var y=f.context,k=r.contextType;typeof k=="object"&&k!==null?k=Tt(k):(k=ct(r)?Cn:tt.current,k=sr(t,k));var O=r.getDerivedStateFromProps,b=typeof O=="function"||typeof f.getSnapshotBeforeUpdate=="function";b||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==o||y!==k)&&h0(t,f,o,k),pn=!1;var L=t.memoizedState;f.state=L,ui(t,o,f,s),y=t.memoizedState,m!==o||L!==y||at.current||pn?(typeof O=="function"&&(Is(t,r,O,o),y=t.memoizedState),(m=pn||f0(t,r,m,o,L,y,k))?(b||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),f.props=o,f.state=y,f.context=k,o=m):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,Pu(e,t),m=t.memoizedProps,k=t.type===t.elementType?m:Dt(t.type,m),f.props=k,b=t.pendingProps,L=f.context,y=r.contextType,typeof y=="object"&&y!==null?y=Tt(y):(y=ct(r)?Cn:tt.current,y=sr(t,y));var V=r.getDerivedStateFromProps;(O=typeof V=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==b||L!==y)&&h0(t,f,o,y),pn=!1,L=t.memoizedState,f.state=L,ui(t,o,f,s);var K=t.memoizedState;m!==b||L!==K||at.current||pn?(typeof V=="function"&&(Is(t,r,V,o),K=t.memoizedState),(k=pn||f0(t,r,k,o,L,K,y)||!1)?(O||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,K,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,K,y)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=K),f.props=o,f.state=K,f.context=y,o=k):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),o=!1)}return Ds(e,t,r,o,a,s)}function Ds(e,t,r,o,s,a){E0(e,t);var f=(t.flags&128)!==0;if(!o&&!f)return s&&ju(t,r,!1),Xt(e,t,a);o=t.stateNode,pp.current=t;var m=f&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&f?(t.child=dr(t,e.child,null,a),t.child=dr(t,null,m,a)):lt(e,t,m,a),t.memoizedState=o.state,s&&ju(t,r,!0),t.child}function R0(e){var t=e.stateNode;t.pendingContext?ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ku(e,t.context,!1),gs(e,t.containerInfo)}function I0(e,t,r,o,s){return ur(),as(s),t.flags|=256,lt(e,t,r,o),t.child}var Ls={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function k0(e,t,r){var o=t.pendingProps,s=Me.current,a=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ee(Me,s&1),e===null)return ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=o.children,e=o.fallback,a?(o=t.mode,a=t.child,f={mode:"hidden",children:f},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=f):a=Mi(f,o,0,null),e=zn(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Os(r),t.memoizedState=Ls,e):bs(t,f));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return hp(e,t,f,o,m,s,r);if(a){a=o.fallback,f=t.mode,s=e.child,m=s.sibling;var y={mode:"hidden",children:o.children};return(f&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=An(s,y),o.subtreeFlags=s.subtreeFlags&14680064),m!==null?a=An(m,a):(a=zn(a,f,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,f=e.child.memoizedState,f=f===null?Os(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},a.memoizedState=f,a.childLanes=e.childLanes&~r,t.memoizedState=Ls,o}return a=e.child,e=a.sibling,o=An(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function bs(e,t){return t=Mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,r,o){return o!==null&&as(o),dr(t,e.child,null,r),e=bs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,r,o,s,a,f){if(r)return t.flags&256?(t.flags&=-257,o=Cs(Error(l(422))),yi(e,t,f,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=Mi({mode:"visible",children:o.children},s,0,null),a=zn(a,s,f,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&dr(t,e.child,null,f),t.child.memoizedState=Os(f),t.memoizedState=Ls,a);if((t.mode&1)===0)return yi(e,t,f,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;return o=m,a=Error(l(419)),o=Cs(a,o,void 0),yi(e,t,f,o)}if(m=(f&e.childLanes)!==0,ut||m){if(o=$e,o!==null){switch(f&-f){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|f))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,qt(e,s),bt(o,e,s,-1))}return Ks(),o=Cs(Error(l(421))),yi(e,t,f,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Ip.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,yt=cn(s.nextSibling),vt=t,je=!0,Mt=null,e!==null&&(wt[St++]=Qt,wt[St++]=Zt,wt[St++]=jn,Qt=e.id,Zt=e.overflow,jn=t),t=bs(t,o.children),t.flags|=4096,t)}function C0(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),fs(e.return,t,r)}function Gs(e,t,r,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=s)}function j0(e,t,r){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(lt(e,t,o.children,r),o=Me.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&C0(e,r,t);else if(e.tag===19)C0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(Me,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&di(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Gs(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&di(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Gs(t,!0,r,null,a);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=An(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=An(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function gp(e,t,r){switch(t.tag){case 3:R0(t),ur();break;case 5:Vu(t);break;case 1:ct(t.type)&&ti(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;Ee(si,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(Me,Me.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?k0(e,t,r):(Ee(Me,Me.current&1),e=Xt(e,t,r),e!==null?e.sibling:null);Ee(Me,Me.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return j0(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Me,Me.current),o)break;return null;case 22:case 23:return t.lanes=0,T0(e,t,r)}return Xt(e,t,r)}var M0,_s,D0,L0;M0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},_s=function(){},D0=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Ln(Bt.current);var a=null;switch(r){case"input":s=fl(e,s),o=fl(e,o),a=[];break;case"select":s=P({},s,{value:void 0}),o=P({},o,{value:void 0}),a=[];break;case"textarea":s=gl(e,s),o=gl(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Xo)}vl(r,o);var f;r=null;for(k in s)if(!o.hasOwnProperty(k)&&s.hasOwnProperty(k)&&s[k]!=null)if(k==="style"){var m=s[k];for(f in m)m.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(d.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in o){var y=o[k];if(m=s!=null?s[k]:void 0,o.hasOwnProperty(k)&&y!==m&&(y!=null||m!=null))if(k==="style")if(m){for(f in m)!m.hasOwnProperty(f)||y&&y.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in y)y.hasOwnProperty(f)&&m[f]!==y[f]&&(r||(r={}),r[f]=y[f])}else r||(a||(a=[]),a.push(k,r)),r=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,m=m?m.__html:void 0,y!=null&&m!==y&&(a=a||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(a=a||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(d.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&Re("scroll",e),a||m===y||(a=[])):(a=a||[]).push(k,y))}r&&(a=a||[]).push("style",r);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},L0=function(e,t,r,o){r!==o&&(t.flags|=4)};function so(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function mp(e,t,r){var o=t.pendingProps;switch(is(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return ct(t.type)&&ei(),rt(t),null;case 3:return o=t.stateNode,hr(),Ie(at),Ie(tt),ys(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(Qs(Mt),Mt=null))),_s(e,t),rt(t),null;case 5:ms(t);var s=Ln(no.current);if(r=t.type,e!==null&&t.stateNode!=null)D0(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return rt(t),null}if(e=Ln(Bt.current),ii(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[zt]=t,o[Kr]=a,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<Qr.length;s++)Re(Qr[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":pc(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":mc(o,a),Re("invalid",o)}vl(r,a),s=null;for(var f in a)if(a.hasOwnProperty(f)){var m=a[f];f==="children"?typeof m=="string"?o.textContent!==m&&(a.suppressHydrationWarning!==!0&&Ko(o.textContent,m,e),s=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Ko(o.textContent,m,e),s=["children",""+m]):d.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&Re("scroll",o)}switch(r){case"input":Yt(o),gc(o,a,!0);break;case"textarea":Yt(o),yc(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Xo)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{f=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=f.createElement(r,{is:o.is}):(e=f.createElement(r),r==="select"&&(f=e,o.multiple?f.multiple=!0:o.size&&(f.size=o.size))):e=f.createElementNS(e,r),e[zt]=t,e[Kr]=o,M0(e,t,!1,!1),t.stateNode=e;e:{switch(f=yl(r,o),r){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<Qr.length;s++)Re(Qr[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":pc(e,o),s=fl(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=P({},o,{value:void 0}),Re("invalid",e);break;case"textarea":mc(e,o),s=gl(e,o),Re("invalid",e);break;default:s=o}vl(r,s),m=s;for(a in m)if(m.hasOwnProperty(a)){var y=m[a];a==="style"?Sc(e,y):a==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Ac(e,y)):a==="children"?typeof y=="string"?(r!=="textarea"||y!=="")&&Cr(e,y):typeof y=="number"&&Cr(e,""+y):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?y!=null&&a==="onScroll"&&Re("scroll",e):y!=null&&Q(e,a,y,f))}switch(r){case"input":Yt(e),gc(e,o,!1);break;case"textarea":Yt(e),yc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+he(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Zn(e,!!o.multiple,a,!1):o.defaultValue!=null&&Zn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Xo)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)L0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(r=Ln(no.current),Ln(Bt.current),ii(t)){if(o=t.stateNode,r=t.memoizedProps,o[zt]=t,(a=o.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:Ko(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[zt]=t,t.stateNode=o}return rt(t),null;case 13:if(Ie(Me),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gu(),ur(),t.flags|=98560,a=!1;else if(a=ii(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[zt]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Mt!==null&&(Qs(Mt),Mt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?Ve===0&&(Ve=3):Ks())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return hr(),_s(e,t),e===null&&Zr(t.stateNode.containerInfo),rt(t),null;case 10:return ds(t.type._context),rt(t),null;case 17:return ct(t.type)&&ei(),rt(t),null;case 19:if(Ie(Me),a=t.memoizedState,a===null)return rt(t),null;if(o=(t.flags&128)!==0,f=a.rendering,f===null)if(o)so(a,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=di(e),f!==null){for(t.flags|=128,so(a,!1),o=f.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,f=a.alternate,f===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=f.childLanes,a.lanes=f.lanes,a.child=f.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=f.memoizedProps,a.memoizedState=f.memoizedState,a.updateQueue=f.updateQueue,a.type=f.type,e=f.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(Me,Me.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>yr&&(t.flags|=128,o=!0,so(a,!1),t.lanes=4194304)}else{if(!o)if(e=di(f),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),so(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!je)return rt(t),null}else 2*be()-a.renderingStartTime>yr&&r!==1073741824&&(t.flags|=128,o=!0,so(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(r=a.last,r!==null?r.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,r=Me.current,Ee(Me,o?r&1|2:r&1),t):(rt(t),null);case 22:case 23:return qs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(xt&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function vp(e,t){switch(is(t),t.tag){case 1:return ct(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),Ie(at),Ie(tt),ys(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(Ie(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Me),null;case 4:return hr(),null;case 10:return ds(t.type._context),null;case 22:case 23:return qs(),null;case 24:return null;default:return null}}var Ai=!1,ot=!1,yp=typeof WeakSet=="function"?WeakSet:Set,W=null;function mr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Oe(e,t,o)}else r.current=null}function Hs(e,t,r){try{r()}catch(o){Oe(e,t,o)}}var O0=!1;function xp(e,t){if(ql=Bo,e=fu(),Ul(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var f=0,m=-1,y=-1,k=0,O=0,b=e,L=null;t:for(;;){for(var V;b!==r||s!==0&&b.nodeType!==3||(m=f+s),b!==a||o!==0&&b.nodeType!==3||(y=f+o),b.nodeType===3&&(f+=b.nodeValue.length),(V=b.firstChild)!==null;)L=b,b=V;for(;;){if(b===e)break t;if(L===r&&++k===s&&(m=f),L===a&&++O===o&&(y=f),(V=b.nextSibling)!==null)break;b=L,L=b.parentNode}b=V}r=m===-1||y===-1?null:{start:m,end:y}}else r=null}r=r||{start:0,end:0}}else r=null;for(Kl={focusedElem:e,selectionRange:r},Bo=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var X=K.memoizedProps,Ge=K.memoizedState,R=t.stateNode,A=R.getSnapshotBeforeUpdate(t.elementType===t.type?X:Dt(t.type,X),Ge);R.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(_){Oe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return K=O0,O0=!1,K}function ao(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Hs(t,r,a)}s=s.next}while(s!==o)}}function wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function zs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function b0(e){var t=e.alternate;t!==null&&(e.alternate=null,b0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Kr],delete t[ts],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function G0(e){return e.tag===5||e.tag===3||e.tag===4}function _0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||G0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Xo));else if(o!==4&&(e=e.child,e!==null))for(Bs(e,t,r),e=e.sibling;e!==null;)Bs(e,t,r),e=e.sibling}function Ps(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ps(e,t,r),e=e.sibling;e!==null;)Ps(e,t,r),e=e.sibling}var Je=null,Lt=!1;function gn(e,t,r){for(r=r.child;r!==null;)H0(e,t,r),r=r.sibling}function H0(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Oo,r)}catch{}switch(r.tag){case 5:ot||mr(r,t);case 6:var o=Je,s=Lt;Je=null,gn(e,t,r),Je=o,Lt=s,Je!==null&&(Lt?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Lt?(e=Je,r=r.stateNode,e.nodeType===8?es(e.parentNode,r):e.nodeType===1&&es(e,r),Br(e)):es(Je,r.stateNode));break;case 4:o=Je,s=Lt,Je=r.stateNode.containerInfo,Lt=!0,gn(e,t,r),Je=o,Lt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,f=a.destroy;a=a.tag,f!==void 0&&((a&2)!==0||(a&4)!==0)&&Hs(r,t,f),s=s.next}while(s!==o)}gn(e,t,r);break;case 1:if(!ot&&(mr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){Oe(r,t,m)}gn(e,t,r);break;case 21:gn(e,t,r);break;case 22:r.mode&1?(ot=(o=ot)||r.memoizedState!==null,gn(e,t,r),ot=o):gn(e,t,r);break;default:gn(e,t,r)}}function z0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new yp),t.forEach(function(o){var s=kp.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Ot(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var a=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 5:Je=m.stateNode,Lt=!1;break e;case 3:Je=m.stateNode.containerInfo,Lt=!0;break e;case 4:Je=m.stateNode.containerInfo,Lt=!0;break e}m=m.return}if(Je===null)throw Error(l(160));H0(a,f,s),Je=null,Lt=!1;var y=s.alternate;y!==null&&(y.return=null),s.return=null}catch(k){Oe(s,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B0(t,e),t=t.sibling}function B0(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Ut(e),o&4){try{ao(3,e,e.return),wi(3,e)}catch(X){Oe(e,e.return,X)}try{ao(5,e,e.return)}catch(X){Oe(e,e.return,X)}}break;case 1:Ot(t,e),Ut(e),o&512&&r!==null&&mr(r,r.return);break;case 5:if(Ot(t,e),Ut(e),o&512&&r!==null&&mr(r,r.return),e.flags&32){var s=e.stateNode;try{Cr(s,"")}catch(X){Oe(e,e.return,X)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,f=r!==null?r.memoizedProps:a,m=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&hc(s,a),yl(m,f);var k=yl(m,a);for(f=0;f<y.length;f+=2){var O=y[f],b=y[f+1];O==="style"?Sc(s,b):O==="dangerouslySetInnerHTML"?Ac(s,b):O==="children"?Cr(s,b):Q(s,O,b,k)}switch(m){case"input":pl(s,a);break;case"textarea":vc(s,a);break;case"select":var L=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var V=a.value;V!=null?Zn(s,!!a.multiple,V,!1):L!==!!a.multiple&&(a.defaultValue!=null?Zn(s,!!a.multiple,a.defaultValue,!0):Zn(s,!!a.multiple,a.multiple?[]:"",!1))}s[Kr]=a}catch(X){Oe(e,e.return,X)}}break;case 6:if(Ot(t,e),Ut(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(X){Oe(e,e.return,X)}}break;case 3:if(Ot(t,e),Ut(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(X){Oe(e,e.return,X)}break;case 4:Ot(t,e),Ut(e);break;case 13:Ot(t,e),Ut(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Vs=be())),o&4&&z0(e);break;case 22:if(O=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(k=ot)||O,Ot(t,e),ot=k):Ot(t,e),Ut(e),o&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!O&&(e.mode&1)!==0)for(W=e,O=e.child;O!==null;){for(b=W=O;W!==null;){switch(L=W,V=L.child,L.tag){case 0:case 11:case 14:case 15:ao(4,L,L.return);break;case 1:mr(L,L.return);var K=L.stateNode;if(typeof K.componentWillUnmount=="function"){o=L,r=L.return;try{t=o,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(X){Oe(o,r,X)}}break;case 5:mr(L,L.return);break;case 22:if(L.memoizedState!==null){F0(b);continue}}V!==null?(V.return=L,W=V):F0(b)}O=O.sibling}e:for(O=null,b=e;;){if(b.tag===5){if(O===null){O=b;try{s=b.stateNode,k?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=b.stateNode,y=b.memoizedProps.style,f=y!=null&&y.hasOwnProperty("display")?y.display:null,m.style.display=wc("display",f))}catch(X){Oe(e,e.return,X)}}}else if(b.tag===6){if(O===null)try{b.stateNode.nodeValue=k?"":b.memoizedProps}catch(X){Oe(e,e.return,X)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;O===b&&(O=null),b=b.return}O===b&&(O=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ot(t,e),Ut(e),o&4&&z0(e);break;case 21:break;default:Ot(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(G0(r)){var o=r;break e}r=r.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Cr(s,""),o.flags&=-33);var a=_0(e);Ps(e,a,s);break;case 3:case 4:var f=o.stateNode.containerInfo,m=_0(e);Bs(e,m,f);break;default:throw Error(l(161))}}catch(y){Oe(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,r){W=e,P0(e)}function P0(e,t,r){for(var o=(e.mode&1)!==0;W!==null;){var s=W,a=s.child;if(s.tag===22&&o){var f=s.memoizedState!==null||Ai;if(!f){var m=s.alternate,y=m!==null&&m.memoizedState!==null||ot;m=Ai;var k=ot;if(Ai=f,(ot=y)&&!k)for(W=s;W!==null;)f=W,y=f.child,f.tag===22&&f.memoizedState!==null?V0(s):y!==null?(y.return=f,W=y):V0(s);for(;a!==null;)W=a,P0(a),a=a.sibling;W=s,Ai=m,ot=k}U0(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,W=a):U0(e)}}function U0(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||wi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ot)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Dt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fu(t,a,o);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Fu(t,f,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&r.focus();break;case"img":y.src&&(r.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var O=k.memoizedState;if(O!==null){var b=O.dehydrated;b!==null&&Br(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ot||t.flags&512&&zs(t)}catch(L){Oe(t,t.return,L)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function F0(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function V0(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wi(4,t)}catch(y){Oe(t,r,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(y){Oe(t,s,y)}}var a=t.return;try{zs(t)}catch(y){Oe(t,a,y)}break;case 5:var f=t.return;try{zs(t)}catch(y){Oe(t,f,y)}}}catch(y){Oe(t,t.return,y)}if(t===e){W=null;break}var m=t.sibling;if(m!==null){m.return=t.return,W=m;break}W=t.return}}var wp=Math.ceil,Si=F.ReactCurrentDispatcher,Us=F.ReactCurrentOwner,Nt=F.ReactCurrentBatchConfig,ge=0,$e=null,ze=null,et=0,xt=0,vr=un(0),Ve=0,co=null,bn=0,Ti=0,Fs=0,uo=null,dt=null,Vs=0,yr=1/0,Jt=null,Ei=!1,Ys=null,mn=null,Ni=!1,vn=null,Ri=0,fo=0,$s=null,Ii=-1,ki=0;function st(){return(ge&6)!==0?be():Ii!==-1?Ii:Ii=be()}function yn(e){return(e.mode&1)===0?1:(ge&2)!==0&&et!==0?et&-et:op.transition!==null?(ki===0&&(ki=_c()),ki):(e=Se,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e)}function bt(e,t,r,o){if(50<fo)throw fo=0,$s=null,Error(l(185));br(e,r,o),((ge&2)===0||e!==$e)&&(e===$e&&((ge&2)===0&&(Ti|=r),Ve===4&&xn(e,et)),ft(e,o),r===1&&ge===0&&(t.mode&1)===0&&(yr=be()+500,ni&&fn()))}function ft(e,t){var r=e.callbackNode;rf(e,t);var o=_o(e,e===$e?et:0);if(o===0)r!==null&&Oc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Oc(r),t===1)e.tag===0?rp($0.bind(null,e)):Mu($0.bind(null,e)),Jf(function(){(ge&6)===0&&fn()}),r=null;else{switch(Hc(o)){case 1:r=Nl;break;case 4:r=bc;break;case 16:r=Lo;break;case 536870912:r=Gc;break;default:r=Lo}r=ed(r,Y0.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Y0(e,t){if(Ii=-1,ki=0,(ge&6)!==0)throw Error(l(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var o=_o(e,e===$e?et:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Ci(e,o);else{t=o;var s=ge;ge|=2;var a=Q0();($e!==e||et!==t)&&(Jt=null,yr=be()+500,_n(e,t));do try{Ep();break}catch(m){W0(e,m)}while(!0);us(),Si.current=a,ge=s,ze!==null?t=0:($e=null,et=0,t=Ve)}if(t!==0){if(t===2&&(s=Rl(e),s!==0&&(o=s,t=Ws(e,s))),t===1)throw r=co,_n(e,0),xn(e,o),ft(e,be()),r;if(t===6)xn(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Sp(s)&&(t=Ci(e,o),t===2&&(a=Rl(e),a!==0&&(o=a,t=Ws(e,a))),t===1))throw r=co,_n(e,0),xn(e,o),ft(e,be()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:Hn(e,dt,Jt);break;case 3:if(xn(e,o),(o&130023424)===o&&(t=Vs+500-be(),10<t)){if(_o(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){st(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Jl(Hn.bind(null,e,dt,Jt),t);break}Hn(e,dt,Jt);break;case 4:if(xn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var f=31-Ct(o);a=1<<f,f=t[f],f>s&&(s=f),o&=~a}if(o=s,o=be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*wp(o/1960))-o,10<o){e.timeoutHandle=Jl(Hn.bind(null,e,dt,Jt),o);break}Hn(e,dt,Jt);break;case 5:Hn(e,dt,Jt);break;default:throw Error(l(329))}}}return ft(e,be()),e.callbackNode===r?Y0.bind(null,e):null}function Ws(e,t){var r=uo;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=dt,dt=r,t!==null&&Qs(t)),e}function Qs(e){dt===null?dt=e:dt.push.apply(dt,e)}function Sp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],a=s.getSnapshot;s=s.value;try{if(!jt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Fs,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ct(t),o=1<<r;e[r]=-1,t&=~o}}function $0(e){if((ge&6)!==0)throw Error(l(327));xr();var t=_o(e,0);if((t&1)===0)return ft(e,be()),null;var r=Ci(e,t);if(e.tag!==0&&r===2){var o=Rl(e);o!==0&&(t=o,r=Ws(e,o))}if(r===1)throw r=co,_n(e,0),xn(e,t),ft(e,be()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,dt,Jt),ft(e,be()),null}function Zs(e,t){var r=ge;ge|=1;try{return e(t)}finally{ge=r,ge===0&&(yr=be()+500,ni&&fn())}}function Gn(e){vn!==null&&vn.tag===0&&(ge&6)===0&&xr();var t=ge;ge|=1;var r=Nt.transition,o=Se;try{if(Nt.transition=null,Se=1,e)return e()}finally{Se=o,Nt.transition=r,ge=t,(ge&6)===0&&fn()}}function qs(){xt=vr.current,Ie(vr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Xf(r)),ze!==null)for(r=ze.return;r!==null;){var o=r;switch(is(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ei();break;case 3:hr(),Ie(at),Ie(tt),ys();break;case 5:ms(o);break;case 4:hr();break;case 13:Ie(Me);break;case 19:Ie(Me);break;case 10:ds(o.type._context);break;case 22:case 23:qs()}r=r.return}if($e=e,ze=e=An(e.current,null),et=xt=t,Ve=0,co=null,Fs=Ti=bn=0,dt=uo=null,Dn!==null){for(t=0;t<Dn.length;t++)if(r=Dn[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,a=r.pending;if(a!==null){var f=a.next;a.next=s,o.next=f}r.pending=o}Dn=null}return e}function W0(e,t){do{var r=ze;try{if(us(),fi.current=mi,pi){for(var o=De.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}pi=!1}if(On=0,Ye=Fe=De=null,ro=!1,oo=0,Us.current=null,r===null||r.return===null){Ve=1,co=t,ze=null;break}e:{var a=e,f=r.return,m=r,y=t;if(t=et,m.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,O=m,b=O.tag;if((O.mode&1)===0&&(b===0||b===11||b===15)){var L=O.alternate;L?(O.updateQueue=L.updateQueue,O.memoizedState=L.memoizedState,O.lanes=L.lanes):(O.updateQueue=null,O.memoizedState=null)}var V=y0(f);if(V!==null){V.flags&=-257,x0(V,f,m,a,t),V.mode&1&&v0(a,k,t),t=V,y=k;var K=t.updateQueue;if(K===null){var X=new Set;X.add(y),t.updateQueue=X}else K.add(y);break e}else{if((t&1)===0){v0(a,k,t),Ks();break e}y=Error(l(426))}}else if(je&&m.mode&1){var Ge=y0(f);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),x0(Ge,f,m,a,t),as(gr(y,m));break e}}a=y=gr(y,m),Ve!==4&&(Ve=2),uo===null?uo=[a]:uo.push(a),a=f;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var R=g0(a,y,t);Uu(a,R);break e;case 1:m=y;var A=a.type,I=a.stateNode;if((a.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(mn===null||!mn.has(I)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=m0(a,m,t);Uu(a,_);break e}}a=a.return}while(a!==null)}q0(r)}catch(J){t=J,ze===r&&r!==null&&(ze=r=r.return);continue}break}while(!0)}function Q0(){var e=Si.current;return Si.current=mi,e===null?mi:e}function Ks(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),$e===null||(bn&268435455)===0&&(Ti&268435455)===0||xn($e,et)}function Ci(e,t){var r=ge;ge|=2;var o=Q0();($e!==e||et!==t)&&(Jt=null,_n(e,t));do try{Tp();break}catch(s){W0(e,s)}while(!0);if(us(),ge=r,Si.current=o,ze!==null)throw Error(l(261));return $e=null,et=0,Ve}function Tp(){for(;ze!==null;)Z0(ze)}function Ep(){for(;ze!==null&&!Q1();)Z0(ze)}function Z0(e){var t=J0(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?q0(e):ze=t,Us.current=null}function q0(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=mp(r,t,xt),r!==null){ze=r;return}}else{if(r=vp(r,t),r!==null){r.flags&=32767,ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ve===0&&(Ve=5)}function Hn(e,t,r){var o=Se,s=Nt.transition;try{Nt.transition=null,Se=1,Np(e,t,r,o)}finally{Nt.transition=s,Se=o}return null}function Np(e,t,r,o){do xr();while(vn!==null);if((ge&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(of(e,a),e===$e&&(ze=$e=null,et=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ni||(Ni=!0,ed(Lo,function(){return xr(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Nt.transition,Nt.transition=null;var f=Se;Se=1;var m=ge;ge|=4,Us.current=null,xp(e,r),B0(r,e),Yf(Kl),Bo=!!ql,Kl=ql=null,e.current=r,Ap(r),Z1(),ge=m,Se=f,Nt.transition=a}else e.current=r;if(Ni&&(Ni=!1,vn=e,Ri=s),a=e.pendingLanes,a===0&&(mn=null),X1(r.stateNode),ft(e,be()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ei)throw Ei=!1,e=Ys,Ys=null,e;return(Ri&1)!==0&&e.tag!==0&&xr(),a=e.pendingLanes,(a&1)!==0?e===$s?fo++:(fo=0,$s=e):fo=0,fn(),null}function xr(){if(vn!==null){var e=Hc(Ri),t=Nt.transition,r=Se;try{if(Nt.transition=null,Se=16>e?16:e,vn===null)var o=!1;else{if(e=vn,vn=null,Ri=0,(ge&6)!==0)throw Error(l(331));var s=ge;for(ge|=4,W=e.current;W!==null;){var a=W,f=a.child;if((W.flags&16)!==0){var m=a.deletions;if(m!==null){for(var y=0;y<m.length;y++){var k=m[y];for(W=k;W!==null;){var O=W;switch(O.tag){case 0:case 11:case 15:ao(8,O,a)}var b=O.child;if(b!==null)b.return=O,W=b;else for(;W!==null;){O=W;var L=O.sibling,V=O.return;if(b0(O),O===k){W=null;break}if(L!==null){L.return=V,W=L;break}W=V}}}var K=a.alternate;if(K!==null){var X=K.child;if(X!==null){K.child=null;do{var Ge=X.sibling;X.sibling=null,X=Ge}while(X!==null)}}W=a}}if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,W=f;else e:for(;W!==null;){if(a=W,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ao(9,a,a.return)}var R=a.sibling;if(R!==null){R.return=a.return,W=R;break e}W=a.return}}var A=e.current;for(W=A;W!==null;){f=W;var I=f.child;if((f.subtreeFlags&2064)!==0&&I!==null)I.return=f,W=I;else e:for(f=A;W!==null;){if(m=W,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:wi(9,m)}}catch(J){Oe(m,m.return,J)}if(m===f){W=null;break e}var _=m.sibling;if(_!==null){_.return=m.return,W=_;break e}W=m.return}}if(ge=s,fn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Oo,e)}catch{}o=!0}return o}finally{Se=r,Nt.transition=t}}return!1}function K0(e,t,r){t=gr(r,t),t=g0(e,t,1),e=hn(e,t,1),t=st(),e!==null&&(br(e,1,t),ft(e,t))}function Oe(e,t,r){if(e.tag===3)K0(e,e,r);else for(;t!==null;){if(t.tag===3){K0(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(mn===null||!mn.has(o))){e=gr(r,e),e=m0(t,e,1),t=hn(t,e,1),e=st(),t!==null&&(br(t,1,e),ft(t,e));break}}t=t.return}}function Rp(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,$e===e&&(et&r)===r&&(Ve===4||Ve===3&&(et&130023424)===et&&500>be()-Vs?_n(e,0):Fs|=r),ft(e,t)}function X0(e,t){t===0&&((e.mode&1)===0?t=1:(t=Go,Go<<=1,(Go&130023424)===0&&(Go=4194304)));var r=st();e=qt(e,t),e!==null&&(br(e,t,r),ft(e,r))}function Ip(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),X0(e,r)}function kp(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),X0(e,r)}var J0;J0=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,gp(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,je&&(t.flags&1048576)!==0&&Du(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;xi(e,t),e=t.pendingProps;var s=sr(t,tt.current);pr(t,r),s=ws(null,t,o,e,s,r);var a=Ss();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(o)?(a=!0,ti(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hs(t),s.updater=vi,t.stateNode=s,s._reactInternals=t,ks(t,o,e,r),t=Ds(null,t,o,!0,a,r)):(t.tag=0,je&&a&&os(t),lt(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=jp(o),e=Dt(o,e),s){case 0:t=Ms(null,t,o,e,r);break e;case 1:t=N0(null,t,o,e,r);break e;case 11:t=A0(null,t,o,e,r);break e;case 14:t=w0(null,t,o,Dt(o.type,e),r);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),Ms(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),N0(e,t,o,s,r);case 3:e:{if(R0(t),e===null)throw Error(l(387));o=t.pendingProps,a=t.memoizedState,s=a.element,Pu(e,t),ui(t,o,null,r);var f=t.memoizedState;if(o=f.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=gr(Error(l(423)),t),t=I0(e,t,o,r,s);break e}else if(o!==s){s=gr(Error(l(424)),t),t=I0(e,t,o,r,s);break e}else for(yt=cn(t.stateNode.containerInfo.firstChild),vt=t,je=!0,Mt=null,r=zu(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ur(),o===s){t=Xt(e,t,r);break e}lt(e,t,o,r)}t=t.child}return t;case 5:return Vu(t),e===null&&ss(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,f=s.children,Xl(o,s)?f=null:a!==null&&Xl(o,a)&&(t.flags|=32),E0(e,t),lt(e,t,f,r),t.child;case 6:return e===null&&ss(t),null;case 13:return k0(e,t,r);case 4:return gs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=dr(t,null,o,r):lt(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),A0(e,t,o,s,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,f=s.value,Ee(si,o._currentValue),o._currentValue=f,a!==null)if(jt(a.value,f)){if(a.children===s.children&&!at.current){t=Xt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){f=a.child;for(var y=m.firstContext;y!==null;){if(y.context===o){if(a.tag===1){y=Kt(-1,r&-r),y.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var O=k.pending;O===null?y.next=y:(y.next=O.next,O.next=y),k.pending=y}}a.lanes|=r,y=a.alternate,y!==null&&(y.lanes|=r),fs(a.return,r,t),m.lanes|=r;break}y=y.next}}else if(a.tag===10)f=a.type===t.type?null:a.child;else if(a.tag===18){if(f=a.return,f===null)throw Error(l(341));f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),fs(f,r,t),f=a.sibling}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===t){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}lt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,pr(t,r),s=Tt(s),o=o(s),t.flags|=1,lt(e,t,o,r),t.child;case 14:return o=t.type,s=Dt(o,t.pendingProps),s=Dt(o.type,s),w0(e,t,o,s,r);case 15:return S0(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),xi(e,t),t.tag=1,ct(o)?(e=!0,ti(t)):e=!1,pr(t,r),p0(t,o,s),ks(t,o,s,r),Ds(null,t,o,!0,e,r);case 19:return j0(e,t,r);case 22:return T0(e,t,r)}throw Error(l(156,t.tag))};function ed(e,t){return Lc(e,t)}function Cp(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,o){return new Cp(e,t,r,o)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return Xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===it)return 14}return 2}function An(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ji(e,t,r,o,s,a){var f=2;if(o=e,typeof e=="function")Xs(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case $:return zn(r.children,s,a,t);case ye:f=8,s|=8;break;case _e:return e=Rt(12,r,t,s|2),e.elementType=_e,e.lanes=a,e;case He:return e=Rt(13,r,t,s),e.elementType=He,e.lanes=a,e;case Pe:return e=Rt(19,r,t,s),e.elementType=Pe,e.lanes=a,e;case se:return Mi(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:f=10;break e;case qe:f=9;break e;case Ke:f=11;break e;case it:f=14;break e;case Ue:f=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Rt(f,r,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function zn(e,t,r,o){return e=Rt(7,e,o,t),e.lanes=r,e}function Mi(e,t,r,o){return e=Rt(22,e,o,t),e.elementType=se,e.lanes=r,e.stateNode={isHidden:!1},e}function Js(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function ea(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mp(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ta(e,t,r,o,s,a,f,m,y){return e=new Mp(e,t,r,m,y),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(a),e}function Dp(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function td(e){if(!e)return dn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(ct(r))return Cu(e,r,t)}return t}function nd(e,t,r,o,s,a,f,m,y){return e=ta(r,o,!0,e,s,a,f,m,y),e.context=td(null),r=e.current,o=st(),s=yn(r),a=Kt(o,s),a.callback=t??null,hn(r,a,s),e.current.lanes=s,br(e,s,o),ft(e,o),e}function Di(e,t,r,o){var s=t.current,a=st(),f=yn(s);return r=td(r),t.context===null?t.context=r:t.pendingContext=r,t=Kt(a,f),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=hn(s,t,f),e!==null&&(bt(e,s,f,a),ci(e,s,f)),f}function Li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function na(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Lp(){return null}var od=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Oi.prototype.render=ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Di(e,t,null,null)},Oi.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){Di(null,e,null,null)}),t[$t]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ln.length&&t!==0&&t<ln[r].priority;r++);ln.splice(r,0,e),r===0&&Vc(e)}};function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Op(e,t,r,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var k=Li(f);a.call(k)}}var f=nd(t,o,e,0,null,!1,!1,"",id);return e._reactRootContainer=f,e[$t]=f.current,Zr(e.nodeType===8?e.parentNode:e),Gn(),f}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var m=o;o=function(){var k=Li(y);m.call(k)}}var y=ta(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=y,e[$t]=y.current,Zr(e.nodeType===8?e.parentNode:e),Gn(function(){Di(t,y,r,o)}),y}function Gi(e,t,r,o,s){var a=r._reactRootContainer;if(a){var f=a;if(typeof s=="function"){var m=s;s=function(){var y=Li(f);m.call(y)}}Di(t,f,e,s)}else f=Op(r,t,e,s,o);return Li(f)}zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Or(t.pendingLanes);r!==0&&(kl(t,r|1),ft(t,be()),(ge&6)===0&&(yr=be()+500,fn()))}break;case 13:Gn(function(){var o=qt(e,1);if(o!==null){var s=st();bt(o,e,1,s)}}),na(e,1)}},Cl=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=st();bt(t,e,134217728,r)}na(e,134217728)}},Bc=function(e){if(e.tag===13){var t=yn(e),r=qt(e,t);if(r!==null){var o=st();bt(r,e,t,o)}na(e,t)}},Pc=function(){return Se},Uc=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},wl=function(e,t,r){switch(t){case"input":if(pl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=Jo(o);if(!s)throw Error(l(90));kt(o),pl(o,s)}}}break;case"textarea":vc(e,r);break;case"select":t=r.value,t!=null&&Zn(e,!!r.multiple,t,!1)}},Rc=Zs,Ic=Gn;var bp={usingClientEntryPoint:!1,Events:[Xr,ir,Jo,Ec,Nc,Zs]},po={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gp={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Oo=_i.inject(Gp),Ht=_i}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp,pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oa(t))throw Error(l(200));return Dp(e,t,null,r)},pt.createRoot=function(e,t){if(!oa(e))throw Error(l(299));var r=!1,o="",s=od;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ta(e,1,!1,null,null,r,!1,o,s),e[$t]=t.current,Zr(e.nodeType===8?e.parentNode:e),new ra(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Mc(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return Gn(e)},pt.hydrate=function(e,t,r){if(!bi(t))throw Error(l(200));return Gi(null,e,t,!0,r)},pt.hydrateRoot=function(e,t,r){if(!oa(e))throw Error(l(405));var o=r!=null&&r.hydratedSources||null,s=!1,a="",f=od;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=nd(t,null,e,1,r??null,s,!1,a,f),e[$t]=t.current,Zr(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Oi(t)},pt.render=function(e,t,r){if(!bi(t))throw Error(l(200));return Gi(null,e,t,!1,r)},pt.unmountComponentAtNode=function(e){if(!bi(e))throw Error(l(40));return e._reactRootContainer?(Gn(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},pt.unstable_batchedUpdates=Zs,pt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!bi(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Gi(e,t,r,!1,o)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Rd;function Y2(){if(Rd)return da.exports;Rd=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),da.exports=kg(),da.exports}var Cg=Y2();const Qn=n=>{const{title:i,open:l,padding:u="16px",closeOnBackdropClick:d=!0,theme:p="totamjung",portalTarget:g,onClose:x,children:v}=n;return ig({onEscKeyPress:x}),l&&Cg.createPortal(c.jsxs(tg,{children:[c.jsx(ng,{onClick:()=>{d&&x()}}),c.jsxs(og,{role:"dialog",$totamjungTheme:p,children:[c.jsxs(O2,{children:[c.jsx(b2,{children:i}),c.jsx(G2,{onClick:x,"aria-label":"모달 닫기",children:c.jsx(cg,{})})]}),c.jsx(_2,{$padding:u,children:v})]})]}),g??document.body)},ko=n=>{const{children:i,theme:l="totamjung"}=n;return c.jsx(rg,{$totamjungTheme:l,children:i})},jg=h.button`
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
`,Mg=h.span`
  font-size: ${({$size:n})=>n==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,Dg=h.img`
  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  object-fit: contain;
`,Lg=h.div`
  flex-shrink: 0;

  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:n})=>n};
  }
`,Ce=n=>{const{name:i,size:l,width:u,color:d,iconSrc:p,...g}=n;return c.jsxs(jg,{$size:l,$width:u,$color:d,...g,children:[p&&(typeof p=="string"?c.jsx(Dg,{src:p,alt:i,$size:l}):c.jsx(Lg,{$size:l,$color:d,children:p})),c.jsx(Mg,{$size:l,children:i})]})},Og=h.div`
  width: ${({$width:n})=>n};
  max-width: 100%;
  min-height: ${({$height:n})=>n};
`,bg=h.p`
  font-size: 16px;
  color: ${({theme:n,$totamjungTheme:i})=>wo.includes(i)?n.color.BLACK:n.color.WHITE};
`,wo=["none","solvedAcLight"],tn=n=>{const{title:i,width:l,height:u,open:d,message:p,actionType:g,portalTarget:x,theme:v="totamjung",closeOnBackdropClick:T=!0}=n;return c.jsxs(Qn,{title:i,open:d,closeOnBackdropClick:T,portalTarget:x,theme:v,onClose:()=>{g==="yesNo"?n.onNoSelect():n.onClose()},children:[c.jsx(Og,{$width:l,$height:u,children:c.jsx(bg,{$totamjungTheme:v,children:p})}),c.jsx(ko,{theme:v,children:g==="confirm"?c.jsx(Gg,{theme:v,onClose:n.onClose}):g==="cancelConfirm"?c.jsx(_g,{theme:v,onClose:n.onClose,onConfirm:n.onConfirm}):c.jsx(Hg,{theme:v,onYesSelect:n.onYesSelect,onNoSelect:n.onNoSelect})})]})},Gg=n=>{const{theme:i="totamjung",onClose:l}=n;return c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(Ro,{}),color:wo.includes(i)?z.color.DARK_GRAY:z.color.GOLD,disabled:!1,onClick:l,autoFocus:!0})},_g=n=>{const{theme:i="totamjung",onClose:l,onConfirm:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(No,{}),color:wo.includes(i)?z.color.DARK_GRAY:z.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(Ro,{}),color:wo.includes(i)?z.color.DARK_GRAY:z.color.GOLD,disabled:!1,onClick:u})]})},Hg=n=>{const{theme:i="totamjung",onYesSelect:l,onNoSelect:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:c.jsx(Ro,{}),color:wo.includes(i)?z.color.GREEN:z.color.LIME,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"아니요",size:"medium",iconSrc:c.jsx(No,{}),color:z.color.RED,disabled:!1,onClick:u})]})},zg=h.p`
  display: inline-block;

  width: ${({$width:n})=>n};

  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n}px;
  line-height: 1.2;

  ${({theme:n,$type:i,$color:l,$fontFamily:u,$fontWeight:d,$opacity:p})=>i==="primary"?le`
        font-family: Pretendard;
        color: ${n.color.GOLD};
        font-weight: 600;
      `:i==="semiPrimary"?le`
        font-family: Pretendard;
        color: ${n.color.LEMON};
      `:i==="normal"?le`
        font-family: Pretendard;
        color: ${n.color.WHITE};
      `:i==="gray"?le`
        font-family: Pretendard;
        color: ${n.color.LIGHT_GRAY};
      `:i==="black"?le`
        font-family: Pretendard;
        color: ${n.color.BLACK};
      `:i==="code"?le`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${n.color.WHITE};
      `:le`
      color: ${l??n.color.WHITE};
      font-family: ${u??"Pretendard"};
      font-weight: ${d??400};
      opacity: ${p??1};
    `}
`,Tn=n=>typeof n=="number"?`${n}px`:n,pe=n=>{const{type:i,fontSize:l,textAlign:u="left",width:d="100%",as:p="p",children:g}=n;return c.jsx(zg,{as:p,$type:i,$fontSize:l,$textAlign:u,$width:Tn(d),$color:"color"in n?n.color:void 0,$fontFamily:"fontFamily"in n?n.fontFamily:void 0,$fontWeight:"fontWeight"in n?n.fontWeight:void 0,$opacity:"opacity"in n?n.opacity:1,children:g})},Bg=20,Pg=n=>{const{textList:i,typingTime:l,idleTime:u,erasingTime:d}=n,[p,g]=S.useState(""),[x,v]=S.useState(0),[T,w]=S.useState(Date.now()),[N,C]=S.useState(!1),j=l,M=l+u,H=l+u+d;return S.useEffect(()=>{if(!N||i.length===0)return;x>=i.length&&v(Q=>Math.min(i.length-1,Q));const Z=setInterval(()=>{const Q=Date.now(),F=Q-T;if(F>=H){w(Q),v(q=>(q+1)%i.length);return}if(F>=M){const q=i[x].length-Math.ceil((F-M)/d*i[x].length);g(i[x].slice(0,q));return}if(F>=j){g(i[x]);return}const ne=Math.ceil(F/l*i[x].length);g(i[x].slice(0,ne))},Bg);return()=>{clearInterval(Z)}},[N,x,T,i,l,u,d]),{currentText:p,startTyping:()=>{w(Date.now()),g(""),v(0),C(!0)},stopTyping:()=>{g(""),v(0),C(!1)}}},Ug="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",Fg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",Vg="/assets/lock-with-clock-DphQokL3.png",$2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",Yg="/assets/tier-1-badge-CyfFUTea.png",$g="/assets/settings-title-BAsh2fbw.png",Wg="/assets/guidebook-button-DB51pF_8.png",Qg="/assets/info-button-gVHj_-G9.png",Zg="/assets/totamjung-BrXdXI1T.png",qg="/assets/logo-square-Ly45EudP.png",Kg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",Xg="/assets/wood-background-BTxo82aE.png",Jg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAC4CAMAAACRpFNtAAAANlBMVEVHcEzQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3FD2FoDAAAAEXRSTlMAQgWMDvDi0HIZpVn6vCUwOp++H4kAAA8xSURBVHja7FwNk6yoDh0B+Qbp//9nnwhqgKA9LT1vt2qt2q17x7lqSE5yEkJ+fv67/rv+u/7yIoT8mz+fqWUyklKttXNaUyrNFBT7d6lABUmd4POrvOzMnZaT/3coiAWpRS3CLkn83yqNnNQ/XgrqOkIU8syC/oNlIV6+IcV+rbKEaxtjRv4/hCWT5tWncpFQLlfMUx1BY4tf4NpcgX+aX/TP4cQmPRfL7aiZvGKb593+I4z5YCr8WGf6iy5fL6H+XBvn51m+eiZFLjyaFhaKwvqCzNOfyhGAGKu53LpXogw9ZbFuwv8BXW/KPxRD0QMbs5PvBgllTulnvWDi6vWW/jOQECPO75l+E7hJOFdASNZqLd7lf+W4FN3Xld95U+Tyhyi2Ugrbbc8K8xdKmdyhjfDR+05RePHB5kSd8N83K8lv8PrGtexYmSmwouVwBrNm3zer/DIu2QiUWQfW3q+ObTO56etyeI2b9wOgiVDFkReHz/4OWIK7UwdRMZRHehJpigmedb8kK8VyU1KUFwdKMjR8A+bZHgQee9liaEmu1mREaNmLlrt6oSSeFxzFi5cbb2YTz2bl8ZTEcYtz3pW/LMjnEJbNaz4lIavOwacvc2loQ+Wg7TeR5Y7Mx/jfd4GzhCABkX21NGu+Y1ezJAgL5veJlUWjp+GVTrwAUv0Y+4x6BdpgbBG1FWAsOGcka0oS6w91MsKRCJrX58TJAn0vfUa9/GqoYml+VOGyZcEv7qjcMpL0byZjYkEC/gL1PUlCj0O6z5lX9IEvWliPxvUBWPCakpgC0mSZtisKAyh/47mD6LIS5eqw8kvLiu+FiRqhuByABbvGyaokxxSiMGcuYl2obTMtBkJLlnjnAdpZXAiYqCU6ZyucAxaMkAoSJniZ0681SslssU3WzSb9A7RLWwiycOxF/mDBmDsiaqov6ezOCSuzlzOi8DU/Tm8QRn2Kd6Vn8DKWnleBbhKXLLhSSBZlN0VX2n02XQgTJsXh8mIV6VNJprPSQWR6y4IFACTP6ylkvZbDOVQsJ68VgIkpA6wbkDQG3uqdJGPos2BUIbHQuCuST0iYArgOYrQgabFsCZAsx0xZV6XIFdjGoC0WkpIGTuNaWc9RDrNCD+DA0rYrkvXOu6k1rpBlI5c7Eyh1kmFSrFeqRaxebkQt328qLotmWQ4xXWCsY1nbneS2bRnMsRcl6cYQ+bxQCA0WfXXvQb21rHQnW2YZzFPQKMOi7ETKD8oE20cX5VgvMC/2hkIWslkWkKT4xESDSqeykaUhBTv6qklCpl0X+ugo5LCs6bCuEhLJPRaGFBPG0hzeLrCXxG9pn53Af1lpxhVyWtYmiW3WnzSrRjaX+QFFWXPPlcQuVwrBosp7Ctl81vlX3cKkXbYo2yekcTNJYLm+eXIOwZebMbhCNsvygEUiT6KNslf9fy7IWY6RjUKwqPKeQiKxhOElpHy9+OykEgju9SefCJLKGodGtrymUEhSEZ+ucYZevtFVgkltSWUmtVrARxs/ylBHl1JBsokql+jrKYRt+XhxJfIjG5OQRe72YRghoDSoazgiUQUpcN0FkZPVbwkgfBxrbOBnQOOEEnVQb50YwmnegjrwXIVK5K1v/+DaOIOdKoTYa+rTUcgG9droguEoCC0dKwit7UjehpCuQjzultsQqMfRxK5lpR9cv6Tg77Esn3uEWMcLNP52M4N5aAl+8yDQspKpmZsc+YSy3rJuuzUIyYVgRqcaf5sc/NAdarnlDMCy9L3LOle9rmpzirKWUPtb4l6Dd6iTtYIntk6srxCj2+I8IopCMCHvl+sTiMjaeqc3oB6kQLcWKBIkZW1b01OQqNjDB0pUm9Lhdycn9o7vNaKzSUJbV5ZirKkd8Odl0lT/BCxqUwCASAq69A2F9OSIZYSGtTSYIG+85439KFkqABjvGyuVfa/ub/foWiE7Jqo9kQdoT4KcH5pQSCuIcH8PdXmxCTcbIAhLtXhbgUTem/A1g+erv6dVwVdWz7+Mhsn39g1rIx8ljcQ0vcUv/nkPBwsGNrVuTgs8P3vjW6gHaq+2Ek/bCqqzYsv8PLaTynmAxzXv60G9UAiPDY4wNOpaIe0KqYduC9u1AqZba6gHdYgQq038YC8QQQKD4LbuXEMmKoc8gGkBS00aui8C0dqOPIHGpmF+goP7Dd3/OhkBTCFZ7nJLs4DvFWZbebjTMcvKsJA3Nf7yoSDVOt36khzVXa2QAJsJuGkUkjgJfPJYQZK3JdXr1G1GJUqNBAXDo9UgYSzR6OuICJXtPRsryAUp3TMqVwYNP6EKKeqLm9FeCLJQwbUfJAi5E0QVldC8X7ZGb4mRxsB+IcgiHoH/l6Z1ZFTQRbkV0xSLhr519H1B6H2R9lYQQSqwq7viSTAcCqJ+KGJYhUJ+QgX2JDstv4RPz9wv6wbIbvHkVImNjQTSXrosDH2V11rczPXnHa1NHOFXDAgWT/T+6duphACiCG1iSPynt3FETcuD8lAdN64ZECxZmdSGZp2JJgT5icMU0tDqwZE9rqQFkZxd+g5YsgqT1C6dJfk5OzDTNnCrkAwJ4G0Hc62UJkzvEYeqZBVOTLMAWKTDFNKk0Kp685AiiqmcoiO/qJPmMqkr3W/dSaTq6kOYh9YaG0u9SHXxPod981PORenBY2CE3/1GTv2rq853wtzVuLquW+/dvbSNIVhBrsmp2bMtkvp5qov2zh7VWbemYp7jKURMIU1B86f+weSe9dQYlF1j1Qd8S8TD7UQppZlQhfh6fWqb3v7+pMupaYw0r05s9z2FwDvh3Gxv1wtmnvV7N0t40lfeBI6lU/DvtDS1e4bGHKWTixK/qepcW6b8qO9MV/6WONy21DsKmeJBBqGbBq+0HdLsU8K3KOme9Z2ZVwUSfKMSh/pStQeY1DfXtKo1z8RKzOzZbkkDEs+xqiwOdVapameSHGvKhOu/pVljTyiwZu+IYk3svquQpdpRRxKktkNZvsaGw/O7fRWEq09hvXbSopXjTFKKbDmtVdHuO3znbf9uqOXc4xZuoR5qqANBfKMQWifwo0/rtqtTt0H1oO5rr3wKAh1pIgtFjJCvh1Gjb1uwuti2HfYVUtw5Mnl4UCC3eNOGcw8/dZz0TGtrK9qMe71y1Z39YAM8P5lqkK2tDT9VlRWAHCQ58H4B9eoOjUfiirPfqu1ySjG3qp6NUE/rHX3Zw+7fgvp+sKeYKJLXpGAKU2MCP8xQ+dwZJ75VqCTJloMJC+9E9bM7oFikuQmQidKXUI+/Jp7nvbLpmGOwO9Tf9vc2W4bH4vPGsHanSBrZnp8KT16keE42ruhGr1NcRLyfqqCLtmIXYYqM6kST3dZ4re47x2vgnKvhkLZ0MyO+V0WWxp+XInLMKh6UqglWK/9+01+Z4mY5yoXGXhWPBkkh5ADPJdszBPumoO53jl8rZHHYacBe1Z0oNcID5wM9xTsZBZuE7zX9QajnXa3qNGAKj/x7wx5yd/ZSGi7WJHNY1iXUidlPYRdyIOFx8JUDV9lGnJ1wHIuCtJMiUD8+ej+FWZ/ORMLj6Cv723KtWMaJdbK1rD7UyV5ArU+TI+Fx/JVeUvlytldCuTZ4WQ6But+5Y52757Dy5alB+7nN6jTnTs2toKYAdQ/q6ugQrDmHcq/RnYx4MEHPuB4zOaAofaifYjRDI3YvyL8+aSfgB7XP49O7KGlLpFUICVS8eqNhyLHPOMtvS7If1K4/YXL2PNG+yrKgUAdHwJFDsQRsBc3yyzNq8qK1EziU5MWsPLOopcpCtpOq9mjraL50P5Q4I9Fl/JXNGJklcs5mSiNdhHB6G1RD0/gK2IcmkMlZWQ7ntz/YmU7fneSUgzk2FcVT0YyYtG1DoBVIqrfb1eoS8x/XpfjuoLDsul4aeYu6H9a4hhuFKXo+j2eeDt2Fr+Bj8ZB719MB9iqEdN0pL3Y7rYCq2cJjpkyfHVLjobKuU67h7Dq5moHUDGWd+erNOse4F1dMpmKgIYePd8Qrj99J/E56u06SMD+ZODDTiXjFFlPT7Rk7hoVlOfIMspnfnPn/GBv8zHb2eWf2sg+MxImZjCnv/cV+LBhGMgEz42bR2dWrwZY1A3Z9UEVhni0Yga12cWpC1nb8Y/YAVg+UJA9qOs98n57l0fC2gwZvbtpy4zUYBLFPq9LjIsrekQiwd1BF/rHu2UmDTTJWLko3kpfLjZKETMccDIUY92eRi5mDoK1aha4KuMNJNDMDn5mWTMOLOKRA5wRQ+3tR1ClGosGnJMXQglyhcIO2SgjZwqCuGhZOE38JuvzC43t5TnXa95x3SapwvoyVZKsKWGTM2cnfcfKBKWNa+SVCg/PW7oKHy2E6MRZpniIAsNskmbuBv0TF1hpwlE/VFZR2m2qwJCve8aqZgof0Ip2aOkGcqUlqOPqQ06XdhkHOAKMV4ifVoF61CVh8FkbLNUvcxmLH8K7UEuLgtiopoQv6wbwniR0jCTF6uvJBczPGkK8sK14r26pnlHfmNU69CQy7TsIYz3V5N1Dx7uB4Kyg+NzbnVGLq6uQrCUrLY94Z5R8T+v+1dybIDYMwFPW+AF56/8vWMRJuGolkJob2e8IJ/EYIiS9ZjFplk45g4XtPtckLLLdpWJ3TIcyTpxX0QT4s3uUbwr5drIZdbgh+4dq22w6A2q7PKxyU/Qp+Tflkn3ec/HYLWW8DM/dly3UZX2228iROJ+nykryt0wgko1Hmj/7TNRvthCJrgZGIHm9cHpX7LBI1atD5nF7lPtlPBJuAkei7y9vEuaFBJ2FtuAYjKYV7d5tC8EruJ6VqE4NBUkVI7OmC1x/ZJAheCxSJlF2xTLRehaQvUUiclicu0xdSutLoJDyMHyTIU3YlkZC5WpAgP0ZIagcU5CvOeAVnSFELSr+7JJIq9BlAkQhuzUEeJKDQFhJvIVgBhTJe0SZrjxRQIiShf3hAIhFvhjMFFJBjmGwifS0HFJBjOELCHQwgNxSr39a5uaBG8JOKg4boC75YDhIZiUT2hb0XA0ZciZEMLsVfmGlJhE5EshYMSPgl6rczeG93Nc7L9qw7zEKUgXERjQSSIzyldKhaITvG4nhoGUKrmjwmvF6sH3E5mGQvarGYYhE5frRChFovJsfRCjFh1awlm9xNgyuKK5BgcxxN+rl6hhKS7IGwXwr41VgzmQtwFPePCaGjFJ/1WfnWNw9tf/5FurfGAAAAAElFTkSuQmCC",em="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACACAMAAADeUGBWAAAAPFBMVEVHcEzQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3FkF6GlAAAAE3RSTlMAGAUNjMr7Tzq8J/V47GOr1uGaL54SGAAACS5JREFUeNrFXOm6oyAMLYuAgLi9/7sOLiCVBKnXdvw1322rx5OThRDm9foPFyOa/ekGRDpJHgZFNW+bSdH7d1BtJ7pePQtLt7O/BvnHG8ytfpQsLra73raCM+sNhH0SFtnedTZ36aJ2u8HcPCkv0ux3vf2yAVanvsDWPN0VvTT7HdyT2poCrLtBQg9zvbgoUUoRWm8DTm87zW5EeQ3J9k3Xdc1kL6Gpse6mhTts8uxJGZKbmk7sHAgPzRWDOLPd4og8vSn9jDnZdqYQTynTjjdjgBQuMbZc4tCY65vWHqiYstyqj5Sm8ezDtOTtaGbwEmboHWpPRpJPCPfvJQbHHnAnb7l+6ObiJbqFNAhZ+je2R/3xr1FotVwn5pprJa3Igxz3l+D0LzRJi1oOpGxRmpW4e9r9/cTtOOZp8j63PAqBgDKIuyeNsCy9pyZPkyhYy3Pi9YYSKcbexzTAiLtCB/U0TSYGhM07cdIAHyDT+vXB0Tz80IsIPpYEPvI3US/hFXfSbjibU9tmHPJq1TPRc6cIFpsunU4M00nSZcc4m5NpletOt2YLzPYEeKVpqHM60/DzewXD4yGtlDzJFL/7Zl7iRVIZm4Ju7PmdKSkprZg81ZAY43AG1XeFCDk1BjaOy4I6U7h7CjzY7mXGKdCqppRPGNVygp7lnzPlKXQTKC40KBvqFEAItGxCaEqkuiAToG2AaqDozmYiQPWTvHVgK6UwPi2rVbyo+xGRGWCaxQdgc0J5x9cVMQDJcxEfftciRacvldoOykKQzJYFNWxOaHFG1eYuYrQMgWUaqynaD+AgB3k0S8x5/kFcBfkFwfEk7y58OoinZ1j+9SEtRw4crBsfzcAfaXu2fcuOanhAy2lpkMBEUWSgMSGZebvneWNfIG/RCi1xpEGcGafMP46D0Wzu+iNqLsRC8DdYIQCM8iNYqJPFoA7HDP86qwNgnwdYsT1hy7AMJBnYybYSHZfZwJ1t0Lfd2QqwXBnW4AsBU5WYL2OG/1UhoW6wQqU66AtYZCEeev2SMb2X88ZUZffmXfKkXx41OnoJa/MyU5mYk2g2XdREK+X81Koirm/x/uUbrBemVVE05lJeDqJUOfrv8KyDxgqV8hkWHphKxmRqggk7eOYfNfZyWChlmDFX5V9VGPQBWGswBCnLqiy2xQmBGi9cj8BCY7lIOVjqUbi06s680qdgbbEcfOpiTLKvE0FUwmYqfA7W2tWC9S+GYntCSKzd+AisTyLmZmIM1utpWIUqK3NU3v2MrXKVlejN12iq+yFbF1VWEmrDguVXbJXCbBL+Y3vf/YwtcGW2NjRI6JDSuMvjfslWzDXBmMPCEwV2eexv2dqf3u/P6E9RMxSdM/8DW0sP7has+OotBivfE6uF5T1rmpy9BctisCKN9CZbzC1eY0JF8hkshzyD9gjearaSbtd9WOcVQthBFBmsSrb2ru8RpN0nAwtu//GIwLrL1ltTKWlpVfbxpUD2kNE97zq21Ag2AJvSLlwNrEBj/vAqWBZvcdeQFmCZEywaPsiWpVVs0am41mymC9Jii0AiH+R7czWwYnxB97oW0th9WGca69iKKXVA+8IhC8PS7K5gyTts6aB4u+6NFDaUHKgzFBZaB1axFW/rtmUVvjfil18E/71AYbk7bLmTgzNPWo8sZQTQS9dYFRo/cHfY4kDyQDeUgNYYCiuIVtzRFpZR4Z0ykVcpsTg+Pz32RO94YnREYFSIaXkmrWevalL23fvpTk48HLGwpy/yDn8OywH1khFdr+9UpxL2l7QPtnQ9BAoeh/Wiylmod14BK9Yl6n0epn8LBrJDJc+a0rgXOD1SAYvntR9VvVna5BSPIpA468frrmGx3BGZHc5Dj5QjJWjKVjWsCrZyRyTcZBDiKqZlD8CqYCtkiEMZcYsl+VGITdAIXWGZep+tPM3bOWcGT2+lZeof2LJnR6R+GWTW6J6EqILiI1uCP8dWLE2Pb1Bl5QI2Zaag+K+wxaAOAl3BJoGM4SvR77AVHfFNy+tf2zrFf4WtuBhzWUJKIOTuCnnig2zB9bY9/SUqHtq2/QZbcEZsT+ouKf4rbIFfWC2b+EBR8d9gC36gO4UHMpSGyr/AFliarlhTq0bFg+nlC2zF0jSFtYaDlL79FAQyvf0FtiIP6WjEisK+KhX/DbZcLNKPkbf1XdLkV1b8N9jiyZKGpD9Kz73oouK/wBbt01E8dqyjRlcsyb7MFklH8bowHsGklQyofZCTLM+zFdfp60IQGS+OtQ/SgGYfH5W5YitmRLvS1ihwJ2FAF9Q3YV2xdRw0WtflIjs2RtMZEKRWD7DEx7AEDCstTV2XHVZZpm2TzUzs9NfnbOm2yD9LPmbbMiz0r2g+zDrqZ2BpG/mHDzwcXVO1tH3EFiYYUdIBh1Na9gQsYpujzwKfLIhxcsW1brGIru+bsUsmLcx8Uap/Aou4BBR24OGAteLSPTRExwW6Qf8pLOLat4YxcnAr7chvuEQ2Qh5PK6IHcg6F0itQJ11MSEqUyW5P4xWtw0iFGZt+Ow4DLCRvwcpBmQk9xSqTjcQlOxM7eECTlYqwzSHjrDr60Bi3CrC0O49NmLZ0TEu17/PpTGuy9QGXEGGnoz+JHhO6Zkun3rcHUlfeSk10fvTZmFbOIzLpzUyP3IlewAJADfbyFHKCq3Nbd9n2AzRIZ+DpZnyrfM1eGai5AlSaCpY5WHTmfo8XNh/DZD2aSmgS0eMzuK7MBkfVNQ5XM1DjpFglLAjUWAvq5I/Xw2Jd/1YkYrCo5tltB/7RmX3XfXCyZznHkqqfgr0oxcf5rvniTawpgAC2P5fjEAVYj4B6YUdpPKKWO6WJzI+qiGiQbC+LqWmc85Bw5xxilqZ3RPsWC1OZUITYj9yd2GIyO0ggGnv3f0tIwoSH5BOifh9+hgKQd0uv/je2yAJKPAVqTUPiOBTHwL0yl0+qe7cMA1yiZTr/xt9ALXzxZjVcYUeU5AbysT+Yt+EZn+Yq99X4I9GXIyJM5nLO/pFUCeRFXz+5vPMPVQcYTevI64cXqP58akL+FNRe1rXF0ebFE17/44LUf8wOS/b6TxfFgOU1xo8vKMs097LMV93SO59+/X9Ur7cp9dLBvP+j/rEbW/ufJQUAU1I9QdQ/65PRPTw+Zi4AAAAASUVORK5CYII=",tm=gt`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,nm=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,rm=h.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:n})=>n.gradient.BROWN_GRADIENT};

  z-index: 0;
`,om=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,im=h.img.attrs(({$scaleX:n,$scaleY:i})=>({style:{transform:`scale(${n}, ${i})`}}))`
  width: 160px;

  transform-origin: bottom;
`,lm=h.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:n})=>n.color.GOLD};
`,sm=h.div`
  position: relative;

  text-align: center;
`,am=h.span`
  margin: 0 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,cm=h.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:n})=>n.color.LEMON};

  animation: ${tm} 0.8s infinite forwards;
`,um=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,dm=h.span`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,fm=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,cl=()=>{const[n,i]=S.useState(null);return{activeModalName:n,openModal:d=>{i(d)},closeModal:()=>{i(null)}}},ha=20,pm=n=>{const{onShowComplainModal:i}=n,[l,u]=S.useState(0),d=()=>{u(x=>{const v=x+1;return l===ha&&i(),v})},p=Math.min(1.5,1+Math.max(l-ha,0)*.0025),g=Math.max(.5,1-Math.max(l-ha,0)*.0025);return{increaseClickCount:d,totamjungScaleX:p,totamjungScaleY:g}},hm=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],gm=n=>{const{open:i,onClose:l}=n,{currentText:u,startTyping:d,stopTyping:p}=Pg({textList:hm,typingTime:1600,idleTime:3e3,erasingTime:500}),{activeModalName:g,openModal:x,closeModal:v}=cl(),{increaseClickCount:T,totamjungScaleX:w,totamjungScaleY:N}=pm({onShowComplainModal:()=>x("totamjungComplain")});return S.useEffect(()=>{if(i){d();return}p()},[i]),c.jsx(Qn,{title:"토탐정 정보",open:i,onClose:l,children:c.jsxs(nm,{children:[c.jsx(rm,{}),c.jsxs(om,{children:[c.jsx(im,{src:qg,alt:"",onClick:T,$scaleX:w,$scaleY:N}),c.jsx(lm,{children:"토탐정"}),c.jsxs(sm,{children:[c.jsx(am,{children:u}),c.jsx(cm,{})]})]}),c.jsxs(um,{children:[c.jsxs(pe,{type:"normal",fontSize:14,textAlign:"center",children:["버전:"," ",c.jsx("b",{children:`v${Ae.runtime.getManifest().version} - MV${Ae.runtime.getManifest().manifest_version}`})," ","/ 2025. 10. 14. 빌드"]}),c.jsxs(pe,{type:"normal",fontSize:14,textAlign:"center",children:["개발: ",c.jsx("b",{children:"요술토끼"}),"(",c.jsx(dm,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),c.jsxs(fm,{children:[c.jsx(Ce,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:z.color.LIGHT_PURPLE,iconSrc:Kg,disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),c.jsx(Ce,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:z.color.LEMON,iconSrc:c.jsx(yg,{}),disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),c.jsx(Ce,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:z.color.WHITE,iconSrc:c.jsx(xg,{}),disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]}),c.jsx(tn,{title:"왜 그런 짓을...",width:"350px",height:"auto",open:g==="totamjungComplain",message:"그만 좀 두드려 주시면 안 될까요!?",actionType:"confirm",closeOnBackdropClick:!1,onClose:v})]})})},mm="https://github.com/wzrabbit/boj-totamjung/wiki/%ED%86%A0%ED%83%90%EC%A0%95-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",vm=h.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,ym=h.h1`
  width: 130px;
  height: 100%;
`,xm=h.img`
  width: 100%;
`,Am=h.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,wm=h.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:n})=>n.color.GOLD};
`,Id=h.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,kd=h.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,Sm=n=>{const{selectedCategory:i,onCategoryChange:l}=n,[u,d]=S.useState("none");return c.jsxs(vm,{children:[c.jsx(ym,{children:c.jsx(xm,{src:$g,alt:"토탐정 설정"})}),c.jsx(Kh,{selectedCategory:i,onChange:l}),c.jsxs(Am,{children:[c.jsx(wm,{children:`v${Ae.runtime.getManifest().version}`}),c.jsx(Id,{type:"button","aria-label":"도움말",onClick:()=>{d("guidePageOpenConfirm")},children:c.jsx(kd,{src:Wg,alt:""})}),c.jsx(Id,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{d("totamjungInfo")},children:c.jsx(kd,{src:Qg,alt:""})})]}),c.jsx(tn,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:u==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(mm),d("none")},onNoSelect:()=>{d("none")}}),c.jsx(gm,{open:u==="totamjungInfo",onClose:()=>{d("none")}})]})},Tm=h.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,Em=h.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,Nm=h.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:n})=>n.filter.ORANGE_FILTER};
  object-fit: contain;
`,Rm=h.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.ORANGE};
  }
`,Im=h.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:n})=>n.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,km=h.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:n})=>n.color.ORANGE_TRANSPARENT};

  z-index: -1;
`,Nn=n=>{const{iconSrc:i,title:l}=n;return c.jsxs(Tm,{children:[c.jsxs(Em,{children:[i&&(typeof i=="string"?c.jsx(Nm,{src:i,alt:""}):c.jsx(Rm,{children:i})),c.jsx(Im,{children:l})]}),c.jsx(km,{})]})},Cm=h.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:n})=>n.color.GOLD};
`,jm=h.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Mm=h.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Dm=h.div`
  display: flex;
  column-gap: 6px;

  width: 420px;
  height: 100%;
  margin-right: auto;
`,Lm=h.div`
  & svg {
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,Om=h.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:n})=>n.color.WHITE};
`,bm=h.div`
  display: flex;

  user-select: none;
`,Cd=h.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,jd=h.img`
  width: 30px;
  height: 30px;
`,Md=h.p`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:n})=>n.color.GOLD};
  }
`,Gm=h.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,_m=h.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:n,$backgroundColor:i})=>i==="brown"?n.color.BROWN:n.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Hm=h.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,zm=h.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,Bm=h.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:n})=>n.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:n,$isChecked:i})=>i?le`
          box-shadow: 0 0 8px ${n.color.GOLD};
          background-color: ${n.color.GOLD};
        `:le`
          box-shadow: 0 0 8px ${n.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Pm=h.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,Um=n=>{const{isChecked:i,ariaLabel:l,onChange:u}=n;return c.jsxs(zm,{children:[c.jsx(Pm,{checked:i,"aria-label":l,onChange:u}),c.jsx(Bm,{$isChecked:i})]})},Fm=n=>{const{id:i,name:l,isChecked:u,backgroundColor:d,onChange:p}=n;return c.jsx(_m,{$backgroundColor:d,children:c.jsxs(Hm,{children:[c.jsx(pe,{type:"semiPrimary",fontSize:16,width:"auto",children:l}),c.jsx(Um,{isChecked:u,onChange:()=>p(i),ariaLabel:l})]})})},Vm=n=>{const{items:i,checkedAlgorithmIds:l,onChange:u}=n;return c.jsx(Gm,{children:i.map((d,p)=>c.jsx(Fm,{id:d.id,name:d.name,isChecked:l.includes(d.id),backgroundColor:p%2===0?"brown":"light-brown",onChange:u},d.id))})},Ym=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  width: 100%;
  height: 100%;

  user-select: none;
`,$m=h.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.GOLD};
  font-family: 'Do Hyeon';
  font-size: 22px;
`,Wm=h.img`
  margin-bottom: 10px;
`,W2=n=>{const{imageSrc:i,imageWidth:l,imageHeight:u,title:d,description:p}=n;return c.jsxs(Ym,{children:[c.jsx(Wm,{width:l,height:u,src:i,alt:"",draggable:!1}),c.jsx($m,{children:d}),p&&c.jsx(pe,{type:"normal",fontSize:14,textAlign:"center",children:p})]})},Qm=gt`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,Zm=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${Qm} 2s forwards infinite linear;
  }
`,Wa=()=>c.jsx(Zm,{children:c.jsx(P2,{})}),So=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force","무차별 대입","무작위 대입"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:["소트","소팅"]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:["수학"]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:"Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬","imos"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap","pq","우큐"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우","네트워크 플로우","network flow"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:["냅색"]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:["gcd"]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:["어쩔FFT"]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix ARray And Lcp Array",tag:"suffix_array",alias:["서픽스 어레이"]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:[]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle","밋 인더 미들"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열 문제",englishName:"Longest Increasing Sequence Problem",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:["egcd","gcd"]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시","벌리캄프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:["외계인 트릭"]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"키타마사",englishName:"Kitamasa",tag:"kitamasa",alias:[]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 스패닝 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]},{id:208,name:"집합과 맵",englishName:"Set / Map",tag:"set",alias:[]},{id:209,name:"트리의 지름",englishName:"Diameter Of A Tree",tag:"tree_diameter",alias:[]},{id:210,name:"cdq 분할 정복",englishName:"Cdq",tag:"cdq",alias:[]},{id:211,name:"최장 공통 부분 수열 문제",englishName:"Longest Common Subsequence",tag:"lcs",alias:[]},{id:212,name:"다이얼",englishName:"Dial",tag:"dial",alias:[]},{id:213,name:"세그먼트 트리 비츠",englishName:"Segment Tree Beats",tag:"beats",alias:["세그비츠"]},{id:214,name:"홀짝성",englishName:"Parity",tag:"parity",alias:["패리티"]},{id:215,name:"피사노 주기",englishName:"Pisano Period",tag:"pisano",alias:[]},{id:216,name:"bulldozer 트릭",englishName:"Bulldozer Trick",tag:"bulldozer",alias:[]},{id:217,name:"불변량 찾기",englishName:"Finding Invariants",tag:"invariant",alias:[]},{id:218,name:"트리에서의 전방향 다이나믹 프로그래밍",englishName:"Rerooting On Trees",tag:"rerooting",alias:[]},{id:219,name:"역추적",englishName:"Traceback",tag:"traceback",alias:[]},{id:220,name:"제한된 트리 너비",englishName:"Treewidth",tag:"treewidth",alias:[]},{id:221,name:"배타적 논리합 기저 (gf(2))",englishName:"XOR Basis (gf(2))",tag:"xor_basis",alias:[]},{id:222,name:"비트 집합을 이용한 최장 공통 부분 수열 최적화",englishName:"Longest Common Subsequence Using Bit Sets",tag:"bitset_lcs",alias:["비트셋 lcs"]},{id:223,name:"격자 그래프",englishName:"Grid Graph",tag:"grid_graph",alias:[]},{id:224,name:"순환군",englishName:"Cyclic Group",tag:"cyclic_group",alias:[]},{id:225,name:"리-차오 트리",englishName:"Li-Chao Tree",tag:"li_chao_tree",alias:["리차오 트리"]},{id:226,name:"키네틱 세그먼트 트리",englishName:"Kinetic Segment Tree",tag:"kinetic_segtree",alias:[]},{id:227,name:"차분 배열 트릭",englishName:"Difference Array",tag:"difference_array",alias:[]},{id:228,name:"최대 부분 배열 문제",englishName:"Maximum Subarray",tag:"maximum_subarray",alias:[]},{id:229,name:"각도 정렬",englishName:"Angle Sorting",tag:"angle_sorting",alias:[]},{id:230,name:"조화수",englishName:"Harmonic Number",tag:"harmonic_number",alias:[]},{id:231,name:"소인수분해",englishName:"Prime Factorization",tag:"prime_factorization",alias:[]}],Q2=So.length,Dd=n=>n.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),Z2=n=>{const i=Dd(n),l=[];return So.forEach(({id:u,name:d,englishName:p,tag:g,alias:x})=>{const v=[d,p,g,...x].map(w=>Dd(w));(i===""||v.some(w=>w.indexOf(i)!==-1))&&l.push({id:u,name:d})}),l},mo={FETCH_OPTIONS_DATA:"fetchOptionsData",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",ADD_RANDOM_DEFENSE_HISTORY_INFOS:"addRandomDefenseHistoryInfos",FETCH_GACHA_OPTIONS:"fetchGachaOptions",SAVE_GACHA_OPTIONS:"saveGachaOptions"},Bn={CHECKED_ALGORITHM_IDS:"algorithm",QUICK_SLOTS:"query",TIMER:"timer",SETTINGS:"settings"},qm={RANDOM_DEFENSE_HISTORY:"queryLog"},Te={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},B={...Te,GACHA_OPTIONS:"gachaOptions"},Qa=n=>Array.isArray(n)?n.every(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):!1,q2=[1,2],K2={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},ba={hotkey:"Alt",selectedSlotNo:1,slots:K2},Za={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},X2={...Za,shouldRevealTierOnHover:!1},Km="none",J2=!1,qa=[],Xm=0,e1=[],t1={isTierHidden:!1,isAudioMuted:!0},Ld={selectedNo:1,...K2},Jm={[B.DATA_VERSION]:2,[B.CHECKED_ALGORITHM_IDS]:q2,[B.QUICK_SLOTS]:ba,[B.TOTAMJUNG_THEME]:Km,[B.HIDER_OPTIONS]:X2,[B.RANDOM_DEFENSE_HISTORY]:qa,[B.IS_TIER_HIDDEN]:J2,[B.FONT_NO]:Xm,[B.TIMERS]:e1,[B.SHOULD_SHOW_WELCOME_MESSAGE]:!1},e3={...Jm,[B.DATA_VERSION]:3,[B.GACHA_OPTIONS]:t1},Ka=n=>Array.isArray(n)?n.filter(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):q2,t3=async()=>{const i=(await Ae.storage.local.get(B.CHECKED_ALGORITHM_IDS))[B.CHECKED_ALGORITHM_IDS];return Ka(i)},n3=n=>{Qa(n)&&Ae.storage.local.set({[B.CHECKED_ALGORITHM_IDS]:n})},r3=()=>{const[n,i]=S.useState(""),[l,u]=S.useState([]),[d,p]=S.useState(!1);S.useEffect(()=>{(async()=>{const N=await t3();u(N),p(!0)})()},[]),S.useEffect(()=>{d&&n3(l)},[l]);const g=N=>{i(N.target.value)},x=N=>{if(l.includes(N)){const j=l.filter(M=>M!==N);u(j);return}const C=[...l,N];u(C)},v=()=>{u(Array.from({length:Q2}).map((N,C)=>C+1))},T=()=>{u([])},w=Z2(n);return{keyword:n,items:w,checkedAlgorithmIds:l,isLoaded:d,handleChangeKeyword:g,toggleAlgorithm:x,checkAllAlgorithms:v,uncheckAllAlgorithms:T}},o3=()=>{const{keyword:n,items:i,checkedAlgorithmIds:l,isLoaded:u,handleChangeKeyword:d,toggleAlgorithm:p,checkAllAlgorithms:g,uncheckAllAlgorithms:x}=r3(),{activeModalName:v,openModal:T,closeModal:w}=cl();return c.jsxs(Cm,{children:[c.jsx(jm,{children:u?i.length>0?c.jsx(Vm,{items:i,checkedAlgorithmIds:l,onChange:p}):c.jsx(W2,{imageSrc:Jg,imageWidth:136,imageHeight:125,title:"검색 결과가 없습니다.",description:"검색어에 오탈자가 있는지 확인해주세요."}):c.jsx(Wa,{})}),c.jsxs(Mm,{children:[c.jsxs(Dm,{children:[c.jsx(Lm,{children:c.jsx(H2,{})}),c.jsx(Om,{placeholder:"알고리즘 분류를 입력해 주세요...",value:n,onChange:d})]}),c.jsxs(bm,{children:[c.jsxs(Cd,{type:"button",onClick:()=>{T("checkAll")},"aria-label":"알고리즘 분류 전체 선택",disabled:!u,children:[c.jsx(jd,{src:Ug}),c.jsx(Md,{children:"전체 선택"})]}),c.jsxs(Cd,{type:"button",onClick:()=>{T("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",disabled:!u,children:[c.jsx(jd,{src:Fg}),c.jsx(Md,{children:"전체 해제"})]})]})]}),c.jsx(tn,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{g(),w()},onNoSelect:w}),c.jsx(tn,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{x(),w()},onNoSelect:w})]})},i3=h.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,l3=h.legend`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  margin-bottom: 6px;
`,s3=h.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:n})=>n?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,a3=h.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,c3=h.label`
  width: 16px;
  height: 16px;
`,u3=h.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:n})=>n.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:n})=>n?"not-allowed":"pointer"};

  ${({theme:n,$checked:i})=>i?le`
          box-shadow: 0 0 8px ${n.color.GOLD};
          background-color: ${n.color.GOLD};
        `:le`
          box-shadow: 0 0 8px ${n.color.DARK_BROWN};
          background-color: transparent;
        `}
`,d3=h.input.attrs({type:"radio"})`
  display: none;
`,f3=n=>{const{checked:i,disabled:l=!1}=n;return c.jsxs(c3,{children:[c.jsx(d3,{...n,onChange:()=>{if("value"in n){n.onChange(n.value);return}n.onChange()}}),c.jsx(u3,{$checked:i,$disabled:l})]})},Pn=n=>{const{legend:i,name:l,options:u,checkedValue:d,disabled:p,isVertical:g=!1,onChange:x}=n;return c.jsxs(i3,{disabled:p,children:[c.jsx(l3,{children:i}),c.jsx(s3,{$isVertical:g,children:u.map(({label:v,value:T})=>c.jsxs(a3,{children:[c.jsx(f3,{name:l,value:T,checked:T===d,disabled:p,onChange:x}),typeof v=="string"?c.jsx(pe,{type:"semiPrimary",fontSize:16,children:v}):v]},T))})]})},p3=h.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,h3=h.button`
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

  ${({theme:n,$isActivated:i})=>i?le`
          border: 1.5px solid ${n.color.LEMON};
          box-shadow: 0 0 12px ${n.color.GOLD}70;
        `:le`
          border: 1.5px solid ${n.color.BROWN};
        `}
`,Od=h.img`
  width: 12px;
  height: auto;
`,bd=h.p`
  font-size: 14px;
  color: ${({theme:n,$tier:i})=>n.solvedAcTier[i]};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,g3=h.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,m3=h.ul`
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
`,v3=h.li`
  padding: 2px;
`,y3=h.button`
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
`,x3=h.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,n1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",A3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",w3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",S3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",T3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",E3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",N3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",R3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",I3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",k3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",C3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",j3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",M3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",D3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",L3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",O3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",b3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",G3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",_3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",H3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",B3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",P3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",U3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",F3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",V3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Y3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",$3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",W3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Q3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",q3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",K3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",X3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",J3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",e4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",t4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",n4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",r1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",r4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",Rn={0:n1,1:A3,2:w3,3:S3,4:T3,5:E3,6:N3,7:R3,8:I3,9:k3,10:C3,11:j3,12:M3,13:D3,14:L3,15:O3,16:b3,17:G3,18:_3,19:H3,20:z3,21:B3,22:P3,23:U3,24:F3,25:V3,26:Y3,27:$3,28:W3,29:Q3,30:Z3,31:r1},Xa={unrated:n1,bronze:q3,silver:K3,gold:X3,platinum:J3,diamond:e4,ruby:t4,hidden:n4,notratable:r1,warn:r4},o1=n=>{const{initSelectedValue:i,onChange:l}=n,[u,d]=S.useState(i),[p,g]=S.useState(!1),x=S.useRef(null);return S.useEffect(()=>{d(i)},[i]),S.useEffect(()=>{const w=x.current;if(!w)return;const N=C=>{C.target instanceof Node&&C.target!==w&&!w.contains(C.target)&&g(!1)};return document.addEventListener("click",N),()=>{document.removeEventListener("click",N)}},[x]),{selectedValue:u,isSelectOpen:p,updateSelectedValue:w=>{d(w),g(!1),l(w)},openSelect:()=>{g(!0)},containerRef:x}},o4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],ga={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},i4=n=>{const{selectedTier:i,onChange:l}=n,{selectedValue:u,updateSelectedValue:d,isSelectOpen:p,openSelect:g,containerRef:x}=o1({initSelectedValue:i,onChange:l});return c.jsxs(p3,{ref:x,children:[c.jsxs(h3,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:p,onClick:g,children:[c.jsx(Od,{src:Rn[u],alt:""}),c.jsx(bd,{$tier:u,$isBold:!0,children:ga[u]}),c.jsx(g3,{children:c.jsx(U2,{})})]}),c.jsx(m3,{$isOpen:p,children:o4.map(v=>c.jsx(v3,{children:c.jsxs(y3,{type:"button","aria-label":`${ga[v]}를 경고 시작 티어로 설정하기`,onClick:()=>{d(v)},children:[c.jsx(Od,{src:Rn[v],alt:""}),c.jsx(bd,{$tier:v,$isBold:v===u,children:ga[v]}),v===u&&c.jsx(x3,{children:c.jsx(Io,{})})]})},v))})]})},l4=h.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  height: 46px;
`,s4=/^#([0-9a-f]{6})$/,i1=(n,i)=>{if(!s4.test(n))throw new Error("잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.");if(isNaN(i)||i<0||i>1)throw new Error("투명도는 반드시 0 이상 1 이하의 수여야 합니다.");const l=parseInt(n.slice(1,3),16),u=parseInt(n.slice(3,5),16),d=parseInt(n.slice(5,7),16),p=Math.round(i*255).toString(16).padStart(2,"0");return`#${[l,u,d].map(g=>g.toString(16).padStart(2,"0")).join("")}${p}`},l1={none:z.color.LIGHT_GRAY,totamjung:z.color.LIGHTER_BROWN,bojExtendedDark:z.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:z.bojExtendedColor.SKY_BLUE,solvedAcLight:z.color.LIGHT_GRAY,solvedAcDark:z.color.LIGHT_GRAY,solvedAcBlack:z.color.LIGHT_GRAY},Gd={...l1,totamjung:z.color.LEMON},a4={none:z.color.WHITE,totamjung:z.color.DARK_BROWN,bojExtendedDark:z.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_INDIGO,solvedAcLight:z.color.WHITE,solvedAcDark:z.solvedAcColor.DARK_INDIGO,solvedAcBlack:z.color.BLACK},c4=["none","solvedAcLight"],u4=h.input`
  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};
  padding: 0 ${({$horizontalPadding:n})=>n};

  border: ${({$borderWidth:n})=>`${n}px`} solid
    ${({$totamjungTheme:n})=>l1[n]};
  border-radius: ${({$borderRadius:n})=>n};
  background-color: ${({$totamjungTheme:n})=>a4[n]};

  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n};
  font-weight: ${({$fontWeight:n})=>n};

  color: ${({theme:n,$color:i,$totamjungTheme:l})=>i||(c4.includes(l)?n.color.BLACK:n.color.WHITE)};

  &:focus {
    border-color: ${({theme:n,$totamjungTheme:i,$hasError:l})=>l?n.color.RED:Gd[i]};
    outline: 3px solid
      ${({theme:n,$totamjungTheme:i,$hasError:l})=>i1(l?n.color.RED:Gd[i],.5)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`,Vt=S.forwardRef((n,i)=>{const{width:l,height:u,borderWidth:d=1.5,borderRadius:p="4px",horizontalPadding:g="6px",fontSize:x="13px",fontWeight:v=400,hasError:T=!1,theme:w="totamjung",color:N,textAlign:C="left",...j}=n;return c.jsx(u4,{$width:Tn(l),$height:Tn(u),$borderWidth:d,$borderRadius:Tn(p),$horizontalPadding:Tn(g),$fontSize:Tn(x),$fontWeight:v,$hasError:T,$color:N,$totamjungTheme:w,$textAlign:C,spellCheck:!1,ref:i,...j})}),s1=99,a1=59,c1=/^\d+$/,d4=n=>c1.test(n)&&Number(n)>=0&&Number(n)<=s1,f4=n=>c1.test(n)&&Number(n)>=0&&Number(n)<=a1,p4=n=>{const{initHours:i,initMinutes:l,onChange:u}=n,[d,p]=S.useState(String(i)),[g,x]=S.useState(String(l));return S.useEffect(()=>{p(String(i)),x(String(l))},[i,l]),{hours:d,minutes:g,updateHours:C=>{const j=C.target.value;j.length>=3||p(j)},updateMinutes:C=>{const j=C.target.value;j.length>=3||x(j)},submitHours:()=>{if(!d4(d)||Number(d)===i){p(String(i));return}p(String(Number(d))),u(Number(d),Number(g))},submitMinutes:()=>{if(!f4(g)||Number(g)===l){x(String(l));return}x(String(Number(g))),u(Number(d),Number(g))}}},h4=n=>{const{hours:i,minutes:l,disabled:u,onChange:d}=n,{hours:p,minutes:g,updateHours:x,updateMinutes:v,submitHours:T,submitMinutes:w}=p4({initHours:i,initMinutes:l,onChange:d});return c.jsxs(l4,{children:[c.jsx("img",{src:Vg,width:"54px",height:"46px",alt:""}),c.jsx(Vt,{name:"hours",type:"number",width:60,height:46,min:0,max:s1,value:p,borderWidth:2,borderRadius:8,fontSize:26,fontWeight:800,color:z.color.GOLD,textAlign:"center",disabled:u,onChange:x,onBlur:T,"aria-label":"시간"}),c.jsx(pe,{type:"normal",as:"span",fontSize:16,width:30,children:"시간"}),c.jsx(Vt,{name:"minutes",type:"number",width:60,height:46,min:0,max:a1,value:g,borderWidth:2,borderRadius:8,fontSize:26,fontWeight:800,color:z.color.GOLD,textAlign:"center",disabled:u,onChange:v,onBlur:w,"aria-label":"분"}),c.jsx(pe,{type:"normal",as:"span",fontSize:16,width:30,children:"분"})]})},Ne=n=>typeof n=="object"&&n!==null,u1=n=>Ne(n)&&Object.keys(n).every(i=>!isNaN(Number(i))),g4=n=>Array.isArray(n)&&n.every(i=>typeof i=="number"),ul=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(n),Ja=n=>typeof n=="number"&&n%1===0&&n>=0&&n<=31,Fn=n=>Ja(n)&&n!==31,m4=n=>Ja(n)&&n!==0&&n!==31,v4=n=>typeof n=="string"&&["unrated","bronze","silver","gold","platinum","diamond","ruby"].includes(n),y4=n=>/^[1-9]\d*$/.test(n),_d=n=>/^\d+$/.test(n),ec=n=>{if(!(Ne(n)&&"problemTagLockDuration"in n&&"shouldHideTier"in n&&"shouldWarnHighTier"in n&&"warnTier"in n&&"algorithmHiderUsage"in n&&"problemTagLockUsage"in n&&Ne(n.problemTagLockDuration)&&"hours"in n.problemTagLockDuration&&"minutes"in n.problemTagLockDuration&&typeof n.problemTagLockDuration.hours=="number"&&typeof n.problemTagLockDuration.minutes=="number"&&typeof n.shouldHideTier=="boolean"&&typeof n.shouldWarnHighTier=="boolean"&&m4(n.warnTier)&&typeof n.algorithmHiderUsage=="string"&&["click","always"].includes(n.algorithmHiderUsage)&&typeof n.problemTagLockUsage=="string"&&["click","auto"].includes(n.problemTagLockUsage)))return!1;const{hours:i,minutes:l}=n.problemTagLockDuration;return i>=0&&i<100&&l>=0&&l<60&&i%1===0&&l%1===0},tc=n=>ec(n)&&"shouldRevealTierOnHover"in n&&typeof n.shouldRevealTierOnHover=="boolean",d1=n=>Ne(n)&&"expire"in n&&"hour"in n&&"minute"in n&&"problem"in n&&typeof n.expire=="number"&&typeof n.hour=="string"&&typeof n.minute=="string"&&typeof n.problem=="number"&&n.hour.length>=1&&n.hour.length<=2&&_d(n.hour)&&n.minute.length>=1&&n.minute.length<=2&&_d(n.minute)&&(n.problem>=1e3&&n.problem%1===0||n.problem===-1),x4=n=>{if(!(Ne(n)&&"font"in n&&"lock"in n&&"predict"in n&&"theme"in n&&typeof n.font=="string"&&typeof n.lock=="string"&&typeof n.predict=="string"&&typeof n.theme=="string"&&typeof n.lock=="string"&&["click","always"].includes(n.lock)&&typeof n.predict=="string"&&["click","always"].includes(n.predict)&&typeof n.theme=="string"&&["yes","no"].includes(n.theme)))return!1;if(n.font==="none")return!0;if(!/^font-\d+$/.test(n.font))return!1;const i=n.font.split("-")[1];if(!y4(i))return!1;const l=Number(i);return l>=1&&l<=19},A4=async()=>{const i=(await Ae.storage.local.get(B.HIDER_OPTIONS))[B.HIDER_OPTIONS];return tc(i)?i:X2},w4=n=>{tc(n)&&Ae.storage.local.set({[B.HIDER_OPTIONS]:n})},S4={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,shouldRevealTierOnHover:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},T4=()=>{const[n,i]=S.useState({...S4,isLoaded:!1});return S.useEffect(()=>{(async()=>{const T=await A4();i({...T,isLoaded:!0})})()},[]),S.useEffect(()=>{const{isLoaded:T,...w}=n;T&&w4(w)},[n]),{...n,updateProblemTagLockDuration:(T,w)=>{i(N=>N.isLoaded?{...N,problemTagLockDuration:{hours:T,minutes:w}}:N)},updateShouldHideTier:T=>{const w=T==="true";i(N=>N.isLoaded?{...N,shouldHideTier:w}:N)},updateShouldWarnHighTier:T=>{const w=T==="true";i(N=>N.isLoaded?{...N,shouldWarnHighTier:w}:N)},updateShouldRevealTierOnHover:T=>{const w=T==="true";i(N=>N.isLoaded?{...N,shouldRevealTierOnHover:w}:N)},updateWarnTier:T=>{i(w=>w.isLoaded?{...w,warnTier:T}:w)},updateAlgorithmHiderUsage:T=>{T!=="click"&&T!=="always"||i(w=>w.isLoaded?{...w,algorithmHiderUsage:T}:w)},updateProblemTagLockUsage:T=>{T!=="click"&&T!=="auto"||i(w=>w.isLoaded?{...w,problemTagLockUsage:T}:w)}}},E4=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,N4=h.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,R4=()=>{const{problemTagLockDuration:n,shouldHideTier:i,shouldWarnHighTier:l,shouldRevealTierOnHover:u,warnTier:d,algorithmHiderUsage:p,problemTagLockUsage:g,updateProblemTagLockDuration:x,updateShouldHideTier:v,updateShouldWarnHighTier:T,updateShouldRevealTierOnHover:w,updateWarnTier:N,updateAlgorithmHiderUsage:C,updateProblemTagLockUsage:j}=T4(),{hours:M,minutes:H}=n;return c.jsxs(E4,{children:[c.jsx(Nn,{title:"잠금 시간 설정",iconSrc:Ae.runtime.getURL("/lock.png")}),c.jsx(h4,{hours:M,minutes:H,onChange:x}),c.jsx(Nn,{title:"티어 가리개 설정",iconSrc:$2}),c.jsx(Pn,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:i?"true":i===void 0?"":"false",onChange:v}),c.jsx(Pn,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!i,options:[{label:"사용하지 않음",value:"false"},{label:c.jsxs(N4,{children:[c.jsx(i4,{selectedTier:d,onChange:N}),c.jsx(pe,{type:"semiPrimary",fontSize:16,children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:l?"true":"false",onChange:T}),c.jsx(Pn,{legend:"티어 아이콘에 마우스를 올릴 경우 난이도 공개하기",name:"shouldRevealTierOnHover",disabled:!i,options:[{label:"공개",value:"true"},{label:"공개하지 않음",value:"false"}],checkedValue:u?"true":"false",onChange:w}),c.jsx(Nn,{title:"기본 설정",iconSrc:c.jsx(pg,{})}),c.jsx(Pn,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:p??"",onChange:C}),c.jsx(Pn,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:g??"",onChange:j})]})},I4=h.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,k4=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,C4=n=>{const{show:i}=n;return i?c.jsxs(I4,{children:[c.jsxs(k4,{children:[c.jsx(Nn,{title:"알고 있는 알고리즘 관리하기",iconSrc:c.jsx(H2,{})}),c.jsx(o3,{})]}),c.jsx(R4,{})]}):null},j4=h.div`
  display: inline-block;
  position: relative;

  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};

  padding: ${({$padding:n})=>n};

  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,M4=h.div`
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
`,nc=n=>{const{width:i,height:l,padding:u,title:d,children:p}=n;return c.jsxs(j4,{$width:i,$height:l,$padding:u,children:[d!==""&&c.jsx(M4,{children:d}),p]})},D4=h.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,L4=h.span`
  font-size: ${({$fontSize:n})=>n}px;
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:n})=>n.color.LEMON};
  }
`,O4=h.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:n})=>n}px;
  height: ${({$fontSize:n})=>n}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,f1=n=>{const{href:i,fontSize:l,children:u}=n;return c.jsxs(D4,{href:i,target:"__blank",rel:"noopener",children:[c.jsx(L4,{$fontSize:l,children:u}),c.jsx(O4,{$fontSize:l,children:c.jsx(ag,{})})]})},b4=h.div`
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
`,G4=h.p`
  font-size: ${({$fontSize:n})=>n}px;

  color: ${({theme:n})=>n.color.LIGHT_RED};
`,p1=n=>{const{fontSize:i,errorMessage:l,height:u}=n;return c.jsx(b4,{$fontSize:i,$height:u,children:l!==""&&c.jsxs(c.Fragment,{children:[c.jsx(B2,{}),c.jsx(G4,{$fontSize:i,role:"alert",children:l})]})})},h1=h.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,g1=le`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};
  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
`,_4=h.div`
  ${g1}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${h1}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,H4=h.div`
  ${g1}

  bottom: 0;
`,z4=h.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:n})=>n.filter.DARK_ORANGE_FILTER};
`,B4=h.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,P4=h.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:n})=>n.color.ORANGE};
`,U4=h.p`
  font-size: 12px;
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,F4=n=>{const{selectedSlotNo:i,isLoaded:l,onClick:u}=n;return c.jsxs(h1,{type:"button","aria-label":`${i}번 슬롯에 추첨 생성하기`,onClick:u,disabled:!l,children:[c.jsxs(_4,{children:[c.jsx(z4,{src:Ae.runtime.getURL("/dice.png"),alt:""}),c.jsxs(B4,{children:[c.jsx(P4,{children:"추첨 생성"}),c.jsx(U4,{children:l?`슬롯 번호 − ${i}`:"로딩 중..."})]})]}),c.jsx(H4,{})]})},V4=h.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,m1=le`
  width: 50%;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:n})=>n.color.LIGHTER_BROWN};

  transition: 0.2s;
`,Y4=h.button`
  ${m1}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:n})=>n?le`
          border-color: ${({theme:i})=>i.color.MAGENTA};
          background-color: ${({theme:i})=>i.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:i})=>i.color.MAGENTA};

          color: ${({theme:i})=>i.color.WHITE};
        `:le`
          &:hover {
            border-color: ${({theme:i})=>i.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:i})=>i.color.MAGENTA};

            color: ${({theme:i})=>i.color.MAGENTA};
          }
        `}
`,$4=h.button`
  ${m1}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:n})=>n?le`
          border-color: ${({theme:i})=>i.color.AZURE_BLUE};
          background-color: ${({theme:i})=>i.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:i})=>i.color.AZURE_BLUE};

          color: ${({theme:i})=>i.color.WHITE};
        `:le`
          &:hover {
            border-color: ${({theme:i})=>i.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:i})=>i.color.AZURE_BLUE};

            color: ${({theme:i})=>i.color.AZURE_BLUE};
          }
        `}
`,W4=h.span`
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
`,Q4=n=>{const{mode:i,onClick:l}=n;return c.jsxs(V4,{children:[c.jsx(Y4,{type:"button",$isActivated:i==="easy",onClick:()=>{l("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),c.jsx($4,{type:"button",$isActivated:i==="manual",onClick:()=>{l("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),c.jsx(W4,{children:"OR"})]})},Z4=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,q4=h.div`
  display: flex;
  justify-content: space-around;
`,ma=31,K4=h.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,X4=h.div`
  width: 100%;
  height: 3px;

  background: ${({theme:n})=>`linear-gradient(to right, ${Array.from({length:ma}).map((i,l)=>Fn(l)?`${n.solvedAcTier[l]} ${l/ma*100}%, ${n.solvedAcTier[l]} ${(l+1)/ma*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,Hd=h.input`
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
`,J4=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(K4,{children:[c.jsx(X4,{}),c.jsx(Hd,{type:"range",min:0,max:30,value:i,"aria-label":"시작 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),g=Math.max(Number(p),l);Fn(p)&&Fn(g)&&u(p,g)}}),c.jsx(Hd,{type:"range",min:0,max:30,value:l,"aria-label":"끝 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),g=Math.min(Number(p),i);Fn(g)&&Fn(p)&&u(g,p)}})]})},ev=h.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,zd=h.img`
  width: 26px;
`,tv=h.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`,nv=n=>{const{startTier:i,endTier:l}=n;return c.jsxs(ev,{children:[c.jsx(zd,{src:Rn[i],alt:"",draggable:!1}),c.jsx(tv,{children:"~"}),c.jsx(zd,{src:Rn[l],alt:"",draggable:!1})]})},rv=h.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,Bd=(n,i)=>i==="bronze"?n.solvedAcTier.BRONZE:i==="silver"?n.solvedAcTier.SILVER:i==="gold"?n.solvedAcTier.GOLD:i==="platinum"?n.solvedAcTier.PLATINUM:i==="diamond"?n.solvedAcTier.DIAMOND:i==="ruby"?n.solvedAcTier.RUBY:n.color.GRAY,ov=h.li`
  width: 32px;
  height: 32px;
`,iv=h.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:n,$rank:i})=>Bd(n,i)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:n,$rank:i})=>`linear-gradient(to top, ${Bd(n,i)}70 0%, transparent 100%)`};
  }
`,lv=h.img`
  width: 16px;
`;h.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`;const sv={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},Pd={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},av=n=>{const{rank:i,onClick:l}=n;return c.jsx(ov,{children:c.jsx(iv,{type:"button",$rank:i,"aria-label":sv[i],onClick:()=>{l(Pd.START[i],Pd.END[i])},children:c.jsx(lv,{src:Xa[i],alt:""})})})},cv=["unrated","bronze","silver","gold","platinum","diamond","ruby"],uv=n=>{const{onClick:i}=n;return c.jsx(rv,{children:cv.map(l=>c.jsx(av,{rank:l,onClick:i},l))})},dv=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(Z4,{children:[c.jsx(J4,{startTier:i,endTier:l,onChange:u}),c.jsxs(q4,{children:[c.jsx(nv,{startTier:i,endTier:l}),c.jsx(uv,{onClick:u})]})]})},fv=h.ul`
  display: flex;
  justify-content: space-between;

  width: 210px;
  height: 18px;

  user-select: none;
`,pv=h.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 70px;
  height: 18px;
`,hv=gt`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,gv=h.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${hv} 0.15s forwards;
  }
`,mv=h.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:n,$isSelected:i})=>i?n.color.GOLD:n.color.LIGHT_GRAY};
`,vv=[{operator:"OR",description:"OR: 선택된 알고리즘 분류 중 하나 이상 포함되는 문제들만 추첨에서 등장합니다."},{operator:"AND",description:"AND: 선택된 알고리즘 분류 모두를 포함하는 문제들만 추첨에서 등장합니다."},{operator:"NOR",description:"NOR: 선택된 알고리즘 분류 모두를 포함하지 않는 문제들만 추첨에서 등장합니다."}],yv=n=>{const{selectedOperator:i,onClick:l}=n;return c.jsx(fv,{children:vv.map(({operator:u,description:d})=>c.jsxs(pv,{children:[u===i&&c.jsx(gv,{children:c.jsx(Io,{})}),c.jsx(mv,{type:"button",title:d,"aria-label":`알고리즘 검색 옵션을 ${u}로 설정하기`,$isSelected:u===i,onClick:()=>{l(u)},children:u})]},u))})},xv=h.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:n,$isOpen:i})=>i&&le`
      & > ul {
        border-color: ${n.color.LEMON};
        box-shadow: 0 0 12px ${n.color.GOLD}70;
      }
    `}
`,v1=le`
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
`,Av=h.ul`
  ${v1}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,wv=h.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:n})=>!n&&le`
      opacity: 0;
    `}

  ${({theme:n,$isOpen:i})=>i&&le`
      border-color: ${n.color.LEMON};
      outline: 3px solid ${n.color.LEMON}70;
    `}
`,Sv=h.ul`
  ${v1}

  position: absolute;

  height: ${({$isOpen:n})=>n?"90px":"64px"};

  transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,Tv=h.li`
  display: inline-block;

  height: 26px;
`,Ev=h.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Nv=h.p`
  overflow: hidden;

  color: ${({theme:n})=>n.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Rv=h.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LEMON};
  }
`,Ud=n=>{const{id:i,name:l,mode:u,onClick:d}=n;return c.jsx(Tv,{children:c.jsxs(Ev,{type:"button","aria-label":u==="add"?`${l}을 검색에 포함할 알고리즘 목록에 추가하기`:`${l}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{d(i)},children:[c.jsx(Nv,{children:l}),u==="delete"&&c.jsx(Rv,{children:c.jsx(ug,{})})]})})},y1=0,Iv=30,kv=31,x1=1e3,A1=99999,w1=500,To=300,Ga=5,Eo=30,Cv=/^\w{3,20}$/,Bi=1e8,Fd=/^([1-9][0-9]*|0)$/,Wn=512,tl=50,jv=5,Mv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,[u,d]=S.useState(!1),[p,g]=S.useState(""),x=S.useRef(null),v=S.useRef(null),T=M=>{g(M.target.value)},w=i.length<Ga?Z2(p).filter(({id:M})=>!i.includes(M)).map(({id:M})=>M):[],N=M=>{if(M.key==="Enter"){if(w.length===0)return;l([...i,w[0]]),g("")}if(M.key==="Backspace"){if(p!=="")return;l(i.slice(0,-1))}},C=M=>{l([...i,M]),g("")},j=M=>{l(i.filter(H=>H!==M))};return S.useEffect(()=>{const M=x.current,H=v.current;if(!M||!H)return;const U=Q=>{const F=Q.target;!F||!(F instanceof Node)||d(M.contains(F))},te=()=>{document.activeElement!==document.body&&d(M.contains(document.activeElement))},Z=()=>{H.focus()};return document.addEventListener("mousedown",U),document.addEventListener("focusin",te),document.addEventListener("focusout",te),M.addEventListener("click",Z),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("focusin",te),document.removeEventListener("focusout",te),M.removeEventListener("click",Z)}},[x,v]),{isOpen:u,inputValue:p,searchedAlgorithmIds:w,updateInputValue:T,processActionIfKeyPress:N,addAlgorithmId:C,deleteAlgorithmId:j,containerRef:x,inputRef:v}},Dv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,{isOpen:u,inputValue:d,searchedAlgorithmIds:p,updateInputValue:g,processActionIfKeyPress:x,addAlgorithmId:v,deleteAlgorithmId:T,containerRef:w,inputRef:N}=Mv({selectedAlgorithmIds:i,onChange:l});return c.jsxs(xv,{ref:w,$isOpen:u,tabIndex:-1,children:[c.jsx(Av,{tabIndex:-1,children:c.jsxs(c.Fragment,{children:[i.map(C=>{const j=So.find(({id:H})=>H===C),M=j?j.name:"";return c.jsx(Ud,{mode:"delete",id:C,name:M,onClick:T},C)}),c.jsx(wv,{ref:N,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:u,value:d,onChange:g,onKeyDown:x})]})}),c.jsx(Sv,{$isOpen:u,tabIndex:-1,children:p.map(C=>{const j=So.find(({id:H})=>H===C),M=j?j.name:"";return c.jsx(Ud,{mode:"add",id:C,name:M,onClick:v},C)})})]})},Lv=n=>typeof n=="string"&&["ko","en","ko/en","all"].includes(n),Ov=n=>Ne(n)&&"mode"in n&&"title"in n&&"handle"in n&&"solvedMin"in n&&"solvedMax"in n&&"language"in n&&"startTier"in n&&"endTier"in n&&"searchOperator"in n&&"algorithmIds"in n&&"customQuery"in n&&typeof n.mode=="string"&&["easy","manual"].includes(n.mode)&&typeof n.title=="string"&&typeof n.handle=="string"&&typeof n.language=="string"&&typeof n.solvedMin=="string"&&typeof n.solvedMax=="string"&&g4(n.algorithmIds)&&Fn(n.startTier)&&Fn(n.endTier)&&typeof n.searchOperator=="string"&&["OR","AND","NOR"].includes(n.searchOperator)&&typeof n.customQuery=="string",bv=n=>{const{mode:i,title:l,handle:u,solvedMin:d,solvedMax:p,startTier:g,endTier:x,algorithmIds:v,customQuery:T}=n,w=i==="easy"?[Vd(l),Gv(u),_v(d,p),Hv(g,x),zv(v)]:[Vd(l),Bv(T)];for(let N=0;N<w.length;N++){const C=w[N];if(!C.isValid)return C}return{isValid:!0}},Vd=n=>n.length>Eo?{isValid:!1,errorMessage:`추첨 이름은 ${Eo}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},Gv=n=>n.trim()===""?{isValid:!0}:n.length<3||n.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:Cv.test(n)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},_v=(n,i)=>{const l=Number(n),u=Number(i),d=n.trim()==="",p=i.trim()==="";return!d&&!Fd.test(n)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!p&&!Fd.test(i)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!d&&l>Bi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Bi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!p&&u>Bi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Bi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!d&&!p&&l>u?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Hv=(n,i)=>{const l=Number(n),u=Number(i);return l>u?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},zv=n=>n.length>Ga?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${Ga.toLocaleString()}개 이하여야 해요.`}:n.every(l=>typeof l=="number"&&l%1===0&&l>=1&&l<=Q2)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Bv=n=>n.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:n.length>Wn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Wn}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Pv=n=>{const{mode:i,handle:l,solvedMin:u,solvedMax:d,language:p,startTier:g,endTier:x,searchOperator:v,algorithmIds:T,customQuery:w}=n;if(i==="manual")return w.replace(/\n/g," ").trim();const N=Vv(T),C=Yv(p),j=$v(v),M=l.trim()!=="",H=N.length>0,U=M?`~@${l} `:"",te=Uv(u,d),Z=C===""?"":`${C} `,Q=Fv(g,x),F=H?N.length===1?N[0]:`(${j==="~"?"~":""}${N.join(j)})`:"";return`(*0&!s?|!*0) o? -w? ${U}${te}${Z}${Q}${F}`.trim()},Uv=(n,i)=>n.trim()===""&&i.trim()===""?"":n===i?`s#${n} `:`s#${n}..${i} `,va=["b","s","g","p","d","r"],Fv=(n,i)=>{if(n===0&&i===30)return"";if(n%5===1&&n+4===i)return`*${va[Math.floor(n/5)]} `;if(n%5===1&&i%5===0){const l=va[Math.floor(n/5)],u=va[Math.floor(i/5)-1];return`*${l}..${u} `}return n===i?`*${n} `:`*${n}..${i} `},Vv=n=>{const i=[];return n.forEach(l=>{var d;const u=(d=So.find(p=>p.id===l))==null?void 0:d.tag;u&&i.push(`#${u}`)}),i},Yv=n=>{switch(n){case"ko":return"%ko";case"en":return"(%en~%ko~%ja~%sv)";case"ko/en":return"(%ko|(%en~%ja~%sv))";default:return""}},$v=n=>{switch(n){case"OR":return"|";case"AND":return"&";default:return"~"}},Yd={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Wv=n=>{const{selectedSlotNo:i,onSubmit:l}=n,[u,d]=S.useState(Yd),[p,g]=S.useState(""),[x,v]=S.useState(void 0),{mode:T,title:w,handle:N,solvedMin:C,solvedMax:j,language:M,startTier:H,endTier:U,searchOperator:te,algorithmIds:Z,customQuery:Q}=u,F=S.useRef(null),ne=S.useRef(null),q=S.useRef(null),$=S.useRef(null),ye=S.useRef(null);return{mode:T,title:w,handle:N,solvedMin:C,solvedMax:j,language:M,startTier:H,endTier:U,searchOperator:te,algorithmIds:Z,customQuery:Q,errorMessage:p,errorElementName:x,setMode:se=>{d(G=>({...G,mode:se})),g(""),v(void 0)},setRandomDefenseInputValue:se=>{const{name:G,value:Y}=se.target;G in Yd&&d(P=>({...P,[G]:Y}))},setLanguage:se=>{Lv(se)&&d(G=>({...G,language:se}))},setTierRange:(se,G)=>{d(Y=>({...Y,startTier:se,endTier:G}))},setSearchOperator:se=>{d(G=>({...G,searchOperator:se}))},setAlgorithmIds:se=>{d(G=>({...G,algorithmIds:se}))},setCustomQuery:se=>{d(G=>({...G,customQuery:se}))},submitRandomDefense:()=>{var Y,P,E,D,ee;if(!Ov(u))return;const se=bv(u);if(se.isValid){const re=u.title.trim()===""?`추첨 ${i}`:u.title,ce=Pv(u);l(re,ce),g(""),v(void 0);return}switch(g(se.errorMessage),v(se.focusElementName),se.focusElementName){case"title":(Y=F.current)==null||Y.select();break;case"handle":(P=ne.current)==null||P.select();break;case"solvedMin":(E=q.current)==null||E.select();break;case"solvedMax":(D=$.current)==null||D.select();break;case"customQuery":(ee=ye.current)==null||ee.select();break}},titleRef:F,handleRef:ne,solvedMinRef:q,solvedMaxRef:$,customQueryRef:ye}},Qv=h.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,Zv=h.div`
  position: absolute;
  top: -32px;
  right: 0;
`,qv=h.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,$d=h.div`
  display: flex;
  column-gap: ${({$columnGap:n})=>n||0};

  width: 100%;
`,ya=h.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,Pi=h.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,Kv=h.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Xv=h.div`
  display: flex;
  justify-content: center;
`,Jv=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,ey=h.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,ty=h.div`
  overflow: visible;
  position: relative;

  width: ${({$width:n})=>n};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,ny=h.button`
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

  ${({theme:n,$isActivated:i})=>i?le`
          border: 1.5px solid ${n.color.LEMON};
          box-shadow: 0 0 12px ${n.color.GOLD}70;
        `:le`
          border: 1.5px solid ${n.color.LIGHTER_BROWN};
        `}
`;h.img`
  width: 12px;
  height: auto;
`;const Wd=h.p`
  font-size: 14px;
  color: ${({theme:n})=>n.color.WHITE};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,ry=h.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,oy=h.ul`
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
`,iy=h.li`
  padding: 2px;
`,ly=h.button`
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
`,sy=h.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,ay=n=>{var C;const{options:i,selectedValue:l,width:u,ariaLabel:d,onChange:p}=n,{selectedValue:g,updateSelectedValue:x,isSelectOpen:v,openSelect:T,containerRef:w}=o1({initSelectedValue:l,onChange:p}),N=((C=i.find(({value:j})=>j===g))==null?void 0:C.label)??"";return c.jsxs(ty,{ref:w,$width:u,role:"combobox",children:[c.jsxs(ny,{type:"button","aria-label":d,"aria-haspopup":"listbox","aria-expanded":v,onClick:T,$isActivated:v,children:[c.jsx(Wd,{$isBold:!0,children:N}),c.jsx(ry,{children:c.jsx(U2,{})})]}),c.jsx(oy,{$isOpen:v,role:"listbox","aria-labelledby":d,children:i.map(({label:j,value:M})=>c.jsx(iy,{role:"option","aria-selected":M===g,children:c.jsxs(ly,{type:"button",onClick:()=>{x(M)},children:[c.jsx(Wd,{$isBold:M===g,children:j}),M===g&&c.jsx(sy,{children:c.jsx(Io,{})})]})},M))})]})},cy=n=>Ne(n)&&"autocomplete"in n&&"tags"in n&&uy(n.autocomplete)&&fy(n.tags),uy=n=>Array.isArray(n)&&n.every(i=>dy(i)),dy=n=>Ne(n)&&"caption"in n&&"description"in n&&typeof n.caption=="string"&&typeof n.description=="string",fy=n=>Array.isArray(n)&&n.every(i=>py(i)),py=n=>Ne(n)&&"caption"in n&&"name"in n&&typeof n.caption=="string"&&typeof n.name=="string",hy=async n=>{try{const i=await fetch(`https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(n)}`,{headers:{"x-solvedac-language":"ko"}});if(!i.ok)return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."};const l=await i.json();return cy(l)?{success:!0,suggestions:gy(l)}:{success:!1,errorMessage:"예기치 못한 오류가 발생했습니다. 개발자에게 이 버그를 제보해주세요."}}catch{return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."}}},gy=n=>{const{autocomplete:i,tags:l}=n;return[...i.filter(({description:d})=>d!==""),...l.map(({name:d,caption:p})=>({caption:p,description:d}))].slice(0,jv)},my=["*","tier:","id:","s#","solved:","#","tag","/","from:","t#","average_try:","µ#","%","lang:","@","solved_by:","o@","solved_by_org","t@","tried_by:","v@","voted_by:","c@","contributed_by:","c/","in_class:","e/","in_class_essentials:","s?","standard:","p?","sprout:","sp?","o?","solvable:","v?","votable:","c?","contributable:","w?","warning:","v#","voted:","c#","contributed:","**","vote_average:","a*","µ*"],vy=/^[A-z가-힣 ]+$/,yy=["|","&","(",")","!","~","-"," "],xy=n=>{if(vy.test(n))return 0;for(let i=n.length-1;i>=0;i-=1)if(yy.includes(n[i]))return i+1;return 0},Ay=(n,i)=>{const l=xy(n);return`${n.slice(0,l)}${i}${my.includes(i)?"":" "}`},wy=n=>{const{value:i,textareaRef:l,onChange:u}=n,[d,p]=S.useState([]),[g,x]=S.useState("잠시만 기다려주세요..."),v=S.useRef(i),T=S.useRef(!1);S.useEffect(()=>{if(v.current=i,T.current)return;T.current=!0;const j=async()=>{const M=await hy(v.current);if(M.success){p(M.suggestions),x(null);return}p([]),x(M.errorMessage)};setTimeout(()=>{T.current=!1,j()},200)},[i]);const w=j=>{const M=j.target.value.replace(/\n/g,"");u(M)},N=j=>{var H;const M=Ay(i,j.caption);u(M),l&&"current"in l&&((H=l.current)==null||H.focus())};return{suggestions:d,fallbackMessage:g,textareaRef:l,updateQuery:w,applySuggestion:N,applyFirstSuggestionIfEnterKeyPressed:j=>{j.code==="Enter"&&d.length>0&&!j.nativeEvent.isComposing&&N(d[0])}}},Sy=h.div`
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
      ${({theme:n,$hasError:i})=>i1(i?n.color.RED:n.color.LEMON,.5)};
  }

  transition: outline 0.05s;
`,Ty=h.textarea`
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
`,_a=h.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  column-gap: 20px;
  flex-wrap: wrap;

  width: 100%;
  height: 48px;

  padding: 4px 6px;
`,Ha=h.div`
  display: inline-flex;

  width: auto;
  height: 20px;
`,S1=h.button`
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
`,Ey=h.div`
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

  ${_a}:not(:has(:focus-visible)) ${Ha}:first-child & {
    opacity: 0.6;
  }

  ${_a} ${Ha} ${S1}:focus-visible + & {
    opacity: 1;
  }
`,T1=S.forwardRef((n,i)=>{const{width:l,height:u,value:d,placeholder:p,hasError:g=!1,onChange:x}=n,{suggestions:v,fallbackMessage:T,updateQuery:w,applySuggestion:N,applyFirstSuggestionIfEnterKeyPressed:C}=wy({value:d,textareaRef:i,onChange:x});return c.jsxs(Sy,{$width:Tn(l),$height:Tn(u),$hasError:g,children:[c.jsx(Ty,{value:d,onChange:w,onKeyDown:C,ref:i,placeholder:p,minLength:1,maxLength:Wn,spellCheck:!1}),c.jsx(_a,{tabIndex:-1,children:T?c.jsx(pe,{as:"span",type:"gray",fontSize:13,children:T}):v.length===0?c.jsx(pe,{as:"span",type:"gray",fontSize:13,children:"자동완성 결과가 없습니다."}):v.map(j=>c.jsxs(Ha,{children:[c.jsx(S1,{title:j.description,type:"button",onClick:()=>N(j),children:j.caption}),c.jsx(Ey,{children:c.jsx(Ng,{})})]},j.caption))})]})}),Ny=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],Ry=n=>{const{selectedSlotNo:i,isLoaded:l,onSubmit:u}=n,{mode:d,title:p,handle:g,solvedMin:x,solvedMax:v,language:T,startTier:w,endTier:N,searchOperator:C,algorithmIds:j,customQuery:M,errorMessage:H,errorElementName:U,setMode:te,setRandomDefenseInputValue:Z,setLanguage:Q,setTierRange:F,setSearchOperator:ne,setAlgorithmIds:q,setCustomQuery:$,submitRandomDefense:ye,titleRef:_e,handleRef:Le,solvedMinRef:qe,solvedMaxRef:Ke,customQueryRef:He}=Wv({selectedSlotNo:i,onSubmit:u});return c.jsx(nc,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:c.jsxs(Qv,{children:[c.jsx(Zv,{children:c.jsx(p1,{errorMessage:H,fontSize:14})}),c.jsx(qv,{children:c.jsx(Q4,{mode:d,onClick:te})}),c.jsxs(ya,{$width:"380px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"추첨 이름"}),c.jsx(Vt,{ref:_e,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"0 ~ 30자","aria-label":"추첨 이름",name:"title",value:p,maxLength:30,hasError:U==="title",onChange:Z})]}),d==="easy"?c.jsxs(c.Fragment,{children:[c.jsxs($d,{$columnGap:"50px",children:[c.jsxs(ya,{$width:"190px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"검색에서 제외할 닉네임"}),c.jsx(Vt,{ref:Le,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"3 ~ 20자","aria-label":"검색에서 제외할 닉네임",name:"handle",value:g,minLength:3,maxLength:20,hasError:U==="handle",onChange:Z})]}),c.jsxs(Pi,{$width:"166px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"맞은 사람 수"}),c.jsxs(Kv,{children:[c.jsx(Vt,{ref:qe,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 하한",name:"solvedMin",value:x,hasError:U==="solvedMin",onChange:Z}),c.jsx(pe,{type:"primary",fontSize:16,children:"~"}),c.jsx(Vt,{ref:Ke,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 상한",name:"solvedMax",value:v,hasError:U==="solvedMax",onChange:Z})]})]}),c.jsxs(Pi,{$width:"190px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"문제 언어"}),c.jsx(ay,{options:Ny,selectedValue:T,width:"130px",ariaLabel:"문제 언어 고르기",onChange:Q})]})]}),c.jsxs(Pi,{$width:"100%",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"난이도 범위"}),c.jsx(Xv,{children:c.jsx(dv,{startTier:w,endTier:N,onChange:F})})]}),c.jsxs(Pi,{$width:"446px",children:[c.jsxs($d,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"검색에 포함할 알고리즘"}),c.jsx(yv,{selectedOperator:C,onClick:ne})]}),c.jsx(Dv,{selectedAlgorithmIds:j,onChange:Pe=>{q(Pe)}})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs(ya,{$width:"100%",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"쿼리"}),c.jsx(T1,{ref:He,width:"100%",height:"160px",value:M,placeholder:`1 ~ ${Wn}자`,hasError:U==="customQuery",onChange:$})]}),c.jsxs(Jv,{children:[c.jsxs(pe,{type:"normal",fontSize:14,children:[c.jsx(f1,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),c.jsx(pe,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]})]}),c.jsx(ey,{children:c.jsx(F4,{isLoaded:l,selectedSlotNo:i,onClick:ye})})]})})},Iy=h.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,ky=h.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,Cy=h.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,jy=h.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,My=h.li`
  width: 26px;
  height: 26px;
`,Dy=h.button`
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

  ${({theme:n,$isSelected:i,$isOccupied:l})=>{if(i)return le`
        border-color: ${n.color.LEMON};
        background-color: ${n.color.LEMON};
        outline: 3px solid ${n.color.LEMON}70;

        color: ${n.color.DARK_BROWN};
      `;if(l)return le`
        border-color: ${n.color.GOLD};

        color: ${n.color.GOLD};
      `}}
`,Ly=[1,2,3,4,5,6,7,8,9,0],Oy=n=>{const{selectedSlotNo:i,occupiedSlotNos:l,onChange:u}=n;return c.jsx(jy,{children:Ly.map(d=>c.jsx(My,{children:c.jsx(Dy,{$isSelected:d===i,$isOccupied:l.includes(d),onClick:()=>{u(d)},"aria-label":`${d}번 슬롯 선택하기. ${d===i?"이미 선택되어 있는 슬롯입니다":""}`,children:d})},d))})},by=h.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,Gy=h.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,_y=h.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,Qd=h.span`
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
`,Hy=h.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 16px;
`,zy=h.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 14px;
`,E1=le`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,By=h.div`
  ${E1}

  white-space: nowrap;
`,Py=h.div`
  ${E1}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,Uy=n=>c.jsxs(by,{children:[c.jsxs(Gy,{children:[c.jsx(Qd,{$backgroundColor:"gold",children:"추첨 이름"}),c.jsx(By,{children:n.isEmpty?c.jsx(Hy,{children:"(비어 있음)"}):c.jsx(pe,{type:"primary",fontSize:16,children:n.title})})]}),c.jsxs(_y,{children:[c.jsx(Qd,{$backgroundColor:"white",children:"쿼리"}),c.jsx(Py,{children:n.isEmpty?c.jsx(zy,{children:"(비어 있음)"}):c.jsx(pe,{type:"code",fontSize:13,children:n.query})})]})]}),Fy=h.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,Vy=h.button`
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
`,Yy=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,$y=(n,i)=>n?n==="F2"?`단축키: F2 + ${i}`:`단축키: ${Yy?"Option":"Alt"} + ${i}`:"단축키: 미사용",Wy=n=>{const{selectedSlotNo:i,hotkey:l,onClick:u}=n;return c.jsxs(Fy,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:$y(l,i)}),c.jsx(Vy,{"aria-label":"단축키 전환하기",onClick:u,children:c.jsx(dg,{})})]})},Qy=[1,2,3,4,5,6,7,8,9,0],Zy=n=>{const{quickSlotsInfo:i,isLoaded:l,onHotkeyChange:u,onSlotChange:d,onSlotDelete:p,onSlotNoChange:g}=n,{selectedSlotNo:x,slots:v,hotkey:T}=i,[w,N]=S.useState(!1),[C,j]=S.useState(0),M=()=>{if(l){if(T===null){u("Alt");return}if(T==="Alt"){u("F2");return}u(null)}},H=()=>{const q=[];return Qy.forEach($=>{v[$].isEmpty||q.push($)}),q},U=()=>{N(!0)},te=()=>{N(!1)},Z=(q,$)=>{if(!l)return;const ye=q.trim()===""?`추첨 ${x}`:q;d(ye,$),te()},Q=()=>{l&&p()},F=q=>{g(q)};return{slot:v[x],selectedSlotNo:x,hotkey:T,occupiedSlotNos:H(),gachaProblemCount:C,shouldEditModalShow:w,switchHotkey:M,openEditModal:U,closeEditModal:te,updateSlot:Z,deleteSlot:Q,setSelectedSlotNo:F,setGachaProblemCount:j}},qy=(n,i)=>n.length>Eo?{isValid:!1,errorMessage:`추첨 이름의 길이가 너무 길어요. ${Eo}자 이하가 되도록 줄여 주세요.`,focusElementName:"title"}:i.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:i.length>Wn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Wn}자 이하가 되도록 줄여 주세요.`,focusElementName:"query"}:{isValid:!0},Ky=n=>{const{initTitle:i,initQuery:l,onSlotChange:u}=n,[d,p]=S.useState(i),[g,x]=S.useState(l),[v,T]=S.useState(""),[w,N]=S.useState(void 0),C=S.useRef(null),j=S.useRef(null);return S.useEffect(()=>{p(i),x(l),T(""),N(void 0)},[i,l]),{title:d,query:g,errorMessage:v,isTitleElementHasErrors:w==="title",isQueryElementHasErrors:w==="query",setQuery:x,setTitle:p,submitSlotInfo:()=>{const te=qy(d,g);if(te.isValid){u(d,g),T("");return}const Z=C.current,Q=j.current,{focusElementName:F}=te;F==="title"&&(Z==null||Z.select()),F==="query"&&(Q==null||Q.select()),N(F),T(te.errorMessage)},titleRef:C,queryRef:j}},Xy=h.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 320px;
`,Zd=h.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,Jy=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`,ex=n=>{const{title:i,query:l,open:u,onClose:d,onSlotChange:p}=n,{title:g,query:x,errorMessage:v,isTitleElementHasErrors:T,isQueryElementHasErrors:w,setQuery:N,setTitle:C,submitSlotInfo:j,titleRef:M,queryRef:H}=Ky({initTitle:i,initQuery:l,onSlotChange:p});return c.jsxs(Qn,{title:"추첨 수정",open:u,onClose:d,children:[c.jsxs(Xy,{children:[c.jsxs(Zd,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"추첨 이름"}),c.jsx(Vt,{type:"text",width:"100%",height:"30px",name:"title",value:g,ref:M,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:T,"aria-label":"새로운 추첨 이름을 입력해주세요",onChange:U=>{C(U.target.value)}})]}),c.jsxs(Zd,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"쿼리"}),c.jsx(T1,{width:"100%",height:"150px",value:x,ref:H,hasError:w,placeholder:"새로운 쿼리를 입력해주세요",onChange:N})]}),c.jsxs(Jy,{children:[c.jsxs(pe,{type:"normal",fontSize:14,children:[c.jsx(f1,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),c.jsx(pe,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]}),c.jsx(p1,{fontSize:14,errorMessage:v})]}),c.jsxs(ko,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(No,{}),color:z.color.LIGHT_GRAY,disabled:!1,onClick:d}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(Ro,{}),color:z.color.GOLD,disabled:!1,onClick:j})]})]})},tx=gt`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`,nx=gt`
  0% {
   opacity: 0.3;
  }
  
  50% {
    opacity: 1;
  }

  100% {
   opacity: 0.3;
  }
`,rx=gt`
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
`,ox=gt`
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
`,ix=gt`
  from {
    pointer-events: none;
    opacity: 0;
  }

  to {
    pointer-events: auto;
    opacity: 1;
  }
`,lx=h.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 550px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${Xg});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }

  &,
  & * {
    font-family: Pretendard;
  }
`,qd=h.div`
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

  ${({$align:n})=>n==="left"?le`
          left: 20px;
        `:le`
          right: 20px;
        `};
`,Kd=h.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,N1=le`
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
`,sx=h.button`
  ${N1}

  & > img {
    height: 70%;

    filter: ${({theme:n})=>n.filter.LIGHT_GRAY_FILTER};
  }
`,ax=h.button`
  ${N1}

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_GRAY};
  }
`,cx=h.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,ux=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,dx=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,fx=h.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`,px=h.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_RED};
  }
`,hx=h.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({theme:n})=>n.color.LIGHT_RED};
  text-align: center;
`,gx=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,Xd=h.li`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  word-break: break-all;
`,xa=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;
`,mx=h.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`,vx=h.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.WHITE};
  }

  animation: ${tx} 3s linear infinite;
`,Jd=h.div`
  display: flex;
  column-gap: 8px;
`,yx=h.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};

  animation: ${nx} 2s linear infinite;
`,xx=h.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100%;
`,Ax=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,wx=h.div`
  width: 25px;
  height: 25px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.PURE_WHITE};
  }

  animation: ${rx} 1.5s infinite;
`,Sx=h.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.WHITE};
`,Tx=h.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,Ex=h.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 60px 20px 20px 20px;

  opacity: 0;
  animation: ${ox} cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s 0.3s forwards;
`,Nx=h.div`
  position: absolute;
  left: 0;
  bottom: 65px;

  width: 100%;
  height: 20px;
`,Rx=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;

  opacity: 0;
  pointer-events: none;
  animation: ${ix} 0.3s 1s forwards;
`,Ix="/assets/unrated-card-iGk2lhrr.png",kx="/assets/bronze-card-Ctc25mzn.png",Cx="/assets/silver-card-Cgb8QXRF.png",jx="/assets/gold-card-DjMsoKXy.png",Mx="/assets/platinum-card-CZ601BWQ.png",Dx="/assets/diamond-card-Eub_to2I.png",Lx="/assets/ruby-card--BnHlKWe.png",Ox="/assets/hidden-card-BS-zY2RF.png",bx="/assets/card-box-front-black-Bn2hoJwG.png",Gx="/assets/card-box-front-red-CP52fAYR.png",_x="/assets/card-box-front-green-CaU66ZRJ.png",Hx="/assets/card-box-front-blue-BM7ozDKr.png",zx="/assets/card-box-front-gold-as3E5etT.png",Bx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgKRT1kAAAOJSURBVHic7d0xchNJFMbx1z1VMolLE26VPa4mIzQ3gBuwN+AGcAM22xBu4CPADSAkg802Q5Tt3FYozeveRHaxxmBNv+6xLP1/mV0186YUdM1rff3kZGRd170UkZOx6wK4d3+enp5+GLOgG7NYCCGo6hcRacesC2AjXDRN83Q2m83GKujHKiQioqpvhcUN2FWtqo7avTVjFTo6OnotIq/HqgdgI4W2bS8vLy8/j1FslBb14ODg2Hv/UXh7AyAiMcan5+fnX2vXqd6ihhDapmlOhMUNwMrqhad+ndoFVPVNSum4dh0AD0rbdd372kWq7sF1XfdCRN7VrAHgwXoynU7/mc/n/9YqUG0PLoTQquo3oTUF8GtVoyPVWtTV18FtrfsD2ApVoyNVWlQiIQAGqBYdKd6icloBQI4a0ZGiLepq343WFMBg3vvi36oWXeD6vn8lIs9K3hPAzghd1xXdjyvWoh4eHj5zzr2XzLe3lJIsFgtJKZV6JAD3xDknk8lEnBu+xKSUnp+dnX0q8hwlbhJCaGOMHy2B3sViITHGEo8DYAN472UymeRcetE0zePZbHZhfgbrDUTspxX6vmdxA7ZMjFH6vs+5tFXVIvtx5pjIKhLyV+71KaXcDwHAhosxStM0Oa1qKHHKwdSiWiMhKSVZLpe8vQFbzDkne3t7OZeaTzmYWlTrAEtVZXEDttzVi0yGNsZoalWzW1TraQVDfw7ggUkpifc+p1X9w3LKIatFtQ6wJBIC7B5LdCT3lMPgFrXEAEtVZXEDdoyhVc0ekDl4gbNGQlSV1hTYUTHG3H33rAGZg/bgrAMsLSs4gO1giI4MHpC5doUSAyw5rQBAZLzoyNotqnVKCKcVAFwxBPwHDchcq0W1RkI4rQDgJssph3WjI3femUgIgFoMrepa0ZHftqghhNZ7bz6twOIG4DZXL0A51hmQ+dsFzjrAktMKAO5iiI6Eu6Ijv9yDWw2wfCcij3IqEwkBsK5a0ZFb78YASwBjqzEg89YWVVVPGGAJYEw1BmT+1KISCQFwX4wDMr/P5/OvP/7zf3dhgCWA+2Y55RBjfP5jdOS6RS3xm6YMsARgZYiOtDejI9cLXIzxpRgjIaqaezkAXDNGR95e/eFEOK0AYPOU+G1VX2KA5XK5ZHEDUJQlS7v6EXpp9vf3/xaRF7kP0fc9rSmAKlJK4pwT7wfP5n00nU6P/wNvYiJR2sRuggAAAABJRU5ErkJggg==",Px="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2NWJjNmE2LTdhYjMtNGQ0Ny1hYTI1LWIxYzQ5NmFkZDI5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3ZDViNDA4LWNmNzUtNmE0Yy04ODgyLWQwZWI3MmNjMTdkZCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjViYzZhNi03YWIzLTRkNDctYWEyNS1iMWM0OTZhZGQyOTYiIHN0RXZ0OndoZW49IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46OB6bAAAD0UlEQVR4nO3dS24bRxCA4eomQSm72dsjTG4g7wLJAkY3kG+gnMC6QY6gI+gI9g0swE6QXXKDEKC91zKa6e7KwqRhO9ZjuqebFPl/OwkY1mhT6GpWlYyswUldX6rIxTpiA1iLtx8Wi1clA6qqmJIBRUSO6vrcilyVjgtgvYzIq/eLxdtS8YonuF+appl6/5eIVCXjAtgIN24yefHnfD4vEUxVxZYItDL1/lJIbsCuqqbeF63eiiW444ODCxE5KxUPwEZql7mgiCIl6tGzZ4fW2nfC6Q2AiIQQXvzx6dPfOWMUKVHbpqnsZHIlJDcAS8sDT/44uQN4738T1cPccQA8KdXLun6TO0jWEvWkrs9UJPsfAeBpytk6krVNpG2aynn/j1CaArhbttaRrHdw7vPXwVWuzwewFbK2jmRJcLSEABggW+vI6CUq0woAYozdOjJ6ido2zeq4WY35uQC2n7F29C8kp2N+mHPutRjTxjzrQ5DbrhvzdQCsyd5sJhM77PxkRJrjur76fbH4daz3GK1Effn8eSvGvJGI05uqyr9dJ6o61usAWCNjjOzNZmJNRIpRPf3w8eN16juM1ibSNk3lQngX29B723XiQxjjVQBsCGut7M9mMY/eTCeTn6/n85uU+KPdwaVMKzjnSG7AFgohiHMu5tHKeT/KfVxygjs+OLiI3c4bVKX3PvUVAGyozjkJcVdP7Uldn6XGTypRU1pCVFVu+14Cpzdgq1ljZH9vL+bRpCmH5BI1ZYGl857kBuyAoCpd38c8Wk1DSCpVoxNcyrSCD0EcpSmwM5z3cXftqocpUw5RJWrKAktVlduui63LATxRxhjZn83ERLSOxEw5RJWoqQsse+9JbsAOWt27x4hdkDk4wSW1hHgf+7UxgC0QQohtC4takDnorJiywDIsS1OmFYDdljLlMGRB5qBJhtQFlkwrAFgp0Toy6A4uZYEl0woAvhZUo6cchizIfFSCS2kJYVoBwI+kTDk8tnXkwRKVlhAAuRhj5Ke4UvXB1pEHS9S2aSprbfS0Ai0hAO6zOgTFeMyCzHsTnHPutYi0McF9/CYBADvER7aOGJHmodaROxPccoHlxeCo8jkrR86eAdhBXd/HVntn920d+eEdHAssAZQ29oLMO+/gnPdXLLAEUFKOBZn/S3C0hABYl5TWkaO6Pv/+l9+UqCywBLBuKVMOIYTTVevINyVq6v80ZYElgDGE+NaR6vvWkS8Jrg/hXFJaQihNAYwkpXXkpK4vv/qZaQUAmydlQaaonr5fLK5t6gLLhP4VALhTyoLM5T+hl/8A2pI/aItnBBUAAAAASUVORK5CYII=",Ux="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfDJPYAAAPwSURBVHic7d1BVtxGEIDh6paDAGehfTx5yiJmlvL4AnADfAN8AnODHIEjcAT7BvYFYs8uJFmE90j2bBIYSd2VxXjy4jgwo+6WZvD83w7ea0rMop6qqSqMrMFocnAmYk7XERvAOuibq/c/vxg0oqqYIQOKiIwm4xMROR86LoA1M/7F1Y+/vBkq3OAJrqzGpbP6QcQUQ8YFsAn0OvPm2eX04nKQaKpihwi04KyekdyAbWUKZ4at3gZLcN9ODk5FzPFQ8QBsICOH81wwVLgBfFN9X1lr3/L2BkBExHv37I/pr9M+YwxSopZVWWSZPSe5AViYv/AMEKfvAM7mP6iaqu84AB4SU4wmB697j9LnDx89f3osanv/JQA8UD22jvTaJlJWZeFs/hulKYC79dc60usdnLM5924Alui3daSXBEdLCICV9dg6krxEZVoBQIjUrSPJS9SyKj++bpLcAHRjbZb8D5KPUv6w1u6+MiKHoed920hd3yZ8IgDrsLOzK/bRV12PlaPJ+Pzq/cXLVM+RrER9Uo0PjdXXoW9vqir1zZ+ioqkeCcCaGDGys7cvxnQvEtXL0e/Ti3exz5CsTaSsysJn+duYht56diveNSkeB8AGsFkmO/l+wEm9zvzsu8vp5XVM/GR3cLHTCm1Tk9yAL4x3TtqmDjhpCmd2k9zHRSe4jy0hp6HnVb24oA8BwKZrm5mod90PGjkcPX96HBs/qkSNbQlRVWnqG/Eu4AMA8CAYYyXfexxwMm7KIbpEjV1g6dqa5AZ84VS9NEHdEabwmUaVqsEJLnZawTsnruHeDdgGrm2CXmZUTRUz5RBUosYusFRVqW9vRJW3N2BbzFtHHosx3dNOyJRDUImaYoGla2qSG7BlVOZ37iFCF2R2TnCxLSGubaRt+aspsI28c+LbkKupsAWZnd4VYxdYqnqpb/5iWgHYYjFTDl0WZHaaZEixwJJpBQAiIsZkku+FTjms1jrS6Q4udoEl0woAFlRjphxWX5C5UoKLbQlR75hWAPCJmCmHVVtHlpaotIQA6IsRI/n+10Fnl7WOLC1Ry6osrMniphVoCQFwBxWVeha2A3KVBZn3JrjW7r4SE7fAkpYQAPfxrglsHZFyWevInQnuSTU+NKKnIVFFFoP0s9DjALZIU89E1QecNMf3bR353zs4FlgCGFrqBZl33sE5m5+zwBLAkPpYkPlZgqMlBMC6RC3InIxPPv/2v7DAEsC6xSzI9N4fLVpHPilRU/xPUxZYAoil6gNbR0zx39aRfxKct/lJVEsICywBJBLZOnK2+MKIMK0AYPPELMhUL0dXH356Z1MssJz3sJDcAKQTsyBz/k/oRf4Gq9snW0kHgDsAAAAASUVORK5CYII=",Fx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoJaQIcAAAPESURBVHic7d1LbhNBEIDh6rZlw272YdBwg7BDgUjODcINwgnIDThCjpAjwA2IxEPs4AZYcthnSTzdXSxsRyRgnOmeadv4/3aJ1KnJpjTVriobWYOyPDwT0dN1xAawFu8mk48vcwZUVTE5A4qIlOXBiYg9zx0XwLqZl5PJh3e5omVPcFX1rPK+/1VEipxxAWyEq17PPR2Pv4xzBFNVsTkCLXjfPxOSG7CrCu/7Wau3bAnu8ePnpyJynCsegI00mueCLLKUqHt7B/vW2vfC2xsAEQkhPP3x4/O3LmNkKVGralT0evZcSG4A5uYvPN3H6TqA9/6Nqux3HQfAVinK8sXbroN0WqKW5eGxiHb+TwDYVt21jnTaJlJVo8J7910oTQEs11nrSKd3cN477t0ArNJp60gnCY6WEAANdNY60nqJyrQCgBhtt460XqLO7t36lKYAGrPWtP6BZL/NP+ace22MjGLOhuBlOr1u83EArMlgMBRrew1Pmaosn59PJp9etfUcrZWojx69GBkjbyXi7U1VZTr9Kara1uMAWCNjjAwGQzGmeZGoKkeXlx8vUp+htTaRqhoVIbj3sQ290+m1hODbeBQAG8JaK4PBg5ijV71e/8l4fHGVEr+1O7iUaQXnHMkN+A+FEMQ5F3O08N61ch+XnOBmH+/GbedVDeJ9nfoIADaUc1NRDTFHR7NJqDRJJWpKS4iqSl1fSwhR/zyALWGMleEwtlSNn3JILlFTFlh670huwA5QDVLX05ijRQj9pFI1OsGlTCuE4MX7qNocwBaavdA0v2tXlf2UKYeoEjVlgeWsJeQ6ti4HsKVmrSMPxJjmaSdmyiGqRE1dYOl9TXIDdtDi3j1G7ILMxgkupSXEexf7sTGA/0AIIbYtLGpBZqN3xZQFlqphXpoyrQDsspQphyYLMhtNMqQusGRaAcBCjtaRRndwKQssmVYA8DvVlCmH+y/IvFeCS2kJYVoBwN+kTDnct3VkZYlKSwiArhhjZDh8GHV2VevIyhK1qkaFtTZhWoGWEADLLV6CYtxnQeY/E5xz7rVI/AJLWkIArBKCj7yjN9Wq1pGlCW6+wPI0Iuq8oS9q9gzADqrr6Pu4439tHfnrHRwLLAHk1vaCzKV3cN67cxZYAsipiwWZfyQ4WkIArEvagsyDk7u/vFWissASwLqlTDmEEI4WrSO3StTU7zRlgSWANizm1iMUd1tHbhJcCPWJJLSEsMASQFvSWkcOz25+EmFaAcDmSVmQqSpHk8mHC5u6wDKhfwUAlkpZkDn/Enr5Be7yP2gjXwXJAAAAAElFTkSuQmCC",Vx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm80oXMAAAPjSURBVHic7d1LbhtHEIDh6iYh0rvZxxSYvUWPd4EewOgG8g2UE4Q38BF0BB3BvoEF2AmyiwxnHwFK9lqaw+7qLCQGjm2amu6eISX+304ChjXaFLpaVUUja3A0GZ0Fkek6YgNYAyNv3n+4ftllyBCCmC4Diojs741OrZHzruMCWC8T5OW7j9dvuorXeYL7qRyP++r/EJGiy7gANsKNs70Xv19eXXURLIQgtotAC/3gz4TkBmyrou99p9VbZwnuYLI7lSAnXcUDsIGMVAeT3Wl34TqwX/5QWrVvhdMbABFRqy9+u/znss0YnZSoVTkurPbOheQG4M7dgaf9OG0H8OpfiYSy7TgAHpTi8PnoddtBWi1Rj/ZGJ8FI638EgIepzdaRVttEqnJcOPV/CaUpgOVaax1p9Q7OBc+9G4BVWm0daSXB0RIC4N5abB3JXqIyrQAgRu7WkewlalWOF8fNIufnAnj8jNrs/5Ds5/wwp+4XMaaKfd57ldmszvdCANZiMNiRXq/Z+cmIjA+ej85//XD9c673yFaiHj57Wok1ryXy9BZCkE+fagkh5HolAGtijJHBYEesjUgxGo7f//n3Reo7ZGsTuW0J0bcpDb2zWS3ea47XAbABbM/KcLAT8+hN3/Z+vLi8ukmJn+0OLnVawTlHcgMeGfUqzrmYRwvnfZb7uOQEdzDZnaZs51UNMp/71NcAsIHq2olqxLWTkepob3SSGj+pRE1tCQkhyKyei3J6Ax4ta4wMnwxiHk2ackguUVMXWDrnSW7AI6chSD2bxzxa9FWTStXoBJc6reC9inOUpsA2cN5H3rOHMmXKIapETV1gGUKQ2ayOq80BPEjGGBkOd8SY5mknZsohqkTNscByPvckN2DLLO7cY8QuyGyc4NJbQnzsv44BPHDqNbYlLGpBZqOzYuoCS9Xb0pRpBWB7pUw5NFmQ2WiSIccCS6YVAIiIWGtkOGy3daTRHVzqAkumFQAsqIboKYcmCzLvleBSW0KYVgDwpZQph/u2jqwsUWkJAdAWY4w8iZtyWNk6srJErcpxYb1NmlagJQTAMosDUIz7LMj8boK7XWApVVR0WUwr0BICYDkf2TpiRMarWkeWJrjDZ08rETNtHPVOCEHqyKY+ANulrudxlV6Qk+9tHfnmHRwLLAF0LfeCzKV3cLctISywBNCdNhZkfpXgaAkBsC4prSP7e6PTr3/9GRZYAli3lAWZavV40TryvxI1x3eassASQCqNbx0pvmwd+S/BzVVP01tCKE0BpEtpHTmajM4++5lpBQCbJ2VBpmg4fvfx+sLmWGAZ3cMCAEukLMi8+xJ6+RcJHUqkAQAT5gAAAABJRU5ErkJggg==",Yx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABVCAMAAAAbt1PlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaGhoaGhkZGRkZGRgYGBoaGhsbGyAgIBoaGhoaGhoaGhgYGBoaGhsbGxoaGhsbGxQUFEvJrZYAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWVJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Yhl+QYycZD1FNITiwAAAABJRU5ErkJggg==",$x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcaGjcaGjcZGTcZGTgYGDcaGjUbGzAgIDcaGjYaGjcaGjgYGDcaGjcbGzYaGjgbGygUFCzbu+wAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Wx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABQyHxQyHhQxHRQyHhAwIBQyHhUwIBAwIBMyHhQyHhMyHhQwHBQzHhQyHhMzHRMyHRUjGd0mtLoAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaNxoaNxkZNxkZNxgYOBoaNxsbNSAgMBoaNxoaNhoaNxgYOBoaNxsbNxoaNhsbOBQUKK3qr6AAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Zx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcnGjcoGjcoGTcnGTgoGDcnGjUlGzAgIDcoGjYoGjcoGjgoGDcnGjcnGzYmGjgoGygeFGHYzFEAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",ht={unrated:Ix,bronze:kx,silver:Cx,gold:jx,platinum:Mx,diamond:Dx,ruby:Lx,hidden:Ox},Aa={front:{black:bx,red:Gx,green:_x,blue:Hx,gold:zx},inside:{black:Bx,red:Px,green:Ux,blue:Fx,gold:Vx},top:{black:Yx,red:$x,green:Wx,blue:Qx,gold:Zx}},qx=gt`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kx=gt`
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
`,Xx=gt`
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
`,Jx=gt`
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
`,e5=h.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${qx} 0.25s forwards;
`,R1=h.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:n})=>n&&le`
      animation: ${Kx} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:n})=>!n&&le`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,t5=h.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:n})=>n.color.BLACK};

  ${R1}:hover > & {
    box-shadow: 0 0 75px ${({theme:n})=>n.color.GOLD};
  }

  ${({theme:n,$isCardBoxOpening:i})=>i&&le`
      box-shadow: 0 0 75px ${n.color.GOLD};
    `};
`,n5=h.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,r5=h.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:n})=>!n&&le`
      opacity: 0;
    `}
`,wa=h.img`
  position: absolute;
  top: ${({$top:n})=>n};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:n,$delay:i})=>n&&le`
      animation: ${Jx} 1.5s ${i}s forwards;
    `}
`,o5=h.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,i5=h.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:n})=>n&&le`
      animation: ${Xx} 1.1s ease-in-out forwards;
    `}
`,l5=n=>{const{color:i,isTierHidden:l,cardRanks:u,onFirstClick:d,onOpenAnimationEnd:p}=n,[g,x]=S.useState(!1),v=u[0],T=u[1],w=u[2];return c.jsx(e5,{children:c.jsxs(R1,{onClick:()=>{x(N=>(N||d(),!0))},$isCardBoxOpening:g,onAnimationEnd:N=>{g&&N.target===N.currentTarget&&p()},"aria-label":"카드 상자를 열어 추첨 진행하기",children:[c.jsx(t5,{$isCardBoxOpening:g}),c.jsx(n5,{src:Aa.inside[i],draggable:!1}),c.jsxs(r5,{$isCardBoxOpening:g,children:[v&&c.jsx(wa,{src:v!=="unrated"&&l?ht.hidden:ht[v],draggable:!1,alt:"",$isCardBoxOpening:g,$top:"0",$delay:1.5}),T&&c.jsx(wa,{src:T!=="unrated"&&l?ht.hidden:ht[T],draggable:!1,alt:"",$isCardBoxOpening:g,$top:"4%",$delay:1.65}),w&&c.jsx(wa,{src:w!=="unrated"&&l?ht.hidden:ht[w],draggable:!1,alt:"",$isCardBoxOpening:g,$top:"8%",$delay:1.8})]}),c.jsx(o5,{src:Aa.front[i],draggable:!1,alt:""}),c.jsx(i5,{src:Aa.top[i],draggable:!1,alt:"",$isCardBoxOpening:g})]})})},s5=h.div`
  display: flex;
  visibility: ${({$visible:n})=>n?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:n})=>n};
  justify-content: center;

  width: 100%;
  height: 100%;
`,a5=h.div.attrs(({$gap:n,$width:i,$height:l})=>({style:{gap:`${n}px`,padding:`${n}px`,width:`${i}px`,height:`${l}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,c5=h.div.attrs(({$gap:n})=>({style:{rowGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,u5=h.div.attrs(({$gap:n})=>({style:{columnGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,d5=()=>{const[n,i]=S.useState(0),[l,u]=S.useState(0);return{rotateX:n,rotateY:l,adjustCardTweak:g=>{const x=g.currentTarget.getBoundingClientRect(),v=g.clientX-x.left,w=((g.clientY-x.top)/x.height-.5)*20,N=(v/x.width-.5)*-20;i(w),u(N)},resetCardTweak:()=>{i(0),u(0)}}},f5=(n,i)=>i?ht.hidden:n>=1&&n<=5?ht.bronze:n>=6&&n<=10?ht.silver:n>=11&&n<=15?ht.gold:n>=16&&n<=20?ht.platinum:n>=21&&n<=25?ht.diamond:n>=26&&n<=30?ht.ruby:ht.unrated,p5=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,h5=h.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,g5=h.div.attrs(({$rotateX:n,$rotateY:i,$width:l})=>({style:{transform:`perspective(${l*3}px) rotateX(${n}deg) rotateY(${i}deg)`,width:`${l}px`,height:`${l*1.36}px`,borderRadius:`${l*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:n})=>n.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:n,$isTierHidden:i})=>`url(${f5(n,i)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  }
`,m5=h.a.attrs(({$cardWidth:n})=>({style:{rowGap:`${n/30}px`,padding:`${n/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,v5=h.img.attrs(({$cardWidth:n})=>({style:{height:`${n/2.4}px`,margin:`${n/4.016}px 0 ${n/16.066}px 0`}}))``,y5=h.div.attrs(({$cardWidth:n})=>({style:{fontSize:`${n/7.531}px`,lineHeight:`${n/7.531}px`}}))`
  color: ${({$tier:n,$isTierHidden:i,theme:l})=>p5(n,i,l)};
  font-family: 'Cafe24ClassicType';
`,x5=h.div.attrs(({$cardWidth:n,theme:i})=>({style:{height:`${Math.max(28,n/6.694)}px`,color:`${i.color.WHITE}`,fontSize:`${Math.max(14,n/13.388)}px`,lineHeight:`${Math.max(14,n/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,A5=h.div.attrs(({$movement:n})=>({style:{backgroundPosition:`${n+60}%`}}))`
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
`,e2=n=>{const{problemInfo:i,isTierHidden:l,width:u,onHover:d}=n,{problemId:p,title:g,tier:x}=i,{rotateX:v,rotateY:T,adjustCardTweak:w,resetCardTweak:N}=d5();return c.jsx(h5,{children:c.jsx(g5,{$width:u,$tier:x,$isTierHidden:l,$rotateX:v,$rotateY:T,onMouseMove:w,onMouseOut:N,onMouseOver:d,children:c.jsxs(m5,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${p}`,"aria-label":`문제 번호 ${p}번 ${g}`,$cardWidth:u,children:[c.jsx(v5,{$cardWidth:u,src:l?Xa.hidden:Rn[x],alt:"",draggable:!1}),c.jsx(y5,{$cardWidth:u,$tier:x,$isTierHidden:l,children:`#${p}`}),c.jsx(x5,{$cardWidth:u,children:g}),c.jsx(A5,{$movement:v+T})]})})})},vo=120,za=1/1.36,w5=(n,i,l)=>{const{rowCount:u,columnCount:d,cardGridGap:p,cardWidth:g,innerGridWidth:x,innerGridHeight:v,isOverflow:T}=S5(n,i,l);if(T)return{cardWidth:g,cardGridGap:p,innerGridWidth:x,innerGridHeight:v,isOverflow:T};const w=E5(u,d,l);return{cardWidth:g,cardGridGap:p,rowCardCounts:w,isOverflow:T}},S5=(n,i,l)=>{let u={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let C=1;C<=l;C+=1){const j=Math.ceil(l/C),{cardWidth:M,cardGridGap:H,isOverflow:U}=T5(n,i,j,C);!U&&M>u.cardWidth&&(u={rowCount:j,columnCount:C,cardWidth:M,cardGridGap:H,isOverflow:U})}if(u.isOverflow){const C=Math.max(1,Math.floor((n-vo/10)/(vo*1.1)));u={rowCount:Math.ceil(l/C),columnCount:C,cardWidth:vo,cardGridGap:vo/10,isOverflow:!0}}const{rowCount:d,columnCount:p,cardWidth:g,cardGridGap:x,isOverflow:v}=u,T=g/za,w=p*g+(p+1)*x,N=d*T+(d+1)*x;return{rowCount:d,columnCount:p,cardWidth:g,cardGridGap:x,innerGridWidth:w,innerGridHeight:N,isOverflow:v}},T5=(n,i,l,u)=>{const d=n*10/(11*u+1),p=i/(l*(1/za+.1)+.1),g=Math.max(vo,Math.min(d,p)-1),x=g/10,v=g/za,T=u*g+(u+1)*x,w=l*v+(l+1)*x,N=T>n||w>i;return{cardWidth:g,cardGridGap:g/10,isOverflow:N}},E5=(n,i,l)=>{const u=Array.from({length:n}).map(()=>i),d=n*i-l;for(let p=0;p<d;p+=1)u[n-p%n-1]-=1;return u},N5=n=>{const{cardCount:i}=n,[l,u]=S.useState(i),[d,p]=S.useState(0),[g,x]=S.useState(0),[v,T]=S.useState(!1),w=S.useRef(null);return S.useEffect(()=>{u(l)},[i]),S.useLayoutEffect(()=>{const N=w.current;if(!N)return;const C=()=>{const{clientWidth:M,clientHeight:H}=N;p(M),x(H),T(!0)},j=new ResizeObserver(()=>{C()});return j.observe(w.current),()=>{j.disconnect()}},[]),{...w5(d,g,l),isLoaded:v,cardGridRef:w}},R5=n=>{const{problemInfos:i,isTierHidden:l,onCardHover:u}=n,d=i.length,p=N5({cardCount:d}),{cardWidth:g,cardGridGap:x,isOverflow:v,isLoaded:T,cardGridRef:w}=p;let N=0;return c.jsx(s5,{ref:w,$visible:T,$overflowY:v?"auto":"visible",children:v?c.jsx(a5,{$width:p.innerGridWidth,$height:p.innerGridHeight,$gap:x,children:i.map(C=>c.jsx(e2,{width:g,problemInfo:C,isTierHidden:![0,31].includes(C.tier)&&l,onHover:u},C.problemId))}):c.jsx(c5,{$gap:x,children:p.rowCardCounts.map((C,j)=>c.jsx(u5,{$gap:x,children:Array.from({length:C}).map(()=>{if(!i[N])return null;const M=i[N];return N+=1,c.jsx(e2,{width:g,problemInfo:M,isTierHidden:![0,31].includes(M.tier)&&l,onHover:u},M.problemId)})},j))})})},I5=n=>{if(!(Ne(n)&&"success"in n&&typeof n.success=="boolean"))return!1;const{success:i}=n;if(i)return"problemInfos"in n&&C5(n.problemInfos);if("statusCode"in n&&typeof n.statusCode!="number"||!("errorMessage"in n)||typeof n.errorMessage!="string")return!1;if(!("errorDescriptions"in n))return!0;const{errorDescriptions:l}=n;return typeof l=="string"||Array.isArray(l)&&l.every(u=>typeof u=="string")},k5=n=>Ne(n)&&"problemId"in n&&"title"in n&&"tier"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&Ja(n.tier),C5=n=>Array.isArray(n)&&n.every(i=>k5(i)),j5=["bronze","silver","gold","platinum","diamond","ruby"],M5=n=>{if(n.length===0)throw Error("프리뷰 카드 랭크 계산을 위해서는 최소 1문제의 정보가 제공되어야 합니다.");if(n.length===1){const x=n[0].tier;return[Ui(x)]}if(n.length===2){const x=n[0].tier,v=n[1].tier;return[Ui(x),Ui(v)]}const i={unrated:0,bronze:0,silver:0,gold:0,platinum:0,diamond:0,ruby:0};n.forEach(({tier:x})=>{i[Ui(x)]+=1});const l=Object.entries(i).sort((x,v)=>v[1]-x[1]);if(!D5(l))throw Error("프리뷰 카드 랭크 계산 중 데이터 불일치를 발견했습니다.");const[u,d]=l[0],p=l[1][0],g=l[2][0];return d===n.length?[u,u,u]:d*2>n.length?[u,u,p]:[u,p,g]},Ui=n=>n===0||n===31?"unrated":j5[Math.floor((n-1)/5)],D5=n=>n.every(([i])=>v4(i)),L5=n=>{const i=n.reduce((d,p)=>d+p.probability,0);if(Math.abs(i-1)>1e-6)throw new Error(`확률의 합은 1이어야 하는데, 실제 확률의 합이 ${i}였습니다.`);const l=Math.random();let u=0;for(const{choice:d,probability:p}of n)if(u+=p,l<=u)return d;throw new Error("잘못된 확률 정보를 사용하셨습니다. 다시 확인해 주세요.")},O5=(n,i)=>Math.floor(Math.random()*(i-n+1))+n,b5="/assets/card-slide-1-BWULmWDl.wav",G5="/assets/card-slide-2-DSpetA15.wav",_5="/assets/card-slide-3-DsJdFER7.wav",H5="/assets/card-slide-4-2Wc5wS26.wav",z5="/assets/gacha-COr4DCSI.mp3",B5=[b5,G5,_5,H5],I1=n=>Ne(n)&&"isTierHidden"in n&&"isAudioMuted"in n&&typeof n.isTierHidden=="boolean"&&typeof n.isAudioMuted=="boolean",P5="🎲",U5="✅",F5="📜",V5=(n,i)=>{const l=i.map(({problemId:u,title:d})=>`- ${u}번 - ${d} (https://acmicpc.net/problem/${u})`).join(`
`);return`
# 추첨 결과 ${P5}

## 추첨 정보 ${U5}

- 추첨 이름: ${n}
- 문제 수: ${i.length}

## 문제 목록 ${F5}
${l}
`.trim()},Y5=[{choice:"black",probability:.24975},{choice:"red",probability:.24975},{choice:"green",probability:.24975},{choice:"blue",probability:.24975},{choice:"gold",probability:.001}],$5=B5.map(n=>new Audio(n)),W5=n=>{const{open:i,slot:l,problemCount:u}=n,[d,p]=S.useState("loading"),[g,x]=S.useState([]),[v,T]=S.useState("black"),[w,N]=S.useState(""),[C,j]=S.useState([]),[M,H]=S.useState(!1),[U,te]=S.useState(!0),[Z,Q]=S.useState(""),[F,ne]=S.useState(!0),[q,$]=S.useState(!1),[ye,_e]=S.useState(!1),Le=S.useRef(new Audio(z5)),qe=g.length>0?M5(g):["unrated"],Ke=S.useCallback(async()=>{const ee=await Ae.runtime.sendMessage({command:mo.GET_RANDOM_DEFENSE_RESULT,query:l.query,problemCount:u});if(!I5(ee)){N("API로부터 불러온 데이터에서 데이터 불일치가 발견되었습니다."),j("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}if(!ee.success){const{errorMessage:ce,errorDescriptions:ue}=ee;N(ce),j(ue??[]),p("error");return}const re=ee.problemInfos;x(re),p("ready")},[l,u]),He=S.useCallback(async()=>{const ee=await Ae.runtime.sendMessage({command:mo.FETCH_GACHA_OPTIONS});if(!I1(ee)){N("설정 데이터에서 불일치가 발견되었습니다."),j("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}const{isTierHidden:re,isAudioMuted:ce}=ee;H(re),te(ce),_e(!0),Le.current.muted=ce},[]),Pe=()=>{p("loading"),$(!1),T(L5(Y5)),Ke()},it=()=>{H(ee=>!ee)},Ue=()=>{te(ee=>{const re=!ee;return Le.current.muted=re,re})},se=()=>{U||$5[O5(0,3)].play()},G=()=>{Y(),Le.current.play()},Y=()=>{Le.current.pause(),Le.current.currentTime=0},P=()=>{navigator.clipboard.writeText(V5(l.title,g)),Q("문제 목록을 클립보드에 복사했어요!"),ne(!1),setTimeout(()=>ne(!0))},E=()=>{p("showingResult"),Q("")},D=()=>{const ee=new Date().toISOString(),re=g.map(ce=>({...ce,createdAt:ee})).reverse();Ae.runtime.sendMessage({command:mo.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:re}),$(!0),Q("문제 목록을 추첨 기록에 저장했어요!"),ne(!1),setTimeout(()=>ne(!0))};return S.useEffect(()=>{i&&Pe()},[i,l,u]),S.useEffect(()=>{He()},[]),S.useEffect(()=>{ye&&Ae.runtime.sendMessage({command:mo.SAVE_GACHA_OPTIONS,isTierHidden:M,isAudioMuted:U})},[ye,M,U]),{gachaStatus:d,problemInfos:g,cardBoxColor:v,previewCardRanks:qe,errorMessage:w,errorDescriptions:C,isTierHidden:M,isAudioMuted:U,notificationMessage:Z,shouldNotificationFadeOut:F,isSavedToHistory:q,restartGacha:Pe,toggleIsTierHidden:it,toggleIsAudioMuted:Ue,playCardSlideAudio:se,playGachaAudio:G,stopGachaAudio:Y,copyProblemInfosMarkdownToClipboard:P,showResultScreenAndResetNotificationMessage:E,saveGachaResultToStorage:D}},Q5=gt`
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
`,Z5=h.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${Q5} 2s forwards;
  }
`,q5=h.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,K5=h.div`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 600;
`,X5=n=>{const{children:i,shouldFadeOut:l}=n;return c.jsxs(Z5,{className:l?"fading":"",children:[i!==""&&c.jsx(q5,{children:c.jsx(Io,{})}),c.jsx(K5,{children:i})]})},J5=n=>{const{open:i,theme:l="totamjung",slot:u,problemCount:d,portalTarget:p,onClose:g}=n,{gachaStatus:x,problemInfos:v,cardBoxColor:T,previewCardRanks:w,errorMessage:N,errorDescriptions:C,isTierHidden:j,isAudioMuted:M,isSavedToHistory:H,notificationMessage:U,shouldNotificationFadeOut:te,restartGacha:Z,toggleIsTierHidden:Q,toggleIsAudioMuted:F,playCardSlideAudio:ne,playGachaAudio:q,stopGachaAudio:$,copyProblemInfosMarkdownToClipboard:ye,showResultScreenAndResetNotificationMessage:_e,saveGachaResultToStorage:Le}=W5({open:i,slot:u,problemCount:d});return c.jsx(Qn,{title:"즉석 추첨",open:i,theme:l,padding:"0",closeOnBackdropClick:!1,portalTarget:p,onClose:()=>{$(),g()},children:c.jsxs(lx,{children:[x==="loading"&&c.jsx(mx,{children:c.jsx(xa,{children:c.jsxs(Jd,{children:[c.jsx(vx,{children:c.jsx(P2,{})}),c.jsx(yx,{children:"잠시만 기다려주세요..."})]})})}),x==="ready"&&c.jsxs(xx,{children:[c.jsx(Ax,{children:c.jsx(l5,{color:T,isTierHidden:j,cardRanks:w,onFirstClick:q,onOpenAnimationEnd:_e})}),c.jsx(xa,{children:c.jsxs(Jd,{children:[c.jsx(wx,{children:c.jsx(wg,{})}),c.jsx(Sx,{children:"카드 상자를 클릭하면 결과를 확인할 수 있습니다"})]})})]}),x==="error"&&c.jsxs(cx,{children:[c.jsx(ux,{children:c.jsxs(dx,{children:[c.jsxs(fx,{children:[c.jsx(px,{children:c.jsx(B2,{})}),c.jsx(hx,{children:N})]}),c.jsx(gx,{children:typeof C=="string"?c.jsx(Xd,{children:C}):C.map(qe=>c.jsx(Xd,{children:qe},qe))})]})}),c.jsx(xa,{children:c.jsx(Ce,{type:"button",name:"다시 시도하기",size:"large",color:z.color.LIGHT_RED,iconSrc:c.jsx(Ag,{}),disabled:!1,onClick:Z})})]}),x==="showingResult"&&c.jsxs(Tx,{children:[c.jsx(Ex,{children:c.jsx(R5,{problemInfos:v,onCardHover:ne,isTierHidden:j})}),c.jsx(Nx,{children:c.jsx(X5,{shouldFadeOut:te,children:U})}),c.jsxs(Rx,{children:[c.jsx(Ce,{type:"button",name:"문제 목록 복사",size:"large",color:z.color.LIGHT_GRAY,iconSrc:c.jsx(z2,{}),disabled:!1,onClick:ye}),c.jsx(Ce,{type:"button",name:"추첨 기록 저장",size:"large",color:z.color.LEMON,iconSrc:H?c.jsx(Io,{}):c.jsx(Sg,{}),disabled:H,onClick:Le}),c.jsx(Ce,{type:"button",name:"다시 추첨하기!",size:"large",color:z.color.ORANGE,iconSrc:c.jsx(V2,{}),disabled:!1,onClick:Z})]})]}),c.jsxs(qd,{$align:"left",children:[c.jsx(sx,{onClick:Q,"aria-label":j?"문제 난이도 보이기":"문제 난이도 감추기",children:j?c.jsx("img",{src:$2,alt:"",draggable:!1}):c.jsx("img",{src:Yg,alt:"",draggable:!1})}),c.jsx(Kd,{children:`티어 숨기기: ${j?"ON":"OFF"}`})]}),c.jsxs(qd,{$align:"right",children:[c.jsx(Kd,{children:`효과음: ${M?"OFF":"ON"}`}),c.jsx(ax,{onClick:F,"aria-label":M?"효과음 켜기":"효과음 끄기",children:M?c.jsx(Eg,{}):c.jsx(Tg,{})})]})]})})},e7=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,t7=/^\d+$/,n7=()=>{const[n,i]=S.useState("5"),l=d=>{const p=d.target.value;p.length>=3||i(p)},u=t7.test(n)&&Number(n)>=1&&Number(n)<=tl;return{inputValue:n,updateInputValue:l,isInputValueValid:u}},t2=["none","solvedAcLight"],r7=n=>{const{open:i,theme:l="totamjung",portalTarget:u,shouldShowHotkeyMessage:d,onClose:p,onSubmitProblemCount:g}=n,{inputValue:x,updateInputValue:v,isInputValueValid:T}=n7(),w=t2.includes(l);return c.jsxs(Qn,{title:"즉석 추첨",theme:l,portalTarget:u,open:i,onClose:p,children:[c.jsxs(e7,{children:[c.jsx(pe,{type:w?"black":"normal",fontSize:16,children:"추첨을 진행할 문제 수를 입력해 주세요."}),c.jsx(Vt,{type:"number",width:"100%",height:40,borderWidth:2,borderRadius:6,horizontalPadding:8,fontSize:18,min:1,max:tl,value:x,theme:l,onChange:v,autoFocus:!0}),c.jsx(pe,{type:w?"black":"normal",fontSize:14,textAlign:"right",children:`1문제 이상, ${tl}문제 이하`}),d&&c.jsx(pe,{type:"custom",fontSize:16,color:w?z.color.BLACK:z.color.WHITE,opacity:.8,children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),c.jsx(ko,{theme:l,children:c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(Ro,{}),color:t2.includes(l)?z.color.DARK_GRAY:z.color.GOLD,disabled:!T,onClick:()=>g(Number(x))})})]})},o7=n=>{const{isLoaded:i}=n,{activeModalName:l,openModal:u,closeModal:d}=cl(),{slot:p,selectedSlotNo:g,hotkey:x,occupiedSlotNos:v,shouldEditModalShow:T,gachaProblemCount:w,setSelectedSlotNo:N,switchHotkey:C,openEditModal:j,closeEditModal:M,updateSlot:H,deleteSlot:U,setGachaProblemCount:te}=Zy(n);return c.jsxs(nc,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[i?c.jsxs(Iy,{children:[c.jsxs(ky,{children:[c.jsx(Oy,{selectedSlotNo:g,occupiedSlotNos:v,onChange:N}),c.jsx(Wy,{selectedSlotNo:g,hotkey:x,onClick:C})]}),c.jsx(Uy,{...p}),c.jsxs(Cy,{children:[c.jsx(Ce,{type:"button",name:"쿼리 복사",size:"medium",color:z.color.LIGHT_GRAY,iconSrc:c.jsx(z2,{}),disabled:p.isEmpty,onClick:()=>{p.isEmpty||(navigator.clipboard.writeText(p.query),u("copiedQuery"))}}),c.jsx(Ce,{type:"button",name:"수정",size:"medium",color:z.color.SKY_BLUE,iconSrc:c.jsx(fg,{}),disabled:p.isEmpty,onClick:j}),c.jsx(Ce,{type:"button",name:"삭제",size:"medium",color:z.color.RED,iconSrc:c.jsx(al,{}),disabled:p.isEmpty,onClick:()=>{u("confirmDeleteSlot")}}),c.jsx(Ce,{type:"button",name:"즉석 추첨",size:"medium",color:z.color.PURPLE,iconSrc:c.jsx(V2,{}),disabled:p.isEmpty,onClick:()=>{u("gachaProblemCount")}})]})]}):c.jsx(Wa,{}),c.jsx(ex,{title:p.isEmpty?"":p.title,query:p.isEmpty?"":p.query,open:T,onClose:M,onSlotChange:H}),c.jsx(tn,{actionType:"confirm",width:"350px",height:"auto",open:l==="copiedQuery",onClose:d,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),c.jsx(tn,{actionType:"yesNo",width:"350px",height:"auto",open:l==="confirmDeleteSlot",onYesSelect:()=>{U(),d()},onNoSelect:d,title:"추첨 삭제 확인",message:`${g}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`}),c.jsx(r7,{open:l==="gachaProblemCount",shouldShowHotkeyMessage:!0,onClose:d,onSubmitProblemCount:Z=>{te(Z),u("gacha")}}),!p.isEmpty&&c.jsx(J5,{open:l==="gacha",slot:p,problemCount:w,onClose:d})]})},i7=n=>n===null||n==="Alt"||n==="F2",rc=n=>!Ne(n)||!("isEmpty"in n)||typeof n.isEmpty!="boolean"?!1:n.isEmpty?!0:"title"in n&&"query"in n&&typeof n.title=="string"&&typeof n.query=="string",oc=n=>typeof n!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(n),l7=n=>{if(!(Ne(n)&&"selectedNo"in n&&typeof n.selectedNo=="number"))return!1;const{selectedNo:i,...l}=n;return!(i%1===0&&i>=0&&i<=9)||!u1(l)?!1:Array.from({length:10}).every((u,d)=>d in l&&rc(l[d]))},ic=n=>{if(!(Ne(n)&&"hotkey"in n&&"selectedSlotNo"in n&&"slots"in n&&typeof n.hotkey=="string"&&["Alt","F2"].includes(n.hotkey)&&oc(n.selectedSlotNo)))return!1;const{slots:i}=n;return u1(i)?Array.from({length:10}).every((l,u)=>u in i&&rc(i[u])):!1},s7=n=>Ne(n)&&Array.from({length:10}).every((i,l)=>l in n),k1=n=>{if(!Ne(n)||!("slots"in n))return!1;const{slots:i}=n;return Ne(i)&&Array.from({length:10}).every((l,u)=>u in i)},C1=[1,2,3,4,5,6,7,8,9,0],j1=(n,i)=>rc(n)?n.isEmpty?{isEmpty:!0}:n.query.trim()===""||n.query.length>Wn?{isEmpty:!0}:n.title.trim()===""||n.title.length>Eo?{...n,isEmpty:!1,title:`추첨 ${i}`}:n:{isEmpty:!0},lc=n=>{if(!k1(n))return ba;const i="hotkey"in n&&i7(n.hotkey)?n.hotkey:"Alt",l="selectedSlotNo"in n&&oc(n.selectedSlotNo)?n.selectedSlotNo:1,u={...n,hotkey:i,selectedSlotNo:l};return C1.forEach(d=>{const p=u.slots[d];u.slots[d]=j1(p,d)}),ic(u)?u:ba},a7=n=>{if(!s7(n))return Ld;const{selectedNo:i,...l}=n,u=oc(i)?n.selectedNo:1,d={...l,selectedNo:u};return C1.forEach(p=>{const g=d[p];d[p]=j1(g,p)}),l7(d)?d:Ld},c7=async()=>{const i=(await Ae.storage.local.get(B.QUICK_SLOTS))[B.QUICK_SLOTS];return lc(i)},u7=(n,i,l)=>{const u={selectedSlotNo:n,slots:i,hotkey:l};if(!k1(u))return;const d=lc(u);Ae.storage.local.set({[B.QUICK_SLOTS]:d})},d7={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},f7=()=>{const[n,i]=S.useState(d7),[l,u]=S.useState(1),[d,p]=S.useState("Alt"),[g,x]=S.useState(!1);return S.useEffect(()=>{(async()=>{const{slots:w,selectedSlotNo:N,hotkey:C}=await c7();i(w),u(N),p(C),x(!0)})()},[]),S.useEffect(()=>{g&&u7(l,n,d)},[l,n,d]),{slots:n,selectedSlotNo:l,hotkey:d,isLoaded:g,setSelectedSlotNo:u,setHotkey:p,updateSlot:(w,N)=>{i(C=>({...C,[l]:{isEmpty:!1,title:w,query:N}}))},deleteSlot:()=>{i(w=>({...w,[l]:{isEmpty:!0}}))}}},p7=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,sc=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,n2=(n,i,l,u)=>i?le`
      background-image:
        ${l?u.solvedAcTier.HIDDEN_DARK_GRADIENT200:u.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${u.solvedAcTier.HIDDEN_GRADIENT};
    `:n>=1&&n<=5?le`
      background-image:
        ${l?u.solvedAcTier.BRONZE_DARK_GRADIENT200:u.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${u.solvedAcTier.BRONZE_GRADIENT};
    `:n>=6&&n<=10?le`
      background-image:
        ${l?u.solvedAcTier.SILVER_DARK_GRADIENT200:u.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${u.solvedAcTier.SILVER_GRADIENT};
    `:n>=11&&n<=15?le`
      background-image:
        ${l?u.solvedAcTier.GOLD_DARK_GRADIENT200:u.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${u.solvedAcTier.GOLD_GRADIENT};
    `:n>=16&&n<=20?le`
      background-image:
        ${l?u.solvedAcTier.PLATINUM_DARK_GRADIENT200:u.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${u.solvedAcTier.PLATINUM_GRADIENT};
    `:n>=21&&n<=25?le`
      background-image:
        ${l?u.solvedAcTier.DIAMOND_DARK_GRADIENT200:u.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${u.solvedAcTier.DIAMOND_GRADIENT};
    `:n>=26&&n<=30?le`
      background-image:
        ${l?u.solvedAcTier.RUBY_DARK_GRADIENT200:u.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${u.solvedAcTier.RUBY_GRADIENT};
    `:le`
    background-image:
      ${l?u.solvedAcTier.UNRATED_DARK_GRADIENT200:u.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${u.solvedAcTier.UNRATED_GRADIENT};
  `,h7=h.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:n,$isHidden:i,theme:l})=>n2(n,i,!1,l)};

  &:hover {
    ${({$tier:n,$isHidden:i,theme:l})=>n2(n,i,!0,l)};
  }
`,g7=h.a`
  display: flex;
  align-items: center;
`,m7=h.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:n,$isHidden:i,theme:l})=>sc(n,i,l)};
  }
`,v7=h.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,y7=h.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,x7=h.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:n,$isHidden:i,theme:l})=>sc(n,i,l)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,A7=h.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,w7=h.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:n,$isHidden:i,theme:l})=>sc(n,i,l)};
`,S7=h.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.WHITE};
  }
`,T7=h.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:n})=>n.color.WHITE};
`,M1=n=>{const i=String(n.getFullYear()).padStart(4,"0"),l=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0"),d=String(n.getHours()).padStart(2,"0"),p=String(n.getMinutes()).padStart(2,"0"),g=String(n.getSeconds()).padStart(2,"0");return`${i}-${l}-${u} ${d}:${p}:${g}`},E7=n=>{const{problemId:i,title:l,tier:u,createdAt:d,isHidden:p,onDelete:g}=n;return c.jsxs(h7,{$tier:u,$isHidden:p,children:[c.jsxs(g7,{href:`https://icpc.me/${i}`,target:"__blank","aria-label":`${i}번 ${l} 문제`,children:[c.jsx(v7,{src:p?Xa.hidden:Rn[u],alt:"",draggable:!1}),c.jsxs(y7,{children:[c.jsx(x7,{$tier:u,$isHidden:p,children:l}),c.jsxs(A7,{children:[c.jsx(w7,{$tier:u,$isHidden:p,children:`#${i}`}),c.jsxs(S7,{children:[c.jsx(lg,{}),c.jsx(T7,{children:M1(new Date(d))})]})]})]})]}),c.jsx(m7,{$tier:u,$isHidden:p,onClick:g,"aria-label":"추첨 기록에서 제거하기",children:c.jsx(al,{})})]})},N7=n=>{const{items:i,isHidden:l,onDelete:u}=n;return c.jsx(p7,{children:i.map(d=>{const p=`${d.problemId}-${d.createdAt}`,g=![0,31].includes(d.tier)&&l;return c.jsx(E7,{isHidden:g,onDelete:()=>{u(p)},...d},p)})})},D1=n=>Ne(n)&&"no"in n&&"title"in n&&"tier"in n&&"date"in n&&typeof n.no=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&typeof n.date=="string"&&n.tier in Rn,ac=n=>Ne(n)&&"problemId"in n&&"title"in n&&"tier"in n&&"createdAt"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&n.tier in Rn&&ul(n.createdAt),L1=n=>Array.isArray(n)&&n.every(i=>ac(i)),R7=n=>{if(!ul(n))return!1;const[i,l,u,d,p,g,x]=n.split(/[-:.TZ]/).map(Number);return i>=1&&i<=9999&&l>=1&&l<=12&&u>=1&&u<=31&&d>=0&&d<=23&&p>=0&&p<=59&&g>=0&&g<=59&&x>=0&&x<=999},I7=n=>!isNaN(Number(new Date(n))),k7=n=>ac(n)&&n.problemId%1===0&&n.problemId>=x1&&n.problemId<=A1&&n.title.length<=w1&&R7(n.createdAt)&&n.tier%1===0&&n.tier>=y1&&n.tier<=kv,C7=n=>D1(n)&&n.no%1===0&&n.no>=x1&&n.no<=A1&&n.title.length<=w1&&I7(n.date)&&n.tier%1===0&&n.tier>=y1&&n.tier<=Iv,j7=n=>[...n].sort((i,l)=>new Date(i.date).getTime()>new Date(l.date).getTime()?-1:1),M7=n=>[...n].sort((i,l)=>i.createdAt>l.createdAt?-1:1),cc=n=>{if(!Array.isArray(n))return qa;const i=[];return n.forEach(l=>{ac(l)&&k7(l)&&i.push(l)}),M7(i).slice(0,To)},D7=n=>{if(!Array.isArray(n))return qa;const i=[];return n.forEach(l=>{D1(l)&&C7(l)&&i.push(l)}),j7(i).slice(0,To)},uc=n=>typeof n=="boolean"?n:J2,L7=async()=>{const n=await Ae.storage.local.get([B.RANDOM_DEFENSE_HISTORY,B.IS_TIER_HIDDEN]),i=n[B.RANDOM_DEFENSE_HISTORY],l=n[B.IS_TIER_HIDDEN],u=cc(i),d=uc(l);return{randomDefenseHistory:u,isHidden:d}},O7=async(n,i)=>{if(!Array.isArray(n)||typeof i!="boolean")return;const l=cc(n);Ae.storage.local.set({[B.RANDOM_DEFENSE_HISTORY]:l,[B.IS_TIER_HIDDEN]:i})},b7=()=>{const[n,i]=S.useState([]),[l,u]=S.useState(!0),[d,p]=S.useState(!1),g=n.length===0;return S.useEffect(()=>{(async()=>{const w=await L7();u(w.isHidden),i(w.randomDefenseHistory),p(!0)})()},[]),S.useEffect(()=>{d&&O7(n,l)},[n,l]),{items:n,isHidden:l,isLoaded:d,isEmpty:g,deleteHistoryById:w=>{const N=n.filter(C=>`${C.problemId}-${C.createdAt}`!==w);i(N)},clearHistory:()=>{i([])},updateIsHidden:w=>{u(w.target.checked)}}},G7=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,_7=h.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:n})=>n.color.LIGHT_BROWN};
  border-radius: 6px;
`,H7=h.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,z7=h.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,B7=h.button`
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
`,P7=h.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,U7=h.div`
  color: ${({$color:n})=>n};
  font-size: 14px;
  line-height: 20px;
`,F7=h.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,V7=h.label`
  display: inline-block;
  position: relative;

  width: ${({$size:n})=>n==="large"?"50px":"40px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:n})=>n==="large"?"15px":"12px"};
  }
`,Y7=h.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,$7=h.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:n,$isChecked:i})=>i?n.color.GOLD:n.color.LIGHTER_BROWN};

  box-shadow: ${({theme:n,$isChecked:i})=>i?`0 0 12px ${n.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,W7=h.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:n})=>n==="large"?"26px":"20px"};
  height: ${({$size:n})=>n==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:n,$isChecked:i})=>i?n==="large"?le`
            transform: translateX(20px);
          `:le`
            transform: translateX(16px);
          `:le`
          transform: translateX(0);
        `}
`,Q7=n=>{const{size:i,isChecked:l,ariaLabel:u,onChange:d}=n;return c.jsxs(V7,{$size:i,children:[c.jsx(Y7,{checked:l,"aria-label":u,onChange:d,value:""}),c.jsx($7,{$isChecked:l,children:c.jsx(W7,{$size:i,$isChecked:l})})]})},Z7=n=>{const i=To-n,l=i>=tl?"normal":i>0?"warn":"danger",p=`${`현재 ${n}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${To}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${l==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:l==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,g=l==="normal"?z.color.WHITE:l==="warn"?z.color.ORANGE:z.color.LIGHT_RED;return{indicatorMessage:p,indicatorColor:g}},q7=()=>{const{items:n,isHidden:i,isLoaded:l,isEmpty:u,deleteHistoryById:d,clearHistory:p,updateIsHidden:g}=b7(),{activeModalName:x,openModal:v,closeModal:T}=cl(),{indicatorMessage:w,indicatorColor:N}=Z7(n.length);return c.jsx(nc,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:c.jsxs(G7,{children:[l?c.jsxs(c.Fragment,{children:[c.jsxs(H7,{children:[c.jsx(pe,{type:"normal",fontSize:16,width:"auto",as:"span",children:"티어 숨기기"}),c.jsx(Q7,{size:"large",isChecked:i,ariaLabel:"티어 숨기기",onChange:g})]}),c.jsx(_7,{children:n.length>0?c.jsx(N7,{items:n,isHidden:i,onDelete:d}):c.jsx(W2,{imageSrc:em,imageWidth:100,imageHeight:86,title:"추첨 기록",description:"문제를 추첨하면 여기에 기록이 표시될 거에요."})}),c.jsxs(z7,{children:[c.jsxs(P7,{title:w,children:[c.jsx(F7,{children:c.jsx(sg,{})}),c.jsx(U7,{$color:N,children:`${n.length} / ${To}`})]}),c.jsx(pe,{type:"normal",fontSize:16,width:"auto",as:"span",children:"추첨 기록 비우기"}),c.jsx(B7,{onClick:()=>{v("confirmClearHistory")},disabled:u,"aria-label":"추첨 기록 비우기",children:c.jsx(al,{})})]})]}):c.jsx(Wa,{}),c.jsx(tn,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:x==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{p(),T()},onNoSelect:T})]})})},K7=h.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,X7=h.div`
  display: flex;
  column-gap: 12px;
`,J7=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,e8=n=>{const{slots:i,selectedSlotNo:l,hotkey:u,isLoaded:d,setSelectedSlotNo:p,setHotkey:g,updateSlot:x,deleteSlot:v}=f7(),{show:T}=n,w={slots:i,selectedSlotNo:l,hotkey:u};return T?c.jsxs(K7,{children:[c.jsx(Nn,{title:"랜덤 디펜스",iconSrc:Ae.runtime.getURL("/dice.png")}),c.jsxs(X7,{children:[c.jsxs(J7,{children:[c.jsx(Ry,{isLoaded:d,selectedSlotNo:l,onSubmit:x}),c.jsx(o7,{quickSlotsInfo:w,isLoaded:d,onHotkeyChange:g,onSlotChange:x,onSlotDelete:v,onSlotNoChange:p})]}),c.jsx(q7,{})]})]}):null},t8=h.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;h.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const dl=n=>n==="none"||n==="totamjung",O1=n=>n==="totamjung"?"totamjung":"none",n8=async()=>{const i=(await Ae.storage.local.get(B.TOTAMJUNG_THEME))[B.TOTAMJUNG_THEME];return O1(i)},r8=n=>{dl(n)&&Ae.storage.local.set({[B.TOTAMJUNG_THEME]:n})},b1=n=>typeof n=="number"&&!isNaN(n)&&n%1===0?n:0,o8=/^(none|font-\d{1,2})$/,i8=n=>typeof n=="string"&&o8.test(n),dc=n=>typeof n=="number"&&!isNaN(n)&&n%1===0,l8=async()=>{const i=(await Ae.storage.local.get(B.FONT_NO))[B.FONT_NO];return b1(i)},s8=n=>{dc(n)&&Ae.storage.local.set({[B.FONT_NO]:n})},a8=()=>{const[n,i]=S.useState(void 0),[l,u]=S.useState(void 0),[d,p]=S.useState(!1);return S.useEffect(()=>{(async()=>{const[T,w]=await Promise.all([n8(),l8()]);i(T),u(w),p(!0)})()},[]),S.useEffect(()=>{d&&r8(n)},[n]),S.useEffect(()=>{d&&s8(l)},[l]),{totamjungTheme:n,fontNo:l,isLoaded:d,updateTotamjungTheme:v=>{d&&dl(v)&&i(v)},updateFontNo:v=>{const T=Number(v);!d||isNaN(T)||u(T)}}},c8=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,u8=h.p`
  color: ${({theme:n})=>n.color.LEMON};
  font-size: ${({$fontSize:n})=>n};
  font-family: ${({$fontFamily:n})=>n};
`,d8=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],f8=()=>{const{totamjungTheme:n,fontNo:i,updateTotamjungTheme:l,updateFontNo:u}=a8();return c.jsxs(c8,{children:[c.jsx(Nn,{title:"테마 설정",iconSrc:Ae.runtime.getURL("/palette.png")}),c.jsx(Pn,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:n??"",onChange:l}),c.jsx(Nn,{title:"폰트 설정",iconSrc:c.jsx(hg,{})}),c.jsx(Pn,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:d8.map(({name:d,fontFamily:p,fontSize:g},x)=>({label:c.jsx(u8,{$fontFamily:p,$fontSize:g??"16px",children:d}),value:String(x)})),checkedValue:i===void 0?"":String(i),onChange:u})]})},p8=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,G1=n=>{const{confirmText:i}=n,[l,u]=S.useState(""),[d,p]=S.useState(i);return S.useEffect(()=>{p(d)},[i]),{inputValue:l,isSameWithConfirmText:l===d,updateInputValue:v=>{u(v.target.value)}}},h8=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,g8=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Sa=h.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,m8=h.div`
  display: flex;
  justify-content: center;
`,Ta="초기화에 동의합니다",v8=n=>{const{open:i,onClose:l,onReset:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:g}=G1({confirmText:Ta});return c.jsxs(Qn,{title:"데이터 초기화",open:i,onClose:l,children:[c.jsxs(h8,{children:[c.jsx(pe,{type:"normal",fontSize:16,children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(g8,{children:[c.jsx(Sa,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),c.jsx(Sa,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Sa,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(pe,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:Ta}),"를 입력해 주십시오."]}),c.jsx(m8,{children:c.jsx(Vt,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:d,textAlign:"center",placeholder:`"${Ta}"를 입력해 주세요`,hasError:!1,onChange:g})})]}),c.jsxs(ko,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(No,{}),color:z.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"초기화",size:"medium",iconSrc:c.jsx(al,{}),color:z.color.RED,disabled:!p,onClick:u})]})]})},y8=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,x8=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Ea=h.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,A8=h.div`
  display: flex;
  justify-content: center;
`,Na="숙지했습니다",w8=n=>{const{open:i,onClose:l,onUpload:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:g}=G1({confirmText:Na});return c.jsxs(Qn,{title:"데이터 업로드",open:i,onClose:l,children:[c.jsxs(y8,{children:[c.jsx(pe,{type:"normal",fontSize:16,children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(x8,{children:[c.jsx(Ea,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),c.jsx(Ea,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Ea,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(pe,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:Na}),"를 입력해 주십시오."]}),c.jsx(A8,{children:c.jsx(Vt,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:d,textAlign:"center",placeholder:`"${Na}"를 입력해 주세요`,hasError:!1,onChange:g})})]}),c.jsxs(ko,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(No,{}),color:z.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"업로드",size:"medium",iconSrc:c.jsx(F2,{}),color:z.color.LIME,disabled:!p,onClick:u})]})]})},_1=n=>Array.isArray(n)?Array.isArray(n)&&n.every(i=>fc(i)):!1,fc=n=>Ne(n)&&"problemId"in n&&"expiresAt"in n&&typeof n.problemId=="number"&&ul(n.expiresAt)&&!isNaN(n.problemId)&&n.problemId%1===0&&n.problemId>=1e3,S8=n=>{if(!Array.isArray(n))return e1;const i=Date.now();return n.filter(l=>fc(l)&&i<Date.parse(l.expiresAt)).slice(-300)},T8=n=>typeof n=="boolean",H1=n=>Ne(n)&&Te.DATA_VERSION in n&&Te.CHECKED_ALGORITHM_IDS in n&&Te.QUICK_SLOTS in n&&Te.TOTAMJUNG_THEME in n&&Te.HIDER_OPTIONS in n&&Te.RANDOM_DEFENSE_HISTORY in n&&Te.IS_TIER_HIDDEN in n&&Te.FONT_NO in n&&Te.TIMERS in n?(n[B.DATA_VERSION]==="v1.2"||n[B.DATA_VERSION]===2)&&Qa(n[B.CHECKED_ALGORITHM_IDS])&&ic(n[B.QUICK_SLOTS])&&dl(n[B.TOTAMJUNG_THEME])&&ec(n[B.HIDER_OPTIONS])&&L1(n[B.RANDOM_DEFENSE_HISTORY])&&typeof n[B.IS_TIER_HIDDEN]=="boolean"&&dc(n[B.FONT_NO])&&_1(n[B.TIMERS]):!1,z1=n=>Ne(n)&&B.DATA_VERSION in n&&B.CHECKED_ALGORITHM_IDS in n&&B.QUICK_SLOTS in n&&B.TOTAMJUNG_THEME in n&&B.HIDER_OPTIONS in n&&B.RANDOM_DEFENSE_HISTORY in n&&B.IS_TIER_HIDDEN in n&&B.FONT_NO in n&&B.TIMERS in n&&B.GACHA_OPTIONS in n&&B.SHOULD_SHOW_WELCOME_MESSAGE in n?n[B.DATA_VERSION]===3&&Qa(n[B.CHECKED_ALGORITHM_IDS])&&ic(n[B.QUICK_SLOTS])&&dl(n[B.TOTAMJUNG_THEME])&&tc(n[B.HIDER_OPTIONS])&&L1(n[B.RANDOM_DEFENSE_HISTORY])&&typeof n[B.IS_TIER_HIDDEN]=="boolean"&&dc(n[B.FONT_NO])&&_1(n[B.TIMERS])&&I1(n[B.GACHA_OPTIONS])&&T8(n[B.SHOULD_SHOW_WELCOME_MESSAGE]):!1,E8=n=>n===!0,B1=["v1.2",2,3],N8=n=>ec(n)?n:Za,R8=(n,i)=>{const l=d1(n)?{hours:Number(n.hour),minutes:Number(n.minute)}:{hours:0,minutes:20},u=x4(i)?{algorithmHiderUsage:i.predict,problemTagLockUsage:i.lock==="always"?"auto":"click"}:{algorithmHiderUsage:"click",problemTagLockUsage:"click"};return{...Za,problemTagLockDuration:l,...u}},I8=n=>({...n,shouldRevealTierOnHover:!1}),k8=n=>{if(!Ne(n)||!("theme"in n))return"none";const{theme:i}=n;return i==="yes"?"totamjung":"none"},C8=n=>{const{selectedNo:i,...l}=n;return{selectedSlotNo:i,slots:l,hotkey:"Alt"}},j8=n=>{const i=[];return n.forEach(({no:l,title:u,tier:d,date:p})=>{const g=new Date(p).toISOString();ul(g)&&i.push({problemId:l,title:u,tier:d,createdAt:g})}),i},M8=n=>{if(!Ne(n)||!("font"in n))return 0;const i=n.font;return!i8(i)||i==="none"?0:Number(i.split("-")[1])},D8=n=>{if(!d1(n))return[];const{expire:i,problem:l}=n,u=new Date(i);if(isNaN(u.getTime()))return[];if(l===-1)return[];const d=new Date(i).toISOString(),p={problemId:l,expiresAt:d};return fc(p)?[p]:[]},L8=(n,i)=>{const l=a7(n[Bn.QUICK_SLOTS]),u=D7(i[qm.RANDOM_DEFENSE_HISTORY]),d=Ka(n[Bn.CHECKED_ALGORITHM_IDS]),p=uc(n[B.IS_TIER_HIDDEN]),g=k8(n[Bn.SETTINGS]),x=R8(n[Bn.TIMER],n[Bn.SETTINGS]),v=C8(l),T=j8(u),w=M8(n[Bn.SETTINGS]),N=D8(n[Bn.TIMER]);return{[Te.CHECKED_ALGORITHM_IDS]:d,[Te.QUICK_SLOTS]:v,[Te.TOTAMJUNG_THEME]:g,[Te.HIDER_OPTIONS]:x,[Te.RANDOM_DEFENSE_HISTORY]:T,[Te.IS_TIER_HIDDEN]:p,[Te.FONT_NO]:w,[Te.TIMERS]:N,[Te.SHOULD_SHOW_WELCOME_MESSAGE]:!1,[Te.DATA_VERSION]:2}},r2=n=>{const i=N8(n[Te.HIDER_OPTIONS]),l=Ka(n[Te.CHECKED_ALGORITHM_IDS]),u=lc(n[Te.QUICK_SLOTS]),d=O1(n[Te.TOTAMJUNG_THEME]),p=I8(i),g=cc(n[Te.RANDOM_DEFENSE_HISTORY]),x=uc(n[B.IS_TIER_HIDDEN]),v=b1(n[Te.FONT_NO]),T=S8(n[Te.TIMERS]),w=E8(n[Te.SHOULD_SHOW_WELCOME_MESSAGE]);return{[B.CHECKED_ALGORITHM_IDS]:l,[B.QUICK_SLOTS]:u,[B.TOTAMJUNG_THEME]:d,[B.HIDER_OPTIONS]:p,[B.RANDOM_DEFENSE_HISTORY]:g,[B.IS_TIER_HIDDEN]:x,[B.FONT_NO]:v,[B.TIMERS]:T,[B.GACHA_OPTIONS]:t1,[B.SHOULD_SHOW_WELCOME_MESSAGE]:w,[B.DATA_VERSION]:3}},O8=n=>{const{dataVersion:i}=n;return i===2||i==="v1.2"?2:i===3?3:1},b8=async()=>{const[n,i]=await Promise.all([Ae.storage.sync.get(),Ae.storage.local.get()]),l=O8(i);if(l!==3){if(l===1){Ae.storage.local.set(r2(L8(n,i)));return}await Ae.storage.local.set(r2(i))}},G8=async n=>{if(!Ne(n)||!("dataVersion"in n))return!1;const{dataVersion:i}=n;return typeof i!="number"&&typeof i!="string"||!B1.includes(i)||(i==="v1.2"||i===2)&&!H1(n)?!1:i!==3?(await Ae.storage.local.set(n),await b8(),!0):z1(n)?(await Ae.storage.local.set(n),!0):!1},_8=async()=>(await Ae.storage.local.set(e3),!0),H8=(n,i)=>{const l=document.createElement("a"),u=new Blob([n],{type:"text/plain"});l.href=URL.createObjectURL(u),l.download=i,l.click(),URL.revokeObjectURL(l.href)},z8=async()=>{const n=await Ae.runtime.sendMessage({command:mo.FETCH_OPTIONS_DATA}),i=JSON.stringify(n),l=`totamjung_savefile_${M1(new Date).replace(" ","_")}.ttj`;H8(i,l)},B8=()=>{const[n,i]=S.useState("none"),[l,u]=S.useState(void 0),[d,p]=S.useState({errorTitle:"",errorMessage:""}),{errorTitle:g,errorMessage:x}=d,v=M=>{p(M),i("error")};return{activeModal:n,errorTitle:g,errorMessage:x,setActiveModal:i,resetOptionsData:async()=>{await _8()&&(i("none"),location.reload())},extractOptionsData:async()=>{z8(),i("none")},stageOptionsData:async M=>{const H=M.target.files;if(!H)return;const U=H[0];if(U.name.split(".").at(-1)!=="ttj"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(U.size>1048576){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const Z=new FileReader;Z.onload=async()=>{try{const Q=Z.result;if(typeof Q!="string"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const F=JSON.parse(Q),{dataVersion:ne}=F;if(!("dataVersion"in F)||ne!=="v1.2"&&typeof ne!="number"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(!B1.includes(ne)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${ne}으로, 이 버전에서 다룰 수 있는 가장 높은 데이터 버전인 3보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(["v1.2",2].includes(ne)&&!H1(F)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"v1.2.* 버전 데이터의 세이브파일은 업로드 가능하나, 이 세이브파일은 데이터의 일부 또는 전부가 손실된 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(ne===3&&!z1(F)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}u(F),i("upload")}catch{v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},Z.readAsText(U)},uploadOptionsData:async()=>{l&&(G8(l),location.reload())},closeModal:()=>{i("none")}}},P8=h.label`
  display: block;
  width: 270px;
`,U8=h.div`
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
`,F8=h.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIME};
  }
`,V8=h.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:n})=>n.color.LIME};
`,Y8=h.input`
  display: none;
`,$8=n=>{const{onChange:i}=n;return c.jsxs(P8,{children:[c.jsxs(U8,{role:"button",children:[c.jsx(F8,{children:c.jsx(F2,{})}),c.jsx(V8,{children:"설정 데이터 업로드"})]}),c.jsx(Y8,{type:"file",accept:".ttj",onClick:l=>{l.currentTarget.value=""},onChange:i})]})},W8=()=>{const{activeModal:n,errorTitle:i,errorMessage:l,setActiveModal:u,resetOptionsData:d,extractOptionsData:p,stageOptionsData:g,uploadOptionsData:x,closeModal:v}=B8();return c.jsxs(p8,{children:[c.jsx(Nn,{title:"데이터 관리",iconSrc:c.jsx(gg,{})}),c.jsx(Ce,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,iconSrc:c.jsx(mg,{}),onClick:()=>{u("extract")}}),c.jsx($8,{onChange:g}),c.jsx(Ce,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,iconSrc:c.jsx(vg,{}),onClick:()=>{u("reset")}}),c.jsx(pe,{type:"normal",fontSize:16,children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),c.jsxs(pe,{type:"normal",fontSize:16,children:["토탐정 세이브파일의 확장자는 ",c.jsx("b",{children:".ttj"}),"입니다."]}),c.jsx(tn,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:n==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:p,onClose:v}),c.jsx(w8,{open:n==="upload",onUpload:x,onClose:v}),c.jsx(v8,{open:n==="reset",onReset:d,onClose:v}),c.jsx(tn,{title:i,actionType:"confirm",width:"350px",height:"auto",open:n==="error",message:l,onClose:v})]})},Q8=n=>{const{show:i}=n;return i?c.jsxs(t8,{children:[c.jsx(f8,{}),c.jsx(W8,{})]}):null},Z8=()=>{const[n,i]=S.useState("algorithmHider");return{selectedCategory:n,setSelectedCategory:i}},q8=gt`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,K8=h.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,X8=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,J8=h.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,eA=h.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,tA=h.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${q8} 3s forwards infinite;
`,nA=()=>{const{selectedCategory:n,setSelectedCategory:i}=Z8();return c.jsxs(K8,{children:[c.jsxs(X8,{children:[c.jsx(Sm,{selectedCategory:n,onCategoryChange:i}),c.jsxs(J8,{children:[c.jsx(C4,{show:n==="algorithmHider"}),c.jsx(e8,{show:n==="randomDefense"}),c.jsx(Q8,{show:n==="appearanceAndDataManage"})]})]}),c.jsx(eA,{children:c.jsx(tA,{src:Zg,alt:""})})]})};var Fi={},o2;function rA(){if(o2)return Fi;o2=1;var n=Y2();return Fi.createRoot=n.createRoot,Fi.hydrateRoot=n.hydrateRoot,Fi}var oA=rA();const i2=document.getElementById("root"),Ra=i2&&oA.createRoot(i2);Ra==null||Ra.render(c.jsx(S.StrictMode,{children:c.jsxs(zh,{theme:z,children:[c.jsx(Fh,{}),c.jsx(nA,{})]})}));
