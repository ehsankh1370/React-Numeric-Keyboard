import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';
/**
 *
 * @param classes
 * @description Join multiple classNames
 * @returns {string}
 */
export const classNameGenerator = (
  classes: Array<string | boolean | undefined | null>
): string => {
  const classNames = classes.filter(Boolean);
  return classNames.join(' ');
};
/**
 *
 * @param value
 * @description Keeps the previous value
 * @returns {value}
 */
export function usePrevious<T>(
  value: T,
): MutableRefObject<T | undefined>['current'] {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
