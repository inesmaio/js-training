const { inputValidation } = require('./validateInput');

test("Input 'i love you' should return '..   .-.. --- ...- .   -.-- --- ..-'", () => {
  expect(inputValidation('i love you')).toBe('..   .-.. --- ...- .   -.-- --- ..-   ');
});
test("Input '1 l0ve you' should return '.----   .-.. ----- ...- .   -.-- --- ..- '", () => {
  expect(inputValidation('1 l0ve you')).toBe('.----   .-.. ----- ...- .   -.-- --- ..-   ');
});
test("Input 'Hello!!' should return '.... . .-.. .-.. --- -.-.-- -.-.--'", () => {
  expect(inputValidation('Hello!!')).toBe('.... . .-.. .-.. --- -.-.-- -.-.--   ');
});
test("Input 'i' should return '..", () => {
  expect(inputValidation('i')).toBe('..   ');
});

test("Input: '.... .-.. -.-43-- -.-.' should return an InputError", () => {
  function getError() {
    inputValidation('.... .-.. -.-43-- -.-.');
  }
  expect(getError).toThrowError('Insert a valid Morse Code. No letter or numbers allowed.');
});

test("Input: '.... Hi .-.. -.--- -.-.' should return an InputError", () => {
  function getError() {
    inputValidation('.... Hi .-.. -.--- -.-.');
  }
  expect(getError).toThrowError('Insert a valid Morse Code. No letter or numbers allowed.');
});
test("Input: '....,.-.. -.--- -.-.' should return an InputError", () => {
  function getError() {
    inputValidation('....,.-.. -.--- -.-.');
  }
  expect(getError).toThrowError('Insert a valid Morse Code. No letter or numbers allowed.');
});
test("Input: '....!.-.. -.--- -.-.' should return an InputError", () => {
  function getError() {
    inputValidation('....!.-.. -.--- -.-.');
  }
  expect(getError).toThrowError('Insert a valid Morse Code. No letter or numbers allowed.');
});
test("Input: '....#.-.. -.--- -.-.' should return an InputError", () => {
  function getError() {
    inputValidation('....#.-.. -.--- -.-.');
  }
  expect(getError).toThrowError('Insert a valid Morse Code. No letter or numbers allowed.');
});

test("Input: '....%.-.. -.--- -.-.' should return an InputError", () => {
  function getError() {
    inputValidation('....%.-.. -.--- -.-.');
  }
  expect(getError).toThrowError('Insert a valid Morse Code. No letter or numbers allowed.');
});
