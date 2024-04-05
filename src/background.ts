import { isObject } from '~types/typeGuards';
import { COMMANDS } from '~constants/commands';
import { fetchCheckedAlgorithmIds } from '~domains/algorithm/fetchCheckedAlgorithmIds';
import { saveCheckedAlgorithmIds } from '~domains/algorithm/saveCheckedAlgorithmIds';
import {
  fetchRandomDefenseHistory,
  saveRandomDefenseHistory,
} from '~domains/randomDefense/randomDefenseHistoryDataHandler';

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

    return true;
  },
);
