global.chrome = {
  storage: {
    sync: {
      get: async () => {
        throw Error(
          'chrome.storage.sync.get에 대한 모킹이 구현되지 않았습니다.',
        );
      },
      set: async () => {
        throw Error(
          'chrome.storage.sync.get에 대한 모킹이 구현되지 않았습니다.',
        );
      },
    },

    local: {
      get: async () => {
        throw Error(
          'chrome.storage.sync.get에 대한 모킹이 구현되지 않았습니다.',
        );
      },
      set: async () => {
        throw Error(
          'chrome.storage.sync.get에 대한 모킹이 구현되지 않았습니다.',
        );
      },
    },
  },
};
