"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[7244],{"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/RandomDefenseHistoryMenu/RandomDefenseHistoryList",component:__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`RandomDefenseHistoryList`는 추첨 기록에서 추첨된 문제 여러 개의 정보를 리스트 형태로 보여주는 컴포넌트입니다."}}}},Default={args:{items:[{problemId:27959,title:"초코바",tier:1,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:27964,title:"콰트로치즈피자",tier:6,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:27943,title:"가지 사진 찾기",tier:11,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:27470,title:"멋진 부분집합",tier:16,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:30243,title:"🧩 N-Queen (Hard)",tier:21,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:31442,title:"좋은 수열",tier:26,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:1223,title:"마법의 돌",tier:0,createdAt:"2025-01-01T23:35:00.123Z"},{problemId:27903,title:"인생",tier:31,createdAt:"2025-01-01T23:35:00.123Z"}],isHidden:!1,onDelete:id=>{alert(`onDelete("${id}")`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:'{\n  args: {\n    items,\n    isHidden: false,\n    onDelete: id => {\n      alert(`onDelete("${id}")`);\n    }\n  }\n}',...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseHistoryItem_RandomDefenseHistoryItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getTierColor=(tier,isHidden,theme)=>isHidden?theme.color.GRAY:tier>=1&&tier<=5?theme.solvedAcTier[5]:tier>=6&&tier<=10?theme.solvedAcTier[10]:tier>=11&&tier<=15?theme.solvedAcTier[15]:tier>=16&&tier<=20?theme.solvedAcTier[20]:tier>=21&&tier<=25?theme.solvedAcTier[25]:tier>=26&&tier<=30?theme.solvedAcTier[30]:theme.color.WHITE,getTierGradientCss=(tier,isHidden,isHover,theme)=>isHidden?styled_components_browser_esm.AH`
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
`;const RandomDefenseHistoryList_RandomDefenseHistoryItem=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseHistoryList=props=>{const{items,isHidden,onDelete}=props;return(0,jsx_runtime.jsx)(Container,{children:items.map((item=>{const id=`${item.problemId}-${item.createdAt}`;return(0,jsx_runtime.jsx)(RandomDefenseHistoryList_RandomDefenseHistoryItem,{isHidden,onDelete:()=>{onDelete(id)},...item},id)}))})};RandomDefenseHistoryList.displayName="RandomDefenseHistoryList";const RandomDefenseHistoryList_RandomDefenseHistoryList=RandomDefenseHistoryList;try{RandomDefenseHistoryList.displayName="RandomDefenseHistoryList",RandomDefenseHistoryList.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx#RandomDefenseHistoryList"]={docgenInfo:RandomDefenseHistoryList.__docgenInfo,name:"RandomDefenseHistoryList",path:"src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx#RandomDefenseHistoryList"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/formatDate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>formatDate});const formatDate=date=>`${String(date.getFullYear()).padStart(4,"0")}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`}}]);
//# sourceMappingURL=components-RandomDefenseHistoryMenu-RandomDefenseHistoryList-RandomDefenseHistoryList-stories.c2bac833.iframe.bundle.js.map