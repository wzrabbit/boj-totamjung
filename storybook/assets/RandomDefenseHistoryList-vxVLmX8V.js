import{j as r}from"./jsx-runtime-SwSI87LU.js";import{y as f}from"./styled-components.browser.esm-DmPUYCQi.js";import{R as y}from"./RandomDefenseHistoryItem-B3b44H2Z.js";import{u as _}from"./useRovingFocus-B429qbOp.js";const R=f.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,s=o=>{const{items:t,isHidden:i,onDelete:d}=o,{getRovingProps:a}=_({count:t.length,shouldResetFocusIndexOnItemChange:!1});return r.jsx(R,{children:t.map((e,l)=>{const n=`${e.problemId}-${e.createdAt}`,p=![0,31].includes(e.tier)&&i,{ref:c,...m}=a(l),u={...m,linkButtonRef:c};return r.jsx(y,{isHidden:p,onDelete:()=>{d(n)},...e,...u},n)})})};try{s.displayName="RandomDefenseHistoryList",s.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}}}catch{}try{onDelete.displayName="onDelete",onDelete.__docgenInfo={description:"",displayName:"onDelete",props:{}}}catch{}export{s as R};
