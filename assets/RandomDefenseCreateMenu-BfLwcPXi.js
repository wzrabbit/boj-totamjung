import{j as t}from"./jsx-runtime-DEdD30eg.js";import{N as Z}from"./NamedFrame-DSWSgEem.js";import{I as C}from"./Input-_gr1WRmd.js";import{T as ee}from"./Textarea-Bp2AThqy.js";import{T as te}from"./TextLink-Pz5ALlvd.js";import{E as re}from"./ErrorText-CAj_MRej.js";import{T as x}from"./Text-DG2UbxfS.js";import{R as se}from"./RandomDefenseCreateButton-DNA3ZySB.js";import{R as ne}from"./RandomDefenseCapsuleButton-BSB-qVpa.js";import{D as ie}from"./DifficultyAdjustMenu-DfIDpyH9.js";import{S as oe}from"./SearchOperatorSelect-DUwSCEft.js";import{A as ae}from"./AlgorithmSearchInput-Rh9deP_W.js";import{r as y}from"./index-RYns6xqu.js";import{T as H,H as le,N as B,a as O,M as q,b as U}from"./randomDefense-DfcJoTYj.js";import{a as de,A as me}from"./algorithmInfos-BizjuJN7.js";import{i as ce,e as ue,d as X}from"./typeGuards-DuDHAUw0.js";import{d as c}from"./styled-components.browser.esm-CkAH7aAm.js";const fe=e=>ce(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&ue(e.algorithmIds)&&X(e.startTier)&&X(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",pe=e=>{const{mode:i,title:r,handle:s,solvedMin:n,solvedMax:o,startTier:d,endTier:v,algorithmIds:u,customQuery:M}=e,f=i==="easy"?[W(r),he(s),xe(n,o),ge(d,v),ye(u)]:[W(r),ve(M)];for(let m=0;m<f.length;m++){const g=f[m];if(!g.isValid)return g}return{isValid:!0}},W=e=>e.length>H?{isValid:!1,errorMessage:`추첨 이름은 ${H}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},he=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:le.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},xe=(e,i)=>{const r=Number(e),s=Number(i),n=e.trim()==="",o=i.trim()==="";return!n&&!B.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!o&&!B.test(i)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!n&&r>O?{isValid:!1,errorMessage:`맞은 사람 수는 ${O.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!o&&s>O?{isValid:!1,errorMessage:`맞은 사람 수는 ${O.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!n&&!o&&r>s?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},ge=(e,i)=>{const r=Number(e),s=Number(i);return r>s?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},ye=e=>e.length>q?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${q.toLocaleString()}개 이하여야 해요.`}:e.every(r=>typeof r=="number"&&r%1===0&&r>=1&&r<=de)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},ve=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>U?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${U}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},Me=e=>{const{mode:i,handle:r,solvedMin:s,solvedMax:n,startTier:o,endTier:d,searchOperator:v,algorithmIds:u,customQuery:M}=e;if(i==="manual")return M.replace(/\n/g," ").trim();const f=Re(u),m=Te(v),g=r.trim()!=="",T=s.trim()!==""||n.trim()!=="",j=f.length>0,p=g?`~@${r} `:"",N=T?`s#${s}..${n} `:"",h=o===d?`*${o} `:`*${o}..${d} `,E=j?`(${m==="-"?"-":""}${f.join(m)})`:"";return`(*0&s?false|!*0) o?true w?false ${p}${N}${h}${E}`.trim()},Re=e=>{const i=[];return e.forEach(r=>{var n;const s=(n=me.find(o=>o.id===r))==null?void 0:n.tag;s&&i.push(`#${s}`)}),i},Te=e=>e==="OR"?"|":e==="AND"?"&":"-",P={mode:"easy",title:"",handle:"",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},je=e=>{const{selectedSlotNo:i,onSubmit:r}=e,[s,n]=y.useState(P),[o,d]=y.useState(""),[v,u]=y.useState(void 0),{mode:M,title:f,handle:m,solvedMin:g,solvedMax:T,startTier:j,endTier:p,searchOperator:N,algorithmIds:h,customQuery:E}=s,S=y.useRef(null),D=y.useRef(null),b=y.useRef(null),A=y.useRef(null),V=y.useRef(null);return{mode:M,title:f,handle:m,solvedMin:g,solvedMax:T,startTier:j,endTier:p,searchOperator:N,algorithmIds:h,customQuery:E,errorMessage:o,errorElementName:v,setMode:a=>{n(l=>({...l,mode:a})),d(""),u(void 0)},setRandomDefenseInputValue:a=>{const{name:l,value:R}=a.target;l in P&&n($=>({...$,[l]:R}))},setTierRange:(a,l)=>{n(R=>({...R,startTier:a,endTier:l}))},setSearchOperator:a=>{n(l=>({...l,searchOperator:a}))},setAlgorithmIds:a=>{n(l=>({...l,algorithmIds:a}))},submitRandomDefense:()=>{var R,$,G,k,F;if(!fe(s))return;const a=pe(s);if(a.isValid){const J=s.title.trim()===""?`추첨 ${i}`:s.title,K=Me(s);r(J,K),d(""),u(void 0);return}switch(d(a.errorMessage),u(a.focusElementName),a.focusElementName){case"title":(R=S.current)==null||R.select();break;case"handle":($=D.current)==null||$.select();break;case"solvedMin":(G=b.current)==null||G.select();break;case"solvedMax":(k=A.current)==null||k.select();break;case"customQuery":(F=V.current)==null||F.select();break}},titleRef:S,handleRef:D,solvedMinRef:b,solvedMaxRef:A,customQueryRef:V}},Ne=c.form`
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
`,Se=c.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,Y=c.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,w=c.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,I=c.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,De=c.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,be=c.div`
  display: flex;
  justify-content: center;
`,Ae=c.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,Ve=c.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,$e=e=>{const{selectedSlotNo:i,isLoaded:r,onSubmit:s}=e,{mode:n,title:o,handle:d,solvedMin:v,solvedMax:u,startTier:M,endTier:f,searchOperator:m,algorithmIds:g,customQuery:T,errorMessage:j,errorElementName:p,setMode:N,setRandomDefenseInputValue:h,setTierRange:E,setSearchOperator:S,setAlgorithmIds:D,submitRandomDefense:b,titleRef:A,handleRef:V,solvedMinRef:L,solvedMaxRef:Q,customQueryRef:_}=je({selectedSlotNo:i,onSubmit:s});return t.jsx(Z,{width:"650px",height:"357px",padding:"10px",title:"추첨 만들기",children:t.jsxs(Ne,{children:[t.jsx(Ee,{children:t.jsx(re,{errorMessage:j,fontSize:"14px"})}),t.jsx(Se,{children:t.jsx(ne,{mode:n,onClick:N})}),t.jsxs(w,{$width:"380px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"추첨 이름"}),t.jsx(C,{ref:A,type:"text",width:"100%",textAlign:"left",placeholder:"0 ~ 30자",ariaLabel:"추첨 이름",name:"title",value:o,maxLength:30,hasError:p==="title",onChange:h})]}),n==="easy"?t.jsxs(t.Fragment,{children:[t.jsxs(Y,{$columnGap:"30px",children:[t.jsxs(w,{$width:"190px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"검색에서 제외할 닉네임"}),t.jsx(C,{ref:V,type:"text",width:"100%",textAlign:"left",placeholder:"3 ~ 20자",ariaLabel:"검색에서 제외할 닉네임",name:"handle",value:d,minLength:3,maxLength:20,hasError:p==="handle",onChange:h})]}),t.jsxs(I,{$width:"166px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"맞은 사람 수"}),t.jsxs(De,{children:[t.jsx(C,{ref:L,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 하한",name:"solvedMin",value:v,hasError:p==="solvedMin",onChange:h}),t.jsx(x,{type:"primary",fontSize:"16px",children:"~"}),t.jsx(C,{ref:Q,type:"number",width:"70px",textAlign:"center",placeholder:"",ariaLabel:"맞은 사람 수의 상한",name:"solvedMax",value:u,hasError:p==="solvedMax",onChange:h})]})]})]}),t.jsxs(I,{$width:"100%",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"난이도 범위"}),t.jsx(be,{children:t.jsx(ie,{startTier:M,endTier:f,onChange:E})})]}),t.jsxs(I,{$width:"446px",children:[t.jsxs(Y,{$columnGap:"110px",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"검색에 포함할 알고리즘"}),t.jsx(oe,{searchOperator:m,onClick:S})]}),t.jsx(ae,{selectedAlgorithmIds:g,onChange:z=>{D(z)}})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(w,{$width:"100%",children:[t.jsx(x,{type:"primary",fontSize:"16px",children:"쿼리"}),t.jsx(ee,{ref:_,width:"100%",height:"160px",name:"customQuery",value:T,placeholder:"1 ~ 300자",minLength:1,maxLength:300,hasError:p==="customQuery",ariaLabel:"쿼리",onChange:h})]}),t.jsxs(Ae,{children:[t.jsxs(x,{type:"normal",fontSize:"14px",children:["solved.ac 검색 쿼리 작성법을 모르신다면,"," ",t.jsx(te,{href:"https://solved.ac/search",fontSize:"14px",children:"solved.ac 문제 고급 검색"})," ","페이지를 확인해 보세요!"]}),t.jsx(x,{type:"normal",fontSize:"14px",children:"추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수 없음에 유의해 주세요."})]})]}),t.jsx(Ve,{children:t.jsx(se,{isLoaded:r,selectedSlotNo:i,onClick:b})})]})})};$e.__docgenInfo={description:"",methods:[],displayName:"RandomDefenseCreateMenu",props:{selectedSlotNo:{required:!0,tsType:{name:"SlotNo"},description:""},isLoaded:{required:!0,tsType:{name:"boolean"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(title: string, query: string) => void",signature:{arguments:[{type:{name:"string"},name:"title"},{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""}}};export{$e as R};
