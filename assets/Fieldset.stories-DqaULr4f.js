import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{F as S}from"./Fieldset-DnFd6wYK.js";import{I as j}from"./Input-BrIae7Ts.js";import{f as o}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";import"./Radio-BjiebFTg.js";import"./Text-huWd_BLu.js";import"./toPx-DeOSKary.js";import"./getTransparentHexColor-DN69VCBw.js";import"./theme-CqSsbPCW.js";const J={title:"components/common/Fieldset",component:S,argTypes:{legend:{description:"필드셋의 제목입니다."},name:{description:"**폼 제출 시** 사용될 `name`값입니다. 실제로 **필드셋에 보이는 제목이 아님**에 유의하세요."},options:{description:"필드셋의 여러 옵션으로 구성된 목록입니다. 각 옵션의 이름을 여기에 명시하면 됩니다."},checkedValue:{description:"현재 선택되어 있는 옵션입니다."},onChange:{description:"필드셋에 체크되어 있는 항목이 변경되어야 할 경우 실행시킬 콜백 함수입니다."},disabled:{description:"필드셋이 비활성화되어 있는지의 여부입니다.",table:{defaultValue:{summary:"false"}}},isVertical:{description:"필드셋의 옵션들을 한 줄에 하나씩, 세로로 정렬해서 표시할 것인지의 여부입니다.",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:"`Fieldset`는 어느 하나의 주제에 대해 사용자가 원하는 옵션을 선택할 수 있도록 해주는 컴포넌트입니다. 각 옵션에는 평범하게 `string`을 사용하거나, `ReactNode`와 같은 컴포넌트를 사용할 수 있습니다."}}}},E="https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",s=[{label:"사과",value:"apple"},{label:"배",value:"pear"},{label:"파인애플",value:"pineapple"},{label:"수박",value:"watermelon"}],G=[...s,{label:p.jsx("img",{src:E,width:"120px",alt:"포도"}),value:"grape"},{label:p.jsx(j,{type:"text",textAlign:"left",width:"200px",height:"30px",placeholder:"직접 입력...","aria-label":"좋아하는 과일 직접 입력",value:"",hasError:!1,onChange:()=>{}}),value:"other"}],l=Array.from({length:20}).map(()=>{const i=crypto.randomUUID();return{label:i,value:i}}),r={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:s,checkedValue:"apple",onChange:o()}},t={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:s,checkedValue:"apple",isVertical:!0,onChange:o()}},e={args:{legend:"매우 많은 옵션",name:"tooManyOptions",options:l,checkedValue:l[0].value,onChange:o()}},a={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:G,checkedValue:"apple",isVertical:!0,onChange:o()}},n={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:s,checkedValue:"apple",disabled:!0,onChange:o()}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    onChange: fn()
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    isVertical: true,
    onChange: fn()
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,V,b,v,x;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    legend: '매우 많은 옵션',
    name: 'tooManyOptions',
    options: randomOptions,
    checkedValue: randomOptions[0].value,
    onChange: fn()
  }
}`,...(b=(V=e.parameters)==null?void 0:V.docs)==null?void 0:b.source},description:{story:"`isVertical` 옵션이 `true`로 설정되지 않았더라도, 옵션이 요소를 벗어나는 경우에는 다음 줄에 이어서 옵션들이 정렬됩니다.",...(x=(v=e.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var C,y,F,k,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options: optionsWithImages,
    checkedValue: 'apple',
    isVertical: true,
    onChange: fn()
  }
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source},description:{story:"필요할 경우, `string` 타입의 레이블을 사용하는 대신, 컴포넌트를 사용하여 사용자에게 더 다양한 옵션을 제공할 수도 있습니다.",...(O=(k=a.parameters)==null?void 0:k.docs)==null?void 0:O.description}}};var D,M,w,A,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    disabled: true,
    onChange: fn()
  }
}`,...(w=(M=n.parameters)==null?void 0:M.docs)==null?void 0:w.source},description:{story:"다른 `Fieldset`의 옵션에 따라 일부 `Fieldset`을 비활성화시킬 수도 있습니다.",...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};const K=["Default","Vertical","TooManyOptions","ComponentOptions","Disabled"];export{a as ComponentOptions,r as Default,n as Disabled,e as TooManyOptions,t as Vertical,K as __namedExportsOrder,J as default};
