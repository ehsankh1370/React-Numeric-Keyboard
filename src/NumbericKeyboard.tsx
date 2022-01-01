import React, { FC, useState, useEffect } from 'react';
//Components
import KeyboardContainer from './KeyboardContainer';
//Utils
import { classNameGenerator } from './utils';
//types
import { MainProps } from './types';
//styles
import styles from './assets/index.module.scss';


const DEFAULT_CLOSE_ANIMATION_TIME = 300;

const NumericKeyboard: FC<MainProps> = (props): JSX.Element | null => {
  const {
    isOpen,
    className,
    hasInitialTransition = true,
    transitionTime = DEFAULT_CLOSE_ANIMATION_TIME,
    onChange,
    isKeyboardDisabled = false,
    backSpaceIcon,
    leftIcon,
    style,
    keyboardContainerClassName,
    theme = 'light',
    ref,
  } = props;
  const [isShow, setIsShow] = useState(true);

  const animationClassesGenerator = (): string | boolean => {
    if (hasInitialTransition) {
      return isOpen ? styles.startAnimation : styles.closeAnimation;
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
    if (!isOpen && hasInitialTransition) {
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

export default NumericKeyboard;
