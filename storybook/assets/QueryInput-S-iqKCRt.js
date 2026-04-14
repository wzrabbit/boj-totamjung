import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as S}from"./Text-bOlMMuiR.js";import{i as v}from"./typeGuards-32w5_mfc.js";import{k as R,M as Q}from"./randomDefense-DE7lwrZG.js";import{r as n}from"./index--qcDGAq6.js";import{d as p}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as C}from"./getTransparentHexColor-DN69VCBw.js";import{t as _}from"./toPx-DeOSKary.js";const k=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...e},n.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4},n.createElement("path",{d:"M44 44V4H24v16H4v24z"}),n.createElement("path",{d:"m21 28l-4 4l4 4"}),n.createElement("path",{d:"M34 23v9H17"}))),I=e=>v(e)&&"autocomplete"in e&&"tags"in e&&M(e.autocomplete)&&T(e.tags),M=e=>Array.isArray(e)&&e.every(t=>j(t)),j=e=>v(e)&&"caption"in e&&"description"in e&&typeof e.caption=="string"&&typeof e.description=="string",T=e=>Array.isArray(e)&&e.every(t=>O(t)),O=e=>v(e)&&"caption"in e&&"name"in e&&typeof e.caption=="string"&&typeof e.name=="string",A=async e=>{try{const t=await fetch(`https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(e)}`,{headers:{"x-solvedac-language":"ko"}});if(!t.ok)return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."};const r=await t.json();return I(r)?{success:!0,suggestions:L(r)}:{success:!1,errorMessage:"예기치 못한 오류가 발생했습니다. 개발자에게 이 버그를 제보해주세요."}}catch{return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."}}},L=e=>{const{autocomplete:t,tags:r}=e;return[...t.filter(({description:o})=>o!==""),...r.map(({name:o,caption:l})=>({caption:l,description:o}))].slice(0,R)},q=["*","tier:","id:","s#","solved:","#","tag","/","from:","t#","average_try:","µ#","%","lang:","@","solved_by:","o@","solved_by_org","t@","tried_by:","v@","voted_by:","c@","contributed_by:","c/","in_class:","e/","in_class_essentials:","s?","standard:","p?","sprout:","sp?","o?","solvable:","v?","votable:","c?","contributable:","w?","warning:","v#","voted:","c#","contributed:","**","vote_average:","a*","µ*"],N=/^[A-z가-힣 ]+$/,z=["|","&","(",")","!","~","-"," "],D=e=>{if(N.test(e))return 0;for(let t=e.length-1;t>=0;t-=1)if(z.includes(e[t]))return t+1;return 0},V=(e,t)=>{const r=D(e);return`${e.slice(0,r)}${t}${q.includes(t)?"":" "}`},B=e=>{const{value:t,textareaRef:r,onChange:c}=e,[o,l]=n.useState([]),[f,d]=n.useState("잠시만 기다려주세요..."),g=n.useRef(t),u=n.useRef(!1);n.useEffect(()=>{if(g.current=t,u.current)return;u.current=!0;const s=async()=>{const a=await A(g.current);if(a.success){l(a.suggestions),d(null);return}l([]),d(a.errorMessage)};setTimeout(()=>{u.current=!1,s()},200)},[t]);const y=s=>{const a=s.target.value.replace(/\n/g,"");c(a)},h=s=>{var w;const a=V(t,s.caption);c(a),r&&"current"in r&&((w=r.current)==null||w.focus())};return{suggestions:o,fallbackMessage:f,textareaRef:r,updateQuery:y,applySuggestion:h,applyFirstSuggestionIfEnterKeyPressed:s=>{s.code==="Enter"&&o.length>0&&!s.nativeEvent.isComposing&&h(o[0])}}},F=p.div`
  display: flex;
  flex-direction: column;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  border: 1.5px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  &:focus-within {
    border-color: ${({theme:e,$hasError:t})=>t?e.colors.RED:e.colors.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:t})=>C(t?e.colors.RED:e.colors.LEMON,.5)};
  }

  transition: outline 0.05s;
`,G=p.textarea`
  flex-grow: 1;

  width: 100%;

  padding: 6px;

  border: none;
  border-bottom: 1.5px solid ${({theme:e})=>e.colors.BROWN_500};
  background: transparent;

  color: ${({theme:e})=>e.colors.OFF_WHITE};
  font-size: 13px;

  resize: none;
  outline: none;
  transition: border-bottom-color 0.2s;
`,m=p.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  column-gap: 20px;
  flex-wrap: wrap;

  width: 100%;
  height: 48px;

  padding: 4px 6px;
`,x=p.div`
  display: inline-flex;

  width: auto;
  height: 20px;
`,$=p.button`
  background: none;
  border: none;

  height: 100%;
  padding: 0 4px;

  color: ${({theme:e})=>e.colors.GOLD};
  font-size: 13px;
  line-height: 20px;

  transition: 0.15s;
  outline: none;
  opacity: 0.6;

  &:hover,
  &:focus {
    opacity: 1;
    text-shadow: 0 0 5px ${({theme:e})=>e.colors.GOLD};
  }
`,H=p.div`
  width: 14px;
  height: 20px;
  padding: 3px 0;

  opacity: 0;
  transition: 0.15s;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.colors.GOLD};
  }

  ${m}:not(:has(:focus-visible)) ${x}:first-child & {
    opacity: 0.6;
  }

  ${m} ${x} ${$}:focus-visible + & {
    opacity: 1;
  }
`,E=n.forwardRef((e,t)=>{const{width:r,height:c,value:o,placeholder:l,hasError:f=!1,onChange:d}=e,{suggestions:g,fallbackMessage:u,updateQuery:y,applySuggestion:h,applyFirstSuggestionIfEnterKeyPressed:b}=B({value:o,textareaRef:t,onChange:d});return i.jsxs(F,{$width:_(r),$height:_(c),$hasError:f,children:[i.jsx(G,{value:o,onChange:y,onKeyDown:b,ref:t,placeholder:l,minLength:1,maxLength:Q,spellCheck:!1}),i.jsx(m,{tabIndex:-1,children:u?i.jsx(S,{as:"span",type:"gray",fontSize:13,children:u}):g.length===0?i.jsx(S,{as:"span",type:"gray",fontSize:13,children:"자동완성 결과가 없습니다."}):g.map(s=>i.jsxs(x,{children:[i.jsx($,{title:s.description,type:"button",onClick:()=>h(s),children:s.caption}),i.jsx(H,{children:i.jsx(k,{})})]},s.caption))})]})});try{E.displayName="QueryInput",E.__docgenInfo={description:"",displayName:"QueryInput",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(query: string) => void"}}}}}catch{}export{E as Q};
