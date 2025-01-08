import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a as g,s as h}from"./index-CElCL35T.js";import{r as m}from"./index-RYns6xqu.js";import{d as l}from"./styled-components.browser.esm-CkAH7aAm.js";import{P as n}from"./index-BpuMuliS.js";const $=()=>{const[e,t]=m.useState(0),[r,o]=m.useState(0);return{rotateX:e,rotateY:r,adjustCardTweak:a=>{const s=a.currentTarget.getBoundingClientRect(),c=a.clientX-s.left,u=((a.clientY-s.top)/s.height-.5)*20,b=(c/s.width-.5)*-20;t(u),o(b)},resetCardTweak:()=>{t(0),o(0)}}},T=(e,t)=>t?n.hidden:e>=1&&e<=5?n.bronze:e>=6&&e<=10?n.silver:e>=11&&e<=15?n.gold:e>=16&&e<=20?n.platinum:e>=21&&e<=25?n.diamond:e>=26&&e<=30?n.ruby:n.unrated,y=(e,t,r)=>t?r.color.GRAY:e>=1&&e<=5?r.solvedAcTier[5]:e>=6&&e<=10?r.solvedAcTier[10]:e>=11&&e<=15?r.solvedAcTier[15]:e>=16&&e<=20?r.solvedAcTier[20]:e>=21&&e<=25?r.solvedAcTier[25]:e>=26&&e<=30?r.solvedAcTier[30]:r.color.WHITE,v=l.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,w=l.div.attrs(({$rotateX:e,$rotateY:t,$width:r})=>({style:{transform:`perspective(${r*3}px) rotateX(${e}deg) rotateY(${t}deg)`,width:`${r}px`,height:`${r*1.36}px`,borderRadius:`${r*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({theme:e})=>e.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({$tier:e,$isHidden:t})=>`url(${T(e,t)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({theme:e})=>e.color.TRANSPARENT_LEMON};
  }
`,k=l.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,C=l.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,R=l.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isHidden:t,theme:r})=>y(e,t,r)};
  font-family: 'Cafe24ClassicType';
`,A=l.div.attrs(({$cardWidth:e,theme:t})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${t.color.WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,_=l.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
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
`,x=e=>{const{problemInfo:t,isHidden:r,width:o}=e,{problemId:d,title:p,tier:a}=t,{rotateX:s,rotateY:c,adjustCardTweak:f,resetCardTweak:u}=$();return i.jsx(v,{children:i.jsx(w,{$width:o,$tier:a,$isHidden:r,$rotateX:s,$rotateY:c,onMouseMove:f,onMouseOut:u,children:i.jsxs(k,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${d}`,"aria-label":`문제 번호 ${d}번 ${p}`,$cardWidth:o,children:[i.jsx(C,{$cardWidth:o,src:r?g.hidden:h[a],alt:"",draggable:!1}),i.jsx(R,{$cardWidth:o,$tier:a,$isHidden:r,children:`#${d}`}),i.jsx(A,{$cardWidth:o,children:p}),i.jsx(_,{$movement:s+c})]})})})};try{x.displayName="ProblemCard",x.__docgenInfo={description:"",displayName:"ProblemCard",props:{problemInfo:{defaultValue:null,description:"",name:"problemInfo",required:!0,type:{name:"ProblemInfo"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}}}}}catch{}export{x as P};
