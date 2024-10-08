import{j as t}from"./jsx-runtime-DEdD30eg.js";import{M as n}from"./MenuTitle-CeT6tPAk.js";import{F as l}from"./Fieldset-C0hIcbsg.js";import{T as S}from"./TierDropdown-BYgCQ6Mo.js";import{T as h}from"./Text-Ccd6d79x.js";import{P as U}from"./ProblemTagLockTimer-4MDfPYxz.js";import{T as b}from"./TextLink-_llWSx1B.js";import{r as s}from"./index-RYns6xqu.js";import{S as A}from"./commands-CyQPP6hL.js";import{a as R}from"./defaultValues-Ccu0oMSE.js";import{i as T}from"./hiderOptionsValidator-OSwkoshH.js";import{d as f}from"./styled-components.browser.esm-CkAH7aAm.js";const k=r=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 16 16",...r},s.createElement("path",{fillRule:"evenodd",d:"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z",fill:"currentColor"})),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABWCAMAAAHUCOv/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAADFElEQVRIS+2X7bKiMAyGi6KCovX+r3bz5qMkteXg7HFmd8bnB6RpSJs2pJCeRpQWbuIyp8F0GVfuYJy0qPBMczrSLSeCWimNuEDmO9sQUUgXEcTMC0xDEE90u6pbuWJYNvC4p0zgK89RdaXHFOtThV2ahFhW2N1DvS50o7VE6yR9s9wKbMLg4cA7mvVxESZoMouqkUEeIvOVVZOKeiNEWjVPzgaIcnN8TINFUZGZMDGnO5I8Uws6hDTQ/Y4myWcoCRKvJsxyO3EbyDrgsRVJLIZ7N/mMSWNs36beA0wwb1UBJ68REmdVEpVX6Q95G014mAsuqmCil8w1wDJIqQZq8U+ZYNs3KG8nv78v8AoRzlB7QOZVJJCaN9GZika1Rw7ynkpT98SSmNBdtKEEVFziltRvxhvRgEYGS8x0UW7w31qg8GrMxnsWtNpqoRvGOAta8oTdwUa61HcWtsWM6ggvelRHOPH5HLV79JMNFpYk2hJCS+ofH0Er3oLPKc6sTrTUQLLBDieXEccc4X8c9LgRokWLr0XkVyysMLSxKiGn3yvZlYmWjZURV8QCpaLRTK2C+UPGjvFRY7GaZgeVtfkZjRZHN6DASpHTVPRlMCDfpjHauzTAIK+Uj1a/ZiUwzeSqaFq0Yxqlvx4V+GhjxV6xk6TXD3y0hj72N3x9RLZ95LPQe12EbR9cYYnqyKn4oA+k9GVZfeRlOlJil9+3QNtHL1HDsVJo+mi9K0Lz86s9j9nOxMhwesMH87BCBPTzq8mGD6tLSns9QdfHvaovnW9M0PNRlpXqjpWLoZOu/VjuePTAj3FUx26ibawHpYl9Q+TRf03UbPrYyddH5Osj8is+0tisK7tZ7I08xF/kneSp/gBIl+2TKPK4vNQXY1dgS11tqdxUMzps+MlzZTzO2fbl7n5vmUZg9fQH+xHyeztXIZ7WwlNPf5hcnacaF6Z+C/9s6M3XxvQLuext+OJ7DaxQps/kqRqwXoLqdMH0ff/S39sY2GzjhOmvqdlniIFdfph+n8be3vvT7+OSdsf0+xzmxpsVSOkPNYkQuRziFvkAAAAASUVORK5CYII=",v=async()=>{const i=(await browser.storage.local.get(A.HIDER_OPTIONS))[A.HIDER_OPTIONS];return T(i)?i:R},O=r=>{T(r)&&browser.storage.local.set({[A.HIDER_OPTIONS]:r})},E={problemTagLockDuration:{hours:0,minutes:0},shouldHideTier:void 0,shouldWarnHighTier:void 0,warnTier:1,algorithmHiderUsage:void 0,problemTagLockUsage:void 0},j=()=>{const[r,i]=s.useState({...E,isLoaded:!1});return s.useEffect(()=>{(async()=>{const e=await v();i({...e,isLoaded:!0})})()},[]),s.useEffect(()=>{const{isLoaded:e,...o}=r;e&&O(o)},[r]),{...r,updateProblemTagLockDuration:(e,o)=>{i(a=>a.isLoaded?{...a,problemTagLockDuration:{hours:e,minutes:o}}:a)},updateShouldHideTier:e=>{const o=e==="true";i(a=>a.isLoaded?{...a,shouldHideTier:o}:a)},updateShouldWarnHighTier:e=>{const o=e==="true";i(a=>a.isLoaded?{...a,shouldWarnHighTier:o}:a)},updateWarnTier:e=>{i(o=>o.isLoaded?{...o,warnTier:e}:o)},updateAlgorithmHiderUsage:e=>{e!=="click"&&e!=="always"||i(o=>o.isLoaded?{...o,algorithmHiderUsage:e}:o)},updateProblemTagLockUsage:e=>{e!=="click"&&e!=="auto"||i(o=>o.isLoaded?{...o,problemTagLockUsage:e}:o)}}},M=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`,V=f.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`,G=()=>{const{problemTagLockDuration:r,shouldHideTier:i,shouldWarnHighTier:d,warnTier:c,algorithmHiderUsage:u,problemTagLockUsage:g,updateProblemTagLockDuration:m,updateShouldHideTier:p,updateShouldWarnHighTier:e,updateWarnTier:o,updateAlgorithmHiderUsage:a,updateProblemTagLockUsage:x}=j(),{hours:H,minutes:L}=r;return t.jsxs(M,{children:[t.jsx(n,{title:"잠금 시간 설정",iconSrc:browser.runtime.getURL("/lock.png")}),t.jsx(U,{hours:H,minutes:L,onChange:m}),t.jsx(n,{title:"티어 가리개 설정",iconSrc:w}),t.jsx(l,{legend:"맞추지 않은 문제의 난이도 숨기기",name:"shouldHideTier",options:[{label:"숨기기",value:"true"},{label:"숨기지 않기",value:"false"}],checkedValue:i?"true":i===void 0?"":"false",onChange:p}),t.jsx(l,{legend:"어려운 문제 경고",name:"shouldWarnHighTier",isVertical:!0,disabled:!i,options:[{label:"사용하지 않음",value:"false"},{label:t.jsxs(V,{children:[t.jsx(S,{selectedTier:c,onChange:o}),t.jsx(h,{type:"semiPrimary",fontSize:"16px",children:"이상 난이도일 경우 경고"})]}),value:"true"}],checkedValue:d?"true":"false",onChange:e}),t.jsxs(h,{type:"normal",fontSize:"14px",children:["티어 가리개를 사용하기 위해서는 백준의"," ",t.jsx(b,{href:"https://www.acmicpc.net/setting/view",fontSize:"14px",children:"설정 페이지"}),'에서 [보기] - [solved.ac 티어]가 "보기"로 설정되어 있어야 합니다.']}),t.jsx(n,{title:"기본 설정",iconSrc:t.jsx(k,{})}),t.jsx(l,{legend:"알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법",name:"algorithmHiderUsage",options:[{label:"클릭하여 공개",value:"click"},{label:"항상 공개",value:"always"}],checkedValue:u??"",onChange:a}),t.jsx(l,{legend:"알고리즘 분류 잠금 방법",name:"problemTagLockUsage",options:[{label:"클릭하여 잠금",value:"click"},{label:"자동으로 잠금",value:"auto"}],checkedValue:g??"",onChange:x})]})};export{G as H};