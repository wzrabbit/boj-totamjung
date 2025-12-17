import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import"./index--qcDGAq6.js";import{S as s}from"./file-upload-mz0LOrA9.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";const c=t.label`
  display: block;
  width: 270px;
`,d=t.div`
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
`,u=t.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LIME};
  }
`,x=t.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.LIME};
`,h=t.input`
  display: none;
`,i=e=>{const{onChange:l}=e,r=useRef(null),p=n=>{var a;(n.key===" "||n.key==="Enter")&&((a=r.current)==null||a.click())};return o.jsxs(c,{children:[o.jsxs(d,{role:"button",tabIndex:0,ref:r,onKeyDown:p,children:[o.jsx(u,{children:o.jsx(s,{})}),o.jsx(x,{children:"설정 데이터 업로드"})]}),o.jsx(h,{type:"file",accept:".ttj",onClick:n=>{n.currentTarget.value=""},onChange:l})]})};try{i.displayName="DataFileUploadButton",i.__docgenInfo={description:"",displayName:"DataFileUploadButton",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}export{i as D};
