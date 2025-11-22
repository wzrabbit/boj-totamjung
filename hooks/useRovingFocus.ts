import { useState, useRef, useEffect, useCallback } from 'react';
import type { KeyboardEvent } from 'react';

/**
 * 리스트에 있는 항목을 키보드 방향키(←, →)와 Home, End 키로 순회하며
 * 포커스를 관리하는 Roving Tabindex 패턴을 구현한 훅입니다. 리스트의 항목이 많을 경우 사용을 추천합니다.
 *
 * - 탭(Tab) 키: 현재 활성화된 항목으로 포커스 진입/이탈
 * - 방향키(Left/Right): 항목 간 포커스 이동
 * - Home/End: 첫 번째 또는 마지막 항목으로 이동
 *
 * @param count 항목의 개수입니다.
 * @returns 각 항목에 필요한 props를 포함한 객체입니다. 각 항목의 props에 spread operator를 이용해 분해한 채로 주입해주시면 됩니다. 적용 대상이 되는 컴포넌트는 ref를 통한 접근이 가능해야 합니다.
 */
const useRovingFocus = <T extends HTMLElement>(count: number) => {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    setCurrentFocusIndex(0);
  }, [count]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<T>, index: number) => {
      let nextFocusIndex = index;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          nextFocusIndex = Math.max(0, index - 1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextFocusIndex = Math.min(count - 1, index + 1);
          break;
        case 'Home':
          event.preventDefault();
          nextFocusIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextFocusIndex = count - 1;
          break;
      }

      if (nextFocusIndex !== index) {
        setCurrentFocusIndex(nextFocusIndex);
        refs.current[nextFocusIndex]?.focus();
      }
    },
    [count],
  );

  const handleClick = (index: number) => {
    setCurrentFocusIndex(index);
  };

  const getRovingProps = (index: number) =>
    ({
      ref: (element: T | null) => {
        refs.current[index] = element;
      },
      tabIndex: currentFocusIndex === index ? 0 : -1,
      onKeyDown: (event: KeyboardEvent<T>) => handleKeyDown(event, index),
      onClick: () => handleClick(index),
    }) as const;

  return { getRovingProps };
};

export default useRovingFocus;
