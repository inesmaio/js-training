function gap(){
    const num = process.argv[2];
    let binary = [];
    let dividend = num;
    let remainder = 0;
    let binaryLenArr = [];
    let binLen = 0;
    while (dividend >= 2) {
        remainder = dividend % 2;
        binary.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    binary.push(dividend);
    binary.reverse();
    binLen = binary.length - 1;
    while (binary[binLen] === 0) {
        binary.pop();
        binLen--;
    } 
    binary = binary.join("");
    binary = binary.split("1");
    
    for (var i = 0; i < binary.length; i++){
        binaryLenArr.push(binary[i].length)
    }
    return Math.max(...binaryLenArr);
    
 }
 console.log(gap())