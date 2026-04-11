import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{l as n,d as a}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-DB0vf-rZ.js";import{g as d}from"./getTransparentHexColor-DN69VCBw.js";import"./index--qcDGAq6.js";import{S as h}from"./close-BziWfrbF.js";const c={none:e.colors.BOJ_BLUE,totamjung:d(e.colors.BLACK,.67),solvedAcLight:e.solvedAcColors.OFF_WHITE,solvedAcDark:e.solvedAcColors.DARK_INDIGO,solvedAcBlack:e.solvedAcColors.DARK_INDIGO,bojExtendedDark:d(e.colors.BLACK,.67),bojExtendedRigel:e.bojExtendedColors.DARK_INDIGO},b={...c,solvedAcLight:e.solvedAcColors.GRAY_100},x={none:e.colors.OFF_WHITE,totamjung:e.colors.OFF_WHITE,solvedAcLight:e.colors.BLACK,solvedAcDark:e.colors.OFF_WHITE,solvedAcBlack:e.colors.OFF_WHITE,bojExtendedDark:e.colors.OFF_WHITE,bojExtendedRigel:e.colors.OFF_WHITE},g={none:e.colors.OFF_WHITE,totamjung:e.colors.BROWN_300,solvedAcLight:e.colors.GRAY_500,solvedAcDark:e.solvedAcColors.GRAY_400,solvedAcBlack:e.solvedAcColors.GRAY_400,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.bojExtendedColors.SKY_BLUE},v=a.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;

  padding: 14px;

  ${({theme:o,$totamjungTheme:r})=>r==="solvedAcLight"&&n`
      border: 1px solid ${o.solvedAcColors.GRAY_100};
    `};

  border-radius: 8px;
  background-color: ${({$totamjungTheme:o})=>c[o]};

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

    ${({$totamjungTheme:o,$direction:r})=>{const t=b[o];return r==="left"?n`
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
`,f=a.div`
  width: 100%;
  height: 100%;
`,A=a.span`
  font-size: 14px;
  line-height: 14px;
  color: ${({$totamjungTheme:o})=>x[o]};
`,C=a.div`
  display: flex;

  width: 20px;
  height: 20px;

  margin-left: auto;
`,_=a.button`
  width: 20px;
  height: 20px;

  background: none;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$totamjungTheme:o})=>g[o]};
  }
`,i=o=>{const{open:r,content:t,theme:s,direction:u,maxWidth:p,hasCloseButton:m}=o;return l.jsxs(v,{$open:r,$totamjungTheme:s,$direction:u,$maxWidth:p,children:[typeof t=="string"?l.jsx(A,{$totamjungTheme:s,children:t}):l.jsx(f,{children:t}),m&&l.jsx(C,{children:l.jsx(_,{$totamjungTheme:s,type:"button","aria-label":"닫기",onClick:o.onClose,children:l.jsx(h,{})})})]})};try{i.displayName="SpeechBubble",i.__docgenInfo={description:"",displayName:"SpeechBubble",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"up"'},{value:'"right"'},{value:'"down"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},hasCloseButton:{defaultValue:null,description:"",name:"hasCloseButton",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{i as S};
