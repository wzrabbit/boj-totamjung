import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as s}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as n}from"./index-RYns6xqu.js";const l=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),r=e=>`${Number(e.slice(0,2))+3}px`,p=s.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:e})=>r(e)};
  height: ${({$height:e})=>e===void 0?"auto":e};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:e})=>r(e)};
    height: ${({$fontSize:e})=>r(e)};

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,h=s.p`
  font-size: ${({$fontSize:e})=>e};

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,m=e=>{const{fontSize:i,errorMessage:o,height:a}=e;return t.jsx(p,{$fontSize:i,$height:a,children:o!==""&&t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx(h,{$fontSize:i,role:"alert",children:o})]})})};m.__docgenInfo={description:"",methods:[],displayName:"ErrorText",props:{fontSize:{required:!0,tsType:{name:"union",raw:"'16px' | '14px' | '13px'",elements:[{name:"literal",value:"'16px'"},{name:"literal",value:"'14px'"},{name:"literal",value:"'13px'"}]},description:""},errorMessage:{required:!0,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"CSSProperties['height']",raw:"CSSProperties['height']"},description:""}}};export{m as E};
