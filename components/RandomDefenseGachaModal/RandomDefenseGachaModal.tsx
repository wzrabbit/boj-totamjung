import IconButton from '../common/IconButton';
import * as S from './RandomDefenseGachaModal.styled';
import Modal from '@/components/common/Modal';
import {
  WarningIcon,
  RepeatIcon,
  MouseClickIcon,
  LoadingIcon,
  CopyIcon,
  SaveIcon,
} from '@/assets/svg';
import { theme } from '@/styles/theme';
import type { FilledSlot } from '@/types/randomDefense';
import CardBox from '@/components/CardBox';
import ProblemCardGrid from '@/components/ProblemCardGrid';
import useRandomDefenseGachaModal from '@/hooks/gacha/useRandomDefenseGachaModal';

interface RandomDefenseGachaModalProps {
  open: boolean;
  slot: FilledSlot;
  problemCount: number;
  onClose: () => void;
}

const RandomDefenseGachaModal = (props: RandomDefenseGachaModalProps) => {
  const { open, slot, problemCount, onClose } = props;
  const {
    gachaStatus,
    problemInfos,
    previewCardRanks,
    errorMessage,
    errorDescriptions,
    setGachaStatus,
    restartGacha,
  } = useRandomDefenseGachaModal({ open, slot, problemCount });

  return (
    <Modal title="즉석 추첨" open={open} padding="0" onClose={onClose}>
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
                color="red"
                isTierHidden={false}
                cardRanks={previewCardRanks}
                onOpenAnimationEnd={() => setGachaStatus('showingResult')}
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
              <ProblemCardGrid problemInfos={problemInfos} />
            </S.ProblemCardGridWrapper>
            <S.ResultBottomControlList>
              <IconButton
                type="button"
                name="결과 복사하기"
                size="large"
                color={theme.color.LIGHT_GRAY}
                iconSrc={<CopyIcon />}
                disabled={false}
                ariaLabel="결과 복사하기"
                onClick={() => {}}
              />
              <IconButton
                type="button"
                name="결과 저장하기"
                size="large"
                color={theme.color.LEMON}
                iconSrc={<SaveIcon />}
                disabled={false}
                ariaLabel="결과 저장하기"
                onClick={() => {}}
              />
              <IconButton
                type="button"
                name="다시 추첨하기!"
                size="large"
                color={theme.color.ORANGE}
                iconSrc={<RepeatIcon />}
                disabled={false}
                ariaLabel="다시 추첨하기!"
                onClick={restartGacha}
              />
            </S.ResultBottomControlList>
          </S.ResultScreen>
        )}
      </S.Container>
    </Modal>
  );
};

export default RandomDefenseGachaModal;
