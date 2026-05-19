import IconButton from '@/components/common/IconButton';
import * as S from './RandomDefenseGachaModal.styled';
import Modal from '@/components/common/Modal';
import {
  WarningIcon,
  RepeatIcon,
  MouseClickIcon,
  LoadingIcon,
  DicesIcon,
  VolumeOffIcon,
  VolumeOnIcon,
  CopyIcon,
  DownloadIcon,
  CheckIcon,
} from '@/assets/svg';
import { hiddenTierBadgeIcon, tier1BadgeIcon } from '@/assets/png';
import { theme } from '@/styles/theme';
import type { FilledQuickSlot } from '@/types/randomDefense';
import CardBox from '@/components/CardBox';
import ProblemCardGrid from '@/components/ProblemCardGrid';
import useRandomDefenseGachaModal from '@/hooks/gacha/useRandomDefenseGachaModal';
import GachaModalNotification from '@/components/GachaModalNotification';
import { useTranslation } from '@/i18n';
import type { MainTheme } from '@/types/mainTheme';

interface RandomDefenseGachaModalProps {
  open: boolean;
  theme?: MainTheme;
  slot: FilledQuickSlot;
  problemCount: number;
  portalTarget?: HTMLElement | null;
  onClose: () => void;
}

const RandomDefenseGachaModal = (props: RandomDefenseGachaModalProps) => {
  const {
    open,
    theme: modalTheme = 'totamjung',
    slot,
    problemCount,
    portalTarget,
    onClose,
  } = props;
  const {
    gachaStatus,
    problemInfos,
    cardBoxColor,
    previewCardRanks,
    errorMessage,
    errorDescriptions,
    isTierHidden,
    isAudioMuted,
    isSavedToHistory,
    notificationMessage,
    shouldNotificationFadeOut,
    restartGacha,
    toggleIsTierHidden,
    toggleIsAudioMuted,
    playCardSlideAudio,
    playGachaAudio,
    stopGachaAudio,
    copyProblemInfosMarkdownToClipboard,
    showResultScreenAndResetNotificationMessage,
    saveGachaResultToStorage,
  } = useRandomDefenseGachaModal({ open, slot, problemCount });
  const { t } = useTranslation();

  return (
    <Modal
      title={t('randomDefenseGacha.modalTitle')}
      open={open}
      theme={modalTheme}
      padding="0"
      closeOnBackdropClick={false}
      portalTarget={portalTarget}
      onClose={() => {
        stopGachaAudio();
        onClose();
      }}
    >
      <S.Container>
        {gachaStatus === 'loading' && (
          <S.LoadingScreen>
            <S.BottomControlList>
              <S.IconMessageContainer>
                <S.LoadingIconWrapper>
                  <LoadingIcon />
                </S.LoadingIconWrapper>
                <S.LoadingMessage>
                  {t('randomDefenseGacha.loadingMessage')}
                </S.LoadingMessage>
              </S.IconMessageContainer>
            </S.BottomControlList>
          </S.LoadingScreen>
        )}
        {gachaStatus === 'ready' && (
          <S.ReadyScreen>
            <S.CardBoxWrapper>
              <CardBox
                color={cardBoxColor}
                isTierHidden={isTierHidden}
                cardRanks={previewCardRanks}
                onFirstClick={playGachaAudio}
                onOpenAnimationEnd={showResultScreenAndResetNotificationMessage}
              />
            </S.CardBoxWrapper>
            <S.BottomControlList>
              <S.IconMessageContainer>
                <S.MouseClickIconWrapper>
                  <MouseClickIcon />
                </S.MouseClickIconWrapper>
                <S.ReadyMessage>
                  {t('randomDefenseGacha.cardClickHint')}
                </S.ReadyMessage>
              </S.IconMessageContainer>
            </S.BottomControlList>
          </S.ReadyScreen>
        )}
        {gachaStatus === 'error' && (
          <S.ErrorScreen>
            <S.ErrorMessageBoxContainer>
              <S.ErrorMessageBox>
                <S.ErrorMessageContainer>
                  <S.WarningIconWrapper>
                    <WarningIcon />
                  </S.WarningIconWrapper>
                  <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
                </S.ErrorMessageContainer>
                <S.DescriptionList>
                  {typeof errorDescriptions === 'string' ? (
                    <S.Description>{errorDescriptions}</S.Description>
                  ) : (
                    errorDescriptions.map((description) => (
                      <S.Description key={description}>
                        {description}
                      </S.Description>
                    ))
                  )}
                </S.DescriptionList>
              </S.ErrorMessageBox>
            </S.ErrorMessageBoxContainer>
            <S.BottomControlList>
              <IconButton
                type="button"
                name={t('randomDefenseGacha.retryButton')}
                size="large"
                color={theme.colors.LIGHT_RED}
                iconSrc={<RepeatIcon />}
                disabled={false}
                onClick={restartGacha}
              />
            </S.BottomControlList>
          </S.ErrorScreen>
        )}

        {gachaStatus === 'showingResult' && (
          <S.ResultScreen>
            <S.ProblemCardGridWrapper>
              <ProblemCardGrid
                problemInfos={problemInfos}
                onCardHover={playCardSlideAudio}
                isTierHidden={isTierHidden}
              />
            </S.ProblemCardGridWrapper>
            <S.GachaModalNotificationWrapper>
              <GachaModalNotification shouldFadeOut={shouldNotificationFadeOut}>
                {notificationMessage}
              </GachaModalNotification>
            </S.GachaModalNotificationWrapper>
            <S.ResultBottomControlList>
              <IconButton
                type="button"
                name={t('randomDefenseGacha.copyProblemsButton')}
                size="large"
                color={theme.colors.GRAY_300}
                iconSrc={<CopyIcon />}
                disabled={false}
                onClick={copyProblemInfosMarkdownToClipboard}
              />
              <IconButton
                type="button"
                name={t('randomDefenseGacha.saveHistoryButton')}
                size="large"
                color={theme.colors.LEMON}
                iconSrc={isSavedToHistory ? <CheckIcon /> : <DownloadIcon />}
                disabled={isSavedToHistory}
                onClick={saveGachaResultToStorage}
              />
              <IconButton
                type="button"
                name={t('randomDefenseGacha.drawAgainButton')}
                size="large"
                color={theme.colors.ORANGE}
                iconSrc={<DicesIcon />}
                disabled={false}
                onClick={restartGacha}
              />
            </S.ResultBottomControlList>
          </S.ResultScreen>
        )}

        <S.ToggleButtonContainer $align="left">
          <S.TierVisibilityToggleButton
            onClick={toggleIsTierHidden}
            aria-label={
              isTierHidden
                ? t('randomDefenseGacha.showTierAriaLabel')
                : t('randomDefenseGacha.hideTierAriaLabel')
            }
          >
            {isTierHidden ? (
              <img src={hiddenTierBadgeIcon} alt="" draggable={false} />
            ) : (
              <img src={tier1BadgeIcon} alt="" draggable={false} />
            )}
          </S.TierVisibilityToggleButton>
          <S.ToggleButtonText>
            {t('randomDefenseGacha.tierHiddenLabel', [
              isTierHidden ? t('common.on') : t('common.off'),
            ])}
          </S.ToggleButtonText>
        </S.ToggleButtonContainer>
        <S.ToggleButtonContainer $align="right">
          <S.ToggleButtonText>
            {t('randomDefenseGacha.audioLabel', [
              isAudioMuted ? t('common.off') : t('common.on'),
            ])}
          </S.ToggleButtonText>
          <S.AudioToggleButton
            onClick={toggleIsAudioMuted}
            aria-label={
              isAudioMuted
                ? t('randomDefenseGacha.audioOnAriaLabel')
                : t('randomDefenseGacha.audioOffAriaLabel')
            }
          >
            {isAudioMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </S.AudioToggleButton>
        </S.ToggleButtonContainer>
      </S.Container>
    </Modal>
  );
};

export default RandomDefenseGachaModal;
