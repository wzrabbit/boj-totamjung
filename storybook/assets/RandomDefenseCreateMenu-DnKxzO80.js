import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{N as ne}from"./NamedFrame-D2PEwBHE.js";import{I as Q}from"./Input-BdGorGGB.js";import{T as oe}from"./TextLink-B35u5JYr.js";import{E as ie}from"./ErrorText-DEoOg6NU.js";import{T as c}from"./Text-Bm9VDKPH.js";import{R as ae}from"./RandomDefenseCreateButton-DGeX3Iqd.js";import{R as le}from"./RandomDefenseCapsuleButton-DhA1nxYd.js";import{D as ue}from"./DifficultyAdjustMenu-0XJUallX.js";import{S as ce}from"./SearchOperatorSelect-BKZoQCEw.js";import{A as de}from"./AlgorithmSearchInput-CjH_xCjQ.js";import{r as y}from"./index--qcDGAq6.js";import{T as W,H as me,N as P,j as T,b as Y,M as k}from"./randomDefense-DE7lwrZG.js";import{a as fe,A as pe}from"./algorithmInfos-w49mooiO.js";import{i as he,e as ge,c as J}from"./typeGuards-Bsa9ERJp.js";import{d}from"./styled-components.browser.esm-CIS6JKSM.js";import{S as xe}from"./Select-DTAHnhYq.js";import{Q as ye}from"./QueryInput-BZvzxUtC.js";const ve=e=>typeof e=="string"&&["ko","en","ko/en","all"].includes(e),Me=e=>he(e)&&"mode"in e&&"title"in e&&"handle"in e&&"solvedMin"in e&&"solvedMax"in e&&"language"in e&&"startTier"in e&&"endTier"in e&&"searchOperator"in e&&"algorithmIds"in e&&"customQuery"in e&&typeof e.mode=="string"&&["easy","manual"].includes(e.mode)&&typeof e.title=="string"&&typeof e.handle=="string"&&typeof e.language=="string"&&typeof e.solvedMin=="string"&&typeof e.solvedMax=="string"&&ge(e.algorithmIds)&&J(e.startTier)&&J(e.endTier)&&typeof e.searchOperator=="string"&&["OR","AND","NOR"].includes(e.searchOperator)&&typeof e.customQuery=="string",Re=e=>{const{mode:r,title:s,handle:n,solvedMin:o,solvedMax:l,startTier:m,endTier:v,algorithmIds:f,customQuery:M}=e,g=r==="easy"?[K(s),je(n),Se(o,l),Ne(m,v),Ee(f)]:[K(s),be(M)];for(let u=0;u<g.length;u++){const p=g[u];if(!p.isValid)return p}return{isValid:!0}},K=e=>e.length>W?{isValid:!1,errorMessage:`추첨 이름은 ${W}자 이하여야 해요.`,focusElementName:"title"}:{isValid:!0},je=e=>e.trim()===""?{isValid:!0}:e.length<3||e.length>20?{isValid:!1,errorMessage:"핸들(닉네임)은 3자 이상 20자 이하여야 해요.",focusElementName:"handle"}:me.test(e)?{isValid:!0}:{isValid:!1,errorMessage:"핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.",focusElementName:"handle"},Se=(e,r)=>{const s=Number(e),n=Number(r),o=e.trim()==="",l=r.trim()==="";return!o&&!P.test(e)?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMin"}:!l&&!P.test(r)?{isValid:!1,errorMessage:"맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.",focusElementName:"solvedMax"}:!o&&s>T?{isValid:!1,errorMessage:`맞은 사람 수는 ${T.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMin"}:!l&&n>T?{isValid:!1,errorMessage:`맞은 사람 수는 ${T.toLocaleString()}명 이하여야 해요.`,focusElementName:"solvedMax"}:!o&&!l&&s>n?{isValid:!1,errorMessage:"맞은 사람 수의 하한은 상한보다 클 수 없어요.",focusElementName:"solvedMin"}:{isValid:!0}},Ne=(e,r)=>{const s=Number(e),n=Number(r);return s>n?{isValid:!1,errorMessage:"난이도의 범위는 하한보다 상한이 더 낮을 수 없어요."}:{isValid:!0}},Ee=e=>e.length>Y?{isValid:!1,errorMessage:`추첨에 사용할 알고리즘의 개수는 ${Y.toLocaleString()}개 이하여야 해요.`}:e.every(s=>typeof s=="number"&&s%1===0&&s>=1&&s<=fe)?{isValid:!0}:{isValid:!1,errorMessage:"잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요."},be=e=>e.trim()===""?{isValid:!1,errorMessage:"쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.",focusElementName:"customQuery"}:e.length>k?{isValid:!1,errorMessage:`쿼리의 길이가 너무 길어요. ${k}자 이하가 되도록 줄여 주세요.`,focusElementName:"customQuery"}:{isValid:!0},De=e=>{const{mode:r,handle:s,solvedMin:n,solvedMax:o,language:l,startTier:m,endTier:v,searchOperator:f,algorithmIds:M,customQuery:g}=e;if(r==="manual")return g.replace(/\n/g," ").trim();const u=Ce(M),p=Ae(l),R=Oe(f),N=s.trim()!=="",E=u.length>0,h=N?`~@${s} `:"",b=$e(n,o),x=p===""?"":`${p} `,D=Ve(m,v),j=E?u.length===1?u[0]:`(${R==="~"?"~":""}${u.join(R)})`:"";return`(*0&!s?|!*0) o? -w? ${h}${b}${x}${D}${j}`.trim()},$e=(e,r)=>e.trim()===""&&r.trim()===""?"":e===r?`s#${e} `:`s#${e}..${r} `,w=["b","s","g","p","d","r"],Ve=(e,r)=>{if(e===0&&r===30)return"";if(e%5===1&&e+4===r)return`*${w[Math.floor(e/5)]} `;if(e%5===1&&r%5===0){const s=w[Math.floor(e/5)],n=w[Math.floor(r/5)-1];return`*${s}..${n} `}return e===r?`*${e} `:`*${e}..${r} `},Ce=e=>{const r=[];return e.forEach(s=>{var o;const n=(o=pe.find(l=>l.id===s))==null?void 0:o.tag;n&&r.push(`#${n}`)}),r},Ae=e=>{switch(e){case"ko":return"%ko";case"en":return"(%en~%ko~%ja~%sv)";case"ko/en":return"(%ko|(%en~%ja~%sv))";default:return""}},Oe=e=>{switch(e){case"OR":return"|";case"AND":return"&";default:return"~"}},Z={mode:"easy",title:"",handle:"",language:"ko",solvedMin:"",solvedMax:"",startTier:1,endTier:30,searchOperator:"OR",algorithmIds:[],customQuery:""},Qe=e=>{const{selectedSlotNo:r,onSubmit:s}=e,[n,o]=y.useState(Z),[l,m]=y.useState(""),[v,f]=y.useState(void 0),{mode:M,title:g,handle:u,solvedMin:p,solvedMax:R,language:N,startTier:E,endTier:h,searchOperator:b,algorithmIds:x,customQuery:D}=n,j=y.useRef(null),$=y.useRef(null),V=y.useRef(null),C=y.useRef(null),A=y.useRef(null);return{mode:M,title:g,handle:u,solvedMin:p,solvedMax:R,language:N,startTier:E,endTier:h,searchOperator:b,algorithmIds:x,customQuery:D,errorMessage:l,errorElementName:v,setMode:i=>{o(a=>({...a,mode:i})),m(""),f(void 0)},setRandomDefenseInputValue:i=>{const{name:a,value:S}=i.target;a in Z&&o(O=>({...O,[a]:S}))},setLanguage:i=>{ve(i)&&o(a=>({...a,language:i}))},setTierRange:(i,a)=>{o(S=>({...S,startTier:i,endTier:a}))},setSearchOperator:i=>{o(a=>({...a,searchOperator:i}))},setAlgorithmIds:i=>{o(a=>({...a,algorithmIds:i}))},setCustomQuery:i=>{o(a=>({...a,customQuery:i}))},submitRandomDefense:()=>{var S,O,U,X,q;if(!Me(n))return;const i=Re(n);if(i.isValid){const re=n.title.trim()===""?`추첨 ${r}`:n.title,se=De(n);s(re,se),m(""),f(void 0);return}switch(m(i.errorMessage),f(i.focusElementName),i.focusElementName){case"title":(S=j.current)==null||S.select();break;case"handle":(O=$.current)==null||O.select();break;case"solvedMin":(U=V.current)==null||U.select();break;case"solvedMax":(X=C.current)==null||X.select();break;case"customQuery":(q=A.current)==null||q.select();break}},titleRef:j,handleRef:$,solvedMinRef:V,solvedMaxRef:C,customQueryRef:A}},Te=d.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 22px;

  z-index: 1;
`,Le=d.div`
  position: absolute;
  top: -32px;
  right: 0;
`,we=d.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 0;
`,ee=d.div`
  display: flex;
  column-gap: ${({$columnGap:e})=>e||0};

  width: 100%;
`,I=d.label`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,L=d.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 4px;

  width: ${({$width:e})=>e};
`,Ie=d.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,ke=d.div`
  display: flex;
  justify-content: center;
`,_e=d.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  width: 495px;
`,ze=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
`,Fe=[{label:"한국어",value:"ko"},{label:"영어",value:"en"},{label:"한국어 및 영어",value:"ko/en"},{label:"모든 언어",value:"all"}],te=e=>{const{selectedSlotNo:r,isLoaded:s,onSubmit:n}=e,{mode:o,title:l,handle:m,solvedMin:v,solvedMax:f,language:M,startTier:g,endTier:u,searchOperator:p,algorithmIds:R,customQuery:N,errorMessage:E,errorElementName:h,setMode:b,setRandomDefenseInputValue:x,setLanguage:D,setTierRange:j,setSearchOperator:$,setAlgorithmIds:V,setCustomQuery:C,submitRandomDefense:A,titleRef:_,handleRef:z,solvedMinRef:F,solvedMaxRef:H,customQueryRef:G}=Qe({selectedSlotNo:r,onSubmit:n});return t.jsx(ne,{width:"650px",height:"373px",padding:"10px",title:"추첨 만들기",children:t.jsxs(Te,{children:[t.jsx(Le,{children:t.jsx(ie,{errorMessage:E,fontSize:14})}),t.jsx(we,{children:t.jsx(le,{mode:o,onClick:b})}),t.jsxs(I,{$width:"380px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"추첨 이름"}),t.jsx(Q,{ref:_,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"0 ~ 30자","aria-label":"추첨 이름",name:"title",value:l,maxLength:30,hasError:h==="title",onChange:x})]}),o==="easy"?t.jsxs(t.Fragment,{children:[t.jsxs(ee,{$columnGap:"50px",children:[t.jsxs(I,{$width:"190px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"검색에서 제외할 닉네임"}),t.jsx(Q,{ref:z,type:"text",width:"100%",height:"30px",textAlign:"left",placeholder:"3 ~ 20자","aria-label":"검색에서 제외할 닉네임",name:"handle",value:m,minLength:3,maxLength:20,hasError:h==="handle",onChange:x})]}),t.jsxs(L,{$width:"166px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"맞은 사람 수"}),t.jsxs(Ie,{children:[t.jsx(Q,{ref:F,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 하한",name:"solvedMin",value:v,hasError:h==="solvedMin",onChange:x}),t.jsx(c,{type:"primary",fontSize:16,children:"~"}),t.jsx(Q,{ref:H,type:"number",width:"70px",height:"30px",textAlign:"center",placeholder:"","aria-label":"맞은 사람 수의 상한",name:"solvedMax",value:f,hasError:h==="solvedMax",onChange:x})]})]}),t.jsxs(L,{$width:"190px",children:[t.jsx(c,{type:"primary",fontSize:16,children:"문제 언어"}),t.jsx(xe,{options:Fe,selectedValue:M,width:"130px",ariaLabel:"문제 언어 고르기",onChange:D})]})]}),t.jsxs(L,{$width:"100%",children:[t.jsx(c,{type:"primary",fontSize:16,children:"난이도 범위"}),t.jsx(ke,{children:t.jsx(ue,{startTier:g,endTier:u,onChange:j})})]}),t.jsxs(L,{$width:"446px",children:[t.jsxs(ee,{children:[t.jsx(c,{type:"primary",fontSize:16,children:"검색에 포함할 알고리즘"}),t.jsx(ce,{selectedOperator:p,onClick:$})]}),t.jsx(de,{selectedAlgorithmIds:R,onChange:B=>{V(B)}})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(I,{$width:"100%",children:[t.jsx(c,{type:"primary",fontSize:16,children:"쿼리"}),t.jsx(ye,{ref:G,width:"100%",height:"160px",value:N,placeholder:`1 ~ ${k}자`,hasError:h==="customQuery",onChange:C})]}),t.jsxs(_e,{children:[t.jsxs(c,{type:"normal",fontSize:14,children:[t.jsx(oe,{href:"https://solved.ac/search",fontSize:14,children:"solved.ac 문제 고급 검색"})," ","페이지를 통해 solved.ac 검색 쿼리 작성법을 확인하실 수 있습니다!"]}),t.jsx(c,{type:"normal",fontSize:14,children:"추첨은 비로그인 상태에서 진행되므로, 솔브드 프로 플랜 전용 쿼리는 사용하실 수 없습니다."})]})]}),t.jsx(ze,{children:t.jsx(ae,{isLoaded:s,selectedSlotNo:r,onClick:A})})]})})};try{te.displayName="RandomDefenseCreateMenu",te.__docgenInfo={description:"",displayName:"RandomDefenseCreateMenu",props:{selectedSlotNo:{defaultValue:null,description:"",name:"selectedSlotNo",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},isLoaded:{defaultValue:null,description:"",name:"isLoaded",required:!0,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(title: string, query: string) => void"}}}}}catch{}export{te as R};
