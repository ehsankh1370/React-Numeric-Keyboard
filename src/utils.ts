import { useEffect, useRef } from 'react';

export const classNameGenerator = (
  classes: Array<string | boolean | undefined>
): string => {
  const classNames = classes.filter(Boolean);
  return classNames.join(' ');
};

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
