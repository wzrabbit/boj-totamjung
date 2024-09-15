"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[8593],{"./src/components/core/Options/Options.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Options_stories});const components_OptionsHeader=__webpack_require__("./src/components/OptionsHeader/OptionsHeader.tsx").A;const sections_HiderSection=__webpack_require__("./src/components/sections/HiderSection/HiderSection.tsx").A;const sections_RandomDefenseSection=__webpack_require__("./src/components/sections/RandomDefenseSection/RandomDefenseSection.tsx").A;const sections_AppearanceAndDataManageSection=__webpack_require__("./src/components/sections/AppearanceAndDataManageSection/AppearanceAndDataManageSection.tsx").A;var react=__webpack_require__("./node_modules/react/index.js");const options_useOptionsPage=()=>{const[selectedCategory,setSelectedCategory]=(0,react.useState)("algorithmHider");return{selectedCategory,setSelectedCategory}};var png=__webpack_require__("./src/images/png/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const breathe=styled_components_browser_esm.i7`
  0% {
    transform: scaleY(100%);
  }

  50% {
    transform: scaleY(97%);
  }

  100% {
    transform: scaleY(100%);
  }
`,Container=styled_components_browser_esm.I4.div`
  display: flex;

  width: 1310px;
  height: 665px;
  margin: 10px 0 0 20px;
`,OptionsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,OptionsBody=styled_components_browser_esm.I4.main`
  display: flex;
  column-gap: 20px;

  width: 1060px;
  height: 580px;
`,TotamjungImageWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: flex-end;

  width: 250px;
`,TotamjungImage=styled_components_browser_esm.I4.img`
  width: 250px;
  height: 331px;

  transform-origin: bottom;
  animation: ${breathe} 3s forwards infinite;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Options=()=>{const{selectedCategory,setSelectedCategory}=options_useOptionsPage();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(OptionsContainer,{children:[(0,jsx_runtime.jsx)(components_OptionsHeader,{selectedCategory,onCategoryChange:setSelectedCategory}),(0,jsx_runtime.jsxs)(OptionsBody,{children:[(0,jsx_runtime.jsx)(sections_HiderSection,{show:"algorithmHider"===selectedCategory}),(0,jsx_runtime.jsx)(sections_RandomDefenseSection,{show:"randomDefense"===selectedCategory}),(0,jsx_runtime.jsx)(sections_AppearanceAndDataManageSection,{show:"appearanceAndDataManage"===selectedCategory})]})]}),(0,jsx_runtime.jsx)(TotamjungImageWrapper,{children:(0,jsx_runtime.jsx)(TotamjungImage,{src:png.e,alt:""})})]})};Options.displayName="Options";var _Default$parameters,_Default$parameters2;const Options_stories={title:"components/Options",component:Options,parameters:{docs:{description:{component:"`Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다."}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmList_AlgorithmList});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`;const AlgorithmList_AlgorithmListItem=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmList=props=>{const{items,checkedIds,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:items.map(((item,index)=>(0,jsx_runtime.jsx)(AlgorithmList_AlgorithmListItem,{id:item.id,name:item.name,isChecked:checkedIds.includes(item.id),backgroundColor:index%2==0?"brown":"light-brown",onChange},item.id)))})};AlgorithmList.displayName="AlgorithmList";const AlgorithmList_AlgorithmList=AlgorithmList;try{AlgorithmList.displayName="AlgorithmList",AlgorithmList.__docgenInfo={description:"",displayName:"AlgorithmList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Algorithm[]"}},checkedIds:{defaultValue:null,description:"",name:"checkedIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx#AlgorithmList"]={docgenInfo:AlgorithmList.__docgenInfo,name:"AlgorithmList",path:"src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx#AlgorithmList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmListItem_AlgorithmListItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme,$backgroundColor})=>"brown"===$backgroundColor?theme.color.BROWN:theme.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Label=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,Text=styled_components_browser_esm.I4.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme})=>theme.color.LEMON};

  cursor: pointer;
`;const common_Checkbox=__webpack_require__("./src/components/common/Checkbox/Checkbox.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmListItem=props=>{const{id,name,isChecked,backgroundColor,onChange}=props;return(0,jsx_runtime.jsx)(Container,{$backgroundColor:backgroundColor,children:(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text,{children:name}),(0,jsx_runtime.jsx)(common_Checkbox,{isChecked,onChange:()=>onChange(id),ariaLabel:name})]})})};AlgorithmListItem.displayName="AlgorithmListItem";const AlgorithmListItem_AlgorithmListItem=AlgorithmListItem;try{AlgorithmListItem.displayName="AlgorithmListItem",AlgorithmListItem.__docgenInfo={description:"",displayName:"AlgorithmListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"light-brown"'},{value:'"brown"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx#AlgorithmListItem"]={docgenInfo:AlgorithmListItem.__docgenInfo,name:"AlgorithmListItem",path:"src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx#AlgorithmListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AlgorithmPool/AlgorithmPool.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmPool_AlgorithmPool});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme})=>theme.color.GOLD};
`,AlgorithmPanel=styled_components_browser_esm.I4.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme})=>theme.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,ControlPanel=styled_components_browser_esm.I4.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme})=>theme.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,SearchPanelContainer=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,SearchIconWrapper=styled_components_browser_esm.I4.div`
  & svg {
    height: 100%;

    color: ${({theme})=>theme.color.GOLD};
  }
`,SearchInput=styled_components_browser_esm.I4.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme})=>theme.color.WHITE};
`,CheckButtonPanel=styled_components_browser_esm.I4.div`
  display: flex;

  user-select: none;
`,CheckButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,CheckButtonImage=styled_components_browser_esm.I4.img`
  width: 30px;
  height: 30px;
`,CheckButtonLabel=styled_components_browser_esm.I4.p`
  font-size: 16px;
  color: ${({theme})=>theme.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme})=>theme.color.GOLD};
  }
`;const AlgorithmPool_AlgorithmList=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx").A;var getSearchResults=__webpack_require__("./src/domains/algorithm/getSearchResults.ts"),algorithmInfos=__webpack_require__("./src/constants/algorithmInfos.ts"),react=__webpack_require__("./node_modules/react/index.js"),commands=__webpack_require__("./src/constants/commands.ts");const algorithm_useAlgorithmPool=()=>{const[keyword,setKeyword]=(0,react.useState)(""),[checkedIds,setCheckedIds]=(0,react.useState)([]),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const response=await chrome.runtime.sendMessage({command:commands.Lo.FETCH_CHECKED_ALGORITHM_IDS});setCheckedIds((()=>response.checkedIds)),setIsLoaded((()=>!0))})()}),[]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_CHECKED_ALGORITHM_IDS,checkedIds})}),[checkedIds]);return{keyword,items:(0,getSearchResults.p)(keyword),checkedIds,isLoaded,handleChangeKeyword:event=>{setKeyword((()=>event.target.value))},toggleAlgorithm:id=>{if(checkedIds.includes(id)){const newCheckedIds=checkedIds.filter((checkedId=>checkedId!==id));return void setCheckedIds((()=>newCheckedIds))}const newCheckedIds=[...checkedIds,id];setCheckedIds((()=>newCheckedIds))},checkAllAlgorithms:()=>{confirm("모든 알고리즘 분류를 체크 설정할까요?")&&setCheckedIds((()=>Array.from({length:algorithmInfos.t}).map(((_,index)=>index+1))))},uncheckAllAlgorithms:()=>{confirm("모든 알고리즘 분류를 체크 해제할까요?")&&setCheckedIds((()=>[]))}}};var svg=__webpack_require__("./src/images/svg/index.ts"),png=__webpack_require__("./src/images/png/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmPool=()=>{const{keyword,items,checkedIds,isLoaded,handleChangeKeyword,toggleAlgorithm,checkAllAlgorithms,uncheckAllAlgorithms}=algorithm_useAlgorithmPool();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AlgorithmPanel,{children:isLoaded&&(0,jsx_runtime.jsx)(AlgorithmPool_AlgorithmList,{items,checkedIds,onChange:toggleAlgorithm})}),(0,jsx_runtime.jsxs)(ControlPanel,{children:[(0,jsx_runtime.jsxs)(SearchPanelContainer,{children:[(0,jsx_runtime.jsx)(SearchIconWrapper,{children:(0,jsx_runtime.jsx)(svg.WI,{})}),(0,jsx_runtime.jsx)(SearchInput,{placeholder:"검색어를 입력해 주세요...",value:keyword,onChange:handleChangeKeyword})]}),(0,jsx_runtime.jsxs)(CheckButtonPanel,{children:[(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:checkAllAlgorithms,"aria-label":"알고리즘 분류 전체 선택",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.e_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 선택"})]}),(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:uncheckAllAlgorithms,"aria-label":"알고리즘 분류 전체 해제",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.F_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 해제"})]})]})]})]})};AlgorithmPool.displayName="AlgorithmPool";const AlgorithmPool_AlgorithmPool=AlgorithmPool},"./src/components/AppearanceFieldsetMenu/AppearanceFieldsetMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppearanceFieldsetMenu_AppearanceFieldsetMenu});var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),Fieldset=__webpack_require__("./src/components/common/Fieldset/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),commands=__webpack_require__("./src/constants/commands.ts"),totamjungThemeValidator=__webpack_require__("./src/domains/dataHandlers/validators/totamjungThemeValidator.ts"),fontNoValidator=__webpack_require__("./src/domains/dataHandlers/validators/fontNoValidator.ts");const useAppearanceFieldsetMenu=()=>{const[totamjungTheme,setTotamjungTheme]=(0,react.useState)(void 0),[fontNo,setFontNo]=(0,react.useState)(void 0),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const[totamjungThemeResponse,fontNoResponse]=await Promise.all([chrome.runtime.sendMessage({command:commands.Lo.FETCH_TOTAMJUNG_THEME}),chrome.runtime.sendMessage({command:commands.Lo.FETCH_FONT_NO})]);if(!(0,totamjungThemeValidator.g)(totamjungThemeResponse))return;if(!(0,fontNoValidator.YZ)(fontNoResponse))return;const{totamjungTheme:currentTheme}=totamjungThemeResponse,{fontNo:currentFontNo}=fontNoResponse;setTotamjungTheme(currentTheme),setFontNo(currentFontNo),setIsLoaded(!0)})()}),[]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_TOTAMJUNG_THEME,totamjungTheme})}),[totamjungTheme]),(0,react.useEffect)((()=>{isLoaded&&chrome.runtime.sendMessage({command:commands.Lo.SAVE_FONT_NO,fontNo})}),[fontNo]);return{totamjungTheme,fontNo,isLoaded,updateTotamjungTheme:totamjungTheme=>{isLoaded&&(0,totamjungThemeValidator.d)(totamjungTheme)&&setTotamjungTheme(totamjungTheme)},updateFontNo:fontNo=>{const numericFontNo=Number(fontNo);isLoaded&&!isNaN(numericFontNo)&&setFontNo(numericFontNo)}}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FONT_INFOS=[{name:"설정하지 않음",fontFamily:"Pretendard"},{name:"나눔고딕",fontFamily:"Nanum Gothic",fontSize:"15px"},{name:"나눔고딕 코딩",fontFamily:"Nanum Gothic Coding",fontSize:"15px"},{name:"나눔명조",fontFamily:"Nanum Myeongjo"},{name:"배달의민족 도현",fontFamily:"Do Hyeon"},{name:"배달의민족 주아",fontFamily:"Jua"},{name:"본명조",fontFamily:"Noto Serif KR"},{name:"해바라기",fontFamily:"Sunflower",fontSize:"17px"},{name:"배달의민족 연성",fontFamily:"Yeon Sung"},{name:"Cute Font",fontFamily:"Cute Font",fontSize:"22px"},{name:"Gaegu",fontFamily:"Gaegu",fontSize:"17px"},{name:"고딕 A1",fontFamily:"Gothic A1",fontSize:"15px"},{name:"고운바탕체",fontFamily:"Gowun Batang",fontSize:"15px"},{name:"고운돋움체",fontFamily:"Gowun Dodum",fontSize:"15px"},{name:"하이멜로디",fontFamily:"Hi Melody"},{name:"IBM Plex Sans",fontFamily:"IBM Plex Sans KR"},{name:"푸어스토리",fontFamily:"Poor Story"},{name:"DS싱글데이",fontFamily:"Single Day"},{name:"송명체",fontFamily:"Song Myung"},{name:"a스타일리쉬",fontFamily:"Stylish"},{name:"Pretendard",fontFamily:"Pretendard"},{name:"둥근모꼴 Neo",fontFamily:"NeoDunggeunmo"},{name:"Spoqa Han Sans Neo",fontFamily:"Spoqa Han Sans Neo",fontSize:"15px"},{name:"Noto Serif",fontFamily:"Noto Serif KR"},{name:"Hahmlet",fontFamily:"Hahmlet"},{name:"Diphylleia",fontFamily:"Diphylleia"}],AppearanceFieldsetMenu=()=>{const{totamjungTheme,fontNo,updateTotamjungTheme,updateFontNo}=useAppearanceFieldsetMenu();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"테마 설정",iconSrc:chrome.runtime.getURL("palette.png")}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"토탐정 테마 사용 여부",name:"shouldHideTier",options:[{label:"사용",value:"totamjung"},{label:"사용하지 않음",value:"none"}],checkedValue:totamjungTheme??"",onChange:updateTotamjungTheme}),(0,jsx_runtime.jsx)(MenuTitle.A,{title:"폰트 설정",iconSrc:(0,jsx_runtime.jsx)(svg.l8,{})}),(0,jsx_runtime.jsx)(Fieldset.A,{legend:"문제 본문 폰트 설정",name:"shouldHideTier",options:FONT_INFOS.map((({name,fontFamily,fontSize},index)=>({label:(0,jsx_runtime.jsx)(FontText,{$fontFamily:fontFamily,$fontSize:fontSize,children:name}),value:String(index)}))),checkedValue:void 0===fontNo?"":String(fontNo),onChange:updateFontNo})]})};AppearanceFieldsetMenu.displayName="AppearanceFieldsetMenu";const AppearanceFieldsetMenu_AppearanceFieldsetMenu=AppearanceFieldsetMenu},"./src/components/OptionsHeader/OptionsHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsHeader_OptionsHeader});var react=__webpack_require__("./node_modules/react/index.js");const OptionsHeader_OptionsNav=__webpack_require__("./src/components/OptionsHeader/OptionsNav/OptionsNav.tsx").A;var SimpleModal=__webpack_require__("./src/components/common/SimpleModal/index.ts");const OptionsHeader_TotamjungInfoModal=__webpack_require__("./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx").A;var png=__webpack_require__("./src/images/png/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,Title=styled_components_browser_esm.I4.h1`
  width: 130px;
  height: 100%;
`,OptionsLogoImage=styled_components_browser_esm.I4.img`
  width: 100%;
`,ButtonPanel=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,VersionText=styled_components_browser_esm.I4.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme})=>theme.color.GOLD};
`,Button=styled_components_browser_esm.I4.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,ButtonImage=styled_components_browser_esm.I4.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OptionsHeader=props=>{const{selectedCategory,onCategoryChange}=props,[activeModal,setActiveModal]=(0,react.useState)("none");return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Title,{children:(0,jsx_runtime.jsx)(OptionsLogoImage,{src:png.uj,alt:"토탐정 설정"})}),(0,jsx_runtime.jsx)(OptionsHeader_OptionsNav,{selectedCategory,onChange:onCategoryChange}),(0,jsx_runtime.jsxs)(ButtonPanel,{children:[(0,jsx_runtime.jsx)(VersionText,{children:`v${chrome.runtime.getManifest().version}`}),(0,jsx_runtime.jsx)(Button,{type:"button","aria-label":"도움말",onClick:()=>{setActiveModal("guidePageOpenConfirm")},children:(0,jsx_runtime.jsx)(ButtonImage,{src:png.w6,alt:""})}),(0,jsx_runtime.jsx)(Button,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{setActiveModal("totamjungInfo")},children:(0,jsx_runtime.jsx)(ButtonImage,{src:png.$T,alt:""})})]}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:"guidePageOpenConfirm"===activeModal,message:"토탐정 도움말 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/blob/main/GUIDE.md"),setActiveModal("none")},onNoSelect:()=>{setActiveModal("none")}}),(0,jsx_runtime.jsx)(OptionsHeader_TotamjungInfoModal,{open:"totamjungInfo"===activeModal,onClose:()=>{setActiveModal("none")}})]})};OptionsHeader.displayName="OptionsHeader";const OptionsHeader_OptionsHeader=OptionsHeader;try{OptionsHeader.displayName="OptionsHeader",OptionsHeader.__docgenInfo={description:"",displayName:"OptionsHeader",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onCategoryChange:{defaultValue:null,description:"",name:"onCategoryChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/OptionsHeader.tsx#OptionsHeader"]={docgenInfo:OptionsHeader.__docgenInfo,name:"OptionsHeader",path:"src/components/OptionsHeader/OptionsHeader.tsx#OptionsHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsHeader/OptionsNav/OptionsNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsNav_OptionsNav});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.nav`
  display: inline-flex;

  height: 36px;
`,NavItemList=styled_components_browser_esm.I4.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,NavItem=styled_components_browser_esm.I4.li`
  display: flex;
  flex-direction: column;
`,CategoryButton=styled_components_browser_esm.I4.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme})=>theme.color.GOLD};
  background: none;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: ${({$isSelected})=>$isSelected?800:600};
  color: ${({theme})=>theme.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme})=>theme.color.LEMON};
  }
`,Underline=styled_components_browser_esm.I4.span`
  display: inline-block;

  width: ${({$isSelected})=>$isSelected?"100%":"0"};
  height: 2px;

  background-color: ${({theme})=>theme.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme})=>theme.color.LEMON};
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OPTIONS_NAV_CATEGORIES=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"문제 추첨",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],OptionsNav=props=>{const{selectedCategory,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(NavItemList,{children:OPTIONS_NAV_CATEGORIES.map((({displayName,category})=>(0,jsx_runtime.jsxs)(NavItem,{children:[(0,jsx_runtime.jsx)(CategoryButton,{$isSelected:category===selectedCategory,onClick:()=>{onChange(category)},children:displayName}),(0,jsx_runtime.jsx)(Underline,{$isSelected:category===selectedCategory})]},displayName)))})})};OptionsNav.displayName="OptionsNav";const OptionsNav_OptionsNav=OptionsNav;try{OptionsNav.displayName="OptionsNav",OptionsNav.__docgenInfo={description:"",displayName:"OptionsNav",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/OptionsNav/OptionsNav.tsx#OptionsNav"]={docgenInfo:OptionsNav.__docgenInfo,name:"OptionsNav",path:"src/components/OptionsHeader/OptionsNav/OptionsNav.tsx#OptionsNav"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TotamjungInfoModal_TotamjungInfoModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const options_useTypewriterText=params=>{const{textList,typingTime,idleTime,erasingTime}=params,[currentText,setCurrentText]=(0,react.useState)(""),[currentIndex,setCurrentIndex]=(0,react.useState)(0),[typingStartTime,setTypingStartTime]=(0,react.useState)(Date.now()),[isTyping,setIsTyping]=(0,react.useState)(!1),idleStartDuration=typingTime,erasingStartDuration=typingTime+idleTime,replacingStartDuration=typingTime+idleTime+erasingTime;(0,react.useEffect)((()=>{if(!isTyping||0===textList.length)return;currentIndex>=textList.length&&setCurrentIndex((prev=>Math.min(textList.length-1,prev)));const typingTimer=setInterval((()=>{const now=Date.now(),currentTextTypingDuration=now-typingStartTime;if(currentTextTypingDuration>=replacingStartDuration)return setTypingStartTime(now),void setCurrentIndex((prev=>(prev+1)%textList.length));if(currentTextTypingDuration>=erasingStartDuration){const displayTextLength=textList[currentIndex].length-Math.ceil((currentTextTypingDuration-erasingStartDuration)/erasingTime*textList[currentIndex].length);return void setCurrentText(textList[currentIndex].slice(0,displayTextLength))}if(currentTextTypingDuration>=idleStartDuration)return void setCurrentText(textList[currentIndex]);const displayTextLength=Math.ceil(currentTextTypingDuration/typingTime*textList[currentIndex].length);setCurrentText(textList[currentIndex].slice(0,displayTextLength))}),20);return()=>{clearInterval(typingTimer)}}),[isTyping,currentIndex,typingStartTime,textList,typingTime,idleTime,erasingTime]);return{currentText,startTyping:()=>{setTypingStartTime(Date.now()),setCurrentText(""),setCurrentIndex(0),setIsTyping(!0)},stopTyping:()=>{setCurrentText(""),setCurrentIndex(0),setIsTyping(!1)}}};var png=__webpack_require__("./src/images/png/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const blink=styled_components_browser_esm.i7`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  width: 310px;
  max-width: 100%;
  height: 420px;

  & > * {
    z-index: 1;
  }
`,DarkBrownGradientElement=styled_components_browser_esm.I4.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 200px;

  background: ${({theme})=>theme.gradient.BROWN_GRADIENT};

  z-index: 0;
`,IntroductoryContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,LogoSquareImage=styled_components_browser_esm.I4.img`
  width: 160px;
`,ContentTitle=styled_components_browser_esm.I4.span`
  font-size: 30px;
  font-family: 'Do Hyeon';
  color: ${({theme})=>theme.color.GOLD};
`,IntroductoryTextContainer=styled_components_browser_esm.I4.div`
  position: relative;

  text-align: center;
`,TypewriterText=styled_components_browser_esm.I4.span`
  margin: 0 2px;

  color: ${({theme})=>theme.color.LEMON};
`,Pointer=styled_components_browser_esm.I4.span`
  display: inline-block;

  width: 1.5px;
  height: 18px;
  margin: -3px 0 -3px 1px;

  background-color: ${({theme})=>theme.color.LEMON};

  animation: ${blink} 0.8s infinite forwards;
`,InfoContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-top: auto;
`,LightGrayText=styled_components_browser_esm.I4.span`
  color: ${({theme})=>theme.color.LIGHT_GRAY};
`,ControlButtonsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 220px;
  margin: 0 auto;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const INTRODUCTORY_TEXT_LIST=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],TotamjungInfoModal=props=>{const{open,onClose}=props,{currentText,startTyping,stopTyping}=options_useTypewriterText({textList:INTRODUCTORY_TEXT_LIST,typingTime:1600,idleTime:3e3,erasingTime:500});return(0,react.useEffect)((()=>{open?startTyping():stopTyping()}),[open]),(0,jsx_runtime.jsx)(Modal.A,{title:"토탐정 정보",open,onClose,children:(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(DarkBrownGradientElement,{}),(0,jsx_runtime.jsxs)(IntroductoryContainer,{children:[(0,jsx_runtime.jsx)(LogoSquareImage,{src:png.H3,alt:""}),(0,jsx_runtime.jsx)(ContentTitle,{children:"토탐정"}),(0,jsx_runtime.jsxs)(IntroductoryTextContainer,{children:[(0,jsx_runtime.jsx)(TypewriterText,{children:currentText}),(0,jsx_runtime.jsx)(Pointer,{})]})]}),(0,jsx_runtime.jsxs)(InfoContainer,{children:[(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전: ",(0,jsx_runtime.jsxs)("b",{children:["v",chrome.runtime.getManifest().version]})," ",process.env.BUILD_DATE?`/ ${process.env.BUILD_DATE} 빌드`:""]}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",(0,jsx_runtime.jsx)("b",{children:"요술토끼"}),"(",(0,jsx_runtime.jsx)(LightGrayText,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),(0,jsx_runtime.jsxs)(ControlButtonsContainer,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:theme.w.color.LIGHT_PURPLE,iconSrc:png.jr,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:theme.w.color.LEMON,iconSrc:(0,jsx_runtime.jsx)(svg.tz,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:theme.w.color.WHITE,iconSrc:(0,jsx_runtime.jsx)(svg.Nb,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]})]})})};TotamjungInfoModal.displayName="TotamjungInfoModal";const TotamjungInfoModal_TotamjungInfoModal=TotamjungInfoModal;try{TotamjungInfoModal.displayName="TotamjungInfoModal",TotamjungInfoModal.__docgenInfo={description:"",displayName:"TotamjungInfoModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx#TotamjungInfoModal"]={docgenInfo:TotamjungInfoModal.__docgenInfo,name:"TotamjungInfoModal",path:"src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx#TotamjungInfoModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Checkbox_Checkbox});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,FakeVisualCheckbox=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme})=>theme.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme,$isChecked})=>$isChecked?styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.GOLD};
          background-color: ${theme.color.GOLD};
        `:styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Checkbox=styled_components_browser_esm.I4.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox_Checkbox=props=>{const{isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Checkbox,{checked:isChecked,"aria-label":ariaLabel,onChange}),(0,jsx_runtime.jsx)(FakeVisualCheckbox,{$isChecked:isChecked})]})};Checkbox_Checkbox.displayName="Checkbox";const common_Checkbox_Checkbox=Checkbox_Checkbox;try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/common/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sections/AppearanceAndDataManageSection/AppearanceAndDataManageSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppearanceAndDataManageSection_AppearanceAndDataManageSection});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;

  width: 100%;
`;styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;const components_AppearanceFieldsetMenu=__webpack_require__("./src/components/AppearanceFieldsetMenu/AppearanceFieldsetMenu.tsx").A;const components_OptionsDataManageMenu=__webpack_require__("./src/components/OptionsDataManageMenu/OptionsDataManageMenu.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AppearanceAndDataManageSection=props=>{const{show}=props;return show?(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(components_AppearanceFieldsetMenu,{}),(0,jsx_runtime.jsx)(components_OptionsDataManageMenu,{})]}):null},AppearanceAndDataManageSection_AppearanceAndDataManageSection=AppearanceAndDataManageSection;try{AppearanceAndDataManageSection.displayName="AppearanceAndDataManageSection",AppearanceAndDataManageSection.__docgenInfo={description:"",displayName:"AppearanceAndDataManageSection",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sections/AppearanceAndDataManageSection/AppearanceAndDataManageSection.tsx#AppearanceAndDataManageSection"]={docgenInfo:AppearanceAndDataManageSection.__docgenInfo,name:"AppearanceAndDataManageSection",path:"src/components/sections/AppearanceAndDataManageSection/AppearanceAndDataManageSection.tsx#AppearanceAndDataManageSection"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sections/HiderSection/HiderSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HiderSection_HiderSection});var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts");const components_AlgorithmPool=__webpack_require__("./src/components/AlgorithmPool/AlgorithmPool.tsx").A;const HiderMenu=__webpack_require__("./src/components/HiderMenu/HiderFieldsetMenu.tsx").A;var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.section`
  display: flex;
  column-gap: 20px;
  flex-shrink: 0;
`,AlgorithmHiderMenu=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HiderSection=props=>{const{show}=props;return show?(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(AlgorithmHiderMenu,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"알고 있는 알고리즘 관리하기",iconSrc:(0,jsx_runtime.jsx)(svg.WI,{})}),(0,jsx_runtime.jsx)(components_AlgorithmPool,{})]}),(0,jsx_runtime.jsx)(HiderMenu,{})]}):null},HiderSection_HiderSection=HiderSection;try{HiderSection.displayName="HiderSection",HiderSection.__docgenInfo={description:"",displayName:"HiderSection",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sections/HiderSection/HiderSection.tsx#HiderSection"]={docgenInfo:HiderSection.__docgenInfo,name:"HiderSection",path:"src/components/sections/HiderSection/HiderSection.tsx#HiderSection"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-core-Options-Options-stories.08313539.iframe.bundle.js.map