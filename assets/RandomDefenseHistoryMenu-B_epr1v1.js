import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{R as E}from"./RandomDefenseHistoryList-B78fE5FN.js";import{r as p}from"./index--qcDGAq6.js";import{S as d}from"./commands-BoKETmK5.js";import{s as I,a as D}from"./isTierHiddenSanitizer-BOyoG-TY.js";import{d as r}from"./styled-components.browser.esm-CIS6JKSM.js";import{S as R}from"./Switch-Bs6u4NSz.js";import{N as S}from"./NamedFrame-D2PEwBHE.js";import{S as M}from"./trash-JRBuQ8nU.js";import{S as w}from"./package-pspu3cL5.js";import{c as g,a as T}from"./randomDefense-DE7lwrZG.js";import{S as _}from"./SimpleModal-DwdThE8F.js";import{T as H}from"./Text-Bm9VDKPH.js";import{u as j}from"./useModal-BJrESIr1.js";import{t as h}from"./theme-CqSsbPCW.js";const N=async()=>{const e=await browser.storage.local.get([d.RANDOM_DEFENSE_HISTORY,d.IS_TIER_HIDDEN]),o=e[d.RANDOM_DEFENSE_HISTORY],s=e[d.IS_TIER_HIDDEN],n=I(o),a=D(s);return{randomDefenseHistory:n,isHidden:a}},b=async(e,o)=>{if(!Array.isArray(e)||typeof o!="boolean")return;const s=I(e);browser.storage.local.set({[d.RANDOM_DEFENSE_HISTORY]:s,[d.IS_TIER_HIDDEN]:o})},$=()=>{const[e,o]=p.useState([]),[s,n]=p.useState(!0),[a,c]=p.useState(!1),l=e.length===0;return p.useEffect(()=>{(async()=>{const i=await N();n(i.isHidden),o(i.randomDefenseHistory),c(!0)})()},[]),p.useEffect(()=>{a&&b(e,s)},[e,s]),{items:e,isHidden:s,isLoaded:a,isEmpty:l,deleteHistoryById:i=>{const x=e.filter(u=>`${u.problemId}-${u.createdAt}`!==i);o(x)},clearHistory:()=>{o([])},updateIsHidden:i=>{n(i.target.checked)}}},v=r.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,O=r.div`
  width: 348px;
  height: 429px;
  padding: 8px;

  border: 1px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 6px;
`,C=r.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 8px;
  height: 30px;
`,L=r.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,A=r.button`
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
`,z=r.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,k=r.div`
  color: ${({$color:e})=>e};
  font-size: 14px;
  line-height: 20px;
`,B=r.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,F=e=>{const o=g-e,s=o>=T?"normal":o>0?"warn":"danger",c=`${`현재 ${e}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${g}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${s==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:s==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,l=s==="normal"?h.color.WHITE:s==="warn"?h.color.ORANGE:h.color.LIGHT_RED;return{indicatorMessage:c,indicatorColor:l}},ie=()=>{const{items:e,isHidden:o,isLoaded:s,isEmpty:n,deleteHistoryById:a,clearHistory:c,updateIsHidden:l}=$(),{activeModalName:f,openModal:y,closeModal:m}=j(),{indicatorMessage:i,indicatorColor:x}=F(e.length);return t.jsx(S,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:t.jsxs(v,{children:[s&&t.jsxs(t.Fragment,{children:[t.jsxs(C,{children:[t.jsx(H,{type:"normal",fontSize:16,width:"auto",as:"span",children:"티어 숨기기"}),t.jsx(R,{size:"large",isChecked:o,ariaLabel:"티어 숨기기",onChange:l})]}),t.jsx(O,{children:t.jsx(E,{items:e,isHidden:o,onDelete:a})}),t.jsxs(L,{children:[t.jsxs(z,{title:i,children:[t.jsx(B,{children:t.jsx(w,{})}),t.jsx(k,{$color:x,children:`${e.length} / ${g}`})]}),t.jsx(H,{type:"normal",fontSize:16,width:"auto",as:"span",children:"추첨 기록 비우기"}),t.jsx(A,{onClick:()=>{y("confirmClearHistory")},disabled:n,"aria-label":"추첨 기록 비우기",children:t.jsx(M,{})})]})]}),t.jsx(_,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:f==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{c(),m()},onNoSelect:m})]})})};export{ie as R};
