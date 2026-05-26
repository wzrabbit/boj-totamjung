import { isSolvedAcSearchProblemResponse } from '@/domains/dataHandlers/validators/solvedAcSearchProblemResponseValidator';
import type { RandomDefenseResult } from '@/types/randomDefense';

const GENERIC_ERROR_KEY = 'errors.randomDefenseChoose.title' as const;

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
          errorMessage: { key: GENERIC_ERROR_KEY },
          errorDescriptions: [
            { key: 'errors.randomDefenseChoose.queryInvalid' },
            { key: 'errors.randomDefenseChoose.queryTooLong' },
          ],
        };
      }

      if (response.status === 403) {
        return {
          success: false,
          errorMessage: { key: GENERIC_ERROR_KEY },
          errorDescriptions: [
            { key: 'errors.randomDefenseChoose.ipBlocked' },
            { key: 'errors.randomDefenseChoose.tryDisableVpn' },
          ],
        };
      }

      if (response.status === 429) {
        return {
          success: false,
          errorMessage: { key: GENERIC_ERROR_KEY },
          errorDescriptions: [
            { key: 'errors.randomDefenseChoose.rateLimitedAdvice' },
            { key: 'errors.randomDefenseChoose.rateLimitedExplanation' },
            { key: 'errors.randomDefenseChoose.rateLimitedOtherCause' },
          ],
        };
      }

      if (response.status >= 500) {
        return {
          success: false,
          errorMessage: { key: GENERIC_ERROR_KEY },
          errorDescriptions: [
            { key: 'errors.randomDefenseChoose.serverErrorRetry' },
            { key: 'errors.randomDefenseChoose.serverErrorUnstable' },
          ],
        };
      }

      return {
        success: false,
        errorMessage: { key: GENERIC_ERROR_KEY },
        errorDescriptions: [
          { key: 'errors.randomDefenseChoose.unknownErrorIntro' },
          { key: 'errors.randomDefenseChoose.unknownErrorAdvice' },
          {
            key: 'errors.randomDefenseChoose.statusCodeInfo',
            substitutions: [String(response.status)],
          },
        ],
      };
    }

    const parsedResponse = await response.json();

    if (!isSolvedAcSearchProblemResponse(parsedResponse)) {
      return {
        success: false,
        errorMessage: { key: GENERIC_ERROR_KEY },
        errorDescriptions: [
          { key: 'errors.randomDefenseChoose.responseShapeMismatch' },
          { key: 'errors.randomDefenseChoose.responseShapeCause' },
          { key: 'errors.randomDefenseChoose.responseShapeReportPlease' },
        ],
      };
    }

    const { items } = parsedResponse;
    const count = items.length;

    if (count === 0) {
      return {
        success: false,
        errorMessage: { key: 'errors.randomDefenseChoose.noMatchingProblem' },
        errorDescriptions: [
          { key: 'errors.randomDefenseChoose.checkTypo' },
          { key: 'errors.randomDefenseChoose.broadenQuery' },
        ],
      };
    }

    if (count < problemCount) {
      return {
        success: false,
        errorMessage: {
          key: 'errors.randomDefenseChoose.notEnoughMatchingProblem',
        },
        errorDescriptions: [
          {
            key: 'errors.randomDefenseChoose.foundLessThanRequested',
            substitutions: [String(count), String(problemCount)],
          },
          {
            key: 'errors.randomDefenseChoose.broadenOrReduce',
            substitutions: [String(count)],
          },
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
      errorMessage: { key: GENERIC_ERROR_KEY },
      errorDescriptions: [
        { key: 'errors.randomDefenseChoose.networkUnstable' },
        { key: 'errors.randomDefenseChoose.serverErrorUnstable' },
      ],
    };
  }
};
