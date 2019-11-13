const { convertToBin } = require("../utils/binary")

// discard 0's that're not between 1's  
const discardZeros = (binary) => {
    let binLen = 0;
    binLen = binary.length - 1;
    while (binary[binLen] === 0) {
        binary.pop();
        binLen--;
    }
    return binary;
}
// create an array of 0s
const zeroArr = (binary) => {
    binary = binary.join("");
    binary = binary.split("1");
    return binary
}

function gap(input) {
    // Variables
    let binaryLenArr = [];

    // Operations
    let binResult = convertToBin(input);
    let discResult = discardZeros(binResult);
    let zeroResult = zeroArr(discResult);
    

    for (var i = 0; i < zeroResult.length; i++) {
        binaryLenArr.push(zeroResult[i].length)
    }

    return Math.max(...binaryLenArr);
}

module.exports = {
    gap
}