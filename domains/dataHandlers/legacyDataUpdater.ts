import {
  convertV1ToV2OptionsData,
  convertV2ToV3OptionsData,
  convertV3ToV4OptionsData,
  convertV4ToLatestOptionsData,
} from '@/domains/dataHandlers/converters/legacyToLatestOptionsDataConverter';

const getDataVersion = (data: Record<string, unknown>) => {
  const { dataVersion } = data;

  if (dataVersion === 'v1.2') {
    return 2;
  }

  if (typeof dataVersion === 'number' && [2, 3, 4, 5].includes(dataVersion)) {
    return dataVersion;
  }

  return 1;
};

const converters = [
  convertV2ToV3OptionsData,
  convertV3ToV4OptionsData,
  convertV4ToLatestOptionsData,
];

export const updateAllLegacyData = async () => {
  const [syncStorageData, localStorageData] = await Promise.all([
    browser.storage.sync.get(),
    browser.storage.local.get(),
  ]);

  const dataVersion = getDataVersion(localStorageData);

  if (dataVersion === 5) {
    return;
  }

  const data =
    dataVersion === 1
      ? convertV1ToV2OptionsData(syncStorageData, localStorageData)
      : localStorageData;

  const result = converters
    .slice(dataVersion - 2)
    .reduce((acc, convert) => convert(acc), data);

  await browser.storage.local.set(result);
};
