import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as o,l as d}from"./styled-components.browser.esm-CkAH7aAm.js";const r=o.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,a=d`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
`,c=o.div`
  ${a}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${r}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,u=o.div`
  ${a}

  bottom: 0;
`,p=o.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:e})=>e.filter.DARK_ORANGE_FILTER};
`,x=o.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,m=o.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:e})=>e.color.ORANGE};
`,f=o.p`
  font-size: 12px;
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,i=e=>{const{selectedSlotNo:n,isLoaded:l,onClick:s}=e;return t.jsxs(r,{type:"button","aria-label":`${n}번 슬롯에 추첨 생성하기`,onClick:s,disabled:!l,children:[t.jsxs(c,{children:[t.jsx(p,{src:browser.runtime.getURL("/dice.png"),alt:""}),t.jsxs(x,{children:[t.jsx(m,{children:"추첨 생성"}),t.jsx(f,{children:l?`슬롯 번호 − ${n}`:"로딩 중..."})]})]}),t.jsx(u,{})]})};try{i.displayName="RandomDefenseCreateButton",i.__docgenInfo={description:"",displayName:"RandomDefenseCreateButton",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}export{i as R};
