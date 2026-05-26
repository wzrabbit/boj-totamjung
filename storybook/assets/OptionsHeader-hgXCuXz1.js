import{j as t}from"./jsx-runtime-SwSI87LU.js";import{r as u}from"./index-C5e9SFkp.js";import{O as k}from"./OptionsNav-CdMw2JCq.js";import{S as E}from"./SimpleModal-BKXUdtxg.js";import{T as _}from"./TotamjungInfoModal-4oZPIYEa.js";import{S as I}from"./check-BDBG6Lff.js";import{u as N}from"./useRovingFocus-B429qbOp.js";import{u as L}from"./useTranslation-oInNA2-n.js";import{y as n}from"./styled-components.browser.esm-DmPUYCQi.js";const B=""+new URL("settings-title-BAsh2fbw.png",import.meta.url).href,T=""+new URL("settings-title-en-B31KRlVr.png",import.meta.url).href,S=""+new URL("guidebook-button-DB51pF_8.png",import.meta.url).href,G=""+new URL("info-button-gVHj_-G9.png",import.meta.url).href,$=""+new URL("i18n-button-CTL3kHd2.png",import.meta.url).href,A=n.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 50px;
`,D=n.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 51.5px;
  height: 50px;
  padding: 0;

  background: none;
  border: none;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(140%);
  }

  ${({$isOpen:e})=>e&&`
      filter: brightness(140%);
    `}
`,M=n.img`
  width: 100%;
  height: 100%;
`,U=n.ul`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;

  min-width: 220px;
  padding: 6px;
  margin: 0;
  list-style: none;

  background-color: ${({theme:e})=>e.colors.BROWN_800};
  border: 2px solid ${({theme:e})=>e.colors.GOLD};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`,F=n.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;

  padding: 10px 12px;
  border-radius: 4px;

  font-family: 'Galmuri11';
  font-size: 14px;
  color: ${({theme:e,$isSelected:d})=>d?e.colors.GOLD:e.colors.OFF_WHITE};

  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.BROWN_700};
  }
`,H=n.span`
  width: 14px;
  height: 14px;
  color: ${({theme:e})=>e.colors.GOLD};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,f=["auto","ko","en"],P={auto:"language.auto",ko:"language.ko",en:"language.en"},V=()=>{const{preference:e,updatePreference:d,t:p}=L(),[s,r]=u.useState(!1),i=u.useRef(null),g=u.useRef(null),l=u.useRef(!1),h=async o=>{const a=f[o];await d(a),l.current=!0,r(!1)},{getRovingProps:O,focusItem:x}=N({count:f.length,direction:"vertical",shouldResetFocusIndexOnItemChange:!1,onSelect:h});u.useEffect(()=>{var b;if(!s){l.current&&((b=g.current)==null||b.focus(),l.current=!1);return}const o=f.indexOf(e);x(o===-1?0:o);const a=m=>{var j;const y=m.target;y instanceof Node&&((j=i.current)!=null&&j.contains(y)||(l.current=!1,r(!1)))},c=m=>{m.key==="Escape"&&(l.current=!0,r(!1))};return document.addEventListener("mousedown",a),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",c)}},[s,e,x]);const R=()=>{r(o=>(o&&(l.current=!0),!o))};return t.jsxs(A,{ref:i,children:[t.jsx(D,{ref:g,type:"button","aria-label":p("language.label"),"aria-haspopup":"listbox","aria-expanded":s,$isOpen:s,onClick:R,children:t.jsx(M,{src:$,alt:""})}),s&&t.jsx(U,{role:"listbox","aria-label":p("language.label"),children:f.map((o,a)=>{const c=e===o;return t.jsxs(F,{...O(a),role:"option","aria-selected":c,$isSelected:c,onClick:()=>h(a),children:[t.jsx("span",{children:p(P[o])}),c&&t.jsx(H,{children:t.jsx(I,{})})]},o)})})]})},z={LANDING:"https://wzrabbit.github.io/boj-totamjung"},W=n.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`,K=n.h1`
  width: 130px;
  height: 100%;
`,Y=n.img`
  width: 100%;
`,q=n.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`,J=n.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({theme:e})=>e.colors.GOLD};
`,v=n.button`
  width: 51.5px;
  height: 50px;

  background: none;
`,w=n.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`,C=e=>{const{selectedCategory:d,onCategoryChange:p}=e,[s,r]=u.useState("none"),{t:i,language:g}=L();return t.jsxs(W,{children:[t.jsx(K,{children:t.jsx(Y,{src:g==="en"?T:B,alt:i("browserTab.optionsTitle")})}),t.jsx(k,{selectedCategory:d,onChange:p}),t.jsxs(q,{children:[t.jsx(J,{children:`v${browser.runtime.getManifest().version}`}),t.jsx(V,{}),t.jsx(v,{type:"button","aria-label":i("options.nav.guideAriaLabel"),onClick:()=>{r("guidePageOpenConfirm")},children:t.jsx(w,{src:S,alt:""})}),t.jsx(v,{type:"button","aria-label":i("options.nav.infoAriaLabel"),onClick:()=>{r("totamjungInfo")},children:t.jsx(w,{src:G,alt:""})})]}),t.jsx(E,{title:i("options.nav.guideConfirmTitle"),actionType:"yesNo",width:"350px",height:"auto",open:s==="guidePageOpenConfirm",message:i("options.nav.guideConfirmMessage"),onYesSelect:()=>{window.open(z.LANDING),r("none")},onNoSelect:()=>{r("none")}}),t.jsx(_,{open:s==="totamjungInfo",onClose:()=>{r("none")}})]})};try{C.displayName="OptionsHeader",C.__docgenInfo={description:"",displayName:"OptionsHeader",props:{selectedCategory:{defaultValue:null,description:"",name:"selectedCategory",required:!0,type:{name:"enum",value:[{value:'"algorithmHider"'},{value:'"randomDefense"'},{value:'"appearanceAndDataManage"'}]}},onCategoryChange:{defaultValue:null,description:"",name:"onCategoryChange",required:!0,type:{name:"(category: OptionsNavCategory) => void"}}}}}catch{}export{C as O};
