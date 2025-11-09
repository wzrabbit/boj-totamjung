import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as g,s as T}from"./index-CElCL35T.js";import{r as x}from"./index--qcDGAq6.js";import{d as s}from"./styled-components.browser.esm-CIS6JKSM.js";import{P as a}from"./index-BpuMuliS.js";const h=()=>{const[e,t]=x.useState(0),[r,o]=x.useState(0);return{rotateX:e,rotateY:r,adjustCardTweak:l=>{const n=l.currentTarget.getBoundingClientRect(),c=l.clientX-n.left,p=((l.clientY-n.top)/n.height-.5)*20,f=(c/n.width-.5)*-20;t(p),o(f)},resetCardTweak:()=>{t(0),o(0)}}},v=(e,t)=>t?a.hidden:e>=1&&e<=5?a.bronze:e>=6&&e<=10?a.silver:e>=11&&e<=15?a.gold:e>=16&&e<=20?a.platinum:e>=21&&e<=25?a.diamond:e>=26&&e<=30?a.ruby:a.unrated,$=(e,t,r)=>t?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,y=s.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,w=s.div.attrs(({$rotateX:e,$rotateY:t,$width:r})=>({style:{transform:`perspective(${r*3}px) rotateX(${e}deg) rotateY(${t}deg)`,width:`${r}px`,height:`${r*1.36}px`,borderRadius:`${r*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:e})=>e.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:e,$isTierHidden:t})=>`url(${v(e,t)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  }
`,k=s.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,C=s.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,R=s.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`,lineHeight:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isTierHidden:t,theme:r})=>$(e,t,r)};
  font-family: 'Cafe24ClassicType';
`,A=s.div.attrs(({$cardWidth:e,theme:t})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${t.color.WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,H=s.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
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
`,b=e=>{const{problemInfo:t,isTierHidden:r,width:o,onHover:m}=e,{problemId:d,title:l,tier:n}=t,{rotateX:c,rotateY:u,adjustCardTweak:p,resetCardTweak:f}=h();return i.jsx(y,{children:i.jsx(w,{$width:o,$tier:n,$isTierHidden:r,$rotateX:c,$rotateY:u,onMouseMove:p,onMouseOut:f,onMouseOver:m,children:i.jsxs(k,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${d}`,"aria-label":`문제 번호 ${d}번 ${l}`,$cardWidth:o,children:[i.jsx(C,{$cardWidth:o,src:r?g.hidden:T[n],alt:"",draggable:!1}),i.jsx(R,{$cardWidth:o,$tier:n,$isTierHidden:r,children:`#${d}`}),i.jsx(A,{$cardWidth:o,children:l}),i.jsx(H,{$movement:c+u})]})})})};try{b.displayName="ProblemCard",b.__docgenInfo={description:"",displayName:"ProblemCard",props:{problemInfo:{defaultValue:null,description:"",name:"problemInfo",required:!0,type:{name:"ProblemInfo"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"() => void"}}}}}catch{}export{b as P};
