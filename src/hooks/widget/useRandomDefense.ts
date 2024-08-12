import { useState, useEffect, useRef } from 'react';
import { COMMANDS } from '~constants/commands';
import { DEFAULT_QUICK_SLOTS_RESPONSE } from '~constants/defaultValues';
import {
  isQuickSlotsResponse,
  isSlotNo,
} from '~domains/dataHandlers/validators/quickSlotsValidator';
import type { ToastInfo } from '~types/toast';
import type { QuickSlotsResponse, SlotNo } from '~types/randomDefense';
import { isRandomDefenseResultResponse } from '~domains/dataHandlers/validators/RandomDefenseResultResponseValidator';

interface UseRandomDefenseParams {
  onToast: (toastInfo: ToastInfo, duration: number) => void;
}

const useRandomDefense = (params: UseRandomDefenseParams) => {
  const { onToast } = params;
  const [isRandomDefenseAvailable, setIsRandomDefenseAvailable] =
    useState(false);

  const isRandomDefenseAvailableRef = useRef(isRandomDefenseAvailable);
  const pressedKeysRef = useRef<Set<string>>(new Set());
  const pressedCodesRef = useRef<Set<string>>(new Set());
  const quickSlotsResponseRef = useRef<QuickSlotsResponse>(
    DEFAULT_QUICK_SLOTS_RESPONSE,
  );

  useEffect(() => {
    const fetchQuickSlots = async () => {
      const response = await chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_QUICK_SLOTS,
      });

      if (!isQuickSlotsResponse(response)) {
        return;
      }

      quickSlotsResponseRef.current = response;
      isRandomDefenseAvailableRef.current = true;
      setIsRandomDefenseAvailable(true);
    };

    fetchQuickSlots();
    document.addEventListener('keydown', addPressedKeyInfo);
    document.addEventListener('keyup', deletePressedKeyInfo);
    chrome.storage.onChanged.addListener(updateQuickSlotsIfLocalChanged);

    return () => {
      document.removeEventListener('keydown', addPressedKeyInfo);
      document.removeEventListener('keyup', deletePressedKeyInfo);
      chrome.storage.onChanged.removeListener(updateQuickSlotsIfLocalChanged);
    };
  }, []);

  const updateQuickSlotsIfLocalChanged = (
    changes: { [key: string]: chrome.storage.StorageChange },
    areaName: chrome.storage.AreaName,
  ) => {
    if (areaName !== 'local' || !('quickSlots' in changes)) {
      return;
    }

    const { newValue } = changes.quickSlots;

    if (!isQuickSlotsResponse(newValue)) {
      return;
    }

    quickSlotsResponseRef.current = newValue;
  };

  const addPressedKeyInfo = (event: globalThis.KeyboardEvent) => {
    const key = event.key;
    const code = event.code;

    pressedKeysRef.current.add(key);
    pressedCodesRef.current.add(code);

    const altPressed = event.altKey;
    const f2Pressed = pressedCodesRef.current.has('F2');
    const isNumberKeyPressedNow =
      !isNaN(Number(event.key)) || event.code.startsWith('Digit');

    if (!isNumberKeyPressedNow) {
      return;
    }

    const { hotkey } = quickSlotsResponseRef.current;
    const currentNumberKey = !isNaN(Number(event.key))
      ? Number(event.key)
      : Number(event.code.at(-1));

    if (!isSlotNo(currentNumberKey)) {
      return;
    }

    if (hotkey === 'Alt' && altPressed) {
      performRandomDefense(currentNumberKey, 'keydown');
      return;
    }

    if (hotkey === 'F2' && f2Pressed) {
      performRandomDefense(currentNumberKey, 'keydown');
    }
  };

  const deletePressedKeyInfo = (event: globalThis.KeyboardEvent) => {
    const key = event.key;
    const code = event.code;

    pressedKeysRef.current.delete(key);
    pressedCodesRef.current.delete(code);
  };

  const performRandomDefense = async (
    selectedSlotNo: SlotNo,
    method: 'keydown' | 'click',
  ) => {
    if (!isRandomDefenseAvailableRef.current) {
      return;
    }

    isRandomDefenseAvailableRef.current = false;
    setIsRandomDefenseAvailable(false);

    const { slots } = quickSlotsResponseRef.current;
    const selectedSlot = slots[selectedSlotNo];

    if (selectedSlot.isEmpty) {
      if (method === 'click') {
        onToast(
          {
            title: `${selectedSlotNo}번 슬롯은 현재 비어 있습니다.`,
            mainIconSrc: chrome.runtime.getURL('dice.png'),
            descriptions: [
              '추첨을 만들지 않으셨다면, 설정에서 해당 슬롯에 추첨을 먼저 만들어 주세요!',
              '설정의 퀵슬롯 메뉴에서 선택된 슬롯 번호를 변경하는 것으로 위젯 클릭 시 사용할 추첨의 슬롯을 정하실 수 있습니다.',
            ],
          },
          8000,
        );
      }
      isRandomDefenseAvailableRef.current = true;
      setIsRandomDefenseAvailable(true);

      return;
    }

    const randomDefenseResultResponse = await chrome.runtime.sendMessage({
      command: COMMANDS.GET_RANDOM_DEFENSE_RESULT,
      query: selectedSlot.query,
    });

    if (!isRandomDefenseResultResponse(randomDefenseResultResponse)) {
      onToast(
        {
          title: '데이터 불일치가 발견되었습니다.',
          mainIconSrc: chrome.runtime.getURL('dice.png'),
          descriptions: '개발자에게 이 문제가 발생했음을 알려 주세요.',
        },
        8000,
      );
      isRandomDefenseAvailableRef.current = true;
      setIsRandomDefenseAvailable(true);
      return;
    }

    if (!randomDefenseResultResponse.success) {
      const { errorMessage, errorDescriptions } = randomDefenseResultResponse;

      onToast(
        {
          title: errorMessage,
          mainIconSrc: chrome.runtime.getURL('dice.png'),
          descriptions: errorDescriptions,
        },
        8000,
      );
      isRandomDefenseAvailableRef.current = true;
      setIsRandomDefenseAvailable(true);

      return;
    }

    const { problemInfo } = randomDefenseResultResponse;
    const { problemId, titleKo, level } = problemInfo;

    chrome.runtime.sendMessage({
      command: COMMANDS.APPEND_RANDOM_DEFENSE_HISTORY_INFO,
      randomDefenseHistoryInfo: {
        problemId,
        title: titleKo,
        tier: level,
        createdAt: new Date().toISOString(),
      },
    });

    location.href = `https://acmicpc.net/problem/${problemId}`;
  };

  const performRandomDefenseByClick = () => {
    performRandomDefense(quickSlotsResponseRef.current.selectedSlotNo, 'click');
  };

  return {
    isRandomDefenseAvailable,
    performRandomDefenseByClick,
  };
};

export default useRandomDefense;
