import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as n,l as h}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as l}from"./index-RYns6xqu.js";import{S as b}from"./check-Dgz4zLBN.js";import{s as m}from"./index-CElCL35T.js";const T=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),D=n.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,R=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 134px;
  height: 32px;
  padding: 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHT_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:e,$isActivated:r})=>r?h`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:h`
          border: 1.5px solid ${e.color.BROWN};
        `}
`,g=n.img`
  width: 12px;
  height: auto;
`,f=n.p`
  font-size: 14px;
  color: ${({theme:e,$tier:r})=>e.solvedAcTier[r]};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,$=n.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,y=n.ul`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 150px;
  height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:e})=>e.color.LEMON};
  box-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  scrollbar-width: none;

  transform-origin: top;
  pointer-events: auto;
  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,S=n.li`
  padding: 2px;
`,B=n.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.color.BROWN};
  }
`,j=n.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,E=e=>{const{initSelectedTier:r,onChange:p}=e,[i,d]=l.useState(r),[u,s]=l.useState(!1),c=l.useRef(null);return l.useEffect(()=>{d(r)},[r]),l.useEffect(()=>{const a=c.current;if(!a)return;const I=v=>{v.target instanceof Node&&v.target!==a&&!a.contains(v.target)&&s(!1)};return document.addEventListener("click",I),()=>{document.removeEventListener("click",I)}},[c]),{selectedTier:i,isDropdownOpen:u,updateSelectedTier:a=>{d(a),s(!1),p(a)},openDropdown:()=>{s(!0)},containerRef:c}},O=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],x={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},w=e=>{const{selectedTier:r,onChange:p}=e,{selectedTier:i,updateSelectedTier:d,isDropdownOpen:u,openDropdown:s,containerRef:c}=E({initSelectedTier:r,onChange:p});return o.jsxs(D,{ref:c,children:[o.jsxs(R,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:u,onClick:s,children:[o.jsx(g,{src:m[i],alt:""}),o.jsx(f,{$tier:i,$isBold:!0,children:x[i]}),o.jsx($,{children:o.jsx(T,{})})]}),o.jsx(y,{$isOpen:u,children:O.map(t=>o.jsx(S,{children:o.jsxs(B,{type:"button","aria-label":`${x[t]}를 경고 시작 티어로 설정하기`,onClick:()=>{d(t)},children:[o.jsx(g,{src:m[t],alt:""}),o.jsx(f,{$tier:t,$isBold:t===i,children:x[t]}),t===i&&o.jsx(j,{children:o.jsx(b,{})})]})},t))})]})};try{w.displayName="TierDropdown",w.__docgenInfo={description:"",displayName:"TierDropdown",props:{selectedTier:{defaultValue:null,description:"",name:"selectedTier",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(tier: RatedTier) => void"}}}}}catch{}export{w as T};
