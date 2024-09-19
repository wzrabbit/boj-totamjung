"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[4044],{"./src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DataFileUploadButton_DataFileUploadButton});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: block;
  width: 270px;
`,FakeUploadButton=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme})=>theme.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme})=>theme.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme})=>theme.color.LIME};
  }
`,UploadIconWrapper=styled_components_browser_esm.I4.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme})=>theme.color.LIME};
  }
`,Text=styled_components_browser_esm.I4.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme})=>theme.color.LIME};
`,UploadInput=styled_components_browser_esm.I4.input`
  display: none;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DataFileUploadButton=props=>{const{onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(FakeUploadButton,{role:"button",children:[(0,jsx_runtime.jsx)(UploadIconWrapper,{children:(0,jsx_runtime.jsx)(svg.f2,{})}),(0,jsx_runtime.jsx)(Text,{children:"설정 데이터 업로드"})]}),(0,jsx_runtime.jsx)(UploadInput,{type:"file",accept:".ttj",onClick:event=>{event.currentTarget.value=""},onChange})]})};DataFileUploadButton.displayName="DataFileUploadButton";const DataFileUploadButton_DataFileUploadButton=DataFileUploadButton;try{DataFileUploadButton.displayName="DataFileUploadButton",DataFileUploadButton.__docgenInfo={description:"",displayName:"DataFileUploadButton",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx#DataFileUploadButton"]={docgenInfo:DataFileUploadButton.__docgenInfo,name:"DataFileUploadButton",path:"src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx#DataFileUploadButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsDataManageMenu/OptionsDataManageMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsDataManageMenu_OptionsDataManageMenu});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`;const OptionsDataManageMenu_OptionsDataResetModal=__webpack_require__("./src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx").A;const OptionsDataManageMenu_OptionsDataUploadModal=__webpack_require__("./src/components/OptionsDataManageMenu/OptionsDataUploadModal/OptionsDataUploadModal.tsx").A;var MenuTitle=__webpack_require__("./src/components/MenuTitle/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),SimpleModal=__webpack_require__("./src/components/common/SimpleModal/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),commands=__webpack_require__("./src/constants/commands.ts"),defaultValues=(__webpack_require__("./src/domains/dataHandlers/checkedAlgorithmsHandler.ts"),__webpack_require__("./src/constants/defaultValues.ts"));__webpack_require__("./src/domains/dataHandlers/totamjungThemeDataHandler.ts"),__webpack_require__("./src/domains/dataHandlers/hiderOptionsDataHandler.ts"),__webpack_require__("./src/domains/dataHandlers/randomDefenseHistoryDataHandler.ts"),__webpack_require__("./src/domains/dataHandlers/fontNoDataHandler.ts");var checkedAlgorithmIdsValidator=__webpack_require__("./src/domains/dataHandlers/validators/checkedAlgorithmIdsValidator.ts"),quickSlotsValidator=__webpack_require__("./src/domains/dataHandlers/validators/quickSlotsValidator.ts"),totamjungThemeValidator=__webpack_require__("./src/domains/dataHandlers/validators/totamjungThemeValidator.ts"),hiderOptionsValidator=__webpack_require__("./src/domains/dataHandlers/validators/hiderOptionsValidator.ts"),randomDefenseHistoryValidator=__webpack_require__("./src/domains/dataHandlers/validators/randomDefenseHistoryValidator.ts"),fontNoValidator=__webpack_require__("./src/domains/dataHandlers/validators/fontNoValidator.ts"),typeGuards=__webpack_require__("./src/types/typeGuards.ts");const isTimersValidator_isTimers=data=>!!Array.isArray(data)&&(Array.isArray(data)&&data.every((item=>isTimersValidator_isTimer(item)))),isTimersValidator_isTimer=data=>(0,typeGuards.Gv)(data)&&"problemId"in data&&"expiresAt"in data&&"number"==typeof data.problemId&&(0,typeGuards.hz)(data.expiresAt)&&!isNaN(data.problemId)&&data.problemId%1==0&&data.problemId>=1e3,isOptionsDataResponse=data=>!!((0,typeGuards.Gv)(data)&&commands.AQ.DATA_VERSION in data&&commands.AQ.CHECKED_ALGORITHM_IDS in data&&commands.AQ.QUICK_SLOTS in data&&commands.AQ.TOTAMJUNG_THEME in data&&commands.AQ.HIDER_OPTIONS in data&&commands.AQ.RANDOM_DEFENSE_HISTORY in data&&commands.AQ.IS_TIER_HIDDEN in data&&commands.AQ.FONT_NO in data&&commands.AQ.TIMERS in data)&&("v1.2"===data[commands.AQ.DATA_VERSION]&&(0,checkedAlgorithmIdsValidator.v)(data[commands.AQ.CHECKED_ALGORITHM_IDS])&&(0,quickSlotsValidator.Wb)(data[commands.AQ.QUICK_SLOTS])&&(0,totamjungThemeValidator.d)(data[commands.AQ.TOTAMJUNG_THEME])&&(0,hiderOptionsValidator.Oh)(data[commands.AQ.HIDER_OPTIONS])&&(0,randomDefenseHistoryValidator.De)(data[commands.AQ.RANDOM_DEFENSE_HISTORY])&&"boolean"==typeof data[commands.AQ.IS_TIER_HIDDEN]&&(0,fontNoValidator.zw)(data[commands.AQ.FONT_NO])&&isTimersValidator_isTimers(data[commands.AQ.TIMERS]));var formatDate=__webpack_require__("./src/utils/formatDate.ts");const extractTotamjungDataFile=async()=>{const optionsData=await chrome.runtime.sendMessage({command:commands.Lo.FETCH_OPTIONS_DATA});((content,fileName)=>{const link=document.createElement("a"),file=new Blob([content],{type:"text/plain"});link.href=URL.createObjectURL(file),link.download=fileName,link.click(),URL.revokeObjectURL(link.href)})(JSON.stringify(optionsData),`totamjung_savefile_${(0,formatDate.Y)(new Date).replace(" ","_")}.ttj`)},hooks_useOptionsDataManageMenu=()=>{const[activeModal,setActiveModal]=(0,react.useState)("none"),[saveFileData,setSaveFileData]=(0,react.useState)(void 0),[errorInfo,setErrorInfo]=(0,react.useState)({errorTitle:"",errorMessage:""}),{errorTitle,errorMessage}=errorInfo,displayErrorModal=info=>{setErrorInfo(info),setActiveModal("error")};return{activeModal,errorTitle,errorMessage,setActiveModal,resetOptionsData:async()=>{await(async()=>(await chrome.storage.local.set(defaultValues.o),!0))()&&(setActiveModal("none"),location.reload())},extractOptionsData:async()=>{extractTotamjungDataFile(),setActiveModal("none")},stageOptionsData:async event=>{const files=event.target.files;if(!files)return;const saveFile=files[0];if("ttj"!==saveFile.name.split(".").at(-1))return void displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});if(saveFile.size>1048576)return void displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});const fileReader=new FileReader;fileReader.onload=async()=>{try{const fileReaderResult=fileReader.result;if("string"!=typeof fileReaderResult)return void displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});const saveFileJson=JSON.parse(fileReaderResult);if(!("dataVersion"in saveFileJson)||"string"!=typeof saveFileJson.dataVersion)return void displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});if("v1.2"!==saveFileJson.dataVersion)return void displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${saveFileJson.dataVersion}으로, 이 버전에서 다룰 수 있는 v1.2보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});if(!isOptionsDataResponse(saveFileJson))return void displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});setSaveFileData(saveFileJson),setActiveModal("upload")}catch(error){displayErrorModal({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},fileReader.readAsText(saveFile)},uploadOptionsData:async()=>{saveFileData&&((async data=>{!!isOptionsDataResponse(data)&&await chrome.storage.local.set(data)})(saveFileData),location.reload())},closeModal:()=>{setActiveModal("none")}}};const OptionsDataManageMenu_DataFileUploadButton=__webpack_require__("./src/components/OptionsDataManageMenu/DataFileUploadButton/DataFileUploadButton.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OptionsDataManageMenu=()=>{const{activeModal,errorTitle,errorMessage,setActiveModal,resetOptionsData,extractOptionsData,stageOptionsData,uploadOptionsData,closeModal}=hooks_useOptionsDataManageMenu();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(MenuTitle.A,{title:"데이터 관리",iconSrc:(0,jsx_runtime.jsx)(svg.LP,{})}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,ariaLabel:"설정 데이터 내보내기",iconSrc:(0,jsx_runtime.jsx)(svg.AK,{}),onClick:()=>{setActiveModal("extract")}}),(0,jsx_runtime.jsx)(OptionsDataManageMenu_DataFileUploadButton,{onChange:stageOptionsData}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,ariaLabel:"설정 데이터 초기화",iconSrc:(0,jsx_runtime.jsx)(svg.Ht,{}),onClick:()=>{setActiveModal("reset")}}),(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"16px",children:["토탐정 세이브파일의 확장자는 ",(0,jsx_runtime.jsx)("b",{children:".ttj"}),"입니다."]}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:"extract"===activeModal,message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:extractOptionsData,onClose:closeModal}),(0,jsx_runtime.jsx)(OptionsDataManageMenu_OptionsDataUploadModal,{open:"upload"===activeModal,onUpload:uploadOptionsData,onClose:closeModal}),(0,jsx_runtime.jsx)(OptionsDataManageMenu_OptionsDataResetModal,{open:"reset"===activeModal,onReset:resetOptionsData,onClose:closeModal}),(0,jsx_runtime.jsx)(SimpleModal.A,{title:errorTitle,actionType:"confirm",width:"350px",height:"auto",open:"error"===activeModal,message:errorMessage,onClose:closeModal})]})};OptionsDataManageMenu.displayName="OptionsDataManageMenu";const OptionsDataManageMenu_OptionsDataManageMenu=OptionsDataManageMenu},"./src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsDataResetModal_OptionsDataResetModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),Input=__webpack_require__("./src/components/common/Input/index.ts"),useConfirmInput=__webpack_require__("./src/hooks/useConfirmInput.ts"),theme=__webpack_require__("./src/styles/theme.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,WarnList=styled_components_browser_esm.I4.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme})=>theme.color.LIGHT_RED_TRANSPARENT};
`,WarnListItem=styled_components_browser_esm.I4.li`
  font-size: 14px;
  color: ${({theme})=>theme.color.LIGHT_RED};
`,ConfirmInputWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OptionsDataResetModal=props=>{const{open,onClose,onReset}=props,{inputValue,isSameWithConfirmText,updateInputValue}=(0,useConfirmInput.A)({confirmText:"초기화에 동의합니다"});return(0,jsx_runtime.jsxs)(Modal.A,{title:"데이터 초기화",open,onClose,children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),(0,jsx_runtime.jsxs)(WarnList,{children:[(0,jsx_runtime.jsx)(WarnListItem,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),(0,jsx_runtime.jsx)(WarnListItem,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),(0,jsx_runtime.jsx)(WarnListItem,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",(0,jsx_runtime.jsx)("b",{children:"초기화에 동의합니다"}),"를 입력해 주십시오."]}),(0,jsx_runtime.jsx)(ConfirmInputWrapper,{children:(0,jsx_runtime.jsx)(Input.A,{type:"text",width:"300px",value:inputValue,textAlign:"center",placeholder:'"초기화에 동의합니다"를 입력해 주세요',hasError:!1,ariaLabel:"",onChange:updateInputValue})})]}),(0,jsx_runtime.jsxs)(Modal.Y,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"초기화",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.uc,{}),color:theme.w.color.RED,disabled:!isSameWithConfirmText,ariaLabel:"초기화",onClick:onReset})]})]})};OptionsDataResetModal.displayName="OptionsDataResetModal";const OptionsDataResetModal_OptionsDataResetModal=OptionsDataResetModal;try{OptionsDataResetModal.displayName="OptionsDataResetModal",OptionsDataResetModal.__docgenInfo={description:"",displayName:"OptionsDataResetModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx#OptionsDataResetModal"]={docgenInfo:OptionsDataResetModal.__docgenInfo,name:"OptionsDataResetModal",path:"src/components/OptionsDataManageMenu/OptionsDataResetModal/OptionsDataResetModal.tsx#OptionsDataResetModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OptionsDataManageMenu/OptionsDataUploadModal/OptionsDataUploadModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OptionsDataUploadModal_OptionsDataUploadModal});var Modal=__webpack_require__("./src/components/common/Modal/index.ts"),IconButton=__webpack_require__("./src/components/common/IconButton/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.ts"),Input=__webpack_require__("./src/components/common/Input/index.ts"),useConfirmInput=__webpack_require__("./src/hooks/useConfirmInput.ts"),theme=__webpack_require__("./src/styles/theme.ts"),svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,WarnList=styled_components_browser_esm.I4.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme})=>theme.color.LIGHT_RED_TRANSPARENT};
`,WarnListItem=styled_components_browser_esm.I4.li`
  font-size: 14px;
  color: ${({theme})=>theme.color.LIGHT_RED};
`,ConfirmInputWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OptionsDataResetModal=props=>{const{open,onClose,onUpload}=props,{inputValue,isSameWithConfirmText,updateInputValue}=(0,useConfirmInput.A)({confirmText:"숙지했습니다"});return(0,jsx_runtime.jsxs)(Modal.A,{title:"데이터 업로드",open,onClose,children:[(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),(0,jsx_runtime.jsxs)(WarnList,{children:[(0,jsx_runtime.jsx)(WarnListItem,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),(0,jsx_runtime.jsx)(WarnListItem,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),(0,jsx_runtime.jsx)(WarnListItem,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),(0,jsx_runtime.jsxs)(Text.A,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",(0,jsx_runtime.jsx)("b",{children:"숙지했습니다"}),"를 입력해 주십시오."]}),(0,jsx_runtime.jsx)(ConfirmInputWrapper,{children:(0,jsx_runtime.jsx)(Input.A,{type:"text",width:"300px",value:inputValue,textAlign:"center",placeholder:'"숙지했습니다"를 입력해 주세요',hasError:!1,ariaLabel:"",onChange:updateInputValue})})]}),(0,jsx_runtime.jsxs)(Modal.Y,{children:[(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"취소",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.kU,{}),color:theme.w.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(IconButton.A,{type:"button",name:"업로드",size:"medium",iconSrc:(0,jsx_runtime.jsx)(svg.f2,{}),color:theme.w.color.LIME,disabled:!isSameWithConfirmText,ariaLabel:"업로드",onClick:onUpload})]})]})};OptionsDataResetModal.displayName="OptionsDataResetModal";const OptionsDataUploadModal_OptionsDataUploadModal=OptionsDataResetModal;try{OptionsDataUploadModal.displayName="OptionsDataUploadModal",OptionsDataUploadModal.__docgenInfo={description:"",displayName:"OptionsDataUploadModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OptionsDataManageMenu/OptionsDataUploadModal/OptionsDataUploadModal.tsx#OptionsDataUploadModal"]={docgenInfo:OptionsDataUploadModal.__docgenInfo,name:"OptionsDataUploadModal",path:"src/components/OptionsDataManageMenu/OptionsDataUploadModal/OptionsDataUploadModal.tsx#OptionsDataUploadModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/domains/dataHandlers/checkedAlgorithmsHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>fetchCheckedAlgorithmIds,I:()=>saveCheckedAlgorithmIds});var commands=__webpack_require__("./src/constants/commands.ts"),checkedAlgorithmIdsValidator=__webpack_require__("./src/domains/dataHandlers/validators/checkedAlgorithmIdsValidator.ts"),defaultValues=__webpack_require__("./src/constants/defaultValues.ts");const fetchCheckedAlgorithmIds=async()=>{const sanitizedAlgorithmIds=(checkedAlgorithmIds=>Array.isArray(checkedAlgorithmIds)?checkedAlgorithmIds.filter((value=>"number"==typeof value&&!isNaN(value)&&value%1==0&&value>=1)):defaultValues.Fj)((await chrome.storage.local.get(commands.AQ.CHECKED_ALGORITHM_IDS))[commands.AQ.CHECKED_ALGORITHM_IDS]);return{checkedIds:sanitizedAlgorithmIds}},saveCheckedAlgorithmIds=checkedAlgorithmIds=>{(0,checkedAlgorithmIdsValidator.v)(checkedAlgorithmIds)&&chrome.storage.local.set({[commands.AQ.CHECKED_ALGORITHM_IDS]:checkedAlgorithmIds})}},"./src/domains/dataHandlers/fontNoDataHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>fetchFontNo,g:()=>saveFontNo});var commands=__webpack_require__("./src/constants/commands.ts");const sanitizeFontNo=fontNo=>"number"!=typeof fontNo||isNaN(fontNo)||fontNo%1!=0?0:fontNo;var fontNoValidator=__webpack_require__("./src/domains/dataHandlers/validators/fontNoValidator.ts");const fetchFontNo=async()=>{const fontNo=(await chrome.storage.local.get(commands.AQ.FONT_NO))[commands.AQ.FONT_NO];return{[commands.AQ.FONT_NO]:sanitizeFontNo(fontNo)}},saveFontNo=fontNo=>{(0,fontNoValidator.zw)(fontNo)&&chrome.storage.local.set({[commands.AQ.FONT_NO]:fontNo})}},"./src/domains/dataHandlers/randomDefenseHistoryDataHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yf:()=>fetchRandomDefenseHistory,NL:()=>saveRandomDefenseHistory});var commands=__webpack_require__("./src/constants/commands.ts"),randomDefense=__webpack_require__("./src/constants/randomDefense.ts"),randomDefenseHistoryValidator=__webpack_require__("./src/domains/dataHandlers/validators/randomDefenseHistoryValidator.ts"),typeGuards=__webpack_require__("./src/types/typeGuards.ts");var defaultValues=__webpack_require__("./src/constants/defaultValues.ts");const isValidRandomDefenseHistoryInfo=item=>(0,randomDefenseHistoryValidator.AW)(item)&&item.problemId%1==0&&item.problemId>=randomDefense.TN&&item.problemId<=randomDefense.B3&&item.title.length<=randomDefense.UI&&(data=>{if(!(0,typeGuards.hz)(data))return!1;const[year,month,day,hours,minutes,seconds,milliseconds]=data.split(/[-:.TZ]/).map(Number);return year>=1&&year<=9999&&month>=1&&month<=12&&day>=1&&day<=31&&hours>=0&&hours<=23&&minutes>=0&&minutes<=59&&seconds>=0&&seconds<=59&&milliseconds>=0&&milliseconds<=999})(item.createdAt)&&item.tier%1==0&&item.tier>=randomDefense.ey&&item.tier<=randomDefense.W1,sanitizeRandomDefenseHistory=randomDefenseHistory=>{if(!Array.isArray(randomDefenseHistory))return defaultValues.w$;const sanitizedRandomDefenseHistory=[];return randomDefenseHistory.forEach((item=>{(0,randomDefenseHistoryValidator.AW)(item)&&isValidRandomDefenseHistoryInfo(item)&&sanitizedRandomDefenseHistory.push(item)})),sanitizedRandomDefenseHistory.slice(0,randomDefense.o0)},getSortedRandomDefenseHistory=randomDefenseHistory=>[...randomDefenseHistory].sort(((a,b)=>a.createdAt>b.createdAt?-1:1)),fetchRandomDefenseHistory=async()=>{const data=await chrome.storage.local.get([commands.AQ.RANDOM_DEFENSE_HISTORY,commands.AQ.IS_TIER_HIDDEN]),randomDefenseHistory=data[commands.AQ.RANDOM_DEFENSE_HISTORY],isTierHidden=data[commands.AQ.IS_TIER_HIDDEN],sanitizedRandomDefenseHistory=sanitizeRandomDefenseHistory(randomDefenseHistory),sortedRandomDefenseHistory=getSortedRandomDefenseHistory(sanitizedRandomDefenseHistory),sanitizedIsTierHidden=(isTierHidden=>"boolean"==typeof isTierHidden?isTierHidden:defaultValues.nF)(isTierHidden);return{randomDefenseHistory:sortedRandomDefenseHistory,isHidden:sanitizedIsTierHidden}},saveRandomDefenseHistory=(randomDefenseHistory,isHidden)=>{if(!Array.isArray(randomDefenseHistory)||"boolean"!=typeof isHidden)return;const sanitizedRandomDefenseHistory=sanitizeRandomDefenseHistory(randomDefenseHistory),sortedRandomDefenseHistory=getSortedRandomDefenseHistory(sanitizedRandomDefenseHistory);chrome.storage.local.set({[commands.AQ.RANDOM_DEFENSE_HISTORY]:sortedRandomDefenseHistory,[commands.AQ.IS_TIER_HIDDEN]:isHidden})}},"./src/domains/dataHandlers/totamjungThemeDataHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>fetchTotamjungTheme,Y:()=>saveTotamjungTheme});var commands=__webpack_require__("./src/constants/commands.ts"),totamjungThemeValidator=__webpack_require__("./src/domains/dataHandlers/validators/totamjungThemeValidator.ts");const fetchTotamjungTheme=async()=>{const sanitizedTotamjungTheme=(totamjungTheme=>"totamjung"===totamjungTheme?"totamjung":"none")((await chrome.storage.local.get(commands.AQ.TOTAMJUNG_THEME))[commands.AQ.TOTAMJUNG_THEME]);return{[commands.AQ.TOTAMJUNG_THEME]:sanitizedTotamjungTheme}},saveTotamjungTheme=totamjungTheme=>{(0,totamjungThemeValidator.g)({totamjungTheme})&&chrome.storage.local.set({[commands.AQ.TOTAMJUNG_THEME]:totamjungTheme})}},"./src/domains/dataHandlers/validators/checkedAlgorithmIdsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>isValidCheckedAlgorithmIdsResponse,v:()=>isValidCheckedAlgorithmIds});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isValidCheckedAlgorithmIds=data=>!!Array.isArray(data)&&data.every((value=>"number"==typeof value&&!isNaN(value)&&value%1==0&&value>=1)),isValidCheckedAlgorithmIdsResponse=data=>!(!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)||!("checkedIds"in data))&&isValidCheckedAlgorithmIds(data.checkedIds)},"./src/domains/dataHandlers/validators/fontNoValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zw:()=>isFontNo});const isFontNo=data=>"number"==typeof data&&!isNaN(data)&&data%1==0},"./src/domains/dataHandlers/validators/quickSlotsValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wb:()=>isQuickSlotsResponse,sG:()=>isSlotNo});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isSlot=data=>!(!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)||!("isEmpty"in data)||"boolean"!=typeof data.isEmpty)&&(!!data.isEmpty||"title"in data&&"query"in data&&"string"==typeof data.title&&"string"==typeof data.query),isSlotNo=data=>"number"==typeof data&&[1,2,3,4,5,6,7,8,9,0].includes(data),isQuickSlotsResponse=data=>{if(!((0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"hotkey"in data&&"selectedSlotNo"in data&&"slots"in data&&"string"==typeof data.hotkey&&["Alt","F2"].includes(data.hotkey)&&isSlotNo(data.selectedSlotNo)))return!1;const{slots}=data;return!!(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.hj)(slots)&&Array.from({length:10}).every(((_,key)=>key in slots&&isSlot(slots[key])))}},"./src/domains/dataHandlers/validators/randomDefenseHistoryValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AW:()=>isRandomDefenseHistoryInfo,De:()=>isRandomDefenseHistoryInfos});var _images_svg_tier__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/images/svg/tier/index.ts"),_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/typeGuards.ts");const isRandomDefenseHistoryInfo=data=>(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__.Gv)(data)&&"problemId"in data&&"title"in data&&"tier"in data&&"createdAt"in data&&"number"==typeof data.problemId&&"string"==typeof data.title&&"number"==typeof data.tier&&data.tier in _images_svg_tier__WEBPACK_IMPORTED_MODULE_0__.R&&(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_1__.hz)(data.createdAt),isRandomDefenseHistoryInfos=data=>Array.isArray(data)&&data.every((item=>isRandomDefenseHistoryInfo(item)))},"./src/domains/dataHandlers/validators/totamjungThemeValidator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>isTotamjungTheme,g:()=>isTotamjungThemeResponse});var _types_typeGuards__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/typeGuards.ts");const isTotamjungThemeResponse=data=>(0,_types_typeGuards__WEBPACK_IMPORTED_MODULE_0__.Gv)(data)&&"totamjungTheme"in data&&isTotamjungTheme(data.totamjungTheme),isTotamjungTheme=data=>"none"===data||"totamjung"===data},"./src/hooks/useConfirmInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=params=>{const{confirmText:initConfirmText}=params,[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[confirmText,setConfirmText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initConfirmText);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setConfirmText(confirmText)}),[initConfirmText]);return{inputValue,isSameWithConfirmText:inputValue===confirmText,updateInputValue:event=>{setInputValue(event.target.value)}}}},"./src/utils/formatDate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>formatDate});const formatDate=date=>`${String(date.getFullYear()).padStart(4,"0")}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`}}]);
//# sourceMappingURL=4044.1c391bec.iframe.bundle.js.map