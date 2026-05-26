import{j as n}from"./jsx-runtime-SwSI87LU.js";import{r}from"./index-C5e9SFkp.js";import{u as ne,C}from"./useTranslation-oInNA2-n.js";import{i as Ne,h as it}from"./hiderOptionsValidator-CTYLfD5r.js";import{a as at}from"./algorithmInfos-yvhlfANf.js";import{e as ct}from"./defaultValues-CdP65zEr.js";import{b as me,c as pe}from"./quickSlotsValidator-Dbc2diwO.js";import{i as lt,R as dt}from"./RandomDefenseGachaModal-CbU6Gy-z.js";import{u as ut}from"./useModalState-BsXo_e1W.js";import{s as mt}from"./index-CElCL35T.js";import{h as pt}from"./typeGuards-DnhUVcj4.js";import{i as ht}from"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import{I as gt}from"./InspectResultIcon-a_Tss-Zr.js";import{S as ft}from"./SpeechBubble-Do_O7fgR.js";import{t as d}from"./theme-C-IIZrvZ.js";import{y as I,O as He,p as bt}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as G}from"./getTransparentHexColor-DN69VCBw.js";import{r as Et}from"./index-BQcl82tf.js";import{G as Tt}from"./GachaProblemCountInputModal-BMn4CRSy.js";import{f as A}from"./index-BnbMJD-K.js";import"./IconButton-BdyC5KRL.js";import"./Modal-XX4ToJJX.js";import"./close-DAYv_a5U.js";import"./copy-DI2J0EY7.js";import"./warning-CDzyeWVE.js";import"./check-BDBG6Lff.js";import"./loading-BvLXNyKO.js";import"./hidden-tier-badge-CukGKv-l.js";import"./CardBox-d_TkpgGY.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-DiUsJ8xf.js";import"./ProblemCard-c5lC-Ljr.js";import"./useRovingFocus-B429qbOp.js";import"./gachaOptionsValidator-CLdTdrhO.js";import"./GachaModalNotification-6H9ucwZb.js";import"./index-vofeE47f.js";import"./Input-DuvBN6GO.js";import"./toPx-DeOSKary.js";import"./Text-CDp_2vO2.js";import"./check-circle-Dwk1XCDm.js";import"./randomDefense-JL_bjho1.js";const W=(e,t)=>{const o=document.querySelector(e);return o instanceof HTMLElement?o:null},ae=(e,t)=>{const o=Array.from(document.querySelectorAll(e)),s=[];return o.forEach(u=>{u instanceof HTMLElement&&s.push(u)}),s},vt=()=>{const{t:e}=ne(),[t,o]=r.useState(!1),[s,u]=r.useState(0),[i,c]=r.useState(e("hooks.lockTimer.show"));return r.useEffect(()=>{if(!t){c(e("hooks.lockTimer.show"));return}const l=()=>{const v=s-Date.now();if(v<=0){c(e("hooks.lockTimer.show")),o(!1);return}const R=Math.floor(v/36e5),a=String(Math.floor(v%36e5/6e4)).padStart(2,"0"),E=String(Math.floor(v%6e4/1e3)).padStart(2,"0");c(e("hooks.lockTimer.lockedFormat",[String(R),a,E]))},x=setInterval(()=>{l()},100);return()=>{clearInterval(x)}},[t,s,e]),{isTimerRunning:t,timerDisplayText:i,setTimerByDuration:l=>{const x=Date.now()+l;u(x),o(!0)},setTimerByEndTime:l=>{u(l),o(!0)},clearTimer:()=>{o(!1)}}},xt=e=>{const{checkedAlgorithmIds:t,hiderOptions:o}=e,{isTimerRunning:s,timerDisplayText:u,setTimerByDuration:i,setTimerByEndTime:c,clearTimer:g}=vt(),[m,p]=r.useState(!1),[l,x]=r.useState(!1),[v,R]=r.useState(!1),[a,E]=r.useState(!1),h=r.useRef(null),S=r.useRef(null);return r.useEffect(()=>{(async()=>{const y=await browser.runtime.sendMessage({command:C.GET_REMAINING_LOCK_TIME});typeof y!="number"||y===0||i(y)})()},[]),r.useEffect(()=>{var w;if(!t||!o)return;const f=()=>{const b=W(".show-spoiler");if(!b)return;b.getAttribute("disabled")&&R(!0);const k=b.cloneNode(!0);k instanceof HTMLElement&&(h.current=k,b.after(k),b.remove(),S.current=W(".spoiler"),x(!0))},y=()=>{const b=ae(".spoiler-link"),k=b.map(B=>B.innerText.replace(/\u2013/g,"-").toLowerCase());let O=!1;const F=[];k.forEach((B,U)=>{var P;const D=(P=at.find(K=>K.name.toLowerCase()===B||K.englishName.toLowerCase()===B))==null?void 0:P.id;(D===void 0||!t.includes(D))&&(O=!0,F.push(U))}),F.forEach(B=>{b[B].innerText+=" 📌",b[B].style.fontWeight="800"}),p(O),E(!0)},L=b=>{b.preventDefault(),!s&&(!h.current||!S.current||(h.current.style.display="none",S.current.style.display="block",R(!0)))};if(f(),a||y(),(w=h.current)==null||w.addEventListener("click",L),h.current){if(s){h.current.style.cursor="not-allowed",h.current.style.textDecorationColor="transparent";return}h.current.style.cursor="pointer",h.current.style.textDecorationColor="inherit"}return()=>{var b;(b=h.current)==null||b.removeEventListener("click",L)}},[t,o,s,a]),r.useEffect(()=>{h.current&&(h.current.innerText=u)},[u]),{hasUnknownAlgorithms:m,isSpoilerExist:l,isSpoilerOpened:v,setTimerByDuration:i,setTimerByEndTime:c,toggleTimer:async()=>{if(s){g(),browser.runtime.sendMessage({command:C.REMOVE_SINGLE_TAG_LOCK_TIMER});return}browser.runtime.sendMessage({command:C.ADD_SINGLE_TAG_LOCK_TIMER});const f=await browser.runtime.sendMessage({command:C.FETCH_HIDER_OPTIONS});if(!Ne(f))return;const{hours:y,minutes:L}=f.problemTagLockDuration,w=y*36e5+L*6e4;i(w)}}},he=(e,t,o)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||o||!isNaN(Number(e))||t.startsWith("Digit"),yt=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:o,onPress:s,onLongPress:u}=e,[i,c]=r.useState(o),[g,m]=r.useState(!1),p=r.useRef(null),l=r.useRef(null),x=r.useRef(!1),v=r.useRef(void 0),R=S=>{const{key:T,code:f,altKey:y}=S;if(!(x.current||g||!he(T,f,y))&&(p.current===null&&i==="Alt"&&(T==="Alt"||f==="AltLeft"||f==="AltRight"||y)&&(p.current=f==="AltRight"?"AltRight":"AltLeft"),p.current===null&&i==="F2"&&(T==="F2"||f==="F2")&&(p.current="F2"),l.current===null&&p.current!==null)){isNaN(Number(T))||(l.current=Number(T)),f.startsWith("Digit")&&(l.current=Number(f.at(-1)));const L=l.current;typeof L=="number"&&me(L)&&(x.current=!0,v.current=setTimeout(()=>{m(!0),u(L)},t))}},a=S=>{const{key:T,code:f,altKey:y}=S;if(g||!he(T,f,y))return;const L=i==="Alt"&&f===p.current||p.current==="AltLeft"&&(T==="Alt"||T==="AltLeft"),w=i==="F2"&&(T==="F2"||f===p.current),b=l.current===Number(T)||l.current===Number(f.at(-1));if(L||w||b){const k=l.current;p.current=null,l.current=null,clearTimeout(v.current),x.current=!1,typeof k=="number"&&me(k)&&!g&&(s(k),m(!0))}},E=()=>{p.current=null,l.current=null,x.current=!1,clearTimeout(v.current)},h=()=>{m(!1),p.current=null,l.current=null,x.current=!1};return r.useEffect(()=>{c(o)},[o]),r.useEffect(()=>(document.addEventListener("keydown",R),document.addEventListener("keyup",a),document.addEventListener("visibilitychange",E),window.addEventListener("blur",E),()=>{document.removeEventListener("keydown",R),document.removeEventListener("keyup",a),document.removeEventListener("visibilitychange",E),window.removeEventListener("blur",E),clearTimeout(v.current)}),[i,g]),{unlockHotkey:h}},St=e=>{const{onToast:t,onGachaStart:o}=e,{t:s}=ne(),[u,i]=r.useState(!1),c=r.useRef(u),g=r.useRef(ct),{unlockHotkey:m}=yt({baseKey:g.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:E=>l(E,"press"),onLongPress:E=>l(E,"keyLongPress")});r.useEffect(()=>((async()=>{const h=await browser.runtime.sendMessage({command:C.FETCH_QUICK_SLOT_OPTIONS});pe(h)&&(g.current=h,c.current=!0,i(!0))})(),browser.storage.onChanged.addListener(p),()=>{browser.storage.onChanged.removeListener(p)}),[]);const p=(E,h)=>{if(h!=="local"||!("quickSlotOptions"in E))return;const{newValue:S}=E.quickSlotOptions;pe(S)&&(g.current=S)},l=async(E,h)=>{if(!c.current)return;c.current=!1,i(!1);const{slots:S}=g.current,T=S[E];if(T.isEmpty){(h==="click"||h==="mouseLongPress")&&t({title:s("hooks.randomDefense.emptySlotTitle",[String(E)]),mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:[s("hooks.randomDefense.emptySlotDescription1"),s("hooks.randomDefense.emptySlotDescription2")]},8e3),c.current=!0,i(!0);return}if(h==="keyLongPress"||h==="mouseLongPress"){o(T),i(!1);return}const f=await browser.runtime.sendMessage({command:C.GET_RANDOM_DEFENSE_RESULT,query:T.query,problemCount:1});if(!lt(f)){t({title:s("hooks.randomDefense.dataMismatchTitle"),mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:s("hooks.randomDefense.dataMismatchDescription")},8e3),c.current=!0,i(!0);return}if(!f.success){const{errorMessage:w,errorDescriptions:b}=f,k=b?Array.isArray(b)?b.map(O=>s(O.key,O.substitutions)):s(b.key,b.substitutions):void 0;t({title:s(w.key,w.substitutions),mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:k},8e3),c.current=!0,i(!0);return}const{problemInfos:y}=f,{problemId:L}=y[0];browser.runtime.sendMessage({command:C.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...y[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${L}`};return{isRandomDefenseAvailable:u,performRandomDefenseByClick:()=>{l(g.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{l(g.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{c.current=!0,i(!0),m()},disableRandomDefense:()=>{c.current=!1,i(!1)}}},ge=1e3,Lt=e=>{const{onClick:t,onLongPress:o}=e,[s,u]=r.useState(!1),i=r.useRef(!1),c=r.useRef(void 0),g=r.useRef(null),m=r.useRef(null),p=()=>{m.current&&m.current!=="Mouse"||(m.current="Mouse",clearTimeout(c.current),c.current=setTimeout(()=>{o(),i.current=!1,u(!1),m.current=null},ge),u(!0),i.current=!0)},l=()=>{m.current==="Mouse"&&(i.current&&(t(),clearTimeout(c.current)),u(!1),i.current=!1,m.current=null)},x=()=>{m.current==="Mouse"&&(clearTimeout(c.current),u(!1),i.current=!1,m.current=null)},v=a=>{a.repeat||a.code!=="Space"&&a.code!=="Enter"||m.current&&m.current!==a.code||(m.current=a.code,clearTimeout(c.current),c.current=setTimeout(()=>{o(),i.current=!1,u(!1),m.current=null},ge),u(!0),i.current=!0)},R=a=>{a.code!=="Space"&&a.code!=="Enter"||m.current===a.code&&(i.current&&(t(),clearTimeout(c.current)),u(!1),i.current=!1,m.current=null)};return r.useEffect(()=>{const a=g.current;if(a)return a.addEventListener("mousedown",p),a.addEventListener("mouseup",l),a.addEventListener("mouseleave",x),a.addEventListener("keydown",v),a.addEventListener("keyup",R),()=>{clearTimeout(c.current),a.removeEventListener("mousedown",p),a.removeEventListener("mouseup",l),a.removeEventListener("mouseleave",x),a.removeEventListener("keydown",v),a.removeEventListener("keyup",R)}},[g.current]),{isPressing:s,longPressRef:g}},We=/\d+(?=\.svg$)/,kt=/\d+$/,Rt=/^\d+/,wt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",At=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",Dt='.loginbar > li > a[href^="/user/"]',_t=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".row:has(li[class='active'] > a[href='/problem/added']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href^='/group/workbook']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],Ct=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",It=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",Bt=(e,t)=>{Ot(e,t),t&&(jt(e),Mt(e),Pt(e))},Ot=async(e,t)=>{const o=W(wt),s=W(Dt),u=W(At);if(!(o instanceof HTMLImageElement)||!s||!u)return;const i=u.innerText.match(Rt),c=o.src.match(We);if(!i||!c)return;const g=s.innerText.trim(),m=Number(i),p=Number(c);if(!pt(p))return;const l=await browser.runtime.sendMessage({command:C.IS_USER_SOLVED_PROBLEM,handle:g,problemId:m});if(l==="unknown"){o.remove();return}if(l){o.style.content=`url(${JSON.stringify(mt[p])}`;return}p>=e&&t&&o.classList.add("warn")},jt=e=>{[..._t.map(o=>ae(o)).flat()].forEach(o=>{if(o instanceof HTMLImageElement){const u=o.src.match(We);u&&Number(u)>=e&&o.classList.add("warn")}})},Mt=e=>{const t=W(Ct);if(!t)return;const o=t.classList[0];if(!o)return;const s=o.match(kt);s&&Number(s)>=e&&t.classList.add("warn")},Pt=e=>{ae(It).forEach(o=>{const s=o.getAttribute("data-tier");s&&Number(s)>=e&&o.classList.add("warn")})},Nt=e=>{const{theme:t,onChangeTheme:o,onToast:s}=e,{t:u}=ne(),[i,c]=r.useState(!1),[g,m]=r.useState(!1),[p,l]=r.useState(void 0),[x,v]=r.useState(void 0),[R,a]=r.useState(!1),[E,h]=r.useState(!1),[S,T]=r.useState(null),[f,y]=r.useState(0),[L,w]=r.useState(!1),{hasUnknownAlgorithms:b,isSpoilerExist:k,isSpoilerOpened:O,toggleTimer:F}=xt({checkedAlgorithmIds:p,hiderOptions:x}),{activeModalName:B,openModal:U,closeModal:D}=ut(),{isRandomDefenseAvailable:P,performRandomDefenseByClick:K,performRandomDefenseByMouseLongPress:Ke,enableRandomDefense:$e}=St({onToast:s,onGachaStart:_=>ot(_)}),{isPressing:Ge,longPressRef:qe}=Lt({onClick:K,onLongPress:Ke}),le=r.useRef(null),de=r.useRef(null),re=r.useRef(null),Qe=!P,ue=!k||O||R,Ye=!k||O,Ve=k&&R;r.useEffect(()=>{const _=async()=>{const[N,$,M]=await Promise.all([browser.runtime.sendMessage({command:C.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:C.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:C.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!it(N)||!Ne($)||!ht(M))return;const{algorithmHiderUsage:Q,shouldHideTier:nt,shouldWarnHighTier:rt,warnTier:st}=$;nt&&Bt(st,rt),Q==="always"&&a(!0),l(N),v($),h(M),w(!0)},j=N=>{var Q;const M=N.composedPath()[0];(M===null||M instanceof Node&&M instanceof HTMLElement&&!((Q=le.current)!=null&&Q.contains(M)))&&(re.current=M)};return _(),document.addEventListener("focusin",j),()=>{document.removeEventListener("focusin",j)}},[]),r.useEffect(()=>{document.documentElement.setAttribute("totamjungTheme",t==="totamjung"?"totamjung":"none")},[t]),r.useEffect(()=>{const _=j=>{var N;j.altKey&&j.shiftKey&&j.code==="KeyW"&&(m($=>!$),g&&re.current&&re.current.focus(),g||(N=de.current)==null||N.focus())};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[g]);const Xe=()=>{i||(c(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},Je=()=>{c(!1)},ze=_=>{_.preventDefault(),_.stopPropagation(),m(j=>!j)},Ze=()=>{browser.runtime.sendMessage({command:C.OPEN_OPTIONS_PAGE})},et=()=>{L&&o(t==="totamjung"?"none":"totamjung")},tt=()=>{ue||(a(!0),s(b?{title:u("hooks.widget.inspectQuestionTitle"),mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:u("hooks.widget.inspectCheckTitle"),mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},ot=_=>{U("gachaProblemCount"),T(_)};return{isExpanded:g,isScrollingToTop:i,hasUnknownAlgorithms:b,isRandomDefenseButtonDisabled:Qe,isRandomDefenseButtonPressing:Ge,gachaProblemCount:f,gachaSlot:S,isInspectButtonDisabled:ue,isLockButtonDisabled:Ye,shouldShowInspectIcon:Ve,shouldShowWelcomeMessage:E,activeModalName:B,isLoaded:L,scrollToTop:Xe,endScrollingAnimation:Je,toggleWidgetOpen:ze,openOptionsPage:Ze,toggleTotamjungTheme:et,openGachaModalWithProblemCount:_=>{S&&(U("gacha"),y(_))},suspendGacha:()=>{D(),T(null),$e()},showInspectResultUsingPopup:tt,toggleTimer:F,closeWelcomeMessage:()=>{h(!1),browser.runtime.sendMessage({command:C.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},containerRef:le,topButtonRef:de,randomDefenseButtonRef:qe}},oe={none:d.colors.BOJ_BLUE,totamjung:d.colors.BROWN_300,solvedAcLight:d.solvedAcColors.LIME,solvedAcDark:d.solvedAcColors.LIME,solvedAcBlack:d.solvedAcColors.LIME,bojExtendedDark:d.bojExtendedColors.GRAY_600,bojExtendedRigel:d.bojExtendedColors.SKY_BLUE},Ht={none:d.colors.WHITE,totamjung:d.colors.BROWN_700,solvedAcLight:d.colors.WHITE,solvedAcDark:d.colors.WHITE,solvedAcBlack:d.colors.WHITE,bojExtendedDark:d.bojExtendedColors.GRAY_300,bojExtendedRigel:d.colors.OFF_WHITE},Fe={none:d.filters.BOJ_BLUE,totamjung:d.filters.BROWN_300,solvedAcLight:d.solvedAcFilters.LIME,solvedAcDark:d.solvedAcFilters.LIME,solvedAcBlack:d.solvedAcFilters.LIME,bojExtendedDark:d.bojExtendedFilters.GRAY_600,bojExtendedRigel:d.bojExtendedFilters.SKY_BLUE},Wt={none:"transparent",totamjung:G(d.colors.BLACK,.31),solvedAcLight:"transparent",solvedAcDark:G(d.colors.BLACK,.31),solvedAcBlack:G(d.colors.BLACK,.31),bojExtendedDark:G(d.colors.BLACK,.31),bojExtendedRigel:G(d.colors.BLACK,.31)},Ft={none:d.colors.OFF_WHITE,totamjung:d.colors.OFF_WHITE,solvedAcLight:d.colors.BLACK,solvedAcDark:d.colors.OFF_WHITE,solvedAcBlack:d.colors.OFF_WHITE,bojExtendedDark:d.colors.OFF_WHITE,bojExtendedRigel:d.colors.OFF_WHITE},Ut=I.div`
  padding-top: 10px;
  color: blue;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  right: 30px;
  bottom: 30px;

  width: 40px;
  height: 216px;

  pointer-events: none;
  transition: 0.3s;

  & * {
    pointer-events: auto;
  }
`,Kt=He`
    0% {
        transform: translateY(0);
    }
    33% {
      transform: translateY(5px);
    }
    66% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(0);
    }
`,ce=I.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 40px;
  height: 40px;

  border-radius: 20px !important;
  background-color: ${({theme:e,$widgetTheme:t})=>oe[t]??e.colors.BOJ_BLUE};

  transition:
    0.3s transform,
    0.1s outline;
  z-index: 1;
  outline: 0px solid
    ${({$widgetTheme:e})=>oe[e]} !important;

  &:active {
    transform: scale(0.93);
  }

  &:hover,
  &:active {
    outline: 4px solid
      ${({$widgetTheme:e})=>G(oe[e],.4)} !important;
  }

  & span {
    background-color: ${({$widgetTheme:e})=>Ht[e]};
  }
`,$t=I.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${ce}.animate > & {
    animation: ${Kt} 1s forwards;
  }
`,fe=I.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,Gt=I.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  width: 40px;
  height: ${({$isExpanded:e})=>e?"216px":"40px"};
  padding: 8px 0 0 0;

  border: 2px solid
    ${({$widgetTheme:e})=>oe[e]};
  border-radius: 20px !important;
  background-color: ${({$widgetTheme:e})=>Wt[e]};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${ce}:active + & {
    scale: 0.93;
  }
`,q=I.li`
  width: 36px;
  height: 32px;
`,Ue=bt`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;
`,H=I.img.attrs({draggable:!1})`
  width: auto;
  height: 26px;

  transition: transform 0.1s;

  button:disabled > & {
    opacity: 0.6;
  }

  button:not(:disabled):hover > & {
    transform: scale(1.1);
  }

  button:not(:disabled):active > & {
    transform: scale(1);
  }
`,Y=I.button`
  ${Ue}

  & > ${H} {
    filter: ${({$widgetTheme:e})=>Fe[e]};
  }
`,qt=He`
  from {
    mask-position: 0% 0%;
  }

  to {
    mask-position: 0% 100%;
  }
`,Qt=I.button`
  ${Ue}

  & > ${H} {
    filter: ${({$widgetTheme:e})=>Fe[e]};
  }

  &.pressing:after {
    content: '';
    position: absolute;

    width: 24.79px;
    height: 26px;

    background-image: url(${browser.runtime.getURL("/dice.png")});
    background-size: 24.79px 26px;
    filter: ${({theme:e})=>e.filters.GRAY_300};
    mix-blend-mode: color-dodge;
    opacity: 0.4;
    mask-image: linear-gradient(to bottom, transparent 50%, black 50%);
    mask-size: 100% 200%;

    animation: ${qt} 0.8s 0.2s forwards linear;
  }
`,Yt=I.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,se=I.span`
  font-size: 14px;
  line-height: 14px;
`,Vt=I.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  & > ${se} {
    color: ${({$totamjungTheme:e})=>Ft[e]};
  }
`,Xt=e=>typeof e=="string"&&["solvedAcLight","solvedAcDark","solvedAcBlack"].includes(e),ie=e=>{const{theme:t,rootElement:o}=e,{isExpanded:s,isScrollingToTop:u,hasUnknownAlgorithms:i,isRandomDefenseButtonDisabled:c,isRandomDefenseButtonPressing:g,gachaProblemCount:m,gachaSlot:p,isInspectButtonDisabled:l,isLockButtonDisabled:x,shouldShowInspectIcon:v,shouldShowWelcomeMessage:R,activeModalName:a,isLoaded:E,scrollToTop:h,endScrollingAnimation:S,toggleWidgetOpen:T,openOptionsPage:f,toggleTotamjungTheme:y,openGachaModalWithProblemCount:L,suspendGacha:w,showInspectResultUsingPopup:b,toggleTimer:k,closeWelcomeMessage:O,containerRef:F,topButtonRef:B,randomDefenseButtonRef:U}=Nt(e),{t:D}=ne(),P=W("#problem_title"),K=t!=="none"&&t!=="totamjung";return n.jsx(Ut,{ref:F,children:E&&n.jsxs(n.Fragment,{children:[n.jsx(ce,{type:"button",className:u?"animate":"",$widgetTheme:t,onClick:h,onContextMenu:T,"aria-label":D("widget.topButtonAriaLabel"),ref:B,children:n.jsxs($t,{onAnimationEnd:S,children:[n.jsx(fe,{$direction:"left"}),n.jsx(fe,{$direction:"right"})]})}),n.jsxs(Gt,{$widgetTheme:t,$isExpanded:s,children:[n.jsx(q,{children:n.jsx(Y,{type:"button",$widgetTheme:t,"aria-label":D("widget.openOptionsAriaLabel"),onClick:f,children:n.jsx(H,{src:browser.runtime.getURL("/settings.png")})})}),n.jsx(q,{children:n.jsx(Y,{type:"button",$widgetTheme:t,"aria-label":D(t==="none"?"widget.themeOnAriaLabel":"widget.themeOffAriaLabel"),disabled:K,onClick:y,children:n.jsx(H,{src:browser.runtime.getURL("/palette.png")})})}),n.jsx(q,{children:n.jsx(Qt,{ref:U,type:"button",className:g?"pressing":"",$widgetTheme:t,"aria-label":D("widget.randomDefenseAriaLabel"),disabled:c,children:n.jsx(H,{src:browser.runtime.getURL("/dice.png")})})}),n.jsx(q,{children:n.jsx(Y,{type:"button",disabled:l,onClick:b,$widgetTheme:t,children:n.jsx(H,{src:v?i?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),n.jsx(q,{children:n.jsx(Y,{type:"button",disabled:x,onClick:k,$widgetTheme:t,children:n.jsx(H,{src:browser.runtime.getURL("/lock.png")})})})]}),P&&v&&!Xt(t)&&Et.createPortal(n.jsx(gt,{theme:t,icon:i?"question":"check"}),P),R&&n.jsx(Yt,{children:n.jsx(ft,{open:!0,maxWidth:"400px",content:n.jsxs(Vt,{$totamjungTheme:t,children:[n.jsx(se,{children:D("widget.welcomeLine1")}),n.jsxs(se,{children:[n.jsx("strong",{children:D("widget.welcomeLine2Prefix")}),D("widget.welcomeLine2Suffix")]})]}),theme:t,direction:"left",hasCloseButton:!0,onClose:O})}),n.jsx(Tt,{open:a==="gachaProblemCount",portalTarget:o,theme:t,shouldShowHotkeyMessage:!1,onClose:w,onSubmitProblemCount:L}),p&&n.jsx(dt,{open:a==="gacha",portalTarget:o,theme:t,slot:p,problemCount:m,onClose:w})]})})};try{ie.displayName="Widget",ie.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const Uo={title:"components/Widget",component:ie,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},V={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:A(),onToast:A()}},X={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"totamjung",onChangeTheme:A(),onToast:A()}},J={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedDark",onChangeTheme:A(),onToast:A()}},z={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedRigel",onChangeTheme:A(),onToast:A()}},Z={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcLight",onChangeTheme:A(),onToast:A()}},ee={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcDark",onChangeTheme:A(),onToast:A()}},te={decorators:[e=>n.jsx("div",{style:{width:"100%",height:"240px"},children:n.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcBlack",onChangeTheme:A(),onToast:A()}};var be,Ee,Te;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'none',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(Te=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var ve,xe,ye;X.parameters={...X.parameters,docs:{...(ve=X.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'totamjung',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(ye=(xe=X.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Se,Le,ke;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'bojExtendedDark',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(ke=(Le=J.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Re,we,Ae;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'bojExtendedRigel',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(Ae=(we=z.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var De,_e,Ce;Z.parameters={...Z.parameters,docs:{...(De=Z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'solvedAcLight',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(Ce=(_e=Z.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Ie,Be,Oe;ee.parameters={...ee.parameters,docs:{...(Ie=ee.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'solvedAcDark',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(Oe=(Be=ee.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var je,Me,Pe;te.parameters={...te.parameters,docs:{...(je=te.parameters)==null?void 0:je.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    rootElement: document.body,
    theme: 'solvedAcBlack',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(Pe=(Me=te.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};const Ko=["Default","Totamjung","BojExtendedDark","BojExtendedRigel","SolvedAcLight","SolvedAcDark","SolvedAcBlack"];export{J as BojExtendedDark,z as BojExtendedRigel,V as Default,te as SolvedAcBlack,ee as SolvedAcDark,Z as SolvedAcLight,X as Totamjung,Ko as __namedExportsOrder,Uo as default};
