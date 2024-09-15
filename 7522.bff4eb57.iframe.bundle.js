"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[7522],{"./src/components/QuickSlotMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/QuickSlotMenu/QuickSlotMenu.tsx").A},"./src/components/RandomDefenseCreateMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx").A},"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseHistoryItem_RandomDefenseHistoryItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getTierColor=(tier,isHidden,theme)=>isHidden?theme.color.GRAY:tier>=1&&tier<=5?theme.solvedAcTier[5]:tier>=6&&tier<=10?theme.solvedAcTier[10]:tier>=11&&tier<=15?theme.solvedAcTier[15]:tier>=16&&tier<=20?theme.solvedAcTier[20]:tier>=21&&tier<=25?theme.solvedAcTier[25]:tier>=26&&tier<=30?theme.solvedAcTier[30]:theme.color.WHITE,getTierGradientCss=(tier,isHidden,isHover,theme)=>isHidden?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.HIDDEN_DARK_GRADIENT200:theme.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${theme.solvedAcTier.HIDDEN_GRADIENT};
    `:tier>=1&&tier<=5?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.BRONZE_DARK_GRADIENT200:theme.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${theme.solvedAcTier.BRONZE_GRADIENT};
    `:tier>=6&&tier<=10?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.SILVER_DARK_GRADIENT200:theme.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${theme.solvedAcTier.SILVER_GRADIENT};
    `:tier>=11&&tier<=15?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.GOLD_DARK_GRADIENT200:theme.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${theme.solvedAcTier.GOLD_GRADIENT};
    `:tier>=16&&tier<=20?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.PLATINUM_DARK_GRADIENT200:theme.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${theme.solvedAcTier.PLATINUM_GRADIENT};
    `:tier>=21&&tier<=25?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.DIAMOND_DARK_GRADIENT200:theme.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${theme.solvedAcTier.DIAMOND_GRADIENT};
    `:tier>=26&&tier<=30?styled_components_browser_esm.AH`
      background-image: ${isHover?theme.solvedAcTier.RUBY_DARK_GRADIENT200:theme.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${theme.solvedAcTier.RUBY_GRADIENT};
    `:styled_components_browser_esm.AH`
    background-image: ${isHover?theme.solvedAcTier.UNRATED_DARK_GRADIENT200:theme.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${theme.solvedAcTier.UNRATED_GRADIENT};
  `,Container=styled_components_browser_esm.I4.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier,$isHidden,theme})=>getTierGradientCss($tier,$isHidden,!1,theme)};

  &:hover {
    ${({$tier,$isHidden,theme})=>getTierGradientCss($tier,$isHidden,!0,theme)};
  }
`,LinkButton=styled_components_browser_esm.I4.a`
  display: flex;
  align-items: center;
`,DeleteButton=styled_components_browser_esm.I4.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier,$isHidden,theme})=>getTierColor($tier,$isHidden,theme)};
  }
`,TierBadge=styled_components_browser_esm.I4.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,InformationContainer=styled_components_browser_esm.I4.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,Title=styled_components_browser_esm.I4.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier,$isHidden,theme})=>getTierColor($tier,$isHidden,theme)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,Details=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,ProblemId=styled_components_browser_esm.I4.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier,$isHidden,theme})=>getTierColor($tier,$isHidden,theme)};
`,CreatedAtContainer=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme})=>theme.color.WHITE};
  }
`,CreatedAt=styled_components_browser_esm.I4.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme})=>theme.color.WHITE};
`;var svg_tier=__webpack_require__("./src/images/svg/tier/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),formatDate=__webpack_require__("./src/utils/formatDate.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseHistoryItem=props=>{const{problemId,title,tier,createdAt,isHidden,onDelete}=props;return(0,jsx_runtime.jsxs)(Container,{$tier:tier,$isHidden:isHidden,children:[(0,jsx_runtime.jsxs)(LinkButton,{href:`https://icpc.me/${problemId}`,target:"__blank","aria-label":`${problemId}번 ${title} 문제`,children:[(0,jsx_runtime.jsx)(TierBadge,{src:isHidden?svg_tier.K.hidden:svg_tier.R[tier],alt:"",draggable:!1}),(0,jsx_runtime.jsxs)(InformationContainer,{children:[(0,jsx_runtime.jsx)(Title,{$tier:tier,$isHidden:isHidden,children:title}),(0,jsx_runtime.jsxs)(Details,{children:[(0,jsx_runtime.jsx)(ProblemId,{$tier:tier,$isHidden:isHidden,children:`#${problemId}`}),(0,jsx_runtime.jsxs)(CreatedAtContainer,{children:[(0,jsx_runtime.jsx)(svg.O4,{}),(0,jsx_runtime.jsx)(CreatedAt,{children:(0,formatDate.Y)(new Date(createdAt))})]})]})]})]}),(0,jsx_runtime.jsx)(DeleteButton,{$tier:tier,$isHidden:isHidden,onClick:onDelete,"aria-label":"추첨 기록에서 제거하기",children:(0,jsx_runtime.jsx)(svg.uc,{})})]})};RandomDefenseHistoryItem.displayName="RandomDefenseHistoryItem";const RandomDefenseHistoryItem_RandomDefenseHistoryItem=RandomDefenseHistoryItem;try{RandomDefenseHistoryItem.displayName="RandomDefenseHistoryItem",RandomDefenseHistoryItem.__docgenInfo={description:"",displayName:"RandomDefenseHistoryItem",props:{problemId:{defaultValue:null,description:"",name:"problemId",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tier:{defaultValue:null,description:"",name:"tier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"},{value:"31"}]}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx#RandomDefenseHistoryItem"]={docgenInfo:RandomDefenseHistoryItem.__docgenInfo,name:"RandomDefenseHistoryItem",path:"src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx#RandomDefenseHistoryItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseHistoryList_RandomDefenseHistoryList});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 330px;
  height: 100%;
`;const RandomDefenseHistoryList_RandomDefenseHistoryItem=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseHistoryList=props=>{const{items,isHidden,onDelete}=props;return(0,jsx_runtime.jsx)(Container,{children:items.map((item=>{const id=`${item.problemId}-${item.createdAt}`;return(0,jsx_runtime.jsx)(RandomDefenseHistoryList_RandomDefenseHistoryItem,{isHidden,onDelete:()=>{onDelete(id)},...item},id)}))})};RandomDefenseHistoryList.displayName="RandomDefenseHistoryList";const RandomDefenseHistoryList_RandomDefenseHistoryList=RandomDefenseHistoryList;try{RandomDefenseHistoryList.displayName="RandomDefenseHistoryList",RandomDefenseHistoryList.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx#RandomDefenseHistoryList"]={docgenInfo:RandomDefenseHistoryList.__docgenInfo,name:"RandomDefenseHistoryList",path:"src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx#RandomDefenseHistoryList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseHistoryMenu_RandomDefenseHistoryMenu});const RandomDefenseHistoryMenu_RandomDefenseHistoryList=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx").A;var react=__webpack_require__("./node_modules/react/index.js"),randomDefenseHistoryValidator=__webpack_require__("./src/domains/dataHandlers/validators/randomDefenseHistoryValidator.ts"),commands=__webpack_require__("./src/constants/commands.ts");const randomDefense_useRandomDefenseHistoryMenu=()=>{const[items,setItems]=(0,react.useState)([]),[isHidden,setIsHidden]=(0,react.useState)(!0),[isLoaded,setIsLoaded]=(0,react.useState)(!1),isEmpty=0===items.length;(0,react.useEffect)((()=>{(async()=>{const response=await chrome.runtime.sendMessage({command:commands.Lo.FETCH_RANDOM_DEFENSE_HISTORY});(0,randomDefenseHistoryValidator.vD)(response)&&(setIsHidden((()=>response.isHidden)),setItems((()=>response.randomDefenseHistory)),setIsLoaded((()=>!0)))})()}),[]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_RANDOM_DEFENSE_HISTORY,randomDefenseHistory:items,isHidden})}),[items,isHidden]);return{items,isHidden,isLoaded,isEmpty,deleteHistoryById:id=>{const newItems=items.filter((item=>`${item.problemId}-${item.createdAt}`!==id));setItems((()=>newItems))},clearHistory:()=>{!isEmpty&&confirm("모든 추첨 기록을 제거할까요?")&&setItems((()=>[]))},updateIsHidden:event=>{setIsHidden((()=>event.target.checked))}}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,HistoryListContainer=styled_components_browser_esm.I4.div`
  width: 348px;
  height: 414px;
  padding: 8px;

  border: 1px solid ${({theme})=>theme.color.LIGHT_BROWN};
  border-radius: 6px;
`,TierSwitchPanel=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,HistoryManagePanel=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,DeleteButton=styled_components_browser_esm.I4.button`
  width: 36px;
  height: 36px;

  border: 1px solid ${({theme})=>theme.color.RED};
  border-radius: 4px;
  background: none;

  transition: 0.2s;

  svg {
    color: ${({theme})=>theme.color.RED};
  }

  &:hover {
    box-shadow: 0 0 8px ${({theme})=>theme.color.RED};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`,Text=styled_components_browser_esm.I4.p`
  display: inline-block;

  color: ${({theme})=>theme.color.WHITE};
  font-size: 16px;
`,Indicator=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 4px;

  width: 80px;
  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,IndicatorText=styled_components_browser_esm.I4.p`
  display: inline-block;

  color: ${({theme})=>theme.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`,PackageIconWrapper=styled_components_browser_esm.I4.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme})=>theme.color.GOLD};
  }
`;const common_Switch=__webpack_require__("./src/components/common/Switch/Switch.tsx").A;var NamedFrame=__webpack_require__("./src/components/common/NamedFrame/NamedFrame.tsx"),svg=__webpack_require__("./src/images/svg/index.ts"),randomDefense=__webpack_require__("./src/constants/randomDefense.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseHistoryMenu=()=>{const{items,isHidden,isLoaded,isEmpty,deleteHistoryById,clearHistory,updateIsHidden}=randomDefense_useRandomDefenseHistoryMenu();return(0,jsx_runtime.jsx)(NamedFrame.A,{width:"370px",height:"537px",padding:"10px",title:"추첨 기록",children:(0,jsx_runtime.jsx)(Container,{children:isLoaded&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(TierSwitchPanel,{children:[(0,jsx_runtime.jsx)(Text,{children:"티어 숨기기"}),(0,jsx_runtime.jsx)(common_Switch,{size:"large",isChecked:isHidden,ariaLabel:"티어 숨기기",onChange:updateIsHidden})]}),(0,jsx_runtime.jsx)(HistoryListContainer,{children:(0,jsx_runtime.jsx)(RandomDefenseHistoryMenu_RandomDefenseHistoryList,{items,isHidden,onDelete:deleteHistoryById})}),(0,jsx_runtime.jsxs)(HistoryManagePanel,{children:[(0,jsx_runtime.jsxs)(Indicator,{children:[(0,jsx_runtime.jsx)(PackageIconWrapper,{children:(0,jsx_runtime.jsx)(svg.qD,{})}),(0,jsx_runtime.jsx)(IndicatorText,{children:`${items.length} / ${randomDefense.o0}`})]}),(0,jsx_runtime.jsx)(Text,{children:"추첨 기록 비우기"}),(0,jsx_runtime.jsx)(DeleteButton,{onClick:clearHistory,disabled:isEmpty,"aria-label":"추첨 기록 비우기",children:(0,jsx_runtime.jsx)(svg.uc,{})})]})]})})})};RandomDefenseHistoryMenu.displayName="RandomDefenseHistoryMenu";const RandomDefenseHistoryMenu_RandomDefenseHistoryMenu=RandomDefenseHistoryMenu},"./src/components/common/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Switch_Switch});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: inline-block;
  position: relative;

  width: ${({$size})=>"large"===$size?"50px":"40px"};
  height: ${({$size})=>"large"===$size?"30px":"24px"};

  & * {
    border-radius: ${({$size})=>"large"===$size?"15px":"12px"};
  }
`,Switch=styled_components_browser_esm.I4.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,FakeVisualSwitch=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme,$isChecked})=>$isChecked?theme.color.GOLD:theme.color.LIGHTER_BROWN};

  box-shadow: ${({theme,$isChecked})=>$isChecked?`0 0 12px ${theme.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,Handle=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: absolute;

  width: ${({$size})=>"large"===$size?"26px":"20px"};
  height: ${({$size})=>"large"===$size?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme})=>theme.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size,$isChecked})=>$isChecked?"large"===$size?styled_components_browser_esm.AH`
            transform: translateX(20px);
          `:styled_components_browser_esm.AH`
            transform: translateX(16px);
          `:styled_components_browser_esm.AH`
          transform: translateX(0);
        `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch_Switch=props=>{const{size,isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{$size:size,children:[(0,jsx_runtime.jsx)(Switch,{checked:isChecked,"aria-label":ariaLabel,onChange,value:""}),(0,jsx_runtime.jsx)(FakeVisualSwitch,{$isChecked:isChecked,children:(0,jsx_runtime.jsx)(Handle,{$size:size,$isChecked:isChecked})})]})};Switch_Switch.displayName="Switch";const common_Switch_Switch=Switch_Switch;try{Switch_Switch.displayName="Switch",Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Switch/Switch.tsx#Switch"]={docgenInfo:Switch_Switch.__docgenInfo,name:"Switch",path:"src/components/common/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sections/RandomDefenseSection/RandomDefenseSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseSection_RandomDefenseSection});var RandomDefenseCreateMenu=__webpack_require__("./src/components/RandomDefenseCreateMenu/index.ts"),QuickSlotMenu=__webpack_require__("./src/components/QuickSlotMenu/index.ts"),useRandomDefenseSection=__webpack_require__("./src/hooks/useRandomDefenseSection.ts");const components_RandomDefenseHistoryMenu=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryMenu.tsx").A;var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 6px;

  width: 100%;
`,Menu=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 12px;
`,RandomDefenseManageMenu=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 650px;
  height: auto;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseSection=props=>{const{slots,selectedSlotNo,hotkey,isLoaded,setSelectedSlotNo,setHotkey,updateSlot,deleteSlot}=(0,useRandomDefenseSection.A)(),{show}=props,quickSlotsInfo={slots,selectedSlotNo,hotkey};return show?(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"문제 추첨",iconSrc:chrome.runtime.getURL("dice.png")}),(0,jsx_runtime.jsxs)(Menu,{children:[(0,jsx_runtime.jsxs)(RandomDefenseManageMenu,{children:[(0,jsx_runtime.jsx)(RandomDefenseCreateMenu.A,{isLoaded,selectedSlotNo,onSubmit:updateSlot}),(0,jsx_runtime.jsx)(QuickSlotMenu.A,{quickSlotsInfo,isLoaded,onHotkeyChange:setHotkey,onSlotChange:updateSlot,onSlotDelete:deleteSlot,onSlotNoChange:setSelectedSlotNo})]}),(0,jsx_runtime.jsx)(components_RandomDefenseHistoryMenu,{})]})]}):null},RandomDefenseSection_RandomDefenseSection=RandomDefenseSection;try{RandomDefenseSection.displayName="RandomDefenseSection",RandomDefenseSection.__docgenInfo={description:"",displayName:"RandomDefenseSection",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sections/RandomDefenseSection/RandomDefenseSection.tsx#RandomDefenseSection"]={docgenInfo:RandomDefenseSection.__docgenInfo,name:"RandomDefenseSection",path:"src/components/sections/RandomDefenseSection/RandomDefenseSection.tsx#RandomDefenseSection"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useRandomDefenseSection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_domains_dataHandlers_validators_quickSlotsValidator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/domains/dataHandlers/validators/quickSlotsValidator.ts"),_constants_commands__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/commands.ts");const emptySlots={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},__WEBPACK_DEFAULT_EXPORT__=()=>{const[slots,setSlots]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(emptySlots),[selectedSlotNo,setSelectedSlotNo]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),[hotkey,setHotkey]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Alt"),[isLoaded,setIsLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{const response=await chrome.runtime.sendMessage({command:_constants_commands__WEBPACK_IMPORTED_MODULE_1__.Lo.FETCH_QUICK_SLOTS});(0,_domains_dataHandlers_validators_quickSlotsValidator__WEBPACK_IMPORTED_MODULE_2__.Wb)(response)&&(setSlots(response.slots),setSelectedSlotNo(response.selectedSlotNo),setHotkey(response.hotkey),setIsLoaded(!0))})()}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:_constants_commands__WEBPACK_IMPORTED_MODULE_1__.Lo.SAVE_QUICK_SLOTS,slots,selectedSlotNo,hotkey})}),[slots,selectedSlotNo,hotkey]);return{slots,selectedSlotNo,hotkey,isLoaded,setSelectedSlotNo,setHotkey,updateSlot:(title,query)=>{setSlots((prev=>({...prev,[selectedSlotNo]:{isEmpty:!1,title,query}})))},deleteSlot:()=>{setSlots((prev=>({...prev,[selectedSlotNo]:{isEmpty:!0}})))}}}}}]);
//# sourceMappingURL=7522.bff4eb57.iframe.bundle.js.map