import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{t as o}from"./theme-DpyODYgC.js";import{d as r,l as D}from"./styled-components.browser.esm-CIS6JKSM.js";import{r as d}from"./index--qcDGAq6.js";import{S as R}from"./close-BziWfrbF.js";import{r as k}from"./index-B5qaPpLJ.js";const c={none:o.color.WHITE,totamjung:o.color.DARK_BROWN,bojExtendedDark:o.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_INDIGO,solvedAcLight:o.color.WHITE,solvedAcDark:o.solvedAcColor.DARK_INDIGO,solvedAcBlack:o.color.BLACK},p={none:o.color.BLACK,totamjung:o.color.GOLD,bojExtendedDark:o.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:o.color.WHITE,solvedAcLight:o.color.BLACK,solvedAcDark:o.color.WHITE,solvedAcBlack:o.color.WHITE},b={...p,none:o.solvedAcColor.GRAY,solvedAcLight:o.solvedAcColor.GRAY,solvedAcDark:o.solvedAcColor.LIGHT_GRAY,solvedAcBlack:o.solvedAcColor.LIGHT_GRAY},y={none:o.color.PURE_WHITE,totamjung:o.color.BROWN,bojExtendedDark:o.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:o.color.PURE_WHITE,solvedAcDark:o.solvedAcColor.INDIGO,solvedAcBlack:o.solvedAcColor.DARK_INDIGO},j={none:o.color.LIGHT_GRAY,totamjung:o.color.GOLD,bojExtendedDark:o.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_INDIGO,solvedAcLight:o.color.WHITE,solvedAcDark:o.solvedAcColor.DARK_INDIGO,solvedAcBlack:o.color.BLACK},_=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 2;
`,I=r.div`
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
`,m=r.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`,f=r.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=r.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  border-radius: 2px;
  background-color: transparent;

  &:focus-visible {
    outline-color: ${({theme:e})=>e.color.LEMON};
    outline-offset: 2px;
    outline-style: dashed;
    outline-width: 1px;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`,x=r.div`
  padding: ${({$padding:e})=>e};

  font-size: 16px;
`,w=r.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:e})=>c[e]};
`,L=r.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:e})=>j[e]};
  background-color: ${({$totamjungTheme:e})=>c[e]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$totamjungTheme:e})=>D`
    & ${m} {
      border-bottom: 16px solid ${c[e]};

      background-color: ${c[e]};
    }

    & ${f} {
      color: ${p[e]};
    }

    & ${v} > svg {
      color: ${b[e]};
    }

    & ${x} {
      background-color: ${y[e]};

      color: ${({theme:t})=>t.color.DARK_GRAY};
    }
  `};
`,G=e=>{const{onEscKeyPress:t}=e,l=a=>{a.key==="Escape"&&t()};d.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[t])},K=()=>{var t;let e=document.activeElement;for(;(t=e==null?void 0:e.shadowRoot)!=null&&t.activeElement;)e=e.shadowRoot.activeElement;return e},T=e=>{const t=d.useRef(null),l=d.useRef(null),a=d.useRef(null),u=d.useRef(e);return!u.current&&e&&document.activeElement instanceof HTMLElement&&(a.current=document.activeElement),u.current=e,d.useEffect(()=>(e&&t.current&&l.current&&!t.current.contains(K())&&l.current.focus(),()=>{e&&a.current instanceof HTMLElement&&a.current.focus()}),[e]),{modalRef:t,closeButtonRef:l}},i=e=>{const{title:t,open:l,padding:a="16px",closeOnBackdropClick:u=!0,theme:A="totamjung",portalTarget:E,onClose:s,children:B}=e,{modalRef:g,closeButtonRef:h}=T(l);return G({onEscKeyPress:s}),l&&k.createPortal(n.jsxs(_,{children:[n.jsx(I,{onClick:()=>{u&&s()}}),n.jsxs(L,{role:"dialog",$totamjungTheme:A,ref:g,children:[n.jsxs(m,{children:[n.jsx(f,{children:t}),n.jsx(v,{onClick:s,"aria-label":"모달 닫기",ref:h,children:n.jsx(R,{})})]}),n.jsx(x,{$padding:a,children:B})]})]}),E??document.body)},C=e=>{const{children:t,theme:l="totamjung"}=e;return n.jsx(w,{$totamjungTheme:l,children:t})};try{C.displayName="ModalActionButtonsContainer",C.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}}}}}catch{}try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},closeOnBackdropClick:{defaultValue:null,description:"",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement | null"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{i as M,C as a};
