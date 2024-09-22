import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import useConfirmInput from '@/hooks/useConfirmInput';
import { theme } from '@/styles/theme';
import { CloseCircleIcon, FileUploadIcon } from '@/images/svg';
import * as S from './OptionsDataUploadModal.styled';

interface OptionsDataUploadModalProps {
  open: boolean;
  onClose: () => void;
  onUpload: () => void;
}

const DATA_UPLOAD_CONFIRM_TEXT = '숙지했습니다';

const OptionsDataResetModal = (props: OptionsDataUploadModalProps) => {
  const { open, onClose, onUpload } = props;
  const { inputValue, isSameWithConfirmText, updateInputValue } =
    useConfirmInput({
      confirmText: DATA_UPLOAD_CONFIRM_TEXT,
    });

  return (
    <Modal title="데이터 업로드" open={open} onClose={onClose}>
      <S.ContentContainer>
        <Text type="normal" fontSize="16px">
          업로드 전 아래의 주의사항을 읽어 주십시오:
        </Text>
        <S.WarnList>
          <S.WarnListItem>
            데이터를 업로드할 경우 기존 데이터를 덮어씌우게 됩니다. 즉, 기존
            데이터는 손실될 것입니다.
          </S.WarnListItem>
          <S.WarnListItem>
            업로드를 진행할 경우 다시 되돌릴 수 없습니다. 기존 데이터를
            보존하시고 싶으신 경우 먼저 "데이터 내보내기" 를 이용해 데이터를
            백업해 두실 것을 권장드립니다.
          </S.WarnListItem>
          <S.WarnListItem>
            업로드 이후에는 설정 페이지가 자동으로 새로고침됩니다.
          </S.WarnListItem>
        </S.WarnList>
        <Text type="normal" fontSize="16px">
          위의 주의사항을 이해하셨고, 업로드를 진행하고 싶으시면, 하단의
          입력창에 <b>{DATA_UPLOAD_CONFIRM_TEXT}</b>를 입력해 주십시오.
        </Text>
        <S.ConfirmInputWrapper>
          <Input
            type="text"
            width="300px"
            value={inputValue}
            textAlign="center"
            placeholder={`"${DATA_UPLOAD_CONFIRM_TEXT}"를 입력해 주세요`}
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
          name="업로드"
          size="medium"
          iconSrc={<FileUploadIcon />}
          color={theme.color.LIME}
          disabled={!isSameWithConfirmText}
          ariaLabel="업로드"
          onClick={onUpload}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default OptionsDataResetModal;
