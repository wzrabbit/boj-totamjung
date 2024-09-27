import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as n}from"./TierPresetButton-BWbwp105.js";const a=i.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,s=["unrated","bronze","silver","gold","platinum","diamond","ruby"],p=r=>{const{onClick:o}=r;return e.jsx(a,{children:s.map(t=>e.jsx(n,{rank:t,onClick:o},t))})};p.__docgenInfo={description:"",methods:[],displayName:"TierPresetButtonList",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void",signature:{arguments:[{type:{name:"TierWithoutNotRatable"},name:"start"},{type:{name:"TierWithoutNotRatable"},name:"end"}],return:{name:"void"}}},description:""}}};export{p as T};
