import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{t as o}from"./theme-DB0vf-rZ.js";import{d as r,l as D}from"./styled-components.browser.esm-CIS6JKSM.js";import{r as a}from"./index--qcDGAq6.js";import{S as k}from"./close-BziWfrbF.js";import{r as _}from"./index-B5qaPpLJ.js";const u={none:o.colors.OFF_WHITE,totamjung:o.colors.BROWN_900,bojExtendedDark:o.bojExtendedColors.GRAY_900,bojExtendedRigel:o.bojExtendedColors.DARK_INDIGO,solvedAcLight:o.colors.OFF_WHITE,solvedAcDark:o.solvedAcColors.DARK_INDIGO,solvedAcBlack:o.colors.BLACK},p={none:o.colors.BLACK,totamjung:o.colors.GOLD,bojExtendedDark:o.bojExtendedColors.GRAY_300,bojExtendedRigel:o.colors.OFF_WHITE,solvedAcLight:o.colors.BLACK,solvedAcDark:o.colors.OFF_WHITE,solvedAcBlack:o.colors.OFF_WHITE},b={...p,none:o.solvedAcColors.GRAY_400,solvedAcLight:o.solvedAcColors.GRAY_400,solvedAcDark:o.solvedAcColors.GRAY_200,solvedAcBlack:o.solvedAcColors.GRAY_200},y={none:o.colors.WHITE,totamjung:o.colors.BROWN_700,bojExtendedDark:o.bojExtendedColors.GRAY_800,bojExtendedRigel:o.bojExtendedColors.DARK_SKY_BLUE,solvedAcLight:o.colors.WHITE,solvedAcDark:o.solvedAcColors.INDIGO,solvedAcBlack:o.solvedAcColors.DARK_INDIGO},j={none:o.colors.GRAY_300,totamjung:o.colors.GOLD,bojExtendedDark:o.bojExtendedColors.GRAY_900,bojExtendedRigel:o.bojExtendedColors.DARK_INDIGO,solvedAcLight:o.colors.OFF_WHITE,solvedAcDark:o.solvedAcColors.DARK_INDIGO,solvedAcBlack:o.colors.BLACK},R=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 2;
`,w=r.div`
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
    outline-color: ${({theme:e})=>e.colors.LEMON};
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
`,I=r.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:e})=>u[e]};
`,O=r.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:e})=>j[e]};
  background-color: ${({$totamjungTheme:e})=>u[e]};

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
      border-bottom: 16px solid ${u[e]};

      background-color: ${u[e]};
    }

    & ${f} {
      color: ${p[e]};
    }

    & ${v} > svg {
      color: ${b[e]};
    }

    & ${x} {
      background-color: ${y[e]};

      color: ${({theme:t})=>t.colors.GRAY_800};
    }
  `};
`,F=e=>{const{onEscKeyPress:t}=e,l=s=>{s.key==="Escape"&&t()};a.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[t])},L=()=>{var t;let e=document.activeElement;for(;(t=e==null?void 0:e.shadowRoot)!=null&&t.activeElement;)e=e.shadowRoot.activeElement;return e},G=e=>{const t=a.useRef(null),l=a.useRef(null),s=a.useRef(null),d=a.useRef(e);return!d.current&&e&&document.activeElement instanceof HTMLElement&&(s.current=document.activeElement),d.current=e,a.useEffect(()=>(e&&t.current&&l.current&&!t.current.contains(L())&&l.current.focus(),()=>{e&&s.current instanceof HTMLElement&&s.current.focus()}),[e]),{modalRef:t,closeButtonRef:l}},i=e=>{const{title:t,open:l,padding:s="16px",closeOnBackdropClick:d=!0,theme:B="totamjung",portalTarget:A,onClose:c,children:E}=e,{modalRef:g,closeButtonRef:h}=G(l);return F({onEscKeyPress:c}),l&&_.createPortal(n.jsxs(R,{children:[n.jsx(w,{onClick:()=>{d&&c()}}),n.jsxs(O,{role:"dialog",$totamjungTheme:B,ref:g,children:[n.jsxs(m,{children:[n.jsx(f,{children:t}),n.jsx(v,{onClick:c,"aria-label":"모달 닫기",ref:h,children:n.jsx(k,{})})]}),n.jsx(x,{$padding:s,children:E})]})]}),A??document.body)},C=e=>{const{children:t,theme:l="totamjung"}=e;return n.jsx(I,{$totamjungTheme:l,children:t})};try{C.displayName="ModalActionButtonsContainer",C.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}}}}}catch{}try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},closeOnBackdropClick:{defaultValue:null,description:"",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement | null"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{i as M,C as a};
