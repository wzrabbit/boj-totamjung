import{j as e}from"./jsx-runtime-DEdD30eg.js";import{R as f}from"./RandomDefenseCreateMenu-BfLwcPXi.js";import{Q as u}from"./QuickSlotMenu-DTT9SHU6.js";import{u as x}from"./useRandomDefenseSection-BvsdrhmU.js";import{R as h}from"./RandomDefenseHistoryMenu-BasdG8RC.js";import{M as S}from"./MenuTitle-CowrM9J4.js";import{d as o}from"./styled-components.browser.esm-CkAH7aAm.js";const g=o.section`
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
`,j=i=>{const{slots:a,selectedSlotNo:n,hotkey:l,isLoaded:t,setSelectedSlotNo:r,setHotkey:d,updateSlot:s,deleteSlot:m}=x(),{show:c}=i,p={slots:a,selectedSlotNo:n,hotkey:l};return c?e.jsxs(g,{children:[e.jsx(S,{title:"문제 추첨",iconSrc:browser.runtime.getURL("dice.png")}),e.jsxs(R,{children:[e.jsxs(M,{children:[e.jsx(f,{isLoaded:t,selectedSlotNo:n,onSubmit:s}),e.jsx(u,{quickSlotsInfo:p,isLoaded:t,onHotkeyChange:d,onSlotChange:s,onSlotDelete:m,onSlotNoChange:r})]}),e.jsx(h,{})]})]}):null};j.__docgenInfo={description:"",methods:[],displayName:"RandomDefenseSection"};export{j as R};
