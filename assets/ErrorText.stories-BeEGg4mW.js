import{E as S}from"./ErrorText-CAj_MRej.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";const L={title:"components/common/ErrorText",component:S,parameters:{docs:{description:{component:"`ErrorText`는 에러 메시지를 보여주는 컴포넌트입니다. 폼 제출 등을 사용자가 진행했을 때, 입력값이 올바르지 않아 사용자가 원하는 작업을 진행할 수 없을 경우 사용자를 돕기 위한 메시지를 보여주는 역할을 합니다.\n\n본 컴포넌트의 에러 메시지를 공백으로 지정한 경우에는 에러 메시지가 보여지지 않으며, 공간만 차지하게 됩니다."}}}},r={args:{fontSize:"16px",errorMessage:"쿼리가 너무 길어요. 300자 이하로 입력해 주세요."}},s={args:{fontSize:"14px",errorMessage:"쿼리가 너무 길어요. 300자 이하로 입력해 주세요."}},o={args:{fontSize:"13px",errorMessage:"쿼리가 너무 길어요. 300자 이하로 입력해 주세요."}},e={args:{fontSize:"16px",height:"200px",errorMessage:"오류 메시지가 굉장히 긴 경우에는 한 줄 안에 모든 내용을 담기 어려울 수도 있을 것입니다. 오류 메시지는 생략되어서는 안 되므로 한 줄을 넘어갈 정도의 긴 오류 메시지의 경우에는 다음 줄로 넘어가 오류 메시지를 보여주게 됩니다. 단, 이 경우 오류 메시지가 없을 때와 있을 때가 토글되는 상황에서 불필요한 Layout shift가 발생할 수 있습니다. 이에 대응하기 위해서 고정적인 높이를 정해 레이아웃의 높이가 변하는 현상을 방지할 수 있습니다. height 프로퍼티를 활용해 보세요."}};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    fontSize: '16px',
    errorMessage: '쿼리가 너무 길어요. 300자 이하로 입력해 주세요.'
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var p,c,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fontSize: '14px',
    errorMessage: '쿼리가 너무 길어요. 300자 이하로 입력해 주세요.'
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var g,m,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fontSize: '13px',
    errorMessage: '쿼리가 너무 길어요. 300자 이하로 입력해 주세요.'
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,d,f,h,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    fontSize: '16px',
    height: '200px',
    errorMessage: '오류 메시지가 굉장히 긴 경우에는 한 줄 안에 모든 내용을 담기 어려울 수도 있을 것입니다. 오류 메시지는 생략되어서는 안 되므로 한 줄을 넘어갈 정도의 긴 오류 메시지의 경우에는 다음 줄로 넘어가 오류 메시지를 보여주게 됩니다. 단, 이 경우 오류 메시지가 없을 때와 있을 때가 토글되는 상황에서 불필요한 Layout shift가 발생할 수 있습니다. 이에 대응하기 위해서 고정적인 높이를 정해 레이아웃의 높이가 변하는 현상을 방지할 수 있습니다. height 프로퍼티를 활용해 보세요.'
  }
}`,...(f=(d=e.parameters)==null?void 0:d.docs)==null?void 0:f.source},description:{story:"오류 메시지가 굉장히 긴 경우에는 여러 줄에 걸쳐서 표시되며, 이 경우 오류 메시지가 등장했다가 숨겨졌을 때 레이아웃의 높이가 의도치 않게 변환될 수 있으므로, `height` prop을 사용한 고정된 높이 사용을 추천드립니다.\n\n본 예시에서는 `height: 200px` 로 설정하였으며, 더 긴 오류 메시지도 수용할 수 있도록 높이가 늘어났음을 확인할 수 있습니다.\n\n`height` prop은 필수값이 아니며, 명시하지 않을 경우 `height`는 `auto`가 됩니다. 한 줄짜리 에러 메시지를 표시해야 할 때 적합합니다.",...(l=(h=e.parameters)==null?void 0:h.docs)==null?void 0:l.description}}};const y=["Default16px","Default14px","Default13px","LongMessage16px"];export{o as Default13px,s as Default14px,r as Default16px,e as LongMessage16px,y as __namedExportsOrder,L as default};
