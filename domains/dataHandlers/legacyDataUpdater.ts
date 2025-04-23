import {
  convertV1ToV2OptionsData,
  convertV2ToLatestOptionsData,
} from '@/domains/dataHandlers/converters/legacyToLatestOptionsDataConverter';

const getDataVersion = (data: Record<string, unknown>) => {
  const { dataVersion } = data;

  if (dataVersion === 2 || dataVersion === 'v1.2') {
    return 2;
  }

  if (dataVersion === 3) {
    return 3;
  }

  return 1;
};

export const updateAllLegacyData = async () => {
  const [syncStorageData, localStorageData] = await Promise.all([
    browser.storage.sync.get(),
    browser.storage.local.get(),
  ]);

  const dataVersion = getDataVersion(localStorageData);

  if (dataVersion === 3) {
    return;
  }

  if (dataVersion === 1) {
    browser.storage.local.set(
      convertV2ToLatestOptionsData(
        convertV1ToV2OptionsData(syncStorageData, localStorageData),
      ),
    );
    return;
  }

  await browser.storage.local.set(
    convertV2ToLatestOptionsData(localStorageData),
  );
};
