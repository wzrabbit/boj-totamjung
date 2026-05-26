import{j as t}from"./jsx-runtime-SwSI87LU.js";import{r as o}from"./index-C5e9SFkp.js";import{y as r}from"./styled-components.browser.esm-DmPUYCQi.js";import{u as c}from"./useTranslation-oInNA2-n.js";const h=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},o.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),x=r.li`
  display: inline-block;

  height: 26px;
`,g=r.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};
`,f=r.p`
  overflow: hidden;

  color: ${({theme:e})=>e.colors.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,y=r.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.colors.LEMON};
  }
`,a=o.forwardRef((e,d)=>{const{id:s,name:n,mode:i,tabIndex:m,onClick:u,onKeyDown:p}=e,{t:l}=c();return t.jsx(x,{children:t.jsxs(g,{type:"button",tabIndex:m,"aria-label":i==="add"?l("randomDefenseCreate.miniAlgorithm.addAriaLabel",[n]):l("randomDefenseCreate.miniAlgorithm.removeAriaLabel",[n]),onClick:()=>{u(s)},onKeyDown:p,ref:d,children:[t.jsx(f,{children:n}),i==="delete"&&t.jsx(y,{children:t.jsx(h,{})})]})})});try{a.displayName="MiniAlgorithmButton",a.__docgenInfo={description:"",displayName:"MiniAlgorithmButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"add"'},{value:'"delete"'}]}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(algorithmId: number) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLButtonElement>"}}}}}catch{}export{a as M};
