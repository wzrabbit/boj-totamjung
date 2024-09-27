import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as a}from"./TierSlider-CaRdrFCg.js";import{T as s}from"./TierRange-BetjRhIG.js";import{T as d}from"./TierPresetButtonList-CJ0c_kQA.js";const u=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,p=n.div`
  display: flex;
  justify-content: space-around;
`,m=o=>{const{startTier:t,endTier:i,onChange:r}=o;return e.jsxs(u,{children:[e.jsx(a,{startTier:t,endTier:i,onChange:r}),e.jsxs(p,{children:[e.jsx(s,{startTier:t,endTier:i}),e.jsx(d,{onClick:r})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"DifficultyAdjustMenu",props:{startTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},endTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void",signature:{arguments:[{type:{name:"TierWithoutNotRatable"},name:"start"},{type:{name:"TierWithoutNotRatable"},name:"end"}],return:{name:"void"}}},description:""}}};export{m as D};
