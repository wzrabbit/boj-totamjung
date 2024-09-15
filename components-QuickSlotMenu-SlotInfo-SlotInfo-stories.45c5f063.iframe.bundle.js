"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[1638],{"./src/components/QuickSlotMenu/SlotInfo/SlotInfo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_TooLongQuery$paramet,_TooLongQuery$paramet2,_EmptyQuery$parameter,_EmptyQuery$parameter2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyQuery:()=>EmptyQuery,TooLongQuery:()=>TooLongQuery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/QuickSlotMenu/SlotInfo",component:__webpack_require__("./src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`SlotInfo`는 단일 슬롯에 해당하는 연습의 이름과 쿼리 내용을 표시할 때 사용하는 컴포넌트입니다."}}}},Default={args:{isEmpty:!1,title:"골드 랜덤 디펜스",query:"s#100.. *g solvable:true"}},TooLongQuery={args:{isEmpty:!1,title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi nemo, expedita vitae vero corrupti deserunt? Expedita dolor, quo labore vero, at molestias sed quis reiciendis similique illum in corporis.",query:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi nemo, expedita vitae vero corrupti deserunt? Expedita dolor, quo labore vero, at molestias sed quis reiciendis similique illum in corporis."}},EmptyQuery={args:{isEmpty:!0}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    isEmpty: false,\n    title: '골드 랜덤 디펜스',\n    query: 's#100.. *g solvable:true'\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}},TooLongQuery.parameters={...TooLongQuery.parameters,docs:{...null===(_TooLongQuery$paramet=TooLongQuery.parameters)||void 0===_TooLongQuery$paramet?void 0:_TooLongQuery$paramet.docs,source:{originalSource:"{\n  args: {\n    isEmpty: false,\n    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi nemo, expedita vitae vero corrupti deserunt? Expedita dolor, quo labore vero, at molestias sed quis reiciendis similique illum in corporis.',\n    query: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi nemo, expedita vitae vero corrupti deserunt? Expedita dolor, quo labore vero, at molestias sed quis reiciendis similique illum in corporis.'\n  }\n}",...null===(_TooLongQuery$paramet2=TooLongQuery.parameters)||void 0===_TooLongQuery$paramet2||null===(_TooLongQuery$paramet2=_TooLongQuery$paramet2.docs)||void 0===_TooLongQuery$paramet2?void 0:_TooLongQuery$paramet2.source}}},EmptyQuery.parameters={...EmptyQuery.parameters,docs:{...null===(_EmptyQuery$parameter=EmptyQuery.parameters)||void 0===_EmptyQuery$parameter?void 0:_EmptyQuery$parameter.docs,source:{originalSource:"{\n  args: {\n    isEmpty: true\n  }\n}",...null===(_EmptyQuery$parameter2=EmptyQuery.parameters)||void 0===_EmptyQuery$parameter2||null===(_EmptyQuery$parameter2=_EmptyQuery$parameter2.docs)||void 0===_EmptyQuery$parameter2?void 0:_EmptyQuery$parameter2.source}}};const __namedExportsOrder=["Default","TooLongQuery","EmptyQuery"]},"./src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SlotInfo_SlotInfo});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,NamePanel=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,QueryPanel=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,TextLabel=styled_components_browser_esm.I4.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme,$backgroundColor})=>"gold"===$backgroundColor?theme.color.GOLD:theme.color.WHITE};

  color: ${({theme})=>theme.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,NameEmptyText=styled_components_browser_esm.I4.p`
  color: ${({theme})=>theme.color.LIGHT_GRAY};
  font-size: 16px;
`,QueryEmptyText=styled_components_browser_esm.I4.p`
  color: ${({theme})=>theme.color.LIGHT_GRAY};
  font-size: 14px;
`,textWrapper=styled_components_browser_esm.AH`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,NameTextWrapper=styled_components_browser_esm.I4.div`
  ${textWrapper}

  white-space: nowrap;
`,QueryTextWrapper=styled_components_browser_esm.I4.div`
  ${textWrapper}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;var Text=__webpack_require__("./src/components/common/Text/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SlotInfo=props=>(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(NamePanel,{children:[(0,jsx_runtime.jsx)(TextLabel,{$backgroundColor:"gold",children:"추첨 이름"}),(0,jsx_runtime.jsx)(NameTextWrapper,{children:props.isEmpty?(0,jsx_runtime.jsx)(NameEmptyText,{children:"(비어 있음)"}):(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:props.title})})]}),(0,jsx_runtime.jsxs)(QueryPanel,{children:[(0,jsx_runtime.jsx)(TextLabel,{$backgroundColor:"white",children:"쿼리"}),(0,jsx_runtime.jsx)(QueryTextWrapper,{children:props.isEmpty?(0,jsx_runtime.jsx)(QueryEmptyText,{children:"(비어 있음)"}):(0,jsx_runtime.jsx)(Text.A,{type:"code",fontSize:"13px",children:props.query})})]})]});SlotInfo.displayName="SlotInfo";const SlotInfo_SlotInfo=SlotInfo;try{SlotInfo.displayName="SlotInfo",SlotInfo.__docgenInfo={description:"",displayName:"SlotInfo",props:{isEmpty:{defaultValue:null,description:"",name:"isEmpty",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx#SlotInfo"]={docgenInfo:SlotInfo.__docgenInfo,name:"SlotInfo",path:"src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx#SlotInfo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
//# sourceMappingURL=components-QuickSlotMenu-SlotInfo-SlotInfo-stories.45c5f063.iframe.bundle.js.map