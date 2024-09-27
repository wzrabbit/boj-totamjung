import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as m}from"./IconButton-D0rtTRsA.js";import{S as n}from"./SlotEditModal-Dx2OUjGY.js";import{r as u}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./theme-C4yZJZ7X.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-DG2UbxfS.js";import"./Textarea-Bp2AThqy.js";import"./Input-_gr1WRmd.js";import"./ErrorText-CAj_MRej.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";const M={title:"components/QuickSlotMenu/SlotEditModal",component:n,argTypes:{},parameters:{docs:{description:{component:"`SlotEditModal`는 슬롯에 있는 연습 이름과 쿼리 내용을 변경할 수 있는 기능을 제공하는 모달입니다."}}}},t={render:()=>{const[l,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(n,{title:"기존 추첨 이름",query:"tier:g5..g1 solvable:true",open:l,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),o(()=>!1)},onSlotChange:(i,p)=>{alert(`onSlotChange("${i}", "${p}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.`),o(()=>!1)}})]})},args:{title:"",query:"",open:!1,onClose:()=>{},onSlotChange:()=>{}}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />
        <SlotEditModal title="기존 추첨 이름" query="tier:g5..g1 solvable:true" open={isOpen} onClose={() => {
        alert('onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.');
        setIsOpen(() => false);
      }} onSlotChange={(name, query) => {
        alert(\`onSlotChange("\${name}", "\${query}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.\`);
        setIsOpen(() => false);
      }} />
      </>;
  },
  args: {
    title: '',
    query: '',
    open: false,
    onClose: () => {},
    onSlotChange: () => {}
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,M as default};
