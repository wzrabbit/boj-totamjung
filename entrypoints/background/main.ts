import { isObject } from '@/types/typeGuards';
import { COMMANDS } from '@/constants/commands';
import { browser } from '#imports';
import {
  fetchCheckedAlgorithmIds,
  saveCheckedAlgorithmIds,
} from '@/domains/dataHandlers/checkedAlgorithmsHandler';
import {
  fetchQuickSlotOptions,
  saveQuickSlotOptions,
} from '@/domains/dataHandlers/quickSlotsDataHandler';
import {
  addRandomDefenseInfosToHistory,
  fetchRandomDefenseHistoryOptions,
  saveRandomDefenseHistoryOptions,
} from '@/domains/dataHandlers/randomDefenseHistoryDataHandler';
import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from '@/domains/dataHandlers/totamjungThemeDataHandler';
import {
  fetchHiderOptions,
  saveHiderOptions,
} from '@/domains/dataHandlers/hiderOptionsDataHandler';
import {
  fetchFontNo,
  saveFontNo,
} from '@/domains/dataHandlers/fontNoDataHandler';
import { updateAllLegacyData } from '@/domains/dataHandlers/legacyDataUpdater';
import {
  fetchTimers,
  saveTimers,
  getRemainingLockTimeByProblemId,
  addSingleTimerByProblemId,
  removeSingleTimerByProblemId,
} from '@/domains/dataHandlers/tagLockTimersDataHandler';
import {
  fetchShouldShowWelcomeMessage,
  saveShouldShowWelcomeMessage,
} from '@/domains/dataHandlers/shouldShowWelcomeMessageDataHandler';
import {
  fetchGachaOptions,
  saveGachaOptions,
} from '@/domains/dataHandlers/gachaOptionsHandler';
import { fetchOptionsData } from '@/domains/dataHandlers/optionsDataHandler';
import { isUserSolvedProblem } from '@/domains/tierHider/userSolvedChecker';
import { getRandomDefenseResult } from '@/domains/randomDefense/randomDefenseProblemChooser';
import { initializeDataOnFirstInstall } from '@/domains/dataHandlers/dataInitializer';
import { TOTAMJUNG_GUIDE_URL } from '@/constants/urls';

const executeBackground = () => {
  browser.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
      initializeDataOnFirstInstall();
      browser.tabs.create({ url: TOTAMJUNG_GUIDE_URL.QUICK_START });
      return;
    }

    if (reason === 'update') {
      updateAllLegacyData();
    }
  });

  browser.runtime.onMessage.addListener(
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
        browser.runtime.openOptionsPage();
      }

      if (command === COMMANDS.FETCH_CHECKED_ALGORITHM_IDS) {
        fetchCheckedAlgorithmIds().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_CHECKED_ALGORITHM_IDS) {
        if (!('checkedAlgorithmIds' in message)) {
          return;
        }

        saveCheckedAlgorithmIds(message.checkedAlgorithmIds);
      }

      if (command === COMMANDS.FETCH_RANDOM_DEFENSE_HISTORY_OPTIONS) {
        fetchRandomDefenseHistoryOptions().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_RANDOM_DEFENSE_HISTORY_OPTIONS) {
        if (!('randomDefenseHistory' in message) || !('isHidden' in message)) {
          return;
        }

        const { randomDefenseHistory, isHidden } = message;

        saveRandomDefenseHistoryOptions(randomDefenseHistory, isHidden);
      }

      if (command === COMMANDS.FETCH_QUICK_SLOT_OPTIONS) {
        fetchQuickSlotOptions().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_QUICK_SLOT_OPTIONS) {
        if (
          !('selectedSlotNo' in message) ||
          !('slots' in message) ||
          !('hotkey' in message)
        ) {
          return;
        }

        const { selectedSlotNo, slots, hotkey } = message;

        saveQuickSlotOptions(selectedSlotNo, slots, hotkey);
      }

      if (command === COMMANDS.FETCH_THEME) {
        fetchTotamjungTheme().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_THEME) {
        if (!('totamjungTheme' in message)) {
          return;
        }

        saveTotamjungTheme(message.totamjungTheme);
      }

      if (command === COMMANDS.FETCH_HIDER_OPTIONS) {
        fetchHiderOptions().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_HIDER_OPTIONS) {
        if (!('hiderOptions' in message)) {
          return;
        }

        saveHiderOptions(message.hiderOptions);
      }

      if (command === COMMANDS.FETCH_FONT_NO) {
        fetchFontNo().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_FONT_NO) {
        if (!('fontNo' in message)) {
          return;
        }

        const { fontNo } = message;
        saveFontNo(fontNo);
      }

      if (command === COMMANDS.FETCH_TAG_LOCK_TIMERS) {
        fetchTimers().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_TAG_LOCK_TIMERS) {
        if (!('timers' in message)) {
          return;
        }

        const { timers } = message;
        saveTimers(timers);
      }

      if (command === COMMANDS.FETCH_GACHA_OPTIONS) {
        fetchGachaOptions().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_GACHA_OPTIONS) {
        if (!('isTierHidden' in message && 'isAudioMuted' in message)) {
          return;
        }

        const { isTierHidden, isAudioMuted } = message;
        saveGachaOptions({ isTierHidden, isAudioMuted });
      }

      if (command === COMMANDS.FETCH_OPTIONS_DATA) {
        fetchOptionsData().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.GET_REMAINING_LOCK_TIME) {
        const matchedProblemId = sender.url?.match(
          /(?<=^https:\/\/www\.acmicpc\.net\/problem\/)\d+/,
        );

        if (!matchedProblemId) {
          return;
        }

        const problemId = Number(matchedProblemId[0]);

        getRemainingLockTimeByProblemId(problemId).then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.ADD_SINGLE_TAG_LOCK_TIMER) {
        const matchedProblemId = sender.url?.match(
          /(?<=^https:\/\/www\.acmicpc\.net\/problem\/)\d+/,
        );

        if (!matchedProblemId) {
          return;
        }

        const problemId = Number(matchedProblemId[0]);
        addSingleTimerByProblemId(problemId);
      }

      if (command === COMMANDS.REMOVE_SINGLE_TAG_LOCK_TIMER) {
        const matchedProblemId = sender.url?.match(
          /(?<=^https:\/\/www\.acmicpc\.net\/problem\/)\d+/,
        );

        if (!matchedProblemId) {
          return;
        }

        const problemId = Number(matchedProblemId[0]);
        removeSingleTimerByProblemId(problemId);
      }

      if (command === COMMANDS.IS_USER_SOLVED_PROBLEM) {
        if (
          !(
            'handle' in message &&
            'problemId' in message &&
            typeof message.handle === 'string' &&
            typeof message.problemId === 'number'
          )
        ) {
          return;
        }

        const { handle, problemId } = message;

        isUserSolvedProblem(handle, problemId).then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.GET_RANDOM_DEFENSE_RESULT) {
        if (
          !('query' in message) ||
          typeof message.query !== 'string' ||
          !('problemCount' in message) ||
          typeof message.problemCount !== 'number'
        ) {
          return;
        }

        const { query, problemCount } = message;

        getRandomDefenseResult(query, problemCount).then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.ADD_RANDOM_DEFENSE_HISTORY_INFOS) {
        if (!('randomDefenseHistoryInfos' in message)) {
          return;
        }

        addRandomDefenseInfosToHistory(message.randomDefenseHistoryInfos).then(
          () => {
            sendResponse();
          },
        );
        return true;
      }

      if (command === COMMANDS.FETCH_SHOULD_SHOW_WELCOME_MESSAGE) {
        fetchShouldShowWelcomeMessage().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_SHOULD_SHOW_WELCOME_MESSAGE) {
        if (!('shouldShowWelcomeMessage' in message)) {
          return;
        }

        const { shouldShowWelcomeMessage } = message;
        saveShouldShowWelcomeMessage(shouldShowWelcomeMessage);
      }
    },
  );
};

export default executeBackground;
