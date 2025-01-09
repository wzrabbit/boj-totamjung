import{j as i}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{S as r}from"./check-Dgz4zLBN.js";import{m as s,d as o}from"./styled-components.browser.esm-CkAH7aAm.js";const c=s`
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

    color: ${({theme:t})=>t.color.GOLD};
  }
`,h=o.div`
  font-size: 16px;
  color: ${({theme:t})=>t.color.GOLD};
  font-weight: 600;
`,a=t=>{const{children:e,shouldFadeOut:n}=t;return i.jsxs(d,{className:n?"fading":"",children:[e!==""&&i.jsx(l,{children:i.jsx(r,{})}),i.jsx(h,{children:e})]})};try{a.displayName="GachaModalNotification",a.__docgenInfo={description:"",displayName:"GachaModalNotification",props:{shouldFadeOut:{defaultValue:null,description:"",name:"shouldFadeOut",required:!0,type:{name:"boolean"}}}}}catch{}export{a as G};
