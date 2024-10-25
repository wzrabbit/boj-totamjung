import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
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

  margin-top: 8px;
  height: 30px;
`;

export const HistoryManagePanel = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 36px;

  margin-right: 26px;
`;

export const DeleteButton = styled.button`
  width: 36px;
  height: 36px;

  border: 1px solid ${({ theme }) => theme.color.RED};
  border-radius: 4px;
  background: none;

  transition: 0.2s;

  svg {
    color: ${({ theme }) => theme.color.RED};
  }

  &:hover {
    box-shadow: 0 0 8px ${({ theme }) => theme.color.RED};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`;

export const Text = styled.p`
  display: inline-block;

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 16px;
`;

export const Indicator = styled.div`
  display: flex;
  column-gap: 4px;

  width: 80px;
  height: 20px;
  margin-bottom: 16px;
  margin-right: auto;
`;

export const IndicatorText = styled.p`
  display: inline-block;

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 14px;
  line-height: 20px;
`;

export const PackageIconWrapper = styled.div`
  width: 20px;
  height: 20px;

  svg {
    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.color.GOLD};
  }
`;
