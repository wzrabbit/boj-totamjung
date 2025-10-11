import{f as a}from"./index-BAc7KiQ7.js";import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{d as $}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-CqSsbPCW.js";import{g as A}from"./getTransparentHexColor-DN69VCBw.js";import{P as J}from"./ProblemTimerControls-7VL_Aqna.js";import{C as z}from"./CircleProgressBar-DbK9OCO6.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./trash-JRBuQ8nU.js";import"./toPx-DeOSKary.js";const w={none:e.color.BOJ_BLUE,totamjung:e.color.BROWN,bojExtendedDark:e.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:e.bojExtendedColor.SKY_BLUE,solvedAcLight:e.solvedAcColor.OFF_WHITE,solvedAcDark:e.solvedAcColor.INDIGO,solvedAcBlack:e.solvedAcColor.DARK_INDIGO},M={none:e.color.BOJ_BLUE,totamjung:e.color.LIGHTER_BROWN,bojExtendedDark:e.bojExtendedColor.DARK_GRAY,bojExtendedRigel:e.bojExtendedColor.SKY_BLUE,solvedAcLight:e.solvedAcColor.LIGHT_GRAY,solvedAcDark:e.solvedAcColor.GRAY,solvedAcBlack:e.solvedAcColor.GRAY},Q={none:e.color.WHITE,totamjung:e.color.BEIGE,bojExtendedDark:e.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:e.color.WHITE,solvedAcLight:e.color.BLACK,solvedAcDark:e.solvedAcColor.OFF_WHITE,solvedAcBlack:e.solvedAcColor.OFF_WHITE},X={none:e.color.WHITE,totamjung:e.color.LIGHTEST_BROWN,bojExtendedDark:e.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:e.color.WHITE,solvedAcLight:e.solvedAcColor.GRAY,solvedAcDark:e.solvedAcColor.LIGHT_GRAY,solvedAcBlack:e.solvedAcColor.LIGHT_GRAY},Z={none:A(e.color.WHITE,.3),totamjung:e.color.DARK_BROWN,bojExtendedDark:e.color.BLACK,bojExtendedRigel:A(e.color.WHITE,.3),solvedAcLight:A(e.solvedAcColor.GRAY,.3),solvedAcDark:e.solvedAcColor.DARK_INDIGO,solvedAcBlack:e.color.BLACK},ee=$.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  height: 40px;

  border: 2px solid ${({$timerTheme:o})=>M[o]};
  background-color: ${({$timerTheme:o})=>w[o]};
  border-radius: 20px;

  user-select: none;
`,v=o=>{const{progress:F,theme:t,...U}=o;return g.jsxs(ee,{$timerTheme:t,children:[g.jsx(z,{progress:F,size:28,strokeWidth:14,color:X[t],trackColor:Z[t]}),g.jsx(J,{...U,color:Q[t],height:40,hasDeleteButton:!1})]})};try{v.displayName="ProblemTimer",v.__docgenInfo={description:"",displayName:"ProblemTimer",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"stop"'},{value:'"play"'},{value:'"pause"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!0,type:{name:"() => void"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!0,type:{name:"() => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!0,type:{name:"() => void"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}}}}}catch{}const me={title:"components/ProblemTimer",component:v,argTypes:{hours:{description:"타이머의 시간입니다."},minutes:{description:"타이머의 분입니다."},seconds:{description:"타이머의 초입니다."},progress:{control:{type:"range",min:0,max:100},description:"프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**"},status:{description:"현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다."},onPlay:{description:"타이머의 재생 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onPause:{description:"타이머의 일시정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onStop:{description:"타이머의 정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onEdit:{description:"타이머의 수정 버튼이 눌렸을 때 실행할 콜백 함수입니다."}}},r={args:{hours:0,minutes:8,seconds:30,progress:65,status:"play",theme:"none",onPlay:a(),onPause:a(),onStop:a(),onEdit:a()}},n={args:{...r.args,status:"pause"}},l={args:{...r.args,status:"stop"}},s=o=>({args:{...r.args,theme:o}}),c=s("totamjung"),d=s("solvedAcLight"),i=s("solvedAcDark"),u=s("solvedAcBlack"),m=s("bojExtendedDark"),p=s("bojExtendedRigel");var E,j,x;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(j=r.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var h,T,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'pause'
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var k,b,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'stop'
  }
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var C,S,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"createThemeStory('totamjung')",...(R=(S=c.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var D,_,f;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"createThemeStory('solvedAcLight')",...(f=(_=d.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var P,I,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"createThemeStory('solvedAcDark')",...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var G,H,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:"createThemeStory('solvedAcBlack')",...(W=(H=u.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var O,Y,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"createThemeStory('bojExtendedDark')",...(q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,V,N;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:"createThemeStory('bojExtendedRigel')",...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const pe=["Play","Pause","Stop","Totamjung","SolvedAcLight","SolvedAcDark","SolvedAcBlack","BojExtendedDark","BojExtendedRigel"];export{m as BojExtendedDark,p as BojExtendedRigel,n as Pause,r as Play,u as SolvedAcBlack,i as SolvedAcDark,d as SolvedAcLight,l as Stop,c as Totamjung,pe as __namedExportsOrder,me as default};
