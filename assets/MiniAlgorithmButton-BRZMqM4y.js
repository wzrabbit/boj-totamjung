import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as n}from"./index-RYns6xqu.js";const d=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"})),a=r.li`
  display: inline-block;

  height: 26px;
`,p=r.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,m=r.p`
  overflow: hidden;

  color: ${({theme:e})=>e.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,c=r.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.LEMON};
  }
`,h=e=>{const{id:l,name:i,mode:o,onClick:s}=e;return t.jsx(a,{children:t.jsxs(p,{type:"button","aria-label":o==="add"?`${i}을 검색에 포함할 알고리즘 목록에 추가하기`:`${i}을 검색에 포함할 알고리즘 목록에서 제거하기`,onClick:()=>{s(l)},children:[t.jsx(m,{children:i}),o==="delete"&&t.jsx(c,{children:t.jsx(d,{})})]})})};h.__docgenInfo={description:"",methods:[],displayName:"MiniAlgorithmButton",props:{id:{required:!0,tsType:{name:"number"},description:""},name:{required:!0,tsType:{name:"string"},description:""},mode:{required:!0,tsType:{name:"union",raw:"'add' | 'delete'",elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'delete'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(algorithmId: number) => void",signature:{arguments:[{type:{name:"number"},name:"algorithmId"}],return:{name:"void"}}},description:""}}};export{h as M};
