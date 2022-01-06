import { CSSProperties, RefObject } from 'react';

export interface KeyboardProps {
  /**
   * REQUIRED: Whether to show the keyboard or not
   */
  isOpen: boolean;
  /**
   * REQUIRED: Control the onChange event of Keyboard by providing the total value and the single character the user clicks on
   */
  onChange: ({ value, name }: { value: string; name: string }) => void;
  /**
   * OPTIONAL: whether keyboard's opening and closing has transition animation
   */
  hasTransition?: boolean;
  /**
   * OPTIONAL: Specify the keyboard transition's time . Works only if hasTransition prop provided
   */
  transitionTime?: number;
  /**
   * OPTIONAL: ClassName of the outer element of keyboard
   */
  className?: string;
  /**
   * OPTIONAL: Lock keyboard from touching and interacting
   */
  isKeyboardDisabled?: boolean;
  /**
   * OPTIONAL: Customize the keyboard's backspace icon  - a react element
   */
  backSpaceIcon?: React.ReactNode;
  /**
   * OPTIONAL: Placing a custom in the left bottom corner of the keyboard
   */
  leftIcon?: React.ReactNode;
  /**
   * OPTIONAL: Style of the outer element of keyboard
   */
  style?: CSSProperties;
  /**
   * OPTIONAL: Specify the theme of the keyboard which is light or dark
   */
  theme?: 'light' | 'dark';
  /**
   * OPTIONAL: The Ref of the keyboard
   */
  ref?: RefObject<HTMLDivElement>;
}

export type KeyboardItemProps = Pick<
  KeyboardProps,
  'backSpaceIcon' | 'theme'
> & {
  item?: string;
  onClick?: (value: string | undefined) => void;
};

export type KeyboardContainerProps = Pick<
  KeyboardProps,
  'isKeyboardDisabled' | 'onChange' | 'backSpaceIcon' | 'leftIcon' | 'theme'
>;
