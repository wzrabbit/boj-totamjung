import{j as a}from"./jsx-runtime-DEdD30eg.js";import{d as r,l as i}from"./styled-components.browser.esm-CkAH7aAm.js";const l=r.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,c=r.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme:e})=>e.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme:e,$isChecked:o})=>o?i`
          box-shadow: 0 0 8px ${e.color.GOLD};
          background-color: ${e.color.GOLD};
        `:i`
          box-shadow: 0 0 8px ${e.color.DARK_BROWN};
          background-color: transparent;
        `}
`,d=r.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`,n=e=>{const{isChecked:o,ariaLabel:t,onChange:s}=e;return a.jsxs(l,{children:[a.jsx(d,{checked:o,"aria-label":t,onChange:s}),a.jsx(c,{$isChecked:o})]})};try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}export{n as C};
