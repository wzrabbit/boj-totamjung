import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as c}from"./index-RYns6xqu.js";import{S as p}from"./close-R_Y1ANk3.js";import{r as C}from"./index-DAfSkmQi.js";const B=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,f=n.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(5px);
  animation: fadeIn 0.2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,m=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px ${({theme:o})=>o.color.GOLD};
  background-color: ${({theme:o})=>o.color.DARK_BROWN};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,x=n.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme:o})=>o.color.DARK_BROWN};

  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,h=n.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme:o})=>o.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,y=n.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme:o})=>o.color.GOLD};
  }
`,g=n.div`
  padding: ${({$padding:o})=>o};

  background-color: ${({theme:o})=>o.color.BROWN};

  color: ${({theme:o})=>o.color.WHITE};
  font-size: 16px;
`,D=n.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,E=o=>{const{onEscKeyPress:t}=o,r=i=>{i.key==="Escape"&&t()};c.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[t])},a=o=>{const{title:t,open:r,padding:i="16px",closeOnBackdropClick:d=!0,onClose:u,children:s}=o;return E({onEscKeyPress:u}),r&&C.createPortal(e.jsxs(B,{children:[e.jsx(f,{onClick:()=>{d&&u()}}),e.jsxs(m,{role:"dialog",children:[e.jsxs(x,{children:[e.jsx(h,{children:t}),e.jsx(y,{onClick:u,"aria-label":"모달 닫기",children:e.jsx(p,{})})]}),e.jsx(g,{$padding:i,children:s})]})]}),document.body)},l=o=>{const{children:t}=o;return e.jsx(D,{children:t})};try{l.displayName="ModalActionButtonsContainer",l.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{}}}catch{}try{a.displayName="Modal",a.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},closeOnBackdropClick:{defaultValue:null,description:"",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{a as M,l as a};
