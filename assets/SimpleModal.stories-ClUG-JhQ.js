import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{I as l}from"./IconButton-D0rtTRsA.js";import{S as i}from"./SimpleModal-ClNHGUid.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-DG2UbxfS.js";import"./theme-C4yZJZ7X.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";const q={title:"components/common/SimpleModal",component:i,parameters:{docs:{description:{component:"`SimpleModal`는 자주 쓰이는 간단한 형태의 모달을 더 쉽게 구현할 수 있도록 고안된 공용 컴포넌트입니다."}}}},t={render:(c,{args:o})=>{const[n,s]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...o,open:n,actionType:"confirm",onClose:()=>s(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",open:!1,onClose:()=>{}}},a={render:(c,{args:o})=>{const[n,s]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...o,open:n,actionType:"cancelConfirm",onClose:()=>s(!1),onConfirm:()=>s(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",open:!1,onClose:()=>{},onConfirm:()=>{}}},r={render:(c,{args:o})=>{const[n,s]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...o,open:n,actionType:"yesNo",onYesSelect:()=>s(!1),onNoSelect:()=>s(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}};var m,d,f,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source},description:{story:`\`\`\`tsx
<SimpleModal>
  actionType="confirm"
  width="300px"
  height="100px"
  title="확인 버튼 모달"
  message="확인 버튼만 있는 모달입니다."
  open={false}
  onClose={() => {}}
</SimpleModal>
\`\`\``,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var x,C,S,h,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`\`\`\`tsx
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
\`\`\``,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var b,O,I,T,M;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(O=r.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:`\`\`\`tsx
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
\`\`\``,...(M=(T=r.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};const v=["Confirm","CancelConfirm","YesNo"];export{a as CancelConfirm,t as Confirm,r as YesNo,v as __namedExportsOrder,q as default};
