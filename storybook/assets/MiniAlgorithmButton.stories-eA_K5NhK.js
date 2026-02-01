import{M as u}from"./MiniAlgorithmButton-DGG-Ub0G.js";import{f as n}from"./index-BAc7KiQ7.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./styled-components.browser.esm-CIS6JKSM.js";const y={title:"components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton",component:u,argTypes:{id:{description:"알고리즘 분류의 ID입니다."},name:{description:"알고리즘 분류의 이름입니다."},mode:{description:"이 컴포넌트의 **용도**를 의미합니다. 클릭할 경우 해당 알고리즘 분류를 목록에서 추가하는 `add` 모드와, 클릭할 경우 해당 알고리즘 분류를 목록에서 제거하는 `delete` 모드 중 용도에 맞게 하나를 선택하여 사용할 수 있습니다."},onClick:{description:"클릭되었을 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`MiniAlgorithmButton`는 검색에 사용할 알고리즘을 정하는 `AlgorithmSearchInput` 컴포넌트의 하위 컴포넌트입니다. 클릭 시 용도에 따라 새로운 알고리즘을 추가하거나, 이미 지정된 알고리즘을 목록에서 제거하는 기능을 수행합니다."}}}},e={args:{id:2,name:"그리디 알고리즘",mode:"delete",tabIndex:1,onClick:n(),onKeyDown:n()}},o={args:{id:1,name:"그리디 알고리즘",mode:"add",tabIndex:1,onClick:n(),onKeyDown:n()}};var r,t,d,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 2,
    name: '그리디 알고리즘',
    mode: 'delete',
    tabIndex: 1,
    onClick: fn(),
    onKeyDown: fn()
  }
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source},description:{story:"클릭 시 해당 알고리즘 분류가 삭제되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 선택된 알고리즘을 목록에서 제거하는 것이 있습니다.",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.description}}};var s,m,c,p,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 1,
    name: '그리디 알고리즘',
    mode: 'add',
    tabIndex: 1,
    onClick: fn(),
    onKeyDown: fn()
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"클릭 시 해당 알고리즘 분류가 추가되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 아직 선택되지 않은, 검색 결과로 나오는 알고리즘을 목록에 추가하는 것이 있습니다.",...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};const A=["DeleteMode","AddMode"];export{o as AddMode,e as DeleteMode,A as __namedExportsOrder,y as default};
