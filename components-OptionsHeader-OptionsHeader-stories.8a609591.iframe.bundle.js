"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[7519],{"./src/components/OptionsHeader/OptionsHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/OptionsHeader",component:__webpack_require__("./src/components/OptionsHeader/OptionsHeader.tsx").A,parameters:{docs:{description:{component:"`OptionsHeader`는 설정 페이지의 헤더 컴포넌트입니다."}}}},Default={args:{selectedCategory:"algorithmHider"}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    selectedCategory: 'algorithmHider'\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/OptionsHeader/OptionsHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsHeader_OptionsHeader});var react=__webpack_require__("./node_modules/react/index.js");const OptionsHeader_OptionsNav=__webpack_require__("./src/components/OptionsHeader/OptionsNav/OptionsNav.tsx").A;var SimpleModal=__webpack_require__("./src/components/common/SimpleModal/index.ts");const OptionsHeader_TotamjungInfoModal=__webpack_require__("./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx").A;var png=__webpack_require__("./src/images/png/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,Title=styled_components_browser_esm.I4.h1`
  width: 130px;
  height: 100%;
`,OptionsLogoImage=styled_components_browser_esm.I4.img`
  width: 100%;
`,ButtonPanel=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,VersionText=styled_components_browser_esm.I4.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme})=>theme.color.GOLD};
`,Button=styled_components_browser_esm.I4.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,ButtonImage=styled_components_browser_esm.I4.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OptionsHeader=props=>{const{selectedCategory,onCategoryChange}=props,[activeModal,setActiveModal]=(0,react.useState)("none");return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Title,{children:(0,jsx_runtime.jsx)(OptionsLogoImage,{src:png.uj,alt:"토탐정 설정"})}),(0,jsx_runtime.jsx)(OptionsHeader_OptionsNav,{selectedCategory,onChange:onCategoryChange}),(0,jsx_runtime.jsxs)(ButtonPanel,{children:[(0,jsx_runtime.jsx)(VersionText,{children:`v${chrome.runtime.getManifest().version}`}),(0,jsx_runtime.jsx)(Button,{type:"button","aria-label":"도움말",onClick:()=>{setActiveModal("guidePageOpenConfirm")},children:(0,jsx_runtime.jsx)(ButtonImage,{src:png.w6,alt:""})}),(0,jsx_runtime.jsx)(Button,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{setActiveModal("totamjungInfo")},children:(0,jsx_runtime.jsx)(ButtonImage,{src:png.$T,alt:""})})]}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:"guidePageOpenConfirm"===activeModal,message:"토탐정 도움말 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/blob/main/GUIDE.md"),setActiveModal("none")},onNoSelect:()=>{setActiveModal("none")}}),(0,jsx_runtime.jsx)(OptionsHeader_TotamjungInfoModal,{open:"totamjungInfo"===activeModal,onClose:()=>{setActiveModal("none")}})]})};OptionsHeader.displayName="OptionsHeader";const OptionsHeader_OptionsHeader=OptionsHeader;try{OptionsHeader.displayName="OptionsHeader",OptionsHeader.__docgenInfo={description:"",displayName:"OptionsHeader",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onCategoryChange:{defaultValue:null,description:"",name:"onCategoryChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/OptionsHeader.tsx#OptionsHeader"]={docgenInfo:OptionsHeader.__docgenInfo,name:"OptionsHeader",path:"src/components/OptionsHeader/OptionsHeader.tsx#OptionsHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsHeader/OptionsNav/OptionsNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsNav_OptionsNav});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.nav`
  display: inline-flex;

  height: 36px;
`,NavItemList=styled_components_browser_esm.I4.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,NavItem=styled_components_browser_esm.I4.li`
  display: flex;
  flex-direction: column;
`,CategoryButton=styled_components_browser_esm.I4.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme})=>theme.color.GOLD};
  background: none;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: ${({$isSelected})=>$isSelected?800:600};
  color: ${({theme})=>theme.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme})=>theme.color.LEMON};
  }
`,Underline=styled_components_browser_esm.I4.span`
  display: inline-block;

  width: ${({$isSelected})=>$isSelected?"100%":"0"};
  height: 2px;

  background-color: ${({theme})=>theme.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme})=>theme.color.LEMON};
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OPTIONS_NAV_CATEGORIES=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"문제 추첨",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],OptionsNav=props=>{const{selectedCategory,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(NavItemList,{children:OPTIONS_NAV_CATEGORIES.map((({displayName,category})=>(0,jsx_runtime.jsxs)(NavItem,{children:[(0,jsx_runtime.jsx)(CategoryButton,{$isSelected:category===selectedCategory,onClick:()=>{onChange(category)},children:displayName}),(0,jsx_runtime.jsx)(Underline,{$isSelected:category===selectedCategory})]},displayName)))})})};OptionsNav.displayName="OptionsNav";const OptionsNav_OptionsNav=OptionsNav;try{OptionsNav.displayName="OptionsNav",OptionsNav.__docgenInfo={description:"",displayName:"OptionsNav",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/OptionsNav/OptionsNav.tsx#OptionsNav"]={docgenInfo:OptionsNav.__docgenInfo,name:"OptionsNav",path:"src/components/OptionsHeader/OptionsNav/OptionsNav.tsx#OptionsNav"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TotamjungInfoModal_TotamjungInfoModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const options_useTypewriterText=params=>{const{textList,typingTime,idleTime,erasingTime}=params,[currentText,setCurrentText]=(0,react.useState)(""),[currentIndex,setCurrentIndex]=(0,react.useState)(0),[typingStartTime,setTypingStartTime]=(0,react.useState)(Date.now()),[isTyping,setIsTyping]=(0,react.useState)(!1),idleStartDuration=typingTime,erasingStartDuration=typingTime+idleTime,replacingStartDuration=typingTime+idleTime+erasingTime;(0,react.useEffect)((()=>{if(!isTyping||0===textList.length)return;currentIndex>=textList.length&&setCurrentIndex((prev=>Math.min(textList.length-1,prev)));const typingTimer=setInterval((()=>{const now=Date.now(),currentTextTypingDuration=now-typingStartTime;if(currentTextTypingDuration>=replacingStartDuration)return setTypingStartTime(now),void setCurrentIndex((prev=>(prev+1)%textList.length));if(currentTextTypingDuration>=erasingStartDuration){const displayTextLength=textList[currentIndex].length-Math.ceil((currentTextTypingDuration-erasingStartDuration)/erasingTime*textList[currentIndex].length);return void setCurrentText(textList[currentIndex].slice(0,displayTextLength))}if(currentTextTypingDuration>=idleStartDuration)return void setCurrentText(textList[currentIndex]);const displayTextLength=Math.ceil(currentTextTypingDuration/typingTime*textList[currentIndex].length);setCurrentText(textList[currentIndex].slice(0,displayTextLength))}),20);return()=>{clearInterval(typingTimer)}}),[isTyping,currentIndex,typingStartTime,textList,typingTime,idleTime,erasingTime]);return{currentText,startTyping:()=>{setTypingStartTime(Date.now()),setCurrentText(""),setCurrentIndex(0),setIsTyping(!0)},stopTyping:()=>{setCurrentText(""),setCurrentIndex(0),setIsTyping(!1)}}};var png=__webpack_require__("./src/images/png/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const blink=styled_components_browser_esm.i7`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleModal=props=>{const{title,width,height,open,message,actionType}=props;return(0,jsx_runtime.jsxs)(Modal.A,{title,open,onClose:()=>{"yesNo"===actionType?props.onNoSelect():props.onClose()},children:[(0,jsx_runtime.jsx)(ContentContainer,{$width:width,$height:height,children:(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:message})}),(0,jsx_runtime.jsx)(Modal.Y,{children:"confirm"===actionType?(0,jsx_runtime.jsx)(ConfirmButton,{onClose:props.onClose}):"cancelConfirm"===actionType?(0,jsx_runtime.jsx)(CancelConfirmButtons,{onClose:props.onClose,onConfirm:props.onConfirm}):(0,jsx_runtime.jsx)(YesNoButtons,{onYesSelect:props.onYesSelect,onNoSelect:props.onNoSelect})})]})};SimpleModal.displayName="SimpleModal";const ConfirmButton=props=>{const{onClose}=props;return(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onClose})};ConfirmButton.displayName="ConfirmButton";const CancelConfirmButtons=props=>{const{onClose,onConfirm}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onConfirm})]})},YesNoButtons=props=>{const{onYesSelect,onNoSelect}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.LIME,disabled:!1,ariaLabel:"예",onClick:onYesSelect}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"아니요",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.RED,disabled:!1,ariaLabel:"아니요",onClick:onNoSelect})]})},SimpleModal_SimpleModal=SimpleModal;try{SimpleModal.displayName="SimpleModal",SimpleModal.__docgenInfo={description:"",displayName:"SimpleModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actionType:{defaultValue:null,description:"",name:"actionType",required:!0,type:{name:"enum",value:[{value:'"confirm"'},{value:'"cancelConfirm"'},{value:'"yesNo"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) | (() => void)"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onYesSelect:{defaultValue:null,description:"",name:"onYesSelect",required:!0,type:{name:"() => void"}},onNoSelect:{defaultValue:null,description:"",name:"onNoSelect",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"]={docgenInfo:SimpleModal.__docgenInfo,name:"SimpleModal",path:"src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SimpleModal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/SimpleModal/SimpleModal.tsx").A},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
//# sourceMappingURL=components-OptionsHeader-OptionsHeader-stories.8a609591.iframe.bundle.js.map