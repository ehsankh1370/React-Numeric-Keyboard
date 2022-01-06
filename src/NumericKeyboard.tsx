import React, { FC, useState, useEffect } from 'react';
//Components
import KeyboardContainer from './KeyboardContainer';
//Utils
import { classNameGenerator, usePrevious } from './utils';
//styles
import styles from './assets/index.module.scss';
//Types
import { KeyboardProps } from './types';
//Constants
import { DEFAULT_CLOSE_ANIMATION_TIME } from './constants';

const NumericKeyboard: FC<KeyboardProps> = ({
  isOpen,
  className,
  hasTransition = true,
  transitionTime = DEFAULT_CLOSE_ANIMATION_TIME,
  onChange,
  isKeyboardDisabled = false,
  backSpaceIcon,
  leftIcon,
  style,
  keyboardContainerClassName,
  theme = 'light',
  ref,
}): JSX.Element | null => {
  const [isShow, setIsShow] = useState<boolean>(isOpen);
  const prevIsOpen = usePrevious(isOpen);
  const animationClassesGenerator = (): string | boolean => {
    if (hasTransition) {
      return isOpen
        ? styles.startAnimation
        : prevIsOpen === true
        ? styles.closeAnimation
        : '';
    }
    return false;
  };
  const mainClassName = classNameGenerator([
    theme === 'light' ? styles.lightTheme : styles.darkTheme,
    styles.main,
    animationClassesGenerator(),
    className,
  ]);

  useEffect(() => {
    if (!isOpen && hasTransition) {
      let timer = setTimeout(() => {
        setIsShow(false);
      }, transitionTime);
      return clearTimeout(timer);
    } else {
      setIsShow(isOpen);
    }
  }, [isOpen]);

  return isShow ? (
    <div
      className={mainClassName}
      style={{
        animationDuration: `${transitionTime / 1000}s`,
        ...style,
      }}
      ref={ref}
    >
      <KeyboardContainer
        onChange={onChange}
        backSpaceIcon={backSpaceIcon}
        isKeyboardDisabled={isKeyboardDisabled}
        leftIcon={leftIcon}
        keyboardContainerClassName={keyboardContainerClassName}
        theme={theme}
      />
    </div>
  ) : null;
};

export { NumericKeyboard };
