import{R as l}from"./RandomDefenseCreateButton-DNA3ZySB.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";const f={title:"components/RandomDefenseCreateMenu/RandomDefenseCreateButton",component:l,argTypes:{},parameters:{docs:{description:{component:"`RandomDefenseCreateButton`는 추첨 생성 메뉴에서 추첨 생성 확정 시 사용될 버튼입니다. 추첨이 생성될 슬롯의 번호를 알려주는 역할도 겸합니다."}}}},o={args:{selectedSlotNo:1,isLoaded:!0,onClick:()=>{alert("onClick()")}}},e={args:{selectedSlotNo:1,isLoaded:!1,onClick:()=>{alert("onClick()")}}};var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    selectedSlotNo: 1,
    isLoaded: true,
    onClick: () => {
      alert('onClick()');
    }
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var n,s,c,d,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    selectedSlotNo: 1,
    isLoaded: false,
    onClick: () => {
      alert('onClick()');
    }
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source},description:{story:"아직 슬롯의 번호를 부모 컴포넌트에서 불러오지 못해, 로딩 중일 경우에 보여주는 UI입니다. 버튼은 비활성화 되어 있습니다.",...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.description}}};const g=["Default","Loading"];export{o as Default,e as Loading,g as __namedExportsOrder,f as default};
