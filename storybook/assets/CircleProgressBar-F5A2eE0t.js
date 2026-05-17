import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{d as a}from"./styled-components.browser.esm-CIS6JKSM.js";const m=a.div`
  width: ${({$width:r})=>`${r}px`};
  height: ${({$height:r})=>`${r}px`};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,h=a.svg`
  transform: rotate(-90deg);

  & circle {
    transition: stroke ${({$colorTransitionMs:r})=>r}ms;
  }
`,i=r=>{const{size:e,strokeWidth:o,progress:c,color:l,trackColor:C,colorTransitionMs:d=0}=r,t=e/2,u=e/2-o/2,n=2*Math.PI*(e-o)/2,p=n*(100-c)/100;return s.jsx(m,{$width:e,$height:e,children:s.jsxs(h,{$colorTransitionMs:d,children:[s.jsx("circle",{cx:t,cy:t,r:u,strokeWidth:o,stroke:C,fill:"none"}),s.jsx("circle",{cx:t,cy:t,r:u,strokeWidth:o,stroke:l,strokeDasharray:n,strokeDashoffset:p,fill:"none"})]})})};try{i.displayName="CircleProgressBar",i.__docgenInfo={description:"",displayName:"CircleProgressBar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},trackColor:{defaultValue:null,description:"",name:"trackColor",required:!0,type:{name:"string"}},colorTransitionMs:{defaultValue:null,description:"`color`·`trackColor` 변경 시 적용할 stroke 전환 시간(ms).\n0이면 즉시 전환됩니다. 기본값 0.",name:"colorTransitionMs",required:!1,type:{name:"number"}}}}}catch{}try{colorTransitionMs.displayName="colorTransitionMs",colorTransitionMs.__docgenInfo={description:"`color`·`trackColor` 변경 시 적용할 stroke 전환 시간(ms).\n0이면 즉시 전환됩니다. 기본값 0.",displayName:"colorTransitionMs",props:{}}}catch{}export{i as C};
