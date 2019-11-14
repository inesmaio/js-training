const inputValidation = (input) => {
    try{
        if (isNaN(input) || input < 1 || !Number.isInteger(input)){
            throw "invalidInput";
        } 
    } catch {
        throw ("Insert a Positive Number")
    }
}
module.exports = { 
    inputValidation 
}