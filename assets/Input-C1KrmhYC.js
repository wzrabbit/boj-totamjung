import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{d as p}from"./styled-components.browser.esm-CkAH7aAm.js";const s=p.input`
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
`,t=d.forwardRef((e,r)=>{const{width:n,hasError:a,textAlign:l,ariaLabel:u,...i}=e;return o.jsx(s,{$width:n,$hasError:a,$textAlign:l,"aria-label":u,spellCheck:!1,ref:r,...i})});try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}export{t as I};
