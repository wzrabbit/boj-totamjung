import{j as o}from"./jsx-runtime-DEdD30eg.js";import{A as l}from"./AlgorithmSearchInput-Rh9deP_W.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./MiniAlgorithmButton-BRZMqM4y.js";import"./getSearchResults-CDgN9_fa.js";import"./algorithmInfos-BizjuJN7.js";import"./randomDefense-DfcJoTYj.js";const C={title:"components/RandomDefenseCreateMenu/AlgorithmSearchInput",component:l,parameters:{docs:{description:{component:"`AlgorithmSearchInput`는 검색에 활용할 알고리즘들을 관리할 수 있는 인풋 컴포넌트입니다. 정확한 알고리즘을 등록할 수 있도록 검색에 기반하여 알고리즘 분류들을 추가할 수 있으며, 이미 추가한 알고리즘들도 단순 클릭을 통해 쉽게 지울 수 있습니다."}}}},t={decorators:[e=>o.jsx("div",{style:{position:"relative",height:"200px"},children:o.jsx(e,{})})],args:{selectedAlgorithmIds:[8,35,82],onChange:e=>{alert(`onChange([${e.join(", ")}])`)}}},r={decorators:[e=>o.jsx("div",{style:{position:"relative",height:"200px"},children:o.jsx(e,{})})],args:{selectedAlgorithmIds:[8,35,82,127,40],onChange:e=>{alert(`onChange([${e.join(", ")}])`)}}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      position: 'relative',
      height: '200px'
    }}>
          <Story />
        </div>;
  }],
  args: {
    selectedAlgorithmIds: [8, 35, 82],
    onChange: algorithmIds => {
      alert(\`onChange([\${algorithmIds.join(', ')}])\`);
    }
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,d,m,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      position: 'relative',
      height: '200px'
    }}>
          <Story />
        </div>;
  }],
  args: {
    selectedAlgorithmIds: [8, 35, 82, 127, 40],
    onChange: algorithmIds => {
      alert(\`onChange([\${algorithmIds.join(', ')}])\`);
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"검색에 사용할 수 있는 알고리즘의 최대 개수에 도달할 경우에는 검색 결과가 표시되지 않습니다.",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};const S=["Default","ReachedLimit"];export{t as Default,r as ReachedLimit,S as __namedExportsOrder,C as default};
