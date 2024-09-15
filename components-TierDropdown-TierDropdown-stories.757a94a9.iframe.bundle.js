"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[6135],{"./src/components/TierDropdown/TierDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_TierDropdown__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TierDropdown/TierDropdown.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/TierDropdown",component:_TierDropdown__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{docs:{description:{component:"`TierDropdown`은 사용자에게 solved.ac 티어 하나를 선택할 수 있는 기능을 제공하는 드롭다운 형태의 컴포넌트입니다."}}}},Default={decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"150px",height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})],args:{selectedTier:1}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '150px',\n    height: '200px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    selectedTier: 1\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/TierDropdown/TierDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TierDropdown_TierDropdown});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var svg=__webpack_require__("./src/images/svg/index.ts"),svg_tier=__webpack_require__("./src/images/svg/tier/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const tierHider_useTierDropdown=params=>{const{initSelectedTier,onChange}=params,[selectedTier,setSelectedTier]=(0,react.useState)(initSelectedTier),[isDropdownOpen,setIsDropdownOpen]=(0,react.useState)(!1),containerRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{setSelectedTier(initSelectedTier)}),[initSelectedTier]),(0,react.useEffect)((()=>{const containerElement=containerRef.current;if(!containerElement)return;const closeDropdownIfNotFocused=event=>{event.target instanceof Node&&event.target!==containerElement&&!containerElement.contains(event.target)&&setIsDropdownOpen(!1)};return document.addEventListener("click",closeDropdownIfNotFocused),()=>{document.removeEventListener("click",closeDropdownIfNotFocused)}}),[containerRef]);return{selectedTier,isDropdownOpen,updateSelectedTier:tier=>{setSelectedTier(tier),setIsDropdownOpen(!1),onChange(tier)},openDropdown:()=>{setIsDropdownOpen(!0)},containerRef}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RATED_TIERS=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],RATED_TIER_NAMES={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},TierDropdown=props=>{const{selectedTier:initSelectedTier,onChange}=props,{selectedTier,updateSelectedTier,isDropdownOpen,openDropdown,containerRef}=tierHider_useTierDropdown({initSelectedTier,onChange});return(0,jsx_runtime.jsxs)(Container,{ref:containerRef,children:[(0,jsx_runtime.jsxs)(Button,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:isDropdownOpen,onClick:openDropdown,children:[(0,jsx_runtime.jsx)(TierBadge,{src:svg_tier.R[selectedTier],alt:""}),(0,jsx_runtime.jsx)(TierText,{$tier:selectedTier,$isBold:!0,children:RATED_TIER_NAMES[selectedTier]}),(0,jsx_runtime.jsx)(ArrowDownTriangleIconWrapper,{children:(0,jsx_runtime.jsx)(svg.pB,{})})]}),(0,jsx_runtime.jsx)(List,{$isOpen:isDropdownOpen,children:RATED_TIERS.map((tier=>(0,jsx_runtime.jsx)(ListItem,{children:(0,jsx_runtime.jsxs)(ListButton,{type:"button","aria-label":`${RATED_TIER_NAMES[tier]}를 경고 시작 티어로 설정하기`,onClick:()=>{updateSelectedTier(tier)},children:[(0,jsx_runtime.jsx)(TierBadge,{src:svg_tier.R[tier],alt:""}),(0,jsx_runtime.jsx)(TierText,{$tier:tier,$isBold:tier===selectedTier,children:RATED_TIER_NAMES[tier]}),tier===selectedTier&&(0,jsx_runtime.jsx)(CheckIconWrapper,{children:(0,jsx_runtime.jsx)(svg.Sr,{})})]})},tier)))})]})};TierDropdown.displayName="TierDropdown";const TierDropdown_TierDropdown=TierDropdown;try{TierDropdown.displayName="TierDropdown",TierDropdown.__docgenInfo={description:"",displayName:"TierDropdown",props:{selectedTier:{defaultValue:null,description:"",name:"selectedTier",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(tier: RatedTier) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TierDropdown/TierDropdown.tsx#TierDropdown"]={docgenInfo:TierDropdown.__docgenInfo,name:"TierDropdown",path:"src/components/TierDropdown/TierDropdown.tsx#TierDropdown"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-TierDropdown-TierDropdown-stories.757a94a9.iframe.bundle.js.map