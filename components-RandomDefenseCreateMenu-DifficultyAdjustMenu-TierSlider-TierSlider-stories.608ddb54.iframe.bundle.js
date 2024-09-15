"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[9856],{"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider",component:__webpack_require__("./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`TierSlider`는 무작위 추첨에서 티어의 범위를 조절할 수 있는 슬라이더 형태의 컴포넌트입니다."}}}},Default={args:{startTier:1,endTier:30,onChange:(start,end)=>{alert(`onChange(${start}, ${end})`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    startTier: 1,\n    endTier: 30,\n    onChange: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => {\n      alert(`onChange(${start}, ${end})`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider/TierSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierSlider_TierSlider});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typeGuards=__webpack_require__("./src/types/typeGuards.ts");const Container=styled_components_browser_esm.I4.div`
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
//# sourceMappingURL=components-RandomDefenseCreateMenu-DifficultyAdjustMenu-TierSlider-TierSlider-stories.608ddb54.iframe.bundle.js.map