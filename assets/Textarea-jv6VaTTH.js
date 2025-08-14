import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index--qcDGAq6.js";import{d as s}from"./styled-components.browser.esm-CIS6JKSM.js";const p=s.textarea`
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
`,a=d.forwardRef((e,r)=>{const{width:t,height:n,hasError:i,ariaLabel:l,...o}=e;return u.jsx(p,{$width:t,$height:n,$hasError:i,spellCheck:!1,"aria-label":l,ref:r,...o})});try{a.displayName="Textarea",a.__docgenInfo={description:"",displayName:"Textarea",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}}}catch{}export{a as T};
