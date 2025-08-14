import{S as a}from"./SearchOperatorSelect-C0lH7hGi.js";import{f as s}from"./index-BAc7KiQ7.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./check-BIa-lIjI.js";import"./styled-components.browser.esm-CIS6JKSM.js";const f={title:"components/RandomDefenseCreateMenu/SearchOperatorSelect",component:a,argTypes:{searchOperator:{description:"선택되어 있는 **연산자**를 의미합니다. **연산자**의 값이 어떤가에 따라 추첨 생성 시 생성되는 쿼리의 방식이 달라집니다. `AND`가 선택된 경우에는 해당되는 알고리즘을 포함하는 경우, `OR`는 해당되는 알고리즘 중 적어도 하나를 포함하는 경우, `NOR`는 해당되는 알고리즘을 모두 포함하지 않는 경우를 의미합니다."},onClick:{description:"연산자가 변경되어야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`SearchOperatorSelect`는 추첨 생성 폼에서, 검색에 포함할 알고리즘들의 검색 방법을 정할 수 있는 컴포넌트입니다. 보다 구체적으로는, 여러 개의 알고리즘을 쿼리에 포함시킬 때, 사용할 연산자(`|`, `&`, `-`)를 정할 수 있습니다."}}}},e={args:{searchOperator:"AND",onClick:s()}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    searchOperator: 'AND',
    onClick: fn()
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,f as default};
