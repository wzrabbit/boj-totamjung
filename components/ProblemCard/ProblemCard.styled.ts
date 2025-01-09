import { styled } from 'styled-components';
import { PROBLEM_CARDS } from '@/assets/png/problemCards';
import type { DefaultTheme } from 'styled-components';
import type { Tier } from '@/types/randomDefense';

const getProblemCardSrcByTier = (tier: Tier, isTierHidden: boolean) => {
  if (isTierHidden) {
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

const getTierColor = (
  tier: Tier,
  isTierHidden: boolean,
  theme: DefaultTheme,
) => {
  if (isTierHidden) {
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

export const HoverTransformContainer = styled.div`
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  transition: transform 0.25s;
`;

export const InnerContainer = styled.div.attrs<{
  $rotateX: number;
  $rotateY: number;
  $width: number;
}>(({ $rotateX, $rotateY, $width }) => ({
  style: {
    transform: `perspective(${$width * 3}px) rotateX(${$rotateX}deg) rotateY(${$rotateY}deg)`,
    width: `${$width}px`,
    height: `${$width * 1.36}px`,
    borderRadius: `${$width * 0.1}px`,
  },
}))<{
  $tier: Tier;
  $isTierHidden: boolean;
  $rotateX: number;
  $rotateY: number;
}>`
  display: inline-block;
  overflow: hidden;
  flex-shrink: 0;

  box-shadow: 0 0 15px ${({ theme }) => theme.color.BLACK_DARKER_TRANSPARENT};
  background-image: ${({ $tier, $isTierHidden }) =>
    `url(${getProblemCardSrcByTier($tier, $isTierHidden)})`};
  background-size: 100% 100%;

  transition: transform 0.1s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 15px ${({ theme }) => theme.color.TRANSPARENT_LEMON};
  }
`;

export const LinkButton = styled.a.attrs<{ $cardWidth: number }>(
  ({ $cardWidth }) => ({
    style: {
      rowGap: `${$cardWidth / 30}px`,
      padding: `${$cardWidth / 12.05}px`,
    },
  }),
)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: 0.1s;
`;

export const TierBadge = styled.img.attrs<{ $cardWidth: number }>(
  ({ $cardWidth }) => ({
    style: {
      height: `${$cardWidth / 2.4}px`,
      margin: `${$cardWidth / 4.016}px 0 ${$cardWidth / 16.066}px 0`,
    },
  }),
)``;

export const ProblemId = styled.div.attrs<{ $cardWidth: number }>(
  ({ $cardWidth }) => ({
    style: {
      fontSize: `${$cardWidth / 7.531}px`,
    },
  }),
)<{
  $tier: Tier;
  $isTierHidden: boolean;
  $cardWidth: number;
}>`
  color: ${({ $tier, $isTierHidden, theme }) =>
    getTierColor($tier, $isTierHidden, theme)};
  font-family: 'Cafe24ClassicType';
`;

export const Title = styled.div.attrs<{ $cardWidth: number }>(
  ({ $cardWidth, theme }) => ({
    style: {
      height: `${Math.max(28, $cardWidth / 6.694)}px`,
      color: `${theme.color.WHITE}`,
      fontSize: `${Math.max(14, $cardWidth / 13.388)}px`,
      lineHeight: `${Math.max(14, $cardWidth / 13.388)}px`,
    },
  }),
)<{ $cardWidth: number }>`
  display: -webkit-box;
  overflow: hidden;

  text-align: center;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Overlay = styled.div.attrs<{ $movement: number }>(
  ({ $movement }) => ({
    style: {
      backgroundPosition: `${$movement + 60}%`,
    },
  }),
)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    115deg,
    transparent 32%,
    rgba(250, 215, 110, 0.3) 42%,
    rgba(135, 50, 255, 0.3) 53%,
    transparent 63%
  );
  background-size: 150% 150%;

  mix-blend-mode: color-dodge;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;
