import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d}from"./styled-components.browser.esm-CkAH7aAm.js";import{R as m}from"./RandomDefenseHistoryItem-Sebpybfz.js";const a=d.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`,l=s=>{const{items:n,isHidden:r,onDelete:i}=s;return t.jsx(a,{children:n.map(e=>{const o=`${e.problemId}-${e.createdAt}`;return t.jsx(m,{isHidden:r,onDelete:()=>{i(o)},...e},o)})})};l.__docgenInfo={description:"",methods:[],displayName:"RandomDefenseHistoryList"};export{l as R};
