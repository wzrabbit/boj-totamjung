import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as i}from"./IconButton-B9x6gfbo.js";import{T as a}from"./TotamjungInfoModal-DxHMoAEe.js";import{r as m}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./Modal-JaXjAa2V.js";import"./theme-CqSsbPCW.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./Text-5VRYE6Ju.js";import"./SimpleModal-D_HuuXF6.js";import"./close-circle-Dx72CTk1.js";import"./check-circle-B-abXz3w.js";import"./useModal-BJrESIr1.js";const S={title:"components/OptionsHeader/TotamjungInfoModal",component:a,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},onClose:{description:"모달을 닫아야 할 경우 실행할 콜백 함수입니다."}},parameters:{docs:{description:{component:"`TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다."}}}},o={render:()=>{const[p,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{n(()=>!0)}}),e.jsx(a,{open:p,onClose:()=>{n(()=>!1)}})]})},args:{open:!1,onClose:()=>{}}};var t,r,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />
        <TotamjungInfoModal open={isOpen} onClose={() => {
        setIsOpen(() => false);
      }} />
      </>;
  },
  args: {
    open: false,
    onClose: () => {}
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,S as default};
