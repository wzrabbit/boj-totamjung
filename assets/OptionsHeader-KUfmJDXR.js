import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index--qcDGAq6.js";import{O as c}from"./OptionsNav-oYhGpsQY.js";import{S as d}from"./SimpleModal-Dgc3kYAu.js";import{T as m}from"./TotamjungInfoModal-ofAusxoI.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";const u=""+new URL("settings-title-BAsh2fbw.png",import.meta.url).href,h=""+new URL("guidebook-button-DB51pF_8.png",import.meta.url).href,f=""+new URL("info-button-gVHj_-G9.png",import.meta.url).href,x="https://github.com/wzrabbit/boj-totamjung/wiki/%ED%86%A0%ED%83%90%EC%A0%95-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",C=t.header`
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
`,j=t.img`
  width: 100%;
`,b=t.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,w=t.span`
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
`,s=n=>{const{selectedCategory:l,onCategoryChange:p}=n,[a,o]=g.useState("none");return e.jsxs(C,{children:[e.jsx(y,{children:e.jsx(j,{src:u,alt:"토탐정 설정"})}),e.jsx(c,{selectedCategory:l,onChange:p}),e.jsxs(b,{children:[e.jsx(w,{children:`v${browser.runtime.getManifest().version}`}),e.jsx(i,{type:"button","aria-label":"도움말",onClick:()=>{o("guidePageOpenConfirm")},children:e.jsx(r,{src:h,alt:""})}),e.jsx(i,{type:"button","aria-label":"버전 정보 및 문의",onClick:()=>{o("totamjungInfo")},children:e.jsx(r,{src:f,alt:""})})]}),e.jsx(d,{title:"도움말 페이지 열기 확인",actionType:"yesNo",width:"350px",height:"auto",open:a==="guidePageOpenConfirm",message:"토탐정 사용 가이드 페이지를 열람하시겠어요?",onYesSelect:()=>{window.open(x),o("none")},onNoSelect:()=>{o("none")}}),e.jsx(m,{open:a==="totamjungInfo",onClose:()=>{o("none")}})]})};try{s.displayName="OptionsHeader",s.__docgenInfo={description:"",displayName:"OptionsHeader",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onCategoryChange:{defaultValue:null,description:"",name:"onCategoryChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}}}catch{}export{s as O};
