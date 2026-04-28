import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as t,l as c}from"./styled-components.browser.esm-CIS6JKSM.js";import"./index--qcDGAq6.js";import{S as y}from"./check-BIa-lIjI.js";import{u as O,S as j}from"./useSelect-BouOI_-d.js";const v=t.div`
  overflow: visible;
  position: relative;

  width: ${({$width:e})=>e};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,L=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 100%;
  height: 32px;
  padding: 6px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:e,$isActivated:i})=>i?c`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:c`
          border: 1.5px solid ${e.color.LIGHTER_BROWN};
        `}
`;t.img`
  width: 12px;
  height: auto;
`;const p=t.p`
  font-size: 14px;
  color: ${({theme:e})=>e.color.WHITE};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,S=t.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,R=t.ul`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  left: 8px;
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 100%;
  max-height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:e})=>e.color.LEMON};
  box-shadow: 0 0 12px ${({theme:e})=>e.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  scrollbar-width: none;

  transform-origin: top;
  pointer-events: auto;
  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`,_=t.li`
  padding: 2px;
`,V=t.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.color.BROWN};
  }
`,k=t.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,u=e=>{var d;const{options:i,selectedValue:x,width:h,ariaLabel:s,onChange:g}=e,{selectedValue:n,updateSelectedValue:m,isSelectOpen:l,toggleSelect:b,containerRef:f,selectButtonRef:w}=O({initSelectedValue:x,onChange:g}),$=((d=i.find(({value:a})=>a===n))==null?void 0:d.label)??"";return o.jsxs(v,{ref:f,$width:h,role:"combobox",children:[o.jsxs(L,{type:"button","aria-label":s,"aria-haspopup":"listbox","aria-expanded":l,onClick:b,ref:w,$isActivated:l,children:[o.jsx(p,{$isBold:!0,children:$}),o.jsx(S,{children:o.jsx(j,{})})]}),o.jsx(R,{$isOpen:l,role:"listbox","aria-labelledby":s,children:i.map(({label:a,value:r})=>o.jsx(_,{role:"option","aria-selected":r===n,children:o.jsxs(V,{type:"button",onClick:()=>{m(r)},children:[o.jsx(p,{$isBold:r===n,children:a}),r===n&&o.jsx(k,{children:o.jsx(y,{})})]})},r))})]})};try{u.displayName="Select",u.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}export{u as S};
