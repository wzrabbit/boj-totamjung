"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[1880],{"./src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/QuickSlotMenu/HotkeySwitcher",component:__webpack_require__("./src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`HotkeySwitcher`는 무작위 추첨을 시작하기 위한 단축키를 스위칭하는 기능을 제공하기 위한 컴포넌트입니다. `Alt/Option`과 `F2`를 번갈아 스위칭하는 것이 가능합니다. `Alt/Option`의 경우 사용자의 운영체제에 따라 `Alt` 또는 `Option` 중 하나가 표시됩니다."}}}},Default={args:{selectedSlotNo:3,hotkey:"Alt",onClick:()=>{alert("onClick()")}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    selectedSlotNo: 3,\n    hotkey: 'Alt',\n    onClick: () => {\n      alert('onClick()');\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HotkeySwitcher_HotkeySwitcher});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,SwitchButton=styled_components_browser_esm.I4.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme})=>theme.color.LEMON};

    transform: scale(1.1);
  }
`;var Text=__webpack_require__("./src/components/common/Text/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isMac=-1!==navigator.userAgent.toLowerCase().indexOf("mac"),HotkeySwitcher=props=>{const{selectedSlotNo,hotkey,onClick}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:`단축키: ${"Alt"===hotkey?isMac?"Option":"Alt":"F2"} + ${selectedSlotNo}`}),(0,jsx_runtime.jsx)(SwitchButton,{"aria-label":"단축키 전환하기",onClick,children:(0,jsx_runtime.jsx)(svg.A$,{})})]})};HotkeySwitcher.displayName="HotkeySwitcher";const HotkeySwitcher_HotkeySwitcher=HotkeySwitcher;try{HotkeySwitcher.displayName="HotkeySwitcher",HotkeySwitcher.__docgenInfo={description:"",displayName:"HotkeySwitcher",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"number"}},hotkey:{defaultValue:null,description:"",name:"hotkey",required:!0,type:{name:"enum",value:[{value:'"Alt"'},{value:'"F2"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx#HotkeySwitcher"]={docgenInfo:HotkeySwitcher.__docgenInfo,name:"HotkeySwitcher",path:"src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx#HotkeySwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
  text-align: ${({$textAlign})=>$textAlign};
  font-size: ${({$fontSize})=>$fontSize};

  ${({theme,$type})=>"primary"===$type?styled_components_browser_esm.AH`
        color: ${theme.color.GOLD};
        font-weight: 600;
      `:"semiPrimary"===$type?styled_components_browser_esm.AH`
        color: ${theme.color.LEMON};
      `:"code"===$type?styled_components_browser_esm.AH`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${theme.color.WHITE};
      `:styled_components_browser_esm.AH`
      color: ${theme.color.WHITE};
    `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A}}]);
//# sourceMappingURL=components-QuickSlotMenu-HotkeySwitcher-HotkeySwitcher-stories.2c0ee2df.iframe.bundle.js.map