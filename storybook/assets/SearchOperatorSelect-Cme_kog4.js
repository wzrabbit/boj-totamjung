import{j as r}from"./jsx-runtime-SwSI87LU.js";import"./index-C5e9SFkp.js";import{S as l}from"./check-BDBG6Lff.js";import{u as p}from"./useTranslation-CHmiwnmk.js";import{y as n,O as d}from"./styled-components.browser.esm-DmPUYCQi.js";const u=n.ul`
  display: flex;
  justify-content: space-between;

  width: 210px;
  height: 18px;

  user-select: none;
`,h=n.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 2px;

  width: 70px;
  height: 18px;
`,m=d`
  from {
    transform: scale(0.5);
  }
  
  to {
    transform: scale(1);
  }
`,f=n.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.colors.GOLD};

    animation: ${m} 0.15s forwards;
  }
`,x=n.button`
  width: auto;
  height: 18px;
  background: transparent;

  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e,$isSelected:o})=>o?e.colors.GOLD:e.colors.GRAY_300};
`,O={OR:"randomDefenseCreate.searchOperator.orDescription",AND:"randomDefenseCreate.searchOperator.andDescription",NOR:"randomDefenseCreate.searchOperator.norDescription"},s=e=>{const{selectedOperator:o,onClick:c}=e,{t:a}=p(),i=["OR","AND","NOR"];return r.jsx(u,{children:i.map(t=>r.jsxs(h,{children:[t===o&&r.jsx(f,{children:r.jsx(l,{})}),r.jsx(x,{type:"button",title:a(O[t]),"aria-label":a("randomDefenseCreate.searchOperator.setAriaLabel",[t]),$isSelected:t===o,onClick:()=>{c(t)},children:t})]},t))})};try{s.displayName="SearchOperatorSelect",s.__docgenInfo={description:"",displayName:"SearchOperatorSelect",props:{selectedOperator:{defaultValue:null,description:"",name:"selectedOperator",required:!0,type:{name:"enum",value:[{value:'"OR"'},{value:'"AND"'},{value:'"NOR"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(operator: SearchOperator) => void"}}}}}catch{}export{s as S};
