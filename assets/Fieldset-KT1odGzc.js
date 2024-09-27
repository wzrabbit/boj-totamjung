import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";import{R as m}from"./Radio-C-EJxsdk.js";import{T as u}from"./Text-DG2UbxfS.js";const g=i.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,x=i.legend`
  font-size: 16px;
  color: ${({theme:t})=>t.color.WHITE};
  margin-bottom: 6px;
`,f=i.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical:t})=>t?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,y=i.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`,h=t=>{const{legend:o,name:a,options:d,checkedValue:p,disabled:s,isVertical:c,onChange:l}=t;return e.jsxs(g,{disabled:s,children:[e.jsx(x,{children:o}),e.jsx(f,{$isVertical:c,children:d.map(({label:n,value:r})=>e.jsxs(y,{children:[e.jsx(m,{name:a,value:r,checked:r===p,disabled:s,onChange:l}),typeof n=="string"?e.jsx(u,{type:"semiPrimary",fontSize:"16px",children:n}):n]},r))})]})};h.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},checkedValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isVertical:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{h as F};
