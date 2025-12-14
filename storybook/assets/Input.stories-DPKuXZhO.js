import{I as F}from"./Input-BHzSWsQh.js";import{f as l}from"./index-BAc7KiQ7.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";import"./toPx-DeOSKary.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./getTransparentHexColor-DN69VCBw.js";import"./theme-DpyODYgC.js";const Y={title:"components/common/Input",component:F,argTypes:{type:{description:"인풋 컴포넌트의 `type`입니다."},width:{description:"인풋 컴포넌트의 가로 길이입니다."},height:{description:"인풋 컴포넌트의 세로 길이입니다."},value:{description:"인풋 컴포넌트에 적혀있는 값입니다."},textAlign:{description:"인풋 컴포넌트에 적힌 텍스트의 정렬 방법입니다.",table:{defaultValue:{summary:"left"}}},hasError:{description:"에러 발생 여부입니다. 에러가 발생한 경우에는 인풋 컴포넌트의 윤곽선이 붉은색이 됩니다.",table:{defaultValue:{summary:"false"}}},onChange:{description:"인풋 컴포넌트의 값이 변경될 경우 실행시킬 콜백 함수입니다."},horizontalPadding:{description:"인풋 컴포넌트의 좌우에 생길 `padding`의 수치입니다.",table:{defaultValue:{summary:"6px"}}},fontSize:{description:"글자의 크기를 의미합니다.",table:{defaultValue:{summary:"13px"}}},fontWeight:{description:"글자의 굵기를 의미합니다. **디자인의 일관성을 위해 지정해야 할 특별한 이유가 있을 때에만 지정하세요.**",table:{defaultValue:{summary:"400"}}},theme:{description:"적용할 테마입니다. 테마에 따라 인풋 컴포넌트의 색상이 변경됩니다.",table:{defaultValue:{summary:"totamjung"}}},color:{description:"인풋의 글자 색상입니다. **지정하지 않아도 적용된 테마에 따라 적절한 색이 결정됩니다. 지정해야 할 특별한 이유가 있을 때에만 지정하세요.**"},borderWidth:{description:"인풋의 윤곽선의 굵기입니다.",defaultValue:{summary:"1.5"}},borderRadius:{description:"인풋의 모서리를 얼마나 둥글게 할 지를 의미합니다.",defaultValue:{summary:"4px"}}},parameters:{docs:{description:{component:"`Input`는 공통 인풋 컴포넌트입니다."}}}},t={args:{type:"text",width:240,height:30,value:"",textAlign:"left",placeholder:"마음가는 대로 입력해 보세요",hasError:!1,onChange:l()}},a={args:{type:"text",width:240,height:30,value:"",textAlign:"left",placeholder:"사람은 누구나 실수를 하죠",hasError:!0,onChange:l()}},r={args:{type:"text",width:300,height:45,fontSize:18,fontWeight:800,horizontalPadding:12,color:"skyblue",value:"다른 속성도 문제 없어요",textAlign:"left",placeholder:"다른 속성도 문제 없어요",onChange:l()}},e=q=>({args:{...t.args,theme:q}}),o=e("none"),s=e("solvedAcLight"),n=e("solvedAcDark"),c=e("solvedAcBlack"),i=e("bojExtendedDark"),d=e("bojExtendedRigel");var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'text',
    width: 240,
    height: 30,
    value: '',
    textAlign: 'left',
    placeholder: '마음가는 대로 입력해 보세요',
    hasError: false,
    onChange: fn()
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'text',
    width: 240,
    height: 30,
    value: '',
    textAlign: 'left',
    placeholder: '사람은 누구나 실수를 하죠',
    hasError: true,
    onChange: fn()
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,x,S,v,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'text',
    width: 300,
    height: 45,
    fontSize: 18,
    fontWeight: 800,
    horizontalPadding: 12,
    color: 'skyblue',
    value: '다른 속성도 문제 없어요',
    textAlign: 'left',
    placeholder: '다른 속성도 문제 없어요',
    onChange: fn()
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"디자인 일관성에 유의하여 이 속성들을 적용하시기 바랍니다. 특별한 이유가 없다면 본래의 스타일을 따르는 것이 바람직할 것입니다.",...(A=(v=r.parameters)==null?void 0:v.docs)==null?void 0:A.description}}};var E,b,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"createThemeStory('none')",...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var D,V,j;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:"createThemeStory('solvedAcLight')",...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var B,T,w;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:"createThemeStory('solvedAcDark')",...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,z,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"createThemeStory('solvedAcBlack')",...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var R,I,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"createThemeStory('bojExtendedDark')",...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var W,_,O;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"createThemeStory('bojExtendedRigel')",...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const Z=["Default","Error","DifferentVariant","Plain","SolvedAcLight","SolvedAcDark","SolvedAcBlack","BojExtendedDark","BojExtendedRigel"];export{i as BojExtendedDark,d as BojExtendedRigel,t as Default,r as DifferentVariant,a as Error,o as Plain,c as SolvedAcBlack,n as SolvedAcDark,s as SolvedAcLight,Z as __namedExportsOrder,Y as default};
