import{j as e}from"./jsx-runtime-SwSI87LU.js";import{r as p}from"./index-C5e9SFkp.js";import{O as I}from"./OptionsHeader-cjoXNzRK.js";import{H as A}from"./HiderSection-CzzyPL6f.js";import{R as C}from"./RandomDefenseSection-UJ9Rd8U8.js";import{A as L}from"./AppearanceAndDataManageSection-CElWQSBG.js";import{r as $}from"./index-BQcl82tf.js";import{y as a,O as S}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as u}from"./getTransparentHexColor-DN69VCBw.js";import{t as m}from"./theme-C-IIZrvZ.js";import{u as R}from"./useTranslation-CHmiwnmk.js";import"./OptionsNav-DWFRfB_N.js";import"./SimpleModal-DtgspLjt.js";import"./Modal-CqixDTbF.js";import"./close-DAYv_a5U.js";import"./IconButton-BdyC5KRL.js";import"./close-circle-CNub2vbV.js";import"./check-circle-Dwk1XCDm.js";import"./TotamjungInfoModal-CHxk5LOW.js";import"./Text-DkpU561P.js";import"./toPx-DeOSKary.js";import"./useModalState-BsXo_e1W.js";import"./check-BDBG6Lff.js";import"./useRovingFocus-B429qbOp.js";import"./MenuTitle-BqJuUVN6.js";import"./AlgorithmPool-Dl1gOKAw.js";import"./AlgorithmList-CXz74xWD.js";import"./AlgorithmListItem-D8eA8pJQ.js";import"./Checkbox-KY5Zdee9.js";import"./FallbackWithImage-aelUDOlq.js";import"./Loading-Dr9diMyn.js";import"./loading-BvLXNyKO.js";import"./getSearchResults-B9fljDQH.js";import"./algorithmInfos-yvhlfANf.js";import"./hiderOptionsValidator-CTYLfD5r.js";import"./typeGuards-DnhUVcj4.js";import"./checkedAlgorithmIdsSanitizer-CyJ-HcAT.js";import"./defaultValues-7yZfYN98.js";import"./hiderOptionsDataHandler-Duje3rJ5.js";import"./no-search-result-CRbCEMin.js";import"./HiderFieldsetMenu-DdAOdHPO.js";import"./Fieldset-DPnUSWoT.js";import"./Radio-Bbh_7gmY.js";import"./TierSelect-Bwkr_cvi.js";import"./useSelect-BAxy8jk-.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-hJ73tBr1.js";import"./Input-Dals97Fw.js";import"./hidden-tier-badge-CukGKv-l.js";import"./RandomDefenseCreateMenu-BZCFJHU1.js";import"./NamedFrame-BHHwjqxM.js";import"./TextLink-BhnHPjL5.js";import"./ErrorText-CryoO5wa.js";import"./warning-CDzyeWVE.js";import"./RandomDefenseCreateButton-DYYcu876.js";import"./RandomDefenseCapsuleButton-BZXQhXSg.js";import"./DifficultyAdjustMenu-m70cXpae.js";import"./TierSlider-5dBVNnml.js";import"./TierRange--YUAPKMG.js";import"./TierPresetButtonList-GeSYt4lG.js";import"./TierPresetButton-BvASmFbj.js";import"./SearchOperatorSelect-Cme_kog4.js";import"./AlgorithmSearchInput-J6chOaqt.js";import"./MiniAlgorithmButton-DPTcHpX1.js";import"./randomDefense-JL_bjho1.js";import"./Select-DkpS9sOg.js";import"./QueryInput-D38iz6TF.js";import"./QuickSlotsMenu-Dte0-Kw7.js";import"./SlotPagination-CpFA0fD3.js";import"./SlotInfo-DI-MAO-q.js";import"./HotkeySwitcher-BMBXHaUt.js";import"./SlotEditModal-N83-shmd.js";import"./trash-C-GIiUBp.js";import"./copy-DI2J0EY7.js";import"./RandomDefenseGachaModal-DJqWF0-X.js";import"./CardBox-DF9AB3NI.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-C2vIUOty.js";import"./ProblemCard-5my2YwMW.js";import"./gachaOptionsValidator-CLdTdrhO.js";import"./GachaModalNotification-6H9ucwZb.js";import"./GachaProblemCountInputModal-JbaHnfNr.js";import"./useRandomDefenseSection-g20avKyu.js";import"./quickSlotsSanitizer-QJ_VXAzF.js";import"./quickSlotsValidator-Dbc2diwO.js";import"./RandomDefenseHistoryMenu-986UQ5lI.js";import"./RandomDefenseHistoryList-vxVLmX8V.js";import"./RandomDefenseHistoryItem-B3b44H2Z.js";import"./clock-CcSsg4p0.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistorySanitizer-BNj6Bgm0.js";import"./Switch-C_gY_nxm.js";import"./package-CjfmvTuQ.js";import"./AppearanceFieldsetMenu-CzSqtrPO.js";import"./fontNoValidator-CN7nPin1.js";import"./OptionsDataManageMenu-Bx5eP5Vu.js";import"./OptionsDataResetModal-DDxClcjS.js";import"./useConfirmInput-MM-p6_em.js";import"./OptionsDataUploadModal-D-OdAzTX.js";import"./file-upload-DzuOifK9.js";import"./isShouldShowWelcomeMessageDataValidator-BKshx6sc.js";import"./DataFileUploadButton-BwA9LGrT.js";import"./index-vofeE47f.js";const F=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,D=()=>{const[t,o]=p.useState("algorithmHider");return{selectedCategory:t,setSelectedCategory:o}},d=6,M=t=>{const{activeScope:o}=t,[i,c]=p.useState(null),[f,h]=p.useState(!0),[O,j]=p.useState({top:0,left:0,width:0,height:0}),T=i&&!f?1:0,x=useCallback(n=>{if(!n.getBoundingClientRect)return;const r=n.getBoundingClientRect();j({top:`${r.top-d}px`,left:`${r.left-d}px`,width:`${r.width+d*2}px`,height:`${r.height+d*2}px`})},[]);return p.useEffect(()=>{if(!i||f)return;let n;const r=()=>{x(i),n=requestAnimationFrame(r)};return r(),()=>{cancelAnimationFrame(n)}},[i,f,x]),p.useEffect(()=>{const n=s=>{["Tab","ArrowLeft","ArrowRight"].includes(s.code)&&h(!1)},r=()=>{h(!0)},w=s=>{s.target instanceof HTMLElement&&o.contains(s.target)&&c(s.target)},E=s=>{(!(s.relatedTarget instanceof HTMLElement)||!o.contains(s.relatedTarget))&&c(null)};return window.addEventListener("keydown",n),window.addEventListener("mousedown",r),o.addEventListener("focusin",w),o.addEventListener("focusout",E),()=>{window.removeEventListener("keydown",n),window.removeEventListener("mousedown",r),o.removeEventListener("focusin",w),o.removeEventListener("focusout",E)}},[o]),{indicatorInfo:{...O,opacity:T}}},_=S`
  0% {
    border-color: ${m.colors.ORANGE};
    box-shadow: 0 0 12px ${u(m.colors.ORANGE,.6)};
  }
  50% {
    border-color: ${m.colors.MANGO};
    box-shadow: 0 0 12px ${u(m.colors.MANGO,.6)};
  }
  100% {
    border-color: ${m.colors.ORANGE};
    box-shadow: 0 0 12px ${u(m.colors.ORANGE,.6)};
  }
`,H=a.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 9999;
  pointer-events: none;
`,N=a.div`
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
  animation: ${_} 1.5s ease-in-out infinite;
`,g=t=>{const{activeScope:o,portalTarget:i}=t,{indicatorInfo:c}=M({activeScope:o});return $.createPortal(e.jsx(H,{children:e.jsx(N,{style:{...c}})}),i??document.body)};try{g.displayName="SlidingFocusIndicator",g.__docgenInfo={description:"",displayName:"SlidingFocusIndicator",props:{activeScope:{defaultValue:null,description:"",name:"activeScope",required:!0,type:{name:"HTMLElement"}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement"}}}}}catch{}const G=S`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,B=a.div`
  display: flex;

  width: 1310px;
  height: 685px;
  margin: 10px 0 0 20px;
`,P=a.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,k=a.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 600px;
`,z=a.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,q=a.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${G} 3s forwards infinite;
`,Y=()=>{const{selectedCategory:t,setSelectedCategory:o}=D(),{t:i}=R();return p.useEffect(()=>{document.title=i("browserTab.optionsTitle")},[i]),e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(I,{selectedCategory:t,onCategoryChange:o}),e.jsxs(k,{children:[e.jsx(A,{show:t==="algorithmHider"}),e.jsx(C,{show:t==="randomDefense"}),e.jsx(L,{show:t==="appearanceAndDataManage"})]})]}),e.jsx(z,{children:e.jsx(q,{src:F,alt:""})}),e.jsx(g,{activeScope:document.body})]})},ko={title:"components/Options",component:Y,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},l={args:{}};var y,b,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const zo=["Default"];export{l as Default,zo as __namedExportsOrder,ko as default};
