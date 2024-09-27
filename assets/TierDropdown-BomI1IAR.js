import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as n,l as h}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as s}from"./index-RYns6xqu.js";import{S as b}from"./check-Dgz4zLBN.js";import{s as g}from"./index-CElCL35T.js";const v=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",clipRule:"evenodd"})),T=n.div`
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

  ${({theme:e,$isActivated:t})=>t?h`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:h`
          border: 1.5px solid ${e.color.BROWN};
        `}
`,f=n.img`
  width: 12px;
  height: auto;
`,w=n.p`
  font-size: 14px;
  color: ${({theme:e,$tier:t})=>e.solvedAcTier[t]};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,D=n.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,$=n.ul`
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
`,y=n.li`
  padding: 2px;
`,S=n.button`
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
`,B=n.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,j=e=>{const{initSelectedTier:t,onChange:u}=e,[i,a]=s.useState(t),[p,c]=s.useState(!1),d=s.useRef(null);return s.useEffect(()=>{a(t)},[t]),s.useEffect(()=>{const l=d.current;if(!l)return;const m=x=>{x.target instanceof Node&&x.target!==l&&!l.contains(x.target)&&c(!1)};return document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}},[d]),{selectedTier:i,isDropdownOpen:p,updateSelectedTier:l=>{a(l),c(!1),u(l)},openDropdown:()=>{c(!0)},containerRef:d}},E=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],I={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},O=e=>{const{selectedTier:t,onChange:u}=e,{selectedTier:i,updateSelectedTier:a,isDropdownOpen:p,openDropdown:c,containerRef:d}=j({initSelectedTier:t,onChange:u});return o.jsxs(T,{ref:d,children:[o.jsxs(R,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:p,onClick:c,children:[o.jsx(f,{src:g[i],alt:""}),o.jsx(w,{$tier:i,$isBold:!0,children:I[i]}),o.jsx(D,{children:o.jsx(v,{})})]}),o.jsx($,{$isOpen:p,children:E.map(r=>o.jsx(y,{children:o.jsxs(S,{type:"button","aria-label":`${I[r]}를 경고 시작 티어로 설정하기`,onClick:()=>{a(r)},children:[o.jsx(f,{src:g[r],alt:""}),o.jsx(w,{$tier:r,$isBold:r===i,children:I[r]}),r===i&&o.jsx(B,{children:o.jsx(b,{})})]})},r))})]})};O.__docgenInfo={description:"",methods:[],displayName:"TierDropdown",props:{selectedTier:{required:!0,tsType:{name:"RatedTier"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tier: RatedTier) => void",signature:{arguments:[{type:{name:"RatedTier"},name:"tier"}],return:{name:"void"}}},description:""}}};export{O as T};
