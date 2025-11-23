import { useEffect, useRef } from 'react';

const useModal = (open: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null);
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
      !modalRef.current.contains(document.activeElement)
    ) {
      modalRef.current.focus();
    }

    return () => {
      if (open && prevElementRef.current instanceof HTMLElement) {
        prevElementRef.current.focus();
      }
    };
  }, [open]);

  return { modalRef };
};

export default useModal;
