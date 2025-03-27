import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as a}from"./index-RYns6xqu.js";import{I as r}from"./IconButton-DB9afjvp.js";import{S as t}from"./SimpleModal-BnTyCKaN.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-B6gp7QWS.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-D9btwR46.js";import"./theme-YzccoX_F.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";const Z={title:"components/common/SimpleModal",component:t,argTypes:{actionType:{description:"모달의 **종류**입니다. 어느 옵션을 선택하느냐에 따라 모달의 하단에 표시되는 버튼의 종류가 달라집니다."},width:{description:"모달의 가로 길이입니다."},height:{description:"모달의 세로 길이입니다."},title:{description:"모달에 표시될 제목입니다."},message:{description:"모달에 표시할 내용입니다."},open:{description:"모달이 열려있는 지의 여부입니다."},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},onClose:{description:"모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다. **`actionType`가 `confirm`인 경우 확인 버튼을 눌렀을 때 이 함수가 호출됩니다.**"},onConfirm:{description:"모달에서 **확인** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `cancelConfirm`인 경우에만 적용됩니다.**"},onYesSelect:{description:"모달에서 **예** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**"},onNoSelect:{description:"모달에서 **아니요** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**"},closeOnBackdropClick:{description:"모달의 빈 공간을 누를 경우 모달이 닫히게 할지의 여부입니다.",table:{defaultValue:{summary:"true"}}},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`SimpleModal`는 자주 쓰이는 간단한 형태의 모달을 더 쉽게 구현할 수 있도록 고안된 공용 컴포넌트입니다."}}}},l={render:(i,{args:n})=>{const[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(t,{...n,open:o,actionType:"confirm",onClose:()=>s(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",open:!1,onClose:()=>{}}},p={render:(i,{args:n})=>{const[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(t,{...n,open:o,actionType:"cancelConfirm",onClose:()=>s(!1),onConfirm:()=>s(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",open:!1,onClose:()=>{},onConfirm:()=>{}}},c={render:(i,{args:n})=>{const[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(t,{...n,open:o,actionType:"yesNo",onYesSelect:()=>s(!1),onNoSelect:()=>s(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}},m={render:(i,{args:n})=>{const[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(t,{...n,open:o,actionType:"confirm",onClose:()=>s(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",theme:"none",open:!1,onClose:()=>{}}},d={render:(i,{args:n})=>{const[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(t,{...n,open:o,actionType:"cancelConfirm",onClose:()=>s(!1),onConfirm:()=>s(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",theme:"none",open:!1,onClose:()=>{},onConfirm:()=>{}}},f={render:(i,{args:n})=>{const[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(t,{...n,open:o,actionType:"yesNo",onYesSelect:()=>s(!1),onNoSelect:()=>s(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",theme:"none",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}};var u,g,C,y,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />

        <SimpleModal {...args} open={isOpen} actionType="confirm" onClose={() => setIsOpen(false)} />
      </>;
  },
  args: {
    actionType: 'confirm',
    width: '300px',
    height: '100px',
    title: '확인 버튼 모달',
    message: '확인 버튼만 있는 모달입니다.',
    open: false,
    onClose: () => {}
  }
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:`\`\`\`tsx
<SimpleModal>
  actionType="confirm"
  width="300px"
  height="100px"
  title="확인 버튼 모달"
  message="확인 버튼만 있는 모달입니다."
  open={false}
  onClose={() => {}}
</SimpleModal>
\`\`\``,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var x,S,b,O,I;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />

        <SimpleModal {...args} open={isOpen} actionType="cancelConfirm" onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />
      </>;
  },
  args: {
    actionType: 'cancelConfirm',
    width: '300px',
    height: '100px',
    title: '취소/확인 버튼 모달',
    message: '취소, 확인 버튼이 있는 모달입니다.',
    open: false,
    onClose: () => {},
    onConfirm: () => {}
  }
}`,...(b=(S=p.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:`\`\`\`tsx
<SimpleModal>
  actionType="cancelConfirm"
  width="300px"
  height="100px"
  title="취소/확인 버튼 모달"
  message="취소, 확인 버튼이 있는 모달입니다."
  open={false}
  onClose={() => {}}
  onConfirm={() => {}}
</SimpleModal>
\`\`\``,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};var T,N,j,w,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />

        <SimpleModal {...args} open={isOpen} actionType="yesNo" onYesSelect={() => setIsOpen(false)} onNoSelect={() => setIsOpen(false)} />
      </>;
  },
  args: {
    actionType: 'yesNo',
    width: '300px',
    height: '100px',
    title: '예/아니요 버튼 모달',
    message: '예, 아니요 버튼이 있는 모달입니다.',
    open: false,
    onYesSelect: () => {},
    onNoSelect: () => {}
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:`\`\`\`tsx
<SimpleModal>
  actionType="yesNo"
  width="300px"
  height="100px"
  title="예/아니요 버튼 모달"
  message="예, 아니요 버튼이 있는 모달입니다."
  open={false}
  onYesSelect={() => {}}
  onNoSelect={() => {}}
</SimpleModal>
\`\`\``,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.description}}};var k,Y,_,z,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />

        <SimpleModal {...args} open={isOpen} actionType="confirm" onClose={() => setIsOpen(false)} />
      </>;
  },
  args: {
    actionType: 'confirm',
    width: '300px',
    height: '100px',
    title: '확인 버튼 모달',
    message: '확인 버튼만 있는 모달입니다.',
    theme: 'none',
    open: false,
    onClose: () => {}
  }
}`,...(_=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:_.source},description:{story:"대부분의 상황에서는 토탐정 테마 모달을 사용하지만, 백준 내에서 어울리는 UI를 보여주어야 할 경우 다른 테마를 사용할 수도 있습니다.",...(L=(z=m.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var B,F,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />

        <SimpleModal {...args} open={isOpen} actionType="cancelConfirm" onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />
      </>;
  },
  args: {
    actionType: 'cancelConfirm',
    width: '300px',
    height: '100px',
    title: '취소/확인 버튼 모달',
    message: '취소, 확인 버튼이 있는 모달입니다.',
    theme: 'none',
    open: false,
    onClose: () => {},
    onConfirm: () => {}
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var E,V,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(() => true);
      }} />

        <SimpleModal {...args} open={isOpen} actionType="yesNo" onYesSelect={() => setIsOpen(false)} onNoSelect={() => setIsOpen(false)} />
      </>;
  },
  args: {
    actionType: 'yesNo',
    width: '300px',
    height: '100px',
    title: '예/아니요 버튼 모달',
    message: '예, 아니요 버튼이 있는 모달입니다.',
    theme: 'none',
    open: false,
    onYesSelect: () => {},
    onNoSelect: () => {}
  }
}`,...(D=(V=f.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const $=["Confirm","CancelConfirm","YesNo","PlainConfirm","PlainCancelConfirm","PlainYesNo"];export{p as CancelConfirm,l as Confirm,d as PlainCancelConfirm,m as PlainConfirm,f as PlainYesNo,c as YesNo,$ as __namedExportsOrder,Z as default};
