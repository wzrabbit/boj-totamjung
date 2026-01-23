import { isObject } from '@/types/typeGuards';
import { COMMANDS } from '@/constants/commands';
import { browser } from '#imports';
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
import { TOTAMJUNG_GUIDE_URL } from '@/constants/urls';

type FetchCommand = Extract<
  (typeof COMMANDS)[keyof typeof COMMANDS],
  `fetch${string}`
>;

type SaveCommand = Exclude<
  Extract<(typeof COMMANDS)[keyof typeof COMMANDS], `save${string}`>,
  'saveAndGetRemainingLockTime'
>;

const fetchFunctions: Record<FetchCommand, () => Promise<unknown>> = {
  [COMMANDS.FETCH_CHECKED_ALGORITHM_IDS]: () => fetchCheckedAlgorithmIds(),
  [COMMANDS.FETCH_RANDOM_DEFENSE_HISTORY]: () => fetchRandomDefenseHistory(),
  [COMMANDS.FETCH_QUICK_SLOTS]: () => fetchQuickSlots(),
  [COMMANDS.FETCH_TOTAMJUNG_THEME]: () => fetchTotamjungTheme(),
  [COMMANDS.FETCH_HIDER_OPTIONS]: () => fetchHiderOptions(),
  [COMMANDS.FETCH_FONT_NO]: () => fetchFontNo(),
  [COMMANDS.FETCH_TIMERS]: () => fetchTimers(),
  [COMMANDS.FETCH_GACHA_OPTIONS]: () => fetchGachaOptions(),
  [COMMANDS.FETCH_OPTIONS_DATA]: () => fetchOptionsData(),
  [COMMANDS.FETCH_SHOULD_SHOW_WELCOME_MESSAGE]: () =>
    fetchShouldShowWelcomeMessage(),
} as const;

const saveFunctions: Record<SaveCommand, (data: unknown) => void> = {
  [COMMANDS.SAVE_CHECKED_ALGORITHM_IDS]: (data: unknown) =>
    saveCheckedAlgorithmIds(data),
  [COMMANDS.SAVE_RANDOM_DEFENSE_HISTORY]: (data: unknown) =>
    saveRandomDefenseHistory(data),
  [COMMANDS.SAVE_QUICK_SLOTS]: (data: unknown) => saveQuickSlots(data),
  [COMMANDS.SAVE_TOTAMJUNG_THEME]: (data: unknown) => saveTotamjungTheme(data),
  [COMMANDS.SAVE_HIDER_OPTIONS]: (data: unknown) => saveHiderOptions(data),
  [COMMANDS.SAVE_FONT_NO]: (data: unknown) => saveFontNo(data),
  [COMMANDS.SAVE_TIMERS]: (data: unknown) => saveTimers(data),
  [COMMANDS.SAVE_GACHA_OPTIONS]: (data: unknown) => saveGachaOptions(data),
  [COMMANDS.SAVE_SHOULD_SHOW_WELCOME_MESSAGE]: (data: unknown) =>
    saveShouldShowWelcomeMessage(data),
} as const;

const isFetchCommand = (data: unknown): data is FetchCommand => {
  return typeof data === 'string' && data in fetchFunctions;
};

const isSaveCommand = (data: unknown): data is SaveCommand => {
  return typeof data === 'string' && data in saveFunctions;
};

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

      if (isFetchCommand(command)) {
        fetchFunctions[command]().then((result: unknown) => {
          sendResponse(result);
        });
        return true;
      }

      if ('data' in message && isSaveCommand(command)) {
        saveFunctions[command](message.data);
      }

      if (command === COMMANDS.OPEN_OPTIONS_PAGE) {
        browser.runtime.openOptionsPage();
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
    },
  );
};

export default executeBackground;
