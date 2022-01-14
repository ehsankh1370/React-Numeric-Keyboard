import React, { FC } from 'react';
//Utils
import { classNameGenerator } from '../../utils';
//Styles
import styles from './index.module.scss';
//Types
import { KeyboardItemProps } from '../../types';

const KeyboardItem: FC<KeyboardItemProps> = ({
  children,
  onClick,
  isActive = true,
  isNumber = true,
  mode,
}): JSX.Element => {
  const classNames = classNameGenerator([
    styles.KeyboardItem,
    !isActive && styles.deactiveMode,
    isNumber && styles.isNumber,
    mode === 'spaced' && isNumber && styles.spacedMode,
  ]);

  return (
    <div className={classNames} onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
};
export default KeyboardItem;
