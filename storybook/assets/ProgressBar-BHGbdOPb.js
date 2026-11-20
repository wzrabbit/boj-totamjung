import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as s}from"./styled-components.browser.esm-CIS6JKSM.js";import{t}from"./toPx-DeOSKary.js";const p=s.div`
  position: relative;

  width: ${({$width:r})=>`${r}`};
  height: ${({$height:r})=>`${r}`};
`,o=s.div`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({$progress:r})=>`${r}%`};
  height: 100%;

  background-color: ${({$backgroundColor:r})=>r};
`,i=r=>{const{width:n,height:a,progress:l,color:d,trackColor:u}=r;return e.jsxs(p,{$width:t(n),$height:t(a),children:[e.jsx(o,{$backgroundColor:u,$progress:100}),e.jsx(o,{$backgroundColor:d,$progress:l})]})};try{i.displayName="ProgressBar",i.__docgenInfo={description:"",displayName:"ProgressBar",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},trackColor:{defaultValue:null,description:"",name:"trackColor",required:!0,type:{name:"string"}}}}}catch{}export{i as P};
