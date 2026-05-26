import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{d as o,l as a}from"./styled-components.browser.esm-CIS6JKSM.js";import{a as D,s as _}from"./index-CElCL35T.js";import"./index--qcDGAq6.js";import{S as f}from"./clock-B5z8M2k5.js";import{S as R}from"./trash-JRBuQ8nU.js";import{f as I}from"./formatDate-DtmnLriP.js";const d=(e,l,r)=>l?r.colors.GRAY_500:e>=1&&e<=5?r.solvedAcTiers[5]:e>=6&&e<=10?r.solvedAcTiers[10]:e>=11&&e<=15?r.solvedAcTiers[15]:e>=16&&e<=20?r.solvedAcTiers[20]:e>=21&&e<=25?r.solvedAcTiers[25]:e>=26&&e<=30?r.solvedAcTiers[30]:r.colors.OFF_WHITE,u=(e,l,r,n)=>l?a`
      background-image:
        ${r?n.solvedAcTiers.HIDDEN_DARK_GRADIENT_200:n.solvedAcTiers.HIDDEN_DARK_GRADIENT_100},
        ${n.solvedAcTiers.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?a`
      background-image:
        ${r?n.solvedAcTiers.BRONZE_DARK_GRADIENT_200:n.solvedAcTiers.BRONZE_DARK_GRADIENT_100},
        ${n.solvedAcTiers.BRONZE_GRADIENT};
    `:e>=6&&e<=10?a`
      background-image:
        ${r?n.solvedAcTiers.SILVER_DARK_GRADIENT_200:n.solvedAcTiers.SILVER_DARK_GRADIENT_100},
        ${n.solvedAcTiers.SILVER_GRADIENT};
    `:e>=11&&e<=15?a`
      background-image:
        ${r?n.solvedAcTiers.GOLD_DARK_GRADIENT_200:n.solvedAcTiers.GOLD_DARK_GRADIENT_100},
        ${n.solvedAcTiers.GOLD_GRADIENT};
    `:e>=16&&e<=20?a`
      background-image:
        ${r?n.solvedAcTiers.PLATINUM_DARK_GRADIENT_200:n.solvedAcTiers.PLATINUM_DARK_GRADIENT_100},
        ${n.solvedAcTiers.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?a`
      background-image:
        ${r?n.solvedAcTiers.DIAMOND_DARK_GRADIENT_200:n.solvedAcTiers.DIAMOND_DARK_GRADIENT_100},
        ${n.solvedAcTiers.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?a`
      background-image:
        ${r?n.solvedAcTiers.RUBY_DARK_GRADIENT_200:n.solvedAcTiers.RUBY_DARK_GRADIENT_100},
        ${n.solvedAcTiers.RUBY_GRADIENT};
    `:a`
    background-image:
      ${r?n.solvedAcTiers.UNRATED_DARK_GRADIENT_200:n.solvedAcTiers.UNRATED_DARK_GRADIENT_100},
      ${n.solvedAcTiers.UNRATED_GRADIENT};
  `,g=o.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:l,theme:r})=>u(e,l,!1,r)};

  &:hover {
    ${({$tier:e,$isHidden:l,theme:r})=>u(e,l,!0,r)};
  }
`,x=o.a`
  display: flex;
  align-items: center;
`,m=o.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:l,theme:r})=>d(e,l,r)};
  }
`,b=o.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,E=o.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,N=o.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:l,theme:r})=>d(e,l,r)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,$=o.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,y=o.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:l,theme:r})=>d(e,l,r)};
`,G=o.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.colors.OFF_WHITE};
  }
`,k=o.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.colors.OFF_WHITE};
`,c=e=>{const{problemId:l,title:r,tier:n,createdAt:A,isHidden:s,tabIndex:t,linkButtonRef:p,onKeyDown:T,onDelete:v}=e;return i.jsxs(g,{$tier:n,$isHidden:s,onKeyDown:T,children:[i.jsxs(x,{href:`https://icpc.me/${l}`,target:"__blank","aria-label":`${l}번 ${r} 문제`,ref:p,tabIndex:t,children:[i.jsx(b,{src:s?D.hidden:_[n],alt:"",draggable:!1}),i.jsxs(E,{children:[i.jsx(N,{$tier:n,$isHidden:s,children:r}),i.jsxs($,{children:[i.jsx(y,{$tier:n,$isHidden:s,children:`#${l}`}),i.jsxs(G,{children:[i.jsx(f,{}),i.jsx(k,{children:I(new Date(A))})]})]})]})]}),i.jsx(m,{$tier:n,$isHidden:s,tabIndex:t,onClick:v,"aria-label":"추첨 기록에서 제거하기",children:i.jsx(R,{})})]})};try{c.displayName="RandomDefenseHistoryItem",c.__docgenInfo={description:"",displayName:"RandomDefenseHistoryItem",props:{problemId:{defaultValue:null,description:"",name:"problemId",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tier:{defaultValue:null,description:"",name:"tier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"},{value:"31"}]}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},linkButtonRef:{defaultValue:null,description:"",name:"linkButtonRef",required:!0,type:{name:"Ref<HTMLAnchorElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLLIElement>"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}export{c as R};
