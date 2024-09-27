import{j as i}from"./jsx-runtime-DEdD30eg.js";import{d as r,l as t}from"./styled-components.browser.esm-CkAH7aAm.js";const a=r.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,c=r.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:e,$isChecked:o})=>o?t`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:t`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,d=r.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,p=e=>{const{isChecked:o,ariaLabel:n,onChange:s}=e;return i.jsxs(a,{children:[i.jsx(d,{checked:o,"aria-label":n,onChange:s}),i.jsx(c,{$isChecked:o})]})};p.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{isChecked:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{p as C};
