import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as l}from"./IconButton-D0rtTRsA.js";import{O as n}from"./OptionsDataUploadModal-BT2FuFcp.js";import{r as i}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-DG2UbxfS.js";import"./Input-_gr1WRmd.js";import"./useConfirmInput-fbtHW9n0.js";import"./theme-C4yZJZ7X.js";import"./close-circle-Z95a0wyf.js";import"./file-upload-D_bXM9eZ.js";const j={title:"components/OptionsDataManageMenu/OptionsDataUploadModal",component:n,argTypes:{},parameters:{docs:{description:{component:"`OptionsDataUploadModal`는 토탐정 설정 데이터를 업로드하여 덮어씌우기 전, 사용자에게 확인차로 데이터를 덮어씌울 지를 묻는 모달입니다."}}}},o={render:()=>{const[p,a]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{a(()=>!0)}}),e.jsx(n,{open:p,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),a(()=>!1)},onUpload:()=>{alert("onUpload()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다."),a(()=>!1)}})]})},args:{open:!1,onClose:()=>{},onUpload:()=>{}}};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />
        <OptionsDataUploadModal open={isOpen} onClose={() => {
        alert('onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.');
        setIsOpen(() => false);
      }} onUpload={() => {
        alert('onUpload()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다.');
        setIsOpen(() => false);
      }} />
      </>;
  },
  args: {
    open: false,
    onClose: () => {},
    onUpload: () => {}
  }
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const y=["Default"];export{o as Default,y as __namedExportsOrder,j as default};
