import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d as n}from"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";import{S as a}from"./warning-BLusDAjJ.js";const l=n.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:e})=>e+3}px;
  height: ${({$height:e})=>e===void 0?"auto":e}px;

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:e})=>e+3}px;
    height: ${({$fontSize:e})=>e+3}px;

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,p=n.p`
  font-size: ${({$fontSize:e})=>e}px;

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,i=e=>{const{fontSize:t,errorMessage:o,height:s}=e;return r.jsx(l,{$fontSize:t,$height:s,children:o!==""&&r.jsxs(r.Fragment,{children:[r.jsx(a,{}),r.jsx(p,{$fontSize:t,role:"alert",children:o})]})})};try{i.displayName="ErrorText",i.__docgenInfo={description:"",displayName:"ErrorText",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<number | (string & {})>"}}}}}catch{}export{i as E};
