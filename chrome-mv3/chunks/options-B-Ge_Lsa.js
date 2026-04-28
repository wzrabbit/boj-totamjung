(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();try{}catch(n){console.error("[wxt] Failed to initialize plugins",n)}function Qp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ga={exports:{}},go={},ma={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Zp(){if(xd)return fe;xd=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function R(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,G={};function B(N,O,te){this.props=N,this.context=O,this.refs=G,this.updater=te||j}B.prototype.isReactComponent={},B.prototype.setState=function(N,O){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,O,"setState")},B.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function V(N,O,te){this.props=N,this.context=O,this.refs=G,this.updater=te||j}var q=V.prototype=new Z;q.constructor=V,D(q,B.prototype),q.isPureReactComponent=!0;var F=Array.isArray,ne=Object.prototype.hasOwnProperty,K={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function xe(N,O,te){var oe,ce={},ue=null,Ae=null;if(O!=null)for(oe in O.ref!==void 0&&(Ae=O.ref),O.key!==void 0&&(ue=""+O.key),O)ne.call(O,oe)&&!W.hasOwnProperty(oe)&&(ce[oe]=O[oe]);var he=arguments.length-2;if(he===1)ce.children=te;else if(1<he){for(var me=Array(he),Xe=0;Xe<he;Xe++)me[Xe]=arguments[Xe+2];ce.children=me}if(N&&N.defaultProps)for(oe in he=N.defaultProps,he)ce[oe]===void 0&&(ce[oe]=he[oe]);return{$$typeof:n,type:N,key:ue,ref:Ae,props:ce,_owner:K.current}}function _e(N,O){return{$$typeof:n,type:N.type,key:O,ref:N.ref,props:N.props,_owner:N._owner}}function Oe(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function qe(N){var O={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return O[te]})}var Ke=/\/+/g;function He(N,O){return typeof N=="object"&&N!==null&&N.key!=null?qe(""+N.key):O.toString(36)}function Be(N,O,te,oe,ce){var ue=typeof N;(ue==="undefined"||ue==="boolean")&&(N=null);var Ae=!1;if(N===null)Ae=!0;else switch(ue){case"string":case"number":Ae=!0;break;case"object":switch(N.$$typeof){case n:case i:Ae=!0}}if(Ae)return Ae=N,ce=ce(Ae),N=oe===""?"."+He(Ae,0):oe,F(ce)?(te="",N!=null&&(te=N.replace(Ke,"$&/")+"/"),Be(ce,O,te,"",function(Xe){return Xe})):ce!=null&&(Oe(ce)&&(ce=_e(ce,te+(!ce.key||Ae&&Ae.key===ce.key?"":(""+ce.key).replace(Ke,"$&/")+"/")+N)),O.push(ce)),1;if(Ae=0,oe=oe===""?".":oe+":",F(N))for(var he=0;he<N.length;he++){ue=N[he];var me=oe+He(ue,he);Ae+=Be(ue,O,te,me,ce)}else if(me=R(N),typeof me=="function")for(N=me.call(N),he=0;!(ue=N.next()).done;)ue=ue.value,me=oe+He(ue,he++),Ae+=Be(ue,O,te,me,ce);else if(ue==="object")throw O=String(N),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Ae}function it(N,O,te){if(N==null)return N;var oe=[],ce=0;return Be(N,oe,"","",function(ue){return O.call(te,ue,ce++)}),oe}function Ue(N){if(N._status===-1){var O=N._result;O=O(),O.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=O)}if(N._status===1)return N._result.default;throw N._result}var se={current:null},H={transition:null},Y={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:H,ReactCurrentOwner:K};function U(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:it,forEach:function(N,O,te){it(N,function(){O.apply(this,arguments)},te)},count:function(N){var O=0;return it(N,function(){O++}),O},toArray:function(N){return it(N,function(O){return O})||[]},only:function(N){if(!Oe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},fe.Component=B,fe.Fragment=l,fe.Profiler=d,fe.PureComponent=V,fe.StrictMode=u,fe.Suspense=v,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,fe.act=U,fe.cloneElement=function(N,O,te){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var oe=D({},N.props),ce=N.key,ue=N.ref,Ae=N._owner;if(O!=null){if(O.ref!==void 0&&(ue=O.ref,Ae=K.current),O.key!==void 0&&(ce=""+O.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(me in O)ne.call(O,me)&&!W.hasOwnProperty(me)&&(oe[me]=O[me]===void 0&&he!==void 0?he[me]:O[me])}var me=arguments.length-2;if(me===1)oe.children=te;else if(1<me){he=Array(me);for(var Xe=0;Xe<me;Xe++)he[Xe]=arguments[Xe+2];oe.children=he}return{$$typeof:n,type:N.type,key:ce,ref:ue,props:oe,_owner:Ae}},fe.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:p,_context:N},N.Consumer=N},fe.createElement=xe,fe.createFactory=function(N){var O=xe.bind(null,N);return O.type=N,O},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:y,render:N}},fe.isValidElement=Oe,fe.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:Ue}},fe.memo=function(N,O){return{$$typeof:T,type:N,compare:O===void 0?null:O}},fe.startTransition=function(N){var O=H.transition;H.transition={};try{N()}finally{H.transition=O}},fe.unstable_act=U,fe.useCallback=function(N,O){return se.current.useCallback(N,O)},fe.useContext=function(N){return se.current.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N){return se.current.useDeferredValue(N)},fe.useEffect=function(N,O){return se.current.useEffect(N,O)},fe.useId=function(){return se.current.useId()},fe.useImperativeHandle=function(N,O,te){return se.current.useImperativeHandle(N,O,te)},fe.useInsertionEffect=function(N,O){return se.current.useInsertionEffect(N,O)},fe.useLayoutEffect=function(N,O){return se.current.useLayoutEffect(N,O)},fe.useMemo=function(N,O){return se.current.useMemo(N,O)},fe.useReducer=function(N,O,te){return se.current.useReducer(N,O,te)},fe.useRef=function(N){return se.current.useRef(N)},fe.useState=function(N){return se.current.useState(N)},fe.useSyncExternalStore=function(N,O,te){return se.current.useSyncExternalStore(N,O,te)},fe.useTransition=function(){return se.current.useTransition()},fe.version="18.3.1",fe}var Ad;function Ka(){return Ad||(Ad=1,ma.exports=Zp()),ma.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function qp(){if(wd)return go;wd=1;var n=Ka(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(y,v,T){var x,S={},R=null,j=null;T!==void 0&&(R=""+T),v.key!==void 0&&(R=""+v.key),v.ref!==void 0&&(j=v.ref);for(x in v)u.call(v,x)&&!p.hasOwnProperty(x)&&(S[x]=v[x]);if(y&&y.defaultProps)for(x in v=y.defaultProps,v)S[x]===void 0&&(S[x]=v[x]);return{$$typeof:i,type:y,key:R,ref:j,props:S,_owner:d.current}}return go.Fragment=l,go.jsx=h,go.jsxs=h,go}var Sd;function Kp(){return Sd||(Sd=1,ga.exports=qp()),ga.exports}var c=Kp(),w=Ka();const Gt=Qp(w);var Ze=function(){return Ze=Object.assign||function(i){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ze.apply(this,arguments)};function Tr(n,i,l){if(l||arguments.length===2)for(var u=0,d=i.length,p;u<d;u++)(p||!(u in i))&&(p||(p=Array.prototype.slice.call(i,0,u)),p[u]=i[u]);return n.concat(p||Array.prototype.slice.call(i))}var ke="-ms-",xo="-moz-",we="-webkit-",w2="comm",ll="rule",Xa="decl",Xp="@import",S2="@keyframes",Jp="@layer",T2=Math.abs,Ja=String.fromCharCode,Ha=Object.assign;function eh(n,i){return Qe(n,0)^45?(((i<<2^Qe(n,0))<<2^Qe(n,1))<<2^Qe(n,2))<<2^Qe(n,3):0}function E2(n){return n.trim()}function en(n,i){return(n=i.exec(n))?n[0]:n}function de(n,i,l){return n.replace(i,l)}function Qi(n,i,l){return n.indexOf(i,l)}function Qe(n,i){return n.charCodeAt(i)|0}function Er(n,i,l){return n.slice(i,l)}function Ft(n){return n.length}function N2(n){return n.length}function mo(n,i){return i.push(n),n}function th(n,i){return n.map(i).join("")}function Td(n,i){return n.filter(function(l){return!en(l,i)})}var sl=1,Nr=1,R2=0,It=0,Pe=0,kr="";function al(n,i,l,u,d,p,h,y){return{value:n,root:i,parent:l,type:u,props:d,children:p,line:sl,column:Nr,length:h,return:"",siblings:y}}function Tn(n,i){return Ha(al("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function wr(n){for(;n.root;)n=Tn(n.root,{children:[n]});mo(n,n.siblings)}function nh(){return Pe}function rh(){return Pe=It>0?Qe(kr,--It):0,Nr--,Pe===10&&(Nr=1,sl--),Pe}function _t(){return Pe=It<R2?Qe(kr,It++):0,Nr++,Pe===10&&(Nr=1,sl++),Pe}function Vn(){return Qe(kr,It)}function Zi(){return It}function cl(n,i){return Er(kr,n,i)}function za(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oh(n){return sl=Nr=1,R2=Ft(kr=n),It=0,[]}function ih(n){return kr="",n}function va(n){return E2(cl(It-1,Pa(n===91?n+2:n===40?n+1:n)))}function lh(n){for(;(Pe=Vn())&&Pe<33;)_t();return za(n)>2||za(Pe)>3?"":" "}function sh(n,i){for(;--i&&_t()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return cl(n,Zi()+(i<6&&Vn()==32&&_t()==32))}function Pa(n){for(;_t();)switch(Pe){case n:return It;case 34:case 39:n!==34&&n!==39&&Pa(Pe);break;case 40:n===41&&Pa(n);break;case 92:_t();break}return It}function ah(n,i){for(;_t()&&n+Pe!==57;)if(n+Pe===84&&Vn()===47)break;return"/*"+cl(i,It-1)+"*"+Ja(n===47?n:_t())}function ch(n){for(;!za(Vn());)_t();return cl(n,It)}function uh(n){return ih(qi("",null,null,null,[""],n=oh(n),0,[0],n))}function qi(n,i,l,u,d,p,h,y,v){for(var T=0,x=0,S=h,R=0,j=0,D=0,G=1,B=1,Z=1,V=0,q="",F=d,ne=p,K=u,W=q;B;)switch(D=V,V=_t()){case 40:if(D!=108&&Qe(W,S-1)==58){Qi(W+=de(va(V),"&","&\f"),"&\f",T2(T?y[T-1]:0))!=-1&&(Z=-1);break}case 34:case 39:case 91:W+=va(V);break;case 9:case 10:case 13:case 32:W+=lh(D);break;case 92:W+=sh(Zi()-1,7);continue;case 47:switch(Vn()){case 42:case 47:mo(dh(ah(_t(),Zi()),i,l,v),v);break;default:W+="/"}break;case 123*G:y[T++]=Ft(W)*Z;case 125*G:case 59:case 0:switch(V){case 0:case 125:B=0;case 59+x:Z==-1&&(W=de(W,/\f/g,"")),j>0&&Ft(W)-S&&mo(j>32?Nd(W+";",u,l,S-1,v):Nd(de(W," ","")+";",u,l,S-2,v),v);break;case 59:W+=";";default:if(mo(K=Ed(W,i,l,T,x,d,y,q,F=[],ne=[],S,p),p),V===123)if(x===0)qi(W,i,K,K,F,p,S,y,ne);else switch(R===99&&Qe(W,3)===110?100:R){case 100:case 108:case 109:case 115:qi(n,K,K,u&&mo(Ed(n,K,K,0,0,d,y,q,d,F=[],S,ne),ne),d,ne,S,y,u?F:ne);break;default:qi(W,K,K,K,[""],ne,0,y,ne)}}T=x=j=0,G=Z=1,q=W="",S=h;break;case 58:S=1+Ft(W),j=D;default:if(G<1){if(V==123)--G;else if(V==125&&G++==0&&rh()==125)continue}switch(W+=Ja(V),V*G){case 38:Z=x>0?1:(W+="\f",-1);break;case 44:y[T++]=(Ft(W)-1)*Z,Z=1;break;case 64:Vn()===45&&(W+=va(_t())),R=Vn(),x=S=Ft(q=W+=ch(Zi())),V++;break;case 45:D===45&&Ft(W)==2&&(G=0)}}return p}function Ed(n,i,l,u,d,p,h,y,v,T,x,S){for(var R=d-1,j=d===0?p:[""],D=N2(j),G=0,B=0,Z=0;G<u;++G)for(var V=0,q=Er(n,R+1,R=T2(B=h[G])),F=n;V<D;++V)(F=E2(B>0?j[V]+" "+q:de(q,/&\f/g,j[V])))&&(v[Z++]=F);return al(n,i,l,d===0?ll:y,v,T,x,S)}function dh(n,i,l,u){return al(n,i,l,w2,Ja(nh()),Er(n,2,-2),0,u)}function Nd(n,i,l,u,d){return al(n,i,l,Xa,Er(n,0,u),Er(n,u+1,-1),u,d)}function I2(n,i,l){switch(eh(n,i)){case 5103:return we+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+n+n;case 4789:return xo+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return we+n+xo+n+ke+n+n;case 5936:switch(Qe(n,i+11)){case 114:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return we+n+ke+de(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return we+n+ke+n+n;case 6165:return we+n+ke+"flex-"+n+n;case 5187:return we+n+de(n,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+n;case 5443:return we+n+ke+"flex-item-"+de(n,/flex-|-self/g,"")+(en(n,/flex-|baseline/)?"":ke+"grid-row-"+de(n,/flex-|-self/g,""))+n;case 4675:return we+n+ke+"flex-line-pack"+de(n,/align-content|flex-|-self/g,"")+n;case 5548:return we+n+ke+de(n,"shrink","negative")+n;case 5292:return we+n+ke+de(n,"basis","preferred-size")+n;case 6060:return we+"box-"+de(n,"-grow","")+we+n+ke+de(n,"grow","positive")+n;case 4554:return we+de(n,/([^-])(transform)/g,"$1"+we+"$2")+n;case 6187:return de(de(de(n,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),n,"")+n;case 5495:case 3959:return de(n,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(n,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+n+n;case 4200:if(!en(n,/flex-|baseline/))return ke+"grid-column-align"+Er(n,i)+n;break;case 2592:case 3360:return ke+de(n,"template-","")+n;case 4384:case 3616:return l&&l.some(function(u,d){return i=d,en(u.props,/grid-\w+-end/)})?~Qi(n+(l=l[i].value),"span",0)?n:ke+de(n,"-start","")+n+ke+"grid-row-span:"+(~Qi(l,"span",0)?en(l,/\d+/):+en(l,/\d+/)-+en(n,/\d+/))+";":ke+de(n,"-start","")+n;case 4896:case 4128:return l&&l.some(function(u){return en(u.props,/grid-\w+-start/)})?n:ke+de(de(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return de(n,/(.+)-inline(.+)/,we+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(n)-1-i>6)switch(Qe(n,i+1)){case 109:if(Qe(n,i+4)!==45)break;case 102:return de(n,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+xo+(Qe(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Qi(n,"stretch",0)?I2(de(n,"stretch","fill-available"),i,l)+n:n}break;case 5152:case 5920:return de(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,p,h,y,v,T){return ke+d+":"+p+T+(h?ke+d+"-span:"+(y?v:+v-+p)+T:"")+n});case 4949:if(Qe(n,i+6)===121)return de(n,":",":"+we)+n;break;case 6444:switch(Qe(n,Qe(n,14)===45?18:11)){case 120:return de(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Qe(n,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+n;case 100:return de(n,":",":"+ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(n,"scroll-","scroll-snap-")+n}return n}function el(n,i){for(var l="",u=0;u<n.length;u++)l+=i(n[u],u,n,i)||"";return l}function fh(n,i,l,u){switch(n.type){case Jp:if(n.children.length)break;case Xp:case Xa:return n.return=n.return||n.value;case w2:return"";case S2:return n.return=n.value+"{"+el(n.children,u)+"}";case ll:if(!Ft(n.value=n.props.join(",")))return""}return Ft(l=el(n.children,u))?n.return=n.value+"{"+l+"}":""}function ph(n){var i=N2(n);return function(l,u,d,p){for(var h="",y=0;y<i;y++)h+=n[y](l,u,d,p)||"";return h}}function hh(n){return function(i){i.root||(i=i.return)&&n(i)}}function gh(n,i,l,u){if(n.length>-1&&!n.return)switch(n.type){case Xa:n.return=I2(n.value,n.length,l);return;case S2:return el([Tn(n,{value:de(n.value,"@","@"+we)})],u);case ll:if(n.length)return th(l=n.props,function(d){switch(en(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wr(Tn(n,{props:[de(d,/:(read-\w+)/,":"+xo+"$1")]})),wr(Tn(n,{props:[d]})),Ha(n,{props:Td(l,u)});break;case"::placeholder":wr(Tn(n,{props:[de(d,/:(plac\w+)/,":"+we+"input-$1")]})),wr(Tn(n,{props:[de(d,/:(plac\w+)/,":"+xo+"$1")]})),wr(Tn(n,{props:[de(d,/:(plac\w+)/,ke+"input-$1")]})),wr(Tn(n,{props:[d]})),Ha(n,{props:Td(l,u)});break}return""})}}var mh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Rr=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",k2="active",C2="data-styled-version",ul="6.1.19",ec=`/*!sc*/
`,tl=typeof window<"u"&&typeof document<"u",vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),yh={},dl=Object.freeze([]),Ir=Object.freeze({});function j2(n,i,l){return l===void 0&&(l=Ir),n.theme!==l.theme&&n.theme||i||l.theme}var D2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ah=/(^-|-$)/g;function Rd(n){return n.replace(xh,"-").replace(Ah,"")}var wh=/(a)(d)/gi,Bi=52,Id=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ba(n){var i,l="";for(i=Math.abs(n);i>Bi;i=i/Bi|0)l=Id(i%Bi)+l;return(Id(i%Bi)+l).replace(wh,"$1-$2")}var ya,M2=5381,Sr=function(n,i){for(var l=i.length;l;)n=33*n^i.charCodeAt(--l);return n},O2=function(n){return Sr(M2,n)};function tc(n){return Ba(O2(n)>>>0)}function Sh(n){return n.displayName||n.name||"Component"}function xa(n){return typeof n=="string"&&!0}var L2=typeof Symbol=="function"&&Symbol.for,b2=L2?Symbol.for("react.memo"):60115,Th=L2?Symbol.for("react.forward_ref"):60112,Eh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rh=((ya={})[Th]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ya[b2]=G2,ya);function kd(n){return("type"in(i=n)&&i.type.$$typeof)===b2?G2:"$$typeof"in n?Rh[n.$$typeof]:Eh;var i}var Ih=Object.defineProperty,kh=Object.getOwnPropertyNames,Cd=Object.getOwnPropertySymbols,Ch=Object.getOwnPropertyDescriptor,jh=Object.getPrototypeOf,jd=Object.prototype;function _2(n,i,l){if(typeof i!="string"){if(jd){var u=jh(i);u&&u!==jd&&_2(n,u,l)}var d=kh(i);Cd&&(d=d.concat(Cd(i)));for(var p=kd(n),h=kd(i),y=0;y<d.length;++y){var v=d[y];if(!(v in Nh||l&&l[v]||h&&v in h||p&&v in p)){var T=Ch(i,v);try{Ih(n,v,T)}catch{}}}}return n}function Yn(n){return typeof n=="function"}function nc(n){return typeof n=="object"&&"styledComponentId"in n}function Un(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function nl(n,i){if(n.length===0)return"";for(var l=n[0],u=1;u<n.length;u++)l+=n[u];return l}function Ao(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ua(n,i,l){if(l===void 0&&(l=!1),!l&&!Ao(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var u=0;u<i.length;u++)n[u]=Ua(n[u],i[u]);else if(Ao(i))for(var u in i)n[u]=Ua(n[u],i[u]);return n}function rc(n,i){Object.defineProperty(n,"toString",{value:i})}function Wn(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Dh=(function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var l=0,u=0;u<i;u++)l+=this.groupSizes[u];return l},n.prototype.insertRules=function(i,l){if(i>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,p=d;i>=p;)if((p<<=1)<0)throw Wn(16,"".concat(i));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var h=d;h<p;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(i+1),v=(h=0,l.length);h<v;h++)this.tag.insertRule(y,l[h])&&(this.groupSizes[i]++,y++)},n.prototype.clearGroup=function(i){if(i<this.length){var l=this.groupSizes[i],u=this.indexOfGroup(i),d=u+l;this.groupSizes[i]=0;for(var p=u;p<d;p++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(i){var l="";if(i>=this.length||this.groupSizes[i]===0)return l;for(var u=this.groupSizes[i],d=this.indexOfGroup(i),p=d+u,h=d;h<p;h++)l+="".concat(this.tag.getRule(h)).concat(ec);return l},n})(),Ki=new Map,rl=new Map,Xi=1,Ui=function(n){if(Ki.has(n))return Ki.get(n);for(;rl.has(Xi);)Xi++;var i=Xi++;return Ki.set(n,i),rl.set(i,n),i},Mh=function(n,i){Xi=i+1,Ki.set(n,i),rl.set(i,n)},Oh="style[".concat(Rr,"][").concat(C2,'="').concat(ul,'"]'),Lh=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bh=function(n,i,l){for(var u,d=l.split(","),p=0,h=d.length;p<h;p++)(u=d[p])&&n.registerName(i,u)},Gh=function(n,i){for(var l,u=((l=i.textContent)!==null&&l!==void 0?l:"").split(ec),d=[],p=0,h=u.length;p<h;p++){var y=u[p].trim();if(y){var v=y.match(Lh);if(v){var T=0|parseInt(v[1],10),x=v[2];T!==0&&(Mh(x,T),bh(n,x,v[3]),n.getTag().insertRules(T,d)),d.length=0}else d.push(y)}}},Dd=function(n){for(var i=document.querySelectorAll(Oh),l=0,u=i.length;l<u;l++){var d=i[l];d&&d.getAttribute(Rr)!==k2&&(Gh(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function _h(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H2=function(n){var i=document.head,l=n||i,u=document.createElement("style"),d=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(Rr,"]")));return v[v.length-1]})(l),p=d!==void 0?d.nextSibling:null;u.setAttribute(Rr,k2),u.setAttribute(C2,ul);var h=_h();return h&&u.setAttribute("nonce",h),l.insertBefore(u,p),u},Hh=(function(){function n(i){this.element=H2(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var u=document.styleSheets,d=0,p=u.length;d<p;d++){var h=u[d];if(h.ownerNode===l)return h}throw Wn(17)})(this.element),this.length=0}return n.prototype.insertRule=function(i,l){try{return this.sheet.insertRule(l,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var l=this.sheet.cssRules[i];return l&&l.cssText?l.cssText:""},n})(),zh=(function(){function n(i){this.element=H2(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,l){if(i<=this.length&&i>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n})(),Ph=(function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,l){return i<=this.length&&(this.rules.splice(i,0,l),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n})(),Md=tl,Bh={isServer:!tl,useCSSOMInjection:!vh},ol=(function(){function n(i,l,u){i===void 0&&(i=Ir),l===void 0&&(l={});var d=this;this.options=Ze(Ze({},Bh),i),this.gs=l,this.names=new Map(u),this.server=!!i.isServer,!this.server&&tl&&Md&&(Md=!1,Dd(this)),rc(this,function(){return(function(p){for(var h=p.getTag(),y=h.length,v="",T=function(S){var R=(function(Z){return rl.get(Z)})(S);if(R===void 0)return"continue";var j=p.names.get(R),D=h.getGroup(S);if(j===void 0||!j.size||D.length===0)return"continue";var G="".concat(Rr,".g").concat(S,'[id="').concat(R,'"]'),B="";j!==void 0&&j.forEach(function(Z){Z.length>0&&(B+="".concat(Z,","))}),v+="".concat(D).concat(G,'{content:"').concat(B,'"}').concat(ec)},x=0;x<y;x++)T(x);return v})(d)})}return n.registerId=function(i){return Ui(i)},n.prototype.rehydrate=function(){!this.server&&tl&&Dd(this)},n.prototype.reconstructWithOptions=function(i,l){return l===void 0&&(l=!0),new n(Ze(Ze({},this.options),i),this.gs,l&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(l){var u=l.useCSSOMInjection,d=l.target;return l.isServer?new Ph(d):u?new Hh(d):new zh(d)})(this.options),new Dh(i)));var i},n.prototype.hasNameForId=function(i,l){return this.names.has(i)&&this.names.get(i).has(l)},n.prototype.registerName=function(i,l){if(Ui(i),this.names.has(i))this.names.get(i).add(l);else{var u=new Set;u.add(l),this.names.set(i,u)}},n.prototype.insertRules=function(i,l,u){this.registerName(i,l),this.getTag().insertRules(Ui(i),u)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Ui(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Uh=/&/g,Fh=/^\s*\/\/.*$/gm;function z2(n,i){return n.map(function(l){return l.type==="rule"&&(l.value="".concat(i," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(i," ")),l.props=l.props.map(function(u){return"".concat(i," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=z2(l.children,i)),l})}function Vh(n){var i,l,u,d=Ir,p=d.options,h=p===void 0?Ir:p,y=d.plugins,v=y===void 0?dl:y,T=function(R,j,D){return D.startsWith(l)&&D.endsWith(l)&&D.replaceAll(l,"").length>0?".".concat(i):R},x=v.slice();x.push(function(R){R.type===ll&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(Uh,l).replace(u,T))}),h.prefix&&x.push(gh),x.push(fh);var S=function(R,j,D,G){j===void 0&&(j=""),D===void 0&&(D=""),G===void 0&&(G="&"),i=G,l=j,u=new RegExp("\\".concat(l,"\\b"),"g");var B=R.replace(Fh,""),Z=uh(D||j?"".concat(D," ").concat(j," { ").concat(B," }"):B);h.namespace&&(Z=z2(Z,h.namespace));var V=[];return el(Z,ph(x.concat(hh(function(q){return V.push(q)})))),V};return S.hash=v.length?v.reduce(function(R,j){return j.name||Wn(15),Sr(R,j.name)},M2).toString():"",S}var $h=new ol,Fa=Vh(),P2=Gt.createContext({shouldForwardProp:void 0,styleSheet:$h,stylis:Fa});P2.Consumer;Gt.createContext(void 0);function Va(){return w.useContext(P2)}var B2=(function(){function n(i,l){var u=this;this.inject=function(d,p){p===void 0&&(p=Fa);var h=u.name+p.hash;d.hasNameForId(u.id,h)||d.insertRules(u.id,h,p(u.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=l,rc(this,function(){throw Wn(12,String(u.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Fa),this.name+i.hash},n})(),Yh=function(n){return n>="A"&&n<="Z"};function Od(n){for(var i="",l=0;l<n.length;l++){var u=n[l];if(l===1&&u==="-"&&n[0]==="-")return n;Yh(u)?i+="-"+u.toLowerCase():i+=u}return i.startsWith("ms-")?"-"+i:i}var U2=function(n){return n==null||n===!1||n===""},F2=function(n){var i,l,u=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!U2(p)&&(Array.isArray(p)&&p.isCss||Yn(p)?u.push("".concat(Od(d),":"),p,";"):Ao(p)?u.push.apply(u,Tr(Tr(["".concat(d," {")],F2(p),!1),["}"],!1)):u.push("".concat(Od(d),": ").concat((i=d,(l=p)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in mh||i.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return u};function Rn(n,i,l,u){if(U2(n))return[];if(nc(n))return[".".concat(n.styledComponentId)];if(Yn(n)){if(!Yn(p=n)||p.prototype&&p.prototype.isReactComponent||!i)return[n];var d=n(i);return Rn(d,i,l,u)}var p;return n instanceof B2?l?(n.inject(l,u),[n.getName(u)]):[n]:Ao(n)?F2(n):Array.isArray(n)?Array.prototype.concat.apply(dl,n.map(function(h){return Rn(h,i,l,u)})):[n.toString()]}function V2(n){for(var i=0;i<n.length;i+=1){var l=n[i];if(Yn(l)&&!nc(l))return!1}return!0}var Wh=O2(ul),Qh=(function(){function n(i,l,u){this.rules=i,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&V2(i),this.componentId=l,this.baseHash=Sr(Wh,l),this.baseStyle=u,ol.registerId(l)}return n.prototype.generateAndInjectStyles=function(i,l,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))d=Un(d,this.staticRulesId);else{var p=nl(Rn(this.rules,i,l,u)),h=Ba(Sr(this.baseHash,p)>>>0);if(!l.hasNameForId(this.componentId,h)){var y=u(p,".".concat(h),void 0,this.componentId);l.insertRules(this.componentId,h,y)}d=Un(d,h),this.staticRulesId=h}else{for(var v=Sr(this.baseHash,u.hash),T="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")T+=S;else if(S){var R=nl(Rn(S,i,l,u));v=Sr(v,R+x),T+=R}}if(T){var j=Ba(v>>>0);l.hasNameForId(this.componentId,j)||l.insertRules(this.componentId,j,u(T,".".concat(j),void 0,this.componentId)),d=Un(d,j)}}return d},n})(),wo=Gt.createContext(void 0);wo.Consumer;function Zh(n){var i=Gt.useContext(wo),l=w.useMemo(function(){return(function(u,d){if(!u)throw Wn(14);if(Yn(u)){var p=u(d);return p}if(Array.isArray(u)||typeof u!="object")throw Wn(8);return d?Ze(Ze({},d),u):u})(n.theme,i)},[n.theme,i]);return n.children?Gt.createElement(wo.Provider,{value:l},n.children):null}var Aa={};function qh(n,i,l){var u=nc(n),d=n,p=!xa(n),h=i.attrs,y=h===void 0?dl:h,v=i.componentId,T=v===void 0?(function(F,ne){var K=typeof F!="string"?"sc":Rd(F);Aa[K]=(Aa[K]||0)+1;var W="".concat(K,"-").concat(tc(ul+K+Aa[K]));return ne?"".concat(ne,"-").concat(W):W})(i.displayName,i.parentComponentId):v,x=i.displayName,S=x===void 0?(function(F){return xa(F)?"styled.".concat(F):"Styled(".concat(Sh(F),")")})(n):x,R=i.displayName&&i.componentId?"".concat(Rd(i.displayName),"-").concat(i.componentId):i.componentId||T,j=u&&d.attrs?d.attrs.concat(y).filter(Boolean):y,D=i.shouldForwardProp;if(u&&d.shouldForwardProp){var G=d.shouldForwardProp;if(i.shouldForwardProp){var B=i.shouldForwardProp;D=function(F,ne){return G(F,ne)&&B(F,ne)}}else D=G}var Z=new Qh(l,R,u?d.componentStyle:void 0);function V(F,ne){return(function(K,W,xe){var _e=K.attrs,Oe=K.componentStyle,qe=K.defaultProps,Ke=K.foldedComponentIds,He=K.styledComponentId,Be=K.target,it=Gt.useContext(wo),Ue=Va(),se=K.shouldForwardProp||Ue.shouldForwardProp,H=j2(W,it,qe)||Ir,Y=(function(ce,ue,Ae){for(var he,me=Ze(Ze({},ue),{className:void 0,theme:Ae}),Xe=0;Xe<ce.length;Xe+=1){var $t=Yn(he=ce[Xe])?he(me):he;for(var kt in $t)me[kt]=kt==="className"?Un(me[kt],$t[kt]):kt==="style"?Ze(Ze({},me[kt]),$t[kt]):$t[kt]}return ue.className&&(me.className=Un(me.className,ue.className)),me})(_e,W,H),U=Y.as||Be,N={};for(var O in Y)Y[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&Y.theme===H||(O==="forwardedAs"?N.as=Y.forwardedAs:se&&!se(O,U)||(N[O]=Y[O]));var te=(function(ce,ue){var Ae=Va(),he=ce.generateAndInjectStyles(ue,Ae.styleSheet,Ae.stylis);return he})(Oe,Y),oe=Un(Ke,He);return te&&(oe+=" "+te),Y.className&&(oe+=" "+Y.className),N[xa(U)&&!D2.has(U)?"class":"className"]=oe,xe&&(N.ref=xe),w.createElement(U,N)})(q,F,ne)}V.displayName=S;var q=Gt.forwardRef(V);return q.attrs=j,q.componentStyle=Z,q.displayName=S,q.shouldForwardProp=D,q.foldedComponentIds=u?Un(d.foldedComponentIds,d.styledComponentId):"",q.styledComponentId=R,q.target=u?d.target:n,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?(function(ne){for(var K=[],W=1;W<arguments.length;W++)K[W-1]=arguments[W];for(var xe=0,_e=K;xe<_e.length;xe++)Ua(ne,_e[xe],!0);return ne})({},d.defaultProps,F):F}}),rc(q,function(){return".".concat(q.styledComponentId)}),p&&_2(q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function Ld(n,i){for(var l=[n[0]],u=0,d=i.length;u<d;u+=1)l.push(i[u],n[u+1]);return l}var bd=function(n){return Object.assign(n,{isCss:!0})};function re(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];if(Yn(n)||Ao(n))return bd(Rn(Ld(dl,Tr([n],i,!0))));var u=n;return i.length===0&&u.length===1&&typeof u[0]=="string"?Rn(u):bd(Rn(Ld(u,i)))}function $a(n,i,l){if(l===void 0&&(l=Ir),!i)throw Wn(1,i);var u=function(d){for(var p=[],h=1;h<arguments.length;h++)p[h-1]=arguments[h];return n(i,l,re.apply(void 0,Tr([d],p,!1)))};return u.attrs=function(d){return $a(n,i,Ze(Ze({},l),{attrs:Array.prototype.concat(l.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return $a(n,i,Ze(Ze({},l),d))},u}var $2=function(n){return $a(qh,n)},g=$2;D2.forEach(function(n){g[n]=$2(n)});var Kh=(function(){function n(i,l){this.rules=i,this.componentId=l,this.isStatic=V2(i),ol.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,l,u,d){var p=d(nl(Rn(this.rules,l,u,d)),""),h=this.componentId+i;u.insertRules(h,h,p)},n.prototype.removeStyles=function(i,l){l.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,l,u,d){i>2&&ol.registerId(this.componentId+i),this.removeStyles(i,u),this.createStyles(i,l,u,d)},n})();function Xh(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=re.apply(void 0,Tr([n],i,!1)),d="sc-global-".concat(tc(JSON.stringify(u))),p=new Kh(u,d),h=function(v){var T=Va(),x=Gt.useContext(wo),S=Gt.useRef(T.styleSheet.allocateGSInstance(d)).current;return T.styleSheet.server&&y(S,v,T.styleSheet,x,T.stylis),Gt.useLayoutEffect(function(){if(!T.styleSheet.server)return y(S,v,T.styleSheet,x,T.stylis),function(){return p.removeStyles(S,T.styleSheet)}},[S,v,T.styleSheet,x,T.stylis]),null};function y(v,T,x,S,R){if(p.isStatic)p.renderStyles(v,yh,x,R);else{var j=Ze(Ze({},T),{theme:j2(T,S,h.defaultProps)});p.renderStyles(v,j,x,R)}}return Gt.memo(h)}function at(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var u=nl(re.apply(void 0,Tr([n],i,!1))),d=tc(u);return new B2(d,u)}const z={color:{LEMON:"#fff2c8",TRANSPARENT_LEMON:"#fff2c87f",GOLD:"#d1b072",LIGHTEST_BROWN:"#a17362",LIGHTEST_BROWN_TRANSPARENT:"#a1736280",LIGHTER_BROWN:"#694132",LIGHT_BROWN:"#412a23",BROWN:"#301e18",SLIGHT_DARK_BROWN:"#271610",DARK_BROWN:"#1a0e0a",WHITE:"#eeeeee",PURE_WHITE:"#ffffff",TRANSPARENT_FAINT_WHITE:"#eeeeee20",GRAY:"#808080",LIGHT_GRAY:"#aaaaaa",DARK_GRAY:"#333333",RED:"#ff0000",LIGHT_RED:"#ff5454",LIGHT_RED_TRANSPARENT:"#ff545420",MAGENTA:"#ff005d",SKY_BLUE:"#00a1ff",AZURE_BLUE:"#007bff",BOJ_BLUE:"#0076c0",BOJ_BLUE_TRANSPARENT:"#0076c050",BLACK:"#000000",BLACK_TRANSPARENT:"#00000050",BLACK_DARKER_TRANSPARENT:"#000000aa",ORANGE:"#ff8533",DARK_ORANGE:"#bb4b00",BEIGE:"#c8aaa0",LIME:"#00ed28",GREEN:"#008000",LIGHT_PURPLE:"#dcbfff",PURPLE:"#963eff",MANGO:"#ffd900"},solvedAcTier:{0:"#2d2d2d",1:"#9d4900",2:"#a54f00",3:"#ad5600",4:"#b55d0a",5:"#c67739",6:"#38546e",7:"#3d5a74",8:"#435f7a",9:"#496580",10:"#4e6a86",11:"#d28500",12:"#df8f00",13:"#ec9a00",14:"#f9a518",15:"#ffb028",16:"#00c78b",17:"#00d497",18:"#27e2a4",19:"#3ef0b1",20:"#51fdbd",21:"#009ee5",22:"#00a9f0",23:"#00b4fc",24:"#2bbfff",25:"#41caff",26:"#e0004c",27:"#ea0053",28:"#f5005a",29:"#ff0062",30:"#ff3071",UNRATED:"#ffffff",BRONZE:"#ad5600",SILVER:"#3d5a74",GOLD:"#ec9a00",PLATINUM:"#27e2a4",DIAMOND:"#00b4fc",RUBY:"#f5005a",UNRATED_TRANSPARENT:"#ffffff40",BRONZE_TRANSPARENT:"#ad560040",SILVER_TRANSPARENT:"#3d5a7440",GOLD_TRANSPARENT:"#ec9a0040",PLATINUM_TRANSPARENT:"#27e2a440",DIAMOND_TRANSPARENT:"#00b4fc40",RUBY_TRANSPARENT:"#f5005a40",UNRATED_GRADIENT:"linear-gradient(to right, #b9bcc3 0%, #e9edf1 100%)",HIDDEN_GRADIENT:"linear-gradient(to right, #919191 0%, #676767 100%)",BRONZE_GRADIENT:"linear-gradient(to right, #ad5600 0%, #e84d0b 100%)",SILVER_GRADIENT:"linear-gradient(to right, #5d7a95 0%, #75a8d7 100%)",GOLD_GRADIENT:"linear-gradient(to right, #ec9a00 0%, #ffd000 100%)",PLATINUM_GRADIENT:"linear-gradient(to right, #27e2a4 0%, #27d9e2 100%)",DIAMOND_GRADIENT:"linear-gradient(to right, #00b4fc 0%, #0068fc 100%)",RUBY_GRADIENT:"linear-gradient(to right, #ff0062 0%, #ff0000 100%)",UNRATED_DARK_GRADIENT100:"linear-gradient(to right, #1a1c1f 0%, #1c242b 100%)",HIDDEN_DARK_GRADIENT100:"linear-gradient(to right, #161616 0%, #0f0f0f 100%)",BRONZE_DARK_GRADIENT100:"linear-gradient(to right, #1a0d00 0%, #230c02 100%)",SILVER_DARK_GRADIENT100:"linear-gradient(to right, #0e1216 0%, #0b1927 100%)",GOLD_DARK_GRADIENT100:"linear-gradient(to right, #231700 0%, #261f00 100%)",PLATINUM_DARK_GRADIENT100:"linear-gradient(to right, #052319 0%, #052123 100%)",DIAMOND_DARK_GRADIENT100:"linear-gradient(to right, #001b25 0%, #001025 100%)",RUBY_DARK_GRADIENT100:"linear-gradient(to right, #26000f 0%, #260000 100%)",UNRATED_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",HIDDEN_DARK_GRADIENT200:"linear-gradient(to right, #35383e 0%, #384757 100%)",BRONZE_DARK_GRADIENT200:"linear-gradient(to right, #351b00 0%, #461703 100%)",SILVER_DARK_GRADIENT200:"linear-gradient(to right, #1c242c 0%, #16334d 100%)",GOLD_DARK_GRADIENT200:"linear-gradient(to right, #462e00 0%, #4d3e00 100%)",PLATINUM_DARK_GRADIENT200:"linear-gradient(to right, #0a4632 0%, #0a4346 100%)",DIAMOND_DARK_GRADIENT200:"linear-gradient(to right, #00364b 0%, #001f4b 100%)",RUBY_DARK_GRADIENT200:"linear-gradient(to right, #4d001d 0%, #4d0000 100%)"},gradient:{BROWN_GRADIENT:"linear-gradient(to top, #1a0e0a 0%, transparent 100%)"},filter:{BOJ_BLUE_FILTER:"brightness(0) saturate(100%) invert(29%) sepia(66%) saturate(1717%) hue-rotate(179deg) brightness(101%) contrast(101%)",LIGHT_BROWN_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(26%) saturate(568%) hue-rotate(330deg) brightness(93%) contrast(86%)",ORANGE_FILTER:"brightness(0) saturate(100%) invert(49%) sepia(34%) saturate(983%) hue-rotate(339deg) brightness(115%) contrast(101%)",DARK_ORANGE_FILTER:"brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(1465%) hue-rotate(11deg) brightness(97%) contrast(101%)",GOLD_FILTER:"brightness(0) saturate(100%) invert(77%) sepia(25%) saturate(571%) hue-rotate(1deg) brightness(89%) contrast(91%);",WHITE_FILTER:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%)",LIGHTEST_BROWN_FILTER:"brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(936%) hue-rotate(330deg) brightness(89%) contrast(88%)",LIGHT_GRAY_FILTER:"brightness(0) saturate(100%) invert(86%) sepia(0%) saturate(1969%) hue-rotate(175deg) brightness(78%) contrast(96%)"},solvedAcColor:{LIME:"#17ce3a",OFF_WHITE:"#f7f8f9",GRAY:"#8a8f95",LIGHT_GRAY:"#b8bcbf",LIGHTER_GRAY:"#dddfe0",INDIGO:"#15202b",DARK_INDIGO:"#0b131b"},bojExtendedColor:{SKY_BLUE:"#008db4",DARK_SKY_BLUE:"#002635",DARK_INDIGO:"#001a26",DARK_GRAY:"#545454",DARKER_GRAY:"#202020",DARKEST_GRAY:"#161616",LIGHT_GRAY:"#a2a4a5"},solvedAcFilter:{LIME:"brightness(0) saturate(100%) invert(60%) sepia(34%) saturate(3800%) hue-rotate(87deg) brightness(105%) contrast(86%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(79%) sepia(4%) saturate(201%) hue-rotate(163deg) brightness(94%) contrast(93%)"},bojExtendedFilter:{DARK_GRAY:"brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(1005%) hue-rotate(147deg) brightness(100%) contrast(88%)",SKY_BLUE:"brightness(0) saturate(100%) invert(31%) sepia(81%) saturate(2692%) hue-rotate(171deg) brightness(96%) contrast(101%)",LIGHT_GRAY:"brightness(0) saturate(100%) invert(76%) sepia(5%) saturate(94%) hue-rotate(155deg) brightness(86%) contrast(88%)"}},Jh=Xh`
  ${({usesShadowRoot:n=!1})=>n?re`
          :host {
            all: initial !important;
            display: block;
          }

          :host #totamjung-root {
            font-family: Pretendard;
          }
        `:re`
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
    scrollbar-color: ${z.color.LIGHTEST_BROWN} ${z.color.SLIGHT_DARK_BROWN};
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
`;var x2,A2;const eg=(A2=(x2=globalThis.browser)==null?void 0:x2.runtime)!=null&&A2.id?globalThis.browser:globalThis.chrome,ye=eg,tg=g.nav`
  display: inline-flex;

  height: 36px;
`,ng=g.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,rg=g.li`
  display: flex;
  flex-direction: column;
`,og=g.button`
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
`,ig=g.span`
  display: inline-block;

  width: ${({$isSelected:n})=>n?"100%":"0"};
  height: 2px;

  background-color: ${({theme:n})=>n.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:n})=>n.color.LEMON};
  }
`,lg=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],sg=n=>{const{selectedCategory:i,onChange:l}=n;return c.jsx(tg,{children:c.jsx(ng,{children:lg.map(({displayName:u,category:d})=>c.jsxs(rg,{children:[c.jsx(og,{$isSelected:d===i,onClick:()=>{l(d)},children:u}),c.jsx(ig,{$isSelected:d===i})]},u))})})},Ji={none:z.color.WHITE,totamjung:z.color.DARK_BROWN,bojExtendedDark:z.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_INDIGO,solvedAcLight:z.color.WHITE,solvedAcDark:z.solvedAcColor.DARK_INDIGO,solvedAcBlack:z.color.BLACK},Y2={none:z.color.BLACK,totamjung:z.color.GOLD,bojExtendedDark:z.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:z.color.WHITE,solvedAcLight:z.color.BLACK,solvedAcDark:z.color.WHITE,solvedAcBlack:z.color.WHITE},ag={...Y2,none:z.solvedAcColor.GRAY,solvedAcLight:z.solvedAcColor.GRAY,solvedAcDark:z.solvedAcColor.LIGHT_GRAY,solvedAcBlack:z.solvedAcColor.LIGHT_GRAY},cg={none:z.color.PURE_WHITE,totamjung:z.color.BROWN,bojExtendedDark:z.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:z.color.PURE_WHITE,solvedAcDark:z.solvedAcColor.INDIGO,solvedAcBlack:z.solvedAcColor.DARK_INDIGO},ug={none:z.color.LIGHT_GRAY,totamjung:z.color.GOLD,bojExtendedDark:z.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_INDIGO,solvedAcLight:z.color.WHITE,solvedAcDark:z.solvedAcColor.DARK_INDIGO,solvedAcBlack:z.color.BLACK},dg=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 2;
`,fg=g.div`
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
`,W2=g.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`,Q2=g.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Z2=g.button`
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
`,q2=g.div`
  padding: ${({$padding:n})=>n};

  font-size: 16px;
`,pg=g.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:n})=>Ji[n]};
`,hg=g.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:n})=>ug[n]};
  background-color: ${({$totamjungTheme:n})=>Ji[n]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$totamjungTheme:n})=>re`
    & ${W2} {
      border-bottom: 16px solid ${Ji[n]};

      background-color: ${Ji[n]};
    }

    & ${Q2} {
      color: ${Y2[n]};
    }

    & ${Z2} > svg {
      color: ${ag[n]};
    }

    & ${q2} {
      background-color: ${cg[n]};

      color: ${({theme:i})=>i.color.DARK_GRAY};
    }
  `};
`,gg=n=>{const{onEscKeyPress:i}=n,l=u=>{u.key==="Escape"&&i()};w.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[i])},mg=()=>{var i;let n=document.activeElement;for(;(i=n==null?void 0:n.shadowRoot)!=null&&i.activeElement;)n=n.shadowRoot.activeElement;return n},vg=n=>{const i=w.useRef(null),l=w.useRef(null),u=w.useRef(null),d=w.useRef(n);return!d.current&&n&&document.activeElement instanceof HTMLElement&&(u.current=document.activeElement),d.current=n,w.useEffect(()=>(n&&i.current&&l.current&&!i.current.contains(mg())&&l.current.focus(),()=>{n&&u.current instanceof HTMLElement&&u.current.focus()}),[n]),{modalRef:i,closeButtonRef:l}},K2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...n},w.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),yg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),fl=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"})),xg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zM12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm4-13.775l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"})),Ag=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),wg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"})),Sg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),Io=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),ko=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"})),Tg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),X2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"})),Eg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"})),J2=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),Co=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M20 7L10 17l-5-5"})),e1=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},w.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})),t1=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),Ng=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},w.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),Rg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},w.createElement("g",{fill:"currentColor"},w.createElement("path",{d:"M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"}),w.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}))),Ig=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...n},w.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),w.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),n1=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-8l4 4h-2.5v3h-3v-3H8z"})),kg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),Cg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),jg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"})),Dg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"})),Mg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...n},w.createElement("g",{fill:"currentColor"},w.createElement("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"}),w.createElement("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"}))),Og=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,color:"currentColor"},w.createElement("path",{d:"M13.5 5.5V2m0 10V9m0 13c6 0 7.5-4.51 7.5-10S19.5 2 13.5 2S6 6.51 6 12s1.5 10 7.5 10"}),w.createElement("path",{d:"M15 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C15 8.199 15 7.966 15 7.5zm-9 5h15M5 3.167L4.619 2m-.59 3.567L3 6"}))),r1=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},w.createElement("rect",{width:12,height:12,x:2,y:10,rx:2,ry:2}),w.createElement("path",{d:"m17.92 14l3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01"}))),Lg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"})),bg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"})),Gg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"})),_g=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...n},w.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4},w.createElement("path",{d:"M44 44V4H24v16H4v24z"}),w.createElement("path",{d:"m21 28l-4 4l4 4"}),w.createElement("path",{d:"M34 23v9H17"}))),Hg=n=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...n},w.createElement("path",{fill:"currentColor",d:"M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5t.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"}));var wa={exports:{}},ht={},Sa={exports:{}},Ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function zg(){return Gd||(Gd=1,(function(n){function i(H,Y){var U=H.length;H.push(Y);e:for(;0<U;){var N=U-1>>>1,O=H[N];if(0<d(O,Y))H[N]=Y,H[U]=O,U=N;else break e}}function l(H){return H.length===0?null:H[0]}function u(H){if(H.length===0)return null;var Y=H[0],U=H.pop();if(U!==Y){H[0]=U;e:for(var N=0,O=H.length,te=O>>>1;N<te;){var oe=2*(N+1)-1,ce=H[oe],ue=oe+1,Ae=H[ue];if(0>d(ce,U))ue<O&&0>d(Ae,ce)?(H[N]=Ae,H[ue]=U,N=ue):(H[N]=ce,H[oe]=U,N=oe);else if(ue<O&&0>d(Ae,U))H[N]=Ae,H[ue]=U,N=ue;else break e}}return Y}function d(H,Y){var U=H.sortIndex-Y.sortIndex;return U!==0?U:H.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var h=Date,y=h.now();n.unstable_now=function(){return h.now()-y}}var v=[],T=[],x=1,S=null,R=3,j=!1,D=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(H){for(var Y=l(T);Y!==null;){if(Y.callback===null)u(T);else if(Y.startTime<=H)u(T),Y.sortIndex=Y.expirationTime,i(v,Y);else break;Y=l(T)}}function F(H){if(G=!1,q(H),!D)if(l(v)!==null)D=!0,Ue(ne);else{var Y=l(T);Y!==null&&se(F,Y.startTime-H)}}function ne(H,Y){D=!1,G&&(G=!1,Z(xe),xe=-1),j=!0;var U=R;try{for(q(Y),S=l(v);S!==null&&(!(S.expirationTime>Y)||H&&!qe());){var N=S.callback;if(typeof N=="function"){S.callback=null,R=S.priorityLevel;var O=N(S.expirationTime<=Y);Y=n.unstable_now(),typeof O=="function"?S.callback=O:S===l(v)&&u(v),q(Y)}else u(v);S=l(v)}if(S!==null)var te=!0;else{var oe=l(T);oe!==null&&se(F,oe.startTime-Y),te=!1}return te}finally{S=null,R=U,j=!1}}var K=!1,W=null,xe=-1,_e=5,Oe=-1;function qe(){return!(n.unstable_now()-Oe<_e)}function Ke(){if(W!==null){var H=n.unstable_now();Oe=H;var Y=!0;try{Y=W(!0,H)}finally{Y?He():(K=!1,W=null)}}else K=!1}var He;if(typeof V=="function")He=function(){V(Ke)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,it=Be.port2;Be.port1.onmessage=Ke,He=function(){it.postMessage(null)}}else He=function(){B(Ke,0)};function Ue(H){W=H,K||(K=!0,He())}function se(H,Y){xe=B(function(){H(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){D||j||(D=!0,Ue(ne))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return l(v)},n.unstable_next=function(H){switch(R){case 1:case 2:case 3:var Y=3;break;default:Y=R}var U=R;R=Y;try{return H()}finally{R=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var U=R;R=H;try{return Y()}finally{R=U}},n.unstable_scheduleCallback=function(H,Y,U){var N=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?N+U:N):U=N,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=U+O,H={id:x++,callback:Y,priorityLevel:H,startTime:U,expirationTime:O,sortIndex:-1},U>N?(H.sortIndex=U,i(T,H),l(v)===null&&H===l(T)&&(G?(Z(xe),xe=-1):G=!0,se(F,U-N))):(H.sortIndex=O,i(v,H),D||j||(D=!0,Ue(ne))),H},n.unstable_shouldYield=qe,n.unstable_wrapCallback=function(H){var Y=R;return function(){var U=R;R=Y;try{return H.apply(this,arguments)}finally{R=U}}}})(Ta)),Ta}var _d;function Pg(){return _d||(_d=1,Sa.exports=zg()),Sa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Bg(){if(Hd)return ht;Hd=1;var n=Ka(),i=Pg();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function R(e){return v.call(S,e)?!0:v.call(x,e)?!1:T.test(e)?S[e]=!0:(x[e]=!0,!1)}function j(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,t,r,o){if(t===null||typeof t>"u"||j(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function G(e,t,r,o,s,a,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=f}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new G(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new G(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new G(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new G(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new G(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new G(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new G(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new G(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new G(e,5,!1,e.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Z,V);B[t]=new G(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Z,V);B[t]=new G(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Z,V);B[t]=new G(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new G(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new G(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,r,o){var s=B.hasOwnProperty(t)?B[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D(t,r,s,o)&&(r=null),o||s===null?R(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var F=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),K=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),qe=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),H=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,N;function O(e){if(N===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return`
`+N+e}var te=!1;function oe(e,t){if(!e||te)return"";te=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var o=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){o=C}e.call(t.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var s=C.stack.split(`
`),a=o.stack.split(`
`),f=s.length-1,m=a.length-1;1<=f&&0<=m&&s[f]!==a[m];)m--;for(;1<=f&&0<=m;f--,m--)if(s[f]!==a[m]){if(f!==1||m!==1)do if(f--,m--,0>m||s[f]!==a[m]){var A=`
`+s[f].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=f&&0<=m);break}}}finally{te=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?O(e):""}function ce(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case K:return"Portal";case _e:return"Profiler";case xe:return"StrictMode";case He:return"Suspense";case Be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qe:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function Ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===xe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){o=""+f,a.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(f){o=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $t(e){e._valueTracker||(e._valueTracker=Xe(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=me(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var r=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Rc(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ic(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function Tl(e,t){Ic(e,t);var r=he(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?El(e,t.type,r):t.hasOwnProperty("defaultValue")&&El(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function El(e,t,r){(t!=="number"||Mo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Cr=Array.isArray;function qn(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Cr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function jc(e,t){var r=he(t.value),o=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Oc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K1=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){K1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Lc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function bc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Lc(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var X1=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(e,t){if(t){if(X1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Kn=null,Xn=null;function Gc(e){if(e=Jr(e)){if(typeof Dl!="function")throw Error(l(280));var t=e.stateNode;t&&(t=ni(t),Dl(e.stateNode,e.type,t))}}function _c(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function Hc(){if(Kn){var e=Kn,t=Xn;if(Xn=Kn=null,Gc(e),t)for(e=0;e<t.length;e++)Gc(t[e])}}function zc(e,t){return e(t)}function Pc(){}var Ml=!1;function Bc(e,t,r){if(Ml)return e(t,r);Ml=!0;try{return zc(e,t,r)}finally{Ml=!1,(Kn!==null||Xn!==null)&&(Pc(),Hc())}}function Mr(e,t){var r=e.stateNode;if(r===null)return null;var o=ni(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Ol=!1;if(y)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ol=!1}function J1(e,t,r,o,s,a,f,m,A){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(b){this.onError(b)}}var Lr=!1,Lo=null,bo=!1,Ll=null,ef={onError:function(e){Lr=!0,Lo=e}};function tf(e,t,r,o,s,a,f,m,A){Lr=!1,Lo=null,J1.apply(ef,arguments)}function nf(e,t,r,o,s,a,f,m,A){if(tf.apply(this,arguments),Lr){if(Lr){var C=Lo;Lr=!1,Lo=null}else throw Error(l(198));bo||(bo=!0,Ll=C)}}function kn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(kn(e)!==e)throw Error(l(188))}function rf(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return Fc(s),e;if(a===o)return Fc(s),t;a=a.sibling}throw Error(l(188))}if(r.return!==o.return)r=s,o=a;else{for(var f=!1,m=s.child;m;){if(m===r){f=!0,r=s,o=a;break}if(m===o){f=!0,o=s,r=a;break}m=m.sibling}if(!f){for(m=a.child;m;){if(m===r){f=!0,r=a,o=s;break}if(m===o){f=!0,o=a,r=s;break}m=m.sibling}if(!f)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Vc(e){return e=rf(e),e!==null?$c(e):null}function $c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$c(e);if(t!==null)return t;e=e.sibling}return null}var Yc=i.unstable_scheduleCallback,Wc=i.unstable_cancelCallback,of=i.unstable_shouldYield,lf=i.unstable_requestPaint,be=i.unstable_now,sf=i.unstable_getCurrentPriorityLevel,bl=i.unstable_ImmediatePriority,Qc=i.unstable_UserBlockingPriority,Go=i.unstable_NormalPriority,af=i.unstable_LowPriority,Zc=i.unstable_IdlePriority,_o=null,Ht=null;function cf(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:ff,uf=Math.log,df=Math.LN2;function ff(e){return e>>>=0,e===0?32:31-(uf(e)/df|0)|0}var Ho=64,zo=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,f=r&268435455;if(f!==0){var m=f&~s;m!==0?o=br(m):(a&=f,a!==0&&(o=br(a)))}else f=r&~s,f!==0?o=br(f):a!==0&&(o=br(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Ct(t),s=1<<r,o|=e[r],t&=~s;return o}function pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var f=31-Ct(a),m=1<<f,A=s[f];A===-1?((m&r)===0||(m&o)!==0)&&(s[f]=pf(m,t)):A<=t&&(e.expiredLanes|=m),a&=~m}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qc(){var e=Ho;return Ho<<=1,(Ho&4194240)===0&&(Ho=64),e}function _l(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Gr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=r}function gf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ct(r),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~a}}function Hl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ct(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var Se=0;function Kc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Xc,zl,Jc,eu,tu,Pl=!1,Bo=[],rn=null,on=null,ln=null,_r=new Map,Hr=new Map,sn=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nu(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function zr(e,t,r,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Jr(t),t!==null&&zl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function vf(e,t,r,o,s){switch(t){case"focusin":return rn=zr(rn,e,t,r,o,s),!0;case"dragenter":return on=zr(on,e,t,r,o,s),!0;case"mouseover":return ln=zr(ln,e,t,r,o,s),!0;case"pointerover":var a=s.pointerId;return _r.set(a,zr(_r.get(a)||null,e,t,r,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Hr.set(a,zr(Hr.get(a)||null,e,t,r,o,s)),!0}return!1}function ru(e){var t=Cn(e.target);if(t!==null){var r=kn(t);if(r!==null){if(t=r.tag,t===13){if(t=Uc(r),t!==null){e.blockedOn=t,tu(e.priority,function(){Jc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Cl=o,r.target.dispatchEvent(o),Cl=null}else return t=Jr(r),t!==null&&zl(t),e.blockedOn=r,!1;t.shift()}return!0}function ou(e,t,r){Uo(e)&&r.delete(t)}function yf(){Pl=!1,rn!==null&&Uo(rn)&&(rn=null),on!==null&&Uo(on)&&(on=null),ln!==null&&Uo(ln)&&(ln=null),_r.forEach(ou),Hr.forEach(ou)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yf)))}function Br(e){function t(s){return Pr(s,e)}if(0<Bo.length){Pr(Bo[0],e);for(var r=1;r<Bo.length;r++){var o=Bo[r];o.blockedOn===e&&(o.blockedOn=null)}}for(rn!==null&&Pr(rn,e),on!==null&&Pr(on,e),ln!==null&&Pr(ln,e),_r.forEach(t),Hr.forEach(t),r=0;r<sn.length;r++)o=sn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<sn.length&&(r=sn[0],r.blockedOn===null);)ru(r),r.blockedOn===null&&sn.shift()}var Jn=F.ReactCurrentBatchConfig,Fo=!0;function xf(e,t,r,o){var s=Se,a=Jn.transition;Jn.transition=null;try{Se=1,Bl(e,t,r,o)}finally{Se=s,Jn.transition=a}}function Af(e,t,r,o){var s=Se,a=Jn.transition;Jn.transition=null;try{Se=4,Bl(e,t,r,o)}finally{Se=s,Jn.transition=a}}function Bl(e,t,r,o){if(Fo){var s=Ul(e,t,r,o);if(s===null)is(e,t,o,Vo,r),nu(e,o);else if(vf(s,e,t,r,o))o.stopPropagation();else if(nu(e,o),t&4&&-1<mf.indexOf(e)){for(;s!==null;){var a=Jr(s);if(a!==null&&Xc(a),a=Ul(e,t,r,o),a===null&&is(e,t,o,Vo,r),a===s)break;s=a}s!==null&&o.stopPropagation()}else is(e,t,o,null,r)}}var Vo=null;function Ul(e,t,r,o){if(Vo=null,e=jl(o),e=Cn(e),e!==null)if(t=kn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Uc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sf()){case bl:return 1;case Qc:return 4;case Go:case af:return 16;case Zc:return 536870912;default:return 16}default:return 16}}var an=null,Fl=null,$o=null;function lu(){if($o)return $o;var e,t=Fl,r=t.length,o,s="value"in an?an.value:an.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var f=r-e;for(o=1;o<=f&&t[r-o]===s[a-o];o++);return $o=s.slice(e,1<o?1-o:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function su(){return!1}function mt(e){function t(r,o,s,a,f){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Wo:su,this.isPropagationStopped=su,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=mt(er),Ur=U({},er,{view:0,detail:0}),wf=mt(Ur),$l,Yl,Fr,Qo=U({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?($l=e.screenX-Fr.screenX,Yl=e.screenY-Fr.screenY):Yl=$l=0,Fr=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),au=mt(Qo),Sf=U({},Qo,{dataTransfer:0}),Tf=mt(Sf),Ef=U({},Ur,{relatedTarget:0}),Wl=mt(Ef),Nf=U({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=mt(Nf),If=U({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kf=mt(If),Cf=U({},er,{data:0}),cu=mt(Cf),jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mf[e])?!!t[e]:!1}function Ql(){return Of}var Lf=U({},Ur,{key:function(e){if(e.key){var t=jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=mt(Lf),Gf=U({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=mt(Gf),_f=U({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Hf=mt(_f),zf=U({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=mt(zf),Bf=U({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=mt(Bf),Ff=[9,13,27,32],Zl=y&&"CompositionEvent"in window,Vr=null;y&&"documentMode"in document&&(Vr=document.documentMode);var Vf=y&&"TextEvent"in window&&!Vr,du=y&&(!Zl||Vr&&8<Vr&&11>=Vr),fu=" ",pu=!1;function hu(e,t){switch(e){case"keyup":return Ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function $f(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(pu=!0,fu);case"textInput":return e=t.data,e===fu&&pu?null:e;default:return null}}function Yf(e,t){if(tr)return e==="compositionend"||!Zl&&hu(e,t)?(e=lu(),$o=Fl=an=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wf[e.type]:t==="textarea"}function vu(e,t,r,o){_c(o),t=Jo(t,"onChange"),0<t.length&&(r=new Vl("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var $r=null,Yr=null;function Qf(e){bu(e,0)}function Zo(e){var t=lr(e);if(kt(t))return e}function Zf(e,t){if(e==="change")return t}var yu=!1;if(y){var ql;if(y){var Kl="oninput"in document;if(!Kl){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),Kl=typeof xu.oninput=="function"}ql=Kl}else ql=!1;yu=ql&&(!document.documentMode||9<document.documentMode)}function Au(){$r&&($r.detachEvent("onpropertychange",wu),Yr=$r=null)}function wu(e){if(e.propertyName==="value"&&Zo(Yr)){var t=[];vu(t,Yr,e,jl(e)),Bc(Qf,t)}}function qf(e,t,r){e==="focusin"?(Au(),$r=t,Yr=r,$r.attachEvent("onpropertychange",wu)):e==="focusout"&&Au()}function Kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Yr)}function Xf(e,t){if(e==="click")return Zo(t)}function Jf(e,t){if(e==="input"||e==="change")return Zo(t)}function ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:ep;function Wr(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!v.call(t,s)||!jt(e[s],t[s]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var r=Su(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Su(r)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Mo(e.document)}return t}function Xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tp(e){var t=Nu(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Eu(r.ownerDocument.documentElement,r)){if(o!==null&&Xl(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=Tu(r,a);var f=Tu(r,o);s&&f&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=y&&"documentMode"in document&&11>=document.documentMode,nr=null,Jl=null,Qr=null,es=!1;function Ru(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;es||nr==null||nr!==Mo(o)||(o=nr,"selectionStart"in o&&Xl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qr&&Wr(Qr,o)||(Qr=o,o=Jo(Jl,"onSelect"),0<o.length&&(t=new Vl("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=nr)))}function qo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var rr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},ts={},Iu={};y&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Ko(e){if(ts[e])return ts[e];if(!rr[e])return e;var t=rr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Iu)return ts[e]=t[r];return e}var ku=Ko("animationend"),Cu=Ko("animationiteration"),ju=Ko("animationstart"),Du=Ko("transitionend"),Mu=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Mu.set(e,t),p(t,[e])}for(var ns=0;ns<Ou.length;ns++){var rs=Ou[ns],rp=rs.toLowerCase(),op=rs[0].toUpperCase()+rs.slice(1);cn(rp,"on"+op)}cn(ku,"onAnimationEnd"),cn(Cu,"onAnimationIteration"),cn(ju,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(Du,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Lu(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,nf(o,t,void 0,e),e.currentTarget=null}function bu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var f=o.length-1;0<=f;f--){var m=o[f],A=m.instance,C=m.currentTarget;if(m=m.listener,A!==a&&s.isPropagationStopped())break e;Lu(s,m,C),a=A}else for(f=0;f<o.length;f++){if(m=o[f],A=m.instance,C=m.currentTarget,m=m.listener,A!==a&&s.isPropagationStopped())break e;Lu(s,m,C),a=A}}}if(bo)throw e=Ll,bo=!1,Ll=null,e}function Re(e,t){var r=t[ds];r===void 0&&(r=t[ds]=new Set);var o=e+"__bubble";r.has(o)||(Gu(t,e,2,!1),r.add(o))}function os(e,t,r){var o=0;t&&(o|=4),Gu(r,e,o,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Xo]){e[Xo]=!0,u.forEach(function(r){r!=="selectionchange"&&(ip.has(r)||os(r,!1,e),os(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,os("selectionchange",!1,t))}}function Gu(e,t,r,o){switch(iu(t)){case 1:var s=xf;break;case 4:s=Af;break;default:s=Bl}r=s.bind(null,t,r,e),s=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function is(e,t,r,o,s){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var m=o.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(f===4)for(f=o.return;f!==null;){var A=f.tag;if((A===3||A===4)&&(A=f.stateNode.containerInfo,A===s||A.nodeType===8&&A.parentNode===s))return;f=f.return}for(;m!==null;){if(f=Cn(m),f===null)return;if(A=f.tag,A===5||A===6){o=a=f;continue e}m=m.parentNode}}o=o.return}Bc(function(){var C=a,b=jl(r),_=[];e:{var L=Mu.get(e);if(L!==void 0){var $=Vl,X=e;switch(e){case"keypress":if(Yo(r)===0)break e;case"keydown":case"keyup":$=bf;break;case"focusin":X="focus",$=Wl;break;case"focusout":X="blur",$=Wl;break;case"beforeblur":case"afterblur":$=Wl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Hf;break;case ku:case Cu:case ju:$=Rf;break;case Du:$=Pf;break;case"scroll":$=wf;break;case"wheel":$=Uf;break;case"copy":case"cut":case"paste":$=kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=uu}var J=(t&4)!==0,Ge=!J&&e==="scroll",I=J?L!==null?L+"Capture":null:L;J=[];for(var E=C,k;E!==null;){k=E;var P=k.stateNode;if(k.tag===5&&P!==null&&(k=P,I!==null&&(P=Mr(E,I),P!=null&&J.push(Kr(E,P,k)))),Ge)break;E=E.return}0<J.length&&(L=new $(L,X,null,r,b),_.push({event:L,listeners:J}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",L&&r!==Cl&&(X=r.relatedTarget||r.fromElement)&&(Cn(X)||X[Yt]))break e;if(($||L)&&(L=b.window===b?b:(L=b.ownerDocument)?L.defaultView||L.parentWindow:window,$?(X=r.relatedTarget||r.toElement,$=C,X=X?Cn(X):null,X!==null&&(Ge=kn(X),X!==Ge||X.tag!==5&&X.tag!==6)&&(X=null)):($=null,X=C),$!==X)){if(J=au,P="onMouseLeave",I="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(J=uu,P="onPointerLeave",I="onPointerEnter",E="pointer"),Ge=$==null?L:lr($),k=X==null?L:lr(X),L=new J(P,E+"leave",$,r,b),L.target=Ge,L.relatedTarget=k,P=null,Cn(b)===C&&(J=new J(I,E+"enter",X,r,b),J.target=k,J.relatedTarget=Ge,P=J),Ge=P,$&&X)t:{for(J=$,I=X,E=0,k=J;k;k=or(k))E++;for(k=0,P=I;P;P=or(P))k++;for(;0<E-k;)J=or(J),E--;for(;0<k-E;)I=or(I),k--;for(;E--;){if(J===I||I!==null&&J===I.alternate)break t;J=or(J),I=or(I)}J=null}else J=null;$!==null&&_u(_,L,$,J,!1),X!==null&&Ge!==null&&_u(_,Ge,X,J,!0)}}e:{if(L=C?lr(C):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var ee=Zf;else if(mu(L))if(yu)ee=Jf;else{ee=Kf;var ie=qf}else($=L.nodeName)&&$.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=Xf);if(ee&&(ee=ee(e,C))){vu(_,ee,r,b);break e}ie&&ie(e,L,C),e==="focusout"&&(ie=L._wrapperState)&&ie.controlled&&L.type==="number"&&El(L,"number",L.value)}switch(ie=C?lr(C):window,e){case"focusin":(mu(ie)||ie.contentEditable==="true")&&(nr=ie,Jl=C,Qr=null);break;case"focusout":Qr=Jl=nr=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,Ru(_,r,b);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Ru(_,r,b)}var le;if(Zl)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else tr?hu(e,r)&&(ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ae="onCompositionStart");ae&&(du&&r.locale!=="ko"&&(tr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&tr&&(le=lu()):(an=b,Fl="value"in an?an.value:an.textContent,tr=!0)),ie=Jo(C,ae),0<ie.length&&(ae=new cu(ae,e,null,r,b),_.push({event:ae,listeners:ie}),le?ae.data=le:(le=gu(r),le!==null&&(ae.data=le)))),(le=Vf?$f(e,r):Yf(e,r))&&(C=Jo(C,"onBeforeInput"),0<C.length&&(b=new cu("onBeforeInput","beforeinput",null,r,b),_.push({event:b,listeners:C}),b.data=le))}bu(_,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Jo(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Mr(e,r),a!=null&&o.unshift(Kr(e,a,s)),a=Mr(e,t),a!=null&&o.push(Kr(e,a,s))),e=e.return}return o}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _u(e,t,r,o,s){for(var a=t._reactName,f=[];r!==null&&r!==o;){var m=r,A=m.alternate,C=m.stateNode;if(A!==null&&A===o)break;m.tag===5&&C!==null&&(m=C,s?(A=Mr(r,a),A!=null&&f.unshift(Kr(r,A,m))):s||(A=Mr(r,a),A!=null&&f.push(Kr(r,A,m)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var lp=/\r\n?/g,sp=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(sp,"")}function ei(e,t,r){if(t=Hu(t),Hu(e)!==t&&r)throw Error(l(425))}function ti(){}var ls=null,ss=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(up)}:cs;function up(e){setTimeout(function(){throw e})}function us(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),Br(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Br(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),zt="__reactFiber$"+ir,Xr="__reactProps$"+ir,Yt="__reactContainer$"+ir,ds="__reactEvents$"+ir,dp="__reactListeners$"+ir,fp="__reactHandles$"+ir;function Cn(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Yt]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Pu(e);e!==null;){if(r=e[zt])return r;e=Pu(e)}return t}e=r,r=e.parentNode}return null}function Jr(e){return e=e[zt]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function ni(e){return e[Xr]||null}var fs=[],sr=-1;function dn(e){return{current:e}}function Ie(e){0>sr||(e.current=fs[sr],fs[sr]=null,sr--)}function Ne(e,t){sr++,fs[sr]=e.current,e.current=t}var fn={},tt=dn(fn),ct=dn(!1),jn=fn;function ar(e,t){var r=e.type.contextTypes;if(!r)return fn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ut(e){return e=e.childContextTypes,e!=null}function ri(){Ie(ct),Ie(tt)}function Bu(e,t,r){if(tt.current!==fn)throw Error(l(168));Ne(tt,t),Ne(ct,r)}function Uu(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,Ae(e)||"Unknown",s));return U({},r,o)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,jn=tt.current,Ne(tt,e),Ne(ct,ct.current),!0}function Fu(e,t,r){var o=e.stateNode;if(!o)throw Error(l(169));r?(e=Uu(e,t,jn),o.__reactInternalMemoizedMergedChildContext=e,Ie(ct),Ie(tt),Ne(tt,e)):Ie(ct),Ne(ct,r)}var Wt=null,ii=!1,ps=!1;function Vu(e){Wt===null?Wt=[e]:Wt.push(e)}function pp(e){ii=!0,Vu(e)}function pn(){if(!ps&&Wt!==null){ps=!0;var e=0,t=Se;try{var r=Wt;for(Se=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Wt=null,ii=!1}catch(s){throw Wt!==null&&(Wt=Wt.slice(e+1)),Yc(bl,pn),s}finally{Se=t,ps=!1}}return null}var cr=[],ur=0,li=null,si=0,wt=[],St=0,Dn=null,Qt=1,Zt="";function Mn(e,t){cr[ur++]=si,cr[ur++]=li,li=e,si=t}function $u(e,t,r){wt[St++]=Qt,wt[St++]=Zt,wt[St++]=Dn,Dn=e;var o=Qt;e=Zt;var s=32-Ct(o)-1;o&=~(1<<s),r+=1;var a=32-Ct(t)+s;if(30<a){var f=s-s%5;a=(o&(1<<f)-1).toString(32),o>>=f,s-=f,Qt=1<<32-Ct(t)+s|r<<s|o,Zt=a+e}else Qt=1<<a|r<<s|o,Zt=e}function hs(e){e.return!==null&&(Mn(e,1),$u(e,1,0))}function gs(e){for(;e===li;)li=cr[--ur],cr[ur]=null,si=cr[--ur],cr[ur]=null;for(;e===Dn;)Dn=wt[--St],wt[St]=null,Zt=wt[--St],wt[St]=null,Qt=wt[--St],wt[St]=null}var vt=null,yt=null,je=!1,Dt=null;function Yu(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Wu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Dn!==null?{id:Qt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,yt=null,!0):!1;default:return!1}}function ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(je){var t=yt;if(t){var r=t;if(!Wu(e,t)){if(ms(e))throw Error(l(418));t=un(r.nextSibling);var o=vt;t&&Wu(e,t)?Yu(o,r):(e.flags=e.flags&-4097|2,je=!1,vt=e)}}else{if(ms(e))throw Error(l(418));e.flags=e.flags&-4097|2,je=!1,vt=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function ai(e){if(e!==vt)return!1;if(!je)return Qu(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=yt)){if(ms(e))throw Zu(),Error(l(418));for(;t;)Yu(e,t),t=un(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yt=un(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?un(e.stateNode.nextSibling):null;return!0}function Zu(){for(var e=yt;e;)e=un(e.nextSibling)}function dr(){yt=vt=null,je=!1}function ys(e){Dt===null?Dt=[e]:Dt.push(e)}var hp=F.ReactCurrentBatchConfig;function eo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var o=r.stateNode}if(!o)throw Error(l(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(f){var m=s.refs;f===null?delete m[a]:m[a]=f},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function Ku(e){function t(I,E){if(e){var k=I.deletions;k===null?(I.deletions=[E],I.flags|=16):k.push(E)}}function r(I,E){if(!e)return null;for(;E!==null;)t(I,E),E=E.sibling;return null}function o(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=wn(I,E),I.index=0,I.sibling=null,I}function a(I,E,k){return I.index=k,e?(k=I.alternate,k!==null?(k=k.index,k<E?(I.flags|=2,E):k):(I.flags|=2,E)):(I.flags|=1048576,E)}function f(I){return e&&I.alternate===null&&(I.flags|=2),I}function m(I,E,k,P){return E===null||E.tag!==6?(E=ca(k,I.mode,P),E.return=I,E):(E=s(E,k),E.return=I,E)}function A(I,E,k,P){var ee=k.type;return ee===W?b(I,E,k.props.children,P,k.key):E!==null&&(E.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Ue&&qu(ee)===E.type)?(P=s(E,k.props),P.ref=eo(I,E,k),P.return=I,P):(P=Oi(k.type,k.key,k.props,null,I.mode,P),P.ref=eo(I,E,k),P.return=I,P)}function C(I,E,k,P){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=ua(k,I.mode,P),E.return=I,E):(E=s(E,k.children||[]),E.return=I,E)}function b(I,E,k,P,ee){return E===null||E.tag!==7?(E=Pn(k,I.mode,P,ee),E.return=I,E):(E=s(E,k),E.return=I,E)}function _(I,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ca(""+E,I.mode,k),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:return k=Oi(E.type,E.key,E.props,null,I.mode,k),k.ref=eo(I,null,E),k.return=I,k;case K:return E=ua(E,I.mode,k),E.return=I,E;case Ue:var P=E._init;return _(I,P(E._payload),k)}if(Cr(E)||Y(E))return E=Pn(E,I.mode,k,null),E.return=I,E;ci(I,E)}return null}function L(I,E,k,P){var ee=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return ee!==null?null:m(I,E,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:return k.key===ee?A(I,E,k,P):null;case K:return k.key===ee?C(I,E,k,P):null;case Ue:return ee=k._init,L(I,E,ee(k._payload),P)}if(Cr(k)||Y(k))return ee!==null?null:b(I,E,k,P,null);ci(I,k)}return null}function $(I,E,k,P,ee){if(typeof P=="string"&&P!==""||typeof P=="number")return I=I.get(k)||null,m(E,I,""+P,ee);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ne:return I=I.get(P.key===null?k:P.key)||null,A(E,I,P,ee);case K:return I=I.get(P.key===null?k:P.key)||null,C(E,I,P,ee);case Ue:var ie=P._init;return $(I,E,k,ie(P._payload),ee)}if(Cr(P)||Y(P))return I=I.get(k)||null,b(E,I,P,ee,null);ci(E,P)}return null}function X(I,E,k,P){for(var ee=null,ie=null,le=E,ae=E=0,We=null;le!==null&&ae<k.length;ae++){le.index>ae?(We=le,le=null):We=le.sibling;var ve=L(I,le,k[ae],P);if(ve===null){le===null&&(le=We);break}e&&le&&ve.alternate===null&&t(I,le),E=a(ve,E,ae),ie===null?ee=ve:ie.sibling=ve,ie=ve,le=We}if(ae===k.length)return r(I,le),je&&Mn(I,ae),ee;if(le===null){for(;ae<k.length;ae++)le=_(I,k[ae],P),le!==null&&(E=a(le,E,ae),ie===null?ee=le:ie.sibling=le,ie=le);return je&&Mn(I,ae),ee}for(le=o(I,le);ae<k.length;ae++)We=$(le,I,ae,k[ae],P),We!==null&&(e&&We.alternate!==null&&le.delete(We.key===null?ae:We.key),E=a(We,E,ae),ie===null?ee=We:ie.sibling=We,ie=We);return e&&le.forEach(function(Sn){return t(I,Sn)}),je&&Mn(I,ae),ee}function J(I,E,k,P){var ee=Y(k);if(typeof ee!="function")throw Error(l(150));if(k=ee.call(k),k==null)throw Error(l(151));for(var ie=ee=null,le=E,ae=E=0,We=null,ve=k.next();le!==null&&!ve.done;ae++,ve=k.next()){le.index>ae?(We=le,le=null):We=le.sibling;var Sn=L(I,le,ve.value,P);if(Sn===null){le===null&&(le=We);break}e&&le&&Sn.alternate===null&&t(I,le),E=a(Sn,E,ae),ie===null?ee=Sn:ie.sibling=Sn,ie=Sn,le=We}if(ve.done)return r(I,le),je&&Mn(I,ae),ee;if(le===null){for(;!ve.done;ae++,ve=k.next())ve=_(I,ve.value,P),ve!==null&&(E=a(ve,E,ae),ie===null?ee=ve:ie.sibling=ve,ie=ve);return je&&Mn(I,ae),ee}for(le=o(I,le);!ve.done;ae++,ve=k.next())ve=$(le,I,ae,ve.value,P),ve!==null&&(e&&ve.alternate!==null&&le.delete(ve.key===null?ae:ve.key),E=a(ve,E,ae),ie===null?ee=ve:ie.sibling=ve,ie=ve);return e&&le.forEach(function(Wp){return t(I,Wp)}),je&&Mn(I,ae),ee}function Ge(I,E,k,P){if(typeof k=="object"&&k!==null&&k.type===W&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:e:{for(var ee=k.key,ie=E;ie!==null;){if(ie.key===ee){if(ee=k.type,ee===W){if(ie.tag===7){r(I,ie.sibling),E=s(ie,k.props.children),E.return=I,I=E;break e}}else if(ie.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Ue&&qu(ee)===ie.type){r(I,ie.sibling),E=s(ie,k.props),E.ref=eo(I,ie,k),E.return=I,I=E;break e}r(I,ie);break}else t(I,ie);ie=ie.sibling}k.type===W?(E=Pn(k.props.children,I.mode,P,k.key),E.return=I,I=E):(P=Oi(k.type,k.key,k.props,null,I.mode,P),P.ref=eo(I,E,k),P.return=I,I=P)}return f(I);case K:e:{for(ie=k.key;E!==null;){if(E.key===ie)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){r(I,E.sibling),E=s(E,k.children||[]),E.return=I,I=E;break e}else{r(I,E);break}else t(I,E);E=E.sibling}E=ua(k,I.mode,P),E.return=I,I=E}return f(I);case Ue:return ie=k._init,Ge(I,E,ie(k._payload),P)}if(Cr(k))return X(I,E,k,P);if(Y(k))return J(I,E,k,P);ci(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(r(I,E.sibling),E=s(E,k),E.return=I,I=E):(r(I,E),E=ca(k,I.mode,P),E.return=I,I=E),f(I)):r(I,E)}return Ge}var fr=Ku(!0),Xu=Ku(!1),ui=dn(null),di=null,pr=null,xs=null;function As(){xs=pr=di=null}function ws(e){var t=ui.current;Ie(ui),e._currentValue=t}function Ss(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function hr(e,t){di=e,xs=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(xs!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(di===null)throw Error(l(308));pr=e,di.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var On=null;function Ts(e){On===null?On=[e]:On.push(e)}function Ju(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,Ts(t)):(r.next=s.next,s.next=r),t.interleaved=r,qt(e,o)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var hn=!1;function Es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ge&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,qt(e,r)}return s=o.interleaved,s===null?(t.next=t,Ts(o)):(t.next=s.next,s.next=t),o.interleaved=t,qt(e,r)}function fi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Hl(e,r)}}function t0(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=f:a=a.next=f,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function pi(e,t,r,o){var s=e.updateQueue;hn=!1;var a=s.firstBaseUpdate,f=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var A=m,C=A.next;A.next=null,f===null?a=C:f.next=C,f=A;var b=e.alternate;b!==null&&(b=b.updateQueue,m=b.lastBaseUpdate,m!==f&&(m===null?b.firstBaseUpdate=C:m.next=C,b.lastBaseUpdate=A))}if(a!==null){var _=s.baseState;f=0,b=C=A=null,m=a;do{var L=m.lane,$=m.eventTime;if((o&L)===L){b!==null&&(b=b.next={eventTime:$,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var X=e,J=m;switch(L=t,$=r,J.tag){case 1:if(X=J.payload,typeof X=="function"){_=X.call($,_,L);break e}_=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,L=typeof X=="function"?X.call($,_,L):X,L==null)break e;_=U({},_,L);break e;case 2:hn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,L=s.effects,L===null?s.effects=[m]:L.push(m))}else $={eventTime:$,lane:L,tag:m.tag,payload:m.payload,callback:m.callback,next:null},b===null?(C=b=$,A=_):b=b.next=$,f|=L;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;L=m,m=L.next,L.next=null,s.lastBaseUpdate=L,s.shared.pending=null}}while(!0);if(b===null&&(A=_),s.baseState=A,s.firstBaseUpdate=C,s.lastBaseUpdate=b,t=s.shared.interleaved,t!==null){s=t;do f|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Gn|=f,e.lanes=f,e.memoizedState=_}}function n0(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var to={},Pt=dn(to),no=dn(to),ro=dn(to);function Ln(e){if(e===to)throw Error(l(174));return e}function Ns(e,t){switch(Ne(ro,t),Ne(no,e),Ne(Pt,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}Ie(Pt),Ne(Pt,t)}function gr(){Ie(Pt),Ie(no),Ie(ro)}function r0(e){Ln(ro.current);var t=Ln(Pt.current),r=Rl(t,e.type);t!==r&&(Ne(no,e),Ne(Pt,r))}function Rs(e){no.current===e&&(Ie(Pt),Ie(no))}var De=dn(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Is=[];function ks(){for(var e=0;e<Is.length;e++)Is[e]._workInProgressVersionPrimary=null;Is.length=0}var gi=F.ReactCurrentDispatcher,Cs=F.ReactCurrentBatchConfig,bn=0,Me=null,Fe=null,$e=null,mi=!1,oo=!1,io=0,gp=0;function nt(){throw Error(l(321))}function js(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function Ds(e,t,r,o,s,a){if(bn=a,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gi.current=e===null||e.memoizedState===null?xp:Ap,e=r(o,s),oo){a=0;do{if(oo=!1,io=0,25<=a)throw Error(l(301));a+=1,$e=Fe=null,t.updateQueue=null,gi.current=wp,e=r(o,s)}while(oo)}if(gi.current=xi,t=Fe!==null&&Fe.next!==null,bn=0,$e=Fe=Me=null,mi=!1,t)throw Error(l(300));return e}function Ms(){var e=io!==0;return io=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Me.memoizedState=$e=e:$e=$e.next=e,$e}function Et(){if(Fe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=$e===null?Me.memoizedState:$e.next;if(t!==null)$e=t,Fe=e;else{if(e===null)throw Error(l(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},$e===null?Me.memoizedState=$e=e:$e=$e.next=e}return $e}function lo(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=Fe,s=o.baseQueue,a=r.pending;if(a!==null){if(s!==null){var f=s.next;s.next=a.next,a.next=f}o.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,o=o.baseState;var m=f=null,A=null,C=a;do{var b=C.lane;if((bn&b)===b)A!==null&&(A=A.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var _={lane:b,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};A===null?(m=A=_,f=o):A=A.next=_,Me.lanes|=b,Gn|=b}C=C.next}while(C!==null&&C!==a);A===null?f=o:A.next=m,jt(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=A,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do a=s.lane,Me.lanes|=a,Gn|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ls(e){var t=Et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var f=s=s.next;do a=e(a,f.action),f=f.next;while(f!==s);jt(a,t.memoizedState)||(dt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function o0(){}function i0(e,t){var r=Me,o=Et(),s=t(),a=!jt(o.memoizedState,s);if(a&&(o.memoizedState=s,dt=!0),o=o.queue,bs(a0.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||$e!==null&&$e.memoizedState.tag&1){if(r.flags|=2048,so(9,s0.bind(null,r,o,s,t),void 0,null),Ye===null)throw Error(l(349));(bn&30)!==0||l0(r,t,s)}return s}function l0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function s0(e,t,r,o){t.value=r,t.getSnapshot=o,c0(t)&&u0(e)}function a0(e,t,r){return r(function(){c0(t)&&u0(e)})}function c0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function u0(e){var t=qt(e,1);t!==null&&bt(t,e,1,-1)}function d0(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=yp.bind(null,Me,e),[t.memoizedState,e]}function so(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function f0(){return Et().memoizedState}function vi(e,t,r,o){var s=Bt();Me.flags|=e,s.memoizedState=so(1|t,r,void 0,o===void 0?null:o)}function yi(e,t,r,o){var s=Et();o=o===void 0?null:o;var a=void 0;if(Fe!==null){var f=Fe.memoizedState;if(a=f.destroy,o!==null&&js(o,f.deps)){s.memoizedState=so(t,r,a,o);return}}Me.flags|=e,s.memoizedState=so(1|t,r,a,o)}function p0(e,t){return vi(8390656,8,e,t)}function bs(e,t){return yi(2048,8,e,t)}function h0(e,t){return yi(4,2,e,t)}function g0(e,t){return yi(4,4,e,t)}function m0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function v0(e,t,r){return r=r!=null?r.concat([e]):null,yi(4,4,m0.bind(null,t,e),r)}function Gs(){}function y0(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&js(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function x0(e,t){var r=Et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&js(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function A0(e,t,r){return(bn&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=r):(jt(r,t)||(r=qc(),Me.lanes|=r,Gn|=r,e.baseState=!0),t)}function mp(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var o=Cs.transition;Cs.transition={};try{e(!1),t()}finally{Se=r,Cs.transition=o}}function w0(){return Et().memoizedState}function vp(e,t,r){var o=xn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},S0(e))T0(t,r);else if(r=Ju(e,t,r,o),r!==null){var s=st();bt(r,e,o,s),E0(r,t,o)}}function yp(e,t,r){var o=xn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(S0(e))T0(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var f=t.lastRenderedState,m=a(f,r);if(s.hasEagerState=!0,s.eagerState=m,jt(m,f)){var A=t.interleaved;A===null?(s.next=s,Ts(t)):(s.next=A.next,A.next=s),t.interleaved=s;return}}catch{}finally{}r=Ju(e,t,s,o),r!==null&&(s=st(),bt(r,e,o,s),E0(r,t,o))}}function S0(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function T0(e,t){oo=mi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function E0(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Hl(e,r)}}var xi={readContext:Tt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},xp={readContext:Tt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:p0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,vi(4194308,4,m0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Bt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=vp.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:d0,useDebugValue:Gs,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=d0(!1),t=e[0];return e=mp.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Me,s=Bt();if(je){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ye===null)throw Error(l(349));(bn&30)!==0||l0(o,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,p0(a0.bind(null,o,a,e),[e]),o.flags|=2048,so(9,s0.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Ye.identifierPrefix;if(je){var r=Zt,o=Qt;r=(o&~(1<<32-Ct(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=io++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=gp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ap={readContext:Tt,useCallback:y0,useContext:Tt,useEffect:bs,useImperativeHandle:v0,useInsertionEffect:h0,useLayoutEffect:g0,useMemo:x0,useReducer:Os,useRef:f0,useState:function(){return Os(lo)},useDebugValue:Gs,useDeferredValue:function(e){var t=Et();return A0(t,Fe.memoizedState,e)},useTransition:function(){var e=Os(lo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:o0,useSyncExternalStore:i0,useId:w0,unstable_isNewReconciler:!1},wp={readContext:Tt,useCallback:y0,useContext:Tt,useEffect:bs,useImperativeHandle:v0,useInsertionEffect:h0,useLayoutEffect:g0,useMemo:x0,useReducer:Ls,useRef:f0,useState:function(){return Ls(lo)},useDebugValue:Gs,useDeferredValue:function(e){var t=Et();return Fe===null?t.memoizedState=e:A0(t,Fe.memoizedState,e)},useTransition:function(){var e=Ls(lo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:o0,useSyncExternalStore:i0,useId:w0,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _s(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:U({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ai={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=st(),s=xn(e),a=Kt(o,s);a.payload=t,r!=null&&(a.callback=r),t=gn(e,a,s),t!==null&&(bt(t,e,s,o),fi(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=st(),s=xn(e),a=Kt(o,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=gn(e,a,s),t!==null&&(bt(t,e,s,o),fi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),o=xn(e),s=Kt(r,o);s.tag=2,t!=null&&(s.callback=t),t=gn(e,s,o),t!==null&&(bt(t,e,o,r),fi(t,e,o))}};function N0(e,t,r,o,s,a,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,f):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,o)||!Wr(s,a):!0}function R0(e,t,r){var o=!1,s=fn,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(s=ut(t)?jn:tt.current,o=t.contextTypes,a=(o=o!=null)?ar(e,s):fn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function I0(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function Hs(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Es(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Tt(a):(a=ut(t)?jn:tt.current,s.context=ar(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_s(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ai.enqueueReplaceState(s,s.state,null),pi(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",o=t;do r+=ce(o),o=o.return;while(o);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function zs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ps(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sp=typeof WeakMap=="function"?WeakMap:Map;function k0(e,t,r){r=Kt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Ii||(Ii=!0,ta=o),Ps(e,t)},r}function C0(e,t,r){r=Kt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Ps(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ps(e,t),typeof o!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function j0(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Sp;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=Gp.bind(null,e,t,r),t.then(e,e))}function D0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function M0(e,t,r,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Kt(-1,1),t.tag=2,gn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Tp=F.ReactCurrentOwner,dt=!1;function lt(e,t,r,o){t.child=e===null?Xu(t,null,r,o):fr(t,e.child,r,o)}function O0(e,t,r,o,s){r=r.render;var a=t.ref;return hr(t,s),o=Ds(e,t,r,o,a,s),r=Ms(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xt(e,t,s)):(je&&r&&hs(t),t.flags|=1,lt(e,t,o,s),t.child)}function L0(e,t,r,o,s){if(e===null){var a=r.type;return typeof a=="function"&&!aa(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,b0(e,t,a,o,s)):(e=Oi(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var f=a.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(f,o)&&e.ref===t.ref)return Xt(e,t,s)}return t.flags|=1,e=wn(a,o),e.ref=t.ref,e.return=t,t.child=e}function b0(e,t,r,o,s){if(e!==null){var a=e.memoizedProps;if(Wr(a,o)&&e.ref===t.ref)if(dt=!1,t.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,Xt(e,t,s)}return Bs(e,t,r,o,s)}function G0(e,t,r){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(yr,xt),xt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(yr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,Ne(yr,xt),xt|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,Ne(yr,xt),xt|=o;return lt(e,t,s,r),t.child}function _0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,r,o,s){var a=ut(r)?jn:tt.current;return a=ar(t,a),hr(t,s),r=Ds(e,t,r,o,a,s),o=Ms(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Xt(e,t,s)):(je&&o&&hs(t),t.flags|=1,lt(e,t,r,s),t.child)}function H0(e,t,r,o,s){if(ut(r)){var a=!0;oi(t)}else a=!1;if(hr(t,s),t.stateNode===null)Si(e,t),R0(t,r,o),Hs(t,r,o,s),o=!0;else if(e===null){var f=t.stateNode,m=t.memoizedProps;f.props=m;var A=f.context,C=r.contextType;typeof C=="object"&&C!==null?C=Tt(C):(C=ut(r)?jn:tt.current,C=ar(t,C));var b=r.getDerivedStateFromProps,_=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function";_||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==o||A!==C)&&I0(t,f,o,C),hn=!1;var L=t.memoizedState;f.state=L,pi(t,o,f,s),A=t.memoizedState,m!==o||L!==A||ct.current||hn?(typeof b=="function"&&(_s(t,r,b,o),A=t.memoizedState),(m=hn||N0(t,r,m,o,L,A,C))?(_||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=A),f.props=o,f.state=A,f.context=C,o=m):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,e0(e,t),m=t.memoizedProps,C=t.type===t.elementType?m:Mt(t.type,m),f.props=C,_=t.pendingProps,L=f.context,A=r.contextType,typeof A=="object"&&A!==null?A=Tt(A):(A=ut(r)?jn:tt.current,A=ar(t,A));var $=r.getDerivedStateFromProps;(b=typeof $=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==_||L!==A)&&I0(t,f,o,A),hn=!1,L=t.memoizedState,f.state=L,pi(t,o,f,s);var X=t.memoizedState;m!==_||L!==X||ct.current||hn?(typeof $=="function"&&(_s(t,r,$,o),X=t.memoizedState),(C=hn||N0(t,r,C,o,L,X,A)||!1)?(b||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,X,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,X,A)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=X),f.props=o,f.state=X,f.context=A,o=C):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),o=!1)}return Us(e,t,r,o,a,s)}function Us(e,t,r,o,s,a){_0(e,t);var f=(t.flags&128)!==0;if(!o&&!f)return s&&Fu(t,r,!1),Xt(e,t,a);o=t.stateNode,Tp.current=t;var m=f&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&f?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,m,a)):lt(e,t,m,a),t.memoizedState=o.state,s&&Fu(t,r,!0),t.child}function z0(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),Ns(e,t.containerInfo)}function P0(e,t,r,o,s){return dr(),ys(s),t.flags|=256,lt(e,t,r,o),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function Vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function B0(e,t,r){var o=t.pendingProps,s=De.current,a=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ne(De,s&1),e===null)return vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=o.children,e=o.fallback,a?(o=t.mode,a=t.child,f={mode:"hidden",children:f},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=f):a=Li(f,o,0,null),e=Pn(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Vs(r),t.memoizedState=Fs,e):$s(t,f));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return Ep(e,t,f,o,m,s,r);if(a){a=o.fallback,f=t.mode,s=e.child,m=s.sibling;var A={mode:"hidden",children:o.children};return(f&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=A,t.deletions=null):(o=wn(s,A),o.subtreeFlags=s.subtreeFlags&14680064),m!==null?a=wn(m,a):(a=Pn(a,f,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,f=e.child.memoizedState,f=f===null?Vs(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},a.memoizedState=f,a.childLanes=e.childLanes&~r,t.memoizedState=Fs,o}return a=e.child,e=a.sibling,o=wn(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function $s(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,r,o){return o!==null&&ys(o),fr(t,e.child,null,r),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ep(e,t,r,o,s,a,f){if(r)return t.flags&256?(t.flags&=-257,o=zs(Error(l(422))),wi(e,t,f,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=Li({mode:"visible",children:o.children},s,0,null),a=Pn(a,s,f,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&fr(t,e.child,null,f),t.child.memoizedState=Vs(f),t.memoizedState=Fs,a);if((t.mode&1)===0)return wi(e,t,f,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;return o=m,a=Error(l(419)),o=zs(a,o,void 0),wi(e,t,f,o)}if(m=(f&e.childLanes)!==0,dt||m){if(o=Ye,o!==null){switch(f&-f){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|f))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,qt(e,s),bt(o,e,s,-1))}return sa(),o=zs(Error(l(421))),wi(e,t,f,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,yt=un(s.nextSibling),vt=t,je=!0,Dt=null,e!==null&&(wt[St++]=Qt,wt[St++]=Zt,wt[St++]=Dn,Qt=e.id,Zt=e.overflow,Dn=t),t=$s(t,o.children),t.flags|=4096,t)}function U0(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ss(e.return,t,r)}function Ys(e,t,r,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=s)}function F0(e,t,r){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(lt(e,t,o.children,r),o=De.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,r,t);else if(e.tag===19)U0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ne(De,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&hi(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Ys(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hi(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Ys(t,!0,r,null,a);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Np(e,t,r){switch(t.tag){case 3:z0(t),dr();break;case 5:r0(t);break;case 1:ut(t.type)&&oi(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;Ne(ui,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ne(De,De.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?B0(e,t,r):(Ne(De,De.current&1),e=Xt(e,t,r),e!==null?e.sibling:null);Ne(De,De.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return F0(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(De,De.current),o)break;return null;case 22:case 23:return t.lanes=0,G0(e,t,r)}return Xt(e,t,r)}var V0,Ws,$0,Y0;V0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ws=function(){},$0=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Ln(Pt.current);var a=null;switch(r){case"input":s=Sl(e,s),o=Sl(e,o),a=[];break;case"select":s=U({},s,{value:void 0}),o=U({},o,{value:void 0}),a=[];break;case"textarea":s=Nl(e,s),o=Nl(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ti)}Il(r,o);var f;r=null;for(C in s)if(!o.hasOwnProperty(C)&&s.hasOwnProperty(C)&&s[C]!=null)if(C==="style"){var m=s[C];for(f in m)m.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?a||(a=[]):(a=a||[]).push(C,null));for(C in o){var A=o[C];if(m=s!=null?s[C]:void 0,o.hasOwnProperty(C)&&A!==m&&(A!=null||m!=null))if(C==="style")if(m){for(f in m)!m.hasOwnProperty(f)||A&&A.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in A)A.hasOwnProperty(f)&&m[f]!==A[f]&&(r||(r={}),r[f]=A[f])}else r||(a||(a=[]),a.push(C,r)),r=A;else C==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,m=m?m.__html:void 0,A!=null&&m!==A&&(a=a||[]).push(C,A)):C==="children"?typeof A!="string"&&typeof A!="number"||(a=a||[]).push(C,""+A):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(A!=null&&C==="onScroll"&&Re("scroll",e),a||m===A||(a=[])):(a=a||[]).push(C,A))}r&&(a=a||[]).push("style",r);var C=a;(t.updateQueue=C)&&(t.flags|=4)}},Y0=function(e,t,r,o){r!==o&&(t.flags|=4)};function ao(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Rp(e,t,r){var o=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return ut(t.type)&&ri(),rt(t),null;case 3:return o=t.stateNode,gr(),Ie(ct),Ie(tt),ks(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&(oa(Dt),Dt=null))),Ws(e,t),rt(t),null;case 5:Rs(t);var s=Ln(ro.current);if(r=t.type,e!==null&&t.stateNode!=null)$0(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return rt(t),null}if(e=Ln(Pt.current),ai(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[zt]=t,o[Xr]=a,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",o),Re("close",o);break;case"iframe":case"object":case"embed":Re("load",o);break;case"video":case"audio":for(s=0;s<Zr.length;s++)Re(Zr[s],o);break;case"source":Re("error",o);break;case"img":case"image":case"link":Re("error",o),Re("load",o);break;case"details":Re("toggle",o);break;case"input":Rc(o,a),Re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Re("invalid",o);break;case"textarea":Cc(o,a),Re("invalid",o)}Il(r,a),s=null;for(var f in a)if(a.hasOwnProperty(f)){var m=a[f];f==="children"?typeof m=="string"?o.textContent!==m&&(a.suppressHydrationWarning!==!0&&ei(o.textContent,m,e),s=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&ei(o.textContent,m,e),s=["children",""+m]):d.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&Re("scroll",o)}switch(r){case"input":$t(o),kc(o,a,!0);break;case"textarea":$t(o),Dc(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ti)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{f=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=f.createElement(r,{is:o.is}):(e=f.createElement(r),r==="select"&&(f=e,o.multiple?f.multiple=!0:o.size&&(f.size=o.size))):e=f.createElementNS(e,r),e[zt]=t,e[Xr]=o,V0(e,t,!1,!1),t.stateNode=e;e:{switch(f=kl(r,o),r){case"dialog":Re("cancel",e),Re("close",e),s=o;break;case"iframe":case"object":case"embed":Re("load",e),s=o;break;case"video":case"audio":for(s=0;s<Zr.length;s++)Re(Zr[s],e);s=o;break;case"source":Re("error",e),s=o;break;case"img":case"image":case"link":Re("error",e),Re("load",e),s=o;break;case"details":Re("toggle",e),s=o;break;case"input":Rc(e,o),s=Sl(e,o),Re("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=U({},o,{value:void 0}),Re("invalid",e);break;case"textarea":Cc(e,o),s=Nl(e,o),Re("invalid",e);break;default:s=o}Il(r,s),m=s;for(a in m)if(m.hasOwnProperty(a)){var A=m[a];a==="style"?bc(e,A):a==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Oc(e,A)):a==="children"?typeof A=="string"?(r!=="textarea"||A!=="")&&jr(e,A):typeof A=="number"&&jr(e,""+A):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?A!=null&&a==="onScroll"&&Re("scroll",e):A!=null&&q(e,a,A,f))}switch(r){case"input":$t(e),kc(e,o,!1);break;case"textarea":$t(e),Dc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+he(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?qn(e,!!o.multiple,a,!1):o.defaultValue!=null&&qn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ti)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Y0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(r=Ln(ro.current),Ln(Pt.current),ai(t)){if(o=t.stateNode,r=t.memoizedProps,o[zt]=t,(a=o.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:ei(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[zt]=t,t.stateNode=o}return rt(t),null;case 13:if(Ie(De),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zu(),dr(),t.flags|=98560,a=!1;else if(a=ai(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[zt]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Dt!==null&&(oa(Dt),Dt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(De.current&1)!==0?Ve===0&&(Ve=3):sa())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return gr(),Ws(e,t),e===null&&qr(t.stateNode.containerInfo),rt(t),null;case 10:return ws(t.type._context),rt(t),null;case 17:return ut(t.type)&&ri(),rt(t),null;case 19:if(Ie(De),a=t.memoizedState,a===null)return rt(t),null;if(o=(t.flags&128)!==0,f=a.rendering,f===null)if(o)ao(a,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=hi(e),f!==null){for(t.flags|=128,ao(a,!1),o=f.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,f=a.alternate,f===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=f.childLanes,a.lanes=f.lanes,a.child=f.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=f.memoizedProps,a.memoizedState=f.memoizedState,a.updateQueue=f.updateQueue,a.type=f.type,e=f.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ne(De,De.current&1|2),t.child}e=e.sibling}a.tail!==null&&be()>xr&&(t.flags|=128,o=!0,ao(a,!1),t.lanes=4194304)}else{if(!o)if(e=hi(f),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ao(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!je)return rt(t),null}else 2*be()-a.renderingStartTime>xr&&r!==1073741824&&(t.flags|=128,o=!0,ao(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(r=a.last,r!==null?r.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=be(),t.sibling=null,r=De.current,Ne(De,o?r&1|2:r&1),t):(rt(t),null);case 22:case 23:return la(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(xt&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Ip(e,t){switch(gs(t),t.tag){case 1:return ut(t.type)&&ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),Ie(ct),Ie(tt),ks(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Rs(t),null;case 13:if(Ie(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(De),null;case 4:return gr(),null;case 10:return ws(t.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var Ti=!1,ot=!1,kp=typeof WeakSet=="function"?WeakSet:Set,Q=null;function vr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Le(e,t,o)}else r.current=null}function Qs(e,t,r){try{r()}catch(o){Le(e,t,o)}}var W0=!1;function Cp(e,t){if(ls=Fo,e=Nu(),Xl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var f=0,m=-1,A=-1,C=0,b=0,_=e,L=null;t:for(;;){for(var $;_!==r||s!==0&&_.nodeType!==3||(m=f+s),_!==a||o!==0&&_.nodeType!==3||(A=f+o),_.nodeType===3&&(f+=_.nodeValue.length),($=_.firstChild)!==null;)L=_,_=$;for(;;){if(_===e)break t;if(L===r&&++C===s&&(m=f),L===a&&++b===o&&(A=f),($=_.nextSibling)!==null)break;_=L,L=_.parentNode}_=$}r=m===-1||A===-1?null:{start:m,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(ss={focusedElem:e,selectionRange:r},Fo=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var J=X.memoizedProps,Ge=X.memoizedState,I=t.stateNode,E=I.getSnapshotBeforeUpdate(t.elementType===t.type?J:Mt(t.type,J),Ge);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(P){Le(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return X=W0,W0=!1,X}function co(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Qs(t,r,a)}s=s.next}while(s!==o)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Zs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Q0(e){var t=e.alternate;t!==null&&(e.alternate=null,Q0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Xr],delete t[ds],delete t[dp],delete t[fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z0(e){return e.tag===5||e.tag===3||e.tag===4}function q0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ti));else if(o!==4&&(e=e.child,e!==null))for(qs(e,t,r),e=e.sibling;e!==null;)qs(e,t,r),e=e.sibling}function Ks(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ks(e,t,r),e=e.sibling;e!==null;)Ks(e,t,r),e=e.sibling}var Je=null,Ot=!1;function mn(e,t,r){for(r=r.child;r!==null;)K0(e,t,r),r=r.sibling}function K0(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(_o,r)}catch{}switch(r.tag){case 5:ot||vr(r,t);case 6:var o=Je,s=Ot;Je=null,mn(e,t,r),Je=o,Ot=s,Je!==null&&(Ot?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Ot?(e=Je,r=r.stateNode,e.nodeType===8?us(e.parentNode,r):e.nodeType===1&&us(e,r),Br(e)):us(Je,r.stateNode));break;case 4:o=Je,s=Ot,Je=r.stateNode.containerInfo,Ot=!0,mn(e,t,r),Je=o,Ot=s;break;case 0:case 11:case 14:case 15:if(!ot&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,f=a.destroy;a=a.tag,f!==void 0&&((a&2)!==0||(a&4)!==0)&&Qs(r,t,f),s=s.next}while(s!==o)}mn(e,t,r);break;case 1:if(!ot&&(vr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){Le(r,t,m)}mn(e,t,r);break;case 21:mn(e,t,r);break;case 22:r.mode&1?(ot=(o=ot)||r.memoizedState!==null,mn(e,t,r),ot=o):mn(e,t,r);break;default:mn(e,t,r)}}function X0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new kp),t.forEach(function(o){var s=Hp.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Lt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var a=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 5:Je=m.stateNode,Ot=!1;break e;case 3:Je=m.stateNode.containerInfo,Ot=!0;break e;case 4:Je=m.stateNode.containerInfo,Ot=!0;break e}m=m.return}if(Je===null)throw Error(l(160));K0(a,f,s),Je=null,Ot=!1;var A=s.alternate;A!==null&&(A.return=null),s.return=null}catch(C){Le(s,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)J0(t,e),t=t.sibling}function J0(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Ut(e),o&4){try{co(3,e,e.return),Ei(3,e)}catch(J){Le(e,e.return,J)}try{co(5,e,e.return)}catch(J){Le(e,e.return,J)}}break;case 1:Lt(t,e),Ut(e),o&512&&r!==null&&vr(r,r.return);break;case 5:if(Lt(t,e),Ut(e),o&512&&r!==null&&vr(r,r.return),e.flags&32){var s=e.stateNode;try{jr(s,"")}catch(J){Le(e,e.return,J)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,f=r!==null?r.memoizedProps:a,m=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&Ic(s,a),kl(m,f);var C=kl(m,a);for(f=0;f<A.length;f+=2){var b=A[f],_=A[f+1];b==="style"?bc(s,_):b==="dangerouslySetInnerHTML"?Oc(s,_):b==="children"?jr(s,_):q(s,b,_,C)}switch(m){case"input":Tl(s,a);break;case"textarea":jc(s,a);break;case"select":var L=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var $=a.value;$!=null?qn(s,!!a.multiple,$,!1):L!==!!a.multiple&&(a.defaultValue!=null?qn(s,!!a.multiple,a.defaultValue,!0):qn(s,!!a.multiple,a.multiple?[]:"",!1))}s[Xr]=a}catch(J){Le(e,e.return,J)}}break;case 6:if(Lt(t,e),Ut(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(J){Le(e,e.return,J)}}break;case 3:if(Lt(t,e),Ut(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(J){Le(e,e.return,J)}break;case 4:Lt(t,e),Ut(e);break;case 13:Lt(t,e),Ut(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ea=be())),o&4&&X0(e);break;case 22:if(b=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(C=ot)||b,Lt(t,e),ot=C):Lt(t,e),Ut(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!b&&(e.mode&1)!==0)for(Q=e,b=e.child;b!==null;){for(_=Q=b;Q!==null;){switch(L=Q,$=L.child,L.tag){case 0:case 11:case 14:case 15:co(4,L,L.return);break;case 1:vr(L,L.return);var X=L.stateNode;if(typeof X.componentWillUnmount=="function"){o=L,r=L.return;try{t=o,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(J){Le(o,r,J)}}break;case 5:vr(L,L.return);break;case 22:if(L.memoizedState!==null){nd(_);continue}}$!==null?($.return=L,Q=$):nd(_)}b=b.sibling}e:for(b=null,_=e;;){if(_.tag===5){if(b===null){b=_;try{s=_.stateNode,C?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=_.stateNode,A=_.memoizedProps.style,f=A!=null&&A.hasOwnProperty("display")?A.display:null,m.style.display=Lc("display",f))}catch(J){Le(e,e.return,J)}}}else if(_.tag===6){if(b===null)try{_.stateNode.nodeValue=C?"":_.memoizedProps}catch(J){Le(e,e.return,J)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;b===_&&(b=null),_=_.return}b===_&&(b=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Lt(t,e),Ut(e),o&4&&X0(e);break;case 21:break;default:Lt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Z0(r)){var o=r;break e}r=r.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(jr(s,""),o.flags&=-33);var a=q0(e);Ks(e,a,s);break;case 3:case 4:var f=o.stateNode.containerInfo,m=q0(e);qs(e,m,f);break;default:throw Error(l(161))}}catch(A){Le(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,r){Q=e,ed(e)}function ed(e,t,r){for(var o=(e.mode&1)!==0;Q!==null;){var s=Q,a=s.child;if(s.tag===22&&o){var f=s.memoizedState!==null||Ti;if(!f){var m=s.alternate,A=m!==null&&m.memoizedState!==null||ot;m=Ti;var C=ot;if(Ti=f,(ot=A)&&!C)for(Q=s;Q!==null;)f=Q,A=f.child,f.tag===22&&f.memoizedState!==null?rd(s):A!==null?(A.return=f,Q=A):rd(s);for(;a!==null;)Q=a,ed(a),a=a.sibling;Q=s,Ti=m,ot=C}td(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,Q=a):td(e)}}function td(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||Ei(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ot)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Mt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&n0(t,a,o);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}n0(t,f,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&r.focus();break;case"img":A.src&&(r.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var b=C.memoizedState;if(b!==null){var _=b.dehydrated;_!==null&&Br(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ot||t.flags&512&&Zs(t)}catch(L){Le(t,t.return,L)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function nd(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function rd(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ei(4,t)}catch(A){Le(t,r,A)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(A){Le(t,s,A)}}var a=t.return;try{Zs(t)}catch(A){Le(t,a,A)}break;case 5:var f=t.return;try{Zs(t)}catch(A){Le(t,f,A)}}}catch(A){Le(t,t.return,A)}if(t===e){Q=null;break}var m=t.sibling;if(m!==null){m.return=t.return,Q=m;break}Q=t.return}}var Dp=Math.ceil,Ni=F.ReactCurrentDispatcher,Xs=F.ReactCurrentOwner,Nt=F.ReactCurrentBatchConfig,ge=0,Ye=null,ze=null,et=0,xt=0,yr=dn(0),Ve=0,uo=null,Gn=0,Ri=0,Js=0,fo=null,ft=null,ea=0,xr=1/0,Jt=null,Ii=!1,ta=null,vn=null,ki=!1,yn=null,Ci=0,po=0,na=null,ji=-1,Di=0;function st(){return(ge&6)!==0?be():ji!==-1?ji:ji=be()}function xn(e){return(e.mode&1)===0?1:(ge&2)!==0&&et!==0?et&-et:hp.transition!==null?(Di===0&&(Di=qc()),Di):(e=Se,e!==0||(e=window.event,e=e===void 0?16:iu(e.type)),e)}function bt(e,t,r,o){if(50<po)throw po=0,na=null,Error(l(185));Gr(e,r,o),((ge&2)===0||e!==Ye)&&(e===Ye&&((ge&2)===0&&(Ri|=r),Ve===4&&An(e,et)),pt(e,o),r===1&&ge===0&&(t.mode&1)===0&&(xr=be()+500,ii&&pn()))}function pt(e,t){var r=e.callbackNode;hf(e,t);var o=Po(e,e===Ye?et:0);if(o===0)r!==null&&Wc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Wc(r),t===1)e.tag===0?pp(id.bind(null,e)):Vu(id.bind(null,e)),cp(function(){(ge&6)===0&&pn()}),r=null;else{switch(Kc(o)){case 1:r=bl;break;case 4:r=Qc;break;case 16:r=Go;break;case 536870912:r=Zc;break;default:r=Go}r=pd(r,od.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function od(e,t){if(ji=-1,Di=0,(ge&6)!==0)throw Error(l(327));var r=e.callbackNode;if(Ar()&&e.callbackNode!==r)return null;var o=Po(e,e===Ye?et:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Mi(e,o);else{t=o;var s=ge;ge|=2;var a=sd();(Ye!==e||et!==t)&&(Jt=null,xr=be()+500,Hn(e,t));do try{Lp();break}catch(m){ld(e,m)}while(!0);As(),Ni.current=a,ge=s,ze!==null?t=0:(Ye=null,et=0,t=Ve)}if(t!==0){if(t===2&&(s=Gl(e),s!==0&&(o=s,t=ra(e,s))),t===1)throw r=uo,Hn(e,0),An(e,o),pt(e,be()),r;if(t===6)An(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Mp(s)&&(t=Mi(e,o),t===2&&(a=Gl(e),a!==0&&(o=a,t=ra(e,a))),t===1))throw r=uo,Hn(e,0),An(e,o),pt(e,be()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:zn(e,ft,Jt);break;case 3:if(An(e,o),(o&130023424)===o&&(t=ea+500-be(),10<t)){if(Po(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){st(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=cs(zn.bind(null,e,ft,Jt),t);break}zn(e,ft,Jt);break;case 4:if(An(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var f=31-Ct(o);a=1<<f,f=t[f],f>s&&(s=f),o&=~a}if(o=s,o=be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Dp(o/1960))-o,10<o){e.timeoutHandle=cs(zn.bind(null,e,ft,Jt),o);break}zn(e,ft,Jt);break;case 5:zn(e,ft,Jt);break;default:throw Error(l(329))}}}return pt(e,be()),e.callbackNode===r?od.bind(null,e):null}function ra(e,t){var r=fo;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=ft,ft=r,t!==null&&oa(t)),e}function oa(e){ft===null?ft=e:ft.push.apply(ft,e)}function Mp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],a=s.getSnapshot;s=s.value;try{if(!jt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Js,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ct(t),o=1<<r;e[r]=-1,t&=~o}}function id(e){if((ge&6)!==0)throw Error(l(327));Ar();var t=Po(e,0);if((t&1)===0)return pt(e,be()),null;var r=Mi(e,t);if(e.tag!==0&&r===2){var o=Gl(e);o!==0&&(t=o,r=ra(e,o))}if(r===1)throw r=uo,Hn(e,0),An(e,t),pt(e,be()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,ft,Jt),pt(e,be()),null}function ia(e,t){var r=ge;ge|=1;try{return e(t)}finally{ge=r,ge===0&&(xr=be()+500,ii&&pn())}}function _n(e){yn!==null&&yn.tag===0&&(ge&6)===0&&Ar();var t=ge;ge|=1;var r=Nt.transition,o=Se;try{if(Nt.transition=null,Se=1,e)return e()}finally{Se=o,Nt.transition=r,ge=t,(ge&6)===0&&pn()}}function la(){xt=yr.current,Ie(yr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ap(r)),ze!==null)for(r=ze.return;r!==null;){var o=r;switch(gs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ri();break;case 3:gr(),Ie(ct),Ie(tt),ks();break;case 5:Rs(o);break;case 4:gr();break;case 13:Ie(De);break;case 19:Ie(De);break;case 10:ws(o.type._context);break;case 22:case 23:la()}r=r.return}if(Ye=e,ze=e=wn(e.current,null),et=xt=t,Ve=0,uo=null,Js=Ri=Gn=0,ft=fo=null,On!==null){for(t=0;t<On.length;t++)if(r=On[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,a=r.pending;if(a!==null){var f=a.next;a.next=s,o.next=f}r.pending=o}On=null}return e}function ld(e,t){do{var r=ze;try{if(As(),gi.current=xi,mi){for(var o=Me.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}mi=!1}if(bn=0,$e=Fe=Me=null,oo=!1,io=0,Xs.current=null,r===null||r.return===null){Ve=1,uo=t,ze=null;break}e:{var a=e,f=r.return,m=r,A=t;if(t=et,m.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var C=A,b=m,_=b.tag;if((b.mode&1)===0&&(_===0||_===11||_===15)){var L=b.alternate;L?(b.updateQueue=L.updateQueue,b.memoizedState=L.memoizedState,b.lanes=L.lanes):(b.updateQueue=null,b.memoizedState=null)}var $=D0(f);if($!==null){$.flags&=-257,M0($,f,m,a,t),$.mode&1&&j0(a,C,t),t=$,A=C;var X=t.updateQueue;if(X===null){var J=new Set;J.add(A),t.updateQueue=J}else X.add(A);break e}else{if((t&1)===0){j0(a,C,t),sa();break e}A=Error(l(426))}}else if(je&&m.mode&1){var Ge=D0(f);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),M0(Ge,f,m,a,t),ys(mr(A,m));break e}}a=A=mr(A,m),Ve!==4&&(Ve=2),fo===null?fo=[a]:fo.push(a),a=f;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var I=k0(a,A,t);t0(a,I);break e;case 1:m=A;var E=a.type,k=a.stateNode;if((a.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(vn===null||!vn.has(k)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=C0(a,m,t);t0(a,P);break e}}a=a.return}while(a!==null)}cd(r)}catch(ee){t=ee,ze===r&&r!==null&&(ze=r=r.return);continue}break}while(!0)}function sd(){var e=Ni.current;return Ni.current=xi,e===null?xi:e}function sa(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ye===null||(Gn&268435455)===0&&(Ri&268435455)===0||An(Ye,et)}function Mi(e,t){var r=ge;ge|=2;var o=sd();(Ye!==e||et!==t)&&(Jt=null,Hn(e,t));do try{Op();break}catch(s){ld(e,s)}while(!0);if(As(),ge=r,Ni.current=o,ze!==null)throw Error(l(261));return Ye=null,et=0,Ve}function Op(){for(;ze!==null;)ad(ze)}function Lp(){for(;ze!==null&&!of();)ad(ze)}function ad(e){var t=fd(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?cd(e):ze=t,Xs.current=null}function cd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Rp(r,t,xt),r!==null){ze=r;return}}else{if(r=Ip(r,t),r!==null){r.flags&=32767,ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ve===0&&(Ve=5)}function zn(e,t,r){var o=Se,s=Nt.transition;try{Nt.transition=null,Se=1,bp(e,t,r,o)}finally{Nt.transition=s,Se=o}return null}function bp(e,t,r,o){do Ar();while(yn!==null);if((ge&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(gf(e,a),e===Ye&&(ze=Ye=null,et=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ki||(ki=!0,pd(Go,function(){return Ar(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Nt.transition,Nt.transition=null;var f=Se;Se=1;var m=ge;ge|=4,Xs.current=null,Cp(e,r),J0(r,e),tp(ss),Fo=!!ls,ss=ls=null,e.current=r,jp(r),lf(),ge=m,Se=f,Nt.transition=a}else e.current=r;if(ki&&(ki=!1,yn=e,Ci=s),a=e.pendingLanes,a===0&&(vn=null),cf(r.stateNode),pt(e,be()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ii)throw Ii=!1,e=ta,ta=null,e;return(Ci&1)!==0&&e.tag!==0&&Ar(),a=e.pendingLanes,(a&1)!==0?e===na?po++:(po=0,na=e):po=0,pn(),null}function Ar(){if(yn!==null){var e=Kc(Ci),t=Nt.transition,r=Se;try{if(Nt.transition=null,Se=16>e?16:e,yn===null)var o=!1;else{if(e=yn,yn=null,Ci=0,(ge&6)!==0)throw Error(l(331));var s=ge;for(ge|=4,Q=e.current;Q!==null;){var a=Q,f=a.child;if((Q.flags&16)!==0){var m=a.deletions;if(m!==null){for(var A=0;A<m.length;A++){var C=m[A];for(Q=C;Q!==null;){var b=Q;switch(b.tag){case 0:case 11:case 15:co(8,b,a)}var _=b.child;if(_!==null)_.return=b,Q=_;else for(;Q!==null;){b=Q;var L=b.sibling,$=b.return;if(Q0(b),b===C){Q=null;break}if(L!==null){L.return=$,Q=L;break}Q=$}}}var X=a.alternate;if(X!==null){var J=X.child;if(J!==null){X.child=null;do{var Ge=J.sibling;J.sibling=null,J=Ge}while(J!==null)}}Q=a}}if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,Q=f;else e:for(;Q!==null;){if(a=Q,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:co(9,a,a.return)}var I=a.sibling;if(I!==null){I.return=a.return,Q=I;break e}Q=a.return}}var E=e.current;for(Q=E;Q!==null;){f=Q;var k=f.child;if((f.subtreeFlags&2064)!==0&&k!==null)k.return=f,Q=k;else e:for(f=E;Q!==null;){if(m=Q,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Ei(9,m)}}catch(ee){Le(m,m.return,ee)}if(m===f){Q=null;break e}var P=m.sibling;if(P!==null){P.return=m.return,Q=P;break e}Q=m.return}}if(ge=s,pn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(_o,e)}catch{}o=!0}return o}finally{Se=r,Nt.transition=t}}return!1}function ud(e,t,r){t=mr(r,t),t=k0(e,t,1),e=gn(e,t,1),t=st(),e!==null&&(Gr(e,1,t),pt(e,t))}function Le(e,t,r){if(e.tag===3)ud(e,e,r);else for(;t!==null;){if(t.tag===3){ud(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vn===null||!vn.has(o))){e=mr(r,e),e=C0(t,e,1),t=gn(t,e,1),e=st(),t!==null&&(Gr(t,1,e),pt(t,e));break}}t=t.return}}function Gp(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(et&r)===r&&(Ve===4||Ve===3&&(et&130023424)===et&&500>be()-ea?Hn(e,0):Js|=r),pt(e,t)}function dd(e,t){t===0&&((e.mode&1)===0?t=1:(t=zo,zo<<=1,(zo&130023424)===0&&(zo=4194304)));var r=st();e=qt(e,t),e!==null&&(Gr(e,t,r),pt(e,r))}function _p(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),dd(e,r)}function Hp(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),dd(e,r)}var fd;fd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)dt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return dt=!1,Np(e,t,r);dt=(e.flags&131072)!==0}else dt=!1,je&&(t.flags&1048576)!==0&&$u(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Si(e,t),e=t.pendingProps;var s=ar(t,tt.current);hr(t,r),s=Ds(null,t,o,e,s,r);var a=Ms();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(o)?(a=!0,oi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Es(t),s.updater=Ai,t.stateNode=s,s._reactInternals=t,Hs(t,o,e,r),t=Us(null,t,o,!0,a,r)):(t.tag=0,je&&a&&hs(t),lt(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=Pp(o),e=Mt(o,e),s){case 0:t=Bs(null,t,o,e,r);break e;case 1:t=H0(null,t,o,e,r);break e;case 11:t=O0(null,t,o,e,r);break e;case 14:t=L0(null,t,o,Mt(o.type,e),r);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Mt(o,s),Bs(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Mt(o,s),H0(e,t,o,s,r);case 3:e:{if(z0(t),e===null)throw Error(l(387));o=t.pendingProps,a=t.memoizedState,s=a.element,e0(e,t),pi(t,o,null,r);var f=t.memoizedState;if(o=f.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=mr(Error(l(423)),t),t=P0(e,t,o,r,s);break e}else if(o!==s){s=mr(Error(l(424)),t),t=P0(e,t,o,r,s);break e}else for(yt=un(t.stateNode.containerInfo.firstChild),vt=t,je=!0,Dt=null,r=Xu(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),o===s){t=Xt(e,t,r);break e}lt(e,t,o,r)}t=t.child}return t;case 5:return r0(t),e===null&&vs(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,f=s.children,as(o,s)?f=null:a!==null&&as(o,a)&&(t.flags|=32),_0(e,t),lt(e,t,f,r),t.child;case 6:return e===null&&vs(t),null;case 13:return B0(e,t,r);case 4:return Ns(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=fr(t,null,o,r):lt(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Mt(o,s),O0(e,t,o,s,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,f=s.value,Ne(ui,o._currentValue),o._currentValue=f,a!==null)if(jt(a.value,f)){if(a.children===s.children&&!ct.current){t=Xt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){f=a.child;for(var A=m.firstContext;A!==null;){if(A.context===o){if(a.tag===1){A=Kt(-1,r&-r),A.tag=2;var C=a.updateQueue;if(C!==null){C=C.shared;var b=C.pending;b===null?A.next=A:(A.next=b.next,b.next=A),C.pending=A}}a.lanes|=r,A=a.alternate,A!==null&&(A.lanes|=r),Ss(a.return,r,t),m.lanes|=r;break}A=A.next}}else if(a.tag===10)f=a.type===t.type?null:a.child;else if(a.tag===18){if(f=a.return,f===null)throw Error(l(341));f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),Ss(f,r,t),f=a.sibling}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===t){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}lt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,hr(t,r),s=Tt(s),o=o(s),t.flags|=1,lt(e,t,o,r),t.child;case 14:return o=t.type,s=Mt(o,t.pendingProps),s=Mt(o.type,s),L0(e,t,o,s,r);case 15:return b0(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Mt(o,s),Si(e,t),t.tag=1,ut(o)?(e=!0,oi(t)):e=!1,hr(t,r),R0(t,o,s),Hs(t,o,s,r),Us(null,t,o,!0,e,r);case 19:return F0(e,t,r);case 22:return G0(e,t,r)}throw Error(l(156,t.tag))};function pd(e,t){return Yc(e,t)}function zp(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,o){return new zp(e,t,r,o)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===it)return 14}return 2}function wn(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Oi(e,t,r,o,s,a){var f=2;if(o=e,typeof e=="function")aa(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case W:return Pn(r.children,s,a,t);case xe:f=8,s|=8;break;case _e:return e=Rt(12,r,t,s|2),e.elementType=_e,e.lanes=a,e;case He:return e=Rt(13,r,t,s),e.elementType=He,e.lanes=a,e;case Be:return e=Rt(19,r,t,s),e.elementType=Be,e.lanes=a,e;case se:return Li(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:f=10;break e;case qe:f=9;break e;case Ke:f=11;break e;case it:f=14;break e;case Ue:f=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Rt(f,r,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function Pn(e,t,r,o){return e=Rt(7,e,o,t),e.lanes=r,e}function Li(e,t,r,o){return e=Rt(22,e,o,t),e.elementType=se,e.lanes=r,e.stateNode={isHidden:!1},e}function ca(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function ua(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function da(e,t,r,o,s,a,f,m,A){return e=new Bp(e,t,r,m,A),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Es(a),e}function Up(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function hd(e){if(!e)return fn;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(ut(r))return Uu(e,r,t)}return t}function gd(e,t,r,o,s,a,f,m,A){return e=da(r,o,!0,e,s,a,f,m,A),e.context=hd(null),r=e.current,o=st(),s=xn(r),a=Kt(o,s),a.callback=t??null,gn(r,a,s),e.current.lanes=s,Gr(e,s,o),pt(e,o),e}function bi(e,t,r,o){var s=t.current,a=st(),f=xn(s);return r=hd(r),t.context===null?t.context=r:t.pendingContext=r,t=Kt(a,f),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=gn(s,t,f),e!==null&&(bt(e,s,f,a),fi(e,s,f)),f}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fa(e,t){md(e,t),(e=e.alternate)&&md(e,t)}function Fp(){return null}var vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function pa(e){this._internalRoot=e}_i.prototype.render=pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));bi(e,t,null,null)},_i.prototype.unmount=pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){bi(null,e,null,null)}),t[Yt]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<sn.length&&t!==0&&t<sn[r].priority;r++);sn.splice(r,0,e),r===0&&ru(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function Vp(e,t,r,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var C=Gi(f);a.call(C)}}var f=gd(t,o,e,0,null,!1,!1,"",yd);return e._reactRootContainer=f,e[Yt]=f.current,qr(e.nodeType===8?e.parentNode:e),_n(),f}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var m=o;o=function(){var C=Gi(A);m.call(C)}}var A=da(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=A,e[Yt]=A.current,qr(e.nodeType===8?e.parentNode:e),_n(function(){bi(t,A,r,o)}),A}function zi(e,t,r,o,s){var a=r._reactRootContainer;if(a){var f=a;if(typeof s=="function"){var m=s;s=function(){var A=Gi(f);m.call(A)}}bi(t,f,e,s)}else f=Vp(r,t,e,s,o);return Gi(f)}Xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(Hl(t,r|1),pt(t,be()),(ge&6)===0&&(xr=be()+500,pn()))}break;case 13:_n(function(){var o=qt(e,1);if(o!==null){var s=st();bt(o,e,1,s)}}),fa(e,1)}},zl=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=st();bt(t,e,134217728,r)}fa(e,134217728)}},Jc=function(e){if(e.tag===13){var t=xn(e),r=qt(e,t);if(r!==null){var o=st();bt(r,e,t,o)}fa(e,t)}},eu=function(){return Se},tu=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},Dl=function(e,t,r){switch(t){case"input":if(Tl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=ni(o);if(!s)throw Error(l(90));kt(o),Tl(o,s)}}}break;case"textarea":jc(e,r);break;case"select":t=r.value,t!=null&&qn(e,!!r.multiple,t,!1)}},zc=ia,Pc=_n;var $p={usingClientEntryPoint:!1,Events:[Jr,lr,ni,_c,Hc,ia]},ho={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vc(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{_o=Pi.inject(Yp),Ht=Pi}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p,ht.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(l(200));return Up(e,t,null,r)},ht.createRoot=function(e,t){if(!ha(e))throw Error(l(299));var r=!1,o="",s=vd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=da(e,1,!1,null,null,r,!1,o,s),e[Yt]=t.current,qr(e.nodeType===8?e.parentNode:e),new pa(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Vc(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return _n(e)},ht.hydrate=function(e,t,r){if(!Hi(t))throw Error(l(200));return zi(null,e,t,!0,r)},ht.hydrateRoot=function(e,t,r){if(!ha(e))throw Error(l(405));var o=r!=null&&r.hydratedSources||null,s=!1,a="",f=vd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=gd(t,null,e,1,r??null,s,!1,a,f),e[Yt]=t.current,qr(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new _i(t)},ht.render=function(e,t,r){if(!Hi(t))throw Error(l(200));return zi(null,e,t,!1,r)},ht.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(l(40));return e._reactRootContainer?(_n(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1},ht.unstable_batchedUpdates=ia,ht.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Hi(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return zi(e,t,r,!1,o)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var zd;function o1(){if(zd)return wa.exports;zd=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),wa.exports=Bg(),wa.exports}var i1=o1();const Zn=n=>{const{title:i,open:l,padding:u="16px",closeOnBackdropClick:d=!0,theme:p="totamjung",portalTarget:h,onClose:y,children:v}=n,{modalRef:T,closeButtonRef:x}=vg(l);return gg({onEscKeyPress:y}),l&&i1.createPortal(c.jsxs(dg,{children:[c.jsx(fg,{onClick:()=>{d&&y()}}),c.jsxs(hg,{role:"dialog",$totamjungTheme:p,ref:T,children:[c.jsxs(W2,{children:[c.jsx(Q2,{children:i}),c.jsx(Z2,{onClick:y,"aria-label":"모달 닫기",ref:x,children:c.jsx(wg,{})})]}),c.jsx(q2,{$padding:u,children:v})]})]}),h??document.body)},jo=n=>{const{children:i,theme:l="totamjung"}=n;return c.jsx(pg,{$totamjungTheme:l,children:i})},Ug=g.button`
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
`,Fg=g.span`
  font-size: ${({$size:n})=>n==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,Vg=g.img`
  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  object-fit: contain;
`,$g=g.div`
  flex-shrink: 0;

  width: ${({$size:n})=>n==="large"?"30px":"24px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:n})=>n};
  }
`,Ce=n=>{const{name:i,size:l,width:u,color:d,iconSrc:p,...h}=n;return c.jsxs(Ug,{$size:l,$width:u,$color:d,...h,children:[p&&(typeof p=="string"?c.jsx(Vg,{src:p,alt:i,$size:l}):c.jsx($g,{$size:l,$color:d,children:p})),c.jsx(Fg,{$size:l,children:i})]})},Yg=g.div`
  width: ${({$width:n})=>n};
  max-width: 100%;
  min-height: ${({$height:n})=>n};
`,Wg=g.p`
  font-size: 16px;
  color: ${({theme:n,$totamjungTheme:i})=>So.includes(i)?n.color.BLACK:n.color.WHITE};
`,So=["none","solvedAcLight"],nn=n=>{const{title:i,width:l,height:u,open:d,message:p,actionType:h,portalTarget:y,theme:v="totamjung",closeOnBackdropClick:T=!0}=n;return c.jsxs(Zn,{title:i,open:d,closeOnBackdropClick:T,portalTarget:y,theme:v,onClose:()=>{h==="yesNo"?n.onNoSelect():n.onClose()},children:[c.jsx(Yg,{$width:l,$height:u,children:c.jsx(Wg,{$totamjungTheme:v,children:p})}),c.jsx(jo,{theme:v,children:h==="confirm"?c.jsx(Qg,{theme:v,onClose:n.onClose}):h==="cancelConfirm"?c.jsx(Zg,{theme:v,onClose:n.onClose,onConfirm:n.onConfirm}):c.jsx(qg,{theme:v,onYesSelect:n.onYesSelect,onNoSelect:n.onNoSelect})})]})},Qg=n=>{const{theme:i="totamjung",onClose:l}=n;return c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:So.includes(i)?z.color.DARK_GRAY:z.color.GOLD,disabled:!1,onClick:l,autoFocus:!0})},Zg=n=>{const{theme:i="totamjung",onClose:l,onConfirm:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:So.includes(i)?z.color.DARK_GRAY:z.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:So.includes(i)?z.color.DARK_GRAY:z.color.GOLD,disabled:!1,onClick:u})]})},qg=n=>{const{theme:i="totamjung",onYesSelect:l,onNoSelect:u}=n;return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:c.jsx(ko,{}),color:So.includes(i)?z.color.GREEN:z.color.LIME,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"아니요",size:"medium",iconSrc:c.jsx(Io,{}),color:z.color.RED,disabled:!1,onClick:u})]})},Kg=g.p`
  display: inline-block;

  width: ${({$width:n})=>n};

  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n}px;
  line-height: 1.2;

  ${({theme:n,$type:i,$color:l,$fontFamily:u,$fontWeight:d,$opacity:p})=>i==="primary"?re`
        font-family: Pretendard;
        color: ${n.color.GOLD};
        font-weight: 600;
      `:i==="semiPrimary"?re`
        font-family: Pretendard;
        color: ${n.color.LEMON};
      `:i==="normal"?re`
        font-family: Pretendard;
        color: ${n.color.WHITE};
      `:i==="gray"?re`
        font-family: Pretendard;
        color: ${n.color.LIGHT_GRAY};
      `:i==="black"?re`
        font-family: Pretendard;
        color: ${n.color.BLACK};
      `:i==="code"?re`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${n.color.WHITE};
      `:re`
      color: ${l??n.color.WHITE};
      font-family: ${u??"Pretendard"};
      font-weight: ${d??400};
      opacity: ${p??1};
    `}
`,Nn=n=>typeof n=="number"?`${n}px`:n,pe=n=>{const{type:i,fontSize:l,textAlign:u="left",width:d="100%",as:p="p",children:h}=n;return c.jsx(Kg,{as:p,$type:i,$fontSize:l,$textAlign:u,$width:Nn(d),$color:"color"in n?n.color:void 0,$fontFamily:"fontFamily"in n?n.fontFamily:void 0,$fontWeight:"fontWeight"in n?n.fontWeight:void 0,$opacity:"opacity"in n?n.opacity:1,children:h})},Xg=20,Jg=n=>{const{textList:i,typingTime:l,idleTime:u,erasingTime:d}=n,[p,h]=w.useState(""),[y,v]=w.useState(0),[T,x]=w.useState(Date.now()),[S,R]=w.useState(!1),j=l,D=l+u,G=l+u+d;return w.useEffect(()=>{if(!S||i.length===0)return;y>=i.length&&v(q=>Math.min(i.length-1,q));const V=setInterval(()=>{const q=Date.now(),F=q-T;if(F>=G){x(q),v(K=>(K+1)%i.length);return}if(F>=D){const K=i[y].length-Math.ceil((F-D)/d*i[y].length);h(i[y].slice(0,K));return}if(F>=j){h(i[y]);return}const ne=Math.ceil(F/l*i[y].length);h(i[y].slice(0,ne))},Xg);return()=>{clearInterval(V)}},[S,y,T,i,l,u,d]),{currentText:p,startTyping:()=>{x(Date.now()),h(""),v(0),R(!0)},stopTyping:()=>{h(""),v(0),R(!1)}}},em="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",tm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",nm="/assets/lock-with-clock-DphQokL3.png",l1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",rm="/assets/tier-1-badge-CyfFUTea.png",om="/assets/settings-title-BAsh2fbw.png",im="/assets/guidebook-button-DB51pF_8.png",lm="/assets/info-button-gVHj_-G9.png",sm="/assets/totamjung-BrXdXI1T.png",am="/assets/logo-square-Ly45EudP.png",cm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAAdVBMVEVHcEySZsyPZMeVbM2SZsySZsySZsyRaMmOY8iSZsyRZcyLYcWSZsySZsx2T6x2T6x0Tap0Tqt0TqqqjNiqjdiqjdiqjdioideYbs+lhNWSZsx0TqqOY8h9VbSIXsF4Ua+CWbuqjdj///+eeNLCquPw6vjg1PENK4ExAAAAGnRSTlMA2xsoxDzrBlZzqg72j8tvOe+M6smeDnT+U1ehgJkAAATFSURBVGjevVrneqMwEKQX0V3iRIDASS7v/4gngUAFuBix3P5zvoTxtpndJZYlWfi4Pq931zrVHk9mt1NR3m4DyPP+9h9Anh8nPNt1eEruHOQeQkM8btcbT7Zzv10ZyNUBBrnLyQ6dIffXDycBdeY6R8iJMuTZmFlgeyiLfQcKiafh+cjG50uW2ih2QXB4RX2leNUCFAEkyL0zmC/x2KbRcOwYACZ8yBhf399f+ASYN0887/nn8/NngYK96CiIH8wPe6cYn5/fK7nJjjkTIilYA8jPWgl4PpAj+P1nwxNW0EdCFsuP2sjJGLIIJFosYM/nO8bQKIne6Q3G4CiOjV832zD77h4Q7Dnne4IxMmLMxHsdgfJaGhu5kr2M0Xdd29hGw0z0MkZNrTULmPNivEjHQLom9Q+3/C8YFMTMlZdSP8SKWk9ZzKgl/V+ruGk5Rmtexr+gNDxUFGPgnMCs733vXxCTGxwD48yQweINZ5p+8kJgYNtUJt0Y2UGa0rnOs2cZI62AYDmf7ICyOL7vu06SOG6UDThEINQdkXny2Mw3/bWL6LjXCohekZngkOBLaHE6g2gQ1GILyDIeriUEjVcC5IobsMS3ZE2PUx/KFfQPxQeLl5+uN2dP4OK1zpwDjfVg9bUqApOqwMVrMcnMNEaO9qOW+hUI5kkAdbgo81UyHikGJl5hUXXNOAmRXmbKkcYQSLwKzrxEev7Axs0xvldiVY3Bb1SMdmLjNAJyhJURWYUw10d16ONKJUA6GQKm6ZNijBefVJZMCdP0ZZHneUBlvu3JGhdDNX3ixNBrxCq1BNt7F9i1UltclRtMZJ1IxYzwu64HKeLlMWHGGBqU2GB3xBXp4kTTpnDxyhaT6zxSIusEvscyXwKKSsn5fqEqgKJS5owkV0b8ERom9ZdpvdKEa1ojYigQ9qV7RVTEiA/S9SxcuqiIbQhIVazykle97IimKkBTnlMWAak3twgPqu3RoFyUrlRZYUrTYAQ0FkcpG7P14/eI3OAsOYu/5isFzVDmnMb3ZBqL2dFYiGTiRxm1yN/t38oRUVx02BCGIjcJw8TxY49LQ+DtPvFnGxhiuw88anZ65MSvSf1M9y3nTanspA9BHJq7MnPx2PvMq5kFlA87T5ZSVhYXnVaOWysc3D8xx7OidBrGqPitLP+1GYOG461S3iMmhlFBWqno9jNolGJ5jxB0r4DI7WMgBmzMa9bonqi13NdKVvDu3E+eKHSvgfDfmb8E2suTwwM1RREcpnyeQe2dczFtFtIvtohOzTT3TFTxXv1Cm0TZ6UPsjJruJkpvi/GlC+XYjzNIAHBC1rtvkSTbOo7Sa823ADEZmCN7jfL7zXIDOO033dIRFcRwmpHXorZeZGT64bFBtqw02pI4ZFFdpieFQhCwVq1Knxx6MzkO4UTkvSNaUYtSMH+Te5E5kvSLwZWvrUf8mEDqKvPSzfdfdAHHQXZgrxiPVFVhJREKNl7sNHSgKQ6f26oiHG7tMbLXzhVsEji2gF+qKi+F+OfsiMQSkw4veVCWdywrVXns3lKWiV5tXdei8SUPZR7map1DXdrH8HHZFzkY7nEFJIaV5ANGLpFUlFcXUEemcruoYxr0f6KFF82RM4wWWJ1v19JfPdhzw4aDNXYAAAAASUVORK5CYII=",um="/assets/wood-background-BTxo82aE.png",dm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAC4CAMAAACRpFNtAAAANlBMVEVHcEzQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3FD2FoDAAAAEXRSTlMAQgWMDvDi0HIZpVn6vCUwOp++H4kAAA8xSURBVHja7FwNk6yoDh0B+Qbp//9nnwhqgKA9LT1vt2qt2q17x7lqSE5yEkJ+fv67/rv+u/7yIoT8mz+fqWUyklKttXNaUyrNFBT7d6lABUmd4POrvOzMnZaT/3coiAWpRS3CLkn83yqNnNQ/XgrqOkIU8syC/oNlIV6+IcV+rbKEaxtjRv4/hCWT5tWncpFQLlfMUx1BY4tf4NpcgX+aX/TP4cQmPRfL7aiZvGKb593+I4z5YCr8WGf6iy5fL6H+XBvn51m+eiZFLjyaFhaKwvqCzNOfyhGAGKu53LpXogw9ZbFuwv8BXW/KPxRD0QMbs5PvBgllTulnvWDi6vWW/jOQECPO75l+E7hJOFdASNZqLd7lf+W4FN3Xld95U+Tyhyi2Ugrbbc8K8xdKmdyhjfDR+05RePHB5kSd8N83K8lv8PrGtexYmSmwouVwBrNm3zer/DIu2QiUWQfW3q+ObTO56etyeI2b9wOgiVDFkReHz/4OWIK7UwdRMZRHehJpigmedb8kK8VyU1KUFwdKMjR8A+bZHgQee9liaEmu1mREaNmLlrt6oSSeFxzFi5cbb2YTz2bl8ZTEcYtz3pW/LMjnEJbNaz4lIavOwacvc2loQ+Wg7TeR5Y7Mx/jfd4GzhCABkX21NGu+Y1ezJAgL5veJlUWjp+GVTrwAUv0Y+4x6BdpgbBG1FWAsOGcka0oS6w91MsKRCJrX58TJAn0vfUa9/GqoYml+VOGyZcEv7qjcMpL0byZjYkEC/gL1PUlCj0O6z5lX9IEvWliPxvUBWPCakpgC0mSZtisKAyh/47mD6LIS5eqw8kvLiu+FiRqhuByABbvGyaokxxSiMGcuYl2obTMtBkJLlnjnAdpZXAiYqCU6ZyucAxaMkAoSJniZ0681SslssU3WzSb9A7RLWwiycOxF/mDBmDsiaqov6ezOCSuzlzOi8DU/Tm8QRn2Kd6Vn8DKWnleBbhKXLLhSSBZlN0VX2n02XQgTJsXh8mIV6VNJprPSQWR6y4IFACTP6ylkvZbDOVQsJ68VgIkpA6wbkDQG3uqdJGPos2BUIbHQuCuST0iYArgOYrQgabFsCZAsx0xZV6XIFdjGoC0WkpIGTuNaWc9RDrNCD+DA0rYrkvXOu6k1rpBlI5c7Eyh1kmFSrFeqRaxebkQt328qLotmWQ4xXWCsY1nbneS2bRnMsRcl6cYQ+bxQCA0WfXXvQb21rHQnW2YZzFPQKMOi7ETKD8oE20cX5VgvMC/2hkIWslkWkKT4xESDSqeykaUhBTv6qklCpl0X+ugo5LCs6bCuEhLJPRaGFBPG0hzeLrCXxG9pn53Af1lpxhVyWtYmiW3WnzSrRjaX+QFFWXPPlcQuVwrBosp7Ctl81vlX3cKkXbYo2yekcTNJYLm+eXIOwZebMbhCNsvygEUiT6KNslf9fy7IWY6RjUKwqPKeQiKxhOElpHy9+OykEgju9SefCJLKGodGtrymUEhSEZ+ucYZevtFVgkltSWUmtVrARxs/ylBHl1JBsokql+jrKYRt+XhxJfIjG5OQRe72YRghoDSoazgiUQUpcN0FkZPVbwkgfBxrbOBnQOOEEnVQb50YwmnegjrwXIVK5K1v/+DaOIOdKoTYa+rTUcgG9droguEoCC0dKwit7UjehpCuQjzultsQqMfRxK5lpR9cv6Tg77Esn3uEWMcLNP52M4N5aAl+8yDQspKpmZsc+YSy3rJuuzUIyYVgRqcaf5sc/NAdarnlDMCy9L3LOle9rmpzirKWUPtb4l6Dd6iTtYIntk6srxCj2+I8IopCMCHvl+sTiMjaeqc3oB6kQLcWKBIkZW1b01OQqNjDB0pUm9Lhdycn9o7vNaKzSUJbV5ZirKkd8Odl0lT/BCxqUwCASAq69A2F9OSIZYSGtTSYIG+85439KFkqABjvGyuVfa/ub/foWiE7Jqo9kQdoT4KcH5pQSCuIcH8PdXmxCTcbIAhLtXhbgUTem/A1g+erv6dVwVdWz7+Mhsn39g1rIx8ljcQ0vcUv/nkPBwsGNrVuTgs8P3vjW6gHaq+2Ek/bCqqzYsv8PLaTynmAxzXv60G9UAiPDY4wNOpaIe0KqYduC9u1AqZba6gHdYgQq038YC8QQQKD4LbuXEMmKoc8gGkBS00aui8C0dqOPIHGpmF+goP7Dd3/OhkBTCFZ7nJLs4DvFWZbebjTMcvKsJA3Nf7yoSDVOt36khzVXa2QAJsJuGkUkjgJfPJYQZK3JdXr1G1GJUqNBAXDo9UgYSzR6OuICJXtPRsryAUp3TMqVwYNP6EKKeqLm9FeCLJQwbUfJAi5E0QVldC8X7ZGb4mRxsB+IcgiHoH/l6Z1ZFTQRbkV0xSLhr519H1B6H2R9lYQQSqwq7viSTAcCqJ+KGJYhUJ+QgX2JDstv4RPz9wv6wbIbvHkVImNjQTSXrosDH2V11rczPXnHa1NHOFXDAgWT/T+6duphACiCG1iSPynt3FETcuD8lAdN64ZECxZmdSGZp2JJgT5icMU0tDqwZE9rqQFkZxd+g5YsgqT1C6dJfk5OzDTNnCrkAwJ4G0Hc62UJkzvEYeqZBVOTLMAWKTDFNKk0Kp685AiiqmcoiO/qJPmMqkr3W/dSaTq6kOYh9YaG0u9SHXxPod981PORenBY2CE3/1GTv2rq853wtzVuLquW+/dvbSNIVhBrsmp2bMtkvp5qov2zh7VWbemYp7jKURMIU1B86f+weSe9dQYlF1j1Qd8S8TD7UQppZlQhfh6fWqb3v7+pMupaYw0r05s9z2FwDvh3Gxv1wtmnvV7N0t40lfeBI6lU/DvtDS1e4bGHKWTixK/qepcW6b8qO9MV/6WONy21DsKmeJBBqGbBq+0HdLsU8K3KOme9Z2ZVwUSfKMSh/pStQeY1DfXtKo1z8RKzOzZbkkDEs+xqiwOdVapameSHGvKhOu/pVljTyiwZu+IYk3svquQpdpRRxKktkNZvsaGw/O7fRWEq09hvXbSopXjTFKKbDmtVdHuO3znbf9uqOXc4xZuoR5qqANBfKMQWifwo0/rtqtTt0H1oO5rr3wKAh1pIgtFjJCvh1Gjb1uwuti2HfYVUtw5Mnl4UCC3eNOGcw8/dZz0TGtrK9qMe71y1Z39YAM8P5lqkK2tDT9VlRWAHCQ58H4B9eoOjUfiirPfqu1ySjG3qp6NUE/rHX3Zw+7fgvp+sKeYKJLXpGAKU2MCP8xQ+dwZJ75VqCTJloMJC+9E9bM7oFikuQmQidKXUI+/Jp7nvbLpmGOwO9Tf9vc2W4bH4vPGsHanSBrZnp8KT16keE42ruhGr1NcRLyfqqCLtmIXYYqM6kST3dZ4re47x2vgnKvhkLZ0MyO+V0WWxp+XInLMKh6UqglWK/9+01+Z4mY5yoXGXhWPBkkh5ADPJdszBPumoO53jl8rZHHYacBe1Z0oNcID5wM9xTsZBZuE7zX9QajnXa3qNGAKj/x7wx5yd/ZSGi7WJHNY1iXUidlPYRdyIOFx8JUDV9lGnJ1wHIuCtJMiUD8+ej+FWZ/ORMLj6Cv723KtWMaJdbK1rD7UyV5ArU+TI+Fx/JVeUvlytldCuTZ4WQ6But+5Y52757Dy5alB+7nN6jTnTs2toKYAdQ/q6ugQrDmHcq/RnYx4MEHPuB4zOaAofaifYjRDI3YvyL8+aSfgB7XP49O7KGlLpFUICVS8eqNhyLHPOMtvS7If1K4/YXL2PNG+yrKgUAdHwJFDsQRsBc3yyzNq8qK1EziU5MWsPLOopcpCtpOq9mjraL50P5Q4I9Fl/JXNGJklcs5mSiNdhHB6G1RD0/gK2IcmkMlZWQ7ntz/YmU7fneSUgzk2FcVT0YyYtG1DoBVIqrfb1eoS8x/XpfjuoLDsul4aeYu6H9a4hhuFKXo+j2eeDt2Fr+Bj8ZB719MB9iqEdN0pL3Y7rYCq2cJjpkyfHVLjobKuU67h7Dq5moHUDGWd+erNOse4F1dMpmKgIYePd8Qrj99J/E56u06SMD+ZODDTiXjFFlPT7Rk7hoVlOfIMspnfnPn/GBv8zHb2eWf2sg+MxImZjCnv/cV+LBhGMgEz42bR2dWrwZY1A3Z9UEVhni0Yga12cWpC1nb8Y/YAVg+UJA9qOs98n57l0fC2gwZvbtpy4zUYBLFPq9LjIsrekQiwd1BF/rHu2UmDTTJWLko3kpfLjZKETMccDIUY92eRi5mDoK1aha4KuMNJNDMDn5mWTMOLOKRA5wRQ+3tR1ClGosGnJMXQglyhcIO2SgjZwqCuGhZOE38JuvzC43t5TnXa95x3SapwvoyVZKsKWGTM2cnfcfKBKWNa+SVCg/PW7oKHy2E6MRZpniIAsNskmbuBv0TF1hpwlE/VFZR2m2qwJCve8aqZgof0Ip2aOkGcqUlqOPqQ06XdhkHOAKMV4ifVoF61CVh8FkbLNUvcxmLH8K7UEuLgtiopoQv6wbwniR0jCTF6uvJBczPGkK8sK14r26pnlHfmNU69CQy7TsIYz3V5N1Dx7uB4Kyg+NzbnVGLq6uQrCUrLY94Z5R8T+v+1dybIDYMwFPW+AF56/8vWMRJuGolkJob2e8IJ/EYIiS9ZjFplk45g4XtPtckLLLdpWJ3TIcyTpxX0QT4s3uUbwr5drIZdbgh+4dq22w6A2q7PKxyU/Qp+Tflkn3ec/HYLWW8DM/dly3UZX2228iROJ+nykryt0wgko1Hmj/7TNRvthCJrgZGIHm9cHpX7LBI1atD5nF7lPtlPBJuAkei7y9vEuaFBJ2FtuAYjKYV7d5tC8EruJ6VqE4NBUkVI7OmC1x/ZJAheCxSJlF2xTLRehaQvUUiclicu0xdSutLoJDyMHyTIU3YlkZC5WpAgP0ZIagcU5CvOeAVnSFELSr+7JJIq9BlAkQhuzUEeJKDQFhJvIVgBhTJe0SZrjxRQIiShf3hAIhFvhjMFFJBjmGwifS0HFJBjOELCHQwgNxSr39a5uaBG8JOKg4boC75YDhIZiUT2hb0XA0ZciZEMLsVfmGlJhE5EshYMSPgl6rczeG93Nc7L9qw7zEKUgXERjQSSIzyldKhaITvG4nhoGUKrmjwmvF6sH3E5mGQvarGYYhE5frRChFovJsfRCjFh1awlm9xNgyuKK5BgcxxN+rl6hhKS7IGwXwr41VgzmQtwFPePCaGjFJ/1WfnWNw9tf/5FurfGAAAAAElFTkSuQmCC",fm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACACAMAAADeUGBWAAAAPFBMVEVHcEzQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3HQr3FkF6GlAAAAE3RSTlMAGAUNjMr7Tzq8J/V47GOr1uGaL54SGAAACS5JREFUeNrFXOm6oyAMLYuAgLi9/7sOLiCVBKnXdvw1322rx5OThRDm9foPFyOa/ekGRDpJHgZFNW+bSdH7d1BtJ7pePQtLt7O/BvnHG8ytfpQsLra73raCM+sNhH0SFtnedTZ36aJ2u8HcPCkv0ux3vf2yAVanvsDWPN0VvTT7HdyT2poCrLtBQg9zvbgoUUoRWm8DTm87zW5EeQ3J9k3Xdc1kL6Gpse6mhTts8uxJGZKbmk7sHAgPzRWDOLPd4og8vSn9jDnZdqYQTynTjjdjgBQuMbZc4tCY65vWHqiYstyqj5Sm8ezDtOTtaGbwEmboHWpPRpJPCPfvJQbHHnAnb7l+6ObiJbqFNAhZ+je2R/3xr1FotVwn5pprJa3Igxz3l+D0LzRJi1oOpGxRmpW4e9r9/cTtOOZp8j63PAqBgDKIuyeNsCy9pyZPkyhYy3Pi9YYSKcbexzTAiLtCB/U0TSYGhM07cdIAHyDT+vXB0Tz80IsIPpYEPvI3US/hFXfSbjibU9tmHPJq1TPRc6cIFpsunU4M00nSZcc4m5NpletOt2YLzPYEeKVpqHM60/DzewXD4yGtlDzJFL/7Zl7iRVIZm4Ju7PmdKSkprZg81ZAY43AG1XeFCDk1BjaOy4I6U7h7CjzY7mXGKdCqppRPGNVygp7lnzPlKXQTKC40KBvqFEAItGxCaEqkuiAToG2AaqDozmYiQPWTvHVgK6UwPi2rVbyo+xGRGWCaxQdgc0J5x9cVMQDJcxEfftciRacvldoOykKQzJYFNWxOaHFG1eYuYrQMgWUaqynaD+AgB3k0S8x5/kFcBfkFwfEk7y58OoinZ1j+9SEtRw4crBsfzcAfaXu2fcuOanhAy2lpkMBEUWSgMSGZebvneWNfIG/RCi1xpEGcGafMP46D0Wzu+iNqLsRC8DdYIQCM8iNYqJPFoA7HDP86qwNgnwdYsT1hy7AMJBnYybYSHZfZwJ1t0Lfd2QqwXBnW4AsBU5WYL2OG/1UhoW6wQqU66AtYZCEeev2SMb2X88ZUZffmXfKkXx41OnoJa/MyU5mYk2g2XdREK+X81Koirm/x/uUbrBemVVE05lJeDqJUOfrv8KyDxgqV8hkWHphKxmRqggk7eOYfNfZyWChlmDFX5V9VGPQBWGswBCnLqiy2xQmBGi9cj8BCY7lIOVjqUbi06s680qdgbbEcfOpiTLKvE0FUwmYqfA7W2tWC9S+GYntCSKzd+AisTyLmZmIM1utpWIUqK3NU3v2MrXKVlejN12iq+yFbF1VWEmrDguVXbJXCbBL+Y3vf/YwtcGW2NjRI6JDSuMvjfslWzDXBmMPCEwV2eexv2dqf3u/P6E9RMxSdM/8DW0sP7has+OotBivfE6uF5T1rmpy9BctisCKN9CZbzC1eY0JF8hkshzyD9gjearaSbtd9WOcVQthBFBmsSrb2ru8RpN0nAwtu//GIwLrL1ltTKWlpVfbxpUD2kNE97zq21Ag2AJvSLlwNrEBj/vAqWBZvcdeQFmCZEywaPsiWpVVs0am41mymC9Jii0AiH+R7czWwYnxB97oW0th9WGca69iKKXVA+8IhC8PS7K5gyTts6aB4u+6NFDaUHKgzFBZaB1axFW/rtmUVvjfil18E/71AYbk7bLmTgzNPWo8sZQTQS9dYFRo/cHfY4kDyQDeUgNYYCiuIVtzRFpZR4Z0ykVcpsTg+Pz32RO94YnREYFSIaXkmrWevalL23fvpTk48HLGwpy/yDn8OywH1khFdr+9UpxL2l7QPtnQ9BAoeh/Wiylmod14BK9Yl6n0epn8LBrJDJc+a0rgXOD1SAYvntR9VvVna5BSPIpA468frrmGx3BGZHc5Dj5QjJWjKVjWsCrZyRyTcZBDiKqZlD8CqYCtkiEMZcYsl+VGITdAIXWGZep+tPM3bOWcGT2+lZeof2LJnR6R+GWTW6J6EqILiI1uCP8dWLE2Pb1Bl5QI2Zaag+K+wxaAOAl3BJoGM4SvR77AVHfFNy+tf2zrFf4WtuBhzWUJKIOTuCnnig2zB9bY9/SUqHtq2/QZbcEZsT+ouKf4rbIFfWC2b+EBR8d9gC36gO4UHMpSGyr/AFliarlhTq0bFg+nlC2zF0jSFtYaDlL79FAQyvf0FtiIP6WjEisK+KhX/DbZcLNKPkbf1XdLkV1b8N9jiyZKGpD9Kz73oouK/wBbt01E8dqyjRlcsyb7MFklH8bowHsGklQyofZCTLM+zFdfp60IQGS+OtQ/SgGYfH5W5YitmRLvS1ihwJ2FAF9Q3YV2xdRw0WtflIjs2RtMZEKRWD7DEx7AEDCstTV2XHVZZpm2TzUzs9NfnbOm2yD9LPmbbMiz0r2g+zDrqZ2BpG/mHDzwcXVO1tH3EFiYYUdIBh1Na9gQsYpujzwKfLIhxcsW1brGIru+bsUsmLcx8Uap/Aou4BBR24OGAteLSPTRExwW6Qf8pLOLat4YxcnAr7chvuEQ2Qh5PK6IHcg6F0itQJ11MSEqUyW5P4xWtw0iFGZt+Ow4DLCRvwcpBmQk9xSqTjcQlOxM7eECTlYqwzSHjrDr60Bi3CrC0O49NmLZ0TEu17/PpTGuy9QGXEGGnoz+JHhO6Zkun3rcHUlfeSk10fvTZmFbOIzLpzUyP3IlewAJADfbyFHKCq3Nbd9n2AzRIZ+DpZnyrfM1eGai5AlSaCpY5WHTmfo8XNh/DZD2aSmgS0eMzuK7MBkfVNQ5XM1DjpFglLAjUWAvq5I/Xw2Jd/1YkYrCo5tltB/7RmX3XfXCyZznHkqqfgr0oxcf5rvniTawpgAC2P5fjEAVYj4B6YUdpPKKWO6WJzI+qiGiQbC+LqWmc85Bw5xxilqZ3RPsWC1OZUITYj9yd2GIyO0ggGnv3f0tIwoSH5BOifh9+hgKQd0uv/je2yAJKPAVqTUPiOBTHwL0yl0+qe7cMA1yiZTr/xt9ALXzxZjVcYUeU5AbysT+Yt+EZn+Yq99X4I9GXIyJM5nLO/pFUCeRFXz+5vPMPVQcYTevI64cXqP58akL+FNRe1rXF0ebFE17/44LUf8wOS/b6TxfFgOU1xo8vKMs097LMV93SO59+/X9Ur7cp9dLBvP+j/rEbW/ufJQUAU1I9QdQ/65PRPTw+Zi4AAAAASUVORK5CYII=",pm=at`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,hm=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,gm=g.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme:n})=>n.gradient.BROWN_GRADIENT};

  z-index: 0;
`,mm=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,vm=g.img.attrs(({$scaleX:n,$scaleY:i})=>({style:{transform:`scale(${n}, ${i})`}}))`
  width: 160px;

  transform-origin: bottom;
`,ym=g.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme:n})=>n.color.GOLD};
`,xm=g.div`
  position: relative;

  text-align: center;
`,Am=g.span`
  margin: 0 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,wm=g.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme:n})=>n.color.LEMON};

  animation: ${pm} 0.8s infinite forwards;
`,Sm=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,Tm=g.span`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,Em=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`,pl=()=>{const[n,i]=w.useState(null);return{activeModalName:n,openModal:d=>{i(d)},closeModal:()=>{i(null)}}},Ea=20,Nm=n=>{const{onShowComplainModal:i}=n,[l,u]=w.useState(0),d=()=>{u(y=>{const v=y+1;return l===Ea&&i(),v})},p=Math.min(1.5,1+Math.max(l-Ea,0)*.0025),h=Math.max(.5,1-Math.max(l-Ea,0)*.0025);return{increaseClickCount:d,totamjungScaleX:p,totamjungScaleY:h}},Rm=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],Im=n=>{const{open:i,onClose:l}=n,{currentText:u,startTyping:d,stopTyping:p}=Jg({textList:Rm,typingTime:1600,idleTime:3e3,erasingTime:500}),{activeModalName:h,openModal:y,closeModal:v}=pl(),{increaseClickCount:T,totamjungScaleX:x,totamjungScaleY:S}=Nm({onShowComplainModal:()=>y("totamjungComplain")});return w.useEffect(()=>{if(i){d();return}p()},[i]),c.jsx(Zn,{title:"토탐정 정보",open:i,onClose:l,children:c.jsxs(hm,{children:[c.jsx(gm,{}),c.jsxs(mm,{children:[c.jsx(vm,{src:am,alt:"",onClick:T,$scaleX:x,$scaleY:S}),c.jsx(ym,{children:"토탐정"}),c.jsxs(xm,{children:[c.jsx(Am,{children:u}),c.jsx(wm,{})]})]}),c.jsxs(Sm,{children:[c.jsxs(pe,{type:"normal",fontSize:14,textAlign:"center",children:["버전:"," ",c.jsx("b",{children:`v${ye.runtime.getManifest().version} - MV${ye.runtime.getManifest().manifest_version}`})," ","/ 2026. 4. 28. 빌드"]}),c.jsxs(pe,{type:"normal",fontSize:14,textAlign:"center",children:["개발: ",c.jsx("b",{children:"요술토끼"}),"(",c.jsx(Tm,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),c.jsxs(Em,{children:[c.jsx(Ce,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:z.color.LIGHT_PURPLE,iconSrc:cm,disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),c.jsx(Ce,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:z.color.LEMON,iconSrc:c.jsx(jg,{}),disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),c.jsx(Ce,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:z.color.WHITE,iconSrc:c.jsx(Dg,{}),disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]}),c.jsx(nn,{title:"왜 그런 짓을...",width:"350px",height:"auto",open:h==="totamjungComplain",message:"그만 좀 두드려 주시면 안 될까요!?",actionType:"confirm",closeOnBackdropClick:!1,onClose:v})]})})},km={LANDING:"https://wzrabbit.github.io/boj-totamjung"},Cm=g.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,jm=g.h1`
  width: 130px;
  height: 100%;
`,Dm=g.img`
  width: 100%;
`,Mm=g.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,Om=g.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:n})=>n.color.GOLD};
`,Pd=g.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,Bd=g.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,Lm=n=>{const{selectedCategory:i,onCategoryChange:l}=n,[u,d]=w.useState("none");return c.jsxs(Cm,{children:[c.jsx(jm,{children:c.jsx(Dm,{src:om,alt:"토탐정 설정"})}),c.jsx(sg,{selectedCategory:i,onChange:l}),c.jsxs(Mm,{children:[c.jsx(Om,{children:`v${ye.runtime.getManifest().version}`}),c.jsx(Pd,{type:"button","aria-label":"도움말",onClick:()=>{d("guidePageOpenConfirm")},children:c.jsx(Bd,{src:im,alt:""})}),c.jsx(Pd,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{d("totamjungInfo")},children:c.jsx(Bd,{src:lm,alt:""})})]}),c.jsx(nn,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:u==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(km.LANDING),d("none")},onNoSelect:()=>{d("none")}}),c.jsx(Im,{open:u==="totamjungInfo",onClose:()=>{d("none")}})]})},bm=/^#([0-9a-f]{6})$/,$n=(n,i)=>{if(!bm.test(n))throw new Error("잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.");if(isNaN(i)||i<0||i>1)throw new Error("투명도는 반드시 0 이상 1 이하의 수여야 합니다.");const l=parseInt(n.slice(1,3),16),u=parseInt(n.slice(3,5),16),d=parseInt(n.slice(5,7),16),p=Math.round(i*255).toString(16).padStart(2,"0");return`#${[l,u,d].map(h=>h.toString(16).padStart(2,"0")).join("")}${p}`},Gm=g.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,_m=g.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,Hm=g.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:n})=>n.filter.ORANGE_FILTER};
  object-fit: contain;
`,zm=g.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.ORANGE};
  }
`,Pm=g.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:n})=>n.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bm=g.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:n})=>$n(n.color.ORANGE,.25)};

  z-index: -1;
`,tn=n=>{const{iconSrc:i,title:l}=n;return c.jsxs(Gm,{children:[c.jsxs(_m,{children:[i&&(typeof i=="string"?c.jsx(Hm,{src:i,alt:""}):c.jsx(zm,{children:i})),c.jsx(Pm,{children:l})]}),c.jsx(Bm,{})]})},Um=g.div`
  flex-shrink: 0;

  width: 700px;
  height: 555px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:n})=>n.color.GOLD};
`,Fm=g.div`
  position: relative;

  width: 700px;
  height: 505px;
  padding: 14px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Vm=g.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:n})=>n.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,$m=g.div`
  display: flex;
  column-gap: 6px;

  width: 420px;
  height: 100%;
  margin-right: auto;
`,Ym=g.div`
  & svg {
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,Wm=g.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:n})=>n.color.WHITE};
`,Qm=g.div`
  display: flex;

  user-select: none;
`,Ud=g.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,Fd=g.img`
  width: 30px;
  height: 30px;
`,Vd=g.p`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:n})=>n.color.GOLD};
  }
`,Zm=g.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,qm=g.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:n,$backgroundColor:i})=>i==="brown"?n.color.BROWN:n.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Km=g.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,Xm=g.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,Jm=g.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:n})=>n.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:n,$isChecked:i})=>i?re`
          box-shadow: 0 0 8px ${n.color.GOLD};
          background-color: ${n.color.GOLD};
        `:re`
          box-shadow: 0 0 8px ${n.color.DARK_BROWN};
          background-color: transparent;
        `}
`,e3=g.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,t3=w.forwardRef((n,i)=>{const{isChecked:l,name:u,ariaLabel:d,tabIndex:p=0,onChange:h,onKeyDown:y}=n;return c.jsxs(Xm,{children:[c.jsx(e3,{checked:l,name:u,"aria-label":d,onChange:h,ref:i,tabIndex:p,onKeyDown:y}),c.jsx(Jm,{$isChecked:l})]})}),n3=w.forwardRef((n,i)=>{const{id:l,name:u,isChecked:d,backgroundColor:p,tabIndex:h=0,onChange:y,...v}=n;return c.jsx(qm,{$backgroundColor:p,children:c.jsxs(Km,{children:[c.jsx(pe,{type:"semiPrimary",fontSize:16,width:"auto",children:u}),c.jsx(t3,{isChecked:d,onChange:()=>y(l),name:"algorithm",ariaLabel:u,tabIndex:h,ref:i,...v})]})})}),To=n=>{const{count:i,shouldResetFocusIndexOnItemChange:l=!0}=n,[u,d]=w.useState(0),p=w.useRef([]);w.useEffect(()=>{if(l){d(0);return}d(Math.min(i-1,u))},[i]);const h=w.useCallback((T,x)=>{var R;let S=x;switch(T.key){case"ArrowLeft":T.preventDefault(),S=Math.max(0,x-1);break;case"ArrowRight":T.preventDefault(),S=Math.min(i-1,x+1);break;case"Home":T.preventDefault(),S=0;break;case"End":T.preventDefault(),S=i-1;break}S!==x&&(d(S),(R=p.current[S])==null||R.focus())},[i]),y=T=>{d(T)};return{getRovingProps:T=>({ref:x=>{p.current[T]=x},tabIndex:u===T?0:-1,onKeyDown:x=>h(x,T),onClick:()=>y(T)})}},r3=n=>{const{items:i,checkedAlgorithmIds:l,onChange:u}=n,{getRovingProps:d}=To({count:i.length});return c.jsx(Zm,{children:i.map((p,h)=>c.jsx(n3,{id:p.id,name:p.name,isChecked:l.includes(p.id),backgroundColor:h%2===0?"brown":"light-brown",onChange:u,...d(h)},p.id))})},o3=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  width: 100%;
  height: 100%;

  user-select: none;
`,i3=g.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.GOLD};
  font-family: 'Do Hyeon';
  font-size: 22px;
`,l3=g.img`
  margin-bottom: 10px;
`,s1=n=>{const{imageSrc:i,imageWidth:l,imageHeight:u,title:d,description:p}=n;return c.jsxs(o3,{children:[c.jsx(l3,{width:l,height:u,src:i,alt:"",draggable:!1}),c.jsx(i3,{children:d}),p&&c.jsx(pe,{type:"normal",fontSize:14,textAlign:"center",children:p})]})},s3=at`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,a3=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${s3} 2s forwards infinite linear;
  }
`,oc=()=>c.jsx(a3,{children:c.jsx(e1,{})}),Eo=[{id:1,name:"수학",englishName:"Mathematics",tag:"math",alias:["수학시러","수학싫어"]},{id:2,name:"구현",englishName:"Implementation",tag:"implementation",alias:["빡구현","코딩시러","코딩싫어"]},{id:3,name:"다이나믹 프로그래밍",englishName:"Dynamic Programming",tag:"dp",alias:["동적 계획법","디피"]},{id:4,name:"그래프 이론",englishName:"Graph Theory",tag:"graphs",alias:[]},{id:5,name:"자료 구조",englishName:"Data Structures",tag:"data_structures",alias:["자구"]},{id:6,name:"문자열",englishName:"String",tag:"string",alias:[]},{id:7,name:"그리디 알고리즘",englishName:"Greedy",tag:"greedy",alias:["탐욕법","탐욕 알고리즘","욕심쟁이 알고리즘","애구그"]},{id:8,name:"브루트포스 알고리즘",englishName:"Bruteforcing",tag:"bruteforcing",alias:["brute force","무차별 대입","무작위 대입"]},{id:9,name:"그래프 탐색",englishName:"Graph Traversal",tag:"graph_traversal",alias:[]},{id:10,name:"정렬",englishName:"Sorting",tag:"sorting",alias:["소트","소팅"]},{id:11,name:"정수론",englishName:"Number Theory",tag:"number_theory",alias:["수학"]},{id:12,name:"트리",englishName:"Tree",tag:"trees",alias:["tree","나무"]},{id:13,name:"세그먼트 트리",englishName:"Segment Tree",tag:"segtree",alias:["세그트리","segment tree","어쩔세그"]},{id:14,name:"기하학",englishName:"Geometry",tag:"geometry",alias:["기하싫어","기하시러"]},{id:15,name:"이분 탐색",englishName:"Binary Search",tag:"binary_search",alias:["바이너리 서치","이진 탐색"]},{id:16,name:"너비 우선 탐색",englishName:"Breadth-first Search",tag:"bfs",alias:[]},{id:17,name:"사칙연산",englishName:"Arithmetic",tag:"arithmetic",alias:[]},{id:18,name:"시뮬레이션",englishName:"Simulation",tag:"simulation",alias:[]},{id:19,name:"깊이 우선 탐색",englishName:"Depth-first Search",tag:"dfs",alias:[]},{id:20,name:"조합론",englishName:"Combinatorics",tag:"combinatorics",alias:[]},{id:21,name:"애드 혹",englishName:"Ad-hoc",tag:"ad_hoc",alias:["애드 훅, 애구그"]},{id:22,name:"누적 합",englishName:"Prefix Sum",tag:"prefix_sum",alias:["cumulative sum","프리픽스 썸","프리픽스 섬","imos"]},{id:23,name:"해 구성하기",englishName:"Constructive",tag:"constructive",alias:["구성적","애구그"]},{id:24,name:"많은 조건 분기",englishName:"Case Work",tag:"case_work",alias:["케이스 워크, 케이스 웍, 케웍, 많조분"]},{id:25,name:"비트마스킹",englishName:"Bitmask",tag:"bitmask",alias:[]},{id:26,name:"데이크스트라",englishName:"Dijkstra's",tag:"dijkstra",alias:["다익스트라"]},{id:27,name:"파싱",englishName:"Parsing",tag:"parsing",alias:["parse"]},{id:28,name:"분리 집합",englishName:"Disjoint Set",tag:"disjoint_set",alias:["union find","유니온 파인드","유파","크루스칼 알고리즘","프림 알고리즘"]},{id:29,name:"백트래킹",englishName:"Backtracking",tag:"backtracking",alias:["되추적 알고리즘","가지치기"]},{id:30,name:"분할 정복",englishName:"Divide And Conquer",tag:"divide_and_conquer",alias:[]},{id:31,name:"스위핑",englishName:"Sweeping",tag:"sweeping",alias:[]},{id:32,name:"해시를 사용한 집합과 맵",englishName:"Set / Map By Hashing",tag:"hash_set",alias:["해쉬맵","해쉬셋","해시맵","해시셋","해쉬를 사용한 집합과 맵","해시를 이용한 집합과 맵","해쉬를 이용한 집합과 맵"]},{id:33,name:"트리를 사용한 집합과 맵",englishName:"Set / Map By Trees",tag:"tree_set",alias:["트리맵","트리셋","트리를 사용한 집합과 맵"]},{id:34,name:"우선순위 큐",englishName:"Priority Queue",tag:"priority_queue",alias:["힙","heap","pq","우큐"]},{id:35,name:"트리에서의 다이나믹 프로그래밍",englishName:"Dynamic Programming On Trees",tag:"dp_tree",alias:["트리 디피","tree dp"]},{id:36,name:"스택",englishName:"Stack",tag:"stack",alias:[]},{id:37,name:"두 포인터",englishName:"Two-pointer",tag:"two_pointer",alias:["투 포인터"]},{id:38,name:"소수 판정",englishName:"Primality Test",tag:"primality_test",alias:[]},{id:39,name:"최대 유량",englishName:"Maximum Flow",tag:"flow",alias:["플로우","네트워크 플로우","network flow"]},{id:40,name:"느리게 갱신되는 세그먼트 트리",englishName:"Segment Tree With Lazy Propagation",tag:"lazyprop",alias:["lazy propagation","레이지 세그","느갱세"]},{id:41,name:"게임 이론",englishName:"Game Theory",tag:"game_theory",alias:[]},{id:42,name:"비트필드를 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Bitfield",tag:"dp_bitfield",alias:["비트 dp","bit dp","bitfield dp","비트 디피"]},{id:43,name:"임의 정밀도 / 큰 수 연산",englishName:"Arbitrary Precision / Big Integers",tag:"arbitrary_precision",alias:[]},{id:44,name:"분할 정복을 이용한 거듭제곱",englishName:"Exponentiation By Squaring",tag:"exponentiation_by_squaring",alias:["분할 거듭 제곱"]},{id:45,name:"오프라인 쿼리",englishName:"Offline Queries",tag:"offline_queries",alias:[]},{id:46,name:"재귀",englishName:"Recursion",tag:"recursion",alias:["recursive"]},{id:47,name:"확률론",englishName:"Probability Theory",tag:"probability",alias:[]},{id:48,name:"에라토스테네스의 체",englishName:"Sieve Of Eratosthenes",tag:"sieve",alias:["에테체","에라체"]},{id:49,name:"매개 변수 탐색",englishName:"Parametric Search",tag:"parametric_search",alias:["파라메트릭 서치"]},{id:50,name:"최소 스패닝 트리",englishName:"Minimum Spanning Tree",tag:"mst",alias:["minimum spanning tree","최소 신장 트리"]},{id:51,name:"이분 매칭",englishName:"Bipartite Matching",tag:"bipartite_matching",alias:[]},{id:52,name:"배낭 문제",englishName:"Knapsack",tag:"knapsack",alias:["냅색"]},{id:53,name:"최소 공통 조상",englishName:"Lowest Common Ancestor",tag:"lca",alias:["lowest common ancestor"]},{id:54,name:"런타임 전의 전처리",englishName:"Precomputation",tag:"precomputation",alias:[]},{id:55,name:"해싱",englishName:"Hashing",tag:"hashing",alias:[]},{id:56,name:"위상 정렬",englishName:"Topological Sorting",tag:"topological_sorting",alias:[]},{id:57,name:"값 / 좌표 압축",englishName:"Value / Coordinate Compression",tag:"coordinate_compression",alias:[]},{id:58,name:"유클리드 호제법",englishName:"Euclidean Algorithm",tag:"euclidean",alias:["gcd"]},{id:59,name:"강한 연결 요소",englishName:"Strongly Connected Component",tag:"scc",alias:["strongly connected components"]},{id:60,name:"플로이드-워셜",englishName:"Floyd-warshall",tag:"floyd_warshall",alias:["플로이드-와샬"]},{id:61,name:"포함 배제의 원리",englishName:"Inclusion And Exclusion",tag:"inclusion_and_exclusion",alias:["포배제"]},{id:62,name:"볼록 껍질",englishName:"Convex Hull",tag:"convex_hull",alias:["컨벡스 헐","컨백스 헐"]},{id:63,name:"선형대수학",englishName:"Linear Algebra",tag:"linear_algebra",alias:[]},{id:64,name:"트라이",englishName:"Trie",tag:"trie",alias:[]},{id:65,name:"희소 배열",englishName:"Sparse Table",tag:"sparse_table",alias:["스파스 테이블"]},{id:66,name:"고속 푸리에 변환",englishName:"Fast Fourier Transform",tag:"fft",alias:["어쩔FFT"]},{id:67,name:"접미사 배열과 lcp 배열",englishName:"Suffix ARray And Lcp Array",tag:"suffix_array",alias:["서픽스 어레이"]},{id:68,name:"제곱근 분할법",englishName:"Square Root Decomposition",tag:"sqrt_decomposition",alias:[]},{id:69,name:"작은 집합에서 큰 집합으로 합치는 테크닉",englishName:"Smaller To Larger Technique",tag:"smaller_to_larger",alias:[]},{id:70,name:"볼록 껍질을 이용한 최적화",englishName:"Convex Hull Trick",tag:"cht",alias:["convex hull trick"]},{id:71,name:"kmp",englishName:"Knuth-morris-pratt",tag:"kmp",alias:[]},{id:72,name:"슬라이딩 윈도우",englishName:"Sliding Window",tag:"sliding_window",alias:[]},{id:73,name:"최소 비용 최대 유량",englishName:"Minimum Cost Maximum Flow",tag:"mcmf",alias:["Minimum Cost Maximum Flow"]},{id:74,name:"중간에서 만나기",englishName:"Meet In The Middle",tag:"mitm",alias:["meet in the middle","밋 인더 미들"]},{id:75,name:"덱",englishName:"Deque",tag:"deque",alias:["데크","대크","데큐","대큐","댁"]},{id:76,name:"무작위화",englishName:"Randomization",tag:"randomization",alias:["랜덤"]},{id:77,name:"미적분학",englishName:"Calculus",tag:"calculus",alias:[]},{id:78,name:"heavy-light 분할",englishName:"Heavy-light Decomposition",tag:"hld",alias:["어쩔HLD","heavy light decomposition","흐르드"]},{id:79,name:"3차원 기하학",englishName:"Geometry; 3d",tag:"geometry_3d",alias:[]},{id:80,name:"스프라그-그런디 정리",englishName:"Sprague-grundy Theorem",tag:"sprague_grundy",alias:[]},{id:81,name:"오일러 경로 테크닉",englishName:"Euler Tour Technique",tag:"euler_tour_technique",alias:[]},{id:82,name:"가장 긴 증가하는 부분 수열 문제",englishName:"Longest Increasing Sequence Problem",tag:"lis",alias:[]},{id:83,name:"선분 교차 판정",englishName:"Line Segment Intersection Check",tag:"line_intersection",alias:[]},{id:84,name:"센트로이드",englishName:"Centroid",tag:"centroid",alias:[]},{id:85,name:"센트로이드 분할",englishName:"Centroid Decomposition",tag:"centroid_decomposition",alias:[]},{id:86,name:"단절점과 단절선",englishName:"Articulation Points And Bridges",tag:"articulation",alias:[]},{id:87,name:"최대 유량 최소 컷 정리",englishName:"Max-flow Min-cut Theorem",tag:"mcmf",alias:[]},{id:88,name:"가우스 소거법",englishName:"Gaussian Elimination",tag:"gaussian_elimination",alias:[]},{id:89,name:"2-sat",englishName:"2-sat",tag:"2_sat",alias:[]},{id:90,name:"피타고라스 정리",englishName:"Pythagoras Theorem",tag:"pythagoras",alias:["피타고라스의 정리"]},{id:91,name:"삼분 탐색",englishName:"Ternary Search",tag:"ternary_search",alias:[]},{id:92,name:"순열 사이클 분할",englishName:"Permutation Cycle Decomposition",tag:"permutation_cycle_decomposition",alias:[]},{id:93,name:"오일러 경로",englishName:"Eulerian Path / Circuit",tag:"eulerian_path",alias:[]},{id:94,name:"큐",englishName:"Queue",tag:"queue",alias:[]},{id:95,name:"비트 집합",englishName:"Bit Set",tag:"bitset",alias:["비트셋"]},{id:96,name:"퍼시스턴트 세그먼트 트리",englishName:"Persistent Segment Tree",tag:"pst",alias:["persistent segment tree"]},{id:97,name:"휴리스틱",englishName:"Heuristics",tag:"heuristics",alias:[]},{id:98,name:"선인장",englishName:"Cactus",tag:"cactus",alias:[]},{id:99,name:"물리학",englishName:"Physics",tag:"physics",alias:[]},{id:100,name:"중국인의 나머지 정리",englishName:"Chinese Remainder Theorem",tag:"crt",alias:["chinese remainder theorem"]},{id:101,name:"이중 연결 요소",englishName:"Biconnected Component",tag:"biconnected_component",alias:[]},{id:102,name:"mo's",englishName:"Mo's",tag:"mo",alias:["모스","mos"]},{id:103,name:"스플레이 트리",englishName:"Splay Tree",tag:"splay_tree",alias:[]},{id:104,name:"페르마의 소정리",englishName:"Fermat's Little Theorem",tag:"flt",alias:["fermat's last theorem"]},{id:105,name:"확장 유클리드 호제법",englishName:"Extended Euclidean Algorithm",tag:"extended_euclidean",alias:["egcd","gcd"]},{id:106,name:"모듈로 곱셈 역원",englishName:"Modular Multiplicative Inverse",tag:"modular_multiplicative_inverse",alias:[]},{id:107,name:"분할 정복을 사용한 최적화",englishName:"Divide And Conquer Optimization",tag:"divide_and_conquer_optimization",alias:["분할 정복을 이용한 최적화"]},{id:108,name:"0-1 너비 우선 탐색",englishName:"0-1 Bfs",tag:"0_1_bfs",alias:[]},{id:109,name:"벨만-포드",englishName:"Bellman-ford",tag:"bellman_ford",alias:[]},{id:110,name:"평면 그래프",englishName:"Planar Graph",tag:"planar_graph",alias:[]},{id:111,name:"아호-코라식",englishName:"Aho-corasick",tag:"aho_corasick",alias:[]},{id:112,name:"오일러 피 함수",englishName:"Euler Totient Function",tag:"euler_phi",alias:["euler pi"]},{id:113,name:"병렬 이분 탐색",englishName:"Parallel Binary Search",tag:"pbs",alias:["Parallel Binary Search"]},{id:114,name:"다차원 세그먼트 트리",englishName:"Multidimensional Segment Tree",tag:"multi_segtree",alias:["multi segment tree"]},{id:115,name:"머지 소트 트리",englishName:"Merge Sort Tree",tag:"merge_sort_tree",alias:[]},{id:116,name:"오일러 지표 (χ=V-E+F)",englishName:"Euler Characteristic (χ=v-e+f)",tag:"euler_characteristic",alias:[]},{id:117,name:"기댓값의 선형성",englishName:"Linearity Of Expectation",tag:"linearity_of_expectation",alias:[]},{id:118,name:"벌리캠프-매시",englishName:"Berlekamp-massey",tag:"berlekamp_massey",alias:["벌레캠프-매시","벌래캠프-매시","벌리컴프-매시","벌리캄프-매시"]},{id:119,name:"볼록 다각형 내부의 점 판정",englishName:"Point In Convex Polygon Check",tag:"point_in_convex_polygon",alias:[]},{id:120,name:"연결 리스트",englishName:"Linked List",tag:"linked_list",alias:[]},{id:121,name:"링크/컷 트리",englishName:"Link/cut Tree",tag:"link_cut_tree",alias:["링컷 트리"]},{id:122,name:"정규 표현식",englishName:"Regular Expression",tag:"regex",alias:["리잭스","리젝스","정규식","RegExp"]},{id:123,name:"라빈-카프",englishName:"Rabin-karp",tag:"rabin_karp",alias:[]},{id:124,name:"회전하는 캘리퍼스",englishName:"Rotating Calipers",tag:"rotating_calipers",alias:[]},{id:125,name:"외판원 순회 문제",englishName:"Travelling Salesman Problem",tag:"tsp",alias:["Traveling Salesman Problem"]},{id:126,name:"다각형의 넓이",englishName:"Area Of A Polygon",tag:"polygon_area",alias:[]},{id:127,name:"덱을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using A Deque",tag:"dp_deque",alias:["덱을 사용한 다이나믹 프로그래밍"]},{id:128,name:"매내처",englishName:"Manacher's",tag:"manacher",alias:["마나커"]},{id:129,name:"커넥션 프로파일을 이용한 다이나믹 프로그래밍",englishName:"Dynamic Programming Using Connection Profile",tag:"dp_connection_profile",alias:[]},{id:130,name:"뫼비우스 반전 공식",englishName:"Möbius Inversion",tag:"mobius_inversion",alias:[]},{id:131,name:"함수 개형을 이용한 최적화",englishName:"Slope Trick",tag:"slope_trick",alias:[]},{id:132,name:"트리 동형 사상",englishName:"Tree Isomorphism",tag:"tree_isomorphism",alias:[]},{id:133,name:"aliens 트릭",englishName:"Aliens Trick",tag:"aliens",alias:["외계인 트릭"]},{id:134,name:"밀러-라빈 소수 판별법",englishName:"Miller-rabin",tag:"miller_rabin",alias:[]},{id:135,name:"수치해석",englishName:"Numerical Analysis",tag:"numerical_analysis",alias:[]},{id:136,name:"오프라인 동적 연결성 판정",englishName:"Offline Dynamic Connectivity",tag:"offline_dynamic_connectivity",alias:[]},{id:137,name:"홀의 결혼 정리",englishName:"Hall's Theorem",tag:"hall",alias:[]},{id:138,name:"인터프리터",englishName:"Interpreter",tag:"interpreter",alias:[]},{id:139,name:"폴라드 로",englishName:"Pollard Rho",tag:"pollard_rho",alias:[]},{id:140,name:"이분 그래프",englishName:"Bipartite Graph",tag:"bipartite_graph",alias:[]},{id:141,name:"선형 계획법",englishName:"Linear Programming",tag:"linear_programming",alias:[]},{id:142,name:"쌍대 그래프",englishName:"Dual Graph",tag:"dual_graph",alias:[]},{id:143,name:"비둘기집 원리",englishName:"Pigeonhole Principle",tag:"pigeonhole_principle",alias:[]},{id:144,name:"오목 다각형 내부의 점 판정",englishName:"Point In Non-convex Polygon Check",tag:"point_in_non_convex_polygon",alias:[]},{id:145,name:"뤼카 정리",englishName:"Lucas Theorem",tag:"lucas",alias:[]},{id:146,name:"쌍대성",englishName:"Duality",tag:"duality",alias:[]},{id:147,name:"매트로이드",englishName:"Matroid",tag:"matroid",alias:[]},{id:148,name:"보로노이 다이어그램",englishName:"Voronoi Diagram",tag:"voronoi",alias:[]},{id:149,name:"번사이드 보조정리",englishName:"Burnside's Lemma",tag:"burnside",alias:[]},{id:150,name:"키타마사",englishName:"Kitamasa",tag:"kitamasa",alias:[]},{id:151,name:"크누스 최적화",englishName:"Knuth Optimization",tag:"knuth",alias:[]},{id:152,name:"헝가리안",englishName:"Hungarian",tag:"hungarian",alias:[]},{id:153,name:"이산 로그",englishName:"Discrete Logarithm",tag:"discrete_log",alias:[]},{id:154,name:"일반적인 매칭",englishName:"General Matching",tag:"general_matching",alias:[]},{id:155,name:"최소 외접원",englishName:"Minimum Enclosing Circle",tag:"min_enclosing_circle",alias:[]},{id:156,name:"z",englishName:"Z",tag:"z",alias:[]},{id:157,name:"통계학",englishName:"Statistics",tag:"statistics",alias:[]},{id:158,name:"도미네이터 트리",englishName:"Dominator Tree",tag:"dominator_tree",alias:[]},{id:159,name:"단조 큐를 이용한 최적화",englishName:"Monotone Queue Optimization",tag:"monotone_queue_optimization",alias:["단조 큐를 사용한 최적화"]},{id:160,name:"회문 트리",englishName:"Palindrome Tree",tag:"palindrome_tree",alias:[]},{id:161,name:"안정 결혼 문제",englishName:"Stable Marriage Problem",tag:"stable_marriage",alias:[]},{id:162,name:"담금질 기법",englishName:"Simulated Annealing",tag:"simulated_annealing",alias:[]},{id:163,name:"양방향 탐색",englishName:"Bidirectional Search",tag:"bidirectional_search",alias:[]},{id:164,name:"반평면 교집합",englishName:"Half Plane Intersection",tag:"half_plane_intersection",alias:[]},{id:165,name:"로프",englishName:"Rope",tag:"rope",alias:[]},{id:166,name:"스토어-바그너",englishName:"Stoer-wagner",tag:"stoer_wagner",alias:[]},{id:167,name:"히르쉬버그",englishName:"Hirschberg's",tag:"hirschberg",alias:[]},{id:168,name:"이산 제곱근",englishName:"Discrete Square Root",tag:"discrete_sqrt",alias:[]},{id:169,name:"4차원 이상의 기하학",englishName:"Geometry; Hyperdimensional",tag:"geometry_hyper",alias:["geometry_4d"]},{id:170,name:"접미사 트리",englishName:"Suffix Tree",tag:"suffix_tree",alias:[]},{id:171,name:"유향 최소 스패닝 트리",englishName:"Directed Minimum Spanning Tree",tag:"directed_mst",alias:[]},{id:172,name:"베이즈 정리",englishName:"Bayes Theorem",tag:"bayes",alias:[]},{id:173,name:"그린 정리",englishName:"Green's Theorem",tag:"green",alias:[]},{id:174,name:"픽의 정리",englishName:"Pick's Theorem",tag:"pick",alias:[]},{id:175,name:"크누스 x",englishName:"Knuth's X",tag:"knuth_x",alias:[]},{id:176,name:"탑 트리",englishName:"Top Tree",tag:"top_tree",alias:[]},{id:177,name:"춤추는 링크",englishName:"Dancing Links",tag:"dancing_links",alias:[]},{id:178,name:"보이어-무어 다수결 투표",englishName:"Boyer-moore Majority Vote",tag:"majority_vote",alias:[]},{id:179,name:"트리 압축",englishName:"Tree Compression",tag:"tree_compression",alias:[]},{id:180,name:"생성 함수",englishName:"Generating Function",tag:"generating_function",alias:[]},{id:181,name:"a*",englishName:"A*",tag:"a_star",alias:["a스타","에이스타"]},{id:182,name:"레드-블랙 트리",englishName:"Red-black Tree",tag:"rb_tree",alias:["red black tree"]},{id:183,name:"델로네 삼각분할",englishName:"Delaunay Triangulation",tag:"delaunay",alias:[]},{id:184,name:"서큘레이션",englishName:"Circulation",tag:"circulation",alias:[]},{id:185,name:"이산 k제곱근",englishName:"Discrete k-th Root",tag:"discrete_kth_root",alias:[]},{id:186,name:"다중 대입값 계산",englishName:"Multipoint Evaluation",tag:"multipoint_evaluation",alias:[]},{id:187,name:"차분 공격",englishName:"Differential Cryptanalysis",tag:"differential_cryptanalysis",alias:[]},{id:188,name:"하켄부시 게임",englishName:"Hackenbush",tag:"hackenbush",alias:[]},{id:189,name:"트리 분할",englishName:"Tree Decomposition",tag:"tree_decomposition",alias:[]},{id:190,name:"생일 문제",englishName:"Birthday",tag:"birthday",alias:[]},{id:191,name:"도형에서의 불 연산",englishName:"Boolean Operations On Geometric Objects",tag:"geometric_boolean_operations",alias:[]},{id:192,name:"현 그래프",englishName:"Chordal Graph",tag:"chordal_graph",alias:[]},{id:193,name:"차수열",englishName:"Degree Sequence",tag:"degree_sequence",alias:[]},{id:194,name:"utf-8 입력 처리",englishName:"Utf-8 Inputs",tag:"utf8",alias:[]},{id:195,name:"부분집합의 합 다이나믹 프로그래밍",englishName:"Sum Over Subsets Dynamic Programming",tag:"dp_sum_over_subsets",alias:[]},{id:196,name:"경사 하강법",englishName:"Gradient Descent",tag:"gradient_descent",alias:[]},{id:197,name:"데카르트 트리",englishName:"Cartesian Tree",tag:"cartesian_tree",alias:[]},{id:198,name:"다항식 보간법",englishName:"Polynomial Interpolation",tag:"polynomial_interpolation",alias:[]},{id:199,name:"플러드 필",englishName:"Flood Fill",tag:"flood_fill",alias:[]},{id:200,name:"함수형 그래프",englishName:"Functional Graph",tag:"functional_graph",alias:[]},{id:201,name:"방향 비순환 그래프",englishName:"Directed Acyclic Graph",tag:"dag",alias:[]},{id:202,name:"최단 경로",englishName:"Shortest Path",tag:"shortest_path",alias:[]},{id:203,name:"린드스트롬-게셀-비엔노 보조정리",englishName:"Lindström-gessel-viennot Lemma",tag:"lgv",alias:[]},{id:204,name:"지수승강 보조정리",englishName:"Lifting The Exponent Lemma",tag:"lte",alias:[]},{id:205,name:"유리 등차수열의 내림 합",englishName:"Sum Of Floor Of Rational Arithmetic Sequence",tag:"floor_sum",alias:[]},{id:206,name:"자릿수를 이용한 다이나믹 프로그래밍",englishName:"Digit Dp",tag:"dp_digit",alias:[]},{id:207,name:"덱을 이용한 구간 최댓값 트릭",englishName:"Deque Range Maximum Trick",tag:"deque_trick",alias:["덱 트릭"]},{id:208,name:"집합과 맵",englishName:"Set / Map",tag:"set",alias:[]},{id:209,name:"트리의 지름",englishName:"Diameter Of A Tree",tag:"tree_diameter",alias:[]},{id:210,name:"cdq 분할 정복",englishName:"Cdq",tag:"cdq",alias:[]},{id:211,name:"최장 공통 부분 수열 문제",englishName:"Longest Common Subsequence",tag:"lcs",alias:[]},{id:212,name:"다이얼",englishName:"Dial",tag:"dial",alias:[]},{id:213,name:"세그먼트 트리 비츠",englishName:"Segment Tree Beats",tag:"beats",alias:["세그비츠"]},{id:214,name:"홀짝성",englishName:"Parity",tag:"parity",alias:["패리티"]},{id:215,name:"피사노 주기",englishName:"Pisano Period",tag:"pisano",alias:[]},{id:216,name:"bulldozer 트릭",englishName:"Bulldozer Trick",tag:"bulldozer",alias:[]},{id:217,name:"불변량 찾기",englishName:"Finding Invariants",tag:"invariant",alias:[]},{id:218,name:"트리에서의 전방향 다이나믹 프로그래밍",englishName:"Rerooting On Trees",tag:"rerooting",alias:[]},{id:219,name:"역추적",englishName:"Traceback",tag:"traceback",alias:[]},{id:220,name:"제한된 트리 너비",englishName:"Treewidth",tag:"treewidth",alias:[]},{id:221,name:"배타적 논리합 기저 (gf(2))",englishName:"XOR Basis (gf(2))",tag:"xor_basis",alias:[]},{id:222,name:"비트 집합을 이용한 최장 공통 부분 수열 최적화",englishName:"Longest Common Subsequence Using Bit Sets",tag:"bitset_lcs",alias:["비트셋 lcs"]},{id:223,name:"격자 그래프",englishName:"Grid Graph",tag:"grid_graph",alias:[]},{id:224,name:"순환군",englishName:"Cyclic Group",tag:"cyclic_group",alias:[]},{id:225,name:"리-차오 트리",englishName:"Li-Chao Tree",tag:"li_chao_tree",alias:["리차오 트리"]},{id:226,name:"키네틱 세그먼트 트리",englishName:"Kinetic Segment Tree",tag:"kinetic_segtree",alias:[]},{id:227,name:"차분 배열 트릭",englishName:"Difference Array",tag:"difference_array",alias:[]},{id:228,name:"최대 부분 배열 문제",englishName:"Maximum Subarray",tag:"maximum_subarray",alias:[]},{id:229,name:"각도 정렬",englishName:"Angle Sorting",tag:"angle_sorting",alias:[]},{id:230,name:"조화수",englishName:"Harmonic Number",tag:"harmonic_number",alias:[]},{id:231,name:"소인수분해",englishName:"Prime Factorization",tag:"prime_factorization",alias:[]}],a1=Eo.length,$d=n=>n.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),c1=n=>{const i=$d(n),l=[];return Eo.forEach(({id:u,name:d,englishName:p,tag:h,alias:y})=>{const v=[d,p,h,...y].map(x=>$d(x));(i===""||v.some(x=>x.indexOf(i)!==-1))&&l.push({id:u,name:d})}),l},vo={FETCH_OPTIONS_DATA:"fetchOptionsData",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",ADD_RANDOM_DEFENSE_HISTORY_INFOS:"addRandomDefenseHistoryInfos",FETCH_GACHA_OPTIONS:"fetchGachaOptions",SAVE_GACHA_OPTIONS:"saveGachaOptions"},Bn={CHECKED_ALGORITHM_IDS:"algorithm",QUICK_SLOTS:"query",TIMER:"timer",SETTINGS:"settings"},c3={RANDOM_DEFENSE_HISTORY:"queryLog"},Te={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers",SHOULD_SHOW_WELCOME_MESSAGE:"shouldShowWelcomeMessage"},M={...Te,GACHA_OPTIONS:"gachaOptions"},hl=n=>Array.isArray(n)?n.every(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):!1,u1=[1,2],d1={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},Ya={hotkey:"Alt",selectedSlotNo:1,slots:d1},ic={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},lc={...ic,shouldRevealTierOnHover:!1},sc={...lc,shouldHideSource:!1},u3="none",f1=!1,ac=[],d3=0,p1=[],cc={isTierHidden:!1,isAudioMuted:!0},Yd={selectedNo:1,...d1},f3={[M.DATA_VERSION]:2,[M.CHECKED_ALGORITHM_IDS]:u1,[M.QUICK_SLOTS]:Ya,[M.TOTAMJUNG_THEME]:u3,[M.HIDER_OPTIONS]:sc,[M.RANDOM_DEFENSE_HISTORY]:ac,[M.IS_TIER_HIDDEN]:f1,[M.FONT_NO]:d3,[M.TIMERS]:p1,[M.SHOULD_SHOW_WELCOME_MESSAGE]:!1},p3={...f3,[M.DATA_VERSION]:3,[M.HIDER_OPTIONS]:lc,[M.GACHA_OPTIONS]:cc},h3={...p3,[M.DATA_VERSION]:4,[M.HIDER_OPTIONS]:sc},gl=n=>Array.isArray(n)?n.filter(i=>typeof i=="number"&&!isNaN(i)&&i%1===0&&i>=1):u1,g3=async()=>{const i=(await ye.storage.local.get(M.CHECKED_ALGORITHM_IDS))[M.CHECKED_ALGORITHM_IDS];return gl(i)},m3=n=>{hl(n)&&ye.storage.local.set({[M.CHECKED_ALGORITHM_IDS]:n})},v3=()=>{const[n,i]=w.useState(""),[l,u]=w.useState([]),[d,p]=w.useState(!1);w.useEffect(()=>{(async()=>{const S=await g3();u(S),p(!0)})()},[]),w.useEffect(()=>{d&&m3(l)},[l]);const h=S=>{i(S.target.value)},y=S=>{if(l.includes(S)){const j=l.filter(D=>D!==S);u(j);return}const R=[...l,S];u(R)},v=()=>{u(Array.from({length:a1}).map((S,R)=>R+1))},T=()=>{u([])},x=c1(n);return{keyword:n,items:x,checkedAlgorithmIds:l,isLoaded:d,handleChangeKeyword:h,toggleAlgorithm:y,checkAllAlgorithms:v,uncheckAllAlgorithms:T}},y3=()=>{const{keyword:n,items:i,checkedAlgorithmIds:l,isLoaded:u,handleChangeKeyword:d,toggleAlgorithm:p,checkAllAlgorithms:h,uncheckAllAlgorithms:y}=v3(),{activeModalName:v,openModal:T,closeModal:x}=pl();return c.jsxs(Um,{role:"group",children:[c.jsx(Fm,{children:u?i.length>0?c.jsx(r3,{items:i,checkedAlgorithmIds:l,onChange:p}):c.jsx(s1,{imageSrc:dm,imageWidth:136,imageHeight:125,title:"검색 결과가 없습니다.",description:"검색어에 오탈자가 있는지 확인해주세요."}):c.jsx(oc,{})}),c.jsxs(Vm,{children:[c.jsxs($m,{children:[c.jsx(Ym,{children:c.jsx(K2,{})}),c.jsx(Wm,{placeholder:"알고리즘 분류를 입력해 주세요...",value:n,onChange:d})]}),c.jsxs(Qm,{children:[c.jsxs(Ud,{type:"button",onClick:()=>{T("checkAll")},"aria-label":"알고리즘 분류 전체 선택",disabled:!u,children:[c.jsx(Fd,{src:em}),c.jsx(Vd,{children:"전체 선택"})]}),c.jsxs(Ud,{type:"button",onClick:()=>{T("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",disabled:!u,children:[c.jsx(Fd,{src:tm}),c.jsx(Vd,{children:"전체 해제"})]})]})]}),c.jsx(nn,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{h(),x()},onNoSelect:x}),c.jsx(nn,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:v==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{y(),x()},onNoSelect:x})]})},x3=g.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,A3=g.legend`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  margin-bottom: 6px;
`,w3=g.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:n})=>n?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,S3=g.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,T3=g.label`
  position: relative;

  width: 16px;
  height: 16px;
`,E3=g.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:n})=>n.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:n})=>n?"not-allowed":"pointer"};

  ${({theme:n,$checked:i})=>i?re`
          box-shadow: 0 0 8px ${n.color.GOLD};
          background-color: ${n.color.GOLD};
        `:re`
          box-shadow: 0 0 8px ${n.color.DARK_BROWN};
          background-color: transparent;
        `}
`,N3=g.input.attrs({type:"radio"})`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: transparent;
  border: none;
  margin: 0;

  appearance: none;
  -webkit-appearance: none;
`,R3=n=>{const{checked:i,disabled:l=!1}=n;return c.jsxs(T3,{children:[c.jsx(N3,{...n,onChange:()=>{if("value"in n){n.onChange(n.value);return}n.onChange()}}),c.jsx(E3,{$checked:i,$disabled:l})]})},En=n=>{const{legend:i,name:l,options:u,checkedValue:d,disabled:p,isVertical:h=!1,onChange:y}=n;return c.jsxs(x3,{disabled:p,children:[c.jsx(A3,{children:i}),c.jsx(w3,{$isVertical:h,children:u.map(({label:v,value:T})=>c.jsxs(S3,{children:[c.jsx(R3,{name:l,value:T,checked:T===d,disabled:p,onChange:y}),typeof v=="string"?c.jsx(pe,{type:"semiPrimary",fontSize:16,children:v}):v]},T))})]})},I3=g.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,k3=g.button`
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

  ${({theme:n,$isActivated:i})=>i?re`
          border: 1.5px solid ${n.color.LEMON};
          box-shadow: 0 0 12px ${n.color.GOLD}70;
        `:re`
          border: 1.5px solid ${n.color.BROWN};
        `}
`,Wd=g.img`
  width: 12px;
  height: auto;
`,Qd=g.p`
  font-size: 14px;
  color: ${({theme:n,$tier:i})=>n.solvedAcTier[i]};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,C3=g.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,j3=g.ul`
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
`,D3=g.li`
  padding: 2px;
`,M3=g.button`
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
`,O3=g.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,h1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e0%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M291.8,133.59a68.54,68.54,0,0,1-2.89,20.88A62.48,62.48,0,0,1,280.75,171a81.44,81.44,0,0,1-12.67,14.22q-7.43,6.67-16.84,13.86c-3.86,3.12-7.07,5.89-9.6,8.28a33.26,33.26,0,0,0-6,7.38,27.63,27.63,0,0,0-3.07,7.92,46.64,46.64,0,0,0-.91,9.9V242H175.52V228.27a70.93,70.93,0,0,1,1.8-16.74,49.92,49.92,0,0,1,5.4-13.5,72.82,72.82,0,0,1,8.82-11.88A135.7,135.7,0,0,1,204,174.27l11.88-11.16a70.45,70.45,0,0,0,10.44-11.34,23.5,23.5,0,0,0,4.32-14.22q0-11.51-7-18.36t-19.26-6.84q-15.12,0-22.68,10.26a42.26,42.26,0,0,0-8.28,23.22l-57.24-6.12q2.16-19.44,9.9-34.2A75.63,75.63,0,0,1,146,81a85.14,85.14,0,0,1,27.74-14.58,109.22,109.22,0,0,1,32.84-4.86,121.18,121.18,0,0,1,31.6,4.14,80.58,80.58,0,0,1,27.26,13,65.91,65.91,0,0,1,19.14,22.5Q291.79,114.89,291.8,133.59ZM238.88,292.71A32.71,32.71,0,0,1,228.8,317q-10.08,9.9-24.84,9.9a36,36,0,0,1-13.5-2.52,34,34,0,0,1-11.16-7.2,36.11,36.11,0,0,1-7.74-10.8,30.82,30.82,0,0,1-2.88-13.32,33.09,33.09,0,0,1,2.7-13.14,33.48,33.48,0,0,1,7.56-11,36.48,36.48,0,0,1,11.34-7.38,35.21,35.21,0,0,1,13.68-2.7,33.91,33.91,0,0,1,13.5,2.7,39,39,0,0,1,11.16,7.2,31.55,31.55,0,0,1,7.56,10.8A33.09,33.09,0,0,1,238.88,292.71Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",L3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",b3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e2%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",G3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e3%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",_3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e4%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",H3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e5%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",P3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e7%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",B3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e8%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",U3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e9%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",F3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e10%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",V3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e11%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",$3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e12%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Y3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",W3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e14%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Q3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e15%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",Z3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3c/svg%3e",q3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e17%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3c/svg%3e",K3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e18%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3c/svg%3e",X3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e19%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3c/svg%3e",J3="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e20%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3c/svg%3e",e4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",t4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e22%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",n4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e23%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",r4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e24%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",o4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e25%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",i4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.24,239.07q0,23.42-8.28,40.5a80.79,80.79,0,0,1-22.14,28.26,95.4,95.4,0,0,1-31.5,16.74,122,122,0,0,1-69.3,1.08,105,105,0,0,1-28.44-12.78,86.12,86.12,0,0,1-22-20.34,81.21,81.21,0,0,1-13.5-27.18l55.08-16.92a42.82,42.82,0,0,0,14.94,22q11,8.64,26.1,8.64a40.76,40.76,0,0,0,26.82-9.36Q232.4,260.33,232.4,242q0-11.14-4.68-18.72a36.31,36.31,0,0,0-12.06-12.06,50.2,50.2,0,0,0-16.74-6.3,98.92,98.92,0,0,0-18.72-1.8,183.54,183.54,0,0,0-31.14,3.06,181.34,181.34,0,0,0-31.14,8.1L124,68.43H280.28v51.84H177.68l-2.16,40.32a78.33,78.33,0,0,1,12.78-2q7-.54,12.78-.54a125.49,125.49,0,0,1,36,5,82.55,82.55,0,0,1,29.34,15.3A73.33,73.33,0,0,1,286,203.79Q293.24,218.91,293.24,239.07Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",l4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e27%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M269.12,273.63v49.68H212.6V273.63H92.72V222.87L196.4,68.43h72.36V224.67H304v49ZM213,130.35h-1.08L151.4,224.67H213Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",s4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e28%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M293.6,249.27q0,20.85-8.46,36.13A76,76,0,0,1,263,310.56a97.64,97.64,0,0,1-30.78,14.74,126.85,126.85,0,0,1-34.74,4.85,142.73,142.73,0,0,1-33.66-4,106.16,106.16,0,0,1-29.88-12.06,86.49,86.49,0,0,1-23.58-20.88q-10.08-12.76-15.12-30.78l56.16-14.76q3.6,12.61,14.76,22.14t28.44,9.54a49.79,49.79,0,0,0,13.14-1.8A35.92,35.92,0,0,0,219.62,272a30.07,30.07,0,0,0,8.64-9.9q3.42-6.11,3.42-15.12,0-9.72-4.5-16.2a31.87,31.87,0,0,0-11.88-10.26,58.34,58.34,0,0,0-16.74-5.4,109.58,109.58,0,0,0-18.72-1.62h-16.2V169.59h17.64a105.32,105.32,0,0,0,16.56-1.26,44.11,44.11,0,0,0,14.22-4.71,27.61,27.61,0,0,0,10.08-9.24q3.78-5.79,3.78-15.21,0-13.77-9.72-21a36.36,36.36,0,0,0-22.32-7.25,34.62,34.62,0,0,0-22.5,7.74A35.77,35.77,0,0,0,159,139.35l-56.16-13a83.31,83.31,0,0,1,14-28.26A86.36,86.36,0,0,1,139,78a102.2,102.2,0,0,1,27.9-12.24,117.12,117.12,0,0,1,31-4.14,126,126,0,0,1,32.94,4.33A88.14,88.14,0,0,1,259.4,79.26a70.38,70.38,0,0,1,20.34,22.53q7.74,13.53,7.74,31.91,0,21.28-12.06,35.88a58.73,58.73,0,0,1-30.78,19.64v1.08a65.79,65.79,0,0,1,19.8,8.09,63.92,63.92,0,0,1,15.48,13.31A59.22,59.22,0,0,1,290,229,57,57,0,0,1,293.6,249.27Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",a4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e29%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M108.2,323.31V273l99.36-89.85a93.82,93.82,0,0,0,15.12-18.33A38.88,38.88,0,0,0,228.44,144q0-13.65-8.64-22.1t-23-8.45q-15.12,0-24.66,10.62T160.76,152l-58-7.92a91,91,0,0,1,10.62-34.62,90,90,0,0,1,21.42-25.89,92.61,92.61,0,0,1,29.7-16.31A110.86,110.86,0,0,1,200,61.59a125.53,125.53,0,0,1,34.2,4.68,89.24,89.24,0,0,1,29.52,14.4,71.88,71.88,0,0,1,20.7,24.48q7.74,14.77,7.74,34.56a78.88,78.88,0,0,1-3.6,24.66,81.62,81.62,0,0,1-9.9,20.34,116.69,116.69,0,0,1-14.4,17.46q-8.1,8.1-16.74,16l-59,52.56h104v52.56Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",c4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e30%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M185.6,323.31V136.11l-47.52,36.72L106.76,130l83.85-61.56h55.11V323.31Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",u4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ad5600;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e1%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",d4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23435f7a;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e6%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",f4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ec9a00;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e13%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",p4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2327e2a4;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e16%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",h4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2300b4fc;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e21%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",g4="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff0062;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3e26%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.74%20199.77%20512%20400%20419.74%20400%200%200%200'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.02%200%20378.94%20199.77%20471.2%20400%20378.94%20400%20339.02%20199.77%20431.28%200%20339.02'/%3e%3c/svg%3e",m4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23777777;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M231.9,151.2l29.2,38.5l-32.4,22.7l-29.2-39.2L171,211l-31.7-22.7l29.2-37.4l-46.4-15.5l12.6-36l45.7,15.8%20V68.4H220v46.8l45.7-14.4l12.2,36L231.9,151.2z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",g1="data:image/svg+xml,%3csvg%20id='레이어_1'%20data-name='레이어%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20512'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232d2d2d;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3enot_ratable%3c/title%3e%3cpolygon%20class='cls-1'%20points='0%200%200%20419.742%20199.77%20512%20400%20419.742%20400%200%200%200'/%3e%3cpath%20class='cls-2'%20d='M299.721,195.153a238.352,238.352,0,0,1-5.4,51.48q-5.4,24.486-17.279,43.02a89.408,89.408,0,0,1-30.78,29.521q-18.9,10.976-45.9,10.979t-46.08-10.979a90.419,90.419,0,0,1-31.14-29.521q-12.066-18.537-17.46-43.02a238.416,238.416,0,0,1-5.4-51.48,235.957,235.957,0,0,1,5.4-51.3q5.4-24.3,17.46-42.48a90.092,90.092,0,0,1,31.14-28.98q19.077-10.8,46.08-10.8t45.9,10.8a89.055,89.055,0,0,1,30.78,28.98q11.88,18.183,17.279,42.48A235.9,235.9,0,0,1,299.721,195.153Zm-61.92,0q0-11.88-1.441-26.28a131.386,131.386,0,0,0-5.4-26.82,58.33,58.33,0,0,0-11.34-20.88q-7.383-8.454-19.26-8.46a24.9,24.9,0,0,0-19.44,8.46,58.718,58.718,0,0,0-11.7,20.88,123.156,123.156,0,0,0-5.58,26.82q-1.443,14.4-1.44,26.28,0,12.243,1.44,26.82a123.283,123.283,0,0,0,5.58,27,58.671,58.671,0,0,0,11.7,20.881q7.56,8.462,19.44,8.459t19.26-8.459a58.284,58.284,0,0,0,11.34-20.881,131.473,131.473,0,0,0,5.4-27Q237.8,207.393,237.8,195.153Z'%20transform='translate(0)'/%3e%3cpolygon%20class='cls-2'%20points='0%20339.025%200%20378.94%20199.77%20471.198%20400%20378.94%20400%20339.025%20199.77%20431.282%200%20339.025'/%3e%3c/svg%3e",v4="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='레이어_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20400%20512'%20style='enable-background:new%200%200%20400%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23B72929;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='0,0%200,419.7%20199.8,512%20400,419.7%20400,0%20'/%3e%3cg%3e%3cpath%20class='st1'%20d='M235.1,292.7c0,4.8-0.9,9.3-2.7,13.5c-1.8,4.2-4.3,7.8-7.6,10.8c-3.2,3-7,5.4-11.3,7.2%20c-4.3,1.8-8.9,2.7-13.7,2.7c-4.8,0-9.3-0.8-13.5-2.5c-4.2-1.7-7.9-4.1-11-7.2c-3.1-3.1-5.6-6.7-7.6-10.8c-1.9-4.1-2.9-8.5-2.9-13.3%20c0-4.6,0.9-8.9,2.7-13.1c1.8-4.2,4.3-7.9,7.4-11c3.1-3.1,6.8-5.6,11.2-7.4c4.3-1.8,8.9-2.7,13.7-2.7c4.8,0,9.4,0.9,13.7,2.7%20c4.3,1.8,8.1,4.2,11.3,7.2c3.2,3,5.8,6.6,7.6,10.8C234.2,283.8,235.1,288.2,235.1,292.7z%20M169.6,238V68.4h60.1V238H169.6z'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st1'%20points='0,339%200,378.9%20199.8,471.2%20400,378.9%20400,339%20199.8,431.3%20'/%3e%3c/g%3e%3c/svg%3e",In={0:h1,1:L3,2:b3,3:G3,4:_3,5:H3,6:z3,7:P3,8:B3,9:U3,10:F3,11:V3,12:$3,13:Y3,14:W3,15:Q3,16:Z3,17:q3,18:K3,19:X3,20:J3,21:e4,22:t4,23:n4,24:r4,25:o4,26:i4,27:l4,28:s4,29:a4,30:c4,31:g1},uc={unrated:h1,bronze:u4,silver:d4,gold:f4,platinum:p4,diamond:h4,ruby:g4,hidden:m4,notratable:g1,warn:v4},m1=n=>{const{initSelectedValue:i,onChange:l}=n,[u,d]=w.useState(i),[p,h]=w.useState(!1),y=w.useRef(null),v=w.useRef(null);return w.useEffect(()=>{d(i)},[i]),w.useEffect(()=>{const S=y.current;if(!S)return;const R=j=>{j.target instanceof Node&&j.target!==S&&!S.contains(j.target)&&h(!1)};return document.addEventListener("click",R),()=>{document.removeEventListener("click",R)}},[y]),{selectedValue:u,isSelectOpen:p,updateSelectedValue:S=>{var R;d(S),h(!1),(R=v.current)==null||R.focus(),l(S)},toggleSelect:()=>{h(S=>!S)},containerRef:y,selectButtonRef:v}},y4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],Na={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},x4=n=>{const{selectedTier:i,onChange:l}=n,{selectedValue:u,updateSelectedValue:d,isSelectOpen:p,toggleSelect:h,containerRef:y,selectButtonRef:v}=m1({initSelectedValue:i,onChange:l});return c.jsxs(I3,{ref:y,children:[c.jsxs(k3,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:p,ref:v,onClick:h,children:[c.jsx(Wd,{src:In[u],alt:""}),c.jsx(Qd,{$tier:u,$isBold:!0,children:Na[u]}),c.jsx(C3,{children:c.jsx(t1,{})})]}),c.jsx(j3,{$isOpen:p,children:y4.map(T=>c.jsx(D3,{children:c.jsxs(M3,{type:"button","aria-label":`${Na[T]}를 경고 시작 티어로 설정하기`,onClick:()=>{d(T)},children:[c.jsx(Wd,{src:In[T],alt:""}),c.jsx(Qd,{$tier:T,$isBold:T===u,children:Na[T]}),T===u&&c.jsx(O3,{children:c.jsx(Co,{})})]})},T))})]})},A4=g.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  height: 46px;
`,v1={none:z.color.LIGHT_GRAY,totamjung:z.color.LIGHTER_BROWN,bojExtendedDark:z.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:z.bojExtendedColor.SKY_BLUE,solvedAcLight:z.color.LIGHT_GRAY,solvedAcDark:z.color.LIGHT_GRAY,solvedAcBlack:z.color.LIGHT_GRAY},Zd={...v1,totamjung:z.color.LEMON},w4={none:z.color.WHITE,totamjung:z.color.DARK_BROWN,bojExtendedDark:z.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:z.bojExtendedColor.DARK_INDIGO,solvedAcLight:z.color.WHITE,solvedAcDark:z.solvedAcColor.DARK_INDIGO,solvedAcBlack:z.color.BLACK},S4=["none","solvedAcLight"],T4=g.input`
  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};
  padding: 0 ${({$horizontalPadding:n})=>n};

  border: ${({$borderWidth:n})=>`${n}px`} solid
    ${({$totamjungTheme:n})=>v1[n]};
  border-radius: ${({$borderRadius:n})=>n};
  background-color: ${({$totamjungTheme:n})=>w4[n]};

  text-align: ${({$textAlign:n})=>n};
  font-size: ${({$fontSize:n})=>n};
  font-weight: ${({$fontWeight:n})=>n};

  color: ${({theme:n,$color:i,$totamjungTheme:l})=>i||(S4.includes(l)?n.color.BLACK:n.color.WHITE)};

  &:focus {
    border-color: ${({theme:n,$totamjungTheme:i,$hasError:l})=>l?n.color.RED:Zd[i]};
    outline: 3px solid
      ${({theme:n,$totamjungTheme:i,$hasError:l})=>$n(l?n.color.RED:Zd[i],.5)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`,Vt=w.forwardRef((n,i)=>{const{width:l,height:u,borderWidth:d=1.5,borderRadius:p="4px",horizontalPadding:h="6px",fontSize:y="13px",fontWeight:v=400,hasError:T=!1,theme:x="totamjung",color:S,textAlign:R="left",...j}=n;return c.jsx(T4,{$width:Nn(l),$height:Nn(u),$borderWidth:d,$borderRadius:Nn(p),$horizontalPadding:Nn(h),$fontSize:Nn(y),$fontWeight:v,$hasError:T,$color:S,$totamjungTheme:x,$textAlign:R,spellCheck:!1,ref:i,...j})}),y1=99,x1=59,A1=/^\d+$/,E4=n=>A1.test(n)&&Number(n)>=0&&Number(n)<=y1,N4=n=>A1.test(n)&&Number(n)>=0&&Number(n)<=x1,R4=n=>{const{initHours:i,initMinutes:l,onChange:u}=n,[d,p]=w.useState(String(i)),[h,y]=w.useState(String(l));return w.useEffect(()=>{p(String(i)),y(String(l))},[i,l]),{hours:d,minutes:h,updateHours:R=>{const j=R.target.value;j.length>=3||p(j)},updateMinutes:R=>{const j=R.target.value;j.length>=3||y(j)},submitHours:()=>{if(!E4(d)||Number(d)===i){p(String(i));return}p(String(Number(d))),u(Number(d),Number(h))},submitMinutes:()=>{if(!N4(h)||Number(h)===l){y(String(l));return}y(String(Number(h))),u(Number(d),Number(h))}}},I4=n=>{const{hours:i,minutes:l,disabled:u,onChange:d}=n,{hours:p,minutes:h,updateHours:y,updateMinutes:v,submitHours:T,submitMinutes:x}=R4({initHours:i,initMinutes:l,onChange:d});return c.jsxs(A4,{children:[c.jsx("img",{src:nm,width:"54px",height:"46px",alt:""}),c.jsx(Vt,{name:"hours",type:"number",width:60,height:46,min:0,max:y1,value:p,borderWidth:2,borderRadius:8,fontSize:26,fontWeight:800,color:z.color.GOLD,textAlign:"center",disabled:u,onChange:y,onBlur:T,"aria-label":"시간"}),c.jsx(pe,{type:"normal",as:"span",fontSize:16,width:30,children:"시간"}),c.jsx(Vt,{name:"minutes",type:"number",width:60,height:46,min:0,max:x1,value:h,borderWidth:2,borderRadius:8,fontSize:26,fontWeight:800,color:z.color.GOLD,textAlign:"center",disabled:u,onChange:v,onBlur:x,"aria-label":"분"}),c.jsx(pe,{type:"normal",as:"span",fontSize:16,width:30,children:"분"})]})},Ee=n=>typeof n=="object"&&n!==null,w1=n=>Ee(n)&&Object.keys(n).every(i=>!isNaN(Number(i))),k4=n=>Array.isArray(n)&&n.every(i=>typeof i=="number"),ml=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(n),dc=n=>typeof n=="number"&&n%1===0&&n>=0&&n<=31,Fn=n=>dc(n)&&n!==31,C4=n=>dc(n)&&n!==0&&n!==31,j4=n=>typeof n=="string"&&["unrated","bronze","silver","gold","platinum","diamond","ruby"].includes(n),D4=n=>/^[1-9]\d*$/.test(n),qd=n=>/^\d+$/.test(n),fc=n=>{if(!(Ee(n)&&"problemTagLockDuration"in n&&"shouldHideTier"in n&&"shouldWarnHighTier"in n&&"warnTier"in n&&"algorithmHiderUsage"in n&&"problemTagLockUsage"in n&&Ee(n.problemTagLockDuration)&&"hours"in n.problemTagLockDuration&&"minutes"in n.problemTagLockDuration&&typeof n.problemTagLockDuration.hours=="number"&&typeof n.problemTagLockDuration.minutes=="number"&&typeof n.shouldHideTier=="boolean"&&typeof n.shouldWarnHighTier=="boolean"&&C4(n.warnTier)&&typeof n.algorithmHiderUsage=="string"&&["click","always"].includes(n.algorithmHiderUsage)&&typeof n.problemTagLockUsage=="string"&&["click","auto"].includes(n.problemTagLockUsage)))return!1;const{hours:i,minutes:l}=n.problemTagLockDuration;return i>=0&&i<100&&l>=0&&l<60&&i%1===0&&l%1===0},pc=n=>fc(n)&&"shouldRevealTierOnHover"in n&&typeof n.shouldRevealTierOnHover=="boolean",hc=n=>pc(n)&&"shouldHideSource"in n&&typeof n.shouldHideSource=="boolean",S1=n=>Ee(n)&&"expire"in n&&"hour"in n&&"minute"in n&&"problem"in n&&typeof n.expire=="number"&&typeof n.hour=="string"&&typeof n.minute=="string"&&typeof n.problem=="number"&&n.hour.length>=1&&n.hour.length<=2&&qd(n.hour)&&n.minute.length>=1&&n.minute.length<=2&&qd(n.minute)&&(n.problem>=1e3&&n.problem%1===0||n.problem===-1),M4=n=>{if(!(Ee(n)&&"font"in n&&"lock"in n&&"predict"in n&&"theme"in n&&typeof n.font=="string"&&typeof n.lock=="string"&&typeof n.predict=="string"&&typeof n.theme=="string"&&typeof n.lock=="string"&&["click","always"].includes(n.lock)&&typeof n.predict=="string"&&["click","always"].includes(n.predict)&&typeof n.theme=="string"&&["yes","no"].includes(n.theme)))return!1;if(n.font==="none")return!0;if(!/^font-\d+$/.test(n.font))return!1;const i=n.font.split("-")[1];if(!D4(i))return!1;const l=Number(i);return l>=1&&l<=19},O4=async()=>{const i=(await ye.storage.local.get(M.HIDER_OPTIONS))[M.HIDER_OPTIONS];return hc(i)?i:sc},L4=n=>{hc(n)&&ye.storage.local.set({[M.HIDER_OPTIONS]:n})},b4={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,shouldRevealTierOnHover:void 0,shouldHideSource:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},G4=()=>{const[n,i]=w.useState({...b4,isLoaded:!1});return w.useEffect(()=>{(async()=>{const x=await O4();i({...x,isLoaded:!0})})()},[]),w.useEffect(()=>{const{isLoaded:x,...S}=n;x&&L4(S)},[n]),{...n,updateProblemTagLockDuration:(x,S)=>{i(R=>R.isLoaded?{...R,problemTagLockDuration:{hours:x,minutes:S}}:R)},updateShouldHideTier:x=>{const S=x==="true";i(R=>R.isLoaded?{...R,shouldHideTier:S}:R)},updateShouldWarnHighTier:x=>{const S=x==="true";i(R=>R.isLoaded?{...R,shouldWarnHighTier:S}:R)},updateShouldRevealTierOnHover:x=>{const S=x==="true";i(R=>R.isLoaded?{...R,shouldRevealTierOnHover:S}:R)},updateShouldHideSource:x=>{const S=x==="true";i(R=>R.isLoaded?{...R,shouldHideSource:S}:R)},updateWarnTier:x=>{i(S=>S.isLoaded?{...S,warnTier:x}:S)},updateAlgorithmHiderUsage:x=>{x!=="click"&&x!=="always"||i(S=>S.isLoaded?{...S,algorithmHiderUsage:x}:S)},updateProblemTagLockUsage:x=>{x!=="click"&&x!=="auto"||i(S=>S.isLoaded?{...S,problemTagLockUsage:x}:S)}}},_4=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 10px;
  position: relative;

  width: 340px;
  height: auto;
`,H4=g.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,z4=()=>{const{problemTagLockDuration:n,shouldHideTier:i,shouldWarnHighTier:l,shouldRevealTierOnHover:u,shouldHideSource:d,warnTier:p,algorithmHiderUsage:h,problemTagLockUsage:y,updateProblemTagLockDuration:v,updateShouldHideTier:T,updateShouldWarnHighTier:x,updateShouldRevealTierOnHover:S,updateShouldHideSource:R,updateWarnTier:j,updateAlgorithmHiderUsage:D,updateProblemTagLockUsage:G}=G4(),{hours:B,minutes:Z}=n;return c.jsxs(_4,{children:[c.jsx(tn,{title:"잠금 시간 설정",iconSrc:ye.runtime.getURL("/lock.png")}),c.jsx(I4,{hours:B,minutes:Z,onChange:v}),c.jsx(tn,{title:"티어 가리개 설정",iconSrc:l1}),c.jsx(En,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:i?"true":i===void 0?"":"false",onChange:T}),c.jsx(En,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!i,options:[{label:"사용하지 않음",value:"false"},{label:c.jsxs(H4,{children:[c.jsx(x4,{selectedTier:p,onChange:j}),c.jsx(pe,{type:"semiPrimary",fontSize:16,children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:l?"true":"false",onChange:x}),c.jsx(En,{legend:"티어 아이콘에 마우스를 올릴 경우 난이도 공개하기",name:"shouldRevealTierOnHover",disabled:!i,options:[{label:"공개",value:"true"},{label:"공개하지 않음",value:"false"}],checkedValue:u?"true":"false",onChange:S}),c.jsx(tn,{title:"출처 가리개 설정",iconSrc:c.jsx(Hg,{})}),c.jsx(En,{legend:"문제의 출처 숨기기",name:"shouldHideSource",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:d?"true":d===void 0?"":"false",onChange:R}),c.jsx(tn,{title:"기본 설정",iconSrc:c.jsx(Ng,{})}),c.jsx(En,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:h??"",onChange:D}),c.jsx(En,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:y??"",onChange:G})]})},P4=g.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,B4=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,U4=n=>{const{show:i}=n;return i?c.jsxs(P4,{children:[c.jsxs(B4,{children:[c.jsx(tn,{title:"알고 있는 알고리즘 관리하기",iconSrc:c.jsx(K2,{})}),c.jsx(y3,{})]}),c.jsx(z4,{})]}):null},F4=g.div`
  display: inline-block;
  position: relative;

  width: ${({$width:n})=>n};
  height: ${({$height:n})=>n};

  padding: ${({$padding:n})=>n};

  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,V4=g.div`
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
`,gc=n=>{const{width:i,height:l,padding:u,title:d,children:p}=n;return c.jsxs(F4,{$width:i,$height:l,$padding:u,children:[d!==""&&c.jsx(V4,{children:d}),p]})},$4=g.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:n})=>n.color.LEMON};
`,Y4=g.span`
  font-size: ${({$fontSize:n})=>n}px;
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:n})=>n.color.LEMON};
  }
`,W4=g.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:n})=>n}px;
  height: ${({$fontSize:n})=>n}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,T1=n=>{const{href:i,fontSize:l,children:u}=n;return c.jsxs($4,{href:i,target:"__blank",rel:"noopener",children:[c.jsx(Y4,{$fontSize:l,children:u}),c.jsx(W4,{$fontSize:l,children:c.jsx(Ag,{})})]})},Q4=g.div`
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
`,Z4=g.p`
  font-size: ${({$fontSize:n})=>n}px;

  color: ${({theme:n})=>n.color.LIGHT_RED};
`,E1=n=>{const{fontSize:i,errorMessage:l,height:u}=n;return c.jsx(Q4,{$fontSize:i,$height:u,children:l!==""&&c.jsxs(c.Fragment,{children:[c.jsx(J2,{}),c.jsx(Z4,{$fontSize:i,role:"alert",children:l})]})})},N1=g.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,R1=re`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};
  border: 2px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 6px;
`,q4=g.div`
  ${R1}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${N1}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,K4=g.div`
  ${R1}

  bottom: 0;
`,X4=g.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:n})=>n.filter.DARK_ORANGE_FILTER};
`,J4=g.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,ev=g.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:n})=>n.color.ORANGE};
`,tv=g.p`
  font-size: 12px;
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,nv=n=>{const{selectedSlotNo:i,isLoaded:l,onClick:u}=n;return c.jsxs(N1,{type:"button","aria-label":`${i}번 슬롯에 추첨 생성하기`,onClick:u,disabled:!l,children:[c.jsxs(q4,{children:[c.jsx(X4,{src:ye.runtime.getURL("/dice.png"),alt:""}),c.jsxs(J4,{children:[c.jsx(ev,{children:"추첨 생성"}),c.jsx(tv,{children:l?`슬롯 번호 − ${i}`:"로딩 중..."})]})]}),c.jsx(K4,{})]})},rv=g.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,I1=re`
  width: 50%;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:n})=>n.color.LIGHTER_BROWN};

  transition: 0.2s;
`,ov=g.button`
  ${I1}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:n})=>n?re`
          border-color: ${({theme:i})=>i.color.MAGENTA};
          background-color: ${({theme:i})=>i.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:i})=>i.color.MAGENTA};

          color: ${({theme:i})=>i.color.WHITE};
        `:re`
          &:hover {
            border-color: ${({theme:i})=>i.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:i})=>i.color.MAGENTA};

            color: ${({theme:i})=>i.color.MAGENTA};
          }
        `}
`,iv=g.button`
  ${I1}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:n})=>n?re`
          border-color: ${({theme:i})=>i.color.AZURE_BLUE};
          background-color: ${({theme:i})=>i.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:i})=>i.color.AZURE_BLUE};

          color: ${({theme:i})=>i.color.WHITE};
        `:re`
          &:hover {
            border-color: ${({theme:i})=>i.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:i})=>i.color.AZURE_BLUE};

            color: ${({theme:i})=>i.color.AZURE_BLUE};
          }
        `}
`,lv=g.span`
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
`,sv=n=>{const{mode:i,onClick:l}=n;return c.jsxs(rv,{children:[c.jsx(ov,{type:"button",$isActivated:i==="easy",onClick:()=>{l("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),c.jsx(iv,{type:"button",$isActivated:i==="manual",onClick:()=>{l("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),c.jsx(lv,{children:"OR"})]})},av=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,cv=g.div`
  display: flex;
  justify-content: space-around;
`,Ra=31,uv=g.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,dv=g.div`
  width: 100%;
  height: 3px;

  background: ${({theme:n})=>`linear-gradient(to right, ${Array.from({length:Ra}).map((i,l)=>Fn(l)?`${n.solvedAcTier[l]} ${l/Ra*100}%, ${n.solvedAcTier[l]} ${(l+1)/Ra*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,Kd=g.input`
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
`,fv=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(uv,{children:[c.jsx(dv,{}),c.jsx(Kd,{type:"range",min:0,max:30,value:i,"aria-label":"시작 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),h=Math.max(Number(p),l);Fn(p)&&Fn(h)&&u(p,h)}}),c.jsx(Kd,{type:"range",min:0,max:30,value:l,"aria-label":"끝 범위 티어 설정하기",onChange:d=>{const p=Number(d.target.value),h=Math.min(Number(p),i);Fn(h)&&Fn(p)&&u(h,p)}})]})},pv=g.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  background-color: ${({theme:n})=>n.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,Xd=g.img`
  width: 26px;
`,hv=g.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`,gv=n=>{const{startTier:i,endTier:l}=n;return c.jsxs(pv,{children:[c.jsx(Xd,{src:In[i],alt:"",draggable:!1}),c.jsx(hv,{children:"~"}),c.jsx(Xd,{src:In[l],alt:"",draggable:!1})]})},mv=g.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,Jd=(n,i)=>i==="bronze"?n.solvedAcTier.BRONZE:i==="silver"?n.solvedAcTier.SILVER:i==="gold"?n.solvedAcTier.GOLD:i==="platinum"?n.solvedAcTier.PLATINUM:i==="diamond"?n.solvedAcTier.DIAMOND:i==="ruby"?n.solvedAcTier.RUBY:n.color.GRAY,vv=g.li`
  width: 32px;
  height: 32px;
`,yv=g.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:n,$rank:i})=>Jd(n,i)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:n,$rank:i})=>`linear-gradient(to top, ${Jd(n,i)}70 0%, transparent 100%)`};
  }
`,xv=g.img`
  width: 16px;
`;g.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 800;
`;const Av={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},e2={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},wv=n=>{const{rank:i,onClick:l}=n;return c.jsx(vv,{children:c.jsx(yv,{type:"button",$rank:i,"aria-label":Av[i],onClick:()=>{l(e2.START[i],e2.END[i])},children:c.jsx(xv,{src:uc[i],alt:""})})})},Sv=["unrated","bronze","silver","gold","platinum","diamond","ruby"],Tv=n=>{const{onClick:i}=n;return c.jsx(mv,{children:Sv.map(l=>c.jsx(wv,{rank:l,onClick:i},l))})},Ev=n=>{const{startTier:i,endTier:l,onChange:u}=n;return c.jsxs(av,{children:[c.jsx(fv,{startTier:i,endTier:l,onChange:u}),c.jsxs(cv,{children:[c.jsx(gv,{startTier:i,endTier:l}),c.jsx(Tv,{onClick:u})]})]})},Nv=g.ul`
  display: flex;
  justify-content: space-between;

  width: 210px;
  height: 18px;

  user-select: none;
`,Rv=g.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 70px;
  height: 18px;
`,Iv=at`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,kv=g.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};

    animation: ${Iv} 0.15s forwards;
  }
`,Cv=g.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:n,$isSelected:i})=>i?n.color.GOLD:n.color.LIGHT_GRAY};
`,jv=[{operator:"OR",description:"OR: 선택된 알고리즘 분류 중 하나 이상 포함되는 문제들만 추첨에서 등장합니다."},{operator:"AND",description:"AND: 선택된 알고리즘 분류 모두를 포함하는 문제들만 추첨에서 등장합니다."},{operator:"NOR",description:"NOR: 선택된 알고리즘 분류 모두를 포함하지 않는 문제들만 추첨에서 등장합니다."}],Dv=n=>{const{selectedOperator:i,onClick:l}=n;return c.jsx(Nv,{children:jv.map(({operator:u,description:d})=>c.jsxs(Rv,{children:[u===i&&c.jsx(kv,{children:c.jsx(Co,{})}),c.jsx(Cv,{type:"button",title:d,"aria-label":`알고리즘 검색 옵션을 ${u}로 설정하기`,$isSelected:u===i,onClick:()=>{l(u)},children:u})]},u))})},Mv=g.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:n,$isOpen:i})=>i&&re`
      & > ul {
        border-color: ${n.color.LEMON};
        box-shadow: 0 0 12px ${n.color.GOLD}70;
      }
    `}
`,k1=re`
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
`,Ov=g.ul`
  ${k1}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,Lv=g.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  color: ${({theme:n})=>n.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:n})=>!n&&re`
      opacity: 0;
    `}

  ${({theme:n,$isOpen:i})=>i&&re`
      border-color: ${n.color.LEMON};
      outline: 3px solid ${n.color.LEMON}70;
    `}
`,bv=g.ul`
  ${k1}

  position: absolute;

  height: ${({$isOpen:n})=>n?"90px":"64px"};

  transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,Gv=g.li`
  display: inline-block;

  height: 26px;
`,_v=g.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:n})=>n.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.color.DARK_BROWN};
`,Hv=g.p`
  overflow: hidden;

  color: ${({theme:n})=>n.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,zv=g.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LEMON};
  }
`,t2=w.forwardRef((n,i)=>{const{id:l,name:u,mode:d,tabIndex:p,onClick:h,onKeyDown:y}=n;return c.jsx(Gv,{children:c.jsxs(_v,{type:"button",tabIndex:p,"aria-label":d==="add"?`${u}을 검색에 포함할 알고리즘 목록에 추가하기`:`${u}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{h(l)},onKeyDown:y,ref:i,children:[c.jsx(Hv,{children:u}),d==="delete"&&c.jsx(zv,{children:c.jsx(Sg,{})})]})})}),C1=0,Pv=30,Bv=31,j1=1e3,D1=99999,M1=500,No=300,Wa=5,Ro=30,Uv=/^\w{3,20}$/,Fi=1e8,n2=/^([1-9][0-9]*|0)$/,Qn=512,il=50,Fv=5,Vv=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,[u,d]=w.useState(!1),[p,h]=w.useState(""),y=w.useRef(null),v=w.useRef(null),T=D=>{h(D.target.value)},x=i.length<Wa?c1(p).filter(({id:D})=>!i.includes(D)).map(({id:D})=>D):[],S=D=>{if(D.key==="Enter"){if(x.length===0)return;l([...i,x[0]]),h("")}if(D.key==="Backspace"){if(p!=="")return;l(i.slice(0,-1))}},R=D=>{l([...i,D]),h("")},j=D=>{l(i.filter(G=>G!==D))};return w.useEffect(()=>{const D=y.current,G=v.current;if(!D||!G)return;const B=q=>{const F=q.target;!F||!(F instanceof Node)||d(D.contains(F))},Z=()=>{document.activeElement!==document.body&&d(D.contains(document.activeElement))},V=()=>{G.focus()};return document.addEventListener("mousedown",B),document.addEventListener("focusin",Z),document.addEventListener("focusout",Z),D.addEventListener("click",V),()=>{document.removeEventListener("mousedown",B),document.removeEventListener("focusin",Z),document.removeEventListener("focusout",Z),D.removeEventListener("click",V)}},[y,v]),{isOpen:u,inputValue:p,searchedAlgorithmIds:x,updateInputValue:T,processActionIfKeyPress:S,addAlgorithmId:R,deleteAlgorithmId:j,containerRef:y,inputRef:v}},$v=n=>{const{selectedAlgorithmIds:i,onChange:l}=n,{isOpen:u,inputValue:d,searchedAlgorithmIds:p,updateInputValue:h,processActionIfKeyPress:y,addAlgorithmId:v,deleteAlgorithmId:T,containerRef:x,inputRef:S}=Vv({selectedAlgorithmIds:i,onChange:l}),{getRovingProps:R}=To({count:i.length}),{getRovingProps:j}=To({count:p.length});return c.jsxs(Mv,{ref:x,$isOpen:u,tabIndex:-1,children:[c.jsx(Ov,{tabIndex:-1,children:c.jsxs(c.Fragment,{children:[i.map((D,G)=>{const B=Eo.find(({id:V})=>V===D),Z=B?B.name:"";return c.jsx(t2,{mode:"delete",id:D,name:Z,...R(G),onClick:T},D)}),c.jsx(Lv,{ref:S,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:u,value:d,onChange:h,onKeyDown:y})]})}),c.jsx(bv,{$isOpen:u,tabIndex:-1,children:p.map((D,G)=>{const B=Eo.find(({id:V})=>V===D),Z=B?B.name:"";return c.jsx(t2,{mode:"add",id:D,name:Z,...j(G),onClick:v},D)})})]})},Yv=n=>typeof n=="string"&&["ko","en","ko/en","all"].includes(n),Wv=n=>Ee(n)&&"mode"in n&&"title"in n&&"handle"in n&&"solvedMin"in n&&"solvedMax"in n&&"language"in n&&"startTier"in n&&"endTier"in n&&"searchOperator"in n&&"algorithmIds"in n&&"customQuery"in n&&typeof n.mode=="string"&&["easy","manual"].includes(n.mode)&&typeof n.title=="string"&&typeof n.handle=="string"&&typeof n.language=="string"&&typeof n.solvedMin=="string"&&typeof n.solvedMax=="string"&&k4(n.algorithmIds)&&Fn(n.startTier)&&Fn(n.endTier)&&typeof n.searchOperator=="string"&&["OR","AND","NOR"].includes(n.searchOperator)&&typeof n.customQuery=="string",Qv=n=>{const{mode:i,title:l,handle:u,solvedMin:d,solvedMax:p,startTier:h,endTier:y,algorithmIds:v,customQuery:T}=n,x=i==="easy"?[r2(l),Zv(u),qv(d,p),Kv(h,y),Xv(v)]:[r2(l),Jv(T)];for(let S=0;S<x.length;S++){const R=x[S];if(!R.isValid)return R}return{isValid:!0}},r2=n=>n.length>Ro?{isValid:!1,errorMessage:`추첨 이름은 ${Ro}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},Zv=n=>n.trim()===""?{isValid:!0}:n.length<3||n.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:Uv.test(n)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},qv=(n,i)=>{const l=Number(n),u=Number(i),d=n.trim()==="",p=i.trim()==="";return!d&&!n2.test(n)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!p&&!n2.test(i)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!d&&l>Fi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Fi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!p&&u>Fi?{isValid:!1,errorMessage:`맞은 사람 수는 ${Fi.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!d&&!p&&l>u?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Kv=(n,i)=>{const l=Number(n),u=Number(i);return l>u?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},Xv=n=>n.length>Wa?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${Wa.toLocaleString()}개 이하여야 해요.`}:n.every(l=>typeof l=="number"&&l%1===0&&l>=1&&l<=a1)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Jv=n=>n.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:n.length>Qn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Qn}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},ey=n=>{const{mode:i,handle:l,solvedMin:u,solvedMax:d,language:p,startTier:h,endTier:y,searchOperator:v,algorithmIds:T,customQuery:x}=n;if(i==="manual")return x.replace(/\n/g," ").trim();const S=ry(T),R=oy(p),j=iy(v),D=l.trim()!=="",G=S.length>0,B=D?`~@${l} `:"",Z=ty(u,d),V=R===""?"":`${R} `,q=ny(h,y),F=G?S.length===1?`${j==="~"?"~":""}${S[0]}`:`(${j==="~"?"~":""}${S.join(j)})`:"";return`(*0&!s?|!*0) o? -w? ${B}${Z}${V}${q}${F}`.trim()},ty=(n,i)=>n.trim()===""&&i.trim()===""?"":n===i?`s#${n} `:`s#${n}..${i} `,Ia=["b","s","g","p","d","r"],ny=(n,i)=>{if(n===0&&i===30)return"";if(n%5===1&&n+4===i)return`*${Ia[Math.floor(n/5)]} `;if(n%5===1&&i%5===0){const l=Ia[Math.floor(n/5)],u=Ia[Math.floor(i/5)-1];return`*${l}..${u} `}return n===i?`*${n} `:`*${n}..${i} `},ry=n=>{const i=[];return n.forEach(l=>{var d;const u=(d=Eo.find(p=>p.id===l))==null?void 0:d.tag;u&&i.push(`#${u}`)}),i},oy=n=>{switch(n){case"ko":return"%ko";case"en":return"(%en~%ko~%ja~%sv)";case"ko/en":return"(%ko|(%en~%ja~%sv))";default:return""}},iy=n=>{switch(n){case"OR":return"|";case"AND":return"&";default:return"~"}},o2={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},ly=n=>{const{selectedSlotNo:i,onSubmit:l}=n,[u,d]=w.useState(o2),[p,h]=w.useState(""),[y,v]=w.useState(void 0),{mode:T,title:x,handle:S,solvedMin:R,solvedMax:j,language:D,startTier:G,endTier:B,searchOperator:Z,algorithmIds:V,customQuery:q}=u,F=w.useRef(null),ne=w.useRef(null),K=w.useRef(null),W=w.useRef(null),xe=w.useRef(null);return{mode:T,title:x,handle:S,solvedMin:R,solvedMax:j,language:D,startTier:G,endTier:B,searchOperator:Z,algorithmIds:V,customQuery:q,errorMessage:p,errorElementName:y,setMode:se=>{d(H=>({...H,mode:se})),h(""),v(void 0)},setRandomDefenseInputValue:se=>{const{name:H,value:Y}=se.target;H in o2&&d(U=>({...U,[H]:Y}))},setLanguage:se=>{Yv(se)&&d(H=>({...H,language:se}))},setTierRange:(se,H)=>{d(Y=>({...Y,startTier:se,endTier:H}))},setSearchOperator:se=>{d(H=>({...H,searchOperator:se}))},setAlgorithmIds:se=>{d(H=>({...H,algorithmIds:se}))},setCustomQuery:se=>{d(H=>({...H,customQuery:se}))},submitRandomDefense:()=>{var Y,U,N,O,te;if(!Wv(u))return;const se=Qv(u);if(se.isValid){const oe=u.title.trim()===""?`추첨 ${i}`:u.title,ce=ey(u);l(oe,ce),h(""),v(void 0);return}switch(h(se.errorMessage),v(se.focusElementName),se.focusElementName){case"title":(Y=F.current)==null||Y.select();break;case"handle":(U=ne.current)==null||U.select();break;case"solvedMin":(N=K.current)==null||N.select();break;case"solvedMax":(O=W.current)==null||O.select();break;case"customQuery":(te=xe.current)==null||te.select();break}},titleRef:F,handleRef:ne,solvedMinRef:K,solvedMaxRef:W,customQueryRef:xe}},sy=g.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,ay=g.div`
  position: absolute;
  top: -32px;
  right: 0;
`,cy=g.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,i2=g.div`
  display: flex;
  column-gap: ${({$columnGap:n})=>n||0};

  width: 100%;
`,ka=g.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,Vi=g.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:n})=>n};
`,uy=g.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,dy=g.div`
  display: flex;
  justify-content: center;
`,fy=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,py=g.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,hy=g.div`
  overflow: visible;
  position: relative;

  width: ${({$width:n})=>n};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,gy=g.button`
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

  ${({theme:n,$isActivated:i})=>i?re`
          border: 1.5px solid ${n.color.LEMON};
          box-shadow: 0 0 12px ${n.color.GOLD}70;
        `:re`
          border: 1.5px solid ${n.color.LIGHTER_BROWN};
        `}
`;g.img`
  width: 12px;
  height: auto;
`;const l2=g.p`
  font-size: 14px;
  color: ${({theme:n})=>n.color.WHITE};
  font-weight: ${({$isBold:n})=>n?700:400};

  transition: font-weight 0.1s;
`,my=g.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,vy=g.ul`
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
`,yy=g.li`
  padding: 2px;
`,xy=g.button`
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
`,Ay=g.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,wy=n=>{var j;const{options:i,selectedValue:l,width:u,ariaLabel:d,onChange:p}=n,{selectedValue:h,updateSelectedValue:y,isSelectOpen:v,toggleSelect:T,containerRef:x,selectButtonRef:S}=m1({initSelectedValue:l,onChange:p}),R=((j=i.find(({value:D})=>D===h))==null?void 0:j.label)??"";return c.jsxs(hy,{ref:x,$width:u,role:"combobox",children:[c.jsxs(gy,{type:"button","aria-label":d,"aria-haspopup":"listbox","aria-expanded":v,onClick:T,ref:S,$isActivated:v,children:[c.jsx(l2,{$isBold:!0,children:R}),c.jsx(my,{children:c.jsx(t1,{})})]}),c.jsx(vy,{$isOpen:v,role:"listbox","aria-labelledby":d,children:i.map(({label:D,value:G})=>c.jsx(yy,{role:"option","aria-selected":G===h,children:c.jsxs(xy,{type:"button",onClick:()=>{y(G)},children:[c.jsx(l2,{$isBold:G===h,children:D}),G===h&&c.jsx(Ay,{children:c.jsx(Co,{})})]})},G))})]})},Sy=n=>Ee(n)&&"autocomplete"in n&&"tags"in n&&Ty(n.autocomplete)&&Ny(n.tags),Ty=n=>Array.isArray(n)&&n.every(i=>Ey(i)),Ey=n=>Ee(n)&&"caption"in n&&"description"in n&&typeof n.caption=="string"&&typeof n.description=="string",Ny=n=>Array.isArray(n)&&n.every(i=>Ry(i)),Ry=n=>Ee(n)&&"caption"in n&&"name"in n&&typeof n.caption=="string"&&typeof n.name=="string",Iy=async n=>{try{const i=await fetch(`https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(n)}`,{headers:{"x-solvedac-language":"ko"}});if(!i.ok)return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."};const l=await i.json();return Sy(l)?{success:!0,suggestions:ky(l)}:{success:!1,errorMessage:"예기치 못한 오류가 발생했습니다. 개발자에게 이 버그를 제보해주세요."}}catch{return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."}}},ky=n=>{const{autocomplete:i,tags:l}=n;return[...i.filter(({description:d})=>d!==""),...l.map(({name:d,caption:p})=>({caption:p,description:d}))].slice(0,Fv)},Cy=["*","tier:","id:","s#","solved:","#","tag","/","from:","t#","average_try:","µ#","%","lang:","@","solved_by:","o@","solved_by_org","t@","tried_by:","v@","voted_by:","c@","contributed_by:","c/","in_class:","e/","in_class_essentials:","s?","standard:","p?","sprout:","sp?","o?","solvable:","v?","votable:","c?","contributable:","w?","warning:","v#","voted:","c#","contributed:","**","vote_average:","a*","µ*"],jy=/^[A-z가-힣 ]+$/,Dy=["|","&","(",")","!","~","-"," "],My=n=>{if(jy.test(n))return 0;for(let i=n.length-1;i>=0;i-=1)if(Dy.includes(n[i]))return i+1;return 0},Oy=(n,i)=>{const l=My(n);return`${n.slice(0,l)}${i}${Cy.includes(i)?"":" "}`},Ly=n=>{const{value:i,textareaRef:l,onChange:u}=n,[d,p]=w.useState([]),[h,y]=w.useState("잠시만 기다려주세요..."),v=w.useRef(i),T=w.useRef(!1);w.useEffect(()=>{if(v.current=i,T.current)return;T.current=!0;const j=async()=>{const D=await Iy(v.current);if(D.success){p(D.suggestions),y(null);return}p([]),y(D.errorMessage)};setTimeout(()=>{T.current=!1,j()},200)},[i]);const x=j=>{const D=j.target.value.replace(/\n/g,"");u(D)},S=j=>{var G;const D=Oy(i,j.caption);u(D),l&&"current"in l&&((G=l.current)==null||G.focus())};return{suggestions:d,fallbackMessage:h,textareaRef:l,updateQuery:x,applySuggestion:S,applyFirstSuggestionIfEnterKeyPressed:j=>{j.code==="Enter"&&d.length>0&&!j.nativeEvent.isComposing&&S(d[0])}}},by=g.div`
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
      ${({theme:n,$hasError:i})=>$n(i?n.color.RED:n.color.LEMON,.5)};
  }

  transition: outline 0.05s;
`,Gy=g.textarea`
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
`,Qa=g.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  column-gap: 20px;
  flex-wrap: wrap;

  width: 100%;
  height: 48px;

  padding: 4px 6px;
`,Za=g.div`
  display: inline-flex;

  width: auto;
  height: 20px;
`,O1=g.button`
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
`,_y=g.div`
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

  ${Qa}:not(:has(:focus-visible)) ${Za}:first-child & {
    opacity: 0.6;
  }

  ${Qa} ${Za} ${O1}:focus-visible + & {
    opacity: 1;
  }
`,L1=w.forwardRef((n,i)=>{const{width:l,height:u,value:d,placeholder:p,hasError:h=!1,onChange:y}=n,{suggestions:v,fallbackMessage:T,updateQuery:x,applySuggestion:S,applyFirstSuggestionIfEnterKeyPressed:R}=Ly({value:d,textareaRef:i,onChange:y});return c.jsxs(by,{$width:Nn(l),$height:Nn(u),$hasError:h,children:[c.jsx(Gy,{value:d,onChange:x,onKeyDown:R,ref:i,placeholder:p,minLength:1,maxLength:Qn,spellCheck:!1}),c.jsx(Qa,{tabIndex:-1,children:T?c.jsx(pe,{as:"span",type:"gray",fontSize:13,children:T}):v.length===0?c.jsx(pe,{as:"span",type:"gray",fontSize:13,children:"자동완성 결과가 없습니다."}):v.map(j=>c.jsxs(Za,{children:[c.jsx(O1,{title:j.description,type:"button",onClick:()=>S(j),children:j.caption}),c.jsx(_y,{children:c.jsx(_g,{})})]},j.caption))})]})}),Hy=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],zy=n=>{const{selectedSlotNo:i,isLoaded:l,onSubmit:u}=n,{mode:d,title:p,handle:h,solvedMin:y,solvedMax:v,language:T,startTier:x,endTier:S,searchOperator:R,algorithmIds:j,customQuery:D,errorMessage:G,errorElementName:B,setMode:Z,setRandomDefenseInputValue:V,setLanguage:q,setTierRange:F,setSearchOperator:ne,setAlgorithmIds:K,setCustomQuery:W,submitRandomDefense:xe,titleRef:_e,handleRef:Oe,solvedMinRef:qe,solvedMaxRef:Ke,customQueryRef:He}=ly({selectedSlotNo:i,onSubmit:u});return c.jsx(gc,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:c.jsxs(sy,{children:[c.jsx(ay,{children:c.jsx(E1,{errorMessage:G,fontSize:14})}),c.jsx(cy,{children:c.jsx(sv,{mode:d,onClick:Z})}),c.jsxs(ka,{$width:"380px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"추첨 이름"}),c.jsx(Vt,{ref:_e,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"0 ~ 30자","aria-label":"추첨 이름",name:"title",value:p,maxLength:30,hasError:B==="title",onChange:V})]}),d==="easy"?c.jsxs(c.Fragment,{children:[c.jsxs(i2,{$columnGap:"50px",children:[c.jsxs(ka,{$width:"190px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"검색에서 제외할 닉네임"}),c.jsx(Vt,{ref:Oe,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"3 ~ 20자","aria-label":"검색에서 제외할 닉네임",name:"handle",value:h,minLength:3,maxLength:20,hasError:B==="handle",onChange:V})]}),c.jsxs(Vi,{$width:"166px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"맞은 사람 수"}),c.jsxs(uy,{children:[c.jsx(Vt,{ref:qe,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 하한",name:"solvedMin",value:y,hasError:B==="solvedMin",onChange:V}),c.jsx(pe,{type:"primary",fontSize:16,children:"~"}),c.jsx(Vt,{ref:Ke,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 상한",name:"solvedMax",value:v,hasError:B==="solvedMax",onChange:V})]})]}),c.jsxs(Vi,{$width:"190px",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"문제 언어"}),c.jsx(wy,{options:Hy,selectedValue:T,width:"130px",ariaLabel:"문제 언어 고르기",onChange:q})]})]}),c.jsxs(Vi,{$width:"100%",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"난이도 범위"}),c.jsx(dy,{children:c.jsx(Ev,{startTier:x,endTier:S,onChange:F})})]}),c.jsxs(Vi,{$width:"446px",children:[c.jsxs(i2,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"검색에 포함할 알고리즘"}),c.jsx(Dv,{selectedOperator:R,onClick:ne})]}),c.jsx($v,{selectedAlgorithmIds:j,onChange:Be=>{K(Be)}})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs(ka,{$width:"100%",children:[c.jsx(pe,{type:"primary",fontSize:16,children:"쿼리"}),c.jsx(L1,{ref:He,width:"100%",height:"160px",value:D,placeholder:`1 ~ ${Qn}자`,hasError:B==="customQuery",onChange:W})]}),c.jsxs(fy,{children:[c.jsxs(pe,{type:"normal",fontSize:14,children:[c.jsx(T1,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),c.jsx(pe,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]})]}),c.jsx(py,{children:c.jsx(nv,{isLoaded:l,selectedSlotNo:i,onClick:xe})})]})})},Py=g.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,By=g.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,Uy=g.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`,Fy=g.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,Vy=g.li`
  width: 26px;
  height: 26px;
`,$y=g.button`
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

  ${({theme:n,$isSelected:i,$isOccupied:l})=>{if(i)return re`
        border-color: ${n.color.LEMON};
        background-color: ${n.color.LEMON};
        outline: 3px solid ${n.color.LEMON}70;

        color: ${n.color.DARK_BROWN};
      `;if(l)return re`
        border-color: ${n.color.GOLD};

        color: ${n.color.GOLD};
      `}}
`,Yy=[1,2,3,4,5,6,7,8,9,0],Wy=n=>{const{selectedSlotNo:i,occupiedSlotNos:l,onChange:u}=n;return c.jsx(Fy,{children:Yy.map(d=>c.jsx(Vy,{children:c.jsx($y,{$isSelected:d===i,$isOccupied:l.includes(d),onClick:()=>{u(d)},"aria-label":`${d}번 슬롯 선택하기. ${d===i?"이미 선택되어 있는 슬롯입니다":""}`,children:d})},d))})},Qy=g.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,Zy=g.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,qy=g.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,s2=g.span`
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
`,Ky=g.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 16px;
`,Xy=g.p`
  color: ${({theme:n})=>n.color.LIGHT_GRAY};
  font-size: 14px;
`,b1=re`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,Jy=g.div`
  ${b1}

  white-space: nowrap;
`,ex=g.div`
  ${b1}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,tx=n=>c.jsxs(Qy,{children:[c.jsxs(Zy,{children:[c.jsx(s2,{$backgroundColor:"gold",children:"추첨 이름"}),c.jsx(Jy,{children:n.isEmpty?c.jsx(Ky,{children:"(비어 있음)"}):c.jsx(pe,{type:"primary",fontSize:16,children:n.title})})]}),c.jsxs(qy,{children:[c.jsx(s2,{$backgroundColor:"white",children:"쿼리"}),c.jsx(ex,{children:n.isEmpty?c.jsx(Xy,{children:"(비어 있음)"}):c.jsx(pe,{type:"code",fontSize:13,children:n.query})})]})]}),nx=g.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,rx=g.button`
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
`,ox=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,ix=(n,i)=>n?n==="F2"?`단축키: F2 + ${i}`:`단축키: ${ox?"Option":"Alt"} + ${i}`:"단축키: 미사용",lx=n=>{const{selectedSlotNo:i,hotkey:l,onClick:u}=n;return c.jsxs(nx,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:ix(l,i)}),c.jsx(rx,{"aria-label":"단축키 전환하기",onClick:u,children:c.jsx(Tg,{})})]})},sx=[1,2,3,4,5,6,7,8,9,0],ax=n=>{const{quickSlotsInfo:i,isLoaded:l,onHotkeyChange:u,onSlotChange:d,onSlotDelete:p,onSlotNoChange:h}=n,{selectedSlotNo:y,slots:v,hotkey:T}=i,[x,S]=w.useState(!1),[R,j]=w.useState(0),D=()=>{if(l){if(T===null){u("Alt");return}if(T==="Alt"){u("F2");return}u(null)}},G=()=>{const K=[];return sx.forEach(W=>{v[W].isEmpty||K.push(W)}),K},B=()=>{S(!0)},Z=()=>{S(!1)},V=(K,W)=>{if(!l)return;const xe=K.trim()===""?`추첨 ${y}`:K;d(xe,W),Z()},q=()=>{l&&p()},F=K=>{h(K)};return{slot:v[y],selectedSlotNo:y,hotkey:T,occupiedSlotNos:G(),gachaProblemCount:R,shouldEditModalShow:x,switchHotkey:D,openEditModal:B,closeEditModal:Z,updateSlot:V,deleteSlot:q,setSelectedSlotNo:F,setGachaProblemCount:j}},cx=(n,i)=>n.length>Ro?{isValid:!1,errorMessage:`추첨 이름의 길이가 너무 길어요. ${Ro}자 이하가 되도록 줄여 주세요.`,focusElementName:"title"}:i.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:i.length>Qn?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${Qn}자 이하가 되도록 줄여 주세요.`,focusElementName:"query"}:{isValid:!0},ux=n=>{const{initTitle:i,initQuery:l,onSlotChange:u}=n,[d,p]=w.useState(i),[h,y]=w.useState(l),[v,T]=w.useState(""),[x,S]=w.useState(void 0),R=w.useRef(null),j=w.useRef(null);return w.useEffect(()=>{p(i),y(l),T(""),S(void 0)},[i,l]),{title:d,query:h,errorMessage:v,isTitleElementHasErrors:x==="title",isQueryElementHasErrors:x==="query",setQuery:y,setTitle:p,submitSlotInfo:()=>{const Z=cx(d,h);if(Z.isValid){u(d,h),T("");return}const V=R.current,q=j.current,{focusElementName:F}=Z;F==="title"&&(V==null||V.select()),F==="query"&&(q==null||q.select()),S(F),T(Z.errorMessage)},titleRef:R,queryRef:j}},dx=g.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 320px;
`,a2=g.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`,fx=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`,px=n=>{const{title:i,query:l,open:u,onClose:d,onSlotChange:p}=n,{title:h,query:y,errorMessage:v,isTitleElementHasErrors:T,isQueryElementHasErrors:x,setQuery:S,setTitle:R,submitSlotInfo:j,titleRef:D,queryRef:G}=ux({initTitle:i,initQuery:l,onSlotChange:p});return c.jsxs(Zn,{title:"추첨 수정",open:u,onClose:d,closeOnBackdropClick:!1,children:[c.jsxs(dx,{children:[c.jsxs(a2,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"추첨 이름"}),c.jsx(Vt,{type:"text",width:"100%",height:"30px",name:"title",value:h,ref:D,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:T,"aria-label":"새로운 추첨 이름을 입력해주세요",onChange:B=>{R(B.target.value)}})]}),c.jsxs(a2,{children:[c.jsx(pe,{type:"primary",fontSize:16,children:"쿼리"}),c.jsx(L1,{width:"100%",height:"150px",value:y,ref:G,hasError:x,placeholder:"새로운 쿼리를 입력해주세요",onChange:S})]}),c.jsxs(fx,{children:[c.jsxs(pe,{type:"normal",fontSize:14,children:[c.jsx(T1,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),c.jsx(pe,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]}),c.jsx(E1,{fontSize:14,errorMessage:v})]}),c.jsxs(jo,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:z.color.LIGHT_GRAY,disabled:!1,onClick:d}),c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:z.color.GOLD,disabled:!1,onClick:j})]})]})},hx=at`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`,gx=at`
  0% {
   opacity: 0.3;
  }
  
  50% {
    opacity: 1;
  }

  100% {
   opacity: 0.3;
  }
`,mx=at`
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
`,vx=at`
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
`,yx=at`
  from {
    pointer-events: none;
    opacity: 0;
  }

  to {
    pointer-events: auto;
    opacity: 1;
  }
`,xx=g.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 550px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${um});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }
`,c2=g.div`
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

  ${({$align:n})=>n==="left"?re`
          left: 20px;
        `:re`
          right: 20px;
        `};
`,u2=g.div`
  display: inline-block;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};
`,G1=re`
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
`,Ax=g.button`
  ${G1}

  & > img {
    height: 70%;

    filter: ${({theme:n})=>n.filter.LIGHT_GRAY_FILTER};
  }
`,wx=g.button`
  ${G1}

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_GRAY};
  }
`,Sx=g.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,Tx=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,Ex=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Nx=g.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`,Rx=g.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIGHT_RED};
  }
`,Ix=g.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({theme:n})=>n.color.LIGHT_RED};
  text-align: center;
`,kx=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,d2=g.li`
  font-size: 16px;
  color: ${({theme:n})=>n.color.WHITE};
  word-break: break-all;
`,Ca=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;
`,Cx=g.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`,jx=g.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.WHITE};
  }

  animation: ${hx} 3s linear infinite;
`,f2=g.div`
  display: flex;
  column-gap: 8px;
`,Dx=g.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.LIGHT_GRAY};

  animation: ${gx} 2s linear infinite;
`,Mx=g.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100%;
`,Ox=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`,Lx=g.div`
  width: 25px;
  height: 25px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.PURE_WHITE};
  }

  animation: ${mx} 1.5s infinite;
`,bx=g.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;

  color: ${({theme:n})=>n.color.WHITE};
`,Gx=g.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`,_x=g.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 60px 20px 20px 20px;

  opacity: 0;
  animation: ${vx} cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s 0.3s forwards;
`,Hx=g.div`
  position: absolute;
  left: 0;
  bottom: 65px;

  width: 100%;
  height: 20px;
`,zx=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;

  opacity: 0;
  pointer-events: none;
  animation: ${yx} 0.3s 1s forwards;
`,Px="/assets/unrated-card-iGk2lhrr.png",Bx="/assets/bronze-card-Ctc25mzn.png",Ux="/assets/silver-card-Cgb8QXRF.png",Fx="/assets/gold-card-DjMsoKXy.png",Vx="/assets/platinum-card-CZ601BWQ.png",$x="/assets/diamond-card-Eub_to2I.png",Yx="/assets/ruby-card--BnHlKWe.png",Wx="/assets/hidden-card-BS-zY2RF.png",Qx="/assets/card-box-front-black-Bn2hoJwG.png",Zx="/assets/card-box-front-red-CP52fAYR.png",qx="/assets/card-box-front-green-CaU66ZRJ.png",Kx="/assets/card-box-front-blue-BM7ozDKr.png",Xx="/assets/card-box-front-gold-as3E5etT.png",Jx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6MzMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNGZmNjY1Ni02ODhjLTdkNGYtOGJhNS1iYzFmNTM2MjdkZWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZmY2NjU2LTY4OGMtN2Q0Zi04YmE1LWJjMWY1MzYyN2RlZiIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNjo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgKRT1kAAAOJSURBVHic7d0xchNJFMbx1z1VMolLE26VPa4mIzQ3gBuwN+AGcAM22xBu4CPADSAkg802Q5Tt3FYozeveRHaxxmBNv+6xLP1/mV0186YUdM1rff3kZGRd170UkZOx6wK4d3+enp5+GLOgG7NYCCGo6hcRacesC2AjXDRN83Q2m83GKujHKiQioqpvhcUN2FWtqo7avTVjFTo6OnotIq/HqgdgI4W2bS8vLy8/j1FslBb14ODg2Hv/UXh7AyAiMcan5+fnX2vXqd6ihhDapmlOhMUNwMrqhad+ndoFVPVNSum4dh0AD0rbdd372kWq7sF1XfdCRN7VrAHgwXoynU7/mc/n/9YqUG0PLoTQquo3oTUF8GtVoyPVWtTV18FtrfsD2ApVoyNVWlQiIQAGqBYdKd6icloBQI4a0ZGiLepq343WFMBg3vvi36oWXeD6vn8lIs9K3hPAzghd1xXdjyvWoh4eHj5zzr2XzLe3lJIsFgtJKZV6JAD3xDknk8lEnBu+xKSUnp+dnX0q8hwlbhJCaGOMHy2B3sViITHGEo8DYAN472UymeRcetE0zePZbHZhfgbrDUTspxX6vmdxA7ZMjFH6vs+5tFXVIvtx5pjIKhLyV+71KaXcDwHAhosxStM0Oa1qKHHKwdSiWiMhKSVZLpe8vQFbzDkne3t7OZeaTzmYWlTrAEtVZXEDttzVi0yGNsZoalWzW1TraQVDfw7ggUkpifc+p1X9w3LKIatFtQ6wJBIC7B5LdCT3lMPgFrXEAEtVZXEDdoyhVc0ekDl4gbNGQlSV1hTYUTHG3H33rAGZg/bgrAMsLSs4gO1giI4MHpC5doUSAyw5rQBAZLzoyNotqnVKCKcVAFwxBPwHDchcq0W1RkI4rQDgJssph3WjI3femUgIgFoMrepa0ZHftqghhNZ7bz6twOIG4DZXL0A51hmQ+dsFzjrAktMKAO5iiI6Eu6Ijv9yDWw2wfCcij3IqEwkBsK5a0ZFb78YASwBjqzEg89YWVVVPGGAJYEw1BmT+1KISCQFwX4wDMr/P5/OvP/7zf3dhgCWA+2Y55RBjfP5jdOS6RS3xm6YMsARgZYiOtDejI9cLXIzxpRgjIaqaezkAXDNGR95e/eFEOK0AYPOU+G1VX2KA5XK5ZHEDUJQlS7v6EXpp9vf3/xaRF7kP0fc9rSmAKlJK4pwT7wfP5n00nU6P/wNvYiJR2sRuggAAAABJRU5ErkJggg==",e5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2NWJjNmE2LTdhYjMtNGQ0Ny1hYTI1LWIxYzQ5NmFkZDI5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2Q1YjQwOC1jZjc1LTZhNGMtODg4Mi1kMGViNzJjYzE3ZGQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3ZDViNDA4LWNmNzUtNmE0Yy04ODgyLWQwZWI3MmNjMTdkZCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozNzoyOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjViYzZhNi03YWIzLTRkNDctYWEyNS1iMWM0OTZhZGQyOTYiIHN0RXZ0OndoZW49IjIwMjQtMTItMTdUMTI6NDc6MzQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46OB6bAAAD0UlEQVR4nO3dS24bRxCA4eomQSm72dsjTG4g7wLJAkY3kG+gnMC6QY6gI+gI9g0swE6QXXKDEKC91zKa6e7KwqRhO9ZjuqebFPl/OwkY1mhT6GpWlYyswUldX6rIxTpiA1iLtx8Wi1clA6qqmJIBRUSO6vrcilyVjgtgvYzIq/eLxdtS8YonuF+appl6/5eIVCXjAtgIN24yefHnfD4vEUxVxZYItDL1/lJIbsCuqqbeF63eiiW444ODCxE5KxUPwEZql7mgiCIl6tGzZ4fW2nfC6Q2AiIQQXvzx6dPfOWMUKVHbpqnsZHIlJDcAS8sDT/44uQN4738T1cPccQA8KdXLun6TO0jWEvWkrs9UJPsfAeBpytk6krVNpG2aynn/j1CaArhbttaRrHdw7vPXwVWuzwewFbK2jmRJcLSEABggW+vI6CUq0woAYozdOjJ6ido2zeq4WY35uQC2n7F29C8kp2N+mHPutRjTxjzrQ5DbrhvzdQCsyd5sJhM77PxkRJrjur76fbH4daz3GK1Effn8eSvGvJGI05uqyr9dJ6o61usAWCNjjOzNZmJNRIpRPf3w8eN16juM1ibSNk3lQngX29B723XiQxjjVQBsCGut7M9mMY/eTCeTn6/n85uU+KPdwaVMKzjnSG7AFgohiHMu5tHKeT/KfVxygjs+OLiI3c4bVKX3PvUVAGyozjkJcVdP7Uldn6XGTypRU1pCVFVu+14Cpzdgq1ljZH9vL+bRpCmH5BI1ZYGl857kBuyAoCpd38c8Wk1DSCpVoxNcyrSCD0EcpSmwM5z3cXftqocpUw5RJWrKAktVlduui63LATxRxhjZn83ERLSOxEw5RJWoqQsse+9JbsAOWt27x4hdkDk4wSW1hHgf+7UxgC0QQohtC4takDnorJiywDIsS1OmFYDdljLlMGRB5qBJhtQFlkwrAFgp0Toy6A4uZYEl0woAvhZUo6cchizIfFSCS2kJYVoBwI+kTDk8tnXkwRKVlhAAuRhj5Ke4UvXB1pEHS9S2aSprbfS0Ai0hAO6zOgTFeMyCzHsTnHPutYi0McF9/CYBADvER7aOGJHmodaROxPccoHlxeCo8jkrR86eAdhBXd/HVntn920d+eEdHAssAZQ29oLMO+/gnPdXLLAEUFKOBZn/S3C0hABYl5TWkaO6Pv/+l9+UqCywBLBuKVMOIYTTVevINyVq6v80ZYElgDGE+NaR6vvWkS8Jrg/hXFJaQihNAYwkpXXkpK4vv/qZaQUAmydlQaaonr5fLK5t6gLLhP4VALhTyoLM5T+hl/8A2pI/aItnBBUAAAAASUVORK5CYII=",t5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NTE6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYWUzMjQ5OC00N2Q1LTRlNGItYTMzNS0xZjQ2MmI2NGMxMjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFhZTMyNDk4LTQ3ZDUtNGU0Yi1hMzM1LTFmNDYyYjY0YzEyNCIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODowMiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfDJPYAAAPwSURBVHic7d1BVtxGEIDh6paDAGehfTx5yiJmlvL4AnADfAN8AnODHIEjcAT7BvYFYs8uJFmE90j2bBIYSd2VxXjy4jgwo+6WZvD83w7ea0rMop6qqSqMrMFocnAmYk7XERvAOuibq/c/vxg0oqqYIQOKiIwm4xMROR86LoA1M/7F1Y+/vBkq3OAJrqzGpbP6QcQUQ8YFsAn0OvPm2eX04nKQaKpihwi04KyekdyAbWUKZ4at3gZLcN9ODk5FzPFQ8QBsICOH81wwVLgBfFN9X1lr3/L2BkBExHv37I/pr9M+YwxSopZVWWSZPSe5AViYv/AMEKfvAM7mP6iaqu84AB4SU4wmB697j9LnDx89f3osanv/JQA8UD22jvTaJlJWZeFs/hulKYC79dc60usdnLM5924Alui3daSXBEdLCICV9dg6krxEZVoBQIjUrSPJS9SyKj++bpLcAHRjbZb8D5KPUv6w1u6+MiKHoed920hd3yZ8IgDrsLOzK/bRV12PlaPJ+Pzq/cXLVM+RrER9Uo0PjdXXoW9vqir1zZ+ioqkeCcCaGDGys7cvxnQvEtXL0e/Ti3exz5CsTaSsysJn+duYht56diveNSkeB8AGsFkmO/l+wEm9zvzsu8vp5XVM/GR3cLHTCm1Tk9yAL4x3TtqmDjhpCmd2k9zHRSe4jy0hp6HnVb24oA8BwKZrm5mod90PGjkcPX96HBs/qkSNbQlRVWnqG/Eu4AMA8CAYYyXfexxwMm7KIbpEjV1g6dqa5AZ84VS9NEHdEabwmUaVqsEJLnZawTsnruHeDdgGrm2CXmZUTRUz5RBUosYusFRVqW9vRJW3N2BbzFtHHosx3dNOyJRDUImaYoGla2qSG7BlVOZ37iFCF2R2TnCxLSGubaRt+aspsI28c+LbkKupsAWZnd4VYxdYqnqpb/5iWgHYYjFTDl0WZHaaZEixwJJpBQAiIsZkku+FTjms1jrS6Q4udoEl0woAFlRjphxWX5C5UoKLbQlR75hWAPCJmCmHVVtHlpaotIQA6IsRI/n+10Fnl7WOLC1Ry6osrMniphVoCQFwBxWVeha2A3KVBZn3JrjW7r4SE7fAkpYQAPfxrglsHZFyWevInQnuSTU+NKKnIVFFFoP0s9DjALZIU89E1QecNMf3bR353zs4FlgCGFrqBZl33sE5m5+zwBLAkPpYkPlZgqMlBMC6RC3InIxPPv/2v7DAEsC6xSzI9N4fLVpHPilRU/xPUxZYAoil6gNbR0zx39aRfxKct/lJVEsICywBJBLZOnK2+MKIMK0AYPPELMhUL0dXH356Z1MssJz3sJDcAKQTsyBz/k/oRf4Gq9snW0kHgDsAAAAASUVORK5CYII=",n5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDY6NDYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOWYwYTgxYy03ZjA5LWUxNGYtODA2MS0xZmYzOTAyNjk5M2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5ZjBhODFjLTdmMDktZTE0Zi04MDYxLTFmZjM5MDI2OTkzYyIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoJaQIcAAAPESURBVHic7d1LbhNBEIDh6rZlw272YdBwg7BDgUjODcINwgnIDThCjpAjwA2IxEPs4AZYcthnSTzdXSxsRyRgnOmeadv4/3aJ1KnJpjTVriobWYOyPDwT0dN1xAawFu8mk48vcwZUVTE5A4qIlOXBiYg9zx0XwLqZl5PJh3e5omVPcFX1rPK+/1VEipxxAWyEq17PPR2Pv4xzBFNVsTkCLXjfPxOSG7CrCu/7Wau3bAnu8ePnpyJynCsegI00mueCLLKUqHt7B/vW2vfC2xsAEQkhPP3x4/O3LmNkKVGralT0evZcSG4A5uYvPN3H6TqA9/6Nqux3HQfAVinK8sXbroN0WqKW5eGxiHb+TwDYVt21jnTaJlJVo8J7910oTQEs11nrSKd3cN477t0ArNJp60gnCY6WEAANdNY60nqJyrQCgBhtt460XqLO7t36lKYAGrPWtP6BZL/NP+ace22MjGLOhuBlOr1u83EArMlgMBRrew1Pmaosn59PJp9etfUcrZWojx69GBkjbyXi7U1VZTr9Kara1uMAWCNjjAwGQzGmeZGoKkeXlx8vUp+htTaRqhoVIbj3sQ290+m1hODbeBQAG8JaK4PBg5ijV71e/8l4fHGVEr+1O7iUaQXnHMkN+A+FEMQ5F3O08N61ch+XnOBmH+/GbedVDeJ9nfoIADaUc1NRDTFHR7NJqDRJJWpKS4iqSl1fSwhR/zyALWGMleEwtlSNn3JILlFTFlh670huwA5QDVLX05ijRQj9pFI1OsGlTCuE4MX7qNocwBaavdA0v2tXlf2UKYeoEjVlgeWsJeQ6ti4HsKVmrSMPxJjmaSdmyiGqRE1dYOl9TXIDdtDi3j1G7ILMxgkupSXEexf7sTGA/0AIIbYtLGpBZqN3xZQFlqphXpoyrQDsspQphyYLMhtNMqQusGRaAcBCjtaRRndwKQssmVYA8DvVlCmH+y/IvFeCS2kJYVoBwN+kTDnct3VkZYlKSwiArhhjZDh8GHV2VevIyhK1qkaFtTZhWoGWEADLLV6CYtxnQeY/E5xz7rVI/AJLWkIArBKCj7yjN9Wq1pGlCW6+wPI0Iuq8oS9q9gzADqrr6Pu4439tHfnrHRwLLAHk1vaCzKV3cN67cxZYAsipiwWZfyQ4WkIArEvagsyDk7u/vFWissASwLqlTDmEEI4WrSO3StTU7zRlgSWANizm1iMUd1tHbhJcCPWJJLSEsMASQFvSWkcOz25+EmFaAcDmSVmQqSpHk8mHC5u6wDKhfwUAlkpZkDn/Enr5Be7yP2gjXwXJAAAAAElFTkSuQmCC",r5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAApCAYAAAChgjXgAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMTdUMTI6NDc6MTMrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmI3ZGE4OC1iNWZkLTMyNDktOWQzZi00MmQ1ZTYyODI4Y2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmYjdkYTg4LWI1ZmQtMzI0OS05ZDNmLTQyZDVlNjI4MjhjZSIgc3RFdnQ6d2hlbj0iMjAyNC0xMi0xN1QxMjozODoxNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm80oXMAAAPjSURBVHic7d1LbhtHEIDh6iYh0rvZxxSYvUWPd4EewOgG8g2UE4Q38BF0BB3BvoEF2AmyiwxnHwFK9lqaw+7qLCQGjm2amu6eISX+304ChjXaFLpaVUUja3A0GZ0Fkek6YgNYAyNv3n+4ftllyBCCmC4Diojs741OrZHzruMCWC8T5OW7j9dvuorXeYL7qRyP++r/EJGiy7gANsKNs70Xv19eXXURLIQgtotAC/3gz4TkBmyrou99p9VbZwnuYLI7lSAnXcUDsIGMVAeT3Wl34TqwX/5QWrVvhdMbABFRqy9+u/znss0YnZSoVTkurPbOheQG4M7dgaf9OG0H8OpfiYSy7TgAHpTi8PnoddtBWi1Rj/ZGJ8FI638EgIepzdaRVttEqnJcOPV/CaUpgOVaax1p9Q7OBc+9G4BVWm0daSXB0RIC4N5abB3JXqIyrQAgRu7WkewlalWOF8fNIufnAnj8jNrs/5Ds5/wwp+4XMaaKfd57ldmszvdCANZiMNiRXq/Z+cmIjA+ej85//XD9c673yFaiHj57Wok1ryXy9BZCkE+fagkh5HolAGtijJHBYEesjUgxGo7f//n3Reo7ZGsTuW0J0bcpDb2zWS3ea47XAbABbM/KcLAT8+hN3/Z+vLi8ukmJn+0OLnVawTlHcgMeGfUqzrmYRwvnfZb7uOQEdzDZnaZs51UNMp/71NcAsIHq2olqxLWTkepob3SSGj+pRE1tCQkhyKyei3J6Ax4ta4wMnwxiHk2ackguUVMXWDrnSW7AI6chSD2bxzxa9FWTStXoBJc6reC9inOUpsA2cN5H3rOHMmXKIapETV1gGUKQ2ayOq80BPEjGGBkOd8SY5mknZsohqkTNscByPvckN2DLLO7cY8QuyGyc4NJbQnzsv44BPHDqNbYlLGpBZqOzYuoCS9Xb0pRpBWB7pUw5NFmQ2WiSIccCS6YVAIiIWGtkOGy3daTRHVzqAkumFQAsqIboKYcmCzLvleBSW0KYVgDwpZQph/u2jqwsUWkJAdAWY4w8iZtyWNk6srJErcpxYb1NmlagJQTAMosDUIz7LMj8boK7XWApVVR0WUwr0BICYDkf2TpiRMarWkeWJrjDZ08rETNtHPVOCEHqyKY+ANulrudxlV6Qk+9tHfnmHRwLLAF0LfeCzKV3cLctISywBNCdNhZkfpXgaAkBsC4prSP7e6PTr3/9GRZYAli3lAWZavV40TryvxI1x3eassASQCqNbx0pvmwd+S/BzVVP01tCKE0BpEtpHTmajM4++5lpBQCbJ2VBpmg4fvfx+sLmWGAZ3cMCAEukLMi8+xJ6+RcJHUqkAQAT5gAAAABJRU5ErkJggg==",o5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABVCAMAAAAbt1PlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaGhoaGhkZGRkZGRgYGBoaGhsbGyAgIBoaGhoaGhoaGhgYGBoaGhsbGxoaGhsbGxQUFEvJrZYAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWVJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Yhl+QYycZD1FNITiwAAAABJRU5ErkJggg==",i5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcaGjcaGjcZGTcZGTgYGDcaGjUbGzAgIDcaGjYaGjcaGjgYGDcaGjcbGzYaGjgbGygUFCzbu+wAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",l5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABQyHxQyHhQxHRQyHhAwIBQyHhUwIBAwIBMyHhQyHhMyHhQwHBQzHhQyHhMzHRMyHRUjGd0mtLoAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",s5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAABoaNxoaNxkZNxkZNxgYOBoaNxsbNSAgMBoaNxoaNhoaNxgYOBoaNxsbNxoaNhsbOBQUKK3qr6AAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",a5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABUCAMAAADQ64BAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURQAAADcnGjcoGjcoGTcnGTgoGDcnGjUlGzAgIDcoGjYoGjcoGjgoGDcnGjcnGzYmGjgoGygeFGHYzFEAAAARdFJOUwCv/79wIO8wEN9/n0DPj1Bg9PxcbwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAWNJREFUeF7t2MtygkAYBWFBHdHghfd/2cTyTyXK3Oh1f2vYdBXUmdnlDaNe9lGkyyFe0jgeokmHY4p39OMUVZqmfbyhp3NkabrEC3r5ii4Ns1/phznKVE3XeFq/0hRtam7xsP50jBEnSM496hQ5QbLSMfqUeFDIu0afAr/Skuqx4eRXWlQ5NjhBKlJEynCC1AxRaeUeDyivMEYmf251hTHiBGnJHhucIG2ZMeIE6bEaI95VdlndYXpX2edjjHhX2ettjHhQ6PZ2h+kE6fdvjDhBtnhENe8qt0kxRpwgG8UY8Svd6vbM5kFhu9kJgiTvKplht4iwG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm6M3Ri7MXZj7MbYjbEbYzfGbozdGLsxdmPsxtiNsRtjN8ZujN0YuzF2Y+zG2I2xG2M3xm7EsnwDFAF8ThrijPgAAAAASUVORK5CYII=",gt={unrated:Px,bronze:Bx,silver:Ux,gold:Fx,platinum:Vx,diamond:$x,ruby:Yx,hidden:Wx},ja={front:{black:Qx,red:Zx,green:qx,blue:Kx,gold:Xx},inside:{black:Jx,red:e5,green:t5,blue:n5,gold:r5},top:{black:o5,red:i5,green:l5,blue:s5,gold:a5}},c5=at`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,u5=at`
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
`,d5=at`
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
`,f5=at`
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
`,p5=g.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${c5} 0.25s forwards;
`,_1=g.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:n})=>n&&re`
      animation: ${u5} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:n})=>!n&&re`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,h5=g.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:n})=>n.color.BLACK};

  ${_1}:hover > & {
    box-shadow: 0 0 75px ${({theme:n})=>n.color.GOLD};
  }

  ${({theme:n,$isCardBoxOpening:i})=>i&&re`
      box-shadow: 0 0 75px ${n.color.GOLD};
    `};
`,g5=g.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,m5=g.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:n})=>!n&&re`
      opacity: 0;
    `}
`,Da=g.img`
  position: absolute;
  top: ${({$top:n})=>n};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:n,$delay:i})=>n&&re`
      animation: ${f5} 1.5s ${i}s forwards;
    `}
`,v5=g.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,y5=g.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:n})=>n&&re`
      animation: ${d5} 1.1s ease-in-out forwards;
    `}
`,x5=n=>{const{color:i,isTierHidden:l,cardRanks:u,onFirstClick:d,onOpenAnimationEnd:p}=n,[h,y]=w.useState(!1),v=u[0],T=u[1],x=u[2];return c.jsx(p5,{children:c.jsxs(_1,{autoFocus:!0,onClick:()=>{y(S=>(S||d(),!0))},$isCardBoxOpening:h,onAnimationEnd:S=>{h&&S.target===S.currentTarget&&p()},"aria-label":"카드 상자를 열어 추첨 진행하기",children:[c.jsx(h5,{$isCardBoxOpening:h}),c.jsx(g5,{src:ja.inside[i],draggable:!1}),c.jsxs(m5,{$isCardBoxOpening:h,children:[v&&c.jsx(Da,{src:v!=="unrated"&&l?gt.hidden:gt[v],draggable:!1,alt:"",$isCardBoxOpening:h,$top:"0",$delay:1.5}),T&&c.jsx(Da,{src:T!=="unrated"&&l?gt.hidden:gt[T],draggable:!1,alt:"",$isCardBoxOpening:h,$top:"4%",$delay:1.65}),x&&c.jsx(Da,{src:x!=="unrated"&&l?gt.hidden:gt[x],draggable:!1,alt:"",$isCardBoxOpening:h,$top:"8%",$delay:1.8})]}),c.jsx(v5,{src:ja.front[i],draggable:!1,alt:""}),c.jsx(y5,{src:ja.top[i],draggable:!1,alt:"",$isCardBoxOpening:h})]})})},A5=g.div`
  display: flex;
  visibility: ${({$visible:n})=>n?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:n})=>n};
  justify-content: center;

  width: 100%;
  height: 100%;
`,w5=g.div.attrs(({$gap:n,$width:i,$height:l})=>({style:{gap:`${n}px`,padding:`${n}px`,width:`${i}px`,height:`${l}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,S5=g.div.attrs(({$gap:n})=>({style:{rowGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,T5=g.div.attrs(({$gap:n})=>({style:{columnGap:`${n}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,E5=()=>{const[n,i]=w.useState(0),[l,u]=w.useState(0);return{rotateX:n,rotateY:l,adjustCardTweak:h=>{const y=h.currentTarget.getBoundingClientRect(),v=h.clientX-y.left,x=((h.clientY-y.top)/y.height-.5)*20,S=(v/y.width-.5)*-20;i(x),u(S)},resetCardTweak:()=>{i(0),u(0)}}},N5=(n,i)=>i?gt.hidden:n>=1&&n<=5?gt.bronze:n>=6&&n<=10?gt.silver:n>=11&&n<=15?gt.gold:n>=16&&n<=20?gt.platinum:n>=21&&n<=25?gt.diamond:n>=26&&n<=30?gt.ruby:gt.unrated,R5=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,I5=g.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,k5=g.div.attrs(({$rotateX:n,$rotateY:i,$width:l})=>({style:{transform:`perspective(${l*3}px) rotateX(${n}deg) rotateY(${i}deg)`,width:`${l}px`,height:`${l*1.36}px`,borderRadius:`${l*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:n})=>n.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:n,$isTierHidden:i})=>`url(${N5(n,i)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:n})=>n.color.TRANSPARENT_LEMON};
  }
`,C5=g.a.attrs(({$cardWidth:n})=>({style:{rowGap:`${n/30}px`,padding:`${n/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,j5=g.img.attrs(({$cardWidth:n})=>({style:{height:`${n/2.4}px`,margin:`${n/4.016}px 0 ${n/16.066}px 0`}}))``,D5=g.div.attrs(({$cardWidth:n})=>({style:{fontSize:`${n/7.531}px`,lineHeight:`${n/7.531}px`}}))`
  color: ${({$tier:n,$isTierHidden:i,theme:l})=>R5(n,i,l)};
  font-family: 'Cafe24ClassicType';
`,M5=g.div.attrs(({$cardWidth:n,theme:i})=>({style:{height:`${Math.max(28,n/6.694)}px`,color:`${i.color.WHITE}`,fontSize:`${Math.max(14,n/13.388)}px`,lineHeight:`${Math.max(14,n/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,O5=g.div.attrs(({$movement:n})=>({style:{backgroundPosition:`${n+60}%`}}))`
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
`,p2=n=>{const{problemInfo:i,isTierHidden:l,width:u,tabIndex:d,linkButtonRef:p,onHover:h,onKeyDown:y}=n,{problemId:v,title:T,tier:x}=i,{rotateX:S,rotateY:R,adjustCardTweak:j,resetCardTweak:D}=E5();return c.jsx(I5,{children:c.jsx(k5,{$width:u,$tier:x,$isTierHidden:l,$rotateX:S,$rotateY:R,onMouseMove:j,onMouseOut:D,onMouseOver:h,children:c.jsxs(C5,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${v}`,"aria-label":`문제 번호 ${v}번 ${T}`,tabIndex:d,ref:p,onKeyDown:y,$cardWidth:u,children:[c.jsx(j5,{$cardWidth:u,src:l?uc.hidden:In[x],alt:"",draggable:!1}),c.jsx(D5,{$cardWidth:u,$tier:x,$isTierHidden:l,children:`#${v}`}),c.jsx(M5,{$cardWidth:u,children:T}),c.jsx(O5,{$movement:S+R})]})})})},yo=120,qa=1/1.36,L5=(n,i,l)=>{const{rowCount:u,columnCount:d,cardGridGap:p,cardWidth:h,innerGridWidth:y,innerGridHeight:v,isOverflow:T}=b5(n,i,l);if(T)return{cardWidth:h,cardGridGap:p,innerGridWidth:y,innerGridHeight:v,isOverflow:T};const x=_5(u,d,l);return{cardWidth:h,cardGridGap:p,rowCardCounts:x,isOverflow:T}},b5=(n,i,l)=>{let u={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let R=1;R<=l;R+=1){const j=Math.ceil(l/R),{cardWidth:D,cardGridGap:G,isOverflow:B}=G5(n,i,j,R);!B&&D>u.cardWidth&&(u={rowCount:j,columnCount:R,cardWidth:D,cardGridGap:G,isOverflow:B})}if(u.isOverflow){const R=Math.max(1,Math.floor((n-yo/10)/(yo*1.1)));u={rowCount:Math.ceil(l/R),columnCount:R,cardWidth:yo,cardGridGap:yo/10,isOverflow:!0}}const{rowCount:d,columnCount:p,cardWidth:h,cardGridGap:y,isOverflow:v}=u,T=h/qa,x=p*h+(p+1)*y,S=d*T+(d+1)*y;return{rowCount:d,columnCount:p,cardWidth:h,cardGridGap:y,innerGridWidth:x,innerGridHeight:S,isOverflow:v}},G5=(n,i,l,u)=>{const d=n*10/(11*u+1),p=i/(l*(1/qa+.1)+.1),h=Math.max(yo,Math.min(d,p)-1),y=h/10,v=h/qa,T=u*h+(u+1)*y,x=l*v+(l+1)*y,S=T>n||x>i;return{cardWidth:h,cardGridGap:h/10,isOverflow:S}},_5=(n,i,l)=>{const u=Array.from({length:n}).map(()=>i),d=n*i-l;for(let p=0;p<d;p+=1)u[n-p%n-1]-=1;return u},H5=n=>{const{cardCount:i}=n,[l,u]=w.useState(i),[d,p]=w.useState(0),[h,y]=w.useState(0),[v,T]=w.useState(!1),x=w.useRef(null);return w.useEffect(()=>{u(l)},[i]),w.useLayoutEffect(()=>{const S=x.current;if(!S)return;const R=()=>{const{clientWidth:D,clientHeight:G}=S;p(D),y(G),T(!0)},j=new ResizeObserver(()=>{R()});return j.observe(x.current),()=>{j.disconnect()}},[]),{...L5(d,h,l),isLoaded:v,cardGridRef:x}},z5=n=>{const{problemInfos:i,isTierHidden:l,onCardHover:u}=n,d=i.length,p=H5({cardCount:d}),{cardWidth:h,cardGridGap:y,isOverflow:v,isLoaded:T,cardGridRef:x}=p,{getRovingProps:S}=To({count:d});let R=0;return c.jsx(A5,{ref:x,$visible:T,$overflowY:v?"auto":"visible",children:v?c.jsx(w5,{$width:p.innerGridWidth,$height:p.innerGridHeight,$gap:y,children:i.map(j=>{const{ref:D,...G}=S(R),B={...G,linkButtonRef:D};return R+=1,c.jsx(p2,{width:h,problemInfo:j,isTierHidden:![0,31].includes(j.tier)&&l,onHover:u,...B},j.problemId)})}):c.jsx(S5,{$gap:y,children:p.rowCardCounts.map((j,D)=>c.jsx(T5,{$gap:y,children:Array.from({length:j}).map(()=>{if(!i[R])return null;const G=i[R],{ref:B,...Z}=S(R),V={...Z,linkButtonRef:B};return R+=1,c.jsx(p2,{width:h,problemInfo:G,isTierHidden:![0,31].includes(G.tier)&&l,onHover:u,...V},G.problemId)})},D))})})},P5=n=>{if(!(Ee(n)&&"success"in n&&typeof n.success=="boolean"))return!1;const{success:i}=n;if(i)return"problemInfos"in n&&U5(n.problemInfos);if("statusCode"in n&&typeof n.statusCode!="number"||!("errorMessage"in n)||typeof n.errorMessage!="string")return!1;if(!("errorDescriptions"in n))return!0;const{errorDescriptions:l}=n;return typeof l=="string"||Array.isArray(l)&&l.every(u=>typeof u=="string")},B5=n=>Ee(n)&&"problemId"in n&&"title"in n&&"tier"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&dc(n.tier),U5=n=>Array.isArray(n)&&n.every(i=>B5(i)),F5=["bronze","silver","gold","platinum","diamond","ruby"],V5=n=>{if(n.length===0)throw Error("프리뷰 카드 랭크 계산을 위해서는 최소 1문제의 정보가 제공되어야 합니다.");if(n.length===1){const y=n[0].tier;return[$i(y)]}if(n.length===2){const y=n[0].tier,v=n[1].tier;return[$i(y),$i(v)]}const i={unrated:0,bronze:0,silver:0,gold:0,platinum:0,diamond:0,ruby:0};n.forEach(({tier:y})=>{i[$i(y)]+=1});const l=Object.entries(i).sort((y,v)=>v[1]-y[1]);if(!$5(l))throw Error("프리뷰 카드 랭크 계산 중 데이터 불일치를 발견했습니다.");const[u,d]=l[0],p=l[1][0],h=l[2][0];return d===n.length?[u,u,u]:d*2>n.length?[u,u,p]:[u,p,h]},$i=n=>n===0||n===31?"unrated":F5[Math.floor((n-1)/5)],$5=n=>n.every(([i])=>j4(i)),Y5=n=>{const i=n.reduce((d,p)=>d+p.probability,0);if(Math.abs(i-1)>1e-6)throw new Error(`확률의 합은 1이어야 하는데, 실제 확률의 합이 ${i}였습니다.`);const l=Math.random();let u=0;for(const{choice:d,probability:p}of n)if(u+=p,l<=u)return d;throw new Error("잘못된 확률 정보를 사용하셨습니다. 다시 확인해 주세요.")},W5=(n,i)=>Math.floor(Math.random()*(i-n+1))+n,Q5="/assets/card-slide-1-BWULmWDl.wav",Z5="/assets/card-slide-2-DSpetA15.wav",q5="/assets/card-slide-3-DsJdFER7.wav",K5="/assets/card-slide-4-2Wc5wS26.wav",X5="/assets/gacha-COr4DCSI.mp3",J5=[Q5,Z5,q5,K5],mc=n=>Ee(n)&&"isTierHidden"in n&&"isAudioMuted"in n&&typeof n.isTierHidden=="boolean"&&typeof n.isAudioMuted=="boolean",e7="🎲",t7="✅",n7="📜",r7=(n,i)=>{const l=i.map(({problemId:u,title:d})=>`- ${u}번 - ${d} (https://acmicpc.net/problem/${u})`).join(`
`);return`
# 추첨 결과 ${e7}

## 추첨 정보 ${t7}

- 추첨 이름: ${n}
- 문제 수: ${i.length}

## 문제 목록 ${n7}
${l}
`.trim()},o7=[{choice:"black",probability:.24975},{choice:"red",probability:.24975},{choice:"green",probability:.24975},{choice:"blue",probability:.24975},{choice:"gold",probability:.001}],i7=J5.map(n=>new Audio(n)),l7=n=>{const{open:i,slot:l,problemCount:u}=n,[d,p]=w.useState("loading"),[h,y]=w.useState([]),[v,T]=w.useState("black"),[x,S]=w.useState(""),[R,j]=w.useState([]),[D,G]=w.useState(!1),[B,Z]=w.useState(!0),[V,q]=w.useState(""),[F,ne]=w.useState(!0),[K,W]=w.useState(!1),[xe,_e]=w.useState(!1),Oe=w.useRef(new Audio(X5)),qe=h.length>0?V5(h):["unrated"],Ke=w.useCallback(async()=>{const te=await ye.runtime.sendMessage({command:vo.GET_RANDOM_DEFENSE_RESULT,query:l.query,problemCount:u});if(!P5(te)){S("API로부터 불러온 데이터에서 데이터 불일치가 발견되었습니다."),j("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}if(!te.success){const{errorMessage:ce,errorDescriptions:ue}=te;S(ce),j(ue??[]),p("error");return}const oe=te.problemInfos;y(oe),p("ready")},[l,u]),He=w.useCallback(async()=>{const te=await ye.runtime.sendMessage({command:vo.FETCH_GACHA_OPTIONS});if(!mc(te)){S("설정 데이터에서 불일치가 발견되었습니다."),j("개발자에게 이 문제가 발생했음을 알려주세요."),p("error");return}const{isTierHidden:oe,isAudioMuted:ce}=te;G(oe),Z(ce),_e(!0),Oe.current.muted=ce},[]),Be=()=>{p("loading"),W(!1),T(Y5(o7)),Ke()},it=()=>{G(te=>!te)},Ue=()=>{Z(te=>{const oe=!te;return Oe.current.muted=oe,oe})},se=()=>{B||i7[W5(0,3)].play()},H=()=>{Y(),Oe.current.play()},Y=()=>{Oe.current.pause(),Oe.current.currentTime=0},U=()=>{navigator.clipboard.writeText(r7(l.title,h)),q("문제 목록을 클립보드에 복사했어요!"),ne(!1),setTimeout(()=>ne(!0))},N=()=>{p("showingResult"),q("")},O=()=>{const te=new Date().toISOString(),oe=h.map(ce=>({...ce,createdAt:te})).reverse();ye.runtime.sendMessage({command:vo.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:oe}),W(!0),q("문제 목록을 추첨 기록에 저장했어요!"),ne(!1),setTimeout(()=>ne(!0))};return w.useEffect(()=>{i&&Be()},[i,l,u]),w.useEffect(()=>{He()},[]),w.useEffect(()=>{xe&&ye.runtime.sendMessage({command:vo.SAVE_GACHA_OPTIONS,isTierHidden:D,isAudioMuted:B})},[xe,D,B]),{gachaStatus:d,problemInfos:h,cardBoxColor:v,previewCardRanks:qe,errorMessage:x,errorDescriptions:R,isTierHidden:D,isAudioMuted:B,notificationMessage:V,shouldNotificationFadeOut:F,isSavedToHistory:K,restartGacha:Be,toggleIsTierHidden:it,toggleIsAudioMuted:Ue,playCardSlideAudio:se,playGachaAudio:H,stopGachaAudio:Y,copyProblemInfosMarkdownToClipboard:U,showResultScreenAndResetNotificationMessage:N,saveGachaResultToStorage:O}},s7=at`
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
`,a7=g.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${s7} 2s forwards;
  }
`,c7=g.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,u7=g.div`
  font-size: 16px;
  color: ${({theme:n})=>n.color.GOLD};
  font-weight: 600;
`,d7=n=>{const{children:i,shouldFadeOut:l}=n;return c.jsxs(a7,{className:l?"fading":"",children:[i!==""&&c.jsx(c7,{children:c.jsx(Co,{})}),c.jsx(u7,{children:i})]})},f7=n=>{const{open:i,theme:l="totamjung",slot:u,problemCount:d,portalTarget:p,onClose:h}=n,{gachaStatus:y,problemInfos:v,cardBoxColor:T,previewCardRanks:x,errorMessage:S,errorDescriptions:R,isTierHidden:j,isAudioMuted:D,isSavedToHistory:G,notificationMessage:B,shouldNotificationFadeOut:Z,restartGacha:V,toggleIsTierHidden:q,toggleIsAudioMuted:F,playCardSlideAudio:ne,playGachaAudio:K,stopGachaAudio:W,copyProblemInfosMarkdownToClipboard:xe,showResultScreenAndResetNotificationMessage:_e,saveGachaResultToStorage:Oe}=l7({open:i,slot:u,problemCount:d});return c.jsx(Zn,{title:"즉석 추첨",open:i,theme:l,padding:"0",closeOnBackdropClick:!1,portalTarget:p,onClose:()=>{W(),h()},children:c.jsxs(xx,{children:[y==="loading"&&c.jsx(Cx,{children:c.jsx(Ca,{children:c.jsxs(f2,{children:[c.jsx(jx,{children:c.jsx(e1,{})}),c.jsx(Dx,{children:"잠시만 기다려주세요..."})]})})}),y==="ready"&&c.jsxs(Mx,{children:[c.jsx(Ox,{children:c.jsx(x5,{color:T,isTierHidden:j,cardRanks:x,onFirstClick:K,onOpenAnimationEnd:_e})}),c.jsx(Ca,{children:c.jsxs(f2,{children:[c.jsx(Lx,{children:c.jsx(Og,{})}),c.jsx(bx,{children:"카드 상자를 클릭하면 결과를 확인할 수 있습니다"})]})})]}),y==="error"&&c.jsxs(Sx,{children:[c.jsx(Tx,{children:c.jsxs(Ex,{children:[c.jsxs(Nx,{children:[c.jsx(Rx,{children:c.jsx(J2,{})}),c.jsx(Ix,{children:S})]}),c.jsx(kx,{children:typeof R=="string"?c.jsx(d2,{children:R}):R.map(qe=>c.jsx(d2,{children:qe},qe))})]})}),c.jsx(Ca,{children:c.jsx(Ce,{type:"button",name:"다시 시도하기",size:"large",color:z.color.LIGHT_RED,iconSrc:c.jsx(Mg,{}),disabled:!1,onClick:V})})]}),y==="showingResult"&&c.jsxs(Gx,{children:[c.jsx(_x,{children:c.jsx(z5,{problemInfos:v,onCardHover:ne,isTierHidden:j})}),c.jsx(Hx,{children:c.jsx(d7,{shouldFadeOut:Z,children:B})}),c.jsxs(zx,{children:[c.jsx(Ce,{type:"button",name:"문제 목록 복사",size:"large",color:z.color.LIGHT_GRAY,iconSrc:c.jsx(X2,{}),disabled:!1,onClick:xe}),c.jsx(Ce,{type:"button",name:"추첨 기록 저장",size:"large",color:z.color.LEMON,iconSrc:G?c.jsx(Co,{}):c.jsx(Lg,{}),disabled:G,onClick:Oe}),c.jsx(Ce,{type:"button",name:"다시 추첨하기!",size:"large",color:z.color.ORANGE,iconSrc:c.jsx(r1,{}),disabled:!1,onClick:V})]})]}),c.jsxs(c2,{$align:"left",children:[c.jsx(Ax,{onClick:q,"aria-label":j?"문제 난이도 보이기":"문제 난이도 감추기",children:j?c.jsx("img",{src:l1,alt:"",draggable:!1}):c.jsx("img",{src:rm,alt:"",draggable:!1})}),c.jsx(u2,{children:`티어 숨기기: ${j?"ON":"OFF"}`})]}),c.jsxs(c2,{$align:"right",children:[c.jsx(u2,{children:`효과음: ${D?"OFF":"ON"}`}),c.jsx(wx,{onClick:F,"aria-label":D?"효과음 켜기":"효과음 끄기",children:D?c.jsx(Gg,{}):c.jsx(bg,{})})]})]})})},p7=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,h7=/^\d+$/,g7=()=>{const[n,i]=w.useState("5"),l=d=>{const p=d.target.value;p.length>=3||i(p)},u=h7.test(n)&&Number(n)>=1&&Number(n)<=il;return{inputValue:n,updateInputValue:l,isInputValueValid:u}},h2=["none","solvedAcLight"],m7=n=>{const{open:i,theme:l="totamjung",portalTarget:u,shouldShowHotkeyMessage:d,onClose:p,onSubmitProblemCount:h}=n,{inputValue:y,updateInputValue:v,isInputValueValid:T}=g7(),x=h2.includes(l);return c.jsxs(Zn,{title:"즉석 추첨",theme:l,portalTarget:u,open:i,onClose:p,children:[c.jsxs(p7,{children:[c.jsx(pe,{type:x?"black":"normal",fontSize:16,children:"추첨을 진행할 문제 수를 입력해 주세요."}),c.jsx(Vt,{type:"number",width:"100%",height:40,borderWidth:2,borderRadius:6,horizontalPadding:8,fontSize:18,min:1,max:il,value:y,theme:l,onChange:v,autoFocus:!0}),c.jsx(pe,{type:x?"black":"normal",fontSize:14,textAlign:"right",children:`1문제 이상, ${il}문제 이하`}),d&&c.jsx(pe,{type:"custom",fontSize:16,color:x?z.color.BLACK:z.color.WHITE,opacity:.8,children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),c.jsx(jo,{theme:l,children:c.jsx(Ce,{type:"button",name:"확인",size:"medium",iconSrc:c.jsx(ko,{}),color:h2.includes(l)?z.color.DARK_GRAY:z.color.GOLD,disabled:!T,onClick:()=>h(Number(y))})})]})},v7=n=>{const{isLoaded:i}=n,{activeModalName:l,openModal:u,closeModal:d}=pl(),{slot:p,selectedSlotNo:h,hotkey:y,occupiedSlotNos:v,shouldEditModalShow:T,gachaProblemCount:x,setSelectedSlotNo:S,switchHotkey:R,openEditModal:j,closeEditModal:D,updateSlot:G,deleteSlot:B,setGachaProblemCount:Z}=ax(n);return c.jsxs(gc,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[i?c.jsxs(Py,{children:[c.jsxs(By,{children:[c.jsx(Wy,{selectedSlotNo:h,occupiedSlotNos:v,onChange:S}),c.jsx(lx,{selectedSlotNo:h,hotkey:y,onClick:R})]}),c.jsx(tx,{...p}),c.jsxs(Uy,{children:[c.jsx(Ce,{type:"button",name:"쿼리 복사",size:"medium",color:z.color.LIGHT_GRAY,iconSrc:c.jsx(X2,{}),disabled:p.isEmpty,onClick:()=>{p.isEmpty||(navigator.clipboard.writeText(p.query),u("copiedQuery"))}}),c.jsx(Ce,{type:"button",name:"수정",size:"medium",color:z.color.SKY_BLUE,iconSrc:c.jsx(Eg,{}),disabled:p.isEmpty,onClick:j}),c.jsx(Ce,{type:"button",name:"삭제",size:"medium",color:z.color.RED,iconSrc:c.jsx(fl,{}),disabled:p.isEmpty,onClick:()=>{u("confirmDeleteSlot")}}),c.jsx(Ce,{type:"button",name:"즉석 추첨",size:"medium",color:z.color.PURPLE,iconSrc:c.jsx(r1,{}),disabled:p.isEmpty,onClick:()=>{u("gachaProblemCount")}})]})]}):c.jsx(oc,{}),c.jsx(px,{title:p.isEmpty?"":p.title,query:p.isEmpty?"":p.query,open:T,onClose:D,onSlotChange:G}),c.jsx(nn,{actionType:"confirm",width:"350px",height:"auto",open:l==="copiedQuery",onClose:d,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"}),c.jsx(nn,{actionType:"yesNo",width:"350px",height:"auto",open:l==="confirmDeleteSlot",onYesSelect:()=>{B(),d()},onNoSelect:d,title:"추첨 삭제 확인",message:`${h}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`}),c.jsx(m7,{open:l==="gachaProblemCount",shouldShowHotkeyMessage:!0,onClose:d,onSubmitProblemCount:V=>{Z(V),u("gacha")}}),!p.isEmpty&&c.jsx(f7,{open:l==="gacha",slot:p,problemCount:x,onClose:d})]})},y7=n=>n===null||n==="Alt"||n==="F2",vc=n=>!Ee(n)||!("isEmpty"in n)||typeof n.isEmpty!="boolean"?!1:n.isEmpty?!0:"title"in n&&"query"in n&&typeof n.title=="string"&&typeof n.query=="string",yc=n=>typeof n!="number"?!1:[1,2,3,4,5,6,7,8,9,0].includes(n),x7=n=>{if(!(Ee(n)&&"selectedNo"in n&&typeof n.selectedNo=="number"))return!1;const{selectedNo:i,...l}=n;return!(i%1===0&&i>=0&&i<=9)||!w1(l)?!1:Array.from({length:10}).every((u,d)=>d in l&&vc(l[d]))},vl=n=>{if(!(Ee(n)&&"hotkey"in n&&"selectedSlotNo"in n&&"slots"in n&&typeof n.hotkey=="string"&&["Alt","F2"].includes(n.hotkey)&&yc(n.selectedSlotNo)))return!1;const{slots:i}=n;return w1(i)?Array.from({length:10}).every((l,u)=>u in i&&vc(i[u])):!1},A7=n=>Ee(n)&&Array.from({length:10}).every((i,l)=>l in n),H1=n=>{if(!Ee(n)||!("slots"in n))return!1;const{slots:i}=n;return Ee(i)&&Array.from({length:10}).every((l,u)=>u in i)},z1=[1,2,3,4,5,6,7,8,9,0],P1=(n,i)=>vc(n)?n.isEmpty?{isEmpty:!0}:n.query.trim()===""||n.query.length>Qn?{isEmpty:!0}:n.title.trim()===""||n.title.length>Ro?{...n,isEmpty:!1,title:`추첨 ${i}`}:n:{isEmpty:!0},yl=n=>{if(!H1(n))return Ya;const i="hotkey"in n&&y7(n.hotkey)?n.hotkey:"Alt",l="selectedSlotNo"in n&&yc(n.selectedSlotNo)?n.selectedSlotNo:1,u={...n,hotkey:i,selectedSlotNo:l};return z1.forEach(d=>{const p=u.slots[d];u.slots[d]=P1(p,d)}),vl(u)?u:Ya},w7=n=>{if(!A7(n))return Yd;const{selectedNo:i,...l}=n,u=yc(i)?n.selectedNo:1,d={...l,selectedNo:u};return z1.forEach(p=>{const h=d[p];d[p]=P1(h,p)}),x7(d)?d:Yd},S7=async()=>{const i=(await ye.storage.local.get(M.QUICK_SLOTS))[M.QUICK_SLOTS];return yl(i)},T7=(n,i,l)=>{const u={selectedSlotNo:n,slots:i,hotkey:l};if(!H1(u))return;const d=yl(u);ye.storage.local.set({[M.QUICK_SLOTS]:d})},E7={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},N7=()=>{const[n,i]=w.useState(E7),[l,u]=w.useState(1),[d,p]=w.useState("Alt"),[h,y]=w.useState(!1);return w.useEffect(()=>{(async()=>{const{slots:x,selectedSlotNo:S,hotkey:R}=await S7();i(x),u(S),p(R),y(!0)})()},[]),w.useEffect(()=>{h&&T7(l,n,d)},[l,n,d]),{slots:n,selectedSlotNo:l,hotkey:d,isLoaded:h,setSelectedSlotNo:u,setHotkey:p,updateSlot:(x,S)=>{i(R=>({...R,[l]:{isEmpty:!1,title:x,query:S}}))},deleteSlot:()=>{i(x=>({...x,[l]:{isEmpty:!0}}))}}},R7=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,xc=(n,i,l)=>i?l.color.GRAY:n>=1&&n<=5?l.solvedAcTier[5]:n>=6&&n<=10?l.solvedAcTier[10]:n>=11&&n<=15?l.solvedAcTier[15]:n>=16&&n<=20?l.solvedAcTier[20]:n>=21&&n<=25?l.solvedAcTier[25]:n>=26&&n<=30?l.solvedAcTier[30]:l.color.WHITE,g2=(n,i,l,u)=>i?re`
      background-image:
        ${l?u.solvedAcTier.HIDDEN_DARK_GRADIENT200:u.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${u.solvedAcTier.HIDDEN_GRADIENT};
    `:n>=1&&n<=5?re`
      background-image:
        ${l?u.solvedAcTier.BRONZE_DARK_GRADIENT200:u.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${u.solvedAcTier.BRONZE_GRADIENT};
    `:n>=6&&n<=10?re`
      background-image:
        ${l?u.solvedAcTier.SILVER_DARK_GRADIENT200:u.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${u.solvedAcTier.SILVER_GRADIENT};
    `:n>=11&&n<=15?re`
      background-image:
        ${l?u.solvedAcTier.GOLD_DARK_GRADIENT200:u.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${u.solvedAcTier.GOLD_GRADIENT};
    `:n>=16&&n<=20?re`
      background-image:
        ${l?u.solvedAcTier.PLATINUM_DARK_GRADIENT200:u.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${u.solvedAcTier.PLATINUM_GRADIENT};
    `:n>=21&&n<=25?re`
      background-image:
        ${l?u.solvedAcTier.DIAMOND_DARK_GRADIENT200:u.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${u.solvedAcTier.DIAMOND_GRADIENT};
    `:n>=26&&n<=30?re`
      background-image:
        ${l?u.solvedAcTier.RUBY_DARK_GRADIENT200:u.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${u.solvedAcTier.RUBY_GRADIENT};
    `:re`
    background-image:
      ${l?u.solvedAcTier.UNRATED_DARK_GRADIENT200:u.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${u.solvedAcTier.UNRATED_GRADIENT};
  `,I7=g.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:n,$isHidden:i,theme:l})=>g2(n,i,!1,l)};

  &:hover {
    ${({$tier:n,$isHidden:i,theme:l})=>g2(n,i,!0,l)};
  }
`,k7=g.a`
  display: flex;
  align-items: center;
`,C7=g.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:n,$isHidden:i,theme:l})=>xc(n,i,l)};
  }
`,j7=g.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,D7=g.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,M7=g.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:n,$isHidden:i,theme:l})=>xc(n,i,l)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,O7=g.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,L7=g.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:n,$isHidden:i,theme:l})=>xc(n,i,l)};
`,b7=g.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:n})=>n.color.WHITE};
  }
`,G7=g.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:n})=>n.color.WHITE};
`,B1=n=>{const i=String(n.getFullYear()).padStart(4,"0"),l=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0"),d=String(n.getHours()).padStart(2,"0"),p=String(n.getMinutes()).padStart(2,"0"),h=String(n.getSeconds()).padStart(2,"0");return`${i}-${l}-${u} ${d}:${p}:${h}`},_7=n=>{const{problemId:i,title:l,tier:u,createdAt:d,isHidden:p,tabIndex:h,linkButtonRef:y,onKeyDown:v,onDelete:T}=n;return c.jsxs(I7,{$tier:u,$isHidden:p,onKeyDown:v,children:[c.jsxs(k7,{href:`https://icpc.me/${i}`,target:"__blank","aria-label":`${i}번 ${l} 문제`,ref:y,tabIndex:h,children:[c.jsx(j7,{src:p?uc.hidden:In[u],alt:"",draggable:!1}),c.jsxs(D7,{children:[c.jsx(M7,{$tier:u,$isHidden:p,children:l}),c.jsxs(O7,{children:[c.jsx(L7,{$tier:u,$isHidden:p,children:`#${i}`}),c.jsxs(b7,{children:[c.jsx(yg,{}),c.jsx(G7,{children:B1(new Date(d))})]})]})]})]}),c.jsx(C7,{$tier:u,$isHidden:p,tabIndex:h,onClick:T,"aria-label":"추첨 기록에서 제거하기",children:c.jsx(fl,{})})]})},H7=n=>{const{items:i,isHidden:l,onDelete:u}=n,{getRovingProps:d}=To({count:i.length,shouldResetFocusIndexOnItemChange:!1});return c.jsx(R7,{children:i.map((p,h)=>{const y=`${p.problemId}-${p.createdAt}`,v=![0,31].includes(p.tier)&&l,{ref:T,...x}=d(h),S={...x,linkButtonRef:T};return c.jsx(_7,{isHidden:v,onDelete:()=>{u(y)},...p,...S},y)})})},U1=n=>Ee(n)&&"no"in n&&"title"in n&&"tier"in n&&"date"in n&&typeof n.no=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&typeof n.date=="string"&&n.tier in In,Ac=n=>Ee(n)&&"problemId"in n&&"title"in n&&"tier"in n&&"createdAt"in n&&typeof n.problemId=="number"&&typeof n.title=="string"&&typeof n.tier=="number"&&n.tier in In&&ml(n.createdAt),wc=n=>Array.isArray(n)&&n.every(i=>Ac(i)),z7=n=>{if(!ml(n))return!1;const[i,l,u,d,p,h,y]=n.split(/[-:.TZ]/).map(Number);return i>=1&&i<=9999&&l>=1&&l<=12&&u>=1&&u<=31&&d>=0&&d<=23&&p>=0&&p<=59&&h>=0&&h<=59&&y>=0&&y<=999},P7=n=>!isNaN(Number(new Date(n))),B7=n=>Ac(n)&&n.problemId%1===0&&n.problemId>=j1&&n.problemId<=D1&&n.title.length<=M1&&z7(n.createdAt)&&n.tier%1===0&&n.tier>=C1&&n.tier<=Bv,U7=n=>U1(n)&&n.no%1===0&&n.no>=j1&&n.no<=D1&&n.title.length<=M1&&P7(n.date)&&n.tier%1===0&&n.tier>=C1&&n.tier<=Pv,F7=n=>[...n].sort((i,l)=>new Date(i.date).getTime()>new Date(l.date).getTime()?-1:1),V7=n=>[...n].sort((i,l)=>i.createdAt>l.createdAt?-1:1),xl=n=>{if(!Array.isArray(n))return ac;const i=[];return n.forEach(l=>{Ac(l)&&B7(l)&&i.push(l)}),V7(i).slice(0,No)},$7=n=>{if(!Array.isArray(n))return ac;const i=[];return n.forEach(l=>{U1(l)&&U7(l)&&i.push(l)}),F7(i).slice(0,No)},Al=n=>typeof n=="boolean"?n:f1,Y7=async()=>{const n=await ye.storage.local.get([M.RANDOM_DEFENSE_HISTORY,M.IS_TIER_HIDDEN]),i=n[M.RANDOM_DEFENSE_HISTORY],l=n[M.IS_TIER_HIDDEN],u=xl(i),d=Al(l);return{randomDefenseHistory:u,isHidden:d}},W7=async(n,i)=>{if(!Array.isArray(n)||typeof i!="boolean")return;const l=xl(n);ye.storage.local.set({[M.RANDOM_DEFENSE_HISTORY]:l,[M.IS_TIER_HIDDEN]:i})},Q7=()=>{const[n,i]=w.useState([]),[l,u]=w.useState(!0),[d,p]=w.useState(!1),h=n.length===0;return w.useEffect(()=>{(async()=>{const x=await Y7();u(x.isHidden),i(x.randomDefenseHistory),p(!0)})()},[]),w.useEffect(()=>{d&&W7(n,l)},[n,l]),{items:n,isHidden:l,isLoaded:d,isEmpty:h,deleteHistoryById:x=>{const S=n.filter(R=>`${R.problemId}-${R.createdAt}`!==x);i(S)},clearHistory:()=>{i([])},updateIsHidden:x=>{u(x.target.checked)}}},Z7=g.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,q7=g.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:n})=>n.color.LIGHT_BROWN};
  border-radius: 6px;
`,K7=g.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,X7=g.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,J7=g.button`
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
`,eA=g.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,tA=g.div`
  color: ${({$color:n})=>n};
  font-size: 14px;
  line-height: 20px;
`,nA=g.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:n})=>n.color.GOLD};
  }
`,rA=g.label`
  display: inline-block;
  position: relative;

  width: ${({$size:n})=>n==="large"?"50px":"40px"};
  height: ${({$size:n})=>n==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:n})=>n==="large"?"15px":"12px"};
  }
`,oA=g.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,iA=g.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:n,$isChecked:i})=>i?n.color.GOLD:n.color.LIGHTER_BROWN};

  box-shadow: ${({theme:n,$isChecked:i})=>i?`0 0 12px ${n.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,lA=g.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:n})=>n==="large"?"26px":"20px"};
  height: ${({$size:n})=>n==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:n})=>n.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:n,$isChecked:i})=>i?n==="large"?re`
            transform: translateX(20px);
          `:re`
            transform: translateX(16px);
          `:re`
          transform: translateX(0);
        `}
`,sA=n=>{const{size:i,isChecked:l,ariaLabel:u,onChange:d}=n;return c.jsxs(rA,{$size:i,children:[c.jsx(oA,{checked:l,"aria-label":u,onChange:d,value:""}),c.jsx(iA,{$isChecked:l,children:c.jsx(lA,{$size:i,$isChecked:l})})]})},aA=n=>{const i=No-n,l=i>=il?"normal":i>0?"warn":"danger",p=`${`현재 ${n}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${No}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${l==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:l==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,h=l==="normal"?z.color.WHITE:l==="warn"?z.color.ORANGE:z.color.LIGHT_RED;return{indicatorMessage:p,indicatorColor:h}},cA=()=>{const{items:n,isHidden:i,isLoaded:l,isEmpty:u,deleteHistoryById:d,clearHistory:p,updateIsHidden:h}=Q7(),{activeModalName:y,openModal:v,closeModal:T}=pl(),{indicatorMessage:x,indicatorColor:S}=aA(n.length);return c.jsx(gc,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:c.jsxs(Z7,{children:[l?c.jsxs(c.Fragment,{children:[c.jsxs(K7,{children:[c.jsx(pe,{type:"normal",fontSize:16,width:"auto",as:"span",children:"티어 숨기기"}),c.jsx(sA,{size:"large",isChecked:i,ariaLabel:"티어 숨기기",onChange:h})]}),c.jsx(q7,{children:n.length>0?c.jsx(H7,{items:n,isHidden:i,onDelete:d}):c.jsx(s1,{imageSrc:fm,imageWidth:100,imageHeight:86,title:"추첨 기록",description:"문제를 추첨하면 여기에 기록이 표시될 거에요."})}),c.jsxs(X7,{children:[c.jsxs(eA,{title:x,children:[c.jsx(nA,{children:c.jsx(xg,{})}),c.jsx(tA,{$color:S,children:`${n.length} / ${No}`})]}),c.jsx(pe,{type:"normal",fontSize:16,width:"auto",as:"span",children:"추첨 기록 비우기"}),c.jsx(J7,{onClick:()=>{v("confirmClearHistory")},disabled:u,"aria-label":"추첨 기록 비우기",children:c.jsx(fl,{})})]})]}):c.jsx(oc,{}),c.jsx(nn,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:y==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{p(),T()},onNoSelect:T})]})})},uA=g.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,dA=g.div`
  display: flex;
  column-gap: 12px;
`,fA=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,pA=n=>{const{slots:i,selectedSlotNo:l,hotkey:u,isLoaded:d,setSelectedSlotNo:p,setHotkey:h,updateSlot:y,deleteSlot:v}=N7(),{show:T}=n,x={slots:i,selectedSlotNo:l,hotkey:u};return T?c.jsxs(uA,{children:[c.jsx(tn,{title:"랜덤 디펜스",iconSrc:ye.runtime.getURL("/dice.png")}),c.jsxs(dA,{children:[c.jsxs(fA,{children:[c.jsx(zy,{isLoaded:d,selectedSlotNo:l,onSubmit:y}),c.jsx(v7,{quickSlotsInfo:x,isLoaded:d,onHotkeyChange:h,onSlotChange:y,onSlotDelete:v,onSlotNoChange:p})]}),c.jsx(cA,{})]})]}):null},hA=g.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;g.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const Do=n=>n==="none"||n==="totamjung",Sc=n=>n==="totamjung"?"totamjung":"none",gA=async()=>{const i=(await ye.storage.local.get(M.TOTAMJUNG_THEME))[M.TOTAMJUNG_THEME];return Sc(i)},mA=n=>{Do(n)&&ye.storage.local.set({[M.TOTAMJUNG_THEME]:n})},Tc=n=>typeof n=="number"&&!isNaN(n)&&n%1===0?n:0,vA=/^(none|font-\d{1,2})$/,yA=n=>typeof n=="string"&&vA.test(n),wl=n=>typeof n=="number"&&!isNaN(n)&&n%1===0,xA=async()=>{const i=(await ye.storage.local.get(M.FONT_NO))[M.FONT_NO];return Tc(i)},AA=n=>{wl(n)&&ye.storage.local.set({[M.FONT_NO]:n})},wA=()=>{const[n,i]=w.useState(void 0),[l,u]=w.useState(void 0),[d,p]=w.useState(!1);return w.useEffect(()=>{(async()=>{const[T,x]=await Promise.all([gA(),xA()]);i(T),u(x),p(!0)})()},[]),w.useEffect(()=>{d&&mA(n)},[n]),w.useEffect(()=>{d&&AA(l)},[l]),{totamjungTheme:n,fontNo:l,isLoaded:d,updateTotamjungTheme:v=>{d&&Do(v)&&i(v)},updateFontNo:v=>{const T=Number(v);!d||isNaN(T)||u(T)}}},SA=g.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,TA=g.p`
  color: ${({theme:n})=>n.color.LEMON};
  font-size: ${({$fontSize:n})=>n};
  font-family: ${({$fontFamily:n})=>n};
`,EA=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"},{name:"쿠키런",fontFamily:"CookieRun"}],NA=()=>{const{totamjungTheme:n,fontNo:i,updateTotamjungTheme:l,updateFontNo:u}=wA();return c.jsxs(SA,{children:[c.jsx(tn,{title:"테마 설정",iconSrc:ye.runtime.getURL("/palette.png")}),c.jsx(En,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:n??"",onChange:l}),c.jsx(tn,{title:"폰트 설정",iconSrc:c.jsx(Rg,{})}),c.jsx(En,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:EA.map(({name:d,fontFamily:p,fontSize:h},y)=>({label:c.jsx(TA,{$fontFamily:p,$fontSize:h??"16px",children:d}),value:String(y)})),checkedValue:i===void 0?"":String(i),onChange:u})]})},RA=g.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,F1=n=>{const{confirmText:i}=n,[l,u]=w.useState(""),[d,p]=w.useState(i);return w.useEffect(()=>{p(d)},[i]),{inputValue:l,isSameWithConfirmText:l===d,updateInputValue:v=>{u(v.target.value)}}},IA=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,kA=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,Ma=g.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,CA=g.div`
  display: flex;
  justify-content: center;
`,Oa="초기화에 동의합니다",jA=n=>{const{open:i,onClose:l,onReset:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:h}=F1({confirmText:Oa});return c.jsxs(Zn,{title:"데이터 초기화",open:i,onClose:l,children:[c.jsxs(IA,{children:[c.jsx(pe,{type:"normal",fontSize:16,children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(kA,{children:[c.jsx(Ma,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),c.jsx(Ma,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(Ma,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(pe,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:Oa}),"를 입력해 주십시오."]}),c.jsx(CA,{children:c.jsx(Vt,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:d,textAlign:"center",placeholder:`"${Oa}"를 입력해 주세요`,hasError:!1,onChange:h})})]}),c.jsxs(jo,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:z.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"초기화",size:"medium",iconSrc:c.jsx(fl,{}),color:z.color.RED,disabled:!p,onClick:u})]})]})},DA=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,MA=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:n})=>n.color.LIGHT_RED_TRANSPARENT};
`,La=g.li`
  font-size: 14px;
  color: ${({theme:n})=>n.color.LIGHT_RED};
`,OA=g.div`
  display: flex;
  justify-content: center;
`,ba="숙지했습니다",LA=n=>{const{open:i,onClose:l,onUpload:u}=n,{inputValue:d,isSameWithConfirmText:p,updateInputValue:h}=F1({confirmText:ba});return c.jsxs(Zn,{title:"데이터 업로드",open:i,onClose:l,children:[c.jsxs(DA,{children:[c.jsx(pe,{type:"normal",fontSize:16,children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),c.jsxs(MA,{children:[c.jsx(La,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),c.jsx(La,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),c.jsx(La,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),c.jsxs(pe,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",c.jsx("b",{children:ba}),"를 입력해 주십시오."]}),c.jsx(OA,{children:c.jsx(Vt,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:d,textAlign:"center",placeholder:`"${ba}"를 입력해 주세요`,hasError:!1,onChange:h})})]}),c.jsxs(jo,{children:[c.jsx(Ce,{type:"button",name:"취소",size:"medium",iconSrc:c.jsx(Io,{}),color:z.color.LIGHT_GRAY,disabled:!1,onClick:l}),c.jsx(Ce,{type:"button",name:"업로드",size:"medium",iconSrc:c.jsx(n1,{}),color:z.color.LIME,disabled:!p,onClick:u})]})]})},Ec=n=>Array.isArray(n)?Array.isArray(n)&&n.every(i=>Nc(i)):!1,Nc=n=>Ee(n)&&"problemId"in n&&"expiresAt"in n&&typeof n.problemId=="number"&&ml(n.expiresAt)&&!isNaN(n.problemId)&&n.problemId%1===0&&n.problemId>=1e3,V1=n=>{if(!Array.isArray(n))return p1;const i=Date.now();return n.filter(l=>Nc(l)&&i<Date.parse(l.expiresAt)).slice(-300)},$1=n=>typeof n=="boolean",Y1=n=>Ee(n)&&Te.DATA_VERSION in n&&Te.CHECKED_ALGORITHM_IDS in n&&Te.QUICK_SLOTS in n&&Te.TOTAMJUNG_THEME in n&&Te.HIDER_OPTIONS in n&&Te.RANDOM_DEFENSE_HISTORY in n&&Te.IS_TIER_HIDDEN in n&&Te.FONT_NO in n&&Te.TIMERS in n?(n[M.DATA_VERSION]==="v1.2"||n[M.DATA_VERSION]===2)&&hl(n[M.CHECKED_ALGORITHM_IDS])&&vl(n[M.QUICK_SLOTS])&&Do(n[M.TOTAMJUNG_THEME])&&fc(n[M.HIDER_OPTIONS])&&wc(n[M.RANDOM_DEFENSE_HISTORY])&&typeof n[M.IS_TIER_HIDDEN]=="boolean"&&wl(n[M.FONT_NO])&&Ec(n[M.TIMERS]):!1,W1=n=>Ee(n)&&M.DATA_VERSION in n&&M.CHECKED_ALGORITHM_IDS in n&&M.QUICK_SLOTS in n&&M.TOTAMJUNG_THEME in n&&M.HIDER_OPTIONS in n&&M.RANDOM_DEFENSE_HISTORY in n&&M.IS_TIER_HIDDEN in n&&M.FONT_NO in n&&M.TIMERS in n&&M.GACHA_OPTIONS in n&&M.SHOULD_SHOW_WELCOME_MESSAGE in n?n[M.DATA_VERSION]===3&&hl(n[M.CHECKED_ALGORITHM_IDS])&&vl(n[M.QUICK_SLOTS])&&Do(n[M.TOTAMJUNG_THEME])&&pc(n[M.HIDER_OPTIONS])&&wc(n[M.RANDOM_DEFENSE_HISTORY])&&typeof n[M.IS_TIER_HIDDEN]=="boolean"&&wl(n[M.FONT_NO])&&Ec(n[M.TIMERS])&&mc(n[M.GACHA_OPTIONS])&&$1(n[M.SHOULD_SHOW_WELCOME_MESSAGE]):!1,Q1=n=>Ee(n)&&M.DATA_VERSION in n&&M.CHECKED_ALGORITHM_IDS in n&&M.QUICK_SLOTS in n&&M.TOTAMJUNG_THEME in n&&M.HIDER_OPTIONS in n&&M.RANDOM_DEFENSE_HISTORY in n&&M.IS_TIER_HIDDEN in n&&M.FONT_NO in n&&M.TIMERS in n&&M.GACHA_OPTIONS in n&&M.SHOULD_SHOW_WELCOME_MESSAGE in n?n[M.DATA_VERSION]===4&&hl(n[M.CHECKED_ALGORITHM_IDS])&&vl(n[M.QUICK_SLOTS])&&Do(n[M.TOTAMJUNG_THEME])&&hc(n[M.HIDER_OPTIONS])&&wc(n[M.RANDOM_DEFENSE_HISTORY])&&typeof n[M.IS_TIER_HIDDEN]=="boolean"&&wl(n[M.FONT_NO])&&Ec(n[M.TIMERS])&&mc(n[M.GACHA_OPTIONS])&&$1(n[M.SHOULD_SHOW_WELCOME_MESSAGE]):!1,Z1=n=>n===!0,q1=["v1.2",2,3,4],bA=n=>fc(n)?n:ic,GA=n=>pc(n)?n:lc,_A=(n,i)=>{const l=S1(n)?{hours:Number(n.hour),minutes:Number(n.minute)}:{hours:0,minutes:20},u=M4(i)?{algorithmHiderUsage:i.predict,problemTagLockUsage:i.lock==="always"?"auto":"click"}:{algorithmHiderUsage:"click",problemTagLockUsage:"click"};return{...ic,problemTagLockDuration:l,...u}},HA=n=>({...n,shouldRevealTierOnHover:!1}),zA=n=>({...n,shouldHideSource:!1}),PA=n=>{if(!Ee(n)||!("theme"in n))return"none";const{theme:i}=n;return i==="yes"?"totamjung":"none"},BA=n=>{const{selectedNo:i,...l}=n;return{selectedSlotNo:i,slots:l,hotkey:"Alt"}},UA=n=>{const i=[];return n.forEach(({no:l,title:u,tier:d,date:p})=>{const h=new Date(p).toISOString();ml(h)&&i.push({problemId:l,title:u,tier:d,createdAt:h})}),i},FA=n=>{if(!Ee(n)||!("font"in n))return 0;const i=n.font;return!yA(i)||i==="none"?0:Number(i.split("-")[1])},VA=n=>{if(!S1(n))return[];const{expire:i,problem:l}=n,u=new Date(i);if(isNaN(u.getTime()))return[];if(l===-1)return[];const d=new Date(i).toISOString(),p={problemId:l,expiresAt:d};return Nc(p)?[p]:[]},$A=(n,i)=>{const l=w7(n[Bn.QUICK_SLOTS]),u=$7(i[c3.RANDOM_DEFENSE_HISTORY]),d=gl(n[Bn.CHECKED_ALGORITHM_IDS]),p=Al(n[M.IS_TIER_HIDDEN]),h=PA(n[Bn.SETTINGS]),y=_A(n[Bn.TIMER],n[Bn.SETTINGS]),v=BA(l),T=UA(u),x=FA(n[Bn.SETTINGS]),S=VA(n[Bn.TIMER]);return{[Te.CHECKED_ALGORITHM_IDS]:d,[Te.QUICK_SLOTS]:v,[Te.TOTAMJUNG_THEME]:h,[Te.HIDER_OPTIONS]:y,[Te.RANDOM_DEFENSE_HISTORY]:T,[Te.IS_TIER_HIDDEN]:p,[Te.FONT_NO]:x,[Te.TIMERS]:S,[Te.SHOULD_SHOW_WELCOME_MESSAGE]:!1,[Te.DATA_VERSION]:2}},m2=n=>{const i=bA(n[Te.HIDER_OPTIONS]),l=gl(n[Te.CHECKED_ALGORITHM_IDS]),u=yl(n[Te.QUICK_SLOTS]),d=Sc(n[Te.TOTAMJUNG_THEME]),p=HA(i),h=xl(n[Te.RANDOM_DEFENSE_HISTORY]),y=Al(n[M.IS_TIER_HIDDEN]),v=Tc(n[Te.FONT_NO]),T=V1(n[Te.TIMERS]),x=Z1(n[Te.SHOULD_SHOW_WELCOME_MESSAGE]);return{[M.CHECKED_ALGORITHM_IDS]:l,[M.QUICK_SLOTS]:u,[M.TOTAMJUNG_THEME]:d,[M.HIDER_OPTIONS]:p,[M.RANDOM_DEFENSE_HISTORY]:h,[M.IS_TIER_HIDDEN]:y,[M.FONT_NO]:v,[M.TIMERS]:T,[M.GACHA_OPTIONS]:cc,[M.SHOULD_SHOW_WELCOME_MESSAGE]:x,[M.DATA_VERSION]:3}},Ga=n=>{const i=GA(n[M.HIDER_OPTIONS]),l=gl(n[M.CHECKED_ALGORITHM_IDS]),u=yl(n[M.QUICK_SLOTS]),d=Sc(n[M.TOTAMJUNG_THEME]),p=zA(i),h=xl(n[M.RANDOM_DEFENSE_HISTORY]),y=Al(n[M.IS_TIER_HIDDEN]),v=Tc(n[M.FONT_NO]),T=V1(n[M.TIMERS]),x=Z1(n[M.SHOULD_SHOW_WELCOME_MESSAGE]);return{[M.CHECKED_ALGORITHM_IDS]:l,[M.QUICK_SLOTS]:u,[M.TOTAMJUNG_THEME]:d,[M.HIDER_OPTIONS]:p,[M.RANDOM_DEFENSE_HISTORY]:h,[M.IS_TIER_HIDDEN]:y,[M.FONT_NO]:v,[M.TIMERS]:T,[M.GACHA_OPTIONS]:cc,[M.SHOULD_SHOW_WELCOME_MESSAGE]:x,[M.DATA_VERSION]:4}},YA=n=>{const{dataVersion:i}=n;return i===2||i==="v1.2"?2:i===3?3:i===4?4:1},WA=async()=>{const[n,i]=await Promise.all([ye.storage.sync.get(),ye.storage.local.get()]),l=YA(i);if(l!==4){if(l===1){await ye.storage.local.set(Ga(m2($A(n,i))));return}if(l===2){await ye.storage.local.set(Ga(m2(i)));return}await ye.storage.local.set(Ga(i))}},QA=async n=>{if(!Ee(n)||!("dataVersion"in n))return!1;const{dataVersion:i}=n;return typeof i!="number"&&typeof i!="string"||!q1.includes(i)||(i==="v1.2"||i===2)&&!Y1(n)||i===3&&!W1(n)?!1:i!==4?(await ye.storage.local.set(n),await WA(),!0):Q1(n)?(await ye.storage.local.set(n),!0):!1},ZA=async()=>(await ye.storage.local.set(h3),!0),qA=(n,i)=>{const l=document.createElement("a"),u=new Blob([n],{type:"text/plain"});l.href=URL.createObjectURL(u),l.download=i,l.click(),URL.revokeObjectURL(l.href)},KA=async()=>{const n=await ye.runtime.sendMessage({command:vo.FETCH_OPTIONS_DATA}),i=JSON.stringify(n),l=`totamjung_savefile_${B1(new Date).replace(" ","_")}.ttj`;qA(i,l)},XA=()=>{const[n,i]=w.useState("none"),[l,u]=w.useState(void 0),[d,p]=w.useState({errorTitle:"",errorMessage:""}),{errorTitle:h,errorMessage:y}=d,v=D=>{p(D),i("error")};return{activeModal:n,errorTitle:h,errorMessage:y,setActiveModal:i,resetOptionsData:async()=>{await ZA()&&(i("none"),location.reload())},extractOptionsData:async()=>{KA(),i("none")},stageOptionsData:async D=>{const G=D.target.files;if(!G)return;const B=G[0];if(B.name.split(".").at(-1)!=="ttj"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(B.size>1048576){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const V=new FileReader;V.onload=async()=>{try{const q=V.result;if(typeof q!="string"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const F=JSON.parse(q),{dataVersion:ne}=F;if(!("dataVersion"in F)||ne!=="v1.2"&&typeof ne!="number"){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(!q1.includes(ne)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${ne}으로, 이 버전에서 다룰 수 있는 가장 높은 데이터 버전인 4보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(["v1.2",2].includes(ne)&&!Y1(F)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"v1.2.* 버전 데이터의 세이브파일은 업로드 가능하나, 이 세이브파일은 데이터의 일부 또는 전부가 손실된 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(ne===3&&!W1(F)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"v1.3 ~ v1.3.3.2 버전 데이터의 세이브파일은 업로드 가능하나, 이 세이브파일은 데이터의 일부 또는 전부가 손실된 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(ne===4&&!Q1(F)){v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}u(F),i("upload")}catch{v({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},V.readAsText(B)},uploadOptionsData:async()=>{l&&(QA(l),location.reload())},closeModal:()=>{i("none")}}},JA=g.label`
  display: block;
  width: 270px;
`,e8=g.div`
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
`,t8=g.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:n})=>n.color.LIME};
  }
`,n8=g.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:n})=>n.color.LIME};
`,r8=g.input`
  display: none;
`,o8=n=>{const{onChange:i}=n,l=w.useRef(null),u=d=>{var p;(d.key===" "||d.key==="Enter")&&((p=l.current)==null||p.click())};return c.jsxs(JA,{children:[c.jsxs(e8,{role:"button",tabIndex:0,ref:l,onKeyDown:u,children:[c.jsx(t8,{children:c.jsx(n1,{})}),c.jsx(n8,{children:"설정 데이터 업로드"})]}),c.jsx(r8,{type:"file",accept:".ttj",onClick:d=>{d.currentTarget.value=""},onChange:i})]})},i8=()=>{const{activeModal:n,errorTitle:i,errorMessage:l,setActiveModal:u,resetOptionsData:d,extractOptionsData:p,stageOptionsData:h,uploadOptionsData:y,closeModal:v}=XA();return c.jsxs(RA,{children:[c.jsx(tn,{title:"데이터 관리",iconSrc:c.jsx(Ig,{})}),c.jsx(Ce,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,iconSrc:c.jsx(kg,{}),onClick:()=>{u("extract")}}),c.jsx(o8,{onChange:h}),c.jsx(Ce,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,iconSrc:c.jsx(Cg,{}),onClick:()=>{u("reset")}}),c.jsx(pe,{type:"normal",fontSize:16,children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),c.jsxs(pe,{type:"normal",fontSize:16,children:["토탐정 세이브파일의 확장자는 ",c.jsx("b",{children:".ttj"}),"입니다."]}),c.jsx(nn,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:n==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:p,onClose:v}),c.jsx(LA,{open:n==="upload",onUpload:y,onClose:v}),c.jsx(jA,{open:n==="reset",onReset:d,onClose:v}),c.jsx(nn,{title:i,actionType:"confirm",width:"350px",height:"auto",open:n==="error",message:l,onClose:v})]})},l8=n=>{const{show:i}=n;return i?c.jsxs(hA,{children:[c.jsx(NA,{}),c.jsx(i8,{})]}):null},s8=()=>{const[n,i]=w.useState("algorithmHider");return{selectedCategory:n,setSelectedCategory:i}},Yi=6,a8=n=>{const{activeScope:i}=n,[l,u]=w.useState(null),[d,p]=w.useState(!0),[h,y]=w.useState({top:0,left:0,width:0,height:0}),v=l&&!d?1:0,T=w.useCallback(x=>{if(!x.getBoundingClientRect)return;const S=x.getBoundingClientRect();y({top:`${S.top-Yi}px`,left:`${S.left-Yi}px`,width:`${S.width+Yi*2}px`,height:`${S.height+Yi*2}px`})},[]);return w.useEffect(()=>{if(!l||d)return;let x;const S=()=>{T(l),x=requestAnimationFrame(S)};return S(),()=>{cancelAnimationFrame(x)}},[l,d,T]),w.useEffect(()=>{const x=D=>{["Tab","ArrowLeft","ArrowRight"].includes(D.code)&&p(!1)},S=()=>{p(!0)},R=D=>{D.target instanceof HTMLElement&&i.contains(D.target)&&u(D.target)},j=D=>{(!(D.relatedTarget instanceof HTMLElement)||!i.contains(D.relatedTarget))&&u(null)};return window.addEventListener("keydown",x),window.addEventListener("mousedown",S),i.addEventListener("focusin",R),i.addEventListener("focusout",j),()=>{window.removeEventListener("keydown",x),window.removeEventListener("mousedown",S),i.removeEventListener("focusin",R),i.removeEventListener("focusout",j)}},[i]),{indicatorInfo:{...h,opacity:v}}},c8=at`
  0% {
    border-color: ${z.color.ORANGE};
    box-shadow: 0 0 12px ${$n(z.color.ORANGE,.6)};
  }
  50% {
    border-color: ${z.color.MANGO};
    box-shadow: 0 0 12px ${$n(z.color.MANGO,.6)};
  }
  100% {
    border-color: ${z.color.ORANGE};
    box-shadow: 0 0 12px ${$n(z.color.ORANGE,.6)};
  }
`,u8=g.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 3;
  pointer-events: none;
`,d8=g.div`
  position: absolute;

  border: 3px solid ${({theme:n})=>n.color.ORANGE};
  border-radius: 4px;

  box-shadow: 0 0 12px
    ${({theme:n})=>$n(n.color.ORANGE,.6)};
  will-change: top, left, width, height, opacity;
  transition:
    top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease-out;
  animation: ${c8} 1.5s ease-in-out infinite;
`,f8=n=>{const{activeScope:i,portalTarget:l}=n,{indicatorInfo:u}=a8({activeScope:i});return i1.createPortal(c.jsx(u8,{children:c.jsx(d8,{style:{...u}})}),l??document.body)},p8=at`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,h8=g.div`
  display: flex;

  width: 1310px;
  height: 685px;
  margin: 10px 0 0 20px;
`,g8=g.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,m8=g.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 600px;
`,v8=g.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,y8=g.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${p8} 3s forwards infinite;
`,x8=()=>{const{selectedCategory:n,setSelectedCategory:i}=s8();return c.jsxs(h8,{children:[c.jsxs(g8,{children:[c.jsx(Lm,{selectedCategory:n,onCategoryChange:i}),c.jsxs(m8,{children:[c.jsx(U4,{show:n==="algorithmHider"}),c.jsx(pA,{show:n==="randomDefense"}),c.jsx(l8,{show:n==="appearanceAndDataManage"})]})]}),c.jsx(v8,{children:c.jsx(y8,{src:sm,alt:""})}),c.jsx(f8,{activeScope:document.body})]})};var Wi={},v2;function A8(){if(v2)return Wi;v2=1;var n=o1();return Wi.createRoot=n.createRoot,Wi.hydrateRoot=n.hydrateRoot,Wi}var w8=A8();const y2=document.getElementById("root"),_a=y2&&w8.createRoot(y2);_a==null||_a.render(c.jsx(w.StrictMode,{children:c.jsxs(Zh,{theme:z,children:[c.jsx(Jh,{}),c.jsx(x8,{})]})}));
