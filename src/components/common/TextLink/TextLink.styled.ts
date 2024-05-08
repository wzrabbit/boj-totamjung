import { styled } from 'styled-components';

export const Container = styled.a`
  display: inline-flex;
  align-items: center;
  column-gap: 2px;

  color: ${({ theme }) => theme.color.LEMON};
`;

export const TextLink = styled.span<{ $fontSize: '16px' | '14px' | '13px' }>`
  font-size: ${({ $fontSize }) => $fontSize};
  text-decoration: underline 2px dotted;
  -webkit-text-decoration-color: ${({ theme }) =>
    theme.color.TRANSPARENT_LEMON};
  text-decoration-color: ${({ theme }) => theme.color.TRANSPARENT_LEMON};
  text-underline-offset: 2px;

  &:hover {
    text-decoration: underline 2px dotted;
    text-decoration-color: ${({ theme }) => theme.color.LEMON};
  }
`;

export const LinkIconWrapper = styled.span<{
  $fontSize: '16px' | '14px' | '13px';
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: ${({ $fontSize }) => $fontSize};
  height: ${({ $fontSize }) => $fontSize};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
