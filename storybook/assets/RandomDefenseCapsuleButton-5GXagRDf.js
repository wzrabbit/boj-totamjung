import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as l,l as r}from"./styled-components.browser.esm-CIS6JKSM.js";const c=l.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,a=r`
  width: 50%;

  border: 1.5px solid ${({theme:e})=>e.colors.BROWN_500};
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.BROWN_500};

  transition: 0.2s;
`,i=l.button`
  ${a}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({$isActivated:e})=>e?r`
          border-color: ${({theme:o})=>o.colors.MAGENTA};
          background-color: ${({theme:o})=>o.colors.MAGENTA};
          box-shadow: 0 0 12px ${({theme:o})=>o.colors.MAGENTA};

          color: ${({theme:o})=>o.colors.OFF_WHITE};
        `:r`
          &:hover {
            border-color: ${({theme:o})=>o.colors.MAGENTA};
            box-shadow: 0 0 12px ${({theme:o})=>o.colors.MAGENTA};

            color: ${({theme:o})=>o.colors.MAGENTA};
          }
        `}
`,d=l.button`
  ${a}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({$isActivated:e})=>e?r`
          border-color: ${({theme:o})=>o.colors.AZURE_BLUE};
          background-color: ${({theme:o})=>o.colors.AZURE_BLUE};
          box-shadow: 0 0 12px ${({theme:o})=>o.colors.AZURE_BLUE};

          color: ${({theme:o})=>o.colors.OFF_WHITE};
        `:r`
          &:hover {
            border-color: ${({theme:o})=>o.colors.AZURE_BLUE};
            box-shadow: 0 0 12px ${({theme:o})=>o.colors.AZURE_BLUE};

            color: ${({theme:o})=>o.colors.AZURE_BLUE};
          }
        `}
`,p=l.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({theme:e})=>e.colors.BROWN_500};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  color: ${({theme:e})=>e.colors.BROWN_500};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`,n=e=>{const{mode:o,onClick:s}=e;return t.jsxs(c,{children:[t.jsx(i,{type:"button",$isActivated:o==="easy",onClick:()=>{s("easy")},"aria-label":"간편 입력 모드로 변경하기",children:"간편 입력"}),t.jsx(d,{type:"button",$isActivated:o==="manual",onClick:()=>{s("manual")},"aria-label":"직접 입력 모드로 변경하기",children:"직접 입력"}),t.jsx(p,{children:"OR"})]})};try{n.displayName="RandomDefenseCapsuleButton",n.__docgenInfo={description:"",displayName:"RandomDefenseCapsuleButton",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"easy"'},{value:'"manual"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(mode: RandomDefenseFormMode) => void"}}}}}catch{}export{n as R};
