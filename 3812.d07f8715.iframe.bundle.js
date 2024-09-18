"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[3812],{"./src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HotkeySwitcher_HotkeySwitcher});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  height: 26px;
`,SwitchButton=styled_components_browser_esm.I4.button`
  width: 26px;
  height: 26px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.GOLD};

    transition: 0.2s;
  }

  & > svg:hover {
    color: ${({theme})=>theme.color.LEMON};

    transform: scale(1.1);
  }
`;var Text=__webpack_require__("./src/components/common/Text/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isMac=-1!==navigator.userAgent.toLowerCase().indexOf("mac"),HotkeySwitcher=props=>{const{selectedSlotNo,hotkey,onClick}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:`단축키: ${"Alt"===hotkey?isMac?"Option":"Alt":"F2"} + ${selectedSlotNo}`}),(0,jsx_runtime.jsx)(SwitchButton,{"aria-label":"단축키 전환하기",onClick,children:(0,jsx_runtime.jsx)(svg.A$,{})})]})};HotkeySwitcher.displayName="HotkeySwitcher";const HotkeySwitcher_HotkeySwitcher=HotkeySwitcher;try{HotkeySwitcher.displayName="HotkeySwitcher",HotkeySwitcher.__docgenInfo={description:"",displayName:"HotkeySwitcher",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"number"}},hotkey:{defaultValue:null,description:"",name:"hotkey",required:!0,type:{name:"enum",value:[{value:'"Alt"'},{value:'"F2"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx#HotkeySwitcher"]={docgenInfo:HotkeySwitcher.__docgenInfo,name:"HotkeySwitcher",path:"src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx#HotkeySwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuickSlotMenu/QuickSlotMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>QuickSlotMenu_QuickSlotMenu});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`,SlotNoPanel=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 10px;

  height: 26px;
  margin-bottom: 12px;
`,SlotControlPanel=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;

  height: 32px;
  margin-top: 4px;
`;var NamedFrame=__webpack_require__("./src/components/common/NamedFrame/index.ts");const QuickSlotMenu_SlotPagination=__webpack_require__("./src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx").A;const QuickSlotMenu_SlotInfo=__webpack_require__("./src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx").A;const QuickSlotMenu_HotkeySwitcher=__webpack_require__("./src/components/QuickSlotMenu/HotkeySwitcher/HotkeySwitcher.tsx").A;var IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const SLOT_NOS=[1,2,3,4,5,6,7,8,9,0],randomDefense_useQuickSlotMenu=params=>{const{quickSlotsInfo,isLoaded,onHotkeyChange,onSlotChange,onSlotDelete,onSlotNoChange}=params,{selectedSlotNo,slots,hotkey}=quickSlotsInfo,[shouldEditModalShow,setShouldEditModalShow]=(0,react.useState)(!1),closeEditModal=()=>{setShouldEditModalShow(!1)};return{slot:slots[selectedSlotNo],selectedSlotNo,hotkey,occupiedSlotNos:(()=>{const occupiedSlotNos=[];return SLOT_NOS.forEach((slotNo=>{slots[slotNo].isEmpty||occupiedSlotNos.push(slotNo)})),occupiedSlotNos})(),shouldEditModalShow,switchHotkey:()=>{isLoaded&&onHotkeyChange("Alt"===hotkey?"F2":"Alt")},openEditModal:()=>{setShouldEditModalShow(!0)},closeEditModal,updateSlot:(title,query)=>{if(!isLoaded)return;const finalTitle=""===title.trim()?`추첨 ${selectedSlotNo}`:title;onSlotChange(finalTitle,query),closeEditModal()},deleteSlot:()=>{isLoaded&&confirm(`${selectedSlotNo}번 슬롯에 저장되어 있는 쿼리를 삭제할까요?`)&&onSlotDelete()},setSelectedSlotNo:slotNo=>{onSlotNoChange(slotNo)}}};const QuickSlotMenu_SlotEditModal=__webpack_require__("./src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx").A;const common_Loading=__webpack_require__("./src/components/common/Loading/Loading.tsx").A;var useModal=__webpack_require__("./src/hooks/useModal.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),theme=__webpack_require__("./src/styles/theme.ts"),SimpleModal=__webpack_require__("./src/components/common/SimpleModal/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const QuickSlotMenu=props=>{const{isLoaded}=props,{activeModalName,openModal,closeModal}=(0,useModal.A)(),{slot,selectedSlotNo,hotkey,occupiedSlotNos,shouldEditModalShow,setSelectedSlotNo,switchHotkey,openEditModal,closeEditModal,updateSlot,deleteSlot}=randomDefense_useQuickSlotMenu(props);return(0,jsx_runtime.jsxs)(NamedFrame.A,{width:"650px",height:"168px",padding:"10px",title:"퀵 슬롯",children:[isLoaded?(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(SlotNoPanel,{children:[(0,jsx_runtime.jsx)(QuickSlotMenu_SlotPagination,{selectedSlotNo,occupiedSlotNos,onChange:setSelectedSlotNo}),(0,jsx_runtime.jsx)(QuickSlotMenu_HotkeySwitcher,{selectedSlotNo,hotkey,onClick:switchHotkey})]}),(0,jsx_runtime.jsx)(QuickSlotMenu_SlotInfo,{...slot}),(0,jsx_runtime.jsxs)(SlotControlPanel,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"쿼리 복사",size:"medium",color:theme.w.color.LIGHT_GRAY,iconSrc:(0,jsx_runtime.jsx)(svg.Td,{}),disabled:slot.isEmpty,ariaLabel:"쿼리 클립보드에 복사하기",onClick:()=>{slot.isEmpty||(navigator.clipboard.writeText(slot.query),openModal("copiedQuery"))}}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"수정",size:"medium",color:theme.w.color.SKY_BLUE,iconSrc:(0,jsx_runtime.jsx)(svg.qU,{}),disabled:slot.isEmpty,ariaLabel:"슬롯 수정하기",onClick:openEditModal}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"삭제",size:"medium",color:theme.w.color.RED,iconSrc:(0,jsx_runtime.jsx)(svg.uc,{}),disabled:slot.isEmpty,ariaLabel:"슬롯 삭제하기",onClick:deleteSlot})]})]}):(0,jsx_runtime.jsx)(common_Loading,{}),(0,jsx_runtime.jsx)(QuickSlotMenu_SlotEditModal,{title:slot.isEmpty?"":slot.title,query:slot.isEmpty?"":slot.query,open:shouldEditModalShow,onClose:closeEditModal,onSlotChange:updateSlot}),(0,jsx_runtime.jsx)(SimpleModal.A,{actionType:"confirm",width:"350px",height:"auto",open:"copiedQuery"===activeModalName,onClose:closeModal,title:"쿼리 복사 완료",message:"쿼리를 클립보드에 복사했어요!"})]})};QuickSlotMenu.displayName="QuickSlotMenu";const QuickSlotMenu_QuickSlotMenu=QuickSlotMenu;try{QuickSlotMenu.displayName="QuickSlotMenu",QuickSlotMenu.__docgenInfo={description:"",displayName:"QuickSlotMenu",props:{quickSlotsInfo:{defaultValue:null,description:"",name:"quickSlotsInfo",required:!0,type:{name:"QuickSlotsResponse"}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onHotkeyChange:{defaultValue:null,description:"",name:"onHotkeyChange",required:!0,type:{name:"(hotkey: Hotkey) => void"}},onSlotChange:{defaultValue:null,description:"",name:"onSlotChange",required:!0,type:{name:"(title: string, query: string) => void"}},onSlotDelete:{defaultValue:null,description:"",name:"onSlotDelete",required:!0,type:{name:"() => void"}},onSlotNoChange:{defaultValue:null,description:"",name:"onSlotNoChange",required:!0,type:{name:"(slotNo: SlotNo) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/QuickSlotMenu.tsx#QuickSlotMenu"]={docgenInfo:QuickSlotMenu.__docgenInfo,name:"QuickSlotMenu",path:"src/components/QuickSlotMenu/QuickSlotMenu.tsx#QuickSlotMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SlotEditModal_SlotEditModal});var theme=__webpack_require__("./src/styles/theme.ts"),Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),Textarea=__webpack_require__("./src/components/common/Textarea/index.ts"),Input=__webpack_require__("./src/components/common/Input/index.ts"),ErrorText=__webpack_require__("./src/components/common/ErrorText/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const randomDefense_useSlotEditModal=params=>{const{initTitle,initQuery,onSlotChange}=params,[title,setTitle]=(0,react.useState)(initTitle),[query,setQuery]=(0,react.useState)(initQuery),[errorMessage,setErrorMessage]=(0,react.useState)(""),[errorElementName,setErrorElementName]=(0,react.useState)(void 0),titleRef=(0,react.useRef)(null),queryRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{setTitle(initTitle),setQuery(initQuery),setErrorMessage(""),setErrorElementName(void 0)}),[initTitle,initQuery]);return{title,query,errorMessage,isTitleElementHasErrors:"title"===errorElementName,isQueryElementHasErrors:"query"===errorElementName,setQuery,setTitle,submitSlotInfo:()=>{const slotValidationResult=((title,query)=>title.length>30?{isValid:!1,errorMessage:"추첨 이름의 길이가 너무 길어요. 30자 이하가 되도록 줄여 주세요.",focusElementName:"title"}:""===query.trim()?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"query"}:query.length>300?{isValid:!1,errorMessage:"쿼리의 길이가 너무 길어요. 300자 이하가 되도록 줄여 주세요.",focusElementName:"query"}:{isValid:!0})(title,query);if(slotValidationResult.isValid)return onSlotChange(title,query),void setErrorMessage("");const titleElement=titleRef.current,queryElement=queryRef.current,{focusElementName}=slotValidationResult;"title"===focusElementName&&(null==titleElement||titleElement.select()),"query"===focusElementName&&(null==queryElement||queryElement.select()),setErrorElementName(focusElementName),setErrorMessage(slotValidationResult.errorMessage)},titleRef,queryRef}};var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Form=styled_components_browser_esm.I4.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 600px;
  max-width: 100%;
  height: 270px;
`,Label=styled_components_browser_esm.I4.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SlotEditModal=props=>{const{title:initTitle,query:initQuery,open,onClose,onSlotChange}=props,{title,query,errorMessage,isTitleElementHasErrors,isQueryElementHasErrors,setQuery,setTitle,submitSlotInfo,titleRef,queryRef}=randomDefense_useSlotEditModal({initTitle,initQuery,onSlotChange});return(0,jsx_runtime.jsxs)(Modal.A,{title:"추첨 수정",open,onClose,children:[(0,jsx_runtime.jsxs)(Form,{children:[(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"추첨 이름"}),(0,jsx_runtime.jsx)(Input.A,{type:"text",width:"100%",name:"title",value:title,ref:titleRef,textAlign:"left",maxLength:30,placeholder:"0 ~ 30자",hasError:isTitleElementHasErrors,ariaLabel:"새로운 추첨 이름을 입력해주세요",onChange:event=>{setTitle(event.target.value)}})]}),(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:"쿼리"}),(0,jsx_runtime.jsx)(Textarea.A,{width:"100%",height:"150px",name:"query",value:query,ref:queryRef,maxLength:300,placeholder:"1 ~ 300자",hasError:isQueryElementHasErrors,ariaLabel:"새로운 쿼리를 입력해주세요",onChange:event=>{setQuery(event.target.value)}})]}),(0,jsx_runtime.jsx)(ErrorText.A,{fontSize:"14px",errorMessage})]}),(0,jsx_runtime.jsxs)(Modal.Y,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:submitSlotInfo})]})]})};SlotEditModal.displayName="SlotEditModal";const SlotEditModal_SlotEditModal=SlotEditModal;try{SlotEditModal.displayName="SlotEditModal",SlotEditModal.__docgenInfo={description:"",displayName:"SlotEditModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSlotChange:{defaultValue:null,description:"",name:"onSlotChange",required:!0,type:{name:"(title: string, query: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx#SlotEditModal"]={docgenInfo:SlotEditModal.__docgenInfo,name:"SlotEditModal",path:"src/components/QuickSlotMenu/SlotEditModal/SlotEditModal.tsx#SlotEditModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SlotInfo_SlotInfo});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,NamePanel=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,QueryPanel=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,TextLabel=styled_components_browser_esm.I4.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme,$backgroundColor})=>"gold"===$backgroundColor?theme.color.GOLD:theme.color.WHITE};

  color: ${({theme})=>theme.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,NameEmptyText=styled_components_browser_esm.I4.p`
  color: ${({theme})=>theme.color.LIGHT_GRAY};
  font-size: 16px;
`,QueryEmptyText=styled_components_browser_esm.I4.p`
  color: ${({theme})=>theme.color.LIGHT_GRAY};
  font-size: 14px;
`,textWrapper=styled_components_browser_esm.AH`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,NameTextWrapper=styled_components_browser_esm.I4.div`
  ${textWrapper}

  white-space: nowrap;
`,QueryTextWrapper=styled_components_browser_esm.I4.div`
  ${textWrapper}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;var Text=__webpack_require__("./src/components/common/Text/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SlotInfo=props=>(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(NamePanel,{children:[(0,jsx_runtime.jsx)(TextLabel,{$backgroundColor:"gold",children:"추첨 이름"}),(0,jsx_runtime.jsx)(NameTextWrapper,{children:props.isEmpty?(0,jsx_runtime.jsx)(NameEmptyText,{children:"(비어 있음)"}):(0,jsx_runtime.jsx)(Text.A,{type:"primary",fontSize:"16px",children:props.title})})]}),(0,jsx_runtime.jsxs)(QueryPanel,{children:[(0,jsx_runtime.jsx)(TextLabel,{$backgroundColor:"white",children:"쿼리"}),(0,jsx_runtime.jsx)(QueryTextWrapper,{children:props.isEmpty?(0,jsx_runtime.jsx)(QueryEmptyText,{children:"(비어 있음)"}):(0,jsx_runtime.jsx)(Text.A,{type:"code",fontSize:"13px",children:props.query})})]})]});SlotInfo.displayName="SlotInfo";const SlotInfo_SlotInfo=SlotInfo;try{SlotInfo.displayName="SlotInfo",SlotInfo.__docgenInfo={description:"",displayName:"SlotInfo",props:{isEmpty:{defaultValue:null,description:"",name:"isEmpty",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx#SlotInfo"]={docgenInfo:SlotInfo.__docgenInfo,name:"SlotInfo",path:"src/components/QuickSlotMenu/SlotInfo/SlotInfo.tsx#SlotInfo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SlotPagination_SlotPagination});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`,CircleSlotButtonWrapper=styled_components_browser_esm.I4.li`
  width: 26px;
  height: 26px;
`,CircleSlotButton=styled_components_browser_esm.I4.button`
  width: 100%;
  height: 100%;

  border: 2px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme})=>theme.color.DARK_BROWN};

  color: ${({theme})=>theme.color.LIGHTER_BROWN};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({theme,$isSelected,$isOccupied})=>$isSelected?styled_components_browser_esm.AH`
        border-color: ${theme.color.LEMON};
        background-color: ${theme.color.LEMON};
        outline: 3px solid ${theme.color.LEMON}70;

        color: ${theme.color.DARK_BROWN};
      `:$isOccupied?styled_components_browser_esm.AH`
        border-color: ${theme.color.GOLD};

        color: ${theme.color.GOLD};
      `:void 0}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SLOT_NOS=[1,2,3,4,5,6,7,8,9,0],SlotPagination=props=>{const{selectedSlotNo,occupiedSlotNos,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:SLOT_NOS.map((slotNo=>(0,jsx_runtime.jsx)(CircleSlotButtonWrapper,{children:(0,jsx_runtime.jsx)(CircleSlotButton,{$isSelected:slotNo===selectedSlotNo,$isOccupied:occupiedSlotNos.includes(slotNo),onClick:()=>{onChange(slotNo)},"aria-label":`${slotNo}번 슬롯 선택하기. ${slotNo===selectedSlotNo?"이미 선택되어 있는 슬롯입니다":""}`,children:slotNo})},slotNo)))})};SlotPagination.displayName="SlotPagination";const SlotPagination_SlotPagination=SlotPagination;try{SlotPagination.displayName="SlotPagination",SlotPagination.__docgenInfo={description:"",displayName:"SlotPagination",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},occupiedSlotNos:{defaultValue:null,description:"",name:"occupiedSlotNos",required:!0,type:{name:"SlotNo[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(slotNo: SlotNo) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx#SlotPagination"]={docgenInfo:SlotPagination.__docgenInfo,name:"SlotPagination",path:"src/components/QuickSlotMenu/SlotPagination/SlotPagination.tsx#SlotPagination"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.I4.button`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=props=>{const{name,size,width,color,iconSrc,ariaLabel,...rest}=props;return(0,jsx_runtime.jsxs)(Button,{$size:size,$width:width,$color:color,"aria-label":ariaLabel,...rest,children:[iconSrc&&("string"==typeof iconSrc?(0,jsx_runtime.jsx)(IconImage,{src:iconSrc,alt:name,$size:size}):(0,jsx_runtime.jsx)(IconWrapper,{$size:size,$color:color,children:iconSrc})),(0,jsx_runtime.jsx)(Text,{$size:size,children:name})]})};IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/common/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/IconButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/IconButton/IconButton.tsx").A},"./src/components/common/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Loading_Loading});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spin=styled_components_browser_esm.i7`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,Container=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme})=>theme.color.GOLD};

    animation: ${spin} 2s forwards infinite linear;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=()=>(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(svg.mP,{})});Loading.displayName="Loading";const Loading_Loading=Loading},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Modal_ModalActionButtonsContainer,A:()=>common_Modal_Modal});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleModal=props=>{const{title,width,height,open,message,actionType}=props;return(0,jsx_runtime.jsxs)(Modal.A,{title,open,onClose:()=>{"yesNo"===actionType?props.onNoSelect():props.onClose()},children:[(0,jsx_runtime.jsx)(ContentContainer,{$width:width,$height:height,children:(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:message})}),(0,jsx_runtime.jsx)(Modal.Y,{children:"confirm"===actionType?(0,jsx_runtime.jsx)(ConfirmButton,{onClose:props.onClose}):"cancelConfirm"===actionType?(0,jsx_runtime.jsx)(CancelConfirmButtons,{onClose:props.onClose,onConfirm:props.onConfirm}):(0,jsx_runtime.jsx)(YesNoButtons,{onYesSelect:props.onYesSelect,onNoSelect:props.onNoSelect})})]})};SimpleModal.displayName="SimpleModal";const ConfirmButton=props=>{const{onClose}=props;return(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onClose,autoFocus:!0})};ConfirmButton.displayName="ConfirmButton";const CancelConfirmButtons=props=>{const{onClose,onConfirm}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"확인",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:onConfirm})]})},YesNoButtons=props=>{const{onYesSelect,onNoSelect}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:(0,jsx_runtime.jsx)(svg.C1,{}),color:theme.w.color.LIME,disabled:!1,ariaLabel:"예",onClick:onYesSelect}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"아니요",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.RED,disabled:!1,ariaLabel:"아니요",onClick:onNoSelect})]})},SimpleModal_SimpleModal=SimpleModal;try{SimpleModal.displayName="SimpleModal",SimpleModal.__docgenInfo={description:"",displayName:"SimpleModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actionType:{defaultValue:null,description:"",name:"actionType",required:!0,type:{name:"enum",value:[{value:'"confirm"'},{value:'"cancelConfirm"'},{value:'"yesNo"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) | (() => void)"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onYesSelect:{defaultValue:null,description:"",name:"onYesSelect",required:!0,type:{name:"() => void"}},onNoSelect:{defaultValue:null,description:"",name:"onNoSelect",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"]={docgenInfo:SimpleModal.__docgenInfo,name:"SimpleModal",path:"src/components/common/SimpleModal/SimpleModal.tsx#SimpleModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/SimpleModal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/common/SimpleModal/SimpleModal.tsx").A},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[activeModalName,setActiveModalName]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return{activeModalName,openModal:modalName=>{setActiveModalName(modalName)},closeModal:()=>{setActiveModalName(null)}}}}}]);
//# sourceMappingURL=3812.d07f8715.iframe.bundle.js.map