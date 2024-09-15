"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[7813],{"./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _CheckedLightBrownCol,_CheckedLightBrownCol2,_NotCheckedLightBrown,_NotCheckedLightBrown2,_CheckedBrownColor$pa,_CheckedBrownColor$pa2,_NotCheckedBrownColor,_NotCheckedBrownColor2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckedBrownColor:()=>CheckedBrownColor,CheckedLightBrownColor:()=>CheckedLightBrownColor,NotCheckedBrownColor:()=>NotCheckedBrownColor,NotCheckedLightBrownColor:()=>NotCheckedLightBrownColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/AlgorithmPool/AlgorithmListItem",component:__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`AlgorithmListItem`는 하나의 알고리즘 분류에 대한 체크 여부를 설정할 수 있는 컴포넌트입니다."}}}},CheckedLightBrownColor={args:{id:1,name:"그리디 알고리즘",isChecked:!0,backgroundColor:"light-brown",onChange:id=>{alert(`onChange(${id})`)}}},NotCheckedLightBrownColor={args:{id:1,name:"그리디 알고리즘",isChecked:!1,backgroundColor:"light-brown",onChange:id=>{alert(`onChange(${id})`)}}},CheckedBrownColor={args:{id:1,name:"그리디 알고리즘",isChecked:!0,backgroundColor:"brown",onChange:id=>{alert(`onChange(${id})`)}}},NotCheckedBrownColor={args:{id:1,name:"그리디 알고리즘",isChecked:!1,backgroundColor:"brown",onChange:id=>{alert(`onChange(${id})`)}}};CheckedLightBrownColor.parameters={...CheckedLightBrownColor.parameters,docs:{...null===(_CheckedLightBrownCol=CheckedLightBrownColor.parameters)||void 0===_CheckedLightBrownCol?void 0:_CheckedLightBrownCol.docs,source:{originalSource:"{\n  args: {\n    id: 1,\n    name: '그리디 알고리즘',\n    isChecked: true,\n    backgroundColor: 'light-brown',\n    onChange: (id: number) => {\n      alert(`onChange(${id})`);\n    }\n  }\n}",...null===(_CheckedLightBrownCol2=CheckedLightBrownColor.parameters)||void 0===_CheckedLightBrownCol2||null===(_CheckedLightBrownCol2=_CheckedLightBrownCol2.docs)||void 0===_CheckedLightBrownCol2?void 0:_CheckedLightBrownCol2.source}}},NotCheckedLightBrownColor.parameters={...NotCheckedLightBrownColor.parameters,docs:{...null===(_NotCheckedLightBrown=NotCheckedLightBrownColor.parameters)||void 0===_NotCheckedLightBrown?void 0:_NotCheckedLightBrown.docs,source:{originalSource:"{\n  args: {\n    id: 1,\n    name: '그리디 알고리즘',\n    isChecked: false,\n    backgroundColor: 'light-brown',\n    onChange: (id: number) => {\n      alert(`onChange(${id})`);\n    }\n  }\n}",...null===(_NotCheckedLightBrown2=NotCheckedLightBrownColor.parameters)||void 0===_NotCheckedLightBrown2||null===(_NotCheckedLightBrown2=_NotCheckedLightBrown2.docs)||void 0===_NotCheckedLightBrown2?void 0:_NotCheckedLightBrown2.source}}},CheckedBrownColor.parameters={...CheckedBrownColor.parameters,docs:{...null===(_CheckedBrownColor$pa=CheckedBrownColor.parameters)||void 0===_CheckedBrownColor$pa?void 0:_CheckedBrownColor$pa.docs,source:{originalSource:"{\n  args: {\n    id: 1,\n    name: '그리디 알고리즘',\n    isChecked: true,\n    backgroundColor: 'brown',\n    onChange: (id: number) => {\n      alert(`onChange(${id})`);\n    }\n  }\n}",...null===(_CheckedBrownColor$pa2=CheckedBrownColor.parameters)||void 0===_CheckedBrownColor$pa2||null===(_CheckedBrownColor$pa2=_CheckedBrownColor$pa2.docs)||void 0===_CheckedBrownColor$pa2?void 0:_CheckedBrownColor$pa2.source}}},NotCheckedBrownColor.parameters={...NotCheckedBrownColor.parameters,docs:{...null===(_NotCheckedBrownColor=NotCheckedBrownColor.parameters)||void 0===_NotCheckedBrownColor?void 0:_NotCheckedBrownColor.docs,source:{originalSource:"{\n  args: {\n    id: 1,\n    name: '그리디 알고리즘',\n    isChecked: false,\n    backgroundColor: 'brown',\n    onChange: (id: number) => {\n      alert(`onChange(${id})`);\n    }\n  }\n}",...null===(_NotCheckedBrownColor2=NotCheckedBrownColor.parameters)||void 0===_NotCheckedBrownColor2||null===(_NotCheckedBrownColor2=_NotCheckedBrownColor2.docs)||void 0===_NotCheckedBrownColor2?void 0:_NotCheckedBrownColor2.source}}};const __namedExportsOrder=["CheckedLightBrownColor","NotCheckedLightBrownColor","CheckedBrownColor","NotCheckedBrownColor"]},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmListItem_AlgorithmListItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.li`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({theme,$backgroundColor})=>"brown"===$backgroundColor?theme.color.BROWN:theme.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`,Label=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`,Text=styled_components_browser_esm.I4.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({theme})=>theme.color.LEMON};

  cursor: pointer;
`;const common_Checkbox=__webpack_require__("./src/components/common/Checkbox/Checkbox.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmListItem=props=>{const{id,name,isChecked,backgroundColor,onChange}=props;return(0,jsx_runtime.jsx)(Container,{$backgroundColor:backgroundColor,children:(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)(Text,{children:name}),(0,jsx_runtime.jsx)(common_Checkbox,{isChecked,onChange:()=>onChange(id),ariaLabel:name})]})})};AlgorithmListItem.displayName="AlgorithmListItem";const AlgorithmListItem_AlgorithmListItem=AlgorithmListItem;try{AlgorithmListItem.displayName="AlgorithmListItem",AlgorithmListItem.__docgenInfo={description:"",displayName:"AlgorithmListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"light-brown"'},{value:'"brown"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx#AlgorithmListItem"]={docgenInfo:AlgorithmListItem.__docgenInfo,name:"AlgorithmListItem",path:"src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx#AlgorithmListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_Checkbox_Checkbox});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.label`
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
//# sourceMappingURL=components-AlgorithmPool-AlgorithmList-AlgorithmListItem-AlgorithmListItem-stories.c9da9025.iframe.bundle.js.map