import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as a}from"./styled-components.browser.esm-CkAH7aAm.js";import"./index-RYns6xqu.js";import{S as l}from"./warning-C3WqP-8Y.js";const t=e=>`${Number(e.slice(0,2))+3}px`,p=a.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize:e})=>t(e)};
  height: ${({$height:e})=>e===void 0?"auto":e};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize:e})=>t(e)};
    height: ${({$fontSize:e})=>t(e)};

    color: ${({theme:e})=>e.color.LIGHT_RED};
  }
`,u=a.p`
  font-size: ${({$fontSize:e})=>e};

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,n=e=>{const{fontSize:o,errorMessage:i,height:s}=e;return r.jsx(p,{$fontSize:o,$height:s,children:i!==""&&r.jsxs(r.Fragment,{children:[r.jsx(l,{}),r.jsx(u,{$fontSize:o,role:"alert",children:i})]})})};try{n.displayName="ErrorText",n.__docgenInfo={description:"",displayName:"ErrorText",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<number | (string & {})>"}}}}}catch{}export{n as E};
