import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 14px;
  position: relative;

  width: 340px;
  height: auto;
`;

export const FontText = styled.p<{ $fontFamily: string; $fontSize: string }>`
  color: ${({ theme }) => theme.color.LEMON};
  font-size: ${({ $fontSize }) => $fontSize ?? '16px'};
  font-family: ${({ $fontFamily }) => $fontFamily};
`;
