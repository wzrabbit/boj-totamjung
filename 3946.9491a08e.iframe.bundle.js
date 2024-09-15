"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[3946],{"./src/components/HiderMenu/HiderFieldsetMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HiderMenu_HiderFieldsetMenu});var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),Fieldset=__webpack_require__("./src/components/common/Fieldset/index.ts");const components_TierDropdown=__webpack_require__("./src/components/TierDropdown/TierDropdown.tsx").A;var Text=__webpack_require__("./src/components/common/Text/index.ts");const components_ProblemTagLockTimer=__webpack_require__("./src/components/ProblemTagLockTimer/ProblemTagLockTimer.tsx").A;var TextLink=__webpack_require__("./src/components/common/TextLink/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),png=__webpack_require__("./src/images/png/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),hiderOptionsValidator=__webpack_require__("./src/domains/dataHandlers/validators/hiderOptionsValidator.ts"),commands=__webpack_require__("./src/constants/commands.ts");const fallbackHiderOptions={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},algorithm_useHiderFieldsetMenu=()=>{const[hiderOptionsState,setHiderOptionsState]=(0,react.useState)({...fallbackHiderOptions,isLoaded:!1});(0,react.useEffect)((()=>{(async()=>{const response=await chrome.runtime.sendMessage({command:commands.Lo.FETCH_HIDER_OPTIONS});(0,hiderOptionsValidator.Oh)(response)&&setHiderOptionsState({...response,isLoaded:!0})})()}),[]),(0,react.useEffect)((()=>{const{isLoaded,...hiderOptionsWithoutLoadingParam}=hiderOptionsState;isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_HIDER_OPTIONS,hiderOptions:hiderOptionsWithoutLoadingParam})}),[hiderOptionsState]);return{...hiderOptionsState,updateProblemTagLockDuration:(hours,minutes)=>{setHiderOptionsState((prev=>prev.isLoaded?{...prev,problemTagLockDuration:{hours,minutes}}:prev))},updateShouldHideTier:shouldHideTierString=>{const shouldHideTier="true"===shouldHideTierString;setHiderOptionsState((prev=>prev.isLoaded?{...prev,shouldHideTier}:prev))},updateShouldWarnHighTier:shouldWarnHighTierString=>{const shouldWarnHighTier="true"===shouldWarnHighTierString;setHiderOptionsState((prev=>prev.isLoaded?{...prev,shouldWarnHighTier}:prev))},updateWarnTier:warnTier=>{setHiderOptionsState((prev=>prev.isLoaded?{...prev,warnTier}:prev))},updateAlgorithmHiderUsage:usage=>{"click"!==usage&&"always"!==usage||setHiderOptionsState((prev=>prev.isLoaded?{...prev,algorithmHiderUsage:usage}:prev))},updateProblemTagLockUsage:usage=>{"click"!==usage&&"auto"!==usage||setHiderOptionsState((prev=>prev.isLoaded?{...prev,problemTagLockUsage:usage}:prev))}}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,WarningTierLabel=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HiderFieldsetMenu=()=>{const{problemTagLockDuration,shouldHideTier,shouldWarnHighTier,warnTier,algorithmHiderUsage,problemTagLockUsage,updateProblemTagLockDuration,updateShouldHideTier,updateShouldWarnHighTier,updateWarnTier,updateAlgorithmHiderUsage,updateProblemTagLockUsage}=algorithm_useHiderFieldsetMenu(),{hours,minutes}=problemTagLockDuration;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"잠금 시간 설정",iconSrc:chrome.runtime.getURL("lock.png")}),(0,jsx_runtime.jsx)(components_ProblemTagLockTimer,{hours,minutes,onChange:updateProblemTagLockDuration}),(0,jsx_runtime.jsx)(MenuTitle.A,{title:"티어 가리개 설정",iconSrc:png.Rm}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:shouldHideTier?"true":void 0===shouldHideTier?"":"false",onChange:updateShouldHideTier}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!shouldHideTier,options:[{label:"사용하지 않음",value:"false"},{label:(0,jsx_runtime.jsxs)(WarningTierLabel,{children:[(0,jsx_runtime.jsx)(components_TierDropdown,{selectedTier:warnTier,onChange:updateWarnTier}),(0,jsx_runtime.jsx)(Text.A,{type:"semiPrimary",fontSize:"16px",children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:shouldWarnHighTier?"true":"false",onChange:updateShouldWarnHighTier}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",children:["티어 가리개를 사용하기 위해서는 백준의"," ",(0,jsx_runtime.jsx)(TextLink.A,{href:"https://www.acmicpc.net/setting/view",fontSize:"14px",children:"설정 페이지"}),'에서 [보기] - [solved.ac 티어]가 "보기"로 설정되어 있어야 합니다.']}),(0,jsx_runtime.jsx)(MenuTitle.A,{title:"기본 설정",iconSrc:(0,jsx_runtime.jsx)(svg.dw,{})}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:algorithmHiderUsage??"",onChange:updateAlgorithmHiderUsage}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:problemTagLockUsage??"",onChange:updateProblemTagLockUsage})]})};HiderFieldsetMenu.displayName="HiderFieldsetMenu";const HiderMenu_HiderFieldsetMenu=HiderFieldsetMenu},"./src/components/MenuTitle/MenuTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuTitle_MenuTitle});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuTitle=props=>{const{iconSrc,title}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:""}):(0,jsx_runtime.jsx)(IconWrapper,{children:iconSrc})),(0,jsx_runtime.jsx)(Title,{children:title})]}),(0,jsx_runtime.jsx)(Underline,{})]})};MenuTitle.displayName="MenuTitle";const MenuTitle_MenuTitle=MenuTitle;try{MenuTitle.displayName="MenuTitle",MenuTitle.__docgenInfo={description:"",displayName:"MenuTitle",props:{iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string | SVGProps<SVGSVGElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuTitle/MenuTitle.tsx#MenuTitle"]={docgenInfo:MenuTitle.__docgenInfo,name:"MenuTitle",path:"src/components/MenuTitle/MenuTitle.tsx#MenuTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuTitle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/MenuTitle/MenuTitle.tsx").A},"./src/components/ProblemTagLockTimer/ProblemTagLockTimer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ProblemTagLockTimer_ProblemTagLockTimer});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,Input=styled_components_browser_esm.I4.input`
  width: 60px;
  height: 46px;

  border: none;
  border-radius: 10px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  font-size: 26px;
  font-weight: 800;
  text-align: center;
  color: ${({theme})=>theme.color.GOLD};
  border: 2px solid ${({theme})=>theme.color.LIGHT_BROWN};

  transition: outline 0.05s;

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    border: 2px solid ${({theme})=>theme.color.LEMON};
    outline: 3px solid ${({theme})=>theme.color.LEMON}70;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;var png=__webpack_require__("./src/images/png/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const NUMERIC_STRING_REGEX=/^\d+$/,tagLock_useProblemTagLockTimer=params=>{const{initHours,initMinutes,onChange}=params,[hours,setHours]=(0,react.useState)(String(initHours)),[minutes,setMinutes]=(0,react.useState)(String(initMinutes));(0,react.useEffect)((()=>{setHours(String(initHours)),setMinutes(String(initMinutes))}),[initHours,initMinutes]);return{hours,minutes,updateHours:event=>{const newHours=event.target.value;newHours.length>=3||setHours(newHours)},updateMinutes:event=>{const newMinutes=event.target.value;newMinutes.length>=3||setMinutes(newMinutes)},submitHours:()=>{(hours=>NUMERIC_STRING_REGEX.test(hours)&&Number(hours)>=0&&Number(hours)<=99)(hours)&&Number(hours)!==initHours?(setHours(String(Number(hours))),onChange(Number(hours),Number(minutes))):setHours(String(initHours))},submitMinutes:()=>{(minutes=>NUMERIC_STRING_REGEX.test(minutes)&&Number(minutes)>=0&&Number(minutes)<=59)(minutes)&&Number(minutes)!==initMinutes?(setMinutes(String(Number(minutes))),onChange(Number(hours),Number(minutes))):setMinutes(String(initMinutes))}}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProblemTagLockTimer=props=>{const{hours:initHours,minutes:initMinutes,disabled,onChange}=props,{hours,minutes,updateHours,updateMinutes,submitHours,submitMinutes}=tagLock_useProblemTagLockTimer({initHours,initMinutes,onChange});return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("img",{src:png.XR,width:"54px",height:"46px",alt:""}),(0,jsx_runtime.jsx)(Input,{name:"hours",type:"number",min:0,max:99,value:hours,disabled,onChange:updateHours,onBlur:submitHours,"aria-label":"시간"}),(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:"시간"}),(0,jsx_runtime.jsx)(Input,{name:"minutes",type:"number",min:0,max:59,value:minutes,disabled,onChange:updateMinutes,onBlur:submitMinutes,"aria-label":"분"}),(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:"분"})]})};ProblemTagLockTimer.displayName="ProblemTagLockTimer";const ProblemTagLockTimer_ProblemTagLockTimer=ProblemTagLockTimer;try{ProblemTagLockTimer.displayName="ProblemTagLockTimer",ProblemTagLockTimer.__docgenInfo={description:"",displayName:"ProblemTagLockTimer",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(hours: number, minutes: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProblemTagLockTimer/ProblemTagLockTimer.tsx#ProblemTagLockTimer"]={docgenInfo:ProblemTagLockTimer.__docgenInfo,name:"ProblemTagLockTimer",path:"src/components/ProblemTagLockTimer/ProblemTagLockTimer.tsx#ProblemTagLockTimer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TierDropdown/TierDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierDropdown_TierDropdown});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,Button=styled_components_browser_esm.I4.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 134px;
  height: 32px;
  padding: 6px;

  border: 1.5px solid ${({theme})=>theme.color.LIGHT_BROWN};
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme,$isActivated})=>$isActivated?styled_components_browser_esm.AH`
          border: 1.5px solid ${theme.color.LEMON};
          box-shadow: 0 0 12px ${theme.color.GOLD}70;
        `:styled_components_browser_esm.AH`
          border: 1.5px solid ${theme.color.BROWN};
        `}
`,TierBadge=styled_components_browser_esm.I4.img`
  width: 12px;
  height: auto;
`,TierText=styled_components_browser_esm.I4.p`
  font-size: 14px;
  color: ${({theme,$tier})=>theme.solvedAcTier[$tier]};
  font-weight: ${({$isBold})=>$isBold?700:400};

  transition: font-weight 0.1s;
`,ArrowDownTriangleIconWrapper=styled_components_browser_esm.I4.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.GOLD};
  }
`,List=styled_components_browser_esm.I4.ul`
  display: ${({$isOpen})=>$isOpen?"flex":"none"};
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 150px;
  height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme})=>theme.color.LEMON};
  box-shadow: 0 0 12px ${({theme})=>theme.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  scrollbar-width: none;

  transform-origin: top;
  pointer-events: auto;
  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,ListItem=styled_components_browser_esm.I4.li`
  padding: 2px;
`,ListButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme})=>theme.color.BROWN};
  }
`,CheckIconWrapper=styled_components_browser_esm.I4.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme})=>theme.color.GOLD};
  }
`;var svg=__webpack_require__("./src/images/svg/index.ts"),svg_tier=__webpack_require__("./src/images/svg/tier/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const tierHider_useTierDropdown=params=>{const{initSelectedTier,onChange}=params,[selectedTier,setSelectedTier]=(0,react.useState)(initSelectedTier),[isDropdownOpen,setIsDropdownOpen]=(0,react.useState)(!1),containerRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{setSelectedTier(initSelectedTier)}),[initSelectedTier]),(0,react.useEffect)((()=>{const containerElement=containerRef.current;if(!containerElement)return;const closeDropdownIfNotFocused=event=>{event.target instanceof Node&&event.target!==containerElement&&!containerElement.contains(event.target)&&setIsDropdownOpen(!1)};return document.addEventListener("click",closeDropdownIfNotFocused),()=>{document.removeEventListener("click",closeDropdownIfNotFocused)}}),[containerRef]);return{selectedTier,isDropdownOpen,updateSelectedTier:tier=>{setSelectedTier(tier),setIsDropdownOpen(!1),onChange(tier)},openDropdown:()=>{setIsDropdownOpen(!0)},containerRef}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RATED_TIERS=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],RATED_TIER_NAMES={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},TierDropdown=props=>{const{selectedTier:initSelectedTier,onChange}=props,{selectedTier,updateSelectedTier,isDropdownOpen,openDropdown,containerRef}=tierHider_useTierDropdown({initSelectedTier,onChange});return(0,jsx_runtime.jsxs)(Container,{ref:containerRef,children:[(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:isDropdownOpen,onClick:openDropdown,children:[(0,jsx_runtime.jsx)(TierBadge,{src:svg_tier.R[selectedTier],alt:""}),(0,jsx_runtime.jsx)(TierText,{$tier:selectedTier,$isBold:!0,children:RATED_TIER_NAMES[selectedTier]}),(0,jsx_runtime.jsx)(ArrowDownTriangleIconWrapper,{children:(0,jsx_runtime.jsx)(svg.pB,{})})]}),(0,jsx_runtime.jsx)(List,{$isOpen:isDropdownOpen,children:RATED_TIERS.map((tier=>(0,jsx_runtime.jsx)(ListItem,{children:(0,jsx_runtime.jsxs)(ListButton,{type:"button","aria-label":`${RATED_TIER_NAMES[tier]}를 경고 시작 티어로 설정하기`,onClick:()=>{updateSelectedTier(tier)},children:[(0,jsx_runtime.jsx)(TierBadge,{src:svg_tier.R[tier],alt:""}),(0,jsx_runtime.jsx)(TierText,{$tier:tier,$isBold:tier===selectedTier,children:RATED_TIER_NAMES[tier]}),tier===selectedTier&&(0,jsx_runtime.jsx)(CheckIconWrapper,{children:(0,jsx_runtime.jsx)(svg.Sr,{})})]})},tier)))})]})};TierDropdown.displayName="TierDropdown";const TierDropdown_TierDropdown=TierDropdown;try{TierDropdown.displayName="TierDropdown",TierDropdown.__docgenInfo={description:"",displayName:"TierDropdown",props:{selectedTier:{defaultValue:null,description:"",name:"selectedTier",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(tier: RatedTier) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TierDropdown/TierDropdown.tsx#TierDropdown"]={docgenInfo:TierDropdown.__docgenInfo,name:"TierDropdown",path:"src/components/TierDropdown/TierDropdown.tsx#TierDropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Fieldset/Fieldset.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Fieldset_Fieldset});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Fieldset=styled_components_browser_esm.I4.fieldset`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio_Radio=props=>{const{checked,disabled}=props;return(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Radio,{...props,onChange:()=>{"value"in props?props.onChange(props.value):props.onChange()}}),(0,jsx_runtime.jsx)(FakeVisualRadio,{$checked:checked,$disabled:disabled})]})};Radio_Radio.displayName="Radio";const common_Radio_Radio=Radio_Radio;try{Radio_Radio.displayName="Radio",Radio_Radio.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | (() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Radio/Radio.tsx#Radio"]={docgenInfo:Radio_Radio.__docgenInfo,name:"Radio",path:"src/components/common/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/domains/dataHandlers/validators/hiderOptionsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Oh:()=>isHiderOptionsResponse});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isHiderOptionsResponse=data=>{if(!((0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"problemTagLockDuration"in data&&"shouldHideTier"in data&&"shouldWarnHighTier"in data&&"warnTier"in data&&"algorithmHiderUsage"in data&&"problemTagLockUsage"in data&&(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data.problemTagLockDuration)&&"hours"in data.problemTagLockDuration&&"minutes"in data.problemTagLockDuration&&"number"==typeof data.problemTagLockDuration.hours&&"number"==typeof data.problemTagLockDuration.minutes&&"boolean"==typeof data.shouldHideTier&&"boolean"==typeof data.shouldWarnHighTier&&(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.br)(data.warnTier)&&"string"==typeof data.algorithmHiderUsage&&["click","always"].includes(data.algorithmHiderUsage)&&"string"==typeof data.problemTagLockUsage&&["click","auto"].includes(data.problemTagLockUsage)))return!1;const{hours,minutes}=data.problemTagLockDuration;return hours>=0&&hours<100&&minutes>=0&&minutes<60&&hours%1==0&&minutes%1==0}},"./src/images/png/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e_:()=>all_checked_namespaceObject,F_:()=>all_unchecked_namespaceObject,jr:()=>bug_namespaceObject,w6:()=>guidebook_button_namespaceObject,Rm:()=>hidden_tier_badge_namespaceObject,$T:()=>info_button_namespaceObject,XR:()=>lock_with_clock_namespaceObject,H3:()=>logo_square_namespaceObject,uj:()=>settings_title_namespaceObject,e:()=>totamjung_namespaceObject});const all_checked_namespaceObject=__webpack_require__.p+"static/media/all-checked.202b1c06.png",all_unchecked_namespaceObject=__webpack_require__.p+"static/media/all-unchecked.36d4a64c.png",lock_with_clock_namespaceObject=__webpack_require__.p+"static/media/lock-with-clock.523093d4.png",hidden_tier_badge_namespaceObject=__webpack_require__.p+"static/media/hidden-tier-badge.52045d37.png",settings_title_namespaceObject=__webpack_require__.p+"static/media/settings-title.e0051888.png",guidebook_button_namespaceObject=__webpack_require__.p+"static/media/guidebook-button.1af2254a.png",info_button_namespaceObject=__webpack_require__.p+"static/media/info-button.b89374dc.png",totamjung_namespaceObject=__webpack_require__.p+"static/media/totamjung.d0c8aa44.png",logo_square_namespaceObject=__webpack_require__.p+"static/media/logo-square.7625446d.png",bug_namespaceObject=__webpack_require__.p+"static/media/bug.66b34cbf.png"}}]);
//# sourceMappingURL=3946.9491a08e.iframe.bundle.js.map