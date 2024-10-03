import{j as a}from"./jsx-runtime-DEdD30eg.js";import{d as l}from"./styled-components.browser.esm-CkAH7aAm.js";import{s as u}from"./index-CElCL35T.js";const o=l.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.BROWN};

  border-radius: 6px;

  user-select: none;
`,v=l.img`
  width: 26px;
`,n=l.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`,r=e=>{const{startTier:t,endTier:i}=e;return a.jsxs(o,{children:[a.jsx(v,{src:u[t],alt:"",draggable:!1}),a.jsx(n,{children:"~"}),a.jsx(v,{src:u[i],alt:"",draggable:!1})]})};try{r.displayName="TierRange",r.__docgenInfo={description:"",displayName:"TierRange",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}}}}}catch{}export{r as T};
