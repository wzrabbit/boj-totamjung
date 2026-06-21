import{j as i}from"./jsx-runtime-SwSI87LU.js";import{y as o,p as a}from"./styled-components.browser.esm-DmPUYCQi.js";import{a as _,s as f}from"./index-CElCL35T.js";import"./index-C5e9SFkp.js";import{S as R}from"./clock-CcSsg4p0.js";import{S as m}from"./trash-C-GIiUBp.js";import{f as g}from"./formatDate-DtmnLriP.js";import{u as I}from"./useTranslation-CHmiwnmk.js";const d=(e,l,r)=>l?r.colors.GRAY_500:e>=1&&e<=5?r.solvedAcTiers[5]:e>=6&&e<=10?r.solvedAcTiers[10]:e>=11&&e<=15?r.solvedAcTiers[15]:e>=16&&e<=20?r.solvedAcTiers[20]:e>=21&&e<=25?r.solvedAcTiers[25]:e>=26&&e<=30?r.solvedAcTiers[30]:r.colors.OFF_WHITE,c=(e,l,r,n)=>l?a`
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
  `,x=o.li`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:l,theme:r})=>c(e,l,!1,r)};

  &:hover {
    ${({$tier:e,$isHidden:l,theme:r})=>c(e,l,!0,r)};
  }
`,b=o.a`
  display: flex;
  align-items: center;
`,E=o.button`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:l,theme:r})=>d(e,l,r)};
  }
`,N=o.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`,$=o.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`,y=o.p`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:l,theme:r})=>d(e,l,r)};
  text-overflow: ellipsis;
  white-space: nowrap;
`,G=o.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,k=o.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:l,theme:r})=>d(e,l,r)};
`,K=o.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.colors.OFF_WHITE};
  }
`,w=o.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.colors.OFF_WHITE};
`,A=e=>{const{problemId:l,title:r,tier:n,createdAt:p,isHidden:s,tabIndex:t,linkButtonRef:D,onKeyDown:T,onDelete:v}=e,{t:u}=I();return i.jsxs(x,{$tier:n,$isHidden:s,onKeyDown:T,children:[i.jsxs(b,{href:`https://icpc.me/${l}`,target:"__blank","aria-label":u("randomDefenseHistory.item.problemAriaLabel",[String(l),r]),ref:D,tabIndex:t,children:[i.jsx(N,{src:s?_.hidden:f[n],alt:"",draggable:!1}),i.jsxs($,{children:[i.jsx(y,{$tier:n,$isHidden:s,children:r}),i.jsxs(G,{children:[i.jsx(k,{$tier:n,$isHidden:s,children:`#${l}`}),i.jsxs(K,{children:[i.jsx(R,{}),i.jsx(w,{children:g(new Date(p))})]})]})]})]}),i.jsx(E,{$tier:n,$isHidden:s,tabIndex:t,onClick:v,"aria-label":u("randomDefenseHistory.item.removeAriaLabel"),children:i.jsx(m,{})})]})};try{A.displayName="RandomDefenseHistoryItem",A.__docgenInfo={description:"",displayName:"RandomDefenseHistoryItem",props:{problemId:{defaultValue:null,description:"",name:"problemId",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tier:{defaultValue:null,description:"",name:"tier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"},{value:"31"}]}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!0,type:{name:"number"}},linkButtonRef:{defaultValue:null,description:"",name:"linkButtonRef",required:!0,type:{name:"Ref<HTMLAnchorElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLLIElement>"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}export{A as R};
