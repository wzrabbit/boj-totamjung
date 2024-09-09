import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  width: 450px;
  max-width: 100%;
  min-height: 270px;
`;

export const WarnList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  padding: 16px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.LIGHT_RED_TRANSPARENT};
`;

export const WarnListItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.color.LIGHT_RED};
`;

export const ConfirmInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
