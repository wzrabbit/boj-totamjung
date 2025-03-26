import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as l}from"./styled-components.browser.esm-CkAH7aAm.js";import{R as m}from"./RandomDefenseHistoryItem-CjWGE5g2.js";const p=l.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,i=n=>{const{items:o,isHidden:s,onDelete:d}=n;return r.jsx(p,{children:o.map(e=>{const t=`${e.problemId}-${e.createdAt}`,a=![0,31].includes(e.tier)&&s;return r.jsx(m,{isHidden:a,onDelete:()=>{d(t)},...e},t)})})};try{i.displayName="RandomDefenseHistoryList",i.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}}}catch{}export{i as R};
