import{j as v}from"./jsx-runtime-Cf8x2fCZ.js";import{r as A}from"./index--qcDGAq6.js";import{t as l}from"./toPx-DeOSKary.js";import{d as E}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as $}from"./getTransparentHexColor-DN69VCBw.js";import{t as o}from"./theme-CqSsbPCW.js";const d={none:o.color.LIGHT_GRAY,totamjung:o.color.LIGHTER_BROWN,bojExtendedDark:o.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:o.bojExtendedColor.SKY_BLUE,solvedAcLight:o.color.LIGHT_GRAY,solvedAcDark:o.color.LIGHT_GRAY,solvedAcBlack:o.color.LIGHT_GRAY},n={...d,totamjung:o.color.LEMON},R={none:o.color.WHITE,totamjung:o.color.DARK_BROWN,bojExtendedDark:o.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_INDIGO,solvedAcLight:o.color.WHITE,solvedAcDark:o.solvedAcColor.DARK_INDIGO,solvedAcBlack:o.color.BLACK},j=["none","solvedAcLight"],y=E.input`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  padding: 0 ${({$horizontalPadding:e})=>e};

  border: ${({$borderWidth:e})=>`${e}px`} solid
    ${({$totamjungTheme:e})=>d[e]};
  border-radius: ${({$borderRadius:e})=>e};
  background-color: ${({$totamjungTheme:e})=>R[e]};

  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  font-weight: ${({$fontWeight:e})=>e};

  color: ${({theme:e,$color:t,$totamjungTheme:r})=>t||(j.includes(r)?e.color.BLACK:e.color.WHITE)};

  &:focus {
    border-color: ${({theme:e,$totamjungTheme:t,$hasError:r})=>r?e.color.RED:n[t]};
    outline: 3px solid
      ${({theme:e,$totamjungTheme:t,$hasError:r})=>$(r?e.color.RED:n[t],.5)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`,a=A.forwardRef((e,t)=>{const{width:r,height:i,borderWidth:u=1.5,borderRadius:s="4px",horizontalPadding:c="6px",fontSize:m="13px",fontWeight:p=400,hasError:h=!1,theme:g="totamjung",color:f,textAlign:b="left",...x}=e;return v.jsx(y,{$width:l(r),$height:l(i),$borderWidth:u,$borderRadius:l(s),$horizontalPadding:l(c),$fontSize:l(m),$fontWeight:p,$hasError:h,$color:f,$totamjungTheme:g,$textAlign:b,spellCheck:!1,ref:t,...x})});try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"FontWeight"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number"}},horizontalPadding:{defaultValue:null,description:"",name:"horizontalPadding",required:!1,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'}]}}}}}catch{}export{a as I};
