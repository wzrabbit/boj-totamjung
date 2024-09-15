"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[935],{"./src/components/common/SimpleModal/SimpleModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CancelConfirm:()=>CancelConfirm,Confirm:()=>Confirm,YesNo:()=>YesNo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Confirm$parameters,_Confirm$parameters2,_Confirm$parameters3,_CancelConfirm$parame,_CancelConfirm$parame2,_CancelConfirm$parame3,_YesNo$parameters,_YesNo$parameters2,_YesNo$parameters3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_common_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/IconButton/index.ts"),_SimpleModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/SimpleModal/SimpleModal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/SimpleModal",component:_SimpleModal__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{docs:{description:{component:"`SimpleModal`는 자주 쓰이는 간단한 형태의 모달을 더 쉽게 구현할 수 있도록 고안된 공용 컴포넌트입니다."}}}},Confirm={render:(_,{args})=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SimpleModal__WEBPACK_IMPORTED_MODULE_2__.A,{...args,open:isOpen,actionType:"confirm",onClose:()=>setIsOpen(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",open:!1,onClose:()=>{}}},CancelConfirm={render:(_,{args})=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SimpleModal__WEBPACK_IMPORTED_MODULE_2__.A,{...args,open:isOpen,actionType:"cancelConfirm",onClose:()=>setIsOpen(!1),onConfirm:()=>setIsOpen(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",open:!1,onClose:()=>{},onConfirm:()=>{}}},YesNo={render:(_,{args})=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SimpleModal__WEBPACK_IMPORTED_MODULE_2__.A,{...args,open:isOpen,actionType:"yesNo",onYesSelect:()=>setIsOpen(!1),onNoSelect:()=>setIsOpen(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}};Confirm.parameters={...Confirm.parameters,docs:{...null===(_Confirm$parameters=Confirm.parameters)||void 0===_Confirm$parameters?void 0:_Confirm$parameters.docs,source:{originalSource:'{\n  render: (_, {\n    args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n\n        <SimpleModal {...args} open={isOpen} actionType="confirm" onClose={() => setIsOpen(false)} />\n      </>;\n  },\n  args: {\n    actionType: \'confirm\',\n    width: \'300px\',\n    height: \'100px\',\n    title: \'확인 버튼 모달\',\n    message: \'확인 버튼만 있는 모달입니다.\',\n    open: false,\n    onClose: () => {}\n  }\n}',...null===(_Confirm$parameters2=Confirm.parameters)||void 0===_Confirm$parameters2||null===(_Confirm$parameters2=_Confirm$parameters2.docs)||void 0===_Confirm$parameters2?void 0:_Confirm$parameters2.source},description:{story:'```tsx\n<SimpleModal>\n  actionType="confirm"\n  width="300px"\n  height="100px"\n  title="확인 버튼 모달"\n  message="확인 버튼만 있는 모달입니다."\n  open={false}\n  onClose={() => {}}\n</SimpleModal>\n```',...null===(_Confirm$parameters3=Confirm.parameters)||void 0===_Confirm$parameters3||null===(_Confirm$parameters3=_Confirm$parameters3.docs)||void 0===_Confirm$parameters3?void 0:_Confirm$parameters3.description}}},CancelConfirm.parameters={...CancelConfirm.parameters,docs:{...null===(_CancelConfirm$parame=CancelConfirm.parameters)||void 0===_CancelConfirm$parame?void 0:_CancelConfirm$parame.docs,source:{originalSource:'{\n  render: (_, {\n    args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n\n        <SimpleModal {...args} open={isOpen} actionType="cancelConfirm" onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />\n      </>;\n  },\n  args: {\n    actionType: \'cancelConfirm\',\n    width: \'300px\',\n    height: \'100px\',\n    title: \'취소/확인 버튼 모달\',\n    message: \'취소, 확인 버튼이 있는 모달입니다.\',\n    open: false,\n    onClose: () => {},\n    onConfirm: () => {}\n  }\n}',...null===(_CancelConfirm$parame2=CancelConfirm.parameters)||void 0===_CancelConfirm$parame2||null===(_CancelConfirm$parame2=_CancelConfirm$parame2.docs)||void 0===_CancelConfirm$parame2?void 0:_CancelConfirm$parame2.source},description:{story:'```tsx\n<SimpleModal>\n  actionType="cancelConfirm"\n  width="300px"\n  height="100px"\n  title="취소/확인 버튼 모달"\n  message="취소, 확인 버튼이 있는 모달입니다."\n  open={false}\n  onClose={() => {}}\n  onConfirm={() => {}}\n</SimpleModal>\n```',...null===(_CancelConfirm$parame3=CancelConfirm.parameters)||void 0===_CancelConfirm$parame3||null===(_CancelConfirm$parame3=_CancelConfirm$parame3.docs)||void 0===_CancelConfirm$parame3?void 0:_CancelConfirm$parame3.description}}},YesNo.parameters={...YesNo.parameters,docs:{...null===(_YesNo$parameters=YesNo.parameters)||void 0===_YesNo$parameters?void 0:_YesNo$parameters.docs,source:{originalSource:'{\n  render: (_, {\n    args\n  }) => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n\n        <SimpleModal {...args} open={isOpen} actionType="yesNo" onYesSelect={() => setIsOpen(false)} onNoSelect={() => setIsOpen(false)} />\n      </>;\n  },\n  args: {\n    actionType: \'yesNo\',\n    width: \'300px\',\n    height: \'100px\',\n    title: \'예/아니요 버튼 모달\',\n    message: \'예, 아니요 버튼이 있는 모달입니다.\',\n    open: false,\n    onYesSelect: () => {},\n    onNoSelect: () => {}\n  }\n}',...null===(_YesNo$parameters2=YesNo.parameters)||void 0===_YesNo$parameters2||null===(_YesNo$parameters2=_YesNo$parameters2.docs)||void 0===_YesNo$parameters2?void 0:_YesNo$parameters2.source},description:{story:'```tsx\n<SimpleModal>\n  actionType="yesNo"\n  width="300px"\n  height="100px"\n  title="예/아니요 버튼 모달"\n  message="예, 아니요 버튼이 있는 모달입니다."\n  open={false}\n  onYesSelect={() => {}}\n  onNoSelect={() => {}}\n</SimpleModal>\n```',...null===(_YesNo$parameters3=YesNo.parameters)||void 0===_YesNo$parameters3||null===(_YesNo$parameters3=_YesNo$parameters3.docs)||void 0===_YesNo$parameters3?void 0:_YesNo$parameters3.description}}};const __namedExportsOrder=["Confirm","CancelConfirm","YesNo"];try{Confirm.displayName="Confirm",Confirm.__docgenInfo={description:'```tsx\n<SimpleModal>\n  actionType="confirm"\n  width="300px"\n  height="100px"\n  title="확인 버튼 모달"\n  message="확인 버튼만 있는 모달입니다."\n  open={false}\n  onClose={() => {}}\n</SimpleModal>\n```',displayName:"Confirm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.stories.tsx#Confirm"]={docgenInfo:Confirm.__docgenInfo,name:"Confirm",path:"src/components/common/SimpleModal/SimpleModal.stories.tsx#Confirm"})}catch(__react_docgen_typescript_loader_error){}try{CancelConfirm.displayName="CancelConfirm",CancelConfirm.__docgenInfo={description:'```tsx\n<SimpleModal>\n  actionType="cancelConfirm"\n  width="300px"\n  height="100px"\n  title="취소/확인 버튼 모달"\n  message="취소, 확인 버튼이 있는 모달입니다."\n  open={false}\n  onClose={() => {}}\n  onConfirm={() => {}}\n</SimpleModal>\n```',displayName:"CancelConfirm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.stories.tsx#CancelConfirm"]={docgenInfo:CancelConfirm.__docgenInfo,name:"CancelConfirm",path:"src/components/common/SimpleModal/SimpleModal.stories.tsx#CancelConfirm"})}catch(__react_docgen_typescript_loader_error){}try{YesNo.displayName="YesNo",YesNo.__docgenInfo={description:'```tsx\n<SimpleModal>\n  actionType="yesNo"\n  width="300px"\n  height="100px"\n  title="예/아니요 버튼 모달"\n  message="예, 아니요 버튼이 있는 모달입니다."\n  open={false}\n  onYesSelect={() => {}}\n  onNoSelect={() => {}}\n</SimpleModal>\n```',displayName:"YesNo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.stories.tsx#YesNo"]={docgenInfo:YesNo.__docgenInfo,name:"YesNo",path:"src/components/common/SimpleModal/SimpleModal.stories.tsx#YesNo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=props=>{const{name,size,width,color,iconSrc,ariaLabel,...rest}=props;return(0,jsx_runtime.jsxs)(Button,{$size:size,$width:width,$color:color,"aria-label":ariaLabel,...rest,children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:name,$size:size}):(0,jsx_runtime.jsx)(IconWrapper,{$size:size,$color:color,children:iconSrc})),(0,jsx_runtime.jsx)(Text,{$size:size,children:name})]})};IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/common/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/IconButton/IconButton.tsx").A},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Modal_ModalActionButtonsContainer,A:()=>common_Modal_Modal});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_Modal=props=>{const{title,open,onClose,children}=props;return open&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Backdrop,{onClick:onClose}),(0,jsx_runtime.jsxs)(Modal,{open,role:"dialog",children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"모달 닫기",children:(0,jsx_runtime.jsx)(svg.US,{})})]}),(0,jsx_runtime.jsx)(Body,{children})]})]}),document.body)},Modal_ModalActionButtonsContainer=props=>{const{children}=props;return(0,jsx_runtime.jsx)(ModalActionButtonsContainer,{children})};Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer";const common_Modal_Modal=Modal_Modal;try{Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer",Modal_ModalActionButtonsContainer.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"]={docgenInfo:Modal_ModalActionButtonsContainer.__docgenInfo,name:"ModalActionButtonsContainer",path:"src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.Y});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Modal/Modal.tsx");const __WEBPACK_DEFAULT_EXPORT__=_Modal__WEBPACK_IMPORTED_MODULE_0__.A},"./src/components/common/SimpleModal/SimpleModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SimpleModal_SimpleModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),svg=__webpack_require__("./src/images/svg/index.ts");const ContentContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  width: ${({$width})=>$width};
  max-width: 100%;
  min-height: ${({$height})=>$height};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleModal=props=>{const{title,width,height,open,message,actionType}=props;return(0,jsx_runtime.jsxs)(Modal.A,{title,open,onClose:()=>{"yesNo"===actionType?props.onNoSelect():props.onClose()},children:[(0,jsx_runtime.jsx)(ContentContainer,{$width:width,$height:height,children:(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:message})}),(0,jsx_runtime.jsx)(Modal.Y,{children:"confirm"===actionType?(0,jsx_runtime.jsx)(ConfirmButton,{onClose:props.onClose}):"cancelConfirm"===actionType?(0,jsx_runtime.jsx)(CancelConfirmButtons,{onClose:props.onClose,onConfirm:props.onConfirm}):(0,jsx_runtime.jsx)(YesNoButtons,{onYesSelect:props.onYesSelect,onNoSelect:props.onNoSelect})})]})};SimpleModal.displayName="SimpleModal";const ConfirmButton=props=>{const{onClose}=props;return(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onClose})};ConfirmButton.displayName="ConfirmButton";const CancelConfirmButtons=props=>{const{onClose,onConfirm}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onConfirm})]})},YesNoButtons=props=>{const{onYesSelect,onNoSelect}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.LIME,disabled:!1,ariaLabel:"예",onClick:onYesSelect}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"아니요",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.RED,disabled:!1,ariaLabel:"아니요",onClick:onNoSelect})]})},SimpleModal_SimpleModal=SimpleModal;try{SimpleModal.displayName="SimpleModal",SimpleModal.__docgenInfo={description:"",displayName:"SimpleModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actionType:{defaultValue:null,description:"",name:"actionType",required:!0,type:{name:"enum",value:[{value:'"confirm"'},{value:'"cancelConfirm"'},{value:'"yesNo"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) | (() => void)"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onYesSelect:{defaultValue:null,description:"",name:"onYesSelect",required:!0,type:{name:"() => void"}},onNoSelect:{defaultValue:null,description:"",name:"onNoSelect",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"]={docgenInfo:SimpleModal.__docgenInfo,name:"SimpleModal",path:"src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
//# sourceMappingURL=components-common-SimpleModal-SimpleModal-stories.c533be1e.iframe.bundle.js.map