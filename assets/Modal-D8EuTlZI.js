import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as a}from"./index-RYns6xqu.js";import{S as c}from"./close-R_Y1ANk3.js";import{r as d}from"./index-DAfSkmQi.js";const l=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,p=t.div`
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
`,x=t.div`
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
`,f=t.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme:o})=>o.color.DARK_BROWN};

  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,m=t.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme:o})=>o.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h=t.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme:o})=>o.color.GOLD};
  }
`,u=t.div`
  padding: 16px;

  background-color: ${({theme:o})=>o.color.BROWN};

  color: ${({theme:o})=>o.color.WHITE};
  font-size: 16px;
`,g=t.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,w=o=>{const{onEscKeyPress:n}=o,r=i=>{i.key==="Escape"&&n()};a.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[n])},E=o=>{const{title:n,open:r,onClose:i,children:s}=o;return w({onEscKeyPress:i}),r&&d.createPortal(e.jsxs(l,{children:[e.jsx(p,{onClick:i}),e.jsxs(x,{open:r,role:"dialog",children:[e.jsxs(f,{children:[e.jsx(m,{children:n}),e.jsx(h,{onClick:i,"aria-label":"모달 닫기",children:e.jsx(c,{})})]}),e.jsx(u,{children:s})]})]}),document.body)},y=o=>{const{children:n}=o;return e.jsx(g,{children:n})};y.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",methods:[],displayName:"ModalActionButtonsContainer"};export{E as M,y as a};
