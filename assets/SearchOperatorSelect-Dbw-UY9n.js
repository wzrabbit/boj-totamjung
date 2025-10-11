import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./index--qcDGAq6.js";import{S as i}from"./check-BIa-lIjI.js";import{d as n,m as s}from"./styled-components.browser.esm-CIS6JKSM.js";const l=n.ul`
  display: flex;
  justify-content: space-between;

  width: 210px;
  height: 18px;

  user-select: none;
`,p=n.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 70px;
  height: 18px;
`,d=s`
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

    animation: ${d} 0.15s forwards;
  }
`,u=n.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:o})=>o?e.color.GOLD:e.color.LIGHT_GRAY};
`,m=["OR","AND","NOR"],a=e=>{const{searchOperator:o,onClick:c}=e;return r.jsx(l,{children:m.map(t=>r.jsxs(p,{children:[t===o&&r.jsx(h,{children:r.jsx(i,{})}),r.jsx(u,{type:"button","aria-label":`알고리즘 검색 옵션을 ${t}로 설정하기`,$isSelected:t===o,onClick:()=>{c(t)},children:t})]},t))})};try{a.displayName="SearchOperatorSelect",a.__docgenInfo={description:"",displayName:"SearchOperatorSelect",props:{searchOperator:{defaultValue:null,description:"",name:"searchOperator",required:!0,type:{name:"enum",value:[{value:'"OR"'},{value:'"AND"'},{value:'"NOR"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(searchOperator: SearchOperator) => void"}}}}}catch{}export{a as S};
