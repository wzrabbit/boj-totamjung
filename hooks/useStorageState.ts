import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEY, COMMANDS } from '@/constants/commands';

interface BaseStorageState<T, U = T> {
  initialValue: U;
  storageKey: (typeof STORAGE_KEY)[keyof typeof STORAGE_KEY];
  validatorFunction: (value: unknown) => value is T;
}

interface DirectStorageState<T, U = T> extends BaseStorageState<T, U> {
  interactionMode: 'direct';
  fetchFunction: () => Promise<T>;
  saveFunction: (value: unknown) => Promise<unknown>;
}

interface MessageStorageState<T, U = T> extends BaseStorageState<T, U> {
  interactionMode: 'message';
  fetchMessage: (typeof COMMANDS)[keyof typeof COMMANDS];
  saveMessage: (typeof COMMANDS)[keyof typeof COMMANDS];
}

type ReturnTupleType<T, U = T> = [T | U, (data: T) => void, boolean];

export type UseStorageStateParams<T, U = T> =
  | DirectStorageState<T, U>
  | MessageStorageState<T, U>;

const useStorageState = <T, U>(
  params: UseStorageStateParams<T, U>,
): ReturnTupleType<T, U> => {
  const { interactionMode, initialValue, storageKey, validatorFunction } =
    params;
  const [data, setData] = useState<T | U>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  const updateData = useCallback(
    async (data: T) => {
      if (interactionMode === 'direct') {
        await params.saveFunction(data);
        return;
      }

      await browser.runtime.sendMessage(params.saveMessage, data);
    },
    [params],
  );

  const syncData = useCallback(
    (
      changes: { [key: string]: Browser.storage.StorageChange },
      areaName: string,
    ) => {
      if (areaName !== 'local' || !(storageKey in changes)) {
        return;
      }

      const { newValue } = changes[storageKey];

      if (validatorFunction(newValue)) {
        setData(newValue);
      }
    },
    [storageKey, validatorFunction],
  );

  useEffect(() => {
    const fetchData = async () => {
      if (interactionMode === 'direct') {
        const response = await params.fetchFunction();
        setData(response);
        setIsLoaded(true);
        return;
      }

      const response = await browser.runtime.sendMessage(
        params.fetchMessage,
        data,
      );

      if (params.validatorFunction(response)) {
        setData(response);
        setIsLoaded(true);
      }
    };

    fetchData();
    browser.storage.onChanged.addListener(syncData);

    return () => {
      browser.storage.onChanged.removeListener(syncData);
    };
  }, []);

  return [data, updateData, isLoaded];
};

export default useStorageState;
