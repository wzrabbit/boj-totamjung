import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";import{R as m}from"./Radio-CLzVlAmW.js";import{T as f}from"./Text-Ccd6d79x.js";const g=t.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,x=t.legend`
  font-size: 16px;
  color: ${({theme:e})=>e.color.WHITE};
  margin-bottom: 6px;
`,y=t.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:e})=>e?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,h=t.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,l=e=>{const{legend:o,name:s,options:d,checkedValue:p,disabled:r,isVertical:c=!1,onChange:u}=e;return n.jsxs(g,{disabled:r,children:[n.jsx(x,{children:o}),n.jsx(y,{$isVertical:c,children:d.map(({label:i,value:a})=>n.jsxs(h,{children:[n.jsx(m,{name:s,value:a,checked:a===p,disabled:r,onChange:u}),typeof i=="string"?n.jsx(f,{type:"semiPrimary",fontSize:"16px",children:i}):i]},a))})]})};try{l.displayName="Fieldset",l.__docgenInfo={description:"",displayName:"Fieldset",props:{legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},checkedValue:{defaultValue:null,description:"",name:"checkedValue",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isVertical:{defaultValue:null,description:"",name:"isVertical",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}export{l as F};
