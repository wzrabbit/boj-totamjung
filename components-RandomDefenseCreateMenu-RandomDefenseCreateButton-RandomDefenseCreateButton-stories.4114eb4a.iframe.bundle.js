"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[7234],{"./src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_Loading$parameters,_Loading$parameters2,_Loading$parameters3;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/RandomDefenseCreateButton",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`RandomDefenseCreateButton`는 추첨 생성 메뉴에서 추첨 생성 확정 시 사용될 버튼입니다. 추첨이 생성될 슬롯의 번호를 알려주는 역할도 겸합니다."}}}},Default={args:{selectedSlotNo:1,isLoaded:!0,onClick:()=>{alert("onClick()")}}},Loading={args:{selectedSlotNo:1,isLoaded:!1,onClick:()=>{alert("onClick()")}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    selectedSlotNo: 1,\n    isLoaded: true,\n    onClick: () => {\n      alert('onClick()');\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}},Loading.parameters={...Loading.parameters,docs:{...null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs,source:{originalSource:"{\n  args: {\n    selectedSlotNo: 1,\n    isLoaded: false,\n    onClick: () => {\n      alert('onClick()');\n    }\n  }\n}",...null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source},description:{story:"아직 슬롯의 번호를 부모 컴포넌트에서 불러오지 못해, 로딩 중일 경우에 보여주는 UI입니다. 버튼은 비활성화 되어 있습니다.",...null===(_Loading$parameters3=Loading.parameters)||void 0===_Loading$parameters3||null===(_Loading$parameters3=_Loading$parameters3.docs)||void 0===_Loading$parameters3?void 0:_Loading$parameters3.description}}};const __namedExportsOrder=["Default","Loading"];try{Loading.displayName="Loading",Loading.__docgenInfo={description:"아직 슬롯의 번호를 부모 컴포넌트에서 불러오지 못해, 로딩 중일 경우에 보여주는 UI입니다. 버튼은 비활성화 되어 있습니다.",displayName:"Loading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.stories.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.stories.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseCreateButton_RandomDefenseCreateButton});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,buttonSide=styled_components_browser_esm.AH`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme})=>theme.color.DARK_BROWN};
  border: 2px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 6px;
`,UpperSide=styled_components_browser_esm.I4.div`
  ${buttonSide}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${Button}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,LowerSide=styled_components_browser_esm.I4.div`
  ${buttonSide}

  bottom: 0;
`,DiceIconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 36px;
  height: 36px;

  & svg {
    width: 36px;
    height: 36px;

    color: ${({theme})=>theme.color.DARK_ORANGE};
  }
`,TextContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,TitleText=styled_components_browser_esm.I4.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme})=>theme.color.ORANGE};
`,SlotNoText=styled_components_browser_esm.I4.p`
  font-size: 12px;
  color: ${({theme})=>theme.color.LIGHT_GRAY};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseCreateButton=props=>{const{selectedSlotNo,isLoaded,onClick}=props;return(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":`${selectedSlotNo}번 슬롯에 추첨 생성하기`,onClick,disabled:!isLoaded,children:[(0,jsx_runtime.jsxs)(UpperSide,{children:[(0,jsx_runtime.jsx)(DiceIconWrapper,{children:(0,jsx_runtime.jsx)(svg.jG,{})}),(0,jsx_runtime.jsxs)(TextContainer,{children:[(0,jsx_runtime.jsx)(TitleText,{children:"추첨 생성"}),(0,jsx_runtime.jsx)(SlotNoText,{children:isLoaded?`슬롯 번호 − ${selectedSlotNo}`:"로딩 중..."})]})]}),(0,jsx_runtime.jsx)(LowerSide,{})]})};RandomDefenseCreateButton.displayName="RandomDefenseCreateButton";const RandomDefenseCreateButton_RandomDefenseCreateButton=RandomDefenseCreateButton;try{RandomDefenseCreateButton.displayName="RandomDefenseCreateButton",RandomDefenseCreateButton.__docgenInfo={description:"",displayName:"RandomDefenseCreateButton",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx#RandomDefenseCreateButton"]={docgenInfo:RandomDefenseCreateButton.__docgenInfo,name:"RandomDefenseCreateButton",path:"src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx#RandomDefenseCreateButton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-RandomDefenseCreateButton-RandomDefenseCreateButton-stories.4114eb4a.iframe.bundle.js.map