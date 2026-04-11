import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as T,s as $}from"./index-CElCL35T.js";import{r as b}from"./index--qcDGAq6.js";import{d as s}from"./styled-components.browser.esm-CIS6JKSM.js";import{g}from"./getTransparentHexColor-DN69VCBw.js";import{P as n}from"./index-BpuMuliS.js";const w=()=>{const[e,t]=b.useState(0),[r,o]=b.useState(0);return{rotateX:e,rotateY:r,adjustCardTweak:l=>{const i=l.currentTarget.getBoundingClientRect(),d=l.clientX-i.left,c=((l.clientY-i.top)/i.height-.5)*20,u=(d/i.width-.5)*-20;t(c),o(u)},resetCardTweak:()=>{t(0),o(0)}}},k=(e,t)=>t?n.hidden:e>=1&&e<=5?n.bronze:e>=6&&e<=10?n.silver:e>=11&&e<=15?n.gold:e>=16&&e<=20?n.platinum:e>=21&&e<=25?n.diamond:e>=26&&e<=30?n.ruby:n.unrated,C=(e,t,r)=>t?r.colors.GRAY_500:e>=1&&e<=5?r.solvedAcTiers[5]:e>=6&&e<=10?r.solvedAcTiers[10]:e>=11&&e<=15?r.solvedAcTiers[15]:e>=16&&e<=20?r.solvedAcTiers[20]:e>=21&&e<=25?r.solvedAcTiers[25]:e>=26&&e<=30?r.solvedAcTiers[30]:r.colors.OFF_WHITE,H=s.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,I=s.div.attrs(({$rotateX:e,$rotateY:t,$width:r})=>({style:{transform:`perspective(${r*3}px) rotateX(${e}deg) rotateY(${t}deg)`,width:`${r}px`,height:`${r*1.36}px`,borderRadius:`${r*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px
    ${({theme:e})=>g(e.colors.BLACK,.67)};
  background-image: ${({$tier:e,$isTierHidden:t})=>`url(${k(e,t)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px
      ${({theme:e})=>g(e.colors.LEMON,.5)};
  }
`,R=s.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,A=s.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,_=s.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`,lineHeight:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isTierHidden:t,theme:r})=>C(e,t,r)};
  font-family: 'Cafe24ClassicType';
`,j=s.div.attrs(({$cardWidth:e,theme:t})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${t.colors.OFF_WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,M=s.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
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
`,y=e=>{const{problemInfo:t,isTierHidden:r,width:o,tabIndex:f,linkButtonRef:m,onHover:l,onKeyDown:i}=e,{problemId:d,title:p,tier:c}=t,{rotateX:u,rotateY:x,adjustCardTweak:h,resetCardTweak:v}=w();return a.jsx(H,{children:a.jsx(I,{$width:o,$tier:c,$isTierHidden:r,$rotateX:u,$rotateY:x,onMouseMove:h,onMouseOut:v,onMouseOver:l,children:a.jsxs(R,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${d}`,"aria-label":`문제 번호 ${d}번 ${p}`,tabIndex:f,ref:m,onKeyDown:i,$cardWidth:o,children:[a.jsx(A,{$cardWidth:o,src:r?T.hidden:$[c],alt:"",draggable:!1}),a.jsx(_,{$cardWidth:o,$tier:c,$isTierHidden:r,children:`#${d}`}),a.jsx(j,{$cardWidth:o,children:p}),a.jsx(M,{$movement:u+x})]})})})};try{y.displayName="ProblemCard",y.__docgenInfo={description:"",displayName:"ProblemCard",props:{problemInfo:{defaultValue:null,description:"",name:"problemInfo",required:!0,type:{name:"ProblemInfo"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},linkButtonRef:{defaultValue:null,description:"",name:"linkButtonRef",required:!0,type:{name:"Ref<HTMLAnchorElement>"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLAnchorElement>"}}}}}catch{}export{y as P};
