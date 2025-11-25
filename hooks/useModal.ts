import { useEffect, useRef } from 'react';

const useModal = (open: boolean) => {
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
      closeButtonRef.current &&
      !closeButtonRef.current.contains(document.activeElement)
    ) {
      closeButtonRef.current.focus();
    }

    return () => {
      if (open && prevElementRef.current instanceof HTMLElement) {
        prevElementRef.current.focus();
      }
    };
  }, [open]);

  return { closeButtonRef };
};

export default useModal;
