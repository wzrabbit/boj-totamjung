import{j as t}from"./jsx-runtime-DEdD30eg.js";import{R as E}from"./RandomDefenseHistoryList-D6D0AFIG.js";import{r as m}from"./index-RYns6xqu.js";import{S as l}from"./commands-CzqO23sC.js";import{d as g,e as D,f as R,g as _,h as S,i as T}from"./randomDefense-DFxRSgnp.js";import{i as y}from"./randomDefenseHistoryValidator-HqCX0m6_.js";import{c as N}from"./typeGuards-BB3TV_oj.js";import{b,c as M}from"./defaultValues-5WESY1KB.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";import{S as A}from"./Switch-HPixtSTV.js";import{N as j}from"./NamedFrame-D-XXrU6-.js";import{S as w}from"./trash-CO6QCs-j.js";import{S as L}from"./package-F1HZRHho.js";import{S as O}from"./SimpleModal-BnTyCKaN.js";import{u as v}from"./useModal-CV8qRtLl.js";const $=e=>{if(!N(e))return!1;const[s,o,r,i,a,d,p]=e.split(/[-:.TZ]/).map(Number);return s>=1&&s<=9999&&o>=1&&o<=12&&r>=1&&r<=31&&i>=0&&i<=23&&a>=0&&a<=59&&d>=0&&d<=59&&p>=0&&p<=999},z=e=>y(e)&&e.problemId%1===0&&e.problemId>=D&&e.problemId<=R&&e.title.length<=_&&$(e.createdAt)&&e.tier%1===0&&e.tier>=S&&e.tier<=T,B=e=>[...e].sort((s,o)=>s.createdAt>o.createdAt?-1:1),u=e=>{if(!Array.isArray(e))return b;const s=[];return e.forEach(o=>{y(o)&&z(o)&&s.push(o)}),B(s).slice(0,g)},k=e=>typeof e=="boolean"?e:M,C=async()=>{const e=await browser.storage.local.get([l.RANDOM_DEFENSE_HISTORY,l.IS_TIER_HIDDEN]),s=e[l.RANDOM_DEFENSE_HISTORY],o=e[l.IS_TIER_HIDDEN],r=u(s),i=k(o);return{randomDefenseHistory:r,isHidden:i}},F=async(e,s)=>{if(!Array.isArray(e)||typeof s!="boolean")return;const o=u(e);browser.storage.local.set({[l.RANDOM_DEFENSE_HISTORY]:o,[l.IS_TIER_HIDDEN]:s})},P=()=>{const[e,s]=m.useState([]),[o,r]=m.useState(!0),[i,a]=m.useState(!1),d=e.length===0;return m.useEffect(()=>{(async()=>{const c=await C();r(c.isHidden),s(c.randomDefenseHistory),a(!0)})()},[]),m.useEffect(()=>{i&&F(e,o)},[e,o]),{items:e,isHidden:o,isLoaded:i,isEmpty:d,deleteHistoryById:c=>{const H=e.filter(f=>`${f.problemId}-${f.createdAt}`!==c);s(H)},clearHistory:()=>{s([])},updateIsHidden:c=>{r(c.target.checked)}}},Y=n.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,G=n.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,W=n.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,X=n.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,U=n.button`
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
`,I=n.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,V=n.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,K=n.div`
  color: ${({theme:e})=>e.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`,Z=n.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,he=()=>{const{items:e,isHidden:s,isLoaded:o,isEmpty:r,deleteHistoryById:i,clearHistory:a,updateIsHidden:d}=P(),{activeModalName:p,openModal:x,closeModal:h}=v();return t.jsx(j,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:t.jsxs(Y,{children:[o&&t.jsxs(t.Fragment,{children:[t.jsxs(W,{children:[t.jsx(I,{children:"티어 숨기기"}),t.jsx(A,{size:"large",isChecked:s,ariaLabel:"티어 숨기기",onChange:d})]}),t.jsx(G,{children:t.jsx(E,{items:e,isHidden:s,onDelete:i})}),t.jsxs(X,{children:[t.jsxs(V,{children:[t.jsx(Z,{children:t.jsx(L,{})}),t.jsx(K,{children:`${e.length} / ${g}`})]}),t.jsx(I,{children:"추첨 기록 비우기"}),t.jsx(U,{onClick:()=>{x("confirmClearHistory")},disabled:r,"aria-label":"추첨 기록 비우기",children:t.jsx(w,{})})]})]}),t.jsx(O,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:p==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{a(),h()},onNoSelect:h})]})})};export{he as R};
