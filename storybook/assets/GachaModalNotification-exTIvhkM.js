import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import"./index--qcDGAq6.js";import{S as n}from"./check-BIa-lIjI.js";import{d as o,m as r}from"./styled-components.browser.esm-CIS6JKSM.js";const c=r`
  0% {
    opacity: 1;
    filter: brightness(200%);
  }

  20% {
    opacity: 1;
    filter: brightness(100%);
  }

  80% {
    opacity: 1;
    filter: brightness(100%);
  }

  100% {
    opacity: 0;
    filter: brightness(100%);
  }
`,d=o.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;

  user-select: none;

  &.fading {
    animation: ${c} 2s forwards;
  }
`,l=o.div`
  width: 20px;
  height: 20px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:t})=>t.colors.GOLD};
  }
`,h=o.div`
  font-size: 16px;
  color: ${({theme:t})=>t.colors.GOLD};
  font-weight: 600;
`,a=t=>{const{children:e,shouldFadeOut:s}=t;return i.jsxs(d,{className:s?"fading":"",children:[e!==""&&i.jsx(l,{children:i.jsx(n,{})}),i.jsx(h,{children:e})]})};try{a.displayName="GachaModalNotification",a.__docgenInfo={description:"",displayName:"GachaModalNotification",props:{shouldFadeOut:{defaultValue:null,description:"",name:"shouldFadeOut",required:!0,type:{name:"boolean"}}}}}catch{}export{a as G};
