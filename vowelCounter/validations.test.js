const { inputVal } = require('./validations');
const { InputError } = require('../utils/errors');

test('Input: olá', () => {
  function notAnError() {
    inputVal('olá');
  }
  expect(notAnError).not.toThrowError();
});
test('Input: *hello*', () => {
  function notAnError() {
    inputVal('*hello*');
  }
  expect(notAnError).not.toThrowError();
});
test('Input: 2017', () => {
  function anError() {
    inputVal('2017');
  }
  expect(anError).toThrowError(new InputError('Characters only'));
});
test('Input: John', () => {
  function anError() {
    inputVal('John');
  }
  expect(anError).toThrowError(new InputError('Lowercase characters only'));
});
test('Input: C4rs', () => {
  function anError() {
    inputVal('C4rs');
  }
  expect(anError).toThrowError(new InputError('Lowercase characters only'));
});
