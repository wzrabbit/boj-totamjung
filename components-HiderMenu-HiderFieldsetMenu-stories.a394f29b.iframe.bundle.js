"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[9283],{"./src/components/HiderMenu/HiderFieldsetMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/HiderFieldsetMenu",component:__webpack_require__("./src/components/HiderMenu/HiderFieldsetMenu.tsx").A,parameters:{docs:{description:{component:'`HiderFieldsetMenu`는 토탐정의 "가리개" 관련 기능들에 대한 설정을 조작할 수 있는 필드셋 형식의 메뉴 컴포넌트입니다.\n\n해당 메뉴에서는 아래의 설정들을 조작할 수 있습니다.\n1. 잠금 시간 설정\n2. 티어 가리개 활성화 여부 및 어려운 문제 경고 난이도 설정\n3. 알고리즘 가리개에서의 단서 제공 방법\n4. 잠금 타이머 실행 설정'}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/components/common/TextLink/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_TextLink_TextLink});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({theme})=>theme.color.LEMON};
`,TextLink=styled_components_browser_esm.I4.span`
  font-size: ${({$fontSize})=>$fontSize};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({theme})=>theme.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({theme})=>theme.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({theme})=>theme.color.LEMON};
  }
`,LinkIconWrapper=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({$fontSize})=>$fontSize};
  height: ${({$fontSize})=>$fontSize};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextLink_TextLink=props=>{const{href,fontSize,children}=props;return(0,jsx_runtime.jsxs)(Container,{href,target:"__blank",rel:"noopener",children:[(0,jsx_runtime.jsx)(TextLink,{$fontSize:fontSize,children}),(0,jsx_runtime.jsx)(LinkIconWrapper,{$fontSize:fontSize,children:(0,jsx_runtime.jsx)(svg.qY,{})})]})};TextLink_TextLink.displayName="TextLink";const common_TextLink_TextLink=TextLink_TextLink;try{TextLink_TextLink.displayName="TextLink",TextLink_TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextLink/TextLink.tsx#TextLink"]={docgenInfo:TextLink_TextLink.__docgenInfo,name:"TextLink",path:"src/components/common/TextLink/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/TextLink/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/TextLink/TextLink.tsx").A},"./src/types/typeGuards.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gv:()=>isObject,H9:()=>isNumericArray,Lq:()=>isTierWithoutNotRatable,br:()=>isRatedTier,hj:()=>isNumericObject,hz:()=>isIsoString});const isObject=data=>"object"==typeof data&&null!==data,isNumericObject=data=>isObject(data)&&Object.keys(data).every((key=>!isNaN(Number(key)))),isNumericArray=data=>Array.isArray(data)&&data.every((value=>"number"==typeof value)),isIsoString=data=>"string"==typeof data&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),isTier=data=>"number"==typeof data&&data%1==0&&data>=0&&data<=31,isTierWithoutNotRatable=data=>isTier(data)&&31!==data,isRatedTier=data=>isTier(data)&&0!==data&&31!==data}}]);
//# sourceMappingURL=components-HiderMenu-HiderFieldsetMenu-stories.a394f29b.iframe.bundle.js.map