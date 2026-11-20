import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";import{a as d}from"./index-CElCL35T.js";const n=(e,r)=>r==="bronze"?e.solvedAcTier.BRONZE:r==="silver"?e.solvedAcTier.SILVER:r==="gold"?e.solvedAcTier.GOLD:r==="platinum"?e.solvedAcTier.PLATINUM:r==="diamond"?e.solvedAcTier.DIAMOND:r==="ruby"?e.solvedAcTier.RUBY:e.color.GRAY,u=t.li`
  width: 32px;
  height: 32px;
`,s=t.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:e,$rank:r})=>n(e,r)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:e,$rank:r})=>`linear-gradient(to top, ${n(e,r)}70 0%, transparent 100%)`};
  }
`,c=t.img`
  width: 16px;
`;t.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.color.GOLD};
  font-weight: 800;
`;const p={unrated:"언레이티드 티어로 범위 설정하기",bronze:"브론즈 5부터 브론즈 1 티어까지로 범위 설정하기",silver:"실버 5부터 실버 1 티어까지로 범위 설정하기",gold:"골드 5부터 골드 1 티어까지로 범위 설정하기",platinum:"플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기",diamond:"다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기",ruby:"루비 5부터 루비 1 티어까지로 범위 설정하기"},i={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},a=e=>{const{rank:r,onClick:l}=e;return o.jsx(u,{children:o.jsx(s,{type:"button",$rank:r,"aria-label":p[r],onClick:()=>{l(i.START[r],i.END[r])},children:o.jsx(c,{src:d[r],alt:""})})})};try{a.displayName="TierPresetButton",a.__docgenInfo={description:"",displayName:"TierPresetButton",props:{rank:{defaultValue:null,description:"",name:"rank",required:!0,type:{name:"enum",value:[{value:'"ruby"'},{value:'"gold"'},{value:'"unrated"'},{value:'"bronze"'},{value:'"silver"'},{value:'"platinum"'},{value:'"diamond"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}}}catch{}export{a as T};
