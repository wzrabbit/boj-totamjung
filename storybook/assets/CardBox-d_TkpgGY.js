import{j as t}from"./jsx-runtime-SwSI87LU.js";import{C as f,P as r}from"./index-BpuMuliS.js";import{y as n,p as s,O as d}from"./styled-components.browser.esm-DmPUYCQi.js";import{r as k}from"./index-C5e9SFkp.js";import{u as B}from"./useTranslation-oInNA2-n.js";const O=d`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,w=d`
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
`,R=d`
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
`,v=d`
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
`,Y=n.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${O} 0.25s forwards;
`,C=n.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:a})=>a&&s`
      animation: ${w} 1.35s 2.1s forwards;
    `}

  ${({$isCardBoxOpening:a})=>!a&&s`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,j=n.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:a})=>a.colors.BLACK};

  ${C}:hover > & {
    box-shadow: 0 0 75px ${({theme:a})=>a.colors.GOLD};
  }

  ${({theme:a,$isCardBoxOpening:o})=>o&&s`
      box-shadow: 0 0 75px ${a.colors.GOLD};
    `};
`,A=n.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,_=n.div`
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

  ${({$isCardBoxOpening:a,$delay:o})=>a&&s`
      animation: ${v} 1.5s ${o}s forwards;
    `}
`,E=n.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,T=n.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:a})=>a&&s`
      animation: ${R} 1.1s ease-in-out forwards;
    `}
`,x=a=>{const{color:o,isTierHidden:l,cardRanks:c,onFirstClick:h,onOpenAnimationEnd:$}=a,{t:y}=B(),[e,b]=k.useState(!1),p=c[0],u=c[1],m=c[2];return t.jsx(Y,{children:t.jsxs(C,{autoFocus:!0,onClick:()=>{b(i=>(i||h(),!0))},$isCardBoxOpening:e,onAnimationEnd:i=>{e&&i.target===i.currentTarget&&$()},"aria-label":y("widget.cardBox.openAriaLabel"),children:[t.jsx(j,{$isCardBoxOpening:e}),t.jsx(A,{src:f.inside[o],draggable:!1}),t.jsxs(_,{$isCardBoxOpening:e,children:[p&&t.jsx(g,{src:p!=="unrated"&&l?r.hidden:r[p],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"0",$delay:1.5}),u&&t.jsx(g,{src:u!=="unrated"&&l?r.hidden:r[u],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"4%",$delay:1.65}),m&&t.jsx(g,{src:m!=="unrated"&&l?r.hidden:r[m],draggable:!1,alt:"",$isCardBoxOpening:e,$top:"8%",$delay:1.8})]}),t.jsx(E,{src:f.front[o],draggable:!1,alt:""}),t.jsx(T,{src:f.top[o],draggable:!1,alt:"",$isCardBoxOpening:e})]})})};try{x.displayName="CardBox",x.__docgenInfo={description:"",displayName:"CardBox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"gold"'},{value:'"black"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'}]}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},cardRanks:{defaultValue:null,description:"",name:"cardRanks",required:!0,type:{name:"[Rank] | [Rank, Rank] | [Rank, Rank, Rank]"}},onFirstClick:{defaultValue:null,description:"",name:"onFirstClick",required:!0,type:{name:"() => void"}},onOpenAnimationEnd:{defaultValue:null,description:"",name:"onOpenAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}export{x as C};
