import { isIsoString } from '@/types/typeGuards';
import {
  LegacyRandomDefenseHistoryInfo,
  RandomDefenseHistoryInfo,
} from '@/types/randomDefense';

export const convertLegacyToLatestRandomDefenseHistory = (
  legacyRandomDefenseHistory: LegacyRandomDefenseHistoryInfo[],
): RandomDefenseHistoryInfo[] => {
  const latestRandomDefenseHistory: RandomDefenseHistoryInfo[] = [];

  legacyRandomDefenseHistory.forEach(({ no, title, tier, date }) => {
    const isoStringifiedDate = new Date(date).toISOString();

    if (isIsoString(isoStringifiedDate)) {
      latestRandomDefenseHistory.push({
        problemId: no,
        title,
        tier,
        createdAt: isoStringifiedDate,
      });
    }
  });

  return latestRandomDefenseHistory;
};
