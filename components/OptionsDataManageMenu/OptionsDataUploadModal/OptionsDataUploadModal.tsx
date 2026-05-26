import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import useConfirmInput from '@/hooks/useConfirmInput';
import { theme } from '@/styles/theme';
import { CloseCircleIcon, FileUploadIcon } from '@/assets/svg';
import { useTranslation } from '@/i18n';
import * as S from './OptionsDataUploadModal.styled';

interface OptionsDataUploadModalProps {
  open: boolean;
  onClose: () => void;
  onUpload: () => void;
}

const OptionsDataUploadModal = (props: OptionsDataUploadModalProps) => {
  const { open, onClose, onUpload } = props;
  const { t } = useTranslation();
  const confirmText = t('options.dataManage.uploadConfirmText');
  const { inputValue, isSameWithConfirmText, updateInputValue } =
    useConfirmInput({
      confirmText,
    });

  return (
    <Modal
      title={t('options.dataManage.uploadModalTitle')}
      open={open}
      onClose={onClose}
    >
      <S.ContentContainer>
        <Text type="normal" fontSize={16}>
          {t('options.dataManage.uploadWarningIntro')}
        </Text>
        <S.WarnList>
          <S.WarnListItem>
            {t('options.dataManage.uploadWarning1')}
          </S.WarnListItem>
          <S.WarnListItem>
            {t('options.dataManage.uploadWarning2')}
          </S.WarnListItem>
          <S.WarnListItem>
            {t('options.dataManage.uploadWarning3')}
          </S.WarnListItem>
        </S.WarnList>
        <Text type="normal" fontSize={16}>
          {t('options.dataManage.uploadInstructionPrefix')} <b>{confirmText}</b>
          {t('options.dataManage.uploadInstructionSuffix')}
        </Text>
        <S.ConfirmInputWrapper>
          <Input
            type="text"
            width="300px"
            height="36px"
            fontSize="15px"
            borderWidth={2}
            value={inputValue}
            textAlign="center"
            placeholder={t('options.dataManage.uploadInputPlaceholder', [
              confirmText,
            ])}
            hasError={false}
            onChange={updateInputValue}
          />
        </S.ConfirmInputWrapper>
      </S.ContentContainer>
      <ModalActionButtonsContainer>
        <IconButton
          type="button"
          name={t('common.cancel')}
          size="medium"
          iconSrc={<CloseCircleIcon />}
          color={theme.colors.GRAY_300}
          disabled={false}
          onClick={onClose}
        />
        <IconButton
          type="button"
          name={t('options.dataManage.uploadActionButton')}
          size="medium"
          iconSrc={<FileUploadIcon />}
          color={theme.colors.LIME}
          disabled={!isSameWithConfirmText}
          onClick={onUpload}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default OptionsDataUploadModal;
