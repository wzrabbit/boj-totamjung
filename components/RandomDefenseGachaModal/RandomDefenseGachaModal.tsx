import IconButton from '../common/IconButton';
import * as S from './RandomDefenseGachaModal.styled';
import Modal from '@/components/common/Modal';
import {
  WarningIcon,
  RepeatIcon,
  MouseClickIcon,
  LoadingIcon,
} from '@/assets/svg';
import { theme } from '@/styles/theme';
import type { FilledSlot } from '@/types/randomDefense';

interface RandomDefenseGachaModalProps {
  open: boolean;
  slot: FilledSlot;
  problemCount: number;
  onClose: () => void;
}

const RandomDefenseGachaModal = (props: RandomDefenseGachaModalProps) => {
  const { open, onClose } = props;

  const gachaStatus = 'loading';
  const errorMessage = '에러가 발생했습니다.';
  const errorDescriptions = ['첫 번째 에러 줄', '두 번째 에러 줄'];

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
      </S.Container>
    </Modal>
  );
};

export default RandomDefenseGachaModal;
