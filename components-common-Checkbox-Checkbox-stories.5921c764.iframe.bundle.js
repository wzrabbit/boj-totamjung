"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[4963],{"./src/components/common/Checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Checked$parameters,_Checked$parameters2,_NotChecked$parameter,_NotChecked$parameter2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,NotChecked:()=>NotChecked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/Checkbox",component:__webpack_require__("./src/components/common/Checkbox/Checkbox.tsx").A,argTypes:{isChecked:{description:"체크박스의 체크 여부를 의미합니다."},onChange:{description:"체크박스의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다."}},parameters:{docs:{description:{component:"`Checkbox`는 공용 체크박스 컴포넌트입니다. 크기가 작기 때문에 단독으로 쓰이기보다는 다른 요소들과 같이 쓰입니다."}}}},Checked={args:{isChecked:!0,ariaLabel:"다이나믹 프로그래밍",onChange:()=>{alert("onChange()")}}},NotChecked={args:{isChecked:!1,ariaLabel:"다이나믹 프로그래밍",onChange:()=>{alert("onChange()")}}};Checked.parameters={...Checked.parameters,docs:{...null===(_Checked$parameters=Checked.parameters)||void 0===_Checked$parameters?void 0:_Checked$parameters.docs,source:{originalSource:"{\n  args: {\n    isChecked: true,\n    ariaLabel: '다이나믹 프로그래밍',\n    onChange: () => {\n      alert('onChange()');\n    }\n  }\n}",...null===(_Checked$parameters2=Checked.parameters)||void 0===_Checked$parameters2||null===(_Checked$parameters2=_Checked$parameters2.docs)||void 0===_Checked$parameters2?void 0:_Checked$parameters2.source}}},NotChecked.parameters={...NotChecked.parameters,docs:{...null===(_NotChecked$parameter=NotChecked.parameters)||void 0===_NotChecked$parameter?void 0:_NotChecked$parameter.docs,source:{originalSource:"{\n  args: {\n    isChecked: false,\n    ariaLabel: '다이나믹 프로그래밍',\n    onChange: () => {\n      alert('onChange()');\n    }\n  }\n}",...null===(_NotChecked$parameter2=NotChecked.parameters)||void 0===_NotChecked$parameter2||null===(_NotChecked$parameter2=_NotChecked$parameter2.docs)||void 0===_NotChecked$parameter2?void 0:_NotChecked$parameter2.source}}};const __namedExportsOrder=["Checked","NotChecked"]},"./src/components/common/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Checkbox_Checkbox});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
  display: inline-block;
  position: relative;

  width: 16px;
  height: 16px;
`,FakeVisualCheckbox=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  border: 3px solid ${({theme})=>theme.color.GOLD};

  border-radius: 3px;
  transition: 0.15s;
  cursor: pointer;

  ${({theme,$isChecked})=>$isChecked?styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.GOLD};
          background-color: ${theme.color.GOLD};
        `:styled_components_browser_esm.AH`
          box-shadow: 0 0 8px ${theme.color.DARK_BROWN};
          background-color: transparent;
        `}
`,Checkbox=styled_components_browser_esm.I4.input.attrs({type:"checkbox"})`
  position: absolute;

  width: 100%;
  height: 100%;

  appearance: none;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox_Checkbox=props=>{const{isChecked,ariaLabel,onChange}=props;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Checkbox,{checked:isChecked,"aria-label":ariaLabel,onChange}),(0,jsx_runtime.jsx)(FakeVisualCheckbox,{$isChecked:isChecked})]})};Checkbox_Checkbox.displayName="Checkbox";const common_Checkbox_Checkbox=Checkbox_Checkbox;try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/common/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-common-Checkbox-Checkbox-stories.5921c764.iframe.bundle.js.map