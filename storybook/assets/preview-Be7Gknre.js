import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as n,o as a}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as o}from"./theme-DpyODYgC.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const i=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    outline: none;
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
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-duration: 0.001s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001s !important;
    }
  }
`,t={BROWN:"#1a0e0a",WHITE:"#ffffff"},u={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"plain brown",values:[{name:"plain brown",value:t.BROWN},{name:"white",value:t.WHITE}]}}},m=[r=>e.jsx(e.Fragment,{children:e.jsxs(a,{theme:o,children:[e.jsx(i,{}),e.jsx(r,{})]})})];export{m as decorators,u as default};
