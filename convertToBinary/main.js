const { inputValidation } = require('./validations');


const userInput = process.argv[2];

console.log(inputValidation(userInput));

