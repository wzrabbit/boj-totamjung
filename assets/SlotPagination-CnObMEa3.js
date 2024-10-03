import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as n,l as i}from"./styled-components.browser.esm-CkAH7aAm.js";const u=n.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,d=n.li`
  width: 26px;
  height: 26px;
`,s=n.button`
  width: 100%;
  height: 100%;

  border: 2px solid ${({theme:o})=>o.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme:o})=>o.color.DARK_BROWN};

  color: ${({theme:o})=>o.color.LIGHTER_BROWN};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({theme:o,$isSelected:l,$isOccupied:r})=>{if(l)return i`
        border-color: ${o.color.LEMON};
        background-color: ${o.color.LEMON};
        outline: 3px solid ${o.color.LEMON}70;

        color: ${o.color.DARK_BROWN};
      `;if(r)return i`
        border-color: ${o.color.GOLD};

        color: ${o.color.GOLD};
      `}}
`,p=[1,2,3,4,5,6,7,8,9,0],a=o=>{const{selectedSlotNo:l,occupiedSlotNos:r,onChange:c}=o;return t.jsx(u,{children:p.map(e=>t.jsx(d,{children:t.jsx(s,{$isSelected:e===l,$isOccupied:r.includes(e),onClick:()=>{c(e)},"aria-label":`${e}번 슬롯 선택하기. ${e===l?"이미 선택되어 있는 슬롯입니다":""}`,children:e})},e))})};try{a.displayName="SlotPagination",a.__docgenInfo={description:"",displayName:"SlotPagination",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},occupiedSlotNos:{defaultValue:null,description:"",name:"occupiedSlotNos",required:!0,type:{name:"SlotNo[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(slotNo: SlotNo) => void"}}}}}catch{}export{a as S};
