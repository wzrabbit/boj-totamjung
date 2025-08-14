import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{l as t,d as u}from"./styled-components.browser.esm-CIS6JKSM.js";const d=u.p`
  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  line-height: 1.2;

  ${({theme:e,$type:r})=>r==="primary"?t`
        font-family: Pretendard;
        color: ${e.color.GOLD};
        font-weight: 600;
      `:r==="semiPrimary"?t`
        font-family: Pretendard;
        color: ${e.color.LEMON};
      `:r==="gray"?t`
        font-family: Pretendard;
        color: ${e.color.LIGHT_GRAY};
      `:r==="darkGray"?t`
        font-family: Pretendard;
        color: ${e.color.DARK_GRAY};
      `:r==="code"?t`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:t`
      font-family: Pretendard;
      color: ${e.color.WHITE};
    `}
`,a=e=>{const{type:r,fontSize:l,textAlign:o="left",children:n}=e;return i.jsx(d,{$type:r,$fontSize:l,$textAlign:o,children:n})};try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"gray"'},{value:'"darkGray"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}export{a as T};
