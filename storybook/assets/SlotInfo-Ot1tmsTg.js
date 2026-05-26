import{j as t}from"./jsx-runtime-SwSI87LU.js";import{y as o,p}from"./styled-components.browser.esm-DmPUYCQi.js";import{T as i}from"./Text-CDp_2vO2.js";import{u as a}from"./useTranslation-oInNA2-n.js";const c=o.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`,d=o.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`,x=o.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`,l=o.span`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({theme:e,$backgroundColor:r})=>r==="gold"?e.colors.GOLD:e.colors.OFF_WHITE};

  color: ${({theme:e})=>e.colors.BROWN_900};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`,u=o.p`
  color: ${({theme:e})=>e.colors.GRAY_300};
  font-size: 16px;
`,m=o.p`
  color: ${({theme:e})=>e.colors.GRAY_300};
  font-size: 14px;
`,s=p`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`,y=o.div`
  ${s}

  white-space: nowrap;
`,h=o.div`
  ${s}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,n=e=>{const{t:r}=a();return t.jsxs(c,{children:[t.jsxs(d,{children:[t.jsx(l,{$backgroundColor:"gold",children:r("quickSlots.slotInfo.nameLabel")}),t.jsx(y,{children:e.isEmpty?t.jsx(u,{children:r("quickSlots.slotInfo.empty")}):t.jsx(i,{type:"primary",fontSize:16,children:e.title})})]}),t.jsxs(x,{children:[t.jsx(l,{$backgroundColor:"white",children:r("quickSlots.slotInfo.queryLabel")}),t.jsx(h,{children:e.isEmpty?t.jsx(m,{children:r("quickSlots.slotInfo.empty")}):t.jsx(i,{type:"code",fontSize:13,children:e.query})})]})]})};try{n.displayName="SlotInfo",n.__docgenInfo={description:"",displayName:"SlotInfo",props:{isEmpty:{defaultValue:null,description:"",name:"isEmpty",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}}}}}catch{}export{n as S};
