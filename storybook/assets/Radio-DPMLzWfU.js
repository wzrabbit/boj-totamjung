import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{d as o,l as r}from"./styled-components.browser.esm-CIS6JKSM.js";const d=o.label`
  position: relative;

  width: 16px;
  height: 16px;
`,l=o.div`
  display: inline-block;
  flex-shrink: 0;
  position: relative;

  width: 16px;
  height: 16px;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 8px;
  transition: 0.15s;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  ${({theme:e,$checked:a})=>a?r`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:r`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,s=o.input.attrs({type:"radio"})`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: transparent;
  border: none;
  margin: 0;

  appearance: none;
  -webkit-appearance: none;
`,i=e=>{const{checked:a,disabled:t=!1}=e;return n.jsxs(d,{children:[n.jsx(s,{...e,onChange:()=>{if("value"in e){e.onChange(e.value);return}e.onChange()}}),n.jsx(l,{$checked:a,$disabled:t})]})};try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | (() => void)"}}}}}catch{}export{i as R};
