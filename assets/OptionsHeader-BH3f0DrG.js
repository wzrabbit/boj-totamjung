import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as g}from"./index-RYns6xqu.js";import{O as l}from"./OptionsNav-CEIUftEw.js";import{S as m}from"./SimpleModal-ClNHGUid.js";import{T as c}from"./TotamjungInfoModal-NXMlDYdx.js";import{d as e}from"./styled-components.browser.esm-CkAH7aAm.js";const d=""+new URL("settings-title-BAsh2fbw.png",import.meta.url).href,u=""+new URL("guidebook-button-DB51pF_8.png",import.meta.url).href,h=""+new URL("info-button-gVHj_-G9.png",import.meta.url).href,x=e.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,f=e.h1`
  width: 130px;
  height: 100%;
`,y=e.img`
  width: 100%;
`,b=e.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,j=e.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:n})=>n.color.GOLD};
`,s=e.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,a=e.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,C=n=>{const{selectedCategory:r,onCategoryChange:p}=n,[i,o]=g.useState("none");return t.jsxs(x,{children:[t.jsx(f,{children:t.jsx(y,{src:d,alt:"토탐정 설정"})}),t.jsx(l,{selectedCategory:r,onChange:p}),t.jsxs(b,{children:[t.jsx(j,{children:`v${browser.runtime.getManifest().version}`}),t.jsx(s,{type:"button","aria-label":"도움말",onClick:()=>{o("guidePageOpenConfirm")},children:t.jsx(a,{src:u,alt:""})}),t.jsx(s,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{o("totamjungInfo")},children:t.jsx(a,{src:h,alt:""})})]}),t.jsx(m,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:i==="guidePageOpenConfirm",message:"토탐정 도움말 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/blob/main/GUIDE.md"),o("none")},onNoSelect:()=>{o("none")}}),t.jsx(c,{open:i==="totamjungInfo",onClose:()=>{o("none")}})]})};C.__docgenInfo={description:"",methods:[],displayName:"OptionsHeader",props:{selectedCategory:{required:!0,tsType:{name:"OptionsNavCategory"},description:""},onCategoryChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(category: OptionsNavCategory) => void",signature:{arguments:[{type:{name:"OptionsNavCategory"},name:"category"}],return:{name:"void"}}},description:""}}};export{C as O};
