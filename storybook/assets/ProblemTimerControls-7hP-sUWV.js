import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as o}from"./styled-components.browser.esm-CIS6JKSM.js";import{r as n}from"./index--qcDGAq6.js";import{S as w}from"./trash-JRBuQ8nU.js";import{t as j}from"./toPx-DeOSKary.js";const b=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4"})),C=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m8 0h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"})),E=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("path",{fill:"currentColor",d:"M17 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"})),P=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",...e},n.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},n.createElement("path",{d:"M21 12a9 9 0 1 0-9.972 8.948q.48.051.972.052"}),n.createElement("path",{d:"M12 7v5l2 2m4.42 1.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"}))),p=o.div`
  flex-shrink: 0;

  margin: 0 0.05em 0 0.15em;

  font-size: 0.5em;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,V=o.span`
  opacity: 0.2;
`,k=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-width: ${({$maxButtonCount:e})=>e*.65}em;
`,a=o.button`
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
`,q=o.div`
  display: inline-flex;
  align-items: center;
  height: 1em;

  font-size: ${({$height:e})=>e};

  user-select: none;

  & > ${p}, & ${a} > svg {
    color: ${({$color:e})=>e};
  }
`,S=(e,u,m)=>{var l;const i=[e,u,m].map(s=>String(s).padStart(2,"0")).join(":"),r=((l=i.match(/^[0:]*/))==null?void 0:l[0])??"",d=i.substring(r.length);return{transparent:r,normal:d}},c=e=>{const{hours:u,minutes:m,seconds:i,status:r,color:d,height:l,hasDeleteButton:s,onPlay:h,onPause:g,onStop:v,onEdit:f}=e,{transparent:x,normal:y}=S(u,m,i);return t.jsxs(q,{$color:d,$height:j(l),children:[t.jsxs(p,{children:[t.jsx(V,{children:x}),y]}),t.jsxs(k,{$maxButtonCount:s?3:2,children:[r==="play"&&t.jsx(a,{"aria-label":"문제 타이머 일시정지하기",onClick:g,children:t.jsx(C,{})}),r==="pause"&&t.jsx(a,{"aria-label":"문제 타이머 시작하기",onClick:h,children:t.jsx(b,{})}),r!=="stop"&&t.jsx(a,{"aria-label":"문제 타이머 정지하기",onClick:v,children:t.jsx(E,{})}),r==="stop"&&t.jsx(a,{"aria-label":"문제 타이머 시간 설정하기",onClick:f,children:t.jsx(P,{})}),s&&t.jsx(a,{"aria-label":"타이머 삭제하기",onClick:e.onDelete,children:t.jsx(w,{})})]})]})};try{c.displayName="ProblemTimerControls",c.__docgenInfo={description:"",displayName:"ProblemTimerControls",props:{hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"pause"'},{value:'"stop"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!0,type:{name:"() => void"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!0,type:{name:"() => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!0,type:{name:"() => void"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}},hasDeleteButton:{defaultValue:null,description:"",name:"hasDeleteButton",required:!0,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}}}catch{}export{c as P};
