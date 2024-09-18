"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[5291],{"./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_components_common_IconButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/IconButton/index.ts"),_TotamjungInfoModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/OptionsHeader/TotamjungInfoModal",component:_TotamjungInfoModal__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{},parameters:{docs:{description:{component:"`TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다."}}}},Default={render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_0__.A,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TotamjungInfoModal__WEBPACK_IMPORTED_MODULE_1__.A,{open:isOpen,onClose:()=>{setIsOpen((()=>!1))}})]})},args:{open:!1,onClose:()=>{}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:'{\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n        <TotamjungInfoModal open={isOpen} onClose={() => {\n        setIsOpen(() => false);\n      }} />\n      </>;\n  },\n  args: {\n    open: false,\n    onClose: () => {}\n  }\n}',...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TotamjungInfoModal_TotamjungInfoModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const options_useTypewriterText=params=>{const{textList,typingTime,idleTime,erasingTime}=params,[currentText,setCurrentText]=(0,react.useState)(""),[currentIndex,setCurrentIndex]=(0,react.useState)(0),[typingStartTime,setTypingStartTime]=(0,react.useState)(Date.now()),[isTyping,setIsTyping]=(0,react.useState)(!1),idleStartDuration=typingTime,erasingStartDuration=typingTime+idleTime,replacingStartDuration=typingTime+idleTime+erasingTime;(0,react.useEffect)((()=>{if(!isTyping||0===textList.length)return;currentIndex>=textList.length&&setCurrentIndex((prev=>Math.min(textList.length-1,prev)));const typingTimer=setInterval((()=>{const now=Date.now(),currentTextTypingDuration=now-typingStartTime;if(currentTextTypingDuration>=replacingStartDuration)return setTypingStartTime(now),void setCurrentIndex((prev=>(prev+1)%textList.length));if(currentTextTypingDuration>=erasingStartDuration){const displayTextLength=textList[currentIndex].length-Math.ceil((currentTextTypingDuration-erasingStartDuration)/erasingTime*textList[currentIndex].length);return void setCurrentText(textList[currentIndex].slice(0,displayTextLength))}if(currentTextTypingDuration>=idleStartDuration)return void setCurrentText(textList[currentIndex]);const displayTextLength=Math.ceil(currentTextTypingDuration/typingTime*textList[currentIndex].length);setCurrentText(textList[currentIndex].slice(0,displayTextLength))}),20);return()=>{clearInterval(typingTimer)}}),[isTyping,currentIndex,typingStartTime,textList,typingTime,idleTime,erasingTime]);return{currentText,startTyping:()=>{setTypingStartTime(Date.now()),setCurrentText(""),setCurrentIndex(0),setIsTyping(!0)},stopTyping:()=>{setCurrentText(""),setCurrentIndex(0),setIsTyping(!1)}}};var png=__webpack_require__("./src/images/png/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const blink=styled_components_browser_esm.i7`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,DarkBrownGradientElement=styled_components_browser_esm.I4.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme})=>theme.gradient.BROWN_GRADIENT};

  z-index: 0;
`,IntroductoryContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,LogoSquareImage=styled_components_browser_esm.I4.img`
  width: 160px;
`,ContentTitle=styled_components_browser_esm.I4.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme})=>theme.color.GOLD};
`,IntroductoryTextContainer=styled_components_browser_esm.I4.div`
  position: relative;

  text-align: center;
`,TypewriterText=styled_components_browser_esm.I4.span`
  margin: 0 2px;

  color: ${({theme})=>theme.color.LEMON};
`,Pointer=styled_components_browser_esm.I4.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme})=>theme.color.LEMON};

  animation: ${blink} 0.8s infinite forwards;
`,InfoContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,LightGrayText=styled_components_browser_esm.I4.span`
  color: ${({theme})=>theme.color.LIGHT_GRAY};
`,ControlButtonsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const INTRODUCTORY_TEXT_LIST=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],TotamjungInfoModal=props=>{const{open,onClose}=props,{currentText,startTyping,stopTyping}=options_useTypewriterText({textList:INTRODUCTORY_TEXT_LIST,typingTime:1600,idleTime:3e3,erasingTime:500});return(0,react.useEffect)((()=>{open?startTyping():stopTyping()}),[open]),(0,jsx_runtime.jsx)(Modal.A,{title:"토탐정 정보",open,onClose,children:(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(DarkBrownGradientElement,{}),(0,jsx_runtime.jsxs)(IntroductoryContainer,{children:[(0,jsx_runtime.jsx)(LogoSquareImage,{src:png.H3,alt:""}),(0,jsx_runtime.jsx)(ContentTitle,{children:"토탐정"}),(0,jsx_runtime.jsxs)(IntroductoryTextContainer,{children:[(0,jsx_runtime.jsx)(TypewriterText,{children:currentText}),(0,jsx_runtime.jsx)(Pointer,{})]})]}),(0,jsx_runtime.jsxs)(InfoContainer,{children:[(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전: ",(0,jsx_runtime.jsxs)("b",{children:["v",chrome.runtime.getManifest().version]})," ",process.env.BUILD_DATE?`/ ${process.env.BUILD_DATE} 빌드`:""]}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",(0,jsx_runtime.jsx)("b",{children:"요술토끼"}),"(",(0,jsx_runtime.jsx)(LightGrayText,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),(0,jsx_runtime.jsxs)(ControlButtonsContainer,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:theme.w.color.LIGHT_PURPLE,iconSrc:png.jr,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:theme.w.color.LEMON,iconSrc:(0,jsx_runtime.jsx)(svg.tz,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:theme.w.color.WHITE,iconSrc:(0,jsx_runtime.jsx)(svg.Nb,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]})]})})};TotamjungInfoModal.displayName="TotamjungInfoModal";const TotamjungInfoModal_TotamjungInfoModal=TotamjungInfoModal;try{TotamjungInfoModal.displayName="TotamjungInfoModal",TotamjungInfoModal.__docgenInfo={description:"",displayName:"TotamjungInfoModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx#TotamjungInfoModal"]={docgenInfo:TotamjungInfoModal.__docgenInfo,name:"TotamjungInfoModal",path:"src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx#TotamjungInfoModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=props=>{const{name,size,width,color,iconSrc,ariaLabel,...rest}=props;return(0,jsx_runtime.jsxs)(Button,{$size:size,$width:width,$color:color,"aria-label":ariaLabel,...rest,children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:name,$size:size}):(0,jsx_runtime.jsx)(IconWrapper,{$size:size,$color:color,children:iconSrc})),(0,jsx_runtime.jsx)(Text,{$size:size,children:name})]})};IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/common/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/IconButton/IconButton.tsx").A},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Modal_ModalActionButtonsContainer,A:()=>common_Modal_Modal});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/images/png/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e_:()=>all_checked_namespaceObject,F_:()=>all_unchecked_namespaceObject,jr:()=>bug_namespaceObject,w6:()=>guidebook_button_namespaceObject,Rm:()=>hidden_tier_badge_namespaceObject,$T:()=>info_button_namespaceObject,XR:()=>lock_with_clock_namespaceObject,H3:()=>logo_square_namespaceObject,uj:()=>settings_title_namespaceObject,e:()=>totamjung_namespaceObject});const all_checked_namespaceObject=__webpack_require__.p+"static/media/all-checked.202b1c06.png",all_unchecked_namespaceObject=__webpack_require__.p+"static/media/all-unchecked.36d4a64c.png",lock_with_clock_namespaceObject=__webpack_require__.p+"static/media/lock-with-clock.523093d4.png",hidden_tier_badge_namespaceObject=__webpack_require__.p+"static/media/hidden-tier-badge.52045d37.png",settings_title_namespaceObject=__webpack_require__.p+"static/media/settings-title.e0051888.png",guidebook_button_namespaceObject=__webpack_require__.p+"static/media/guidebook-button.1af2254a.png",info_button_namespaceObject=__webpack_require__.p+"static/media/info-button.b89374dc.png",totamjung_namespaceObject=__webpack_require__.p+"static/media/totamjung.d0c8aa44.png",logo_square_namespaceObject=__webpack_require__.p+"static/media/logo-square.7625446d.png",bug_namespaceObject=__webpack_require__.p+"static/media/bug.66b34cbf.png"}}]);
//# sourceMappingURL=components-OptionsHeader-TotamjungInfoModal-TotamjungInfoModal-stories.de0e6d69.iframe.bundle.js.map