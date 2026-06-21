import{j as t}from"./jsx-runtime-SwSI87LU.js";import{y as d}from"./styled-components.browser.esm-DmPUYCQi.js";const p=d.div`
  display: inline-block;
  position: relative;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  padding: ${({$padding:e})=>e};

  border: 2px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};
`,s=d.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({theme:e})=>e.colors.BROWN_500};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,r=e=>{const{width:n,height:o,padding:a,title:i,children:l}=e;return t.jsxs(p,{$width:n,$height:o,$padding:a,children:[i!==""&&t.jsx(s,{children:i}),l]})};try{r.displayName="NamedFrame",r.__docgenInfo={description:"",displayName:"NamedFrame",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!0,type:{name:"Padding<number | (string & {})> | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{r as N};
