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
import type { FilledSlot, ProblemInfo } from '@/types/randomDefense';
import CardBox from '@/components/CardBox';
import ProblemCardGrid from '@/components/ProblemCardGrid';

interface RandomDefenseGachaModalProps {
  open: boolean;
  slot: FilledSlot;
  problemCount: number;
  onClose: () => void;
}

const RandomDefenseGachaModal = (props: RandomDefenseGachaModalProps) => {
  const { open, onClose } = props;
  const gachaStatus = 'showingResult';
  const errorMessage = '에러가 발생했습니다.';
  const errorDescriptions = ['첫 번째 에러 줄', '두 번째 에러 줄'];
  const problemInfos: ProblemInfo[] = [
    {
      problemId: 1000,
      title: 'A+B',
      tier: 1,
    },
    {
      problemId: 1001,
      title: 'A+B',
      tier: 31,
    },
    {
      problemId: 1002,
      title: 'A+B',
      tier: 16,
    },
    {
      problemId: 1003,
      title: 'A+B',
      tier: 26,
    },
    {
      problemId: 1004,
      title: 'A+B',
      tier: 3,
    },
    {
      problemId: 1005,
      title: 'A+B',
      tier: 8,
    },
    {
      problemId: 1006,
      title: 'A+B',
      tier: 12,
    },
    {
      problemId: 1007,
      title: 'A+B',
      tier: 21,
    },
    {
      problemId: 1008,
      title: 'A+B',
      tier: 14,
    },
    {
      problemId: 1009,
      title: 'A+B',
      tier: 0,
    },
  ].slice(0, 10);

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
                cardRanks={['bronze', 'silver', 'gold']}
                onOpenAnimationEnd={() => {}}
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
                onClick={() => {}}
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
                onClick={() => {}}
              />
            </S.ResultBottomControlList>
          </S.ResultScreen>
        )}
      </S.Container>
    </Modal>
  );
};

export default RandomDefenseGachaModal;
