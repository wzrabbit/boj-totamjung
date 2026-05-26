import{j as r}from"./jsx-runtime-SwSI87LU.js";import{y as o}from"./styled-components.browser.esm-DmPUYCQi.js";import{C as p}from"./Checkbox-KY5Zdee9.js";import{T as c}from"./Text-CDp_2vO2.js";import{r as g}from"./index-C5e9SFkp.js";const h=o.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:n})=>n==="brown"?e.colors.BROWN_700:e.colors.BROWN_600};

  cursor: pointer;
  user-select: none;
`,f=o.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,t=g.forwardRef((e,n)=>{const{id:i,name:a,isChecked:l,backgroundColor:d,tabIndex:u=0,onChange:s,...m}=e;return r.jsx(h,{$backgroundColor:d,children:r.jsxs(f,{children:[r.jsx(c,{type:"semiPrimary",fontSize:16,width:"auto",children:a}),r.jsx(p,{isChecked:l,onChange:()=>s(i),name:"algorithm",ariaLabel:a,tabIndex:u,ref:n,...m})]})})});try{t.displayName="AlgorithmListItem",t.__docgenInfo={description:"",displayName:"AlgorithmListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"light-brown"'},{value:'"brown"'}]}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{t as A};
