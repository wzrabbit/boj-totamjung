import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as r,l as i}from"./styled-components.browser.esm-CkAH7aAm.js";const l=r.label`
  display: inline-block;
  position: relative;

  width: ${({$size:e})=>e==="large"?"50px":"40px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & * {
    border-radius: ${({$size:e})=>e==="large"?"15px":"12px"};
  }
`,p=r.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,c=r.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme:e,$isChecked:t})=>t?e.color.GOLD:e.color.LIGHTER_BROWN};

  box-shadow: ${({theme:e,$isChecked:t})=>t?`0 0 12px ${e.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,d=r.div`
  display: inline-block;
  position: absolute;

  width: ${({$size:e})=>e==="large"?"26px":"20px"};
  height: ${({$size:e})=>e==="large"?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size:e,$isChecked:t})=>t?e==="large"?i`
            transform: translateX(20px);
          `:i`
            transform: translateX(16px);
          `:i`
          transform: translateX(0);
        `}
`,u=e=>{const{size:t,isChecked:a,ariaLabel:o,onChange:s}=e;return n.jsxs(l,{$size:t,children:[n.jsx(p,{checked:a,"aria-label":o,onChange:s,value:""}),n.jsx(c,{$isChecked:a,children:n.jsx(d,{$size:t,$isChecked:a})})]})};u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!0,tsType:{name:"union",raw:"'large' | 'medium'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"}]},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};export{u as S};
