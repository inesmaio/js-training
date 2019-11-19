const { mCTWordsResult } = require('./morseCodeToWords');


test('Translate: ..   .-.. --- ...- .   -.-- --- ..-', () => {
  expect(mCTWordsResult('..   .-.. --- ...- .   -.-- --- ..-')).toBe('i love you ');
});
test('Translate: ..   .-.. --- ...- . a  -.-- --- ..-', () => {
  expect(mCTWordsResult('..   .-.. --- ...- . a  -.-- --- ..-')).toBe('i loveundefinedundefinedyou ');
});
