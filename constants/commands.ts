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
  ADD_RANDOM_DEFENSE_HISTORY_INFOS: 'addRandomDefenseHistoryInfos',
  FETCH_GACHA_OPTIONS: 'fetchGachaOptions',
  SAVE_GACHA_OPTIONS: 'saveGachaOptions',
  FETCH_SHOULD_SHOW_WELCOME_MESSAGE: 'fetchShouldShowWelcomeMessage',
  SAVE_SHOULD_SHOW_WELCOME_MESSAGE: 'saveShouldShowWelcomeMessage',
} as const;

/**
 * 데이터 개편 전인 ~v1.1.2.2에서 사용되던 키들입니다.
 * v1.2부터는 사용되지 않지만, 이전 버전에서 업데이트를 한 유저를 위해 데이터를 옮겨야 하므로
 * 필요한 키들입니다.
 * 이 버전의 데이터는 세이브파일 로드에 사용할 수 없으며, 마이그레이션만 가능합니다.
 */
export const V1_SYNC_STORAGE_KEY = {
  CHECKED_ALGORITHM_IDS: 'algorithm',
  QUICK_SLOTS: 'query',
  TIMER: 'timer',
  SETTINGS: 'settings',
} as const;

export const V1_LOCAL_STORAGE_KEY = {
  RANDOM_DEFENSE_HISTORY: 'queryLog',
} as const;

/**
 * v1.2.* / dataVersion 2에서 쓰이는 키 값들입니다.
 * 모든 키는 `browser.storage.local`의 키들입니다.
 * 이는 데이터의 크기가 `browser.storage.sync`에 저장할 수 있는 한도를 넘기 때문입니다.
 * 이 버전의 데이터부터 세이브파일 로드에 사용할 수 있으며, 업로드 시 해당 토탐정 버전이 더 높은 버전의 데이터 버전을 사용하더라도
 * 마이그레이션 진행을 동반하므로 호환이 가능합니다.
 */
export const V2_STORAGE_KEY = {
  DATA_VERSION: 'dataVersion',
  CHECKED_ALGORITHM_IDS: 'checkedAlgorithmIds',
  QUICK_SLOTS: 'quickSlots',
  TOTAMJUNG_THEME: 'totamjungTheme',
  HIDER_OPTIONS: 'hiderOptions',
  RANDOM_DEFENSE_HISTORY: 'randomDefenseHistory',
  IS_TIER_HIDDEN: 'isTierHidden',
  FONT_NO: 'fontNo',
  TIMERS: 'timers',
  SHOULD_SHOW_WELCOME_MESSAGE: 'shouldShowWelcomeMessage',
} as const;

/**
 * v1.3.* / dataVersion 3에서 쓰이는 키 값들입니다. **최신 버전의 키 값들입니다.**
 */
export const STORAGE_KEY = {
  ...V2_STORAGE_KEY,
  GACHA_OPTIONS: 'gachaOptions',
} as const;
