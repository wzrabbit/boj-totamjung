import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as n}from"./styled-components.browser.esm-CIS6JKSM.js";const s=n.nav`
  display: inline-flex;

  height: 36px;
`,d=n.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,c=n.li`
  display: flex;
  flex-direction: column;
`,p=n.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme:e})=>e.color.GOLD};
  background: none;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: ${({$isSelected:e})=>e?800:600};
  color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme:e})=>e.color.LEMON};
  }
`,u=n.span`
  display: inline-block;

  width: ${({$isSelected:e})=>e?"100%":"0"};
  height: 2px;

  background-color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:e})=>e.color.LEMON};
  }
`,g=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"랜덤 디펜스",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],i=e=>{const{selectedCategory:t,onChange:l}=e;return o.jsx(s,{children:o.jsx(d,{children:g.map(({displayName:r,category:a})=>o.jsxs(c,{children:[o.jsx(p,{$isSelected:a===t,onClick:()=>{l(a)},children:r}),o.jsx(u,{$isSelected:a===t})]},r))})})};try{i.displayName="OptionsNav",i.__docgenInfo={description:"",displayName:"OptionsNav",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}}}catch{}export{i as O};
