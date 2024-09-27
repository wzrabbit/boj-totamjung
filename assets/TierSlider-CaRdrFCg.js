import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as u}from"./styled-components.browser.esm-CkAH7aAm.js";import{d as i}from"./typeGuards-DuDHAUw0.js";const p=31,l=u.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,m=u.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:p}).map((n,t)=>i(t)?`${e.solvedAcTier[t]} ${t/p*100}%, ${e.solvedAcTier[t]} ${(t+1)/p*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,c=u.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  background-color: transparent;

  pointer-events: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({theme:e,value:n})=>e.solvedAcTier[n]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`,T=e=>{const{startTier:n,endTier:t,onChange:d}=e;return o.jsxs(l,{children:[o.jsx(m,{}),o.jsx(c,{type:"range",min:0,max:30,value:n,"aria-label":"시작 범위 티어 설정하기",onChange:s=>{const r=Number(s.target.value),a=Math.max(Number(r),t);i(r)&&i(a)&&d(r,a)}}),o.jsx(c,{type:"range",min:0,max:30,value:t,"aria-label":"끝 범위 티어 설정하기",onChange:s=>{const r=Number(s.target.value),a=Math.min(Number(r),n);i(a)&&i(r)&&d(a,r)}})]})};T.__docgenInfo={description:"",methods:[],displayName:"TierSlider",props:{startTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},endTier:{required:!0,tsType:{name:"TierWithoutNotRatable"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void",signature:{arguments:[{type:{name:"TierWithoutNotRatable"},name:"start"},{type:{name:"TierWithoutNotRatable"},name:"end"}],return:{name:"void"}}},description:""}}};export{T};
