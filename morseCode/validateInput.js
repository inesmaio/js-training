const { wordsToMCResult } =  require("./wordsToCodeMorse");
const { mCTWordsResult } =  require("./morseCodeToWords");



const inputValidation = (userInput) => {
    const regex = "-" ;
    if (userInput.search(regex) > 0) {
        console.log (mCTWordsResult(userInput))
    } else {
        console.log (wordsToMCResult(userInput)) 
    }
}

module.exports = {
    inputValidation
}