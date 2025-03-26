import{j as t}from"./jsx-runtime-DEdD30eg.js";import{O as a}from"./OptionsHeader-jOr8OUJp.js";import{H as n}from"./HiderSection-DBx0g2jm.js";import{R as c}from"./RandomDefenseSection-BMgU0gVC.js";import{A as d}from"./AppearanceAndDataManageSection-D-jlefq6.js";import{r as l}from"./index-RYns6xqu.js";import{m as x,d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import"./OptionsNav-QcPXiVWW.js";import"./SimpleModal-k5RQWRZ5.js";import"./Modal-CnAp5z9P.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./IconButton-DB9afjvp.js";import"./Text-B2xQYZk4.js";import"./theme-CEW-JCn2.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./TotamjungInfoModal-D9krRZtj.js";import"./MenuTitle-CeT6tPAk.js";import"./AlgorithmPool-CCy_rip8.js";import"./AlgorithmList-pvpffuOk.js";import"./AlgorithmListItem-DZlaLtoX.js";import"./Checkbox-3ybQGG_E.js";import"./getSearchResults-CsPxK2_U.js";import"./algorithmInfos-BNLNF_TH.js";import"./commands-CzqO23sC.js";import"./checkedAlgorithmIdsValidator-_GhylmXA.js";import"./typeGuards-BB3TV_oj.js";import"./defaultValues-5WESY1KB.js";import"./useModal-CV8qRtLl.js";import"./HiderFieldsetMenu-DzTziYZJ.js";import"./Fieldset-8Clchqa6.js";import"./Radio-CLzVlAmW.js";import"./TierSelect-CReBr5Vc.js";import"./check-Dgz4zLBN.js";import"./useSelect-C4szZV9I.js";import"./index-CElCL35T.js";import"./ProblemTagLockTimer-Cf6Evd_8.js";import"./TextLink-_llWSx1B.js";import"./hidden-tier-badge-CukGKv-l.js";import"./hiderOptionsValidator-C03oWmMh.js";import"./RandomDefenseCreateMenu-Cs_HlCfy.js";import"./NamedFrame-D-XXrU6-.js";import"./Input-C1KrmhYC.js";import"./Textarea-dOKYE4DH.js";import"./ErrorText-Dysi6BW4.js";import"./warning-C3WqP-8Y.js";import"./RandomDefenseCreateButton-CiCktUuA.js";import"./RandomDefenseCapsuleButton-CbOA6emW.js";import"./DifficultyAdjustMenu-2AviJ9cT.js";import"./TierSlider-UVaKqd10.js";import"./TierRange-HUKRuQiy.js";import"./TierPresetButtonList-xAN_5A-W.js";import"./TierPresetButton-DtKQyprX.js";import"./SearchOperatorSelect-DVJCQZC6.js";import"./AlgorithmSearchInput-C_id9w8r.js";import"./MiniAlgorithmButton-BnJqfcSq.js";import"./randomDefense-CSn7TOcu.js";import"./Select-B2V7feow.js";import"./QuickSlotMenu-OEYRBH3u.js";import"./SlotPagination-CnObMEa3.js";import"./SlotInfo-CXIfulDQ.js";import"./HotkeySwitcher-CdFIXWp5.js";import"./SlotEditModal-CMrIvJ--.js";import"./Loading-B_gIuuyx.js";import"./loading-D5dlFyPz.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./useRandomDefenseSection-wwIqfXV7.js";import"./quickSlotsValidator-BStRloGQ.js";import"./RandomDefenseHistoryMenu-Cz3la2vX.js";import"./RandomDefenseHistoryList-BmEo4GUj.js";import"./RandomDefenseHistoryItem-CjWGE5g2.js";import"./formatDate-DtmnLriP.js";import"./randomDefenseHistoryValidator-HqCX0m6_.js";import"./Switch-HPixtSTV.js";import"./package-F1HZRHho.js";import"./AppearanceFieldsetMenu-DT2w70J6.js";import"./fontNoValidator-DU-rNtMT.js";import"./OptionsDataManageMenu-KRZbnEwg.js";import"./OptionsDataResetModal-CFZXEZla.js";import"./useConfirmInput-fbtHW9n0.js";import"./OptionsDataUploadModal-D_HrrCE2.js";import"./file-upload-D_bXM9eZ.js";import"./DataFileUploadButton-C2baFhLX.js";const g=""+new URL("totamjung-BrXdXI1T.png",import.meta.url).href,f=()=>{const[o,p]=l.useState("algorithmHider");return{selectedCategory:o,setSelectedCategory:p}},h=x`
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
`,C=()=>{const{selectedCategory:o,setSelectedCategory:p}=f();return t.jsxs(u,{children:[t.jsxs(j,{children:[t.jsx(a,{selectedCategory:o,onCategoryChange:p}),t.jsxs(w,{children:[t.jsx(n,{show:o==="algorithmHider"}),t.jsx(c,{show:o==="randomDefense"}),t.jsx(d,{show:o==="appearanceAndDataManage"})]})]}),t.jsx(y,{children:t.jsx(O,{src:g,alt:""})})]})},to={title:"components/Options",component:C,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},i={args:{}};var m,e,s;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const oo=["Default"];export{i as Default,oo as __namedExportsOrder,to as default};
