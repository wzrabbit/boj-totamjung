"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[1394],{"./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ReachedLimit:()=>ReachedLimit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_ReachedLimit$paramet,_ReachedLimit$paramet2,_ReachedLimit$paramet3,_AlgorithmSearchInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/AlgorithmSearchInput",component:_AlgorithmSearchInput__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{docs:{description:{component:"`AlgorithmSearchInput`는 검색에 활용할 알고리즘들을 관리할 수 있는 인풋 컴포넌트입니다. 정확한 알고리즘을 등록할 수 있도록 검색에 기반하여 알고리즘 분류들을 추가할 수 있으며, 이미 추가한 알고리즘들도 단순 클릭을 통해 쉽게 지울 수 있습니다."}}}},Default={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],args:{selectedAlgorithmIds:[8,35,82],onChange:algorithmIds=>{alert(`onChange([${algorithmIds.join(", ")}])`)}}},ReachedLimit={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],args:{selectedAlgorithmIds:[8,35,82,127,40],onChange:algorithmIds=>{alert(`onChange([${algorithmIds.join(", ")}])`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  decorators: [Story => {\n    return <div style={{\n      position: 'relative',\n      height: '200px'\n    }}>\n          <Story />\n        </div>;\n  }],\n  args: {\n    selectedAlgorithmIds: [8, 35, 82],\n    onChange: algorithmIds => {\n      alert(`onChange([${algorithmIds.join(', ')}])`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}},ReachedLimit.parameters={...ReachedLimit.parameters,docs:{...null===(_ReachedLimit$paramet=ReachedLimit.parameters)||void 0===_ReachedLimit$paramet?void 0:_ReachedLimit$paramet.docs,source:{originalSource:"{\n  decorators: [Story => {\n    return <div style={{\n      position: 'relative',\n      height: '200px'\n    }}>\n          <Story />\n        </div>;\n  }],\n  args: {\n    selectedAlgorithmIds: [8, 35, 82, 127, 40],\n    onChange: algorithmIds => {\n      alert(`onChange([${algorithmIds.join(', ')}])`);\n    }\n  }\n}",...null===(_ReachedLimit$paramet2=ReachedLimit.parameters)||void 0===_ReachedLimit$paramet2||null===(_ReachedLimit$paramet2=_ReachedLimit$paramet2.docs)||void 0===_ReachedLimit$paramet2?void 0:_ReachedLimit$paramet2.source},description:{story:"검색에 사용할 수 있는 알고리즘의 최대 개수에 도달할 경우에는 검색 결과가 표시되지 않습니다.",...null===(_ReachedLimit$paramet3=ReachedLimit.parameters)||void 0===_ReachedLimit$paramet3||null===(_ReachedLimit$paramet3=_ReachedLimit$paramet3.docs)||void 0===_ReachedLimit$paramet3?void 0:_ReachedLimit$paramet3.description}}};const __namedExportsOrder=["Default","ReachedLimit"];try{ReachedLimit.displayName="ReachedLimit",ReachedLimit.__docgenInfo={description:"검색에 사용할 수 있는 알고리즘의 최대 개수에 도달할 경우에는 검색 결과가 표시되지 않습니다.",displayName:"ReachedLimit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.stories.tsx#ReachedLimit"]={docgenInfo:ReachedLimit.__docgenInfo,name:"ReachedLimit",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.stories.tsx#ReachedLimit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmSearchInput_AlgorithmSearchInput});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme,$isOpen})=>$isOpen&&styled_components_browser_esm.AH`
      & > ul {
        border-color: ${theme.color.LEMON};
        box-shadow: 0 0 12px ${theme.color.GOLD}70;
      }
    `}
`,panel=styled_components_browser_esm.AH`
  display: flex;
  overflow: auto;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  padding: 4px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,InputPanel=styled_components_browser_esm.I4.ul`
  ${panel}

  position: relative;

  height: 64px;

  z-index: 1;
  cursor: text;
`,SearchInput=styled_components_browser_esm.I4.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen})=>!$isOpen&&styled_components_browser_esm.AH`
      opacity: 0;
    `}

  ${({theme,$isOpen})=>$isOpen&&styled_components_browser_esm.AH`
      border-color: ${theme.color.LEMON};
      outline: 3px solid ${theme.color.LEMON}70;
    `}
`,SearchResultPanel=styled_components_browser_esm.I4.ul`
  ${panel}

  position: absolute;

  height: ${({$isOpen})=>$isOpen?"90px":"64px"};

  transform: ${({$isOpen})=>$isOpen?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`;const AlgorithmSearchInput_MiniAlgorithmButton=__webpack_require__("./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx").A;var react=__webpack_require__("./node_modules/react/index.js"),getSearchResults=__webpack_require__("./src/domains/algorithm/getSearchResults.ts"),randomDefense=__webpack_require__("./src/constants/randomDefense.ts");const randomDefense_useAlgorithmSearchInput=params=>{const{selectedAlgorithmIds,onChange}=params,[isOpen,setIsOpen]=(0,react.useState)(!1),[inputValue,setInputValue]=(0,react.useState)(""),containerRef=(0,react.useRef)(null),inputRef=(0,react.useRef)(null),searchedAlgorithmIds=selectedAlgorithmIds.length<randomDefense.Nu?(0,getSearchResults.p)(inputValue).filter((({id})=>!selectedAlgorithmIds.includes(id))).map((({id})=>id)):[];return(0,react.useEffect)((()=>{const containerElement=containerRef.current,inputElement=inputRef.current;if(!containerElement||!inputElement)return;const focusInputAndOpenMenu=()=>{inputElement.focus(),setIsOpen((()=>!0))},manageMenuVisibilityOnFocus=()=>{setIsOpen((()=>containerElement.contains(document.activeElement)))};return containerElement.addEventListener("click",focusInputAndOpenMenu),containerElement.addEventListener("focusin",manageMenuVisibilityOnFocus),containerElement.addEventListener("focusout",manageMenuVisibilityOnFocus),()=>{containerElement.removeEventListener("click",focusInputAndOpenMenu),containerElement.removeEventListener("focusin",manageMenuVisibilityOnFocus),containerElement.removeEventListener("focusout",manageMenuVisibilityOnFocus)}}),[containerRef,inputRef,isOpen,setIsOpen]),{isOpen,inputValue,searchedAlgorithmIds,updateInputValue:event=>{setInputValue(event.target.value)},processActionIfKeyPress:event=>{if("Enter"===event.key){if(0===searchedAlgorithmIds.length)return;onChange([...selectedAlgorithmIds,searchedAlgorithmIds[0]]),setInputValue("")}if("Backspace"===event.key){if(""!==inputValue)return;onChange(selectedAlgorithmIds.slice(0,-1))}},addAlgorithmId:algorithmId=>{onChange([...selectedAlgorithmIds,algorithmId]),setInputValue("")},deleteAlgorithmId:algorithmId=>{onChange(selectedAlgorithmIds.filter((id=>id!==algorithmId)))},containerRef,inputRef}};var algorithmInfos=__webpack_require__("./src/constants/algorithmInfos.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmSearchInput=props=>{const{selectedAlgorithmIds,onChange}=props,{isOpen,inputValue,searchedAlgorithmIds,updateInputValue,processActionIfKeyPress,addAlgorithmId,deleteAlgorithmId,containerRef,inputRef}=randomDefense_useAlgorithmSearchInput({selectedAlgorithmIds,onChange});return(0,jsx_runtime.jsxs)(Container,{ref:containerRef,$isOpen:isOpen,tabIndex:-1,children:[(0,jsx_runtime.jsx)(InputPanel,{tabIndex:-1,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[selectedAlgorithmIds.map((selectedId=>{const searchedAlgorithm=algorithmInfos.u.find((({id})=>id===selectedId)),searchedName=searchedAlgorithm?searchedAlgorithm.name:"";return(0,jsx_runtime.jsx)(AlgorithmSearchInput_MiniAlgorithmButton,{mode:"delete",id:selectedId,name:searchedName,onClick:deleteAlgorithmId},selectedId)})),(0,jsx_runtime.jsx)(SearchInput,{ref:inputRef,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:isOpen,value:inputValue,onChange:updateInputValue,onKeyDown:processActionIfKeyPress})]})}),(0,jsx_runtime.jsx)(SearchResultPanel,{$isOpen:isOpen,tabIndex:-1,children:searchedAlgorithmIds.map((selectedId=>{const searchedAlgorithm=algorithmInfos.u.find((({id})=>id===selectedId)),searchedName=searchedAlgorithm?searchedAlgorithm.name:"";return(0,jsx_runtime.jsx)(AlgorithmSearchInput_MiniAlgorithmButton,{mode:"add",id:selectedId,name:searchedName,onClick:addAlgorithmId},selectedId)}))})]})};AlgorithmSearchInput.displayName="AlgorithmSearchInput";const AlgorithmSearchInput_AlgorithmSearchInput=AlgorithmSearchInput;try{AlgorithmSearchInput.displayName="AlgorithmSearchInput",AlgorithmSearchInput.__docgenInfo={description:"",displayName:"AlgorithmSearchInput",props:{selectedAlgorithmIds:{defaultValue:null,description:"",name:"selectedAlgorithmIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedAlgorithmIds: number[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.tsx#AlgorithmSearchInput"]={docgenInfo:AlgorithmSearchInput.__docgenInfo,name:"AlgorithmSearchInput",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.tsx#AlgorithmSearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MiniAlgorithmButton_MiniAlgorithmButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.li`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MiniAlgorithmButton=props=>{const{id,name,mode,onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":"add"===mode?`${name}을 검색에 포함할 알고리즘 목록에 추가하기`:`${name}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{onClick(id)},children:[(0,jsx_runtime.jsx)(Text,{children:name}),"delete"===mode&&(0,jsx_runtime.jsx)(CloseIconWrapper,{children:(0,jsx_runtime.jsx)(svg.bI,{})})]})})};MiniAlgorithmButton.displayName="MiniAlgorithmButton";const MiniAlgorithmButton_MiniAlgorithmButton=MiniAlgorithmButton;try{MiniAlgorithmButton.displayName="MiniAlgorithmButton",MiniAlgorithmButton.__docgenInfo={description:"",displayName:"MiniAlgorithmButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"add"'},{value:'"delete"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(algorithmId: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx#MiniAlgorithmButton"]={docgenInfo:MiniAlgorithmButton.__docgenInfo,name:"MiniAlgorithmButton",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx#MiniAlgorithmButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/randomDefense.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M$:()=>NUMBER_REGEX,Nu:()=>MAX_SEARCH_ALGORITHMS_COUNT,Nw:()=>TITLE_MAX_LENGTH,Rv:()=>HANDLE_REGEX,Xq:()=>MAX_CUSTOM_QUERY_LENGTH,b8:()=>MAX_SOLVED_COUNT,o0:()=>MAX_HISTORY_LIMIT});const MAX_HISTORY_LIMIT=300,MAX_SEARCH_ALGORITHMS_COUNT=5,TITLE_MAX_LENGTH=30,HANDLE_REGEX=/^\w{3,20}$/,MAX_SOLVED_COUNT=1e8,NUMBER_REGEX=/^([1-9][0-9]*|0)$/,MAX_CUSTOM_QUERY_LENGTH=300},"./src/domains/algorithm/getSearchResults.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>getSearchResults});var _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/algorithmInfos.ts");const trimWord=word=>word.toLowerCase().replace(/^(tag:|#)|[ ,_/-]/g,""),getSearchResults=keyword=>{const trimmedKeyword=trimWord(keyword),searchResults=[];return _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__.u.forEach((({id,name,englishName,tag,alias})=>{const acceptableWords=[name,englishName,tag,...alias].map((word=>trimWord(word)));(""===trimmedKeyword||acceptableWords.some((word=>-1!==word.indexOf(trimmedKeyword))))&&searchResults.push({id,name})})),searchResults}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-AlgorithmSearchInput-AlgorithmSearchInput-stories.ebc76e5d.iframe.bundle.js.map