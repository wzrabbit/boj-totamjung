import{j as e}from"./jsx-runtime-DEdD30eg.js";import{f as a,o as n}from"./styled-components.browser.esm-CkAH7aAm.js";import{t as o}from"./theme-D4_a62hg.js";import"./index-RYns6xqu.js";const i=a`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  
  body,
  input,
  select,
  textarea,
  button {
    font-family: 'Pretendard';
  }
  
  a,
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
  }
  
  button {
    border: 0;
    
    cursor: pointer;
  }
  
  button:disabled {
    cursor: not-allowed;
  }
  
  ul, ol, li {
    list-style: none;
  }

  fieldset {
    border: 0;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  body:has([role="dialog"]) {
    overflow: hidden;
  }

  * {
    scrollbar-width: 15px;
    scrollbar-color: ${o.color.LIGHTEST_BROWN} ${o.color.SLIGHT_DARK_BROWN};
  }
`,t={BROWN:"#1a0e0a",WHITE:"#ffffff"},p={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"plain brown",values:[{name:"plain brown",value:t.BROWN},{name:"white",value:t.WHITE}]}}},b=[r=>e.jsx(e.Fragment,{children:e.jsxs(n,{theme:o,children:[e.jsx(i,{}),e.jsx(r,{})]})})];export{b as decorators,p as default};
