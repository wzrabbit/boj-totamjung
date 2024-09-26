import { styled } from 'styled-components';

export const Container = styled.nav`
  display: inline-flex;

  height: 36px;
`;

export const NavItemList = styled.ul`
  display: flex;
  column-gap: 40px;
  flex-shrink: 0;

  width: auto;
  height: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CategoryButton = styled.button<{ $isSelected: boolean }>`
  padding: 2px;

  border-bottom: 0px solid ${({ theme }) => theme.color.GOLD};
  background: none;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: ${({ $isSelected }) => ($isSelected ? 800 : 600)};
  color: ${({ theme }) => theme.color.GOLD};

  transition: 0.25s;

  &:hover {
    color: ${({ theme }) => theme.color.LEMON};
  }
`;

export const Underline = styled.span<{ $isSelected: boolean }>`
  display: inline-block;

  width: ${({ $isSelected }) => ($isSelected ? '100%' : '0')};
  height: 2px;

  background-color: ${({ theme }) => theme.color.GOLD};

  transition: 0.25s;

  button:hover + & {
    background-color: ${({ theme }) => theme.color.LEMON};
  }
`;
