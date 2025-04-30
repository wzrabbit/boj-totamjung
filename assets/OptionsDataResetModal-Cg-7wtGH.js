import{j as e}from"./jsx-runtime-DEdD30eg.js";import{M as f,a as h}from"./Modal-Cuej82dh.js";import{I as a}from"./IconButton-DB9afjvp.js";import{T as s}from"./Text-tixoFlKX.js";import{I as j}from"./Input-C1KrmhYC.js";import{u as y}from"./useConfirmInput-fbtHW9n0.js";import{t as l}from"./theme-CqSsbPCW.js";import"./index-RYns6xqu.js";import{S as C}from"./trash-CO6QCs-j.js";import{S as R}from"./close-circle-Z95a0wyf.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";const _=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,T=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:o})=>o.color.LIGHT_RED_TRANSPARENT};
`,n=t.li`
  font-size: 14px;
  color: ${({theme:o})=>o.color.LIGHT_RED};
`,I=t.div`
  display: flex;
  justify-content: center;
`,r="초기화에 동의합니다",p=o=>{const{open:d,onClose:i,onReset:c}=o,{inputValue:m,isSameWithConfirmText:u,updateInputValue:x}=y({confirmText:r});return e.jsxs(f,{title:"데이터 초기화",open:d,onClose:i,children:[e.jsxs(_,{children:[e.jsx(s,{type:"normal",fontSize:"16px",children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),e.jsxs(T,{children:[e.jsx(n,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),e.jsx(n,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),e.jsx(n,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),e.jsxs(s,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",e.jsx("b",{children:r}),"를 입력해 주십시오."]}),e.jsx(I,{children:e.jsx(j,{type:"text",width:"300px",value:m,textAlign:"center",placeholder:`"${r}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:x})})]}),e.jsxs(h,{children:[e.jsx(a,{type:"button",name:"취소",size:"medium",iconSrc:e.jsx(R,{}),color:l.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:i}),e.jsx(a,{type:"button",name:"초기화",size:"medium",iconSrc:e.jsx(C,{}),color:l.color.RED,disabled:!u,ariaLabel:"초기화",onClick:c})]})]})};try{p.displayName="OptionsDataResetModal",p.__docgenInfo={description:"",displayName:"OptionsDataResetModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}export{p as O};
