import{j as s}from"./jsx-runtime-DEdD30eg.js";import{d as c}from"./styled-components.browser.esm-CkAH7aAm.js";const m=c.div`
  width: ${({$width:r})=>`${r}px`};
  height: ${({$height:r})=>`${r}px`};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,g=c.svg`
  transform: rotate(-90deg);
`,a=r=>{const{size:e,progress:l,color:d,trackColor:u}=r,o=e/8,t=e/2,n=(e-o*2)/2,i=2*Math.PI*n,p=i*(100-l)/100;return s.jsx(m,{$width:e,$height:e,children:s.jsxs(g,{children:[s.jsx("circle",{cx:t,cy:t,r:n,strokeWidth:o,stroke:u,fill:"none"}),s.jsx("circle",{cx:t,cy:t,r:n,strokeWidth:o,stroke:d,strokeDasharray:i,strokeDashoffset:p,fill:"none"})]})})};try{a.displayName="CircleProgressBar",a.__docgenInfo={description:"",displayName:"CircleProgressBar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},trackColor:{defaultValue:null,description:"",name:"trackColor",required:!0,type:{name:"string"}}}}}catch{}export{a as C};
