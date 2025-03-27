import{P as p}from"./ProblemTagLockTimer-DLPpUbai.js";import{f as d}from"./index-C_FWhylE.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Text-CP7DmBU9.js";const T={title:"components/ProblemTagLockTimer",component:p,argTypes:{hours:{description:"타이머에 설정된 **시간**을 의미합니다."},minutes:{description:"타이머에 설정된 **분**을 의미합니다."},disabled:{description:"본 컴포넌트가 비활성화되어 있는지의 여부입니다. 비활성화되어 있는 경우 본 컴포넌트를 조작할 수 없습니다."},onChange:{description:"타이머에 설정된 시간이 변경될 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`ProblemTagLockTimer`는 알고리즘 분류를 잠글 시, 잠금 시간을 설정할 수 있는 타이머 컴포넌트입니다."}}}},r={args:{hours:0,minutes:20,disabled:!1,onChange:d()}},e={args:{hours:0,minutes:20,disabled:!0,onChange:d()}};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    hours: 0,
    minutes: 20,
    disabled: false,
    onChange: fn()
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,t,i,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    hours: 0,
    minutes: 20,
    disabled: true,
    onChange: fn()
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source},description:{story:"스토리지로부터 데이터를 아직 받아오지 못한 상황, 즉 로딩 중인 상황일 경우에는 컴포넌트가 비활성화됩니다.",...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};const C=["Default","Disabled"];export{r as Default,e as Disabled,C as __namedExportsOrder,T as default};
