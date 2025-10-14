import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as m}from"./IconButton-CJ4kdUS9.js";import{S as a}from"./SlotEditModal-B1L6Zew6.js";import{r as c}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./theme-CqSsbPCW.js";import"./Modal-JaXjAa2V.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./Text-huWd_BLu.js";import"./toPx-DeOSKary.js";import"./TextLink-B35u5JYr.js";import"./Input-BrIae7Ts.js";import"./getTransparentHexColor-DN69VCBw.js";import"./ErrorText-DEoOg6NU.js";import"./warning-BLusDAjJ.js";import"./randomDefense-DE7lwrZG.js";import"./close-circle-Dx72CTk1.js";import"./check-circle-B-abXz3w.js";import"./QueryInput-s0B-qmXO.js";import"./typeGuards-Bsa9ERJp.js";const F={title:"components/QuickSlotsMenu/SlotEditModal",component:a,argTypes:{title:{description:"모달에 표시할 슬롯의 제목입니다."},query:{description:"모달에 표시할 슬롯의 쿼리입니다."},open:{description:"모달이 열려있는지의 여부입니다."},onClose:{description:"모달을 닫아야 할 경우 실행시킬 콜백 함수입니다."},onSlotChange:{description:"사용자가 슬롯 정보의 수정을 완료하여 슬롯의 정보가 변경되어야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`SlotEditModal`는 슬롯에 있는 연습 이름과 쿼리 내용을 변경할 수 있는 기능을 제공하는 모달입니다."}}}},o={render:()=>{const[i,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>{t(()=>!0)}}),e.jsx(a,{title:"기존 추첨 이름",query:"tier:g5..g1 solvable:true",open:i,onClose:()=>{alert("onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다."),t(()=>!1)},onSlotChange:(l,p)=>{alert(`onSlotChange("${l}", "${p}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.`),t(()=>!1)}})]})},args:{title:"",query:"",open:!1,onClose:()=>{},onSlotChange:()=>{}}};var r,s,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => {
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
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,F as default};
