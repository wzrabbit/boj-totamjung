import { isSolvedAcSearchProblemResponse } from '@/domains/dataHandlers/validators/solvedAcSearchProblemResponseValidator';
import type { RandomDefenseResult } from '@/types/randomDefense';

export const getRandomDefenseResult = async (
  query: string,
  problemCount: number,
): Promise<RandomDefenseResult> => {
  try {
    const response = await fetch(
      `https://solved.ac/api/v3/search/problem?query=${encodeURIComponent(
        query,
      )}&sort=random`,
    );

    if (!response.ok) {
      if (response.status === 400) {
        return {
          success: false,
          errorMessage: '문제 추첨 중 에러가 발생했습니다.',
          errorDescriptions: [
            '추첨 생성 시 작성하신 쿼리가 잘못된 것 같습니다.',
            '추첨 생성 시 사용하셨던 쿼리가 과도하게 길 경우 이 문제가 발생할 수 있습니다.',
          ],
        };
      }

      if (response.status === 429) {
        return {
          success: false,
          errorMessage: '문제 추첨 중 에러가 발생했습니다.',
          errorDescriptions: [
            '짧은 시간에 너무 많은 횟수의 랜덤 디펜스를 진행하였습니다. 이 문제는 보통 수 분 후에 다시 시도할 경우 해결됩니다.',
            '이 문제는 솔브드 API에 짧은 시간 안에 너무 많은 횟수를 요청할 때 발생합니다.',
            '만약, 토탐정의 추첨 기능을 과도하게 많이 사용한 것이 아님에도 문제가 발생한다면, 토탐정의 다른 기능에서의 요청, 혹은 다른 확장 프로그램에서의 요청이 원인일 수도 있습니다.',
          ],
        };
      }

      if (response.status >= 500) {
        return {
          success: false,
          errorMessage: '문제 추첨 중 에러가 발생했습니다.',
          errorDescriptions: [
            '먼저, 새로고침 후 랜덤 디펜스를 다시 시도해 보세요.',
            '수차례 시도에도 불구하고 이 문제가 계속 발생한다면, 솔브드 API 서버가 불안정한 것이 원인일 수 있습니다. 이 경우 잠시 후 시도해 보시기 바랍니다.',
          ],
        };
      }

      return {
        success: false,
        errorMessage: '문제 추첨 중 에러가 발생했습니다.',
        errorDescriptions: [
          '죄송합니다만, 이 에러는 아직 토탐정이 모르는 에러입니다.',
          '새로고침 후 다시 시도, 쿼리가 올바르게 작성되었는 지 확인, 솔브드 API 서버가 안정적인지 확인하는 등의 방법을 시도해 보시기 바랍니다.',
          `Status Code는 ${response.status}입니다. 오류 제보 시 개발자에게 이 정보를 제공해 주세요.`,
        ],
      };
    }

    const parsedResponse = await response.json();

    if (!isSolvedAcSearchProblemResponse(parsedResponse)) {
      return {
        success: false,
        errorMessage: '문제 추첨 중 에러가 발생했습니다.',
        errorDescriptions: [
          'API에서 불러온 데이터와 토탐정에서 예상한 데이터의 형식이 불일치합니다.',
          '토탐정의 구현이 잘못되었을 확률이 높으며, 솔브드에서 API 형식을 바꾼 경우에도 이 문제가 발생할 수 있습니다.',
          '이 문제는 일시적일 문제일 확률이 낮습니다. 개발자에게 이 에러가 발생했음을 제보해주시기를 부탁드리겠습니다.',
        ],
      };
    }

    const { items } = parsedResponse;
    const count = items.length;

    if (count === 0) {
      return {
        success: false,
        errorMessage: '추첨 조건을 만족하는 문제가 없습니다.',
        errorDescriptions: [
          '쿼리에 오타가 있는 지 확인해 보세요.',
          '다른 주제의 쿼리나, 좀 더 넓은 검색범위의 쿼리를 사용해 보세요.',
        ],
      };
    }

    if (count < problemCount) {
      return {
        success: false,
        errorMessage: '추첨 조건을 만족하는 문제가 부족합니다.',
        errorDescriptions: [
          `검색된 문제 수가 총 ${count}문제로, 요청하신 ${problemCount}문제보다 더 적어 추첨을 진행하지 못했습니다.`,
          `더 넓은 검색범위의 쿼리를 사용해 보시거나, 추첨할 문제 수를 ${count}문제 이하로 줄여보세요.`,
        ],
      };
    }

    const problemInfos = items.slice(0, problemCount).map((item) => {
      const { problemId, titleKo, level, isLevelLocked } = item;

      return {
        problemId,
        title: titleKo,
        tier: level === 0 && isLevelLocked ? 31 : level,
      };
    });

    return {
      success: true,
      problemInfos,
    };
  } catch (error) {
    return {
      success: false,
      errorMessage: '문제 추첨 중 에러가 발생했습니다.',
      errorDescriptions: [
        '네트워크 연결이 불안정한 것이 원인일 수 있습니다. 네트워크 연결이 원활한지 확인해 주세요.',
        '네트워크에 문제가 없다면, 솔브드의 API 서버가 일시적으로 불안정한 것이 원인일 수 있습니다. 이 경우 잠시 후 다시 시도해보세요.',
      ],
    };
  }
};
