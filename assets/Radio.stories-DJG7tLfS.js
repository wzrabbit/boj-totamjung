import{R as g}from"./Radio-CLzVlAmW.js";import{f as n}from"./index-C_FWhylE.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";const b={title:"components/common/Radio",component:g,argTypes:{name:{description:"라디오의 `name`입니다."},value:{description:"라디오의 `value`입니다."},checked:{description:"라디오의 체크 여부를 의미합니다."},onChange:{description:"라디오의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다."},disabled:{description:"라디오가 비활성화되어 있는지의 여부입니다.",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:"`Radio`는 공용 라디오 컴포넌트입니다. 크기가 작기 때문에 단독으로 쓰이기보다는 다른 요소들과 같이 쓰입니다."}}}},e={args:{name:"optionName",value:"optionValue",checked:!0,onChange:n()}},a={args:{name:"optionName",value:"optionValue",checked:!1,onChange:n()}},o={args:{name:"optionName",value:"optionValue",checked:!1,disabled:!0,onChange:n()}};var r,s,t,c,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: true,
    onChange: fn()
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source},description:{story:"`Checkbox`와 달리, `Radio`의 경우 해당 컴포넌트가 이미 선택되어 있을 경우 클릭하더라도 `onChange` 이벤트가 트리거되지 않습니다. 따라서 이 경우 클릭해도 함수가 호출되지 않습니다.",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: false,
    onChange: fn()
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: false,
    disabled: true,
    onChange: fn()
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const V=["Checked","NotChecked","Disabled"];export{e as Checked,o as Disabled,a as NotChecked,V as __namedExportsOrder,b as default};
