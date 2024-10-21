import{j as t}from"./jsx-runtime-DEdD30eg.js";import{N as ee}from"./NamedFrame-D-XXrU6-.js";import{I as C}from"./Input-C1KrmhYC.js";import{T as te}from"./Textarea-dOKYE4DH.js";import{T as re}from"./TextLink-_llWSx1B.js";import{E as se}from"./ErrorText-Dx7U6JC4.js";import{T as x}from"./Text-B2xQYZk4.js";import{R as ne}from"./RandomDefenseCreateButton-CiCktUuA.js";import{R as ie}from"./RandomDefenseCapsuleButton-CbOA6emW.js";import{D as oe}from"./DifficultyAdjustMenu-Dao_I8-Y.js";import{S as ae}from"./SearchOperatorSelect-CLzYRS7H.js";import{A as le}from"./AlgorithmSearchInput-BBVbLJwf.js";import{r as y}from"./index-RYns6xqu.js";import{T as H,H as de,N as B,b as O,M as U,a as X}from"./randomDefense-Cde4U-yJ.js";import{a as ue,A as ce}from"./algorithmInfos-Cl_JsY5X.js";import{i as me,e as fe,d as q}from"./typeGuards-DuDHAUw0.js";import{d as c}from"./styled-components.browser.esm-CkAH7aAm.js";const pe=e=>me(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&fe(e.algorithmIds)&&q(e.startTier)&&q(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",he=e=>{const{mode:i,title:r,handle:s,solvedMin:n,solvedMax:o,startTier:d,endTier:v,algorithmIds:m,customQuery:M}=e,f=i==="easy"?[W(r),xe(s),ge(n,o),ye(d,v),ve(m)]:[W(r),Me(M)];for(let u=0;u<f.length;u++){const g=f[u];if(!g.isValid)return g}return{isValid:!0}},W=e=>e.length>H?{isValid:!1,errorMessage:`추첨 이름은 ${H}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},xe=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:de.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},ge=(e,i)=>{const r=Number(e),s=Number(i),n=e.trim()==="",o=i.trim()==="";return!n&&!B.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!o&&!B.test(i)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!n&&r>O?{isValid:!1,errorMessage:`맞은 사람 수는 ${O.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!o&&s>O?{isValid:!1,errorMessage:`맞은 사람 수는 ${O.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!n&&!o&&r>s?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},ye=(e,i)=>{const r=Number(e),s=Number(i);return r>s?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},ve=e=>e.length>U?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${U.toLocaleString()}개 이하여야 해요.`}:e.every(r=>typeof r=="number"&&r%1===0&&r>=1&&r<=ue)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},Me=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>X?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${X}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Re=e=>{const{mode:i,handle:r,solvedMin:s,solvedMax:n,startTier:o,endTier:d,searchOperator:v,algorithmIds:m,customQuery:M}=e;if(i==="manual")return M.replace(/\n/g," ").trim();const f=je(m),u=Ne(v),g=r.trim()!=="",j=s.trim()!==""||n.trim()!=="",N=f.length>0,p=g?`~@${r} `:"",S=j?`s#${s}..${n} `:"",h=o===d?`*${o} `:`*${o}..${d} `,T=N?`(${u==="-"?"-":""}${f.join(u)})`:"";return`(*0&!s?|!*0) o? -w? ${p}${S}${h}${T}`.trim()},je=e=>{const i=[];return e.forEach(r=>{var n;const s=(n=ce.find(o=>o.id===r))==null?void 0:n.tag;s&&i.push(`#${s}`)}),i},Ne=e=>e==="OR"?"|":e==="AND"?"&":"-",P={mode:"easy",title:"",handle:"",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Se=e=>{const{selectedSlotNo:i,onSubmit:r}=e,[s,n]=y.useState(P),[o,d]=y.useState(""),[v,m]=y.useState(void 0),{mode:M,title:f,handle:u,solvedMin:g,solvedMax:j,startTier:N,endTier:p,searchOperator:S,algorithmIds:h,customQuery:T}=s,E=y.useRef(null),D=y.useRef(null),b=y.useRef(null),V=y.useRef(null),A=y.useRef(null);return{mode:M,title:f,handle:u,solvedMin:g,solvedMax:j,startTier:N,endTier:p,searchOperator:S,algorithmIds:h,customQuery:T,errorMessage:o,errorElementName:v,setMode:a=>{n(l=>({...l,mode:a})),d(""),m(void 0)},setRandomDefenseInputValue:a=>{const{name:l,value:R}=a.target;l in P&&n($=>({...$,[l]:R}))},setTierRange:(a,l)=>{n(R=>({...R,startTier:a,endTier:l}))},setSearchOperator:a=>{n(l=>({...l,searchOperator:a}))},setAlgorithmIds:a=>{n(l=>({...l,algorithmIds:a}))},submitRandomDefense:()=>{var R,$,G,k,F;if(!pe(s))return;const a=he(s);if(a.isValid){const K=s.title.trim()===""?`추첨 ${i}`:s.title,Z=Re(s);r(K,Z),d(""),m(void 0);return}switch(d(a.errorMessage),m(a.focusElementName),a.focusElementName){case"title":(R=E.current)==null||R.select();break;case"handle":($=D.current)==null||$.select();break;case"solvedMin":(G=b.current)==null||G.select();break;case"solvedMax":(k=V.current)==null||k.select();break;case"customQuery":(F=A.current)==null||F.select();break}},titleRef:E,handleRef:D,solvedMinRef:b,solvedMaxRef:V,customQueryRef:A}},Te=c.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 6px;

  z-index: 1;
`,Ee=c.div`
  position: absolute;
  top: -32px;
  right: 0;
`,De=c.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,Y=c.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,L=c.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,I=c.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,be=c.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Ve=c.div`
  display: flex;
  justify-content: center;
`,Ae=c.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,$e=c.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,J=e=>{const{selectedSlotNo:i,isLoaded:r,onSubmit:s}=e,{mode:n,title:o,handle:d,solvedMin:v,solvedMax:m,startTier:M,endTier:f,searchOperator:u,algorithmIds:g,customQuery:j,errorMessage:N,errorElementName:p,setMode:S,setRandomDefenseInputValue:h,setTierRange:T,setSearchOperator:E,setAlgorithmIds:D,submitRandomDefense:b,titleRef:V,handleRef:A,solvedMinRef:w,solvedMaxRef:Q,customQueryRef:_}=Se({selectedSlotNo:i,onSubmit:s});return t.jsx(ee,{width:"650px",height:"357px",padding:"10px",title:"추첨 만들기",children:t.jsxs(Te,{children:[t.jsx(Ee,{children:t.jsx(se,{errorMessage:N,fontSize:"14px"})}),t.jsx(De,{children:t.jsx(ie,{mode:n,onClick:S})}),t.jsxs(L,{$width:"380px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"추첨 이름"}),t.jsx(C,{ref:V,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:o,maxLength:30,hasError:p==="title",onChange:h})]}),n==="easy"?t.jsxs(t.Fragment,{children:[t.jsxs(Y,{$columnGap:"30px",children:[t.jsxs(L,{$width:"190px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),t.jsx(C,{ref:A,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:d,minLength:3,maxLength:20,hasError:p==="handle",onChange:h})]}),t.jsxs(I,{$width:"166px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),t.jsxs(be,{children:[t.jsx(C,{ref:w,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:v,hasError:p==="solvedMin",onChange:h}),t.jsx(x,{type:"primary",fontSize:"16px",children:"~"}),t.jsx(C,{ref:Q,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:m,hasError:p==="solvedMax",onChange:h})]})]})]}),t.jsxs(I,{$width:"100%",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"난이도 범위"}),t.jsx(Ve,{children:t.jsx(oe,{startTier:M,endTier:f,onChange:T})})]}),t.jsxs(I,{$width:"446px",children:[t.jsxs(Y,{$columnGap:"110px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),t.jsx(ae,{searchOperator:u,onClick:E})]}),t.jsx(le,{selectedAlgorithmIds:g,onChange:z=>{D(z)}})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(L,{$width:"100%",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"쿼리"}),t.jsx(te,{ref:_,width:"100%",height:"160px",name:"customQuery",value:j,placeholder:"1 ~ 300자",minLength:1,maxLength:300,hasError:p==="customQuery",ariaLabel:"쿼리",onChange:h})]}),t.jsxs(Ae,{children:[t.jsxs(x,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",t.jsx(re,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),t.jsx(x,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),t.jsx($e,{children:t.jsx(ne,{isLoaded:r,selectedSlotNo:i,onClick:b})})]})})};try{J.displayName="RandomDefenseCreateMenu",J.__docgenInfo={description:"",displayName:"RandomDefenseCreateMenu",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(title: string, query: string) => void"}}}}}catch{}export{J as R};
