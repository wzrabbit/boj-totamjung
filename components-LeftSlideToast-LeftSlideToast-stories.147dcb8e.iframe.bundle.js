"use strict";(self.webpackChunktotamjung=self.webpackChunktotamjung||[]).push([[2639],{"./src/components/LeftSlideToast/LeftSlideToast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MultipleDescriptions:()=>MultipleDescriptions,NoDescription:()=>NoDescription,SvgIcon:()=>SvgIcon,TotamjungTheme:()=>TotamjungTheme,TotamjungThemeWithSvgIcon:()=>TotamjungThemeWithSvgIcon,VeryLongDescription:()=>VeryLongDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LeftSlideToast_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  display: flex;
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;

  ${({theme,$totamjungTheme})=>"totamjung"===$totamjungTheme?styled_components_browser_esm.AH`
          border: 2px solid ${theme.color.LIGHTER_BROWN};
          background-color: ${theme.color.DARK_BROWN};
          box-shadow: 0 0 20px ${theme.color.LIGHTER_BROWN};
        `:styled_components_browser_esm.AH`
          border: 2px solid ${theme.color.BOJ_BLUE};
          background-color: ${theme.color.BOJ_BLUE};
        `}

  transform: ${({$open})=>$open?"translateX(0)":"translateX(-450px)"};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`,LeftIconWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`,IconImage=styled_components_browser_esm.I4.img`
  width: 40px;

  filter: ${({theme,$totamjungTheme})=>"totamjung"===$totamjungTheme?theme.filter.LIGHTEST_BROWN_FILTER:theme.filter.WHITE_FILTER};
  user-select: none;
`,IconWrapper=styled_components_browser_esm.I4.div`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({theme,$totamjungTheme})=>"totamjung"===$totamjungTheme?theme.color.LIGHTEST_BROWN:theme.color.WHITE};
  }
`,ContentContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 264px;
`,Title=styled_components_browser_esm.I4.p`
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  color: ${({theme,$totamjungTheme})=>"totamjung"===$totamjungTheme?theme.color.BEIGE:theme.color.WHITE};
`,DescriptionList=styled_components_browser_esm.I4.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,DescriptionContainer=styled_components_browser_esm.I4.li`
  display: flex;
  column-gap: 3px;

  min-height: 17px;

  line-height: 17px;

  & > svg {
    flex-shrink: 0;

    width: 17px;
    height: 17px;
    color: ${({theme,$totamjungTheme})=>"totamjung"===$totamjungTheme?theme.color.LIGHTEST_BROWN:theme.color.WHITE};
  }
`,Description=styled_components_browser_esm.I4.p`
  font-size: 14px;
  word-break: break-all;
  color: ${({theme})=>theme.color.WHITE};
`,RightControlPanel=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  width: 32px;
`,CloseButton=styled_components_browser_esm.I4.button`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({theme,$totamjungTheme})=>"totamjung"===$totamjungTheme?theme.color.LIGHTEST_BROWN:theme.color.WHITE};
  }
`;var svg=__webpack_require__("./src/images/svg/index.ts");const common_CircleProgressBar=__webpack_require__("./src/components/common/CircleProgressBar/CircleProgressBar.tsx").A;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const COLORS_WHITE="white",COLORS_SKY_BLUE="#1c8cd1",COLORS_BROWN="#331911",COLORS_LIGHT_BROWN="#a17362",LeftSlideToast=props=>{const{mainIconSrc,theme,progress,title,descriptions,open,onClose}=props,listedDescriptions=Array.isArray(descriptions)?descriptions:[descriptions];return(0,jsx_runtime.jsxs)(Container,{$open:open,$totamjungTheme:theme,children:[(0,jsx_runtime.jsx)(LeftIconWrapper,{children:mainIconSrc&&("string"==typeof mainIconSrc?(0,jsx_runtime.jsx)(IconImage,{src:mainIconSrc,$totamjungTheme:theme,alt:""}):(0,jsx_runtime.jsx)(IconWrapper,{$totamjungTheme:theme,children:mainIconSrc}))}),(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(Title,{"aria-live":"assertive",$totamjungTheme:theme,children:title}),descriptions&&(0,jsx_runtime.jsx)(DescriptionList,{children:listedDescriptions.map(((description,index)=>(0,jsx_runtime.jsxs)(DescriptionContainer,{$totamjungTheme:theme,children:[(0,jsx_runtime.jsx)(svg.Sr,{}),(0,jsx_runtime.jsx)(Description,{$totamjungTheme:theme,children:description},index)]},index)))})]}),(0,jsx_runtime.jsxs)(RightControlPanel,{children:[(0,jsx_runtime.jsx)(CloseButton,{type:"button","aria-label":"토스트 닫기",$totamjungTheme:theme,onClick:onClose,children:(0,jsx_runtime.jsx)(svg.US,{})}),(0,jsx_runtime.jsx)(common_CircleProgressBar,{size:32,progress,color:"totamjung"===theme?COLORS_LIGHT_BROWN:COLORS_WHITE,trackColor:"totamjung"===theme?COLORS_BROWN:COLORS_SKY_BLUE})]})]})};LeftSlideToast.displayName="LeftSlideToast";const LeftSlideToast_LeftSlideToast=LeftSlideToast;try{LeftSlideToast.displayName="LeftSlideToast",LeftSlideToast.__docgenInfo={description:"",displayName:"LeftSlideToast",props:{mainIconSrc:{defaultValue:null,description:"",name:"mainIconSrc",required:!0,type:{name:"string | SVGProps<SVGSVGElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},descriptions:{defaultValue:null,description:"",name:"descriptions",required:!1,type:{name:"string | string[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LeftSlideToast/LeftSlideToast.tsx#LeftSlideToast"]={docgenInfo:LeftSlideToast.__docgenInfo,name:"LeftSlideToast",path:"src/components/LeftSlideToast/LeftSlideToast.tsx#LeftSlideToast"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_SvgIcon$parameters,_SvgIcon$parameters2,_TotamjungTheme$param,_TotamjungTheme$param2,_TotamjungThemeWithSv,_TotamjungThemeWithSv2,_MultipleDescriptions,_MultipleDescriptions2,_NoDescription$parame,_NoDescription$parame2,_VeryLongDescription$,_VeryLongDescription$2,_VeryLongDescription$3;const LeftSlideToast_stories={title:"components/LeftSlideToast",component:LeftSlideToast_LeftSlideToast,argTypes:{progress:{control:{type:"range",min:0,max:100}}},parameters:{docs:{description:{component:"`LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다."}}}},Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"160px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:chrome.runtime.getURL("dice.png"),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},SvgIcon={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"160px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:(0,jsx_runtime.jsx)(svg.Td,{}),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},TotamjungTheme={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"160px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:chrome.runtime.getURL("dice.png"),theme:"totamjung",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},TotamjungThemeWithSvgIcon={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"160px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:(0,jsx_runtime.jsx)(svg.Td,{}),theme:"totamjung",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:()=>{alert("onClose()")}}},MultipleDescriptions={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"160px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:chrome.runtime.getURL("dice.png"),theme:"none",progress:65,title:"필요할 경우 여러 개의 설명을 사용할 수도 있습니다.",descriptions:["이건 첫 번째 설명이고요,","이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요."],open:!0,onClose:()=>{alert("onClose()")}}},NoDescription={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"150px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:chrome.runtime.getURL("dice.png"),theme:"none",progress:65,title:"설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.",open:!0,onClose:()=>{alert("onClose()")}}},VeryLongDescription={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"300px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{mainIconSrc:chrome.runtime.getURL("dice.png"),theme:"none",progress:65,title:"매우 긴 설명",descriptions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.",open:!0,onClose:()=>{alert("onClose()")}}};Default.parameters={...Default.parameters,docs:{...null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '160px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: chrome.runtime.getURL('dice.png'),\n    theme: 'none',\n    progress: 65,\n    title: '테스트 제목입니다.',\n    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source}}},SvgIcon.parameters={...SvgIcon.parameters,docs:{...null===(_SvgIcon$parameters=SvgIcon.parameters)||void 0===_SvgIcon$parameters?void 0:_SvgIcon$parameters.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '160px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: <CopyIcon />,\n    theme: 'none',\n    progress: 65,\n    title: '테스트 제목입니다.',\n    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_SvgIcon$parameters2=SvgIcon.parameters)||void 0===_SvgIcon$parameters2||null===(_SvgIcon$parameters2=_SvgIcon$parameters2.docs)||void 0===_SvgIcon$parameters2?void 0:_SvgIcon$parameters2.source}}},TotamjungTheme.parameters={...TotamjungTheme.parameters,docs:{...null===(_TotamjungTheme$param=TotamjungTheme.parameters)||void 0===_TotamjungTheme$param?void 0:_TotamjungTheme$param.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '160px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: chrome.runtime.getURL('dice.png'),\n    theme: 'totamjung',\n    progress: 65,\n    title: '테스트 제목입니다.',\n    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_TotamjungTheme$param2=TotamjungTheme.parameters)||void 0===_TotamjungTheme$param2||null===(_TotamjungTheme$param2=_TotamjungTheme$param2.docs)||void 0===_TotamjungTheme$param2?void 0:_TotamjungTheme$param2.source}}},TotamjungThemeWithSvgIcon.parameters={...TotamjungThemeWithSvgIcon.parameters,docs:{...null===(_TotamjungThemeWithSv=TotamjungThemeWithSvgIcon.parameters)||void 0===_TotamjungThemeWithSv?void 0:_TotamjungThemeWithSv.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '160px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: <CopyIcon />,\n    theme: 'totamjung',\n    progress: 65,\n    title: '테스트 제목입니다.',\n    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_TotamjungThemeWithSv2=TotamjungThemeWithSvgIcon.parameters)||void 0===_TotamjungThemeWithSv2||null===(_TotamjungThemeWithSv2=_TotamjungThemeWithSv2.docs)||void 0===_TotamjungThemeWithSv2?void 0:_TotamjungThemeWithSv2.source}}},MultipleDescriptions.parameters={...MultipleDescriptions.parameters,docs:{...null===(_MultipleDescriptions=MultipleDescriptions.parameters)||void 0===_MultipleDescriptions?void 0:_MultipleDescriptions.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '160px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: chrome.runtime.getURL('dice.png'),\n    theme: 'none',\n    progress: 65,\n    title: '필요할 경우 여러 개의 설명을 사용할 수도 있습니다.',\n    descriptions: ['이건 첫 번째 설명이고요,', '이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요.'],\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_MultipleDescriptions2=MultipleDescriptions.parameters)||void 0===_MultipleDescriptions2||null===(_MultipleDescriptions2=_MultipleDescriptions2.docs)||void 0===_MultipleDescriptions2?void 0:_MultipleDescriptions2.source}}},NoDescription.parameters={...NoDescription.parameters,docs:{...null===(_NoDescription$parame=NoDescription.parameters)||void 0===_NoDescription$parame?void 0:_NoDescription$parame.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '150px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: chrome.runtime.getURL('dice.png'),\n    theme: 'none',\n    progress: 65,\n    title: '설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.',\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_NoDescription$parame2=NoDescription.parameters)||void 0===_NoDescription$parame2||null===(_NoDescription$parame2=_NoDescription$parame2.docs)||void 0===_NoDescription$parame2?void 0:_NoDescription$parame2.source}}},VeryLongDescription.parameters={...VeryLongDescription.parameters,docs:{...null===(_VeryLongDescription$=VeryLongDescription.parameters)||void 0===_VeryLongDescription$?void 0:_VeryLongDescription$.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    height: '300px'\n  }}>\n        <Story />\n      </div>],\n  args: {\n    mainIconSrc: chrome.runtime.getURL('dice.png'),\n    theme: 'none',\n    progress: 65,\n    title: '매우 긴 설명',\n    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.',\n    open: true,\n    onClose: () => {\n      alert('onClose()');\n    }\n  }\n}",...null===(_VeryLongDescription$2=VeryLongDescription.parameters)||void 0===_VeryLongDescription$2||null===(_VeryLongDescription$2=_VeryLongDescription$2.docs)||void 0===_VeryLongDescription$2?void 0:_VeryLongDescription$2.source},description:{story:"설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.",...null===(_VeryLongDescription$3=VeryLongDescription.parameters)||void 0===_VeryLongDescription$3||null===(_VeryLongDescription$3=_VeryLongDescription$3.docs)||void 0===_VeryLongDescription$3?void 0:_VeryLongDescription$3.description}}};const __namedExportsOrder=["Default","SvgIcon","TotamjungTheme","TotamjungThemeWithSvgIcon","MultipleDescriptions","NoDescription","VeryLongDescription"];try{VeryLongDescription.displayName="VeryLongDescription",VeryLongDescription.__docgenInfo={description:"설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.",displayName:"VeryLongDescription",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LeftSlideToast/LeftSlideToast.stories.tsx#VeryLongDescription"]={docgenInfo:VeryLongDescription.__docgenInfo,name:"VeryLongDescription",path:"src/components/LeftSlideToast/LeftSlideToast.stories.tsx#VeryLongDescription"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/CircleProgressBar/CircleProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>common_CircleProgressBar_CircleProgressBar});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.I4.div`
  width: ${({$width})=>`${$width}px`};
  height: ${({$height})=>`${$height}px`};

  & > svg {
    width: 100%;
    height: 100%;
  }
`,CircleProgressBar=styled_components_browser_esm.I4.svg`
  transform: rotate(-90deg);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleProgressBar_CircleProgressBar=props=>{const{size,progress,color,trackColor}=props,strokeWidth=size/8,center=size/2,radius=(size-2*strokeWidth)/2,round=2*Math.PI*radius,dashOffset=round*(100-progress)/100;return(0,jsx_runtime.jsx)(Container,{$width:size,$height:size,children:(0,jsx_runtime.jsxs)(CircleProgressBar,{children:[(0,jsx_runtime.jsx)("circle",{cx:center,cy:center,r:radius,strokeWidth,stroke:trackColor,fill:"none"}),(0,jsx_runtime.jsx)("circle",{cx:center,cy:center,r:radius,strokeWidth,stroke:color,strokeDasharray:round,strokeDashoffset:dashOffset,fill:"none"})]})})};CircleProgressBar_CircleProgressBar.displayName="CircleProgressBar";const common_CircleProgressBar_CircleProgressBar=CircleProgressBar_CircleProgressBar;try{CircleProgressBar_CircleProgressBar.displayName="CircleProgressBar",CircleProgressBar_CircleProgressBar.__docgenInfo={description:"",displayName:"CircleProgressBar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},trackColor:{defaultValue:null,description:"",name:"trackColor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/CircleProgressBar/CircleProgressBar.tsx#CircleProgressBar"]={docgenInfo:CircleProgressBar_CircleProgressBar.__docgenInfo,name:"CircleProgressBar",path:"src/components/common/CircleProgressBar/CircleProgressBar.tsx#CircleProgressBar"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-LeftSlideToast-LeftSlideToast-stories.147dcb8e.iframe.bundle.js.map