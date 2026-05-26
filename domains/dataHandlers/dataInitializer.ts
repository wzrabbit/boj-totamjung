import type { QuickSlots, QuickSlotOptions } from '@/types/randomDefense';
import { DEFAULT_EMPTY_DATA } from '@/constants/defaultValues';
import { STORAGE_KEY } from '@/constants/commands';
import { getMessage } from '@/i18n/dict';
import { detectBrowserLanguage } from '@/i18n/detectBrowserLanguage';

/**
 * 최초 설치 시 덮어씌우게 될 데이터입니다. 데이터 초기화 시에 덮어씌우는 데이터와는 다소 다르며, 세 개의 범용성 높은 쿼리가 생성되어 있는채로 시작하게 됩니다.
 * 슬롯 이름은 브라우저 UI 언어 기준으로 한국어/영어 중 하나로 결정되어 저장됩니다.
 */
const buildInitialSlots = (): QuickSlots => {
  const language = detectBrowserLanguage();

  return {
    1: {
      isEmpty: false,
      title: getMessage(language, 'defaultSlots.goldRandomDefense'),
      query: 'o? -w? *g lang:ko',
    },
    2: {
      isEmpty: false,
      title: getMessage(language, 'defaultSlots.silverRandomDefense'),
      query: 'o? -w? *s lang:ko',
    },
    3: {
      isEmpty: false,
      title: getMessage(language, 'defaultSlots.allRandom'),
      query: '(*0&!s?|!*0) o? -w? lang:ko',
    },
    4: { isEmpty: true },
    5: { isEmpty: true },
    6: { isEmpty: true },
    7: { isEmpty: true },
    8: { isEmpty: true },
    9: { isEmpty: true },
    0: { isEmpty: true },
  };
};

const buildInitialQuickSlotOptions = (): QuickSlotOptions => ({
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: buildInitialSlots(),
});

export const initializeDataOnFirstInstall = () => {
  browser.storage.local.set({
    ...DEFAULT_EMPTY_DATA,
    [STORAGE_KEY.QUICK_SLOT_OPTIONS]: buildInitialQuickSlotOptions(),
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: true,
  });
};
