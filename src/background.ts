import { isObject } from '~types/typeGuards';
import { COMMANDS } from '~constants/commands';
import { fetchCheckedAlgorithmIds } from '~domains/algorithm/fetchCheckedAlgorithmIds';
import { saveCheckedAlgorithmIds } from '~domains/algorithm/saveCheckedAlgorithmIds';
import {
  fetchQuickSlots,
  saveQuickSlots,
} from '~domains/randomDefense/quickSlotsDataHandler';
import {
  fetchRandomDefenseHistory,
  saveRandomDefenseHistory,
} from '~domains/randomDefense/randomDefenseHistoryDataHandler';
import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from '~domains/totamjungTheme/totamjungThemeDataHandler';

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

    return true;
  },
);
