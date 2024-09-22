import useWidget from '@/hooks/widget/useWidget';
import InspectResultIcon from '@/components/InspectResultIcon/InspectResultIcon';
import * as S from './Widget.styled';
import type { TotamjungTheme } from '@/types/totamjungTheme';
import type { ToastInfo } from '@/types/toast';
import { createPortal } from 'react-dom';
import { $ } from '@/utils/querySelector';

interface WidgetProps {
  theme: TotamjungTheme;
  onChangeTheme: (theme: TotamjungTheme) => void;
  onToast: (toastInfo: ToastInfo, duration: number) => void;
}

const Widget = (props: WidgetProps) => {
  const { theme } = props;
  const {
    isExpanded,
    isScrollingToTop,
    hasUnknownAlgorithms,
    isRandomDefenseButtonDisabled,
    isInspectButtonDisabled,
    isLockButtonDisabled,
    shouldShowInspectIcon,
    isLoaded,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
    openOptionsPage,
    toggleTotamjungTheme,
    performRandomDefenseByClick,
    showInspectResultUsingPopup,
    toggleTimer,
  } = useWidget(props);
  const problemTitleElement = $('#problem_title');

  return (
    <S.Container>
      {isLoaded && (
        <>
          <S.TopButton
            type="button"
            className={isScrollingToTop ? 'animate' : ''}
            $widgetTheme={theme}
            onClick={scrollToTop}
            onContextMenu={toggleWidgetOpen}
            aria-label="토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요."
          >
            <S.TopIconContainer onAnimationEnd={endScrollingAnimation}>
              <S.TopIconFrag $direction="left" />
              <S.TopIconFrag $direction="right" />
            </S.TopIconContainer>
          </S.TopButton>
          <S.DropdownMenu $widgetTheme={theme} $isExpanded={isExpanded}>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton
                type="button"
                $widgetTheme={theme}
                aria-label="토탐정 설정 페이지로 이동"
                onClick={openOptionsPage}
              >
                <S.DropdownButtonIcon
                  src={chrome.runtime.getURL('settings.png')}
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton
                type="button"
                $widgetTheme={theme}
                aria-label={
                  theme === 'none' ? '토탐정 테마 켜기' : '토탐정 테마 끄기'
                }
                onClick={toggleTotamjungTheme}
              >
                <S.DropdownButtonIcon
                  src={chrome.runtime.getURL('palette.png')}
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton
                type="button"
                $widgetTheme={theme}
                aria-label="무작위 문제 추첨하기"
                disabled={isRandomDefenseButtonDisabled}
                onClick={performRandomDefenseByClick}
              >
                <S.DropdownButtonIcon src={chrome.runtime.getURL('dice.png')} />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton
                type="button"
                disabled={isInspectButtonDisabled}
                onClick={showInspectResultUsingPopup}
                $widgetTheme={theme}
              >
                <S.DropdownButtonIcon
                  src={
                    shouldShowInspectIcon
                      ? hasUnknownAlgorithms
                        ? chrome.runtime.getURL('inspect-result-question.png')
                        : chrome.runtime.getURL('inspect-result-check.png')
                      : chrome.runtime.getURL('search.png')
                  }
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton
                type="button"
                disabled={isLockButtonDisabled}
                onClick={toggleTimer}
                $widgetTheme={theme}
              >
                <S.DropdownButtonIcon src={chrome.runtime.getURL('lock.png')} />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
          </S.DropdownMenu>
          {problemTitleElement &&
            shouldShowInspectIcon &&
            createPortal(
              <InspectResultIcon
                theme={theme}
                icon={hasUnknownAlgorithms ? 'question' : 'check'}
              />,
              problemTitleElement,
            )}
        </>
      )}
    </S.Container>
  );
};

export default Widget;
