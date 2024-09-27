import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{d as p}from"./styled-components.browser.esm-CkAH7aAm.js";const l=p.textarea`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  padding: 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 13px;

  resize: none;

  &:focus,
  &:active {
    border-color: ${({theme:e,$hasError:r})=>r?e.color.RED:e.color.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:r})=>r?e.color.RED:e.color.LEMON}70;
  }

  transition: outline 0.05s;
`,c=d.forwardRef((e,r)=>{const{width:t,height:i,hasError:o,ariaLabel:n,...a}=e;return s.jsx(l,{$width:t,$height:i,$hasError:o,spellCheck:!1,"aria-label":n,ref:r,...a})});c.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{width:{required:!0,tsType:{name:"CSSProperties['width']",raw:"CSSProperties['width']"},description:""},height:{required:!0,tsType:{name:"CSSProperties['height']",raw:"CSSProperties['height']"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},hasError:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""}}};export{c as T};
