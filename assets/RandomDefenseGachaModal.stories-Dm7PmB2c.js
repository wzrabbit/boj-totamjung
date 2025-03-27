import{j as e}from"./jsx-runtime-DEdD30eg.js";import{I as g}from"./IconButton-DB9afjvp.js";import{R as a}from"./RandomDefenseGachaModal-D8La3hBw.js";import{r as h}from"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-B6gp7QWS.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./copy-CpUHLpuP.js";import"./warning-C3WqP-8Y.js";import"./check-Dgz4zLBN.js";import"./loading-D5dlFyPz.js";import"./hidden-tier-badge-CukGKv-l.js";import"./theme-YzccoX_F.js";import"./CardBox-bS-pGwcS.js";import"./index-BpuMuliS.js";import"./ProblemCardGrid-BbgPQevl.js";import"./ProblemCard-B8r0SIA4.js";import"./index-CElCL35T.js";import"./commands-CzqO23sC.js";import"./RandomDefenseResultResponseValidator-Da7TDSo9.js";import"./typeGuards-BB3TV_oj.js";import"./GachaModalNotification-ODFavTlC.js";const w={title:"components/RandomDefenseGachaModal",component:a,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},onClose:{description:"모달을 닫을 때 호출되는 콜백 함수입니다."},slot:{description:"즉석 추첨 진행 시 문제 검색 조건으로 활용할 슬롯입니다. 이 슬롯은 비어있어서는 안 됩니다."},problemCount:{description:"즉석 추첨 시 추첨할 문제의 수입니다."},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`RandomDefenseGachaModal`는 즉석 추첨 기능을 전체적으로 제공하는 모달 컴포넌트입니다."}}}},r={isEmpty:!1,title:"All Random",query:"*0..30"},t={render:()=>{const[n,o]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(a,{open:n,theme:"totamjung",onClose:()=>o(!1),slot:r,problemCount:7})]})},args:{open:!1,theme:"totamjung",onClose:()=>{},slot:r,problemCount:7}},s={render:()=>{const[n,o]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(a,{open:n,theme:"none",onClose:()=>o(!1),slot:r,problemCount:7})]})},args:{open:!1,theme:"none",onClose:()=>{},slot:r,problemCount:7}};var l,p,m,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />
        <RandomDefenseGachaModal open={isOpen} theme="totamjung" onClose={() => setIsOpen(false)} slot={sampleFilledSlot} problemCount={7} />
      </>;
  },
  args: {
    open: false,
    theme: 'totamjung',
    onClose: () => {},
    slot: sampleFilledSlot,
    problemCount: 7
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"토탐정 설정 페이지에서 즉석 추첨 기능을 사용하는 경우에는 기존의 토탐정 테마가 적용된 모달을 사용합니다.",...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};var c,u,f,b,C;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />
        <RandomDefenseGachaModal open={isOpen} theme="none" onClose={() => setIsOpen(false)} slot={sampleFilledSlot} problemCount={7} />
      </>;
  },
  args: {
    open: false,
    theme: 'none',
    onClose: () => {},
    slot: sampleFilledSlot,
    problemCount: 7
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"백준 사이트 내에서 즉석 추첨 기능을 사용하는 경우이면서, 사이트 내에 토탐정 테마가 적용되어 있지 않은 경우에는 토탐정 테마가 적용되지 않은 모달을 사용합니다.",...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};const H=["Default","Plain"];export{t as Default,s as Plain,H as __namedExportsOrder,w as default};
