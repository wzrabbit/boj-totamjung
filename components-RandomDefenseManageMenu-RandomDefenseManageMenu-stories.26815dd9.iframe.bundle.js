"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[5279],{"./src/components/RandomDefenseManageMenu/RandomDefenseManageMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RandomDefenseManageMenu_stories});var RandomDefenseCreateMenu=__webpack_require__("./src/components/RandomDefenseCreateMenu/index.ts"),QuickSlotMenu=__webpack_require__("./src/components/QuickSlotMenu/index.ts"),useRandomDefenseSection=__webpack_require__("./src/hooks/useRandomDefenseSection.ts");const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseManageMenu=()=>{const{slots,selectedSlotNo,hotkey,isLoaded,setSelectedSlotNo,setHotkey,updateSlot,deleteSlot}=(0,useRandomDefenseSection.A)(),quickSlotsInfo={slots,selectedSlotNo,hotkey};return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(RandomDefenseCreateMenu.A,{isLoaded,selectedSlotNo,onSubmit:updateSlot}),(0,jsx_runtime.jsx)(QuickSlotMenu.A,{quickSlotsInfo,isLoaded,onHotkeyChange:setHotkey,onSlotChange:updateSlot,onSlotDelete:deleteSlot,onSlotNoChange:setSelectedSlotNo})]})};RandomDefenseManageMenu.displayName="RandomDefenseManageMenu";var _Default$parameters,_Default$parameters2;const RandomDefenseManageMenu_stories={title:"components/RandomDefenseManageMenu",component:RandomDefenseManageMenu,argTypes:{},parameters:{docs:{description:{component:"`RandomDefenseManageMenu`는 추첨 생성 메뉴와 슬롯 관리 메뉴를 결합한 통합 메뉴로, 두 컴포넌트가 공통의 슬롯 메뉴를 공유할 수 있도록 고안된, 징검다리와 같은 컴포넌트입니다."}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/QuickSlotMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/QuickSlotMenu/QuickSlotMenu.tsx").A},"./src/components/RandomDefenseCreateMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx").A},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/domains/dataHandlers/validators/quickSlotsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wb:()=>isQuickSlotsResponse,sG:()=>isSlotNo});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isSlot=data=>!(!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)||!("isEmpty"in data)||"boolean"!=typeof data.isEmpty)&&(!!data.isEmpty||"title"in data&&"query"in data&&"string"==typeof data.title&&"string"==typeof data.query),isSlotNo=data=>"number"==typeof data&&[1,2,3,4,5,6,7,8,9,0].includes(data),isQuickSlotsResponse=data=>{if(!((0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"hotkey"in data&&"selectedSlotNo"in data&&"slots"in data&&"string"==typeof data.hotkey&&["Alt","F2"].includes(data.hotkey)&&isSlotNo(data.selectedSlotNo)))return!1;const{slots}=data;return!!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.hj)(slots)&&Array.from({length:10}).every(((_,key)=>key in slots&&isSlot(slots[key])))}},"./src/hooks/useRandomDefenseSection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_domains_dataHandlers_validators_quickSlotsValidator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/domains/dataHandlers/validators/quickSlotsValidator.ts"),_constants_commands__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/commands.ts");const emptySlots={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},__WEBPACK_DEFAULT_EXPORT__=()=>{const[slots,setSlots]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(emptySlots),[selectedSlotNo,setSelectedSlotNo]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),[hotkey,setHotkey]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Alt"),[isLoaded,setIsLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{const response=await chrome.runtime.sendMessage({command:_constants_commands__WEBPACK_IMPORTED_MODULE_1__.Lo.FETCH_QUICK_SLOTS});(0,_domains_dataHandlers_validators_quickSlotsValidator__WEBPACK_IMPORTED_MODULE_2__.Wb)(response)&&(setSlots(response.slots),setSelectedSlotNo(response.selectedSlotNo),setHotkey(response.hotkey),setIsLoaded(!0))})()}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:_constants_commands__WEBPACK_IMPORTED_MODULE_1__.Lo.SAVE_QUICK_SLOTS,slots,selectedSlotNo,hotkey})}),[slots,selectedSlotNo,hotkey]);return{slots,selectedSlotNo,hotkey,isLoaded,setSelectedSlotNo,setHotkey,updateSlot:(title,query)=>{setSlots((prev=>({...prev,[selectedSlotNo]:{isEmpty:!1,title,query}})))},deleteSlot:()=>{setSlots((prev=>({...prev,[selectedSlotNo]:{isEmpty:!0}})))}}}}}]);