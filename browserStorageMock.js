global.browser = {
  storage: {
    sync: {
      get: async () => {
        throw Error(
          'browser.storage.sync.get에 대한 모킹이 구현되지 않았습니다.',
        );
      },
      set: async () => {
        throw Error(
          'browser.storage.sync.set에 대한 모킹이 구현되지 않았습니다.',
        );
      },
    },

    local: {
      get: async () => {
        throw Error(
          'browser.storage.local.get에 대한 모킹이 구현되지 않았습니다.',
        );
      },
      set: async () => {
        throw Error(
          'browser.storage.local.set에 대한 모킹이 구현되지 않았습니다.',
        );
      },
    },
  },

  runtime: {
    sendMessage: async () => {
      throw Error(
        'browser.runtime.sendMessage에 대한 모킹이 구현되지 않았습니다.',
      );
    },
  },
};
