import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{C as R}from"./commands-BRsa08kP.js";import{a as le}from"./checkedAlgorithmIdsValidator-_GhylmXA.js";import{i as te}from"./hiderOptionsValidator-C03oWmMh.js";import{A as de}from"./algorithmInfos-BNLNF_TH.js";import{D as me}from"./defaultValues-B69Rceu1.js";import{c as Q,b as ue}from"./quickSlotsValidator-BStRloGQ.js";import{i as pe}from"./RandomDefenseResultResponseValidator-Da7TDSo9.js";import{s as ge,a as ne}from"./index-CElCL35T.js";import{e as he}from"./typeGuards-BB3TV_oj.js";import{I as fe}from"./InspectResultIcon-B43PU-KX.js";import{S as Te}from"./SpeechBubble-DOhaDY9T.js";import{T as X}from"./Text-Ccd6d79x.js";import{d as _,m as be}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as Ee}from"./index-DAfSkmQi.js";import{f as V}from"./index-C_FWhylE.js";import"./theme-CEW-JCn2.js";import"./close-R_Y1ANk3.js";const k=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},F=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),s=[];return n.forEach(a=>{a instanceof HTMLElement&&s.push(a)}),s},Se=()=>{const[e,t]=i.useState(!1),[n,s]=i.useState(0),[a,d]=i.useState("보기");return i.useEffect(()=>{if(!e){d("보기");return}const m=()=>{const b=n-Date.now();if(b<=0){d("보기"),t(!1);return}const w=Math.floor(b/36e5),r=String(Math.floor(b%36e5/6e4)).padStart(2,"0"),c=String(Math.floor(b%6e4/1e3)).padStart(2,"0");d(`잠김 (🔒︎${w}:${r}:${c} 후 보기 가능)`)},h=setInterval(()=>{m()},100);return()=>{clearInterval(h)}},[e,n]),{isTimerRunning:e,timerDisplayText:a,setTimerByDuration:m=>{const h=Date.now()+m;s(h),t(!0)},setTimerByEndTime:m=>{s(m),t(!0)},clearTimer:()=>{t(!1)}}},Re=e=>{const{checkedIds:t,hiderOptions:n}=e,{isTimerRunning:s,timerDisplayText:a,setTimerByDuration:d,setTimerByEndTime:S,clearTimer:T}=Se(),[x,m]=i.useState(!1),[h,b]=i.useState(!1),[w,r]=i.useState(!1),[c,f]=i.useState(!1),u=i.useRef(null),E=i.useRef(null);return i.useEffect(()=>{(async()=>{const l=await browser.runtime.sendMessage({command:R.GET_REMAINING_LOCK_TIME});typeof l!="number"||l===0||d(l)})()},[]),i.useEffect(()=>{var v;if(!t||!n)return;const p=()=>{const g=k(".show-spoiler");if(!g)return;g.getAttribute("disabled")&&r(!0);const L=g.cloneNode(!0);L instanceof HTMLElement&&(u.current=L,g.after(L),g.remove(),E.current=k(".spoiler"),b(!0))},l=()=>{const g=F(".spoiler-link"),L=g.map(y=>y.innerText.replace(/\u2013/g,"-"));let D=!1;const A=[];L.forEach((y,K)=>{var U;const P=(U=de.find(H=>H.name===y||H.englishName===y))==null?void 0:U.id;(P===void 0||!t.includes(P))&&(D=!0,A.push(K))}),A.forEach(y=>{g[y].innerText+=" 📌",g[y].style.fontWeight="800"}),m(D),f(!0)},O=g=>{g.preventDefault(),!s&&(!u.current||!E.current||(u.current.style.display="none",E.current.style.display="block",r(!0)))};return p(),c||l(),(v=u.current)==null||v.addEventListener("click",O),()=>{var g;(g=u.current)==null||g.removeEventListener("click",O)}},[t,n,s,c]),i.useEffect(()=>{u.current&&(u.current.innerText=a)},[a]),{hasUnknownAlgorithms:x,isSpoilerExist:h,isSpoilerOpened:w,setTimerByDuration:d,setTimerByEndTime:S,toggleTimer:async()=>{if(s){T(),browser.runtime.sendMessage({command:R.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:R.ADD_SINGLE_TIMER});const p=await browser.runtime.sendMessage({command:R.FETCH_HIDER_OPTIONS});if(!te(p))return;const{hours:l,minutes:O}=p.problemTagLockDuration,v=l*36e5+O*6e4;d(v)}}},xe=e=>{const{onToast:t}=e,[n,s]=i.useState(!1),a=i.useRef(n),d=i.useRef(new Set),S=i.useRef(new Set),T=i.useRef(me);i.useEffect(()=>((async()=>{const c=await browser.runtime.sendMessage({command:R.FETCH_QUICK_SLOTS});Q(c)&&(T.current=c,a.current=!0,s(!0))})(),document.addEventListener("keydown",m),document.addEventListener("keyup",h),browser.storage.onChanged.addListener(x),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",h),browser.storage.onChanged.removeListener(x)}),[]);const x=(r,c)=>{if(c!=="local"||!("quickSlots"in r))return;const{newValue:f}=r.quickSlots;Q(f)&&(T.current=f)},m=r=>{const c=r.key,f=r.code;d.current.add(c),S.current.add(f);const u=r.altKey,E=S.current.has("F2");if(!(!isNaN(Number(r.key))||r.code.startsWith("Digit")))return;const{hotkey:p}=T.current,l=isNaN(Number(r.key))?Number(r.code.at(-1)):Number(r.key);if(ue(l)){if(p==="Alt"&&u){b(l,"keydown");return}p==="F2"&&E&&b(l,"keydown")}},h=r=>{const c=r.key,f=r.code;d.current.delete(c),S.current.delete(f)},b=async(r,c)=>{if(!a.current)return;a.current=!1,s(!1);const{slots:f}=T.current,u=f[r];if(u.isEmpty){c==="click"&&t({title:`${r}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),a.current=!0,s(!0);return}const E=await browser.runtime.sendMessage({command:R.GET_RANDOM_DEFENSE_RESULT,query:u.query,problemCount:1});if(!pe(E)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),a.current=!0,s(!0);return}if(!E.success){const{errorMessage:l,errorDescriptions:O}=E;t({title:l,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:O},8e3),a.current=!0,s(!0);return}const{problemInfos:I}=E,{problemId:p}=I[0];browser.runtime.sendMessage({command:R.APPEND_RANDOM_DEFENSE_HISTORY_INFO,randomDefenseHistoryInfo:{...I[0],createdAt:new Date().toISOString()}}),location.href=`https://acmicpc.net/problem/${p}`};return{isRandomDefenseAvailable:n,performRandomDefenseByClick:()=>{b(T.current.selectedSlotNo,"click")}}},oe=/\d+(?=\.svg$)/,_e=/\d+$/,we=/^\d+/,Ie=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",ye=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",Oe='.loginbar > li > a[href^="/user/"]',Le=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],ke=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",ve=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",De=(e,t)=>{Be(e,t),t&&(Ne(e),Ce(e),Ae(e))},Be=async(e,t)=>{const n=k(Ie),s=k(Oe),a=k(ye);if(!(n instanceof HTMLImageElement)||!s||!a)return;const d=a.innerText.match(we),S=n.src.match(oe);if(!d||!S)return;const T=s.innerText.trim(),x=Number(d),m=Number(S);if(!he(m))return;const h=await browser.runtime.sendMessage({command:R.IS_USER_SOLVED_PROBLEM,handle:T,problemId:x});if(h==="unknown"){n.remove();return}if(h){n.style.content=`url(${JSON.stringify(ge[m])}`;return}m>=e&&t&&(n.style.content=`url(${JSON.stringify(ne.warn)}`)},Ne=e=>{[...Le.map(n=>F(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const a=n.src.match(oe);a&&Number(a)>=e&&(n.style.content=`url(${JSON.stringify(ne.warn)})`)}})},Ce=e=>{const t=k(ke);if(!t)return;const n=t.classList[0];if(!n)return;const s=n.match(_e);s&&Number(s)>=e&&t.classList.add("warn")},Ae=e=>{F(ve).forEach(n=>{const s=n.getAttribute("data-tier");s&&Number(s)>=e&&n.classList.add("warn")})},Me=e=>typeof e=="boolean",je=e=>{const{theme:t,onChangeTheme:n,onToast:s}=e,[a,d]=i.useState(!1),[S,T]=i.useState(!1),[x,m]=i.useState(void 0),[h,b]=i.useState(void 0),[w,r]=i.useState(!1),[c,f]=i.useState(!1),[u,E]=i.useState(!1),{hasUnknownAlgorithms:I,isSpoilerExist:p,isSpoilerOpened:l,toggleTimer:O}=Re({checkedIds:x,hiderOptions:h}),{isRandomDefenseAvailable:v,performRandomDefenseByClick:g}=xe({onToast:s}),L=!v,D=!p||l||w,A=!p||l,y=p&&w;return i.useEffect(()=>{(async()=>{const[M,$,J]=await Promise.all([browser.runtime.sendMessage({command:R.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:R.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:R.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!le(M)||!te($)||!Me(J))return;const{checkedIds:se}=M,{algorithmHiderUsage:re,shouldHideTier:ie,shouldWarnHighTier:ae,warnTier:ce}=$;ie&&De(ce,ae),re==="always"&&r(!0),m(se),b($),f(J),E(!0)})()},[]),{isExpanded:S,isScrollingToTop:a,hasUnknownAlgorithms:I,isRandomDefenseButtonDisabled:L,isInspectButtonDisabled:D,isLockButtonDisabled:A,shouldShowInspectIcon:y,shouldShowWelcomeMessage:c,isLoaded:u,scrollToTop:()=>{a||(d(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},endScrollingAnimation:()=>{d(!1)},toggleWidgetOpen:W=>{W.preventDefault(),W.stopPropagation(),T(M=>!M)},openOptionsPage:()=>{browser.runtime.sendMessage({command:R.OPEN_OPTIONS_PAGE})},toggleTotamjungTheme:()=>{u&&n(t==="totamjung"?"none":"totamjung")},performRandomDefenseByClick:g,showInspectResultUsingPopup:()=>{D||(r(!0),s(I?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},toggleTimer:O,closeWelcomeMessage:()=>{f(!1),browser.runtime.sendMessage({command:R.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})}}},Pe=_.div`
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
`,Ue=be`
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
`,q=_.button`
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
`,He=_.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${q}.animate > & {
    animation: ${Ue} 1s forwards;
  }
`,Y=_.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,We=_.ul`
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
`,B=_.li`
  width: 36px;
  height: 32px;
`,N=_.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;

  & > img {
    filter: ${({theme:e,$widgetTheme:t})=>t==="none"?e.filter.BOJ_BLUE_FILTER:e.filter.LIGHT_BROWN_FILTER};
  }
`,C=_.img`
  width: auto;
  height: 26px;

  transition: transform 0.1s;

  button:disabled > & {
    opacity: 0.6;
  }

  button:not(:disabled) > &:hover {
    transform: scale(1.1);
  }

  button:not(:disabled) > &:active {
    transform: scale(1);
  }
`,$e=_.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,Ge=_.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,G=e=>{const{theme:t}=e,{isExpanded:n,isScrollingToTop:s,hasUnknownAlgorithms:a,isRandomDefenseButtonDisabled:d,isInspectButtonDisabled:S,isLockButtonDisabled:T,shouldShowInspectIcon:x,shouldShowWelcomeMessage:m,isLoaded:h,scrollToTop:b,endScrollingAnimation:w,toggleWidgetOpen:r,openOptionsPage:c,toggleTotamjungTheme:f,performRandomDefenseByClick:u,showInspectResultUsingPopup:E,toggleTimer:I,closeWelcomeMessage:p}=je(e),l=k("#problem_title");return o.jsx(Pe,{children:h&&o.jsxs(o.Fragment,{children:[o.jsx(q,{type:"button",className:s?"animate":"",$widgetTheme:t,onClick:b,onContextMenu:r,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:o.jsxs(He,{onAnimationEnd:w,children:[o.jsx(Y,{$direction:"left"}),o.jsx(Y,{$direction:"right"})]})}),o.jsxs(We,{$widgetTheme:t,$isExpanded:n,children:[o.jsx(B,{children:o.jsx(N,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:c,children:o.jsx(C,{src:browser.runtime.getURL("/settings.png")})})}),o.jsx(B,{children:o.jsx(N,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",onClick:f,children:o.jsx(C,{src:browser.runtime.getURL("/palette.png")})})}),o.jsx(B,{children:o.jsx(N,{type:"button",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:d,onClick:u,children:o.jsx(C,{src:browser.runtime.getURL("/dice.png")})})}),o.jsx(B,{children:o.jsx(N,{type:"button",disabled:S,onClick:E,$widgetTheme:t,children:o.jsx(C,{src:x?a?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),o.jsx(B,{children:o.jsx(N,{type:"button",disabled:T,onClick:I,$widgetTheme:t,children:o.jsx(C,{src:browser.runtime.getURL("/lock.png")})})})]}),l&&x&&Ee.createPortal(o.jsx(fe,{theme:t,icon:a?"question":"check"}),l),m&&o.jsx($e,{children:o.jsx(Te,{open:!0,maxWidth:"400px",content:o.jsxs(Ge,{children:[o.jsx(X,{type:"normal",fontSize:"14px",children:"토탐정을 설치해 주셔서 감사합니다!"}),o.jsxs(X,{type:"normal",fontSize:"14px",children:[o.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),totamjungTheme:t,direction:"left",hasCloseButton:!0,onClose:p})})]})})};try{G.displayName="Widget",G.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const ut={title:"components/Widget",component:G,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},j={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{theme:"none",onChangeTheme:V(),onToast:V()}};var z,Z,ee;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '240px'
  }}>
        <Story />
      </div>],
  args: {
    theme: 'none',
    onChangeTheme: fn(),
    onToast: fn()
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pt=["Default"];export{j as Default,pt as __namedExportsOrder,ut as default};
