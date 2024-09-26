import { validateSlot } from './slotValidator';

describe('Test #1 - 올바른 데이터 판정 테스트', () => {
  const testcases = [
    ['골드 랜덤 디펜스', 'tier: g5..g1'],
    ['a'.repeat(30), 'a'.repeat(300)],
    ['', 'x'],
  ];

  test.each(testcases)(
    `아래의 데이터는 올바른 데이터로 판정되어야 한다.\n\t슬롯 이름: "%s"\n\t쿼리: "%s"\n`,
    (title, query) => {
      expect(validateSlot(title, query)).toEqual({
        isValid: true,
      });
    },
  );
});

describe('Test #2 - 잘못된 데이터 판정 테스트', () => {
  const testcases = {
    tooLongTitle: [
      [
        '이 문자열의 길이는 45입니다. xxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'tier: g5..g1',
      ],
      [
        '이 문자열의 길이는 31입니다. xxxxxxxxxxxxx',
        'solvable: true (#math|#implementation)',
      ],
      [
        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        '',
      ],
    ],
    emptyQuery: [
      ['테스트 연습', ''],
      ['', ''],
      ['쿼리에 공백은 빈 걸로 처리', '      '],
    ],
    tooLongQuery: [
      ['', 'a'.repeat(301)],
      ['a'.repeat(30), 'a'.repeat(301)],
    ],
  };
  test.each(testcases.tooLongTitle)(
    `아래의 데이터는 잘못된 데이터로 판정되어야 하며, 사유는 "슬롯 이름의 글자수가 너무 길어서" 여야 한다. 또한 슬롯 이름 입력창에 포커스를 주도록 데이터를 반환해야 한다.\n\t슬롯 이름: "%s"\n\t쿼리: "%s"`,
    (title, query) => {
      expect(validateSlot(title, query)).toEqual({
        isValid: false,
        errorMessage:
          '추첨 이름의 길이가 너무 길어요. 30자 이하가 되도록 줄여 주세요.',
        focusElementName: 'title',
      });
    },
  );

  test.each(testcases.emptyQuery)(
    `아래의 데이터는 잘못된 데이터로 판정되어야 하며, 사유는 "쿼리가 비어서" 여야 한다. 또한 쿼리 입력창에 포커스를 주도록 데이터를 반환해야 한다.\n\t슬롯 이름: "%s"\n\t쿼리: "%s"`,
    (title, query) => {
      expect(validateSlot(title, query)).toEqual({
        isValid: false,
        errorMessage: '쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.',
        focusElementName: 'query',
      });
    },
  );

  test.each(testcases.tooLongQuery)(
    `아래의 데이터는 잘못된 데이터로 판정되어야 하며, 사유는 "쿼리의 길이가 너무 길어서" 여야 한다. 또한 쿼리 입력창에 포커스를 주도록 데이터를 반환해야 한다.\n\t슬롯 이름: "%s"\n\t쿼리: "%s"`,
    (title, query) => {
      expect(validateSlot(title, query)).toEqual({
        isValid: false,
        errorMessage:
          '쿼리의 길이가 너무 길어요. 300자 이하가 되도록 줄여 주세요.',
        focusElementName: 'query',
      });
    },
  );
});
