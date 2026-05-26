import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as r}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as n}from"./getTransparentHexColor-DN69VCBw.js";import{r as i}from"./index--qcDGAq6.js";const c=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},i.createElement("path",{fill:"currentColor",d:"M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"})),p=r.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme:e})=>e.colors.LEMON};
`,d=r.span`
  font-size: ${({$fontSize:e})=>e}px;
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme:e})=>n(e.colors.LEMON,.5)};
  text-decoration-color: ${({theme:e})=>n(e.colors.LEMON,.5)};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme:e})=>e.colors.LEMON};
  }
`,x=r.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize:e})=>e}px;
  height: ${({$fontSize:e})=>e}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,s=e=>{const{href:a,fontSize:o,children:l}=e;return t.jsxs(p,{href:a,target:"__blank",rel:"noopener",children:[t.jsx(d,{$fontSize:o,children:l}),t.jsx(x,{$fontSize:o,children:t.jsx(c,{})})]})};try{s.displayName="TextLink",s.__docgenInfo={description:"",displayName:"TextLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}}}}}catch{}export{s as T};
