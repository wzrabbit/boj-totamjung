import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index--qcDGAq6.js";import{C as _}from"./commands-D5hbcPyT.js";import{i as Oe,a as nt}from"./hiderOptionsValidator-C_fdjVEa.js";import{A as rt}from"./algorithmInfos-w49mooiO.js";import{b as st}from"./defaultValues-BTwcrrCx.js";import{b as de,c as ue}from"./quickSlotsValidator-BfCMAMVc.js";import{i as at,R as it}from"./RandomDefenseGachaModal-uUGAGolR.js";import{u as ct}from"./useModalState-vgpoPrCb.js";import{s as lt}from"./index-CElCL35T.js";import{b as dt}from"./typeGuards-32w5_mfc.js";import{i as ut}from"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import{I as mt}from"./InspectResultIcon-DIjPdc2n.js";import{S as pt}from"./SpeechBubble-SaxsV9W_.js";import{t as d}from"./theme-DpyODYgC.js";import{d as C,m as Pe,l as ht}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as gt}from"./getTransparentHexColor-DN69VCBw.js";import{r as ft}from"./index-B5qaPpLJ.js";import{G as bt}from"./GachaProblemCountInputModal-CkxVP1VM.js";import{f as A}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";import"./IconButton-CJ4kdUS9.js";import"./Modal-Cac1K4CQ.js";import"./close-BziWfrbF.js";import"./copy-BcJBRJXh.js";import"./warning-BLusDAjJ.js";import"./check-BIa-lIjI.js";import"./loading-Ckb1CsUZ.js";import"./hidden-tier-badge-CukGKv-l.js";import"./CardBox-DVANTHr7.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-D0vZBhbh.js";import"./ProblemCard-CYm8tiBu.js";import"./useRovingFocus-C_x1-dB5.js";import"./gachaOptionsValidator-CbiMNB16.js";import"./GachaModalNotification-DM5b6Hdn.js";import"./index-B6ujFmsw.js";import"./Input-BdGorGGB.js";import"./toPx-DeOSKary.js";import"./Text-CCW1h-Yj.js";import"./check-circle-B-abXz3w.js";import"./randomDefense-DE7lwrZG.js";const N=(e,t)=>{const s=document.querySelector(e);return s instanceof HTMLElement?s:null},se=(e,t)=>{const s=Array.from(document.querySelectorAll(e)),l=[];return s.forEach(i=>{i instanceof HTMLElement&&l.push(i)}),l},Et=()=>{const[e,t]=n.useState(!1),[s,l]=n.useState(0),[i,a]=n.useState("보기");return n.useEffect(()=>{if(!e){a("보기");return}const c=()=>{const v=s-Date.now();if(v<=0){a("보기"),t(!1);return}const S=Math.floor(v/36e5),R=String(Math.floor(v%36e5/6e4)).padStart(2,"0"),r=String(Math.floor(v%6e4/1e3)).padStart(2,"0");a(`잠김 (🔒︎${S}:${R}:${r} 후 보기 가능)`)},p=setInterval(()=>{c()},100);return()=>{clearInterval(p)}},[e,s]),{isTimerRunning:e,timerDisplayText:i,setTimerByDuration:c=>{const p=Date.now()+c;l(p),t(!0)},setTimerByEndTime:c=>{l(c),t(!0)},clearTimer:()=>{t(!1)}}},Tt=e=>{const{checkedAlgorithmIds:t,hiderOptions:s}=e,{isTimerRunning:l,timerDisplayText:i,setTimerByDuration:a,setTimerByEndTime:u,clearTimer:T}=Et(),[m,c]=n.useState(!1),[p,v]=n.useState(!1),[S,R]=n.useState(!1),[r,b]=n.useState(!1),g=n.useRef(null),y=n.useRef(null);return n.useEffect(()=>{(async()=>{const x=await browser.runtime.sendMessage({command:_.GET_REMAINING_LOCK_TIME});typeof x!="number"||x===0||a(x)})()},[]),n.useEffect(()=>{var k;if(!t||!s)return;const h=()=>{const f=N(".show-spoiler");if(!f)return;f.getAttribute("disabled")&&R(!0);const w=f.cloneNode(!0);w instanceof HTMLElement&&(g.current=w,f.after(w),f.remove(),y.current=N(".spoiler"),v(!0))},x=()=>{const f=se(".spoiler-link"),w=f.map(D=>D.innerText.replace(/\u2013/g,"-").toLowerCase());let H=!1;const W=[];w.forEach((D,$)=>{var U;const M=(U=rt.find(F=>F.name.toLowerCase()===D||F.englishName.toLowerCase()===D))==null?void 0:U.id;(M===void 0||!t.includes(M))&&(H=!0,W.push($))}),W.forEach(D=>{f[D].innerText+=" 📌",f[D].style.fontWeight="800"}),c(H),b(!0)},L=f=>{f.preventDefault(),!l&&(!g.current||!y.current||(g.current.style.display="none",y.current.style.display="block",R(!0)))};if(h(),r||x(),(k=g.current)==null||k.addEventListener("click",L),g.current){if(l){g.current.style.cursor="not-allowed",g.current.style.textDecorationColor="transparent";return}g.current.style.cursor="pointer",g.current.style.textDecorationColor="inherit"}return()=>{var f;(f=g.current)==null||f.removeEventListener("click",L)}},[t,s,l,r]),n.useEffect(()=>{g.current&&(g.current.innerText=i)},[i]),{hasUnknownAlgorithms:m,isSpoilerExist:p,isSpoilerOpened:S,setTimerByDuration:a,setTimerByEndTime:u,toggleTimer:async()=>{if(l){T(),browser.runtime.sendMessage({command:_.REMOVE_SINGLE_TAG_LOCK_TIMER});return}browser.runtime.sendMessage({command:_.ADD_SINGLE_TAG_LOCK_TIMER});const h=await browser.runtime.sendMessage({command:_.FETCH_HIDER_OPTIONS});if(!Oe(h))return;const{hours:x,minutes:L}=h.problemTagLockDuration,k=x*36e5+L*6e4;a(k)}}},me=(e,t,s)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||s||!isNaN(Number(e))||t.startsWith("Digit"),vt=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:s,onPress:l,onLongPress:i}=e,[a,u]=n.useState(s),[T,m]=n.useState(!1),c=n.useRef(null),p=n.useRef(null),v=n.useRef(!1),S=n.useRef(void 0),R=y=>{const{key:E,code:h,altKey:x}=y;if(!(v.current||T||!me(E,h,x))&&(c.current===null&&a==="Alt"&&(E==="Alt"||h==="AltLeft"||h==="AltRight"||x)&&(c.current=h==="AltRight"?"AltRight":"AltLeft"),c.current===null&&a==="F2"&&(E==="F2"||h==="F2")&&(c.current="F2"),p.current===null&&c.current!==null)){isNaN(Number(E))||(p.current=Number(E)),h.startsWith("Digit")&&(p.current=Number(h.at(-1)));const L=p.current;typeof L=="number"&&de(L)&&(v.current=!0,S.current=setTimeout(()=>{m(!0),i(L)},t))}},r=y=>{const{key:E,code:h,altKey:x}=y;if(T||!me(E,h,x))return;const L=a==="Alt"&&h===c.current||c.current==="AltLeft"&&(E==="Alt"||E==="AltLeft"),k=a==="F2"&&(E==="F2"||h===c.current),f=p.current===Number(E)||p.current===Number(h.at(-1));if(L||k||f){const w=p.current;c.current=null,p.current=null,clearTimeout(S.current),v.current=!1,typeof w=="number"&&de(w)&&!T&&(l(w),m(!0))}},b=()=>{c.current=null,p.current=null,v.current=!1,clearTimeout(S.current)},g=()=>{m(!1),c.current=null,p.current=null,v.current=!1};return n.useEffect(()=>{u(s)},[s]),n.useEffect(()=>(document.addEventListener("keydown",R),document.addEventListener("keyup",r),document.addEventListener("visibilitychange",b),window.addEventListener("blur",b),()=>{document.removeEventListener("keydown",R),document.removeEventListener("keyup",r),document.removeEventListener("visibilitychange",b),window.removeEventListener("blur",b),clearTimeout(S.current)}),[a,T]),{unlockHotkey:g}},xt=e=>{const{onToast:t,onGachaStart:s}=e,[l,i]=n.useState(!1),a=n.useRef(l),u=n.useRef(st),{unlockHotkey:T}=vt({baseKey:u.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:r=>c(r,"press"),onLongPress:r=>c(r,"keyLongPress")});n.useEffect(()=>((async()=>{const b=await browser.runtime.sendMessage({command:_.FETCH_QUICK_SLOT_OPTIONS});ue(b)&&(u.current=b,a.current=!0,i(!0))})(),browser.storage.onChanged.addListener(m),()=>{browser.storage.onChanged.removeListener(m)}),[]);const m=(r,b)=>{if(b!=="local"||!("quickSlotOptions"in r))return;const{newValue:g}=r.quickSlotOptions;ue(g)&&(u.current=g)},c=async(r,b)=>{if(!a.current)return;a.current=!1,i(!1);const{slots:g}=u.current,y=g[r];if(y.isEmpty){(b==="click"||b==="mouseLongPress")&&t({title:`${r}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),a.current=!0,i(!0);return}if(b==="keyLongPress"||b==="mouseLongPress"){s(y),i(!1);return}const E=await browser.runtime.sendMessage({command:_.GET_RANDOM_DEFENSE_RESULT,query:y.query,problemCount:1});if(!at(E)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),a.current=!0,i(!0);return}if(!E.success){const{errorMessage:L,errorDescriptions:k}=E;t({title:L,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:k},8e3),a.current=!0,i(!0);return}const{problemInfos:h}=E,{problemId:x}=h[0];browser.runtime.sendMessage({command:_.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...h[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${x}`};return{isRandomDefenseAvailable:l,performRandomDefenseByClick:()=>{c(u.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{c(u.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{a.current=!0,i(!0),T()},disableRandomDefense:()=>{a.current=!1,i(!1)}}},pe=1e3,St=e=>{const{onClick:t,onLongPress:s}=e,[l,i]=n.useState(!1),a=n.useRef(!1),u=n.useRef(void 0),T=n.useRef(null),m=n.useRef(null),c=()=>{m.current&&m.current!=="Mouse"||(m.current="Mouse",clearTimeout(u.current),u.current=setTimeout(()=>{s(),a.current=!1,i(!1),m.current=null},pe),i(!0),a.current=!0)},p=()=>{m.current==="Mouse"&&(a.current&&(t(),clearTimeout(u.current)),i(!1),a.current=!1,m.current=null)},v=()=>{m.current==="Mouse"&&(clearTimeout(u.current),i(!1),a.current=!1,m.current=null)},S=r=>{r.repeat||r.code!=="Space"&&r.code!=="Enter"||m.current&&m.current!==r.code||(m.current=r.code,clearTimeout(u.current),u.current=setTimeout(()=>{s(),a.current=!1,i(!1),m.current=null},pe),i(!0),a.current=!0)},R=r=>{r.code!=="Space"&&r.code!=="Enter"||m.current===r.code&&(a.current&&(t(),clearTimeout(u.current)),i(!1),a.current=!1,m.current=null)};return n.useEffect(()=>{const r=T.current;if(r)return r.addEventListener("mousedown",c),r.addEventListener("mouseup",p),r.addEventListener("mouseleave",v),r.addEventListener("keydown",S),r.addEventListener("keyup",R),()=>{clearTimeout(u.current),r.removeEventListener("mousedown",c),r.removeEventListener("mouseup",p),r.removeEventListener("mouseleave",v),r.removeEventListener("keydown",S),r.removeEventListener("keyup",R)}},[T.current]),{isPressing:l,longPressRef:T}},Ne=/\d+(?=\.svg$)/,Rt=/\d+$/,yt=/^\d+/,Lt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",kt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",wt='.loginbar > li > a[href^="/user/"]',At=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".row:has(li[class='active'] > a[href='/problem/added']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href^='/group/workbook']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],It=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",_t=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",Dt=(e,t)=>{Ct(e,t),t&&(Bt(e),jt(e),Mt(e))},Ct=async(e,t)=>{const s=N(Lt),l=N(wt),i=N(kt);if(!(s instanceof HTMLImageElement)||!l||!i)return;const a=i.innerText.match(yt),u=s.src.match(Ne);if(!a||!u)return;const T=l.innerText.trim(),m=Number(a),c=Number(u);if(!dt(c))return;const p=await browser.runtime.sendMessage({command:_.IS_USER_SOLVED_PROBLEM,handle:T,problemId:m});if(p==="unknown"){s.remove();return}if(p){s.style.content=`url(${JSON.stringify(lt[c])}`;return}c>=e&&t&&s.classList.add("warn")},Bt=e=>{[...At.map(s=>se(s)).flat()].forEach(s=>{if(s instanceof HTMLImageElement){const i=s.src.match(Ne);i&&Number(i)>=e&&s.classList.add("warn")}})},jt=e=>{const t=N(It);if(!t)return;const s=t.classList[0];if(!s)return;const l=s.match(Rt);l&&Number(l)>=e&&t.classList.add("warn")},Mt=e=>{se(_t).forEach(s=>{const l=s.getAttribute("data-tier");l&&Number(l)>=e&&s.classList.add("warn")})},Ot=e=>{const{theme:t,onChangeTheme:s,onToast:l}=e,[i,a]=n.useState(!1),[u,T]=n.useState(!1),[m,c]=n.useState(void 0),[p,v]=n.useState(void 0),[S,R]=n.useState(!1),[r,b]=n.useState(!1),[g,y]=n.useState(null),[E,h]=n.useState(0),[x,L]=n.useState(!1),{hasUnknownAlgorithms:k,isSpoilerExist:f,isSpoilerOpened:w,toggleTimer:H}=Tt({checkedAlgorithmIds:m,hiderOptions:p}),{activeModalName:W,openModal:D,closeModal:$}=ct(),{isRandomDefenseAvailable:M,performRandomDefenseByClick:U,performRandomDefenseByMouseLongPress:F,enableRandomDefense:Ue}=xt({onToast:l,onGachaStart:I=>Ze(I)}),{isPressing:Ke,longPressRef:$e}=St({onClick:U,onLongPress:F}),ie=n.useRef(null),ce=n.useRef(null),oe=n.useRef(null),Ge=!M,le=!f||w||S,Fe=!f||w,qe=f&&S;n.useEffect(()=>{const I=async()=>{const[O,K,j]=await Promise.all([browser.runtime.sendMessage({command:_.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:_.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:_.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!nt(O)||!Oe(K)||!ut(j))return;const{algorithmHiderUsage:q,shouldHideTier:et,shouldWarnHighTier:tt,warnTier:ot}=K;et&&Dt(ot,tt),q==="always"&&R(!0),c(O),v(K),b(j),L(!0)},B=O=>{var q;const j=O.composedPath()[0];(j===null||j instanceof Node&&j instanceof HTMLElement&&!((q=ie.current)!=null&&q.contains(j)))&&(oe.current=j)};return I(),document.addEventListener("focusin",B),()=>{document.removeEventListener("focusin",B)}},[]),n.useEffect(()=>{document.documentElement.setAttribute("totamjungTheme",t==="totamjung"?"totamjung":"none")},[t]),n.useEffect(()=>{const I=B=>{var O;B.altKey&&B.shiftKey&&B.code==="KeyW"&&(T(K=>!K),u&&oe.current&&oe.current.focus(),u||(O=ce.current)==null||O.focus())};return document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}},[u]);const Ye=()=>{i||(a(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},Qe=()=>{a(!1)},Ve=I=>{I.preventDefault(),I.stopPropagation(),T(B=>!B)},Xe=()=>{browser.runtime.sendMessage({command:_.OPEN_OPTIONS_PAGE})},Je=()=>{x&&s(t==="totamjung"?"none":"totamjung")},ze=()=>{le||(R(!0),l(k?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},Ze=I=>{D("gachaProblemCount"),y(I)};return{isExpanded:u,isScrollingToTop:i,hasUnknownAlgorithms:k,isRandomDefenseButtonDisabled:Ge,isRandomDefenseButtonPressing:Ke,gachaProblemCount:E,gachaSlot:g,isInspectButtonDisabled:le,isLockButtonDisabled:Fe,shouldShowInspectIcon:qe,shouldShowWelcomeMessage:r,activeModalName:W,isLoaded:x,scrollToTop:Ye,endScrollingAnimation:Qe,toggleWidgetOpen:Ve,openOptionsPage:Xe,toggleTotamjungTheme:Je,openGachaModalWithProblemCount:I=>{g&&(D("gacha"),h(I))},suspendGacha:()=>{$(),y(null),Ue()},showInspectResultUsingPopup:ze,toggleTimer:H,closeWelcomeMessage:()=>{b(!1),browser.runtime.sendMessage({command:_.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},containerRef:ie,topButtonRef:ce,randomDefenseButtonRef:$e}},te={none:d.color.BOJ_BLUE,totamjung:d.color.LIGHTEST_BROWN,solvedAcLight:d.solvedAcColor.LIME,solvedAcDark:d.solvedAcColor.LIME,solvedAcBlack:d.solvedAcColor.LIME,bojExtendedDark:d.bojExtendedColor.DARK_GRAY,bojExtendedRigel:d.bojExtendedColor.SKY_BLUE},Pt={none:d.color.PURE_WHITE,totamjung:d.color.BROWN,solvedAcLight:d.color.PURE_WHITE,solvedAcDark:d.color.PURE_WHITE,solvedAcBlack:d.color.PURE_WHITE,bojExtendedDark:d.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:d.color.WHITE},He={none:d.filter.BOJ_BLUE_FILTER,totamjung:d.filter.LIGHTEST_BROWN_FILTER,solvedAcLight:d.solvedAcFilter.LIME,solvedAcDark:d.solvedAcFilter.LIME,solvedAcBlack:d.solvedAcFilter.LIME,bojExtendedDark:d.bojExtendedFilter.DARK_GRAY,bojExtendedRigel:d.bojExtendedFilter.SKY_BLUE},Nt={none:"transparent",totamjung:d.color.BLACK_TRANSPARENT,solvedAcLight:"transparent",solvedAcDark:d.color.BLACK_TRANSPARENT,solvedAcBlack:d.color.BLACK_TRANSPARENT,bojExtendedDark:d.color.BLACK_TRANSPARENT,bojExtendedRigel:d.color.BLACK_TRANSPARENT},Ht={none:d.color.WHITE,totamjung:d.color.WHITE,solvedAcLight:d.color.BLACK,solvedAcDark:d.color.WHITE,solvedAcBlack:d.color.WHITE,bojExtendedDark:d.color.WHITE,bojExtendedRigel:d.color.WHITE},Wt=C.div`
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
`,Ut=Pe`
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
`,ae=C.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 40px;
  height: 40px;

  border-radius: 20px !important;
  background-color: ${({theme:e,$widgetTheme:t})=>te[t]??e.color.BOJ_BLUE};

  transition:
    0.3s transform,
    0.1s outline;
  z-index: 1;
  outline: 0px solid
    ${({$widgetTheme:e})=>te[e]} !important;

  &:active {
    transform: scale(0.93);
  }

  &:hover,
  &:active {
    outline: 4px solid
      ${({$widgetTheme:e})=>gt(te[e],.4)} !important;
  }

  & span {
    background-color: ${({$widgetTheme:e})=>Pt[e]};
  }
`,Kt=C.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${ae}.animate > & {
    animation: ${Ut} 1s forwards;
  }
`,he=C.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,$t=C.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  width: 40px;
  height: ${({$isExpanded:e})=>e?"216px":"40px"};
  padding: 8px 0 0 0;

  border: 2px solid
    ${({$widgetTheme:e})=>te[e]};
  border-radius: 20px !important;
  background-color: ${({$widgetTheme:e})=>Nt[e]};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${ae}:active + & {
    scale: 0.93;
  }
`,G=C.li`
  width: 36px;
  height: 32px;
`,We=ht`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;
`,P=C.img.attrs({draggable:!1})`
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
`,Y=C.button`
  ${We}

  & > ${P} {
    filter: ${({$widgetTheme:e})=>He[e]};
  }
`,Gt=Pe`
  from {
    mask-position: 0% 0%;
  }

  to {
    mask-position: 0% 100%;
  }
`,Ft=C.button`
  ${We}

  & > ${P} {
    filter: ${({$widgetTheme:e})=>He[e]};
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

    animation: ${Gt} 0.8s 0.2s forwards linear;
  }
`,qt=C.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,ne=C.span`
  font-size: 14px;
  line-height: 14px;
`,Yt=C.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  & > ${ne} {
    color: ${({$totamjungTheme:e})=>Ht[e]};
  }
`,Qt=e=>typeof e=="string"&&["solvedAcLight","solvedAcDark","solvedAcBlack"].includes(e),re=e=>{const{theme:t,rootElement:s}=e,{isExpanded:l,isScrollingToTop:i,hasUnknownAlgorithms:a,isRandomDefenseButtonDisabled:u,isRandomDefenseButtonPressing:T,gachaProblemCount:m,gachaSlot:c,isInspectButtonDisabled:p,isLockButtonDisabled:v,shouldShowInspectIcon:S,shouldShowWelcomeMessage:R,activeModalName:r,isLoaded:b,scrollToTop:g,endScrollingAnimation:y,toggleWidgetOpen:E,openOptionsPage:h,toggleTotamjungTheme:x,openGachaModalWithProblemCount:L,suspendGacha:k,showInspectResultUsingPopup:f,toggleTimer:w,closeWelcomeMessage:H,containerRef:W,topButtonRef:D,randomDefenseButtonRef:$}=Ot(e),M=N("#problem_title"),U=t!=="none"&&t!=="totamjung";return o.jsx(Wt,{ref:W,children:b&&o.jsxs(o.Fragment,{children:[o.jsx(ae,{type:"button",className:i?"animate":"",$widgetTheme:t,onClick:g,onContextMenu:E,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",ref:D,children:o.jsxs(Kt,{onAnimationEnd:y,children:[o.jsx(he,{$direction:"left"}),o.jsx(he,{$direction:"right"})]})}),o.jsxs($t,{$widgetTheme:t,$isExpanded:l,children:[o.jsx(G,{children:o.jsx(Y,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:h,children:o.jsx(P,{src:browser.runtime.getURL("/settings.png")})})}),o.jsx(G,{children:o.jsx(Y,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",disabled:U,onClick:x,children:o.jsx(P,{src:browser.runtime.getURL("/palette.png")})})}),o.jsx(G,{children:o.jsx(Ft,{ref:$,type:"button",className:T?"pressing":"",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:u,children:o.jsx(P,{src:browser.runtime.getURL("/dice.png")})})}),o.jsx(G,{children:o.jsx(Y,{type:"button",disabled:p,onClick:f,$widgetTheme:t,children:o.jsx(P,{src:S?a?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),o.jsx(G,{children:o.jsx(Y,{type:"button",disabled:v,onClick:w,$widgetTheme:t,children:o.jsx(P,{src:browser.runtime.getURL("/lock.png")})})})]}),M&&S&&!Qt(t)&&ft.createPortal(o.jsx(mt,{theme:t,icon:a?"question":"check"}),M),R&&o.jsx(qt,{children:o.jsx(pt,{open:!0,maxWidth:"400px",content:o.jsxs(Yt,{$totamjungTheme:t,children:[o.jsx(ne,{children:"토탐정을 설치해 주셔서 감사합니다!"}),o.jsxs(ne,{children:[o.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),theme:t,direction:"left",hasCloseButton:!0,onClose:H})}),o.jsx(bt,{open:r==="gachaProblemCount",portalTarget:s,theme:t,shouldShowHotkeyMessage:!1,onClose:k,onSubmitProblemCount:L}),c&&o.jsx(it,{open:r==="gacha",portalTarget:s,theme:t,slot:c,problemCount:m,onClose:k})]})})};try{re.displayName="Widget",re.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const Uo={title:"components/Widget",component:re,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},Q={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:A(),onToast:A()}},V={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"totamjung",onChangeTheme:A(),onToast:A()}},X={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedDark",onChangeTheme:A(),onToast:A()}},J={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedRigel",onChangeTheme:A(),onToast:A()}},z={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcLight",onChangeTheme:A(),onToast:A()}},Z={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcDark",onChangeTheme:A(),onToast:A()}},ee={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcBlack",onChangeTheme:A(),onToast:A()}};var ge,fe,be;Q.parameters={...Q.parameters,docs:{...(ge=Q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(fe=Q.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Ee,Te,ve;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ve=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var xe,Se,Re;X.parameters={...X.parameters,docs:{...(xe=X.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Re=(Se=X.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var ye,Le,ke;J.parameters={...J.parameters,docs:{...(ye=J.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ke=(Le=J.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var we,Ae,Ie;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ie=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var _e,De,Ce;Z.parameters={...Z.parameters,docs:{...(_e=Z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ce=(De=Z.parameters)==null?void 0:De.docs)==null?void 0:Ce.source}}};var Be,je,Me;ee.parameters={...ee.parameters,docs:{...(Be=ee.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Me=(je=ee.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};const Ko=["Default","Totamjung","BojExtendedDark","BojExtendedRigel","SolvedAcLight","SolvedAcDark","SolvedAcBlack"];export{X as BojExtendedDark,J as BojExtendedRigel,Q as Default,ee as SolvedAcBlack,Z as SolvedAcDark,z as SolvedAcLight,V as Totamjung,Ko as __namedExportsOrder,Uo as default};
