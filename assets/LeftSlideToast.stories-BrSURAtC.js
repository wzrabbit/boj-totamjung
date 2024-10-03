import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as t,l as S}from"./styled-components.browser.esm-CkAH7aAm.js";import"./index-RYns6xqu.js";import{S as X}from"./close-R_Y1ANk3.js";import{S as F}from"./check-Dgz4zLBN.js";import{C as M}from"./CircleProgressBar-CsRn8wzy.js";import{S as k}from"./copy-CpUHLpuP.js";import{f as s}from"./index-C_FWhylE.js";const Y=t.div`
  display: flex;
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;

  ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?S`
          border: 2px solid ${e.color.LIGHTER_BROWN};
          background-color: ${e.color.DARK_BROWN};
          box-shadow: 0 0 20px ${e.color.LIGHTER_BROWN};
        `:S`
          border: 2px solid ${e.color.BOJ_BLUE};
          background-color: ${e.color.BOJ_BLUE};
        `}

  transform: ${({$open:e})=>e?"translateX(0)":"translateX(-450px)"};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`,Q=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`,Z=t.img`
  width: 40px;

  filter: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.filter.LIGHTEST_BROWN_FILTER:e.filter.WHITE_FILTER};
  user-select: none;
`,ee=t.div`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.LIGHTEST_BROWN:e.color.WHITE};
  }
`,ne=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 264px;
`,oe=t.p`
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.BEIGE:e.color.WHITE};
`,te=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,re=t.li`
  display: flex;
  column-gap: 3px;

  min-height: 17px;

  line-height: 17px;

  & > svg {
    flex-shrink: 0;

    width: 17px;
    height: 17px;
    color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.LIGHTEST_BROWN:e.color.WHITE};
  }
`,se=t.p`
  font-size: 14px;
  word-break: break-all;
  color: ${({theme:e})=>e.color.WHITE};
`,ie=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  width: 32px;
`,ae=t.button`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.LIGHTEST_BROWN:e.color.WHITE};
  }
`,c={WHITE:"white",SKY_BLUE:"#1c8cd1",BROWN:"#331911",LIGHT_BROWN:"#a17362"},h=e=>{const{mainIconSrc:o,theme:r,progress:q,title:z,descriptions:a,open:A,onClose:J}=e,K=Array.isArray(a)?a:[a];return n.jsxs(Y,{$open:A,$totamjungTheme:r,children:[n.jsx(Q,{children:o&&(typeof o=="string"?n.jsx(Z,{src:o,$totamjungTheme:r,alt:""}):n.jsx(ee,{$totamjungTheme:r,children:o}))}),n.jsxs(ne,{children:[n.jsx(oe,{"aria-live":"assertive",$totamjungTheme:r,children:z}),a&&n.jsx(te,{children:K.map((P,x)=>n.jsxs(re,{$totamjungTheme:r,children:[n.jsx(F,{}),n.jsx(se,{children:P},x)]},x))})]}),n.jsxs(ie,{children:[n.jsx(ae,{type:"button","aria-label":"토스트 닫기",$totamjungTheme:r,onClick:J,children:n.jsx(X,{})}),n.jsx(M,{size:32,progress:q,color:r==="totamjung"?c.LIGHT_BROWN:c.WHITE,trackColor:r==="totamjung"?c.BROWN:c.SKY_BLUE})]})]})};try{h.displayName="LeftSlideToast",h.__docgenInfo={description:"",displayName:"LeftSlideToast",props:{mainIconSrc:{defaultValue:null,description:"",name:"mainIconSrc",required:!0,type:{name:"string | ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},descriptions:{defaultValue:null,description:"",name:"descriptions",required:!1,type:{name:"string | string[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const xe={title:"components/LeftSlideToast",component:h,argTypes:{mainIconSrc:{description:"토스트의 좌측에 표시할 큰 아이콘의 파일 경로입니다."},theme:{description:"본 컴포넌트에 적용할 테마를 의미합니다.",control:"radio",options:["none","totamjung"]},progress:{description:"토스트의 프로그레스 바가 얼마나 차 있는지를 의미합니다. 이 값은 **0 이상 100 이하의 수**여야 합니다.",control:{type:"range",min:0,max:100}},title:{description:"토스트의 제목입니다."},descriptions:{description:"토스트의 제목을 뒷받침할 설명입니다."},open:{description:"토스트가 열려 있는지(=사용자에게 보이는 상태인지)를 의미합니다."},onClose:{description:"토스트를 닫아야 할 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다."}}}},l={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:s()}},p={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:n.jsx(k,{}),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:s()}},d={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"totamjung",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:s()}},m={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:n.jsx(k,{}),theme:"totamjung",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:s()}},u={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"필요할 경우 여러 개의 설명을 사용할 수도 있습니다.",descriptions:["이건 첫 번째 설명이고요,","이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요."],open:!0,onClose:s()}},g={decorators:[e=>n.jsx("div",{style:{height:"150px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.",open:!0,onClose:s()}},i={decorators:[e=>n.jsx("div",{style:{height:"300px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"매우 긴 설명",descriptions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.",open:!0,onClose:s()}};var f,y,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,I,T;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var b,C,L;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'totamjung',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn()
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var R,w,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: <CopyIcon />,
    theme: 'totamjung',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn()
  }
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var _,W,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(B=(W=u.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var $,N,H;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(N=g.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var O,D,U,V,G;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source},description:{story:"설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.",...(G=(V=i.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};const Se=["Default","SvgIcon","TotamjungTheme","TotamjungThemeWithSvgIcon","MultipleDescriptions","NoDescription","VeryLongDescription"];export{l as Default,u as MultipleDescriptions,g as NoDescription,p as SvgIcon,d as TotamjungTheme,m as TotamjungThemeWithSvgIcon,i as VeryLongDescription,Se as __namedExportsOrder,xe as default};
