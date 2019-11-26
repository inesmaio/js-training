const { inputValidation } = require('./validateInput');
const { wordsToMCResult } = require('./wordsToCodeMorse');
const { mCTWordsResult } = require('./morseCodeToWords');

const userInput = process.argv[2].toLowerCase();
const validation = inputValidation(userInput);
const decode = validation ? mCTWordsResult(userInput) : wordsToMCResult(userInput);

console.log(decode);
