import React, { FC, useState } from 'react';
//Components
import KeyboardItem from '../keyboard-item';
//Constants
import { numbers, keyboardCharacters } from '../../constants';
//Assets
import BackSpace from '../../assets/backspace.png';
//Styles
import styles from './index.module.scss';
//Types
import { KeyboardContainerProps } from '../../types';
//Utils
import { classNameGenerator } from '../../utils';

const KeyboardContainer: FC<KeyboardContainerProps> = ({
  onChange,
  isKeyboardDisabled,
  leftIcon,
  backSpaceIcon,
  mode,
  containerClassName,
}) => {
  const [value, setValue] = useState<string>('');

  const sliceValue = (value: string): string => value.slice(0, -1);

  const onKeyboardItemClick = (name: string): void => {
    if (!isKeyboardDisabled) {
      if (name === keyboardCharacters.Backspace) {
        onChange?.({ value: sliceValue(value), name });
        setValue((prevValue) => sliceValue(prevValue));
      } else {
        onChange?.({ value: value + name, name });
        setValue((prevValue) => prevValue + name);
      }
    }
  };

  const classNames = classNameGenerator([
    styles.itemsContainer,
    mode === 'spaced' && styles.spacedMode,
    containerClassName,
  ]);

  return (
    <div data-keyboard-container className={classNames}>
      {isKeyboardDisabled && <div className={styles.disabledLayout} />}
      {numbers.map(
        (item: string): JSX.Element => (
          <KeyboardItem
            key={item}
            onClick={(): void => onKeyboardItemClick(item)}
            mode={mode}
          >
            <p className={styles.text}>{item}</p>
          </KeyboardItem>
        ),
      )}
      <KeyboardItem isActive={Boolean(leftIcon)} isNumber={false} mode={mode}>
        {leftIcon}
      </KeyboardItem>
      <KeyboardItem
        mode={mode}
        onClick={(): void => onKeyboardItemClick(keyboardCharacters['0'])}
      >
        <p className={styles.text}>{keyboardCharacters['0']}</p>
      </KeyboardItem>
      <KeyboardItem
        mode={mode}
        onClick={(): void =>
          onKeyboardItemClick(keyboardCharacters['Backspace'])
        }
        isNumber={false}
      >
        {backSpaceIcon || (
          <img src={BackSpace} alt={keyboardCharacters.Backspace} />
        )}
      </KeyboardItem>
    </div>
  );
};

export default KeyboardContainer;
