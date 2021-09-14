import { useCallback, useState } from 'react';

type ClearValue = () => void;

type SetValue<T> = (value: T) => void;

type LocalStorageProps<T> = [T | undefined, SetValue<T>, ClearValue];

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): LocalStorageProps<T> {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);
      return storageValue
        ? JSON.parse(storageValue)
        : initialValue ?? undefined;
    } catch (error) {
      return initialValue ?? undefined;
    }
  });

  const clearValue = useCallback(() => {
    setState(undefined);
    localStorage.removeItem(key);
  }, [key]);

  const setValue = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
    [key],
  );

  return [state, setValue, clearValue];
}
