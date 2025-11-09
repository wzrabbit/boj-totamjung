import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./RandomDefenseCreateMenu-CGtkaUjd.js";import{Q as x}from"./QuickSlotsMenu-D9ogikZs.js";import{u as h}from"./useRandomDefenseSection-BCWo8uMU.js";import{R as S}from"./RandomDefenseHistoryMenu-C6mnCNfF.js";import{M as g}from"./MenuTitle-C7FRvFNi.js";import{d as o}from"./styled-components.browser.esm-CIS6JKSM.js";const y=o.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,R=o.div`
  display: flex;
  column-gap: 12px;
`,M=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`,r=n=>{const{slots:a,selectedSlotNo:t,hotkey:l,isLoaded:s,setSelectedSlotNo:d,setHotkey:c,updateSlot:i,deleteSlot:m}=h(),{show:p}=n,u={slots:a,selectedSlotNo:t,hotkey:l};return p?e.jsxs(y,{children:[e.jsx(g,{title:"랜덤 디펜스",iconSrc:browser.runtime.getURL("/dice.png")}),e.jsxs(R,{children:[e.jsxs(M,{children:[e.jsx(f,{isLoaded:s,selectedSlotNo:t,onSubmit:i}),e.jsx(x,{quickSlotsInfo:u,isLoaded:s,onHotkeyChange:c,onSlotChange:i,onSlotDelete:m,onSlotNoChange:d})]}),e.jsx(S,{})]})]}):null};try{r.displayName="RandomDefenseSection",r.__docgenInfo={description:"",displayName:"RandomDefenseSection",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}}}catch{}export{r as R};
