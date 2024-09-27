import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as l}from"./IconButton-D0rtTRsA.js";import{O as n}from"./OptionsDataResetModal-BuxdtzzV.js";import{r as i}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-DG2UbxfS.js";import"./Input-_gr1WRmd.js";import"./useConfirmInput-fbtHW9n0.js";import"./theme-C4yZJZ7X.js";import"./trash-CO6QCs-j.js";import"./close-circle-Z95a0wyf.js";const j={title:"components/OptionsDataManageMenu/OptionsDataResetModal",component:n,argTypes:{},parameters:{docs:{description:{component:"`OptionsDataResetModal`는 토탐정 설정 데이터의 전체 초기화를 진행하기 전, 사용자에게 확인차로 초기화를 진행할 것인지를 묻는 모달입니다."}}}},t={render:()=>{const[p,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(n,{open:p,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),o(()=>!1)},onReset:()=>{alert("onReset()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다."),o(()=>!1)}})]})},args:{open:!1,onClose:()=>{},onReset:()=>{}}};var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />
        <OptionsDataResetModal open={isOpen} onClose={() => {
        alert('onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.');
        setIsOpen(() => false);
      }} onReset={() => {
        alert('onReset()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다.');
        setIsOpen(() => false);
      }} />
      </>;
  },
  args: {
    open: false,
    onClose: () => {},
    onReset: () => {}
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,j as default};
