const { inputVal } = require('./validations');
const { InputError } = require('../utils/errors');

test('Input: olá', () => {
  function notAnError() {
    inputVal('olá');
  }
  expect(notAnError).not.toThrowError();
});
test('Input: *clarinha*', () => {
  function notAnError() {
    inputVal('*clarinha*');
  }
  expect(notAnError).not.toThrowError();
});
test('Input: 2017', () => {
  function anError() {
    inputVal('2017');
  }
  expect(anError).toThrowError(new InputError('Characters only'));
});
test('Input: Bernardo', () => {
  function anError() {
    inputVal('Bernardo');
  }
  expect(anError).toThrowError(new InputError('Lowercase characters only'));
});
test('Input: In3s', () => {
  function anError() {
    inputVal('In3s');
  }
  expect(anError).toThrowError(new InputError('Lowercase characters only'));
});
