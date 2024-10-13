import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as g}from"./index-RYns6xqu.js";import{O as m}from"./OptionsNav-QcPXiVWW.js";import{S as d}from"./SimpleModal-DS6ylK8y.js";import{T as c}from"./TotamjungInfoModal-zKTmrpZk.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";const u=""+new URL("settings-title-BAsh2fbw.png",import.meta.url).href,h=""+new URL("guidebook-button-DB51pF_8.png",import.meta.url).href,f=""+new URL("info-button-gVHj_-G9.png",import.meta.url).href,x=t.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,y=t.h1`
  width: 130px;
  height: 100%;
`,b=t.img`
  width: 100%;
`,j=t.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,C=t.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:n})=>n.color.GOLD};
`,i=t.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,r=t.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,s=n=>{const{selectedCategory:l,onCategoryChange:p}=n,[a,o]=g.useState("none");return e.jsxs(x,{children:[e.jsx(y,{children:e.jsx(b,{src:u,alt:"토탐정 설정"})}),e.jsx(m,{selectedCategory:l,onChange:p}),e.jsxs(j,{children:[e.jsx(C,{children:`v${browser.runtime.getManifest().version}`}),e.jsx(i,{type:"button","aria-label":"도움말",onClick:()=>{o("guidePageOpenConfirm")},children:e.jsx(r,{src:h,alt:""})}),e.jsx(i,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{o("totamjungInfo")},children:e.jsx(r,{src:f,alt:""})})]}),e.jsx(d,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:a==="guidePageOpenConfirm",message:"토탐정 도움말 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open("https://github.com/wzrabbit/boj-totamjung/blob/main/GUIDE.md"),o("none")},onNoSelect:()=>{o("none")}}),e.jsx(c,{open:a==="totamjungInfo",onClose:()=>{o("none")}})]})};try{s.displayName="OptionsHeader",s.__docgenInfo={description:"",displayName:"OptionsHeader",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onCategoryChange:{defaultValue:null,description:"",name:"onCategoryChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}}}catch{}export{s as O};
