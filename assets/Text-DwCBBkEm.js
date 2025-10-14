import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{l as n,d as f}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as c}from"./toPx-DeOSKary.js";const m=f.p`
  display: inline-block;

  width: ${({$width:e})=>e};

  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e}px;
  line-height: 1.2;

  ${({theme:e,$type:t,$color:r,$fontFamily:l,$fontWeight:a,$opacity:i})=>t==="primary"?n`
        font-family: Pretendard;
        color: ${e.color.GOLD};
        font-weight: 600;
      `:t==="semiPrimary"?n`
        font-family: Pretendard;
        color: ${e.color.LEMON};
      `:t==="normal"?n`
        font-family: Pretendard;
        color: ${e.color.WHITE};
      `:t==="gray"?n`
        font-family: Pretendard;
        color: ${e.color.LIGHT_GRAY};
      `:t==="black"?n`
        font-family: Pretendard;
        color: ${e.color.BLACK};
      `:t==="code"?n`
        font-family: 'IBM Plex Mono', Consolas, Pretendard;
        color: ${e.color.WHITE};
      `:n`
      color: ${r??e.color.WHITE};
      font-family: ${l??"Pretendard"};
      font-weight: ${a??400};
      opacity: ${i??1};
    `}
`,o=e=>{const{type:t,fontSize:r,textAlign:l="left",width:a="100%",as:i="p",children:u}=e;return d.jsx(m,{as:i,$type:t,$fontSize:r,$textAlign:l,$width:c(a),$color:"color"in e?e.color:void 0,$fontFamily:"fontFamily"in e?e.fontFamily:void 0,$fontWeight:"fontWeight"in e?e.fontWeight:void 0,$opacity:"opacity"in e?e.opacity:1,children:u})};try{o.displayName="Text",o.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"primary"'},{value:'"semiPrimary"'},{value:'"normal"'},{value:'"gray"'},{value:'"code"'},{value:'"custom"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"FontWeight"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}}}}}catch{}export{o as T};
