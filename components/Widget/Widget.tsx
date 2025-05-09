import useWidget from '@/hooks/widget/useWidget';
import InspectResultIcon from '@/components/InspectResultIcon/InspectResultIcon';
import SpeechBubble from '@/components/common/SpeechBubble';
import * as S from './Widget.styled';
import type { ToastInfo } from '@/types/toast';
import { createPortal } from 'react-dom';
import { $ } from '@/utils/querySelector';
import GachaProblemCountInputModal from '@/components/GachaProblemCountInputModal';
import RandomDefenseGachaModal from '../RandomDefenseGachaModal';
import { isSolvedAcTheme } from '@/domains/dataHandlers/validators/solvedAcThemeValidadtor';
import type { MainTheme, TotamjungTheme } from '@/types/mainTheme';

interface WidgetProps {
  theme: MainTheme;
  rootElement: HTMLElement;
  onChangeTheme: (theme: TotamjungTheme) => void;
  onToast: (toastInfo: ToastInfo, duration: number) => void;
}

const Widget = (props: WidgetProps) => {
  const { theme, rootElement } = props;
  const {
    isExpanded,
    isScrollingToTop,
    hasUnknownAlgorithms,
    isRandomDefenseButtonDisabled,
    isRandomDefenseButtonPressing,
    gachaProblemCount,
    gachaSlot,
    isInspectButtonDisabled,
    isLockButtonDisabled,
    shouldShowInspectIcon,
    shouldShowWelcomeMessage,
    activeModalName,
    isLoaded,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
    openOptionsPage,
    toggleTotamjungTheme,
    openGachaModalWithProblemCount,
    suspendGacha,
    showInspectResultUsingPopup,
    toggleTimer,
    closeWelcomeMessage,
    randomDefenseButtonRef,
  } = useWidget(props);

  const problemTitleElement = $('#problem_title');
  const isExternalThemeEnabled = theme !== 'none' && theme !== 'totamjung';

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
                disabled={isExternalThemeEnabled}
                onClick={toggleTotamjungTheme}
              >
                <S.DropdownButtonIcon
                  src={browser.runtime.getURL('/palette.png')}
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.RandomDefenseButton
                ref={randomDefenseButtonRef}
                type="button"
                className={isRandomDefenseButtonPressing ? 'pressing' : ''}
                $widgetTheme={theme}
                aria-label="랜덤 디펜스 진행하기"
                disabled={isRandomDefenseButtonDisabled}
              >
                <S.DropdownButtonIcon
                  src={browser.runtime.getURL('/dice.png')}
                />
              </S.RandomDefenseButton>
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
            !isSolvedAcTheme(theme) &&
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
                  <S.SpeechBubbleContentContainer $totamjungTheme={theme}>
                    <S.SpeechBubbleText>
                      토탐정을 설치해 주셔서 감사합니다!
                    </S.SpeechBubbleText>
                    <S.SpeechBubbleText>
                      <strong>위젯을 우클릭</strong>하여 토탐정의 여러 기능들을
                      활용해 보세요.
                    </S.SpeechBubbleText>
                  </S.SpeechBubbleContentContainer>
                }
                theme={theme}
                direction="left"
                hasCloseButton={true}
                onClose={closeWelcomeMessage}
              />
            </S.SpeechBubbleWrapper>
          )}
          <GachaProblemCountInputModal
            open={activeModalName === 'gachaProblemCount'}
            portalTarget={rootElement}
            theme={theme}
            shouldShowHotkeyMessage={false}
            onClose={suspendGacha}
            onSubmitProblemCount={openGachaModalWithProblemCount}
          />
          {gachaSlot && (
            <RandomDefenseGachaModal
              open={activeModalName === 'gacha'}
              portalTarget={rootElement}
              theme={theme}
              slot={gachaSlot}
              problemCount={gachaProblemCount}
              onClose={suspendGacha}
            />
          )}
        </>
      )}
    </S.Container>
  );
};

export default Widget;
