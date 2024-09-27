import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as s,l as d}from"./styled-components.browser.esm-CkAH7aAm.js";import{a as p,s as D}from"./index-CElCL35T.js";import{r as c}from"./index-RYns6xqu.js";import{S as g}from"./trash-CO6QCs-j.js";import{f as u}from"./formatDate-DtmnLriP.js";const R=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},c.createElement("path",{fill:"currentColor",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"})),l=(e,o,r)=>o?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,a=(e,o,r,i)=>o?d`
      background-image: ${r?i.solvedAcTier.HIDDEN_DARK_GRADIENT200:i.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${i.solvedAcTier.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?d`
      background-image: ${r?i.solvedAcTier.BRONZE_DARK_GRADIENT200:i.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${i.solvedAcTier.BRONZE_GRADIENT};
    `:e>=6&&e<=10?d`
      background-image: ${r?i.solvedAcTier.SILVER_DARK_GRADIENT200:i.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${i.solvedAcTier.SILVER_GRADIENT};
    `:e>=11&&e<=15?d`
      background-image: ${r?i.solvedAcTier.GOLD_DARK_GRADIENT200:i.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${i.solvedAcTier.GOLD_GRADIENT};
    `:e>=16&&e<=20?d`
      background-image: ${r?i.solvedAcTier.PLATINUM_DARK_GRADIENT200:i.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${i.solvedAcTier.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?d`
      background-image: ${r?i.solvedAcTier.DIAMOND_DARK_GRADIENT200:i.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${i.solvedAcTier.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?d`
      background-image: ${r?i.solvedAcTier.RUBY_DARK_GRADIENT200:i.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${i.solvedAcTier.RUBY_GRADIENT};
    `:d`
    background-image: ${r?i.solvedAcTier.UNRATED_DARK_GRADIENT200:i.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${i.solvedAcTier.UNRATED_GRADIENT};
  `,x=s.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:o,theme:r})=>a(e,o,!1,r)};

  &:hover {
    ${({$tier:e,$isHidden:o,theme:r})=>a(e,o,!0,r)};
  }
`,f=s.a`
  display: flex;
  align-items: center;
`,I=s.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:o,theme:r})=>l(e,o,r)};
  }
`,_=s.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,E=s.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,v=s.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:o,theme:r})=>l(e,o,r)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,N=s.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,$=s.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:o,theme:r})=>l(e,o,r)};
`,b=s.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.WHITE};
  }
`,G=s.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.color.WHITE};
`,m=e=>{const{problemId:o,title:r,tier:i,createdAt:A,isHidden:t,onDelete:T}=e;return n.jsxs(x,{$tier:i,$isHidden:t,children:[n.jsxs(f,{href:`https://icpc.me/${o}`,target:"__blank","aria-label":`${o}번 ${r} 문제`,children:[n.jsx(_,{src:t?p.hidden:D[i],alt:"",draggable:!1}),n.jsxs(E,{children:[n.jsx(v,{$tier:i,$isHidden:t,children:r}),n.jsxs(N,{children:[n.jsx($,{$tier:i,$isHidden:t,children:`#${o}`}),n.jsxs(b,{children:[n.jsx(R,{}),n.jsx(G,{children:u(new Date(A))})]})]})]})]}),n.jsx(I,{$tier:i,$isHidden:t,onClick:T,"aria-label":"추첨 기록에서 제거하기",children:n.jsx(g,{})})]})};m.__docgenInfo={description:"",methods:[],displayName:"RandomDefenseHistoryItem",props:{problemId:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},tier:{required:!0,tsType:{name:"unknown"},description:""},createdAt:{required:!0,tsType:{name:"IsoString"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{m as R};
