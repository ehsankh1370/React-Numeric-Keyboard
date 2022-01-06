import React, { FC, useState } from 'react';
//Components
import KeyboardItem from '../keyboard-item';
//Constants
import { numbers, keyboardCharacters } from '../../constants';
//Utils
import { classNameGenerator } from '../../utils';
//Styles
import styles from './index.module.scss';
//Types and Intefaces
import { KeyboardContainerProps } from '../../types';

const KeyboardContainer: FC<KeyboardContainerProps> = props => {
  const {
    onChange,
    keyboardContainerClassName,
    isKeyboardDisabled,
    leftIcon,
    backSpaceIcon,
    theme,
  } = props;
  const [value, setValue] = useState<string>('');

  const onKeyboardItemClick = (name: string): void => {
    if (!isKeyboardDisabled) {
      if (name === keyboardCharacters.Backspace) {
        onChange?.({ value: value.slice(0, -1), name });
        setValue(prevValue => prevValue.slice(0, -1));
      } else {
        onChange?.({ value: value + name, name });
        setValue(prevValue => prevValue + name);
      }
    }
  };
  const keyboardContainer = classNameGenerator([
    styles.itemsContainer,
    keyboardContainerClassName,
  ]);

  return (
    <div className={keyboardContainer}>
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
        item={keyboardCharacters.zero}
        onClick={(): void => onKeyboardItemClick(keyboardCharacters.zero)}
        theme={theme}
      />
      <KeyboardItem
        item={keyboardCharacters.Backspace}
        onClick={(): void => onKeyboardItemClick(keyboardCharacters.Backspace)}
        backSpaceIcon={backSpaceIcon}
        theme={theme}
      />
    </div>
  );
};

export default KeyboardContainer;
