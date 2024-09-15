"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[684],{"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`TierPresetButtonList`은 무작위 추첨에서 티어를 설정할 때, 티어를 특정 범위로 빠르게 지정할 수 있는 버튼들을 모아둔 메뉴입니다."}}}},Default={args:{onClick:(start,end)=>{alert(`onClick(${start}, ${end});`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    onClick: (start, end) => {\n      alert(`onClick(${start}, ${end});`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButton/TierPresetButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierPresetButton_TierPresetButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getRankColor=(theme,rank)=>"bronze"===rank?theme.solvedAcTier.BRONZE:"silver"===rank?theme.solvedAcTier.SILVER:"gold"===rank?theme.solvedAcTier.GOLD:"platinum"===rank?theme.solvedAcTier.PLATINUM:"diamond"===rank?theme.solvedAcTier.DIAMOND:"ruby"===rank?theme.solvedAcTier.RUBY:theme.color.GRAY,Container=styled_components_browser_esm.I4.li`
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
`;const TierPresetButtonList_TierPresetButton=__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButton/TierPresetButton.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RANK_NAMES=["unrated","bronze","silver","gold","platinum","diamond","ruby"],TierPresetButtonList=props=>{const{onClick}=props;return(0,jsx_runtime.jsx)(Container,{children:RANK_NAMES.map((rankName=>(0,jsx_runtime.jsx)(TierPresetButtonList_TierPresetButton,{rank:rankName,onClick},rankName)))})};TierPresetButtonList.displayName="TierPresetButtonList";const TierPresetButtonList_TierPresetButtonList=TierPresetButtonList;try{TierPresetButtonList.displayName="TierPresetButtonList",TierPresetButtonList.__docgenInfo={description:"",displayName:"TierPresetButtonList",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx#TierPresetButtonList"]={docgenInfo:TierPresetButtonList.__docgenInfo,name:"TierPresetButtonList",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList/TierPresetButtonList.tsx#TierPresetButtonList"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-DifficultyAdjustMenu-TierPresetButtonList-TierPresetButtonList-stories.c8b9fcd0.iframe.bundle.js.map