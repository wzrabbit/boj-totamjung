import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{N as re}from"./NamedFrame-D2PEwBHE.js";import{I as L}from"./Input-Dv8CBI6y.js";import{T as se}from"./Textarea-jv6VaTTH.js";import{T as ne}from"./TextLink-B35u5JYr.js";import{E as ae}from"./ErrorText-DEoOg6NU.js";import{T as c}from"./Text-D2wNJgtT.js";import{R as oe}from"./RandomDefenseCreateButton-DGeX3Iqd.js";import{R as ie}from"./RandomDefenseCapsuleButton-DhA1nxYd.js";import{D as le}from"./DifficultyAdjustMenu-l4nDvGZj.js";import{S as ue}from"./SearchOperatorSelect-Dbw-UY9n.js";import{A as de}from"./AlgorithmSearchInput-DndG9i4L.js";import{r as v}from"./index--qcDGAq6.js";import{T as X,H as ce,N as q,j as O,b as W,M as I}from"./randomDefense-BrQ0TErT.js";import{a as me,A as fe}from"./algorithmInfos-w49mooiO.js";import{i as pe,e as he,c as P}from"./typeGuards-Bsa9ERJp.js";import{d as m}from"./styled-components.browser.esm-CIS6JKSM.js";import{S as ge}from"./Select-CMYR-bFx.js";const xe=e=>typeof e=="string"&&["ko","en","ko/en","all"].includes(e),ye=e=>pe(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"language"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.language=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&he(e.algorithmIds)&&P(e.startTier)&&P(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",ve=e=>{const{mode:a,title:r,handle:s,solvedMin:n,solvedMax:i,startTier:d,endTier:x,algorithmIds:f,customQuery:M}=e,y=a==="easy"?[Y(r),Me(s),Re(n,i),je(d,x),Se(f)]:[Y(r),Ne(M)];for(let u=0;u<y.length;u++){const p=y[u];if(!p.isValid)return p}return{isValid:!0}},Y=e=>e.length>X?{isValid:!1,errorMessage:`추첨 이름은 ${X}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},Me=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:ce.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},Re=(e,a)=>{const r=Number(e),s=Number(a),n=e.trim()==="",i=a.trim()==="";return!n&&!q.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!i&&!q.test(a)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!n&&r>O?{isValid:!1,errorMessage:`맞은 사람 수는 ${O.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!i&&s>O?{isValid:!1,errorMessage:`맞은 사람 수는 ${O.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!n&&!i&&r>s?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},je=(e,a)=>{const r=Number(e),s=Number(a);return r>s?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},Se=e=>e.length>W?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${W.toLocaleString()}개 이하여야 해요.`}:e.every(r=>typeof r=="number"&&r%1===0&&r>=1&&r<=me)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Ne=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>I?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${I}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Te=e=>{const{mode:a,handle:r,solvedMin:s,solvedMax:n,language:i,startTier:d,endTier:x,searchOperator:f,algorithmIds:M,customQuery:y}=e;if(a==="manual")return y.replace(/\n/g," ").trim();const u=Ee(M),p=be(i),R=De(f),T=r.trim()!=="",E=s.trim()!==""||n.trim()!=="",h=u.length>0,b=T?`~@${r} `:"",g=E?`s#${s}..${n} `:"",D=p===""?"":`${p} `,j=d===x?`*${d} `:`*${d}..${x} `,S=h?u.length===1?u[0]:`(${R==="~"?"~":""}${u.join(R)})`:"";return`(*0&!s?|!*0) o? -w? ${b}${g}${D}${j}${S}`.trim()},Ee=e=>{const a=[];return e.forEach(r=>{var n;const s=(n=fe.find(i=>i.id===r))==null?void 0:n.tag;s&&a.push(`#${s}`)}),a},be=e=>{switch(e){case"ko":return"lang:ko";case"en":return"(lang:en~lang:ko~lang:ja~lang:sv)";case"ko/en":return"(lang:ko|(lang:en~lang:ja~lang:sv))";default:return""}},De=e=>{switch(e){case"OR":return"|";case"AND":return"&";default:return"~"}},J={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Ve=e=>{const{selectedSlotNo:a,onSubmit:r}=e,[s,n]=v.useState(J),[i,d]=v.useState(""),[x,f]=v.useState(void 0),{mode:M,title:y,handle:u,solvedMin:p,solvedMax:R,language:T,startTier:E,endTier:h,searchOperator:b,algorithmIds:g,customQuery:D}=s,j=v.useRef(null),S=v.useRef(null),V=v.useRef(null),$=v.useRef(null),A=v.useRef(null);return{mode:M,title:y,handle:u,solvedMin:p,solvedMax:R,language:T,startTier:E,endTier:h,searchOperator:b,algorithmIds:g,customQuery:D,errorMessage:i,errorElementName:x,setMode:o=>{n(l=>({...l,mode:o})),d(""),f(void 0)},setRandomDefenseInputValue:o=>{const{name:l,value:N}=o.target;l in J&&n(C=>({...C,[l]:N}))},setLanguage:o=>{xe(o)&&n(l=>({...l,language:o}))},setTierRange:(o,l)=>{n(N=>({...N,startTier:o,endTier:l}))},setSearchOperator:o=>{n(l=>({...l,searchOperator:o}))},setAlgorithmIds:o=>{n(l=>({...l,algorithmIds:o}))},submitRandomDefense:()=>{var N,C,H,B,U;if(!ye(s))return;const o=ve(s);if(o.isValid){const ee=s.title.trim()===""?`추첨 ${a}`:s.title,te=Te(s);r(ee,te),d(""),f(void 0);return}switch(d(o.errorMessage),f(o.focusElementName),o.focusElementName){case"title":(N=j.current)==null||N.select();break;case"handle":(C=S.current)==null||C.select();break;case"solvedMin":(H=V.current)==null||H.select();break;case"solvedMax":(B=$.current)==null||B.select();break;case"customQuery":(U=A.current)==null||U.select();break}},titleRef:j,handleRef:S,solvedMinRef:V,solvedMaxRef:$,customQueryRef:A}},$e=m.form`
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
`,Ce=m.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,K=m.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,Q=m.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,w=m.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Le=m.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Oe=m.div`
  display: flex;
  justify-content: center;
`,we=m.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Ie=m.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,Qe=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],Z=e=>{const{selectedSlotNo:a,isLoaded:r,onSubmit:s}=e,{mode:n,title:i,handle:d,solvedMin:x,solvedMax:f,language:M,startTier:y,endTier:u,searchOperator:p,algorithmIds:R,customQuery:T,errorMessage:E,errorElementName:h,setMode:b,setRandomDefenseInputValue:g,setLanguage:D,setTierRange:j,setSearchOperator:S,setAlgorithmIds:V,submitRandomDefense:$,titleRef:A,handleRef:_,solvedMinRef:k,solvedMaxRef:z,customQueryRef:F}=Ve({selectedSlotNo:a,onSubmit:s});return t.jsx(re,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:t.jsxs($e,{children:[t.jsx(Ae,{children:t.jsx(ae,{errorMessage:E,fontSize:14})}),t.jsx(Ce,{children:t.jsx(ie,{mode:n,onClick:b})}),t.jsxs(Q,{$width:"380px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"추첨 이름"}),t.jsx(L,{ref:A,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"0 ~ 30자","aria-label":"추첨 이름",name:"title",value:i,maxLength:30,hasError:h==="title",onChange:g})]}),n==="easy"?t.jsxs(t.Fragment,{children:[t.jsxs(K,{$columnGap:"50px",children:[t.jsxs(Q,{$width:"190px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"검색에서 제외할 닉네임"}),t.jsx(L,{ref:_,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"3 ~ 20자","aria-label":"검색에서 제외할 닉네임",name:"handle",value:d,minLength:3,maxLength:20,hasError:h==="handle",onChange:g})]}),t.jsxs(w,{$width:"166px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"맞은 사람 수"}),t.jsxs(Le,{children:[t.jsx(L,{ref:k,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 하한",name:"solvedMin",value:x,hasError:h==="solvedMin",onChange:g}),t.jsx(c,{type:"primary",fontSize:16,children:"~"}),t.jsx(L,{ref:z,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 상한",name:"solvedMax",value:f,hasError:h==="solvedMax",onChange:g})]})]}),t.jsxs(w,{$width:"190px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"문제 언어"}),t.jsx(ge,{options:Qe,selectedValue:M,width:"130px",ariaLabel:"문제 언어 고르기",onChange:D})]})]}),t.jsxs(w,{$width:"100%",children:[t.jsx(c,{type:"primary",fontSize:16,children:"난이도 범위"}),t.jsx(Oe,{children:t.jsx(le,{startTier:y,endTier:u,onChange:j})})]}),t.jsxs(w,{$width:"446px",children:[t.jsxs(K,{children:[t.jsx(c,{type:"primary",fontSize:16,children:"검색에 포함할 알고리즘"}),t.jsx(ue,{searchOperator:p,onClick:S})]}),t.jsx(de,{selectedAlgorithmIds:R,onChange:G=>{V(G)}})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(Q,{$width:"100%",children:[t.jsx(c,{type:"primary",fontSize:16,children:"쿼리"}),t.jsx(se,{ref:F,width:"100%",height:"160px",name:"customQuery",value:T,placeholder:`1 ~ ${I}자`,minLength:1,maxLength:I,hasError:h==="customQuery",ariaLabel:"쿼리",onChange:g})]}),t.jsxs(we,{children:[t.jsxs(c,{type:"normal",fontSize:14,children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",t.jsx(ne,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),t.jsx(c,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),t.jsx(Ie,{children:t.jsx(oe,{isLoaded:r,selectedSlotNo:a,onClick:$})})]})})};try{Z.displayName="RandomDefenseCreateMenu",Z.__docgenInfo={description:"",displayName:"RandomDefenseCreateMenu",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(title: string, query: string) => void"}}}}}catch{}export{Z as R};
