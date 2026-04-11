import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{O as A}from"./OptionsHeader-2kJRlFCy.js";import{H as C}from"./HiderSection-CyerC-T9.js";import{R as L}from"./RandomDefenseSection-B2guprhT.js";import{A as T}from"./AppearanceAndDataManageSection-Ci01vtPZ.js";import{r as m}from"./index--qcDGAq6.js";import{r as $}from"./index-B5qaPpLJ.js";import{d as s,m as S}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as u}from"./getTransparentHexColor-DN69VCBw.js";import{t as a}from"./theme-DB0vf-rZ.js";import"./index-yBjzXJbu.js";import"./OptionsNav-xC6PhO3c.js";import"./SimpleModal-BY_DSKBm.js";import"./Modal-BqfnNzBT.js";import"./close-BziWfrbF.js";import"./IconButton-CJ4kdUS9.js";import"./close-circle-Dx72CTk1.js";import"./check-circle-B-abXz3w.js";import"./TotamjungInfoModal-WNZ-NIMk.js";import"./Text-bOlMMuiR.js";import"./toPx-DeOSKary.js";import"./useModalState-vgpoPrCb.js";import"./MenuTitle-uJR2PBBg.js";import"./AlgorithmPool-CmB4Q31F.js";import"./AlgorithmList-BlKlZH6F.js";import"./AlgorithmListItem-c4t3Wl6E.js";import"./Checkbox-CnO-P2JM.js";import"./useRovingFocus-C_x1-dB5.js";import"./FallbackWithImage-CbNNH4RD.js";import"./Loading-DjjLFnc9.js";import"./loading-Ckb1CsUZ.js";import"./getSearchResults-B-QY19XD.js";import"./algorithmInfos-w49mooiO.js";import"./commands-D5hbcPyT.js";import"./hiderOptionsValidator-C_fdjVEa.js";import"./typeGuards-32w5_mfc.js";import"./checkedAlgorithmIdsSanitizer-WrrEMVrb.js";import"./defaultValues-BTwcrrCx.js";import"./hiderOptionsDataHandler-DlxmtlHx.js";import"./no-search-result-CRbCEMin.js";import"./HiderFieldsetMenu-BcGFRSJv.js";import"./Fieldset-B58b-JcY.js";import"./Radio-Apca7BY_.js";import"./TierSelect-DewWuNZW.js";import"./check-BIa-lIjI.js";import"./useSelect-BouOI_-d.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-Du9jnlek.js";import"./Input-CWi2PE1C.js";import"./hidden-tier-badge-CukGKv-l.js";import"./RandomDefenseCreateMenu-CMdMN5kH.js";import"./NamedFrame-gr0djK9q.js";import"./TextLink-VH6pJgBi.js";import"./ErrorText-AdDbzdgF.js";import"./warning-BLusDAjJ.js";import"./RandomDefenseCreateButton-AqS9mWV8.js";import"./RandomDefenseCapsuleButton-5GXagRDf.js";import"./DifficultyAdjustMenu-D6BOI8Nv.js";import"./TierSlider-SMjhbhX5.js";import"./TierRange-aIbQQFYM.js";import"./TierPresetButtonList-hvClRjql.js";import"./TierPresetButton-vGap3n1H.js";import"./SearchOperatorSelect-CLHU8FFv.js";import"./AlgorithmSearchInput-B5w-7lDH.js";import"./MiniAlgorithmButton-_NvDtWBC.js";import"./randomDefense-DE7lwrZG.js";import"./Select-eVbKKPoJ.js";import"./QueryInput-S-iqKCRt.js";import"./QuickSlotsMenu-CIBaVj62.js";import"./SlotPagination-BLMiMEwk.js";import"./SlotInfo-BZMDs4t3.js";import"./HotkeySwitcher-DSA94EPA.js";import"./SlotEditModal-dasrCReg.js";import"./trash-JRBuQ8nU.js";import"./copy-BcJBRJXh.js";import"./RandomDefenseGachaModal-DSeEiYTq.js";import"./CardBox-BsB2bItt.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-CCrnl9Qf.js";import"./ProblemCard-Dz_SVO7y.js";import"./gachaOptionsValidator-CbiMNB16.js";import"./GachaModalNotification-exTIvhkM.js";import"./GachaProblemCountInputModal-GaGwb17e.js";import"./useRandomDefenseSection-i6sZI8o4.js";import"./quickSlotsSanitizer-CC7SCrf1.js";import"./quickSlotsValidator-BfCMAMVc.js";import"./RandomDefenseHistoryMenu-BwWfGy9F.js";import"./RandomDefenseHistoryList-3Rixpkjb.js";import"./RandomDefenseHistoryItem-BpNJgPq7.js";import"./clock-B5z8M2k5.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistorySanitizer-8hvezTmS.js";import"./Switch-DgLomcOh.js";import"./package-pspu3cL5.js";import"./AppearanceFieldsetMenu-CBJXYnhX.js";import"./fontNoValidator-DiGyRE7l.js";import"./OptionsDataManageMenu-D1RkKuNv.js";import"./OptionsDataResetModal-BUSshyzp.js";import"./useConfirmInput-CTEujkIa.js";import"./OptionsDataUploadModal-DboCnt3n.js";import"./file-upload-mz0LOrA9.js";import"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import"./DataFileUploadButton-BQDWW3i8.js";import"./index-B6ujFmsw.js";const R=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,F=()=>{const[t,o]=m.useState("algorithmHider");return{selectedCategory:t,setSelectedCategory:o}},d=6,D=t=>{const{activeScope:o}=t,[p,c]=m.useState(null),[f,h]=m.useState(!0),[j,O]=m.useState({top:0,left:0,width:0,height:0}),I=p&&!f?1:0,x=useCallback(i=>{if(!i.getBoundingClientRect)return;const r=i.getBoundingClientRect();O({top:`${r.top-d}px`,left:`${r.left-d}px`,width:`${r.width+d*2}px`,height:`${r.height+d*2}px`})},[]);return m.useEffect(()=>{if(!p||f)return;let i;const r=()=>{x(p),i=requestAnimationFrame(r)};return r(),()=>{cancelAnimationFrame(i)}},[p,f,x]),m.useEffect(()=>{const i=n=>{["Tab","ArrowLeft","ArrowRight"].includes(n.code)&&h(!1)},r=()=>{h(!0)},w=n=>{n.target instanceof HTMLElement&&o.contains(n.target)&&c(n.target)},E=n=>{(!(n.relatedTarget instanceof HTMLElement)||!o.contains(n.relatedTarget))&&c(null)};return window.addEventListener("keydown",i),window.addEventListener("mousedown",r),o.addEventListener("focusin",w),o.addEventListener("focusout",E),()=>{window.removeEventListener("keydown",i),window.removeEventListener("mousedown",r),o.removeEventListener("focusin",w),o.removeEventListener("focusout",E)}},[o]),{indicatorInfo:{...j,opacity:I}}},M=S`
  0% {
    border-color: ${a.colors.ORANGE};
    box-shadow: 0 0 12px ${u(a.colors.ORANGE,.6)};
  }
  50% {
    border-color: ${a.colors.MANGO};
    box-shadow: 0 0 12px ${u(a.colors.MANGO,.6)};
  }
  100% {
    border-color: ${a.colors.ORANGE};
    box-shadow: 0 0 12px ${u(a.colors.ORANGE,.6)};
  }
`,_=s.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 3;
  pointer-events: none;
`,H=s.div`
  position: absolute;

  border: 3px solid ${({theme:t})=>t.colors.ORANGE};
  border-radius: 4px;

  box-shadow: 0 0 12px
    ${({theme:t})=>u(t.colors.ORANGE,.6)};
  will-change: top, left, width, height, opacity;
  transition:
    top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease-out;
  animation: ${M} 1.5s ease-in-out infinite;
`,g=t=>{const{activeScope:o,portalTarget:p}=t,{indicatorInfo:c}=D({activeScope:o});return $.createPortal(e.jsx(_,{children:e.jsx(H,{style:{...c}})}),p??document.body)};try{g.displayName="SlidingFocusIndicator",g.__docgenInfo={description:"",displayName:"SlidingFocusIndicator",props:{activeScope:{defaultValue:null,description:"",name:"activeScope",required:!0,type:{name:"HTMLElement"}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement"}}}}}catch{}const N=S`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,G=s.div`
  display: flex;

  width: 1310px;
  height: 685px;
  margin: 10px 0 0 20px;
`,B=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,P=s.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 600px;
`,k=s.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,z=s.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${N} 3s forwards infinite;
`,q=()=>{const{selectedCategory:t,setSelectedCategory:o}=F();return e.jsxs(G,{children:[e.jsxs(B,{children:[e.jsx(A,{selectedCategory:t,onCategoryChange:o}),e.jsxs(P,{children:[e.jsx(C,{show:t==="algorithmHider"}),e.jsx(L,{show:t==="randomDefense"}),e.jsx(T,{show:t==="appearanceAndDataManage"})]})]}),e.jsx(k,{children:e.jsx(z,{src:R,alt:""})}),e.jsx(g,{activeScope:document.body})]})},ko={title:"components/Options",component:q,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},l={args:{}};var y,b,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const zo=["Default"];export{l as Default,zo as __namedExportsOrder,ko as default};
