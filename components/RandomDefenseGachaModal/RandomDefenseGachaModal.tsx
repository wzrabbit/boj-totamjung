import IconButton from '../common/IconButton';
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
import type { FilledSlot } from '@/types/randomDefense';
import CardBox from '@/components/CardBox';
import ProblemCardGrid from '@/components/ProblemCardGrid';
import useRandomDefenseGachaModal from '@/hooks/gacha/useRandomDefenseGachaModal';
import GachaModalNotification from '../GachaModalNotification/GachaModalNotification';

interface RandomDefenseGachaModalProps {
  open: boolean;
  theme?: 'none' | 'totamjung';
  slot: FilledSlot;
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

  return (
    <Modal
      title="즉석 추첨"
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
                <S.LoadingMessage>잠시만 기다려주세요...</S.LoadingMessage>
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
                  카드 상자를 클릭하면 결과를 확인할 수 있습니다
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
                name="다시 시도하기"
                size="large"
                color={theme.color.LIGHT_RED}
                iconSrc={<RepeatIcon />}
                disabled={false}
                ariaLabel="다시 시도하기"
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
                name="문제 목록 복사"
                size="large"
                color={theme.color.LIGHT_GRAY}
                iconSrc={<CopyIcon />}
                disabled={false}
                ariaLabel="문제 목록 복사"
                onClick={copyProblemInfosMarkdownToClipboard}
              />
              <IconButton
                type="button"
                name="추첨 기록 저장"
                size="large"
                color={theme.color.LEMON}
                iconSrc={isSavedToHistory ? <CheckIcon /> : <DownloadIcon />}
                disabled={isSavedToHistory}
                ariaLabel="추첨 기록 저장"
                onClick={saveGachaResultToStorage}
              />
              <IconButton
                type="button"
                name="다시 추첨하기!"
                size="large"
                color={theme.color.ORANGE}
                iconSrc={<DicesIcon />}
                disabled={false}
                ariaLabel="다시 추첨하기!"
                onClick={restartGacha}
              />
            </S.ResultBottomControlList>
          </S.ResultScreen>
        )}

        <S.ToggleButtonContainer $align="left">
          <S.TierVisibilityToggleButton
            onClick={toggleIsTierHidden}
            aria-label={
              isTierHidden ? '문제 난이도 보이기' : '문제 난이도 감추기'
            }
          >
            {isTierHidden ? (
              <img src={hiddenTierBadgeIcon} alt="" draggable={false} />
            ) : (
              <img src={tier1BadgeIcon} alt="" draggable={false} />
            )}
          </S.TierVisibilityToggleButton>
          <S.ToggleButtonText>{`티어 숨기기: ${isTierHidden ? 'ON' : 'OFF'}`}</S.ToggleButtonText>
        </S.ToggleButtonContainer>
        <S.ToggleButtonContainer $align="right">
          <S.ToggleButtonText>{`효과음: ${isAudioMuted ? 'OFF' : 'ON'}`}</S.ToggleButtonText>
          <S.AudioToggleButton
            onClick={toggleIsAudioMuted}
            aria-label={isAudioMuted ? '효과음 켜기' : '효과음 끄기'}
          >
            {isAudioMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </S.AudioToggleButton>
        </S.ToggleButtonContainer>
      </S.Container>
    </Modal>
  );
};

export default RandomDefenseGachaModal;
