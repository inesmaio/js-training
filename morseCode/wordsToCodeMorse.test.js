const { wordsToMCResult } = require('./wordsToCodeMorse');


test('Translate "I love you", into morse code should return "..   .-.. --- ...- .   -.-- --- ..-"', () => {
  expect(wordsToMCResult('i love you')).toBe('..   .-.. --- ...- .   -.-- --- ..-   ');
});

test('Translate "hey!", into morse code should return ".... . -.-- -·-·--"', () => {
  expect(wordsToMCResult('hey!')).toBe('.... . -.-- -.-.--   ');
});

test('Translate "Hey!", into morse code should return ".... . -.-- -·-·--"', () => {
  expect(wordsToMCResult('Hey!')).toBe('undefined . -.-- -.-.--   ');
});
