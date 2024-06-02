import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  width: 250px;
  height: 46px;
`;

export const Input = styled.input`
  width: 60px;
  height: 46px;

  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  font-size: 26px;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.color.GOLD};
  border: 2px solid ${({ theme }) => theme.color.LIGHT_BROWN};

  transition: outline 0.05s;

  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.color.LEMON};
    outline: 3px solid ${({ theme }) => theme.color.LEMON}70;
  }
`;
