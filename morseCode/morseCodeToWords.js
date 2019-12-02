const { morseCode } = require('../utils/variables');

// Transform the input into an Array
const arrMorseCodeToWords = (input) => {
  const WORD_SEPARATOR = '   ';
  const LETTER_SEPARATOR = ' ';
  const inputArr = input.split(WORD_SEPARATOR).map((element) => (element.split(LETTER_SEPARATOR)));
  return inputArr;
};

// Transform Morse code into words
const morseCodeToWords = (arr) => {
  const MORSEKEYS = Object.keys(morseCode);
  const codeWord = arr.reduce((codeWordAcc, elem) => {
    const codeLetter = elem.reduce((codeLetterAcc, val) => `${codeLetterAcc}${MORSEKEYS.find((key) => morseCode[key] === val)}`, '');
    return `${codeWordAcc}${codeLetter} `;
  }, '');
  return codeWord;
};

// Operations
const mCTWordsResult = (input) => {
  const arrInput = arrMorseCodeToWords(input);
  const morseCodeToWordsResult = morseCodeToWords(arrInput);
  return morseCodeToWordsResult;
};

module.exports = {
  mCTWordsResult,
};
