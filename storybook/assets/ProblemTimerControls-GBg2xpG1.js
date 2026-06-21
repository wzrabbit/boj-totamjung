import{j as t}from"./jsx-runtime-SwSI87LU.js";import{y as i}from"./styled-components.browser.esm-DmPUYCQi.js";import{r as n}from"./index-C5e9SFkp.js";import{S as B}from"./trash-C-GIiUBp.js";import{t as D}from"./toPx-DeOSKary.js";import{u as b}from"./useTranslation-CHmiwnmk.js";const j=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4"})),E=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m8 0h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"})),A=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M17 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"})),P=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},n.createElement("path",{d:"M21 12a9 9 0 1 0-9.972 8.948q.48.051.972.052"}),n.createElement("path",{d:"M12 7v5l2 2m4.42 1.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"}))),C=i.div`
  flex-shrink: 0;

  margin: 0 0.05em 0 0.15em;

  font-size: 0.5em;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,V=i.span`
  opacity: 0.2;

  ${({$transparentColor:e})=>e&&`color: ${e};`}
`,q=i.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-width: ${({$maxButtonCount:e})=>e*.65}em;
`,a=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 0.65em;
  height: 0.65em;

  background: transparent;

  font-size: inherit;

  cursor: pointer;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`,k=i.div`
  display: inline-flex;
  align-items: center;
  height: 1em;

  font-size: ${({$height:e})=>e};

  user-select: none;

  & > ${C}, & ${a} > svg {
    color: ${({$color:e})=>e};
    transition: color 0.2s;
  }
`,S=(e,s,m)=>{var u;const l=[e,s,m].map(c=>String(c).padStart(2,"0")).join(":"),r=((u=l.match(/^[0:]*/))==null?void 0:u[0])??"",d=l.substring(r.length);return{transparent:r,normal:d}},h=e=>{const{hours:s,minutes:m,seconds:l,status:r,color:d,transparentColor:u,height:c,hasDeleteButton:p,onPlay:g,onPause:v,onStop:f,onEdit:y}=e,{t:o}=b(),{transparent:x,normal:w}=S(s,m,l);return t.jsxs(k,{$color:d,$height:D(c),children:[t.jsxs(C,{children:[t.jsx(V,{$transparentColor:u,children:x}),w]}),t.jsxs(q,{$maxButtonCount:p?3:2,children:[r==="play"&&t.jsx(a,{"aria-label":o("widget.timer.pauseAriaLabel"),onClick:v,children:t.jsx(E,{})}),r==="pause"&&t.jsx(a,{"aria-label":o("widget.timer.playAriaLabel"),onClick:g,children:t.jsx(j,{})}),r!=="stop"&&t.jsx(a,{"aria-label":o("widget.timer.stopAriaLabel"),onClick:f,children:t.jsx(A,{})}),r==="stop"&&t.jsx(a,{"aria-label":o("widget.timer.setTimeAriaLabel"),onClick:y,children:t.jsx(P,{})}),p&&t.jsx(a,{"aria-label":o("widget.timer.deleteAriaLabel"),onClick:e.onDelete,children:t.jsx(B,{})})]})]})};try{h.displayName="ProblemTimerControls",h.__docgenInfo={description:"",displayName:"ProblemTimerControls",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"pause"'},{value:'"stop"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},transparentColor:{defaultValue:null,description:'비활성 시간 세그먼트("00:" 같은 leading-zero 부분)의 색상.\n가시성을 위해 활성 세그먼트와 다르게 지정할 수 있다.\n미지정 시 `color`를 그대로 사용한다.',name:"transparentColor",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!0,type:{name:"() => void"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!0,type:{name:"() => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!0,type:{name:"() => void"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}},hasDeleteButton:{defaultValue:null,description:"",name:"hasDeleteButton",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}export{h as P};
