import { styled } from 'styled-components';
import { PROBLEM_CARDS } from '@/assets/png/problemCards';
import type { DefaultTheme } from 'styled-components';
import type { Tier } from '@/types/randomDefense';

const getProblemCardSrcByTier = (tier: Tier, isHidden: boolean) => {
  if (isHidden) {
    return PROBLEM_CARDS.hidden;
  }

  if (tier >= 1 && tier <= 5) {
    return PROBLEM_CARDS.bronze;
  }

  if (tier >= 6 && tier <= 10) {
    return PROBLEM_CARDS.silver;
  }

  if (tier >= 11 && tier <= 15) {
    return PROBLEM_CARDS.gold;
  }

  if (tier >= 16 && tier <= 20) {
    return PROBLEM_CARDS.platinum;
  }

  if (tier >= 21 && tier <= 25) {
    return PROBLEM_CARDS.diamond;
  }

  if (tier >= 26 && tier <= 30) {
    return PROBLEM_CARDS.ruby;
  }

  return PROBLEM_CARDS.unrated;
};

const getTierColor = (tier: Tier, isHidden: boolean, theme: DefaultTheme) => {
  if (isHidden) {
    return theme.color.GRAY;
  }

  if (tier >= 1 && tier <= 5) {
    return theme.solvedAcTier[5];
  }

  if (tier >= 6 && tier <= 10) {
    return theme.solvedAcTier[10];
  }

  if (tier >= 11 && tier <= 15) {
    return theme.solvedAcTier[15];
  }

  if (tier >= 16 && tier <= 20) {
    return theme.solvedAcTier[20];
  }

  if (tier >= 21 && tier <= 25) {
    return theme.solvedAcTier[25];
  }

  if (tier >= 26 && tier <= 30) {
    return theme.solvedAcTier[30];
  }

  return theme.color.WHITE;
};

export const Container = styled.li.attrs<{
  $rotateX: number;
  $rotateY: number;
}>(({ $rotateX, $rotateY }) => ({
  style: {
    transform: `perspective(350px) rotateX(${$rotateX}deg) rotateY(${$rotateY}deg)`,
  },
}))<{
  $tier: Tier;
  $isHidden: boolean;
  $rotateX: number;
  $rotateY: number;
}>`
  display: inline-block;
  flex-shrink: 0;

  width: 241px;
  height: 327px;
  border-radius: 24px;

  background-image: ${({ $tier, $isHidden }) =>
    `url(${getProblemCardSrcByTier($tier, $isHidden)})`};

  transition: 0.1s;

  &:hover {
    box-shadow: 0 0 15px ${({ theme }) => theme.color.TRANSPARENT_LEMON};
  }
`;

export const LinkButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const TierBadge = styled.img`
  width: 100px;
  height: 100px;
  margin: 60px 0 15px 0;
`;

export const ProblemId = styled.div<{
  $tier: Tier;
  $isHidden: boolean;
}>`
  color: ${({ $tier, $isHidden, theme }) =>
    getTierColor($tier, $isHidden, theme)};
  font-size: 32px;
  font-family: 'Cafe24ClassicType';
`;

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  height: 40px;

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
`;
