import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  height: 46px;
`;

export const UnitLabel = styled.span`
  width: fit-content;

  font-family: Pretendard;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.OFF_WHITE};
`;
