import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index--qcDGAq6.js";import{I as l}from"./IconButton-B9x6gfbo.js";import{S as i}from"./SimpleModal-D_HuuXF6.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./Modal-JaXjAa2V.js";import"./theme-CqSsbPCW.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./close-circle-Dx72CTk1.js";import"./check-circle-B-abXz3w.js";const rs={title:"components/common/SimpleModal",component:i,argTypes:{actionType:{description:"모달의 **종류**입니다. 어느 옵션을 선택하느냐에 따라 모달의 하단에 표시되는 버튼의 종류가 달라집니다."},width:{description:"모달의 가로 길이입니다."},height:{description:"모달의 세로 길이입니다."},title:{description:"모달에 표시될 제목입니다."},message:{description:"모달에 표시할 내용입니다."},open:{description:"모달이 열려있는 지의 여부입니다."},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},onClose:{description:"모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다. **`actionType`가 `confirm`인 경우 확인 버튼을 눌렀을 때 이 함수가 호출됩니다.**"},onConfirm:{description:"모달에서 **확인** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `cancelConfirm`인 경우에만 적용됩니다.**"},onYesSelect:{description:"모달에서 **예** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**"},onNoSelect:{description:"모달에서 **아니요** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**"},closeOnBackdropClick:{description:"모달의 빈 공간을 누를 경우 모달이 닫히게 할지의 여부입니다.",table:{defaultValue:{summary:"true"}}},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`SimpleModal`는 자주 쓰이는 간단한 형태의 모달을 더 쉽게 구현할 수 있도록 고안된 공용 컴포넌트입니다."}}}},m={render:(p,{args:r})=>{const[t,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...r,open:t,actionType:"confirm",onClose:()=>s(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",open:!1,onClose:()=>{}}},d={render:(p,{args:r})=>{const[t,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...r,open:t,actionType:"cancelConfirm",onClose:()=>s(!1),onConfirm:()=>s(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",open:!1,onClose:()=>{},onConfirm:()=>{}}},g={render:(p,{args:r})=>{const[t,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...r,open:t,actionType:"yesNo",onYesSelect:()=>s(!1),onNoSelect:()=>s(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}},o={render:(p,{args:r})=>{const[t,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...r,open:t,actionType:"confirm",onClose:()=>s(!1)})]})},args:{actionType:"confirm",width:"300px",height:"100px",title:"확인 버튼 모달",message:"확인 버튼만 있는 모달입니다.",theme:"none",open:!1,onClose:()=>{}}},n={render:(p,{args:r})=>{const[t,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...r,open:t,actionType:"cancelConfirm",onClose:()=>s(!1),onConfirm:()=>s(!1)})]})},args:{actionType:"cancelConfirm",width:"300px",height:"100px",title:"취소/확인 버튼 모달",message:"취소, 확인 버튼이 있는 모달입니다.",theme:"none",open:!1,onClose:()=>{},onConfirm:()=>{}}},a={render:(p,{args:r})=>{const[t,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{s(()=>!0)}}),e.jsx(i,{...r,open:t,actionType:"yesNo",onYesSelect:()=>s(!1),onNoSelect:()=>s(!1)})]})},args:{actionType:"yesNo",width:"300px",height:"100px",title:"예/아니요 버튼 모달",message:"예, 아니요 버튼이 있는 모달입니다.",theme:"none",open:!1,onYesSelect:()=>{},onNoSelect:()=>{}}},f={...o,args:{...o.args,theme:"solvedAcLight"}},u={...n,args:{...n.args,theme:"solvedAcLight"}},C={...a,args:{...a.args,theme:"solvedAcLight"}},h={...o,args:{...o.args,theme:"solvedAcDark"}},S={...n,args:{...n.args,theme:"solvedAcDark"}},x={...a,args:{...a.args,theme:"solvedAcDark"}},b={...o,args:{...o.args,theme:"solvedAcBlack"}},y={...n,args:{...n.args,theme:"solvedAcBlack"}},k={...a,args:{...a.args,theme:"solvedAcBlack"}},O={...o,args:{...o.args,theme:"bojExtendedDark"}},j={...n,args:{...n.args,theme:"bojExtendedDark"}},N={...a,args:{...a.args,theme:"bojExtendedDark"}},I={...o,args:{...o.args,theme:"bojExtendedRigel"}},v={...n,args:{...n.args,theme:"bojExtendedRigel"}},A={...a,args:{...a.args,theme:"bojExtendedRigel"}};var P,T,Y,B,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(T=m.parameters)==null?void 0:T.docs)==null?void 0:Y.source},description:{story:`\`\`\`tsx
<SimpleModal>
  actionType="confirm"
  width="300px"
  height="100px"
  title="확인 버튼 모달"
  message="확인 버튼만 있는 모달입니다."
  open={false}
  onClose={() => {}}
</SimpleModal>
\`\`\``,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};var D,L,w,M,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(L=d.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:`\`\`\`tsx
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
\`\`\``,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var R,z,F,V,U;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:`\`\`\`tsx
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
\`\`\``,...(U=(V=g.parameters)==null?void 0:V.docs)==null?void 0:U.description}}};var q,G,H,J,K;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"대부분의 상황에서는 토탐정 테마 모달을 사용하지만, 백준 내에서 어울리는 UI를 보여주어야 할 경우 다른 테마를 사용할 수도 있습니다.",...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,W,X;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=n.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;a.parameters={...a.parameters,docs:{...(Z=a.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=a.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,oe,ne;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...PlainConfirm,
  args: {
    ...PlainConfirm.args,
    theme: 'solvedAcLight'
  }
}`,...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,re,te;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...PlainCancelConfirm,
  args: {
    ...PlainCancelConfirm.args,
    theme: 'solvedAcLight'
  }
}`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,ce,le;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...PlainYesNo,
  args: {
    ...PlainYesNo.args,
    theme: 'solvedAcLight'
  }
}`,...(le=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,me,de;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...PlainConfirm,
  args: {
    ...PlainConfirm.args,
    theme: 'solvedAcDark'
  }
}`,...(de=(me=h.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,fe,ue;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...PlainCancelConfirm,
  args: {
    ...PlainCancelConfirm.args,
    theme: 'solvedAcDark'
  }
}`,...(ue=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ue.source}}};var Ce,he,Se;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...PlainYesNo,
  args: {
    ...PlainYesNo.args,
    theme: 'solvedAcDark'
  }
}`,...(Se=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var xe,be,ye;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...PlainConfirm,
  args: {
    ...PlainConfirm.args,
    theme: 'solvedAcBlack'
  }
}`,...(ye=(be=b.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ke,Oe,je;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...PlainCancelConfirm,
  args: {
    ...PlainCancelConfirm.args,
    theme: 'solvedAcBlack'
  }
}`,...(je=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Ne,Ie,ve;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  ...PlainYesNo,
  args: {
    ...PlainYesNo.args,
    theme: 'solvedAcBlack'
  }
}`,...(ve=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:ve.source}}};var Ae,Pe,Te;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  ...PlainConfirm,
  args: {
    ...PlainConfirm.args,
    theme: 'bojExtendedDark'
  }
}`,...(Te=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Ye,Be,Ee;j.parameters={...j.parameters,docs:{...(Ye=j.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  ...PlainCancelConfirm,
  args: {
    ...PlainCancelConfirm.args,
    theme: 'bojExtendedDark'
  }
}`,...(Ee=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var De,Le,we;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...PlainYesNo,
  args: {
    ...PlainYesNo.args,
    theme: 'bojExtendedDark'
  }
}`,...(we=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:we.source}}};var Me,_e,Re;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  ...PlainConfirm,
  args: {
    ...PlainConfirm.args,
    theme: 'bojExtendedRigel'
  }
}`,...(Re=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var ze,Fe,Ve;v.parameters={...v.parameters,docs:{...(ze=v.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  ...PlainCancelConfirm,
  args: {
    ...PlainCancelConfirm.args,
    theme: 'bojExtendedRigel'
  }
}`,...(Ve=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Ue,qe,Ge;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...PlainYesNo,
  args: {
    ...PlainYesNo.args,
    theme: 'bojExtendedRigel'
  }
}`,...(Ge=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};const ts=["Confirm","CancelConfirm","YesNo","PlainConfirm","PlainCancelConfirm","PlainYesNo","SolvedAcLightConfirm","SolvedAcLightCancelConfirm","SolvedAcLightYesNo","SolvedAcDarkConfirm","SolvedAcDarkCancelConfirm","SolvedAcDarkYesNo","SolvedAcBlackConfirm","SolvedAcBlackCancelConfirm","SolvedAcBlackYesNo","BojExtendedDarkConfirm","BojExtendedDarkCancelConfirm","BojExtendedDarkYesNo","BojExtendedRigelConfirm","BojExtendedRigelCancelConfirm","BojExtendedRigelYesNo"];export{j as BojExtendedDarkCancelConfirm,O as BojExtendedDarkConfirm,N as BojExtendedDarkYesNo,v as BojExtendedRigelCancelConfirm,I as BojExtendedRigelConfirm,A as BojExtendedRigelYesNo,d as CancelConfirm,m as Confirm,n as PlainCancelConfirm,o as PlainConfirm,a as PlainYesNo,y as SolvedAcBlackCancelConfirm,b as SolvedAcBlackConfirm,k as SolvedAcBlackYesNo,S as SolvedAcDarkCancelConfirm,h as SolvedAcDarkConfirm,x as SolvedAcDarkYesNo,u as SolvedAcLightCancelConfirm,f as SolvedAcLightConfirm,C as SolvedAcLightYesNo,g as YesNo,ts as __namedExportsOrder,rs as default};
