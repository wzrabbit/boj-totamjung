import { styled } from 'styled-components';
import { Theme } from '@/styles/theme';
import type { Rank } from '@/types/randomDefense';

const getRankColor = (theme: Theme, rank: Rank) => {
  if (rank === 'bronze') {
    return theme.solvedAcTiers.BRONZE;
  }

  if (rank === 'silver') {
    return theme.solvedAcTiers.SILVER;
  }

  if (rank === 'gold') {
    return theme.solvedAcTiers.GOLD;
  }

  if (rank === 'platinum') {
    return theme.solvedAcTiers.PLATINUM;
  }

  if (rank === 'diamond') {
    return theme.solvedAcTiers.DIAMOND;
  }

  if (rank === 'ruby') {
    return theme.solvedAcTiers.RUBY;
  }

  return theme.colors.GRAY_500;
};

export const Container = styled.li`
  width: 32px;
  height: 32px;
`;

export const Button = styled.button<{ $rank: Rank }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1.5px solid ${({ theme, $rank }) => getRankColor(theme, $rank)};
  border-radius: 4px;

  background: transparent;

  user-select: none;

  &:hover {
    background: ${({ theme, $rank }) =>
      `linear-gradient(to top, ${getRankColor(
        theme,
        $rank,
      )}70 0%, transparent 100%)`};
  }
`;

export const TierBadge = styled.img`
  width: 16px;
`;

export const Tilde = styled.div`
  width: 16px;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.GOLD};
  font-weight: 800;
`;
