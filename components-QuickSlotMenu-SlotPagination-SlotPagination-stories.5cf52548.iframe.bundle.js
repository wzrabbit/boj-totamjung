"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[5086],{"./src/components/QuickSlotMenu/SlotPagination/SlotPagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/QuickSlotMenu/SlotPagination",component:__webpack_require__("./src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`SlotPagination`는 선택된 슬롯의 번호를 변경할 때 사용하는 컴포넌트입니다. 각 슬롯이 생성되어 있는지도 시각적으로 표시하는 역할을 겸합니다."}}}},Default={args:{selectedSlotNo:1,occupiedSlotNos:[2,8,4],onChange:slotNo=>{alert(`onChange(${slotNo})`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    selectedSlotNo: 1,\n    occupiedSlotNos: [2, 8, 4],\n    onChange: (slotNo: number) => {\n      alert(`onChange(${slotNo})`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SlotPagination_SlotPagination});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,CircleSlotButtonWrapper=styled_components_browser_esm.I4.li`
  width: 26px;
  height: 26px;
`,CircleSlotButton=styled_components_browser_esm.I4.button`
  width: 100%;
  height: 100%;

  border: 2px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.LIGHTER_BROWN};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({theme,$isSelected,$isOccupied})=>$isSelected?styled_components_browser_esm.AH`
        border-color: ${theme.color.LEMON};
        background-color: ${theme.color.LEMON};
        outline: 3px solid ${theme.color.LEMON}70;

        color: ${theme.color.DARK_BROWN};
      `:$isOccupied?styled_components_browser_esm.AH`
        border-color: ${theme.color.GOLD};

        color: ${theme.color.GOLD};
      `:void 0}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SLOT_NOS=[1,2,3,4,5,6,7,8,9,0],SlotPagination=props=>{const{selectedSlotNo,occupiedSlotNos,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:SLOT_NOS.map((slotNo=>(0,jsx_runtime.jsx)(CircleSlotButtonWrapper,{children:(0,jsx_runtime.jsx)(CircleSlotButton,{$isSelected:slotNo===selectedSlotNo,$isOccupied:occupiedSlotNos.includes(slotNo),onClick:()=>{onChange(slotNo)},"aria-label":`${slotNo}번 슬롯 선택하기. ${slotNo===selectedSlotNo?"이미 선택되어 있는 슬롯입니다":""}`,children:slotNo})},slotNo)))})};SlotPagination.displayName="SlotPagination";const SlotPagination_SlotPagination=SlotPagination;try{SlotPagination.displayName="SlotPagination",SlotPagination.__docgenInfo={description:"",displayName:"SlotPagination",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},occupiedSlotNos:{defaultValue:null,description:"",name:"occupiedSlotNos",required:!0,type:{name:"SlotNo[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(slotNo: SlotNo) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx#SlotPagination"]={docgenInfo:SlotPagination.__docgenInfo,name:"SlotPagination",path:"src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx#SlotPagination"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-QuickSlotMenu-SlotPagination-SlotPagination-stories.5cf52548.iframe.bundle.js.map