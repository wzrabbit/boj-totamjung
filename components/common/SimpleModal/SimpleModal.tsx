import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import { theme } from '@/styles/theme';
import { CheckCircleIcon, CloseCircleIcon } from '@/assets/svg';
import * as S from './SimpleModal.styled';

type SimpleModalProps = {
  title: string;
  width: string;
  height: string;
  open: boolean;
  message: string;
  closeOnBackdropClick?: boolean;
  portalTarget?: HTMLElement | null;
} & (ConfirmModalProps | CancelConfirmModalProps | YesNoModalProps);

interface ConfirmModalProps {
  actionType: 'confirm';
  theme?: 'none' | 'totamjung';
  onClose: () => void;
}

interface CancelConfirmModalProps {
  actionType: 'cancelConfirm';
  theme?: 'none' | 'totamjung';
  onClose: () => void;
  onConfirm: () => void;
}

interface YesNoModalProps {
  actionType: 'yesNo';
  theme?: 'none' | 'totamjung';
  onYesSelect: () => void;
  onNoSelect: () => void;
}

const SimpleModal = (props: SimpleModalProps) => {
  const {
    title,
    width,
    height,
    open,
    message,
    actionType,
    portalTarget,
    theme = 'totamjung',
    closeOnBackdropClick = true,
  } = props;

  return (
    <Modal
      title={title}
      open={open}
      closeOnBackdropClick={closeOnBackdropClick}
      portalTarget={portalTarget}
      theme={theme}
      onClose={() => {
        actionType === 'yesNo' ? props.onNoSelect() : props.onClose();
      }}
    >
      <S.ContentContainer $width={width} $height={height}>
        <Text
          type={theme === 'totamjung' ? 'normal' : 'darkGray'}
          fontSize="16px"
        >
          {message}
        </Text>
      </S.ContentContainer>
      <ModalActionButtonsContainer theme={theme}>
        {actionType === 'confirm' ? (
          <ConfirmButton theme={theme} onClose={props.onClose} />
        ) : actionType === 'cancelConfirm' ? (
          <CancelConfirmButtons
            theme={theme}
            onClose={props.onClose}
            onConfirm={props.onConfirm}
          />
        ) : (
          <YesNoButtons
            theme={theme}
            onYesSelect={props.onYesSelect}
            onNoSelect={props.onNoSelect}
          />
        )}
      </ModalActionButtonsContainer>
    </Modal>
  );
};

const ConfirmButton = (props: Omit<ConfirmModalProps, 'actionType'>) => {
  const { theme: modalTheme, onClose } = props;

  return (
    <IconButton
      type="button"
      name="확인"
      size="medium"
      iconSrc={<CheckCircleIcon />}
      color={
        modalTheme === 'totamjung' ? theme.color.GOLD : theme.color.DARK_GRAY
      }
      disabled={false}
      ariaLabel="확인"
      onClick={onClose}
      autoFocus={true}
    />
  );
};

const CancelConfirmButtons = (
  props: Omit<CancelConfirmModalProps, 'actionType'>,
) => {
  const { theme: modalTheme, onClose, onConfirm } = props;

  return (
    <>
      <IconButton
        type="button"
        name="취소"
        size="medium"
        iconSrc={<CloseCircleIcon />}
        color={
          modalTheme === 'totamjung'
            ? theme.color.LIGHT_GRAY
            : theme.color.DARK_GRAY
        }
        disabled={false}
        ariaLabel="취소"
        onClick={onClose}
      />
      <IconButton
        type="button"
        name="확인"
        size="medium"
        iconSrc={<CheckCircleIcon />}
        color={
          modalTheme === 'totamjung' ? theme.color.GOLD : theme.color.DARK_GRAY
        }
        disabled={false}
        ariaLabel="확인"
        onClick={onConfirm}
      />
    </>
  );
};

const YesNoButtons = (props: Omit<YesNoModalProps, 'actionType'>) => {
  const { theme: modalTheme, onYesSelect, onNoSelect } = props;

  return (
    <>
      <IconButton
        type="button"
        name="예"
        size="medium"
        width="80px"
        iconSrc={<CheckCircleIcon />}
        color={
          modalTheme === 'totamjung' ? theme.color.LIME : theme.color.GREEN
        }
        disabled={false}
        ariaLabel="예"
        onClick={onYesSelect}
      />
      <IconButton
        type="button"
        name="아니요"
        size="medium"
        iconSrc={<CloseCircleIcon />}
        color={theme.color.RED}
        disabled={false}
        ariaLabel="아니요"
        onClick={onNoSelect}
      />
    </>
  );
};

export default SimpleModal;
