"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[5917],{"./src/components/common/Textarea/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_Error$parameters,_Error$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/Textarea",component:__webpack_require__("./src/components/common/Textarea/Textarea.tsx").A,parameters:{docs:{description:{component:"`Textarea`는 사용자가 여러 줄의 내용을 작성할 수 있는 텍스트 입력 영역 컴포넌트입니다."}}}},Default={args:{width:"560px",height:"140px",value:"",placeholder:"마음가는 대로 입력해 보세요",hasError:!1,ariaLabel:"아무 값이든 입력해 보세요"}},Error={args:{width:"560px",height:"140px",value:"",placeholder:"사람은 누구나 실수를 하죠",hasError:!0,ariaLabel:"아무 값이든 입력해 보세요"}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    width: '560px',\n    height: '140px',\n    value: '',\n    placeholder: '마음가는 대로 입력해 보세요',\n    hasError: false,\n    ariaLabel: '아무 값이든 입력해 보세요'\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}},Error.parameters={...Error.parameters,docs:{...null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs,source:{originalSource:"{\n  args: {\n    width: '560px',\n    height: '140px',\n    value: '',\n    placeholder: '사람은 누구나 실수를 하죠',\n    hasError: true,\n    ariaLabel: '아무 값이든 입력해 보세요'\n  }\n}",...null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source}}};const __namedExportsOrder=["Default","Error"]},"./src/components/common/Textarea/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Textarea_Textarea});var react=__webpack_require__("./node_modules/react/index.js");const Textarea=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.textarea`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea_Textarea=(0,react.forwardRef)(((props,ref)=>{const{width,height,hasError,ariaLabel,...rest}=props;return(0,jsx_runtime.jsx)(Textarea,{$width:width,$height:height,$hasError:hasError,spellCheck:!1,"aria-label":ariaLabel,ref,...rest})})),common_Textarea_Textarea=Textarea_Textarea;try{Textarea_Textarea.displayName="Textarea",Textarea_Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea_Textarea.__docgenInfo,name:"Textarea",path:"src/components/common/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-common-Textarea-Textarea-stories.40e7202b.iframe.bundle.js.map