import { COMMANDS } from '@/constants/commands';
import { isRandomDefenseResultResponse } from '@/domains/dataHandlers/validators/RandomDefenseResultResponseValidator';
import type { Slot, SlotNo } from '@/types/randomDefense';
import { useState } from 'react';

interface UseRandomDefenseGachaModalParams {
  slotNo: SlotNo;
  problemCount: number;
}

type GachaStatus = 'loading' | 'ready' | 'inProgress' | 'showingResult';

const useRandomDefenseGachaModal = (
  params: UseRandomDefenseGachaModalParams,
) => {
  const { slotNo, problemCount } = params;
  const [gachaStatus, setGachaStatus] = useState<GachaStatus>('loading');

  useEffect(() => {
    const fetchRandomDefenseResult = async () => {
      const randomDefenseResult = await chrome.runtime.sendMessage({
        command: COMMANDS.GET_RANDOM_DEFENSE_RESULT,
        problemCount,
      });

      if (!isRandomDefenseResultResponse(randomDefenseResult)) {
        return;
      }

      const { success } = randomDefenseResult;

      setGachaStatus('ready');
    };
  }, [slotNo, problemCount]);

  return {
    gachaStatus,
  };
};

export default useRandomDefenseGachaModal;
