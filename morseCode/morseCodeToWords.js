const { morseCode } = require('../utils/variables')

// Transform the input into an Array
const arrMorseCodeToWords = (input) => {
    const SEPARATOR = "   ";
    const inputArr = input.split(SEPARATOR);
    const coderMorseArr = inputArr.map(element => {
       return (element.split(" "));
    });
    return coderMorseArr;
}

// Transform Morse code into words
const morseCodeToWords = (arr) => {
    let result = [];
    const morseKeys = Object.keys(morseCode);
    arr.map((elem) => {
        elem.forEach((element) => {
            let morse = element
            result = result + morseKeys.find(element => morseCode[element] === morse)
        });
        result = result + " ";
    })
    return result;
}

// Operations
const mCTWordsResult = (input) => {
    const arrInput = arrMorseCodeToWords(input);
    const morseCodeToWordsResult =  morseCodeToWords(arrInput);
    return morseCodeToWordsResult
}

 module.exports = {
    mCTWordsResult
 }
