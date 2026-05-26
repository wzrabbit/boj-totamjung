import{j as o}from"./jsx-runtime-SwSI87LU.js";import{u as c}from"./useTranslation-oInNA2-n.js";import{y as n}from"./styled-components.browser.esm-DmPUYCQi.js";const d=n.nav`
  display: inline-flex;

  height: 36px;
`,p=n.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`,u=n.li`
  display: flex;
  flex-direction: column;
`,g=n.button`
  padding: 2px;

  border-bottom: 0px solid ${({theme:e})=>e.colors.GOLD};
  background: none;

  font-size: 20px;
  font-weight: ${({$isSelected:e})=>e?800:600};
  color: ${({theme:e})=>e.colors.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({theme:e})=>e.colors.LEMON};
  }
`,m=n.span`
  display: inline-block;

  width: ${({$isSelected:e})=>e?"100%":"0"};
  height: 2px;

  background-color: ${({theme:e})=>e.colors.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({theme:e})=>e.colors.LEMON};
  }
`,h=[{labelKey:"options.nav.algorithmHider",category:"algorithmHider"},{labelKey:"options.nav.randomDefense",category:"randomDefense"},{labelKey:"options.nav.appearanceAndDataManage",category:"appearanceAndDataManage"}],r=e=>{const{selectedCategory:t,onChange:i}=e,{t:s}=c();return o.jsx(d,{children:o.jsx(p,{children:h.map(({labelKey:l,category:a})=>o.jsxs(u,{children:[o.jsx(g,{$isSelected:a===t,onClick:()=>{i(a)},children:s(l)}),o.jsx(m,{$isSelected:a===t})]},a))})})};try{r.displayName="OptionsNav",r.__docgenInfo={description:"",displayName:"OptionsNav",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}}}catch{}export{r as O};
