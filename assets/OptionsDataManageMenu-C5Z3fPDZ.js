import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as E}from"./styled-components.browser.esm-CkAH7aAm.js";import{O as v}from"./OptionsDataResetModal-RdHgYO_T.js";import{O as I}from"./OptionsDataUploadModal-BIZggIqg.js";import{M as w}from"./MenuTitle-CeT6tPAk.js";import{I as x}from"./IconButton-DB9afjvp.js";import{S as M}from"./SimpleModal-BmUXxdO3.js";import{T as S}from"./Text-Ccd6d79x.js";import{r as i}from"./index-RYns6xqu.js";import{S as t,C as _}from"./commands-CyQPP6hL.js";import{e as y}from"./defaultValues-Ccu0oMSE.js";import{i as R}from"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import{c as j}from"./quickSlotsValidator-DFvl-FmR.js";import{b as A,a as C}from"./fontNoValidator-BXIMmJgC.js";import{i as H}from"./hiderOptionsValidator-OSwkoshH.js";import{a as N}from"./randomDefenseHistoryValidator-CR4afrcp.js";import{i as h,c as b}from"./typeGuards-DuDHAUw0.js";import{f as L}from"./formatDate-DtmnLriP.js";import{D as F}from"./DataFileUploadButton-C2baFhLX.js";const V=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 512 512",...e},i.createElement("path",{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z",fill:"currentColor"}),i.createElement("path",{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z",fill:"currentColor"})),U=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},i.createElement("path",{fill:"currentColor",d:"m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 18V9h-5V4H6v16zm-6-1l-4-4h2.5v-3h3v3H16z"})),z=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},i.createElement("path",{fill:"currentColor",d:"M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2m8.73-.88L20.41 19l2.13-2.12l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13z"})),k=E.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 270px;
`,B=e=>Array.isArray(e)?Array.isArray(e)&&e.every(r=>G(r)):!1,G=e=>h(e)&&"problemId"in e&&"expiresAt"in e&&typeof e.problemId=="number"&&b(e.expiresAt)&&!isNaN(e.problemId)&&e.problemId%1===0&&e.problemId>=1e3,d=e=>h(e)&&t.DATA_VERSION in e&&t.CHECKED_ALGORITHM_IDS in e&&t.QUICK_SLOTS in e&&t.TOTAMJUNG_THEME in e&&t.HIDER_OPTIONS in e&&t.RANDOM_DEFENSE_HISTORY in e&&t.IS_TIER_HIDDEN in e&&t.FONT_NO in e&&t.TIMERS in e?e[t.DATA_VERSION]==="v1.2"&&R(e[t.CHECKED_ALGORITHM_IDS])&&j(e[t.QUICK_SLOTS])&&A(e[t.TOTAMJUNG_THEME])&&H(e[t.HIDER_OPTIONS])&&N(e[t.RANDOM_DEFENSE_HISTORY])&&typeof e[t.IS_TIER_HIDDEN]=="boolean"&&C(e[t.FONT_NO])&&B(e[t.TIMERS]):!1,J=async e=>d(e)?(await browser.storage.local.set({...e,[t.SHOULD_SHOW_WELCOME_MESSAGE]:!1}),!0):!1,K=async()=>(await browser.storage.local.set(y),!0),P=(e,r)=>{const n=document.createElement("a"),a=new Blob([e],{type:"text/plain"});n.href=URL.createObjectURL(a),n.download=r,n.click(),URL.revokeObjectURL(n.href)},Y=async()=>{const e=await browser.runtime.sendMessage({command:_.FETCH_OPTIONS_DATA}),r=JSON.stringify(e),n=`totamjung_savefile_${L(new Date).replace(" ","_")}.ttj`;P(r,n)},Q=()=>{const[e,r]=i.useState("none"),[n,a]=i.useState(void 0),[p,m]=i.useState({errorTitle:"",errorMessage:""}),{errorTitle:f,errorMessage:u}=p,s=c=>{m(c),r("error")};return{activeModal:e,errorTitle:f,errorMessage:u,setActiveModal:r,resetOptionsData:async()=>{await K()&&(r("none"),location.reload())},extractOptionsData:async()=>{Y(),r("none")},stageOptionsData:async c=>{const T=c.target.files;if(!T)return;const O=T[0];if(O.name.split(".").at(-1)!=="ttj"){s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'세이브파일의 확장자는 ".ttj" 여야 합니다.'});return}if(O.size>1048576){s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 용량은 1MiB 이하여야 합니다."});return}const D=new FileReader;D.onload=async()=>{try{const g=D.result;if(typeof g!="string"){s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"세이브파일의 형식이 올바르지 않습니다."});return}const l=JSON.parse(g);if(!("dataVersion"in l)||typeof l.dataVersion!="string"){s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}if(l.dataVersion!=="v1.2"){s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:`이 세이브파일의 버전은 ${l.dataVersion}으로, 이 버전에서 다룰 수 있는 v1.2보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`});return}if(!d(l)){s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:"데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다."});return}a(l),r("upload")}catch{s({errorTitle:"데이터를 업로드하지 못했습니다",errorMessage:'데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?'})}},D.readAsText(O)},uploadOptionsData:async()=>{n&&(J(n),location.reload())},closeModal:()=>{r("none")}}},Se=()=>{const{activeModal:e,errorTitle:r,errorMessage:n,setActiveModal:a,resetOptionsData:p,extractOptionsData:m,stageOptionsData:f,uploadOptionsData:u,closeModal:s}=Q();return o.jsxs(k,{children:[o.jsx(w,{title:"데이터 관리",iconSrc:o.jsx(V,{})}),o.jsx(x,{type:"button",name:"설정 데이터 내보내기",size:"large",color:"cyan",disabled:!1,ariaLabel:"설정 데이터 내보내기",iconSrc:o.jsx(U,{}),onClick:()=>{a("extract")}}),o.jsx(F,{onChange:f}),o.jsx(x,{type:"button",name:"설정 데이터 초기화",size:"large",color:"#ff5050",disabled:!1,ariaLabel:"설정 데이터 초기화",iconSrc:o.jsx(z,{}),onClick:()=>{a("reset")}}),o.jsx(S,{type:"normal",fontSize:"16px",children:"현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실 경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수 있습니다."}),o.jsxs(S,{type:"normal",fontSize:"16px",children:["토탐정 세이브파일의 확장자는 ",o.jsx("b",{children:".ttj"}),"입니다."]}),o.jsx(M,{title:"데이터 내보내기",actionType:"cancelConfirm",width:"350px",height:"auto",open:e==="extract",message:"현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요.",onConfirm:m,onClose:s}),o.jsx(I,{open:e==="upload",onUpload:u,onClose:s}),o.jsx(v,{open:e==="reset",onReset:p,onClose:s}),o.jsx(M,{title:r,actionType:"confirm",width:"350px",height:"auto",open:e==="error",message:n,onClose:s})]})};export{Se as O};
