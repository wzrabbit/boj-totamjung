"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[7626],{"./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MIniAlgorithmButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _DeleteMode$parameter,_DeleteMode$parameter2,_DeleteMode$parameter3,_AddMode$parameters,_AddMode$parameters2,_AddMode$parameters3;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddMode:()=>AddMode,DeleteMode:()=>DeleteMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx").A,parameters:{docs:{description:{component:"`MiniAlgorithmButton`는 검색에 사용할 알고리즘을 정하는 `AlgorithmSearchInput` 컴포넌트의 하위 컴포넌트입니다. 클릭 시 용도에 따라 새로운 알고리즘을 추가하거나, 이미 지정된 알고리즘을 목록에서 제거하는 기능을 수행합니다."}}}},DeleteMode={args:{id:2,name:"그리디 알고리즘",mode:"delete",onClick:algorithm=>{alert(`onClick(${JSON.stringify(algorithm)})`)}}},AddMode={args:{id:1,name:"그리디 알고리즘",mode:"add",onClick:algorithm=>{alert(`onClick(${JSON.stringify(algorithm)})`)}}};DeleteMode.parameters={...DeleteMode.parameters,docs:{...null===(_DeleteMode$parameter=DeleteMode.parameters)||void 0===_DeleteMode$parameter?void 0:_DeleteMode$parameter.docs,source:{originalSource:"{\n  args: {\n    id: 2,\n    name: '그리디 알고리즘',\n    mode: 'delete',\n    onClick: algorithm => {\n      alert(`onClick(${JSON.stringify(algorithm)})`);\n    }\n  }\n}",...null===(_DeleteMode$parameter2=DeleteMode.parameters)||void 0===_DeleteMode$parameter2||null===(_DeleteMode$parameter2=_DeleteMode$parameter2.docs)||void 0===_DeleteMode$parameter2?void 0:_DeleteMode$parameter2.source},description:{story:"클릭 시 해당 알고리즘 분류가 삭제되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 선택된 알고리즘을 목록에서 제거하는 것이 있습니다.",...null===(_DeleteMode$parameter3=DeleteMode.parameters)||void 0===_DeleteMode$parameter3||null===(_DeleteMode$parameter3=_DeleteMode$parameter3.docs)||void 0===_DeleteMode$parameter3?void 0:_DeleteMode$parameter3.description}}},AddMode.parameters={...AddMode.parameters,docs:{...null===(_AddMode$parameters=AddMode.parameters)||void 0===_AddMode$parameters?void 0:_AddMode$parameters.docs,source:{originalSource:"{\n  args: {\n    id: 1,\n    name: '그리디 알고리즘',\n    mode: 'add',\n    onClick: algorithm => {\n      alert(`onClick(${JSON.stringify(algorithm)})`);\n    }\n  }\n}",...null===(_AddMode$parameters2=AddMode.parameters)||void 0===_AddMode$parameters2||null===(_AddMode$parameters2=_AddMode$parameters2.docs)||void 0===_AddMode$parameters2?void 0:_AddMode$parameters2.source},description:{story:"클릭 시 해당 알고리즘 분류가 추가되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 아직 선택되지 않은, 검색 결과로 나오는 알고리즘을 목록에 추가하는 것이 있습니다.",...null===(_AddMode$parameters3=AddMode.parameters)||void 0===_AddMode$parameters3||null===(_AddMode$parameters3=_AddMode$parameters3.docs)||void 0===_AddMode$parameters3?void 0:_AddMode$parameters3.description}}};const __namedExportsOrder=["DeleteMode","AddMode"];try{DeleteMode.displayName="DeleteMode",DeleteMode.__docgenInfo={description:"클릭 시 해당 알고리즘 분류가 삭제되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 선택된 알고리즘을 목록에서 제거하는 것이 있습니다.",displayName:"DeleteMode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MIniAlgorithmButton.stories.tsx#DeleteMode"]={docgenInfo:DeleteMode.__docgenInfo,name:"DeleteMode",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MIniAlgorithmButton.stories.tsx#DeleteMode"})}catch(__react_docgen_typescript_loader_error){}try{AddMode.displayName="AddMode",AddMode.__docgenInfo={description:"클릭 시 해당 알고리즘 분류가 추가되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 아직 선택되지 않은, 검색 결과로 나오는 알고리즘을 목록에 추가하는 것이 있습니다.",displayName:"AddMode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MIniAlgorithmButton.stories.tsx#AddMode"]={docgenInfo:AddMode.__docgenInfo,name:"AddMode",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MIniAlgorithmButton.stories.tsx#AddMode"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MiniAlgorithmButton_MiniAlgorithmButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.li`
  display: inline-block;

  height: 26px;
`,Button=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,Text=styled_components_browser_esm.I4.p`
  overflow: hidden;

  color: ${({theme})=>theme.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,CloseIconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.LEMON};
  }
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MiniAlgorithmButton=props=>{const{id,name,mode,onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":"add"===mode?`${name}을 검색에 포함할 알고리즘 목록에 추가하기`:`${name}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{onClick(id)},children:[(0,jsx_runtime.jsx)(Text,{children:name}),"delete"===mode&&(0,jsx_runtime.jsx)(CloseIconWrapper,{children:(0,jsx_runtime.jsx)(svg.bI,{})})]})})};MiniAlgorithmButton.displayName="MiniAlgorithmButton";const MiniAlgorithmButton_MiniAlgorithmButton=MiniAlgorithmButton;try{MiniAlgorithmButton.displayName="MiniAlgorithmButton",MiniAlgorithmButton.__docgenInfo={description:"",displayName:"MiniAlgorithmButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"add"'},{value:'"delete"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(algorithmId: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx#MiniAlgorithmButton"]={docgenInfo:MiniAlgorithmButton.__docgenInfo,name:"MiniAlgorithmButton",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx#MiniAlgorithmButton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-AlgorithmSearchInput-MiniAlgorithmButton-MIniAlgorithmButton-stories.57c83e66.iframe.bundle.js.map