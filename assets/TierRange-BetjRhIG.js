import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";import{s as i}from"./index-CElCL35T.js";const a=t.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,o=t.img`
  width: 26px;
`,d=t.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`,c=e=>{const{startTier:s,endTier:n}=e;return r.jsxs(a,{children:[r.jsx(o,{src:i[s],alt:"",draggable:!1}),r.jsx(d,{children:"~"}),r.jsx(o,{src:i[n],alt:"",draggable:!1})]})};c.__docgenInfo={description:"",methods:[],displayName:"TierRange",props:{startTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},endTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""}}};export{c as T};
