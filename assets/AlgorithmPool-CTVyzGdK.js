import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as r}from"./styled-components.browser.esm-CkAH7aAm.js";import{A as f}from"./AlgorithmList-pvpffuOk.js";import{S as u}from"./SimpleModal-BmUXxdO3.js";import{g as O}from"./getSearchResults-B9kgfFwa.js";import{a as R}from"./algorithmInfos-Cl_JsY5X.js";import{r as A}from"./index-RYns6xqu.js";import{S as g}from"./commands-CyQPP6hL.js";import{i as I}from"./checkedAlgorithmIdsValidator-CxrjO6qi.js";import{d as D}from"./defaultValues-Ccu0oMSE.js";import{u as E}from"./useModal-CV8qRtLl.js";const j=r.div`
  flex-shrink: 0;

  width: 700px;
  height: 490px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({theme:o})=>o.color.GOLD};
`,M=r.div`
  position: relative;

  width: 700px;
  height: 440px;
  padding: 14px;

  border: 2px solid ${({theme:o})=>o.color.GOLD};
  border-radius: 16px;
  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,U=r.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({theme:o})=>o.color.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({theme:o})=>o.color.DARK_BROWN};
`,G=r.div`
  display: flex;
  column-gap: 6px;

  width: 300px;
  height: 100%;
  margin-right: auto;
`,L=r.div`
  & svg {
    height: 100%;

    color: ${({theme:o})=>o.color.GOLD};
  }
`,v=r.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({theme:o})=>o.color.WHITE};
`,V=r.div`
  display: flex;

  user-select: none;
`,m=r.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`,b=r.img`
  width: 30px;
  height: 30px;
`,w=r.p`
  font-size: 16px;
  color: ${({theme:o})=>o.color.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({theme:o})=>o.color.GOLD};
  }
`,y=o=>A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256",...o},A.createElement("path",{fill:"currentColor",d:"M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"})),K=o=>Array.isArray(o)?o.filter(t=>typeof t=="number"&&!isNaN(t)&&t%1===0&&t>=1):D,N=async()=>{const t=(await browser.storage.local.get(g.CHECKED_ALGORITHM_IDS))[g.CHECKED_ALGORITHM_IDS];return{checkedIds:K(t)}},B=o=>{I(o)&&browser.storage.local.set({[g.CHECKED_ALGORITHM_IDS]:o})},H=()=>{const[o,t]=A.useState(""),[s,n]=A.useState([]),[i,d]=A.useState(!1);A.useEffect(()=>{(async()=>{const c=await N();n(c.checkedIds),d(!0)})()},[]),A.useEffect(()=>{i&&B(s)},[s]);const p=c=>{t(c.target.value)},x=c=>{if(s.includes(c)){const k=s.filter(S=>S!==c);n(k);return}const C=[...s,c];n(C)},l=()=>{n(Array.from({length:R}).map((c,C)=>C+1))},h=()=>{n([])},a=O(o);return{keyword:o,items:a,checkedIds:s,isLoaded:i,handleChangeKeyword:p,toggleAlgorithm:x,checkAllAlgorithms:l,uncheckAllAlgorithms:h}},T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAKh9V5tzUdCcbZx0URkNCRoPChoNCiMUDxkMDBoOCRoOChkOChwQCxkOCm1PN8qXarCDXBoOCqV7Vc2aa7OGXhkOCVY8KzwoHQAAAIxmSCMVDhoOCks0JRkOCmdKNHVVOxoNCqt/WWpNNhoOCq6CWpRuTHpaP8qYaRsNCR0QDB4RDSwcExkNCS0dFWJGMZdvTqV6VRoNCnJTOuDHdL4AAAAzdFJOUwD/////gDB0/yib//j/x////8P///+L//8E//+P//f//5P///v/////OP///8//////ywB6AwUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAHmSURBVDhPnVSLVioxDIxWXgYFvYriA0RWvLfiA/3/f3My6cLusity5xyaZDpJ026LiKoKxgDQXMBq+MsQg8LQykh1QjdMJHShpB/kwXKERkakQvjKSyLfIoxLRWVAJjS+kGwiuGhF9Q6kTBM788UJm6Ezt6oz+IswR2FFbzZtKyWfMH+Y/AhfPXjGDKrmMxn8fMbcaT4BDAemBCYF0jDEQQC+wwKUGRt6rtw0CGSQXmo3kaStLfrhRO3IDSV6A6fvBh7leH7HYF3O/PSIaKTTsp1xTLqckZHsnafQcNqjSjr6mDINj7FFttqer/VLlrW3WNYusIrvvHUYqlc22s/ZuMrJAnupukpkUQs6kaW6h/pGW2bDHzcVdo392VZ88pA4i/ZhcELtTz9w4vrA5vY6TbLV2iOy5dqv/8CMO/0U1qHfGXuiodfXRSpYh6OYtZNS5Lx0S7bxpJ9JiR1Ut1AF/5Ecv9Cu+27Qzu0eES5g37VavEzVG/eTwPouaBe4bQYqr/wZr7XW91r7EVW7UJeV9dpwuYTopaJs0EJ9a8r7orJRi9t98pb/s+Ro1NbgP7WnO+7DmV67A207i0ce1GIVIx8FtTJuZbb7BsTB5pukG7Tffdvd92tS4nHt6juzB5fwc9/ZaCzfZzQyf5o+XCEAAAAASUVORK5CYII=",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAAGhhLFkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURQAAAM6bbNCcbSMUD8+cbM+bbE42JtGabRoOCkItINKZbHhXPUUwIohkRsqXatCcbc+cbM2aa7OGXnBQOFY8KzwoHdCcbFk/LT8rHjMiGHVVPINgQ2pNNl5EL66CWtCcbNCbbR0QDM+bbCwcE8+bbTonGyATDdCcbX1bQNCbbKV6Vc+bbc+ab79/fyijtJgAAAAudFJOUwD4///Hw/84//8o/////3Sb///////7///////////Py/+L/4D//5P/j//3MAStOuLZAAAACXBIWXMAABcRAAAXEQHKJvM/AAACA0lEQVQ4T51VC3vaMAw0ou08uo05jNAH64MCpQ78/7/XO8kJjknH2vuKLZ1P4j7Foc6JiMPqAW4MLEOKRbCtubuVSKOUb7BWOPd/qbrz/hmiOTa34jFwbS3FR0quGccqdW10YxGq0lex1jWwIvIG0t0n9hVxCj1PvF9EWhScgIqshmfGUsUu9nTGeKuJ9wGxWDLDSda1RhwsnCGU+7YE2O6oBJqMJLYYBGDeF93iRSuMjhKjYEoACFQYDV5glFDzRi+orES7ZHQOo992lrWY/cRCl682PUUgafRxwC1mv5V2+6ekJmolJ5cpJS4mKnNTuUmVxE1YK1t2Hf6uD1jtbew4fcBqb2VFxn4sFvJjLJgX/BUsaSNP2LZvx4KcJzpjWY7GBevZ87TvEZ9n1wHvSIdN4KPEhHoP4uE7z3Ru5aUztrwAxjq5y9WbsFK2dyvk8RuYw3SU0iGMpgcrJCYj+ZMaDuEq1PukdO6yd0tOMZenpITXcjwl9BfJ8B/aznemXUq0pz+OstSAMIH6PmqhwBuJC8e9sicOJAF95x5U9aun7LT0nWtxf6gMtylTfKDVvkTyrRjUtj5fqp56uO+y9Ql1OYdSO4wvai/O3IeNPFgA7b4OV5YM4kcI+lKo1h3Wtc5pGGGH/yqd1nDWdqY9Zxu+H5P0nG34rvnCGf5tW+rVwb0DDRA8kUNzPRcAAAAASUVORK5CYII=",oo=()=>{const{keyword:o,items:t,checkedIds:s,isLoaded:n,handleChangeKeyword:i,toggleAlgorithm:d,checkAllAlgorithms:p,uncheckAllAlgorithms:x}=H(),{activeModalName:l,openModal:h,closeModal:a}=E();return e.jsxs(j,{children:[e.jsx(M,{children:n&&e.jsx(f,{items:t,checkedIds:s,onChange:d})}),e.jsxs(U,{children:[e.jsxs(G,{children:[e.jsx(L,{children:e.jsx(y,{})}),e.jsx(v,{placeholder:"알고리즘 분류를 입력해 주세요...",value:o,onChange:i})]}),e.jsxs(V,{children:[e.jsxs(m,{type:"button",onClick:()=>{h("checkAll")},"aria-label":"알고리즘 분류 전체 선택",children:[e.jsx(b,{src:T}),e.jsx(w,{children:"전체 선택"})]}),e.jsxs(m,{type:"button",onClick:()=>{h("uncheckAll")},"aria-label":"알고리즘 분류 전체 해제",children:[e.jsx(b,{src:J}),e.jsx(w,{children:"전체 해제"})]})]})]}),e.jsx(u,{title:"알고리즘 분류 전체 선택 확인",actionType:"yesNo",width:"350px",height:"auto",open:l==="checkAll",message:"모든 알고리즘 분류를 선택할까요?",onYesSelect:()=>{p(),a()},onNoSelect:a}),e.jsx(u,{title:"알고리즘 분류 전체 해제 확인",actionType:"yesNo",width:"350px",height:"auto",open:l==="uncheckAll",message:"모든 알고리즘 분류를 선택 해제할까요?",onYesSelect:()=>{x(),a()},onNoSelect:a})]})};export{oo as A,y as S};
