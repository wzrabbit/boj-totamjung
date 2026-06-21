import{j as i}from"./jsx-runtime-SwSI87LU.js";import{T as _}from"./Text-DkpU561P.js";import{d as b}from"./typeGuards-DnhUVcj4.js";import{e as Q,M as C}from"./randomDefense-JL_bjho1.js";import{r as o}from"./index-C5e9SFkp.js";import{u as R}from"./useTranslation-CHmiwnmk.js";import{y as l}from"./styled-components.browser.esm-DmPUYCQi.js";import{g as I}from"./getTransparentHexColor-DN69VCBw.js";import{t as E}from"./toPx-DeOSKary.js";const M=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 48 48",...e},o.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4},o.createElement("path",{d:"M44 44V4H24v16H4v24z"}),o.createElement("path",{d:"m21 28l-4 4l4 4"}),o.createElement("path",{d:"M34 23v9H17"}))),q=e=>b(e)&&"autocomplete"in e&&"tags"in e&&T(e.autocomplete)&&O(e.tags),T=e=>Array.isArray(e)&&e.every(t=>j(t)),j=e=>b(e)&&"caption"in e&&"description"in e&&typeof e.caption=="string"&&typeof e.description=="string",O=e=>Array.isArray(e)&&e.every(t=>A(t)),A=e=>b(e)&&"caption"in e&&"name"in e&&typeof e.caption=="string"&&typeof e.name=="string",L=async e=>{try{const t=await fetch(`https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(e)}`,{headers:{"x-solvedac-language":"ko"}});if(!t.ok)return{success:!1,errorMessage:{key:"errors.querySuggestion.fetchFailed"}};const r=await t.json();return q(r)?{success:!0,suggestions:N(r)}:{success:!1,errorMessage:{key:"errors.querySuggestion.unexpected"}}}catch{return{success:!1,errorMessage:{key:"errors.querySuggestion.fetchFailed"}}}},N=e=>{const{autocomplete:t,tags:r}=e;return[...t.filter(({description:n})=>n!==""),...r.map(({name:n,caption:c})=>({caption:c,description:n}))].slice(0,Q)},F=["*","tier:","id:","s#","solved:","#","tag","/","from:","t#","average_try:","µ#","%","lang:","@","solved_by:","o@","solved_by_org","t@","tried_by:","v@","voted_by:","c@","contributed_by:","c/","in_class:","e/","in_class_essentials:","s?","standard:","p?","sprout:","sp?","o?","solvable:","v?","votable:","c?","contributable:","w?","warning:","v#","voted:","c#","contributed:","**","vote_average:","a*","µ*"],z=/^[A-z가-힣 ]+$/,D=["|","&","(",")","!","~","-"," "],V=e=>{if(z.test(e))return 0;for(let t=e.length-1;t>=0;t-=1)if(D.includes(e[t]))return t+1;return 0},B=(e,t)=>{const r=V(e);return`${e.slice(0,r)}${t}${F.includes(t)?"":" "}`},G=e=>{const{value:t,textareaRef:r,onChange:u}=e,{t:n}=R(),[c,y]=o.useState([]),[f,p]=o.useState(n("hooks.queryInput.loadingFallback")),g=o.useRef(t),d=o.useRef(!1);o.useEffect(()=>{if(g.current=t,d.current)return;d.current=!0;const s=async()=>{const a=await L(g.current);if(a.success){y(a.suggestions),p(null);return}y([]),p(n(a.errorMessage.key,a.errorMessage.substitutions))};setTimeout(()=>{d.current=!1,s()},200)},[t]);const m=s=>{const a=s.target.value.replace(/\n/g,"");u(a)},h=s=>{var w;const a=B(t,s.caption);u(a),r&&"current"in r&&((w=r.current)==null||w.focus())};return{suggestions:c,fallbackMessage:f,textareaRef:r,updateQuery:m,applySuggestion:h,applyFirstSuggestionIfEnterKeyPressed:s=>{s.code==="Enter"&&c.length>0&&!s.nativeEvent.isComposing&&h(c[0])}}},H=l.div`
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
      ${({theme:e,$hasError:t})=>I(t?e.colors.RED:e.colors.LEMON,.5)};
  }

  transition: outline 0.05s;
`,K=l.textarea`
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
`,x=l.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  column-gap: 20px;
  flex-wrap: wrap;

  width: 100%;
  height: 48px;

  padding: 4px 6px;
`,v=l.div`
  display: inline-flex;

  width: auto;
  height: 20px;
`,k=l.button`
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
`,U=l.div`
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

  ${x}:not(:has(:focus-visible)) ${v}:first-child & {
    opacity: 0.6;
  }

  ${x} ${v} ${k}:focus-visible + & {
    opacity: 1;
  }
`,$=o.forwardRef((e,t)=>{const{width:r,height:u,value:n,placeholder:c,hasError:y=!1,onChange:f}=e,{suggestions:p,fallbackMessage:g,updateQuery:d,applySuggestion:m,applyFirstSuggestionIfEnterKeyPressed:h}=G({value:n,textareaRef:t,onChange:f}),{t:S}=R();return i.jsxs(H,{$width:E(r),$height:E(u),$hasError:y,children:[i.jsx(K,{value:n,onChange:d,onKeyDown:h,ref:t,placeholder:c,minLength:1,maxLength:C,spellCheck:!1}),i.jsx(x,{tabIndex:-1,children:g?i.jsx(_,{as:"span",type:"gray",fontSize:13,children:g}):p.length===0?i.jsx(_,{as:"span",type:"gray",fontSize:13,children:S("options.queryInput.noAutocomplete")}):p.map(s=>i.jsxs(v,{children:[i.jsx(k,{title:s.description,type:"button",onClick:()=>m(s),children:s.caption}),i.jsx(U,{children:i.jsx(M,{})})]},s.caption))})]})});try{$.displayName="QueryInput",$.__docgenInfo={description:"",displayName:"QueryInput",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(query: string) => void"}}}}}catch{}export{$ as Q};
