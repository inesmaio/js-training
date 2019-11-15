const { InputError } = require('../utils/errors');

const valInput = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new InputError('Please insert a number');
  }
  if (input < 1) {
    throw new InputError('Please insert a number bigger than 0');
  }
  if (!Number.isInteger(input)) {
    throw new InputError('Please insert an integer');
  }
};

module.exports = {
  valInput,
};
