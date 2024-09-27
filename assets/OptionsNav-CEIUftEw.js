import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";const s=t.nav`
  display: inline-flex;

  height: 36px;
`,c=t.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,d=t.li`
  display: flex;
  flex-direction: column;
`,l=t.button`
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
`,p=t.span`
  display: inline-block;

  width: ${({$isSelected:e})=>e?"100%":"0"};
  height: 2px;

  background-color: ${({theme:e})=>e.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:e})=>e.color.LEMON};
  }
`,g=[{displayName:"알고리즘 가리개",category:"algorithmHider"},{displayName:"문제 추첨",category:"randomDefense"},{displayName:"외관 및 데이터 관리",category:"appearanceAndDataManage"}],m=e=>{const{selectedCategory:r,onChange:i}=e;return o.jsx(s,{children:o.jsx(c,{children:g.map(({displayName:a,category:n})=>o.jsxs(d,{children:[o.jsx(l,{$isSelected:n===r,onClick:()=>{i(n)},children:a}),o.jsx(p,{$isSelected:n===r})]},a))})})};m.__docgenInfo={description:"",methods:[],displayName:"OptionsNav",props:{selectedCategory:{required:!0,tsType:{name:"OptionsNavCategory"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(category: OptionsNavCategory) => void",signature:{arguments:[{type:{name:"OptionsNavCategory"},name:"category"}],return:{name:"void"}}},description:""}}};export{m as O};
