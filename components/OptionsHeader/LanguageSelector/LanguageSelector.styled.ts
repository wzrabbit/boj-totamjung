import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 50px;
`;

export const Button = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 51.5px;
  height: 50px;

  background: none;
  border: 1px dashed ${({ theme }) => theme.colors.GOLD};
  border-radius: 4px;
  cursor: pointer;

  font-family: 'Galmuri11';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GOLD};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(140%);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
      filter: brightness(140%);
    `}
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;

  min-width: 220px;
  padding: 6px;
  margin: 0;
  list-style: none;

  background-color: ${({ theme }) => theme.colors.BROWN_800};
  border: 2px solid ${({ theme }) => theme.colors.GOLD};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

export const MenuItem = styled.li<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;

  padding: 10px 12px;
  border-radius: 4px;

  font-family: 'Galmuri11';
  font-size: 14px;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.GOLD : theme.colors.OFF_WHITE};

  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BROWN_700};
  }
`;

export const CheckMark = styled.span`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.colors.GOLD};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
