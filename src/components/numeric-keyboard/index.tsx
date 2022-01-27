import React, { FC, useState, useEffect } from 'react';
//Components
import KeyboardContainer from '../keyboard-container';
//Utils
import { classNameGenerator, usePrevious } from '../../utils';
//styles
import styles from './index.module.scss';
//Types
import { KeyboardProps } from '../../types';
//Constants
import { DEFAULT_CLOSE_ANIMATION_TIME } from '../../constants';

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
  header,
  mode = 'simple',
  containerClassName,
  fullWidth = false,
}): JSX.Element | null => {
  const [isShow, setIsShow] = useState<boolean>(isOpen);
  const prevIsShow = usePrevious<boolean>(isShow);

  useEffect(() => {
    if (!isOpen && hasTransition) {
      let timer = setTimeout(() => {
        setIsShow(false);
      }, transitionTime);
      return () => {
        clearTimeout(timer);
        setIsShow(false);
      };
    } else {
      setIsShow(isOpen);
    }
  }, [isOpen]);

  const animationClassesGenerator = (): string | boolean => {
    if (hasTransition) {
      return isOpen
        ? styles.startAnimation
        : prevIsShow === true
        ? styles.closeAnimation
        : '';
    }
    return false;
  };
  const mainClassName = classNameGenerator([
    styles.main,
    animationClassesGenerator(),
    fullWidth && styles.fullWidth,
    className,
  ]);

  return isShow ? (
    <div
      className={mainClassName}
      style={{
        animationDuration: `${transitionTime / 1000}s`,
        ...style,
      }}
    >
      {header && header}

      <KeyboardContainer
        onChange={onChange}
        backSpaceIcon={backSpaceIcon}
        isKeyboardDisabled={isKeyboardDisabled}
        leftIcon={leftIcon}
        mode={mode}
        containerClassName={containerClassName}
      />
    </div>
  ) : null;
};

export { NumericKeyboard };
