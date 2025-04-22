import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as i}from"./IconButton-DB9afjvp.js";import{T as a}from"./TotamjungInfoModal-DYvfNzWz.js";import{r as m}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-B6gp7QWS.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-tixoFlKX.js";import"./theme-YzccoX_F.js";import"./SimpleModal-BdMF5_Tc.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./useModal-CV8qRtLl.js";const y={title:"components/OptionsHeader/TotamjungInfoModal",component:a,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},onClose:{description:"모달을 닫아야 할 경우 실행할 콜백 함수입니다."}},parameters:{docs:{description:{component:"`TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다."}}}},o={render:()=>{const[p,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{n(()=>!0)}}),e.jsx(a,{open:p,onClose:()=>{n(()=>!1)}})]})},args:{open:!1,onClose:()=>{}}};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,y as default};
