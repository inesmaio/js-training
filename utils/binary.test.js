const { convertToBin } = require("./binary")


test("decimal number: 4332 returns binary number: [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0]", () => {
    expect(convertToBin(4332)).toMatchObject([1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0])
})
test("decimal number: 899 returns binary number: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1]", () => {
    expect(convertToBin(899)).toMatchObject([1, 1, 1, 0, 0, 0, 0, 0, 1, 1])
})
test("decimal number: 30 returns binary number: [1, 1, 1, 1, 0]", () => {
    expect(convertToBin(30)).toMatchObject([1, 1, 1, 1, 0])
})
test("decimal number: 433 returns binary number: 110110001", () => {
    expect(convertToBin(433)).toMatchObject([1, 1, 0, 1, 1, 0, 0, 0, 1])
})
test("decimal number: -30 returns binary number: [-30]", () => {
    expect(convertToBin(-30)).toMatchObject([-30])
})