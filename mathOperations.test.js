'use strict';

const { Test } = require('./testingFunctions');
const { 
  add,
  subtract,
  isPositiveNumber,
} = require('./ mathOperations');

Test.test('[add] shoud add correctly', () => {
  const result = add(3, 4);
  const expected = 7;
  Test.expect(result).toBe(expected);
});

Test.test('[subtract] shoud add correctly', () => {
  const result = subtract(5, 3);
  const expected = 2;
  Test.expect(result).toBe(expected);
});

Test.test('[isPositiveNumber] should return true if the given number is positive', () => {
  const positiveNumber = 10;
  const result = isPositiveNumber(positiveNumber);
  Test.expect(result).toBeTruthy();
});

Test.test('[isPositiveNumber] should return false if the given number is negative', () => {
  const negativeNumber = -10;
  const result = isPositiveNumber(negativeNumber);
  Test.expect(result).toBeFalsy();
});

Test.it('should throw an error', () => {
  const result = add(5, 2);
  const expected = 100;
  Test.expect(result).toBe(expected);
});