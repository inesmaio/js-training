const { InputError } = require('../utils/errors');
const { LETTERS } = require('../utils/variables');


const inputValidation = (input) => {
  let validation;
  const REGEX = /[.-]/gm;
  if (input.search(REGEX) >= 0) {
    if (input.search(LETTERS) >= 0) {
      throw new InputError('Insert a valid Morse Code. No letter or numbers allowed.');
    } else {
      validation = true;
      return validation;
    }
  } else {
    validation = false
    return validation;
  }
};

module.exports = {
  inputValidation,
};
