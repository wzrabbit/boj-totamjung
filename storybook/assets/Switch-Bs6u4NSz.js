import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as r,l as n}from"./styled-components.browser.esm-CIS6JKSM.js";const p=r.label`
  display: inline-block;
  position: relative;

  width: ${({$size:e})=>e==="large"?"50px":"40px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:e})=>e==="large"?"15px":"12px"};
  }
`,c=r.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,d=r.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:e,$isChecked:a})=>a?e.color.GOLD:e.color.LIGHTER_BROWN};

  box-shadow: ${({theme:e,$isChecked:a})=>a?`0 0 12px ${e.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,u=r.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:e})=>e==="large"?"26px":"20px"};
  height: ${({$size:e})=>e==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:e,$isChecked:a})=>a?e==="large"?n`
            transform: translateX(20px);
          `:n`
            transform: translateX(16px);
          `:n`
          transform: translateX(0);
        `}
`,o=e=>{const{size:a,isChecked:i,ariaLabel:l,onChange:s}=e;return t.jsxs(p,{$size:a,children:[t.jsx(c,{checked:i,"aria-label":l,onChange:s,value:""}),t.jsx(d,{$isChecked:i,children:t.jsx(u,{$size:a,$isChecked:i})})]})};try{o.displayName="Switch",o.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}export{o as S};
