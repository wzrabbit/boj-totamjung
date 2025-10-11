import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";import{C as u}from"./Checkbox-NPditMri.js";import{T as s}from"./Text-Bm9VDKPH.js";const c=t.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:n})=>n==="brown"?e.color.BROWN:e.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,m=t.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,i=e=>{const{id:n,name:o,isChecked:a,backgroundColor:l,onChange:d}=e;return r.jsx(c,{$backgroundColor:l,children:r.jsxs(m,{children:[r.jsx(s,{type:"semiPrimary",fontSize:16,width:"auto",children:o}),r.jsx(u,{isChecked:a,onChange:()=>d(n),ariaLabel:o})]})})};try{i.displayName="AlgorithmListItem",i.__docgenInfo={description:"",displayName:"AlgorithmListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"light-brown"'},{value:'"brown"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{i as A};
