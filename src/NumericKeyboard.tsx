import React, {
  FC,
  useState,
  useEffect,
  CSSProperties,
  RefObject,
} from 'react';
//Components
import KeyboardContainer from './KeyboardContainer';
//Utils
import { classNameGenerator } from './utils';
//styles
import styles from './assets/index.module.scss';

export interface MainProps {
  isOpen: boolean;
  hasInitialTransition?: boolean;
  transitionTime?: number;
  className?: string;
  isKeyboardDisabled?: boolean;
  onChange?: ({ value, name }: { value: string; name: string }) => void;
  backSpaceIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  style?: CSSProperties;
  keyboardContainerClassName?: string;
  theme?: 'light' | 'dark';
  ref?: RefObject<HTMLDivElement>;
}

const DEFAULT_CLOSE_ANIMATION_TIME = 300;

const NumericKeyboard: FC<MainProps> = (props): JSX.Element | null => {
  const [isShow, setIsShow] = useState(true);
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

export { NumericKeyboard };
