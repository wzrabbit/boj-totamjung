import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";const g=n.div`
  width: ${({$width:r})=>`${r}px`};
  height: ${({$height:r})=>`${r}px`};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,x=n.svg`
  transform: rotate(-90deg);
`,f=r=>{const{size:s,progress:a,color:d,trackColor:h}=r,e=s/8,o=s/2,c=(s-e*2)/2,i=2*Math.PI*c,l=i*(100-a)/100;return t.jsx(g,{$width:s,$height:s,children:t.jsxs(x,{children:[t.jsx("circle",{cx:o,cy:o,r:c,strokeWidth:e,stroke:h,fill:"none"}),t.jsx("circle",{cx:o,cy:o,r:c,strokeWidth:e,stroke:d,strokeDasharray:i,strokeDashoffset:l,fill:"none"})]})})};f.__docgenInfo={description:"",methods:[],displayName:"CircleProgressBar"};export{f as C};
