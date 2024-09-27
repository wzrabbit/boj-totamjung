import{j as i}from"./jsx-runtime-DEdD30eg.js";import{d as o,l as t}from"./styled-components.browser.esm-CkAH7aAm.js";const m=o.p`
  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};

  ${({theme:e,$type:r})=>r==="primary"?t`
        color: ${e.color.GOLD};
        font-weight: 600;
      `:r==="semiPrimary"?t`
        color: ${e.color.LEMON};
      `:r==="code"?t`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:t`
      color: ${e.color.WHITE};
    `}
`,s=e=>{const{type:r,fontSize:l,textAlign:a="left",children:n}=e;return i.jsx(m,{$type:r,$fontSize:l,$textAlign:a,children:n})};s.__docgenInfo={description:"",methods:[],displayName:"Text",props:{type:{required:!0,tsType:{name:"union",raw:"'primary' | 'semiPrimary' | 'normal' | 'code'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'semiPrimary'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'code'"}]},description:""},fontSize:{required:!0,tsType:{name:"union",raw:"'16px' | '14px' | '13px'",elements:[{name:"literal",value:"'16px'"},{name:"literal",value:"'14px'"},{name:"literal",value:"'13px'"}]},description:""},textAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:""}}};export{s as T};
