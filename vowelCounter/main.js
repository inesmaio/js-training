const { getCount } = require('./counter');
const { inputVal } = require('./validations');

const userInput = process.argv[2];
inputVal(userInput);
const result = getCount(userInput);

console.log(result);
