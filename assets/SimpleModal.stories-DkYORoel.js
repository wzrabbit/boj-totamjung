import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{I as l}from"./IconButton-DB9afjvp.js";import{S as i}from"./SimpleModal-DS6ylK8y.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Modal-BuwJmHcH.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Text-B2xQYZk4.js";import"./theme-D4_a62hg.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";const q={title:"components/common/SimpleModal",component:i,argTypes:{actionType:{description:"모달의 **종류**입니다. 어느 옵션을 선택하느냐에 따라 모달의 하단에 표시되는 버튼의 종류가 달라집니다."},width:{description:"모달의 가로 길이입니다."},height:{description:"모달의 세로 길이입니다."},title:{description:"모달에 표시될 제목입니다."},message:{description:"모달에 표시할 내용입니다."},open:{description:"모달이 열려있는 지의 여부입니다."},onClose:{description:"모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다. **`actionType`가 `confirm`인 경우 확인 버튼을 눌렀을 때 이 함수가 호출됩니다.**"},onConfirm:{description:"모달에서 **확인** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `cancelConfirm`인 경우에만 적용됩니다.**"},onYesSelect:{description:"모달에서 **예** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**"},onNoSelect:{description:"모달에서 **아니요** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**"}},parameters:{docs:{description:{component:"`SimpleModal`는 자주 쓰이는 간단한 형태의 모달을 더 쉽게 구현할 수 있도록 고안된 공용 컴포넌트입니다."}}}},t={render:(c,{args:s})=>{const[n,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(i,{...s,open:n,actionType:"confirm",onClose:()=>o(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",open:!1,onClose:()=>{}}},a={render:(c,{args:s})=>{const[n,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(i,{...s,open:n,actionType:"cancelConfirm",onClose:()=>o(!1),onConfirm:()=>o(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",open:!1,onClose:()=>{},onConfirm:()=>{}}},r={render:(c,{args:s})=>{const[n,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{o(()=>!0)}}),e.jsx(i,{...s,open:n,actionType:"yesNo",onYesSelect:()=>o(!1),onNoSelect:()=>o(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}};var m,d,f,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
\`\`\``,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var y,x,C,S,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:`\`\`\`tsx
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
\`\`\``,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var b,O,T,I,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(O=r.parameters)==null?void 0:O.docs)==null?void 0:T.source},description:{story:`\`\`\`tsx
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
\`\`\``,...(N=(I=r.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};const v=["Confirm","CancelConfirm","YesNo"];export{a as CancelConfirm,t as Confirm,r as YesNo,v as __namedExportsOrder,q as default};
