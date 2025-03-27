import{j as n}from"./jsx-runtime-DEdD30eg.js";import{M as h,a as f}from"./Modal-B6gp7QWS.js";import{I as b}from"./IconButton-DB9afjvp.js";import{T as u}from"./Text-D9btwR46.js";import{d}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as y}from"./index-RYns6xqu.js";import{S as j}from"./check-circle-c0jdaR34.js";import{t as m}from"./theme-YzccoX_F.js";import{M as i}from"./randomDefense-DFxRSgnp.js";const C=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,I=d.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid
    ${({theme:e,$theme:o})=>o==="totamjung"?e.color.LIGHTER_BROWN:e.color.LIGHT_GRAY};
  border-radius: 5.666px;
  background-color: ${({theme:e,$theme:o})=>o==="totamjung"?e.color.DARK_BROWN:e.color.WHITE};

  color: ${({theme:e,$theme:o})=>o==="totamjung"?e.color.WHITE:e.color.BLACK};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({theme:e,$theme:o})=>o==="totamjung"?e.color.LEMON:e.color.LIGHT_GRAY};
    outline: 3px solid
      ${({theme:e,$theme:o})=>o==="totamjung"?e.color.LEMON:e.color.LIGHT_GRAY}70;
  }

  transition: outline 0.05s;
`,_=/^\d+$/,G=()=>{const[e,o]=y.useState("5"),t=l=>{const r=l.target.value;r.length>=3||o(r)},a=_.test(e)&&Number(e)>=1&&Number(e)<=i;return{inputValue:e,updateInputValue:t,isInputValueValid:a}},p=e=>{const{open:o,theme:t="totamjung",portalTarget:a,shouldShowHotkeyMessage:l,onClose:r,onSubmitProblemCount:c}=e,{inputValue:s,updateInputValue:g,isInputValueValid:x}=G();return n.jsxs(h,{title:"즉석 추첨",theme:t,portalTarget:a,open:o,onClose:r,children:[n.jsxs(C,{children:[n.jsx(u,{type:t==="totamjung"?"normal":"darkGray",fontSize:"16px",children:"추첨을 진행할 문제 수를 입력해 주세요."}),n.jsx(I,{type:"number",min:1,max:i,value:s,$theme:t,onChange:g,autoFocus:!0}),n.jsx(u,{type:t==="totamjung"?"normal":"darkGray",textAlign:"right",fontSize:"14px",children:`1문제 이상, ${i}문제 이하`}),l&&n.jsx(u,{type:t==="totamjung"?"gray":"darkGray",textAlign:"left",fontSize:"16px",children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),n.jsx(f,{theme:t,children:n.jsx(b,{type:"button",name:"확인",size:"medium",iconSrc:n.jsx(j,{}),color:t==="totamjung"?m.color.GOLD:m.color.DARK_GRAY,disabled:!x,ariaLabel:"확인",onClick:()=>c(Number(s))})})]})};try{p.displayName="GachaProblemCountInputModal",p.__docgenInfo={description:"",displayName:"GachaProblemCountInputModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},portalTarget:{defaultValue:null,description:"",name:"portalTarget",required:!1,type:{name:"HTMLElement | null"}},shouldShowHotkeyMessage:{defaultValue:null,description:"",name:"shouldShowHotkeyMessage",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSubmitProblemCount:{defaultValue:null,description:"",name:"onSubmitProblemCount",required:!0,type:{name:"(problemCount: number) => void"}}}}}catch{}export{p as G};
