import { useEffect, useRef } from 'react';

const useModal = (open: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      open &&
      modalRef.current &&
      !modalRef.current.contains(document.activeElement)
    ) {
      modalRef.current.focus();
    }
  }, [open]);

  return { modalRef };
};

export default useModal;
