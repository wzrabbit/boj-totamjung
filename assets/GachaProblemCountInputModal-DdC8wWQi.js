import{j as n}from"./jsx-runtime-DEdD30eg.js";import{M as f,a as j}from"./Modal-Cuej82dh.js";import{I}from"./IconButton-DB9afjvp.js";import{d as c}from"./styled-components.browser.esm-CkAH7aAm.js";import{g as s}from"./getTransparentHexColor-DN69VCBw.js";import{r as v}from"./index-RYns6xqu.js";import{S as E}from"./check-circle-c0jdaR34.js";import{a as d}from"./randomDefense-BrQ0TErT.js";import{t as o}from"./theme-CqSsbPCW.js";const h={none:o.color.LIGHT_GRAY,totamjung:o.color.LIGHTER_BROWN,bojExtendedDark:o.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:o.bojExtendedColor.SKY_BLUE,solvedAcLight:o.color.LIGHT_GRAY,solvedAcDark:o.color.LIGHT_GRAY,solvedAcBlack:o.color.LIGHT_GRAY},x={...h,totamjung:o.color.LEMON},T={none:o.color.WHITE,totamjung:o.color.DARK_BROWN,bojExtendedDark:o.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:o.bojExtendedColor.DARK_INDIGO,solvedAcLight:o.color.WHITE,solvedAcDark:o.solvedAcColor.DARK_INDIGO,solvedAcBlack:o.color.BLACK},_=c.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,R=c.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid
    ${({$totamjungTheme:e})=>h[e]};
  border-radius: 5.666px;
  background-color: ${({$totamjungTheme:e})=>T[e]};

  color: ${({theme:e,$totamjungTheme:r})=>m.includes(r)?e.color.BLACK:e.color.WHITE};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({$totamjungTheme:e})=>x[e]};
    outline: 3px solid
      ${({$totamjungTheme:e})=>s(x[e],.5)};
  }

  transition: outline 0.05s;
`,i=c.p`
  font-family: Pretendard;
  font-size: ${({$fontSize:e})=>e};
  text-align: ${({$textAlign:e})=>e};
  color: ${({theme:e,$totamjungTheme:r,$isTransparent:t})=>{const l=t?.6:1;return m.includes(r)?s(e.color.BLACK,l):s(e.color.WHITE,l)}};
`,$=/^\d+$/,G=()=>{const[e,r]=v.useState("5"),t=u=>{const a=u.target.value;a.length>=3||r(a)},l=$.test(e)&&Number(e)>=1&&Number(e)<=d;return{inputValue:e,updateInputValue:t,isInputValueValid:l}},m=["none","solvedAcLight"],g=e=>{const{open:r,theme:t="totamjung",portalTarget:l,shouldShowHotkeyMessage:u,onClose:a,onSubmitProblemCount:b}=e,{inputValue:p,updateInputValue:A,isInputValueValid:C}=G();return n.jsxs(f,{title:"즉석 추첨",theme:t,portalTarget:l,open:r,onClose:a,children:[n.jsxs(_,{children:[n.jsx(i,{$totamjungTheme:t,$fontSize:"16px",$textAlign:"left",children:"추첨을 진행할 문제 수를 입력해 주세요."}),n.jsx(R,{type:"number",min:1,max:d,value:p,$totamjungTheme:t,onChange:A,autoFocus:!0}),n.jsx(i,{$totamjungTheme:t,$fontSize:"14px",$textAlign:"right",children:`1문제 이상, ${d}문제 이하`}),u&&n.jsx(i,{$totamjungTheme:t,$fontSize:"16px",$textAlign:"left",$isTransparent:!0,children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),n.jsx(j,{theme:t,children:n.jsx(I,{type:"button",name:"확인",size:"medium",iconSrc:n.jsx(E,{}),color:m.includes(t)?o.color.DARK_GRAY:o.color.GOLD,disabled:!C,ariaLabel:"확인",onClick:()=>b(Number(p))})})]})};try{g.displayName="GachaProblemCountInputModal",g.__docgenInfo={description:"",displayName:"GachaProblemCountInputModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement | null"}},shouldShowHotkeyMessage:{defaultValue:null,description:"",name:"shouldShowHotkeyMessage",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSubmitProblemCount:{defaultValue:null,description:"",name:"onSubmitProblemCount",required:!0,type:{name:"(problemCount: number) => void"}}}}}catch{}export{g as G};
