import { FC } from 'react';
//Types and Interfaces
import { KeyboardItemProps } from 'types';
//Styles
import styles from './index.module.scss';
//Assets
import LightBackSpace from 'assets/light-backspace.png';
import DarkBackSpace from 'assets/dark-backspace.png';
//Constants
import { keyboardCharacters } from '../../constants';
//Utils
import { classNameGenerator } from 'utils';

const KeyboardItem: FC<KeyboardItemProps> = (props): JSX.Element => {
  const { item, onClick, backSpaceIcon, children, theme } = props;

  const onKeyboardItemClick = (): void => {
    onClick?.(item);
  };

  const classNames = classNameGenerator([
    theme === 'light' ? styles.lightTheme : styles.darkTheme,
    styles.KeyboardItem,
  ]);

  return (
    <div className={classNames} onClick={onKeyboardItemClick}>
      {item ? (
        <>
          {item === keyboardCharacters.Backspace ? (
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
