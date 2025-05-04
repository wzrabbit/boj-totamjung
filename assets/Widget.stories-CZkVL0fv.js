import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{C as w}from"./commands-CaAsnwPl.js";import{i as ze}from"./checkedAlgorithmIdsValidator-D3rPSOXE.js";import{i as De}from"./hiderOptionsValidator-CGMdHXNl.js";import{A as Ze}from"./algorithmInfos-w49mooiO.js";import{a as et}from"./defaultValues-H1FOnekR.js";import{b as re,c as ae}from"./quickSlotsValidator-BQTBqyR5.js";import{i as tt,R as ot}from"./RandomDefenseGachaModal-BMKGUxli.js";import{u as nt}from"./useModal-CV8qRtLl.js";import{s as st}from"./index-CElCL35T.js";import{c as rt}from"./typeGuards-Bsa9ERJp.js";import{i as at}from"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import{I as it}from"./InspectResultIcon-BVq5PuzA.js";import{S as ct}from"./SpeechBubble-D-5J0C1x.js";import{t as c}from"./theme-CqSsbPCW.js";import{d as D,m as _e,l as lt}from"./styled-components.browser.esm-CkAH7aAm.js";import{g as dt}from"./getTransparentHexColor-DN69VCBw.js";import{r as mt}from"./index-DAfSkmQi.js";import{G as ut}from"./GachaProblemCountInputModal-DdC8wWQi.js";import{f as L}from"./index-C_FWhylE.js";import"./IconButton-DB9afjvp.js";import"./Modal-Cuej82dh.js";import"./close-R_Y1ANk3.js";import"./copy-CpUHLpuP.js";import"./warning-C3WqP-8Y.js";import"./check-Dgz4zLBN.js";import"./loading-D5dlFyPz.js";import"./hidden-tier-badge-CukGKv-l.js";import"./CardBox-bS-pGwcS.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-2FZRlbGy.js";import"./ProblemCard-BgKbrXKa.js";import"./gachaOptionsValidator-CX_fe7zV.js";import"./GachaModalNotification-ODFavTlC.js";import"./check-circle-c0jdaR34.js";import"./randomDefense-BrQ0TErT.js";const j=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},te=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),i=[];return n.forEach(l=>{l instanceof HTMLElement&&i.push(l)}),i},pt=()=>{const[e,t]=s.useState(!1),[n,i]=s.useState(0),[l,r]=s.useState("보기");return s.useEffect(()=>{if(!e){r("보기");return}const a=()=>{const S=n-Date.now();if(S<=0){r("보기"),t(!1);return}const x=Math.floor(S/36e5),A=String(Math.floor(S%36e5/6e4)).padStart(2,"0"),h=String(Math.floor(S%6e4/1e3)).padStart(2,"0");r(`잠김 (🔒︎${x}:${A}:${h} 후 보기 가능)`)},m=setInterval(()=>{a()},100);return()=>{clearInterval(m)}},[e,n]),{isTimerRunning:e,timerDisplayText:l,setTimerByDuration:a=>{const m=Date.now()+a;i(m),t(!0)},setTimerByEndTime:a=>{i(a),t(!0)},clearTimer:()=>{t(!1)}}},gt=e=>{const{checkedAlgorithmIds:t,hiderOptions:n}=e,{isTimerRunning:i,timerDisplayText:l,setTimerByDuration:r,setTimerByEndTime:u,clearTimer:b}=pt(),[E,a]=s.useState(!1),[m,S]=s.useState(!1),[x,A]=s.useState(!1),[h,R]=s.useState(!1),d=s.useRef(null),p=s.useRef(null);return s.useEffect(()=>{(async()=>{const T=await browser.runtime.sendMessage({command:w.GET_REMAINING_LOCK_TIME});typeof T!="number"||T===0||r(T)})()},[]),s.useEffect(()=>{var y;if(!t||!n)return;const v=()=>{const g=j(".show-spoiler");if(!g)return;g.getAttribute("disabled")&&A(!0);const _=g.cloneNode(!0);_ instanceof HTMLElement&&(d.current=_,g.after(_),g.remove(),p.current=j(".spoiler"),S(!0))},T=()=>{const g=te(".spoiler-link"),_=g.map(k=>k.innerText.replace(/\u2013/g,"-").toLowerCase());let M=!1;const P=[];_.forEach((k,O)=>{var W;const H=(W=Ze.find(U=>U.name.toLowerCase()===k||U.englishName.toLowerCase()===k))==null?void 0:W.id;(H===void 0||!t.includes(H))&&(M=!0,P.push(O))}),P.forEach(k=>{g[k].innerText+=" 📌",g[k].style.fontWeight="800"}),a(M),R(!0)},I=g=>{g.preventDefault(),!i&&(!d.current||!p.current||(d.current.style.display="none",p.current.style.display="block",A(!0)))};if(v(),h||T(),(y=d.current)==null||y.addEventListener("click",I),d.current){if(i){d.current.style.cursor="not-allowed",d.current.style.textDecorationColor="transparent";return}d.current.style.cursor="pointer",d.current.style.textDecorationColor="inherit"}return()=>{var g;(g=d.current)==null||g.removeEventListener("click",I)}},[t,n,i,h]),s.useEffect(()=>{d.current&&(d.current.innerText=l)},[l]),{hasUnknownAlgorithms:E,isSpoilerExist:m,isSpoilerOpened:x,setTimerByDuration:r,setTimerByEndTime:u,toggleTimer:async()=>{if(i){b(),browser.runtime.sendMessage({command:w.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:w.ADD_SINGLE_TIMER});const v=await browser.runtime.sendMessage({command:w.FETCH_HIDER_OPTIONS});if(!De(v))return;const{hours:T,minutes:I}=v.problemTagLockDuration,y=T*36e5+I*6e4;r(y)}}},ie=(e,t,n)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||n||!isNaN(Number(e))||t.startsWith("Digit"),ht=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:n,onPress:i,onLongPress:l}=e,[r,u]=s.useState(n),[b,E]=s.useState(!1),a=s.useRef(null),m=s.useRef(null),S=s.useRef(!1),x=s.useRef(void 0),A=d=>{const{key:p,code:f,altKey:v}=d;if(!(S.current||b||!ie(p,f,v))&&(a.current===null&&r==="Alt"&&(p==="Alt"||f==="AltLeft"||f==="AltRight"||v)&&(a.current=f==="AltRight"?"AltRight":"AltLeft"),a.current===null&&r==="F2"&&(p==="F2"||f==="F2")&&(a.current="F2"),m.current===null&&a.current!==null)){isNaN(Number(p))||(m.current=Number(p)),f.startsWith("Digit")&&(m.current=Number(f.at(-1)));const T=m.current;typeof T=="number"&&re(T)&&(S.current=!0,x.current=setTimeout(()=>{E(!0),l(T)},t))}},h=d=>{const{key:p,code:f,altKey:v}=d;if(b||!ie(p,f,v))return;const T=r==="Alt"&&f===a.current||a.current==="AltLeft"&&(p==="Alt"||p==="AltLeft"),I=r==="F2"&&(p==="F2"||f===a.current),y=m.current===Number(p)||m.current===Number(f.at(-1));if(T||I||y){const g=m.current;a.current=null,m.current=null,clearTimeout(x.current),S.current=!1,typeof g=="number"&&re(g)&&!b&&(i(g),E(!0))}},R=()=>{E(!1),a.current=null,m.current=null,S.current=!1};return s.useEffect(()=>{u(n)},[n]),s.useEffect(()=>(document.addEventListener("keydown",A),document.addEventListener("keyup",h),()=>{document.removeEventListener("keydown",A),document.removeEventListener("keyup",h),clearTimeout(x.current)}),[r,b]),{unlockHotkey:R}},ft=e=>{const{onToast:t,onGachaStart:n}=e,[i,l]=s.useState(!1),r=s.useRef(i),u=s.useRef(et),{unlockHotkey:b}=ht({baseKey:u.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:h=>a(h,"press"),onLongPress:h=>a(h,"keyLongPress")});s.useEffect(()=>((async()=>{const R=await browser.runtime.sendMessage({command:w.FETCH_QUICK_SLOTS});ae(R)&&(u.current=R,r.current=!0,l(!0))})(),browser.storage.onChanged.addListener(E),()=>{browser.storage.onChanged.removeListener(E)}),[]);const E=(h,R)=>{if(R!=="local"||!("quickSlots"in h))return;const{newValue:d}=h.quickSlots;ae(d)&&(u.current=d)},a=async(h,R)=>{if(!r.current)return;r.current=!1,l(!1);const{slots:d}=u.current,p=d[h];if(p.isEmpty){(R==="click"||R==="mouseLongPress")&&t({title:`${h}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),r.current=!0,l(!0);return}if(R==="keyLongPress"||R==="mouseLongPress"){n(p),l(!1);return}const f=await browser.runtime.sendMessage({command:w.GET_RANDOM_DEFENSE_RESULT,query:p.query,problemCount:1});if(!tt(f)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),r.current=!0,l(!0);return}if(!f.success){const{errorMessage:I,errorDescriptions:y}=f;t({title:I,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:y},8e3),r.current=!0,l(!0);return}const{problemInfos:v}=f,{problemId:T}=v[0];browser.runtime.sendMessage({command:w.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...v[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${T}`};return{isRandomDefenseAvailable:i,performRandomDefenseByClick:()=>{a(u.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{a(u.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{r.current=!0,l(!0),b()},disableRandomDefense:()=>{r.current=!1,l(!1)}}},bt=e=>{const{requiredLongPressTimeInMilliseconds:t,onClick:n,onLongPress:i}=e,[l,r]=s.useState(!1),u=s.useRef(!1),b=s.useRef(void 0),E=s.useRef(null),a=()=>{clearTimeout(b.current),b.current=setTimeout(()=>{i(),u.current=!1,r(!1)},t),r(!0),u.current=!0},m=()=>{u.current&&(n(),clearTimeout(b.current)),r(!1),u.current=!1},S=()=>{clearTimeout(b.current),r(!1),u.current=!1};return s.useEffect(()=>{const x=E.current;if(x)return x.addEventListener("mousedown",a),x.addEventListener("mouseup",m),x.addEventListener("mouseleave",S),()=>{clearTimeout(b.current)}},[E.current]),{isPressing:l,longPressRef:E}},Ce=/\d+(?=\.svg$)/,Tt=/\d+$/,Et=/^\d+/,xt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",St=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",Rt='.loginbar > li > a[href^="/user/"]',vt=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],yt=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",Lt=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",At=(e,t)=>{kt(e,t),t&&(wt(e),It(e),Dt(e))},kt=async(e,t)=>{const n=j(xt),i=j(Rt),l=j(St);if(!(n instanceof HTMLImageElement)||!i||!l)return;const r=l.innerText.match(Et),u=n.src.match(Ce);if(!r||!u)return;const b=i.innerText.trim(),E=Number(r),a=Number(u);if(!rt(a))return;const m=await browser.runtime.sendMessage({command:w.IS_USER_SOLVED_PROBLEM,handle:b,problemId:E});if(m==="unknown"){n.remove();return}if(m){n.style.content=`url(${JSON.stringify(st[a])}`;return}a>=e&&t&&n.classList.add("warn")},wt=e=>{[...vt.map(n=>te(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const l=n.src.match(Ce);l&&Number(l)>=e&&n.classList.add("warn")}})},It=e=>{const t=j(yt);if(!t)return;const n=t.classList[0];if(!n)return;const i=n.match(Tt);i&&Number(i)>=e&&t.classList.add("warn")},Dt=e=>{te(Lt).forEach(n=>{const i=n.getAttribute("data-tier");i&&Number(i)>=e&&n.classList.add("warn")})},_t=e=>{const{theme:t,onChangeTheme:n,onToast:i}=e,[l,r]=s.useState(!1),[u,b]=s.useState(!1),[E,a]=s.useState(void 0),[m,S]=s.useState(void 0),[x,A]=s.useState(!1),[h,R]=s.useState(!1),[d,p]=s.useState(null),[f,v]=s.useState(0),[T,I]=s.useState(!1),{hasUnknownAlgorithms:y,isSpoilerExist:g,isSpoilerOpened:_,toggleTimer:M}=gt({checkedAlgorithmIds:E,hiderOptions:m}),{activeModalName:P,openModal:k,closeModal:O}=nt(),{isRandomDefenseAvailable:H,performRandomDefenseByClick:W,performRandomDefenseByMouseLongPress:U,enableRandomDefense:Me}=ft({onToast:i,onGachaStart:C=>Ye(C)}),{isPressing:Pe,longPressRef:Oe}=bt({requiredLongPressTimeInMilliseconds:1e3,onClick:W,onLongPress:U}),Ne=!H,ne=!g||_||x,He=!g||_,We=g&&x;s.useEffect(()=>{(async()=>{const[$,z,se]=await Promise.all([browser.runtime.sendMessage({command:w.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:w.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:w.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!ze($)||!De(z)||!at(se))return;const{algorithmHiderUsage:Qe,shouldHideTier:Ve,shouldWarnHighTier:Xe,warnTier:Je}=z;Ve&&At(Je,Xe),Qe==="always"&&A(!0),a($),S(z),R(se),I(!0)})()},[]),s.useEffect(()=>{document.documentElement.setAttribute("totamjungTheme",t==="totamjung"?"totamjung":"none")},[t]);const Ue=()=>{l||(r(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},$e=()=>{r(!1)},Ge=C=>{C.preventDefault(),C.stopPropagation(),b($=>!$)},Ke=()=>{browser.runtime.sendMessage({command:w.OPEN_OPTIONS_PAGE})},Fe=()=>{T&&n(t==="totamjung"?"none":"totamjung")},qe=()=>{ne||(A(!0),i(y?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},Ye=C=>{k("gachaProblemCount"),p(C)};return{isExpanded:u,isScrollingToTop:l,hasUnknownAlgorithms:y,isRandomDefenseButtonDisabled:Ne,isRandomDefenseButtonPressing:Pe,gachaProblemCount:f,gachaSlot:d,isInspectButtonDisabled:ne,isLockButtonDisabled:He,shouldShowInspectIcon:We,shouldShowWelcomeMessage:h,activeModalName:P,isLoaded:T,scrollToTop:Ue,endScrollingAnimation:$e,toggleWidgetOpen:Ge,openOptionsPage:Ke,toggleTotamjungTheme:Fe,openGachaModalWithProblemCount:C=>{d&&(k("gacha"),v(C))},suspendGacha:()=>{O(),p(null),Me()},showInspectResultUsingPopup:qe,toggleTimer:M,closeWelcomeMessage:()=>{R(!1),browser.runtime.sendMessage({command:w.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},randomDefenseButtonRef:Oe}},J={none:c.color.BOJ_BLUE,totamjung:c.color.LIGHTEST_BROWN,solvedAcLight:c.solvedAcColor.LIME,solvedAcDark:c.solvedAcColor.LIME,solvedAcBlack:c.solvedAcColor.LIME,bojExtendedDark:c.bojExtendedColor.DARK_GRAY,bojExtendedRigel:c.bojExtendedColor.SKY_BLUE},Ct={none:c.color.PURE_WHITE,totamjung:c.color.BROWN,solvedAcLight:c.color.PURE_WHITE,solvedAcDark:c.color.PURE_WHITE,solvedAcBlack:c.color.PURE_WHITE,bojExtendedDark:c.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:c.color.WHITE},Be={none:c.filter.BOJ_BLUE_FILTER,totamjung:c.filter.LIGHTEST_BROWN_FILTER,solvedAcLight:c.solvedAcFilter.LIME,solvedAcDark:c.solvedAcFilter.LIME,solvedAcBlack:c.solvedAcFilter.LIME,bojExtendedDark:c.bojExtendedFilter.DARK_GRAY,bojExtendedRigel:c.bojExtendedFilter.SKY_BLUE},Bt={none:"transparent",totamjung:c.color.BLACK_TRANSPARENT,solvedAcLight:"transparent",solvedAcDark:c.color.BLACK_TRANSPARENT,solvedAcBlack:c.color.BLACK_TRANSPARENT,bojExtendedDark:c.color.BLACK_TRANSPARENT,bojExtendedRigel:c.color.BLACK_TRANSPARENT},jt={none:c.color.WHITE,totamjung:c.color.WHITE,solvedAcLight:c.color.BLACK,solvedAcDark:c.color.WHITE,solvedAcBlack:c.color.WHITE,bojExtendedDark:c.color.WHITE,bojExtendedRigel:c.color.WHITE},Mt=D.div`
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
`,Gt=e=>typeof e=="string"&&["solvedAcLight","solvedAcDark","solvedAcBlack"].includes(e),ee=e=>{const{theme:t,rootElement:n}=e,{isExpanded:i,isScrollingToTop:l,hasUnknownAlgorithms:r,isRandomDefenseButtonDisabled:u,isRandomDefenseButtonPressing:b,gachaProblemCount:E,gachaSlot:a,isInspectButtonDisabled:m,isLockButtonDisabled:S,shouldShowInspectIcon:x,shouldShowWelcomeMessage:A,activeModalName:h,isLoaded:R,scrollToTop:d,endScrollingAnimation:p,toggleWidgetOpen:f,openOptionsPage:v,toggleTotamjungTheme:T,openGachaModalWithProblemCount:I,suspendGacha:y,showInspectResultUsingPopup:g,toggleTimer:_,closeWelcomeMessage:M,randomDefenseButtonRef:P}=_t(e),k=j("#problem_title"),O=t!=="none"&&t!=="totamjung";return o.jsx(Mt,{children:R&&o.jsxs(o.Fragment,{children:[o.jsx(oe,{type:"button",className:l?"animate":"",$widgetTheme:t,onClick:d,onContextMenu:f,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:o.jsxs(Ot,{onAnimationEnd:p,children:[o.jsx(ce,{$direction:"left"}),o.jsx(ce,{$direction:"right"})]})}),o.jsxs(Nt,{$widgetTheme:t,$isExpanded:i,children:[o.jsx(N,{children:o.jsx(G,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:v,children:o.jsx(B,{src:browser.runtime.getURL("/settings.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",disabled:O,onClick:T,children:o.jsx(B,{src:browser.runtime.getURL("/palette.png")})})}),o.jsx(N,{children:o.jsx(Wt,{ref:P,type:"button",className:b?"pressing":"",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:u,children:o.jsx(B,{src:browser.runtime.getURL("/dice.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",disabled:m,onClick:g,$widgetTheme:t,children:o.jsx(B,{src:x?r?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",disabled:S,onClick:_,$widgetTheme:t,children:o.jsx(B,{src:browser.runtime.getURL("/lock.png")})})})]}),k&&x&&!Gt(t)&&mt.createPortal(o.jsx(it,{theme:t,icon:r?"question":"check"}),k),A&&o.jsx(Ut,{children:o.jsx(ct,{open:!0,maxWidth:"400px",content:o.jsxs($t,{$totamjungTheme:t,children:[o.jsx(Z,{children:"토탐정을 설치해 주셔서 감사합니다!"}),o.jsxs(Z,{children:[o.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),theme:t,direction:"left",hasCloseButton:!0,onClose:M})}),o.jsx(ut,{open:h==="gachaProblemCount",portalTarget:n,theme:t,shouldShowHotkeyMessage:!1,onClose:y,onSubmitProblemCount:I}),a&&o.jsx(ot,{open:h==="gacha",portalTarget:n,theme:t,slot:a,problemCount:E,onClose:y})]})})};try{ee.displayName="Widget",ee.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const _o={title:"components/Widget",component:ee,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},K={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:L(),onToast:L()}},F={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"totamjung",onChangeTheme:L(),onToast:L()}},q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedDark",onChangeTheme:L(),onToast:L()}},Y={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedRigel",onChangeTheme:L(),onToast:L()}},Q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcLight",onChangeTheme:L(),onToast:L()}},V={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcDark",onChangeTheme:L(),onToast:L()}},X={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcBlack",onChangeTheme:L(),onToast:L()}};var le,de,me;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
