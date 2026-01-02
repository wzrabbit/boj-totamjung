import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

interface GlobalStyleProps {
  usesShadowRoot?: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ usesShadowRoot = false }) =>
    usesShadowRoot
      ? css`
          :host {
            all: initial !important;
            display: block;
          }

          :host #totamjung-root {
            font-family: Pretendard;
          }
        `
      : css`
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
    scrollbar-color: ${theme.color.LIGHTEST_BROWN} ${theme.color.SLIGHT_DARK_BROWN};
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
`;

export default GlobalStyle;
