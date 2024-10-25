import{j as i}from"./jsx-runtime-DEdD30eg.js";import{d as u,l as r}from"./styled-components.browser.esm-CkAH7aAm.js";const c=u.p`
  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  line-height: 1.2;

  ${({theme:e,$type:t})=>t==="primary"?r`
        color: ${e.color.GOLD};
        font-weight: 600;
      `:t==="semiPrimary"?r`
        color: ${e.color.LEMON};
      `:t==="code"?r`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:r`
      color: ${e.color.WHITE};
    `}
`,l=e=>{const{type:t,fontSize:o,textAlign:n="left",children:a}=e;return i.jsx(c,{$type:t,$fontSize:o,$textAlign:n,children:a})};try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"code"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"enum",value:[{value:'"16px"'},{value:'"14px"'},{value:'"13px"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}export{l as T};
