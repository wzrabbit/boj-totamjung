import { styled, css } from 'styled-components';
import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { DefaultTheme } from 'styled-components/dist/types';

const getTierColor = (
  tier: keyof typeof solvedAcNumericTierIcons,
  isHidden: boolean,
  theme: DefaultTheme,
) => {
  if (isHidden) {
    return theme.colors.GRAY_500;
  }

  if (tier >= 1 && tier <= 5) {
    return theme.solvedAcTiers[5];
  }

  if (tier >= 6 && tier <= 10) {
    return theme.solvedAcTiers[10];
  }

  if (tier >= 11 && tier <= 15) {
    return theme.solvedAcTiers[15];
  }

  if (tier >= 16 && tier <= 20) {
    return theme.solvedAcTiers[20];
  }

  if (tier >= 21 && tier <= 25) {
    return theme.solvedAcTiers[25];
  }

  if (tier >= 26 && tier <= 30) {
    return theme.solvedAcTiers[30];
  }

  return theme.colors.OFF_WHITE;
};

const getTierGradientCss = (
  tier: keyof typeof solvedAcNumericTierIcons,
  isHidden: boolean,
  isHover: boolean,
  theme: DefaultTheme,
) => {
  if (isHidden) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.HIDDEN_DARK_GRADIENT200
          : theme.solvedAcTiers.HIDDEN_DARK_GRADIENT100},
        ${theme.solvedAcTiers.HIDDEN_GRADIENT};
    `;
  }

  if (tier >= 1 && tier <= 5) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.BRONZE_DARK_GRADIENT200
          : theme.solvedAcTiers.BRONZE_DARK_GRADIENT100},
        ${theme.solvedAcTiers.BRONZE_GRADIENT};
    `;
  }

  if (tier >= 6 && tier <= 10) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.SILVER_DARK_GRADIENT200
          : theme.solvedAcTiers.SILVER_DARK_GRADIENT100},
        ${theme.solvedAcTiers.SILVER_GRADIENT};
    `;
  }

  if (tier >= 11 && tier <= 15) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.GOLD_DARK_GRADIENT200
          : theme.solvedAcTiers.GOLD_DARK_GRADIENT100},
        ${theme.solvedAcTiers.GOLD_GRADIENT};
    `;
  }

  if (tier >= 16 && tier <= 20) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.PLATINUM_DARK_GRADIENT200
          : theme.solvedAcTiers.PLATINUM_DARK_GRADIENT100},
        ${theme.solvedAcTiers.PLATINUM_GRADIENT};
    `;
  }

  if (tier >= 21 && tier <= 25) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.DIAMOND_DARK_GRADIENT200
          : theme.solvedAcTiers.DIAMOND_DARK_GRADIENT100},
        ${theme.solvedAcTiers.DIAMOND_GRADIENT};
    `;
  }

  if (tier >= 26 && tier <= 30) {
    return css`
      background-image:
        ${isHover
          ? theme.solvedAcTiers.RUBY_DARK_GRADIENT200
          : theme.solvedAcTiers.RUBY_DARK_GRADIENT100},
        ${theme.solvedAcTiers.RUBY_GRADIENT};
    `;
  }

  return css`
    background-image:
      ${isHover
        ? theme.solvedAcTiers.UNRATED_DARK_GRADIENT200
        : theme.solvedAcTiers.UNRATED_DARK_GRADIENT100},
      ${theme.solvedAcTiers.UNRATED_GRADIENT};
  `;
};

export const Container = styled.li<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  display: flex;
  align-items: center;

  width: 312px;
  height: 54px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({ $tier, $isHidden, theme }) =>
    getTierGradientCss($tier, $isHidden, false, theme)};

  &:hover {
    ${({ $tier, $isHidden, theme }) =>
      getTierGradientCss($tier, $isHidden, true, theme)};
  }
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
`;

export const DeleteButton = styled.button<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  width: 32px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({ $tier, $isHidden, theme }) =>
      getTierColor($tier, $isHidden, theme)};
  }
`;

export const TierBadge = styled.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`;

export const InformationContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 226px;
`;

export const Title = styled.p<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  overflow: hidden;
  display: inline;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  color: ${({ $tier, $isHidden, theme }) =>
    getTierColor($tier, $isHidden, theme)};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 16px;
`;

export const ProblemId = styled.p<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({ $tier, $isHidden, theme }) =>
    getTierColor($tier, $isHidden, theme)};
`;

export const CreatedAtContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 16px;
    height: 16px;

    color: ${({ theme }) => theme.colors.OFF_WHITE};
  }
`;

export const CreatedAt = styled.p`
  display: inline-block;

  height: 12px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({ theme }) => theme.colors.OFF_WHITE};
`;
