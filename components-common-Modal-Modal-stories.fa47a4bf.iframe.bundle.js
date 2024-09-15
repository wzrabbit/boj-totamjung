"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[635],{"./src/components/common/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextModal:()=>TextModal,TextWithControlButtons:()=>TextWithControlButtons,VeryLongTitle:()=>VeryLongTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextModal$parameters,_TextModal$parameters2,_TextModal$parameters3,_TextWithControlButto,_TextWithControlButto2,_TextWithControlButto3,_VeryLongTitle$parame,_VeryLongTitle$parame2,_VeryLongTitle$parame3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Modal/Modal.tsx"),_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/IconButton/index.ts"),_components_common_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Text/index.ts"),_images_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/images/svg/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{},parameters:{docs:{description:{component:"`Modal`은 범용적으로 사용할 수 있는 모달 컴포넌트입니다."}}}},TextModal={render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{open:isOpen,title:"테스트 모달",onClose:()=>{setIsOpen(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{width:"300px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_Text__WEBPACK_IMPORTED_MODULE_3__.A,{type:"normal",fontSize:"16px",children:"테스트용 메시지입니다."})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}})]})},args:{open:!1,title:"테스트용 알림창"}},TextWithControlButtons={render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{open:isOpen,title:"민트 초코 대량구매 확인",onClose:()=>{alert("아뿔싸, 이런 방법이."),setIsOpen(!1)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{maxWidth:"350px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_common_Text__WEBPACK_IMPORTED_MODULE_3__.A,{type:"normal",fontSize:"16px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{style:{color:"#00ffcc",fontWeight:600},children:"민트 초코"})," ","아이스크림을"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{style:{color:"#ff0000",fontWeight:600},children:"3,000"}),"개 구매합니다. 계속하려면 [확인] 을 누르세요."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_1__.Y,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",name:"취소",size:"medium",color:"#ff665e",iconSrc:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_images_svg__WEBPACK_IMPORTED_MODULE_4__.kU,{}),disabled:!1,ariaLabel:"취소",onClick:()=>{alert("민트초코의 위대함을 모르는 당신이 불쌍해"),setIsOpen((()=>!1))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",name:"확인",size:"medium",color:"#5eff69",iconSrc:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_images_svg__WEBPACK_IMPORTED_MODULE_4__.C1,{}),disabled:!1,ariaLabel:"확인",onClick:()=>{alert("그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?"),setIsOpen((()=>!1))}})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}})]})},args:{open:!1,title:"테스트용 알림창"}},VeryLongTitle={render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{open:isOpen,title:"이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다.",onClose:()=>{setIsOpen(!1)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{maxWidth:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_Text__WEBPACK_IMPORTED_MODULE_3__.A,{type:"normal",fontSize:"16px",children:"기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면, 모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요. 그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을 거에요."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_Text__WEBPACK_IMPORTED_MODULE_3__.A,{type:"primary",fontSize:"16px",children:"그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록 작동해요."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__.Y,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",name:"그렇군요",size:"medium",color:"#a3a3a3",iconSrc:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_images_svg__WEBPACK_IMPORTED_MODULE_4__.C1,{}),disabled:!1,ariaLabel:"전혀 안 궁금하지만 이해했다고 대충 대답하기",onClick:()=>{setIsOpen((()=>!1))}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{setIsOpen((()=>!0))}})]})},args:{open:!1,title:"테스트용 알림창"}};TextModal.parameters={...TextModal.parameters,docs:{...null===(_TextModal$parameters=TextModal.parameters)||void 0===_TextModal$parameters?void 0:_TextModal$parameters.docs,source:{originalSource:'{\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div>\n        <Modal open={isOpen} title="테스트 모달" onClose={() => {\n        setIsOpen(false);\n      }}>\n          <div style={{\n          width: \'300px\'\n        }}>\n            <Text type="normal" fontSize="16px">\n              테스트용 메시지입니다.\n            </Text>\n          </div>\n        </Modal>\n        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n      </div>;\n  },\n  args: {\n    open: false,\n    title: \'테스트용 알림창\'\n  }\n}',...null===(_TextModal$parameters2=TextModal.parameters)||void 0===_TextModal$parameters2||null===(_TextModal$parameters2=_TextModal$parameters2.docs)||void 0===_TextModal$parameters2?void 0:_TextModal$parameters2.source},description:{story:'`<Text>` 컴포넌트만 사용하여 만든 모달의 예시입니다. 기본적으로 모달의 크기는 정해져 있지 않으며, 사용하는 측에서 **모달 내부의 콘텐츠의 크기를 직접 설정**해주는 것으로 조절할 수 있습니다.\n\n본 예시에서는 `<div style={{ width: \'300px\' }}></div>` 가 콘텐츠의 최상위 요소이며, 가로 길이를 `300px`로 정했음을 알 수 있습니다.\n\n```tsx\n<Modal\n  open={isOpen}\n  title="테스트 모달"\n  onClose={() => {\n    setIsOpen(false);\n  }}\n>\n  <div style={{ width: \'300px\' }}>\n    <Text type="normal" fontSize="16px">\n      테스트용 메시지입니다.\n    </Text>\n  </div>\n</Modal>\n```',...null===(_TextModal$parameters3=TextModal.parameters)||void 0===_TextModal$parameters3||null===(_TextModal$parameters3=_TextModal$parameters3.docs)||void 0===_TextModal$parameters3?void 0:_TextModal$parameters3.description}}},TextWithControlButtons.parameters={...TextWithControlButtons.parameters,docs:{...null===(_TextWithControlButto=TextWithControlButtons.parameters)||void 0===_TextWithControlButto?void 0:_TextWithControlButto.docs,source:{originalSource:'{\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div>\n        <Modal open={isOpen} title="민트 초코 대량구매 확인" onClose={() => {\n        alert(\'아뿔싸, 이런 방법이.\');\n        setIsOpen(false);\n      }}>\n          <div style={{\n          maxWidth: \'350px\'\n        }}>\n            <Text type="normal" fontSize="16px">\n              <span style={{\n              color: \'#00ffcc\',\n              fontWeight: 600\n            }}>\n                민트 초코\n              </span>{\' \'}\n              아이스크림을{\' \'}\n              <span style={{\n              color: \'#ff0000\',\n              fontWeight: 600\n            }}>3,000</span>개\n              구매합니다. 계속하려면 [확인] 을 누르세요.\n            </Text>\n          </div>\n          <ModalActionButtonsContainer>\n            <IconButton type="button" name="취소" size="medium" color="#ff665e" iconSrc={<CloseCircleIcon />} disabled={false} ariaLabel="취소" onClick={() => {\n            alert(\'민트초코의 위대함을 모르는 당신이 불쌍해\');\n            setIsOpen(() => false);\n          }} />\n            <IconButton type="button" name="확인" size="medium" color="#5eff69" iconSrc={<CheckCircleIcon />} disabled={false} ariaLabel="확인" onClick={() => {\n            alert(\'그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?\');\n            setIsOpen(() => false);\n          }} />\n          </ModalActionButtonsContainer>\n        </Modal>\n        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n      </div>;\n  },\n  args: {\n    open: false,\n    title: \'테스트용 알림창\'\n  }\n}',...null===(_TextWithControlButto2=TextWithControlButtons.parameters)||void 0===_TextWithControlButto2||null===(_TextWithControlButto2=_TextWithControlButto2.docs)||void 0===_TextWithControlButto2?void 0:_TextWithControlButto2.source},description:{story:'`Modal.tsx` 모듈에서는 `<Modal>`뿐만이 아니라 하단 버튼 메뉴를 구성할 때 사용할 수 있는 `<ModalActionButtonsContainer>` 컴포넌트 또한 제공합니다.\n\n해당 컴포넌트도 불러오신 후, 콘텐츠의 하단에 버튼 컴포넌트들과 함께 사용해 주시면 하단 버튼 메뉴 또한 구성하실 수 있습니다.\n\n```tsx\n<Modal\n  open={isOpen}\n  title="민트 초코 대량구매 확인"\n  onClose={() => {\n    alert(\'아뿔싸, 이런 방법이.\');\n    setIsOpen(false);\n  }}\n>\n  <div style={{ width: \'350px\' }}>\n    <Text type="normal" fontSize="16px">\n      <span style={{ color: \'#00ffcc\', fontWeight: 600 }}>\n        민트 초코\n      </span>{\' \'}\n      아이스크림을{\' \'}\n      <span style={{ color: \'#ff0000\', fontWeight: 600 }}>3,000</span>개\n      구매합니다. 계속하려면 [확인] 을 누르세요.\n    </Text>\n  </div>\n  <ModalActionButtonsContainer>\n    <IconButton\n      type="button"\n      name="취소"\n      size="medium"\n      color="#ff665e"\n      iconSrc={<CloseCircleIcon />}\n      disabled={false}\n      ariaLabel="취소"\n      onClick={() => {\n         alert(\'민트초코의 위대함을 모르는 당신이 불쌍해\');\n         setIsOpen(() => false);\n      }}\n    />\n    <IconButton\n      type="button"\n      name="확인"\n      size="medium"\n      color="#5eff69"\n      iconSrc={<CheckCircleIcon />}\n      disabled={false}\n      ariaLabel="확인"\n      onClick={() => {\n        alert(\'그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?\');\n        setIsOpen(() => false);\n      }}\n    />\n  </ModalActionButtonsContainer>\n</Modal>\n```',...null===(_TextWithControlButto3=TextWithControlButtons.parameters)||void 0===_TextWithControlButto3||null===(_TextWithControlButto3=_TextWithControlButto3.docs)||void 0===_TextWithControlButto3?void 0:_TextWithControlButto3.description}}},VeryLongTitle.parameters={...VeryLongTitle.parameters,docs:{...null===(_VeryLongTitle$parame=VeryLongTitle.parameters)||void 0===_VeryLongTitle$parame?void 0:_VeryLongTitle$parame.docs,source:{originalSource:'{\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div>\n        <Modal open={isOpen} title="이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다." onClose={() => {\n        setIsOpen(false);\n      }}>\n          <div style={{\n          maxWidth: \'100%\'\n        }}>\n            <Text type="normal" fontSize="16px">\n              기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면,\n              모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요.\n              그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을\n              거에요.\n            </Text>\n            <Text type="primary" fontSize="16px">\n              그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록\n              작동해요.\n            </Text>\n          </div>\n          <ModalActionButtonsContainer>\n            <IconButton type="button" name="그렇군요" size="medium" color="#a3a3a3" iconSrc={<CheckCircleIcon />} disabled={false} ariaLabel="전혀 안 궁금하지만 이해했다고 대충 대답하기" onClick={() => {\n            setIsOpen(() => false);\n          }} />\n          </ModalActionButtonsContainer>\n        </Modal>\n        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} ariaLabel="모달 열기" onClick={() => {\n        setIsOpen(() => true);\n      }} />\n      </div>;\n  },\n  args: {\n    open: false,\n    title: \'테스트용 알림창\'\n  }\n}',...null===(_VeryLongTitle$parame2=VeryLongTitle.parameters)||void 0===_VeryLongTitle$parame2||null===(_VeryLongTitle$parame2=_VeryLongTitle$parame2.docs)||void 0===_VeryLongTitle$parame2?void 0:_VeryLongTitle$parame2.source},description:{story:"제목이 매우 길어 화면에 표시할 수 없는 경우 뒷 내용은 생략(...)되어 표시됩니다.\n\n모달의 가로 길이는 사용자의 웹 브라우저에 따라 축소/확대될 수도 있으므로, **콘텐츠의 크기는 이를 고려하여 고정값인 `width`보다는 유동적인 대응이 가능한 `min-width`, `max-width` 등을 더 추천합니다.**",...null===(_VeryLongTitle$parame3=VeryLongTitle.parameters)||void 0===_VeryLongTitle$parame3||null===(_VeryLongTitle$parame3=_VeryLongTitle$parame3.docs)||void 0===_VeryLongTitle$parame3?void 0:_VeryLongTitle$parame3.description}}};const __namedExportsOrder=["TextModal","TextWithControlButtons","VeryLongTitle"];try{TextModal.displayName="TextModal",TextModal.__docgenInfo={description:'`<Text>` 컴포넌트만 사용하여 만든 모달의 예시입니다. 기본적으로 모달의 크기는 정해져 있지 않으며, 사용하는 측에서 **모달 내부의 콘텐츠의 크기를 직접 설정**해주는 것으로 조절할 수 있습니다.\n\n본 예시에서는 `<div style={{ width: \'300px\' }}></div>` 가 콘텐츠의 최상위 요소이며, 가로 길이를 `300px`로 정했음을 알 수 있습니다.\n\n```tsx\n<Modal\n  open={isOpen}\n  title="테스트 모달"\n  onClose={() => {\n    setIsOpen(false);\n  }}\n>\n  <div style={{ width: \'300px\' }}>\n    <Text type="normal" fontSize="16px">\n      테스트용 메시지입니다.\n    </Text>\n  </div>\n</Modal>\n```',displayName:"TextModal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.stories.tsx#TextModal"]={docgenInfo:TextModal.__docgenInfo,name:"TextModal",path:"src/components/common/Modal/Modal.stories.tsx#TextModal"})}catch(__react_docgen_typescript_loader_error){}try{TextWithControlButtons.displayName="TextWithControlButtons",TextWithControlButtons.__docgenInfo={description:'`Modal.tsx` 모듈에서는 `<Modal>`뿐만이 아니라 하단 버튼 메뉴를 구성할 때 사용할 수 있는 `<ModalActionButtonsContainer>` 컴포넌트 또한 제공합니다.\n\n해당 컴포넌트도 불러오신 후, 콘텐츠의 하단에 버튼 컴포넌트들과 함께 사용해 주시면 하단 버튼 메뉴 또한 구성하실 수 있습니다.\n\n```tsx\n<Modal\n  open={isOpen}\n  title="민트 초코 대량구매 확인"\n  onClose={() => {\n    alert(\'아뿔싸, 이런 방법이.\');\n    setIsOpen(false);\n  }}\n>\n  <div style={{ width: \'350px\' }}>\n    <Text type="normal" fontSize="16px">\n      <span style={{ color: \'#00ffcc\', fontWeight: 600 }}>\n        민트 초코\n      </span>{\' \'}\n      아이스크림을{\' \'}\n      <span style={{ color: \'#ff0000\', fontWeight: 600 }}>3,000</span>개\n      구매합니다. 계속하려면 [확인] 을 누르세요.\n    </Text>\n  </div>\n  <ModalActionButtonsContainer>\n    <IconButton\n      type="button"\n      name="취소"\n      size="medium"\n      color="#ff665e"\n      iconSrc={<CloseCircleIcon />}\n      disabled={false}\n      ariaLabel="취소"\n      onClick={() => {\n         alert(\'민트초코의 위대함을 모르는 당신이 불쌍해\');\n         setIsOpen(() => false);\n      }}\n    />\n    <IconButton\n      type="button"\n      name="확인"\n      size="medium"\n      color="#5eff69"\n      iconSrc={<CheckCircleIcon />}\n      disabled={false}\n      ariaLabel="확인"\n      onClick={() => {\n        alert(\'그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?\');\n        setIsOpen(() => false);\n      }}\n    />\n  </ModalActionButtonsContainer>\n</Modal>\n```',displayName:"TextWithControlButtons",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.stories.tsx#TextWithControlButtons"]={docgenInfo:TextWithControlButtons.__docgenInfo,name:"TextWithControlButtons",path:"src/components/common/Modal/Modal.stories.tsx#TextWithControlButtons"})}catch(__react_docgen_typescript_loader_error){}try{VeryLongTitle.displayName="VeryLongTitle",VeryLongTitle.__docgenInfo={description:"제목이 매우 길어 화면에 표시할 수 없는 경우 뒷 내용은 생략(...)되어 표시됩니다.\n\n모달의 가로 길이는 사용자의 웹 브라우저에 따라 축소/확대될 수도 있으므로, **콘텐츠의 크기는 이를 고려하여 고정값인 `width`보다는 유동적인 대응이 가능한 `min-width`, `max-width` 등을 더 추천합니다.**",displayName:"VeryLongTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.stories.tsx#VeryLongTitle"]={docgenInfo:VeryLongTitle.__docgenInfo,name:"VeryLongTitle",path:"src/components/common/Modal/Modal.stories.tsx#VeryLongTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_Modal=props=>{const{title,open,onClose,children}=props;return open&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Backdrop,{onClick:onClose}),(0,jsx_runtime.jsxs)(Modal,{open,role:"dialog",children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"모달 닫기",children:(0,jsx_runtime.jsx)(svg.US,{})})]}),(0,jsx_runtime.jsx)(Body,{children})]})]}),document.body)},Modal_ModalActionButtonsContainer=props=>{const{children}=props;return(0,jsx_runtime.jsx)(ModalActionButtonsContainer,{children})};Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer";const common_Modal_Modal=Modal_Modal;try{Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer",Modal_ModalActionButtonsContainer.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"]={docgenInfo:Modal_ModalActionButtonsContainer.__docgenInfo,name:"ModalActionButtonsContainer",path:"src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
//# sourceMappingURL=components-common-Modal-Modal-stories.fa47a4bf.iframe.bundle.js.map