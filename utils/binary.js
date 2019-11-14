// Convert to binary
// If input is a negative number it will return an array with the value of input.

const convertToBin = (input) => {
    let binary = [];
    let dividend = input;
    let remainder = 0;
    while (dividend >= 2) {
        remainder = dividend % 2;
        binary.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    binary.push(dividend);
    binary.reverse();
    return binary;
    
}

module.exports = {
    convertToBin,
}