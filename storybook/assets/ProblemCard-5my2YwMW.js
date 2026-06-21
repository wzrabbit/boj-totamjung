import{j as a}from"./jsx-runtime-SwSI87LU.js";import{a as w,s as $}from"./index-CElCL35T.js";import{r as x}from"./index-C5e9SFkp.js";import{u as k}from"./useTranslation-CHmiwnmk.js";import{y as i}from"./styled-components.browser.esm-DmPUYCQi.js";import{g}from"./getTransparentHexColor-DN69VCBw.js";import{P as n}from"./index-BpuMuliS.js";const C=()=>{const[e,t]=x.useState(0),[r,o]=x.useState(0);return{rotateX:e,rotateY:r,adjustCardTweak:l=>{const s=l.currentTarget.getBoundingClientRect(),d=l.clientX-s.left,c=((l.clientY-s.top)/s.height-.5)*20,u=(d/s.width-.5)*-20;t(c),o(u)},resetCardTweak:()=>{t(0),o(0)}}},H=(e,t)=>t?n.hidden:e>=1&&e<=5?n.bronze:e>=6&&e<=10?n.silver:e>=11&&e<=15?n.gold:e>=16&&e<=20?n.platinum:e>=21&&e<=25?n.diamond:e>=26&&e<=30?n.ruby:n.unrated,I=(e,t,r)=>t?r.colors.GRAY_500:e>=1&&e<=5?r.solvedAcTiers[5]:e>=6&&e<=10?r.solvedAcTiers[10]:e>=11&&e<=15?r.solvedAcTiers[15]:e>=16&&e<=20?r.solvedAcTiers[20]:e>=21&&e<=25?r.solvedAcTiers[25]:e>=26&&e<=30?r.solvedAcTiers[30]:r.colors.OFF_WHITE,R=i.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`,A=i.div.attrs(({$rotateX:e,$rotateY:t,$width:r})=>({style:{transform:`perspective(${r*3}px) rotateX(${e}deg) rotateY(${t}deg)`,width:`${r}px`,height:`${r*1.36}px`,borderRadius:`${r*.1}px`}}))`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px
    ${({theme:e})=>g(e.colors.BLACK,.67)};
  background-image: ${({$tier:e,$isTierHidden:t})=>`url(${H(e,t)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px
      ${({theme:e})=>g(e.colors.LEMON,.5)};
  }
`,_=i.a.attrs(({$cardWidth:e})=>({style:{rowGap:`${e/30}px`,padding:`${e/12.05}px`}}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`,j=i.img.attrs(({$cardWidth:e})=>({style:{height:`${e/2.4}px`,margin:`${e/4.016}px 0 ${e/16.066}px 0`}}))``,M=i.div.attrs(({$cardWidth:e})=>({style:{fontSize:`${e/7.531}px`,lineHeight:`${e/7.531}px`}}))`
  color: ${({$tier:e,$isTierHidden:t,theme:r})=>I(e,t,r)};
  font-family: 'Cafe24ClassicType';
`,P=i.div.attrs(({$cardWidth:e,theme:t})=>({style:{height:`${Math.max(28,e/6.694)}px`,color:`${t.colors.OFF_WHITE}`,fontSize:`${Math.max(14,e/13.388)}px`,lineHeight:`${Math.max(14,e/13.388)}px`}}))`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,B=i.div.attrs(({$movement:e})=>({style:{backgroundPosition:`${e+60}%`}}))`
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
`,y=e=>{const{problemInfo:t,isTierHidden:r,width:o,tabIndex:m,linkButtonRef:f,onHover:l,onKeyDown:s}=e,{problemId:d,title:p,tier:c}=t,{rotateX:u,rotateY:b,adjustCardTweak:h,resetCardTweak:T}=C(),{t:v}=k();return a.jsx(R,{children:a.jsx(A,{$width:o,$tier:c,$isTierHidden:r,$rotateX:u,$rotateY:b,onMouseMove:h,onMouseOut:T,onMouseOver:l,children:a.jsxs(_,{target:"_blank",rel:"noreferrer noopener",href:`https://icpc.me/${d}`,"aria-label":v("widget.problemCard.ariaLabel",[String(d),p]),tabIndex:m,ref:f,onKeyDown:s,$cardWidth:o,children:[a.jsx(j,{$cardWidth:o,src:r?w.hidden:$[c],alt:"",draggable:!1}),a.jsx(M,{$cardWidth:o,$tier:c,$isTierHidden:r,children:`#${d}`}),a.jsx(P,{$cardWidth:o,children:p}),a.jsx(B,{$movement:u+b})]})})})};try{y.displayName="ProblemCard",y.__docgenInfo={description:"",displayName:"ProblemCard",props:{problemInfo:{defaultValue:null,description:"",name:"problemInfo",required:!0,type:{name:"ProblemInfo"}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},linkButtonRef:{defaultValue:null,description:"",name:"linkButtonRef",required:!0,type:{name:"Ref<HTMLAnchorElement>"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!0,type:{name:"KeyboardEventHandler<HTMLAnchorElement>"}}}}}catch{}export{y as P};
