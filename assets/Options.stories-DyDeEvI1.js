import{j as t}from"./jsx-runtime-DEdD30eg.js";import{O as a}from"./OptionsHeader-CathjTNS.js";import{H as n}from"./HiderSection-DazAfKO1.js";import{R as c}from"./RandomDefenseSection-2BW2WWdm.js";import{A as d}from"./AppearanceAndDataManageSection-DZRjoXqk.js";import{r as l}from"./index-RYns6xqu.js";import{m as x,d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import"./OptionsNav-QcPXiVWW.js";import"./SimpleModal-BmUXxdO3.js";import"./Modal-BuwJmHcH.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./IconButton-DB9afjvp.js";import"./Text-Ccd6d79x.js";import"./theme-D4_a62hg.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./TotamjungInfoModal-N3i1GbjZ.js";import"./MenuTitle-CeT6tPAk.js";import"./AlgorithmPool-BRrKSwGY.js";import"./AlgorithmList-pvpffuOk.js";import"./AlgorithmListItem-DZlaLtoX.js";import"./Checkbox-3ybQGG_E.js";import"./getSearchResults-BN2iPziz.js";import"./algorithmInfos-DkJnNrtc.js";import"./commands-CyQPP6hL.js";import"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import"./typeGuards-DuDHAUw0.js";import"./defaultValues-Ccu0oMSE.js";import"./useModal-CV8qRtLl.js";import"./HiderFieldsetMenu-Ba3Bo3CO.js";import"./Fieldset-C0hIcbsg.js";import"./Radio-CLzVlAmW.js";import"./TierDropdown-BYgCQ6Mo.js";import"./check-Dgz4zLBN.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-4MDfPYxz.js";import"./TextLink-_llWSx1B.js";import"./hiderOptionsValidator-OSwkoshH.js";import"./RandomDefenseCreateMenu-BFydnXa_.js";import"./NamedFrame-D-XXrU6-.js";import"./Input-C1KrmhYC.js";import"./Textarea-dOKYE4DH.js";import"./ErrorText-Dx7U6JC4.js";import"./RandomDefenseCreateButton-CiCktUuA.js";import"./RandomDefenseCapsuleButton-CbOA6emW.js";import"./DifficultyAdjustMenu-Dao_I8-Y.js";import"./TierSlider-s9uH12N6.js";import"./TierRange-HUKRuQiy.js";import"./TierPresetButtonList-BWb0rtnk.js";import"./TierPresetButton-BNZ10JGo.js";import"./SearchOperatorSelect-CLzYRS7H.js";import"./AlgorithmSearchInput-BsqZVxim.js";import"./MiniAlgorithmButton-BnJqfcSq.js";import"./randomDefense-Cde4U-yJ.js";import"./QuickSlotMenu--ncFDe8E.js";import"./SlotPagination-CnObMEa3.js";import"./SlotInfo-B4ePeMPW.js";import"./HotkeySwitcher-CQVhpErh.js";import"./SlotEditModal-CG4e3WNF.js";import"./Loading-DaUpprbE.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./useRandomDefenseSection-DOuC4r0K.js";import"./quickSlotsValidator-DFvl-FmR.js";import"./RandomDefenseHistoryMenu-BItyRn94.js";import"./RandomDefenseHistoryList-BmEo4GUj.js";import"./RandomDefenseHistoryItem-CjWGE5g2.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistoryValidator-CR4afrcp.js";import"./Switch-HPixtSTV.js";import"./package-F1HZRHho.js";import"./AppearanceFieldsetMenu-BxZQj45N.js";import"./fontNoValidator-BXIMmJgC.js";import"./OptionsDataManageMenu-C5Z3fPDZ.js";import"./OptionsDataResetModal-RdHgYO_T.js";import"./useConfirmInput-fbtHW9n0.js";import"./OptionsDataUploadModal-BIZggIqg.js";import"./file-upload-D_bXM9eZ.js";import"./DataFileUploadButton-C2baFhLX.js";const g=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,f=()=>{const[o,p]=l.useState("algorithmHider");return{selectedCategory:o,setSelectedCategory:p}},h=x`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,u=r.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,j=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,w=r.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,y=r.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,O=r.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${h} 3s forwards infinite;
`,C=()=>{const{selectedCategory:o,setSelectedCategory:p}=f();return t.jsxs(u,{children:[t.jsxs(j,{children:[t.jsx(a,{selectedCategory:o,onCategoryChange:p}),t.jsxs(w,{children:[t.jsx(n,{show:o==="algorithmHider"}),t.jsx(c,{show:o==="randomDefense"}),t.jsx(d,{show:o==="appearanceAndDataManage"})]})]}),t.jsx(y,{children:t.jsx(O,{src:g,alt:""})})]})},Kt={title:"components/Options",component:C,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},i={args:{}};var m,e,s;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const Nt=["Default"];export{i as Default,Nt as __namedExportsOrder,Kt as default};
