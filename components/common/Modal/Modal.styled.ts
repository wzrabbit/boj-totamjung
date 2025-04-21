import { theme } from '@/styles/theme';
import type { MainTheme } from '@/types/mainTheme';
import { css, styled } from 'styled-components';

const modalHeaderBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.DARK_BROWN,
  bojExtendedDark: theme.bojExtendedColor.DARKEST_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.DARK_INDIGO,
  solvedAcLight: theme.color.WHITE,
  solvedAcDark: theme.solvedAcColor.DARK_INDIGO,
  solvedAcBlack: theme.color.BLACK,
};

const modalTitleColors: Record<MainTheme, string> = {
  none: theme.color.BLACK,
  totamjung: theme.color.GOLD,
  bojExtendedDark: theme.bojExtendedColor.LIGHT_GRAY,
  bojExtendedRigel: theme.color.WHITE,
  solvedAcLight: theme.color.BLACK,
  solvedAcDark: theme.color.WHITE,
  solvedAcBlack: theme.color.WHITE,
};

const modalCloseButtonIconColors: Record<MainTheme, string> = {
  ...modalTitleColors,
  solvedAcDark: theme.solvedAcColor.LIGHT_GRAY,
  solvedAcBlack: theme.solvedAcColor.LIGHT_GRAY,
};

const modalBodyBackgroundColors: Record<MainTheme, string> = {
  none: theme.color.WHITE,
  totamjung: theme.color.BROWN,
  bojExtendedDark: theme.bojExtendedColor.DARKER_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.DARK_SKY_BLUE,
  solvedAcLight: theme.color.PURE_WHITE,
  solvedAcDark: theme.solvedAcColor.INDIGO,
  solvedAcBlack: theme.solvedAcColor.DARK_INDIGO,
};

const modalBoxShadowColors: Record<MainTheme, string> = {
  none: theme.color.LIGHT_GRAY,
  totamjung: theme.color.GOLD,
  bojExtendedDark: theme.bojExtendedColor.DARKEST_GRAY,
  bojExtendedRigel: theme.bojExtendedColor.DARK_INDIGO,
  solvedAcLight: theme.color.WHITE,
  solvedAcDark: theme.solvedAcColor.DARK_INDIGO,
  solvedAcBlack: theme.color.BLACK,
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(5px);
  animation: fadeIn 0.2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  height: 56px;
  padding: 16px 16px 0 16px;
`;

export const Title = styled.p`
  overflow: hidden;
  flex-grow: 1;

  font-size: 24px;
  font-family: 'Do Hyeon', Pretendard;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CloseButton = styled.button`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Body = styled.div<{
  $padding: string;
}>`
  padding: ${({ $padding }) => $padding};

  font-size: 16px;
`;

export const ModalActionButtonsContainer = styled.div<{
  $totamjungTheme: MainTheme;
}>`
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  overflow: hidden;

  width: calc(100% + 32px);
  padding: 16px;
  margin: 16px -16px -16px -16px;

  background-color: ${({ $totamjungTheme }) =>
    modalHeaderBackgroundColors[$totamjungTheme]};
`;

export const Modal = styled.div<{ $totamjungTheme: MainTheme }>`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  box-shadow: 0 0 30px
    ${({ $totamjungTheme }) => modalBoxShadowColors[$totamjungTheme]};
  background-color: ${({ $totamjungTheme }) =>
    modalHeaderBackgroundColors[$totamjungTheme]};

  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }

  ${({ $totamjungTheme }) => css`
    & ${Header} {
      border-bottom: 16px solid ${modalHeaderBackgroundColors[$totamjungTheme]};

      background-color: ${modalHeaderBackgroundColors[$totamjungTheme]};
    }

    & ${Title} {
      color: ${modalTitleColors[$totamjungTheme]};
    }

    & ${CloseButton} > svg {
      color: ${modalCloseButtonIconColors[$totamjungTheme]};
    }

    & ${Body} {
      background-color: ${modalBodyBackgroundColors[$totamjungTheme]};

      color: ${({ theme }) => theme.color.DARK_GRAY};
    }
  `};
`;
