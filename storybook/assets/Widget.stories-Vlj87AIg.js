import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index--qcDGAq6.js";import{C}from"./commands-D5hbcPyT.js";import{i as Pe,a as rt}from"./hiderOptionsValidator-C_fdjVEa.js";import{A as st}from"./algorithmInfos-w49mooiO.js";import{b as at}from"./defaultValues-BTwcrrCx.js";import{b as ue,c as me}from"./quickSlotsValidator-BfCMAMVc.js";import{i as it,R as ct}from"./RandomDefenseGachaModal-DSeEiYTq.js";import{u as lt}from"./useModalState-vgpoPrCb.js";import{s as dt}from"./index-CElCL35T.js";import{b as ut}from"./typeGuards-32w5_mfc.js";import{i as mt}from"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import{I as pt}from"./InspectResultIcon-BQYD3OiH.js";import{S as ht}from"./SpeechBubble-BxGpnjGI.js";import{t as d}from"./theme-DB0vf-rZ.js";import{d as I,m as Ne,l as gt}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as U}from"./getTransparentHexColor-DN69VCBw.js";import{r as ft}from"./index-B5qaPpLJ.js";import{G as bt}from"./GachaProblemCountInputModal-BjzSMOb7.js";import{f as A}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";import"./IconButton-CJ4kdUS9.js";import"./Modal-BqfnNzBT.js";import"./close-BziWfrbF.js";import"./copy-BcJBRJXh.js";import"./warning-BLusDAjJ.js";import"./check-BIa-lIjI.js";import"./loading-Ckb1CsUZ.js";import"./hidden-tier-badge-CukGKv-l.js";import"./CardBox-BsB2bItt.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-CCrnl9Qf.js";import"./ProblemCard-Dz_SVO7y.js";import"./useRovingFocus-C_x1-dB5.js";import"./gachaOptionsValidator-CbiMNB16.js";import"./GachaModalNotification-exTIvhkM.js";import"./index-B6ujFmsw.js";import"./Input-CbOSjkV9.js";import"./toPx-DeOSKary.js";import"./Text-bOlMMuiR.js";import"./check-circle-B-abXz3w.js";import"./randomDefense-DE7lwrZG.js";const N=(e,t)=>{const s=document.querySelector(e);return s instanceof HTMLElement?s:null},ae=(e,t)=>{const s=Array.from(document.querySelectorAll(e)),l=[];return s.forEach(i=>{i instanceof HTMLElement&&l.push(i)}),l},Et=()=>{const[e,t]=n.useState(!1),[s,l]=n.useState(0),[i,a]=n.useState("보기");return n.useEffect(()=>{if(!e){a("보기");return}const c=()=>{const v=s-Date.now();if(v<=0){a("보기"),t(!1);return}const S=Math.floor(v/36e5),y=String(Math.floor(v%36e5/6e4)).padStart(2,"0"),r=String(Math.floor(v%6e4/1e3)).padStart(2,"0");a(`잠김 (🔒︎${S}:${y}:${r} 후 보기 가능)`)},p=setInterval(()=>{c()},100);return()=>{clearInterval(p)}},[e,s]),{isTimerRunning:e,timerDisplayText:i,setTimerByDuration:c=>{const p=Date.now()+c;l(p),t(!0)},setTimerByEndTime:c=>{l(c),t(!0)},clearTimer:()=>{t(!1)}}},Tt=e=>{const{checkedAlgorithmIds:t,hiderOptions:s}=e,{isTimerRunning:l,timerDisplayText:i,setTimerByDuration:a,setTimerByEndTime:u,clearTimer:T}=Et(),[m,c]=n.useState(!1),[p,v]=n.useState(!1),[S,y]=n.useState(!1),[r,b]=n.useState(!1),g=n.useRef(null),R=n.useRef(null);return n.useEffect(()=>{(async()=>{const x=await browser.runtime.sendMessage({command:C.GET_REMAINING_LOCK_TIME});typeof x!="number"||x===0||a(x)})()},[]),n.useEffect(()=>{var k;if(!t||!s)return;const h=()=>{const f=N(".show-spoiler");if(!f)return;f.getAttribute("disabled")&&y(!0);const w=f.cloneNode(!0);w instanceof HTMLElement&&(g.current=w,f.after(w),f.remove(),R.current=N(".spoiler"),v(!0))},x=()=>{const f=ae(".spoiler-link"),w=f.map(D=>D.innerText.replace(/\u2013/g,"-").toLowerCase());let H=!1;const W=[];w.forEach((D,K)=>{var F;const O=(F=st.find(q=>q.name.toLowerCase()===D||q.englishName.toLowerCase()===D))==null?void 0:F.id;(O===void 0||!t.includes(O))&&(H=!0,W.push(K))}),W.forEach(D=>{f[D].innerText+=" 📌",f[D].style.fontWeight="800"}),c(H),b(!0)},L=f=>{f.preventDefault(),!l&&(!g.current||!R.current||(g.current.style.display="none",R.current.style.display="block",y(!0)))};if(h(),r||x(),(k=g.current)==null||k.addEventListener("click",L),g.current){if(l){g.current.style.cursor="not-allowed",g.current.style.textDecorationColor="transparent";return}g.current.style.cursor="pointer",g.current.style.textDecorationColor="inherit"}return()=>{var f;(f=g.current)==null||f.removeEventListener("click",L)}},[t,s,l,r]),n.useEffect(()=>{g.current&&(g.current.innerText=i)},[i]),{hasUnknownAlgorithms:m,isSpoilerExist:p,isSpoilerOpened:S,setTimerByDuration:a,setTimerByEndTime:u,toggleTimer:async()=>{if(l){T(),browser.runtime.sendMessage({command:C.REMOVE_SINGLE_TAG_LOCK_TIMER});return}browser.runtime.sendMessage({command:C.ADD_SINGLE_TAG_LOCK_TIMER});const h=await browser.runtime.sendMessage({command:C.FETCH_HIDER_OPTIONS});if(!Pe(h))return;const{hours:x,minutes:L}=h.problemTagLockDuration,k=x*36e5+L*6e4;a(k)}}},pe=(e,t,s)=>e==="Alt"||t==="AltLeft"||t==="AltRight"||e==="F2"||t==="F2"||s||!isNaN(Number(e))||t.startsWith("Digit"),vt=e=>{const{requiredLongPressTimeInMilliseconds:t,baseKey:s,onPress:l,onLongPress:i}=e,[a,u]=n.useState(s),[T,m]=n.useState(!1),c=n.useRef(null),p=n.useRef(null),v=n.useRef(!1),S=n.useRef(void 0),y=R=>{const{key:E,code:h,altKey:x}=R;if(!(v.current||T||!pe(E,h,x))&&(c.current===null&&a==="Alt"&&(E==="Alt"||h==="AltLeft"||h==="AltRight"||x)&&(c.current=h==="AltRight"?"AltRight":"AltLeft"),c.current===null&&a==="F2"&&(E==="F2"||h==="F2")&&(c.current="F2"),p.current===null&&c.current!==null)){isNaN(Number(E))||(p.current=Number(E)),h.startsWith("Digit")&&(p.current=Number(h.at(-1)));const L=p.current;typeof L=="number"&&ue(L)&&(v.current=!0,S.current=setTimeout(()=>{m(!0),i(L)},t))}},r=R=>{const{key:E,code:h,altKey:x}=R;if(T||!pe(E,h,x))return;const L=a==="Alt"&&h===c.current||c.current==="AltLeft"&&(E==="Alt"||E==="AltLeft"),k=a==="F2"&&(E==="F2"||h===c.current),f=p.current===Number(E)||p.current===Number(h.at(-1));if(L||k||f){const w=p.current;c.current=null,p.current=null,clearTimeout(S.current),v.current=!1,typeof w=="number"&&ue(w)&&!T&&(l(w),m(!0))}},b=()=>{c.current=null,p.current=null,v.current=!1,clearTimeout(S.current)},g=()=>{m(!1),c.current=null,p.current=null,v.current=!1};return n.useEffect(()=>{u(s)},[s]),n.useEffect(()=>(document.addEventListener("keydown",y),document.addEventListener("keyup",r),document.addEventListener("visibilitychange",b),window.addEventListener("blur",b),()=>{document.removeEventListener("keydown",y),document.removeEventListener("keyup",r),document.removeEventListener("visibilitychange",b),window.removeEventListener("blur",b),clearTimeout(S.current)}),[a,T]),{unlockHotkey:g}},xt=e=>{const{onToast:t,onGachaStart:s}=e,[l,i]=n.useState(!1),a=n.useRef(l),u=n.useRef(at),{unlockHotkey:T}=vt({baseKey:u.current.hotkey,requiredLongPressTimeInMilliseconds:1e3,onPress:r=>c(r,"press"),onLongPress:r=>c(r,"keyLongPress")});n.useEffect(()=>((async()=>{const b=await browser.runtime.sendMessage({command:C.FETCH_QUICK_SLOT_OPTIONS});me(b)&&(u.current=b,a.current=!0,i(!0))})(),browser.storage.onChanged.addListener(m),()=>{browser.storage.onChanged.removeListener(m)}),[]);const m=(r,b)=>{if(b!=="local"||!("quickSlotOptions"in r))return;const{newValue:g}=r.quickSlotOptions;me(g)&&(u.current=g)},c=async(r,b)=>{if(!a.current)return;a.current=!1,i(!1);const{slots:g}=u.current,R=g[r];if(R.isEmpty){(b==="click"||b==="mouseLongPress")&&t({title:`${r}번 슬롯은 현재 비어 있습니다.`,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:["추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!","설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다."]},8e3),a.current=!0,i(!0);return}if(b==="keyLongPress"||b==="mouseLongPress"){s(R),i(!1);return}const E=await browser.runtime.sendMessage({command:C.GET_RANDOM_DEFENSE_RESULT,query:R.query,problemCount:1});if(!it(E)){t({title:"데이터 불일치가 발견되었습니다.",mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:"개발자에게 이 문제가 발생했음을 알려 주세요."},8e3),a.current=!0,i(!0);return}if(!E.success){const{errorMessage:L,errorDescriptions:k}=E;t({title:L,mainIconSrc:browser.runtime.getURL("/dice.png"),descriptions:k},8e3),a.current=!0,i(!0);return}const{problemInfos:h}=E,{problemId:x}=h[0];browser.runtime.sendMessage({command:C.ADD_RANDOM_DEFENSE_HISTORY_INFOS,randomDefenseHistoryInfos:[{...h[0],createdAt:new Date().toISOString()}]}),location.href=`https://acmicpc.net/problem/${x}`};return{isRandomDefenseAvailable:l,performRandomDefenseByClick:()=>{c(u.current.selectedSlotNo,"click")},performRandomDefenseByMouseLongPress:()=>{c(u.current.selectedSlotNo,"mouseLongPress")},enableRandomDefense:()=>{a.current=!0,i(!0),T()},disableRandomDefense:()=>{a.current=!1,i(!1)}}},he=1e3,St=e=>{const{onClick:t,onLongPress:s}=e,[l,i]=n.useState(!1),a=n.useRef(!1),u=n.useRef(void 0),T=n.useRef(null),m=n.useRef(null),c=()=>{m.current&&m.current!=="Mouse"||(m.current="Mouse",clearTimeout(u.current),u.current=setTimeout(()=>{s(),a.current=!1,i(!1),m.current=null},he),i(!0),a.current=!0)},p=()=>{m.current==="Mouse"&&(a.current&&(t(),clearTimeout(u.current)),i(!1),a.current=!1,m.current=null)},v=()=>{m.current==="Mouse"&&(clearTimeout(u.current),i(!1),a.current=!1,m.current=null)},S=r=>{r.repeat||r.code!=="Space"&&r.code!=="Enter"||m.current&&m.current!==r.code||(m.current=r.code,clearTimeout(u.current),u.current=setTimeout(()=>{s(),a.current=!1,i(!1),m.current=null},he),i(!0),a.current=!0)},y=r=>{r.code!=="Space"&&r.code!=="Enter"||m.current===r.code&&(a.current&&(t(),clearTimeout(u.current)),i(!1),a.current=!1,m.current=null)};return n.useEffect(()=>{const r=T.current;if(r)return r.addEventListener("mousedown",c),r.addEventListener("mouseup",p),r.addEventListener("mouseleave",v),r.addEventListener("keydown",S),r.addEventListener("keyup",y),()=>{clearTimeout(u.current),r.removeEventListener("mousedown",c),r.removeEventListener("mouseup",p),r.removeEventListener("mouseleave",v),r.removeEventListener("keydown",S),r.removeEventListener("keyup",y)}},[T.current]),{isPressing:l,longPressRef:T}},He=/\d+(?=\.svg$)/,yt=/\d+$/,Rt=/^\d+/,Lt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",kt=".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a",wt='.loginbar > li > a[href^="/user/"]',At=[".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])","#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",`.nav.nav-pills.no-print.problem-menu:not(:has(a[href^="https://solved.ac/contribute/"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])`,".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(3) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".row:has(li[class='active'] > a[href='/problem/added']) ~ .row .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) > td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",".col-md-12:has(a[href^='/group/workbook']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])"],_t=".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span",Ct=".problem-link-style-box:not(.result-ac):not([data-tier='0'])",Dt=(e,t)=>{It(e,t),t&&(Bt(e),jt(e),Ot(e))},It=async(e,t)=>{const s=N(Lt),l=N(wt),i=N(kt);if(!(s instanceof HTMLImageElement)||!l||!i)return;const a=i.innerText.match(Rt),u=s.src.match(He);if(!a||!u)return;const T=l.innerText.trim(),m=Number(a),c=Number(u);if(!ut(c))return;const p=await browser.runtime.sendMessage({command:C.IS_USER_SOLVED_PROBLEM,handle:T,problemId:m});if(p==="unknown"){s.remove();return}if(p){s.style.content=`url(${JSON.stringify(dt[c])}`;return}c>=e&&t&&s.classList.add("warn")},Bt=e=>{[...At.map(s=>ae(s)).flat()].forEach(s=>{if(s instanceof HTMLImageElement){const i=s.src.match(He);i&&Number(i)>=e&&s.classList.add("warn")}})},jt=e=>{const t=N(_t);if(!t)return;const s=t.classList[0];if(!s)return;const l=s.match(yt);l&&Number(l)>=e&&t.classList.add("warn")},Ot=e=>{ae(Ct).forEach(s=>{const l=s.getAttribute("data-tier");l&&Number(l)>=e&&s.classList.add("warn")})},Mt=e=>{const{theme:t,onChangeTheme:s,onToast:l}=e,[i,a]=n.useState(!1),[u,T]=n.useState(!1),[m,c]=n.useState(void 0),[p,v]=n.useState(void 0),[S,y]=n.useState(!1),[r,b]=n.useState(!1),[g,R]=n.useState(null),[E,h]=n.useState(0),[x,L]=n.useState(!1),{hasUnknownAlgorithms:k,isSpoilerExist:f,isSpoilerOpened:w,toggleTimer:H}=Tt({checkedAlgorithmIds:m,hiderOptions:p}),{activeModalName:W,openModal:D,closeModal:K}=lt(),{isRandomDefenseAvailable:O,performRandomDefenseByClick:F,performRandomDefenseByMouseLongPress:q,enableRandomDefense:$e}=xt({onToast:l,onGachaStart:_=>et(_)}),{isPressing:Ue,longPressRef:Ke}=St({onClick:F,onLongPress:q}),ce=n.useRef(null),le=n.useRef(null),ne=n.useRef(null),Ge=!O,de=!f||w||S,qe=!f||w,Ye=f&&S;n.useEffect(()=>{const _=async()=>{const[M,$,j]=await Promise.all([browser.runtime.sendMessage({command:C.FETCH_CHECKED_ALGORITHM_IDS}),browser.runtime.sendMessage({command:C.FETCH_HIDER_OPTIONS}),browser.runtime.sendMessage({command:C.FETCH_SHOULD_SHOW_WELCOME_MESSAGE})]);if(!rt(M)||!Pe($)||!mt(j))return;const{algorithmHiderUsage:Y,shouldHideTier:tt,shouldWarnHighTier:ot,warnTier:nt}=$;tt&&Dt(nt,ot),Y==="always"&&y(!0),c(M),v($),b(j),L(!0)},B=M=>{var Y;const j=M.composedPath()[0];(j===null||j instanceof Node&&j instanceof HTMLElement&&!((Y=ce.current)!=null&&Y.contains(j)))&&(ne.current=j)};return _(),document.addEventListener("focusin",B),()=>{document.removeEventListener("focusin",B)}},[]),n.useEffect(()=>{document.documentElement.setAttribute("totamjungTheme",t==="totamjung"?"totamjung":"none")},[t]),n.useEffect(()=>{const _=B=>{var M;B.altKey&&B.shiftKey&&B.code==="KeyW"&&(T($=>!$),u&&ne.current&&ne.current.focus(),u||(M=le.current)==null||M.focus())};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[u]);const Qe=()=>{i||(a(!0),setTimeout(()=>{window.scroll({top:0,behavior:"smooth"})},1e3/3))},Ve=()=>{a(!1)},Xe=_=>{_.preventDefault(),_.stopPropagation(),T(B=>!B)},Je=()=>{browser.runtime.sendMessage({command:C.OPEN_OPTIONS_PAGE})},ze=()=>{x&&s(t==="totamjung"?"none":"totamjung")},Ze=()=>{de||(y(!0),l(k?{title:"이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-question.png")}:{title:"이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.",mainIconSrc:browser.runtime.getURL("/inspect-result-check.png")},3500))},et=_=>{D("gachaProblemCount"),R(_)};return{isExpanded:u,isScrollingToTop:i,hasUnknownAlgorithms:k,isRandomDefenseButtonDisabled:Ge,isRandomDefenseButtonPressing:Ue,gachaProblemCount:E,gachaSlot:g,isInspectButtonDisabled:de,isLockButtonDisabled:qe,shouldShowInspectIcon:Ye,shouldShowWelcomeMessage:r,activeModalName:W,isLoaded:x,scrollToTop:Qe,endScrollingAnimation:Ve,toggleWidgetOpen:Xe,openOptionsPage:Je,toggleTotamjungTheme:ze,openGachaModalWithProblemCount:_=>{g&&(D("gacha"),h(_))},suspendGacha:()=>{K(),R(null),$e()},showInspectResultUsingPopup:Ze,toggleTimer:H,closeWelcomeMessage:()=>{b(!1),browser.runtime.sendMessage({command:C.SAVE_SHOULD_SHOW_WELCOME_MESSAGE,shouldShowWelcomeMessage:!1})},containerRef:ce,topButtonRef:le,randomDefenseButtonRef:Ke}},oe={none:d.colors.BOJ_BLUE,totamjung:d.colors.BROWN_300,solvedAcLight:d.solvedAcColors.LIME,solvedAcDark:d.solvedAcColors.LIME,solvedAcBlack:d.solvedAcColors.LIME,bojExtendedDark:d.bojExtendedColors.GRAY_600,bojExtendedRigel:d.bojExtendedColors.SKY_BLUE},Pt={none:d.colors.WHITE,totamjung:d.colors.BROWN_700,solvedAcLight:d.colors.WHITE,solvedAcDark:d.colors.WHITE,solvedAcBlack:d.colors.WHITE,bojExtendedDark:d.bojExtendedColors.GRAY_300,bojExtendedRigel:d.colors.OFF_WHITE},We={none:d.filters.BOJ_BLUE,totamjung:d.filters.BROWN_300,solvedAcLight:d.solvedAcFilters.LIME,solvedAcDark:d.solvedAcFilters.LIME,solvedAcBlack:d.solvedAcFilters.LIME,bojExtendedDark:d.bojExtendedFilters.GRAY_600,bojExtendedRigel:d.bojExtendedFilters.SKY_BLUE},Nt={none:"transparent",totamjung:U(d.colors.BLACK,.31),solvedAcLight:"transparent",solvedAcDark:U(d.colors.BLACK,.31),solvedAcBlack:U(d.colors.BLACK,.31),bojExtendedDark:U(d.colors.BLACK,.31),bojExtendedRigel:U(d.colors.BLACK,.31)},Ht={none:d.colors.OFF_WHITE,totamjung:d.colors.OFF_WHITE,solvedAcLight:d.colors.BLACK,solvedAcDark:d.colors.OFF_WHITE,solvedAcBlack:d.colors.OFF_WHITE,bojExtendedDark:d.colors.OFF_WHITE,bojExtendedRigel:d.colors.OFF_WHITE},Wt=I.div`
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
`,Ft=Ne`
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
`,ie=I.button`
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
      ${({$widgetTheme:e})=>U(oe[e],.4)} !important;
  }

  & span {
    background-color: ${({$widgetTheme:e})=>Pt[e]};
  }
`,$t=I.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${ie}.animate > & {
    animation: ${Ft} 1s forwards;
  }
`,ge=I.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({$direction:e})=>e==="left"?"translate(3px, 11px) rotate(-45deg)":"translate(12px, 11px) rotate(45deg)"};
`,Ut=I.ul`
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
  background-color: ${({$widgetTheme:e})=>Nt[e]};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${ie}:active + & {
    scale: 0.93;
  }
`,G=I.li`
  width: 36px;
  height: 32px;
`,Fe=gt`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;
`,P=I.img.attrs({draggable:!1})`
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
`,Q=I.button`
  ${Fe}

  & > ${P} {
    filter: ${({$widgetTheme:e})=>We[e]};
  }
`,Kt=Ne`
  from {
    mask-position: 0% 0%;
  }

  to {
    mask-position: 0% 100%;
  }
`,Gt=I.button`
  ${Fe}

  & > ${P} {
    filter: ${({$widgetTheme:e})=>We[e]};
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

    animation: ${Kt} 0.8s 0.2s forwards linear;
  }
`,qt=I.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`,re=I.span`
  font-size: 14px;
  line-height: 14px;
`,Yt=I.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  & > ${re} {
    color: ${({$totamjungTheme:e})=>Ht[e]};
  }
`,Qt=e=>typeof e=="string"&&["solvedAcLight","solvedAcDark","solvedAcBlack"].includes(e),se=e=>{const{theme:t,rootElement:s}=e,{isExpanded:l,isScrollingToTop:i,hasUnknownAlgorithms:a,isRandomDefenseButtonDisabled:u,isRandomDefenseButtonPressing:T,gachaProblemCount:m,gachaSlot:c,isInspectButtonDisabled:p,isLockButtonDisabled:v,shouldShowInspectIcon:S,shouldShowWelcomeMessage:y,activeModalName:r,isLoaded:b,scrollToTop:g,endScrollingAnimation:R,toggleWidgetOpen:E,openOptionsPage:h,toggleTotamjungTheme:x,openGachaModalWithProblemCount:L,suspendGacha:k,showInspectResultUsingPopup:f,toggleTimer:w,closeWelcomeMessage:H,containerRef:W,topButtonRef:D,randomDefenseButtonRef:K}=Mt(e),O=N("#problem_title"),F=t!=="none"&&t!=="totamjung";return o.jsx(Wt,{ref:W,children:b&&o.jsxs(o.Fragment,{children:[o.jsx(ie,{type:"button",className:i?"animate":"",$widgetTheme:t,onClick:g,onContextMenu:E,"aria-label":"토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요.",ref:D,children:o.jsxs($t,{onAnimationEnd:R,children:[o.jsx(ge,{$direction:"left"}),o.jsx(ge,{$direction:"right"})]})}),o.jsxs(Ut,{$widgetTheme:t,$isExpanded:l,children:[o.jsx(G,{children:o.jsx(Q,{type:"button",$widgetTheme:t,"aria-label":"토탐정 설정 페이지로 이동",onClick:h,children:o.jsx(P,{src:browser.runtime.getURL("/settings.png")})})}),o.jsx(G,{children:o.jsx(Q,{type:"button",$widgetTheme:t,"aria-label":t==="none"?"토탐정 테마 켜기":"토탐정 테마 끄기",disabled:F,onClick:x,children:o.jsx(P,{src:browser.runtime.getURL("/palette.png")})})}),o.jsx(G,{children:o.jsx(Gt,{ref:K,type:"button",className:T?"pressing":"",$widgetTheme:t,"aria-label":"랜덤 디펜스 진행하기",disabled:u,children:o.jsx(P,{src:browser.runtime.getURL("/dice.png")})})}),o.jsx(G,{children:o.jsx(Q,{type:"button",disabled:p,onClick:f,$widgetTheme:t,children:o.jsx(P,{src:S?a?browser.runtime.getURL("/inspect-result-question.png"):browser.runtime.getURL("/inspect-result-check.png"):browser.runtime.getURL("/search.png")})})}),o.jsx(G,{children:o.jsx(Q,{type:"button",disabled:v,onClick:w,$widgetTheme:t,children:o.jsx(P,{src:browser.runtime.getURL("/lock.png")})})})]}),O&&S&&!Qt(t)&&ft.createPortal(o.jsx(pt,{theme:t,icon:a?"question":"check"}),O),y&&o.jsx(qt,{children:o.jsx(ht,{open:!0,maxWidth:"400px",content:o.jsxs(Yt,{$totamjungTheme:t,children:[o.jsx(re,{children:"토탐정을 설치해 주셔서 감사합니다!"}),o.jsxs(re,{children:[o.jsx("strong",{children:"위젯을 우클릭"}),"하여 토탐정의 여러 기능들을 활용해 보세요."]})]}),theme:t,direction:"left",hasCloseButton:!0,onClose:H})}),o.jsx(bt,{open:r==="gachaProblemCount",portalTarget:s,theme:t,shouldShowHotkeyMessage:!1,onClose:k,onSubmitProblemCount:L}),c&&o.jsx(ct,{open:r==="gacha",portalTarget:s,theme:t,slot:c,problemCount:m,onClose:k})]})})};try{se.displayName="Widget",se.__docgenInfo={description:"",displayName:"Widget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},rootElement:{defaultValue:null,description:"",name:"rootElement",required:!0,type:{name:"HTMLElement"}},onChangeTheme:{defaultValue:null,description:"",name:"onChangeTheme",required:!0,type:{name:"(theme: TotamjungTheme) => void"}},onToast:{defaultValue:null,description:"",name:"onToast",required:!0,type:{name:"(toastInfo: ToastInfo, duration: number) => void"}}}}}catch{}const Fo={title:"components/Widget",component:se,argTypes:{theme:{description:"위젯에 적용될 테마입니다."},onChangeTheme:{description:"테마를 변경해야 할 경우 실행시킬 콜백 함수입니다."},onToast:{description:"토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다."}}}},V={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"none",onChangeTheme:A(),onToast:A()}},X={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"totamjung",onChangeTheme:A(),onToast:A()}},J={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedDark",onChangeTheme:A(),onToast:A()}},z={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"bojExtendedRigel",onChangeTheme:A(),onToast:A()}},Z={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcLight",onChangeTheme:A(),onToast:A()}},ee={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcDark",onChangeTheme:A(),onToast:A()}},te={decorators:[e=>o.jsx("div",{style:{width:"100%",height:"240px"},children:o.jsx(e,{})})],args:{rootElement:document.body,theme:"solvedAcBlack",onChangeTheme:A(),onToast:A()}};var fe,be,Ee;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ee=(be=V.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};var Te,ve,xe;X.parameters={...X.parameters,docs:{...(Te=X.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(xe=(ve=X.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Se,ye,Re;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(ye=J.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var Le,ke,we;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Ae,_e,Ce;Z.parameters={...Z.parameters,docs:{...(Ae=Z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=Z.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var De,Ie,Be;ee.parameters={...ee.parameters,docs:{...(De=ee.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Be=(Ie=ee.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var je,Oe,Me;te.parameters={...te.parameters,docs:{...(je=te.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Me=(Oe=te.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};const $o=["Default","Totamjung","BojExtendedDark","BojExtendedRigel","SolvedAcLight","SolvedAcDark","SolvedAcBlack"];export{J as BojExtendedDark,z as BojExtendedRigel,V as Default,te as SolvedAcBlack,ee as SolvedAcDark,Z as SolvedAcLight,X as Totamjung,$o as __namedExportsOrder,Fo as default};
