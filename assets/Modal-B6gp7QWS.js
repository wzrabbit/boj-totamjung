import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as n,l as x}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as g}from"./index-RYns6xqu.js";import{S as h}from"./close-R_Y1ANk3.js";import{r as y}from"./index-DAfSkmQi.js";const E=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,D=n.div`
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
`,d=n.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
  border-bottom: 16px solid ${({theme:o})=>o.color.DARK_BROWN};

  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,c=n.p`
  overflow: hidden;
  flex-grow: 1;

  color: ${({theme:o})=>o.color.GOLD};
  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,s=n.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
    color: ${({theme:o})=>o.color.GOLD};
  }
`,p=n.div`
  padding: ${({$padding:o})=>o};

  background-color: ${({theme:o})=>o.color.BROWN};

  color: ${({theme:o})=>o.color.WHITE};
  font-size: 16px;
`,v=n.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({theme:o,$theme:e})=>e==="totamjung"?o.color.DARK_BROWN:o.color.WHITE};
`,$=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({theme:o,$theme:e})=>e==="totamjung"?o.color.GOLD:o.color.LIGHT_GRAY};
  background-color: ${({theme:o,$theme:e})=>e==="totamjung"?o.color.DARK_BROWN:o.color.WHITE};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$theme:o})=>o==="none"&&x`
      & ${d} {
        border-bottom: 16px solid ${({theme:e})=>e.color.WHITE};

        background-color: ${({theme:e})=>e.color.WHITE};
      }

      & ${c}, & ${s} > svg {
        color: ${({theme:e})=>e.color.DARK_GRAY};
      }

      & ${p} {
        background-color: ${({theme:e})=>e.color.PURE_WHITE};

        color: ${({theme:e})=>e.color.DARK_GRAY};
      }
    `};
`,A=o=>{const{onEscKeyPress:e}=o,r=a=>{a.key==="Escape"&&e()};g.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[e])},u=o=>{const{title:e,open:r,padding:a="16px",closeOnBackdropClick:C=!0,theme:m="totamjung",portalTarget:f,onClose:l,children:B}=o;return A({onEscKeyPress:l}),r&&y.createPortal(t.jsxs(E,{children:[t.jsx(D,{onClick:()=>{C&&l()}}),t.jsxs($,{role:"dialog",$theme:m,children:[t.jsxs(d,{children:[t.jsx(c,{children:e}),t.jsx(s,{onClick:l,"aria-label":"모달 닫기",children:t.jsx(h,{})})]}),t.jsx(p,{$padding:a,children:B})]})]}),f??document.body)},i=o=>{const{children:e,theme:r="totamjung"}=o;return t.jsx(v,{$theme:r,children:e})};try{i.displayName="ModalActionButtonsContainer",i.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}}}}}catch{}try{u.displayName="Modal",u.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},closeOnBackdropClick:{defaultValue:null,description:"",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement | null"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{u as M,i as a};
