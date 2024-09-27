import{j as t}from"./jsx-runtime-DEdD30eg.js";import{O as n}from"./OptionsHeader-BH3f0DrG.js";import{H as c}from"./HiderSection-rc7ZEsYl.js";import{R as d}from"./RandomDefenseSection-CewuMBS_.js";import{A as l}from"./AppearanceAndDataManageSection-Bn7iHeWj.js";import{r as g}from"./index-RYns6xqu.js";import{m as x,d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import"./OptionsNav-CEIUftEw.js";import"./SimpleModal-ClNHGUid.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./IconButton-D0rtTRsA.js";import"./Text-DG2UbxfS.js";import"./theme-C4yZJZ7X.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./TotamjungInfoModal-NXMlDYdx.js";import"./MenuTitle-CowrM9J4.js";import"./AlgorithmPool-CSpSh5Q6.js";import"./AlgorithmList-CL9AAMmF.js";import"./AlgorithmListItem-fiKGkHCK.js";import"./Checkbox-CoLSwteh.js";import"./getSearchResults-CDgN9_fa.js";import"./algorithmInfos-BizjuJN7.js";import"./commands-CQbqRvUh.js";import"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import"./typeGuards-DuDHAUw0.js";import"./defaultValues-CnriO2vE.js";import"./useModal-CV8qRtLl.js";import"./HiderFieldsetMenu--igN5w6g.js";import"./Fieldset-KT1odGzc.js";import"./Radio-C-EJxsdk.js";import"./TierDropdown-BomI1IAR.js";import"./check-Dgz4zLBN.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-PioEXis9.js";import"./TextLink-Pz5ALlvd.js";import"./hiderOptionsValidator-OSwkoshH.js";import"./RandomDefenseCreateMenu-B7oKkWaI.js";import"./NamedFrame-DSWSgEem.js";import"./Input-_gr1WRmd.js";import"./Textarea-Bp2AThqy.js";import"./ErrorText-CAj_MRej.js";import"./RandomDefenseCreateButton-DNA3ZySB.js";import"./RandomDefenseCapsuleButton-BSB-qVpa.js";import"./DifficultyAdjustMenu-CjuNNSAu.js";import"./TierSlider-CaRdrFCg.js";import"./TierRange-BetjRhIG.js";import"./TierPresetButtonList-CJ0c_kQA.js";import"./TierPresetButton-BWbwp105.js";import"./SearchOperatorSelect-DUwSCEft.js";import"./AlgorithmSearchInput-Rh9deP_W.js";import"./MiniAlgorithmButton-BRZMqM4y.js";import"./randomDefense-DfcJoTYj.js";import"./QuickSlotMenu-DTT9SHU6.js";import"./SlotPagination-CpKL9-g0.js";import"./SlotInfo-BAX3IAWo.js";import"./HotkeySwitcher-DHUzdrvr.js";import"./SlotEditModal-Dx2OUjGY.js";import"./Loading-BB2Ju6ka.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./useRandomDefenseSection-BvsdrhmU.js";import"./quickSlotsValidator-DaifWqYU.js";import"./RandomDefenseHistoryMenu-BasdG8RC.js";import"./RandomDefenseHistoryList-D175xNYr.js";import"./RandomDefenseHistoryItem-Sebpybfz.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistoryValidator-CR4afrcp.js";import"./Switch-Bo56pe8w.js";import"./package-F1HZRHho.js";import"./AppearanceFieldsetMenu-DK7PPq8g.js";import"./fontNoValidator-BXIMmJgC.js";import"./OptionsDataManageMenu-BvR1murt.js";import"./OptionsDataResetModal-BuxdtzzV.js";import"./useConfirmInput-fbtHW9n0.js";import"./OptionsDataUploadModal-BT2FuFcp.js";import"./file-upload-D_bXM9eZ.js";import"./DataFileUploadButton-CcY5BXqx.js";const f=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,h=()=>{const[o,p]=g.useState("algorithmHider");return{selectedCategory:o,setSelectedCategory:p}},u=x`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,j=r.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,y=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,w=r.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,O=r.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,C=r.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${u} 3s forwards infinite;
`,a=()=>{const{selectedCategory:o,setSelectedCategory:p}=h();return t.jsxs(j,{children:[t.jsxs(y,{children:[t.jsx(n,{selectedCategory:o,onCategoryChange:p}),t.jsxs(w,{children:[t.jsx(c,{show:o==="algorithmHider"}),t.jsx(d,{show:o==="randomDefense"}),t.jsx(l,{show:o==="appearanceAndDataManage"})]})]}),t.jsx(O,{children:t.jsx(C,{src:f,alt:""})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Options"};const Jt={title:"components/Options",component:a,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},i={args:{}};var m,e,s;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const Kt=["Default"];export{i as Default,Kt as __namedExportsOrder,Jt as default};
