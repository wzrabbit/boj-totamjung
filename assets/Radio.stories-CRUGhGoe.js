import{R as g}from"./Radio-C-EJxsdk.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";const f={title:"components/common/Radio",component:g,argTypes:{checked:{description:"라디오의 체크 여부를 의미합니다."},onChange:{description:"라디오의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다."}},parameters:{docs:{description:{component:"`Radio`는 공용 라디오 컴포넌트입니다. 크기가 작기 때문에 단독으로 쓰이기보다는 다른 요소들과 같이 쓰입니다."}}}},a={args:{name:"optionName",value:"optionValue",checked:!0,onChange:e=>{alert(`onChange('${e}')`)}}},n={args:{name:"optionName",value:"optionValue",checked:!1,onChange:e=>{alert(`onChange('${e}')`)}}},o={args:{name:"optionName",value:"optionValue",checked:!1,disabled:!0,onChange:e=>{alert(`onChange('${e}')`)}}};var r,t,s,c,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: true,
    onChange: value => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source},description:{story:"`Checkbox`와 달리, `Radio`의 경우 해당 컴포넌트가 이미 선택되어 있을 경우 클릭하더라도 `onChange` 이벤트가 트리거되지 않습니다. 따라서 이 경우 클릭해도 함수가 호출되지 않습니다.",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: false,
    onChange: value => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: false,
    disabled: true,
    onChange: value => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const V=["Checked","NotChecked","Disabled"];export{a as Checked,o as Disabled,n as NotChecked,V as __namedExportsOrder,f as default};
