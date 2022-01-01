import React, { FC } from 'react';
//Types and Interfaces
import { KeyboardItemProps } from './types';
//Constants
import { keyboardCharacters } from './constants';
//Utils
import { classNameGenerator } from './utils';
//Styles
import styles from './assets/index.module.scss';

const KeyboardItem: FC<KeyboardItemProps> = (props): JSX.Element => {
  const { item, onClick, backSpaceIcon, children, theme } = props;

  const onKeyboardItemClick = (): void => {
    onClick?.(item);
  };

  const classNames = classNameGenerator([
    theme === 'light'
      ? styles.lightThemeKeyboardItem
      : styles.darkThemeKeyboardItem,
    styles.KeyboardItem,
  ]);

  return (
    <div className={classNames} onClick={onKeyboardItemClick}>
      {item ? (
        <>
          {item === keyboardCharacters.Backspace ? (
            backSpaceIcon || (
              <img
                src={
                  theme === 'light'
                    ? './assets/light-backspace.png'
                    : './assets/dark-backspace.png'
                }
                alt={keyboardCharacters.Backspace}
              />
            )
          ) : (
            <p className={styles.text}>{item}</p>
          )}
        </>
      ) : (
        children
      )}
    </div>
  );
};
export default KeyboardItem;
