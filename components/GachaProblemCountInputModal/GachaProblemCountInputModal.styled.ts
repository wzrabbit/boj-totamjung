import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`;

export const ProblemCountInput = styled.input<{ $theme: 'none' | 'totamjung' }>`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid
    ${({ theme, $theme }) =>
      $theme === 'totamjung'
        ? theme.color.LIGHTER_BROWN
        : theme.color.LIGHT_GRAY};
  border-radius: 5.666px;
  background-color: ${({ theme, $theme }) =>
    $theme === 'totamjung' ? theme.color.DARK_BROWN : theme.color.WHITE};

  color: ${({ theme, $theme }) =>
    $theme === 'totamjung' ? theme.color.WHITE : theme.color.BLACK};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({ theme, $theme }) =>
      $theme === 'totamjung' ? theme.color.LEMON : theme.color.LIGHT_GRAY};
    outline: 3px solid
      ${({ theme, $theme }) =>
        $theme === 'totamjung' ? theme.color.LEMON : theme.color.LIGHT_GRAY}70;
  }

  transition: outline 0.05s;
`;
