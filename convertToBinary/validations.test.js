const { valInput } = require('./validations');


test('the input has to be bigger than 0', () => {
  function getError() {
    valInput(0);
  }
  expect(getError).toThrowError(new Error('Please insert a number bigger than 0'));
});
test('the input has to be a positive number', () => {
  function getError() {
    valInput(-1);
  }
  expect(getError).toThrowError(new Error('Please insert a number bigger than 0'));
});

test('the input has to be an Integer', () => {
  function getError() {
    valInput(1.3);
  }
  expect(getError).toThrowError(new Error('Please insert an integer'));
});

test('the input cannot be a string', () => {
  function getError() {
    valInput('hello');
  }
  expect(getError).toThrowError(new Error('Please insert a number'));
});


test("Input = 20, shouldn't throw errors", () => {
  function notGetError() {
    valInput(20);
  }
  expect(notGetError).not.toThrowError();
});
test("Input = 7, shouldn't throw errors", () => {
  function notGetError() {
    valInput(7);
  }
  expect(notGetError).not.toThrowError();
});
test("Input = 2341231, shouldn't throw errors", () => {
  function notGetError() {
    valInput(2341231);
  }
  expect(notGetError).not.toThrowError();
});
