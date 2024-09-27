import{j as u}from"./jsx-runtime-DEdD30eg.js";import{d as x}from"./styled-components.browser.esm-CkAH7aAm.js";import{T as g}from"./Text-DG2UbxfS.js";import{r as l}from"./index-RYns6xqu.js";const S=""+new URL("lock-with-clock-DphQokL3.png",import.meta.url).href,T=x.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`,h=x.input`
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
`,f=99,N=59,M=/^\d+$/,y=e=>M.test(e)&&Number(e)>=0&&Number(e)<=f,H=e=>M.test(e)&&Number(e)>=0&&Number(e)<=N,w=e=>{const{initHours:r,initMinutes:o,onChange:a}=e,[t,i]=l.useState(String(r)),[n,s]=l.useState(String(o));return l.useEffect(()=>{i(String(r)),s(String(o))},[r,o]),{hours:t,minutes:n,updateHours:c=>{const m=c.target.value;m.length>=3||i(m)},updateMinutes:c=>{const m=c.target.value;m.length>=3||s(m)},submitHours:()=>{if(!y(t)||Number(t)===r){i(String(r));return}i(String(Number(t))),a(Number(t),Number(n))},submitMinutes:()=>{if(!H(n)||Number(n)===o){s(String(o));return}s(String(Number(n))),a(Number(t),Number(n))}}},k=e=>{const{hours:r,minutes:o,disabled:a,onChange:t}=e,{hours:i,minutes:n,updateHours:s,updateMinutes:p,submitHours:d,submitMinutes:b}=w({initHours:r,initMinutes:o,onChange:t});return u.jsxs(T,{children:[u.jsx("img",{src:S,width:"54px",height:"46px",alt:""}),u.jsx(h,{name:"hours",type:"number",min:0,max:f,value:i,disabled:a,onChange:s,onBlur:d,"aria-label":"시간"}),u.jsx(g,{type:"normal",fontSize:"16px",children:"시간"}),u.jsx(h,{name:"minutes",type:"number",min:0,max:N,value:n,disabled:a,onChange:p,onBlur:b,"aria-label":"분"}),u.jsx(g,{type:"normal",fontSize:"16px",children:"분"})]})};k.__docgenInfo={description:"",methods:[],displayName:"ProblemTagLockTimer",props:{hours:{required:!0,tsType:{name:"number"},description:""},minutes:{required:!0,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(hours: number, minutes: number) => void",signature:{arguments:[{type:{name:"number"},name:"hours"},{type:{name:"number"},name:"minutes"}],return:{name:"void"}}},description:""}}};export{k as P};
