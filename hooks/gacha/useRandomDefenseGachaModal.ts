import { COMMANDS } from '@/constants/commands';
import { isRandomDefenseResultResponse } from '@/domains/dataHandlers/validators/RandomDefenseResultResponseValidator';
import { decidePreviewCardRanksByProblemInfos } from '@/domains/gacha/decidePreviewCardRanksByProblemInfos';
import { useState, useEffect, useCallback, useRef } from 'react';
import { chooseByProbability } from '@/utils/chooseByProbability';
import { pickIntegerInRange } from '@/utils/pickIntegerInRange';
import { cardSlideAudios, gachaAudio } from '@/assets/audio';
import type { FilledSlot } from '@/types/randomDefense';
import type { ProblemInfo } from '@/types/randomDefense';
import type { PreviewCardRanks } from '@/types/gacha';
import { isGachaOptionsResponse } from '@/domains/dataHandlers/validators/gachaOptionsValidator';
import { getProblemInfosInMarkdownText } from '@/domains/gacha/getProblemInfosInMarkdownText';

interface UseRandomDefenseGachaModalParams {
  open: boolean;
  slot: FilledSlot;
  problemCount: number;
}

type GachaStatus = 'loading' | 'ready' | 'showingResult' | 'error';

type CardBoxColor = 'black' | 'red' | 'green' | 'blue' | 'gold';

const cardBoxColorChoices: { choice: CardBoxColor; probability: number }[] = [
  {
    choice: 'black',
    probability: 0.24975,
  },
  {
    choice: 'red',
    probability: 0.24975,
  },
  {
    choice: 'green',
    probability: 0.24975,
  },
  {
    choice: 'blue',
    probability: 0.24975,
  },
  {
    choice: 'gold',
    probability: 0.001,
  },
];

const cardSlideAudioElements = cardSlideAudios.map((audio) => new Audio(audio));

const useRandomDefenseGachaModal = (
  params: UseRandomDefenseGachaModalParams,
) => {
  const { open, slot, problemCount } = params;
  const [gachaStatus, setGachaStatus] = useState<GachaStatus>('loading');
  const [problemInfos, setProblemInfos] = useState<ProblemInfo[]>([]);
  const [cardBoxColor, setCardBoxColor] = useState<CardBoxColor>('black');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorDescriptions, setErrorDescriptions] = useState<string | string[]>(
    [],
  );
  const [isTierHidden, setIsTierHidden] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const gachaAudioRef = useRef<HTMLAudioElement>(new Audio(gachaAudio));

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
      setErrorMessage(
        'API로부터 불러온 데이터에서 데이터 불일치가 발견되었습니다.',
      );
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

  const fetchGachaOptions = useCallback(async () => {
    const gachaOptions = await browser.runtime.sendMessage({
      command: COMMANDS.FETCH_GACHA_OPTIONS,
    });

    if (!isGachaOptionsResponse(gachaOptions)) {
      setErrorMessage('설정 데이터에서 불일치가 발견되었습니다.');
      setErrorDescriptions('개발자에게 이 문제가 발생했음을 알려주세요.');
      setGachaStatus('error');
      return;
    }

    const { isTierHidden, isAudioMuted } = gachaOptions;
    setIsTierHidden(isTierHidden);
    setIsAudioMuted(isAudioMuted);
  }, []);

  const restartGacha = () => {
    setGachaStatus('loading');
    setCardBoxColor(chooseByProbability(cardBoxColorChoices));
    fetchRandomDefenseResult();
  };

  const toggleIsTierHidden = () => {
    setIsTierHidden((prev) => !prev);
  };

  const toggleIsAudioMuted = () => {
    setIsAudioMuted((prev) => {
      const newMutedState = !prev;
      gachaAudioRef.current.muted = newMutedState;
      return newMutedState;
    });
  };

  const playCardSlideAudio = () => {
    if (!isAudioMuted) {
      cardSlideAudioElements[pickIntegerInRange(0, 3)].play();
    }
  };

  const playGachaAudio = () => {
    stopGachaAudio();
    gachaAudioRef.current.play();
  };

  const stopGachaAudio = () => {
    gachaAudioRef.current.pause();
    gachaAudioRef.current.currentTime = 0;
  };

  const copyProblemInfosMarkdownToClipboard = () => {
    navigator.clipboard.writeText(
      getProblemInfosInMarkdownText(slot.title, problemInfos),
    );
  };

  useEffect(() => {
    restartGacha();
  }, [open, slot, problemCount]);

  useEffect(() => {
    fetchGachaOptions();
  }, []);

  useEffect(() => {
    browser.runtime.sendMessage({
      command: COMMANDS.SAVE_GACHA_OPTIONS,
      isTierHidden,
      isAudioMuted,
    });
  }, [isTierHidden, isAudioMuted]);

  return {
    gachaStatus,
    problemInfos,
    cardBoxColor,
    previewCardRanks,
    errorMessage,
    errorDescriptions,
    isTierHidden,
    isAudioMuted,
    setGachaStatus,
    restartGacha,
    toggleIsTierHidden,
    toggleIsAudioMuted,
    playCardSlideAudio,
    playGachaAudio,
    stopGachaAudio,
    copyProblemInfosMarkdownToClipboard,
  };
};

export default useRandomDefenseGachaModal;
