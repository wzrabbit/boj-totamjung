import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as r}from"./GachaProblemCountInputModal-DdC8wWQi.js";import{I as l}from"./IconButton-DB9afjvp.js";import{r as u}from"./index-RYns6xqu.js";import"./Modal-Cuej82dh.js";import"./theme-CqSsbPCW.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./getTransparentHexColor-DN69VCBw.js";import"./check-circle-c0jdaR34.js";import"./randomDefense-BrQ0TErT.js";const Z={component:r,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},shouldShowHotkeyMessage:{description:"사이트 내에서 단축키를 길게 눌러서도 이 모달을 열 수 있다는 정보를 표시할 지의 여부입니다."},onClose:{description:"모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다."},onSubmitProblemCount:{description:"문제 수를 사용자가 결정한 후 확인 버튼을 눌러 확정할 경우 실행시킬 콜백 함수입니다."},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`GachaProblemCountInputModal` 컴포넌트는 본격적인 즉석 추첨에 앞서 뽑을 문제 수를 사용자가 선택할 수 있도록 하는 모달 컴포넌트입니다."}}}},i={render:()=>{const[o,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>s(!0)}),e.jsx(r,{open:o,shouldShowHotkeyMessage:!0,onClose:()=>s(!1),onSubmitProblemCount:()=>s(!1)})]})},args:{open:!1,shouldShowHotkeyMessage:!0,onClose:()=>{},onSubmitProblemCount:()=>{}}},p={render:()=>{const[o,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>s(!0)}),e.jsx(r,{open:o,shouldShowHotkeyMessage:!1,onClose:()=>s(!1),onSubmitProblemCount:()=>s(!1)})]})},args:{open:!1,shouldShowHotkeyMessage:!1,onClose:()=>{},onSubmitProblemCount:()=>{}}},a={render:()=>{const[o,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>s(!0)}),e.jsx(r,{open:o,theme:"none",shouldShowHotkeyMessage:!0,onClose:()=>s(!1),onSubmitProblemCount:()=>s(!1)})]})},args:{open:!1,theme:"none",shouldShowHotkeyMessage:!0,onClose:()=>{},onSubmitProblemCount:()=>{}}},m={...a,render:(o,{args:s})=>{const[t,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>n(!0)}),e.jsx(r,{...s,theme:"solvedAcLight",open:t,onClose:()=>n(!1),onSubmitProblemCount:()=>n(!1)})]})}},d={...a,render:(o,{args:s})=>{const[t,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>n(!0)}),e.jsx(r,{...s,theme:"solvedAcDark",open:t,onClose:()=>n(!1),onSubmitProblemCount:()=>n(!1)})]})}},c={...a,render:(o,{args:s})=>{const[t,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>n(!0)}),e.jsx(r,{...s,theme:"solvedAcBlack",open:t,onClose:()=>n(!1),onSubmitProblemCount:()=>n(!1)})]})}},b={...a,render:(o,{args:s})=>{const[t,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>n(!0)}),e.jsx(r,{...s,theme:"bojExtendedDark",open:t,onClose:()=>n(!1),onSubmitProblemCount:()=>n(!1)})]})}},h={...a,render:(o,{args:s})=>{const[t,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>n(!0)}),e.jsx(r,{...s,theme:"bojExtendedRigel",open:t,onClose:()=>n(!1),onSubmitProblemCount:()=>n(!1)})]})}};var f,g,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal open={isOpen} shouldShowHotkeyMessage={true} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  },
  args: {
    open: false,
    shouldShowHotkeyMessage: true,
    onClose: () => {},
    onSubmitProblemCount: () => {}
  }
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var O,S,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal open={isOpen} shouldShowHotkeyMessage={false} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  },
  args: {
    open: false,
    shouldShowHotkeyMessage: false,
    onClose: () => {},
    onSubmitProblemCount: () => {}
  }
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,P,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal open={isOpen} theme="none" shouldShowHotkeyMessage={true} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  },
  args: {
    open: false,
    theme: 'none',
    shouldShowHotkeyMessage: true,
    onClose: () => {},
    onSubmitProblemCount: () => {}
  }
}`,...(x=(P=a.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var y,j,M;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="solvedAcLight" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(M=(j=m.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var L,T,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="solvedAcDark" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var H,z,w;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="solvedAcBlack" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var v,A,_;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="bojExtendedDark" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(_=(A=b.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var E,G,D;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="bojExtendedRigel" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(D=(G=h.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};const $=["ModalWithHotkeyMessage","ModalWithNoHotkeyMessage","PlainTheme","SolvedAcLightTheme","SolvedAcDarkTheme","SolvedAcBlackTheme","BojExtendedDarkTheme","BojExtendedRigelTheme"];export{b as BojExtendedDarkTheme,h as BojExtendedRigelTheme,i as ModalWithHotkeyMessage,p as ModalWithNoHotkeyMessage,a as PlainTheme,c as SolvedAcBlackTheme,d as SolvedAcDarkTheme,m as SolvedAcLightTheme,$ as __namedExportsOrder,Z as default};
