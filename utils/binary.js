// Convert to binary
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