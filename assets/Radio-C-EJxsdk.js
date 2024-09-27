import{j as a}from"./jsx-runtime-DEdD30eg.js";import{d as n,l as d}from"./styled-components.browser.esm-CkAH7aAm.js";const r=n.label`
  width: 16px;
  height: 16px;
`,t=n.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:o})=>o.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};

  ${({theme:o,$checked:i})=>i?d`
          box-shadow: 0 0 8px ${o.color.GOLD};
          background-color: ${o.color.GOLD};
        `:d`
          box-shadow: 0 0 8px ${o.color.DARK_BROWN};
          background-color: transparent;
        `}
`,s=n.input.attrs({type:"radio"})`
  display: none;
`,l=o=>{const{checked:i,disabled:e}=o;return a.jsxs(r,{children:[a.jsx(s,{...o,onChange:()=>{if("value"in o){o.onChange(o.value);return}o.onChange()}}),a.jsx(t,{$checked:i,$disabled:e})]})};l.__docgenInfo={description:"",methods:[],displayName:"Radio"};export{l as R};
