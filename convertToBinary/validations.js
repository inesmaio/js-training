const valInput = (input) => {
  if (isNaN(input)) {
    throw new Error('Please insert a number');
  }
  if (input < 1) {
    throw new Error('Please insert a number bigger than 0');
  }
  if (!Number.isInteger(input)) {
    throw new Error('Please insert an integer');
  }
};

module.exports = {
  valInput,
};
