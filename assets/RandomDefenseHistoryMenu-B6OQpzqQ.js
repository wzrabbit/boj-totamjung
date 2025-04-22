import{j as s}from"./jsx-runtime-DEdD30eg.js";import{R as D}from"./RandomDefenseHistoryList-D6D0AFIG.js";import{r as m}from"./index-RYns6xqu.js";import{S as l}from"./commands-CzqO23sC.js";import{d as h,e as R,f as _,g as S,h as M,i as T,M as N}from"./randomDefense-DFxRSgnp.js";import{i as u}from"./randomDefenseHistoryValidator-CJA3bjBY.js";import{c as A}from"./typeGuards-D1JoHm9O.js";import{b,c as w}from"./defaultValues-Cj_gNYP_.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";import{S as L}from"./Switch-HPixtSTV.js";import{N as O}from"./NamedFrame-D-XXrU6-.js";import{S as j}from"./trash-CO6QCs-j.js";import{S as $}from"./package-F1HZRHho.js";import{S as v}from"./SimpleModal-BdMF5_Tc.js";import{u as C}from"./useModal-CV8qRtLl.js";import{t as I}from"./theme-YzccoX_F.js";const B=e=>{if(!A(e))return!1;const[o,t,r,n,a,d,p]=e.split(/[-:.TZ]/).map(Number);return o>=1&&o<=9999&&t>=1&&t<=12&&r>=1&&r<=31&&n>=0&&n<=23&&a>=0&&a<=59&&d>=0&&d<=59&&p>=0&&p<=999},z=e=>u(e)&&e.problemId%1===0&&e.problemId>=R&&e.problemId<=_&&e.title.length<=S&&B(e.createdAt)&&e.tier%1===0&&e.tier>=M&&e.tier<=T,F=e=>[...e].sort((o,t)=>o.createdAt>t.createdAt?-1:1),H=e=>{if(!Array.isArray(e))return b;const o=[];return e.forEach(t=>{u(t)&&z(t)&&o.push(t)}),F(o).slice(0,h)},P=e=>typeof e=="boolean"?e:w,k=async()=>{const e=await browser.storage.local.get([l.RANDOM_DEFENSE_HISTORY,l.IS_TIER_HIDDEN]),o=e[l.RANDOM_DEFENSE_HISTORY],t=e[l.IS_TIER_HIDDEN],r=H(o),n=P(t);return{randomDefenseHistory:r,isHidden:n}},G=async(e,o)=>{if(!Array.isArray(e)||typeof o!="boolean")return;const t=H(e);browser.storage.local.set({[l.RANDOM_DEFENSE_HISTORY]:t,[l.IS_TIER_HIDDEN]:o})},Y=()=>{const[e,o]=m.useState([]),[t,r]=m.useState(!0),[n,a]=m.useState(!1),d=e.length===0;return m.useEffect(()=>{(async()=>{const c=await k();r(c.isHidden),o(c.randomDefenseHistory),a(!0)})()},[]),m.useEffect(()=>{n&&G(e,t)},[e,t]),{items:e,isHidden:t,isLoaded:n,isEmpty:d,deleteHistoryById:c=>{const f=e.filter(E=>`${E.problemId}-${E.createdAt}`!==c);o(f)},clearHistory:()=>{o([])},updateIsHidden:c=>{r(c.target.checked)}}},X=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`,U=i.div`
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
`,V=i.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`,K=i.button`
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
`,y=i.p`
  display: inline-block;

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 16px;
`,Z=i.div`
  display: flex;
  column-gap: 4px;

  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`,q=i.div`
  color: ${({$color:e})=>e};
  font-size: 14px;
  line-height: 20px;
`,J=i.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,Q=e=>{const o=h-e,t=o>=N?"normal":o>0?"warn":"danger",a=`${`현재 ${e}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${h}문제입니다.
저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`}${t==="warn"?`

저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:t==="danger"?`

저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.`:""}`,d=t==="normal"?I.color.WHITE:t==="warn"?I.color.ORANGE:I.color.LIGHT_RED;return{indicatorMessage:a,indicatorColor:d}},ge=()=>{const{items:e,isHidden:o,isLoaded:t,isEmpty:r,deleteHistoryById:n,clearHistory:a,updateIsHidden:d}=Y(),{activeModalName:p,openModal:g,closeModal:x}=C(),{indicatorMessage:c,indicatorColor:f}=Q(e.length);return s.jsx(O,{width:"370px",height:"553px",padding:"10px",title:"추첨 기록",children:s.jsxs(X,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsxs(W,{children:[s.jsx(y,{children:"티어 숨기기"}),s.jsx(L,{size:"large",isChecked:o,ariaLabel:"티어 숨기기",onChange:d})]}),s.jsx(U,{children:s.jsx(D,{items:e,isHidden:o,onDelete:n})}),s.jsxs(V,{children:[s.jsxs(Z,{title:c,children:[s.jsx(J,{children:s.jsx($,{})}),s.jsx(q,{$color:f,children:`${e.length} / ${h}`})]}),s.jsx(y,{children:"추첨 기록 비우기"}),s.jsx(K,{onClick:()=>{g("confirmClearHistory")},disabled:r,"aria-label":"추첨 기록 비우기",children:s.jsx(j,{})})]})]}),s.jsx(v,{title:"추첨 기록 전체 제거 확인",actionType:"yesNo",width:"350px",height:"auto",open:p==="confirmClearHistory",message:"모든 추첨 기록을 제거할까요?",onYesSelect:()=>{a(),x()},onNoSelect:x})]})})};export{ge as R};
