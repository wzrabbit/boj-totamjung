import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as r,l as s}from"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";import{S as h}from"./check-BIa-lIjI.js";import{u as g,S as b}from"./useSelect-Cvrmd0wu.js";import{s as c}from"./index-CElCL35T.js";const f=r.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,$=r.button`
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

  ${({theme:e,$isActivated:i})=>i?s`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:s`
          border: 1.5px solid ${e.color.BROWN};
        `}
`,d=r.img`
  width: 12px;
  height: auto;
`,u=r.p`
  font-size: 14px;
  color: ${({theme:e,$tier:i})=>e.solvedAcTier[i]};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,w=r.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,y=r.ul`
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
`,T=r.li`
  padding: 2px;
`,R=r.button`
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
`,S=r.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,V=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],n={1:"Bronze V",2:"Bronze IV",3:"Bronze III",4:"Bronze II",5:"Bronze I",6:"Silver V",7:"Silver IV",8:"Silver III",9:"Silver II",10:"Silver I",11:"Gold V",12:"Gold IV",13:"Gold III",14:"Gold II",15:"Gold I",16:"Platinum V",17:"Platinum IV",18:"Platinum III",19:"Platinum II",20:"Platinum I",21:"Diamond V",22:"Diamond IV",23:"Diamond III",24:"Diamond II",25:"Diamond I",26:"Ruby V",27:"Ruby IV",28:"Ruby III",29:"Ruby II",30:"Ruby I"},p=e=>{const{selectedTier:i,onChange:v}=e,{selectedValue:t,updateSelectedValue:x,isSelectOpen:a,openSelect:I,containerRef:m}=g({initSelectedValue:i,onChange:v});return o.jsxs(f,{ref:m,children:[o.jsxs($,{type:"button","aria-label":"난이도 경고 시작 티어 변경하기",$isActivated:a,onClick:I,children:[o.jsx(d,{src:c[t],alt:""}),o.jsx(u,{$tier:t,$isBold:!0,children:n[t]}),o.jsx(w,{children:o.jsx(b,{})})]}),o.jsx(y,{$isOpen:a,children:V.map(l=>o.jsx(T,{children:o.jsxs(R,{type:"button","aria-label":`${n[l]}를 경고 시작 티어로 설정하기`,onClick:()=>{x(l)},children:[o.jsx(d,{src:c[l],alt:""}),o.jsx(u,{$tier:l,$isBold:l===t,children:n[l]}),l===t&&o.jsx(S,{children:o.jsx(h,{})})]})},l))})]})};try{p.displayName="TierSelect",p.__docgenInfo={description:"",displayName:"TierSelect",props:{selectedTier:{defaultValue:null,description:"",name:"selectedTier",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(tier: RatedTier) => void"}}}}}catch{}export{p as T};
