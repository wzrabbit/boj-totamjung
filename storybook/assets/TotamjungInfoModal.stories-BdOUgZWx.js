import{j as o}from"./jsx-runtime-SwSI87LU.js";import{I as m}from"./IconButton-BdyC5KRL.js";import{T as a}from"./TotamjungInfoModal-4oZPIYEa.js";import{r as i}from"./index-C5e9SFkp.js";import"./styled-components.browser.esm-DmPUYCQi.js";import"./Modal-XX4ToJJX.js";import"./theme-C-IIZrvZ.js";import"./close-DAYv_a5U.js";import"./useTranslation-oInNA2-n.js";import"./index-BQcl82tf.js";import"./index-vofeE47f.js";import"./Text-CDp_2vO2.js";import"./toPx-DeOSKary.js";import"./SimpleModal-BKXUdtxg.js";import"./close-circle-CNub2vbV.js";import"./check-circle-Dwk1XCDm.js";import"./useModalState-BsXo_e1W.js";const k={title:"components/OptionsHeader/TotamjungInfoModal",component:a,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},onClose:{description:"모달을 닫아야 할 경우 실행할 콜백 함수입니다."}},parameters:{docs:{description:{component:"`TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다."}}}},e={render:()=>{const[p,n]=i.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>{n(()=>!0)}}),o.jsx(a,{open:p,onClose:()=>{n(()=>!1)}})]})},args:{open:!1,onClose:()=>{}}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
