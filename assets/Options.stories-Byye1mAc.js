import{j as t}from"./jsx-runtime-DEdD30eg.js";import{O as a}from"./OptionsHeader-Bq6H44pF.js";import{H as n}from"./HiderSection-3WWuv8Ww.js";import{R as c}from"./RandomDefenseSection-06cFo-dA.js";import{A as d}from"./AppearanceAndDataManageSection-DJTe8MLC.js";import{r as l}from"./index-RYns6xqu.js";import{m as x,d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import"./OptionsNav-QcPXiVWW.js";import"./SimpleModal-_wuSfgSA.js";import"./Modal-BuwJmHcH.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./IconButton-DB9afjvp.js";import"./Text-B2xQYZk4.js";import"./theme-D4zHi0MN.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./TotamjungInfoModal-C3oQyNd2.js";import"./MenuTitle-CeT6tPAk.js";import"./AlgorithmPool-CNjR1Y98.js";import"./AlgorithmList-pvpffuOk.js";import"./AlgorithmListItem-DZlaLtoX.js";import"./Checkbox-3ybQGG_E.js";import"./getSearchResults-CsPxK2_U.js";import"./algorithmInfos-BNLNF_TH.js";import"./commands-CyQPP6hL.js";import"./checkedAlgorithmIdsValidator-B1pfwuo8.js";import"./typeGuards-KkNNuKow.js";import"./defaultValues-Ccu0oMSE.js";import"./useModal-CV8qRtLl.js";import"./HiderFieldsetMenu-CzR3KjUv.js";import"./Fieldset-8Clchqa6.js";import"./Radio-CLzVlAmW.js";import"./TierSelect-CReBr5Vc.js";import"./check-Dgz4zLBN.js";import"./useSelect-C4szZV9I.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-Cf6Evd_8.js";import"./TextLink-_llWSx1B.js";import"./hiderOptionsValidator-BYGhp57E.js";import"./RandomDefenseCreateMenu-aTlCRz_1.js";import"./NamedFrame-D-XXrU6-.js";import"./Input-C1KrmhYC.js";import"./Textarea-dOKYE4DH.js";import"./ErrorText-Dx7U6JC4.js";import"./RandomDefenseCreateButton-CiCktUuA.js";import"./RandomDefenseCapsuleButton-CbOA6emW.js";import"./DifficultyAdjustMenu-BVsgI0HS.js";import"./TierSlider-fHQWNPs0.js";import"./TierRange-HUKRuQiy.js";import"./TierPresetButtonList-xAN_5A-W.js";import"./TierPresetButton-DtKQyprX.js";import"./SearchOperatorSelect-DVJCQZC6.js";import"./AlgorithmSearchInput-C_id9w8r.js";import"./MiniAlgorithmButton-BnJqfcSq.js";import"./randomDefense-CSn7TOcu.js";import"./Select-B2V7feow.js";import"./QuickSlotMenu-Ibxn0kdU.js";import"./SlotPagination-CnObMEa3.js";import"./SlotInfo-CXIfulDQ.js";import"./HotkeySwitcher-CdFIXWp5.js";import"./SlotEditModal-CcjAWjN-.js";import"./Loading-DaUpprbE.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./useRandomDefenseSection-BdazPe3Y.js";import"./quickSlotsValidator-q0BqV3lI.js";import"./RandomDefenseHistoryMenu-NTWh9loz.js";import"./RandomDefenseHistoryList-BmEo4GUj.js";import"./RandomDefenseHistoryItem-CjWGE5g2.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistoryValidator-DbOlXV2K.js";import"./Switch-HPixtSTV.js";import"./package-F1HZRHho.js";import"./AppearanceFieldsetMenu-COWrw5-g.js";import"./fontNoValidator-BH6Bx0uw.js";import"./OptionsDataManageMenu-iS0N_y5V.js";import"./OptionsDataResetModal-YtNGOooi.js";import"./useConfirmInput-fbtHW9n0.js";import"./OptionsDataUploadModal-BIVQMQ-G.js";import"./file-upload-D_bXM9eZ.js";import"./DataFileUploadButton-C2baFhLX.js";const g=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,f=()=>{const[o,p]=l.useState("algorithmHider");return{selectedCategory:o,setSelectedCategory:p}},h=x`
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
`,C=()=>{const{selectedCategory:o,setSelectedCategory:p}=f();return t.jsxs(u,{children:[t.jsxs(j,{children:[t.jsx(a,{selectedCategory:o,onCategoryChange:p}),t.jsxs(w,{children:[t.jsx(n,{show:o==="algorithmHider"}),t.jsx(c,{show:o==="randomDefense"}),t.jsx(d,{show:o==="appearanceAndDataManage"})]})]}),t.jsx(y,{children:t.jsx(O,{src:g,alt:""})})]})},Qt={title:"components/Options",component:C,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},i={args:{}};var m,e,s;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const Vt=["Default"];export{i as Default,Vt as __namedExportsOrder,Qt as default};
