const { gap } = require('./convertToBinary');
const { valInput } = require('./validations');

const userInput = Number(process.argv[2]);

valInput(userInput);
const result = gap(userInput);
console.log(result);
