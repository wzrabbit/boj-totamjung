import { isIsoString } from '@/types/typeGuards';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';
import type { V1 } from '@/types/legacyData';

export const convertV1ToLatestRandomDefenseHistory = (
  legacyRandomDefenseHistory: V1.RandomDefenseHistoryInfo[],
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
