import { getTransparentHexColor } from './getTransparentHexColor';

describe('Test #1 - 색상 반환 테스트', () => {
  test.each([
    ['#ff0000', 1, '#ff0000ff'],
    ['#00ff00', 0.5, '#00ff0080'],
    ['#0000ff', 0, '#0000ff00'],
    ['#123456', 0.25, '#12345640'],
    ['#abcdef', 0.75, '#abcdefbf'],
  ])(
    '색상 코드가 %s이고 투명도가 %f일 경우 에러 없이 %s를 반환해야 한다.',
    (hex, opacity, expected) => {
      expect(getTransparentHexColor(hex, opacity)).toBe(expected);
    },
  );
});

describe('Test #2 - 예외 처리 테스트', () => {
  describe('잘못된 색상 포맷이 주어졌을 경우', () => {
    test.each([
      '#FFF',
      '#12345',
      '#1234567',
      '123456',
      '#ABCDEF',
      '#gggggg',
      'red',
    ])('색상 코드가 %s라면 관련 에러가 발생해야 한다.', (invalidHex) => {
      expect(() => getTransparentHexColor(invalidHex, 0.5)).toThrow(
        '잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.',
      );
    });
  });

  describe('잘못된 투명도가 주어졌을 경우', () => {
    test.each([-0.1, 1.1, 2, NaN])(
      '투명도가 %f라면 관련 에러가 발생해야 한다.',
      (invalidOpacity) => {
        expect(() => getTransparentHexColor('#123456', invalidOpacity)).toThrow(
          '투명도는 반드시 0 이상 1 이하의 수여야 합니다.',
        );
      },
    );
  });
});
