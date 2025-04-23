import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as n}from"./styled-components.browser.esm-CkAH7aAm.js";import{t as e}from"./theme-CqSsbPCW.js";import{g as me}from"./getTransparentHexColor-DN69VCBw.js";import"./index-RYns6xqu.js";import{S as ue}from"./close-R_Y1ANk3.js";import{S as ge}from"./check-Dgz4zLBN.js";import{C as he}from"./CircleProgressBar-CsRn8wzy.js";import{S as xe}from"./copy-CpUHLpuP.js";import{f as i}from"./index-C_FWhylE.js";const ve={none:e.color.BOJ_BLUE,totamjung:e.color.DARK_BROWN,bojExtendedDark:e.bojExtendedColor.DARKEST_GRAY,bojExtendedRigel:e.bojExtendedColor.SKY_BLUE,solvedAcLight:e.solvedAcColor.OFF_WHITE,solvedAcDark:e.solvedAcColor.INDIGO,solvedAcBlack:e.solvedAcColor.DARK_INDIGO},Ae={none:e.color.BOJ_BLUE,totamjung:e.color.LIGHTER_BROWN,bojExtendedDark:e.bojExtendedColor.DARK_GRAY,bojExtendedRigel:e.bojExtendedColor.DARK_SKY_BLUE,solvedAcLight:e.solvedAcColor.LIGHT_GRAY,solvedAcDark:e.solvedAcColor.GRAY,solvedAcBlack:e.solvedAcColor.GRAY},je={none:"transparent",totamjung:e.color.LIGHTER_BROWN,bojExtendedDark:e.bojExtendedColor.DARKER_GRAY,bojExtendedRigel:"transparent",solvedAcLight:e.solvedAcColor.OFF_WHITE,solvedAcDark:e.solvedAcColor.DARK_INDIGO,solvedAcBlack:e.color.BLACK},ne={none:e.color.WHITE,totamjung:e.color.BEIGE,bojExtendedDark:e.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:e.color.WHITE,solvedAcLight:e.color.BLACK,solvedAcDark:e.solvedAcColor.OFF_WHITE,solvedAcBlack:e.solvedAcColor.OFF_WHITE},fe={...ne,totamjung:e.color.WHITE,bojExtendedDark:e.color.WHITE},f={none:e.color.WHITE,totamjung:e.color.LIGHTEST_BROWN,bojExtendedDark:e.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:e.color.WHITE,solvedAcLight:e.solvedAcColor.GRAY,solvedAcDark:e.solvedAcColor.LIGHT_GRAY,solvedAcBlack:e.solvedAcColor.LIGHT_GRAY},be={none:e.filter.WHITE_FILTER,totamjung:e.filter.LIGHT_BROWN_FILTER,bojExtendedDark:e.bojExtendedFilter.LIGHT_GRAY,bojExtendedRigel:e.filter.WHITE_FILTER,solvedAcLight:e.solvedAcFilter.LIGHT_GRAY,solvedAcDark:e.solvedAcFilter.LIGHT_GRAY,solvedAcBlack:e.solvedAcFilter.LIGHT_GRAY},E={none:e.color.WHITE,totamjung:e.color.LIGHTEST_BROWN,bojExtendedDark:e.bojExtendedColor.LIGHT_GRAY,bojExtendedRigel:e.color.WHITE,solvedAcLight:e.solvedAcColor.GRAY,solvedAcDark:e.solvedAcColor.LIGHT_GRAY,solvedAcBlack:e.solvedAcColor.LIGHT_GRAY},Ee=n.div`
  display: flex;
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid
    ${({$totamjungTheme:o})=>Ae[o]};
  background-color: ${({$totamjungTheme:o})=>ve[o]};
  box-shadow: 0 0 20px
    ${({$totamjungTheme:o})=>je[o]};

  transform: ${({$open:o})=>o?"translateX(0)":"translateX(-450px)"};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`,Te=n.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`,Ce=n.img`
  width: 40px;

  filter: ${({$totamjungTheme:o})=>be[o]};
  user-select: none;
`,Ie=n.div`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({$totamjungTheme:o})=>f[o]};
  }
`,Se=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 264px;
`,De=n.p`
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
  word-break: break-all;
  color: ${({$totamjungTheme:o})=>ne[o]};
`,Re=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,se=n.p`
  font-size: 14px;
  word-break: break-all;
`,Le=n.li`
  display: flex;
  column-gap: 3px;

  min-height: 17px;

  line-height: 17px;

  & > ${se} {
    color: ${({$totamjungTheme:o})=>fe[o]};
  }

  & > svg {
    flex-shrink: 0;

    width: 17px;
    height: 17px;
    color: ${({$totamjungTheme:o})=>f[o]};
  }
`,ye=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  width: 32px;
`,ke=n.button`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({$totamjungTheme:o})=>f[o]};
  }
`,j=o=>{const{mainIconSrc:c,theme:s,progress:ae,title:ie,descriptions:l,open:ce,onClose:le}=o,de=Array.isArray(l)?l:[l];return r.jsxs(Ee,{$open:ce,$totamjungTheme:s,children:[r.jsx(Te,{children:c&&(typeof c=="string"?r.jsx(Ce,{src:c,$totamjungTheme:s,alt:""}):r.jsx(Ie,{$totamjungTheme:s,children:c}))}),r.jsxs(Se,{children:[r.jsx(De,{"aria-live":"assertive",$totamjungTheme:s,children:ie}),l&&r.jsx(Re,{children:de.map((pe,b)=>r.jsxs(Le,{$totamjungTheme:s,children:[r.jsx(ge,{}),r.jsx(se,{children:pe},b)]},b))})]}),r.jsxs(ye,{children:[r.jsx(ke,{type:"button","aria-label":"토스트 닫기",$totamjungTheme:s,onClick:le,children:r.jsx(ue,{})}),r.jsx(he,{size:32,progress:ae,color:E[s],trackColor:me(E[s],.3)})]})]})};try{j.displayName="LeftSlideToast",j.__docgenInfo={description:"",displayName:"LeftSlideToast",props:{mainIconSrc:{defaultValue:null,description:"",name:"mainIconSrc",required:!0,type:{name:"string | ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},descriptions:{defaultValue:null,description:"",name:"descriptions",required:!1,type:{name:"string | string[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const Ne={title:"components/LeftSlideToast",component:j,argTypes:{mainIconSrc:{description:"토스트의 좌측에 표시할 큰 아이콘의 파일 경로입니다."},theme:{description:"본 컴포넌트에 적용할 테마를 의미합니다.",control:"radio",options:["none","totamjung"]},progress:{description:"토스트의 프로그레스 바가 얼마나 차 있는지를 의미합니다. 이 값은 **0 이상 100 이하의 수**여야 합니다.",control:{type:"range",min:0,max:100}},title:{description:"토스트의 제목입니다."},descriptions:{description:"토스트의 제목을 뒷받침할 설명입니다."},open:{description:"토스트가 열려 있는지(=사용자에게 보이는 상태인지)를 의미합니다."},onClose:{description:"토스트를 닫아야 할 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다."}}}},t={decorators:[o=>r.jsx("div",{style:{height:"160px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:i()}},d={decorators:[o=>r.jsx("div",{style:{height:"160px"},children:r.jsx(o,{})})],args:{mainIconSrc:r.jsx(xe,{}),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:i()}},p={decorators:[o=>r.jsx("div",{style:{height:"160px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"필요할 경우 여러 개의 설명을 사용할 수도 있습니다.",descriptions:["이건 첫 번째 설명이고요,","이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요."],open:!0,onClose:i()}},m={decorators:[o=>r.jsx("div",{style:{height:"150px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.",open:!0,onClose:i()}},a={decorators:[o=>r.jsx("div",{style:{height:"300px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"매우 긴 설명",descriptions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.",open:!0,onClose:i()}},u={...t,args:{...t.args,theme:"totamjung"}},g={...t,args:{...t.args,theme:"solvedAcLight"}},h={...t,args:{...t.args,theme:"solvedAcDark"}},x={...t,args:{...t.args,theme:"solvedAcBlack"}},v={...t,args:{...t.args,theme:"bojExtendedDark"}},A={...t,args:{...t.args,theme:"bojExtendedRigel"}};var T,C,I;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn()
  }
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,D,R;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: <CopyIcon />,
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn()
  }
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var L,y,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '필요할 경우 여러 개의 설명을 사용할 수도 있습니다.',
    descriptions: ['이건 첫 번째 설명이고요,', '이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요.'],
    open: true,
    onClose: fn()
  }
}`,...(k=(y=p.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,G,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '150px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.',
    open: true,
    onClose: fn()
  }
}`,...(B=(G=m.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var H,w,W,Y,$;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '300px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '매우 긴 설명',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.',
    open: true,
    onClose: fn()
  }
}`,...(W=(w=a.parameters)==null?void 0:w.docs)==null?void 0:W.source},description:{story:"설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.",...($=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var F,O,N;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'totamjung'
  }
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var V,U,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcLight'
  }
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var K,P,z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcDark'
  }
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var J,X,M;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcBlack'
  }
}`,...(M=(X=x.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var Q,Z,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'bojExtendedDark'
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,te;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'bojExtendedRigel'
  }
}`,...(te=(re=A.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ve=["Default","SvgIcon","MultipleDescriptions","NoDescription","VeryLongDescription","TotamjungTheme","SolvedAcLightTheme","SolvedAcDarkTheme","SolvedAcBlackTheme","BojExtendedDarkTheme","BojExtendedRigelTheme"];export{v as BojExtendedDarkTheme,A as BojExtendedRigelTheme,t as Default,p as MultipleDescriptions,m as NoDescription,x as SolvedAcBlackTheme,h as SolvedAcDarkTheme,g as SolvedAcLightTheme,d as SvgIcon,u as TotamjungTheme,a as VeryLongDescription,Ve as __namedExportsOrder,Ne as default};
