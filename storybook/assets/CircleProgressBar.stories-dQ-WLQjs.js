import{C as l}from"./CircleProgressBar-F5A2eE0t.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";const C={title:"components/CircleProgressBar",component:l,argTypes:{size:{description:"프로그레스 바의 크기입니다."},progress:{description:"프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**",control:{type:"range",min:0,max:100}},color:{description:"프로그레스 바의, **채워져 있는 부분**의 색상입니다."},trackColor:{description:"프로그레스 바의, **채워져 있지 않은 부분**의 색상입니다."},colorTransitionMs:{description:"`color`·`trackColor` 변경 시 적용할 stroke 전환 시간(ms)입니다. 0이면 즉시 전환되며, 기본값은 0입니다. Controls 패널에서 이 값을 0보다 크게 둔 뒤 `color`를 바꾸면 부드러운 전환을 확인할 수 있습니다.",control:{type:"range",min:0,max:1e3,step:50}}},parameters:{docs:{description:{component:"`CircleProgressBar`는 진행 상황을 시각적으로 보여주는 컴포넌트입니다."}}}},o={args:{size:45,strokeWidth:5.625,progress:65,color:"#ffe091",trackColor:"#362b28"}},r={args:{size:45,strokeWidth:22.5,progress:65,color:"#ffe091",trackColor:"#362b28"}};var e,s,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    size: 45,
    strokeWidth: 5.625,
    progress: 65,
    color: '#ffe091',
    trackColor: '#362b28'
  }
}`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var a,c,i,n,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: 45,
    strokeWidth: 22.5,
    progress: 65,
    color: '#ffe091',
    trackColor: '#362b28'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"`strokeWidth` 값을 `size`의 절반으로 조절하면 꽉 찬 프로그레스 바를 만들 수 있습니다.",...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.description}}};const u=["Default","Filled"];export{o as Default,r as Filled,u as __namedExportsOrder,C as default};
