import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as s}from"./TierPresetButton-BNZ10JGo.js";const a=n.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`,p=["unrated","bronze","silver","gold","platinum","diamond","ruby"],o=t=>{const{onClick:i}=t;return r.jsx(a,{children:p.map(e=>r.jsx(s,{rank:e,onClick:i},e))})};try{o.displayName="TierPresetButtonList",o.__docgenInfo={description:"",displayName:"TierPresetButtonList",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}}}catch{}export{o as T};
