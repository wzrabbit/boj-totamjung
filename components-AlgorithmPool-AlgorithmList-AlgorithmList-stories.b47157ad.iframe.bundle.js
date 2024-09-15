"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[8385],{"./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/AlgorithmPool/AlgorithmList",component:__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx").A,argTypes:{},parameters:{docs:{description:{component:"`AlgorithmList`는 여러 알고리즘 분류에 대한 체크 여부를 설정할 수 있는 목록입니다."}}}},Default={args:{items:[{id:1,name:"수학"},{id:2,name:"구현"},{id:3,name:"다이나믹 프로그래밍"},{id:4,name:"그래프 이론"},{id:5,name:"자료 구조"},{id:6,name:"문자열"},{id:7,name:"그리디 알고리즘"},{id:8,name:"브루트포스 알고리즘"},{id:9,name:"그래프 탐색"},{id:10,name:"정렬"}],checkedIds:[1,3,6,10],onChange:id=>{alert(`onChange(${id});`)}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    items,\n    checkedIds,\n    onChange: id => {\n      alert(`onChange(${id});`);\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmList_AlgorithmList});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").I4.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  overflow-y: auto;

  height: 100%;
`;const AlgorithmList_AlgorithmListItem=__webpack_require__("./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlgorithmList=props=>{const{items,checkedIds,onChange}=props;return(0,jsx_runtime.jsx)(Container,{children:items.map(((item,index)=>(0,jsx_runtime.jsx)(AlgorithmList_AlgorithmListItem,{id:item.id,name:item.name,isChecked:checkedIds.includes(item.id),backgroundColor:index%2==0?"brown":"light-brown",onChange},item.id)))})};AlgorithmList.displayName="AlgorithmList";const AlgorithmList_AlgorithmList=AlgorithmList;try{AlgorithmList.displayName="AlgorithmList",AlgorithmList.__docgenInfo={description:"",displayName:"AlgorithmList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Algorithm[]"}},checkedIds:{defaultValue:null,description:"",name:"checkedIds",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx#AlgorithmList"]={docgenInfo:AlgorithmList.__docgenInfo,name:"AlgorithmList",path:"src/components/AlgorithmPool/AlgorithmList/AlgorithmList.tsx#AlgorithmList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AlgorithmPool/AlgorithmList/AlgorithmListItem/AlgorithmListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlgorithmListItem_AlgorithmListItem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.li`
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
//# sourceMappingURL=components-AlgorithmPool-AlgorithmList-AlgorithmList-stories.b47157ad.iframe.bundle.js.map