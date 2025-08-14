import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{d as o,l as a}from"./styled-components.browser.esm-CIS6JKSM.js";import{a as v,s as T}from"./index-CElCL35T.js";import{r as t}from"./index--qcDGAq6.js";import{S as D}from"./trash-JRBuQ8nU.js";import{f as R}from"./formatDate-DtmnLriP.js";const g=e=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},t.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),s=(e,i,r)=>i?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,c=(e,i,r,l)=>i?a`
      background-image:
        ${r?l.solvedAcTier.HIDDEN_DARK_GRADIENT200:l.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${l.solvedAcTier.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?a`
      background-image:
        ${r?l.solvedAcTier.BRONZE_DARK_GRADIENT200:l.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${l.solvedAcTier.BRONZE_GRADIENT};
    `:e>=6&&e<=10?a`
      background-image:
        ${r?l.solvedAcTier.SILVER_DARK_GRADIENT200:l.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${l.solvedAcTier.SILVER_GRADIENT};
    `:e>=11&&e<=15?a`
      background-image:
        ${r?l.solvedAcTier.GOLD_DARK_GRADIENT200:l.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${l.solvedAcTier.GOLD_GRADIENT};
    `:e>=16&&e<=20?a`
      background-image:
        ${r?l.solvedAcTier.PLATINUM_DARK_GRADIENT200:l.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${l.solvedAcTier.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?a`
      background-image:
        ${r?l.solvedAcTier.DIAMOND_DARK_GRADIENT200:l.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${l.solvedAcTier.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?a`
      background-image:
        ${r?l.solvedAcTier.RUBY_DARK_GRADIENT200:l.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${l.solvedAcTier.RUBY_GRADIENT};
    `:a`
    background-image:
      ${r?l.solvedAcTier.UNRATED_DARK_GRADIENT200:l.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${l.solvedAcTier.UNRATED_GRADIENT};
  `,f=o.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:i,theme:r})=>c(e,i,!1,r)};

  &:hover {
    ${({$tier:e,$isHidden:i,theme:r})=>c(e,i,!0,r)};
  }
`,x=o.a`
  display: flex;
  align-items: center;
`,I=o.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:i,theme:r})=>s(e,i,r)};
  }
`,_=o.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,m=o.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,E=o.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:i,theme:r})=>s(e,i,r)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,N=o.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,$=o.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:i,theme:r})=>s(e,i,r)};
`,b=o.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.WHITE};
  }
`,G=o.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.color.WHITE};
`,u=e=>{const{problemId:i,title:r,tier:l,createdAt:A,isHidden:d,onDelete:p}=e;return n.jsxs(f,{$tier:l,$isHidden:d,children:[n.jsxs(x,{href:`https://icpc.me/${i}`,target:"__blank","aria-label":`${i}번 ${r} 문제`,children:[n.jsx(_,{src:d?v.hidden:T[l],alt:"",draggable:!1}),n.jsxs(m,{children:[n.jsx(E,{$tier:l,$isHidden:d,children:r}),n.jsxs(N,{children:[n.jsx($,{$tier:l,$isHidden:d,children:`#${i}`}),n.jsxs(b,{children:[n.jsx(g,{}),n.jsx(G,{children:R(new Date(A))})]})]})]})]}),n.jsx(I,{$tier:l,$isHidden:d,onClick:p,"aria-label":"추첨 기록에서 제거하기",children:n.jsx(D,{})})]})};try{u.displayName="RandomDefenseHistoryItem",u.__docgenInfo={description:"",displayName:"RandomDefenseHistoryItem",props:{problemId:{defaultValue:null,description:"",name:"problemId",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tier:{defaultValue:null,description:"",name:"tier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"},{value:"31"}]}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}export{u as R};
