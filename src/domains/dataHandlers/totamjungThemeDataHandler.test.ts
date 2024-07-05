import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from './totamjungThemeDataHandler';

describe('Test #1 - 테마 불러오기', () => {
  const totamjungThemes = ['none', 'totamjung'];

  test.each(totamjungThemes)(
    '올바른 테마 값인 "%s"가 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.',
    async (totamjungTheme) => {
      jest
        .spyOn(chrome.storage.local, 'get')
        .mockImplementation(() => ({ totamjungTheme }));

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
        .spyOn(chrome.storage.local, 'get')
        .mockImplementation(() => ({ totamjungTheme }));

      expect(await fetchTotamjungTheme()).toEqual({
        totamjungTheme: 'none',
      });
    },
  );
});

describe('Test #3 - 테마 저장하기', () => {
  const totamjungThemes = ['none', 'totamjung'];

  test.each(totamjungThemes)(
    '올바른 테마 값인 "%s"를 이용해 저장할 경우, 해당 값으로 그대로 저장되어야 한다.',
    async (totamjungTheme) => {
      jest.clearAllMocks();
      jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
      saveTotamjungTheme(totamjungTheme);

      expect(chrome.storage.local.set).toHaveBeenCalledWith({
        totamjungTheme,
      });
    },
  );
});

describe('Test #4 - 잘못된 테마 저장에 대응하기', () => {
  const invalidThemes = ['on', 'off', 1, null, '', 'anotherTheme'];

  test.each(invalidThemes)(
    '잘못된 테마 값인 "%s"를 이용해 저장할 경우, 저장이 진행되지 않아야 한다.',
    async (invalidTheme) => {
      jest.clearAllMocks();
      jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
      saveTotamjungTheme(invalidTheme);

      expect(chrome.storage.local.set).not.toHaveBeenCalled();
    },
  );
});
