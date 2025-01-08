import{j as t}from"./jsx-runtime-DEdD30eg.js";import{C as c,P as r}from"./index-BpuMuliS.js";import{m as i,d as o,l as s}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as b}from"./index-RYns6xqu.js";const y=i`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,k=i`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  22% {
    transform: translateY(15%) scale(1); opacity: 1;
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
`,B=i`
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
`,w=i`
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
`,O=o.div`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 234px;

  animation: ${y} 0.25s forwards;
`,h=o.button`
  width: 100%;
  height: 100%;

  background: none;

  transition: 0.3s;
  user-select: none;

  ${({$isCardBoxOpening:a})=>a&&s`
      animation: ${k} 1.35s 1.6s forwards;
    `}

  ${({$isCardBoxOpening:a})=>!a&&s`
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`,R=o.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 80%;
  height: 90%;
  margin: 10%;

  transition: 0.3s;

  box-shadow: 0 0 70px ${({theme:a})=>a.color.BLACK};

  ${h}:hover > & {
    box-shadow: 0 0 75px ${({theme:a})=>a.color.GOLD};
  }

  ${({theme:a,$isCardBoxOpening:e})=>e&&s`
      box-shadow: 0 0 75px ${a.color.GOLD};
    `};
`,Y=o.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`,v=o.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  ${({$isCardBoxOpening:a})=>!a&&s`
      opacity: 0;
    `}
`,p=o.img`
  position: absolute;
  top: ${({$top:a})=>a};
  left: 7.5%;

  width: 85%;
  border-radius: 10%;

  ${({$isCardBoxOpening:a,$delay:e})=>a&&s`
      animation: ${w} 1.5s ${e}s forwards;
    `}
`,j=o.img`
  position: absolute;
  top: 9%;
  left: 0;

  width: 100%;
`,A=o.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform-origin: left;

  ${({$isCardBoxOpening:a})=>a&&s`
      animation: ${B} 0.8s ease-in-out forwards;
    `}
`,x=a=>{const{color:e,isTierHidden:d,cardRanks:l,onOpenAnimationEnd:C}=a,[n,$]=b.useState(!1),m=l[0],f=l[1],u=l[2];return t.jsx(O,{children:t.jsxs(h,{onClick:()=>$(!0),$isCardBoxOpening:n,onAnimationEnd:g=>{n&&g.target===g.currentTarget&&C()},children:[t.jsx(R,{$isCardBoxOpening:n}),t.jsx(Y,{src:c.inside[e],draggable:!1}),t.jsxs(v,{$isCardBoxOpening:n,children:[m&&t.jsx(p,{src:d?r.hidden:r[m],draggable:!1,alt:"",$isCardBoxOpening:n,$top:"0",$delay:1}),f&&t.jsx(p,{src:d?r.hidden:r[f],draggable:!1,alt:"",$isCardBoxOpening:n,$top:"4%",$delay:1.15}),u&&t.jsx(p,{src:d?r.hidden:r[u],draggable:!1,alt:"",$isCardBoxOpening:n,$top:"8%",$delay:1.3})]}),t.jsx(j,{src:c.front[e],draggable:!1,alt:""}),t.jsx(A,{src:c.top[e],draggable:!1,alt:"",$isCardBoxOpening:n})]})})};try{x.displayName="CardBox",x.__docgenInfo={description:"",displayName:"CardBox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"gold"'}]}},isTierHidden:{defaultValue:null,description:"",name:"isTierHidden",required:!0,type:{name:"boolean"}},cardRanks:{defaultValue:null,description:"",name:"cardRanks",required:!0,type:{name:"[Rank] | [Rank, Rank] | [Rank, Rank, Rank]"}},onOpenAnimationEnd:{defaultValue:null,description:"",name:"onOpenAnimationEnd",required:!0,type:{name:"() => void"}}}}}catch{}export{x as C};
