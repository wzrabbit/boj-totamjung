"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[1627],{"./src/components/OptionsDataManageMenu/OptionsDataManageMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/OptionsDataManageMenu",component:__webpack_require__("./src/components/OptionsDataManageMenu/OptionsDataManageMenu.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`OptionsDataManageMenu`는 설정 데이터를 내보내거나, 업로드하거나, 혹은 완전히 초기화시킬 수 있는 등 설정 데이터를 사용자가 관리할 수 있도록 기능을 제공하는 메뉴입니다."}}}},Default={args:{onChange:()=>{}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    onChange: () => {}\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/MenuTitle/MenuTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuTitle_MenuTitle});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,IconImage=styled_components_browser_esm.I4.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme})=>theme.filter.ORANGE_FILTER};
  object-fit: contain;
`,IconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.ORANGE};
  }
`,Title=styled_components_browser_esm.I4.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme})=>theme.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Underline=styled_components_browser_esm.I4.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme})=>theme.color.ORANGE_TRANSPARENT};

  z-index: -1;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuTitle=props=>{const{iconSrc,title}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:""}):(0,jsx_runtime.jsx)(IconWrapper,{children:iconSrc})),(0,jsx_runtime.jsx)(Title,{children:title})]}),(0,jsx_runtime.jsx)(Underline,{})]})};MenuTitle.displayName="MenuTitle";const MenuTitle_MenuTitle=MenuTitle;try{MenuTitle.displayName="MenuTitle",MenuTitle.__docgenInfo={description:"",displayName:"MenuTitle",props:{iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string | SVGProps<SVGSVGElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.tsx#MenuTitle"]={docgenInfo:MenuTitle.__docgenInfo,name:"MenuTitle",path:"src/components/MenuTitle/MenuTitle.tsx#MenuTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuTitle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/MenuTitle/MenuTitle.tsx").A},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
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
`;var react=__webpack_require__("./node_modules/react/index.js");const hooks_useEscKey=params=>{const{onEscKeyPress}=params,handleKeyPress=event=>{"Escape"===event.key&&onEscKeyPress()};(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyPress),()=>{window.removeEventListener("keydown",handleKeyPress)})),[onEscKeyPress])};var svg=__webpack_require__("./src/images/svg/index.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_Modal=props=>{const{title,open,onClose,children}=props;return hooks_useEscKey({onEscKeyPress:onClose}),open&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Backdrop,{onClick:onClose}),(0,jsx_runtime.jsxs)(Modal,{open,role:"dialog",children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"모달 닫기",children:(0,jsx_runtime.jsx)(svg.US,{})})]}),(0,jsx_runtime.jsx)(Body,{children})]})]}),document.body)},Modal_ModalActionButtonsContainer=props=>{const{children}=props;return(0,jsx_runtime.jsx)(ModalActionButtonsContainer,{children})};Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer";const common_Modal_Modal=Modal_Modal;try{Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer",Modal_ModalActionButtonsContainer.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"]={docgenInfo:Modal_ModalActionButtonsContainer.__docgenInfo,name:"ModalActionButtonsContainer",path:"src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.Y});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Modal/Modal.tsx");const __WEBPACK_DEFAULT_EXPORT__=_Modal__WEBPACK_IMPORTED_MODULE_0__.A},"./src/components/common/SimpleModal/SimpleModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SimpleModal_SimpleModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),svg=__webpack_require__("./src/images/svg/index.ts");const ContentContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  width: ${({$width})=>$width};
  max-width: 100%;
  min-height: ${({$height})=>$height};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleModal=props=>{const{title,width,height,open,message,actionType}=props;return(0,jsx_runtime.jsxs)(Modal.A,{title,open,onClose:()=>{"yesNo"===actionType?props.onNoSelect():props.onClose()},children:[(0,jsx_runtime.jsx)(ContentContainer,{$width:width,$height:height,children:(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:message})}),(0,jsx_runtime.jsx)(Modal.Y,{children:"confirm"===actionType?(0,jsx_runtime.jsx)(ConfirmButton,{onClose:props.onClose}):"cancelConfirm"===actionType?(0,jsx_runtime.jsx)(CancelConfirmButtons,{onClose:props.onClose,onConfirm:props.onConfirm}):(0,jsx_runtime.jsx)(YesNoButtons,{onYesSelect:props.onYesSelect,onNoSelect:props.onNoSelect})})]})};SimpleModal.displayName="SimpleModal";const ConfirmButton=props=>{const{onClose}=props;return(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onClose,autoFocus:!0})};ConfirmButton.displayName="ConfirmButton";const CancelConfirmButtons=props=>{const{onClose,onConfirm}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onConfirm})]})},YesNoButtons=props=>{const{onYesSelect,onNoSelect}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.LIME,disabled:!1,ariaLabel:"예",onClick:onYesSelect}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"아니요",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.RED,disabled:!1,ariaLabel:"아니요",onClick:onNoSelect})]})},SimpleModal_SimpleModal=SimpleModal;try{SimpleModal.displayName="SimpleModal",SimpleModal.__docgenInfo={description:"",displayName:"SimpleModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actionType:{defaultValue:null,description:"",name:"actionType",required:!0,type:{name:"enum",value:[{value:'"confirm"'},{value:'"cancelConfirm"'},{value:'"yesNo"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) | (() => void)"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onYesSelect:{defaultValue:null,description:"",name:"onYesSelect",required:!0,type:{name:"() => void"}},onNoSelect:{defaultValue:null,description:"",name:"onNoSelect",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"]={docgenInfo:SimpleModal.__docgenInfo,name:"SimpleModal",path:"src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SimpleModal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/SimpleModal/SimpleModal.tsx").A},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/constants/defaultValues.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fj:()=>DEFAULT_CHECKED_ALGORITHM_IDS,Gv:()=>DEFAULT_HIDER_OPTIONS,Q6:()=>DEFAULT_QUICK_SLOTS_RESPONSE,nF:()=>DEFAULT_IS_TIER_HIDDEN,o:()=>DEFAULT_INITIAL_DATA,w$:()=>DEFAULT_RANDOM_DEFENSE_HISTORY});var _commands__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/commands.ts");const DEFAULT_CHECKED_ALGORITHM_IDS=[1,2],DEFAULT_QUICK_SLOTS={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},DEFAULT_QUICK_SLOTS_RESPONSE={hotkey:"Alt",selectedSlotNo:1,slots:DEFAULT_QUICK_SLOTS},DEFAULT_HIDER_OPTIONS={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},DEFAULT_IS_TIER_HIDDEN=!1,DEFAULT_RANDOM_DEFENSE_HISTORY=[],DEFAULT_INITIAL_DATA={[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.DATA_VERSION]:"v1.2",[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.CHECKED_ALGORITHM_IDS]:DEFAULT_CHECKED_ALGORITHM_IDS,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.QUICK_SLOTS]:DEFAULT_QUICK_SLOTS_RESPONSE,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.TOTAMJUNG_THEME]:"none",[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.HIDER_OPTIONS]:DEFAULT_HIDER_OPTIONS,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.RANDOM_DEFENSE_HISTORY]:DEFAULT_RANDOM_DEFENSE_HISTORY,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.IS_TIER_HIDDEN]:DEFAULT_IS_TIER_HIDDEN,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.FONT_NO]:0,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.TIMERS]:[]}},"./src/constants/randomDefense.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B3:()=>MAX_PROBLEM_ID,M$:()=>NUMBER_REGEX,Nu:()=>MAX_SEARCH_ALGORITHMS_COUNT,Nw:()=>TITLE_MAX_LENGTH,Rv:()=>HANDLE_REGEX,TN:()=>MIN_PROBLEM_ID,UI:()=>MAX_PROBLEM_NAME_LENGTH,W1:()=>MAX_TIER,Xq:()=>MAX_CUSTOM_QUERY_LENGTH,b8:()=>MAX_SOLVED_COUNT,ey:()=>MIN_TIER,o0:()=>MAX_HISTORY_LIMIT});const MIN_TIER=0,MAX_TIER=30,MIN_PROBLEM_ID=1e3,MAX_PROBLEM_ID=99999,MAX_PROBLEM_NAME_LENGTH=500,MAX_HISTORY_LIMIT=300,MAX_SEARCH_ALGORITHMS_COUNT=5,TITLE_MAX_LENGTH=30,HANDLE_REGEX=/^\w{3,20}$/,MAX_SOLVED_COUNT=1e8,NUMBER_REGEX=/^([1-9][0-9]*|0)$/,MAX_CUSTOM_QUERY_LENGTH=300},"./src/domains/dataHandlers/hiderOptionsDataHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>fetchHiderOptions,c:()=>saveHiderOptions});var _constants_commands__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/commands.ts"),_constants_defaultValues__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/defaultValues.ts"),_validators_hiderOptionsValidator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/domains/dataHandlers/validators/hiderOptionsValidator.ts");const fetchHiderOptions=async()=>{const hiderOptions=(await chrome.storage.local.get(_constants_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.HIDER_OPTIONS))[_constants_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.HIDER_OPTIONS];return(0,_validators_hiderOptionsValidator__WEBPACK_IMPORTED_MODULE_2__.Oh)(hiderOptions)?hiderOptions:_constants_defaultValues__WEBPACK_IMPORTED_MODULE_1__.Gv},saveHiderOptions=hiderOptions=>{(0,_validators_hiderOptionsValidator__WEBPACK_IMPORTED_MODULE_2__.Oh)(hiderOptions)&&chrome.storage.local.set({[_constants_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.HIDER_OPTIONS]:hiderOptions})}},"./src/domains/dataHandlers/validators/hiderOptionsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Oh:()=>isHiderOptionsResponse});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isHiderOptionsResponse=data=>{if(!((0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"problemTagLockDuration"in data&&"shouldHideTier"in data&&"shouldWarnHighTier"in data&&"warnTier"in data&&"algorithmHiderUsage"in data&&"problemTagLockUsage"in data&&(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data.problemTagLockDuration)&&"hours"in data.problemTagLockDuration&&"minutes"in data.problemTagLockDuration&&"number"==typeof data.problemTagLockDuration.hours&&"number"==typeof data.problemTagLockDuration.minutes&&"boolean"==typeof data.shouldHideTier&&"boolean"==typeof data.shouldWarnHighTier&&(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.br)(data.warnTier)&&"string"==typeof data.algorithmHiderUsage&&["click","always"].includes(data.algorithmHiderUsage)&&"string"==typeof data.problemTagLockUsage&&["click","auto"].includes(data.problemTagLockUsage)))return!1;const{hours,minutes}=data.problemTagLockDuration;return hours>=0&&hours<100&&minutes>=0&&minutes<60&&hours%1==0&&minutes%1==0}},"./src/types/typeGuards.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gv:()=>isObject,H9:()=>isNumericArray,Lq:()=>isTierWithoutNotRatable,br:()=>isRatedTier,hj:()=>isNumericObject,hz:()=>isIsoString});const isObject=data=>"object"==typeof data&&null!==data,isNumericObject=data=>isObject(data)&&Object.keys(data).every((key=>!isNaN(Number(key)))),isNumericArray=data=>Array.isArray(data)&&data.every((value=>"number"==typeof value)),isIsoString=data=>"string"==typeof data&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),isTier=data=>"number"==typeof data&&data%1==0&&data>=0&&data<=31,isTierWithoutNotRatable=data=>isTier(data)&&31!==data,isRatedTier=data=>isTier(data)&&0!==data&&31!==data}}]);
//# sourceMappingURL=components-OptionsDataManageMenu-OptionsDataManageMenu-stories.362d9923.iframe.bundle.js.map