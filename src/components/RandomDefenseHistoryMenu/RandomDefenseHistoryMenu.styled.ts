import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 100%;
  height: 100%;
`;

export const HistoryListContainer = styled.div`
  width: 348px;
  height: 414px;
  padding: 8px;

  border: 1px solid ${({ theme }) => theme.color.LIGHT_BROWN};
  border-radius: 6px;
`;

export const TierSwitchPanel = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 12px;
  height: 30px;
`;

export const DeletePanel = styled.div`
  height: 36px;
`;

export const Text = styled.p`
  display: inline-block;

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 16px;
`;
