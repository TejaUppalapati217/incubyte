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

test('throws error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('handles new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

// Additional test cases
test('handles multiple numbers with new lines and commas', () => {
    expect(add("1\n2,3,4")).toBe(10);
});

test('returns 0 for empty input after custom delimiter', () => {
    expect(add("//;\n")).toBe(0);
});

test('supports multiple custom delimiters', () => {
    expect(add("//[;][%]\n1;2%3")).toBe(6);
});

test('throws error for a single negative number', () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed: -1");
});

test('throws error for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});



test('ignores numbers greater than 1000', () => {
    expect(add("1001,2")).toBe(2);
});
