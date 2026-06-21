import{j as e}from"./jsx-runtime-SwSI87LU.js";import{R as x}from"./RandomDefenseCreateMenu-BZCFJHU1.js";import{Q as h}from"./QuickSlotsMenu-Dte0-Kw7.js";import{u as S}from"./useRandomDefenseSection-g20avKyu.js";import{R as y}from"./RandomDefenseHistoryMenu-986UQ5lI.js";import{M as g}from"./MenuTitle-BqJuUVN6.js";import{u as R}from"./useTranslation-CHmiwnmk.js";import{y as o}from"./styled-components.browser.esm-DmPUYCQi.js";const M=o.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,j=o.div`
  display: flex;
  column-gap: 12px;
`,D=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,r=n=>{const{slots:a,selectedSlotNo:t,hotkey:l,isLoaded:s,setSelectedSlotNo:c,setHotkey:d,updateSlot:i,deleteSlot:m}=S(),{show:p}=n,{t:u}=R(),f={slots:a,selectedSlotNo:t,hotkey:l};return p?e.jsxs(M,{children:[e.jsx(g,{title:u("options.sections.randomDefense.title"),iconSrc:browser.runtime.getURL("/dice.png")}),e.jsxs(j,{children:[e.jsxs(D,{children:[e.jsx(x,{isLoaded:s,selectedSlotNo:t,onSubmit:i}),e.jsx(h,{quickSlotsInfo:f,isLoaded:s,onHotkeyChange:d,onSlotChange:i,onSlotDelete:m,onSlotNoChange:c})]}),e.jsx(y,{})]})]}):null};try{r.displayName="RandomDefenseSection",r.__docgenInfo={description:"",displayName:"RandomDefenseSection",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}}}catch{}export{r as R};
