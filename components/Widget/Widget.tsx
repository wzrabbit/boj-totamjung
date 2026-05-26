import useWidget from '@/hooks/widget/useWidget';
import InspectResultIcon from '@/components/InspectResultIcon/InspectResultIcon';
import SpeechBubble from '@/components/common/SpeechBubble';
import * as S from './Widget.styled';
import type { ToastInfo } from '@/types/toast';
import { createPortal } from 'react-dom';
import { $ } from '@/utils/querySelector';
import GachaProblemCountInputModal from '@/components/GachaProblemCountInputModal';
import RandomDefenseGachaModal from '@/components/RandomDefenseGachaModal';
import { isSolvedAcTheme } from '@/domains/dataHandlers/validators/solvedAcThemeValidator';
import { useTranslation } from '@/i18n';
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
    containerRef,
    topButtonRef,
    randomDefenseButtonRef,
  } = useWidget(props);
  const { t } = useTranslation();

  const problemTitleElement = $('#problem_title');
  const isExternalThemeEnabled = theme !== 'none' && theme !== 'totamjung';

  return (
    <S.Container ref={containerRef}>
      {isLoaded && (
        <>
          <S.TopButton
            type="button"
            className={isScrollingToTop ? 'animate' : ''}
            $widgetTheme={theme}
            onClick={scrollToTop}
            onContextMenu={toggleWidgetOpen}
            aria-label={t('widget.topButtonAriaLabel')}
            ref={topButtonRef}
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
                aria-label={t('widget.openOptionsAriaLabel')}
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
                  theme === 'none'
                    ? t('widget.themeOnAriaLabel')
                    : t('widget.themeOffAriaLabel')
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
                aria-label={t('widget.randomDefenseAriaLabel')}
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
                      {t('widget.welcomeLine1')}
                    </S.SpeechBubbleText>
                    <S.SpeechBubbleText>
                      <strong>{t('widget.welcomeLine2Prefix')}</strong>
                      {t('widget.welcomeLine2Suffix')}
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
