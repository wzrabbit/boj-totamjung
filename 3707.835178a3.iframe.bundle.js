"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[3707],{"./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmSearchInput_AlgorithmSearchInput});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MiniAlgorithmButton=props=>{const{id,name,mode,onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":"add"===mode?`${name}을 검색에 포함할 알고리즘 목록에 추가하기`:`${name}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{onClick(id)},children:[(0,jsx_runtime.jsx)(Text,{children:name}),"delete"===mode&&(0,jsx_runtime.jsx)(CloseIconWrapper,{children:(0,jsx_runtime.jsx)(svg.bI,{})})]})})};MiniAlgorithmButton.displayName="MiniAlgorithmButton";const MiniAlgorithmButton_MiniAlgorithmButton=MiniAlgorithmButton;try{MiniAlgorithmButton.displayName="MiniAlgorithmButton",MiniAlgorithmButton.__docgenInfo={description:"",displayName:"MiniAlgorithmButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"add"'},{value:'"delete"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(algorithmId: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx#MiniAlgorithmButton"]={docgenInfo:MiniAlgorithmButton.__docgenInfo,name:"MiniAlgorithmButton",path:"src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton/MiniAlgorithmButton.tsx#MiniAlgorithmButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DifficultyAdjustMenu_DifficultyAdjustMenu});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  width: 465px;
`,PresetPanel=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: space-around;
`;const DifficultyAdjustMenu_TierSlider=__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx").A;const DifficultyAdjustMenu_TierRange=__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx").A;const DifficultyAdjustMenu_TierPresetButtonList=__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DifficultyAdjustMenu=props=>{const{startTier,endTier,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(DifficultyAdjustMenu_TierSlider,{startTier,endTier,onChange}),(0,jsx_runtime.jsxs)(PresetPanel,{children:[(0,jsx_runtime.jsx)(DifficultyAdjustMenu_TierRange,{startTier,endTier}),(0,jsx_runtime.jsx)(DifficultyAdjustMenu_TierPresetButtonList,{onClick:onChange})]})]})};DifficultyAdjustMenu.displayName="DifficultyAdjustMenu";const DifficultyAdjustMenu_DifficultyAdjustMenu=DifficultyAdjustMenu;try{DifficultyAdjustMenu.displayName="DifficultyAdjustMenu",DifficultyAdjustMenu.__docgenInfo={description:"",displayName:"DifficultyAdjustMenu",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.tsx#DifficultyAdjustMenu"]={docgenInfo:DifficultyAdjustMenu.__docgenInfo,name:"DifficultyAdjustMenu",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.tsx#DifficultyAdjustMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButton/TierPresetButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierPresetButton_TierPresetButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getRankColor=(theme,rank)=>"bronze"===rank?theme.solvedAcTier.BRONZE:"silver"===rank?theme.solvedAcTier.SILVER:"gold"===rank?theme.solvedAcTier.GOLD:"platinum"===rank?theme.solvedAcTier.PLATINUM:"diamond"===rank?theme.solvedAcTier.DIAMOND:"ruby"===rank?theme.solvedAcTier.RUBY:theme.color.GRAY,Container=styled_components_browser_esm.I4.li`
  width: 32px;
  height: 32px;
`,Button=styled_components_browser_esm.I4.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme,$rank})=>getRankColor(theme,$rank)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme,$rank})=>`linear-gradient(to top, ${getRankColor(theme,$rank)}70 0%, transparent 100%)`};
  }
`,TierBadge=styled_components_browser_esm.I4.img`
  width: 16px;
`;styled_components_browser_esm.I4.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme})=>theme.color.GOLD};
  font-weight: 800;
`;var tier=__webpack_require__("./src/images/svg/tier/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ARIA_LABEL_TEXTS={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},TIER_RANGE={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},TierPresetButtonProps=props=>{const{rank,onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(Button,{type:"button",$rank:rank,"aria-label":ARIA_LABEL_TEXTS[rank],onClick:()=>{onClick(TIER_RANGE.START[rank],TIER_RANGE.END[rank])},children:(0,jsx_runtime.jsx)(TierBadge,{src:tier.K[rank],alt:""})})})};TierPresetButtonProps.displayName="TierPresetButtonProps";const TierPresetButton_TierPresetButton=TierPresetButtonProps;try{TierPresetButton.displayName="TierPresetButton",TierPresetButton.__docgenInfo={description:"",displayName:"TierPresetButton",props:{rank:{defaultValue:null,description:"",name:"rank",required:!0,type:{name:"enum",value:[{value:'"unrated"'},{value:'"bronze"'},{value:'"silver"'},{value:'"gold"'},{value:'"platinum"'},{value:'"diamond"'},{value:'"ruby"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButton/TierPresetButton.tsx#TierPresetButton"]={docgenInfo:TierPresetButton.__docgenInfo,name:"TierPresetButton",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButton/TierPresetButton.tsx#TierPresetButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierPresetButtonList_TierPresetButtonList});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.ul`
  display: flex;
  column-gap: 8px;

  width: 272px;
  height: 32px;
`;const TierPresetButtonList_TierPresetButton=__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButton/TierPresetButton.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RANK_NAMES=["unrated","bronze","silver","gold","platinum","diamond","ruby"],TierPresetButtonList=props=>{const{onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:RANK_NAMES.map((rankName=>(0,jsx_runtime.jsx)(TierPresetButtonList_TierPresetButton,{rank:rankName,onClick},rankName)))})};TierPresetButtonList.displayName="TierPresetButtonList";const TierPresetButtonList_TierPresetButtonList=TierPresetButtonList;try{TierPresetButtonList.displayName="TierPresetButtonList",TierPresetButtonList.__docgenInfo={description:"",displayName:"TierPresetButtonList",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx#TierPresetButtonList"]={docgenInfo:TierPresetButtonList.__docgenInfo,name:"TierPresetButtonList",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx#TierPresetButtonList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierRange_TierRange});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  background-color: ${({theme})=>theme.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,TierBadge=styled_components_browser_esm.I4.img`
  width: 26px;
`,Tilde=styled_components_browser_esm.I4.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme})=>theme.color.GOLD};
  font-weight: 800;
`;var tier=__webpack_require__("./src/images/svg/tier/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TierRange=props=>{const{startTier,endTier}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(TierBadge,{src:tier.R[startTier],alt:"",draggable:!1}),(0,jsx_runtime.jsx)(Tilde,{children:"~"}),(0,jsx_runtime.jsx)(TierBadge,{src:tier.R[endTier],alt:"",draggable:!1})]})};TierRange.displayName="TierRange";const TierRange_TierRange=TierRange;try{TierRange.displayName="TierRange",TierRange.__docgenInfo={description:"",displayName:"TierRange",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx#TierRange"]={docgenInfo:TierRange.__docgenInfo,name:"TierRange",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx#TierRange"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierSlider_TierSlider});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typeGuards=__webpack_require__("./src/types/typeGuards.ts");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,Track=styled_components_browser_esm.I4.div`
  width: 100%;
  height: 3px;

  background: ${({theme})=>`linear-gradient(to right, ${Array.from({length:31}).map(((_,index)=>(0,typeGuards.Lq)(index)?`${theme.solvedAcTier[index]} ${index/31*100}%, ${theme.solvedAcTier[index]} ${(index+1)/31*100}%, `:"")).join("").slice(0,-2)})`};

  pointer-events: none;
`,Thumb=styled_components_browser_esm.I4.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  background-color: transparent;

  pointer-events: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({theme,value})=>theme.solvedAcTier[value]};
    box-shadow: 0 0 0 2px ${({theme})=>theme.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TierSlider=props=>{const{startTier,endTier,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Track,{}),(0,jsx_runtime.jsx)(Thumb,{type:"range",min:0,max:30,value:startTier,"aria-label":"시작 범위 티어 설정하기",onChange:event=>{const newStartTier=Number(event.target.value),newEndTier=Math.max(Number(newStartTier),endTier);(0,typeGuards.Lq)(newStartTier)&&(0,typeGuards.Lq)(newEndTier)&&onChange(newStartTier,newEndTier)}}),(0,jsx_runtime.jsx)(Thumb,{type:"range",min:0,max:30,value:endTier,"aria-label":"끝 범위 티어 설정하기",onChange:event=>{const newEndTier=Number(event.target.value),newStartTier=Math.min(Number(newEndTier),startTier);(0,typeGuards.Lq)(newStartTier)&&(0,typeGuards.Lq)(newEndTier)&&onChange(newStartTier,newEndTier)}})]})};TierSlider.displayName="TierSlider";const TierSlider_TierSlider=TierSlider;try{TierSlider.displayName="TierSlider",TierSlider.__docgenInfo={description:"",displayName:"TierSlider",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx#TierSlider"]={docgenInfo:TierSlider.__docgenInfo,name:"TierSlider",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx#TierSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseCapsuleButton_RandomDefenseCapsuleButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,capsuleButton=styled_components_browser_esm.AH`
  width: 50%;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme})=>theme.color.LIGHTER_BROWN};

  transition: 0.2s;
`,LeftButton=styled_components_browser_esm.I4.button`
  ${capsuleButton}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated})=>$isActivated?styled_components_browser_esm.AH`
          border-color: ${({theme})=>theme.color.MAGENTA};
          background-color: ${({theme})=>theme.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme})=>theme.color.MAGENTA};

          color: ${({theme})=>theme.color.WHITE};
        `:styled_components_browser_esm.AH`
          &:hover {
            border-color: ${({theme})=>theme.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme})=>theme.color.MAGENTA};

            color: ${({theme})=>theme.color.MAGENTA};
          }
        `}
`,RightButton=styled_components_browser_esm.I4.button`
  ${capsuleButton}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated})=>$isActivated?styled_components_browser_esm.AH`
          border-color: ${({theme})=>theme.color.AZURE_BLUE};
          background-color: ${({theme})=>theme.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme})=>theme.color.AZURE_BLUE};

          color: ${({theme})=>theme.color.WHITE};
        `:styled_components_browser_esm.AH`
          &:hover {
            border-color: ${({theme})=>theme.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme})=>theme.color.AZURE_BLUE};

            color: ${({theme})=>theme.color.AZURE_BLUE};
          }
        `}
`,MidCircle=styled_components_browser_esm.I4.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.LIGHTER_BROWN};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseCapsuleButton=props=>{const{mode,onClick}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(LeftButton,{type:"button",$isActivated:"easy"===mode,onClick:()=>{onClick("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),(0,jsx_runtime.jsx)(RightButton,{type:"button",$isActivated:"manual"===mode,onClick:()=>{onClick("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),(0,jsx_runtime.jsx)(MidCircle,{children:"OR"})]})};RandomDefenseCapsuleButton.displayName="RandomDefenseCapsuleButton";const RandomDefenseCapsuleButton_RandomDefenseCapsuleButton=RandomDefenseCapsuleButton;try{RandomDefenseCapsuleButton.displayName="RandomDefenseCapsuleButton",RandomDefenseCapsuleButton.__docgenInfo={description:"",displayName:"RandomDefenseCapsuleButton",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"easy"'},{value:'"manual"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(mode: RandomDefenseFormMode) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx#RandomDefenseCapsuleButton"]={docgenInfo:RandomDefenseCapsuleButton.__docgenInfo,name:"RandomDefenseCapsuleButton",path:"src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx#RandomDefenseCapsuleButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseCreateButton_RandomDefenseCreateButton});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,buttonSide=styled_components_browser_esm.AH`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({theme})=>theme.color.DARK_BROWN};
  border: 2px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 6px;
`,UpperSide=styled_components_browser_esm.I4.div`
  ${buttonSide}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${Button}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`,LowerSide=styled_components_browser_esm.I4.div`
  ${buttonSide}

  bottom: 0;
`,DiceIconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 36px;
  height: 36px;

  & svg {
    width: 36px;
    height: 36px;

    color: ${({theme})=>theme.color.DARK_ORANGE};
  }
`,TextContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,TitleText=styled_components_browser_esm.I4.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({theme})=>theme.color.ORANGE};
`,SlotNoText=styled_components_browser_esm.I4.p`
  font-size: 12px;
  color: ${({theme})=>theme.color.LIGHT_GRAY};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseCreateButton=props=>{const{selectedSlotNo,isLoaded,onClick}=props;return(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":`${selectedSlotNo}번 슬롯에 추첨 생성하기`,onClick,disabled:!isLoaded,children:[(0,jsx_runtime.jsxs)(UpperSide,{children:[(0,jsx_runtime.jsx)(DiceIconWrapper,{children:(0,jsx_runtime.jsx)(svg.jG,{})}),(0,jsx_runtime.jsxs)(TextContainer,{children:[(0,jsx_runtime.jsx)(TitleText,{children:"추첨 생성"}),(0,jsx_runtime.jsx)(SlotNoText,{children:isLoaded?`슬롯 번호 − ${selectedSlotNo}`:"로딩 중..."})]})]}),(0,jsx_runtime.jsx)(LowerSide,{})]})};RandomDefenseCreateButton.displayName="RandomDefenseCreateButton";const RandomDefenseCreateButton_RandomDefenseCreateButton=RandomDefenseCreateButton;try{RandomDefenseCreateButton.displayName="RandomDefenseCreateButton",RandomDefenseCreateButton.__docgenInfo={description:"",displayName:"RandomDefenseCreateButton",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx#RandomDefenseCreateButton"]={docgenInfo:RandomDefenseCreateButton.__docgenInfo,name:"RandomDefenseCreateButton",path:"src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx#RandomDefenseCreateButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseCreateMenu_RandomDefenseCreateMenu});var NamedFrame=__webpack_require__("./src/components/common/NamedFrame/index.ts"),Input=__webpack_require__("./src/components/common/Input/index.ts"),Textarea=__webpack_require__("./src/components/common/Textarea/index.ts"),TextLink=__webpack_require__("./src/components/common/TextLink/index.ts"),ErrorText=__webpack_require__("./src/components/common/ErrorText/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts");const RandomDefenseCreateMenu_RandomDefenseCreateButton=__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx").A;const RandomDefenseCreateMenu_RandomDefenseCapsuleButton=__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton/RandomDefenseCapsuleButton.tsx").A;const RandomDefenseCreateMenu_DifficultyAdjustMenu=__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.tsx").A;const RandomDefenseCreateMenu_SearchOperatorSelect=__webpack_require__("./src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx").A;const RandomDefenseCreateMenu_AlgorithmSearchInput=__webpack_require__("./src/components/RandomDefenseCreateMenu/AlgorithmSearchInput/AlgorithmSearchInput.tsx").A;var react=__webpack_require__("./node_modules/react/index.js"),randomDefense=__webpack_require__("./src/constants/randomDefense.ts"),algorithmInfos=__webpack_require__("./src/constants/algorithmInfos.ts"),typeGuards=__webpack_require__("./src/types/typeGuards.ts");const validateTitle=title=>title.length>randomDefense.Nw?{isValid:!1,errorMessage:`추첨 이름은 ${randomDefense.Nw}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},validateHandle=handle=>""===handle.trim()?{isValid:!0}:handle.length<3||handle.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:randomDefense.Rv.test(handle)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},validateSolvedCount=(solvedMin,solvedMax)=>{const numerizedSolvedMin=Number(solvedMin),numerizedSolvedMax=Number(solvedMax),isSolvedMinEmpty=""===solvedMin.trim(),isSolvedMaxEmpty=""===solvedMax.trim();return isSolvedMinEmpty||randomDefense.M$.test(solvedMin)?isSolvedMaxEmpty||randomDefense.M$.test(solvedMax)?!isSolvedMinEmpty&&numerizedSolvedMin>randomDefense.b8?{isValid:!1,errorMessage:`맞은 사람 수는 ${randomDefense.b8.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!isSolvedMaxEmpty&&numerizedSolvedMax>randomDefense.b8?{isValid:!1,errorMessage:`맞은 사람 수는 ${randomDefense.b8.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!isSolvedMinEmpty&&!isSolvedMaxEmpty&&numerizedSolvedMin>numerizedSolvedMax?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}:{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}},validateDifficulty=(startTier,endTier)=>Number(startTier)>Number(endTier)?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0},validateAlgorithmIds=algorithmIds=>{if(algorithmIds.length>randomDefense.Nu)return{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${randomDefense.Nu.toLocaleString()}개 이하여야 해요.`};return algorithmIds.every((algorithmId=>"number"==typeof algorithmId&&algorithmId%1==0&&algorithmId>=1&&algorithmId<=algorithmInfos.t))?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."}},validateCustomQuery=customQuery=>""===customQuery.trim()?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:customQuery.length>randomDefense.Xq?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${randomDefense.Xq}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},generateAlgorithmTags=algorithmIds=>{const algorithmTags=[];return algorithmIds.forEach((algorithmId=>{var _ALGORITHM_INFOS$find;const searchedAlgorithmName=null===(_ALGORITHM_INFOS$find=algorithmInfos.u.find((info=>info.id===algorithmId)))||void 0===_ALGORITHM_INFOS$find?void 0:_ALGORITHM_INFOS$find.tag;searchedAlgorithmName&&algorithmTags.push(`#${searchedAlgorithmName}`)})),algorithmTags},convertOperator=searchOperator=>"OR"===searchOperator?"|":"AND"===searchOperator?"&":"-",initialRandomDefenseFormData={mode:"easy",title:"",handle:"",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},randomDefense_useRandomDefenseCreateMenu=params=>{const{selectedSlotNo,onSubmit}=params,[randomDefenseFormData,setRandomDefenseFormData]=(0,react.useState)(initialRandomDefenseFormData),[errorMessage,setErrorMessage]=(0,react.useState)(""),[errorElementName,setErrorElementName]=(0,react.useState)(void 0),{mode,title,handle,solvedMin,solvedMax,startTier,endTier,searchOperator,algorithmIds,customQuery}=randomDefenseFormData,titleRef=(0,react.useRef)(null),handleRef=(0,react.useRef)(null),solvedMinRef=(0,react.useRef)(null),solvedMaxRef=(0,react.useRef)(null),customQueryRef=(0,react.useRef)(null);return{mode,title,handle,solvedMin,solvedMax,startTier,endTier,searchOperator,algorithmIds,customQuery,errorMessage,errorElementName,setMode:mode=>{setRandomDefenseFormData((prev=>({...prev,mode}))),setErrorMessage(""),setErrorElementName(void 0)},setRandomDefenseInputValue:event=>{const{name,value}=event.target;name in initialRandomDefenseFormData&&setRandomDefenseFormData((prev=>({...prev,[name]:value})))},setTierRange:(startTier,endTier)=>{setRandomDefenseFormData((prev=>({...prev,startTier,endTier})))},setSearchOperator:searchOperator=>{setRandomDefenseFormData((prev=>({...prev,searchOperator})))},setAlgorithmIds:algorithmIds=>{setRandomDefenseFormData((prev=>({...prev,algorithmIds})))},submitRandomDefense:()=>{var _titleRef$current,_handleRef$current,_solvedMinRef$current,_solvedMaxRef$current,_customQueryRef$curre,data;if(data=randomDefenseFormData,!((0,typeGuards.Gv)(data)&&"mode"in data&&"title"in data&&"handle"in data&&"solvedMin"in data&&"solvedMax"in data&&"startTier"in data&&"endTier"in data&&"searchOperator"in data&&"algorithmIds"in data&&"customQuery"in data&&"string"==typeof data.mode&&["easy","manual"].includes(data.mode)&&"string"==typeof data.title&&"string"==typeof data.handle&&"string"==typeof data.solvedMin&&"string"==typeof data.solvedMax&&(0,typeGuards.H9)(data.algorithmIds)&&(0,typeGuards.Lq)(data.startTier)&&(0,typeGuards.Lq)(data.endTier)&&"string"==typeof data.searchOperator&&["OR","AND","NOR"].includes(data.searchOperator)&&"string"==typeof data.customQuery))return;const validationResult=(randomDefenseFormData=>{const{mode,title,handle,solvedMin,solvedMax,startTier,endTier,algorithmIds,customQuery}=randomDefenseFormData,validationResults="easy"===mode?[validateTitle(title),validateHandle(handle),validateSolvedCount(solvedMin,solvedMax),validateDifficulty(startTier,endTier),validateAlgorithmIds(algorithmIds)]:[validateTitle(title),validateCustomQuery(customQuery)];for(let i=0;i<validationResults.length;i++){const currentValidationResult=validationResults[i];if(!currentValidationResult.isValid)return currentValidationResult}return{isValid:!0}})(randomDefenseFormData);if(validationResult.isValid){const title=""===randomDefenseFormData.title.trim()?`추첨 ${selectedSlotNo}`:randomDefenseFormData.title,query=(randomDefenseFormData=>{const{mode,handle,solvedMin,solvedMax,startTier,endTier,searchOperator,algorithmIds,customQuery}=randomDefenseFormData;if("manual"===mode)return customQuery.replace(/\n/g," ").trim();const algorithmTags=generateAlgorithmTags(algorithmIds),convertedOperator=convertOperator(searchOperator);return`(*0&s?false|!*0) o?true w?false ${""!==handle.trim()?`~@${handle} `:""}${""!==solvedMin.trim()||""!==solvedMax.trim()?`s#${solvedMin}..${solvedMax} `:""}${startTier===endTier?`*${startTier} `:`*${startTier}..${endTier} `}${algorithmTags.length>0?`(${"-"===convertedOperator?"-":""}${algorithmTags.join(convertedOperator)})`:""}`.trim()})(randomDefenseFormData);return onSubmit(title,query),setErrorMessage(""),void setErrorElementName(void 0)}setErrorMessage(validationResult.errorMessage),setErrorElementName(validationResult.focusElementName);switch(validationResult.focusElementName){case"title":null===(_titleRef$current=titleRef.current)||void 0===_titleRef$current||_titleRef$current.select();break;case"handle":null===(_handleRef$current=handleRef.current)||void 0===_handleRef$current||_handleRef$current.select();break;case"solvedMin":null===(_solvedMinRef$current=solvedMinRef.current)||void 0===_solvedMinRef$current||_solvedMinRef$current.select();break;case"solvedMax":null===(_solvedMaxRef$current=solvedMaxRef.current)||void 0===_solvedMaxRef$current||_solvedMaxRef$current.select();break;case"customQuery":null===(_customQueryRef$curre=customQueryRef.current)||void 0===_customQueryRef$curre||_customQueryRef$curre.select()}},titleRef,handleRef,solvedMinRef,solvedMaxRef,customQueryRef}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Form=styled_components_browser_esm.I4.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 6px;

  z-index: 1;
`,ErrorTextWrapper=styled_components_browser_esm.I4.div`
  position: absolute;
  top: -32px;
  right: 0;
`,RandomDefenseCapsuleButtonWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,Row=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: ${({$columnGap})=>$columnGap||0};

  width: 100%;
`,Label=styled_components_browser_esm.I4.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width})=>$width};
`,PanelContainer=styled_components_browser_esm.I4.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width})=>$width};
`,SolvedRangeInputsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,DifficultyAdjustMenuWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
`,InformationTextContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,RandomDefenseCreateButtonWrapper=styled_components_browser_esm.I4.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseCreateMenu=props=>{const{selectedSlotNo,isLoaded,onSubmit}=props,{mode,title,handle,solvedMin,solvedMax,startTier,endTier,searchOperator,algorithmIds,customQuery,errorMessage,errorElementName,setMode,setRandomDefenseInputValue,setTierRange,setSearchOperator,setAlgorithmIds,submitRandomDefense,titleRef,handleRef,solvedMinRef,solvedMaxRef,customQueryRef}=randomDefense_useRandomDefenseCreateMenu({selectedSlotNo,onSubmit});return(0,jsx_runtime.jsx)(NamedFrame.A,{width:"650px",height:"357px",padding:"10px",title:"추첨 만들기",children:(0,jsx_runtime.jsxs)(Form,{children:[(0,jsx_runtime.jsx)(ErrorTextWrapper,{children:(0,jsx_runtime.jsx)(ErrorText.A,{errorMessage,fontSize:"14px"})}),(0,jsx_runtime.jsx)(RandomDefenseCapsuleButtonWrapper,{children:(0,jsx_runtime.jsx)(RandomDefenseCreateMenu_RandomDefenseCapsuleButton,{mode,onClick:setMode})}),(0,jsx_runtime.jsxs)(Label,{$width:"380px",children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"추첨 이름"}),(0,jsx_runtime.jsx)(Input.A,{ref:titleRef,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:title,maxLength:30,hasError:"title"===errorElementName,onChange:setRandomDefenseInputValue})]}),"easy"===mode?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Row,{$columnGap:"30px",children:[(0,jsx_runtime.jsxs)(Label,{$width:"190px",children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),(0,jsx_runtime.jsx)(Input.A,{ref:handleRef,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:handle,minLength:3,maxLength:20,hasError:"handle"===errorElementName,onChange:setRandomDefenseInputValue})]}),(0,jsx_runtime.jsxs)(PanelContainer,{$width:"166px",children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),(0,jsx_runtime.jsxs)(SolvedRangeInputsContainer,{children:[(0,jsx_runtime.jsx)(Input.A,{ref:solvedMinRef,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:solvedMin,hasError:"solvedMin"===errorElementName,onChange:setRandomDefenseInputValue}),(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"~"}),(0,jsx_runtime.jsx)(Input.A,{ref:solvedMaxRef,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:solvedMax,hasError:"solvedMax"===errorElementName,onChange:setRandomDefenseInputValue})]})]})]}),(0,jsx_runtime.jsxs)(PanelContainer,{$width:"100%",children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"난이도 범위"}),(0,jsx_runtime.jsx)(DifficultyAdjustMenuWrapper,{children:(0,jsx_runtime.jsx)(RandomDefenseCreateMenu_DifficultyAdjustMenu,{startTier,endTier,onChange:setTierRange})})]}),(0,jsx_runtime.jsxs)(PanelContainer,{$width:"446px",children:[(0,jsx_runtime.jsxs)(Row,{$columnGap:"110px",children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),(0,jsx_runtime.jsx)(RandomDefenseCreateMenu_SearchOperatorSelect,{searchOperator,onClick:setSearchOperator})]}),(0,jsx_runtime.jsx)(RandomDefenseCreateMenu_AlgorithmSearchInput,{selectedAlgorithmIds:algorithmIds,onChange:foo=>{setAlgorithmIds(foo)}})]})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Label,{$width:"100%",children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"쿼리"}),(0,jsx_runtime.jsx)(Textarea.A,{ref:customQueryRef,width:"100%",height:"160px",name:"customQuery",value:customQuery,placeholder:"1 ~ 300자",minLength:1,maxLength:300,hasError:"customQuery"===errorElementName,ariaLabel:"쿼리",onChange:setRandomDefenseInputValue})]}),(0,jsx_runtime.jsxs)(InformationTextContainer,{children:[(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",(0,jsx_runtime.jsx)(TextLink.A,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),(0,jsx_runtime.jsx)(RandomDefenseCreateButtonWrapper,{children:(0,jsx_runtime.jsx)(RandomDefenseCreateMenu_RandomDefenseCreateButton,{isLoaded,selectedSlotNo,onClick:submitRandomDefense})})]})})};RandomDefenseCreateMenu.displayName="RandomDefenseCreateMenu";const RandomDefenseCreateMenu_RandomDefenseCreateMenu=RandomDefenseCreateMenu;try{RandomDefenseCreateMenu.displayName="RandomDefenseCreateMenu",RandomDefenseCreateMenu.__docgenInfo={description:"",displayName:"RandomDefenseCreateMenu",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(title: string, query: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx#RandomDefenseCreateMenu"]={docgenInfo:RandomDefenseCreateMenu.__docgenInfo,name:"RandomDefenseCreateMenu",path:"src/components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx#RandomDefenseCreateMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SearchOperatorSelect_SearchOperatorSelect});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.ul`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OPERATORS=["OR","AND","NOR"],SearchOperatorSelect=props=>{const{searchOperator,onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:OPERATORS.map((operator=>(0,jsx_runtime.jsxs)(ButtonContainer,{children:[operator===searchOperator&&(0,jsx_runtime.jsx)(CheckIconWrapper,{children:(0,jsx_runtime.jsx)(svg.Sr,{})}),(0,jsx_runtime.jsx)(Button,{type:"button","aria-label":`알고리즘 검색 옵션을 ${operator}로 설정하기`,$isSelected:operator===searchOperator,onClick:()=>{onClick(operator)},children:operator})]},operator)))})};SearchOperatorSelect.displayName="SearchOperatorSelect";const SearchOperatorSelect_SearchOperatorSelect=SearchOperatorSelect;try{SearchOperatorSelect.displayName="SearchOperatorSelect",SearchOperatorSelect.__docgenInfo={description:"",displayName:"SearchOperatorSelect",props:{searchOperator:{defaultValue:null,description:"",name:"searchOperator",required:!0,type:{name:"enum",value:[{value:'"OR"'},{value:'"AND"'},{value:'"NOR"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:'(searchOperator: "OR" | "AND" | "NOR") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx#SearchOperatorSelect"]={docgenInfo:SearchOperatorSelect.__docgenInfo,name:"SearchOperatorSelect",path:"src/components/RandomDefenseCreateMenu/SearchOperatorSelect/SearchOperatorSelect.tsx#SearchOperatorSelect"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/ErrorText/ErrorText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_ErrorText_ErrorText});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getContainerSizeByFontSize=fontSize=>`${Number(fontSize.slice(0,2))+3}px`,Container=styled_components_browser_esm.I4.div`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextLink_TextLink=props=>{const{href,fontSize,children}=props;return(0,jsx_runtime.jsxs)(Container,{href,target:"__blank",rel:"noopener",children:[(0,jsx_runtime.jsx)(TextLink,{$fontSize:fontSize,children}),(0,jsx_runtime.jsx)(LinkIconWrapper,{$fontSize:fontSize,children:(0,jsx_runtime.jsx)(svg.qY,{})})]})};TextLink_TextLink.displayName="TextLink";const common_TextLink_TextLink=TextLink_TextLink;try{TextLink_TextLink.displayName="TextLink",TextLink_TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextLink/TextLink.tsx#TextLink"]={docgenInfo:TextLink_TextLink.__docgenInfo,name:"TextLink",path:"src/components/common/TextLink/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/TextLink/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/TextLink/TextLink.tsx").A},"./src/components/common/Textarea/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Textarea_Textarea});var react=__webpack_require__("./node_modules/react/index.js");const Textarea=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.textarea`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea_Textarea=(0,react.forwardRef)(((props,ref)=>{const{width,height,hasError,ariaLabel,...rest}=props;return(0,jsx_runtime.jsx)(Textarea,{$width:width,$height:height,$hasError:hasError,spellCheck:!1,"aria-label":ariaLabel,ref,...rest})})),common_Textarea_Textarea=Textarea_Textarea;try{Textarea_Textarea.displayName="Textarea",Textarea_Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea_Textarea.__docgenInfo,name:"Textarea",path:"src/components/common/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Textarea/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Textarea/Textarea.tsx").A},"./src/constants/randomDefense.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M$:()=>NUMBER_REGEX,Nu:()=>MAX_SEARCH_ALGORITHMS_COUNT,Nw:()=>TITLE_MAX_LENGTH,Rv:()=>HANDLE_REGEX,Xq:()=>MAX_CUSTOM_QUERY_LENGTH,b8:()=>MAX_SOLVED_COUNT,o0:()=>MAX_HISTORY_LIMIT});const MAX_HISTORY_LIMIT=300,MAX_SEARCH_ALGORITHMS_COUNT=5,TITLE_MAX_LENGTH=30,HANDLE_REGEX=/^\w{3,20}$/,MAX_SOLVED_COUNT=1e8,NUMBER_REGEX=/^([1-9][0-9]*|0)$/,MAX_CUSTOM_QUERY_LENGTH=300},"./src/domains/algorithm/getSearchResults.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>getSearchResults});var _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/algorithmInfos.ts");const trimWord=word=>word.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),getSearchResults=keyword=>{const trimmedKeyword=trimWord(keyword),searchResults=[];return _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__.u.forEach((({id,name,englishName,tag,alias})=>{const acceptableWords=[name,englishName,tag,...alias].map((word=>trimWord(word)));(""===trimmedKeyword||acceptableWords.some((word=>-1!==word.indexOf(trimmedKeyword))))&&searchResults.push({id,name})})),searchResults}},"./src/types/typeGuards.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gv:()=>isObject,H9:()=>isNumericArray,Lq:()=>isTierWithoutNotRatable,br:()=>isRatedTier,hj:()=>isNumericObject,hz:()=>isIsoString});const isObject=data=>"object"==typeof data&&null!==data,isNumericObject=data=>isObject(data)&&Object.keys(data).every((key=>!isNaN(Number(key)))),isNumericArray=data=>Array.isArray(data)&&data.every((value=>"number"==typeof value)),isIsoString=data=>"string"==typeof data&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),isTier=data=>"number"==typeof data&&data%1==0&&data>=0&&data<=31,isTierWithoutNotRatable=data=>isTier(data)&&31!==data,isRatedTier=data=>isTier(data)&&0!==data&&31!==data}}]);
//# sourceMappingURL=3707.835178a3.iframe.bundle.js.map