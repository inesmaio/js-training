const { InputError } = require('../utils/errors');

const inputVal = (input) => {
  const upperRegex = /[A-Z]/g;
  const numberRegex = /[0-9]/g;
  if (input.match(upperRegex)) {
    console.log(input.match(upperRegex));
    throw new InputError('Lowercase characters only');
  }
  if (input.match(numberRegex)) {
    console.log(input.match(numberRegex));
    throw new InputError('Characters only');
  }
};

module.exports = {
  inputVal,
};
