import { styled } from 'styled-components';
import { woodBackground } from '@/assets/png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 800px;
  height: 520px;
  max-width: 100%;
  max-height: 100%;

  background-image: url(${woodBackground});
  background-size: cover;

  & > div {
    flex-grow: 1;
  }
`;

export const ErrorScreen = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ErrorMessageBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ErrorMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 16px 32px;

  max-width: 80%;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.LIGHT_RED_TRANSPARENT};
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  width: 100%;
  height: 100%;
`;

export const WarningIconWrapper = styled.div`
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.LIGHT_RED};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.LIGHT_RED};
  text-align: center;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Description = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.color.WHITE};
  word-break: break-all;
`;

export const BottomControlList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 80px;

  column-gap: 12px;
`;
