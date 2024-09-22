import { useState, useEffect, useRef } from 'react';
import type { RatedTier } from '@/types/tierHider';

interface UseTierDropdownProps {
  initSelectedTier: RatedTier;
  onChange: (tier: RatedTier) => void;
}

const useTierDropdown = (params: UseTierDropdownProps) => {
  const { initSelectedTier, onChange } = params;
  const [selectedTier, setSelectedTier] = useState<RatedTier>(initSelectedTier);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedTier(initSelectedTier);
  }, [initSelectedTier]);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) {
      return;
    }

    const closeDropdownIfNotFocused = (event: globalThis.MouseEvent) => {
      if (
        event.target instanceof Node &&
        event.target !== containerElement &&
        !containerElement.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeDropdownIfNotFocused);

    return () => {
      document.removeEventListener('click', closeDropdownIfNotFocused);
    };
  }, [containerRef]);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const updateSelectedTier = (tier: RatedTier) => {
    setSelectedTier(tier);
    setIsDropdownOpen(false);
    onChange(tier);
  };

  return {
    selectedTier,
    isDropdownOpen,
    updateSelectedTier,
    openDropdown,
    containerRef,
  };
};

export default useTierDropdown;
