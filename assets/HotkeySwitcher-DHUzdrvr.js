import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as o}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as s}from"./Text-DG2UbxfS.js";import{r}from"./index-RYns6xqu.js";const a=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...t},r.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),c=o.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,m=o.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:t})=>t.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme:t})=>t.color.LEMON};

    transform: scale(1.1);
  }
`,p=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,h=t=>{const{selectedSlotNo:i,hotkey:n,onClick:l}=t;return e.jsxs(c,{children:[e.jsx(s,{type:"primary",fontSize:"16px",children:`단축키: ${n==="Alt"?p?"Option":"Alt":"F2"} + ${i}`}),e.jsx(m,{"aria-label":"단축키 전환하기",onClick:l,children:e.jsx(a,{})})]})};h.__docgenInfo={description:"",methods:[],displayName:"HotkeySwitcher",props:{selectedSlotNo:{required:!0,tsType:{name:"number"},description:""},hotkey:{required:!0,tsType:{name:"Hotkey"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{h as H};
