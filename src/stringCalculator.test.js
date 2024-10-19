const { add } = require('./stringCalculator');

test('empty string returns 0', () => {
    expect(add("")).toBe(0);
});
test('single number returns the number itself', () => {
  expect(add("1")).toBe(1);
});

test('two numbers return their sum', () => {
  expect(add("1,5")).toBe(6);
});
