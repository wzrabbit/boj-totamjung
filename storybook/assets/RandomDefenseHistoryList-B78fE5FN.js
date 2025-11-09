import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as l}from"./styled-components.browser.esm-CIS6JKSM.js";import{R as p}from"./RandomDefenseHistoryItem-B4HMGLVW.js";const c=l.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,r=t=>{const{items:i,isHidden:s,onDelete:d}=t;return o.jsx(c,{children:i.map(e=>{const n=`${e.problemId}-${e.createdAt}`,a=![0,31].includes(e.tier)&&s;return o.jsx(p,{isHidden:a,onDelete:()=>{d(n)},...e},n)})})};try{r.displayName="RandomDefenseHistoryList",r.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}}}catch{}try{onDelete.displayName="onDelete",onDelete.__docgenInfo={description:"",displayName:"onDelete",props:{}}}catch{}export{r as R};
