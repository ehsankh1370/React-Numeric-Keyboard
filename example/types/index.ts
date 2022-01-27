import { CSSProperties } from 'react';

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
   * OPTIONAL: keyboard's mode *** Default is simple
   */
  mode?: 'simple' | 'spaced';
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
   * OPTIONAL: ClassName of the keyboard's items container
   */
  containerClassName?: string;
  /**
   * OPTIONAL: Locks keyboard and prevents touching and interacting
   */

  isKeyboardDisabled?: boolean;
  /**
   * OPTIONAL: Customize the keyboard's backspace icon  - a react element
   */
  backSpaceIcon?: React.ReactNode;
  /**
   * OPTIONAL: Placing a custom element in the left bottom corner of the keyboard
   */
  leftIcon?: React.ReactNode;
  /**
   * OPTIONAL: Style of the outer element of keyboard
   */
  style?: CSSProperties;
  /**
   * OPTIONAL: An optional header above the keyboard
   */
  header?: React.ReactNode;
  /**
   * Optional: whether fill the available space or not
   */
  fullWidth?: boolean;
}

export type KeyboardItemProps = Pick<KeyboardProps, 'mode'> & {
  onClick?: VoidFunction;
  isActive?: boolean;
  isNumber?: boolean;
};

export type KeyboardContainerProps = Pick<
  KeyboardProps,
  | 'isKeyboardDisabled'
  | 'onChange'
  | 'backSpaceIcon'
  | 'leftIcon'
  | 'mode'
  | 'containerClassName'
>;
