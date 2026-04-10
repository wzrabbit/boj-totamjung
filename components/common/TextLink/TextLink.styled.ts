import { styled } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';

export const Container = styled.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({ theme }) => theme.colors.LEMON};
`;

export const TextLink = styled.span<{ $fontSize: number }>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({ theme }) =>
    getTransparentHexColor(theme.colors.LEMON, 0.5)};
  text-decoration-color: ${({ theme }) =>
    getTransparentHexColor(theme.colors.LEMON, 0.5)};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({ theme }) => theme.colors.LEMON};
  }
`;

export const LinkIconWrapper = styled.span<{
  $fontSize: number;
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({ $fontSize }) => $fontSize}px;
  height: ${({ $fontSize }) => $fontSize}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
