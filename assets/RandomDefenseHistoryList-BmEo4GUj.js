import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as a}from"./styled-components.browser.esm-CkAH7aAm.js";import{R as l}from"./RandomDefenseHistoryItem-CjWGE5g2.js";const m=a.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,r=t=>{const{items:i,isHidden:s,onDelete:d}=t;return n.jsx(m,{children:i.map(e=>{const o=`${e.problemId}-${e.createdAt}`;return n.jsx(l,{isHidden:s,onDelete:()=>{d(o)},...e},o)})})};try{r.displayName="RandomDefenseHistoryList",r.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}}}catch{}export{r as R};
