"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[4272],{"./src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_components_common_IconButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/IconButton/index.ts"),_SlotEditModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/QuickSlotMenu/SlotEditModal",component:_SlotEditModal__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{},parameters:{docs:{description:{component:"`SlotEditModal`는 슬롯에 있는 연습 이름과 쿼리 내용을 변경할 수 있는 기능을 제공하는 모달입니다."}}}},Default={render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_0__.A,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SlotEditModal__WEBPACK_IMPORTED_MODULE_1__.A,{title:"기존 추첨 이름",query:"tier:g5..g1 solvable:true",open:isOpen,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),setIsOpen((()=>!1))},onSlotChange:(name,query)=>{alert(`onSlotChange("${name}", "${query}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.`),setIsOpen((()=>!1))}})]})},args:{title:"",query:"",open:!1,onClose:()=>{},onSlotChange:()=>{}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:'{\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n        <SlotEditModal title="기존 추첨 이름" query="tier:g5..g1 solvable:true" open={isOpen} onClose={() => {\n        alert(\'onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.\');\n        setIsOpen(() => false);\n      }} onSlotChange={(name, query) => {\n        alert(`onSlotChange("${name}", "${query}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.`);\n        setIsOpen(() => false);\n      }} />\n      </>;\n  },\n  args: {\n    title: \'\',\n    query: \'\',\n    open: false,\n    onClose: () => {},\n    onSlotChange: () => {}\n  }\n}',...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SlotEditModal_SlotEditModal});var theme=__webpack_require__("./src/styles/theme.ts"),Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),Textarea=__webpack_require__("./src/components/common/Textarea/index.ts"),Input=__webpack_require__("./src/components/common/Input/index.ts"),ErrorText=__webpack_require__("./src/components/common/ErrorText/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const randomDefense_useSlotEditModal=params=>{const{initTitle,initQuery,onSlotChange}=params,[title,setTitle]=(0,react.useState)(initTitle),[query,setQuery]=(0,react.useState)(initQuery),[errorMessage,setErrorMessage]=(0,react.useState)(""),[errorElementName,setErrorElementName]=(0,react.useState)(void 0),titleRef=(0,react.useRef)(null),queryRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{setTitle(initTitle),setQuery(initQuery),setErrorMessage(""),setErrorElementName(void 0)}),[initTitle,initQuery]);return{title,query,errorMessage,isTitleElementHasErrors:"title"===errorElementName,isQueryElementHasErrors:"query"===errorElementName,setQuery,setTitle,submitSlotInfo:()=>{const slotValidationResult=((title,query)=>title.length>30?{isValid:!1,errorMessage:"추첨 이름의 길이가 너무 길어요. 30자 이하가 되도록 줄여 주세요.",focusElementName:"title"}:""===query.trim()?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:query.length>300?{isValid:!1,errorMessage:"쿼리의 길이가 너무 길어요. 300자 이하가 되도록 줄여 주세요.",focusElementName:"query"}:{isValid:!0})(title,query);if(slotValidationResult.isValid)return onSlotChange(title,query),void setErrorMessage("");const titleElement=titleRef.current,queryElement=queryRef.current,{focusElementName}=slotValidationResult;"title"===focusElementName&&(null==titleElement||titleElement.select()),"query"===focusElementName&&(null==queryElement||queryElement.select()),setErrorElementName(focusElementName),setErrorMessage(slotValidationResult.errorMessage)},titleRef,queryRef}};var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Form=styled_components_browser_esm.I4.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 270px;
`,Label=styled_components_browser_esm.I4.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SlotEditModal=props=>{const{title:initTitle,query:initQuery,open,onClose,onSlotChange}=props,{title,query,errorMessage,isTitleElementHasErrors,isQueryElementHasErrors,setQuery,setTitle,submitSlotInfo,titleRef,queryRef}=randomDefense_useSlotEditModal({initTitle,initQuery,onSlotChange});return(0,jsx_runtime.jsxs)(Modal.A,{title:"추첨 수정",open,onClose,children:[(0,jsx_runtime.jsxs)(Form,{children:[(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"추첨 이름"}),(0,jsx_runtime.jsx)(Input.A,{type:"text",width:"100%",name:"title",value:title,ref:titleRef,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:isTitleElementHasErrors,ariaLabel:"새로운 추첨 이름을 입력해주세요",onChange:event=>{setTitle(event.target.value)}})]}),(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"쿼리"}),(0,jsx_runtime.jsx)(Textarea.A,{width:"100%",height:"150px",name:"query",value:query,ref:queryRef,maxLength:300,placeholder:"1 ~ 300자",hasError:isQueryElementHasErrors,ariaLabel:"새로운 쿼리를 입력해주세요",onChange:event=>{setQuery(event.target.value)}})]}),(0,jsx_runtime.jsx)(ErrorText.A,{fontSize:"14px",errorMessage})]}),(0,jsx_runtime.jsxs)(Modal.Y,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:submitSlotInfo})]})]})};SlotEditModal.displayName="SlotEditModal";const SlotEditModal_SlotEditModal=SlotEditModal;try{SlotEditModal.displayName="SlotEditModal",SlotEditModal.__docgenInfo={description:"",displayName:"SlotEditModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSlotChange:{defaultValue:null,description:"",name:"onSlotChange",required:!0,type:{name:"(title: string, query: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx#SlotEditModal"]={docgenInfo:SlotEditModal.__docgenInfo,name:"SlotEditModal",path:"src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx#SlotEditModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/ErrorText/ErrorText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_ErrorText_ErrorText});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getContainerSizeByFontSize=fontSize=>`${Number(fontSize.slice(0,2))+3}px`,Container=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 4px;

  width: 100%;
  min-height: ${({$fontSize})=>getContainerSizeByFontSize($fontSize)};
  height: ${({$height})=>void 0===$height?"auto":$height};

  & > svg {
    flex-shrink: 0;

    width: ${({$fontSize})=>getContainerSizeByFontSize($fontSize)};
    height: ${({$fontSize})=>getContainerSizeByFontSize($fontSize)};

    color: ${({theme})=>theme.color.LIGHT_RED};
  }
`,ErrorText=styled_components_browser_esm.I4.p`
  font-size: ${({$fontSize})=>$fontSize};

  color: ${({theme})=>theme.color.LIGHT_RED};
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorText_ErrorText=props=>{const{fontSize,errorMessage,height}=props;return(0,jsx_runtime.jsx)(Container,{$fontSize:fontSize,$height:height,children:""!==errorMessage&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(svg.id,{}),(0,jsx_runtime.jsx)(ErrorText,{$fontSize:fontSize,role:"alert",children:errorMessage})]})})};ErrorText_ErrorText.displayName="ErrorText";const common_ErrorText_ErrorText=ErrorText_ErrorText;try{ErrorText_ErrorText.displayName="ErrorText",ErrorText_ErrorText.__docgenInfo={description:"",displayName:"ErrorText",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<number | (string & {})>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/ErrorText/ErrorText.tsx#ErrorText"]={docgenInfo:ErrorText_ErrorText.__docgenInfo,name:"ErrorText",path:"src/components/common/ErrorText/ErrorText.tsx#ErrorText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/ErrorText/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/ErrorText/ErrorText.tsx").A},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=props=>{const{name,size,width,color,iconSrc,ariaLabel,...rest}=props;return(0,jsx_runtime.jsxs)(Button,{$size:size,$width:width,$color:color,"aria-label":ariaLabel,...rest,children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:name,$size:size}):(0,jsx_runtime.jsx)(IconWrapper,{$size:size,$color:color,children:iconSrc})),(0,jsx_runtime.jsx)(Text,{$size:size,children:name})]})};IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/common/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/IconButton/IconButton.tsx").A},"./src/components/common/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Input_Input});var react=__webpack_require__("./node_modules/react/index.js");const Input=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.input`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_Modal=props=>{const{title,open,onClose,children}=props;return open&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Backdrop,{onClick:onClose}),(0,jsx_runtime.jsxs)(Modal,{open,role:"dialog",children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"모달 닫기",children:(0,jsx_runtime.jsx)(svg.US,{})})]}),(0,jsx_runtime.jsx)(Body,{children})]})]}),document.body)},Modal_ModalActionButtonsContainer=props=>{const{children}=props;return(0,jsx_runtime.jsx)(ModalActionButtonsContainer,{children})};Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer";const common_Modal_Modal=Modal_Modal;try{Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer",Modal_ModalActionButtonsContainer.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"]={docgenInfo:Modal_ModalActionButtonsContainer.__docgenInfo,name:"ModalActionButtonsContainer",path:"src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.Y});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Modal/Modal.tsx");const __WEBPACK_DEFAULT_EXPORT__=_Modal__WEBPACK_IMPORTED_MODULE_0__.A},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/components/common/Textarea/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Textarea_Textarea});var react=__webpack_require__("./node_modules/react/index.js");const Textarea=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.textarea`
  width: ${({$width})=>$width};
  height: ${({$height})=>$height};
  padding: 6px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.WHITE};
  font-size: 13px;

  resize: none;

  &:focus,
  &:active {
    border-color: ${({theme,$hasError})=>$hasError?theme.color.RED:theme.color.LEMON};
    outline: 3px solid
      ${({theme,$hasError})=>$hasError?theme.color.RED:theme.color.LEMON}70;
  }

  transition: outline 0.05s;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea_Textarea=(0,react.forwardRef)(((props,ref)=>{const{width,height,hasError,ariaLabel,...rest}=props;return(0,jsx_runtime.jsx)(Textarea,{$width:width,$height:height,$hasError:hasError,spellCheck:!1,"aria-label":ariaLabel,ref,...rest})})),common_Textarea_Textarea=Textarea_Textarea;try{Textarea_Textarea.displayName="Textarea",Textarea_Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea_Textarea.__docgenInfo,name:"Textarea",path:"src/components/common/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Textarea/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Textarea/Textarea.tsx").A}}]);
//# sourceMappingURL=components-QuickSlotMenu-SlotEditModal-SlotEditModal-stories.25f020c6.iframe.bundle.js.map