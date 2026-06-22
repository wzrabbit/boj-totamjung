import { isSleepingNow, getMsUntilNextBoundary } from './useTotamjungSleeping';

const HOUR = 60 * 60 * 1000;

const setNow = (hour: number, minute = 0) => {
  jest.setSystemTime(new Date(2026, 5, 22, hour, minute, 0));
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('isSleepingNow - 수면 시간대(23:00 ~ 07:00) 판정', () => {
  test.each<[number, number, boolean]>([
    [22, 59, false],
    [23, 0, true],
    [3, 0, true],
    [6, 59, true],
    [7, 0, false],
    [12, 0, false],
  ])('%i시 %i분에는 isSleeping이 %s여야 한다', (hour, minute, expected) => {
    setNow(hour, minute);
    expect(isSleepingNow()).toBe(expected);
  });
});

describe('getMsUntilNextBoundary - 다음 경계(07:00 / 23:00)까지 남은 ms', () => {
  test.each<[number, number, number]>([
    [6, 0, 1 * HOUR],
    [8, 0, 15 * HOUR],
    [23, 30, 7.5 * HOUR],
    [7, 0, 16 * HOUR],
    [23, 0, 8 * HOUR],
  ])('%i시 %i분이면 %ims가 남아야 한다', (hour, minute, expected) => {
    setNow(hour, minute);
    expect(getMsUntilNextBoundary()).toBe(expected);
  });
});
