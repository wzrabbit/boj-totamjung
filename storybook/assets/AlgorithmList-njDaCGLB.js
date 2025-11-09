import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as l}from"./styled-components.browser.esm-CIS6JKSM.js";import{A as s}from"./AlgorithmListItem-DN44b2wU.js";const m=l.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,i=r=>{const{items:o,checkedAlgorithmIds:n,onChange:a}=r;return t.jsx(m,{children:o.map((e,d)=>t.jsx(s,{id:e.id,name:e.name,isChecked:n.includes(e.id),backgroundColor:d%2===0?"brown":"light-brown",onChange:a},e.id))})};try{i.displayName="AlgorithmList",i.__docgenInfo={description:"",displayName:"AlgorithmList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Algorithm[]"}},checkedAlgorithmIds:{defaultValue:null,description:"",name:"checkedAlgorithmIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{i as A};
