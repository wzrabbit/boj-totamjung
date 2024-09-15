"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[1599],{"./src/components/AppearanceFieldsetMenu/AppearanceFieldsetMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/AppearanceFieldsetMenu",component:__webpack_require__("./src/components/AppearanceFieldsetMenu/AppearanceFieldsetMenu.tsx").A,parameters:{docs:{description:{component:'`AppearanceFieldsetMenu`는 토탐정의 "외형" 관련 기능들에 대한 설정을 조작할 수 있는 필드셋 형식의 메뉴 컴포넌트입니다.\n\n해당 메뉴에서는 아래의 설정들을 조작할 수 있습니다.\n1. 테마 설정\n2. 문제 본문 폰트 설정'}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/AppearanceFieldsetMenu/AppearanceFieldsetMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppearanceFieldsetMenu_AppearanceFieldsetMenu});var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),Fieldset=__webpack_require__("./src/components/common/Fieldset/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),commands=__webpack_require__("./src/constants/commands.ts"),totamjungThemeValidator=__webpack_require__("./src/domains/dataHandlers/validators/totamjungThemeValidator.ts"),fontNoValidator=__webpack_require__("./src/domains/dataHandlers/validators/fontNoValidator.ts");const useAppearanceFieldsetMenu=()=>{const[totamjungTheme,setTotamjungTheme]=(0,react.useState)(void 0),[fontNo,setFontNo]=(0,react.useState)(void 0),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const[totamjungThemeResponse,fontNoResponse]=await Promise.all([chrome.runtime.sendMessage({command:commands.Lo.FETCH_TOTAMJUNG_THEME}),chrome.runtime.sendMessage({command:commands.Lo.FETCH_FONT_NO})]);if(!(0,totamjungThemeValidator.g)(totamjungThemeResponse))return;if(!(0,fontNoValidator.YZ)(fontNoResponse))return;const{totamjungTheme:currentTheme}=totamjungThemeResponse,{fontNo:currentFontNo}=fontNoResponse;setTotamjungTheme(currentTheme),setFontNo(currentFontNo),setIsLoaded(!0)})()}),[]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_TOTAMJUNG_THEME,totamjungTheme})}),[totamjungTheme]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_FONT_NO,fontNo})}),[fontNo]);return{totamjungTheme,fontNo,isLoaded,updateTotamjungTheme:totamjungTheme=>{isLoaded&&(0,totamjungThemeValidator.d)(totamjungTheme)&&setTotamjungTheme(totamjungTheme)},updateFontNo:fontNo=>{const numericFontNo=Number(fontNo);isLoaded&&!isNaN(numericFontNo)&&setFontNo(numericFontNo)}}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,FontText=styled_components_browser_esm.I4.p`
  color: ${({theme})=>theme.color.LEMON};
  font-size: ${({$fontSize})=>$fontSize??"16px"};
  font-family: ${({$fontFamily})=>$fontFamily};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FONT_INFOS=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"}],AppearanceFieldsetMenu=()=>{const{totamjungTheme,fontNo,updateTotamjungTheme,updateFontNo}=useAppearanceFieldsetMenu();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"테마 설정",iconSrc:chrome.runtime.getURL("palette.png")}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:totamjungTheme??"",onChange:updateTotamjungTheme}),(0,jsx_runtime.jsx)(MenuTitle.A,{title:"폰트 설정",iconSrc:(0,jsx_runtime.jsx)(svg.l8,{})}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:FONT_INFOS.map((({name,fontFamily,fontSize},index)=>({label:(0,jsx_runtime.jsx)(FontText,{$fontFamily:fontFamily,$fontSize:fontSize,children:name}),value:String(index)}))),checkedValue:void 0===fontNo?"":String(fontNo),onChange:updateFontNo})]})};AppearanceFieldsetMenu.displayName="AppearanceFieldsetMenu";const AppearanceFieldsetMenu_AppearanceFieldsetMenu=AppearanceFieldsetMenu},"./src/components/MenuTitle/MenuTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuTitle_MenuTitle});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuTitle=props=>{const{iconSrc,title}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:""}):(0,jsx_runtime.jsx)(IconWrapper,{children:iconSrc})),(0,jsx_runtime.jsx)(Title,{children:title})]}),(0,jsx_runtime.jsx)(Underline,{})]})};MenuTitle.displayName="MenuTitle";const MenuTitle_MenuTitle=MenuTitle;try{MenuTitle.displayName="MenuTitle",MenuTitle.__docgenInfo={description:"",displayName:"MenuTitle",props:{iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string | SVGProps<SVGSVGElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.tsx#MenuTitle"]={docgenInfo:MenuTitle.__docgenInfo,name:"MenuTitle",path:"src/components/MenuTitle/MenuTitle.tsx#MenuTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuTitle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/MenuTitle/MenuTitle.tsx").A},"./src/components/common/Fieldset/Fieldset.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Fieldset_Fieldset});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Fieldset=styled_components_browser_esm.I4.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`,Legend=styled_components_browser_esm.I4.legend`
  font-size: 16px;
  color: ${({theme})=>theme.color.WHITE};
  margin-bottom: 6px;
`,OptionsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({$isVertical})=>$isVertical?"column":"row"};
  row-gap: 6px;
  column-gap: 10px;
`,Label=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;const common_Radio=__webpack_require__("./src/components/common/Radio/Radio.tsx").A;var Text=__webpack_require__("./src/components/common/Text/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Fieldset_Fieldset=props=>{const{legend,name,options,checkedValue,disabled,isVertical,onChange}=props;return(0,jsx_runtime.jsxs)(Fieldset,{disabled,children:[(0,jsx_runtime.jsx)(Legend,{children:legend}),(0,jsx_runtime.jsx)(OptionsContainer,{$isVertical:isVertical,children:options.map((({label,value})=>(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(common_Radio,{name,value,checked:value===checkedValue,disabled,onChange}),"string"==typeof label?(0,jsx_runtime.jsx)(Text.A,{type:"semiPrimary",fontSize:"16px",children:label}):label]},value)))})]})};Fieldset_Fieldset.displayName="Fieldset";const common_Fieldset_Fieldset=Fieldset_Fieldset;try{Fieldset_Fieldset.displayName="Fieldset",Fieldset_Fieldset.__docgenInfo={description:"",displayName:"Fieldset",props:{legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},checkedValue:{defaultValue:null,description:"",name:"checkedValue",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isVertical:{defaultValue:null,description:"",name:"isVertical",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Fieldset/Fieldset.tsx#Fieldset"]={docgenInfo:Fieldset_Fieldset.__docgenInfo,name:"Fieldset",path:"src/components/common/Fieldset/Fieldset.tsx#Fieldset"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Fieldset/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Fieldset/Fieldset.tsx").A},"./src/components/common/Radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Radio_Radio});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Label=styled_components_browser_esm.I4.label`
  width: 16px;
  height: 16px;
`,FakeVisualRadio=styled_components_browser_esm.I4.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme})=>theme.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};

  ${({theme,$checked})=>$checked?styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.GOLD};
          background-color: ${theme.color.GOLD};
        `:styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Radio=styled_components_browser_esm.I4.input.attrs({type:"radio"})`
  display: none;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio_Radio=props=>{const{checked,disabled}=props;return(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Radio,{...props,onChange:()=>{"value"in props?props.onChange(props.value):props.onChange()}}),(0,jsx_runtime.jsx)(FakeVisualRadio,{$checked:checked,$disabled:disabled})]})};Radio_Radio.displayName="Radio";const common_Radio_Radio=Radio_Radio;try{Radio_Radio.displayName="Radio",Radio_Radio.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | (() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Radio/Radio.tsx#Radio"]={docgenInfo:Radio_Radio.__docgenInfo,name:"Radio",path:"src/components/common/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/domains/dataHandlers/validators/fontNoValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YZ:()=>isFontNoResponse,zw:()=>isFontNo});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isFontNo=data=>"number"==typeof data&&!isNaN(data)&&data%1==0,isFontNoResponse=data=>(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"fontNo"in data&&isFontNo(data.fontNo)},"./src/domains/dataHandlers/validators/totamjungThemeValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>isTotamjungTheme,g:()=>isTotamjungThemeResponse});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isTotamjungThemeResponse=data=>(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"totamjungTheme"in data&&isTotamjungTheme(data.totamjungTheme),isTotamjungTheme=data=>"none"===data||"totamjung"===data},"./src/types/typeGuards.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gv:()=>isObject,H9:()=>isNumericArray,Lq:()=>isTierWithoutNotRatable,br:()=>isRatedTier,hj:()=>isNumericObject,hz:()=>isIsoString});const isObject=data=>"object"==typeof data&&null!==data,isNumericObject=data=>isObject(data)&&Object.keys(data).every((key=>!isNaN(Number(key)))),isNumericArray=data=>Array.isArray(data)&&data.every((value=>"number"==typeof value)),isIsoString=data=>"string"==typeof data&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),isTier=data=>"number"==typeof data&&data%1==0&&data>=0&&data<=31,isTierWithoutNotRatable=data=>isTier(data)&&31!==data,isRatedTier=data=>isTier(data)&&0!==data&&31!==data}}]);
//# sourceMappingURL=components-AppearanceFieldsetMenu-AppearanceFieldsetMenu-stories.1e3cb51c.iframe.bundle.js.map