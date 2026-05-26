import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{f as n}from"./index-BAc7KiQ7.js";import{d as Y}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-C-IIZrvZ.js";import{g}from"./getTransparentHexColor-DN69VCBw.js";import{P as q}from"./ProblemTimerControls-CfDcSYSD.js";import{C as V}from"./CircleProgressBar-F5A2eE0t.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./trash-JRBuQ8nU.js";import"./toPx-DeOSKary.js";const K={none:e.colors.BOJ_BLUE,totamjung:e.colors.BROWN_700,bojExtendedDark:e.bojExtendedColors.GRAY_900,bojExtendedRigel:e.bojExtendedColors.SKY_BLUE,solvedAcLight:e.solvedAcColors.OFF_WHITE,solvedAcDark:e.solvedAcColors.INDIGO,solvedAcBlack:e.solvedAcColors.DARK_INDIGO},w={none:e.colors.BOJ_BLUE,totamjung:e.colors.BROWN_500,bojExtendedDark:e.bojExtendedColors.GRAY_600,bojExtendedRigel:e.bojExtendedColors.SKY_BLUE,solvedAcLight:e.solvedAcColors.GRAY_200,solvedAcDark:e.solvedAcColors.GRAY_400,solvedAcBlack:e.solvedAcColors.GRAY_400},z={none:e.colors.OFF_WHITE,totamjung:e.colors.BEIGE,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.colors.BLACK,solvedAcDark:e.solvedAcColors.OFF_WHITE,solvedAcBlack:e.solvedAcColors.OFF_WHITE},U={none:e.colors.OFF_WHITE,totamjung:e.colors.BROWN_300,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.solvedAcColors.GRAY_400,solvedAcDark:e.solvedAcColors.GRAY_200,solvedAcBlack:e.solvedAcColors.GRAY_200},J={none:e.colors.AMBER,totamjung:e.colors.MANGO,bojExtendedDark:e.colors.MANGO,bojExtendedRigel:e.colors.CANARY,solvedAcLight:e.colors.DARK_AMBER,solvedAcDark:e.colors.MANGO,solvedAcBlack:e.colors.MANGO},$={none:e.colors.LIGHT_RED,totamjung:e.colors.LIGHT_RED,bojExtendedDark:e.colors.LIGHT_RED,bojExtendedRigel:e.colors.RED_400,solvedAcLight:e.colors.CRIMSON,solvedAcDark:e.colors.LIGHT_RED,solvedAcBlack:e.colors.LIGHT_RED},X={none:g(e.colors.OFF_WHITE,.3),totamjung:e.colors.BROWN_900,bojExtendedDark:e.colors.BLACK,bojExtendedRigel:g(e.colors.OFF_WHITE,.3),solvedAcLight:g(e.solvedAcColors.GRAY_400,.3),solvedAcDark:e.solvedAcColors.DARK_INDIGO,solvedAcBlack:e.colors.BLACK},Q=Y.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  height: 40px;

  border: 2px solid ${({$timerTheme:o})=>w[o]};
  background-color: ${({$timerTheme:o})=>K[o]};
  border-radius: 20px;

  user-select: none;

  transition:
    border-color 0.2s,
    background-color 0.2s;
`,p=o=>{const{progress:m,theme:s,urgency:x="normal",...H}=o,b=x==="warn"?J[s]:x==="danger"?$[s]:null,A=z[s],N=b??A,M=b??U[s];return r.jsxs(Q,{$timerTheme:s,children:[r.jsx(V,{progress:m,size:28,strokeWidth:14,color:M,trackColor:X[s],colorTransitionMs:200}),r.jsx(q,{...H,color:N,transparentColor:A,height:40,hasDeleteButton:!1})]})};try{p.displayName="ProblemTimer",p.__docgenInfo={description:"",displayName:"ProblemTimer",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"pause"'},{value:'"stop"'}]}},urgency:{defaultValue:null,description:"",name:"urgency",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"warn"'},{value:'"danger"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!0,type:{name:"() => void"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!0,type:{name:"() => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!0,type:{name:"() => void"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}}}}}catch{}const v=[{key:"none",label:"테마 없음",pageBackground:"#ffffff"},{key:"totamjung",label:"토탐정",pageBackground:"#1a0e0a"},{key:"bojExtendedDark",label:"BOJ 확장 · 어둡게",pageBackground:"#202020"},{key:"bojExtendedRigel",label:"BOJ 확장 · Rigel",pageBackground:"#001a26"},{key:"solvedAcLight",label:"솔브드 · 밝게",pageBackground:"#f7f8f9"},{key:"solvedAcDark",label:"솔브드 · 어둡게",pageBackground:"#15202b"},{key:"solvedAcBlack",label:"솔브드 · 암전",pageBackground:"#000000"}],y=[{key:"normal",label:"Normal · 정상",hours:0,minutes:42,seconds:18,progress:68,headerColor:"#5a4438"},{key:"warn",label:"Warn · 경고",hours:0,minutes:0,seconds:18,progress:24,headerColor:"#a87000"},{key:"danger",label:"Danger · 위험",hours:0,minutes:0,seconds:4,progress:5,headerColor:"#c8001a"}],t=()=>{},Z=()=>r.jsxs("div",{style:{fontFamily:"Pretendard, sans-serif",border:"1px solid rgba(0,0,0,0.1)",borderRadius:12,overflow:"hidden",background:"#ffffff",boxShadow:"0 4px 14px rgba(0,0,0,0.06)"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr 1fr 1fr",background:"#f7f4ef",borderBottom:"1px solid rgba(0,0,0,0.08)"},children:[r.jsx("div",{style:{padding:"12px 16px",fontSize:11,color:"#8d7669",fontWeight:700,letterSpacing:1},children:"THEME"}),y.map(o=>r.jsx("div",{style:{padding:"12px 16px",fontSize:11,fontWeight:700,letterSpacing:1,borderLeft:"1px solid rgba(0,0,0,0.06)",color:o.headerColor},children:o.label},o.key))]}),v.map((o,m)=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr 1fr 1fr",borderBottom:m<v.length-1?"1px solid rgba(0,0,0,0.06)":"none",alignItems:"stretch"},children:[r.jsxs("div",{style:{padding:"14px 16px"},children:[r.jsx("div",{style:{fontSize:14,color:"#1a0e0a",fontWeight:700,marginBottom:2},children:o.label}),r.jsx("div",{style:{fontSize:11,color:"#8d7669"},children:o.key})]}),y.map(s=>r.jsx("div",{style:{padding:"12px 16px",borderLeft:"1px solid rgba(0,0,0,0.04)",background:o.pageBackground,minHeight:64,display:"flex",alignItems:"center"},children:r.jsx(p,{theme:o.key,hours:s.hours,minutes:s.minutes,seconds:s.seconds,progress:s.progress,status:"play",urgency:s.key,onPlay:t,onPause:t,onStop:t,onEdit:t})},s.key))]},o.key))]}),F={hours:0,minutes:8,seconds:30,progress:65,status:"play",theme:"none",onPlay:n(),onPause:n(),onStop:n(),onEdit:n()},ue={title:"components/ProblemTimer",component:p,argTypes:{hours:{description:"타이머의 시간입니다."},minutes:{description:"타이머의 분입니다."},seconds:{description:"타이머의 초입니다."},progress:{control:{type:"range",min:0,max:100},description:"프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**"},status:{description:"현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다."},urgency:{control:{type:"select"},options:["normal","warn","danger"],description:"남은 시간에 따른 긴급도입니다. `normal`은 기본, `warn`은 경고(warnThreshold 이하), `danger`는 위험(dangerThreshold 이하)을 의미합니다. `warn`/`danger`일 때 텍스트와 진행 링 색상이 테마별 액센트로 교체됩니다."},onPlay:{description:"타이머의 재생 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onPause:{description:"타이머의 일시정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onStop:{description:"타이머의 정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onEdit:{description:"타이머의 수정 버튼이 눌렸을 때 실행할 콜백 함수입니다."}}},a={args:F},l={args:{...a.args,status:"pause"}},d={args:{...a.args,status:"stop"}},c={args:{...a.args,hours:0,minutes:0,seconds:18,progress:24,urgency:"warn"}},i={args:{...a.args,hours:0,minutes:0,seconds:4,progress:5,urgency:"danger"}},u={args:F,parameters:{controls:{disable:!0}},render:()=>r.jsx(Z,{})};var h,f,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: baseArgs
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var E,j,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'pause'
  }
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var B,C,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'stop'
  }
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var R,D,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    hours: 0,
    minutes: 0,
    seconds: 18,
    progress: 24,
    urgency: 'warn'
  }
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var S,I,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    hours: 0,
    minutes: 0,
    seconds: 4,
    progress: 5,
    urgency: 'danger'
  }
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var G,L,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ProblemTimerThemeStateMatrix />
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const pe=["Play","Pause","Stop","Warn","Danger","ThemeStateMatrix"];export{i as Danger,l as Pause,a as Play,d as Stop,u as ThemeStateMatrix,c as Warn,pe as __namedExportsOrder,ue as default};
