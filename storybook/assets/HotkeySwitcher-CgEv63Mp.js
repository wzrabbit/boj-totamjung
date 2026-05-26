import{j as o}from"./jsx-runtime-SwSI87LU.js";import{y as a}from"./styled-components.browser.esm-DmPUYCQi.js";import{T as m}from"./Text-CDp_2vO2.js";import{r as i}from"./index-C5e9SFkp.js";import{u as h}from"./useTranslation-oInNA2-n.js";const p=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...t},i.createElement("path",{fill:"currentColor",d:"m4 8l-.707-.707L2.586 8l.707.707L4 8Zm15 2a1 1 0 1 0 2 0h-2ZM7.293 3.293l-4 4l1.414 1.414l4-4l-1.414-1.414Zm-4 5.414l4 4l1.414-1.414l-4-4l-1.414 1.414ZM4 9h14V7H4v2Zm14 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm2 7l.707-.707l.707.707l-.707.707L20 16ZM5 16v1v-1Zm-3-2a1 1 0 1 1 2 0H2Zm14.707-2.707l4 4l-1.414 1.414l-4-4l1.414-1.414Zm4 5.414l-4 4l-1.414-1.414l4-4l1.414 1.414ZM20 17H5v-2h15v2ZM5 17a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1v2Z"})),d=a.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,u=a.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:t})=>t.colors.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme:t})=>t.colors.LEMON};

    transform: scale(1.1);
  }
`,y=navigator.userAgent.toLowerCase().indexOf("mac")!==-1,n=t=>{const{selectedSlotNo:l,hotkey:r,onClick:s}=t,{t:e}=h(),c=r?r==="F2"?e("quickSlots.hotkey.f2Combo",[String(l)]):e("quickSlots.hotkey.altCombo",[y?"Option":"Alt",String(l)]):e("quickSlots.hotkey.notInUse");return o.jsxs(d,{children:[o.jsx(m,{type:"primary",fontSize:16,children:c}),o.jsx(u,{"aria-label":e("quickSlots.hotkey.switchAriaLabel"),onClick:s,children:o.jsx(p,{})})]})};try{n.displayName="HotkeySwitcher",n.__docgenInfo={description:"",displayName:"HotkeySwitcher",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"number"}},hotkey:{defaultValue:null,description:"",name:"hotkey",required:!0,type:{name:"Hotkey"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}export{n as H};
