import { useState, useEffect, useRef } from 'react';
import { DEFAULT_QUICK_SLOTS_RESPONSE } from '~constants/defaultValues';
import type { QuickSlotsResponse } from '~types/randomDefense';

const useRandomDefense = () => {
  const [quickSlotsResponse, setQuickSlotsResponse] =
    useState<QuickSlotsResponse>(DEFAULT_QUICK_SLOTS_RESPONSE);
  const pressedKeysRef = useRef<Set<string>>(new Set());
  const pressedKeyCodesRef = useRef<Set<number>>(new Set());

  /**
   * keyCode는 deprecated이지만, 일부 사용자에게서 keyCode를 사용하지 않을 경우
   * 단축키가 인식이 안 되는 문제가 있는 현상이 제보되어, 호환을 위해 유지합니다.
   */
  const addPressedKeyInfo = (event: globalThis.KeyboardEvent) => {
    const key = event.key;
    const keyCode = event.keyCode;

    pressedKeysRef.current.add(key);
    pressedKeyCodesRef.current.add(keyCode);
  };

  const deletePressedKeyInfo = (event: globalThis.KeyboardEvent) => {
    const key = event.key;
    const keyCode = event.keyCode;

    pressedKeysRef.current.delete(key);
    pressedKeyCodesRef.current.delete(keyCode);
  };

  useEffect(() => {
    document.addEventListener('keydown', addPressedKeyInfo);
    document.addEventListener('keyup', deletePressedKeyInfo);

    return () => {
      document.removeEventListener('keydown', addPressedKeyInfo);
      document.removeEventListener('keyup', deletePressedKeyInfo);
    };
  }, []);

  return {
    isRandomDefenseAvailable,
    performRandomDefense,
  };
};

export default useRandomDefense;
