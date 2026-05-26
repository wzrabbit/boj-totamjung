import{j as o}from"./jsx-runtime-SwSI87LU.js";import{M as g,a as h}from"./Modal-XX4ToJJX.js";import{I as s}from"./IconButton-BdyC5KRL.js";import{T as l}from"./Text-CDp_2vO2.js";import{I as j}from"./Input-DuvBN6GO.js";import{u as y}from"./useConfirmInput-MM-p6_em.js";import{t as p}from"./theme-C-IIZrvZ.js";import"./index-C5e9SFkp.js";import{S as M}from"./close-circle-CNub2vbV.js";import{S as C}from"./file-upload-DzuOifK9.js";import{u as I}from"./useTranslation-oInNA2-n.js";import{y as t}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as S}from"./getTransparentHexColor-DN69VCBw.js";const _=t.div`
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
  background-color: ${({theme:n})=>S(n.colors.LIGHT_RED,.13)};
`,i=t.li`
  font-size: 14px;
  color: ${({theme:n})=>n.colors.LIGHT_RED};
`,b=t.div`
  display: flex;
  justify-content: center;
`,d=n=>{const{open:c,onClose:r,onUpload:u}=n,{t:a}=I(),e=a("options.dataManage.uploadConfirmText"),{inputValue:m,isSameWithConfirmText:x,updateInputValue:f}=y({confirmText:e});return o.jsxs(g,{title:a("options.dataManage.uploadModalTitle"),open:c,onClose:r,children:[o.jsxs(_,{children:[o.jsx(l,{type:"normal",fontSize:16,children:a("options.dataManage.uploadWarningIntro")}),o.jsxs(T,{children:[o.jsx(i,{children:a("options.dataManage.uploadWarning1")}),o.jsx(i,{children:a("options.dataManage.uploadWarning2")}),o.jsx(i,{children:a("options.dataManage.uploadWarning3")})]}),o.jsxs(l,{type:"normal",fontSize:16,children:[a("options.dataManage.uploadInstructionPrefix")," ",o.jsx("b",{children:e}),a("options.dataManage.uploadInstructionSuffix")]}),o.jsx(b,{children:o.jsx(j,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:m,textAlign:"center",placeholder:a("options.dataManage.uploadInputPlaceholder",[e]),hasError:!1,onChange:f})})]}),o.jsxs(h,{children:[o.jsx(s,{type:"button",name:a("common.cancel"),size:"medium",iconSrc:o.jsx(M,{}),color:p.colors.GRAY_300,disabled:!1,onClick:r}),o.jsx(s,{type:"button",name:a("options.dataManage.uploadActionButton"),size:"medium",iconSrc:o.jsx(C,{}),color:p.colors.LIME,disabled:!x,onClick:u})]})]})};try{d.displayName="OptionsDataUploadModal",d.__docgenInfo={description:"",displayName:"OptionsDataUploadModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!0,type:{name:"() => void"}}}}}catch{}export{d as O};
