import{j as s}from"./jsx-runtime-DEdD30eg.js";import{d as I,l as x}from"./styled-components.browser.esm-CkAH7aAm.js";import{M as $}from"./MiniAlgorithmButton-BnJqfcSq.js";import{r as h}from"./index-RYns6xqu.js";import{g as N}from"./getSearchResults-B9kgfFwa.js";import{M as S}from"./randomDefense-Dtw7AXim.js";import{A as b}from"./algorithmInfos-Cl_JsY5X.js";const k=I.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:e,$isOpen:n})=>n&&x`
      & > ul {
        border-color: ${e.color.LEMON};
        box-shadow: 0 0 12px ${e.color.GOLD}70;
      }
    `}
`,_=x`
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
`,w=I.ul`
  ${_}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,C=I.input`
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
`,M=I.ul`
  ${_}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,j=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,[c,f]=h.useState(!1),[l,d]=h.useState(""),u=h.useRef(null),p=h.useRef(null),A=t=>{d(t.target.value)},m=n.length<S?N(l).filter(({id:t})=>!n.includes(t)).map(({id:t})=>t):[],E=t=>{if(t.key==="Enter"){if(m.length===0)return;a([...n,m[0]]),d("")}if(t.key==="Backspace"){if(l!=="")return;a(n.slice(0,-1))}},o=t=>{a([...n,t]),d("")},i=t=>{a(n.filter(r=>r!==t))};return h.useEffect(()=>{const t=u.current,r=p.current;if(!t||!r)return;const v=y=>{const O=y.target;!O||!(O instanceof Node)||f(t.contains(O))},g=()=>{document.activeElement!==document.body&&f(t.contains(document.activeElement))},R=()=>{r.focus()};return document.addEventListener("mousedown",v),document.addEventListener("focusin",g),document.addEventListener("focusout",g),t.addEventListener("click",R),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("focusin",g),document.removeEventListener("focusout",g),t.removeEventListener("click",R)}},[u,p]),{isOpen:c,inputValue:l,searchedAlgorithmIds:m,updateInputValue:A,processActionIfKeyPress:E,addAlgorithmId:o,deleteAlgorithmId:i,containerRef:u,inputRef:p}},L=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,{isOpen:c,inputValue:f,searchedAlgorithmIds:l,updateInputValue:d,processActionIfKeyPress:u,addAlgorithmId:p,deleteAlgorithmId:A,containerRef:m,inputRef:E}=j({selectedAlgorithmIds:n,onChange:a});return s.jsxs(k,{ref:m,$isOpen:c,tabIndex:-1,children:[s.jsx(w,{tabIndex:-1,children:s.jsxs(s.Fragment,{children:[n.map(o=>{const i=b.find(({id:r})=>r===o),t=i?i.name:"";return s.jsx($,{mode:"delete",id:o,name:t,onClick:A},o)}),s.jsx(C,{ref:E,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:c,value:f,onChange:d,onKeyDown:u})]})}),s.jsx(M,{$isOpen:c,tabIndex:-1,children:l.map(o=>{const i=b.find(({id:r})=>r===o),t=i?i.name:"";return s.jsx($,{mode:"add",id:o,name:t,onClick:p},o)})})]})};try{L.displayName="AlgorithmSearchInput",L.__docgenInfo={description:"",displayName:"AlgorithmSearchInput",props:{selectedAlgorithmIds:{defaultValue:null,description:"",name:"selectedAlgorithmIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedAlgorithmIds: number[]) => void"}}}}}catch{}export{L as A};
