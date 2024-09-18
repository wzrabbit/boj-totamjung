"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[9382],{"./src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_components_common_IconButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/IconButton/index.ts"),_OptionsDataResetModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/OptionsDataManageMenu/OptionsDataResetModal",component:_OptionsDataResetModal__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{},parameters:{docs:{description:{component:"`OptionsDataResetModal`는 토탐정 설정 데이터의 전체 초기화를 진행하기 전, 사용자에게 확인차로 초기화를 진행할 것인지를 묻는 모달입니다."}}}},Default={render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_0__.A,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OptionsDataResetModal__WEBPACK_IMPORTED_MODULE_1__.A,{open:isOpen,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),setIsOpen((()=>!1))},onReset:()=>{alert("onReset()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다."),setIsOpen((()=>!1))}})]})},args:{open:!1,onClose:()=>{},onReset:()=>{}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:'{\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n        <OptionsDataResetModal open={isOpen} onClose={() => {\n        alert(\'onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.\');\n        setIsOpen(() => false);\n      }} onReset={() => {\n        alert(\'onReset()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다.\');\n        setIsOpen(() => false);\n      }} />\n      </>;\n  },\n  args: {\n    open: false,\n    onClose: () => {},\n    onReset: () => {}\n  }\n}',...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsDataResetModal_OptionsDataResetModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),Input=__webpack_require__("./src/components/common/Input/index.ts"),useConfirmInput=__webpack_require__("./src/hooks/useConfirmInput.ts"),theme=__webpack_require__("./src/styles/theme.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,WarnList=styled_components_browser_esm.I4.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme})=>theme.color.LIGHT_RED_TRANSPARENT};
`,WarnListItem=styled_components_browser_esm.I4.li`
  font-size: 14px;
  color: ${({theme})=>theme.color.LIGHT_RED};
`,ConfirmInputWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OptionsDataResetModal=props=>{const{open,onClose,onReset}=props,{inputValue,isSameWithConfirmText,updateInputValue}=(0,useConfirmInput.A)({confirmText:"초기화에 동의합니다"});return(0,jsx_runtime.jsxs)(Modal.A,{title:"데이터 초기화",open,onClose,children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),(0,jsx_runtime.jsxs)(WarnList,{children:[(0,jsx_runtime.jsx)(WarnListItem,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),(0,jsx_runtime.jsx)(WarnListItem,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),(0,jsx_runtime.jsx)(WarnListItem,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",(0,jsx_runtime.jsx)("b",{children:"초기화에 동의합니다"}),"를 입력해 주십시오."]}),(0,jsx_runtime.jsx)(ConfirmInputWrapper,{children:(0,jsx_runtime.jsx)(Input.A,{type:"text",width:"300px",value:inputValue,textAlign:"center",placeholder:'"초기화에 동의합니다"를 입력해 주세요',hasError:!1,ariaLabel:"",onChange:updateInputValue})})]}),(0,jsx_runtime.jsxs)(Modal.Y,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"초기화",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.uc,{}),color:theme.w.color.RED,disabled:!isSameWithConfirmText,ariaLabel:"초기화",onClick:onReset})]})]})};OptionsDataResetModal.displayName="OptionsDataResetModal";const OptionsDataResetModal_OptionsDataResetModal=OptionsDataResetModal;try{OptionsDataResetModal.displayName="OptionsDataResetModal",OptionsDataResetModal.__docgenInfo={description:"",displayName:"OptionsDataResetModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx#OptionsDataResetModal"]={docgenInfo:OptionsDataResetModal.__docgenInfo,name:"OptionsDataResetModal",path:"src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx#OptionsDataResetModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({$width})=>$width||"auto"};
  height: ${({$size})=>"large"===$size?"40px":"32px"};
  padding: ${({$size})=>"large"===$size?"4px 6px":"2px 4px"};

  border: ${({$size,$color})=>"large"===$size?`3px solid ${$color}`:`2px solid ${$color}`};
  border-radius: ${({$size})=>"large"===$size?"6px":"4px"};
  background-color: transparent;

  color: ${({$color})=>$color};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 10px ${({$color})=>$color};
  }

  transition: 0.2s;
`,Text=styled_components_browser_esm.I4.span`
  font-size: ${({$size})=>"large"===$size?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,IconImage=styled_components_browser_esm.I4.img`
  width: ${({$size})=>"large"===$size?"30px":"24px"};
  height: ${({$size})=>"large"===$size?"30px":"24px"};

  object-fit: contain;
`,IconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: ${({$size})=>"large"===$size?"30px":"24px"};
  height: ${({$size})=>"large"===$size?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color})=>$color};
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=props=>{const{name,size,width,color,iconSrc,ariaLabel,...rest}=props;return(0,jsx_runtime.jsxs)(Button,{$size:size,$width:width,$color:color,"aria-label":ariaLabel,...rest,children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:name,$size:size}):(0,jsx_runtime.jsx)(IconWrapper,{$size:size,$color:color,children:iconSrc})),(0,jsx_runtime.jsx)(Text,{$size:size,children:name})]})};IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/common/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/IconButton/IconButton.tsx").A},"./src/components/common/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Input_Input});var react=__webpack_require__("./node_modules/react/index.js");const Input=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.input`
  width: ${({$width})=>$width};
  height: 30px;
  padding: 0 6px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.WHITE};
  text-align: ${({$textAlign})=>$textAlign};
  font-size: 13px;

  &:focus,
  &:active {
    border-color: ${({theme,$hasError})=>$hasError?theme.color.RED:theme.color.LEMON};
    outline: 3px solid
      ${({theme,$hasError})=>$hasError?theme.color.RED:theme.color.LEMON}70;
  }

  transition: outline 0.05s;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_Input=(0,react.forwardRef)(((props,ref)=>{const{width,hasError,textAlign,ariaLabel,...rest}=props;return(0,jsx_runtime.jsx)(Input,{$width:width,$hasError:hasError,$textAlign:textAlign,"aria-label":ariaLabel,spellCheck:!1,ref,...rest})})),common_Input_Input=Input_Input;try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input/Input.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/components/common/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Input/Input.tsx").A},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Modal_ModalActionButtonsContainer,A:()=>common_Modal_Modal});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,Backdrop=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(5px);
  animation: fadeIn 0.2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Modal=styled_components_browser_esm.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px ${({theme})=>theme.color.GOLD};
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,Header=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme})=>theme.color.DARK_BROWN};

  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,Title=styled_components_browser_esm.I4.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme})=>theme.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,CloseButton=styled_components_browser_esm.I4.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme})=>theme.color.GOLD};
  }
`,Body=styled_components_browser_esm.I4.div`
  padding: 16px;

  background-color: ${({theme})=>theme.color.BROWN};

  color: ${({theme})=>theme.color.WHITE};
  font-size: 16px;
`,ModalActionButtonsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme})=>theme.color.DARK_BROWN};
`;var react=__webpack_require__("./node_modules/react/index.js");const hooks_useEscKey=params=>{const{onEscKeyPress}=params,handleKeyPress=event=>{"Escape"===event.key&&onEscKeyPress()};(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyPress),()=>{window.removeEventListener("keydown",handleKeyPress)})),[onEscKeyPress])};var svg=__webpack_require__("./src/images/svg/index.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_Modal=props=>{const{title,open,onClose,children}=props;return hooks_useEscKey({onEscKeyPress:onClose}),open&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Backdrop,{onClick:onClose}),(0,jsx_runtime.jsxs)(Modal,{open,role:"dialog",children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"모달 닫기",children:(0,jsx_runtime.jsx)(svg.US,{})})]}),(0,jsx_runtime.jsx)(Body,{children})]})]}),document.body)},Modal_ModalActionButtonsContainer=props=>{const{children}=props;return(0,jsx_runtime.jsx)(ModalActionButtonsContainer,{children})};Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer";const common_Modal_Modal=Modal_Modal;try{Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer",Modal_ModalActionButtonsContainer.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"]={docgenInfo:Modal_ModalActionButtonsContainer.__docgenInfo,name:"ModalActionButtonsContainer",path:"src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.Y});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Modal/Modal.tsx");const __WEBPACK_DEFAULT_EXPORT__=_Modal__WEBPACK_IMPORTED_MODULE_0__.A},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/hooks/useConfirmInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=params=>{const{confirmText:initConfirmText}=params,[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[confirmText,setConfirmText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initConfirmText);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setConfirmText(confirmText)}),[initConfirmText]);return{inputValue,isSameWithConfirmText:inputValue===confirmText,updateInputValue:event=>{setInputValue(event.target.value)}}}}}]);
//# sourceMappingURL=components-OptionsDataManageMenu-OptionsDataResetModal-OptionsDataResetModal-stories.96d1b696.iframe.bundle.js.map