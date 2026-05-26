import{j as t}from"./jsx-runtime-SwSI87LU.js";import{p as a,v as n,s as i}from"./styled-components.browser.esm-DmPUYCQi.js";import{t as e}from"./theme-C-IIZrvZ.js";import"./index-C5e9SFkp.js";const s=n`
  ${({usesShadowRoot:o=!1})=>o?a`
          :host {
            all: initial !important;
            display: block;
          }

          :host #totamjung-root {
            font-family: Pretendard;
          }
        `:a`
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
    scrollbar-color: ${e.colors.BROWN_300} ${e.colors.BROWN_800};
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
`,r={BROWN:"#1a0e0a",WHITE:"#ffffff"},m={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"plain brown",values:[{name:"plain brown",value:r.BROWN},{name:"white",value:r.WHITE}]}}},u=[o=>t.jsx(t.Fragment,{children:t.jsxs(i,{theme:e,children:[t.jsx(s,{}),t.jsx(o,{})]})})];export{u as decorators,m as default};
