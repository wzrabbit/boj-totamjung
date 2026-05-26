import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import useConfirmInput from '@/hooks/useConfirmInput';
import { theme } from '@/styles/theme';
import { CloseCircleIcon, TrashIcon } from '@/assets/svg';
import { useTranslation } from '@/i18n';
import * as S from './OptionsDataResetModal.styled';

interface OptionsDataResetModalProps {
  open: boolean;
  onClose: () => void;
  onReset: () => void;
}

const OptionsDataResetModal = (props: OptionsDataResetModalProps) => {
  const { open, onClose, onReset } = props;
  const { t } = useTranslation();
  const confirmText = t('options.dataManage.resetConfirmText');
  const { inputValue, isSameWithConfirmText, updateInputValue } =
    useConfirmInput({
      confirmText,
    });

  return (
    <Modal
      title={t('options.dataManage.resetModalTitle')}
      open={open}
      onClose={onClose}
    >
      <S.ContentContainer>
        <Text type="normal" fontSize={16}>
          {t('options.dataManage.resetWarningIntro')}
        </Text>
        <S.WarnList>
          <S.WarnListItem>
            {t('options.dataManage.resetWarning1')}
          </S.WarnListItem>
          <S.WarnListItem>
            {t('options.dataManage.resetWarning2')}
          </S.WarnListItem>
          <S.WarnListItem>
            {t('options.dataManage.resetWarning3')}
          </S.WarnListItem>
        </S.WarnList>
        <Text type="normal" fontSize={16}>
          {t('options.dataManage.resetInstructionPrefix')} <b>{confirmText}</b>
          {t('options.dataManage.resetInstructionSuffix')}
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
            placeholder={t('options.dataManage.resetInputPlaceholder', [
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
          name={t('options.dataManage.resetActionButton')}
          size="medium"
          iconSrc={<TrashIcon />}
          color={theme.colors.RED}
          disabled={!isSameWithConfirmText}
          onClick={onReset}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default OptionsDataResetModal;
