import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{I as l}from"./IconButton-B9x6gfbo.js";import{O as n}from"./OptionsDataUploadModal-BzlOn__g.js";import{r as i}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./Modal-JaXjAa2V.js";import"./theme-CqSsbPCW.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./Text-5VRYE6Ju.js";import"./Input-DJiZYGyC.js";import"./useConfirmInput-CTEujkIa.js";import"./close-circle-Dx72CTk1.js";import"./file-upload-mz0LOrA9.js";const E={title:"components/OptionsDataManageMenu/OptionsDataUploadModal",component:n,argTypes:{open:{description:"이 모달이 열려 있는지의 여부입니다."},onClose:{description:"이 모달이 닫혀야 할 때 실행시킬 콜백 함수입니다. 사용자가 초기화 작업을 취소했음을 의미합니다."},onUpload:{description:"토탐정 설정 데이터를 초기화해야 할 때 실행시킬 콜백 함수입니다. 사용자가 최종적으로 초기화 작업을 승인했음을 의미합니다."}},parameters:{docs:{description:{component:"`OptionsDataUploadModal`는 토탐정 설정 데이터를 업로드하여 덮어씌우기 전, 사용자에게 확인차로 데이터를 덮어씌울 지를 묻는 모달입니다."}}}},e={render:()=>{const[p,t]=i.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{t(!0)}}),o.jsx(n,{open:p,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),t(!1)},onUpload:()=>{alert("onUpload()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다."),t(!1)}})]})},args:{open:!1,onClose:()=>{},onUpload:()=>{}}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(true);
      }} />
        <OptionsDataUploadModal open={isOpen} onClose={() => {
        alert('onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.');
        setIsOpen(false);
      }} onUpload={() => {
        alert('onUpload()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다.');
        setIsOpen(false);
      }} />
      </>;
  },
  args: {
    open: false,
    onClose: () => {},
    onUpload: () => {}
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,E as default};
