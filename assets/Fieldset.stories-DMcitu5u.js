import{j as l}from"./jsx-runtime-DEdD30eg.js";import{F as A}from"./Fieldset-KT1odGzc.js";import{I}from"./Input-_gr1WRmd.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./Radio-C-EJxsdk.js";import"./Text-DG2UbxfS.js";const T={title:"components/common/Fieldset",component:A,parameters:{docs:{description:{component:"`Fieldset`는 어느 하나의 주제에 대해 사용자가 원하는 옵션을 선택할 수 있도록 해주는 컴포넌트입니다. 각 옵션에는 평범하게 `string`을 사용하거나, `ReactNode`와 같은 컴포넌트를 사용할 수 있습니다."}}}},S="https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",s=[{label:"사과",value:"apple"},{label:"배",value:"pear"},{label:"파인애플",value:"pineapple"},{label:"수박",value:"watermelon"}],j=[...s,{label:l.jsx("img",{src:S,width:"120px",alt:"포도"}),value:"grape"},{label:l.jsx(I,{type:"text",textAlign:"left",width:"200px",placeholder:"직접 입력...",ariaLabel:"좋아하는 과일 직접 입력",value:"",hasError:!1,onChange:()=>{}}),value:"other"}],i=Array.from({length:20}).map(()=>{const e=crypto.randomUUID();return{label:e,value:e}}),o={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:s,checkedValue:"apple",onChange:e=>{alert(`onChange('${e}')`)}}},t={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:s,checkedValue:"apple",isVertical:!0,onChange:e=>{alert(`onChange('${e}')`)}}},a={args:{legend:"매우 많은 옵션",name:"tooManyOptions",options:i,checkedValue:i[0].value,onChange:e=>{alert(`onChange('${e}')`)}}},n={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:j,checkedValue:"apple",isVertical:!0,onChange:e=>{alert(`onChange('${e}')`)}}},r={args:{legend:"좋아하는 과일",name:"favoriteFruit",options:s,checkedValue:"apple",disabled:!0,onChange:e=>{alert(`onChange('${e}')`)}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    onChange: (value: string) => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    isVertical: true,
    onChange: (value: string) => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,v,f,C,V;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    legend: '매우 많은 옵션',
    name: 'tooManyOptions',
    options: randomOptions,
    checkedValue: randomOptions[0].value,
    onChange: (value: string) => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"`isVertical` 옵션이 `true`로 설정되지 않았더라도, 옵션이 요소를 벗어나는 경우에는 다음 줄에 이어서 옵션들이 정렬됩니다.",...(V=(C=a.parameters)==null?void 0:C.docs)==null?void 0:V.description}}};var b,x,F,y,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options: optionsWithImages,
    checkedValue: 'apple',
    isVertical: true,
    onChange: (value: string) => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(F=(x=n.parameters)==null?void 0:x.docs)==null?void 0:F.source},description:{story:"필요할 경우, `string` 타입의 레이블을 사용하는 대신, 컴포넌트를 사용하여 사용자에게 더 다양한 옵션을 제공할 수도 있습니다.",...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var O,$,D,M,w;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    disabled: true,
    onChange: (value: string) => {
      alert(\`onChange('\${value}')\`);
    }
  }
}`,...(D=($=r.parameters)==null?void 0:$.docs)==null?void 0:D.source},description:{story:"다른 `Fieldset`의 옵션에 따라 일부 `Fieldset`을 비활성화시킬 수도 있습니다.",...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.description}}};const U=["Default","Vertical","TooManyOptions","ComponentOptions","Disabled"];export{n as ComponentOptions,o as Default,r as Disabled,a as TooManyOptions,t as Vertical,U as __namedExportsOrder,T as default};
