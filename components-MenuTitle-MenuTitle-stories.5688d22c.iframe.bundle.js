"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[9367],{"./src/components/MenuTitle/MenuTitle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PngTitle:()=>PngTitle,SvgTitle:()=>SvgTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SvgTitle$parameters,_SvgTitle$parameters2,_SvgTitle$parameters3,_PngTitle$parameters,_PngTitle$parameters2,_PngTitle$parameters3,_images_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/images/svg/index.ts"),_MenuTitle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MenuTitle/MenuTitle.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/MenuTitle",component:_MenuTitle__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{},parameters:{docs:{description:{component:"`MenuTitle`는 설정 페이지의 메뉴의 역할을 나타나는 데 사용할 수 있는 제목 컴포넌트입니다."}}}},SvgTitle={args:{iconSrc:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_images_svg__WEBPACK_IMPORTED_MODULE_0__.Td,{}),title:"SVG 아이콘"}},PngTitle={args:{iconSrc:"./dice.png",title:"PNG 아이콘"}};SvgTitle.parameters={...SvgTitle.parameters,docs:{...null===(_SvgTitle$parameters=SvgTitle.parameters)||void 0===_SvgTitle$parameters?void 0:_SvgTitle$parameters.docs,source:{originalSource:"{\n  args: {\n    iconSrc: <CopyIcon />,\n    title: 'SVG 아이콘'\n  }\n}",...null===(_SvgTitle$parameters2=SvgTitle.parameters)||void 0===_SvgTitle$parameters2||null===(_SvgTitle$parameters2=_SvgTitle$parameters2.docs)||void 0===_SvgTitle$parameters2?void 0:_SvgTitle$parameters2.source},description:{story:"svg 이미지를 아이콘으로 사용할 경우, 해당 아이콘의 색이 주황색으로 고정됨에 유의하세요.",...null===(_SvgTitle$parameters3=SvgTitle.parameters)||void 0===_SvgTitle$parameters3||null===(_SvgTitle$parameters3=_SvgTitle$parameters3.docs)||void 0===_SvgTitle$parameters3?void 0:_SvgTitle$parameters3.description}}},PngTitle.parameters={...PngTitle.parameters,docs:{...null===(_PngTitle$parameters=PngTitle.parameters)||void 0===_PngTitle$parameters?void 0:_PngTitle$parameters.docs,source:{originalSource:"{\n  args: {\n    iconSrc: './dice.png',\n    title: 'PNG 아이콘'\n  }\n}",...null===(_PngTitle$parameters2=PngTitle.parameters)||void 0===_PngTitle$parameters2||null===(_PngTitle$parameters2=_PngTitle$parameters2.docs)||void 0===_PngTitle$parameters2?void 0:_PngTitle$parameters2.source},description:{story:"`string` 타입의 src를 사용하는 png, jpg 등의 이미지를 아이콘으로 사용할 경우, 이미지에 주황색 필터가 씌워짐에 유의하세요. 이 필터가 씌워지면 해당 아이콘은 단색 이미지가 되므로, 색상이 하나인 이미지를 사용하여야 합니다.",...null===(_PngTitle$parameters3=PngTitle.parameters)||void 0===_PngTitle$parameters3||null===(_PngTitle$parameters3=_PngTitle$parameters3.docs)||void 0===_PngTitle$parameters3?void 0:_PngTitle$parameters3.description}}};const __namedExportsOrder=["SvgTitle","PngTitle"];try{SvgTitle.displayName="SvgTitle",SvgTitle.__docgenInfo={description:"svg 이미지를 아이콘으로 사용할 경우, 해당 아이콘의 색이 주황색으로 고정됨에 유의하세요.",displayName:"SvgTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.stories.tsx#SvgTitle"]={docgenInfo:SvgTitle.__docgenInfo,name:"SvgTitle",path:"src/components/MenuTitle/MenuTitle.stories.tsx#SvgTitle"})}catch(__react_docgen_typescript_loader_error){}try{PngTitle.displayName="PngTitle",PngTitle.__docgenInfo={description:"`string` 타입의 src를 사용하는 png, jpg 등의 이미지를 아이콘으로 사용할 경우, 이미지에 주황색 필터가 씌워짐에 유의하세요. 이 필터가 씌워지면 해당 아이콘은 단색 이미지가 되므로, 색상이 하나인 이미지를 사용하여야 합니다.",displayName:"PngTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.stories.tsx#PngTitle"]={docgenInfo:PngTitle.__docgenInfo,name:"PngTitle",path:"src/components/MenuTitle/MenuTitle.stories.tsx#PngTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuTitle/MenuTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuTitle_MenuTitle});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,IconImage=styled_components_browser_esm.I4.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme})=>theme.filter.ORANGE_FILTER};
  object-fit: contain;
`,IconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.ORANGE};
  }
`,Title=styled_components_browser_esm.I4.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme})=>theme.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Underline=styled_components_browser_esm.I4.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme})=>theme.color.ORANGE_TRANSPARENT};

  z-index: -1;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuTitle=props=>{const{iconSrc,title}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:""}):(0,jsx_runtime.jsx)(IconWrapper,{children:iconSrc})),(0,jsx_runtime.jsx)(Title,{children:title})]}),(0,jsx_runtime.jsx)(Underline,{})]})};MenuTitle.displayName="MenuTitle";const MenuTitle_MenuTitle=MenuTitle;try{MenuTitle.displayName="MenuTitle",MenuTitle.__docgenInfo={description:"",displayName:"MenuTitle",props:{iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string | SVGProps<SVGSVGElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.tsx#MenuTitle"]={docgenInfo:MenuTitle.__docgenInfo,name:"MenuTitle",path:"src/components/MenuTitle/MenuTitle.tsx#MenuTitle"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-MenuTitle-MenuTitle-stories.5688d22c.iframe.bundle.js.map