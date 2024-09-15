"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[2524],{"./src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _EasyMode$parameters,_EasyMode$parameters2,_ManualMode$parameter,_ManualMode$parameter2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EasyMode:()=>EasyMode,ManualMode:()=>ManualMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`RandomDefenseCapsuleButton`는 추첨 생성 메뉴에서 모드를 스위칭할 수 있는 캡슐 모양의 버튼입니다."}}}},EasyMode={args:{mode:"easy",onClick:mode=>{alert(`onClick('${mode}')`)}}},ManualMode={args:{mode:"manual",onClick:mode=>{alert(`onClick('${mode}')`)}}};EasyMode.parameters={...EasyMode.parameters,docs:{...null===(_EasyMode$parameters=EasyMode.parameters)||void 0===_EasyMode$parameters?void 0:_EasyMode$parameters.docs,source:{originalSource:"{\n  args: {\n    mode: 'easy',\n    onClick: mode => {\n      alert(`onClick('${mode}')`);\n    }\n  }\n}",...null===(_EasyMode$parameters2=EasyMode.parameters)||void 0===_EasyMode$parameters2||null===(_EasyMode$parameters2=_EasyMode$parameters2.docs)||void 0===_EasyMode$parameters2?void 0:_EasyMode$parameters2.source}}},ManualMode.parameters={...ManualMode.parameters,docs:{...null===(_ManualMode$parameter=ManualMode.parameters)||void 0===_ManualMode$parameter?void 0:_ManualMode$parameter.docs,source:{originalSource:"{\n  args: {\n    mode: 'manual',\n    onClick: mode => {\n      alert(`onClick('${mode}')`);\n    }\n  }\n}",...null===(_ManualMode$parameter2=ManualMode.parameters)||void 0===_ManualMode$parameter2||null===(_ManualMode$parameter2=_ManualMode$parameter2.docs)||void 0===_ManualMode$parameter2?void 0:_ManualMode$parameter2.source}}};const __namedExportsOrder=["EasyMode","ManualMode"]},"./src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseCapsuleButton_RandomDefenseCapsuleButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,capsuleButton=styled_components_browser_esm.AH`
  width: 50%;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme})=>theme.color.LIGHTER_BROWN};

  transition: 0.2s;
`,LeftButton=styled_components_browser_esm.I4.button`
  ${capsuleButton}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated})=>$isActivated?styled_components_browser_esm.AH`
          border-color: ${({theme})=>theme.color.MAGENTA};
          background-color: ${({theme})=>theme.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme})=>theme.color.MAGENTA};

          color: ${({theme})=>theme.color.WHITE};
        `:styled_components_browser_esm.AH`
          &:hover {
            border-color: ${({theme})=>theme.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme})=>theme.color.MAGENTA};

            color: ${({theme})=>theme.color.MAGENTA};
          }
        `}
`,RightButton=styled_components_browser_esm.I4.button`
  ${capsuleButton}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated})=>$isActivated?styled_components_browser_esm.AH`
          border-color: ${({theme})=>theme.color.AZURE_BLUE};
          background-color: ${({theme})=>theme.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme})=>theme.color.AZURE_BLUE};

          color: ${({theme})=>theme.color.WHITE};
        `:styled_components_browser_esm.AH`
          &:hover {
            border-color: ${({theme})=>theme.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme})=>theme.color.AZURE_BLUE};

            color: ${({theme})=>theme.color.AZURE_BLUE};
          }
        `}
`,MidCircle=styled_components_browser_esm.I4.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.LIGHTER_BROWN};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseCapsuleButton=props=>{const{mode,onClick}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(LeftButton,{type:"button",$isActivated:"easy"===mode,onClick:()=>{onClick("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),(0,jsx_runtime.jsx)(RightButton,{type:"button",$isActivated:"manual"===mode,onClick:()=>{onClick("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),(0,jsx_runtime.jsx)(MidCircle,{children:"OR"})]})};RandomDefenseCapsuleButton.displayName="RandomDefenseCapsuleButton";const RandomDefenseCapsuleButton_RandomDefenseCapsuleButton=RandomDefenseCapsuleButton;try{RandomDefenseCapsuleButton.displayName="RandomDefenseCapsuleButton",RandomDefenseCapsuleButton.__docgenInfo={description:"",displayName:"RandomDefenseCapsuleButton",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"easy"'},{value:'"manual"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(mode: RandomDefenseFormMode) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx#RandomDefenseCapsuleButton"]={docgenInfo:RandomDefenseCapsuleButton.__docgenInfo,name:"RandomDefenseCapsuleButton",path:"src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx#RandomDefenseCapsuleButton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-RandomDefenseCapsuleButton-RandomDefenseCapsuleButton-stories.9f647f9a.iframe.bundle.js.map