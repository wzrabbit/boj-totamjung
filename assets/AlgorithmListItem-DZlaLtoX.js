import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as o}from"./styled-components.browser.esm-CkAH7aAm.js";import{C as u}from"./Checkbox-3ybQGG_E.js";const s=o.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:n})=>n==="brown"?e.color.BROWN:e.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,c=o.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,p=o.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.LEMON};

  cursor: pointer;
`,t=e=>{const{id:n,name:i,isChecked:a,backgroundColor:l,onChange:d}=e;return r.jsx(s,{$backgroundColor:l,children:r.jsxs(c,{children:[r.jsx(p,{children:i}),r.jsx(u,{isChecked:a,onChange:()=>d(n),ariaLabel:i})]})})};try{t.displayName="AlgorithmListItem",t.__docgenInfo={description:"",displayName:"AlgorithmListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"light-brown"'},{value:'"brown"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{t as A};
