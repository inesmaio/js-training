const { morseCode } = require('../utils/variables');

// Transform the input into an Array
const arrWordsToCodeMorse = (input) => {
  const SEPARATOR = ' ';
  const inputArr = input.split(SEPARATOR);
  const wordsArr = inputArr.map((element) => (element.split('')));
  return wordsArr;
};

// Decode input into morseCode

const wordsToMorseCode = (arr) => {
  const result = arr.reduce((wordAcc, element) => {
    const word = element.reduce((letterAcc, val) => `${letterAcc}${morseCode[val]} `, '');
    return `${wordAcc}${word}  `;
  }, '');
  return result;
};

// Operations
const wordsToMCResult = (input) => {
  const arrWordsToCodeMorseResult = arrWordsToCodeMorse(input);
  const decodingResult = wordsToMorseCode(arrWordsToCodeMorseResult);
  return decodingResult;
};

module.exports = {
  wordsToMCResult,
};
