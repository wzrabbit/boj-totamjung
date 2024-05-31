import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from './totamjungThemeDataHandler';
import type { TotamjungTheme } from '~types/totamjungTheme';

describe('Test #1 - 테마 불러오기', () => {
  const totamjungThemes = ['none', 'totamjung'];

  test.each(totamjungThemes)(
    '올바른 테마 값인 "%s"가 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.',
    async (totamjungTheme) => {
      jest
        .spyOn(chrome.storage.sync, 'get')
        .mockImplementation(async (_, callback) => {
          callback({ totamjungTheme });
        });

      expect(await fetchTotamjungTheme()).toEqual({
        totamjungTheme,
      });
    },
  );
});

describe('Test #2 - 유효하지 않은 테마 값을 불러왔을 때 대응하기', () => {
  const invalidThemes = ['on', 'off', 1, null, '', 'anotherTheme'];

  test.each(invalidThemes)(
    '잘못된 테마 값인 "%s"가 저장되어 있다면, "none"를 반환해야 한다.',
    async (totamjungTheme) => {
      jest
        .spyOn(chrome.storage.sync, 'get')
        .mockImplementation(async (_, callback) => {
          callback({ totamjungTheme });
        });

      expect(await fetchTotamjungTheme()).toEqual({
        totamjungTheme: 'none',
      });
    },
  );
});

describe('Test #3 - 구버전 테마 값에 대응하기', () => {
  const testcases: Array<[unknown, TotamjungTheme]> = [
    ['on', 'totamjung'],
    ['off', 'none'],
    [null, 'none'],
    ['fooBar', 'none'],
    [1, 'none'],
  ];

  test.each(testcases)(
    '테마 값이 존재하지 않으나 구버전 테마 값이 존재하고 값이 "%s"일 경우, 구버전 테마의 값을 불러와야 하며 "%s"를 반환해야 한다.',
    async (legacyTheme, expected) => {
      jest
        .spyOn(chrome.storage.sync, 'get')
        .mockImplementation(async (_, callback) => {
          callback({ theme: legacyTheme });
        });

      expect(await fetchTotamjungTheme()).toEqual({
        totamjungTheme: expected,
      });
    },
  );

  test('최신 버전의 테마 값과 구버전의 테마 값이 모두 존재하는 경우에는 최신 버전의 데이터를 채택하여 반환해야 한다.', async () => {
    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ theme: 'off', totamjungTheme: 'totamjung' });
      });

    expect(await fetchTotamjungTheme()).toEqual({
      totamjungTheme: 'totamjung',
    });
  });
});

describe('Test #4 - 테마 저장하기', () => {
  const totamjungThemes = ['none', 'totamjung'];

  test.each(totamjungThemes)(
    '올바른 테마 값인 "%s"를 이용해 저장할 경우, 해당 값으로 그대로 저장되어야 한다.',
    async (totamjungTheme) => {
      jest.clearAllMocks();
      jest.spyOn(chrome.storage.sync, 'set').mockImplementation(() => {});
      saveTotamjungTheme(totamjungTheme);

      expect(chrome.storage.sync.set).toHaveBeenCalledWith({
        totamjungTheme,
      });
    },
  );
});

describe('Test #5 - 잘못된 테마 저장에 대응하기', () => {
  const invalidThemes = ['on', 'off', 1, null, '', 'anotherTheme'];

  test.each(invalidThemes)(
    '잘못된 테마 값인 "%s"를 이용해 저장할 경우, 저장이 진행되지 않아야 한다.',
    async (invalidTheme) => {
      jest.clearAllMocks();
      jest.spyOn(chrome.storage.sync, 'set').mockImplementation(() => {});
      saveTotamjungTheme(invalidTheme);

      expect(chrome.storage.sync.set).not.toHaveBeenCalled();
    },
  );
});
