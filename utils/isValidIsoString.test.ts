import { isValidIsoString } from './isValidIsoString';

const testcases = [
  ['2020-12-31T10:23:59.000Z', true],
  ['1089-01-03T23:59:00.986Z', true],
  ['0001-11-26T00:00:00.047Z', true],
  ['fooBar', false],
  ['2020.12.31 10:00:40', false],
  ['208-11-30T04:20:10.005Z', false],
  ['2008-4-16T3:50:10.30Z', false],
  ['2012-10-13T10:50:30', false],
  ['2000년 3월 7일 10시 35분 30초 300', false],
  ['2008-03-32T11:04:36.000Z', false],
  ['2008--03-31T11:04:36.000Z', false],
  ['2008-03-01', false],
  ['2008-03-01T10:26:50', false],
  ['2008-03-01T10:60:30.000Z', false],
  ['2008-03-01Z10:59:30.00T', false],
  ['2008-13-01T10:59:30.000Z', false],
  ['1969-12-31T23:59:59.898Z', true],
];

describe('#Test 1 - 날짜 유효성 판정 테스트', () => {
  test.each(testcases)(
    '%s 에 대한 ISO 문자열 판정 결과는 %s 여야 한다.',
    (dateString, expected) => {
      expect(isValidIsoString(dateString)).toBe(expected);
    },
  );
});
