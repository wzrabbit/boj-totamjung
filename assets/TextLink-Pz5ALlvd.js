import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as o}from"./index-RYns6xqu.js";const l=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},o.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),a=r.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:e})=>e.color.LEMON};
`,c=r.span`
  font-size: ${({$fontSize:e})=>e};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:e})=>e.color.LEMON};
  }
`,p=r.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:e})=>e};
  height: ${({$fontSize:e})=>e};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,d=e=>{const{href:i,fontSize:n,children:s}=e;return t.jsxs(a,{href:i,target:"__blank",rel:"noopener",children:[t.jsx(c,{$fontSize:n,children:s}),t.jsx(p,{$fontSize:n,children:t.jsx(l,{})})]})};d.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{href:{required:!0,tsType:{name:"string"},description:""},fontSize:{required:!0,tsType:{name:"union",raw:"'16px' | '14px' | '13px'",elements:[{name:"literal",value:"'16px'"},{name:"literal",value:"'14px'"},{name:"literal",value:"'13px'"}]},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};export{d as T};
