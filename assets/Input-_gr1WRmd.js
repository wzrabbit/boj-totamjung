import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";import{d as p}from"./styled-components.browser.esm-CkAH7aAm.js";const u=p.input`
  width: ${({$width:e})=>e};
  height: 30px;
  padding: 0 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  text-align: ${({$textAlign:e})=>e};
  font-size: 13px;

  &:focus,
  &:active {
    border-color: ${({theme:e,$hasError:r})=>r?e.color.RED:e.color.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:r})=>r?e.color.RED:e.color.LEMON}70;
  }

  transition: outline 0.05s;
`,d=l.forwardRef((e,r)=>{const{width:t,hasError:n,textAlign:i,ariaLabel:a,...o}=e;return s.jsx(u,{$width:t,$hasError:n,$textAlign:i,"aria-label":a,spellCheck:!1,ref:r,...o})});d.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!0,tsType:{name:"union",raw:"'text' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"}]},description:""},width:{required:!0,tsType:{name:"CSSProperties['width']",raw:"CSSProperties['width']"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},textAlign:{required:!0,tsType:{name:"union",raw:"'left' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},hasError:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};export{d as I};
