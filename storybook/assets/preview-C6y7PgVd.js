import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{l as r,f as n,o as i}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-DpyODYgC.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const l=n`
  ${({usesShadowRoot:o=!1})=>o?r`
          :host {
            all: initial !important;
            display: block;
          }

          :host #totamjung-root {
            font-family: Pretendard;
          }
        `:r`
          body {
            font-family: Pretendard;
          }
        `};
    
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    outline: none;
  }
  
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
    scrollbar-color: ${e.color.LIGHTEST_BROWN} ${e.color.SLIGHT_DARK_BROWN};
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
`,a={BROWN:"#1a0e0a",WHITE:"#ffffff"},f={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"plain brown",values:[{name:"plain brown",value:a.BROWN},{name:"white",value:a.WHITE}]}}},u=[o=>t.jsx(t.Fragment,{children:t.jsxs(i,{theme:e,children:[t.jsx(l,{}),t.jsx(o,{})]})})];export{u as decorators,f as default};
