import{j as G}from"./jsx-runtime-DEdD30eg.js";import{d as w}from"./styled-components.browser.esm-CkAH7aAm.js";import{P as g}from"./ProblemCard-B8r0SIA4.js";import{r as m}from"./index-RYns6xqu.js";const H=w.div`
  display: flex;
  visibility: ${({$visible:r})=>r?"visible":"hidden"};
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;

  width: 100%;
  height: 100%;
`,W=w.div.attrs(({$gap:r,$width:t,$height:e})=>({style:{gap:`${r}px`,padding:`${r}px`,width:`${t}px`,height:`${e}px`}}))`
  display: inline-flex;
  flex-wrap: wrap;
`,I=w.div.attrs(({$gap:r})=>({style:{rowGap:`${r}px`}}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`,O=w.div.attrs(({$gap:r})=>({style:{columnGap:`${r}px`}}))`
  display: flex;
  justify-content: center;

  width: 100%;
`,C=120,x=1/1.36,$=(r,t,e)=>{const{rowCount:i,columnCount:s,cardGridGap:n,cardWidth:d,innerGridWidth:a,innerGridHeight:p,isOverflow:c}=j(r,t,e);if(c)return{cardWidth:d,cardGridGap:n,innerGridWidth:a,innerGridHeight:p,isOverflow:c};const l=R(i,s,e);return{cardWidth:d,cardGridGap:n,rowCardCounts:l,isOverflow:c}},j=(r,t,e)=>{let i={rowCount:0,columnCount:0,cardWidth:0,cardGridGap:0,isOverflow:!0};for(let o=1;o<=e;o+=1){const f=Math.ceil(e/o),{cardWidth:h,cardGridGap:v,isOverflow:y}=P(r,t,f,o);!y&&h>i.cardWidth&&(i={rowCount:f,columnCount:o,cardWidth:h,cardGridGap:v,isOverflow:y})}if(i.isOverflow){const o=Math.max(1,Math.floor((r-C/10)/(C*1.1)));i={rowCount:Math.ceil(e/o),columnCount:o,cardWidth:C,cardGridGap:C/10,isOverflow:!0}}const{rowCount:s,columnCount:n,cardWidth:d,cardGridGap:a,isOverflow:p}=i,c=d/x,l=n*d+(n+1)*a,u=s*c+(s+1)*a;return{rowCount:s,columnCount:n,cardWidth:d,cardGridGap:a,innerGridWidth:l,innerGridHeight:u,isOverflow:p}},P=(r,t,e,i)=>{const s=r*10/(11*i+1),n=t/(e*(1/x+.1)+.1),d=Math.max(C,Math.min(s,n)-1),a=d/10,p=d/x,c=i*d+(i+1)*a,l=e*p+(e+1)*a,u=c>r||l>t;return{cardWidth:d,cardGridGap:d/10,isOverflow:u}},R=(r,t,e)=>{const i=Array.from({length:r}).map(()=>t),s=r*t-e;for(let n=0;n<s;n+=1)i[r-n%r-1]-=1;return i},S=r=>{const{cardCount:t}=r,[e,i]=m.useState(t),[s,n]=m.useState(0),[d,a]=m.useState(0),[p,c]=m.useState(!1),l=m.useRef(null);return m.useEffect(()=>{i(e)},[t]),m.useLayoutEffect(()=>{const u=l.current;if(!u)return;const o=()=>{const{clientWidth:h,clientHeight:v}=u;n(h),a(v),c(!0)},f=new ResizeObserver(()=>{o()});return f.observe(l.current),()=>{f.disconnect()}},[]),{...$(s,d,e),isLoaded:p,cardGridRef:l}},b=r=>{const{problemInfos:t,isTierHidden:e,onCardHover:i}=r,s=t.length,n=S({cardCount:s}),{cardWidth:d,cardGridGap:a,isOverflow:p,isLoaded:c,cardGridRef:l}=n;let u=0;return G.jsx(H,{ref:l,$visible:c,children:p?G.jsx(W,{$width:n.innerGridWidth,$height:n.innerGridHeight,$gap:a,children:t.map(o=>G.jsx(g,{width:d,problemInfo:o,isTierHidden:!1,onHover:i},o.problemId))}):G.jsx(I,{$gap:a,children:n.rowCardCounts.map((o,f)=>G.jsx(O,{$gap:a,children:Array.from({length:o}).map(()=>{if(!t[u])return null;const h=t[u];return u+=1,G.jsx(g,{width:d,problemInfo:h,isTierHidden:e,onHover:i},h.problemId)})},f))})})};try{b.displayName="ProblemCardGrid",b.__docgenInfo={description:"",displayName:"ProblemCardGrid",props:{problemInfos:{defaultValue:null,description:"",name:"problemInfos",required:!0,type:{name:"ProblemInfo[]"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},onCardHover:{defaultValue:null,description:"",name:"onCardHover",required:!0,type:{name:"() => void"}}}}}catch{}export{b as P};
