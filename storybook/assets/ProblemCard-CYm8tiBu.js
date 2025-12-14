import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as h,s as v}from"./index-CElCL35T.js";import{r as b}from"./index--qcDGAq6.js";import{d as i}from"./styled-components.browser.esm-CIS6JKSM.js";import{P as o}from"./index-BpuMuliS.js";const $=()=>{const[e,t]=b.useState(0),[r,n]=b.useState(0);return{rotateX:e,rotateY:r,adjustCardTweak:l=>{const s=l.currentTarget.getBoundingClientRect(),d=l.clientX-s.left,c=((l.clientY-s.top)/s.height-.5)*20,u=(d/s.width-.5)*-20;t(c),n(u)},resetCardTweak:()=>{t(0),n(0)}}},w=(e,t)=>t?o.hidden:e>=1&&e<=5?o.bronze:e>=6&&e<=10?o.silver:e>=11&&e<=15?o.gold:e>=16&&e<=20?o.platinum:e>=21&&e<=25?o.diamond:e>=26&&e<=30?o.ruby:o.unrated,k=(e,t,r)=>t?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,R=i.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,C=i.div.attrs(({$rotateX:e,$rotateY:t,$width:r})=>({style:{transform:`perspective(${r*3}px) rotateX(${e}deg) rotateY(${t}deg)`,width:`${r}px`,height:`${r*1.36}px`,borderRadius:`${r*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:e})=>e.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:e,$isTierHidden:t})=>`url(${w(e,t)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  }
`,A=i.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,H=i.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,I=i.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`,lineHeight:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isTierHidden:t,theme:r})=>k(e,t,r)};
  font-family: 'Cafe24ClassicType';
`,_=i.div.attrs(({$cardWidth:e,theme:t})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${t.color.WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,j=i.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
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
`,g=e=>{const{problemInfo:t,isTierHidden:r,width:n,tabIndex:f,linkButtonRef:m,onHover:l,onKeyDown:s}=e,{problemId:d,title:p,tier:c}=t,{rotateX:u,rotateY:x,adjustCardTweak:y,resetCardTweak:T}=$();return a.jsx(R,{children:a.jsx(C,{$width:n,$tier:c,$isTierHidden:r,$rotateX:u,$rotateY:x,onMouseMove:y,onMouseOut:T,onMouseOver:l,children:a.jsxs(A,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${d}`,"aria-label":`문제 번호 ${d}번 ${p}`,tabIndex:f,ref:m,onKeyDown:s,$cardWidth:n,children:[a.jsx(H,{$cardWidth:n,src:r?h.hidden:v[c],alt:"",draggable:!1}),a.jsx(I,{$cardWidth:n,$tier:c,$isTierHidden:r,children:`#${d}`}),a.jsx(_,{$cardWidth:n,children:p}),a.jsx(j,{$movement:u+x})]})})})};try{g.displayName="ProblemCard",g.__docgenInfo={description:"",displayName:"ProblemCard",props:{problemInfo:{defaultValue:null,description:"",name:"problemInfo",required:!0,type:{name:"ProblemInfo"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},linkButtonRef:{defaultValue:null,description:"",name:"linkButtonRef",required:!0,type:{name:"Ref<HTMLAnchorElement>"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLAnchorElement>"}}}}}catch{}export{g as P};
