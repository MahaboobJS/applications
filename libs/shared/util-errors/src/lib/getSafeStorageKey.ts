import { parseJson } from './parseJson';

export const getSafeStorageKey = <Data>(key: string): Data | undefined => {
  if (typeof window === 'undefined' || !window.localStorage) {
    console.log('localStorage not available');
    return;
  }

  const itemFromStorage = localStorage.getItem(key);

  if (!itemFromStorage) {
    console.log('Missing in LS:', key);
    return;
  }

  return parseJson(itemFromStorage);
};
