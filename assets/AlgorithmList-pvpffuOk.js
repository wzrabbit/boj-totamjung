import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as s}from"./styled-components.browser.esm-CkAH7aAm.js";import{A as l}from"./AlgorithmListItem-DZlaLtoX.js";const m=s.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,i=r=>{const{items:n,checkedIds:o,onChange:a}=r;return t.jsx(m,{children:n.map((e,d)=>t.jsx(l,{id:e.id,name:e.name,isChecked:o.includes(e.id),backgroundColor:d%2===0?"brown":"light-brown",onChange:a},e.id))})};try{i.displayName="AlgorithmList",i.__docgenInfo={description:"",displayName:"AlgorithmList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Algorithm[]"}},checkedIds:{defaultValue:null,description:"",name:"checkedIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{i as A};
