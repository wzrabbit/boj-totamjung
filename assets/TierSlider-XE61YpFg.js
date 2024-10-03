import{j as i}from"./jsx-runtime-DEdD30eg.js";import{d as c}from"./styled-components.browser.esm-CkAH7aAm.js";import{d as o}from"./typeGuards-DuDHAUw0.js";const s=31,m=c.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,l=c.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:s}).map((a,n)=>o(n)?`${e.solvedAcTier[n]} ${n/s*100}%, ${e.solvedAcTier[n]} ${(n+1)/s*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,u=c.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  background-color: transparent;

  pointer-events: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-moz-range-track {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({theme:e,value:a})=>e.solvedAcTier[a]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({theme:e,value:a})=>e.solvedAcTier[a]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`,T=e=>{const{startTier:a,endTier:n,onChange:d}=e;return i.jsxs(m,{children:[i.jsx(l,{}),i.jsx(u,{type:"range",min:0,max:30,value:a,"aria-label":"시작 범위 티어 설정하기",onChange:p=>{const t=Number(p.target.value),r=Math.max(Number(t),n);o(t)&&o(r)&&d(t,r)}}),i.jsx(u,{type:"range",min:0,max:30,value:n,"aria-label":"끝 범위 티어 설정하기",onChange:p=>{const t=Number(p.target.value),r=Math.min(Number(t),a);o(r)&&o(t)&&d(r,t)}})]})};T.__docgenInfo={description:"",methods:[],displayName:"TierSlider",props:{startTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},endTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void",signature:{arguments:[{type:{name:"TierWithoutNotRatable"},name:"start"},{type:{name:"TierWithoutNotRatable"},name:"end"}],return:{name:"void"}}},description:""}}};export{T};
