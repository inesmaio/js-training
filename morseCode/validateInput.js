const { wordsToMCResult } = require('./wordsToCodeMorse');
const { mCTWordsResult } = require('./morseCodeToWords');
const { InputError } = require('../utils/errors');
const { letters } = require('../utils/variables');


const inputValidation = (userInput) => {
  const regex = /[.-]/gm;
  const input = userInput.toLowerCase();
  if (userInput.search(regex) >= 0) {
    if (userInput.search(letters) >= 0) {
      throw new InputError('Insert a valid Morse Code. No letter or numbers allowed.');
    } else {
      return mCTWordsResult(input);
    }
  } else {
    return wordsToMCResult(input);
  }
};

module.exports = {
  inputValidation,
};
