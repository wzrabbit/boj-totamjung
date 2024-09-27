import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as l}from"./IconButton-D0rtTRsA.js";import{T as a}from"./TotamjungInfoModal-NXMlDYdx.js";import{r as m}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-DG2UbxfS.js";import"./theme-C4yZJZ7X.js";const x={title:"components/OptionsHeader/TotamjungInfoModal",component:a,argTypes:{},parameters:{docs:{description:{component:"`TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다."}}}},o={render:()=>{const[p,n]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{n(()=>!0)}}),e.jsx(a,{open:p,onClose:()=>{n(()=>!1)}})]})},args:{open:!1,onClose:()=>{}}};var s,t,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,x as default};
