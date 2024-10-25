import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as t,l as u}from"./styled-components.browser.esm-CkAH7aAm.js";import"./index-RYns6xqu.js";import{S}from"./check-Dgz4zLBN.js";import{u as j,S as O}from"./useSelect-C4szZV9I.js";import{f as V}from"./index-C_FWhylE.js";const _=t.div`
  overflow: visible;
  position: relative;

  width: ${({$width:e})=>e};
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`,C=t.button`
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

  ${({theme:e,$isActivated:a})=>a?u`
          border: 1.5px solid ${e.color.LEMON};
          box-shadow: 0 0 12px ${e.color.GOLD}70;
        `:u`
          border: 1.5px solid ${e.color.LIGHTER_BROWN};
        `}
`;t.img`
  width: 12px;
  height: auto;
`;const h=t.p`
  font-size: 14px;
  color: ${({theme:e})=>e.color.WHITE};
  font-weight: ${({$isBold:e})=>e?700:400};

  transition: font-weight 0.1s;
`,D=t.div`
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
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({theme:e})=>e.color.BROWN};
  }
`,N=t.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({theme:e})=>e.color.GOLD};
  }
`,c=e=>{var p;const{options:a,selectedValue:b,width:f,ariaLabel:d,onChange:w}=e,{selectedValue:r,updateSelectedValue:v,isSelectOpen:l,openSelect:y,containerRef:L}=j({initSelectedValue:b,onChange:w}),$=((p=a.find(({value:s})=>s===r))==null?void 0:p.label)??"";return o.jsxs(_,{ref:L,$width:f,role:"combobox",children:[o.jsxs(C,{type:"button","aria-label":d,"aria-haspopup":"listbox","aria-expanded":l,onClick:y,$isActivated:l,children:[o.jsx(h,{$isBold:!0,children:$}),o.jsx(D,{children:o.jsx(O,{})})]}),o.jsx(R,{$isOpen:l,role:"listbox","aria-labelledby":d,children:a.map(({label:s,value:n})=>o.jsx(k,{role:"option","aria-selected":n===r,children:o.jsxs(B,{type:"button",onClick:()=>{v(n)},children:[o.jsx(h,{$isBold:n===r,children:s}),n===r&&o.jsx(N,{children:o.jsx(S,{})})]})},n))})]})};try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}const z={title:"components/common/Select",component:c,argTypes:{options:{description:"선택할 수 있는 옵션들의 목록입니다."},selectedValue:{description:"현재 선택되어 있는 값입니다."},width:{description:"컴포넌트의 가로 길이입니다."},ariaLabel:{description:"컴포넌트의 `aria-label` 값입니다."},onChange:{description:"선택된 값이 변경되어야 할 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`Select`는 여러 옵션 중 하나를 선택할 수 있는 공용 컴포넌트입니다."}}}},i={decorators:[e=>o.jsx("div",{style:{width:"150px",height:"200px"},children:o.jsx(e,{})})],args:{options:[{label:"아메리카노",value:"americano"},{label:"카페라떼",value:"caffeLatte"},{label:"바닐라 라떼",value:"vanillaLatte"},{label:"카라멜 마끼아또",value:"caramelMacchiato"}],selectedValue:"americano",width:"140px",ariaLabel:"커피 메뉴",onChange:V()}};var x,m,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '150px',
    height: '200px'
  }}>
        <Story />
      </div>],
  args: {
    options: [{
      label: '아메리카노',
      value: 'americano'
    }, {
      label: '카페라떼',
      value: 'caffeLatte'
    }, {
      label: '바닐라 라떼',
      value: 'vanillaLatte'
    }, {
      label: '카라멜 마끼아또',
      value: 'caramelMacchiato'
    }],
    selectedValue: 'americano',
    width: '140px',
    ariaLabel: '커피 메뉴',
    onChange: fn()
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const G=["Default"];export{i as Default,G as __namedExportsOrder,z as default};
