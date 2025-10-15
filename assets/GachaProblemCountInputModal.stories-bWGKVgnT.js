import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as a}from"./GachaProblemCountInputModal-CpCOg6hH.js";import{I as l}from"./IconButton-Cuc1o0yv.js";import{r as u}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";import"./Modal-JaXjAa2V.js";import"./theme-CqSsbPCW.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./Input-RJ4Jqi9r.js";import"./toPx-DeOSKary.js";import"./getTransparentHexColor-DN69VCBw.js";import"./Text-DwCBBkEm.js";import"./check-circle-B-abXz3w.js";import"./randomDefense-DE7lwrZG.js";const ne={title:"components/GachaProblemCountInputModal",component:a,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},shouldShowHotkeyMessage:{description:"사이트 내에서 단축키를 길게 눌러서도 이 모달을 열 수 있다는 정보를 표시할 지의 여부입니다."},onClose:{description:"모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다."},onSubmitProblemCount:{description:"문제 수를 사용자가 결정한 후 확인 버튼을 눌러 확정할 경우 실행시킬 콜백 함수입니다."},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`GachaProblemCountInputModal` 컴포넌트는 본격적인 즉석 추첨에 앞서 뽑을 문제 수를 사용자가 선택할 수 있도록 하는 모달 컴포넌트입니다."}}}},p={render:()=>{const[n,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>s(!0)}),e.jsx(a,{open:n,shouldShowHotkeyMessage:!0,onClose:()=>s(!1),onSubmitProblemCount:()=>s(!1)})]})},args:{open:!1,shouldShowHotkeyMessage:!0,onClose:()=>{},onSubmitProblemCount:()=>{}}},m={render:()=>{const[n,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>s(!0)}),e.jsx(a,{open:n,shouldShowHotkeyMessage:!1,onClose:()=>s(!1),onSubmitProblemCount:()=>s(!1)})]})},args:{open:!1,shouldShowHotkeyMessage:!1,onClose:()=>{},onSubmitProblemCount:()=>{}}},r={render:()=>{const[n,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>s(!0)}),e.jsx(a,{open:n,theme:"none",shouldShowHotkeyMessage:!0,onClose:()=>s(!1),onSubmitProblemCount:()=>s(!1)})]})},args:{open:!1,theme:"none",shouldShowHotkeyMessage:!0,onClose:()=>{},onSubmitProblemCount:()=>{}}},i={...r,render:(n,{args:s})=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>o(!0)}),e.jsx(a,{...s,theme:"solvedAcLight",open:t,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})}},d={...r,render:(n,{args:s})=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>o(!0)}),e.jsx(a,{...s,theme:"solvedAcDark",open:t,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})}},c={...r,render:(n,{args:s})=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>o(!0)}),e.jsx(a,{...s,theme:"solvedAcBlack",open:t,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})}},b={...r,render:(n,{args:s})=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>o(!0)}),e.jsx(a,{...s,theme:"bojExtendedDark",open:t,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})}},h={...r,render:(n,{args:s})=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,onClick:()=>o(!0)}),e.jsx(a,{...s,theme:"bojExtendedRigel",open:t,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})}};var f,g,C;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal open={isOpen} shouldShowHotkeyMessage={true} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  },
  args: {
    open: false,
    shouldShowHotkeyMessage: true,
    onClose: () => {},
    onSubmitProblemCount: () => {}
  }
}`,...(C=(g=p.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var O,S,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal open={isOpen} shouldShowHotkeyMessage={false} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  },
  args: {
    open: false,
    shouldShowHotkeyMessage: false,
    onClose: () => {},
    onSubmitProblemCount: () => {}
  }
}`,...(I=(S=m.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,P,x;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
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
}`,...(x=(P=r.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var y,j,M;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="solvedAcLight" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var T,B,H;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="solvedAcDark" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var z,w,v;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="solvedAcBlack" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var A,G,_;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="bojExtendedDark" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(_=(G=b.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var E,D,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...PlainTheme,
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal {...args} theme="bojExtendedRigel" open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  }
}`,...(F=(D=h.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const te=["ModalWithHotkeyMessage","ModalWithNoHotkeyMessage","PlainTheme","SolvedAcLightTheme","SolvedAcDarkTheme","SolvedAcBlackTheme","BojExtendedDarkTheme","BojExtendedRigelTheme"];export{b as BojExtendedDarkTheme,h as BojExtendedRigelTheme,p as ModalWithHotkeyMessage,m as ModalWithNoHotkeyMessage,r as PlainTheme,c as SolvedAcBlackTheme,d as SolvedAcDarkTheme,i as SolvedAcLightTheme,te as __namedExportsOrder,ne as default};
