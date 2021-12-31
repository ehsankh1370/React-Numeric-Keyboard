import { CSSProperties, RefObject } from 'react';

export interface KeyboardPressProps {
  value: string;
  name: string;
}
export type KeyboardCharacters =
  | ''
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'Backspace';

export interface MainProps {
  isOpen: boolean;
  hasInitialTransition?: boolean;
  transitionTime?: number;
  className?: string;
  isKeyboardDisabled?: boolean;
  onChange?: ({ value, name }: KeyboardPressProps) => void;
  backSpaceIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  style?: CSSProperties;
  keyboardContainerClassName?: string;
  theme?: 'light' | 'dark';
  ref?: RefObject<HTMLDivElement>;
}

export type KeyboardContainerProps = Pick<
  MainProps,
  | 'isKeyboardDisabled'
  | 'onChange'
  | 'keyboardContainerClassName'
  | 'backSpaceIcon'
  | 'leftIcon'
  | 'theme'
>;

export type KeyboardItemProps = Pick<MainProps, 'backSpaceIcon' | 'theme'> & {
  item?: string;
  onClick?: (value: string | undefined) => void;
};
