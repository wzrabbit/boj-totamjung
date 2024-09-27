import{j as n}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{S as i}from"./check-Dgz4zLBN.js";import{d as a,m as s}from"./styled-components.browser.esm-CkAH7aAm.js";const l=a.ul`
  display: flex;
  justify-content: space-between;

  width: 180px;
  height: 18px;

  user-select: none;
`,c=a.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 52px;
  height: 18px;
`,p=s`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,m=a.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};

    animation: ${p} 0.15s forwards;
  }
`,u=a.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:r})=>r?e.color.GOLD:e.color.LIGHT_GRAY};
`,d=["OR","AND","NOR"],h=e=>{const{searchOperator:r,onClick:o}=e;return n.jsx(l,{children:d.map(t=>n.jsxs(c,{children:[t===r&&n.jsx(m,{children:n.jsx(i,{})}),n.jsx(u,{type:"button","aria-label":`알고리즘 검색 옵션을 ${t}로 설정하기`,$isSelected:t===r,onClick:()=>{o(t)},children:t})]},t))})};h.__docgenInfo={description:"",methods:[],displayName:"SearchOperatorSelect",props:{searchOperator:{required:!0,tsType:{name:"union",raw:"'OR' | 'AND' | 'NOR'",elements:[{name:"literal",value:"'OR'"},{name:"literal",value:"'AND'"},{name:"literal",value:"'NOR'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(searchOperator: 'OR' | 'AND' | 'NOR') => void",signature:{arguments:[{type:{name:"union",raw:"'OR' | 'AND' | 'NOR'",elements:[{name:"literal",value:"'OR'"},{name:"literal",value:"'AND'"},{name:"literal",value:"'NOR'"}]},name:"searchOperator"}],return:{name:"void"}}},description:""}}};export{h as S};
