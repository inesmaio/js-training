const { gap } = require("./convertToBinary");

test("the longest gap of 899 binary returns 5", () => {
    expect(gap(899)).toBe(5)
})
test("the longest gap of 30 binary returns 0", () => {
    expect(gap(30)).toBe(0)
})
test("the longest gap of 433 binary returns 3", () => {
    expect(gap(433)).toBe(3)
})
test("the longest gap of 4332 binary returns 4", () => {
    expect(gap(4332)).toBe(4)
})
test("the input cannot be a string", () => {
    function getError () {
        gap("hello");
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})
test("the input has to be a positive number", () => {
    function getError () {
        gap(-67);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})
test("the input has to be bigger than 0", () => {
    function getError () {
        gap(0);
    }
    expect(getError).toThrowError(new Error ("Insert a Positive Number"))
})