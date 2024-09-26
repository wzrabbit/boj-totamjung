import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import useConfirmInput from '@/hooks/useConfirmInput';
import { theme } from '@/styles/theme';
import { CloseCircleIcon, TrashIcon } from '@/assets/svg';
import * as S from './OptionsDataResetModal.styled';

interface OptionsDataResetModalProps {
  open: boolean;
  onClose: () => void;
  onReset: () => void;
}

const DATA_RESET_CONFIRM_TEXT = '초기화에 동의합니다';

const OptionsDataResetModal = (props: OptionsDataResetModalProps) => {
  const { open, onClose, onReset } = props;
  const { inputValue, isSameWithConfirmText, updateInputValue } =
    useConfirmInput({
      confirmText: DATA_RESET_CONFIRM_TEXT,
    });

  return (
    <Modal title="데이터 초기화" open={open} onClose={onClose}>
      <S.ContentContainer>
        <Text type="normal" fontSize="16px">
          초기화 전 아래의 주의사항을 읽어 주십시오:
        </Text>
        <S.WarnList>
          <S.WarnListItem>
            데이터를 초기화할 경우 퀵 슬롯의 쿼리, 추첨 기록 등의 중요한
            데이터를 포함하여 모든 데이터가 초기화됩니다.
          </S.WarnListItem>
          <S.WarnListItem>
            초기화를 진행할 경우 다시 되돌릴 수 없습니다. 중요한 데이터를
            보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를
            백업해 두실 것을 권장드립니다.
          </S.WarnListItem>
          <S.WarnListItem>
            초기화 이후에는 설정 페이지가 자동으로 새로고침됩니다.
          </S.WarnListItem>
        </S.WarnList>
        <Text type="normal" fontSize="16px">
          위의 주의사항을 이해하셨고, 데이터 초기화를 진행하고 싶으시면, 하단의
          입력창에 <b>{DATA_RESET_CONFIRM_TEXT}</b>를 입력해 주십시오.
        </Text>
        <S.ConfirmInputWrapper>
          <Input
            type="text"
            width="300px"
            value={inputValue}
            textAlign="center"
            placeholder={`"${DATA_RESET_CONFIRM_TEXT}"를 입력해 주세요`}
            hasError={false}
            ariaLabel=""
            onChange={updateInputValue}
          />
        </S.ConfirmInputWrapper>
      </S.ContentContainer>
      <ModalActionButtonsContainer>
        <IconButton
          type="button"
          name="취소"
          size="medium"
          iconSrc={<CloseCircleIcon />}
          color={theme.color.LIGHT_GRAY}
          disabled={false}
          ariaLabel="취소"
          onClick={onClose}
        />
        <IconButton
          type="button"
          name="초기화"
          size="medium"
          iconSrc={<TrashIcon />}
          color={theme.color.RED}
          disabled={!isSameWithConfirmText}
          ariaLabel="초기화"
          onClick={onReset}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default OptionsDataResetModal;
