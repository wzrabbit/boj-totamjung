import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as E}from"./Text-DwCBBkEm.js";import{i as v}from"./typeGuards-Bsa9ERJp.js";import{k as $,M as Q}from"./randomDefense-DE7lwrZG.js";import{r as o}from"./index--qcDGAq6.js";import{d as p}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as C}from"./getTransparentHexColor-DN69VCBw.js";import{t as S}from"./toPx-DeOSKary.js";const I=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...e},o.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4},o.createElement("path",{d:"M44 44V4H24v16H4v24z"}),o.createElement("path",{d:"m21 28l-4 4l4 4"}),o.createElement("path",{d:"M34 23v9H17"}))),k=e=>v(e)&&"autocomplete"in e&&"tags"in e&&T(e.autocomplete)&&j(e.tags),T=e=>Array.isArray(e)&&e.every(t=>M(t)),M=e=>v(e)&&"caption"in e&&"description"in e&&typeof e.caption=="string"&&typeof e.description=="string",j=e=>Array.isArray(e)&&e.every(t=>L(t)),L=e=>v(e)&&"caption"in e&&"name"in e&&typeof e.caption=="string"&&typeof e.name=="string",A=async e=>{try{const t=await fetch(`https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(e)}`,{headers:{"x-solvedac-language":"ko"}});if(!t.ok)return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."};const r=await t.json();return k(r)?{success:!0,suggestions:O(r)}:{success:!1,errorMessage:"예기치 못한 오류가 발생했습니다. 개발자에게 이 버그를 제보해주세요."}}catch{return{success:!1,errorMessage:"자동 완성 결과를 불러오지 못했습니다."}}},O=e=>{const{autocomplete:t,tags:r}=e;return[...t.filter(({description:s})=>s!==""),...r.map(({name:s,caption:l})=>({caption:l,description:s}))].slice(0,$)},q=["*","tier:","id:","s#","solved:","#","tag","/","from:","t#","average_try:","µ#","%","lang:","@","solved_by:","o@","solved_by_org","t@","tried_by:","v@","voted_by:","c@","contributed_by:","c/","in_class:","e/","in_class_essentials:","s?","standard:","p?","sprout:","sp?","o?","solvable:","v?","votable:","c?","contributable:","w?","warning:","v#","voted:","c#","contributed:","**","vote_average:","a*","µ*"],N=/^[A-z가-힣 ]+$/,D=["|","&","(",")","!","~","-"," "],G=e=>{if(N.test(e))return 0;for(let t=e.length-1;t>=0;t-=1)if(D.includes(e[t]))return t+1;return 0},H=(e,t)=>{const r=G(e);return`${e.slice(0,r)}${t}${q.includes(t)?"":" "}`},z=e=>{const{value:t,textareaRef:r,onChange:c}=e,[s,l]=o.useState([]),[f,d]=o.useState("잠시만 기다려주세요..."),g=o.useRef(t),u=o.useRef(!1);o.useEffect(()=>{if(g.current=t,u.current)return;u.current=!0;const n=async()=>{const a=await A(g.current);if(a.success){l(a.suggestions),d(null);return}l([]),d(a.errorMessage)};setTimeout(()=>{u.current=!1,n()},200)},[t]);const y=n=>{const a=n.target.value.replace(/\n/g,"");c(a)},h=n=>{var w;const a=H(t,n.caption);c(a),r&&"current"in r&&((w=r.current)==null||w.focus())};return{suggestions:s,fallbackMessage:f,textareaRef:r,updateQuery:y,applySuggestion:h,applyFirstSuggestionIfEnterKeyPressed:n=>{n.code==="Enter"&&s.length>0&&!n.nativeEvent.isComposing&&h(s[0])}}},K=p.div`
  display: flex;
  flex-direction: column;

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  &:focus-within {
    border-color: ${({theme:e,$hasError:t})=>t?e.color.RED:e.color.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:t})=>C(t?e.color.RED:e.color.LEMON,.5)};
  }

  transition: outline 0.05s;
`,V=p.textarea`
  flex-grow: 1;

  width: 100%;

  padding: 6px;

  border: none;
  border-bottom: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background: transparent;

  color: ${({theme:e})=>e.color.WHITE};
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
`,R=p.button`
  background: none;
  border: none;

  height: 100%;
  padding: 0 4px;

  color: ${({theme:e})=>e.color.GOLD};
  font-size: 13px;
  line-height: 20px;

  transition: 0.15s;
  outline: none;
  opacity: 0.6;

  &:hover,
  &:focus {
    opacity: 1;
    text-shadow: 0 0 5px ${({theme:e})=>e.color.GOLD};
  }
`,B=p.div`
  width: 14px;
  height: 20px;
  padding: 3px 0;

  opacity: 0;
  transition: 0.15s;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }

  ${m}:not(:has(:focus-visible)) ${x}:first-child & {
    opacity: 0.6;
  }

  ${m} ${x} ${R}:focus-visible + & {
    opacity: 1;
  }
`,_=o.forwardRef((e,t)=>{const{width:r,height:c,value:s,placeholder:l,hasError:f=!1,onChange:d}=e,{suggestions:g,fallbackMessage:u,updateQuery:y,applySuggestion:h,applyFirstSuggestionIfEnterKeyPressed:b}=z({value:s,textareaRef:t,onChange:d});return i.jsxs(K,{$width:S(r),$height:S(c),$hasError:f,children:[i.jsx(V,{value:s,onChange:y,onKeyDown:b,ref:t,placeholder:l,minLength:1,maxLength:Q,spellCheck:!1}),i.jsx(m,{tabIndex:-1,children:u?i.jsx(E,{as:"span",type:"gray",fontSize:13,children:u}):g.length===0?i.jsx(E,{as:"span",type:"gray",fontSize:13,children:"자동완성 결과가 없습니다."}):g.map(n=>i.jsxs(x,{children:[i.jsx(R,{title:n.description,type:"button",onClick:()=>h(n),children:n.caption}),i.jsx(B,{children:i.jsx(I,{})})]},n.caption))})]})});try{_.displayName="QueryInput",_.__docgenInfo={description:"",displayName:"QueryInput",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(query: string) => void"}}}}}catch{}export{_ as Q};
