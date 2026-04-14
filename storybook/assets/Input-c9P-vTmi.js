import{j as v}from"./jsx-runtime-Cf8x2fCZ.js";import{r as A}from"./index--qcDGAq6.js";import{t as l}from"./toPx-DeOSKary.js";import{d as $}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as E}from"./getTransparentHexColor-DN69VCBw.js";import{t as o}from"./theme-DB0vf-rZ.js";const d={none:o.colors.GRAY_300,totamjung:o.colors.BROWN_500,bojExtendedDark:o.bojExtendedColors.GRAY_300,bojExtendedRigel:o.bojExtendedColors.SKY_BLUE,solvedAcLight:o.colors.GRAY_300,solvedAcDark:o.colors.GRAY_300,solvedAcBlack:o.colors.GRAY_300},n={...d,totamjung:o.colors.LEMON},_={none:o.colors.OFF_WHITE,totamjung:o.colors.BROWN_900,bojExtendedDark:o.bojExtendedColors.GRAY_900,bojExtendedRigel:o.bojExtendedColors.DARK_INDIGO,solvedAcLight:o.colors.OFF_WHITE,solvedAcDark:o.solvedAcColors.DARK_INDIGO,solvedAcBlack:o.colors.BLACK},R=["none","solvedAcLight"],j=$.input`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  padding: 0 ${({$horizontalPadding:e})=>e};

  border: ${({$borderWidth:e})=>`${e}px`} solid
    ${({$totamjungTheme:e})=>d[e]};
  border-radius: ${({$borderRadius:e})=>e};
  background-color: ${({$totamjungTheme:e})=>_[e]};

  text-align: ${({$textAlign:e})=>e};
  font-size: ${({$fontSize:e})=>e};
  font-weight: ${({$fontWeight:e})=>e};

  color: ${({theme:e,$color:t,$totamjungTheme:r})=>t||(R.includes(r)?e.colors.BLACK:e.colors.OFF_WHITE)};

  &:focus {
    border-color: ${({theme:e,$totamjungTheme:t,$hasError:r})=>r?e.colors.RED:n[t]};
    outline: 3px solid
      ${({theme:e,$totamjungTheme:t,$hasError:r})=>E(r?e.colors.RED:n[t],.5)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  transition: outline 0.05s;
`,a=A.forwardRef((e,t)=>{const{width:r,height:i,borderWidth:u=1.5,borderRadius:s="4px",horizontalPadding:c="6px",fontSize:m="13px",fontWeight:p=400,hasError:h=!1,theme:g="totamjung",color:f,textAlign:b="left",...x}=e;return v.jsx(j,{$width:l(r),$height:l(i),$borderWidth:u,$borderRadius:l(s),$horizontalPadding:l(c),$fontSize:l(m),$fontWeight:p,$hasError:h,$color:f,$totamjungTheme:g,$textAlign:b,spellCheck:!1,ref:t,...x})});try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number"}},horizontalPadding:{defaultValue:null,description:"",name:"horizontalPadding",required:!1,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"FontWeight"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}}}}}catch{}export{a as I};
