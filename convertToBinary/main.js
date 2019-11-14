const { gap } = require('./convertToBinary');
const { valInput } = require('./validations');

const userInput = Number(process.argv[2]);

const result = gap(userInput);

valInput(userInput);
console.log(result);
