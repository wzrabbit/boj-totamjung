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
`;const AlgorithmPool_AlgorithmList=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx").A;var SimpleModal=__webpack_require__("./src/components/common/SimpleModal/index.ts"),getSearchResults=__webpack_require__("./src/domains/algorithm/getSearchResults.ts"),algorithmInfos=__webpack_require__("./src/constants/algorithmInfos.ts"),react=__webpack_require__("./node_modules/react/index.js"),checkedAlgorithmsHandler=__webpack_require__("./src/domains/dataHandlers/checkedAlgorithmsHandler.ts");const algorithm_useAlgorithmPool=()=>{const[keyword,setKeyword]=(0,react.useState)(""),[checkedIds,setCheckedIds]=(0,react.useState)([]),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const response=await(0,checkedAlgorithmsHandler.z)();setCheckedIds(response.checkedIds),setIsLoaded(!0)})()}),[]),(0,react.useEffect)((()=>{isLoaded&&(0,checkedAlgorithmsHandler.I)(checkedIds)}),[checkedIds]);return{keyword,items:(0,getSearchResults.p)(keyword),checkedIds,isLoaded,handleChangeKeyword:event=>{setKeyword(event.target.value)},toggleAlgorithm:id=>{if(checkedIds.includes(id)){const newCheckedIds=checkedIds.filter((checkedId=>checkedId!==id));return void setCheckedIds(newCheckedIds)}const newCheckedIds=[...checkedIds,id];setCheckedIds(newCheckedIds)},checkAllAlgorithms:()=>{setCheckedIds(Array.from({length:algorithmInfos.t}).map(((_,index)=>index+1)))},uncheckAllAlgorithms:()=>{setCheckedIds([])}}};var useModal=__webpack_require__("./src/hooks/useModal.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),png=__webpack_require__("./src/images/png/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmPool=()=>{const{keyword,items,checkedIds,isLoaded,handleChangeKeyword,toggleAlgorithm,checkAllAlgorithms,uncheckAllAlgorithms}=algorithm_useAlgorithmPool(),{activeModalName,openModal,closeModal}=(0,useModal.A)();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AlgorithmPanel,{children:isLoaded&&(0,jsx_runtime.jsx)(AlgorithmPool_AlgorithmList,{items,checkedIds,onChange:toggleAlgorithm})}),(0,jsx_runtime.jsxs)(ControlPanel,{children:[(0,jsx_runtime.jsxs)(SearchPanelContainer,{children:[(0,jsx_runtime.jsx)(SearchIconWrapper,{children:(0,jsx_runtime.jsx)(svg.WI,{})}),(0,jsx_runtime.jsx)(SearchInput,{placeholder:"검색어를 입력해 주세요...",value:keyword,onChange:handleChangeKeyword})]}),(0,jsx_runtime.jsxs)(CheckButtonPanel,{children:[(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:()=>{openModal("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.e_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 선택"})]}),(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:()=>{openModal("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.F_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 해제"})]})]})]}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:"checkAll"===activeModalName,message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{checkAllAlgorithms(),closeModal()},onNoSelect:closeModal}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:"uncheckAll"===activeModalName,message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{uncheckAllAlgorithms(),closeModal()},onNoSelect:closeModal})]})};AlgorithmPool.displayName="AlgorithmPool";const AlgorithmPool_AlgorithmPool=AlgorithmPool},"./src/components/AppearanceFieldsetMenu/AppearanceFieldsetMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppearanceFieldsetMenu_AppearanceFieldsetMenu});var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),Fieldset=__webpack_require__("./src/components/common/Fieldset/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),totamjungThemeValidator=__webpack_require__("./src/domains/dataHandlers/validators/totamjungThemeValidator.ts"),totamjungThemeDataHandler=__webpack_require__("./src/domains/dataHandlers/totamjungThemeDataHandler.ts"),fontNoDataHandler=__webpack_require__("./src/domains/dataHandlers/fontNoDataHandler.ts");const useAppearanceFieldsetMenu=()=>{const[totamjungTheme,setTotamjungTheme]=(0,react.useState)(void 0),[fontNo,setFontNo]=(0,react.useState)(void 0),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const[totamjungThemeResponse,fontNoResponse]=await Promise.all([(0,totamjungThemeDataHandler.L)(),(0,fontNoDataHandler.j)()]),{totamjungTheme:currentTheme}=totamjungThemeResponse,{fontNo:currentFontNo}=fontNoResponse;setTotamjungTheme(currentTheme),setFontNo(currentFontNo),setIsLoaded(!0)})()}),[]),(0,react.useEffect)((()=>{isLoaded&&(0,totamjungThemeDataHandler.Y)(totamjungTheme)}),[totamjungTheme]),(0,react.useEffect)((()=>{isLoaded&&(0,fontNoDataHandler.g)(fontNo)}),[fontNo]);return{totamjungTheme,fontNo,isLoaded,updateTotamjungTheme:totamjungTheme=>{isLoaded&&(0,totamjungThemeValidator.d)(totamjungTheme)&&setTotamjungTheme(totamjungTheme)},updateFontNo:fontNo=>{const numericFontNo=Number(fontNo);isLoaded&&!isNaN(numericFontNo)&&setFontNo(numericFontNo)}}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const INTRODUCTORY_TEXT_LIST=['"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"','"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"','"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"','"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"','"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"','"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"'],TotamjungInfoModal=props=>{const{open,onClose}=props,{currentText,startTyping,stopTyping}=options_useTypewriterText({textList:INTRODUCTORY_TEXT_LIST,typingTime:1600,idleTime:3e3,erasingTime:500});return(0,react.useEffect)((()=>{open?startTyping():stopTyping()}),[open]),(0,jsx_runtime.jsx)(Modal.A,{title:"토탐정 정보",open,onClose,children:(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(DarkBrownGradientElement,{}),(0,jsx_runtime.jsxs)(IntroductoryContainer,{children:[(0,jsx_runtime.jsx)(LogoSquareImage,{src:png.H3,alt:""}),(0,jsx_runtime.jsx)(ContentTitle,{children:"토탐정"}),(0,jsx_runtime.jsxs)(IntroductoryTextContainer,{children:[(0,jsx_runtime.jsx)(TypewriterText,{children:currentText}),(0,jsx_runtime.jsx)(Pointer,{})]})]}),(0,jsx_runtime.jsxs)(InfoContainer,{children:[(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",textAlign:"center",children:["버전: ",(0,jsx_runtime.jsxs)("b",{children:["v",chrome.runtime.getManifest().version]})," ",process.env.BUILD_DATE?`/ ${process.env.BUILD_DATE} 빌드`:""]}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"14px",textAlign:"center",children:["개발: ",(0,jsx_runtime.jsx)("b",{children:"요술토끼"}),"(",(0,jsx_runtime.jsx)(LightGrayText,{children:"curious.wzrabbit@gmail.com"}),")"]})]}),(0,jsx_runtime.jsxs)(ControlButtonsContainer,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"버그/건의 제보하기",size:"medium",width:"100%",color:theme.w.color.LIGHT_PURPLE,iconSrc:png.jr,ariaLabel:"버그/건의 제보하기",disabled:!1,onClick:()=>{window.open("mailto:curious.wzrabbit@gmail.com")}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"릴리즈 노트 보기",size:"medium",width:"100%",color:theme.w.color.LEMON,iconSrc:(0,jsx_runtime.jsx)(svg.tz,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/releases")}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"Github 저장소 방문하기",size:"medium",width:"100%",color:theme.w.color.WHITE,iconSrc:(0,jsx_runtime.jsx)(svg.Nb,{}),ariaLabel:"테스트",disabled:!1,onClick:()=>{window.open("https://github.com/wzrabbit/boj-totamjung")}})]})]})})};TotamjungInfoModal.displayName="TotamjungInfoModal";const TotamjungInfoModal_TotamjungInfoModal=TotamjungInfoModal;try{TotamjungInfoModal.displayName="TotamjungInfoModal",TotamjungInfoModal.__docgenInfo={description:"",displayName:"TotamjungInfoModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx#TotamjungInfoModal"]={docgenInfo:TotamjungInfoModal.__docgenInfo,name:"TotamjungInfoModal",path:"src/components/OptionsHeader/TotamjungInfoModal/TotamjungInfoModal.tsx#TotamjungInfoModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuickSlotMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/QuickSlotMenu/QuickSlotMenu.tsx").A},"./src/components/RandomDefenseCreateMenu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx").A},"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseHistoryItem_RandomDefenseHistoryItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getTierColor=(tier,isHidden,theme)=>isHidden?theme.color.GRAY:tier>=1&&tier<=5?theme.solvedAcTier[5]:tier>=6&&tier<=10?theme.solvedAcTier[10]:tier>=11&&tier<=15?theme.solvedAcTier[15]:tier>=16&&tier<=20?theme.solvedAcTier[20]:tier>=21&&tier<=25?theme.solvedAcTier[25]:tier>=26&&tier<=30?theme.solvedAcTier[30]:theme.color.WHITE,getTierGradientCss=(tier,isHidden,isHover,theme)=>isHidden?styled_components_browser_esm.AH`
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
`;const RandomDefenseHistoryList_RandomDefenseHistoryItem=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryItem/RandomDefenseHistoryItem.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseHistoryList=props=>{const{items,isHidden,onDelete}=props;return(0,jsx_runtime.jsx)(Container,{children:items.map((item=>{const id=`${item.problemId}-${item.createdAt}`;return(0,jsx_runtime.jsx)(RandomDefenseHistoryList_RandomDefenseHistoryItem,{isHidden,onDelete:()=>{onDelete(id)},...item},id)}))})};RandomDefenseHistoryList.displayName="RandomDefenseHistoryList";const RandomDefenseHistoryList_RandomDefenseHistoryList=RandomDefenseHistoryList;try{RandomDefenseHistoryList.displayName="RandomDefenseHistoryList",RandomDefenseHistoryList.__docgenInfo={description:"",displayName:"RandomDefenseHistoryList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RandomDefenseHistoryInfo[]"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx#RandomDefenseHistoryList"]={docgenInfo:RandomDefenseHistoryList.__docgenInfo,name:"RandomDefenseHistoryList",path:"src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx#RandomDefenseHistoryList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseHistoryMenu_RandomDefenseHistoryMenu});const RandomDefenseHistoryMenu_RandomDefenseHistoryList=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx").A;var react=__webpack_require__("./node_modules/react/index.js"),randomDefenseHistoryDataHandler=__webpack_require__("./src/domains/dataHandlers/randomDefenseHistoryDataHandler.ts");const randomDefense_useRandomDefenseHistoryMenu=()=>{const[items,setItems]=(0,react.useState)([]),[isHidden,setIsHidden]=(0,react.useState)(!0),[isLoaded,setIsLoaded]=(0,react.useState)(!1),isEmpty=0===items.length;(0,react.useEffect)((()=>{(async()=>{const response=await(0,randomDefenseHistoryDataHandler.Yf)();setIsHidden(response.isHidden),setItems(response.randomDefenseHistory),setIsLoaded(!0)})()}),[]),(0,react.useEffect)((()=>{isLoaded&&(0,randomDefenseHistoryDataHandler.NL)(items,isHidden)}),[items,isHidden]);return{items,isHidden,isLoaded,isEmpty,deleteHistoryById:id=>{const newItems=items.filter((item=>`${item.problemId}-${item.createdAt}`!==id));setItems(newItems)},clearHistory:()=>{!isEmpty&&confirm("모든 추첨 기록을 제거할까요?")&&setItems([])},updateIsHidden:event=>{setIsHidden(event.target.checked)}}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;const common_Switch=__webpack_require__("./src/components/common/Switch/Switch.tsx").A;var NamedFrame=__webpack_require__("./src/components/common/NamedFrame/NamedFrame.tsx"),svg=__webpack_require__("./src/images/svg/index.ts"),randomDefense=__webpack_require__("./src/constants/randomDefense.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RandomDefenseHistoryMenu=()=>{const{items,isHidden,isLoaded,isEmpty,deleteHistoryById,clearHistory,updateIsHidden}=randomDefense_useRandomDefenseHistoryMenu();return(0,jsx_runtime.jsx)(NamedFrame.A,{width:"370px",height:"537px",padding:"10px",title:"추첨 기록",children:(0,jsx_runtime.jsx)(Container,{children:isLoaded&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(TierSwitchPanel,{children:[(0,jsx_runtime.jsx)(Text,{children:"티어 숨기기"}),(0,jsx_runtime.jsx)(common_Switch,{size:"large",isChecked:isHidden,ariaLabel:"티어 숨기기",onChange:updateIsHidden})]}),(0,jsx_runtime.jsx)(HistoryListContainer,{children:(0,jsx_runtime.jsx)(RandomDefenseHistoryMenu_RandomDefenseHistoryList,{items,isHidden,onDelete:deleteHistoryById})}),(0,jsx_runtime.jsxs)(HistoryManagePanel,{children:[(0,jsx_runtime.jsxs)(Indicator,{children:[(0,jsx_runtime.jsx)(PackageIconWrapper,{children:(0,jsx_runtime.jsx)(svg.qD,{})}),(0,jsx_runtime.jsx)(IndicatorText,{children:`${items.length} / ${randomDefense.o0}`})]}),(0,jsx_runtime.jsx)(Text,{children:"추첨 기록 비우기"}),(0,jsx_runtime.jsx)(DeleteButton,{onClick:clearHistory,disabled:isEmpty,"aria-label":"추첨 기록 비우기",children:(0,jsx_runtime.jsx)(svg.uc,{})})]})]})})})};RandomDefenseHistoryMenu.displayName="RandomDefenseHistoryMenu";const RandomDefenseHistoryMenu_RandomDefenseHistoryMenu=RandomDefenseHistoryMenu},"./src/components/common/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Checkbox_Checkbox});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox_Checkbox=props=>{const{isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Checkbox,{checked:isChecked,"aria-label":ariaLabel,onChange}),(0,jsx_runtime.jsx)(FakeVisualCheckbox,{$isChecked:isChecked})]})};Checkbox_Checkbox.displayName="Checkbox";const common_Checkbox_Checkbox=Checkbox_Checkbox;try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/common/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Switch_Switch});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch_Switch=props=>{const{size,isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{$size:size,children:[(0,jsx_runtime.jsx)(Switch,{checked:isChecked,"aria-label":ariaLabel,onChange,value:""}),(0,jsx_runtime.jsx)(FakeVisualSwitch,{$isChecked:isChecked,children:(0,jsx_runtime.jsx)(Handle,{$size:size,$isChecked:isChecked})})]})};Switch_Switch.displayName="Switch";const common_Switch_Switch=Switch_Switch;try{Switch_Switch.displayName="Switch",Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Switch/Switch.tsx#Switch"]={docgenInfo:Switch_Switch.__docgenInfo,name:"Switch",path:"src/components/common/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sections/AppearanceAndDataManageSection/AppearanceAndDataManageSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppearanceAndDataManageSection_AppearanceAndDataManageSection});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.section`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HiderSection=props=>{const{show}=props;return show?(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(AlgorithmHiderMenu,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"알고 있는 알고리즘 관리하기",iconSrc:(0,jsx_runtime.jsx)(svg.WI,{})}),(0,jsx_runtime.jsx)(components_AlgorithmPool,{})]}),(0,jsx_runtime.jsx)(HiderMenu,{})]}):null},HiderSection_HiderSection=HiderSection;try{HiderSection.displayName="HiderSection",HiderSection.__docgenInfo={description:"",displayName:"HiderSection",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sections/HiderSection/HiderSection.tsx#HiderSection"]={docgenInfo:HiderSection.__docgenInfo,name:"HiderSection",path:"src/components/sections/HiderSection/HiderSection.tsx#HiderSection"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sections/RandomDefenseSection/RandomDefenseSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RandomDefenseSection_RandomDefenseSection});var RandomDefenseCreateMenu=__webpack_require__("./src/components/RandomDefenseCreateMenu/index.ts"),QuickSlotMenu=__webpack_require__("./src/components/QuickSlotMenu/index.ts"),useRandomDefenseSection=__webpack_require__("./src/hooks/useRandomDefenseSection.ts");const components_RandomDefenseHistoryMenu=__webpack_require__("./src/components/RandomDefenseHistoryMenu/RandomDefenseHistoryMenu.tsx").A;var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.section`
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
//# sourceMappingURL=components-core-Options-Options-stories.e29bffdd.iframe.bundle.js.map