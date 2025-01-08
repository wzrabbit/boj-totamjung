import{j as t}from"./jsx-runtime-DEdD30eg.js";import{R as D}from"./RandomDefenseHistoryList-BmEo4GUj.js";import{r as m}from"./index-RYns6xqu.js";import{S as l}from"./commands-CyQPP6hL.js";import{c as y,d as R,e as _,f as S,g as T,h as N}from"./randomDefense-CSn7TOcu.js";import{i as g}from"./randomDefenseHistoryValidator-HqCX0m6_.js";import{c as b}from"./typeGuards-BB3TV_oj.js";import{b as M,c as A}from"./defaultValues-Ccu0oMSE.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";import{S as j}from"./Switch-HPixtSTV.js";import{N as w}from"./NamedFrame-D-XXrU6-.js";import{S as L}from"./trash-CO6QCs-j.js";import{S as O}from"./package-F1HZRHho.js";import{S as v}from"./SimpleModal-B00xfkBi.js";import{u as $}from"./useModal-CV8qRtLl.js";const k=e=>{if(!b(e))return!1;const[s,o,r,n,a,d,p]=e.split(/[-:.TZ]/).map(Number);return s>=1&&s<=9999&&o>=1&&o<=12&&r>=1&&r<=31&&n>=0&&n<=23&&a>=0&&a<=59&&d>=0&&d<=59&&p>=0&&p<=999},z=e=>g(e)&&e.problemId%1===0&&e.problemId>=R&&e.problemId<=_&&e.title.length<=S&&k(e.createdAt)&&e.tier%1===0&&e.tier>=T&&e.tier<=N,H=e=>{if(!Array.isArray(e))return M;const s=[];return e.forEach(o=>{g(o)&&z(o)&&s.push(o)}),s.slice(0,y)},B=e=>typeof e=="boolean"?e:A,u=e=>[...e].sort((s,o)=>s.createdAt>o.createdAt?-1:1),C=async()=>{const e=await browser.storage.local.get([l.RANDOM_DEFENSE_HISTORY,l.IS_TIER_HIDDEN]),s=e[l.RANDOM_DEFENSE_HISTORY],o=e[l.IS_TIER_HIDDEN],r=H(s),n=u(r),a=B(o);return{randomDefenseHistory:n,isHidden:a}},F=(e,s)=>{if(!Array.isArray(e)||typeof s!="boolean")return;const o=H(e),r=u(o);browser.storage.local.set({[l.RANDOM_DEFENSE_HISTORY]:r,[l.IS_TIER_HIDDEN]:s})},P=()=>{const[e,s]=m.useState([]),[o,r]=m.useState(!0),[n,a]=m.useState(!1),d=e.length===0;return m.useEffect(()=>{(async()=>{const c=await C();r(c.isHidden),s(c.randomDefenseHistory),a(!0)})()},[]),m.useEffect(()=>{n&&F(e,o)},[e,o]),{items:e,isHidden:o,isLoaded:n,isEmpty:d,deleteHistoryById:c=>{const E=e.filter(f=>`${f.problemId}-${f.createdAt}`!==c);s(E)},clearHistory:()=>{s([])},updateIsHidden:c=>{r(c.target.checked)}}},Y=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,G=i.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,W=i.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,X=i.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,U=i.button`
  width: 36px;
  height: 36px;

  border: 1px solid ${({theme:e})=>e.color.RED};
  border-radius: 4px;
  background: none;

  transition: 0.2s;

  svg {
    color: ${({theme:e})=>e.color.RED};
  }

  &:hover {
    box-shadow: 0 0 8px ${({theme:e})=>e.color.RED};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`,I=i.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,V=i.div`
  display: flex;
  column-gap: 4px;

  width: 80px;
  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,K=i.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`,Z=i.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,he=()=>{const{items:e,isHidden:s,isLoaded:o,isEmpty:r,deleteHistoryById:n,clearHistory:a,updateIsHidden:d}=P(),{activeModalName:p,openModal:x,closeModal:h}=$();return t.jsx(w,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:t.jsxs(Y,{children:[o&&t.jsxs(t.Fragment,{children:[t.jsxs(W,{children:[t.jsx(I,{children:"티어 숨기기"}),t.jsx(j,{size:"large",isChecked:s,ariaLabel:"티어 숨기기",onChange:d})]}),t.jsx(G,{children:t.jsx(D,{items:e,isHidden:s,onDelete:n})}),t.jsxs(X,{children:[t.jsxs(V,{children:[t.jsx(Z,{children:t.jsx(O,{})}),t.jsx(K,{children:`${e.length} / ${y}`})]}),t.jsx(I,{children:"추첨 기록 비우기"}),t.jsx(U,{onClick:()=>{x("confirmClearHistory")},disabled:r,"aria-label":"추첨 기록 비우기",children:t.jsx(L,{})})]})]}),t.jsx(v,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:p==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{a(),h()},onNoSelect:h})]})})};export{he as R};
