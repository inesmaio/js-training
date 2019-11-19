const { inputValidation } = require('./validateInput');

const userInput = process.argv[2];
console.log(inputValidation(userInput));
