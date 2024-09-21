import { styled, css } from 'styled-components';

export const Container = styled.div<{ $isOpen: boolean }>`
  position: relative;

  width: 446px;
  height: 64px;

  ${({ theme, $isOpen }) =>
    $isOpen &&
    css`
      & > ul {
        border-color: ${theme.color.LEMON};
        box-shadow: 0 0 12px ${theme.color.GOLD}70;
      }
    `}
`;

const panel = css`
  display: flex;
  overflow: auto;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  padding: 4px;

  border: 1.5px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};
`;

export const InputPanel = styled.ul`
  ${panel}

  position: relative;

  height: 64px;

  z-index: 1;
  cursor: text;
`;

export const SearchInput = styled.input<{ $isOpen: boolean }>`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  color: ${({ theme }) => theme.color.WHITE};

  transition: outline 0.05s;

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      opacity: 0;
    `}

  ${({ theme, $isOpen }) =>
    $isOpen &&
    css`
      border-color: ${theme.color.LEMON};
      outline: 3px solid ${theme.color.LEMON}70;
    `}
`;

export const SearchResultPanel = styled.ul<{ $isOpen: boolean }>`
  ${panel}

  position: absolute;

  height: ${({ $isOpen }) => ($isOpen ? '90px' : '64px')};

  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-64px)'};

  font-size: 13px;

  transition: 0.3s;
`;
