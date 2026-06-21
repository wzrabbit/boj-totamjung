import{j as i}from"./jsx-runtime-SwSI87LU.js";import{y as d}from"./styled-components.browser.esm-DmPUYCQi.js";import{A as m}from"./AlgorithmListItem-D8eA8pJQ.js";import{u as c}from"./useRovingFocus-B429qbOp.js";const p=d.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`,n=t=>{const{items:r,checkedAlgorithmIds:a,onChange:s}=t,{getRovingProps:l}=c({count:r.length});return i.jsx(p,{children:r.map((e,o)=>i.jsx(m,{id:e.id,name:e.name,isChecked:a.includes(e.id),backgroundColor:o%2===0?"brown":"light-brown",onChange:s,...l(o)},e.id))})};try{n.displayName="AlgorithmList",n.__docgenInfo={description:"",displayName:"AlgorithmList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Algorithm[]"}},checkedAlgorithmIds:{defaultValue:null,description:"",name:"checkedAlgorithmIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{n as A};
