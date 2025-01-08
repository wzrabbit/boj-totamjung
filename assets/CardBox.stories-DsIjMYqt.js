import{C as _}from"./CardBox-CnmikciM.js";import{f as n}from"./index-C_FWhylE.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./index-BpuMuliS.js";import"./styled-components.browser.esm-CkAH7aAm.js";const J={title:"components/common/CardBox",component:_,argTypes:{color:{description:"카드 상자의 색상입니다."},isTierHidden:{description:"내부 카드들의 티어를 숨길 지의 여부입니다."},cardRanks:{description:"연출에 사용할 내부 카드들의 랭크입니다. **1장 이상 3장 이하**를 사용할 수 있으며, 위에서부터 아래대로 차례대로 배치됩니다."},onOpenAnimationEnd:{description:"카드 상자가 열리는 애니메이션이 끝났을 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`CardBox`는 즉석 추첨 기능을 이루는 카드 상자 모양의 컴포넌트이며, 추첨 시작 버튼의 역할을 수행합니다. 클릭하면 카드 상자가 열리며 카드들이 뽑히고, 이후 사라지는 애니메이션이 실행됩니다. 애니메이션이 끝나면 `onOpenAnimationEnd`을 호출하여 부모 컴포넌트가 즉석 추첨의 다음 단계를 진행할 수 있도록 합니다."}}}},r={args:{color:"red",isTierHidden:!1,cardRanks:["bronze","silver","gold"],onOpenAnimationEnd:n()}},e={args:{color:"black",isTierHidden:!1,cardRanks:["platinum","diamond","ruby"],onOpenAnimationEnd:n()}},o={args:{color:"green",isTierHidden:!1,cardRanks:["bronze","bronze","bronze"],onOpenAnimationEnd:n()}},a={args:{color:"blue",isTierHidden:!1,cardRanks:["diamond","gold","diamond"],onOpenAnimationEnd:n()}},s={args:{color:"gold",isTierHidden:!1,cardRanks:["gold","gold","gold"],onOpenAnimationEnd:n()}},d={args:{color:"red",isTierHidden:!0,cardRanks:["bronze","silver","gold"],onOpenAnimationEnd:n()}},i={args:{color:"red",isTierHidden:!1,cardRanks:["unrated"],onOpenAnimationEnd:n()}},c={args:{color:"red",isTierHidden:!1,cardRanks:["unrated","unrated"],onOpenAnimationEnd:n()}};var t,l,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['bronze', 'silver', 'gold'],
    onOpenAnimationEnd: fn()
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'black',
    isTierHidden: false,
    cardRanks: ['platinum', 'diamond', 'ruby'],
    onOpenAnimationEnd: fn()
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,k,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'green',
    isTierHidden: false,
    cardRanks: ['bronze', 'bronze', 'bronze'],
    onOpenAnimationEnd: fn()
  }
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var H,O,R;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    isTierHidden: false,
    cardRanks: ['diamond', 'gold', 'diamond'],
    onOpenAnimationEnd: fn()
  }
}`,...(R=(O=a.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var b,A,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: 'gold',
    isTierHidden: false,
    cardRanks: ['gold', 'gold', 'gold'],
    onOpenAnimationEnd: fn()
  }
}`,...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var z,C,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: true,
    cardRanks: ['bronze', 'silver', 'gold'],
    onOpenAnimationEnd: fn()
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,x,v;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated'],
    onOpenAnimationEnd: fn()
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var G,y,D;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated', 'unrated'],
    onOpenAnimationEnd: fn()
  }
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const K=["Red","Black","Green","Blue","Gold","HiddenCard","SingleCard","DoubleCard"];export{e as Black,a as Blue,c as DoubleCard,s as Gold,o as Green,d as HiddenCard,r as Red,i as SingleCard,K as __namedExportsOrder,J as default};
