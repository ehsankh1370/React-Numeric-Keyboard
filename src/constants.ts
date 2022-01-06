/**
 * fill array of numbers from 1 to 9
 */
export const numbers = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

/**
 * Keyboard possible characters
 */
export const keyboardCharacters = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  Backspace: 'Backspace',
};

/**
 * Default keyboard transition time
 */

export const DEFAULT_CLOSE_ANIMATION_TIME = 300;
