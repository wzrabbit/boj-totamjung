import{j as u}from"./jsx-runtime-DEdD30eg.js";import{d as v}from"./styled-components.browser.esm-CkAH7aAm.js";import{d as l}from"./typeGuards-KkNNuKow.js";const i=31,d=v.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,m=v.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:i}).map((n,a)=>l(a)?`${e.solvedAcTier[a]} ${a/i*100}%, ${e.solvedAcTier[a]} ${(a+1)/i*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,s=v.input`
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
    background-color: ${({theme:e,value:n})=>e.solvedAcTier[n]};
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
    background-color: ${({theme:e,value:n})=>e.solvedAcTier[n]};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`,c=e=>{const{startTier:n,endTier:a,onChange:p}=e;return u.jsxs(d,{children:[u.jsx(m,{}),u.jsx(s,{type:"range",min:0,max:30,value:n,"aria-label":"시작 범위 티어 설정하기",onChange:o=>{const r=Number(o.target.value),t=Math.max(Number(r),a);l(r)&&l(t)&&p(r,t)}}),u.jsx(s,{type:"range",min:0,max:30,value:a,"aria-label":"끝 범위 티어 설정하기",onChange:o=>{const r=Number(o.target.value),t=Math.min(Number(r),n);l(t)&&l(r)&&p(t,r)}})]})};try{c.displayName="TierSlider",c.__docgenInfo={description:"",displayName:"TierSlider",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}}}catch{}export{c as T};
