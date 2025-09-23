import { styled, css } from 'styled-components';
import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { DefaultTheme } from 'styled-components/dist/types';

export const getTierColor = (
  tier: keyof typeof solvedAcNumericTierIcons,
  isHidden: boolean,
  theme: DefaultTheme,
) => {
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

const getTierGradientCss = (
  tier: keyof typeof solvedAcNumericTierIcons,
  isHidden: boolean,
  theme: DefaultTheme,
) => {
  if (isHidden) {
    return css`
      background-image:
        ${theme.solvedAcTier.HIDDEN_DARK_GRADIENT100},
        ${theme.solvedAcTier.HIDDEN_GRADIENT};
    `;
  }

  if (tier >= 1 && tier <= 5) {
    return css`
      background-image:
        ${theme.solvedAcTier.BRONZE_DARK_GRADIENT100},
        ${theme.solvedAcTier.BRONZE_GRADIENT};
    `;
  }

  if (tier >= 6 && tier <= 10) {
    return css`
      background-image:
        ${theme.solvedAcTier.SILVER_DARK_GRADIENT100},
        ${theme.solvedAcTier.SILVER_GRADIENT};
    `;
  }

  if (tier >= 11 && tier <= 15) {
    return css`
      background-image:
        ${theme.solvedAcTier.GOLD_DARK_GRADIENT100},
        ${theme.solvedAcTier.GOLD_GRADIENT};
    `;
  }

  if (tier >= 16 && tier <= 20) {
    return css`
      background-image:
        ${theme.solvedAcTier.PLATINUM_DARK_GRADIENT100},
        ${theme.solvedAcTier.PLATINUM_GRADIENT};
    `;
  }

  if (tier >= 21 && tier <= 25) {
    return css`
      background-image:
        ${theme.solvedAcTier.DIAMOND_DARK_GRADIENT100},
        ${theme.solvedAcTier.DIAMOND_GRADIENT};
    `;
  }

  if (tier >= 26 && tier <= 30) {
    return css`
      background-image:
        ${theme.solvedAcTier.RUBY_DARK_GRADIENT100},
        ${theme.solvedAcTier.RUBY_GRADIENT};
    `;
  }

  return css`
    background-image:
      ${theme.solvedAcTier.UNRATED_DARK_GRADIENT100},
      ${theme.solvedAcTier.UNRATED_GRADIENT};
  `;
};

export const Container = styled.li<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  display: flex;

  width: 588px;
  height: 75px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-origin: border-box;
  background-clip: content-box, border-box;

  user-select: none;

  ${({ $tier, $isHidden, theme }) =>
    getTierGradientCss($tier, $isHidden, theme)};

  &:hover {
    ${({ $tier, $isHidden, theme }) =>
      getTierGradientCss($tier, $isHidden, theme)};
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding-right: 8px;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;

  max-width: 50%;
`;

export const DeleteButton = styled.button<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  width: 42px;
  height: 100%;

  background-color: transparent;

  svg {
    color: ${({ $tier, $isHidden, theme }) =>
      getTierColor($tier, $isHidden, theme)};
  }
`;

export const TierBadge = styled.img`
  width: 71px;
  height: 71px;
  padding: 12px 6px;
`;

export const InformationContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: 4px;

  width: 270px;
  height: 58px;
`;

export const Title = styled.a<{
  $tier: keyof typeof solvedAcNumericTierIcons;
  $isHidden: boolean;
}>`
  display: inline;
  overflow: hidden;

  padding-top: 8px;

  font-size: 19px;
  line-height: 19px;
  font-weight: 600;
  color: ${({ $tier, $isHidden, theme }) =>
    getTierColor($tier, $isHidden, theme)};
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
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

  height: 13px;

  font-size: 13px;
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

    color: ${({ theme }) => theme.color.WHITE};
  }
`;

export const CreatedAt = styled.p`
  display: inline-block;

  height: 13px;

  font-size: 13px;
  font-weight: 500;
  font-family: 'Oxanium', 'Pretendard';
  color: ${({ theme }) => theme.color.WHITE};
`;

export const ProgressBarWrapper = styled.div`
  height: 8px;
`;
