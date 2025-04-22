import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";import{C as _}from"./commands-CzqO23sC.js";import{i as _e}from"./checkedAlgorithmIdsValidator-D3rPSOXE.js";import{i as se}from"./hiderOptionsValidator-GWixe-v0.js";import{A as Ie}from"./algorithmInfos-BNLNF_TH.js";import{D as we}from"./defaultValues-Cj_gNYP_.js";import{b as V,c as X}from"./quickSlotsValidator-UNQ9RKcq.js";import{i as ve,R as De}from"./RandomDefenseGachaModal-DT-YKi5v.js";import{u as ke}from"./useModal-CV8qRtLl.js";import{s as Me}from"./index-CElCL35T.js";import{d as Be}from"./typeGuards-D1JoHm9O.js";import{I as Oe}from"./InspectResultIcon-CnetcSUg.js";import{S as Ce}from"./SpeechBubble-CshDQ4f1.js";import{T as z}from"./Text-D9btwR46.js";import{d as v,m as re,l as Ae}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as Pe}from"./index-DAfSkmQi.js";import{G as Ne}from"./GachaProblemCountInputModal-Ckk8ITtJ.js";import{f as Y}from"./index-C_FWhylE.js";import"./IconButton-DB9afjvp.js";import"./Modal-B6gp7QWS.js";import"./close-R_Y1ANk3.js";import"./copy-CpUHLpuP.js";import"./warning-C3WqP-8Y.js";import"./check-Dgz4zLBN.js";import"./loading-D5dlFyPz.js";import"./hidden-tier-badge-CukGKv-l.js";import"./theme-YzccoX_F.js";import"./CardBox-bS-pGwcS.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-2FZRlbGy.js";import"./ProblemCard-BgKbrXKa.js";import"./GachaModalNotification-ODFavTlC.js";import"./check-circle-c0jdaR34.js";import"./randomDefense-DFxRSgnp.js";const B=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},K=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),i=[];return n.forEach(a=>{a instanceof HTMLElement&&i.push(a)}),i},je=()=>{const[e,t]=o.useState(!1),[n,i]=o.useState(0),[a,s]=o.useState("보기");return o.useEffect(()=>{if(!e){s("보기");return}const c=()=>{const R=n-Date.now();if(R<=0){s("보기"),t(!1);return}const S=Math.floor(R/36e5),f=String(Math.floor(R%36e5/6e4)).padStart(2,"0"),h=String(Math.floor(R%6e4/1e3)).padStart(2,"0");s(`잠김 (🔒︎${S}:${f}:${h} 후 보기 가능)`)},d=setInterval(()=>{c()},100);return()=>{clearInterval(d)}},[e,n]),{isTimerRunning:e,timerDisplayText:a,setTimerByDuration:c=>{const d=Date.now()+c;i(d),t(!0)},setTimerByEndTime:c=>{i(c),t(!0)},clearTimer:()=>{t(!1)}}},He=e=>{const{checkedAlgorithmIds:t,hiderOptions:n}=e,{isTimerRunning:i,timerDisplayText:a,setTimerByDuration:s,setTimerByEndTime:m,clearTimer:g}=je(),[b,c]=o.useState(!1),[d,R]=o.useState(!1),[S,f]=o.useState(!1),[h,L]=o.useState(!1),l=o.useRef(null),u=o.useRef(null);return o.useEffect(()=>{(async()=>{const E=await browser.runtime.sendMessage({command:_.GET_REMAINING_LOCK_TIME});typeof E!="number"||E===0||s(E)})()},[]),o.useEffect(()=>{var w;if(!t||!n)return;const x=()=>{const p=B(".show-spoiler");if(!p)return;p.getAttribute("disabled")&&f(!0);const D=p.cloneNode(!0);D instanceof HTMLElement&&(l.current=D,p.after(D),p.remove(),u.current=B(".spoiler"),R(!0))},E=()=>{const p=K(".spoiler-link"),D=p.map(y=>y.innerText.replace(/\u2013/g,"-"));let O=!1;const C=[];D.forEach((y,$)=>{var N;const P=(N=Ie.find(j=>j.name===y||j.englishName===y))==null?void 0:N.id;(P===void 0||!t.includes(P))&&(O=!0,C.push($))}),C.forEach(y=>{p[y].innerText+=" 📌",p[y].style.fontWeight="800"}),c(O),L(!0)},I=p=>{p.preventDefault(),!i&&(!l.current||!u.current||(l.current.style.display="none",u.current.style.display="block",f(!0)))};if(x(),h||E(),(w=l.current)==null||w.addEventListener("click",I),l.current){if(i){l.current.style.cursor="not-allowed",l.current.style.textDecorationColor="transparent";return}l.current.style.cursor="pointer",l.current.style.textDecorationColor="inherit"}return()=>{var p;(p=l.current)==null||p.removeEventListener("click",I)}},[t,n,i,h]),o.useEffect(()=>{l.current&&(l.current.innerText=a)},[a]),{hasUnknownAlgorithms:b,isSpoilerExist:d,isSpoilerOpened:S,setTimerByDuration:s,setTimerByEndTime:m,toggleTimer:async()=>{if(i){g(),browser.runtime.sendMessage({command:_.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:_.ADD_SINGLE_TIMER});const x=await browser.runtime.sendMessage({command:_.FETCH_HIDER_OPTIONS});if(!se(x))return;const{hours:E,minutes:I}=x.problemTagLockDuration,w=E*36e5+I*6e4;s(w)}}},Z=(e,t,n)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||n||!isNaN(Number(e))||t.startsWith("Digit"),Ue=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:n,onPress:i,onLongPress:a}=e,[s,m]=o.useState(n),[g,b]=o.useState(!1),c=o.useRef(null),d=o.useRef(null),R=o.useRef(!1),S=o.useRef(void 0),f=l=>{const{key:u,code:T,altKey:x}=l;if(!(R.current||g||!Z(u,T,x))&&(c.current===null&&s==="Alt"&&(u==="Alt"||T==="AltLeft"||T==="AltRight"||x)&&(c.current=T==="AltRight"?"AltRight":"AltLeft"),c.current===null&&s==="F2"&&(u==="F2"||T==="F2")&&(c.current="F2"),d.current===null&&c.current!==null)){isNaN(Number(u))||(d.current=Number(u)),T.startsWith("Digit")&&(d.current=Number(T.at(-1)));const E=d.current;typeof E=="number"&&V(E)&&(R.current=!0,S.current=setTimeout(()=>{b(!0),a(E)},t))}},h=l=>{const{key:u,code:T,altKey:x}=l;if(g||!Z(u,T,x))return;const E=s==="Alt"&&T===c.current||c.current==="AltLeft"&&(u==="Alt"||u==="AltLeft"),I=s==="F2"&&(u==="F2"||T===c.current),w=d.current===Number(u)||d.current===Number(T.at(-1));if(E||I||w){const p=d.current;c.current=null,d.current=null,clearTimeout(S.current),R.current=!1,typeof p=="number"&&V(p)&&!g&&(i(p),b(!0))}},L=()=>{b(!1)};return o.useEffect(()=>(m(n),document.addEventListener("keydown",f),document.addEventListener("keyup",h),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",h)}),[n,g]),{unlockHotkey:L}},We=e=>{const{onToast:t,onGachaStart:n}=e,[i,a]=o.useState(!1),s=o.useRef(i),m=o.useRef(we);Ue({baseKey:m.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:f=>b(f,"press"),onLongPress:f=>b(f,"keyLongPress")}),o.useEffect(()=>((async()=>{const h=await browser.runtime.sendMessage({command:_.FETCH_QUICK_SLOTS});X(h)&&(m.current=h,s.current=!0,a(!0))})(),browser.storage.onChanged.addListener(g),()=>{browser.storage.onChanged.removeListener(g)}),[]);const g=(f,h)=>{if(h!=="local"||!("quickSlots"in f))return;const{newValue:L}=f.quickSlots;X(L)&&(m.current=L)},b=async(f,h)=>{if(!s.current)return;s.current=!1,a(!1);const{slots:L}=m.current,l=L[f];if(l.isEmpty){(h==="click"||h==="mouseLongPress")&&t({title:`${f}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),s.current=!0,a(!0);return}if(h==="keyLongPress"||h==="mouseLongPress"){n(l),a(!1);return}const u=await browser.runtime.sendMessage({command:_.GET_RANDOM_DEFENSE_RESULT,query:l.query,problemCount:1});if(!ve(u)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),s.current=!0,a(!0);return}if(!u.success){const{errorMessage:E,errorDescriptions:I}=u;t({title:E,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:I},8e3),s.current=!0,a(!0);return}const{problemInfos:T}=u,{problemId:x}=T[0];browser.runtime.sendMessage({command:_.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...T[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${x}`};return{isRandomDefenseAvailable:i,performRandomDefenseByClick:()=>{b(m.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{b(m.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{s.current=!0,a(!0)},disableRandomDefense:()=>{s.current=!1,a(!1)}}},$e=e=>{const{requiredLongPressTimeInMilliseconds:t,onClick:n,onLongPress:i}=e,[a,s]=o.useState(!1),m=o.useRef(!1),g=o.useRef(void 0),b=o.useRef(null),c=()=>{clearTimeout(g.current),g.current=setTimeout(()=>{i(),m.current=!1,s(!1)},t),s(!0),m.current=!0},d=()=>{m.current&&(n(),clearTimeout(g.current)),s(!1),m.current=!1},R=()=>{clearTimeout(g.current),s(!1),m.current=!1};return o.useEffect(()=>{const S=b.current;if(S)return S.addEventListener("mousedown",c),S.addEventListener("mouseup",d),S.addEventListener("mouseleave",R),()=>{clearTimeout(g.current)}},[b.current]),{isPressing:a,longPressRef:b}},ie=/\d+(?=\.svg$)/,Ge=/\d+$/,Fe=/^\d+/,Ke=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",qe=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",Je='.loginbar > li > a[href^="/user/"]',Qe=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],Ve=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",Xe=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",ze=(e,t)=>{Ye(e,t),t&&(Ze(e),et(e),tt(e))},Ye=async(e,t)=>{const n=B(Ke),i=B(Je),a=B(qe);if(!(n instanceof HTMLImageElement)||!i||!a)return;const s=a.innerText.match(Fe),m=n.src.match(ie);if(!s||!m)return;const g=i.innerText.trim(),b=Number(s),c=Number(m);if(!Be(c))return;const d=await browser.runtime.sendMessage({command:_.IS_USER_SOLVED_PROBLEM,handle:g,problemId:b});if(d==="unknown"){n.remove();return}if(d){n.style.content=`url(${JSON.stringify(Me[c])}`;return}c>=e&&t&&n.classList.add("warn")},Ze=e=>{[...Qe.map(n=>K(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const a=n.src.match(ie);a&&Number(a)>=e&&n.classList.add("warn")}})},et=e=>{const t=B(Ve);if(!t)return;const n=t.classList[0];if(!n)return;const i=n.match(Ge);i&&Number(i)>=e&&t.classList.add("warn")},tt=e=>{K(Xe).forEach(n=>{const i=n.getAttribute("data-tier");i&&Number(i)>=e&&n.classList.add("warn")})},nt=e=>typeof e=="boolean",ot=e=>{const{theme:t,onChangeTheme:n,onToast:i}=e,[a,s]=o.useState(!1),[m,g]=o.useState(!1),[b,c]=o.useState(void 0),[d,R]=o.useState(void 0),[S,f]=o.useState(!1),[h,L]=o.useState(!1),[l,u]=o.useState(null),[T,x]=o.useState(0),[E,I]=o.useState(!1),{hasUnknownAlgorithms:w,isSpoilerExist:p,isSpoilerOpened:D,toggleTimer:O}=He({checkedAlgorithmIds:b,hiderOptions:d}),{activeModalName:C,openModal:y,closeModal:$}=ke(),{isRandomDefenseAvailable:P,performRandomDefenseByClick:N,performRandomDefenseByMouseLongPress:j,enableRandomDefense:ce}=We({onToast:i,onGachaStart:k=>Se(k)}),{isPressing:le,longPressRef:ue}=$e({requiredLongPressTimeInMilliseconds:1e3,onClick:N,onLongPress:j}),me=!P,J=!p||D||S,de=!p||D,pe=p&&S;o.useEffect(()=>{(async()=>{const[H,G,Q]=await Promise.all([browser.runtime.sendMessage({command:_.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:_.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:_.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!_e(H)||!se(G)||!nt(Q))return;const{algorithmHiderUsage:Re,shouldHideTier:xe,shouldWarnHighTier:Le,warnTier:ye}=G;xe&&ze(ye,Le),Re==="always"&&f(!0),c(H),R(G),L(Q),I(!0)})()},[]);const fe=()=>{a||(s(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},ge=()=>{s(!1)},he=k=>{k.preventDefault(),k.stopPropagation(),g(H=>!H)},be=()=>{browser.runtime.sendMessage({command:_.OPEN_OPTIONS_PAGE})},Te=()=>{E&&n(t==="totamjung"?"none":"totamjung")},Ee=()=>{J||(f(!0),i(w?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},Se=k=>{y("gachaProblemCount"),u(k)};return{isExpanded:m,isScrollingToTop:a,hasUnknownAlgorithms:w,isRandomDefenseButtonDisabled:me,isRandomDefenseButtonPressing:le,gachaProblemCount:T,gachaSlot:l,isInspectButtonDisabled:J,isLockButtonDisabled:de,shouldShowInspectIcon:pe,shouldShowWelcomeMessage:h,activeModalName:C,isLoaded:E,scrollToTop:fe,endScrollingAnimation:ge,toggleWidgetOpen:he,openOptionsPage:be,toggleTotamjungTheme:Te,openGachaModalWithProblemCount:k=>{l&&(y("gacha"),x(k))},suspendGacha:()=>{$(),u(null),ce()},showInspectResultUsingPopup:Ee,toggleTimer:O,closeWelcomeMessage:()=>{L(!1),browser.runtime.sendMessage({command:_.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},randomDefenseButtonRef:ue}},st=v.div`
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
`,rt=re`
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
`,q=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 40px;
  height: 40px;

  border-radius: 20px !important;
  background-color: ${({theme:e,$widgetTheme:t})=>t==="none"?e.color.BOJ_BLUE:e.color.LIGHTEST_BROWN};

  transition:
    0.3s transform,
    0.1s outline;
  z-index: 1;
  outline: 0px solid
    ${({theme:e,$widgetTheme:t})=>t==="totamjung"?e.color.LIGHTEST_BROWN_TRANSPARENT:e.color.BOJ_BLUE_TRANSPARENT} !important;

  &:active {
    transform: scale(0.93);
  }

  &:hover,
  &:active {
    outline: 4px solid
      ${({theme:e,$widgetTheme:t})=>t==="totamjung"?e.color.LIGHTEST_BROWN_TRANSPARENT:e.color.BOJ_BLUE_TRANSPARENT} !important;
  }

  & span {
    background-color: ${({theme:e,$widgetTheme:t})=>t==="none"?e.color.PURE_WHITE:e.color.BROWN};
  }
`,it=v.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${q}.animate > & {
    animation: ${rt} 1s forwards;
  }
`,ee=v.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,at=v.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  width: 40px;
  height: ${({$isExpanded:e})=>e?"216px":"40px"};
  padding: 8px 0 0 0;

  border: 2px solid
    ${({theme:e,$widgetTheme:t})=>t==="none"?e.color.BOJ_BLUE:e.color.LIGHTEST_BROWN};
  border-radius: 20px !important;
  background-color: ${({theme:e,$widgetTheme:t})=>t==="none"?"transparent":e.color.BLACK_TRANSPARENT};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${q}:active + & {
    scale: 0.93;
  }
`,A=v.li`
  width: 36px;
  height: 32px;
`,ae=Ae`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;
`,M=v.img.attrs({draggable:!1})`
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
`,U=v.button`
  ${ae}

  & > ${M} {
    filter: ${({theme:e,$widgetTheme:t})=>t==="none"?e.filter.BOJ_BLUE_FILTER:e.filter.LIGHT_BROWN_FILTER};
  }
`,ct=re`
  from {
    mask-position: 0% 0%;
  }

  to {
    mask-position: 0% 100%;
  }
`,lt=v.button`
  ${ae}

  & > ${M} {
    filter: ${({theme:e,$widgetTheme:t})=>t==="none"?e.filter.BOJ_BLUE_FILTER:e.filter.LIGHT_BROWN_FILTER};
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

    animation: ${ct} 0.8s 0.2s forwards linear;
  }
`,ut=v.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,mt=v.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,F=e=>{const{theme:t,rootElement:n}=e,{isExpanded:i,isScrollingToTop:a,hasUnknownAlgorithms:s,isRandomDefenseButtonDisabled:m,isRandomDefenseButtonPressing:g,gachaProblemCount:b,gachaSlot:c,isInspectButtonDisabled:d,isLockButtonDisabled:R,shouldShowInspectIcon:S,shouldShowWelcomeMessage:f,activeModalName:h,isLoaded:L,scrollToTop:l,endScrollingAnimation:u,toggleWidgetOpen:T,openOptionsPage:x,toggleTotamjungTheme:E,openGachaModalWithProblemCount:I,suspendGacha:w,showInspectResultUsingPopup:p,toggleTimer:D,closeWelcomeMessage:O,randomDefenseButtonRef:C}=ot(e),y=B("#problem_title");return r.jsx(st,{children:L&&r.jsxs(r.Fragment,{children:[r.jsx(q,{type:"button",className:a?"animate":"",$widgetTheme:t,onClick:l,onContextMenu:T,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:r.jsxs(it,{onAnimationEnd:u,children:[r.jsx(ee,{$direction:"left"}),r.jsx(ee,{$direction:"right"})]})}),r.jsxs(at,{$widgetTheme:t,$isExpanded:i,children:[r.jsx(A,{children:r.jsx(U,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:x,children:r.jsx(M,{src:browser.runtime.getURL("/settings.png")})})}),r.jsx(A,{children:r.jsx(U,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",onClick:E,children:r.jsx(M,{src:browser.runtime.getURL("/palette.png")})})}),r.jsx(A,{children:r.jsx(lt,{ref:C,type:"button",className:g?"pressing":"",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:m,children:r.jsx(M,{src:browser.runtime.getURL("/dice.png")})})}),r.jsx(A,{children:r.jsx(U,{type:"button",disabled:d,onClick:p,$widgetTheme:t,children:r.jsx(M,{src:S?s?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),r.jsx(A,{children:r.jsx(U,{type:"button",disabled:R,onClick:D,$widgetTheme:t,children:r.jsx(M,{src:browser.runtime.getURL("/lock.png")})})})]}),y&&S&&Pe.createPortal(r.jsx(Oe,{theme:t,icon:s?"question":"check"}),y),f&&r.jsx(ut,{children:r.jsx(Ce,{open:!0,maxWidth:"400px",content:r.jsxs(mt,{children:[r.jsx(z,{type:"normal",fontSize:"14px",children:"토탐정을 설치해 주셔서 감사합니다!"}),r.jsxs(z,{type:"normal",fontSize:"14px",children:[r.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),totamjungTheme:t,direction:"left",hasCloseButton:!0,onClose:O})}),r.jsx(Ne,{open:h==="gachaProblemCount",portalTarget:n,theme:t,shouldShowHotkeyMessage:!1,onClose:w,onSubmitProblemCount:I}),c&&r.jsx(De,{open:h==="gacha",portalTarget:n,theme:t,slot:c,problemCount:b,onClose:w})]})})};try{F.displayName="Widget",F.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const Xt={title:"components/Widget",component:F,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},W={decorators:[e=>r.jsx("div",{style:{width:"100%",height:"240px"},children:r.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:Y(),onToast:Y()}};var te,ne,oe;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=W.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const zt=["Default"];export{W as Default,zt as __namedExportsOrder,Xt as default};
