import{j as t}from"./jsx-runtime-SwSI87LU.js";import{r as c}from"./index-C5e9SFkp.js";import{S as d}from"./file-upload-DzuOifK9.js";import{u}from"./useTranslation-CHmiwnmk.js";import{y as e}from"./styled-components.browser.esm-DmPUYCQi.js";const x=e.label`
  display: block;
  width: 270px;
`,h=e.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({theme:o})=>o.colors.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({theme:o})=>o.colors.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({theme:o})=>o.colors.LIME};
  }
`,g=e.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:o})=>o.colors.LIME};
  }
`,f=e.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({theme:o})=>o.colors.LIME};
`,m=e.input`
  display: none;
`,s=o=>{const{onChange:i}=o,r=c.useRef(null),{t:p}=u(),l=n=>{var a;(n.key===" "||n.key==="Enter")&&((a=r.current)==null||a.click())};return t.jsxs(x,{children:[t.jsxs(h,{role:"button",tabIndex:0,ref:r,onKeyDown:l,children:[t.jsx(g,{children:t.jsx(d,{})}),t.jsx(f,{children:p("options.dataManage.uploadButton")})]}),t.jsx(m,{type:"file",accept:".ttj",onClick:n=>{n.currentTarget.value=""},onChange:i})]})};try{s.displayName="DataFileUploadButton",s.__docgenInfo={description:"",displayName:"DataFileUploadButton",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}export{s as D};
