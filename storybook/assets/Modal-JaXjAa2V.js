import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{t as o}from"./theme-CqSsbPCW.js";import{d as n,l as g}from"./styled-components.browser.esm-CIS6JKSM.js";import{r as f}from"./index--qcDGAq6.js";import{S as D}from"./close-BziWfrbF.js";import{r as h}from"./index-B5qaPpLJ.js";const d={none:o.color.WHITE,totamjung:o.color.DARK_BROWN,bojExtendedDark:o.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_INDIGO,solvedAcLight:o.color.WHITE,solvedAcDark:o.solvedAcColor.DARK_INDIGO,solvedAcBlack:o.color.BLACK},i={none:o.color.BLACK,totamjung:o.color.GOLD,bojExtendedDark:o.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:o.color.WHITE,solvedAcLight:o.color.BLACK,solvedAcDark:o.color.WHITE,solvedAcBlack:o.color.WHITE},k={...i,none:o.solvedAcColor.GRAY,solvedAcLight:o.solvedAcColor.GRAY,solvedAcDark:o.solvedAcColor.LIGHT_GRAY,solvedAcBlack:o.solvedAcColor.LIGHT_GRAY},j={none:o.color.PURE_WHITE,totamjung:o.color.BROWN,bojExtendedDark:o.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:o.color.PURE_WHITE,solvedAcDark:o.solvedAcColor.INDIGO,solvedAcBlack:o.solvedAcColor.DARK_INDIGO},y={none:o.color.LIGHT_GRAY,totamjung:o.color.GOLD,bojExtendedDark:o.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_INDIGO,solvedAcLight:o.color.WHITE,solvedAcDark:o.solvedAcColor.DARK_INDIGO,solvedAcBlack:o.color.BLACK},b=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`,_=n.div`
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
`,C=n.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`,p=n.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`,m=n.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
  }
`,A=n.div`
  padding: ${({$padding:e})=>e};

  font-size: 16px;
`,R=n.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({$totamjungTheme:e})=>d[e]};
`,I=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({$totamjungTheme:e})=>y[e]};
  background-color: ${({$totamjungTheme:e})=>d[e]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({$totamjungTheme:e})=>g`
    & ${C} {
      border-bottom: 16px solid ${d[e]};

      background-color: ${d[e]};
    }

    & ${p} {
      color: ${i[e]};
    }

    & ${m} > svg {
      color: ${k[e]};
    }

    & ${A} {
      background-color: ${j[e]};

      color: ${({theme:t})=>t.color.DARK_GRAY};
    }
  `};
`,w=e=>{const{onEscKeyPress:t}=e,r=a=>{a.key==="Escape"&&t()};f.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}),[t])},s=e=>{const{title:t,open:r,padding:a="16px",closeOnBackdropClick:x=!0,theme:v="totamjung",portalTarget:B,onClose:u,children:E}=e;return w({onEscKeyPress:u}),r&&h.createPortal(l.jsxs(b,{children:[l.jsx(_,{onClick:()=>{x&&u()}}),l.jsxs(I,{role:"dialog",$totamjungTheme:v,children:[l.jsxs(C,{children:[l.jsx(p,{children:t}),l.jsx(m,{onClick:u,"aria-label":"모달 닫기",children:l.jsx(D,{})})]}),l.jsx(A,{$padding:a,children:E})]})]}),B??document.body)},c=e=>{const{children:t,theme:r="totamjung"}=e;return l.jsx(R,{$totamjungTheme:r,children:t})};try{c.displayName="ModalActionButtonsContainer",c.__docgenInfo={description:"`<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.\n이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로\n본 컴포넌트 파일에 같이 정의합니다.",displayName:"ModalActionButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}}}}}catch{}try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},closeOnBackdropClick:{defaultValue:null,description:"",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement | null"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{s as M,c as a};
