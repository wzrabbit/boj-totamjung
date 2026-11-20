import{j as w}from"./jsx-runtime-Cf8x2fCZ.js";import{d as g}from"./styled-components.browser.esm-CIS6JKSM.js";import{P as y}from"./ProblemCard-CYm8tiBu.js";import{r as G}from"./index--qcDGAq6.js";import{u as W}from"./useRovingFocus-C_x1-dB5.js";const I=g.div`
  display: flex;
  visibility: ${({$visible:r})=>r?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:r})=>r};
  justify-content: center;

  width: 100%;
  height: 100%;
`,O=g.div.attrs(({$gap:r,$width:t,$height:e})=>({style:{gap:`${r}px`,padding:`${r}px`,width:`${t}px`,height:`${e}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,$=g.div.attrs(({$gap:r})=>({style:{rowGap:`${r}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,P=g.div.attrs(({$gap:r})=>({style:{columnGap:`${r}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,C=120,x=1/1.36,j=(r,t,e)=>{const{rowCount:i,columnCount:a,cardGridGap:n,cardWidth:o,innerGridWidth:s,innerGridHeight:p,isOverflow:c}=S(r,t,e);if(c)return{cardWidth:o,cardGridGap:n,innerGridWidth:s,innerGridHeight:p,isOverflow:c};const l=T(i,a,e);return{cardWidth:o,cardGridGap:n,rowCardCounts:l,isOverflow:c}},S=(r,t,e)=>{let i={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let d=1;d<=e;d+=1){const u=Math.ceil(e/d),{cardWidth:m,cardGridGap:h,isOverflow:v}=_(r,t,u,d);!v&&m>i.cardWidth&&(i={rowCount:u,columnCount:d,cardWidth:m,cardGridGap:h,isOverflow:v})}if(i.isOverflow){const d=Math.max(1,Math.floor((r-C/10)/(C*1.1)));i={rowCount:Math.ceil(e/d),columnCount:d,cardWidth:C,cardGridGap:C/10,isOverflow:!0}}const{rowCount:a,columnCount:n,cardWidth:o,cardGridGap:s,isOverflow:p}=i,c=o/x,l=n*o+(n+1)*s,f=a*c+(a+1)*s;return{rowCount:a,columnCount:n,cardWidth:o,cardGridGap:s,innerGridWidth:l,innerGridHeight:f,isOverflow:p}},_=(r,t,e,i)=>{const a=r*10/(11*i+1),n=t/(e*(1/x+.1)+.1),o=Math.max(C,Math.min(a,n)-1),s=o/10,p=o/x,c=i*o+(i+1)*s,l=e*p+(e+1)*s,f=c>r||l>t;return{cardWidth:o,cardGridGap:o/10,isOverflow:f}},T=(r,t,e)=>{const i=Array.from({length:r}).map(()=>t),a=r*t-e;for(let n=0;n<a;n+=1)i[r-n%r-1]-=1;return i},M=r=>{const{cardCount:t}=r,[e,i]=G.useState(t),[a,n]=G.useState(0),[o,s]=G.useState(0),[p,c]=G.useState(!1),l=G.useRef(null);return G.useEffect(()=>{i(e)},[t]),G.useLayoutEffect(()=>{const f=l.current;if(!f)return;const d=()=>{const{clientWidth:m,clientHeight:h}=f;n(m),s(h),c(!0)},u=new ResizeObserver(()=>{d()});return u.observe(l.current),()=>{u.disconnect()}},[]),{...j(a,o,e),isLoaded:p,cardGridRef:l}},b=r=>{const{problemInfos:t,isTierHidden:e,onCardHover:i}=r,a=t.length,n=M({cardCount:a}),{cardWidth:o,cardGridGap:s,isOverflow:p,isLoaded:c,cardGridRef:l}=n,{getRovingProps:f}=W({count:a});let d=0;return w.jsx(I,{ref:l,$visible:c,$overflowY:p?"auto":"visible",children:p?w.jsx(O,{$width:n.innerGridWidth,$height:n.innerGridHeight,$gap:s,children:t.map(u=>{const{ref:m,...h}=f(d),v={...h,linkButtonRef:m};return d+=1,w.jsx(y,{width:o,problemInfo:u,isTierHidden:![0,31].includes(u.tier)&&e,onHover:i,...v},u.problemId)})}):w.jsx($,{$gap:s,children:n.rowCardCounts.map((u,m)=>w.jsx(P,{$gap:s,children:Array.from({length:u}).map(()=>{if(!t[d])return null;const h=t[d],{ref:v,...H}=f(d),R={...H,linkButtonRef:v};return d+=1,w.jsx(y,{width:o,problemInfo:h,isTierHidden:![0,31].includes(h.tier)&&e,onHover:i,...R},h.problemId)})},m))})})};try{b.displayName="ProblemCardGrid",b.__docgenInfo={description:"",displayName:"ProblemCardGrid",props:{problemInfos:{defaultValue:null,description:"",name:"problemInfos",required:!0,type:{name:"ProblemInfo[]"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},onCardHover:{defaultValue:null,description:"",name:"onCardHover",required:!0,type:{name:"() => void"}}}}}catch{}export{b as P};
