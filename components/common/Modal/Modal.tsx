import * as S from './Modal.styled';
import useEscKey from '@/hooks/useEscKey';
import { CloseIcon } from '@/assets/svg';
import { createPortal } from 'react-dom';
import type { PropsWithChildren } from 'react';

interface ModalProps {
  title: string;
  open: boolean;
  padding?: string;
  closeOnBackdropClick?: boolean;
  onClose: () => void;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    title,
    open,
    padding = '16px',
    closeOnBackdropClick,
    onClose,
    children,
  } = props;
  useEscKey({ onEscKeyPress: onClose });

  return (
    open &&
    createPortal(
      <S.Container>
        <S.Backdrop
          onClick={() => {
            if (closeOnBackdropClick) {
              onClose();
            }
          }}
        />
        <S.Modal role="dialog">
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseButton onClick={onClose} aria-label="모달 닫기">
              <CloseIcon />
            </S.CloseButton>
          </S.Header>
          <S.Body $padding={padding}>{children}</S.Body>
        </S.Modal>
      </S.Container>,
      document.body,
    )
  );
};

/**
 * `<Modal>` 컴포넌트의 하단 버튼 메뉴들을 만들 때 사용될 보조 컴포넌트입니다.
 * 이 컴포넌트는 `<Modal>` 컴포넌트의 단순 부속품을 넘어 사용자가 사용할 때 보조적으로 사용하므로
 * 본 컴포넌트 파일에 같이 정의합니다.
 */
export const ModalActionButtonsContainer = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <S.ModalActionButtonsContainer>{children}</S.ModalActionButtonsContainer>
  );
};

export default Modal;
