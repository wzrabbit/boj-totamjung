import { styled } from 'styled-components';

export const Container = styled.a`
  display: inline-flex;
  column-gap: 2px;

  font-size: 16px;
  color: ${({ theme }) => theme.color.LEMON};
`;

export const TextLink = styled.p`
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

export const LinkIconWrapper = styled.div`
  width: 20px;
  height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
