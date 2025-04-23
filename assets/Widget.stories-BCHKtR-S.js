import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{C as k}from"./commands-CaAsnwPl.js";import{i as ze}from"./checkedAlgorithmIdsValidator-D3rPSOXE.js";import{i as De}from"./hiderOptionsValidator-CGMdHXNl.js";import{A as Ze}from"./algorithmInfos-BNLNF_TH.js";import{a as et}from"./defaultValues-H1FOnekR.js";import{b as re,c as ae}from"./quickSlotsValidator-BQTBqyR5.js";import{i as tt,R as ot}from"./RandomDefenseGachaModal-CMoXvUY4.js";import{u as nt}from"./useModal-CV8qRtLl.js";import{s as st}from"./index-CElCL35T.js";import{c as rt}from"./typeGuards-Bsa9ERJp.js";import{i as at}from"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import{I as it}from"./InspectResultIcon-BVq5PuzA.js";import{S as ct}from"./SpeechBubble-D-5J0C1x.js";import{t as i}from"./theme-CqSsbPCW.js";import{d as D,m as _e,l as lt}from"./styled-components.browser.esm-CkAH7aAm.js";import{g as dt}from"./getTransparentHexColor-DN69VCBw.js";import{r as mt}from"./index-DAfSkmQi.js";import{G as ut}from"./GachaProblemCountInputModal-DdC8wWQi.js";import{f as y}from"./index-C_FWhylE.js";import"./IconButton-DB9afjvp.js";import"./Modal-Cuej82dh.js";import"./close-R_Y1ANk3.js";import"./copy-CpUHLpuP.js";import"./warning-C3WqP-8Y.js";import"./check-Dgz4zLBN.js";import"./loading-D5dlFyPz.js";import"./hidden-tier-badge-CukGKv-l.js";import"./CardBox-bS-pGwcS.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-2FZRlbGy.js";import"./ProblemCard-BgKbrXKa.js";import"./gachaOptionsValidator-CX_fe7zV.js";import"./GachaModalNotification-ODFavTlC.js";import"./check-circle-c0jdaR34.js";import"./randomDefense-BrQ0TErT.js";const j=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},te=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),a=[];return n.forEach(c=>{c instanceof HTMLElement&&a.push(c)}),a},pt=()=>{const[e,t]=s.useState(!1),[n,a]=s.useState(0),[c,r]=s.useState("보기");return s.useEffect(()=>{if(!e){r("보기");return}const l=()=>{const R=n-Date.now();if(R<=0){r("보기"),t(!1);return}const S=Math.floor(R/36e5),h=String(Math.floor(R%36e5/6e4)).padStart(2,"0"),b=String(Math.floor(R%6e4/1e3)).padStart(2,"0");r(`잠김 (🔒︎${S}:${h}:${b} 후 보기 가능)`)},p=setInterval(()=>{l()},100);return()=>{clearInterval(p)}},[e,n]),{isTimerRunning:e,timerDisplayText:c,setTimerByDuration:l=>{const p=Date.now()+l;a(p),t(!0)},setTimerByEndTime:l=>{a(l),t(!0)},clearTimer:()=>{t(!1)}}},gt=e=>{const{checkedAlgorithmIds:t,hiderOptions:n}=e,{isTimerRunning:a,timerDisplayText:c,setTimerByDuration:r,setTimerByEndTime:u,clearTimer:f}=pt(),[T,l]=s.useState(!1),[p,R]=s.useState(!1),[S,h]=s.useState(!1),[b,L]=s.useState(!1),d=s.useRef(null),m=s.useRef(null);return s.useEffect(()=>{(async()=>{const x=await browser.runtime.sendMessage({command:k.GET_REMAINING_LOCK_TIME});typeof x!="number"||x===0||r(x)})()},[]),s.useEffect(()=>{var I;if(!t||!n)return;const v=()=>{const g=j(".show-spoiler");if(!g)return;g.getAttribute("disabled")&&h(!0);const _=g.cloneNode(!0);_ instanceof HTMLElement&&(d.current=_,g.after(_),g.remove(),m.current=j(".spoiler"),R(!0))},x=()=>{const g=te(".spoiler-link"),_=g.map(A=>A.innerText.replace(/\u2013/g,"-"));let M=!1;const P=[];_.forEach((A,O)=>{var W;const H=(W=Ze.find(U=>U.name===A||U.englishName===A))==null?void 0:W.id;(H===void 0||!t.includes(H))&&(M=!0,P.push(O))}),P.forEach(A=>{g[A].innerText+=" 📌",g[A].style.fontWeight="800"}),l(M),L(!0)},w=g=>{g.preventDefault(),!a&&(!d.current||!m.current||(d.current.style.display="none",m.current.style.display="block",h(!0)))};if(v(),b||x(),(I=d.current)==null||I.addEventListener("click",w),d.current){if(a){d.current.style.cursor="not-allowed",d.current.style.textDecorationColor="transparent";return}d.current.style.cursor="pointer",d.current.style.textDecorationColor="inherit"}return()=>{var g;(g=d.current)==null||g.removeEventListener("click",w)}},[t,n,a,b]),s.useEffect(()=>{d.current&&(d.current.innerText=c)},[c]),{hasUnknownAlgorithms:T,isSpoilerExist:p,isSpoilerOpened:S,setTimerByDuration:r,setTimerByEndTime:u,toggleTimer:async()=>{if(a){f(),browser.runtime.sendMessage({command:k.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:k.ADD_SINGLE_TIMER});const v=await browser.runtime.sendMessage({command:k.FETCH_HIDER_OPTIONS});if(!De(v))return;const{hours:x,minutes:w}=v.problemTagLockDuration,I=x*36e5+w*6e4;r(I)}}},ie=(e,t,n)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||n||!isNaN(Number(e))||t.startsWith("Digit"),ht=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:n,onPress:a,onLongPress:c}=e,[r,u]=s.useState(n),[f,T]=s.useState(!1),l=s.useRef(null),p=s.useRef(null),R=s.useRef(!1),S=s.useRef(void 0),h=d=>{const{key:m,code:E,altKey:v}=d;if(!(R.current||f||!ie(m,E,v))&&(l.current===null&&r==="Alt"&&(m==="Alt"||E==="AltLeft"||E==="AltRight"||v)&&(l.current=E==="AltRight"?"AltRight":"AltLeft"),l.current===null&&r==="F2"&&(m==="F2"||E==="F2")&&(l.current="F2"),p.current===null&&l.current!==null)){isNaN(Number(m))||(p.current=Number(m)),E.startsWith("Digit")&&(p.current=Number(E.at(-1)));const x=p.current;typeof x=="number"&&re(x)&&(R.current=!0,S.current=setTimeout(()=>{T(!0),c(x)},t))}},b=d=>{const{key:m,code:E,altKey:v}=d;if(f||!ie(m,E,v))return;const x=r==="Alt"&&E===l.current||l.current==="AltLeft"&&(m==="Alt"||m==="AltLeft"),w=r==="F2"&&(m==="F2"||E===l.current),I=p.current===Number(m)||p.current===Number(E.at(-1));if(x||w||I){const g=p.current;l.current=null,p.current=null,clearTimeout(S.current),R.current=!1,typeof g=="number"&&re(g)&&!f&&(a(g),T(!0))}},L=()=>{T(!1)};return s.useEffect(()=>(u(n),document.addEventListener("keydown",h),document.addEventListener("keyup",b),()=>{document.removeEventListener("keydown",h),document.removeEventListener("keyup",b)}),[n,f]),{unlockHotkey:L}},ft=e=>{const{onToast:t,onGachaStart:n}=e,[a,c]=s.useState(!1),r=s.useRef(a),u=s.useRef(et);ht({baseKey:u.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:h=>T(h,"press"),onLongPress:h=>T(h,"keyLongPress")}),s.useEffect(()=>((async()=>{const b=await browser.runtime.sendMessage({command:k.FETCH_QUICK_SLOTS});ae(b)&&(u.current=b,r.current=!0,c(!0))})(),browser.storage.onChanged.addListener(f),()=>{browser.storage.onChanged.removeListener(f)}),[]);const f=(h,b)=>{if(b!=="local"||!("quickSlots"in h))return;const{newValue:L}=h.quickSlots;ae(L)&&(u.current=L)},T=async(h,b)=>{if(!r.current)return;r.current=!1,c(!1);const{slots:L}=u.current,d=L[h];if(d.isEmpty){(b==="click"||b==="mouseLongPress")&&t({title:`${h}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),r.current=!0,c(!0);return}if(b==="keyLongPress"||b==="mouseLongPress"){n(d),c(!1);return}const m=await browser.runtime.sendMessage({command:k.GET_RANDOM_DEFENSE_RESULT,query:d.query,problemCount:1});if(!tt(m)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),r.current=!0,c(!0);return}if(!m.success){const{errorMessage:x,errorDescriptions:w}=m;t({title:x,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:w},8e3),r.current=!0,c(!0);return}const{problemInfos:E}=m,{problemId:v}=E[0];browser.runtime.sendMessage({command:k.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...E[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${v}`};return{isRandomDefenseAvailable:a,performRandomDefenseByClick:()=>{T(u.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{T(u.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{r.current=!0,c(!0)},disableRandomDefense:()=>{r.current=!1,c(!1)}}},bt=e=>{const{requiredLongPressTimeInMilliseconds:t,onClick:n,onLongPress:a}=e,[c,r]=s.useState(!1),u=s.useRef(!1),f=s.useRef(void 0),T=s.useRef(null),l=()=>{clearTimeout(f.current),f.current=setTimeout(()=>{a(),u.current=!1,r(!1)},t),r(!0),u.current=!0},p=()=>{u.current&&(n(),clearTimeout(f.current)),r(!1),u.current=!1},R=()=>{clearTimeout(f.current),r(!1),u.current=!1};return s.useEffect(()=>{const S=T.current;if(S)return S.addEventListener("mousedown",l),S.addEventListener("mouseup",p),S.addEventListener("mouseleave",R),()=>{clearTimeout(f.current)}},[T.current]),{isPressing:c,longPressRef:T}},Ce=/\d+(?=\.svg$)/,Tt=/\d+$/,Et=/^\d+/,xt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",St=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",Rt='.loginbar > li > a[href^="/user/"]',vt=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],yt=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",Lt=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",At=(e,t)=>{kt(e,t),t&&(wt(e),It(e),Dt(e))},kt=async(e,t)=>{const n=j(xt),a=j(Rt),c=j(St);if(!(n instanceof HTMLImageElement)||!a||!c)return;const r=c.innerText.match(Et),u=n.src.match(Ce);if(!r||!u)return;const f=a.innerText.trim(),T=Number(r),l=Number(u);if(!rt(l))return;const p=await browser.runtime.sendMessage({command:k.IS_USER_SOLVED_PROBLEM,handle:f,problemId:T});if(p==="unknown"){n.remove();return}if(p){n.style.content=`url(${JSON.stringify(st[l])}`;return}l>=e&&t&&n.classList.add("warn")},wt=e=>{[...vt.map(n=>te(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const c=n.src.match(Ce);c&&Number(c)>=e&&n.classList.add("warn")}})},It=e=>{const t=j(yt);if(!t)return;const n=t.classList[0];if(!n)return;const a=n.match(Tt);a&&Number(a)>=e&&t.classList.add("warn")},Dt=e=>{te(Lt).forEach(n=>{const a=n.getAttribute("data-tier");a&&Number(a)>=e&&n.classList.add("warn")})},_t=e=>{const{theme:t,onChangeTheme:n,onToast:a}=e,[c,r]=s.useState(!1),[u,f]=s.useState(!1),[T,l]=s.useState(void 0),[p,R]=s.useState(void 0),[S,h]=s.useState(!1),[b,L]=s.useState(!1),[d,m]=s.useState(null),[E,v]=s.useState(0),[x,w]=s.useState(!1),{hasUnknownAlgorithms:I,isSpoilerExist:g,isSpoilerOpened:_,toggleTimer:M}=gt({checkedAlgorithmIds:T,hiderOptions:p}),{activeModalName:P,openModal:A,closeModal:O}=nt(),{isRandomDefenseAvailable:H,performRandomDefenseByClick:W,performRandomDefenseByMouseLongPress:U,enableRandomDefense:Me}=ft({onToast:a,onGachaStart:C=>Ye(C)}),{isPressing:Pe,longPressRef:Oe}=bt({requiredLongPressTimeInMilliseconds:1e3,onClick:W,onLongPress:U}),Ne=!H,ne=!g||_||S,He=!g||_,We=g&&S;s.useEffect(()=>{(async()=>{const[$,z,se]=await Promise.all([browser.runtime.sendMessage({command:k.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:k.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:k.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!ze($)||!De(z)||!at(se))return;const{algorithmHiderUsage:Qe,shouldHideTier:Ve,shouldWarnHighTier:Xe,warnTier:Je}=z;Ve&&At(Je,Xe),Qe==="always"&&h(!0),l($),R(z),L(se),w(!0)})()},[]),s.useEffect(()=>{document.documentElement.setAttribute("totamjungTheme",t==="totamjung"?"totamjung":"none")},[t]);const Ue=()=>{c||(r(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},$e=()=>{r(!1)},Ge=C=>{C.preventDefault(),C.stopPropagation(),f($=>!$)},Ke=()=>{browser.runtime.sendMessage({command:k.OPEN_OPTIONS_PAGE})},Fe=()=>{x&&n(t==="totamjung"?"none":"totamjung")},qe=()=>{ne||(h(!0),a(I?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},Ye=C=>{A("gachaProblemCount"),m(C)};return{isExpanded:u,isScrollingToTop:c,hasUnknownAlgorithms:I,isRandomDefenseButtonDisabled:Ne,isRandomDefenseButtonPressing:Pe,gachaProblemCount:E,gachaSlot:d,isInspectButtonDisabled:ne,isLockButtonDisabled:He,shouldShowInspectIcon:We,shouldShowWelcomeMessage:b,activeModalName:P,isLoaded:x,scrollToTop:Ue,endScrollingAnimation:$e,toggleWidgetOpen:Ge,openOptionsPage:Ke,toggleTotamjungTheme:Fe,openGachaModalWithProblemCount:C=>{d&&(A("gacha"),v(C))},suspendGacha:()=>{O(),m(null),Me()},showInspectResultUsingPopup:qe,toggleTimer:M,closeWelcomeMessage:()=>{L(!1),browser.runtime.sendMessage({command:k.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},randomDefenseButtonRef:Oe}},J={none:i.color.BOJ_BLUE,totamjung:i.color.LIGHTEST_BROWN,solvedAcLight:i.solvedAcColor.LIME,solvedAcDark:i.solvedAcColor.LIME,solvedAcBlack:i.solvedAcColor.LIME,bojExtendedDark:i.bojExtendedColor.DARK_GRAY,bojExtendedRigel:i.bojExtendedColor.SKY_BLUE},Ct={none:i.color.PURE_WHITE,totamjung:i.color.BROWN,solvedAcLight:i.color.PURE_WHITE,solvedAcDark:i.color.PURE_WHITE,solvedAcBlack:i.color.PURE_WHITE,bojExtendedDark:i.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:i.color.WHITE},Be={none:i.filter.BOJ_BLUE_FILTER,totamjung:i.filter.LIGHTEST_BROWN_FILTER,solvedAcLight:i.solvedAcFilter.LIME,solvedAcDark:i.solvedAcFilter.LIME,solvedAcBlack:i.solvedAcFilter.LIME,bojExtendedDark:i.bojExtendedFilter.DARK_GRAY,bojExtendedRigel:i.bojExtendedFilter.SKY_BLUE},Bt={none:"transparent",totamjung:i.color.BLACK_TRANSPARENT,solvedAcLight:"transparent",solvedAcDark:i.color.BLACK_TRANSPARENT,solvedAcBlack:i.color.BLACK_TRANSPARENT,bojExtendedDark:i.color.BLACK_TRANSPARENT,bojExtendedRigel:i.color.BLACK_TRANSPARENT},jt={none:i.color.WHITE,totamjung:i.color.WHITE,solvedAcLight:i.color.BLACK,solvedAcDark:i.color.WHITE,solvedAcBlack:i.color.WHITE,bojExtendedDark:i.color.WHITE,bojExtendedRigel:i.color.WHITE},Mt=D.div`
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
  z-index: 1000000;
  transition: 0.3s;

  & * {
    pointer-events: auto;
  }
`,Pt=_e`
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
`,oe=D.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 40px;
  height: 40px;

  border-radius: 20px !important;
  background-color: ${({theme:e,$widgetTheme:t})=>J[t]??e.color.BOJ_BLUE};

  transition:
    0.3s transform,
    0.1s outline;
  z-index: 1;
  outline: 0px solid
    ${({$widgetTheme:e})=>J[e]} !important;

  &:active {
    transform: scale(0.93);
  }

  &:hover,
  &:active {
    outline: 4px solid
      ${({$widgetTheme:e})=>dt(J[e],.4)} !important;
  }

  & span {
    background-color: ${({$widgetTheme:e})=>Ct[e]};
  }
`,Ot=D.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${oe}.animate > & {
    animation: ${Pt} 1s forwards;
  }
`,ce=D.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,Nt=D.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  width: 40px;
  height: ${({$isExpanded:e})=>e?"216px":"40px"};
  padding: 8px 0 0 0;

  border: 2px solid
    ${({$widgetTheme:e})=>J[e]};
  border-radius: 20px !important;
  background-color: ${({$widgetTheme:e})=>Bt[e]};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${oe}:active + & {
    scale: 0.93;
  }
`,N=D.li`
  width: 36px;
  height: 32px;
`,je=lt`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;
`,B=D.img.attrs({draggable:!1})`
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
`,G=D.button`
  ${je}

  & > ${B} {
    filter: ${({$widgetTheme:e})=>Be[e]};
  }
`,Ht=_e`
  from {
    mask-position: 0% 0%;
  }

  to {
    mask-position: 0% 100%;
  }
`,Wt=D.button`
  ${je}

  & > ${B} {
    filter: ${({$widgetTheme:e})=>Be[e]};
  }

  &.pressing:after {
    content: '';
    position: absolute;

    width: 24.79px;
    height: 26px;

    background-image: url(${browser.runtime.getURL("/dice.png")});
    background-size: 24.79px 26px;
    filter: ${({theme:e})=>e.filter.LIGHT_GRAY_FILTER};
    mix-blend-mode: color-dodge;
    opacity: 0.4;
    mask-image: linear-gradient(to bottom, transparent 50%, black 50%);
    mask-size: 100% 200%;

    animation: ${Ht} 0.8s 0.2s forwards linear;
  }
`,Ut=D.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,Z=D.span`
  font-size: 14px;
  line-height: 14px;
  font-family: Pretendard;
`,$t=D.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  & > ${Z} {
    color: ${({$totamjungTheme:e})=>jt[e]};
  }
`,Gt=e=>typeof e=="string"&&["solvedAcLight","solvedAcDark","solvedAcBlack"].includes(e),ee=e=>{const{theme:t,rootElement:n}=e,{isExpanded:a,isScrollingToTop:c,hasUnknownAlgorithms:r,isRandomDefenseButtonDisabled:u,isRandomDefenseButtonPressing:f,gachaProblemCount:T,gachaSlot:l,isInspectButtonDisabled:p,isLockButtonDisabled:R,shouldShowInspectIcon:S,shouldShowWelcomeMessage:h,activeModalName:b,isLoaded:L,scrollToTop:d,endScrollingAnimation:m,toggleWidgetOpen:E,openOptionsPage:v,toggleTotamjungTheme:x,openGachaModalWithProblemCount:w,suspendGacha:I,showInspectResultUsingPopup:g,toggleTimer:_,closeWelcomeMessage:M,randomDefenseButtonRef:P}=_t(e),A=j("#problem_title"),O=t!=="none"&&t!=="totamjung";return o.jsx(Mt,{children:L&&o.jsxs(o.Fragment,{children:[o.jsx(oe,{type:"button",className:c?"animate":"",$widgetTheme:t,onClick:d,onContextMenu:E,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:o.jsxs(Ot,{onAnimationEnd:m,children:[o.jsx(ce,{$direction:"left"}),o.jsx(ce,{$direction:"right"})]})}),o.jsxs(Nt,{$widgetTheme:t,$isExpanded:a,children:[o.jsx(N,{children:o.jsx(G,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:v,children:o.jsx(B,{src:browser.runtime.getURL("/settings.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",disabled:O,onClick:x,children:o.jsx(B,{src:browser.runtime.getURL("/palette.png")})})}),o.jsx(N,{children:o.jsx(Wt,{ref:P,type:"button",className:f?"pressing":"",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:u,children:o.jsx(B,{src:browser.runtime.getURL("/dice.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",disabled:p,onClick:g,$widgetTheme:t,children:o.jsx(B,{src:S?r?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",disabled:R,onClick:_,$widgetTheme:t,children:o.jsx(B,{src:browser.runtime.getURL("/lock.png")})})})]}),A&&S&&!Gt(t)&&mt.createPortal(o.jsx(it,{theme:t,icon:r?"question":"check"}),A),h&&o.jsx(Ut,{children:o.jsx(ct,{open:!0,maxWidth:"400px",content:o.jsxs($t,{$totamjungTheme:t,children:[o.jsx(Z,{children:"토탐정을 설치해 주셔서 감사합니다!"}),o.jsxs(Z,{children:[o.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),theme:t,direction:"left",hasCloseButton:!0,onClose:M})}),o.jsx(ut,{open:b==="gachaProblemCount",portalTarget:n,theme:t,shouldShowHotkeyMessage:!1,onClose:I,onSubmitProblemCount:w}),l&&o.jsx(ot,{open:b==="gacha",portalTarget:n,theme:t,slot:l,problemCount:T,onClose:I})]})})};try{ee.displayName="Widget",ee.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const _o={title:"components/Widget",component:ee,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},K={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:y(),onToast:y()}},F={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"totamjung",onChangeTheme:y(),onToast:y()}},q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedDark",onChangeTheme:y(),onToast:y()}},Y={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedRigel",onChangeTheme:y(),onToast:y()}},Q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcLight",onChangeTheme:y(),onToast:y()}},V={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcDark",onChangeTheme:y(),onToast:y()}},X={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcBlack",onChangeTheme:y(),onToast:y()}};var le,de,me;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(de=K.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ge;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,fe,be;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Te,Ee,xe;Y.parameters={...Y.parameters,docs:{...(Te=Y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(xe=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source}}};var Se,Re,ve;Q.parameters={...Q.parameters,docs:{...(Se=Q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ve=(Re=Q.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};var ye,Le,Ae;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ae=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var ke,we,Ie;X.parameters={...X.parameters,docs:{...(ke=X.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ie=(we=X.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};const Co=["Default","Totamjung","BojExtendedDark","BojExtendedRigel","SolvedAcLight","SolvedAcDark","SolvedAcBlack"];export{q as BojExtendedDark,Y as BojExtendedRigel,K as Default,X as SolvedAcBlack,V as SolvedAcDark,Q as SolvedAcLight,F as Totamjung,Co as __namedExportsOrder,_o as default};
