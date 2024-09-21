export const COMMANDS = {
  OPEN_OPTIONS_PAGE: 'openOptionsPage',
  FETCH_CHECKED_ALGORITHM_IDS: 'fetchCheckedAlgorithmIds',
  SAVE_CHECKED_ALGORITHM_IDS: 'saveCheckedAlgorithmIds',
  FETCH_RANDOM_DEFENSE_HISTORY: 'fetchRandomDefenseHistory',
  SAVE_RANDOM_DEFENSE_HISTORY: 'saveRandomDefenseHistory',
  FETCH_QUICK_SLOTS: 'fetchQuickSlots',
  SAVE_QUICK_SLOTS: 'saveQuickSlots',
  FETCH_TOTAMJUNG_THEME: 'fetchTotamjungTheme',
  SAVE_TOTAMJUNG_THEME: 'saveTotamjungTheme',
  FETCH_HIDER_OPTIONS: 'fetchHiderOptions',
  SAVE_HIDER_OPTIONS: 'saveHiderOptions',
  FETCH_FONT_NO: 'fetchFontNo',
  SAVE_FONT_NO: 'saveFontNo',
  FETCH_TIMERS: 'fetchTimers',
  SAVE_TIMERS: 'saveTimers',
  FETCH_OPTIONS_DATA: 'fetchOptionsData',
  GET_REMAINING_LOCK_TIME: 'saveAndGetRemainingLockTime',
  ADD_SINGLE_TIMER: 'addSingleTimer',
  REMOVE_SINGLE_TIMER: 'removeSingleTimer',
  IS_USER_SOLVED_PROBLEM: 'isUserSolvedProblem',
  GET_RANDOM_DEFENSE_RESULT: 'getRandomDefenseResult',
  APPEND_RANDOM_DEFENSE_HISTORY_INFO: 'appendRandomDefenseHistoryInfo',
} as const;

/**
 * 현재 버전(v1.2) 이후 쓰일 키 값들입니다.
 * 모든 키는 `chrome.storage.local`의 키들입니다.
 * 이는 데이터의 크기가 `chrome.storage.sync`에 저장할 수 있는 한도를 넘기 때문입니다.
 */
export const STORAGE_KEY = {
  DATA_VERSION: 'dataVersion',
  CHECKED_ALGORITHM_IDS: 'checkedAlgorithmIds',
  QUICK_SLOTS: 'quickSlots',
  TOTAMJUNG_THEME: 'totamjungTheme',
  HIDER_OPTIONS: 'hiderOptions',
  RANDOM_DEFENSE_HISTORY: 'randomDefenseHistory',
  IS_TIER_HIDDEN: 'isTierHidden',
  FONT_NO: 'fontNo',
  TIMERS: 'timers',
} as const;

/**
 * LEGACY가 변수명으로 붙은 키들의 경우 이전 버전(~v1.1.2.2)에서 사용되던 키들입니다.
 * v1.2부터는 사용되지 않지만, 이전 버전에서 업데이트를 한 유저를 위해 데이터를 옮겨야 하므로
 * 필요한 키들입니다.
 */
export const LEGACY_SYNC_STORAGE_KEY = {
  CHECKED_ALGORITHM_IDS: 'algorithm',
  QUICK_SLOTS: 'query',
  TOTAMJUNG_THEME: 'theme',
  TIMER: 'timer',
  SETTINGS: 'settings',
} as const;

export const LEGACY_LOCAL_STORAGE_KEY = {
  RANDOM_DEFENSE_HISTORY: 'queryLog',
} as const;
