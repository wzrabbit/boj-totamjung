import { formatDate } from './formatDate';

const testcases: [Date, string][] = [
  [new Date('2022-03-18 00:00:00'), '2022-03-18 00:00:00'],
  [new Date('0948-01-17 12:34:56'), '0948-01-17 12:34:56'],
  [new Date('2048-12-09 23:07:05'), '2048-12-09 23:07:05'],
];

describe('#Test 1 - 날짜 포맷팅 테스트', () => {
  test.each(testcases)('%s 는 %s 로 포맷팅 되어야 한다.', (date, expected) => {
    expect(formatDate(date)).toEqual(expected);
  });
});
