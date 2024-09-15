"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[2404],{"./src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/SearchOperatorSelect",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`SearchOperatorSelect`는 추첨 생성 폼에서, 검색에 포함할 알고리즘들의 검색 방법을 정할 수 있는 컴포넌트입니다. 보다 구체적으로는, 여러 개의 알고리즘을 쿼리에 포함시킬 때, 사용할 연산자(`|`, `&`, `-`)를 정할 수 있습니다."}}}},Default={args:{searchOperator:"AND",onClick:searchOperator=>{alert(`onClick('${searchOperator}')`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    searchOperator: 'AND',\n    onClick: searchOperator => {\n      alert(`onClick('${searchOperator}')`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SearchOperatorSelect_SearchOperatorSelect});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,ButtonContainer=styled_components_browser_esm.I4.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,zoomInOut=styled_components_browser_esm.i7`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,CheckIconWrapper=styled_components_browser_esm.I4.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme})=>theme.color.GOLD};

    animation: ${zoomInOut} 0.15s forwards;
  }
`,Button=styled_components_browser_esm.I4.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme,$isSelected})=>$isSelected?theme.color.GOLD:theme.color.LIGHT_GRAY};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OPERATORS=["OR","AND","NOR"],SearchOperatorSelect=props=>{const{searchOperator,onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:OPERATORS.map((operator=>(0,jsx_runtime.jsxs)(ButtonContainer,{children:[operator===searchOperator&&(0,jsx_runtime.jsx)(CheckIconWrapper,{children:(0,jsx_runtime.jsx)(svg.Sr,{})}),(0,jsx_runtime.jsx)(Button,{type:"button","aria-label":`알고리즘 검색 옵션을 ${operator}로 설정하기`,$isSelected:operator===searchOperator,onClick:()=>{onClick(operator)},children:operator})]},operator)))})};SearchOperatorSelect.displayName="SearchOperatorSelect";const SearchOperatorSelect_SearchOperatorSelect=SearchOperatorSelect;try{SearchOperatorSelect.displayName="SearchOperatorSelect",SearchOperatorSelect.__docgenInfo={description:"",displayName:"SearchOperatorSelect",props:{searchOperator:{defaultValue:null,description:"",name:"searchOperator",required:!0,type:{name:"enum",value:[{value:'"OR"'},{value:'"AND"'},{value:'"NOR"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:'(searchOperator: "OR" | "AND" | "NOR") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx#SearchOperatorSelect"]={docgenInfo:SearchOperatorSelect.__docgenInfo,name:"SearchOperatorSelect",path:"src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx#SearchOperatorSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-SearchOperatorSelect-SearchOperatorSelect-stories.979b3d7d.iframe.bundle.js.map