import { isObject } from '~types/typeGuards';
import { COMMANDS } from '~constants/commands';
import { fetchCheckedAlgorithmIds } from '~domains/algorithm/fetchCheckedAlgorithmIds';

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

    return true;
  },
);
