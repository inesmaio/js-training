const { gap } = require("./convertToBinary");

test("the longest gap of 899 binary returns 5", () => {
    expect(gap(899)).toBe(5)
})
test("the longest gap of 0 binary returns 1", () => {
    expect(gap(123)).toBe(1)
})

test("the longest gap of 12333 binary returns 6", () => {
    expect(gap(12333)).toBe(6)
})
test("the longest gap of 1984 binary returns 0", () => {
    expect(gap(1984)).toBe(0)
})
test("the longest gap of 1987 binary returns 0", () => {
    expect(gap(1987)).toBe(4)
})
test("the longest gap of 2017 binary returns 0", () => {
    expect(gap(2017)).toBe(4)
})
