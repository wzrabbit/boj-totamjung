(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();try{}catch(n){console.error("[wxt] Failed to initialize plugins",n)}function _p(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var oa={exports:{}},po={},ia={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function bp(){if(id)return fe;id=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.iterator;function C(w){return w===null||typeof w!="object"?null:(w=R&&w[R]||w["@@iterator"],typeof w=="function"?w:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,G={};function P(w,j,ee){this.props=w,this.context=j,this.refs=G,this.updater=ee||D}P.prototype.isReactComponent={},P.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},P.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function te(){}te.prototype=P.prototype;function Z(w,j,ee){this.props=w,this.context=j,this.refs=G,this.updater=ee||D}var Q=Z.prototype=new te;Q.constructor=Z,M(Q,P.prototype),Q.isPureReactComponent=!0;var U=Array.isArray,ne=Object.prototype.hasOwnProperty,q={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function xe(w,j,ee){var re,ae={},ue=null,ye=null;if(j!=null)for(re in j.ref!==void 0&&(ye=j.ref),j.key!==void 0&&(ue=""+j.key),j)ne.call(j,re)&&!Y.hasOwnProperty(re)&&(ae[re]=j[re]);var he=arguments.length-2;if(he===1)ae.children=ee;else if(1<he){for(var me=Array(he),Xe=0;Xe<he;Xe++)me[Xe]=arguments[Xe+2];ae.children=me}if(w&&w.defaultProps)for(re in he=w.defaultProps,he)ae[re]===void 0&&(ae[re]=he[re]);return{$$typeof:n,type:w,key:ue,ref:ye,props:ae,_owner:q.current}}function ze(w,j){return{$$typeof:n,type:w.type,key:j,ref:w.ref,props:w.props,_owner:w._owner}}function Oe(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function Qe(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ee){return j[ee]})}var qe=/\/+/g;function He(w,j){return typeof w=="object"&&w!==null&&w.key!=null?Qe(""+w.key):j.toString(36)}function Ke(w,j,ee,re,ae){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var ye=!1;if(w===null)ye=!0;else switch(ue){case"string":case"number":ye=!0;break;case"object":switch(w.$$typeof){case n:case i:ye=!0}}if(ye)return ye=w,ae=ae(ye),w=re===""?"."+He(ye,0):re,U(ae)?(ee="",w!=null&&(ee=w.replace(qe,"$&/")+"/"),Ke(ae,j,ee,"",function(Xe){return Xe})):ae!=null&&(Oe(ae)&&(ae=ze(ae,ee+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(qe,"$&/")+"/")+w)),j.push(ae)),1;if(ye=0,re=re===""?".":re+":",U(w))for(var he=0;he<w.length;he++){ue=w[he];var me=re+He(ue,he);ye+=Ke(ue,j,ee,me,ae)}else if(me=C(w),typeof me=="function")for(w=me.call(w),he=0;!(ue=w.next()).done;)ue=ue.value,me=re+He(ue,he++),ye+=Ke(ue,j,ee,me,ae);else if(ue==="object")throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ye}function it(w,j,ee){if(w==null)return w;var re=[],ae=0;return Ke(w,re,"","",function(ue){return j.call(ee,ue,ae++)}),re}function pe(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(ee){(w._status===0||w._status===-1)&&(w._status=1,w._result=ee)},function(ee){(w._status===0||w._status===-1)&&(w._status=2,w._result=ee)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var ce={current:null},z={transition:null},V={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:q};function $(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:it,forEach:function(w,j,ee){it(w,function(){j.apply(this,arguments)},ee)},count:function(w){var j=0;return it(w,function(){j++}),j},toArray:function(w){return it(w,function(j){return j})||[]},only:function(w){if(!Oe(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},fe.Component=P,fe.Fragment=l,fe.Profiler=d,fe.PureComponent=Z,fe.StrictMode=u,fe.Suspense=v,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,fe.act=$,fe.cloneElement=function(w,j,ee){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var re=M({},w.props),ae=w.key,ue=w.ref,ye=w._owner;if(j!=null){if(j.ref!==void 0&&(ue=j.ref,ye=q.current),j.key!==void 0&&(ae=""+j.key),w.type&&w.type.defaultProps)var he=w.type.defaultProps;for(me in j)ne.call(j,me)&&!Y.hasOwnProperty(me)&&(re[me]=j[me]===void 0&&he!==void 0?he[me]:j[me])}var me=arguments.length-2;if(me===1)re.children=ee;else if(1<me){he=Array(me);for(var Xe=0;Xe<me;Xe++)he[Xe]=arguments[Xe+2];re.children=he}return{$$typeof:n,type:w.type,key:ae,ref:ue,props:re,_owner:ye}},fe.createContext=function(w){return w={$$typeof:g,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:p,_context:w},w.Consumer=w},fe.createElement=xe,fe.createFactory=function(w){var j=xe.bind(null,w);return j.type=w,j},fe.createRef=function(){return{current:null}},fe.forwardRef=function(w){return{$$typeof:y,render:w}},fe.isValidElement=Oe,fe.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:pe}},fe.memo=function(w,j){return{$$typeof:E,type:w,compare:j===void 0?null:j}},fe.startTransition=function(w){var j=z.transition;z.transition={};try{w()}finally{z.transition=j}},fe.unstable_act=$,fe.useCallback=function(w,j){return ce.current.useCallback(w,j)},fe.useContext=function(w){return ce.current.useContext(w)},fe.useDebugValue=function(){},fe.useDeferredValue=function(w){return ce.current.useDeferredValue(w)},fe.useEffect=function(w,j){return ce.current.useEffect(w,j)},fe.useId=function(){return ce.current.useId()},fe.useImperativeHandle=function(w,j,ee){return ce.current.useImperativeHandle(w,j,ee)},fe.useInsertionEffect=function(w,j){return ce.current.useInsertionEffect(w,j)},fe.useLayoutEffect=function(w,j){return ce.current.useLayoutEffect(w,j)},fe.useMemo=function(w,j){return ce.current.useMemo(w,j)},fe.useReducer=function(w,j,ee){return ce.current.useReducer(w,j,ee)},fe.useRef=function(w){return ce.current.useRef(w)},fe.useState=function(w){return ce.current.useState(w)},fe.useSyncExternalStore=function(w,j,ee){return ce.current.useSyncExternalStore(w,j,ee)},fe.useTransition=function(){return ce.current.useTransition()},fe.version="18.3.1",fe}var ld;function Ha(){return ld||(ld=1,ia.exports=bp()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Gp(){if(sd)return po;sd=1;var n=Ha(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(y,v,E){var S,R={},C=null,D=null;E!==void 0&&(C=""+E),v.key!==void 0&&(C=""+v.key),v.ref!==void 0&&(D=v.ref);for(S in v)u.call(v,S)&&!p.hasOwnProperty(S)&&(R[S]=v[S]);if(y&&y.defaultProps)for(S in v=y.defaultProps,v)R[S]===void 0&&(R[S]=v[S]);return{$$typeof:i,type:y,key:C,ref:D,props:R,_owner:d.current}}return po.Fragment=l,po.jsx=g,po.jsxs=g,po}var ad;function zp(){return ad||(ad=1,oa.exports=Gp()),oa.exports}var c=zp(),T=Ha();const bt=_p(T);var Ze=function(){return Ze=Object.assign||function(i){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ze.apply(this,arguments)};function wr(n,i,l){if(l||arguments.length===2)for(var u=0,d=i.length,p;u<d;u++)(p||!(u in i))&&(p||(p=Array.prototype.slice.call(i,0,u)),p[u]=i[u]);return n.concat(p||Array.prototype.slice.call(i))}var ke="-ms-",vo="-moz-",we="-webkit-",a2="comm",tl="rule",Pa="decl",Hp="@import",c2="@keyframes",Pp="@layer",u2=Math.abs,Ba=String.fromCharCode,Ia=Object.assign;function Bp(n,i){return We(n,0)^45?(((i<<2^We(n,0))<<2^We(n,1))<<2^We(n,2))<<2^We(n,3):0}function d2(n){return n.trim()}function Jt(n,i){return(n=i.exec(n))?n[0]:n}function de(n,i,l){return n.replace(i,l)}function Ui(n,i,l){return n.indexOf(i,l)}function We(n,i){return n.charCodeAt(i)|0}function Sr(n,i,l){return n.slice(i,l)}function Ut(n){return n.length}function f2(n){return n.length}function ho(n,i){return i.push(n),n}function $p(n,i){return n.map(i).join("")}function cd(n,i){return n.filter(function(l){return!Jt(l,i)})}var nl=1,Tr=1,p2=0,It=0,Be=0,Rr="";function rl(n,i,l,u,d,p,g,y){return{value:n,root:i,parent:l,type:u,props:d,children:p,line:nl,column:Tr,length:g,return:"",siblings:y}}function Sn(n,i){return Ia(rl("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function yr(n){for(;n.root;)n=Sn(n.root,{children:[n]});ho(n,n.siblings)}function Up(){return Be}function Fp(){return Be=It>0?We(Rr,--It):0,Tr--,Be===10&&(Tr=1,nl--),Be}function Gt(){return Be=It<p2?We(Rr,It++):0,Tr++,Be===10&&(Tr=1,nl++),Be}function Fn(){return We(Rr,It)}function Fi(){return It}function ol(n,i){return Sr(Rr,n,i)}function ka(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vp(n){return nl=Tr=1,p2=Ut(Rr=n),It=0,[]}function Yp(n){return Rr="",n}function la(n){return d2(ol(It-1,Ca(n===91?n+2:n===40?n+1:n)))}function Wp(n){for(;(Be=Fn())&&Be<33;)Gt();return ka(n)>2||ka(Be)>3?"":" "}function Zp(n,i){for(;--i&&Gt()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return ol(n,Fi()+(i<6&&Fn()==32&&Gt()==32))}function Ca(n){for(;Gt();)switch(Be){case n:return It;case 34:case 39:n!==34&&n!==39&&Ca(Be);break;case 40:n===41&&Ca(n);break;case 92:Gt();break}return It}function Qp(n,i){for(;Gt()&&n+Be!==57;)if(n+Be===84&&Fn()===47)break;return"/*"+ol(i,It-1)+"*"+Ba(n===47?n:Gt())}function qp(n){for(;!ka(Fn());)Gt();return ol(n,It)}function Kp(n){return Yp(Vi("",null,null,null,[""],n=Vp(n),0,[0],n))}function Vi(n,i,l,u,d,p,g,y,v){for(var E=0,S=0,R=g,C=0,D=0,M=0,G=1,P=1,te=1,Z=0,Q="",U=d,ne=p,q=u,Y=Q;P;)switch(M=Z,Z=Gt()){case 40:if(M!=108&&We(Y,R-1)==58){Ui(Y+=de(la(Z),"&","&\f"),"&\f",u2(E?y[E-1]:0))!=-1&&(te=-1);break}case 34:case 39:case 91:Y+=la(Z);break;case 9:case 10:case 13:case 32:Y+=Wp(M);break;case 92:Y+=Zp(Fi()-1,7);continue;case 47:switch(Fn()){case 42:case 47:ho(Xp(Qp(Gt(),Fi()),i,l,v),v);break;default:Y+="/"}break;case 123*G:y[E++]=Ut(Y)*te;case 125*G:case 59:case 0:switch(Z){case 0:case 125:P=0;case 59+S:te==-1&&(Y=de(Y,/\f/g,"")),D>0&&Ut(Y)-R&&ho(D>32?dd(Y+";",u,l,R-1,v):dd(de(Y," ","")+";",u,l,R-2,v),v);break;case 59:Y+=";";default:if(ho(q=ud(Y,i,l,E,S,d,y,Q,U=[],ne=[],R,p),p),Z===123)if(S===0)Vi(Y,i,q,q,U,p,R,y,ne);else switch(C===99&&We(Y,3)===110?100:C){case 100:case 108:case 109:case 115:Vi(n,q,q,u&&ho(ud(n,q,q,0,0,d,y,Q,d,U=[],R,ne),ne),d,ne,R,y,u?U:ne);break;default:Vi(Y,q,q,q,[""],ne,0,y,ne)}}E=S=D=0,G=te=1,Q=Y="",R=g;break;case 58:R=1+Ut(Y),D=M;default:if(G<1){if(Z==123)--G;else if(Z==125&&G++==0&&Fp()==125)continue}switch(Y+=Ba(Z),Z*G){case 38:te=S>0?1:(Y+="\f",-1);break;case 44:y[E++]=(Ut(Y)-1)*te,te=1;break;case 64:Fn()===45&&(Y+=la(Gt())),C=Fn(),S=R=Ut(Q=Y+=qp(Fi())),Z++;break;case 45:M===45&&Ut(Y)==2&&(G=0)}}return p}function ud(n,i,l,u,d,p,g,y,v,E,S,R){for(var C=d-1,D=d===0?p:[""],M=f2(D),G=0,P=0,te=0;G<u;++G)for(var Z=0,Q=Sr(n,C+1,C=u2(P=g[G])),U=n;Z<M;++Z)(U=d2(P>0?D[Z]+" "+Q:de(Q,/&\f/g,D[Z])))&&(v[te++]=U);return rl(n,i,l,d===0?tl:y,v,E,S,R)}function Xp(n,i,l,u){return rl(n,i,l,a2,Ba(Up()),Sr(n,2,-2),0,u)}function dd(n,i,l,u,d){return rl(n,i,l,Pa,Sr(n,0,u),Sr(n,u+1,-1),u,d)}function h2(n,i,l){switch(Bp(n,i)){case 5103:return we+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+n+n;case 4789:return vo+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return we+n+vo+n+ke+n+n;case 5936:switch(We(n,i+11)){case 114:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return we+n+ke+n+n;case 6165:return we+n+ke+"flex-"+n+n;case 5187:return we+n+de(n,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+n;case 5443:return we+n+ke+"flex-item-"+de(n,/flex-|-self/g,"")+(Jt(n,/flex-|baseline/)?"":ke+"grid-row-"+de(n,/flex-|-self/g,""))+n;case 4675:return we+n+ke+"flex-line-pack"+de(n,/align-content|flex-|-self/g,"")+n;case 5548:return we+n+ke+de(n,"shrink","negative")+n;case 5292:return we+n+ke+de(n,"basis","preferred-size")+n;case 6060:return we+"box-"+de(n,"-grow","")+we+n+ke+de(n,"grow","positive")+n;case 4554:return we+de(n,/([^-])(transform)/g,"$1"+we+"$2")+n;case 6187:return de(de(de(n,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),n,"")+n;case 5495:case 3959:return de(n,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(n,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+n+n;case 4200:if(!Jt(n,/flex-|baseline/))return ke+"grid-column-align"+Sr(n,i)+n;break;case 2592:case 3360:return ke+de(n,"template-","")+n;case 4384:case 3616:return l&&l.some(function(u,d){return i=d,Jt(u.props,/grid-\w+-end/)})?~Ui(n+(l=l[i].value),"span",0)?n:ke+de(n,"-start","")+n+ke+"grid-row-span:"+(~Ui(l,"span",0)?Jt(l,/\d+/):+Jt(l,/\d+/)-+Jt(n,/\d+/))+";":ke+de(n,"-start","")+n;case 4896:case 4128:return l&&l.some(function(u){return Jt(u.props,/grid-\w+-start/)})?n:ke+de(de(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return de(n,/(.+)-inline(.+)/,we+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(n)-1-i>6)switch(We(n,i+1)){case 109:if(We(n,i+4)!==45)break;case 102:return de(n,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+vo+(We(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Ui(n,"stretch",0)?h2(de(n,"stretch","fill-available"),i,l)+n:n}break;case 5152:case 5920:return de(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,p,g,y,v,E){return ke+d+":"+p+E+(g?ke+d+"-span:"+(y?v:+v-+p)+E:"")+n});case 4949:if(We(n,i+6)===121)return de(n,":",":"+we)+n;break;case 6444:switch(We(n,We(n,14)===45?18:11)){case 120:return de(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(We(n,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+n;case 100:return de(n,":",":"+ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(n,"scroll-","scroll-snap-")+n}return n}function Qi(n,i){for(var l="",u=0;u<n.length;u++)l+=i(n[u],u,n,i)||"";return l}function Jp(n,i,l,u){switch(n.type){case Pp:if(n.children.length)break;case Hp:case Pa:return n.return=n.return||n.value;case a2:return"";case c2:return n.return=n.value+"{"+Qi(n.children,u)+"}";case tl:if(!Ut(n.value=n.props.join(",")))return""}return Ut(l=Qi(n.children,u))?n.return=n.value+"{"+l+"}":""}function eh(n){var i=f2(n);return function(l,u,d,p){for(var g="",y=0;y<i;y++)g+=n[y](l,u,d,p)||"";return g}}function th(n){return function(i){i.root||(i=i.return)&&n(i)}}function nh(n,i,l,u){if(n.length>-1&&!n.return)switch(n.type){case Pa:n.return=h2(n.value,n.length,l);return;case c2:return Qi([Sn(n,{value:de(n.value,"@","@"+we)})],u);case tl:if(n.length)return $p(l=n.props,function(d){switch(Jt(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yr(Sn(n,{props:[de(d,/:(read-\w+)/,":"+vo+"$1")]})),yr(Sn(n,{props:[d]})),Ia(n,{props:cd(l,u)});break;case"::placeholder":yr(Sn(n,{props:[de(d,/:(plac\w+)/,":"+we+"input-$1")]})),yr(Sn(n,{props:[de(d,/:(plac\w+)/,":"+vo+"$1")]})),yr(Sn(n,{props:[de(d,/:(plac\w+)/,ke+"input-$1")]})),yr(Sn(n,{props:[d]})),Ia(n,{props:cd(l,u)});break}return""})}}var rh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Er=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",g2="active",m2="data-styled-version",il="6.1.19",$a=`/*!sc*/
`,qi=typeof window<"u"&&typeof document<"u",oh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),ih={},ll=Object.freeze([]),Nr=Object.freeze({});function v2(n,i,l){return l===void 0&&(l=Nr),n.theme!==l.theme&&n.theme||i||l.theme}var x2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sh=/(^-|-$)/g;function fd(n){return n.replace(lh,"-").replace(sh,"")}var ah=/(a)(d)/gi,Gi=52,pd=function(n){return String.fromCharCode(n+(n>25?39:97))};function ja(n){var i,l="";for(i=Math.abs(n);i>Gi;i=i/Gi|0)l=pd(i%Gi)+l;return(pd(i%Gi)+l).replace(ah,"$1-$2")}var sa,y2=5381,Ar=function(n,i){for(var l=i.length;l;)n=33*n^i.charCodeAt(--l);return n},A2=function(n){return Ar(y2,n)};function Ua(n){return ja(A2(n)>>>0)}function ch(n){return n.displayName||n.name||"Component"}function aa(n){return typeof n=="string"&&!0}var w2=typeof Symbol=="function"&&Symbol.for,S2=w2?Symbol.for("react.memo"):60115,uh=w2?Symbol.for("react.forward_ref"):60112,dh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},T2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ph=((sa={})[uh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sa[S2]=T2,sa);function hd(n){return("type"in(i=n)&&i.type.$$typeof)===S2?T2:"$$typeof"in n?ph[n.$$typeof]:dh;var i}var hh=Object.defineProperty,gh=Object.getOwnPropertyNames,gd=Object.getOwnPropertySymbols,mh=Object.getOwnPropertyDescriptor,vh=Object.getPrototypeOf,md=Object.prototype;function E2(n,i,l){if(typeof i!="string"){if(md){var u=vh(i);u&&u!==md&&E2(n,u,l)}var d=gh(i);gd&&(d=d.concat(gd(i)));for(var p=hd(n),g=hd(i),y=0;y<d.length;++y){var v=d[y];if(!(v in fh||l&&l[v]||g&&v in g||p&&v in p)){var E=mh(i,v);try{hh(n,v,E)}catch{}}}}return n}function Vn(n){return typeof n=="function"}function Fa(n){return typeof n=="object"&&"styledComponentId"in n}function Bn(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Ki(n,i){if(n.length===0)return"";for(var l=n[0],u=1;u<n.length;u++)l+=n[u];return l}function xo(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ma(n,i,l){if(l===void 0&&(l=!1),!l&&!xo(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var u=0;u<i.length;u++)n[u]=Ma(n[u],i[u]);else if(xo(i))for(var u in i)n[u]=Ma(n[u],i[u]);return n}function Va(n,i){Object.defineProperty(n,"toString",{value:i})}function Yn(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var xh=(function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var l=0,u=0;u<i;u++)l+=this.groupSizes[u];return l},n.prototype.insertRules=function(i,l){if(i>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,p=d;i>=p;)if((p<<=1)<0)throw Yn(16,"".concat(i));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var g=d;g<p;g++)this.groupSizes[g]=0}for(var y=this.indexOfGroup(i+1),v=(g=0,l.length);g<v;g++)this.tag.insertRule(y,l[g])&&(this.groupSizes[i]++,y++)},n.prototype.clearGroup=function(i){if(i<this.length){var l=this.groupSizes[i],u=this.indexOfGroup(i),d=u+l;this.groupSizes[i]=0;for(var p=u;p<d;p++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(i){var l="";if(i>=this.length||this.groupSizes[i]===0)return l;for(var u=this.groupSizes[i],d=this.indexOfGroup(i),p=d+u,g=d;g<p;g++)l+="".concat(this.tag.getRule(g)).concat($a);return l},n})(),Yi=new Map,Xi=new Map,Wi=1,zi=function(n){if(Yi.has(n))return Yi.get(n);for(;Xi.has(Wi);)Wi++;var i=Wi++;return Yi.set(n,i),Xi.set(i,n),i},yh=function(n,i){Wi=i+1,Yi.set(n,i),Xi.set(i,n)},Ah="style[".concat(Er,"][").concat(m2,'="').concat(il,'"]'),wh=new RegExp("^".concat(Er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sh=function(n,i,l){for(var u,d=l.split(","),p=0,g=d.length;p<g;p++)(u=d[p])&&n.registerName(i,u)},Th=function(n,i){for(var l,u=((l=i.textContent)!==null&&l!==void 0?l:"").split($a),d=[],p=0,g=u.length;p<g;p++){var y=u[p].trim();if(y){var v=y.match(wh);if(v){var E=0|parseInt(v[1],10),S=v[2];E!==0&&(yh(S,E),Sh(n,S,v[3]),n.getTag().insertRules(E,d)),d.length=0}else d.push(y)}}},vd=function(n){for(var i=document.querySelectorAll(Ah),l=0,u=i.length;l<u;l++){var d=i[l];d&&d.getAttribute(Er)!==g2&&(Th(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Eh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N2=function(n){var i=document.head,l=n||i,u=document.createElement("style"),d=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(Er,"]")));return v[v.length-1]})(l),p=d!==void 0?d.nextSibling:null;u.setAttribute(Er,g2),u.setAttribute(m2,il);var g=Eh();return g&&u.setAttribute("nonce",g),l.insertBefore(u,p),u},Nh=(function(){function n(i){this.element=N2(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var u=document.styleSheets,d=0,p=u.length;d<p;d++){var g=u[d];if(g.ownerNode===l)return g}throw Yn(17)})(this.element),this.length=0}return n.prototype.insertRule=function(i,l){try{return this.sheet.insertRule(l,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var l=this.sheet.cssRules[i];return l&&l.cssText?l.cssText:""},n})(),Rh=(function(){function n(i){this.element=N2(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,l){if(i<=this.length&&i>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n})(),Ih=(function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,l){return i<=this.length&&(this.rules.splice(i,0,l),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n})(),xd=qi,kh={isServer:!qi,useCSSOMInjection:!oh},Ji=(function(){function n(i,l,u){i===void 0&&(i=Nr),l===void 0&&(l={});var d=this;this.options=Ze(Ze({},kh),i),this.gs=l,this.names=new Map(u),this.server=!!i.isServer,!this.server&&qi&&xd&&(xd=!1,vd(this)),Va(this,function(){return(function(p){for(var g=p.getTag(),y=g.length,v="",E=function(R){var C=(function(te){return Xi.get(te)})(R);if(C===void 0)return"continue";var D=p.names.get(C),M=g.getGroup(R);if(D===void 0||!D.size||M.length===0)return"continue";var G="".concat(Er,".g").concat(R,'[id="').concat(C,'"]'),P="";D!==void 0&&D.forEach(function(te){te.length>0&&(P+="".concat(te,","))}),v+="".concat(M).concat(G,'{content:"').concat(P,'"}').concat($a)},S=0;S<y;S++)E(S);return v})(d)})}return n.registerId=function(i){return zi(i)},n.prototype.rehydrate=function(){!this.server&&qi&&vd(this)},n.prototype.reconstructWithOptions=function(i,l){return l===void 0&&(l=!0),new n(Ze(Ze({},this.options),i),this.gs,l&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(l){var u=l.useCSSOMInjection,d=l.target;return l.isServer?new Ih(d):u?new Nh(d):new Rh(d)})(this.options),new xh(i)));var i},n.prototype.hasNameForId=function(i,l){return this.names.has(i)&&this.names.get(i).has(l)},n.prototype.registerName=function(i,l){if(zi(i),this.names.has(i))this.names.get(i).add(l);else{var u=new Set;u.add(l),this.names.set(i,u)}},n.prototype.insertRules=function(i,l,u){this.registerName(i,l),this.getTag().insertRules(zi(i),u)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(zi(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Ch=/&/g,jh=/^\s*\/\/.*$/gm;function R2(n,i){return n.map(function(l){return l.type==="rule"&&(l.value="".concat(i," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(i," ")),l.props=l.props.map(function(u){return"".concat(i," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=R2(l.children,i)),l})}function Mh(n){var i,l,u,d=Nr,p=d.options,g=p===void 0?Nr:p,y=d.plugins,v=y===void 0?ll:y,E=function(C,D,M){return M.startsWith(l)&&M.endsWith(l)&&M.replaceAll(l,"").length>0?".".concat(i):C},S=v.slice();S.push(function(C){C.type===tl&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(Ch,l).replace(u,E))}),g.prefix&&S.push(nh),S.push(Jp);var R=function(C,D,M,G){D===void 0&&(D=""),M===void 0&&(M=""),G===void 0&&(G="&"),i=G,l=D,u=new RegExp("\\".concat(l,"\\b"),"g");var P=C.replace(jh,""),te=Kp(M||D?"".concat(M," ").concat(D," { ").concat(P," }"):P);g.namespace&&(te=R2(te,g.namespace));var Z=[];return Qi(te,eh(S.concat(th(function(Q){return Z.push(Q)})))),Z};return R.hash=v.length?v.reduce(function(C,D){return D.name||Yn(15),Ar(C,D.name)},y2).toString():"",R}var Dh=new Ji,Da=Mh(),I2=bt.createContext({shouldForwardProp:void 0,styleSheet:Dh,stylis:Da});I2.Consumer;bt.createContext(void 0);function La(){return T.useContext(I2)}var k2=(function(){function n(i,l){var u=this;this.inject=function(d,p){p===void 0&&(p=Da);var g=u.name+p.hash;d.hasNameForId(u.id,g)||d.insertRules(u.id,g,p(u.rules,g,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=l,Va(this,function(){throw Yn(12,String(u.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Da),this.name+i.hash},n})(),Lh=function(n){return n>="A"&&n<="Z"};function yd(n){for(var i="",l=0;l<n.length;l++){var u=n[l];if(l===1&&u==="-"&&n[0]==="-")return n;Lh(u)?i+="-"+u.toLowerCase():i+=u}return i.startsWith("ms-")?"-"+i:i}var C2=function(n){return n==null||n===!1||n===""},j2=function(n){var i,l,u=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!C2(p)&&(Array.isArray(p)&&p.isCss||Vn(p)?u.push("".concat(yd(d),":"),p,";"):xo(p)?u.push.apply(u,wr(wr(["".concat(d," {")],j2(p),!1),["}"],!1)):u.push("".concat(yd(d),": ").concat((i=d,(l=p)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in rh||i.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return u};function Tn(n,i,l,u){if(C2(n))return[];if(Fa(n))return[".".concat(n.styledComponentId)];if(Vn(n)){if(!Vn(p=n)||p.prototype&&p.prototype.isReactComponent||!i)return[n];var d=n(i);return Tn(d,i,l,u)}var p;return n instanceof k2?l?(n.inject(l,u),[n.getName(u)]):[n]:xo(n)?j2(n):Array.isArray(n)?Array.prototype.concat.apply(ll,n.map(function(g){return Tn(g,i,l,u)})):[n.toString()]}function M2(n){for(var i=0;i<n.length;i+=1){var l=n[i];if(Vn(l)&&!Fa(l))return!1}return!0}var Oh=A2(il),_h=(function(){function n(i,l,u){this.rules=i,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&M2(i),this.componentId=l,this.baseHash=Ar(Oh,l),this.baseStyle=u,Ji.registerId(l)}return n.prototype.generateAndInjectStyles=function(i,l,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))d=Bn(d,this.staticRulesId);else{var p=Ki(Tn(this.rules,i,l,u)),g=ja(Ar(this.baseHash,p)>>>0);if(!l.hasNameForId(this.componentId,g)){var y=u(p,".".concat(g),void 0,this.componentId);l.insertRules(this.componentId,g,y)}d=Bn(d,g),this.staticRulesId=g}else{for(var v=Ar(this.baseHash,u.hash),E="",S=0;S<this.rules.length;S++){var R=this.rules[S];if(typeof R=="string")E+=R;else if(R){var C=Ki(Tn(R,i,l,u));v=Ar(v,C+S),E+=C}}if(E){var D=ja(v>>>0);l.hasNameForId(this.componentId,D)||l.insertRules(this.componentId,D,u(E,".".concat(D),void 0,this.componentId)),d=Bn(d,D)}}return d},n})(),yo=bt.createContext(void 0);yo.Consumer;function bh(n){var i=bt.useContext(yo),l=T.useMemo(function(){return(function(u,d){if(!u)throw Yn(14);if(Vn(u)){var p=u(d);return p}if(Array.isArray(u)||typeof u!="object")throw Yn(8);return d?Ze(Ze({},d),u):u})(n.theme,i)},[n.theme,i]);return n.children?bt.createElement(yo.Provider,{value:l},n.children):null}var ca={};function Gh(n,i,l){var u=Fa(n),d=n,p=!aa(n),g=i.attrs,y=g===void 0?ll:g,v=i.componentId,E=v===void 0?(function(U,ne){var q=typeof U!="string"?"sc":fd(U);ca[q]=(ca[q]||0)+1;var Y="".concat(q,"-").concat(Ua(il+q+ca[q]));return ne?"".concat(ne,"-").concat(Y):Y})(i.displayName,i.parentComponentId):v,S=i.displayName,R=S===void 0?(function(U){return aa(U)?"styled.".concat(U):"Styled(".concat(ch(U),")")})(n):S,C=i.displayName&&i.componentId?"".concat(fd(i.displayName),"-").concat(i.componentId):i.componentId||E,D=u&&d.attrs?d.attrs.concat(y).filter(Boolean):y,M=i.shouldForwardProp;if(u&&d.shouldForwardProp){var G=d.shouldForwardProp;if(i.shouldForwardProp){var P=i.shouldForwardProp;M=function(U,ne){return G(U,ne)&&P(U,ne)}}else M=G}var te=new _h(l,C,u?d.componentStyle:void 0);function Z(U,ne){return(function(q,Y,xe){var ze=q.attrs,Oe=q.componentStyle,Qe=q.defaultProps,qe=q.foldedComponentIds,He=q.styledComponentId,Ke=q.target,it=bt.useContext(yo),pe=La(),ce=q.shouldForwardProp||pe.shouldForwardProp,z=v2(Y,it,Qe)||Nr,V=(function(ae,ue,ye){for(var he,me=Ze(Ze({},ue),{className:void 0,theme:ye}),Xe=0;Xe<ae.length;Xe+=1){var Ft=Vn(he=ae[Xe])?he(me):he;for(var kt in Ft)me[kt]=kt==="className"?Bn(me[kt],Ft[kt]):kt==="style"?Ze(Ze({},me[kt]),Ft[kt]):Ft[kt]}return ue.className&&(me.className=Bn(me.className,ue.className)),me})(ze,Y,z),$=V.as||Ke,w={};for(var j in V)V[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&V.theme===z||(j==="forwardedAs"?w.as=V.forwardedAs:ce&&!ce(j,$)||(w[j]=V[j]));var ee=(function(ae,ue){var ye=La(),he=ae.generateAndInjectStyles(ue,ye.styleSheet,ye.stylis);return he})(Oe,V),re=Bn(qe,He);return ee&&(re+=" "+ee),V.className&&(re+=" "+V.className),w[aa($)&&!x2.has($)?"class":"className"]=re,xe&&(w.ref=xe),T.createElement($,w)})(Q,U,ne)}Z.displayName=R;var Q=bt.forwardRef(Z);return Q.attrs=D,Q.componentStyle=te,Q.displayName=R,Q.shouldForwardProp=M,Q.foldedComponentIds=u?Bn(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=C,Q.target=u?d.target:n,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=u?(function(ne){for(var q=[],Y=1;Y<arguments.length;Y++)q[Y-1]=arguments[Y];for(var xe=0,ze=q;xe<ze.length;xe++)Ma(ne,ze[xe],!0);return ne})({},d.defaultProps,U):U}}),Va(Q,function(){return".".concat(Q.styledComponentId)}),p&&E2(Q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function Ad(n,i){for(var l=[n[0]],u=0,d=i.length;u<d;u+=1)l.push(i[u],n[u+1]);return l}var wd=function(n){return Object.assign(n,{isCss:!0})};function le(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];if(Vn(n)||xo(n))return wd(Tn(Ad(ll,wr([n],i,!0))));var u=n;return i.length===0&&u.length===1&&typeof u[0]=="string"?Tn(u):wd(Tn(Ad(u,i)))}function Oa(n,i,l){if(l===void 0&&(l=Nr),!i)throw Yn(1,i);var u=function(d){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];return n(i,l,le.apply(void 0,wr([d],p,!1)))};return u.attrs=function(d){return Oa(n,i,Ze(Ze({},l),{attrs:Array.prototype.concat(l.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Oa(n,i,Ze(Ze({},l),d))},u}var D2=function(n){return Oa(Gh,n)},h=D2;x2.forEach(function(n){h[n]=D2(n)});var zh=(function(){function n(i,l){this.rules=i,this.componentId=l,this.isStatic=M2(i),Ji.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,l,u,d){var p=d(Ki(Tn(this.rules,l,u,d)),""),g=this.componentId+i;u.insertRules(g,g,p)},n.prototype.removeStyles=function(i,l){l.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,l,u,d){i>2&&Ji.registerId(this.componentId+i),this.removeStyles(i,u),this.createStyles(i,l,u,d)},n})();function Hh(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=le.apply(void 0,wr([n],i,!1)),d="sc-global-".concat(Ua(JSON.stringify(u))),p=new zh(u,d),g=function(v){var E=La(),S=bt.useContext(yo),R=bt.useRef(E.styleSheet.allocateGSInstance(d)).current;return E.styleSheet.server&&y(R,v,E.styleSheet,S,E.stylis),bt.useLayoutEffect(function(){if(!E.styleSheet.server)return y(R,v,E.styleSheet,S,E.stylis),function(){return p.removeStyles(R,E.styleSheet)}},[R,v,E.styleSheet,S,E.stylis]),null};function y(v,E,S,R,C){if(p.isStatic)p.renderStyles(v,ih,S,C);else{var D=Ze(Ze({},E),{theme:v2(E,R,g.defaultProps)});p.renderStyles(v,D,S,C)}}return bt.memo(g)}function gt(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=Ki(le.apply(void 0,wr([n],i,!1))),d=Ua(u);return new k2(d,u)}const H={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",DARK_GRAY:"#333333",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK:"#000000",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",ORANGE_TRANSPARENT:"#ff853340",BEIGE:"#c8aaa0",LIME:"#00ed28",GREEN:"#008000",LIGHT_PURPLE:"#dcbfff",PURPLE:"#963eff"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%)",LIGHT_GRAY_FILTER:"brightness(0) saturate(100%) invert(86%) sepia(0%) saturate(1969%) hue-rotate(175deg) brightness(78%) contrast(96%)"},solvedAcColor:{LIME:"#17ce3a",OFF_WHITE:"#f7f8f9",GRAY:"#8a8f95",LIGHT_GRAY:"#b8bcbf",LIGHTER_GRAY:"#dddfe0",INDIGO:"#15202b",DARK_INDIGO:"#0b131b"},bojExtendedColor:{SKY_BLUE:"#008db4",DARK_SKY_BLUE:"#002635",DARK_INDIGO:"#001a26",DARK_GRAY:"#545454",DARKER_GRAY:"#202020",DARKEST_GRAY:"#161616",LIGHT_GRAY:"#a2a4a5"},solvedAcFilter:{LIME:"brightness(0) saturate(100%) invert(60%) sepia(34%) saturate(3800%) hue-rotate(87deg) brightness(105%) contrast(86%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(79%) sepia(4%) saturate(201%) hue-rotate(163deg) brightness(94%) contrast(93%)"},bojExtendedFilter:{DARK_GRAY:"brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(1005%) hue-rotate(147deg) brightness(100%) contrast(88%)",SKY_BLUE:"brightness(0) saturate(100%) invert(31%) sepia(81%) saturate(2692%) hue-rotate(171deg) brightness(96%) contrast(101%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(76%) sepia(5%) saturate(94%) hue-rotate(155deg) brightness(86%) contrast(88%)"}},Ph=Hh`
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
    scrollbar-color: ${H.color.LIGHTEST_BROWN} ${H.color.SLIGHT_DARK_BROWN};
  }
`;var l2,s2;const Bh=(s2=(l2=globalThis.browser)==null?void 0:l2.runtime)!=null&&s2.id?globalThis.browser:globalThis.chrome,Ae=Bh,$h=h.nav`
  display: inline-flex;

  height: 36px;
`,Uh=h.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,Fh=h.li`
  display: flex;
  flex-direction: column;
`,Vh=h.button`
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
`,Yh=h.span`
  display: inline-block;

  width: ${({$isSelected:n})=>n?"100%":"0"};
  height: 2px;

  background-color: ${({theme:n})=>n.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:n})=>n.color.LEMON};
  }
`,Wh=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],Zh=n=>{const{selectedCategory:i,onChange:l}=n;return c.jsx($h,{children:c.jsx(Uh,{children:Wh.map(({displayName:u,category:d})=>c.jsxs(Fh,{children:[c.jsx(Vh,{$isSelected:d===i,onClick:()=>{l(d)},children:u}),c.jsx(Yh,{$isSelected:d===i})]},u))})})},Zi={none:H.color.WHITE,totamjung:H.color.DARK_BROWN,bojExtendedDark:H.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_INDIGO,solvedAcLight:H.color.WHITE,solvedAcDark:H.solvedAcColor.DARK_INDIGO,solvedAcBlack:H.color.BLACK},L2={none:H.color.BLACK,totamjung:H.color.GOLD,bojExtendedDark:H.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:H.color.WHITE,solvedAcLight:H.color.BLACK,solvedAcDark:H.color.WHITE,solvedAcBlack:H.color.WHITE},Qh={...L2,none:H.solvedAcColor.GRAY,solvedAcLight:H.solvedAcColor.GRAY,solvedAcDark:H.solvedAcColor.LIGHT_GRAY,solvedAcBlack:H.solvedAcColor.LIGHT_GRAY},qh={none:H.color.PURE_WHITE,totamjung:H.color.BROWN,bojExtendedDark:H.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:H.color.PURE_WHITE,solvedAcDark:H.solvedAcColor.INDIGO,solvedAcBlack:H.solvedAcColor.DARK_INDIGO},Kh={none:H.color.LIGHT_GRAY,totamjung:H.color.GOLD,bojExtendedDark:H.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_INDIGO,solvedAcLight:H.color.WHITE,solvedAcDark:H.solvedAcColor.DARK_INDIGO,solvedAcBlack:H.color.BLACK},Xh=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,Jh=h.div`
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
`,_2=h.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,b2=h.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,G2=h.div`
  padding: ${({$padding:n})=>n};

  font-size: 16px;
`,eg=h.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:n})=>Zi[n]};
`,tg=h.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:n})=>Kh[n]};
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

    & ${_2} {
      color: ${L2[n]};
    }

    & ${b2} > svg {
      color: ${Qh[n]};
    }

    & ${G2} {
      background-color: ${qh[n]};

      color: ${({theme:i})=>i.color.DARK_GRAY};
    }
  `};
`,ng=n=>{const{onEscKeyPress:i}=n,l=u=>{u.key==="Escape"&&i()};T.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[i])},z2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...n},T.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),rg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),sl=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),og=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),ig=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),lg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),sg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),Eo=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),No=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),ag=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),H2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),cg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),P2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),Ro=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),B2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},T.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),$2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),ug=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},T.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),dg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},T.createElement("g",{fill:"currentColor"},T.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),T.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),fg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...n},T.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),T.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),U2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),pg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),hg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),gg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),mg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"})),vg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},T.createElement("g",{fill:"currentColor"},T.createElement("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"}),T.createElement("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"}))),xg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,color:"currentColor"},T.createElement("path",{d:"M13.5 5.5V2m0 10V9m0 13c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2S6 6.51 6 12s1.5 10 7.5 10"}),T.createElement("path",{d:"M15 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C15 8.199 15 7.966 15 7.5zm-9 5h15M5 3.167L4.619 2m-.59 3.567L3 6"}))),F2=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},T.createElement("rect",{width:12,height:12,x:2,y:10,rx:2,ry:2}),T.createElement("path",{d:"m17.92 14l3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01"}))),yg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"})),Ag=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"})),wg=n=>T.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},T.createElement("path",{fill:"currentColor",d:"M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"}));var ua={exports:{}},pt={},da={exports:{}},fa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function Sg(){return Sd||(Sd=1,(function(n){function i(z,V){var $=z.length;z.push(V);e:for(;0<$;){var w=$-1>>>1,j=z[w];if(0<d(j,V))z[w]=V,z[$]=j,$=w;else break e}}function l(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var V=z[0],$=z.pop();if($!==V){z[0]=$;e:for(var w=0,j=z.length,ee=j>>>1;w<ee;){var re=2*(w+1)-1,ae=z[re],ue=re+1,ye=z[ue];if(0>d(ae,$))ue<j&&0>d(ye,ae)?(z[w]=ye,z[ue]=$,w=ue):(z[w]=ae,z[re]=$,w=re);else if(ue<j&&0>d(ye,$))z[w]=ye,z[ue]=$,w=ue;else break e}}return V}function d(z,V){var $=z.sortIndex-V.sortIndex;return $!==0?$:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var g=Date,y=g.now();n.unstable_now=function(){return g.now()-y}}var v=[],E=[],S=1,R=null,C=3,D=!1,M=!1,G=!1,P=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(z){for(var V=l(E);V!==null;){if(V.callback===null)u(E);else if(V.startTime<=z)u(E),V.sortIndex=V.expirationTime,i(v,V);else break;V=l(E)}}function U(z){if(G=!1,Q(z),!M)if(l(v)!==null)M=!0,pe(ne);else{var V=l(E);V!==null&&ce(U,V.startTime-z)}}function ne(z,V){M=!1,G&&(G=!1,te(xe),xe=-1),D=!0;var $=C;try{for(Q(V),R=l(v);R!==null&&(!(R.expirationTime>V)||z&&!Qe());){var w=R.callback;if(typeof w=="function"){R.callback=null,C=R.priorityLevel;var j=w(R.expirationTime<=V);V=n.unstable_now(),typeof j=="function"?R.callback=j:R===l(v)&&u(v),Q(V)}else u(v);R=l(v)}if(R!==null)var ee=!0;else{var re=l(E);re!==null&&ce(U,re.startTime-V),ee=!1}return ee}finally{R=null,C=$,D=!1}}var q=!1,Y=null,xe=-1,ze=5,Oe=-1;function Qe(){return!(n.unstable_now()-Oe<ze)}function qe(){if(Y!==null){var z=n.unstable_now();Oe=z;var V=!0;try{V=Y(!0,z)}finally{V?He():(q=!1,Y=null)}}else q=!1}var He;if(typeof Z=="function")He=function(){Z(qe)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,it=Ke.port2;Ke.port1.onmessage=qe,He=function(){it.postMessage(null)}}else He=function(){P(qe,0)};function pe(z){Y=z,q||(q=!0,He())}function ce(z,V){xe=P(function(){z(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){M||D||(M=!0,pe(ne))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return l(v)},n.unstable_next=function(z){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var $=C;C=V;try{return z()}finally{C=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=C;C=z;try{return V()}finally{C=$}},n.unstable_scheduleCallback=function(z,V,$){var w=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?w+$:w):$=w,z){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=$+j,z={id:S++,callback:V,priorityLevel:z,startTime:$,expirationTime:j,sortIndex:-1},$>w?(z.sortIndex=$,i(E,z),l(v)===null&&z===l(E)&&(G?(te(xe),xe=-1):G=!0,ce(U,$-w))):(z.sortIndex=j,i(v,z),M||D||(M=!0,pe(ne))),z},n.unstable_shouldYield=Qe,n.unstable_wrapCallback=function(z){var V=C;return function(){var $=C;C=V;try{return z.apply(this,arguments)}finally{C=$}}}})(fa)),fa}var Td;function Tg(){return Td||(Td=1,da.exports=Sg()),da.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function Eg(){if(Ed)return pt;Ed=1;var n=Ha(),i=Tg();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},R={};function C(e){return v.call(R,e)?!0:v.call(S,e)?!1:E.test(e)?R[e]=!0:(S[e]=!0,!1)}function D(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,r,o){if(t===null||typeof t>"u"||D(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function G(e,t,r,o,s,a,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=f}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new G(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new G(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new G(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new G(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new G(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new G(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new G(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new G(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new G(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,Z);P[t]=new G(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,Z);P[t]=new G(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,Z);P[t]=new G(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new G(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new G(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,t,r,o){var s=P.hasOwnProperty(t)?P[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,r,s,o)&&(r=null),o||s===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var U=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),Qe=Symbol.for("react.context"),qe=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,w;function j(e){if(w===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ee=!1;function re(e,t){if(!e||ee)return"";ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var o=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){o=k}e.call(t.prototype)}else{try{throw Error()}catch(k){o=k}e()}}catch(k){if(k&&o&&typeof k.stack=="string"){for(var s=k.stack.split(`
`),a=o.stack.split(`
`),f=s.length-1,m=a.length-1;1<=f&&0<=m&&s[f]!==a[m];)m--;for(;1<=f&&0<=m;f--,m--)if(s[f]!==a[m]){if(f!==1||m!==1)do if(f--,m--,0>m||s[f]!==a[m]){var x=`
`+s[f].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=f&&0<=m);break}}}finally{ee=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?j(e):""}function ae(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case q:return"Portal";case ze:return"Profiler";case xe:return"StrictMode";case He:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qe:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case qe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===xe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){o=""+f,a.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(f){o=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){e._valueTracker||(e._valueTracker=Xe(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=me(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function fc(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pc(e,t){t=t.checked,t!=null&&Q(e,"checked",t,!1)}function fl(e,t){pc(e,t);var r=he(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,r):t.hasOwnProperty("defaultValue")&&pl(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function pl(e,t,r){(t!=="number"||ko(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ir=Array.isArray;function Zn(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Ir(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function mc(e,t){var r=he(t.value),o=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,yc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z1=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){z1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function Ac(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function wc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Ac(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var H1=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(H1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Qn=null,qn=null;function Sc(e){if(e=Kr(e)){if(typeof Al!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Xo(t),Al(e.stateNode,e.type,t))}}function Tc(e){Qn?qn?qn.push(e):qn=[e]:Qn=e}function Ec(){if(Qn){var e=Qn,t=qn;if(qn=Qn=null,Sc(e),t)for(e=0;e<t.length;e++)Sc(t[e])}}function Nc(e,t){return e(t)}function Rc(){}var wl=!1;function Ic(e,t,r){if(wl)return e(t,r);wl=!0;try{return Nc(e,t,r)}finally{wl=!1,(Qn!==null||qn!==null)&&(Rc(),Ec())}}function jr(e,t){var r=e.stateNode;if(r===null)return null;var o=Xo(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Sl=!1;if(y)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Sl=!1}function P1(e,t,r,o,s,a,f,m,x){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(O){this.onError(O)}}var Dr=!1,jo=null,Mo=!1,Tl=null,B1={onError:function(e){Dr=!0,jo=e}};function $1(e,t,r,o,s,a,f,m,x){Dr=!1,jo=null,P1.apply(B1,arguments)}function U1(e,t,r,o,s,a,f,m,x){if($1.apply(this,arguments),Dr){if(Dr){var k=jo;Dr=!1,jo=null}else throw Error(l(198));Mo||(Mo=!0,Tl=k)}}function Rn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cc(e){if(Rn(e)!==e)throw Error(l(188))}function F1(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return Cc(s),e;if(a===o)return Cc(s),t;a=a.sibling}throw Error(l(188))}if(r.return!==o.return)r=s,o=a;else{for(var f=!1,m=s.child;m;){if(m===r){f=!0,r=s,o=a;break}if(m===o){f=!0,o=s,r=a;break}m=m.sibling}if(!f){for(m=a.child;m;){if(m===r){f=!0,r=a,o=s;break}if(m===o){f=!0,o=a,r=s;break}m=m.sibling}if(!f)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function jc(e){return e=F1(e),e!==null?Mc(e):null}function Mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mc(e);if(t!==null)return t;e=e.sibling}return null}var Dc=i.unstable_scheduleCallback,Lc=i.unstable_cancelCallback,V1=i.unstable_shouldYield,Y1=i.unstable_requestPaint,be=i.unstable_now,W1=i.unstable_getCurrentPriorityLevel,El=i.unstable_ImmediatePriority,Oc=i.unstable_UserBlockingPriority,Do=i.unstable_NormalPriority,Z1=i.unstable_LowPriority,_c=i.unstable_IdlePriority,Lo=null,zt=null;function Q1(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:X1,q1=Math.log,K1=Math.LN2;function X1(e){return e>>>=0,e===0?32:31-(q1(e)/K1|0)|0}var Oo=64,_o=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,f=r&268435455;if(f!==0){var m=f&~s;m!==0?o=Lr(m):(a&=f,a!==0&&(o=Lr(a)))}else f=r&~s,f!==0?o=Lr(f):a!==0&&(o=Lr(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Ct(t),s=1<<r,o|=e[r],t&=~s;return o}function J1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var f=31-Ct(a),m=1<<f,x=s[f];x===-1?((m&r)===0||(m&o)!==0)&&(s[f]=J1(m,t)):x<=t&&(e.expiredLanes|=m),a&=~m}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),e}function Rl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Or(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=r}function tf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ct(r),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~a}}function Il(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ct(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var Se=0;function Gc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zc,kl,Hc,Pc,Bc,Cl=!1,Go=[],nn=null,rn=null,on=null,_r=new Map,br=new Map,ln=[],nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $c(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Gr(e,t,r,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Kr(t),t!==null&&kl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function rf(e,t,r,o,s){switch(t){case"focusin":return nn=Gr(nn,e,t,r,o,s),!0;case"dragenter":return rn=Gr(rn,e,t,r,o,s),!0;case"mouseover":return on=Gr(on,e,t,r,o,s),!0;case"pointerover":var a=s.pointerId;return _r.set(a,Gr(_r.get(a)||null,e,t,r,o,s)),!0;case"gotpointercapture":return a=s.pointerId,br.set(a,Gr(br.get(a)||null,e,t,r,o,s)),!0}return!1}function Uc(e){var t=In(e.target);if(t!==null){var r=Rn(t);if(r!==null){if(t=r.tag,t===13){if(t=kc(r),t!==null){e.blockedOn=t,Bc(e.priority,function(){Hc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);xl=o,r.target.dispatchEvent(o),xl=null}else return t=Kr(r),t!==null&&kl(t),e.blockedOn=r,!1;t.shift()}return!0}function Fc(e,t,r){zo(e)&&r.delete(t)}function of(){Cl=!1,nn!==null&&zo(nn)&&(nn=null),rn!==null&&zo(rn)&&(rn=null),on!==null&&zo(on)&&(on=null),_r.forEach(Fc),br.forEach(Fc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,of)))}function Hr(e){function t(s){return zr(s,e)}if(0<Go.length){zr(Go[0],e);for(var r=1;r<Go.length;r++){var o=Go[r];o.blockedOn===e&&(o.blockedOn=null)}}for(nn!==null&&zr(nn,e),rn!==null&&zr(rn,e),on!==null&&zr(on,e),_r.forEach(t),br.forEach(t),r=0;r<ln.length;r++)o=ln[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<ln.length&&(r=ln[0],r.blockedOn===null);)Uc(r),r.blockedOn===null&&ln.shift()}var Kn=U.ReactCurrentBatchConfig,Ho=!0;function lf(e,t,r,o){var s=Se,a=Kn.transition;Kn.transition=null;try{Se=1,jl(e,t,r,o)}finally{Se=s,Kn.transition=a}}function sf(e,t,r,o){var s=Se,a=Kn.transition;Kn.transition=null;try{Se=4,jl(e,t,r,o)}finally{Se=s,Kn.transition=a}}function jl(e,t,r,o){if(Ho){var s=Ml(e,t,r,o);if(s===null)Zl(e,t,o,Po,r),$c(e,o);else if(rf(s,e,t,r,o))o.stopPropagation();else if($c(e,o),t&4&&-1<nf.indexOf(e)){for(;s!==null;){var a=Kr(s);if(a!==null&&zc(a),a=Ml(e,t,r,o),a===null&&Zl(e,t,o,Po,r),a===s)break;s=a}s!==null&&o.stopPropagation()}else Zl(e,t,o,null,r)}}var Po=null;function Ml(e,t,r,o){if(Po=null,e=yl(o),e=In(e),e!==null)if(t=Rn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=kc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function Vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case El:return 1;case Oc:return 4;case Do:case Z1:return 16;case _c:return 536870912;default:return 16}default:return 16}}var sn=null,Dl=null,Bo=null;function Yc(){if(Bo)return Bo;var e,t=Dl,r=t.length,o,s="value"in sn?sn.value:sn.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var f=r-e;for(o=1;o<=f&&t[r-o]===s[a-o];o++);return Bo=s.slice(e,1<o?1-o:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function Wc(){return!1}function mt(e){function t(r,o,s,a,f){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Uo:Wc,this.isPropagationStopped=Wc,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=mt(Xn),Pr=$({},Xn,{view:0,detail:0}),af=mt(Pr),Ol,_l,Br,Fo=$({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Ol=e.screenX-Br.screenX,_l=e.screenY-Br.screenY):_l=Ol=0,Br=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Zc=mt(Fo),cf=$({},Fo,{dataTransfer:0}),uf=mt(cf),df=$({},Pr,{relatedTarget:0}),bl=mt(df),ff=$({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=mt(ff),hf=$({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=mt(hf),mf=$({},Xn,{data:0}),Qc=mt(mf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yf[e])?!!t[e]:!1}function Gl(){return Af}var wf=$({},Pr,{key:function(e){if(e.key){var t=vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=mt(wf),Tf=$({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=mt(Tf),Ef=$({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Nf=mt(Ef),Rf=$({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=mt(Rf),kf=$({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=mt(kf),jf=[9,13,27,32],zl=y&&"CompositionEvent"in window,$r=null;y&&"documentMode"in document&&($r=document.documentMode);var Mf=y&&"TextEvent"in window&&!$r,Kc=y&&(!zl||$r&&8<$r&&11>=$r),Xc=" ",Jc=!1;function e0(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Df(e,t){switch(e){case"compositionend":return t0(t);case"keypress":return t.which!==32?null:(Jc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Jc?null:e;default:return null}}function Lf(e,t){if(Jn)return e==="compositionend"||!zl&&e0(e,t)?(e=Yc(),Bo=Dl=sn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var Of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Of[e.type]:t==="textarea"}function r0(e,t,r,o){Tc(o),t=Qo(t,"onChange"),0<t.length&&(r=new Ll("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Ur=null,Fr=null;function _f(e){w0(e,0)}function Vo(e){var t=or(e);if(kt(t))return e}function bf(e,t){if(e==="change")return t}var o0=!1;if(y){var Hl;if(y){var Pl="oninput"in document;if(!Pl){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),Pl=typeof i0.oninput=="function"}Hl=Pl}else Hl=!1;o0=Hl&&(!document.documentMode||9<document.documentMode)}function l0(){Ur&&(Ur.detachEvent("onpropertychange",s0),Fr=Ur=null)}function s0(e){if(e.propertyName==="value"&&Vo(Fr)){var t=[];r0(t,Fr,e,yl(e)),Ic(_f,t)}}function Gf(e,t,r){e==="focusin"?(l0(),Ur=t,Fr=r,Ur.attachEvent("onpropertychange",s0)):e==="focusout"&&l0()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(Fr)}function Hf(e,t){if(e==="click")return Vo(t)}function Pf(e,t){if(e==="input"||e==="change")return Vo(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Bf;function Vr(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!v.call(t,s)||!jt(e[s],t[s]))return!1}return!0}function a0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function c0(e,t){var r=a0(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=a0(r)}}function u0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?u0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function d0(){for(var e=window,t=ko();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ko(e.document)}return t}function Bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $f(e){var t=d0(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&u0(r.ownerDocument.documentElement,r)){if(o!==null&&Bl(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=c0(r,a);var f=c0(r,o);s&&f&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uf=y&&"documentMode"in document&&11>=document.documentMode,er=null,$l=null,Yr=null,Ul=!1;function f0(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ul||er==null||er!==ko(o)||(o=er,"selectionStart"in o&&Bl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yr&&Vr(Yr,o)||(Yr=o,o=Qo($l,"onSelect"),0<o.length&&(t=new Ll("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=er)))}function Yo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var tr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Fl={},p0={};y&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Wo(e){if(Fl[e])return Fl[e];if(!tr[e])return e;var t=tr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in p0)return Fl[e]=t[r];return e}var h0=Wo("animationend"),g0=Wo("animationiteration"),m0=Wo("animationstart"),v0=Wo("transitionend"),x0=new Map,y0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){x0.set(e,t),p(t,[e])}for(var Vl=0;Vl<y0.length;Vl++){var Yl=y0[Vl],Ff=Yl.toLowerCase(),Vf=Yl[0].toUpperCase()+Yl.slice(1);an(Ff,"on"+Vf)}an(h0,"onAnimationEnd"),an(g0,"onAnimationIteration"),an(m0,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(v0,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function A0(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,U1(o,t,void 0,e),e.currentTarget=null}function w0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var f=o.length-1;0<=f;f--){var m=o[f],x=m.instance,k=m.currentTarget;if(m=m.listener,x!==a&&s.isPropagationStopped())break e;A0(s,m,k),a=x}else for(f=0;f<o.length;f++){if(m=o[f],x=m.instance,k=m.currentTarget,m=m.listener,x!==a&&s.isPropagationStopped())break e;A0(s,m,k),a=x}}}if(Mo)throw e=Tl,Mo=!1,Tl=null,e}function Re(e,t){var r=t[es];r===void 0&&(r=t[es]=new Set);var o=e+"__bubble";r.has(o)||(S0(t,e,2,!1),r.add(o))}function Wl(e,t,r){var o=0;t&&(o|=4),S0(r,e,o,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Zo]){e[Zo]=!0,u.forEach(function(r){r!=="selectionchange"&&(Yf.has(r)||Wl(r,!1,e),Wl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,Wl("selectionchange",!1,t))}}function S0(e,t,r,o){switch(Vc(t)){case 1:var s=lf;break;case 4:s=sf;break;default:s=jl}r=s.bind(null,t,r,e),s=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Zl(e,t,r,o,s){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var m=o.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(f===4)for(f=o.return;f!==null;){var x=f.tag;if((x===3||x===4)&&(x=f.stateNode.containerInfo,x===s||x.nodeType===8&&x.parentNode===s))return;f=f.return}for(;m!==null;){if(f=In(m),f===null)return;if(x=f.tag,x===5||x===6){o=a=f;continue e}m=m.parentNode}}o=o.return}Ic(function(){var k=a,O=yl(r),_=[];e:{var L=x0.get(e);if(L!==void 0){var F=Ll,K=e;switch(e){case"keypress":if($o(r)===0)break e;case"keydown":case"keyup":F=Sf;break;case"focusin":K="focus",F=bl;break;case"focusout":K="blur",F=bl;break;case"beforeblur":case"afterblur":F=bl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Nf;break;case h0:case g0:case m0:F=pf;break;case v0:F=If;break;case"scroll":F=af;break;case"wheel":F=Cf;break;case"copy":case"cut":case"paste":F=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=qc}var X=(t&4)!==0,Ge=!X&&e==="scroll",N=X?L!==null?L+"Capture":null:L;X=[];for(var A=k,I;A!==null;){I=A;var b=I.stateNode;if(I.tag===5&&b!==null&&(I=b,N!==null&&(b=jr(A,N),b!=null&&X.push(Qr(A,b,I)))),Ge)break;A=A.return}0<X.length&&(L=new F(L,K,null,r,O),_.push({event:L,listeners:X}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",L&&r!==xl&&(K=r.relatedTarget||r.fromElement)&&(In(K)||K[Vt]))break e;if((F||L)&&(L=O.window===O?O:(L=O.ownerDocument)?L.defaultView||L.parentWindow:window,F?(K=r.relatedTarget||r.toElement,F=k,K=K?In(K):null,K!==null&&(Ge=Rn(K),K!==Ge||K.tag!==5&&K.tag!==6)&&(K=null)):(F=null,K=k),F!==K)){if(X=Zc,b="onMouseLeave",N="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(X=qc,b="onPointerLeave",N="onPointerEnter",A="pointer"),Ge=F==null?L:or(F),I=K==null?L:or(K),L=new X(b,A+"leave",F,r,O),L.target=Ge,L.relatedTarget=I,b=null,In(O)===k&&(X=new X(N,A+"enter",K,r,O),X.target=I,X.relatedTarget=Ge,b=X),Ge=b,F&&K)t:{for(X=F,N=K,A=0,I=X;I;I=nr(I))A++;for(I=0,b=N;b;b=nr(b))I++;for(;0<A-I;)X=nr(X),A--;for(;0<I-A;)N=nr(N),I--;for(;A--;){if(X===N||N!==null&&X===N.alternate)break t;X=nr(X),N=nr(N)}X=null}else X=null;F!==null&&T0(_,L,F,X,!1),K!==null&&Ge!==null&&T0(_,Ge,K,X,!0)}}e:{if(L=k?or(k):window,F=L.nodeName&&L.nodeName.toLowerCase(),F==="select"||F==="input"&&L.type==="file")var J=bf;else if(n0(L))if(o0)J=Pf;else{J=zf;var oe=Gf}else(F=L.nodeName)&&F.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(J=Hf);if(J&&(J=J(e,k))){r0(_,J,r,O);break e}oe&&oe(e,L,k),e==="focusout"&&(oe=L._wrapperState)&&oe.controlled&&L.type==="number"&&pl(L,"number",L.value)}switch(oe=k?or(k):window,e){case"focusin":(n0(oe)||oe.contentEditable==="true")&&(er=oe,$l=k,Yr=null);break;case"focusout":Yr=$l=er=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,f0(_,r,O);break;case"selectionchange":if(Uf)break;case"keydown":case"keyup":f0(_,r,O)}var ie;if(zl)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Jn?e0(e,r)&&(se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(se="onCompositionStart");se&&(Kc&&r.locale!=="ko"&&(Jn||se!=="onCompositionStart"?se==="onCompositionEnd"&&Jn&&(ie=Yc()):(sn=O,Dl="value"in sn?sn.value:sn.textContent,Jn=!0)),oe=Qo(k,se),0<oe.length&&(se=new Qc(se,e,null,r,O),_.push({event:se,listeners:oe}),ie?se.data=ie:(ie=t0(r),ie!==null&&(se.data=ie)))),(ie=Mf?Df(e,r):Lf(e,r))&&(k=Qo(k,"onBeforeInput"),0<k.length&&(O=new Qc("onBeforeInput","beforeinput",null,r,O),_.push({event:O,listeners:k}),O.data=ie))}w0(_,t)})}function Qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Qo(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=jr(e,r),a!=null&&o.unshift(Qr(e,a,s)),a=jr(e,t),a!=null&&o.push(Qr(e,a,s))),e=e.return}return o}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function T0(e,t,r,o,s){for(var a=t._reactName,f=[];r!==null&&r!==o;){var m=r,x=m.alternate,k=m.stateNode;if(x!==null&&x===o)break;m.tag===5&&k!==null&&(m=k,s?(x=jr(r,a),x!=null&&f.unshift(Qr(r,x,m))):s||(x=jr(r,a),x!=null&&f.push(Qr(r,x,m)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var Wf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Zf,"")}function qo(e,t,r){if(t=E0(t),E0(e)!==t&&r)throw Error(l(425))}function Ko(){}var Ql=null,ql=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,Qf=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(e){return N0.resolve(null).then(e).catch(Kf)}:Xl;function Kf(e){setTimeout(function(){throw e})}function Jl(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),Hr(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Hr(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function R0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+rr,qr="__reactProps$"+rr,Vt="__reactContainer$"+rr,es="__reactEvents$"+rr,Xf="__reactListeners$"+rr,Jf="__reactHandles$"+rr;function In(e){var t=e[Ht];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Vt]||r[Ht]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=R0(e);e!==null;){if(r=e[Ht])return r;e=R0(e)}return t}e=r,r=e.parentNode}return null}function Kr(e){return e=e[Ht]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Xo(e){return e[qr]||null}var ts=[],ir=-1;function un(e){return{current:e}}function Ie(e){0>ir||(e.current=ts[ir],ts[ir]=null,ir--)}function Ne(e,t){ir++,ts[ir]=e.current,e.current=t}var dn={},tt=un(dn),at=un(!1),kn=dn;function lr(e,t){var r=e.type.contextTypes;if(!r)return dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ct(e){return e=e.childContextTypes,e!=null}function Jo(){Ie(at),Ie(tt)}function I0(e,t,r){if(tt.current!==dn)throw Error(l(168));Ne(tt,t),Ne(at,r)}function k0(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,ye(e)||"Unknown",s));return $({},r,o)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,kn=tt.current,Ne(tt,e),Ne(at,at.current),!0}function C0(e,t,r){var o=e.stateNode;if(!o)throw Error(l(169));r?(e=k0(e,t,kn),o.__reactInternalMemoizedMergedChildContext=e,Ie(at),Ie(tt),Ne(tt,e)):Ie(at),Ne(at,r)}var Yt=null,ti=!1,ns=!1;function j0(e){Yt===null?Yt=[e]:Yt.push(e)}function ep(e){ti=!0,j0(e)}function fn(){if(!ns&&Yt!==null){ns=!0;var e=0,t=Se;try{var r=Yt;for(Se=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Yt=null,ti=!1}catch(s){throw Yt!==null&&(Yt=Yt.slice(e+1)),Dc(El,fn),s}finally{Se=t,ns=!1}}return null}var sr=[],ar=0,ni=null,ri=0,wt=[],St=0,Cn=null,Wt=1,Zt="";function jn(e,t){sr[ar++]=ri,sr[ar++]=ni,ni=e,ri=t}function M0(e,t,r){wt[St++]=Wt,wt[St++]=Zt,wt[St++]=Cn,Cn=e;var o=Wt;e=Zt;var s=32-Ct(o)-1;o&=~(1<<s),r+=1;var a=32-Ct(t)+s;if(30<a){var f=s-s%5;a=(o&(1<<f)-1).toString(32),o>>=f,s-=f,Wt=1<<32-Ct(t)+s|r<<s|o,Zt=a+e}else Wt=1<<a|r<<s|o,Zt=e}function rs(e){e.return!==null&&(jn(e,1),M0(e,1,0))}function os(e){for(;e===ni;)ni=sr[--ar],sr[ar]=null,ri=sr[--ar],sr[ar]=null;for(;e===Cn;)Cn=wt[--St],wt[St]=null,Zt=wt[--St],wt[St]=null,Wt=wt[--St],wt[St]=null}var vt=null,xt=null,je=!1,Mt=null;function D0(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function L0(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,xt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Cn!==null?{id:Wt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,xt=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(je){var t=xt;if(t){var r=t;if(!L0(e,t)){if(is(e))throw Error(l(418));t=cn(r.nextSibling);var o=vt;t&&L0(e,t)?D0(o,r):(e.flags=e.flags&-4097|2,je=!1,vt=e)}}else{if(is(e))throw Error(l(418));e.flags=e.flags&-4097|2,je=!1,vt=e}}}function O0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function oi(e){if(e!==vt)return!1;if(!je)return O0(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=xt)){if(is(e))throw _0(),Error(l(418));for(;t;)D0(e,t),t=cn(t.nextSibling)}if(O0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=cn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=vt?cn(e.stateNode.nextSibling):null;return!0}function _0(){for(var e=xt;e;)e=cn(e.nextSibling)}function cr(){xt=vt=null,je=!1}function ss(e){Mt===null?Mt=[e]:Mt.push(e)}var tp=U.ReactCurrentBatchConfig;function Xr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var o=r.stateNode}if(!o)throw Error(l(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(f){var m=s.refs;f===null?delete m[a]:m[a]=f},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function b0(e){var t=e._init;return t(e._payload)}function G0(e){function t(N,A){if(e){var I=N.deletions;I===null?(N.deletions=[A],N.flags|=16):I.push(A)}}function r(N,A){if(!e)return null;for(;A!==null;)t(N,A),A=A.sibling;return null}function o(N,A){for(N=new Map;A!==null;)A.key!==null?N.set(A.key,A):N.set(A.index,A),A=A.sibling;return N}function s(N,A){return N=An(N,A),N.index=0,N.sibling=null,N}function a(N,A,I){return N.index=I,e?(I=N.alternate,I!==null?(I=I.index,I<A?(N.flags|=2,A):I):(N.flags|=2,A)):(N.flags|=1048576,A)}function f(N){return e&&N.alternate===null&&(N.flags|=2),N}function m(N,A,I,b){return A===null||A.tag!==6?(A=Xs(I,N.mode,b),A.return=N,A):(A=s(A,I),A.return=N,A)}function x(N,A,I,b){var J=I.type;return J===Y?O(N,A,I.props.children,b,I.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===pe&&b0(J)===A.type)?(b=s(A,I.props),b.ref=Xr(N,A,I),b.return=N,b):(b=Ci(I.type,I.key,I.props,null,N.mode,b),b.ref=Xr(N,A,I),b.return=N,b)}function k(N,A,I,b){return A===null||A.tag!==4||A.stateNode.containerInfo!==I.containerInfo||A.stateNode.implementation!==I.implementation?(A=Js(I,N.mode,b),A.return=N,A):(A=s(A,I.children||[]),A.return=N,A)}function O(N,A,I,b,J){return A===null||A.tag!==7?(A=zn(I,N.mode,b,J),A.return=N,A):(A=s(A,I),A.return=N,A)}function _(N,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Xs(""+A,N.mode,I),A.return=N,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ne:return I=Ci(A.type,A.key,A.props,null,N.mode,I),I.ref=Xr(N,null,A),I.return=N,I;case q:return A=Js(A,N.mode,I),A.return=N,A;case pe:var b=A._init;return _(N,b(A._payload),I)}if(Ir(A)||V(A))return A=zn(A,N.mode,I,null),A.return=N,A;ii(N,A)}return null}function L(N,A,I,b){var J=A!==null?A.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return J!==null?null:m(N,A,""+I,b);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ne:return I.key===J?x(N,A,I,b):null;case q:return I.key===J?k(N,A,I,b):null;case pe:return J=I._init,L(N,A,J(I._payload),b)}if(Ir(I)||V(I))return J!==null?null:O(N,A,I,b,null);ii(N,I)}return null}function F(N,A,I,b,J){if(typeof b=="string"&&b!==""||typeof b=="number")return N=N.get(I)||null,m(A,N,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ne:return N=N.get(b.key===null?I:b.key)||null,x(A,N,b,J);case q:return N=N.get(b.key===null?I:b.key)||null,k(A,N,b,J);case pe:var oe=b._init;return F(N,A,I,oe(b._payload),J)}if(Ir(b)||V(b))return N=N.get(I)||null,O(A,N,b,J,null);ii(A,b)}return null}function K(N,A,I,b){for(var J=null,oe=null,ie=A,se=A=0,Ye=null;ie!==null&&se<I.length;se++){ie.index>se?(Ye=ie,ie=null):Ye=ie.sibling;var ve=L(N,ie,I[se],b);if(ve===null){ie===null&&(ie=Ye);break}e&&ie&&ve.alternate===null&&t(N,ie),A=a(ve,A,se),oe===null?J=ve:oe.sibling=ve,oe=ve,ie=Ye}if(se===I.length)return r(N,ie),je&&jn(N,se),J;if(ie===null){for(;se<I.length;se++)ie=_(N,I[se],b),ie!==null&&(A=a(ie,A,se),oe===null?J=ie:oe.sibling=ie,oe=ie);return je&&jn(N,se),J}for(ie=o(N,ie);se<I.length;se++)Ye=F(ie,N,se,I[se],b),Ye!==null&&(e&&Ye.alternate!==null&&ie.delete(Ye.key===null?se:Ye.key),A=a(Ye,A,se),oe===null?J=Ye:oe.sibling=Ye,oe=Ye);return e&&ie.forEach(function(wn){return t(N,wn)}),je&&jn(N,se),J}function X(N,A,I,b){var J=V(I);if(typeof J!="function")throw Error(l(150));if(I=J.call(I),I==null)throw Error(l(151));for(var oe=J=null,ie=A,se=A=0,Ye=null,ve=I.next();ie!==null&&!ve.done;se++,ve=I.next()){ie.index>se?(Ye=ie,ie=null):Ye=ie.sibling;var wn=L(N,ie,ve.value,b);if(wn===null){ie===null&&(ie=Ye);break}e&&ie&&wn.alternate===null&&t(N,ie),A=a(wn,A,se),oe===null?J=wn:oe.sibling=wn,oe=wn,ie=Ye}if(ve.done)return r(N,ie),je&&jn(N,se),J;if(ie===null){for(;!ve.done;se++,ve=I.next())ve=_(N,ve.value,b),ve!==null&&(A=a(ve,A,se),oe===null?J=ve:oe.sibling=ve,oe=ve);return je&&jn(N,se),J}for(ie=o(N,ie);!ve.done;se++,ve=I.next())ve=F(ie,N,se,ve.value,b),ve!==null&&(e&&ve.alternate!==null&&ie.delete(ve.key===null?se:ve.key),A=a(ve,A,se),oe===null?J=ve:oe.sibling=ve,oe=ve);return e&&ie.forEach(function(Op){return t(N,Op)}),je&&jn(N,se),J}function Ge(N,A,I,b){if(typeof I=="object"&&I!==null&&I.type===Y&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ne:e:{for(var J=I.key,oe=A;oe!==null;){if(oe.key===J){if(J=I.type,J===Y){if(oe.tag===7){r(N,oe.sibling),A=s(oe,I.props.children),A.return=N,N=A;break e}}else if(oe.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===pe&&b0(J)===oe.type){r(N,oe.sibling),A=s(oe,I.props),A.ref=Xr(N,oe,I),A.return=N,N=A;break e}r(N,oe);break}else t(N,oe);oe=oe.sibling}I.type===Y?(A=zn(I.props.children,N.mode,b,I.key),A.return=N,N=A):(b=Ci(I.type,I.key,I.props,null,N.mode,b),b.ref=Xr(N,A,I),b.return=N,N=b)}return f(N);case q:e:{for(oe=I.key;A!==null;){if(A.key===oe)if(A.tag===4&&A.stateNode.containerInfo===I.containerInfo&&A.stateNode.implementation===I.implementation){r(N,A.sibling),A=s(A,I.children||[]),A.return=N,N=A;break e}else{r(N,A);break}else t(N,A);A=A.sibling}A=Js(I,N.mode,b),A.return=N,N=A}return f(N);case pe:return oe=I._init,Ge(N,A,oe(I._payload),b)}if(Ir(I))return K(N,A,I,b);if(V(I))return X(N,A,I,b);ii(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,A!==null&&A.tag===6?(r(N,A.sibling),A=s(A,I),A.return=N,N=A):(r(N,A),A=Xs(I,N.mode,b),A.return=N,N=A),f(N)):r(N,A)}return Ge}var ur=G0(!0),z0=G0(!1),li=un(null),si=null,dr=null,as=null;function cs(){as=dr=si=null}function us(e){var t=li.current;Ie(li),e._currentValue=t}function ds(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function fr(e,t){si=e,as=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(si===null)throw Error(l(308));dr=e,si.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Mn=null;function fs(e){Mn===null?Mn=[e]:Mn.push(e)}function H0(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,fs(t)):(r.next=s.next,s.next=r),t.interleaved=r,Qt(e,o)}function Qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pn=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ge&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Qt(e,r)}return s=o.interleaved,s===null?(t.next=t,fs(o)):(t.next=s.next,s.next=t),o.interleaved=t,Qt(e,r)}function ai(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Il(e,r)}}function B0(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=f:a=a.next=f,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ci(e,t,r,o){var s=e.updateQueue;pn=!1;var a=s.firstBaseUpdate,f=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var x=m,k=x.next;x.next=null,f===null?a=k:f.next=k,f=x;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==f&&(m===null?O.firstBaseUpdate=k:m.next=k,O.lastBaseUpdate=x))}if(a!==null){var _=s.baseState;f=0,O=k=x=null,m=a;do{var L=m.lane,F=m.eventTime;if((o&L)===L){O!==null&&(O=O.next={eventTime:F,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var K=e,X=m;switch(L=t,F=r,X.tag){case 1:if(K=X.payload,typeof K=="function"){_=K.call(F,_,L);break e}_=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=X.payload,L=typeof K=="function"?K.call(F,_,L):K,L==null)break e;_=$({},_,L);break e;case 2:pn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,L=s.effects,L===null?s.effects=[m]:L.push(m))}else F={eventTime:F,lane:L,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(k=O=F,x=_):O=O.next=F,f|=L;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;L=m,m=L.next,L.next=null,s.lastBaseUpdate=L,s.shared.pending=null}}while(!0);if(O===null&&(x=_),s.baseState=x,s.firstBaseUpdate=k,s.lastBaseUpdate=O,t=s.shared.interleaved,t!==null){s=t;do f|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);On|=f,e.lanes=f,e.memoizedState=_}}function $0(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var Jr={},Pt=un(Jr),eo=un(Jr),to=un(Jr);function Dn(e){if(e===Jr)throw Error(l(174));return e}function hs(e,t){switch(Ne(to,t),Ne(eo,e),Ne(Pt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}Ie(Pt),Ne(Pt,t)}function pr(){Ie(Pt),Ie(eo),Ie(to)}function U0(e){Dn(to.current);var t=Dn(Pt.current),r=gl(t,e.type);t!==r&&(Ne(eo,e),Ne(Pt,r))}function gs(e){eo.current===e&&(Ie(Pt),Ie(eo))}var Me=un(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ms=[];function vs(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var di=U.ReactCurrentDispatcher,xs=U.ReactCurrentBatchConfig,Ln=0,De=null,$e=null,Fe=null,fi=!1,no=!1,ro=0,np=0;function nt(){throw Error(l(321))}function ys(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function As(e,t,r,o,s,a){if(Ln=a,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?lp:sp,e=r(o,s),no){a=0;do{if(no=!1,ro=0,25<=a)throw Error(l(301));a+=1,Fe=$e=null,t.updateQueue=null,di.current=ap,e=r(o,s)}while(no)}if(di.current=gi,t=$e!==null&&$e.next!==null,Ln=0,Fe=$e=De=null,fi=!1,t)throw Error(l(300));return e}function ws(){var e=ro!==0;return ro=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?De.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Et(){if($e===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Fe===null?De.memoizedState:Fe.next;if(t!==null)Fe=t,$e=e;else{if(e===null)throw Error(l(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Fe===null?De.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function oo(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=$e,s=o.baseQueue,a=r.pending;if(a!==null){if(s!==null){var f=s.next;s.next=a.next,a.next=f}o.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,o=o.baseState;var m=f=null,x=null,k=a;do{var O=k.lane;if((Ln&O)===O)x!==null&&(x=x.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),o=k.hasEagerState?k.eagerState:e(o,k.action);else{var _={lane:O,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};x===null?(m=x=_,f=o):x=x.next=_,De.lanes|=O,On|=O}k=k.next}while(k!==null&&k!==a);x===null?f=o:x.next=m,jt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=x,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do a=s.lane,De.lanes|=a,On|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ts(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var f=s=s.next;do a=e(a,f.action),f=f.next;while(f!==s);jt(a,t.memoizedState)||(ut=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function F0(){}function V0(e,t){var r=De,o=Et(),s=t(),a=!jt(o.memoizedState,s);if(a&&(o.memoizedState=s,ut=!0),o=o.queue,Es(Z0.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||Fe!==null&&Fe.memoizedState.tag&1){if(r.flags|=2048,io(9,W0.bind(null,r,o,s,t),void 0,null),Ve===null)throw Error(l(349));(Ln&30)!==0||Y0(r,t,s)}return s}function Y0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function W0(e,t,r,o){t.value=r,t.getSnapshot=o,Q0(t)&&q0(e)}function Z0(e,t,r){return r(function(){Q0(t)&&q0(e)})}function Q0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function q0(e){var t=Qt(e,1);t!==null&&_t(t,e,1,-1)}function K0(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,De,e),[t.memoizedState,e]}function io(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function X0(){return Et().memoizedState}function pi(e,t,r,o){var s=Bt();De.flags|=e,s.memoizedState=io(1|t,r,void 0,o===void 0?null:o)}function hi(e,t,r,o){var s=Et();o=o===void 0?null:o;var a=void 0;if($e!==null){var f=$e.memoizedState;if(a=f.destroy,o!==null&&ys(o,f.deps)){s.memoizedState=io(t,r,a,o);return}}De.flags|=e,s.memoizedState=io(1|t,r,a,o)}function J0(e,t){return pi(8390656,8,e,t)}function Es(e,t){return hi(2048,8,e,t)}function eu(e,t){return hi(4,2,e,t)}function tu(e,t){return hi(4,4,e,t)}function nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ru(e,t,r){return r=r!=null?r.concat([e]):null,hi(4,4,nu.bind(null,t,e),r)}function Ns(){}function ou(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&ys(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function iu(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&ys(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function lu(e,t,r){return(Ln&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(jt(r,t)||(r=bc(),De.lanes|=r,On|=r,e.baseState=!0),t)}function rp(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var o=xs.transition;xs.transition={};try{e(!1),t()}finally{Se=r,xs.transition=o}}function su(){return Et().memoizedState}function op(e,t,r){var o=xn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},au(e))cu(t,r);else if(r=H0(e,t,r,o),r!==null){var s=st();_t(r,e,o,s),uu(r,t,o)}}function ip(e,t,r){var o=xn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(au(e))cu(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var f=t.lastRenderedState,m=a(f,r);if(s.hasEagerState=!0,s.eagerState=m,jt(m,f)){var x=t.interleaved;x===null?(s.next=s,fs(t)):(s.next=x.next,x.next=s),t.interleaved=s;return}}catch{}finally{}r=H0(e,t,s,o),r!==null&&(s=st(),_t(r,e,o,s),uu(r,t,o))}}function au(e){var t=e.alternate;return e===De||t!==null&&t===De}function cu(e,t){no=fi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function uu(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Il(e,r)}}var gi={readContext:Tt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},lp={readContext:Tt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:J0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,pi(4194308,4,nu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return pi(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Bt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=op.bind(null,De,e),[o.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:K0,useDebugValue:Ns,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=K0(!1),t=e[0];return e=rp.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=De,s=Bt();if(je){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ve===null)throw Error(l(349));(Ln&30)!==0||Y0(o,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,J0(Z0.bind(null,o,a,e),[e]),o.flags|=2048,io(9,W0.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Ve.identifierPrefix;if(je){var r=Zt,o=Wt;r=(o&~(1<<32-Ct(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=ro++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=np++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sp={readContext:Tt,useCallback:ou,useContext:Tt,useEffect:Es,useImperativeHandle:ru,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:iu,useReducer:Ss,useRef:X0,useState:function(){return Ss(oo)},useDebugValue:Ns,useDeferredValue:function(e){var t=Et();return lu(t,$e.memoizedState,e)},useTransition:function(){var e=Ss(oo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:F0,useSyncExternalStore:V0,useId:su,unstable_isNewReconciler:!1},ap={readContext:Tt,useCallback:ou,useContext:Tt,useEffect:Es,useImperativeHandle:ru,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:iu,useReducer:Ts,useRef:X0,useState:function(){return Ts(oo)},useDebugValue:Ns,useDeferredValue:function(e){var t=Et();return $e===null?t.memoizedState=e:lu(t,$e.memoizedState,e)},useTransition:function(){var e=Ts(oo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:F0,useSyncExternalStore:V0,useId:su,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Rs(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var mi={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=st(),s=xn(e),a=qt(o,s);a.payload=t,r!=null&&(a.callback=r),t=hn(e,a,s),t!==null&&(_t(t,e,s,o),ai(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=st(),s=xn(e),a=qt(o,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=hn(e,a,s),t!==null&&(_t(t,e,s,o),ai(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),o=xn(e),s=qt(r,o);s.tag=2,t!=null&&(s.callback=t),t=hn(e,s,o),t!==null&&(_t(t,e,o,r),ai(t,e,o))}};function du(e,t,r,o,s,a,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,f):t.prototype&&t.prototype.isPureReactComponent?!Vr(r,o)||!Vr(s,a):!0}function fu(e,t,r){var o=!1,s=dn,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(s=ct(t)?kn:tt.current,o=t.contextTypes,a=(o=o!=null)?lr(e,s):dn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function pu(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function Is(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},ps(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Tt(a):(a=ct(t)?kn:tt.current,s.context=lr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Rs(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&mi.enqueueReplaceState(s,s.state,null),ci(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var r="",o=t;do r+=ae(o),o=o.return;while(o);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function ks(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function hu(e,t,r){r=qt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Ti||(Ti=!0,Fs=o),Cs(e,t)},r}function gu(e,t,r){r=qt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Cs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Cs(e,t),typeof o!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function mu(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new cp;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=Tp.bind(null,e,t,r),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,r,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=qt(-1,1),t.tag=2,hn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var up=U.ReactCurrentOwner,ut=!1;function lt(e,t,r,o){t.child=e===null?z0(t,null,r,o):ur(t,e.child,r,o)}function yu(e,t,r,o,s){r=r.render;var a=t.ref;return fr(t,s),o=As(e,t,r,o,a,s),r=ws(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Kt(e,t,s)):(je&&r&&rs(t),t.flags|=1,lt(e,t,o,s),t.child)}function Au(e,t,r,o,s){if(e===null){var a=r.type;return typeof a=="function"&&!Ks(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,wu(e,t,a,o,s)):(e=Ci(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var f=a.memoizedProps;if(r=r.compare,r=r!==null?r:Vr,r(f,o)&&e.ref===t.ref)return Kt(e,t,s)}return t.flags|=1,e=An(a,o),e.ref=t.ref,e.return=t,t.child=e}function wu(e,t,r,o,s){if(e!==null){var a=e.memoizedProps;if(Vr(a,o)&&e.ref===t.ref)if(ut=!1,t.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Kt(e,t,s)}return js(e,t,r,o,s)}function Su(e,t,r){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(mr,yt),yt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(mr,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,Ne(mr,yt),yt|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,Ne(mr,yt),yt|=o;return lt(e,t,s,r),t.child}function Tu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,r,o,s){var a=ct(r)?kn:tt.current;return a=lr(t,a),fr(t,s),r=As(e,t,r,o,a,s),o=ws(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Kt(e,t,s)):(je&&o&&rs(t),t.flags|=1,lt(e,t,r,s),t.child)}function Eu(e,t,r,o,s){if(ct(r)){var a=!0;ei(t)}else a=!1;if(fr(t,s),t.stateNode===null)xi(e,t),fu(t,r,o),Is(t,r,o,s),o=!0;else if(e===null){var f=t.stateNode,m=t.memoizedProps;f.props=m;var x=f.context,k=r.contextType;typeof k=="object"&&k!==null?k=Tt(k):(k=ct(r)?kn:tt.current,k=lr(t,k));var O=r.getDerivedStateFromProps,_=typeof O=="function"||typeof f.getSnapshotBeforeUpdate=="function";_||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==o||x!==k)&&pu(t,f,o,k),pn=!1;var L=t.memoizedState;f.state=L,ci(t,o,f,s),x=t.memoizedState,m!==o||L!==x||at.current||pn?(typeof O=="function"&&(Rs(t,r,O,o),x=t.memoizedState),(m=pn||du(t,r,m,o,L,x,k))?(_||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=x),f.props=o,f.state=x,f.context=k,o=m):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,P0(e,t),m=t.memoizedProps,k=t.type===t.elementType?m:Dt(t.type,m),f.props=k,_=t.pendingProps,L=f.context,x=r.contextType,typeof x=="object"&&x!==null?x=Tt(x):(x=ct(r)?kn:tt.current,x=lr(t,x));var F=r.getDerivedStateFromProps;(O=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==_||L!==x)&&pu(t,f,o,x),pn=!1,L=t.memoizedState,f.state=L,ci(t,o,f,s);var K=t.memoizedState;m!==_||L!==K||at.current||pn?(typeof F=="function"&&(Rs(t,r,F,o),K=t.memoizedState),(k=pn||du(t,r,k,o,L,K,x)||!1)?(O||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,K,x),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,K,x)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=K),f.props=o,f.state=K,f.context=x,o=k):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),o=!1)}return Ms(e,t,r,o,a,s)}function Ms(e,t,r,o,s,a){Tu(e,t);var f=(t.flags&128)!==0;if(!o&&!f)return s&&C0(t,r,!1),Kt(e,t,a);o=t.stateNode,up.current=t;var m=f&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&f?(t.child=ur(t,e.child,null,a),t.child=ur(t,null,m,a)):lt(e,t,m,a),t.memoizedState=o.state,s&&C0(t,r,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?I0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&I0(e,t.context,!1),hs(e,t.containerInfo)}function Ru(e,t,r,o,s){return cr(),ss(s),t.flags|=256,lt(e,t,r,o),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,t,r){var o=t.pendingProps,s=Me.current,a=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ne(Me,s&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=o.children,e=o.fallback,a?(o=t.mode,a=t.child,f={mode:"hidden",children:f},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=f):a=ji(f,o,0,null),e=zn(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ls(r),t.memoizedState=Ds,e):Os(t,f));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return dp(e,t,f,o,m,s,r);if(a){a=o.fallback,f=t.mode,s=e.child,m=s.sibling;var x={mode:"hidden",children:o.children};return(f&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=x,t.deletions=null):(o=An(s,x),o.subtreeFlags=s.subtreeFlags&14680064),m!==null?a=An(m,a):(a=zn(a,f,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,f=e.child.memoizedState,f=f===null?Ls(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},a.memoizedState=f,a.childLanes=e.childLanes&~r,t.memoizedState=Ds,o}return a=e.child,e=a.sibling,o=An(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Os(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,r,o){return o!==null&&ss(o),ur(t,e.child,null,r),e=Os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,r,o,s,a,f){if(r)return t.flags&256?(t.flags&=-257,o=ks(Error(l(422))),vi(e,t,f,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=ji({mode:"visible",children:o.children},s,0,null),a=zn(a,s,f,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&ur(t,e.child,null,f),t.child.memoizedState=Ls(f),t.memoizedState=Ds,a);if((t.mode&1)===0)return vi(e,t,f,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;return o=m,a=Error(l(419)),o=ks(a,o,void 0),vi(e,t,f,o)}if(m=(f&e.childLanes)!==0,ut||m){if(o=Ve,o!==null){switch(f&-f){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|f))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Qt(e,s),_t(o,e,s,-1))}return qs(),o=ks(Error(l(421))),vi(e,t,f,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Ep.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,xt=cn(s.nextSibling),vt=t,je=!0,Mt=null,e!==null&&(wt[St++]=Wt,wt[St++]=Zt,wt[St++]=Cn,Wt=e.id,Zt=e.overflow,Cn=t),t=Os(t,o.children),t.flags|=4096,t)}function ku(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ds(e.return,t,r)}function _s(e,t,r,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=s)}function Cu(e,t,r){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(lt(e,t,o.children,r),o=Me.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,r,t);else if(e.tag===19)ku(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ne(Me,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&ui(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),_s(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ui(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}_s(t,!0,r,null,a);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=An(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=An(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function fp(e,t,r){switch(t.tag){case 3:Nu(t),cr();break;case 5:U0(t);break;case 1:ct(t.type)&&ei(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;Ne(li,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ne(Me,Me.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Iu(e,t,r):(Ne(Me,Me.current&1),e=Kt(e,t,r),e!==null?e.sibling:null);Ne(Me,Me.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Cu(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(Me,Me.current),o)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,r)}return Kt(e,t,r)}var ju,bs,Mu,Du;ju=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},bs=function(){},Mu=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Dn(Pt.current);var a=null;switch(r){case"input":s=dl(e,s),o=dl(e,o),a=[];break;case"select":s=$({},s,{value:void 0}),o=$({},o,{value:void 0}),a=[];break;case"textarea":s=hl(e,s),o=hl(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ko)}ml(r,o);var f;r=null;for(k in s)if(!o.hasOwnProperty(k)&&s.hasOwnProperty(k)&&s[k]!=null)if(k==="style"){var m=s[k];for(f in m)m.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(d.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in o){var x=o[k];if(m=s!=null?s[k]:void 0,o.hasOwnProperty(k)&&x!==m&&(x!=null||m!=null))if(k==="style")if(m){for(f in m)!m.hasOwnProperty(f)||x&&x.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in x)x.hasOwnProperty(f)&&m[f]!==x[f]&&(r||(r={}),r[f]=x[f])}else r||(a||(a=[]),a.push(k,r)),r=x;else k==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,m=m?m.__html:void 0,x!=null&&m!==x&&(a=a||[]).push(k,x)):k==="children"?typeof x!="string"&&typeof x!="number"||(a=a||[]).push(k,""+x):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(d.hasOwnProperty(k)?(x!=null&&k==="onScroll"&&Re("scroll",e),a||m===x||(a=[])):(a=a||[]).push(k,x))}r&&(a=a||[]).push("style",r);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},Du=function(e,t,r,o){r!==o&&(t.flags|=4)};function lo(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function pp(e,t,r){var o=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return ct(t.type)&&Jo(),rt(t),null;case 3:return o=t.stateNode,pr(),Ie(at),Ie(tt),vs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(Ws(Mt),Mt=null))),bs(e,t),rt(t),null;case 5:gs(t);var s=Dn(to.current);if(r=t.type,e!==null&&t.stateNode!=null)Mu(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return rt(t),null}if(e=Dn(Pt.current),oi(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[Ht]=t,o[qr]=a,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<Wr.length;s++)Re(Wr[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":fc(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":gc(o,a),Re("invalid",o)}ml(r,a),s=null;for(var f in a)if(a.hasOwnProperty(f)){var m=a[f];f==="children"?typeof m=="string"?o.textContent!==m&&(a.suppressHydrationWarning!==!0&&qo(o.textContent,m,e),s=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&qo(o.textContent,m,e),s=["children",""+m]):d.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&Re("scroll",o)}switch(r){case"input":Ft(o),hc(o,a,!0);break;case"textarea":Ft(o),vc(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Ko)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{f=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=f.createElement(r,{is:o.is}):(e=f.createElement(r),r==="select"&&(f=e,o.multiple?f.multiple=!0:o.size&&(f.size=o.size))):e=f.createElementNS(e,r),e[Ht]=t,e[qr]=o,ju(e,t,!1,!1),t.stateNode=e;e:{switch(f=vl(r,o),r){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<Wr.length;s++)Re(Wr[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":fc(e,o),s=dl(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=$({},o,{value:void 0}),Re("invalid",e);break;case"textarea":gc(e,o),s=hl(e,o),Re("invalid",e);break;default:s=o}ml(r,s),m=s;for(a in m)if(m.hasOwnProperty(a)){var x=m[a];a==="style"?wc(e,x):a==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&yc(e,x)):a==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&kr(e,x):typeof x=="number"&&kr(e,""+x):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?x!=null&&a==="onScroll"&&Re("scroll",e):x!=null&&Q(e,a,x,f))}switch(r){case"input":Ft(e),hc(e,o,!1);break;case"textarea":Ft(e),vc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+he(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Zn(e,!!o.multiple,a,!1):o.defaultValue!=null&&Zn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ko)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Du(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(r=Dn(to.current),Dn(Pt.current),oi(t)){if(o=t.stateNode,r=t.memoizedProps,o[Ht]=t,(a=o.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:qo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qo(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ht]=t,t.stateNode=o}return rt(t),null;case 13:if(Ie(Me),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_0(),cr(),t.flags|=98560,a=!1;else if(a=oi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Ht]=t}else cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Mt!==null&&(Ws(Mt),Mt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?Ue===0&&(Ue=3):qs())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return pr(),bs(e,t),e===null&&Zr(t.stateNode.containerInfo),rt(t),null;case 10:return us(t.type._context),rt(t),null;case 17:return ct(t.type)&&Jo(),rt(t),null;case 19:if(Ie(Me),a=t.memoizedState,a===null)return rt(t),null;if(o=(t.flags&128)!==0,f=a.rendering,f===null)if(o)lo(a,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ui(e),f!==null){for(t.flags|=128,lo(a,!1),o=f.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,f=a.alternate,f===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=f.childLanes,a.lanes=f.lanes,a.child=f.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=f.memoizedProps,a.memoizedState=f.memoizedState,a.updateQueue=f.updateQueue,a.type=f.type,e=f.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ne(Me,Me.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>vr&&(t.flags|=128,o=!0,lo(a,!1),t.lanes=4194304)}else{if(!o)if(e=ui(f),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),lo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!je)return rt(t),null}else 2*be()-a.renderingStartTime>vr&&r!==1073741824&&(t.flags|=128,o=!0,lo(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(r=a.last,r!==null?r.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,r=Me.current,Ne(Me,o?r&1|2:r&1),t):(rt(t),null);case 22:case 23:return Qs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(yt&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function hp(e,t){switch(os(t),t.tag){case 1:return ct(t.type)&&Jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Ie(at),Ie(tt),vs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return gs(t),null;case 13:if(Ie(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Me),null;case 4:return pr(),null;case 10:return us(t.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var yi=!1,ot=!1,gp=typeof WeakSet=="function"?WeakSet:Set,W=null;function gr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){_e(e,t,o)}else r.current=null}function Gs(e,t,r){try{r()}catch(o){_e(e,t,o)}}var Lu=!1;function mp(e,t){if(Ql=Ho,e=d0(),Bl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var f=0,m=-1,x=-1,k=0,O=0,_=e,L=null;t:for(;;){for(var F;_!==r||s!==0&&_.nodeType!==3||(m=f+s),_!==a||o!==0&&_.nodeType!==3||(x=f+o),_.nodeType===3&&(f+=_.nodeValue.length),(F=_.firstChild)!==null;)L=_,_=F;for(;;){if(_===e)break t;if(L===r&&++k===s&&(m=f),L===a&&++O===o&&(x=f),(F=_.nextSibling)!==null)break;_=L,L=_.parentNode}_=F}r=m===-1||x===-1?null:{start:m,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(ql={focusedElem:e,selectionRange:r},Ho=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var X=K.memoizedProps,Ge=K.memoizedState,N=t.stateNode,A=N.getSnapshotBeforeUpdate(t.elementType===t.type?X:Dt(t.type,X),Ge);N.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(b){_e(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return K=Lu,Lu=!1,K}function so(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Gs(t,r,a)}s=s.next}while(s!==o)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function zs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ou(e){var t=e.alternate;t!==null&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[qr],delete t[es],delete t[Xf],delete t[Jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ko));else if(o!==4&&(e=e.child,e!==null))for(Hs(e,t,r),e=e.sibling;e!==null;)Hs(e,t,r),e=e.sibling}function Ps(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ps(e,t,r),e=e.sibling;e!==null;)Ps(e,t,r),e=e.sibling}var Je=null,Lt=!1;function gn(e,t,r){for(r=r.child;r!==null;)Gu(e,t,r),r=r.sibling}function Gu(e,t,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Lo,r)}catch{}switch(r.tag){case 5:ot||gr(r,t);case 6:var o=Je,s=Lt;Je=null,gn(e,t,r),Je=o,Lt=s,Je!==null&&(Lt?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Lt?(e=Je,r=r.stateNode,e.nodeType===8?Jl(e.parentNode,r):e.nodeType===1&&Jl(e,r),Hr(e)):Jl(Je,r.stateNode));break;case 4:o=Je,s=Lt,Je=r.stateNode.containerInfo,Lt=!0,gn(e,t,r),Je=o,Lt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,f=a.destroy;a=a.tag,f!==void 0&&((a&2)!==0||(a&4)!==0)&&Gs(r,t,f),s=s.next}while(s!==o)}gn(e,t,r);break;case 1:if(!ot&&(gr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){_e(r,t,m)}gn(e,t,r);break;case 21:gn(e,t,r);break;case 22:r.mode&1?(ot=(o=ot)||r.memoizedState!==null,gn(e,t,r),ot=o):gn(e,t,r);break;default:gn(e,t,r)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gp),t.forEach(function(o){var s=Np.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Ot(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var a=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 5:Je=m.stateNode,Lt=!1;break e;case 3:Je=m.stateNode.containerInfo,Lt=!0;break e;case 4:Je=m.stateNode.containerInfo,Lt=!0;break e}m=m.return}if(Je===null)throw Error(l(160));Gu(a,f,s),Je=null,Lt=!1;var x=s.alternate;x!==null&&(x.return=null),s.return=null}catch(k){_e(s,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hu(t,e),t=t.sibling}function Hu(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),$t(e),o&4){try{so(3,e,e.return),Ai(3,e)}catch(X){_e(e,e.return,X)}try{so(5,e,e.return)}catch(X){_e(e,e.return,X)}}break;case 1:Ot(t,e),$t(e),o&512&&r!==null&&gr(r,r.return);break;case 5:if(Ot(t,e),$t(e),o&512&&r!==null&&gr(r,r.return),e.flags&32){var s=e.stateNode;try{kr(s,"")}catch(X){_e(e,e.return,X)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,f=r!==null?r.memoizedProps:a,m=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&pc(s,a),vl(m,f);var k=vl(m,a);for(f=0;f<x.length;f+=2){var O=x[f],_=x[f+1];O==="style"?wc(s,_):O==="dangerouslySetInnerHTML"?yc(s,_):O==="children"?kr(s,_):Q(s,O,_,k)}switch(m){case"input":fl(s,a);break;case"textarea":mc(s,a);break;case"select":var L=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var F=a.value;F!=null?Zn(s,!!a.multiple,F,!1):L!==!!a.multiple&&(a.defaultValue!=null?Zn(s,!!a.multiple,a.defaultValue,!0):Zn(s,!!a.multiple,a.multiple?[]:"",!1))}s[qr]=a}catch(X){_e(e,e.return,X)}}break;case 6:if(Ot(t,e),$t(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(X){_e(e,e.return,X)}}break;case 3:if(Ot(t,e),$t(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(X){_e(e,e.return,X)}break;case 4:Ot(t,e),$t(e);break;case 13:Ot(t,e),$t(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Us=be())),o&4&&zu(e);break;case 22:if(O=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(k=ot)||O,Ot(t,e),ot=k):Ot(t,e),$t(e),o&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!O&&(e.mode&1)!==0)for(W=e,O=e.child;O!==null;){for(_=W=O;W!==null;){switch(L=W,F=L.child,L.tag){case 0:case 11:case 14:case 15:so(4,L,L.return);break;case 1:gr(L,L.return);var K=L.stateNode;if(typeof K.componentWillUnmount=="function"){o=L,r=L.return;try{t=o,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(X){_e(o,r,X)}}break;case 5:gr(L,L.return);break;case 22:if(L.memoizedState!==null){$u(_);continue}}F!==null?(F.return=L,W=F):$u(_)}O=O.sibling}e:for(O=null,_=e;;){if(_.tag===5){if(O===null){O=_;try{s=_.stateNode,k?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=_.stateNode,x=_.memoizedProps.style,f=x!=null&&x.hasOwnProperty("display")?x.display:null,m.style.display=Ac("display",f))}catch(X){_e(e,e.return,X)}}}else if(_.tag===6){if(O===null)try{_.stateNode.nodeValue=k?"":_.memoizedProps}catch(X){_e(e,e.return,X)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;O===_&&(O=null),_=_.return}O===_&&(O=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Ot(t,e),$t(e),o&4&&zu(e);break;case 21:break;default:Ot(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(_u(r)){var o=r;break e}r=r.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(kr(s,""),o.flags&=-33);var a=bu(e);Ps(e,a,s);break;case 3:case 4:var f=o.stateNode.containerInfo,m=bu(e);Hs(e,m,f);break;default:throw Error(l(161))}}catch(x){_e(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vp(e,t,r){W=e,Pu(e)}function Pu(e,t,r){for(var o=(e.mode&1)!==0;W!==null;){var s=W,a=s.child;if(s.tag===22&&o){var f=s.memoizedState!==null||yi;if(!f){var m=s.alternate,x=m!==null&&m.memoizedState!==null||ot;m=yi;var k=ot;if(yi=f,(ot=x)&&!k)for(W=s;W!==null;)f=W,x=f.child,f.tag===22&&f.memoizedState!==null?Uu(s):x!==null?(x.return=f,W=x):Uu(s);for(;a!==null;)W=a,Pu(a),a=a.sibling;W=s,yi=m,ot=k}Bu(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,W=a):Bu(e)}}function Bu(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||Ai(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ot)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Dt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&$0(t,a,o);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}$0(t,f,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var O=k.memoizedState;if(O!==null){var _=O.dehydrated;_!==null&&Hr(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ot||t.flags&512&&zs(t)}catch(L){_e(t,t.return,L)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function $u(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function Uu(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ai(4,t)}catch(x){_e(t,r,x)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(x){_e(t,s,x)}}var a=t.return;try{zs(t)}catch(x){_e(t,a,x)}break;case 5:var f=t.return;try{zs(t)}catch(x){_e(t,f,x)}}}catch(x){_e(t,t.return,x)}if(t===e){W=null;break}var m=t.sibling;if(m!==null){m.return=t.return,W=m;break}W=t.return}}var xp=Math.ceil,wi=U.ReactCurrentDispatcher,Bs=U.ReactCurrentOwner,Nt=U.ReactCurrentBatchConfig,ge=0,Ve=null,Pe=null,et=0,yt=0,mr=un(0),Ue=0,ao=null,On=0,Si=0,$s=0,co=null,dt=null,Us=0,vr=1/0,Xt=null,Ti=!1,Fs=null,mn=null,Ei=!1,vn=null,Ni=0,uo=0,Vs=null,Ri=-1,Ii=0;function st(){return(ge&6)!==0?be():Ri!==-1?Ri:Ri=be()}function xn(e){return(e.mode&1)===0?1:(ge&2)!==0&&et!==0?et&-et:tp.transition!==null?(Ii===0&&(Ii=bc()),Ii):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Vc(e.type)),e)}function _t(e,t,r,o){if(50<uo)throw uo=0,Vs=null,Error(l(185));Or(e,r,o),((ge&2)===0||e!==Ve)&&(e===Ve&&((ge&2)===0&&(Si|=r),Ue===4&&yn(e,et)),ft(e,o),r===1&&ge===0&&(t.mode&1)===0&&(vr=be()+500,ti&&fn()))}function ft(e,t){var r=e.callbackNode;ef(e,t);var o=bo(e,e===Ve?et:0);if(o===0)r!==null&&Lc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Lc(r),t===1)e.tag===0?ep(Vu.bind(null,e)):j0(Vu.bind(null,e)),qf(function(){(ge&6)===0&&fn()}),r=null;else{switch(Gc(o)){case 1:r=El;break;case 4:r=Oc;break;case 16:r=Do;break;case 536870912:r=_c;break;default:r=Do}r=Ju(r,Fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Fu(e,t){if(Ri=-1,Ii=0,(ge&6)!==0)throw Error(l(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var o=bo(e,e===Ve?et:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=ki(e,o);else{t=o;var s=ge;ge|=2;var a=Wu();(Ve!==e||et!==t)&&(Xt=null,vr=be()+500,bn(e,t));do try{wp();break}catch(m){Yu(e,m)}while(!0);cs(),wi.current=a,ge=s,Pe!==null?t=0:(Ve=null,et=0,t=Ue)}if(t!==0){if(t===2&&(s=Nl(e),s!==0&&(o=s,t=Ys(e,s))),t===1)throw r=ao,bn(e,0),yn(e,o),ft(e,be()),r;if(t===6)yn(e,o);else{if(s=e.current.alternate,(o&30)===0&&!yp(s)&&(t=ki(e,o),t===2&&(a=Nl(e),a!==0&&(o=a,t=Ys(e,a))),t===1))throw r=ao,bn(e,0),yn(e,o),ft(e,be()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:Gn(e,dt,Xt);break;case 3:if(yn(e,o),(o&130023424)===o&&(t=Us+500-be(),10<t)){if(bo(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){st(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Xl(Gn.bind(null,e,dt,Xt),t);break}Gn(e,dt,Xt);break;case 4:if(yn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var f=31-Ct(o);a=1<<f,f=t[f],f>s&&(s=f),o&=~a}if(o=s,o=be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*xp(o/1960))-o,10<o){e.timeoutHandle=Xl(Gn.bind(null,e,dt,Xt),o);break}Gn(e,dt,Xt);break;case 5:Gn(e,dt,Xt);break;default:throw Error(l(329))}}}return ft(e,be()),e.callbackNode===r?Fu.bind(null,e):null}function Ys(e,t){var r=co;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=ki(e,t),e!==2&&(t=dt,dt=r,t!==null&&Ws(t)),e}function Ws(e){dt===null?dt=e:dt.push.apply(dt,e)}function yp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],a=s.getSnapshot;s=s.value;try{if(!jt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~$s,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ct(t),o=1<<r;e[r]=-1,t&=~o}}function Vu(e){if((ge&6)!==0)throw Error(l(327));xr();var t=bo(e,0);if((t&1)===0)return ft(e,be()),null;var r=ki(e,t);if(e.tag!==0&&r===2){var o=Nl(e);o!==0&&(t=o,r=Ys(e,o))}if(r===1)throw r=ao,bn(e,0),yn(e,t),ft(e,be()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,dt,Xt),ft(e,be()),null}function Zs(e,t){var r=ge;ge|=1;try{return e(t)}finally{ge=r,ge===0&&(vr=be()+500,ti&&fn())}}function _n(e){vn!==null&&vn.tag===0&&(ge&6)===0&&xr();var t=ge;ge|=1;var r=Nt.transition,o=Se;try{if(Nt.transition=null,Se=1,e)return e()}finally{Se=o,Nt.transition=r,ge=t,(ge&6)===0&&fn()}}function Qs(){yt=mr.current,Ie(mr)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Qf(r)),Pe!==null)for(r=Pe.return;r!==null;){var o=r;switch(os(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Jo();break;case 3:pr(),Ie(at),Ie(tt),vs();break;case 5:gs(o);break;case 4:pr();break;case 13:Ie(Me);break;case 19:Ie(Me);break;case 10:us(o.type._context);break;case 22:case 23:Qs()}r=r.return}if(Ve=e,Pe=e=An(e.current,null),et=yt=t,Ue=0,ao=null,$s=Si=On=0,dt=co=null,Mn!==null){for(t=0;t<Mn.length;t++)if(r=Mn[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,a=r.pending;if(a!==null){var f=a.next;a.next=s,o.next=f}r.pending=o}Mn=null}return e}function Yu(e,t){do{var r=Pe;try{if(cs(),di.current=gi,fi){for(var o=De.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}fi=!1}if(Ln=0,Fe=$e=De=null,no=!1,ro=0,Bs.current=null,r===null||r.return===null){Ue=1,ao=t,Pe=null;break}e:{var a=e,f=r.return,m=r,x=t;if(t=et,m.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var k=x,O=m,_=O.tag;if((O.mode&1)===0&&(_===0||_===11||_===15)){var L=O.alternate;L?(O.updateQueue=L.updateQueue,O.memoizedState=L.memoizedState,O.lanes=L.lanes):(O.updateQueue=null,O.memoizedState=null)}var F=vu(f);if(F!==null){F.flags&=-257,xu(F,f,m,a,t),F.mode&1&&mu(a,k,t),t=F,x=k;var K=t.updateQueue;if(K===null){var X=new Set;X.add(x),t.updateQueue=X}else K.add(x);break e}else{if((t&1)===0){mu(a,k,t),qs();break e}x=Error(l(426))}}else if(je&&m.mode&1){var Ge=vu(f);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),xu(Ge,f,m,a,t),ss(hr(x,m));break e}}a=x=hr(x,m),Ue!==4&&(Ue=2),co===null?co=[a]:co.push(a),a=f;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var N=hu(a,x,t);B0(a,N);break e;case 1:m=x;var A=a.type,I=a.stateNode;if((a.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(mn===null||!mn.has(I)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=gu(a,m,t);B0(a,b);break e}}a=a.return}while(a!==null)}Qu(r)}catch(J){t=J,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function Wu(){var e=wi.current;return wi.current=gi,e===null?gi:e}function qs(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ve===null||(On&268435455)===0&&(Si&268435455)===0||yn(Ve,et)}function ki(e,t){var r=ge;ge|=2;var o=Wu();(Ve!==e||et!==t)&&(Xt=null,bn(e,t));do try{Ap();break}catch(s){Yu(e,s)}while(!0);if(cs(),ge=r,wi.current=o,Pe!==null)throw Error(l(261));return Ve=null,et=0,Ue}function Ap(){for(;Pe!==null;)Zu(Pe)}function wp(){for(;Pe!==null&&!V1();)Zu(Pe)}function Zu(e){var t=Xu(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Qu(e):Pe=t,Bs.current=null}function Qu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=pp(r,t,yt),r!==null){Pe=r;return}}else{if(r=hp(r,t),r!==null){r.flags&=32767,Pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ue===0&&(Ue=5)}function Gn(e,t,r){var o=Se,s=Nt.transition;try{Nt.transition=null,Se=1,Sp(e,t,r,o)}finally{Nt.transition=s,Se=o}return null}function Sp(e,t,r,o){do xr();while(vn!==null);if((ge&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(tf(e,a),e===Ve&&(Pe=Ve=null,et=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ei||(Ei=!0,Ju(Do,function(){return xr(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Nt.transition,Nt.transition=null;var f=Se;Se=1;var m=ge;ge|=4,Bs.current=null,mp(e,r),Hu(r,e),$f(ql),Ho=!!Ql,ql=Ql=null,e.current=r,vp(r),Y1(),ge=m,Se=f,Nt.transition=a}else e.current=r;if(Ei&&(Ei=!1,vn=e,Ni=s),a=e.pendingLanes,a===0&&(mn=null),Q1(r.stateNode),ft(e,be()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ti)throw Ti=!1,e=Fs,Fs=null,e;return(Ni&1)!==0&&e.tag!==0&&xr(),a=e.pendingLanes,(a&1)!==0?e===Vs?uo++:(uo=0,Vs=e):uo=0,fn(),null}function xr(){if(vn!==null){var e=Gc(Ni),t=Nt.transition,r=Se;try{if(Nt.transition=null,Se=16>e?16:e,vn===null)var o=!1;else{if(e=vn,vn=null,Ni=0,(ge&6)!==0)throw Error(l(331));var s=ge;for(ge|=4,W=e.current;W!==null;){var a=W,f=a.child;if((W.flags&16)!==0){var m=a.deletions;if(m!==null){for(var x=0;x<m.length;x++){var k=m[x];for(W=k;W!==null;){var O=W;switch(O.tag){case 0:case 11:case 15:so(8,O,a)}var _=O.child;if(_!==null)_.return=O,W=_;else for(;W!==null;){O=W;var L=O.sibling,F=O.return;if(Ou(O),O===k){W=null;break}if(L!==null){L.return=F,W=L;break}W=F}}}var K=a.alternate;if(K!==null){var X=K.child;if(X!==null){K.child=null;do{var Ge=X.sibling;X.sibling=null,X=Ge}while(X!==null)}}W=a}}if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,W=f;else e:for(;W!==null;){if(a=W,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:so(9,a,a.return)}var N=a.sibling;if(N!==null){N.return=a.return,W=N;break e}W=a.return}}var A=e.current;for(W=A;W!==null;){f=W;var I=f.child;if((f.subtreeFlags&2064)!==0&&I!==null)I.return=f,W=I;else e:for(f=A;W!==null;){if(m=W,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Ai(9,m)}}catch(J){_e(m,m.return,J)}if(m===f){W=null;break e}var b=m.sibling;if(b!==null){b.return=m.return,W=b;break e}W=m.return}}if(ge=s,fn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Lo,e)}catch{}o=!0}return o}finally{Se=r,Nt.transition=t}}return!1}function qu(e,t,r){t=hr(r,t),t=hu(e,t,1),e=hn(e,t,1),t=st(),e!==null&&(Or(e,1,t),ft(e,t))}function _e(e,t,r){if(e.tag===3)qu(e,e,r);else for(;t!==null;){if(t.tag===3){qu(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(mn===null||!mn.has(o))){e=hr(r,e),e=gu(t,e,1),t=hn(t,e,1),e=st(),t!==null&&(Or(t,1,e),ft(t,e));break}}t=t.return}}function Tp(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Ve===e&&(et&r)===r&&(Ue===4||Ue===3&&(et&130023424)===et&&500>be()-Us?bn(e,0):$s|=r),ft(e,t)}function Ku(e,t){t===0&&((e.mode&1)===0?t=1:(t=_o,_o<<=1,(_o&130023424)===0&&(_o=4194304)));var r=st();e=Qt(e,t),e!==null&&(Or(e,t,r),ft(e,r))}function Ep(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ku(e,r)}function Np(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Ku(e,r)}var Xu;Xu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,fp(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,je&&(t.flags&1048576)!==0&&M0(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;xi(e,t),e=t.pendingProps;var s=lr(t,tt.current);fr(t,r),s=As(null,t,o,e,s,r);var a=ws();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(o)?(a=!0,ei(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ps(t),s.updater=mi,t.stateNode=s,s._reactInternals=t,Is(t,o,e,r),t=Ms(null,t,o,!0,a,r)):(t.tag=0,je&&a&&rs(t),lt(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=Ip(o),e=Dt(o,e),s){case 0:t=js(null,t,o,e,r);break e;case 1:t=Eu(null,t,o,e,r);break e;case 11:t=yu(null,t,o,e,r);break e;case 14:t=Au(null,t,o,Dt(o.type,e),r);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),js(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),Eu(e,t,o,s,r);case 3:e:{if(Nu(t),e===null)throw Error(l(387));o=t.pendingProps,a=t.memoizedState,s=a.element,P0(e,t),ci(t,o,null,r);var f=t.memoizedState;if(o=f.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=hr(Error(l(423)),t),t=Ru(e,t,o,r,s);break e}else if(o!==s){s=hr(Error(l(424)),t),t=Ru(e,t,o,r,s);break e}else for(xt=cn(t.stateNode.containerInfo.firstChild),vt=t,je=!0,Mt=null,r=z0(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cr(),o===s){t=Kt(e,t,r);break e}lt(e,t,o,r)}t=t.child}return t;case 5:return U0(t),e===null&&ls(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,f=s.children,Kl(o,s)?f=null:a!==null&&Kl(o,a)&&(t.flags|=32),Tu(e,t),lt(e,t,f,r),t.child;case 6:return e===null&&ls(t),null;case 13:return Iu(e,t,r);case 4:return hs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ur(t,null,o,r):lt(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),yu(e,t,o,s,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,f=s.value,Ne(li,o._currentValue),o._currentValue=f,a!==null)if(jt(a.value,f)){if(a.children===s.children&&!at.current){t=Kt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){f=a.child;for(var x=m.firstContext;x!==null;){if(x.context===o){if(a.tag===1){x=qt(-1,r&-r),x.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var O=k.pending;O===null?x.next=x:(x.next=O.next,O.next=x),k.pending=x}}a.lanes|=r,x=a.alternate,x!==null&&(x.lanes|=r),ds(a.return,r,t),m.lanes|=r;break}x=x.next}}else if(a.tag===10)f=a.type===t.type?null:a.child;else if(a.tag===18){if(f=a.return,f===null)throw Error(l(341));f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),ds(f,r,t),f=a.sibling}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===t){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}lt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,fr(t,r),s=Tt(s),o=o(s),t.flags|=1,lt(e,t,o,r),t.child;case 14:return o=t.type,s=Dt(o,t.pendingProps),s=Dt(o.type,s),Au(e,t,o,s,r);case 15:return wu(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Dt(o,s),xi(e,t),t.tag=1,ct(o)?(e=!0,ei(t)):e=!1,fr(t,r),fu(t,o,s),Is(t,o,s,r),Ms(null,t,o,!0,e,r);case 19:return Cu(e,t,r);case 22:return Su(e,t,r)}throw Error(l(156,t.tag))};function Ju(e,t){return Dc(e,t)}function Rp(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,o){return new Rp(e,t,r,o)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ip(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qe)return 11;if(e===it)return 14}return 2}function An(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ci(e,t,r,o,s,a){var f=2;if(o=e,typeof e=="function")Ks(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case Y:return zn(r.children,s,a,t);case xe:f=8,s|=8;break;case ze:return e=Rt(12,r,t,s|2),e.elementType=ze,e.lanes=a,e;case He:return e=Rt(13,r,t,s),e.elementType=He,e.lanes=a,e;case Ke:return e=Rt(19,r,t,s),e.elementType=Ke,e.lanes=a,e;case ce:return ji(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:f=10;break e;case Qe:f=9;break e;case qe:f=11;break e;case it:f=14;break e;case pe:f=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Rt(f,r,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function zn(e,t,r,o){return e=Rt(7,e,o,t),e.lanes=r,e}function ji(e,t,r,o){return e=Rt(22,e,o,t),e.elementType=ce,e.lanes=r,e.stateNode={isHidden:!1},e}function Xs(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function Js(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kp(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ea(e,t,r,o,s,a,f,m,x){return e=new kp(e,t,r,m,x),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(a),e}function Cp(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function ed(e){if(!e)return dn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(ct(r))return k0(e,r,t)}return t}function td(e,t,r,o,s,a,f,m,x){return e=ea(r,o,!0,e,s,a,f,m,x),e.context=ed(null),r=e.current,o=st(),s=xn(r),a=qt(o,s),a.callback=t??null,hn(r,a,s),e.current.lanes=s,Or(e,s,o),ft(e,o),e}function Mi(e,t,r,o){var s=t.current,a=st(),f=xn(s);return r=ed(r),t.context===null?t.context=r:t.pendingContext=r,t=qt(a,f),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=hn(s,t,f),e!==null&&(_t(e,s,f,a),ai(e,s,f)),f}function Di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ta(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function jp(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}Li.prototype.render=na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Mi(e,t,null,null)},Li.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){Mi(null,e,null,null)}),t[Vt]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ln.length&&t!==0&&t<ln[r].priority;r++);ln.splice(r,0,e),r===0&&Uc(e)}};function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function Mp(e,t,r,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var k=Di(f);a.call(k)}}var f=td(t,o,e,0,null,!1,!1,"",od);return e._reactRootContainer=f,e[Vt]=f.current,Zr(e.nodeType===8?e.parentNode:e),_n(),f}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var m=o;o=function(){var k=Di(x);m.call(k)}}var x=ea(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=x,e[Vt]=x.current,Zr(e.nodeType===8?e.parentNode:e),_n(function(){Mi(t,x,r,o)}),x}function _i(e,t,r,o,s){var a=r._reactRootContainer;if(a){var f=a;if(typeof s=="function"){var m=s;s=function(){var x=Di(f);m.call(x)}}Mi(t,f,e,s)}else f=Mp(r,t,e,s,o);return Di(f)}zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Lr(t.pendingLanes);r!==0&&(Il(t,r|1),ft(t,be()),(ge&6)===0&&(vr=be()+500,fn()))}break;case 13:_n(function(){var o=Qt(e,1);if(o!==null){var s=st();_t(o,e,1,s)}}),ta(e,1)}},kl=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var r=st();_t(t,e,134217728,r)}ta(e,134217728)}},Hc=function(e){if(e.tag===13){var t=xn(e),r=Qt(e,t);if(r!==null){var o=st();_t(r,e,t,o)}ta(e,t)}},Pc=function(){return Se},Bc=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},Al=function(e,t,r){switch(t){case"input":if(fl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=Xo(o);if(!s)throw Error(l(90));kt(o),fl(o,s)}}}break;case"textarea":mc(e,r);break;case"select":t=r.value,t!=null&&Zn(e,!!r.multiple,t,!1)}},Nc=Zs,Rc=_n;var Dp={usingClientEntryPoint:!1,Events:[Kr,or,Xo,Tc,Ec,Zs]},fo={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jc(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Lo=bi.inject(Lp),zt=bi}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp,pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ra(t))throw Error(l(200));return Cp(e,t,null,r)},pt.createRoot=function(e,t){if(!ra(e))throw Error(l(299));var r=!1,o="",s=rd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ea(e,1,!1,null,null,r,!1,o,s),e[Vt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new na(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=jc(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return _n(e)},pt.hydrate=function(e,t,r){if(!Oi(t))throw Error(l(200));return _i(null,e,t,!0,r)},pt.hydrateRoot=function(e,t,r){if(!ra(e))throw Error(l(405));var o=r!=null&&r.hydratedSources||null,s=!1,a="",f=rd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=td(t,null,e,1,r??null,s,!1,a,f),e[Vt]=t.current,Zr(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Li(t)},pt.render=function(e,t,r){if(!Oi(t))throw Error(l(200));return _i(null,e,t,!1,r)},pt.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(l(40));return e._reactRootContainer?(_n(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},pt.unstable_batchedUpdates=Zs,pt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Oi(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return _i(e,t,r,!1,o)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Nd;function V2(){if(Nd)return ua.exports;Nd=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),ua.exports=Eg(),ua.exports}var Ng=V2();const Wn=n=>{const{title:i,open:l,padding:u="16px",closeOnBackdropClick:d=!0,theme:p="totamjung",portalTarget:g,onClose:y,children:v}=n;return ng({onEscKeyPress:y}),l&&Ng.createPortal(c.jsxs(Xh,{children:[c.jsx(Jh,{onClick:()=>{d&&y()}}),c.jsxs(tg,{role:"dialog",$totamjungTheme:p,children:[c.jsxs(O2,{children:[c.jsx(_2,{children:i}),c.jsx(b2,{onClick:y,"aria-label":"모달 닫기",children:c.jsx(lg,{})})]}),c.jsx(G2,{$padding:u,children:v})]})]}),g??document.body)},Io=n=>{const{children:i,theme:l="totamjung"}=n;return c.jsx(eg,{$totamjungTheme:l,children:i})},Rg=h.button`
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
`,Ig=h.span`
  font-size: ${({$size:n})=>n==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,kg=h.img`
  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  object-fit: contain;
`,Cg=h.div`
  flex-shrink: 0;

  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:n})=>n};
  }
`,Ce=n=>{const{name:i,size:l,width:u,color:d,iconSrc:p,ariaLabel:g,...y}=n;return c.jsxs(Rg,{$size:l,$width:u,$color:d,"aria-label":g,...y,children:[p&&(typeof p=="string"?c.jsx(kg,{src:p,alt:i,$size:l}):c.jsx(Cg,{$size:l,$color:d,children:p})),c.jsx(Ig,{$size:l,children:i})]})},jg=h.div`
  width: ${({$width:n})=>n};
  max-width: 100%;
  min-height: ${({$height:n})=>n};
`,Mg=h.p`
  font-size: 16px;
  color: ${({theme:n,$totamjungTheme:i})=>Ao.includes(i)?n.color.BLACK:n.color.WHITE};
`,Ao=["none","solvedAcLight"],en=n=>{const{title:i,width:l,height:u,open:d,message:p,actionType:g,portalTarget:y,theme:v="totamjung",closeOnBackdropClick:E=!0}=n;return c.jsxs(Wn,{title:i,open:d,closeOnBackdropClick:E,portalTarget:y,theme:v,onClose:()=>{g==="yesNo"?n.onNoSelect():n.onClose()},children:[c.jsx(jg,{$width:l,$height:u,children:c.jsx(Mg,{$totamjungTheme:v,children:p})}),c.jsx(Io,{theme:v,children:g==="confirm"?c.jsx(Dg,{theme:v,onClose:n.onClose}):g==="cancelConfirm"?c.jsx(Lg,{theme:v,onClose:n.onClose,onConfirm:n.onConfirm}):c.jsx(Og,{theme:v,onYesSelect:n.onYesSelect,onNoSelect:n.onNoSelect})})]})},Dg=n=>{const{theme:i="totamjung",onClose:l}=n;return c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(No,{}),color:Ao.includes(i)?H.color.DARK_GRAY:H.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:l,autoFocus:!0})},Lg=n=>{const{theme:i="totamjung",onClose:l,onConfirm:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Eo,{}),color:Ao.includes(i)?H.color.DARK_GRAY:H.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:l}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(No,{}),color:Ao.includes(i)?H.color.DARK_GRAY:H.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:u})]})},Og=n=>{const{theme:i="totamjung",onYesSelect:l,onNoSelect:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:c.jsx(No,{}),color:Ao.includes(i)?H.color.GREEN:H.color.LIME,disabled:!1,ariaLabel:"예",onClick:l}),c.jsx(Ce,{type:"button",name:"아니요",size:"medium",iconSrc:c.jsx(Eo,{}),color:H.color.RED,disabled:!1,ariaLabel:"아니요",onClick:u})]})},_g=h.p`
  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n};
  line-height: 1.2;

  ${({theme:n,$type:i})=>i==="primary"?le`
        font-family: Pretendard;
        color: ${n.color.GOLD};
        font-weight: 600;
      `:i==="semiPrimary"?le`
        font-family: Pretendard;
        color: ${n.color.LEMON};
      `:i==="gray"?le`
        font-family: Pretendard;
        color: ${n.color.LIGHT_GRAY};
      `:i==="darkGray"?le`
        font-family: Pretendard;
        color: ${n.color.DARK_GRAY};
      `:i==="code"?le`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${n.color.WHITE};
      `:le`
      font-family: Pretendard;
      color: ${n.color.WHITE};
    `}
`,Te=n=>{const{type:i,fontSize:l,textAlign:u="left",children:d}=n;return c.jsx(_g,{$type:i,$fontSize:l,$textAlign:u,children:d})},bg=20,Gg=n=>{const{textList:i,typingTime:l,idleTime:u,erasingTime:d}=n,[p,g]=T.useState(""),[y,v]=T.useState(0),[E,S]=T.useState(Date.now()),[R,C]=T.useState(!1),D=l,M=l+u,G=l+u+d;return T.useEffect(()=>{if(!R||i.length===0)return;y>=i.length&&v(Q=>Math.min(i.length-1,Q));const Z=setInterval(()=>{const Q=Date.now(),U=Q-E;if(U>=G){S(Q),v(q=>(q+1)%i.length);return}if(U>=M){const q=i[y].length-Math.ceil((U-M)/d*i[y].length);g(i[y].slice(0,q));return}if(U>=D){g(i[y]);return}const ne=Math.ceil(U/l*i[y].length);g(i[y].slice(0,ne))},bg);return()=>{clearInterval(Z)}},[R,y,E,i,l,u,d]),{currentText:p,startTyping:()=>{S(Date.now()),g(""),v(0),C(!0)},stopTyping:()=>{g(""),v(0),C(!1)}}},zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",Hg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",Pg="/assets/lock-with-clock-DphQokL3.png",Y2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",Bg="/assets/tier-1-badge-CyfFUTea.png",$g="/assets/settings-title-BAsh2fbw.png",Ug="/assets/guidebook-button-DB51pF_8.png",Fg="/assets/info-button-gVHj_-G9.png",Vg="/assets/totamjung-BrXdXI1T.png",Yg="/assets/logo-square-Ly45EudP.png",Wg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",Zg="/assets/wood-background-BTxo82aE.png",Qg=gt`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,qg=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,Kg=h.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:n})=>n.gradient.BROWN_GRADIENT};

  z-index: 0;
`,Xg=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,Jg=h.img.attrs(({$scaleX:n,$scaleY:i})=>({style:{transform:`scale(${n}, ${i})`}}))`
  width: 160px;

  transform-origin: bottom;
`,em=h.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:n})=>n.color.GOLD};
`,tm=h.div`
  position: relative;

  text-align: center;
`,nm=h.span`
  margin: 0 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,rm=h.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:n})=>n.color.LEMON};

  animation: ${Qg} 0.8s infinite forwards;
`,om=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,im=h.span`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,lm=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,al=()=>{const[n,i]=T.useState(null);return{activeModalName:n,openModal:d=>{i(d)},closeModal:()=>{i(null)}}},pa=20,sm=n=>{const{onShowComplainModal:i}=n,[l,u]=T.useState(0),d=()=>{u(y=>{const v=y+1;return l===pa&&i(),v})},p=Math.min(1.5,1+Math.max(l-pa,0)*.0025),g=Math.max(.5,1-Math.max(l-pa,0)*.0025);return{increaseClickCount:d,totamjungScaleX:p,totamjungScaleY:g}},am=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],cm=n=>{const{open:i,onClose:l}=n,{currentText:u,startTyping:d,stopTyping:p}=Gg({textList:am,typingTime:1600,idleTime:3e3,erasingTime:500}),{activeModalName:g,openModal:y,closeModal:v}=al(),{increaseClickCount:E,totamjungScaleX:S,totamjungScaleY:R}=sm({onShowComplainModal:()=>y("totamjungComplain")});return T.useEffect(()=>{if(i){d();return}p()},[i]),c.jsx(Wn,{title:"토탐정 정보",open:i,onClose:l,children:c.jsxs(qg,{children:[c.jsx(Kg,{}),c.jsxs(Xg,{children:[c.jsx(Jg,{src:Yg,alt:"",onClick:E,$scaleX:S,$scaleY:R}),c.jsx(em,{children:"토탐정"}),c.jsxs(tm,{children:[c.jsx(nm,{children:u}),c.jsx(rm,{})]})]}),c.jsxs(om,{children:[c.jsxs(Te,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전:"," ",c.jsx("b",{children:`v${Ae.runtime.getManifest().version} - MV${Ae.runtime.getManifest().manifest_version}`})," ","/ 2025. 9. 17. 빌드"]}),c.jsxs(Te,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",c.jsx("b",{children:"요술토끼"}),"(",c.jsx(im,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),c.jsxs(lm,{children:[c.jsx(Ce,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:H.color.LIGHT_PURPLE,iconSrc:Wg,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),c.jsx(Ce,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:H.color.LEMON,iconSrc:c.jsx(gg,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),c.jsx(Ce,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:H.color.WHITE,iconSrc:c.jsx(mg,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]}),c.jsx(en,{title:"왜 그런 짓을...",width:"350px",height:"auto",open:g==="totamjungComplain",message:"그만 좀 두드려 주시면 안 될까요!?",actionType:"confirm",closeOnBackdropClick:!1,onClose:v})]})})},um="https://github.com/wzrabbit/boj-totamjung/wiki/%ED%86%A0%ED%83%90%EC%A0%95-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",dm=h.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,fm=h.h1`
  width: 130px;
  height: 100%;
`,pm=h.img`
  width: 100%;
`,hm=h.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,gm=h.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:n})=>n.color.GOLD};
`,Rd=h.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,Id=h.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,mm=n=>{const{selectedCategory:i,onCategoryChange:l}=n,[u,d]=T.useState("none");return c.jsxs(dm,{children:[c.jsx(fm,{children:c.jsx(pm,{src:$g,alt:"토탐정 설정"})}),c.jsx(Zh,{selectedCategory:i,onChange:l}),c.jsxs(hm,{children:[c.jsx(gm,{children:`v${Ae.runtime.getManifest().version}`}),c.jsx(Rd,{type:"button","aria-label":"도움말",onClick:()=>{d("guidePageOpenConfirm")},children:c.jsx(Id,{src:Ug,alt:""})}),c.jsx(Rd,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{d("totamjungInfo")},children:c.jsx(Id,{src:Fg,alt:""})})]}),c.jsx(en,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:u==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(um),d("none")},onNoSelect:()=>{d("none")}}),c.jsx(cm,{open:u==="totamjungInfo",onClose:()=>{d("none")}})]})},vm=h.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,xm=h.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,ym=h.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:n})=>n.filter.ORANGE_FILTER};
  object-fit: contain;
`,Am=h.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.ORANGE};
  }
`,wm=h.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:n})=>n.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Sm=h.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:n})=>n.color.ORANGE_TRANSPARENT};

  z-index: -1;
`,En=n=>{const{iconSrc:i,title:l}=n;return c.jsxs(vm,{children:[c.jsxs(xm,{children:[i&&(typeof i=="string"?c.jsx(ym,{src:i,alt:""}):c.jsx(Am,{children:i})),c.jsx(wm,{children:l})]}),c.jsx(Sm,{})]})},Tm=h.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:n})=>n.color.GOLD};
`,Em=h.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Nm=h.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Rm=h.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,Im=h.div`
  & svg {
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,km=h.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:n})=>n.color.WHITE};
`,Cm=h.div`
  display: flex;

  user-select: none;
`,kd=h.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,Cd=h.img`
  width: 30px;
  height: 30px;
`,jd=h.p`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:n})=>n.color.GOLD};
  }
`,jm=h.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,Mm=h.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:n,$backgroundColor:i})=>i==="brown"?n.color.BROWN:n.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Dm=h.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,Lm=h.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:n})=>n.color.LEMON};

  cursor: pointer;
`,Om=h.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,_m=h.div`
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
`,bm=h.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,Gm=n=>{const{isChecked:i,ariaLabel:l,onChange:u}=n;return c.jsxs(Om,{children:[c.jsx(bm,{checked:i,"aria-label":l,onChange:u}),c.jsx(_m,{$isChecked:i})]})},zm=n=>{const{id:i,name:l,isChecked:u,backgroundColor:d,onChange:p}=n;return c.jsx(Mm,{$backgroundColor:d,children:c.jsxs(Dm,{children:[c.jsx(Lm,{children:l}),c.jsx(Gm,{isChecked:u,onChange:()=>p(i),ariaLabel:l})]})})},Hm=n=>{const{items:i,checkedAlgorithmIds:l,onChange:u}=n;return c.jsx(jm,{children:i.map((d,p)=>c.jsx(zm,{id:d.id,name:d.name,isChecked:l.includes(d.id),backgroundColor:p%2===0?"brown":"light-brown",onChange:u},d.id))})},wo=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force","무차별 대입","무작위 대입"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:["소트","소팅"]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:["수학"]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:"Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬","imos"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap","pq","우큐"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우","네트워크 플로우","network flow"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:["냅색"]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:["gcd"]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:["어쩔FFT"]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix ARray And Lcp Array",tag:"suffix_array",alias:["서픽스 어레이"]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:[]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle","밋 인더 미들"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열 문제",englishName:"Longest Increasing Sequence Problem",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:["egcd","gcd"]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시","벌리캄프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:["외계인 트릭"]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"키타마사",englishName:"Kitamasa",tag:"kitamasa",alias:[]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 스패닝 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]},{id:208,name:"집합과 맵",englishName:"Set / Map",tag:"set",alias:[]},{id:209,name:"트리의 지름",englishName:"Diameter Of A Tree",tag:"tree_diameter",alias:[]},{id:210,name:"cdq 분할 정복",englishName:"Cdq",tag:"cdq",alias:[]},{id:211,name:"최장 공통 부분 수열 문제",englishName:"Longest Common Subsequence",tag:"lcs",alias:[]},{id:212,name:"다이얼",englishName:"Dial",tag:"dial",alias:[]},{id:213,name:"세그먼트 트리 비츠",englishName:"Segment Tree Beats",tag:"beats",alias:["세그비츠"]},{id:214,name:"홀짝성",englishName:"Parity",tag:"parity",alias:["패리티"]},{id:215,name:"피사노 주기",englishName:"Pisano Period",tag:"pisano",alias:[]},{id:216,name:"bulldozer 트릭",englishName:"Bulldozer Trick",tag:"bulldozer",alias:[]},{id:217,name:"불변량 찾기",englishName:"Finding Invariants",tag:"invariant",alias:[]},{id:218,name:"트리에서의 전방향 다이나믹 프로그래밍",englishName:"Rerooting On Trees",tag:"rerooting",alias:[]},{id:219,name:"역추적",englishName:"Traceback",tag:"traceback",alias:[]},{id:220,name:"제한된 트리 너비",englishName:"Treewidth",tag:"treewidth",alias:[]},{id:221,name:"배타적 논리합 기저 (gf(2))",englishName:"XOR Basis (gf(2))",tag:"xor_basis",alias:[]},{id:222,name:"비트 집합을 이용한 최장 공통 부분 수열 최적화",englishName:"Longest Common Subsequence Using Bit Sets",tag:"bitset_lcs",alias:["비트셋 lcs"]},{id:223,name:"격자 그래프",englishName:"Grid Graph",tag:"grid_graph",alias:[]},{id:224,name:"순환군",englishName:"Cyclic Group",tag:"cyclic_group",alias:[]},{id:225,name:"리-차오 트리",englishName:"Li-Chao Tree",tag:"li_chao_tree",alias:["리차오 트리"]},{id:226,name:"키네틱 세그먼트 트리",englishName:"Kinetic Segment Tree",tag:"kinetic_segtree",alias:[]},{id:227,name:"차분 배열 트릭",englishName:"Difference Array",tag:"difference_array",alias:[]},{id:228,name:"최대 부분 배열 문제",englishName:"Maximum Subarray",tag:"maximum_subarray",alias:[]},{id:229,name:"각도 정렬",englishName:"Angle Sorting",tag:"angle_sorting",alias:[]},{id:230,name:"조화수",englishName:"Harmonic Number",tag:"harmonic_number",alias:[]},{id:231,name:"소인수분해",englishName:"Prime Factorization",tag:"prime_factorization",alias:[]}],W2=wo.length,Md=n=>n.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),Z2=n=>{const i=Md(n),l=[];return wo.forEach(({id:u,name:d,englishName:p,tag:g,alias:y})=>{const v=[d,p,g,...y].map(S=>Md(S));(i===""||v.some(S=>S.indexOf(i)!==-1))&&l.push({id:u,name:d})}),l},go={FETCH_OPTIONS_DATA:"fetchOptionsData",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",ADD_RANDOM_DEFENSE_HISTORY_INFOS:"addRandomDefenseHistoryInfos",FETCH_GACHA_OPTIONS:"fetchGachaOptions",SAVE_GACHA_OPTIONS:"saveGachaOptions"},Hn={CHECKED_ALGORITHM_IDS:"algorithm",QUICK_SLOTS:"query",TIMER:"timer",SETTINGS:"settings"},Pm={RANDOM_DEFENSE_HISTORY:"queryLog"},Ee={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},B={...Ee,GACHA_OPTIONS:"gachaOptions"},Ya=n=>Array.isArray(n)?n.every(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):!1,Q2=[1,2],q2={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},_a={hotkey:"Alt",selectedSlotNo:1,slots:q2},Wa={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},K2={...Wa,shouldRevealTierOnHover:!1},Bm="none",X2=!1,Za=[],$m=0,J2=[],e1={isTierHidden:!1,isAudioMuted:!0},Dd={selectedNo:1,...q2},Um={[B.DATA_VERSION]:2,[B.CHECKED_ALGORITHM_IDS]:Q2,[B.QUICK_SLOTS]:_a,[B.TOTAMJUNG_THEME]:Bm,[B.HIDER_OPTIONS]:K2,[B.RANDOM_DEFENSE_HISTORY]:Za,[B.IS_TIER_HIDDEN]:X2,[B.FONT_NO]:$m,[B.TIMERS]:J2,[B.SHOULD_SHOW_WELCOME_MESSAGE]:!1},Fm={...Um,[B.DATA_VERSION]:3,[B.GACHA_OPTIONS]:e1},Qa=n=>Array.isArray(n)?n.filter(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):Q2,Vm=async()=>{const i=(await Ae.storage.local.get(B.CHECKED_ALGORITHM_IDS))[B.CHECKED_ALGORITHM_IDS];return Qa(i)},Ym=n=>{Ya(n)&&Ae.storage.local.set({[B.CHECKED_ALGORITHM_IDS]:n})},Wm=()=>{const[n,i]=T.useState(""),[l,u]=T.useState([]),[d,p]=T.useState(!1);T.useEffect(()=>{(async()=>{const R=await Vm();u(R),p(!0)})()},[]),T.useEffect(()=>{d&&Ym(l)},[l]);const g=R=>{i(R.target.value)},y=R=>{if(l.includes(R)){const D=l.filter(M=>M!==R);u(D);return}const C=[...l,R];u(C)},v=()=>{u(Array.from({length:W2}).map((R,C)=>C+1))},E=()=>{u([])},S=Z2(n);return{keyword:n,items:S,checkedAlgorithmIds:l,isLoaded:d,handleChangeKeyword:g,toggleAlgorithm:y,checkAllAlgorithms:v,uncheckAllAlgorithms:E}},Zm=()=>{const{keyword:n,items:i,checkedAlgorithmIds:l,isLoaded:u,handleChangeKeyword:d,toggleAlgorithm:p,checkAllAlgorithms:g,uncheckAllAlgorithms:y}=Wm(),{activeModalName:v,openModal:E,closeModal:S}=al();return c.jsxs(Tm,{children:[c.jsx(Em,{children:u&&c.jsx(Hm,{items:i,checkedAlgorithmIds:l,onChange:p})}),c.jsxs(Nm,{children:[c.jsxs(Rm,{children:[c.jsx(Im,{children:c.jsx(z2,{})}),c.jsx(km,{placeholder:"알고리즘 분류를 입력해 주세요...",value:n,onChange:d})]}),c.jsxs(Cm,{children:[c.jsxs(kd,{type:"button",onClick:()=>{E("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[c.jsx(Cd,{src:zg}),c.jsx(jd,{children:"전체 선택"})]}),c.jsxs(kd,{type:"button",onClick:()=>{E("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[c.jsx(Cd,{src:Hg}),c.jsx(jd,{children:"전체 해제"})]})]})]}),c.jsx(en,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{g(),S()},onNoSelect:S}),c.jsx(en,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{y(),S()},onNoSelect:S})]})},Qm=h.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,qm=h.legend`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  margin-bottom: 6px;
`,Km=h.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:n})=>n?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,Xm=h.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,Jm=h.label`
  width: 16px;
  height: 16px;
`,e3=h.div`
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
`,t3=h.input.attrs({type:"radio"})`
  display: none;
`,n3=n=>{const{checked:i,disabled:l=!1}=n;return c.jsxs(Jm,{children:[c.jsx(t3,{...n,onChange:()=>{if("value"in n){n.onChange(n.value);return}n.onChange()}}),c.jsx(e3,{$checked:i,$disabled:l})]})},Pn=n=>{const{legend:i,name:l,options:u,checkedValue:d,disabled:p,isVertical:g=!1,onChange:y}=n;return c.jsxs(Qm,{disabled:p,children:[c.jsx(qm,{children:i}),c.jsx(Km,{$isVertical:g,children:u.map(({label:v,value:E})=>c.jsxs(Xm,{children:[c.jsx(n3,{name:l,value:E,checked:E===d,disabled:p,onChange:y}),typeof v=="string"?c.jsx(Te,{type:"semiPrimary",fontSize:"16px",children:v}):v]},E))})]})},r3=h.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,o3=h.button`
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
`,Ld=h.img`
  width: 12px;
  height: auto;
`,Od=h.p`
  font-size: 14px;
  color: ${({theme:n,$tier:i})=>n.solvedAcTier[i]};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,i3=h.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,l3=h.ul`
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
`,s3=h.li`
  padding: 2px;
`,a3=h.button`
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
`,c3=h.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,t1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",u3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",d3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",f3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",p3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",h3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",g3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",m3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",v3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",x3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",y3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",A3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",w3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",S3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",T3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",E3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",N3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",R3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",I3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",k3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",C3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",j3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",M3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",D3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",L3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",O3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",_3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",b3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",G3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",H3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",P3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",B3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",$3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",U3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",F3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",V3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Y3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",n1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",W3="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",Nn={0:t1,1:u3,2:d3,3:f3,4:p3,5:h3,6:g3,7:m3,8:v3,9:x3,10:y3,11:A3,12:w3,13:S3,14:T3,15:E3,16:N3,17:R3,18:I3,19:k3,20:C3,21:j3,22:M3,23:D3,24:L3,25:O3,26:_3,27:b3,28:G3,29:z3,30:H3,31:n1},qa={unrated:t1,bronze:P3,silver:B3,gold:$3,platinum:U3,diamond:F3,ruby:V3,hidden:Y3,notratable:n1,warn:W3},r1=n=>{const{initSelectedValue:i,onChange:l}=n,[u,d]=T.useState(i),[p,g]=T.useState(!1),y=T.useRef(null);return T.useEffect(()=>{d(i)},[i]),T.useEffect(()=>{const S=y.current;if(!S)return;const R=C=>{C.target instanceof Node&&C.target!==S&&!S.contains(C.target)&&g(!1)};return document.addEventListener("click",R),()=>{document.removeEventListener("click",R)}},[y]),{selectedValue:u,isSelectOpen:p,updateSelectedValue:S=>{d(S),g(!1),l(S)},openSelect:()=>{g(!0)},containerRef:y}},Z3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],ha={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},Q3=n=>{const{selectedTier:i,onChange:l}=n,{selectedValue:u,updateSelectedValue:d,isSelectOpen:p,openSelect:g,containerRef:y}=r1({initSelectedValue:i,onChange:l});return c.jsxs(r3,{ref:y,children:[c.jsxs(o3,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:p,onClick:g,children:[c.jsx(Ld,{src:Nn[u],alt:""}),c.jsx(Od,{$tier:u,$isBold:!0,children:ha[u]}),c.jsx(i3,{children:c.jsx($2,{})})]}),c.jsx(l3,{$isOpen:p,children:Z3.map(v=>c.jsx(s3,{children:c.jsxs(a3,{type:"button","aria-label":`${ha[v]}를 경고 시작 티어로 설정하기`,onClick:()=>{d(v)},children:[c.jsx(Ld,{src:Nn[v],alt:""}),c.jsx(Od,{$tier:v,$isBold:v===u,children:ha[v]}),v===u&&c.jsx(c3,{children:c.jsx(Ro,{})})]})},v))})]})},q3=h.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,_d=h.input`
  width: 60px;
  height: 46px;

  border: none;
  border-radius: 10px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  font-size: 26px;
  font-weight: 800;
  text-align: center;
  color: ${({theme:n})=>n.color.GOLD};
  border: 2px solid ${({theme:n})=>n.color.LIGHT_BROWN};

  transition: outline 0.05s;

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    border: 2px solid ${({theme:n})=>n.color.LEMON};
    outline: 3px solid ${({theme:n})=>n.color.LEMON}70;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`,o1=99,i1=59,l1=/^\d+$/,K3=n=>l1.test(n)&&Number(n)>=0&&Number(n)<=o1,X3=n=>l1.test(n)&&Number(n)>=0&&Number(n)<=i1,J3=n=>{const{initHours:i,initMinutes:l,onChange:u}=n,[d,p]=T.useState(String(i)),[g,y]=T.useState(String(l));return T.useEffect(()=>{p(String(i)),y(String(l))},[i,l]),{hours:d,minutes:g,updateHours:C=>{const D=C.target.value;D.length>=3||p(D)},updateMinutes:C=>{const D=C.target.value;D.length>=3||y(D)},submitHours:()=>{if(!K3(d)||Number(d)===i){p(String(i));return}p(String(Number(d))),u(Number(d),Number(g))},submitMinutes:()=>{if(!X3(g)||Number(g)===l){y(String(l));return}y(String(Number(g))),u(Number(d),Number(g))}}},e4=n=>{const{hours:i,minutes:l,disabled:u,onChange:d}=n,{hours:p,minutes:g,updateHours:y,updateMinutes:v,submitHours:E,submitMinutes:S}=J3({initHours:i,initMinutes:l,onChange:d});return c.jsxs(q3,{children:[c.jsx("img",{src:Pg,width:"54px",height:"46px",alt:""}),c.jsx(_d,{name:"hours",type:"number",min:0,max:o1,value:p,disabled:u,onChange:y,onBlur:E,"aria-label":"시간"}),c.jsx(Te,{type:"normal",fontSize:"16px",children:"시간"}),c.jsx(_d,{name:"minutes",type:"number",min:0,max:i1,value:g,disabled:u,onChange:v,onBlur:S,"aria-label":"분"}),c.jsx(Te,{type:"normal",fontSize:"16px",children:"분"})]})},Le=n=>typeof n=="object"&&n!==null,s1=n=>Le(n)&&Object.keys(n).every(i=>!isNaN(Number(i))),t4=n=>Array.isArray(n)&&n.every(i=>typeof i=="number"),cl=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(n),Ka=n=>typeof n=="number"&&n%1===0&&n>=0&&n<=31,$n=n=>Ka(n)&&n!==31,n4=n=>Ka(n)&&n!==0&&n!==31,r4=n=>typeof n=="string"&&["unrated","bronze","silver","gold","platinum","diamond","ruby"].includes(n),o4=n=>/^[1-9]\d*$/.test(n),bd=n=>/^\d+$/.test(n),Xa=n=>{if(!(Le(n)&&"problemTagLockDuration"in n&&"shouldHideTier"in n&&"shouldWarnHighTier"in n&&"warnTier"in n&&"algorithmHiderUsage"in n&&"problemTagLockUsage"in n&&Le(n.problemTagLockDuration)&&"hours"in n.problemTagLockDuration&&"minutes"in n.problemTagLockDuration&&typeof n.problemTagLockDuration.hours=="number"&&typeof n.problemTagLockDuration.minutes=="number"&&typeof n.shouldHideTier=="boolean"&&typeof n.shouldWarnHighTier=="boolean"&&n4(n.warnTier)&&typeof n.algorithmHiderUsage=="string"&&["click","always"].includes(n.algorithmHiderUsage)&&typeof n.problemTagLockUsage=="string"&&["click","auto"].includes(n.problemTagLockUsage)))return!1;const{hours:i,minutes:l}=n.problemTagLockDuration;return i>=0&&i<100&&l>=0&&l<60&&i%1===0&&l%1===0},Ja=n=>Xa(n)&&"shouldRevealTierOnHover"in n&&typeof n.shouldRevealTierOnHover=="boolean",a1=n=>Le(n)&&"expire"in n&&"hour"in n&&"minute"in n&&"problem"in n&&typeof n.expire=="number"&&typeof n.hour=="string"&&typeof n.minute=="string"&&typeof n.problem=="number"&&n.hour.length>=1&&n.hour.length<=2&&bd(n.hour)&&n.minute.length>=1&&n.minute.length<=2&&bd(n.minute)&&(n.problem>=1e3&&n.problem%1===0||n.problem===-1),i4=n=>{if(!(Le(n)&&"font"in n&&"lock"in n&&"predict"in n&&"theme"in n&&typeof n.font=="string"&&typeof n.lock=="string"&&typeof n.predict=="string"&&typeof n.theme=="string"&&typeof n.lock=="string"&&["click","always"].includes(n.lock)&&typeof n.predict=="string"&&["click","always"].includes(n.predict)&&typeof n.theme=="string"&&["yes","no"].includes(n.theme)))return!1;if(n.font==="none")return!0;if(!/^font-\d+$/.test(n.font))return!1;const i=n.font.split("-")[1];if(!o4(i))return!1;const l=Number(i);return l>=1&&l<=19},l4=async()=>{const i=(await Ae.storage.local.get(B.HIDER_OPTIONS))[B.HIDER_OPTIONS];return Ja(i)?i:K2},s4=n=>{Ja(n)&&Ae.storage.local.set({[B.HIDER_OPTIONS]:n})},a4={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,shouldRevealTierOnHover:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},c4=()=>{const[n,i]=T.useState({...a4,isLoaded:!1});return T.useEffect(()=>{(async()=>{const E=await l4();i({...E,isLoaded:!0})})()},[]),T.useEffect(()=>{const{isLoaded:E,...S}=n;E&&s4(S)},[n]),{...n,updateProblemTagLockDuration:(E,S)=>{i(R=>R.isLoaded?{...R,problemTagLockDuration:{hours:E,minutes:S}}:R)},updateShouldHideTier:E=>{const S=E==="true";i(R=>R.isLoaded?{...R,shouldHideTier:S}:R)},updateShouldWarnHighTier:E=>{const S=E==="true";i(R=>R.isLoaded?{...R,shouldWarnHighTier:S}:R)},updateShouldRevealTierOnHover:E=>{const S=E==="true";i(R=>R.isLoaded?{...R,shouldRevealTierOnHover:S}:R)},updateWarnTier:E=>{i(S=>S.isLoaded?{...S,warnTier:E}:S)},updateAlgorithmHiderUsage:E=>{E!=="click"&&E!=="always"||i(S=>S.isLoaded?{...S,algorithmHiderUsage:E}:S)},updateProblemTagLockUsage:E=>{E!=="click"&&E!=="auto"||i(S=>S.isLoaded?{...S,problemTagLockUsage:E}:S)}}},u4=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,d4=h.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,f4=()=>{const{problemTagLockDuration:n,shouldHideTier:i,shouldWarnHighTier:l,shouldRevealTierOnHover:u,warnTier:d,algorithmHiderUsage:p,problemTagLockUsage:g,updateProblemTagLockDuration:y,updateShouldHideTier:v,updateShouldWarnHighTier:E,updateShouldRevealTierOnHover:S,updateWarnTier:R,updateAlgorithmHiderUsage:C,updateProblemTagLockUsage:D}=c4(),{hours:M,minutes:G}=n;return c.jsxs(u4,{children:[c.jsx(En,{title:"잠금 시간 설정",iconSrc:Ae.runtime.getURL("/lock.png")}),c.jsx(e4,{hours:M,minutes:G,onChange:y}),c.jsx(En,{title:"티어 가리개 설정",iconSrc:Y2}),c.jsx(Pn,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:i?"true":i===void 0?"":"false",onChange:v}),c.jsx(Pn,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!i,options:[{label:"사용하지 않음",value:"false"},{label:c.jsxs(d4,{children:[c.jsx(Q3,{selectedTier:d,onChange:R}),c.jsx(Te,{type:"semiPrimary",fontSize:"16px",children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:l?"true":"false",onChange:E}),c.jsx(Pn,{legend:"티어 아이콘에 마우스를 올릴 경우 난이도 공개하기",name:"shouldRevealTierOnHover",disabled:!i,options:[{label:"공개",value:"true"},{label:"공개하지 않음",value:"false"}],checkedValue:u?"true":"false",onChange:S}),c.jsx(En,{title:"기본 설정",iconSrc:c.jsx(ug,{})}),c.jsx(Pn,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:p??"",onChange:C}),c.jsx(Pn,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:g??"",onChange:D})]})},p4=h.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,h4=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,g4=n=>{const{show:i}=n;return i?c.jsxs(p4,{children:[c.jsxs(h4,{children:[c.jsx(En,{title:"알고 있는 알고리즘 관리하기",iconSrc:c.jsx(z2,{})}),c.jsx(Zm,{})]}),c.jsx(f4,{})]}):null},m4=h.div`
  display: inline-block;
  position: relative;

  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};

  padding: ${({$padding:n})=>n};

  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,v4=h.div`
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
`,ec=n=>{const{width:i,height:l,padding:u,title:d,children:p}=n;return c.jsxs(m4,{$width:i,$height:l,$padding:u,children:[d!==""&&c.jsx(v4,{children:d}),p]})},x4=h.input`
  width: ${({$width:n})=>n};
  height: 30px;
  padding: 0 6px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.WHITE};
  text-align: ${({$textAlign:n})=>n};
  font-size: 13px;

  &:focus,
  &:active {
    border-color: ${({theme:n,$hasError:i})=>i?n.color.RED:n.color.LEMON};
    outline: 3px solid
      ${({theme:n,$hasError:i})=>i?n.color.RED:n.color.LEMON}70;
  }

  transition: outline 0.05s;
`,Un=T.forwardRef((n,i)=>{const{width:l,hasError:u,textAlign:d,ariaLabel:p,...g}=n;return c.jsx(x4,{$width:l,$hasError:u,$textAlign:d,"aria-label":p,spellCheck:!1,ref:i,...g})}),y4=h.textarea`
  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};
  padding: 6px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.WHITE};
  font-size: 13px;

  resize: none;

  &:focus,
  &:active {
    border-color: ${({theme:n,$hasError:i})=>i?n.color.RED:n.color.LEMON};
    outline: 3px solid
      ${({theme:n,$hasError:i})=>i?n.color.RED:n.color.LEMON}70;
  }

  transition: outline 0.05s;
`,c1=T.forwardRef((n,i)=>{const{width:l,height:u,hasError:d,ariaLabel:p,...g}=n;return c.jsx(y4,{$width:l,$height:u,$hasError:d,spellCheck:!1,"aria-label":p,ref:i,...g})}),A4=h.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,w4=h.span`
  font-size: ${({$fontSize:n})=>n};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:n})=>n.color.LEMON};
  }
`,S4=h.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:n})=>n};
  height: ${({$fontSize:n})=>n};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,u1=n=>{const{href:i,fontSize:l,children:u}=n;return c.jsxs(A4,{href:i,target:"__blank",rel:"noopener",children:[c.jsx(w4,{$fontSize:l,children:u}),c.jsx(S4,{$fontSize:l,children:c.jsx(ig,{})})]})},ga=n=>`${Number(n.slice(0,2))+3}px`,T4=h.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:n})=>ga(n)};
  height: ${({$height:n})=>n===void 0?"auto":n};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:n})=>ga(n)};
    height: ${({$fontSize:n})=>ga(n)};

    color: ${({theme:n})=>n.color.LIGHT_RED};
  }
`,E4=h.p`
  font-size: ${({$fontSize:n})=>n};

  color: ${({theme:n})=>n.color.LIGHT_RED};
`,d1=n=>{const{fontSize:i,errorMessage:l,height:u}=n;return c.jsx(T4,{$fontSize:i,$height:u,children:l!==""&&c.jsxs(c.Fragment,{children:[c.jsx(P2,{}),c.jsx(E4,{$fontSize:i,role:"alert",children:l})]})})},f1=h.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,p1=le`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};
  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
`,N4=h.div`
  ${p1}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${f1}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,R4=h.div`
  ${p1}

  bottom: 0;
`,I4=h.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:n})=>n.filter.DARK_ORANGE_FILTER};
`,k4=h.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,C4=h.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:n})=>n.color.ORANGE};
`,j4=h.p`
  font-size: 12px;
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,M4=n=>{const{selectedSlotNo:i,isLoaded:l,onClick:u}=n;return c.jsxs(f1,{type:"button","aria-label":`${i}번 슬롯에 추첨 생성하기`,onClick:u,disabled:!l,children:[c.jsxs(N4,{children:[c.jsx(I4,{src:Ae.runtime.getURL("/dice.png"),alt:""}),c.jsxs(k4,{children:[c.jsx(C4,{children:"추첨 생성"}),c.jsx(j4,{children:l?`슬롯 번호 − ${i}`:"로딩 중..."})]})]}),c.jsx(R4,{})]})},D4=h.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,h1=le`
  width: 50%;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:n})=>n.color.LIGHTER_BROWN};

  transition: 0.2s;
`,L4=h.button`
  ${h1}

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
`,O4=h.button`
  ${h1}

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
`,_4=h.span`
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
`,b4=n=>{const{mode:i,onClick:l}=n;return c.jsxs(D4,{children:[c.jsx(L4,{type:"button",$isActivated:i==="easy",onClick:()=>{l("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),c.jsx(O4,{type:"button",$isActivated:i==="manual",onClick:()=>{l("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),c.jsx(_4,{children:"OR"})]})},G4=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,z4=h.div`
  display: flex;
  justify-content: space-around;
`,ma=31,H4=h.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,P4=h.div`
  width: 100%;
  height: 3px;

  background: ${({theme:n})=>`linear-gradient(to right, ${Array.from({length:ma}).map((i,l)=>$n(l)?`${n.solvedAcTier[l]} ${l/ma*100}%, ${n.solvedAcTier[l]} ${(l+1)/ma*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,Gd=h.input`
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
`,B4=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(H4,{children:[c.jsx(P4,{}),c.jsx(Gd,{type:"range",min:0,max:30,value:i,"aria-label":"시작 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),g=Math.max(Number(p),l);$n(p)&&$n(g)&&u(p,g)}}),c.jsx(Gd,{type:"range",min:0,max:30,value:l,"aria-label":"끝 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),g=Math.min(Number(p),i);$n(g)&&$n(p)&&u(g,p)}})]})},$4=h.div`
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
`,U4=h.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`,F4=n=>{const{startTier:i,endTier:l}=n;return c.jsxs($4,{children:[c.jsx(zd,{src:Nn[i],alt:"",draggable:!1}),c.jsx(U4,{children:"~"}),c.jsx(zd,{src:Nn[l],alt:"",draggable:!1})]})},V4=h.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,Hd=(n,i)=>i==="bronze"?n.solvedAcTier.BRONZE:i==="silver"?n.solvedAcTier.SILVER:i==="gold"?n.solvedAcTier.GOLD:i==="platinum"?n.solvedAcTier.PLATINUM:i==="diamond"?n.solvedAcTier.DIAMOND:i==="ruby"?n.solvedAcTier.RUBY:n.color.GRAY,Y4=h.li`
  width: 32px;
  height: 32px;
`,W4=h.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:n,$rank:i})=>Hd(n,i)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:n,$rank:i})=>`linear-gradient(to top, ${Hd(n,i)}70 0%, transparent 100%)`};
  }
`,Z4=h.img`
  width: 16px;
`;h.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`;const Q4={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},Pd={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},q4=n=>{const{rank:i,onClick:l}=n;return c.jsx(Y4,{children:c.jsx(W4,{type:"button",$rank:i,"aria-label":Q4[i],onClick:()=>{l(Pd.START[i],Pd.END[i])},children:c.jsx(Z4,{src:qa[i],alt:""})})})},K4=["unrated","bronze","silver","gold","platinum","diamond","ruby"],X4=n=>{const{onClick:i}=n;return c.jsx(V4,{children:K4.map(l=>c.jsx(q4,{rank:l,onClick:i},l))})},J4=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(G4,{children:[c.jsx(B4,{startTier:i,endTier:l,onChange:u}),c.jsxs(z4,{children:[c.jsx(F4,{startTier:i,endTier:l}),c.jsx(X4,{onClick:u})]})]})},ev=h.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,tv=h.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,nv=gt`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,rv=h.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${nv} 0.15s forwards;
  }
`,ov=h.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:n,$isSelected:i})=>i?n.color.GOLD:n.color.LIGHT_GRAY};
`,iv=["OR","AND","NOR"],lv=n=>{const{searchOperator:i,onClick:l}=n;return c.jsx(ev,{children:iv.map(u=>c.jsxs(tv,{children:[u===i&&c.jsx(rv,{children:c.jsx(Ro,{})}),c.jsx(ov,{type:"button","aria-label":`알고리즘 검색 옵션을 ${u}로 설정하기`,$isSelected:u===i,onClick:()=>{l(u)},children:u})]},u))})},sv=h.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:n,$isOpen:i})=>i&&le`
      & > ul {
        border-color: ${n.color.LEMON};
        box-shadow: 0 0 12px ${n.color.GOLD}70;
      }
    `}
`,g1=le`
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
`,av=h.ul`
  ${g1}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,cv=h.input`
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
`,uv=h.ul`
  ${g1}

  position: absolute;

  height: ${({$isOpen:n})=>n?"90px":"64px"};

  transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,dv=h.li`
  display: inline-block;

  height: 26px;
`,fv=h.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,pv=h.p`
  overflow: hidden;

  color: ${({theme:n})=>n.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,hv=h.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LEMON};
  }
`,Bd=n=>{const{id:i,name:l,mode:u,onClick:d}=n;return c.jsx(dv,{children:c.jsxs(fv,{type:"button","aria-label":u==="add"?`${l}을 검색에 포함할 알고리즘 목록에 추가하기`:`${l}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{d(i)},children:[c.jsx(pv,{children:l}),u==="delete"&&c.jsx(hv,{children:c.jsx(sg,{})})]})})},m1=0,gv=30,mv=31,v1=1e3,x1=99999,y1=500,So=300,ba=5,To=30,vv=/^\w{3,20}$/,Hi=1e8,$d=/^([1-9][0-9]*|0)$/,tn=512,el=50,xv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,[u,d]=T.useState(!1),[p,g]=T.useState(""),y=T.useRef(null),v=T.useRef(null),E=M=>{g(M.target.value)},S=i.length<ba?Z2(p).filter(({id:M})=>!i.includes(M)).map(({id:M})=>M):[],R=M=>{if(M.key==="Enter"){if(S.length===0)return;l([...i,S[0]]),g("")}if(M.key==="Backspace"){if(p!=="")return;l(i.slice(0,-1))}},C=M=>{l([...i,M]),g("")},D=M=>{l(i.filter(G=>G!==M))};return T.useEffect(()=>{const M=y.current,G=v.current;if(!M||!G)return;const P=Q=>{const U=Q.target;!U||!(U instanceof Node)||d(M.contains(U))},te=()=>{document.activeElement!==document.body&&d(M.contains(document.activeElement))},Z=()=>{G.focus()};return document.addEventListener("mousedown",P),document.addEventListener("focusin",te),document.addEventListener("focusout",te),M.addEventListener("click",Z),()=>{document.removeEventListener("mousedown",P),document.removeEventListener("focusin",te),document.removeEventListener("focusout",te),M.removeEventListener("click",Z)}},[y,v]),{isOpen:u,inputValue:p,searchedAlgorithmIds:S,updateInputValue:E,processActionIfKeyPress:R,addAlgorithmId:C,deleteAlgorithmId:D,containerRef:y,inputRef:v}},yv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,{isOpen:u,inputValue:d,searchedAlgorithmIds:p,updateInputValue:g,processActionIfKeyPress:y,addAlgorithmId:v,deleteAlgorithmId:E,containerRef:S,inputRef:R}=xv({selectedAlgorithmIds:i,onChange:l});return c.jsxs(sv,{ref:S,$isOpen:u,tabIndex:-1,children:[c.jsx(av,{tabIndex:-1,children:c.jsxs(c.Fragment,{children:[i.map(C=>{const D=wo.find(({id:G})=>G===C),M=D?D.name:"";return c.jsx(Bd,{mode:"delete",id:C,name:M,onClick:E},C)}),c.jsx(cv,{ref:R,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:u,value:d,onChange:g,onKeyDown:y})]})}),c.jsx(uv,{$isOpen:u,tabIndex:-1,children:p.map(C=>{const D=wo.find(({id:G})=>G===C),M=D?D.name:"";return c.jsx(Bd,{mode:"add",id:C,name:M,onClick:v},C)})})]})},Av=n=>typeof n=="string"&&["ko","en","ko/en","all"].includes(n),wv=n=>Le(n)&&"mode"in n&&"title"in n&&"handle"in n&&"solvedMin"in n&&"solvedMax"in n&&"language"in n&&"startTier"in n&&"endTier"in n&&"searchOperator"in n&&"algorithmIds"in n&&"customQuery"in n&&typeof n.mode=="string"&&["easy","manual"].includes(n.mode)&&typeof n.title=="string"&&typeof n.handle=="string"&&typeof n.language=="string"&&typeof n.solvedMin=="string"&&typeof n.solvedMax=="string"&&t4(n.algorithmIds)&&$n(n.startTier)&&$n(n.endTier)&&typeof n.searchOperator=="string"&&["OR","AND","NOR"].includes(n.searchOperator)&&typeof n.customQuery=="string",Sv=n=>{const{mode:i,title:l,handle:u,solvedMin:d,solvedMax:p,startTier:g,endTier:y,algorithmIds:v,customQuery:E}=n,S=i==="easy"?[Ud(l),Tv(u),Ev(d,p),Nv(g,y),Rv(v)]:[Ud(l),Iv(E)];for(let R=0;R<S.length;R++){const C=S[R];if(!C.isValid)return C}return{isValid:!0}},Ud=n=>n.length>To?{isValid:!1,errorMessage:`추첨 이름은 ${To}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},Tv=n=>n.trim()===""?{isValid:!0}:n.length<3||n.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:vv.test(n)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},Ev=(n,i)=>{const l=Number(n),u=Number(i),d=n.trim()==="",p=i.trim()==="";return!d&&!$d.test(n)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!p&&!$d.test(i)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!d&&l>Hi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Hi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!p&&u>Hi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Hi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!d&&!p&&l>u?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Nv=(n,i)=>{const l=Number(n),u=Number(i);return l>u?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},Rv=n=>n.length>ba?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${ba.toLocaleString()}개 이하여야 해요.`}:n.every(l=>typeof l=="number"&&l%1===0&&l>=1&&l<=W2)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Iv=n=>n.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:n.length>tn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${tn}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},kv=n=>{const{mode:i,handle:l,solvedMin:u,solvedMax:d,language:p,startTier:g,endTier:y,searchOperator:v,algorithmIds:E,customQuery:S}=n;if(i==="manual")return S.replace(/\n/g," ").trim();const R=Cv(E),C=jv(p),D=Mv(v),M=l.trim()!=="",G=u.trim()!==""||d.trim()!=="",P=R.length>0,te=M?`~@${l} `:"",Z=G?`s#${u}..${d} `:"",Q=C===""?"":`${C} `,U=g===y?`*${g} `:`*${g}..${y} `,ne=P?R.length===1?R[0]:`(${D==="~"?"~":""}${R.join(D)})`:"";return`(*0&!s?|!*0) o? -w? ${te}${Z}${Q}${U}${ne}`.trim()},Cv=n=>{const i=[];return n.forEach(l=>{var d;const u=(d=wo.find(p=>p.id===l))==null?void 0:d.tag;u&&i.push(`#${u}`)}),i},jv=n=>{switch(n){case"ko":return"lang:ko";case"en":return"(lang:en~lang:ko~lang:ja~lang:sv)";case"ko/en":return"(lang:ko|(lang:en~lang:ja~lang:sv))";default:return""}},Mv=n=>{switch(n){case"OR":return"|";case"AND":return"&";default:return"~"}},Fd={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Dv=n=>{const{selectedSlotNo:i,onSubmit:l}=n,[u,d]=T.useState(Fd),[p,g]=T.useState(""),[y,v]=T.useState(void 0),{mode:E,title:S,handle:R,solvedMin:C,solvedMax:D,language:M,startTier:G,endTier:P,searchOperator:te,algorithmIds:Z,customQuery:Q}=u,U=T.useRef(null),ne=T.useRef(null),q=T.useRef(null),Y=T.useRef(null),xe=T.useRef(null);return{mode:E,title:S,handle:R,solvedMin:C,solvedMax:D,language:M,startTier:G,endTier:P,searchOperator:te,algorithmIds:Z,customQuery:Q,errorMessage:p,errorElementName:y,setMode:pe=>{d(ce=>({...ce,mode:pe})),g(""),v(void 0)},setRandomDefenseInputValue:pe=>{const{name:ce,value:z}=pe.target;ce in Fd&&d(V=>({...V,[ce]:z}))},setLanguage:pe=>{Av(pe)&&d(ce=>({...ce,language:pe}))},setTierRange:(pe,ce)=>{d(z=>({...z,startTier:pe,endTier:ce}))},setSearchOperator:pe=>{d(ce=>({...ce,searchOperator:pe}))},setAlgorithmIds:pe=>{d(ce=>({...ce,algorithmIds:pe}))},submitRandomDefense:()=>{var z,V,$,w,j;if(!wv(u))return;const pe=Sv(u);if(pe.isValid){const ee=u.title.trim()===""?`추첨 ${i}`:u.title,re=kv(u);l(ee,re),g(""),v(void 0);return}switch(g(pe.errorMessage),v(pe.focusElementName),pe.focusElementName){case"title":(z=U.current)==null||z.select();break;case"handle":(V=ne.current)==null||V.select();break;case"solvedMin":($=q.current)==null||$.select();break;case"solvedMax":(w=Y.current)==null||w.select();break;case"customQuery":(j=xe.current)==null||j.select();break}},titleRef:U,handleRef:ne,solvedMinRef:q,solvedMaxRef:Y,customQueryRef:xe}},Lv=h.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,Ov=h.div`
  position: absolute;
  top: -32px;
  right: 0;
`,_v=h.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,Vd=h.div`
  display: flex;
  column-gap: ${({$columnGap:n})=>n||0};

  width: 100%;
`,va=h.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,Pi=h.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,bv=h.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Gv=h.div`
  display: flex;
  justify-content: center;
`,zv=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Hv=h.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,Pv=h.div`
  overflow: visible;
  position: relative;

  width: ${({$width:n})=>n};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,Bv=h.button`
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
`;const Yd=h.p`
  font-size: 14px;
  color: ${({theme:n})=>n.color.WHITE};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,$v=h.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,Uv=h.ul`
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
`,Fv=h.li`
  padding: 2px;
`,Vv=h.button`
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
`,Yv=h.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,Wv=n=>{var C;const{options:i,selectedValue:l,width:u,ariaLabel:d,onChange:p}=n,{selectedValue:g,updateSelectedValue:y,isSelectOpen:v,openSelect:E,containerRef:S}=r1({initSelectedValue:l,onChange:p}),R=((C=i.find(({value:D})=>D===g))==null?void 0:C.label)??"";return c.jsxs(Pv,{ref:S,$width:u,role:"combobox",children:[c.jsxs(Bv,{type:"button","aria-label":d,"aria-haspopup":"listbox","aria-expanded":v,onClick:E,$isActivated:v,children:[c.jsx(Yd,{$isBold:!0,children:R}),c.jsx($v,{children:c.jsx($2,{})})]}),c.jsx(Uv,{$isOpen:v,role:"listbox","aria-labelledby":d,children:i.map(({label:D,value:M})=>c.jsx(Fv,{role:"option","aria-selected":M===g,children:c.jsxs(Vv,{type:"button",onClick:()=>{y(M)},children:[c.jsx(Yd,{$isBold:M===g,children:D}),M===g&&c.jsx(Yv,{children:c.jsx(Ro,{})})]})},M))})]})},Zv=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],Qv=n=>{const{selectedSlotNo:i,isLoaded:l,onSubmit:u}=n,{mode:d,title:p,handle:g,solvedMin:y,solvedMax:v,language:E,startTier:S,endTier:R,searchOperator:C,algorithmIds:D,customQuery:M,errorMessage:G,errorElementName:P,setMode:te,setRandomDefenseInputValue:Z,setLanguage:Q,setTierRange:U,setSearchOperator:ne,setAlgorithmIds:q,submitRandomDefense:Y,titleRef:xe,handleRef:ze,solvedMinRef:Oe,solvedMaxRef:Qe,customQueryRef:qe}=Dv({selectedSlotNo:i,onSubmit:u});return c.jsx(ec,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:c.jsxs(Lv,{children:[c.jsx(Ov,{children:c.jsx(d1,{errorMessage:G,fontSize:"14px"})}),c.jsx(_v,{children:c.jsx(b4,{mode:d,onClick:te})}),c.jsxs(va,{$width:"380px",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"추첨 이름"}),c.jsx(Un,{ref:xe,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:p,maxLength:30,hasError:P==="title",onChange:Z})]}),d==="easy"?c.jsxs(c.Fragment,{children:[c.jsxs(Vd,{$columnGap:"50px",children:[c.jsxs(va,{$width:"190px",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),c.jsx(Un,{ref:ze,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:g,minLength:3,maxLength:20,hasError:P==="handle",onChange:Z})]}),c.jsxs(Pi,{$width:"166px",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),c.jsxs(bv,{children:[c.jsx(Un,{ref:Oe,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:y,hasError:P==="solvedMin",onChange:Z}),c.jsx(Te,{type:"primary",fontSize:"16px",children:"~"}),c.jsx(Un,{ref:Qe,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:v,hasError:P==="solvedMax",onChange:Z})]})]}),c.jsxs(Pi,{$width:"190px",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"문제 언어"}),c.jsx(Wv,{options:Zv,selectedValue:E,width:"130px",ariaLabel:"문제 언어 고르기",onChange:Q})]})]}),c.jsxs(Pi,{$width:"100%",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"난이도 범위"}),c.jsx(Gv,{children:c.jsx(J4,{startTier:S,endTier:R,onChange:U})})]}),c.jsxs(Pi,{$width:"446px",children:[c.jsxs(Vd,{$columnGap:"110px",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),c.jsx(lv,{searchOperator:C,onClick:ne})]}),c.jsx(yv,{selectedAlgorithmIds:D,onChange:He=>{q(He)}})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs(va,{$width:"100%",children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"쿼리"}),c.jsx(c1,{ref:qe,width:"100%",height:"160px",name:"customQuery",value:M,placeholder:`1 ~ ${tn}자`,minLength:1,maxLength:tn,hasError:P==="customQuery",ariaLabel:"쿼리",onChange:Z})]}),c.jsxs(zv,{children:[c.jsxs(Te,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",c.jsx(u1,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),c.jsx(Te,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),c.jsx(Hv,{children:c.jsx(M4,{isLoaded:l,selectedSlotNo:i,onClick:Y})})]})})},qv=h.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,Kv=h.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,Xv=h.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,Jv=h.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,ex=h.li`
  width: 26px;
  height: 26px;
`,tx=h.button`
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
`,nx=[1,2,3,4,5,6,7,8,9,0],rx=n=>{const{selectedSlotNo:i,occupiedSlotNos:l,onChange:u}=n;return c.jsx(Jv,{children:nx.map(d=>c.jsx(ex,{children:c.jsx(tx,{$isSelected:d===i,$isOccupied:l.includes(d),onClick:()=>{u(d)},"aria-label":`${d}번 슬롯 선택하기. ${d===i?"이미 선택되어 있는 슬롯입니다":""}`,children:d})},d))})},ox=h.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,ix=h.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,lx=h.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,Wd=h.span`
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
`,sx=h.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 16px;
`,ax=h.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 14px;
`,A1=le`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,cx=h.div`
  ${A1}

  white-space: nowrap;
`,ux=h.div`
  ${A1}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,dx=n=>c.jsxs(ox,{children:[c.jsxs(ix,{children:[c.jsx(Wd,{$backgroundColor:"gold",children:"추첨 이름"}),c.jsx(cx,{children:n.isEmpty?c.jsx(sx,{children:"(비어 있음)"}):c.jsx(Te,{type:"primary",fontSize:"16px",children:n.title})})]}),c.jsxs(lx,{children:[c.jsx(Wd,{$backgroundColor:"white",children:"쿼리"}),c.jsx(ux,{children:n.isEmpty?c.jsx(ax,{children:"(비어 있음)"}):c.jsx(Te,{type:"code",fontSize:"13px",children:n.query})})]})]}),fx=h.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,px=h.button`
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
`,hx=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,gx=(n,i)=>n?n==="F2"?`단축키: F2 + ${i}`:`단축키: ${hx?"Option":"Alt"} + ${i}`:"단축키: 미사용",mx=n=>{const{selectedSlotNo:i,hotkey:l,onClick:u}=n;return c.jsxs(fx,{children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:gx(l,i)}),c.jsx(px,{"aria-label":"단축키 전환하기",onClick:u,children:c.jsx(ag,{})})]})},vx=[1,2,3,4,5,6,7,8,9,0],xx=n=>{const{quickSlotsInfo:i,isLoaded:l,onHotkeyChange:u,onSlotChange:d,onSlotDelete:p,onSlotNoChange:g}=n,{selectedSlotNo:y,slots:v,hotkey:E}=i,[S,R]=T.useState(!1),[C,D]=T.useState(0),M=()=>{if(l){if(E===null){u("Alt");return}if(E==="Alt"){u("F2");return}u(null)}},G=()=>{const q=[];return vx.forEach(Y=>{v[Y].isEmpty||q.push(Y)}),q},P=()=>{R(!0)},te=()=>{R(!1)},Z=(q,Y)=>{if(!l)return;const xe=q.trim()===""?`추첨 ${y}`:q;d(xe,Y),te()},Q=()=>{l&&p()},U=q=>{g(q)};return{slot:v[y],selectedSlotNo:y,hotkey:E,occupiedSlotNos:G(),gachaProblemCount:C,shouldEditModalShow:S,switchHotkey:M,openEditModal:P,closeEditModal:te,updateSlot:Z,deleteSlot:Q,setSelectedSlotNo:U,setGachaProblemCount:D}},yx=(n,i)=>n.length>To?{isValid:!1,errorMessage:`추첨 이름의 길이가 너무 길어요. ${To}자 이하가 되도록 줄여 주세요.`,focusElementName:"title"}:i.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:i.length>tn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${tn}자 이하가 되도록 줄여 주세요.`,focusElementName:"query"}:{isValid:!0},Ax=n=>{const{initTitle:i,initQuery:l,onSlotChange:u}=n,[d,p]=T.useState(i),[g,y]=T.useState(l),[v,E]=T.useState(""),[S,R]=T.useState(void 0),C=T.useRef(null),D=T.useRef(null);return T.useEffect(()=>{p(i),y(l),E(""),R(void 0)},[i,l]),{title:d,query:g,errorMessage:v,isTitleElementHasErrors:S==="title",isQueryElementHasErrors:S==="query",setQuery:y,setTitle:p,submitSlotInfo:()=>{const te=yx(d,g);if(te.isValid){u(d,g),E("");return}const Z=C.current,Q=D.current,{focusElementName:U}=te;U==="title"&&(Z==null||Z.select()),U==="query"&&(Q==null||Q.select()),R(U),E(te.errorMessage)},titleRef:C,queryRef:D}},wx=h.form`
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
`,Sx=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`,Tx=n=>{const{title:i,query:l,open:u,onClose:d,onSlotChange:p}=n,{title:g,query:y,errorMessage:v,isTitleElementHasErrors:E,isQueryElementHasErrors:S,setQuery:R,setTitle:C,submitSlotInfo:D,titleRef:M,queryRef:G}=Ax({initTitle:i,initQuery:l,onSlotChange:p});return c.jsxs(Wn,{title:"추첨 수정",open:u,onClose:d,children:[c.jsxs(wx,{children:[c.jsxs(Zd,{children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"추첨 이름"}),c.jsx(Un,{type:"text",width:"100%",name:"title",value:g,ref:M,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:E,ariaLabel:"새로운 추첨 이름을 입력해주세요",onChange:P=>{C(P.target.value)}})]}),c.jsxs(Zd,{children:[c.jsx(Te,{type:"primary",fontSize:"16px",children:"쿼리"}),c.jsx(c1,{width:"100%",height:"150px",name:"query",value:y,ref:G,maxLength:tn,placeholder:`1 ~ ${tn}자`,hasError:S,ariaLabel:"새로운 쿼리를 입력해주세요",onChange:P=>{R(P.target.value)}})]}),c.jsxs(Sx,{children:[c.jsxs(Te,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",c.jsx(u1,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),c.jsx(Te,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]}),c.jsx(d1,{fontSize:"14px",errorMessage:v})]}),c.jsxs(Io,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Eo,{}),color:H.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:d}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(No,{}),color:H.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:D})]})]})},Ex=gt`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,Nx=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${Ex} 2s forwards infinite linear;
  }
`,Rx=()=>c.jsx(Nx,{children:c.jsx(B2,{})}),Ix=gt`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`,kx=gt`
  0% {
   opacity: 0.3;
  }
  
  50% {
    opacity: 1;
  }

  100% {
   opacity: 0.3;
  }
`,Cx=gt`
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
`,jx=gt`
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
`,Mx=gt`
  from {
    pointer-events: none;
    opacity: 0;
  }

  to {
    pointer-events: auto;
    opacity: 1;
  }
`,Dx=h.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 550px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${Zg});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }

  &,
  & * {
    font-family: Pretendard;
  }
`,Qd=h.div`
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
`,qd=h.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,w1=le`
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
`,Lx=h.button`
  ${w1}

  & > img {
    height: 70%;

    filter: ${({theme:n})=>n.filter.LIGHT_GRAY_FILTER};
  }
`,Ox=h.button`
  ${w1}

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_GRAY};
  }
`,_x=h.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,bx=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,Gx=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,zx=h.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`,Hx=h.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_RED};
  }
`,Px=h.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({theme:n})=>n.color.LIGHT_RED};
  text-align: center;
`,Bx=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,Kd=h.li`
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
`,$x=h.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`,Ux=h.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.WHITE};
  }

  animation: ${Ix} 3s linear infinite;
`,Xd=h.div`
  display: flex;
  column-gap: 8px;
`,Fx=h.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};

  animation: ${kx} 2s linear infinite;
`,Vx=h.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100%;
`,Yx=h.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,Wx=h.div`
  width: 25px;
  height: 25px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.PURE_WHITE};
  }

  animation: ${Cx} 1.5s infinite;
`,Zx=h.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.WHITE};
`,Qx=h.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,qx=h.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 60px 20px 20px 20px;

  opacity: 0;
  animation: ${jx} cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s 0.3s forwards;
`,Kx=h.div`
  position: absolute;
  left: 0;
  bottom: 65px;

  width: 100%;
  height: 20px;
`,Xx=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;

  opacity: 0;
  pointer-events: none;
  animation: ${Mx} 0.3s 1s forwards;
`,Jx="/assets/unrated-card-iGk2lhrr.png",ey="/assets/bronze-card-Ctc25mzn.png",ty="/assets/silver-card-Cgb8QXRF.png",ny="/assets/gold-card-DjMsoKXy.png",ry="/assets/platinum-card-CZ601BWQ.png",oy="/assets/diamond-card-Eub_to2I.png",iy="/assets/ruby-card--BnHlKWe.png",ly="/assets/hidden-card-BS-zY2RF.png",sy="/assets/card-box-front-black-Bn2hoJwG.png",ay="/assets/card-box-front-red-CP52fAYR.png",cy="/assets/card-box-front-green-CaU66ZRJ.png",uy="/assets/card-box-front-blue-BM7ozDKr.png",dy="/assets/card-box-front-gold-as3E5etT.png",fy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgKRT1kAAAOJSURBVHic7d0xchNJFMbx1z1VMolLE26VPa4mIzQ3gBuwN+AGcAM22xBu4CPADSAkg802Q5Tt3FYozeveRHaxxmBNv+6xLP1/mV0186YUdM1rff3kZGRd170UkZOx6wK4d3+enp5+GLOgG7NYCCGo6hcRacesC2AjXDRN83Q2m83GKujHKiQioqpvhcUN2FWtqo7avTVjFTo6OnotIq/HqgdgI4W2bS8vLy8/j1FslBb14ODg2Hv/UXh7AyAiMcan5+fnX2vXqd6ihhDapmlOhMUNwMrqhad+ndoFVPVNSum4dh0AD0rbdd372kWq7sF1XfdCRN7VrAHgwXoynU7/mc/n/9YqUG0PLoTQquo3oTUF8GtVoyPVWtTV18FtrfsD2ApVoyNVWlQiIQAGqBYdKd6icloBQI4a0ZGiLepq343WFMBg3vvi36oWXeD6vn8lIs9K3hPAzghd1xXdjyvWoh4eHj5zzr2XzLe3lJIsFgtJKZV6JAD3xDknk8lEnBu+xKSUnp+dnX0q8hwlbhJCaGOMHy2B3sViITHGEo8DYAN472UymeRcetE0zePZbHZhfgbrDUTspxX6vmdxA7ZMjFH6vs+5tFXVIvtx5pjIKhLyV+71KaXcDwHAhosxStM0Oa1qKHHKwdSiWiMhKSVZLpe8vQFbzDkne3t7OZeaTzmYWlTrAEtVZXEDttzVi0yGNsZoalWzW1TraQVDfw7ggUkpifc+p1X9w3LKIatFtQ6wJBIC7B5LdCT3lMPgFrXEAEtVZXEDdoyhVc0ekDl4gbNGQlSV1hTYUTHG3H33rAGZg/bgrAMsLSs4gO1giI4MHpC5doUSAyw5rQBAZLzoyNotqnVKCKcVAFwxBPwHDchcq0W1RkI4rQDgJssph3WjI3femUgIgFoMrepa0ZHftqghhNZ7bz6twOIG4DZXL0A51hmQ+dsFzjrAktMKAO5iiI6Eu6Ijv9yDWw2wfCcij3IqEwkBsK5a0ZFb78YASwBjqzEg89YWVVVPGGAJYEw1BmT+1KISCQFwX4wDMr/P5/OvP/7zf3dhgCWA+2Y55RBjfP5jdOS6RS3xm6YMsARgZYiOtDejI9cLXIzxpRgjIaqaezkAXDNGR95e/eFEOK0AYPOU+G1VX2KA5XK5ZHEDUJQlS7v6EXpp9vf3/xaRF7kP0fc9rSmAKlJK4pwT7wfP5n00nU6P/wNvYiJR2sRuggAAAABJRU5ErkJggg==",py="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2NWJjNmE2LTdhYjMtNGQ0Ny1hYTI1LWIxYzQ5NmFkZDI5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3ZDViNDA4LWNmNzUtNmE0Yy04ODgyLWQwZWI3MmNjMTdkZCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjViYzZhNi03YWIzLTRkNDctYWEyNS1iMWM0OTZhZGQyOTYiIHN0RXZ0OndoZW49IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46OB6bAAAD0UlEQVR4nO3dS24bRxCA4eomQSm72dsjTG4g7wLJAkY3kG+gnMC6QY6gI+gI9g0swE6QXXKDEKC91zKa6e7KwqRhO9ZjuqebFPl/OwkY1mhT6GpWlYyswUldX6rIxTpiA1iLtx8Wi1clA6qqmJIBRUSO6vrcilyVjgtgvYzIq/eLxdtS8YonuF+appl6/5eIVCXjAtgIN24yefHnfD4vEUxVxZYItDL1/lJIbsCuqqbeF63eiiW444ODCxE5KxUPwEZql7mgiCIl6tGzZ4fW2nfC6Q2AiIQQXvzx6dPfOWMUKVHbpqnsZHIlJDcAS8sDT/44uQN4738T1cPccQA8KdXLun6TO0jWEvWkrs9UJPsfAeBpytk6krVNpG2aynn/j1CaArhbttaRrHdw7vPXwVWuzwewFbK2jmRJcLSEABggW+vI6CUq0woAYozdOjJ6ido2zeq4WY35uQC2n7F29C8kp2N+mHPutRjTxjzrQ5DbrhvzdQCsyd5sJhM77PxkRJrjur76fbH4daz3GK1Effn8eSvGvJGI05uqyr9dJ6o61usAWCNjjOzNZmJNRIpRPf3w8eN16juM1ibSNk3lQngX29B723XiQxjjVQBsCGut7M9mMY/eTCeTn6/n85uU+KPdwaVMKzjnSG7AFgohiHMu5tHKeT/KfVxygjs+OLiI3c4bVKX3PvUVAGyozjkJcVdP7Uldn6XGTypRU1pCVFVu+14Cpzdgq1ljZH9vL+bRpCmH5BI1ZYGl857kBuyAoCpd38c8Wk1DSCpVoxNcyrSCD0EcpSmwM5z3cXftqocpUw5RJWrKAktVlduui63LATxRxhjZn83ERLSOxEw5RJWoqQsse+9JbsAOWt27x4hdkDk4wSW1hHgf+7UxgC0QQohtC4takDnorJiywDIsS1OmFYDdljLlMGRB5qBJhtQFlkwrAFgp0Toy6A4uZYEl0woAvhZUo6cchizIfFSCS2kJYVoBwI+kTDk8tnXkwRKVlhAAuRhj5Ke4UvXB1pEHS9S2aSprbfS0Ai0hAO6zOgTFeMyCzHsTnHPutYi0McF9/CYBADvER7aOGJHmodaROxPccoHlxeCo8jkrR86eAdhBXd/HVntn920d+eEdHAssAZQ29oLMO+/gnPdXLLAEUFKOBZn/S3C0hABYl5TWkaO6Pv/+l9+UqCywBLBuKVMOIYTTVevINyVq6v80ZYElgDGE+NaR6vvWkS8Jrg/hXFJaQihNAYwkpXXkpK4vv/qZaQUAmydlQaaonr5fLK5t6gLLhP4VALhTyoLM5T+hl/8A2pI/aItnBBUAAAAASUVORK5CYII=",hy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfDJPYAAAPwSURBVHic7d1BVtxGEIDh6paDAGehfTx5yiJmlvL4AnADfAN8AnODHIEjcAT7BvYFYs8uJFmE90j2bBIYSd2VxXjy4jgwo+6WZvD83w7ea0rMop6qqSqMrMFocnAmYk7XERvAOuibq/c/vxg0oqqYIQOKiIwm4xMROR86LoA1M/7F1Y+/vBkq3OAJrqzGpbP6QcQUQ8YFsAn0OvPm2eX04nKQaKpihwi04KyekdyAbWUKZ4at3gZLcN9ODk5FzPFQ8QBsICOH81wwVLgBfFN9X1lr3/L2BkBExHv37I/pr9M+YwxSopZVWWSZPSe5AViYv/AMEKfvAM7mP6iaqu84AB4SU4wmB697j9LnDx89f3osanv/JQA8UD22jvTaJlJWZeFs/hulKYC79dc60usdnLM5924Alui3daSXBEdLCICV9dg6krxEZVoBQIjUrSPJS9SyKj++bpLcAHRjbZb8D5KPUv6w1u6+MiKHoed920hd3yZ8IgDrsLOzK/bRV12PlaPJ+Pzq/cXLVM+RrER9Uo0PjdXXoW9vqir1zZ+ioqkeCcCaGDGys7cvxnQvEtXL0e/Ti3exz5CsTaSsysJn+duYht56diveNSkeB8AGsFkmO/l+wEm9zvzsu8vp5XVM/GR3cLHTCm1Tk9yAL4x3TtqmDjhpCmd2k9zHRSe4jy0hp6HnVb24oA8BwKZrm5mod90PGjkcPX96HBs/qkSNbQlRVWnqG/Eu4AMA8CAYYyXfexxwMm7KIbpEjV1g6dqa5AZ84VS9NEHdEabwmUaVqsEJLnZawTsnruHeDdgGrm2CXmZUTRUz5RBUosYusFRVqW9vRJW3N2BbzFtHHosx3dNOyJRDUImaYoGla2qSG7BlVOZ37iFCF2R2TnCxLSGubaRt+aspsI28c+LbkKupsAWZnd4VYxdYqnqpb/5iWgHYYjFTDl0WZHaaZEixwJJpBQAiIsZkku+FTjms1jrS6Q4udoEl0woAFlRjphxWX5C5UoKLbQlR75hWAPCJmCmHVVtHlpaotIQA6IsRI/n+10Fnl7WOLC1Ry6osrMniphVoCQFwBxWVeha2A3KVBZn3JrjW7r4SE7fAkpYQAPfxrglsHZFyWevInQnuSTU+NKKnIVFFFoP0s9DjALZIU89E1QecNMf3bR353zs4FlgCGFrqBZl33sE5m5+zwBLAkPpYkPlZgqMlBMC6RC3InIxPPv/2v7DAEsC6xSzI9N4fLVpHPilRU/xPUxZYAoil6gNbR0zx39aRfxKct/lJVEsICywBJBLZOnK2+MKIMK0AYPPELMhUL0dXH356Z1MssJz3sJDcAKQTsyBz/k/oRf4Gq9snW0kHgDsAAAAASUVORK5CYII=",gy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoJaQIcAAAPESURBVHic7d1LbhNBEIDh6rZlw272YdBwg7BDgUjODcINwgnIDThCjpAjwA2IxEPs4AZYcthnSTzdXSxsRyRgnOmeadv4/3aJ1KnJpjTVriobWYOyPDwT0dN1xAawFu8mk48vcwZUVTE5A4qIlOXBiYg9zx0XwLqZl5PJh3e5omVPcFX1rPK+/1VEipxxAWyEq17PPR2Pv4xzBFNVsTkCLXjfPxOSG7CrCu/7Wau3bAnu8ePnpyJynCsegI00mueCLLKUqHt7B/vW2vfC2xsAEQkhPP3x4/O3LmNkKVGralT0evZcSG4A5uYvPN3H6TqA9/6Nqux3HQfAVinK8sXbroN0WqKW5eGxiHb+TwDYVt21jnTaJlJVo8J7910oTQEs11nrSKd3cN477t0ArNJp60gnCY6WEAANdNY60nqJyrQCgBhtt460XqLO7t36lKYAGrPWtP6BZL/NP+ace22MjGLOhuBlOr1u83EArMlgMBRrew1Pmaosn59PJp9etfUcrZWojx69GBkjbyXi7U1VZTr9Kara1uMAWCNjjAwGQzGmeZGoKkeXlx8vUp+htTaRqhoVIbj3sQ290+m1hODbeBQAG8JaK4PBg5ijV71e/8l4fHGVEr+1O7iUaQXnHMkN+A+FEMQ5F3O08N61ch+XnOBmH+/GbedVDeJ9nfoIADaUc1NRDTFHR7NJqDRJJWpKS4iqSl1fSwhR/zyALWGMleEwtlSNn3JILlFTFlh670huwA5QDVLX05ijRQj9pFI1OsGlTCuE4MX7qNocwBaavdA0v2tXlf2UKYeoEjVlgeWsJeQ6ti4HsKVmrSMPxJjmaSdmyiGqRE1dYOl9TXIDdtDi3j1G7ILMxgkupSXEexf7sTGA/0AIIbYtLGpBZqN3xZQFlqphXpoyrQDsspQphyYLMhtNMqQusGRaAcBCjtaRRndwKQssmVYA8DvVlCmH+y/IvFeCS2kJYVoBwN+kTDnct3VkZYlKSwiArhhjZDh8GHV2VevIyhK1qkaFtTZhWoGWEADLLV6CYtxnQeY/E5xz7rVI/AJLWkIArBKCj7yjN9Wq1pGlCW6+wPI0Iuq8oS9q9gzADqrr6Pu4439tHfnrHRwLLAHk1vaCzKV3cN67cxZYAsipiwWZfyQ4WkIArEvagsyDk7u/vFWissASwLqlTDmEEI4WrSO3StTU7zRlgSWANizm1iMUd1tHbhJcCPWJJLSEsMASQFvSWkcOz25+EmFaAcDmSVmQqSpHk8mHC5u6wDKhfwUAlkpZkDn/Enr5Be7yP2gjXwXJAAAAAElFTkSuQmCC",my="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm80oXMAAAPjSURBVHic7d1LbhtHEIDh6iYh0rvZxxSYvUWPd4EewOgG8g2UE4Q38BF0BB3BvoEF2AmyiwxnHwFK9lqaw+7qLCQGjm2amu6eISX+304ChjXaFLpaVUUja3A0GZ0Fkek6YgNYAyNv3n+4ftllyBCCmC4Diojs741OrZHzruMCWC8T5OW7j9dvuorXeYL7qRyP++r/EJGiy7gANsKNs70Xv19eXXURLIQgtotAC/3gz4TkBmyrou99p9VbZwnuYLI7lSAnXcUDsIGMVAeT3Wl34TqwX/5QWrVvhdMbABFRqy9+u/znss0YnZSoVTkurPbOheQG4M7dgaf9OG0H8OpfiYSy7TgAHpTi8PnoddtBWi1Rj/ZGJ8FI638EgIepzdaRVttEqnJcOPV/CaUpgOVaax1p9Q7OBc+9G4BVWm0daSXB0RIC4N5abB3JXqIyrQAgRu7WkewlalWOF8fNIufnAnj8jNrs/5Ds5/wwp+4XMaaKfd57ldmszvdCANZiMNiRXq/Z+cmIjA+ej85//XD9c673yFaiHj57Wok1ryXy9BZCkE+fagkh5HolAGtijJHBYEesjUgxGo7f//n3Reo7ZGsTuW0J0bcpDb2zWS3ea47XAbABbM/KcLAT8+hN3/Z+vLi8ukmJn+0OLnVawTlHcgMeGfUqzrmYRwvnfZb7uOQEdzDZnaZs51UNMp/71NcAsIHq2olqxLWTkepob3SSGj+pRE1tCQkhyKyei3J6Ax4ta4wMnwxiHk2ackguUVMXWDrnSW7AI6chSD2bxzxa9FWTStXoBJc6reC9inOUpsA2cN5H3rOHMmXKIapETV1gGUKQ2ayOq80BPEjGGBkOd8SY5mknZsohqkTNscByPvckN2DLLO7cY8QuyGyc4NJbQnzsv44BPHDqNbYlLGpBZqOzYuoCS9Xb0pRpBWB7pUw5NFmQ2WiSIccCS6YVAIiIWGtkOGy3daTRHVzqAkumFQAsqIboKYcmCzLvleBSW0KYVgDwpZQph/u2jqwsUWkJAdAWY4w8iZtyWNk6srJErcpxYb1NmlagJQTAMosDUIz7LMj8boK7XWApVVR0WUwr0BICYDkf2TpiRMarWkeWJrjDZ08rETNtHPVOCEHqyKY+ANulrudxlV6Qk+9tHfnmHRwLLAF0LfeCzKV3cLctISywBNCdNhZkfpXgaAkBsC4prSP7e6PTr3/9GRZYAli3lAWZavV40TryvxI1x3eassASQCqNbx0pvmwd+S/BzVVP01tCKE0BpEtpHTmajM4++5lpBQCbJ2VBpmg4fvfx+sLmWGAZ3cMCAEukLMi8+xJ6+RcJHUqkAQAT5gAAAABJRU5ErkJggg==",vy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABVCAMAAAAbt1PlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaGhoaGhkZGRkZGRgYGBoaGhsbGyAgIBoaGhoaGhoaGhgYGBoaGhsbGxoaGhsbGxQUFEvJrZYAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWVJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Yhl+QYycZD1FNITiwAAAABJRU5ErkJggg==",xy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcaGjcaGjcZGTcZGTgYGDcaGjUbGzAgIDcaGjYaGjcaGjgYGDcaGjcbGzYaGjgbGygUFCzbu+wAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",yy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABQyHxQyHhQxHRQyHhAwIBQyHhUwIBAwIBMyHhQyHhMyHhQwHBQzHhQyHhMzHRMyHRUjGd0mtLoAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",Ay="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaNxoaNxkZNxkZNxgYOBoaNxsbNSAgMBoaNxoaNhoaNxgYOBoaNxsbNxoaNhsbOBQUKK3qr6AAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",wy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcnGjcoGjcoGTcnGTgoGDcnGjUlGzAgIDcoGjYoGjcoGjgoGDcnGjcnGzYmGjgoGygeFGHYzFEAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",ht={unrated:Jx,bronze:ey,silver:ty,gold:ny,platinum:ry,diamond:oy,ruby:iy,hidden:ly},ya={front:{black:sy,red:ay,green:cy,blue:uy,gold:dy},inside:{black:fy,red:py,green:hy,blue:gy,gold:my},top:{black:vy,red:xy,green:yy,blue:Ay,gold:wy}},Sy=gt`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ty=gt`
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
`,Ey=gt`
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
`,Ny=gt`
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
`,Ry=h.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${Sy} 0.25s forwards;
`,S1=h.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:n})=>n&&le`
      animation: ${Ty} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:n})=>!n&&le`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,Iy=h.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:n})=>n.color.BLACK};

  ${S1}:hover > & {
    box-shadow: 0 0 75px ${({theme:n})=>n.color.GOLD};
  }

  ${({theme:n,$isCardBoxOpening:i})=>i&&le`
      box-shadow: 0 0 75px ${n.color.GOLD};
    `};
`,ky=h.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,Cy=h.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:n})=>!n&&le`
      opacity: 0;
    `}
`,Aa=h.img`
  position: absolute;
  top: ${({$top:n})=>n};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:n,$delay:i})=>n&&le`
      animation: ${Ny} 1.5s ${i}s forwards;
    `}
`,jy=h.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,My=h.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:n})=>n&&le`
      animation: ${Ey} 1.1s ease-in-out forwards;
    `}
`,Dy=n=>{const{color:i,isTierHidden:l,cardRanks:u,onFirstClick:d,onOpenAnimationEnd:p}=n,[g,y]=T.useState(!1),v=u[0],E=u[1],S=u[2];return c.jsx(Ry,{children:c.jsxs(S1,{onClick:()=>{y(R=>(R||d(),!0))},$isCardBoxOpening:g,onAnimationEnd:R=>{g&&R.target===R.currentTarget&&p()},"aria-label":"카드 상자를 열어 추첨 진행하기",children:[c.jsx(Iy,{$isCardBoxOpening:g}),c.jsx(ky,{src:ya.inside[i],draggable:!1}),c.jsxs(Cy,{$isCardBoxOpening:g,children:[v&&c.jsx(Aa,{src:v!=="unrated"&&l?ht.hidden:ht[v],draggable:!1,alt:"",$isCardBoxOpening:g,$top:"0",$delay:1.5}),E&&c.jsx(Aa,{src:E!=="unrated"&&l?ht.hidden:ht[E],draggable:!1,alt:"",$isCardBoxOpening:g,$top:"4%",$delay:1.65}),S&&c.jsx(Aa,{src:S!=="unrated"&&l?ht.hidden:ht[S],draggable:!1,alt:"",$isCardBoxOpening:g,$top:"8%",$delay:1.8})]}),c.jsx(jy,{src:ya.front[i],draggable:!1,alt:""}),c.jsx(My,{src:ya.top[i],draggable:!1,alt:"",$isCardBoxOpening:g})]})})},Ly=h.div`
  display: flex;
  visibility: ${({$visible:n})=>n?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:n})=>n};
  justify-content: center;

  width: 100%;
  height: 100%;
`,Oy=h.div.attrs(({$gap:n,$width:i,$height:l})=>({style:{gap:`${n}px`,padding:`${n}px`,width:`${i}px`,height:`${l}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,_y=h.div.attrs(({$gap:n})=>({style:{rowGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,by=h.div.attrs(({$gap:n})=>({style:{columnGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,Gy=()=>{const[n,i]=T.useState(0),[l,u]=T.useState(0);return{rotateX:n,rotateY:l,adjustCardTweak:g=>{const y=g.currentTarget.getBoundingClientRect(),v=g.clientX-y.left,S=((g.clientY-y.top)/y.height-.5)*20,R=(v/y.width-.5)*-20;i(S),u(R)},resetCardTweak:()=>{i(0),u(0)}}},zy=(n,i)=>i?ht.hidden:n>=1&&n<=5?ht.bronze:n>=6&&n<=10?ht.silver:n>=11&&n<=15?ht.gold:n>=16&&n<=20?ht.platinum:n>=21&&n<=25?ht.diamond:n>=26&&n<=30?ht.ruby:ht.unrated,Hy=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,Py=h.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,By=h.div.attrs(({$rotateX:n,$rotateY:i,$width:l})=>({style:{transform:`perspective(${l*3}px) rotateX(${n}deg) rotateY(${i}deg)`,width:`${l}px`,height:`${l*1.36}px`,borderRadius:`${l*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:n})=>n.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:n,$isTierHidden:i})=>`url(${zy(n,i)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  }
`,$y=h.a.attrs(({$cardWidth:n})=>({style:{rowGap:`${n/30}px`,padding:`${n/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,Uy=h.img.attrs(({$cardWidth:n})=>({style:{height:`${n/2.4}px`,margin:`${n/4.016}px 0 ${n/16.066}px 0`}}))``,Fy=h.div.attrs(({$cardWidth:n})=>({style:{fontSize:`${n/7.531}px`,lineHeight:`${n/7.531}px`}}))`
  color: ${({$tier:n,$isTierHidden:i,theme:l})=>Hy(n,i,l)};
  font-family: 'Cafe24ClassicType';
`,Vy=h.div.attrs(({$cardWidth:n,theme:i})=>({style:{height:`${Math.max(28,n/6.694)}px`,color:`${i.color.WHITE}`,fontSize:`${Math.max(14,n/13.388)}px`,lineHeight:`${Math.max(14,n/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,Yy=h.div.attrs(({$movement:n})=>({style:{backgroundPosition:`${n+60}%`}}))`
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
`,Jd=n=>{const{problemInfo:i,isTierHidden:l,width:u,onHover:d}=n,{problemId:p,title:g,tier:y}=i,{rotateX:v,rotateY:E,adjustCardTweak:S,resetCardTweak:R}=Gy();return c.jsx(Py,{children:c.jsx(By,{$width:u,$tier:y,$isTierHidden:l,$rotateX:v,$rotateY:E,onMouseMove:S,onMouseOut:R,onMouseOver:d,children:c.jsxs($y,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${p}`,"aria-label":`문제 번호 ${p}번 ${g}`,$cardWidth:u,children:[c.jsx(Uy,{$cardWidth:u,src:l?qa.hidden:Nn[y],alt:"",draggable:!1}),c.jsx(Fy,{$cardWidth:u,$tier:y,$isTierHidden:l,children:`#${p}`}),c.jsx(Vy,{$cardWidth:u,children:g}),c.jsx(Yy,{$movement:v+E})]})})})},mo=120,Ga=1/1.36,Wy=(n,i,l)=>{const{rowCount:u,columnCount:d,cardGridGap:p,cardWidth:g,innerGridWidth:y,innerGridHeight:v,isOverflow:E}=Zy(n,i,l);if(E)return{cardWidth:g,cardGridGap:p,innerGridWidth:y,innerGridHeight:v,isOverflow:E};const S=qy(u,d,l);return{cardWidth:g,cardGridGap:p,rowCardCounts:S,isOverflow:E}},Zy=(n,i,l)=>{let u={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let C=1;C<=l;C+=1){const D=Math.ceil(l/C),{cardWidth:M,cardGridGap:G,isOverflow:P}=Qy(n,i,D,C);!P&&M>u.cardWidth&&(u={rowCount:D,columnCount:C,cardWidth:M,cardGridGap:G,isOverflow:P})}if(u.isOverflow){const C=Math.max(1,Math.floor((n-mo/10)/(mo*1.1)));u={rowCount:Math.ceil(l/C),columnCount:C,cardWidth:mo,cardGridGap:mo/10,isOverflow:!0}}const{rowCount:d,columnCount:p,cardWidth:g,cardGridGap:y,isOverflow:v}=u,E=g/Ga,S=p*g+(p+1)*y,R=d*E+(d+1)*y;return{rowCount:d,columnCount:p,cardWidth:g,cardGridGap:y,innerGridWidth:S,innerGridHeight:R,isOverflow:v}},Qy=(n,i,l,u)=>{const d=n*10/(11*u+1),p=i/(l*(1/Ga+.1)+.1),g=Math.max(mo,Math.min(d,p)-1),y=g/10,v=g/Ga,E=u*g+(u+1)*y,S=l*v+(l+1)*y,R=E>n||S>i;return{cardWidth:g,cardGridGap:g/10,isOverflow:R}},qy=(n,i,l)=>{const u=Array.from({length:n}).map(()=>i),d=n*i-l;for(let p=0;p<d;p+=1)u[n-p%n-1]-=1;return u},Ky=n=>{const{cardCount:i}=n,[l,u]=T.useState(i),[d,p]=T.useState(0),[g,y]=T.useState(0),[v,E]=T.useState(!1),S=T.useRef(null);return T.useEffect(()=>{u(l)},[i]),T.useLayoutEffect(()=>{const R=S.current;if(!R)return;const C=()=>{const{clientWidth:M,clientHeight:G}=R;p(M),y(G),E(!0)},D=new ResizeObserver(()=>{C()});return D.observe(S.current),()=>{D.disconnect()}},[]),{...Wy(d,g,l),isLoaded:v,cardGridRef:S}},Xy=n=>{const{problemInfos:i,isTierHidden:l,onCardHover:u}=n,d=i.length,p=Ky({cardCount:d}),{cardWidth:g,cardGridGap:y,isOverflow:v,isLoaded:E,cardGridRef:S}=p;let R=0;return c.jsx(Ly,{ref:S,$visible:E,$overflowY:v?"auto":"visible",children:v?c.jsx(Oy,{$width:p.innerGridWidth,$height:p.innerGridHeight,$gap:y,children:i.map(C=>c.jsx(Jd,{width:g,problemInfo:C,isTierHidden:![0,31].includes(C.tier)&&l,onHover:u},C.problemId))}):c.jsx(_y,{$gap:y,children:p.rowCardCounts.map((C,D)=>c.jsx(by,{$gap:y,children:Array.from({length:C}).map(()=>{if(!i[R])return null;const M=i[R];return R+=1,c.jsx(Jd,{width:g,problemInfo:M,isTierHidden:![0,31].includes(M.tier)&&l,onHover:u},M.problemId)})},D))})})},Jy=n=>{if(!(Le(n)&&"success"in n&&typeof n.success=="boolean"))return!1;const{success:i}=n;if(i)return"problemInfos"in n&&t5(n.problemInfos);if("statusCode"in n&&typeof n.statusCode!="number"||!("errorMessage"in n)||typeof n.errorMessage!="string")return!1;if(!("errorDescriptions"in n))return!0;const{errorDescriptions:l}=n;return typeof l=="string"||Array.isArray(l)&&l.every(u=>typeof u=="string")},e5=n=>Le(n)&&"problemId"in n&&"title"in n&&"tier"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&Ka(n.tier),t5=n=>Array.isArray(n)&&n.every(i=>e5(i)),n5=["bronze","silver","gold","platinum","diamond","ruby"],r5=n=>{if(n.length===0)throw Error("프리뷰 카드 랭크 계산을 위해서는 최소 1문제의 정보가 제공되어야 합니다.");if(n.length===1){const y=n[0].tier;return[Bi(y)]}if(n.length===2){const y=n[0].tier,v=n[1].tier;return[Bi(y),Bi(v)]}const i={unrated:0,bronze:0,silver:0,gold:0,platinum:0,diamond:0,ruby:0};n.forEach(({tier:y})=>{i[Bi(y)]+=1});const l=Object.entries(i).sort((y,v)=>v[1]-y[1]);if(!o5(l))throw Error("프리뷰 카드 랭크 계산 중 데이터 불일치를 발견했습니다.");const[u,d]=l[0],p=l[1][0],g=l[2][0];return d===n.length?[u,u,u]:d*2>n.length?[u,u,p]:[u,p,g]},Bi=n=>n===0||n===31?"unrated":n5[Math.floor((n-1)/5)],o5=n=>n.every(([i])=>r4(i)),i5=n=>{const i=n.reduce((d,p)=>d+p.probability,0);if(Math.abs(i-1)>1e-6)throw new Error(`확률의 합은 1이어야 하는데, 실제 확률의 합이 ${i}였습니다.`);const l=Math.random();let u=0;for(const{choice:d,probability:p}of n)if(u+=p,l<=u)return d;throw new Error("잘못된 확률 정보를 사용하셨습니다. 다시 확인해 주세요.")},l5=(n,i)=>Math.floor(Math.random()*(i-n+1))+n,s5="/assets/card-slide-1-BWULmWDl.wav",a5="/assets/card-slide-2-DSpetA15.wav",c5="/assets/card-slide-3-DsJdFER7.wav",u5="/assets/card-slide-4-2Wc5wS26.wav",d5="/assets/gacha-COr4DCSI.mp3",f5=[s5,a5,c5,u5],T1=n=>Le(n)&&"isTierHidden"in n&&"isAudioMuted"in n&&typeof n.isTierHidden=="boolean"&&typeof n.isAudioMuted=="boolean",p5="🎲",h5="✅",g5="📜",m5=(n,i)=>{const l=i.map(({problemId:u,title:d})=>`- ${u}번 - ${d} (https://acmicpc.net/problem/${u})`).join(`
`);return`
# 추첨 결과 ${p5}

## 추첨 정보 ${h5}

- 추첨 이름: ${n}
- 문제 수: ${i.length}

## 문제 목록 ${g5}
${l}
`.trim()},v5=[{choice:"black",probability:.24975},{choice:"red",probability:.24975},{choice:"green",probability:.24975},{choice:"blue",probability:.24975},{choice:"gold",probability:.001}],x5=f5.map(n=>new Audio(n)),y5=n=>{const{open:i,slot:l,problemCount:u}=n,[d,p]=T.useState("loading"),[g,y]=T.useState([]),[v,E]=T.useState("black"),[S,R]=T.useState(""),[C,D]=T.useState([]),[M,G]=T.useState(!1),[P,te]=T.useState(!0),[Z,Q]=T.useState(""),[U,ne]=T.useState(!0),[q,Y]=T.useState(!1),[xe,ze]=T.useState(!1),Oe=T.useRef(new Audio(d5)),Qe=g.length>0?r5(g):["unrated"],qe=T.useCallback(async()=>{const ee=await Ae.runtime.sendMessage({command:go.GET_RANDOM_DEFENSE_RESULT,query:l.query,problemCount:u});if(!Jy(ee)){R("API로부터 불러온 데이터에서 데이터 불일치가 발견되었습니다."),D("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}if(!ee.success){const{errorMessage:ae,errorDescriptions:ue}=ee;R(ae),D(ue??[]),p("error");return}const re=ee.problemInfos;y(re),p("ready")},[l,u]),He=T.useCallback(async()=>{const ee=await Ae.runtime.sendMessage({command:go.FETCH_GACHA_OPTIONS});if(!T1(ee)){R("설정 데이터에서 불일치가 발견되었습니다."),D("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}const{isTierHidden:re,isAudioMuted:ae}=ee;G(re),te(ae),ze(!0),Oe.current.muted=ae},[]),Ke=()=>{p("loading"),Y(!1),E(i5(v5)),qe()},it=()=>{G(ee=>!ee)},pe=()=>{te(ee=>{const re=!ee;return Oe.current.muted=re,re})},ce=()=>{P||x5[l5(0,3)].play()},z=()=>{V(),Oe.current.play()},V=()=>{Oe.current.pause(),Oe.current.currentTime=0},$=()=>{navigator.clipboard.writeText(m5(l.title,g)),Q("문제 목록을 클립보드에 복사했어요!"),ne(!1),setTimeout(()=>ne(!0))},w=()=>{p("showingResult"),Q("")},j=()=>{const ee=new Date().toISOString(),re=g.map(ae=>({...ae,createdAt:ee})).reverse();Ae.runtime.sendMessage({command:go.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:re}),Y(!0),Q("문제 목록을 추첨 기록에 저장했어요!"),ne(!1),setTimeout(()=>ne(!0))};return T.useEffect(()=>{i&&Ke()},[i,l,u]),T.useEffect(()=>{He()},[]),T.useEffect(()=>{xe&&Ae.runtime.sendMessage({command:go.SAVE_GACHA_OPTIONS,isTierHidden:M,isAudioMuted:P})},[xe,M,P]),{gachaStatus:d,problemInfos:g,cardBoxColor:v,previewCardRanks:Qe,errorMessage:S,errorDescriptions:C,isTierHidden:M,isAudioMuted:P,notificationMessage:Z,shouldNotificationFadeOut:U,isSavedToHistory:q,restartGacha:Ke,toggleIsTierHidden:it,toggleIsAudioMuted:pe,playCardSlideAudio:ce,playGachaAudio:z,stopGachaAudio:V,copyProblemInfosMarkdownToClipboard:$,showResultScreenAndResetNotificationMessage:w,saveGachaResultToStorage:j}},A5=gt`
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
`,w5=h.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${A5} 2s forwards;
  }
`,S5=h.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,T5=h.div`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 600;
`,E5=n=>{const{children:i,shouldFadeOut:l}=n;return c.jsxs(w5,{className:l?"fading":"",children:[i!==""&&c.jsx(S5,{children:c.jsx(Ro,{})}),c.jsx(T5,{children:i})]})},N5=n=>{const{open:i,theme:l="totamjung",slot:u,problemCount:d,portalTarget:p,onClose:g}=n,{gachaStatus:y,problemInfos:v,cardBoxColor:E,previewCardRanks:S,errorMessage:R,errorDescriptions:C,isTierHidden:D,isAudioMuted:M,isSavedToHistory:G,notificationMessage:P,shouldNotificationFadeOut:te,restartGacha:Z,toggleIsTierHidden:Q,toggleIsAudioMuted:U,playCardSlideAudio:ne,playGachaAudio:q,stopGachaAudio:Y,copyProblemInfosMarkdownToClipboard:xe,showResultScreenAndResetNotificationMessage:ze,saveGachaResultToStorage:Oe}=y5({open:i,slot:u,problemCount:d});return c.jsx(Wn,{title:"즉석 추첨",open:i,theme:l,padding:"0",closeOnBackdropClick:!1,portalTarget:p,onClose:()=>{Y(),g()},children:c.jsxs(Dx,{children:[y==="loading"&&c.jsx($x,{children:c.jsx(xa,{children:c.jsxs(Xd,{children:[c.jsx(Ux,{children:c.jsx(B2,{})}),c.jsx(Fx,{children:"잠시만 기다려주세요..."})]})})}),y==="ready"&&c.jsxs(Vx,{children:[c.jsx(Yx,{children:c.jsx(Dy,{color:E,isTierHidden:D,cardRanks:S,onFirstClick:q,onOpenAnimationEnd:ze})}),c.jsx(xa,{children:c.jsxs(Xd,{children:[c.jsx(Wx,{children:c.jsx(xg,{})}),c.jsx(Zx,{children:"카드 상자를 클릭하면 결과를 확인할 수 있습니다"})]})})]}),y==="error"&&c.jsxs(_x,{children:[c.jsx(bx,{children:c.jsxs(Gx,{children:[c.jsxs(zx,{children:[c.jsx(Hx,{children:c.jsx(P2,{})}),c.jsx(Px,{children:R})]}),c.jsx(Bx,{children:typeof C=="string"?c.jsx(Kd,{children:C}):C.map(Qe=>c.jsx(Kd,{children:Qe},Qe))})]})}),c.jsx(xa,{children:c.jsx(Ce,{type:"button",name:"다시 시도하기",size:"large",color:H.color.LIGHT_RED,iconSrc:c.jsx(vg,{}),disabled:!1,ariaLabel:"다시 시도하기",onClick:Z})})]}),y==="showingResult"&&c.jsxs(Qx,{children:[c.jsx(qx,{children:c.jsx(Xy,{problemInfos:v,onCardHover:ne,isTierHidden:D})}),c.jsx(Kx,{children:c.jsx(E5,{shouldFadeOut:te,children:P})}),c.jsxs(Xx,{children:[c.jsx(Ce,{type:"button",name:"문제 목록 복사",size:"large",color:H.color.LIGHT_GRAY,iconSrc:c.jsx(H2,{}),disabled:!1,ariaLabel:"문제 목록 복사",onClick:xe}),c.jsx(Ce,{type:"button",name:"추첨 기록 저장",size:"large",color:H.color.LEMON,iconSrc:G?c.jsx(Ro,{}):c.jsx(yg,{}),disabled:G,ariaLabel:"추첨 기록 저장",onClick:Oe}),c.jsx(Ce,{type:"button",name:"다시 추첨하기!",size:"large",color:H.color.ORANGE,iconSrc:c.jsx(F2,{}),disabled:!1,ariaLabel:"다시 추첨하기!",onClick:Z})]})]}),c.jsxs(Qd,{$align:"left",children:[c.jsx(Lx,{onClick:Q,"aria-label":D?"문제 난이도 보이기":"문제 난이도 감추기",children:D?c.jsx("img",{src:Y2,alt:"",draggable:!1}):c.jsx("img",{src:Bg,alt:"",draggable:!1})}),c.jsx(qd,{children:`티어 숨기기: ${D?"ON":"OFF"}`})]}),c.jsxs(Qd,{$align:"right",children:[c.jsx(qd,{children:`효과음: ${M?"OFF":"ON"}`}),c.jsx(Ox,{onClick:U,"aria-label":M?"효과음 켜기":"효과음 끄기",children:M?c.jsx(wg,{}):c.jsx(Ag,{})})]})]})})},R5=/^#([0-9a-f]{6})$/,za=(n,i)=>{if(!R5.test(n))throw new Error("잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.");if(isNaN(i)||i<0||i>1)throw new Error("투명도는 반드시 0 이상 1 이하의 수여야 합니다.");const l=parseInt(n.slice(1,3),16),u=parseInt(n.slice(3,5),16),d=parseInt(n.slice(5,7),16),p=Math.round(i*255).toString(16).padStart(2,"0");return`#${[l,u,d].map(g=>g.toString(16).padStart(2,"0")).join("")}${p}`},E1={none:H.color.LIGHT_GRAY,totamjung:H.color.LIGHTER_BROWN,bojExtendedDark:H.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:H.bojExtendedColor.SKY_BLUE,solvedAcLight:H.color.LIGHT_GRAY,solvedAcDark:H.color.LIGHT_GRAY,solvedAcBlack:H.color.LIGHT_GRAY},e2={...E1,totamjung:H.color.LEMON},I5={none:H.color.WHITE,totamjung:H.color.DARK_BROWN,bojExtendedDark:H.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:H.bojExtendedColor.DARK_INDIGO,solvedAcLight:H.color.WHITE,solvedAcDark:H.solvedAcColor.DARK_INDIGO,solvedAcBlack:H.color.BLACK},k5=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,C5=h.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid
    ${({$totamjungTheme:n})=>E1[n]};
  border-radius: 5.666px;
  background-color: ${({$totamjungTheme:n})=>I5[n]};

  color: ${({theme:n,$totamjungTheme:i})=>tc.includes(i)?n.color.BLACK:n.color.WHITE};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({$totamjungTheme:n})=>e2[n]};
    outline: 3px solid
      ${({$totamjungTheme:n})=>za(e2[n],.5)};
  }

  transition: outline 0.05s;
`,wa=h.p`
  font-family: Pretendard;
  font-size: ${({$fontSize:n})=>n};
  text-align: ${({$textAlign:n})=>n};
  color: ${({theme:n,$totamjungTheme:i,$isTransparent:l})=>{const u=l?.6:1;return tc.includes(i)?za(n.color.BLACK,u):za(n.color.WHITE,u)}};
`,j5=/^\d+$/,M5=()=>{const[n,i]=T.useState("5"),l=d=>{const p=d.target.value;p.length>=3||i(p)},u=j5.test(n)&&Number(n)>=1&&Number(n)<=el;return{inputValue:n,updateInputValue:l,isInputValueValid:u}},tc=["none","solvedAcLight"],D5=n=>{const{open:i,theme:l="totamjung",portalTarget:u,shouldShowHotkeyMessage:d,onClose:p,onSubmitProblemCount:g}=n,{inputValue:y,updateInputValue:v,isInputValueValid:E}=M5();return c.jsxs(Wn,{title:"즉석 추첨",theme:l,portalTarget:u,open:i,onClose:p,children:[c.jsxs(k5,{children:[c.jsx(wa,{$totamjungTheme:l,$fontSize:"16px",$textAlign:"left",children:"추첨을 진행할 문제 수를 입력해 주세요."}),c.jsx(C5,{type:"number",min:1,max:el,value:y,$totamjungTheme:l,onChange:v,autoFocus:!0}),c.jsx(wa,{$totamjungTheme:l,$fontSize:"14px",$textAlign:"right",children:`1문제 이상, ${el}문제 이하`}),d&&c.jsx(wa,{$totamjungTheme:l,$fontSize:"16px",$textAlign:"left",$isTransparent:!0,children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),c.jsx(Io,{theme:l,children:c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(No,{}),color:tc.includes(l)?H.color.DARK_GRAY:H.color.GOLD,disabled:!E,ariaLabel:"확인",onClick:()=>g(Number(y))})})]})},L5=n=>{const{isLoaded:i}=n,{activeModalName:l,openModal:u,closeModal:d}=al(),{slot:p,selectedSlotNo:g,hotkey:y,occupiedSlotNos:v,shouldEditModalShow:E,gachaProblemCount:S,setSelectedSlotNo:R,switchHotkey:C,openEditModal:D,closeEditModal:M,updateSlot:G,deleteSlot:P,setGachaProblemCount:te}=xx(n);return c.jsxs(ec,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[i?c.jsxs(qv,{children:[c.jsxs(Kv,{children:[c.jsx(rx,{selectedSlotNo:g,occupiedSlotNos:v,onChange:R}),c.jsx(mx,{selectedSlotNo:g,hotkey:y,onClick:C})]}),c.jsx(dx,{...p}),c.jsxs(Xv,{children:[c.jsx(Ce,{type:"button",name:"쿼리 복사",size:"medium",color:H.color.LIGHT_GRAY,iconSrc:c.jsx(H2,{}),disabled:p.isEmpty,ariaLabel:"쿼리 클립보드에 복사하기",onClick:()=>{p.isEmpty||(navigator.clipboard.writeText(p.query),u("copiedQuery"))}}),c.jsx(Ce,{type:"button",name:"수정",size:"medium",color:H.color.SKY_BLUE,iconSrc:c.jsx(cg,{}),disabled:p.isEmpty,ariaLabel:"슬롯 수정하기",onClick:D}),c.jsx(Ce,{type:"button",name:"삭제",size:"medium",color:H.color.RED,iconSrc:c.jsx(sl,{}),disabled:p.isEmpty,ariaLabel:"슬롯 삭제하기",onClick:()=>{u("confirmDeleteSlot")}}),c.jsx(Ce,{type:"button",name:"즉석 추첨",size:"medium",color:H.color.PURPLE,iconSrc:c.jsx(F2,{}),disabled:p.isEmpty,ariaLabel:"즉석 추첨 진행",onClick:()=>{u("gachaProblemCount")}})]})]}):c.jsx(Rx,{}),c.jsx(Tx,{title:p.isEmpty?"":p.title,query:p.isEmpty?"":p.query,open:E,onClose:M,onSlotChange:G}),c.jsx(en,{actionType:"confirm",width:"350px",height:"auto",open:l==="copiedQuery",onClose:d,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),c.jsx(en,{actionType:"yesNo",width:"350px",height:"auto",open:l==="confirmDeleteSlot",onYesSelect:()=>{P(),d()},onNoSelect:d,title:"추첨 삭제 확인",message:`${g}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`}),c.jsx(D5,{open:l==="gachaProblemCount",shouldShowHotkeyMessage:!0,onClose:d,onSubmitProblemCount:Z=>{te(Z),u("gacha")}}),!p.isEmpty&&c.jsx(N5,{open:l==="gacha",slot:p,problemCount:S,onClose:d})]})},O5=n=>n===null||n==="Alt"||n==="F2",nc=n=>!Le(n)||!("isEmpty"in n)||typeof n.isEmpty!="boolean"?!1:n.isEmpty?!0:"title"in n&&"query"in n&&typeof n.title=="string"&&typeof n.query=="string",rc=n=>typeof n!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(n),_5=n=>{if(!(Le(n)&&"selectedNo"in n&&typeof n.selectedNo=="number"))return!1;const{selectedNo:i,...l}=n;return!(i%1===0&&i>=0&&i<=9)||!s1(l)?!1:Array.from({length:10}).every((u,d)=>d in l&&nc(l[d]))},oc=n=>{if(!(Le(n)&&"hotkey"in n&&"selectedSlotNo"in n&&"slots"in n&&typeof n.hotkey=="string"&&["Alt","F2"].includes(n.hotkey)&&rc(n.selectedSlotNo)))return!1;const{slots:i}=n;return s1(i)?Array.from({length:10}).every((l,u)=>u in i&&nc(i[u])):!1},b5=n=>Le(n)&&Array.from({length:10}).every((i,l)=>l in n),N1=n=>{if(!Le(n)||!("slots"in n))return!1;const{slots:i}=n;return Le(i)&&Array.from({length:10}).every((l,u)=>u in i)},R1=[1,2,3,4,5,6,7,8,9,0],I1=(n,i)=>nc(n)?n.isEmpty?{isEmpty:!0}:n.query.trim()===""||n.query.length>tn?{isEmpty:!0}:n.title.trim()===""||n.title.length>To?{...n,isEmpty:!1,title:`추첨 ${i}`}:n:{isEmpty:!0},ic=n=>{if(!N1(n))return _a;const i="hotkey"in n&&O5(n.hotkey)?n.hotkey:"Alt",l="selectedSlotNo"in n&&rc(n.selectedSlotNo)?n.selectedSlotNo:1,u={...n,hotkey:i,selectedSlotNo:l};return R1.forEach(d=>{const p=u.slots[d];u.slots[d]=I1(p,d)}),oc(u)?u:_a},G5=n=>{if(!b5(n))return Dd;const{selectedNo:i,...l}=n,u=rc(i)?n.selectedNo:1,d={...l,selectedNo:u};return R1.forEach(p=>{const g=d[p];d[p]=I1(g,p)}),_5(d)?d:Dd},z5=async()=>{const i=(await Ae.storage.local.get(B.QUICK_SLOTS))[B.QUICK_SLOTS];return ic(i)},H5=(n,i,l)=>{const u={selectedSlotNo:n,slots:i,hotkey:l};if(!N1(u))return;const d=ic(u);Ae.storage.local.set({[B.QUICK_SLOTS]:d})},P5={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},B5=()=>{const[n,i]=T.useState(P5),[l,u]=T.useState(1),[d,p]=T.useState("Alt"),[g,y]=T.useState(!1);return T.useEffect(()=>{(async()=>{const{slots:S,selectedSlotNo:R,hotkey:C}=await z5();i(S),u(R),p(C),y(!0)})()},[]),T.useEffect(()=>{g&&H5(l,n,d)},[l,n,d]),{slots:n,selectedSlotNo:l,hotkey:d,isLoaded:g,setSelectedSlotNo:u,setHotkey:p,updateSlot:(S,R)=>{i(C=>({...C,[l]:{isEmpty:!1,title:S,query:R}}))},deleteSlot:()=>{i(S=>({...S,[l]:{isEmpty:!0}}))}}},$5=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,lc=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,t2=(n,i,l,u)=>i?le`
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
  `,U5=h.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:n,$isHidden:i,theme:l})=>t2(n,i,!1,l)};

  &:hover {
    ${({$tier:n,$isHidden:i,theme:l})=>t2(n,i,!0,l)};
  }
`,F5=h.a`
  display: flex;
  align-items: center;
`,V5=h.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:n,$isHidden:i,theme:l})=>lc(n,i,l)};
  }
`,Y5=h.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,W5=h.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,Z5=h.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:n,$isHidden:i,theme:l})=>lc(n,i,l)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,Q5=h.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,q5=h.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:n,$isHidden:i,theme:l})=>lc(n,i,l)};
`,K5=h.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.WHITE};
  }
`,X5=h.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:n})=>n.color.WHITE};
`,k1=n=>{const i=String(n.getFullYear()).padStart(4,"0"),l=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0"),d=String(n.getHours()).padStart(2,"0"),p=String(n.getMinutes()).padStart(2,"0"),g=String(n.getSeconds()).padStart(2,"0");return`${i}-${l}-${u} ${d}:${p}:${g}`},J5=n=>{const{problemId:i,title:l,tier:u,createdAt:d,isHidden:p,onDelete:g}=n;return c.jsxs(U5,{$tier:u,$isHidden:p,children:[c.jsxs(F5,{href:`https://icpc.me/${i}`,target:"__blank","aria-label":`${i}번 ${l} 문제`,children:[c.jsx(Y5,{src:p?qa.hidden:Nn[u],alt:"",draggable:!1}),c.jsxs(W5,{children:[c.jsx(Z5,{$tier:u,$isHidden:p,children:l}),c.jsxs(Q5,{children:[c.jsx(q5,{$tier:u,$isHidden:p,children:`#${i}`}),c.jsxs(K5,{children:[c.jsx(rg,{}),c.jsx(X5,{children:k1(new Date(d))})]})]})]})]}),c.jsx(V5,{$tier:u,$isHidden:p,onClick:g,"aria-label":"추첨 기록에서 제거하기",children:c.jsx(sl,{})})]})},e7=n=>{const{items:i,isHidden:l,onDelete:u}=n;return c.jsx($5,{children:i.map(d=>{const p=`${d.problemId}-${d.createdAt}`,g=![0,31].includes(d.tier)&&l;return c.jsx(J5,{isHidden:g,onDelete:()=>{u(p)},...d},p)})})},C1=n=>Le(n)&&"no"in n&&"title"in n&&"tier"in n&&"date"in n&&typeof n.no=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&typeof n.date=="string"&&n.tier in Nn,sc=n=>Le(n)&&"problemId"in n&&"title"in n&&"tier"in n&&"createdAt"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&n.tier in Nn&&cl(n.createdAt),j1=n=>Array.isArray(n)&&n.every(i=>sc(i)),t7=n=>{if(!cl(n))return!1;const[i,l,u,d,p,g,y]=n.split(/[-:.TZ]/).map(Number);return i>=1&&i<=9999&&l>=1&&l<=12&&u>=1&&u<=31&&d>=0&&d<=23&&p>=0&&p<=59&&g>=0&&g<=59&&y>=0&&y<=999},n7=n=>!isNaN(Number(new Date(n))),r7=n=>sc(n)&&n.problemId%1===0&&n.problemId>=v1&&n.problemId<=x1&&n.title.length<=y1&&t7(n.createdAt)&&n.tier%1===0&&n.tier>=m1&&n.tier<=mv,o7=n=>C1(n)&&n.no%1===0&&n.no>=v1&&n.no<=x1&&n.title.length<=y1&&n7(n.date)&&n.tier%1===0&&n.tier>=m1&&n.tier<=gv,i7=n=>[...n].sort((i,l)=>new Date(i.date).getTime()>new Date(l.date).getTime()?-1:1),l7=n=>[...n].sort((i,l)=>i.createdAt>l.createdAt?-1:1),ac=n=>{if(!Array.isArray(n))return Za;const i=[];return n.forEach(l=>{sc(l)&&r7(l)&&i.push(l)}),l7(i).slice(0,So)},s7=n=>{if(!Array.isArray(n))return Za;const i=[];return n.forEach(l=>{C1(l)&&o7(l)&&i.push(l)}),i7(i).slice(0,So)},cc=n=>typeof n=="boolean"?n:X2,a7=async()=>{const n=await Ae.storage.local.get([B.RANDOM_DEFENSE_HISTORY,B.IS_TIER_HIDDEN]),i=n[B.RANDOM_DEFENSE_HISTORY],l=n[B.IS_TIER_HIDDEN],u=ac(i),d=cc(l);return{randomDefenseHistory:u,isHidden:d}},c7=async(n,i)=>{if(!Array.isArray(n)||typeof i!="boolean")return;const l=ac(n);Ae.storage.local.set({[B.RANDOM_DEFENSE_HISTORY]:l,[B.IS_TIER_HIDDEN]:i})},u7=()=>{const[n,i]=T.useState([]),[l,u]=T.useState(!0),[d,p]=T.useState(!1),g=n.length===0;return T.useEffect(()=>{(async()=>{const S=await a7();u(S.isHidden),i(S.randomDefenseHistory),p(!0)})()},[]),T.useEffect(()=>{d&&c7(n,l)},[n,l]),{items:n,isHidden:l,isLoaded:d,isEmpty:g,deleteHistoryById:S=>{const R=n.filter(C=>`${C.problemId}-${C.createdAt}`!==S);i(R)},clearHistory:()=>{i([])},updateIsHidden:S=>{u(S.target.checked)}}},d7=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,f7=h.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:n})=>n.color.LIGHT_BROWN};
  border-radius: 6px;
`,p7=h.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,h7=h.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,g7=h.button`
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
`,n2=h.p`
  display: inline-block;

  color: ${({theme:n})=>n.color.WHITE};
  font-size: 16px;
`,m7=h.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,v7=h.div`
  color: ${({$color:n})=>n};
  font-size: 14px;
  line-height: 20px;
`,x7=h.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,y7=h.label`
  display: inline-block;
  position: relative;

  width: ${({$size:n})=>n==="large"?"50px":"40px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:n})=>n==="large"?"15px":"12px"};
  }
`,A7=h.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,w7=h.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:n,$isChecked:i})=>i?n.color.GOLD:n.color.LIGHTER_BROWN};

  box-shadow: ${({theme:n,$isChecked:i})=>i?`0 0 12px ${n.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,S7=h.div`
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
`,T7=n=>{const{size:i,isChecked:l,ariaLabel:u,onChange:d}=n;return c.jsxs(y7,{$size:i,children:[c.jsx(A7,{checked:l,"aria-label":u,onChange:d,value:""}),c.jsx(w7,{$isChecked:l,children:c.jsx(S7,{$size:i,$isChecked:l})})]})},E7=n=>{const i=So-n,l=i>=el?"normal":i>0?"warn":"danger",p=`${`현재 ${n}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${So}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${l==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:l==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,g=l==="normal"?H.color.WHITE:l==="warn"?H.color.ORANGE:H.color.LIGHT_RED;return{indicatorMessage:p,indicatorColor:g}},N7=()=>{const{items:n,isHidden:i,isLoaded:l,isEmpty:u,deleteHistoryById:d,clearHistory:p,updateIsHidden:g}=u7(),{activeModalName:y,openModal:v,closeModal:E}=al(),{indicatorMessage:S,indicatorColor:R}=E7(n.length);return c.jsx(ec,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:c.jsxs(d7,{children:[l&&c.jsxs(c.Fragment,{children:[c.jsxs(p7,{children:[c.jsx(n2,{children:"티어 숨기기"}),c.jsx(T7,{size:"large",isChecked:i,ariaLabel:"티어 숨기기",onChange:g})]}),c.jsx(f7,{children:c.jsx(e7,{items:n,isHidden:i,onDelete:d})}),c.jsxs(h7,{children:[c.jsxs(m7,{title:S,children:[c.jsx(x7,{children:c.jsx(og,{})}),c.jsx(v7,{$color:R,children:`${n.length} / ${So}`})]}),c.jsx(n2,{children:"추첨 기록 비우기"}),c.jsx(g7,{onClick:()=>{v("confirmClearHistory")},disabled:u,"aria-label":"추첨 기록 비우기",children:c.jsx(sl,{})})]})]}),c.jsx(en,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:y==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{p(),E()},onNoSelect:E})]})})},R7=h.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,I7=h.div`
  display: flex;
  column-gap: 12px;
`,k7=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,C7=n=>{const{slots:i,selectedSlotNo:l,hotkey:u,isLoaded:d,setSelectedSlotNo:p,setHotkey:g,updateSlot:y,deleteSlot:v}=B5(),{show:E}=n,S={slots:i,selectedSlotNo:l,hotkey:u};return E?c.jsxs(R7,{children:[c.jsx(En,{title:"랜덤 디펜스",iconSrc:Ae.runtime.getURL("/dice.png")}),c.jsxs(I7,{children:[c.jsxs(k7,{children:[c.jsx(Qv,{isLoaded:d,selectedSlotNo:l,onSubmit:y}),c.jsx(L5,{quickSlotsInfo:S,isLoaded:d,onHotkeyChange:g,onSlotChange:y,onSlotDelete:v,onSlotNoChange:p})]}),c.jsx(N7,{})]})]}):null},j7=h.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;h.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const ul=n=>n==="none"||n==="totamjung",M1=n=>n==="totamjung"?"totamjung":"none",M7=async()=>{const i=(await Ae.storage.local.get(B.TOTAMJUNG_THEME))[B.TOTAMJUNG_THEME];return M1(i)},D7=n=>{ul(n)&&Ae.storage.local.set({[B.TOTAMJUNG_THEME]:n})},D1=n=>typeof n=="number"&&!isNaN(n)&&n%1===0?n:0,L7=/^(none|font-\d{1,2})$/,O7=n=>typeof n=="string"&&L7.test(n),uc=n=>typeof n=="number"&&!isNaN(n)&&n%1===0,_7=async()=>{const i=(await Ae.storage.local.get(B.FONT_NO))[B.FONT_NO];return D1(i)},b7=n=>{uc(n)&&Ae.storage.local.set({[B.FONT_NO]:n})},G7=()=>{const[n,i]=T.useState(void 0),[l,u]=T.useState(void 0),[d,p]=T.useState(!1);return T.useEffect(()=>{(async()=>{const[E,S]=await Promise.all([M7(),_7()]);i(E),u(S),p(!0)})()},[]),T.useEffect(()=>{d&&D7(n)},[n]),T.useEffect(()=>{d&&b7(l)},[l]),{totamjungTheme:n,fontNo:l,isLoaded:d,updateTotamjungTheme:v=>{d&&ul(v)&&i(v)},updateFontNo:v=>{const E=Number(v);!d||isNaN(E)||u(E)}}},z7=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,H7=h.p`
  color: ${({theme:n})=>n.color.LEMON};
  font-size: ${({$fontSize:n})=>n};
  font-family: ${({$fontFamily:n})=>n};
`,P7=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],B7=()=>{const{totamjungTheme:n,fontNo:i,updateTotamjungTheme:l,updateFontNo:u}=G7();return c.jsxs(z7,{children:[c.jsx(En,{title:"테마 설정",iconSrc:Ae.runtime.getURL("/palette.png")}),c.jsx(Pn,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:n??"",onChange:l}),c.jsx(En,{title:"폰트 설정",iconSrc:c.jsx(dg,{})}),c.jsx(Pn,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:P7.map(({name:d,fontFamily:p,fontSize:g},y)=>({label:c.jsx(H7,{$fontFamily:p,$fontSize:g??"16px",children:d}),value:String(y)})),checkedValue:i===void 0?"":String(i),onChange:u})]})},$7=h.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,L1=n=>{const{confirmText:i}=n,[l,u]=T.useState(""),[d,p]=T.useState(i);return T.useEffect(()=>{p(d)},[i]),{inputValue:l,isSameWithConfirmText:l===d,updateInputValue:v=>{u(v.target.value)}}},U7=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,F7=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Sa=h.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,V7=h.div`
  display: flex;
  justify-content: center;
`,Ta="초기화에 동의합니다",Y7=n=>{const{open:i,onClose:l,onReset:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:g}=L1({confirmText:Ta});return c.jsxs(Wn,{title:"데이터 초기화",open:i,onClose:l,children:[c.jsxs(U7,{children:[c.jsx(Te,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(F7,{children:[c.jsx(Sa,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),c.jsx(Sa,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Sa,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(Te,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:Ta}),"를 입력해 주십시오."]}),c.jsx(V7,{children:c.jsx(Un,{type:"text",width:"300px",value:d,textAlign:"center",placeholder:`"${Ta}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:g})})]}),c.jsxs(Io,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Eo,{}),color:H.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:l}),c.jsx(Ce,{type:"button",name:"초기화",size:"medium",iconSrc:c.jsx(sl,{}),color:H.color.RED,disabled:!p,ariaLabel:"초기화",onClick:u})]})]})},W7=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,Z7=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Ea=h.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,Q7=h.div`
  display: flex;
  justify-content: center;
`,Na="숙지했습니다",q7=n=>{const{open:i,onClose:l,onUpload:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:g}=L1({confirmText:Na});return c.jsxs(Wn,{title:"데이터 업로드",open:i,onClose:l,children:[c.jsxs(W7,{children:[c.jsx(Te,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(Z7,{children:[c.jsx(Ea,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),c.jsx(Ea,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Ea,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(Te,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:Na}),"를 입력해 주십시오."]}),c.jsx(Q7,{children:c.jsx(Un,{type:"text",width:"300px",value:d,textAlign:"center",placeholder:`"${Na}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:g})})]}),c.jsxs(Io,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Eo,{}),color:H.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:l}),c.jsx(Ce,{type:"button",name:"업로드",size:"medium",iconSrc:c.jsx(U2,{}),color:H.color.LIME,disabled:!p,ariaLabel:"업로드",onClick:u})]})]})},O1=n=>Array.isArray(n)?Array.isArray(n)&&n.every(i=>dc(i)):!1,dc=n=>Le(n)&&"problemId"in n&&"expiresAt"in n&&typeof n.problemId=="number"&&cl(n.expiresAt)&&!isNaN(n.problemId)&&n.problemId%1===0&&n.problemId>=1e3,K7=n=>{if(!Array.isArray(n))return J2;const i=Date.now();return n.filter(l=>dc(l)&&i<Date.parse(l.expiresAt)).slice(-300)},X7=n=>typeof n=="boolean",_1=n=>Le(n)&&Ee.DATA_VERSION in n&&Ee.CHECKED_ALGORITHM_IDS in n&&Ee.QUICK_SLOTS in n&&Ee.TOTAMJUNG_THEME in n&&Ee.HIDER_OPTIONS in n&&Ee.RANDOM_DEFENSE_HISTORY in n&&Ee.IS_TIER_HIDDEN in n&&Ee.FONT_NO in n&&Ee.TIMERS in n?(n[B.DATA_VERSION]==="v1.2"||n[B.DATA_VERSION]===2)&&Ya(n[B.CHECKED_ALGORITHM_IDS])&&oc(n[B.QUICK_SLOTS])&&ul(n[B.TOTAMJUNG_THEME])&&Xa(n[B.HIDER_OPTIONS])&&j1(n[B.RANDOM_DEFENSE_HISTORY])&&typeof n[B.IS_TIER_HIDDEN]=="boolean"&&uc(n[B.FONT_NO])&&O1(n[B.TIMERS]):!1,b1=n=>Le(n)&&B.DATA_VERSION in n&&B.CHECKED_ALGORITHM_IDS in n&&B.QUICK_SLOTS in n&&B.TOTAMJUNG_THEME in n&&B.HIDER_OPTIONS in n&&B.RANDOM_DEFENSE_HISTORY in n&&B.IS_TIER_HIDDEN in n&&B.FONT_NO in n&&B.TIMERS in n&&B.GACHA_OPTIONS in n&&B.SHOULD_SHOW_WELCOME_MESSAGE in n?n[B.DATA_VERSION]===3&&Ya(n[B.CHECKED_ALGORITHM_IDS])&&oc(n[B.QUICK_SLOTS])&&ul(n[B.TOTAMJUNG_THEME])&&Ja(n[B.HIDER_OPTIONS])&&j1(n[B.RANDOM_DEFENSE_HISTORY])&&typeof n[B.IS_TIER_HIDDEN]=="boolean"&&uc(n[B.FONT_NO])&&O1(n[B.TIMERS])&&T1(n[B.GACHA_OPTIONS])&&X7(n[B.SHOULD_SHOW_WELCOME_MESSAGE]):!1,J7=n=>n===!0,G1=["v1.2",2,3],e8=n=>Xa(n)?n:Wa,t8=(n,i)=>{const l=a1(n)?{hours:Number(n.hour),minutes:Number(n.minute)}:{hours:0,minutes:20},u=i4(i)?{algorithmHiderUsage:i.predict,problemTagLockUsage:i.lock==="always"?"auto":"click"}:{algorithmHiderUsage:"click",problemTagLockUsage:"click"};return{...Wa,problemTagLockDuration:l,...u}},n8=n=>({...n,shouldRevealTierOnHover:!1}),r8=n=>{if(!Le(n)||!("theme"in n))return"none";const{theme:i}=n;return i==="yes"?"totamjung":"none"},o8=n=>{const{selectedNo:i,...l}=n;return{selectedSlotNo:i,slots:l,hotkey:"Alt"}},i8=n=>{const i=[];return n.forEach(({no:l,title:u,tier:d,date:p})=>{const g=new Date(p).toISOString();cl(g)&&i.push({problemId:l,title:u,tier:d,createdAt:g})}),i},l8=n=>{if(!Le(n)||!("font"in n))return 0;const i=n.font;return!O7(i)||i==="none"?0:Number(i.split("-")[1])},s8=n=>{if(!a1(n))return[];const{expire:i,problem:l}=n,u=new Date(i);if(isNaN(u.getTime()))return[];if(l===-1)return[];const d=new Date(i).toISOString(),p={problemId:l,expiresAt:d};return dc(p)?[p]:[]},a8=(n,i)=>{const l=G5(n[Hn.QUICK_SLOTS]),u=s7(i[Pm.RANDOM_DEFENSE_HISTORY]),d=Qa(n[Hn.CHECKED_ALGORITHM_IDS]),p=cc(n[B.IS_TIER_HIDDEN]),g=r8(n[Hn.SETTINGS]),y=t8(n[Hn.TIMER],n[Hn.SETTINGS]),v=o8(l),E=i8(u),S=l8(n[Hn.SETTINGS]),R=s8(n[Hn.TIMER]);return{[Ee.CHECKED_ALGORITHM_IDS]:d,[Ee.QUICK_SLOTS]:v,[Ee.TOTAMJUNG_THEME]:g,[Ee.HIDER_OPTIONS]:y,[Ee.RANDOM_DEFENSE_HISTORY]:E,[Ee.IS_TIER_HIDDEN]:p,[Ee.FONT_NO]:S,[Ee.TIMERS]:R,[Ee.SHOULD_SHOW_WELCOME_MESSAGE]:!1,[Ee.DATA_VERSION]:2}},r2=n=>{const i=e8(n[Ee.HIDER_OPTIONS]),l=Qa(n[Ee.CHECKED_ALGORITHM_IDS]),u=ic(n[Ee.QUICK_SLOTS]),d=M1(n[Ee.TOTAMJUNG_THEME]),p=n8(i),g=ac(n[Ee.RANDOM_DEFENSE_HISTORY]),y=cc(n[B.IS_TIER_HIDDEN]),v=D1(n[Ee.FONT_NO]),E=K7(n[Ee.TIMERS]),S=J7(n[Ee.SHOULD_SHOW_WELCOME_MESSAGE]);return{[B.CHECKED_ALGORITHM_IDS]:l,[B.QUICK_SLOTS]:u,[B.TOTAMJUNG_THEME]:d,[B.HIDER_OPTIONS]:p,[B.RANDOM_DEFENSE_HISTORY]:g,[B.IS_TIER_HIDDEN]:y,[B.FONT_NO]:v,[B.TIMERS]:E,[B.GACHA_OPTIONS]:e1,[B.SHOULD_SHOW_WELCOME_MESSAGE]:S,[B.DATA_VERSION]:3}},c8=n=>{const{dataVersion:i}=n;return i===2||i==="v1.2"?2:i===3?3:1},u8=async()=>{const[n,i]=await Promise.all([Ae.storage.sync.get(),Ae.storage.local.get()]),l=c8(i);if(l!==3){if(l===1){Ae.storage.local.set(r2(a8(n,i)));return}await Ae.storage.local.set(r2(i))}},d8=async n=>{if(!Le(n)||!("dataVersion"in n))return!1;const{dataVersion:i}=n;return typeof i!="number"&&typeof i!="string"||!G1.includes(i)||(i==="v1.2"||i===2)&&!_1(n)?!1:i!==3?(await Ae.storage.local.set(n),await u8(),!0):b1(n)?(await Ae.storage.local.set(n),!0):!1},f8=async()=>(await Ae.storage.local.set(Fm),!0),p8=(n,i)=>{const l=document.createElement("a"),u=new Blob([n],{type:"text/plain"});l.href=URL.createObjectURL(u),l.download=i,l.click(),URL.revokeObjectURL(l.href)},h8=async()=>{const n=await Ae.runtime.sendMessage({command:go.FETCH_OPTIONS_DATA}),i=JSON.stringify(n),l=`totamjung_savefile_${k1(new Date).replace(" ","_")}.ttj`;p8(i,l)},g8=()=>{const[n,i]=T.useState("none"),[l,u]=T.useState(void 0),[d,p]=T.useState({errorTitle:"",errorMessage:""}),{errorTitle:g,errorMessage:y}=d,v=M=>{p(M),i("error")};return{activeModal:n,errorTitle:g,errorMessage:y,setActiveModal:i,resetOptionsData:async()=>{await f8()&&(i("none"),location.reload())},extractOptionsData:async()=>{h8(),i("none")},stageOptionsData:async M=>{const G=M.target.files;if(!G)return;const P=G[0];if(P.name.split(".").at(-1)!=="ttj"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(P.size>1048576){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const Z=new FileReader;Z.onload=async()=>{try{const Q=Z.result;if(typeof Q!="string"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const U=JSON.parse(Q),{dataVersion:ne}=U;if(!("dataVersion"in U)||ne!=="v1.2"&&typeof ne!="number"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(!G1.includes(ne)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${ne}으로, 이 버전에서 다룰 수 있는 가장 높은 데이터 버전인 3보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(["v1.2",2].includes(ne)&&!_1(U)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"v1.2.* 버전 데이터의 세이브파일은 업로드 가능하나, 이 세이브파일은 데이터의 일부 또는 전부가 손실된 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(ne===3&&!b1(U)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}u(U),i("upload")}catch{v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},Z.readAsText(P)},uploadOptionsData:async()=>{l&&(d8(l),location.reload())},closeModal:()=>{i("none")}}},m8=h.label`
  display: block;
  width: 270px;
`,v8=h.div`
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
`,x8=h.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIME};
  }
`,y8=h.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:n})=>n.color.LIME};
`,A8=h.input`
  display: none;
`,w8=n=>{const{onChange:i}=n;return c.jsxs(m8,{children:[c.jsxs(v8,{role:"button",children:[c.jsx(x8,{children:c.jsx(U2,{})}),c.jsx(y8,{children:"설정 데이터 업로드"})]}),c.jsx(A8,{type:"file",accept:".ttj",onClick:l=>{l.currentTarget.value=""},onChange:i})]})},S8=()=>{const{activeModal:n,errorTitle:i,errorMessage:l,setActiveModal:u,resetOptionsData:d,extractOptionsData:p,stageOptionsData:g,uploadOptionsData:y,closeModal:v}=g8();return c.jsxs($7,{children:[c.jsx(En,{title:"데이터 관리",iconSrc:c.jsx(fg,{})}),c.jsx(Ce,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,ariaLabel:"설정 데이터 내보내기",iconSrc:c.jsx(pg,{}),onClick:()=>{u("extract")}}),c.jsx(w8,{onChange:g}),c.jsx(Ce,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,ariaLabel:"설정 데이터 초기화",iconSrc:c.jsx(hg,{}),onClick:()=>{u("reset")}}),c.jsx(Te,{type:"normal",fontSize:"16px",children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),c.jsxs(Te,{type:"normal",fontSize:"16px",children:["토탐정 세이브파일의 확장자는 ",c.jsx("b",{children:".ttj"}),"입니다."]}),c.jsx(en,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:n==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:p,onClose:v}),c.jsx(q7,{open:n==="upload",onUpload:y,onClose:v}),c.jsx(Y7,{open:n==="reset",onReset:d,onClose:v}),c.jsx(en,{title:i,actionType:"confirm",width:"350px",height:"auto",open:n==="error",message:l,onClose:v})]})},T8=n=>{const{show:i}=n;return i?c.jsxs(j7,{children:[c.jsx(B7,{}),c.jsx(S8,{})]}):null},E8=()=>{const[n,i]=T.useState("algorithmHider");return{selectedCategory:n,setSelectedCategory:i}},N8=gt`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,R8=h.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,I8=h.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,k8=h.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,C8=h.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,j8=h.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${N8} 3s forwards infinite;
`,M8=()=>{const{selectedCategory:n,setSelectedCategory:i}=E8();return c.jsxs(R8,{children:[c.jsxs(I8,{children:[c.jsx(mm,{selectedCategory:n,onCategoryChange:i}),c.jsxs(k8,{children:[c.jsx(g4,{show:n==="algorithmHider"}),c.jsx(C7,{show:n==="randomDefense"}),c.jsx(T8,{show:n==="appearanceAndDataManage"})]})]}),c.jsx(C8,{children:c.jsx(j8,{src:Vg,alt:""})})]})};var $i={},o2;function D8(){if(o2)return $i;o2=1;var n=V2();return $i.createRoot=n.createRoot,$i.hydrateRoot=n.hydrateRoot,$i}var L8=D8();const i2=document.getElementById("root"),Ra=i2&&L8.createRoot(i2);Ra==null||Ra.render(c.jsx(T.StrictMode,{children:c.jsxs(bh,{theme:H,children:[c.jsx(Ph,{}),c.jsx(M8,{})]})}));
