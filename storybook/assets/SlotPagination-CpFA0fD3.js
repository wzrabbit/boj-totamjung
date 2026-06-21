import{j as t}from"./jsx-runtime-SwSI87LU.js";import{u}from"./useTranslation-CHmiwnmk.js";import{y as i,p as a}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as d}from"./getTransparentHexColor-DN69VCBw.js";const p=i.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,S=i.li`
  width: 26px;
  height: 26px;
`,g=i.button`
  width: 100%;
  height: 100%;

  border: 2px solid ${({theme:o})=>o.colors.BROWN_500};
  border-radius: 50%;
  background-color: ${({theme:o})=>o.colors.BROWN_900};

  color: ${({theme:o})=>o.colors.BROWN_500};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({theme:o,$isSelected:r,$isOccupied:l})=>{if(r)return a`
        border-color: ${o.colors.LEMON};
        background-color: ${o.colors.LEMON};
        outline: 3px solid ${d(o.colors.LEMON,.44)};

        color: ${o.colors.BROWN_900};
      `;if(l)return a`
        border-color: ${o.colors.GOLD};

        color: ${o.colors.GOLD};
      `}}
`,x=[1,2,3,4,5,6,7,8,9,0],c=o=>{const{selectedSlotNo:r,occupiedSlotNos:l,onChange:s}=o,{t:n}=u();return t.jsx(p,{children:x.map(e=>t.jsx(S,{children:t.jsx(g,{$isSelected:e===r,$isOccupied:l.includes(e),onClick:()=>{s(e)},"aria-label":`${n("quickSlots.pagination.selectAriaLabel",[String(e)])} ${e===r?n("quickSlots.pagination.alreadySelectedSuffix"):""}`,children:e})},e))})};try{c.displayName="SlotPagination",c.__docgenInfo={description:"",displayName:"SlotPagination",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},occupiedSlotNos:{defaultValue:null,description:"",name:"occupiedSlotNos",required:!0,type:{name:"QuickSlotNo[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(slotNo: QuickSlotNo) => void"}}}}}catch{}export{c as S};
