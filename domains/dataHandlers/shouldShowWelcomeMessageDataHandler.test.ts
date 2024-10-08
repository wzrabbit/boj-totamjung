import {
  fetchShouldShowWelcomeMessage,
  saveShouldShowWelcomeMessage,
} from './shouldShowWelcomeMessageDataHandler';

describe('Test #1 - 환영 메시지 출력 여부가 저장되어 있는 값 불러오기', () => {
  const values = [true, false];

  test.each(values)(
    '올바른 환영 메시지 출력 여부에 대응하는 유효한 값인 "%s"가 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.',
    async (value) => {
      jest
        .spyOn(browser.storage.local, 'get')
        .mockImplementation(() =>
          Promise.resolve({ shouldShowWelcomeMessage: value }),
        );

      expect(await fetchShouldShowWelcomeMessage()).toEqual(value);
    },
  );
});

describe('Test #2 - 유효하지 않은 환영 메시지 출력 여부가 저장되어 있는 값 불러왔을 때 대응하기', () => {
  const invalidValues = ['true', 'false', 1, null, '', undefined];

  test.each(invalidValues)(
    '올바른 환영 메시지 출력 여부에 대응하는 유효하지 않은 값인 "%s"가 저장되어 있다면, false를 반환해야 한다.',
    async (value) => {
      jest
        .spyOn(browser.storage.local, 'get')
        .mockImplementation(() =>
          Promise.resolve({ shouldShowWelcomeMessage: value }),
        );

      expect(await fetchShouldShowWelcomeMessage()).toEqual(false);
    },
  );
});

describe('Test #3 - 환영 메시지 출력 여부 저장하기', () => {
  const values = [true, false];

  test.each(values)(
    '올바른 환영 메시지 출력 여부 값인 "%s"를 이용해 저장할 경우, 해당 값으로 그대로 저장되어야 한다.',
    async (value) => {
      jest.clearAllMocks();
      jest
        .spyOn(browser.storage.local, 'set')
        .mockImplementation(() => Promise.resolve());
      saveShouldShowWelcomeMessage(value);

      expect(browser.storage.local.set).toHaveBeenCalledWith({
        shouldShowWelcomeMessage: value,
      });
    },
  );
});

describe('Test #4 - 잘못된 환영 메시지 출력 여부 저장에 대응하기', () => {
  const invalidValues = ['true', 'false', 1, null, '', undefined];

  test.each(invalidValues)(
    '잘못된 환영 메시지 출력 여부 값인 "%s"를 이용해 저장할 경우, 저장이 진행되지 않아야 한다.',
    async (invalidValue) => {
      jest.clearAllMocks();
      jest
        .spyOn(browser.storage.local, 'set')
        .mockImplementation(() => Promise.resolve());
      saveShouldShowWelcomeMessage(invalidValue);

      expect(browser.storage.local.set).not.toHaveBeenCalled();
    },
  );
});
