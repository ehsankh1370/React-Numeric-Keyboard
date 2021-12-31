//fill array of numbers from 1 to 9
const numbers = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

const keyboardCharacters = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  Backspace: 'Backspace',
};

export { numbers, keyboardCharacters };
