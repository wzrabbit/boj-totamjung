import{j as e}from"./jsx-runtime-DEdD30eg.js";import{M as p,a as f}from"./Modal-D1bPJ0G-.js";import{I as i}from"./IconButton-oO0tyT1G.js";import{T as C}from"./Text-Dr0lXUnC.js";import{t as l}from"./theme-C4yZJZ7X.js";import"./index-RYns6xqu.js";import{S as c}from"./close-circle-Z95a0wyf.js";import{S as a}from"./check-circle-c0jdaR34.js";import{d as h}from"./styled-components.browser.esm-CkAH7aAm.js";const x=h.div`
  width: ${({$width:o})=>o};
  max-width: 100%;
  min-height: ${({$height:o})=>o};
`,s=o=>{const{title:n,width:t,height:m,open:u,message:d,actionType:r}=o;return e.jsxs(p,{title:n,open:u,onClose:()=>{r==="yesNo"?o.onNoSelect():o.onClose()},children:[e.jsx(x,{$width:t,$height:m,children:e.jsx(C,{type:"normal",fontSize:"16px",children:d})}),e.jsx(f,{children:r==="confirm"?e.jsx(y,{onClose:o.onClose}):r==="cancelConfirm"?e.jsx(S,{onClose:o.onClose,onConfirm:o.onConfirm}):e.jsx(j,{onYesSelect:o.onYesSelect,onNoSelect:o.onNoSelect})})]})},y=o=>{const{onClose:n}=o;return e.jsx(i,{type:"button",name:"확인",size:"medium",iconSrc:e.jsx(a,{}),color:l.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:n,autoFocus:!0})},S=o=>{const{onClose:n,onConfirm:t}=o;return e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",name:"취소",size:"medium",iconSrc:e.jsx(c,{}),color:l.color.LIGHT_GRAY,disabled:!1,ariaLabel:"취소",onClick:n}),e.jsx(i,{type:"button",name:"확인",size:"medium",iconSrc:e.jsx(a,{}),color:l.color.GOLD,disabled:!1,ariaLabel:"확인",onClick:t})]})},j=o=>{const{onYesSelect:n,onNoSelect:t}=o;return e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",name:"예",size:"medium",width:"80px",iconSrc:e.jsx(a,{}),color:l.color.LIME,disabled:!1,ariaLabel:"예",onClick:n}),e.jsx(i,{type:"button",name:"아니요",size:"medium",iconSrc:e.jsx(c,{}),color:l.color.RED,disabled:!1,ariaLabel:"아니요",onClick:t})]})};try{s.displayName="SimpleModal",s.__docgenInfo={description:"",displayName:"SimpleModal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},actionType:{defaultValue:null,description:"",name:"actionType",required:!0,type:{name:"enum",value:[{value:'"confirm"'},{value:'"cancelConfirm"'},{value:'"yesNo"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) | (() => void)"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onYesSelect:{defaultValue:null,description:"",name:"onYesSelect",required:!0,type:{name:"() => void"}},onNoSelect:{defaultValue:null,description:"",name:"onNoSelect",required:!0,type:{name:"() => void"}}}}}catch{}export{s as S};
