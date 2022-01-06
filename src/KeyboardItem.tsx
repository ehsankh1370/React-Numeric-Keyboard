import React, { FC } from 'react';
//Constants
import { keyboardCharacters } from './constants';
//Utils
import { classNameGenerator } from './utils';
//Assets
import LightBackSpace from './assets/light-backspace.png';
import DarkBackSpace from './assets/dark-backspace.png';
//Styles
import styles from './assets/index.module.scss';
//Types
import { KeyboardItemProps } from './types';

const KeyboardItem: FC<KeyboardItemProps> = ({
  item,
  onClick,
  backSpaceIcon,
  children,
  theme,
}): JSX.Element => {
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
          {item === keyboardCharacters.[''] ? (
            backSpaceIcon || (
              <img
                src={theme === 'light' ? LightBackSpace : DarkBackSpace}
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
