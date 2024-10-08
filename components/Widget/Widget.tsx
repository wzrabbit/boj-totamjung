import useWidget from '@/hooks/widget/useWidget';
import InspectResultIcon from '@/components/InspectResultIcon/InspectResultIcon';
import SpeechBubble from '@/components/common/SpeechBubble';
import Text from '@/components/common/Text';
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
    shouldShowWelcomeMessage,
    isLoaded,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
    openOptionsPage,
    toggleTotamjungTheme,
    performRandomDefenseByClick,
    showInspectResultUsingPopup,
    toggleTimer,
    closeWelcomeMessage,
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
                  src={browser.runtime.getURL('/settings.png')}
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
                  src={browser.runtime.getURL('/palette.png')}
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
                <S.DropdownButtonIcon
                  src={browser.runtime.getURL('/dice.png')}
                />
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
                        ? browser.runtime.getURL('/inspect-result-question.png')
                        : browser.runtime.getURL('/inspect-result-check.png')
                      : browser.runtime.getURL('/search.png')
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
                <S.DropdownButtonIcon
                  src={browser.runtime.getURL('/lock.png')}
                />
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
          {shouldShowWelcomeMessage && (
            <S.SpeechBubbleWrapper>
              <SpeechBubble
                open={true}
                maxWidth="400px"
                content={
                  <S.SpeechBubbleContentContainer>
                    <Text type="normal" fontSize="14px">
                      토탐정을 설치해 주셔서 감사합니다!
                    </Text>
                    <Text type="normal" fontSize="14px">
                      <strong>위젯을 우클릭</strong>하여 토탐정의 여러 기능들을
                      활용해 보세요.
                    </Text>
                  </S.SpeechBubbleContentContainer>
                }
                totamjungTheme={theme}
                direction="left"
                hasCloseButton={true}
                onClose={closeWelcomeMessage}
              />
            </S.SpeechBubbleWrapper>
          )}
        </>
      )}
    </S.Container>
  );
};

export default Widget;
