const { inputValidation  } = require("./validations");


test("the longest gap of 0 binary throws an error", () => {
    function getError () {
        inputValidation(0);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})
test("the longest gap of 0 binary throws an error", () => {
    function getError () {
        inputValidation(-1);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})

test("the longest gap of 0 binary throws an error", () => {
    function getError () {
        inputValidation(-1534);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})

test("the longest gap of 0 binary throws an error", () => {
    function getError () {
        inputValidation("hello");
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})


test("the longest gap of 0 binary throws an error", () => {
    expect(inputValidation(2017)).toBe(4);
})
test("the longest gap of 0 binary throws an error", () => {
    expect(inputValidation(20)).toBe(1);
})
test("the longest gap of 0 binary throws an error", () => {
    expect(inputValidation(7)).toBe(0);
})
test("the longest gap of 0 binary throws an error", () => {
    expect(inputValidation(2341231)).toBe(3);
})