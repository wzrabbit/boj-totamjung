import Modal, { ModalActionButtonsContainer } from '~components/common/Modal';
import IconButton from '~components/common/IconButton';
import Text from '~components/common/Text';
import { theme } from '~styles/theme';
import { CheckCircleIcon, CloseCircleIcon } from '~images/svg';
import * as S from './SimpleModal.styled';

type SimpleModalProps = {
  title: string;
  width: string;
  height: string;
  open: boolean;
  message: string;
} & (ConfirmModalProps | CancelConfirmModalProps | YesNoModalProps);

interface ConfirmModalProps {
  actionType: 'confirm';
  onClose: () => void;
}

interface CancelConfirmModalProps {
  actionType: 'cancelConfirm';
  onClose: () => void;
  onConfirm: () => void;
}

interface YesNoModalProps {
  actionType: 'yesNo';
  onYesSelect: () => void;
  onNoSelect: () => void;
}

const SimpleModal = (props: SimpleModalProps) => {
  const { title, width, height, open, message, actionType } = props;

  return (
    <Modal
      title={title}
      open={open}
      onClose={() => {
        actionType === 'yesNo' ? props.onNoSelect() : props.onClose();
      }}
    >
      <S.ContentContainer $width={width} $height={height}>
        <Text type="normal" fontSize="16px">
          {message}
        </Text>
      </S.ContentContainer>
      <ModalActionButtonsContainer>
        {actionType === 'confirm' ? (
          <ConfirmButton onClose={props.onClose} />
        ) : actionType === 'cancelConfirm' ? (
          <CancelConfirmButtons
            onClose={props.onClose}
            onConfirm={props.onConfirm}
          />
        ) : (
          <YesNoButtons
            onYesSelect={props.onYesSelect}
            onNoSelect={props.onNoSelect}
          />
        )}
      </ModalActionButtonsContainer>
    </Modal>
  );
};

const ConfirmButton = (props: Omit<ConfirmModalProps, 'actionType'>) => {
  const { onClose } = props;

  return (
    <IconButton
      type="button"
      name="확인"
      size="medium"
      iconSrc={<CheckCircleIcon />}
      color={theme.color.GOLD}
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
  const { onClose, onConfirm } = props;

  return (
    <>
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
        name="확인"
        size="medium"
        iconSrc={<CheckCircleIcon />}
        color={theme.color.GOLD}
        disabled={false}
        ariaLabel="확인"
        onClick={onConfirm}
      />
    </>
  );
};

const YesNoButtons = (props: Omit<YesNoModalProps, 'actionType'>) => {
  const { onYesSelect, onNoSelect } = props;

  return (
    <>
      <IconButton
        type="button"
        name="예"
        size="medium"
        width="80px"
        iconSrc={<CheckCircleIcon />}
        color={theme.color.LIME}
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
