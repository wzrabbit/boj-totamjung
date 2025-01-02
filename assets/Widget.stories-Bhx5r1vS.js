import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{C as R}from"./commands-CyQPP6hL.js";import{a as me}from"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import{i as te}from"./hiderOptionsValidator-OSwkoshH.js";import{A as ue}from"./algorithmInfos-BNLNF_TH.js";import{D as pe}from"./defaultValues-Ccu0oMSE.js";import{c as Q,b as fe}from"./quickSlotsValidator-DFvl-FmR.js";import{i as ne,d as oe}from"./typeGuards-DuDHAUw0.js";import{s as ge,a as se}from"./index-CElCL35T.js";import{I as he}from"./InspectResultIcon-BYVm5tek.js";import{S as Te}from"./SpeechBubble-DOhaDY9T.js";import{T as X}from"./Text-Ccd6d79x.js";import{d as _,m as be}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as Ee}from"./index-DAfSkmQi.js";import{f as V}from"./index-C_FWhylE.js";import"./theme-D4_a62hg.js";import"./close-R_Y1ANk3.js";const k=(e,t)=>{const n=document.querySelector(e);return n instanceof HTMLElement?n:null},F=(e,t)=>{const n=Array.from(document.querySelectorAll(e)),o=[];return n.forEach(c=>{c instanceof HTMLElement&&o.push(c)}),o},Se=()=>{const[e,t]=i.useState(!1),[n,o]=i.useState(0),[c,d]=i.useState("보기");return i.useEffect(()=>{if(!e){d("보기");return}const m=()=>{const b=n-Date.now();if(b<=0){d("보기"),t(!1);return}const y=Math.floor(b/36e5),r=String(Math.floor(b%36e5/6e4)).padStart(2,"0"),a=String(Math.floor(b%6e4/1e3)).padStart(2,"0");d(`잠김 (🔒︎${y}:${r}:${a} 후 보기 가능)`)},g=setInterval(()=>{m()},100);return()=>{clearInterval(g)}},[e,n]),{isTimerRunning:e,timerDisplayText:c,setTimerByDuration:m=>{const g=Date.now()+m;o(g),t(!0)},setTimerByEndTime:m=>{o(m),t(!0)},clearTimer:()=>{t(!1)}}},Re=e=>{const{checkedIds:t,hiderOptions:n}=e,{isTimerRunning:o,timerDisplayText:c,setTimerByDuration:d,setTimerByEndTime:S,clearTimer:T}=Se(),[x,m]=i.useState(!1),[g,b]=i.useState(!1),[y,r]=i.useState(!1),[a,h]=i.useState(!1),p=i.useRef(null),E=i.useRef(null);return i.useEffect(()=>{(async()=>{const l=await browser.runtime.sendMessage({command:R.GET_REMAINING_LOCK_TIME});typeof l!="number"||l===0||d(l)})()},[]),i.useEffect(()=>{var L;if(!t||!n)return;const f=()=>{const u=k(".show-spoiler");if(!u)return;u.getAttribute("disabled")&&r(!0);const v=u.cloneNode(!0);v instanceof HTMLElement&&(p.current=v,u.after(v),u.remove(),E.current=k(".spoiler"),b(!0))},l=()=>{const u=F(".spoiler-link"),v=u.map(I=>I.innerText.replace(/\u2013/g,"-"));let D=!1;const C=[];v.forEach((I,q)=>{var U;const P=(U=ue.find(H=>H.name===I||H.englishName===I))==null?void 0:U.id;(P===void 0||!t.includes(P))&&(D=!0,C.push(q))}),C.forEach(I=>{u[I].innerText+=" 📌",u[I].style.fontWeight="800"}),m(D),h(!0)},O=u=>{u.preventDefault(),!o&&(!p.current||!E.current||(p.current.style.display="none",E.current.style.display="block",r(!0)))};return f(),a||l(),(L=p.current)==null||L.addEventListener("click",O),()=>{var u;(u=p.current)==null||u.removeEventListener("click",O)}},[t,n,o,a]),i.useEffect(()=>{p.current&&(p.current.innerText=c)},[c]),{hasUnknownAlgorithms:x,isSpoilerExist:g,isSpoilerOpened:y,setTimerByDuration:d,setTimerByEndTime:S,toggleTimer:async()=>{if(o){T(),browser.runtime.sendMessage({command:R.REMOVE_SINGLE_TIMER});return}browser.runtime.sendMessage({command:R.ADD_SINGLE_TIMER});const f=await browser.runtime.sendMessage({command:R.FETCH_HIDER_OPTIONS});if(!te(f))return;const{hours:l,minutes:O}=f.problemTagLockDuration,L=l*36e5+O*6e4;d(L)}}},xe=e=>ne(e)&&"problemId"in e&&"titleKo"in e&&"level"in e&&typeof e.problemId=="number"&&typeof e.titleKo=="string"&&oe(e.level),_e=e=>{if(!(ne(e)&&"success"in e&&typeof e.success=="boolean"))return!1;const{success:t}=e;if(t)return"problemInfo"in e&&xe(e.problemInfo);if("statusCode"in e&&typeof e.statusCode!="number"||!("errorMessage"in e)||typeof e.errorMessage!="string")return!1;if(!("errorDescriptions"in e))return!0;const{errorDescriptions:n}=e;return typeof n=="string"||Array.isArray(n)&&n.every(o=>typeof o=="string")},ye=e=>{const{onToast:t}=e,[n,o]=i.useState(!1),c=i.useRef(n),d=i.useRef(new Set),S=i.useRef(new Set),T=i.useRef(pe);i.useEffect(()=>((async()=>{const a=await browser.runtime.sendMessage({command:R.FETCH_QUICK_SLOTS});Q(a)&&(T.current=a,c.current=!0,o(!0))})(),document.addEventListener("keydown",m),document.addEventListener("keyup",g),browser.storage.onChanged.addListener(x),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",g),browser.storage.onChanged.removeListener(x)}),[]);const x=(r,a)=>{if(a!=="local"||!("quickSlots"in r))return;const{newValue:h}=r.quickSlots;Q(h)&&(T.current=h)},m=r=>{const a=r.key,h=r.code;d.current.add(a),S.current.add(h);const p=r.altKey,E=S.current.has("F2");if(!(!isNaN(Number(r.key))||r.code.startsWith("Digit")))return;const{hotkey:f}=T.current,l=isNaN(Number(r.key))?Number(r.code.at(-1)):Number(r.key);if(fe(l)){if(f==="Alt"&&p){b(l,"keydown");return}f==="F2"&&E&&b(l,"keydown")}},g=r=>{const a=r.key,h=r.code;d.current.delete(a),S.current.delete(h)},b=async(r,a)=>{if(!c.current)return;c.current=!1,o(!1);const{slots:h}=T.current,p=h[r];if(p.isEmpty){a==="click"&&t({title:`${r}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),c.current=!0,o(!0);return}const E=await browser.runtime.sendMessage({command:R.GET_RANDOM_DEFENSE_RESULT,query:p.query});if(!_e(E)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),c.current=!0,o(!0);return}if(!E.success){const{errorMessage:L,errorDescriptions:u}=E;t({title:L,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:u},8e3),c.current=!0,o(!0);return}const{problemInfo:w}=E,{problemId:f,titleKo:l,level:O}=w;browser.runtime.sendMessage({command:R.APPEND_RANDOM_DEFENSE_HISTORY_INFO,randomDefenseHistoryInfo:{problemId:f,title:l,tier:O,createdAt:new Date().toISOString()}}),location.href=`https://acmicpc.net/problem/${f}`};return{isRandomDefenseAvailable:n,performRandomDefenseByClick:()=>{b(T.current.selectedSlotNo,"click")}}},re=/\d+(?=\.svg$)/,Ie=/\d+$/,we=/^\d+/,Oe=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",Le=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",ve='.loginbar > li > a[href^="/user/"]',ke=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],De=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",Be=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",Ne=(e,t)=>{Ae(e,t),t&&(Ce(e),Me(e),je(e))},Ae=async(e,t)=>{const n=k(Oe),o=k(ve),c=k(Le);if(!(n instanceof HTMLImageElement)||!o||!c)return;const d=c.innerText.match(we),S=n.src.match(re);if(!d||!S)return;const T=o.innerText.trim(),x=Number(d),m=Number(S);if(!oe(m))return;const g=await browser.runtime.sendMessage({command:R.IS_USER_SOLVED_PROBLEM,handle:T,problemId:x});if(g==="unknown"){n.remove();return}if(g){n.style.content=`url(${JSON.stringify(ge[m])}`;return}m>=e&&t&&(n.style.content=`url(${JSON.stringify(se.warn)}`)},Ce=e=>{[...ke.map(n=>F(n)).flat()].forEach(n=>{if(n instanceof HTMLImageElement){const c=n.src.match(re);c&&Number(c)>=e&&(n.style.content=`url(${JSON.stringify(se.warn)})`)}})},Me=e=>{const t=k(De);if(!t)return;const n=t.classList[0];if(!n)return;const o=n.match(Ie);o&&Number(o)>=e&&t.classList.add("warn")},je=e=>{F(Be).forEach(n=>{const o=n.getAttribute("data-tier");o&&Number(o)>=e&&n.classList.add("warn")})},Pe=e=>typeof e=="boolean",Ue=e=>{const{theme:t,onChangeTheme:n,onToast:o}=e,[c,d]=i.useState(!1),[S,T]=i.useState(!1),[x,m]=i.useState(void 0),[g,b]=i.useState(void 0),[y,r]=i.useState(!1),[a,h]=i.useState(!1),[p,E]=i.useState(!1),{hasUnknownAlgorithms:w,isSpoilerExist:f,isSpoilerOpened:l,toggleTimer:O}=Re({checkedIds:x,hiderOptions:g}),{isRandomDefenseAvailable:L,performRandomDefenseByClick:u}=ye({onToast:o}),v=!L,D=!f||l||y,C=!f||l,I=f&&y;return i.useEffect(()=>{(async()=>{const[M,$,J]=await Promise.all([browser.runtime.sendMessage({command:R.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:R.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:R.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!me(M)||!te($)||!Pe(J))return;const{checkedIds:ie}=M,{algorithmHiderUsage:ce,shouldHideTier:ae,shouldWarnHighTier:le,warnTier:de}=$;ae&&Ne(de,le),ce==="always"&&r(!0),m(ie),b($),h(J),E(!0)})()},[]),{isExpanded:S,isScrollingToTop:c,hasUnknownAlgorithms:w,isRandomDefenseButtonDisabled:v,isInspectButtonDisabled:D,isLockButtonDisabled:C,shouldShowInspectIcon:I,shouldShowWelcomeMessage:a,isLoaded:p,scrollToTop:()=>{c||(d(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},endScrollingAnimation:()=>{d(!1)},toggleWidgetOpen:W=>{W.preventDefault(),W.stopPropagation(),T(M=>!M)},openOptionsPage:()=>{browser.runtime.sendMessage({command:R.OPEN_OPTIONS_PAGE})},toggleTotamjungTheme:()=>{p&&n(t==="totamjung"?"none":"totamjung")},performRandomDefenseByClick:u,showInspectResultUsingPopup:()=>{D||(r(!0),o(w?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},toggleTimer:O,closeWelcomeMessage:()=>{h(!1),browser.runtime.sendMessage({command:R.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})}}},He=_.div`
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
`,We=be`
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
`,K=_.button`
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
`,$e=_.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${K}.animate > & {
    animation: ${We} 1s forwards;
  }
`,Y=_.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,Ge=_.ul`
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

  ${K}:active + & {
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
`,A=_.img`
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
`,Fe=_.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,Ke=_.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,G=e=>{const{theme:t}=e,{isExpanded:n,isScrollingToTop:o,hasUnknownAlgorithms:c,isRandomDefenseButtonDisabled:d,isInspectButtonDisabled:S,isLockButtonDisabled:T,shouldShowInspectIcon:x,shouldShowWelcomeMessage:m,isLoaded:g,scrollToTop:b,endScrollingAnimation:y,toggleWidgetOpen:r,openOptionsPage:a,toggleTotamjungTheme:h,performRandomDefenseByClick:p,showInspectResultUsingPopup:E,toggleTimer:w,closeWelcomeMessage:f}=Ue(e),l=k("#problem_title");return s.jsx(He,{children:g&&s.jsxs(s.Fragment,{children:[s.jsx(K,{type:"button",className:o?"animate":"",$widgetTheme:t,onClick:b,onContextMenu:r,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",children:s.jsxs($e,{onAnimationEnd:y,children:[s.jsx(Y,{$direction:"left"}),s.jsx(Y,{$direction:"right"})]})}),s.jsxs(Ge,{$widgetTheme:t,$isExpanded:n,children:[s.jsx(B,{children:s.jsx(N,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:a,children:s.jsx(A,{src:browser.runtime.getURL("/settings.png")})})}),s.jsx(B,{children:s.jsx(N,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",onClick:h,children:s.jsx(A,{src:browser.runtime.getURL("/palette.png")})})}),s.jsx(B,{children:s.jsx(N,{type:"button",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:d,onClick:p,children:s.jsx(A,{src:browser.runtime.getURL("/dice.png")})})}),s.jsx(B,{children:s.jsx(N,{type:"button",disabled:S,onClick:E,$widgetTheme:t,children:s.jsx(A,{src:x?c?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),s.jsx(B,{children:s.jsx(N,{type:"button",disabled:T,onClick:w,$widgetTheme:t,children:s.jsx(A,{src:browser.runtime.getURL("/lock.png")})})})]}),l&&x&&Ee.createPortal(s.jsx(he,{theme:t,icon:c?"question":"check"}),l),m&&s.jsx(Fe,{children:s.jsx(Te,{open:!0,maxWidth:"400px",content:s.jsxs(Ke,{children:[s.jsx(X,{type:"normal",fontSize:"14px",children:"토탐정을 설치해 주셔서 감사합니다!"}),s.jsxs(X,{type:"normal",fontSize:"14px",children:[s.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),totamjungTheme:t,direction:"left",hasCloseButton:!0,onClose:f})})]})})};try{G.displayName="Widget",G.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const pt={title:"components/Widget",component:G,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},j={decorators:[e=>s.jsx("div",{style:{width:"100%",height:"240px"},children:s.jsx(e,{})})],args:{theme:"none",onChangeTheme:V(),onToast:V()}};var z,Z,ee;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ft=["Default"];export{j as Default,ft as __namedExportsOrder,pt as default};
