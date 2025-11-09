import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{l as n,d as a}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-CqSsbPCW.js";import"./index--qcDGAq6.js";import{S as m}from"./close-BziWfrbF.js";const i={none:e.color.BOJ_BLUE,totamjung:e.color.BLACK_DARKER_TRANSPARENT,solvedAcLight:e.solvedAcColor.OFF_WHITE,solvedAcDark:e.solvedAcColor.DARK_INDIGO,solvedAcBlack:e.solvedAcColor.DARK_INDIGO,bojExtendedDark:e.color.BLACK_DARKER_TRANSPARENT,bojExtendedRigel:e.bojExtendedColor.DARK_INDIGO},h={...i,solvedAcLight:e.solvedAcColor.LIGHTER_GRAY},b={none:e.color.WHITE,totamjung:e.color.WHITE,solvedAcLight:e.color.BLACK,solvedAcDark:e.color.WHITE,solvedAcBlack:e.color.WHITE,bojExtendedDark:e.color.WHITE,bojExtendedRigel:e.color.WHITE},x={none:e.color.WHITE,totamjung:e.color.LIGHTEST_BROWN,solvedAcLight:e.color.GRAY,solvedAcDark:e.solvedAcColor.GRAY,solvedAcBlack:e.solvedAcColor.GRAY,bojExtendedDark:e.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:e.bojExtendedColor.SKY_BLUE},v=a.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;

  padding: 14px;

  ${({theme:o,$totamjungTheme:r})=>r==="solvedAcLight"&&n`
      border: 1px solid ${o.solvedAcColor.LIGHTER_GRAY};
    `};

  border-radius: 8px;
  background-color: ${({$totamjungTheme:o})=>i[o]};

  word-break: break-all;

  ${({$open:o})=>!o&&n`
      display: none;
    `}

  ${({$maxWidth:o})=>o&&n`
      max-width: ${o};
    `}

  &::after {
    content: '';
    position: absolute;

    width: 0;
    height: 0;

    border: 9px solid;

    ${({$totamjungTheme:o,$direction:r})=>{const t=h[o];return r==="left"?n`
          top: 50%;
          left: 100%;

          border-left-width: 9px;
          border-color: transparent transparent transparent ${t};

          transform: translateY(-50%);
        `:r==="right"?n`
          top: 50%;
          right: 100%;

          border-left-width: 9px;
          border-color: transparent ${t} transparent transparent;

          transform: translateY(-50%);
        `:r==="down"?n`
          bottom: 100%;
          left: 50%;

          border-left-width: 9px;
          border-color: transparent transparent ${t} transparent;

          transform: translateX(-50%);
        `:n`
        top: 100%;
        left: 50%;

        border-left-width: 9px;
        border-color: ${t} transparent transparent transparent;

        transform: translateX(-50%);
      `}};
  }
`,A=a.div`
  width: 100%;
  height: 100%;
`,g=a.span`
  font-size: 14px;
  line-height: 14px;
  font-family: Pretendard;
  color: ${({$totamjungTheme:o})=>b[o]};
`,f=a.div`
  display: flex;

  width: 20px;
  height: 20px;

  margin-left: auto;
`,C=a.button`
  width: 20px;
  height: 20px;

  background: none;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$totamjungTheme:o})=>x[o]};
  }
`,s=o=>{const{open:r,content:t,theme:d,direction:c,maxWidth:u,hasCloseButton:p}=o;return l.jsxs(v,{$open:r,$totamjungTheme:d,$direction:c,$maxWidth:u,children:[typeof t=="string"?l.jsx(g,{$totamjungTheme:d,children:t}):l.jsx(A,{children:t}),p&&l.jsx(f,{children:l.jsx(C,{$totamjungTheme:d,type:"button","aria-label":"닫기",onClick:o.onClose,children:l.jsx(m,{})})})]})};try{s.displayName="SpeechBubble",s.__docgenInfo={description:"",displayName:"SpeechBubble",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},hasCloseButton:{defaultValue:null,description:"",name:"hasCloseButton",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{s as S};
