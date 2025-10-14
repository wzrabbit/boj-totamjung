import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as c}from"./Text-DwCBBkEm.js";import{d as i}from"./styled-components.browser.esm-CIS6JKSM.js";const m=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  width: 100%;
  height: 100%;

  user-select: none;
`,d=i.div`
  display: inline-block;

  color: ${({theme:e})=>e.color.GOLD};
  font-family: 'Do Hyeon';
  font-size: 22px;
`,p=i.img`
  margin-bottom: 10px;
`,r=e=>{const{imageSrc:n,imageWidth:l,imageHeight:o,title:s,description:a}=e;return t.jsxs(m,{children:[t.jsx(p,{width:l,height:o,src:n,alt:"",draggable:!1}),t.jsx(d,{children:s}),a&&t.jsx(c,{type:"normal",fontSize:14,textAlign:"center",children:a})]})};try{r.displayName="FallbackWithImage",r.__docgenInfo={description:"",displayName:"FallbackWithImage",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageWidth:{defaultValue:null,description:"",name:"imageWidth",required:!0,type:{name:"number"}},imageHeight:{defaultValue:null,description:"",name:"imageHeight",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}export{r as F};
