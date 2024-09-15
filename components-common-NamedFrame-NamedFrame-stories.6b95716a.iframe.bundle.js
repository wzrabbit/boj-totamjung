"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[8733],{"./src/components/common/NamedFrame/NamedFrame.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_NamedFrame__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/NamedFrame/NamedFrame.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/NamedFrame",component:_NamedFrame__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{},parameters:{docs:{description:{component:"`NamedFrame`는 레이아웃을 제작하기 위한 기본 레이아웃 컴포넌트입니다. 이름을 지정할 수 있으며, 내부에 사용자에게 기능을 제공하기 위한 메뉴들을 자유롭게 사용할 수 있습니다."}}}},Default={args:{width:"280px",height:"150px",padding:"10px",title:"테스트 메뉴",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{color:"white"},children:"Hello, World!"})})}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {\n    width: '280px',\n    height: '150px',\n    padding: '10px',\n    title: '테스트 메뉴',\n    children: <div style={{\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      width: '100%',\n      height: '100%'\n    }}>\n        <p style={{\n        color: 'white'\n      }}>Hello, World!</p>\n      </div>\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/common/NamedFrame/NamedFrame.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>NamedFrame_NamedFrame});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: inline-block;
  position: relative;

  width: ${({$width})=>$width};
  height: ${({$height})=>$height};

  padding: ${({$padding})=>$padding};

  border: 2px solid ${({theme})=>theme.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({theme})=>theme.color.DARK_BROWN};
`,Title=styled_components_browser_esm.I4.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({theme})=>theme.color.LIGHTER_BROWN};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NamedFrame=props=>{const{width,height,padding,title,children}=props;return(0,jsx_runtime.jsxs)(Container,{$width:width,$height:height,$padding:padding,children:[""!==title&&(0,jsx_runtime.jsx)(Title,{children:title}),children]})};NamedFrame.displayName="NamedFrame";const NamedFrame_NamedFrame=NamedFrame;try{NamedFrame.displayName="NamedFrame",NamedFrame.__docgenInfo={description:"",displayName:"NamedFrame",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},padding:{defaultValue:null,description:"",name:"padding",required:!0,type:{name:"Padding<number | (string & {})> | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/NamedFrame/NamedFrame.tsx#NamedFrame"]={docgenInfo:NamedFrame.__docgenInfo,name:"NamedFrame",path:"src/components/common/NamedFrame/NamedFrame.tsx#NamedFrame"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-common-NamedFrame-NamedFrame-stories.6b95716a.iframe.bundle.js.map