import { useState, useEffect, useRef } from 'react';
import { COMMANDS } from '@/constants/commands';
import { DEFAULT_QUICK_SLOTS_RESPONSE } from '@/constants/defaultValues';
import { isQuickSlots } from '@/domains/dataHandlers/validators/quickSlotsValidator';
import { isRandomDefenseResult } from '@/domains/dataHandlers/validators/RandomDefenseResultValidator';
import useHotKeyLongPress from '../useHotkeyLongPress';
import type { ToastInfo } from '@/types/toast';
import type { FilledSlot, QuickSlots, SlotNo } from '@/types/randomDefense';
import type { Storage } from 'wxt/browser';

interface UseRandomDefenseParams {
  onToast: (toastInfo: ToastInfo, duration: number) => void;
  onGachaStart: (slot: FilledSlot) => void;
}

const useRandomDefense = (params: UseRandomDefenseParams) => {
  const { onToast, onGachaStart } = params;
  const [isRandomDefenseAvailable, setIsRandomDefenseAvailable] =
    useState(false);
  const isRandomDefenseAvailableRef = useRef(isRandomDefenseAvailable);
  const quickSlotsResponseRef = useRef<QuickSlots>(
    DEFAULT_QUICK_SLOTS_RESPONSE,
  );
  useHotKeyLongPress({
    baseKey: quickSlotsResponseRef.current.hotkey,
    requiredLongPressTimeInMilliseconds: 1000,
    onPress: (numberKey) => performRandomDefense(numberKey, 'press'),
    onLongPress: (numberKey) => performRandomDefense(numberKey, 'keyLongPress'),
  });

  useEffect(() => {
    const fetchQuickSlots = async () => {
      const response = await browser.runtime.sendMessage({
        command: COMMANDS.FETCH_QUICK_SLOTS,
      });

      if (!isQuickSlots(response)) {
        return;
      }

      quickSlotsResponseRef.current = response;
      isRandomDefenseAvailableRef.current = true;
      setIsRandomDefenseAvailable(true);
    };

    fetchQuickSlots();
    browser.storage.onChanged.addListener(updateQuickSlotsIfLocalChanged);

    return () => {
      browser.storage.onChanged.removeListener(updateQuickSlotsIfLocalChanged);
    };
  }, []);

  const updateQuickSlotsIfLocalChanged = (
    changes: { [key: string]: Storage.StorageChange },
    areaName: string,
  ) => {
    if (areaName !== 'local' || !('quickSlots' in changes)) {
      return;
    }

    const { newValue } = changes.quickSlots;

    if (!isQuickSlots(newValue)) {
      return;
    }

    quickSlotsResponseRef.current = newValue;
  };

  const performRandomDefense = async (
    selectedSlotNo: SlotNo,
    method: 'press' | 'keyLongPress' | 'click' | 'mouseLongPress',
  ) => {
    if (!isRandomDefenseAvailableRef.current) {
      return;
    }

    isRandomDefenseAvailableRef.current = false;
    setIsRandomDefenseAvailable(false);

    const { slots } = quickSlotsResponseRef.current;
    const selectedSlot = slots[selectedSlotNo];

    if (selectedSlot.isEmpty) {
      if (method === 'click' || method === 'mouseLongPress') {
        onToast(
          {
            title: `${selectedSlotNo}번 슬롯은 현재 비어 있습니다.`,
            mainIconSrc: browser.runtime.getURL('/dice.png'),
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

    if (method === 'keyLongPress' || method === 'mouseLongPress') {
      onGachaStart(selectedSlot);
      setIsRandomDefenseAvailable(false);
      return;
    }

    const randomDefenseResultResponse = await browser.runtime.sendMessage({
      command: COMMANDS.GET_RANDOM_DEFENSE_RESULT,
      query: selectedSlot.query,
      problemCount: 1,
    });

    if (!isRandomDefenseResult(randomDefenseResultResponse)) {
      onToast(
        {
          title: '데이터 불일치가 발견되었습니다.',
          mainIconSrc: browser.runtime.getURL('/dice.png'),
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
          mainIconSrc: browser.runtime.getURL('/dice.png'),
          descriptions: errorDescriptions,
        },
        8000,
      );
      isRandomDefenseAvailableRef.current = true;
      setIsRandomDefenseAvailable(true);
      return;
    }

    const { problemInfos } = randomDefenseResultResponse;
    const { problemId } = problemInfos[0];

    browser.runtime.sendMessage({
      command: COMMANDS.ADD_RANDOM_DEFENSE_HISTORY_INFOS,
      randomDefenseHistoryInfos: [
        {
          ...problemInfos[0],
          createdAt: new Date().toISOString(),
        },
      ],
    });

    location.href = `https://acmicpc.net/problem/${problemId}`;
  };

  const performRandomDefenseByClick = () => {
    performRandomDefense(quickSlotsResponseRef.current.selectedSlotNo, 'click');
  };

  const performRandomDefenseByMouseLongPress = () => {
    performRandomDefense(
      quickSlotsResponseRef.current.selectedSlotNo,
      'mouseLongPress',
    );
  };

  /**
   * 기본적으로 랜덤 디펜스를 진행하기 시작하면 한 번에 여러 번의 랜덤 디펜스가 진행되는 것을 막기 위해,
   * 랜덤 디펜스를 더 이상 진행하지 못하도록 잠금이 자동으로 설정됩니다.
   *
   * 이 잠금은 랜덤 디펜스에 실패하는 경우 해제되며, 성공한 경우에는 다른 페이지로 이동되므로 이 잠금이 자동으로 해제됩니다.
   * 그러나 단축키 또는 마우스를 길게 눌러 진행하는 즉석 추첨의 경우 이 잠금이 자동으로 해제되지 않으며 사용자가 추첨 창을 닫았다면 다시 랜덤 디펜스를 진행할 수 있도록 잠금을 해제해야 할 수 있습니다.
   * 이 때 본 함수를 이용해 랜덤 디펜스를 다시 사용할 수 있도록 잠금을 해제할 수 있습니다.
   */
  const enableRandomDefense = () => {
    isRandomDefenseAvailableRef.current = true;
    setIsRandomDefenseAvailable(true);
  };

  /**
   * 단축키에 의한 랜덤 디펜스 진행 시에는 중복 진행을 막기 위해 추가적인 랜덤 디펜스는 비활성화되므로 사용할 필요가 없습니다.
   * 다만, 마우스로 인한 즉석 추첨 실행 등의, 다른 방법으로 이미 랜덤 디펜스를 시작하게 된 경우에는 직접 랜덤 디펜스가 진행 중이므로 비활성화해야 함을 이 커스텀 훅에 알려야 할 수 있습니다.
   * 그 때에 이 함수를 사용하면 됩니다.
   */
  const disableRandomDefense = () => {
    isRandomDefenseAvailableRef.current = false;
    setIsRandomDefenseAvailable(false);
  };

  return {
    isRandomDefenseAvailable,
    performRandomDefenseByClick,
    performRandomDefenseByMouseLongPress,
    enableRandomDefense,
    disableRandomDefense,
  };
};

export default useRandomDefense;
