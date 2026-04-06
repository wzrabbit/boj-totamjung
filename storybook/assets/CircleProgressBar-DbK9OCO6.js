import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as c}from"./styled-components.browser.esm-CIS6JKSM.js";const m=c.div`
  width: ${({$width:e})=>`${e}px`};
  height: ${({$height:e})=>`${e}px`};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,h=c.svg`
  transform: rotate(-90deg);
`,a=e=>{const{size:r,strokeWidth:t,progress:l,color:d,trackColor:u}=e,s=r/2,i=r/2-t/2,n=2*Math.PI*(r-t)/2,p=n*(100-l)/100;return o.jsx(m,{$width:r,$height:r,children:o.jsxs(h,{children:[o.jsx("circle",{cx:s,cy:s,r:i,strokeWidth:t,stroke:u,fill:"none"}),o.jsx("circle",{cx:s,cy:s,r:i,strokeWidth:t,stroke:d,strokeDasharray:n,strokeDashoffset:p,fill:"none"})]})})};try{a.displayName="CircleProgressBar",a.__docgenInfo={description:"",displayName:"CircleProgressBar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},trackColor:{defaultValue:null,description:"",name:"trackColor",required:!0,type:{name:"string"}}}}}catch{}export{a as C};
