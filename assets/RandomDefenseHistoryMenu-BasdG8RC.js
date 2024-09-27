import{j as o}from"./jsx-runtime-DEdD30eg.js";import{R as u}from"./RandomDefenseHistoryList-D175xNYr.js";import{r as p}from"./index-RYns6xqu.js";import{S as l}from"./commands-CQbqRvUh.js";import{c as f,d as E,e as D,f as R,g as _,h as S}from"./randomDefense-DfcJoTYj.js";import{i as I}from"./randomDefenseHistoryValidator-CR4afrcp.js";import{c as T}from"./typeGuards-DuDHAUw0.js";import{a as b,b as N}from"./defaultValues-CnriO2vE.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";import{S as A}from"./Switch-Bo56pe8w.js";import{N as M}from"./NamedFrame-DSWSgEem.js";import{S as j}from"./trash-CO6QCs-j.js";import{S as w}from"./package-F1HZRHho.js";const L=e=>{if(!T(e))return!1;const[s,t,r,n,a,d,m]=e.split(/[-:.TZ]/).map(Number);return s>=1&&s<=9999&&t>=1&&t<=12&&r>=1&&r<=31&&n>=0&&n<=23&&a>=0&&a<=59&&d>=0&&d<=59&&m>=0&&m<=999},O=e=>I(e)&&e.problemId%1===0&&e.problemId>=E&&e.problemId<=D&&e.title.length<=R&&L(e.createdAt)&&e.tier%1===0&&e.tier>=_&&e.tier<=S,g=e=>{if(!Array.isArray(e))return b;const s=[];return e.forEach(t=>{I(t)&&O(t)&&s.push(t)}),s.slice(0,f)},v=e=>typeof e=="boolean"?e:N,y=e=>[...e].sort((s,t)=>s.createdAt>t.createdAt?-1:1),$=async()=>{const e=await browser.storage.local.get([l.RANDOM_DEFENSE_HISTORY,l.IS_TIER_HIDDEN]),s=e[l.RANDOM_DEFENSE_HISTORY],t=e[l.IS_TIER_HIDDEN],r=g(s),n=y(r),a=v(t);return{randomDefenseHistory:n,isHidden:a}},k=(e,s)=>{if(!Array.isArray(e)||typeof s!="boolean")return;const t=g(e),r=y(t);browser.storage.local.set({[l.RANDOM_DEFENSE_HISTORY]:r,[l.IS_TIER_HIDDEN]:s})},z=()=>{const[e,s]=p.useState([]),[t,r]=p.useState(!0),[n,a]=p.useState(!1),d=e.length===0;return p.useEffect(()=>{(async()=>{const c=await $();r(c.isHidden),s(c.randomDefenseHistory),a(!0)})()},[]),p.useEffect(()=>{n&&k(e,t)},[e,t]),{items:e,isHidden:t,isLoaded:n,isEmpty:d,deleteHistoryById:c=>{const H=e.filter(h=>`${h.problemId}-${h.createdAt}`!==c);s(H)},clearHistory:()=>{!d&&confirm("모든 추첨 기록을 제거할까요?")&&s([])},updateIsHidden:c=>{r(c.target.checked)}}},B=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,F=i.div`
  width: 348px;
  height: 414px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,P=i.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,Y=i.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,C=i.button`
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
`,x=i.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,G=i.div`
  display: flex;
  column-gap: 4px;

  width: 80px;
  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,W=i.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`,X=i.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,U=()=>{const{items:e,isHidden:s,isLoaded:t,isEmpty:r,deleteHistoryById:n,clearHistory:a,updateIsHidden:d}=z();return o.jsx(M,{width:"370px",height:"537px",padding:"10px",title:"추첨 기록",children:o.jsx(B,{children:t&&o.jsxs(o.Fragment,{children:[o.jsxs(P,{children:[o.jsx(x,{children:"티어 숨기기"}),o.jsx(A,{size:"large",isChecked:s,ariaLabel:"티어 숨기기",onChange:d})]}),o.jsx(F,{children:o.jsx(u,{items:e,isHidden:s,onDelete:n})}),o.jsxs(Y,{children:[o.jsxs(G,{children:[o.jsx(X,{children:o.jsx(w,{})}),o.jsx(W,{children:`${e.length} / ${f}`})]}),o.jsx(x,{children:"추첨 기록 비우기"}),o.jsx(C,{onClick:a,disabled:r,"aria-label":"추첨 기록 비우기",children:o.jsx(j,{})})]})]})})})};U.__docgenInfo={description:"",methods:[],displayName:"RandomDefenseHistoryMenu"};export{U as R};
