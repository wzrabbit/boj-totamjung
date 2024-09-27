import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as r,l as h}from"./styled-components.browser.esm-CkAH7aAm.js";import"./index-RYns6xqu.js";import{S as F}from"./close-R_Y1ANk3.js";import{S as J}from"./check-Dgz4zLBN.js";import{C as M}from"./CircleProgressBar-DQKaDCGz.js";import{S as U}from"./copy-CpUHLpuP.js";const X=r.div`
  display: flex;
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;

  ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?h`
          border: 2px solid ${e.color.LIGHTER_BROWN};
          background-color: ${e.color.DARK_BROWN};
          box-shadow: 0 0 20px ${e.color.LIGHTER_BROWN};
        `:h`
          border: 2px solid ${e.color.BOJ_BLUE};
          background-color: ${e.color.BOJ_BLUE};
        `}

  transform: ${({$open:e})=>e?"translateX(0)":"translateX(-450px)"};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`,Y=r.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`,Q=r.img`
  width: 40px;

  filter: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.filter.LIGHTEST_BROWN_FILTER:e.filter.WHITE_FILTER};
  user-select: none;
`,Z=r.div`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.LIGHTEST_BROWN:e.color.WHITE};
  }
`,ee=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 264px;
`,ne=r.p`
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.BEIGE:e.color.WHITE};
`,oe=r.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,re=r.li`
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
`,te=r.p`
  font-size: 14px;
  word-break: break-all;
  color: ${({theme:e})=>e.color.WHITE};
`,se=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  width: 32px;
`,ie=r.button`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({theme:e,$totamjungTheme:o})=>o==="totamjung"?e.color.LIGHTEST_BROWN:e.color.WHITE};
  }
`,a={WHITE:"white",SKY_BLUE:"#1c8cd1",BROWN:"#331911",LIGHT_BROWN:"#a17362"},V=e=>{const{mainIconSrc:o,theme:t,progress:k,title:q,descriptions:i,open:P,onClose:z}=e,A=Array.isArray(i)?i:[i];return n.jsxs(X,{$open:P,$totamjungTheme:t,children:[n.jsx(Y,{children:o&&(typeof o=="string"?n.jsx(Q,{src:o,$totamjungTheme:t,alt:""}):n.jsx(Z,{$totamjungTheme:t,children:o}))}),n.jsxs(ee,{children:[n.jsx(ne,{"aria-live":"assertive",$totamjungTheme:t,children:q}),i&&n.jsx(oe,{children:A.map((K,g)=>n.jsxs(re,{$totamjungTheme:t,children:[n.jsx(J,{}),n.jsx(te,{$totamjungTheme:t,children:K},g)]},g))})]}),n.jsxs(se,{children:[n.jsx(ie,{type:"button","aria-label":"토스트 닫기",$totamjungTheme:t,onClick:z,children:n.jsx(F,{})}),n.jsx(M,{size:32,progress:k,color:t==="totamjung"?a.LIGHT_BROWN:a.WHITE,trackColor:t==="totamjung"?a.BROWN:a.SKY_BLUE})]})]})};V.__docgenInfo={description:"",methods:[],displayName:"LeftSlideToast",props:{mainIconSrc:{required:!0,tsType:{name:"union",raw:"string | SVGProps<SVGSVGElement>",elements:[{name:"string"},{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},theme:{required:!0,tsType:{name:"TotamjungTheme"},description:""},progress:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},descriptions:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ge={title:"components/LeftSlideToast",component:V,argTypes:{progress:{control:{type:"range",min:0,max:100}}},parameters:{docs:{description:{component:"`LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다."}}}},c={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("dice.png"),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},l={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:n.jsx(U,{}),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},p={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("dice.png"),theme:"totamjung",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},d={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:n.jsx(U,{}),theme:"totamjung",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},m={decorators:[e=>n.jsx("div",{style:{height:"160px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("dice.png"),theme:"none",progress:65,title:"필요할 경우 여러 개의 설명을 사용할 수도 있습니다.",descriptions:["이건 첫 번째 설명이고요,","이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요."],open:!0,onClose:()=>{alert("onClose()")}}},u={decorators:[e=>n.jsx("div",{style:{height:"150px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("dice.png"),theme:"none",progress:65,title:"설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.",open:!0,onClose:()=>{alert("onClose()")}}},s={decorators:[e=>n.jsx("div",{style:{height:"300px"},children:n.jsx(e,{})})],args:{mainIconSrc:browser.runtime.getURL("dice.png"),theme:"none",progress:65,title:"매우 긴 설명",descriptions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.",open:!0,onClose:()=>{alert("onClose()")}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var y,v,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,I,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'totamjung',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(f=(I=p.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var b,L,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(w=(L=d.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var R,E,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '필요할 경우 여러 개의 설명을 사용할 수도 있습니다.',
    descriptions: ['이건 첫 번째 설명이고요,', '이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요.'],
    open: true,
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var $,B,_;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '150px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.',
    open: true,
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var G,H,N,O,D;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '300px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '매우 긴 설명',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.',
    open: true,
    onClose: () => {
      alert('onClose()');
    }
  }
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.",...(D=(O=s.parameters)==null?void 0:O.docs)==null?void 0:D.description}}};const he=["Default","SvgIcon","TotamjungTheme","TotamjungThemeWithSvgIcon","MultipleDescriptions","NoDescription","VeryLongDescription"];export{c as Default,m as MultipleDescriptions,u as NoDescription,l as SvgIcon,p as TotamjungTheme,d as TotamjungThemeWithSvgIcon,s as VeryLongDescription,he as __namedExportsOrder,ge as default};
