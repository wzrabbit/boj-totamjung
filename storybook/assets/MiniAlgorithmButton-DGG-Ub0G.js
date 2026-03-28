import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index--qcDGAq6.js";import{d as n}from"./styled-components.browser.esm-CIS6JKSM.js";const c=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},o.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),m=n.li`
  display: inline-block;

  height: 26px;
`,h=n.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,x=n.p`
  overflow: hidden;

  color: ${({theme:e})=>e.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,g=n.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LEMON};
  }
`,i=o.forwardRef((e,a)=>{const{id:d,name:r,mode:l,tabIndex:u,onClick:s,onKeyDown:p}=e;return t.jsx(m,{children:t.jsxs(h,{type:"button",tabIndex:u,"aria-label":l==="add"?`${r}을 검색에 포함할 알고리즘 목록에 추가하기`:`${r}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{s(d)},onKeyDown:p,ref:a,children:[t.jsx(x,{children:r}),l==="delete"&&t.jsx(g,{children:t.jsx(c,{})})]})})});try{i.displayName="MiniAlgorithmButton",i.__docgenInfo={description:"",displayName:"MiniAlgorithmButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"add"'},{value:'"delete"'}]}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(algorithmId: number) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLButtonElement>"}}}}}catch{}export{i as M};
