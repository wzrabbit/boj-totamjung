import{C as D}from"./CardBox-DVyYAX0k.js";import{f as n}from"./index-BAc7KiQ7.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-BpuMuliS.js";import"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";const K={title:"components/common/CardBox",component:D,argTypes:{color:{description:"카드 상자의 색상입니다."},isTierHidden:{description:"내부 카드들의 티어를 숨길 지의 여부입니다."},cardRanks:{description:"연출에 사용할 내부 카드들의 랭크입니다. **1장 이상 3장 이하**를 사용할 수 있으며, 위에서부터 아래대로 차례대로 배치됩니다."},onOpenAnimationEnd:{description:"카드 상자가 열리는 애니메이션이 끝났을 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`CardBox`는 즉석 추첨 기능을 이루는 카드 상자 모양의 컴포넌트이며, 추첨 시작 버튼의 역할을 수행합니다. 클릭하면 카드 상자가 열리며 카드들이 뽑히고, 이후 사라지는 애니메이션이 실행됩니다. 애니메이션이 끝나면 `onOpenAnimationEnd`을 호출하여 부모 컴포넌트가 즉석 추첨의 다음 단계를 진행할 수 있도록 합니다."}}}},r={args:{color:"red",isTierHidden:!1,cardRanks:["bronze","silver","gold"],onFirstClick:n(),onOpenAnimationEnd:n()}},e={args:{color:"black",isTierHidden:!1,cardRanks:["platinum","diamond","ruby"],onFirstClick:n(),onOpenAnimationEnd:n()}},o={args:{color:"green",isTierHidden:!1,cardRanks:["bronze","bronze","bronze"],onFirstClick:n(),onOpenAnimationEnd:n()}},a={args:{color:"blue",isTierHidden:!1,cardRanks:["diamond","gold","diamond"],onFirstClick:n(),onOpenAnimationEnd:n()}},s={args:{color:"gold",isTierHidden:!1,cardRanks:["gold","gold","gold"],onFirstClick:n(),onOpenAnimationEnd:n()}},i={args:{color:"red",isTierHidden:!0,cardRanks:["bronze","silver","gold"],onFirstClick:n(),onOpenAnimationEnd:n()}},d={args:{color:"red",isTierHidden:!1,cardRanks:["unrated"],onFirstClick:n(),onOpenAnimationEnd:n()}},c={args:{color:"red",isTierHidden:!1,cardRanks:["unrated","unrated"],onFirstClick:n(),onOpenAnimationEnd:n()}};var t,l,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['bronze', 'silver', 'gold'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'black',
    isTierHidden: false,
    cardRanks: ['platinum', 'diamond', 'ruby'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var k,f,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: 'green',
    isTierHidden: false,
    cardRanks: ['bronze', 'bronze', 'bronze'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var E,H,O;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    isTierHidden: false,
    cardRanks: ['diamond', 'gold', 'diamond'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(O=(H=a.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var R,b,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    color: 'gold',
    isTierHidden: false,
    cardRanks: ['gold', 'gold', 'gold'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(A=(b=s.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var T,F,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: true,
    cardRanks: ['bronze', 'silver', 'gold'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(z=(F=i.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var S,B,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(x=(B=d.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var v,G,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated', 'unrated'],
    onFirstClick: fn(),
    onOpenAnimationEnd: fn()
  }
}`,...(y=(G=c.parameters)==null?void 0:G.docs)==null?void 0:y.source}}};const L=["Red","Black","Green","Blue","Gold","HiddenCard","SingleCard","DoubleCard"];export{e as Black,a as Blue,c as DoubleCard,s as Gold,o as Green,i as HiddenCard,r as Red,d as SingleCard,L as __namedExportsOrder,K as default};
