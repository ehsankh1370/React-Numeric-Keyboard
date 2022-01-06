import React, { FC, useState } from 'react';
//Components
import KeyboardItem from '../keyboard-item';
//Constants
import { numbers, keyboardCharacters } from '../../constants';
//Styles
import styles from './assets/index.module.scss';
//Types
import { KeyboardContainerProps } from '../../types';

const KeyboardContainer: FC<KeyboardContainerProps> = ({
  onChange,
  isKeyboardDisabled,
  leftIcon,
  backSpaceIcon,
  theme,
}) => {
  const [value, setValue] = useState<string>('');

  const sliceValue = (value: string): string => value.slice(0, -1);

  const onKeyboardItemClick = (name: string): void => {
    if (!isKeyboardDisabled) {
      if (name === keyboardCharacters.Backspace) {
        onChange?.({ value: sliceValue(value), name });
        setValue(prevValue => sliceValue(prevValue));
      } else {
        onChange?.({ value: value + name, name });
        setValue(prevValue => prevValue + name);
      }
    }
  };

  return (
    <div data-keyboard-container className={styles.itemsContainer}>
      {isKeyboardDisabled && <div className={styles.disabledLayout} />}
      {numbers.map(
        (item: string): JSX.Element => (
          <KeyboardItem
            key={item}
            item={item}
            onClick={(): void => onKeyboardItemClick(item)}
            theme={theme}
          />
        )
      )}

      {leftIcon ? (
        <KeyboardItem theme={theme}>{leftIcon}</KeyboardItem>
      ) : (
        <span className={styles.emptyField} />
      )}
      <KeyboardItem
        item={keyboardCharacters['0']}
        onClick={(): void => onKeyboardItemClick(keyboardCharacters['0'])}
        theme={theme}
      />
      <KeyboardItem
        item={keyboardCharacters['Backspace']}
        onClick={(): void =>
          onKeyboardItemClick(keyboardCharacters['Backspace'])
        }
        backSpaceIcon={backSpaceIcon}
        theme={theme}
      />
    </div>
  );
};

export default KeyboardContainer;
