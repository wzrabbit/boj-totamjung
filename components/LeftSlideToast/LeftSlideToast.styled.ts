import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import type { MainTheme } from '@/types/mainTheme';

const toastBackgroundColors: Record<MainTheme, string> = {
  none: theme.colors.BOJ_BLUE,
  totamjung: theme.colors.BROWN_900,
  bojExtendedDark: theme.bojExtendedColors.GRAY_900,
  bojExtendedRigel: theme.bojExtendedColors.SKY_BLUE,
  solvedAcLight: theme.solvedAcColors.OFF_WHITE,
  solvedAcDark: theme.solvedAcColors.INDIGO,
  solvedAcBlack: theme.solvedAcColors.DARK_INDIGO,
};

const toastBorderColors: Record<MainTheme, string> = {
  none: theme.colors.BOJ_BLUE,
  totamjung: theme.colors.BROWN_500,
  bojExtendedDark: theme.bojExtendedColors.GRAY_600,
  bojExtendedRigel: theme.bojExtendedColors.DARK_SKY_BLUE,
  solvedAcLight: theme.solvedAcColors.GRAY_200,
  solvedAcDark: theme.solvedAcColors.GRAY_400,
  solvedAcBlack: theme.solvedAcColors.GRAY_400,
};

const toastBoxShadowColors: Record<MainTheme, string> = {
  none: 'transparent',
  totamjung: theme.colors.BROWN_500,
  bojExtendedDark: theme.bojExtendedColors.GRAY_800,
  bojExtendedRigel: 'transparent',
  solvedAcLight: theme.solvedAcColors.OFF_WHITE,
  solvedAcDark: theme.solvedAcColors.DARK_INDIGO,
  solvedAcBlack: theme.colors.BLACK,
};

const toastTitleColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BEIGE,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.colors.OFF_WHITE,
  solvedAcLight: theme.colors.BLACK,
  solvedAcDark: theme.solvedAcColors.OFF_WHITE,
  solvedAcBlack: theme.solvedAcColors.OFF_WHITE,
};

const toastDescriptionColors: Record<MainTheme, string> = {
  ...toastTitleColors,
  totamjung: theme.colors.OFF_WHITE,
  bojExtendedDark: theme.colors.OFF_WHITE,
};

const toastIconColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BROWN_300,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.colors.OFF_WHITE,
  solvedAcLight: theme.solvedAcColors.GRAY_400,
  solvedAcDark: theme.solvedAcColors.GRAY_200,
  solvedAcBlack: theme.solvedAcColors.GRAY_200,
};

const toastIconFilters: Record<MainTheme, string> = {
  none: theme.filters.WHITE_FILTER,
  totamjung: theme.filters.LIGHT_BROWN_FILTER,
  bojExtendedDark: theme.bojExtendedFilters.LIGHT_GRAY,
  bojExtendedRigel: theme.filters.WHITE_FILTER,
  solvedAcLight: theme.solvedAcFilters.LIGHT_GRAY,
  solvedAcDark: theme.solvedAcFilters.LIGHT_GRAY,
  solvedAcBlack: theme.solvedAcFilters.LIGHT_GRAY,
};

export const circleProgressBarColors: Record<MainTheme, string> = {
  none: theme.colors.OFF_WHITE,
  totamjung: theme.colors.BROWN_300,
  bojExtendedDark: theme.bojExtendedColors.GRAY_300,
  bojExtendedRigel: theme.colors.OFF_WHITE,
  solvedAcLight: theme.solvedAcColors.GRAY_400,
  solvedAcDark: theme.solvedAcColors.GRAY_200,
  solvedAcBlack: theme.solvedAcColors.GRAY_200,
};

export const Container = styled.div<{
  $open: boolean;
  $totamjungTheme: MainTheme;
  $visible: boolean;
}>`
  display: flex;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid
    ${({ $totamjungTheme }) => toastBorderColors[$totamjungTheme]};
  background-color: ${({ $totamjungTheme }) =>
    toastBackgroundColors[$totamjungTheme]};
  box-shadow: 0 0 20px
    ${({ $totamjungTheme }) => toastBoxShadowColors[$totamjungTheme]};

  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-450px)')};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`;

export const LeftIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`;

export const IconImage = styled.img<{ $totamjungTheme: MainTheme }>`
  width: 40px;

  filter: ${({ $totamjungTheme }) => toastIconFilters[$totamjungTheme]};
  user-select: none;
`;

export const IconWrapper = styled.div<{ $totamjungTheme: MainTheme }>`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({ $totamjungTheme }) => toastIconColors[$totamjungTheme]};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 240px;
`;

export const Title = styled.p<{ $totamjungTheme: MainTheme }>`
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  color: ${({ $totamjungTheme }) => toastTitleColors[$totamjungTheme]};
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Description = styled.p`
  font-size: 14px;
  word-break: break-all;
`;

export const DescriptionContainer = styled.li<{
  $totamjungTheme: MainTheme;
}>`
  display: flex;
  column-gap: 3px;

  min-height: 17px;

  line-height: 17px;

  & > ${Description} {
    color: ${({ $totamjungTheme }) => toastDescriptionColors[$totamjungTheme]};
  }

  & > svg {
    flex-shrink: 0;

    width: 17px;
    height: 17px;
    color: ${({ $totamjungTheme }) => toastIconColors[$totamjungTheme]};
  }
`;

export const RightControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 30px;
`;

export const CloseButton = styled.button<{ $totamjungTheme: MainTheme }>`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({ $totamjungTheme }) => toastIconColors[$totamjungTheme]};
  }
`;
