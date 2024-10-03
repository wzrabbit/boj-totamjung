import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as o,l as i}from"./styled-components.browser.esm-CkAH7aAm.js";const l=o.label`
  width: 16px;
  height: 16px;
`,t=o.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  ${({theme:e,$checked:a})=>a?i`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:i`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,s=o.input.attrs({type:"radio"})`
  display: none;
`,r=e=>{const{checked:a,disabled:d}=e;return n.jsxs(l,{children:[n.jsx(s,{...e,onChange:()=>{if("value"in e){e.onChange(e.value);return}e.onChange()}}),n.jsx(t,{$checked:a,$disabled:d})]})};try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | (() => void)"}}}}}catch{}export{r as R};
