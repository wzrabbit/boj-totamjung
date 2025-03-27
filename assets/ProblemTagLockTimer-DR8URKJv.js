import{j as u}from"./jsx-runtime-DEdD30eg.js";import{d as f}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as g}from"./Text-D9btwR46.js";import{r as c}from"./index-RYns6xqu.js";const y=""+new URL("lock-with-clock-DphQokL3.png",import.meta.url).href,_=f.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,h=f.input`
  width: 60px;
  height: 46px;

  border: none;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  font-size: 26px;
  font-weight: 800;
  text-align: center;
  color: ${({theme:e})=>e.color.GOLD};
  border: 2px solid ${({theme:e})=>e.color.LIGHT_BROWN};

  transition: outline 0.05s;

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    border: 2px solid ${({theme:e})=>e.color.LEMON};
    outline: 3px solid ${({theme:e})=>e.color.LEMON}70;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`,N=99,M=59,S=/^\d+$/,H=e=>S.test(e)&&Number(e)>=0&&Number(e)<=N,T=e=>S.test(e)&&Number(e)>=0&&Number(e)<=M,k=e=>{const{initHours:n,initMinutes:o,onChange:a}=e,[t,i]=c.useState(String(n)),[r,s]=c.useState(String(o));return c.useEffect(()=>{i(String(n)),s(String(o))},[n,o]),{hours:t,minutes:r,updateHours:m=>{const l=m.target.value;l.length>=3||i(l)},updateMinutes:m=>{const l=m.target.value;l.length>=3||s(l)},submitHours:()=>{if(!H(t)||Number(t)===n){i(String(n));return}i(String(Number(t))),a(Number(t),Number(r))},submitMinutes:()=>{if(!T(r)||Number(r)===o){s(String(o));return}s(String(Number(r))),a(Number(t),Number(r))}}},x=e=>{const{hours:n,minutes:o,disabled:a,onChange:t}=e,{hours:i,minutes:r,updateHours:s,updateMinutes:d,submitHours:p,submitMinutes:b}=k({initHours:n,initMinutes:o,onChange:t});return u.jsxs(_,{children:[u.jsx("img",{src:y,width:"54px",height:"46px",alt:""}),u.jsx(h,{name:"hours",type:"number",min:0,max:N,value:i,disabled:a,onChange:s,onBlur:p,"aria-label":"시간"}),u.jsx(g,{type:"normal",fontSize:"16px",children:"시간"}),u.jsx(h,{name:"minutes",type:"number",min:0,max:M,value:r,disabled:a,onChange:d,onBlur:b,"aria-label":"분"}),u.jsx(g,{type:"normal",fontSize:"16px",children:"분"})]})};try{x.displayName="ProblemTagLockTimer",x.__docgenInfo={description:"",displayName:"ProblemTagLockTimer",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(hours: number, minutes: number) => void"}}}}}catch{}export{x as P};
