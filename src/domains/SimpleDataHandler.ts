import {
  SYNC_STORAGE_KEY,
  LOCAL_STORAGE_KEY,
  LEGACY_SYNC_STORAGE_KEY,
  LEGACY_LOCAL_STORAGE_KEY,
} from '~constants/commands';

/**
 * "SimpleDataHandler.ts"
 *
 * 간단한 종류의 데이터를 스토리지로부터 불러오거나 저장할 때 사용할 수 있는 함수들을 모아둔 모듈입니다.
 *
 * - 데이터가 잘못되었을 경우 일부분에 한해 복구해야하는 상황이라면 이 함수를 사용해서는 안 됩니다.
 * - 즉, 데이터가 올바른 경우 데이터 그대로를 반환하고, 데이터가 잘못되었을 경우 즉시 데이터 전체를 손실해도 괜찮은 데이터여야 합니다.
 */

type StorageKey =
  | keyof typeof SYNC_STORAGE_KEY
  | keyof typeof LOCAL_STORAGE_KEY;

type LegacyStorageKey =
  | keyof typeof LEGACY_SYNC_STORAGE_KEY
  | keyof typeof LEGACY_LOCAL_STORAGE_KEY;

interface FetchDataHandlerParams<Type> {
  storageType: 'sync' | 'local';
  key: StorageKey;
  data: unknown;
  defaultValue: Type;
  typeGuardFunction: (data: unknown) => data is Type;
}

interface FetchDataHandlerWithLegacyParams<Type extends string | number, LegacyType extends string | number>
  extends FetchDataHandlerParams<Type extends string | number> {
  legacyKey: LegacyStorageKey;
  legacyTypeGuardFunction: (data: unknown) => data is LegacyType;
  converterObject: Record<LegacyType, Type>;
}

interface SaveDataHandlerParams<Type> {
  storageType: 'sync' | 'local';
  key: StorageKey;
  data: unknown;
  typeGuardFunction: (data: unknown) => data is Type;
}

/**
 * 단일 데이터를 지정된 스토리지에서 불러와 반환합니다. 이 때, 유효하지 않은 데이터가 저장되어 있었다면 지정된 기본값을 반환합니다.
 */
export const fetchSimpleData = async <Type, LegacyType = undefined>(
  params:
    | FetchDataHandlerParams<Type>
    | FetchDataHandlerWithLegacyParams<Type, LegacyType>,
): Promise<Type> => {
  const { storageType, key, data, defaultValue, typeGuardFunction } = params;
  const storageLoadFunction =
    storageType === 'sync' ? chrome.storage.sync.get : chrome.storage.local.get;
  const storageKeys = 'legacyKey' in params ? [key, params.legacyKey] : key;

  const response = await storageLoadFunction(storageKeys);
  const isLegacy =
    'legacyKey' in params && params.legacyKey in response && !(key in response);

  if (isLegacy) {
    return 'legacyTypeGuardFunction' in params &&
      params.legacyTypeGuardFunction(data)
      ? data
      : defaultValue;
  }

  return typeGuardFunction(data) ? data : defaultValue;
};
