import{f as a}from"./index-BAc7KiQ7.js";import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{d as $}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-DB0vf-rZ.js";import{g as v}from"./getTransparentHexColor-DN69VCBw.js";import{P as J}from"./ProblemTimerControls-7hP-sUWV.js";import{C as z}from"./CircleProgressBar-DbK9OCO6.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./trash-JRBuQ8nU.js";import"./toPx-DeOSKary.js";const w={none:e.colors.BOJ_BLUE,totamjung:e.colors.BROWN_700,bojExtendedDark:e.bojExtendedColors.GRAY_900,bojExtendedRigel:e.bojExtendedColors.SKY_BLUE,solvedAcLight:e.solvedAcColors.OFF_WHITE,solvedAcDark:e.solvedAcColors.INDIGO,solvedAcBlack:e.solvedAcColors.DARK_INDIGO},M={none:e.colors.BOJ_BLUE,totamjung:e.colors.BROWN_500,bojExtendedDark:e.bojExtendedColors.GRAY_600,bojExtendedRigel:e.bojExtendedColors.SKY_BLUE,solvedAcLight:e.solvedAcColors.GRAY_200,solvedAcDark:e.solvedAcColors.GRAY_400,solvedAcBlack:e.solvedAcColors.GRAY_400},Q={none:e.colors.OFF_WHITE,totamjung:e.colors.BEIGE,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.colors.BLACK,solvedAcDark:e.solvedAcColors.OFF_WHITE,solvedAcBlack:e.solvedAcColors.OFF_WHITE},X={none:e.colors.OFF_WHITE,totamjung:e.colors.BROWN_300,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.solvedAcColors.GRAY_400,solvedAcDark:e.solvedAcColors.GRAY_200,solvedAcBlack:e.solvedAcColors.GRAY_200},Z={none:v(e.colors.OFF_WHITE,.3),totamjung:e.colors.BROWN_900,bojExtendedDark:e.colors.BLACK,bojExtendedRigel:v(e.colors.OFF_WHITE,.3),solvedAcLight:v(e.solvedAcColors.GRAY_400,.3),solvedAcDark:e.solvedAcColors.DARK_INDIGO,solvedAcBlack:e.colors.BLACK},ee=$.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  height: 40px;

  border: 2px solid ${({$timerTheme:o})=>M[o]};
  background-color: ${({$timerTheme:o})=>w[o]};
  border-radius: 20px;

  user-select: none;
`,A=o=>{const{progress:K,theme:t,...U}=o;return g.jsxs(ee,{$timerTheme:t,children:[g.jsx(z,{progress:K,size:28,strokeWidth:14,color:X[t],trackColor:Z[t]}),g.jsx(J,{...U,color:Q[t],height:40,hasDeleteButton:!1})]})};try{A.displayName="ProblemTimer",A.__docgenInfo={description:"",displayName:"ProblemTimer",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"pause"'},{value:'"stop"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!0,type:{name:"() => void"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!0,type:{name:"() => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!0,type:{name:"() => void"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}}}}}catch{}const me={title:"components/ProblemTimer",component:A,argTypes:{hours:{description:"타이머의 시간입니다."},minutes:{description:"타이머의 분입니다."},seconds:{description:"타이머의 초입니다."},progress:{control:{type:"range",min:0,max:100},description:"프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**"},status:{description:"현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다."},onPlay:{description:"타이머의 재생 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onPause:{description:"타이머의 일시정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onStop:{description:"타이머의 정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onEdit:{description:"타이머의 수정 버튼이 눌렸을 때 실행할 콜백 함수입니다."}}},r={args:{hours:0,minutes:8,seconds:30,progress:65,status:"play",theme:"none",onPlay:a(),onPause:a(),onStop:a(),onEdit:a()}},n={args:{...r.args,status:"pause"}},l={args:{...r.args,status:"stop"}},s=o=>({args:{...r.args,theme:o}}),c=s("totamjung"),d=s("solvedAcLight"),i=s("solvedAcDark"),u=s("solvedAcBlack"),m=s("bojExtendedDark"),p=s("bojExtendedRigel");var E,j,x;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    hours: 0,
    minutes: 8,
    seconds: 30,
    progress: 65,
    status: 'play',
    theme: 'none',
    onPlay: fn(),
    onPause: fn(),
    onStop: fn(),
    onEdit: fn()
  }
}`,...(x=(j=r.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var _,h,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'pause'
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,b,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'stop'
  }
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var C,S,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"createThemeStory('totamjung')",...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var R,f,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"createThemeStory('solvedAcLight')",...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var P,O,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"createThemeStory('solvedAcDark')",...(F=(O=i.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var I,L,G;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"createThemeStory('solvedAcBlack')",...(G=(L=u.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var W,Y,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:"createThemeStory('bojExtendedDark')",...(q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var H,V,N;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:"createThemeStory('bojExtendedRigel')",...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const pe=["Play","Pause","Stop","Totamjung","SolvedAcLight","SolvedAcDark","SolvedAcBlack","BojExtendedDark","BojExtendedRigel"];export{m as BojExtendedDark,p as BojExtendedRigel,n as Pause,r as Play,u as SolvedAcBlack,i as SolvedAcDark,d as SolvedAcLight,l as Stop,c as Totamjung,pe as __namedExportsOrder,me as default};
