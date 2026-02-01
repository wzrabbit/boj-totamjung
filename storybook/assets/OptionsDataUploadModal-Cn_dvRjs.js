import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{M as f,a as h}from"./Modal-Cac1K4CQ.js";import{I as a}from"./IconButton-Cuc1o0yv.js";import{T as l}from"./Text-Bm9VDKPH.js";import{I as j}from"./Input-6KUAzuzj.js";import{u as y}from"./useConfirmInput-CTEujkIa.js";import{t as s}from"./theme-DpyODYgC.js";import"./index--qcDGAq6.js";import{S as C}from"./close-circle-Dx72CTk1.js";import{S as _}from"./file-upload-mz0LOrA9.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";const I=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,g=t.ul`
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
`,r="숙지했습니다",p=e=>{const{open:d,onClose:i,onUpload:c}=e,{inputValue:m,isSameWithConfirmText:u,updateInputValue:x}=y({confirmText:r});return o.jsxs(f,{title:"데이터 업로드",open:d,onClose:i,children:[o.jsxs(I,{children:[o.jsx(l,{type:"normal",fontSize:16,children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),o.jsxs(g,{children:[o.jsx(n,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),o.jsx(n,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),o.jsx(n,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),o.jsxs(l,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",o.jsx("b",{children:r}),"를 입력해 주십시오."]}),o.jsx(T,{children:o.jsx(j,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:m,textAlign:"center",placeholder:`"${r}"를 입력해 주세요`,hasError:!1,onChange:x})})]}),o.jsxs(h,{children:[o.jsx(a,{type:"button",name:"취소",size:"medium",iconSrc:o.jsx(C,{}),color:s.color.LIGHT_GRAY,disabled:!1,onClick:i}),o.jsx(a,{type:"button",name:"업로드",size:"medium",iconSrc:o.jsx(_,{}),color:s.color.LIME,disabled:!u,onClick:c})]})]})};try{p.displayName="OptionsDataUploadModal",p.__docgenInfo={description:"",displayName:"OptionsDataUploadModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!0,type:{name:"() => void"}}}}}catch{}export{p as O};
