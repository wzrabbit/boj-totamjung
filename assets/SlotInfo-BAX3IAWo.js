import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as t,l as s}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as i}from"./Text-DG2UbxfS.js";const p=t.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,x=t.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,c=t.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,r=t.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:n})=>n==="gold"?e.color.GOLD:e.color.WHITE};

  color: ${({theme:e})=>e.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,d=t.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 16px;
`,a=t.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 14px;
`,l=s`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,h=t.div`
  ${l}

  white-space: nowrap;
`,m=t.div`
  ${l}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,f=e=>o.jsxs(p,{children:[o.jsxs(x,{children:[o.jsx(r,{$backgroundColor:"gold",children:"추첨 이름"}),o.jsx(h,{children:e.isEmpty?o.jsx(d,{children:"(비어 있음)"}):o.jsx(i,{type:"primary",fontSize:"16px",children:e.title})})]}),o.jsxs(c,{children:[o.jsx(r,{$backgroundColor:"white",children:"쿼리"}),o.jsx(m,{children:e.isEmpty?o.jsx(a,{children:"(비어 있음)"}):o.jsx(i,{type:"code",fontSize:"13px",children:e.query})})]})]});f.__docgenInfo={description:"",methods:[],displayName:"SlotInfo"};export{f as S};
