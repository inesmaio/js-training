const { inputValidation } = require('./validateInput');

test("Input 'i love you' should return false", () => {
  expect(inputValidation('i love you')).toBe(false);
});
test("Input '1 l0ve you' should return false", () => {
  expect(inputValidation('1 l0ve you')).toBe(false);
});
test("Input 'Hello!!' should return false", () => {
  expect(inputValidation('Hello!!')).toBe(false);
});
test("Input 'i' should return '..", () => {
  expect(inputValidation('i')).toBe(false);
});
test("Input '..   .-.. --- ...- .   -.-- --- ..-' should return true", () => {
  expect(inputValidation('..   .-.. --- ...- .   -.-- --- ..-')).toBe(true);
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
