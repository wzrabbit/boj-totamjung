import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{A as h}from"./AlgorithmSearchInput-D7Le8_1n.js";import{f as l}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";import"./MiniAlgorithmButton-Cu511WHt.js";import"./getSearchResults-B-QY19XD.js";import"./algorithmInfos-w49mooiO.js";import"./randomDefense-DE7lwrZG.js";const C={title:"components/RandomDefenseCreateMenu/AlgorithmSearchInput",component:h,argTypes:{selectedAlgorithmIds:{description:"인풋 컴포넌트에 선택된 알고리즘의 ID 목록입니다."},onChange:{description:"선택되어 있는 알고리즘의 ID가 변경되어야 할 경우 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`AlgorithmSearchInput`는 검색에 활용할 알고리즘들을 관리할 수 있는 인풋 컴포넌트입니다. 정확한 알고리즘을 등록할 수 있도록 검색에 기반하여 알고리즘 분류들을 추가할 수 있으며, 이미 추가한 알고리즘들도 단순 클릭을 통해 쉽게 지울 수 있습니다."}}}},r={decorators:[o=>t.jsx("div",{style:{position:"relative",height:"200px"},children:t.jsx(o,{})})],args:{selectedAlgorithmIds:[8,35,82],onChange:l()}},e={decorators:[o=>t.jsx("div",{style:{position:"relative",height:"200px"},children:t.jsx(o,{})})],args:{selectedAlgorithmIds:[8,35,82,127,40],onChange:l()}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    onChange: fn()
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,p,c,d,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    onChange: fn()
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"검색에 사용할 수 있는 알고리즘의 최대 개수에 도달할 경우에는 검색 결과가 표시되지 않습니다.",...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};const D=["Default","ReachedLimit"];export{r as Default,e as ReachedLimit,D as __namedExportsOrder,C as default};
