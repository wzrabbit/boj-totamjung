import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as j}from"./styled-components.browser.esm-CkAH7aAm.js";import{P as H}from"./ProblemCard-DDw-V780.js";import{r as h}from"./index-RYns6xqu.js";import"./index-CElCL35T.js";const Z=j.div`
  display: flex;
  visibility: ${({$visible:r})=>r?"visible":"hidden"};
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;

  width: 100%;
  height: 100%;
`,rr=j.div.attrs(({$gap:r,$width:o,$height:e})=>({style:{gap:`${r}px`,padding:`${r}px`,width:`${o}px`,height:`${e}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,er=j.div.attrs(({$gap:r})=>({style:{rowGap:`${r}px`}}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,tr=j.div.attrs(({$gap:r})=>({style:{columnGap:`${r}px`}}))`
  display: flex;
  justify-content: center;

  width: 100%;
`,C=120,P=1/1.36,or=(r,o,e)=>{const{rowCount:t,columnCount:d,cardGridGap:s,cardWidth:a,innerGridWidth:p,innerGridHeight:m,isOverflow:c}=nr(r,o,e);if(c)return{cardWidth:a,cardGridGap:s,innerGridWidth:p,innerGridHeight:m,isOverflow:c};const i=ar(t,d,e);return{cardWidth:a,cardGridGap:s,rowCardCounts:i,isOverflow:c}},nr=(r,o,e)=>{let t={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let l=1;l<=e;l+=1){const g=Math.ceil(e/l),{cardWidth:v,cardGridGap:W,isOverflow:$}=sr(r,o,g,l);!$&&v>t.cardWidth&&(t={rowCount:g,columnCount:l,cardWidth:v,cardGridGap:W,isOverflow:$})}if(t.isOverflow){const l=Math.max(1,Math.floor((r-C/10)/(C*1.1)));t={rowCount:Math.ceil(e/l),columnCount:l,cardWidth:C,cardGridGap:C/10,isOverflow:!0}}const{rowCount:d,columnCount:s,cardWidth:a,cardGridGap:p,isOverflow:m}=t,c=a/P,i=s*a+(s+1)*p,u=d*c+(d+1)*p;return{rowCount:d,columnCount:s,cardWidth:a,cardGridGap:p,innerGridWidth:i,innerGridHeight:u,isOverflow:m}},sr=(r,o,e,t)=>{const d=r*10/(11*t+1),s=o/(e*(1/P+.1)+.1),a=Math.max(C,Math.min(d,s)-1),p=a/10,m=a/P,c=t*a+(t+1)*p,i=e*m+(e+1)*p,u=c>r||i>o;return{cardWidth:a,cardGridGap:a/10,isOverflow:u}},ar=(r,o,e)=>{const t=Array.from({length:r}).map(()=>o),d=r*o-e;for(let s=0;s<d;s+=1)t[r-s%r-1]-=1;return t},dr=r=>{const{cardCount:o}=r,[e,t]=h.useState(o),[d,s]=h.useState(0),[a,p]=h.useState(0),[m,c]=h.useState(!1),i=h.useRef(null);return h.useEffect(()=>{t(e)},[o]),h.useLayoutEffect(()=>{const u=i.current;if(!u)return;const l=()=>{const{clientWidth:v,clientHeight:W}=u;s(v),p(W),c(!0)},g=new ResizeObserver(()=>{l()});return g.observe(i.current),()=>{g.disconnect()}},[]),{...or(d,a,e),isLoaded:m,cardGridRef:i}},O=r=>{const{problemInfos:o}=r,e=o.length,t=dr({cardCount:e}),{cardWidth:d,cardGridGap:s,isOverflow:a,isLoaded:p,cardGridRef:m}=t;let c=0;return n.jsx(Z,{ref:m,$visible:p,children:a?n.jsx(rr,{$width:t.innerGridWidth,$height:t.innerGridHeight,$gap:s,children:o.map(i=>n.jsx(H,{width:d,problemInfo:i,isHidden:!1},i.problemId))}):n.jsx(er,{$gap:s,children:t.rowCardCounts.map((i,u)=>n.jsx(tr,{$gap:s,children:Array.from({length:i}).map(()=>{if(!o[c])return null;const l=o[c];return c+=1,n.jsx(H,{width:d,problemInfo:l,isHidden:!1},l.problemId)})},u))})})};try{O.displayName="ProblemCardGrid",O.__docgenInfo={description:"",displayName:"ProblemCardGrid",props:{problemInfos:{defaultValue:null,description:"",name:"problemInfos",required:!0,type:{name:"ProblemInfo[]"}}}}}catch{}const ur={title:"components/QuickSlotMenu/ProblemCardGrid",component:O,argTypes:{problemInfos:{description:"카드 형태로 보여줄 문제들의 정보 목록입니다."}},parameters:{docs:{description:{component:"`ProblemCardGrid`는 즉석 추첨 결과를 의미하는 카드들을 그리드 형태로 보여주는 컴포넌트입니다. 그리드의 크기와 카드의 수에 따라 최적의 레이아웃을 보여주도록 자동으로 변경됩니다."}}}},f=r=>Array.from({length:r}).map((o,e)=>({problemId:4e4+e,title:`${4e4+e}번 문제`,tier:0})),y={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(6)}},b={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(1)}},G={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(2)}},x={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(5)}},I={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(10)}},S={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(25)}},w={decorators:[r=>n.jsx("div",{style:{height:"80vh"},children:n.jsx(r,{})})],args:{problemInfos:f(50)}};var _,R,M;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(6)
  }
}`,...(M=(R=y.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var E,z,L;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(1)
  }
}`,...(L=(z=b.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var A,B,T;G.parameters={...G.parameters,docs:{...(A=G.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(2)
  }
}`,...(T=(B=G.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var N,V,k;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(5)
  }
}`,...(k=(V=x.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var q,D,Q;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(10)
  }
}`,...(Q=(D=I.parameters)==null?void 0:D.docs)==null?void 0:Q.source}}};var F,J,K;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(25)
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  decorators: [Story => {
    return <div style={{
      height: '80vh'
    }}>
          <Story />
        </div>;
  }],
  args: {
    problemInfos: getSampleProblemInfos(50)
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const hr=["CardCount6","CardCount1","CardCount2","CardCount5","CardCount10","CardCount25","CardCount50"];export{b as CardCount1,I as CardCount10,G as CardCount2,S as CardCount25,x as CardCount5,w as CardCount50,y as CardCount6,hr as __namedExportsOrder,ur as default};
