import { useEffect, useRef } from 'react';
import { getDeepActiveElement } from '@/utils/getDeepActiveElement';

const useModal = (open: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevElementRef = useRef<HTMLElement | null>(null);
  const prevModalOpen = useRef(open);

  if (
    !prevModalOpen.current &&
    open &&
    document.activeElement instanceof HTMLElement
  ) {
    prevElementRef.current = document.activeElement;
  }

  prevModalOpen.current = open;

  useEffect(() => {
    if (
      open &&
      modalRef.current &&
      closeButtonRef.current &&
      !modalRef.current.contains(getDeepActiveElement())
    ) {
      closeButtonRef.current.focus();
    }

    return () => {
      if (open && prevElementRef.current instanceof HTMLElement) {
        prevElementRef.current.focus();
      }
    };
  }, [open]);

  return { modalRef, closeButtonRef };
};

export default useModal;
