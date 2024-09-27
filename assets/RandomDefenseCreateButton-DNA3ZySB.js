import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{d as o,l}from"./styled-components.browser.esm-CkAH7aAm.js";const d=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...e},i.createElement("path",{fill:"currentColor",d:"M255.76 44.764c-6.176 0-12.353 1.384-17.137 4.152L85.87 137.276c-9.57 5.536-9.57 14.29 0 19.826l152.753 88.36c9.57 5.536 24.703 5.536 34.272 0l152.753-88.36c9.57-5.535 9.57-14.29 0-19.825l-152.753-88.36c-4.785-2.77-10.96-4.153-17.135-4.153m.926 82.855a31.953 18.96 0 0 1 22.127 32.362a31.953 18.96 0 1 1-45.188-26.812a31.953 18.96 0 0 1 23.06-5.55zM75.67 173.84c-5.753-.155-9.664 4.336-9.664 12.28v157.696c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.14 1.156 17.14-9.895V290.76c0-11.052-7.57-24.16-17.14-29.688l-146.93-84.847c-2.69-1.555-5.225-2.327-7.476-2.387zm360.773.002c-2.25.06-4.783.83-7.474 2.385l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.7c0 11.05 7.57 15.418 17.14 9.89L428.97 373.51c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c0-7.942-3.91-12.432-9.664-12.278zM89.297 195.77a31.236 18.008 58.094 0 1 33.818 41.183a31.236 18.008 58.094 1 1-45-25.98a31.236 18.008 58.094 0 1 11.182-15.203m221.52 64.664A18.008 31.236 31.906 0 1 322 275.637a18.008 31.236 31.906 0 1-45 25.98a18.008 31.236 31.906 0 1 33.818-41.183zM145.296 289.1a31.236 18.008 58.094 0 1 33.818 41.183a31.236 18.008 58.094 0 1-45-25.98a31.236 18.008 58.094 0 1 11.182-15.203m277.523 29.38A18.008 31.236 31.906 0 1 434 333.684a18.008 31.236 31.906 0 1-45 25.98a18.008 31.236 31.906 0 1 33.818-41.184zm-221.52 64.663a31.236 18.008 58.094 0 1 33.817 41.183a31.236 18.008 58.094 1 1-45-25.98a31.236 18.008 58.094 0 1 11.182-15.203z"})),s=o.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,a=l`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};
  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
`,p=o.div`
  ${a}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${s}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,m=o.div`
  ${a}

  bottom: 0;
`,x=o.div`
  flex-shrink: 0;

  width: 36px;
  height: 36px;

  & svg {
    width: 36px;
    height: 36px;

    color: ${({theme:e})=>e.color.DARK_ORANGE};
  }
`,u=o.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,h=o.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:e})=>e.color.ORANGE};
`,v=o.p`
  font-size: 12px;
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
`,f=e=>{const{selectedSlotNo:n,isLoaded:r,onClick:c}=e;return t.jsxs(s,{type:"button","aria-label":`${n}번 슬롯에 추첨 생성하기`,onClick:c,disabled:!r,children:[t.jsxs(p,{children:[t.jsx(x,{children:t.jsx(d,{})}),t.jsxs(u,{children:[t.jsx(h,{children:"추첨 생성"}),t.jsx(v,{children:r?`슬롯 번호 − ${n}`:"로딩 중..."})]})]}),t.jsx(m,{})]})};f.__docgenInfo={description:"",methods:[],displayName:"RandomDefenseCreateButton",props:{selectedSlotNo:{required:!0,tsType:{name:"SlotNo"},description:""},isLoaded:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""}}};export{f as R};
