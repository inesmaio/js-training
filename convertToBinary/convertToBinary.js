const { convertToBin } = require('../utils/binary');

// discard 0's that're not between 1's
const discardZeros = (binary) => {
  let binLen = 0;
  binLen = binary.length - 1;
  while (binary[binLen] === 0) {
    binary.pop();
    binLen--;
  }
  return binary;
};
// create an array of 0s
const zeroArr = (binary) => {
  const newBinary = binary.join('');
  const noZeroArr = newBinary.split('1');
  return noZeroArr;
};

function gap(input) {
  // Variables
  const binaryLenArr = [];

  // Operations
  const binResult = convertToBin(input);
  const discResult = discardZeros(binResult);
  const zeroResult = zeroArr(discResult);


  for (let i = 0; i < zeroResult.length; i++) {
    binaryLenArr.push(zeroResult[i].length);
  }
  return Math.max(...binaryLenArr);
}

module.exports = {
  gap,
};
