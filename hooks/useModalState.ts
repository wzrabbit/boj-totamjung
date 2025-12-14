import { useState } from 'react';

const useModalState = <T>() => {
  const [activeModalName, setActiveModalName] = useState<T | null>(null);

  const openModal = (modalName: T) => {
    setActiveModalName(modalName);
  };

  const closeModal = () => {
    setActiveModalName(null);
  };

  return { activeModalName, openModal, closeModal };
};

export default useModalState;
