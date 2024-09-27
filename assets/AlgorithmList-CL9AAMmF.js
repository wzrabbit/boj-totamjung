import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as a}from"./styled-components.browser.esm-CkAH7aAm.js";import{A as m}from"./AlgorithmListItem-fiKGkHCK.js";const d=a.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,p=n=>{const{items:t,checkedIds:i,onChange:o}=n;return r.jsx(d,{children:t.map((e,s)=>r.jsx(m,{id:e.id,name:e.name,isChecked:i.includes(e.id),backgroundColor:s%2===0?"brown":"light-brown",onChange:o},e.id))})};p.__docgenInfo={description:"",methods:[],displayName:"AlgorithmList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Algorithm"}],raw:"Algorithm[]"},description:""},checkedIds:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};export{p as A};
