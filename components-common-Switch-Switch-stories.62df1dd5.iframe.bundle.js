"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[2837],{"./src/components/common/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _LargeChecked$paramet,_LargeChecked$paramet2,_LargeNotChecked$para,_LargeNotChecked$para2,_MediumChecked$parame,_MediumChecked$parame2,_MediumNotChecked$par,_MediumNotChecked$par2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LargeChecked:()=>LargeChecked,LargeNotChecked:()=>LargeNotChecked,MediumChecked:()=>MediumChecked,MediumNotChecked:()=>MediumNotChecked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/Switch",component:__webpack_require__("./src/components/common/Switch/Switch.tsx").A,argTypes:{isChecked:{description:"스위치의 체크 여부를 의미합니다."},onChange:{description:"스위치의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다."}},parameters:{docs:{description:{component:"`Switch`는 공용 스위치 컴포넌트입니다."}}}},LargeChecked={args:{size:"large",isChecked:!0,ariaLabel:"테스트",onChange:()=>{alert("onChange()")}}},LargeNotChecked={args:{size:"large",isChecked:!1,ariaLabel:"테스트",onChange:()=>{alert("onChange()")}}},MediumChecked={args:{size:"medium",isChecked:!0,ariaLabel:"테스트",onChange:()=>{alert("onChange()")}}},MediumNotChecked={args:{size:"medium",isChecked:!1,ariaLabel:"테스트",onChange:()=>{alert("onChange()")}}};LargeChecked.parameters={...LargeChecked.parameters,docs:{...null===(_LargeChecked$paramet=LargeChecked.parameters)||void 0===_LargeChecked$paramet?void 0:_LargeChecked$paramet.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    isChecked: true,\n    ariaLabel: '테스트',\n    onChange: () => {\n      alert('onChange()');\n    }\n  }\n}",...null===(_LargeChecked$paramet2=LargeChecked.parameters)||void 0===_LargeChecked$paramet2||null===(_LargeChecked$paramet2=_LargeChecked$paramet2.docs)||void 0===_LargeChecked$paramet2?void 0:_LargeChecked$paramet2.source}}},LargeNotChecked.parameters={...LargeNotChecked.parameters,docs:{...null===(_LargeNotChecked$para=LargeNotChecked.parameters)||void 0===_LargeNotChecked$para?void 0:_LargeNotChecked$para.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    isChecked: false,\n    ariaLabel: '테스트',\n    onChange: () => {\n      alert('onChange()');\n    }\n  }\n}",...null===(_LargeNotChecked$para2=LargeNotChecked.parameters)||void 0===_LargeNotChecked$para2||null===(_LargeNotChecked$para2=_LargeNotChecked$para2.docs)||void 0===_LargeNotChecked$para2?void 0:_LargeNotChecked$para2.source}}},MediumChecked.parameters={...MediumChecked.parameters,docs:{...null===(_MediumChecked$parame=MediumChecked.parameters)||void 0===_MediumChecked$parame?void 0:_MediumChecked$parame.docs,source:{originalSource:"{\n  args: {\n    size: 'medium',\n    isChecked: true,\n    ariaLabel: '테스트',\n    onChange: () => {\n      alert('onChange()');\n    }\n  }\n}",...null===(_MediumChecked$parame2=MediumChecked.parameters)||void 0===_MediumChecked$parame2||null===(_MediumChecked$parame2=_MediumChecked$parame2.docs)||void 0===_MediumChecked$parame2?void 0:_MediumChecked$parame2.source}}},MediumNotChecked.parameters={...MediumNotChecked.parameters,docs:{...null===(_MediumNotChecked$par=MediumNotChecked.parameters)||void 0===_MediumNotChecked$par?void 0:_MediumNotChecked$par.docs,source:{originalSource:"{\n  args: {\n    size: 'medium',\n    isChecked: false,\n    ariaLabel: '테스트',\n    onChange: () => {\n      alert('onChange()');\n    }\n  }\n}",...null===(_MediumNotChecked$par2=MediumNotChecked.parameters)||void 0===_MediumNotChecked$par2||null===(_MediumNotChecked$par2=_MediumNotChecked$par2.docs)||void 0===_MediumNotChecked$par2?void 0:_MediumNotChecked$par2.source}}};const __namedExportsOrder=["LargeChecked","LargeNotChecked","MediumChecked","MediumNotChecked"]},"./src/components/common/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Switch_Switch});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: inline-block;
  position: relative;

  width: ${({$size})=>"large"===$size?"50px":"40px"};
  height: ${({$size})=>"large"===$size?"30px":"24px"};

  & * {
    border-radius: ${({$size})=>"large"===$size?"15px":"12px"};
  }
`,Switch=styled_components_browser_esm.I4.input.attrs({type:"checkbox",role:"switch"})`
  position: relative;

  width: 100%;
  height: 100%;

  appearance: none;
`,FakeVisualSwitch=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({theme,$isChecked})=>$isChecked?theme.color.GOLD:theme.color.LIGHTER_BROWN};

  box-shadow: ${({theme,$isChecked})=>$isChecked?`0 0 12px ${theme.color.GOLD}`:"0 0 12px transparent"};
  cursor: pointer;
  transition: 0.4s;
`,Handle=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: absolute;

  width: ${({$size})=>"large"===$size?"26px":"20px"};
  height: ${({$size})=>"large"===$size?"26px":"20px"};
  margin: 2px;

  background-color: ${({theme})=>theme.color.DARK_BROWN};

  transition: transform 0.2s;

  ${({$size,$isChecked})=>$isChecked?"large"===$size?styled_components_browser_esm.AH`
            transform: translateX(20px);
          `:styled_components_browser_esm.AH`
            transform: translateX(16px);
          `:styled_components_browser_esm.AH`
          transform: translateX(0);
        `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch_Switch=props=>{const{size,isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{$size:size,children:[(0,jsx_runtime.jsx)(Switch,{checked:isChecked,"aria-label":ariaLabel,onChange,value:""}),(0,jsx_runtime.jsx)(FakeVisualSwitch,{$isChecked:isChecked,children:(0,jsx_runtime.jsx)(Handle,{$size:size,$isChecked:isChecked})})]})};Switch_Switch.displayName="Switch";const common_Switch_Switch=Switch_Switch;try{Switch_Switch.displayName="Switch",Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Switch/Switch.tsx#Switch"]={docgenInfo:Switch_Switch.__docgenInfo,name:"Switch",path:"src/components/common/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-common-Switch-Switch-stories.62df1dd5.iframe.bundle.js.map