"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[5906],{"./src/components/sections/RandomDefenseSection/RandomDefenseSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/sections/RandomDefenseSection",component:__webpack_require__("./src/components/sections/RandomDefenseSection/RandomDefenseSection.tsx").A,parameters:{docs:{description:{component:"`RandomDefenseSection`은 토탐정 설정의 **문제 추첨** 카테고리 설정을 담당하는 섹션 메뉴입니다."}}}},Default={args:{show:!0}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    show: true\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/MenuTitle/MenuTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuTitle_MenuTitle});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuTitle=props=>{const{iconSrc,title}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:""}):(0,jsx_runtime.jsx)(IconWrapper,{children:iconSrc})),(0,jsx_runtime.jsx)(Title,{children:title})]}),(0,jsx_runtime.jsx)(Underline,{})]})};MenuTitle.displayName="MenuTitle";const MenuTitle_MenuTitle=MenuTitle;try{MenuTitle.displayName="MenuTitle",MenuTitle.__docgenInfo={description:"",displayName:"MenuTitle",props:{iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string | SVGProps<SVGSVGElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.tsx#MenuTitle"]={docgenInfo:MenuTitle.__docgenInfo,name:"MenuTitle",path:"src/components/MenuTitle/MenuTitle.tsx#MenuTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuTitle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/MenuTitle/MenuTitle.tsx").A},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/domains/dataHandlers/validators/quickSlotsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wb:()=>isQuickSlotsResponse,sG:()=>isSlotNo});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isSlot=data=>!(!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)||!("isEmpty"in data)||"boolean"!=typeof data.isEmpty)&&(!!data.isEmpty||"title"in data&&"query"in data&&"string"==typeof data.title&&"string"==typeof data.query),isSlotNo=data=>"number"==typeof data&&[1,2,3,4,5,6,7,8,9,0].includes(data),isQuickSlotsResponse=data=>{if(!((0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"hotkey"in data&&"selectedSlotNo"in data&&"slots"in data&&"string"==typeof data.hotkey&&["Alt","F2"].includes(data.hotkey)&&isSlotNo(data.selectedSlotNo)))return!1;const{slots}=data;return!!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.hj)(slots)&&Array.from({length:10}).every(((_,key)=>key in slots&&isSlot(slots[key])))}},"./src/domains/dataHandlers/validators/randomDefenseHistoryValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{De:()=>isRandomDefenseHistoryInfos,vD:()=>isRandomDefenseHistoryResponse});var _images_svg_tier__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/images/svg/tier/index.ts"),_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/typeGuards.ts");const isRandomDefenseHistoryInfos=data=>Array.isArray(data)&&data.every((item=>(data=>(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__.Gv)(data)&&"problemId"in data&&"title"in data&&"tier"in data&&"createdAt"in data&&"number"==typeof data.problemId&&"string"==typeof data.title&&"number"==typeof data.tier&&data.tier in _images_svg_tier__WEBPACK_IMPORTED_MODULE_0__.R&&(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__.hz)(data.createdAt))(item))),isRandomDefenseHistoryResponse=data=>(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__.Gv)(data)&&"randomDefenseHistory"in data&&"isHidden"in data&&isRandomDefenseHistoryInfos(data.randomDefenseHistory)&&"boolean"==typeof data.isHidden},"./src/utils/formatDate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>formatDate});const formatDate=date=>`${String(date.getFullYear()).padStart(4,"0")}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`}}]);
//# sourceMappingURL=components-sections-RandomDefenseSection-RandomDefenseSection-stories.f6789bfb.iframe.bundle.js.map