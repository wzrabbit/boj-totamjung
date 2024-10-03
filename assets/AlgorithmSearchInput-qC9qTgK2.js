import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as A,l as x}from"./styled-components.browser.esm-CkAH7aAm.js";import{M as R}from"./MiniAlgorithmButton-BRZMqM4y.js";import{r as h}from"./index-RYns6xqu.js";import{g as L}from"./getSearchResults-CDgN9_fa.js";import{M as w}from"./randomDefense-DfcJoTYj.js";import{A as v}from"./algorithmInfos-BizjuJN7.js";const N=A.div`
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
`,S=A.ul`
  ${$}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,M=A.input`
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
`,_=A.ul`
  ${$}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,j=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,[c,f]=h.useState(!1),[d,l]=h.useState(""),u=h.useRef(null),p=h.useRef(null),I=t=>{l(t.target.value)},m=n.length<w?L(d).filter(({id:t})=>!n.includes(t)).map(({id:t})=>t):[],E=t=>{if(t.key==="Enter"){if(m.length===0)return;a([...n,m[0]]),l("")}if(t.key==="Backspace"){if(d!=="")return;a(n.slice(0,-1))}},o=t=>{a([...n,t]),l("")},s=t=>{a(n.filter(i=>i!==t))};return h.useEffect(()=>{const t=u.current,i=p.current;if(!t||!i)return;const b=y=>{const O=y.target;!O||!(O instanceof Node)||f(t.contains(O))},g=()=>{document.activeElement!==document.body&&f(t.contains(document.activeElement))};return document.addEventListener("mousedown",b),document.addEventListener("focusin",g),document.addEventListener("focusout",g),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("focusin",g),document.removeEventListener("focusout",g)}},[u,p]),{isOpen:c,inputValue:d,searchedAlgorithmIds:m,updateInputValue:I,processActionIfKeyPress:E,addAlgorithmId:o,deleteAlgorithmId:s,containerRef:u,inputRef:p}},C=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,{isOpen:c,inputValue:f,searchedAlgorithmIds:d,updateInputValue:l,processActionIfKeyPress:u,addAlgorithmId:p,deleteAlgorithmId:I,containerRef:m,inputRef:E}=j({selectedAlgorithmIds:n,onChange:a});return r.jsxs(N,{ref:m,$isOpen:c,tabIndex:-1,children:[r.jsx(S,{tabIndex:-1,children:r.jsxs(r.Fragment,{children:[n.map(o=>{const s=v.find(({id:i})=>i===o),t=s?s.name:"";return r.jsx(R,{mode:"delete",id:o,name:t,onClick:I},o)}),r.jsx(M,{ref:E,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:c,value:f,onChange:l,onKeyDown:u})]})}),r.jsx(_,{$isOpen:c,tabIndex:-1,children:d.map(o=>{const s=v.find(({id:i})=>i===o),t=s?s.name:"";return r.jsx(R,{mode:"add",id:o,name:t,onClick:p},o)})})]})};C.__docgenInfo={description:"",methods:[],displayName:"AlgorithmSearchInput",props:{selectedAlgorithmIds:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedAlgorithmIds: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"selectedAlgorithmIds"}],return:{name:"void"}}},description:""}}};export{C as A};
