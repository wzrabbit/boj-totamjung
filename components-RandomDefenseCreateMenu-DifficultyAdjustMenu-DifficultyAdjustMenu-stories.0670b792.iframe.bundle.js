"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[4874],{"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/DifficultyAdjustMenu",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`DifficultyAdjustMenu`는 무작위 추첨에서 난이도의 범위를 설정할 수 있는 메뉴형 컴포넌트입니다."}}}},Default={args:{startTier:1,endTier:30,onChange:(start,end)=>{alert(`onChange(${start}, ${end})`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    startTier: 1,\n    endTier: 30,\n    onChange: (start, end) => {\n      alert(`onChange(${start}, ${end})`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/DifficultyAdjustMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DifficultyAdjustMenu_DifficultyAdjustMenu});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TierSlider=props=>{const{startTier,endTier,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Track,{}),(0,jsx_runtime.jsx)(Thumb,{type:"range",min:0,max:30,value:startTier,"aria-label":"시작 범위 티어 설정하기",onChange:event=>{const newStartTier=Number(event.target.value),newEndTier=Math.max(Number(newStartTier),endTier);(0,typeGuards.Lq)(newStartTier)&&(0,typeGuards.Lq)(newEndTier)&&onChange(newStartTier,newEndTier)}}),(0,jsx_runtime.jsx)(Thumb,{type:"range",min:0,max:30,value:endTier,"aria-label":"끝 범위 티어 설정하기",onChange:event=>{const newEndTier=Number(event.target.value),newStartTier=Math.min(Number(newEndTier),startTier);(0,typeGuards.Lq)(newStartTier)&&(0,typeGuards.Lq)(newEndTier)&&onChange(newStartTier,newEndTier)}})]})};TierSlider.displayName="TierSlider";const TierSlider_TierSlider=TierSlider;try{TierSlider.displayName="TierSlider",TierSlider.__docgenInfo={description:"",displayName:"TierSlider",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx#TierSlider"]={docgenInfo:TierSlider.__docgenInfo,name:"TierSlider",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx#TierSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/types/typeGuards.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gv:()=>isObject,H9:()=>isNumericArray,Lq:()=>isTierWithoutNotRatable,br:()=>isRatedTier,hj:()=>isNumericObject,hz:()=>isIsoString});const isObject=data=>"object"==typeof data&&null!==data,isNumericObject=data=>isObject(data)&&Object.keys(data).every((key=>!isNaN(Number(key)))),isNumericArray=data=>Array.isArray(data)&&data.every((value=>"number"==typeof value)),isIsoString=data=>"string"==typeof data&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),isTier=data=>"number"==typeof data&&data%1==0&&data>=0&&data<=31,isTierWithoutNotRatable=data=>isTier(data)&&31!==data,isRatedTier=data=>isTier(data)&&0!==data&&31!==data}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-DifficultyAdjustMenu-DifficultyAdjustMenu-stories.0670b792.iframe.bundle.js.map