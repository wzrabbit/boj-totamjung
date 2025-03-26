import{j as G}from"./jsx-runtime-DEdD30eg.js";import{d as C}from"./styled-components.browser.esm-CkAH7aAm.js";import{P as g}from"./ProblemCard-B8r0SIA4.js";import{r as m}from"./index-RYns6xqu.js";const H=C.div`
  display: flex;
  visibility: ${({$visible:r})=>r?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:r})=>r};
  justify-content: center;

  width: 100%;
  height: 100%;
`,W=C.div.attrs(({$gap:r,$width:t,$height:e})=>({style:{gap:`${r}px`,padding:`${r}px`,width:`${t}px`,height:`${e}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,O=C.div.attrs(({$gap:r})=>({style:{rowGap:`${r}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,$=C.div.attrs(({$gap:r})=>({style:{columnGap:`${r}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,v=120,x=1/1.36,I=(r,t,e)=>{const{rowCount:i,columnCount:s,cardGridGap:n,cardWidth:o,innerGridWidth:a,innerGridHeight:u,isOverflow:c}=j(r,t,e);if(c)return{cardWidth:o,cardGridGap:n,innerGridWidth:a,innerGridHeight:u,isOverflow:c};const l=R(i,s,e);return{cardWidth:o,cardGridGap:n,rowCardCounts:l,isOverflow:c}},j=(r,t,e)=>{let i={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let d=1;d<=e;d+=1){const h=Math.ceil(e/d),{cardWidth:f,cardGridGap:w,isOverflow:y}=P(r,t,h,d);!y&&f>i.cardWidth&&(i={rowCount:h,columnCount:d,cardWidth:f,cardGridGap:w,isOverflow:y})}if(i.isOverflow){const d=Math.max(1,Math.floor((r-v/10)/(v*1.1)));i={rowCount:Math.ceil(e/d),columnCount:d,cardWidth:v,cardGridGap:v/10,isOverflow:!0}}const{rowCount:s,columnCount:n,cardWidth:o,cardGridGap:a,isOverflow:u}=i,c=o/x,l=n*o+(n+1)*a,p=s*c+(s+1)*a;return{rowCount:s,columnCount:n,cardWidth:o,cardGridGap:a,innerGridWidth:l,innerGridHeight:p,isOverflow:u}},P=(r,t,e,i)=>{const s=r*10/(11*i+1),n=t/(e*(1/x+.1)+.1),o=Math.max(v,Math.min(s,n)-1),a=o/10,u=o/x,c=i*o+(i+1)*a,l=e*u+(e+1)*a,p=c>r||l>t;return{cardWidth:o,cardGridGap:o/10,isOverflow:p}},R=(r,t,e)=>{const i=Array.from({length:r}).map(()=>t),s=r*t-e;for(let n=0;n<s;n+=1)i[r-n%r-1]-=1;return i},S=r=>{const{cardCount:t}=r,[e,i]=m.useState(t),[s,n]=m.useState(0),[o,a]=m.useState(0),[u,c]=m.useState(!1),l=m.useRef(null);return m.useEffect(()=>{i(e)},[t]),m.useLayoutEffect(()=>{const p=l.current;if(!p)return;const d=()=>{const{clientWidth:f,clientHeight:w}=p;n(f),a(w),c(!0)},h=new ResizeObserver(()=>{d()});return h.observe(l.current),()=>{h.disconnect()}},[]),{...I(s,o,e),isLoaded:u,cardGridRef:l}},b=r=>{const{problemInfos:t,isTierHidden:e,onCardHover:i}=r,s=t.length,n=S({cardCount:s}),{cardWidth:o,cardGridGap:a,isOverflow:u,isLoaded:c,cardGridRef:l}=n;let p=0;return G.jsx(H,{ref:l,$visible:c,$overflowY:u?"auto":"visible",children:u?G.jsx(W,{$width:n.innerGridWidth,$height:n.innerGridHeight,$gap:a,children:t.map(d=>G.jsx(g,{width:o,problemInfo:d,isTierHidden:![0,31].includes(d.tier)&&e,onHover:i},d.problemId))}):G.jsx(O,{$gap:a,children:n.rowCardCounts.map((d,h)=>G.jsx($,{$gap:a,children:Array.from({length:d}).map(()=>{if(!t[p])return null;const f=t[p];return p+=1,G.jsx(g,{width:o,problemInfo:f,isTierHidden:![0,31].includes(f.tier)&&e,onHover:i},f.problemId)})},h))})})};try{b.displayName="ProblemCardGrid",b.__docgenInfo={description:"",displayName:"ProblemCardGrid",props:{problemInfos:{defaultValue:null,description:"",name:"problemInfos",required:!0,type:{name:"ProblemInfo[]"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},onCardHover:{defaultValue:null,description:"",name:"onCardHover",required:!0,type:{name:"() => void"}}}}}catch{}export{b as P};
