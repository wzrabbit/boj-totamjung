import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.BOJ_BLUE};
`;
