"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[4188],{"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`TierRange`는 현재 선택된 난이도의 범위를 시각적으로 보여주는 컴포넌트입니다. `DifficultyAdjustMenu`를 이루는 컴포넌트이기도 합니다."}}}},Default={args:{startTier:1,endTier:30}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    startTier: 1,\n    endTier: 30\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierRange_TierRange});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var tier=__webpack_require__("./src/images/svg/tier/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TierRange=props=>{const{startTier,endTier}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(TierBadge,{src:tier.R[startTier],alt:"",draggable:!1}),(0,jsx_runtime.jsx)(Tilde,{children:"~"}),(0,jsx_runtime.jsx)(TierBadge,{src:tier.R[endTier],alt:"",draggable:!1})]})};TierRange.displayName="TierRange";const TierRange_TierRange=TierRange;try{TierRange.displayName="TierRange",TierRange.__docgenInfo={description:"",displayName:"TierRange",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx#TierRange"]={docgenInfo:TierRange.__docgenInfo,name:"TierRange",path:"src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange/TierRange.tsx#TierRange"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-RandomDefenseCreateMenu-DifficultyAdjustMenu-TierRange-TierRange-stories.3521dc5e.iframe.bundle.js.map