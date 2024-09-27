import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as i,l}from"./styled-components.browser.esm-CkAH7aAm.js";const s=i.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,a=i.li`
  width: 26px;
  height: 26px;
`,d=i.button`
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

  ${({theme:o,$isSelected:e,$isOccupied:t})=>{if(e)return l`
        border-color: ${o.color.LEMON};
        background-color: ${o.color.LEMON};
        outline: 3px solid ${o.color.LEMON}70;

        color: ${o.color.DARK_BROWN};
      `;if(t)return l`
        border-color: ${o.color.GOLD};

        color: ${o.color.GOLD};
      `}}
`,p=[1,2,3,4,5,6,7,8,9,0],u=o=>{const{selectedSlotNo:e,occupiedSlotNos:t,onChange:c}=o;return n.jsx(s,{children:p.map(r=>n.jsx(a,{children:n.jsx(d,{$isSelected:r===e,$isOccupied:t.includes(r),onClick:()=>{c(r)},"aria-label":`${r}번 슬롯 선택하기. ${r===e?"이미 선택되어 있는 슬롯입니다":""}`,children:r})},r))})};u.__docgenInfo={description:"",methods:[],displayName:"SlotPagination",props:{selectedSlotNo:{required:!0,tsType:{name:"SlotNo"},description:""},occupiedSlotNos:{required:!0,tsType:{name:"Array",elements:[{name:"SlotNo"}],raw:"SlotNo[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(slotNo: SlotNo) => void",signature:{arguments:[{type:{name:"SlotNo"},name:"slotNo"}],return:{name:"void"}}},description:""}}};export{u as S};
