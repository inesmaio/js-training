const { getCount } = require('./counter');

test('Count vowels of: Ines', () => {
  expect(getCount('Ines')).toBe(2);
});
test('Count vowels of: bernardo', () => {
  expect(getCount('bernardo')).toBe(3);
});
test('Count vowels of: cl4ra', () => {
  expect(getCount('cl4ra')).toBe(1);
});
test('Count vowels of: Ca1o', () => {
  expect(getCount('Ca1o')).toBe(2);
});
test('Count vowels of: Clara Maio Cotrim', () => {
  expect(getCount('Clara Maio Cotrim')).toBe(7);
});
test('Count vowels of: Blbl', () => {
  expect(getCount('Blbl')).toBe(0);
});
test('Count vowels of: Olá!', () => {
  expect(getCount('Olá!')).toBe(2);
});
