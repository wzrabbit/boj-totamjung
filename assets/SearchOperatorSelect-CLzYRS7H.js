import{j as r}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{S as i}from"./check-Dgz4zLBN.js";import{d as o,m as s}from"./styled-components.browser.esm-CkAH7aAm.js";const l=o.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,p=o.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,d=s`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,h=o.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${d} 0.15s forwards;
  }
`,u=o.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:n})=>n?e.color.GOLD:e.color.LIGHT_GRAY};
`,m=["OR","AND","NOR"],a=e=>{const{searchOperator:n,onClick:c}=e;return r.jsx(l,{children:m.map(t=>r.jsxs(p,{children:[t===n&&r.jsx(h,{children:r.jsx(i,{})}),r.jsx(u,{type:"button","aria-label":`알고리즘 검색 옵션을 ${t}로 설정하기`,$isSelected:t===n,onClick:()=>{c(t)},children:t})]},t))})};try{a.displayName="SearchOperatorSelect",a.__docgenInfo={description:"",displayName:"SearchOperatorSelect",props:{searchOperator:{defaultValue:null,description:"",name:"searchOperator",required:!0,type:{name:"enum",value:[{value:'"OR"'},{value:'"AND"'},{value:'"NOR"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:'(searchOperator: "OR" | "AND" | "NOR") => void'}}}}}catch{}export{a as S};
