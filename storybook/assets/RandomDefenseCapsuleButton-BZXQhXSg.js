import{j as t}from"./jsx-runtime-SwSI87LU.js";import{u as c}from"./useTranslation-CHmiwnmk.js";import{y as a,p as r}from"./styled-components.browser.esm-DmPUYCQi.js";const d=a.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`,i=r`
  width: 50%;

  border: 1.5px solid ${({theme:e})=>e.colors.BROWN_500};
  background-color: ${({theme:e})=>e.colors.BROWN_900};

  font-size: 16px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.BROWN_500};

  transition: 0.2s;
`,p=a.button`
  ${i}

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
`,u=a.button`
  ${i}

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
`,m=a.span`
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
`,n=e=>{const{mode:o,onClick:s}=e,{t:l}=c();return t.jsxs(d,{children:[t.jsx(p,{type:"button",$isActivated:o==="simple",onClick:()=>{s("simple")},"aria-label":l("randomDefenseCreate.capsule.simpleAriaLabel"),children:l("randomDefenseCreate.capsule.simpleLabel")}),t.jsx(u,{type:"button",$isActivated:o==="manual",onClick:()=>{s("manual")},"aria-label":l("randomDefenseCreate.capsule.manualAriaLabel"),children:l("randomDefenseCreate.capsule.manualLabel")}),t.jsx(m,{children:"OR"})]})};try{n.displayName="RandomDefenseCapsuleButton",n.__docgenInfo={description:"",displayName:"RandomDefenseCapsuleButton",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"manual"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(mode: RandomDefenseFormMode) => void"}}}}}catch{}export{n as R};
