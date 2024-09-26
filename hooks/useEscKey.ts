import { useEffect } from 'react';

interface UseEscKeyParams {
  onEscKeyPress: () => void;
}

const useEscKey = (params: UseEscKeyParams) => {
  const { onEscKeyPress } = params;

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onEscKeyPress();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onEscKeyPress]);
};

export default useEscKey;
