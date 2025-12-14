import type { MainTheme } from '@/types/mainTheme';
import { theme } from '@/styles/theme';
import { styled, keyframes, css } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';

const topButtonBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.BOJ_BLUE,
  totamjung: theme.color.LIGHTEST_BROWN,
  solvedAcLight: theme.solvedAcColor.LIME,
  solvedAcDark: theme.solvedAcColor.LIME,
  solvedAcBlack: theme.solvedAcColor.LIME,
  bojExtendedDark: theme.bojExtendedColor.DARK_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.SKY_BLUE,
} as const;

const topButtonArrowBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.PURE_WHITE,
  totamjung: theme.color.BROWN,
  solvedAcLight: theme.color.PURE_WHITE,
  solvedAcDark: theme.color.PURE_WHITE,
  solvedAcBlack: theme.color.PURE_WHITE,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.color.WHITE,
} as const;

const dropdownIconsFilters: Record<MainTheme, string> = {
  none: theme.filter.BOJ_BLUE_FILTER,
  totamjung: theme.filter.LIGHTEST_BROWN_FILTER,
  solvedAcLight: theme.solvedAcFilter.LIME,
  solvedAcDark: theme.solvedAcFilter.LIME,
  solvedAcBlack: theme.solvedAcFilter.LIME,
  bojExtendedDark: theme.bojExtendedFilter.DARK_GRAY,
  bojExtendedRigel: theme.bojExtendedFilter.SKY_BLUE,
} as const;

const dropdownBackgroundColors: Record<MainTheme, string> = {
  none: 'transparent',
  totamjung: theme.color.BLACK_TRANSPARENT,
  solvedAcLight: 'transparent',
  solvedAcDark: theme.color.BLACK_TRANSPARENT,
  solvedAcBlack: theme.color.BLACK_TRANSPARENT,
  bojExtendedDark: theme.color.BLACK_TRANSPARENT,
  bojExtendedRigel: theme.color.BLACK_TRANSPARENT,
} as const;

const speechBubbleTextColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.WHITE,
  solvedAcLight: theme.color.BLACK,
  solvedAcDark: theme.color.WHITE,
  solvedAcBlack: theme.color.WHITE,
  bojExtendedDark: theme.color.WHITE,
  bojExtendedRigel: theme.color.WHITE,
} as const;

export const Container = styled.div`
  padding-top: 10px;
  color: blue;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  right: 30px;
  bottom: 30px;

  width: 40px;
  height: 216px;

  pointer-events: none;
  transition: 0.3s;

  & * {
    pointer-events: auto;
  }
`;

const bounceTop = keyframes`
    0% {
        transform: translateY(0);
    }
    33% {
      transform: translateY(5px);
    }
    66% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(0);
    }
`;

export const TopButton = styled.button<{
  $widgetTheme: MainTheme;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 40px;
  height: 40px;

  border-radius: 20px !important;
  background-color: ${({ theme, $widgetTheme }) =>
    topButtonBackgroundColors[$widgetTheme] ?? theme.color.BOJ_BLUE};

  transition:
    0.3s transform,
    0.1s outline;
  z-index: 1;
  outline: 0px solid
    ${({ $widgetTheme }) => topButtonBackgroundColors[$widgetTheme]} !important;

  &:active {
    transform: scale(0.93);
  }

  &:hover,
  &:active {
    outline: 4px solid
      ${({ $widgetTheme }) => {
        return getTransparentHexColor(
          topButtonBackgroundColors[$widgetTheme],
          0.4,
        );
      }} !important;
  }

  & span {
    background-color: ${({ $widgetTheme }) =>
      topButtonArrowBackgroundColors[$widgetTheme]};
  }
`;

export const TopIconContainer = styled.div`
  position: relative;

  width: 32px;
  height: 32px;

  ${TopButton}.animate > & {
    animation: ${bounceTop} 1s forwards;
  }
`;

export const TopIconFrag = styled.span<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 17.5px;
  height: 6px;

  border-radius: 4px !important;

  transform: ${({ $direction }) =>
    $direction === 'left'
      ? 'translate(3px, 11px) rotate(-45deg)'
      : 'translate(12px, 11px) rotate(45deg)'};
`;

export const DropdownMenu = styled.ul<{
  $widgetTheme: MainTheme;
  $isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;

  width: 40px;
  height: ${({ $isExpanded }) => ($isExpanded ? '216px' : '40px')};
  padding: 8px 0 0 0;

  border: 2px solid
    ${({ $widgetTheme }) => topButtonBackgroundColors[$widgetTheme]};
  border-radius: 20px !important;
  background-color: ${({ $widgetTheme }) =>
    dropdownBackgroundColors[$widgetTheme]};

  backdrop-filter: blur(5px);
  transform-origin: center bottom;

  transition:
    height 0.3s,
    scale 0.3s;

  ${TopButton}:active + & {
    scale: 0.93;
  }
`;

export const DropdownMenuItem = styled.li`
  width: 36px;
  height: 32px;
`;

const dropdownMenuButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: transparent;

  transition: background-color 0.3s;
`;

export const DropdownButtonIcon = styled.img.attrs({ draggable: false })`
  width: auto;
  height: 26px;

  transition: transform 0.1s;

  button:disabled > & {
    opacity: 0.6;
  }

  button:not(:disabled):hover > & {
    transform: scale(1.1);
  }

  button:not(:disabled):active > & {
    transform: scale(1);
  }
`;

export const DropdownMenuButton = styled.button<{
  $widgetTheme: MainTheme;
}>`
  ${dropdownMenuButtonStyles}

  & > ${DropdownButtonIcon} {
    filter: ${({ $widgetTheme }) => dropdownIconsFilters[$widgetTheme]};
  }
`;

const maskFillUp = keyframes`
  from {
    mask-position: 0% 0%;
  }

  to {
    mask-position: 0% 100%;
  }
`;

export const RandomDefenseButton = styled.button<{
  $widgetTheme: MainTheme;
}>`
  ${dropdownMenuButtonStyles}

  & > ${DropdownButtonIcon} {
    filter: ${({ $widgetTheme }) => dropdownIconsFilters[$widgetTheme]};
  }

  &.pressing:after {
    content: '';
    position: absolute;

    width: 24.79px;
    height: 26px;

    background-image: url(${browser.runtime.getURL('/dice.png')});
    background-size: 24.79px 26px;
    filter: ${({ theme }) => theme.filter.LIGHT_GRAY_FILTER};
    mix-blend-mode: color-dodge;
    opacity: 0.4;
    mask-image: linear-gradient(to bottom, transparent 50%, black 50%);
    mask-size: 100% 200%;

    animation: ${maskFillUp} 0.8s 0.2s forwards linear;
  }
`;

export const SpeechBubbleWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  position: absolute;
  left: -420px;
  bottom: -15px;

  width: 400px;
  height: 65px;
`;

export const SpeechBubbleText = styled.span`
  font-size: 14px;
  line-height: 14px;
  font-family: Pretendard;
`;

export const SpeechBubbleContentContainer = styled.div<{
  $totamjungTheme: MainTheme;
}>`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  & > ${SpeechBubbleText} {
    color: ${({ $totamjungTheme }) => speechBubbleTextColors[$totamjungTheme]};
  }
`;
