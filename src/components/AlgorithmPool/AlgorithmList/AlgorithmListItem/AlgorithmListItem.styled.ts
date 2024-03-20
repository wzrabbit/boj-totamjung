import { styled } from 'styled-components';

export const Container = styled.li<{
  $backgroundColor: 'brown' | 'light-brown';
}>`
  display: inline-flex;

  height: 34px;

  border-radius: 10px;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor === 'brown' ? theme.color.BROWN : theme.color.LIGHT_BROWN};

  cursor: pointer;
  user-select: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  height: 100%;
  padding: 6px;

  cursor: pointer;
`;

export const Text = styled.p`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.LEMON};

  cursor: pointer;
`;
