import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{N as se}from"./NamedFrame-D2PEwBHE.js";import{I as O}from"./Input-n2sqohHp.js";import{T as ne}from"./TextLink-B35u5JYr.js";import{E as oe}from"./ErrorText-DEoOg6NU.js";import{T as c}from"./Text-DzSB0Vx2.js";import{R as ae}from"./RandomDefenseCreateButton-DGeX3Iqd.js";import{R as ie}from"./RandomDefenseCapsuleButton-DhA1nxYd.js";import{D as le}from"./DifficultyAdjustMenu-0XJUallX.js";import{S as ue}from"./SearchOperatorSelect-Dbw-UY9n.js";import{A as de}from"./AlgorithmSearchInput-D7Le8_1n.js";import{r as v}from"./index--qcDGAq6.js";import{T as q,H as ce,N as W,j as Q,b as P,M as L}from"./randomDefense-DE7lwrZG.js";import{a as me,A as fe}from"./algorithmInfos-w49mooiO.js";import{i as pe,e as he,c as Y}from"./typeGuards-Bsa9ERJp.js";import{d as m}from"./styled-components.browser.esm-CIS6JKSM.js";import{S as ge}from"./Select-CMYR-bFx.js";import{Q as xe}from"./QueryInput-CQmnMN0d.js";const ye=e=>typeof e=="string"&&["ko","en","ko/en","all"].includes(e),ve=e=>pe(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"language"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.language=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&he(e.algorithmIds)&&Y(e.startTier)&&Y(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",Me=e=>{const{mode:a,title:s,handle:n,solvedMin:r,solvedMax:l,startTier:d,endTier:g,algorithmIds:f,customQuery:M}=e,x=a==="easy"?[J(s),Re(n),je(r,l),Se(d,g),Ne(f)]:[J(s),Ee(M)];for(let u=0;u<x.length;u++){const p=x[u];if(!p.isValid)return p}return{isValid:!0}},J=e=>e.length>q?{isValid:!1,errorMessage:`추첨 이름은 ${q}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},Re=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:ce.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},je=(e,a)=>{const s=Number(e),n=Number(a),r=e.trim()==="",l=a.trim()==="";return!r&&!W.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!l&&!W.test(a)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!r&&s>Q?{isValid:!1,errorMessage:`맞은 사람 수는 ${Q.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!l&&n>Q?{isValid:!1,errorMessage:`맞은 사람 수는 ${Q.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!r&&!l&&s>n?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Se=(e,a)=>{const s=Number(e),n=Number(a);return s>n?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},Ne=e=>e.length>P?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${P.toLocaleString()}개 이하여야 해요.`}:e.every(s=>typeof s=="number"&&s%1===0&&s>=1&&s<=me)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Ee=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>L?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${L}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Te=e=>{const{mode:a,handle:s,solvedMin:n,solvedMax:r,language:l,startTier:d,endTier:g,searchOperator:f,algorithmIds:M,customQuery:x}=e;if(a==="manual")return x.replace(/\n/g," ").trim();const u=be(M),p=De(l),R=Ve(f),E=s.trim()!=="",T=n.trim()!==""||r.trim()!=="",h=u.length>0,b=E?`~@${s} `:"",y=T?`s#${n}..${r} `:"",D=p===""?"":`${p} `,j=d===g?`*${d} `:`*${d}..${g} `,S=h?u.length===1?u[0]:`(${R==="~"?"~":""}${u.join(R)})`:"";return`(*0&!s?|!*0) o? -w? ${b}${y}${D}${j}${S}`.trim()},be=e=>{const a=[];return e.forEach(s=>{var r;const n=(r=fe.find(l=>l.id===s))==null?void 0:r.tag;n&&a.push(`#${n}`)}),a},De=e=>{switch(e){case"ko":return"lang:ko";case"en":return"(lang:en~lang:ko~lang:ja~lang:sv)";case"ko/en":return"(lang:ko|(lang:en~lang:ja~lang:sv))";default:return""}},Ve=e=>{switch(e){case"OR":return"|";case"AND":return"&";default:return"~"}},K={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Ce=e=>{const{selectedSlotNo:a,onSubmit:s}=e,[n,r]=v.useState(K),[l,d]=v.useState(""),[g,f]=v.useState(void 0),{mode:M,title:x,handle:u,solvedMin:p,solvedMax:R,language:E,startTier:T,endTier:h,searchOperator:b,algorithmIds:y,customQuery:D}=n,j=v.useRef(null),S=v.useRef(null),V=v.useRef(null),C=v.useRef(null),$=v.useRef(null);return{mode:M,title:x,handle:u,solvedMin:p,solvedMax:R,language:E,startTier:T,endTier:h,searchOperator:b,algorithmIds:y,customQuery:D,errorMessage:l,errorElementName:g,setMode:o=>{r(i=>({...i,mode:o})),d(""),f(void 0)},setRandomDefenseInputValue:o=>{const{name:i,value:N}=o.target;i in K&&r(A=>({...A,[i]:N}))},setLanguage:o=>{ye(o)&&r(i=>({...i,language:o}))},setTierRange:(o,i)=>{r(N=>({...N,startTier:o,endTier:i}))},setSearchOperator:o=>{r(i=>({...i,searchOperator:o}))},setAlgorithmIds:o=>{r(i=>({...i,algorithmIds:o}))},setCustomQuery:o=>{r(i=>({...i,customQuery:o}))},submitRandomDefense:()=>{var N,A,B,U,X;if(!ve(n))return;const o=Me(n);if(o.isValid){const te=n.title.trim()===""?`추첨 ${a}`:n.title,re=Te(n);s(te,re),d(""),f(void 0);return}switch(d(o.errorMessage),f(o.focusElementName),o.focusElementName){case"title":(N=j.current)==null||N.select();break;case"handle":(A=S.current)==null||A.select();break;case"solvedMin":(B=V.current)==null||B.select();break;case"solvedMax":(U=C.current)==null||U.select();break;case"customQuery":(X=$.current)==null||X.select();break}},titleRef:j,handleRef:S,solvedMinRef:V,solvedMaxRef:C,customQueryRef:$}},$e=m.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,Ae=m.div`
  position: absolute;
  top: -32px;
  right: 0;
`,Oe=m.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,Z=m.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,I=m.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,w=m.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Qe=m.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,we=m.div`
  display: flex;
  justify-content: center;
`,Ie=m.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Le=m.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,_e=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],ee=e=>{const{selectedSlotNo:a,isLoaded:s,onSubmit:n}=e,{mode:r,title:l,handle:d,solvedMin:g,solvedMax:f,language:M,startTier:x,endTier:u,searchOperator:p,algorithmIds:R,customQuery:E,errorMessage:T,errorElementName:h,setMode:b,setRandomDefenseInputValue:y,setLanguage:D,setTierRange:j,setSearchOperator:S,setAlgorithmIds:V,setCustomQuery:C,submitRandomDefense:$,titleRef:_,handleRef:k,solvedMinRef:z,solvedMaxRef:F,customQueryRef:G}=Ce({selectedSlotNo:a,onSubmit:n});return t.jsx(se,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:t.jsxs($e,{children:[t.jsx(Ae,{children:t.jsx(oe,{errorMessage:T,fontSize:14})}),t.jsx(Oe,{children:t.jsx(ie,{mode:r,onClick:b})}),t.jsxs(I,{$width:"380px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"추첨 이름"}),t.jsx(O,{ref:_,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"0 ~ 30자","aria-label":"추첨 이름",name:"title",value:l,maxLength:30,hasError:h==="title",onChange:y})]}),r==="easy"?t.jsxs(t.Fragment,{children:[t.jsxs(Z,{$columnGap:"50px",children:[t.jsxs(I,{$width:"190px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"검색에서 제외할 닉네임"}),t.jsx(O,{ref:k,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"3 ~ 20자","aria-label":"검색에서 제외할 닉네임",name:"handle",value:d,minLength:3,maxLength:20,hasError:h==="handle",onChange:y})]}),t.jsxs(w,{$width:"166px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"맞은 사람 수"}),t.jsxs(Qe,{children:[t.jsx(O,{ref:z,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 하한",name:"solvedMin",value:g,hasError:h==="solvedMin",onChange:y}),t.jsx(c,{type:"primary",fontSize:16,children:"~"}),t.jsx(O,{ref:F,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 상한",name:"solvedMax",value:f,hasError:h==="solvedMax",onChange:y})]})]}),t.jsxs(w,{$width:"190px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"문제 언어"}),t.jsx(ge,{options:_e,selectedValue:M,width:"130px",ariaLabel:"문제 언어 고르기",onChange:D})]})]}),t.jsxs(w,{$width:"100%",children:[t.jsx(c,{type:"primary",fontSize:16,children:"난이도 범위"}),t.jsx(we,{children:t.jsx(le,{startTier:x,endTier:u,onChange:j})})]}),t.jsxs(w,{$width:"446px",children:[t.jsxs(Z,{children:[t.jsx(c,{type:"primary",fontSize:16,children:"검색에 포함할 알고리즘"}),t.jsx(ue,{searchOperator:p,onClick:S})]}),t.jsx(de,{selectedAlgorithmIds:R,onChange:H=>{V(H)}})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(I,{$width:"100%",children:[t.jsx(c,{type:"primary",fontSize:16,children:"쿼리"}),t.jsx(xe,{ref:G,width:"100%",height:"160px",value:E,placeholder:`1 ~ ${L}자`,hasError:h==="customQuery",onChange:C})]}),t.jsxs(Ie,{children:[t.jsxs(c,{type:"normal",fontSize:14,children:[t.jsx(ne,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),t.jsx(c,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]})]}),t.jsx(Le,{children:t.jsx(ae,{isLoaded:s,selectedSlotNo:a,onClick:$})})]})})};try{ee.displayName="RandomDefenseCreateMenu",ee.__docgenInfo={description:"",displayName:"RandomDefenseCreateMenu",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(title: string, query: string) => void"}}}}}catch{}export{ee as R};
