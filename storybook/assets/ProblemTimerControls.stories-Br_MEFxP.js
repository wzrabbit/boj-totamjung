import{f as s}from"./index-BAc7KiQ7.js";import{P as B}from"./ProblemTimerControls-7hP-sUWV.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";import"./trash-JRBuQ8nU.js";import"./toPx-DeOSKary.js";const _={title:"components/ProblemTimerControls",component:B,argTypes:{hours:{description:"타이머의 시간입니다."},minutes:{description:"타이머의 분입니다."},seconds:{description:"타이머의 초입니다."},status:{description:"현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다."},color:{description:"컴포넌트의 전체적인 색상입니다."},height:{description:"컴포넌트의 세로 길이입니다. 이 길이에 따라 전반적인 컴포넌트의 크기가 결정됩니다."},hasDeleteButton:{description:"삭제 버튼을 표시할 것인지의 여부입니다."},onPlay:{description:"타이머의 재생 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onPause:{description:"타이머의 일시정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onStop:{description:"타이머의 정지 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onEdit:{description:"타이머의 수정 버튼이 눌렸을 때 실행할 콜백 함수입니다."},onDelete:{description:"타이머의 삭제 버튼이 눌렸을 때 실행할 콜백 함수입니다."}},parameters:{docs:{description:{component:"`ProblemTimerControls`는 모든 타이머 기반 컴포넌트의 기반이 되는 하위 컴포넌트입니다. 타이머 디스플레이 및 조작 버튼들로 이루어져 있습니다."}}}},e={args:{hours:0,minutes:8,seconds:30,status:"play",color:"white",height:40,hasDeleteButton:!1,onPlay:s(),onPause:s(),onStop:s(),onEdit:s()}},t={args:{...e.args,status:"pause"}},o={args:{...e.args,status:"stop"}},r={args:{...e.args,hasDeleteButton:!0,onDelete:s()}},n={args:{...e.args,height:60,hasDeleteButton:!0,onDelete:s()}};var a,i,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    hours: 0,
    minutes: 8,
    seconds: 30,
    status: 'play',
    color: 'white',
    height: 40,
    hasDeleteButton: false,
    onPlay: fn(),
    onPause: fn(),
    onStop: fn(),
    onEdit: fn()
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'pause'
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,d,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    status: 'stop'
  }
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,P,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    hasDeleteButton: true,
    onDelete: fn()
  }
}`,...(f=(P=r.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var D,y,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Play.args,
    height: 60,
    hasDeleteButton: true,
    onDelete: fn()
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const O=["Play","Pause","Stop","WithDeleteButton","DifferentSize"];export{n as DifferentSize,t as Pause,e as Play,o as Stop,r as WithDeleteButton,O as __namedExportsOrder,_ as default};
