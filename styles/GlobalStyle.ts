import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

const isExtensionPage = window.location.protocol === 'chrome-extension:';

const GlobalStyle = createGlobalStyle`
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
    scrollbar-color: ${theme.color.LIGHTEST_BROWN} ${theme.color.SLIGHT_DARK_BROWN};
  }

  /**
   * 확장 프로그램 설정 페이지인 경우 포커스된 항목을 표시하기 위해 <SlidingFocus> 컴포넌트를 사용하므로, 여기에서는 비활성화합니다.
   */
  ${
    isExtensionPage &&
    css`
      * {
        outline: none;
      }
    `
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
