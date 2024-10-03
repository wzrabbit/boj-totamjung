import{j as i}from"./jsx-runtime-DEdD30eg.js";import{d as u,l as t}from"./styled-components.browser.esm-CkAH7aAm.js";const c=u.p`
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
`,l=e=>{const{type:r,fontSize:o,textAlign:a="left",children:n}=e;return i.jsx(c,{$type:r,$fontSize:o,$textAlign:a,children:n})};try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}export{l as T};
