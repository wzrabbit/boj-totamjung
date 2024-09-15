"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[9335],{"./src/components/AlgorithmPool/AlgorithmPool.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/AlgorithmPool",component:__webpack_require__("./src/components/AlgorithmPool/AlgorithmPool.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`AlgorithmPool`는 사용자가 **알고 있는 알고리즘의 목록을 관리**할 수 있는 기능을 제공하기 위한 컴포넌트입니다."}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmList_AlgorithmList});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`;const AlgorithmList_AlgorithmListItem=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmList=props=>{const{items,checkedIds,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:items.map(((item,index)=>(0,jsx_runtime.jsx)(AlgorithmList_AlgorithmListItem,{id:item.id,name:item.name,isChecked:checkedIds.includes(item.id),backgroundColor:index%2==0?"brown":"light-brown",onChange},item.id)))})};AlgorithmList.displayName="AlgorithmList";const AlgorithmList_AlgorithmList=AlgorithmList;try{AlgorithmList.displayName="AlgorithmList",AlgorithmList.__docgenInfo={description:"",displayName:"AlgorithmList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Algorithm[]"}},checkedIds:{defaultValue:null,description:"",name:"checkedIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx#AlgorithmList"]={docgenInfo:AlgorithmList.__docgenInfo,name:"AlgorithmList",path:"src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx#AlgorithmList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmListItem_AlgorithmListItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme,$backgroundColor})=>"brown"===$backgroundColor?theme.color.BROWN:theme.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Label=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,Text=styled_components_browser_esm.I4.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme})=>theme.color.LEMON};

  cursor: pointer;
`;const common_Checkbox=__webpack_require__("./src/components/common/Checkbox/Checkbox.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmListItem=props=>{const{id,name,isChecked,backgroundColor,onChange}=props;return(0,jsx_runtime.jsx)(Container,{$backgroundColor:backgroundColor,children:(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text,{children:name}),(0,jsx_runtime.jsx)(common_Checkbox,{isChecked,onChange:()=>onChange(id),ariaLabel:name})]})})};AlgorithmListItem.displayName="AlgorithmListItem";const AlgorithmListItem_AlgorithmListItem=AlgorithmListItem;try{AlgorithmListItem.displayName="AlgorithmListItem",AlgorithmListItem.__docgenInfo={description:"",displayName:"AlgorithmListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"light-brown"'},{value:'"brown"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx#AlgorithmListItem"]={docgenInfo:AlgorithmListItem.__docgenInfo,name:"AlgorithmListItem",path:"src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx#AlgorithmListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AlgorithmPool/AlgorithmPool.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmPool_AlgorithmPool});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme})=>theme.color.GOLD};
`,AlgorithmPanel=styled_components_browser_esm.I4.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme})=>theme.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,ControlPanel=styled_components_browser_esm.I4.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme})=>theme.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,SearchPanelContainer=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,SearchIconWrapper=styled_components_browser_esm.I4.div`
  & svg {
    height: 100%;

    color: ${({theme})=>theme.color.GOLD};
  }
`,SearchInput=styled_components_browser_esm.I4.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme})=>theme.color.WHITE};
`,CheckButtonPanel=styled_components_browser_esm.I4.div`
  display: flex;

  user-select: none;
`,CheckButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,CheckButtonImage=styled_components_browser_esm.I4.img`
  width: 30px;
  height: 30px;
`,CheckButtonLabel=styled_components_browser_esm.I4.p`
  font-size: 16px;
  color: ${({theme})=>theme.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme})=>theme.color.GOLD};
  }
`;const AlgorithmPool_AlgorithmList=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx").A;var getSearchResults=__webpack_require__("./src/domains/algorithm/getSearchResults.ts"),algorithmInfos=__webpack_require__("./src/constants/algorithmInfos.ts"),react=__webpack_require__("./node_modules/react/index.js"),commands=__webpack_require__("./src/constants/commands.ts");const algorithm_useAlgorithmPool=()=>{const[keyword,setKeyword]=(0,react.useState)(""),[checkedIds,setCheckedIds]=(0,react.useState)([]),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const response=await chrome.runtime.sendMessage({command:commands.Lo.FETCH_CHECKED_ALGORITHM_IDS});setCheckedIds((()=>response.checkedIds)),setIsLoaded((()=>!0))})()}),[]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_CHECKED_ALGORITHM_IDS,checkedIds})}),[checkedIds]);return{keyword,items:(0,getSearchResults.p)(keyword),checkedIds,isLoaded,handleChangeKeyword:event=>{setKeyword((()=>event.target.value))},toggleAlgorithm:id=>{if(checkedIds.includes(id)){const newCheckedIds=checkedIds.filter((checkedId=>checkedId!==id));return void setCheckedIds((()=>newCheckedIds))}const newCheckedIds=[...checkedIds,id];setCheckedIds((()=>newCheckedIds))},checkAllAlgorithms:()=>{confirm("모든 알고리즘 분류를 체크 설정할까요?")&&setCheckedIds((()=>Array.from({length:algorithmInfos.t}).map(((_,index)=>index+1))))},uncheckAllAlgorithms:()=>{confirm("모든 알고리즘 분류를 체크 해제할까요?")&&setCheckedIds((()=>[]))}}};var svg=__webpack_require__("./src/images/svg/index.ts"),png=__webpack_require__("./src/images/png/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmPool=()=>{const{keyword,items,checkedIds,isLoaded,handleChangeKeyword,toggleAlgorithm,checkAllAlgorithms,uncheckAllAlgorithms}=algorithm_useAlgorithmPool();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AlgorithmPanel,{children:isLoaded&&(0,jsx_runtime.jsx)(AlgorithmPool_AlgorithmList,{items,checkedIds,onChange:toggleAlgorithm})}),(0,jsx_runtime.jsxs)(ControlPanel,{children:[(0,jsx_runtime.jsxs)(SearchPanelContainer,{children:[(0,jsx_runtime.jsx)(SearchIconWrapper,{children:(0,jsx_runtime.jsx)(svg.WI,{})}),(0,jsx_runtime.jsx)(SearchInput,{placeholder:"검색어를 입력해 주세요...",value:keyword,onChange:handleChangeKeyword})]}),(0,jsx_runtime.jsxs)(CheckButtonPanel,{children:[(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:checkAllAlgorithms,"aria-label":"알고리즘 분류 전체 선택",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.e_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 선택"})]}),(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:uncheckAllAlgorithms,"aria-label":"알고리즘 분류 전체 해제",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.F_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 해제"})]})]})]})]})};AlgorithmPool.displayName="AlgorithmPool";const AlgorithmPool_AlgorithmPool=AlgorithmPool},"./src/components/common/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Checkbox_Checkbox});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,FakeVisualCheckbox=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme})=>theme.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme,$isChecked})=>$isChecked?styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.GOLD};
          background-color: ${theme.color.GOLD};
        `:styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Checkbox=styled_components_browser_esm.I4.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox_Checkbox=props=>{const{isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Checkbox,{checked:isChecked,"aria-label":ariaLabel,onChange}),(0,jsx_runtime.jsx)(FakeVisualCheckbox,{$isChecked:isChecked})]})};Checkbox_Checkbox.displayName="Checkbox";const common_Checkbox_Checkbox=Checkbox_Checkbox;try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/common/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/domains/algorithm/getSearchResults.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>getSearchResults});var _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/algorithmInfos.ts");const trimWord=word=>word.toLowerCase().replace(/^(tag:|#)|[ ,_/-]/g,""),getSearchResults=keyword=>{const trimmedKeyword=trimWord(keyword),searchResults=[];return _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__.u.forEach((({id,name,englishName,tag,alias})=>{const acceptableWords=[name,englishName,tag,...alias].map((word=>trimWord(word)));(""===trimmedKeyword||acceptableWords.some((word=>-1!==word.indexOf(trimmedKeyword))))&&searchResults.push({id,name})})),searchResults}},"./src/images/png/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e_:()=>all_checked_namespaceObject,F_:()=>all_unchecked_namespaceObject,jr:()=>bug_namespaceObject,w6:()=>guidebook_button_namespaceObject,Rm:()=>hidden_tier_badge_namespaceObject,$T:()=>info_button_namespaceObject,XR:()=>lock_with_clock_namespaceObject,H3:()=>logo_square_namespaceObject,uj:()=>settings_title_namespaceObject,e:()=>totamjung_namespaceObject});const all_checked_namespaceObject=__webpack_require__.p+"static/media/all-checked.202b1c06.png",all_unchecked_namespaceObject=__webpack_require__.p+"static/media/all-unchecked.36d4a64c.png",lock_with_clock_namespaceObject=__webpack_require__.p+"static/media/lock-with-clock.523093d4.png",hidden_tier_badge_namespaceObject=__webpack_require__.p+"static/media/hidden-tier-badge.52045d37.png",settings_title_namespaceObject=__webpack_require__.p+"static/media/settings-title.e0051888.png",guidebook_button_namespaceObject=__webpack_require__.p+"static/media/guidebook-button.1af2254a.png",info_button_namespaceObject=__webpack_require__.p+"static/media/info-button.b89374dc.png",totamjung_namespaceObject=__webpack_require__.p+"static/media/totamjung.d0c8aa44.png",logo_square_namespaceObject=__webpack_require__.p+"static/media/logo-square.7625446d.png",bug_namespaceObject=__webpack_require__.p+"static/media/bug.66b34cbf.png"}}]);
//# sourceMappingURL=components-AlgorithmPool-AlgorithmPool-stories.a6a6c841.iframe.bundle.js.map