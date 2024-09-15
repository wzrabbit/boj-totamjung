"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[4083],{"./src/components/common/Loading/Loading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/common/Loading",component:__webpack_require__("./src/components/common/Loading/Loading.tsx").A,parameters:{docs:{description:{component:"`Loading`은 콘텐츠가 로딩 중일 경우 이를 시각적으로 전달하는 역할을 하는 공통 컴포넌트입니다. 이 컴포넌트는 항상 부모 요소를 기준으로 상하좌우로 중앙에 배치됩니다."}}}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  args: {}\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}};const __namedExportsOrder=["Default"]},"./src/components/common/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Loading_Loading});var svg=__webpack_require__("./src/images/svg/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spin=styled_components_browser_esm.i7`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,Container=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > svg {
    width: 24px;
    height: 24px;

    color: ${({theme})=>theme.color.GOLD};

    animation: ${spin} 2s forwards infinite linear;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=()=>(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(svg.mP,{})});Loading.displayName="Loading";const Loading_Loading=Loading}}]);
//# sourceMappingURL=components-common-Loading-Loading-stories.333461b2.iframe.bundle.js.map