const { inputValidation  } = require("./validations");


test("the input has to be bigger than 0", () => {
    function getError () {
        inputValidation(0);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})
test("the input has to be a positive number", () => {
    function getError () {
        inputValidation(-1);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})

test("the input has to be an Integer", () => {
    function getError () {
        inputValidation(1.3);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})

test("the input cannot be a string", () => {
    function getError () {
        inputValidation("hello");
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})


test("Input = 20, shouldn't throw errors", () => {
    function getError () {
        inputValidation(20);
    }
    expect(getError).not.toThrowError();
})
test("Input = 7, shouldn't throw errors", () => {
    function getError () {
        inputValidation(7);
    }
    expect(getError).not.toThrowError();
})
test("Input = 2341231, shouldn't throw errors", () => {
    function getError () {
        inputValidation(2341231);
    }
    expect(getError).not.toThrowError();
})