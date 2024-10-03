import{j as i}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{C as I}from"./commands-CQbqRvUh.js";import{a as le}from"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import{i as Z}from"./hiderOptionsValidator-OSwkoshH.js";import{A as de}from"./algorithmInfos-BizjuJN7.js";import{D as me}from"./defaultValues-CC9x-Vyr.js";import{c as J,b as ue}from"./quickSlotsValidator-DFvl-FmR.js";import{i as ee,d as te}from"./typeGuards-DuDHAUw0.js";import{s as pe,a as ne}from"./index-CElCL35T.js";import{I as fe}from"./InspectResultIcon-SFEdMvVJ.js";import{d as k,m as ge}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as he}from"./index-DAfSkmQi.js";import{f as Q}from"./index-C_FWhylE.js";import"./theme-C4yZJZ7X.js";const L=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},q=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),o=[];return n.forEach(r=>{r instanceof HTMLElement&&o.push(r)}),o},Te=()=>{const[e,t]=c.useState(!1),[n,o]=c.useState(0),[r,d]=c.useState("보기");return c.useEffect(()=>{if(!e){d("보기");return}const m=()=>{const T=n-Date.now();if(T<=0){d("보기"),t(!1);return}const _=Math.floor(T/36e5),s=String(Math.floor(T%36e5/6e4)).padStart(2,"0"),a=String(Math.floor(T%6e4/1e3)).padStart(2,"0");d(`잠김 (🔒︎${_}:${s}:${a} 후 보기 가능)`)},f=setInterval(()=>{m()},100);return()=>{clearInterval(f)}},[e,n]),{isTimerRunning:e,timerDisplayText:r,setTimerByDuration:m=>{const f=Date.now()+m;o(f),t(!0)},setTimerByEndTime:m=>{o(m),t(!0)},clearTimer:()=>{t(!1)}}},be=e=>{const{checkedIds:t,hiderOptions:n}=e,{isTimerRunning:o,timerDisplayText:r,setTimerByDuration:d,setTimerByEndTime:E,clearTimer:h}=Te(),[S,m]=c.useState(!1),[f,T]=c.useState(!1),[_,s]=c.useState(!1),[a,b]=c.useState(!1),u=c.useRef(null),p=c.useRef(null);return c.useEffect(()=>{(async()=>{const g=await browser.runtime.sendMessage({command:I.GET_REMAINING_LOCK_TIME});typeof g!="number"||g===0||d(g)})()},[]),c.useEffect(()=>{var w;if(!t||!n)return;const R=()=>{const l=L(".show-spoiler");if(!l)return;l.getAttribute("disabled")&&s(!0);const v=l.cloneNode(!0);v instanceof HTMLElement&&(u.current=v,l.after(v),l.remove(),p.current=L(".spoiler"),T(!0))},g=()=>{const l=q(".spoiler-link"),v=l.map(O=>O.innerText.replace(/\u2013/g,"-"));let A=!1;const j=[];v.forEach((O,G)=>{var U;const P=(U=de.find($=>$.name===O||$.englishName===O))==null?void 0:U.id;(P===void 0||!t.includes(P))&&(A=!0,j.push(G))}),j.forEach(O=>{l[O].innerText+=" 📌",l[O].style.fontWeight="800"}),m(A),b(!0)},x=l=>{l.preventDefault(),!o&&(!u.current||!p.current||(u.current.style.display="none",p.current.style.display="block",s(!0)))};return R(),a||g(),(w=u.current)==null||w.addEventListener("click",x),()=>{var l;(l=u.current)==null||l.removeEventListener("click",x)}},[t,n,o,a]),c.useEffect(()=>{u.current&&(u.current.innerText=r)},[r]),{hasUnknownAlgorithms:S,isSpoilerExist:f,isSpoilerOpened:_,setTimerByDuration:d,setTimerByEndTime:E,toggleTimer:async()=>{if(o){h(),browser.runtime.sendMessage({command:I.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:I.ADD_SINGLE_TIMER});const R=await browser.runtime.sendMessage({command:I.FETCH_HIDER_OPTIONS});if(!Z(R))return;const{hours:g,minutes:x}=R.problemTagLockDuration,w=g*36e5+x*6e4;d(w)}}},Ee=e=>ee(e)&&"problemId"in e&&"titleKo"in e&&"level"in e&&typeof e.problemId=="number"&&typeof e.titleKo=="string"&&te(e.level),Re=e=>{if(!(ee(e)&&"success"in e&&typeof e.success=="boolean"))return!1;const{success:t}=e;if(t)return"problemInfo"in e&&Ee(e.problemInfo);if("statusCode"in e&&typeof e.statusCode!="number"||!("errorMessage"in e)||typeof e.errorMessage!="string")return!1;if(!("errorDescriptions"in e))return!0;const{errorDescriptions:n}=e;return typeof n=="string"||Array.isArray(n)&&n.every(o=>typeof o=="string")},Se=e=>{const{onToast:t}=e,[n,o]=c.useState(!1),r=c.useRef(n),d=c.useRef(new Set),E=c.useRef(new Set),h=c.useRef(me);c.useEffect(()=>((async()=>{const a=await browser.runtime.sendMessage({command:I.FETCH_QUICK_SLOTS});J(a)&&(h.current=a,r.current=!0,o(!0))})(),document.addEventListener("keydown",m),document.addEventListener("keyup",f),browser.storage.onChanged.addListener(S),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",f),browser.storage.onChanged.removeListener(S)}),[]);const S=(s,a)=>{if(a!=="local"||!("quickSlots"in s))return;const{newValue:b}=s.quickSlots;J(b)&&(h.current=b)},m=s=>{const a=s.key,b=s.code;d.current.add(a),E.current.add(b);const u=s.altKey,p=E.current.has("F2");if(!(!isNaN(Number(s.key))||s.code.startsWith("Digit")))return;const{hotkey:R}=h.current,g=isNaN(Number(s.key))?Number(s.code.at(-1)):Number(s.key);if(ue(g)){if(R==="Alt"&&u){T(g,"keydown");return}R==="F2"&&p&&T(g,"keydown")}},f=s=>{const a=s.key,b=s.code;d.current.delete(a),E.current.delete(b)},T=async(s,a)=>{if(!r.current)return;r.current=!1,o(!1);const{slots:b}=h.current,u=b[s];if(u.isEmpty){a==="click"&&t({title:`${s}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),r.current=!0,o(!0);return}const p=await browser.runtime.sendMessage({command:I.GET_RANDOM_DEFENSE_RESULT,query:u.query});if(!Re(p)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),r.current=!0,o(!0);return}if(!p.success){const{errorMessage:w,errorDescriptions:l}=p;t({title:w,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:l},8e3),r.current=!0,o(!0);return}const{problemInfo:y}=p,{problemId:R,titleKo:g,level:x}=y;browser.runtime.sendMessage({command:I.APPEND_RANDOM_DEFENSE_HISTORY_INFO,randomDefenseHistoryInfo:{problemId:R,title:g,tier:x,createdAt:new Date().toISOString()}}),location.href=`https://acmicpc.net/problem/${R}`};return{isRandomDefenseAvailable:n,performRandomDefenseByClick:()=>{T(h.current.selectedSlotNo,"click")}}},oe=/\d+(?=\.svg$)/,Ie=/\d+$/,_e=/^\d+/,ye=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",xe=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",we='.loginbar > li > a[href^="/user/"]',Oe=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],ke=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",ve=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",Le=(e,t)=>{De(e,t),t&&(Ne(e),Be(e),Ae(e))},De=async(e,t)=>{const n=L(ye),o=L(we),r=L(xe);if(!(n instanceof HTMLImageElement)||!o||!r)return;const d=r.innerText.match(_e),E=n.src.match(oe);if(!d||!E)return;const h=o.innerText.trim(),S=Number(d),m=Number(E);if(!te(m))return;const f=await browser.runtime.sendMessage({command:I.IS_USER_SOLVED_PROBLEM,handle:h,problemId:S});if(f==="unknown"){n.remove();return}if(f){n.style.content=`url(${JSON.stringify(pe[m])}`;return}m>=e&&t&&(n.style.content=`url(${JSON.stringify(ne.warn)}`)},Ne=e=>{[...Oe.map(n=>q(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const r=n.src.match(oe);r&&Number(r)>=e&&(n.style.content=`url(${JSON.stringify(ne.warn)})`)}})},Be=e=>{const t=L(ke);if(!t)return;const n=t.classList[0];if(!n)return;const o=n.match(Ie);o&&Number(o)>=e&&t.classList.add("warn")},Ae=e=>{q(ve).forEach(n=>{const o=n.getAttribute("data-tier");o&&Number(o)>=e&&n.classList.add("warn")})},Ce=e=>{const{theme:t,onChangeTheme:n,onToast:o}=e,[r,d]=c.useState(!1),[E,h]=c.useState(!1),[S,m]=c.useState(void 0),[f,T]=c.useState(void 0),[_,s]=c.useState(!1),[a,b]=c.useState(!1),{hasUnknownAlgorithms:u,isSpoilerExist:p,isSpoilerOpened:y,toggleTimer:R}=be({checkedIds:S,hiderOptions:f}),{isRandomDefenseAvailable:g,performRandomDefenseByClick:x}=Se({onToast:o}),w=!g,l=!p||y||_,v=!p||y,A=p&&_;return c.useEffect(()=>{(async()=>{const[C,W]=await Promise.all([browser.runtime.sendMessage({command:I.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:I.FETCH_HIDER_OPTIONS})]);if(!le(C)||!Z(W))return;const{checkedIds:se}=C,{algorithmHiderUsage:re,shouldHideTier:ie,shouldWarnHighTier:ce,warnTier:ae}=W;ie&&Le(ae,ce),re==="always"&&s(!0),m(se),T(W),b(!0)})()},[]),{isExpanded:E,isScrollingToTop:r,hasUnknownAlgorithms:u,isRandomDefenseButtonDisabled:w,isInspectButtonDisabled:l,isLockButtonDisabled:v,shouldShowInspectIcon:A,isLoaded:a,scrollToTop:()=>{r||(d(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},endScrollingAnimation:()=>{d(!1)},toggleWidgetOpen:H=>{H.preventDefault(),H.stopPropagation(),h(C=>!C)},openOptionsPage:()=>{browser.runtime.sendMessage({command:I.OPEN_OPTIONS_PAGE})},toggleTotamjungTheme:()=>{a&&n(t==="totamjung"?"none":"totamjung")},performRandomDefenseByClick:x,showInspectResultUsingPopup:()=>{l||(s(!0),o(u?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},toggleTimer:R}},Me=k.div`
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
`,je=ge`
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
`,F=k.button`
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
`,Pe=k.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${F}.animate > & {
    animation: ${je} 1s forwards;
  }
`,X=k.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,Ue=k.ul`
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

  ${F}:active + & {
    scale: 0.93;
  }
`,D=k.li`
  width: 36px;
  height: 32px;
`,N=k.button`
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
`,B=k.img`
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
`,K=e=>{const{theme:t}=e,{isExpanded:n,isScrollingToTop:o,hasUnknownAlgorithms:r,isRandomDefenseButtonDisabled:d,isInspectButtonDisabled:E,isLockButtonDisabled:h,shouldShowInspectIcon:S,isLoaded:m,scrollToTop:f,endScrollingAnimation:T,toggleWidgetOpen:_,openOptionsPage:s,toggleTotamjungTheme:a,performRandomDefenseByClick:b,showInspectResultUsingPopup:u,toggleTimer:p}=Ce(e),y=L("#problem_title");return i.jsx(Me,{children:m&&i.jsxs(i.Fragment,{children:[i.jsx(F,{type:"button",className:o?"animate":"",$widgetTheme:t,onClick:f,onContextMenu:_,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:i.jsxs(Pe,{onAnimationEnd:T,children:[i.jsx(X,{$direction:"left"}),i.jsx(X,{$direction:"right"})]})}),i.jsxs(Ue,{$widgetTheme:t,$isExpanded:n,children:[i.jsx(D,{children:i.jsx(N,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:s,children:i.jsx(B,{src:browser.runtime.getURL("/settings.png")})})}),i.jsx(D,{children:i.jsx(N,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",onClick:a,children:i.jsx(B,{src:browser.runtime.getURL("/palette.png")})})}),i.jsx(D,{children:i.jsx(N,{type:"button",$widgetTheme:t,"aria-label":"무작위 문제 추첨하기",disabled:d,onClick:b,children:i.jsx(B,{src:browser.runtime.getURL("/dice.png")})})}),i.jsx(D,{children:i.jsx(N,{type:"button",disabled:E,onClick:u,$widgetTheme:t,children:i.jsx(B,{src:S?r?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),i.jsx(D,{children:i.jsx(N,{type:"button",disabled:h,onClick:p,$widgetTheme:t,children:i.jsx(B,{src:browser.runtime.getURL("/lock.png")})})})]}),y&&S&&he.createPortal(i.jsx(fe,{theme:t,icon:r?"question":"check"}),y)]})})};try{K.displayName="Widget",K.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const tt={title:"components/Widget",component:K,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},M={decorators:[e=>i.jsx("div",{style:{width:"100%",height:"240px"},children:i.jsx(e,{})})],args:{theme:"none",onChangeTheme:Q(),onToast:Q()}};var V,Y,z;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const nt=["Default"];export{M as Default,nt as __namedExportsOrder,tt as default};
