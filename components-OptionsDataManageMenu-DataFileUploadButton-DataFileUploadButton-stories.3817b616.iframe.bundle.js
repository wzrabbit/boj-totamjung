"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[3602],{"./src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/OptionsDataManageMenu/DataFileUploadButton",component:__webpack_require__("./src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`DataFileUploadButton`은 토탐정의 세이브파일을 업로드할 수 있도록 해 주는 버튼 컴포넌트입니다."}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DataFileUploadButton_DataFileUploadButton});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: block;
  width: 270px;
`,FakeUploadButton=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme})=>theme.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme})=>theme.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme})=>theme.color.LIME};
  }
`,UploadIconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.LIME};
  }
`,Text=styled_components_browser_esm.I4.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme})=>theme.color.LIME};
`,UploadInput=styled_components_browser_esm.I4.input`
  display: none;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DataFileUploadButton=props=>{const{onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(FakeUploadButton,{role:"button",children:[(0,jsx_runtime.jsx)(UploadIconWrapper,{children:(0,jsx_runtime.jsx)(svg.f2,{})}),(0,jsx_runtime.jsx)(Text,{children:"설정 데이터 업로드"})]}),(0,jsx_runtime.jsx)(UploadInput,{type:"file",accept:".ttj",onClick:event=>{event.currentTarget.value=""},onChange})]})};DataFileUploadButton.displayName="DataFileUploadButton";const DataFileUploadButton_DataFileUploadButton=DataFileUploadButton;try{DataFileUploadButton.displayName="DataFileUploadButton",DataFileUploadButton.__docgenInfo={description:"",displayName:"DataFileUploadButton",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx#DataFileUploadButton"]={docgenInfo:DataFileUploadButton.__docgenInfo,name:"DataFileUploadButton",path:"src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx#DataFileUploadButton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-OptionsDataManageMenu-DataFileUploadButton-DataFileUploadButton-stories.3817b616.iframe.bundle.js.map