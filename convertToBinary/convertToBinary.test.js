const { gap } = require('./convertToBinary');

test('the longest gap of 899 binary returns 5', () => {
  expect(gap(899)).toBe(5);
});
test('the longest gap of 30 binary returns 0', () => {
  expect(gap(30)).toBe(0);
});
test('the longest gap of 433 binary returns 3', () => {
  expect(gap(433)).toBe(3);
});
test('the longest gap of 4332 binary returns 4', () => {
  expect(gap(4332)).toBe(4);
});
