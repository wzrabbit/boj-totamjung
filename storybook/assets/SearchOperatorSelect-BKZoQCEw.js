import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./index--qcDGAq6.js";import{S as s}from"./check-BIa-lIjI.js";import{d as n,m as l}from"./styled-components.browser.esm-CIS6JKSM.js";const p=n.ul`
  display: flex;
  justify-content: space-between;

  width: 210px;
  height: 18px;

  user-select: none;
`,d=n.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 70px;
  height: 18px;
`,u=l`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,h=n.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${u} 0.15s forwards;
  }
`,m=n.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:o})=>o?e.color.GOLD:e.color.LIGHT_GRAY};
`,x=[{operator:"OR",description:"OR: 선택된 알고리즘 분류 중 하나 이상 포함되는 문제들만 추첨에서 등장합니다."},{operator:"AND",description:"AND: 선택된 알고리즘 분류 모두를 포함하는 문제들만 추첨에서 등장합니다."},{operator:"NOR",description:"NOR: 선택된 알고리즘 분류 모두를 포함하지 않는 문제들만 추첨에서 등장합니다."}],a=e=>{const{selectedOperator:o,onClick:i}=e;return r.jsx(p,{children:x.map(({operator:t,description:c})=>r.jsxs(d,{children:[t===o&&r.jsx(h,{children:r.jsx(s,{})}),r.jsx(m,{type:"button",title:c,"aria-label":`알고리즘 검색 옵션을 ${t}로 설정하기`,$isSelected:t===o,onClick:()=>{i(t)},children:t})]},t))})};try{a.displayName="SearchOperatorSelect",a.__docgenInfo={description:"",displayName:"SearchOperatorSelect",props:{selectedOperator:{defaultValue:null,description:"",name:"selectedOperator",required:!0,type:{name:"enum",value:[{value:'"OR"'},{value:'"AND"'},{value:'"NOR"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(operator: SearchOperator) => void"}}}}}catch{}export{a as S};
