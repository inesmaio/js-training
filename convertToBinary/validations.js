const { gap } = require('./convertToBinary');

const valInput = (input) =>{
    if (isNaN(input) || input < 1 || !Number.isInteger(input)){
        input = "";
        throw "invalidInput";
        
    }
}
const inputValidation = (input) => {
    try{
        valInput(input);
        return gap(input)
    } catch {
    throw new Error ("Insert a Positive Number")
    }
}

module.exports = { 
    inputValidation 
}