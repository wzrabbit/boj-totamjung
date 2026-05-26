import{j as i}from"./jsx-runtime-SwSI87LU.js";import{p as A,y as v}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as N}from"./getTransparentHexColor-DN69VCBw.js";import{M as b}from"./MiniAlgorithmButton-BQ5hPtiw.js";import{r as f}from"./index-C5e9SFkp.js";import{a as k,g as y}from"./getSearchResults-B9fljDQH.js";import{f as w}from"./randomDefense-JL_bjho1.js";import{u as _}from"./useRovingFocus-B429qbOp.js";import{a as L}from"./algorithmInfos-yvhlfANf.js";import{u as j}from"./useTranslation-oInNA2-n.js";const M=v.div`
  position: relative;

  width: 446px;
  height: 64px;

  ${({theme:e,$isOpen:o})=>o&&A`
      & > ul {
        border-color: ${e.colors.LEMON};
        box-shadow: 0 0 12px ${N(e.colors.GOLD,.44)};
      }
    `}
`,C=A`
  display: flex;
  overflow: auto;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  padding: 4px;

  border: 1.5px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};
`,P=v.ul`
  ${C}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,V=v.input`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  color: ${({theme:e})=>e.colors.OFF_WHITE};

  transition: outline 0.05s;

  ${({$isOpen:e})=>!e&&A`
      opacity: 0;
    `}

  ${({theme:e,$isOpen:o})=>o&&A`
      border-color: ${e.colors.LEMON};
      outline: 3px solid ${N(e.colors.LEMON,.44)};
    `}
`,B=v.ul`
  ${C}

  position: absolute;

  height: ${({$isOpen:e})=>e?"90px":"64px"};

  transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-64px)"};

  font-size: 13px;

  transition: 0.3s;
`,F=e=>{const{selectedAlgorithmIds:o,onChange:l}=e,[x,I]=f.useState(!1),[a,p]=f.useState(""),u=f.useRef(null),m=f.useRef(null),O=t=>{p(t.target.value)},g=o.length<w?k(a).filter(({id:t})=>!o.includes(t)).map(({id:t})=>t):[],E=t=>{if(t.key==="Enter"){if(g.length===0)return;l([...o,g[0]]),p("")}if(t.key==="Backspace"){if(a!=="")return;l(o.slice(0,-1))}},R=t=>{l([...o,t]),p("")},$=t=>{l(o.filter(d=>d!==t))};return f.useEffect(()=>{const t=u.current,d=m.current;if(!t||!d)return;const n=h=>{const c=h.target;!c||!(c instanceof Node)||I(t.contains(c))},r=()=>{document.activeElement!==document.body&&I(t.contains(document.activeElement))},s=()=>{d.focus()};return document.addEventListener("mousedown",n),document.addEventListener("focusin",r),document.addEventListener("focusout",r),t.addEventListener("click",s),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("focusin",r),document.removeEventListener("focusout",r),t.removeEventListener("click",s)}},[u,m]),{isOpen:x,inputValue:a,searchedAlgorithmIds:g,updateInputValue:O,processActionIfKeyPress:E,addAlgorithmId:R,deleteAlgorithmId:$,containerRef:u,inputRef:m}},S=e=>{const{selectedAlgorithmIds:o,onChange:l}=e,{language:x,t:I}=j(),{isOpen:a,inputValue:p,searchedAlgorithmIds:u,updateInputValue:m,processActionIfKeyPress:O,addAlgorithmId:g,deleteAlgorithmId:E,containerRef:R,inputRef:$}=F({selectedAlgorithmIds:o,onChange:l}),{getRovingProps:t}=_({count:o.length}),{getRovingProps:d}=_({count:u.length});return i.jsxs(M,{ref:R,$isOpen:a,tabIndex:-1,children:[i.jsx(P,{tabIndex:-1,children:i.jsxs(i.Fragment,{children:[o.map((n,r)=>{const s=L.find(({id:c})=>c===n),h=s?y(s,x):"";return i.jsx(b,{mode:"delete",id:n,name:h,...t(r),onClick:E},n)}),i.jsx(V,{ref:$,maxLength:100,"aria-label":I("options.algorithmPool.searchInputAriaLabel"),$isOpen:a,value:p,onChange:m,onKeyDown:O})]})}),i.jsx(B,{$isOpen:a,tabIndex:-1,children:u.map((n,r)=>{const s=L.find(({id:c})=>c===n),h=s?y(s,x):"";return i.jsx(b,{mode:"add",id:n,name:h,...d(r),onClick:g},n)})})]})};try{S.displayName="AlgorithmSearchInput",S.__docgenInfo={description:"",displayName:"AlgorithmSearchInput",props:{selectedAlgorithmIds:{defaultValue:null,description:"",name:"selectedAlgorithmIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedAlgorithmIds: number[]) => void"}}}}}catch{}export{S as A};
