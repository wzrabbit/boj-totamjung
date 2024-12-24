import { COMMANDS } from '@/constants/commands';
import { isRandomDefenseResultResponse } from '@/domains/dataHandlers/validators/RandomDefenseResultResponseValidator';
import { decidePreviewCardRanksByProblemInfos } from '@/domains/gacha/decidePreviewCardRanksByProblemInfos';
import { useState, useEffect, useCallback } from 'react';
import type { FilledSlot } from '@/types/randomDefense';
import type { ProblemInfo } from '@/types/randomDefense';
import type { PreviewCardRanks } from '@/types/gacha';

interface UseRandomDefenseGachaModalParams {
  open: boolean;
  slot: FilledSlot;
  problemCount: number;
}

type GachaStatus = 'loading' | 'ready' | 'showingResult' | 'error';

const useRandomDefenseGachaModal = (
  params: UseRandomDefenseGachaModalParams,
) => {
  const { open, slot, problemCount } = params;
  const [gachaStatus, setGachaStatus] = useState<GachaStatus>('loading');
  const [problemInfos, setProblemInfos] = useState<ProblemInfo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorDescriptions, setErrorDescriptions] = useState<string | string[]>(
    [],
  );
  const previewCardRanks: PreviewCardRanks =
    problemInfos.length > 0
      ? decidePreviewCardRanksByProblemInfos(problemInfos)
      : ['unrated'];

  const fetchRandomDefenseResult = useCallback(async () => {
    const randomDefenseResult = await browser.runtime.sendMessage({
      command: COMMANDS.GET_RANDOM_DEFENSE_RESULT,
      query: slot.query,
      problemCount,
    });

    if (!isRandomDefenseResultResponse(randomDefenseResult)) {
      setErrorMessage('데이터 불일치가 발견되었습니다.');
      setErrorDescriptions('개발자에게 이 문제가 발생했음을 알려주세요.');
      setGachaStatus('error');
      return;
    }

    if (!randomDefenseResult.success) {
      const { errorMessage, errorDescriptions } = randomDefenseResult;
      setErrorMessage(errorMessage);
      setErrorDescriptions(errorDescriptions ?? []);
      setGachaStatus('error');
      return;
    }

    const problemInfos = randomDefenseResult.problemInfos;
    setProblemInfos(problemInfos);
    setGachaStatus('ready');
  }, []);

  const restartGacha = () => {
    setGachaStatus('loading');
    fetchRandomDefenseResult();
  };

  useEffect(() => {
    restartGacha();
  }, [open, slot, problemCount]);

  return {
    gachaStatus,
    problemInfos,
    previewCardRanks,
    errorMessage,
    errorDescriptions,
    setGachaStatus,
    restartGacha,
  };
};

export default useRandomDefenseGachaModal;
