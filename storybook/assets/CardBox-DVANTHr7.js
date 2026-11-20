import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{C as f,P as o}from"./index-BpuMuliS.js";import{d as n,l as s,m as d}from"./styled-components.browser.esm-CIS6JKSM.js";import{r as y}from"./index--qcDGAq6.js";const k=d`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,B=d`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  22% {
    transform: translateY(22%) scale(1); opacity: 1;
  }

  44% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  66% {
    transform: translateY(0) scale(1); opacity: 1;
  }

  100% {
    transform: translateY(0) scale(0.8); opacity: 0;
  }
`,w=d`
  0% {
    transform: scale(1) rotate(0deg) translateY(0);
    opacity: 1;
  }

  50% {
    transform: scale(1) rotate(-30deg) translateY(-100%);
    opacity: 1;
  }

  100% {
    transform: scale(0.8) rotate(-30deg) translateY(-100%);
    opacity: 0;
  }
`,O=d`
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(-15%);
  }

  40% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(-1000%);
  }
`,R=n.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${k} 0.25s forwards;
`,C=n.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:a})=>a&&s`
      animation: ${B} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:a})=>!a&&s`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,v=n.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:a})=>a.color.BLACK};

  ${C}:hover > & {
    box-shadow: 0 0 75px ${({theme:a})=>a.color.GOLD};
  }

  ${({theme:a,$isCardBoxOpening:r})=>r&&s`
      box-shadow: 0 0 75px ${a.color.GOLD};
    `};
`,Y=n.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,j=n.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:a})=>!a&&s`
      opacity: 0;
    `}
`,g=n.img`
  position: absolute;
  top: ${({$top:a})=>a};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:a,$delay:r})=>a&&s`
      animation: ${O} 1.5s ${r}s forwards;
    `}
`,A=n.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,_=n.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:a})=>a&&s`
      animation: ${w} 1.1s ease-in-out forwards;
    `}
`,x=a=>{const{color:r,isTierHidden:l,cardRanks:c,onFirstClick:h,onOpenAnimationEnd:$}=a,[e,b]=y.useState(!1),p=c[0],m=c[1],u=c[2];return t.jsx(R,{children:t.jsxs(C,{autoFocus:!0,onClick:()=>{b(i=>(i||h(),!0))},$isCardBoxOpening:e,onAnimationEnd:i=>{e&&i.target===i.currentTarget&&$()},"aria-label":"카드 상자를 열어 추첨 진행하기",children:[t.jsx(v,{$isCardBoxOpening:e}),t.jsx(Y,{src:f.inside[r],draggable:!1}),t.jsxs(j,{$isCardBoxOpening:e,children:[p&&t.jsx(g,{src:p!=="unrated"&&l?o.hidden:o[p],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"0",$delay:1.5}),m&&t.jsx(g,{src:m!=="unrated"&&l?o.hidden:o[m],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"4%",$delay:1.65}),u&&t.jsx(g,{src:u!=="unrated"&&l?o.hidden:o[u],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"8%",$delay:1.8})]}),t.jsx(A,{src:f.front[r],draggable:!1,alt:""}),t.jsx(_,{src:f.top[r],draggable:!1,alt:"",$isCardBoxOpening:e})]})})};try{x.displayName="CardBox",x.__docgenInfo={description:"",displayName:"CardBox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"gold"'}]}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},cardRanks:{defaultValue:null,description:"",name:"cardRanks",required:!0,type:{name:"[Rank] | [Rank, Rank] | [Rank, Rank, Rank]"}},onFirstClick:{defaultValue:null,description:"",name:"onFirstClick",required:!0,type:{name:"() => void"}},onOpenAnimationEnd:{defaultValue:null,description:"",name:"onOpenAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}export{x as C};
