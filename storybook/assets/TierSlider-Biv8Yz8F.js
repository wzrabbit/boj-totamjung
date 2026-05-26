import{j as o}from"./jsx-runtime-SwSI87LU.js";import{y as v}from"./styled-components.browser.esm-DmPUYCQi.js";import{h as l}from"./typeGuards-DnhUVcj4.js";import{u as m}from"./useTranslation-oInNA2-n.js";const i=31,h=v.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`,b=v.div`
  width: 100%;
  height: 3px;

  background: ${({theme:e})=>`linear-gradient(to right, ${Array.from({length:i}).map((r,a)=>l(a)?`${e.solvedAcTiers[a]} ${a/i*100}%, ${e.solvedAcTiers[a]} ${(a+1)/i*100}%, `:"").join("").slice(0,-2)})`};

  pointer-events: none;
`,c=v.input`
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
    background-color: ${({theme:e,value:r})=>e.solvedAcTiers[r]};
    box-shadow: 0 0 0 2px
      ${({theme:e})=>getTransparentHexColor(e.colors.OFF_WHITE,.13)}
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
    background-color: ${({theme:e,value:r})=>e.solvedAcTiers[r]};
    box-shadow: 0 0 0 2px
      ${({theme:e})=>getTransparentHexColor(e.colors.OFF_WHITE,.13)}
      inset;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`,d=e=>{const{startTier:r,endTier:a,onChange:p}=e,{t:s}=m();return o.jsxs(h,{children:[o.jsx(b,{}),o.jsx(c,{type:"range",min:0,max:30,value:r,"aria-label":s("randomDefenseCreate.tierSlider.startAriaLabel"),onChange:u=>{const n=Number(u.target.value),t=Math.max(Number(n),a);l(n)&&l(t)&&p(n,t)}}),o.jsx(c,{type:"range",min:0,max:30,value:a,"aria-label":s("randomDefenseCreate.tierSlider.endAriaLabel"),onChange:u=>{const n=Number(u.target.value),t=Math.min(Number(n),r);l(t)&&l(n)&&p(t,n)}})]})};try{d.displayName="TierSlider",d.__docgenInfo={description:"",displayName:"TierSlider",props:{startTier:{defaultValue:null,description:"",name:"startTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},endTier:{defaultValue:null,description:"",name:"endTier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}}}catch{}export{d as T};
