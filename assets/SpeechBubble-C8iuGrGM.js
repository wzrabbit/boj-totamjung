import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as l,l as a}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as u}from"./Text-B2xQYZk4.js";import"./index-RYns6xqu.js";import{S as c}from"./close-R_Y1ANk3.js";const m=l.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;

  padding: 14px;

  border-radius: 8px;
  background-color: ${({theme:e,$totamjungTheme:t})=>t==="totamjung"?e.color.BLACK_DARKER_TRANSPARENT:e.color.BOJ_BLUE};

  word-break: break-all;

  ${({$open:e})=>!e&&a`
      display: none;
    `}

  ${({$maxWidth:e})=>e&&a`
      max-width: ${e};
    `}

  &::after {
    content: '';
    position: absolute;

    width: 0;
    height: 0;

    border: 9px solid;

    ${({theme:e,$totamjungTheme:t,$direction:r})=>{const n=t==="totamjung"?e.color.BLACK_DARKER_TRANSPARENT:e.color.BOJ_BLUE;return r==="left"?a`
          top: 50%;
          left: 100%;

          border-left-width: 9px;
          border-color: transparent transparent transparent ${n};

          transform: translateY(-50%);
        `:r==="right"?a`
          top: 50%;
          right: 100%;

          border-left-width: 9px;
          border-color: transparent ${n} transparent transparent;

          transform: translateY(-50%);
        `:r==="down"?a`
          bottom: 100%;
          left: 50%;

          border-left-width: 9px;
          border-color: transparent transparent ${n} transparent;

          transform: translateX(-50%);
        `:a`
        top: 100%;
        left: 50%;

        border-left-width: 9px;
        border-color: ${n} transparent transparent transparent;

        transform: translateX(-50%);
      `}};
  }
`,h=l.div`
  width: 100%;
  height: 100%;
`,f=l.div`
  display: flex;

  width: 20px;
  height: 20px;

  margin-left: auto;
`,g=l.button`
  width: 20px;
  height: 20px;

  background: none;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e,$totamjungTheme:t})=>t==="totamjung"?e.color.LIGHTER_BROWN:e.color.WHITE};
  }
`,i=e=>{const{open:t,content:r,totamjungTheme:n,direction:s,maxWidth:d,hasCloseButton:p}=e;return o.jsxs(m,{$open:t,$totamjungTheme:n,$direction:s,$maxWidth:d,children:[typeof r=="string"?o.jsx(u,{type:"normal",fontSize:"14px",children:r}):o.jsx(h,{children:r}),p&&o.jsx(f,{children:o.jsx(g,{$totamjungTheme:n,type:"button","aria-label":"닫기",onClick:e.onClose,children:o.jsx(c,{})})})]})};try{i.displayName="SpeechBubble",i.__docgenInfo={description:"",displayName:"SpeechBubble",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},totamjungTheme:{defaultValue:null,description:"",name:"totamjungTheme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},hasCloseButton:{defaultValue:null,description:"",name:"hasCloseButton",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{i as S};
