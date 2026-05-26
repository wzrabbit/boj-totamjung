import{j as t}from"./jsx-runtime-SwSI87LU.js";import{y as r}from"./styled-components.browser.esm-DmPUYCQi.js";import{A as R}from"./AlgorithmList-VFHgVcQ1.js";import{S as x}from"./SimpleModal-BKXUdtxg.js";import{F as j}from"./FallbackWithImage-6zqbcytq.js";import{L as I}from"./Loading-Dr9diMyn.js";import{a as v}from"./getSearchResults-B9fljDQH.js";import{A as P}from"./algorithmInfos-yvhlfANf.js";import{r as a}from"./index-C5e9SFkp.js";import{S as L,u as w}from"./useTranslation-oInNA2-n.js";import{h as M}from"./hiderOptionsValidator-CTYLfD5r.js";import{s as U}from"./checkedAlgorithmIdsSanitizer-CGN-DhMu.js";import{f}from"./hiderOptionsDataHandler-CCmJd7PW.js";import{u as D}from"./useModalState-BsXo_e1W.js";import{n as V}from"./no-search-result-CRbCEMin.js";const E=r.div`
  flex-shrink: 0;

  width: 700px;
  height: 555px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:o})=>o.colors.GOLD};
`,G=r.div`
  position: relative;

  width: 700px;
  height: 505px;
  padding: 14px;

  border: 2px solid ${({theme:o})=>o.colors.GOLD};
  border-radius: 16px;
  background-color: ${({theme:o})=>o.colors.BROWN_900};
`,y=r.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:o})=>o.colors.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:o})=>o.colors.BROWN_900};
`,N=r.div`
  display: flex;
  column-gap: 6px;

  width: 420px;
  height: 100%;
  margin-right: auto;
`,B=r.div`
  & svg {
    height: 100%;

    color: ${({theme:o})=>o.colors.GOLD};
  }
`,T=r.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:o})=>o.colors.OFF_WHITE};
`,J=r.div`
  display: flex;

  user-select: none;
`,C=r.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,b=r.img`
  width: 30px;
  height: 30px;
`,k=r.p`
  font-size: 16px;
  color: ${({theme:o})=>o.colors.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:o})=>o.colors.GOLD};
  }
`,K=o=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...o},a.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),Q=async()=>{const{checkedAlgorithmIds:o}=await f();return U(o)},W=async o=>{if(!M(o))return;const l=await f();await browser.storage.local.set({[L.HIDER_OPTIONS]:{...l,checkedAlgorithmIds:o}})},Y=()=>{const{language:o}=w(),[l,p]=a.useState(""),[s,i]=a.useState([]),[A,g]=a.useState(!1);a.useEffect(()=>{(async()=>{const c=await Q();i(c),g(!0)})()},[]),a.useEffect(()=>{A&&W(s)},[s]);const m=c=>{p(c.target.value)},h=c=>{if(s.includes(c)){const S=s.filter(O=>O!==c);i(S);return}const u=[...s,c];i(u)},d=()=>{i(Array.from({length:P}).map((c,u)=>u+1))},n=()=>{i([])},e=v(l,o);return{keyword:l,items:e,checkedAlgorithmIds:s,isLoaded:A,handleChangeKeyword:m,toggleAlgorithm:h,checkAllAlgorithms:d,uncheckAllAlgorithms:n}},F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",no=()=>{const{keyword:o,items:l,checkedAlgorithmIds:p,isLoaded:s,handleChangeKeyword:i,toggleAlgorithm:A,checkAllAlgorithms:g,uncheckAllAlgorithms:m}=Y(),{activeModalName:h,openModal:d,closeModal:n}=D(),{t:e}=w();return t.jsxs(E,{role:"group",children:[t.jsx(G,{children:s?l.length>0?t.jsx(R,{items:l,checkedAlgorithmIds:p,onChange:A}):t.jsx(j,{imageSrc:V,imageWidth:136,imageHeight:125,title:e("options.algorithmPool.noResultTitle"),description:e("options.algorithmPool.noResultDescription")}):t.jsx(I,{})}),t.jsxs(y,{children:[t.jsxs(N,{children:[t.jsx(B,{children:t.jsx(K,{})}),t.jsx(T,{placeholder:e("options.algorithmPool.searchPlaceholder"),value:o,onChange:i})]}),t.jsxs(J,{children:[t.jsxs(C,{type:"button",onClick:()=>{d("checkAll")},"aria-label":e("options.algorithmPool.checkAllAriaLabel"),disabled:!s,children:[t.jsx(b,{src:F}),t.jsx(k,{children:e("options.algorithmPool.checkAllLabel")})]}),t.jsxs(C,{type:"button",onClick:()=>{d("uncheckAll")},"aria-label":e("options.algorithmPool.uncheckAllAriaLabel"),disabled:!s,children:[t.jsx(b,{src:H}),t.jsx(k,{children:e("options.algorithmPool.uncheckAllLabel")})]})]})]}),t.jsx(x,{title:e("options.algorithmPool.checkAllConfirmTitle"),actionType:"yesNo",width:"350px",height:"auto",open:h==="checkAll",message:e("options.algorithmPool.checkAllConfirmMessage"),onYesSelect:()=>{g(),n()},onNoSelect:n}),t.jsx(x,{title:e("options.algorithmPool.uncheckAllConfirmTitle"),actionType:"yesNo",width:"350px",height:"auto",open:h==="uncheckAll",message:e("options.algorithmPool.uncheckAllConfirmMessage"),onYesSelect:()=>{m(),n()},onNoSelect:n})]})};export{no as A,K as S};
