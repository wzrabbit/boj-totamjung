import{j as n}from"./jsx-runtime-SwSI87LU.js";import{y as t}from"./styled-components.browser.esm-DmPUYCQi.js";import{a as d}from"./index-CElCL35T.js";import{u}from"./useTranslation-oInNA2-n.js";const a=(e,r)=>r==="bronze"?e.solvedAcTiers.BRONZE:r==="silver"?e.solvedAcTiers.SILVER:r==="gold"?e.solvedAcTiers.GOLD:r==="platinum"?e.solvedAcTiers.PLATINUM:r==="diamond"?e.solvedAcTiers.DIAMOND:r==="ruby"?e.solvedAcTiers.RUBY:e.colors.GRAY_500,c=t.li`
  width: 32px;
  height: 32px;
`,p=t.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({theme:e,$rank:r})=>a(e,r)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({theme:e,$rank:r})=>`linear-gradient(to top, ${a(e,r)}70 0%, transparent 100%)`};
  }
`,m=t.img`
  width: 16px;
`;t.div`
  width: 16px;

  font-size: 24px;
  color: ${({theme:e})=>e.colors.GOLD};
  font-weight: 800;
`;const b={unrated:"randomDefenseCreate.tierPreset.unratedAriaLabel",bronze:"randomDefenseCreate.tierPreset.bronzeAriaLabel",silver:"randomDefenseCreate.tierPreset.silverAriaLabel",gold:"randomDefenseCreate.tierPreset.goldAriaLabel",platinum:"randomDefenseCreate.tierPreset.platinumAriaLabel",diamond:"randomDefenseCreate.tierPreset.diamondAriaLabel",ruby:"randomDefenseCreate.tierPreset.rubyAriaLabel"},o={START:{unrated:0,bronze:1,silver:6,gold:11,platinum:16,diamond:21,ruby:26},END:{unrated:0,bronze:5,silver:10,gold:15,platinum:20,diamond:25,ruby:30}},i=e=>{const{rank:r,onClick:s}=e,{t:l}=u();return n.jsx(c,{children:n.jsx(p,{type:"button",$rank:r,"aria-label":l(b[r]),onClick:()=>{s(o.START[r],o.END[r])},children:n.jsx(m,{src:d[r],alt:""})})})};try{i.displayName="TierPresetButton",i.__docgenInfo={description:"",displayName:"TierPresetButton",props:{rank:{defaultValue:null,description:"",name:"rank",required:!0,type:{name:"enum",value:[{value:'"unrated"'},{value:'"bronze"'},{value:'"silver"'},{value:'"gold"'},{value:'"platinum"'},{value:'"diamond"'},{value:'"ruby"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void"}}}}}catch{}export{i as T};
