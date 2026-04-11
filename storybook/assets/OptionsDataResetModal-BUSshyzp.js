import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{M as f,a as h}from"./Modal-BqfnNzBT.js";import{I as s}from"./IconButton-CJ4kdUS9.js";import{T as a}from"./Text-bOlMMuiR.js";import{I as j}from"./Input-CWi2PE1C.js";import{u as y}from"./useConfirmInput-CTEujkIa.js";import{t as l}from"./theme-DB0vf-rZ.js";import"./index--qcDGAq6.js";import{S as C}from"./trash-JRBuQ8nU.js";import{S as g}from"./close-circle-Dx72CTk1.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as _}from"./getTransparentHexColor-DN69VCBw.js";const R=t.div`
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
  background-color: ${({theme:o})=>_(o.colors.LIGHT_RED,.13)};
`,r=t.li`
  font-size: 14px;
  color: ${({theme:o})=>o.colors.LIGHT_RED};
`,T=t.div`
  display: flex;
  justify-content: center;
`,n="초기화에 동의합니다",p=o=>{const{open:d,onClose:i,onReset:c}=o,{inputValue:m,isSameWithConfirmText:x,updateInputValue:u}=y({confirmText:n});return e.jsxs(f,{title:"데이터 초기화",open:d,onClose:i,children:[e.jsxs(R,{children:[e.jsx(a,{type:"normal",fontSize:16,children:"초기화 전 아래의 주의사항을 읽어 주십시오:"}),e.jsxs(I,{children:[e.jsx(r,{children:"데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한 데이터를 포함하여 모든 데이터가 초기화됩니다."}),e.jsx(r,{children:'초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),e.jsx(r,{children:"초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),e.jsxs(a,{type:"normal",fontSize:16,children:["위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의 입력창에 ",e.jsx("b",{children:n}),"를 입력해 주십시오."]}),e.jsx(T,{children:e.jsx(j,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:m,textAlign:"center",placeholder:`"${n}"를 입력해 주세요`,hasError:!1,onChange:u})})]}),e.jsxs(h,{children:[e.jsx(s,{type:"button",name:"취소",size:"medium",iconSrc:e.jsx(g,{}),color:l.colors.GRAY_300,disabled:!1,onClick:i}),e.jsx(s,{type:"button",name:"초기화",size:"medium",iconSrc:e.jsx(C,{}),color:l.colors.RED,disabled:!x,onClick:c})]})]})};try{p.displayName="OptionsDataResetModal",p.__docgenInfo={description:"",displayName:"OptionsDataResetModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}export{p as O};
