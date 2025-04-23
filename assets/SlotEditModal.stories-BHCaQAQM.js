import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as m}from"./IconButton-DB9afjvp.js";import{S as a}from"./SlotEditModal-ssq-S1WX.js";import{r as c}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./theme-YzccoX_F.js";import"./Modal-B6gp7QWS.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-tixoFlKX.js";import"./TextLink-_llWSx1B.js";import"./Textarea-dOKYE4DH.js";import"./Input-C1KrmhYC.js";import"./ErrorText-Dysi6BW4.js";import"./warning-C3WqP-8Y.js";import"./randomDefense-BrQ0TErT.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";const v={title:"components/QuickSlotsMenu/SlotEditModal",component:a,argTypes:{title:{description:"모달에 표시할 슬롯의 제목입니다."},query:{description:"모달에 표시할 슬롯의 쿼리입니다."},open:{description:"모달이 열려있는지의 여부입니다."},onClose:{description:"모달을 닫아야 할 경우 실행시킬 콜백 함수입니다."},onSlotChange:{description:"사용자가 슬롯 정보의 수정을 완료하여 슬롯의 정보가 변경되어야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`SlotEditModal`는 슬롯에 있는 연습 이름과 쿼리 내용을 변경할 수 있는 기능을 제공하는 모달입니다."}}}},o={render:()=>{const[l,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{t(()=>!0)}}),e.jsx(a,{title:"기존 추첨 이름",query:"tier:g5..g1 solvable:true",open:l,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),t(()=>!1)},onSlotChange:(i,p)=>{alert(`onSlotChange("${i}", "${p}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.`),t(()=>!1)}})]})},args:{title:"",query:"",open:!1,onClose:()=>{},onSlotChange:()=>{}}};var r,s,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,v as default};
