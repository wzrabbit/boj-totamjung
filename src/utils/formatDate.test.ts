import type { IsoString } from '~types/utils';
import { formatDate } from './formatDate';

const testcases: [IsoString, string][] = [
  ['2022-03-18T00:00:00.000Z', '2022-03-18 00:00:00'],
  ['0948-01-17T12:34:56.987Z', '0948-01-17 12:34:56'],
  ['2048-12-09T23:07:05.401Z', '2048-12-09 23:07:05'],
];

describe('#Test 1 - 날짜 포맷팅 테스트', () => {
  test.each(testcases)('%s 는 %s 로 포맷팅 되어야 한다.', (date, expected) => {
    expect(formatDate(date)).toEqual(expected);
  });
});
