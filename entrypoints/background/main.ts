import { isObject } from '@/types/typeGuards';
import { COMMANDS } from '@/constants/commands';
import { browser } from 'wxt/browser/chrome';
import {
  fetchCheckedAlgorithmIds,
  saveCheckedAlgorithmIds,
} from '@/domains/dataHandlers/checkedAlgorithmsHandler';
import {
  fetchQuickSlots,
  saveQuickSlots,
} from '@/domains/dataHandlers/quickSlotsDataHandler';
import {
  addRandomDefenseInfosToHistory,
  fetchRandomDefenseHistory,
  saveRandomDefenseHistory,
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
} from '@/domains/dataHandlers/timersDataHandler';
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
import { TOTAMJUNG_GUIDE_PAGE_URL } from '@/constants/urls';

const executeBackground = () => {
  browser.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
      initializeDataOnFirstInstall();
      browser.tabs.create({ url: TOTAMJUNG_GUIDE_PAGE_URL });
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

      if (command === COMMANDS.FETCH_RANDOM_DEFENSE_HISTORY) {
        fetchRandomDefenseHistory().then((result) => {
          sendResponse(result);
        });
        return true;
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
        return true;
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
        return true;
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

      if (command === COMMANDS.FETCH_TIMERS) {
        fetchTimers().then((result) => {
          sendResponse(result);
        });
        return true;
      }

      if (command === COMMANDS.SAVE_TIMERS) {
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

      if (command === COMMANDS.ADD_SINGLE_TIMER) {
        const matchedProblemId = sender.url?.match(
          /(?<=^https:\/\/www\.acmicpc\.net\/problem\/)\d+/,
        );

        if (!matchedProblemId) {
          return;
        }

        const problemId = Number(matchedProblemId[0]);
        addSingleTimerByProblemId(problemId);
      }

      if (command === COMMANDS.REMOVE_SINGLE_TIMER) {
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

        addRandomDefenseInfosToHistory(message.randomDefenseHistoryInfos);
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
