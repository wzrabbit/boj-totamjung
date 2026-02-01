import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{l as x,d as I}from"./styled-components.browser.esm-CIS6JKSM.js";import{M as $}from"./MiniAlgorithmButton-DGG-Ub0G.js";import{r as g}from"./index--qcDGAq6.js";import{g as N}from"./getSearchResults-Chq8hyZv.js";import{b as k}from"./randomDefense-DE7lwrZG.js";import{u as b}from"./useRovingFocus-C_x1-dB5.js";import{A as L}from"./algorithmInfos-DSQSQ7kk.js";const w=I.div`
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
`,C=I.ul`
  ${_}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`,j=I.input`
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
`,P=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,[d,f]=g.useState(!1),[c,u]=g.useState(""),p=g.useRef(null),m=g.useRef(null),A=t=>{u(t.target.value)},h=n.length<k?N(c).filter(({id:t})=>!n.includes(t)).map(({id:t})=>t):[],v=t=>{if(t.key==="Enter"){if(h.length===0)return;a([...n,h[0]]),u("")}if(t.key==="Backspace"){if(c!=="")return;a(n.slice(0,-1))}},E=t=>{a([...n,t]),u("")},R=t=>{a(n.filter(o=>o!==t))};return g.useEffect(()=>{const t=p.current,o=m.current;if(!t||!o)return;const r=y=>{const O=y.target;!O||!(O instanceof Node)||f(t.contains(O))},s=()=>{document.activeElement!==document.body&&f(t.contains(document.activeElement))},l=()=>{o.focus()};return document.addEventListener("mousedown",r),document.addEventListener("focusin",s),document.addEventListener("focusout",s),t.addEventListener("click",l),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("focusin",s),document.removeEventListener("focusout",s),t.removeEventListener("click",l)}},[p,m]),{isOpen:d,inputValue:c,searchedAlgorithmIds:h,updateInputValue:A,processActionIfKeyPress:v,addAlgorithmId:E,deleteAlgorithmId:R,containerRef:p,inputRef:m}},S=e=>{const{selectedAlgorithmIds:n,onChange:a}=e,{isOpen:d,inputValue:f,searchedAlgorithmIds:c,updateInputValue:u,processActionIfKeyPress:p,addAlgorithmId:m,deleteAlgorithmId:A,containerRef:h,inputRef:v}=P({selectedAlgorithmIds:n,onChange:a}),{getRovingProps:E}=b({count:n.length}),{getRovingProps:R}=b({count:c.length});return i.jsxs(w,{ref:h,$isOpen:d,tabIndex:-1,children:[i.jsx(C,{tabIndex:-1,children:i.jsxs(i.Fragment,{children:[n.map((t,o)=>{const r=L.find(({id:l})=>l===t),s=r?r.name:"";return i.jsx($,{mode:"delete",id:t,name:s,...E(o),onClick:A},t)}),i.jsx(j,{ref:v,maxLength:100,"aria-label":"알고리즘을 입력해 주세요",$isOpen:d,value:f,onChange:u,onKeyDown:p})]})}),i.jsx(M,{$isOpen:d,tabIndex:-1,children:c.map((t,o)=>{const r=L.find(({id:l})=>l===t),s=r?r.name:"";return i.jsx($,{mode:"add",id:t,name:s,...R(o),onClick:m},t)})})]})};try{S.displayName="AlgorithmSearchInput",S.__docgenInfo={description:"",displayName:"AlgorithmSearchInput",props:{selectedAlgorithmIds:{defaultValue:null,description:"",name:"selectedAlgorithmIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedAlgorithmIds: number[]) => void"}}}}}catch{}export{S as A};
