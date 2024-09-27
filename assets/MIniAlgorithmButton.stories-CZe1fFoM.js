import{M as g}from"./MiniAlgorithmButton-BRZMqM4y.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";const k={title:"components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton",component:g,parameters:{docs:{description:{component:"`MiniAlgorithmButton`는 검색에 사용할 알고리즘을 정하는 `AlgorithmSearchInput` 컴포넌트의 하위 컴포넌트입니다. 클릭 시 용도에 따라 새로운 알고리즘을 추가하거나, 이미 지정된 알고리즘을 목록에서 제거하는 기능을 수행합니다."}}}},e={args:{id:2,name:"그리디 알고리즘",mode:"delete",onClick:r=>{alert(`onClick(${JSON.stringify(r)})`)}}},o={args:{id:1,name:"그리디 알고리즘",mode:"add",onClick:r=>{alert(`onClick(${JSON.stringify(r)})`)}}};var t,n,i,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 2,
    name: '그리디 알고리즘',
    mode: 'delete',
    onClick: algorithm => {
      alert(\`onClick(\${JSON.stringify(algorithm)})\`);
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"클릭 시 해당 알고리즘 분류가 삭제되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 선택된 알고리즘을 목록에서 제거하는 것이 있습니다.",...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.description}}};var d,m,c,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 1,
    name: '그리디 알고리즘',
    mode: 'add',
    onClick: algorithm => {
      alert(\`onClick(\${JSON.stringify(algorithm)})\`);
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"클릭 시 해당 알고리즘 분류가 추가되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 아직 선택되지 않은, 검색 결과로 나오는 알고리즘을 목록에 추가하는 것이 있습니다.",...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};const S=["DeleteMode","AddMode"];export{o as AddMode,e as DeleteMode,S as __namedExportsOrder,k as default};
