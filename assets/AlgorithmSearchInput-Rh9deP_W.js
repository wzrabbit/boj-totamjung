import{j as s}from"./jsx-runtime-DEdD30eg.js";import{d as A,l as x}from"./styled-components.browser.esm-CkAH7aAm.js";import{M as O}from"./MiniAlgorithmButton-BRZMqM4y.js";import{r as f}from"./index-RYns6xqu.js";import{g as v}from"./getSearchResults-CDgN9_fa.js";import{M as y}from"./randomDefense-DfcJoTYj.js";import{A as R}from"./algorithmInfos-BizjuJN7.js";const L=A.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:e,$isOpen:n})=>n&&x`
      & > ul {
        border-color: ${e.color.LEMON};
        box-shadow: 0 0 12px ${e.color.GOLD}70;
      }
    `}
`,$=x`
  display: flex;
  overflow: auto;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  padding: 4px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};
`,N=A.ul`
  ${$}

  position: relative;

  height: 64px;

  z-index: 1;
  cursor: text;
`,w=A.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};

  transition: outline 0.05s;

  ${({$isOpen:e})=>!e&&x`
      opacity: 0;
    `}

  ${({theme:e,$isOpen:n})=>n&&x`
      border-color: ${e.color.LEMON};
      outline: 3px solid ${e.color.LEMON}70;
    `}
`,M=A.ul`
  ${$}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,S=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,[c,l]=f.useState(!1),[u,d]=f.useState(""),p=f.useRef(null),m=f.useRef(null),I=t=>{d(t.target.value)},h=n.length<y?v(u).filter(({id:t})=>!n.includes(t)).map(({id:t})=>t):[],b=t=>{if(t.key==="Enter"){if(h.length===0)return;a([...n,h[0]]),d("")}if(t.key==="Backspace"){if(u!=="")return;a(n.slice(0,-1))}},r=t=>{a([...n,t]),d("")},i=t=>{a(n.filter(o=>o!==t))};return f.useEffect(()=>{const t=p.current,o=m.current;if(!t||!o)return;const E=()=>{o.focus(),l(()=>!0)},g=()=>{l(()=>t.contains(document.activeElement))};return t.addEventListener("click",E),t.addEventListener("focusin",g),t.addEventListener("focusout",g),()=>{t.removeEventListener("click",E),t.removeEventListener("focusin",g),t.removeEventListener("focusout",g)}},[p,m,c,l]),{isOpen:c,inputValue:u,searchedAlgorithmIds:h,updateInputValue:I,processActionIfKeyPress:b,addAlgorithmId:r,deleteAlgorithmId:i,containerRef:p,inputRef:m}},_=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,{isOpen:c,inputValue:l,searchedAlgorithmIds:u,updateInputValue:d,processActionIfKeyPress:p,addAlgorithmId:m,deleteAlgorithmId:I,containerRef:h,inputRef:b}=S({selectedAlgorithmIds:n,onChange:a});return s.jsxs(L,{ref:h,$isOpen:c,tabIndex:-1,children:[s.jsx(N,{tabIndex:-1,children:s.jsxs(s.Fragment,{children:[n.map(r=>{const i=R.find(({id:o})=>o===r),t=i?i.name:"";return s.jsx(O,{mode:"delete",id:r,name:t,onClick:I},r)}),s.jsx(w,{ref:b,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:c,value:l,onChange:d,onKeyDown:p})]})}),s.jsx(M,{$isOpen:c,tabIndex:-1,children:u.map(r=>{const i=R.find(({id:o})=>o===r),t=i?i.name:"";return s.jsx(O,{mode:"add",id:r,name:t,onClick:m},r)})})]})};_.__docgenInfo={description:"",methods:[],displayName:"AlgorithmSearchInput",props:{selectedAlgorithmIds:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedAlgorithmIds: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"selectedAlgorithmIds"}],return:{name:"void"}}},description:""}}};export{_ as A};
