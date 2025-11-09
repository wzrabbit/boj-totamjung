import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import"./index--qcDGAq6.js";import{S as i}from"./file-upload-mz0LOrA9.js";import{d as e}from"./styled-components.browser.esm-CIS6JKSM.js";const p=e.label`
  display: block;
  width: 270px;
`,l=e.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme:o})=>o.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme:o})=>o.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme:o})=>o.color.LIME};
  }
`,s=e.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:o})=>o.color.LIME};
  }
`,c=e.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:o})=>o.color.LIME};
`,d=e.input`
  display: none;
`,n=o=>{const{onChange:r}=o;return t.jsxs(p,{children:[t.jsxs(l,{role:"button",children:[t.jsx(s,{children:t.jsx(i,{})}),t.jsx(c,{children:"설정 데이터 업로드"})]}),t.jsx(d,{type:"file",accept:".ttj",onClick:a=>{a.currentTarget.value=""},onChange:r})]})};try{n.displayName="DataFileUploadButton",n.__docgenInfo={description:"",displayName:"DataFileUploadButton",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}export{n as D};
