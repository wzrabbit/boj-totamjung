import {
  convertV1ToV2OptionsData,
  convertV2ToV3OptionsData,
  convertV3ToLatestOptionsData,
} from '@/domains/dataHandlers/converters/legacyToLatestOptionsDataConverter';

const getDataVersion = (data: Record<string, unknown>) => {
  const { dataVersion } = data;

  if (dataVersion === 2 || dataVersion === 'v1.2') {
    return 2;
  }

  if (dataVersion === 3) {
    return 3;
  }

  if (dataVersion === 4) {
    return 4;
  }

  return 1;
};

export const updateAllLegacyData = async () => {
  const [syncStorageData, localStorageData] = await Promise.all([
    browser.storage.sync.get(),
    browser.storage.local.get(),
  ]);

  const dataVersion = getDataVersion(localStorageData);

  if (dataVersion === 4) {
    return;
  }

  if (dataVersion === 1) {
    await browser.storage.local.set(
      convertV3ToLatestOptionsData(
        convertV2ToV3OptionsData(
          convertV1ToV2OptionsData(syncStorageData, localStorageData),
        ),
      ),
    );
    return;
  }

  if (dataVersion === 2) {
    await browser.storage.local.set(
      convertV3ToLatestOptionsData(convertV2ToV3OptionsData(localStorageData)),
    );
    return;
  }

  await browser.storage.local.set(
    convertV3ToLatestOptionsData(localStorageData),
  );
};
