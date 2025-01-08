import{j as a}from"./jsx-runtime-DEdD30eg.js";import{C,P as t}from"./index-BpuMuliS.js";import{m as b,d as r,l as i}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as Z}from"./index-RYns6xqu.js";import{f as o}from"./index-C_FWhylE.js";const nn=b`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,an=b`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  22% {
    transform: translateY(15%) scale(1); opacity: 1;
  }

  44% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  66% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  100% {
    transform: translateY(0) scale(0.8); opacity: 0;
  }
`,en=b`
  0% {
    transform: scale(1) rotate(0deg) translateY(0);
    opacity: 1;
  }

  50% {
    transform: scale(1) rotate(-30deg) translateY(-100%);
    opacity: 1;
  }

  100% {
    transform: scale(0.8) rotate(-30deg) translateY(-100%);
    opacity: 0;
  }
`,rn=b`
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(-15%);
  }

  40% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(-1000%);
  }
`,on=r.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${nn} 0.25s forwards;
`,J=r.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:n})=>n&&i`
      animation: ${an} 1.35s 1.6s forwards;
    `}

  ${({$isCardBoxOpening:n})=>!n&&i`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,sn=r.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:n})=>n.color.BLACK};

  ${J}:hover > & {
    box-shadow: 0 0 75px ${({theme:n})=>n.color.GOLD};
  }

  ${({theme:n,$isCardBoxOpening:s})=>s&&i`
      box-shadow: 0 0 75px ${n.color.GOLD};
    `};
`,tn=r.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,dn=r.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:n})=>!n&&i`
      opacity: 0;
    `}
`,O=r.img`
  position: absolute;
  top: ${({$top:n})=>n};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:n,$delay:s})=>n&&i`
      animation: ${rn} 1.5s ${s}s forwards;
    `}
`,cn=r.img`
  position: absolute;
  top: 9.15%;
  left: 0;

  width: 100%;
`,ln=r.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:n})=>n&&i`
      animation: ${en} 0.8s ease-in-out forwards;
    `}
`,R=n=>{const{color:s,isTierHidden:x,cardRanks:k,onOpenAnimationEnd:Q}=n,[e,W]=Z.useState(!1),h=k[0],$=k[1],A=k[2];return a.jsx(on,{children:a.jsxs(J,{onClick:()=>W(!0),$isCardBoxOpening:e,onAnimationEnd:E=>{e&&E.target===E.currentTarget&&Q()},children:[a.jsx(sn,{$isCardBoxOpening:e}),a.jsx(tn,{src:C.inside[s],draggable:!1}),a.jsxs(dn,{$isCardBoxOpening:e,children:[h&&a.jsx(O,{src:x?t.hidden:t[h],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"0",$delay:1}),$&&a.jsx(O,{src:x?t.hidden:t[$],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"4%",$delay:1.15}),A&&a.jsx(O,{src:x?t.hidden:t[A],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"8%",$delay:1.3})]}),a.jsx(cn,{src:C.front[s],draggable:!1,alt:""}),a.jsx(ln,{src:C.top[s],draggable:!1,alt:"",$isCardBoxOpening:e})]})})};try{R.displayName="CardBox",R.__docgenInfo={description:"",displayName:"CardBox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"gold"'}]}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},cardRanks:{defaultValue:null,description:"",name:"cardRanks",required:!0,type:{name:"[Rank] | [Rank, Rank] | [Rank, Rank, Rank]"}},onOpenAnimationEnd:{defaultValue:null,description:"",name:"onOpenAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}const bn={title:"components/common/CardBox",component:R,argTypes:{color:{description:"카드 상자의 색상입니다."},isTierHidden:{description:"내부 카드들의 티어를 숨길 지의 여부입니다."},cardRanks:{description:"연출에 사용할 내부 카드들의 랭크입니다. **1장 이상 3장 이하**를 사용할 수 있으며, 위에서부터 아래대로 차례대로 배치됩니다."},onOpenAnimationEnd:{description:"카드 상자가 열리는 애니메이션이 끝났을 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`CardBox`는 즉석 추첨 기능을 이루는 카드 상자 모양의 컴포넌트이며, 추첨 시작 버튼의 역할을 수행합니다. 클릭하면 카드 상자가 열리며 카드들이 뽑히고, 이후 사라지는 애니메이션이 실행됩니다. 애니메이션이 끝나면 `onOpenAnimationEnd`을 호출하여 부모 컴포넌트가 즉석 추첨의 다음 단계를 진행할 수 있도록 합니다."}}}},d={args:{color:"red",isTierHidden:!1,cardRanks:["bronze","silver","gold"],onOpenAnimationEnd:o()}},c={args:{color:"black",isTierHidden:!1,cardRanks:["platinum","diamond","ruby"],onOpenAnimationEnd:o()}},l={args:{color:"green",isTierHidden:!1,cardRanks:["bronze","bronze","bronze"],onOpenAnimationEnd:o()}},p={args:{color:"blue",isTierHidden:!1,cardRanks:["diamond","gold","diamond"],onOpenAnimationEnd:o()}},m={args:{color:"gold",isTierHidden:!1,cardRanks:["gold","gold","gold"],onOpenAnimationEnd:o()}},u={args:{color:"red",isTierHidden:!0,cardRanks:["bronze","silver","gold"],onOpenAnimationEnd:o()}},g={args:{color:"red",isTierHidden:!1,cardRanks:["unrated"],onOpenAnimationEnd:o()}},f={args:{color:"red",isTierHidden:!1,cardRanks:["unrated","unrated"],onOpenAnimationEnd:o()}};var y,B,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['bronze', 'silver', 'gold'],
    onOpenAnimationEnd: fn()
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var H,v,w;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: 'black',
    isTierHidden: false,
    cardRanks: ['platinum', 'diamond', 'ruby'],
    onOpenAnimationEnd: fn()
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,Y,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'green',
    isTierHidden: false,
    cardRanks: ['bronze', 'bronze', 'bronze'],
    onOpenAnimationEnd: fn()
  }
}`,...(j=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var _,z,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    isTierHidden: false,
    cardRanks: ['diamond', 'gold', 'diamond'],
    onOpenAnimationEnd: fn()
  }
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var G,I,L;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    color: 'gold',
    isTierHidden: false,
    cardRanks: ['gold', 'gold', 'gold'],
    onOpenAnimationEnd: fn()
  }
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var q,V,N;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: true,
    cardRanks: ['bronze', 'silver', 'gold'],
    onOpenAnimationEnd: fn()
  }
}`,...(N=(V=u.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var P,U,F;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated'],
    onOpenAnimationEnd: fn()
  }
}`,...(F=(U=g.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var K,M,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated', 'unrated'],
    onOpenAnimationEnd: fn()
  }
}`,...(X=(M=f.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};const xn=["Red","Black","Green","Blue","Gold","HiddenCard","SingleCard","DoubleCard"];export{c as Black,p as Blue,f as DoubleCard,m as Gold,l as Green,u as HiddenCard,d as Red,g as SingleCard,xn as __namedExportsOrder,bn as default};
