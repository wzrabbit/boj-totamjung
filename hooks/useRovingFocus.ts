import { useState, useRef, useEffect, useCallback } from 'react';
import type { KeyboardEvent } from 'react';

type RovingFocusDirection = 'horizontal' | 'vertical';

interface UseRovingFocusParams {
  count: number;
  shouldResetFocusIndexOnItemChange?: boolean;
  direction?: RovingFocusDirection;
  initialIndex?: number;
  onSelect?: (index: number) => void;
}

/**
 * 리스트에 있는 항목을 키보드 방향키와 Home, End 키로 순회하며
 * 포커스를 관리하는 Roving Tabindex 패턴을 구현한 훅입니다. 리스트의 항목이 많을 경우 사용을 추천합니다.
 *
 * - 탭(Tab) 키: 현재 활성화된 항목으로 포커스 진입/이탈
 * - 방향키: 항목 간 포커스 이동
 *   - `direction: 'horizontal'` (기본값): ←, →
 *   - `direction: 'vertical'`: ↑, ↓
 * - Home/End: 첫 번째 또는 마지막 항목으로 이동
 * - Enter, Space: `onSelect` 전달 시 호출 (예: listbox 항목 선택)
 *
 * @template T 활성화된 항목으로 이동할 때 실제 포커스를 받을 요소의 타입입니다. ref는 이 요소에 연결되어야 합니다.
 * @template U 사용자의 키보드 입력을 감지할 요소의 타입입니다.
 * 이벤트 위임 등으로 포커스 요소와 이벤트 수신 요소가 다른 경우 사용합니다.
 * 별도로 지정하지 않으면 T와 동일한 타입으로 설정됩니다.
 *
 * @param params 이 훅의 사용 옵션이 될 객체입니다.
 * @param params.count 항목의 개수입니다.
 * @param params.shouldResetFocusIndexOnItemChange 항목의 개수가 바뀔 경우 인덱스를 0으로 초기화할 지의 여부입니다.
 * @param params.direction 방향키 축입니다. 기본값은 `'horizontal'`(←, →)이며, listbox 등 수직 리스트에는 `'vertical'`(↑, ↓)을 사용합니다.
 * @param params.initialIndex 초기 활성 인덱스입니다. 기본값은 0입니다.
 * @param params.onSelect Enter 또는 Space 입력 시 호출되는 핸들러입니다. 전달하지 않으면 해당 키는 무동작입니다.
 * @returns
 *  - `getRovingProps(index)`: 각 항목에 spread하여 주입할 props.
 *  - `focusItem(index)`: 활성 인덱스를 외부에서 변경하고 해당 항목에 포커스를 옮깁니다 (예: 드롭다운이 열릴 때 선택된 항목으로 진입).
 */
const useRovingFocus = <T extends HTMLElement, U extends HTMLElement = T>(
  params: UseRovingFocusParams,
) => {
  const {
    count,
    shouldResetFocusIndexOnItemChange = true,
    direction = 'horizontal',
    initialIndex = 0,
    onSelect,
  } = params;
  const [currentFocusIndex, setCurrentFocusIndex] = useState(initialIndex);
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    if (shouldResetFocusIndexOnItemChange) {
      setCurrentFocusIndex(0);
      return;
    }

    setCurrentFocusIndex(Math.min(count - 1, currentFocusIndex));
  }, [count]);

  const focusItem = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(count - 1, index));
      setCurrentFocusIndex(clamped);
      refs.current[clamped]?.focus();
    },
    [count],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<U>, index: number) => {
      const prevKey = direction === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      const nextKey = direction === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      let nextFocusIndex = index;

      switch (event.key) {
        case prevKey:
          event.preventDefault();
          nextFocusIndex = Math.max(0, index - 1);
          break;
        case nextKey:
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
        case 'Enter':
        case ' ':
          if (onSelect) {
            event.preventDefault();
            onSelect(index);
          }
          return;
      }

      if (nextFocusIndex !== index) {
        setCurrentFocusIndex(nextFocusIndex);
        refs.current[nextFocusIndex]?.focus();
      }
    },
    [count, direction, onSelect],
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
      onKeyDown: (event: KeyboardEvent<U>) => handleKeyDown(event, index),
      onClick: () => handleClick(index),
    }) as const;

  return { getRovingProps, focusItem };
};

export default useRovingFocus;
