import{j as G}from"./jsx-runtime-DEdD30eg.js";import{d as C}from"./styled-components.browser.esm-CkAH7aAm.js";import{P as b}from"./ProblemCard-B8r0SIA4.js";import{r as m}from"./index-RYns6xqu.js";const H=C.div`
  display: flex;
  visibility: ${({$visible:r})=>r?"visible":"hidden"};
  overflow-x: visible;
  overflow-y: ${({$overflowY:r})=>r};
  justify-content: center;

  width: 100%;
  height: 100%;
`,W=C.div.attrs(({$gap:r,$width:e,$height:t})=>({style:{gap:`${r}px`,padding:`${r}px`,width:`${e}px`,height:`${t}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,I=C.div.attrs(({$gap:r})=>({style:{rowGap:`${r}px`}}))`
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,O=C.div.attrs(({$gap:r})=>({style:{columnGap:`${r}px`}}))`
  display: flex;
  overflow: visible;
  justify-content: center;

  width: 100%;
`,v=120,x=1/1.36,$=(r,e,t)=>{const{rowCount:i,columnCount:s,cardGridGap:n,cardWidth:o,innerGridWidth:a,innerGridHeight:u,isOverflow:c}=j(r,e,t);if(c)return{cardWidth:o,cardGridGap:n,innerGridWidth:a,innerGridHeight:u,isOverflow:c};const l=R(i,s,t);return{cardWidth:o,cardGridGap:n,rowCardCounts:l,isOverflow:c}},j=(r,e,t)=>{let i={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let d=1;d<=t;d+=1){const p=Math.ceil(t/d),{cardWidth:h,cardGridGap:w,isOverflow:y}=P(r,e,p,d);!y&&h>i.cardWidth&&(i={rowCount:p,columnCount:d,cardWidth:h,cardGridGap:w,isOverflow:y})}if(i.isOverflow){const d=Math.max(1,Math.floor((r-v/10)/(v*1.1)));i={rowCount:Math.ceil(t/d),columnCount:d,cardWidth:v,cardGridGap:v/10,isOverflow:!0}}const{rowCount:s,columnCount:n,cardWidth:o,cardGridGap:a,isOverflow:u}=i,c=o/x,l=n*o+(n+1)*a,f=s*c+(s+1)*a;return{rowCount:s,columnCount:n,cardWidth:o,cardGridGap:a,innerGridWidth:l,innerGridHeight:f,isOverflow:u}},P=(r,e,t,i)=>{const s=r*10/(11*i+1),n=e/(t*(1/x+.1)+.1),o=Math.max(v,Math.min(s,n)-1),a=o/10,u=o/x,c=i*o+(i+1)*a,l=t*u+(t+1)*a,f=c>r||l>e;return{cardWidth:o,cardGridGap:o/10,isOverflow:f}},R=(r,e,t)=>{const i=Array.from({length:r}).map(()=>e),s=r*e-t;for(let n=0;n<s;n+=1)i[r-n%r-1]-=1;return i},S=r=>{const{cardCount:e}=r,[t,i]=m.useState(e),[s,n]=m.useState(0),[o,a]=m.useState(0),[u,c]=m.useState(!1),l=m.useRef(null);return m.useEffect(()=>{i(t)},[e]),m.useLayoutEffect(()=>{const f=l.current;if(!f)return;const d=()=>{const{clientWidth:h,clientHeight:w}=f;n(h),a(w),c(!0)},p=new ResizeObserver(()=>{d()});return p.observe(l.current),()=>{p.disconnect()}},[]),{...$(s,o,t),isLoaded:u,cardGridRef:l}},g=r=>{const{problemInfos:e,isTierHidden:t,onCardHover:i}=r,s=e.length,n=S({cardCount:s}),{cardWidth:o,cardGridGap:a,isOverflow:u,isLoaded:c,cardGridRef:l}=n;let f=0;return G.jsx(H,{ref:l,$visible:c,$overflowY:u?"auto":"visible",children:u?G.jsx(W,{$width:n.innerGridWidth,$height:n.innerGridHeight,$gap:a,children:e.map(d=>G.jsx(b,{width:o,problemInfo:d,isTierHidden:!1,onHover:i},d.problemId))}):G.jsx(I,{$gap:a,children:n.rowCardCounts.map((d,p)=>G.jsx(O,{$gap:a,children:Array.from({length:d}).map(()=>{if(!e[f])return null;const h=e[f];return f+=1,G.jsx(b,{width:o,problemInfo:h,isTierHidden:t,onHover:i},h.problemId)})},p))})})};try{g.displayName="ProblemCardGrid",g.__docgenInfo={description:"",displayName:"ProblemCardGrid",props:{problemInfos:{defaultValue:null,description:"",name:"problemInfos",required:!0,type:{name:"ProblemInfo[]"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},onCardHover:{defaultValue:null,description:"",name:"onCardHover",required:!0,type:{name:"() => void"}}}}}catch{}export{g as P};
