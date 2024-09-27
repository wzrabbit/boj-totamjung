import{j as e}from"./jsx-runtime-DEdD30eg.js";import{M as x,a as f}from"./Modal-D8EuTlZI.js";import{I as s}from"./IconButton-D0rtTRsA.js";import{T as a}from"./Text-DG2UbxfS.js";import{I as h}from"./Input-_gr1WRmd.js";import{u as j}from"./useConfirmInput-fbtHW9n0.js";import{t as l}from"./theme-C4yZJZ7X.js";import"./index-RYns6xqu.js";import{S as g}from"./close-circle-Z95a0wyf.js";import{S as y}from"./file-upload-D_bXM9eZ.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";const T=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,C=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:o})=>o.color.LIGHT_RED_TRANSPARENT};
`,r=t.li`
  font-size: 14px;
  color: ${({theme:o})=>o.color.LIGHT_RED};
`,I=t.div`
  display: flex;
  justify-content: center;
`,n="숙지했습니다",b=o=>{const{open:p,onClose:i,onUpload:d}=o,{inputValue:c,isSameWithConfirmText:m,updateInputValue:u}=j({confirmText:n});return e.jsxs(x,{title:"데이터 업로드",open:p,onClose:i,children:[e.jsxs(T,{children:[e.jsx(a,{type:"normal",fontSize:"16px",children:"업로드 전 아래의 주의사항을 읽어 주십시오:"}),e.jsxs(C,{children:[e.jsx(r,{children:"데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존 데이터는 손실될 것입니다."}),e.jsx(r,{children:'업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를 보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를 백업해 두실 것을 권장드립니다.'}),e.jsx(r,{children:"업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다."})]}),e.jsxs(a,{type:"normal",fontSize:"16px",children:["위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의 입력창에 ",e.jsx("b",{children:n}),"를 입력해 주십시오."]}),e.jsx(I,{children:e.jsx(h,{type:"text",width:"300px",value:c,textAlign:"center",placeholder:`"${n}"를 입력해 주세요`,hasError:!1,ariaLabel:"",onChange:u})})]}),e.jsxs(f,{children:[e.jsx(s,{type:"button",name:"취소",size:"medium",iconSrc:e.jsx(g,{}),color:l.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:i}),e.jsx(s,{type:"button",name:"업로드",size:"medium",iconSrc:e.jsx(y,{}),color:l.color.LIME,disabled:!m,ariaLabel:"업로드",onClick:d})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"OptionsDataResetModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUpload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{b as O};
