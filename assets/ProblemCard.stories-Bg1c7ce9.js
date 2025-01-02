import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a as ae,s as se}from"./index-CElCL35T.js";import{r as S}from"./index-RYns6xqu.js";import{d}from"./styled-components.browser.esm-CkAH7aAm.js";const ie=()=>{const[e,n]=S.useState(0),[r,t]=S.useState(0);return{rotateX:e,rotateY:r,adjustCardTweak:a=>{const s=a.currentTarget.getBoundingClientRect(),p=a.clientX-s.left,R=((a.clientY-s.top)/s.height-.5)*20,oe=(p/s.width-.5)*-20;n(R),t(oe)},resetCardTweak:()=>{n(0),t(0)}}},de=""+new URL("unrated-card-iGk2lhrr.png",import.meta.url).href,le=""+new URL("bronze-card-Ctc25mzn.png",import.meta.url).href,ce=""+new URL("silver-card-Cgb8QXRF.png",import.meta.url).href,pe=""+new URL("gold-card-DjMsoKXy.png",import.meta.url).href,me=""+new URL("platinum-card-CZ601BWQ.png",import.meta.url).href,ue=""+new URL("diamond-card-Eub_to2I.png",import.meta.url).href,fe=""+new URL("ruby-card--BnHlKWe.png",import.meta.url).href,be=""+new URL("hidden-card-BS-zY2RF.png",import.meta.url).href,o={unrated:de,bronze:le,silver:ce,gold:pe,platinum:me,diamond:ue,ruby:fe,hidden:be},ge=(e,n)=>n?o.hidden:e>=1&&e<=5?o.bronze:e>=6&&e<=10?o.silver:e>=11&&e<=15?o.gold:e>=16&&e<=20?o.platinum:e>=21&&e<=25?o.diamond:e>=26&&e<=30?o.ruby:o.unrated,Ie=(e,n,r)=>n?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,he=d.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,Ee=d.div.attrs(({$rotateX:e,$rotateY:n,$width:r})=>({style:{transform:`perspective(${r*3}px) rotateX(${e}deg) rotateY(${n}deg)`,width:`${r}px`,height:`${r*1.36}px`,borderRadius:`${r*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:e})=>e.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:e,$isHidden:n})=>`url(${ge(e,n)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  }
`,we=d.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,Te=d.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,Re=d.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isHidden:n,theme:r})=>Ie(e,n,r)};
  font-family: 'Cafe24ClassicType';
`,Ae=d.div.attrs(({$cardWidth:e,theme:n})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${n.color.WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,He=d.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    115deg,
    transparent 32%,
    rgba(250, 215, 110, 0.3) 42%,
    rgba(135, 50, 255, 0.3) 53%,
    transparent 63%
  );
  background-size: 150% 150%;

  mix-blend-mode: color-dodge;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`,A=e=>{const{problemInfo:n,isHidden:r,width:t}=e,{problemId:c,title:T,tier:a}=n,{rotateX:s,rotateY:p,adjustCardTweak:H,resetCardTweak:R}=ie();return i.jsx(he,{children:i.jsx(Ee,{$width:t,$tier:a,$isHidden:r,$rotateX:s,$rotateY:p,onMouseMove:H,onMouseOut:R,children:i.jsxs(we,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${c}`,"aria-label":`문제 번호 ${c}번 ${T}`,$cardWidth:t,children:[i.jsx(Te,{$cardWidth:t,src:r?ae.hidden:se[a],alt:"",draggable:!1}),i.jsx(Re,{$cardWidth:t,$tier:a,$isHidden:r,children:`#${c}`}),i.jsx(Ae,{$cardWidth:t,children:T}),i.jsx(He,{$movement:s+p})]})})})};try{A.displayName="ProblemCard",A.__docgenInfo={description:"",displayName:"ProblemCard",props:{problemInfo:{defaultValue:null,description:"",name:"problemInfo",required:!0,type:{name:"ProblemInfo"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}}}}}catch{}const ve={title:"components/ProblemCard",component:A,argTypes:{problemInfo:{description:"정보를 표시할 문제의 정보입니다."},isHidden:{description:"난이도를 숨길 지의 여부입니다."},width:{description:"카드의 가로 길이입니다. 단위는 px입니다."}},parameters:{docs:{description:{component:"`ProblemCard`는 즉석 추첨 결과에서 나온 결과에서 하나의 문제를 시각적으로 보여주는 카드 모양의 컴포넌트입니다."}}}},m={args:{problemInfo:{problemId:1223,title:"마법의 돌",tier:0},isHidden:!1,width:240}},u={args:{problemInfo:{problemId:1237,title:"정ㅋ벅ㅋ",tier:31},isHidden:!1,width:240}},f={args:{problemInfo:{problemId:29729,title:"가변 배열",tier:3},isHidden:!0,width:240}},b={args:{problemInfo:{problemId:30403,title:"무지개 만들기",tier:4},isHidden:!1,width:240}},g={args:{problemInfo:{problemId:2348,title:"내가 무릎을 꿇은 것은 추진력을 얻기 위함이었다",tier:10},isHidden:!1,width:240}},I={args:{problemInfo:{problemId:1313,title:"합성소수",tier:12},isHidden:!1,width:240}},h={args:{problemInfo:{problemId:27470,title:"멋진 부분집합",tier:16},isHidden:!1,width:240}},E={args:{problemInfo:{problemId:31440,title:"히스토그램에서 가장 큰 직사각형과 쿼리 2",tier:23},isHidden:!1,width:240}},w={args:{problemInfo:{problemId:31442,title:"좋은 수열",tier:26},isHidden:!1,width:240}},l={args:{problemInfo:{problemId:15641,title:"SUPER SUPER BINARY SEARCH DELUXE 2.5: THE LEGEND OF THE GOLDEN MAZASSUMNIDA, EPISODE 2: THE MAZWAETL UNIVERSE, PART 2: THE PARALLEL UNIVERSE AND THE LOST MAZASSUMNIDA: GAME OF THE YEAR EDITION ",tier:31},isHidden:!1,width:240}};var x,y,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 1223,
      title: '마법의 돌',
      tier: 0
    },
    isHidden: false,
    width: 240
  }
}`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,L,$;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 1237,
      title: '정ㅋ벅ㅋ',
      tier: 31
    },
    isHidden: false,
    width: 240
  }
}`,...($=(L=u.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var N,k,P;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 29729,
      title: '가변 배열',
      tier: 3
    },
    isHidden: true,
    width: 240
  }
}`,...(P=(k=f.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var U,D,M;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 30403,
      title: '무지개 만들기',
      tier: 4
    },
    isHidden: false,
    width: 240
  }
}`,...(M=(D=b.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var O,_,j;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 2348,
      title: '내가 무릎을 꿇은 것은 추진력을 얻기 위함이었다',
      tier: 10
    },
    isHidden: false,
    width: 240
  }
}`,...(j=(_=g.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var B,Y,z;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 1313,
      title: '합성소수',
      tier: 12
    },
    isHidden: false,
    width: 240
  }
}`,...(z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,X,V;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 27470,
      title: '멋진 부분집합',
      tier: 16
    },
    isHidden: false,
    width: 240
  }
}`,...(V=(X=h.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var Z,F,W;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 31440,
      title: '히스토그램에서 가장 큰 직사각형과 쿼리 2',
      tier: 23
    },
    isHidden: false,
    width: 240
  }
}`,...(W=(F=E.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var K,q,Q;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 31442,
      title: '좋은 수열',
      tier: 26
    },
    isHidden: false,
    width: 240
  }
}`,...(Q=(q=w.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var J,ee,re,ne,te;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    problemInfo: {
      problemId: 15641,
      title: 'SUPER SUPER BINARY SEARCH DELUXE 2.5: THE LEGEND OF THE GOLDEN MAZASSUMNIDA, EPISODE 2: THE MAZWAETL UNIVERSE, PART 2: THE PARALLEL UNIVERSE AND THE LOST MAZASSUMNIDA: GAME OF THE YEAR EDITION ',
      tier: 31
    },
    isHidden: false,
    width: 240
  }
}`,...(re=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"문제 제목의 길이가 너무 길 경우 최대 2줄까지만 보여집니다.",...(te=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};const Le=["Unrated","NotRatable","Hidden","Bronze","Silver","Gold","Platinum","Diamond","Ruby","LongTitle"];export{b as Bronze,E as Diamond,I as Gold,f as Hidden,l as LongTitle,u as NotRatable,h as Platinum,w as Ruby,g as Silver,m as Unrated,Le as __namedExportsOrder,ve as default};
