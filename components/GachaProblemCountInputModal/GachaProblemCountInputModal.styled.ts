import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`;

export const ProblemCountInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 5.666px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.color.LEMON};
    outline: 3px solid ${({ theme }) => theme.color.LEMON}70;
  }

  transition: outline 0.05s;
`;
