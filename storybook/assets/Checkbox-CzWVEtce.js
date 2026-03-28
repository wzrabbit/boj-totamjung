import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index--qcDGAq6.js";import{d as o,l as t}from"./styled-components.browser.esm-CIS6JKSM.js";const b=o.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,h=o.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:e,$isChecked:a})=>a?t`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:t`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,m=o.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,i=u.forwardRef((e,a)=>{const{isChecked:r,name:l,ariaLabel:d,tabIndex:s=0,onChange:c,onKeyDown:p}=e;return n.jsxs(b,{children:[n.jsx(m,{checked:r,name:l,"aria-label":d,onChange:c,ref:a,tabIndex:s,onKeyDown:p}),n.jsx(h,{$isChecked:r})]})});try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}}}}}catch{}export{i as C};
