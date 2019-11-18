const { morseCode } = require('../utils/variables')

// Transform the input into an Array
const arrWordsToCodeMorse = (input) => {
    const SEPARATOR = " ";
    const inputArr = input.split(SEPARATOR);
    const wordsArr = inputArr.map(element => {
       return (element.split(""));
    });
    return wordsArr;
}

// Decode input into morseCode
const wordsToMorseCode = (arr) => {
    let result = [];
    arr.map((elem) => {
        elem.forEach(element => {
          let letter = element;
          result = result + morseCode[letter] + " ";
        });
        result = result + "   "
    });
    return result
}

// Operations
const wordsToMCResult = (input) => {
  const arrWordsToCodeMorseResult = arrWordsToCodeMorse(input);
  const decodingResult = wordsToMorseCode(arrWordsToCodeMorseResult)
  return decodingResult;
}

module.exports = {
    wordsToMCResult
}
