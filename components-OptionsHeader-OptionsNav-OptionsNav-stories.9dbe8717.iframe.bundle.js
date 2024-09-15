"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[2349],{"./src/components/OptionsHeader/OptionsNav/OptionsNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/OptionsHeader/OptionsNav",component:__webpack_require__("./src/components/OptionsHeader/OptionsNav/OptionsNav.tsx").A,parameters:{docs:{description:{component:"`OptionsNav`는 설정 페이지에서 원하는 메뉴 카테고리를 고를 수 있게 해 주는 네비게이션 컴포넌트입니다."}}}},Default={args:{selectedCategory:"algorithmHider"}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    selectedCategory: 'algorithmHider'\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/OptionsHeader/OptionsNav/OptionsNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsNav_OptionsNav});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.nav`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OPTIONS_NAV_CATEGORIES=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"문제 추첨",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],OptionsNav=props=>{const{selectedCategory,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(NavItemList,{children:OPTIONS_NAV_CATEGORIES.map((({displayName,category})=>(0,jsx_runtime.jsxs)(NavItem,{children:[(0,jsx_runtime.jsx)(CategoryButton,{$isSelected:category===selectedCategory,onClick:()=>{onChange(category)},children:displayName}),(0,jsx_runtime.jsx)(Underline,{$isSelected:category===selectedCategory})]},displayName)))})})};OptionsNav.displayName="OptionsNav";const OptionsNav_OptionsNav=OptionsNav;try{OptionsNav.displayName="OptionsNav",OptionsNav.__docgenInfo={description:"",displayName:"OptionsNav",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/OptionsNav/OptionsNav.tsx#OptionsNav"]={docgenInfo:OptionsNav.__docgenInfo,name:"OptionsNav",path:"src/components/OptionsHeader/OptionsNav/OptionsNav.tsx#OptionsNav"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-OptionsHeader-OptionsNav-OptionsNav-stories.9dbe8717.iframe.bundle.js.map