import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as r}from"./GachaProblemCountInputModal-Ckk8ITtJ.js";import{I as l}from"./IconButton-DB9afjvp.js";import{r as u}from"./index-RYns6xqu.js";import"./Modal-B6gp7QWS.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-D9btwR46.js";import"./check-circle-c0jdaR34.js";import"./theme-YzccoX_F.js";import"./randomDefense-DFxRSgnp.js";const z={component:r,argTypes:{open:{description:"모달이 열려있는 지의 여부입니다."},shouldShowHotkeyMessage:{description:"사이트 내에서 단축키를 길게 눌러서도 이 모달을 열 수 있다는 정보를 표시할 지의 여부입니다."},onClose:{description:"모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다."},onSubmitProblemCount:{description:"문제 수를 사용자가 결정한 후 확인 버튼을 눌러 확정할 경우 실행시킬 콜백 함수입니다."},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`GachaProblemCountInputModal` 컴포넌트는 본격적인 즉석 추첨에 앞서 뽑을 문제 수를 사용자가 선택할 수 있도록 하는 모달 컴포넌트입니다."}}}},t={render:()=>{const[s,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>o(!0)}),e.jsx(r,{open:s,shouldShowHotkeyMessage:!0,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})},args:{open:!1,shouldShowHotkeyMessage:!0,onClose:()=>{},onSubmitProblemCount:()=>{}}},n={render:()=>{const[s,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>o(!0)}),e.jsx(r,{open:s,shouldShowHotkeyMessage:!1,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})},args:{open:!1,shouldShowHotkeyMessage:!1,onClose:()=>{},onSubmitProblemCount:()=>{}}},a={render:()=>{const[s,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>o(!0)}),e.jsx(r,{open:s,theme:"none",shouldShowHotkeyMessage:!0,onClose:()=>o(!1),onSubmitProblemCount:()=>o(!1)})]})},args:{open:!1,theme:"none",shouldShowHotkeyMessage:!0,onClose:()=>{},onSubmitProblemCount:()=>{}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(c=n.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var h,f,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const G=["ModalWithHotkeyMessage","ModalWithNoHotkeyMessage","PlainTheme"];export{t as ModalWithHotkeyMessage,n as ModalWithNoHotkeyMessage,a as PlainTheme,G as __namedExportsOrder,z as default};
