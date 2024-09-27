import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{S as a}from"./file-upload-D_bXM9eZ.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";const i=n.label`
  display: block;
  width: 270px;
`,p=n.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme:e})=>e.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme:e})=>e.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme:e})=>e.color.LIME};
  }
`,s=n.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIME};
  }
`,l=n.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.LIME};
`,c=n.input`
  display: none;
`,d=e=>{const{onChange:o}=e;return t.jsxs(i,{children:[t.jsxs(p,{role:"button",children:[t.jsx(s,{children:t.jsx(a,{})}),t.jsx(l,{children:"설정 데이터 업로드"})]}),t.jsx(c,{type:"file",accept:".ttj",onClick:r=>{r.currentTarget.value=""},onChange:o})]})};d.__docgenInfo={description:"",methods:[],displayName:"DataFileUploadButton",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};export{d as D};
