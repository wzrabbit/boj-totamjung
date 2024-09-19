"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[9335],{"./src/components/AlgorithmPool/AlgorithmPool.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/AlgorithmPool",component:__webpack_require__("./src/components/AlgorithmPool/AlgorithmPool.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`AlgorithmPool`는 사용자가 **알고 있는 알고리즘의 목록을 관리**할 수 있는 기능을 제공하기 위한 컴포넌트입니다."}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmList_AlgorithmList});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
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
`;const AlgorithmPool_AlgorithmList=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx").A;var SimpleModal=__webpack_require__("./src/components/common/SimpleModal/index.ts"),getSearchResults=__webpack_require__("./src/domains/algorithm/getSearchResults.ts"),algorithmInfos=__webpack_require__("./src/constants/algorithmInfos.ts"),react=__webpack_require__("./node_modules/react/index.js"),checkedAlgorithmsHandler=__webpack_require__("./src/domains/dataHandlers/checkedAlgorithmsHandler.ts");const algorithm_useAlgorithmPool=()=>{const[keyword,setKeyword]=(0,react.useState)(""),[checkedIds,setCheckedIds]=(0,react.useState)([]),[isLoaded,setIsLoaded]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const response=await(0,checkedAlgorithmsHandler.z)();setCheckedIds(response.checkedIds),setIsLoaded(!0)})()}),[]),(0,react.useEffect)((()=>{isLoaded&&(0,checkedAlgorithmsHandler.I)(checkedIds)}),[checkedIds]);return{keyword,items:(0,getSearchResults.p)(keyword),checkedIds,isLoaded,handleChangeKeyword:event=>{setKeyword(event.target.value)},toggleAlgorithm:id=>{if(checkedIds.includes(id)){const newCheckedIds=checkedIds.filter((checkedId=>checkedId!==id));return void setCheckedIds(newCheckedIds)}const newCheckedIds=[...checkedIds,id];setCheckedIds(newCheckedIds)},checkAllAlgorithms:()=>{setCheckedIds(Array.from({length:algorithmInfos.t}).map(((_,index)=>index+1)))},uncheckAllAlgorithms:()=>{setCheckedIds([])}}};var useModal=__webpack_require__("./src/hooks/useModal.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),png=__webpack_require__("./src/images/png/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmPool=()=>{const{keyword,items,checkedIds,isLoaded,handleChangeKeyword,toggleAlgorithm,checkAllAlgorithms,uncheckAllAlgorithms}=algorithm_useAlgorithmPool(),{activeModalName,openModal,closeModal}=(0,useModal.A)();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AlgorithmPanel,{children:isLoaded&&(0,jsx_runtime.jsx)(AlgorithmPool_AlgorithmList,{items,checkedIds,onChange:toggleAlgorithm})}),(0,jsx_runtime.jsxs)(ControlPanel,{children:[(0,jsx_runtime.jsxs)(SearchPanelContainer,{children:[(0,jsx_runtime.jsx)(SearchIconWrapper,{children:(0,jsx_runtime.jsx)(svg.WI,{})}),(0,jsx_runtime.jsx)(SearchInput,{placeholder:"검색어를 입력해 주세요...",value:keyword,onChange:handleChangeKeyword})]}),(0,jsx_runtime.jsxs)(CheckButtonPanel,{children:[(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:()=>{openModal("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.e_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 선택"})]}),(0,jsx_runtime.jsxs)(CheckButton,{type:"button",onClick:()=>{openModal("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[(0,jsx_runtime.jsx)(CheckButtonImage,{src:png.F_}),(0,jsx_runtime.jsx)(CheckButtonLabel,{children:"전체 해제"})]})]})]}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:"checkAll"===activeModalName,message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{checkAllAlgorithms(),closeModal()},onNoSelect:closeModal}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:"uncheckAll"===activeModalName,message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{uncheckAllAlgorithms(),closeModal()},onNoSelect:closeModal})]})};AlgorithmPool.displayName="AlgorithmPool";const AlgorithmPool_AlgorithmPool=AlgorithmPool},"./src/components/common/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Checkbox_Checkbox});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox_Checkbox=props=>{const{isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Checkbox,{checked:isChecked,"aria-label":ariaLabel,onChange}),(0,jsx_runtime.jsx)(FakeVisualCheckbox,{$isChecked:isChecked})]})};Checkbox_Checkbox.displayName="Checkbox";const common_Checkbox_Checkbox=Checkbox_Checkbox;try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/common/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({$width})=>$width||"auto"};
  height: ${({$size})=>"large"===$size?"40px":"32px"};
  padding: ${({$size})=>"large"===$size?"4px 6px":"2px 4px"};

  border: ${({$size,$color})=>"large"===$size?`3px solid ${$color}`:`2px solid ${$color}`};
  border-radius: ${({$size})=>"large"===$size?"6px":"4px"};
  background-color: transparent;

  color: ${({$color})=>$color};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 10px ${({$color})=>$color};
  }

  transition: 0.2s;
`,Text=styled_components_browser_esm.I4.span`
  font-size: ${({$size})=>"large"===$size?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,IconImage=styled_components_browser_esm.I4.img`
  width: ${({$size})=>"large"===$size?"30px":"24px"};
  height: ${({$size})=>"large"===$size?"30px":"24px"};

  object-fit: contain;
`,IconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: ${({$size})=>"large"===$size?"30px":"24px"};
  height: ${({$size})=>"large"===$size?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color})=>$color};
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=props=>{const{name,size,width,color,iconSrc,ariaLabel,...rest}=props;return(0,jsx_runtime.jsxs)(Button,{$size:size,$width:width,$color:color,"aria-label":ariaLabel,...rest,children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:name,$size:size}):(0,jsx_runtime.jsx)(IconWrapper,{$size:size,$color:color,children:iconSrc})),(0,jsx_runtime.jsx)(Text,{$size:size,children:name})]})};IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/common/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/IconButton/IconButton.tsx").A},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Modal_ModalActionButtonsContainer,A:()=>common_Modal_Modal});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,Backdrop=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(5px);
  animation: fadeIn 0.2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Modal=styled_components_browser_esm.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px ${({theme})=>theme.color.GOLD};
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,Header=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme})=>theme.color.DARK_BROWN};

  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,Title=styled_components_browser_esm.I4.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme})=>theme.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,CloseButton=styled_components_browser_esm.I4.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme})=>theme.color.GOLD};
  }
`,Body=styled_components_browser_esm.I4.div`
  padding: 16px;

  background-color: ${({theme})=>theme.color.BROWN};

  color: ${({theme})=>theme.color.WHITE};
  font-size: 16px;
`,ModalActionButtonsContainer=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme})=>theme.color.DARK_BROWN};
`;var react=__webpack_require__("./node_modules/react/index.js");const hooks_useEscKey=params=>{const{onEscKeyPress}=params,handleKeyPress=event=>{"Escape"===event.key&&onEscKeyPress()};(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyPress),()=>{window.removeEventListener("keydown",handleKeyPress)})),[onEscKeyPress])};var svg=__webpack_require__("./src/images/svg/index.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_Modal=props=>{const{title,open,onClose,children}=props;return hooks_useEscKey({onEscKeyPress:onClose}),open&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Backdrop,{onClick:onClose}),(0,jsx_runtime.jsxs)(Modal,{open,role:"dialog",children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"모달 닫기",children:(0,jsx_runtime.jsx)(svg.US,{})})]}),(0,jsx_runtime.jsx)(Body,{children})]})]}),document.body)},Modal_ModalActionButtonsContainer=props=>{const{children}=props;return(0,jsx_runtime.jsx)(ModalActionButtonsContainer,{children})};Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer";const common_Modal_Modal=Modal_Modal;try{Modal_ModalActionButtonsContainer.displayName="ModalActionButtonsContainer",Modal_ModalActionButtonsContainer.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"]={docgenInfo:Modal_ModalActionButtonsContainer.__docgenInfo,name:"ModalActionButtonsContainer",path:"src/components/common/Modal/Modal.tsx#ModalActionButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/common/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.Y});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Modal/Modal.tsx");const __WEBPACK_DEFAULT_EXPORT__=_Modal__WEBPACK_IMPORTED_MODULE_0__.A},"./src/components/common/SimpleModal/SimpleModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SimpleModal_SimpleModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),svg=__webpack_require__("./src/images/svg/index.ts");const ContentContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  width: ${({$width})=>$width};
  max-width: 100%;
  min-height: ${({$height})=>$height};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleModal=props=>{const{title,width,height,open,message,actionType}=props;return(0,jsx_runtime.jsxs)(Modal.A,{title,open,onClose:()=>{"yesNo"===actionType?props.onNoSelect():props.onClose()},children:[(0,jsx_runtime.jsx)(ContentContainer,{$width:width,$height:height,children:(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:message})}),(0,jsx_runtime.jsx)(Modal.Y,{children:"confirm"===actionType?(0,jsx_runtime.jsx)(ConfirmButton,{onClose:props.onClose}):"cancelConfirm"===actionType?(0,jsx_runtime.jsx)(CancelConfirmButtons,{onClose:props.onClose,onConfirm:props.onConfirm}):(0,jsx_runtime.jsx)(YesNoButtons,{onYesSelect:props.onYesSelect,onNoSelect:props.onNoSelect})})]})};SimpleModal.displayName="SimpleModal";const ConfirmButton=props=>{const{onClose}=props;return(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onClose,autoFocus:!0})};ConfirmButton.displayName="ConfirmButton";const CancelConfirmButtons=props=>{const{onClose,onConfirm}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onConfirm})]})},YesNoButtons=props=>{const{onYesSelect,onNoSelect}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.LIME,disabled:!1,ariaLabel:"예",onClick:onYesSelect}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"아니요",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.RED,disabled:!1,ariaLabel:"아니요",onClick:onNoSelect})]})},SimpleModal_SimpleModal=SimpleModal;try{SimpleModal.displayName="SimpleModal",SimpleModal.__docgenInfo={description:"",displayName:"SimpleModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actionType:{defaultValue:null,description:"",name:"actionType",required:!0,type:{name:"enum",value:[{value:'"confirm"'},{value:'"cancelConfirm"'},{value:'"yesNo"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) | (() => void)"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onYesSelect:{defaultValue:null,description:"",name:"onYesSelect",required:!0,type:{name:"() => void"}},onNoSelect:{defaultValue:null,description:"",name:"onNoSelect",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"]={docgenInfo:SimpleModal.__docgenInfo,name:"SimpleModal",path:"src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SimpleModal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/SimpleModal/SimpleModal.tsx").A},"./src/components/common/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Text_Text});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Text=styled_components_browser_esm.I4.p`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text=props=>{const{type,fontSize,textAlign="left",children}=props;return(0,jsx_runtime.jsx)(Text,{$type:type,$fontSize:fontSize,$textAlign:textAlign,children})};Text_Text.displayName="Text";const common_Text_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/common/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/Text/Text.tsx").A},"./src/constants/commands.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AQ:()=>STORAGE_KEY,Lo:()=>COMMANDS});const COMMANDS={OPEN_OPTIONS_PAGE:"openOptionsPage",FETCH_CHECKED_ALGORITHM_IDS:"fetchCheckedAlgorithmIds",SAVE_CHECKED_ALGORITHM_IDS:"saveCheckedAlgorithmIds",FETCH_RANDOM_DEFENSE_HISTORY:"fetchRandomDefenseHistory",SAVE_RANDOM_DEFENSE_HISTORY:"saveRandomDefenseHistory",FETCH_QUICK_SLOTS:"fetchQuickSlots",SAVE_QUICK_SLOTS:"saveQuickSlots",FETCH_TOTAMJUNG_THEME:"fetchTotamjungTheme",SAVE_TOTAMJUNG_THEME:"saveTotamjungTheme",FETCH_HIDER_OPTIONS:"fetchHiderOptions",SAVE_HIDER_OPTIONS:"saveHiderOptions",FETCH_FONT_NO:"fetchFontNo",SAVE_FONT_NO:"saveFontNo",FETCH_TIMERS:"fetchTimers",SAVE_TIMERS:"saveTimers",FETCH_OPTIONS_DATA:"fetchOptionsData",GET_REMAINING_LOCK_TIME:"saveAndGetRemainingLockTime",ADD_SINGLE_TIMER:"addSingleTimer",REMOVE_SINGLE_TIMER:"removeSingleTimer",IS_USER_SOLVED_PROBLEM:"isUserSolvedProblem",GET_RANDOM_DEFENSE_RESULT:"getRandomDefenseResult",APPEND_RANDOM_DEFENSE_HISTORY_INFO:"appendRandomDefenseHistoryInfo"},STORAGE_KEY={DATA_VERSION:"dataVersion",CHECKED_ALGORITHM_IDS:"checkedAlgorithmIds",QUICK_SLOTS:"quickSlots",TOTAMJUNG_THEME:"totamjungTheme",HIDER_OPTIONS:"hiderOptions",RANDOM_DEFENSE_HISTORY:"randomDefenseHistory",IS_TIER_HIDDEN:"isTierHidden",FONT_NO:"fontNo",TIMERS:"timers"}},"./src/constants/defaultValues.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fj:()=>DEFAULT_CHECKED_ALGORITHM_IDS,Gv:()=>DEFAULT_HIDER_OPTIONS,Q6:()=>DEFAULT_QUICK_SLOTS_RESPONSE,nF:()=>DEFAULT_IS_TIER_HIDDEN,o:()=>DEFAULT_INITIAL_DATA,w$:()=>DEFAULT_RANDOM_DEFENSE_HISTORY});var _commands__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/commands.ts");const DEFAULT_CHECKED_ALGORITHM_IDS=[1,2],DEFAULT_QUICK_SLOTS={1:{isEmpty:!0},2:{isEmpty:!0},3:{isEmpty:!0},4:{isEmpty:!0},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!0},9:{isEmpty:!0},0:{isEmpty:!0}},DEFAULT_QUICK_SLOTS_RESPONSE={hotkey:"Alt",selectedSlotNo:1,slots:DEFAULT_QUICK_SLOTS},DEFAULT_HIDER_OPTIONS={problemTagLockDuration:{hours:0,minutes:20},shouldHideTier:!1,shouldWarnHighTier:!1,warnTier:1,algorithmHiderUsage:"click",problemTagLockUsage:"click"},DEFAULT_IS_TIER_HIDDEN=!1,DEFAULT_RANDOM_DEFENSE_HISTORY=[],DEFAULT_INITIAL_DATA={[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.DATA_VERSION]:"v1.2",[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.CHECKED_ALGORITHM_IDS]:DEFAULT_CHECKED_ALGORITHM_IDS,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.QUICK_SLOTS]:DEFAULT_QUICK_SLOTS_RESPONSE,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.TOTAMJUNG_THEME]:"none",[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.HIDER_OPTIONS]:DEFAULT_HIDER_OPTIONS,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.RANDOM_DEFENSE_HISTORY]:DEFAULT_RANDOM_DEFENSE_HISTORY,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.IS_TIER_HIDDEN]:DEFAULT_IS_TIER_HIDDEN,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.FONT_NO]:0,[_commands__WEBPACK_IMPORTED_MODULE_0__.AQ.TIMERS]:[]}},"./src/domains/algorithm/getSearchResults.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>getSearchResults});var _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/algorithmInfos.ts");const trimWord=word=>word.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),getSearchResults=keyword=>{const trimmedKeyword=trimWord(keyword),searchResults=[];return _constants_algorithmInfos__WEBPACK_IMPORTED_MODULE_0__.u.forEach((({id,name,englishName,tag,alias})=>{const acceptableWords=[name,englishName,tag,...alias].map((word=>trimWord(word)));(""===trimmedKeyword||acceptableWords.some((word=>-1!==word.indexOf(trimmedKeyword))))&&searchResults.push({id,name})})),searchResults}},"./src/domains/dataHandlers/checkedAlgorithmsHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>fetchCheckedAlgorithmIds,I:()=>saveCheckedAlgorithmIds});var commands=__webpack_require__("./src/constants/commands.ts"),checkedAlgorithmIdsValidator=__webpack_require__("./src/domains/dataHandlers/validators/checkedAlgorithmIdsValidator.ts"),defaultValues=__webpack_require__("./src/constants/defaultValues.ts");const fetchCheckedAlgorithmIds=async()=>{const sanitizedAlgorithmIds=(checkedAlgorithmIds=>Array.isArray(checkedAlgorithmIds)?checkedAlgorithmIds.filter((value=>"number"==typeof value&&!isNaN(value)&&value%1==0&&value>=1)):defaultValues.Fj)((await chrome.storage.local.get(commands.AQ.CHECKED_ALGORITHM_IDS))[commands.AQ.CHECKED_ALGORITHM_IDS]);return{checkedIds:sanitizedAlgorithmIds}},saveCheckedAlgorithmIds=checkedAlgorithmIds=>{(0,checkedAlgorithmIdsValidator.v)(checkedAlgorithmIds)&&chrome.storage.local.set({[commands.AQ.CHECKED_ALGORITHM_IDS]:checkedAlgorithmIds})}},"./src/domains/dataHandlers/validators/checkedAlgorithmIdsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>isValidCheckedAlgorithmIdsResponse,v:()=>isValidCheckedAlgorithmIds});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isValidCheckedAlgorithmIds=data=>!!Array.isArray(data)&&data.every((value=>"number"==typeof value&&!isNaN(value)&&value%1==0&&value>=1)),isValidCheckedAlgorithmIdsResponse=data=>!(!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)||!("checkedIds"in data))&&isValidCheckedAlgorithmIds(data.checkedIds)},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[activeModalName,setActiveModalName]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return{activeModalName,openModal:modalName=>{setActiveModalName(modalName)},closeModal:()=>{setActiveModalName(null)}}}},"./src/images/png/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e_:()=>all_checked_namespaceObject,F_:()=>all_unchecked_namespaceObject,jr:()=>bug_namespaceObject,w6:()=>guidebook_button_namespaceObject,Rm:()=>hidden_tier_badge_namespaceObject,$T:()=>info_button_namespaceObject,XR:()=>lock_with_clock_namespaceObject,H3:()=>logo_square_namespaceObject,uj:()=>settings_title_namespaceObject,e:()=>totamjung_namespaceObject});const all_checked_namespaceObject=__webpack_require__.p+"static/media/all-checked.202b1c06.png",all_unchecked_namespaceObject=__webpack_require__.p+"static/media/all-unchecked.36d4a64c.png",lock_with_clock_namespaceObject=__webpack_require__.p+"static/media/lock-with-clock.523093d4.png",hidden_tier_badge_namespaceObject=__webpack_require__.p+"static/media/hidden-tier-badge.52045d37.png",settings_title_namespaceObject=__webpack_require__.p+"static/media/settings-title.e0051888.png",guidebook_button_namespaceObject=__webpack_require__.p+"static/media/guidebook-button.1af2254a.png",info_button_namespaceObject=__webpack_require__.p+"static/media/info-button.b89374dc.png",totamjung_namespaceObject=__webpack_require__.p+"static/media/totamjung.d0c8aa44.png",logo_square_namespaceObject=__webpack_require__.p+"static/media/logo-square.7625446d.png",bug_namespaceObject=__webpack_require__.p+"static/media/bug.66b34cbf.png"},"./src/types/typeGuards.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gv:()=>isObject,H9:()=>isNumericArray,Lq:()=>isTierWithoutNotRatable,br:()=>isRatedTier,hj:()=>isNumericObject,hz:()=>isIsoString});const isObject=data=>"object"==typeof data&&null!==data,isNumericObject=data=>isObject(data)&&Object.keys(data).every((key=>!isNaN(Number(key)))),isNumericArray=data=>Array.isArray(data)&&data.every((value=>"number"==typeof value)),isIsoString=data=>"string"==typeof data&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),isTier=data=>"number"==typeof data&&data%1==0&&data>=0&&data<=31,isTierWithoutNotRatable=data=>isTier(data)&&31!==data,isRatedTier=data=>isTier(data)&&0!==data&&31!==data}}]);
//# sourceMappingURL=components-AlgorithmPool-AlgorithmPool-stories.b6b30619.iframe.bundle.js.map