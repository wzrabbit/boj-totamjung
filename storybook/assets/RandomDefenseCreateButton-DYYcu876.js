import{j as t}from"./jsx-runtime-SwSI87LU.js";import{u as c}from"./useTranslation-CHmiwnmk.js";import{y as o,p as u}from"./styled-components.browser.esm-DmPUYCQi.js";const s=o.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,l=u`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme:e})=>e.colors.BROWN_900};
  border: 2px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 6px;
`,p=o.div`
  ${l}

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
  ${l}

  bottom: 0;
`,x=o.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({theme:e})=>e.filters.DARK_ORANGE};
`,f=o.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,v=o.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme:e})=>e.colors.ORANGE};
`,b=o.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.GRAY_300};
`,i=e=>{const{selectedSlotNo:r,isLoaded:a,onClick:d}=e,{t:n}=c();return t.jsxs(s,{type:"button","aria-label":n("randomDefenseCreate.createButton.ariaLabel",[String(r)]),onClick:d,disabled:!a,children:[t.jsxs(p,{children:[t.jsx(x,{src:browser.runtime.getURL("/dice.png"),alt:""}),t.jsxs(f,{children:[t.jsx(v,{children:n("randomDefenseCreate.createButton.title")}),t.jsx(b,{children:a?n("randomDefenseCreate.createButton.slotNumber",[String(r)]):n("randomDefenseCreate.createButton.loading")})]})]}),t.jsx(m,{})]})};try{i.displayName="RandomDefenseCreateButton",i.__docgenInfo={description:"",displayName:"RandomDefenseCreateButton",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}export{i as R};
