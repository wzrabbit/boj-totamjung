import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as l,l as r}from"./styled-components.browser.esm-CkAH7aAm.js";const i=l.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,c=r`
  width: 50%;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:e})=>e.color.LIGHTER_BROWN};

  transition: 0.2s;
`,d=l.button`
  ${c}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:e})=>e?r`
          border-color: ${({theme:o})=>o.color.MAGENTA};
          background-color: ${({theme:o})=>o.color.MAGENTA};
          box-shadow: 0 0 12px ${({theme:o})=>o.color.MAGENTA};

          color: ${({theme:o})=>o.color.WHITE};
        `:r`
          &:hover {
            border-color: ${({theme:o})=>o.color.MAGENTA};
            box-shadow: 0 0 12px ${({theme:o})=>o.color.MAGENTA};

            color: ${({theme:o})=>o.color.MAGENTA};
          }
        `}
`,s=l.button`
  ${c}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:e})=>e?r`
          border-color: ${({theme:o})=>o.color.AZURE_BLUE};
          background-color: ${({theme:o})=>o.color.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:o})=>o.color.AZURE_BLUE};

          color: ${({theme:o})=>o.color.WHITE};
        `:r`
          &:hover {
            border-color: ${({theme:o})=>o.color.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:o})=>o.color.AZURE_BLUE};

            color: ${({theme:o})=>o.color.AZURE_BLUE};
          }
        `}
`,p=l.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.LIGHTER_BROWN};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`,a=e=>{const{mode:o,onClick:n}=e;return t.jsxs(i,{children:[t.jsx(d,{type:"button",$isActivated:o==="easy",onClick:()=>{n("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),t.jsx(s,{type:"button",$isActivated:o==="manual",onClick:()=>{n("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),t.jsx(p,{children:"OR"})]})};try{a.displayName="RandomDefenseCapsuleButton",a.__docgenInfo={description:"",displayName:"RandomDefenseCapsuleButton",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"easy"'},{value:'"manual"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(mode: RandomDefenseFormMode) => void"}}}}}catch{}export{a as R};
