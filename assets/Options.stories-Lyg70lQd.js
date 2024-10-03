import{j as t}from"./jsx-runtime-DEdD30eg.js";import{O as a}from"./OptionsHeader-cXhUNkC4.js";import{H as n}from"./HiderSection-BgFdDYVY.js";import{R as c}from"./RandomDefenseSection-Dcf4zNOj.js";import{A as d}from"./AppearanceAndDataManageSection-wZE8mVGJ.js";import{r as l}from"./index-RYns6xqu.js";import{m as x,d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import"./OptionsNav-CY13k46F.js";import"./SimpleModal-DPSM0eH1.js";import"./Modal-D1bPJ0G-.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./IconButton-oO0tyT1G.js";import"./Text-Dr0lXUnC.js";import"./theme-C4yZJZ7X.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./TotamjungInfoModal-DaHwWHZh.js";import"./MenuTitle-adi5EQck.js";import"./AlgorithmPool-nJMX8Dp8.js";import"./AlgorithmList-pvpffuOk.js";import"./AlgorithmListItem-DZlaLtoX.js";import"./Checkbox-3ybQGG_E.js";import"./getSearchResults-CDgN9_fa.js";import"./algorithmInfos-BizjuJN7.js";import"./commands-CQbqRvUh.js";import"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import"./typeGuards-DuDHAUw0.js";import"./defaultValues-CnriO2vE.js";import"./useModal-CV8qRtLl.js";import"./HiderFieldsetMenu-C0_AoJ5j.js";import"./Fieldset-LL3MKJN0.js";import"./Radio-JHrPe3mw.js";import"./TierDropdown-BYgCQ6Mo.js";import"./check-Dgz4zLBN.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-COQ9YfUe.js";import"./TextLink-_llWSx1B.js";import"./hiderOptionsValidator-OSwkoshH.js";import"./RandomDefenseCreateMenu-BS9EXzIu.js";import"./NamedFrame-D-XXrU6-.js";import"./Input-C1KrmhYC.js";import"./Textarea-dOKYE4DH.js";import"./ErrorText-Dx7U6JC4.js";import"./RandomDefenseCreateButton-CFSRLsFe.js";import"./RandomDefenseCapsuleButton-CbOA6emW.js";import"./DifficultyAdjustMenu-BE_qsAuw.js";import"./TierSlider-s9uH12N6.js";import"./TierRange-HUKRuQiy.js";import"./TierPresetButtonList-BI8zvvUf.js";import"./TierPresetButton-DeZlaMb6.js";import"./SearchOperatorSelect-CLzYRS7H.js";import"./AlgorithmSearchInput-D2YKheEG.js";import"./MiniAlgorithmButton-BnJqfcSq.js";import"./randomDefense-DfcJoTYj.js";import"./QuickSlotMenu-BaMYJT9X.js";import"./SlotPagination-CnObMEa3.js";import"./SlotInfo-CaeWerhS.js";import"./HotkeySwitcher-_2lu-RZr.js";import"./SlotEditModal-BIvQ5Ewp.js";import"./Loading-DaUpprbE.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./useRandomDefenseSection-BvsdrhmU.js";import"./quickSlotsValidator-DaifWqYU.js";import"./RandomDefenseHistoryMenu-DIKqZTZi.js";import"./RandomDefenseHistoryList-BmEo4GUj.js";import"./RandomDefenseHistoryItem-CjWGE5g2.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistoryValidator-CR4afrcp.js";import"./Switch-HPixtSTV.js";import"./package-F1HZRHho.js";import"./AppearanceFieldsetMenu-C8V7IxV-.js";import"./fontNoValidator-BXIMmJgC.js";import"./OptionsDataManageMenu-D4grlTq4.js";import"./OptionsDataResetModal-RKnKBJq9.js";import"./useConfirmInput-fbtHW9n0.js";import"./OptionsDataUploadModal-Xt2QfKLI.js";import"./file-upload-D_bXM9eZ.js";import"./DataFileUploadButton-C2baFhLX.js";const g=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,f=()=>{const[o,p]=l.useState("algorithmHider");return{selectedCategory:o,setSelectedCategory:p}},h=x`
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
