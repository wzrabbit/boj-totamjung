import { isObject } from '~types/typeGuards';
import { COMMANDS } from '~constants/commands';
import {
  fetchCheckedAlgorithmIds,
  saveCheckedAlgorithmIds,
} from '~domains/dataHandlers/checkedAlgorithmsHandler';
import {
  fetchQuickSlots,
  saveQuickSlots,
} from '~domains/dataHandlers/quickSlotsDataHandler';
import {
  fetchRandomDefenseHistory,
  saveRandomDefenseHistory,
} from '~domains/dataHandlers/randomDefenseHistoryDataHandler';
import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from '~domains/dataHandlers/totamjungThemeDataHandler';
import {
  fetchHiderOptions,
  saveHiderOptions,
} from '~domains/dataHandlers/hiderOptionsDataHandler';

chrome.runtime.onMessage.addListener(
  (message: unknown, sender, sendResponse) => {
    if (
      !isObject(message) ||
      !('command' in message) ||
      typeof message.command !== 'string'
    ) {
      throw Error('잘못된 메시지가 전달되었습니다.');
    }

    const { command } = message;

    if (command === COMMANDS.OPEN_OPTIONS_PAGE) {
      chrome.runtime.openOptionsPage();
    }

    if (command === COMMANDS.FETCH_CHECKED_ALGORITHM_IDS) {
      fetchCheckedAlgorithmIds().then((result) => {
        sendResponse(result);
      });
    }

    if (command === COMMANDS.SAVE_CHECKED_ALGORITHM_IDS) {
      if (!('checkedIds' in message)) {
        return;
      }

      saveCheckedAlgorithmIds(message.checkedIds);
    }

    if (command === COMMANDS.FETCH_RANDOM_DEFENSE_HISTORY) {
      fetchRandomDefenseHistory().then((result) => {
        sendResponse(result);
      });
    }

    if (command === COMMANDS.SAVE_RANDOM_DEFENSE_HISTORY) {
      if (!('randomDefenseHistory' in message) || !('isHidden' in message)) {
        return;
      }

      const { randomDefenseHistory, isHidden } = message;

      saveRandomDefenseHistory(randomDefenseHistory, isHidden);
    }

    if (command === COMMANDS.FETCH_QUICK_SLOTS) {
      fetchQuickSlots().then((result) => {
        sendResponse(result);
      });
    }

    if (command === COMMANDS.SAVE_QUICK_SLOTS) {
      if (
        !('selectedSlotNo' in message) ||
        !('slots' in message) ||
        !('hotkey' in message)
      ) {
        return;
      }

      const { selectedSlotNo, slots, hotkey } = message;

      saveQuickSlots(selectedSlotNo, slots, hotkey);
    }

    if (command === COMMANDS.FETCH_TOTAMJUNG_THEME) {
      fetchTotamjungTheme().then((result) => {
        sendResponse(result);
      });
    }

    if (command === COMMANDS.SAVE_TOTAMJUNG_THEME) {
      if (!('totamjungTheme' in message)) {
        return;
      }

      saveTotamjungTheme(message.totamjungTheme);
    }

    if (command === COMMANDS.FETCH_HIDER_OPTIONS) {
      fetchHiderOptions().then((result) => {
        sendResponse(result);
      });
    }

    if (command === COMMANDS.SAVE_HIDER_OPTIONS) {
      saveHiderOptions(message);
    }

    return true;
  },
);
