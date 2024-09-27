import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as o}from"./styled-components.browser.esm-CkAH7aAm.js";import{C as d}from"./Checkbox-CoLSwteh.js";const l=o.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:n})=>n==="brown"?e.color.BROWN:e.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,p=o.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,c=o.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.LEMON};

  cursor: pointer;
`,u=e=>{const{id:n,name:i,isChecked:t,backgroundColor:a,onChange:s}=e;return r.jsx(l,{$backgroundColor:a,children:r.jsxs(p,{children:[r.jsx(c,{children:i}),r.jsx(d,{isChecked:t,onChange:()=>s(n),ariaLabel:i})]})})};u.__docgenInfo={description:"",methods:[],displayName:"AlgorithmListItem",props:{id:{required:!0,tsType:{name:"number"},description:""},name:{required:!0,tsType:{name:"string"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},backgroundColor:{required:!0,tsType:{name:"union",raw:"'light-brown' | 'brown'",elements:[{name:"literal",value:"'light-brown'"},{name:"literal",value:"'brown'"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};export{u as A};
