import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";const s=t.div`
  display: inline-block;
  position: relative;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  padding: ${({$padding:e})=>e};

  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,a=t.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({theme:e})=>e.color.LIGHTER_BROWN};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h=e=>{const{width:o,height:d,padding:p,title:i,children:n}=e;return r.jsxs(s,{$width:o,$height:d,$padding:p,children:[i!==""&&r.jsx(a,{children:i}),n]})};h.__docgenInfo={description:"",methods:[],displayName:"NamedFrame",props:{width:{required:!0,tsType:{name:"CSSProperties['width']",raw:"CSSProperties['width']"},description:""},height:{required:!0,tsType:{name:"CSSProperties['height']",raw:"CSSProperties['height']"},description:""},padding:{required:!0,tsType:{name:"CSSProperties['padding']",raw:"CSSProperties['padding']"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};export{h as N};
