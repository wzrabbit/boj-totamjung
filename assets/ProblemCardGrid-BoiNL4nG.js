import{j as h}from"./jsx-runtime-DEdD30eg.js";import{d as w}from"./styled-components.browser.esm-CkAH7aAm.js";import{P as v}from"./ProblemCard-DxEtGCCT.js";import{r as p}from"./index-RYns6xqu.js";const W=w.div`
  display: flex;
  visibility: ${({$visible:t})=>t?"visible":"hidden"};
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;

  width: 100%;
  height: 100%;
`,I=w.div.attrs(({$gap:t,$width:e,$height:i})=>({style:{gap:`${t}px`,padding:`${t}px`,width:`${e}px`,height:`${i}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,O=w.div.attrs(({$gap:t})=>({style:{rowGap:`${t}px`}}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,$=w.div.attrs(({$gap:t})=>({style:{columnGap:`${t}px`}}))`
  display: flex;
  justify-content: center;

  width: 100%;
`,G=120,g=1/1.36,j=(t,e,i)=>{const{rowCount:r,columnCount:o,cardGridGap:n,cardWidth:d,innerGridWidth:l,innerGridHeight:u,isOverflow:s}=H(t,e,i);if(s)return{cardWidth:d,cardGridGap:n,innerGridWidth:l,innerGridHeight:u,isOverflow:s};const a=R(r,o,i);return{cardWidth:d,cardGridGap:n,rowCardCounts:a,isOverflow:s}},H=(t,e,i)=>{let r={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let c=1;c<=i;c+=1){const m=Math.ceil(i/c),{cardWidth:C,cardGridGap:x,isOverflow:y}=P(t,e,m,c);!y&&C>r.cardWidth&&(r={rowCount:m,columnCount:c,cardWidth:C,cardGridGap:x,isOverflow:y})}if(r.isOverflow){const c=Math.max(1,Math.floor((t-G/10)/(G*1.1)));r={rowCount:Math.ceil(i/c),columnCount:c,cardWidth:G,cardGridGap:G/10,isOverflow:!0}}const{rowCount:o,columnCount:n,cardWidth:d,cardGridGap:l,isOverflow:u}=r,s=d/g,a=n*d+(n+1)*l,f=o*s+(o+1)*l;return{rowCount:o,columnCount:n,cardWidth:d,cardGridGap:l,innerGridWidth:a,innerGridHeight:f,isOverflow:u}},P=(t,e,i,r)=>{const o=t*10/(11*r+1),n=e/(i*(1/g+.1)+.1),d=Math.max(G,Math.min(o,n)-1),l=d/10,u=d/g,s=r*d+(r+1)*l,a=i*u+(i+1)*l,f=s>t||a>e;return{cardWidth:d,cardGridGap:d/10,isOverflow:f}},R=(t,e,i)=>{const r=Array.from({length:t}).map(()=>e),o=t*e-i;for(let n=0;n<o;n+=1)r[t-n%t-1]-=1;return r},S=t=>{const{cardCount:e}=t,[i,r]=p.useState(e),[o,n]=p.useState(0),[d,l]=p.useState(0),[u,s]=p.useState(!1),a=p.useRef(null);return p.useEffect(()=>{r(i)},[e]),p.useLayoutEffect(()=>{const f=a.current;if(!f)return;const c=()=>{const{clientWidth:C,clientHeight:x}=f;n(C),l(x),s(!0)},m=new ResizeObserver(()=>{c()});return m.observe(a.current),()=>{m.disconnect()}},[]),{...j(o,d,i),isLoaded:u,cardGridRef:a}},b=t=>{const{problemInfos:e}=t,i=e.length,r=S({cardCount:i}),{cardWidth:o,cardGridGap:n,isOverflow:d,isLoaded:l,cardGridRef:u}=r;let s=0;return h.jsx(W,{ref:u,$visible:l,children:d?h.jsx(I,{$width:r.innerGridWidth,$height:r.innerGridHeight,$gap:n,children:e.map(a=>h.jsx(v,{width:o,problemInfo:a,isHidden:!1},a.problemId))}):h.jsx(O,{$gap:n,children:r.rowCardCounts.map((a,f)=>h.jsx($,{$gap:n,children:Array.from({length:a}).map(()=>{if(!e[s])return null;const c=e[s];return s+=1,h.jsx(v,{width:o,problemInfo:c,isHidden:!1},c.problemId)})},f))})})};try{b.displayName="ProblemCardGrid",b.__docgenInfo={description:"",displayName:"ProblemCardGrid",props:{problemInfos:{defaultValue:null,description:"",name:"problemInfos",required:!0,type:{name:"ProblemInfo[]"}}}}}catch{}export{b as P};
