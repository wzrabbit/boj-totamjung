import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as s}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as n}from"./index-RYns6xqu.js";const c=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"})),r=e=>`${Number(e.slice(0,2))+3}px`,p=s.div`
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
`,d=s.p`
  font-size: ${({$fontSize:e})=>e};

  color: ${({theme:e})=>e.color.LIGHT_RED};
`,a=e=>{const{fontSize:o,errorMessage:i,height:l}=e;return t.jsx(p,{$fontSize:o,$height:l,children:i!==""&&t.jsxs(t.Fragment,{children:[t.jsx(c,{}),t.jsx(d,{$fontSize:o,role:"alert",children:i})]})})};try{a.displayName="ErrorText",a.__docgenInfo={description:"",displayName:"ErrorText",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<number | (string & {})>"}}}}}catch{}export{a as E};
