export const COMMANDS = {
  FETCH_CHECKED_ALGORITHM_IDS: 'fetchCheckedAlgorithmIds',
  SAVE_CHECKED_ALGORITHM_IDS: 'saveCheckedAlgorithmIds',
};

export const SYNC_STORAGE_KEY = {
  CHECKED_ALGORITHM_IDS: 'checkedAlgorithmIds',
};

/**
 * 이 키들은 v1.1.*까지의 이전 버전에서 사용되던 키들입니다.
 * v1.2부터는 사용되지 않지만, 이전 버전에서 업데이트를 한 유저를 위해 데이터를 옮겨야 하므로
 * 필요한 키들입니다.
 */
export const LEGACY_SYNC_STORAGE_KEY = {
  CHECKED_ALGORITHM_IDS: 'algorithm',
};
