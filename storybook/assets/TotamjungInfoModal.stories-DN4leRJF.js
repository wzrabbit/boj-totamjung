import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{I as m}from"./IconButton-Cuc1o0yv.js";import{T as a}from"./TotamjungInfoModal-D2iUChqb.js";import{r as i}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./Modal-Cac1K4CQ.js";import"./theme-DpyODYgC.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./Text-CCW1h-Yj.js";import"./toPx-DeOSKary.js";import"./SimpleModal-2Z9ZsIzu.js";import"./close-circle-Dx72CTk1.js";import"./check-circle-B-abXz3w.js";import"./useModalState-vgpoPrCb.js";const k={title:"components/OptionsHeader/TotamjungInfoModal",component:a,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},onClose:{description:"모달을 닫아야 할 경우 실행할 콜백 함수입니다."}},parameters:{docs:{description:{component:"`TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다."}}}},e={render:()=>{const[p,n]=i.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>{n(()=>!0)}}),o.jsx(a,{open:p,onClose:()=>{n(()=>!1)}})]})},args:{open:!1,onClose:()=>{}}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => {
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,k as default};
