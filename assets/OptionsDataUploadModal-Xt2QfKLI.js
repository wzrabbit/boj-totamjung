import{j as o}from"./jsx-runtime-DEdD30eg.js";import{M as x,a as f}from"./Modal-D1bPJ0G-.js";import{I as i}from"./IconButton-oO0tyT1G.js";import{T as l}from"./Text-Dr0lXUnC.js";import{I as h}from"./Input-C1KrmhYC.js";import{u as j}from"./useConfirmInput-fbtHW9n0.js";import{t as s}from"./theme-C4yZJZ7X.js";import"./index-RYns6xqu.js";import{S as y}from"./close-circle-Z95a0wyf.js";import{S as C}from"./file-upload-D_bXM9eZ.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";const _=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,I=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:e})=>e.color.LIGHT_RED_TRANSPARENT};
`,n=t.li`
  font-size: 14px;
  color: ${({theme:e})=>e.color.LIGHT_RED};
`,T=t.div`
  display: flex;
  justify-content: center;
`,a="숙지했습니다",E=e=>{const{open:p,onClose:r,onUpload:d}=e,{inputValue:c,isSameWithConfirmText:m,updateInputValue:u}=j({confirmText:a});return o.jsxs(x,{title:"데이터 업로드",open:p,onClose:r,children:[o.jsxs(_,{children:[o.jsx(l,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),o.jsxs(I,{children:[o.jsx(n,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),o.jsx(n,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),o.jsx(n,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),o.jsxs(l,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",o.jsx("b",{children:a}),"를 입력해 주십시오."]}),o.jsx(T,{children:o.jsx(h,{type:"text",width:"300px",value:c,textAlign:"center",placeholder:`"${a}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:u})})]}),o.jsxs(f,{children:[o.jsx(i,{type:"button",name:"취소",size:"medium",iconSrc:o.jsx(y,{}),color:s.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:r}),o.jsx(i,{type:"button",name:"업로드",size:"medium",iconSrc:o.jsx(C,{}),color:s.color.LIME,disabled:!m,ariaLabel:"업로드",onClick:d})]})]})};try{OptionsDataUploadModal.displayName="OptionsDataUploadModal",OptionsDataUploadModal.__docgenInfo={description:"",displayName:"OptionsDataUploadModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!0,type:{name:"() => void"}}}}}catch{}export{E as O};
