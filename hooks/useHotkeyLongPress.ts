import type { Hotkey } from '@/types/randomDefense';
import { useState, useRef, useEffect } from 'react';
import type { SlotNo } from '@/types/randomDefense';
import { isSlotNo } from '@/domains/dataHandlers/validators/quickSlotsValidator';

interface UseHotkeyLongPressParams {
  requiredLongPressTimeInMilliseconds: number;
  baseKey: Hotkey;
  onPress: (numberKey: SlotNo) => void;
  onLongPress: (numberKey: SlotNo) => void;
}

type PressingBaseKey = 'F2' | 'AltLeft' | 'AltRight';

const isHotkeyRelatedKey = (key: string, code: string, altKey: boolean) => {
  return (
    key === 'Alt' ||
    code === 'AltLeft' ||
    code === 'AltRight' ||
    key === 'F2' ||
    code === 'F2' ||
    altKey ||
    !isNaN(Number(key)) ||
    code.startsWith('Digit')
  );
};

const useHotKeyLongPress = (params: UseHotkeyLongPressParams) => {
  const {
    requiredLongPressTimeInMilliseconds,
    baseKey: initBaseKey,
    onPress,
    onLongPress,
  } = params;
  const [baseKey, setBaseKey] = useState<Hotkey>(initBaseKey);
  const [isHotkeyLocked, setIsHotkeyLocked] = useState(false);
  const pressingBaseKeyRef = useRef<PressingBaseKey | null>(null);
  const pressingNumberKeyRef = useRef<number | null>(null);
  const isHotkeyPressingRef = useRef(false);
  const keyPressTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    const { key, code, altKey } = event;

    if (
      isHotkeyPressingRef.current ||
      isHotkeyLocked ||
      !isHotkeyRelatedKey(key, code, altKey)
    ) {
      return;
    }

    if (
      pressingBaseKeyRef.current === null &&
      baseKey === 'Alt' &&
      (key === 'Alt' || code === 'AltLeft' || code === 'AltRight' || altKey)
    ) {
      pressingBaseKeyRef.current = code === 'AltRight' ? 'AltRight' : 'AltLeft';
    }

    if (
      pressingBaseKeyRef.current === null &&
      baseKey === 'F2' &&
      (key === 'F2' || code === 'F2')
    ) {
      pressingBaseKeyRef.current = 'F2';
    }

    if (
      pressingNumberKeyRef.current === null &&
      pressingBaseKeyRef.current !== null
    ) {
      if (!isNaN(Number(key))) {
        pressingNumberKeyRef.current = Number(key);
      }

      if (code.startsWith('Digit')) {
        pressingNumberKeyRef.current = Number(code.at(-1));
      }

      const triggeredNumberKey = pressingNumberKeyRef.current;

      if (
        typeof triggeredNumberKey === 'number' &&
        isSlotNo(triggeredNumberKey)
      ) {
        isHotkeyPressingRef.current = true;

        keyPressTimerRef.current = setTimeout(() => {
          setIsHotkeyLocked(true);
          onLongPress(triggeredNumberKey);
        }, requiredLongPressTimeInMilliseconds);
      }
    }
  };

  const handleKeyUp = (event: globalThis.KeyboardEvent) => {
    const { key, code, altKey } = event;

    if (isHotkeyLocked || !isHotkeyRelatedKey(key, code, altKey)) {
      return;
    }

    const isAltKeyRelease =
      (baseKey === 'Alt' && code === pressingBaseKeyRef.current) ||
      (pressingBaseKeyRef.current === 'AltLeft' &&
        (key === 'Alt' || key === 'AltLeft'));
    const isF2KeyRelease =
      baseKey === 'F2' && (key === 'F2' || code === pressingBaseKeyRef.current);
    const isNumberKeyRelease =
      pressingNumberKeyRef.current === Number(key) ||
      pressingNumberKeyRef.current === Number(code.at(-1));

    if (isAltKeyRelease || isF2KeyRelease || isNumberKeyRelease) {
      const triggeredNumberKey = pressingNumberKeyRef.current;

      pressingBaseKeyRef.current = null;
      pressingNumberKeyRef.current = null;
      clearTimeout(keyPressTimerRef.current);
      isHotkeyPressingRef.current = false;

      if (
        typeof triggeredNumberKey === 'number' &&
        isSlotNo(triggeredNumberKey) &&
        !isHotkeyLocked
      ) {
        onPress(triggeredNumberKey);
        setIsHotkeyLocked(true);
      }
    }
  };

  /**
   * 랜덤 디펜스 실행 조건이 만족되는 경우에는 중복 실행을 방지하도록 잠금이 설정됩니다.
   * 랜덤 디펜스에 실패했거나 다른 처리를 해야하는 이유로 이 잠금을 해제하고 싶은 경우에 사용해 주세요.
   */
  const unlockHotkey = () => {
    setIsHotkeyLocked(false);
    pressingBaseKeyRef.current = null;
    pressingNumberKeyRef.current = null;
    isHotkeyPressingRef.current = false;
  };

  useEffect(() => {
    setBaseKey(initBaseKey);
  }, [initBaseKey]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      clearTimeout(keyPressTimerRef.current);
    };
  }, [baseKey, isHotkeyLocked]);

  return { unlockHotkey };
};

export default useHotKeyLongPress;
