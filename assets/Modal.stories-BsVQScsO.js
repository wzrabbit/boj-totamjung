import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index--qcDGAq6.js";import{M as l,a}from"./Modal-JaXjAa2V.js";import{I as o}from"./IconButton-Cuc1o0yv.js";import{T as n}from"./Text-DwCBBkEm.js";import{S as $}from"./close-circle-Dx72CTk1.js";import{S as r}from"./check-circle-B-abXz3w.js";import"./index-yBjzXJbu.js";import"./theme-CqSsbPCW.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./close-BziWfrbF.js";import"./index-B5qaPpLJ.js";import"./index-B6ujFmsw.js";import"./toPx-DeOSKary.js";const me={title:"components/common/Modal",component:l,argTypes:{open:{description:"모달이 열려있는지의 여부입니다."},title:{description:"모달의 제목입니다."},onClose:{description:"모달을 닫아야 할 경우 실행시킬 콜백 함수입니다."},padding:{description:"모달 내부 공간에 둘 `padding`의 크기입니다.",table:{defaultValue:{summary:"16px"}}},theme:{description:"모달의 테마입니다.",table:{defaultValue:{summary:"totamjung"}}},closeOnBackdropClick:{description:"모달의 빈 공간을 누를 경우 모달이 닫히게 할지의 여부입니다.",table:{defaultValue:{summary:"true"}}},portalTarget:{description:"모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다."}},parameters:{docs:{description:{component:"`Modal`은 범용적으로 사용할 수 있는 모달 컴포넌트입니다."}}}},d={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{open:s,title:"테스트 모달",onClose:()=>{t(!1)},children:e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"normal",fontSize:16,children:"테스트용 메시지입니다."})})}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},c={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"민트 초코 대량구매 확인",onClose:()=>{alert("아뿔싸, 이런 방법이."),t(!1)},children:[e.jsx("div",{style:{maxWidth:"350px"},children:e.jsxs(n,{type:"normal",fontSize:16,children:[e.jsx("span",{style:{color:"#00ffcc",fontWeight:600},children:"민트 초코"})," ","아이스크림을"," ",e.jsx("span",{style:{color:"#ff0000",fontWeight:600},children:"3,000"}),"개 구매합니다. 계속하려면 [확인] 을 누르세요."]})}),e.jsxs(a,{children:[e.jsx(o,{type:"button",name:"취소",size:"medium",color:"#ff665e",iconSrc:e.jsx($,{}),disabled:!1,onClick:()=>{alert("민트초코의 위대함을 모르는 당신이 불쌍해"),t(!1)}}),e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#5eff69",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{alert("그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?"),t(!1)}})]})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},p={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다.",onClose:()=>{t(!1)},children:[e.jsxs("div",{style:{maxWidth:"100%"},children:[e.jsx(n,{type:"normal",fontSize:16,children:"기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면, 모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요. 그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을 거에요."}),e.jsx(n,{type:"primary",fontSize:16,children:"그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록 작동해요."})]}),e.jsx(a,{children:e.jsx(o,{type:"button",name:"그렇군요",size:"medium",color:"#a3a3a3",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},f={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"테스트 모달",theme:"none",onClose:()=>{t(!1)},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"black",fontSize:16,children:"토탐정 테마가 적용되지 않은 모달입니다."})}),e.jsx(a,{theme:"none",children:e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#333333",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},u={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"테스트 모달",theme:"solvedAcLight",onClose:()=>{t(!1)},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"black",fontSize:16,children:"토탐정 테마가 적용되지 않은 모달입니다."})}),e.jsx(a,{theme:"solvedAcLight",children:e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#333333",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},m={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"테스트 모달",theme:"solvedAcDark",onClose:()=>{t(!1)},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"normal",fontSize:16,children:"solved.ac의 다크 테마가 적용된 모달입니다."})}),e.jsx(a,{theme:"solvedAcDark",children:e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#eeeeee",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},x={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"테스트 모달",theme:"solvedAcBlack",onClose:()=>{t(!1)},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"normal",fontSize:16,children:"solved.ac의 암전 테마가 적용된 모달입니다."})}),e.jsx(a,{theme:"solvedAcBlack",children:e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#eeeeee",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},C={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"테스트 모달",theme:"bojExtendedDark",onClose:()=>{t(!1)},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"normal",fontSize:16,children:"BOJ Extended의 Dark 테마가 적용된 모달입니다."})}),e.jsx(a,{theme:"bojExtendedDark",children:e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#555555",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},h={render:()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsxs(l,{open:s,title:"테스트 모달",theme:"bojExtendedRigel",onClose:()=>{t(!1)},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{type:"normal",fontSize:16,children:"BOJ Extended의 Rigel 테마가 적용된 모달입니다."})}),e.jsx(a,{theme:"bojExtendedRigel",children:e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#eeeeee",iconSrc:e.jsx(r,{}),disabled:!1,onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}};var y,b,j,O,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="normal" fontSize={16}>
              테스트용 메시지입니다.
            </Text>
          </div>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:`\`<Text>\` 컴포넌트만 사용하여 만든 모달의 예시입니다. 기본적으로 모달의 크기는 정해져 있지 않으며, 사용하는 측에서 **모달 내부의 콘텐츠의 크기를 직접 설정**해주는 것으로 조절할 수 있습니다.

본 예시에서는 \`<div style={{ width: '300px' }}></div>\` 가 콘텐츠의 최상위 요소이며, 가로 길이를 \`300px\`로 정했음을 알 수 있습니다.

\`\`\`tsx
<Modal
  open={isOpen}
  title="테스트 모달"
  onClose={() => {
    setIsOpen(false);
  }}
>
  <div style={{ width: '300px' }}>
    <Text type="normal" fontSize={16}>
      테스트용 메시지입니다.
    </Text>
  </div>
</Modal>
\`\`\``,...(v=(O=d.parameters)==null?void 0:O.docs)==null?void 0:v.description}}};var I,S,g,k,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="민트 초코 대량구매 확인" onClose={() => {
        alert('아뿔싸, 이런 방법이.');
        setIsOpen(false);
      }}>
          <div style={{
          maxWidth: '350px'
        }}>
            <Text type="normal" fontSize={16}>
              <span style={{
              color: '#00ffcc',
              fontWeight: 600
            }}>
                민트 초코
              </span>{' '}
              아이스크림을{' '}
              <span style={{
              color: '#ff0000',
              fontWeight: 600
            }}>3,000</span>개
              구매합니다. 계속하려면 [확인] 을 누르세요.
            </Text>
          </div>
          <ModalActionButtonsContainer>
            <IconButton type="button" name="취소" size="medium" color="#ff665e" iconSrc={<CloseCircleIcon />} disabled={false} onClick={() => {
            alert('민트초코의 위대함을 모르는 당신이 불쌍해');
            setIsOpen(false);
          }} />
            <IconButton type="button" name="확인" size="medium" color="#5eff69" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            alert('그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?');
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source},description:{story:`\`Modal.tsx\` 모듈에서는 \`<Modal>\`뿐만이 아니라 하단 버튼 메뉴를 구성할 때 사용할 수 있는 \`<ModalActionButtonsContainer>\` 컴포넌트 또한 제공합니다.

해당 컴포넌트도 불러오신 후, 콘텐츠의 하단에 버튼 컴포넌트들과 함께 사용해 주시면 하단 버튼 메뉴 또한 구성하실 수 있습니다.

\`\`\`tsx
<Modal
  open={isOpen}
  title="민트 초코 대량구매 확인"
  onClose={() => {
    alert('아뿔싸, 이런 방법이.');
    setIsOpen(false);
  }}
>
  <div style={{ width: '350px' }}>
    <Text type="normal" fontSize={16}>
      <span style={{ color: '#00ffcc', fontWeight: 600 }}>
        민트 초코
      </span>{' '}
      아이스크림을{' '}
      <span style={{ color: '#ff0000', fontWeight: 600 }}>3,000</span>개
      구매합니다. 계속하려면 [확인] 을 누르세요.
    </Text>
  </div>
  <ModalActionButtonsContainer>
    <IconButton
      type="button"
      name="취소"
      size="medium"
      color="#ff665e"
      iconSrc={<CloseCircleIcon />}
      disabled={false}
      onClick={() => {
         alert('민트초코의 위대함을 모르는 당신이 불쌍해');
         setIsOpen(false);
      }}
    />
    <IconButton
      type="button"
      name="확인"
      size="medium"
      color="#5eff69"
      iconSrc={<CheckCircleIcon />}
      disabled={false}
      onClick={() => {
        alert('그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?');
        setIsOpen(false);
      }}
    />
  </ModalActionButtonsContainer>
</Modal>
\`\`\``,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.description}}};var z,M,A,T,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다." onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          maxWidth: '100%'
        }}>
            <Text type="normal" fontSize={16}>
              기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면,
              모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요.
              그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을
              거에요.
            </Text>
            <Text type="primary" fontSize={16}>
              그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록
              작동해요.
            </Text>
          </div>
          <ModalActionButtonsContainer>
            <IconButton type="button" name="그렇군요" size="medium" color="#a3a3a3" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source},description:{story:"제목이 매우 길어 화면에 표시할 수 없는 경우 뒷 내용은 생략(...)되어 표시됩니다.\n\n모달의 가로 길이는 사용자의 웹 브라우저에 따라 축소/확대될 수도 있으므로, **콘텐츠의 크기는 이를 고려하여 고정값인 `width`보다는 유동적인 대응이 가능한 `min-width`, `max-width` 등을 더 추천합니다.**",...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var w,E,D,R,L;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" theme="none" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="black" fontSize={16}>
              토탐정 테마가 적용되지 않은 모달입니다.
            </Text>
          </div>
          <ModalActionButtonsContainer theme="none">
            <IconButton type="button" name="확인" size="medium" color="#333333" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(D=(E=f.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:"대부분의 상황에서는 토탐정 테마 모달을 사용하지만, 백준 내에서 어울리는 UI를 보여주어야 할 경우 다른 테마를 사용할 수도 있습니다.",...(L=(R=f.parameters)==null?void 0:R.docs)==null?void 0:L.description}}};var V,J,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" theme="solvedAcLight" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="black" fontSize={16}>
              토탐정 테마가 적용되지 않은 모달입니다.
            </Text>
          </div>
          <ModalActionButtonsContainer theme="solvedAcLight">
            <IconButton type="button" name="확인" size="medium" color="#333333" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(P=(J=u.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var _,U,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" theme="solvedAcDark" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="normal" fontSize={16}>
              solved.ac의 다크 테마가 적용된 모달입니다.
            </Text>
          </div>
          <ModalActionButtonsContainer theme="solvedAcDark">
            <IconButton type="button" name="확인" size="medium" color="#eeeeee" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(q=(U=m.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var F,G,H;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" theme="solvedAcBlack" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="normal" fontSize={16}>
              solved.ac의 암전 테마가 적용된 모달입니다.
            </Text>
          </div>
          <ModalActionButtonsContainer theme="solvedAcBlack">
            <IconButton type="button" name="확인" size="medium" color="#eeeeee" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,N,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" theme="bojExtendedDark" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="normal" fontSize={16}>
              BOJ Extended의 Dark 테마가 적용된 모달입니다.
            </Text>
          </div>
          <ModalActionButtonsContainer theme="bojExtendedDark">
            <IconButton type="button" name="확인" size="medium" color="#555555" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(Q=(N=C.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" theme="bojExtendedRigel" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="normal" fontSize={16}>
              BOJ Extended의 Rigel 테마가 적용된 모달입니다.
            </Text>
          </div>
          <ModalActionButtonsContainer theme="bojExtendedRigel">
            <IconButton type="button" name="확인" size="medium" color="#eeeeee" iconSrc={<CheckCircleIcon />} disabled={false} onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const xe=["TextModal","TextWithControlButtons","VeryLongTitle","PlainThemeWithControlButtons","SolvedAcLightWithControlButtons","SolvedAcDarkWithControlButtons","SolvedAcBlackWithControlButtons","BojExtendedDarkWithControlButtons","BojExtendedRigelWithControlButtons"];export{C as BojExtendedDarkWithControlButtons,h as BojExtendedRigelWithControlButtons,f as PlainThemeWithControlButtons,x as SolvedAcBlackWithControlButtons,m as SolvedAcDarkWithControlButtons,u as SolvedAcLightWithControlButtons,d as TextModal,c as TextWithControlButtons,p as VeryLongTitle,xe as __namedExportsOrder,me as default};
