import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as a,l as s}from"./styled-components.browser.esm-CIS6JKSM.js";import{a as ne,s as te}from"./index-CElCL35T.js";import"./index--qcDGAq6.js";import{S as oe}from"./clock-B5z8M2k5.js";import{f as ae}from"./formatDate-DtmnLriP.js";import{g as se}from"./getTransparentHexColor-DN69VCBw.js";import{P as ie}from"./ProgressBar-BHGbdOPb.js";import{t as I}from"./theme-DpyODYgC.js";import{P as de}from"./ProblemTimerControls-7VL_Aqna.js";import{f as c}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";import"./toPx-DeOSKary.js";import"./trash-JRBuQ8nU.js";const l=(e,n,r)=>n?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,D=(e,n,r)=>n?s`
      background-image:
        ${r.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${r.solvedAcTier.HIDDEN_GRADIENT};
    `:e>=1&&e<=5?s`
      background-image:
        ${r.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${r.solvedAcTier.BRONZE_GRADIENT};
    `:e>=6&&e<=10?s`
      background-image:
        ${r.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${r.solvedAcTier.SILVER_GRADIENT};
    `:e>=11&&e<=15?s`
      background-image:
        ${r.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${r.solvedAcTier.GOLD_GRADIENT};
    `:e>=16&&e<=20?s`
      background-image:
        ${r.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${r.solvedAcTier.PLATINUM_GRADIENT};
    `:e>=21&&e<=25?s`
      background-image:
        ${r.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${r.solvedAcTier.DIAMOND_GRADIENT};
    `:e>=26&&e<=30?s`
      background-image:
        ${r.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${r.solvedAcTier.RUBY_GRADIENT};
    `:s`
    background-image:
      ${r.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${r.solvedAcTier.UNRATED_GRADIENT};
  `,le=a.li`
  display: flex;

  width: 588px;
  height: 75px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({$tier:e,$isHidden:n,theme:r})=>D(e,n,r)};

  &:hover {
    ${({$tier:e,$isHidden:n,theme:r})=>D(e,n,r)};
  }
`,ce=a.div`
  width: 100%;
  padding-right: 8px;
`,ue=a.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;a.a`
  display: flex;
  align-items: center;

  max-width: 50%;
`;a.button`
  width: 42px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({$tier:e,$isHidden:n,theme:r})=>l(e,n,r)};
  }
`;const pe=a.img`
  width: 71px;
  height: 71px;
  padding: 12px 6px;
`,me=a.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 270px;
  height: 58px;
`,ge=a.a`
  display: inline;
  overflow: hidden;

  padding-top: 8px;

  font-size: 19px;
  line-height: 19px;
  font-weight: 600;
  color: ${({$tier:e,$isHidden:n,theme:r})=>l(e,n,r)};
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`,fe=a.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`,ve=a.p`
  display: inline-block;

  height: 13px;

  font-size: 13px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({$tier:e,$isHidden:n,theme:r})=>l(e,n,r)};
`,Ae=a.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.WHITE};
  }
`,Te=a.p`
  display: inline-block;

  height: 13px;

  font-size: 13px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({theme:e})=>e.color.WHITE};
`,be=a.div`
  height: 8px;
`,x=e=>{const{problemId:n,title:r,tier:i,createdAt:X,isHidden:d,progress:ee,...re}=e;return t.jsxs(le,{$tier:i,$isHidden:d,children:[t.jsx(pe,{src:d?ne.hidden:te[i],alt:"",draggable:!1}),t.jsxs(ce,{children:[t.jsxs(ue,{children:[t.jsxs(me,{children:[t.jsx(ge,{href:`https://icpc.me/${n}`,target:"__blank","aria-label":`${n}번 ${r} 문제`,title:r,$tier:i,$isHidden:d,children:r}),t.jsxs(fe,{children:[t.jsx(ve,{$tier:i,$isHidden:d,children:`#${n}`}),t.jsxs(Ae,{children:[t.jsx(oe,{}),t.jsx(Te,{children:ae(new Date(X))})]})]})]}),t.jsx(de,{...re,hasDeleteButton:!0,color:l(i,d,I),height:54})]}),t.jsx(be,{children:t.jsx(ie,{width:"100%",height:"100%",color:l(i,d,I),progress:ee,trackColor:se(l(i,d,I),.2)})})]})]})};try{x.displayName="ProblemTimerInfoItem",x.__docgenInfo={description:"",displayName:"ProblemTimerInfoItem",props:{problemId:{defaultValue:null,description:"",name:"problemId",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tier:{defaultValue:null,description:"",name:"tier",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"},{value:"31"}]}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"stop"'},{value:'"play"'},{value:'"pause"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!0,type:{name:"() => void"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!0,type:{name:"() => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!0,type:{name:"() => void"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}const Se={title:"components/RandomDefenseHistoryMenu/ProblemTimerInfoItem",component:x,argTypes:{problemId:{description:"이 타이머의 문제 번호입니다."},title:{description:"이 타이머의 문제의 제목입니다."},tier:{description:"이 타이머의 문제에 책정되어 있는 난이도(티어)입니다."},createdAt:{description:"해당 문제에 대응되는 타이머가 생성된 시각입니다."},isHidden:{description:"이 타이머의 문제 티어가 가려져 있는지의 여부입니다."},hours:{description:"타이머의 시간입니다."},minutes:{description:"타이머의 분입니다."},seconds:{description:"타이머의 초입니다."},status:{description:"현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다."},progress:{control:{type:"range",min:0,max:100},description:"프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**"},onPlay:{description:"타이머의 재생 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onPause:{description:"타이머의 일시정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onStop:{description:"타이머의 정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onEdit:{description:"타이머의 수정 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onDelete:{description:"타이머의 삭제 버튼이 눌렸을 때 실행할 콜백 함수입니다."}},parameters:{docs:{description:{component:"`ProblemTimerInfoItem`은 현재 사용중인 하나의 타이머의 정보를 보여주는 컴포넌트입니다. 일반 타이머 컴포넌트와 마찬가지로 타이머 상태를 수정할 수 있으며 삭제 역시 가능합니다."}}}},o={args:{problemId:27959,title:"초코바",tier:1,createdAt:"2025-01-01T23:35:00.123Z",isHidden:!1,hours:1,minutes:30,seconds:0,status:"play",progress:66,onPlay:c(),onPause:c(),onStop:c(),onEdit:c(),onDelete:c()}},u={args:{...o.args,problemId:27964,title:"콰트로치즈피자",tier:6,createdAt:"2025-01-01T23:35:00.123Z"}},p={args:{...o.args,problemId:27943,title:"가지 사진 찾기",tier:11,createdAt:"2025-01-01T23:35:00.123Z"}},m={args:{...o.args,problemId:27470,title:"멋진 부분집합",tier:16,createdAt:"2025-01-01T23:35:00.123Z"}},g={args:{...o.args,problemId:30243,title:"🧩 N-Queen (Hard)",tier:21,createdAt:"2025-01-01T23:35:00.123Z"}},f={args:{...o.args,problemId:31442,title:"좋은 수열",tier:26,createdAt:"2025-01-01T23:35:00.123Z"}},v={args:{...o.args,problemId:1223,title:"마법의 돌",tier:0,createdAt:"2025-01-01T23:35:00.123Z"}},A={args:{...o.args,problemId:27903,title:"인생",tier:31,createdAt:"2025-01-01T23:35:00.123Z"}},T={args:{...o.args,problemId:29727,title:"선이 하나 더ㅠㅠ",tier:1,createdAt:"2025-01-01T23:35:00.123Z",isHidden:!0}},b={args:{...o.args,problemId:15898,title:"피아의 아틀리에 ~신비한 대회의 연금술사~",tier:15,createdAt:"2025-01-01T23:35:00.123Z"}};var y,h,R;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    problemId: 27959,
    title: '초코바',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    hours: 1,
    minutes: 30,
    seconds: 0,
    status: 'play',
    progress: 66,
    onPlay: fn(),
    onPause: fn(),
    onStop: fn(),
    onEdit: fn(),
    onDelete: fn()
  }
}`,...(R=(h=o.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var $,_,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 27964,
    title: '콰트로치즈피자',
    tier: 6,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,P,Z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 27943,
    title: '가지 사진 찾기',
    tier: 11,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(Z=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var G,H,S;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 27470,
    title: '멋진 부분집합',
    tier: 16,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(S=(H=m.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var w,B,j;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 30243,
    title: '🧩 N-Queen (Hard)',
    tier: 21,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(j=(B=g.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var k,V,q;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 31442,
    title: '좋은 수열',
    tier: 26,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(q=(V=f.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,C,O;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 1223,
    title: '마법의 돌',
    tier: 0,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(O=(C=v.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var U,K,L;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 27903,
    title: '인생',
    tier: 31,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(L=(K=A.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,W,Y;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 29727,
    title: '선이 하나 더ㅠㅠ',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: true
  }
}`,...(Y=(W=T.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Q,F,J;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    problemId: 15898,
    title: '피아의 아틀리에 ~신비한 대회의 연금술사~',
    tier: 15,
    createdAt: '2025-01-01T23:35:00.123Z'
  }
}`,...(J=(F=b.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const we=["Bronze","Silver","Gold","Platinum","Diamond","Ruby","Unrated","NotRatable","Hidden","LongTitle"];export{o as Bronze,g as Diamond,p as Gold,T as Hidden,b as LongTitle,A as NotRatable,m as Platinum,f as Ruby,u as Silver,v as Unrated,we as __namedExportsOrder,Se as default};
