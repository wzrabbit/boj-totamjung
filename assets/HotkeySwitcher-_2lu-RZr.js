import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as c}from"./Text-Dr0lXUnC.js";import{r as l}from"./index-RYns6xqu.js";const s=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},l.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),m=r.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,p=r.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme:e})=>e.color.LEMON};

    transform: scale(1.1);
  }
`,d=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,o=e=>{const{selectedSlotNo:a,hotkey:i,onClick:n}=e;return t.jsxs(m,{children:[t.jsx(c,{type:"primary",fontSize:"16px",children:`단축키: ${i==="Alt"?d?"Option":"Alt":"F2"} + ${a}`}),t.jsx(p,{"aria-label":"단축키 전환하기",onClick:n,children:t.jsx(s,{})})]})};try{o.displayName="HotkeySwitcher",o.__docgenInfo={description:"",displayName:"HotkeySwitcher",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"number"}},hotkey:{defaultValue:null,description:"",name:"hotkey",required:!0,type:{name:"enum",value:[{value:'"Alt"'},{value:'"F2"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}export{o as H};
