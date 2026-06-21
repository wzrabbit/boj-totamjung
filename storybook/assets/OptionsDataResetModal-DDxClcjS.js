import{j as e}from"./jsx-runtime-SwSI87LU.js";import{M as g,a as h}from"./Modal-CqixDTbF.js";import{I as s}from"./IconButton-BdyC5KRL.js";import{T as l}from"./Text-DkpU561P.js";import{I as j}from"./Input-Dals97Fw.js";import{u as y}from"./useConfirmInput-MM-p6_em.js";import{t as p}from"./theme-C-IIZrvZ.js";import"./index-C5e9SFkp.js";import{S as M}from"./trash-C-GIiUBp.js";import{S as C}from"./close-circle-CNub2vbV.js";import{u as I}from"./useTranslation-CHmiwnmk.js";import{y as n}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as R}from"./getTransparentHexColor-DN69VCBw.js";const S=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`,T=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({theme:o})=>R(o.colors.LIGHT_RED,.13)};
`,r=n.li`
  font-size: 14px;
  color: ${({theme:o})=>o.colors.LIGHT_RED};
`,_=n.div`
  display: flex;
  justify-content: center;
`,d=o=>{const{open:c,onClose:i,onReset:m}=o,{t}=I(),a=t("options.dataManage.resetConfirmText"),{inputValue:u,isSameWithConfirmText:x,updateInputValue:f}=y({confirmText:a});return e.jsxs(g,{title:t("options.dataManage.resetModalTitle"),open:c,onClose:i,children:[e.jsxs(S,{children:[e.jsx(l,{type:"normal",fontSize:16,children:t("options.dataManage.resetWarningIntro")}),e.jsxs(T,{children:[e.jsx(r,{children:t("options.dataManage.resetWarning1")}),e.jsx(r,{children:t("options.dataManage.resetWarning2")}),e.jsx(r,{children:t("options.dataManage.resetWarning3")})]}),e.jsxs(l,{type:"normal",fontSize:16,children:[t("options.dataManage.resetInstructionPrefix")," ",e.jsx("b",{children:a}),t("options.dataManage.resetInstructionSuffix")]}),e.jsx(_,{children:e.jsx(j,{type:"text",width:"300px",height:"36px",fontSize:"15px",borderWidth:2,value:u,textAlign:"center",placeholder:t("options.dataManage.resetInputPlaceholder",[a]),hasError:!1,onChange:f})})]}),e.jsxs(h,{children:[e.jsx(s,{type:"button",name:t("common.cancel"),size:"medium",iconSrc:e.jsx(C,{}),color:p.colors.GRAY_300,disabled:!1,onClick:i}),e.jsx(s,{type:"button",name:t("options.dataManage.resetActionButton"),size:"medium",iconSrc:e.jsx(M,{}),color:p.colors.RED,disabled:!x,onClick:m})]})]})};try{d.displayName="OptionsDataResetModal",d.__docgenInfo={description:"",displayName:"OptionsDataResetModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!0,type:{name:"() => void"}}}}}catch{}export{d as O};
