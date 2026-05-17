import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as t,l as c}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as x}from"./getTransparentHexColor-DN69VCBw.js";import"./index--qcDGAq6.js";import{S as O}from"./check-BIa-lIjI.js";import{u as j,S as v}from"./useSelect-BouOI_-d.js";const _=t.div`
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
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  transition: 0.2s;
  pointer-events: auto;

  ${({theme:e,$isActivated:i})=>i?c`
          border: 1.5px solid ${e.colors.LEMON};
          box-shadow: 0 0 12px
            ${x(e.colors.GOLD,.44)};
        `:c`
          border: 1.5px solid ${e.colors.BROWN_500};
        `}
`;t.img`
  width: 12px;
  height: auto;
`;const p=t.p`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.OFF_WHITE};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,S=t.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.colors.GOLD};
  }
`,V=t.ul`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  left: 8px;
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 100%;
  max-height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({theme:e})=>e.colors.LEMON};
  box-shadow: 0 0 12px
    ${({theme:e})=>x(e.colors.GOLD,.44)};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};

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
`,k=t.li`
  padding: 2px;
`,B=t.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.BROWN_700};
  }
`,C=t.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.colors.GOLD};
  }
`,u=e=>{var d;const{options:i,selectedValue:h,width:g,ariaLabel:a,onChange:m}=e,{selectedValue:n,updateSelectedValue:b,isSelectOpen:l,toggleSelect:f,containerRef:w,selectButtonRef:$}=j({initSelectedValue:h,onChange:m}),y=((d=i.find(({value:s})=>s===n))==null?void 0:d.label)??"";return o.jsxs(_,{ref:w,$width:g,role:"combobox",children:[o.jsxs(L,{type:"button","aria-label":a,"aria-haspopup":"listbox","aria-expanded":l,onClick:f,ref:$,$isActivated:l,children:[o.jsx(p,{$isBold:!0,children:y}),o.jsx(S,{children:o.jsx(v,{})})]}),o.jsx(V,{$isOpen:l,role:"listbox","aria-labelledby":a,children:i.map(({label:s,value:r})=>o.jsx(k,{role:"option","aria-selected":r===n,children:o.jsxs(B,{type:"button",onClick:()=>{b(r)},children:[o.jsx(p,{$isBold:r===n,children:s}),r===n&&o.jsx(C,{children:o.jsx(O,{})})]})},r))})]})};try{u.displayName="Select",u.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}export{u as S};
