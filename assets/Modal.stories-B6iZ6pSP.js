import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{M as r,a as v}from"./Modal-CnAp5z9P.js";import{I as o}from"./IconButton-DB9afjvp.js";import{T as l}from"./Text-CP7DmBU9.js";import{S as z}from"./close-circle-Z95a0wyf.js";import{S as M}from"./check-circle-c0jdaR34.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";const R={title:"components/common/Modal",component:r,argTypes:{open:{description:"모달이 열려있는지의 여부입니다."},title:{description:"모달의 제목입니다."},onClose:{description:"모달을 닫아야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Modal`은 범용적으로 사용할 수 있는 모달 컴포넌트입니다."}}}},n={render:()=>{const[s,t]=c.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{open:s,title:"테스트 모달",onClose:()=>{t(!1)},children:e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{type:"normal",fontSize:"16px",children:"테스트용 메시지입니다."})})}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},a={render:()=>{const[s,t]=c.useState(!1);return e.jsxs("div",{children:[e.jsxs(r,{open:s,title:"민트 초코 대량구매 확인",onClose:()=>{alert("아뿔싸, 이런 방법이."),t(!1)},children:[e.jsx("div",{style:{maxWidth:"350px"},children:e.jsxs(l,{type:"normal",fontSize:"16px",children:[e.jsx("span",{style:{color:"#00ffcc",fontWeight:600},children:"민트 초코"})," ","아이스크림을"," ",e.jsx("span",{style:{color:"#ff0000",fontWeight:600},children:"3,000"}),"개 구매합니다. 계속하려면 [확인] 을 누르세요."]})}),e.jsxs(v,{children:[e.jsx(o,{type:"button",name:"취소",size:"medium",color:"#ff665e",iconSrc:e.jsx(z,{}),disabled:!1,ariaLabel:"취소",onClick:()=>{alert("민트초코의 위대함을 모르는 당신이 불쌍해"),t(!1)}}),e.jsx(o,{type:"button",name:"확인",size:"medium",color:"#5eff69",iconSrc:e.jsx(M,{}),disabled:!1,ariaLabel:"확인",onClick:()=>{alert("그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?"),t(!1)}})]})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}},i={render:()=>{const[s,t]=c.useState(!1);return e.jsxs("div",{children:[e.jsxs(r,{open:s,title:"이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다.",onClose:()=>{t(!1)},children:[e.jsxs("div",{style:{maxWidth:"100%"},children:[e.jsx(l,{type:"normal",fontSize:"16px",children:"기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면, 모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요. 그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을 거에요."}),e.jsx(l,{type:"primary",fontSize:"16px",children:"그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록 작동해요."})]}),e.jsx(v,{children:e.jsx(o,{type:"button",name:"그렇군요",size:"medium",color:"#a3a3a3",iconSrc:e.jsx(M,{}),disabled:!1,ariaLabel:"전혀 안 궁금하지만 이해했다고 대충 대답하기",onClick:()=>{t(!1)}})})]}),e.jsx(o,{type:"button",name:"모달 열기",size:"large",color:"#a15eff",disabled:!1,ariaLabel:"모달 열기",onClick:()=>{t(!0)}})]})},args:{open:!1,title:"테스트용 알림창",onClose:()=>{}}};var d,p,f,m,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="테스트 모달" onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          width: '300px'
        }}>
            <Text type="normal" fontSize="16px">
              테스트용 메시지입니다.
            </Text>
          </div>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:`\`<Text>\` 컴포넌트만 사용하여 만든 모달의 예시입니다. 기본적으로 모달의 크기는 정해져 있지 않으며, 사용하는 측에서 **모달 내부의 콘텐츠의 크기를 직접 설정**해주는 것으로 조절할 수 있습니다.

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
    <Text type="normal" fontSize="16px">
      테스트용 메시지입니다.
    </Text>
  </div>
</Modal>
\`\`\``,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var u,C,y,b,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
            <Text type="normal" fontSize="16px">
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
            <IconButton type="button" name="취소" size="medium" color="#ff665e" iconSrc={<CloseCircleIcon />} disabled={false} ariaLabel="취소" onClick={() => {
            alert('민트초코의 위대함을 모르는 당신이 불쌍해');
            setIsOpen(false);
          }} />
            <IconButton type="button" name="확인" size="medium" color="#5eff69" iconSrc={<CheckCircleIcon />} disabled={false} ariaLabel="확인" onClick={() => {
            alert('그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?');
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source},description:{story:`\`Modal.tsx\` 모듈에서는 \`<Modal>\`뿐만이 아니라 하단 버튼 메뉴를 구성할 때 사용할 수 있는 \`<ModalActionButtonsContainer>\` 컴포넌트 또한 제공합니다.

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
    <Text type="normal" fontSize="16px">
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
      ariaLabel="취소"
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
      ariaLabel="확인"
      onClick={() => {
        alert('그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?');
        setIsOpen(false);
      }}
    />
  </ModalActionButtonsContainer>
</Modal>
\`\`\``,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var I,O,S,j,g;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Modal open={isOpen} title="이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다." onClose={() => {
        setIsOpen(false);
      }}>
          <div style={{
          maxWidth: '100%'
        }}>
            <Text type="normal" fontSize="16px">
              기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면,
              모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요.
              그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을
              거에요.
            </Text>
            <Text type="primary" fontSize="16px">
              그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록
              작동해요.
            </Text>
          </div>
          <ModalActionButtonsContainer>
            <IconButton type="button" name="그렇군요" size="medium" color="#a3a3a3" iconSrc={<CheckCircleIcon />} disabled={false} ariaLabel="전혀 안 궁금하지만 이해했다고 대충 대답하기" onClick={() => {
            setIsOpen(false);
          }} />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton type="button" name="모달 열기" size="large" color="#a15eff" disabled={false} ariaLabel="모달 열기" onClick={() => {
        setIsOpen(true);
      }} />
      </div>;
  },
  args: {
    open: false,
    title: '테스트용 알림창',
    onClose: () => {}
  }
}`,...(S=(O=i.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:"제목이 매우 길어 화면에 표시할 수 없는 경우 뒷 내용은 생략(...)되어 표시됩니다.\n\n모달의 가로 길이는 사용자의 웹 브라우저에 따라 축소/확대될 수도 있으므로, **콘텐츠의 크기는 이를 고려하여 고정값인 `width`보다는 유동적인 대응이 가능한 `min-width`, `max-width` 등을 더 추천합니다.**",...(g=(j=i.parameters)==null?void 0:j.docs)==null?void 0:g.description}}};const q=["TextModal","TextWithControlButtons","VeryLongTitle"];export{n as TextModal,a as TextWithControlButtons,i as VeryLongTitle,q as __namedExportsOrder,R as default};
