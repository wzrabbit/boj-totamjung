import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index--qcDGAq6.js";import{C as D}from"./commands-BoKETmK5.js";import{i as ze}from"./checkedAlgorithmIdsValidator-D3rPSOXE.js";import{i as De}from"./hiderOptionsValidator-CGMdHXNl.js";import{A as Ze}from"./algorithmInfos-w49mooiO.js";import{a as et}from"./defaultValues-BGh_tAG0.js";import{b as se,c as ae}from"./quickSlotsValidator-CSlQ7P7m.js";import{i as tt,R as ot}from"./RandomDefenseGachaModal-DE_2wLoG.js";import{u as nt}from"./useModal-BJrESIr1.js";import{s as rt}from"./index-CElCL35T.js";import{c as st}from"./typeGuards-Bsa9ERJp.js";import{i as at}from"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import{I as it}from"./InspectResultIcon-C_gFo-aQ.js";import{S as ct}from"./SpeechBubble-ChjN1N6-.js";import{t as c}from"./theme-CqSsbPCW.js";import{d as _,m as _e,l as lt}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as dt}from"./getTransparentHexColor-DN69VCBw.js";import{r as ut}from"./index-B5qaPpLJ.js";import{G as mt}from"./GachaProblemCountInputModal-CtuwXBs4.js";import{f as w}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";import"./IconButton-CJ4kdUS9.js";import"./Modal-JaXjAa2V.js";import"./close-BziWfrbF.js";import"./copy-BcJBRJXh.js";import"./warning-BLusDAjJ.js";import"./check-BIa-lIjI.js";import"./loading-Ckb1CsUZ.js";import"./hidden-tier-badge-CukGKv-l.js";import"./CardBox-CM2WnTpQ.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-CfwfIOoR.js";import"./ProblemCard-0TlVoL6R.js";import"./gachaOptionsValidator-CX_fe7zV.js";import"./GachaModalNotification-DM5b6Hdn.js";import"./index-B6ujFmsw.js";import"./Input-Dv8CBI6y.js";import"./toPx-DeOSKary.js";import"./Text-D2wNJgtT.js";import"./check-circle-B-abXz3w.js";import"./randomDefense-BrQ0TErT.js";const j=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},te=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),i=[];return n.forEach(l=>{l instanceof HTMLElement&&i.push(l)}),i},pt=()=>{const[e,t]=r.useState(!1),[n,i]=r.useState(0),[l,s]=r.useState("보기");return r.useEffect(()=>{if(!e){s("보기");return}const a=()=>{const S=n-Date.now();if(S<=0){s("보기"),t(!1);return}const E=Math.floor(S/36e5),k=String(Math.floor(S%36e5/6e4)).padStart(2,"0"),g=String(Math.floor(S%6e4/1e3)).padStart(2,"0");s(`잠김 (🔒︎${E}:${k}:${g} 후 보기 가능)`)},d=setInterval(()=>{a()},100);return()=>{clearInterval(d)}},[e,n]),{isTimerRunning:e,timerDisplayText:l,setTimerByDuration:a=>{const d=Date.now()+a;i(d),t(!0)},setTimerByEndTime:a=>{i(a),t(!0)},clearTimer:()=>{t(!1)}}},gt=e=>{const{checkedAlgorithmIds:t,hiderOptions:n}=e,{isTimerRunning:i,timerDisplayText:l,setTimerByDuration:s,setTimerByEndTime:m,clearTimer:f}=pt(),[x,a]=r.useState(!1),[d,S]=r.useState(!1),[E,k]=r.useState(!1),[g,b]=r.useState(!1),p=r.useRef(null),R=r.useRef(null);return r.useEffect(()=>{(async()=>{const v=await browser.runtime.sendMessage({command:D.GET_REMAINING_LOCK_TIME});typeof v!="number"||v===0||s(v)})()},[]),r.useEffect(()=>{var L;if(!t||!n)return;const u=()=>{const h=j(".show-spoiler");if(!h)return;h.getAttribute("disabled")&&k(!0);const A=h.cloneNode(!0);A instanceof HTMLElement&&(p.current=A,h.after(A),h.remove(),R.current=j(".spoiler"),S(!0))},v=()=>{const h=te(".spoiler-link"),A=h.map(I=>I.innerText.replace(/\u2013/g,"-").toLowerCase());let M=!1;const O=[];A.forEach((I,P)=>{var W;const H=(W=Ze.find(U=>U.name.toLowerCase()===I||U.englishName.toLowerCase()===I))==null?void 0:W.id;(H===void 0||!t.includes(H))&&(M=!0,O.push(P))}),O.forEach(I=>{h[I].innerText+=" 📌",h[I].style.fontWeight="800"}),a(M),b(!0)},y=h=>{h.preventDefault(),!i&&(!p.current||!R.current||(p.current.style.display="none",R.current.style.display="block",k(!0)))};if(u(),g||v(),(L=p.current)==null||L.addEventListener("click",y),p.current){if(i){p.current.style.cursor="not-allowed",p.current.style.textDecorationColor="transparent";return}p.current.style.cursor="pointer",p.current.style.textDecorationColor="inherit"}return()=>{var h;(h=p.current)==null||h.removeEventListener("click",y)}},[t,n,i,g]),r.useEffect(()=>{p.current&&(p.current.innerText=l)},[l]),{hasUnknownAlgorithms:x,isSpoilerExist:d,isSpoilerOpened:E,setTimerByDuration:s,setTimerByEndTime:m,toggleTimer:async()=>{if(i){f(),browser.runtime.sendMessage({command:D.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:D.ADD_SINGLE_TIMER});const u=await browser.runtime.sendMessage({command:D.FETCH_HIDER_OPTIONS});if(!De(u))return;const{hours:v,minutes:y}=u.problemTagLockDuration,L=v*36e5+y*6e4;s(L)}}},ie=(e,t,n)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||n||!isNaN(Number(e))||t.startsWith("Digit"),ht=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:n,onPress:i,onLongPress:l}=e,[s,m]=r.useState(n),[f,x]=r.useState(!1),a=r.useRef(null),d=r.useRef(null),S=r.useRef(!1),E=r.useRef(void 0),k=R=>{const{key:T,code:u,altKey:v}=R;if(!(S.current||f||!ie(T,u,v))&&(a.current===null&&s==="Alt"&&(T==="Alt"||u==="AltLeft"||u==="AltRight"||v)&&(a.current=u==="AltRight"?"AltRight":"AltLeft"),a.current===null&&s==="F2"&&(T==="F2"||u==="F2")&&(a.current="F2"),d.current===null&&a.current!==null)){isNaN(Number(T))||(d.current=Number(T)),u.startsWith("Digit")&&(d.current=Number(u.at(-1)));const y=d.current;typeof y=="number"&&se(y)&&(S.current=!0,E.current=setTimeout(()=>{x(!0),l(y)},t))}},g=R=>{const{key:T,code:u,altKey:v}=R;if(f||!ie(T,u,v))return;const y=s==="Alt"&&u===a.current||a.current==="AltLeft"&&(T==="Alt"||T==="AltLeft"),L=s==="F2"&&(T==="F2"||u===a.current),h=d.current===Number(T)||d.current===Number(u.at(-1));if(y||L||h){const A=d.current;a.current=null,d.current=null,clearTimeout(E.current),S.current=!1,typeof A=="number"&&se(A)&&!f&&(i(A),x(!0))}},b=()=>{a.current=null,d.current=null,S.current=!1,clearTimeout(E.current)},p=()=>{x(!1),a.current=null,d.current=null,S.current=!1};return r.useEffect(()=>{m(n)},[n]),r.useEffect(()=>(document.addEventListener("keydown",k),document.addEventListener("keyup",g),document.addEventListener("visibilitychange",b),window.addEventListener("blur",b),()=>{document.removeEventListener("keydown",k),document.removeEventListener("keyup",g),document.removeEventListener("visibilitychange",b),window.removeEventListener("blur",b),clearTimeout(E.current)}),[s,f]),{unlockHotkey:p}},ft=e=>{const{onToast:t,onGachaStart:n}=e,[i,l]=r.useState(!1),s=r.useRef(i),m=r.useRef(et),{unlockHotkey:f}=ht({baseKey:m.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:g=>a(g,"press"),onLongPress:g=>a(g,"keyLongPress")});r.useEffect(()=>((async()=>{const b=await browser.runtime.sendMessage({command:D.FETCH_QUICK_SLOTS});ae(b)&&(m.current=b,s.current=!0,l(!0))})(),browser.storage.onChanged.addListener(x),()=>{browser.storage.onChanged.removeListener(x)}),[]);const x=(g,b)=>{if(b!=="local"||!("quickSlots"in g))return;const{newValue:p}=g.quickSlots;ae(p)&&(m.current=p)},a=async(g,b)=>{if(!s.current)return;s.current=!1,l(!1);const{slots:p}=m.current,R=p[g];if(R.isEmpty){(b==="click"||b==="mouseLongPress")&&t({title:`${g}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),s.current=!0,l(!0);return}if(b==="keyLongPress"||b==="mouseLongPress"){n(R),l(!1);return}const T=await browser.runtime.sendMessage({command:D.GET_RANDOM_DEFENSE_RESULT,query:R.query,problemCount:1});if(!tt(T)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),s.current=!0,l(!0);return}if(!T.success){const{errorMessage:y,errorDescriptions:L}=T;t({title:y,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:L},8e3),s.current=!0,l(!0);return}const{problemInfos:u}=T,{problemId:v}=u[0];browser.runtime.sendMessage({command:D.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...u[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${v}`};return{isRandomDefenseAvailable:i,performRandomDefenseByClick:()=>{a(m.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{a(m.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{s.current=!0,l(!0),f()},disableRandomDefense:()=>{s.current=!1,l(!1)}}},bt=e=>{const{requiredLongPressTimeInMilliseconds:t,onClick:n,onLongPress:i}=e,[l,s]=r.useState(!1),m=r.useRef(!1),f=r.useRef(void 0),x=r.useRef(null),a=()=>{clearTimeout(f.current),f.current=setTimeout(()=>{i(),m.current=!1,s(!1)},t),s(!0),m.current=!0},d=()=>{m.current&&(n(),clearTimeout(f.current)),s(!1),m.current=!1},S=()=>{clearTimeout(f.current),s(!1),m.current=!1};return r.useEffect(()=>{const E=x.current;if(E)return E.addEventListener("mousedown",a),E.addEventListener("mouseup",d),E.addEventListener("mouseleave",S),()=>{clearTimeout(f.current)}},[x.current]),{isPressing:l,longPressRef:x}},Ce=/\d+(?=\.svg$)/,Tt=/\d+$/,Et=/^\d+/,xt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",St=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",vt='.loginbar > li > a[href^="/user/"]',Rt=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],yt=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",Lt=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",At=(e,t)=>{wt(e,t),t&&(kt(e),It(e),Dt(e))},wt=async(e,t)=>{const n=j(xt),i=j(vt),l=j(St);if(!(n instanceof HTMLImageElement)||!i||!l)return;const s=l.innerText.match(Et),m=n.src.match(Ce);if(!s||!m)return;const f=i.innerText.trim(),x=Number(s),a=Number(m);if(!st(a))return;const d=await browser.runtime.sendMessage({command:D.IS_USER_SOLVED_PROBLEM,handle:f,problemId:x});if(d==="unknown"){n.remove();return}if(d){n.style.content=`url(${JSON.stringify(rt[a])}`;return}a>=e&&t&&n.classList.add("warn")},kt=e=>{[...Rt.map(n=>te(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const l=n.src.match(Ce);l&&Number(l)>=e&&n.classList.add("warn")}})},It=e=>{const t=j(yt);if(!t)return;const n=t.classList[0];if(!n)return;const i=n.match(Tt);i&&Number(i)>=e&&t.classList.add("warn")},Dt=e=>{te(Lt).forEach(n=>{const i=n.getAttribute("data-tier");i&&Number(i)>=e&&n.classList.add("warn")})},_t=e=>{const{theme:t,onChangeTheme:n,onToast:i}=e,[l,s]=r.useState(!1),[m,f]=r.useState(!1),[x,a]=r.useState(void 0),[d,S]=r.useState(void 0),[E,k]=r.useState(!1),[g,b]=r.useState(!1),[p,R]=r.useState(null),[T,u]=r.useState(0),[v,y]=r.useState(!1),{hasUnknownAlgorithms:L,isSpoilerExist:h,isSpoilerOpened:A,toggleTimer:M}=gt({checkedAlgorithmIds:x,hiderOptions:d}),{activeModalName:O,openModal:I,closeModal:P}=nt(),{isRandomDefenseAvailable:H,performRandomDefenseByClick:W,performRandomDefenseByMouseLongPress:U,enableRandomDefense:Me}=ft({onToast:i,onGachaStart:C=>Ye(C)}),{isPressing:Oe,longPressRef:Pe}=bt({requiredLongPressTimeInMilliseconds:1e3,onClick:W,onLongPress:U}),Ne=!H,ne=!h||A||E,He=!h||A,We=h&&E;r.useEffect(()=>{(async()=>{const[$,z,re]=await Promise.all([browser.runtime.sendMessage({command:D.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:D.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:D.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!ze($)||!De(z)||!at(re))return;const{algorithmHiderUsage:Qe,shouldHideTier:Ve,shouldWarnHighTier:Xe,warnTier:Je}=z;Ve&&At(Je,Xe),Qe==="always"&&k(!0),a($),S(z),b(re),y(!0)})()},[]),r.useEffect(()=>{document.documentElement.setAttribute("totamjungTheme",t==="totamjung"?"totamjung":"none")},[t]);const Ue=()=>{l||(s(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},$e=()=>{s(!1)},Ge=C=>{C.preventDefault(),C.stopPropagation(),f($=>!$)},Ke=()=>{browser.runtime.sendMessage({command:D.OPEN_OPTIONS_PAGE})},Fe=()=>{v&&n(t==="totamjung"?"none":"totamjung")},qe=()=>{ne||(k(!0),i(L?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},Ye=C=>{I("gachaProblemCount"),R(C)};return{isExpanded:m,isScrollingToTop:l,hasUnknownAlgorithms:L,isRandomDefenseButtonDisabled:Ne,isRandomDefenseButtonPressing:Oe,gachaProblemCount:T,gachaSlot:p,isInspectButtonDisabled:ne,isLockButtonDisabled:He,shouldShowInspectIcon:We,shouldShowWelcomeMessage:g,activeModalName:O,isLoaded:v,scrollToTop:Ue,endScrollingAnimation:$e,toggleWidgetOpen:Ge,openOptionsPage:Ke,toggleTotamjungTheme:Fe,openGachaModalWithProblemCount:C=>{p&&(I("gacha"),u(C))},suspendGacha:()=>{P(),R(null),Me()},showInspectResultUsingPopup:qe,toggleTimer:M,closeWelcomeMessage:()=>{b(!1),browser.runtime.sendMessage({command:D.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},randomDefenseButtonRef:Pe}},J={none:c.color.BOJ_BLUE,totamjung:c.color.LIGHTEST_BROWN,solvedAcLight:c.solvedAcColor.LIME,solvedAcDark:c.solvedAcColor.LIME,solvedAcBlack:c.solvedAcColor.LIME,bojExtendedDark:c.bojExtendedColor.DARK_GRAY,bojExtendedRigel:c.bojExtendedColor.SKY_BLUE},Ct={none:c.color.PURE_WHITE,totamjung:c.color.BROWN,solvedAcLight:c.color.PURE_WHITE,solvedAcDark:c.color.PURE_WHITE,solvedAcBlack:c.color.PURE_WHITE,bojExtendedDark:c.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:c.color.WHITE},Be={none:c.filter.BOJ_BLUE_FILTER,totamjung:c.filter.LIGHTEST_BROWN_FILTER,solvedAcLight:c.solvedAcFilter.LIME,solvedAcDark:c.solvedAcFilter.LIME,solvedAcBlack:c.solvedAcFilter.LIME,bojExtendedDark:c.bojExtendedFilter.DARK_GRAY,bojExtendedRigel:c.bojExtendedFilter.SKY_BLUE},Bt={none:"transparent",totamjung:c.color.BLACK_TRANSPARENT,solvedAcLight:"transparent",solvedAcDark:c.color.BLACK_TRANSPARENT,solvedAcBlack:c.color.BLACK_TRANSPARENT,bojExtendedDark:c.color.BLACK_TRANSPARENT,bojExtendedRigel:c.color.BLACK_TRANSPARENT},jt={none:c.color.WHITE,totamjung:c.color.WHITE,solvedAcLight:c.color.BLACK,solvedAcDark:c.color.WHITE,solvedAcBlack:c.color.WHITE,bojExtendedDark:c.color.WHITE,bojExtendedRigel:c.color.WHITE},Mt=_.div`
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
`,Ot=_e`
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
`,oe=_.button`
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
`,Pt=_.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${oe}.animate > & {
    animation: ${Ot} 1s forwards;
  }
`,ce=_.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,Nt=_.ul`
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
`,N=_.li`
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
`,B=_.img.attrs({draggable:!1})`
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
`,G=_.button`
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
`,Wt=_.button`
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
`,Ut=_.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,Z=_.span`
  font-size: 14px;
  line-height: 14px;
  font-family: Pretendard;
`,$t=_.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  & > ${Z} {
    color: ${({$totamjungTheme:e})=>jt[e]};
  }
`,Gt=e=>typeof e=="string"&&["solvedAcLight","solvedAcDark","solvedAcBlack"].includes(e),ee=e=>{const{theme:t,rootElement:n}=e,{isExpanded:i,isScrollingToTop:l,hasUnknownAlgorithms:s,isRandomDefenseButtonDisabled:m,isRandomDefenseButtonPressing:f,gachaProblemCount:x,gachaSlot:a,isInspectButtonDisabled:d,isLockButtonDisabled:S,shouldShowInspectIcon:E,shouldShowWelcomeMessage:k,activeModalName:g,isLoaded:b,scrollToTop:p,endScrollingAnimation:R,toggleWidgetOpen:T,openOptionsPage:u,toggleTotamjungTheme:v,openGachaModalWithProblemCount:y,suspendGacha:L,showInspectResultUsingPopup:h,toggleTimer:A,closeWelcomeMessage:M,randomDefenseButtonRef:O}=_t(e),I=j("#problem_title"),P=t!=="none"&&t!=="totamjung";return o.jsx(Mt,{children:b&&o.jsxs(o.Fragment,{children:[o.jsx(oe,{type:"button",className:l?"animate":"",$widgetTheme:t,onClick:p,onContextMenu:T,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:o.jsxs(Pt,{onAnimationEnd:R,children:[o.jsx(ce,{$direction:"left"}),o.jsx(ce,{$direction:"right"})]})}),o.jsxs(Nt,{$widgetTheme:t,$isExpanded:i,children:[o.jsx(N,{children:o.jsx(G,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:u,children:o.jsx(B,{src:browser.runtime.getURL("/settings.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",disabled:P,onClick:v,children:o.jsx(B,{src:browser.runtime.getURL("/palette.png")})})}),o.jsx(N,{children:o.jsx(Wt,{ref:O,type:"button",className:f?"pressing":"",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:m,children:o.jsx(B,{src:browser.runtime.getURL("/dice.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",disabled:d,onClick:h,$widgetTheme:t,children:o.jsx(B,{src:E?s?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),o.jsx(N,{children:o.jsx(G,{type:"button",disabled:S,onClick:A,$widgetTheme:t,children:o.jsx(B,{src:browser.runtime.getURL("/lock.png")})})})]}),I&&E&&!Gt(t)&&ut.createPortal(o.jsx(it,{theme:t,icon:s?"question":"check"}),I),k&&o.jsx(Ut,{children:o.jsx(ct,{open:!0,maxWidth:"400px",content:o.jsxs($t,{$totamjungTheme:t,children:[o.jsx(Z,{children:"토탐정을 설치해 주셔서 감사합니다!"}),o.jsxs(Z,{children:[o.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),theme:t,direction:"left",hasCloseButton:!0,onClose:M})}),o.jsx(mt,{open:g==="gachaProblemCount",portalTarget:n,theme:t,shouldShowHotkeyMessage:!1,onClose:L,onSubmitProblemCount:y}),a&&o.jsx(ot,{open:g==="gacha",portalTarget:n,theme:t,slot:a,problemCount:x,onClose:L})]})})};try{ee.displayName="Widget",ee.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const Oo={title:"components/Widget",component:ee,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},K={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:w(),onToast:w()}},F={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"totamjung",onChangeTheme:w(),onToast:w()}},q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedDark",onChangeTheme:w(),onToast:w()}},Y={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedRigel",onChangeTheme:w(),onToast:w()}},Q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcLight",onChangeTheme:w(),onToast:w()}},V={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcDark",onChangeTheme:w(),onToast:w()}},X={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcBlack",onChangeTheme:w(),onToast:w()}};var le,de,ue;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=K.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source}}};var Se,ve,Re;Q.parameters={...Q.parameters,docs:{...(Se=Q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(ve=Q.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var ye,Le,Ae;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ae=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var we,ke,Ie;X.parameters={...X.parameters,docs:{...(we=X.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ie=(ke=X.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};const Po=["Default","Totamjung","BojExtendedDark","BojExtendedRigel","SolvedAcLight","SolvedAcDark","SolvedAcBlack"];export{q as BojExtendedDark,Y as BojExtendedRigel,K as Default,X as SolvedAcBlack,V as SolvedAcDark,Q as SolvedAcLight,F as Totamjung,Po as __namedExportsOrder,Oo as default};
