import { styled, css } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';

export const Container = styled.div<{ $isOpen: boolean }>`
  position: relative;

  width: 446px;
  height: 64px;

  ${({ theme, $isOpen }) =>
    $isOpen &&
    css`
      & > ul {
        border-color: ${theme.colors.LEMON};
        box-shadow: 0 0 12px ${getTransparentHexColor(theme.colors.GOLD, 0.44)};
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

  border: 1.5px solid ${({ theme }) => theme.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.BROWN_900};
`;

export const InputPanel = styled.ul`
  ${panel}

  position: relative;

  height: 65px;

  z-index: 1;
  cursor: text;
`;

export const SearchInput = styled.input<{ $isOpen: boolean }>`
  position: relative;

  width: 150px;
  height: 26px;
  padding: 0 4px;

  border: 1px solid ${({ theme }) => theme.colors.BROWN_500};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.BROWN_900};

  color: ${({ theme }) => theme.colors.OFF_WHITE};

  transition: outline 0.05s;

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      opacity: 0;
    `}

  ${({ theme, $isOpen }) =>
    $isOpen &&
    css`
      border-color: ${theme.colors.LEMON};
      outline: 3px solid ${getTransparentHexColor(theme.colors.LEMON, 0.44)};
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
