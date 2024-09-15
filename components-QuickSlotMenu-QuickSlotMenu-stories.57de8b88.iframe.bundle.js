"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[6327],{"./src/components/QuickSlotMenu/QuickSlotMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/QuickSlotMenu",component:__webpack_require__("./src/components/QuickSlotMenu/QuickSlotMenu.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`QuickSlotMenu`는 추첨 생성 폼을 통해 생성된 연습 쿼리들을 관리할 수 있는 메뉴 형태의 컴포넌트입니다."}}}},Default={args:{quickSlotsInfo:{selectedSlotNo:2,hotkey:"Alt",slots:{1:{isEmpty:!0},2:{isEmpty:!1,title:"골드 랜덤 디펜스",query:"*11..15 s#3000.. solvable:true"},3:{isEmpty:!0},4:{isEmpty:!1,title:"외국어 문제 풀어보기",query:"*5..20 !lang:ko solvable:true"},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!1,title:"이추첨의이름은정확히삼십글자이며이렇게하는이유는테스트를위함",query:"*1..30 (-#rope-#bayes-#knuth-#dancing_links-#differential_cryptanalysis-#discrete_sqrt-#lgv-#green-#stoer_wagner-#multipoint_evaluation-#lte-#geometric_boolean_operations-#a_star-#discrete_kth_root)"},9:{isEmpty:!0},0:{isEmpty:!0}}},isLoaded:!0,onHotkeyChange:hotkey=>{alert(`onHotkeyChange('${hotkey}')`)},onSlotChange:(title,query)=>{alert(`onSlotChange('${title}', '${query}')`)},onSlotDelete:()=>{alert("onSlotDelete()")},onSlotNoChange:slotNo=>{alert(`onSlotNoChange(${slotNo})`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    quickSlotsInfo: quickSlotsResponse,\n    isLoaded: true,\n    onHotkeyChange: hotkey => {\n      alert(`onHotkeyChange('${hotkey}')`);\n    },\n    onSlotChange: (title: string, query: string) => {\n      alert(`onSlotChange('${title}', '${query}')`);\n    },\n    onSlotDelete: () => {\n      alert(`onSlotDelete()`);\n    },\n    onSlotNoChange: slotNo => {\n      alert(`onSlotNoChange(${slotNo})`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/common/ErrorText/ErrorText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_ErrorText_ErrorText});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getContainerSizeByFontSize=fontSize=>`${Number(fontSize.slice(0,2))+3}px`,Container=styled_components_browser_esm.I4.div`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorText_ErrorText=props=>{const{fontSize,errorMessage,height}=props;return(0,jsx_runtime.jsx)(Container,{$fontSize:fontSize,$height:height,children:""!==errorMessage&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(svg.id,{}),(0,jsx_runtime.jsx)(ErrorText,{$fontSize:fontSize,role:"alert",children:errorMessage})]})})};ErrorText_ErrorText.displayName="ErrorText";const common_ErrorText_ErrorText=ErrorText_ErrorText;try{ErrorText_ErrorText.displayName="ErrorText",ErrorText_ErrorText.__docgenInfo={description:"",displayName:"ErrorText",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<number | (string & {})>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/ErrorText/ErrorText.tsx#ErrorText"]={docgenInfo:ErrorText_ErrorText.__docgenInfo,name:"ErrorText",path:"src/components/common/ErrorText/ErrorText.tsx#ErrorText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/ErrorText/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/ErrorText/ErrorText.tsx").A},"./src/components/common/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Input_Input});var react=__webpack_require__("./node_modules/react/index.js");const Input=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.input`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_Input=(0,react.forwardRef)(((props,ref)=>{const{width,hasError,textAlign,ariaLabel,...rest}=props;return(0,jsx_runtime.jsx)(Input,{$width:width,$hasError:hasError,$textAlign:textAlign,"aria-label":ariaLabel,spellCheck:!1,ref,...rest})})),common_Input_Input=Input_Input;try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input/Input.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/components/common/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Input/Input.tsx").A},"./src/components/common/NamedFrame/NamedFrame.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>NamedFrame_NamedFrame});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: relative;

  width: ${({$width})=>$width};
  height: ${({$height})=>$height};

  padding: ${({$padding})=>$padding};

  border: 2px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,Title=styled_components_browser_esm.I4.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({theme})=>theme.color.LIGHTER_BROWN};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NamedFrame=props=>{const{width,height,padding,title,children}=props;return(0,jsx_runtime.jsxs)(Container,{$width:width,$height:height,$padding:padding,children:[""!==title&&(0,jsx_runtime.jsx)(Title,{children:title}),children]})};NamedFrame.displayName="NamedFrame";const NamedFrame_NamedFrame=NamedFrame;try{NamedFrame.displayName="NamedFrame",NamedFrame.__docgenInfo={description:"",displayName:"NamedFrame",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!0,type:{name:"Padding<number | (string & {})> | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/NamedFrame/NamedFrame.tsx#NamedFrame"]={docgenInfo:NamedFrame.__docgenInfo,name:"NamedFrame",path:"src/components/common/NamedFrame/NamedFrame.tsx#NamedFrame"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/NamedFrame/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/NamedFrame/NamedFrame.tsx").A},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
//# sourceMappingURL=components-QuickSlotMenu-QuickSlotMenu-stories.57de8b88.iframe.bundle.js.map