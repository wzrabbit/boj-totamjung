import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as t}from"./styled-components.browser.esm-CkAH7aAm.js";import{a as d}from"./index-CElCL35T.js";const e=(o,r)=>r==="bronze"?o.solvedAcTier.BRONZE:r==="silver"?o.solvedAcTier.SILVER:r==="gold"?o.solvedAcTier.GOLD:r==="platinum"?o.solvedAcTier.PLATINUM:r==="diamond"?o.solvedAcTier.DIAMOND:r==="ruby"?o.solvedAcTier.RUBY:o.color.GRAY,l=t.li`
  width: 32px;
  height: 32px;
`,a=t.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:o,$rank:r})=>e(o,r)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:o,$rank:r})=>`linear-gradient(to top, ${e(o,r)}70 0%, transparent 100%)`};
  }
`,c=t.img`
  width: 16px;
`;t.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:o})=>o.color.GOLD};
  font-weight: 800;
`;const u={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},i={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},p=o=>{const{rank:r,onClick:s}=o;return n.jsx(l,{children:n.jsx(a,{type:"button",$rank:r,"aria-label":u[r],onClick:()=>{s(i.START[r],i.END[r])},children:n.jsx(c,{src:d[r],alt:""})})})};p.__docgenInfo={description:"",methods:[],displayName:"TierPresetButtonProps"};export{p as T};
