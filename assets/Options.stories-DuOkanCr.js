import{j as t}from"./jsx-runtime-DEdD30eg.js";import{O as a}from"./OptionsHeader-Bq6H44pF.js";import{H as n}from"./HiderSection-OEnTIBhR.js";import{R as c}from"./RandomDefenseSection-B28CAyRg.js";import{A as d}from"./AppearanceAndDataManageSection-vBXMyKRV.js";import{r as l}from"./index-RYns6xqu.js";import{m as x,d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import"./OptionsNav-QcPXiVWW.js";import"./SimpleModal-_wuSfgSA.js";import"./Modal-BuwJmHcH.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./IconButton-DB9afjvp.js";import"./Text-B2xQYZk4.js";import"./theme-D4zHi0MN.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./TotamjungInfoModal-C3oQyNd2.js";import"./MenuTitle-CeT6tPAk.js";import"./AlgorithmPool-k0iSeaIg.js";import"./AlgorithmList-pvpffuOk.js";import"./AlgorithmListItem-DZlaLtoX.js";import"./Checkbox-3ybQGG_E.js";import"./getSearchResults-CsPxK2_U.js";import"./algorithmInfos-BNLNF_TH.js";import"./commands-CyQPP6hL.js";import"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import"./typeGuards-DuDHAUw0.js";import"./defaultValues-Ccu0oMSE.js";import"./useModal-CV8qRtLl.js";import"./HiderFieldsetMenu-DcK2qeL7.js";import"./Fieldset-8Clchqa6.js";import"./Radio-CLzVlAmW.js";import"./TierSelect-CReBr5Vc.js";import"./check-Dgz4zLBN.js";import"./useSelect-C4szZV9I.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-Cf6Evd_8.js";import"./TextLink-_llWSx1B.js";import"./hiderOptionsValidator-OSwkoshH.js";import"./RandomDefenseCreateMenu-Zp7h5XsF.js";import"./NamedFrame-D-XXrU6-.js";import"./Input-C1KrmhYC.js";import"./Textarea-dOKYE4DH.js";import"./ErrorText-Dx7U6JC4.js";import"./RandomDefenseCreateButton-CiCktUuA.js";import"./RandomDefenseCapsuleButton-CbOA6emW.js";import"./DifficultyAdjustMenu-C5gt0TrG.js";import"./TierSlider-s9uH12N6.js";import"./TierRange-HUKRuQiy.js";import"./TierPresetButtonList-xAN_5A-W.js";import"./TierPresetButton-DtKQyprX.js";import"./SearchOperatorSelect-DVJCQZC6.js";import"./AlgorithmSearchInput-DtzUZuwO.js";import"./MiniAlgorithmButton-BnJqfcSq.js";import"./randomDefense-Dtw7AXim.js";import"./Select-B2V7feow.js";import"./QuickSlotMenu-Dzjkz39l.js";import"./SlotPagination-CnObMEa3.js";import"./SlotInfo-CXIfulDQ.js";import"./HotkeySwitcher-CdFIXWp5.js";import"./SlotEditModal-AyF_YVse.js";import"./Loading-DaUpprbE.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./useRandomDefenseSection-C_bzl9wN.js";import"./quickSlotsValidator-DFvl-FmR.js";import"./RandomDefenseHistoryMenu-COmRkPpW.js";import"./RandomDefenseHistoryList-BmEo4GUj.js";import"./RandomDefenseHistoryItem-CjWGE5g2.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistoryValidator-CR4afrcp.js";import"./Switch-HPixtSTV.js";import"./package-F1HZRHho.js";import"./AppearanceFieldsetMenu-VUrGvo9X.js";import"./fontNoValidator-BXIMmJgC.js";import"./OptionsDataManageMenu-DB1dq8YX.js";import"./OptionsDataResetModal-YtNGOooi.js";import"./useConfirmInput-fbtHW9n0.js";import"./OptionsDataUploadModal-BIVQMQ-G.js";import"./file-upload-D_bXM9eZ.js";import"./DataFileUploadButton-C2baFhLX.js";const g=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,f=()=>{const[o,p]=l.useState("algorithmHider");return{selectedCategory:o,setSelectedCategory:p}},h=x`
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
