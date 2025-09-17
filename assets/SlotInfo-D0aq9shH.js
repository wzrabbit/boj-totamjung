import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as o,l as s}from"./styled-components.browser.esm-CIS6JKSM.js";import{T as r}from"./Text-5VRYE6Ju.js";const a=o.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,c=o.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,d=o.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,i=o.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:p})=>p==="gold"?e.color.GOLD:e.color.WHITE};

  color: ${({theme:e})=>e.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,x=o.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 16px;
`,u=o.p`
  color: ${({theme:e})=>e.color.LIGHT_GRAY};
  font-size: 14px;
`,n=s`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,h=o.div`
  ${n}

  white-space: nowrap;
`,m=o.div`
  ${n}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,l=e=>t.jsxs(a,{children:[t.jsxs(c,{children:[t.jsx(i,{$backgroundColor:"gold",children:"추첨 이름"}),t.jsx(h,{children:e.isEmpty?t.jsx(x,{children:"(비어 있음)"}):t.jsx(r,{type:"primary",fontSize:"16px",children:e.title})})]}),t.jsxs(d,{children:[t.jsx(i,{$backgroundColor:"white",children:"쿼리"}),t.jsx(m,{children:e.isEmpty?t.jsx(u,{children:"(비어 있음)"}):t.jsx(r,{type:"code",fontSize:"13px",children:e.query})})]})]});try{l.displayName="SlotInfo",l.__docgenInfo={description:"",displayName:"SlotInfo",props:{isEmpty:{defaultValue:null,description:"",name:"isEmpty",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}}}}}catch{}export{l as S};
