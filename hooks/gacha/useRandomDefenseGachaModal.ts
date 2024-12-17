import { COMMANDS } from '@/constants/commands';
import { isRandomDefenseResultResponse } from '@/domains/dataHandlers/validators/RandomDefenseResultResponseValidator';
import { decidePreviewCardRanksByProblemInfos } from '@/domains/gacha/decidePreviewCardRanksByProblemInfos';
import { useState, useCallback } from 'react';
import type { FilledSlot } from '@/types/randomDefense';
import type { ProblemInfo } from '@/types/gacha';

interface UseRandomDefenseGachaModalParams {
  slot: FilledSlot;
  problemCount: number;
}

type GachaStatus =
  | 'loading'
  | 'ready'
  | 'inProgress'
  | 'showingResult'
  | 'error';

const useRandomDefenseGachaModal = (
  params: UseRandomDefenseGachaModalParams,
) => {
  const { slot, problemCount } = params;
  const [gachaStatus, setGachaStatus] = useState<GachaStatus>('loading');
  const [problemInfos, setProblemInfos] = useState<ProblemInfo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorDescriptions, setErrorDescriptions] = useState<
    string | string[] | undefined
  >(undefined);

  const fetchRandomDefenseResult = useCallback(async () => {
    const randomDefenseResult = await chrome.runtime.sendMessage({
      command: COMMANDS.GET_RANDOM_DEFENSE_RESULT,
      query: slot.query,
      problemCount,
    });

    if (!isRandomDefenseResultResponse(randomDefenseResult)) {
      return;
    }

    if (!randomDefenseResult.success) {
      const { errorMessage, errorDescriptions } = randomDefenseResult;
      setErrorMessage(errorMessage);
      setErrorDescriptions(errorDescriptions);
      setGachaStatus('error');
      return;
    }

    const solvedAcSearchProblemInfos = randomDefenseResult.problemInfos;
    const problemInfos = solvedAcSearchProblemInfos.map(
      (searchProblemInfo) => ({
        problemId: searchProblemInfo.problemId,
        title: searchProblemInfo.titleKo,
        tier: searchProblemInfo.level,
      }),
    );
    setProblemInfos(problemInfos);
    setGachaStatus('ready');
  }, []);

  useEffect(() => {
    fetchRandomDefenseResult();
  }, [slot, problemCount]);

  return {
    gachaStatus,
    problemInfos,
    previewCardRanks: decidePreviewCardRanksByProblemInfos(
      problemInfos.length > 0 ? problemInfos : ['unrated'],
    ),
    errorMessage,
    errorDescriptions,
    setGachaStatus,
  };
};

export default useRandomDefenseGachaModal;
